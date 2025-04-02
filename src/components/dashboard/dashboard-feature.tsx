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
    "3tUoTkDMusdY2NEJFwbQT1Lfpq6jiaTVpJY4ywEcwpwvvUrYmzCgpSjDBrmNGPT2cfxAWkVSztQxyFpAGaQ6TPRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQUp3etskMcw6gaxsfDNYv5RxpmjZ8NHgS57dGEYAKmHfqFLEUbH56hNoZdkRh1kZX6joRcFFAQdZBDbnTjVaHm",
  "key1": "3oese5fhujYuBeG5vQcsstPXNaiqmDgdwnDndH5TGKhBuh6ZXX8Qt4Q6cpsMECw1NjNKTJjU6DXsQgo3VEFqRG3H",
  "key2": "4nbXkZzgX8pkK9Y9cnR73f21wtJj7zXj2YbPAn43FYtwiFwV5RA2rGS2N6KKNueqtaxfTregesxS1AMr9Zny5ekF",
  "key3": "443jdQTmGpLcpughFhURjiZTfVnjxyPbjDJ6v8A62krWBFvWKEDXZuZkygXLqd5dkScNax387HdieMMrx5RrGBDd",
  "key4": "36kikL2kRtTgDcaixT4ttW6yMP1QEMPbPbZx6brRLKD7Hi4dZ44TLJnJgeojLAjoTdVq8doBj3xa1he2Q1gi8XSx",
  "key5": "4tLNjgCW885TipeLzSTkQWkJB5QBDFy1SdLXSffRX35zG79y4UYezkzNb6p58nxAqLYPmpE8mnNwNDyC37cPrTYT",
  "key6": "2NcRUtcEtgoYjCQtKdZewkrryxgKWrWUmVseoXUFy5NgftgpsFb8xJXvikVCxCqYC7HLg4eKPnSoNEgK5YvWYW7W",
  "key7": "2u64TBDu7dkUGQWZubiycN7BnYHrUrW5JCiyrY63EtEP1ojth6LmUoHDW74g8epCE4kJ1SXSJP4SsMYf6WHQBndE",
  "key8": "3R6LhfkPtfSRc88u6bPGSUBPGcACE6Tj1m2QsL4Fo5FaD3aDna5WT4vnP8isFWNtoQe7eYU2WoqGi3GJuZamspYM",
  "key9": "2i5sGDj64kuoG4UiWWYt46AGaNRFCY2tXtTp6fxxnYV2UEeTieKp7bungjdTBYyGKwcTXarQFssotP1x3GvC2jpq",
  "key10": "eFc3rCq8e47LfzY4rSh9uV3Fxvm6k7PHAmYtntXT7qmcZitLqskcW2SQKD3CS4KHFhosXxbgppWtcK9MaHSpeeC",
  "key11": "zwxAmZmKHttxVPHuWmS3aWsg5r1R7iRmbhzcbkvdN29hQ2Ja7kcwbiDRSGzeHGeWV156WwdpBBnn33Q7hVVaxJh",
  "key12": "4XpVcpuBFgXDM4SZigTFS5jTazeXdyJ7ZurW7qXyuEWmJW5pweQkQepbQpMrVr1v1ffpVWc3Sg9YaWbMLVNnKTeq",
  "key13": "Q1aSuVoKP3QDyiLVcEHVqZsxWHH1PkfkwjPptow18TBXK7Kvkad9CMST9inCH9sRMQpDLxeZ21MmXukFE3xKKW3",
  "key14": "3PPchcrPdRaYkP4Enmhrtnq4usnwFpT2X5xdFW4sTcbiUxJa8pWG3FmaVfh2kr3orhPX6PvUQ6eoDAkBQTojKTwb",
  "key15": "aKXH5ymGmGtdQPairKE7q5k8DNbU2AiDK3JTBEDF98vSTocuEfQQatZTmt1bjT6H2EiatGgLphXcbgctop1cQMZ",
  "key16": "2uJNqZVPnMB8VadJKoA2zN1xWsmBWb4h41zYWTQJudkZ9mcLW4VJMPRR3PAToPRpnexW5STYcveGjG6ag9r9hA1j",
  "key17": "5uw9QZ94gRs9kumh5Bzey4ejWowPcY63QJ8qbhzwJsi4JbrqhG5R77dSHZ5iwhWUKeVL8xzE5yCkwzZ4cy7C5CCf",
  "key18": "2UJVcAjNA4SgxHA5SpAHygcMiN3J4pA9gkmh4T5MExz8md6bPMcoTMLgaGxs1P5CWhSMKU2zDXbcG9zMRjUJAZjk",
  "key19": "5Q64RrtPzoJqYJDiGNeCXNgvvx55GnVkDmJ7XSQBvKEuA1sMhWRbqfSgUgV4WYQ8dQaTivaYesrapta23H6fYdFi",
  "key20": "3rMMQDJ9fYi4bC97TU3oKNgFzMXe6zUwHjeAtUQJFGWkuneW8ZLkve7pRMP77zokQLq267H3jowAAvo4sMm5XntN",
  "key21": "5JWxF87sN5pmhwLUjHdgPb2QPWpKApFTniRbTUTeDgxSUh1eAT1VrDthfye8BBxSYHgEkTQVyq1nPZKA8PH9Y5WQ",
  "key22": "57x4rUZrHzTx6gmRYdMEkHiobvaz9U9JeeqnTLbfmsJXPWg9Qw8vJ9c6W1YLqvd9pg2JQQvhhhXPv8Y8ygQ3Hid7",
  "key23": "2mU1mFjhqTWpT3HURLjsyn7zoWys2e2qc1NbW5YL578okJMqHyrPaZ11s3n42XijUYdwgSpSxfCY758jy2iVWtaz",
  "key24": "3TPd3W3P6kPb97N5tfFwi6QNExjYRWU33ZjaBma6Efkp3EzezWNBWxtD64bxstoHSMKZB7a9ZdnqbfKy4kkon1go",
  "key25": "2ZDoTvLGNKdaSpNxJxUEDbQ4MCmxz2rcckJJ7uAo481h8oqSphGmibvJdrAjZiTasHkjKqexgRAHE3fudfEDS21D"
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
