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
    "3EEZHuwXcxUzwSvsD3YTvAbZw2PETt1RWvwTZZGN56BSXDaVuUoxSn9RyXAifTYKYgL9Fx5yMbZDTh4BSq2RPtYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ApjNCRTrMkrh8X5fxkicUo6kT1g18jSogRWVwmvPauVgoBip9jbFBwVNUDLioxUQiWFrnmunmRWoqbvAbsbzhn7",
  "key1": "3bUwYPnXZPECVK9GkdRzVEhY3tgwPZYbpcUXASAN5dnxaxfg3Nfp4UHCeVMuVkgRHDK4Lqgbp9dbGYg5cGNXyn1v",
  "key2": "29kLCCFHAdgnEiWbvSNBUvj2mZ9cMavxLUtkccmKBSfzFBRr1Sszktwvkz6THpmozmRRdPGZSdBpJFNzx6orSdfp",
  "key3": "nadz8cKpnE6bqyphp94bLUHTcTQpExeithRQhgG74uGjAPtV1wuDkgx6MbKwBY9qutRZphidqcP9NViEqGk8GVf",
  "key4": "5tnwB3VT6hF8YrAhkeEuzvpWfmCUf93iroMAgzC4iuQCRNiwQ2zEYMiio85yHLRJZeMUSEDx6A3MyX61gG2tygFz",
  "key5": "EfVhuAjAvoN5rFNbaJMwXmCbmk73tZAE3hKwacSWcnQogka2ypH1iB7UYgbS4gFnGfFpwvd8LmnkaPNoTGTpSdG",
  "key6": "22bZsy6jmH5sctLFaH4wjvfa41dda7Btk6DgDMmzcMcwhx8gL3S5oZuX4Rq2Sw9jDXPDerhHC8Mkzq7KDPFLSRmF",
  "key7": "2D58stCaN9JEEmtJCZDumSbr2GvKYTTLDNXNVhZ86HwDihsTisy33BN9riyVRsNzdSiy6VQnAiwuVryfeaoH8z32",
  "key8": "2B9fijbC7kEPTen2KRdgWHMGCmhjeXWWy5QQhfsV4qd1xRdmCEaTnwN12QDncjGVishAbhwXqRjE2MabLRkJHVtE",
  "key9": "3eXtWwuU5ESxyzNfU88jZdTErgcbTz8S5eCiWTK7oBwxhZDQS3ZYSub1yoBpZQnf75Dj7GebpEvGLxvx2usQ37kT",
  "key10": "4XejpizgGQW15PYLybffg7CgSJ7PEHrWpRqKzAC1hqf2oLQ8cBxXfJEiaADKtvpmSzAdrnKDRRY9WyWtq3rdsA8p",
  "key11": "47oKgBGSHmfCmj9iDsCwCXGv5b7oBNZSEebyrdXGmycnKtpTzsPKUKV8RnbQe94nztbkr74LQjQSfhFtmAj9PRaJ",
  "key12": "5BVJKhFddrS1416QpxdGvtaTLC9pHiPHhbqKZgpLC5Hbj1VSoCJXGdWUWCxYFv6WwvgvtWphuGKmpWA88VzSWRB2",
  "key13": "UuVwDsiyyW6pRPWYvaFYbSrrnUHCDVAJYQprM6LNgJBHkvNxjmLkxgX4jtq566oLqWDNLsseGnachTM5m2eYbHT",
  "key14": "nzFWZWZpkPAUGzCY6EaJt5YZinmqGqTre5roRigfPVN49AT9fcBuS2fY4uKee5u1WzYntF4ozHUHczEFVd7Zmcv",
  "key15": "ncVPX3QFd2MBEMR5ovztrr2vHMLK5YBcRHHMnMrApuHN2raF127ckpxuEkV8pfirsF5S4zBZ8kivmke7iFUSSCw",
  "key16": "51uaJYaGtqR3nJSNH19RYG5Jh4K6ci6kSBocPPzWSvtLNDdpmTdp3HA2UCJYZCkUhCg8Sy3yyv2GXoVurMo88sV6",
  "key17": "5tu9g5ZZXU3P4ZJBHM6wjER1P4PTJyj1FXFFK5yCdqLRG1wj22qqgXereyxBaw7giXZ7WfUAsBJmM2VmmgRYPNTx",
  "key18": "44xYCZftoBh95hcnUqywXp8rg8f7kWzuVLCiaJW64kvGWzYYUywCxDxJBton7N7yCfTY4RCB6vN4EZj7WGwC7LvS",
  "key19": "4rsG5YWv2DFoF5Wt6ke2tHtAsPQy5dqNY2ws2nbewo8Bz4g6vnqTTZNg4iMR3cVYyLfiYAbcNRj5QiMerntgGhGw",
  "key20": "3rq758gh2nVoGnnr8hRHgYvTZo8kSzLswJ4RuBzQQs3vmjEo4xP2ic9wZXxG2SF5Z8FVxBRKqBDWYE9AMUmZ2qpn",
  "key21": "2qZdmqR8sNAPPfVY3HRnPid9pPLouMy8hDykxmpTMKnx1Akhko4HVSQ2tPKx9HjoxzjQCRN3PX1og3mEfRTCu7ML",
  "key22": "2vtkdVLxZDUJQG21XSsrkX84E8j5CBVoAKFWyKUtZsPoJ8yEsp1MurWpif97CUfXUUnvXZRR7hFSfL8XFRG9xiup",
  "key23": "4raTymQdQFddKHKG3GaJ7STGU6AtWMvqGc5L17g9wTsvYBY9gxAGJFZwDvp1T7BBzqU2T2vqf4wcBg6FKcTAJwTW",
  "key24": "4iaM2oUeyy2rEhyVuJca9u6D1bi6kvLaUZLAuC6BVzzdSf6AyG24zxAuKmhCCU4n48jT47FeLg2ysst88X9KyxGZ",
  "key25": "3Wx4Ct9FKb43G8dpzQ8ppBNQeeKFwLVeQrRE43VipvKje9JYNFFEHhRFfZnSNJKm2j8ph2Tj46KCXFT1DNcu79rY",
  "key26": "2orHunPgVWXbzp8JSWMtppF2k6errs2Ehx8HXwNQbsjNYBcg6TC9Tf2ErXnZhPSbGFosC2GGUvqRWUMHYD4jYswJ",
  "key27": "4tGZodMsPjymAQcYz9MhDSuW7iNYodGvgm21PSUiA521pdx9o6t8hJPAPF94ce6MpsbpCHdEVAciPEz5d5TnU58G",
  "key28": "3DDiJkBHwAqYE9du4R8Fst7Rxo6pqErqKhFvRb6FSZwvtfj4QG8n87T4RK5Y7Nj891Cr2MJqHzmgTqk3idZ8qVxV",
  "key29": "5UeZTdVUhbsa1w3rVhXBWNVX7Swqt8Tpo3yyLVXD82YNc294vqfSTq2NuSCqL9eyaN1pciPAz49z1pyR753fG9UR",
  "key30": "5AykuSsdoxUk5vM12eExKTKzdhiVrvvKA3cRn68uyYHvbaBzyDyzxrd21kcJ9j4N6H8dBmzAa1sLp76AMWV8dzcB",
  "key31": "2S4J7szuMzvpY1A1zmTgn4gsyhaFLYS36cY5JNUTDwg83NXjgitUGyo5jtRHAQxLUmiy5hLtTrqq5sXSmaBafrmW",
  "key32": "4ztY55VnwLEkVGdFfY3gHghZAPBA8SS26PLpujPwFzWr1jHENmfKDPkqhZz19Zoe1EVgwcEqrcicbsqWJe7RxmzF",
  "key33": "3bXvZ7NQbyLRAib51JkyXQVxT1VSdYBcrjDsupsKAasP8UPQPTydupiqgRADPT7JFV1KYux5xw3LKZC58j3xJeHs",
  "key34": "5jis6amoUrimveUS88amQ5YA4x8NnCqpJ9pYnDaLNtcGdUupVLMZ8r38tJkMzE4VNqPfxDcJ5DupcWWZTCbCZdmZ",
  "key35": "3xf1YG5fzm78SmDWJC4TAXq8witVFNJTALwHsdU42WB1ZA8LGg8KG3bRuuZ3i6Ezqzp3hWyq946fq6p33wob2WWq",
  "key36": "5KyYzVvQJZXDeQsTanREmHCeHg5xxR5f2rNF58HNjAxEdZMag3Sxamc8D8N4pPxrVojzDmPkDksVeaogLjgiH7rj",
  "key37": "2o95nphShjMgsZPxTRXzSptpUV1Ng1JwZ3hMZT9BBTyMchGTcbj4U1i6wjEz1q4EGo8yLtyT45j4Ea8x9B7YftfX",
  "key38": "2SjEQvSVsdxezg7cTkBWhTpHFgBFQrrY7PdA6TMkat2HKX6h9cL1KnK1JCGRtR7Z1fpU4qMZFpw9utGWJfUdnuJ4"
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
