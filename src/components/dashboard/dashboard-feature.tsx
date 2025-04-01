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
    "V1jjbYZN7MEfKDkwa1ifHaYoFG9ZvKpCZxSwM3LrnuLDjaRFQgpMdp6Zr4R3LaLC2JoqRjiAq66aGXPjgcXjqp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hor8uhfxxti915Teqc5wGF5GPQ6AfwNwqah48SE3mW18pQP8aXgiwMYpcc7vbmGKi1ZnCr18eR6JAca6aKo8wK1",
  "key1": "2ZvWh9ynQ7JKNXaAHMUL3Lf7nTrzxeQFZxQ9MiBSAF6M8H5thWKjeHQTPUXRAjta53iejti6UxJEzEifYsFrFZ6f",
  "key2": "4Sd4j4rdNy39HujT1bPTpiuFzfdZ4LHzo6WqXV8ix6QksazBkNM6qhQuzSfJumktRep9Dawm53LJaZeeuN3Qic6Z",
  "key3": "65PPzEFLBQdsU7ZDHQxnhMckGecZybKgFjMiajdJRRgo9kjozgzkp4tTomChSrrhgb5BkHr6Asm8oP9kWmedt3BC",
  "key4": "NWLfpujCqih1chxAv9oVqvEYcmarzzE8ymcSqyaw7TmChGJZaB6ED5avxcFzKG98Fja6KFCzcHdeBK7D5g7hJ8Y",
  "key5": "qccq7hUhNS299zmbps8hR69ZejrSjpGekhttRKP5aZJVngFUP33EGfehcu2cpmsEyHtaW7EcwsKSFCz2XLuN8yz",
  "key6": "3hsqnBPvYuSNjWDXK6WyH22LpP5b1njdocZWeYX9pqu3sKraXU8yncEtqAEc7BnvDPWqAGokA5nXGmg8ShZdwgsk",
  "key7": "5Yd1wjFwDmr2VdH1q9rmy4je6zaSyFoL28ZS9sqi16Te9nstf3wx5czFYDZ2PkwjZe8zyfDwqCUSq3mV5V2Ap6Fr",
  "key8": "5whLZpvenpaCaRQhMhn4PJLna1jbKD4BFWSwPYhFBy3ZXQDhx9CDkEy8Shv4xZ8Yn6kAMnXQuzvhUqpKwJwdi98r",
  "key9": "2voPuLKmQcfssPcvrm4KtcKWmSi2Fi2oaP7uvqhmBySKtR5JJi4YtrdiZshcSSpvP2jvd7EyxfFFbn5pvTTwTZo",
  "key10": "pi1febhUsrJHr7xFP79Paw9gLejsU1GbFhKvnCnGsddFEqBxx1ZRJf3GF7Ryw28q7FJTFqmrLZ4KNf8bHC3uztp",
  "key11": "33MyxFZb3uqQ9iJM6tNwm7mUEJdjaG9kDDFzhPSfR1SZNdD9r1fDtUy3kmeZsZF59WCy1aKHVGLwpHLyGD4Bp215",
  "key12": "2FVbk7M4PavJZ3EvxiRS9z5jEFx4rV8CgZe6JVxo3m7hmxfC6AAuPp8pHrc4VeTLdENpJd78gJrzuGtymA6jKZWJ",
  "key13": "4zYkn6WQDt3uZ3GSZcViBiv8QULPCuJAxcAT9CArMoungM6iWgX4XzJYoJSs8yK8NzFuBsuT32v7kdR2YjL88dzx",
  "key14": "JJXFzKWTrrNLzVge8e6JrUdrxperEb6MnisBFYRJ4tez5NqLTjL5uiYPfkFKHCgbvjvdGT2UQjnqugMasmt2Ssc",
  "key15": "4JtgkmNHsCMJEkagwbYfgGN8LVXDDKNYR7pHzZu8mB1P6Ut8npa1Cak1CVQrrKZQCZWKLcQtbT2JeYzwYNJ8k4TV",
  "key16": "5oLCk1GMJXcR8KDxCZxV1NraXdBBgUNkk3CohPzpKEnpiKe2RktAA4Q1Eh27x5bmpGbhdGZBny2DC6eakz2sDCRg",
  "key17": "4YpKwQYmx5VZswEctBuzBpNZYmhjtYfRjDArYLFrW6mrw8nsxAUrjeFx1i6UuKnbCPKVy4GeeYqMAxxwiDWJJ3nw",
  "key18": "k8QJZXVDUgUan5EUDw9VSzgKAVFcprrP1N5BC4vwwLzNyzBKnvJpQaiVuBhXbY7TJZfj71GCHVcdvYQRyGGm7sE",
  "key19": "4S7DFeP6QMzyPzw31wafQ8wvhLgxmWamj3YCuLU7jRsiXH6wbbdomnDy2QLgCxAQQ37LAPXkxv7KWmeBXDAwFPK6",
  "key20": "iMf77obnPg7RwaoiFP5TCbuvryF83gvAcudGYx8PdWSsxHVwnmiukHz2F7cCb2gHi2CU4s7fcjTznwsS7kkrFbj",
  "key21": "j1hKSbGg4W9DbsrXnEcU6TpmGDQZ5QM66sdUXiyvYnNob8H87CQyn731gUQ4vMzomoezQhsc418E4oyTwXwrzP2",
  "key22": "2kVCTagtg6DpngcfuxjxqavKPub194CGsEGoRBua8fU66QvMadebvgHHnWFUjFm6Py2Lrt2Wp2up3DmKeSbhJYEM",
  "key23": "Cmyx1WaQmHTHebeccgCu4P9brJAj6y42R89itEGNXHc3wgb8gHG1jfzz65gwGLsbiw4fM1HzeAXbr2svM81Ta5i",
  "key24": "3LwtkLSgYAGyK5QV8cNjvn1HAy72ZEgu154eDCGdasuMXymoiaGdoWgt15fubyMLVvF8AP72A9iFmnRA1Qj65xSi",
  "key25": "5DEKYnpPAUgTuup8hQ5JaDE7g9pQH2fJ9MCaAELJD3mVNvZNQm9nXqfvUDhUk5Dx1ArWCZyu776MsVsfizAhNLhP"
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
