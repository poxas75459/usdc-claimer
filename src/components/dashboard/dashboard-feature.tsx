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
    "wkbzuPP8nWGiyTCG45K5WbXhBzX2ArgwCFdEo7o1t4fXsJRWdHzYmu4XYSF4XU62cuTNG47ad4oGojEfVEmfUmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jegpc3j3epEhPmArtAcaSmjNhs132ookrHZzhVrFvsCMZhfL5HNFEX6GBqqQKwLty3iBCDNjU3ZSWaWP9dEFCDk",
  "key1": "2hxtpZbh7qD77HLsh659bBLNPkPW1JkSz1PzVQEQXuXhhnNFufhqvWeHNGABgmEVPF1qM7HZpxArSoKDm8UATvoJ",
  "key2": "2jNKSYY6tAK7ECxfPfsTyyKhpCp49UD8pxiPPXhTp5mkG2ojkGM3hkHgyBVcX8pWoNxdtb3ZCccwU2x1mqxYRECU",
  "key3": "3RTgNA7YuYNi1daZrausL2Ys2pGGe9qnov63U1JMZfgLM3RZYwRoY1cgXD7nSru2cn91Em3KWAXa4J2w9zxBG4yv",
  "key4": "qcQJjyd6ZAF3mtkcH97XghDd6eJs2FaovjC1VSLfEd5mtUisLiySsEfejZMCwuPEZKyagvy2jiwKES28ZXLESL6",
  "key5": "5KCKChZYTeb8jTaG1Afhwttqn8Fv4fSWseHjJEh9QsqmqS67D7q4ApCXLx8GGXSgUwGYK8ekm8aTNtzhNAYa493m",
  "key6": "5GWsaL4hRmgx459pQdHHE5bGyKJ8xYdXXwrEyzm5MCWdBudVNMnpuWXsciTkFRRRPCTBV9iEVygxAgmendmdeMRK",
  "key7": "5fHSiuqf1uZrfK7ZiRBkrPg4F714WkAxoBZhWVAjW1Qj82fjEjsgmnZ6G31BR6T2nvsCMeYouC1YY25Jnmo9cFKo",
  "key8": "4oTELpNSXTf87EwovGzKWajG1sjDpTyMpVYaaCWtuUnsobbf9MbDytZHWP8JrR6HvZotLjTGzrNVzHFYUJshYx54",
  "key9": "55sBEFjLpnSgay8GGjiv4aabGrkHz5NWNioddVhakDgxizQN42byApSf8we58Ct57WuGo6ydbtChM7KEhEEH6K5s",
  "key10": "4Z6kZyjchP3Jh7fBYEBgkL6JT38Zr1b3L9BKve5ypBwntpcZYPG1vv9kyTAPkSo4F8vJwRh6ZhrDBMqvP8fhEF8d",
  "key11": "2P24gVz2jeKxoV9to7CtygfMSdxZ7UXYzESj3uoyjD79sATvwog69p6V9StnTr4xoeJYho2g5ZNRf2n2pB7787j7",
  "key12": "5mmmwp9DpijCszstq3hGNx4SkD7U6kFY18ea6zCMEMQj66qFiZYBhxbhhL63x3kzVwjBd5NMdX8DEM8xabnMB1ds",
  "key13": "5GD5rcCC6fe1p4iK7ogCTpvhft8R99y6hNnafhCQdBr3vtQZAqX98BR2BJmBZjTdGVWDPQNCyH3CQGLBfB8hU1xr",
  "key14": "2SSCyers47qWMJWUmTqHHdp5DGd7Gk5YEj6oWFsbbJGA8e1GkBbeNAny5eziBtahXC3rANbsfGuYjpFmdio6myJF",
  "key15": "5nYNTPZaFQw4pTykKD1HHTHoTmrN3oBr8YcXfWv2BaqeAEbUhQPqkLLgoT4w85ucKHytqqgEftxYcR1g7697VJff",
  "key16": "2MJzMbJmvFQqoVee97fUfxFR2iqf3QZkzbodosTCY8rDEr3zDMRjgPjyxgJDC752RBEBknXLuSp6ey2gW9qUBZ4x",
  "key17": "2Xff8etbLRLxm3VyazVQdqYnfuyWe83sYBVoNw9zH8VeYTjcHG7pa3bzSjq6ZAVVDNxQhNXogpP5mLcJDWQMNNHn",
  "key18": "2kgzzn3zCaWvBQYNZGndiAspJHmxroJxDsTFMcKSsFsXuD8BdJjDAd1WXu3ph4d6uM9bim25r2zc9hWzMSQ7Xzw8",
  "key19": "3sgJ19ZsVggvk8bWA18JW8QiGtELJyqmKrKzUc39xN7jBuZy7D6Empx4eT6Chvmu6VfD6sTC6dMoRo3e9B6A3ekT",
  "key20": "3E699wVPNMnF3sAEudgsAzN2YCjnU1eRdsNvHVP9evaDBFXPuuvAYfruKPzePRVaRsWFkswn93ohsuaWpHkPRpDb",
  "key21": "4Fd6mpLK17q3ydommY1T1thEZxgrHbJPpaHFnyUWVJ3HJjRsVW4bYh9HprNkUnis48F8nobX6RtMZtnvztgCmM7",
  "key22": "KA2MzeJ7FoUiViyDYbWFj2KjGSQZMrRvSfjT1sybSZUhCvyZGkFnB39noqsMzvQHpHvP4bqaFxsgSRS8rE5ko8Z",
  "key23": "4EkXc6RR2Gf7aFNybXsjWP5Gq7p1TokN2vFwMVuPwffAp6gj7Nbm7Zae211J8cz2YFdp7D2Q5MZDQWt6VRGxtDeH",
  "key24": "3QJTYS9hJC3HCmF4dqRVcYzQoZ19GJEfHLYzn9KdvhAJE8Jz8tEUHdAym7kfTLD6BCMNEJygnnFVrtCsyaDVGfzo",
  "key25": "3SMGG6kNCfZKBZ7aWQJHU8QqXJ2qH6Husw2SAn8An7voNGvMAgdVVUhP7cHrDF5ay1w6HTXUqSJPykiXyDoxvhdk",
  "key26": "5JuGLgRzhFR1n7nCAV5z5xkkpaQBc5mH959Bu43SL2HZAKUHs71aDjY4XoZ17U8g2mtB6QVv9gTjWBErczgcPkUn",
  "key27": "NCEspPAXiybSNtU7j82znVazR81oSGAznRx2jQinY1yGPbmgRrtMUDDaCwDV65YBAYc5gpdLPn5rAaFBstjyum9",
  "key28": "2SmxMf15QqxRNdbmTLGWW3TaU41b2mT8YV949DJEDSo6reSqKsiZsU6krEesSeuUxyn8r3y4jZy9mZYLGf2dTpA7",
  "key29": "dtsfHkgsmvgN6Z4wpbAue1MGe53cYs5Qyg8AcLRdQepes69wQP7FdjnZcod5k2MNgHwtBASDJD6jcd4PMPzvj81",
  "key30": "3DLFNVdHY2zNyidB3LxptniWPuPucVCuV3apz65wzTyni6GsakDM2nbJBbwy1jaZ5yYGHkQ6e7ZKgTYqnUbgkNqb",
  "key31": "TQrciJZT672MD7Anxu7FXcyMxx7eqAqebhXgFSiC1LAfgWMrAgJVh48R1LxkuKffW58yrUNqNnKxcoqvpdvo2Ej",
  "key32": "34cWe9hkzwU22ymtBSkWHoEB6de5ziCv1n9CqSwSvFZgCL5pL8f1gR3ts4eXYifr5ogSEXnew1sU4LdEvpXmcnL",
  "key33": "3163jjQkECEQ6U9gve8EWZNSafc1bX93iz2DMtCA47mcTjx4tkCRxVm92gsoLCXSbaSsx1yzKcdZjsJdoTcxh6qV",
  "key34": "3dJDkqCZZvfXWBT9QxsNRf9NrTbcvfzPxHCMgyMtWekDhxhpEFhFdAgkRkoqAx2LnVGkm96HmVWFcf7cyEfYULcH",
  "key35": "Gus5W9tG34MMnEU9gQ6kTrwuzSM6p5YaAtisThcjmLA7rgcSSz3Y6memUa2VK1B6jpn41vffhqTicYkrGX6hLwq"
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
