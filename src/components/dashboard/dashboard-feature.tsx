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
    "2UKXzYBGA7aEEaGJfWCFBbMqXM3HqfJbfx9ebauTWxkzmrK1yfarHq9qDHd3B9skBAxFLeh3b92xbawxDFFLXXjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1LGw6rf6dyDuSTTXpQdJmd2nXVVThovQKfNRf2CsvRRe72P6SiGrWFEoFZwgXjbWPmKyJTX2m1SkEtkpDDtaLS",
  "key1": "63x8MDr8wKKJ35YrcVqGa3MgZ2gSDaG4SkLRyhne18tUtcoKrG3vk44E3F4usbmkHJnXFFVzrSq3LNhptgRtQ7VD",
  "key2": "AzkF79tJbJNdyCuLTgA2F5T3a6PdHViuSWaNTbxWcsF7j1DQbAcv4tPQYJ95zm2Crg1EbBAKuwawcMCRGzrHv2d",
  "key3": "2qmrEf75PredQnWrSCDLChTDDFjMySvh7Zou7DP8YbqePmRoY9XZMKPCG2YoPmyobpvgqPGqHrWHLhdYq2kbLkQN",
  "key4": "4478KPmhqcuDVxVEbSxv2KvtbFR2HSCainnomf79twwFKpWULPYsF1xj6pn9Mfic1U1W6Y6jdVoGFHT3AUfkw8uc",
  "key5": "4ZSf3exSLmjgKJjKSDqyHhHscXhxTmzQWurBrfxBuGRGGnuw6KqjhXFH5deo2ux2TdhNQLPY1y67ziFnLdLMdkad",
  "key6": "5AjUBkXSKo2gvSPSP7q6YXTRpNjo6zb1vQTtu9QKG7pRqVWfv7H8siutHsdWpDGyPKGxZtzAuP9gZjrQJdeLJ8r4",
  "key7": "3XYT4zussyGhJq9Suj1LnbqFMAoo9diFUsi6rbvYiofxzqiZnXpRiMAQT44GtvMXzcDMtGWYoVXwmGxUUJERsuJw",
  "key8": "dNg4zfcGQMx5Lic5oQJ8owfKqGWRx8ySCh2KGttYxdwNeuR9A4gnwzbwN5uugKrbpebbTojRakfDCmm1CrMpqMZ",
  "key9": "1SDQCGx7qM1RLadRer3Jvo9gSUYBDhJJqocbYU74GTZ2Y1j9VPgET2eR5RKsqcLvMdUjYEVwv3wGmbmxF8y5kHh",
  "key10": "5r3v6NEMaZ1voSgzzkYuSA2Mqxch6W357q6adFBGEoijTSYb3H6RAxrR1JQx1t5eKXJtQCBud4DtRCxdyiptfJdm",
  "key11": "4GEofxTx25kJWpPQKdJEUgePaNNMbkBvsGBQCSyuV3jfj9oFj76ELA2YZmKRM8N3EFn3VzGdQFBw5vyhksqMHPw6",
  "key12": "4A1VJTdCdvZpcdVeSsJ3a6JnVZk6n9KNtZdZDsZqoVuNtadwJZF9QziTWXr3ZxrZeCR3FZhjVsgcn9PgR827mxqb",
  "key13": "6kCADQm9YeZY92LQs9ajDJdQyJYGnuhRtPKZT2FznYc6rJf1rqBfhJTgzQTpsp9SgnimVxXejKFHqUa9uDsXLaV",
  "key14": "3vGRJybx2FF6Qkvb2XFXQxQjD7oZHUU4MAxxqRJXPkVK5iabjWjMGSnjkFNRBH36y5xpUEZ7DcCvcfLfgJPovVCJ",
  "key15": "BToPG3jn3jAL2tC2RtNpCLvWZVwSzoFxA4ujUmu7WVn9BTDdtL32MbSfjiPmuc6CT2AYTeNkY3xGQEpWGvQCHxR",
  "key16": "3CuLhsesyB6KRZMfuoX3bCW25LMm2yErVYF4S3pn1nYcJD9b7uigP82jTiKLoEPM2FjiBm7iZ3BTG2gGR9r373NN",
  "key17": "5xN7T2Yi4bUCXt7VsVPJePpErEc3yFpkvj9pq3PJ225WS2dGp8xJVTDHvybcKJ3bHMtuSvTzueyjSao7FLEyBZsQ",
  "key18": "4afovQDSY1iALErDjboN96AM16wvXPsRpZ6SChwJyc3bRsayBNZDv5t5yvyrymYVcfC9N57jgSX99tH8zLAmXZqB",
  "key19": "2UY8Aa3irA1mjtwBgP25dg5CRXw7u3t4nQrN2sDzdbWMJRvAZV2TRhRrW7ApPd1pLRzcznJ7cydTQtkVyPC6tsNE",
  "key20": "2y1gsw8mjRv5XipRJGxXaHdK2CgNBU3fHKEm9cXbmMYraGN6TTdJSnQgKmpc55Z8t73csqD3nt7ZybPpJ4ANhCRH",
  "key21": "2hDShio2pScdsJC9EPFQmx72LZ7L7bMNa2xraP9mQ2HtZX5sex65fje6P8ki3GYX7Nq8tCbD56DKKY9odya5Wf87",
  "key22": "2Eax14rwSvbjGcH8RdrzDD5jymB24bq2B2bT4amUgng45pMMNVG8tePSQhmrx8ZQmu2qZCpbi5r7E4pNAAdaMHLp",
  "key23": "2zXLzJsGyy8UF2roDtg7Heffufs3vvPSnAnAZnqPTr7dhb96duupudS8kKU4PyQsexQjwQHEUSNUrFh2Tsky175r",
  "key24": "VMUtgLcMEDZhNVjqFT7DyWP8LLYVMer2qwhJ2z4JvjtzBmyf38CpTNJUHVa5MZ89e4i54mU7zU7kvXD5d7iS1dy",
  "key25": "4oabNysDrYLQTRrZxoBkQkbSFGXn1frCikw5MSKgiacKpNKZDXY7xoURchTQyREG2bvxGVfw6VbzFnR9MjNPEn8a",
  "key26": "3TejziYupN5ULbv37gQUEVxoaEkW68M63SX35DKGYGkKUDmdvUCF85wcfVmu433kTZuFWfWXRrFGobj2EsW83ypr",
  "key27": "Nw2vBF7oFqNN6ZoRP41uDjGMp7jittwS84FFh2xWNvw87gWHTZPGofDSzrnJqbgAxkiVLQhRZkDZifWRTBXDxcG",
  "key28": "3sXECX3WTTZNKeDvekRwonE6SBMVjBN7eAHULxTSXFhyZMGfCPMNmw6EyhKsoriAJXeUvjRcAoS7eB9TQyUvVEcA",
  "key29": "3WtY5AN7rE5Q4W51suKqXFGunGXpzFXhzMgVVaVDLB3UnzTXpHaeF4iyRnHj9iccfZmJsE1kHmaunaPEhZWqXep1",
  "key30": "4wpLzV7FXKRyZ6gyRNNE5rdmM8sayKbsEAxcHjpN3vVz35NmCkFMeMajcaPJy8ffLUUyxLb1NnBRA78FrpZFTLXx",
  "key31": "4pAuWZCCF5Vp5oq2wvMCQfHEhSNTkRAnAVJsb8WaecguaZhAEqZ7KnWsUBADXqVi9pcXS9THcHyaA42XBL4MN8nQ",
  "key32": "2GPaJvuPtPpQKSe9ySGM7dyXyGRF3sWTZLFyuKhDxJcuUBghkBoMQYtdz3nQtM9yTCt51Vz2jzvHCnEQbsQ89dc",
  "key33": "4hfkFNqzb3csSwC3CFvViVE4XN39MuJK4hdQMiJo5bzc8jzmYbBhuvnSTQGECah1urPfMC83MZhgTLdjMnJHzNQW",
  "key34": "2Vp6D9LQdyVwhf42opnmvUsUajkHyoiB4cBAxxipY8ur6w8xnqBbyMcvz6vUAKNmqUrTx539YR8utk6cXW26bqpn",
  "key35": "z6i5a7BgwKSADQ9EGB5xL4gWZDuMRdTmyYV9nuwe4ig5hBA21h4xMgRzfrVFrA92TJMzRNWKsGrRcSXTVsJwqu3",
  "key36": "2Nn4bgbAvU1JtcorP7LJTjbN9fuJcmTnUUE8XY9LJdTZdjDKUrgJcBedTBzQhgzSu4WAsdxPdnLd8sbEmCC8GhUP",
  "key37": "56VH48muDRERs3WTMZZeuAuYi78Wt82yGJ3FhjJFfsU2RnB12vcD3MCGTaabBvaej68dC8bJLCQe8exaRuZJmHt8",
  "key38": "59xR1byYcpii6EXgL83nzttmskRnw9tT82KVZFaRcyP5VUF9WtjfFrPJQnivuoZXzEqixyncBgumZ1An3TYg8kB8",
  "key39": "wSz9gone9b6EHxLRXWpnx2otBEAym1VTPDAGLGBobW6Hif3FugTKbVqBE4ZLaHcHZaX1CiXuhAsQFjMyg4SMqYv",
  "key40": "4zzpGPjv9GzELQ3RUYyEVrMbcFzxcdTWjHH7Ek4rYav1ZkrubuCaMDAQ4xsMHs3NxPU1RGBM8phLdWfZv1Atj8gH",
  "key41": "2mJVsQHAQ6RmvWtpdWDYj34VnZfy9Pd9GR7zoM6yKS4NGWSusGsPiNcu7jpXBZXFj1Wi8K3XNhCo4mwWpsAvt7Vk",
  "key42": "yPKAYg76yxQxPz5RoPT7yhgkUu4AkNZYjXZ4RqGYj1rquU8hnYNYvqcXvJ9qHTpB5bt6dwRTrSD3YJZW54X9rPD",
  "key43": "2PRUJsRyRjLu4Jm4yfcDCSF5hZ9aBPCWycmPXUmhGsr8BkBqwak4VGM774LuDBZchwG4qkVVqbhye5qPJXeyZS9z",
  "key44": "5wNzLVeHByV3WtpNLvx4hhGxN3vt7AbJJ5FvxViguucPvQyRJmQjL7QiW37ucFY6terFwM39o9vgyEbeJ97V4d3o"
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
