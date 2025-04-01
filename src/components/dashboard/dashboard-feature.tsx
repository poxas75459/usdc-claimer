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
    "2un4LH6ydHvdpwoxrZPTBr3Zwz9DFPnGAjLBgc3D1Xty6Rvzo59o6DM76ZUJ3xdF73Xgt2FHJgBFRwSb3eYnUhjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swuzwaLj7QVaAW5tvNsMmqxi6JYRuw4Yc1jXJB4zp2YQkA6SSeQXHWQVFkqHMD6hcez1CdWDCo4QPKXsjb6f6jJ",
  "key1": "J7tggkSUrkUSfHAvbUEBmQ1amK9CPnAGAiJW8Y9E5caTmFwiQoLUe1wVowHEkWwosaopgd3QtJbocVNjSiRCwjw",
  "key2": "67DUQS5oJmujiZBSKYGDKW5tmmCtoLt53i6oM5RCKrMDMTjguE2j2LExvbSk8gnPQb2fSfPNZLcdsCLYfRccunf5",
  "key3": "rySh5zk1s1t6ENwb7EnmjzhL8d99Um1D7gxQ1LNmd8FYGZByJacVE33h4dAVF28XEUvSh5bKdUkryRurMJ1MLWP",
  "key4": "4SNrFTtazNd2zcCtZAzt7wmezHQhGvX2tzoTuzaqA42uMtLWpHJLvc81evJh7XgJFLeec21uZBLGvK1vA93QTf7r",
  "key5": "5Vtw8dyq4DSBZPWZug57U8vQmJGWPtNuqFUg7b8mW83M9yC1shHpZ54MmaLiKZyjT3e7UQ4PVgsHfjHj9HPtqW4d",
  "key6": "3L2vUAB2TQtWP23thFJJqYmWFahYyBhMPsq5umJupxbG1DZQCEc4XGLYH8yGzu5J7FYPxNKFcr6D49qkVqjmYpAD",
  "key7": "3FLWvXePtnvmbgvoneDPEknyj6V9YYb7MnKXF9fd7z2PYyfe8hz9wXZRPRJ5uBvBuMZx4L8qBqK9cTN95QGZ4dLj",
  "key8": "537uaFJpJdRo4X48JLNkzBzzoVv8bXackSkziLzED928W5trYEAsB7C6E1xtniGhTdKkDiCjNVyAYnyj4g6Xs1x8",
  "key9": "SMC2WQVA34pR5xnnhBYnjjpNQQC8PqRgpH1idwf2an1hHR546ri3AFgtPx16CmLz2Md9ViBXhmww7eLuRzgynkT",
  "key10": "J8dcaKqazBJEBZmHzXiS1dp4pCqoWDhVPVvJhF9ES3WJNmCsJLVKXtaA24xznxTeGjNTdxt1exBzcyorSkk85e7",
  "key11": "4g9yw3H3CHCaQebQ3gfBBzTTwFKFNBF5BrdpfbkuCTKq54WVcLuXoFov5pavfV8mzEb3jCUYyJpPoQm4UZqNifPz",
  "key12": "34TephUZ6NPLr7EeL1YGCBgKYvV5Mp1oE8tREzcgMJ4i4Qce8n1duLQcVp1qjKyypunoSKuTSVh9f9cWm42qsZ53",
  "key13": "3UdSXtdjnp1s9gLAMhrWqi3fP9Dvzkv9HgiQVu9pQBDitXerZAHDj1a36VdvwZ3Ji2XKSzbyi6MjWdNCnQTrXHJ5",
  "key14": "65dh7vh96k1btau1MJwwq58LfEcMyy78cQgL1VA1pHVSwPE9KdmWMAWrHqWNzyn77BEQrU7ku1sk6NBXUiBitWdk",
  "key15": "yiNYaGUHpUREwV2XBLjhxBBTTnBBfRnBj4WewS1W6LfeUFpAG16sz67MGenm3TmsZvz79yEgid87YrQ6BEZMS47",
  "key16": "5fXT5x8ufJcXHn4owoQpzhZ6G6N3FyaszzFHhY2VFxCKiaiPZCBiaLYtxLvBtEj8nw5cAbpN7GBaQXGAkZwbMd2b",
  "key17": "hC5a67X4agNDcLXPNgaKyvD2JymgL4bWbDfL1kHP45ra9kcJcdaaqqguQVZpVJuz6M3kTfaF87MMiib9YfeqQQa",
  "key18": "2xeopcqh42KdTrDpSEWDQMWNXMgbgfaXUBsqNW4Chy3DHb3Jtj4TFKyfrrirw6TEyHLhqCqCkP4qo2ZkesS5W1Qt",
  "key19": "HDFEtpDvRiWTp9Qy5nMAHKAmRDMKvzharrxNzDEb5CKX2jgzbYT5UpSVpKeg9C8reqBd8Jo3nHm378pcQwkATTL",
  "key20": "5JXXsXMXMEBwnANgbAFiBqHHDCiUfGrcYFm3aVmwQZohaAT7br3T1NmV4mXmKbm2Ggz2KJ4jvEagajaXxD4y58DT",
  "key21": "415SqtU1RrLUARt4H4GovFyZoGqJ9XiMViSfxHZ3nSMHM4mKDgamQveAbcuHzisX25PK3vFgXayAn27aQ5YcaACr",
  "key22": "2xbRucFB4aSXBmNRSyC1tqxzyj8XmS1BRE5nKhQXNdPe8LkErb3zarodU9GPM9bN8UfDnaFsojkuMTbxHhA8KJ1w",
  "key23": "4fDe4UCRiivS8QPScdC46XniAEeahiwa8qeZyJUqB8pzhreZR2HoWkk4vdj8aYsgSqfiVKkLTvxqQKQU2zgbLX9y",
  "key24": "2VBwzp7tcQ4S4xKEc3Vvm1ZQpT1HoxESiDagCncRH3QrXYuhFqrom3Bcuvy4MQwrD2L6y7hhnvuYrdcAQSyGjPvY",
  "key25": "65bKAbvARqSABGCh8DsgCwosFC1iGA33aubhHdd3M6rBuVxZgxprraSbepQGycrCfN6ESGXUuT3owqySbddWQqjX",
  "key26": "4XmXKmFXxonJtK84rEyoBfTnyiPyVGwvknsGm1SsxPXL323x5SYMoEm4fP9ZGhUEhCYbmkBDgy56kUNJTzDnNAq",
  "key27": "2M45Ka4G49YxHgXYzYyZAjF4tHSoPVFX9qnNQJrnXqDGWMc7i2WSw2s2VfMroFBjhDkTQfeeSTie7WuoSqtWSjm1",
  "key28": "jZGPJVcMAPaWRsUSfFwUk2BwrYQ3hSk2b9PYqSdGC4mAqTY97gWTKuyoCsxTuH9ZzrgEsbv7xUGLa1J1BG7WZJw",
  "key29": "SLyKsPD58dFYQj2ZTfzuhPZWmLrx77V6h1u13Wc9QseutTg6sF5hssRCdGV24LuypF9m23PYYrKA3Wdwiw614jU",
  "key30": "4rAf4mZgsrwggtgqBNSYgfzm863EByvZ5Ef1w6C4A2xLa8sggCpxu2HxnXpgX8Eo7rnfsL5M4k5Xs43YMDyjhcfV",
  "key31": "2Xe9r8cR2o3TXuuxeuNKwmmjneYD2ecNhfdivGRDjntEY8fbP4GnjzRefxNcyargx26jsNfVrCEpQzBDB7RXYmSS",
  "key32": "3dh5Ff7MhA1StZwaJQJqhjzC3piz4kDHYy5TYH9TLb2juYkMEZubpdDFLqWngS4HEiytybz7YX63nQQM5FNGswBV",
  "key33": "4LQTnYMXGXaVf6BLK4LXPhmkn11CHAh215UvTKRAdBjAxGeGjGHoYLs1GZRiEJ73ru7ThsjkV6qw9qTmkNcQwHi4",
  "key34": "44y6Z5LzAWknTTqG24rjo9pU2v3fSMUou2eazchV9SC9QAzwbwFr8DCyPoM8y6s4m6gMXrsDUtrQ6yRfFtZdW9F9",
  "key35": "2KUdvPybHh4UrqR7E6aDBqNbkUHKRpgKfk1ifWrknLYXDbZq1xtpWKs3kNR1ohCTQbAHZwsJH35E6UkPtu9pQJWW"
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
