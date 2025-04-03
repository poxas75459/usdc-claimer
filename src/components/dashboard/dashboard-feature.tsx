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
    "4rpWhKWCeriHyJgvfvMKexA5YK9vwW292kLVr51FEyvdp8nhC6E75jQzniV38xDktkTxNp6753UmFjqGozqrjuQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TpPvc4PjdmHzYNyhbRAJos4bXo1Ntc8ZzVjcDe5jVoo98DZr2ZHYJdcRYXXJQJarvXWoLcXZ3g6FG1a9wFNGiUF",
  "key1": "3dhnu6twfEnAp4geSTyFxvcnPxqQVdmJfN1jSpEnSRpdaLZwCX384q1kpFTz6bQs3ni4x4w3WMipc51eqREn6pkc",
  "key2": "55emSeXJGB1fT3vRbF92Ybvq6vxNSLNbjJ946GJeuUXgZn93VLnC4QY98TH3UQXu7frZuT2trFKPfYDjwHTHzcx8",
  "key3": "4wEYGbGiabkBfLHxFzBcmSvbq9oPjbYsYb1ieehKPggbsSYdaKQ3D81hZuBirMbjn71uiqTecGcrSQvr1rnpPEM9",
  "key4": "Rgx7miXSfmrRTjVXvvUHrjmwedMhVJfm1RGpni1Q4a125sKLaHEKEZU5RZ86vmHuydqbxhoPnPUdPZcfeKzk9Zb",
  "key5": "3LjrFvLsmcfTMqDUjRWD3FhsVqxa3iLw53wvJviby4odFT3Q11V4FVCQox3NfNrg6iqXsEYmjcLoQ8YcqQNsrAQA",
  "key6": "2GWi5QpXdMuqkb3nwacAdm9MwdjvwvD6Ua3uTP4ihFerxspuJMykRHPcc8oft5EUwafARk4qZfyWpvxHajeFpuTw",
  "key7": "4miAwobta5grj49KQEyK9284eyxgUHuv6YbLEt4g2MpwBCa4hRLNxrEHAXbhk8g71qtfJSWRJTdUSCxgkWLo56Hb",
  "key8": "662T1b1uCbTjR26stbyLYp9sVx2ZYrAur1oAdGtrmq8B2Rss8SnqStL7wSbhwusjYWPMz9Zgr8rDE9JBGLg5zW1Q",
  "key9": "2pkwGDhD4Mb4xp7GAKpkHU9hd5ZhHc6ftZA3ykoqydDh1NTjz8qXtpb8F1AD2SHXD1q1adGMGxeHPhZPAhXPxaHo",
  "key10": "2Deo76XCGkCGw3Y1JNZezA5NchrFnjyaxh4W84SnjmJyYaCt8zQZPsb3jTgSAmG2f3i3pzEj2jKbXvFxJ9KR5MK9",
  "key11": "5f6jnvErmc3fe5DMtFbFirtbQ4Qj2HfGb9SDjv5rQMhSm3wga3m1FVCEYsbeR4JV56ijUxvoMgifax6fmQ4doYxQ",
  "key12": "3zxexcfUQSUntPd7qbaoXZbWQSfaFVaDqAe9WUBAK6xivtXtjCpo6UK5qZU22WXp7qXU3Rk5mBcuXwKjiMdjULH7",
  "key13": "3YNPWp4WfUfFnxBiPQsN7hMGiQxeRtZx7nP2CGddD25LuddCMVRtGQgLjF1TvSoF1VLKbRt1DahKmCTof9c6dHH9",
  "key14": "4WLhSwZRN8GG9Pr6GWgUboDu8nut7r9d7VVDsMxjw88PKBavhZsY1p6a3Vae34mikG7st1yNz8K9Zi9yk48ySPrC",
  "key15": "3TufCQ3bgFZwfJJCNpHdgsX7U1iydR3or6dTbUJB4LZoGaK5QLTfcu38viMccsz68idqbzuYPTHfyCbmtMLnBz5Q",
  "key16": "63YAS4spLNKRNE19JzwTE84SabKjkifsiwFRe2xyufxj86fJu7LQxTpKJCKZGoTvJCSWiXxDSXhFMLXRUKToKTDP",
  "key17": "5cPCGDe979Hk6arn8Uts14XWTsLPsEYqBt1utng7XzxKGqXaSMceDr2xW2ENrb12RxZBnVDBwwY8hYbNSrzwPfdy",
  "key18": "FtyD3TsLTNyb6bhma8vbYhFbpeJG3sCrMFi37VBFCqKLzEWz5Goo1bS3k2adNyR38FTg3Z8eAUunNyLXrzAP2tB",
  "key19": "27fR4tdqgvE6ZRe3MG6mLazrbrCWTyk5bzpzB5mgLamdXBmWGXcrYQyDRw3q7mu4H4YnSQxUQnExqShzAqSq9522",
  "key20": "2USrhgsreNhtwX2FQC58wDrMXYgihqTQbwHwLxw62FVhKGG1FUavapRpQn4Waj1Dhn3e91DpiCAkProqWnEBnRQL",
  "key21": "4qmAntTNbjZe8CTtrE8Zshy9poxAnGhYie6AFRnn8rLtR8RWaYtp6GzwED5FdbpAwxzcNQ5eXeqwbTK1azpbAKU8",
  "key22": "3dZn1aYcJaLy9CayVTBg5xv3DiLgzqJe6SCXVVgaYyoUrhY6udgP1mfPULdpEKStcewvcJ9RMFUc9G1bXqim4Kse",
  "key23": "4pWBxWwMpXNt9MxRfVBuTQqzp6rBtjVskrzvF9UBHPeXmvWk6bQJEcUV4jUL4nfjLhBjQ8cHTKZiAfj863cMpyvi",
  "key24": "4nTXK6ERfY96ZCrwNnQWTMPBqzU7NRfwg1hRDnLB3x6dRrNvcyWcZdcNFVTEro4xraiknUwYiizNJWK3641Ur4KY"
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
