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
    "1jgJESujv7FineKKMkHxfzha35ycrNJTVMuAZMyiXykei3veaNTo4WhfAUXSsFHtjKArCUcvqMD5Bn3vdmyxuwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfsem1RLhwqMFeHnMSXrN4XSKCZPbbycsjXR6RZUxu7nnfrsYsqcfML7rXn1N74fW4uuz9zfYsom3KDUFbF7PEW",
  "key1": "3JJQ3NbAuXbbnDqoWZzEnjiqLep56Ff4ugd7R29NcWKCZA1xUcY55ccfhd1i5oVqptDG5BtJdo5h9CfDFnQCHJz5",
  "key2": "4KoUKiFdvYpGUoG3N1PVF9LoLcKwFn89SXxwuN5nnVN1J78mZCFvWPfU4aJat6bEUm3PrGLs2uKUQZaXpm24mBPf",
  "key3": "4euBqkn4MHoNz3U43PunHFKuaG4KDGegZfvbZjuWSeTqUUQqirKBYSThjHQmPHnJUJoHP4e6DDsXNjCYZddwXpTu",
  "key4": "5paDeGQ4YSAAgEZnjqw68K5u8bEnDMKYNqkiEx7KWuWva5zWbuSCgaixWHyjnwnExmSj5Xnv5nqdiNFZAzLhoXj7",
  "key5": "2AQ7P5WyjrZjsPkyRFNoT9icHdd46zNc69NiUJ2NCGfi8ebAvmJUvzgJgBWkoWCWAm7RtAc3BXSoBwkko1s7FXtf",
  "key6": "awFRWnNTPmsSonNBUBtUK4SzbUPWEwTXJdJDHkxXw4pMEygvo1g8osaqqeMXdY6uYnJgs9pvq75cHxQ1E4yKRfi",
  "key7": "3c1FUgVV5SohS5a7rufxv2t85Fo6fPDKL5CBsTfKaYH47ERKT7QXuPwPfSKyQm9Si9zR5VoTz99yy3km5fxdfmuo",
  "key8": "59bynpMNpsVE8fgKsEKgzirHgM76HkxnuUPv5KjjUKz4ghxNYzAES2Qb312AvT1xHrjhCM9hSA2VtS9AzQm5dK68",
  "key9": "2Dw3eivNbBBJzhkMtiU4HcvWdHmsj3B5ZF9a23NddpsTsrKHFQgd1g95FKP3GnZYwB4J1T2nb1RoXUENriVdG9Bp",
  "key10": "5TssGwHgg3DU9F1uxYa42ZFN989kd6Ssa5w1trR6mDE7jbN9EeJyjNbUazmfRTtQ1yHQpDHHVo4oTqx7sDmLPMzL",
  "key11": "4nKyQUhidpkhKjeA4D3wce4BjmHhGx757Ybiatat7NUDA3KaaUJ6t7X7TvSZxFRZwi7cZZKQaf3xsJ5cyQTjTxRQ",
  "key12": "5Pp44cktLircszTPk4Jmixij5fLU1YFPi3XoGNzXEhmoVtpY9daXjSCkVV84eC9qXzdTbjt8NnKxSjmBxhW2FqyC",
  "key13": "5yGuCatrkhuyLBWABuqwBQNrwCGcsJ7haV881VLpaUKXsak78Y3NXoqjNnupnMopHWnJ4pvadd4AsTBZtUWeAaab",
  "key14": "2D7ycUx9T7NAd9i7wLUczGueUfFKY7DgPNbmuqnU6hx8mzGBdz2yja7Jwakxb4JyiLcH3UytauU59oTw5tTKNg73",
  "key15": "2tvadnthe1HMVyQKRaHAiw3V5xuK7o1kYSTH1MCNKgz7X3PbFGRruwYDAGXmood1QTB7abjNbtR8xgwgNhYnwpwa",
  "key16": "427W64Sroi5sdLnpL6o8AwycnfDyEayHu14dC5UxPu32dvP7iP19vnMCAydZ9CzBTrEyk2Mg3pk9WqSXcGuvGeUv",
  "key17": "egofzqT5f1VRJJqj1xy3AM51hq3Uf3ZRVabpYPDpVuxGRDGovYwhu6kZtwf5shJWSVjAUadWUfzfJMLr5swtfB4",
  "key18": "4oB3kVZDYbpdjcWVTE7SoGpzyyqWHwfUkRrMpxfNJwE9MN7NPCSNjGMfFAqV2GehALtsGdnjYDTfbjf919AQ2BcN",
  "key19": "5aQqvri32xg5LuM4c1wGhyUraaHYssRkgTKoa36KEXREgaCT3EkBg5k2R9QKHihJErwTN4mPq5qrxjHw5LsCNz8H",
  "key20": "2mieNTdSERUaFcBDL8KtCLe5ddCmWqcncccmGsjc24PJM8nkumJqtKw8TA4GQqgaGWPU8ShjGu8N5MeFtjzpbfZq",
  "key21": "4Xbw3Qs9xfuAijKd9oQ9xjPVGqb7YmRSHY79ro6m3BJ6oG4nZRUCvqJD52A2zFXT9tmtvVSHqR2tVHV968tiGw5Y",
  "key22": "3cPfssmSJysyJ22eqt61RhY2gSVcLBB9k5owsXS8q5tNBznmNKF7mEogugEkJr8LHJCCaZmkkdfG3m17FDVLuuyi",
  "key23": "2G9acWxPPrSPuHhHmiKdL22YXicbJTSpfdJXaqoEfpn3ufmxSUBgtZttn6EcTPh2yniwbMBAsUJCoVHzpEnrJgmW",
  "key24": "LqiQ7Cya6n4k3RNj41akARfp9mesg6rPsxNK181w9AjduD1o41sS4G2bVhFnFQNahGgdfCkhr6M2E7dVkT9KCX2",
  "key25": "5WVCGzH4whKdWHGD4eXZX6j3JRrbc2rVcUq6qqQyFaqjcExGoDBQYMQEo8KFprNG93gQvv4Viao3V1KtasCtmQ3e",
  "key26": "4PPJTigNDNu94jJsESvFn1KLprScY9UC5MLdm2SKcZgQ9NvJJrV71g3GvGA7kuEFo5QF6L2gvsrrM5nmfEKbS8e4",
  "key27": "3uWeDFa2w3XDbwTMnaNb4tzFGY3PGVkD2detxEwL9ajJ8wRiHZaXEqJo9K2JjMMFjPKXfMa76FHj2So4jv7dqe3Q"
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
