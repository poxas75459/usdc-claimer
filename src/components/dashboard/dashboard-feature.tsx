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
    "2vERbG2UgJnh1qjd9Hvr2uhfLfYGEY1oUu7u4Pb3yBdrVTkeYTWkUCxyoejesBKzqhU1RxMGmkmRHyZP4TFA1wsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i53Hw1V2Askb7AB3XUfuAp3y79wRPNzQZTo93A9wG61F5bwwYCdKTDrzEEq9bNNsi42K467LnqtLLiJMjtUPmuw",
  "key1": "opAAmvLZLnfmJzbRe2Esca3EAyaTheEfyEwVoAZsSCC4mD9oJmy8nXJtFyUfSBrLJxKHrHmjqhp9HEvmBCYzBJR",
  "key2": "4McxwF2pciEYPydy4SKRn5wUhy74TMfekTqfAo7PruoSZe2TxFgMs99Ud9vxEbnBmbWC9bVVKGFXRHmCHf5Bftit",
  "key3": "3KjejK6C5LQSg7SXNMQbwLEvEmnpKppznaKhVfWC8zS7nZVTmTqgB13V8AgSqfnjgBSoo51XG5YYJbCWFwMkqfHv",
  "key4": "3FMSzJtxchFX9M3RWmh4usyH6DUCJkUs9EzhTR7kNwZYbUuHdgb9WMGihbpgqWMWhfBoNxk9inYvhNLRJQ7HyRYx",
  "key5": "c5nojsQJ3GSweWbyhzrh3uv3rMAYybwP42rfyiirLcz3JKxPb9V3zJTvUe4YQwD7iDqhRbW7DidG74Dj24zaxVU",
  "key6": "42UL8ApGUEmjEM6UoUuwsqCxBWSRcXtp7EnXCpSJvyCihsbLMe4Bc9296UCXNjP1eZfJCekhGPRtFMEfJz5wxkYA",
  "key7": "dWMukGqGckn4qufvALbrKmrQK2uoJcSKmzhnbAULd3VWik5Es1PKdr8XPz9mMzFtM9ycEkpasP9fuwUG9X2SLEB",
  "key8": "2qbEouf1rt1LDvGw8prk4JTB6pL91mr6H3EH34HZkiZ3k9ywkT6XkiRJoFYUgVAvfec8ooUTRgkpj7gGGuBZpVf6",
  "key9": "MawiHi8RFnMKXgJFTxcYGGCJ2avaA2wZdRTPHFVtFbaoDAa8SoZv9F7mZ6C73rV9JhGH9SAQNLPeuddWqyqarSB",
  "key10": "3biqwPQYEQ5491ocn3xp2fPTRGbD3A2EviaU8n7ckMe791ikqLCVj8HuPMXiMGpaGCwzw2YyduEKsamRYY7hUqY5",
  "key11": "2BKGYJFB2LFPZ2xvLA11GsNHeqtZm3DvAhHVj6kuYW9pm8dJrHZeucwp9g9m5n3FWf2zbxkWKU4VoK2xzhEh7Mr2",
  "key12": "jhVpA4VS4Kt8ixm2RLSeTyW4cSKqMCqiLw3uqWdmRqsSGVYvwmwAkf2jHXa9Jiig26Qpc31mQgeZgMubA1C28Aw",
  "key13": "4vmXDv5rY3WxpiFfKcM5tSGF96d24gm134KVV8BVKepcVvkqTTr1KqYkX9jqAkDLsWnCV5SvPUCYmscEw7sLEziU",
  "key14": "cjRw6mZ7EccHVheziQWt8Y2p5KpeDmAFqksuWSrR26VUXxmwduRUTnBMRAAjiKy8WLBp7Q7an8BPg59jmQtuDuu",
  "key15": "3i9Zpfr9okRnp3xEfo5j76y9RDZT5ctFfJZqm1JDXWe59S7xWrnQNjA9PKk9DTEcDsfqfukXaXAagpkASed5xYm8",
  "key16": "5ZksUqrdPKWCRoNgMaYP5WCvUDXg7WQK6GyErp2GkaovAHhk9Yu78FCdEoGCH2jiR9tioHH688hucpzxkL1ekNt3",
  "key17": "5zCbCn9Dknf9VRDoRBFy24RbQfJcYvrYuz8E3MqDLD34yBJQb59JjMCxK9tYBgQ5yzTAFwD7KFRNHxdyAbBkeVST",
  "key18": "5VkLBQbauMTyqQpuTB5Ychd9ZVny6hn3vAm2Cs7EZCUxdSs37ifs3a8ihFEDy5q1p6gqwP4J7rW8ffNdY55pzQVT",
  "key19": "2x8JXa3eA7rVYcEnpZUMbEMssgnf7TdA63yDa4vrPSpy8cNZ23zw6hAJoiMsekKc3Hsu6qc8oSkqVWh4ogpDGYhn",
  "key20": "NvVXaywnK2e8ric9o2kZDAnenwiD9ezBpAVpBaQnQuDUt9VnkKkY6JEAkG9x89zFF1gzWbZ2qFPKuCSSwdUnFmg",
  "key21": "3MXV4addez6pTcYB58TMFFhtYv3MnauP79GZqQHmyhiMYBfZV65vsUD9Zc19vpQ1iGqYe6gPXsp7pNhkzQmrauYV",
  "key22": "3Pyh9MuaWp7euM6tnsZ2YgUZu6ZrrjrudHhpJbYRX921Zd7BiDamin7x3EC9MABpwC9vWUShu8FrQrRKEvNoYYQJ",
  "key23": "33dF9311imBqjtZMWsziGjYkfSJxhCRqy8MD4oJ6y6dKwv689R1XissfB3oDczZEHGzdnYks8qfNXMcjcMSCLPGN",
  "key24": "4DZWZppERqUtZMthJF9Xp6x8MAckjsDvnzRKkLk4PKWHvYQXYwGXfG1fWjiTgVWh4JPfF4Ndw9vYQ4NiaadtUfya",
  "key25": "5ZPouPTeYmMZZ1hhHnmjBVnkZ8SD7vq4A9JJaMFdkP6dea7YQUKgcGXhtxPUD1AsKDzKfNBDhzqen6boeUugmZBn",
  "key26": "3TXquwqCubR5UY63x1xv55G4rhtnWANKTwN19wfQUatCm2D1MwkN5QucSJTN1Jd7RbeZPgZ3yKPnDwSnsSkHWo3A",
  "key27": "4fDfF3AgHsViHso2xoEBJkSDVKuD2PBy349g4faWJz38DBxZv2Lps5gbgScjd56AdHCCJeJqoAfrURAtDEdwkqPA",
  "key28": "5TNaZZipQbaYvzxBwGkAat3zHy41ynvXC7tmY1C9eXnct4n4EoLEQFPUJcY4EPyxmXmMJ6VrGXTJmRWQ9VdWTZAu",
  "key29": "NNSNpZ22ea3w9i2E4EbZW5RJzR4CZzkWpW9KHGsLm9TbSVUEUshpP4WZ1duY7H77eiiagFLbux4EdEyMaeiRsuV",
  "key30": "QLKjNPjVjGDAs1mQdaQpPj88ufzN1cQYQKiYbHApdiPf7Mut7j8dJze4SgHKCd2sbNnvXPvUHQ8ZARoDk6Vuc3h",
  "key31": "3133AoSCNitN9jwAYGCzwGMPvt8YJYD4xXMa7U7ecchtcxgY2oCQCJQWkuAjtogA1sQWuae6zoXq2iMGFVQB1ykn",
  "key32": "3UpzjAG6JqQhPpT9buY96wJE68rTRUxZBf1T2wXh4tTnPUSG2QrgDyfZQJBtHUvN88DAFkmngzmBKrVdhPSbWzFo",
  "key33": "3zGCAwTuKFrAUUZcxBmKVWY7k3ukpRb3UVhGhG3FLpK4thBB5eMxzJpGrsHbptHMKJBiXwyewoy5orV3gfJ9zjL6",
  "key34": "3dTFCuuF2wMYoKU63y8gVUXCytMJ9kT5N5PAUnw2TnnLUpTnCVQqorGaxzQTDY1wHZnGo7rkHxnJAMzD1WpteQwH",
  "key35": "ic3iNYt8CdH5GV3rcr7VbudbbfNaH3Wo4nQ1GQPCH74aXPSjsSgNYAmhP1jEoesd9MfdxMHozSNafwEMk8Dss3s",
  "key36": "4qGmfH9spQX36dYVvXghqfRVthgo4Qe9xbGyst4D21zfDjXAAa49ihMjSeHAYdk27qV8hmVVcBfxKTKZmYp8nyAX",
  "key37": "4wREJXxFr4n7bB4wRb4ezrDcU8jtEoec2ujZRkxKzftz2y4RgzD6WYNDBbLA9EMGJfGaD82oV71uw7u3UuHR2ntt",
  "key38": "2iAD8GJzpK4qMMMK8MWqmGdtwBxkggRQ3L14wRXdbqvXV6UFdPNumoipw9h7QUhCYmXQFmgGPqi8zNfyL28kk6sR",
  "key39": "4RS3TFHBqkPETis5nR1m3FVoJvymMDx9kojzH2zPfNgH8vbRe91knKZtriRuMWYEtggu2VexMCrZK44ZzcasLR6q",
  "key40": "2Zqmuiy3nUDUPnbrioRRP9cyyTN7DS6DmsgZeJDJvYbh9gP7HXmarYvECaS8EPQjUZHN8HcKE7LrZHndjqsmy2rx",
  "key41": "2ex8mSFuQK3GNwrhennTktp9BQ6AtTCzckxGpewx8nZZC1tb46EEFiJx5WcrmBDCPTX65oh2gEVY4vpyNCtiE8v",
  "key42": "2of5phtticnMreMXQSepGi5xTqRWpVXUGGmsKPPG7L1rEkBgs2rsn9zWebep2TWgtPU9jwxBsmEej3YWfZxxXNki",
  "key43": "nPWtiVKp7eZHmjW9muJ4qkEvEn9WLkbj4mX6SJjWpJyci9wPaUgnNGBBKiJQvzpvy5QutdHv6CrHA1VXJGpFA9o",
  "key44": "3ujQ4E74891MN1gyoBr8YncEXGqqKPXnjB3tcQMT1CksUTkZc1daZS7cCUy1dk6wc9A444RZAgXnfaaho2QtNsqs",
  "key45": "3HeYqvFdiXc8mkgMEMwCvewPEuJnxbeGPLJyDj77f5D45ax9PaUikca5FKoX6ZEmZNTd8yoU3CQrTRUhNbpykVTp",
  "key46": "4E6wjzDFsjnKdgBNCaXkK2XmniJyRSz5aDrzTqurDJePpTxbc4dG3ev5KQR2gZmrSyAPqKpzHZM8gzp9QBchKkoK",
  "key47": "5rToyGqJG2KDupywDqQ6dSoQ1RRcXvQWMFbMREAn43UDGTdjdMUtQ3XD8bTiPbgDK1vs7kaJnpAGHThnGpcku7fn",
  "key48": "2pX8rVBXpNBtTM1b1MJYJ5eQ6vnsEV7jY1m5CiawSyQKD3cUKEji9dgBSzMfq6vj6z3UVfAGvk27WpG6YyASNgc8"
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
