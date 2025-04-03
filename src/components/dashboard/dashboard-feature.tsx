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
    "288nRpMo6snnUCr36nLMAkD5xnoxX8rmg6tAvJ5VuhoVs7J85LRDs1R369Z9ZDex9YYdLq2PDCjbrLfUp8an7PuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjpsUseLf7ANAgavvZCMcQLdfSFVHXY4qhkCDMC6jK19Wq4NutzowBCFVgjpn6xgaPxrGcVmWdGY8aphAK1VEVQ",
  "key1": "sNRUPMYmfpR5WdmHLYwd8AA6M1xuPfWTLLwnPmtkreEsD1jzgf26caCthbsu7mx9QbvA41uLYLBCYkhjJk7HKmp",
  "key2": "38Z6v17k8TRSVzqjjmnzpxDzq63xFzXmT6sTQeJ8bqVHsEUaNUrXAAStMPgvVUdP2MMWHYLQd8AbcJtc89944hPw",
  "key3": "3vF3Ebg9DtmVxYTX8LgfQWVbek9Uz53Cp3KQ6hyzUUiF4SPjSyTgynJMaTvPy5xJmUGjMHBTGuNYH7j1Nkb1Hrpa",
  "key4": "3bhMvSX2dc7J9a3X9vhqVWDQ9kiJwLMRqzYwjtfFLTGiaaEzZnsLciHpPZDUJQGQ4w3sJ4A8P28X9usn2sz4cmaG",
  "key5": "48nzCdz8MsYxzVkf4jKCe56x73ozPsyBGWnH8Pf6TrWm13cX6UgpoWmxnwZEvB12sEeNBqXEV8Mo6GKZtT54WUbU",
  "key6": "33Js7qQagpkHm5XTBA8TUHBTZD9sz4GkuP2iosUCCQJrZ142NHxmMkt4WkXc4nGjSvBCdWPeCP6LAKihCXbwBNmS",
  "key7": "8XxZy8WB6dfSq8nrMWCBBMwCwNZrcrxBYtPVsv7A37ekKKM8sbXUhQPn9CCNrsi8UBsW7TkEuNF6gBWjoWBeKeA",
  "key8": "3V5SqfLLRyjYQAwuVyCWHMMRAuECs3yiLKC3bSEsYBiJDactSd8uUQ2WfP9X4cSg6BVCzGaE5zzfn4HqFQM5Utmo",
  "key9": "3GMzbE46tjbvBPmSxL8eCfdK4DMtE8fW4fsnKcvFMWCkUcJt7uRYZeV9EDN2TvuDBYBs8fNmTnDCMqCEtz1Har7Z",
  "key10": "4hfUxZzVGp2fSniSabKq7CwxCNECsFvsEG7mbTsSpoMEKjhgb1xP5rrmKGAd1P7fFNTwyfoooA2B5B8ZFc25EqVz",
  "key11": "5aDkEpECoydxpbBuQ27XPgjKfHmrDn9DabMi6iAwnQ7e4UxuPZEqLqiTkrbyULWc1uTNasZSCAfJHbZvByc2pguC",
  "key12": "5xzj44Wu4bdCeHAVddnq9zzXHK7Gz9xVT2fZHfwHgvyRvLRQaQcRQwZXtRzSawUteGpFoMqk3ereaKgay8FmSj3y",
  "key13": "614772zQ9osKE5at9JEgtSFWBmt4xdQ5UCRaKMgYZQygc2o3ivfZr5mCMMbRbteGu67FEQbe3DNKt6JjcJJQxWgA",
  "key14": "2Sb26jXhs82GWdLuttuqNZistEg3f85FaN3sKPb67AeUGa99SYvLqmgGUn9rLjLANmLLvhb9B81suCnDgg59QbDf",
  "key15": "597hDZKZY6VB1JE31mrvHhusPuNtycLjZHGGr8eMz56JbTbNe1JTbFLkAwoVfCK9ScndFYEy7gZxUiZ4Jd1b4SZW",
  "key16": "5ZXgupugcpBfPLvV4rLvRJAHcYT68SFdj12Axrdw6Hbj8ZfgFYkyK2TQ7YeHytbAFaTypsjLHnaKxvdRCf7K7FN5",
  "key17": "4HEJydSTCNz5QaArK1bKtkCk87SpSr9EPS1tyjJY8GYAoXAToqDDHdJi4ruTAGYfz9rj3Xbmnk97vnEtM5XLuW3P",
  "key18": "4fvTbB95u1BhvUTvRfi3yeUdcRZs89MErbZDizePjQhBsR8dQS2CosdtDc3Egnf3rszrFAkiVZ8JhYZeLhvVkyAD",
  "key19": "5bCqpxdW7yEWpWKaueJZMR4fAh4RK6J2GupnU39K8RuTARCknBbqcwQTaAWvMM2B9yW6UR57dua3paS4TUyPkZsc",
  "key20": "3oi9sLSzUYRtwWiS78MFQ2zbVA7yo6zz372GPxWgtdsNbZY8zyiXx2J1NNBRMNYMzQBD1bb76zqgfiBx9feoHzg",
  "key21": "4ZyXQFBryvRAWas7Fe48HegNEaVxaq1ZrihsHsjGLP1pRWvutqg9Xac4zxr3gkFd9fYLp8FXwSnKqfsp93TAwtUZ",
  "key22": "46mUnFS8FKKvq6cFpVMwhUpP3GSAfE2sXru2ikRnH1X2ARvq92ujrv4zY1hz4dAZgEdnP7M3MHgWVAbj4GbZYs38",
  "key23": "2Q2MEqsdRTjM1rqTzC1iHTv12DkL1tuxa79st4qH8VCC8mQemwPQ1iHamFFybyb995oRizoAV6Qvz9piwsszBtHa",
  "key24": "jQfGnsfd8auDr6eVAJLt7MSGZ7UcPu21435TfsYZe3tU8iaksBQaKt3CxL7S9YbnsXioV7hZmWGESkJkoT2TGKG",
  "key25": "gmPrfMd3kr4Ppxjj2jRm2mdNSPh62rUex4guG3PeSoKD2sE1YTX9FWsbgRbN6dBKDWCtrdcfjr9EwAxk4UVfJkz",
  "key26": "2QssGhPwtecEGqrJ6D6dkbkDugAijDgsEGMv34w9C3D9idovaTadYmSLKr54SQ8H2zUZkLPdY6vXuHfEzdgvgg9e"
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
