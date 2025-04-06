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
    "39Dt9MFGb8tSU57JtXrDuq6pankfwr2K6a7gyYG4f4JLk94zW2AimaUf1yFhpJ2B5MWnSxyEbkCFCwkcCpixqXJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62gNKByBasciWVoRZV5S5vJu8X7WF7hgPd5veD5Xsix9aZx213LcUhp4BWhZa41eSHmhq8xbCrd2hFdPqKfhEmPo",
  "key1": "2khgNEJY63xp5bRhkd9jXe1z9aoG5Hu59xy5EUWcbLT3dt4uKukb2VPfRBbvxFKomoGkpGxsbKuQEM2W6TNLk21G",
  "key2": "3rXm1eVJd2J7vc2yyjV2Bn2gtNdYTgsmEFRtpSH9sM3n1ovDT9DRHKw7bdJHJQARb2hPfzzpuAxFCge5aPsRfEi7",
  "key3": "2Usa21CSF2Yg24G3REAZprsCn6hdudvgZjW4jZeJhszjZhaz8UccyKppon92GvgrkfyZzxS4jEhmJzxADFwAU4MF",
  "key4": "2g5z6ngKTUfeKt4fbLmkHEsGUoUsWrcpKD9HXzGHH7FBwdC8WiYVdKwELtWJhKUMuQhDGAEHHF3UvHFECEVoJ5TP",
  "key5": "RUSMkCfnyKEZEouaWr1gx1p3qybQEC7tNZEwCiqgS78vY4oEsL2K6Qmti48gBh6FTUWN35QEJPT75tqy163JW5m",
  "key6": "2R4eWUstxBnbqSCAav2EKUHGayCHq1TU6SUjQRayekY6SvVQuunyLKuA4JRMA3G4aF1m3sUgK8pTGxnmArmcdm98",
  "key7": "3cYBbhbYkeVC7r6RcDutpmeWyM5YEwZNCZQ4Qo1BTL1eAeKEfJzvtLX1t2Vvjpu5k74zp8bKj9HPnQ1z1TgJGR7f",
  "key8": "2DLCsghbYEzsh3ZGtfu2TLYirmKDGVxAr1bLvYPpEy84KCpCTTz5GWTpN7M5Dze4jr3ATijqLhiqfvM8vQXBH4jd",
  "key9": "2HZgV9dRQs2tXyqbmAyZnNoBpbb8vqBaVrn8aeydrJJYsUKEJwjjurPpwHuMmb8kYaCfExEEuBbNKSLcpDKhAdoF",
  "key10": "tThx1maRytNFVQsz3koScNndCEW7TKxozChtEjmzXUQVL9jh5d1S7Mtq7LiYvC6jJaTpmqGUztdSYdadrWNFux2",
  "key11": "xzGxzWwQxxcZ1KGmfrchCjZxqzSNUhiYEgCjFXnhoyLoQmi4X5tgjSLDik9WetRgyaqsaA7MJsoDfYyVyywdSLM",
  "key12": "2bS4nM5ayupNKTJ2fim44aTiNTCj4vu2KHCYJGAbtPvUBQ9DFtiqWLRFzw5CFyPG4EbVrTxVDYLmfEJEzHrMtNMA",
  "key13": "55n3k2JCzaQU6JMP1KaMsR7GckTeRAFcuFN7ZF6JtuxpFxhPsdvGy7jQ7rj2rD9ZoqZEBSC2TtAZp7dQW7Vv3GJd",
  "key14": "nXidpBm7jqRXUjWPeHtdzshgvFre9RQLTBwoqsqbkzWvVpqQTtb4WymsJ6J2WibS6K2UkVfSiviqg6ZvoK1Bjmx",
  "key15": "59Cgx7WNGNWkuXAhxbzPtpZGnzCjDP1NfzEjw7HDFZTB5Cd5qNqXVpg7KtcBxAFZuEWbiTJWyvUNbg3tEPHuGdyY",
  "key16": "2LBg2cPKaErZo2Z9q4ShmZr6QyMLECvFdw3Nug2ZgzHoomtrXt6Q3uxGQbNGhCye1dN1aELvyy36RrZGr6qKoZEA",
  "key17": "3Vtcy8khR5qgNs4gAveLZREofLVKZm6zAZxW3LujaPcVQ3KgWBw2KBTKFS9K8ZSQpKmHJqoU2dUxiF2qBjR1PjCH",
  "key18": "4ur8fKKZPoirKxyrADA84q2rb9XzmEjhLmqVDhA231M99E44vvHfKMvtQd3qD6TYiMsWPG5dkGeQuyoqdMzwBgMh",
  "key19": "2YmieeoRYXNRLP3o72wRc8RaEJuTmTE89uHshcJjTByb9JLe87qGWXs3yUGpjmhjQSCjB75U1hmqP7jpgy2CR7EU",
  "key20": "Shm7A5rcMxNnjQUbaMYeXLrkXjxjMCMSYMHjd6HkVCHgGAqMKYPeUEnhsDCzEmutZGR8DWygB5jeYaGgugZ6kic",
  "key21": "DFQWtTdZ2j1uhPsfeDECtMbhiWUW7DRzNQYpg29R16yYgKnwJwCeWBH9ts18kC3h86SNe2ufPcMS3LiB1nq6VS9",
  "key22": "55ujdEworStNTYF9o4vq7q2eBpf9S6yrfV63QtHBePAX41k4QFewrjCniQQwb7EJZQSuRjRFkippiL2GK87i5S4U",
  "key23": "5LWyWH2buS76BmQe9L5RnPC9HmJFa1PGicAvrw99bWZkEE9NWgM2eeYPNFxxWNHvxLBua5XuNmwWzFYNuLJcVxrr",
  "key24": "Ph7DDqwjMkBMZJxt4ryL2z24RCtMSSfXVz94BG9DocQsKad7ycnJgkwjbUqYWMAkXpAkHsuKxxLAEZQxtH86zQ1",
  "key25": "5HPnxFfThh2HmerxKQwiLUeudkwz5hhpCcsynz6RVo5XTxPqr6YC86fo4G4Yry2MsaKxczCqdJdjN3zTqV6otawm",
  "key26": "2iBPgw6SG582eymw55xdVCkyVhRngqYcgmbRqdmvnaAiqwHqQc19FRHrjSwp1roWNEyQFVgFwPWSKTkF7LybmQ2w",
  "key27": "B5VTGpWrez8f8UtAaoao5j3gcnGrgWEHVWjvgF1gkwWxPv1mzGM6xGRoYXpnjTrZaap6e1j87wHPHsxqGZU8Yjf",
  "key28": "Gutdx266toYcVwsmAj3BnB7wB4TsaSYN1vuS3BRxuCNgAvepAGksyU2a4faBdB3x83TAoSPL8Qxjv4cVj7DRRWZ",
  "key29": "41qT1zYxx2C1N1atHLuE5w9R8Hm7KDpnFgjT6M5MNwiGJsKXG57sL8QYVsU8B15cTbQqq7mB7i3scmndrwypKDgV",
  "key30": "2chL9RvCBnT6ubjmNhvz2uy2S2Qz3WUN2ZQ5vBJCKrd1NtEvfxNJSYcwT816TjqZsdkX7W6Lsp8eU1ceyY2DtgbR",
  "key31": "4fKi8VrCM9pYirxaDEizDjKdPqiZvPwoH1i6YgXToyRutcMBvbEpmk2kF5fJCZCkW5TuP7em3JPGaFm3x55FB6GB",
  "key32": "2TpZh4VAJqFKwxrrUJ3ck2stK7cBRFbjPMCQJVffaQtjkoGSkgjiYX7gBvQG8vtni83u6JLFLaRCL2CVAXxH4tBM",
  "key33": "3wU3YXSuuDTSNDfhbdHmfb2HiGLy9mSeRGpDz2m28vCaPvGyWQSg8LyWUv3cn2i1EYy8uMgyoSk4hEYDW9cw5zPJ",
  "key34": "3YRwQHApaG9yUmBabyBRZbSeMzUnFkVn5mN2Wyd6NKfbG2CmsXjGbztNHCqpYRgKiNcUhtLnzUPPFNrpD4CsYbwE",
  "key35": "46DHMR9LEyoJNjEQfnK4ybLDvqB92xrYioCxGnnHYuP6UzzoWPM5DYLL2jnxSTvZgZS79e2UyaZpw4jwd6uurN4",
  "key36": "2WRKhTbYVB5znXokhTFaVEiqEauKCho5KoohTptHwnvHtzm6H1LSxzd3rdQiRu6MDu5Mf2db5JG1kmxgFTtBbcJc",
  "key37": "5YTkRy5wcTT6j4W4GXUKEdn3dyEk4E5L6bjbX9QnqsnXHQbRwMQSwhj258KLdXSfJgB8YqVHx1ZkncWtL2UFDmzo",
  "key38": "2JFXNYNQT3DMbR8wk1j4ehSETBMgPFby1HWBR2cTm6PrzKYiTQdvk2XLy6Gy7UzwVgxSrxi2Rqvsz4MSKdrRcdJk",
  "key39": "39REbhEmAeE1mgFfYH2cR8zYG3nZuuwYS9xkDXRrNAXGqUD1yNVL37qr32CG1qSf6Y75QrpVTmQYNfQwYt5jPtoD",
  "key40": "cvg4gfy7ENDyq6ZAZx9G89Bib3U413dUimCCSSHb2s3hnomfdJqF5nDEenXwJv9jsLZ55ZCjeucmopuVtUQHuRN",
  "key41": "AqkMwRt5CbnicRLJShPXLdUEz6VEm7eCRzfbEKs1hiM9WaVUX9BAevtLoXAD8G6LkqFLAibKFsSPykBtBZdjpyM",
  "key42": "3ZacYoQY157hhLj7oMBUDoJnDziLDYuj35TJEKctCMXa4i1eTikKCnbA6ECRxDMvyPUsiVWrRqPKMXr9xkHvsqcf"
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
