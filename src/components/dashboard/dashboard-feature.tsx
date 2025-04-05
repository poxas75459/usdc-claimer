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
    "3i1ATmGR9sDo2TPViACfYLGRno9xQJ3vWj4ZNET6DJvMMfG1jamnySZvGExtvdH2ZoNGKvMhNEDJNjWQU3cGzbcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zE5Apgkp2r5Bk1KLchhsXZW4j6jQVKVdajnnAPQjPiqqHoMq5Q8dBjAx55mNtzRH1Pnv2m7taNKT8EtVW2HqiNk",
  "key1": "54oQfzU9hWQv4A3xgAt6ganVEdMpfxNskB2xt6QNWeTnPscggJR1nqTDdv8ncsWtB5JmAA5XPzMkJ9a2vkSv2jBw",
  "key2": "ay7s4sQ7yStzxhimtwxumkxBxx6phqbCRNowvVwYxxg5KbAd4y53YLmMJQjM7fBHNfaSb4nQUk5NYauA7pbk2HM",
  "key3": "4aAkth3oXP9FZ9JqoJ3BipSBbXEwbaSrtcWc72c5ZkVwdSGhrnTgfp8Eq4a9XeNhCSpeY4ZFUw7dBch1aYem78CN",
  "key4": "5WnkRpCX4JtgosJzMKiYNsxJMJYnHLs48vcPQM7C36D8D5kE1VgD73oqRUzYKVS3Gset68xt8K9xZ2DaWKac7bM7",
  "key5": "4s3XMiFhqii7tkSE2HZfgCDg7LXqM56GyWcwvLPYUciMcsdz3zQgpcTL33uRsLohVrJMYdxEX5SRCwUL7cZzZWvE",
  "key6": "4DHNmgvSvPwQQLfi4g3uEsZdhfnuWhDsXnXdZNaxj965HcnxMpTBQawVHZvbwFtBKpKY69sb7jWHrvfnq7SsRj8i",
  "key7": "5R2WhdKWtc8ioxhLuwJbKfysvysSepEhaS1R3piT9gnN8nrKfiACurSU6AmrKUknvyJb6c5DwVdvAohryY2SDiwL",
  "key8": "5S9Fpw54DExCdj27yuG1gEeCmUeyqpb5W78ywhTytbT2aTPHuUkvGRfafkTJDcn3EwHxwqkg73w3T13bXBp5cBRS",
  "key9": "2s1Uzyfqmw1aTTvYiVdFvugaTP1vFzkdKYXwUwfGckG4jeNVZbbvMd8RKoPbhGJq87YEYaYUryrR239TfxdarcQt",
  "key10": "4T3ZKg9APhYcs729DfuCvhFnzdbFeFgsoSs69ot1bBBEKoikjF2d4cUargujot94ZV7BoDFs5b5ToXnt8bfH2rH3",
  "key11": "Rf5WduQETFzEjVizuwcQmbYVGFHBhxQM1S8rS9G9Tqqdu3h2PiF6oMiSEnEBrUXwXjTvxrzEA3Ui5GHA6e92urA",
  "key12": "4uYMq6Yx8jYtmYJheggTZVcoTRBLUGib6oPZyB6JBw7w3N2ceuU8QorEKpJX8Uzkcy2U1Q7KfidWbDuytRN86KFD",
  "key13": "4HDLULYCPU9dgwPGqoS7fUKGTjk7U5UkacYgbZbUBYA6RpEgcrkk6y15f2QdmvMrW98Lp7s5izwqrUG6pw46jaMp",
  "key14": "36Th7sjh3F5DwD96dWaVK4VEwe22Fv871JB3ju3mDuPy9BUZtwg6eZfsbVSPNEAEJa9o4ZKd1kMsrEXosoWyUmso",
  "key15": "573w6DC8iaSFDGa2FPWnkJZxxqN9Qy3ac7hefjWJK6CUqWuxECyhFsYRMJ1KXgjjZZKM7D8hd8D1LbJBsKKhgjG9",
  "key16": "3KrHko839NyED96A5xLrXvWyVv9bLNUdtzMmtUMMep7tTtnAiNzUm4xNSSmVnBfuGFw5Sv6kUSfGbyHXgVu9q3Wv",
  "key17": "51JfBqngbHdmLopKSqxyEDTxpoMYKYaCrJATfXj2uKnFehtmamifkDJsBAYiU1rAHbCYwVqJH9rf9UTADBvH3MzB",
  "key18": "2xnesaq6dE7Z6CsDCYnRckKZhUBfhct1WjEeTHzr2rn8nog8MsrJUHkWg7Hh4AW2vWFo1tZvHhQR2SaijKAbCvgY",
  "key19": "4t1oUJevQ3SRyx1k18MynEVRNj1dFX3sYEBigzFJ1Pdu4aVj7ub5qRRdcNPki2VxVFiFk3vEFqniM41ynZUyX7Hz",
  "key20": "4CmADmft81bGRnJC3Q6WaFtTXQpC8RxPx7WMMPymQ8zaniM2FyamLYTBNoNZA7UHRNKUY9Z9H8qEbZp4CMokqPsJ",
  "key21": "3zsbJqi6V1Wdo2Voe5bGV9is9vtVuC6zRtLFnANbjrCwboARmXkrzuXbbBcjVFtf7rsKkh7qxzEwKWzcHUsR4qrd",
  "key22": "5aqoH4sqQetbDMRVwqdNnLnS2KbYGKDbFz7aRqkgTsdABEx9ch6RpLueCKo28UKKmjTsyqJkqjttPJAo7XYsxHfp",
  "key23": "5GZ2nTU5c5ZJay3iFonw9S5ZDLKoZWb7P9RqwL7HwtULksAksvphv79owDfGah6ERXPDcR7YCqMLPdKp4qnHRQqK",
  "key24": "5PcoTHRnqC7DZLzyrdxZiY6HpBS4Ysn84WiApfMoD6aqjito6gaWTTHDUwTMoker5YFEMgxybsTCyeuY32WSxJSv",
  "key25": "AoDo9dhTM7pkhkZBNu9X6oLA8cNiHDf7dxLCp2gWeUDy4zyC8fsczgkkkzYffQSBuqbvxQje59URdeTwa1rYEJW",
  "key26": "4bMNBHPKx2ZE8fnAf9x2oukd74UvGKZEvvAo8VUctLRmDbxpry9HvuWZDsW3LfL9trFSnA21KAf5Zo7U2BhY4CVh",
  "key27": "4Xq9p8RoY6iMxjFMDu1bmgBH96bSFC4EqFQAr92Mdz9wqfAgacrnz9XPueDHayMJF1TBsFMdRwSZdKXzGEMQMh2s",
  "key28": "4T4TssiXxRNMapvcZDXkSugweqwqssvaDNmCKaDUQF3VHAoyWEyZKrFsVNehQSrZS68UJDqTJm3JgAtmi5P3RZps",
  "key29": "4JJLnymsBGHjhczkbBWuLFtnikg1bVuUQu7EZuNdHmnHSG3xoiwRcSEk1t8Tv7TM3frThyPwrtiPoRPkKUrvE7aa",
  "key30": "4ZhbySPFoqCmk8aUj6NZMrCoDUsmYrJbFx3o17d47sJCrqQwbaGtkrooo8QAZfeFyTVSfeYrukK5Wfur5AmARHNu",
  "key31": "5negPQnBf8wTWCRk68yWhpaeNCAJ5jFRkJJdnzUEiMmdmZDGVP52uP6ZLSLY26VVM54upSuv5TqyvwruJZf6B6pv",
  "key32": "x6p7ZqbY9CmVXf64onMEnCZ16DskqgHRnxnkfwpCxtK3JAhkpysepniYtJr4DRiMtjJHg8uUb61Jvevy7QHMnTA",
  "key33": "KecuQWMD2eV6adC8uR9Tupdo3WgdaUefaX7EPBb3Fer44VunZmA9kwTF3cnd49QkYQGsu5LqfzdL8rjULDSTRbP",
  "key34": "Pnpb15aTYX2hCZhitjGzcDiztC2PUr7WKiwqiF7KA8aB17T2VvrCo6XXzVWHz8eG22pZYB28yUf4V6DmKCjS7pk",
  "key35": "4r1LdXzGnmJmCdYesqg1ptoQipp2gyVfWo93YV5VHkgZu9tYnWZLzLFe3afqJUbePBChirJivUBusy5bNRCuSLaV",
  "key36": "4iqbDpHjEJCXakntqjkuCy9fVajkT9sbQwHekqJPuh9AER3w7oQJDPAr1zxajdU8G7GytULfJ3XfhUYmDLJ8jMrb",
  "key37": "4MfeKJBFrmnYSjv7EFTbWjrbeDituYMKC6kUE9bTpRLxYLNxNMKoRz3k2yYhcEdTDNGoAPapLT3RXGhekUN9fV6p"
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
