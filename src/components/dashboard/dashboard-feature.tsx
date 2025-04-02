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
    "4jd6uo1XtK5g6E41esxXFFNu4wpnj25BeiGbcYGSumh5Cks4m93czLGRwogbUiiU4Ryi8v7cRXTLmk5ewCxL1gMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36eQDEbuhPVhSai13MM3tg3Xeb7JNwCU8XBG3HBNcMvtRphYVW8okeHZM1WwLTJeUgJdRFkyf3p2BYG1zzDNCXaW",
  "key1": "2QUG512Un86X6xgYcmsvCoW6FnnGaJxytXUvrjxRvU8vhsbiu4ouuh7BrCQesMUaTHurWgKiZvEEhRFpjiz1djnv",
  "key2": "3z1EsFQcbyq5UCfXnjmSkzFwYzY77BRxvFsfEQt8AvXgrTFMCSa8fazH8vR28KEmooK1eAiSj8JyjBELnre6MJnp",
  "key3": "3wbCnaFZPeqLELai8Tv2aGsEqWB4Vch5BgxDTbuMzBYiS1wkBpWh4VmsheRM87JPLPETRLT9RiZstNK2r6DohdUM",
  "key4": "2Eqk7twDnnhZZQ1xxYeCdr2cDzy8u8AtpgTnXDGW5AepJd4Sd56kseYAsXYkqBk6zkt9zmfWibHgLT3NoYiprhLe",
  "key5": "2CXtfmxkuRVD5r1gvBFfkwYz3Df3ipc4aMq88jEBrCwZ3tKA3qHMU1wyPJdpjF8PQUxCzdi6M8Fb5beQNykhsfUZ",
  "key6": "2YX6QZ7et11y6Z9DErjD4djAH5aYoLD3ofSTMJcUhtUtxxCfU3iQJWqkBJsuJ5rdeHVsaENmxhJzU6pjEr3Rvwk3",
  "key7": "H5eH8edNoXBeNpWsFJeA24StXtMiz56KjXb41cSTxLVeEdzur1PdzbL27nWfvQ63jTq3rBc3ea1FpCbWbRNHDCy",
  "key8": "3vRxkFiBhwV3HUjhhRQV7SVV8QyhYyGSfcDeRe6bkUAiv54sUd9zYswLY8n9iENSizS7V5Vx8wMpUnafsnBiDMjh",
  "key9": "eDWaigUQFGvu3Vji2odAQYEWNe1FP2oR8Lombhanu2kYtvorXMMWfe9JSQnFbTaQAvD2Q2W2gqLdrQJyjUKYvgp",
  "key10": "3S6UbrWt8b22b6eRXWmu7epYuSTbtNmXr5RuyP7Nre1L54MjbfysMmnsWzBZVdt2xkVjsM5jQeYCPhgzMkuxG5Ld",
  "key11": "8QsdYTWUcGhZoPZpnX1BJS2kpjzw7aAsn7St6t8jQDwbreGktNhKTkrjVr4T7neSEAjchb1ssb8ZG56XoLLwaLj",
  "key12": "WTcJ6emheNM7TusGspK81FotYWFsVNK3fLUHvHrsy4qvcQCqLjmESpiGmVvzx2xqWrUPMP6pHVu1xtZKzzPiPdc",
  "key13": "27CC2SFRuUWiP6nxVcpPJDFqM2tB9UiesPhawFnDCS5CGgcSM24CAPcaGPkN66b7SuuRzfQ5xShHD8hkde7jCm8R",
  "key14": "4QRgEDjUrfDSD1Mx4MmzANtvX16okUgYvFZULMmFPW6khmRKnZHCmZgVUETAh96ktsFk7ZJcEcbZi6Btj64hNFgP",
  "key15": "5s9CYCn6A4d3o9QgnA1ZhTtBjKzBgeQ2gByQvnQ8tgDMSPpU9Ue1nFfDtQdP8hvJCJZYhxGo7DjGnT8K56fSPFtL",
  "key16": "5gsxX1TP9ssFfpFtVM1fSmiHSGPBcGcJALS3A7Yq4PXrfTBMvW8xg2J215ZwJf4q4unNWaqFSRih86mmJSw5Nkk3",
  "key17": "hJCSxjSdtzPa16QXCqZqrKHkM72wNhjrGkzoSapsqNUY6HZfzRYaZn1K9ixvzFbHQVHUohTiGyj7t273sRkFMAi",
  "key18": "5KEADggfhpUnq22UteUGodZcL8wSSB1m7woa5t8fVLiDBwmCZBmGcmDG8LzD22may1KDTu3objRqpCehgkFGoef4",
  "key19": "oVgsASwyXALBJqX9wgNxJFZo5QkHA8yahYfDDybLqqvWHoiSXgiU2xNN3oPQWsUVh452qeX3CHUXBkf6gGDs17Y",
  "key20": "3zsqKq68SGPoy4GqCe9Ga3DmRxyvBmDvvY7bq5sQVF2okvvYyz4iCLaZyqJ3mLAeompTdL3t1Z6PBud1rYC1qkQ7",
  "key21": "zQzdTXS3zznNhmLdBGgifQeYGRs3f6X1U6m2gQnvMScow4iH98phNk1RevowWLMCQpu8sAa61GFDLK157SQx9Yu",
  "key22": "2W43tBCEcUgedwuk1VFbtVWT4jSD5qX3Zu3ucKWorzWFFWENS4a6fiYhTykidcNPYE1uiLXj3rpagrJ7G9K2U6QL",
  "key23": "41yuPuEsjicbvzebiYt8fhYQXvLooUvJ9qDi8L6XLHwXwV7LjamZn33aeFZJBPzBnghZR1hcQaC2Xaa6J7hiF8BR",
  "key24": "3KJFnbEyDkm96uSUmo9kU2EzYC86khvEEFi92TJeC6APYC57SGsVSKADChVWuRk2Kw2TX7BYMgjC7NokarjDGrrv",
  "key25": "5tddbKct2KzHS999m9n3b35CQxRTnwU99HCZC7bi5cq6eX7PuZN2cr1bJoikYYeUdHvEs2YFzMGKF9PwUhM2Xv1Y",
  "key26": "2uJXp29e2W9A91GrAF9hwsrPawNfetZq3goxnw38apz1VTNc5Pq7Lyu7KKFH8XmT9RdqeefC7pZWqWZEgiBtWnFF",
  "key27": "23BDXByqfZJBrpFsK2DiAQpwkf5Xv4dynw6BxT6jcHeJRYWsVYBbLz4ExQN5wDNtD1wbHm7nynoMui2XYV9LgZi9",
  "key28": "XYKDG7PDs53uSdFJUbyc8p7TTgvUk35WNPEyw3N2VEbaYH4aX18rbM7ki5RPXYgXshbr6yMBqhhcGHvm6qC7dGv",
  "key29": "5aAmeXwHVHDBspT9m14somq83v8btQM7RYW2UKVfwBGP5BWrtL863urewr7mRSLL8YEtf6KhBzSWsZuHwhHQ6JDs",
  "key30": "4Rr3MTPXPUJcNYsq5DkNphBN3a1vMiyxzdCdD1mipRSUiVjTKAqRkcZ9WWrvQkdpdtQosqEfUhM2qYK621kDNKqB",
  "key31": "Ri2qS9QnCtQeLAoMcChZz4W8RTZbwAorUejZi4XuRuE3Zhbp2TzjmRs47MFFG3nCKdhx2158pQB7AczuFYxApQG",
  "key32": "2RhqMdixPVkT32DBPfJ2no9rheKPKnUgL24r1z4ZQMn8q7bvMocA3NNaXAtSrvHY8seoZxEczWyKGcTVafddtF7y",
  "key33": "2MuLvioAZp3Ps6KynNSQABnk1v4hmDcyrzfAtYYJwhsM58ECKMUAj2i6EXYs2ZKByrZCDUfieFDQURqCp3RfjABc",
  "key34": "55HftTDA9dF41vh6fvxjEYryL42gexLm95uLPtzEVMTMkaaRbBHEhwH1rafGyMePAQG6Jb2hjsk4U18d5GhBsVQG",
  "key35": "4aot6Ffpci1nMvkbeQ44n4QewkDMBSzxsrMfsGajCH2v1iorSnA8C3ZcGEdYbiz1Sn8CryxCP8su55uazidqMfpF",
  "key36": "2Tps7WUaHqWNYiH4ecf27nBo1XLQQ6ij4Ja8wktYeeqZBEtF894NAZ7wHnS3qzyWq6UpsKTEnFr4HnagdCcMBm2i",
  "key37": "5tshPD1HRVi5W83vZvq8jwHBcm454vQay4C7w8dz4SxXm3jKPgtUbe53MiHYNJdcxQxeSquH9JwSAy7ZuQMsRjWt",
  "key38": "6WS9VVNC32zFXTYUB617AFsZKray1HTx75HCBMR8XnPeqhE2fxjdK6wdavTBAQPoBvbjXaUWKgguQqfyhJKubKd",
  "key39": "4kkqrHdvK4jh7SsjwUvQ73mPS8eTZFKFrynZJ3DKySTqcPbZmBCceHm58fMsf726oT4bRzrcCu116UXCJrNPzWUr",
  "key40": "qBpdCvjigu7Z5KQqPCCNrqB1q1xe5EzcqHhUhgei4kmcTHKgEyEEEvMKZ23VnmNqK6BY5QU3N82H86SeK9kRU42",
  "key41": "2WyxQ7XdW6L4UCcAPbMBvE9WzQWu9KK17hAhB9ddVTr595S4ZsUwAqddUJBaQc1epAiXsYy5HB1pXS2x952dMrEs"
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
