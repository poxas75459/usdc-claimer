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
    "2zZzX6iWAvTurebDJYRKSe9dvekZ35HbAjyokKnS9fT6B9URykqtSb2voCK9WuFnD9i8aMcbb1cDZoRPWun6T4y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wqs7YiwEFwJsC6p7cDeVtfXJKUsQ75TLaH97LddnVQoXo16Xy7dqKW61iHyLsA7YTDMKM6dgRvHJQcsGCCe8QxQ",
  "key1": "YbhbCBDESpWvCDkQkJb9r3V8DYvFSYYnD5mKCn9mqGtEmJAVg5vSAx6L8HJzLrUgAXUGyXmK6xdQyUcbJKwuctq",
  "key2": "2oyj5mgvBeEBw1qKhXm3sSARvoHw46ygXuEbXjc7iGg8FVU2TcBf7TTuvKZYR1W1AL6tuaFQv5qF3ZixBhAEV411",
  "key3": "5BEzmSXJVTW2wdf2gK7cmfUBtC4jgXBfQFnGcJFL2F4J8rr3DgfGyuiBwqS7LbASsXVk6QsfusJfiVCzpJfjDfDL",
  "key4": "38agXkXHx619wXRnppFrsXdvKrbFojrSNHSPn8w9PPv5U99xet13DYWTNpQ58FX6H5H9fTd6wZUhFLLybdsdwneQ",
  "key5": "5r1Sxs8KViLstHVBDRTnRpquuZJLPo5zibEyqFvnrhv6SCcbWECaB9MofEAzME9T4X8VSRCCGKio5mFMdbcQsyEd",
  "key6": "2AHBadnXJyTu2G1VcafWWixZSwtKLyJXV4JPD3WyZn72rPoiHTTGKXhnprvj4RY9eJD8D2RxfcuhGxmmF4v2wNnX",
  "key7": "54oc1qJXaKXLT3wPQsNZXraKtahaPWpaDUw5nkjrykKbb5aNiguZMw82RaaFiRCqy4z1PDB26NeGPf13Ld1ZzAZn",
  "key8": "D5R38UJbPZFWse98quwwuonPXEZ7S5FW4AjVWbsF2W4PQDQ1txUu1fK4snQxRSMpMWENu8BSsJuJtLpcJQB6isW",
  "key9": "3CAmQj3Rp8Hm2VsdDd3F1bh7hjqFPVijq5Pwo9r5h62vDVdy46TfbgqCQJgnZ6iGLaXMqZABJDatB99MiEgXuTjz",
  "key10": "38dSorfxdfMMfVnHbKJyxVP3t47rtDdL35MnSJYSBN8FkyKxr94Jfq4s7fdJ6E4pPgQeNw1ctEQ3SREBkUq2WzqV",
  "key11": "21J6xteCwxaRx3zLpcVykchS62jx6yfz9hXkkM4n2Ja7LcMLp8pHQsyGcRgveEdBRgeDD8BNJYgYWKSVpUPks6CJ",
  "key12": "2FHY86S3icUoKFH9ufuRjD21rbLf9c5Em7woTufJUtkVrHeJG5JcmitRKqtHhninYxaLucWZR1a4AP2iZvenq1re",
  "key13": "4qZrwgMmYvS23jWxF9gwnG34wpe73v4JNjpbck1VdiTGjtg6RX65Ye7RiBc7sDQcfTSn7PG8osoKSD8qGndke1TX",
  "key14": "4pvoaYsULuaeLKYQUtdvgMtqjJJh3689rYvdLL3RCRYwDGodPzs1Pj1FZRLc7WQJPY6AAMiFcYiSTFoX27m5Er61",
  "key15": "z6QJLtWGNcvuJZ8KTwdM8f3uKFnRbWUfjFxUSDHZjBjvpeBqF2YrzN924STBkGFJnbGKSEPFws5ukK4ZYyFxVBf",
  "key16": "jjU6h5RY13EsgRLSPV6NHxuzVQ8E4D5ek5ZHM9pJFqnEw2vkcDJo25iELSRKjBQgkXBJzRZHPwwT5GcEHzsfUYd",
  "key17": "2J8nz9vFQXjpY2usiJcsMUxhdN4omYUvYsBv3595GKNGj6DPiaYWDaFTyMCKfwRrz9hmr8egyGgrMShLXhh3fj3M",
  "key18": "48UtaNjy74jSxATy4b5pe4zLbSrN1DpHh8hTtPtqZ7oiTycCeAUsUTJM9SVBhZPjjmnWxPTgfU6aZJgGt4wnFjAE",
  "key19": "3CToeH6TnWBLEaVAvbuDB3p99B8vRnH4QEFpN9StAR23pSvHrMd6b1ytQRBMqckPnXEyNdp6H2gq9trCWfjUxu7r",
  "key20": "5hR54qrdMR1snW3kCrUXqaDQ3QHC2QjcfupPVPp2xGiDtJybysUsq2g9BdYziqc5dCbb5XNXsDEKuF6FeB8rTofS",
  "key21": "2Z8AEZxX2vVCiKe1j3uHVddRx27uVJRButtGGfph1oRsBQCv56EKhbLGFPXdkm7QSrVzfpXH85wqiswNk7Q6z2sf",
  "key22": "2jQawT1ft5jxZ8NVt8n6y6VKEJUfv2wv8PogqxReVZ7iBR916WzfLFykPvhsSzxb5MDrYhXsZ7cjbFopdsZ7vRFp",
  "key23": "5X5kptqQvvAmKiicoxCkGBMrkqYG26XrnPEq3wMG3AQxzNNQnTCyNVrewdn5xQDTgpwUqsCXzvo3qzJMKTv6ZHS7",
  "key24": "Mjr5qLRmFoggpGyF1vFucbwDx6cHgRd52zxdTSgB4TSmi3grskV8vCdTq54NiAVcEppcFZGTBJLnp7ikTbBnWMw",
  "key25": "3x7cvVke14kqt9iyg4eMzQnVLaZi9vehcKbDwNSSUBYogArGDXy8jnhZvtA9sLqoeYYke3sc7CDgDKwQQRDUwmRu",
  "key26": "32vQXWkFdNeRhvfxaRNh4SPxgjCEvL2jYZUf3UodDvgh36XnMcBNjKHrMD1hcxaKfgknyDkP1NkakKmS8hWr6Qec",
  "key27": "2YYb3PcQCpsZwAw8YTsq7R4UwSjFQKD5i86B9TzN5Z4iHXHscE3t4G4MK86563aP4863HZfXwSbf7wfTJzVE5QJ2"
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
