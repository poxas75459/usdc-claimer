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
    "275WRePV3dwWyfquEZcfkKBWesqmWVzNveASqmbp3gjj1XYLXAzUsu9p2qvuaBCawkV6VeDKZH9gwRzBr6W3eQHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGrC1aBEFAWCwh5GR6ZztZy5LYUADrrPBR9EFEAFGGxS6pJyfxGoDSPLrXY1osWE9kNdHf2pqRifs6w4T9gKme6",
  "key1": "61KAbjLpJK4b75uucj2qoNd2HmRDuKo5Da95DF8wh5tRg4uoa2MFVtQiQQFTGi6dSZCiorS2pTZWJGoMvqE7ibMt",
  "key2": "6rxLqCLcfAfsittMrGeCtLbQ1Nc4T7wV1gSyAyV3iW6UpxyRmSuEzbmo65AdVE4LSDdUxbCQLTuED8KyUSL7CHL",
  "key3": "4FbrdHtY3QMS6E6dqH4MFVKU1N4mjQ4Bvt58TU9kTAJfZJ5ENxqn2PX5jWgaBYUeQmkAZyYEJeGKBaEEnDEYXLxS",
  "key4": "3GMVVSBMQcmooMDrT7GBzU8WmmmYsLKVHcVDbXFCEt3yJcr328ifwALvRjCXnjWWPEriqQ39JFjF49ftfZYcTMhQ",
  "key5": "31pgniCkYTamRHmz2E7WrQshiPMDzgcM4QoMAm7yo84VgyADT98NLw2LfpHCbtTP26HB583gpgUprpriq9x2EHpf",
  "key6": "jiQTefocpEf36YqXLLjUE36W665sBX6NvWL8xdEA114dFME42a49zXxpxAxYyPLHqEujbF9XgRPxyiBQ3QpViYG",
  "key7": "22Nae5j79dhbZjzaMixK8yQnJEtd1bkh5LmtN1DYFLArz5vDSNLvgKTbM5oMb2hUWCk2xWodf9QLVyEZozDMzpZm",
  "key8": "3XFXCQb8Eq3HhbXbHUFoBwmtaiLEjnBPnj4pfJbJtAdkFKMCDttTNDeKUgbt6BkKS6hJrn7Gmh2eKxtMpdJciwuP",
  "key9": "48tgth8D6h6kjLFPk67ucr9B75yQRQ9hUsoV2JzyMypi9k3dUG7bertVN8oVKPcWsSKZWjvYndQuCcBZ55wfPJNb",
  "key10": "3njdQ7EPi6y2iDEASeUmYDB7nxmjKedF85h2ibR3Hw3TfGN8ed9Dv4M8turADDSY5eShatV46g8nsJWTxcauwk5c",
  "key11": "2LoUof2946CZEtXFEHLdJVoYzCTKeqaF4XRjjGr2RN6SBV71B9Mk1sWza6vkDBegZEkFYWEN3EsYWXnT5Yta6WS4",
  "key12": "btkDFu3Sh6pZoSRu8JMsSTWWouo5wVbN7aQDpFm72y2qX1T6K8Zs7zqgnYTBSUQz6sRQFF49jctvYpYAqbjppYL",
  "key13": "2xqpZWbAchGbitzBW9DwxVP4PZjzmNkupk6ZMszr61hSuCv65QGAfYFa8AYGpMbU9t5KxsrDzTwcZJt4NUL3G2sQ",
  "key14": "5MPXYzL6awFrJ29Gdz1KFbaZPMedKmcCmJSwhWcX1YAYCc2iZKDZB3zoSH6qsndBpfHmSDmPB7UYu8M8UVStipnt",
  "key15": "4HXKaCgak4WV2TfAiCUyZJVxmjBwTrKZs71j8PP1v7jjnq43h4C1ix52hx8edPigTQcrR8hSMQTvf1KuVt5L7ScA",
  "key16": "eTU3WRJ1PgpZU7TqoZoMVfTbZKs2VSiYCTt4kyDos8z1NEzE5dreGKPBhqAeZeBUMzDsXkgD4GgThJ4irqFcGUk",
  "key17": "3CdwtSwMaUHXmJ1TQvQsfyCcGRDXqcmK4XQNbb35vvPbczhBVUAqoDYeSZ6WnM7y8jSbFd18KfaS9VWDVksNeyaq",
  "key18": "4hUaLgEYCMtBM4omx9E1MKrdumkEu6DtXaJs79nKsR83BgU2QwL9tVVaXVrjdZzAZYNCQZfStKZUhmhA4TGyXxn",
  "key19": "27E35y649FxQ9Zc1uwEH6ivbGuGbuevk3Ys5Hh9tzhuNCjxms4fuvv5qb7DqggmEexPQGVieqN2JNhcy7u3BhPJZ",
  "key20": "mu6gQVKhaXbGZcoEiUg7hFauvcH3TKgjd3uSjMEtonWHcAMzdnf3vHRh6sXSrWmWX7u3iK2vJquNtsaFPY39DxM",
  "key21": "cXwzPqcszVLBoQ7QPNtoMSs6LmuZGMcVWHK9rPsZbeyuZHdyE2Zz7BEL5HX1mKLd16RLwNTjBDDdaeULx9pgwu5",
  "key22": "3SgH7NBLVb2i7koMfJdDzYTGRs4iettdUBurZBLtKoXBUsK1iXwgZ5m8jouEDRwFbo2jzzzUcdou3VMas1nxmgds",
  "key23": "48PUYCiF3aigUnYCU7CyrKhrXr5Yj41uxEzPiy3gEGE1sFKb5LAyBU7vvRbizQJuUPd2C2SnwdBFYjrr6C37upDz",
  "key24": "p8kjhbzKQBg1chsp63cnT1FPHxtv9A57ZrkTDSN5J47F4vChGCFsagoespSyYFpHKSrPebmzT4voY7CkjhsZNg5",
  "key25": "5avabi7WWdGwWhVENo5AQf8feK51nx8ptB28PR5k2zhfiuZASKPRdzJiG9nzdPj5LTh3MAcUVM3diV3ET9RG1YDh",
  "key26": "5wDB6F9RySZ3qoK9T2SSzXMF2NmrNz1TjEZDgdKfwXEo3N937Ji73jxMfoBTL7umjfuihDcbVBgmcoWDk1x1vALz",
  "key27": "3byXgr4F7gYrfvpPkJw6qTM3yP7YC961d9xXLg5XV7Mj1QDdbbNEGnGeZd5pmbfmYRkAKhw6ETL6Lg1mut5UAHEN",
  "key28": "3djvXqPToDWPBV16cTAEnFmH3YboEgJCnLsCJPbWDXvNm3NwxvcnY5yauyPfdP8bH1MAsdZPJodHGvLhw6gDQ3fk",
  "key29": "ra1QetNtcoVs271Hm68uuoWCWGZwKQ3seh5ePrggNzDtMmBVvAHWbecg9zhjEsWVdTkadc694g1BKbWHwzNoayZ"
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
