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
    "4X8MSwGyDvVupCDH7HXVawY1y5pGEhqXCaebkt3cpQQpfiNzVZZKgEb93TUsPQYaRGXRfNKCBzEaEsdR43ndhY5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Ru6HdgtWcBjm3S6Jz5ghQLKxDfxreREYGCdPqKvyEqTW7KXSxcixionZMTzY1HaRBBrKiaZqY7MQbsT1CRqSyD",
  "key1": "5EvLQAXduMGvffN5N5eRi2BUY1Ft2zmiRCQT6M8PVAyErMYoD8TTfLC8Queu1DUZwwm84jKzoz9KrXusm7E4x1mK",
  "key2": "4Wt8NMPrBeQuzS6xhvZ8JhhwKFVenr3nARa6dWDue89jkCk8aciJiFYKPdoNFbXjoiAq3fePKQNPYZrB68oaNQfq",
  "key3": "5wQeDaBCnZ5iJJ4dD96KBMaNYnxtDYpwPjJxJ6uRLfrdUgAzymgtWvqEpoXaaGpV5pYxLxYatzVHjfPpcbdsrpDs",
  "key4": "JM8VKUCXefbv3WeUDTnFYtXB8Fh4XU5MaXFzzp7YhwtVXCjmLgUnwhRoMFi4a36CtirgHmnrwchSednBnL1o1G4",
  "key5": "5FbXeNgSMtV31HtoqFXsgAg5GhjHAayGQ3bt72hQHbecbE6fu3ef4fojdjPQ2QHju7SxiVn3reVpjYDqnyftkuyq",
  "key6": "29Bs15cbPfRKABs1Nt7Uf5B1EqEbLh6xdDWnDNBCTS92de1S98qyrUJ83UopAXnmYqvwZMJcdBEv9yz2mhT5pdG3",
  "key7": "Pqwi7tBuo4ue9xpNiKmm7Lvvyu9Ay3quDbPo5WHA4n6Q4sR9dxgPeXCh9EWfcySd1dPij22aZr3SDpiq89UsWrM",
  "key8": "5nfJn76qj4SMSUCqJmmbeNjz2Rz63ML17r7ZLepQDZLor8tArsEvyNyWAdhQHE65rCb9u46GmB36eDxxkW2EVG2Q",
  "key9": "sUyZLHMTrZwL9DicTargy8xfphwPuQDebkNpW8NwXXjsU7q8F6ERBnbtFJqiG1HhC4Ed4hwwwJam7ed8cYDNWSN",
  "key10": "4Zjq1wafmVJ1vTMG6NwrQDkdopYk8iYJc9FUZ7udq1XnrNPr17cBFR8GyzqQNGckafKKcTomAqUxktzbu1zjBE3H",
  "key11": "35hma1JJK6EcJkUMQZLcae5bAWq467x24V87JHqvRpQoTchBJUSme4wgHF1DEW6bKXgmNbWG1tVGq2XtowwYKxGM",
  "key12": "22tCrTCrBbwzQaPPvF7KKaC8EXAQTvzzZwzpsdvQFynXJ2CK3wKm4rQYrZCxdHJJLsxhEZ6JrLjSafFWAQ1NF3ck",
  "key13": "5jGrJ5mdVpo9XE6uMVoynDAvV9Eq6gbE6avXS73cAo1sayL7wWpvYLRu8WwmrS53K6ZtQD9GWhdTkSKPZWEcncmB",
  "key14": "2ZqgFXMDQJ3kbzNVmn4t2UrwNa9MwaU5rt7pdZpxSN4DDXBSEUrHfAKLWGpZ79yhrhYEyAYHgBioe8KTfmFTNxwz",
  "key15": "4AadSzTaWbukCH46MSSFCqwGnzM3tF3LZH1FxFNp1WinkeEmByTNrpWeU7RxNXQa7wGsUdzduxE3dCcJnr1bG5D",
  "key16": "2Svq7qzxQ87jgMcuMHdw84BhVbHTb3KoXJWJ5JjVcKVcxhpP4hmzyJccLMKyzs56fSqLG9dtX76Gzy5Lr9bgjAwR",
  "key17": "4uBYmPdpqJrRE69sYxC85AaVFskA7BVxhakiWAchSxkmkhkUvdY3XMH2XAFFB5oGyLVg7apoAtrE3B3cyXwd9Kya",
  "key18": "5H2qj7DYJfgXyivUCgaS52myg6x4mWHGAQP67m94WXRHjarMBbMkVrQg1PJz9Shset5LN6qvigM52G6C1xEVecQg",
  "key19": "4bDRRYHPkCJqF8jcMsVyfdWMdNzo7Qm2p6W4RyNzEhz1H5Fpa4qnokXMn3xuNSLShVkG1TgTzyJuG6Uw89R6oipw",
  "key20": "649SHQ9gc14VNG7dpCPwGEySYFaEwi2kBUn9EWYTfTrTbNhBdQVKSU6uaN4XCY2vGswgg2cGhG5MsQ8x3Cw6ZyJR",
  "key21": "5RCW3rmVxj7W8kX9aiVhMmTatYqBdjzfQiudzEnCTUuRrAFfdXxqoK4zeNvr7gXDo4qu4BoYAdRGEpC4aoRrvBrv",
  "key22": "hvKPNoqAR7pe3eq1AeN9Azmz9wNvT4L91SDYT6wH9Yt9bBSV9q461GA14YL36zu76xwfMtSSRfVdjZqbhajSTVk",
  "key23": "3JkyVhhbHytUYumFYf67TJX25UgFjhachaukHwFM8mn9VCcCibrqoiVPzr7Ygy8CeDq4tNm52YqMuvv9arKLrCQd",
  "key24": "NSiJTn2MdyZzsvdKsY1vZY2EuSjyBsCzpUA7que9DWuBtZvKZcC3cXbQinoZCSh1HoEbRj4qt9cEgRGwaJU9QP6",
  "key25": "2RNazfpN9ALhF4xybBfVDgW9appsSVWT8omZqVK5Z9A91CKEZeHFakyr9ucniK5bTurFNdExDnsdGtwPyfzfi8Zt",
  "key26": "2gFdaLTjLk2pWeSAqHTpcGfkdgDmYfwbFXMAbjbQihjdwysLFqMTtA7AvKvfRqjSdhqqbNjqy54emrTo8tEobDQ6",
  "key27": "nbFy7vNcYCJ6SmNrXFLmwSSN6QgB2k3wCco1Kfv1LpAdSXCC7DbTqWSrnNJF5fHbK41iBhrDrUKMKwhqykJkHDK",
  "key28": "4Y2ZMTyBcnHoWvHa7PkAr2oVEYwWNrWjT9w15jtZbnuacCxMSKQNew61hnoZWJxD8umCf89zGfzFKeiGMCMXMWCW",
  "key29": "4mEPyY9tTe7iz3SF5mj7BV5yn7AJfzKpUed5SJKKpYAMbG3sEJd3DnkhXNp3Zqks6kxFD8RNL4yyNbCx7kxnTMv2",
  "key30": "2ZREhViHRef5hNzh7mHhZzTRGQcH5RrTmehUwWdQfqcqREWiJp28ZCoaKViw8UxVM3M1JhMFuZDAVKXQpRgwbBPe",
  "key31": "4PmQW2SbfbPL4M76MJi5ZoaixyDi3y8NoLtPhoqjsLnzdLxK1br3uY1MAscGGohDFUGnSYCpoFKgLgUXDdbv69Rv",
  "key32": "XjPspbYyjPMZRU83GHUqjvbkfhQqkTFwJTuhxmULb88Xb8vKdJbWZhRGtss62byzqc7MtzzyA4rYQEY3yV8Kn6t",
  "key33": "36Wbct1cPpHYzp3HdYg9BeZtRDPr4Wj769LgNLeX9nnFU3ttdpcJT69hx7DjytPijM2nDeTLyCuDANGVYhXwcfKr",
  "key34": "Vib4RjR6dX52txiAQ49y663mBWyDsM9XQzLBXkKd8xjH5kc19SSsqCgHwtL1fyqHWmgqce1nCVUbavmY24mJX7Y",
  "key35": "5sKLyNwE7P25QGGB57P5kTc2rgaCX1qBZk2W2qkxjk8KLqzheTtWaxhA5odqC2T8rymoJDW3GxE8Jz6SddNPbXag",
  "key36": "5eD8jLTx2Te5aPmtvR62sxox3KHYiWhdT2XQuuXciYKLJ7GyU1MiLCr96tVu5rFAUGQiVix9cnchiW5mSC6RGJNY"
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
