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
    "4nLokRM7pnQjjgbLrkFzYJcd2siSUAvt5TuK9Wcr5sjTMGFUGwEcAQZVfLZPBDxetmRqT3bJsFh12rBbCg9XdRgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thTSa33iWZWyb9QP2ZKgvUneEZP2VaKjdDeALTGTTM48X5cTQXyUt4g82pfDsTXYYhFNjB1N3zxLoLnxLPxuevw",
  "key1": "etZSVNNqmdiLds5p14NAogRwN96vxBH3vD5J1TX3nQNXYAF3BkxYHbdGwYVMaj51rAUZTBVL2hdSDzrhiH79Whs",
  "key2": "3Xo8NbDUq6phxWt9jWMzC4LokSz4KFTyYBVf1MivLfVd4Medv3UjMQGrxnSivdNEsPbTNkS1qbUziZuEv6vQ71AA",
  "key3": "3SbrdmzCih9VLa5hhnTyP3gQjCbbjq57UWK1V9QC4yfNYFEqEoT85U6YgoV67zGXTrYpaDuohtJtbHL4ntL1cf9t",
  "key4": "sA51ra1y8iq1L3kPPojL7wUSqL5FpGgMjydTq4F8ZdWakE5P7RHziHo6w2ZF5g7oTWyjwnxZSuoJ3gYzFhAux7e",
  "key5": "2KKc8v8WZzXuvgATDxvz7SVkNZ7DtHD2Pb5aHEAexisVCBCmNm4Mgjc3qjmnU4QVGpCKytQ7m8gbrUktHjiYRpFw",
  "key6": "63L9aEX7SaCKq5YQJS7wa1bpVHQGsGE3xYGw2wCyYyugSeid5vA7x7hkUdtjKNajdK8v4w3PJ6ougcFkuG249NW5",
  "key7": "4DCTmwQTY6Gf1Em3g9WkunL7F3StgVV7Cc63EcZcrgP862YxS1kTTF7EDW67X4P3vWaT8TNNh4oEFQufxknzAUyp",
  "key8": "jJwHVQszzMQ4KWAfFsurqYG8F7L5qsdyJzCTYJdLu62tSPY1GUnaWzzRPrA53zztEcwYiTarDoHsNavCPCt29VK",
  "key9": "3xip3HRSocCYJXu5QmEb1iqxWoEEsCfmdJQm3mPWcnY6j8rNDHbhuqhTHBmXUnmmFucj2EFhmxh7WbNMN91QCYCu",
  "key10": "djbqF1BcnyMVHjEzmXunxyrUVAX7GzmxTMeyh1QGQDYqyq58bPqy2YYh6RkJAwUMbyVELSdLFJvXWcMTMdLgPDp",
  "key11": "55wryypP6owmAYJV5edgXYGouZmx7Exvd8UpSs7kkauS5TqLkDep5KjHu8YTk7a2mnaQigN4uxhB7iqDpsrENsNC",
  "key12": "2REnmNrsGLWSC9egoymJvZevpQjR5MU3CXH7kqcnySh8MhEmUnoCQeHAWG7ydpELcUejbVuV3pG6SQSqpFF5A6Fb",
  "key13": "5hWek7t17psXnzTFg7gYZJAhzcJGYHPk5bDYduU8V2wnzwVhiqLGhLHyBrzkpJi9zKMFGpEJwx7PQt9xjq7yT3Go",
  "key14": "LSpZjbsN5vF1kKTj6961EVRc9kD9D2VjTpUaF84AvB64PhETf83tihHBZmQNWtaaNZvhpoo31VMDYA35Lgm8bWe",
  "key15": "5Sbd8GGsG7KftodNfzDXctQyuP98nD2i4RWsnauwB3Q9GxtK1XSbJfyY4JhbGMZYTrFnfUQZoUpX5tZGdfvYffLH",
  "key16": "5WPqyzkmJ269kBH6aqNdr62nJviUia1LbRrr4ofRQH8uESopVn7WnuCpEWomCGP1GgCGa4Yk7cVkeXyZqtPdb7ie",
  "key17": "76SfVpyhYECRs3ycmLZj1WiUFD59a6cLMWGggme4xCYfR6VgbmWtK79PTtAWdRaCCVocD8bEZNj5gz1hQhkoSdV",
  "key18": "2w9P3kbYt2coyAkoRhRSoDf4vMJtkmeqEnQHPYGbgFinz7jR8P34ZMwHxC7yc1jmcCY86qPUnA2hqALB5ApwQa5A",
  "key19": "59w7Sc6PfaVkLpv7PwWf7ybPkNyuTpXFobrwajRsBsHNo81jCtaSNpQBX3ohQGxH472Z34ntruBbMScq2G16Doja",
  "key20": "RzRWhH9CqNapjWQPQe2t5geMUw2eziaAGKMaBYvRfAvv46FXb1J16BveJKAtUjXCEtAPjd3qneDya2bjFY8DaWT",
  "key21": "yyqeBsSJRFyE7krfh2Tp42Vm1TFxeXAr4wtbeq3AP5iPDhoRk1iMBVncjow2jN18a6RdwfBLB7nsyoR8hv7Vkw6",
  "key22": "4EmgVTrA3X5BvEf543hcqDabtTxKacqA655AcpJJX473iTbB83n5q4gcg7v8MAKgzjzNsVRkr1dG5Vusqj6i58Jp",
  "key23": "5YGDVe42BT3VoKJGtd9e5iVRMTaJgibv6S4Z6CFieRoH3iFgBu18cKXeAMsL9ZynMVig6ieoKan7fPWng5asRuZc",
  "key24": "nD2iG7wWADiatPKMxWSNQ9V489r8HDhMfnBmQxbhn9ooAkU175RRp7nBWfa2E9cfq2qEuhRU7vSc3yuEw5pQ8MP",
  "key25": "3eYGcSaRom7hgMY3rnRvYjRenKfEsfd7pmsZYjTCbyT27h6eHGENrwGHUmXqUjCvNeA5igwFisfgKYNKzFF1ozrG",
  "key26": "2RzeTgsKEeyFMdVi3Xq3ZGyxoTqVsyy8Q1uiF1rGL2Uq81558D3FaMzm2F7Vdj85skwnuqsNMJ5uJZ4bM7fqNYa6",
  "key27": "2xNBPgNMdzN1ZWVUD5pekJxDc5NvPwDAup7Qgh6iEgpf3EPvVRRh29wePEttt3ksQVN3tpR1ihZFNH8wW8oqBReD",
  "key28": "2yg265sq5PDRuLMVd4GJn7bJpYZod5bxgSduk6pvnVVpVTB1BiF8tVhX2QtEmGDxcdz4HztZeA5sHP9Vrh9eJ2nn",
  "key29": "5z4U5UfmGbHmiftLADU8ThpY3pfQKT4qTUH5m7q69uAKswfAspNmmPDkWQwmoGHKLa61mZchocjnp6byjTeBtEGM",
  "key30": "5kquuHAqVdQvXnJbgGmuf4kWwqBAT3cDYJESXDAaSbVpX8Tn5zpq6PDrpuLEnbpoTMC48kaWeymSfqXHPDdxiYMA",
  "key31": "5RgTaeYZLWtNWsazmB41Yg8hWDDrExAsuiUmcwjojAWSDcAjaitBDP5KiSznM6gqg9s1NNWo9fS4CNxnAHQzjbwJ",
  "key32": "42juD9JBuJ7GF446LzxQg6ncjo38tJ5xMhDSqadzgX89dCxTfyfDWXugsVDoxnWiprp44zSnKVwe8Fknt3Q327p9",
  "key33": "3Dy5PtXYgh1Pwgvn9ABX4GSQQ5H1Ygt5b24EieaxSiFb7Zq9we4qznvMRHn4vX73ghqeXXg6SeKkryJQRBHVTFQj",
  "key34": "3JnxU1C2KDjZLQuiaChH993EHibwv7RaC417gan6QgReAffrXfQ1TRinQ5WDEoGGpzbQ1JCdAegTvn5Y7DQjAvdC",
  "key35": "3Vj4UHQ6Ssgcod9iWSVeXLgEvfJZU9SkeZ4ZQCCkahtH4KaTk3V5WmnGCmso4sRe3RVYMCxEGxvB7p7KRxd2MsmR",
  "key36": "5VimvvBvYJDmMJQcVaB9kGhNnAP6gTCafC5gRcVXzgsVV7K1tmggqV5BNBr6BmQdMGon5nb3PioWcbSsVBzLynPh",
  "key37": "2ftDUNUgbPCbY2fDLPqP44UEHyCnVjSTY3t7CAvyKDZ3SX79y8oGzuXBYzx56ziAQicwHSXgxzPsR5aYoCLK6697",
  "key38": "Vj4PnLpFrGpHfaj4oZzCP3UVa4EfyxvsvBu2uCPdHPW8MMEbrLrStBVpTVT8njtVVxgXb6HfbBSMLkqpJ3V6J7h",
  "key39": "2pkf8gMwAfraLvAs2VPPqW3fhNavYC7Rrfv16ejeV1gzT8kxN63LpKdfAw7k4VtYP6kkJ2trSQB4xerpfcdGP76N",
  "key40": "55SFTdGzbGe4Dte9aQ2wxMm6CDhieo295pyshmXgAumjGu3iFwm3omPRg24ASB7vWfZX8wSnKbqUmrtZHosCt2nV",
  "key41": "Cy5AagJhwhpsxgjrzA99vSMnxzXjcdT5Ak6FGve9wzuhe6jd2yo2SPLNQs8fMM6LaZwUEFpeP7WxGhwrAEJaxXz",
  "key42": "5au6DKHh9op9XERs7LccH2qNeggDq1BVRZmJNFZmdWvwLYwphbaPbjKtjaB5RrQ4FMSK3uvLejGdqWqrM51AC6S7",
  "key43": "3iedhDrR8DATBiXLrhAaFNom8N3TXSAcXLrhQgvtDspP4ByM4RwNRtJ6mB9k5R5fjfPNGfUgdo6ji2jm3AriiRbN",
  "key44": "2sErXb8AeLo5Ps5cfzwzuebTxJManGZd6LpVUkfPUst6ejoR2Ch5HSZ9aJU9fPnecaNGvBA2tQ44ZdYvSNfWwocE",
  "key45": "261kBCjKuoFybEDiRa8LknptES2VaGpXQgEZcLPMp4JWZSLHQ81tgLzSvd5pBdCFcx8Twt6eqgaitjX4TzgkFSBp",
  "key46": "4mgHnKMCadptg2zkcjuN94THBsTKChuKNG8DXJ4exzNDFqhBbHjEkYCk8NFVZiVWZB4LkGn7wFueDPjgEjb6QWQh",
  "key47": "34k4s3xZ2gFNqz4gKVR6T7ehRH9uXtusk61awNViSW3btMkBA2GEgRTEPBZcbMzUMiAL4SkKk8fGxDcSN2GMG7NB",
  "key48": "5WGbaTGmdKULjRLpSbUwdfCEdqqbQvwMbSKfkU1FhdCY535Dh1YtY3L8p5a6GsnkpLuDiUD3oQ8DuEvpjpKMEhWM",
  "key49": "4q1fNJPbLjpU2vPDRJvtJD6aECrVKuogc2iezoJ1Tt7kABK1xGvH6ggmn1P49sfhReiKcZBggrmCKGTk5dWbUjmZ"
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
