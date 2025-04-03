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
    "p32Yt9fWw2XyFGp6TL1THipUTYv37haqyzBN2umUS7siGhPHf7PCooALVYzwQ8SMCR5J48TYWXcRoNHUdVakoiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLLgoMQ1UZLUam9xM6V5Pn9vgf1ZfbVCRjrDnkWw5k2zuruT6oopCy3TGMJ7D4c7F9TXaHsP8TgkpsQoHopDR1G",
  "key1": "32rTUrfFbAFTh7uDy8f3yACrKu1FHyXAxqzbZb164FQUURpnnZGXE8LgSNiBwui8H8da58DYdtamgdEsfPfKiAak",
  "key2": "4DwtatuQx8Yi7mFuBQufmB8iBXVVisdDBEsPdPY38MvsdWtfuSACKxCZndHaV8NpC9ZKRBbBPsUxRXeArABuMDbe",
  "key3": "3dmPKoLaTkoxrMSV5e1Smn7p96Zf1hQ2eZingjehTeoAEhFbh6iRk9TWKbPk8JiUraCijSSXWuAtVdruacqtS7g5",
  "key4": "2TUyEon9xT7gagzdN5uUSR6yi344r6yoSuHmZyLtKgAomsg9cbcBPsugCbubUqxbiE9kSaGUP6qRvW1eGH3U4bfQ",
  "key5": "65akyk2ZR2QeZ7Eg8cwX2jiUqoHBjXNcoUzJxJuZNHzyiGMin4kUQJACaKPAbDNNsZ2qe3KHHUJDV8n2xSDDeqa1",
  "key6": "5mddR4sQKrLQ3tBT8yLUBsaFcNwm6cXHKLQM3Vz2u2Ft4BJLyokeLtMPLD8EW8wV4eGRoraz6ALM6PkFBRQPq13t",
  "key7": "5jQWxC6pfvmcDFuDuVYyCn3PPtnL8fqznJaAEaDfxhm7xinmysUA1QFpzAXbLQLS8T9phFNXjmxz67GbcZ6nFZ1m",
  "key8": "5ojsTzK5cpsjQUFXwKZfAMTzQFjP1tiqVfLhrLHHUSx9WHiTtdWQMX97QvkWWpavg9jy67mket3KzwhZubx1vF1T",
  "key9": "2q64TRukAqHJjEVS9DsUSNUEqHgvCLzcRYaxhRrCuNfs7paCqkRKEHDXRsggtkfVApzVVifxxdERxmN6C5cCycdX",
  "key10": "JgHZwwPvhreALRB3UpDxkH4tBbyqYvJZPkfA6mYtGrsvNrHhj9Nyfizbr9DCWvHrYdkkaUJXwoP21y9C8FFj1JY",
  "key11": "3gVdXc4kmmCYS4GEB7J51wWJdyFbj7MGgaQU5RGNX1Zgmy4fLcqJtTb1NHmJ1xBY88CCBVpWNCRLB1TFPn2LUGfd",
  "key12": "5p9TUNr8gR1FBtTKwTzdnPPxRZuZmetwBBY2t5qvr73SPrBsbrMEcizz9QBkPG1m1xaemmAvgQMmbNmPc9qS8myS",
  "key13": "gpSD9Kyp7ZXy3Q15EnH2ckVX5QpL8RrdiB7m4uRJXPP4x567JkWXSbV2JPc9YuxCoMy9F5YqSFe55T5zY4oH6y4",
  "key14": "ndZvids1AaBkre6C6NPoFCoxK7mKAzfkzDQTbxUPcahdLcYnTrJ31p8xtw82RwVzLAtVYzXnisexFw7hCzJ41DA",
  "key15": "vgtadGQj6SDKCuikyidC9U72LjKwiP7KMAE3LDkFhpwkaXE2S6LAhAN1PBDg1Xmysu6t4LAijiksQAXBN1gdSoU",
  "key16": "4BfzZt6heZ2zCuCq7Y7eBrn5nGBN68JygL13s4zLKMhZRyNh3Zogd9i1fJXB9GpGBxY8EbEWe1hbtjMcs4mwsYGF",
  "key17": "5afQvCZjhKH6ywhHQxcYfeyhaLo4cLdc51fiwjZGmH4eWdJwQhkLjTJH187r55uqUY7Rec1cEWgj2AoMniQGqT3Y",
  "key18": "4GCGKMaowseLNC733c6e5WXYW3PJM9VL64d6j8Dnn5V8prmwLT7WeJuz1gpeidVepCoLEHQx67uqsPaB3h3f8CUo",
  "key19": "2vNkTgQ3uE7xgwKAwmUv8jTcukAgRXK5xjbKiz6V4NDce2UfCBBWKnkskdYFvKcGKXaQushZcQVcEZbQDH8V9hMv",
  "key20": "5QfzwKqjdqBykEHXbhB9jwNXZ9bXvc7NZemCDRAb3o2RHL3eTYX28czKYUPK4D9n9LfMFFLYHPbRrpssAURpcCHu",
  "key21": "2qD1UKVAnEsCX7EurWM8MuJCci7qzftRiUsMkBVCEkEPhYNJnQkav2FdshobLkyshuzo9PfG7YVZiMUNJJih8ubB",
  "key22": "2buLAiB6SaaEtT8zNrCvuVAXpngVvP36LgAqMWFPhyiVKSxokr2wCaoH6BVxQwzSZUqN8bo9iNpiRNrh2W7GioYC",
  "key23": "5xUF31bHTbQVE5HQ3rEkbihJpZY8mndaqFwjhxrS5bwKBLw6n6g1dkCkzaCygnHLuexoT4G8q7eEUuKZrUrMvGY",
  "key24": "4JEpZhaV5sNFN3tXgd5eYeSuPioWrufxerkcTpzn4JA7PwDrTQeyetf3Sv3V3FUazFRpS4sTxkz6dktDULStvWFj",
  "key25": "41GMdW1q8c18JnjRTUw8pLgryty7TYDD5NUvxNcB6ASv4GHgpd7qBdwfbjGTZAw5keAbkuFCkSwjHu7nW1k8W1hf",
  "key26": "63KXd5Jkoa1DgGbHL9sqzRm9zpmNJXaMFjtbVzWg4PTM8ciN2FLmWRxVwH1ik1inZEQdaXe315upAiJS1yNFdqZN",
  "key27": "36SXrcLZ52RWNeE2t8bktUXWe9ofZbTAqqgw4WxncmnDhxtbntk29meScm9S3wpFVp52BQAUDkJ14EYj7V7t8dYD",
  "key28": "2orzdkyYd5nAyo1McE6E8jBYK5Nh5gdxmiJj6SGPeVyS9AyemkZwv7XehDkoMzzoCTe8wM53Nq6B4c3SEFn2uvKp",
  "key29": "2wSGubqThi49FZma3gREDJ3EvWcQ3UgXdfBfgPRnZBLL52h1Y1VNTZw1kUrwv6Qna96FN5W6ZsuvPwtMmN7eZ84E",
  "key30": "imH1CtUiTq3TJ2eALii3WwKd2uy2PY8hNArb28cGxezc9yZqCSDK8Z4Mg6fipurvkfxQDu1yFaEdy1gSyLw1j5T",
  "key31": "59gHomEnGVJKSCU657MYJXMqyrShnmAhcbiGs4xsikb5PHpyq9UvSdUYoWvmmaqtQv5bohJgvnNcjjGtwAKAMuDY",
  "key32": "qwfbcEHN53j1eBebpRVKXJM7wjUSGZ9bmetN1C4ngexnGnQLNp9t7ZqYjXWb8vawhhXq2Vd8o4npnPav7DxMqry",
  "key33": "BhbNa4y1AZu1j515gdVWJymWFu2CdmLdMjXYjJk3oMV4pKhHqQQas6FewhgDEySH1qBqaHZahM3xfFpBWUzVqcE",
  "key34": "287rzLATairMr1tpZ5nJy7wrhntXZ8d97ao3E8dc29eskNx4YqJaQQ7Civuxb6GrGUW5DFHTUysyKRK2mGodqtEz",
  "key35": "142FiEDJZ34tXQHRMdEjBXt8PRjBFGc8LLi1zFGAQGkdumiZ91H9eCs9xJyjNnfGCdPid4a7FXeJHhRxe7Ny6Qr",
  "key36": "2gKahyAVN2FL3yNg9YJ1hEVeWeizYbZTZZjqQSftVF8CuiU4yUiRvS1JNCLT9YbWzmUozQHYmFPnXzpNTb95h4Dx"
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
