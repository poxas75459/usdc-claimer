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
    "5Zk4yjhjA4SVvEGjSo5BRH72ts68fH4BHbeTBA9a4MGYy1hbqMgYMBAQgGHAbzyZhSjV7PfA9zNAStL7fhXTe9Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GhxUjXyF8sKtML3wbL5rEjdGrNQjyrneCJDmnoCtZzC3RrWybfoDeXctHF4ZDpTm8n9kKfby1T3Buqoyg1dytf2",
  "key1": "4vsYZZEdgAfYwvtwTvEtpJt3u11d3G9u9oSE1bMqWaGFs2hmRGeHzNU6pzpGf4QfDxcjZa14UPAwrdQCkbryoDYq",
  "key2": "49LpW67i6riH26cQsq79MzVpwX8iGjhKbv8iL2X8w9g2XDjzX8drt75QNXctdJeWVmUSomny1kGNnN4pAhPWqDZe",
  "key3": "3DyNk1katCZuQWiqMMTWYqCrEgj45ALL4zxrWUByUkN8zpJY45HrRWSGn3aTyV8pwruWyuamLjdfiJdm5BKxbzGX",
  "key4": "4LoPM6vuZA8Y5Lp7g4x7as7DjreBmZxHQpGqU4ycwKrin46DPh2dg3WHKQUS8vYWQMNNy8bm2rtHbCk9TMUshF7t",
  "key5": "4sSbAu6UPsHkwnqboJCuX1VnNDsCVk3qExQgFT4nxnaTxowcWQFBi95mgB88dkjWifFWYbTBaH5PzFP5VSmUxYQk",
  "key6": "2StuanEo7kCmmtth57QmXgVtds2tYhC12ULyS9za4d68qe8KHKhdYQ1AVhgjwidow6g7eBD9c6f5xrySKnPbqQg7",
  "key7": "5oDDEeJRHyKKyh7PbNeqqnvvezy2t2VkfNE1DMBFTFMxJBZTodhwDry4SpVtZ9aY7XitAeA9Rareg1JyBzZcW2xC",
  "key8": "3PHT4tGquaxq6WCAA3Hi13ghNDLzUV6DcNncaxoF4mQyLUFQXrNbTPqUeJv7Bb3UgQHmamxQpAoYgV2rWjVS6zsf",
  "key9": "4si4bTHooWmSko17ddHsBPLqpLg51P4dgQxLp4Z7qrwkZKt3SvbUvdP3XUEKkkBirk1VcQzyqzbxu1omLwHsaRZW",
  "key10": "4y14HDpGb1yYor9SAPegYiTLDqesz9C2YsDTHm7ePag2wwEKTLCikWBqzKUQKAiKbPoV4Rnzjpx6jHpLpdrAifYk",
  "key11": "5GhaSVhUcZwrJZGUXfra3imsDXoEV9L3kZ8m2StxgyapcwcWQMBZR9PAVJXjXMhthV54dSj1rrGHkUs9dxhQDVVh",
  "key12": "4kMZkDKfYhNmuwyhkQ7MxTh4tjBAZBFhkNwrUpPKMXZr74RLG1mdnhUc4FWkYLbk4VKUTDE7VZjFJtGPtkYMq3L8",
  "key13": "o7V54XLQ2iUELD6synkw7xCDmappdJ8DKeKzP3vYc2r9Jff8PmtXs7jJK5wgoxvhPxm19dCP93xWYhCZsfxPD6q",
  "key14": "2Vm6DjGtHcAcHJi2MAGWnguvf468cTWmDGaKCKs7EUTKGHuDnJWmtZVBtmUs3cqcjW1Fkm8dBHcExnraCkdKBDxW",
  "key15": "5ftayF5dvdxSReW9A5UA2mNb3SAUwUpjNv6rd1d32u2GQj2tjqjMDnhfUYMYBy2emE18bRk3dgGSaMSRZuPB4SdT",
  "key16": "21VRteRQRderFVVQPHbqwv2dsRHCeZf5oKxKSx3dKw3NA7RFnB5dqWeoVPq7kmhH1vrbdRDci7EdE93NMZJdkuMn",
  "key17": "2RbzTvAP8z2mJC4fVchp6DNnnPWCR9YchTMyYQmQRxibizKqHUAVnjVzinNijRwM6L52c1trs3bwYtxYqAxrsEHD",
  "key18": "2bPApMmzSnXAMBRj1v9E8vmxbjQGEaT9FUmr4k83UavmeFLJ3Yxtvgcbyf2eRTe4CMGEJcwXLg3QmsfL4qNpkE5w",
  "key19": "4xWmBrtBFtdqPK7GW4Jqix1rFncK6fnJYTXUaXmzJjygBeye6TndBPQBSkJjEWhRMvtGXBskWMb851T22jtHSm3T",
  "key20": "4ZytxuB39QyXKSJmFSdiBfKKz3D5vwW76DQVch9FR8geYrmP1naoBafPqKNqwQY1YdaTpwCCa1cCBiAhb3b89QiG",
  "key21": "32BUedKdpfxfktDvrKzApMNwGwY3PinXf59q41n9HRygzZcFd55ruB8Dvs6GZQ1V7vtD1XjvaKB2MXAMt5ihiG31",
  "key22": "2m6sMfGg576x5gNmmtmtP6ycwBCbLSRzetRmDf73j9n8s9iup6rg7pwRTc5qneWjiePbRGjWnxiEyGLqSnr8U7dk",
  "key23": "2Vk132fUAgqQ9ZQAuHpqq8UvNzuAMS4fsY8PscwDGVDphmV1LpcHuyHSqQoCZ5i9E88N1dAhh7urjsMQ6rEYqHxJ",
  "key24": "cyud4diqhVc1E6ne8wgBaPuWGbofG1Z6QfUXrmwfpn5aNSc5VG9BuRMVHKzjbZS8H4Q9buhUegQHrM6EfzwgSzB",
  "key25": "54EowMYzwwaUqVZNJnkNRSHKWHkGSjBe4kkh6ZtQjLfkAGkCxHGepPbM76eaMn88qxv2mfHMdpM1jCwUp6rtDTBH",
  "key26": "3WV1k9LAgejUAmukWsBWkz3zQ3WL3n7NBy5Y3Uz4tYnc2cNAmDTptBt1BV1eduKx18QiGdj13GpzjEqz1WH4JbQt",
  "key27": "5UM2Ep7bTT26FycvTfQvxFqQcywNRYbfcSNtD2QtyFgCmaFcdYHhsmfwDY4f8eCwdqtGZqxT8w5bgjsJ7TsTbKQH",
  "key28": "44S9aojWup4H9gxeCTpto4d2CagXki1axfCigJT1KwUDPx1S7iqcpmN18N3ravCVi91aS7ZeM4ZCk9MMxsFmyboR",
  "key29": "52zJPKxTiwfR6t4iAoMZoWJgSFPAJLytAcfniQJMbYDrrk27mScom7Wg2Yq3SdZPHD6NFxb4wvRpWbhKkxxwxwcC",
  "key30": "5XmFQLysd8nVaZaMvu46g35jpmdsMKK7RE9cVg6WC4AMdJo9tyymowddYz2dJThArpwNP5MpGA5wV55jgnG71MLQ",
  "key31": "5nULRhLfifa6VhuQg6B4Ef6DcAE7SY83shhgcop143BMunNEZ8JMVroH5xu6XWBX439aLwmfQVLRFusnQPekCZ2C",
  "key32": "2tdiYgLLwUF7d1jZHcy7NVQBWFMdHimYnddfKhAgx3oJkRqWfyzy5JriHZKkoZwQshzaSi8Lmj8PQ6Vr9nuh3wBF",
  "key33": "3H3TSNCRiiZsf4RvsXNK4ut6ZsdEbSSNY1L5eTHqAXh2Pxd3bkAi9wUV1ixii27phyHeZjbh6EL1C4YHPeBgeuJg",
  "key34": "3upPTnsccRDy8ca6vFQ7wrBuZ2VWbiYCuXZbV9ADKmBtkNkGYiLyFYuv82YuUQ4X9VUdffR7sR17irSEsWSWLqVW",
  "key35": "2JmJqBAXUxdzfLgr69T8YYWuncacptxv6PwQMeN5yxeZgMjqrcTiShkenUwsy1fWHqXdd63EbP1eU6J8QAU8GBPR",
  "key36": "2pmLxA57cHfijL19fio3yNYmZyn48sKt5qGMsbZuBfUvNc52Kj7Yv8EtGUC59E85Dk2L1UMu61qA7nvuiEnHD3K7",
  "key37": "5QEK7KJ97Ape4FTtHPzXEcy5DbNPYA2S4bbZykjsujrDunr6vkjf16jjmCb3KZFTrDKGJZqw3boVFUL2gJcLp6nC",
  "key38": "5ocbdKAgwbfqy9rW7FFUXGb5QDaenWMDzhB7tTvPSc1piRzcy5wvwcSs8Pk1ScSBVyaQVberf2ykc7FtHRJGY6Yj",
  "key39": "47SKprCh9rDrtBvfpdx296uhuSQ1cBnrgq92ztFkXGUHKsquCmWctGXv8LiuGsu8kJcUXuCk8Kjw7uBgefHKahZo",
  "key40": "54CiM78AXwRgg8YomusHUoDSC9CSnCHfSyL8yJ7iycJ4s6TG9CQQuP3zi8itRWfXK1wWUq4o4wWrYhr22CuL2FPx",
  "key41": "4gCr5ubPU9dGnPeNZY5Wfd9GhpsDFy7tgCFJut1pEM5ihhwJKLidvC6osKt65hnvgDZAGoGefrpFjrxXyFpV7dt"
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
