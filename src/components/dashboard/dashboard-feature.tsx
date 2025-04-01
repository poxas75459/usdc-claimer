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
    "2yZDLSx9r2ccLJCq2t3YRurrZLsxivSUr7FFDUVwVdydTvmgXWf1sZXcwNH5sBJf4AQHA18QWnFfeVb2QiujFmwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33woJxGL9WzhGPGWNPNzzZKefMgicP6ZJdx9jByy4WzhKphft4KMNztaoQbgoRsqNwpmoVDGoNo9gBomg7Evfpzy",
  "key1": "2EQBSMvxqXkjbud9YKs4cs9owq6oeDDuLZ91ABcUmUur9QofG5tZMLGwAjTiTnTxjdKNmEkJcrxWbzzf4T1knUVZ",
  "key2": "2DLWQ3xYfFnrPUFALZ3GcMTrSaQ11xcg67JTThMng7wU2R6ptdfdWown9B2fBk5bzXLsyu2f8V86LXNZnXfYEGKf",
  "key3": "25GVsNpUuXzvjRtpjrjXtiaaiwL5TSGbfknEf4sZanyX8gumD8MosmAQ1AvCk82PGZJLY8HFSop3GM4S4KmXa6CS",
  "key4": "vYF5YCdQRy5h7BkyP7W6iDpevokEnW4smsQtvginBRu3RwWvkP5tePS1b27rpQKARL93q4ECuwjh7eZtZBrjqdJ",
  "key5": "3wsTvxjw4JvrbeA4xxWCk2dQFJa1mXNGeKEJN2339awHuXqNb1RbnCvaehVu3ggVX3hBiK9yoNxobaAaxb8d6iC2",
  "key6": "4DsEPQvKpwkqf22DoRmF78JpSB7pj6aucZFwGJGV481gV4soj4K84qAvKnVCEBgYqSmpiBBhXENh5gwbNz6F74XV",
  "key7": "2c8DmTMke8NBFinzv76Bxz7Fnzi3TnX322hQer3FwTZUxJgJZbij8quRDJTcL4555XVGSNDoa6GATWZLK8QZC5K1",
  "key8": "2xQywZRco1V9iRRuSw8F1PG1a4ZZqXwFjpWFSa3iaFphJ2K6v7ejthNG4XkgRnysKfYP5CWo2SZ9WDNUBaXMHoUv",
  "key9": "4rRPUxv1UTAgoEkAvEaeUd7CbbC6zYfxxAN5SKoZmZfnPQFySSZuspipa1Re1rx7Q8ohePFCtG9PwLrNoY3gzQSa",
  "key10": "67cC2NHxcS99oE2j3r7DVndgPwL9uAwRiYaZWfzcwH3PhMZaQv5zZbjsqja2KD4HQSLxr2Q1vreq5knPTAsP5Dge",
  "key11": "2NZngG4fTasgRH2PCbGRaBSQ2FetyAG4uEbejYPiFeiFAFdChwf4BK5RjJ4D4hoXoTJfp6gn5DtmkCJzerkv4teA",
  "key12": "2xtKgqFtgAwYUzFEfWCzaM1mdNzLxLE5pYoVZpDRgWn8UbNb9W1oyepDgaGmiF7uwsnB9MEY5ncsT6wxRb4AhkKq",
  "key13": "4yQ1STfNjcGbzihojc6pZHgMhF1tzrwW4KNMdDcpkJvnvLjsZK9stGKk1JtWDt7FqwJJ3KPEgjZZdsLGpW1x3TtV",
  "key14": "4TUsvjy4Y2gKWo7hDKQZ7dzyTHmc9H3ESorkzqhzDHE2ZAXCCaERQ76QQHEQzhcXpaxedpFHs6jR4iwzjTH6aBd5",
  "key15": "3JBk4frri5JpLTuywEhtgjExsFfgZMjn4qky9ZwBnoQRFiYHgQkTuPyZ5zAmi1pwidfryMbKjpKPicgMCsp2hxar",
  "key16": "5RTLihANUZGbBfzPNjkaPCgHHYD6iWHQSUD8hrAmNp3iACDcMe97wVyRdsQSWjKmJY4CxXVNp624Z3cTULhiZXxU",
  "key17": "pf5NWbugYbjCnCvLbFUzrxcxp9L1i6nBArMByTDNPr3QbpJzcwXa8fxgLPy9o6aAJMfLMFb9BSnpdpa35gmmfeP",
  "key18": "3YJu9KvVftRU3a2BFXE3bvDUmPNhornQSKAo74i2Z6auxon7618CQAtxjLuuJPQFbd5scpVWeNthG15R1HYx2xbx",
  "key19": "4QqgPw1GioP8hDvwxwkE1DoUiVJjjVwNNVRVqNi4teqZg6S8PiuNg3UPuaCof1RDFMZRBXVHRoYNRWBt3XU7k1AR",
  "key20": "4VvauXXTpEAZKnV5oT9ES1SAU8ZrVvAQWGLV6XwgXVjSqUgyELnEnsHMfCJbA9R2FCEL44AEoWNb6ETDmCiq7b5e",
  "key21": "2htBi3jxvKe3xprqp9M1Hjv3HRRAYzDeHt1LXkdL3hYrDJrtgVCMiKTmnqtac6uoWwkPGdsxPoKjVMBQsSEtsgBm",
  "key22": "DxhhijN1JaGL8na3W7HqBFXUJJ3JqjtCydrXWNCWxdJLEBRe8mMuLhd3Mp7qobK5Ce2gLxZPDFvGHGMW7YdnSTx",
  "key23": "3jjcoqNepWdboDsR9C3zmcNQ3fCKbqzXvEECU6onthVf696CYmbTawBLK2wkGWXXcwQVdywbLbYTFrdW4hXxK2xU",
  "key24": "5QzsYS8CrFLrLppJ1GEogEaXzs8wAWfVC6d1xRBnx9zFim7TM1yShF4anrHnSeua4mAwnisNPvzLeZwfBJzr5B7x",
  "key25": "5TK7srewZ7RqufK1kG5mp7zXBguLDXZFseKx7UTxkKGktob4aCseUx9MMNU5LAMEjd1mh4i3gbhceozR5zdsJZoR",
  "key26": "45fyeEt2LL7w6vsGe8ZBUB9i2AKKSqqxjKe7aJFp9hMTbYqBcyhrMpT5Kqvq49ghcNifsFUoX6aBLtsajRMofHUN",
  "key27": "5ZXUDp4p4npM5YcnPnaVaniK19Y1ARrBQ56K6sRjuk5DN3mytof3YwhXWikn3wiSofBRrH4qziJTrP5P7PKfMJNH",
  "key28": "2NrTMZFN7YoQSRT6jPnZquiJHumwdDZvXjFGSiHY8TqzpAUUiv5G9Z7L9mum2TmFTuJvEBAoHR5QjkoceHQ4qkrB",
  "key29": "3jmRAzphyQZnXFBeWnbHUqe5bhf8ieJ4M2mnDwimoy3WBiV4Ud5aSzSuzVNjGrtp8HigGn7ssTPeFUJt4adNACeU",
  "key30": "59Vx2fWfD29ZRJoTJPUjw45xFJXLPvtqA5cTyUC2VRf2KKM7L1brVzDPVpNKBukxC473BFCpnA916ce78r76ZBag",
  "key31": "64DRGxgM8sSE4JpeVcRCxfTQB1FqkHb6jAHD182kvZHWuqvDhmtdWX2767kLV8MVjsKzLYSyH4qdbgavc6XBfTra",
  "key32": "2QURfFg3dm5AYnDtCqwZcvrHCqXU2cf9LLTEAWuXKDhecvkYUz4L4fj6pAFhQAYtRY21aMEFzNk1H8bBV2LvXn4q",
  "key33": "59PK4o4wUVoZ4wjE4G2U3Y9N53Nm4NGGgkiPjj6qxpjgMHXJFXj166FFbwS7LuNXwnJyoNXAPu6L4uuNnmP9HqhK",
  "key34": "4wEavy5qMiURGCtKCfGGdJ8nGvKJA7vgukvxqr5dpoqEwawF9wtWGbV5UMj7LjhcdpEdggyfa4hM6h6gC5QzpQzE",
  "key35": "4EC3MPPmzpR1k9Bthhxof95mAjQZZAkZqgtnwgzUAek5iUJanxkkST31pccBXUpNP9qBKgAxNFwDvRTMiCrzrYUm",
  "key36": "4XHtQqA39vLCmqr3C27D9A2BnrSLpCuaBjHAjL1LtNFDNCMiLtLUXEMUoCpXhVxkSPxyC1TWqkMj1w954hRbnvHD",
  "key37": "5jxiSzskRksYGceDBcsVaJQt99xMJkggTsnwzxNVPWhTtyUngvmbBqgWCAxJWCK8JgRpUHYhZcexp6F6CJaLuN1Z",
  "key38": "5DwsfvLqz6UbcoyUU8hBXkFAWogsrjuD6s4PQyPpnPMGR64HLJs89YimT17UqqUPaUk31VGw3TCJhjjRSMcq2Avd",
  "key39": "31bbyu8kyBbd3fTrN4MtieMFqUh6HNo5RJweFXdZJ8sKLo2JgaDJNcGymLQi9N4xqgeva58ByE6wKJ8NMzMjaEn6",
  "key40": "5AbFrPGErgiEwLcHcsqwdqvvj7Qp289j8ZNEKG6VWHwu1nuYe5wk2xbJJos9R7LAKUDSKdiEGpYCthQigWXkhSqE",
  "key41": "2whAk2y55DH5QpVYTg2MeVCZcE2jPW6f1Exg1s1fsL7CZMwJ4txBdPR2ckm4usfyZrPEfakYvwx19UVH2dJbYd1D",
  "key42": "eypmtrmfZdu3okM5Zk7GipQQQHusXd7pEm8kUiQ7wDwJk9hzxPUaFLrZRucMZT7FPbj2jtPRUkSQsN4yL8Z6WAw",
  "key43": "n2QUGB3uGTt7SRr2LYqkN4yNrUhgwY7z5iF7CgJVuftVQqMfAjQUZioPpN6vW96Q93B2Gzfhe7ey2ZPhK8gkmQa",
  "key44": "3GWWhyjccnciSCEmYAnbrwdLMUzSuUknYHR4caNdLSaXfGHxGhAB5iPJzTWYTZ2dfJ5uckhFenatpv6g4ttDwY3x",
  "key45": "3S2qK4qQhtU6WRiyFt39bzX3nzYbY3FwyBLsSPDbd3ZGVS5u3xLAVtkYAiGDxWPypcQigJBm6rWXtoo34UJMrTP6"
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
