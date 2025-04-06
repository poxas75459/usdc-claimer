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
    "41VTqJGTanNafV5oxojvFrsjGncL8dVSpEzmEHnZos43FmNZuz7yaoncRb9CivVGyewK8r7DEexwShCJLMxy4GqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "17zeizePRKM9dnesFC1etmHriPDtyuQ2wu6Rzgt74hLpUg6ZdexP4CWLzPM8xBmpr7nkrTQE4YQx8fE31uh2ibE",
  "key1": "4CM6q1sCfzfio6V72u1pjDpHqEkUWEFu1iYRpwwkN2M15MLddfwV2mMjCcXsiNoxUb7AKnhyHRuKNCkne2PizDfB",
  "key2": "4XGw3aXQURYJAQvqyzwy2iGNnnZscX8BohuS5y3Us8WzQ1TeR1iVDMLR4kRtexCUiR5uTMRwGsVZaaWS2fGYUt24",
  "key3": "297UzcE4BUKsT1899tMrPY899pzb9e55ufELbZLYcbWSkyFrnhxyNJqGRH849mFa4GVpVaL7q3ZeSKLRCD5rvGWG",
  "key4": "4GbUeg12vDKd8GsLZZW3tuCvAidPCUmqnUWX6V7TuPdG18cAGrphzg36UnbywPiAeSCxPdbZMZZoXytp5Q9Yf3BR",
  "key5": "2BVbK3qaMJhUSJFrfP6Bgh6Bixwrxjtbcs78Hry3NWbRhwNyEHqU6zcrtwMzFWBb1BGMsk9PYkBfD5quWFbwnPDw",
  "key6": "4dH1yP3XN8kNYNXC1YjZaXmTjTB5amvS3QFGmPHXUPcanSzY3gf2MQ6Lth1xivxCRQBDiu7WC974q4Q6BcuRnv3L",
  "key7": "hjcn8dmZppumo7gJgiZkWP1AFSQGEJbwqLv8t31ZJCcYYRS7YX3oRECzSNiEkfoDYAHZApnHDKhZCwf94GpZxpy",
  "key8": "5C3rhbtVamAmagpnw8o2ercNK647Tyrhm59kZXVSkobrPC47tYkiMqzHPnngAhZrcZrNcKHGTsyZ18DEyw4VYeto",
  "key9": "2HHxg5Gj2VndaNjbe1dUjFJidchywRZQkM4cXuYkxuxaCdHjP8v987cGS9fmg8SAEA9L8T5cC62ZKL15hUChhFMX",
  "key10": "3YcJi8tuvM8zeQ9pLhGee2bFqmRXwG3Mnj244NbKaUjYQs3cCFW5cdfETfFK4LrAmawbhhD9aqY9dE1JZfKFmt1y",
  "key11": "2eyZHmwjtQgi8wf9mqBafyhANMX5AW2DpgVKhTuooTka4bXgEXpLCPjwx5fEVcMRdx15HYZcpwbdSC68h38T6Vbb",
  "key12": "5fZnFpufivpHXBtf2saAjBvEGXv8rYHudz9VyM5CXRAnh2bJZX8Mt1PECCLfecVRvXSN9pftGaY7j85eTPW1aDPu",
  "key13": "5tMFwPgovkyDkjBspG1XdivTGTt1bQyQn2c3Xe5ASWXTm3NBAvwhGaaniWU1Y9au1hEuXfqDe528FvhtmPTmGgR8",
  "key14": "5QQfA5c8uMcpUwS5kT1o6cC5Zx1L5pr5xWttPscu6gx9944sNPiX8AYs7cmUeGp5fZqGZbKtNkqQvNEagmXVYJGq",
  "key15": "1qTwniQC4PN6vrCKn6XpkjgqwWcYeBekyEk8jJRCJ3NZ9mFJrhYCAG5Ncb7CLmdLoh6a1euKNpfRz1LEmSCkdfb",
  "key16": "nxVzUSNPjkJcWZFx8P1n47r9nQnqpaqk1VcUbNAGEETDfLonAbXsf7fPigWHNLkawQtGf3Xne4mgQML4e2tXpEy",
  "key17": "2fscpGeq8DkHFdPB8M61XvbJXAQe3iWUy173yfw8mJY87s1FDab3y61WMRR2ijNQhqaAtATKmoinDZGPKBYjkGdu",
  "key18": "4e6iu8jPjtnHtJjEcF46vGMRsovfHdNxPH5dQFgRb6eMmusBSgzQKSqbRCwBPxfjRZYPqq5jqsKdfRxgvZGHKtu1",
  "key19": "5xep7Urb65Zpka2dT3jermDpsdwapDfFy6xdJbj9SzjdnkRpGSjHQSc3nAv98zRdWHxf8XuW9GJaVx2chcnjQxd9",
  "key20": "5ttX54TZ2cQVnwQn9J3Av7iER89cEwdsgQfzZVtVgDfLtXiQjvJjzLc6K5zNZxxxP1goDhXKhC4gq6mA5PkW5Ek3",
  "key21": "3KFNwyhxrgVYkoMdC5mpXqhRcZcnjoiyvYeVp1UFEzvrDfCSx1paHLTuqQMioUrZ5mzNXY7wDFB3GKfQev47mTEr",
  "key22": "5NbKDeT1N5J2sJ8YMHbrKcCkSkm9zpYoQGqowoT1iLftxK2XAJcSs2jN8sxnfyWAyU1roEdt7Th3dd8BcezaaCgT",
  "key23": "v7NsiF6WKNWoyGjT5npUizi63BVgzsVSzy9JQuU7XYHTvwVn7ptHqGkEYqRJYMxKZxCVYCqNygay55vc5Yrh77j",
  "key24": "WhPUXC6wmk8tWGrzdH2DyxsnVfqtW14R3VU7zMyTnsVSm6YnXYGnvZLzhRntcFbp16FRNfY7znPTuGAkgrDnezm",
  "key25": "5Bqs8XzpVE9dJZUEBGriMqCbp7bjwKZPa5kSf5GmXrSp5yRhmPE5JKAHQiqSGre9LKggjigWdGExL9vra1nH8YdP"
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
