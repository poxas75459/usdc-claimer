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
    "5Ay772ihgQzccaop9DLeJ4A2d1vt2KmSJAfmb3L64q79oKNBrT1cqL99RowfQJZU1nraaTyoogibLC8tg4zRQDMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B3Jbx6ueqL3cBK7TQxT3ejLiZLDa1HG8T4zdSQdLQqrqa4aPqXCZjbAet67oYiT9zmuwY5heC1HNWfcy9sgNg8v",
  "key1": "43mcW7qSqphUaSU2cei4QZeYhcHRJycCEFVdSzfTwUc2FCmrFEosqxA5GztpfbcVL2dCJFs5Afy8x7cCCScxBxQh",
  "key2": "5aHdjETM18Lq3hj3hXHq7F4wanduZsE9vNzeQFz3qRKQPwANKff5DbpUTHM9K4thY4txtgLcTbcu5ZYNDSsP2mT6",
  "key3": "4zzkPKgZ9g9vcWqXXsAevEhTrHmV4SQkpQFUjoWrFx1qy6rv1SnhCaGkvjEaQjNgbQB9nwTx1Q8xfmVF6AXFGNPW",
  "key4": "5PA3C2NFK6j9xZ6AyXX4B14RJhyZaB4KFp6oCrdGVic76uv94SEHFeBkxq11cxc3qwbNVrNWnV6oNbmHgXVgmyRh",
  "key5": "3yZ7yJnSDjyVWJyweY4wz4bfQ9Q5hqHmj9AkVSrQycEtPRyRYphgZrUHmixcbzT2q3EgvLd4a3feBkv1e6pWAPUR",
  "key6": "4Kqqmfv5fFBchsh81KAkb9pkDTZcA42sCt2jB2zNKapTWhw7oeBsFZxZ52VJZQPtPfPiSGqfZVGR5UNLnRTsiv26",
  "key7": "4FDiWKbu3V7Sf3GQ5ZhtbMEb6RE9a4erXp5L1pDBd5Amqu4S6E9QrwLqXCQkXZZabUjdoLarnEoioDwPUk4npd6T",
  "key8": "2q4MFLtp2P8aQnayLxzk2aZ8we2p9sKWBdDQgxZVqpkqYvYt1NET2E43N9zMsAkppSZ9BncurDGjGVtxgtEVU4QQ",
  "key9": "3GPKh8JCKgGxsJXWLGgFqb3SNyPPQHFb9QxvtdzKupEkZ4mLTsPkvksChjvZVa9v2E4WDxVKeLbE9jq44CJzAsKu",
  "key10": "3nDR7UqDQhpLY55MM5SJhvP6Q53diUWDJW4rjzUmL4LCaEvWF7DbTSeR8vNhLgbxZCAGzM7m2yCCrPsdVfhL3F43",
  "key11": "3BjnakA8YDkP3sz9J7ozbYv5oTBAUjMM3Wb9hFvcWNENga5rJXT61VJejAAsPiZaEPBFZ7brP163bNim5u1YRaC2",
  "key12": "29RP5uwpTfZs7fAhDZqS98RtAGtCfg4ks3Az2gYL2G2pE75aND5TKDPfrzinE75LkPcLVCDYVnLzkqFQLSUFMgVq",
  "key13": "yZSPqfJHu1VGCKsYgPbmoQVXjsagkREtNGVPJDvZqu39zeDHCxDTM6qqxYEWoUFn1kus56bxWgbwXffSeuqmwYH",
  "key14": "2MsvPCM2b4GgK45wkW9yqg9e8CTpGSJ3wFYKFjjifxyGZvhAqC6i44r9jnLvxVSFCz9vRHNGdSVFv5JCBkwWG9mg",
  "key15": "fJMQ6GFvLdp63KTWzAnxSHnQPwoocND91b83qFjKeYd2VrN4XE3tsVAoyuCZ2ZyJdozuRYNCpivoMFCDNZ8gcmj",
  "key16": "2WygfQy7LFz1m9oXABeFM1MmdhT4KumazExWmHobfSAAqgz5iw5iGxNJxNp31s1a5R9fwD1C3ykMhtXzBotQ3gja",
  "key17": "3eVwSQmyghokArRUxtRHjpNq8KAY3QR6kyYj8Px5qHe66Hk5JJcSNLadbnnBKH4AbEHY9S6Td55VSNjjgMFuaNDk",
  "key18": "pFu7faTjCNELk7ytqNtnDcrnQEGQxgsbdi7ycaUjPwvYexrkPk4WYJvx6V47q3BGkJE4Dp2bhvnTTgotRptMu48",
  "key19": "4dhqv9B6iqjtymJwY6ZoKaZksShQnWK3zicn5vpVU4xFXsn7ksjBamp6ZAk7qK8XiATN2auQxB6U7iqfjRMhQzqx",
  "key20": "4BBZftQLsaBQreQv8qDDtGcQXrF5hzWR4bNTFzcgd48ohTjoKwJJYy8S4F2MJJFrcBzLfBy71vmsGNMRTYA21Vrd",
  "key21": "ddzPub7neEnxo4A4K8tigWgbzcNAbnNZyWwTG8fCKu5KS15gqj22wnms7dDyC3Nx9cNS5UD2n8NP2ckUuYinazA",
  "key22": "2zPQQ3j4uMuhyDYNWe8wN7w7dXFEDwSZdkR3phntBwzojc1XbkrdrzsX2CD27btKV7JfNULydCpxFmcMLMn7EZTD",
  "key23": "2WSHtbTvKhaR6ksGtgonathfupksEfXN6LfjyizhnQHWwxTVgEecXSFPFW2t4eL3mkxxSTj4yfPBCJSS8LhcJpWw",
  "key24": "4B9dpiHyztDhWfsCcZaD6Byvzun2YEcbEq9aJnUpEkmQjYEbZwczAnYH6Qepx9qCJAwPyM9aRzgmwuJv9VBjhCRJ",
  "key25": "5gVkCo6stSbSCDeZjwUPE9a9CgqvaZpvQtkggx2gNUnuL2hTgia2aB5LygzVVHGHLD8rnzhrvMqQ6ugxUZQ8v1w3",
  "key26": "Dh6asVPWXU2NjM5oxd5QDkQnL6NvdB88qCHo1zqESd3PSUdYExeJ2ofVybzip9LeYKcmRxez2s7psAj9EDjhHQy",
  "key27": "4YwGLxytZJAwhq8sHo3y1HX1f1Jybm6zNyywSns986MvhcA9FzuN1unXZP3TZ93kbP4wyV69L4JM9EKKCaVUuYA",
  "key28": "2H5SmM1EoNNND5UZDpaMsuNYvsZwmDuP6h8kjUdRsuG4oNqmPZFRQmwiqEEmdVKUvTeq5PgrXXkYrCKHag2ev5CJ",
  "key29": "3VrRMSxMHrvnvWheDDiV7bTiXE4vK6gktVsZRzBHwNzNPc496pubKZAc5q5fwLA1AXr8UMYxtnQwSr5wASzM4yDS",
  "key30": "26Aty2w2CURS7R4S1SxEn2yQo3tojQmM76ukTT93ySew6UYSEkkx7MoaknmC5AfaUbXRFqghuXtP4Uk5VrsSXY9T",
  "key31": "5QMVBdVtqW9vJJ7ho8pFVx9REqzoW1imKK2TUL8mskLdJqhBBPvxiDJSktz5fNLZxrJZch7hpNcLUdoSkEtdqQ1h",
  "key32": "5HS61Z2Vj9oL5gLnsgb3UaSdtmtanpM2dD4fkW9GiTJD5p12ycBF5VymvVTFYZY89NKMngCufnQgLzi4AFeNeFRX",
  "key33": "43WELDwyN65zNv6754nQsJrTajKLfr7eo21EAChpSbdFbEkxoSksTT8i6xwuJiiEMNU2uxA8p26PcPbYqFH51DUw",
  "key34": "2xgSgZFRJDcDLq2Ak4w8oNXkpHjUUdatV3LUXyjccnu7fqn2vfyrUiuY7WAfvDYDA7dkucBqERoNHVQcMszUPZ7z",
  "key35": "5F8hzKKgoqRsgAwHJ9wF5R2MCccRKCaAiCu7iCwqWi7GixxAwFxnxuHGiisWaidUXEWqbMA3y7v8vDSUf4SMegvL",
  "key36": "5YWg2YDc1fq9YsmpJyCZezkyMFeB2JEo2PrC21iYZfQn9GNm7haxCbhAgYFyLJjywZPoFQdsvcqJTPqgRfEZuyco",
  "key37": "3UT87PmbjftgqTyLqP5WbJzgHEnfCA379jKfkCDzGzJRZ3XSeUko5uD3Kqd3vMTxE9V3kW4ep4RfioJiocgRuG9h",
  "key38": "HfBHWoaU3vFPp34S7KGNzDDcZHmskoahHYHTmymxDPLBcEnb9XkQpDxDF2n7ikET3HoyyTm3tUEJK81EwnHhYmt",
  "key39": "EoiSKtidksHoKMiNxzrViZuMdrCMSuDHYE9L8XCmbRU7SSfKzQakAavJyRdjBG6bnUVS2ggEkocbkkVauCqgKXz",
  "key40": "2NyAmWMc2ncKoVMYM7gskexsuiNr6xshHxJrNZ2vBRvf5TXVnLt9YqyakXmZHYpokiGYpmMC1m3ibgUm1KNahFcB",
  "key41": "5ULLpKcZZCfQDtLuRg8LpjnF4oxhuE8APrsGtqopCvSoPaWJt1bBQWRwbYpWFvmUsQdYxCQsr4fkNdjwqncPj6Pc",
  "key42": "3bmaMTqoM5HfaBkr5nSk9vpJm5XQ55E7rQ2ySvsU4oQvsa94WxBRo8QsX217Pw2cYakGyZzMcvMfMZSSen7GakMH",
  "key43": "3rYG2vghcmeXupKocpRF7HLhaNadKW3PhniSWbrh8fktcDqqy1qNkuZmNaAPWtDT1CgVt4trwXaCYrT1dQa8ZNK2",
  "key44": "2mn8tHA4pPTEJD2voNh9iLd2SD4guv1tMzg3K8tpGjXYjQYFMiJ233oNk6ASYJFntcT2J24rfWf2w9o7Q2BEAdSr",
  "key45": "4eNhcA2kHDMGsdqFEMvK2n7QG32XoGjTWT2ZAeDsvHZc2pZGhtkv5JT3G4hfEMtd9hJqnN2qhvYjoEQXay4x6vxg"
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
