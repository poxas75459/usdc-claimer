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
    "5Mvxgjbx3nS3J2K4CA73qYmPUidAHs1DArY3MMWcevdjue65QddHTfov5AG87sYeUUXF9MRnLnY7Dqsz152hhuG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCUFN5QWJLAvVau3EWxKdUjuNQ255zBSUdp4Eem5VqtcBfFYbcGguGR4vT2FXbrv5QMPKy6jbUVW1uhwL9AxMpT",
  "key1": "49c8meahvbjynDusR9VqTYmi88uLYJxKo7vAznjysySTFCJsso4uBCqxCN1EU2Yie7b7F4zM2Mio9jcM77b7jzK9",
  "key2": "9W8pGub2QeuXGHQegcry71ZVYxouu8QfiySRMAkJbyabDJ7WrtQ34JEySvij2DqhKAs7nDAs1ejTFioYNREJFfN",
  "key3": "25VEfJ84x377kz3KiFusuGsu2UsEWzhUQTeQxvVxtavqmPeBQrL55PDzychxjQZV961nrV9cJ1XDL3mFB8XxziPV",
  "key4": "3LA2odFc7exzBDKRANovNWNRjvFMyDR7iKnSjUVCGx8x7Go6Vea9nvmmTrEUrxH7jHGMXnLHz7cpsAqjve5zSmye",
  "key5": "5zLHRTNEBKQQYc43WrRaHRfNvmaSt7peuvuNvJEkE5aFfmugVAi2oyHBHAmPuRJ8Z5dxFrAgJ9y3HQNnBKMvWkvL",
  "key6": "K5v68YLXnXhrjktcKEj27LbbPmYjxJLuvu6tnQJBGyRhCEHfkLvUMZKGwoSLVCH1jDv53CeVhzeKozw7NRTLKKk",
  "key7": "4etBoiPNUa5tJkP5YDrEWxn5Kw3g3YXkad8NiBWn22vjPWjMX7SHELFHTYEJVvgdENPYzhAQtd1UDaSzDB5AA4YR",
  "key8": "3qxdv49xARapHXXiPaRzWSiJmJqYC8gsn8MruhUwwox36AtDRWQbbrGDzzy69pzVRDYpKcTuWNrfXDmqX7rroS3v",
  "key9": "5HnkpdUaKfYAUnyvMAExCTzAXRANykPA4wUjy7aMoic9ZUvaSKdKGZySwJYGjWeruHG8pBstQQv5WkTsouAP2wKu",
  "key10": "31c3BJk8X6eHSu3iP3qyWciAytbAoqV14HvgNxMchhy8aZtZXP3ptTBRX13kQ5khgMz7Weif8VC6zWwH8b3SjGcm",
  "key11": "dHfgrGbY4PZiVsX8PKpwp1vsjNoow86nRt7UYQTjG1o8LJnNgweL45UBpBuJDtp9qU5cfffLEfVKWXPJfybtuxU",
  "key12": "51U5evBrGNDSe42oVV5nUW9Vyj8iszhzbCq7MKdJgXXyCcwJNzM68rwViqYJot9pU2YngT9tkXgDPB9wWKoHVs4q",
  "key13": "39MvknkwhqEhexzogwXto2RfXACpmtz4N6RoPkwFtZVXfoJZhZjjLmAXw8Ai1xnFnSG3JGu1KZe6zmmmhHaVzNXx",
  "key14": "2AbSSV7onDpCpPNJ6UjdFrCqEt7NVWP9QsELkaCcSJveUNeM7EcmecJUAhU45Y64SQozzx6GJJckVWGdT5sTKAYB",
  "key15": "KxkZqD9z1LeTBEi9DweiWLibh1b4H4MFVY3kB2MkgwhvznJTyWCa37PEyAAZir15MLofGMp1xC5wN521kAJmjLi",
  "key16": "51FEv3sZ1C36ybt2vm5Rg9jDUZkBEdE6nmdQkQ8YKi52tWNLqSeJ5hRkKDFa8qqjNjSAMuEnqRSY2BbVrZx6NEnv",
  "key17": "37yFrLUDDqGPe6GdRLXs5ZmhuyRYPLFYVWQaC42UuqodqwG3uHn9yqTbLaNobjUM6Y6wnhg94ft2AAujKtLcCtvu",
  "key18": "4ZvB221pJoJvSxzjSnA2STgZKiGs6dkXc7ZwE6aV9ZT3SJ582EQa2QfbcgQrpbGYyHZzf2bcdsfNLEg7i9FPYZjM",
  "key19": "2cgdpHfnakDXXZXAaxAWo2LQqUKVhBYFoeLZEMLZMXYer37MAWWHoVU9gxeZTUDMTjQNn14t17z7uHxa5g9JGweC",
  "key20": "4Wz4xicXbGMmaMREej51J8s4xH1D6ZyeeVRDD4zZjXmAkevATZJvXVdj2oFKbQvzJRRLLdEvq6BbCf7eNfbY5R6S",
  "key21": "5fVuswGCGbazRL6XA4AdB3zENtV2f2Xzh1D2aM5uknUhBdAUQwFZGsdv1A5cAEVqTszTvoZ8fxji1KG6CFte7veb",
  "key22": "2xpPTFbU7YVbPYrWFs9mFUwZPZM9pF4qvGD3Pf1LG8Ngsyf38LKxNMMfJZMRPA9i8EXR1JW5z7tLam1pF3Hf5K7H",
  "key23": "3muEzBqgR7cwhD5eANZHJ9fHESspACMnXQ68X5w2x7LQibyhrwWAbPW5rY2jNgpBVJFWWm8rWM7hAAJD9qAM4DNH",
  "key24": "2LMTJmX86mFgzQaCYkDZCC3c6mW6piAPDNCemrCJuag2PDAWXWTRRGm9s3jfqXE2514vZi3pJ2yWqXduizHMEghZ",
  "key25": "4q2zq1DgmnjhSDjqhvTJ42FSPpWxNDduMnNNHZL7HN5DupcJUgbjAhHW28pQ2racT8UzWvuerTpL84CVs9z4ic39",
  "key26": "5cHTHdu1dN3zseeyaDbnRcJLR7ys8fqMxGZofyE13e5XmTbSFpu67FnZPcu8mEoFV8V4YiibQHirGf7zUGsV6cE3",
  "key27": "Ur8yVE7C48d6bDpJjiY9zmpoUeFDbdPBswdUZKpbQXkNoFTaheUnczvxJiWDc8pimMoyauC5tWYUhJG39W6XHbP",
  "key28": "GWURttRGQtMXfXzu7ThbKqpnbJiewma91kgpyiwWsbZv8suzu9kUGRNGYHnsmv4iXEZC93H8mr4o9SsJzEwJMGM",
  "key29": "2pCoMKuwBoriR9fnspuTCmY5Cn4h96JGEkVYy9LoaQh68eWoNjeMmv2iA5Jtr1FBnJ8djovL2PAgeVfr2uBGUVhN",
  "key30": "3wbxkTfiGhGm1WQ5C3zWAbdGHuCwMozEpSc9gS23ZohCgW4oYQqZYrkurpVqaiTtRQrXF4426fNTE4qrH3HzaEJ1",
  "key31": "PSRYD8tMzMthraHXveRd4782gkNNd1LvqQJuHaPNQgbcnqHx6mMwhpKebDX2pBcHHzXG75X4AaW42LwWYwQG5DW"
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
