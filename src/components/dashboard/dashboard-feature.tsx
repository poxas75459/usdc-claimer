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
    "5YAmzx7FVRed55Y7L6fMTT39wv3pgwFLjBaXmw25fCfNtcAfPNWfgyV12Sa8QDoq2jSXD8H9kM1NjHQjoprz5Zb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5McHL8JUm5cW4yvKnBttTrpqRJa7EiEWPfzMeFbVybS4fA7UD5vjXPKwxDpNuoN6tkdhUbTRzngJcsoi9VEEMp1P",
  "key1": "4dPMhb44J9J3D7jABoz1N88CV9F1gnLJqg5A6v99cbqZhakV5B5L4ME9ozsGSXXUDux1WyY1BqjyMKKXGWPmjULQ",
  "key2": "2QWjf8c2U4Kiuw5PR9Lm6ST5pSpdonbbTLBuikCQysJ9gVWVThubqmJaZZm5ycKr5Q3YKce99B77YceZqWRMMkia",
  "key3": "31N51mTZNhc9WCuUFkefoXCXzaS4UVfzdrh2vQ2NGS3xST9LGMSxY6xn8Av5ejYCtNydnMFFe7vDTVKVTsnarbh7",
  "key4": "5Sa57zC8Nw8Z3PtfkECpqgkP8meweT782Hyt2YMd123GfUon7bBjj9L4mpNdZbv9xCmkEhiP9xrVYK7UvN8oMyQA",
  "key5": "44zkq53uotUzoQcVA86TKHVNMnj5zwf2iKVJfWaNGiju5HDsf5TVaWAe4Lkn3VaUhtEdajh1orGN413jb9ZQufsv",
  "key6": "qm65GkF6QbXQg5rmdHMAhYZT3m5EqGL6i1HSDCS4WF2Sd1LhjV189XZcNc5yQHw4GUaP1s6YFhZgKF5NvpMWrgS",
  "key7": "3uPmWZBDySHAYQ8DQUEWdPXfB144wntds2ZtLead1iH815A7xfezPLS4RBSqvxUaLwiFwfyDnbS5kK94qAhGECE3",
  "key8": "2qgCtfVivD8f7wkW16dkg5DX7GEdCpDMso2bpxoeiTL7AhCW9zAjanrUyzgAd8GqwFa6sitjfKf3CE2KqR8udhWt",
  "key9": "4qorwauMdEfHKVRm8uiFx9DhzGEVXH9yVxsxsio73VcQ6NXXe89GjjV3hTiAc3S8dYV6Ym2gUBiVAvA3KSJVn8fk",
  "key10": "4rL6AganXGhuQhcoVLKmzCc168X531LnenPYWw8HKMCffiwsoeQpJwkWB7Szqut647Y6cA945GqhzapdRbSjQvXF",
  "key11": "3nAxaBVgvrQokTQEhmqE7enBxdZajcWLWd2jVcUBdszL6GMA3MAxSS39tvZpz3wQp784fYBRLFw8tedDzhMZZ96p",
  "key12": "3hScKPHoZqvXtzECzyi945z7VSW5QrbANp9S8QAUHmwGcaJN4JAedmzbMgnbhGZS2wmUBeTBeEF9cacuycfFwyUk",
  "key13": "2SnSZFE6q5Un97JpzbkNn3Pz5nxCufSwdZBeaSgmVJPYbEcXGkBAYRW6iKZh2vz1Hi55wgN4qjqSWpkqAh7k7Xtx",
  "key14": "RfTgMVpe4vTdN933Yc4dAmGHtitkrFSEAWwrLnD4HgCSc5hPpNC7dbAzC8o6Wv2qpo2Ggu9mLZa1mDE6hyzjAwj",
  "key15": "5pmixUneaenMiGtsZfhhUPw1ADdCtY9XJ1wZSrJ5DY9JsQHM1Y6gapNpEYCcWbBvZkdXNZrGLB52qbQVYUeZtzSH",
  "key16": "4RY61DDeXHchv5wi9KygGHAdBJ4KafBVUDkTsbTxraiaij7yN137NMevkuooSQLJ9xbk6xt1dZ5gWvTh9VDnqziY",
  "key17": "3bxiLfoLdeFiVhEEsJ1n2JMf2xbkn3E8mDU7aoAqao3ikZxA3vWBujFkT9k6RkyC8aa86UukETM2Q7WwoaEJuvWF",
  "key18": "u7sCSbpPe7xJoohc517tbe7RyneAuuhfRyTNCyJVT9ZMnWjxKQkZyxVuisUacPmVgQpCVmazkUk8WQahnvVfcTN",
  "key19": "5yKc77eKi8aHvEFaRz7Aw15FrsEz5uB8cRrprdVjsyPq6Eim7Zd4ystNwkb6Z4wPGLNG7GizEsabuj6gRdDGnKp6",
  "key20": "HXYitzBVmL3cbqjXvCFMekS7USCbCpAfoedbv9JosWh8QWEd84PTaSEU22r59eNzxmQTyxzadh7mNmuebKKSuYM",
  "key21": "9v3uYcvoNPDAkA9sQbH7y9ZjZXD6NN8yqgXsaTKrHx3hxtL2Zt894TxPB8KJvt57ywPcouu63bUC6vejT5zfmDn",
  "key22": "3JdSzWqms8Ld6wtpAujLNXmbisJAjPTZUvEKSw5hN3Dji1DdXpTwxreiTxWRo45fj7bsmcEaoeqW9vkYMyxWHGe2",
  "key23": "HiwZNQTvJfiFjYMbWYR2i45YiX5J4gJqX76fMRSJSM6dQeFTU5PkzaTV95UQVk1UBXsE89euvTamC41YqVbAgGt",
  "key24": "bTURthCzf4UvQ8aA4nsFkDB1pBesGgDKVZJMQAqmHyXzYKKt6rZjcg2TJTn74Vjj7jXzQERS2mMFWHU9x2BNEAB",
  "key25": "4rxE9gJM5SA1LCR1BXvCtpWp1cQGzbNDtBB9T3zxnufJsxmCBCGAGeeupMtEKTvajqnjesFcxRq27prV1TcYehyn",
  "key26": "c9ryQa7HzzkLHp5cHu6PQdy7onQ51wK9Puqkk68jbV8jkSxEZg5ZRMbfGJCgwhTotBxnbFDNVZ16GTPwQE4yTQP",
  "key27": "3FBLEDGqSLmVm51fYoY3QzjyztBjJs8bNPg3vWDqXbGfjvpFzd26hEqimsZSAmhja76LD7xaFYJthPRhY7xJVGZu",
  "key28": "4FKnF6oKQjgMQiDv74rLDCScybGpZ4JZB3tk2uskXohva8ZDgYi6ToHbADT9QCekwiA1xBVxZA5tUMENT8dBVyjc",
  "key29": "bpqCKoRWxEhLaw733CY7bgv3zD14tnVZ7MmUBGJX7yeQffic1gr6CKAb68YwqgfddjXJHeEqgtmVUHBo91qHXK4",
  "key30": "QDCVNxutUdm3g1MvFbWvJWdMigqQ8i2wZTstQayevNYkywqc3QbMi8QCX913F57yHhuM2LATYMqLjdY1eKxeQ2E",
  "key31": "3fAwv27GX4eWznswYcgPdyCx3k9yHxsZsYRJENLK1wHQFia6qfQrwTGyGFxCTaGNHFZXATgsqGM3MNfcGhZcFQPh",
  "key32": "66CZM115L1AroMVFiqe5aXBssDWGat6xDpzM3ncTQvCiMmTXkFbKBbKUDmh3SSynd5MrjfafjjWfPFUbmFjTRfFA",
  "key33": "5uZjVjBpkJAFrpXpUJ4vEhWriDgw15p79Fmg7UcNu4Gq6PAVXA93C337AHUnxoVVzaUkLRzX5njNU2b73XLj8xhm",
  "key34": "5hez9a7hXF9L3MQTzMLc1nRdtjqkZujxshzuD5R3WVZBqDXCsygCJeWhxzyDKuRX31hkxjmovsjfiCvKDW1MvRSi",
  "key35": "5YDD4HKDDNXtNPSESmLkTjLND1yBVmpuJdh2gaqk3FcvzLv6yJeYy9LC2xhCxq6NeE6qBsDNRBgKtwRxpUSPHw63",
  "key36": "2W2KcnPTCrkWEELJ3fBquAJxTYwHKcbPTFRkrytrBKf4FkocCW6WU8RkDkC22JFnK5cYya6RemGzyzq4xDFjmuhr",
  "key37": "4Z1W4bVdEsUrWjmRkSDWZR6ZXNmPGEHJY1vjGcYt2p2eEENkBBDjnsj6zpah8FkgeiiTkFsHn5idPmDUqfuRoz1k",
  "key38": "4qzpYZbr8B5qykw78Nn6DfmaceiAwxn4HhWuqrWo2d9QZyZbQic2LcSQwKJVdncVSGFTXYpWpmJ2E8oNYXXcuWh5",
  "key39": "3z4ct6MKeXZbPD5tZ32YoBv4vYaofidhGZvWgjfcLSkeR3KFeSHvYEeuaFmyQuGmWcHDCAirhayMinmxdV9Ze4Wf",
  "key40": "56hbaNjhMJ9iFqAVvtMV7WYXNKr9wqmj3ZNvF7yaoF5r6FxfbgqZc2VJUFK1sXaKzt7Ds1A4VwdkCBVqu9ZCiemR",
  "key41": "5qvf1PLz3Z9jFmY8iEQFWPAFBMQWEHNUjoZNHoiPtZorve6gF6VMtLK18F7USsVEFgXCSFMS4g8n9DEpV5WP56Ho",
  "key42": "34PjRMkE79Go2GoX3uVjjBaBnurEkk5sFG1rEd36DbezPeyk3Tr7yTjBRxf59ip8wR3SWBbbfGwkmJbK92uA4h4a"
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
