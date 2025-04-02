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
    "22xrpMMAmvJex83v4h5ZbJN5ymhASexjTwQu8n31qn2JkgNUuCxRcbeP3f4WUNYXzuLeLTc4ntt5ma1wkGjWC5Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fm1ZhyX97XQS1sUsc27G9k9B84hHw7Py6Fut4JCkfYLMepGX9SgyReYNkNABepbfXpX7f9wDAhpuyxAtcXJbfwo",
  "key1": "4QegcRyCQ4cRPDBxjseRngSKx6vm5khTNn7nBAPfU8eQw55BRmEMQR8jedkXQvs1RKAVrxyBpLwo53Rp9rkJUMEA",
  "key2": "5JUGeeBmHJgtwoCAZCSJWQwqK7SCukEmP7nxBuhS348ZE2arPxwK87mYrFSKFJ5ShKeUGVmZ13EZyhmUHUJtTfuY",
  "key3": "4JhmzR7mu52M6vdy5NPS1QQVt7YR2cktsKb1q35Rx5yNcuP5kCYZisQCWn6pQuqyf3RDzC7GacDh4AjnfLHn2xHy",
  "key4": "25g1XzouZM5oSMFXg4Y1hTUgCdf2nPTDQwLoQyYV1Qkkt24Ti3Recczz7u2TpKAWkb1mrk7pLSwoXEUe8emvUBdN",
  "key5": "CkHhTjHHKTpibmyNQBHxqchdwNPs61XEeEUiGdxWt5jQkvLp552yLpxrcpHVhghAriuciWWMzfh6wWvPM8SJ8Kf",
  "key6": "gLk7mG2ZLTsyw7x1R3MPrNv4Y41NyC18VkPVavaWf3PxEjkHtpvqMgsCzkNSVbGaYJ9qk59DchaEi9GZcPPsZkD",
  "key7": "3SWmBNSDnddGCd4MxpnrE7tKEKjFQGSaNdwoQnanEe4fDzToB9pU2A8xFtWWYqrgfiFom7J7wEbjyv36nqiYLhpP",
  "key8": "5fYZefgm1m7xeuHC7DrdgkkmjLXuKuYM2JMUxX1AtpzQzjmihJCbgZ5a2pXLR8i2pRyiYfFf1MjXJfQ1BFQWPRKv",
  "key9": "59TB4FnRSATb3nzuLKDxzJnE9E9WfhKwytjBBWsZhiSSqV2V2SfgWnGQao4EKdQCcP4CWHd4TTm4kJy9DeSgUAbU",
  "key10": "4WXAYvpkHwEBxBauHjrVWuivYF9Rt4kEXMZm7Fuc6ggehi9k49no6K3E3hNL6fDRuBxLB8LnzLxrDhNpArMKJbV7",
  "key11": "4mqb9EWuMtiYrw6sxedtbjZnxUTGsj5HCV7WBUYo2y3JvGFGrGvwSG5ri26TftHenyVW3n3jVsbnX2RDgWBinuSd",
  "key12": "4TkHwuZyfmoKJurVur9mjsekS7iwfYs1CA8UfjccwRVkkuRcgdaqZJVDC85fWxkXqphaa76gwEueYEbb2NCwcseM",
  "key13": "4UQcqP5CLPucLrPgETUBdJ1iHeQLj454Un5DKYiMtej1vFRYRygeFthenaxWuPinrMShMKxxCE3y2xhBuxamtovW",
  "key14": "54KynSh4TYmqWCBmPf9zpwHiSNefvKTxy3DYtTqzeMw8nRhrACuy1hpLMgNoUGB1Crny2m1KqTti3niFwXB4jF2j",
  "key15": "3G7yJXr18ocziPCKnyuoFhxgEikAhpRz7nWWys67s9XpKMHVtmSpCjhaWf5qcKCeFahYiH2uKeMibjwC1ZyRGvt3",
  "key16": "6VDWH2QedqrThkBMa864fNw9U2xB5isoepvHiY52Ao8cULy3p8WbcCSDPnVDeLnFLaFGBnh1UKA7q9MsTr3uSsz",
  "key17": "5WZYfc4Y8RY76kjzgTCtxPTiMmz1PKBJwajJUUxwy3iF2sYHn5Q64VLC1w5Y8esmY2jxe3cD6r4dk1n3nBo7ate2",
  "key18": "c7KiR9L9V9GQqJAJveLxHm6Cq4pARirWDwYV9jn4WApLD6jM9nmKCr1yyTGgthRavFB73xUDbPB5tmfUN9VyGj5",
  "key19": "4pzBMpjGcaXFzjX31k9cwu4EzHNj2BLd4vA2A1JPfCS4dfseeBHrkLUmjbrucUADiVF1iUMazJ1p3HswDymnRJj8",
  "key20": "5jvVcmTj33js54F1yeYX9gNn7XqfHyZm1k15RBB24juLXsuN2HCNyGCzi65CmhHNLKv2XfEVoWA3pru1UxeAjro",
  "key21": "2PNrKYVCy3sitWC3yjLjptC4LmgLK5ooXX1AEpJf771q2gAUpQcddUQJF28okuyGndjFGzxouCQ3yjtGwUbrLRyK",
  "key22": "2F59vGgTG4xypTT5y6jyTUHSbgtaCPsBaS3qkvDzW2BYGqpoiwPNw64Qnu2WC367fXVAx6Ahig6cUWvBj9DmCTEN",
  "key23": "5y7yghUENr7r86929eQoNMp9R36vfi2ZmvRpakXAwZqaHTMf1Pm4sjUkC5aZWnhkyvsFgeeSVmSrxQasiEiryG6C",
  "key24": "34fUnJ4khwXoayxYoAfxsLwFVEbQu2fb5dspZmwU3m9JRkbsEoZLkK5XEnY72KcED14homCyoFnPoKreACsWAndD",
  "key25": "8Hd8fG21hmTLanv2Ct6fbw5wM7VvLZbxENK1Yt4ESHjjkpExYQzvaveVaqvp22Lb6YZfXLTt7EE6fPuVdoYiAoP",
  "key26": "5fqPFYdG9e89uqcTWnebRw6h9bxVU5mjcQaARmU2ZSMjfJ8WZ8h5cX17RWFR6t4o74N9LRg3obwM834KYVo9Cn3J",
  "key27": "472AaiyRmcf8oLMcCBhcZyYYGb5BWiDzkLxgFw17YJqdP8QBTNUJ2MYTcd1SbMTjZ6NNqmih89M23bjt2zKxY94f",
  "key28": "5daga4FJkkeibtJTZ3Uf1XKFQNm4jJzHqMW8NyNpMjCmBLFYQg5riQ6jZTuF86Zpya4i6FW9dME6gQ622bY7rCdZ",
  "key29": "56qgAUjLVwp3JxW4iLW27EAnUzHcYfB6YrkLWhH6aaq1M7PzgZgA7Ba4ZRyo67GpVL384UTLY9AMtRBjfXjKeg1v",
  "key30": "58hEkp7H5vnh7TUTRDMTrH5JehkfJc2ZtVBmsLbspioepw2TDGPfBcK6kYmjC4Y4bJpd1o4yCDDhNcFm72CVvay6",
  "key31": "58T6481ypuZpn1TV2p3i3iiMFdtzSdY7TnCeDxFV6agEBDBTj2UtPcrKUS72vgQp9z1FnrsV6WRVsoPV6DA5e96Q",
  "key32": "66hzVJc2rR7zzgd8FsncXybM5w1835tNTY2TrnWX2PitbHKa7qwQxixkqmPfwgekwVrzoKn7afiZUzLFy2wifHr1"
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
