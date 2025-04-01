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
    "4c9GZqSCZM6Mbqo5EmKMyCD8YQtG6d8F5swbE2tjs78Zs7vPEaNyPE7Uca3giMxQJqbZhCBfLpY2qT5a1qtSGusG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1QjUmN1appwf7tXNGYZeptFSB8m1rF45cQw7RgSg4Huf1AbXMYZEzCbhUkfq39rkPfsTQGGQjeh5jphvKCyRD8",
  "key1": "23duPwu4NHPVE4La6sfsBFtSYVvmhHBrx6cPoe38JyhWLqcB3rhzL8JGjaLqyRzEtW8YNpMRufHJzfv6cxq4muay",
  "key2": "36GdorvHcNB4U1Er2rkQ3zH1db7bPaG4PTpJBZ8Yr7WM19pLagWb8wQ18K9R5ctA9tBAijJ34q94m6rpwrYk7u8B",
  "key3": "uRP8G5fK9f9X9qpgaRWtVko2cCgWcgjE2c3GdAzSy5wXkyFePPEzeDHCNGKs4dWPf5NyAiWnxSJo5e1rGgEtzXq",
  "key4": "3uwo6RaLb7Pgtg5h8EyiAh4SmYdKZg6BigH5NoouUCsZEfa5QSxEk2iTvMLZgZpVg7exki9yRCoNexvzFCPTxnqB",
  "key5": "3mpxVjyGkRcEDmHTHKTU3cF97Z95uAY2G2ip3z9VTJ5wApbNF3NbiHFLRk1UAnM59ttCuvwG3wEpaN1kEqatY4Cm",
  "key6": "5UtPcpmMeXZ2Y6edkEa298i19M4yZ1QwWQ63qeUJPPFKnxaMeNsRNDBSLB4SXh4wzLVNEaNMrmxXmAy6kq7nU2gz",
  "key7": "2UVK2qZTkYV3rtxe4pCSPDRjJAxCDcXPbU9uvMQFeFDBcuRMbqJGuxecmquToBgxDHN71cQZybgxR2D1uWgAkXo1",
  "key8": "2P2qcG5jnDRYmFTGuadYifctesbqDDEM9nsk7fq3js9ETCYHamE3UnAiFx8Jt9CbRi6HJpTNaeUEPfN7NesfBTfi",
  "key9": "3beDEuQH3p3qPgtFfMCKbtspobtkgSFvNqznzVzeUYqcZ6NevD8yyv1GtKEW3oBpWGpgh7hGyzzKJskzERQ4BLh4",
  "key10": "3nqVHh2Yp1MaRGVksVohqL7fJqTb8yjpeLHty6fdv9pZzURh7JXSBbChd2djGWAR1eg6FGnUNHjFVkARCN33BRJ4",
  "key11": "aPjrLZ16Qt74ibzAcHLtk66DcifwmnLKZAiZYy1fovFsdCKtLLM97xLF8TfxzqXqgRgu2x6rCvUagK5npvr2iVf",
  "key12": "Frrum7mi3sdXtppcFCjMLnZL6cDNajgn9EevaUTRoaGJmPgZKreADHWTJBc7E3wyAgHfQNHK8yFNVmGsVg9ZuWz",
  "key13": "M9XbPuvArKQ81nF5ALbfB1wtXcYcophLAHF1Bcz6ZeArqXz2xAj3J7exZNTHKLe2esxjiSyTRqAZxKsQH6Nwg33",
  "key14": "3sqqMsXGDwgjHTQJccZ87BqwcdiQK6gYmbS8e821nPWtDirJ5bH8RxmZfmcPWQSzgj4ZM8JULpJjJPxnu4ecA6Ye",
  "key15": "3uMfmH91Xfs3kgQvfbZBe75rDEzWdQcpWirQ2EfeJPbKHSD6iaWFL4t8RvmcNwHcmqsAMWTCR8orxiFZzjzAnqVn",
  "key16": "5YuLEBwF9VjtQ2kZkHNwfkB9abw7fPqMzEkh8zx1s6XWibQpv4FPbkenuoKet1RsVTtLFUmu1Dmd2NjfYcE4Tejm",
  "key17": "5tsqsVdxUWkxMcebpGfSKoRmVcDtetQvsgoGNESkbERwy2c4Y3JD1fgctk2HmGL5ssQKE9kJzDn19r4Km6ytYNBU",
  "key18": "2uA73FUag1xC3RbzdJ3LC8YgMf4GmEDtacwWK7g7Kuur6E51jZJHgBSJBGREYJC2xvSKoDfFkU53dQv72KY393yd",
  "key19": "5C1ZJxJ1m6RwuzHWPxpztrNyQJzPnoWhX7GM84UJMDH24CyUARXQEGq2Fx3HTBf9Hj1f2rQcUKePear7udsk3tiq",
  "key20": "2KfoWx6e6Aqz9p9xf2VC6avNJofGPxhpidd9KXGb8wPYDQ87Mr8S4gePswZnjYFNn6oHgyjt8UoXRa5B4MagL8Yk",
  "key21": "27Rrq74LnHfNExyLgV1YCoUgDkDw9TQVkwbkJH15d4MRBPUqqcmDL52CYJ7fHZWiYki9bKbmeKeL6VHR2QsrHFvm",
  "key22": "4y7t55LJW4GwVRpA8cDVTcxKYCF1gfc5BrU178tA21PUqjpM9xEJed74vg84pQggtDVVhb8RaB6QRoLCqQszxisu",
  "key23": "46EFi2uMtD44pjvEWGU8ghfcnFc1rP4F5hhji2eAFacTkSbppwkV3gB4BKn7LUvrdMNVN7fW5H9CnJxnzPwdWqzX",
  "key24": "2DN8X76fpijgEhmfHfBg6peRupCv9U5TPJfEPC2KJ1P8LSQCJDHpx3tQKgihQTm2Am1mDPLBweQFKpkaJxYicbQM",
  "key25": "2UcHSFQF6x55NYaYhp3W3T5wgECocPzjt2AcEUqwsz3wgKiYF4r6ZHDwEoUDkCK6J2fVxiRBMjw76hikvvWAq2DP",
  "key26": "3Z1oYMwajecMYBrjmwPvxfkzrUCxDiHYLJVTxrZuLdnBGmgVmpLeYQcxkSaMLD6zHnwjNT31Lb7ZXzfF91DuSbAc",
  "key27": "8FDcC6A4cuFGF8DYWjFVJcNi8TNLyp2ow8K3LgfSUGZLWG83qbAnC8peQ1Jk8xeFPr9ubYwx1g3HHqY11RPa9sV",
  "key28": "4rZmgFJi6Qu3MVveWPoUQzJU7KDsf16tvpC4hLaCS8VcRJKxF5ZXfu6pcgBxgN3GoaVrCNAkPNsfNk5ExzZYg1vW",
  "key29": "5ouhnXyorzGYsKnR4uosRKhHvyv2VnrKovWoECTsvvrUn4KRAAUZu2KJeUTntBTXmz7zQWhnvmSParnDx7KQaWAT",
  "key30": "42w34d3e58VfUmwGuTvA3QFdWzSA95yZbFEECVNDJ8a1oEAcj4D56oi6nDaBF7vBg92VNSiAY16P2cTqRoh7KA97",
  "key31": "5x5QMa8V3CZwLJ77gYpUNcKsgzXy8KjHvXcDSoe8SzYMW2zTn5LgQ7HnefKy1XJTMsohxv9vW7Gu68M9YmK9y7Xq",
  "key32": "41AkMKYCs9Kkz5YK6rMy3cVcH6qK9g2di4PuZXMaPGA38ciYGGnNA3nTW8ww8NrafmrEiyXevbV9YTDecDWw1Hm7",
  "key33": "5XnX83jUmXzUzQzryfVQZ5v51RwtegCtG2jGq13z8TpXHg1SjoWZNCpu5e914m5kvv7qZ1tZU9oCGrzEpB2a2JNW",
  "key34": "5J1V5uLf2xgExV7zbja7GVgDcvZhubedxZ33Ki4oYTMTCqUjqJeCKMAVuD2EvAPX2gpCe7KeaRG5M93wAinA5HGR",
  "key35": "61Tz8uYkB1BZbcsCdwdRN1wN5VXTuSXnXhv7uRoKaTYSGWbBM9gYzJewiXV2W29vzU2e7BZjQexzWoX5wExZkqT4",
  "key36": "37wk7ynSCMGVu4JGwMyaue8kgKqQgfFnk9mJRWVwpcBpjtoT6kqgC1PQu4fMdaCAqekpofgrvCzEJJZHf36Z4t6i",
  "key37": "SeE7591ccWWpe1R6JypD7aEPyDjaXfDzkwqrEmXQfSoDmQ8FtGKFXENJMdNfVQarxrQNijnXPQ6nUbEpN7bFaNq",
  "key38": "jKYruHZQohMHqVaLQeoDihNE7ckmw1dMzh5E4iiPTMoBKXcEyBF8wj2knVitCnui6VdPXs5mjZ9rv5y4edoLnqs",
  "key39": "3gPJgXbmk1nNmENQFxKKu4BfhsGgeBY7vwZxNX57sbMytMz5u8tyrxwQpgysdyaoUMcBwuemWhWr2tybBbKBCsAR",
  "key40": "42dqNzbbQknH6enUirQH4ed9dyThD2XrqxXTB1uDnTsbG9Dfzh7qdXMnJL2zLwNTXq84WXZMCyCsqDRuwGzH51wu",
  "key41": "2UjeQTf4HBCLFszF3WGMxfxn5yjEQZAmpw86ZMgbqaPJUVAsjQ8V12d4tDLwFGsHBdbHrY15kHv9hUkCyCmUnqQh",
  "key42": "2wDE1UXbLjUph4g7ASQRShXYw5pn2UBdLWQB1ih3x6KE2qzyJPjx37y5U43E4gv9K39AH3vvUpeRa8d8GdbReFBQ",
  "key43": "3UHtpcdpCTedrpJnKm37URM46UAsRRCfiv385Xj3bSV2kayazvXohUdUvNpU3LM5tzA21W8MDh5sJ1t8wMksJRuK",
  "key44": "3hZ9ixbjjbd5VxpgCGzYpjm2gaZGqx7DA73yJFh9aTem9Ew2cfrh34ytB8qqhuKYZ47r5aiXoJ6y6nW7PADXmmEf",
  "key45": "cJYEGfsg1rSBsBvBm2AigxPppkFzF89b5pTstac7hHcPeUkXbb6qVfSjrNghXw7T3cP7EF4wLS8PPvP41Ta17gQ",
  "key46": "2kbFDSCaxi87QAaPbMbkcVUsfVpjmSFWeddEhasFKHJ3RRVrErf5MKJnvY9UPoyjgPGd6oZVy8hjkp8BrNN3ykY8"
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
