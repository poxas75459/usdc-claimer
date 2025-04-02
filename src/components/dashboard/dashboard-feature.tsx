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
    "5FTvwQMYTs7RSe1uiX2d1gat9VuaPYWPWBzBbf3UHMfrtwTMmeE7FSnhRYRBoFjgwXmDTGsZHaomrMzqZJVAs8G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJSNhfXN3MBRbTh5irXoFf6DfidFEWCrQf4x6aTnZX4oTRCVyJ9ziJKXTqbrqpTHp3Y1hYWXci4pNnzstp2VXuX",
  "key1": "25ruYYBGPYorooh2yYGkRVS2eD1oQpUBf4pVHnrDT3jRi5qH6LFjJP2hVzKQNUwxRUtDU8XWtCvmGsaSQpsX1tjY",
  "key2": "3tigUefiBJjWUwZEibaYQuFjoozk4oNyjaGVZ8fdX9kHuS8o2dhsUTecte8PB2hVLKbGDWT5dbReGv5haSRiNHHU",
  "key3": "4Uqd7mLfBCokXgb1Hc3GY3ahCLXxRrkz5QTUaiWtmKnWRwbm6SJrd5ZCHKWkXLy2TbBuuAsxVzzo7ViP4FofTVFm",
  "key4": "2WUPQiN1UgVuJpx6X5jbfftp2oeE4Tq9LXDdt6oKhL8ZaVTvRqKqczhPEbUm6DEkyKh8yixQfuLLMSqbvaZtU32y",
  "key5": "G3TYwe4AutdtAbPbWWYNf9tejDRYa18ae8aZzSNi8qswkmuGERpYBbh5wuedTM4xao8jTois37wC8V5YV3jX3FC",
  "key6": "4DPuXnQtryuGDY8f5RR1tbx3CnYnJoewBiVJqYjYVhV6KCWf5fSbBcGPsegpH9TUNU3Pcpqgo93GtyWL7RsfzCmN",
  "key7": "2iCzozQJP7yMEB5iGjkF9xcP2vnbx5ewPC8bvh6uKzWxozPN9gVnyzKGxXjBX3NShnsX93dnnCU9RQnNUFWPkbYg",
  "key8": "3n4mtwAFM9sYZYTACMxNL2DGwhzvNb6es7JvBuh3Jrw2zHHHEjHbcorCFwj8rQ7fwod6QCW5KGVcZbhuXJVeKw3P",
  "key9": "5TdCzq8f3TnUSV8beqRchZhBX1CMqmdkk8MRwJRWXX8wSqq9WqS3hQEtihBcgXkR6pArGYUDVyBfh7WZKRCvyhJV",
  "key10": "2FowjRaSTi6NFMYWJGajy9exnVtcUt6XYLe77buVEV6SrgyDZrokucomsQVtf53WW3carG7rutzcC6PhfjuCtR2H",
  "key11": "2EU2eWTMzs9xUQLnKUHNjAmG69BcZjRmxLDFyNgRJYo5UvPVxpFp4oqetvPVY3ba2ageKX5ZxtddHnc2h2EssHt7",
  "key12": "8aWWkJsRHccCkrEfjemXFfNwhfNnZ1JgcKD2mC3UkRWka36qWzD2CnFR6vKKrBvKj4REUM5vx3Q1Kp77q9pbBNz",
  "key13": "2CHEHnJxyWyRxQECjjoiESvU2zpmQB2mosZUDRYLx89dxmoMjt8xn2cUUh52LqMupV3cnebhDNFxLC7pDFG3LULV",
  "key14": "3GaMyMJdUM6rBaB25K9vndWCLVMJZiDZGs4TcJN6b7KqvyEUDvY1abfPWYsfJtLABA7fARd5wzoguGziVeh7ZKVv",
  "key15": "57Jdkgvx8cdV6erC5axtfH6Gcej3FLnwuxJNjhuhDqj3ucDcrD1S18BELzjFfCTgpjT7mnCpuGWooN62MfYFTeq4",
  "key16": "5CvC9kuh4PGiX9a2rEWavKQNE1ekwcYZtbWXG1XUpz8N7P78HSW1dZeAPuKtjWPczMa7usoMbzMEVoQ7pqxSDZJ",
  "key17": "5YtHayMyvTjAi6ydL6QSeyU3MyPkmhv6DFi22RyJFykTicCWV9Ms12JEoPwMg6xNokAUatgxLLDmHv3qrPUKQgCk",
  "key18": "4efbGvDGbDBEuJ6TDLyLisuuJTSBG5M4So2yuDNEEfjt8N8Sk1fNACF1qgrcbLtY263e9R3Rb9jzzYrHUTV2zSf1",
  "key19": "2Yw82fQNmcd8WQ2JXubHF84FqDHV3zdtzB8b3YRDkfH55xBAUFZRjkv3W4JB4po3fN7LEDvY1gXZM2iLeFUasiKa",
  "key20": "5sKsyPUmdCVrSkKBXvHbjxCkdexxdSyawnoRB1WaYCpJgN1CVf2KfbDCZ6i6e6RchVjT2NRUgqMEfJVyY2wG2QsB",
  "key21": "2kaFbraVWAcSWQqN1wXMKZngRVSL9DPqgtRvKJGju6rS6QhTst5QRCcoVm9ugKh6JD6E2MjxLbS67TLs49vhduzX",
  "key22": "5iGrrqFLq2RwfxxdatUaoK7x6kZAjPPmAMi72nja5PGG4chFAdjLUKdQAZR8w7LH1EaQsSPyDULDGnucEZfu8WLc",
  "key23": "21xhBMM2tUHEJunZBvEtRChvQ9AJMBGq3FA2f7Ho3Nn3ULfiFXZBWbt57UVqKntqhjPgdaQjS6v4UPzhXjfraZi5",
  "key24": "ZSbTiYBNvYe6ciaEqy9MHahWZiCdBPvrv2w5dJUYM6psoBPZV2D4hGa1CqfWg2xkY8KmWqimupu2UsierjTiqGG",
  "key25": "D1YhhGEk48smiSvgiDXNQjgqd1YZ9oadzZMr3rLKqf5ryA8YypPYqMM7s2R7hm6hsCuQFbKK8adJVvCJzCLbnHx",
  "key26": "5sjWCwofjZ2B5azyhcD2CLddySp8zZ5hRzwm7mUzuYp5Mck7LMf3gjrjbuPwbF6S9uCp3mgnNuZva2Ltff9ijZF8",
  "key27": "5MpivV7bvmMwbTt9XWtvGmx8KUu3qXKhBoydFoFuRWXeVmsXfwkvjAJ2Tz5F78MmLiBwh3toctKw1uguHeVsY1HQ",
  "key28": "5WxtXcuLvJmwh2tHERqSx2b9qud1GJuyvxmwvWcz8Av8dgk4SgazcMQhrEWaetD44AGzKh3TueohEAd8A8HDjKR5"
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
