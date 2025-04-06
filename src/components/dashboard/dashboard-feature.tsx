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
    "2AG4ggc3s47xuvrP8kkCqZuo1zQKhsJhkYVQsFa1jG1P84G8xZqcv9BvdgixEWKANR4d5cTsrwTMzMgp5Av9gN3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFFqTaVkeg7SXYd7ozp3QWVaESvfnCYhJr8gv75fv5aVwqVJ66dtXvTqefMRkAPQUmWweAdMoisNCatjjMsrA2T",
  "key1": "3VPt6fLNH9kiG7nS8oiomzVziyxkSEzahERTA6fuFMAxYAtw8SMYB77AoqqwsEn26sJtafrpBzLvJeLLJ9CpoCTe",
  "key2": "34Bg1JjpjcnAV9wwAw3vbaXgnouAqXsw7NBm5LkT3xSgLFEU4ow1yGyvpq15dAuWuhCnD9K1JMa8uKq2bncx3QFA",
  "key3": "a5pToJn7h5YjQGp1nT5o98qQvnnw8TsfBVD2NAXmgkD3MxBVwQA2zdeQDiZQdDwjBfViP4H7Ta4NJmkC67fNXcE",
  "key4": "4wXNWe3ZjY24KGkKgynYApEP2jsXoGzde6z9mpdvXSaXipFMfgd3C89udABzrnXjpBvwd8R6ZsWBYJLWx9pZcLmU",
  "key5": "3jhKTgwmjgff5A5pmDHdt1vpfCFW31DNhuqL1xextoGANRmLsK7CkKYPh77qq7pnHaBnqJkvqwGW5BDmkTsEB4qT",
  "key6": "4MtdvpoJVvj4twScFUbB9p4hvGsJoTDG5oL6eKHbvUctJwEWZyHZg6LM47eLQnuqvYDohAGcxgt18wnyVPgY927D",
  "key7": "5TSEDWsUyyWdrAW2WAHyXgemHszfun5FbZwGtbwHvjidAq5mdCveeNt4TFaTYoFXRjndDRGvJxovY6Lav2iu9EY2",
  "key8": "3Sb3ezhDYAyRLMxygBJyjuLRR37CixjeszqB9QrAcQc7iQVRBMjtbsjNPsP9C6V3knGmJXHN3q8R2VbWXi8TRLHu",
  "key9": "3cJv9GAGb4UEq1u7skrRz4J6pyGX1xUWqcZXAVRkNL8oKufQEV5kx624EDNmLmxsesXNCxq4xNSeJk4SEGyJW2t4",
  "key10": "4zaVkpJYMSx9VswnkEJDkhFkdFY52jRHkfz674FWzBvFYg5qhjUyiguz1rZYJSqbGokjqZXp62dNgpMeonMMNyzm",
  "key11": "5UHgVE4y4jJzVAeCDMxMZD5QWUDxDtP5EBbT8MBqt7im8vrXT4KHBv5SEtnSf6vnRqQArSq6EwDKATK5Mrg923f5",
  "key12": "qswc2P7BkaUzroZtRbUcsetU5GYZL6CoNoXThmApvDjji8USuzemTkK5AvgaN2AFPQBTy7YGFD2nRPdxfTq7aP7",
  "key13": "2cvHeuddRUNEPx1pWELV2ZPkS5gMh19E1XLq4bQFN8ysPAW6TZixobKMzLuXY59R5gfd9BhbQr82ss1wsSZ3phMb",
  "key14": "4mz9MjBh6K5CA3rUujgSZUdJNkLTtE1C5enmK4qHLJfDgNLkuG5AwZ1ARmY61JV2CaN9JRS9Fx8Ecz27wKT2QbGC",
  "key15": "42yHckfUoYfoaVRqtWBA1pfpMWRPpJW8d8CF827K6s3q9UajgTioih3XFS8itVkdyasKfpPW8surdEJ6MSovzhFc",
  "key16": "3Tst5fJeafVRJ1dbMq4rXig4XgvT3mhh8isckwedA7X52JMufQRWBVo8eMhe3z224C7Jnm22RCvarimkFcyUd6bR",
  "key17": "3RpzcfdqbatYCGm6vxGwasTk8d4mRd9qou1oBNiqAHY4teqozMH2nxVAMhDBdqfxmkf4xTYGLCbupuAf97e5qMxQ",
  "key18": "8rdMYjcAjd6WH94nKs9ivqxnmPM4vwtGzbg4k8gRvocgWnmBcSyAxDenH8RSSSQcRPL44A51uqiQgSoiofkdKLY",
  "key19": "4CzcuPmQTQTxA5pUAWzMiAz4zxQB3eGUuYvYns2TDYs3BcaX6P2Ydw5Z2dmCgBGKFmzkta6SjBkEpfn4GyeQcc8Z",
  "key20": "2hgknppua3NNY3GxKnoEAmSSerkdqtEP9KZif5eJvvjLteu7YpUdtLn1mfbSMRWokYcNXKo9GXenwouztCLLNLei",
  "key21": "3o9LHpweq8ArMJboZj8C9cwkg54JEmSgM44Zkf4mo35Ho2ZGQfgVsbJy1spkedYiYkNGUdStphZpAxn9ncJ9MU7X",
  "key22": "3cges1cumQSe97krd9mcGFfGvarKyCMvU7p46y9CRPfmfA3ZQH6mkmzj2AW2PvqXbmnTB3FkT73KJUEZk3vGsSfT",
  "key23": "5cCjABSW281452y8BC46ZYzRkRZyXN6FjeXtoSFpkdaUaoXzdEvRQUfFohC2uGtedm7aChNt147YvQTfMHCXtFLw",
  "key24": "5f11vYCjNNPcuQfMhvUHzZgww9rtGU6m4fdcEXFXMkhtNHwhmTjb3sUjAjsbzcrTU7gWKHQ4grgfkQAjHyVL6gU2",
  "key25": "hZoAsSJNLNLofbrghwihRMszFYkKLdA2JcHFxYt4smi7bCVCNoLsF6PxKokdyGegSnzmZvsPqGWD1QUiyen5cnn",
  "key26": "47B1qask8QT54yW6PeZxSHAwypqR8AWJhTL1ppp4Rs8crjaUkg86NC4MTBobKJAYbXa9ZiXXLPufVK7KUn4YvzBw",
  "key27": "7DHmMJWQabNfS8QopBuSSgxKdC1WVepyqS5Z9X2WiVXJQsjPokgNaKHVEX9aSRFxDj9jx28kD2CCLMck3ypKeaJ",
  "key28": "4WURTZkLfUK3fzp3AK9VjpTxfdmfPUn1rXaqVtUtmu4S3JrHfX6nRvCiCnEjyja9bxYVUupaGPQK6RH4A4v68CT4",
  "key29": "4RevVxVWnnUaPc8goFnsYGyNLj8vEC3qWxAoyZzLa1fJpTiwsPo23WHbtCyoRyuVtTLqJU5JKGUJk58sjWLAQdY9",
  "key30": "5gxJtCyqhcZyssga1kT9aEAYKSoseodFfLQSagFD1PvJHYa4R3vitQS7FFFpZzShzrXNQ4edBqSe4i275ppgSpT8",
  "key31": "3f4QcT5ZNWtB9rYcpS165L32n5pPQMk2SmJW7u7UPnEVncv3oYAtkhyoK9kk1K6ppizi9CqqP3eHbFgz9xYo8jPz",
  "key32": "8bNvXQa1FNsSQ7jWRux4ZUhr7iU63n1WRQBN5yMpJXzbkmYJD1j2jUso3fzhUxdN5E2UazczAQDRicSpwYm9tY9",
  "key33": "4FDcVoZDuCjbQcpMYhKocgrcoy5eB5oePe18FmUWyvYrPUrtygGdCs9jw2JKyp9pUzVxGm7T2pez6Bhj7i7LaPJX",
  "key34": "YnWeitHnqrjM7A8tfBvkkbExnHjyq9n5Vs5ckJ6tyx1KNvPZNki6m5ki6yGapZGj7qq2zUberFe9dma67UWjrop",
  "key35": "3SWQw5YpjpqQykzeYfUCWcGFygnG1XF6XGCRB8E2eBvXingRXpDuvCfEHYSzXJoG31wp9KGkzQXyPZno87D9w3A8",
  "key36": "2p3JVn91BFbZdbFc5RckgsMcFSnXL95bd24x3aYbLmc6Lu5LQhmhRFEs1ThtQcj2AhAU8FAxMWn7WKEB2VaxZY4n",
  "key37": "61phwh1hXL9Z53Lfg8BxttmR1joqy75QM7gH7yj8hCv69j4PcsqDGtBgHNNxdi1S5apfpftuKsSZFcuN9HpNz4bd",
  "key38": "3fUKkqyDt46ChpHa5N9BQkUohLU1bn3eAqvCHronGb8CrwUVoZYLxH4AP46bxReBKSmrKUQ7uEtDM3186ziY8pFC",
  "key39": "3UQeTgpSLmK14bG4nJNeiv7ZUKagoxb5FanwA7iv5J9CqUwSS3TrecpUmXvaoWZxKf4Xn28Y42Vkm89fXmrzwQJz",
  "key40": "5D3Cb2ez1iMtkR3YEHj9jGBNU95UDF5twfdicxeMS8T3Wt3ScoQracnfs3gXJF7FydSgJTvmMENJVX6LiehXRw9D",
  "key41": "61bzbexDGYPYSdMaWwkf8HofinjJEWnrSAAUbFad9yTmN9RdK2EL4HsGq3uibdGFiPwpSh457tBxfXzUFG4ss6KJ",
  "key42": "Hei3Zrk7RHU5JBFR9jCsKHYV3BFBLybpS2Jb4poSy1TAaDJ95daoYWuBJ1bqALgAyzqBrpmWPtV12vkXLYW25Lf",
  "key43": "3RpyFhjhiuyi5NnKEFaPy7WqSXBhze2Da3GZXSHzbfdM8WKr8FFaXD2NbU9NCUTNYPmJyepX3hsobNz5BshrocKN",
  "key44": "3p83Kyhe56sDaV2dBMCbQhpEsZuaFnWCQfuvfVRe6rGWFYBhpoWtPSWbaWLupL8kh7SWcnot4AV2sEgwE4WHAaLj",
  "key45": "2g2GDm4qSr1Ffa8ExwgyNJzKbSkUc7mKPzuzSB4TEvnWEXgjBziUyRfyhKRK1ZhwoJ2GKJSVxJ6Chdhsh81nJepW",
  "key46": "64cM7LcpVvKx5nm8HXExbxLpcPmsHoTL23FoFDdUzgpWLoazNJrvQeJZVMKYBt9bYieHemMZpRFSWHmnfPfXALQK",
  "key47": "4ttMu56XHZiFpVs8GrfrvhkyuZT4aQ1KzXmE64QRHmfvNsG4dDJYmQjEYT2u1vDfCA2zkroUEZX4A5PS5wdXuTYW",
  "key48": "3KyF219LkECibbRQA9kyXTT8sxBHjP6mrZHCXPfg4xX7QYQURycJnktuapX6bpQDVgRkRkyT18Fx3sv6XAG7o6Qr"
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
