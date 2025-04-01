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
    "2AECY2Hhhd2AczyDR7pDsRQCG14unKs8wbNNyAnDbsApaMpkZuaRVZVk5hBmEiQY78sfY4iW8ZS3qgFL14pS4x5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gXNvTQb3Za6pK745QystaiszccX5peHnhMwj6yZPa7vyHYjwmcxQ6jzXuCaB5JWNEAfQjSvi1Vnxsx2noizb45u",
  "key1": "meCno25WprnDvSSEd6WyHyEJjekaYd4uGtvPq5oyYcggjK7Lvs6p1rhL3AysKP5fbjXXHRNQTFE54wFgxrTuAK5",
  "key2": "aQdXjVASByrHv3oLLFFLix2szGtk4nN7UbV3Ymp4xM69Mcw8GvYqeVZx8r3erWxR1LRFrUKi2r59gnVGxHEedaj",
  "key3": "4QzDBoZSXyU7GeP7sAb63ocJG9gbNjVL1QqXz73ECYqaAghMfdbz6UkxWaRCv1VYznGoShVSsm8Scf8ZS1mG8rSo",
  "key4": "4uVjYPHtmNFr3T5YtdMnYNafz3RoNhRAhTewwK7KV48cjt9uqXKCuoN9tbmywiQbn6FkBa4duAfntgAsmoUmehye",
  "key5": "GLWVt8JAQ1QhVN3xpD6ZT3dkwf4fNiEQSWaKWodKvp8Yf6SggjMTuZ63yv53R1cWMQKpWe6YoBoivTP9ZbJuscA",
  "key6": "5KevjR5kmoff2dLVbCfbRWqDQDk6iT42LbMxku1uUMHYfjYDXhkPb1gQzEUQcpCLWwSHEeKvUr1JuKCckCvNFm9s",
  "key7": "2Eb895USECYe1f9h3YGLwgg7BbsVLCpn75MogvWK45puXJx77TUAGbYJz9HouDUhcjh7u3S77zwGYbAFLDkPEYQ5",
  "key8": "3skzrVLLiK1TZ86UDEaqXivD6C3vM3g7F1Lr7BZis5TvjsUQ59deotC1GRttDNKnr51Zwb8LkH3f9UMMhGc8r3K5",
  "key9": "2wNxJBMJgUmGhpjcpo1G56ey1JmqArFHvq9nt2iPemvjJ5bUrQ2mzv3xzpVoaSrBTyzxGBU2ShpvJkzeJTPWeuk1",
  "key10": "4Kgwxhzawy3GzizdEj68T9rLBSXLz4eLvmcoakYGvY2hKVimgiDj6EussrhXuMJhhZkhUHqCv4wFe6yLUjJLWgAu",
  "key11": "52UW1zWMcxgkjQvB6Nr1mZoUmiDMMo8emZqxZMWzf2K2pn9Yfx8L49w1zhrqDLnMXAcXHT7YQczVjsuBWKyGj3yj",
  "key12": "2UHUtmq9gb3VnE3exDFsCBRM8D6jnBbSpwJvKx3bxTUcsednsFhpeEJG7gF1FuMdnhmPgjAGAQUeW6ycyZcarw68",
  "key13": "2c9atmVoMhCKvLnEqr5t8qjBYh8Y3gTmVkK41dY2Yp9FJPwfKSCwYckMWYL5TUb4zooFP5dvMSMwDa2sWia71KBM",
  "key14": "5nS5FuJowEbWgKWydbWCF1t5Aq4SfkMmfA6qM4VSWES4NGLnQ7upzMrGJD1Tp3xHHUrtCw9UGAh5hQApQYTnpcJN",
  "key15": "4suvvE7Xak4GR8wAcd2VLyDka5MGQiskNWgqEaqDriaUE13pziM68yRr4EhtPSbvCAqtsXrhUQadN3NG6a89gMLQ",
  "key16": "3dV7MAvgDidvaUJsLmS4C7QmvGgTTDzUAH39tgK7B5qAVnZPhmRmRGQfv13A6gXNPuLJqk1mBEKceuVHxqZFk2Jj",
  "key17": "32mxytZyyFD8Y2VdCyG8hEPp7snPV9Q5UfR6u1wSrtNHzTSqsREo5GnVjpJdfTuUpd8vsHAsHJm5cTTTiNyUuEmW",
  "key18": "4wtUzsW1sPiN5j5GfiTtmBdUHvmSruERsktDaGbnM5xWsrdoSZiqNiudZrjH69p55mgWjAvYgGmb6Kd2oGnEHGi9",
  "key19": "5xtTkGzzpLbvW5qX7g1A3VHRqp7m5WF723JZA4fwbiyLzkAi2DKhNq5vrFwcGYs2tvLTi87T8WVvNYkda1z9s3zp",
  "key20": "avrsnLg6So8AUTT7hFxyJspFbKH4eTkes2kuzLnuJfLwghoR7heGFbRGqA4ottTjn7BVUxtjQbVDuQDkXAmwmGG",
  "key21": "3j4dsJ4o4dD8vzVGGLcyVzG1HnZu2Zr5oTnyaZ9Er71L7LPdyEhuNQawmN7smbtzuqhLD5Jz2KkYdgem2VXJevEj",
  "key22": "36uAdREPWFs46RYbhuWr3o7KFGvASLEHGU3LHsRQEYJnG8qvW9YF1oW1wF5gr7onmkcxYu93X8hzbkZhP5U7Rv3q",
  "key23": "39rhtueRcnkmypKPoXmEepiovAu8Cbr3s26ndGccM9QxBcra3NsZZG7Vtcqety5dqof1P6KoKA1YKERohGqcJzD6",
  "key24": "j3vcJCim1h8kcTwG4Tjf6g8yjfYf9cDH9sgyExoESBBJsUJX3XtSbG8E2PNaDiA4XERaj262fJPH3EGnjAtU6aE",
  "key25": "3y2qrTvuuJEjYcfSYhUCjZfDjo9vgYW56MBL3tDQYVqKTdvrav4HFKWJhqE1Qx2eYFUWLJBU9y2FwnMSBLMExCum",
  "key26": "5CRtXbm1qfxw7NprKxJqzGfMsdZCV88mwLodFZvBcw3YjRAaZ1Xg5nQspRX68Nxx1Da5ZuF7Q9MWJhRRWgNSMb29",
  "key27": "3Gz4hTb2wPo6EDjzmRBmH7xB1Vexmamc1gq8DmyqdSpr9N3Rg2knUFWRBXBN5nXNs58s3Wjwoz3H6AXAYCc9AXXx"
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
