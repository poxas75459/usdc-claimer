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
    "5uBxyoPjEABvwoS2Uf8nY38JNdzLKWoksSz5qtt8A2YUzt3aFLe9FLs4wXXwLagZuoNTvx8gF7auHzyYjtAg6CoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xrFNKA7gnCxfWaueY3MLKPLS9Lmn6W2A2QyVWNXv4E5Xotp6N8ajy89ogDovnj965oJwjyaYK6vY3fYSS6MeRu",
  "key1": "5fAynkAgW3DT4NE5ZKyj7qLqZkmE1C9hyLHqEUsAiePgbyfSmXxHqUJSdTkzHZrPiZGXqdYmMe9T6B7KfE49E75H",
  "key2": "2WZcFt7Sqp6wWe2LBWSMboUtT4B34udxrpECG3Mqt4Z7oQeNvS4seB6yfZ9L3zwHLDm9nJYeFGQkeXeJP3QRMKUz",
  "key3": "47YW4vYMUUWKEbNv1Kb6jqoEv156n7WUhhv8Tw74JSjGKX944jZHArz5GHDjfnrKv6HW4sEWu1TtPqQy2dbXhpEB",
  "key4": "4Eu6chTx7RD6jdSC9MAXgB4Kg2XrfbmkYFLZxGsXGBFhVmMpqwuXhEXHUYGmCPg2wSYVoWuPxmduUVfwty3jh6j7",
  "key5": "3EG7VtjpN5kLFWs4qB3NuQsGkoBpzxFeXLQ7myuPHT1xgZhW4oez6NGr8cSbo6t1os2U174aNwJKmyrWZAn28Dh7",
  "key6": "E2sGt7mzWkwqHKyAT4k9CoSq4C6qyc9NnExZNgorDrvV4JtC1FWo1o2PZvJsSUzZXcxaepamXb4RhUEzQCbw9pi",
  "key7": "21JpQNbjehwjtHkoe8S8UUMJq34RuLjBN5hrDCVnXibpZSMxeG26rfwqfxWoGutnmrkVrNTivQvYDkUtjtbXXLB7",
  "key8": "4U1tK2TpaBatAMEahqAKEgxUgfzCUeR4yabVkvbfVH1c1Kg8Rj8oKmse91wnxd7zLdvxfqi5iYTY2WiUVsroXUec",
  "key9": "5sMAqxYkh1EC3Yf7bNNjbya5Fzi2VgHMk27qcNSaD6iiSuG3DVh4W8Cemm3sPPubvG2oSVvBE7R4q4Qx9mHS1BfZ",
  "key10": "2Xj5AtdshqJSDYQ5trJNtDXrTELyaJ21toTNAyQTxfLLyv7dYckWLiQtWK2g9iBHLFLRUFJeyQFPmo1G9r1BgBkK",
  "key11": "4CmJD24TNUCap2aWHnmir7zoJYDUULmY2PdE45VNkxaDBedJdfMQL8NiKpCkxQuiT3ecmnTTy5TJjeKBncYGWdaq",
  "key12": "65qSq7SYZQhy3feZgCQgZDJfSCvyreFBK3RnUtZeu4Q3YQPNW74UBzkjeDxqmPhybS4DDSSkVeUcyLKtPSqAWGXF",
  "key13": "2aS4VEJ4wGy6YbtrdYCAUX2ScaSTFCfEFuammRnrQCwfdiKjQsAGP5NSc3GponDWPefoBDQPdmxeaLHhYLgb1AgZ",
  "key14": "65YoSAW87qFghzLFCnzGsscpHnwQHWRVHee3imsGMe2idKXVprJri1GbwNVpT8M98eiXNkXuHnJFWDYVUUhSNSBK",
  "key15": "3LWdqTzBSjuRTpwqMDAokGEEV7SVHyLPvgWap5r9DrTNepobYdzLguLuXM1FyzrA8zZSVYcjZSUk3uSvmX2dqFZm",
  "key16": "pgxxsBCwESftpCQtA5igasosE79xHZLgSiM3WzFL2WCBme3iwTnTu8sDUUQxUnAoyP44BMjbkSSUEfAhn7EK9Um",
  "key17": "4m1RWEfGN1qx7ufoTwyw7QpzpoC4zy5BvA5tnoH9PfAQsM4uxYgnsJWruEcADSiySePmdFuChczapBnsgvDxey8x",
  "key18": "2y6DtoF6ckAZ1btksWj3qLFqEbv9sPg6rFyLfdA1K91iHbRCsxGp2zdkirh59kbFPnUgk91ehXtDq7tBK8cccsUM",
  "key19": "oMLDT2fC46KyZ3pCYKun5HmvCRS1RJsiGULQ6q7z76F42dTYTFFWC1A4D9bgEepvmgPf7yZ3yBi7qFiFESVgqoi",
  "key20": "26bZNMgrBGgtHPLju2c6RHQR8J15umTm44pPSmnin1Joff5Po4ZLgm9RfjTorPgEGp2yfDYLfyBK1bFhaeM6ZJnE",
  "key21": "4bE8w5CS3nyDLj46ajhrT3HCRoYJm2BGfvZctE5MyKfUKZ7WsUtJ5eUrHjP1CFbBvhLoyx1RyFWcrs69ps8JLiws",
  "key22": "4FzSvQ2m322whnp5ZQ3eckRkbp4ddnLQY5njrR2KSkZaxjsuorb78y1tgX9tjbAd15ktkDwk9Ga9Knejbmk9YbC",
  "key23": "3vaeCJCSjKwspWcr7szDfpCteFXnQP6Zc32ajxAYUuKgW518ib4iL8aDMPTZpaeyfpdWt3BfBRgW3hwg5QqfaeMH",
  "key24": "4aQqYXDZjH9W5wodmFfYJVyHQvaDGWDLGo86yzB6YR2o52pG34Q39V74nNqC2YBbqm1SL4pDV8tAJFwewUnebT2i",
  "key25": "hcAQxt6D4jG526zRCZ8KU7r5Q7TetGR9uQ46ZPgc9rXmPFPRcok8D3PZeW7K1RckNEr7b2rt5fzKekEviEaoesv",
  "key26": "J6eAsULfP7m21QUuT75XCVfgscjugRq1idYMEgTGxSXRnegfnZY2S7tEsc7KKHaqhLBeKRaRw9dKXN9aip694Lb",
  "key27": "2nXDNbkmUfV6onNZY15sZw6f5Kuqbm42sZDKQRJTC2T9KyWZuUDAnJKYdtXhaDXiayijrxwHtnha1sSxQP2QZs5N",
  "key28": "4jMt8jaLBfgj8J5iczQRgm6GWKCv1eaweu9XXoYYxvDX2TdbRQ6BxME8fgQPU3C11LoSCc7J6djuCmGocwDQZdH2",
  "key29": "5ScKyLcgS57jxBUCdo77Wb3Q3fK3jia3N4WHMpVRQ94UeNfL97NWXqXAsHuw4k93mH7pGvXzApxxyPk8rKjF2akP",
  "key30": "4883wVPiqhrKf6ppaSjzguXubcHwB4om3dLwAvXeit86Gh79Y7XpLzYpJyM9iNYYVHHAMF4AYj8d3D4RWUF9MEaF",
  "key31": "3qjjo3EeE3GRyE5UezVitPZQ6A6TiRGLzz8pimYQgJdvyG15dLXX3Bb9fiymMDwkxTQMnDXomvwjhNDPmTKqVDGQ",
  "key32": "EXPVGXBhvvy5S88ReprTTzXo6rZXTgdhNVM9N73Q4Kgr8v8VQbKu5sNRx8Lcfr9nVimaf95P23QS8pSMTHYAdCJ",
  "key33": "4inVac1qUdYoRwsj3p84fUeG4fXbzKH2EqBccDB1o8iqHenhbKcjyR4ojyDJdQeusPBbfEZweDPFocgTnquWEvkk",
  "key34": "gBFistEBbwKGSc4ALHk7PVGShevSiPeSJg6ARrALj8vXCHR8jDTrjvZwbFrHpy7DdiDgTXzr5JwVHwzPb1AnERZ",
  "key35": "4StifH7tntAu3LdGSfqMamdibCG21puH6mQqvdvV6BPbz9Duee7sn1zP7mmfHvbZyQzSJ2bTM6HKSqQ1wAZQPMRr",
  "key36": "5J2xGvHgQ4MYKj34sYTuMLBkbrT116ThFbNefdPHw6mNbM8JmjqoxKFAr7C5NLbEtvBnFFCWkZnaC1MUqD3Nayb8",
  "key37": "3i1Ve7m5CuwRdnGHz8Pr643nX7DcRhZfandmnyymy9M6kiMs2VVGQK914dmkXD77jTXYvLMdTr2L6PrxgPpdejMD",
  "key38": "5tN2QP2re2wZEnMkZoJAZCQWGuWA6vg8VKvgNmDM5V3VuEXZvEPfvAvPH4qvZ56WzWDWRFgBriMHc449s8AWy4v2"
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
