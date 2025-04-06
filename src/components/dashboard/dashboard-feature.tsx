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
    "4u9KXJcopgUPUwSBHSop5x2mY5w4qTzFH8tT1RKxc1WcLL1PdRUssRBMajqD5NzAQkBSnKpbSDWruvKv6zDpQWXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62X6ZmjcGMUajp2udYCNYwZzeDRHjACY3f61UWjHKHbmTymPNpWWwvWZJ337ZjQJvhVardwVrURubSTRQSKKtdQ3",
  "key1": "4ykPjxPnjuTjJfAXCcZW1vrUFkzemVq7ZDAt594pnQ1k87deEpkrek6bZVdkMkCAvFa7pm3BFR8XAJ2MGcXc3hYu",
  "key2": "5XbhKFJvWFpKdCsJxwQeLbZMaf7PQtitDDQxp7cwWaaFYEwukDT4Nw7bdQqR2rqnuKzaN5jPaEvKgnCzXMdtnKWW",
  "key3": "5BwE7AvvjtpxjAiKSzimTJ8mw1QQej4BqCyHCB7dqqLkq9Nx3H5z3ZorSLoTng2c8JKew2nj7nLZXzEfcrhuQ5G6",
  "key4": "3v2ovcAmCMHtZEXVteawYjE9pHm7uQaLxQ9TK9HAF2d2BpDayE9v3Cah3hoDceTz1Z5Qw46RT6HVFEbHZbL32roi",
  "key5": "2kHPESD7tbkCWASAJo5AExACd7AMqPYWxkhnaNPZr2LxvK6QfLfDnukHB6N6zpPZxLUWPGgMwxwn5yzc1UiRfoSJ",
  "key6": "TwSNmXK57rtu2QJkNqhpa2stuPFMAf6Zhs8Jo3qC2LCF3Hr6FJPzrxggff4srcWZaRffS7nYxebyEEK3ryiihsD",
  "key7": "455PSGmQt4W2T38fqRxJdr9cWLk3mysHJE8w2gq4xH7CCW77a8LuL6WZRS4ZagA9aqMWckzNE6ZjkJdcKenni1bf",
  "key8": "4uhmK9S6xQNXFFFbtQcHaRu5MWYZmf7QUvSuLhiHczVu2yKYsNBt4o6at6JAVL3VcYQDNKh9cGaRfu4efoqRk87z",
  "key9": "2wQFeYJVXiPSHmKdatavJL13rkCTC5gB2L6oQoXjmD5arDZbayQCFbbDiZy2eZaP3P9YLgmKYd8R4xWMD6oK2jDY",
  "key10": "BJJGe9saQwkGtLwuWWaw7rY1wG7Szckmn9PwktsQv4E15v8FN4jrw4ajQyjafVxFyUDxP28ZB4sU5CTCfy2SMxJ",
  "key11": "2kYBjVNpEccCVzJLv5d2vfYfUvpBnmy9ntU13R5dxGG8zcX8RRWLMQBNjq5TAbTR8wV884mvqohdY8wAjCgtnfgN",
  "key12": "3groo1t7T3fJWjXBbbxDRcdD3LF4NdsxYVpi3MrAA4hk1FAYCmdk3NpnYvLpogddHg2sY6qGK2GQERdJmyowEukV",
  "key13": "56iiN53EZv2o8KGv5RzyRYsGwsYnTroJkySeExdbvFgTGLwwyztNxEuhNQyJTj1AcCKpf5SGuCnU9NLGR2j1XLJr",
  "key14": "AMtwq4jX5mDgx9Zdq9zY1hqEJ7ECs39xJAwdZQ4uCvtR53FxT7kJCLTH41Aq8QqBpwU3K1sP3EnVgAXbpAMQPmz",
  "key15": "gi4i2Ku2JD9rDxUvPmaEEAroAshy5MMVSKCz486By3LMYPZMJDKCTiMr9iy6JpZ2BSLYHPTNZ7FyMPgijfoLVtN",
  "key16": "2HyEtmcyYtWhfi85UedwzhP8USDsTvnY6KZw2ePLbEpr4t7sSfGG4z9aU4EjxLqnj8evH2f3wapx18vH1XaQW9kn",
  "key17": "2STuvkcLq1cMxnY8hsWCsP8Fy63L9JrtenGY4KwYSgQqTZ3B7Cs8NKRZTF85dhpTQVCibLZV5VUuDJdKUxcpQ3Ld",
  "key18": "4KLtvHdpJfbwLZLVxFNwEdtWcLGqF535KChXJ32GoZzNeboHpjcNdpQJf77ohrmUiuA6QSbfGEfqymmRpuPANktT",
  "key19": "2PRrEsdjNXDSxcnkpaXUPp9LbkuLUGnVxhSgafJCQw5BqqYuupZQ6quFZQena3Jqyp1SuAtmFxuNajmgfgXM6vBZ",
  "key20": "9QrJE5nnZaspQ7nrbGXhhCJJmpAiMu7zG2Dj87qGRd4bNy1x968Y16Pmqh2DC2FwU8MEkiygaB1osCh6vFGrFWh",
  "key21": "2inu48g3xduDoq5cQ9eX7pv4JgmGy6XH2TRxjNiFh5e3sTxnAAu9RCtd9AivRJNJ32jrG7kkD4VHRDpmbA25prn2",
  "key22": "47jxbYWoiM4Sbq1wsoy7hhAN4HABvfrfwF47JRfd99frGWZUgZXRFxbmuP6X3tcPLHdyfnHU6FUKEqXwf9rs7wqt",
  "key23": "3rGjk1BcHFU8ChcnnjzkgGPf4DA6vQMcdLuGng2denoZHMiWkRWEzfmA15NfVUs545YgahzbJrRkYu5wbm7P5kv",
  "key24": "4WG3r7XT4uGbL43e254c1SgTFx1Hem7XMh2WjGYjMAJnSUDW4fiGHPxjSpdZcPvdLhgg7WG5sxWZNQ2JufcPuXHd",
  "key25": "URuR5cXincXwhKcc9cm8VLuBAzg5LrSwn2LWshdnn4w1oHmZneTZWgCXrQUy9tMfAf6d75fiKs7yCwSt1dd5XB5",
  "key26": "5JHefG9wNfi8gGaVGtrHVv5Cjynx52DBea1Uuxj4zGE3Zof7tgy1FoJ4ra6jH9eVPi72owYHsRjinJEbHmqdPTJv",
  "key27": "53CMYX7pxGafqHTnJLp88j5oW5GnvYgWnwmsj674bC8Tm5nXd9YFkzmyxaeqbtwjxBwYsLexUQxp4KHM281H34Hz",
  "key28": "456T4M6g7x9y8TDkEfSnGFPE6131qV8qCSFp1mtmcgmVH21ZQMYxPuhpxSPNsD2mk1RfsNYeGpxgYudpvt9Lwiyc",
  "key29": "51S7jMZQFCmrGk38cdys2tMuwKxJzur1KtZFzqD6ZKwnWDUMLjTKXZBm7EmfqPX5i7DU9rK5qqyda1M6mZDWMAFA",
  "key30": "66nkk4ZnoGAxyQsZicUTmPM42KE7CuKBcBj4r9np5KvnCSqaSNbBaUJwMZN29DjzStBzCuHV9LfmGkp2nyCsUMFe",
  "key31": "25pS5YMNcbA2X8miqH5S2KJaBviEenksNjAg8vfmp9fsVRjMakXKcJsHvx6fG2Sj2e9q7MUR19trwQzFetWUdBex",
  "key32": "3DgawVjon7de2HPyrzypNwbDh5oGHrMsin2y9JPtpgkG6LD4etq84MSCskAuHCfvnR1suVn144FgpAtsaAzddmDr",
  "key33": "3FH2WoVgy3J2nxPZpn18f6fUDUPUZrwdvHnTcCZCJ8GeEWf6497EXTyfjPxfqVbsdz9bmCpc8ttAFcbLyLUXXity",
  "key34": "vCSuzrUJ4RqAi9fA5djbP82s6PKrhgN5Mhw6JdGLjWsQyZoyLBcrWpEYonTeGTahpHQVTuHgDi66ziMhA26YEXk",
  "key35": "3tzjitMbB22iZM8GRRoE9SAAR4WJfaEFB7Q7d4YqPp7cnLvx88SBHYuQ2u28QfRpWpPCwW7NS5QFhf5Xi5KM26H6",
  "key36": "2kwNrZDbVGktjFGvdc6bJ1Tj4sqZubPHFTvs9FutgoeafnTQYUucxkv7HdeirxNzsfeMetmsupN8zPkVW4mgkGZ6",
  "key37": "124yAXmSjyd6vuY6K9ZBa1hy4B1Jg1Wjek8RTEPeKhPcRnet1mBHJ7nfNP6ewLePksvLodBSJmNNAaVaoMxjiRXC",
  "key38": "5XK5qLvVkwLdWw4L3myZSBKzZqLF9ybJfuwuaMLyr5xWnz6gGMhYTqrBBUsZjCzz4AhbT1GiLaeGFyMryHdznff9",
  "key39": "yKvewQKTsNj4T2ESCwq74UfjJc3cfNXaaUywYdk6G8oZj86bsh3SSudNmrEfpVB1fKu9oSGaaPDDMFmrvGZaam1",
  "key40": "2abRjZZEeakzQoPbiCZFwig73HAbPvecRVr1Tj5TM8w4kXjZnzKAVsQg6tWXGXkTfFkaBwt8LtPJiFsf1vwkqjjL",
  "key41": "2TkfXJd3Mvbb9ArLazoWnxJz4idZqYyAu3PUfkhSubopgKdqzCLbVb2evHWZwDCtFjvRvPpCE9u4wiTLEnoq54aQ",
  "key42": "TkjqoKG1pXQ5gspD1iMaRiG1wQzMhr7G2gRJDCeybvFj7fWeF9tRpU6fvSXP8gU4aAH89w2vbpwQLPNnUw6vYj4",
  "key43": "2RLNgxNUTrEEexiGh3XRpGxgz96aHQAweqBgwcMNotiAGr3yUYTGh1xccaHNMpnNo5GiWoQjRF6zS814vrN4kB2h",
  "key44": "4vigR4cs93yyLNhEnXAHa6He9quYNi2phNi4ddCwCeYeq61k5QeTWG2HrXGZ33G1tmQqpbBa3DxtAjP4x9p7gKVN",
  "key45": "651LSUf6bCRFdX9zWvP3d4maUHzcnBkmJisPPtbD5eo2Lgkmkcw4rxwmTHy7bMBzyZaDYX1cBNQdCT9uqusdAa67",
  "key46": "fFNJgZCAGxzjV1xiLJt6jADwQkNAKywubU3uKrAxTVKkTSpLV3iDYTnkpgmbvsZBeLznmSQsnnY59yiHJgbtLzE",
  "key47": "2ZNxQKWdqNB9j33KuQXN7W8ufke6hPpFwueGfKQu3Kem9jqaGCdmAcDuHrB2A6zcEJCGNmGi86XoAw58hsQDCkYd"
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
