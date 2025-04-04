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
    "4vraMr3hNCkZA6QyMfHtzxGnQMjZ7TfdNCTAiuErD9ZoE48UifoR8AGUJiwm4412BXiBQaD1BGbNeMrdug6xWxY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzwqvG9EqeGHxFYZq9QpuYVvkYFc1eZLsPSg7NyDWJ4Zkh4U9SwsfHxr49W8QcVZ9K1rUApqYQzso8LXkQzKh7W",
  "key1": "37F9ooAFd9qiwQhJuApYdD6xZ83GijW1CFEYZVXqkKuRQToUssks1gkAdHWr1L36asYWrwoUCVarird5rgok4gSy",
  "key2": "4GBfyxbAfkcPR2VdUJMZEYSbBmjgN7y4f2aKNcjgVb2Vdayt34dZiyKMaUciSWq6t3GtUyYQzMMueDR7Muq68etH",
  "key3": "5Cbotsehph1gkqaekQpdd15NbCy7hit6zJtX9F78TvWoQLNrpYQbucjMxTQSpZbcfhbHYLpLRs13v4zSURY4raXW",
  "key4": "4aqkzckmnqr9HXu3Y84HiSvHzHNdfgfiuU92rJuMTZksfSGnAYWkM4RXX1ix8qiKPCpGHabi8AJjagRjPwU9ZVit",
  "key5": "n81Ny3tTz5A5NGUgaJcPWPfTbEik5gsdF7C4euBtB7jv4ykJp8H45ckP5k5zoE73bp5a55RaqUagLvRjb1H5UwE",
  "key6": "3PxV7rTCMZwNejd3Mboc7gy8PbJY2TdUfAWEZLBdmV1poj6EHbtRohWwLG5Je5GbRW9cwXtXvADZYizyPLY9MAtx",
  "key7": "2nZWBdnvHHxie4ovW1M6FhQtSJw2MGzrPqcoiW37xVzTWAKCDevZGdinAyvVuCUYGf2McUeYcBGXYTBo6e6R3QiX",
  "key8": "wrGeGGNdKxp6RRfPuMpAUZc4Sg9PsqSnFiwoz21Xudi6HkjZv64D5W8Ta8UCuR8G7rg7xYfATKbBw3TyEMHvAqo",
  "key9": "45htvxdtPhnuJrbDKtxeFWdb29xXM7cdetM8NMxsmh7dM27pg5NhkTkqk7dtDdbKptHdYpKehScaARjHHvH7fjyw",
  "key10": "5Ln1q2eCBkrd8hrC3UUEEpidvBse9pUit6BBwXxCyt3923xf6bBH7TvQ2ZmKcu5WDFnvHsLHJhJXEBjfM6MCuYC7",
  "key11": "zkq4rDnTT9H5w1yMmXYigcWHXRUuaQWH3euxDaFx2Rwz3RCs8srBfzuks5CCpbwT3kMhL37nGz5ocoCnX4sqrH5",
  "key12": "KLsbsmeNfgeUMCs2XQUNxPNYddhuTJjtLYx62YyitxcfS5Zqoi4kLno2iXtxMy6W8SyUUjvRqqqBHMjQRSYLerb",
  "key13": "2RqTJ4CaSEuv91FPV8r9Y5uuf4PFnRbhwFb6RZix5WKrt3Z8gFGEzymUd36xoREhVTgogG2gXTQ8VycbM3pFaj7b",
  "key14": "3BDyftzSZiE6hFRbHJnDymRGPyDh9uNrvFrj8A7dckMDW7ssB9u8kfKiE658avXQmtYDtbAsqTFs1oAoL4aTEkgm",
  "key15": "4JHDdxyf12V4ZHZh7TuJ4hZG1uAwpesFwKokMtWmt2VeHuym8QMmCLhswH2i8AcCMrqycbTL1rP5WeKXbDyYWyDS",
  "key16": "2bCPUsw6nZtnpPar4ASDpVz2tpZkP1AKJt4a6wa2MRaVnUQsb5VeyziDMJByYYMJhDSP4XYoaPs9vs38amYsYc9T",
  "key17": "29m696T4XHjREjKFSyiKStZpDbHYScD3nuLueE9keuuPuTLgyYkHhM9aDBP5JXYJRz4TWCB2zbEUojCzLy4ySNqk",
  "key18": "4Dvr8My7PHwd1zZZN3vvFQ2fbEzy2QEfDWYD1gvXEqkVBD52r2zwj38QqDuMNgdHyD9yKwzMukV7Uujk9dAYkJxA",
  "key19": "5Q3xUAE8C8PzTXn6ensgu8X2smGQH7xCwTLMrdyGR5t1MzFxYUeC3RriwBvqUXMVKX6WDEXSB89wEf2gEaJVxMf8",
  "key20": "5m3XSpk7w8G3Mktz4nhdsJW8nqWSjjfwTnAaPQEtC81yaiYczkhNaL1cnV6rvbgcgxXjFsJoCWRLuekqS6xEzzj2",
  "key21": "2K6RBuX23LpwC3kzkWh3sMTce6cnKopoiMdQZcAvubTBuLiBRA5PwBHgBHW7WnTppaKbaEUT9m9swsqJoBhbAVrZ",
  "key22": "3FezH2D8oZenbaMQozpxdgXkefC9yYeywm5VZDZseUMMVLxWMDsuwuiuQ9PQNDPymLZ46ZgrGa42v8CzBMCUcYbB",
  "key23": "2fyKS9yxad3msupAUBtabxmr9yEX3NwSzd75oqe3CjewMK3VF8uyMS4Y86Tqu1qt1GoFPPw7rdTfSsUVEYikHAUE",
  "key24": "2nYkchANaVJLi4Zj2Q9MnnhonU5YeBT7wRN8pCtZG2DT7jyyMt6UhHfm6hXgG4yWr6T7MVvrR17hEXcYrFuN4HVj",
  "key25": "KNMRT2X2VeMiTczsMU1h1dYHhk3CrcG6bnqh7R7TjAciyCLFG55ouTztuugzf4jtAcyW4tgz1JA7JDg9e8WGsyu",
  "key26": "r5sCgvWxuBNpH9xKrTSnpHyei8wt2T3veZbavWEaBTmHraiBh327rKFSXXnLqDoqb4gvRJAR8qm1Pu2drn1Jnrx",
  "key27": "3UWhvk229TZsRdR6WmjoAs8tshvBwWhnmy75QznLSWMkKwbc3rvH4iZ3uYcfUDoVPTYE6uwjTMXiUTjkc43hVrv4",
  "key28": "5fmoRPkpWHzfDufxLaFbqJH5pyCXfSCEY8EM9s9aYXpAZrdwK6J6SWtrgfMtVuBRU4VWuy4AGsSrU2S7Yj1jzGaE",
  "key29": "CSgL4NcAw1unsN7yEzyEC2pPRrUj9Q1JQ8PxXgzD2JVasvKqo9vc182YUwLzPrgk3YnNVm5vQPvSFyRK8AETo3Z",
  "key30": "2JwWwyy4P83kVeAm69Rd7KSDgm5ec2bPoxVDMHqQQMF3XXLTJrAW8VoYUMUZkKJ9qHGYqrNQfG3vUs5gBftqEiJD",
  "key31": "5oz2xWYqidwvY5SjaJ1ffsiX1JgWAo6qchFfSQBHM1anjeWzf3yMabKuScTPzZL3GpAKkFKQZYWcVboTN8w5aaDC"
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
