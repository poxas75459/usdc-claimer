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
    "33cMbNn6U3emeLLwbtDefQrDSwCqedYr868NG9QtVv5jYfFTGxkbgVtHjdU4B9TBEXkPtcpaWEmu478Ecjx4mnZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sqy1GqebuCd1JwEGELkwfeRZUNgaDHF3tnPc8VdjySM2hi2UEDX1s2KLavXh8TyKiiwSg2wXrdwgVCxr8ePGuMz",
  "key1": "3zsb392oQp6wZCbCZpz6EkqV5pERPnZT5KH8bca9pNZmTGRHvvd8u2MJyKWwG7JwJ9RZxDZP1xtT3MsNvGkz1d3A",
  "key2": "5YFAjhY7SBH5vETVPp1GFugYKSj6rECqhwwqbGD4nx56R1cWfSqmJ16ZpGYjB1z38NjmNWFiMgMWpifCMfDeMyN1",
  "key3": "3yKJRnxGQJa77AoZxjk9SwbFxB9xn3Pcr7QwLHKWXipZ4EdK7P531rtCFweuUE1DUjZnkBAGagDKZtGzqnmeZ7Uq",
  "key4": "2pRtn2itoN3hBLJUnsKh7mvRf97aoy5PAKtMqRfyJ2tUBL2AW7n8753jnw8NckhAyHjyHDVQ8erRC8DwxzyUuUM7",
  "key5": "4JGQRjbFFnQfS1uLFoQdjwqEvZyHbmgG1SxyadcRcTy3Rs9988ywWg7c8BgKPWqUW7VVXra2oFvNfE5rsfrcetQQ",
  "key6": "3TzZ1U98gY2WP7NrnLtPnYbRnxNXnVqbuzAN8zBV2D7weo9wHpkkmUaU5giP7cWWrityArGmUHb72wYEj1Xpmykx",
  "key7": "3oVnmMxB8nQ3Vd7UT4KraT7kQf2tL4ZNdgPJe828pWZs9M4C36r3rNqcVC6MpwfS2aQXuCmySeMFvtLHPBQV4DFc",
  "key8": "53cMKa82joqwRHM3eyGEQSERdJNz7LHtAFbZ9Lo5TcSEHDPcnq11HoBQcQimNFnJ7kfeHdJ9LtAAwyVS67yNfGgY",
  "key9": "2NXsjV2H4Dh6erWsqR8jYcbB1rGeqfutC7pi3JUCKwEKYfreLSFJ4wHZyqQw5XNJ7jy5EV56UXvw6fAN5YSbsqBe",
  "key10": "25VBQG1ztb5VZGeWV2NLKE8SM2hoRU1rt89enzngsAPdZt6zBSxYhsbKnKpDGXVBhpp1cxbaq6RpPx2UgLv9xQj1",
  "key11": "5AFC6DqTKqSKahnmpHFgdsrNZssaZDvEgwJPA71GGcCwxTpmoyFEnQcWmTfWeWSEjF83V1KRLqcs1MG6HNs8PgV",
  "key12": "4SCQyKywQnPz4DnKCQ2kw7Hq8vhhacQ5yn2qEqn3jDtk8morT8eGAruLRmWoQHybx2bp6jpExYSjw4w4i6fPX7aZ",
  "key13": "4b7hpVsY1MrN15FN72e8sUoxenzEXjJijCxFs2ZWmsfnhTpMHHApaXSiLWGAfoozdrsDMmrPpWeqq1QeGXyVFCYy",
  "key14": "3PS6qv8KTAnwVJgvo8WG4G4JWoaHUk6NQBj2yBqTGyjRr974kLTJPtcr8rSHY2rnHnpcVc8SZtzBFBwQHWC8CTFV",
  "key15": "2UqR7d1y5X4N3NMeejpQBWb8zS3Js2Ng313CoGauoJp7RUybjEKh49vL8eUqjSRPD3FGpV1JErMPr6bdX3uvMahN",
  "key16": "3UtvVTdGE7U6RZGcAKnGBopZwbzu2TG5PMRqw7w69reLUuPckdhNmcdUsYfPUNiedKj3uL6tzk6CnYRymGZRHUhb",
  "key17": "2gobJTrguWXV7nqkDKhKXELTvskyJmxZGE36EdXfZJE22HXmzubxYF3WvRAk3hxLDJqojL2EP6pDaUHQYNNmHVxh",
  "key18": "JXb9Ly9StChCthE4g213EZitRfNLsZ47WWcRvjxrRwqYzdoG4TwAh4EZEFNCya77yd8vrNMrLktNyaftv2y6a7p",
  "key19": "3YjEEpPxNiYytXrvfbcCgCY9zvMgcdSWL48ARxptzeEFhdo3NsPUgucuJ9LfmcxiT8ED1PFR28ZzzztrxSoifoCa",
  "key20": "4Fdkoa2SSTXeHuyapQkMF48R2LXdZ3PunSdxXqazTV75ZfPW1GoNTFP6FP6Jt9jwwFK4F8ARVcCMtjgeSexHRt2u",
  "key21": "3nHkF2963F3JMJQt2yYWWgKgEFkjkJsWnkjte3CkhY6q8Yb6EdaFpTXUbHauLTQKbTbykhffBAhzb1pGaqmhRMYv",
  "key22": "4aBwnzM83VjRygtdR3dnkAz5aktDrTtffSCWUY85VpWMmj56TRW6xwZtRZiEaC1MYd19ETQBjsV8ujdVA3rsgxUc",
  "key23": "32PV5RXwsYLGfi6Yohs9CobuDhE1wKFw7Mbo5KKruYMK8nfwa6zKZVPRsBWCtYJaQMk6wce4UD9vhcif5sA8i7Ra",
  "key24": "2Qka4jyekzz9EvzcNebSgKxtSWLvkTpPQuj1VwXx4EogzdV4q1Xu1nMewALEGLKh9GJR7recBHdvCUdfLjQdEu6b",
  "key25": "RhfBTghzAo1Zjq9gmZaTCKsd7qRaGZAZ64qrDosPyhdpe7dSMNFkBJjrijr7ym2WoJp1aVQc8ELCUe3SjfmoEWa",
  "key26": "3sUZz5m65uoZZRdvvkAtHAfehNhjagKhusvVXh5tDdL1gahY8nAf41azoUK8iH8tiULTitANmhZspTLh8wRpY566",
  "key27": "2oD3JR34VsM3XzZYP9QX5cr7vob7SnbK4GBedSpz9NZSA6i8cxrDgH9mUDf6K34ceJhiBRDNyx2B1z46R6UFUNwg",
  "key28": "2MPdhZptnzprBJX4eijoNW8vEd2zVMxfmPGqVaQE6HQGyWgnSM8XFYns5iM8AXsYmbmQBncuTbd6G6S53e4SxC87",
  "key29": "4rGCFiRkn6myWLPtgLiWd9yDweKFW3chKjWESNSvCAdqNXSAFJqPUDQV9K9anhzd3TMhddGjMQDe3LCnFgv9n6oV",
  "key30": "5gRJXr7oeU8frRrFjj2DetPNRb3mymSdEjztwiKywK9HtJ8Lgz1aqknQHMeg3S2uxr3z4nsoNAYxncqvVg3xF4KL",
  "key31": "2UWzMibpjP4bidR6kZUVYJyyLNYQWTXT2pb2hToNmw4JGjS1Tb15F5dc5XWfG5MhSCsvJMTGP69bY5huxJf9hfih"
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
