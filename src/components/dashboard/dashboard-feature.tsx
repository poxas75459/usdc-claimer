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
    "3JYHDJJ7vtYJ2WX9JanfuQSzBu5hXtjbArvABXoFbHgdjZmpngz4qeMZhHVPuRtJabWweefJzkqwgcFYmBCnWnF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkREHYp7HGv9fqEPHHsASBy1ATWvx6eARP5NG9QHavgrPMYhLUyHVWL1xvX47zEQhxPJDGXHZdmg2XLvgXSJEj7",
  "key1": "3xwSXZH4NxFmNTGrKZKxiEd631cz523WNw3rUnfAnhTystUjoBdaebXEJQGghR6r1V2zhF2MwDCpPrrtqXEFzthu",
  "key2": "wXMs4M7vnMVJ9U7U3odm42rnrgqJwFrxu2u3dzd4DS7QfPoZfMVRspJHmQiXjmVo4JS3EMydNVVXSzVTbJ6GRCc",
  "key3": "22oGWhWVufgBQenALsre7LqCuGhRhrYyJMc8rc6x35jZFpbidWEdTNXXrM68aJwRz37NJD2WAB7oKvPC9Gg6cU6J",
  "key4": "5ywtARuJBpJg2GzcRA4YDy8WsooCLFkXfCTWd3Hf2ogM2G6c4vufRBpgQE34d7LM12zALzkvk7CgjVT8qPjuejoi",
  "key5": "4qWRhYiKzHRtDLVcz6LRxKhwtt4pf6huCKQPLs95j2pxTcrXUMEFYwSJ29eifLsFRb92g81oMdVKzmKbonMSkkX7",
  "key6": "48EuUCrjtv6W1jsVgWBGuw3QhmRckZWak3ecPbJEz8dgi964Ppye1dGCnbB6Gu8WdG2C2d1MTAMmkXaAazrRT6Dk",
  "key7": "4nrkrXSBzWrokWbtnJGsWmh6zpVZmVZxQzoPLQRRXFAzKZy8GS5z94PDeNAr89BvT6WLYmLGRVLwHHPKdaeR372",
  "key8": "5JMLz2tvb5gNGHTHSN78DiNEeqK3f3pXsb7ZTVJYvFVjDKTCVK7uzJa7V5XrRLJxyMM84a4D5xd5aRJWWeY284fE",
  "key9": "2LEPGTuieqzFZEJBRAaxZBysn5EokeFnUrVoaAHNBYub1ffwh9k3wvtBGCLBWGbikknHUmPRMfCc8vvaWeFpDfqb",
  "key10": "2qsic7iK9b5zmSC9PWBgNowfiSZBbqF1x1iNUkAt5xtvtHUQdcc8TKvAaVpbPx1Ks48amZEjzFuyHExbSPabkda1",
  "key11": "hzGAxD4NdnwUy33mFzHAxssvb7yPsGUCp75WBDrPyCW12fDxSv8Ekxuko5QR9CHiwQzVjQ6aqLuxymVEsz1YnSf",
  "key12": "3s8MwEAxh4RV6UYg9VUTiyBNbhaZTmqx693Xf13JZ1zRkBzPHaYrhwKGdHPnaGxnTNzZkg35A1cNaK2fBQ9gEkfX",
  "key13": "3uV3zY1fn8JzWJFP8a5XNFm76XQA79mKSPhK3txcNygRwR8HPVoNLLuovdeGfUbLPoxqCqdGCCSrKhgeffxfqfGb",
  "key14": "5dcZAJ4cZaiU5EsTRoecyddjUhcFah37i9fY5UrEwKmYp2wDoJZUEhSmQpuxn3hEtJnFA7ajmFLiopwjhVG4kAfo",
  "key15": "4mvkqnGo4VdmLwb8dhA89hZh95gQaq5XngHrN7saj7DAK4FkGFcMSZ8cyoTGAmNwjTNhhxrPp3F9s3sgzFPRFKSi",
  "key16": "aj5BW2UGCjV9wzCdJw3AbLqbvgRLS7nSrnE45GMZDUssYn1q4S7AnqxgZNrKe4aVaQ7J4Dw9a6veMLn189aMabu",
  "key17": "2zHdxML472Co1tGjHajXTKCEo2S9nEzmtNJ8dcak5WKCzZ1qkDg2NvPXqkaBYT3apxqjphSNhU5WVohBNPrqExGL",
  "key18": "3xA2rNdqYYdMYct63sVCtgDZPnLjqvzkELBU5VSXWyYZAWshUyBFFf2sXLp8uJBE4ynLpkJQ6YQHuZkpK5Zuzof8",
  "key19": "3t6QEkigXj3F4tByoUQz1yS4bEw6yLAWYFDkuWEP6M2avfdCvmMoVv9tH65dUgSQ67eiqfEyBkvUQeavkVfH3thg",
  "key20": "2FDyHBNGMWUstWoY4hv9QJrdqXZEohdZq7GxQt7e4LBwBxnBohsEJeWF18QCe55Qg5Wku4742b4cLqZF2U8NYUUL",
  "key21": "5JeNzr8Rfduirsh9nMZsd3opzgPpH1vDeWW2dpNbWvQcpZJMYTJX1LfSGD3YzJ5KqUFgrhMcMfJrWaXietfLSfmZ",
  "key22": "LPX1LetjXARVPmpawmRYPeuqhi6dHV7QGy3Gks5ZEYwVdabbYbB4ny5bJk8ErseUy3oyYUr5BAHwZgAnrvjR96v",
  "key23": "29iUNbT7XLCM6hntvT1pBXD28etAHXsC5uBbHQS64ZFpPdbgAoN4UHViph8iPYGRtGTz82Ld3iNSWKp6ZnWddsqx",
  "key24": "5V32H2YnBQJK3trNb1NiWjmeQYYimAJkByG4L5Ain2R9cD6HdXGX9BbXqFzsQvqeyFzUp5LK4NXjWzxpYExgyYmm",
  "key25": "5eYpBSRyJNTNQ2Fpafyn9myXSZS2BWXM2SdekFJAh15ns7dH6VcMEtpKy7gBaUFgmf3jqRSneoPukn6xpXerWwfW",
  "key26": "5NbUqk8wLvxwCZyitpuMeYn5UqVYwx9aW8MyzQsQSooQAgerqZvwuSiboZMi8pM7USgRrbLqe51emt5Td4UuCup8",
  "key27": "47b5sDYUBVEuF4uRhAjGY2yGxDwewJpQ5upyp7a2WzrAF3B5x3U8oUsoxS52KSSTDM4PxkKMq3MAC3QJXq3tLdgT",
  "key28": "QyoqtYNWrmoDdPFPqxhF3w71fka6GGNetweiGzkeu5KjcCRs8Tg1gXY7yb85tcmjPdCMBMsDGc3gri6EEwGTDZv",
  "key29": "3Wa5M6fGFmfKCEE3deGuzfudT2FCMENxMBmgEUf3hZMtEvW81qEAXQR9wUqtFKEQKu4bgiMPiQEQGjJD5jvsqWkt",
  "key30": "5UXw3Cq7sVHBs6yZczcqKEBhyPr9x6sz4gBgcexhaaq24h7hvgv55KysUjyFqskQidzt4Lx46h2PRudkaqQ1C7FN",
  "key31": "3ZXzWYGD8jKV17DyP8Mo4iQW5sPVpqDpXwQ6SH8DvhkyA8Dys9anAJVjQZTdewPMiWMLENHz8abJqzTTXYEAAc8u",
  "key32": "65AmEC8RAKjPQmoeekzZA38ysCDfbvrvaEKJ7LyrJJcM4cQmEcKjN7oP3xBb7nvSq1njZxoVx7i2B9QPywRL7mjT",
  "key33": "2YABgYJKz7UTM7qNzpX94oBb7CBfM6QYmxToP8x3iSBvXJHcPWQF6FTdGLqvNr5PFxnSZNsXsmh1H9hqDQbGav3A",
  "key34": "3Mjq6LSJPEY3k14pk5pRDv4MshVbaH4FGoQH8bcXAXNKZxkBFXrtgvCccMkaNGFzErZmU1oFgT8WaCDfjvxbhZzU",
  "key35": "m9qaJuLNQvNNauoGS9EnV7fbn1V6yBstmbZvVFLRtQx762wacn4i725o9yY94erSwr7kG6WSMfjr9iRfgPXdTXa",
  "key36": "o7H9visjY2up2xSXM8Djtd3w3Vk17gMznALZ29LoWhPmSFV8PmjyBjSM6eTjxdoJQncQLWcbLZASycEJcGonj4A",
  "key37": "4SXakCBFFTbiWhn3DdgkVCatFjCkzmf8wKbyxM5fz7fhDfQdU59xE7JuQ2nSzMn8jDnVfmRdbxtJL4vtSQCHGMAX",
  "key38": "5Mweo4BD56bz7EzFoi9Lwd3mhYeNjkfKtmJVpHzkqEf8GG3uhS5AYkdNagQbWobN6Wz5z3pttQLz7M7CCrMkb1rm",
  "key39": "47fbStdEDiaCFFVo7t4FoGdqXXkVrU7BBXvPSioWZKj8CA6cZqx4WXFZpFvhSDsMccVBnVnsZ483PomqsTkCD62A",
  "key40": "4aGNYTdsCiD14jWG85brB3zB7aDAvZtw4uCGLiv9yHkte6QeeLfrfXZWt1MRVYbdEErGKXB3DdtK1CzNtZ8CrU6J",
  "key41": "4KgsjzgauFoPCsEPqbSvofo5U4LqJqGxCZWf4pgQ8YPuPPCYF1n6YsZogdHM4CjjV3pyzwGytx9ddGBgAXnPwc4S",
  "key42": "5c2xzytk4d7paV9gMyvKRmjkK86BZ21T2g6dwkKHUxmRZjN3NdsJdDjMBkuShS2oBa4jtwASrnkhyTqyMBYSsPTa"
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
