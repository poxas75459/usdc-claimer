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
    "54Y5Rct1ihW8STBLmCPH3AGdpD7QoDyyj7YmoLhGAZiAxb21dVt9dWdaGGEJvDLvXTtmJ9CGdhNbNhcG9i8LCB7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KQXV9djPoLqHuEADnQoNRY49fdTDY3gkx5PesuusDLsCPvnWbWaX9nv9ZNvJnQfysrpnLsKSSTCWGjDognBgsj3",
  "key1": "Mcz2GYi3Qw9mJRrrZ2EuJZPsXLEe9j4KmNm9JH4dxJ3wrapfREcSRD8tA1fZoSjFpwSzzS8GVJaFXk4NBKGVYJJ",
  "key2": "AFUxrXz6MZN6vyFa46rnTzKbRupG51nYkWh4QthHSWVTDWMgMCjBcfXhS5G6GPy3TuCq7hNxUyJBti5Ph4kfDVs",
  "key3": "5HyAm6GWVEpR1dfp48AB6Dap2ksgNEhCN6rP9zCq6JaVXdkujTs3QCBF9z6bxgB9AvrAUN3LVmuAYSkRjTprMjTQ",
  "key4": "5GVF6Bg2moH19obmiEvV2UtHJ3EU1sXtnjeXvGbL2Qa7EvMwiP4SL8nPJzVEagLfS2BZ7KU4FbAz2TtvERzXsWXy",
  "key5": "51qTGGrxMCdVD3vGS6WNJntmXns1EgEJZZqJXjic9yqW99BCG4aqTthDUJGhujkW7sMNDMsHZSXdPxg9p557gwn8",
  "key6": "64ziBm8PJgER63ARx2VNw7Er7MnFMB8Q2GxDKxDdZUk8xCGaiAEYYEmerdDnHwgtDD3Kt4GUQUGqL9zd8ZEdF8xg",
  "key7": "2ZkREbeKZxsH9N6rWMG5K2q3xnqhnGBUccEoEWSWS21q1PGYgnkzjsckRwCpD5Y2FnXMbEMA4Ws7JbRno5U9H5nk",
  "key8": "QJ2MN7uFaB8jA3azYitJ8w7D6NqCajSXBADBLtxdxBBVrF2EcdwZk956mvwKVrR4cYtPy1SFE8d99oUtgybuzqB",
  "key9": "mrEtqqiz5LLZpsRDL2RnGZJPsSeW9ZLTgR649f9krp7UHdw6ScoTPbwNFSsuroWTkr2uvtStK3dzPcfDEjtoUZ3",
  "key10": "z5h6aAjwLQeSNDazLMdHExbvzrghJChcwvUSKJadWF1rgcHEQeDofUgZrr4gK3ug5C7eyRfJngrFab7pXuV4SK8",
  "key11": "5MMa4B7K1tpxK4cnh3KUnopc6L2jaspMaJt5hNJQPpwh9tbi41JMQeqeUY8BJWH1PNAWEBqH1Gb6nMEYUCUmzrHe",
  "key12": "5RGsF8pVzTSew1MeV2U8qWKjKDLz54xukHmphrNGK3XL9B8hiGKcaCKN7BkP5pkKHmLtL1prXouPfhKf18wDQBHZ",
  "key13": "5Eik2SC1cTJY4LVyekFKY6iJz4FzRsPaLvzaUqTAntCaPBFJgyxTRbF2TkSjDD6e8q8mhr9kfHE1CNdvHVSqXTWo",
  "key14": "5wX1NnJdBbNtXVJKhzYiZ637zT4p865KHbvku4k6xLtfSjHF2sso3tfGMXpiRbMeik18k5aGtUw8cvfvcDb5ghen",
  "key15": "4qL5vNgwp5itkQ5FuqkUqcmDrTtSzRdnaSh3foSKEFmqF8DERF1XPSxG6aUsCF1V28gboDuWePoNu2FNQhPZH4x9",
  "key16": "4u1TqVovqkrn5hDzRpGJ91BquyAwzKE9dZs635YJAniAXtcAoFD1NwGdmLpgYs71MU5eEuWpR6hE2mcyBe5aS72f",
  "key17": "sWQpj1saCTDefyMpyyBNXJgsrxQ3nfyo15ZiULgMxBNGHuamtaeRTWuahb4zG7i6Y1WsidUYHwjBhsrSsrmpVfB",
  "key18": "5T1QqpVKhg6MVUjviQ4BSViSAyyLMA6jGetgeKdeX1FYyLX2THgHq3a9aVZa1bF3DNXZmc75kTMhA6WQ18E3YMsv",
  "key19": "3XFWigwEYaMiwvx4NNRJAaKJ8Lbd1fMePJAyeVvEjXnot7hmQ93EUgXpaciynH8DR8jd9sJFUov6LeDUoDkpCnX4",
  "key20": "6278T1vdSHZU7nFaYbD94FoJuupZvqStCEPty6Q4kDZpDg8NKAk8AoqfSZBTq7jmbLAYmFPk9n8Kb9ZcARxvRg7b",
  "key21": "5LfcUeosc3EoykHMGyPHeXafmGSsAkg4yJDSNuq7nfncpRjwbtvYnzHkvfjyiPPAJUAUX2mpDBbAAt8dAJBeRq2f",
  "key22": "5f5Z1oh3Fq23eDHCVVDTLT9kfkwroWG7fyLggtjcNY7QrcKE2QTZEecqSrNXmNu2yavoeH7QPeYf3qGfPg6a7FiY",
  "key23": "4GdnmFoAtGSV7YypfBmgAjoJpDreRo7aPBf5P5FpGqQsEh3CJYDM6RhayW8GYWiAodkEMVmpg1i8paAkJ2wthfzo",
  "key24": "2aqT5YvNYADhosADBzQjyeAuTWQ3GasJHLatcP97boe5SQquG5ywQuph5SbQNHubEhoSB4SLoRYMjZqEpQ3adzFG",
  "key25": "26uWaEJ6P2FRiRJ23amV5pg5NE7arYTwLEao9U8Y3MTeShHAcY3KfjeRJAB7fWFgqSgF9RFRtJnTqWiTNo8E4PmQ",
  "key26": "8kqBxkznzMsagrbPny2ZP7dHA5cWgPAxQ1kWwNxeYgCCLNuvQS6xgxCGTp5e8ukXjiNr6Ye23x3XaWydeRAHEaq",
  "key27": "2uh4JZ4pVVp1uEXwVCMFxbRsksPAjexVNyrPhpULdyZRXWEUmszpPXa7ARMp8XJqaTHUtRqcdX9dcYWPcpPFw52K",
  "key28": "3YhA43ptn8WKpemPbmUkYkYc1F9D2qXDZ1ynrAvZqvkTZetF6Xgp3oTHpXpjBnStG5Ux3fFZ9KtxspGoPuQ8qvHd",
  "key29": "pZwQ4K2ejLiGNWDStFFD5nNdFLnK1M8FdbRawTY8UtqBcD1oDAyQDDou7hP85KQdufDgdZnNMmxfayrUxrc4QHK",
  "key30": "Np17ULGUMhSG2H59GQvaSrCnf81EeLeubFAD4YhFxNYQXgnWjhkeioXYVmdcUtdBBhpQ3sQFSkPx6DDHxQNkUmF",
  "key31": "4rPTqA5FXLuyfwu7azzbZ2dQvgTXibZMq1rnu9A26aGLwaSPXGvvRoxuMhe74nnxn7rXT2eEUW5GXheZXiXVxVuM",
  "key32": "4TR4zQ588nfca2NGEYjitcUnWYUNXtQxsTfdCSRc9N1od3UwPYS9WHpUEytotRArafQ9cA461F7kCAsAiTiX4zgn",
  "key33": "4oozVY5rXzwxr96AnJuAbRKZpzd7monGvNqJ3BfxCjXYyCxF6dG3n2aEyNNXas99w91ira6bxGVm6n7YdPYP7XoK",
  "key34": "32BWEtE2xH94dtQDByC8owhxdH1h7iQTdGn6KhGDSsDnfNdugmHHtvATS3k6LEvbJr8gRxaLD8tRh8Zrnc3ZkRqR",
  "key35": "2E7jpVL4biKpRRiMNHSbamtf4WsHmyq6GjosJt81UHTaKW1iFPug7PC8tcfeZppbJZJtGELZm2nMfA27sy7XwNdS",
  "key36": "5xPPfvVQX9HvFcjTkjaW9r1HSpPAn1AkPSMFyeYLKU9tmBUuszp6qwGQJnmDyDaodthgbz7Dshr8pQSMNbGd9oY4",
  "key37": "2djqZ5EPPGqdKZS68oU7EQJhdgn6s94raQfbwoTFYEJDkeGqeFjpVDcH235Fc4EeqjBdKticGs5d2xLDtwPLAmQ7",
  "key38": "FzuQQpQwrDycx4n6Gk8EhrEmePL2GBBHwX6NCxzT3Bgu9vLGxKCXtGUq9joKmyCHp7nuwzgVvtDAXMNsJ4jsvYt",
  "key39": "5DntpPcUYqxs5x8w5w2HZcsSWZoB2TqNi4noek7egYdEhcHi6CQy4eBZ4RDrvhBEtcUftF6ynkxAzmzRGxzGZDNM",
  "key40": "ZCH3JBHmFevhNnKwZ84YbTrMVufJ9h16mcJyiAdw1XPPc3PJTeW9UB4uhkMLMwZYDskLqie3vM41Wvt7T9jSQWJ"
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
