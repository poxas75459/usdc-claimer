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
    "5CFoQkdYXadXvAoVGZ9aVL8exU6UKtDAkEd7hMtXMjSxQNcKu8nn6PfYZJChMUDfXXTGuts6NsDwW5BPTxAbLFsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39uKcFh8XJPK37aZgwLtM2mEqNAPRYgPabD8CwmEPwup1t7R3Z8x9ffvaYhtC3eMzhX1BXq2RzHMNjNYmzqAe4Ta",
  "key1": "3C6UBvhuGRo2ceZ9mVaw95VqkMWFq2iTZr2AAviPfArJVYiSMiv4NRqqpYWqgJ2L7aSsMain2rU6ZBDkZvQZPLak",
  "key2": "2sVn4C32fV3H2dEvWYvZaQTzm8fdGWNyZp9J3rCR5g24wuGxu1W93x8N2wRxMJ1i3KTBYoJv5Mt1PunbVeURBeBU",
  "key3": "3xDDQ565ARUhjo8fMWw9Qqv6PeFw8UaY4iWKKTJ3Bg4PQ5uDHKE4Acn3bRH8tYo95QJ8LFk4cRysdts9sVN11RMv",
  "key4": "4pYZmpqjTte994THLDy3w9yv2L6RuMv4aEaXzVcAH3uA1jV6fTfZzoUp3KoYXZgTsh42EeoXt33eZMEKq8Edm7Jr",
  "key5": "jSrpiVu1q9qegG6KZwFv1qLKj2s7KX6WL3rujKgCCmYzgf6QW4p5Wk4ywb1Ze6SQWda6Kb8dcURiie1MyXSokWq",
  "key6": "4y772FL8JE9yxe3XafogLWp5ieKzZauar8AgqTcerU1Jb5wmhrEXS5X5dQEpkmJ1YxzpwQHaMqERag27baUKPoRk",
  "key7": "3TuV8qhsvSu3dfNfbPq8r6yhw3aGp2YZZKwzCgGgTnbqviJNk4i2Jw4WmJX3eej4asXuHXs61RZt3j7gdNPYKBJz",
  "key8": "5ykiRrvHfRcJVZaEUpvdxuWuK1Tefq8S3rDSqcTtGEAAeANT4EbvqhxbtT6J54svh9erwbvC1Gq2AjfqriG31K9H",
  "key9": "3qy52kvMP97HGpG3trzFtXMiVQhCqF2FwQshvLB5uAXRhsXbCyfbT3Qvwt1NBuVVnExj5natD9ppG5zMAp17nvzq",
  "key10": "3GfaqYuGxVQUjgfckpjFpQ3sHUqA3tsAGGsEsWDwARqyjGxe7VCvH9XwS1dKpMGATgX7hCTDd8wkHSNsQv3LCw7i",
  "key11": "5eQZnmgSSPXXzGXdb2rgkoq9YTAcrcnz7qp6Wi28BagYeWYLJaSRQb6a4uzNBtXnqhdSLFghFhnvXqaoLdzvWtZH",
  "key12": "4K62KNanZregmJJUy3Y92LGh4pqDV6WUAG5E57N6kRkp2j1gLY6wX2hWYjacp8SGvrnq5vXwRSiY1RQ7xwiJ5tXq",
  "key13": "S9Tiudn1cMxGiECWsFkwa2BgduRvH1eDSCMwH73RAronTFE3yHU4vvEuqsysTeuctA7R8y9ne9iRhujhjr55Ccb",
  "key14": "dgDWhZ6LqCXNEvLW4PLasA8ZZ6rD9C3EnK2wdsqZxHG3UsBcm17gqKiugc9CfmHf8waZoQUe2nJeXAnmpS2czQj",
  "key15": "5TxSv67y5LXv1jmNy3txChtxf21MV9Ls3y5BfqkesBUUogq7LbwdodfLtmCEZzpSBoj2j1Wq7b7NSnzLGj3871VM",
  "key16": "4u5BLn2jUPeX5MGDveKyFBU4MPDYreKXSh3RYbe3Es8MoTXB6qFhXFuNNSjKE8ExVbGik539gXMCPxgNgav7KuVZ",
  "key17": "XDuVkC7UvzZXRzSXwNTN7DeeNXQxwJBAZtV9SVcBw3fbCdnejK1dmFbWhuA2GeuZngpF4C35VhBcV4C7TVmvW3Q",
  "key18": "5xW4oB9Xy1CVxtpAXeiiyJRogdPkxmakBiB8TzzQuWbTwamhyeDgYbCyW1Z4Mwooosbsj1xFN5HKbQRh8yBxrQRV",
  "key19": "5MrFfmxpeVC6j7doFn7csDdMXoe4r4fPedaRfgkcgcKLPerbnva3httgjPqB3hrvpM88x4Eqm5mV5mQVopwV3ZbT",
  "key20": "56qMtU65qiBhdaDhoRLb3XFYyvFVSiCDHMi5NwUkgbTni4kEmS8hhqDcsCVUems6bJm9KpLDA1YXTXDa5jxSyGPC",
  "key21": "EmPXBeJfMzrNHdoLxhoHdDZXmD8xmSix2UBRYz4bhm7veAEVSgPXVHkFmCQQy4awXxjCGVpN3T2roiGvth3Q4xu",
  "key22": "3fFkY5Hztr7Qo4rSEJaTotbvAgDmNXLt9JnuXFZXm8HtLQqLLFSEknbDva6w1vUuUoVwoqGB4BCimEa9DD9Anrmu",
  "key23": "2WcWWAwdACAGPKeLtbhME8cA6njCbqso6jptZFkXnJMyLvMCNd4RoqvJET8shgMFs5zPjQgktqZ8H4zzagv3kHj2",
  "key24": "UoBUX1PHsdpz4ndKPrAvT9LN9EMsHzFzrDB9ZuMLjGKCHYmfECxoP9GwAcYu2f8h7nQR9dm9KFNuApYEUBvi8De",
  "key25": "TkoPDLDxAD9fZLsf2gdp5XtuGCefv2qPTAauQEmjfxdfTRWpqGyZ3juzDh1jz4zJHn6yFEnynQd6Vg1oJpv3kKB",
  "key26": "pJdKpM7WAapVBu8xVV9o9972t7eFDrqDCoTJfa9j9QwDJ4AA8ydvDWARyR9dSWMJGzBYucnbhbdEgEaRa34jT9C"
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
