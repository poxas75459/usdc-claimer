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
    "59eUdaapwUPoFwzMqiqYNq6tSsbLftwk7zKgJnzoUbVH8L58SnCUtyrZgDQhinGgy9qLRes2rpLngjDG2vSQLF4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mchuLDgDHDpuSDmEgPj81R4QEf6sESQxXLBU9WwTZSTWJuicHAATpwep1tnBnxfF4kEv6zridwmp4q1DJQ5Pmey",
  "key1": "L8ugf9PA3hJrVSk9k9LdV31o2fgHntoPmGL6VGPVsyHkWLtd14nmp8ccYhovorTZzAYScSDCyAp7r1Xiw59nizg",
  "key2": "2VJs5dZEZrbPu85pegrymxj8QEwaDuuGuz6jW3ogGsWi6R42TAfkWEcdHzy3hDJdujavXu8Tz528dD9wfp1etim9",
  "key3": "46vhETbBj6y7tVg33ZbBrr8LB75MTVNbEPro9ZLRBepLXtqiL2B5didmPJvTqsEvXTicyQMXYQ9fgRcgq6JX74vL",
  "key4": "3MEqzPhBiZNWvi4reJcifERXB8dqCmAdt4JkHF5366audon7e6ScZxqVJgLYgWj9BJ2peppfHS4TzwF1dofpUgTw",
  "key5": "5BT6kFfiAxCjJyfPGpYch432CEe2ML9z7XJp9kCQCbkRzukR9zq92GhB5BeoN7jsWQTN6KBK3XXr9gUMb9pBD1cg",
  "key6": "5L7RZeVs1U3cRMUjyb4WpoUd5USxkmSDkeo9uDH2kcns1zW2vPPGaBX7ZjeeSXSGkZc1TGA8d25JtfetUfhJPYSv",
  "key7": "5EFL8MDKkCQetwMQfCoaq8g4r26buzDxBvgkzFXJMBU3GGaQkvH4gvRxmvL8CaQe6Wancyn6cUWJApp2TscPG8sv",
  "key8": "MwEjGoqZFB9LWbQGJYyhXyh42NRyd2nQsHJKGDDtNEyMEFoLmwJubHFiRAJJGT3tg6sRfMwd5uNQNsv28r9mueQ",
  "key9": "4iwF7UmK5Ahh5h5xyXYznX16hT5xR62Ha1zDWfz2vznDZgHiP5nffLtjwLrR3PRgq9TSFt283uKqsaNW8kBPKh8m",
  "key10": "LGuJrThpLrVPoaeQBj3QpeH8vHF1ey6GFKCffLTWj9SVSPtokcN5BTGqt7w2Ndg7niA7dh3CvRThzsrmWFvLHVr",
  "key11": "h6TfzS2ixvUT2nabTY7huYQFUQwHfDUwVWTDT7Mm45aW1EQZ7DwNJXqde4h3fkRyUFWGqN4GnsXfCEqnQbtgaKD",
  "key12": "4TCxh3oZKk7rF7xLsNt5XVHEDVHxLxu8S2MGncqd9PWShjzy4n28XUmbFLM2KhrywXgeqGxRG3Vsrscw2DT87nEF",
  "key13": "58Efyyqt8eW42guBRZ2rpJHsjGGzW3brw8kKXM2xGWS67QWntGwrfhoBi3La1fBhgGVeq7C5kei53gLs8YiFYeoq",
  "key14": "ix12yaAQJwDhRJFpbwgijJ9URFRfiLgVqeBx5WFK4f1R2tUBKDyf2kPquvhJaMrVsRcB3YrYy1QK4Xw6j9RxFHT",
  "key15": "uavNV2nCtnFXSYRRCdiXqfQUUzXST9ahmTKf8LPyFT6wfgkBKX3Gj9hjbAn6yH62Z9oyV677ER9D4srVonpFgiy",
  "key16": "22GnhovgAUgkzkAWASPWozZdDw67ax5FUhD72podeYj2wRuzmsvokfZgUG9VaMNA6fsZpvDv4wSq9PmBPaAWCRXo",
  "key17": "5LMQmQs1AxLbs9tjtoJHSWNgVnTCBjKHp9AStraGsoR2pV42je3BD1TiMKjVXFRAWcipUmiGYD9sj47j7WErrMwy",
  "key18": "2w5N2tDHtUr7xWJEvvJnChJhHwuP6q8pjCcnBxzMWE16pK3drduxAjFD2TJef9Gf3rzBxUQPoq76g6LG4VESvuGx",
  "key19": "5fVgngTirzjiFvyqR9bVEa2Sin9NFbJcWU733YcxJUDfwwzZfkpuUgNSiAUyLujpgQNJ2jdLmF1KqySy3BTrK7Q5",
  "key20": "4Ui53EcNPNfD2PpzocfnJRFJoB2oSnw6ec8CZHR9n9sqonSw58G2YivQNXqUSVQTAv8QASgaBYWdtT83bR19Adj9",
  "key21": "51gUuxX5hYK1ugZ2bHg1eerZvdXzEZMnuBv6av1J4CftkbqM9dEMD7uwBPPQW3b43HzYDoYXUbPak6nCnoiuN5vU",
  "key22": "3XURAWkYC3EK6GxjfFbbVRiFQeb1qzZKAKPTz4URAKDr3thes15eRvEikpWCC5TizWRER7p3bRxu8NtJp5wtaiQh",
  "key23": "vLHuC5S5QtfQm9q8PzQwVBJ22fPqy4ZQNyXvKsTx1wZsa1LCok9rrXs8ERFUvYdRHsyDm2jLQxzP5eiSQoCsVKa",
  "key24": "2FQdxDUFA27T3QVX4q79rPWvbF7NymDJFpzKcc4xX9dJ2pmA1jqQPWy24ESWTfSKBS7NcgPyrk9mvnmFzhHYKnJh",
  "key25": "61HfM7EfD3sMyHjt1dAagpyMn15f4FdkdUPvC8BDnjWc7Yg67EdrVac599DK83SuSqabL2oWcRbpoi7tXWWgmxWR",
  "key26": "YiazDNeyUjYDn2VjbJcpBfdXjMLdnFnd4ddn5kp4sguEPKGrr9KgmUHUEQL92nXoo1fNKzMzu2FMvTzWNoTK6Pd",
  "key27": "2hr9BTZKTgF7Gz8TNgQZrMUNDV53YuDHzpAeWaYk69BrBz8HGgZXnnHoj2NqTVGCFciuTWFVf3viVzC6gBNGg38o",
  "key28": "29MANgSCv8z9dqQmbADB5qCY4kUq2NHbDgE7jm6rJuZobSEiVEbf5UwnuvYCkvnswV5Nu3MEnBjMUZGWkEQX76Cx",
  "key29": "2Cyd28u5tto9N7tf3CWVWRqq4oVhyZdkMPiXrDWhRQC83VWdDN6sTdBL72VGW9uGUp1A2uAQ9QbuuWpRkNGCSB2q",
  "key30": "3vkbTSiaNzsvbRkY4DRC5si28zHQ6kW4hAaWeh1WuTWsqEfKfR6Ti5mktrYxvShKgZx7anMTA3iHVA4Bit5RzYpM",
  "key31": "5uRAQCPhYC4i29KpcTrhtrLrU8jyHScijdYZan9j4Pmy4m7Q44aWT9m3PrTDP4CcoiJLnddF3HDCqS18DVs864Wv"
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
