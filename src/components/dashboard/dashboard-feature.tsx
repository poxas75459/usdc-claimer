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
    "fcNnBXmAZeBUkbyXp3GZ6xGwB8MtkpGYeHQ1DBDQcHM9khy7q7LDfrPxMWQFXy2pM8x9QxBARVVWmvdN5qUJ7zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e2neDnw6pEEJh9ASgjT2wBCmFQHU8xpwavTCXFrrFbtY8NPENWJ5mGpyGRBApZNx9qGKtC4eTaMJxXwKLnW49j4",
  "key1": "5rqrxbpvFuBgcuSvW2BYotfRhL1fqV86TzcgAseAxcerKAAbBWxMdAn1iym5ZfaKUuayczHB3ERtwgkbZe75iH7e",
  "key2": "LfXdDoRpE6a8p9cpWB6DeM73Q7KmQktQ7R4Cmxkc4HPZZvmaoZE4oBwdeP5jbcjpMebXZrWFYnJ4ZXi8yMfZNRY",
  "key3": "2zoRTUZpxb9kbV4MPMMDiRo6RPELtYZ5s4a8FWYkj2DN5ZzsTiBpTDuxwgejRGtm2bUbi2xb9ApfSLraUg4z1Kqq",
  "key4": "nSECi1HeMfwSprAvwGTccf3CpwCoWLj1vGa9f5wfN5YdiwakmbRvVLcx4EHdYbK58Vh9HbDQ1DixRCWjLS1b81r",
  "key5": "VWAUs3k37Y5HENMgJtgvY5ynJDm4qXSmp7oTiQ9qb5HufBAyZrYoeaWgxeB3a6dWavqkddF2orVVq4not152EAp",
  "key6": "2fSphu7doGhXf2gcG4JimoMX3yadL6bz437bDRhjvYQ4rogUNkSWDSfxdL53JsRz7gS6iJSWZqhhnkqkv1XbuPWq",
  "key7": "UTN66u3QvrFhiY577ad2F2F36ohvEiHK9fof22oKygNd8QumMrqKCHrRRukPgACQnm13ixGnWu4gLwhooK8PqgX",
  "key8": "5hwqyDQfuH6hKDJhFTdxSgBBNPszbPPRxRzCqL25a3KNfnuZoT8kCeyPRgCwVS2EZyPgTsGcW2X4t79UPvrgE1f9",
  "key9": "5ggWXWQsqFEvA3kQ9tjvM1CaZ5Tq3ggE79pCSap8D9hVnwRmWdW2xFVgdbXSuJjJSaZiGXkyH3YLnbfP3Zh9VbPT",
  "key10": "4RUWeRhHwhsWoTXvNPHgcVTb1hF45FBMWXZcpeEsW1u3BzuYwksHguceD7YZYRyi6BFayqKAdio4sWSk6vaYrjGp",
  "key11": "2K7imnr39VcrYDAkBhyErNLhWBxCUjr3CJxeSDnpJz4DZrQqT8Jwh5sHDPDKCzPaJmQFtiUYVzddiuXwtrXpCrgf",
  "key12": "2cvXZqspQ1q4kM8SYKnsNfBkWCps16yteyE8Y57CrWkNZnrA5m2NbAKdoX8rW9ArcurwSc6nYMGPLWusqc9om89M",
  "key13": "314F68dQA5HNuUtGop2oa38RW4Bsx7XMaCEwRadgqf4Ad2dZKzRrui6zSGKuNHSWkTpFVep9jaJh3DonHv4vUgzL",
  "key14": "wa1ZQZGH1WP8itJcozohMDZtJp6cknbLtcdbvGJDTcf971gehEWhrNijsc4EbxTWh96pxVMUdujZz25AhwroFSm",
  "key15": "2X7G9AcHfn7pCk5DuUQYA4ZYpkxxL1E4JZytKapAXrTvVtG8yDycqCyiTbhp8FDkd9jk23DzAPy8mg9dSnw336V4",
  "key16": "57pBBmbtPwCmMrezLWbbomLH1oAjVviX85TWhD8mYgJC7hCwbNjFQ1RD9GDD5NannaPqhQg49MHXSNq5MVWvMT3s",
  "key17": "43ruPHjwunhwD8eaqV9Ei1Xfj8uhZ9aGGHGaGjzhechoXuLMQqB6NBC79uhFK4ZesihAMHUGcSHYHak5uHEvffvm",
  "key18": "33GuxqRRjpWavVWK2WzcsSo8eSdsRfcaqLLMTs77zkecUfsZkCK2s5eZhJfpg7xbDWNC9F1hKXtMWFsWfxAtFPHi",
  "key19": "4j2gcMySSuwVR4FvNPc7VjL9pKfnzcQbvox7NsgcDRj68MgpTvMrhpV1nqMhnxoWEwG8PVUcUj79xrPzomSCi5RH",
  "key20": "JwpukxpS3RNkr8qoJ8R8X1d6ign9E9TCa4B5wTbfmtQPJ1ehD8W54KBivUAh9QbpFwMBsHeFk6omYBVhSyBZGny",
  "key21": "4PJMak5ohEWzgrUunLwo2oSTnZuZ9N2dbx3GSpSYJySFt1wLB1W4yv1SxtfLjtdGcp5AFHtfekeWWpXpJfqMSFAs",
  "key22": "2aqap9L3y3MmzKhfGV8um4g6ehL1gKps7DgYCf6PEH2WSNqZzw4DPcmoUAudZGKsqEatzMvhuEtqzb2dT7LQUF39",
  "key23": "2vAfxfswqGRo6joGKTXUj5VZaNZP7ghv4fNT9DVDBCoq4pSAufnRQPBcR9Yto9dVbxw91io8uBftpKTnySExGfDv",
  "key24": "5d8xKFuxKTyHEUD6JR38gQ9eBmGFE46LQ4qSiBEQxaPrtLJS3iTh2fyvK6btbXZiMUge3mGdg9qt5pXDUH9i4APR",
  "key25": "5HZx2ytfa1S4Uzt98GaMJkvg7Re7PTHcuVn7cUsJGEPjdSFrd8rwVWEJAoBpoqEGsw13rEx1h57dtfkNHsHh8H7T",
  "key26": "4hugZdi8CCfks8ULT6sXXk5Z1xgPtXANKaeuLNaUtEsWBqh5qLEa4M6ZQV34GZsz2gF7FDawT1R5XksHxPyds6ii",
  "key27": "2rXj76zT3M7Xv2taPccHPZAa4Bft8V8N4zN4cx8cBvF9BsKykHDkYY73pDjtPA7MWspMbTo52i8FFKCVoA8Wvnj1",
  "key28": "424fFSent7HLAbQxo9gJ5kWexFbT8Fv1usja7cjRbZmKv8duNVdZ8K7fighJfpRpH2n6JhEH7ECtyC3zNEv2D3b1",
  "key29": "4yq2X2FdrxBsqgCDWqarXDF4KztnyjBNHX8Bhep8UeLT4XWWwouo3znfECyiRRfccu9dP1jGg62j9JpwuV2XGv1d",
  "key30": "uVYzF5Ht28x6UzEtftqkVuW6ZZTsjHfkpHNDStRHEvVEsbZQh3s3gfiLGpNmogGoUXd6rJt2e65xBvr6PDo7vzE",
  "key31": "4FyNk4LdLsJub4j8A6ypt3h1EqCUzhXgWwivgM9T5SYVsqGGvSkM5iWTup2Ezhi2N7JdDLXaK1mGU7cUteuU1RJr"
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
