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
    "5hjXwrWBhYqA5ZQtSpQacRp9hMvWUWZAfqTWrVUjouVcCPGp22vJjGsjQCrN6Mjt7ranoFHA5X5npjWDfRLnEujc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaTfX2vDc8Tvqufyi29nB6QyxKcRLA8usX9BoNx2sD8T87c54pWjcJDyVA3UqZY1bukyDxzcGidZFswVFW5JkPg",
  "key1": "H8WQJ7y9SAvuCT5fLCsdCcsEmouMQAyaveZzruf3abqYpQHPoYS7a8KUBgAWEH5bGQtZkHtvXKM6D8oU9vg8CcE",
  "key2": "xjxsqZPd3cPvQYztp5xrjJrmfDfuQQwJuo2pQjfvdxYYyj3Dnsk74R4ziVTbvbuVGGjRDNqzUjztfJQiMH1ifAn",
  "key3": "39RBD8Pj6hWz5SmzHEDbfc9jeGJCbna9iWPDuEtEdUu3KXooB4wjJPDfYrKyEDcDyKD7XJAb8Jsqo8Wn3PntwpMU",
  "key4": "5VHuhPNZXwxVjHTzBVSmyS7mGoDjknTS7VdkYBX6om7YT43WNgFq2ASYc4arUAGZEZ7Rj1SsYMALzppe48bT4oj7",
  "key5": "33RUtG9tmiHrSq83ofHcjqa6Ybn7uhgPC5uEDDYD4eh1EfkSaKKtccAAgLUbfQAdrgFmw8EqrUZ6uW5KAdcgeP8g",
  "key6": "4kPcvXNuTi9fHK7NLctR1CqLCkpcEvQVUwdLmQ9bUeuED6ZxZJaje8Sb2gdV42ZRy9b8wpoqNBeFoutVv7oCxMtu",
  "key7": "Vv838xPX1Jk7ipB5Xq9UR5WmcgzBh8j9ZY9ka5e9jhYTwXmjS9ebkPDmi3msnCUPZf35ofU8VmeF3hMUdCvPocz",
  "key8": "49NHwCAS2gc5Mtz37x2qGmPg1T4FfKAFqqs7DZZ4va7ZS8Wb7JGMYsc1DngZy3mjzbMrAXGULpCyhj8MrgqwbzYq",
  "key9": "4iwSoMbecUf94cgbiyFfvzW2RZD4L42vb7ATWBZMRPjj5bwbfd7m9bjApgRADNYKGp8sQqVj7L1tpUH8agJswwHB",
  "key10": "4ZcyLZJ95P2GFDqdU7LQcAsiWPYQ8DMjBhFXeZLxMEGTKmLZWStRz4ZgVnSSguddt3puMGN6UPNRQSubYtFhMPKJ",
  "key11": "2BhqvN5v8mHkvUj4YEa7TXH2oM88DcVF72v3syRJYYrPyTuTT6uoe9XYhyf1qEkQjq2XByt7wg7pfxNHE8f3G37F",
  "key12": "4DqQ2zj3Vdiqza8xgDZn9igNonxWGUPZCa8YKUJHojrFuHmAi5RVu2StF6twZyEW5aYCxLbpg6Z7YUUpXis2DVvi",
  "key13": "GcyTFf4kuVaKQYkLXVtrSFPyioY5eLkrMfmrtaQRtJKdT9cSa66X6uBQKFbEXADL7xLwjbcLVQ1rTPDXmpdG51P",
  "key14": "pqkPVHGJVefdReh4Y3EbozehfGHBX81Xa7w7nVUEHps6pi97jVZ95tMkeydENWGbDA48gdGLwdJNWQMVCeyrFko",
  "key15": "4NxVaUXNWLTPAmbfeusbVRJhsecXLbd9N18FDcGoYyUZ8kmbPfrau9hU5SvR19aeBBy2JYyb4P5GoWy885jZAeL7",
  "key16": "61eghKz2pCraHCWd2NDLQEqM7eKoFKHEyGGsb6hwGj79bDUBt3h46qurcBXiUStgYmSeja7Q8S61GBM5eT2QQwTM",
  "key17": "5cr44DwxX1s8uHjnh1bXAVezzQHZ8GDRmvvfV9vPPDM7TrQ5wfXp2o9f2T3DcwQ6EGpu36utb7wJZBqM2Jn48Uwm",
  "key18": "24adKB4WhctrYCUPmTFmLurCFnFwUFxpc1WEPq5FD5QMgEqfHL8QSbCxKXZsN4Am4g3BDFWf7Red5R45gAMUsY9y",
  "key19": "V5hYtVWiKuGRazoHQBiS721ATuxwZZMs8nxbGTTnn7yp9ZCeSTZQjjS2jz1Q8xn3kVbxBM1TgxzXL91q6G9Jd8b",
  "key20": "UcUfBLHVppxWQsm4K2PtRxhUAc8d9xeqjk4YFsRYXwALTeyFnq8L6WP41W1odDujGEvEKtqFHcaDM6n7nHxax9r",
  "key21": "WEWvDJyzaM16VZYyt84aj52EpMN891SRixwYysHtYgqo8gHeeiCm1iCFFUbnEHTCxWN2DKTBnGVvCEdBnsRnhFk",
  "key22": "4ERTwdzixiLbQfaWnPS9nirozxzWVv1KSBveUx5AgfKXKTua7jH28ZiadNuG1wyy8chWaEDytiNfWNSwKB8MYYyQ",
  "key23": "23oVoJoe3dRaoSVm2RTj3c6uGoXXJpK9xeLpqV1a4b32FJE85uTBMioFrsBYATu5Ee3vreyUKcghXkUMKWEFFX1p",
  "key24": "4VBD5eYqPB6UcTdtUD8ocipUjEDok7bQMKzHo4p9w4rhtXqMLXURJTvRFnwTjhW8u67RatrhXSrhQhRasfk5GWGo",
  "key25": "2gGxUrFfZ28WCgXLKZ7UJtyHyrhDzmBe137sg4Xo4Y2bPGjpvP2z3QLnQi6CqtMMPSG4u19xmVrPfEjq9Yg4uK2P",
  "key26": "cJzNmagPv852zpbTLMavJDAwhossyrrsae5VdijE9N143Ja2t2f5YaLv8oTU3wmBstixGX55FsitkYf7VoqpsgW",
  "key27": "32b1TsLeSNNiox7i9Lo5abYU98RWjJfZAZ5Xjp4LxfYnz5jvueBytL5pyVoJ89pqBLs5pppefUy6MRMPxsyKAXD8",
  "key28": "3UekfuQwbZ7CtZGZdP8Gw3nh3wmsvCpfFjeP29d6NMtTteGLxfNxK38kSmT7xseivJQJRqN4tZAvmTTqZq7MPBRs",
  "key29": "2vXBsBS9HFTdKjckCEP9MrnrL7avHcvYgJHnE2xsFsZHsSgzpK1wM8KnGqqEM97wYSgV3Y56y3LrNAZHic1YmTTH"
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
