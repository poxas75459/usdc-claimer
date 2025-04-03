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
    "5Tc7sqiBMQMY7HQNAp2T5kwSRF3woxSKD7qFn9NwKJMJW1nLvau2zvun3aE75JcRAr7FVgnKgrTuNyJvDw65LzSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YX676gne9bvpGAJS1iRkkKMVB4Gs7bJZzLHPALtNuvpSBbhLADffBAC2tDQ5j2eaGxX7kv9xm54iCksvgimHGq3",
  "key1": "5RVZogFwy5gm4CgnxnLYHA3gVHeGdZNHQddepMPgWYvr5rm4ZWCp6QGdYJrxtR7AmdF25CWcKuCPQSzaRP4ZWP8w",
  "key2": "2Qe2eamzGewNfMcisRBjrViwuWq3ULhZ48JVokUMJLcZCzDgCR8EXhZpaT6MUBG5kiC5gzzCmz7pwkk8wP2hF9WZ",
  "key3": "3pLhT656KpwLHYZQMVwLg6G1v2nrBYzvmdqqTjFLLKD8gsw4E7THiRB7jcES4ZVixQCeRjHkWeHj5L5yZT6QqSKT",
  "key4": "XigcaToVf8cgds2M3ZsB4VADXEsWYacwRsxyhYY4Rha85qTRwMTYRaWY7eAhistT4i8B1vAqWXJ4HthtStTERwf",
  "key5": "2D4QsDaFRYnVNGicU9c4qLN9QdNpGkt84efaXwyZB1nrbR5LPqucQSckn863yzm8irDSFd27hvy3hTPAUsp4B5JZ",
  "key6": "2SSbw5oC1c4cPiNcR1NwjoWT19BRQ4Zry3vD4ahNpa2iBTHQXHr9QfNmYmajNMif2pbYDBPm9QiX2W2tRsydkKRB",
  "key7": "C93WyudpSaKrBjySY9YVTvwgTPoSRDCDiXNVoZzW1ynuNFDqnNQ1QcRrPWTFe59XsQbg6ME17GPTLkf3iiaoA31",
  "key8": "561AjyMa4FFsxE3UxzeYnS5a7bFYJ76DCZwtqvhCmTEaGujagmzuBqkNYUhcUodadugRz1GyQVLoBHv48rDSagMc",
  "key9": "wFmzq8ppeVPLC2dkANZjXz6o1QcFaeKrr8KGb1e1smjooR5RmRC5KPTxJBpajiVaVfuM8ubjqUa6wnD8G8ytd6D",
  "key10": "54MjwLcfUgaFKufX3iyRXYq2Spn4T2d6kcLb6uEwJs4CeVfK5KsauUnRPJBx8Yr42R8AhgwZVkzqLrp4LhHw9kMV",
  "key11": "5YaVNS6wdVm4mvE5Y8kRw9TGoRfqrYbg5N4ooWfBz9fLB1ts23b5dBJ1nbPYMC58J2maMaopQNuj7Yyu7tNBxZ1U",
  "key12": "2g81axmmXfVNEn4W1vPzLTRrB7VPhS3tJavAXdV5Z9vWp3Pi5D4H9kC93ywPHjTkERe8pRSTAPYRXvyD3K3eTsn3",
  "key13": "3Rqt4pmJeCj7pp5eMnwxAyDLKr4hUfh8CvCbykkXM2zzsaRyHCDxjsttoKELiV8u7gW6vhz3d8qUMBp562rddNCf",
  "key14": "5dMr2jBoV5xnRyH6bhz8JNS83oi9aaj5qntov38Ho61Arpr93hvNiMzjTddMQcbT4DMhNHja1GgFM6Pu1iAw9SPi",
  "key15": "3LBkxTyACwbpqT28k9eiv1HxeQ8TAT6ZYW6SXkBct6zdU4sxo9MWDoqbvUXVZDN8HVsH2xqU41eaJk8HHAZVW4PP",
  "key16": "5gdZZVBEiB59Q7DmKiivVXcsWcMoL6eyee6erxcvej5Qkw5URgtDe6S3SNB183KJq6wBz4bKE6MW1KdersZFFgR2",
  "key17": "3tamoNEL8dGvHoYRfezdjPNcdbyAVaJUYPAB8CvmFZ5GAqyTHcZ9LRMVXXRb7wBE9pJ8YyGLDJeV5bNXofEuRBHP",
  "key18": "299tfauwrKLcJdAo6UoUcTf3ftMKJTDr9k9CteTRy17JNcSLrrqty8riEGrim6eK3NHuL8H6UQE4aZXyfGrwy6zU",
  "key19": "2cQnxwbUvSD7bdv27DX3XJbgD1teForNgRrqdrxz2QSNQ9h6r8WaqefcG9izvn9oSjwDbL4MCqMCepcK1FzbBtJH",
  "key20": "4oF974td5SpETV9rVqKtTgvcNjHvnBZufA8KxgPAYTndSK78NhknyCL7gAWJ1FTDAFGNfggHhhofkUy6uBdTxXfN",
  "key21": "3TcQaatFXjUpy7LUYfCj4RCY5Gdazkd3WZaD1Hfa3z2vEy7o3hSTTYbo4F6Ym6PtFHYBCaWaNUfc1dNKBXtq2tcG",
  "key22": "5X2bLvgpp21VuijFTrZuGhoyWvhdaZvV76ptE385jrhnmus7itw6R8STVL1wP2kYthBTHuZJoYH4RgRZ4r69Xukr",
  "key23": "3Ls2WPnqXdftw9AKnmcW7WW1KU7i9jhW722GbZitJo9EMtwzo9enooKh9ufcbk7PXw88sBJfkyej4qgPUoPRavF7",
  "key24": "3oKQwAjy6576WREXwNf9QZBJCEpGZustWPcfiJf9Mr9ZmHYxDyjuVQL12tEdzT7tfvh5SMXom6XupcQT9BRp8o4u",
  "key25": "2dqaJ1WbyT2wkTBeSfBc4NjA6hFpoYEhfHGu7MiFGvGvfVm8vBFE61CEth9XiZKxSbJp4ePkqLg7rUuNVAhiWV7v",
  "key26": "4UFhiPS3akxqKrKoSdFk3HnWsx4RKpcC37DXBwgAJBeNqx7D6YuP7HAqMbgY4fD3R7cd8CpsgER3xTKiDydYMYiu",
  "key27": "3S3RJVfN5MTtYi5mwMDLmGjSeQtQCznbz1o9AnKJuyr9tUsYKYmDiLds9cqZL1oYN4rJUmbdhwRuYDkpbzvLaJrk",
  "key28": "3auTnRxeQ78QrSFybgUVqdxmeqAx1TdB354SjYhYsUzYsJo2ashW4Ysr2oSiHP2o7BPysrP3sUkesEzW1SoWWKNb",
  "key29": "3kF9HyJmNXt5wqjjwx9Q1myiPFTwc1e5MUpJkyFYgXCYJRJC5Jx4frwMzqpHdjJP3up73CYgMRm9rr4F5Z9KKtJn",
  "key30": "667MhSZDEnt9TujKYYqa5Q9zDVufJo7NVfRQ4peADXUBHM1CTE6GhTU16MPLb3w3ccHzKDhAXnHW72sW7qAj5Kvn",
  "key31": "5CyFQqBR9oxSrBT2ihpdZZTRozbV2EvnehUnEjUEvienCgv7UXu3CNMxZ2agNApaFGjtrN2KPLCdwU58NAuF4WTg"
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
