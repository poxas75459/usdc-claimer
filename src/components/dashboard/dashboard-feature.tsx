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
    "hgPNA4zxkBacABhuCHRpfHex1N6tzUh7XixoUwV1NkLNZNq4fuyTniLnJbT4KZzropYPv9sTzjH3FYBPJW388yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6xpahSYQsbfSBuaqA1wYEiBKbK6wf44ksZnEixQ1eiWuE29cV1wwEiqdAgcnStzpsgNDZm7KfGts6FKE1TDTCF",
  "key1": "5FkQ66skn2cgsch1YDbDzDGPXwi37H8rRt1M9e7VbYBR6KgwEZULx2b93jfU1DDXnKiTJ1DVvcvVPVcpsvN9SSzG",
  "key2": "2yZu9PnkVyCzr6koaGW4mEkrvZByqo2Jm77gDeuvwGjaub78tbMAze4kUw74gKdKupLvtV3zGqB4k2UExj1JsiJu",
  "key3": "3RkML7thsHTJ79c9ndunsiS1nfJ53eZ6Cp93rx95BCMnhUy2yMAcSypsGcJVUccz7r2TAXeJAcvkyFQyMxhf7twq",
  "key4": "3kFzfgSW1ppgtWfH5SnwteGtp8V9Xr12SqMQXYns7Yg3MVxTaHz3fggmWUtFUqx1MjAHuUm3vmZQ8VPYKNHk1HAH",
  "key5": "3UfN6Bfc8QqeL7PfTWVEc4877SyLJYC4UQtTNoCbV644Eg53eYWsw5xiCsgPoVa85iiijvTp5EXmqPo8CwsyDLx2",
  "key6": "3jqCbwAeoBWoFmJGyZhamWbEcVbqaRMK6xc8CpAGLXew1VA46YqqiNm2BXfV9bvYdQn9nSKQReGnuwbwLJKCCKwe",
  "key7": "5HDLn2jF4mau5WZeq1W62bzNY63cEZK5aUsoZWnxm9CTLnxJNG7fTkb5eMMnw7UC52n8QBu9N8cQbAXuXf4iHVWz",
  "key8": "4LyYRxRDTQ1f9qZgdSusWZgjKeXQdGgLcpzzrm88EvPvGs9ewaKZB4D89MQmYFi8Um26JA1GBMrUzz2N5QMB2PGr",
  "key9": "ddGV72qN12bkBogNMYW8HtDSAUz9L4fH4o7o8RKdWYRGPHbaqQkf3qEenySPQ58snKB5QNZVFdiMsm5bCzCjALF",
  "key10": "2da2Up1MM6oPBNrrU84MNnC5sSCyFHNmuNJJ52FWkMieRQHP9SYyJH3dmjJyvcYSyYvd7WM1mDsncQY72ogSuCVU",
  "key11": "5eKv5rA7fW1Jp6VFpzCSYAP5pQURjojq8V2u9Mjx1RUVaXHkCRGGmvPGeymqsU6oFZyNNktqxAxi8MmSRxgHVBkq",
  "key12": "61QZ7g2jxt51EucypbpCsezgD7vpFGL1DKEjMh9o9aJA58bXSdGYomCzd72Rx4HRAvY4F4BoeiALQJUC5XHQh8HG",
  "key13": "o6LQqGNTGTJYsc9pN8HW8dfqLm1c7chDdtuqBi1GP7cPbFR6xRvQ2DWJFyKLSQRJc8EbX7KoDpHBbo1oc8j37Er",
  "key14": "JyN2A8mCJrbB763GWAy1zsrfDQAuXgjY45J5KTRvyirW3RjhUsXmpAJ9fMZQRGqvTLVorUfzYq5rD1T5VTnNZvk",
  "key15": "5DXsVmHyC7HyGY1uai8oz69UddTekV23SxfPZ1xN7WUaerTvRx1a8tcnCmVJggwCiwwoL9StUUcdHu3UHuDUpSKN",
  "key16": "4NrR6KiHsRRLuiNkxNhgY5P9Sb1tgNZ3cvMqfEktpYFU182Cd1zZvNep4x6xk8zTXJi6gDBMhB4TzqpVSnu8yXRg",
  "key17": "5kxxy56WpbqqgwQup9adMdRtR1Td63B8DVg4uoYkasvR2HHFudyqjiD4LwyFKXvvieD6tfVjK4TzVtP5Cn7phtYg",
  "key18": "5iA8cESQXXj8TQ5xvahQcTPR5npzx73XePeccSzdCbsnw5p7sb5auY9NTwUfC2X9BoTVHvYjKDtMTmn5zmwsp7zc",
  "key19": "1DSz7cwQ61LVXdKAMQP4g11gntGYUYYQZUoqEsBqBW5xQ54ebzvE4JWgbAbEDkH7pNnQgo7PaM4tvN62Dkdz2A4",
  "key20": "33r2eRpQoLzYpPsmrFPxr8624gVsUxQtUy77qePKfFtbWTBRgeh8a97eJNHY7oWYCvwC6fHN2Z9X6qWBZM4YXWYv",
  "key21": "2a7dGMfqv3boFR3fT6RsnkDr6oKvz7wwBQQ8fsQS5wo14739BjS7fvn1DEyXd52c9KqHQk8NBYfmfCrvWSuSKWkd",
  "key22": "WvdJjuwXoHrrJifxgHEmn3ny4bNFE2XXKCz2PrMFi3SQFB2LfDKReGRGkgWVFFnxfJmHRERNFmGfTGL7RzGwJ9L",
  "key23": "n421jTfUzKLSBJK5bHABFqYvmoeKX6JdbeaQ6SPWJYg3qox3rVR3gDLxSjaLKm8yr9PJE4KVp7eXcfdaQ8GJoKe",
  "key24": "2mA9jCwYuZNFvC57hVKQgpFRFMFVBJSzy3xY9HegZahv9fhPPYtQnpuSxa8P1aNxnKAqMeQNBdc3GCxRvYSCHiod",
  "key25": "5jczAb5xyitEtd3fWyxEDKtSj514d3hsCFa5br9NxNob7ijpu3MWaLD6tJP3KCmzuhXv3Th2jfvEHzxm2FBynxLN"
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
