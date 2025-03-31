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
    "5JGAnt1pepG4me2gVcYC9Dy6Joy5s4L1TsyxrfFNroLRQDQFUHUroEiyyFsHscrpzbzmcevvodJuAn7bbep4enUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpsi3qWkKwhseZPX91KrRgGqYrVZ3uVKodPNvHCMLT2vYyHBHD8gTWtdfZZnnLra6eGxA9kUuLbcWwFYhx8mnVV",
  "key1": "WN7kAqyPQ4HdbEzh5HqCvDeZf6843jQcgDgTkNzvG2Lz5pX7xKc3LJmxerfZEkRkx1TnkgyhP57UyeTG8iqoLGJ",
  "key2": "3ftesz94qM5gYkQK76HYGdvVXKJK71dVQ5c1CTkUojNcsuR5FxQckFiuhmcrW1VZzPPNdDAyajJ9xR4NCtmU4TCK",
  "key3": "3xHbSWBDGbNvDdpvUz1NrnTgBYNPasWJsmM7UJoxTuex4CFMkwuGVRrgkgCNBf3saf7eZ2sMjYpCBMjwuau5njGR",
  "key4": "2Gjo5HhZ4s2xAMGAw7RbB3Fpjq6DDkTvEe3dz2t36c5LwSkNYMosJ1q3gDeKp5VB7WF8xGbSJTq7i6HvQFWSRCHo",
  "key5": "2vz8ykrGzhmBbFT7PdVicrjHihBC75zqhfmS5sm4VMtw6kGooR4SHzD6GanzYT5PSr4XP6CL7LNk5B8Bt8zef5yp",
  "key6": "UpH6kuyC5nTKj2gdKq3XuHgMU4WmmGPNMYu9WbmRGdkRSek3qWgYGiTP1q529o4bcoGy3u9rZfFWYsEJyFsdyXR",
  "key7": "3doU8H2reihoHH5ck4DCpsoCeatXkYK7ohjyYJiTg1t7qQwXhsqqy9VdTxwzWyhGRD9RUN2eAgfYEdvKyNfFrNif",
  "key8": "349tVXKAZNiLdb3G84vvASNZADfdbTUq5M7SKiEbGJAbu4f7J1xWqnC4hjbfDyFUdwRnhykLLSsR1pg39Uv5TCwq",
  "key9": "4N7PhFF2K4uGJGRn9kAG56bx48qabSQXptfVAVB48XhLC92b6WHd9SS2SqvXDJXcJeNaXQuatFKgjfdzfxRUfRqb",
  "key10": "53m32g3LQdgwdU2Cz1k3SbFSHCk1DkXxskXnV8mmtGdE9RQCMr97gSMZzErKDRGT51Uzuhnv9AqzYbkVVhwPrhQD",
  "key11": "48RyCRb7dDXWFyUnZudjK4NT8gmQLxec5b7Qty4eqm6qxxZSUzVBv57wWMNLpbuVHLG55BhFMCuoZqGovvWVyBMn",
  "key12": "2au9BGyDe9HrxJ7Ujr1byPSK3vRfMDTp5FPVyKBF3vdTkWVUGXNYTfSWif7cQXKfssVj5RjrwaK3ThddsKj1JbRr",
  "key13": "61WTx82BQXJPtauyUwjVQnNKbV4FuTXBBXd7ziSCMf3tj5yE3uRjJy4Y7tGUyWYe3ii85eRH96mKUHnLBXNbvsYx",
  "key14": "24DsoakRRKWWNLUmL8A4cgTd7P3STLpNTJMmkYx2BwHaU5EmbGH3tvfSmji7fvsofumrtGeQiCUDg7r9u5qfJqfV",
  "key15": "2zkLWYA75ScuZ73f8M3B6PdtjqqgB5tHFc5oRpoxuWsZx2EHrVPkyMB9mpmeNcAT7zDz8PuVj2JquCH1iptBUxFq",
  "key16": "2fHZwkgGhbJiiXjVvydhuCKQeHe7P2JSBoFJPWsL1JV8YPkK4m9AQc1rs9gxd9RmF9PSHVxuzZoidunDpP7QmRZi",
  "key17": "iShUZa2guEJhyA8P6582hR1oJukNNrpQTZvZpZiwsDzvY3ueUPGXMowV8NuKkkTbBqbxLjGC2QtkNKserZnBhvV",
  "key18": "2xUfLP2jeY95QfJ3gRNAUvF11g9g8XEGT3obYAdBdcgPyMn67NKiuR2nJro8UCV3SxxUXeqNw67rBejoMDDMrpKz",
  "key19": "2GhMKboj6hPBk9VNAcJdXAFXbEdxZNr8cbcRUnoLvcAPkNPgW2PR8QyvFTgvzQQ6sMncHPxTv53j1r4gBvd87uNg",
  "key20": "2nixExV9GRmtqVyjnDJo5wPWbsbjGHvjBzdrDaVfEhmGDXMpzgnK1ykEwoA1JpeqeCs5V9mDY423AZJs8x6PjuQK",
  "key21": "5ztwuHQMCmpQ3hNsSrda4JDokFzHJHxje68hAdGjB1s9SP45H5CgxqH2z3tPJQvMruFhpKH5Z19J6SiAzqpQgyCm",
  "key22": "4Qmf5LbbS57sUjj79BQGFvDk5hFqWkAfNysSedw4C2j5fzGCpzQ8LNEDbh3tXAbJVWhT6FmYUE5XcxiiC6S147oB",
  "key23": "4iNNPqSZbJH5NsVNKbu5qzh98wpRi1U65Q2JwNCg9fZv9a6GBy1Kkho2P3mWinReX1fZr71Jg9ADAKu5QLs9FYjk",
  "key24": "4zzbi2u75HU6zSui56cs9Ls9AHHHmiELq6ZYEgQuxchGc2WeAsE2psy2ZMe7bEiJPM2aEHsBsbS9BpaJkaqx8F1V",
  "key25": "46kWc3kMpDz6cHRGRXwWmQkSbU5apYNGGSryiiTDuoKY7rTYwZEst4xyzY8z77uuVTqng1iqZFFvhLaqm7KN9UVR",
  "key26": "4LwY58B4CA5KSiCvZGrE3AQPCnbxcxkcEmedU4sCNAqG47P4iGW13GV4Rp3XpLTr63cyjEfjdHZ2TDmBg7wqcZaN",
  "key27": "vjhfm3MizW4dNHHis1TzuSJ2XE2HpdqsitjosS4eNuaKsyeM6YfG3EqvRDtzpYA8t7xfWyMeigAtJ2i211dfv7L",
  "key28": "baJdpoSbYgaqoa4fKvzZCL6vT5CbfHFfQpud4s2aQmAwfHYZHbXT6EnwA3P9k2X2XkXtpEYX5ewtyb8vGzgstL2",
  "key29": "2GnDVGNJL9s2xj5vx8cujmPaSfqGgtrgj71z1NqKzKeqE8hFsAtxrKJzqyUuaPmE91dDffpeN5tQC1Jd1z4TGYdk",
  "key30": "3b3j14tU7xDxrJXXsPC9zR2yinAnRA9G3qnY5pm9LpgKrECSiZmcgZWhWxzLh1gj7YyAzk5TLBhXEKAZ3ixDJyNp",
  "key31": "3CN5Dki5qoDcyuEYFdHXQd5JFmzjJ7CsXYHB7TpgSfyrDGH7BwnbHqNwg4S7hzdArc4itMjv2FrCUbLfmYYY3ito",
  "key32": "53T871nmzVjQv5p4Jr8L9da8GS1HkiVLQ2g9P7QUhxYxgXVknHoxKqsCvDQx9Ew627BEvzMj6ewnGrTWkrdRETBY",
  "key33": "3VJPz5Es2LCN4WfMG28jogfgJzMRCDvkwJxAXG4tcXS2LWJUA7evtYJAVvGF6rjNg9rm1tDMw6wHDJWmkN12hgYj",
  "key34": "41T6pSvR92fNk7rX7iywpwHdtG6rh6eg3KhZNM99TaQXE1HPmQkKA13NXZe5JXAwSZJWUdLfb26zPC3tGJTTnypJ",
  "key35": "jQULbgotpqTqUbCAN7LeMZ5BRsatJtsyteURgVf2gBSJPdUBLVJkXteu36Wh4RxC2NKCEWGhEsWuMMmACZDdeZ5",
  "key36": "4RWXoqPCfL4BvVuoc9uiJbkG9TWCnxUXWCRfJqArrJLgPLTc2pb5wuBWGpPhNsHL3RGNnLv1AjaTgvfBX9z3NJeK",
  "key37": "3Ag4LAumzYuPa4R5JEvsSi6Ex3UxA7ZtDs64hJnYu6vduvn1CCc943EoeRxdsuepJACVkCaxZaP1zgn1bMYNDjxS",
  "key38": "3qxuQYBKaLLmhzhE6ypw1eLmuG5AH4tceJ95wccCmas65pdadeCoguXpwsY5viS5r3rbtQxqkwEyCGwgzeGmmhyx",
  "key39": "nqvvGzvGZGy5U9GjDMuRxS8RfnH1Txfke7Ssrtxd9ZhDD24sV7GS1fFtLBaAMyibUUphKdJTHhkdJQye3dGW4tg",
  "key40": "AScukThGZ8tFEysn7GZVKLQzSnrFckSFwDiEgZFQJv5M9FZBELK2RtFV6rVn3N6EsMkfDXzBoTkPC9Tgj2cNK2n",
  "key41": "2JAa94YRZUgeNfZ6r2LJqtj18ooK3BXu5suVVfcsUptZ1dXqB7sVMb6ZZaH22ZDkiLTwqZZmfzym2N6PMQfLiZGv",
  "key42": "3857QLiWvDpecFZLMmSH5DtN3ufNQ6u863C9Kqxpo7g4i5dZkjez69jsR67mip57HpabFysZRunHjKkrT4uTbydn"
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
