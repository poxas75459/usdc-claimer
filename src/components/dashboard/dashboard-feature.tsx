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
    "hDMd8v4yQLF3SQNL318R3szXxffvcC3Z8gGzUSZQ9GWpAAyq46BFBTh1AdVjXg8wSVF6W9MBihd1Bh9HREcqUdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483yHEr8UZp9EhxqNxM3e42Xv6gu7QWbScu9HumP3ocWHP3GzbDer9y5zKWqJULxjNKUaYCyK1BXwqpqcMhQEbcu",
  "key1": "5SmkFZvcWQnm9kyUKUoEdgEyLH3AnMREfshhBZhrnbeC52uz2sxdfMwA9zHHDH8kfHmzDEFfmViqfqoDHVnDBmKY",
  "key2": "2TmyTBs5zQCoK5CoKiDiAGVPJ8tgU89NuHvrqgPTHkKZZU7exVQKGgLwoQ8YzTaqC82vdVrVx7eDGA9kGnBcJjTE",
  "key3": "4qHPoqe9eqGc8EL8uqK6PAt6soyxTFAJ5bHHYxMMSPrVK7ZuhJBeniv9dfPaWCBE4MAQghW6doABHmtSsSticDaX",
  "key4": "4JGwRpuu5e6YNZD9H81FL5MvTxXb2h39sXyEshigejYaLVBR1HA6hZJPbtMT6jNUchwQEmcXmrfpzFf2UEQ4fug5",
  "key5": "YTzE1gHHAvm9dkXoyu1WaySzsBkRRAxXCUBFHyzD15UF6FGUe2SRhxCr1BNzHTJ2nCuwjh4uHZkWB1hdLYEsv8C",
  "key6": "3yjLpN852ooK1wk56vP4fDhUp4dNgBSMZvSSVkd3AgeWxdKasveqy5GEjbBaw24rhBvgL82wC8p1FgkxEwVmGt8W",
  "key7": "2cfxukniUY4RUrJ4mthHrg9Z8mZEcpu5xqgyxkn7fmHmmqYFbU3qaJNoxJgwFmgToaKXMQ5rpChPsx8Z9ypJh8Yr",
  "key8": "eZuw4FU57mAsnVePSJv9j1671giMmHcNBEaNyGMfq4R7b22qcP65YYBic5Ms4tbjywsw6x1qJBzmzCLpiEkgFez",
  "key9": "3Z96VGfxhMfoZp5UF7oj76WYQTgu13fNTSGjDESoeh9Y79RdYt1KDiuwqgVpGoH8ckyjhukmemvqv8r2C8YtAu7z",
  "key10": "4mF762aMV3VLoyegfEMUswkknrDWCnn5Wv9JBjnZVHo9qrRQYZ5ktktYM6dCtPbraDctRu3xtSSYQUYSTnbpkiVN",
  "key11": "3g1Tz4cCYDWu5wuJUn32RxacVWzrXUizAJGTWH2fHtuJyuAH3msZ8ebQ44VrTEcdofKVVrYmJ65yUhQ4wtLM9erD",
  "key12": "wEywJsti6zakrhiX4vynMzTgMPCJt3VczhnzH4FRwEK6Whzksjw9MbexpcgrMAv6NyCLDdND4iamajoyJnRL19f",
  "key13": "56AQEhq96yumHaYB6AQkyWfMDVM5Tr2X3hr7SiyNKTYpFsxoNMbwbvBHC1E7mdjJfQi88tfbDE317XiRfkYMStEA",
  "key14": "49wwdXaXTsPFbyKKrNZX56yDaFjfhzt3RcaGE2CJxcK62qLea4Faj7H3XYCkggSPDJaDGoSriU1mteYEEpFJcch3",
  "key15": "63p828JWiTAcPAxvizQZxj2kB2CQU4jq3aMCLZAYufPpoRKdxWpecQ6V7MYTaN6v8rhsDdLtRoVCbFASJpB9azyN",
  "key16": "FLHYqopE4X1su3xNQBrwCuLo1DXpnWk4CV1TUQ66kYK7fH5j3cHfWTVsgW9U5v5HgKQ7TvQHzaByrv6JPu5SQe9",
  "key17": "8759q5JhQnXN1XBoht6eFvsU8DiSbiKGUUDwiWv8AGzmyeLAHsrWdLi7FsBBcapFrWTtD67qA22r4BfE6Jt62hr",
  "key18": "2thn6eAvGgaA1vxd2ajCktQdAmVB4vQtmWUywfCnwDJvoNvSxDTDN8LWKWPvdypAJFnuVY4RBe5xs22jcRyoxUr2",
  "key19": "5d7EDc9QGagb3bWr4Wrg5ZAk2dKDaCzHmoHiWwtVZMSQ37ARfUezMmVTZL1chASecdJLKgq5E2oDpBr3fDzQWG34",
  "key20": "4xLrCE7dZMTarrT1EUZigNsaK6U7wTqMRUvhynWFAj1gueB8QuEff92JvTuoBBB3MbPBHj2gt82RDFBqXZBso79p",
  "key21": "aKx3GNacHvW3dSP6kKzkwkqhus6wAKuhbxQj9P34Gj7A5UxrG1oVr35A2ghuhCGGqAt2uQEjcboHWeLMtGkwtVe",
  "key22": "5Re8mYdX9UhMh9jR6S5miYNPJr438JZc9EPAzyYvGmRxyRRJiciMk75TVvnM9DMcZ4JnhWrjyNCgRFxe18NaNGDC",
  "key23": "2kVV67F6ZUNiydy2jrqncu8fqwAaHp55XsHqFFxtZ1MSS2qfuxFKpwPpA1Uaye14zpz7V6qMSeR15WuRhxUT3dMF",
  "key24": "3NwU3xp6QxJTpzNJYoa8UrJZYP9juhgSauML6Lnn1CAZD8j5rpY88hbYxMHG9p9tLNSPCcQNu8gCBi62PhHbhwEz",
  "key25": "5m2wSEvnoL41nVGzcwJNXbVmyJtKHhUShpZJNgriha616gURqzwGJMdfmVKJbv2fY2DkknpYxskt7wFaBq8Fr9nG",
  "key26": "2Dg13NjaYFppAPBtaZqYaRpGtfN7rT8muQwTprjq44oae7epNqnBmEx6xUGaDc9V2ug3rm2j6kXgQCFD5NyckNtR",
  "key27": "4WdaJ8ttniuksR5yuCdbyDoi9j57U3qk7pKN7bC5un1QbCRojeKcHrYUtqekhzSqTceukoHr776UiftgCnBV8LhW",
  "key28": "UsrkDbAnnvGKA2TUhTRV8AGXhtAx1HWPq883ZUbNYQNjMy1VsPJuZ86AALejQieoGW3J5FYJhGWRhWLcq2GdGAG",
  "key29": "4PxgUiRWnSps7Gts4Add8vwJMh9DHkS2pfExgRzLiyFtSVABcfA4c6aC164inmZHYaENbMhxYqnU6gBFYFXBsGcU",
  "key30": "62bosQsctbFuxVcYr3eRncQ9E83F6hb4YHGanMGXEmfTJZEZvbGJqxs331uhxomQmwV7b7eHZifkZot1Rus1sBHZ",
  "key31": "2VzRn4rMSAFfRzFkmRUMFKTbbhc8jRiijknUAjaQMxmupdUZNjWYbcmEHpQE5fy7i32JqDni1ZcUUapJfFj2PeV9",
  "key32": "5EUjzAs8VHKCYKBrMALwhWVUXVWjE5WSpT8A5z1EyFxLHBYhbsk3NYUEdMmEuPYSwe6Fcay5y2Ntinb3MF2owMHq",
  "key33": "3zafMFjPX4LTQZgLhYhJKNFhr41vAZ24nkBkWWHntV4rhQLcQ7riY8EPywcKktV57pVVSmV42Vvr81CwX8yJ2Sjp",
  "key34": "5FXiTwRXVeYXRXVVLMtaaJYUrschqpGpNha3JHnGf34SeWeEVaucD21eKfmsAipEMgX3Wg61YeaqBuy3kRbCx3MX",
  "key35": "47BnwqmFdAwUiPZgSRCCYPZuy2SvmFgAhmZZo6Wf5qDiK8wqd5qAokb66auvG1WaPhQBZR3eW3i3eFXkhdtKCX2P",
  "key36": "nDEW2hJn6tu382jvvFGHpPGK4BrbovXCjXDTAnLzQdEF9YZM4iL3ATLT44gvkcyFpE8fJCMu89e8fzCEZZZaLuL",
  "key37": "kVdF9vR4ciXWSKdn7VAPSAij4mfpKSgU5p3t1unhjF4TTj5E2KxaQdA6H4kGjnoj261cGp5FVX8czujGbhVzNVq",
  "key38": "4Z3MB1KtUbjPBTSBUfsP64ib16kxys7VWXuRM8ED9ugKxeZKxudSLPjNjcupX14f5yPGKv3uhnLHcTfMV5Ctw4kn",
  "key39": "3R7Gp5aZad17gRSpqyETScvwyoumLLUnnYJxX8cvqpRfhT7da2jXebtTcDHq8EnA6U3YNomXSdHn5mvTLciFBKaH",
  "key40": "2brerxEVx9RfjHF5YU8tD5SqoC6UqnumZRHjprUVazDC1L5YJ5yFzQS8PGh6QkjhPbAsEamgwaSYaAYTMwyhwwjL",
  "key41": "3LaVj2W1UxHNDSkMdhvgJpo5N8d3jypdKsN1zPV8QSFgGNbd8Tfo1j7Cm5PtGTES7fokSvfJbf83jEbMTyC4oLXN",
  "key42": "2kJ25VhguRK2zZr1FnhRsevoEDzxU5erAuHXpn434Q993rK6kLqE6oV3JcaMaMiFuFBFU6QMFMewiizgJPbdsDvh",
  "key43": "5zHJf3fLv3r2e2MEgSxucPvxaMrYEC47HMr7rx9nA2JCHN9oVfQBGmmEjgxk1LfmJc3pmkjFBLDQqWgEbK7Sfuqu"
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
