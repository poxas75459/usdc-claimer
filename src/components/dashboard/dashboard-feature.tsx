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
    "3CDXgeztwXHWFquDeycVZsRazchJbYbX2fReC9EuvBMz6cD9Ke726YaiuqPce4kthNCxgWaXd1k8v9WCdAxQc4zQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZThqPwTFcNtBuTKE86kSjCk3ncHrRiRKdHYUYvxweiFrab9L1vWZfQJhcS2WA7PM9d96jkP9Gf3fiwoSyScZiqW",
  "key1": "4zJT7jRVbePu4NSp5KHAq1Wr1y4yDLoz6xi5UmryFWz515fZVXNgufnxAKDSgmFeouTHgCMRXTZ57zXbHd8NSj34",
  "key2": "24qfijUrUwhfjavdN14EvLXj3jjzKXXCk5zQuPUXrJn5qBivAtwZo2uYUrwqgxbnJuw1QtFB2J4y5yBYbPn67LTj",
  "key3": "25xe6acXRFDPZk3ozM8VaKBbvqB33SHdpFQ5RBpKdzkm7K8VtjPtYAT89ELzce1jvLwPTbFLsySZ2a3v7PfJJ8c7",
  "key4": "3x9hqRiNeqibTMBMaX9MZN6sCQqkUPbBuSCcnymb4YD7GCRcbjMmVMLDcLyH35vsU2RKrjcWkgavmXi6wnSLZCmB",
  "key5": "5ps5WpDQ2oxX4wPVwDWEePU5Voho2Go7TUQHAEbcFHW2CT5vTT26LzgFxZUJqtxcixvuFjzwekcNSEZ6UL6TbYkF",
  "key6": "3BuoURpjJuxvMJaXVhgTANbQqQdMYAzCnzxHL8efogo2PsttXh3viYumQHs2eBiAtYTvSaUN9EVWpQQunet5pL2T",
  "key7": "5GJg1capg6k2XkMqUqVEFwB86syYQf6tJAQqvUCf3YHFw3gpvmHfxogSoRbqtJQmBkcpAx6REFeKRYd6dea4xkig",
  "key8": "4Xrg7PR8AdiDtPH5WiiHy7WtYnPr2LDWAjiURdo5K2DM6pJFv7PPUcBDNkXaVn9rNLvRuzAXUMiAQUehqZFohcZH",
  "key9": "4FsxWu6nbBRjTjanikYXFHekNcNUYwDwaU5UWB9PxEDFfFrwKkoi9B3m7op9pV4XLuX1erwhuSE9TFv5JCkrMqGq",
  "key10": "4Fp63sFZGLxDYpHJk6Z1fjuaVvRoMG43iWybXCyFovXzD2vMR7Qxs6ah89jxoJgS89k8FFjhYvSC4ZesixbXvQkC",
  "key11": "5XcKqW3CiU5cpSigoWqSmst2bErfXBLShxtdEghBCUuEit7ujdBSdynDHM4PvcTTh5m4Gtes3Ari9taoWyyvqUiM",
  "key12": "5mYg3dpYykzRGkBL2gYMc7hhwf2g48U8J67V892rxYf7TVuh35XTno5ktZSDC2VEF9nsZipRTXCf1SCKCh99P7jz",
  "key13": "sinoQHWGfmLFaL9VDDh6Sekqvfm8sHavRcKauVsEVqScF4UeoQTBu3eRmCv8yPkqwwm3LqBXHhTeC6rFyW69fDB",
  "key14": "3uJKJxmiRh7Yf4HBsxFLwYTbwpxXb2iB8qee2pUPZsX9KTUvXFaj7ck3CPukQQ8eTEjKCX9Ryar4xt9uqc6tTd5h",
  "key15": "315bM9W7qREVGRHzeTPURaQpE6KmXbaW8LKTbZXAjB4duV9LTz5LoeXUEeCEsk9HfisGywR6nKUP8tEECwcGxGLC",
  "key16": "2vE5X8Dgu7pK4GxrzbbEbupVUBJSK6abV7oxXeypL3LKqKEcwuc1hxR9pu853z97R9ZNpk79TqyF2Dnj7FKHBNcX",
  "key17": "4EXtPFa9tNNi7CGVbBa4JNnkzyJHoqs5axS2VGkq6zem1A4BSn4QpRvpugWiGkmZuuJLGa4VF9zNDFP5bhhViqxD",
  "key18": "2af55UUAW8ZjkesgKXVfyis2PMJSLztiSb3noVquyfuCfeLvPDYLVbuYvDHKrXmm4aM3x1zGY4UYwL6EiBmNLdJW",
  "key19": "pu3j4VW7Ugh8RbcJQTT8tVV71GWYEBkKbChqWiHhAM1WcMrhht3LftuxFB8oF5kARA9i3WGhzTbYKfrLxSNh74b",
  "key20": "2qmqDzNoMeSGuiwvmVq3ALbQYxKeu1Mm5peDLVSeYqLmzzLGHSxdYwStf2MUDiF7PtfJNCLLPba1dBju6vi4UkKM",
  "key21": "5C9YnNmwkqJHRGdsedEoxyAtFqZjWSdGoq51EngU1S1AQvnu1onEHFA5ZCCZjjob31s3AiBWhWnvieA9TDmVXv8g",
  "key22": "3DYTXFZnpHhmeqYnujv7YjR7kTX3Q5mh8Rf8MUhLfhRifUb2dtxNmHNDsNuwqzU1mFCwVhSqEgNtJo2XJmhAGcZG",
  "key23": "thNMUUrF1VRQeYj7NDFvLKHbTcCak1KbzoFbKXrYpcKJSKDHjaogAge126x7kJnqiXX44Vbxhx25QB7Yn91hN3y",
  "key24": "51pLBUh4eGbYbsoM8oBH59G8VDMaLvh2tSN8WmN35WAqbV5zezNBWRpzi7M2LA6ijqgb1eNFPcmS18fpbRHyfFZS",
  "key25": "5qU9HxwB6ugSgFvgtAydpvNfDzhRh8aBsZe59BwXhMxXwydt3gpA2wbN3w6PcNaxvghmdxf3gJY8Dje7vUfYBbF5",
  "key26": "4ySPEXAYhUsbYPxreG8Rb4yD1axLBr1Rjp7NwZxnY8a9tcYiQtbnGPGCFCt3TydvYLXsccK7A7pKdZ15z1rvrsVq",
  "key27": "4dmhMjCUBGKqothZ2tDHVEk9EL2s3PY1XtEgBUPa6zs4WJ27oFFFJmqPh9tuwFwy8KPbENUv8Stf4MTK6U9vTRoH",
  "key28": "3QzKBMzyPJjGxUizTyrPuwfyDJSBdj2fajAGx7DxH7aYUfW7uDc6iG6UL9wpmqxN5AYqwPSDBxPsc2Pip6Fpu9XY",
  "key29": "5b6se5djAVXZv7ZAE2Vq63Pg1BRqbLE9hEswf8yaEeuLg6Xdcx7sdAznWGdRFFf4hP1XUPFJPcRzbnwSxxD3R2LZ",
  "key30": "4tLJfnZNFT8HVmREZLZzefZv5dmDbaY5LQCwSgguwAyYaQTWeWvtM2W4KCpdbYePrjM7ZTRgsunN5R6aYBZFwhfv",
  "key31": "3ftyCxvXbLGidE2m8mfFwLbtyTH695CYCdFVFZvxVxaoHW8C21dBvH2VVMpsGiknrBNwviKX4MbV5gp3rYQQ3htx",
  "key32": "3BuNZMKQTiaJA4XmmA1yuftr9PkCdcv8dBA4S9eEZG7CgnhrF1pRtTaMvcpPDgEqbLFEcfBzJrN8zmkJSeXTtBVj",
  "key33": "4Zx4HRAugAnEQy3DqKNNv35aMuDG1LoxxGeA18tpZChpYKXqrEwznGLqh1fi5SjeMESYdFUB4x9ov3EyFJvippZS",
  "key34": "2quqRxB1MKJNL98djeXxjovmj6qsw9b1hdscCHbi92nxaHYe6FYGDNzbSp3wBhXuW1tA9F1tbpGbERhLpnUmw3y8",
  "key35": "Q4YzuB5WdAWTEBsL5EZEUSsjgjQ8U8Q2esNAaFJcKENZSAVGagiwGsS7PFwwKwiHao7QX3iVqtDBpgnVkNiqXAB",
  "key36": "4wAPq5wZ7a4eqgcDUcgB22saCPrLpV1KkP39ozyceHZn3Kxf337kuGpbyZFcunYCu1GveSoL1rb7yswRkxoynLGQ",
  "key37": "3Q1pqbLMWivj3n7p7bBH5jb94fFfCHVP51sCdDoWtBNreuCghjQdp4e1RM89o98bMA5BosdZwqE1xguUw5gbNjv7",
  "key38": "4W6X5URsJL8HTENzfayo6J1XRGWTh1bvekCZcXtimvV7gdr4VR7Hbypx6gVnaMkqVAkxJoY2tDLunJd8SJRyw1yf",
  "key39": "vjnW147MWFJrv2uEjA1Koww3uY6vcUq5MgpKeSzdqNgTH6VZqGAYXS9q69vrcXLFYr1ddAzNCrBhwRJ7yJ9MKyG"
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
