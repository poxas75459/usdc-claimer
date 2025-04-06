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
    "3zWjGx44CXhASBWbQuv7DFrjjDEYRX791fSfYTSU5rDjYoUDudo2U9dYiMVgzAZ2J1DuBEjHSzcyGt1yYhZhVbza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZib2wsJ7kfhd1gGw2FpeQwFRmVcMLNvv5Ga3BbJCRTjRwR5VHEXrW5ir1cFRykgnqa49KVjDCmLDJAjhziYdCA",
  "key1": "2nBjqW9HiPwWdhGLodQ2dekC1bXPXsd9ZY4SrWCUF75VJyg44onAU9K2nPx7NktWPNAy9RQQ8jWNrUE4vYA4WYe1",
  "key2": "5mZVRJhyiGVABA9pjPKbBSYj234bWQngVUN2rSAv7CHPwZ21kk4tMWCqKF2VDb9gtf9eTwbfDjPityDKJcV7Dmrm",
  "key3": "3MsYJ9GM51VLKp6qBuqMTkkqQMdNhdmyRhsRomKUaK2EtBuLLRwaKoPxSSVRkGq18e4s7EGuR2uMbc84J9kcN2AF",
  "key4": "3QDYKUMbPLhmCBGbv6bcMcYMFcFoyg1ZAyD8vQQ5b6LZ3oKGFjQgky9EVcbvfYGFNN4fkvYRsxKiQvCNWWammSP9",
  "key5": "5oBVo8jTjKvDJo77di2DBbrHgtrEdqcEnrQg5cvPN696meXXmRjSQ9CUWU6fdRFYHHA1ecaYJVh5h3g5Npza2uM4",
  "key6": "4aKY9QL4cVYjt47BcrMjwB4eHMrTJ98zUj7MBQBMXu7SAooJJBUDiEhNqRJdBZGoDAS2xV1B1dC6LwCF8qC6oCvL",
  "key7": "4W2nxKXCgJEnm85nv4hXwtMyxJJ3fLaUHEQUqXB4R6Hf9o6gucGiLtDsfWPNE63XrFHBHM3PguR5Gq6qvzxFoRGg",
  "key8": "3cA2EdjRE8n5hamCE2JVg1JY8JPnynCSPQakrFscf15Y2mFxV5iWnABTjmqVxargNbtPXHusnLT2gQntL32wqTYG",
  "key9": "5XXL6d6AV4dWg3rvN85p4w39b8XfZogbWbCSC8MJZ9d8biYWBLCvKknhUAUVu34mPa6DrGVbBkwTu7EyiBkQ3RL4",
  "key10": "48t687xedRhKbEG7sBPPnWaMuKefok8eY1gPhDWWnFX2h2GVs89DMDz8UhVv85aZ2Zz82coxUbV2yHdWkrR8NncE",
  "key11": "5RrQrmZLWJ53pUw5dS5ywiZQEd6CFPoAEKwocdApVHMmtT5Qv6vP3sP7YMUnYcmxnS8r8dsevx4UTvkMVSz3vQ9Y",
  "key12": "752uvGvi8NNzPR3fZSm6G5VWJ1D9gZTEJxGd5muF4ahVCinhNLNvKBq2B7ATzJ86nRCaF46nJrncma2ihyVDiJV",
  "key13": "27cshmeXovBexaqkhB2QqufJFUVZFQYLmScP9t76etbsq4TPy6G5GBQmUJuH4UAjzJ1BfdMTwaeEAkQfxAyiKbtm",
  "key14": "3zTiuXndw28w5w2Pk8FNaE6U2oz3gGYo55fh8mj9FCh12Vs2YMMpeTtj6WEKavNK9J3LmMNzUXhDqqPzJctHdNjF",
  "key15": "3jKP8Y1RHhZFADn5moZ9ATDwzgfTBwGEt5JURoVBJYdpGx9WJTkDuUDKMDZV4CLyrxDZSafHURbmwcjcGhneixtE",
  "key16": "76LtF22qZWYMNAg1Gt92zj9iCGTYAqMnb8f8rzVXD4rFm1WVFJzMrtFd4eq5ad1MZeafsxPrpq7FEaeqGpMh1Uo",
  "key17": "5evwU7J1DjoTr9qPuANzNxbsEcdRF2Eu8nqAfQBRw7JnqQi4S2vvshuuKh4beduSVdewnAD9FgwtwC5fNcgrhej5",
  "key18": "5Vo69i1s64EWegoHCStnndKNh6Q9CtFQXicGW3Jkuo5eindp4S4tAtmwBqHFP1ScUKwzVFCCwuXhC8pCppozakiJ",
  "key19": "3oa7gi5d4FEhY4nrH6UydHZdabYCz9JfkP6TBQR2ZUMvzYz6NSgvyEf3Nu6n7z93FYgA8rB6wbzh9ta4Kohff7ka",
  "key20": "Sk8EVXVTqBb9Gjf8F9oSxoHoqNjvKnxNQK4NFAtDrPNeYXi2voRLAqVB2JNcSyAre7kDtXpvbiWuSbzhQNVTFck",
  "key21": "22iSMQrmTfHdLQ29g6ppZiAeBxq3TvKL59s5qGFVsCEZb3qJNiEKVNup9d1qxMPYmLpYHRa71rDpyEfG8AArtV24",
  "key22": "2PxLPNsZ4CZJZTuHrTJtHpjdxS1V7rfusm8rF4fAUfPfsc6ei28BNNwWy8UC6gBEjquiuiy1pHZFXYNLhFmpEMF9",
  "key23": "1v5bQkhWGwecpxPWRYtoUU7TBhnTkJJBzaeWt4MvDtNbu3A68rBZDKRuwUFn1S6rEJig9dbLwcmU9deaKjJ2LWu",
  "key24": "2B195y6pXwFcPXdEb3yrhVWMVQDHM99RghaVYLcsMy2caKvFAATDKdHsikSJ5wdbkUMm6Dk9grYfrEh3KodxsC8L",
  "key25": "4unAuJt2EKcEtAhg9TuttzVFJLUpZy1HSYALwy3Mez2RuWzJGaxKMJbxjoqXkDqtT1HhXL4GSmSxu1LpKyKPzmj",
  "key26": "2mGwYMesDe2HovGsZuFHoi6Xo2sK7HSwZg7iSkjL4rDnHvgdPAf9APEeB2hhxJZF523FxZ4u69g5QFzRemvJpsWn",
  "key27": "4Z5rE18Ynvu8rwaAgMtf3tTKd8BcnRfZRB544B3MwKiyy113BeRMzFbrbvx1f8D6D7Vi16XENZRRsfFd3XWKAocD",
  "key28": "21xdngKKFEtNKDm9NQPDHbpdXCV4CddkZcUD53zVYp8x8Hs9GfwdE5447iPjMNMdb4wYs56JMmLmyX6JHzcbx2SC",
  "key29": "4XeeG713NoesumWjhKuerbptaWg1UWJtT6y9rFeiZzFYiVYWbBwtmYhkp1YyWA6WVwfArWYS2vTGwrCeY2NAPdWn",
  "key30": "35yYMM9yUEv6yanw7yiEMJz8y82GKbqmNCrzBV81bbD88NuAjumG4W1aF2ewxyFj5PQyoymg8hC94qfd7ghBvQ2z",
  "key31": "56jMZsoGKUXAe8qoEV38ekQghMUybkR35q5WTmTiUpyFqwDiFJ2UwrTUhwiEuAmDifBLWE4VeHZqbNdzZuVwLMt3"
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
