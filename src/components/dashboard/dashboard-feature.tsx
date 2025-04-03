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
    "5oyDa7d9EDEfdDF2Lw8kZE6PgeP1LAyKdBCeKWmWKnCZd3m1b8cqT6dAsLLx6nDTuPXHTsTVMKwGiwz6Ebt2qypu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrxPSsCZuTeQQbNXUbTWVUR8HfzwT2Esb38j1TNNK5zoh1KnuxzTQKmeesoCzm6NBtE4iL5GFgj8AqTMcsF8SNt",
  "key1": "65Cv5voNxt29GsqkfwobdXrNHrtt8R7yzsYhekY66gDTPPfTv1794WezkuBpUKy4Z9XJmLGPWocNHuyYm3dn8MLD",
  "key2": "3h6YaQMfcm7i5pLs4uikDa65eJQ3MRUu4VgkRQ1Y4HAWFj3f215WJW5YKdjyMdNBygauwF6CJ7u2EYvDvgaCK4md",
  "key3": "4K2bcUknf5Vmt5hQCK63mx4jNXhtoiRhQ5hbQCUDVAQBMzGjJAmGCywooqFBvA4R2CZ1qAiSNs8fRDUuGVGaxjxv",
  "key4": "2wMfY45mVN1GTk7mnkeFqVCy5snfaT6fveEWGNm1NLXjgbqD9Jxve8zc1Gk74wurunX9hhvS8ttesmU5jLq1Wxxi",
  "key5": "45hEzQxbMTJ4sPsSM1fKJPceH6pGheEHY3MvbhgGdLMavC5do1eTQZ3LwcwgqDqBW61Ea5yXUdLHDXzGRaFASh6W",
  "key6": "4x4ECQ2gx9JkFDe1FWaNxP62AoTykc2nEZGjKtVttA2ywFb8h7sFYNwfbsPwT9tUJwxJxT7y7XgYEXT6ypBkUJRP",
  "key7": "4mVNfyfrFkAYotY7S2GHpTySZ1caaojebmtfSmJtug8uStpNhjXE1df4irwLzShQ5WDEFGWN9qPRM4BG59ufRRhS",
  "key8": "4ZFNkk5Fu4Fwv4fSCkm4XEkNhoHYegu5kp5bJ3sjsjNHGASnCh3HqZs5FUFfKuRxQs47YuRNBeWJWjLEazJscz6E",
  "key9": "vDV9PMmNzXifaSbD8v833vmPsq5BVrca5E8TUCsMbdjQ1qrAP4fZ3XR9PEpHWEhjimaMu7j7JM3cDrzpcM5AGno",
  "key10": "4vzXw4RRNuCH2uQjn4AAjbpRKBHW5HKpVt5WXHfuhTwa8wsbBA9AYZHDwDrYFtqY1AFtVGKfsBFZh7gqgUEmTY1z",
  "key11": "gvBXJibYc44bbbifQs5XihtsEhre7EsvkeSKPfLebPcaBq7AB52w4J3xMTDvbQPWwLRjNgrUyAAB1wEAenfxwAM",
  "key12": "TfYriaYGNCzoE5dKpvwyt4LZ9mhvhUMKoEd859iE5WzZNhcT4j3kJhiF8k5Bu5EmXfFUH9aMftYdcfNyRopRGcm",
  "key13": "3qZmzX7q1fNM5iKSRHeitb7Zo8mpS1KyYsBfgD55DfXTZcpbnonhRS6FLRDCrEKY6EBHwurWzEcoGsSk6euwBx1c",
  "key14": "29DZu87njUVw2bD6XmeTbeY8ete8oTe1JRTXUmhdAe9FWKcw2GrHje1fYkLm8LwPvH6mHXy9uK76Fe9zRqLGY4Cm",
  "key15": "5ADafaZMorfXWKQJtvpwC8KR6GRN6PbwaP2NgqcTAv9bQAXtAUZR9fTUU518X7CrkLJ4GWgGj12TRo9AcGaSZqb7",
  "key16": "5Nhpct4jnuHaBSNJWKYVZtMJ3ejdkQaBiaWFVfkTHoYLXrCof87Mx4df8c9tPbM4W1fCyZs9rhb5zwweRi3wQsH4",
  "key17": "HUWUtJthC6eE7ENSVJb1CCYrkygBwXksV5mHf9YycSmm1Wpcwcr2G7rgDm9epDyZfhyifyEig1SCundgPrWttVA",
  "key18": "5iA8rjgibtCqeZofSG6zuyFSPR1nTSQrzN5dEuyx1ETFTEmwpr9g6uc9L92ULSfhzgS3soPbbsx2mjJyf9CfHp1Z",
  "key19": "4DLJp77HuuXg2Hd61n1WGNPFqxLtqUSrbdSGuFpvC6giFc1RUdtBHbkYFfL7f8zTrRMB5Xxr6KtLFo2vVcuzvS4b",
  "key20": "pSX6eHsp5sdDVzMpmHNXdZG2Nhm6eX5Q7gj79yid4EksZMRsmdUFTDz4NdEUzcYE3CTGALKyc3TY4MBuwq9E3Wk",
  "key21": "26j7EUMg7QzCnKUmLnxxqFiiWNXfPeQ6Ks6nWdar7Z62trMMXw8FAEJBxDJECXkw1aTajMHbxTbvBmFqjpUwhn3H",
  "key22": "5qCS7WXExis5q3TQffa134W1NAszezhaUYLXTSaCN42TF45bcV9AtWoWDDtdQ1Jgj4jj581XJH3vHeJptJ84CxBz",
  "key23": "wZVFFQN24QLphfgVZjDoUxhGnHoSoFrGLfUbBiizw6En34Ynih4PcGtDUBqRQ9M8Dn3BECkgDBcv1pddEvN5Yr8",
  "key24": "4j1nYYprSr4xA39kofaM7mfWqRCa2UmKLAikK9hpTvneDioCYyHEHLPkX8EkBud8ug6tCDH67exke4w2L6Y1sdst",
  "key25": "3m5KNAyaz9XTWf8ze2pR41GkqUFBEq6jCmpawtx1iAuhqvkceqqDw7s8HuGPVo4T3rn5sUJrrqMzubgacw6fnciz",
  "key26": "45NBfuMvHhkDvdhBVYRQwqRpNq4PDCck9rkohEX5nUGRoSoXgDUwh9DUWjCTZb75dWbpe5oksbC9RzeaN2rtsrZw",
  "key27": "A1GmymTW3vNxzaiGsTS52UQqTnLxJnoPd5BBywYb3NG6h53HTHuvqGurJcN6xLzcjZHx7HViY46wxRToip5qPNC",
  "key28": "nQfTisWwxwfNV9BA7afa3JEa6qeH6yBU5rvqrqugu8ULHhcasVJv8ydHoj3i33WvedcJt3GpEydnZo33wM4XWh3",
  "key29": "54axzBR1754PuH2Rh6kkVyiLJwmawEuNAfpYGeArPNJ3vjGsCQkdycwoSHNFeQTjWpWzxv9EKuoSkco4Z5qXFYbu",
  "key30": "3BDu64WbTnVwa9ZSN44GaL2Bex22Gak6ZEmzc6zzH3kuqM19DukSSifW3DeJ7WErUhmCZs8Fna9eh5t4BRgK37rr",
  "key31": "51ixPT2EMR2Y4gX829YvknuJBpU7RajAvBbi7LGxVLqXC65kHNzSZNKNYpu9jhrH8FZFg53Ysm9aiJ1UwVAehrn4",
  "key32": "2eicTugC6EYD3fVn6Udzf2n1ZQJBT9C6WYQYCC5faB8DGHAU6o5gDgqfK1SrunRVTvdeNGSWBWMwYtqTWbnkVN3f",
  "key33": "4M5JYZaQ16HKFqJ8tZATpJRHE81meG1xLDUNRtdsfaqzqXVMw8QPUGBNXN1HGZyeCxZjno8sCET7MwAYDHMSPHTZ",
  "key34": "4R3zmUHFuL4QzghjgVgsT2ph87s2MtKiaA9z4NVZofD2sA3ZGqyiy5KQaLEmb8Hvxk5TQbSHiAe7s78S6eFUVanh",
  "key35": "4qVZScdiJNvDuaTmJaHqczaURnaajTo23DcC5qQRpQYpf1nXgHHvsfbfgYFKs23bXGFNg4A1jAgWU8CC9VrkT6sH",
  "key36": "61SVfoWPXB21F9XAx3FjN96fzoauCMFYAHpaQFKEvc8kitnYv24vyYaU9qajSxqDpYvneAtpxnh9ymHSmAvRJhuP",
  "key37": "VyrYidsaKhQnNVKHMw3ePs3Cywo2nSMnM5wQzVSbvc4s2RgrzHueSt9Gnt8nsvj9EgtmNC77BYDoP1qCFhXZT79",
  "key38": "5BgNpssBkQK4FM3w17xNrDuyt4AfWZ9xpyaDbjpr8r7UYJcWgwVXshF2UMpWCYsb1Mg4VRh7VHF2NdXpvtMiaENy",
  "key39": "3cExiujJBTcGic87jL67uM2uSL7PPxsATi1hpwE5DH7FcXpG9ciroXmwf99ARNQebj5utjjztByVmSfbbR99djcJ"
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
