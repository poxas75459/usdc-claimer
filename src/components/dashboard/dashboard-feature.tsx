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
    "3PrbEYwJj28aTb3WsAs7CTWzMjc1W3pK9aBKR74NCKLepUEJiBLSKS6nWajnNAoYYmuZ7UyUKCN1zjSiG9FRGwwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqo3TTM2sbofPrCnubspKnuPbubgavx9ZMf4bkRwdW5RvaNDYWSwEEKQNgXtXYWdYgkdV9bPRAJrk4MDFDdqmst",
  "key1": "2w8fyz6xM6jen1zRt81LCgAGZqNPMrPEb3U31KmTaieyJjErxuJGegojoz9WxoVo51LbLapcqQ72vjfzMJJApPHj",
  "key2": "2XoWuBLTLG8CuNypi19e4bTH3nUmevX5uUEBGJz1C4wWpsaB9RNTwnToV8nbEs6amWQarzL2ykcte8zQNpkUJiXm",
  "key3": "5TdCjkcL75TeuX2XTFJXjyQBotoa1jLoASF3f4grEkCKtvaDDarTCrjDtexDiJ4Cm7AGqG1DEyGgXZxEGmgQx4Vz",
  "key4": "4tWSRn41YmvwSzFhPKNc5M9t8KGqYk6kP48TY8FahLj8EUYpmhoZrfqnTrwEnFJWxDZczCHM7rwx3PcAB7QcPe5L",
  "key5": "2CY9DCxMbY27sZwYmUWL43LxkXnMcR6Z7jKNAAtXNfwTEWF3MwBE1Rw19YCtC1kdHp2wBTe6x4QWih7SPVG3Kyfv",
  "key6": "4UG2Sy9SRKWHUrBk2KuHdRLQAC3mQrPUyHcMQ1nrSXfDuYyso1N9qCZoFG7p7Wqo7vusaELw2Qfii9do4wbHdFJE",
  "key7": "5QnwTuAgA9ErVPZLMRRs7WfpRUL2HYjJUxc9QjSaByEohaxr4QmBT9JuD4MACe4dunjzps7dPgNDMiJJ9W6reyze",
  "key8": "3oqYvokqeMBtR8e1pQK2wvmBx1WgScZB6HJAcj5wEXzhkfwRU4YkcApNrcpYax3ihwAQFiKWEUQ7kAWoH68Uxm53",
  "key9": "HGbrGLMz8Nvwnf2ck34wJR8CjAupG7xxcjQ9M64RtCYjhcd2JQSMFwd4PnfHWWCAxjvxRjTvnKeyxipkxfNKmYx",
  "key10": "3mSW7HXFMccPdLmpUKBgbVkYMLQVtdsGAxiNRBFc8K9yB85mA8soXgvxNehvjrQurHB9g7HZmYJVVeYU4pSv2cQ3",
  "key11": "3LhuWC2oyeLZGCo7gJhH97Cu4Q5JHPndBgWVjYD1cDfRbLLV1h6ZTHwgNMLrzJE9GDKRUiM6kQyQVdhnTUBL6mkV",
  "key12": "aqdQ1ZgwcqfT9sZF14saKm7C4PARPRWQSgV1bR9bk8nUjyUrmo4paZjrWgMeXDMdJhrqdPtTx1ooiRsAeqXoCTH",
  "key13": "chcVQQa3DTStYsXxygNVH8jhMD1oKU6GFomcTCpCg5wH9EkxYL2ovpukSWWL9vdQQGXiWjpWZmejy3wxoHQoGKm",
  "key14": "4AieReYnkxZYRMV1w11JHZ7b85tmmB3bDA7kBUKNSt3jv9e252NAi9r8YHKfvpvxYTToFZhykmjRyJX43qnK1t8a",
  "key15": "SX42Eh2X7ULxxGCFRN7HQK28QacjuUzekeQZWwWkPJdH6N1hFHziTm2NFWTdYqXepcKbpeLTMyxnhNUumpFweJy",
  "key16": "sNym1nsEBQj88ZmNggWLrVUvJeLnDLU9JhdhpzQQNDzDkoZYraFXw3eYdisxFvAf5FwSskcraVBGoLpNuThnXSq",
  "key17": "2MGruShuGCmzozWxUX6V4iZtCmBvP6X6dt6BDKBzff8tGEKH3QMjVAhivwbJJq2dXvUAcBdF77kN7EfE6ge5ayjk",
  "key18": "4AtNwLKajWKR74JtyzcQbY2CC4dBxMhRPsHNKCUxpcLnHtgzwSG5x6PyWkTL543s18tk9MEoG6jGKmptqv1WoFpT",
  "key19": "5TMjDHkzkfAQSe6Gm6w7rrbygUQ3MkvdyR2PHSpJ5gtovHQJjdd38WphzAdtjsXtsF79GnZ9v3ShvWRnWtBLrNgi",
  "key20": "4Srv9oD9Pbcni7jzpSUsuX7v4R8QHRksttJwnTKkKHUK9NfAFzoc58ntADxaJPoSZ4QnQtYgAYZssMzBMkUsb3DC",
  "key21": "425XmoFgyLsRDXsGptTAVcxwEpVNYoXXVkQfRFwcRwz3p54WmAEcjeQMjuFj3HC5HybY34fYxGJX7MqLAs7vgsTJ",
  "key22": "3eoFvgUQQjXhn8W4BCQ6enCaMFozCA4mpowbSGANejETDUWXwqm5E2tBnGqJUvLv7f9PENVdzPk2FiZDFsfdYmg9",
  "key23": "5bNkBFPPFV4WgvATfqYiXe289iHUHJju3qVbM3QZ7g75swUY1qQPvZLfrMVoNhZbZZQs9hJ7A5KxUkrpP1pNShFX",
  "key24": "3nwFVymmFWkTKpLPB1KDNFWo3njHqhH2yK9V3wLjf8vbLKmbPMKMXWdRdD3ssLki7TBAG9DgV7tRcW5MDAbNyUhn",
  "key25": "RnRuDVWoNJBk7xwFga85tRKP11Lbc62K1qwiXbmoPr4TcgxN9cLRhCJYN8LxcpwGmdXxszuvhdo2xEAHcMFfSJm",
  "key26": "5h3QxGD9E3DX4J1GKGNbdvUQVb6yHf7Q9wHGT2qS5iYU1vZvdYUTLHr8G9A7zzu5cjsxqWZ4MmEQ1QjqFG21xECy",
  "key27": "2MCxD2rQJu5qnwdHq1MXdRfE47sPcees4m8KkTDfrR1wXzkTS2w3dLeVkUxmZm4fGZaHasNzQNr9bjwurKGZg5B6",
  "key28": "1EAZG9Kq86k1mevinQn6Hz3M886v5fk5tre9vcj7GiwgcyU2Vp41DMw5qrwbF8ARBxyNpR2iaMUPy85At1TZ6Ue",
  "key29": "4a4qTzSqDGBU6NYyvG9tLk6Sy8CeCGefwSA6KHXVgYxo3Npcazht2Tpncn2FyRgXNBtewCwet9zFJ7wzHxTndLsW",
  "key30": "3vpzc4gCEcgA1g1fCFt3V7p764PmUSQBMgZYJqoQc4CHptkddQnQL1owb7qyrV8VjpthKyFxA1EFHm4Q2AmfY5Dp",
  "key31": "21u6dNCFwwfXtdWFvh8eVeB7E8YJQHGpe7m44pq53kairBN9CqpXk2ePX7QqQQQEJaaoJrcAn43JpYFVHv2RqWVN",
  "key32": "HbT5T4KwWWyNMzJAyC9yT99UmnmTcXafGo9FzRWkV3M6PqcR9YKnEvkxxc8QChKtUEUV5p9SLTmiEuQReQRF83G",
  "key33": "3kRCtYQ7C1fsNFG3W2Yb9kAartcYmXAPCyfzjQbnB6Nhcmnhit38e8coPDZwS4iv4Q1PWX1nDE2HUtPfkPmrmVTQ",
  "key34": "2JmvXBdr4LQnMcGExXvoqJbd4Jn9srtmLDWQfJ3ShQWgk9SaSUHL5cyvSpq7sFqu6G6nx3fCVTwBVnRiWn4AuZvR",
  "key35": "52EE8gbn14GfqwrXiGC4nsX1setyaJviQxrovUmxVfzif28Fe6rNT78ePkxjsmQn2GVqYKDknJuMXP8SvgKkWZDu",
  "key36": "4NNM6vaF9u1iEXoB7k4z5RoERnvUqQRPyp7PNJzh3B52XMVKHU4mMCuniQNvopZuNeDCTRPTsz2MLNJ58aQB7q3W",
  "key37": "4CSzEXdsntjdE3mBzvnr35FAmbeukWamy2pFBqLxgYKkreyogPQEAJvUFnEtwk1fHYZt5KpmELnGhqcET2ej9du8",
  "key38": "62MYQyxFnNCLQeGN5ALh4qxjGryL2ZrsxjQEWw46XkqSHgKi9kxdUwfvewdasxxmWMPxDBsgFuPPXdNyvomEUUD8",
  "key39": "rMx6QsgrH2GCDx2VDf5brFfxq5kf3vBttGx4euKyWjs3TxYfcjoAYGAEMAoMzAH9rkfVJACtJhUkqKC9ikTb4SM",
  "key40": "26gwa69pEq6hAmfKbfUD9wvTvP9kfUuB4Bn8fiExactaAh1LDdztx5cRbFASas94tRYDgjnaXjS4vMbH5xXVV1iX",
  "key41": "4oPkZYNJNZpoiZ5wjPjeJaCT9bpsTh8uc86drtwWV9yvMekyyYa6WssHp2rphP8Nh8ydQcSpR1At3sowhsVgwWHv",
  "key42": "teKeExJPKnAhU7hUz1cjegLmn875eUkX3ZhFF1oPxLwPFcCJ9LYtKscHbaxcpmMBzuK2CNUM6SeJTaSFBkRbmnH",
  "key43": "5F3myj2vVv5eVNLaAnv7Rs83DfhH6Sf3zGAK83R2qfWmtFKC4DgQHtJUiZ2fMAdqCsQkWVv59gMaA7w8D9ve8pF4",
  "key44": "5Ce2pDAxpFRTSriddVyhJ6xV8iRWudMSLEgh5N5ySSH9vHGi1iY4xAsivBCBQgCxirpwEsJado7VjygseHVfacNz",
  "key45": "5PFbxgqQQc5ZZtWeypp3GaMWHdD5rYh3sgiQ3qffWEHi2zeUG1hZzAATuU8wxCZD3923KLsXt6ECpEH7UW44AsiM",
  "key46": "5ogcA7kkuJji3BkAm4txcycfqSUH96Z8e5VP1Rgk9fiz75EkevFCewFpoyYbDpfQQQiMXgpiS4o4q6DH3HifYKk6"
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
