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
    "2ravvAUXxF2Jk9motJmU1HBUhRL1DQnij7fw1ayU9SHFcnZ4GZ5JuX39dB7akMMCggkJPrYdhqHPfuJdUjyqZC2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nddMZzmtZuwG4JtxfPGC4GvtBwRPwp7K4cQDShXdqCD5cueSY1r43jUreW7BXBGPnfSFyRBnMGn2R1NdNGCxUKx",
  "key1": "2L77PbsaSftMKhKSLdKEzbQdju1yS8rEUzLurLkQHR9ahNyEKCs53hak4JVfmkTHN49n2tBKXp52VMy4XNiJkhXm",
  "key2": "2P8MeLigNjXsuWXUX2ppmABwJMV2qyXT7XqHxciPd3SMqkqpU2ZT9qr2fkaK9L2iskbwbefb84Ju1WTvRFBvCcv6",
  "key3": "3cL3bEzJvszEyMq2MMnfoqE5PLwsYT7AB7YHYPhus46fEjRFn1RouE7JPUca16hEoSniENRtS5zjxmM3j2YiRiVq",
  "key4": "62TQRRbXzZcFoCCj3UQAbddxjBLgTrqFAaoJkPDmPwbjBVNbHjKDwpqkhyh9qZm1tX6i4Y5k3H29bNmcxSMmBGvk",
  "key5": "39PC7MkKAMaPSS1T7MkFHtwmT5wtNvWM1Ma6w5BZmwUpJ66KNuCdMmSRBXG3GzP2HPT6NRNxRXUnFvjZgmeMJD94",
  "key6": "5n8KZkFVCFfQsvv5rhztFzAKJtmRLMQKzh9seipkpi2RUYRoDTRYxEv9CwMe9NkTei5UixPek8nRezvFKre9XqUW",
  "key7": "3te5z7qSZhUzbS7Z1ycUG5AS5Dujdr8pX84Xr27z6YL9WGtCHq3mEf9zeE6WYYcNFkEfnAJpad1eYwV5Q6krvE2N",
  "key8": "2DsmnuMFsjeLMcUYqfshqSjbmtjTTevRimZsRk3GyfHKMi3aFzzwWEDPsx9zjcrDw5zkoKg7MwQZxGQyMsPNfxAp",
  "key9": "3jJ8dhnEw7vV5tfRCe4Pm8gGsaD6BwVmRQXLHKTKeJApmGZnQ6fFM49C7AdCgjvUyqhR8T7kjzmHLzxgAqhXtoRd",
  "key10": "5RyVkWtDJuoh4LLVPzp6oHv4LRfGBayBgoPrUvvBpzfmFuMhcTnC9DScokxGgmHJuqpPxTgLxdggrUFFvvY18fdp",
  "key11": "3Mq54NieW42Bhc5xozkNev8NJjevBAH6sM1v2zRM5fK5NL4ZHKyShRor9Qgv5rNA7nPVxh2ZWvyPFF5zfzaNTKeh",
  "key12": "Sp6KHLBM79QQWcH74cFCgYhSi819vTH5fytCYECWNypfWWBaWxzcctugxZ7m2jJj1BPn8fHZZ734ohf6BXpCgNN",
  "key13": "445xKHhojff7cb4EFRJpfqYRQ7N7siX4ph6biiA14kjB4XdM5vPcrNxTJV6e8AN9D22wu6w2NrAvZebTRrFawCzq",
  "key14": "3yLDs34rKBXyG9zYCAXQFvKgCQP3gV7rvcscjHQNT7oc5bkn574AbubcEwUAYznYgE9Wd3jo1NfJscbcWq7D8ffh",
  "key15": "3P89MRUGkJxCHALp6QX7PckjQxkBvBA4kfosrFjPijQGKumLQc57v49U5Pk22geqWjx3vqJkhWiSpRVYbZtnTA9h",
  "key16": "42x7MAS3BaT2ubCHD2tJJGrJkbLFSx2ZbizPxUE1U3HZYZR4C7atHddy62Wkm7useEvg26k9YvMq5Fq7CmXVXSH8",
  "key17": "62eNwukd39X33MinsmvPSJFLZH9AibR2bAmspe2cdJ4uCcJQV1BaB769D59AaTULLcVgpiLhbcQkC1uZjbUKEFQ",
  "key18": "56RUoZfDm9saUUjzLEH2wzEUaDXpCuXdLP9rH7p5KTUrWQh58UWSG3qYC7szfWSgXjmFTDVBjQ5PUvXYGt5zG4tW",
  "key19": "2M7SDtmmxee5xuocyE8jCsLpCLpuKtPhKDNQLTp7kHg545aUEcpF72MzKQcHFNhwwTSV4bETd5DHwmAu4z3gVrHz",
  "key20": "4dr1uvbyee7ZkMGGBJ4Pp5QfVKAbuCz8zaYbPerj1WbSSBZZdtEXKY1qHQ79Sq7R6Rnx5q342EM4T1ek9LLR6mNP",
  "key21": "3x6kEyCw6pH9cMFDGJbdBW4pxK5z2seVmvEwK7oiPh6LS4F78KaEahFyu4dMkpq5CkrDPTWn3duKQNdy5q4GpTKf",
  "key22": "3EX8Sg2NECJFCvoAA5aCkrN3DDk5AVaiQPp6v3VpFGztjpDNJrwFKyvJwVo3Lj76w7ap472gLkZDU3WafeZCT3qq",
  "key23": "3J5sVmSSix9YPG3tJXQQn95P77uwipuoHXBju3rjvrGAQkCNUy2fQed1vyEP5dSCbjoYBWvhA9LVoNXYRb8wsSfH",
  "key24": "44VqWyKSZB2Ruw7bLL4SmtiS5AKWB4f33NZKW7NqeetVF8N2vWp6fCgioKsfj5wVqDQ3yzFjKy2LrCkHhBxWV8x",
  "key25": "4W2Y1Mp88EtqwgiZEoWa1ad9J1qdDgE6iTi1u83hrEQXhYqxV8HGyD27up31kynwudDUztpXQM1f1knzzkFGZLRv",
  "key26": "2T5zQXe8aDZKeFxAjrjZ7fKEuYjWVn47VsPefVvj9FKaW4TThcyBN8fLYtYiBopCdxEjRttziZtdR9T2f7rcFDid",
  "key27": "4xax1wUt5CnJxroNRhpyL53whNbSWbJcscpmTf2GjpyANX6xhT2YULNdXqH773cc4RcR1iTaEiDpST4koCvb23Sd",
  "key28": "5FZLfitof7eoWCqAwwvbXb2XyHcBLPsPessoQdkHYY2Uxm4pv97dSMZD1Crdkq58zq43wo1ouuy42UEC7v6Qr1GV",
  "key29": "5t4roNsQgL2JFQe4QsyiVsH1XXCMyArRG2tuPejHFi5xnL67YYb3nbbKhXq3R3ZBwHatCoAYxkiAPV7ZCzEjkbk8",
  "key30": "2NabVomsGc6YsdBbnFNwNdnbiUg9eu6PqmvwpbXVESsfphu3X6J2bjhaP2JP2GuvWZ6ZGMzHxwH6tYAtEij2PtXj",
  "key31": "4bdZQKtrgT7W2gTQct7YnkAGnsGSniRDKuLV6vuFsc4etHKA9VNuYPEjMKqYFJLt8z4YenmNDDFg5R5GzPHPz4jV",
  "key32": "4eeoyn11hCZzw4cKLuowg6STymHpGehvuC6WZrPBhGDftjR8RDr6kizgknotCX9BjBX2tVGAodUy2WAVEcxwCyTq",
  "key33": "AtSQbMBQDDEFCrgtNCp6Lf1sAMA2zmsVCtDjWuLsgpPCFgceRq6NrL14agX6EuqzAHZXmLVxmRAAzYj3AwU3L5R"
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
