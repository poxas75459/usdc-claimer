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
    "5ungBfobqhwntPV9gZA7yDeqepKhh4pAJqtqfdK6dvvxw47PwfekWjZa1vM7z4cTScS9cMS8QfYaUHkmWYgVu5nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hiXRbTEGP6ngtYh5nNpi2YVzy8ywsHnUnTbNV7pVvyhBapUSM9oxHe1YWa7c88MdzTwL7xZZXTDf5qf9XM2BSq8",
  "key1": "56cZiwMwUbsAPeK9V2Wir4reRUFrXCN2ZKiz779Dte9FGsE1WVVUV7R88covZFiH1rkJZ8AGjSLPUywyWdkE6pJE",
  "key2": "37BZ5Y6ho2SD1TCgCwPS8JicRCHnywHbnYsFdUrhftcm1deaisCMZsAx4rSwnNX4BcyQQXERU6f2YVGwyrWXX5RS",
  "key3": "4iUC1VFct9mFpwu17bCeVs8qFFSECZfZhMRVYiVvSPWMrHkjrDKcCdpTqpQsaTUDDjsayYYBF4yidz1xQTNd9per",
  "key4": "4Fa8wkMxXc6yiCtKgpmnoiVrorre3Qcmo5xTHmYKGEHMNDb2mtUWGjrkgFezCLVark2k6nGnzKoA7yHcsVVbXSRb",
  "key5": "VeXdXCyMFtFAYgmZh6xEKPFg8J71Bk9fKz11nqhJe1tEFiNas1CDB4NEgDxQB9fMrrEbBqoZYaBhH2krWhiHeRs",
  "key6": "s5MnKBuiPY6Mh7oNMzihHpU2qKUgWDVVfUjiekRBawdkxuWXNSb5JLXvmQRHSBZ6Ld9q7Zbht8thoduvVXYbzVS",
  "key7": "1CPVMmChS4bTzc8Enzh6Y1qqZDfQWv1jnUDyTVUViPb69EMN5K5hZtiuWdb8MreBhcYQhyaVHKuN4AMcAxEUuum",
  "key8": "37TqHjn6YmN7PC1jcqs31KG8Gm5E9qFXSevRuxZ1oRY5K9g8CFYbaS3Udcc8bDmu1wZEMeR1MPcMz2YLKHSF61ct",
  "key9": "2hH9gBLkDhK2EBk1vsVfx8ky7dof1eTD15bgCXX6i1A8yY8DoRKFESNRamPYqaJvRFrR4VCDnZpfYNqJ9uPAJcAN",
  "key10": "42VoMTNcpQQw6bTTkw5WKMHDWJSEAtxMi6Rr9nsgAqajXcm5XQabueNYTW47SWWmS6bvvJnKeepShwm9KYsPfCeN",
  "key11": "2AGKs7rfxF5f9TB71rEMVdnD1MtjPH42VDDXPy8TBDeGrryKGNR2UGKr7gVRruUAspoJC4ZYSsLKgnHTJ72mMmPx",
  "key12": "3HC9fpp5QwHMqkArpFp1KedGojVeNjEPQcbxay7nxGCvRb7H8QdLH2MYzaNGM8Qe4CLF3yPAkEP4HMPxAWPrCDNz",
  "key13": "ffsSzNPqZjP8Tvxv2iSUkQ7YFZqk1XrmstkWNXsnYNA3Ux5Cdq7a9z5iEj62vAMZ9oPBFT5SyWRHH8QyHccM3ss",
  "key14": "5USnmMJymdKFf2jP2Eom6y9553yMtR1XgQZfeHtF2a8k4FHRmXhvbjauXfryLhLH8sPVPYETGfoUaZ2B5YhNrtQY",
  "key15": "5Uuvw9MoMqJmruN5oUWxKiyf9jLmbKX1YRPBzyXF5eCMAEumVmFRFzCnVcaKxT5TjXMipXSoME8n9b7JjV2jgV6k",
  "key16": "2dDKoVxriUuvrcLkgFnYvW3ftgZtqnXKAdmFT5MCNiYsVaRtzuuoW73bU5isPUPpFCr4TNCkqiAVB9DJ7gVKKr9F",
  "key17": "2vuToZrRww6WNQa6vse5FxzpNqEFSfwRDTYvgKXW4jWPZKbQ7PiEvuv8h4TyTN982KKaTEzsfmFo9h1EEJuhrgka",
  "key18": "2pueSkqRcre55uBw5s8V2CY6eCQ9xxrsZ4TPJB4qixYAez76r1FiFr6seaXKBfWrRVfw1caXDY3qpj7SRzomcxWW",
  "key19": "4b9Z4npxfLibUUoDud87edqxBRWG4KQ2ZcNURJpRksiAXJFvCE3PDxT87F8DsYmDkWwciiT7vacbKYmKLnDaRW3K",
  "key20": "4kELTsWhzgZtdU6KgHugHzUb6AswEwxULWCFC1ih7FizMDvsGg7S69ehjEnMbYiUiXmDQNtxZ1sMisbM9ZAvpDG",
  "key21": "wP16zA4V8AdqnEtb8kmwRe7i99izc6wjnS24WpcxwrBPqfgCpaiei1CE34MZz3ProptUnjNADwaryTREJUryNtS",
  "key22": "3pxVNBDZpRrtgHBFFxC5kiMxUE9ah8pXN1BGMh8j9SfEwmT1THwu8B6VS9h3n2GiTnpXMDdgE5ikxMCP2Cb8LdF2",
  "key23": "65CMoc7R3iewzeBvdzRgtdHyZ5eUWj6WNGzth5FjcPcWsLYPC5Rc2amumA6oPeRfzw6uUWd9egLfKPTaKUkKWhbH",
  "key24": "51vp4Knjhf12kBw2kWRFJNiYUzPE6L4ANnxrbzdY2r1bW7z6m5QSNyWYxpxQkNKYtVJ82r2nW2qGst7szrcpgDhE",
  "key25": "3MATd4j2hQNjnqm5uiqPJwuvZPW1S6YcmYTDehJex7EyqhxhXqopjPkkDJL7WF55mK98umNC3DLDBvTdhDvQ13RX",
  "key26": "4D7xzLjvcsmR8vhV18axGKKMViEVCMaqys9NUnWBxpTZKkyqwd6yf1m9piizwcpBNvtqW5sCC7Wvsi6ynNkDMqJK",
  "key27": "cjcXJS14aRWJrhBZu3anWmebHtGpAvLxweXCru2UJyyMiBvaETcTaDbAQKK97Laev5asNDdrHNebgXEhWB2zQuw",
  "key28": "5ryT7mifvGwimRuNm7ynt8rTtJSYWSKhxeGVP6ceiY1Tx2xkKFWYjehUqxREt7KY39BK4Yjd8k1xj5dJ2AorHV1i",
  "key29": "5UyYzP4Eb1zcU6CTfYiCj39RGTshqn6LMJA12naVNeB1wzhRYqu4tvdb8T4vvSQ8Wn8vyezjYK6BvUPGSzkBRUtz",
  "key30": "2DsstDCUdtzovjGh2xD5EP9NqKpBbS8Q5QMnHNvzaRQJ4qpEnTkTC58W8Wpjg6AT4qWB529B4sP2t4u1SeL3wyw1",
  "key31": "4jmiRra8n2mTxAfztKPapTVU2Sm8f2veGPB3o9DTfZCww6k2jS222GnEcASqKeVe6guB7UnJVY2EoCNBrZ6VQiJK",
  "key32": "2XKov5sWqbpVLVNstvYx5Sng2jRPM8TckJtFmkFRippFgtDvxZYYF8VhueFsx34z2xvGdNzKUojopbVDV36avSqS",
  "key33": "wRNBc68n9zdNd4YemSj22o93NkBFGhsz6QhPBBtwzdcNPaM81xJm51uotUaHgiCti1Pt4gwCsZDVhT8PchGZw92",
  "key34": "3WNaKu4bttois1BqfkKwto761Pvqkgksvs5vFonowMso3MZF4esXQDSVRg1HJSxhcUPhVGpERqB1i33g1SdKMe2S",
  "key35": "rvNVC9rwph3w957qZEqt9JvVweSdbFf1YJ6cmrLEK27w1Db22VY5qGN5kzn68VVUBk6Khx2KnhaHXjN1gxesDYJ",
  "key36": "4su4ngjbX75U2GCrdbKecybn6PEEzXf6o4ziN25g9kE3Vf77B1h5nqSZoJtaaDDYSwpKM6ao8UMM1dNj3bcbWTJc",
  "key37": "jx8Wxf74EXev4qbqUb1UQNxteqSne1V9Yptv8vhpT8wmEZWhoZWn9EhMtZW5ysrSiCSEG8LJ2uKUaWG83FvD1rA",
  "key38": "3MKiq98w1KxJksRP7z1oZE2WfNYT8V6n6ybXKwh7M7W4EBvvAa87Jqd1kLzyiTcpDTgANbynDd4257V95NdXEP44",
  "key39": "pwFRr2dDm42cd2rsSkwSZL4jfw1AJrYycnRb88sx1GY8Y6r677KgZUHDMjTWQbLkrEYq5sSLpWprKmydhx45noU",
  "key40": "wE8yPnw75emEB9kM99K7BaFYQDGdkGDmFXeqA7UAfFtPLwCwzbhDLeT5J8sVH6WfdRCRDMfkPyBp4zg2YhJMXXw",
  "key41": "5og1yUX681GfiwKXZa4F5zThtE7TuGD1zw7chX97hWf64bVF6LN1KkXTWX5HUo2qF6ECyJdJY8iSTfpQiyXPEMWW",
  "key42": "QdzWtHs8sgh7JYR3YTMg41UAsCgHbdBr2p6DVhA8PmPnSaWjjWmEVteNApaN4NJBee9Pi6BTcWdJ4LS8EgCmiPG",
  "key43": "4uUudSP7PwybJgt9nwTYJxf6XXwaDxhJq3nvGLADMYUdQ3kU1mo84cTH7RW55Nr7TFN9GZkjxqnPLwsENaWDkiqV",
  "key44": "dVV3XRAZjgNfjrWZkzRr5ABJxejbvzRDHjxNgn5ox5ndr6ApHB5ELMBfNNEPQAEFoqv2SaNDAE8DZcTugZ7fCrH",
  "key45": "4fVf9i3UKnn4vAU5NSRrwRwqrBbwiDACAyQ3cBHBgH77AXKzyzfmAJqkKzP1jau9c2CcQ9pp953XYK2qVtTj9z6G"
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
