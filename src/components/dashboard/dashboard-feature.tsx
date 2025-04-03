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
    "g884nTQaNVLn1o4SCXK58BvsFDoxT6Ypx4ufq8p3MFFo9nNGe4sEsnmPE6qF7nRU9EMHYRf5BUF1EZ6FWDabyup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EaDbJG7oygAaHXrL4NFGvwsJXZAmUb1P5QFe7Hm2cCVzpj2xmS9jpoqzGbybG3DzpTPTQzzfLofvWHaEXen8Lgw",
  "key1": "nhovCqu61wVT1eVqkaDFrHaioeBcYhtEYvVkWXEkmpmrsN7h7KaYxtoMnwBpB8DheVDFmiT4tvFLwJwD6z4PzLN",
  "key2": "3FegDfGLRQztXDcgT6bWccKQCK7KNmhyTrbzbSVgRCfvGACkXCs5moPYWJDfkASMHa44rVrUX9NJKDoKpyHzM8HS",
  "key3": "3BixEG7Q73fSpAdfLceXsXCXQe4Vt8QtaRNWy5fh1CmxUQ8QH7wPV6Y2gRPmzbyavnWqrwjVMZhnxKbTbX8EJpbK",
  "key4": "4EALZDJD8CNb5J5c5yyweAmaoMRCqVB5f3ZxyWwZXVovf2bDBkskcHEUe7DH3pdDidoUmbFBVpjnkJ1o65Wpt3ok",
  "key5": "47XnLURcRoTjrH8oDXTw43w2gCZuGfm6N7EdQhTdi3DXZ5YvhBeQUA3yXWji9j6iBjJ3gdfPRDFktbGRj3Ag9CYX",
  "key6": "2Cir8CARdhk7N96uJpxxuTKGXhNSozotFtJzSEovus1LF9pd217KsFUM1BNDXZ4im9WT2evyB1SknQtAWT6fyGnf",
  "key7": "3Z2XQohfetTMBrGYrReLfoGjK9apmiW1FMRyA9xneUPGPTCmebqK9KBhuBYFNdcqHgdBwKz3d6Lt37a6xYj1mLmB",
  "key8": "LBpsxGHvux5WQDQftgRNmgazi5Bakqm985FSZcyrqTD4scEiqYt48ubmyrxhzKWRQfz6YLZo5VswzScWEq1h4Dd",
  "key9": "5Vqa1VrhZvAQfcWBBRC2C1sRT6gzGTtYKuxs7Bbvr73uBedo7QQUj7ThE2oJGdSqLh1fVKhqJUBMP4UQ5rmHEYBK",
  "key10": "57b2tyUDPTBeWQgz5WmNhLCBgRfWt2yMPVUU3oaUgmXaogATQuxhkpoeoMAWFMLixrRGxJFjUEKbjHpy9HDyQuzW",
  "key11": "5taQptgFHgKzpgg6irDbNjJqPycxsjbT33JX4j6Lb3pxCB2mx4hu9ZpUwvPsoGtjxmcTCzKfwtHjsWojPDkzXrFF",
  "key12": "4cd5ZuXxuMds3Jkk2GwmegpyjdtG3P4VrgaM4eZ96w6671hpDwg8uy4rWUngvBLjKrxBdM3LVyUyNHqeeurVpseF",
  "key13": "fnen4v8xtkC6hYA3ShAnNm7q2FuamSxzwLxm8zx7mmD2YnvMLc4rpRtRznXkQHNXmDLqQyuSDVq6quTWqj2yuXC",
  "key14": "3JkwYFQWzoh8BPdPyE9SW1Nv6DADbCf92GdS2Mp8iH7uTrCp49ii9HmygzMh8HZDHYFQuqa5kKy5bvwwnAHfcJAG",
  "key15": "zXwgSAgWo5YCXPwzuwtNcfE3jx47mZc1e5QVmAJn8SkaUwJi7fKpqL2Wmum9sRbEfrDBQz6qBWe5gGCk1xuHPjn",
  "key16": "2M3uXPqMk5Yvfm2y7MNfmANvfxWgrCzZ4gdEy5dtMXP5ZKQkcG8V3LtJbz9T6XC5jiAJePfNLcReNF64aMpbaxRG",
  "key17": "36Q9tBgHudfhk3ZESeTe5RgoVMJXMpx4uYBof7FMGBjv5q9j2Sx6K2L5zhqQWQrkjXSuri7qCmPQvBpV46fgnGGF",
  "key18": "qtA44vaFC7AdzE5zP7JfXSckvN278YpCa19bUKvSUxQs3dhgU8mKdJXQPS53FYhfvrCCVTqQDkMR2vF4HjmvR4e",
  "key19": "52PuRibrEEwmoptBCBZPreYRYpW4RNVuX4QxA1YWtWZ1fLaDnrNsJHBmFPL2vbRNcwMBSXaFjVyL43okRK3E1gMu",
  "key20": "3oZHj6vmVGq8eiRc3EJHGT6c5TaGbkjh4NvwnywZJymGZxTMwTpStFHZmDkqKAxKeKbyzdo4kbYuVZ4xmhk6kiCc",
  "key21": "2khGWuMhbh1Rkj5Hjvxf4Ff6st4TU2PgQkp9oHSJmWREQEpzvSnLkVKRW77eQYMvvUZizRF3UngCTMf5e5Xw3cDW",
  "key22": "4uq1g9vQ8nMQRV9rr5eP8xmWg3tZ1wfqse3vVfbmHA9dWTFhjwitAe17VRzDoQ5mwTHUtPrEicmjPFeyGYihEiPW",
  "key23": "27MNrqmTusmebkGLTQhzBAzzD7iZuxgrXpLzeu9qqTJj3YsMgJh3s2VGkjbQhzoKbeKEKZxT5jDRvBVjhDmvUGrN",
  "key24": "319LUKU8Lu62F8YP9H4rXG9eW1ZcndyJ4aG9fVWyqG4Z6Vvu3bxt3iL4hv6pShc2rYtwm9gbiP6FCwV3X5nNY3yH",
  "key25": "2PbxWWXE2x8NmSYENEyJzsQ4TzamxJ6a7aWR8VB5eMrWi6Bpd8ZcEP2NiZy7ETA8BcvqY34Auee4FyVENWSp58XQ",
  "key26": "44iz1tF3eY4h1fneZZoLtC9jVEEag9ybh2jMrP56ARd7u4DR5iHVSPfiXDnS1PDDWBGdYYWEToXL98wob1UXmvNj",
  "key27": "2rg5TaXo2ATHCxGpD28YfMYdYmibYZmHm8S5nWcva3RPRbpHqF1oJMNj89cxBBWvKrvog7QzpRx59Go3FbJXApfm",
  "key28": "36tT7wNc3vLKH7YVFMqeZaWuM7y57swDJ8xcsqyxXHH8QQ7WnuBhnBTrsraqJEQwh8NiZH6XnmWGh8Ab4f1FhoKW",
  "key29": "3sCmCRt7FLYVLBHc5uhFGtE8VaNcU6njMSShLtLgCY8TBz8aHWtp6gsnFLeqCTtLVKvZiHpGNaV7qY1pM4LRBPTB"
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
