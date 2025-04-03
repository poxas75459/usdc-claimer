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
    "3DY4KGtEUUb4xcTFNWFajT8DPcrZXv5avjAgf5FiuMSUHVkrnvnjbyADV4uqHMuYq7Kn7KFFSLSkXEtYnS1o7cHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qo81WFM2mCn3C9QmT3qvQWTEhZLK8vF6a9QMuj8KEynUM328fdFnRNjAURvq2fqMEaHNWdhtvBbdNAn35eqsfRP",
  "key1": "5dX7pBGF4ucDh1GonM2ofwU3HUUs1e9U3Pd1tvin6eqFw1hNofnZL7P6bgGC3TqKuyaeToKJU868jRatF3Xazy7w",
  "key2": "3nCyVaBL3g7e71f5QpvMjXvQEk3fnnqxexUAWnyyoYLkC6piRM7WqwEfo2KPoRBpt3FHPVBvVGVTzraRt4ao92wZ",
  "key3": "4M7BezqtunAUWqYyhUMkCXvkcw4fYCk3tRAkEEZdQ9YkMMY6fQCjvCNCZJiU1ZqPDimtCGzdpv5yFLMZym2eReDn",
  "key4": "3dgvcxcG4HNzN9CgHGMiqKZk3eYG4ygXZRHD3sMxoLabkzjE91ThG3VR7HphiqodEA1JoPjoWnHXHWqsBJpMRMTH",
  "key5": "6xNgPUgdnxL7Ti7mxNYBX9ahe7nH1yRvJUpM7Vu6BeiXW2F8dppp8xWDTKj5L4n1ChCqN6Xksoof5g7NJTbEbNB",
  "key6": "5LQULPrLLNBciL9eqf2qbcfLSQy3g9UrXDPHfLpw4J65VEhwVahvhmg7NJCv8MFpJuY84esYjT1oqXqq9d2EVXNU",
  "key7": "1sHb2mCVf2ovjAZx8a2tpEfCreKKL5VqqqdB22CpGgjzTgfFCEBcdyZ2kpHt2ut5Swpwkq4fySx3rGsYeaGRb9R",
  "key8": "5XkNLc2hp3r3W8sYWmELSL2Ttj9BnV9Uq77pyw8XKRzDSu6NfPWVDQqhZucoM5HffSDA9KxmB8bshV97LWJH16DM",
  "key9": "5JV18TpbC1WYDosqEcV2Qp5EAj2upJ5dwf6oTS3q3m3SPgHoQpfCq3KKNkJ8Mt5SuQBavpMyMoCwRiYoLwCqa3Zr",
  "key10": "3NZU7LjfSPfn3NgRDcSrknYRVEXvGFNMmjy6D2sBJMN1r3YVA5VSVAknBx2WXdFaXUqC1wqC63fjVqPxLaURGcAK",
  "key11": "4XYPQn9nQKjKmRcHU8XEeTsdQcVKiWbC445ho5i8mN15dh7KYWuUMGKXHZr7qUfeTkLJm4Sf3ta1SMwwHKuZX5TC",
  "key12": "5X4pynjP7HeiX8Emp5AfsXnGT1jrtrH6P3W7LQYpBvWkDwThdDmN5iHyCimvb95k1FYz37ctdiDrG3LKJDBXAzNK",
  "key13": "59FEorTBxULwkUu7aeivSbXU7z8B4yGo9CorJEnyi7vfuvVBT55STeMmYwXuFrB3zvXKYtaDysGAjyfjqqycunhV",
  "key14": "tmToLrdvFuEpzf4ZF1CHzEU1yagfRPLjyw41eKLSxCMawdYZthgd1EHJ2AhuGnyurUpsdQGqjgm43ELxADGUjDJ",
  "key15": "5eBv2JNNcVqJRtgVJjSp6LddqUo5588RcVrU84Z7uYSMD1todZ26nxoiZN8au8nBfeKbWjWCR7oPLt67ML85d5X8",
  "key16": "WeGZczdCopxUzWbpxqCdiPCsZH41fiAdz6L8yEKjKcnYCJMXUiU58EvhPF1M6fMVzeFbAa2ajdGpKnKQ2HQyUvC",
  "key17": "QDoDfQuN2JBZCAU9wnrUMdnypLquAPauTTPfAMMr6UaurjmECVUWziNhDG6AkzQAHrZCQxzXkBt54aqPj32wDpw",
  "key18": "2zEyagKCA8cg4W41tyK83i9tjTcvSMHvqThRK2jSN1pTJueSCBEEoUpc2NXRz8KdkDNk1xG9SjKFnMagvjfmDU3X",
  "key19": "2S7scnZzAg2SeN7CwS489AYzmfKvEUxi4sksjAVsDcBhXAgp7A9JhtBdcDqNUcMwAzDVGzJggKv8eCBq53tJ2H16",
  "key20": "3zhbj8exQKeSJJTXAEnHYFETmMASQhkwacU5JUR5EzPvbiLZkywmrQNcuCfJPJUkepCcx4uNJTeChMUxsQuFTvzy",
  "key21": "3Ncm8mLmChKkREWK7K5Erp8FnZsrFpUy2QP4inzPg9u8PH7sjRxbcDuWLLAm3jUa8AuoXK4o85F85q3NJMyG4VbD",
  "key22": "5SjUyuR7HzUktXyPo3DN1GgnrKEagDUcKVReAYCt28gzvv7cSXC1qR2BhDgUWKyY6T6xhcPR2Xarjc8p8UN3X7x6",
  "key23": "4UBBEqBG4aXFpjP46jouUtm4x9NQX3EK1NPHiUhM1kStzftJqfFjziG9g7V7ujb1YYk4pnvp3LoEYAmWic3RTt1",
  "key24": "xPJTTUDy7S24uD9wbz9Kfc3KvCYycNcayLrJMDbqADxzhquyqYeEWYgK217JXs8dy4nUUPiotqgjx329HNRKddb",
  "key25": "3eYZm3tsN3pGqDzGyyAxFkixFugm1NDJzTvJFtV9evDfwns4RqnjWX7dqma5yrKQnT4jCcZAHYJJ3TUVbwVevHt4",
  "key26": "5ny6y47ZkRDtGN9DDdGVpbWz5F69sWgVT51H6gTyvHLAVrifs2Ss1RhtodgNQ64hdxFddes7uUDXajX6DFtDkKPM",
  "key27": "2K9mNKjyQ6E9cfC7k27rWSX6iPkAeziMZGLdMMWm8P1p1zDyJiMS8WatPGPC9c4yC2CHEGL1xAGwPbBD9e1eP9Qn",
  "key28": "5MzQAFJdNqe979htVQLTMWZbnZjUuu4tSsusiMmpMWkFhmnvqfTQPJ2oGVEwsFJXvi4WH1BRQwSZ9DooG9ZVB4ua",
  "key29": "3KNYwC6fikBPVEFWjiLFTtTzJQHu5mM7Y2waVLNSQRSDVN2ZMXEvyCDjmG668yHU6MXiDQkg8jU9fMSZNhYd9WLr",
  "key30": "52eErpp8oZnPaZ38GTuCTzL5U6ZssGuogtG79zWUGcYLu2YabQhzRzqc3GzctRP7hbFCVsLJtTwYctzgRBvt3PBj",
  "key31": "4LCcxj2rCsW7xtFq17PC1D4UJ5HLqSvsPDBbEmY5kHTC6KU9qiEXwXZid4bqCN1pY4QTWA9krFghv2LoPjDQK5nH",
  "key32": "2av34Xe4zfuRHkqqJbraisB6p5ev8YhehyumxeLvdcFu4wMeCkyAUJAWwKtDCK2rnQnBiP8KCiGvwhs1EpLZwLUi",
  "key33": "56MuDXXycwsBzpLjaGAZpFRmSBRGHW9VUXLdEvUxPbo7Zmvv6ts5y7BkSquenEhNZMcsiZhCDiA2kbqurtmQfSSE",
  "key34": "3GSbkkJiYXCixVHYpAPWumQDJQ2TuamjfWP9TDAPjKkG7oFDQSdpYdCoaFy7sWKKEHsyBnCGmhScFksRujDPr7Xd",
  "key35": "4V1kkB4Gws8crwC1P3y6WDwMhLibohW51VeEF3t6RE3WMvmpECtUvX97mLzn4kyUy4Gt2tmDcjJesoz8wXpmEoxg",
  "key36": "4fCGi3sDmQRSGH4vHnKKzY6Me1fbYKAcW6KK2ivNgev9ecgkCGMXCgfHmJfFGrtZLpKghgeoD8mYCXhemDZUERJJ",
  "key37": "2RWYKSd2G7wEJvGNAeFHiwxCMcJ9ZcgQep3ShCwXqQDB7Qdtogx91SXy9gBwnA6ViNtiMkqSbm3tpsAeE8mmr7U3",
  "key38": "njh7ad5jBmpcraoYkKxWPmLhUZNuN3qKMJNY4KMgRyX4doqE7Az16AqZkwp1ZrvtkUVL8hvtJCbcEaQS3upVs4w",
  "key39": "28YMfs2EDaWqoeSFL89WHQktppdkgdFStLR1eF9yHKD7Q9HgsL74kjjYE1Ff8abGhRB8hnZCNJmTfDZnMVcHZxCi",
  "key40": "3ipKjA8tpMCky2NGDbSdTQedt33FW8E9oUSuoSSLjJkLXhEMCLmsr5dQWZaC9gEjBsZUqUxht5nXRiRfcJkQH1Ck",
  "key41": "3yVNWQ8FhUxSVmYQKYzPkGkjJZKdZVPu4JwBHgwZEkRSgUAEw213thyrSeJVAE6eFF5vtob7n5dXqVMMr6kScKRy"
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
