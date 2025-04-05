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
    "4WDCQLFdVgRGvdEVSxhNCjzkDRio1m8aohunepcZkaCnGomrtRAFhSdP85yijQz6z7t2nUtv9UtVpXG9zE5NDPLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "juzVdj3WV5fKmVuKDduFdFmd3xBTnfBXDb7SiHLrZ5XAb6BqoFgobjKskoy81xTTvgXvv3nftQL1ZqV7H5zAAgr",
  "key1": "53UE39MQePqNzQxAifdPihTd9jWTxZz9gwZtqdrjdgf3Ji3NeKzDAV5suekpi6t4D2UWjeoqM3nUV3ZeVZPeTMoV",
  "key2": "37mwE2xj9cFEK13EbPpWxXZdsAoHvveZ8SUo1muw3eqQEXRNjj7hRDcYFA5qXqiJ8b1LCN4eP4evtMykCG9Zo2d6",
  "key3": "XL2yzoyeQacg6Hdy42gxJKK5HMTykh6HzvP5UJKHWjCVhs2xVJzcnUqWtectJm8He4Pa8bWsEWN9xohcZ7xLa93",
  "key4": "278JkvDRLtjxw33TqjQc4v7ihqFgAvLbeWcprcVktdwoSdcV423Jmg6Z1VdhWobJcjN137RdWTCBL7svG8xbKnLh",
  "key5": "4fKPFcYzUe2CUnC6kZNJAosRchiDKhsM1uKafKko4iSGfLvtDQfVBnJmrka3NNXTDhXWhvfLvp4fRjfo1ENWn2vV",
  "key6": "RY11A3oqp5rnVAV7uWKNeV5UaS5ALHWuA38RV2oNc7HkeQWYQZtZEBPpUEQZsgwLV76VTucvdWAvK4uUj5uvkmQ",
  "key7": "2qENYEQZiBqLEg2HVZ4Bc4s7R63NUYyKUaxXajdWzJ1W5dtWbscQwEGgeeLKTmPZxtNR12vhsGNBv1ozseMNdgW7",
  "key8": "BzyE2LH3WuYMZB6VUcWBQRz1uyKX2x9wkJdexHhbGB5QuxJkBbbgbZv5ieHxRaqJjKEDNGBUxKkmhdHAqqEHJWn",
  "key9": "4L3egQtdjh8EK663WL4iTodDB5V9zKiqpPujeyEJ9LZGQeyr3g77cjD361znSRcMAYsqxzGBMewShkCtDkGUMBS4",
  "key10": "5NGiHuw8Bsrn4fjw4ruRiij5fMvs7syHsGSvQE9xFmeR3boHPKk1dJLkaHb7xhMrRajdNmG4ZVVWu1mEWn1Ado8w",
  "key11": "4Xe2bmdABYYEbmPJbx2BXEvFYtDvG26uUgp2PW65hBwt4vgVyewsB7fJxPQzwBfoGAo9NVzapTP6kz74QzAJaU1M",
  "key12": "4LTtGtxWmK7L78ecs1n7Ha2KtkDkgn1gCoxxJHVCBcP5iBb71qVnSs6cwtswMbr3fMGyKh6uKiCcF167T1pfT8Bs",
  "key13": "4Ksu5zHnw23ZQstHWC8BMnaLfmbbEj15J3CbBhDSbKqWRwQpvRRdthjRDaXLsJM6UB3coSaXxuU13DzgYeMuWxB8",
  "key14": "5658nhSbnmbS1ZsfiazUNvjbCKiaEMk4eoR2CerAAo5aqVLLg7VBxP7Sw6JsDqLfDw6quMb3nn3EN6qTjPVhLKp9",
  "key15": "5dqP7csGbcXJTwvSuGKDPXuuzMCwRbmzC42bcaCw3bH3EvUCDv7nzq7FvcdegU44dc372hFugreDoFRmRxbt9yTV",
  "key16": "oLFPtzMmtRwWDyyaM4u7gCcHBpEEQiv6qaQdyHK5rm5qN2ijSWxBN5c6W5UFU5g2r5iB7gSn9CHitfogTMjnv9s",
  "key17": "2N1h2mSyMyJmCGVB4uSFS6xFy588EYBuW8RLBnm3zKVjebA6R3sAj6t6GSp3FjPayEQKJKJ8oHQEVixxtXJXJx9c",
  "key18": "5yfEcxYfE1oX56HRaVYurBs9TLwMW22aqHG192nKmoJqn7LiMn5hydjoqyxT1amj31eey6vdU3b9GcqsarhaEJeC",
  "key19": "4dUMvH46eqnLTXdCTStE4JNgUJoN6V37RgQNLnGmx1UrjdQax5Ktn8tZnNg8Jf5bxVVQ2ZR2y3wQ5Qeu3RnQDEkV",
  "key20": "2kGrd6p5RkCyrZFdVWJsfkgK8JNWc2nZPnyCWxkzkdixQW6rwC3xYzv8nnVXyTmgwYo6BSuUGPGjbpouSpUTJtdy",
  "key21": "2ZoCeyfaESSGJrEab6J4RGWGa2goUjEcWNNP2ZEiiaPcsDbqaABiZ9xBWSoWCjExLQ9Swr862dhamsDAhEVHAXb4",
  "key22": "qeCJwpnKx2jZ74iyXnibAgMEquGFvDLHf7EqG3JDYJ3moSx5QZ9nr7SjfFVu3MPSQcZxkJn4SWka95mBnyCA4iV",
  "key23": "VDx3aGsMEL4BUFHqiteiBrWg4Xvb35TjUD5oMcsasXkRzJUtcT3mjsq4G2to9bM2e4otnqWGFk2oPdJJNMDVLwN",
  "key24": "5iDkCJFoMgiKLGYWE5mq9yGJQs9CcFNARCdHBs4MMqaRnQKkp4d558egnV3KjNVCDExu31iXzXh15D1R66g1RJiK",
  "key25": "5nxsZvJZibdFFpnBJhoDDGunjeDB4RT6icrNqZSxmYjts3iHP7f4rx9dJqW8rJMWdpHonJkfoZ69xohgNkBGxzEz",
  "key26": "ycTB3RBWjkQSuq2UAHGukFWHursHcrjqs6WMgukZWKPoms5NhGJUzXbP2HnJC3SusSdToFzfJWELEfhEFcu6h5f",
  "key27": "59YHj5hM6QG6Y8YmQCFaimTqD1MLFKkb3p9VsHeo7Rj9PSWnRDCCETyFGwWFLmiTTgyWYbqNUnJB4DBP2ZbQX4Z9",
  "key28": "3hKavwbFDuzq3ofnKcu3NJbwFYmChwBWMLppNw1PSHgCGQtbB2xhY83y36Kx3tMMkLLVmA1FUF573MQQNFptiCbH",
  "key29": "2EXLwHbBwUzCp3KxwjMyW4FtVwNif4wn5GeKFDbhE8DEhcZWcShP55ywkrouHhi12iSZc1uCKdTKYsxvYbQov1y4",
  "key30": "63BMvZKj3qqiyMNSEezzrPHTomKE9DrvUkY6d85G7TyrsT4WQvX4C1Pzgwg8MdcAmcyxo5WfTtWxfxkUkN3LcRGt",
  "key31": "2w1BqDrtLSjUKQvu61kfLCHVjX7R9QGHvC5mzH9FLRoYnfCgW8ujK9mhzA4WYkoXQ8cSBKDcFCNmoHHfxYH3jEh6"
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
