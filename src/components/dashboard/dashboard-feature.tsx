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
    "4cRPdXzYqG9spGB9MT8hqek99SybPNS9f2QS7cTB6VpUnQyNZAkUAe8aN3va98f4tFdXrTfS7rtp2FAM4VWD2wXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXr5dkHMT6Zi8uo7ucqD6L4HYn46czZxAYY4XV6Eqp2Ue3oNbDufJQ7hea1md7HR7cz7bWneSfh6rG3o5f5xmRW",
  "key1": "3Kh6fz2bn8gfbuxaixmsS12fwrULvrrQQdv1xPdYr1vovv2C7sEMLGiJrpgyfE4L1Gg79otBuriJ22LrfPiBUvA",
  "key2": "LhSjuTELFDJEsx7f3LkZ42eFWQT6XNJoLbsggUvo3SirtxoxKWnuPD8t5JhQi9YLPpwBj5kJXhjjdFhYSgT2SeC",
  "key3": "5mnsBeBjJvxzTdqhrfaHeZMv3ZGctMpFjqj2WzivWWCR5B74h5MbzvxhTpBSQyPJTHiptQgAh9kiGceivVTq7fSF",
  "key4": "2B59HPRRkj82KgJzbPVrywddGigatQbjttvuxgDiSeYyR152okZzBkASCqqbTA2J2mAQXZB1ZcxuBcuKW98b2Gc3",
  "key5": "ZyVsa7CgN1j96j48nFR1Ug4Chj1HU5CCwZtm9m5GUo4iFHrV3NyZJSZFkg3Xm3nqZoZhpBYiEjsdhRxRrYAKsv7",
  "key6": "4RhDUYCFkYQwjEJ2ZBmMf2Ggd22GTrfdrkZxWfcc28sm6uXBzLQA6q3JTp9pHDgmH3emNx6vgVLrHARDmTPM6duu",
  "key7": "zwk5AoEzhkJeN34eGVKMP6sub6yUM5359qwM48QdvYb7gCsSfKq4qM9SMHfY6AdrvZF1u4wNwYpUcXXvSRDD2Hz",
  "key8": "61KKR8bCUiJ4gy7F7zS86EWhewqFxcybywEYucDXJwSwBMp1EAhP63o47gZcBPYv6MPJa92FjwEGw9SGyuyCzHff",
  "key9": "5zi4G97ZFNFLSvAF6TPLNcBgcgMPQEaC5dkbUZ9BEJnX2Y8i2eCvXnBwruEPkHXQP4gRHJM1EaNqfAZRQ7piARrW",
  "key10": "5e2aAH8avzx1qGQnJ4M5hggdpV6E1qtNx8c8mYSzZtCVi2UY447thW8oMLGRVxhbw9ttZXb7BtQbNdr46UFkMVFV",
  "key11": "2AE2ZpHueQAq1LSTgm6GaoZZMCybhQWe5j51mPCsDncPuXwTCAo9rypo8XmWz9edyApLfaUdXZYa3ryRTujZ7yo6",
  "key12": "2bgd3VudNECTWtg5cTREBr3XGTUMVcjrGFZNLd9yvTfnRcVpc99YCW2UDGUrGyrFnVdAHiA3LEWKzx1gCn2jd9hw",
  "key13": "5XApxa9eFbztuRSZY1f1tQmRQZe6kfXr7byGsUjKsoSFZnvFevLov7g1KhhTCWE7jSD9KaC3vJA2Chb44ZKMdPqr",
  "key14": "9GRKhfajfHB5cF75rCYnhsdV6NczHLHtbTpoPgR9SqGEuvBebQSh8Q3bJd5YGtanfHoKDr5sBs3RMUTLnwQTuWk",
  "key15": "4GqxvwnFB3ikLoFMT97o4oMuJBRcoLsLBbNkz8DRByVPA48oYuLwchw5vgGvX8nMWsKZoKED5FH8m2XmNqsD3Xam",
  "key16": "5Mmi9gteUNNsU9yn9FX4Z6cVFbqjqU5ko1GcYbqT6DW1P7bjntBpNoYCBa2TwSbD4ZLTbeLEJuf87BgLtRHyrZzY",
  "key17": "A4WMxbSt5Xuc8YxzYSBpycusGmPcoNcyKpzPvmm4kBcDXdyTY4kR8PAMYsLEzstnP9h6XDuXWYGwcQVoXt4htrq",
  "key18": "498sr57BgAVKqLgvGwVGcMgfzv3nNtwW8Sh1MgzJcURjaFqPy418r6DoadE8FDGmZH41dYd9KdHjp8uBukRQPpZ",
  "key19": "5rwb8Q6cc8unV19tjnjHSLtgyQhthjEaakGZkKRUQRzov1eg46eJjxwbQf5LLnf5rma5R7gBW7MHFikc3Pkx9Pnt",
  "key20": "4V2JRgHaGw6SkRcUJoDSh1FbCZYRxQ5WYMFUf2n4bbPkjKpRwCfNF7XpYUds4PimU6bUMHg7kYz7ZCWMeJC97skj",
  "key21": "2J6An3b5G4f4ThoZUy5cbFcPTjzvVGKWBtmfbNMXQRjPTnqAYmmGaRTUfVHxqrrPwCMKhj1A9CjQxbWbb4pHs8kZ",
  "key22": "4tCtKNS8gBSf661zMDAPKD9KCWnoaTFnUc9FygxLChGmN2yzQQPCanPJZ1nS2DLBLELRU1ivfepTv5gXjZthQi6P",
  "key23": "4rjH3uuinsXGW8nWUum2rujPg1aijA6LqZAAWvtrCLhpjR9s45iq92ibFrebHhciEGPBGE4WioYBpor1DzJ124at",
  "key24": "31x4eMndo1YmdNNEbpQqxG4r7fpRoTVqwvrANAjw3sBJnFTKysDd6YFLMXpRDr8HzZjjogtbRXYfdumNHS9QT2xY",
  "key25": "396ALVozK4cUhuWsUErj3FMJ1PBLau3UM4hzMu9acTDjYMVb1iF3jtsUQfbB1rJimxreJSCVbdCTJ9rksP3DkmWr",
  "key26": "5dyzFnmrz2Q9UTJEcc6K3XbsB3FFjiY5UZ3uzBBtR5mn1zFLvkHqSnrZTJv48TQ5wfYXPBcTUZSjoAUcKXTv7BBq",
  "key27": "3bHGhoPVun8dDsJCqKZ4C7C6684r2qBEfgcErpVHg9bUUCimvziF772v7kTW2YMdTTC1Ta9E8AHM84Nx2gpy3swf",
  "key28": "26LfF9SZe8ipfQDRcX9RdcB23MWQB65cURv8SHsa6XFyCgNhFFy65gPZQwVX4nz2R144gdZ6g6HJ67snCum82a7e",
  "key29": "3gYx8Sb8kXxZh6gbmF5rmCgJE5qBsPEG1ZB5Hyitm22xEz8dM4GspxwmGzsqTx5ebczLjV6rnwvNaGVZPqGJQisR",
  "key30": "4WSgKq29kMHJjKWyPa2ZY4kQdym9y7C646pvcpzRkSLkA9wbzkcvSy1DRXXvo6kxS4HyWMNxp63mhGpBqNxF9rat",
  "key31": "5Hf5JeB3HqVepYdTymS8nmn4ErXw5BqRwkrEjm1HMoZ6WqHsz8AoXbxTtLB9KnPbXnJUuxS8bJ1EmYGV5rNqyH5C",
  "key32": "32piQHbqWZMcSFCioLPvwBcLR5fvdrs7PDemDEg1paQS6gewineUupMU6AHP5xBxi3ZNDw8m6XRDfFFCktijndFH",
  "key33": "3dG7Ae8mm2jjWZqxKof1s8YDQMTsXmcVGRGvvZtRB8XsRkA77P4EhKaWLpJK4wbUPp4r5Dt2Ngvid3q8VuBY15Zh",
  "key34": "4SLm1ziiy685FVdrT9QHNeKNb4fmeaPWGvhmEhH9HHCxjADCYTqZhsP8JFkMEwJHiEKrtmLeriDTTu9EVQF3mWte"
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
