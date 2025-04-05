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
    "2YZAP2XPaDVuDUknvxFJH7bntgVRRRMurnVXNapj8NWHBLdguf6Zee5QuWCo94cwFC3XJQqsZDqCqzgMKSgt4aBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t1VUwu1H9n5ewAVm4R7eydMvajoqCbrynqSy4pgiCSPGr2dmcn9Xbx7gN9CDVVwMRuGByqnFRLtt9m6WM7BPn4m",
  "key1": "5on94GmU1Tgm9UNqPZ67U18uA49r8yj8SthBEYBP7TUXk9xSY2mrSC4w7U8nFmayQAoMsoN3y9inbFqVgCy5jXkV",
  "key2": "3vsAJqGYrPEvCZwePUbebKyZXz126pzLrXYiMZxByxfjU4hbommpVxoUqfD5nUSBwMDRyRRbLqDgrWvGKopvkfuo",
  "key3": "522ZT6fQ54TZFdEG84krWbAnGCtam5k8ZVzWSRJWsmwZL8whRSA3JLyYf4N7dvBcKoBjGAPVSu69c5xxFaoaRCxV",
  "key4": "41mZZ2UeUJWX8prrFLjM37wrCg55WzGMWfDyZJprxoHFnjRKenfKaVE5Cs8oYqX3xGPShNs4ucvEwwCxpzc3ErHH",
  "key5": "5TiJoMfYTewS4LnwyU1VmgFACRQaDMy9UtXxoDPk5gy9FLzmT7BQBmuB7v8EbvEk9AJjEAryQSuUQ2Kq3bVTGvJn",
  "key6": "264QisEXetcCRk9GBWUiaGjQ8QHwG4P8LR44TPoBdguhpxFq2U7GszixRjac8iJVxuFg5QVMcFffQwUnEXmGe2b1",
  "key7": "5c4bmZw7QqXUJ8VQ5UAFanBNEazxuJkhnZnzo91sTnJQghaTvQYhydwBF8jyGmi8y1FM3qkToRzgDzhwAr2kji58",
  "key8": "4X9zm11J6MpB1Mcea9qo3MEEENsR5D79vDbEdNdXiMpm9zTpicZZVi3wWPFkp2m8qMoSpr4i1mZBuCq1yF6kbXoU",
  "key9": "4MAeXHzDnfSS4WrgcvKfo9ote8ZR7DXnH4uC29wu8xiwct1xRg62kcUY3dDMwi1MduwKB6eosaqnuduEB9YSQzZE",
  "key10": "44sePoFzJRLWJy2te3BnY8mgicA9JZLrzV1zn7os24XrxbVijar11C51tcbgDfH37QeZ1oiHfoXPY1zkayLdJV3d",
  "key11": "4w47aQdWsG4hdmA6dYqSgFNoR5kt2GbXz3ffwyKQCjiQv7Q1BheYAoDPWvXCA7LLJtoBq4Ycu59hDtjJcTe3MGwm",
  "key12": "3G844hnFPjtzHbEJAd2urCWnJm9imAMJrvz5XRriBeiSqmQwfnbTadUNd783eQarjoVoebvyjdKAunxE2ufMViAD",
  "key13": "4isHL4wueKCF8pTSajRS5HaJSEZ7MX4dVr1cE3Y8mG11ZFQwzgMvB8NV9EPP8vcvoT2FMFfVwC4FmjtsjcQkbsbn",
  "key14": "3N4ZtHBMagZEA3kaPXFxmgjFsCzBm6HtQUVRwB56UqbEU8mFm9XZXoateWukhaFpQxm5dCdZbqJE6XnNphfXdgig",
  "key15": "2DsDGqMqpMsitxkJoSn4dYaAuvbhCqNd3MbhkTxjgfgxSEvsKgPDkAgHi7X7BT7cd7L6AheSuHyaeJ97QPj8Ehhw",
  "key16": "5omABnrkETSfEiHaMMCBgefG8HaAE3HMq2z29LogzqzMj447MTW7xVetjmrvjdPXNEV6yjpX2wCggHfweyp9k6Gr",
  "key17": "4cepDYD6CnNwCw5cSRmxvvmddP5J8v6pAHDGT6uoURB5nt9pKbbPL61LBdUeQhLeLnq8zBoaNMS7VQiZwovwHNnA",
  "key18": "3MyShSR5g8m26uiDydyK4oBCK5GWerpqgEXDDdBr33et5rQYZvRJag9e3h4fEthhUrZ17PVZidJzvMwRGkzwWgAu",
  "key19": "pEvfj7UhnH2joyJin5zx33Jh3fkS4HF7Xp6k5Th699eJshVhp2CRXysRrYDQtS2Tpeg9cj4nZzXT9wuvsbmVkHf",
  "key20": "5NRNU4qfWrn8Kctujd6NRNSifBykJrwM79D7iKCCGe62m5zAY7E2HHVCLWfgNnq1X2PZtsfBS7v7ETdGeZofmow2",
  "key21": "2Vk8JbjdgyUXfMvM6o4RE3nUGKsZdKK5J7T3eksnphREYgwg8FCu8shdEZVdkAPBuRUsc6ucCLnGbLwpcu8tHNvw",
  "key22": "5k3LU1SBe7btmjqyKAcHtdP5qCogaQ2EWHRpuhayscmLBvTvrwTumBBYMtxTUF8gQDGMsBLaMXjN9kXaPoYbCZNj",
  "key23": "4kqNpKgvNSeb1rkKke45xZbytqB6en8Vz2NPfKHktz5Az7LY54xDAzypKzve5kTqpKXMN7RMpcGVv4JFWZYnVMe9",
  "key24": "3gvgfSDtQsVxRx6S4rGW9y3ZUL23SxdiVmnebpvWJKQBz1bAmY5eBrAHqLQYJRqhVnXdqHiFeDR7DqaD1SjoxE3X",
  "key25": "3otFsNr6Ap1MXNg2PUD7pnK8NBv3CZXmtmpTSZKrPjLyPsq1xVTWHX7GoCJmZTkeGnnzdBbEe8tYtJE36xV9DbWj",
  "key26": "2u5NkQ378XYdkn7vsr6FK32dTfi6SCKWNNx2AXfiQLnjtfp3Zvs17cDqQ5y8Qbuj3u6hZouiVkZhhTFUURWkPFSi",
  "key27": "33h1N9ord2dy2voVfgFzdbAHPETd8jmScxVCcTBdbVj93zySZXvtC3wumosQD9zZX29xagAMsfUoMEW4DHLzSxgT",
  "key28": "384o4DYXGHHxFRqHaQ5F7vQLG6qHYur7TrC4X1yLjPrt4TC2j4UGrVKsyA21ZSi9YxE5UeVr1Ses5WQyqYVAGMiy",
  "key29": "3pavjZMKirHGsxqUdnqdAuMHdav5iFFdXHo8Q9xUtDHDj9e1gbye98y15hVugCebzRLCnzzkW8Hyj8YqUUTn35Nk",
  "key30": "PeNKaj75nADQpr3XqiqkwpYCjw4RM1F3Hxqfun6HcTwf5RQQFAKSko8q6B8RgYSafcx2k6TW7zEbAGR7ixNf2oX",
  "key31": "5w8jfj7TEygHBSnH6ahn21WqoZRtt2FpeR4UfQiHSa28njzoDo9NMLneWBKeFtSQTpGvdWwzyAqJBzkNM1XL4fjq",
  "key32": "4dXfCaRGFEcMyx3KSxfwbW6MakvM7Ut6TtnQEp5akQqryS3YCTQbfKvxXYie22zYgxsmop28hLQbRMD3XxB787eq",
  "key33": "2cY4PMDSRJki9a9jB7HUWZT8xSF5mSJMsS9nsTpzogLewi7ikaznVP1Z3p71gDDa2H2rcnLcDr8GdAMuZUD4Gg62",
  "key34": "3sJtjasnPqMdoSNTeXLr3hwJBSn57WffwFStcRwk46pbrLbPZ6ZN62eEtH8QBDEtjFwnwBTAMmAQMeSToYcA7mQi",
  "key35": "3VQYamjwe17nTuoGfHQxNz6KDCZqwn32uurKCcoMDKv4Mu6W6rXb1KUBdEU8y3FpVbaGCDkNymVELrLYubpavcvZ",
  "key36": "2yhGw8PCNFj2pxrRfUsYGaxeDL15wnDx8CpwjrB5ckQD4jqqCQDtticQg77HJWqjB7hMccv4QzKGYGqeJriamzkt"
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
