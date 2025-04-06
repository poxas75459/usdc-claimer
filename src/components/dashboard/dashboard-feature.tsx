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
    "4VsBctS3Jg2MGYWs5qSRhaoFbR1RWbQwE6oBmnv1kFCSGUuXfPqhJcByortRdeRVtYXXMTnReCQrCLdMgEigGJUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gH9dLAFvp1BrZCgeoL7qSnxVx7j3K3dw577AJdfC3Za7QUuhsSdkES7GkwKReZMUnnCr8xQBV7BBJ3yGVZRWLQW",
  "key1": "3kwpjhzkiZqx4V6KgdUQZEUfcuGV9o4Xt55hq16gecNYNd4nrRP8Y1pKAG4XqyeCvhT1uxQEb6R3Me1aEJ8DrM5E",
  "key2": "4rHbwVJyrCeoKLqjVoH1k9YGMs6j4fdnonxsUsmcMis6QQryrisqVVNn9cpXevNG2z73VvcRT99xEMU696pYmZm6",
  "key3": "3frnnoj5zpfNJgzFF1rLWmFsWE5nW2vrUtKrD1XwJatHvVSDs3kdrNfLvcXxVhpB87RVoG12u7nJ8xjCiHapy6T",
  "key4": "5whemfdx3NP2awLEF9c48bgWnRamhYNgd8wgoy53c8MCbwhUDTR5YrfD485vwbAaQYXZFuchdinkorCg7zmtb6Uu",
  "key5": "3Qhh2NifYhmzrLdwymfQQA7NQ6PoHgPTQFbc4povFGZJPtPFR75HJPvTczM3Fne4sHyW8duuqnPfu7Ws1sQ6BksG",
  "key6": "3TxTJMHY3Ymao5A9uUcWoZkZppRvQWma39RsXtyB6t2XwELg5VoXqDJ29t26eKMjeFiRoxr5on4VMYQa95151CWz",
  "key7": "4MvZD6XGiA6rV9gdWGswNxyhMj3PCv157DZB6NW48LZVteF74eCS7SEnSmpzhpeN28kqd562THLDJtzXfc2pkQxA",
  "key8": "3GTzLAF9wgJ8hoT2asuPvfjbjNzyRP4s7vN6m1KZQFeQgAJ19WwhjhVUchFxo6Aig3fr3mso6mgfv2HQduHCLfUp",
  "key9": "3UtGjpL8Ah5DQ1CwGvxvJ2XjTJbe3m2MBMwG1c6xC1UHMLctKydKyTJgx48VttbyrJKjh8cF6xhKQjYaCJo5XwNq",
  "key10": "5eEqTUekAiYioh8FKufDcEKqh7EnC8hFd9mkbRW9qWh9eKKNQodK7dL952LYt8tFcVZ4eySb72iuxK22eUbNSJ6S",
  "key11": "5xL9GVw615jKnJUgTTDhqnKzG5b2A2PmJx7qqQVC2hv9i8y6Jyg1RnQTBrgXC9fnypdHVhiuUKEEQUVNsJXcD7Mv",
  "key12": "2iFTwVZsSoyKcie1dCxRHkKY6HsDUN39yiPf4bhBXR4JWuvmpyzK2TEYvShxpiiKXxpa1KBWNYzAAmsJmYchqzvy",
  "key13": "3irAbkhY6jN1x4hspL5jcX55S7VZYUFrxnPeWG6nn4nDEMdnnzuD8CoFGUyk4aPZiheP8px5NoCFaMXpC6rpRiDY",
  "key14": "48askcYT9iP5Q9C99ZDtBfpHUxs2JryPsfcRm4jtwWgVjfiwm3SVxeuYPXWsEMYb6awEUL7NwgjyLBvGLom96snX",
  "key15": "5jJ7HSKdpjfVLqdA29VfMkf5fbjw6m2Uw7nazrWk5Md1ThG6PboaWJHG14qY21duDBkQzBY4rpGmYVpNjit8WZNo",
  "key16": "xuYkS7i9Aa1N4yL12KWu6jrWsPp4KBvUDrBBqGB8ynb8oRKrRmDUotstxwa6AfEz3odvynRJouuiD8cVb99m9ia",
  "key17": "zerz1XnDrFyBkAW8SnuT65x3Fqgn61XUgcwK5GEMYtzjR28f9pjDG5nQVCBPnM2KncYtXohvvCC1bwW1yST1ofM",
  "key18": "36pCYuNi5msAVnwCa3dULYhHePMShDeGfhvEsWEJDxBXUsYLiZCEtvPBo4sA5VLeaQYEkkKfrS2utxuc1uRVh67p",
  "key19": "4ZwETWDpWZ7xL7FV5Btexryg6nuVqeC6BbiqrpV6Cr5UemN3ER7zHY5dzA3muP4SCjdDYDGrUXUGpUEdDL6X6euY",
  "key20": "5fAN97jZ1VmjhVNKmmWqkguFkpMeX99WKo9gxb5tHi2JRuM5HekGTMxatoKB6r3nRWsT3e9m6gp9PELJZBC6fJxS",
  "key21": "4vfqxzkKfF9WeEihBh8F5n77fMXFiSMEFHeMiphjKr4aCcbK74TfJ3tabNqvH1jeSG3qYY7cc3amgKKmJjy7j5rj",
  "key22": "2Jr3XkUHN53BrkE9ktU5yRoctcqk3U8vgaEtrvJdRSQuvcQ5fJLAEdaogRpDkJN5CbNdnhAdKiG9ChJ3v8FAnBGH",
  "key23": "2tF81thM1NLKKc2hkCyAvSedW8AanZk4PiebKHoTjGLsnPuTroFn4pf8QhKnnxPvhdmSMPPUttiEYcH5P5A7iu3m",
  "key24": "2Sj5SxYYKLjUfjtjVZdhGgyGTbgcETVrHjJ5osuUr5fgMPWG1ocCb5u6YTVMsepgkDudPv7FwTDcN4RxNUArP8Tp",
  "key25": "oiRiW2DjmzY3eKf9t466AH6xkUTQ8c9Eu4VAMhWoMbUgfBPZHdKUF2k7AbycGmsbargjYroAPqnUeaqSVvGa9he",
  "key26": "3SHyayUoYAM1gdiezCNyn81ggsSvztrVpDc5bAFjMYcJCwLNmfbcrX1tKKfkBQfUF5aKVLQWsgKUsg7KRos5HZZk",
  "key27": "2gCp14DFh1hXW3quXPZnr1eW3AzeA3NzybjB31MEpUg7qCBvHw3hAoqnU4x5jwoJaZNhRJMeuJbvw5TjUDj2ReL8",
  "key28": "2nnaRL4T6nRaoRXxoeXJ9LbzXJopwmPr4WAiYQFqpqWeTQkFnPUFUiXWRqn4m9V74d8WY2Mtw4Ch8pFtq28KoC1k",
  "key29": "NdWGyM7dZfwZ8bm4X2w5w7uQUTMoCV7ezePEHx2Pes1PCTLAvTwZ5VPvEsmxHnQdkFL5Jzo5c83riiDpRQEvyda",
  "key30": "2bFfLQ6ChKLhsBfFpXL8Mt1YbkLgFg23VW633ggPNgzqT2D7rZ44KYqTASQKy5GQtfYfqGxWxJaTb3HSUJuJQEMQ"
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
