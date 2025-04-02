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
    "4hmm5yVM2zRugdUqXEH2zcucAgPCxW2ngs2r85JdUi1AJ7WQ29YsyY8MEMSGgip8LSjJLW6FjDucSruTuJNSt4Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZCMRKpHGPBG9tTncDTW1UwGc8CE2cENbrEVMHECHm323Nm8qf2K8HPtHbUhGcXFCpoSDHg64szvh976N7RjoT3",
  "key1": "5i2gp2kTmJh94NZgwKWRfrxSP3dPxP2Taqb7Vbuijs1r1qmzGKPe7z1dnWpVjDodFVYL7M2aiXHe9HhXaSbSTNVX",
  "key2": "3oV9pmaePorCTtjiBn1C3tkDbC9sSXopTXX9gPwssN4yT9aZTMHYwGTKKHcpQpq6vkVLwaRa7cRmrGWZwGfrpuvK",
  "key3": "4n6eHbwhYqRt7XNvmVDKKSMP2S3XJrQLhHHvo4JFumQz7uKvDc1srnw7c9xHMZEZkfMGUMcjCUcLJFtFrJvwuZ6f",
  "key4": "5nx5PSkvjjLTHcATMvUPy5BoNTfdmyPgP4Kr5gpwFrXL4ofQnVrtUrpk6BxH3SC3YvG2fXnqSb4PRdwsyC51o9dC",
  "key5": "4EAG2Vwvy5H9VyMQ9WvtAGDmoAooniMmqn6AMcis77nLC4U7TGXPgVYhTWD7x7YYRPh7YtAzDeERpog5jXfUs6YD",
  "key6": "qvp6c2cjfvveiQyfNxwHXnjJebfaj4HyNdjJ56GdqJhDrrarhYCNv4WRensyXmq5P8aw1JzRN26c2NcQrR8MXYF",
  "key7": "4H7Nqu3ukamuWqKcKz4svHZ33Q5pPDBmcxApeBwzj9YTzu6STimR7vPadJeEyndkfcssq9XPVDoeeMae2mszhfur",
  "key8": "2ymSDeCECj5tzjvxTGWj4kJBRySG3Ly9ubVhFDb4JafiEDYSNXfpakLurutEEkCDA2wr6xsz5KPKnVc8BmViZ7C2",
  "key9": "5nnoZ8kvT1zuQzZY15Ct7HBmAHGn27iBYHfjJa3oMY9HeCD8JQ4H75RA12HrkFHhBDejMX1YAYZY43k3kw1vR8P1",
  "key10": "3amozT2cx9ukPBKHyiWRjNxVBbUE14ZHB8xCLd9njtbhGRPqtkjNv5Px1pMoV9K8AbsnrAqS7xjmrwBHYjV7Fybt",
  "key11": "4JSm14HwGxVgQEshv7yyHZGB47TL8CoCXnnGSJ3bfdous7URxdJChT9tgMKKTPFSFXwNQovo5gyQg32xFLtVPRd4",
  "key12": "BWTmEH9LVtLgAmon5zKQ5xn8QScDCosxorBBuKo2wdy9A84FXKfyLQzcMj8SdYACGgzoV7Wb66dhtctXNEggoRv",
  "key13": "2mg1NBq9rRQSa6dBpSnMkMeBM3EaweSiSPf7QBtmWfZTHKPPnKnAoykXmLB4Xv9CfSYfX1EXFGmxvWpVeHPSkRZG",
  "key14": "5GSDL4Wc3ttwBN8UYyDBQqcz6uMB7PLcJ1HGXXJ1pDQ7iagtY6jRCu6GZFP5QpKLRYmmuV6StxXvDa3Nw4bLa17k",
  "key15": "5DjcVKqzoWyzANj1Yv9AV7ziweXnDDH2V7yWGch8tXGqVZzkjEchcYctLiKfofFdcgAcRJ9kei1559vdSw4hoJrF",
  "key16": "34EUJChs1hshexCtud7rfCVbXBsAko4435ghjYbavdazNMNfSsMGNaJ9XgSyrMfRKTfXqpPwAVPVKMTTdouFaTvw",
  "key17": "5rqdRFhQyHLsDs9kzKqwymKm9k8sAFsHkMMtPVmmq95jMub2y26MMGtHynuYoPo7QUMiKBjRUqyKQVtK8nongncr",
  "key18": "4XrsExSfuztihjmwuSs7QFrXyY4y7CcpqtDDmdUKPv3Qy1FS6a3th2D9qY6uwhM2zkze8nfrBjVLiTwf8S34NqMp",
  "key19": "4Z8aRt7CeHtsYRfBDA2hV8cJijAaxASRL6AuiGxD1kjGp7DACHuqobeijE7toGeJsouVcYdtm6qEBtJLv52vz4HJ",
  "key20": "2i2TUtVAEZyGSqjtdHkZ2LYRPVr5yRaidT4bZA49tCEr4x6Q4GWf5qBrZQhNvVeJi2w9RwxtVo9dg6ej51b71r82",
  "key21": "3pPsKW71YcjWLigcqsSBSQb3gKGaUKa7dvRrrLgm3kmwjUP56ohdATZFV5oNBTYiqNp6RfuMiBRE6bNEB1D3wMTC",
  "key22": "DqKH3bvbZdbksQFfTP9ZGp9qyBEtJPKAiQKTtP7ExJQ6FVVBthRMpgXhqFrs7CHWQ7jjKoT3qRo7GK4TbuiQVxa",
  "key23": "24Dpmx3aJskECJ1PT4pYddKzQN2N8T3WvyAHdy8GmYyPBjaH66kwBNmjyU5wdcdqufePRz5KLBAN7TQoKh69Pwo5",
  "key24": "47EY5uUVJ8o6gmKArwJYNt2PzU2ttCcUbBiHHL6HHWhQ2BtpUwVvrj6BAiuBLTg6WeXpf754QbHVgLzQrRzqKHkf",
  "key25": "fA1LfhpuQaTH6y9tRYoxgpNx4EGxJKCotTXM8efRrBNHrMCkHCVrDeWm7WdNV2HKir2BEEMB4grrQ5Lb7JC4zy4",
  "key26": "3THqPbMyEB2bmJytGaPFjY5KhhyKANLunqvHnQ61yoa9ZsG449sg455z45wEVhLehPYgQ9N4P2gaz8jsGWbNCmr4",
  "key27": "tppQcW8SZHUVdAjQmE7cm8FLthZ6Bq8sS39HAvJuNGtRgiQ9tLFShpXfRLdtvDfVJxDuQKVVoJ84YDiAv6mLomK",
  "key28": "35Z3H9WmWp88tbUvaig9QtqZf51KdzphRH57TRw12LFwinCSgJtYtoW9Uez4N193CtoVEphtZ9UriAk6sycv2DBA",
  "key29": "3tv6ZHcwSnAV6PVnnPgYZNU2owNgjiZPTYGSydXxAykfYx2UzQByKFEKi4NEj35Tm9RV7MwqmcsnxJsVjpLA5YR1",
  "key30": "5tyySFErc6WxKe3n6GZLZ7KEXPFT4KaEqU1f6BLaM7FhgNev2UkjHDfXe5zRhPrpPsXof5HMi6K6xLgyHpzLmJ2V",
  "key31": "4EU5EkhcDLKZuXcCQgLxY5ESBPT4L9t2AqH2vTD91KNKVZ28pbXwUqKtseABkSNn4o2Uj7MWDf1yn4zRzXKrha2w",
  "key32": "3KkbTfGP6b7rzxADrcRZVpXhmxDDeBU1tiyuRhhTbMJvuUBrijjRNBrSZC6JB6iPYq7WbejbiD5E78AHDxB36e3Y",
  "key33": "2EMgsVLr91fSPTbJS62rnP7F4pxijxhYG4uCFFcvsk49K8Q3A1RWMVoGQeCpqmBrtsF5kGFR3f4UoWDBMyUgZmZo",
  "key34": "4me2xKN5zGkveVHYanojVW29cHDRKPE4EcLQXkL8z2kfRysHNuhZFKNiVKVHrNPqsXSSCMSj36Awp7g6p1h9VbzM",
  "key35": "47ngePDBkyiCsKs6adCFU4b8vngPHt7yfZ1UbfNztJG2dT6jcfU3gt9gvJrg37wCv7YfKaJWJtcFUNjsjCyQZrYv",
  "key36": "4q3mR4nSvaMzZBZXgGUro1V7cugTnsnZdVwsbThXKeCvA1i1pkVWobBQiN7TLmKYAuc7dPKGT4TjQizuh2A2T9Zk",
  "key37": "3pUunTiJyq8Wz3S12TP4A5BzYo7BjmyH1Yg6J3ZarY3EWm5V3dU3KERmPCtAV5i8hYQUuRWXngbRoZbiQJUtH38A",
  "key38": "52v6P5yzDJc1Y5C1ou8SSexvzVvvJpivHyJmxt3bYz5swCVw9ogbGvb4a9geVJjQGShbbGE3fUywzWhAi67YS7gc",
  "key39": "5fX5FYGkr9qcBnLDHFaA85e6L7Uk6KoG4Rdhvyck1WMkgXhEGKYtzxkkrBpBMG6ztUq4u6PrDzDmi9ivMHswYd6z",
  "key40": "35nCKjK7aGeFMJWCQmjyC9mVUfpT5sJm17WzgWc5kUNmka2KqMcZzCvFUUJD3rzAJYQ1e19jLjKZkPMrpjsRuH6u",
  "key41": "4zJjENx3BJCcx97dNVXyDoc78w1gawPuBFS7BGKeqtBznA5xieh5oj51jcyphCLbDk27u2E1MveWXjgGBku2YUR6",
  "key42": "51AaBPzCKz2MCrDe6Q3SioJwYXBd8UMyMNN4QPotejy4J4zJse4frRfkgtdWmJ29EmATT9Ly2xXBsCDzTwQ678Wf",
  "key43": "4fK9ZVpqKXe7QGzPWMg4eDoLuFJYUuEoE59yYHFSg2yEPLrb5Aq5WTRJpW7D1n2xKQAMryYXWwTmV2urMh4x4sKP"
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
