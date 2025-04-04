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
    "2W6VRrKWfq4fbqASCPVCKaH5M2giPXPTGbMAaeqFx6xT6ikvLyEnxFGgukcdPjBNRuG3mhfNB6rxz3BMjjAhzVBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gu3NyB2CDk8wTcHHUtHKfUjkuKHbcQeVd2RXHZDa1y5NidP1Hd38k3W9U7NSfrKo2rcxaP7vKb21nZ6X5ts9emy",
  "key1": "47ZYoPpVJTBgdtiknhCPuvTJpoPbdxaMmCpZreGoPXiNct3zpeibXny81DKpWAhcNgujjMHTSDQAuynu1wdrpM1x",
  "key2": "49fNDsUJJco7iVKRMXqgGtdfUrAJaM3FeaVfEsEGxizAGvL7eRTE6ymuW3Y4ymkCTtvsDcaDEkdkMRuGMWTYyKJc",
  "key3": "2Xxr3hS9KBmLrbvbxReUztHoQwNd7sR3HWFaUcjRzye6etJ4i7SUWK21Y3XL6jpV4QC95XRVnt5CmUwt3HK81c7z",
  "key4": "49UzRTSYFC5XRCrgWYWZBhnmuk3UZ1HeFhgJYkECatnP68shsP84sMXyNgBeoRU8SmpmVbLveHKKmi3xWKMytS5z",
  "key5": "3ZnU5mxkQHfWdftSidmgNqLSATLhFE1Ays6a47ENaZa7d31N7MFpmUALeDFDfiYE21AYsu8HeqvL366XUyddF9JW",
  "key6": "3JMMcowx3wnQ7nvGWjfjjWDaydpkAhsFvnA3qoMeswUyqunBketKiv7xijt3VZ88ebBnGVkLH7UaqxtjSUXyV7gh",
  "key7": "41fQhNrifDHZNXxtq6XyZbsQob2B59jBoKGBfk3DyY8Z7gFiqz3TmuZSB3XQSyAC1GMoK3qP9dDwotAxyuBzxfBn",
  "key8": "ELG9dXtPMHUNp4pxjjZrDkZ5fYXqDTBk1m7FnFyZHmBsHPDbBcYSVog4g4uKKbuPUx6dxm678R6vH9r8CdTE4QS",
  "key9": "3HGexEJc8isMLRxtrmEsYtpksYArRZeheqo2tcdKxuMTNRQqcFfQkHUMCgTXYvyr6ToTA7xtxUGZPMAYPKZRZqeH",
  "key10": "PHfqaQUgKq32VRG3GtHNvCAa81V1dZ2fxPn1motepeN5kitwawSo6t6bQVWZU4poKMzDdPrnnntun7i7zcsMTzR",
  "key11": "4ESA98jDEExuFTAVvdAusM8xZPXXkFnwUcrHZ8Cd6YLHj9KPhPZJSVBN4APLfT8QLDxiT7dHx7sKKH6jyE6te6Lt",
  "key12": "LahqrCrMPEshvBYzTvrQcwh1rbJPmEtHxVC1D7tXRiZ7xHAAjBsHfarcVC9XwZ1mGWZRjX6GMojigVxf1CMxDUQ",
  "key13": "49G6rWLC5oNWmdwcDRUKMSv2zHuj1dBysF5UcjcJJNYD6kWjX2WwVhRXMp8ShKeMypaXNGW98uVrHBhRw12eqS8u",
  "key14": "3nrCUH3XoPbuUnHy6s2SBBcsqrmEkkgJvrAyxUSJuYFJiss18TXTHRrMVVR4pfGbQqfXQaeFnQGDbp7rMwbHgDuq",
  "key15": "5cfBg3Kd2vsQVNbeFsdbPauSBDiUrS1k63fsMKVeSDQV7uYbXL2Y7A2MGHXXH1RyDTLo3dBgA5MAPTULpy399Bov",
  "key16": "2ppagqxTNhXBcY66o1xNPbopDPMGryKQsDehdBK2CSywXzc5BgeFDs1umpz9b1BfXjq7y7uyNw9LCSF5WLsiUWuL",
  "key17": "5weKgQ9svyZCQsEucYeQFhLKdQiVXcHKCEqkoekZcBPfEUNVXWSLKLXPd94CZcufjM76NVPZdhZANJyX4d2D15XJ",
  "key18": "3pNFQRPZAqJFvtSFc2kaRNS8VQ1fVCtxo65wDv4hxrutruonSBJ8qJR2556jcMKiKsR27xe62oF4GMiM4HXYxxfK",
  "key19": "3ojSeHhYNxKPp5nS955kvSzckTaAsgCQteYRhPEJkQdhqYqibCApQHLdtfJsbVyLmdYN3VkaMKnk668gQn4ZFdpL",
  "key20": "8VjqXBSvcQa73H2hXGm2MnPL4sbiVLNNaDtZUAGepxn2FnvgLhuB1nCwzoc8nY9EGCuuuxqEoxMsgDFKwjNnCiA",
  "key21": "4wYV4nY1BXa16ts5DqmfaHUVYySWzSaSiWxJMJMaVYY7y6EqvgdrkMYB8xgCWBde2HUdNVpMWjt2vaNTABmmwnaM",
  "key22": "4cSYvLw3T4snGLfVJYm5VC1DwnhPW7tCia9Cfnwv9bTjvDgqBNh9mfjZXPUEVHnQ6VPdY586FUxbmFnkdQFHj42E",
  "key23": "3QKm4k8uN4xq5G3TEf6svxPdycbcqqP2rfQe32eJcdWUNxN94EDpGRvSJ12jcJY6MCMyqXh3kzVaRGGaGxLGhdJC",
  "key24": "3Ah7Fkr28DujrT8CpG3NWAstmHgwr3pQAJsFNMfTA3nSRMtN7q8oa9kQipqVMfutGmyp56PRqWkbLErickUWY6wu",
  "key25": "MKaMeXs74e6PAw6DeyHwuaaCAnReL6GErTLQ8eVAWJS2FCKQBvM3pJK8utjT62P4F84GVkkumdRQnCy4f6PsbV4",
  "key26": "5tiBGouJBydFsS3H1weSdsbsEpwfxkVPxcnt2E7zb3Ax8gHy9Dc2t2L8KHZUQ7vypuNSF6Ea5ee9mVbTS9AJbtpF",
  "key27": "4JLT1ak3RRV1nioyxbQK44YqXG4Sz9ZJq67uYeX1vTspZhyoFdSraPvfdBP2yKUiRnZby9tUQ18jLeqnbGoPgg4S",
  "key28": "5xS3EUy5jdmThLP1kgMKV1Hea3pEGr8kkTmcwSsvySPZ5df5bMTG89uKGNAsUspqwnb7vRj49G1oVCZRZnL7ymBB",
  "key29": "P1MVwUvnMtveizkAcN1Zgtz8aronQC4hzfw6Zz4yCDwwCXb9n2uXYUvbDwM4E8z1meZAwQVXxXZ1dULBsYWeVjK",
  "key30": "2SCjftAAdR8XKFfu9HppefHc43gkbqetVEUM58cawdeE39a4AQd87rVuB6RRaGG56QF6ZHAgCUq4YWz2yWJskrw6",
  "key31": "5dFPGtE62JrzSvEA3aGqbHMc56fnFCLJS9LqvcQLyC9ENgW9BgkdrqnFxFQa7x1okcYqy82kMkYjxGtvXGov7ZJZ",
  "key32": "59GH1GNtMeV8R7iSsnYu3d6zkReU8YBSU2HRcdQv43PKyTXgvzwgn5ordEFwYX5cqN7ZC2GzEV7a2RwtXoCXzgRu"
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
