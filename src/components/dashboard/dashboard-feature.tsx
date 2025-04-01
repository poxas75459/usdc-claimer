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
    "63bLzoRT5nJe4TGvCn6cyg6NmhC2ZtfG2MhkW72e92Qf7Hy7eid4bbfHJpYmnxH1qVFhfDjb6jKBNQTGyHUJz67Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MopfU3JTj4QwxuYS9Y1nNCiirQ7QYUrYDpiTXXNedutnRS1vi6JBXh3wHPiwoYzAqweaLx8FsgVUuT1by6mGaL3",
  "key1": "5jptncqa5Jdp8B2pDmFDmU1dfoiNdNUhhG7sjq2iDhNtXNGmqAskLRKyxAF2jq4isov3pWEcikpfmfeAqd9qhdPN",
  "key2": "42y4DcB6d2JbrnTvbvcTMcPrP1Em9iLJSC2zMDRL6C3Z6MRmedkkbfWKFGDhjqUd9YnSoNCE4oN6oVcbximcaKmK",
  "key3": "2cSaY2XKWcfFPh5cFY2JbMRcNXK8UKKYey24XCkrxfEuQ3L7uTXCmY83DCYeWyvpjaw4NpApoQucWq1fnP9qtxT7",
  "key4": "5sKHU5NWopgCT6mWkdageaN4Lu5FGfLiKcL2nbQjuA7pTFpnDTianckA9EViCFTvJvx4PhJo7vtoZAVqKKNEEC1K",
  "key5": "4eRrQRLyxVqh9fpMUzrQxPwawnXLC8WrC5n7MvxckQweHsrQQdV9fZ6A4DKSyj4pV8PSPxjLR2UCchDSfzn81jFB",
  "key6": "3Vk786akyQDHM9Ddfek2A36syAyJMDuUSfJLfXcUQAdccds6WhWdzp6h8c4kCgMFdSCY9jAdsA3o7poKR4DjjY8i",
  "key7": "65cknnHPtNAoQ4gVSd26kRJo6vGjKyVav7JnTGCZeqiLPhg35AR3LUcMRgfC6bxr2HZxTAQsRZ6mwz9vVKt7e6YK",
  "key8": "zDnQFug7W5Xh4Pw6rBvxhC2XMiwbVoU9YL4WCAMqntShwYzqdVNgwvfLDnz7yAxtz1eCrXXz2QFWx5wXKozEiEy",
  "key9": "HXwhtDNVpRCrk4snqcJnWwZQ92BuLBA7CFc83ms1Gni9queEJGPNW45BEjV3e4Wf1bCB6apEJ4Hev96BoevVFd8",
  "key10": "WSw4FsE7jEy7x74fDU7in3YfeFcJ51GZkj86VgjZWerLux7f4vhvFeqCiCZ5ajTckQ1DpbUUnSD92wYASbQcSA7",
  "key11": "4Fs3BqEbwFEx4aKLzniMkGhNu39hChZKxyVp37cLjFGoHVshSxSHtxyKSDgycDkwvEv6dmeepDxVFfEja2xF3V58",
  "key12": "seMvks9AByij2JYuBWLvssb3pfpSMVsvxfHp6uDVNm1wU47cMxnL8mK8tGDW7fGqtZn1L7x2ogSZYFbi8TkBQJT",
  "key13": "5mT3LYeoqGFBTgmTnLiCeibvCJELDV2xaBmQA79VAodVf8PGVqmJ4TUXGtQypK9CrbMTto5qHG1ssyshX99LmMSL",
  "key14": "X2xrF9kGGNDM1abbnkWApvREXwhhGAknBv6jfxMy77in9mFKy6WwbtgAnukQsRCLMxsWrepC8qWtEPSGnwzo4dQ",
  "key15": "2sfk8hP2ianK3QdrfN5r7jqv5Yt43zoXphkiHrwdciyykxvF39Z6p4GknMqikUkVfAoza7dNfgvqENy12VXnEDZQ",
  "key16": "5WPRTFwjoE4xgrPrx3CAm4utCQL417AmuGcMkCf1gNRRAAMGwnRz4CbLJVUrk9zepMA3JiNjhrvYQ3Um5CSvuyu6",
  "key17": "4uz2YJGHY8SsPZrHWfFsP45JGQsD5BpY6C9KNkWBE5NwqaGnhR6NjtNF4V9L6TAZqqgtpYs4mFpWGRRKVzm2XTnG",
  "key18": "4vi7sCxYvWmBPJBsq3dHqRXgqNN2QqP6X23eNZ1uLVKEgEkrvpHEQwDaX1MiLSSHdSA8gd6s3hPeHzsTckTGSoGo",
  "key19": "2ABDdt59hJHXrQLMhCWCCYLMUkTbaXJQuD95965wKLCDnBi4ZQohEaHm6bsuoh75GqL7cKaK9kKkHARbvEB6um55",
  "key20": "4ecYNPrPB4CkPCUHHkAxuxY86gVZwFRyuZspT6YVTZJpGsoox2tAXqB28BTWWWqSTRbYE858mfvgXYHAnLyvVogh",
  "key21": "3sJiqYokEpucf4Vf4rrSTxmG4xNncM1p1x3VMndSvDYNFy3JKaN1R6VDvFtLpNZjqbuoWNxai8NjKvD8fCJFrg3D",
  "key22": "2vEd19MnHtdAaxSmi6JsZLWquiVGgJuX4VPJtKXt9imApQve53YJgFQMNL8i2sY6UUQ4P45NMd5hqZXJHsoNek7r",
  "key23": "3D7dJ8EgzM3J1CDxMSqMFNAEjRnYRQVHz2Ao9wRJ4NZb56HeF26i9Tvgh6Kopdv7LSxWFvDuXkdoCCxQy6SZUVM8",
  "key24": "2TiY5n8Sg4PQ8u5Tn3iPAv1rk1BxYhzroSdPz4Y6tBUnbbCGovm74tK1UKcCeFhvngb37oBv7RSyo32oe7f8xe5R"
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
