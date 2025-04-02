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
    "5t2NXqUiLXHyBYCbqnKr6994c3BFWU4sd4ZTqnCAGveypBDgZwTftXkJeK5wbdjegFLitWtWN6VS1gcf8VQhuWQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pauF6A7f9dEouBGrjNPSwiPaGGhmp58PniMm33swUJ7sDpnBJVxDriCNh3yBKWeWUKqpXZjH2ETCSJSCVn3qSCP",
  "key1": "4mdFe4PM6okAvyN9QGamA1hGhVFkDSe3MoNsAGJ5jZ4XyQfmaaX7qUu4m2duPqZFK94u5KTZeKoxQXuAHQ13NfLG",
  "key2": "Jtnxm7ZehVRJSxkcgnRAmksUeuwCpW6y7cRX6Nyo5aZMaCXK7G3WXp6F7xrcoSqf5TGjbK2wGveY8ZWiQiWPUwP",
  "key3": "3xxscS4Vb1Qc21ECKFKQhb9nenE9qMmzr5CuwXeaQ91oJSEj84pNprtiPr74qrEePPC4pBn9t4Mi6yMaeJNM7Jqa",
  "key4": "4cjC5Pps2ySgZwdNbggfWWqZCmrDVzv81gceGxfVYG9Qq2Nhcc6TiikWBPveCfZ4Mw1s58WWQRLrwLNvomvCw5VV",
  "key5": "3DvPXNefVbocaB9xzNFHX1r96V2VtAvB3XpiEYCSXrmjCwzqTKi4drdcyz9Ygh7NrKdc7Jx4tjRoymYfFhvk1Lq1",
  "key6": "kcZapmxueH4RTMg8f1JeBAcXv2UGpRX2rBYtQH8umqBZngk87iHJduQKtCDeQ1PLk1SwJA7MGhWQLFwSJoP7w7Y",
  "key7": "5GfzikxdUj8br5qZFa49CfgYrR3nPTUVt7H6RwfFrnYrBWqQEbqkqekYLNyheGV7n5ZMuWeAe9MqBPMTHzPicoQM",
  "key8": "2eGnBSVhPgVKmygBvHon9Ar8JKFoBM9zb1AZw9S8t2PYn6AoTWKeFsEWMCCt1ejZd9CtSqhmx6oefRMGJT33Dgny",
  "key9": "4nJdwvUX3XJ886zj4ZqFtSzBe5CBE9eNeKBgwAHwNfvynAcjGPvDBNshkSiFDyzdetVJmP6QqboDmRLx1MVMcsxx",
  "key10": "5CAuh8TB6hVziSsXqNjNG3qmkDWcbT3ZEQBUthLDn9r1vskZrsPcr4JbEeFvkp9syP5JVycPWrcxDqoo9THQPiXc",
  "key11": "33Z6w8yZsHDawJ1rLcnsqdYC5euN6wzbLRNi4NoeRHLNSwivYMAJsiDJbke22vAH12RRzCa8h7qDwBV23UEdtPwF",
  "key12": "3GxWK4KM5Ron2TcDZptSa33BF197KMEztfgSNaobjJWFXwW69Pgb1znLGCMc5NTmy1k8VUb8JYTgRCzSaUTErmv3",
  "key13": "5BjrTK79mz97mFykVujGEhvw27HsiokVd9RwgSfQ4p37L3N2UnQiGtNaiefCrBfhmPsHa1sSRDV5j7mQoBypYox5",
  "key14": "66sd5CGWAVaGvRussCNuiBoDgCswWK7eY8GFamRMaQnf5jJGPhKWjdmtP4RFXdzMncbgCMpwcMnCEURmfjHvj5we",
  "key15": "3myjzcqYujxUhQFQAcrS7ZMYtz4Sf6NT1iSKXeXrhXjU1GCMTqTFPReVXJgdhF5iKRxjkuWUwb6fSmL5QPsm32G8",
  "key16": "3Sz5H16hk8rSWC83piujGCmCYnJyT3QTXF4NSTmJAuuND9f9ExLeMmyEE52pYN3W5mN2NHaRZeWGyezJzSY3eqzP",
  "key17": "UvKZ8sN7r5mHv5zAxjTcnxnLFULnuctruico6ssTZEpJpHr1d6bRVCbH3345Nce8LnJoKj97AAY7JQ71qS3y6KL",
  "key18": "65ygpQSRorJbz5SQMcJ8zA6S7ep6fs9d3rxtcBQfoYZ1nbxaptAkQo5ZwgUrE2HeeF5TNL1bspBe7vAnfBdr7Jf4",
  "key19": "G1vKViNr61GszkK7h9VH8FX4Hn5HfSy5oFWmkKg1nHf5AHb6fKJ2iuibTEyLqL3VEvyXmPu6mF9nXLiAEEA2b9M",
  "key20": "2dx9nrxWc1ukcKjpafnSBaxnvdV9YkSbEt2PdGXtUp1J1qmW1tTigFd34KGTAYSQpA7xNQosZ2hJCCcNhmaRNze4",
  "key21": "2xPdDKvRjCAtZKrsvaupjQR9Yc5DvCg6J4BTWskCp38eTUvpBeRzBEvfxX2XWbRUK94Xd6XMshuT79ms5BpM5C8p",
  "key22": "2CfiUaZuXxsYvrjpcW1KakuFKgf6RRuYPde5PKiJN8DfANhHYFwCZUB1WC4F2XXoZBpMUzAFFCiFewuZoYjSu5eC",
  "key23": "6acYQVmgZpZttJqb5zrzvrVZami3o1qzRZqA6ZSvWuUMZCnQkSUT3ePSBfCzdaeg4sP9yoZRGbFR8dpXGASEuWv",
  "key24": "5UQjVutjHv6CFBFpAkd9h892ak4Gvr1GKYVhfPuR6xj2Lvpe3bVbQSHPT2H4wcZTeDvTAHr6qi7e31PkrYHkRd6y",
  "key25": "4j95hQGyv1QGGoEVb6uZqmAiJc4FirgJ8m1i7Nr7gTdDKrrP6d9JSssqUc65NetLtW9VqkF2o3ArNRpGWum9Fc4f",
  "key26": "4q3ASUVsGShyimChX5sVkhrBhgsun64rNqEQeY4a1QFPBQAhvR73DWZV9exDgi8JXkRFRC1hv1wz7EiT7X1AZaAL",
  "key27": "ubufvedqusGaAvK2k5JqCyMnuqcoY6AkJYbrceFGWJRTWu5RjN1YZnw2Nb9p4rQM9fNKKGErXSQ3phEKG8Yzstw"
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
