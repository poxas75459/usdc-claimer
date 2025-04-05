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
    "51iMWQEYEVKu99v2L3mWNCS4rwxMtKZzmJyBNVULr2EQG2uAyy9odGFqNZveJ778cf134uvMS6kJUuc92SWZsgXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ME3kRQoyuhGmiJbtnbFdTu3veiEhT4Ti4PjRWUzuQvR1zh6qyheF21FVBUYbzLXsQrRTHEu2JXgah8JZx4SEQG",
  "key1": "gL7Gk9LQpSvmqmNHB3BiiJAegvdNpRjsNytz9WrGfCZk1kw2UiajFuhuw2HHPXFtkQGwnForbMRAFCm7q5Deucq",
  "key2": "4zVc6NFffdhLuCzCVTvz7ktrwGzz4ATWdaAaX273WvKzMnEQuUbpdHmqyP7xz2osFUQqTPS4VCEJqJHi4KJhRKrN",
  "key3": "5xPkEU7oaqGtjV1BerCbfLScVk2ZMbT9VY3ThKguCbgzaByPVfdLn4uLCYLFZjaHuFv6K9aCSkHRGU4NDvse5AJ5",
  "key4": "Zquepv2Myo1U4rSYULRDAKSC32Z9rtT8wL9xLpAvFf1LcJs2CzErMSLKRZ7D9BRu3oGgheyMhTaNWCdP4qG8fbi",
  "key5": "5DioqWEdaMKvTrj6tu4kDa5guK3vBoNB7qp7BpuomC7fPRwTYyGDErsv95oTnDK8aS8qhyGcRUM8vdSF15gJ6NYz",
  "key6": "4d6fD962fre447qUkdoskDgDfyEEvAQMgwaFfYFsQrWMEjBzGh1pX6mGoQo21GtkF2sSdQgnpNTRF3TYJp1hw7yB",
  "key7": "2ZKCdrb8yjfWu83i1os65jWjLk3K6kv67tWSNwMfVfrTsqik9XTTv1dHmK1ZD98Y2bsXN3bELSaSCSnPWZetrU6",
  "key8": "2UGSfvB3qPTeY2Yav25A9QZkoHrxaXWq7Zr7Y6QmMqX12HMBCMQjjon3aaF2bYZRqiqTwW1ntDbGqEatQMXrZnWv",
  "key9": "3T8xckYLbzRsP4ZWyp8ZjUQkQmMbz79H6VSbUcSkgWY2LwCXkufN6pRiBkqNdHqosVo8E4BSg934WNwwwwj9t97U",
  "key10": "56nAgU4xaywhbJbk6b7SBYhQkP2uw6NXn4qbCa1WvNxyhShJRX7HwwtyNE5EPFh27ZSE5jJmQahvDUsTUxAPwUTx",
  "key11": "57LpAmWnf82dQcEaCj7AHiTsyCFznD2DvC1SYuxueyLso9kim7e3S1cm1HDcEQ2MeGBY86iVfeBbAY7ejmjNaFZC",
  "key12": "GM1PV1nqqaFyvVNtHykWC9hzH7bKDRARr8puUMb9vC5A52cnAiakboHSvgtKNcRRnSuYDESad2uCTqUGqYuomde",
  "key13": "uXqgMWrNc4S5cQfP5txqqD8FrBb4NzWqYc942QQaTad9VscCCgaFpiz89TSNAU1bQCaPkbm5AdQjyG1iY5bDkqn",
  "key14": "5FqogVERw3KjxzD6TX3Y6K7KKzUfbTYJj2ptxpHgTm9GXYommp3HMKxL9n7kLMVhjJDt7CDmg62M64dHKWRaLSW2",
  "key15": "3N4gBpZZm7fNP4YeVwrhxdwEWjU6YTnPMDqHhJLUPbiHF62U3bipAMgzK7sP1W3oNk4DsYNbrZcFg15b5hsHDwsh",
  "key16": "3LYDCeNDeGcLzZE5wSdq9wqURYsHtDQVCP1vyxyaUCC5EhGz7o1Wk76Q5aqgcdxBcw3ZuXCDW3KruhKDP3fmz9Pd",
  "key17": "52G9Lj4Uy9VWoH7VCV6rkU5DJGAR9hq8x8TpNiz6Q2LhKMis2mhU3BbtgMwNzV68tPwQR641UANHSVQniinuP5VH",
  "key18": "454KQEnxRjgPz8jMDXVkYDzgYZwfxMuHBZkgExEXTBn6acxvyMVkHyHefq4buk77asB2Gw3HWdoTMJbkEkpzsZAW",
  "key19": "2EQ1RnLedLR2op9GzEVN4Z6ayk1B8QVStGTkjTxdvkpsjZUEZ62dHaRdPZJwKNp7hQM7CHCz28GiCs1wuN6xCcKX",
  "key20": "3qZvz1WDs7DuxabRmGqjXy68M29u7PxARyjz78KTpW8zq6FUHXarp3tbhR56pUycEdjVvgKe3PLNBmX5NZE4uXqu",
  "key21": "4b6sXqVin1Rg87FKubFcqkc6ZmTiVMCeyHH7ueooZH7vcrhUuTqcrYi2scZ3wMwnruuGAccyYnbNsadAUwnUStu3",
  "key22": "5VRC5vtWJPHF575kvfYGYnARMkgj3HpRjzdq4yaSaG384UEfadwDbgFgK3d2AEKDQW3mxGiLox1bqLsNzRh9C2mm",
  "key23": "hQbifU6sThf1oCFxE4xGY6GECyqwCcySJpgYkZphytj86j3fuiWoXrcknTP5DHAdVca2iFDwQsJsALeLFgwUAvT",
  "key24": "2jNfyC38Rz2bbgsr3KnVshckS75qUjsudNbSSwjTjESZqfEkeUKzuVvWGCn7dvhA4pJcCEmpYbvMvPfhV6qTUda8",
  "key25": "2YvyAoYkNL6fdGJjaiaY2qe2m6ajXao9ABJE1fnqy5ttcvTN13JnqK9unN4YMXd7yp1g1dyHTBy4dMpgspw43GyN"
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
