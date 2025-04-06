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
    "5jMspVMSc9ik55v8Fd5XZdhuXMitsAKpGBXmmrF6UKj1ARSNy4HiDMPFhYQGtR9nrV4aDQiujh91sBeWbfviNEkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5UuweBTxYseUUmQvEo7qoC6C24Rh5Mg8murs9XVCHBURonPe2PVximPMXpBuAtFKvxMNw2bdQzXzFDYp6Dz59m",
  "key1": "4j5hLgpDRXKy28RAkTNvorTUkpN6RukA2dgSVdnCYmk2bCosP7d3dL16fnESwXYbTFSos9NRfLQDFLgfzP8UjwLM",
  "key2": "24hpeyJEgByFwmUeEvZJFj93KvFFqrSJq7G5wDpcV6HowcvMbvTq6fF9h5xWbRbLWh8EbphUkA6CLGNZDByDWLJH",
  "key3": "2DHdzKjebyAM8FRhsAJJNC8RdPWoM6daz7b9cdxWAa22kZrGCKf7s5FXLDwANCBZszUs696xTX6hRRR8QXsKCUej",
  "key4": "4kx5VfMN1QnrJ65Sb7nEBUzUSF5URdxstcU3TgXs6XtZMav7hhVeM7Vos6wFwqriKzK45mEWcjm2JKXJYEuGzBfu",
  "key5": "335Kp3Q89oob9fS6BSkqY1zghQjgQUqsD3TEGTPLQ8pF8UnXxN9EYvctNwxG3hbLnGSCCBubQCdqhTwk4mJwcy6c",
  "key6": "3bSkzt3LueFePkWT5YxVgPnBzJnScnXXpmBzZ3UDTZ5jLTjJc8dzav1uEusR8E82LoV9sNNiGuGabYJW2AQ2kGzC",
  "key7": "21aNKzkXttSBtYZyWrgywy2ndKLjMRR9EssSw4dSHgs1HmtdnVtRp9T45MFgWKerbRgEpjxn1dGN6z8jwE6gjrcQ",
  "key8": "3PYkfYXq9wDoN1dvqbdxbDBatWVJs2xT8GNnLGUkHSEmBkjr6Eyu8thU5MDJPa48mQk98dNR6j9EGVhigzKwWA24",
  "key9": "5AWFoW3miMiPx1789wKzghHRRXt5ySnbHTWAgHUyRHj83BqDnm18NjavaL8T4JqRuHNySPau4hXq3faDuEtgtsqu",
  "key10": "FPWwgmyjJHHSVTTMUs3GXWBbx533Gd8ixoH65RBZH85RDFGijGXQBiyqZRe469gbvysBMZL1SKVKwpn99AKTyz7",
  "key11": "4BLK8fKzp2LB42NQUjU2tWVirVBZZxYYKtcmBfFrNtu6vbsKPkyS9CwF7XrTaVHQVeKWSzUFbCKLYtenY9zVsVp",
  "key12": "3X8hgjNccLn6wnx8CsV13it5uWWwiYpzG7Hwe1aX1jFDtWaBsV8JC5233ZkuiPJLh3evBVAiKtHS5RNh9MMzSS8Q",
  "key13": "4EJrMirtzsxK6n9tsWh3AoRdciD9v8cJRd4NtmoLq9wFiX2fYp4FWnGB2oibABvg4xk8n6Yz5LacK6mVGv8wpmsz",
  "key14": "2u7Ld2PieQZzXz1ZrPiWT3edC2kEbmM7sXLqmrJw5PsvRzxJD3MZQcaBBr7cdE5jiJbQjLQLVvVyoRCA7NAAAZXh",
  "key15": "4WvHovdkK99XS7PYvEmwDUpHGVMgwZKGG219jQopT6uhN1nn3Dn2jqSK2raTttVpScfhe6s6PPPqcXZw5Lts5Cak",
  "key16": "n5ywEVTdU27YvfNbbtJpcuoiTKYLDYzXZ4boJCswWsuLogdo6mzq8U67d3scjgujJiaGyMYTXj1mttACEoC2Bzs",
  "key17": "5L7JnpwNdYfZoZMCqhFFE2tKH7CJTienJfnJatibjFeuRaBcA7A9HtfRsdjmr6kQa97B8EjxqeBdneJNMjpGT6J6",
  "key18": "4qQBh9otNCk9uhMRuvXMQtBM1s3z33jd8SMCraFJycgjXDxqidB4Xg4BabjAJmEyCZvHaTaMvBVWPFzka6oNB3Ap",
  "key19": "TBK8VLa8MBuBFe7k1aDjWCkYy9qVTi1gBXjfUtmBpxMKbkLqXhxWV7ToG8BcpySdFHeC31VFGVgWRfZQPP5cs7V",
  "key20": "37G9fPt43GR14HqCNw2Dwpi3ZeGYMzJ4E5NQcGd3GZ6X7fJdZkkurS1KPJXh8wqqmi7Mx5qmCn6WqHrk66LE4DHm",
  "key21": "5HR4VAB1Uf6naNPC5qrksTa7JUFS7MYUh7DQLLtwYmBrqR4ieiJ76soGgDfBwT8SytbfSBtzWQdFPap3B5xRnWWK",
  "key22": "5FXnaSAPXnxs2BiRm8UkFVd1qpzsr2FodDP1PX64FQDvPbBaJYoci5zAbaB6Bh4kTcgNHdxm5W1zgu7nz3My5gLL",
  "key23": "45zh5FXMZYCau5pihTfrttFe5RHLc2PhstMhtAvA2xBYQ8ZmA81ZJQB6xS1dognmqrMVnnn8TUCGj8fwb7D4UJG8",
  "key24": "46t86J9uABvi83QcLCNrRJThQXuvixmF4J4tyhEuodY3S93NpdyUgmBqyNZHdMgjJKwH6orc9qcTAvpDk7AyPsiZ",
  "key25": "24j1VsmSZcfS5MkYwRcc4NovYr9niNU1Z75t5k6uESwYm47MpMLyGs76XdytXzSyzshBym2N4fPPdir53MyyXyyR",
  "key26": "NNbiajUHGErQ8Q9Pw4LXHdkzLDPc8Ffbk81PotBJHdPgUUGgEgJAdYyHxg675hYZqEzeycj1T2z6xY6Hmt8Pm64",
  "key27": "5HZ63EcXonnDfCs1uhBvzXq3f4jPjQiseDwnwHrB5KuYdeedikxBbjpMQgb2onrfpro3NM3v1ymqwNjMPDyiAR84",
  "key28": "3hLkbm6hhoKc3eNawiebDsqEGfLDcNN8VfyKyN1MLnvWkYiDHZKyZ3i9CDEMvd3BrSoDvW9Bjcpj7HwKFjUxYnUc",
  "key29": "2KztkKDKHztDCq7RrUWH3bTXdAUVprnnc31GbWD9iJiRrooGLfqgHJWcMXurJFXp7JCmy4rhvfdmzBFBRqgfWLL8"
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
