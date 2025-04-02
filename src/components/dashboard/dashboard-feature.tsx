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
    "311PVVCMvouq2jQqa4jydj5ZUWPqsyPZWsF7xjJ1myxRJPm9n67EqLK3u94rcMVCsbR5FPnmzEe6dMH18y5eUccN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BAoBfpRRdyvMqHtJbpBiHCBqTWjS94W1vnsGgpw5HFMtJW2Ecmfyxivkzqj6mabz5zjnd3iuXxpiLwTNixk8pck",
  "key1": "3pyhFmvB4u3aHCkXqY5N9g2t35Mt1oGhjhDucNU3EBk4u1NatehvnzTiBvnLuawEermNzgrd2KV9dN11j9PeQUNi",
  "key2": "XatfEWy5EvxHq2ejnhF6iJ6EcLro22WaFHPD79FZS8aTt5oca4tGg5xPZZjb2XBSSuhM9PtKcNA44E92cWUznce",
  "key3": "62cWcmZRkScKGVTu3nJHUGwrX9TFhwAH89U3XFUysBnFu3j24ZCAQrcfEKKThyhM6m9aLfco5z2taDFk3Ja2hV6d",
  "key4": "28w3FGvEwxBXnemDE27LsUfdQ4rhcwp6fixGyVwXaYiK4aTEbCqHrbXNxhqz8JCYBSXSZtGY8MynV2z85W35U6Xa",
  "key5": "33uTSSbwjQ7oa13jfsp6R1NgDQFV5jxpaR3Gbg7WQFCzbE1eqNgWMYi4As7B2vkDaDSDqSFq9XPg9nPSRZab71N",
  "key6": "4oyg2Zco6oJiJHSnbNYfdW7eMw1f68farzVLco1q2sWmTyUpVBYcWzpLwTXn1c6XPvxL3M7wNgra4Stq4f4SqP79",
  "key7": "4kd5qebLaDvCEAFLGykD8Mb13xV1sjMV2TzQN8RPGvvigXUv4n5eDLeZuM76b4phdxm2esgaZ6oQF18Sr5VU8Fx6",
  "key8": "XihSF1ZXkL6YWiFZQHADL9Zz56CHZbcXbwp3jNCehkxbexSKirYPjdDE9aErTwY6vR277ZFdRfPozwkV7ix2Wgc",
  "key9": "53B3Pgo2f73oLv3UgXoGB99zbJ76rUFkZvtCuX9s8bXkwqJ8iGF17PD8PSX2xyJ5weYVJNVt5Koe73da4hUxbWp",
  "key10": "5vCRYESNnvdwpUfP5sgsXZa3j3Dn42g9DXjKL6Nkc1MX16kjVujeeMrX1DYYHcjkcjemRR1rWKzi18Tu7kJqPJe6",
  "key11": "cDqW4Jcb1jJRWkhDGpr97mZL95Dt57UWK8mAYrij3YSfvZDnJMGqwEZVwsj8CRpM8rZABCovkoKNn6HGqCkTPDv",
  "key12": "2UhJmUj2xy339mRyzfEiWrY67SR8rHYSQLuxVTDpd7nFRo3hDpktjzLFh3VZ7y5jAssT3LitZ3NiWmqJE1dXmNdx",
  "key13": "2orSjCrJ3fEdfjHELTJUXT5g3QejC3VEewVap76M89xDoSwNCGVbVvntLGtpefn4X3ZtJacFizF1NSdhLeRjF28w",
  "key14": "2LsbXUU8t1whvpPZq9Wa44k8Z37q4zjyUenghacCkH4EjzvkRWNq1BHUBepymzbQAnduxHcqocS3aS9S6d5zpR15",
  "key15": "4tapoaeicqTRPcLgkgy1GKE6RuEu3vFEG18VZeeKhRzD13iZ1EhMxbL8jAm6sobgZdzFiFjrze4AFBSXvdmH8nBi",
  "key16": "5ocNeBdtA1Wy5Vo3Bsc94MWxLSkyrZk9e8iNT4b25Gf6cyg2KQGr5QbUiUXpZLZLGBgLpLPzyaLFRgGt8UdYDR87",
  "key17": "44jmjUMHfV6AuKhZftLwFUddaWgNkhZmKjpfhnkYVxiuGsuVAM1cJa9oEXFJiDKCLqzT9saLCTAqGY2K7df71F5V",
  "key18": "3FKTCfiGq6huT81F2aX3xd9MXseyCXebXx9kVLuCNYmt7pXBdLfyNc13jqytWhHhYpPuLdTtY2Sj6GubB9M6Ayrr",
  "key19": "5VC4uVUH2r875ZVwhiMwgtaCi4ToT6NYEmoimPY2XeVinc6gKCbk4VWJmyDaftyMW1zCpmdt7o6h1yetbwAzeVSL",
  "key20": "4UBeVmAgTK52E21dbmTwJg2V8wat41a2pMgb9gVm5W92z2JZ8f41bijV7NxLvwfkPkmzKYhjUXTg8x83Aw74NMtX",
  "key21": "3k1orDXxyreNWs2BFsXHprzVRtXPzqoi1g7A4LmYJKNdWiNXEQE5jjPpikQatGPcsR1UPRFndx3yVP9rnxYzBxLP",
  "key22": "3nWdsmQhLXeBh9iW9sdEX23Ue1CDFJfy6y1wFPHyvT1F9f9iBRLbGWnHNYVJfezqv3KBgDahHUUBuVNQdjq8Ed86",
  "key23": "5MCTiJJTXYzmztgjn6qD5HtED5dachY21RDGoKZCDCAaYbXQUJrYqBESLCA6JGarPaPaXzW6REFQiXh61bwuJW89",
  "key24": "bt3zNGQwVYvpxAK44PgYa4S1nCrX2WBA6DphtQFECdWcFhUGZayvHTtYcw99gMZaUyMgXCQV128ceeqELs8cw7U",
  "key25": "5Cfw1MjV2SKo54LLavCyYMfuHCPzt4FQ8A68Akkb7ixXkF3iS6EVnVDKfgarsgTMhEYxFunWtkAbt1UobqDX9YRL",
  "key26": "5AEFnLmiGYfcWXAbTNRxF8CeerWKNKvSqtDHHRV4vpz85qAcbcxeTyr5kRPqSQFF7GLYCXHWVxtqja1pYpS1RefY",
  "key27": "5kdNgYyRy2bWk1sXWiYBYnz2sX7K1krncTz7eQFjF2YxzdHxacRoS5gigbghAT5etZ7A1qunhjUAe3shHApS88v5",
  "key28": "2rx59Fx7MfWSckRQdFzCMo9t9RG9Nm2ry4FYmAprrdWTPkrv9n3suPFvWbi3kdNDocb7QhW8ypU8J4i3aWw6Ztcu",
  "key29": "egeg18ndgmFHGcmGXDuzb98V44T3uVQdRna64y1XSGRjHwSnpb5cnsX4xxVvN2hWCHThtzkK9MNxatjhXHiegCd",
  "key30": "4eRPg2G5ds5w2CpWHhn9dYM4uLUhPNieUJPdWYtjoKvFGjcAaY82HtMNVq85zKhkAeydrWdaZ2ibuAxztJLvFgdV",
  "key31": "mVcN3PY2fWPqhW31iHQLJH4GtrZekkCQ4KoBWJknXGBAAs2BFqmvE4Hgoe56oMoVXRimEr33kVAu8dCviqJziwT",
  "key32": "3DvLEnv2enMRhVqc4J7xuLvip4NHKyLmdP3KdHhFdWZ5jtiE5r58Jdmw1cUPkJq4sV7AohS2LPhrJ4fbzZFyQwPb",
  "key33": "65wxcpSj55t3P599go2o3WJbQ3V3TocNQsQPPwqQudJkuBBNoEL365WLzfH3YcUq1nBvu7rQMPmURoA3ackLqe7J",
  "key34": "5e6wxQ7Xn3gzKTfmjcACzQ1ATbr54TQBGMMEvofEcxwuk59azzoDDZUhq9cPRpdDKbD61eoSYZm2BR3RnfMdps5A",
  "key35": "2VvtUmCBm8weuzcrcqGKYdrQ3y3phZrZ7ax1N8SZwMmb4EfhdSWCggzoEFyMB9utBRnUENQJLbFSvbmvY1K6vzJM",
  "key36": "3EAx5itd5t3Zfh3wZR7eLWSUMtZhRcgC1veP1KgocpXREFx7VR8u8DkwFgbt4CckwZcj52v2Cee4XRRbCrzcjNL8",
  "key37": "4YYbQTWFSDAPCVFxrZdFFiP8DuNrqR8Bt1xLf7JbrUEcqAFXQS1tfKDJZwAxQvEJWJZFEatYqPzVC6fMjjYW5RJf",
  "key38": "41bodRg6vMougd4X1JSMLkGhjUBJ2WdyyjFPzBVYXhjf74utWpkMWpNYaS9n6ubpq5YUb2iS2ZwgpaFiEG2zbyiM",
  "key39": "56S79uhJkHWk7usZTe1Js9Ltz42WfzYEVui3kP18JBH5Z7HP1Bt6auf8jEefP7wT3wcVBXdyDbBBY6pDmZrS33ZY",
  "key40": "4tNwNZ5ALbXtSsg4KV34E79fi5poAjG8Vjyut6fVpWBADsA3DC3mAtCeYiNXEvyq66TGvXcpzyDqcv97Yecf5Au8",
  "key41": "5frvYNSgU6tWJXmQzb3qNYC1uUccN86RrLnJkhJK2jzRbG53o4MLfsj93uiYUd7rDKkJMuqjct9xnaGWJTPYyMFz",
  "key42": "2RcG3whKPYNrETmW8HeVY2HZKLh7cfVcCmVpmURXarqj1wL7jBwmFNRLhRmSwvtrxmoqpMnPCR9iTDvdjFqpKqJy"
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
