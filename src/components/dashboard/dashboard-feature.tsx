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
    "4A9TC9YrG9utBwGz72AtvnWgiZw868GrE6fccHTgzHwd2Vmon67P7caXayaNkKbgZks5EouhZaKdBspyFLni8KKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3833GKyJ28tRR8fyQkrak75tn1AkNbEB5khMqFsUgdqgtixB6mXFo9xK45nUGna8yEWPNZpLjbuiRyXeeDUu9z",
  "key1": "2P3htfRonMvBPohjRpHaLc84HcytBQyU65kgFuixdv37U1P8Nqp8967nvH1aszG2wBkHEn5NZ8vECNGyPgr99V3W",
  "key2": "4xSPqPx33xwXJvytPStwfAkTh1sCc7bz9diN8GJ3MwuCw1BonSKZMGcDoWdYC7AFf1nAh23bYgcyiwP3m1TFxrzT",
  "key3": "456nuHBfRFTQcFeBBttXFF523QRNteQLyosvSUqqcvN4bnZjYJexcPQenAWofDf63VeNtoDPNLkhiYfMhyGP9Ewu",
  "key4": "4HaqALQqBf3FTfUXXiGJjgtUgTXMC3rmNHqTmiiHxMR95cmvgwp3dX4KN6NLqCkYDXXAQbHmjY6Ve4Z7MpUXKASt",
  "key5": "66cDBcw1RgHqsRVsq1ETRerDZ7qhjUJYBG4JYvwrCJTSpJAzyHzw3Mxgkfg2gFW6Bpe56hk1CoBnwtLTUzmQMSxg",
  "key6": "5TTtFi2SZW3Sey6Gq6HxvydUGk5X85p39qCSXwWFHg9DNkC82z2i2s37peE946EkdbYVc5iJu29q4xu1e7zrGfKM",
  "key7": "3iBt4hMQQA1yHKK3WG1cMUp8eDVUK63NbGRYBBpqWjXATf7hnsBCQMiR7jq8viCUxQJg38ijG5j1nrmk2m3jhaGb",
  "key8": "5SZLfyujaaPRJXjuVbmS5Mz5ZHU4wqi4gzFLybgNVTZ7mM8LkhgjAwGCTNAq4vtP5MjeZhRPXz9PqiQuKnwsvnNg",
  "key9": "2JcuB7ChnjauQ1b1bc9CiTWa539bCWC9fp1bNCXy7W5ysi4FMXwkR8NEYxc611NCforGfDy3hMyKU3CQros3cKBA",
  "key10": "4v9GxWvoZVqKHz7qqMcU25bPyEq4hknPNw6SZGKkJr1ZXQUkpfhBPA3ZqaFLbCdZiFXznsW19AKNKccam7bcH9zx",
  "key11": "3bJHVt11Mgrk7L58kMLHXU7nWeEyNnY8RReFPFwuJhTbfQFS97LQG78hZiShtJJUYskppnx6bFV6drCQ1RKy9J17",
  "key12": "iZpPaYv7ivu1JWmaG3AkSF5ZkGpVZS9P427VBwjpRbrYvGZUrZBhFNZQXdYQNYjRe4dRLKfZPJhBNjXSWfJiNTL",
  "key13": "4Pk891Sh32gWYQwURgRFpJsqjEWuzA4SF1kJZ9Wr5R1ArMJwtewiHEFaxxkQHmKb3mUoNFZHw5vvSrb9bBreeLw4",
  "key14": "5MMB6nBsfsVh5xBrYDu9G3df4SY1mGf8nPm3o1wLmndNYEYFgjMUgSHiYegAhfsgqLiXwDd2ejX1ZyrX6KqsPx7y",
  "key15": "3hGXiXAiqY8WCAQeHeviT2GKyVLLL2nzRGPuFQgcwoSYZQZBSbxq6h8zgFbSiQUvmgWDSnt3AWY4uY1xKXYQkQcf",
  "key16": "2NFYBF9nYixaFiVDJYHmTvPm5EaqTJMZm1qoahb5JNkE6RussPJu3tjVFNAark1cLmBkpHeLBZDKtgQo3tbrGgDD",
  "key17": "4nE2pRbapVz6iXyixuwJhNZQXzms3zso6DPoXEfXJ8MemQ7JqrYdBYeHMPhppDh32FowHTHvDrKHb1Jrsyfhjayp",
  "key18": "4Ty4HX9oNgFuUvvRK7QdKpncoJAW8cVjovD29BvGxPFEyMnjwPss64xuRLoHJYz4eYqoZ1m3S4nSxhGiuPKNNNQC",
  "key19": "4M5iK9YoaN24ZHXRjwjMFfhH2exUpqQ8ri1d1BKroddZiuqtJDX6RkEhmi9dCnZswKaGMvmPPnMGCgEEXa36wCSt",
  "key20": "t3AprktsaEVczcC5UANdHXzNDeeQMjYbb7R81qxQdnVexCRUNXJy7FK6E1vFbpkAgemvUK47foYnsoQ41Qrxupk",
  "key21": "BKSgPD3RW8V4t6hU2pp5muvnats243XxWwvmtk1uhSu3iPxSgvxLcmXNnCwAdJd3q27e5SQ6shvpyNgroudS5Pc",
  "key22": "2VHoFcGSpqdm4bX6bchXdPUnC96XeTjMoScBckTAhLoxPeC2HpnLUCrwkrnp6XQjH2HhGYHfT1EaQ8bxKBZwpYh7",
  "key23": "62jfYg8ZJnwp8mu6zPegbFQmrPDHs4FNa94K5UVchYa4Mo5esdzugCw5Q7RLKSfe5wnDDqhP2XKb8B1gCgDSCGN3",
  "key24": "5xUiPWCXSHa6G6H9gZka7zkkS4zY7FV8RBNppDggKmzbyHNeft21jax5rLQh27zr5XPuUwBYcnbasEN1DmsRbGvU",
  "key25": "5SRwnWE5L9tewTDrZfWmB3BmohSbqjU8HBwvZtoLqBbxw75mpmMi8parSWZYi528RJieuiboPPV3Z9RE1oGbWNSB",
  "key26": "4QXVjK6URgQ1DDB3J6to9Hc7mSxyF3xra8FVAF95cSmmaxyzQ379z9GghiEwWNCG8HBmWf84cBQfW8ssQkEZnixY",
  "key27": "22X7o3NXn8DAbrN58ywhWCSEXHTGpVUb9g254ffXDGvWKBLLF56JvkrkyqLqCxcDR4nPYrHTArA39mSiGA2BJBQz",
  "key28": "2R7oVXrjdxsam4KeEsjMw24qoDRmLwQtnLA8mizC3WB6CPkLDU2nPHF8KZYcydyxEG2ciDEddHyjwpXQeaex87py",
  "key29": "gRAN7B1CoRyBd3CUdkyTiDw9zxVfqDZG3Dv3vpGREdUaFUhoVW9p3MdGpduQkSvHN7vgGFs7YEgcDjNaCAZ69ma",
  "key30": "5y5UnKpR4qjhBmPwArrnWdcrkhBou4mzKBN69ppd7JNeVERF7jF2nizQk7K8ZwkedCRLVvLgX2dMYofM3jqVSpfY",
  "key31": "3217haQmVokdaE2zewGHd4ywjLizR1BAoUJbBF3aqM7iPgQMySaS61XzvrcXFheDUnk4Gn9vz1zyaxi8fxXCoFYN",
  "key32": "5uNjs3jqxAG9zWixfvJ4QYMhVUk3F4B7BkE1iGqs3Cpmget85b7YYoPqWHz2rBM2CeV7xqSEH1EdGk2Sr1BFxt8M",
  "key33": "ANy2T1Xean43irUZMD5nXHjRg1FFYpE5abTuJvuAXh11HWoXKGdKFUTiVTmh2pwv3hh29qq9Etw6RRWH7kWd2g8",
  "key34": "64Wo1EviofkDJVpawaFe73etm41vJbRG9vL64XJi83hP7sq5rSvhztK35xUsLL52ZebbWBUL3C7cJxHkraMN97D6",
  "key35": "4VU95ZHBU5eCF5Z4ZMudw5aREAWGR96cBjmWJurULwRfZLZ8Umpw4di4MDdrQPtnB3mxXE5CfCGj2GFTspMG5gYW",
  "key36": "2th3Tx4VHUSAKSkQGhBoefVW4hf5RKawNUf2sHsK8nTSprZugMNm6oUwv4AdZ1U29TTZgo3Xn2dKBgsue4VoVk7g",
  "key37": "4iHBDXAinb4BZehFPqRxuELHwFYj7gt8xAJU8ZvMYssJsz7S2CEdTYktdvHEKm1fKAPTRfTGrJwc5ZCrRF7FKez",
  "key38": "4bh5HXi2ghLag5wcKabi35ySvdEizyCbCS4gDsTUxmF9xNqoAZKMQGK6sx8oSEFk8e1Eg2Bd5y3mpPd5jsFip1fJ",
  "key39": "5Co32tAhzGUy4woiPaUCekPvydDwbTVvifvoH7Cw22Ed7rhaHotNYChLCuSjJJ7Ki7GBaFxzUc5zejEHxuBPMF2p",
  "key40": "5AoM95nPceyQ17rzpAJGsWKeAD3PpKuqYkVsWaBdk8rsKDCjQjD8oPzYSxdhVm9xLYs8EyZnzRXoGWubp3Goizcw",
  "key41": "3zB6aZN6gfeH29o1mQc2NT4LTbFgqonzExzKP4zZjHSLWsWyh2Ku9W5MHFgMmABH2nmijhy9FsTqAP6D7oKa9RaS",
  "key42": "QScFf6xC8hoiunipPD4QzZULDYGQHjSvdi4F91yvezJiHBy7bRW4B9LHbvWwDLMRSULjsihSEyri4WcV8heaL1c",
  "key43": "5RrBGaZ4PXxXtVW15y7NSAQ1nQ6tKF5NhPm7u4a5CVenWpJfZN1s2WV58MteSwz8i6aL3GbV4bqnWXtw19wUf4b6",
  "key44": "2eX1SCoAa8aXXMc71EjqNXTQmJH74zMcZYwXqxwEGjKbQuaQj6pXCFTon3AyVWL5aPKAnP3VzD2dtgPRN89FgS3c",
  "key45": "4t523sC2Kp3hyEo69kNJeERoJdjLWNKwfQW9Mj5oQj61you9dejyQLar9ruSZq9yf6xk9TW8tpScVvqcutC8YFbB",
  "key46": "4DF714E8XbuDJfhw6du3LXXpZKt3KwzPXVhE69xcFnzaGCoquwG8eSB9LFCiN8ZnSzvQmxoqoVcvZKX1GQZCCpKS"
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
