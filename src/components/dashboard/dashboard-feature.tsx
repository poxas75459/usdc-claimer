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
    "2wghSV8T6xydkTUrGeCwC6GEqoL1ehckxJ1wV2nCaoSBgWurg9ZRiqrzhDgasJQ2KEJUx7ubiV4621v7BMsashc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hzL2PuQPF8bX3MVuHZ8kKkwnYbNQ2gdSfUVSV5gg7TKwdPw6zdH1AuUTCp3m8qsxr3Dw4TBVFnPcXzJaEQCRCzi",
  "key1": "25mXqCpBQJtm34rZWEdUtPk5QcLeZ6uTfPHqNHEqkhsrz7iVsjGoH5zmBje1RsGLFm3fYDRqhu1Ux1afFQxcZzVz",
  "key2": "4ZfxFaokwJpYjH5bAyan6LTAcsfjTUnLmwjLhXDFpfxb685z1DddmWwJtnoXuPAqRK7Q1FdH66iRWeoG96Nzr3HM",
  "key3": "2qWntKpKyTFEVYpp4mPoW27i6WDG6714NRrxPqJwv6KAg13LTCK8RocC5vRKBAEkttmBUqp5KzE44CQNM39Tpj8B",
  "key4": "2kpgaFCJ6Zt4q5mZAicHTzgCnCAPSGLGaXr6vK3QeCxqACa48gqnXsfW7PERkXN4ePmGcL1t7GZrgjFzZSADMiHF",
  "key5": "3E4RqkVfujDez6wkVLUrFCVza6e2brPWtrUbPrVjwWaJSbDom6N2KNj8i8dFvp8MxpN5eJaYe4TKkqeMG76VKPzU",
  "key6": "56M4ubQRxRUXaVqx6dBJpG7ZH1rvGipZEh68Dg8YV42Yuxzykm81ikUgHEAD89kYukrFWRVYdZeysHgTodNksLPV",
  "key7": "5ZasyLUfuEKxFp2NCUEYBaNpQzTSvAi7mGypopNbuXZkzxhcCwXvgsKWvFUJ2jVthUWV89oxBsA5VwwdvbyHpzkn",
  "key8": "4rzsGMp5cTtEvuunY8YBHoGnwAuuDF9Xcyn3j1M6W43A69c2bYEECfwe4o8pXNS54C8TKjaxndJyFNeUHmcb6ePR",
  "key9": "28XmWDPwbYLuCoWPtV9vivQDb5F5Y8Vg5W7a5GxTcHjEm8KvcUmCMj9wJP78BjNEqpw7TdNHM3dmzeBoEpuezvzG",
  "key10": "3sHdMwXLZkom7KzBkckPaYupMGmD1v2HkGXFJ4CZU1dHjKR1p6xqT9zPHB99sfSNYBqWkGrJ8Lw4EsEyJaUCTzQq",
  "key11": "4UF4a77ZE3rSu1ZK4f8jLS64EkZR2Hfb7XYDED8qypKKGiNnUofhkgfc6QbCy9oAS8zj4GXajXbafRWGDymUQ5c5",
  "key12": "2rWXdGCkPTE5GQNTxf7omunCdQ7LzuWEZxDtnidop26K6zNcGBJLh36MuPZFULMebShx2CeLLtSss9vCUBFYceNj",
  "key13": "2CLTSVgS1gNEGZMJfD93xgEJK8XNgRvR2medCcLNDqRUeBSYaEQSX8pctkmodjJwheaQRACYLTdTQMLyuBr8RfXa",
  "key14": "ouLweumpca5WHbakS9Ug7QHq4E6LmeZSrKaHuRvUy2rPXE2wjFLhmvNcdAniTXKodLSJyp58QGhA6LyY3dUkuDY",
  "key15": "3DsUkrxZVLg3MjQXokVe9Afz1K8GLfc4N5pQyWjsZknZuRJCbvfaoLUs5iWoeToGYadGMX7RLRYZ6Fp9mmarL1UZ",
  "key16": "25ya5mYzkQHvcC62MPajmfNmYoSNsZfx3q8RaHJJnWrQGbU6ojDHHyM1XBnpo3sQHTcVLVY2chjgngAfnbS1KW1y",
  "key17": "4RvJvnDyjcyfAfDK9VZhMcYpXfhoiXLu8Kpp5dFLsjonrK5MjgL7yEGYTrgXPkigZcRoPGT6AVkNzoFQVv1ZLYQZ",
  "key18": "5xMzA7P6DaTTtxS16uSaAvpi8MhWaBvvvJ7EifehQDWCjGK7SaBGkxiLMrV1xszwktZXbfMRGWZ6igtJ6GhfW84m",
  "key19": "2PLfWgr7JsxMftd42SFepPTyDWzGw9YeTGK4M4EDhy37sSsfenar4Kiagk5RiEYs7MEL9jhWr7hU9y1FsCpu1vUe",
  "key20": "4ZkwZRkqZGoMsBiJ5WN7bCn9kwNmc5WEe2ewURYC3k6ZLxJFrCe7z5UvXeHMs9ffRiDQxK5y56UHMQY4yAvTFgKi",
  "key21": "4623Eh93ZA5K6rqSD2vy5tqcJCzxn155ePd9bKdpEpx6uC48Xb3xpA34SwZgXupm7MQpwrfCQugx1pJH951tR8cR",
  "key22": "24NMEBVYJ4g8aw9SzqNihidq99dExZs3DjFDsvU1VafACcLjYhZTaxnbfAzpcZacBeg1axqKnBeR2o4TmkFXjnWw",
  "key23": "5AJm8B6c21ZdgkZdhSKBpz8HoufNt8P4JnMfHuNQC1eCskMLN6d61iGNrnzDviuvhwWCYYiBD8m6MhiwDG9PEmDv",
  "key24": "Xhc1ykAS4E6CSV8USmpydsSU8GdPUmeLStRcawsyDijoo24eBB74dfxqmQKwKsAaU6enE3177bDCZE3DbpsBhsC",
  "key25": "4N7D6wnxgKrCvsQN2XrWy3TfmEYkBT1WkbrsKUdmfpSivxeDVrPPoG4boUrFvdgQZy1bdyZXyrny4xHntF7AiprS",
  "key26": "4krZVJRughNXPQnbxQ48phaC3d3H7e6nqTG1v9bUhti8eqUqZQBKyd1Ecz2qt2dJ7QiQADwxhYUe7bsBkFfF4Mzp",
  "key27": "2KKSYfw8Sd4CQZmsVfrEjXhjbfrzChngYZVaWALn6XjiRXFLJ1FzC8FuZhbESxnLdGYEpnueNgRYqWroVLuAo8fV",
  "key28": "1wzisCPvpHHBe5PJ2bHjFESVB9PjqfA8y6w8Xop7UJigQeGYKnpjhTSw3CYrHFLvjFAsPYRtxkKLCTcEiZM9n9",
  "key29": "3UK3U7rT39UfWNEppAfpzBHUXJoxWyGKmxMZ8DH7q4iPaeSs3qinwpkX3NiNycLxuS37CHrgutesLSsnVwiD5R3w",
  "key30": "3QJAo4Cm39Nk932N4LEsvnagW83Wum5agisyzPekSK74MAZfu2mZreGhUZF6BMr4wy5qDzak9w3ChXa2S8SNjZ4L",
  "key31": "2epknJrGfQKqUe6SgJeLErKxXQzRzJE8Csc1jnXdupR1MfijriHikKAgpSJ6xxH65GhBaWCKwXjmsdRbjxzxgZ4h",
  "key32": "4sGECPUqbibTUVQD5yasPXWorGFPmJiTpdWWGMXFyjrNCGAneFPf2mcKQahCydUpugbnbQuciTJK7AMaR24fioEK",
  "key33": "33cKsMWw9QYANM2guQRyBWYYm7fwJ3voocTWdPzgwgu3JPk5GVcY7BocjnE4SUWzRzUGfHgFHa6uHGxRXq5JBgrV",
  "key34": "YQQhVhbE1WQ4Yyo7vme1qQrkt9JLZ76b3HpY1gtX9xHxrGYdd4VqkSVDb4Tp1CVpJJBrUAojYqhd97fPorozpSb",
  "key35": "3hu8hvmaUqV1qRkx3toK8jDWirr4LZvd4dBFCsZixMjPVN9q25AGsmNaa36sFq2Ny5g5f4KikAhNFqFhE6fNL4oB",
  "key36": "5oKXsH35yhKL3QUBd41sNiHJZoow11iTrbDMYWb48L2hBNCToxS6HTUECEx6Wz6vDHgcHQ3NuQMmKFVQXDCLfktH",
  "key37": "41WGeVS3uJYA8EurYF4S1UzWY8EbZPUsUifUHhrELjaNYQ3npcDASStnTNDkh355WfumRCuHi4ZVs6sEbbRgq58q"
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
