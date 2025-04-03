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
    "2JN6xiYNh9FD2LTicbS1c5Wbvet65rkkN2MV6zJZwLsknCbKK1JXikYxA8Y7EvaW59QW7ywTEhGgQDrXBLM47MLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2872ydUPuVRp4Fi5QGNnrxvs8N48Lh22t2Y2dtcN9sDLBpSNxwvi8u8TSAjArB854AHEvnmmEYd194xvWsWvtH2W",
  "key1": "3osmudW7VZbeKSZ8iSd68AgxAptddP5WwwHMtinrVL37RykGdX8VtVHquvquhyNFsWxvuYE1xqEYE5oTCJnt9qwB",
  "key2": "358kBTKyaYDG7vnWRD3N7oHKocGYWFoUL5PviPTSAZ7MjuwzwSyjThfRF8HPa92hrDkpmp4BG3LhRUV8dbmeQLrp",
  "key3": "2h4cjuHZfnnFNBFd2fHXnduckRK21qPxrCjNfERsteNrcuY99TxFJvtGcDjEQxmKiPLAkZUx63KzMPPYMuBBbTLB",
  "key4": "2NDeunkuuCpgJxNVcgZhRiTSY1XM5rnjxaffVK7Wpj6z2553fd3u2NX98SjsojPpPqBDNdabh27sKd536DJyYrud",
  "key5": "5LNZ9959VxxPhoVzXRz2gMJvSmZKnb2pzsopbBnH1Z7SFQG1km4dfmndnLEMtsaBZN8iFTksRsKZFBv7RN9KNVyf",
  "key6": "5xKQrrxDdxpSdLtF3jkQvW9xmsQQuuvMHay8yx5hXiDdm84ecVnigQqZ2hJChYHvXKQa8ShHfLppq9RVL1vRXr6E",
  "key7": "3MxzBTtL3K85K6Rmm9rbQWtp7Q1C9PEpa7FxD6r3znY66LLjyn8GLDaQbsyabUHYrsarZku276aN1Q5tZtSAo1ox",
  "key8": "5atZtNGNwS2ebii79Fk29eX8yT5hidN7rMgiYJLZZiHewk3fAkVrmTiV8NcDuFiLzuJ46tSMqMQBVTwMVvfnpBUZ",
  "key9": "2EqjSDN5P8YEfkP1UCfb4eRsFTRpiHnwrivDZqhxd9itUJKLWM7g7WEiK472NpVd4AWHPUJSNhf8LkEQ9jDmWhCu",
  "key10": "5brJ9hb29xHETgv4tP3KjgWZHz5XYDMufFfLLGaYLJNNb61Kbn3ySLDnBVhA7r6t5bmVJsPQkBW7s2kX9iaxGQho",
  "key11": "FNH3vx62cYQxR2pSzUdpzwVVB6J547fP7EdxKA8Np1e7LdLS89AWWymBf4i26CnSkVaqWPB5qZ4Km57rvEbdXWA",
  "key12": "2ma9EvFFZJPnZ2NAnw1hSxQryTC7vfQSrMpvaq7HVVU2iTfxETBgDBSoPYMPn3QN6jtJvJEx5qyGNDsRJwRcWEcN",
  "key13": "aAuBow3iwW4zsvDwcnktnAUTLedQukPfbaiNA1SayHBzGXTnn7wPJHyBfjE1MEbXATPZPcqLkXRn5YkRPgHNXtC",
  "key14": "2Kyt4SGmsZRBvhWGnhh646WGuyFsbTQcxSCTRvG1ExNBQoNjqDBYwJpxt9WGBhqZghnrtsuYmRKVKzL2xUgyQhmf",
  "key15": "K48MfCHck8K9asmXs3aaXDbeQ7Wu43Mhvjk2pkFGKz1wKy1BMPH8cvS6GF9T1fKFNhbhyYyF2nvsYWyhLZkGaa6",
  "key16": "5uVG3KGnWxxh7BqNCbvSYREd2ioqhoiy7HDJemBcUMqennaV6KyLYYA9LxyHokyEUNWid6YSmeA5o2dafonBfHo9",
  "key17": "cBiGsmNUAAZiLkpFN8yDUMfPYU18J8HKmodRjVoEPWMYBfNJp9dRkBuhLw4r3e8DhcRswq5uvZWDLCKs5hKJbNJ",
  "key18": "e4V9mdG6JYaJu86dyyV4fP4qi3uDvxyRJcjBs2sPE2hb9Ws7vf7Ubf8i5LgPy16JDaGokPuCe7WUdJQDcEXvmJT",
  "key19": "2VjYTVUTr1Nis272YZsSvki1Qh7tLii8gd7SydLBHp57sWCKNDrPHqRT7TmHqy5SnXCWf9G1uSj9LAaqjnsFDb9z",
  "key20": "3jgUXyi43yQ5tCsWbA4PEELuhpvn8au6QMKx3FpqvuCDynfYHrAyAfrH4QAZenqdK7V81Wq6RuYTuXjkiwHrCK17",
  "key21": "4S8iFPo442eDAJcMFKVRJW33a2ZegpgXX3yjh7cYLKucKrJnEZJPRvauKj1iWRFRZW8EJp96YN4owwVdtuTM8Snr",
  "key22": "5or5P5dNGhu48PhS8WZR951hmN3ySA7AocjVhabomHNZPUnH6PrUAxFutTKuFqB6GSX9x6hR44mPKuLYMQya3y7i",
  "key23": "4scte8aGzCCs2e1nRfQsyfAeHxaK6bLp6sVqC7G8Gfmh3gjRrPH5TY1YDKQoWrrVYuJknmoTsnrppouZ9FqGLK4c",
  "key24": "2N3pN4czK4cSkuuEUpC4uU9KyycevMkgidyzHsVex1TFYu7PQEBoMqB4gqcYBK2K1G8rmW7jQsk7WShpu8NUZuoZ",
  "key25": "3KxUucVGhLc3TqnSLbWAj5E81wg1Jj2dZmdKBfGQdHDgdCcSKa5KJAMtQpWbMujPsXzdVC7vm22fz4DUztMnH1La",
  "key26": "P8TEorfYkrTLNGcwNejSR2KEajuR9EvNpXYemMN4ExQidGLGRx8zdc6WoCP8TnNk13Pxpd6ss4MLc7us2N2SyQD",
  "key27": "4J6MeGifMiWbUaPGhZpD2M5eAMPGv1Yb8vYLtMN189Avqrkhz92LhpXXvMuq6Fdx6vsEYaGUGP2KbT8UkJ3KW3S3",
  "key28": "5h55t96LB3RmpaG2SBxTkRiKaDGnh6TSQaYqrRHfrn8K9vdzR74y9ZrNFw2mkcXyipch1bUANvj9GeNvD2tVXXXu",
  "key29": "46GyCzErrvvkqNq3ncVoZ97gGsfKB5M92VdB8jutHSUJwEVQqTDnqnt4JMSXGU5NSq1YeXny1ZrkVvJN6JRzNYoc",
  "key30": "64fztCYetew1EdYcDg6dqft5SPwVxJaTU1wRxTs3A2cC9T2QtssShUab5VZBL5DUQ5GkroXnSw5zkxYgnC5cRtek",
  "key31": "2XydX2LHpzsYTPmkSRny73TfHbBqfvMWHykzaKjaXTuagMLr6cUSRCbf3TYjhfmZmoaZkvUKm6XxuvwNEMyykS1C",
  "key32": "3BzvDBfw4DWZtaCA72LeN8oLoWmiHfgbo1N8SumvBVD9BkQ5xuLj2KkuKHgrs3syNnaHCuWwPVbMP86gm5VbLR77"
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
