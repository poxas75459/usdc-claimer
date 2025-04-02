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
    "wE62CKEWDkEnJBcF7ppzFewMJV17RQdtfAaUAA2uqtCmevXhtuGYwCZdYwEuGbJrin6UqeyCwLNHU9DFe2C2v4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJo4EpfqF8dAtHJWEV8DT3ugfp58GSmdc8tWuHsyJjr2954GLz3PH3foniyc76WTy4gamw78ZHNdBHMsHTiUrAj",
  "key1": "2HmK6HVY73w8CLmNicTnUKiZZmrDf2SnFSNS9r2E9RAScqAy2t3BtdhT37jZWnHNnHXsgqSw1tvWpmhGHzeoWivu",
  "key2": "2HvxXAoPyfah1nZgqyqv2svVf2aqqD79MQbjWMX8LEygXuq6neNNBqtAvjozFKumavnVTWGa3oy5RuMTY9fxo3g9",
  "key3": "L68iSn4voDYppAo68dKVbtF7dNqh4vcv1w5Pvh3T6vBivEKJuiXY51g8LmfZRJuTfRsXHMkDasR3NC9uCU8EdUd",
  "key4": "ggLMq1xd5jyeiYzbKirphwxbRmiKy6zGGzhSbaJeSuKec9E5YokjtDj8kYR3ePKiKBuZ9DzvZwcSb35rxgdqTUL",
  "key5": "9Uciq73RYUv3cvjrkW6iByYQRfRL37gA4txkPXJCeHXthKHZ1gXtU8De2wthb2WJzrzoZj9BGs423hB6xw7fkVh",
  "key6": "5TFXUeJoxrjeXdfSCZeZyTsHDZfqyniKNZPyqgX8qZ8kmyRNsyQo5K8DtsQtJcujogqA3PD5yXdB4hs6aUsqRbDm",
  "key7": "5Xd7xYK2cseQ3ikcekczV7L7q5tX2LrdDucq2G7ajBdieKh9DE8dfbaqQpkgLEnR1ESyQfh1ZUuveT4SWEVywLbC",
  "key8": "4QbcA5xApAc4buGVmyBiR5cM1E8D6t3bq3iMa18FGzWDeLfd7Sv5pNN4F94uRw8ZjWZC76JbuCk7GwjCDBKqXDDt",
  "key9": "3sM8pRv2QpUvvnxVLuhE6Sjym83eArLDi39SQZ72zyPvZjk43j4Mdmozw77Nhhn5ViQDRuzeJKThYM7TrJCmu9dA",
  "key10": "32ChdPcB3ikpJpWDX7TwrGTeKr7pkyNk8fUBzCARHwUU92rYLVVaFp84HVHJowNXxkwYpT3imbNTRbRpFfNzDdhw",
  "key11": "4uw5our4w1jotZc1d3NFuxpi3te6a6dtcVPrQspQ31fWt34WvXfwVBemu1K7y1bisKwY4okjQBDVaVDyjYsH7Sgq",
  "key12": "Y5qWDWK7vUakQScxDUyXv1U161Qf7M1s6ov4u64G77QUrJcu1PSg8NBdKkRqVxk1oic8dfbsy2cbVcDug8zAtR8",
  "key13": "53dAdZccCMkdUFUkP9cq3bMArLAzx1pxRNGZMBrWoNGBKHgxS8dDUzcFVYijoyyMgkwmUPAf8z88QXQeYCvzoaQF",
  "key14": "2mTD7hJCMRYuFqhr5cE46ZAXhwEBTRJBiVXQm49pJrQxPFhRLFVPerDfZJQjqUSg4mWMeaFovkPZBppFJ4vNTGHH",
  "key15": "3fyvB93ema19F6q6bRYawnMBdbmtjSvX4XVLMrpva3FoDi2Lg4zf7GYpPtBZaEacGPr6ieQxHLKW2bQfefETLbSy",
  "key16": "2qfryXQEqeDdm1UzYxusHkmkzNpewzyGmbjAjvvSEPK7EyFePZkhYEStkQuR1D2LQt6nG7AFkKkfyVE4RJtEz3ro",
  "key17": "65cYByH6HR1BvEEG4968UgqL72ShvP2Rm5fpB1S9u7UvoHgp7NRaZT5QQcoe4TyGsmSK2L8tCGraSWKxDqxuJvJQ",
  "key18": "wvLbwSV9QraqntQ3jgvNcrckQSgdWLiJyFtt2xC7Yumw3WNvHeDMLjdZ3S2YHKfiq3uHNRPpuee3VtdHnCShrop",
  "key19": "63hyzUYvu24kHt4ECusZ4ia3wSJTLmLgkNXdynKfVokCy8d6MDBapGyW5ZUFvoej5md7puetU5bspiHdqt4dRk9X",
  "key20": "3wJ5qmnzMZTJp6THw5y1tsPP9yic4tNx96hwCqL6fF8kob5FSDHSHN5LdyQqmUiLuZ9ux4hd2NKdedndWdmWNdUR",
  "key21": "YpzvVqo6qkd9BDoiNDEapR5sNeDxs4xaaMUo3dtTuxx9bgtbQGTN4wBi2HWnxagCJxSgbayk5yRYeGP5wBsFoPE",
  "key22": "4mSbbACu5SntwyAt5hKgmeQe2K3mW9e78Cg9utbXej8TsmTVVNhHHENYiauyX8nrDJ4yRLZDzqrKzxRDFyoEZb9h",
  "key23": "R4pMYsHXyjaC8zBmQfxTc5UgSSGLoQuUTCZg4h84Hp59DtehXn85R6QBL16HVhzu6xbigyit1mjsaLchx1WhGF7",
  "key24": "27o1CEY6dCKhZURkBCKSbpPpcgfZxY5PMDQeJgWSfjMLScNWTqmc2MiYZpwXa8iAHcqhwJmmC3bycA8RzBdjBfvF",
  "key25": "3KtvWmDzAEXJhHGjerFJjf2cJ4Sw4YeAKmPYSby2shKbW1rodqVddoUebE57nkTpfDoqLKWud28AHztZFXTwjkUX",
  "key26": "2H1qeXXHKSWoVAYh5MquN4BRjMBjgMe8TzFBub7Bju9cysq4mJYG9QiGP1VCqqDQdbDNnFDWam4nwkRiRjJamLCr",
  "key27": "3uJMHdJQoaVRN7dWun2aLwS2eijM2hPsMp2EbwMSF4LXRJ6DMMvu49czNmzfXSu2NE3TVXyNfxn11Lvhg886DS13",
  "key28": "bLeHb3topt25GzvT5iHkUyiruTet5BtVdhV554wqRRHGk4VPGQRYxdr5MP9d8dUeXhH685yosd1f91eZMdETK5a",
  "key29": "VeNV36fzmUYyVjLLJiRt2NefGSKNAv6rAjpemdMe6VUP4qMRNsvgypNtzJA5pz9QqqJDKwdcxxdNWTzgqGup1M6",
  "key30": "i93GrAdk2Djm5YHDfEBAXKmXE3VRxSRnCEW9SaRCo5E8jzXXupvet7fZc9coJJMyT5yYgnxNndeSNh6eHgrVC3s",
  "key31": "tJSTq8K5rfVjQ2yL7Dxh8UwcZTSVvHKC8e3t2vSTp8nzUZkS6dYtxBT4c9oYvgwHfznsUuPiGuubEAGnkDQiWYd",
  "key32": "TYx7ZmNRqJifhkrAYqywr25iddTSUxpmaFz9785MtmEmNPpCJ4okd4PsjoXEntTDR5iMpqmPL8sKZeDp4dbDxr8",
  "key33": "582TQS9khoxXsbeSBvfp7QjGQnHqnbCuykkA6Zn4z4WSdiQkpdLMoajZrzksArn432N4m1xST2NdPx2BEGDV22oN",
  "key34": "3T8ykTK8nEMWciJMvxK4rjHMAeFn4f3z4CvsNHQsyjuSsWwKR4MLABFJiVQ32Ui9799nMkHt6KBg76epM53R1nqQ",
  "key35": "t5LuSc5wg3EZsudK8FhC4KD5D7XBdx7kprraeULbiXW9KiZwSzEmDyubT22j1hWnJGRwUfkWKyMP7qTipDBaGFa",
  "key36": "3DnRExPjtQmor1xN5rG7b8mFySKHzKvPgXndh1qCXMKkc9VmN1ZxmcG9k8bqLLTcN5ABDoQc1Hw2seX9QKNokugH",
  "key37": "47TQJmwqeHYzTXrZUH1LyYSnk7RE9U1M5AKKX7qL9VHpyrS3FMtQZH48mC9P6myS7mrstASVPuFixuYY9JucnNqr",
  "key38": "3FKSCMuS7nhn82f8UrNWuRDkppFBm8MZJicphMrXyDuGZbrvuK3CdTy4LrHsxCqumaS9mv2EXH8vbf249gyxeeYA"
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
