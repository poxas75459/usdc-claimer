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
    "5EJVqpddpWYhBY53kEcZZoZ7qzbZYmC5QdJBZh5dKwQViKR51VbTYQrbKbJf2APNgUeJeyiqv6rpB1GBNYtqQvrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKZN9Wv6YZ7eyj4XfuSrWJNai8Bi9m3NNwMzNeqhjPfukHSTp8FUctt9KBCBvZabKG4ZGAvReqCL7kiYcYCmKD1",
  "key1": "4THuoyA1TmyCh2b4GGEaJLKndb1ATWY94de7XiCR4WpoQoTKp8q5BzATcF6SEuzrFo2iFDJt1CZLwKRmSjnQ2Zzv",
  "key2": "4ComNT4nSQvVmSiKX1bfEGJPsicevjpCi1DNM3SswNQs5qW1CZZ5iqWWU5TKyRtoo2exGo6UsEWXYj183xUhDQJU",
  "key3": "29BrePv31NiKr62dTJZtpBm13FxXTbEQ9qH8GfH1QoL1FgBck77v8CjwHyKJAJVTVGsn5dHJFD7CYnKZB7fKactx",
  "key4": "2EggeK1P3f4AehDuAQzaQpCcSqxZMtaKgzxneEw2pdRsavm4uZF77P4wtH3HQ1TSBjbZFjAW7YnjwehJi8UTkVX9",
  "key5": "2K32k2KsYwrYy84KKXCnMStywLQdmqrtu63R73xMnhZQeqxz3Gqhy3yXVV28dMczMciXsd7k5mYomJ1eEqvbP2qH",
  "key6": "3frxQjFeVn83v8m9xX2m6Jn8pBDhTmwYyHK987z3PpgH5hemZzTLU3ZChrFpLBWsFahfxi1opUPLJqkxGHkkfUBf",
  "key7": "46tm1b7qgYHbJ25HNCJ1oSQicJQsqqMyAztUqg5v74iKSidci5sQ2m3ffBRgncbcMDhWckzGuM71TFgHDssMbLaP",
  "key8": "5HnjA2Qkj7wZrzaH3A2ALR5jDoXf7u2mgKBJY7SyXMbcQsuTf2i7qnngfujBcErtxHXNnmdnzeEEkQhV5DQpb23A",
  "key9": "3uTvCdAgrLt11V7aTgSTLeybvvbmE2zj9CQiiKMgG6X3gbP4WT91NuYNK4TGuxbqyxLJqRVxRHop1dgYumsNnhwQ",
  "key10": "2bVsuDA6G9YNymtR86Yiae2D81L5ih1wHXDqHfuttHPc3Y2ZsGdNbPA594wmYcd4LhCcj38zTv3dXTbgP45yZQWv",
  "key11": "yhps28UMKLPwkyyhhHsPZQGW7qGuAE3MkzZbRa9yWCxc14GEsxmsQxgKs5ha6HMyY4g5wfphBPsb3xbmGUD5XXz",
  "key12": "cJkgALamNGqkrkihnZjsaVUo9HL5oqqw9CMAvDR6ZL3vhTfQDQhMoMaDF1iVr51v4Qr7FhQF7EEcpkukXhXiVsp",
  "key13": "3PnVeEfFCesvQuT6Rbhw8YSM1KZjdZt44vNqbkwFUgVkSEtT4acDPgwsotkMkFATFNCJ8ggNRw6MD6NbPpHAWu5T",
  "key14": "4SH22AxmVhPCsL2gC8RnQoozZzXvvsEK3eqPw48mVJXHFmEGWUf5Dpf2cMCECte3bwxsoyYHSQkqdqCZiuYyuVTa",
  "key15": "EWWeoonjqWDjTR2Jr5WVnGyBAXDuRG7x7SKs3Xh6QUZbkkG7f67Ws82KXR4iXVCxgeBEecFfQc1zPmWrE3i2VKi",
  "key16": "5N82xGJLPvJyukEmkceudNSkewqTfNAAtoXaAs4QYjyA69D8wLkCGnoAkgkwPdNESNW3pDmsoyWYbKpKHJ8k5Pd7",
  "key17": "3yKqewx8MFbngj8Jh6Kkex17ZXhPcHN7YnNRmDCSJGaQfSZmCtA7bMuF89QAecMnXLiTQRYM6mWAawAw2SLbw5Rq",
  "key18": "5v6qPmbgoFuSGeCobgt4xFMRHy7PyP4xx86eitQnF6iYE9BYmsQEt8QQW3r4QxWyJjVaaDYUN2BjPi9zdvcGriE4",
  "key19": "4djsAJChscGTst42Xvg3WB7E9G42jQQGthdTVW9hAAaAi1d1xMNrxkrkPgAMNqbnY2NcRsiZm86C1SKi14QsKefB",
  "key20": "CafjG2gcYPwADRCKccns47wVJsVVtPaxadajFH3Rb9CobGE6EG932RGkC1CGzAFEx7JAMVqLpEgN6xfdv9gFnpP",
  "key21": "2EFgwbHNCgNgkcc74DHxZd1Z4eF6pkYVAYZt1rHq4yaGxMqvUDrDmxa2L89EEbsAfogXkcq6p8zvbzjkpioyxN6F",
  "key22": "5snzJYanRFiik19TmufgHUo6t6JMZZyPWZFadUW2jyp5Dv8XQiUc87XxdPXE7p8XNyVox1eKbmWzgeVPunj4GWsa",
  "key23": "5SkNLrt3UnsWRscYoWSHHUrSBoVusx67MNy3BETSEZbDZJHeFz1fKknwDniKv5cZPwkhHQ1xZEPP1ZTccCtvakL8",
  "key24": "3ukMYxkH9jUckX4LH2yNcW92iNYbxxpHFemfKf55MnqXi5vYWvwbmkbkDg9qYQt3Kde6r2oDgcaD8zzRWQ91Dnuv",
  "key25": "5PKJbPoys2RfE4tah6sV5wycbYwCJU7mcFYZ3Rv1NRnJAjWeYB7dApE2C9t58vC5xqcr77ECNEUZzej441EjpXCb",
  "key26": "5nNdbZ6pLnKiPaPrZzxVoaYCfaVyjxPagbgtit23DqAuuurr72s32tvBktLTgTyp4q96hBEGCstGnX5XT1o3fDtd",
  "key27": "4faobr4ackrkrdtQzsRomWaQDA7yvy3JbCB5m9VzGe5cBFkcjmrhdRootAz5u13HC5g2g6eTygZ8bFn7DisnaWN6",
  "key28": "UmVCi6g8CZapMmD5QpSsnmBg9UNAupUb4f7SUqmoaiDHf92kCfmLzGjVWNNAwUz9m1tq52ckEgkEqbf6QPZeXpG",
  "key29": "21hHzNTFDgPwTV6GfJzsdDajf8k6kXbt9znFLqF3pFiTzUmWjXj62iCqxgCiQH3enRQKpfL3YEcRSDuBEvDn8dMj",
  "key30": "2YQNXHUXmWDniyyuvebdkhQhVHGRmL3Uf5atmL8A3Qvjgn7hMNSvF5XksuGpvvtbaS1cKjnJkLvewwSULpaQdzHU",
  "key31": "3gpKyepvweLtWjn1UEEo5AJTrCmMwZTuAToZxWZExYVuhpQpoi8iJxTGBWM9rawq1Y7aYtjdechiSVdZT9eC2Q7c",
  "key32": "3Krs4pTG2sfTuGqAJeKHgNQFQ4swTQUurjGpLWrjfiFPgUELoZNG7fCYmSibCcikjr19iK1HLjBGFN1aJNiEh85x",
  "key33": "ivDFPbbZVjWXS4CfnEZ9kSXd1Vvc9inznQ6BxsdJPPGGFF1hacb7d3xnWX5wGAihtWc8empg3mpXk1cH6ACExTs",
  "key34": "3A79EZoKFQZv5fTFnsrV9VsrNN68Bd3gZ18E3a9V1vFH4S7JEGWt4Px3THp8oS91RkpRz8A7CqcskJxcGTHgUTQF",
  "key35": "84zCUXvnBimWKGEyV1sG48fF4zkA83LVyq2F18fB8oaBtRLmmnh9P3FQ49383i5nR7vCQFNU8rBedAFdT5GT7D4",
  "key36": "2ZMzpnmhtNUhwrLWK98xto5UfNWAbZdWZwXNGr18p1GaK2sqqTxxT4MV1zEK2zTWYXRc1zdFvTWW6nDzRpgPoJpi",
  "key37": "BpZu2D1jhdiYoJKVvLo7kdh2vTac8ghAJNqd7GFGqeueHqSWgVG4swa6sdQTgumviKBthrjkCuz4qcDWgKSszr9",
  "key38": "3KZSYozohoq1iuueNd2yeYDuNxvuYBB85vheMX7FMuXtesSiqhQ3rtFMc9g1ZqXzUfuwJBPyfXt5VFPZDLDJ3NCq",
  "key39": "51uczKQLk6qCg8T6T32rubuBeCRGqcX9piJXQdeQritivoxU3kqe8LmJfUkB7r1LtVKtAuaop7rUUVY7NR97W1zN",
  "key40": "2BuS1LmPprCqfDdsVm6qvY4hg1BDD3uPKdqSZJCJNjvqzbb7ZPKorUHNL3oq3JPS7TgUPGmQGm72h1AidoEbNsiT",
  "key41": "4KBcPfxK6JPaJQZJ7W6bWTm5vr3CyrtJvXF1LT5pCVgohPWEDkyHKAZWhZNgHSm5YaZzCt8AtRVvuKw1yfxbpYbU",
  "key42": "EtWemAS9yarxLuuxCeJAJ5hDzNXPr98sKLgL18eQ6a7gxQH6urS7dWuWedYY3oNesjZKkQM5pmE3aGxty3t9ati",
  "key43": "2vbs3dAaH2BDfoHhbwBZZrmPBKFHMVk474DDquSzcQ5m9rxpE8tcnzSmi8jxDJ8PVFoyCACWAkzdNFD1p3EPqHSb",
  "key44": "2UW3jN5HBPTR81md8ruALJckbSw1c9kgYbhFP5wkax2sPiHSuqPGmn6RFNHjcmuom6doRbP5MD4ingCSQWqXm9cY",
  "key45": "42GhJwBMvYyzJuEuqERPKPtB6EuQs3eCrJEVKVDhh8op31Jx5ghXGsExYKxbv6kADxvu6k98tuRCax9zUmc8cTF5",
  "key46": "2XCAd6jwW5vG8CcaUNoK3ocY33M6hiumfrAwTcdCWwadsDWZJ8pLLmzKZ9mQVBmMBebyphVf2Gum9ciQ8MAachE2",
  "key47": "2oBL5jpQ9zWhWDcToGGoqG1onYvZiej9txx37HkuUmXyuFy6Y8ipYWiWDWHMPvbt1gB4Be4Nv8SbHhP5rJYXvnhd",
  "key48": "5sxLw71s29KpR23GCoh45JurVe4pXw5DpNxHbPnCHXMQft1AxXKHrgjd6rshua9RTZ2gHiccCtJxJjBHtFK33jJK"
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
