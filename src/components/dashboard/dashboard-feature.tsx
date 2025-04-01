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
    "2DTURB5BryncSXk5Zf9By6mD6pUFCh9Q1TUJeM6ggATfJJj385QDREJ6jP1ZTT5nb1WoEhrbNFJqWHDcfwQpCLmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeWspSZS6q1mcAbPrG4h299JBmSViEQkQXdFmqre7GMnXLmEWJwdE8WyN8r6P7LwF7vDemV1WZTWSLBWY76rFk6",
  "key1": "4RjFqsufpvaKDWh2Pkfore2oj8awV69u8b6vHYL4MBZGkP4WeTVwZVYovnFvU8qcGEv8T7gi8M8q2gesEmoxHCWn",
  "key2": "4WVELqw5Dky8VCAUpxKRqLea4hWXPus4bhHRiQeBL7ombKwU8vQggQXsXE8s5Zhm9i6nBbCNpngdS9SFEraa9Loh",
  "key3": "6pUC2RfdkPzp8kiy2VhehLZUB2U6U9XEbd3mT5nGHoAJVU6bfLwjqnSEkmPTLmpBhdAbSvC354dPtDMqCpt6x2Y",
  "key4": "h7fwVwGtYqEMqbqq6k417E47kfyscsFMUgkPfHXQN267tNSSMXhstLoc1gCcEsVyFTht4dZhQeddNG5VSwCNMaT",
  "key5": "4NENx5PpvqwCTiXA74qcq8rTzkakyLcZiWZNxy52Ejsax3kNkr7Pyk3JbGJxHuQmqNefnxrTgwuS9KnvD4Aneh2E",
  "key6": "5NPqQuhvnkeCEEreHdMdpZht562FHJ2ZbXPKBfiAk4rdbiFuHaSseCgqfAoc9ChoZkvN8c3B88PEFemZRNc4Gyz9",
  "key7": "2h6FmRVHRysLcMHAdYUA2gn8v5QKURctPhLCRWZLwsCE1tLMdye964hsTckMXbfTavk88TbhQjZySSdaap971G5E",
  "key8": "634MihLSFftbRtXmtAN3q1iJUfcasocRwDZFYR2TFMwUsnq73DuhTR5KsT7Sam4KdBveRZjxZdLNrA8x6jCnr6c5",
  "key9": "2qxjcg1ro1doiTvKrrAtKH3RuV6aG4P2kagJCgj9RcQME3pZmqqoZr8VU2HZY58Z6N16wg8h1xLsVkHSHap33EB6",
  "key10": "3i8Bk6TePfR1UNrghPRSLiD4rXkQ5ykdgFP8t18LngSzbkxT9aTgjxp3a4KDLmjgzo9ZASG3dzGFyac42CPE8MTY",
  "key11": "5ZqdZZWukfVjX5ywh6qcJXPZvSBytfytd63hWQQ8kbxumYv2g7ngELvoVX5L8HUrKnz62qKmq7y5F85eU6gXyGpL",
  "key12": "231Us8uZxcDjKKm6K4hmYZSRfA7tNHiMvG4FaZ49K1ZSYmX8sXm2Vv3mDUrkXbvCdiXqmusGoY7Un4iBXscqzmNQ",
  "key13": "jo2imHbcZqLepZScHPZoyACDBDMb2DwN5VxqZffB56TuXB7PeFxQcq7b7jiEP8t9WqQ7FrizN8fubrJzRYz6t96",
  "key14": "5cgZuskPZRXEAXFM2133jXFuzrA6dT3xnFshCektnewJ1q9UNFn7XVtWeNLaKXkDJewGGoQcWuJ3qxQu3GejphWJ",
  "key15": "EJZ89UAAHvySi5XvVd4qMuUzW75aNbep4Ye3ydy6NryqrN5U72HKBCCdCKJjgQMbQWvDNgqPKXYUFCWyQRks5zx",
  "key16": "4mspSZiBUuj5p6ZRHkRNZZaYEswRNePVC4hYrbaq8GsWA3TsDHfM8GhKrhvanTszHcVsAWjzuwZmMR7x77AVRxw8",
  "key17": "5vTZMGzaj3Hdcey4wSrGyvhJp32ykJyLow6azPtJwzVabYwoMHJbCrDTYSzb6TxideAHdiRUuJ14Gcyf9XVU5BNr",
  "key18": "6N5RKX7tcxAfwfswmRgQunhEmLRMRouDuYM2aYUJp33LZMFkeF7AhoubPydDYCpBdqwhADSxKdNFHC4FVE8zAM6",
  "key19": "4PCD2VwTFDaR4UVWzVhw3AuFnYMHkD238oj3CTgxzukNXYnFibMuyo9jZdMktsUiwrSv3KcMrdLbVJiDhAqUusM6",
  "key20": "2oSSD1i1Nkh44izHYoirpNz4PYMq1VXynCdeiwtnseHKh8pExuyHayggKeixCYzFzPmyAGFz5xUAsTcwA3taNVPp",
  "key21": "4hQXuRuDY3NyBAvyxRbsCrBKjKv3yiNzf7ymvrshxXmf5yC3QeAKrRzgUiHWXmCcH96FSMszyqP4tjmXmExdP26G",
  "key22": "2NfgiC5Df4bLx6cm94FzC6sxUTxFa4NSY4foThAxQR5eg5TFJdisbV1wH41zFZRUFwAT5TuQPdDvDm68skVAD6h1",
  "key23": "RVUWrcgWYTGzqD89VMm522NJNLRqmKXBpQvCM6TABMgXekBT54Rjds4XKeQGxwJCNJD7iv161YB36PQduoAKc2Z",
  "key24": "5F3KFpeRU9rSVdHmYH5uFgwNAwvPB94QhDQ6RZSkV6w7Gdb9Jwym5aMiUiVpqgyeemyvmAmnb5s8hWn2DmyLuY9",
  "key25": "39ErcFRaxdsQXVs5XDkoSWPWnTv1uezPGWGD4W9zakhDXHo4rLU2A3NMcvAFaFeaJwVHyjVHrMGYAamKDNhe7ZbU",
  "key26": "ku6vrfV4WjGP2A6Ri3WtKynMbuvSdYfm8S5Tbgp837bekBGaBfCa5mLSQs5AZWDgtpi3TJPt96uWsoBvUgQKo2R",
  "key27": "2GDpjHtKfayfMPHEqwFVWEjvCD1TtRAXVRrUoNCfbX7AvsKjnrNUUtKQd6RXHvGYDRZNKD8p4d8qD42EHbtZfL4h",
  "key28": "32a7CAgL7V21QnTRRkJ11Fu4VKRDpsMQcGBiqUd5uZoPQjGK4mgxHpJtyM5oLpAHzJoC1DWaPtz1c5HVrk8X2NqF",
  "key29": "3jwhRhFyin4aZHh4uba2wjwmyAqkeYAd4i7FP4DNBjSJTB7xF9BuDpZkYZ3GpWHkwryk4ecAxTTdX529KhLacgpG",
  "key30": "2hEuiLyVCeK89CGzU3UDi7AFtwYpuyJr9xKy516CL8soDspXKptUJeTFxwCmt9EcNJbzmjKphuqdFYDB5T5hSfDa",
  "key31": "4VxmBizSqWgHfdU6cnWpHZoG98eHWpsnBJoJWD76C4KUsgd8ZMC2sZcmoM46aVagVyWNugCij9hn58mq786XqWAb",
  "key32": "L82TFNGC3p45EqKkXPCiPkfgvXEvnP5mQKck2pt7HjHm9QMLNEjN93wiJbXzf4BJWoMRPZas2dP9EVcD2swS7cs",
  "key33": "5Vv5UkGsWQeg42XM7sTq61rqmKPpcggA7oArM2ybd1wGz8hhdvXyWDauZTuKhmTFYVDAwbT8wEmvzwWqpzHN3FGM",
  "key34": "4228HahEPFhoDHAWjNCuqqfwB5Tb7JFNsJQ8RAq4Un39ySF6dsZmzfCFsgvdfvy7xKSoESyFZrWUeKSuvWV8tp7V",
  "key35": "5pKk1cvhYTwG5PUyN3j7aSfEWptmBDpLVePjmjx3XJ184XmLVZggYR5AZZpMVQApExqCaz4NAzPwG5E2U3vJoH1a",
  "key36": "UiwrUH5nwkiYC1oz1tArkvBCZCmQV6UMrziYchDAUUDY6JSPjAWyNydMWPewnF1N3sahjGBpWe4c2zTAcFURV7w",
  "key37": "NtHaYDbuqw4Pyipq589wC5c6itSS6tHgvUXDw8zRCihUX6dW6xd1jtoj3mkHXa8y95ouPdY6X7ZdZC9xaQ8qs9r",
  "key38": "J1nD1ZkgepQghfupwK94fgogHtBw6UNtD4jfyYPiU93PWkQwFexCLcA71k6MadVG7pGF8quuySR36SP7Jsw1Lk6",
  "key39": "2dothZhou8Z6Kc8yB6qho64EBB4Zu4ShfX4o5r2DphPk7P2SYMhrBn13SfgbTVuRi3DjUGbnoUJ5xFxinGvC6eNc",
  "key40": "5srpWMmgBu61CEk9VqJx3XJqCbWgUKVYvz7kjeZjx4hyLkchCgihV5DSnVBQq9QfqmUZ2AnJQeNC3tSc3GSeYR6J",
  "key41": "2TJGf8yHnAyMmrndQvGBoMtMGUXAkduKWCGFU95cLHALaJkqjQYuZ86Ah2fRdWRwenZdytZbp5FUemGTCG5BQUBA",
  "key42": "5gq8wd8dnbQz6xc2Borf18bjah42CrDvmmpuTr6RBsTJG4bFZ9sSDau6SjiFwdftXZ1KNETvjNRS1DbKXEZgcu7n",
  "key43": "Ks3dcBdCuANE9B1eXHALzoR5wqNTiUTsFcSLHX3sggTinkPMk9Prs5SX86RcFCyvRSJ2Hv1AxmAayYx47ksYKru",
  "key44": "4nSG3JsXowkfkw6HjQxuLcH1L9RTZobKGg5TBaGCC7M5Hc7nDyx9iSjXxyhoYz7WCN6rCfMor8W2tcSSUfY8DZx",
  "key45": "3hFZxBvKFgfvqE7sk32KyG543UVvvLqqKyEf3LA93R3pdYKeXW3PoPeeoxUK5o6ipRTejekR7AFncsmXPWADRBhi",
  "key46": "37WPGuo2SW9epxu53QH62qxg51ANEBHS8tFtaxzkY223W3N1VEHi7TdJALRK4ya7eN6QUdkTbAjm1AKRTPgCVN1b",
  "key47": "262uZd19mbznBeWKeQTLwQjXES6BQpwuoSqiMXTWe3GtRkmQP8TghbXQtDUTDBdLDjYiGBgi2FnwCK97QjZeZcHM"
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
