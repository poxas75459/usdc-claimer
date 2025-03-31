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
    "55p4SAdmphkARp5FDF9jG5rjZTo3Y9xKRPnueAZvDqeURCsJ4tj2oa6yi2FggcY9ETH3oND88QVV3o6HdeNmqu4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwoaBB4Jcc5Vo4r9QGYS2fD7Pycn6JEaHBfgzr2JouGGM235WAEyrWakG29bwktScCTBnJQBx5cLcQMGH9g9rqN",
  "key1": "2tDz2zTqRMuvaUnu6PtFKTEDxDKpNa8HzSHxu94JsEoVQDctXMwRm1CxPLyPuBPQcMeR7kH77z7uR5z6eFHM3o7",
  "key2": "29rD82ZH1i1AeiCHi3pnp8pWmTvG2qFkxwUArQ416UgCnB4Zdqu3ZbDq3RDWGW6sLoC2vhWWnx5MRsWmSWaXdPm9",
  "key3": "2uzdpSF53UYmDWqD2s4FNjLKXVdXky3uM6EerAkvr6e1uiJuw1gfazJbcwQgMkHVqStPLphFyw6vL5y6kvtgUcMr",
  "key4": "2hpe9dNzFVvbTJ4tn2ozEd6K5nsuT3iMDxYCRTieLhbDcHXpqc6sVbnSiKU3i99zV69pJixYqLibdGpXqieYCpJE",
  "key5": "kjL7VBFEQFiEBwQwHjLXzuQLkorWPLdhUQeCSJaZMFp9iQhQcgq6SdYfVYBN1mKh5MoZhrnrjx3CobAzsxKyBZX",
  "key6": "5vfzcxLq68e4DWYYXrV4US3sSsCz3mJ78GXJLbr5iEYPiSqN9MZpNy3fKnK51VfruSQWAKwTNqjL5vmvQGtjAt4n",
  "key7": "kby6GB1NXHJNNoSthYEEZbnV9bdMyMzaZKWfPY181z9hVFgtYumpzBAD994XLVVeP8myhvbGAQomqDtueV9iiG6",
  "key8": "5UnTUBJ47hTs7QA62ejq2AKMEoDnyT5KaPL2QsZgVrxKJgHaFUrHnF3btsFtvMrMYXU1GPrbmArdVjj67xCqru7T",
  "key9": "6ji2jzwfEuUupUmtmefRpwANjnzVBbDwrvo34DawNdvyuBiqm1c8zmxpXo5kQqsYNYZf2bz3QaNTWT6zCSFctdb",
  "key10": "5Cj9MDD8Zz8ndDmxtCt1Ka4s8YxLQZjoiRwcdSn2pVYW1Jt4zzunmtfVcQN6z1mui5etTfptXJSgLu2bhgUnYKVY",
  "key11": "5cafTXH1Cf8nMdcHMa6GakiAAamCKaXchucK3WKpZaGEWM1ULtHEQ52Qb9Z52RtBgQPE8ZREhu7qxAL8mwpcsxxE",
  "key12": "44KpVPUApQ16644YUZiXi22nyZGFtzWHGHWYrJACB5YZ2vMC1CnbCtdJ7rxBgUYZEZ5x9SjnQaE7JUg9tdi4W1Gk",
  "key13": "2gSz6WcMkLSADoBUbY6z76jd74Yy3tTyn7sLThup9ufP7qgMUXTfZhhot8HtVt6S6rKkqnTPuXsVuzT43r5ff8HZ",
  "key14": "2rWgHqpiTiUoNLCD5uHzASNeumZzueCS3tszJSszF8cnRg6xSxe7Fzv4sNTC6iZFaSUwmc5yEghcmB4ZpCji4YTj",
  "key15": "3c4oWtkMyY76Pz9VNDdfNNwv2hYagT7zVNXRdaM3Qmykocr35yqPcQ7zJHunrpQWhzyuPddWme8jJkjRbjBwxXbK",
  "key16": "5i4HiG9DHVYAnHosmu5CdF31Ju1RMSovoALeFdQcgd4F4wfHcYbJcRQGckqUZ2cZYqUZiJMyHgLSXsWASwypKTRw",
  "key17": "4Z44GJDByNQqhrDvHkikdEimZmS1Wg8xNdsMNVNbPyxskfNayUjGngHZUPrfsv7DjRh9H8UpQkYhRDk5m3x3epEM",
  "key18": "L8ibCCHpp6xNSLPtoa5wRrcVgiyYhz7vMJCP2XCMSZbtTaJbo7n6ijAHj4hoe4ZgL85W8AVsLt3JmpbAkhtWiqW",
  "key19": "2jnhCtKHHYqY6e7QUcJYKBm4Qz24r1LBqaxeRkgkc4v3JSMijmkz1HFuzbmBnCvW7qubPmsyUAWWUrWjJi9HWkEt",
  "key20": "3BsDVbZw6zSvqNaTc532WVvahMLcbWBx6NpqQaVN252JhhYbu1hVCYe9Wyi6XVvYE4ejs5dAspruoaThmtfEp9ym",
  "key21": "DkzqB7FUizogaiPXwwMNrfQfa1euCaYpXqzYx97TWsMKJnU89uEhKtThtUgRHoCMCV6UEtJEWw2cvxqUoM9VyWB",
  "key22": "2s5qdnjJ47o7pocHVX1GTdQkAu7L1UQzVAWNWr3x7cu6VPsEHMsudGBTtJpJSG1vPd4ZWVH6KBCUwcTjBWQ6Dx3m",
  "key23": "SdedpxpEH5Pm6NGKbqzMfP8xpi63VURcWPSnnKoz9ryZxHGR2FCCbDyaKuYjEt64mBgUZYS5fUtWx6TT1jysGmB",
  "key24": "4kEXA1pk48vkkby5f3uNYrTsUHdvLU6wyyKRWrHnqg1TDXUH8MSL8ncy8j1sAVjMZwPGAs2LzvzmPYwsEWpBPRwx",
  "key25": "4dbvfrAUt8hfwunWtu29JXjpK4VqYcJmyo4CEGUBaPY9hQb8fw5Hy3iAeroXQXomZfCNMAyU7sQM6RPg4WmKUoYG",
  "key26": "GDPPfNnuPcCfF4BtTxoqwMZLYVphL5TL6qN8CyEKya6K3aNQM73NFRq8Df6vhFtxEZqhPEecqYpnJxHpVNR7GQK",
  "key27": "4ZPw6r7ZxpL8nKV3K1FmdHGQeV6jy2KTX32knQzbQTV7DmaPdDBHPLtjxeHU4Gnu6Hs8FfYGA93HRYZxA1ZsBgGf",
  "key28": "64zZ2gbVM9jVCAHeyfHCWBBFCoFERoTxMQDv7QoFGumdLLMt3nzYqMx7LUavoesy4tfFRWcteoWk9SMKR2EjLUqM"
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
