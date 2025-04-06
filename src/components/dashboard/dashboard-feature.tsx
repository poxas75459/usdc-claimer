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
    "3PjrFMCDsHGqrmCH4t6epgokYgjkhUZGa7yfKogvAHztsVjff4GRqfz9qovcGn8rZ2AkDPpMBiGGDz6aHKbmCekb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yuHgWdX5LXjXNzLPkC8XzaX485PVwpMWb5KvYWdpu99kfdt8vdovJdcc26dVPJc3H6GxGcisaPzJXamWRZTQi9",
  "key1": "8TMypZiWSr5UWfsgC1k5CwHUByCjxLLQuGEYqe7CwfYtMvacR7hvXgfUUxUaQHq8HjBQQPtkNdKDAEGeGEZB6ec",
  "key2": "2kpnEpXN8xCjnbhQKhPN2N3A7132G1Zdj9a1s3hXb7y7JFS4EJJ6fo7tgh1HK7e2x5BpWRfTo1AbnShRamPfR6Mp",
  "key3": "2xha99dcNrxJ6JUTkV2pqSDKwekt42vWygF15hiyQtnvRq3V2kwQKJ54kFpumCDB3Zqjg3HEtGzKfG3Cd6psn5r5",
  "key4": "64KHik4kUTLsgHxhneMgEHV9uTy2nCmZykGVqwHq2VdJ4EyHR1nbCCckok9jJ2yqQFzi2n48vEYWfuc2FdVe5eCR",
  "key5": "46XGP3GeUeN9LCtdzA4uU7nQe45WrAN7EMZUkmF5awwzSy5RySyq8V2J6Y5yusFafiopMrKNiQUj3gzCY7dAWezv",
  "key6": "5ixzp4KuN8cjHcw9v9ZHr8MJD71G4Ecb7Fx6bBxdUB8dD2CDUA26Qpd2YkrfFe5aQPMbLHYZDQW5nM64rhSmVoXJ",
  "key7": "2ci4MWLacbA4EkBaLKTChfWLygK3mb5G6Vn75quFW9Zv28jAexVuKTmJRDewRgyGKdjNKf1pGEwhxjQMvtcGhXFy",
  "key8": "3HzN4RNYX6zBTkP9EgjBt3GbR1cf8aDvLAqPgmG587Z1fY9GoeSFcwgRpgcxgxTJEPepgZSRd2j955M8uVsGzWBk",
  "key9": "24kRsVgCpLK2z2xqTX5cEfQwRGDx5a7Y4qAycXnSwMyU5qHk5bLQCDnxSsQ8iUG1yH2uDQinjsPT1wzRzj1FmAnt",
  "key10": "B8S9CPpUGKMe9m3GD3SFyz1d5uxHkS8pSiEA1e7rhUun4EDbVcEdv7EXazPv9qNsDkM6qAuRpUY9anoeFCxDpkp",
  "key11": "28JuWpjhK4xfbY6RwfMAKTUQqdciprHm7hiwH1zCzzjAuEwJ97zU1sAxMcWfCZpCMs1jV2qTiD24TxToEwihX3WH",
  "key12": "5isC6SE5Um8Qbh3naMknemTrZzthEzwbDiD5aAtrmAqJiEvb6ff9SUTGnqfGR5Q6JsKDeofMZxPZxjYsz8FV7uJB",
  "key13": "4d1Wk44oQKDt5K14nYvJ4gfhKDhq5mMBUXNKCSZajior2NVAYBvRSC4XrALd4N9eCQcx3GPJz9Kk6qwxuU6jRGhi",
  "key14": "639NRXppoyTh3N9pVon5sLACQR5u4MeG6y2BzCCqZmNRUXRkVzWvkRGJeXogvSbB2Cm2BdU5QmTji9gBhzS4E3HC",
  "key15": "2x62zTbGLn7UjRoC5uYmoP6t1qVccXHHfAnQdkkoHnFSzJgR5JWpcV1w342Nv4DjwUB2cgva2RSUUghLCckjEP7L",
  "key16": "4BGonYMJNTV3neinG1bJF3T5bD4WVQkTEK8AxHknEDW6cLm1tgVqnaZrM8uRyGWKuSAtV9QyE2ogC3bXbMi53SPb",
  "key17": "2NMc6EmmXDyQ75YtPAvS2PjCpESp5wg1aAgpp66ooni2pb7nzzydCq4sBjC34V7SQkfEirmEt2qKqYEgXCXCDcY7",
  "key18": "33TYwRMvAuxKopkuX1JwFhBqFSrik7G8BGw8YorM9yLHXV4QTsn4FydsYLsr8joUK7RoqyXi5WnvhJKQQdGY5GhS",
  "key19": "4otrhpUx6V5fek6K3fDXjwVyKuxLaAGFAYC8L8VoJ2ohrozUpvJL6qjAm5t2M3te7hmWrW5998ZrmSeDVg2CVkVk",
  "key20": "4Rm8nTqYAcTSE1RBezvNAmUGtGYEpZUicdFCHidm7DioQVgaN1vmTFoQh26vBDNFsWiEn5YLxhHDEjVhgNALGRdX",
  "key21": "2heE71eBVKawMH6cK5nhGZUj6YKRFAik6wt7Ncsa7PwQCX3Gm2Rd7GjC5jGnBMu4CsMk1g9t9AMZdc4KW4NwqJYJ",
  "key22": "4G9mNwyBqCCKysfYXEN5StjZmwKc4od8bcGsthVD4RTMcPaVKBBj2RNPu7ss4xzK7ZSePypDwys3ehE1Md3Ds2FM",
  "key23": "4hYVTiGWEaV5yJ3y7Y1USmE2z6B9qzqbrrTGhFxvx9b2RpbYnmbr75iHpCTLcLdrZPQvVgqRpxC6NQN3sYkNiHnc",
  "key24": "3WqigXKQ8WHM1QqQuX4dBAYP8wSyYKPqUjWhwZNP33bXW6YyYU1V3h8WBnjgTaB4WezNyafecubdDaYz6EdwMotf",
  "key25": "2fuMdwNmi7vuQdZnDuN6jpRUjp3oTHTT6sjCwfFGSsMVahGJmarKAoigtqtNMq4NidyU7Bth8zYYhsisQuvc29GR"
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
