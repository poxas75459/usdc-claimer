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
    "2yqW1e9a6hkBt3Puou7S8iuFLXv4RY8DXJJQKcSmos348UNu4fMK82MQKT6dQHJNi24eJ6joZAbdrv7eMfWun581"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kqzx5DeVCqq15BN6u12f5BD9z9r3NX9vwX93iXrwJ5AiPcUR4ByBA15B3Vuztz11ig8YxvBoMVNJndjuqyHg53",
  "key1": "4YHWmoT54YQiTz9U6v7NBDSshmRg8YdRTqvbwVaTVgj6CecVSjWHDWr9W2bVFKFu5daPGUgKjWJm5rP73kg2DAYk",
  "key2": "5uctCMGEx6PkHuCR3afW89ViQoyA5aUAm1Lukmiox8Z165a6jjVHRfxqaJJxaJiULJfmmkRnHE6H8zyph7pGpM2R",
  "key3": "2oNpQmP96gh3x7bUxCnxHZgCatkt2VvCmUkLxHdd7KaFyaDsteoWeJ2iGYhvacuy7c2Z6wnFa8eb7D6YK7DZFL57",
  "key4": "2Pc8z1iJD2zTufDX8GZ4h2wjDRzoc6LuE476pW9gXp67H2xgk9HNgWZiak1hwKZYr1SKtddV5PQgt8fYVrRgwG9W",
  "key5": "42RtVikD2BsuxWFrRwVPuUfpx7Crsrb8t42LMj5quSXSUw3gmd9Z68zvgqHvC5a5G6Q6ysvqtm83qdDQr8r87Ged",
  "key6": "niQ18Eu69Hm8m2yTxboH93jTfzY56Tc4aHdoHi97o85AhDvvTfYStPaze4atL4jeojDo4bnV44DitBu9SDkvDGN",
  "key7": "26XKHyukjcHvtVPHsECmUNaj59zqFsGio1zQtAacMG5XyBDsbuqBkGANp9ZUhqJ6Ds2dpX1V71qqqiFWkigDWJji",
  "key8": "5WGNNZXJe1iEFmwdJq34hK1YcPcEtTY1PTfwg2RKQaofnenFy324g1dfrMjxxD4nkLjMSVxQeVj2EGKbp97fmXG",
  "key9": "W3RPWHF296LZzwWQvHqn6gi6amQVEGcSZZbnnGpgnCVcccGrkifGh98zi82JtDEe6hHSKY4CGTUw1LHjwqqwPjU",
  "key10": "4DVsMP1mQQXd1jt8cZpW3H36rqTWEDQvqtQv2SwcUvRHBiyvdXVU1iKVV9vtsCc692ieN1QNRMgbjkTAXq2cZG54",
  "key11": "52WFQCbLXK8r4zVWDHZnWxXamcC3UJPqZQU37byYonVfPXNy1ci1jfJrS3PHJiJ9JMm8YEerN12Cyz2QfXpSzxu6",
  "key12": "r7Cpf6BawToLzRwxj5hYyBrz5baGaoxQ4PytkjMaTdJxp5XkduRNnQm8p8D3hYBQMxCno6nVyYX58eEyVQK2VDq",
  "key13": "2Wca9WXGj5z7MyTqn45nKeR7RGVwhcwJ1Snw52Wm7gvNP53tz54fM1BEKQjzdWzGgezhiFPa4jqtAN9PefPE25fq",
  "key14": "rNsjjsCQiyHJW3QyC1r1tksXj3WCHJ9NzNdMKKp7yhEQURJnEqaVCHrnH3iKozBhFSYQgMgJ7TsyTy6tjqciGmQ",
  "key15": "4wo4HfYPcWFHDxN7aekg2bsqYdr6q8JTANMmqWy6o4eQmpuBeXHKv3XueHEEVHy5cpsVxyfSDWnsU6soTjhrBLYe",
  "key16": "DgdVC4AiySHvCcHDDBT1KBvsogSW6UDH9tbyT4yMtWWtzE6jCNFKYq9gRAxXFN62zjH2j4JVE41MTTMdSXKjzHy",
  "key17": "3baGdAmL9YeJHG926Fdd8AAZH8X639xvb1LmdshMT269MtwM8RVwMi8dxZYWqHUxg86hCtqebtvdhoeRmVggfBw8",
  "key18": "2soNQKXHsrKpTsBPt2ZGHttcMhtYPW1KFbCFoDzRMKws4JKEJpcimF2HBAanjDEeGxgyhqpemkZ8sfMi7Nudxbcr",
  "key19": "4ZZjRTuaWT8MumCKNZV4NyENPTRNmrKKwB7vJ68LcfUM3gtEtn3BRKYR3pu3cu9zkd8qj6Mv53KfBEAA3CLNJCxp",
  "key20": "2knkxn395MGYvoLP65xrQ1dffZHKD95fDsbRdEgRfKfVBcJRpqQ5gVeZ63ETGDpB17k9SFVgWdu7yzJbBLpGoAxu",
  "key21": "2rqCjgu6Ue1ZDSdYFhdqD4c5WbUDw2vmgBApRDkr74DaWbk74TxbZSpgWdddiQbEfYgAZzwRn5prjfFJwHFpCrws",
  "key22": "56weh9erA8xP7HmSbvn7t5SJKheTJkMFtzMhKuxLnciypvBkJd1LgNoK8VDbkxEXJCH3d5aZPkNT5bQaJNxkNyYH",
  "key23": "5N8kJ4Zqh12ttSAKaMVnw7rLxn2ZMhYpShuxPVsyozaxmz2hWoCx3q1KgcSRS1iNyY6q29hHiTEQ4e4TTwTQ66iN",
  "key24": "64kH7L2Bk89u8nguc1M67JAh3N9ehnKMqgR5ehkYcNQDnUSFXuSKvehoWMMWHGXJAJ7qPdarZy6EkrshyqB1WXfj",
  "key25": "nomWkp3SWhxfr17PvBCubX5VZhmffFJ7yiA5gHFKmrn7fdySabNtaAuYnXkvE3v8CWw9ZZytaDbSaMZTkL8Jpnz",
  "key26": "5ddDUXCZEzRSVbx65c9St5HtbPQDe7pzdQtnRzhmMsCoK1zeqebyERHeDboMjTwr7TWSL91GSbyDWMZqYEoazGNQ",
  "key27": "5fJKXhZVzerhugbF8C6Cae2YP2CkTE3FJ4MQj25LECZCpjPnSW7hVVtoUikvWmJMcbVLHcDVujhRpYpSk7Qejovr",
  "key28": "3upmuVR7q4kAFYzY5pCTD3ktS4Gaov7i1u1o1zrY2AeFExVDPxPcHMWUKGE8zzpmNz1EeyN5QQtzL7api2RbffZ1",
  "key29": "QYA9bonME8TWksWypAY4uGqTBY3HdzCH78FGTtr4hujoBXWu2S7JRRb45FcYXdfff6Pun4KCK4Haeyek1mSU77C",
  "key30": "4HMvjwr15yjsqQi51Bmx28nMZYkYEc2kqwYLAxKMiR7Dw75GBXKhBQRLSgBfVBkS2gyMD5wBEsaCLmAEqaP19Gni",
  "key31": "5RyfpCRMq6jo9tCCBjnuWebfWXwcK2x22hmAHVHfwPpQAjEhD6Dgqy9SQZi8KaxqcVA5cuVKEPSy65AthfhJFJP4",
  "key32": "2EArr19KZeQSZxEy697LJ1bQ4HaVUn2DTKwcix2Njj7ehKxyDFZaiKGNwE1zXdxMN55yCwjMCvzS1fCbHEjYa4kz",
  "key33": "3YJYnMXkdHmSYTCxcAGL7phkbYD9sM4LhkLDkm5wa2FVr2YeAWPyvLUFJnHScYn3G8Ub8Buf8NeavcYpnHF89bCu",
  "key34": "48SBhCntQxodm3kaxXfHs51mNjAanHZke8VAP1Pnfdi7GY13iwRXSdUvhSx7kMfJZy6dHVAWyW1WR2Po3pKR3P7s",
  "key35": "5zriWMJ4WtNJBU7ftM4QjAtu1X95Q7EEAzmDgvJrLix62PyoTdjYirrs1w43L1VFP8SWfUf3CQZv1gptQyFpQ6QH",
  "key36": "4YVBa6ag3jTUbKEPohUoD8VbCX7EWkwPyXyEubqPu9HHGusqKnWKNSRgCndqpg4s9eBydz4sWuC5d7PeZoJZH382",
  "key37": "3NvRd9EfrsEeorTfH6nXmTupQtysYoXVeYVMqhtKx2iH5FBdX2sYLmn8FF3iDK2Ro1bggTLZoEi5PrEjcEDt5EuT",
  "key38": "4thEpRwHjEWPAhisUwrFNau5xQ1gkaDdzqAr63VsTGRnfZMkRR6Hi3oA3h89ZMK3ZRK7JCPvLzFmDDrz2YtK9xJo",
  "key39": "5St7VFidWqDmnQoSFhprSktuaHpAHkUvRZZiAVsp4ajGDsF8ZuVkCz2Nzrz92JmjwUha9Mid8uNEiqRCddvF17CW",
  "key40": "2wLDKnfnbjqFKiHyCKJHUizmqNLWpLTB43HasRW65MJcogZgucXEd9iAAwnJAzFL8AwAXnFAzmm5y4Dei9k6GbuT",
  "key41": "4MAe983utosUPMtLCfpq9L6ezWc8fvqTKCwzDAWkZrRtwzpipsW5DDNuQzWU1Goqq3miJY6UpV3mGDr9XL1zxQUG",
  "key42": "xh9dcfWMKtkFa9XFixudBaBjDLvUPqoakRp35h8CTLEvaD4CxRNX6wypZhBYGVtruPJsoVTjifBKeZgo8rDDggx",
  "key43": "5sbc5VuagHfzyhEfAACQbmyGjbcXYF39UXQNeGvds8paBqbkxNYwnEdDoDCtHpHkZ6X5CYR9MigBTwDkt5NRSqKp",
  "key44": "5FeSjgSg45pEST67Ab3A5MFZaD4En73dYZpvJxN4bNmhSgFZcfwX7YZR7p2sEBmVsseFazMkSK5FDySqgWz2xPko",
  "key45": "4VgWsKSjF1Ry1rS4EYWnmTjHYrNmYWEK1LsGZhmu2KJGueZTaXJopRT2pDiFdfNJwGVzdLPaZEW6dkDUq6wwuVJw"
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
