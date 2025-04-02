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
    "4HJUK5UW6Hx12mcdkPrLawYPA8DkEars2gtqZ4kuFqcKW5c1vp1sKQSP3Q1uaHeVxo7uAS6utZha1xVy2h5TgER7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xBwUiRGRppk9DXyZ2cPH7hg6ktPmQerkXGadNf7v6C5LmKmK9s9qRyUo5DPivzJ9cbFKdEBu2TBGJygAv9Qiyh",
  "key1": "5UotPiuEWHYodTvrkTvGhMhoNEoKPL3mdwJXSNujimgjYTHpYRTzXJyVoDqfD3Sc64CbghG6ymWqW5DWun4WEGFV",
  "key2": "5ZzmDFkPADvsMdkrs8w6bAFR7MhsJLCdffSXFeT6LyfkeiQUoQxT68Fk7qy2g1hzT5zwxXzgkAStJoG2y8D7j9sV",
  "key3": "42GWjJN4z5ZSqCUdNLvyaH1Z289wFSb1ykxy7Z9P9Bupxw5DZ3vZLesog9X9sNrrh91VhkT4e8WDCeVTdLUGWx1Q",
  "key4": "WqCfEgX14oGs8esiPCWn25uKBmtVb4DAYQrJmbZcSmgQCHwhpCWNw7AjHaYyiVWEX8HkysgtruoiYHuCw95J7rQ",
  "key5": "3NaBMDYfXMQ95ov9DiSPiDHn9JdeUJaNRFGhhe3snEFvUbcx355ub7S1pgTfHb1MPhCRnyDwzmuLtqxHjCXNyejy",
  "key6": "2JFNxUurEENYsnTMn1X4BdTtrZQ8cPGuKNL9S3YCzL5vtieUA5A6weqjcnGnnqG6W3CjZ9aXZJXzBFaS497t9Kfb",
  "key7": "2Kgnt6z9RonsZgbWLjhXyKS5Y5QobS28Lo7RkbfafFL11zqWgaWwKrbmwN9SJEzs9W1cWpuC3jpZZPBibGkat6RA",
  "key8": "4cx9R4jRvaHBKJZDtxeYrKP2wfrHevtcBgstMerYEjiNyzDBLbKmp41xvT1HcqWdYZiCDZ7J5inwpFYy7NjsHNHy",
  "key9": "2dXBEJ6e7yRwWHYBBwm2Dkm5Bhb765MWZ6xG4skYNxRMCL1MsYmSdr1ejve33NwfqLmLtBKRAfjfYWREeAnfQWyY",
  "key10": "5gEKLx92FiAm19tVXzb4WNsroB9exSz1GGJ8pYft8BdN4p2Eq4jGnrmajmWeQg7WdvjW4kMKFHMdJN9hCB1u9caV",
  "key11": "5mMva8LwVMfziSujmuQJEQGp7EAynTXZ2Q6Bb9NRPdKqXLFUiTyQFGvZRgZ62Ec1XSUEALaeLz5J96b2Eb2ackJq",
  "key12": "2JP1rJ69qVpXbjdwnrHQohZHeRtJRdLhGzVpqu6pGTLKz1TRxidbBhpx7bDyWYenqdz7aeFYJWVsHv7xvh7CTuv3",
  "key13": "2GQXm3XMVccBaCbz9tDcjWdSU9hV1CYA8q5nXVtCQAog4yYiGF5PhhEa4srFvULh7zwNbfKY1YUw2gDEVT4Ujayx",
  "key14": "wMQuVfVGXSr8bZVEwck6nPKg4QiMHbeMRRFCV5WhmsF5AUcQVYTPWEdwFVhWb1wzFGBWnVk56VyLjXYbe7UCRoZ",
  "key15": "29GqTnuTaZrtM75ETFAE5tENZEG8MrDxbk9867eVpAoXQTeWTTP6mAZDKVR3YzRb2izMF3kCxn9t4TRLiWudYpYr",
  "key16": "47ajKRDmA21kgJKTkZsYwYxL3W2uN7GvqwouP5PV4MR72om27WhsT24pzgYoxWm6S4dx36QfhqQDMgjXxX8XsU2e",
  "key17": "5Em9BisuqJWJjaw92ey3x4ZurqskDpL9AWvUxa9p821qUK2nyfqovDxA66PKFJEa2bfuavzFrZGunUuRcLoUSScZ",
  "key18": "EmHCT25zx9pAgCo4fE5emBmCxftn8PF97Yh4o5fc3HvH9rYms3yxUiJ1RySh79RFQNQDEPiewxYxGHoZSXd5oWK",
  "key19": "5mqR372Tu13Bsc4uZupMjNhZzCVQ5i9oDorgDJ2jqeaLTexdigYTFjEWhGpnowfN1u9sUrapJ9NoBvoapSSzoZdX",
  "key20": "RjmVogQuQBEcU3gZRhviw9geiQAwDwJxfA6thvD2kcRKPUAmNogVR37NxRBve1WscfT528eKVH8A5zgMzcQc7JW",
  "key21": "tqjNErfw1rRASuN9xeVUo9B5fGbqiRAhsT2fpBSVH2tuWmcWqK2CnLMgw2X3D6K5tccVWPp3u1eVHkAHyQkzu2K",
  "key22": "2dWjKXwB6RSuZeXT9MyYgCS9mjsTcEwxSn5AVRHT4WuvGuP3DUfeNPA3cNbu41teZiE1aNR3d63xupEJu3hZZdqE",
  "key23": "2tNjEJZyATZfyWZM5s6W76LLNTAwUvBiC96v1Z5Lqea55H9BbwPSNEAmRAfKdQqKhMXRSPwzKvsFu5DrwU2jWjgp",
  "key24": "2RFjN3wKUj4FREV5g51ygpu9diH8BTktGnxgzWJu53coEduuBPwAK2vRxYjNeNRFsEJ1ovXEs4mqoun4w8Pnyrw9",
  "key25": "vfyr18mDEUZBh6cesk4AkK6miGo7kYhG4Y5xiGXQRPcLz1iWj5uvDmwg9bfwrS72APDSVcSpZPSeRGrFgDBnySB",
  "key26": "4TbuDwZAL4XTxhAu7pv9YgbKVJZBomUkY7KAXMVUC7gfzKo1pVzweL8NPTALz2MfUts65xEjpwPgMz2ARVvDMqG2",
  "key27": "RaY9hhsb4qEWW2oJ1odqVSMh7gM5cLats34JbX3i78jYMAHkGvKk6BZZgKfcfDKcsRWcaJ2r6QYFCmZ4Anr1QAa",
  "key28": "4uvAWTZ4jyGv4snP9mPf1dvvdVYk9mKUBJ7d2qtHWyCt1VQS4yFbhpthX1YzJugwGs63EgPdQWdY6PuBk7yy1kMg",
  "key29": "3p1yXkqa52gRKJj6f68pzgyFXgEnKvbFz2M4FVB4qZ4A6rXV9bc8vy1Znw2H47R5eQ9H1HGaYuFnkcTtb9FbiqPa",
  "key30": "2c9G5r7DRYBNks8azsWfqkBt4PLqLXpzsnWvfFADU6fWUDncvAtxqt1Ky5YeJRmhAGUo6HZFvKwCssRbXZmmTAmb",
  "key31": "twvX4VUksbDLyws8krTSbSDqXJhUqk6yQGhcToi1faiEuQHsmJ96BjBHbm6hb66PKnD1M6wNyPf4iVo25BmtZBP",
  "key32": "5wMWCP5S3h2thntCzpXMfcb7pR6cTTeZ7RE7Hn715szEQv9mcoJbgWb8UgPHDUoAAv59CTwctmHRNJp3jppLYPWe",
  "key33": "3KhzpmRTWaEfXTuR7xzLjbGR3JJX1vAY9WDWCFrbGtRK46gjswCpP1jymXWKM6puTW5RpeDN2rgrRzJ6BicSahRo",
  "key34": "62UKiiZkD922gDRoWGbgCbHoXjQwZTHdyyNhb29NdndDc8htN43kVc5QXNUnjzgFAwcgZ3PUyQPbXy8r2wZJGAQV",
  "key35": "4QECqjw1S2igKqLrC91tzRvJ7TFoPBhVE5HpMzZFb3a93uM7rs3EJdMXdAbArpME3k5RbubGHgzrb6PfCjX15jLC",
  "key36": "3Pemno6azxxJndsq3EfyP9VT21GSXXYpaS5Z1H5bkhpMuJs2CohQVy8v8gg4ban2MWjar6G9akVFdtqooWiVQq6h",
  "key37": "3FJaM5SwwHywtYvAcmHJSGBaND8ru853uBk2rRcSnjcX9DCtTN82H1VodhH86Bxkwhp52Ui6d34H83nnSwizoLV6",
  "key38": "qoZiUcpXUJBWtMQGiRbgFAuZuYnonBykqXH6Y4kXK7KVGTG1pn2rw4ph33G9DE68WTfu8XgBHBfRN26Kobzw7yo",
  "key39": "3YS4BMax2fRVDRFyivxWsf385MDm87fQLa7CUSyruEzdkxBxkXoqRqnXoDtx7VBskk2Yu6DgGmMr1cgJ1oJR9tsd",
  "key40": "2uYm5J7kYi4cHKn5XJikKChBmKzxuy7nUeQSUN3MYqCqBP3ZtBydjYihnmgtRBf2F7ssUP9UR2xHuC5Myas1zsEL",
  "key41": "3hzTBcMRQkEMn6e78DM9zW7Xoss9jhPfkgfN1yQd2MfwfBEh4zb5gD7FT9kVRzUmqyUT2zeVVAtp4xtemVB9S3dQ",
  "key42": "3LPuWGu5C7m24CTdEbmXeA9uhEWb59nwAWHMMpWhWzFc2MeQo9J6oLfd3dPxcMcR19ZYRSLvLHysiFCYaZHWNnBn"
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
