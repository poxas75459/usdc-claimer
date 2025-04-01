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
    "5A51DuAGVD8R5d7U3LBkBUi2ZCyEVk6XTJsRZHKbTN7egDk72PzP4Fm9YvkvWsgeRpKEs7PMjpDKvyDXUP5Uoa56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tinzzpW5u6ivpYrm5akR5mBCxNdTMWQYvBMwEpTa68vyYjkW2Boq7iFPefBt84RNTGkEonUD56964graDPfzvtf",
  "key1": "57aC5mXk6zhkHPXRFSA69b28RnCJGABHpsbVY9q3Lf9Y5ywuMetD3aeWvqQDNgqx1NeML1c49mGYN6uB5br2EzWD",
  "key2": "L5Af24KvuPjxqcUTgsYBJFEvDYe7JVZUDmuWFcNj5b5pna5F3CE3cuKYT1kAvGTMBHvJfS5QosaHXwyMjKSLAQW",
  "key3": "CL5XSvFm35N5LVXDWHpgLKkhw7Dfp2WaHSgXQyQTNn5Zc84u4JhMzM7v88ZLerT2XQHgFiR767xBRBUZNFtiEZL",
  "key4": "4i4hYUrphCKd6JLKnp521rTwa8MaL4UzhZct9NAU1hcEZStGJoMgQ2LHzbNFpCCikrJikB43Ga3RpUwFTjnZFNoE",
  "key5": "56SCoWumkVXixFSY2fYWVDPnnnnshyw34tBdqPKSjoPcmmuDix1ZqVsWekjpkVtuDeBE8ZRrHTRvfwXZ73Ub4yf1",
  "key6": "NQhchCj158LYLo3vyefMkmKob7iZx7t8LX9qydA9WKctcfFzTzLNicCDFU2qoh7BRMfkskZoLF6MHxKekVnRPhi",
  "key7": "4RLk5HQCJswmHJrCEcDVzMfbotRiRXXqzNwmtBGtYaHCpKoiUC3CKXvTihSsfwDP1TwPpnxV6g72mUqhvVJ22LZV",
  "key8": "26N56joTMvzHEiJLt4NEaj4Jmi4NPCsLFemASrMWWU66GqBoc43fStz1hE9AXF8Zz4hHcTiwwqVzHw571mnJmnRb",
  "key9": "237yn8KUciinGhHvq4j4dyWs3qd9V8ptDQBBUNnErrunmzr7iNJnarmTA1f7xxqCB36DJAGa4KgbTjP86XBKwEiD",
  "key10": "3rkfgkqLGknjxmrwyBV2ZuFa3ZwrZ2bJeQcDWwnYGvreXHNg5JmNSp3nMvQMp4YPcSiS9627vqeQ1qyy3ASdLEGD",
  "key11": "4UWoxdrB31x7sy4j14aUbFqb1gy4rGMtJ7kAsHKa1VpLCE8vtmgg1TQaXnCq3NEi7x4F1vwfkq4nXQyxNcqAbw6y",
  "key12": "2Dd9g3LqtYEhra25ordskHABk5zPimGAmLghEscqbWBbEJtivcYH8eqNwfKyzFxN3f9jkuocabVdUwjQmbUG3WbY",
  "key13": "53N5Kp4JppWc86ZMMCsoRusaoMJxvafN3YoUyR5Wn7SSAAEjr4NYTw3as918qDadvnsUBFW8q7dnLLZMQ3ZAVTPn",
  "key14": "3DgZvQqp49DHBSyHKgTyZCghqEjThKsxL8j5kYaZwhUHnPzqh7ZY7bcazvjcrEzMKFRMVUFb5Hz9JBJekE5uUupf",
  "key15": "5Af2WeMnZz7gTg36VDPQmXmtYo8J7813nfhUPtBm7KCS72sxTZGsbFQcHoVygDM5W7ppYXoiNVbBHpF8bfsjudmZ",
  "key16": "5RCWTCta6RXVC7bGVGVVJtWYqZStFedqpZ8L5MqS5n3L7AZLQfxgrGmHfBYwaaekTg72i1Dwmt7Y2eKihf5JHhyz",
  "key17": "4cJppYAAT4mNRLAVFaCGNharuYTrg4npwQRw4PULYskJfjjv968i4mdW8DXpVZxTAfQgMH8bKfDbxwCqXrnrWWAM",
  "key18": "3EoBCpc9H1sz522YWmCLGapDAbV9Jw7ZQngepDU9HnKRQUFt6pcjySo8FMPtPfKw2oJ8Hni5gQiazDuEMsgvMzVL",
  "key19": "4oK3v1tQfeutEnKxXNJ2ZNot9t4UuA5SmS1yQgjQVzwf565eADwiPZ6mpQnYioLzkQxE8A1Ec6W18GBbYJxYBoAD",
  "key20": "5cBm7b7v2U2MFNWmmB1gzqEuyywhtTPTz9vxdkaMbs3cG8zshoQsDCWSWckhtkSpTa4YgadS51PEn8rnYvbJ5bMj",
  "key21": "5yaxHMoK6xE4Dik7kJCKaFWtCKhR1KFsAEQ8wTSKr7YvD97cwUS7XLW2UeNvTq3MHZR3EFCxLF57aXsQ6TFj8rk4",
  "key22": "32yhsPeYh8j3jzDfreWq22Ds8wrCp5nn6EbAiFLVdFFNtiu44HWdTWB2Kxvn8c1iLGshQMkEusy9uBJ4FTtyMaNm",
  "key23": "5Nx7C3xYira7DzxA1xJTH8V6Ba3PRDYUehyamLyprFKSRM3uYuevuqGdui5ERUNuStMFws15DRnEoSyXEX9jZiuE",
  "key24": "3HRPMnDSUKk5Ev2uHDrii7qEmRAC1PY8PSXVwsGpNhdywCwY32Gxj6Fv8iVyFuPH4saU4EqeNXuq3wwhkf3eYYsW",
  "key25": "5uE37a7cudjed4o9c9oJ1RvCvFxy962D8zaFUD887zNzeV7HWRCoNKfNAcfF7DDbQWBR931tnBqgyCgigD2TFB9W",
  "key26": "24h4JwE9516MUqQtnD5VbeuijEtP85c99LjyyefjU89tHp3HFBgfFczJr2bQ5KEJBYBJYbFhQMUpwmczX1Zxhtqb",
  "key27": "3VrqGMyZ6oUihLmB2adK6L3q9r2EYTJPLdsP7vp8kELDjmXWRXMBcio2KBKYVHBtknxDYgoLExRXmXEhA1Fg76EW",
  "key28": "4H4EXZjrQbCMSL4rTpfDkx3b2s1wdNeDnQEQEkm4ZD3TvxbxesdTj26w1WLuRvtctVUV5Nxcs6qHRNDRnxFTweTz",
  "key29": "29G5JqqQUryCood8WeUV2zw8CmWLbMBgSLXgewZXYqEmD4Rh5AEa5yPK3kSp4KvJSpB5huhix72R852YsYyEVPrt"
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
