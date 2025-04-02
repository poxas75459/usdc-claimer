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
    "2Qv9J11coZ9hbtinW7tJYWagkjXEmk8V6HRU4GDmEfPtQcbtt9hGp5o9HQ7GZJdPbcE6my78LHSuYEZP7j1ToLe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKDUZcDKumGPuDJXUSmG7WpLSrWeekP6LVbmkmTiD62FPnsTKrMCcQ6wnRxuEcjMZV7UvXnKpyVDbnXqF4J2NE8",
  "key1": "51gxSiDoSrw1TPsXNdK9nXS6UMfUVE7WkKF7cmZQjk3YQLbNvVhYdssZZMEaJyrQ3pSJpnesx4JcexVbwq1Ntgub",
  "key2": "WGirTbVNSKmT6WP9AshXUQaGvcDhQptaidmPGdQHoXGZDxxzXtwC68pwhDgVMJeouaawHaxTSBHUZHEBhGyGNPK",
  "key3": "3aDGT8vA7QxUFNnxQmr7mTyv812NBLCBXMzpMui8yDtfVJXmCy1uXS1ejsSuLrRcmjee5n4FEB6nyDc9JGwoaUyT",
  "key4": "2W5kdUBZWut5VYcTYfT93GtBbWsYVKhkBMVrzXbe73bRpt3nkSKpfGvoytZA888FxhzYCprgeoZXEwd3hc9Ja2gZ",
  "key5": "2AHS6Vk2Upcu1d69vyYxvD2suU3vJM21ohfJ6xVM3uv3m6uJACjsry1381TASC9DFf8rdxWZoCcb2a4XSgm6CTxf",
  "key6": "5nNJEezBB6pBbz2Uc3qGbXXkkZW85rPkkP9zPG1QjFNiy9oCvodYr5UDd64jyiG9dwkJX6CtVp32zHQ9bDyZHL8s",
  "key7": "3jBL648vvHbKnHXwbuH6sZ1xnWb9CzacM7RfF3b56aZDhSmbbW2yKsuz5pBYV2JrgMVUvsiPNqYtQdvU94acvw72",
  "key8": "4UA3VesZGkiqMdZMsk2VveB55uUcdDZt9kVVJZKXyNjwqA8wUtviihevPM5K3SvqY3Ai9oidPXdnvgTnz7iRj1i6",
  "key9": "zsus7znUc7YgoGSLQc2b1ik5NUCAa7np1FXatzxG7vcrbGMkHadYcddSH33BYgFX1bUTsNtUsn1hZ6q6rk62oJq",
  "key10": "2NSwfbnC83QrM3MaocTGGPHB48qR6mesqwqU5DCQZ8F68L1aU5VGAVQjRLaWba4zzAkDL69Cpytxj9UeaG18jwRz",
  "key11": "5LTKNJtfu6n2zY9715JwDmDwfdKgrrbpKWfsycKKuM3p1GUALg5SS8Ta2xAvM2VrJ3YWHGxQRmHfsecxT2qo8Ttd",
  "key12": "3MfX5YykVoUdd2zwAZCATbEFZV1qXYiu3pBGPgERm2ATPKckdHPm9WTQTS5itJwSQvkbrY3J441f85jytQn8eJ7w",
  "key13": "5Hk7YP1NFXEGK9pb3k6hZqMvmGm7Cpuu3CGgNRzmKV7DyvSs7W7oXh6NWSeqmkxDsAcgweWkGAjgwVHGAtFrWhQ4",
  "key14": "2v8qvQGGAWT9ARh6KabWARrypJX8AxwMKTuDhjdpnMmxqYkqs62FvW88ao5gV7XoE6bzRqr7sgVchNxwJuYVCg9U",
  "key15": "3QXQZeyMDXqJTzhA8VhhW1kokfrMCjVF2hnDoukodwXgosmqKYZ3j4cgRBTNGiCyfzJtYUscvJCBtDnTX7csHwrE",
  "key16": "5dyuaKiPZZDqoKJPX6VUsZn3yWDf3LuQE72GqwyW4CPftKXasBrUWKzwErcvDVxGsL2yQE2xSmP2HaXKoFFqW72k",
  "key17": "3knC1dzFiXJZZYGha3wJBS3fTwsCfgqdQvLpJXyY1vSSFd3mtGWTNrDAevF1k1JVhMPDthcgw2oKfrrhGnAfh8vv",
  "key18": "3ooBfnf1iXFq1ThZDq7yEG1NErrofSbVjCgESB1LsrLYcepSK7dvjGvKp7sp4NeEjuiL4YAHqJtG6xitWM6QYf1U",
  "key19": "2fJ91eYF491pwdd2sJmuLCy81h8C89PZN2eL9mioaaYVNEa4D1wb8rmGaYawkn9TFs4WPuCoWXL1sRdngEcmNabD",
  "key20": "4TSCYybb9fnB6D3PgViQqNqgosg6iPdr5HShCg2Y8h3pHTygZATeX1V32fbogaNZCNQYfrsyaeUG6TuKHRKkdocW",
  "key21": "28NrJGpEYzr7BcPu3yWykD5A6AiBoKkGN3uswV6LxiD5gu48i9QY8VbnYdUqPRUhvq2av1Vi4vUstpGMtCgBGsQP",
  "key22": "5nf3oPwYCGWE3i5kF9k5GKpSzqMF72RmQaacmkSSXMtrV6w1GEHRAyDojSfEB3dP9YHdEyNxkkF5NXgyEr8rcLe6",
  "key23": "48C6A6EXkcSVSWfvhj3WJU1yroHhF5dnvnXtiYY1XHJGvKrTQkbpLxnkiRZJsC8zE5bUjHs5LQ3a8chiJnwMKggY",
  "key24": "4nQcxpbXQubfyTGpvDKmdwJma8wJjVQQWusQXeh1zfjEhkhb1tqRQJddMSdQB5NBmctreDSb784fFsd6H65YQuZP",
  "key25": "3NjVunENNRHHfiN5Vyt6utMqyLyUNSYBPnRv3kxJmCEVECzp6RCeRQsS7V1FT1fmPuzs2vXyWCESHrmysgXWj12x",
  "key26": "2MtgKmUawrfxaycennAKRNoX3DiMrYoBxChBQbnsSHpxzuKd4S1p9c8zrKJxQ8bNKXBS4mZCmYXm9d9eUH1ELm64",
  "key27": "2AQWweMR79rbn6pdvSNcY7Ad6Q2YUgghXXfKaBQBq3rBfFsamfaMKZEDcASFUjK1DHZyeAKd2fFEBfNCCHaFZnJJ",
  "key28": "4joTXVaohScP4q4175QbngZqH3tGzxBJ84AuAw8s8P3ySgfmhKs6qyzBukq9N1GQLQFCZqR5FxebMHaDwzCQ35gi",
  "key29": "5fa3VAYKSKgVZUptucvot3GwCjXFXA3CeE418A2zRT2ScyNyTUMdxvqCBqjnc9THX7p5wxHGhDRd9EXvMraKtegd",
  "key30": "4XtNz7it5GFLR7g7CL53Y6gBQSYrcDxmYZMoKd3cpdTJmjvAUfcc9hupuZVffK7EYYbmkj5iCc46ju7NtzDT7zHY",
  "key31": "K45431e25QQJDJkgumTWMjgroVFjV5jsXRhx1N1MMa3qa9S9YhGrTic9AHTqLVgocovYQBdh3UT8JPexoyTShzZ",
  "key32": "o3F7vhAE2QdCvdbLsnEFMB8rwvQSnEnPCCzzjpuEVJ5Bdy9EbBjqHRnkayf6HQu1ngggwJV8Z8g8Et5A4V3K757",
  "key33": "2cNsNxZAeNFbWNQiNDrjaxpAg6RM6e1H2FsDtzqob5Zb5hET4hx4pRL4gXaddQwX6dgWhrgoqZ9cPXYAbyc8XE4n",
  "key34": "Zkdn9mf5JVcrmkjtxLug2BF1NYzQEfhQUrtaXqZKLJ126Zrmvf8BbYPsGXqox3WCtjQMNW6XCt1PgXwUBG2gfvt",
  "key35": "47UysPZnpfvjtqtmswKvbmKekgFps8uqfHizvqr7Bq2iFFhRsNfeYcDuxaQyujnbM44B8PUdESYv15NJBAuNSX4N",
  "key36": "5WR4A83sBFmDmppfDMT44MYo3UWbVX2KTbrqGy5iQuCgH8pPnfHkJ4DQMMbRt8NrnQLRV7V2dsw97WEYgFt8Fh69",
  "key37": "23SQnEu9hQg98D3YdxUmofHfHWgcdpP6M1Gp9Bw8j8P4R2D6Lon8Vtjs2Q8o3HEjKbrhZPYUz9Pj3t8ohV9hZaF3",
  "key38": "2ULjsqKgH54X5A9rKgmHv9aFRT1293U1cPi1PkpwVE4tj5d3Tb8uVJ5QydM9sSUPpHpb3kMeqEKdwCM9THaro1Nu",
  "key39": "24SEMEcFb17zWJsDax6qWuGzhr8eh8Hd9akmiZhKgmHXVYZ5UGr3wEckVYp3wSnFM2TdkD6z5s7zbVhRs9HzW18L",
  "key40": "4RohaJR2JTTqczyRC1MsSmdKXrPNCpgqUfott24aw5DgEga9zLZnfAppF6LDqictHAzkLWxMPx7pkTHSNWzconyG",
  "key41": "5zHQ56iMCF7gdAtxrS5GRHFWn6Hi1ptv6NPUvzxu4m1DkoHNmaamYfnRVc8jg3wEkiZruFW2giEphUS81Jh9TeM9",
  "key42": "5PTSgWSXfRNQKcZq99vGmYag7tTjPdkfMsSRAqWh34yj9Xnd6h1uzkjMvo1YPTzMqyURaNo62ECaAVHfvEvBEQNe",
  "key43": "3kR72hX98Hi9s5CeAtZRhrECoujHVbdW3a8VJnUdotNMq28YHeq6SxDbga5yX2oj4NjQFJLfnnEnNVX1jW25Eris"
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
