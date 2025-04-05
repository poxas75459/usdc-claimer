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
    "5WbTMeAvpc5d9Bakb65m191T8QXN3ChJJkhPJ4Hb98cuamUsAenkHkSGTYGBUi2nd2KXnwHpEKNeneAjugEtBhfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nuEXSrTqWqXY9kfWoh56cTrNAHYYU3rGyDk8Pcyfdkkp8o1N2ivDiyH5p2dRBeQNhvBJnQGhKXgmW6bKHvWb7k7",
  "key1": "2H5NsBbns4dQdwiuGrm7Sj8U8uAAd4Y6tNuiLZUojqusQKG3oo3tDNE4sarZGPPm27VArg5nBJsFRnsoGudGktB5",
  "key2": "38bXRqT78cG5PgPtEpVwAaUcrts41PctF1yMNdcYnjNj67StyU5YEhjCTv7fpyLrMnDF2EyeazXRoJZkR3PAWfkX",
  "key3": "3gxi1Ur921ScSqfc71ecZ1i5J7hwswq7QFRcpaKEmPs1h6pFGmWYXN4vJSkLqH7FTfgHUcDRjQX5ppEyybhgKiCL",
  "key4": "fGq9zgpmPPxNSoBMT89KHd1aKaF5m72umDxR3idxZPoeRnWnVsWhahjYJMbjYNHPAJXKgx8FcpN1SGVkn65VWrS",
  "key5": "5V8Gmebwk4ys8aDdC43h8TRPSyaLDbZwv511iXkiHCbJEaL451ughpi2eu6QAQWzN8wuQYMT3kN4iv6eTUEK2f6i",
  "key6": "4oB58rdcTd9wT9i8GV9osxbY7nGD1W9Sdfgn4E2rcdcaEMDEJG1wjCRBwRxj52ZE6hZD8DRfnVFT1teXwDwoD5Fo",
  "key7": "5FygqQbtKYuVgBEPBkPgSiBHJgo2aXAoBGPcisAqHdTBjxZcEqB2aDNAvQm8h1GFzoMFrcvkvZD4sQhusFZW8ree",
  "key8": "wjx5ZHmAvSsmdoy4RTQTWgAe595aibUtm99W5iR9cixZCp1CH6GLRRwmixfF5NoNXwooHpjQqwz5FvqMkqR4vzc",
  "key9": "3jSpRX4v7rNtRKVj5iBt8UbguGQ5hnALBxSYxK6uWwiREhGxX83pY7QVfSkECmecGyaQb6Z85YYqYJtFR4mCZ3uu",
  "key10": "LmEAtrvEh7ZsWvFGHJqvWZ9SGAHZfMAun8R1dwDpbUTxjWSPAbVU8WWtVKfxk9fc8ZTAGKmP5J2CuwR3qvUc7sa",
  "key11": "61teKXrKLJKq6k51t4Dz1ug6AFodHEdQo8xhE1xdBs3KqVQkxJHMGzw9T6bdX45iYixxYrfLLA7XCwKnAMv7XruA",
  "key12": "Sha1ycVB3TibZv6Kd7SNcjVZrehLJgz3TZpZfakvKCLwaVNyqGyZiGcX4VLNuoRBLBb9L9pAvTaCa9DmFRjtnMr",
  "key13": "4gae8L8VZkhz8vNTjFGG7eyJkH8P3Xff5k66UgTeLZ8Y69FSuRBvBwh8nXm7HvZ5FiKJG1yiLTKk8p276zNotkVD",
  "key14": "54ViK48feqAUhpycq8YqwnMVGrHn3ed2wUzzJZrhQ99GSjvrKckgrBHonVY9BwM1PRWZkVnyujKc7AkFaFGG1PMR",
  "key15": "2dsaxUdMGzrEtXG97oEaarPacyhrBo5VcuaZyEb828N8dhSHeu4tg2M45FgES8LxKbpxFqsxfiAEm3Xf89AqGNmr",
  "key16": "51wE5B8zXVi5xcysA1NwARiFjGpJVLyFrCyyBcgGE5u3HPtPXFvfhZ6KJ1ZEoTrdtyeqokfL6a6C99AcCJLsDUPA",
  "key17": "5C221ztjoTrzQxsxS4ShNBPx1stfaueGoMcjQBkXYYbkHBJ7sVwuAGQLLyBinXwhdA2gJ2fiJTt1g7Ms7tJDtTEt",
  "key18": "2s5FTeX9XHxSZmZzmXPBELLk3UFiuUrtMhJGsG1ygKUKwEDg6aCGojuLDrUwMPSVRAu9WFMc9aDfHUz25PRripia",
  "key19": "2bBaZ7wRvm8JqFSZi4465Z4MoghfQRs5ci6TvnVYfyahiZTLCPL3fhSj8VFFfaANYYBqGgB2q8TeqFjA72RohMsA",
  "key20": "2FjECVio2nXvoAfqcW6Bdmgo8PVGbYkPUBj3aWSHsipduuQvmfExvQzygi5GmecYLoWTLKWjZ4A8eiaz62HwNTnP",
  "key21": "65mixYwLN9o4Z4xJwRxRzUsfVgKTxCUWiVtRhjUDF2i6Kpqh4z8mpK4GBBW1hBLDTDiYbyb8SCpCcRnPBXxi7jd6",
  "key22": "2An7p7BwgabRvQ8iimttYRDePTjcMnZwE6Xp6VwnJaGkyf4F7UVwvWrGHNPRxznzkQtnimBvBGnruwqN9Jn5w8Qd",
  "key23": "3oYQn83E9xqGq6xwRAAA53SUzuRLxWTErE7mwWMpakwMSCqeA5SQFFUJoMRVqtLNs9Mv6QB8Ba1mcW3STZj3fSpo",
  "key24": "3Ns3ntQ1v1QK8xTdJW2NR4nox19aNQh66GNetnzBe8XhmU3HA45Em1bXRdpJPiLA22tPE6j5JnZRRXuUr7aaHyXT",
  "key25": "5XrAee1918MDRtVJk5NHYXTmpK4PmDh9db3qP2VfSrCmJTLe3ErBSEwLQ3xEpCgEGmP3EnQLhrfA8LuU2z9Jut8g",
  "key26": "5VH7AJcbwTd77FWb2bvdPvKikVvrqykerZyXncnBz4T6UBcrMS191gdvmwCHjCHckxqYFJSXpceBFpHdfSsZ7ymV",
  "key27": "3AaFBHxn6U8FgshEvR4gXQPqazS3a6z1ye6bdW7xkSnACs7KQ9uZRn2FxNxw2qTf286fa5mGv8WixjFEe4nubaNh",
  "key28": "5SG8agRoB8CjCY1vw4LFZP6ZqFoYXsYxS7rEevpqDHuHtSGvvgnYUDEgKaUmJ76Bw1Q2iTwazEPS3rc14HFpsrY7",
  "key29": "5LMvMJpzYnGpmgGv154AtvBeamvLz11VzUp6e8TEjTZCudnCNCCqfwmDrNXminXFe7KGUnSL8LxiY1mJNquZEHJP",
  "key30": "5of9bUNnZ32wGTXHeLkXepJGH9ANXuKncwPgqo9WGH5iYqRXtUuDAQVJSHdsRnb43fncJsnGU4p3p7w4hwD414PM",
  "key31": "3mQ6SfKqtRJw98LsZHGqpuyJze8518Rw446VG3sPMFbWi3BMLz34WsppuKeEZWfRB9drHDKsUfChKNYovZ7ChLJ3",
  "key32": "4yUeWqKZuwjBaGAE67h3Ts2MoZmA6c634KGXT6pGmYpVVf8KBRzn9R3u96bWfrWx2AAkQF9XHoE1FFbeCorKPSYF"
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
