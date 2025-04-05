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
    "5QqXGm9TPooTx47JVx3Q7Sge7t5nTZ9k7PzZYNjpKXFPzu6Bixm3jTJwYmMKacKboHgCHWwWAexpADmJAY4zxBAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zJXNNkfBxhZDAgEfcspK8wRHn75iYLas1LUHPG98TQo9eGwSuuyRrihQxJJhoo8gLM4Mq5axECFYztNtsRxeBRy",
  "key1": "5w8Ekgp96nJfpL9t66fctzZV5GTznjyLr3vGzuyE4nmAixNVAqHQUorM9XAYfVak4WSfvRmM1pVfHyYDdBy7ER4j",
  "key2": "43Lk4tCBXeqs4G2m8KiPXEDh1hFGSeLVVMLT8Q3ZJifoAAZBpW9YhaQf3TwmfgoNXt5h5AyigsLBSL5TpfP9PKTi",
  "key3": "2GGzDf7vLwy7q6hT7e1JMoTLJwQctaxKZoTWqXiTZd3pv9e1zoie3qTSquo2WQYBCcYckoDT3AQR11MRZw2ZBTNd",
  "key4": "2zu66QfwcgisorM3YvfzpuG78EwuWtc81Az9CcakZ6cNBqwgDdnZULbVaFRpGTYCCMXwih5Ka4TkiAKG71N7LNLQ",
  "key5": "5rf2WryfMtSWrapNYvjYPjmBbwZA599x41hzXzzp9MXEWCmx3p8HcbnWTgonM4PrajVvmtasu6MWJYCRZJb5FokK",
  "key6": "4c2E76hKqWCy5Ye5pghTv2BFkEtT47emYwcWGbmN2FqMRRFw98bHFVnnTd1pRHJ3uEr5ZxJBuATDKgDV8UJZ5VxJ",
  "key7": "4neqxq39f72YvyimC3maiqh88X3K67EXHRVpWWKNpskButJNfPMVhoaKWrfJLxopaTJtsNrZ3ng26oNxfb3xrp1s",
  "key8": "59BVaU317f8vmxLg98bax9736GyFWFDTpc6dWRb3UrJxMHtBQDT4K1MxZppSKeL7hHZL4Fxs6nM6NugCjf1kDT9Z",
  "key9": "eSHdbdUUub379rAc2G87iUmen1J2UjUvUj2JCKM8fPwyQmX777UEd1BX8dSzqcoE6HSLzui763R2wjRV6y3ap9k",
  "key10": "4hbqeGcbywnHSZQkRNLxxinVcKLHYCvLdciwbNNDXaDgb3aGnfp1YhdRXWnbqKqBpe2MspJX4DPeHL5Ymk1LW79Q",
  "key11": "2F6ECw3eQgpzJ3vVmHKkfTMZqUWX2gr7piQjMXgEapR2zsap6HYou5qRDhCvsfwiNeZZ3QsRRNjARundn4q8xzJs",
  "key12": "2conhjK2uvL3RSChnyS91r5c5pwkARiLyCoZ8Ea5DpJc18DbYPJ1v3T5BJK98Z9i8Djy5WA2qZacWprLXVX4Mj5M",
  "key13": "2eE8LkaCHUFupAjewpzdPGJVnHRA5eryutihfjhTHyiQtRrVZLQb8nPRB2QFSPSS15x6NDmCKZvMiq5KTfpq7zpG",
  "key14": "5YbrNPPBjdUNYsyuFQTdpLXFph61kemDCFBEE1wDiEwLcAWTK2MCBrneKhmZA7c4ackYYZhbQxXPaNtptiq6VqNp",
  "key15": "5GMow2qFGLnU6JeejBhRCcKh39t9WQbPSHu93AjQvDtxPGWzqgoeSZNgcQMu2JZkB3Mud6m43i4s9vRBPCR87UTr",
  "key16": "3LQkY6bJZguFHsNY1qAWgbGNE5DbNukVW1DkXrQhHJw1DmJqxBhK2mLMCB6LAdxhdmadMex944RisGT5ZEZVjo48",
  "key17": "2S1s1Z2dbjrQEDuR6Geg9DVmGAJfzBExCTrr6PJHkpm6nD9uTaspF1h6xJtMVbeZBu5m1hPuCzaf16hvhLtg5GGj",
  "key18": "gFACmhwgWu9Uh7HYWMtXP6TxiPoD8WGyiB9vw3AUzgJCr4dC4to7SbaLz8ir1CERdveCeqm3EreaYdrA8Jzx6YP",
  "key19": "4ifBfUbyRsyQYLMXk7YVeQ8pd4P5WttEVTMTkiz7BWEWQkhUXVYwjMAKefaoDUnGNWwi5ZtBhxrtaeLRTxWKiVpY",
  "key20": "3Z76TCLwUHGAQ51cb95T5E9UdLwhH3NLvb3582FDGTFY2V36d3kqiJho1Kxn4x7jJRW4mkinJgK6S3g3d8c6bYAd",
  "key21": "4rQ41RYiZwZdpSgTv9KfcqJZQAzTZ1r9dfxFEMWzNBNh5UgZDhLhU2AjixziNKecmrqxunAqZStx1nwKcnHeGVgs",
  "key22": "2tptmCRHS2eHxysbbE8kC6US6sqtTwiPEpHMVr62Cb1ZVAfXj6ZaD6SJPgFueyXtPWUFUB9t1gNJCWdhKbSPPMfx",
  "key23": "5xHxRe1bjPyU5CD71fic3V3H9VK3szBkhWHkj8wjVrTo2U95M4xFXrLZnVyjD4Wrpwr3nR6k4gdXxttyFsAjHYxD",
  "key24": "4cDjLZt1s2QfXZF34HaoHuGEKqpNHctviBcGzKkTo2Dv59HipNRPsXK1pJMePuTFmpidvQqSwGDJx6FWnersAi9q",
  "key25": "5FjWY7UPyMSTePAv9JsbSvw4DRSNeVSyvn6jX5y8zFSNR5aMXwugwaRL7gQUKP49Z3VWfR76F5C7ionhK27mQMKM",
  "key26": "4nzkyZmnoxAcNf4MjAJPGB7RstC6ppRRXcYj1zAviKQFXzxzhygXddtCYZZgjQkfotZVwvBLz7Pdg8hDn7sHZjXy",
  "key27": "4Mzob7rEYcQrr8UfAdDgAhNAXkFpLkUkMcZKAGUU5Tt8QHBaMFMpYuEtomFtMvbaoPjsknFA5YsdXVEBxtwHcJak",
  "key28": "3gdP3qHr8i86EskRkeTJFCNqqXLB93smMcyLXRniwyUjRCpceekc7YGmwFnwWhFBbKu7qKvdcRqC8W6XLGFBiJzN",
  "key29": "5pgsgbp2fqHSkQTGDPWkdZTSHsuxf3YbG841TxvmMQpScffKCfDnXNNMW5z9GcFReQq5T1SQXQbQxKdGqCEDANCA",
  "key30": "jw9PK8Qiwz2CvT9vrLXxoPtDWbRFSMBaNRUx22q4GHR47Ak1XbkzKgoboRfhKMjbTkgicFzswEAhM5MrbGkqi7U",
  "key31": "2tKjKwXLD4adt5f4efXWpw39NSCdjURj8soyvTJGbwbBrGcYmMwmq7rjMBc5q9XAsNrmSFXUK6L2WHMZPzZzVw91",
  "key32": "3JtCJeuCxnY9FUzqtCLjA7y8uPRxJdkeRpo3U71ydVDcjtfHiRSHheXBSbpEhjf5cXGpKXoHfwRmGS1XPeUJxsDX",
  "key33": "4UNtuLMSA9SSidXpEXoXTXc4WnpBygdjwC8aBKsqXB7u7WkCS6iT6QEeunmYEhnGq4yBKae2xDw7cfb8o6hVGvE3",
  "key34": "V4z4r8UWepcheeFAnc6Mgrg5z8hTCmTzhu6cEx1shepnEHctSZvk1SXAHwN8bjHUDB3n38M1TbetZqPRhEuAnk5",
  "key35": "2Jabo5BBUuaWqdxQHzhS8zd1CCNB7gijeL1N8PifCH9MGiMANQj8W6eQQm99W6px9EA38dHVgwjU89svXf6bwgzn",
  "key36": "2QzjWk8WhTN8PcQe7wtGokuf7Uw3mK17tnSvzXU9hwxyPE3LF18zaKzYeuJWqrRELxTvHDQgWPnpskUt26y4QJBi",
  "key37": "3euahnuCe2DvdJryrCe7DTandbWqryKzhr7dcBsduJvdNGYCW7YKKD3xPf47a72ddE2PTm9Me36nM41Him6hBdi4",
  "key38": "3hJow612JXCR9WMYZEwhhWRvZwcbZuryc5wFfKgtWzqdvGKqMqhQ8g1SpWWy1REXgtHexNui3Gq7VF2i7D6RDBh2",
  "key39": "5CJsZx5Lenmb9Ef7WrtvWizsVvpxhFfGpp3mkWteKgpB6yHKmrkzfsB63du29x7aemaxjrb3kidyBkWwDLyMeuMN",
  "key40": "KjQjNU1SGfi7iVNZ8DQeXyhTCef1JX8jyfCYKZDBtXfYyrfGXt8aiWokmnQprUiUuea2uFNhSDDJPqDmH8tZBGV",
  "key41": "42mRcdK1o18AsdVbYttFYs7w41X24nt7yVqNaTfDDRB8QjpqibwLBNS9jmH4NkB72MVLXs1Xe9MTSaD3qqKvvCRi",
  "key42": "51dwruw1Rf2mLqjZ8sa9PRocWxf8BMCwMcvmrsTLU7mbqyi4ebSF55Vp61a34ZXfovTqbzGzs31iAEUYu6PVEEUt",
  "key43": "35T9C2ZdCQFByEoE3FMfZAfcUReSSxPLorPo69Y6rCSyDtXmezz8pxArSCJrnx3gxG2ZSziwkGgTA23yUqQz7A6c",
  "key44": "7T41d8j2kEPWkfbuLie1fDGMG6fRMtbsYQL8p8STqHxNogQWX2h3JTougGP6UYj3Qkf2vjkMBTknr8viKoff1yA"
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
