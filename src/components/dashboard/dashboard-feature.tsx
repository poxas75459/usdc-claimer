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
    "56ezaEHSHX4tWe2k4ecY1eK68YuD4ZRxZZckkCbHNhsQQGJiuq8AJxWD7wqLvw4p4P8QKLYbQuJJFyQK2Jds9cpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctA5bQgZnGw2Z9ea5v37N4L9VztNkYnWXqDWdMbKN3Q4Lw1Gc6rqagSuEibZh6hkUAQes1HbVbeVjfcf6DnQWjd",
  "key1": "249JenruA6mdQXpb4gfoefaSnUD7jkjjYBZTdNa4WdHFKKaTUAvwCXBmZtC119h4ofVMWC4xCmpKC5PDyRnEJWK2",
  "key2": "vDMArdRSwoPTRPRb1uG1W26WimFy1js7LtpeTixM3WhJTLk7J2oYTJJRpR9XVaYKKRV4XkgDzgVgdfiVV8LPwdY",
  "key3": "4iaueKWkVbhad5sBXE2gkdKmG7wHFMzNvn95AXiCxDnCWwrsSBrgkD2uM4gR91JcD34LermQ9gEYWczgwjur814Y",
  "key4": "5XgytnJmaDxVg3itAtzGEhwdUAVP5UcHLBd2diqu1irRMHfucLW2YyxzdvXFKkYnQr5hhFymPMSx7dBVsXECwZvg",
  "key5": "3VVV7cXXa6STFGFSNxzuP37RwdxzEXJjbXXbBvbcpDkKWJYzj1NCVyuBPaJUmSZXW6cxqDPN8jJESKH7c6pHwXig",
  "key6": "4wtZTZMqtyZaaef68J2v9YyepHY3YLRMn1jM4FfYsWshf7J7ztntkdhAPQAX67eLPdKt5XbkkrzpNg3SZg1wpbpJ",
  "key7": "5MKpJ4m9eg6AJFBBXnWDu2RojU3Ghce6sdrpeqncn7ddueEQP4r6ZCmV2LUTdYRp94iRpukE1n5geZiiCxGueuN7",
  "key8": "BMeBh4yvJezdU1whAUNq7dTX1kys4H8cWLdg6sWc4b6CQoHddLtFaPQLAbCcQnqkhsbfMQcQJeJxUFbmcHk6QXE",
  "key9": "2Nz72gdv89sHxJK8HjRNRkdtXQ54e6YKBKL1aTHeGkmCeFVPwTzWnn7pPWUUzuu2T2RGzzxUZqFf4y21H317MNNV",
  "key10": "46sXL9devTnLF8LjbBJBSzZ583qbTyFuv4eJe7Aui9DHDbkR8qLaqJz3zMD8opU2exfNBLh49WMvTHYzxKrCWsdv",
  "key11": "4jzVSw3L52qf8smTx9twA6KFDYiFpq1gx8oD5wKLtgs9zWx7XsqPJXK72rrdB4dgsKgUzMqwkoHS2bgg7UpGUTLA",
  "key12": "e5gcF9y7w2RwZ7NRtyXwMxnbGuwnHaByYC89P1iGJXRedJrKvRwcpHjzTKSpFLsStfLvRmA1EWqN74riuGzaAEK",
  "key13": "3J3zMRUKsvCgN8pWUJ9hyimNg1iUMr66qdjzRJm2xTJAravHXMeioH5rwpXpcc1bPo9Leb2j5Gp9RrChAaG1U3iJ",
  "key14": "PMZxvdqMy9NDZVyfdDn1S6CkeJ8Jxj51ZERaH8WF5hqruSJR7LTVr3sMB7w4A1Gq9WbAi1etKHHNE1tmBd5baSc",
  "key15": "4xX3yZgMjXf36bnHiW3P46BX2ymQyA3n7XZzq9Xri1QgdvZTiXjxrPh4MTvosYgSvy3PVDRquEpoEPnLtXBJtdKe",
  "key16": "2T4TEZE5vpzvttf178WFj4gseiSQzv43K2PETVDFozPc4JqbsEnSnTHGLd4ovDpbfgpwqGMyrgQotAPTq9qysyvT",
  "key17": "4FDpcciA6kqyxkVzVEnEHviutPb9W1BtphRiV7R4wchrENTa3FwZPMjGGjig3NVKkGX5f3CsejVNz4h5eGA5BiDc",
  "key18": "3M4jDXeg8ho7kLaf8iA3sT9nS1iqAVKuny9ecJGkbkKYihP1nnfS3tDrnDT8a1ebaP2m9N9L1kZDbk4TEL6Y8cBD",
  "key19": "471TEfycATzbbhUemyGrSiuALfJZqmiLM8FQ2G1CnNJVb9BqNDwSKkEXDDehSWMwKEyXRE1XpLqGnt2nicyrm2Ns",
  "key20": "38TbAq6v1Y414kjBKFrcGtjBZXekAS8FSVgFu2XEHjvKxYP6UiLNa6q3CuNNsDkTN24YYoVBHAEGvMP4T9EX7ceH",
  "key21": "crHBtkN6eubWvjZEcuj4JNJMeM8DbkNg1j4n2vDxRCqeeQ2ojdcSUce5fRemByCeKzGC3UvVC5QzXAUwVn4PyQc",
  "key22": "2RiMNQGUaeQVd7CGsu8hCXTr3okGCDqpiMm6a4xG78Qv1MwUbdvJBRTgRYSkzWMwAsCk2ZGcsDHiNMhycGD1qWaY",
  "key23": "5ysfoPWAuAM71gr1upVYKfHBpiHaRQbiQPRRLgeoLeo2A3hsH8Q2jdV46xJCNiQ1kQ8JxFhtemc83aGmjzm37CUY",
  "key24": "5jiHs1EsU3KmpyYYJhHJkeAEfKTcfq3ZHQ3F2N9KQs4jSbr49YY2k9Btt8xvp7CmxVnUQVfB8pz33RDkUogpnrfV",
  "key25": "3FgkjBwu453dHY14bVu7JWDGhbak1RSZFYKJXyotU1oJapsVuLJsuaywBPQnBprLKSt6UFUP3PxnZQvrzzouavPv",
  "key26": "iwAopfmY6g3AqVKevuF3KRoF8oiYLazxqJS8F43HZKaKLyCXQ6kY52Q7aJgBdAuGh4pKRBTse6HiwRBpuNXd2hv",
  "key27": "3FXVLeaZ7tSm1jeEmdwW3qRqWYgSdmJ1uHqUWPidKp3qMwYcSBNpHtz7Wwv8ted2DqcDEW91dj4zsLdUTiWhboy2",
  "key28": "JNs34YnfHVojoYrunitwJgS1tRidKBw2r1GNuP7q8CptcxYsyA4WxgGXkqUy9FwXZPGaQHDdxqrVSpMfiPzhJfp",
  "key29": "4EmRkedthfjY7zeqVyzQiLTGjsbdfkGjL6Q7HkkYuDJpYMD47nUNoAE1C1TvqdsuRxsoiGgqEDkUNv9LVsCBTGzM",
  "key30": "5d6ecptbGKk6KYczxFHAbUp6cDCuKs7s3TTSnZ4cFikd3aLqZXGD2wxsYDPd7YVncVjfJS5F45keab53VfpX1aq9",
  "key31": "5fLE8kAzf7zjV8TebUjGgw5ELHnSKzA1VRHFzKzHgLFSdeGjeJXWo315o8qNNuqtSK6dsGRnxP4zYg54TAKBk3RF",
  "key32": "gbXMQ5Sf6oPNjYjov2TcA33GCqEYL6G7DgiGezPKFAjb5WxHenyp9pfPy2yQDsNR8rdkNDxQhCwyT5dKT5LuaPU"
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
