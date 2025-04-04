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
    "4Ssr82Kds2SbZ5Ya8UuakPtgpEYBvh9CasjqMCv3bSw4avsetLDJQUju1RfoJBH5vx53E3PvXkYwxkUFuMcRKVcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWtu5qKCQud5amrcXjGdag4Vt7ySKW2Rv83vvkWwKrNKApuRsKTNcn4dRsK1vzGKgrf5tJSimauA9Xw8SFqPzC6",
  "key1": "5GG3BtsdYMQVCTfzuesahm1tzwW2TmogktXi8QcP18ibcYW5fq847XWZ1PRhBSHuJMi6W3izyU7sFZSq5qreweXd",
  "key2": "546pQpnhpuvUyc2NBzsqWkv3RyUMef9JkNUZvZSU4Pvwz4onDLndgSJottLY1vENDniUrmSuw8JTMAcrnrQEPf7U",
  "key3": "XiUoqPGqFZzJhUKjFb83xVn9LF6uP3snRZGFoLC81v8c3aAZnePgCMm2wCYKTLJmTcfpRfZrQuu2gq7hLrtPJAH",
  "key4": "63sEjpiUD9E2bFDJu6ArpBGCx44KJQWTE7jMQda5LaJ63N7TncGDYXZgWT3W3EDm4rcZz5rAmi2CmzkTZ7FZDkMn",
  "key5": "65UCE7MBhVdJiAZ5ZPqj4HkDpmYQNphm3vDwrvViUardUTyqvRdTAXRSRm8BYGtuHxEY2nWN2k151nEnJ3qiQno5",
  "key6": "44yWMhQSbokEoAyiRvMfwA4nGCuCAshCs1CVmBd2EexmXd2Z7Qg9Dv3b3LioBYumNUxtCp3KfTbFFUxscEJhUQZD",
  "key7": "2afxhXinyUEVQLiU2ZLENFftVM7rsfz3JntyjPVPzHNWTYv8pVKjk8riRhrevAi729odYyGNq8sNcfiUCCcBpcSM",
  "key8": "2qChyZVbR6ZNGqUJm4yJC36TdDL4KmVnVAQShraYgFMX2Bvt8aYnzhfnN7SnH3U1AZNxur3YrKsKU9mFmaTMmutZ",
  "key9": "5RBeGapCeJuyU7FsnyjtHLGDftfytan91h2RtU6jybGnm9iyErarHWDNXHR5gt8VCP7FED2qcKR9dEh6R7jpp8Bv",
  "key10": "PHXq8e8ZXnAyEeJ4LcubqMsdLtm2jwNach4cpoKWLujAS2bwrR2WzZiYVFVQEQrZkfiKVhZ7ohH9kVYVp2SrWFf",
  "key11": "NkN2pHMpaH82Ybt5xC9tVzZe7QFch9yP88ugUtsQqJNDBhiikNCUieZxPTuoVZu8rNjMn3EBs74AEKBernSaXzk",
  "key12": "y622vwM3adSfFpgkm5HM6qKDCkpuvfxBE8hWmWUTEq1T4fMMz7n7CnHS7zJWgqHCKKPUtoKtjepNAwgZ3zxK1sa",
  "key13": "4UnKWuSx5ieiQ7tkFzXyKiFzmnMwwZ26U1gZNoYJE7TeefanT7jV2QrNSNgHL26XayQjd151kHBHcGjAr3ynz1Y8",
  "key14": "eNHRECNNhvaUptibRvgyEkmrFsKGFBGPhLSo5c3X4mwzUsaifCSQQbGFWTrmBBPE9hLRE4khUm44EHgLmEgHtLR",
  "key15": "5oXgb6ch4WAz3g77SMovDcznT5BKYZxTrxnTTmxjum44CNFj1y74Wn4Aw6pG1ink75i567zmGLqKmHmzH567RjnV",
  "key16": "RGPet3ELxoa3qX3DvhkrT4S9jiWj2hxX21wXXoVD1ux8m5ahorPeNE7wJ5qoEJpifRMhC6Zm4RDf6CWXW6JL6JG",
  "key17": "4kxykYRXSgzdL9Qk9FHxe3VYCSWCcRc45n7ZwooZo8WzGxUQBJF2KvHT1iAVYpexVXh789d3kfjU2bTcfWXzZrhQ",
  "key18": "7SdTEh6mfEXzwodu534rGmYFnDjZMRQRBqc6JbJcesfVbGqA7AzgRX5Z79wiQDWb2b9Q6vJQ3xUxzVtPDUqZFA6",
  "key19": "2ivGs42UyBxWkxGKBnFgHorLX64wzWrkyBGHpwb14iE9uvLQ7P1J8wuNMHqJWaV4xCp1PFpGkGhna1FwpTyewhUR",
  "key20": "TBRo9XWGw2uyHugPyyWMXwRK1T31Ue4RRKf6zm9CCjWpkSKfvK3oJAxrPetsD4uZi9niTUVwbQ82WJ3DSoE5nQ1",
  "key21": "2LZZZsXNearfPUXf4yP9a66ECPZJMxRbPrVx3xJLgqMxRi92Yp3uxDDXYEeacC99BihVAanmCcgpmMikY1eBzEwu",
  "key22": "AjXg3e8E2tT26r81suBDgURdPYgCUxW7ykNkNThJ5XDN8L9nsWYrNoLioDGEB7afTUFQj2G1vEX82YRVWSVhD8F",
  "key23": "wWgZicvE2rvSC3aLib1qaig9dkVhavpes4bey4esiPvbfVrPktTx3HuTV1bhCT9hJQ1jUkiezPAGMxBtj68LQPY",
  "key24": "3eBLVEBDP8wHZ5k9erXkKJqisqZXJBMXthNBRSuxoEgFDVVTJ4gvPVoFfeb7AbRTrkwgQTypeiU2gHdfcT1QzCE",
  "key25": "675TXbWHvRLvXDHk6KecXZdAHfaLA4ygUZZmjvUVFGLoWwunQaNXfDJvSswt5fnvNCG8u2K9u7LxdpsnGC55Wjkd"
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
