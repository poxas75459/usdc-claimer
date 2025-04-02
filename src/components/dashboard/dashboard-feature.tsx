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
    "2ofsLXDQn6yC4u9Nrvjav4JRZZcae1UmxJNRMaCB8BJy7hrGs4TuD5ZdLAKv4DmaVPRpBpQDyqFS1qQNzGXXjRXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nyPBQv7Uh8wBDZEbQV5JbXb1FBtpRA8q2hwKUEQVy29AmB6THBYJyDC26xL5AuYvWZSQFnWzTjHN73MxT2sPsn6",
  "key1": "39pLQ3oZ1VY87LkUnRSv33Sbj9dQFA1meTxVGThk3chdhCN7uLm31PEYcRPxZrMiY7BBSfTqCHPc5EGkgzFFVjaN",
  "key2": "P79LgSTA1Q78Ae9VqoP9PJhLgdTFeiqaZ4oFWyufP16iwH15zu9FgkQGeVeRypTUoJYGWoGM94wDocQAB5HsfKe",
  "key3": "51PsW43FPHoEhsptzYL95WXc3CEHosynSdYg28WRKBexpM7a5njUH8KC4pU8S6YkzoXG2ZxZFAHxqD5VrfYwzvMd",
  "key4": "5T843cUpyn5VjTMVKA9ymceLJmaaftLK6NEMysyM1bmdhaysFpvpyfkUfqP84cvFGEKwBG1rdfuoNJBjduSHqv8U",
  "key5": "2jnJmgg76DeiA4w7HYuGS6mw1Vn1FGYKMuzxrWh7f2hF996dHwsexmGAogmLxX1yzjR3qFtMT5Ko6EurzeroRhzN",
  "key6": "27UW2y3xKt7bn4R3hyWTFVnPPSNyKjYdHgr4iN4jht1aEoSmtBUWAgDSWaTTpo4tEhcoQGfxyYA7PGN8HxdW1qLp",
  "key7": "5ATcBHmoi38Hrwh5ddM1YQwpdfQJL6HKXc7H9VjKj2UH8EhxDdTyJG6hdq2N4ZgSP6GU1N9EtFw5oBwHZWq4Zd8p",
  "key8": "5CHnuJcLh553Goi9o9KREvwrejrAMqwUbtBgca3GRhtnqeMRQTobwSSFGKGKehWCeVam7fTrspQDZ49BFt1KnWyv",
  "key9": "5RRhnmMEcbSKGhy8m9QE6voCwBpSp2Qk2CmB26L1X2sZewzhyXPXbigbzRk36SwZQxk8KvU3NLLwkzjQ2dqH9DSL",
  "key10": "2eXkFn4cscG2JvuF14H6b8TCY6mEepyjgo5hoKnFkN8kXeEJxn28kJys3SurQaLSj4GgM5czjjQKBLozRtd4xwrq",
  "key11": "221ngGTPzu5MACiNwC7ryT4SQBVhyBeNNyeRmvwpecwFNpQZymA6EnSmq8LmJYzhuSKY4mqAwP5s1HCx2nbBNavX",
  "key12": "4fDv8WcDyuipWA4TGiRnpurNy9LhZDvmb4YTzY3RQ4D7hSfPjNsZDqGnaYByLgvinCYKV39pdyHo3UmSLoD7nLo1",
  "key13": "5EhjzdMzsRjKE6L4JNigKLnCeFoKtPWPuFr4ZStSeTfEsifQLBbaSixjfUSQLnRJrUejg85bseD3e2iFCwSry9Dv",
  "key14": "5aAgxRjgyGzDkxbWwzd7FxH9GHxCsAd44Sb74fWPntNGAzftojR2qm441ywjrHgb184RYqY9imzZXXout9WmixGg",
  "key15": "317Mv1yKbdw5YMxDSopVWUhwtjGMb8SUQYXEhWEEEKF3T5BP4GmMV1X9mjYHr4GQCpFZLmvoe7d4GC338SREbTe8",
  "key16": "62dqDxJzhNRwpsBiif6JBSYPKZ1Z8LzwESEbAHXpL8Xjm2DpzGwUD9TC4iuGFpbcrsbanGaGnXh4rCDejXwhcaUX",
  "key17": "5QYQ2VbxcaRKXF1wF9MAUZgzCScQRVy9tYDaHjN2Riksr3s1Z5SmoMBAY67jGKQRCcLNaWwoFQ6McEKVBknpcRWF",
  "key18": "QneQJfqCvj42PKKQPwiEMQAjsp1UFN9fCEeegcwuiGCqLLsmoas1wVcbaA8fhB1GbxCeTyaMpm1v2jAr43wEWse",
  "key19": "3kKX5MkFyTDuYiaSymczGGeXHLAyYKfdYNHj47nh7hE3w6SGTKVtodLuvGfbhNHKj2g4p5LeKKp5LqptiVgPS92D",
  "key20": "59CSibYA7Hu8GWwFB83wTsvnsuMaVduLnTWeurUYkEwwvAHvuhqz5LbRj4FPdUTfdaxV5yuzM4R8Ph5jtsLSWQoc",
  "key21": "5ovmM5D25bNf9Be9n52D1J5rSVhnUobdNpLkUDYaRk4DqUgZqe33hn7y6tAMmkiq1xms6Le7Q11HbVRuF8vVsMDQ",
  "key22": "4k2DtWTpJWGBY84asBzDMtrWcTL35YM9nxtPyG15ZBF8sV9WYyVBaz9ktVdrgWZbSDcB8zFCczHokEPvLHyxjJc7",
  "key23": "evLQSrHxESuHfCK19Vcn38vxgLpJ1euZUcMHgP1C5oDuamgLQe6Qm5oiqN4wV2wwYS2ab9ZwA4dX8K5wCKZsY44",
  "key24": "46uDAwDjrzUPeQMuvWrvqeZMFsPgD2MRcuxH3UpK1zecutthkCH9anLhMFEDJ7LEWZzDBNYuPRmydJzTwpJEHkEm",
  "key25": "2hioRU7aXn9AokNZJxs1JHSV1rqLRk7uQtx1GDc9dDn9ynwwHEJEmELUCGXBWTcEswBXAyovPeqCujUemk2ngQeN",
  "key26": "6765xHdhd7D7iFqtriWKLGEGiAQ84vSypp89RhjSPGZCvPF1U6wSALCWE5gM1WRsKvzQ8HpT5pZxmSmWuRAfH9PL",
  "key27": "2sAL6b8mtUez1VHw9Qgmr6r3AU1eXncjUgwrtActZ7pn8aPgssLXGXRqxts982M2ZSUqHzyV1NnrypXR182F3idn"
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
