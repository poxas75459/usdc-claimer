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
    "ZV2UzLrwEFnrp3PqRcdpSkjwFv9pcmxxny2Tjq6Jb22BsBtV5xWNQamGmn8dCH7TYY2ibPJEgZ5x9379TVrQMPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BiEATMbowbBZsbVbLiCwbp13AMXtorpjYkxY5PkSNd4sxeWvou9oWFzqa4VmnL82Ng9DMxK9rMyLDQXY95YMxXM",
  "key1": "48HKujWRBmzMyFPs9ZCV7GeH9yTfsgmwxyKBqy2Cz8fqp8iUFnL5uePm5M8A38CU5EsYXs3zfwHxhCRDXGW2y8HD",
  "key2": "3tXpp5a1aP7Yos8JkL37i4wrnqhJwnfsdPM3t9pQfhELVaNW24pfGiGuCH5JieaLDJbxU1m1cqcTxYi9fZDWKteD",
  "key3": "2rgeL3Y87aczsA2YhYCA8Rs1a4ot9rdAHTTFceTyNmsticsLGt4BTaBDH1oEZ7h7xCbciXGLQFnTZTarehREEgUZ",
  "key4": "2ozX3GcjvxLarGXfz9FCGu7hHNidBWcNmvqQR6vw2UeqUMtuZXMTEXBhk45WiqHdsqHkPA3XYfgofRrGZZTfPQhY",
  "key5": "4HSK5CTHBYF8BUxVm88cYEYHSgSqvFoWUyh9U6pn2VY2et5DuMH5VLotXMdn3LmGz4oxz1KGN5EoPoceqCDnY5h7",
  "key6": "2uJFGzTeiLCnvLqY2JiDJUxUSGeVRU98681W4wndcKbaCyxKURvxAzwo9PhnyVDqGAN6mF5RxGztkYLLu9amsS2m",
  "key7": "B8sQ82kU4k5zShMUsoBHsydaBQCj7evr7HU8Z7K9kvwChJrY2hKFJcY3ywwUikqV3XdDGZuyXSZhmM4YTkLofjp",
  "key8": "zMcX8SRjYWvTFUAZz7dqnnQP562oPqnCUDZdsysFX1sMqpNYyb2JaA6wizFYxEAad6TYsexPEgXN9aj95mqmiSy",
  "key9": "2zcW8FtcsJ4DNaHvoVKggE1sqM139Tix3UprkAx82M4CzCzGoWSU2bnLwjdbTsaodBgffV7pTLDmMXDFRzPVxZr7",
  "key10": "5nHiSDZigB3yrQb1a1GwfSnYPMuxsYVBAdycU8ziG2RRUZRARvmajnrkVSzk22kKUgD7o7b4VJUAotee8c2kjH16",
  "key11": "3hf5dmN4HxDGJDmfRKmjRa8n8noCHVScBsgYxVnsrTiMaJyAriLVVMPLwQWqqzvBQ9f6M73WCvPis8YqSh1ZzzUn",
  "key12": "J174XKcuxR3VdtiN17Wm1gqLJ6hwug8FEuBUwWN1KPotpseVxW9AWL5spDdWWjfJWxkshpGQFwJRKRZTdhAZaST",
  "key13": "FzNhL6Qr7RVHyM2p8ZEvSDghiC2jUEB9T3SiomPNRN6KS1oBdRBAdtEeaaoYnNAqgVRgSVdiVC3soVLxFd6xcmL",
  "key14": "4RdGsiYkhydVSq2TXEc1bQ5Ssirysb15gDAk6PvMW5CathzBv4MvNJwXCLh8UZEnnuDySy4tw6tYYFEvqYCTGC5Y",
  "key15": "2fZE8jxvx8xzvEaQ45rnnr74AtaQzoD7vy6HXqt8yP7fRicsbE7C4itfoZccAtvvQyZ38RQRDk4Dd3GgRFBDBsUf",
  "key16": "QFXSUMzX2s1PxG6rzUGKKLSzDnajmyPhmBtyFBinyBugJ9HD3KGgvyEtrA28aPkoTktMLExffMvCvvz3yPDxWeb",
  "key17": "3GKpc3R7DwYfXtruKRts2KFFxNibXdbcWg87wFBb1vHFUKLYqj4Zvnjm4GwFH8DQbj4fZxVcj14vmGf4xL3rotto",
  "key18": "5ZNEH69Ah2eiPPsm2QnsA2WezkU9gF8n5CFkznCKLniBhn67rWEh1HKsAd98aiH3NM7SoRYHghLTH1LJT5yc7Jab",
  "key19": "36KVPcT5kGePk6WimyqLU7D33JVvNQcuoouYZWwqs23CbvnxSg5dmxRs8WEQXq62aeyAwcWTM4sbmj7seC4kcePC",
  "key20": "2JNSp85cMbqQdkMtnWgEaWgCqcM1UThsiiFaLGFzy2bRFdkSWy8eATZvaKb26YUtoA9SBoVudvZWGgBKp7DREc8U",
  "key21": "cjSNAZkcqatf9aB12cVT2kmYVmpPJvgMJDL4VFHtZ8yhmff7Yoz99Vat56QRe2XsoRCTcPWE53UvF8ofbehv893",
  "key22": "5XwiY7x86o9ttRGsfSyKrDyzx4N9QzDJA8jB4WNQ838HbM59pDPWWzsWVxUXGyWmf36EqAdWaD5PdMxAeXCSM8bZ",
  "key23": "2tJREXaerKndmeRtWCB6R9tBr1GoryP9ee63qwAqw9DBsayRHY3pKqomLk6Lm5nFAp9U8wjqrV55rfqPBuh2RnPA",
  "key24": "4JCUMJM7LtcC6vKsyszSBknMdigNHF1D4BCXWW8yLbVqp2JKUfGWpSbiGARVfQG2soQwH8MgQWra2PXgMUqSY7Ew",
  "key25": "2Vhun4LJVBKjmfeP8Ad2Netb2trx3xB4eg73Zc4iBb8aDSTCUZAz7ZPcTkE4mH9uf8vRUXbt71DUVbZDZwDKBYaJ",
  "key26": "CYqeXfTioQRdPdeprRG3HLvvo1wmZtytxRwU7Urao4hxG3xyqKg2bsmdCrbL7ut15KsGs4pY1sxvVWYnmDubJGb",
  "key27": "5kVR95dg9QrcALP6CGFdrfgYoRt98Q65JTxQah5Y3mf555D63B8NjUQxULdmeYt9mEN9QoTZ3kxb4yE3VP7b7VZj",
  "key28": "2ePgWaJuD8ZzzezmnxoLPtJ3KKg8XdHf5Fzv6BUNZNPgibXVHTa2dwgGxf1yrMZKLd3PBHq8gX7uiN8qxUPn7zJr"
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
