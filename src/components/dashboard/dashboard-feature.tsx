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
    "2znvgKbhKb7esGU5oQGMNZMjQJk9g2NDtxebWAzZWkYQ4zhzchupioTF6msKEhaQrgbBGpEh6WYz5j7wrfq3UJcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7BgFYy16U3AeAmEq3jQ61GLgQSeuEf7fgkAdXd43fFq4LzgmCejqdUAydEKhu7xifxaAgShre82A1jKLoSD3Bv",
  "key1": "3mSVJq7JBApsyR1USwjNSRiYVhNJLzvLc9ogn8upVx6ftmCUjEZEwVQcHdE7wmchqe852WKuonV4etqmaRWzXHkX",
  "key2": "3PbsK5TrcipDeqseqQXeEy8Rfy7i5BHbto5ZTHGz3CyHxHdBTtTPJQm1XoRrxP5DCMSHsWsTUsVL1rYYPVdB2Y5",
  "key3": "2QfmdiCQhHc72fiSRmpK3k4xs6ZNTuUEWPqVZT4CnPFCSveT47vGWz72faFGovnqhZ2UY3sys8GzNNDqhkd4prw2",
  "key4": "2xC76SSCwMFAteJHts9jmaiCeWAjQ3ucREuNqARoKw4AXJJbj6mVvcBBPVVcDxDLr5C5t5ozUpWfxnvfsvhvWLjP",
  "key5": "53oeCRTHNRgzxKbRdq3HtDPfHKM2AYDBP8vBNytQqsSSLVu35zzrw1yDzWTeX9zwF8tRWrFXZGyp9vkPvfPa4nfZ",
  "key6": "4xeNPjbB1XMC89cFfHkVSuVxrw1rsBYVuTFBFonqmYsp7ArpsCkLXiAtqZpfzYkgWR7u5D5seW3MxzcJzqvc7cxU",
  "key7": "4yiJvxyTCMyUS8WezHUZuJd8eFToezhUGgrXfo9hs2RhtrAXaeKhgWQAcswcvUUkbS827nYjsNYycHzKyomzQdTH",
  "key8": "oznH5p5TuETeXWvWbi7F6qm3V3bbJdxnE6L7Tz9FPUvBXZU4GSSe2FdubVdhq6kyvoKXTxjv1wPGHVi5hs8t9m1",
  "key9": "3D7rLU8KgnNWapmVB4U7n7S7PMoAhw7NygJpRaArAmSxwwtgKz4DNn1F2THad1ajG8po1KH7WnAE46xP4pjYj7P1",
  "key10": "4C7A6wUaSktGiphpkFkUcS3FUM2YtgqFDgW5zxUrNjE6ZxtK3G4FaCsedEQJSqA15kLxAwfNUJgF1558ZQhtGBxa",
  "key11": "2icnrR1jKvRRrG6wGinUGb71CgZ7NznYsa4DnCWsvzfsEWbkcaN4gqGP17ZMySLp2eHvvZicWWkESDtVnruHDZNZ",
  "key12": "3DtETm6UVv2oYgrMSKJdRWB7TXechUwb5kaHKR6nERR8nZRW4MRxJQYJGVupPuumUb5L1KH19jmnVyDMWcJsTGDv",
  "key13": "4P9RfHh7pAXAxX34U3yL3CQ82QjT8pQjCRQC9NvtSMxeW89zHkJVW5aMAQKZY6JmUBRPx32Haox6jbxie19G6tJM",
  "key14": "4GpdHGVoCJs3L6XhTyNqtkKSYBJDQMoAyHiHSTjsZrx7ScNrggbEXQdGqiBjHd3MW5tsHoqoqAXELTUyuTgTEDqx",
  "key15": "3KREu8xzV5RTx1nUdUBTQ8Rkmakard93PPrgUBJRbYzspsRosE9gipQwnSzRuiNyUZ7rJdNcX71cEZesDZRiPW38",
  "key16": "3MjxLTAto5fSxfRkX9EbXmB1fd6GwSu1GZXJsMpXfTNMoqEJfTxjrKa1tXMc4pC9ZkLgTafxhMmBvQtoPTSkPf1p",
  "key17": "2aUx8iK7mJPx7nb951afqNMNF3fGqoM6yc3fMxhsvdhBj2P82bLynMVV6Ee73mQUKd4vPMa4s8K1tYdEJZKPFLsD",
  "key18": "4tgEVko8cKdWjVWnEeFjhF4TH7sN7vCdpCTQLyToBaiftJZRniLzs1hjMYVtHawW9Yah2NDuUVYRMVGVyQDf8xCG",
  "key19": "4gNr3vzjB3cuT9YF6ZPkms82kU2n6hAL3se1BNM3HjPCRa354XpkNT65V613DvNTpQTyyHD5PAZkoPXMVApf3fzX",
  "key20": "2jnx1HP33TVxWsbhjmecP7Y1mYHyQ7B9Aecxhsth3DumYHG7k1EgBFHqcnAu7UofiuK2mou7xGx7BRE6ZVEsi9tz",
  "key21": "qWPzrS6kJkwN2J7R7J2uBvp5Y6ZQnzsgRZP7k4DsndUhus3e7oCnqmeZzYfWEg2BWrUnygD1uiE2s655j3SaTFd",
  "key22": "PNQJaQvCQqRHgAifZexbbivef8fU2kYFMc5F8wrQMrtJD1Fdc3YKxKH8o4CCJKxv3m9zueQ4EdgrWwi8K2RpQwC",
  "key23": "5hXzteFz3pH9hUWm7ynbmrgVy93bQvZT4WT2avdUuntDGDSU3ZXDGXWLn5fv5upSLFg2VitBWVEyRFujTZ9WsPz7",
  "key24": "41DtLFW6j5zZL4Y71mxDZEUWVuaHKAuuZc5T8x6WuvydhCe17vVrpdNpddxmgpsNHxT2cL54y6xjWY3rPoqb5t4c",
  "key25": "4R5pvyiV2D9RZR2aMFfjto5pQexYATBhTJZQoCikAicKV44oxjSq1pMjuRGs67MqthuGBA98nMvS6sVPtcvNBnvx",
  "key26": "5uWEBvbF7pDkd3XF1h8hhCcwBwz8QwoyxWhhFdyKoJHXqJCFer9TpMsKMJEeCuyJVvZLYNC86DxULgNiX36djkEn",
  "key27": "3ukrHpNFd7YCSKRHrXPZEaVmdCaE2xaC8osfvbiCzFhgfzGDw77WDKBKFdDfoMkZqaYjyPeXRQbN78XMvfXCdYuF",
  "key28": "3bPYTM5qcBypd5FKNEbWXezsMeri1Cru4UbuxznCMf9g62E2DYNh4vkVeirJf7w94FH886GvMRdcNt8SiVEewpNn",
  "key29": "2MmhMoLAfZqK7jMJvpBbQskjbNs7ofqFQs9QGPp3x3aLNBKj9uvn7QtthCkrrRmkDKkm11FyyxtK2wTeJQgXW45Q",
  "key30": "5w68tNYdhrKgTKi7Wohd52VLqfF3Tb5ggENX6bFj7RVgxWhpR8eBoh51LT1JTPiUR2fVZ1oWrCTfbLopPgjj3Cgd",
  "key31": "3xBwrVfWf2UGjbTQq5mjZKpZWFyh5NfMnY6y8okw6ViD61SYq9d4QAf8one83kFWjFn4o1SLh8omwMe6xzTCxVeu",
  "key32": "2N1cG3LsHBQcHYEYuPxBN24CkYTdHDVXJVZ2p6Hwk6cc34nRxq6PwqFNfqPzQdnAaLLKUYqun4PTRcUXLspVCSU1",
  "key33": "4k9krwY8iEA5xFwBgVYB76Dq78WocRerzVqYffFupEkoV9uoX3wkNkMfsaiGtAxCWgxeatS7kjtXNPPTZQdPX2uE",
  "key34": "paGSppxHP7xbkFcaGbnPsjXNHwjZDkSKtDA1t9mCCDra1LrDUKFLtcBQZyCW8pAMCKvY38zuqSoQSLUEFyx3aDy",
  "key35": "34mKVwpSBZMZSj1cztVsAgjSx5RWvcrcSCwVo3oJPhkLBRydewxUyXhh3s2R2oV3it71RUGCiStqyidQqgu2DLz9",
  "key36": "3LkzxEFxWpwx4GheFmrihYg177kjtkMcV1GhoKtX5wXgpjSpQ7PZQgWs5YtA3SBd9qFrwWuU33ftmx1sDvuYaykG",
  "key37": "4iCmDPsgnMetRymN3PTrCz8NpRdEGgXn6EKZ1JamJWbFp2Hm9ig8LnoECyBc5MJ3yU2bkQsdY2LWMvu6cUStuT2r",
  "key38": "4eauNvH78dMZppY3q1o1ycxZrDJx5ApNzq8GRo977wUy4AAfjJkK7q5SQCCY3Yhuf7okbvem7ciMx2Uhyt6mAiSq",
  "key39": "5cGdEGVrAgLfFpFqfkuAgij77PAGfgLv3eN5Eqsus3JThc8Kn9DAUk6cMZjJGNVfR39fM9dvPHD21PPQGTBzrnCW"
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
