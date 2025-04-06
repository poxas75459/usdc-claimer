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
    "3jZ5ES4g9wWteg7fJVzQuBdspxD78XMLFVF91i4rAcT1ZBTTHRuzTR3scdDSzdukJFXFxFQUD3mA55Q3DDiF3BUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8rwtDZbwjUgkThrzRCsENWyTocQ5BULP3ZprbP6xNvSCjBovYeP3EdG2PMXaBoadNiyCUeViEwUrHSw8h8173Z",
  "key1": "ifDe9YA3KvkGKqdT6geZz9Yr5CRR76PEiuTnchwXTgs2EctmQMu3BzHTw1H1NiLjnboN7oys6uo64eyiarcj8p2",
  "key2": "TfKtDRXNsJK6oBkJgn5rByH3FUQZXm7m9Yci4M5tMhLW9cJB812dhrShSj8GU5wxUW6LdP9bvdy9QV6fN3aiMZg",
  "key3": "4TDxCUGmunbFpuC7Wcn5ycxHJAYK8Vv4yFYA71GufYME4pYbziRHa5ixN5m4yLY1D8LvHQYec61XNYK8HvLTiN4r",
  "key4": "3RPRpsxfjRetiZdvjrLyFj21DsGHBkg8amJ1rpqQiJhBbPBWUYDUjNj34pd9uKCCegXQbWbHZbcBpwG3Lmio8Pax",
  "key5": "24aBKLkmKpm7CFNaprWYTv6rQxSCVctNi6oMaWwbXMTQqWGLfXkNDn1wpujujEuMk56gcH5XL74nAmjCxQ6MQqbN",
  "key6": "3WfWH13eMNUf5MzYkr55GUvnsXE8ismM3F5orZrijCvBAQQYLE1KVKpp6aGdc89bar9sEp3x9W4aXGDiKiVeLTTx",
  "key7": "4hgpkvr4PwyiFykbjdKrg9Dhbn9kjTqY9AKCqvzsbEK2tBtMSaNHUCWbaVyVviv6XMxRuEMRpJy2X4a81VF2Kqpp",
  "key8": "2xhfER8pJ6Hsn7j7aoqaCNaEogD6pSfzP8HbtNR882VXZJjvoXQ3GjdvdPE6utBAeS2YLCg4CdY2uGiQmu1EDQng",
  "key9": "5LHxngZUkXzJiMzRzzxXjD4brDYmqCpokutYukpGMRMwthAQAEnqCUXNoXE84vHJcfdw1v5xHo75fgayaM99MwS5",
  "key10": "MxxqjnV7t2XCygSZ8ibQqB7cRm4rsv7CJbRVHBwAkNpJtCZHvVHzDMNA2dv1JN31vaeRzA4kH4eVF4DbfWrpy3E",
  "key11": "5WU5APtJLWzQyqyZFGqMYKYZ9zCd6B2vCKfAerMSvCWnprt2G1kXt4Ag4GKQMQBM38nmEKR93oi17g5CggM4hQiV",
  "key12": "4UsfujH31Ln69L4nw744SuvBCzt1PiWeVUUoj4NJyoCt6hEAczzf59rNEq4FDYKieFw18KWfcD5T9TueGkktavZQ",
  "key13": "2Q6RtjZnw2dL3sYEHdjhncoBawVAKGcM8ujfn51YNuxvPGDoSYnCkNvB2xPoyHBQT7eV6hb5Fh3urjELVbZ41DhT",
  "key14": "2BASYFkpTm5zmn2b1ZfuaARWnkcFPxRQ6R5ajuqn4SCRRTbmqs1nY6bLi9Yk1iUnW3fQGLcrYz9KVCY1GxaPpG8b",
  "key15": "4nx6Nop8aJSHHHDFNP2EpowNGDi4FxRtxGFqXRA8fG7MkWrzisBVXyLDkfAdEvAwD7mTdmiiQUqi4swBjCugv5zJ",
  "key16": "2jEddPFGGHQUHYDSpkURVxNPij9QZSLhNFdsSKE93Gb9aAw8bwg4cG24PbNRUBDweruN32uvDFz4Y2Kpytu95ud7",
  "key17": "4jKo1q95novczAY1LFo4a93LKbaZZfCvvZE3XAxMThVK4YxFvL1KuDNTmCSMQwWDjuxRM9CVi2sdhNexayBdrjAu",
  "key18": "2EKXzHDY4e1vPcWrZNJzWzQPbcC2Nnt7YwnQeuHmRR7ZRhLqYKo464Vx1cyU1AffTquwP55Qa6y5JNwNjqetiVAo",
  "key19": "24CrJQjvjSqyntawiqiokDNvw2aF25N2XLtRQ8ZwE2ZZerZD6yRvjT5d3i6hcyWg14CNyU5A2N8x4ycowoGLc25T",
  "key20": "TgEpwEB1bXhUFFVvyipRYFdPmubYXaZaJY492qXcTxGhCq29VoD6sf4U5cwT74m2tpEQ9b6U1VyytG5TPrtUW4J",
  "key21": "5LHFt5h9QKB9ExoiDVYiEijE1qpKmkoHkamKyrN4uniHsEsz99Ww5H256uXhFZJwPDVsYzfYDC5d9Fy9jvzMksZz",
  "key22": "2nihV3UgutDLgnFtEX8GUXYWEacUadt4SaUDeYdpbtRL6PZpFuT3PUEUoH24ueqdQvhhBCK4ohfYoDfNikC4c8Zv",
  "key23": "2dcqLpWCpG3WUFkhnvLXagbqfeFysTnCH25nP4VJuRQAVH8w3KynykpijqiTFaUGd6RGqrHkgHfLHch3PxhZX5B6",
  "key24": "5VAfNR8TsTdGQcukgzhhpgQ5uHbM2NhPSMwisRPJxTMs14dxhkLAbtP8XcqGV8qB4miwTvfFTg5VtwqmVYPj7bVT",
  "key25": "5YZ9azfj5E73aBNL2NSzZBzpsMSPZvHunPRc6GhvYUbxxyzxwAPLpygRUTCKhooj9wj1r5r2uXME95Cx2kNwNDg7",
  "key26": "3UNZ9pTDDvRxXmsV3Ceu7VcRFBtjCbBFW9cdTSjKKgR8xBU8ieKnMLdB5MDyeiwbpTxhgvUc7Bi3tGhzAgdxFnfq",
  "key27": "tmnK4ABqB8nzQ8BJX8gQDVmvRbPaXRPWmAtgspnHRPMQcV74yMksuv4H3yRJ2zqtTwspu5RkPrwkQNGHMbwon6e",
  "key28": "wCX5pMjXtBHqhaHGHSzkGLNES1hgTsyeDVpjzjBMdkyvkRiMWjdLec95KPXAjNSzYybKnnAqyrqjJQA6rTmYvuH",
  "key29": "2bGaPLToA7FvMUqCd65AWCNj6x1qbpD7naNAbJwS7GBqYmXsAmV2f6wm1WVNBb7fq7rQbAYgAuZTMVRwMePNRBcT",
  "key30": "3ztpB8Prik4KW9idUFSPZdsL6eaErc3fW9New6siLaTRBsdkc2ytqg3sbPdffc4cm9o4BSynexE2HAvqgmFMYBa6",
  "key31": "3QR3Ff1UWkJFjRGWQ344QsMN6KR8PBhpSbD7fpoTrCsKGXxY8HKkNZxtX9LNds65tWD9fFmuwq6YsKoGwtiBXc24",
  "key32": "5WNEBBMLckhcGkyW4vcgsR2CrFbj82aQeuUWRfQ6XcHSFUqNpK3FjMZSbRSXJjrjiqbPRhucwVDLtgfMvMFyVNao",
  "key33": "5TSL287VT8wHjpqsE8AKBo3Je3ZGuC2fwjQJR2XqgDwSrHLEMFRX2zU7gSVHymCsU6Dzb9Vsqq1J4kHNGynAShf9",
  "key34": "tHyYteWRgfY2PWA7HZjgXAz3XVriZQTCkYPj7N49tssujtFLq2zetBs949LM4xQngAu1xhbrgPSTT3SH8TDnnuM",
  "key35": "qBPc5dRFZMsKJBCfUH64Uki7WNpHUfgWd69BoJGrpbLy9DRT9CC9mt36LKW9yY5iKYWy46fxuB7DfWQzA3yEo3L",
  "key36": "TuwYYE1JE9uc3hQooaFZdKVGjNtsuUBUQPa4P7AiYv4mUytYo8jAQqboYKzTqWZLTZwQUdBbKuVieP5FP6xyBU1",
  "key37": "CzmcrRAi6wAQFJEvXtbpQ7huPSUk9Gv6Fs8o4uqsKWP17LNpwBBdUKEZ3wPRt7xgJ4cjUEh2euergx7BNvQS2FV",
  "key38": "Z8ZBWoFwyEELLJjBpB7F4X5GiBSPmV9hnxrdCMEnxjiPo9rYHhhWnBVYD1f56vpnJaY3ZTzYgGGqurso9sRNvNz",
  "key39": "4TL9jkxYoyCp6VEkCcaRdxdfVBjPpyzVvvszuSeckRYfWGPoRXq6w6FkKoquTCgmRtmddzKvTvpwZLHtYS7JsY9n"
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
