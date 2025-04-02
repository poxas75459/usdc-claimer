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
    "2fZXw3JbQSxmyTfbQqoRu6SmCkekQ4UxUwA99dKbFqutxsfXmrvLSYmUkSFyPqbWAFHcN7FDPEsSgkCyySnoCG7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdxwpbRVaxByTL2Lw35vS32zbQk4DXFugZG7bk71APhuioYcAmjD92Wn8jUE7gA2ZumJSjL3c9GKUbAP8pHeWSh",
  "key1": "5DCCLctovdiBF6NGnWKZv1C8jsAJZbFC1dDXpaRLhS3tnREcqjsG46L2wzB22JWJc4jGs8fCsEP6Qtc6e3KSqJEY",
  "key2": "4chMHJKWYJFztUDYoTB4uyhBbsikubtvm89Gt8hNRFT1UhjmH68YAbKLxHHvnWKQBYUVgRTkuUNTfwJxuQjFKe7",
  "key3": "oDvs1vFdfTV4PDJaLDzdR6hwrLEg5tTdjKvgP5dipenrfoVDsv9gS4XguTrzKZAjLBxEBsFh39LfRMaW4QrD4pM",
  "key4": "tfBdMaT6fQS6Awrd1tZAh4yZ1ynBvpTmUVHvhjrNDBBKiN4ppUJcjcTzkpoVGL7g6CxbGbVv5Ub7RnW1giH3MQA",
  "key5": "4L8JutZ6LWKTBWq9HmB4HMNy5oTP2KvrdBZaYCZ9KZ4ddYL2qxQMSLjPHuD4fhLQ2oAiUMLryW71KQZrNrLb9PEe",
  "key6": "4iYVJLDTLaNx4mVTSwg3RFh16Ugf3PAvtFJsVXtogZHXGitcPAEmkAEw7YbVdaLHxiZFJFDtpJVcYLAWp2LWLvQf",
  "key7": "52KQaAiBc46WpzagFXUThEmKJXwX2rqsdeGFDbQYd6xZ54VXCH5mvMEP6KXt2H6tbBauZPZnrdbaHNYMrmcppkLe",
  "key8": "5whuPWhy25CXrfzA6DU3zvH7yuQcmVmi2iQxy5hdRGKJCsnazAmuKUoHj2o8wiJr2nHdi25N1AKKc6k2vk27Fdmw",
  "key9": "uFP4TLun6GuS48RjXBWkf8d6yoDgaMHx98Jry8w1zEVMCCerJ6XTxVuek7fmyGkugE4zzdV4Zo219MzrAUEqFuL",
  "key10": "iWDLs72bxqWzDLQnt56UE89tXATRD5VUHnrySymhiFyheR214aw9tDBdiGTL3kX7BSs79xW3rwrExHnRYFkThWa",
  "key11": "H5bUkjBu3YXd3sfCxPQijq7EqkqaMVaqJ1FXZATGKFr4R7wn8t8LgHkfBcwst97cVMxmq7iLZGMcSYfy9bSLYTP",
  "key12": "4SJ3bxXCZ45ZGCtqubVQnpF8nQZhhoqmLT19xFpEmy7974z73Cxm8db4fo6YPwn7e3pEiVNLRGyosmevNXJxCGMu",
  "key13": "pAYXJq97k434jsW9cFWy7A5BRVCvTcwMPmSsD3bSQwQoGyXVjGDm4v2FpXbXqoNDyRhuwGjCRSS8t5tzLUEjJKE",
  "key14": "459cw5dbhbFk4XVw41DU99wjAZsB5skwSx9WcMC7HCmKsaQc9LmDYkzsDaLjDYdgoJxiVhvLhAhWSKZCcN3v5opo",
  "key15": "4ieMoJj1tv6WPUbCZFo1B4CtieLmrfokcQ1piSnvnADFcimGFBosb5TYLBc3pHKr447tu1YNCeBjwxWMPjooqKii",
  "key16": "33zPypPrmx8TxwR25AtzrssSr1eXyAhaYb9ZcWsAb1sapDLxpFtmsaAwKoheKSj78K4w8iEPgianau9xV1uPqm8z",
  "key17": "47zEtuVxLi5JqXqmCZLnJF8Cz2VrHu7ug1AH8o1Z9uNuxEbmZu7LYWoTGN6PpW79f3QwH9xXd8MCPA9QRYRa4puo",
  "key18": "25ynUKAdk6Bq9sKwLoA18YS3bjotfzAbC4EiydJ29XKCsUNPvFv5wpcZNxE5DEBcd7scv6mShzwg2qL1GA3ueHqy",
  "key19": "4jj2Fmb7ZdcGTiX5GLQ9VaS5ckfEgfW9NXQjoDmBFWw6vCum2st4RxEwCqNrwR8a2iXsrudCbLrP7GsdcYsK526W",
  "key20": "2nji5t2291wLqv93FDS46ahNrLtCaMuvSNuFn9tFm9pmzkNYzVKYNDCxeAR3EfC58iQzN6qZRJM5w9vEPaD5krsy",
  "key21": "38M71PH6Sy9QozTzccAKc4Yn17w4epQhbDyZGBaqekMzU7BSmnFuhhViEHHPf2e3pXo2tyRCAC1yZi6Xr4SsEfCS",
  "key22": "5ah53tiJfXHF4ojpzTSPsa8tzfFTEAtgwAeqeBMqCXJX5zLew67dqV7gU7vCr5oTVjrwrjMg7QQQgzHs89ZKq47p",
  "key23": "Q3DkUDuqWGa2fzq5dXB3QX5xdjkhyuhQ3rx5BQ8tmZ7ojQWr9uoLYaV6pS7b3QmmoYghAcaPEWjRGJs6orV7Hzq",
  "key24": "HMMS8ZDJNybEGvxWLqGx4coTaGYieFWJVVbn7DHdPWgQN4MXp5Na7Mu3v6ac91gD63TNJxG9tfvpaftoZ79cXRN",
  "key25": "5YW2KCshcJGha95zkncxFvvQZPUPTEkzg7pw3c4A7n2ZPJ8sft2x4nLtWPE77Fxfg2Qp2ZSahLjHy7ZXMkULVmS8",
  "key26": "UxizUt9xjtqUutmvTvWGuQyUZ4fRYY5zfqGU7LgCuWoetDAxrnD1x4zaS4anTRuYyVnyeAYMAqUFtdLzfSA2PVm",
  "key27": "4ZFtS9gcbb6mWxG8FMRiieCBB3xMHd44sJB4EqbEU1YbNciUg2hbJkDsAdGFgZyiHEhLRiPWcigsDjSVjWFGvLiE",
  "key28": "ywXGfoptYUQ1jVwfHfuYXkXaSSrbiNiCF9VSRTZQj7We5cqijrpjA2uEmE6aQt5AgE6Ra9XztBffS5S91Hmu9xj",
  "key29": "5K2p5tbpE4YEgfYWBUU3th3uSiqNEeu2v42BAmfqEngfmesuSA6We9p6fWXeqgGphALcwQrss1RCxjPYJG2YK41q",
  "key30": "37Ab4MtZscDn2RTvpXY1mREAiocwHWV5EUcmDfJ5UMFnaLv9Yb5HeqtmF23c9p5FNi5eiwV4RyidogeJHk4WJn4M",
  "key31": "3XYjg72bTrVB7WGho3C5b7Rx2WhmZuj16a5MRtHnvLGAuT7SRc6A3BqNQ1TJ1ENs1Hf6sY1w7p454on2EGMTN8EX",
  "key32": "WJbNePeChUzonYYLFnFtchnEmk3dsQCLy2LGYp9aneoUtUJgvu6mJXZeMUUYob6tYkZANgmbcmC4p5qpuTHNT3k",
  "key33": "4FQm6Zho5j2ZotU1NHppYZaqKsWWjbnrG9TFxedw2un5HZ616wNGGhYVy6oTBn4AEik2bGLckPzsKGMFNcFdExaX",
  "key34": "2UBNG3qjkkJYrdG12H6SHTxd8d6R9NVzxDmuArqJjuqZdsEp2CKCMCc7azpsWcSi9A9mKmPWZ9HJHa3yNCLHy3K5",
  "key35": "4DkNgY4Qe8LcnLrwmr12s1Tif6SKVQnqRfnyAfff9qxwFvCHHZUXiYDjKW8Ep7DiWum89pzQNwJRSFZ5RJd2khBD",
  "key36": "5attGQ9JTf6HSD5QWoJRT3w37P3fvMBZZobmo8YyuTATBHfzeM7Dy7CMkscKNwNLsEUUsEKxEbd4tVRaZkQdabXu",
  "key37": "59hrtXQBxPewvLdXkE9YG12i1BZh3qyRTEehuUuBqvTuv7mLdRRkqxycHxNxojsMxdjvxDLPkMEzdVN9JHgt9eZg",
  "key38": "5P2vWzw4tD7U5LApFkaykjibmcGzJXJFyxwoEYXYR3Cx7www4jXARuaxAWRALDsVY6ymNSppDKMXUxSu9C9PtYV1",
  "key39": "5B7GDNLdLt74JbDJyfQZUqTYAXex4p6bWBHdNecfmjVgNxiezj5cU5hZSwtaU15BSPfHN2dPvRycxGrLTT6LkzFU"
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
