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
    "57a6X7UWuzLMRDzdyv64oH2QMsdAXAaGgWXybes2hpXdR8xkfEVMM7NhxS1evgRkJ54Se1LLJNdFbjZntHnmnxbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fecEgu3gF2AUTkSJad6u4xH4f7GiPraHqyw9hjJ9zW15kQqytUKdVA5CiFT899A1n4z5zJ2dSYUB1fE85dc18PA",
  "key1": "MYhirCDs8CFn4KaDyZdZXywwe3YNnQGnnhqehpKPRKdAuUFVgZSuYyxowMfifFAo79Au71tXjAGhPHbqBJnjyxE",
  "key2": "2bTxLWTEq8sKz3DmGoBkT5HZgWjH94DWq6t5kq1VgucCtfneNf41fkXQTy8fWQVNqjABfSxPjtzqPBdsZgzx8Ldd",
  "key3": "3WN31GMy6cNDp8tBvWkXaN6pRkwLeVYt64QeP5z49wUp5jyNdssPhwEkLMATDpubgGkXmGWFxLmEeSZ1KDtEkwzT",
  "key4": "sxQ6pDJT2nwxnxCKpTCS2oYCiked6en9XsuiKgG6NXuNEnDVWZBEnGKVtKbpVvEJuQWjt8je2gpd91JC3YFRZVF",
  "key5": "5yzy2B1FerXUgDDyLCM8TV9BvKztFr6xDhb6ibBGgtKUpRVNEsLK1w3ER1Gv25ACEMqW6MYKb2Ry3D9uEUwCbvBB",
  "key6": "3XsxQDtdZs2MeEypGaayiktuEi8C1kMyJtGErePbdPfvFcpyGXzxi9qFAwC8mj3fxznEGAKZyit36ZmoFZNjpfzb",
  "key7": "4tz23HtgAxkMxo6BMsta6pQEdE5YxLYxsugU7aVGaipGsN3u8hJDDXtajTiHy5Bj9JsTfbd8cKvfbEzxyqSEV3xU",
  "key8": "2YqcanXkDuMjktKxkU5jSirpW6jrc5Y4DUayd6eEudLeeaKXEE3811Z8nAScu8JGTSdRVTrmzRVahb3EZjwDBe8L",
  "key9": "41VPTA5UyQSQiokY3qbXC2Ae1oSFvKp7Wgt7fUD5JnreNCHs89jcAbsC3BkPHzUUCur9xsNcVNQy9vgVKhxX3oMt",
  "key10": "31uWAgJ5SdcvgVSN5gQGgMTGzz5HxiCFZqiz53dcY7VNhhQVJq5J1pe3SEDGywTxDYCYEBUWVPLVu55akzjHEfoy",
  "key11": "gNXq8NM32NxVYyFe91dqYrZ4UaE1REh2tPQt9WcUKb5hrVbUuyywDcA5jZimwKsJfwUuXVCcfuNK6NMwM9P5CyK",
  "key12": "55XLigjthRi8QUUggKAwDG6MqFuJUhYNrMdqSc2cGNwwjkif4CiXcTZTnpDi5U5e8pj17hmKiwYFJwsDWM4UKTe8",
  "key13": "384XDngYjTeZmj3bWEvB9azGfQuDjefMMpqbyby2NGKfgE4CjmyZxZXYwpqCSQiMmZBDCtco13K5zRfQHZpH2jV4",
  "key14": "53c8S99zN4y2qvtKWLq4Wmu3YpaLkeSEp7pVbdC3AFMLN8opHt2x5wMUDSwe9FL3tsHGWLpaHfYbbBA7wAEbHE9G",
  "key15": "5eu59ExLNUX6cGiHve6jzciBkRv8EFJwiWQJXaMM6GdmyPX6Jv8b7DKp7xBM4uh2Ay6y4TKg5Nwm3SfavVuX8kxn",
  "key16": "4BtmEqFKvEcycCrjFGp9iZrnjZzjmvXnSo8EqdTHsnZZCagkuNdaZqK7YX3RKtECcfs4H2D27g6AE1wFaCpuEePX",
  "key17": "4zjx46Yv51ofKr5fUVP35ogMAgNC6J6qZyE3KiV4eZwKGMPGiSYQUZrG9LraGU4SryuEbu8gZJ8QNJoXdcWKfdUF",
  "key18": "2LXjDdRbtEP1kBuKuzLG4DhpQGMzjhiHCyzBjoBFJPv4DiUhXgSvgyTJy11XX1PwDRZ4km6hTHbMF7RsW5fezqqk",
  "key19": "4RTrtMkT7Wz2F4NybVQxTAKn4m8uH9rF2xZ9MLZSMMMcukbjsqYP2Fic8Tdxq7aKW9qJBqSMWnGrXHc1vNPxHCr7",
  "key20": "4Hw8zh3XeYEyNwjMVrWDJBJa4rBnjmFZ343MAZv2BVoNvBe74rS91FnsFc69CWetTdx3GDzqPgW9zr2mofEjxxZ7",
  "key21": "3SFEwqEvyDaeEMcbZMAMGuFftnjAvDsNsoH4N73ix13CSs1y1Fy2gDZQPmStFT3kr7usEDRn36gGDGsGRRbSNgMj",
  "key22": "2tNYnYLtoy12TfKyxvYcz4RLdq3Abgczwr3CMZkgErXntwLidxgnBDsFx1qpFfHxeh66jL62nk9MKFdhYUnsne6G",
  "key23": "45kc6tHoZi5S4wrSNRJreUCF8cay3er5W25ZRdD9Fot4HT4YMSqsL1yo2GUQSwccj3dSGFA314eMqyFQksCw9SNQ",
  "key24": "4ZxnZP5yL9b9ZHfTRKyQ6cjmgvuxnQ1dfKnJb291XtbgyV6DjCBmticM1KiZCFUoeZF4BCMJamoWk9LDXx74dHzU",
  "key25": "5aTeVCiJcjqkt9kuzWcNCYMERFC4UJhTNCkZVJaL7BwTyedGZV8y5dFQFpCgF1o8CyAPLa3JVdwRYA5M8uV4jC2y",
  "key26": "SLyTbrZVLJYrkdKtxYywk6QMc9aJc4D7gwamnvhHR8NRCWJcH8pXWwvjG21MbzNCUo6d7Ei9F2D18fiWc2ZffFA",
  "key27": "4usQ2Zn1M8HEZnSP3Em7D65YuB1hd84uuXgXH5ynRaFojfqFSsJFCaM52gF12JbBNDixu7snnPLSo8K1Q24B2WWe",
  "key28": "4GbuqR3AZtpeSmoPSU679hkz2sBY9fXDQ4LipLDtVi1AUWLdyXppuY5cmqtWTdBGwLbTNAh3KQouMLjRqFvDn86p"
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
