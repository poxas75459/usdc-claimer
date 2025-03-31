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
    "29vRZdxaMXFkMsiAxq8VvA72oHRYFYSVE1SuPQyDhFBwntzjJYv92nwfiXqE6CcWwxHhSjGfZXghBXU7NZj8epcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnYMw43d47fLwFbrU8A7jww7CUqzjkw5DxyQnXfh5yxPFPP3wKt2zBiMyMerAkmgTfUKa8jRuBNTtmEzQc5hgxz",
  "key1": "62vqNSECP9EDxYDraKFZjzpZpi3r68NWEhZNq8yaKVSott9qafVxePX8i7QyWbd4kESTf69xWW8E4uXasK5KKJzc",
  "key2": "2dr4We3KMXPUqRfmrVAw6tehARsfXTcTnwcUSjM2DTVavKUbGsGeKorKkDoTYb8dGqNVFENyALwcZaNxi8wjXq3N",
  "key3": "2SqDo2zEgJ3CBFRq7KSJYF5xoogjeS8r4PagD2666GhJwc4AhksbXkUfCJYJxX4KZHJdKmVPW9Yr7dTiBEQ7XqBh",
  "key4": "4LR17b55kAyoTkWkarSCK59yPzhd3G7WswJJVPAj2TCMYMeN9LGeBNSn4igQHVuCNsF2ojXBRDAHArMuGHLvajCY",
  "key5": "nTEiA7R4in5cC3TkKSjeU8BkyYjeiudN9TkuRPefkiFcc8c9hu6QzC4LMYkpLEvr2s7Aesb3T6G7LT7SyJYjVw9",
  "key6": "3QiLrtYAeoPpGTaY147sc74qDEiFgrT4DujhM6ZnXyRdJ3HVW6f8noWs5hbKhnGKvgCRXVZwFKyQ4x1AgmCUwsQk",
  "key7": "5g6Y7uPRpcpszATH4BEpH2PsKjrm4Z8Tm2dhbvU8LyyFQN3bWu2eiW1DKE8xs6UoDbBV7ivDN1iQeqRrXRmiBNKF",
  "key8": "GUu1pGgEvPhdW7p1WpRvZxq8Um9n9jpypXsooSm6cLwDNFmmTAHjthYceCrhtZTKXTodNQTj3YzS2qU3wgtp8hi",
  "key9": "61J3QmmDi9EBKBJuYLxwAAsDWHnQs8aPr6QXEb2XDjsNXRfBtdYzaK78R5GBNoURbTnLuRi8kwBbMcarFFpqyENc",
  "key10": "TVYKNvicykEoj89GP8DkPfGQWhttwC9b5KHLxp2hYaWASLsFKf1KPBth6PRBoAh2QKGDdtuw3EkQLhzrX1i6n1n",
  "key11": "55Qiyf5H7qhLRtLojGrJPhjLFD8dmajUFapVQRGcfMxT9Ect3AbPisopRMfh2RS37ftkMy6nFR3PH2AMwf7LLR1K",
  "key12": "3pqUqhVZkiiKGrfHDMb4aRgg8zjYH16V2MfhBov3NusbjoMtpSn9Jw6ntDbVqa6drvgGwrFAEkz9ihLdRscsYGbN",
  "key13": "5ssz7HrfWpC6dk6r7qFW7nUSCw1woWei8SEftTKV7X6tTCWXfv9RZGnATBBTmuZcYWnbXuVk1EDu9H2sW5iRRweD",
  "key14": "4UANy22UjHa7h1xmeMaEfhPJ71VGGP71Y9zmp4QjAR2SAL4d9bwircTa9Pef4yQHtEoQC5MQCVzV2PKFsfLhczfy",
  "key15": "4QVTkU8BBTkUWSCKP9KmQrGRCRnqHiKVNRkqyS46d5pQz6Sb6wg11npXc8m8xtgYkNZhmGVAiJ7u6J2PfBW6wyh7",
  "key16": "4TVKcuEMWk9isBXQBVGgycygpin9uuhtYbuShrnrr9tyDHLRoLVEfB62TyDKJA7ePH7F7n8EiCWkBaVHr1qDU7oW",
  "key17": "3AztQ47epegq69w33RoKM8NetUi1UTEG89cnh2NyKasYpaUh5qe4Qy7rWp79pRatMgfjqPLk37pvwd3NVdNcqS3K",
  "key18": "41SeQaSJYuwmvRsv346s4m8L44sv5ec7382eDp4WWm1m28f1MvVYnSXLqdixKdzaJxmavNdBL3hKv12Vd9iq5jLB",
  "key19": "5dbv4y68rFteyKXdZFCBjiVsZKZXWr1xLt6BnrK2eLn4mow6dyQ6AuZsSx8sTYLzfbfgcsHFjxZifzemMVvQXCT",
  "key20": "G8pAyyagJkfK6kgGMr1rYaRgkhvZdd5bN4dvMdPUKEmNhfq6GKXuhnmkXcGW22QdwF1NDsXDJEu37VJ7feBnaFf",
  "key21": "45TMWhrkoQeeUMGgfYE2Puvv19YtWHVpvLk5ocGsVmxmmGnqmFxX5T3e3SUbYhDyqrLK6QjVXPiZT7DYgNkWDh5w",
  "key22": "5mmQVDavSW2d9ehjzy63H84fnEyEcWhej7t7SHxensmDw7KXSuscmiPaBN2vhwVNT5zcYFgiuqP3TAEe9ScRXXXL",
  "key23": "328bfxDNoz1MeVvHXAPi8TaeZtrXEHPyVZCf7QoePjYnWbNZNnGwAVpybZDSveJo3nWdyVtyqzu9VyVXBb4FEkSa",
  "key24": "67oxUoJbjnVxwxMd2Gnx9sNMok5BZQgcqXWKqfUvciYPbHW3u94Hyr88UqUsev47fmrMpJMrMJmkFNDEW1Ze9t3R",
  "key25": "51c7YzdUwYMdWyvs483HPj354RWM4ypbedZBcGynRskyQ6QsJ9KwinPkWwctybKZhjY6H7CpsEqW7G1N3T9gY59u",
  "key26": "5eFv5V8zrWjCp1ZEYVk4e8mcna9ojzvAax6mToyuhjq1vvYk1kc8XHJ7C65oTDgu9TRnczdquuCrgMdGsRXZfT4K",
  "key27": "2BWPB1q4Pxi2GwDkFK93qTEmRAJmtdqG3DddgzikR7DD5sPSumn6w4eeoCjXmJjrobGd7QCyMfAkVf9odQFrsBPg",
  "key28": "7xBXJkq87keKHJ68H2QCNBdS2bWPrkaKnYqZJfzJaViGxRSMnWhfbmaj7YQg95Yiv1oXt74TzR3ErW7zrU3z491",
  "key29": "RjdRzxtKX465BcVkk65w6dqwgXiyVJrccwLuDJePe57wTz48ZC1aHdKVbxF1CLtFKjp8A1HGJv9fsYYiHuiRW87",
  "key30": "5moxbqX8H2pFTtMvp32ZkaHJSx6TeDiMVsSKiCopSVdn7MQhkWjw37b3f6BwWYDjQG89HYs9uy23wJ89zY2oMT6H",
  "key31": "H1aJ7HChNNqFz1Wy3uHDziJqjSkfDauLWUjmzRmEkP6hQFamp4SrutLyCMFt9sbuYAnr4NJXgjivgaqMEMdScS5",
  "key32": "SL8h8Q8bb3gseeRX8CUSzzHbMewaoV4ndrZ4VYgtGjpcrRExAw2eZcjVoAvFxdrfhJqy62ukotUfR5dYgaFZu8p",
  "key33": "prRaXWjxE1cNh3BCc8AZwbNSpJhsKLBquM8FwWNcrN2yTwfT1KHfP4eRF3CRgeXpPcD9TnmznscqoKkumexoZcw",
  "key34": "2y8jMjCndeyJBtmieWLh3aXKpWFDoz2TrjGmeFW83YbuYi2qE1s6uRpy8EWHZSW7ddENrBN76czM7vm9hKaF7QCy",
  "key35": "4euLqCT5RZVHhMvckYk6JZFTo52QxxQY7A4onseXjahftjGV9nnm83cjhZCaheQ621ctBb617LqDxL7TcviJwM8u",
  "key36": "35FHnLB9wDphQLyPeUdrRQTFNWa6kyKa9UehGQ6FHYhJDRdLxhN9Kqd28LAWu34jjnUwj6tQyPJkhjDBRjGyxbRB",
  "key37": "28VfvF5d4FKRFAGfGm2GfWcKbJx7cmPLXD9jhv4Hx6B8QLj9zUqinqKUG2k42ozFAb2JPKJjHZ22F47rGCWcRMkP",
  "key38": "31sHitCX6VzfZFXi2PS82Wvo6uHE8RcSWciuusgVDHziY5Txict8XtF89xhp2EUeWHzTax3UeQi3ujj2HNS5dKuy",
  "key39": "mHcoRf136AL53vG5SmuVt71RXvgp4RhXATH3kusvYJRGfhueMf7ch5gR6KGQkqDwVHrKHtF2eWgX7Uh5S9D7iZc",
  "key40": "4R34BFrnzH9fFMzansEETM2KmCtVCwTwDNo7fBS2D99pnxxu3xoC1uEuKP5Uy2dRve1GnSAhbMPuZ7X1dD3mhXfV",
  "key41": "4d1ATUYGC9rvzWRs8X3uALUhxac6BbekvYcPYByL71zMSDyma3ontA4NbXquDKeqfc9GrQzR13CQMCZkuu6ivw5s"
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
