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
    "5sCixdatsc6FRMVf4cgYuPJAQEpqQDDcC3VLnixiwMGKHaXFBk4b6bPqywDcae33eQRWpEi1RYimaBWEyBrZUTTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BbQTC9JRpwprMQk1jAJyiHPysAFESJLzk8P2RMVynXE5aXQd3wMXvr6eCfDdoLf6ixdpv6vrghrs2ZvGPBPwjR8",
  "key1": "64GNiTKmgKrN2XdkbWcH94s6hLuwRTXwqFVea5s1JWEb1JkZLuLnNi4KiLdmuxUyc1s8JWFv6DAk8Zu6yyiZ9g7u",
  "key2": "2iRpJTRPEGoZuDBFtNtLreoYPncpuBqJyKN8irvTHJNGmDbd9T6xxwHdDeV1odcbbjKN65hpvTm31i7BZmrPbhg9",
  "key3": "4YLovW8LyamPUK3qY4DtAmW2aijrF353vQP2n2x5QxTdaJqbWuTANwTfxc1ndL2kDqiMBJEFbHiTQXPiM8eCukEj",
  "key4": "4xGytzRwHQoqohKc4b6ZuAW8693adtFYQA63hrXtaMUs5CepWzyDbEuT9nrh8cSjMGANSc7eotf7WMTCRqv6nNvZ",
  "key5": "4ee9tdAWdE7sRnUSpBC4N2YyVGNqpWuYMyVMPBGtMvF8YwLv9LszQezKGc3eok1RKDhSzqJbt6arRKBkeMTwQq49",
  "key6": "3M4gQeJ6FWMFHJn632zkEMvHCzZ2sxAB1GwXvdqEgCddpWkQC2UykFSyMf5a4g9pNVEthKepjZxAdPdy8ZVkkchB",
  "key7": "2Zz8btdtn378EdpEADe2bjkGfNHyusLo4cqwPsa6ERMzFtYQSFE82tyFDz2RZ62X885fmndBKnXdEdVZceLHDL24",
  "key8": "5GRCgpS13WUJmxGW1eSFK5EMfqn5qf86Go9ikgRqy7t2RbdKQFP9TLnEmUmuq71r7FUpqmT8EFEiUf8fhAYnpkur",
  "key9": "5tcvm1sq26SnoJt7RgvERMBwKhkm1JZX3rEYnpJASaHnzsUVKEvrrcJ3U4FhzYyEiGjFg7kZY2qtSJQcQqL6hm72",
  "key10": "4E6ek32Q1ANPvA4VUTKJAKV1vudjTQwaTMKsck8hcmD3TefMdWPSWuhhYYTX3ZJUMyVJP5X51LQdpzBBvGJNnvoe",
  "key11": "5zzg1wV7bR8Jy92XbkhKeGFvBfMw2knEdm2ESQ3HiQqjALJG7xfVgu2QcAg3vuBTLTdZcwZpyfGTNfqa68Qn7PvX",
  "key12": "5cp23ib61rcFoANoTjtqE7JGFLKiFviZcAepnqE8uSmHai9gtqPHkNcxmDstMJ7f6uhJiuwxumyKASZPnNJByDN2",
  "key13": "4LGaVGxTwC9N228LxarpfKDERHoehG3ZqNuGGvTUzd3xvEW9fEjyExbgN4MviECsWztCLL431CECSjudPysrPvou",
  "key14": "tbbsDmcB4kRdwKF2bzqJHFb2mFootWPiYYLok1narwG8rWwgP5192LRvbugg5SLHSHKLu29AMRnyH4eV8i5zCew",
  "key15": "2YswVjp7ggwPLYb7SuKJhtw9BkhBBGjfMo3a5QwtoGDkjgzDRUGE7PTBRtgh5MjQEmXBafsrgqGj9TVctGRkzWUY",
  "key16": "vQQWfaHAspihtFiSuHcqfF5HrHRenwrMtJPUKgcDLypxaWL5Mzf2LoHxib41gGrPBALHKxSBsbNwwMwVqQYuheP",
  "key17": "56zPACSpDUqA9s9EAqCdzCTvSBjgntQGrwUNEHkHZUovFZwp68BSFEc5FBohUxdKAd9mQvKsrTEAXGHataqwFnXo",
  "key18": "4BcG7CPmHFNBd7oPdJCgU8AMM6BNwmc6nkqbBYWN91uJB3n9Rj9QnFyALbTpAihYH7fwTgC8eG8CGKcCyLaUs3VS",
  "key19": "4fn7caKdo8ggsSHLEkKecLAkV724SfTgCK5bqJqsqjL3zz7SRdHWQJj6CBfRHfTokGzSTsDz831NM1B9W6p8ZbBS",
  "key20": "51iK1KjRFNJstpVoihz9CACBW5VUMPTJVptUFGtwzftVGQZoj7xcP3Q3GqNJuWMSN8SqqmuSLjpN7pnrAV7JCXRM",
  "key21": "53xMEnQbw6ERJy9faEVxEBPHkHkcvX1JEV957AonzWoiTtUFcxZbE3QMdS3Ue2ob2jbX2E3yESovZW1doaEJqvP",
  "key22": "4g79uEi7ERCeb57dpbggKNNMYkuSRC5Vu53bTa99ytDCdMJVJRGRjasf39rTZwtP4Q7sfs8XXj72mA2NaTa4BfTv",
  "key23": "3y6DKFM6V8GsBRwGzVJ35644CTCbarNNnEn7CMkCmiabrFVbh1zx8JWjEEthapShiRTWrbt8b48cxgbAkMvkyuft",
  "key24": "5RXSN5Q3dp88y7DNtynb4x5wx1ykEeDMtBTKtvSCumsrcoKxqWSq4rqeWn275BofpxJjTP5BnswUjcVSMZi7cD2M",
  "key25": "4cPuR7PxnEZpRAS9Z2vDhSxjQwn8TnDtBb4qgPUhkrdQJTNizkpF4pNuj8SNFxHByTaujutfzWDWqvdd4BVyAidG",
  "key26": "2X7VLJJtfJkTUMhxwCWvFzCmpekrAvL3MXETBmxieCqhWvQZwKKsRZK5g3BTfEwkpK5FE1hry9GTjqZQVkN1uYGn",
  "key27": "5ZoMEDxNqecVW5ztE2n31rDfi5F6Bd9xPjow76PtoT5nGGXGPvg9Gnp3WiCASU2juwjcq2i3EczGWbb3psUvyrBL"
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
