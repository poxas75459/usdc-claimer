/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "tzcm3C8eo8Dz8gUcviSZgj4RgCyXQxDE87KrXB3dKF29UiU5TfMLiqu7ivtqhk2cQ9wtxR1LNcGTTbmv7xAXoPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDDU6bQ6J6h9Cc1CzFV7LdNxV4fkRhNvCrcahTuCbWpYx6Svqa9i1iuQpwFgLhSeSnny76saVT3tLm2DuGH5wkf",
  "key1": "4akRZvPDCnPH4dns9nc1939JiMihoYyTK2rPVdeTvfE5yZQ6YcEQEiydGSodgnQ769wnqYFFzbZFberCdzMoNVJP",
  "key2": "5C6ciRL52ou51YRir3Kpf8P4RThWddyDt7Xa2xN2XTxxaWE78XQk4VoXDRTwi9qFHjKWPSKLrQwwDNcSjEnq6vok",
  "key3": "4bo1ZP7ubMs7tye1eoVT4eHdvLbLjYguVv4LL2aLi19AKTMJF993Lf6GMbjUYAzo7QBssFS8EFVTqkr7J4k7EweG",
  "key4": "5ELEi8399oDSXwV4qsjTLFRPCGCAAbqBv9qK9pgfhJAbo8iuPPRjvhMdZvXv9RfAMQT9TTLm8b76Ydpu84yR1NKg",
  "key5": "599iJQhwxPKkxhqK1GMtXzqmwDgMQttL77Svb3mnx5GdiuzwkjKvWiUC6TNVzb7ayfxHBuvaoDXQVVUrAKgjkmvw",
  "key6": "4hj96YXXgrXXmgR8dYbthRXHRNvVGYr4jg5cgXRJbesqARqpGUSbTh64jzJuTLypW4yZRCsE3T1sxwRAyNZPe5qb",
  "key7": "4jZuNc4exuEWrYmTmC8Jq9EKRx3K4Zs1EEDjKBq2LiJahE1Z8fJA5WQCWcHrW6csvwraqmhBjKMCHZe8oFxgZ6ED",
  "key8": "2FMHv5rutcHqosohJptZFW2cVx1xVdmwVYKw6Xgcqwb3JTWecmzgTsFrsuJxH6v4L9YCi53sEvcSPPfwEC2mJyyx",
  "key9": "GdinJtXaUZQ7jRWGC79RDNPnwdtrw4Qt267a79EUVhoYJXQKQt1HupyxUYNAD9P6hF3gLotL57bjMkQ2uAMhaip",
  "key10": "dcvCjurA6ipD3CWWomcSPk8LewwTuE4wBfLBhoGJioNg5CEtidS849n1nnG4U9gZRe2dZLYktDoYKASykAwNgDd",
  "key11": "kmkiboCUVNuJWaBrNwGGLfcJY4aRoehPmD6rTYSyELdY7BvMcgLMSwhCHsJcmTm3u5Fv3kHAE6iEu1saQChxHkx",
  "key12": "2UqWGtFebQfMUyU6Gv2e4KYUgk9U3aWMvHogYghzeoRwjLrr8XV7rf8NEMrHQfPQkrcnsH6cNRRQexSTRoJ9Qhwi",
  "key13": "3BFgyLHVemdjQuNXm4nYXD7F6ucdC65grY9fjEbd4WooJcNUBXxXJy1KFmQHa1scPixkqXWNWUQ3bbfqCgx2C5Re",
  "key14": "5EaKTEPcXXDZLBFTzEJ5d9FP89nLxaoU9JysRBmvvt8bbcwnHVtshrbE8hiSKZ65p7uYhEo7we3UpXAUfqxZquYe",
  "key15": "2NmH9MZuXmEHpn5A9wQP2yUTwbJ975vG9qehTiEPVHqueEvYg18fpQizDAmiAZTRQLCxadLJRNKeNssUVo8ef324",
  "key16": "5K6RNN2VsUTzky9F8rMs1QUVpK5hmkPP62WnXD4rTp9atzrpa2cAnaKVarEd2b8nJtV9fzYZoFXLf2LGDwjTNvNU",
  "key17": "2sPAzwzawwKrTEF7gvcey1KsQvuRWqQ9KB73sft359zZzfMnhYHEz5CiyxJqWdpji3RRikR7niahGQyvJD1THPoo",
  "key18": "2JPm6Zn7fFf1zVxgoEdYomHDrdXAFDZ5FEqbbzfq8xdx5U5PwfnxqERccAgMmLEDSbuic33ZrzL2GS9qkKeZNukB",
  "key19": "3c7sWwrJ4W6jgTeG5oLho3y51dCC9ncTzQha2ACZaNs9Cvk54HXfHg7nFXNj7q1SXBFd4YKfV5yTpUhK5Zc1sYny",
  "key20": "5nBZq6Dna9hqKBW2Mtpxd5RLu42Hi53HRxGcW31KuPYQfJ2tcYhKVSW27YvHfkHJogRWdYd5YFoaknwq3D1rvRur",
  "key21": "4uaUaupCN5cckKhwrTX9hWtbxVrh2c58gQcdwfjqRXxPTVUKT9Yk1Dw69LHySzBVAduCZbF9mV3VTnfCS4uTbgSs",
  "key22": "3NzoAjmiBD6Jxaj9GEExcU5vGi1EWH5i1ZGtj6ABaMsZY9WqqwfYSVhDcx2YJbvFTuS8s9UecsnkswRe15d7Rs4G",
  "key23": "mMM5SyTQfixsn9BGdg13HMhXdhw3QJqCK8vMDExpedf4VVzmX7pY2YMpHFMPyETtfmKYGkdEN7erVyh6qbuQJdb",
  "key24": "49LER8jojrvqZqw9u6YafSwyuPf2gWo8bkmDefj6seQ7kWL3qmoMpVCvLxyc7FPtBEkG5dL8EwSWBTqJb81j9Lt1",
  "key25": "8EfQz6NvzB2yNNqN4gwXVmYvYgWzSXQKGuZeyW6gFbBSnCVNgwGJVtzfZGo8BH5P8QkU8aDWVyHHL5G1bwgi3Nz",
  "key26": "4vxwNiGg2qx5YZ2Bw26TpdFn7nm1cQ2uk3UH4ZGbbqkSNehKM4RrKgJGJHWbMCk9xdrisZBBJQppSvceoqhtjUCy",
  "key27": "4Y69a19ZqdtNqFvp1Wo6T7sZy4wRUx3Do2oeGuku54AcgnL43UnPcPveh2iesRNPyWoDMeCxUC5uF8nCkHeF1ZSA",
  "key28": "2xJ5qSVteg641a54oivWT11sBGnxcYNyC6L8zAW4zwxcpZS1Z9CdK2X6Qh3vLsfa6QppGokEyx8p6xUtdPvQRfyb",
  "key29": "2okzW8Sm2np69gPcF4DYa59H1bXbZdW5tosyurFa2wVnusLLohPp4C484U5A4w3C5tR2DE66m4J1Y1t8pzS43gTx",
  "key30": "jDvALctpwxbTbAycNmZhMLADRgisNNZZU5hYvDap4DK2Ukyw9goLLYgoDadrByN1rc531AKA1P7QSka9TykqbSr",
  "key31": "2wR1Nt1jfXZHhs7tNYmU5D3RRepw5sk33ytRdWdXvVDKWdNjiUocdFdgb3uce8G1ZV6Cxj4GNJQ2gS8Pe6wjjEWz",
  "key32": "5u63Vr9cWjPcMEbLDrFSWmtb2BERsQ5ghCtQRsSwr8wiNAaaYCA5DWTLJthqZTVWk1zbUXkks1PvngcPrvdi78eq",
  "key33": "3KV1qCgvb82aLjjkkQNdJxsLUNEXWi5zkVc9rD3oiDDAeNYJH12D6K5a9F12UJTY5Hevj5UH8yUuqM7chQzsxXmd",
  "key34": "4XVdwenFJ8zuYdnqeEQeAqfBWYE1psgteKbuurd9a7uc3zvTnYAAgZp4rGaCy2LZVCHi2427CRm5EHLwttkgLG94",
  "key35": "2H4ThQ8UFHDQUXVd1r1MyJjt2vcRVydJSqx2kc4pAujK6NN4VFv1edH4GvA4bXCzfxhaJzbGaHWdozxV8bnAPN6W",
  "key36": "5dE2FwMrgJWTD4PJW6nTbBHo2WmfYaKQ6Bu7bh3wvCesNdKUhQU5L4VcuGdW5fq4TqcatnMTqh2TzsZHXgFCWPUY",
  "key37": "4emffvR1ckYX46BQNLXVaVqGtR4ap8sYCnwiB3s2zsbnvtEDAcV4MmB244nG5yv58fRnX1ofNctDkiEnESA2YSP6",
  "key38": "5LhnAi36P5GgU93rKM3oRvSB6WW9SACXirphMQ1dmFmfgeeQ6k8Hs78Dz8x1kKms51L7FMm2uFFia38mua9jkCmD",
  "key39": "3M8whpDQY8baSdTeXgbKB6KAbjgWmfqoY7UjYzsLLSDPSiLyybVrwn4bdvKqCxfGuaCrcYTQPZ9cZuzgfJjMZoKo",
  "key40": "5745efbpTKqj1ySX1nz2LRMup443EH8sNcWz1zbZxbypy1p76gSeRfjyR5pZNKPvJo8dGqmadUJsCgqCRbjyHiSE",
  "key41": "5dPNmZCzuGrCZPM4PCpgSTQ8spHyjnpuqZtdzY4BqpEwKoF4z6R79CQxv9VGsqwXauFV2T8BbrP5jUFaFGJro1HY",
  "key42": "5tbfXMo1g9tFBJtbXxFXzCXpRUHjPZKgsVyPPsavSRmr7a9tBFjH2AfxxK9cLuq4Uzg62hYB7js4AwWJPhySMVpU",
  "key43": "4oK193VCi3TyCjGPcbKXbZpvYEQbPoPVKAnQv6CDNpfv5YFQmuRLTcaPUhourhC2yU6Nhr9mrw2eFxkLWNPVqwKS",
  "key44": "4r8LPYGrYa6QSUXPX5Ci27gxDGDXtFK4ZYH7LdTt9iy77D9nbLfQ4LkRKgctt8bLy3jVdE5qHoMQ3TZagCiqBHVB",
  "key45": "5psdk7SHd8jaEH1TYsnshzWpYQgVF5BA4a2iUC968rrZ1JSTa12fAoiC9QHKZfLGftRS5NKZBL6WQJWRQMnRcpvY",
  "key46": "4i3AE3qN8oVGBBoUQAE7N72aBVdrb7az19CpT7AypJ5qL5bqUXYhvF3AHkUTrdLXsj1icZxQA2kzjWPTcuXEj2mh",
  "key47": "2B8SsrfS9a3o6bqhH2fRrq5StcU98Wt7gCx73pxN1r6o8FMvQA5tow3sHQFwczBe3KjSUbpVnbyhCTJ2oNtUrYuz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
