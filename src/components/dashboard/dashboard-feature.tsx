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
    "2mix5Qo6Dom8ZQ2LUHVpeQDTjmRY9Mv5GDKdB4t6obRfvq1vGMBkL2Pwm1DR1AfUmsCWUaPwLbg3mGvtcxaPEaQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzLV8xDu6SPE3qPxznm9a551qBexfhvepduDtyN9W6rRQLmWRcTKWgxMHWLMZ6zFbytX4CmM5ytoUyQWFkkZntt",
  "key1": "31bbuvRNJU8azipj8yTD2uKRK68f7o4QjBFZzxNTo6uPpkBbri5EwsPhViwERz5bnFnGnE47sLR4XbgwfF2CHRAE",
  "key2": "2dB4S8a1SiUYecYMj7GHGZb5DTYkjYnMumEiP8RxcpELetk7n43kKLCQayCCE4t1FpjcHVPNDZXKY1dTeTNLt1sy",
  "key3": "3tBYWjYDYDAPNabe7ZSciDwAB87ugMGcJHChdWdGtfE638nstpjKxvnNzWSqo11T59jhbexCC5iK8ysprfLC8zoF",
  "key4": "AMT4CN27nXFcLNCwd2mdNassxaFgYvBk5DUcDkbjuNuzM32gosofmnAt1mnVQnbS5tzHg5NTPnMf7WYiyC7GoWb",
  "key5": "5Rc1qpQQ12hzFFEKTcpjvAqpPnuPoMjF25bvQTvu8qLSsyppqvppvLrrGM1naByo1MzcdtgF3aE3G7JoX2CXamPh",
  "key6": "2wg5xocikm72rR7RFog2tAibfUdcRy1pVvJj2j472ccXkggsVLYiV6hVS3rjHrzozwSCC9QHuuQ7ZGqeF3AsP4WG",
  "key7": "4AUvoVQooLgLzPJNiXKqvjaL28B4tmBoyBKJFFSa8dm3fLsT4iqaj6hcZhppfpqQYfePpwL4gKqjtyknD8SB4MHA",
  "key8": "oBPigNbCBU5ottX9kCJHKPt9W5aWtpRS7oDKMGmK8nughwJGRCR2UB1gyMTor676CvPTtVJ7bFr849mHcy8hdLT",
  "key9": "FVRCb1ALWG31mgXPmRBd2pEf1Z7QSXRaeB1w1z8MpEmuvtW5JuHgLDY2UUNJ9biDtGVuHZTN9uk1AvHwjtY27pF",
  "key10": "4Snn79wvwyXi1s86Gi2aVMmTgiYAFstYfaxoL3cWDzeUTnFJMc78wx7z8TdsMM2htqoaqM4KQGEVyjqJmnYLtiNY",
  "key11": "4fdYYD5J2tSZRN2d31MzBJUgqaxS7icm2icQRbcXodqXebTiyTpYika3qCFDSYoVEtGWewm81PLPcYsmTgfhESQ8",
  "key12": "5Ym1mciyTUDhGQDBdcraVBngVnEutwSbEkQhYnADFF5QcrDa4KB15F6Kbq8r9CXVL9rGyHnKKToMVLVfcg5EwYjd",
  "key13": "5NCenKRag2JMyQjyzfEiVWfUH73Fv9Z8xsvA4ArffFxHTxmd7SDnLYfa9YUsSmwGGvzuUk4ncXUMm3y2G3edBBhD",
  "key14": "5cjQYmCMfS1FmHSKXWkeSkeZHbwTZFX77vsd5nXrtA4eUDEq5iJE63z5g89WBdXZtTf5AsTDxNXjnM1DDaUuqmUm",
  "key15": "TSfDG1PSASGpa3WTjYK7wwJYb6VKGypjWnH7uCHL7Y5UCMTtAqn4V81HDm1w1y8RQvavjjmqXNXxkfsZio1n3Ey",
  "key16": "2CE4xAbCXb6P74fhzXdua4JNTvyK6SZHAUbQwRgeC5mTC6Pku7yUA1aRNheVXeXD5M4CVNr9ApDwLe8JrWwZ3Vko",
  "key17": "4FcQaRE9EsyNZfFijEHgsnvpKnZoX9V2xK2zhZvJB1HrDVXaVATkn1tYXH3Xzqz8r8Yw3rehJPHbGMkZ3WtWgXRo",
  "key18": "ECf1L9GB3QeoiUxD8iXcBfQ1ZogAFm4zcpRC4QynoHYiVX5MHA3aSWEFJbbpA1soTyjbBZPB4pejrG2PsEYx5tN",
  "key19": "tPcKfA8jRxPvGiVKNnq87jr57iLJq4GYEFPLLFvqygWLHnM9JP75dn2KXutH8JbpumEeUZ6RihgNwXu5dcA41gc",
  "key20": "qYHrk4UTks6i5YEDzzeXpXyNgx5DvFvzBw75fURhxVX9Xf3LtRTnDH8LvsdmWJmnRf3iRp9eB7ifLT3hf5SUPF4",
  "key21": "3oqnDJkDmWnh6hcRFUHxyPsFVPupxG2YMSoFiWZ2fDEhdawUWSVnvCKSGAp7uGC13rDx3DvTC1SRG8x1WrzQCh97",
  "key22": "MjxRWUHDxRHeoPaNSTaSEjCkiNiNDA1a7gS5efHfJ7grrrHkhGTfBWRZUkZtpz4Jf4ePh9tDDmNa2sAed1fGvz6",
  "key23": "2dby1AeEKTaDVCKqdDUKkzTFwTkysgewAAzYh7nWnrEBnDczw5WkyfyaoiUL5tHLzrwd2pQ1oYKZyUvMvx87Qpjc",
  "key24": "49b6Q6VqGycnKLRRVgQ64vg7vqnkh9HDFytuV3S1yRZn2ecWZVwoEELMr6h3MZzn83rpgnTurzoARdwP6tpTdtgK",
  "key25": "22Ejwh2iP15deJqV4MfusKVa1Qyxu899ySEYqVcHUBU26RZ7ZAuZVGyLcwTdaSjHjPnWY6nma1cF7yycR4966aKW",
  "key26": "5qb4bLpsGJ5PfYZXyiZXg4i8Us7VcKxSTbPRfNTLrmo5LPyxvvwPLGeDBqwj1DYuf1Z1jDYdzZr4CJ1FgTFpWqdg",
  "key27": "51sL1uZ72bqeLAmsfEJ1uwyhiZk1ZJ66jWc3gZ2CDmWHaD1rk8Qh26bjEka9TZTnqcRzkZ9xHZHxLMezCRQwQrxB",
  "key28": "4mGE9dGPXzYVpdDHEM3GckXA9nFhUTzgJ62ohx7PcXuqs9QXQHiXUKkqgpV5DVrEeeWYbbCAUXxkocqsx7vXY5mB",
  "key29": "5K8ossAjTVXXRQrtJf6W5wTYL8ZnU19D6h5Kha51arZd4gXq1orknnMqZ7HtXQmeAHRUYQLkaBVGZM14DhrWLUsf",
  "key30": "5GbYgmK3CsCraK6Tqqimn7g54gH2LhFo2Wn3mri8bm7tQcchBXCLWknq8DjLi1rXc5QQygHoFDhunrrjfTsc4JmC",
  "key31": "4tYLQRtP4fgQgimKRHzKWLytjbpGbygE6oxcub1d5pkusQv6bSBmJKK3868cARSeaNGBeG5GtPgMs55CRcytysgF",
  "key32": "217aEHcPt3nN99YCvUcEnTVWmPsF4qMrZxZ5L8avykgbP4uu12xCdWYVmE1wJvy8EDAZ6oZpVdYGXmR5VGYB6mgk",
  "key33": "DnctcoMVoM3GjPT7XcZyocQ5nrUfuEt3dZj8WUcr4tNy1HkSct8patBjhyrRzihA2cXn6XTEc1okraUYEgD2HAV",
  "key34": "5tFwX6dhxpEakrvyBSdPKZ78NGzqtpHANZajHFNqTi9iifoZrx6q9Rz7fXTYKDtJ9HVtJ9B9aJTTZMXx6nkWSJQu",
  "key35": "4FVvfVULtcXwNJHP1dK59dR9shnwwtdU8Q29haRzrRccBwdFzioVBCmX2G4cafsBctCr3tTaNpJcwBKtr1tcYVuM",
  "key36": "2j3YP8JRoGG3U4DxBTTNQjU67S7UrMZeH83nSziPBwELmMrpwx6SeRz5qmFM3TX2DSYaVcpTGKHJUoVgtuTguN3g",
  "key37": "jrDJrtSASVAdHDDqT7qYWXro7TBMsgkEZmuvtQPqQrxUfEyLPbzX1zM9crBipV1raVvekuf6Svuf6pFTcx8Aip3",
  "key38": "3dF5NamsA8WSUCngZyAreiQRhd8ZydVHjL6ybpdpmbXXmomUooxevtBLdu3ujDLUjWGY4W35yQ75XCQovNpnrev8",
  "key39": "5TRpkLFDtGioRKzZxsUirNBhrCSFwe4U2K13qbmH2f7bPf6HPSiNpD57rS9jTfE1FBWNoATthEBahSF32NC24Jdr",
  "key40": "Wk8w3XkMQ7KaS6LMUKF5QbxaWYQ9RxMH1q6WwoQJPHmCk1AUAFeR3Q3ddziuMk5NzN53LN6LSxwcWSuiQ9KaDLC",
  "key41": "51AFe5fahJftCFSES2iBspat7onzeEc4JAcZj2qWq7T3MMtaDwvoLVp6MZ7xtcbdLBsHBJpnWLgRWSSjZxZkJWbd",
  "key42": "5LzRBDdJFmbGpCXJcsUZBM4pJ81Ykac1XmG1jhbZpcXSe5EfGuHXARWyafZJdV87HUVedEKQ3woco95AKNEBGALd",
  "key43": "4AFBJEJ1LnK82aW458BHDGnEhEg6Gba9zcwK1AX2iwD4H5Nac8rmUbYdrtLBUcz2PbLXqhcR51myCop8DshENkBo",
  "key44": "5cPr5S2VWcRG56qrZf2PM9vXQGvgWSceiprs51hDVxPTcShfkZYncfdmD3T7TaWepJadFffvv3xA8qXzioUkYwpi",
  "key45": "5jMdRkhvJcVtVa1ZEGCHeWFNajNcanFFAgE7s189BSMPYj1aU9HPbnCdmAvePVyC4MCTafEe8YP5fWN4rN8dMfXC"
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
