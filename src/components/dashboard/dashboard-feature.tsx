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
    "61boAivNSUgCCXMytjZSCBdzALg9E8fmDkPgjhtqUMYmnyPhRdAeYHCtzK4P1FoCCYFAVUdccvwCAMrRVeH8BhEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVHriLHGAPEWVvoELhTqD47cPVqQT3BpeQvWJZM9ZeJmnr37yqnswntfHTaKsCYBV3kMM2K5gAxiGqYXPddoFd3",
  "key1": "Af3RMy7c2rre1G14ko3dojYzU2eN79Z256jmWJGPEehQ3n7TXvsyumtetwN2a58py227MGB4zNyydEYG7tqvAb5",
  "key2": "59bsAVV78Brj16d9tKFfohGEPAbvZWKLdBzn4NaVPxMdWtrQ7Wxb8smYA8YeXVS1be3dHFV4GQMBy16G9b1yGDpY",
  "key3": "4mazCtuPCe72ifa5whreo9f6sfqAckj3JuudNnetA8GaE7haAgPhz6zQT36pmMzctz8efPctWpjbuoWj6Q64RZjV",
  "key4": "59CU9tDJVY4rDVqzicR8i7tDVrTBGEq6t1gtygHNyN6gtfKHpcLf8M3NLdKBebqPRNDD3vyriKyPqLc7CNcDAA6U",
  "key5": "4ZHhiFcEYD2dyg6Vdii5piASovyZArpepCTsddhPXFT31uADom6CA1PTi4TazgyuRrhD62oR2JfUkLGNjGGYGj41",
  "key6": "46DynNe24exGwhJPgF4EnAxPu38kj4sRr16TR7SxoShz1Pr5tMqWsY7oikneFdcBF17j82hdddjtoCyrFNqVcGSo",
  "key7": "kuWY8EKyeBYT88Ch6XuKmBZ3oUbZenRZJkrmxjgqwLBnbXmoCffD43JotzZY74LkR7GffBNqyKA6oSLquHaLQPz",
  "key8": "Tht9kHhyRvtAHtD1RmxdDQQ3eAPwHE6oYkyibWohapnnFSvbu5Cdq3Ek9tvGa35Ye7RASPHagZBiw5pacJ1W1Fz",
  "key9": "5na6MvRqPAmybr6fXfWP5d9ek3WjsLVUYWtqhDBrt8TZd6RGM1xUn3SZc6tb42FzvjPyz6Arvof1UHbN9S87LZ7J",
  "key10": "3JWJ39dH5sCxLMGySuNqyyZBmaViCNhv9Cj7sGbW1TRCSMAEMj8pGNZH3mSokyStqQT2vGsTorGa2HfSSK9SPQSB",
  "key11": "5D8wpQFBZiFSwdz8RdWB4AzV2CSvvBH7DT8CBj5gFpBGwqUMpeuFcNwkjKF84LwejtbA2wRHiRMyGU8DJE7o1xMD",
  "key12": "4ZEzvLLPZ6PySFKHAGyu4tBqaJYdF5415Q8koeRbBFLxPMSXkcBJzrtky6q9DkDSKsChvkcptmZHd4sut5RG7uM4",
  "key13": "5DsXaSJgQREpJ2MArakJGSqRFArGgWhbtvFZFW6JX5qAa2rPXwQGe43BUZMgtJzQwW7VKvgCUvaSfwqPmXxqtodG",
  "key14": "5AEzKia1B1pXp8AxNbnMYPRLa22GoeSzDDX4EPZGw4LmobUGP2YBtJZUvmH2KJWFcoJqG9KUUKfVoVY9TnaHJPm4",
  "key15": "2qsG6hyJXtxtFDsXV7KBss7cw2Lwz4tYQdBKSEPfCm4c5mVXMrw5NUmfzks3GLQg7MCFC3zticLF7kUW5dZkaxBJ",
  "key16": "eht9wtxoSMK6em1XnrKYyDxfRta3kwSBodyNEi9ivbMpudZaRTWtGYz6b7bTK96BtjjMRGAZpLBdcfHUnmDZezq",
  "key17": "3abWetawkFAoPHVmV7vsC9TCBv7uy97uEsKCwSTsa5zic1yovE4viRWgxZoBe2CzXWGXJZfQ4bzdRuup9QSbTGKx",
  "key18": "3tqkCvfywUD9Ht8vDpNqij3qTK9f1EqgumULuq6fx5xjiMTWYVu6WmoqiAN5bSHcgWQusgzY7CZrXb87WhwGQb8Z",
  "key19": "5gcmcUNcJVZYqqJf9jyqnyBveuydUA4VWg8Jk4J1RzvmUvy39i45FYxghspXLM9hjzYVJFbaPN1sPtkFx928AYCj",
  "key20": "4ButipGfep4TS2H9fcpyAG4DXMCrYC4XYSt7D8oJmTC7iy9dam2BkgDwtHpUtqArWqCMjJQ5t7758ApFuGejgMa3",
  "key21": "3x4BwL9qvKXPrBSXSNTkKnYijK4xyUDY2cjNm4HDxbzGT7ePqaj2fWtZ5WUAQvRtWxFjFf5HpUyi9G6pMydnodo7",
  "key22": "3B394ot73DgLZqpDV1NDqgV1MK78TLmcGRr8nXw97kdmVGEMPssnVbRyZVvvUDG2ViioAXtuCKkitN3hURD8tBuR",
  "key23": "2anZW9jvwRymwUQ2FJ51CSquAwKJBaV8NkYKC172fGAmakNVjhdTC5KUgyPpgn9KtmmF7Bz4K7vfByTSNerQ7dHi",
  "key24": "3n9cWgNQe6829wAMNzqmQLDuyAcdadijHo8YRCGxY4nixgvhNNohHwBpZxTYZQ9p1MkREHikLUfaq1mR6zpvkVRV",
  "key25": "47gtoVJ5E2HRECxvMMPUTLRv2YyLQRMUcNkmvhA4N8jgyXQLCNet54kNuBfdnhHvH5QJWTWyKqw8wB7T7r4PeAFp",
  "key26": "2HUr9GjcRHs7p3qtRw32pBnKc3s6eftqndcogrx9UCxe4Xtv1FNYwP5d6tt7KkyPUBmxcW3PKyaRPtxJJe7F7cW1",
  "key27": "XW3Tb7YMJdoR1cbRy3FwmHv64qC1EK9Pm9GFUoBAjqKNbgwcgT85286aJyk5JCsCDM7J3bu4hk8kNUo5RXQUu87",
  "key28": "2eeN77sJebLG183ViK8LK5iNdcv23zVPmyLNJzefQ3bPbUNrMSDxxxf2ndoVwFrVRvQtsHqyN1JzBF12ikgGpNcH",
  "key29": "3iBUdtGyxUFs5EUY4wrer7QCBEbNfXRP84QX4mnAXuYzYfdeeiPgkKVFSXrd5YCZXVCAaEsVrB43ShVTXsLrveNr",
  "key30": "5umLk4P6SySXx1SpYNFgekvdDWr3XwJcu4B6usrsCiDgJTzpfmgaaM2aRyK4eoBTDJed54a4uXqjoMmjPGgK2Jh6",
  "key31": "35qWwoJS8q5aA1MsX4KzKNGvy1MW7L4Yp12AqDGd9jncnDY1Y79dHnsFDPAYGuJb9f8gme1woXr6Z6vg7dqqUuEm",
  "key32": "4HiBzwgqY4aQRtePZ3pZX8DzwjigBeTSXduEiHiTY4UpWGik9gZ6aPhLqpEYVQqPaHZAyK5zMt7B8mAtsjFnVvdW",
  "key33": "2Z7xbaxik9YTZvNUCVcbBqgXK8X8UfjaXCXXmfqGBwpJzFRAG7hQUeD62978CiDoHe9QQASV71BgR8WXAVs6oUpQ",
  "key34": "FvXtC2v8kVVg9san65rfHJPUJSMsfAxA54pTvmqNvH2nVR5djERzjNyjevfMFfesoFsWKM3veuWUvZGNNZ5FnWr",
  "key35": "3QLHWqr99GAwFgCa5xFMhgU5UMZkDkpgdFKrypakgDwf8TtLcsxvBdaSNKtFMQrxqPX4BjFyzZf8cGdvCv7bEtDR",
  "key36": "3jVKBq92wEmWdYXfn2WDrSQt1pCJqAKyCobBiGCjR1LEx4XR1GgWLLzahsFBeXwyZVBLxLvihf9eukZppj6xt9aD",
  "key37": "fPmHvXTtTiZNdNaNww9Jy48UKoZALHvVbwLDqc9UnAYcZZCsatkbVEQsdidiENj8ehq28uryka2c18h6qZw8M4Y",
  "key38": "nEh9C1Zxixn5CbWa16hsJV5HYGU2gdzj8tXEwAoHtFeVJK6FWQH4iiey1JTCreJb3gqvJMsuT7Vqub5bsq5RB99",
  "key39": "G4mugCzw8kqggDpSNC3S96229Gj2CrSRfMkgw5TP6soXQVLc3jc4zdRJgB9jjbhK22BPUdmLoE7tJ4mxLSj43Sp",
  "key40": "ACqF3k2ogUNyEBraZer11wGvT99c3zVDWYDpkEFfYssRjNaompthebLdN9CD9SwN7QJFTVJcrKB9xqn4MquSaHt",
  "key41": "zg3bN8mogmPvKs1C7ZQZvBbyHzdfnynGRAsBKKBsuU7GcXb4icSNoDDS8S4rY7EzEPp2eiBb6zWFhmBPwy4aXwn",
  "key42": "57mAd2BoPAqcJZLYZRTKTLz1prsrPS6LohBY9jFqF24qBg2dUqLDpP5sfMUXUUfm4KNcU1fGurgE57DkPLvygY6i",
  "key43": "3T4aVyW98cvGVXvwDC6E74Zotdeebcbt5o8Ysdzc95p2JcbFXi1UDHSxNsWPG853aMq5moxKn1DJxrre1pKY2QuV",
  "key44": "2YgMEJW32X3t2u8GdgNnCdGn3xoUJguVdixYxrQmy7YA9LBNoZuvf5k4k3UggCsMD2AR2jwEm2EJtge5UNMj7qn5",
  "key45": "4h9aPXS4bAkAW5hda6Tut6Yvg4R1dFmG6F4qBsHc6PuUDhWxK1aL5hDAA9dyj17DNe8XUQx7LCDoxB9SrMpLhUKW",
  "key46": "5vTCSHwp2gvLbwoZMqxBKas4MVBBmE8hZBbUxgPcXkz9L88RTfCh1tsB6Duch9isjUchCap5f6B4nQbmTYc9mDWe"
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
