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
    "2H4q5NwzuMc8tcTJuvS2KxLSnbEY8YUKyMpWRCZjojT6XNmcgKUNY5qk4kEzDuBZPdy5ByVm4bhnGxm6wEoyhTpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A89cPtYfxg4bnZZhh6vLP9NW9adzytXgNEav4qHfPGG7QnaQagMAfxuuKVKs5jfoTmTZTwLoouMSkhUFbR8Vw7X",
  "key1": "2qT4N9aGDnX2UFgu3dUTPFjMyLiFdS577fVWCPi3gzufajQsoXn759Xfhfb5ZtJ5zPCiV7ZVFPNoVyC4wYzcswrZ",
  "key2": "ddtmbE3dUy7h6ANvnmi17w1ATXakid3QQF1FtMxBZdgv3TVrzQecGB5k3iBuMzoZZ4Yn4qUCw7t6LFgCUvPerta",
  "key3": "5VuhNfZDvVWfAryyfJsLrc2Uad2bodNAEKMHEixM6y2wac6XMWZh5XXSJMXvoH7nVycno2AMG1h8N2QnrUqKTYb2",
  "key4": "wqp5oKyNYxAC6LzpPee8aPXosHQ1nVPVHG2EYhtiFizzbEMD7FkjUjCvLDvW4VoMR9cN7px9cLxgrDT4L5GvxkM",
  "key5": "5Bcaj5sV9HP53o1RovFumpikY1yAqaKFhMtpmwAPi81Hm68TTjFFR3PQ9gRqGLJm6hNpBW6vRBMnq8D1BM3hiu6y",
  "key6": "4k4R4F6eeVheBRptjZDxWh3mMz9qEtLoUDKj1EG73ki3daKAL8AoXxWbiKSYp7waGZvp7NXj2GHkFNgLAFn5C3Xb",
  "key7": "6yohC5oNEQLf5V1qTuZ473xSB1wzJLtJCJkFVyFqSqfc9CpTA1Rbae8yfs2GWPmYs9e2C5ngFQW7AUTWT2WRACh",
  "key8": "3BrEn2qGv6uKNjn2YdPyCpcFcV2MQ1m8UAWJpPkeDrPtrTjtt7GnTgqEu3cirg4yVrRyb7KYdtDQTE7e5ZAmbNVw",
  "key9": "4zVPGB3iSxdRfBbL3HUmjtp4fHbyvmjsWsVZrehvp9y5wSdha2q8kci7A81CWAwGX3qr6SPfu8yfUyY4ejeKYP7m",
  "key10": "ATxLgw2KeR4B7muyLnCYYqjETNwWZfEKoc5J2L5J2UnEQ3Vbe52q2dpbRFEnnyKDDN7UzzAUfrfFzq1J6HL5NEk",
  "key11": "2P9byfg9bx5AXuwBAweGbgUH7eXLwbLhL8H5Uia9PLhBWdxNYTeD9TGs681PJZjLupgA9UNJ8KgictuM1eMpXuh4",
  "key12": "2EYEqgyFUYV4Fg2DBp9b5kBug9qzgRBw1DGDfqCyXSiUzTJFzuvXRBDdhERkRFbFuNMTCCUVc5DAoTTLjgfyJ52o",
  "key13": "3qvHbUtHSzeNVyUuWBJmbz41tMGkayECL8gDTLMEAsGeghyrVdUHECwnFfQuibyViK8WCqe8SMv5JD6nkEQx3RLJ",
  "key14": "2GfLSBRkqaE8qxXdNhChjRZuZGNYsrwdASh9dGej4keH3EYcT9mJbVHBJ1GvKhyJVkLrcFGSGYHDMXCA7Ax4aLCm",
  "key15": "a95e9EDBiwtRueNGCkHzNCxsaW6cY5BYuU2LvMviKvTHrgw8rpUSchBcL8xKncMKYqEZKmKHeytajdribkMgbna",
  "key16": "2XBAxLvy4wUR4z4iewtLWXZ2bwwrcNh1HLo6zpCSc691dVrHWo5Rgu31EF54duGTExbdFKKtyfc4cCnDYvXepqPT",
  "key17": "jDGAJzjArnb22c2yCD5GX9Msdh5u8gebukZqVsYpoRNd6bvLU4h8m7zxH5f3EGQv3kFeHEmHeH1CY4Z6igWnwZ5",
  "key18": "uXySmk6eMvfY6kfmopqS84CnGpZnSQNnDDAswKftGW7gfb26mDjGcupSoUHGQ86sM6iYeN7tpQ2g6NPYKbFfmUw",
  "key19": "M1oTjC7fxUSLvN5zPutxfboCGToEfa2vkkKeeWtWEguPpKakd7Cg8jQmqiRDCsf41GcJFBmqsDpm45gJM6b49ts",
  "key20": "2WkgFEQZuoZqhAiv8udCQQ9jWqt4Tvh32EBKyf5WKFrbawqq6mrS1ekpNTzoioAuLZ21NS5Zmtr1r6o8qQSnF8na",
  "key21": "49XFLXQ8VAoLGrv5up2grhSrrrg1MH16SNrAF4865R7X11Vdj8QvsGSPjM1ckYpzqMGLEXfncrCCxyC5uPCCdVob",
  "key22": "3UDq4yTdbCwcTdN1f57yHyFZpFSfnQpHtWXkEpcf4gHQfkzrwsFKAGTGG68HoW9vSJEw2mYd7mp9LWiWpRh3RYc5",
  "key23": "23JZ1mpqqSVk8SyvHykxj4jJHvBijSfXeb55dchi56qatSfiXL3nDmHKZJrW5okRekJcMZemYiEmu53mGW1h6ocw",
  "key24": "4MH6xqdyYGg6Ckc6CxRUBZu2p57LPoMG6Xos3DrChjkuAS2wQAzSh3DG3paJvN4QcrW3N8WUGNu72zSZvpkHU3iZ",
  "key25": "UjH2kNKtRSFPpo2nLeN2jDipaw57QLfbRBramcY3Domcud37G3YbxesuRLuYqweHNnM1eXkvHPnhrgc23KXQkih"
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
