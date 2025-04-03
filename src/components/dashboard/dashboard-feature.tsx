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
    "32ssjwPFAfu7o5VHS7cMmmPJXbmM3NNw1xaqJaGb6akDF87YJwugFuNNXutbY9NeAoJ11ApyWSLk8wiEcphtWkcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H91guFYdFW56QUAZEddmQruuwGKekfSLvNKDSLLALLdM1rBy7h1ARoWn1VpDbgFSHadywJTL9PEk6kRmuhbXFpE",
  "key1": "4VUKJzWeJAqHSBqG2yJVJgbKMYVcnY5omPXYd5TNH7xQMhJawyK8Rn6RWxN4HWBoqKs5EB8i86e9AizmEuNyST6q",
  "key2": "5KH2pifssJ1iGXGLbYRm7fEysy9eMya5aA8HKF6x6467hFZGyTZP6BLjwHNM9FYXNFV1x6vwD6XNh8BHuKLvnQJW",
  "key3": "2B3YPebwLe9vXr9g63wRifUwi9tkxDxJM7bqG1AxuDhCRyNP7fSMiXorjdzpUdu96ZLtiDVSrLyf9ditSqnPwP8g",
  "key4": "1VPtug9h2jnV9XPc3urK4gCJZ7CnfvMsuANs7mpMcwKhYvNBGPrCrYkz4sstSMfY7sniHMDf59S6mXjsZm6ykAM",
  "key5": "27D6XRW8pvdmSEc1Pdg8nxiUugxRodBgZfkvtMzSmqMBABpmfC3Ur9hUw7sD9Qwk2pDo94KQZhwSwTJu48iecLGN",
  "key6": "4A2AFmsDCrCqp83bCRTUWjNRco6hjZrEeHsXYeUHQTwMaHLSb2sAHvGdyzNHYJg3CPWt2S8BfiGMik6h6SP9V7Rj",
  "key7": "26D3BU7boGp2gs5x2nmHFP5ixmMX8bATWKjnjkMcKJCRwLK3qzj5xJvGqjLX34Z3S1wWxVATKGiSrwENZR5ZmTTs",
  "key8": "u2Q7NP9fv65bf2nEyp5JoYTb8dqwDRQmJfx13Sp2kqHU1ck5HgkZBn5hpQ2WkB99bfZ5BBpTftgRqj4BTpsooQY",
  "key9": "DmnHTfaUK4nuYrqBTV7XYMAuB1AQU8fN1zuxAxfMegis4Y3vwmxYCJQSd2zfQZXBa2STTEqnSsCQeG1WR7A6rx5",
  "key10": "2Zo5G1Ky9WkqvjzhWV5in8n7rJjqoeGtyHP3h3SkGhXch3Y2jwgyNfanKJ28tDbHH9RLVkfBUquprCNRg3TzUKf3",
  "key11": "5bFVqX4RPWtQQ46VHL82R2qyBTnRWb2TELLoZHhF23Q6p4WKUnw11Ldj3372ga6pznjcgruMDXT2RCZc96ocJdst",
  "key12": "MqifwB6tTpdqyxV82ptGoogtvT8gFXTz4TvFRd7Ues7RS44dwFmTiZ12QWwCS78r6QeNFpp7xsfMXJDXkiFk2ck",
  "key13": "3hJQqRPBynzSnbfoPuSFojPB13JrG5kCMLk9nRjgAzHUjor8m1ueq1NSwA77JofhTD4r4VzozXj49AN4QUajTi5x",
  "key14": "4MXTHurDDWVpdWN1MdYXJQxtGBVuejbf4YQVhuhoMfYXXQmRcW2KbTsB2WbTnKVnfWke41nnSR5C6tutivTdr3RQ",
  "key15": "5uk8CW8w6kABiHHWbVehrZrWNxnbhBPCxP65GZwH6WBRHJHpqyEsDv6WNsEMCCSTEmmBp9vf6tFuheP32iavTmxG",
  "key16": "2uyrXAufpdP3t2jPUBphsQ7PdkikbDRTu5Ar56yMBf7QXpPvs7DpH6teShBKXrUbEqezriWfd3SriPW6WsLcTG9C",
  "key17": "642YjbmSoW1BfLPLx2rDeG5VQU8NPSfae3NPXy8jGtpHtN9U9CHvG8QJyGSTFjqtB6DPoHpWLTwdrzjGNTLZ7XjK",
  "key18": "39oRmrTm4MK7WFeG5jwYpoL8s64tdc2SX2RhDPV4HKXRHreYy5EYLv3RFpvNpnH8qf8fVkgdqmBmXL9LGSmyBfxY",
  "key19": "5VbgeaoZ8ida3sHwStX4BqNqG5ztuA4eXggkLwfDBohznP9rHagybBrt5qh81pF2XbrDB1c4Ax1qzhFT6Q73GckN",
  "key20": "5sodgDQYdeJJcr1xVX3DgmwfcJ5h91JmN8BmmKNaEg9jKBmDUJNwMEw1Dgbf3aenKjutPS71hrMfgrYfR3guLr9S",
  "key21": "3JGrqNHsxjBuND9tXDbWqNaWFcpA9xKpoo4Pj9YUHSesNsCywHujRoJypD3bgfagdyCj6oUw4M2a85oiixNzAFeW",
  "key22": "63oabi1eCCGNU8iqj66a1DwzS12v6Ewuzp12V6badQNRJET4gAUxkxA9BPrpSGDVHWRftMYKuohT8ctK9U7Hp2xz",
  "key23": "3p5djjx2qMgt3wFm8wxeZYVP9DKWai7WcKLy8PTdMrKvwDTMXxopLDAVvNJAC1x9dkTEAQMmSPHdJbDxHYpz1Knt",
  "key24": "37L735qyFUY3CJC2iTfJCAd2Gyxs5Q1PC5rbbvjg38paEs8HaqMVVJtzvRHeZGRhiA9T4TT7Xqjwkdg39APXXnta",
  "key25": "7jx1DDvH7gQtNccbA53aa8PaJr5tLEesmEqyBjhHm93yKzTKwmwfeu2a4DGiSuEa3BRA63Xm9jYZ7XTfAcMJY75",
  "key26": "p1eUJWmBye5VFyhsAfMgZqiqk5ecif61ZKF61VhoZTiCV9cdApYNbCMBn3r1pwAkFCGU3q3fxMtun43PrVaZDx5",
  "key27": "38utceRmD3ERh95wyEJuQ6vkzBdT8yN3cWvUMnQR674jbW19c2rDFpf4wy16tFe5JhL1tnUJBucGz5V2ohdpydtB",
  "key28": "2pcKai1babsdUayd1s63dDaDnHJXhAL9Qk29uiqbuhMzLQsynzppj4V9MJW8AkZBy96VVK7wY4m3Rqk3x3puXqqe",
  "key29": "333uQkr1FFHDoj8FaM61pxq1Ak1Dsm3qU43aEMEwS4ysFfnh1oyuHJbX8x4sbzKneijfF4ayj9CJs24FgMjZAXjp",
  "key30": "nqY9SwcfEtyzx1eM6muRNp2EcYQvPsCb36VGtxHYLLcEMsuLxfWv7Te2CSjwbsiH4JzLyYMJYk42uqUi4D1dDcC",
  "key31": "kk2NoNFgPizHotKSsZbi5qkR2xXRpGqyVAhz365QKvtuKJDbyHHw5AbCyUwhvXp6VSjzXt3oKEZ37bUNc47unNq",
  "key32": "2iiwHEb7e4yb8r5SzwMkJvUo7euovjehGC3M89CgGLKyHx4Lrvx58eX7XhfoWvFJRgX1Jbpxni5aFAJJcQomeZFP"
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
