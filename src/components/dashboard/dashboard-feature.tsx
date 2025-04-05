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
    "jR6PubPRjU4PQwPPwECxg3YuK8sam7dLwxxuA1CYPn4Rc2WZuaQ1xvpVaxRrbh7rNbcK3x5mP5eCx742qeaVvUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eDdVHeXbX8cogjvrXoUgo9QGw5knKKtyaa7BFUkK9od8NHeCZAzJCqgzRv1uyyG9jU9HE8GSMNBnuXJyXZTMppT",
  "key1": "4YuL3PUSu6kEFzoJ5QEXYFwViYvtJQBVTKoamkEhj3puogcGRxq1HEep9kHX4o54zc8M42s3TWCr59ZvtTHh9ZZD",
  "key2": "2QUvkgX5KPkoEXkYYYk4FpBiKh8aQUNf5WJXTFs7zLv1r7uZ7moHk5BRprjCxpivKcdGYWwRQfVPKFR5dFeBQCfq",
  "key3": "3d8kuZij8fhqiV9RG5tVHm39xDB7rxHxZtVVgQZsSa95JaVmBHSQTH8jhzTyV3KdHn2W4aas27y2x7PbUtnaKD2Q",
  "key4": "efhnUEMk2ZtB3ARzAmDR6cDR4V1TwFoe9pcVvqCmCkRS39y2wg5PbBv3AooM1zKE5Fds6UfVNioRFRW8VB6DNwE",
  "key5": "5yfXZfmRuqipPysQdB81DsQfMKnwWq8NYhBQhokHZgkP5ghQVPLKPL4ueBd64YX7FTMNzNE8soFWXBPTkJeEMJSf",
  "key6": "FNDT6t8a8jGtQfVdg2p8qqKVsXQfUMvvwRF7YZduc6GaeWPRM3qBU7aJKswkSdFMkotFMKxue8ME5YN5ndpCvQv",
  "key7": "3Jo7SRMTQwfWWbN1GkFQWfhvEjsSCpUaMiv7tvB843ptwJLNmpSGX9Kdk6ot9RtSqBbsx7S1A8Mf2pMSE4m1Qw3b",
  "key8": "54NCXcj9fPZVMYmqtU4BktSvieoW4jhurxrdUx1YAAKcGZS6RZA7HWaAsp1J8n7fevwwr9XsmH2sssaYkEx8WFP5",
  "key9": "63ixXvvaTkTUo8EeyE69VN5psSyZVWarmPAxfdj2arYiPTZLaHoqjq3s1JZ6soCyCLoVtpijRMLqJNPBr9Q8CpSo",
  "key10": "4xf5aQpxWrCkyxCTat7UN2NugrmyM6u32JfYuHU16N8AoVd2ogDLWajQ4UxgN48onkGmWU2CiuJCciPVQcvqJGcJ",
  "key11": "3kLdqSb9DpaNC9xt1ZBe9ft7hj1AmeMNrKUwuqwQpsFBCJuCuj6C2FLrUeSZQTY6PHM8TrqkyK4X5SB2t3MnqSNh",
  "key12": "3MyuNipeWGvCJYEuARzU437BMkHJeSNnmKQHJc5bfyft1fXiinSa1qLhrjiVd1HeGzoA4et6thZMrPdwCUeNxyfL",
  "key13": "44ihsa5mDBf51vA2RuwpfgM1azDAee9scWHuDkgCeJYa9nAGhTv5b9jhAKpfqzaikMuxEdPAdaEuGcooBeZXzZNr",
  "key14": "4UXfKmAoNheeHrK5Am1zVSrVspVozKXS756rEXC5DJYVS3G8aDFUMdzrGRYHdtWVbofh8nzE1RaPAMxGbsayQ5Z",
  "key15": "2tXYfJC1wLnFfGddMM4HBdN1GbemNuRXn8EgqwwgNdq9uaYULeCyd2RfK1diEv27Yv6QfEGk91uRDH4K316NMn9M",
  "key16": "4dawjo87kvazRkQVuYBn3gKxfxuP3RMt7MTxZgNa3GVozYzGQJFLZT9YzKbDLbRsvFn221AYLZoarLtJ7wLjs8rE",
  "key17": "5jgPBhMFcNKuLibz4DHk7HVfZdyuBwo86VdDdJkMhofgX1CMmWSStSKUCCc79MZqns6vZ9unRgzgddiTcFNYAkoA",
  "key18": "5DqZQ6onnP6Qvt2XU3vKMdT7nBUK3p8scsnsEh9xp3oeFWZXo1A3Zz1uscbmwbhmbG3UxEunXqur3wirXajgoRPa",
  "key19": "4KXGEzq5WJQLFHj1W1bsdnjLPeaodgsUtYZ9zR4PmvM1BqNAyXgAxM8a6EMjPXMvVqUeNYW2qz9ugaTaJsCjpgXk",
  "key20": "38dgBY9brtUNNCnCYEeT1Cmx37YJGK5h6HPKGksTBK6CQjgCA2t11HR3mr1njMCtk5mE2BC69FCbAbjXYBAHV8ZZ",
  "key21": "4WGZ95LZQdUvmmY1hQpZdB2CWrsR2fFCkKL5nf714aFoXwdUYfB1XRzQxDWmNBvCoaYRwwNJEzweagj3ow6F1T3j",
  "key22": "5xgwwnCqbfHD2D9WWP8EFk1KVTyKLxBmw6tfB9GUgLoEajYghR5sQKf44WK89VHwagcoCssLUESzYQR7Ng9m2twc",
  "key23": "4wEdCD9E7VkhyzZc2Zzn4brcpqxobuL2a1KYj7mUcXi1rdgwnuznkzthVqPjUPgZxmCoD2wtagGmZow7Mz2PJ38J",
  "key24": "2L3Z6fdJJkosNjCeCgnUyEGqc2SrQo9bjhfwAucdQ5WXNL5R6BErDeD2UXTr4YDLGSSy1DzdGbsXNLhtMNbPKas4",
  "key25": "2LZoepcD8q7ZtTBEmLHAPjYRd4wypWHqKVUYyHdfUtuXWL8YCHS5rMUn9gTVyzFLZfoCh6aC5sPSoKf27eUGF2gn",
  "key26": "4HUxwsw9KYGjukR4bLEPYC2oDXxReqbbvLqsHEBYCcj7UB3Wd1USEg71JxkU5PkZCtTxKT6rD5PP3v7f2mvDZRds",
  "key27": "5FzsNPigSucVpndFxW3nvPrqq7RXkfbGtSw651ffL2JdSmyFRU25du5WLkMEGogoazGNDvGiJUhUmPAtiwXCpwdu",
  "key28": "mjpLKQrM43YX4YgVGDcggufHzm4AF5ZudhnN7cFFHWeFrSHVSv2eQNjab4dSSkjScKp7Ff2JYdT7RB4LjHdWPhf",
  "key29": "UgAWoDDhrNNbj1CA14yDssJQdCDyBhV61vmJizTrZ4yfPKjiqazAWnRDUr3zBPuNfhSRPzExFxdgyWapY2MWaFK",
  "key30": "5q6qq54xeHqZ5pRb53RwHu7hLmnFix2FmMpcdtMc5bJz4JzHBoVBRbZYShnw9jQmnRFhonuAA2nACZ8bwK1mJoUa",
  "key31": "5Cb23gpbQkMvtm1ToWjjAxeyekQuDyU9ux66gezM9AxKmPbnBKFFJKHRW9dw2BoPQx2Hcye1qVJjXmEgUbihdkDW",
  "key32": "ETR4NGm6tP9uvqwvy2bAU3GrttLato1DTaY56qfxnqQtjBcku1eKUPPUdzLQizEtiUSCsfWBKw5GpCmuUEHM79i",
  "key33": "gCKgGyLi3M4A5AS1Gh4JiZS9gqapzG14c6Vph4q3uvE6BykCyuvgNyGuHJmN2HjqAS6YY81Rb5C5b5L7p1gFtCi"
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
