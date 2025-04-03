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
    "3mYVbZaX7eqqgLYw93eFNqYu5RVLqkkuseDg2WwhBKMiJoeyQLW1D8GgSywZ8T5oFdpnvBB4vTD6hcquSXXSMKic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umUFCjAYQZdd99astfKgvtfh4JCL2KNaZqwjVQYi7prhzCu5gQ4dJQ6iAD31qx33bQ8myBZEKpWCvZU1aAaGdoF",
  "key1": "Zg86RiwN57jYeBjmJj91tDJrDLS6cAAmtj4n5cmW7LL8EsMXPYe5mRKHLAcZy7QDbXZFd5GYiA6Vb7U1HNLNB1T",
  "key2": "5fQx1nUoH5h6YXSpzLXMkqd3A8WPp2s931td6u49Dx4dDzHz5C4xUWzg1AUPWqpYmCZHVHJgwo6YTsbn5GUdYe1u",
  "key3": "22gPXD5iKGiaquLezQ9W5TfFFfBgvNygvkRmj9TcuMi1E2h9SYq48txEZhVaPB8R9LqGtDT8BDunFWumnqTsmMyj",
  "key4": "5yoQQkSdVuLtFNDdYSiz6EunyzfHBVwogTeyjyFjApaPdhwpnchXHFC6NeMDArFKhZHu18RNWERP2EbbmakyBvmh",
  "key5": "3b3tcXQjsiFJbS1w2w7xjkPMNMJhwMpah4UFJ94ke244ZwUNnVG3v5N7LCfPkRfYKNWs9EnieKLT3MJ1ep2pU7No",
  "key6": "EaRx1osxEUw6jyTy9ikHpY6rAjtutdKvcWXPNQ7SCBwp5QTec1ryWCjK6J6Z5dFAnnqYEFarremzwhjnJ7q5H1V",
  "key7": "3XWDTWD3bcrY1Q38UZiAbzUbUsaaGAFQmHfFNHM38dUC5iPX2FxG28uzWDja6VqhbwSBw4UjApRAmLaSQ2tDzDWt",
  "key8": "5MAx3V1U1UdBjoxD86KLFPkGeXQ9GmHhWpuzbyMbeyN7n3MHHG4JLjEkesx9WZjRdTK8Q7UbG8J4gTGKoSNeyWb8",
  "key9": "4uqnLYcG16vVpEAb5HyNcR7rK2UiuWKyeqfjhdMWkh3osr9rCnDA4sTRbPX7qw45BdDN7tf3Sqq1SP1bkYGj62n7",
  "key10": "2rLCUP2AconsynzL1TC5L6R26T9xjf4iiuLk7KnBceUmnHBsWT3bYtuCCi3wQzXKB6KzzXZJFX9fnH2MpBiV4rs",
  "key11": "5uAVgTq6917WLCkMAxdvAQ4QgVx3qtNTtdmqZdjYFV1Sn3nXwBKH2NqfqwEczzX4UAt7FPJFAjnerkLVwEfG11xZ",
  "key12": "YD6XsWaNsZsnPUgKt9nnTFcsvMzzfEUa4FDGPvqoVxgQzvH6RbrvCTGU5LX2BFkG3RxGRwEbjW9UTBxNrv8oZWP",
  "key13": "3C2wNL4Tt5o2ib5GYX98vaaNfgkEcLbBW2LxaZdD85j2YyJhKL94p876tFJMxR5SUPeeVT6PrmV4UoJUwidLpUwT",
  "key14": "uvrrvjgdBD4vDU9vfrDVrnYhtNBtcHAXbAJtRFNjSMmjC2eQTosYKHz9bjhVUhnwPUPhK1FSYMNYMG6c5aD2WH7",
  "key15": "4pCgBkJ4Lq1Ww4aZAJbMSMRbBmwQXZzkCiD68X48sZJLGQxLFHoNcoCiXwjVgbB7oTi2agXnSH284MpfYDiDci58",
  "key16": "5Py5jG4NYBQ2M7ove7xDpz6FtFaZYUK8DJr9HQhXXsrez33rBhjSwQdDGzGZkQ8h26EphbFkigjskcMQ1oXNioiJ",
  "key17": "t8qf9FsDDop4he524fSQjLhAE7BL8s1MbVXwBMjsge5wcoFFs3DtXGxLQkCw9V7W1n3SB6Nw8PeSNCPG3tURW4j",
  "key18": "49d9xHBsc1Nsg6rgYG48X7PBmzhD3TL5FByc3dZFX7HbDXfuiMSrquRCC71M7eR9VVVGMhoDa4Latpkvmz6rhPXJ",
  "key19": "2EfM57oGMxYyvtjyZTgeYVDNUQSEi1MiVsHZRQbRj65RiQ29zir7t1eanjLttFRezwaAUVBDgCsWoSXgRw94H2mL",
  "key20": "62XLTkcA7QmZmUckWjiS8xTHDZL5Cm1Gcsr7822bY1FJExU82hfDrooTdLQjKDe9kw2jcGkrZfE5u6A6JCbJfUtu",
  "key21": "2DFaE834nPFeFH1MxBzE48UKeNzMM8GrX8WepvaFcs6kEH8To3uR6CUQtzewQHkcwADrBx68ZnrmsS2Ab2dKpiHV",
  "key22": "3JQVLyqWUgQvUtdwZcPEhTXJe6zB3eWSXZvZVcsjx2x3rJSMg9Q8opsU5oNxdY7RGk6x82b19k6LerTfZF3g4k3V",
  "key23": "Ew66mSwaDBJuAaHgvG3WTRjttuZkzRBBu6W49v2HCVYiKF8j4BcKezW9f6u9WyPhbdJyx9WvT2BpaDhofFdJrRi",
  "key24": "3t4zQmPfpScTmW2Jha8ejvoNsiWvCZwN4U234BS8JzrqnB3uznJUzjBs7DM85VnAF3cKMtDMKDKvjZ8LvqCdr9gw",
  "key25": "2Ko6g66MAaGLmZwu7b2dGfBMHi7SDtutdFPNEkotMMsjHhhrW83gzEcoU9vJWarGK8NbNJY2hZsXmAx46MtECdX5",
  "key26": "2CAqB3WmkMb3TsNwyWGsnpJEbJqCTwx6VM9jpPBwj6fVECVQanQ3skPB6F4KtBFuaHosud9YbpkCDT5Re8duv6JA",
  "key27": "3XCLGCDCQoGEakbB84iUtujApEihYkTMtzEXP8xkds5T7Sry53yysbX6CBHF1SNzSmzd3nwLA4T9HuUKpGsbNGAb",
  "key28": "8Qe8hqgosbZ89wiCMagFt7hgdoFdf6ahcUzhy767yT7SGMnCovGdhfbJ4UzTbbFLRPhseAmPi5QQ4Pp7g3azdrY",
  "key29": "3TSZWfK3eiLuMK7Etfh3yLF2TaqYzj7U5aFCidaxVcw7bGUYZg5ioK2biXTrUewqv9E4SrETgS3VU63sjrvhpGzj",
  "key30": "y4MBqpTovmgfUoBRbUm71TvuriP1dgbpuCNCbbEtxxyHDXZZCv7wah3tFE8Dre18BwF6kCZizDQ8h8QrU2c1puW",
  "key31": "rViRfhsPfMFdkvwDYppgSGuZNub56fvQ7SEsS9aj7xHHm1TFPjCeuQZvbdf7SCGHXSmmYSzxgzWdE4W1jhAWe9u",
  "key32": "3BQtEZKDos2hBgn82eD5Bd9i9Lzqw3gsq1ASZB81xLwRdtUPLR8ixSAgcSdocsFLnLJTwUH5rL26tdaGu4xewAZj",
  "key33": "3iahbQYjSscWpsgRALEjpMbGerycAvf8hjmSpkMz8LLycsQNNMV1fwp9ooMzKP44zYJzhoy8ChddEXRsoSoz2XW1",
  "key34": "5tRmn4s27Y9kJoCu6oJE7MQ86ezS1ret1uFe1osLezcmDgvpKqdzVNuhSsVtJ2bhFY9iT1ccMmTpi1SZncScyNTE",
  "key35": "3HRwsqWECQZfnYw35Npc1a1pYfGqJLi3RzYzc7BpN1SvEreQ1y6mJuyccMd1tWJcmJpJ3DNq5Efn3pJuD6wTfxFX",
  "key36": "3Z3XEXRY6SsQ82ppGYHzmBnAUaAiw4e7Eg7PZCKcwWwe9LjApHtW8Rv3y2kobsM3DEzvAuDiP8BoVomz1UeXDSgs",
  "key37": "2yLw9kZrqTTi2FyNAXGh8qeVTaETuRQrQQ8Mi4wCYhBATEup6zn1QJD8kYMDzthPZUh7SUu2QeUnpobuvyXxGz6v",
  "key38": "2aaqpCtTT9dcYxNEJqzEQdvTDFL3Z6UeJmK35tDE8n7CSR1PKqeNzmRVqku1fy6PVbYQ2uer3BauLD9LmMVHWSJJ",
  "key39": "2upHDaistbX5h4kZL1K7wB8RM1QPaP1CvE9soAh2Ch6TfgvzStNfdZhsmShe5bzCGTTitWcP8kSaRgLDAXfUM5WA",
  "key40": "2SxMUA5GhPiX2p5hER57sKfg3DwYWCsWKCFb1HLp9wccHN8tyKEf6BJW7DPnqFVDVhfcZ8SSqZ9WaH1ft9aVZZFo",
  "key41": "PCSoAaMA6EV7KDcc6YkfxqbjdVJBYE4zsdahsFeYmbLmsfyPtGaHfjeYDWsduBVBvJ1L4tB6XFJgVk8QZsGqMY3",
  "key42": "4xYPY7Jg7bCqG7a7kcQafuMYKTnPBGy9SNoTgwbeFbPmGdRUahi1t1b93mHGzBM23FSe67VWgvhfFJZWkTRNwib8",
  "key43": "3Yffo3HLgV32j7wJipZmztJTfeBFa5Mjpk4iVW1SuonntNnK1aqRGuHNPZDzdC5WMjCRe5HbLGugaKcR97W9tav3",
  "key44": "47SAeyVssNkkfZbzXdDTp6tJZhnbrou9bRBMZ6SzrV8fvu4FGtXPhRxvAj6M2N9GpiAnJwH88xVR3Xtm72x7Yjvk",
  "key45": "5f4V7edHWKwNjyhSyTYepe1n9yhL5WGFmCxjUY5yMuZjthCex7rYjQ4H8XRoQnK6P436qj88ghVzbZRcxcD2fcwd",
  "key46": "2QB6K2874zm4pa23DuVny48QdDfcaA7sFHApQ6wMefeNjBXQBDDptxiWKvzFHmQqsEmEGLuVAXDAfZ1imL28upEE",
  "key47": "jtj3833q2Lr1qbSwQHphmUXLhhi3ej4aRyCbWzTTiMy1Vex3W9p9nyjiHp6GcQBGdjrdU1We2EpzTNHAiJ4p3pC",
  "key48": "56Fxe6muRzsD3WtFCAGNiDfo1G9uAPmZrMZEYmmucvJz9TVXJQqDi2r4jjX3YNiBaYgJVt2zsg37QRobu4y9wd6j",
  "key49": "cNETPPSuL29ihsSJgC3zweDSXuwVPA8hYhkNXSWb2p5w8m4QhweVQ2Qq36RV7xrVjpgbhT7mDVjZx1N7SPeHgRS"
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
