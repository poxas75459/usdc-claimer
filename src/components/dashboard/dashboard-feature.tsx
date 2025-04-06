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
    "4dwJKEaQ3rbvBuBKhqRqa5jy7P8p4SU5wWTT8Gt6HQHqe21ZWk2jfrTTSUzccLyoveyBcuYxr78gVsMhXfSQYdt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8YyymkXhuJhykp42YuXbmHU3uwvPkuLxkRT1WsuKVDVE3nGC7vv6T4QyqkweWyEM9i3bBworFABb78sc6tsSQ5",
  "key1": "2MKUWvJWPX1WUNdqzVPfModrMnGvGxsxqB1GYKKMdAGF9vWDaMAtiZVj1Dr2zAZPypa2kd9YNAXJE5HpmnKPbP4a",
  "key2": "3BrZ7Pr67u8h1boZb5doDLeeYaoF9fqaRatcKzmRtdSYzC5QwhkGB4AaV53Xx1qG7LdexRMJtrqWcGf2AyubH9sL",
  "key3": "2mQLjV8bWDnTjLcxjWBqM7G529jNPdVr8oZSDpnYv8hBKT8reQTzaeB43EyKPECuux9Za1UUBhv1kmMcpuMZtaXD",
  "key4": "eFsDTSU9JsEokGfiNkT4kNL9WuxngJa6qTSF4h97rPyJUMV7ESK5UtZ6G7t62MUmNFC6HMM4JaPHE6JASwU3a2i",
  "key5": "2vTGKpU9ZCe4sJYv8tnP3wnCu4sjkyEs51pDhtBSvB8spBBNF4m79iJAhbk7oLE3n5WqVqMe4v5EyjRtrfwDehPW",
  "key6": "4WYUSJB8EpVjemLpeVcHpWWHHkxY1yNiVs15aD5nKeMYXkq4fVbMocKBwaZ8EGR73R2ioAhBREAMsuGWjY6M6Qj4",
  "key7": "4idVZLWavwrDmo1LSzngH2cprjpLx7aBNa4cjCM9UX4JPooc7P9anHjNwtzdTmC6UGrBH4AdX8EFDZiKgzMDUi4j",
  "key8": "pZwPq7bdYA1n17an57ASZnJKemKgkLHtbRnMpUayLYfbocgWGKeh3G2mfcxTBBzaT6C5qkbBARNcWyVvgJDGt1S",
  "key9": "A7hxY8gFWoofcWWHePE1Wonev7NxvQGPenpoKvD9ZYHt8KmPMRS5FC6SNrUJzgZQyU1Q7i1vXGGjZUxy6wwnRNu",
  "key10": "2RZhmAmFwB6L6USE7Nnh3FKAR4vzRDVCSYX9hU5Ch9sYD22bNProQnrL48RiEPcNukg5buqgrAhVgok5TbMajd99",
  "key11": "4vNiR8cLrBD7HZz49jzn2KcGGUZ8CZhzG9bSjtRxMT6ktvb7KhQ6x9HneQDzCUpWwuhUxcbwppcLTxyo7mCVYUh4",
  "key12": "5TkofHH3BzEy4zkyajQW2oyQtfzgG8wfjsQagEQtHLNMbMvJ4gDstZwoCZ7KfVvbbVSybhgSM5PSiGyFDCJt1bSm",
  "key13": "2w6Pviu96g9xuszv2RkCxZESEQFntA8L2SnMoBez2PHGhLtkLBNMo9Mo8u8XQtxtYnzCxqKs15tcC3CFDiuRjDEb",
  "key14": "617yGSVtBp2PtkEFcL71EJrGDsZtVTezH86Rq9sEpiTK7SAttTK19jZm9vqzQ8Ux6GBCwjGAYSMYc4NFvNoW4MPh",
  "key15": "FpgqBaaA1kL3GUmnS9EdHAW48igYhPp1VLtqsNxwf1M5mAq8SL2bL2DsgSZ5v6hpaNTxgtS6LeFNtcp3rQQUner",
  "key16": "5DBmUqAL36SAt38VyGFpxWQVnrJkh3PbatTEQTBPVpdA4h4VE8eAMRv7h35W2Xw8FXYuYcoisrCn79krT9TvSqP7",
  "key17": "65Xjj8pQzkTpLvR5zrjzwuzy16BpSp87jUMLqAk3BEBjXM6F4KZSD4Jz7h4qckDLdz8CdzUa3wy2Y9j6sMbwb48x",
  "key18": "2sKLbeVRqjPq4ARMQUTbGCAe3M84wvUbF3fXq2AEtTNbUM3Abo5yfkyqHBC9UnmXYZYiiRpiRxqpd9wGtWXqm3sQ",
  "key19": "tVjGan1qpHfg7xrW3g7x2r7qppzB7sYeuZpdZN2mLDZVdqru8o3pyErqmKkDp33UQNjTi3bTbvXy1ijTQyLdxuC",
  "key20": "21rJKsh5c3ZJKJdhSgX68GoaoMDxc6oDqdwmmuaJgT3YLewKyKgocxymCCuSDtYTK3omqXKD51CpweimjCVawCBa",
  "key21": "J9Tgj44gfT2w7cbWj8dP2Geqhzhi5RrWWEtZycgDxGxf1SbekAoHzE75P1KgjdiBpmGJZsXirvSAZJ6BeCJkY6y",
  "key22": "29BeDDU9K1P7bcn6oHvWGkCo1fqb3VFJSMyghDS6FnSdCZAbFWKsN3vv3AJiUjdUS6cwgKHpEbEbYhkfASBZ97fs",
  "key23": "2XGqPEsFx4Zbu2UeF9d6hRTUqKovbSWNuv7ep3wRdT5S7qmDsrEL61sGvmK3XtkiqAevcS1iqHfXAciNgh3s1qGG",
  "key24": "4DZvDeoh6kxaspg4aYinHuLQqiRKLxpuocehXRiSciKTUaf3rcN5foSqkHiRfzfQg9xtTVKWv7Us4YNHeVNdM2SL",
  "key25": "5KETaHZBkDCam9ZdoEvkc3iQbALPDsVR1vpSWb4UEddrAGBGeewY5uMqvUeqP38r8siXMKKphw18Z1CbRKkATJg2",
  "key26": "4MFPdksuGLAjXm7aE1PQ71KxXSvxMReU3d49KUx8WkwZoWcGYKRY9VDUUUPXJBuMioH2NChpAzmRMVM6J4uDuw4s",
  "key27": "3YG3zHhYN8UvXTrdK8JkQhkumYNSmDYQeJsxyQhMAmYuWi3heJTNxwZ58aNXqkS3nYSGzYpXi5KydxQd2oxC8f9n",
  "key28": "2B3XK6dM1VM17VZeWe3gUoVj3f4DuFvgT149vKf2Ugfh7rihkgdBsqhdzZ2R3cPcAQ4rRuFQGPebHGramdNzttLU"
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
