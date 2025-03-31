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
    "6bXUrNv5AEqA6KJ7Nq3GduEcoRBZaa3XF7SRT9hLxLQxkw2hM7gKGVwiqmKM1XS5uzs2iA14eN3HzbKWgsdEmtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUGNvn9tBEfMAu7H87XBu1y9jbp2fm1znKSHifbDBrpKoZuAUt7LzB9YX4sSzetsK4FYFsn2uiPPXsdjZ92dtU6",
  "key1": "eLLZow9TT3Q1j923fDDcHJ3WrSkUvUTue3kcv9jx2L34jTpWQBQxoYBmHZDYCazQXN73WX7GGLpjGFZGaHVo1hs",
  "key2": "3SciQDDi9CdiQReJZnt3hTtsGEZBEYm2MnnBRL6WPbDmqaRYng64XbrP5LgUE4L3MRirX4ak1isSBiUwqgBHK7Ua",
  "key3": "5WRdoFpMcjyqbbQE13R8CWejwxF8RMsa2PEwPzQ1APPaLDPs8ocAj2t4YxV5spUnrUAH1fjyBvW1Njm1YfVwzEBu",
  "key4": "4GEFFmL6QEEW3RFBywhv8tHKngKpArUzqiKJMZGXJGkUtvPxZS6R3bb8WXizWtBYLs6puP3UoF45S4DYepcXwzpd",
  "key5": "2eWRQNzCK24rFMoXjRyphyRH7cLVHNGNq9DGvgZjUuCu4fXaFtktmJDQh1J4gaACJ9dgbSZUG2RgbQuR4AQ73E24",
  "key6": "wjDo2NRLVLaaGafqhMbbesHu2xeE2wBf5sqVa9QkaSY5XQBu3pXTqeksq6BZkUxmnB7QysR7szKtkA6PQYwHUPZ",
  "key7": "5qBHLDMHxgYNC679B65iCApZ3f2yWt2zW1YgjfDFg8exnjhojhLbhyHQF39kc8d1u8B6G6bBm2JSG9VBwdpr9bpF",
  "key8": "bVT88sC1nThzDnMwdU65hLw68agwBCoQExaFou4HL6YEKUFP4F3BbwzNqfWTxiMmSvtPsVc9efukvhkwgcasR49",
  "key9": "3PzrEc7ZSGwKZPJgBq2K7qF6j9PpB7nXuas1xVhmMUWrEjcmCm2XnXkFZ8NLqSGiu6mL6p1ibGtuLjjEYuH6mcCW",
  "key10": "2ng9cLVx1yFqBX79esWFCYR3bRvnkqsfThxg696bFVJoUw5qbnVE8uu4PSbdYiFzqNGS6LPfhhMPUTScNCpgyB4b",
  "key11": "5jLqT9MHwHWRNcDiNyPBkoeHjKDCFfuDYMXveCqKApJJvKgEK1ARy7kmBdSyHrzUTdAPedKxPYXd9yN2q7tAxpwZ",
  "key12": "5NzMrhQFLo7TombiBota1YrY2nHdULGHwQ4Rw7xETSib6fTEcuKttSyatmTAcMkykcyfJEkwAn4wDjQU1CuW1aGr",
  "key13": "4PCmBHkbJxerGmG6zX7J3t5f2zqyVT28KChj4DYYnRwyXoVyV9YuGvoogcPjbbCbe9MZErN99b8dCSuWppK9S1w",
  "key14": "2LoYiRRzNq9tX5zczkk2hCDVSKoQfen3yBixeuzRMgNs1NPGc2wg9f7euFMu4AbATwyLwDQvfG6um2aWsjJW9acW",
  "key15": "2KqtufgbDyo39DnFHaTZnDXuFBpvZPnFDh1ZQu3ucDkRAb6ryNKm1b9TcEAWRnsvw63HHRBeriJmXrXnbmoDqQRJ",
  "key16": "PZoDhZZy7BxwHbKtZDz6thvHYv3Ztg147aaUsktZU3F2EpNRKybRC6Dgp7s3kmHtoYQrkq5NbNc8WjXNqs6HwUM",
  "key17": "2PZZk829SwRqswKGqqK1iwtLLoVWjgvDsENaC6gTypuqZmbsBV8Nkzi8a8eg3Nga1ZRUsWqRXQbUXtju6ouMDQhd",
  "key18": "ySnc6dPLkuMsgBzoRTutje2qdA9tSRA36vDGAmz1Etuu2DrygMVXmGuMyRtXqBUvr686fT43LCuuaUTx8puqZN6",
  "key19": "39P9xcHVoibhcVfu92HhktKZuBWnUQD7Np7Rt5DJ2gEoV5UzsggQZy1VRzJEBCBgo8Ks8JFWGmJDwxWKHfueYU9M",
  "key20": "5q3b5B2Fyb5ZCjWz8gS2xyP1xMKybfAa6FYHUmcpznNHRm2Bw8xoKTq9YwuunXSsWPDP6p7NafGx7USUpW2vJ3v3",
  "key21": "29kTv5drqh2W94KXpyzhLXicf8YPE6E9ai2BoWxm71WfHdfDKx5zY641rsSj5EzGUfMTjNSRr4nPcz7WBU3orepP",
  "key22": "5WwFCTydfPQw18z1EQNM5nF9mvJRJYNRiBA8NSTazi2emPCu9RY7HMHnxhUfLC51Y7sAF6Q4AFEDpHpVxrgKc56",
  "key23": "4bAd34KD7RL2ZAmc5dTYCsjSSqgBpjouVSrWfJTo6p8fHbUMSBonzktvaMJ85KAf3EejtQ7295YdLWTzmjq9Vyuw",
  "key24": "5ivN9Bk1WFYvjBkaZDhE5k8kCP8cXS6Ru4bZ2UAXB2oaT2WmNkQQx48TmTJqGT7iupkdxDos5C7ADKtZ7V2pi97Q",
  "key25": "2BtLXW2wFmuj5GzDo2FmFVur5qjJoT4fDrPZeKLgKhr7g4Yh2oSBqgEkXEuoHsurVhyeWESjEPC1N7uqsiTeKhpC",
  "key26": "2ismkdi21wsgyuxEN9a3AWQaQoaTyEYshFax62xp2MpH6NaUMTFDHpByU2iqApqMhSar7m3PDumDwwvaKjTitNqv",
  "key27": "64m4GYHse1bfUsw5rAAMK7BKzv4gvN2ngefhgiBiR9o1YtSf1ke8E3X2AyTeXCsTAoUuZaC54Rs87F9oA925fcPt",
  "key28": "45EVtta7ammom9cdcWKvDjRe19YSzUjhJ5yJHuqqYnqDj7goYNpfF1hojfSiNwmeDU55pLRyhwZH72wm7SQwF66p",
  "key29": "dyRqzv3GcZwPFokx9Vhu5k2BbjrXD9gaLGZN85XNwvatKPKQucCUNnRrUhtTxDeHYSqT4YtdvKUCSdvJngKS82q"
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
