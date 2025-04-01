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
    "3CQzvGxKoYyEpv45ZMeuxzKS2QUbfvxy9SukKLCmmn4BeiXEny3e4dhM6obUK3KcSDnwX9KHbxJEza9aPgmaevrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhMth2oezq9CUfXzUmcgCpmdRf7JTkWt3h7aaDtxLeWsyzVDcdkyCymMb934bCr8AndHcJos2TVCVKDt1VuJfNL",
  "key1": "3vNk1CzEsv8F5FnwGF6asbBfdFfT1kDxjcDbM6Y1yEVgbznqwEWqgaV6JWjqoGex6yUVJi5oL6cb8juipStnkFzu",
  "key2": "2VfkBXmU2aCh3ZbLGqtHNZjfbagXi1g7FnQKTwJ2CGAT4o52F5m4cj4S2BjbALqmyGgq7PTaZHj3YFDgbrmrcFtR",
  "key3": "5P9k6y7MLNc4CGZS6yyVyVAYYeB99x5bev5c6UQk4zSRjRf7i4Yi8TR8J4sjRhoXSCDVWfu29kmoKiKvX5n7QmVD",
  "key4": "2ftA15BVJsnUPRtKD2mDGxW1JNxRWxnWYe2J9peNT7HR6uV2e6UNTCSM5JXGCbKhF93oGYWptskdcB8zyy82FSbM",
  "key5": "5BbTmvDtzcBgUKJvw9tDZEpWXtdRgzqvjdkhHkizeerEGVUKDM8fYK4DThCn9R4eLd6cvybUT3ndN4n1uQCS658s",
  "key6": "5KrrJVNy8KWtbcxiDJP6NiXEspCXnGrvj3u22PfR46h8B33vx6a9xzNLX2VyVBNiWzPQvRBtD6kvq3fFiyDUix8t",
  "key7": "3eeSCTic2QARXEayAtLxz1GsdjbKnaSNYWSsPdmTumCiRyZkQ3v9gAUUZ7jMguferfHXQwvQzEnCEmXtWu7k9ntt",
  "key8": "TQy4JE18S7iqirBnFTziLH5eV62VjiST4ej6Z2aefdtDSchjduZPCwFwLoXN7NTi3x7jxbZ1fzPAvKGeFY5zCHL",
  "key9": "2pkc8Tyh91Ex3v6wBgM67Q7AfhgDgzTBXD4dZdwVaC4HENriUJtCfFrWX3iCxGoUazZr2GjRp3Y37qjn5ZM3Aouu",
  "key10": "smaKHaBrABMR4qCEpuegYacLhpSdTwBrmUsPmpGWRN249jD7rqpJy1TJNFCMYnh4PeEvMmZ1eMrB9TrrL3sYaDc",
  "key11": "2AgTi75PfuVZwzasnhwvt2ABBSzA2pt8FWfuQFY3bfHyeron1qwJZyoXdiY9o2jbfe8h4abQtDSbAmjoMEdq8FPf",
  "key12": "2N1gdDEJPymR4UvucUKR2h7bZevycffwLqdCZDhmuopopA63GU1wxuWqnd9bwv5TVJAH8GghJ4PPLkXF2bVyrNmM",
  "key13": "4zgswByA5dFemvbkNcdzXhDTQskCVSi7cwcxvnwdDxRKUnZoegYgxuSkQrWLgnPFfopMBuznEv9TQsbBeQ1pS1mN",
  "key14": "2a4uFYc9fXBjQ8Z45qEnLZAFxxytqYkYwH5da8P9WwtoYn9G3oETZUT3MvLxuhjDpezZj144gNgRM5mVdyNmDumE",
  "key15": "51j1uoS6mCnCWGAMrse3JPcgDRNvm9skhd6EENwSQUnACkcZF8e6QezGxX22fSA1pzRJw8NqN6pjWEfSU3RHApHC",
  "key16": "5PLKNbmM2Tq5qdNcJAZBC6wBsqHpM5F58Pq1Ne3XXNtcXVUiFe4YJguY3gQcrqViwLSG9B1m4e3jszhhdpPAPPUA",
  "key17": "65XAudKu8Qn5fnDD3SaAdA1b41mj4H6j2MHSq1tZ7koLTjHsx9cQnxetSQsNoCMrjksvZkV4wTr2QZQHZtcMUGsK",
  "key18": "ErBozxSjV2tbj9BBFHWa2ZgvRso52F7dhskHLzL8mzgZ6xQ4jqAGhS2635oQfLACiYZhK48j3tkDLSVFy4zDmPq",
  "key19": "3BJsVjeou3nU1vyrzYKyi6GPYrzHdjCTaQ7MHjBXDmQu1D1Qpfpy8RUBZv42Ct6NqSR75h4sWHZEZgt7xJEiM5qo",
  "key20": "3TntkEE7Fhktad3xafnLdXgsruLgqf1fJ8hZE3GG1K1U2v9kafYgMsr1Eeku1vYXqwdCWTRJH6HDcxbRRYkP66d1",
  "key21": "2ZeBHT1wdF1Fv33W5iCwANrAP1rQhJWzd1EtZMMBAMMgDkJEib29gSiW4BkEHfU2jfRXXZDK8T7eH9Jt1iTAywSd",
  "key22": "5F782ZA2HYf4UxV3YpwWnrMgwHTrg42FuCDSwogp28BjJ62zzbDokyUC5ZNox25zyKukGbnK6zgQuPQamPWH5PCS",
  "key23": "3pU98KU6fD6CgTCtE9szFkFEYntJfMDGwkmpBRjNsSwLMPFLtTb2j9YUtUrKXV5mbgn3VbJoAFpscojZ3Hm9dcLw",
  "key24": "nmXSMLvRFwSi8CaBXMFGZ9pik7S59iBHjLU8jBRNFQhVVBAvxMrBi8tinDzTJRv1P36ecgyVhKEqKYANqojUiNL",
  "key25": "5kw8fCZ3iyC58QApQxMdjLp4b4WQ1yqhEu6Q6NJKRvTfKeVgqk9MCj8t7dpW8RKnMveER3EL21aU38TcqwptSXey",
  "key26": "Z3uwv3ZYwPSyLbmFgoRGuvbdHhBXFChAb7uk59TAo7onFKhzeByzm5k1B262Cq6bbbrwb5vYeQLkKdzqBfTvQ7m",
  "key27": "51rxTFrJeghGrry9qQmah8LMkN39UJLsy137kq64cURrYpP1soi4pZqCERfBXweikHZdt6pjYHrjQaicYWQryddt"
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
