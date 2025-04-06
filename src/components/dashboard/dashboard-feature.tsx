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
    "2mGFnVYas93qQY3WaT38d3dKYE1iewnsgVLKyfcin9vj5wX5Z4BLKVja5EyCzfQEnuWqQTNTv7HZdQWZNrb7Te6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGBCxepomTmMFdCEFW2jj9ShPhoauT9ZFL3ypcQhyEfKSzeohm3fKkx2yAZxoB3RbL4i4bqMAf2j4cFLUK2U4qa",
  "key1": "5fS8SVixfhD9LwAmcrmZ7NAJhRtg7D6BU2pDNREUQjyjYYG12TWw6yFei9FLpcG7yZVzJ1akaBWGsJX9gFCyrHBC",
  "key2": "4buWX8D4Sd3GcoWcSThVS6qTodPSLYT2SPuKzZecd2VpHsmL2kY5rVt3KdW97cbJjV34VHnNzLdauwcwkYtnuJ3k",
  "key3": "gYkfaXXgdqkKsVTy3e6emBmYmTdqPwPuQXsNuWa3Q97QavywnzbYALFqZziT7Sbqwa9UPRWNBRMZmvFvHi14xeg",
  "key4": "4bR5vA3MuqT5EqPmmyL4ZQB9tg3v5y78FPXQVDFtvpiLkNHVRRr19h8tNQdwtaqKXSViKz8U7yUp6i9BXiMDbc63",
  "key5": "2MNfQjuf6xU32nUiWLbU4H9nYu8uqHxPgHRX87f9KAZxJLpGNypFsNJGWeibNStadhFu3pEjsdx4WYgWXSf4Cw6s",
  "key6": "32xb4ENXhTZuwRUhvQffpHgtHhTsEYhWsHjAsefXVYwChLNKz5JM72Q9cykbBz8DwbPNxuVtwgNr6FGXAa1rYcEL",
  "key7": "3aqeVV3jPvHvmqaNfXB5iVWFuimdxr1r2rKfQJwrPgo2ZYuFn4tYSWfCqiJjw4j2Ny9enWzTXynUZs8rBbLdJfPG",
  "key8": "KKzQeKBWUsj6ufqvhrm2q6c8i2a6b6AxwvNy9hvnzhZCAQ8to6skWgtePgqLSx4iTX2av5VCD9bs4wr7fwCN91W",
  "key9": "SYgAetfFDMirQvsc1WmMKiEMyQquBLcKKHrn8cA2zwxueBZiittZE2pRpg62TYensE3SScvM1fVVwg65M3EnnFe",
  "key10": "28e3wMAaojPKatTHhuZXKNyqg4Zw4ZgcjWJoo6mxaCH2p3eCrbf6scnEiUFngLu8GMERMbawFZ2DtdtYz8gqB4hB",
  "key11": "4UQDMy8euoYKQVHPSXSoMoUrsreQ8LJ4ebX7xDA6GjWQ5z48mnL1a6qH8LgEvqZJUkxjAcFKKKAbsYqYguwPUrgz",
  "key12": "5LPj9VAhADAvMkoNScMTbAsNJf3mNmrK8n2g4j8QjeGGYqNb4Q3VGMEX6A2dn24Y7jyzLqsatKrjd4M45hBwfjjh",
  "key13": "7rLFsqr6AN1zDhjvSL338WgLUMA2mU7bikZE5xY3s54f5fhpWqPXGrB4frvohN4zBVTfjC5348YyKudNAAC8YuF",
  "key14": "5TGztqc5aHsqdkg2bjzfHiBFP1z8jbg4wHkR4oWBdVd5RNLkiUF2na74hEoACCq7Z3PQK5V6KftjD4kdcGSyXnre",
  "key15": "2oXeo4mhjnthruG6PdS4x8U8VyBS26uNdxdqVWr7yksUcffr5EjeLF54YX4btMQ3qzZkYqStUhVWY6WX1zPkpHnn",
  "key16": "4G35A9JQTYV8WxiYzGZzn7WKV5HzakfZn6x5UMSUgaZLQ5RDqZcpwTe3xWr9TzCFXcEqhMbZcddCWwiFHgNHX4CE",
  "key17": "5bGRc7KC7Xff1cU88tub2NZsN2rgkVoMqm3onfr381pBP5HzxTB9p7i6ZsSU7dEDNfxdDeJayvY9WWhmT11KNG1a",
  "key18": "3QwmHYcehCibQdcnBHSrFHQH2xRr7bd9HkbAxT5wa3YvsgFkJTUvkpKKtVVjo3cVvLb2oHF7CLTVvy9H3XwmZekT",
  "key19": "4ndZrijYBvE8wSfpdhYtJV47AuBfUTRCUEsoxMw3xthGBFvgBpNmupTx1WgCBaUJudkNN5iS2S6JVnZtZ4JCN8dh",
  "key20": "47knqkJipzUEDQsSoYnpY3gkqn7kEvWFtH2DDz3pjNwgj8vpa2KGmkHQ6B71q3aGnX8RNU5yQbMxJkoiwWqTepB7",
  "key21": "2UJxzHQanayN7CCqtpw4eo7pu8tZYT9f8wr8QdjxUrFim2buzC4hF4PVLxrcWfTajfbEEXibsMNuvagLkxpJcxbS",
  "key22": "3pvwawuMWGEZUoDaDpT4pv5Gma4iVKwkSj4w7MSo6fAfodVa2wEuqSENJK8f3sCPQYvxcgR2T6ra11nUkQhh7eNM",
  "key23": "2HZY58mJycYhLoBk9ETPSXw3LbYTALoHdbsUVgGkC4ppc7bVdxBxhsCn4hUj52YvYBJMkXihB8KdypW7yE438mCt",
  "key24": "4WfFnQ18dGhdzwaARMuNDBcCHfnZUdK93uqDxfaXSnAAAVAy3Rz2FQRKn9pqebDb2eWbVwEfqEKrfoN73wcAvege",
  "key25": "5Lfdv4F8zrqwS9oATCcUDoWbAPW3kn1MJaEhE5DufZrFvfwKn856bVFANeD5WqUHNM8MoAvMyLGw5Dn8yCvLDQmv",
  "key26": "3bycfZG5esiZDBKnEhZxbrBCe66zggyiF7Yd2HgDXpSU3X6s3j8CeLfwmmQcVmCZsb7zceijCN4b98EPHSqyTdeT",
  "key27": "4RonkQRXzXcd6Gr6VLBrLNJRSkfAgg4uhBP9r7mmoDGFuTgUiud9xWnKGHC6tEQSjL6XGymMWTcf4BMMEia8H5ft",
  "key28": "3Mbct1siiuCtfB1nFVBijMhzpq1T8F3zxLUwPQCkM6Jxi4vKGPt2y2qUjTtZCHKvYf5XkLFGwzveHjixmrvboQZo",
  "key29": "5vWbcZfNTSSSp42RQE3JjxSqVsY7YWreB5BHiNZaG7CttxgM3DvAsoxzdJA2QGVQjYbK1aYUKGRZRUV7frMJGs5Q",
  "key30": "4WSKKJjcPMYeNbtqUouqBJNcaP1fosmtkhENzxqeKyvg1H1DJB6E18meWSewLdFnYjjJ34wfNkT4MbLVDneWJBzQ",
  "key31": "2RQ85rteg28tM78sjdvBUpJs2FMJ85JjDemJm9mLNLauoWu8pdoewESA2bEcZ85EjMg93TK6v9q49XVpXRAGyc1Z"
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
