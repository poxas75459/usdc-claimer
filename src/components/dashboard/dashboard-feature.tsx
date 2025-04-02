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
    "5cF2c3jqYvhfWN4zhSyZPFPCeizacgLUzAZfMtgC2Ng6mWfKdrJx9FoYa59kuiEGkGqHqeSuiyWQVjbpt23STMdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3re6CsWJrf5X2eh8ZoxkVapi3jwzZeE5Pp5o1eExxucJUTgA4QAd4PVg2PVSDAYoe8MdtZYVYrWQxgcGuD2E2EBA",
  "key1": "7Ruq7USeH4Tm39fMRUDTdNB9zyBhq6ZDUcvmt2KYnd8e3X9stQs9ApQihvdFogXzZJcRXoR2FZ34LuqcpLQLWDS",
  "key2": "2UuNWjeZGGYDqUyqiAyvxDQ8oNHVJfU1Rk4PJ2orVLZj1C76swyJTBPnBH8Bnfk3KkQbHXfbcfoYR4KcYH98U8yR",
  "key3": "4ct8rZKpYTapiqSfh6ZhP27gQ6PHmJGP1nSedd32Cc5Mb4nXPjkH8JsfUAP25W2cQMP2YKGB1beW8G8My2BgAkt4",
  "key4": "5Cw7mBQsFxYjvXgJMsx6d6DZvz8zeK18tCEtQdaNyga8tgQN1Gf6i2coq9i4r2SvwG2H4bSpkLCuRGWP9uFhJuKb",
  "key5": "2WX3cAqH3H5rY9FCvc72QibKrgYUcKeRP5S99auRBhBjEjpEDc9CKdfxi1jTVsHbxTTJ4t6RyAt4N7ceaDk54Kwo",
  "key6": "3WC3PLZ96315yCKqNh5NQBMwP3f7WgWBq4W6U1UsRt4Lde8xoyg6UG1wMXpLpHRZF4C9459vZ6Jm6igQGPxHciT4",
  "key7": "4ejFYRdA1FQffB9yb6BWx7qugwxujDcQcNnnKWEH56184WkMQzLGTsfPHmjVhLEyZBAWyBVxpK1opsiPwD41mbzr",
  "key8": "5gTTC9xvHoGQrYkHPARMoh7f1efeM97T2nKjEzRkWGng6v1qYAGKs12qDXhZGttcF62UH5Qn1cLUhD7XgqiEgGrZ",
  "key9": "2XJtjqwnUy9gGipsfhCF1jH9HhDB7U3REfBTYvShYBgFnbRK9kWnxAWNdk2Xs6MF2Yyh1rzMNkhHEJaoe2J8JVQB",
  "key10": "3nau8JZJXhSfpaZb84avqRMf2yYjfEX47kPWiAkEEWX3GUSCTXo7J9EMqZrphe1CdtvoVMWjmCbZBC3VKwP6EUGg",
  "key11": "3qjYkxivGtLqnXspXtL2KyBJrKpA2FiA2e3WzncBjTMxdWRMxdsvTTXTmegK6k3rRev4FHRBvrZ6A5N4wkfQppEv",
  "key12": "5yp3yFPZQhJPmofgoRbjSpJdivBaybuMi6NRMan5ykguxS8Xum4hEE7kjFs8cSPRJqBYHfKcVrCZ12ZtvefKTXUz",
  "key13": "dM8Vg8i7ex8QvLn5yjtuS8XnEA4nenCxdAXymcUfFyoaLeNLawp9BxT7npgEXohRYzECaTGuU3G3LrcrBk7qSZc",
  "key14": "2m5VT7vTtbQV4r4kSExeGfMmrqKWCNtH6Ekfm2jxoLt4swpbPeHF6NGPrkAVaGNzxrnGWtjH7PMTbXVy4BKmpoAR",
  "key15": "3pBCKHW6sErqYUtN1GBJwspKg5sDKxCtwEobYzearP2XxpRyTxNXTJKpg68SrgHSp7BeUkDNW2CzKVjkjcpdFJKB",
  "key16": "4MXisDJcE8p2GCdW1Vn3cKb4qcht85sAvf6QyH1QJpdQnkAxrgnT9KXnSC9easbYMRy2eQRVqHZKUECVCV9S4TP",
  "key17": "5ZCPmaAF2SAMsGeYitG3TgxtVqv5PZhDg3VUbz5dRP3cWwxft4W7ubFgvL5rE6DMnijGEj1NYfFhUWEUBgQWt2Mm",
  "key18": "3BF5TomN2g6xfUhkT3AVCUoNdzRXhtFyGF3vqrAZ6X9mN56tkaChjNgYANy4PaWbv7BwzYZqJAEWnn3fkLZmoNVu",
  "key19": "469dUHyjWDgnLAw1kzpoyB6p4xhseS9B9Xo6B93jqQCYXqd82WPgycFe8aVBdrdLJSEfPWJMvyVdYUmRy9wLvToS",
  "key20": "2YqFmTn1nnXeDi9HeSFa14xuTAzrsi3Dz2QGU5HJBVLXC1VMNhGF1h4p5p8KoNP37nvBLnHiZiKF6mqTM92aELmj",
  "key21": "5gaetWGtmcwpsDkgUmNwyr4rnX7anyjfMCvij2QuFh7xLZVjvAxUtekty5CShhwqkxRcGjrf98ikrjsrtriqrkS8",
  "key22": "5ucNEC6emuLkDbbXBz9YUj1buVWJ3DMPnZXMNmoKGrCswKeGtnUUmTZP9mqM37unLt3tFNm3RUm535HGuw61GV9G",
  "key23": "3a9D5td1VVtpjzBBrrxfbhmvg7qGAVj3RbHBKp6QBn8MJjsmTFz8HxvQXV7Bfcc9DQYtmmrZAzszrNTEUB7UpQH9",
  "key24": "5RMCupUqRcMpm8U3YGnR887LWB3wDh2Hxmhx6jMqiL9CpHUVwpyAp1PfXwY6P4wmFiGsMdjirxbH14ggeVpsQsEP",
  "key25": "gv88TDjR3gHUeJ9KXrQSrcT1HgPsMUoxWmPtGmKqmwr2gWWbzdtxbmh6YrzWEtVh1dVF9RJ2ens4ynEwc5Wp6Yh",
  "key26": "56dCQdFs8k5heV2qb7xCASrTPktFH84fRzivJnZ68W39sb5n4u7ne6TesuRWiSjiJBmSZtLU2T8JbRF2GyQgXejm",
  "key27": "5iKvS2vRY98RgAExBoEBFbvno5ZpbA5NeDVvSiB3dd6bd59PEHqQTkTGYhuJi51nu23bNxawxvhkiLMEdL7iLxAV",
  "key28": "3wap9mLRHNqAfmTGyrhfwjfRqVxKgQeLwWGutxFLhQHKs7cy1HcfmpUWfuiKeYXJgxk4kbeMSooSgfiJAzSkZMGc",
  "key29": "5jGN31C9Eo6uKrY8sEppt6Vc6bwaVXR7be42JUvJdju5KkHGsNv6Ms7DnoFrVQhNotuTZ3mMqWgWuDW35W1PuQMx",
  "key30": "37a4RSyYP7SyyTUkz7kPak7Tcqkg6hptTJYd3BCtzGAMi5xXj9BG5hvYDGXiuqEz6wTQoxwnx4esf5nVmj1vgnb1",
  "key31": "23ioFTYHZaSyYeRzCm9pnPspzmKpwV6F7no1fykHhUavBgNuKTKesE3ZH9phzcqcz3BfsgK3XwfhWyukG9cQtK2B",
  "key32": "4JzUvGFWPaEaNYkxwP2qRhiF4EcPhq6K5zUyHNzTMmHWLw3EXDgFbwSeBTh9dRdr1SQfVYbMEjE1bKUzK8wsD31G",
  "key33": "27ejhZQAvmsb3NLh8y9Hxu3L1J9qRhYpz86E7JXUYAPU8keMHtcPLhTJjiLV253cSgzCTkMeje8J1NZbYvokbVBR"
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
