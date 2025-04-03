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
    "5Mye4QMe5ajpRm5hMZjz6Ks4j9PvV9qe8qjXBKzxwHGy2knt2XyY99XEkdpxyjfn1ztR4sKN4W92QC4DpEF1Haup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgJz6wWZinQyL4jfbbvhcP2eopt1SvQv35782hBCr1WfUs64JRu6r9JCLSV2ycGyEDrQytaonK4yipXTX4KzD7g",
  "key1": "3S7KVLyVpQWnx27wpqLL8dc99kgvVwJtAHJ1DnNeCyDc4TfgPrpPH7qHHsbwxTmKMSroL4dmunxu7JQU4JjaZjRG",
  "key2": "5VojTfPKLTuWce8PuzBbvzt7NR76npZ9EBzC35xhnSWFTneMHzYEHygAcbMhsdbpoq76qDCwZeMpbaRscLGELSBE",
  "key3": "3LVgUmev9jXrsk4DQDUkf9G9F5ohFCU5T2TP9oM6TokrrnMovnvNB7FjTwTz5nc1cA27hqRL6j4kRWoBYJf93rHd",
  "key4": "633a1R4bpRRNtUyZ36VjtdLXqSTRkS1tzu7wyNUxq6KtVrFYLyFYqRFMFM35wPx2e9HRq7bmEpYNtEwywdWwy3EP",
  "key5": "3DSH6xqwdD4m5qPmvcwCY5thYnQk9h1DikWQd6g1VQnJhtqnahGGwKbJ3GafyCz3QZJ69vqKVZwEkWx3TzLUFPvQ",
  "key6": "64tq4A3v3mfXgftYke5oDafjRda5MFRCAKuncuF7ZcycsevDGohR69EsoNX4seqewXNDe9fC6Dau2koZbS8KR1wP",
  "key7": "5BmQkrMUWhNHGy353Uf6Tq17xvZod1VN2hJdNUTMVjDEXaFt9UYkpfCnfqKwSfx4HLMdegHuYsoRaz35iCJ6mnTj",
  "key8": "666Xc7vyCo2GasN34u4W2GhXHgMLJ4RWaG4mY3a4nq9cS9jmbvtKfdvd8g9JuNwMmQvNqP2T8ZAYUUtVC1uWCKQz",
  "key9": "3tnrRAWxTecSGtgeBWyWT5NQBPC2Pf7BLZwFjDK2nvu8MMtJvARH56sd9TjSMTVsoX6Z4BKBRE8bmZHQCVDX6L61",
  "key10": "JkuejtHmPY3ik4rwCUwe5mLaHY8mjcwEFAxjRrMzcdb1vCndNfvKTSxZZ3V16NVGkMgWnWzb4UEGg3nLCyNe5DQ",
  "key11": "5XAh37wuQ7iHBKaq2ah6xjtLKqBbVW3VX8wv2HPDokSXRWig5F7fJQgbBT48kXT4UQAEcaKxXjbWWS5v6zXv13on",
  "key12": "5PdYUEu1BhhaZrLaeMRWNftgxFHtX6mUjrHeixSoAeAYjBCmCoAcpkDo5cyN4jAdmSfD6cPBKgbJSaYBArPfJ9b9",
  "key13": "3x9MWpVBitEcpSaNpWMc1f9oskXrwbwWy83yaeMwLVJtd9JhurPFvwPWaiMLaX2G8ixrNzZj8VrkiUMMa6qojV6r",
  "key14": "2r5ZU9QzFW1mKyyyEQDDaA63xA62TtNXa4DJkwskESDDTcmnFRM4wZX8HWPpXU1ZvQgPbzfX6nRjVcUvNpwY2Ttr",
  "key15": "3wnx6NwCvnKeWoBZPZHgUKsoZ9eTibz35Bk7kBQjULwmSFqLwq1JDfvDksfTWPUmf8emC6aSfPJJ5enAxVZXGdo7",
  "key16": "49AkTbxD9ThUwJyh6eGcUxeuD84eCYFoNV36Hjddej2Riit7VzAHqtTEqUYvhhKU2AwBDoHbL22DMNTS8VrZkt9A",
  "key17": "4QSVByHfS9Z9fFNF8T6AgTbrYUFh4fy91RNquP1nUSeXMqmvCqoM4Jys8umADFSumCrCf3z2UzRKW4ZuVohUa8oL",
  "key18": "3gt2VPwEMgBEtzYpjVJZxb5nniTqtWJx5q5rEUnQo365PQNRz9ZFAFLnLoYgm4xnMHxq395a5YAbU3Rb6RxGfm2T",
  "key19": "3hnsDCHbGcm5EMiDkus7ms45TNwUbQb3XaNekKuCfD7QHYCDgBU4kz2Sf1PiKJxoCV77Q7ECFRBHTJkCA1W3kDBR",
  "key20": "2WFmZmynEC5xRF3zwtn36UKQYFRRNxJsT8DyAsWhskdYhg8fHNcr6XvMcvB5JTzCwufTrTtd87UbwauKk1mMzRfm",
  "key21": "2hKdBG7BDPEWHrnPWsS8NNtYeLTR7xw5knQGLrWz8hsLXkgNr2C8oMRMahiCuz4Ti8mBjXxbUGHBHsxwuyE9WpWy",
  "key22": "4NrLCGLpquAJQnffvV7LcAkytbrpUatUJLQwv63kfM45Y3nPpYuto6CaDqqa5LWP3p3F5WFPt4wE3CrVoRvqMgrw",
  "key23": "ZrhgETRgPe9JjHmTBFZkFxXA3dwk6A5bQg4AgsjUURB5L6kcHvBR6HgQYeXGPGKPsfQQcnb9YTqJNFi2nEc2umk",
  "key24": "4wZvuFNhteTZzBESHtqeAU6haYd4a4QnXR1UeyUmZUJ8aUMZ5aFzVvUBiHetZRQ3w3dnVAbGH1SGstsFXksoq8Yd",
  "key25": "GPkXUj3jBkgmRbAgybgqvkB6C5bNaqvKg9tbhvE339WZzeDKHFpS7fdmAyfCf74iJYc4pJDEKZUvfCY2SQhVwvb",
  "key26": "5xCw6k26RFsw8yxTSr2y4D8vzCWhgr8QrsXbaExfkwjxaRvtdfBTHdw1JCWA6Ec5KPdQPoTMaEf5UjMYhBHAnguW",
  "key27": "3JvVP4FNMmSBpPfE5Q6ibx7Gd8teu1WuUzSCWJ9DncRHSVL3tRZGgxxBbVsZoCjBTtfZjGvFy26UZbGGoGhoNVrb",
  "key28": "59KMdeY3tmW2njrYAkPR1JT6KgEXn1UMvFLfbZ4vHAghdTMyCYSU2Cm5En3ynGebKuVpoDe46sSnWaaxWaAf3SZc",
  "key29": "3dL6WhZF7Zkn3Qa31S5SsabYUVPUedeUgDaqBmCnjci6xLjQekCKCBySKcK8XE2uhY3d53KXpquBABmWqTAYshB9",
  "key30": "39poWsJwRrKexzU8NhKkTRAp4oxdCoERg3AbmGDPaEM6AgAQAXosPwcwRspGQzMcnH6jq2PH8t5DPpkkDYW5H5eG",
  "key31": "3iGRUPuetB5SFznN5Dt9NwYnCdPAZSMEdgiuUDroogsQfuveTrxU91vxcUxT4LjuNytVUQNkf8zoieFHBg6JjNq",
  "key32": "2zs9aRdD4MKsT9FaFiQ8siwpD8EfDVMdRSqK6iV7PapL6sraJnbQvCBrnsy9x1mDiBZ1YioJiyt1x51GaqEQqHeT",
  "key33": "5MxcJVfHkPNAQm1QdTynipy82fTszUV9XV1vtkSP6wkPeer7v1csX7LacNTS6ReK4sYh8KH1VEnFea6mwEBbSjmx",
  "key34": "2aQRaTMw1CgQx5FLahWKLZGdKqYeoLYjG4c849RQNiygDK9b8nfqSjTjn52eUNnGMfGTvssqXVVguExYnX2pwXn9",
  "key35": "3cBx2mqcg6qsS8jVsGvoNdCnA6DaVMv84Jv8dyuxLm3MPDRNBJcq6kfdmoomuJJPPAMMAfxLPR8eK2EMj3Ru5mLE",
  "key36": "4cuXnDPwrw4yjMXggWSA4ZV8NTy3KUbLdy9wDjFc54mwHyqxhQdJhWGeoWwnR1f7NMpDehq21fZj73AbA2G3qzMa",
  "key37": "3NzFVFAHe5obwhpMzu8nA5FpdZTyJ541y4YXWG9GCuiKQvkoDFxoswJecs2eKpm3ahVt5hzjUsqjp3C7T7nebgPy",
  "key38": "3m26rmjRJxwZutXs9nDw6QEccBg97Fkr7t5CGhhzPYSuhY8ja9tqCHXMaGNeQdgfUQg242bjJ1woDMFUu7qrbUhP"
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
