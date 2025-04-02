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
    "4kx8PagRBPeS2QBo3wRLAPMQ96zuCxukComuZKZYNifqkFMuEpNcmtQrPBgN2hQcsfxDFxGfETt7dJAaM8WNYprP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xDJvZ8ATXAktWJXEK9W4MUk2oyw84jJ1kaomfNDz2EUj8w6KRKExQcaYHTBZ7JKhbC9EFctCw3i9pEGwtEBLDX4",
  "key1": "kZFdagzfgADpjiLdNWhV25mhMCHkzgemDtiVaPbztsCJBbRWwppjZkaKRG9wLjRfYX6bahse6s7Y7zoek9vWPxn",
  "key2": "5ZKsBxi9ff9wxGFKP2pqGWN1LWfPgTd3hb47WY3PujmjWznMDajcfLVPdYqURTN1oox9wPQs8uVcmhHLomcaRFv",
  "key3": "4ERoL68g7SnbF7cEarDfVFe9WweBucFu79GM6AcJ1W4BY8SxydM6YXUueHCNxbniQXAZ7fgq7RDsDYxoQRQeSgEo",
  "key4": "3P5C8iPw8Vk33V5F5ve33KBMwH8QuwAqThJUYLESrySrKdk77XPAsVWS28SLJNKqC8YP9cykiTaAbJQRdyg5Xb2e",
  "key5": "d9h3ZtQbr7Pa33NyxRj5d9J6NNiBNCWFjS2tw4xVFGX6TBrG9rZW3UTmwFw5LuBhujmPVwhwZUv954LFZyhf6nV",
  "key6": "2rTYBcNXgq78qppo8PPSJ9mJRbgUdCbZJN4URPR2PiFH4AvnPesR7Ejh6bSEmRYvmMGh7xrkQaSSxsPq53d1onf7",
  "key7": "4DEMYiP2jm6ku1amppPrU97RrhEN8mUFdS6GDS7Cp7BJNzzKgS24cEGdgMz8KupZpMWUDRskJoeJ9WLz1gCwHj9o",
  "key8": "5REGt6ddx8DtoiSLLyyob8d5UNBM72rX9eZm6PRtXohYwpExuqewXzu25wexaQVjCYPLMQmicLzqgdcAGKoq7Abx",
  "key9": "66HSMLsNXZRryskFpZkepRSt8kSiJmWzs9gJ92Bc9cYejLEFBPTXbK7JhDofQaU6Gz7ZxNzgPViP9NdCYt4WSJzr",
  "key10": "4KbqB94epUHkvEFgFF9FcjHmAmEMHpP8NvsSszh9McnJb2rJJgTJDFNCfsTfocMNUWcDkn3CHK7FmgyZzN2yvsAz",
  "key11": "WN1HREXxmaGgJp6gpTYDBy1Jt5msj74PwL2CUXoNGDqA64QbojTjD1QGZthiH7k27AENCoZpbAUPPcs3e79fnvD",
  "key12": "29RAauA4ceiMtdkpPtncqDjnjpxUkLaqv9ZX8GSCGY1CRQb98VSZQMo71RDS7tZaSu4xFXWANXB7yKd3bZJta2ay",
  "key13": "5MUhQZb1nngjHPVWtHZtY7yAdbhs1TbmMmNhKS4v6W5juhHv1Y4zkTSbfbWFcSP2oE3PCmzRUz1Zz775Uj5eQvEM",
  "key14": "36hZYJz4vTgMyWrxvDjjaE7JVSDxVUxqWaLojQfdxQp24z2GbBhvPffnZtRduEYc5rLCsgQRcDf7XSe3n6PUmDpW",
  "key15": "3d62Xvsqsr5caFdRxb8CEecpvLXphi3Fk2sFJMjKLZNnksRghdyn8MJnGxwMRp73ckSZrMLgmK6jSD7g1uuAceyu",
  "key16": "CJsNe16Y8g7Z1vdqqeQiHcSH1LkKCgxRxwg6bRtNFTu4otc4biCNtvowtuGo4yK3XfMbBhiYpXXZtkcCQ9ziGod",
  "key17": "5iZgAfMzQ9uAN3F3aMgPMvoxqNj55XidoChd8AdNVgfQZKRTMiqMgAnFowrhi5tLB5ma7fhu8bp1Jh6HfTz8ESUr",
  "key18": "2QCAbCsjwvxEjmDu6Btscd9Dt5tQYtbGpvKXwQ8wsWGwEw1WLY4vFWNMWmvHdFpG9yxsUuDnCZ4aYkEGiSxbhDmt",
  "key19": "5vfDjQBjxetttxBNHjnsdBnSGsLP3z6aYkobJLgV8qqFgwSCjc55RUCjeFofhWvSrH75hppfK3muKh455aZ1AcBM",
  "key20": "JoyhTTFFxNL9JfVKZ4fqyfvVWQWJqSpByNbqQrFj7WHCiXbDR62XM2kQzJdzzKgnSYE12AodPBurXAmqyWwwTob",
  "key21": "5SYWkVdkA9jUPmNau53ruEayePoZuZjpvHNCCbVoNaes93JA5CZSWHNmMGYTABby5hRYqa72x8RdsT69PJzvgxuC",
  "key22": "9zouZB9yQbpiUa8RgPETcoEWW3VP6AQLiLMHp9FytxFz4rTN3qof4QETND1LrCfQHYisJi1VjHJ5HT8LkquMxpx",
  "key23": "4KeFbVu7hwgmehtUa94RzdNfAtHnD2F5P5gLWMqjAbmb2n1akAeYXmq7z6FknsrP1V4PTPuBViPRB6amG2WMxQgG",
  "key24": "2vuvcPao2HUnBAjSH3uVejRWBMMpAsjkAcFcCBgE4R1tU1CeTcCzXqFYFLYmyQE1Meu6fuUZp13zJaEHEVetURNW",
  "key25": "45JCFAHQLDnELte3kNvVKJSuWxhMmnMpF5RxZNQYGMnXGQdGq71sjmDwHUMNmWUkyvFeZuvyBKLM7mTXyp22a5yS",
  "key26": "EkreAngUkR9aHcZzsABHsKkrc32nf6MvLrMG26xW7M7gZKXDtexDQTN8MPTfW1urTuvfLhwu4kz7rscxwfNespo"
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
