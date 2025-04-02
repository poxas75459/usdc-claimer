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
    "26Ba6LDQ5sASD8h5aB1mu4dwJFZX1jjGdETETuALfosz6rRuAPiyHtvUnouZQ2krvSTFg5EW8Eo8D4RBewXhVUhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ND7aXtYyuhNBPsyVS3EaS8KP5eexQZG5JdXfyofy73Qpco9vwxSxdU4cP5czZ6x271rgiEdgxZfjpZoRFX33saE",
  "key1": "5AhAjanQCA9Fo1oA6uUCKSSH6AYu2DYsa3DxWQzgmVxLsMX6AN6hAtLPT5qvskRVa3R3i2VsJAyyCkYH1TYjUBGR",
  "key2": "4YGGeRjFJ3o5N1AGRrr5b8Wz53bXJyC3CjyS6Z9AHE7KJpEQXpoPaEJkVN85mCxvBb8bRedKaPCjPJvyd7kPXqVU",
  "key3": "43X32uQuTGCVGJ62UuU5LpMKv2VD2wJiPeW6MmQZWfzRVbJFEm1JxRuFsi25MVL2wXRRxBQCqG3xancNCrffdUV6",
  "key4": "63i944C8i7ANGbEd4Gg1RLaebqhhwx31PQM67PAgAJ3fDKdGyWtmGjB13qpfdaCDKE5E23wpE55MdDRKpAh6QqqD",
  "key5": "4xgoLRZMnAsJqVxJdjsTgMYwZLUcd2P8V1p8sCiq8PYddn3xzTRtikpSvCrvWdQB1zimB9gNFz91NuZ19FRX5xfH",
  "key6": "2K6nwX1STm97mSYLyBhz8VVSmxc7XfipZSeZeiSLgyqYDxAJRRF6YekpfPuoWkNFkfyFgK8JvrUTpLyYfbGW7jJj",
  "key7": "4SGNqH39TU2mZYSZJifxbuwPJn7mKUM8Q1e8erzt2cLWhsJbboM5iRjiwpPRj69uMtYqBk65BJyC4LYinWdwM7e5",
  "key8": "5erNuiVGRkBjAbythxygbV1jgjponTDPcYMQyrPvqhrsPJ7fRA75Fffe6JJBoMNm8WcdPUxpCUr6XmCrWmnENLUm",
  "key9": "56KXTKzAVA2FuQRSZT31n5GzfEzqyv45jfxGxAvA7pGwtpWrUVPsN7NwGBhmTPE87gJg7fWgFoq4tZDwfR8HzPHd",
  "key10": "3i6MCg4RsBcdWtAxHd383fQwJWaD9XqDkDxqfkWua8qxDZDmT3MuUKMaF8MRhawVe9ToTxPTo46sYYcYZZ2jGB82",
  "key11": "3ZKbxZNcfEFfjZvMU13zvKFZY86SuvXaE4Zqw1EPD2GXnRQEdqfxqtY4LNFSErH4RqV6jWWomMsXeNuPnsgN2AE2",
  "key12": "FHQVr6RoydKvs2Q6qfFTqUJR3LwdsqvFX7AJvxNdCryyW5C5pexcxsJKAo7vWDKdBZrTsu5JDSwQjnbHMPpQBB6",
  "key13": "422s67JaqTiqbMs3KCfoNzrMX5HSpS36szJUrJvcADnoUd2KPcm9PNxumf8DPHcADexwp9WUn7Ac2HCLSP78H8YK",
  "key14": "PbWt2CUswrabLrkJtYDHkEjejNGAyCoX8JAeJWgQTD9k1HgeUcGZjGeDYjpEUb67YZHJiykijyQYc5GpFrPHxY4",
  "key15": "3NKtSi4MyVD4gVhUYtizZ188tUwya3EScYEBSU2Vn7nKh6ZLQBBpFNjsTFZAVTJGrCmxHF78Y2j5CJZMcBmrskK1",
  "key16": "2g6yKNqK68LgvPsdqNCxnvkeEZfpNQTu2r5y96zgitzeSAJZWPQbR4hhgR5HuWHavAQo23EJstjfL3g3Mk6LzdVm",
  "key17": "bngHfZ3nkAMLvchui8QaQir1m2KfxFWRS3nCM3px2H3vqX7jFs1KprNxBcP6FiCpMJPVFrurxPGhVgXDayoUXvi",
  "key18": "2zFXQfFnSNUaxifDj6mJdRTrQk4oVDbnhGQJSDbtZEHKs15FZbLTwAEZ2kMhdUALnq5rkojVpxyePgUrR61fc9KF",
  "key19": "5Q43NZoNkjtyfweJYXsZBBF4du7kpVqbmPGRQxgEqDWnh7q4hsZXHYroQFnsk464X4dBdjwHzMd9tFqqtuhPAgK",
  "key20": "5BDbr1dMBhCp4WHUjWFsDMg5N2KpdbhTEUNojWQiJMPFrSGHekt6286eF4jsTdDp9BtPjehj3A9arstt3K6KZ4FJ",
  "key21": "3z4ZmqYg2vVt51YR9WyGtNWZogViW3TogDEp9QXX7sCyFJNZCDfkpDwfwfa3yqeLvv4jEX1EExrAbYAoPyL7PBy9",
  "key22": "3RhBEyL92TMay2ExFWZU311QB7QDDPvCjoAoHCdfNPoZcDdJNPXnpaS4nGDQZ8GKfxEdchhX9ibhJtqPsNhUqyQZ",
  "key23": "3XZqEpEzas7Q9VSzK5shW7AvQb6fuw94b4hZBThitV8f1iTUQA8XKzzVKTPDjNdcDeszcy7J4pVmbZtGbNNMhUNt",
  "key24": "4wHD9iV866swA6zbHtnaQuHxszcSTUGKqJvUYZU4L3R8XzSqdxJCSrP9x3sRTSxaRryoPhXqiYgJCigoR7mD18Bc",
  "key25": "4B4uQpejkcbmbQuC7cyY1moqHpb4jvMVQdw3E4YqUEY1QTg38dPxBhUzsoe5Mp1h41krYu4TeDETb1u4wHcTr34R",
  "key26": "4YiWrkfw8jcyMjUy6jg8Hk2XQNpjLxnxyjUgfk3z54tVKT1WeCekJucofYrf2zUSNFcyd7Jgiz7fX6CHQaiQb1bT",
  "key27": "Cvn73oQi3FUWKC9yYDLu5a9gpijGE1P8AL2bZqH8vnckoynbuXKsRLgcUdC31qBRwgmLCv4hQfJm8SrcGxFxSrQ",
  "key28": "4fLUWJwzhUNagk59UgAAzhxVYMTMsuSGRhamufDExq2LhR9UKVrBmupcmpk9gNtSBHh3gyh1CP8uXQBZqJgbpMPw",
  "key29": "2dAYegKMTzFyL9EwsUfMEmswxZRoua2e6ThFPWwzmzQboaALHLeJ1bkEd1xgrAwr2TKfVE28CQV8zLXSkMkEkoLX",
  "key30": "iztGWHJJExWf1Bu6jAPP1vRkHR8JqQ6VZJVxpGMfHiQ9xGULwVFvTGm66Q8dNHUgA7rmR5UmgV8vShJTLYbzyHJ",
  "key31": "2wGFUhBNgYg48pMvWwVKPUF2cXVTd7vNdsUdaCXHDX4ZsWUyNXBDTLKrMYXckotMtdJpmC7uNqsA3ihDWGcd1e7M",
  "key32": "4PzVu2agptYfdNoU5gYMc8ZT8JBQ1tWZNAiYVDURQW6YATh5Snpn5RfeYztqEbFG6ACTDnq8xRmd18e4cDBjoyw6",
  "key33": "39VMUcSy8UMkRVQxy1JAAyD2CrjuK41BjWyKZUYeuLDRCMRo65zYy4m3QCDrgs7J4hV5aiqNciWqvdNG55gkEpGF",
  "key34": "5hGpsHxdqubCSRFtZ153Z3y61Tov7DSUraPrNUqkV4mHvKy8WY4Ru4LpG7nGAJHtGEuGFQ3fTJvwDY2S1iAUSWPT",
  "key35": "2FJM6mz6jXFC99Q8iCKkHJZbdDcWAFJZHrFJFbfuBzyfUHBu6NDCfc7c7cZPsXHkKePbuyG29S618hP8cwwQmXtv",
  "key36": "2xNrKpBd7MUea7FFWNB99X81FP4SACQigB7HiMEBN6wevSiPczRQ9RVeHCvFAGcVcUisiHUWWtEe1R5oz2nGJoF5",
  "key37": "44fA6AMPdFirRkTHuNswtUCtFBtr1dzjcshXzahq2gkHBHwjpuL4owjZu5UDXQV3sYxDoLepiVKZbAyH2FMeZiyj",
  "key38": "4ZKDzhv2QLaFeH7f3s9fWnj3JVHJyYHfY89ctCzspjFvycBBEAgdgN2tgHnBkxfbzLGKupHbjcmbFGnUhwE9o8vp",
  "key39": "62dNdi27PEvPxAcFyjVm5vP3mW7dRJVaEGJRWTpddtHnXWrf7QQq8BPfpqC5mVZ6ttmTVPhitwTQt3syz8tNRrPC",
  "key40": "3j7hTMXXz2iVmbUSpfLA4cv27H4JRkqb8w6Hrt7SKZS6MmGB1vMgcSYDdLaj3awwGyu5ezLWNZcj8GXuHBTDUmRW",
  "key41": "4Qk7WFUGFw15RqyHKx3oVfD4qeaAYPrZkVB6ZwFSgmUWJAHDxvwUimqHLo7JeVrf3VjK6bCqi1yj5GArj6QMFY9w",
  "key42": "2eBb6wsi9dmUJMoPD8e1Jw36Z7sfT8GYmUMfRaXdd4MqtEeqcEibDLHddxN24cZpkEU6WPPnucXbjW2JPXxBB7LQ",
  "key43": "fDrg3T4tmmFzFDJ8TboZL2JLs5qhEcu88vTfBFzdfBp41EDLkWinu7RgnNV6kHxDdCEpatmi26Bx3Fg2JM3M8jK"
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
