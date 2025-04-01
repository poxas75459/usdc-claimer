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
    "2KCeGdBcBAcATuaovVgereBpFcRdjkJf5A7ao4P6ovY878oCqeMQt88tFdxyvTd9oMVeawJpd649zzeqwfu3oV7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gmc8rZzWLMBMUMdtXFD8z3i8ykyRvH2SCD5c2N1qoSGMe17z41LEB5aSHwRwZNHDWHgDTa1Zpk3Y7NiBoY7mVG4",
  "key1": "63vUPNmxnEdHQ84DkRjLgjknLAXwfbE2hP2bA1XwcGakjFQ5dSua4d92coUNC5rfJ1rrZyCMJ413SZUqnimKg79f",
  "key2": "4ynFm8nSeiVKQZiLyPngPU94i2DLjqtZ3GNfubN7ErEHtZ9JKF9LLNrLQMUsTyBjgyXM44zMRZjLcJumJb5TVU94",
  "key3": "2j8L8oAEuJNbNzk5goMWhWnvqFjWBETJUwzNwHGKsBSm5VoF7nYgNvQTmbRCm8PaAZBxheKvWYfKkQmE5kEDno3E",
  "key4": "7xESBV2o8yzZMMRuz16u1UsHFkrBEYv2amBPSgtQuyEVtdCE7p1wgAGNnom8g6MtLut9JhQJJA2QMFps7D13Skm",
  "key5": "28BaVphUXwf4aKXE6EEGnpy5CRxbSMVTNGRV9aaavrpGU6dU9f7qjfePTicp7AF5cvPrWAgdCzCYAa9Jpeh9pMtT",
  "key6": "58nQihpXehUy2PP1Kph7Z6inbv4zhm8pudijhBZDghLD2jtjBKYeUZm7ZcpnewCzK52d5EQsm3NcKbrrmuGSiMfn",
  "key7": "5ZrXvh4c3MFtRBurRyt54bLFUperw4pqN3eMJKQJSKuWE9t1HXxBZrpH9YeEzN6Fhpwu9mJ4YFSU1pCBQebjN6Tk",
  "key8": "rPp3XxvDcw2UmABXqrzEwfezmKNkRg7Zp65zJC1WAuk7r9UE4h4d4rjqLX9PrcNBo5U7cXvqzVYxKRbkrpr1zWv",
  "key9": "4bxMh6FJZGCbd6oD8oECnTxHCW7BQYauwFpRPVQmc9w5qbenFbyUhGMKjTF2xmA83NTzCwSaN8xgXSDzs3jjGHp",
  "key10": "2RCSzG8byAzJV3dTiRppG591JVnTUMkvZXx42eLGfhX2Naf8RkNYzEBu5C4WZ4YQLZXPFgiNiqK61gk5Hku8NRta",
  "key11": "3gvaet6cRX2U42SrdS1pnwNk5VSDhQBgWsqtLnSrVKv6JiDrTu2JTC8La6vw5h3uDEUttKfmCXKtzUZaMchUaL9Z",
  "key12": "5FCvR7fa5NKeccR7jnTZUNdZbeL8ewfri5VTasdj2fNgPaBGeE76MngZyH58qcKFas6K8FAuJbXgLpA7t6KxhWx9",
  "key13": "22osBKZDLt1cs2qBFYpqvvEq4JLJzfmno4WaCkm3otqceBsvEVemNiJQjcCrYwhNNSmwrVgRwiJooektVMX1qBeK",
  "key14": "5H1kCZJEtNcgVS4FkE3M7eXqgedMEoGBXVmRAQaNoUeQFTQsAjhXqXQRiSArAhvhH7s3YvTA1yssKZ3sCrZteVZp",
  "key15": "1YXC9Psbdq5uihzHDM58JbVVYqWj8J9w3SkapAxNE3XyFfJcjNse3iMaVXBqY1qFHLGD2TZa3HL77By7g5BHtTa",
  "key16": "5WCaPEFk8RCHL4dmNg9zy9ZyJ1f5k2jY23Vu4Cfc9zFhGizMskHMey8hir8HAcK7LcGctrBRnPWkUJSvwmpRdVTc",
  "key17": "61rkanawGGStTJmsVXD8B1ZB1stVT2DneDoPZmZn5oWdHPUoejR1Kb26b4iyFXnNN9WSVaHScqxFtABinfmMyczi",
  "key18": "5GBnjPAyy3hm1PjLonDqfeKboMcdTBtggQgSnQaGytx9zBQajAchgv8AnxxWrcoRxHU2MYmaA5Uk7bEcPXW5iz22",
  "key19": "5gQLhkkZxnBPLebhkZcQcUCcX4HPTBNKzUw9QmXmDfKxvxatp5kaxXHZhuQ7aJHuusn9AmxMoMhuHT7BSgK7UqpY",
  "key20": "XEohBRgZW2bu81BJi7JzSNnCVYc7mRWbkfUE3EbAxAohSUhf8JYx12gHYqwoGmsbWAq9939jXq1LgNW9tGz1YFn",
  "key21": "435YYdPKBRtpsR8t4dbwMsGR1pC9ZHAsJSHBmCXu2b3yy18QFsvh6L4RxjV6nUegzqwdhBrjZRFsA8Xrts6WwqWR",
  "key22": "13k5bY9k9hKo12227iaaSKPCSRsfH4vFFvUZuAVecg1SGmokBQHB1pexdDcyTpU9bpQJD7uH2yvSsL3vAkznZGC",
  "key23": "5pHXhbfq5yqGR2T56KgaiRmTZw3LfaRzJVuZfsyeA2FyRkbJd8ShqfHPSpm1u59mrTVnkP8pTkYNAeZemELkKrCQ",
  "key24": "2oVXbWfvsRra2eWPPRoanKP2cX5CvB9W9gxCtNW7hsQPaF2xCcX5rC5gRd8QqzezK6UP4TtAJf5Spp94ASM5D1gh",
  "key25": "4etKVuPj9PqZeGNdC9jHz6itwChLUZgiLFdN7CeaXckPFu9GFe32s5CVMtmyY4YjxxN57Wzb9h9twWieSGfMNDBj",
  "key26": "5tTHoCAahdxE5JkSvF4gvFt2XHFhJ7n48rRTFLioGUppfstiGSaQ2AFtuAscRwtN69DQWXikaXidVSod1BJf2CHk",
  "key27": "1JTEXgJoEv96w9zGz9zENfS9MpU39sPEoLxDzzQv4Pn9XXP417x4rBHEoekBEcJXRkvT7ZT3o1f65pMXR546iuR",
  "key28": "4btZhjSz6GJN8ND2oi74GfdUWYGjh6eEeJR4vcSMKWPQSqjn3ZJEhKjAS9UxRL2HiY6F3pEYz12hw5BaRuCmBGzS",
  "key29": "3GSBGbAYWMuGpHtkzgonXir5BEdPNCVvZxMeNBXwnKVVztoqPCifQ4uXuGhYa6G2b3aFbRSseP3w93fttk3KpxD2",
  "key30": "rzbyXBYXugrFSzqbXsC26fNxQdK4xZSn1Whokkw2WYsR43aFMatUiANHnkLLTZLov2rYxLCjKN7ptrVfwS72q28",
  "key31": "TMzWKiaPwG7fDCmhWbX1zJV98k5kvaTqsnCfmT7GjBYbJ74evwDkALYqVuY7JSQcozQGUGyvbzBTDydxNVBAVJ2",
  "key32": "2MPcnYAaW86ojEufoViDLi5L6xcSb53UEXy5kKt77dTWX2xySef9ghdKtaXiCENMeUkoTFUyMHJjNK7qJD9ToPT4",
  "key33": "5BXLV5aUGPAf5t3DaBsQiXPetkre4ydvH9p4uUrD2fdTJMXuGJ8NCFhk34z64aMSfSwd3Tn3nkmvc96U1ntyrqdx"
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
