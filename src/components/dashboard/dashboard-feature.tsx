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
    "qae7Tc1WAVrMbvH24V1gAqYDutKT6VatC3QAvHgADpqguMPHp31tnLxNaBiKGScZvmzEDfP4QwXGna8eQVj3KpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mi97ZFgeQyL2Yd5LvTBw8a1bnK3vyCgB597BAEcUsdQJojeHWDRGNgWVUEUu1SMkBqevUc44c8uPfXVTfWdKUjV",
  "key1": "4kGkSYofKT9ZMbFoqtsAcoGh5oFdHC6KC7VgmTaPJxWDbywRjRvgNRhidibvXSQ7CABqzgrZtzJfUgj5VCNBGVDe",
  "key2": "4DSCaW7LteEeaZ7ewMqs5p7JBpbnVWyyCJR3nnyhryaYGka2WkJ6B3X2jzemG1C1GLh8uJB5cxTtdWVQJt8a8uqa",
  "key3": "5irZuqLrXcLrPoxEvuMS1WfXiu5jFwNvM3Msc47tWV4QJiGYFtTH3r9PftiRVgeUFXcax7eojcaVWdEt47FraKSZ",
  "key4": "3jtDvC6BQsTUZQF43QKMS9LUr2esaMUdgPDoSQThBa53f3iDDcFg4dkzTzfEvRy9BQoARkh597Z8YSzekQurGH5K",
  "key5": "3JijtaUv454VMCby9Qbkgab7562ugbMQMq7fywSxMV5wVYnRbqKXGuzG3wHf9rBLxHWUebjNcvcJB1AgweRhQU1B",
  "key6": "2VRgvLpTaT4bN18n67Vw1eZiphPxQUjYex2pyi6kKmo4xgoUqxspRW62vPH38TivBeDG6AKDEA7hy6ze4osjhgBb",
  "key7": "4Cud2afuUxHBemvtG1ZNdcobWjP8iWEUP6W9RxN3TzncEnDejnF5pJo3kajqgMk2518UgbCo7aqLduJ9gBfPZnWK",
  "key8": "3qAtWHrEZiRFNYLWdJZ2afZT1g1bQpN61n6S16wKfwZ3aHpMEVmdcJRDBiDQa9v2t2QvYXsubqAaFtDWm1icyhki",
  "key9": "3b6MCo6SCnwNV4qRbh3xR4ZeeZaAV28zKLviaWrHB3zhQ2N1jzmxfKPChaMN7etCnKNpJjKmyRPTLfwkjh5LpVjd",
  "key10": "2rsVzH1kNB7Y1tc8Cb6VNxcRMk3hZCNmasbKMdKstFhz1M7dXRLeUnmjuk2jRbXX82bP9i4EHSNfPgocwRdG2MYT",
  "key11": "5VTJwqajMS8gSWXsDcg3H9Sc4cW8RTfzN1QBFt16mhGSCTnQfJibtoxWApoqXbxNEfeJ6BaaZA7NJxjSWKmz2ppp",
  "key12": "2HviH9gw75MB2C56W9SbTnfMGyicVutN6KjahXpWcwEN7XBJQykkkAEsgRYLBpGfxz6GKXB36mbjhAxTWrL2n7G6",
  "key13": "5oUcNPwSJ8CS5sJCeH82We7LVFSzJZSgyBoHNiKXEFH1zTe4s3zSaTZk93WpALrvarGevFyRbPMirbnh5VeF9Lz9",
  "key14": "5PWPvwSx78JXoW5HHhhMUqyyr6cCciF8bqHHVyVYr3hpbc4KBZDx9SdMkFUJu7hs3APqVy9SxaeeNuFHboNr8xhQ",
  "key15": "4YmdRGn55bKrjrhwr6WTWzjeH69btu8qkig16uovk33KQUAynQkK2ypsXAjpg9bJBicJMi4SYstos1dmCfVtALHJ",
  "key16": "61WJcSncGaNw89ryAGAauJsiAtzMPH4chhboi59HcX8bvSdGbWz4BC7tiMVmyCxFrjn6oAoRVRK1BiEuFvcgv5t9",
  "key17": "5uRW2naZyDrZtyMdFTmhX9kt8qtLyjMaai7i7LUYX5rfGkSqGkGdVjCkUmUw27z532TR8ZhYM9Jwec1foSpxkLto",
  "key18": "32LfZXEp8EKiFzweSPdhaThzhwHjzpxfRoWK2Qh8QruWyNSTh8JWo7y5EP3k6j642WXexUW1V8z5815Fw5hXxBhw",
  "key19": "5YJYYiXFh6vmp6jH1A4DUhuZKGLpZggUkvCpqYrkThrqwC76vWLNNthvA4RiZWi64e2PqBjJT1444hycSjtsTNkq",
  "key20": "2d7tB2UC2usqPfnnENrUv4tBj1R2wTqpiUAGdUgrdnugenGmQjDzdjm98JthsrrvEbK9VTkjkCkqg1tZeDWyyfVV",
  "key21": "5gxpAcLWu1zAUA8iDAjkRESK43QuuDngDaqhkXC65bbZ4w9BweYqQB2m2T13bDYadaAMCPAYAtQVjrXZPY9z2tnS",
  "key22": "4eWdGpivXKAbmYvE6Yd7XrQaY6YnJeqv5mSoJHiXU5vyU9nBxowUauVC6ceB96DJSDBDG4Wgh2QcgbiyV6iGjtab",
  "key23": "5BethiS3GHmNsi2kjnrU1sq7UhbeBjBdMhTrV48XaWRXr9HqCTaTb1yyFDteUJ4YrHYpQ4xs8qK8VSbyzG85HMYQ",
  "key24": "2yEpNnBbRLtt9LUtL7iYRv5dhvuhEfCqPDkXsKu4h5m4JtYSwTQ3mcFcdXKJ7tRSpxLHyZcGJjqzyWW36WznPGZ1",
  "key25": "2HTDmMs115nqrrp5aamGWpHfwyN3v1kf4FGfQe8cgsHjhu9Hns253zX9A6u7keLM6CrbVoRNN6nGM7hyP9sRyn8A",
  "key26": "3buNXRdizWeXVoBgbdU2rbCoAb3i5DyxJe8UD2Fgt2b5ViTTvR2w8rdojiKoVYs4YcCV948RVxL6ragnyCfegCGV",
  "key27": "3o9AhMHbcvoD1o675y2BPzGb77eKmBUckgx76NUaeTpqnBAspUiWJEVhR7g1HWCZ5YpTNXxMJZL1PDbo5W1x43iu",
  "key28": "2WJstGGFWriBepmdqPLZNZ9BopQ7i2FFqHqxszT6gADhHqWq5iy4AyqDZQE9CgPoDTUHF4tpqac97FZFvTkeuGy5",
  "key29": "5BfjCfrw1ygoMsDkdqy3SAjdEJQfwMSKfgRYSLAxgsNgWyqACeYkQJoMf4TYZUBDZgapWVM7iR3hjXiLhcsiCpyy",
  "key30": "nN5mQu3ErnzW33hPF5heE1XrwrHTkozaVBMwsLJfRG4kmZRKmfQSC3BTZkcULT86xMwrhgPHrpGfhp2RywJvpSe",
  "key31": "56kbgv1ansArKHvxB56vcrx6U9iwCT8vuRtaiJBY4Gvo8dGC5htSSCDe4QYyA9txoprBBknBvCdfe3qTMqRYrTan",
  "key32": "63TzqmCXkRK29vFe2YwJSo8MaAJ2jtWH95r4TgsvkhMfvUmbukMAU4aVeWvhDtXsVqrHVJsWQNUYR2zJ4fpf7XKf",
  "key33": "6xrStdqnmgfUYeJi6VMhji1BW3AebNTbCRKxJkPZ5qTECmPNsarVK5HZwX3peRv8MGK8RPgA6ZuA3EPh1P5raF8"
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
