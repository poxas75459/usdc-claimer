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
    "4nPWjZusmKMaQ8eF1w9g8G9oK4UpBgP2JvDEztWeLxfL7vvh6t4dvzY4NP6Y4cBHfcvDCBFL44wsFC1iUEmEmcqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WUsV7AE2AzVKb69mfmH8SRcii3eXWcX7ebRDVHyzAbkpvZ5WnkrYcntwXhN5CiqVUq3zoiWqd16WNcf1w1E6URj",
  "key1": "271ShcUoDFGn3SspffMqodK8Seq4ii6eegW8X1HCWsK9EDA9FDbneUeBEK4SEx4tNeh6jn45cmvoEkD8KRdx6qWQ",
  "key2": "2uCojP3WQvvkZ2VtGN7LiKWBa2x9e4PestZmsFomteJnSnxQk7McKgnqqNQX5teiFWsXDGrYSwE1i2aVjZyK1vZn",
  "key3": "3oKE1djhCfcLH4HKDBs2kqZbnbX7XojLBvVcZnFD2YZsAJvJQLn3PsQBVh4TXQ9DtMcua77bLHRwCooV5gijspmx",
  "key4": "5jQVuBaUsGsGmiBmz1NDesY1a77j7Kux4CFDoKqPdPxGaGXvuyZiajwth8weUr4uBSgPXSoAjGsP51BKNvPDzsqN",
  "key5": "45XZsz39UJFxeCDdo297cmzc9xWYWnJ5X8yvz3QY1rqWV93L9DupmWeLgEB6C5qfhSVpavmVWkqfMqHcERJ4NDAC",
  "key6": "46ygLPJdHqxAcb3A5NxvHEJgaxvyT8GkMyeKRKGzarvf3iEkYzepccDHEfSLzVAmCsS5LacEXvbyiR6kd2qo8Aim",
  "key7": "5WWYe7zibyPqAQSopNc5Q5FsSP6QDbBu8m5Z49KqMsn1Miy9TSYVuNqjTF1qyYLuYRhGUTZGwbBBdPcQsuR9VaQJ",
  "key8": "2xGr5FYALU3ydV7ywL8SbRzhhuEgcERF9ZjMsW5rA8jRzu8QvbFGEAZDdHwZGeLFa2anmdHXqcqsn3dU8FK5AkC6",
  "key9": "5sHGNUYHaPEGobz15JrpA1jcQgaKj43hoC4PzjcmfK2Uax9imrgzAZKSK4iqNecJr1qCzNk24v9anaZypEpU21Ny",
  "key10": "2g89bgS2pzR98fjafnC314EdxGPhc5D3Tuq8xa695K4hBGnukPeKq7xNmWsdBMpLnE8XEmEJbHVxFAwdn9fcZja7",
  "key11": "51JLCma3kFacyGNv2ajKL5DLk4VtNrKgBixm1txSCRB3qixPECSrwFdAYiwgNggn7DvXdygzroTLuG1HiyVDtGQT",
  "key12": "2vAzBas3AtscCby3rhxHJi1eC3oqE3wbhHsiqXVGFwQE3hj9fhMcvMW1ifcJRkuGcs7z3Vz674NNuidYhD524syV",
  "key13": "EF725ci4bL21SYeVLE8EYaZH7jy84Amk297TxEB7PQgjcVZbqn3wRYFedHWRPVpK8Yc3GZAqReqHewdZ8t3eEpk",
  "key14": "3z6XyptAgevpJiQ12eDVMVqswZYAdEXqHwrUet7etEzL3Don3hvNek9XobRm3SSSUHcLeonuD9GnvFmNgaXguCFS",
  "key15": "4JzarWbSMS8cQaXh2LeuMot84WAErHcTseGzsTugKAr7SNSjhThvHYzoaf1UP5UHzrLUa4zPJmNFoVVmNpkXYAFw",
  "key16": "2CRtHGUVWbexd42DB2fYE7KQDAS5ubG5rJu9QKosVJaCJCPcQHM7864CTD4MPrVxmq7enjQF2147TRjXiKM8Ggyb",
  "key17": "YHu241bNRzQR3jPmViPoJ7PwWh1MTXncHYoy3zfUTyUKm8AThdHeSjGbRF1wSwVNYbGEJtBkfPYc6YsjKcJCVB6",
  "key18": "4ayoj48k5ePh6oALYGogJhUXpEDaJ95nYAigk8LeFZ2WLciZvD1KsQJanbs56wo38xNTo1WZPAM3R3d2QUBB6CUs",
  "key19": "46vZ95UstxXjyj4NScW8oW8CVpbv6fBnL6gXNjj3ZsmUhMLtb7j6CL4gKa84uh7JYY6GN3ppFVyXDu62Mi4HcK26",
  "key20": "3iV9drVjB7iMhrbzVVrXiW4QX4cZ4tTJupg8UmsQWT66Et2XhGt6Mu4xKNt1v9s1PrWkK3zYyN9VxQhJuto4FHPJ",
  "key21": "3HTX9jK1p9PhuYRZ3jFyCim4QmfLqaDPpZTesWthxfccVfbVVL678KsuYi1hVuzYf2tP1FU6qtmdS3xadZqgNdix",
  "key22": "5bq7Xiq7eQWzypYwMH7CH2FuzQr4gQ7M44n5tguRxQp1ExqcfeepqRNMADGgaoLQ8M4jht3t7BvBVtMQewn8ifDh",
  "key23": "3kHPP6G7EVp6Dj6sVwVoWiUvJjLMHgbtrpem5AkWBnzDxxddYfz9nQy45swc22aBscKww1ytAQSuBybZyeqSFxPV",
  "key24": "2FQDipCaVnfypp5BwPQraUD9tKj9UU5W4GUGdso7goBCqfp3tXQngfgsBvowLKFF2EMChAq6rvi4bhTaUBG4bWQb",
  "key25": "4ArmMa1d3NsRuSJQMASXBg2BmJB3EEV8vqhWvu7E8J4Z2FwT4tMQGyFe9iUweLr2oQ18poe3mCxVZr3Ew5gjWiLb",
  "key26": "2NHui1RUz4D4kGyF5GGGrXewXHNRY8SGYBUGt3Z3hSgdPGuCZZN2q1aoTS5LEigyC9vg5LEV8Jmx6QxsRe31Bh58",
  "key27": "3nhZEQpgQrhZKw9EskJuhFXjpN6Gxj9owaGSboJCeAxcefyKM7FxJNxiki7UFnenZtGDMvAdEyKriXZrHviexKFR",
  "key28": "59i3nbCSontTKksajQAu194J1cpH29XaMhHqzgTbkxaBSPjUphComcmVTzHiG6v36UwMcky6MAvJYnYEtivujCqY",
  "key29": "2YgBtrHrxSGqYNzmWzk77qWV5swQqae6FLirrdXuz5FTxavjfjBqvMquEDUnLhbXTrp8pbMFMrUccRm2pjCutcus",
  "key30": "5KS4fpkZQjy5Mz2a215krRyiWL6YzAHn6vXVjToTaDKycUJmsC7nuK9RNnVk6SQwdgRY6ZaUzb42sMPPE859hACu",
  "key31": "5GoqT2UrgAbSMpEQRNWrPqokEENHBKtMjAFUjSi2xgg2B2KjcZLd9aGEBtCXkSxoPCgcr5Y4g1cKbCxTZfezvwSF",
  "key32": "57JvcDDzXt7eNAKRKYjvZqExjmUtMBFbEM5RxXcfmypgYQ3nLocKiUgfpLsnbUquotTZVtxfmo4yFAicLKGtz7QP",
  "key33": "4KXxfmERrovfxsjzkdQULToKBvQmakA4jy4pRaUgWL2Y5nUSg5N4wX6jstXtVXZV6aaRo7HSZbyEXAVNMpYeT5Pm",
  "key34": "3zmnCUG48213YZVpqnp4YnzQkefw2n9zNQaazgcxjiQHumpCa2X79tVa3GVx3ocw2vF2fFNWyB5YAAGA68ZCATnA",
  "key35": "5HYvKUsBCaCUampAxsmxEzUx8bsomR8GQFzMs6JrY4gNTBUL25HhpaMcxETEDDs6pmyK3AXziLRd6RebNfWoCbHu",
  "key36": "45oEz36tcdZCV9LX1YfPa4Y4Kz9j7QoV884Da8UJv5Mmik4dVfFTejfMxDYvyPLfBCi1Gf4uL9y1k4JQFiecbK73",
  "key37": "32ndvWdYpyt3MdEJGirmCn6Y7jNZaTZb9hxtkXzugHEyozcBbqhuNAGSjiPnWs4gMTJskb7RKPkqMf7UMV9P3L5r",
  "key38": "fiGYYKfDQ1WLLPQL8JaHYffBvkgTyykenNTxxDWuhdktzEb1gzxPNGPhxpikpo5i2P6MWZEJ5GuJtdnKmUU6brg",
  "key39": "2UhNUXnjrxy1SodUcNTzREGaMo5pJ9rE1im9mr44t49cyjecRxRXL2ym3djKgy1yr9jyw1tYz7eiA6eyieu4mRQW",
  "key40": "3UUeJbje92qdKvpfScYzFAw8aryb2vjZcTxsb1ZH9NJeKAksqQKADyMaszsshr2rDKzDk3UuQxV64yLuTzcNK6cU",
  "key41": "2GCKkRwWgiGAPTtVfKnjbSqmu2sLrLDBUVVEBnSWkVABkT12h4Wm5kxSMyf61P5ZR5ULkFwstnnU2uqDkPRWUeWp",
  "key42": "2n4QUKLHvMggCTZiD8cRset7TN8ca8qDWUbCKyLTnou48Tt3uhMkADXdpmuPsTzxmdboMngQmNanad6H57PrjugU",
  "key43": "42e1jwjqg2Qbn2p3CxWqk3nifTUaLFSnvKKr9rRAwCHPhwi9oRDpK6Cniv9ZrZpKGAWVdYWoBh4M8rfKPHJ2kmAS",
  "key44": "24cpjHZD1iZxQ771u7fqvUxcx3Z82isLcJGxQXRdx5CkJxF8JrGwNK1zdA5oxsZBzDEwfnjtMEY9bRGygRk61ypi",
  "key45": "2pX1vYDAcbm4BXXoQTTQYJA2DRZTmcxvw4hRj34TXsoAUgfXTatdwDzEfHVVwedaVkJ1p6UmjkCBXCqYuqVgYebD"
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
