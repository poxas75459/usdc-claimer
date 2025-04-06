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
    "3362v5o2RRy5bpBsMixwV7WDe9PLorYKv566vPQzpdvgfjY4qfDrdfZP1GkHeZE2bfo4JDx9XqoTvtVzCG5Fa6gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327QSDWAXuGRd7Jdiif7XwRD4uUWEE3iR58wRqBiFkp14etwR6vdj7wfPKkohbRBvpPR3dttmUv2y4Zc5ZU6sjXQ",
  "key1": "47dr67gkwKZ1L5c7mddo7Ycqn52HetcrfKmxNuC3kAGUPDpYGazwfVT6NJDysEnjQ7U6uGibAsuMqARehkCyUojL",
  "key2": "2cGZG9vy4QBFBHuYx6uZHHuyanhtTZ2sSCKWBgjZGE6mFyBVdyL2n8WKttC5pBSWbb82eaVh1gsnYbViLEkZ85TA",
  "key3": "3YzqS3VGydff9p68wvXWhfKaBoLPn2S72nFRpbrBrYz6Uh7fBTCm2hKr92f1WToR4ruGWv8XvFfrJ6nvLEpLjM2d",
  "key4": "2FRdCBe4t53uP4VzJHDJRxSPszpWVnXgh5d9r9wR643VDM1CftqZGt5Jpu6t2yGsTaNYbo5pcZ4kPb2bZBpo68J4",
  "key5": "2g96WgAmUxEw2es5SqotKxeUj38Gjy3AAQJx9FWbdVp8LCt7wzvYUJLMwqc75AkAojr4psatQSEebWAxfPkgb2MV",
  "key6": "5CmdLxyjioTeMF1SJifx5UhQQoCNdjoZbXrGBZvANE62MX9QbymjFeoTB2cCXZbQ8Nj9mReRmFTqCZA1DRqrvGti",
  "key7": "5WpV5CML8A2HG7ZD69jrZrNWbpr8bWz9BKgeaXNWC86trRr9vZrBHy517TF7bfngKGz3WVd8jeyS1Tknbgd8BYvQ",
  "key8": "5WYJAeKE2RPd49PJoMQ3dxHdNAj4svD3qHZqzscsmjoprdpT7TAtUmbZstSV9vf1ztprs9BXiZT1wjLMfjj9Fo9i",
  "key9": "5PG1sLG62u4TMwNGD97LDCab11JKbcDVWyCjauJaVUneo7JyvivUZXwfQTcJ23ukjgMPQxD5PSnwPbx1A18DehJQ",
  "key10": "4w8xQwex14vPd9MHBULN3b5Np6eyVeJmr3dAsfHxQ7Z11txhmzxkbHgqYCiyS1akBDWkXULdmSdHAvgdvdgo2bE2",
  "key11": "3ktRwfgRK4h6kSmeVL1uUTfCMcRAkf7fESexpG7YWg6TAiuJQrSNjT1jzH7hPXkKUXmYQK5CPA6HtFHSV5xmnKZS",
  "key12": "3pkJLcoS9cZ9T2iqioo6oMzCLcLgdULFcuoJuWedek4MD5mCRSdoNionb2ahkXLsG1m7Yv8tEbfwuQ6vo1ikF9jK",
  "key13": "2z8vkpUnCRDScJWPPC99oLw97oX5G6f76QEGuKvyZVkNsTnLnXTgZx3Yr2BoXMfGx3yZNvVXWCV5X7ZqXNJDpSK9",
  "key14": "21jtnrA4uCjhsghSdRgjGfmgtFzs92pwho9kRwWBtdt4XDjENU6QpcJZMuKhZjXxqYrooVvhgDyvUdfQqVu9wKdu",
  "key15": "2SbiqnWosu6odAkq81pRGRWwLG6DhNYPGETKoFGZZ1RRAtYeVXB73DG91K8LwFMHaxo2jE4o6fjJ6sKruJZVRfvp",
  "key16": "3oYx5T4frwZnNfZHyrxCjG39yVQGq3goAnwTAEFvbPTNdwDk2pJhTVi6P8g1W2GXeMbeG9jaLJMRwA5ppUcBXk1B",
  "key17": "26mBg41WBxuwC4ge35Xyb4qmzQsppBBag4H2fHWo4KzWj9zps4x8ZyBvotkkqZn2XxCvrYv748txEYrnfqsMyUgU",
  "key18": "5NkABHxbW5ZogHYFjuWR9Esfxd2gTG2an9CE4L7zsQs2qVFxc6FxP2fhhQ4qqsqPmNc24zpmq8hhedYAr743L1Zj",
  "key19": "5fmyWLrwj718UksrEJFsij8nwoS8gj9ui99YywUUUTKu5MgS5XCD3gnxwTMAPik35u2iJVo61oyd7zpcyyZrGXKU",
  "key20": "66vaKhsLEZm3ZCZaAnQKtzPLzndpMLvQT5Dp32WrTRCjjNPaQZF4KrVGevNnF2Nb3Hgsd3PQhFFCLm6vVVMQNwi3",
  "key21": "3LKRGcdosNSGDkHUkX7Qz6v4KB3d1dsmRKZdHyWH34icfQLFU8rJxM8asDJj9DqgTq98ih9ziQ1NJyUzbSpjbKws",
  "key22": "EnXHDu2pBPesZBPSEDrTrsXixvMa9CtkUprX2UA6Umtpyhq3UdzmFmZ8T28ZQfoqGztZ8WiU4BhfqNnrMCAh8om",
  "key23": "787JBdujKokLvfnxmKyZb4df1c86T4CEb2u9nvPm4ijzoqShvrDnZdQMBLnU3A5ote5a1xuXzP1vnjDPRpSLt1v",
  "key24": "3angb4BvU9SG4P5uPKfWhqnHyywyDHpVgMWHZoQZjysomCvuUaPHvnae6kKbV7MMMvCRkfsJNi3Y7cCeBhqMeSkf",
  "key25": "61cxdCVxZL1UerQpfj8RyuYLVsU7whaP3jA69fkQY6coAUquhSj3K8BQH5SctTYoVx5SkoqF6dzoTqRuZK4Xm1o8",
  "key26": "2MugNnUZHB6cwmVkoYNp4QgJo2MxHcTCTaPyCB3fLT4iJsNtvUZkVTKgeQVD6BRY1wb92nHcgXpT8ymeckr9KrFR",
  "key27": "4iXvEJQvXSFAC3jQLSfGG9Wrr6pzfcXXYGoYfKnDjPwJaecAY6J6VzM1vqprBuULbbKkLciBuToFgJBMryVZftBK",
  "key28": "4ce7nQWSdeQhPcEsZC8JuBVNuiE6Tm5xaxNvborBakvSxFx8Pnk1EAGe4iPKGkRcwDY4GDv74ysd7XFsnPNirPKe",
  "key29": "3EW4Arj5jAgBZ6RBoo2uiAPnuEXDgonrsHdbL2otNdritp9AajGJkdZHzNDM2oWZedxzPoiwjbTHipeeiPpGe89S",
  "key30": "5Dr5GVyoxc3KYq8HrCKLZQqkez8y2X5hj5zdmFBLwJDsnjPCsTYUYdXr4G2kkmRWdC8xsvuDpvVHnCHtgdM9R8hw",
  "key31": "4PHKWCP9A3LbiGNku11A9FLfUaoMtwrGxEWmDx6mVTCEfDb6x4DQmcn3DkSLh5954pWCvLFtWStFG3MXQDaWe2SQ",
  "key32": "3h78rnYBSvgEAVSsUXg6LHbq7ci2JhM4yvfPJVRqUJPWMDNTPBbeMR9zxWgMpc7WCWuxuaWQhXJmCcknVLiJARMX",
  "key33": "3ZXtDdH6cukTtdGGAUsxBRPMgY7ZscK2cpKD5WsxAX28YaMh6ntRdyz5ugUKHz3a3eZKBvesjkBEVgVS1ao8U9kH",
  "key34": "3soYmE4fWAXpai7JxQUE6E6MKYfdaV3jfcRhwZYz4bZDQDqYmWBZKLwco8VBbAko9graeJzPMXXAZHoMiQjDt7oL",
  "key35": "5Z7tsegTrUVkjTqLKBYNvgniCcSFJtucbQCV5ArscJzPyM4fTb4GEjRgMapoawg3JBvEncTn55EmKemQRrEhj8nn",
  "key36": "4AvzMGQYCXLdH8J9hFe6c4MjQFNEQw94Ve8rQmXyN4cpcSsnGNa42DDse6Z2SRiZDYtFDf8BLMGsaozWHUddqS8q",
  "key37": "5npHDk5tVcWFrE72g4Wt5qk9QjVkmkBhGz9Xp3D2YUNW5taEEvX3X3DEaC4kyDaNBRvvgExGRirJ7LNXGaBVZaxe",
  "key38": "47Hrtk4MucDL6XwUSzNrykpNMgtsHPf4soPj1zyqVKF9HC392Q6MkUobwnExa2U8TwD55i2ocqKPUYTgffQnTefg",
  "key39": "62fo2rQmq9zmkeVGABhQqppep9ufbcEqeycLYhLyWpCvxU7VrmB2H1UokqwYQCUoodL97wH8w9M4ZcfAzhep6okR"
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
