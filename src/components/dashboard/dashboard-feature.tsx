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
    "4QdP5Jia7JmkiyAKMHGZsSXqoCwChhWYoNN69Tv4uz9jTP9idubbKRNbTEoiDHcvmDWfCLTyjsBqEFK1f9MvGjYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ng6uHeBLWSLCEa7MiujYooBizKFh2hrSzGoMpdevCNqmYEKKbgeoTfiuLP2cKRKNrH36PHMdRuL7x2wd7tz88hK",
  "key1": "2t4akxZ7HkPKt76HTi9ixpVReqq1LuEHLCMdGvuXZMdR7eqqxbeeo1qQZkRDyVAEB4AmWk6auJ1Ntgi6cgKhzZc4",
  "key2": "5RP3UrYL8SpnhcTgmgtz4CD8wwkQkWiksD2vymorTPhvh2ZQCS9x1G4aMGnhsJxhhvct8pPktLvZ7t7oBt52Puju",
  "key3": "4UfWNB1Z2xtQ87jEFpJmxmgpSXDF9bda4gq9uv5ycjGFUQ4s9ssdxQYWgsLEx34HX47CDny82NKsmpVyBf5PssNp",
  "key4": "2MkfVYzPhKGF124YM1y4xS1TdTrxejsFsaabfqQdCUL9WubAsgsJdmowZgBkGj3Fz96vmSrgFJyvDTqVmZ2H8DQo",
  "key5": "5Liyvwa4M7FoKskq8f4AMGVJSt5ckDE1w1RCwn3ogmgax2Vt2XoNSoitajPbCcXr5EgT3SbRY6qGMpKVu5adMkbL",
  "key6": "66vye4HrNhkS21fb5uSuz1bbCCxHmK35dQ1T6uequQ5L85jTEsd7iDuUZy5FsAbiiDpqFTgrWH9yTcE7nMEY498J",
  "key7": "2mAe4dFN5a6Yst18KvokSxJpNMDT7ftkUtN8VWRA7Fys8V6PDrxUDwGhh9W9XKathKgnApvY4QkdpsXW4xue37BL",
  "key8": "3UV7HdgYdtNXw15u5EMH9QJNmHrbSNwiRPmytsio6uwuycFXn7B9M5nqVYPNDTpKipQn1c3Qjz9e13j8QXps3RT5",
  "key9": "3gFkUqLJZKSFv8Tfx7kTTc1PckybPEr4RvR8hKkc1iobU37tocqRTEoSkGbkM46HjPiM13fbnNvDvRQJh5gDeNER",
  "key10": "63eGd8hDfLDaLQs2MPkSLkiCV1tZAX22TqwxjNzg5miJtxRFXG3QAyijEc3j3D9bTiL4w9rCnVa1RMmvncmpaTVE",
  "key11": "5dhH8qtAmmyBH3nDQsuB9hEd4w9M5eFBFyLRxxEwmBQ1EHQ2eYw16UhdW5qAGdeTScBEtTC2nPtqVrTCkJ55UQbC",
  "key12": "1E7KaJQe5S7JmXZ6HbTgsB7wRPig29ChsersoWqYnAVC2gak2oQA7WVawTZ9E3bVVGdt5YNNcHoaQYw1aa2fzpM",
  "key13": "5nTHAExN3u4Yaknf4h5VdibvTe4YPBkBU3gisUFx5UAtJybdF8mWbbcZTryMxwfw6Ukwfah5LLEU2Y5TdxaV3E4e",
  "key14": "3pTxj9RxdXGjGdbjEm9JCELzwu2NVVX7FXS6hovVmdumCSCn3L8gC6zQV4vroS8tMskYQQEnYAydopFpcn1BXrBH",
  "key15": "poEPRBwZNrdHFQnhPaSV9vmRfGBwZv4E2mH6Hm13Rf6iovcd6AXpX5fmkNkMZrviYy4RXEBGx8zMGJN1678G8bB",
  "key16": "4mP2PiZgPLHYUYSwoV2G3tecEu1je8Z7KiZ8wGDiBZKDuv3igcjp2nKkE1FqGdhhKNwo9f6a5DXRAxub1gdPjJT1",
  "key17": "5ePPrX12mJ2RRKSHvmN3T6WLJWJbTZ5xyB4GyxFDJ5nwGA3RxGSS58FweUw7UMpvrnwn7E6VHUquVLgwkp7jeRKv",
  "key18": "4DuAViZLtQTG2h76QZF8vuGc8To14cK3ChGjYANe3zi2KwGRk7r3yogYnTrXKWX4tSPHP8RLKCMMRfnCRfU9V9mP",
  "key19": "3c3bpJdrYePxmMZY6dRF41xCgRKBDM949eLEC7UAHZnKDM5gNqcCMR7BUTJfj3qS7zEPnm9HUbZdP1AQzy5kfmcr",
  "key20": "5hXs1nJ7v9wuFr5GkvTTZXNtD3jKcisaxCDgPsazdqvbvMrLNZF2sn7TRJwToP27GJDk2Wj8kW3Dt4mdJka8fnRM",
  "key21": "4TSqGUimJeX1fudoqK1AKb9NF2UPHJwotNHJbZbdvEDD5tc5bsS8xLxA5FPwCHwXVJKRLkaGTcikgn7SqhGqpea6",
  "key22": "4fTqedXEgTAJS4eTexAGfhySeAKMj2GKtihpiXvzPqb4ont2F11HKUQL1qPQ5uHFS2h21RtHdhTubnmZqqjrTxNC",
  "key23": "5jqe9UvTYiVvowXuCdFRp5ohZMeTMNpivDYcHF8TLPQTLkniqfsUWFYyThRY8GzFCFpDuM2Cj9ouoJ11z8pbhf94",
  "key24": "3DHWnEuAd7pU1G47wzpjeAW3jZxaBfBX2eVnkSygf4zhwjoRdDRLfR4uVGTH58QT7A1URBSkVYkCBRzR8kZ4tonj",
  "key25": "4YFGxmu8xPHtkcafzFfH13xWRff6PVpbrY9hZSwWqhCkvAegxLsTTFbh2jkM19Gt1yThmcrQtVGsxz483JDYCpVL",
  "key26": "5Q7LCE9NuHWDqSrhJ2AQzDr7Q4J69WSXJ1WatMrFaiNgq6GVdSeyAQm7BcbMoJnGsf5VdzrPJxuWTAYDJrpqjZT1",
  "key27": "4Swvu8mXgtCkWiBh4Yb7G6yHegRofNvuNYS6FsKrrrSWFeTHzFg5pa5ws1XnWg1rmyQ3mdZPYdy4jmpJ1fuMNV5x",
  "key28": "2PJFrASSsbZRyzPJ3iVRRRRJdRve6HiTvJ2UinBjWZBb2WGRDygBdus4nUP8EuquNKTUbvG4FW6L4ip3puHoW3bK",
  "key29": "4bGUA9KD1367BLRqKHZCVXycRX1U83dHoJD57fc9EhLtukKZAhXbFJabetwZpg8LTZCY5d42Wh63AtYGSQnyF4wk",
  "key30": "5ev2MaawxsX85ri4MqJDAuVkbHrgZKX3TrggBcZ6phQSuvEp6kDkT7EdaD2gLTKAwSseUAWDoCEDL9ruwGuCfVjd",
  "key31": "52ayWBwcWgX4Rk5DuaGG8PPTnhLQBwYdkwXKQnsFS4Un68TDBAGWwFaa38foXNvMm1dUc6BzGLUPiYtG6fHWkEkE",
  "key32": "4qT8Dk5XunQYPSbpmLk9REXdHzrU5mhNzLC2FH2WVYuXW6dMZKRH3wkkNZx12AFvNrvv84483G1ba9SuW46DNZbQ",
  "key33": "tu5neq4cE9otWLhBgiQUBV3T4nirqojpym3LT2nUPcvec24fFVM22QKqQ6CB35kHXPT8d7JRrRjJ9C6YxBwg8Zi",
  "key34": "s5GiGUjvTqdfuGFz3RXoPFNAy2if1CwsV5ggCDCMVHV4feYyaE8NytfyKLqatH5xbnp541ff5W866dt7E5Js74e",
  "key35": "58c9kGv2P4zkMJ9u8FaKPGmgB1uRCpxmo8i2CUavvvacjaBuX1gGFSAtPaNoBfsEmGs2VGDox9ugio9mN3JKpP7K",
  "key36": "PvvF3hPGoA6MdeU9ZvvaGW4fsY34NwueDm4DZcnMd4sTNmxdzKgrdPjmBcNY4Z1PfjFLF7sAY4HS8cpp5jJAejX",
  "key37": "hFSzy5CiphsmzkrBB6ZXmw1KiLFoDcWuj3F1PZVUF8U51NvS3qgBvEFeTpUysxjtVoNmtb2XwymmgJ1EQ4ZHBqo",
  "key38": "gqrtNsir7zN9zEQksNM3ap4EycD9Hx5M1mdGexSejom1HDL2AQaXeyNY33xNvk3vdsPhQch8pJgBaarsF2e12cj",
  "key39": "5X8qUSbspXxuMSx8U4du59kaJzJCQqz5YhGgjcRu6tXhhfvZVZ1qfhvBnvT6WWmaYYb5GhTnaG4yfNaSwV4YFNnq",
  "key40": "4DKHREvR76FVpGu2nEUEF5CVU9PCe7sUJufhPAB5m6g2doWbqHsvJse9rFRwZku2r51gYj8wgMAGBL9kgHPcuT2",
  "key41": "3qC5k2pQjtDYNm14ZSFeeYZKR1uPkoQDbs65rVgReRK7x4Pdwta4o6pDQmyEdAauu616sa3MCpjcKr4WpLWM8B7H",
  "key42": "2d3VvWD6g8xUhtM92VzN3Lig6aKFDCSMqrv46YZh7QRYDAuGpy3krDwuz4ERgtezFeWL7XEdBGa15QUsSGyVvuiA",
  "key43": "6cJk4fPyRqnYzkhB645Cm2AG9uStA8bm6NGRETJTmPwVa9DGBPuKjK4TAhnCuShbo8MPPgJZzdhbkU9z3ATarc2",
  "key44": "5c6JgFvwwUqxVtANyMNmg2D8HWtknz1ztz4Cz842XyQEaxDBAZxPjXi6ZfeNed5HfR6vnTaBAasgXFd1KLEwM4HJ",
  "key45": "3ZnG9zi3hjJozVSVLGcAkWoYTyaKJumKBZQX7DQKyLL3Xy5o2CwnRaDcHYF6Gq3qsMJUMfeUpWjq4qhbJu3qFCdM"
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
