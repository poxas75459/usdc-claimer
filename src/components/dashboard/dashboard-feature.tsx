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
    "5s2vJdQFjPYZxp7K5jYBUpfCuxEGUZZx7pWtERomysLi6wtoj3QLimuLdUcTkhozWeuqVV1SWL4S7LKUA78aE6kF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvxqgZ7JD8AV6Nex1owhKmuaCjKq78FSExVdyy8LNH8cSjQe8jXaQ6pjGMAF8JxmcUousGo9aKnioCq89s4m9ZZ",
  "key1": "3uQQHwVZMJjHUzduvzuodeiABAeP6nDqMcq3DeScYCij53PoP1DzNDG94sv3an8zCbeBPA2ViVc8cGJbrYa2AZbQ",
  "key2": "4tGisHhnKct6ctwSX6nfjxA8MpPjVDRbqff4PQv3Lr7qz9FcAq89xSW3Jc7KWpW4XQjdYHSQoDkSesMzC9ZNtBwk",
  "key3": "441b21pu5jQd5mFtJutoC1uPSaYCuCY2SMBRELpiZvaSVQP3FvoxjWEqkuF6jJhxRXgudJq6gf2Xf1gdK6RzukiA",
  "key4": "3ZRxh5rPmF1cD71aS6rKDJz5UV7g4dTL5EtyxNcL8UZReFaogfzCu3QrS4xfeRfuESXtXUtJrWL8ok9ovpBe15mS",
  "key5": "4xTu7yR4W8LTTJhVNuZ7WuCKJTbA9rYFy9eNx867hPgpEa6Nbf3nmwUWXRTojeRu7mv6vKFXfKDjy5UdMkcuPcRB",
  "key6": "5waBEhU9qcPGAUHpEUNpx8rFYu5LjQo84tzpCn79DCvgmE9TbBxUocVUmbQwg3nADkzAP8u92W5mAy6j2WrmqwAF",
  "key7": "5rradVCyHGhcPh9wpPtQL71JHJ4TkXRw1XZ4aDih7pPQ6My5x3cdDbtm9a1jmE4vp26jbVXqUniXg5RwUh3E7C7p",
  "key8": "3RhL3uStBhRnExZwMTduAWewC7nV4DQuSWqq4uWXnhpqodXjSB9tkbHP7Wvy4P1J8rSw94afAWC4sgNBmivtCAWb",
  "key9": "2d6FmCLbeeii6TRqBkShYw8FGXtPDBqmdLLoCdAzazXTuDxehme1zchcjroeG6BJkV8dS8yPCAB5p3SmWy51HFrW",
  "key10": "4DT7A4Rck5cQ7QEtU2FxEZL5ntzQGVcDKiNr9sZ1kBB5BWyXrAPvDey1WuG8YAxtJ3fZeVVPhsx4SPkgGzX4miGZ",
  "key11": "4fnmHpvRgZz6Lk4bW7NY7CHT3crSkjGGu7xBcKzd5qf46si8sLYdhLbJQptV3muq2SQb5xr5qryWr9Hqz9va5h4c",
  "key12": "4xQHGo32yQ7L8HjrekHbzxjnMv1oMVjuuZkYWqpwt3sEYm7NHtZFYKvELz1XM3u3hezgTLew7RdbGkxaAN8hZAtS",
  "key13": "28KwQQkE3BACcdnoNP1WFFjySJEZBJJ9xWver6GifqJFXe17bqYN518DbeyMxmfwTP419UuBFGF5d3bJFu9NTE1F",
  "key14": "2NHTexWMraGXipwVxYqnhuBrnBVkNPxN58dMvWZkePf8CPjmibYGx218bLbq4UNnMvaukXoKzip2kURguxLXHhpU",
  "key15": "25r9n2HHjrUAwr5d6MRTWR4HNWQeRScKLnw7K4JaSSmdYTr6WXzDfUvhkkQQvjscFpkY3q81R81Yxih738FvMnFP",
  "key16": "614tXqUBEjQRxZryfrhuNvPmcDyrJv4ho7R4vBA3g71hd1Vzpqv5fHN4ntMXDgPreVJJgAzCPPJVxn3uSdDBK4xU",
  "key17": "5Hzb2ZhbSrM9riNdkEqZVcgC4iQ1vHNuN5DKtGucHfF4rhqp9cFbvFKUQod5Z5t9Z1EaAEK8AvCLkCGeJ14wvKMH",
  "key18": "4BbkAjpGE9KXLBSd9bWSAnsDRFMCd8udcff8VsTc1iv5CcFuuW62RTTnMwShcTcoDMXgJvEN88nsuwkZ247nmv26",
  "key19": "sDpwMiBpNLgnq7WAmkRWUXuCrFac9rnSCowkVmGcQJMA7JKWhtGGMjhxguY4gNV7RqiJER8N4tKaP8hE5rvR733",
  "key20": "4yA9EcueTzSAMAdzVGd1VbqekDLvBTTReoxkB9TPp1uop3H7kUg8YnoTXBcUGD8xQnPo3BP5t8yChf7q2pExZVTP",
  "key21": "2q7L9FMR5yTG8g84tXHZnS8ZwKuTNXAE5PJZtntj9aVpMLJZHWRvBh9CN4r3eL1fSHogcs1ZP4EefvJ4Y4xfu5qS",
  "key22": "SUBbYrEk4gV4RQUjebavLoZLdMGzM3LHhH6DPQV5YLEBB9EzpSAnZ1gJq3Et3g8M6irUditWzYve274z3RZAGxP",
  "key23": "3FGt4ruJ4dUKRitsjKor1SZNnxD9T8pZcKnkccwxbN9KKCdqzWdjvG4AQDkNJLmdcYxFRSa5hkLZ2HkJzmygPsDe",
  "key24": "562uVaHMeKoWLuZfPhBCsZvrp1QLDnTQPukFYUSPu1WihKWqq1JXjFAmbqx3kA2AmQ2DQdNRKmTGQdeVAv255vYa",
  "key25": "2GYpaPP1q2qU6Cco7NKUiRiAvXG6sPCBXFFKbgWUa4BE5Q6vdHnswu1f4p5axk5nmYsJ7Z8qUtEGj7Pt6Ye7fz9W",
  "key26": "2PGf3vBQj2qRB4WeJ9TUyFoz8wVyNaCEwLsWezhfBbDU7fErBWWQejoAS1FVXDop8prssFmMJrq8mELUQfaYiKdJ",
  "key27": "2Tn8Yrf2jFRXoEv39bZcaNLXqNwSkqk1tsab2GHVZV6tq5rkVhKXDVA5vbkFLbU7tZzn1Psfb2spQSGGhsA2gC3V",
  "key28": "3EpSJCY57Kz6rfwfiz5k8imdCcZpkJ9jJne8Ec4wVwphPWi5tqgdAy5CNCoi5xV4m5EP3uHy7NYeak6sy63Ce5At",
  "key29": "4HwexVyvrkPrvFT8P3fxoQNC3mniGQ6ssbz384KiqtQGDsTh2M4Wr9fcSk3nPoHgv16yprbNs2pN6RFJ3ERWHuf7",
  "key30": "i3fVkyMH3Nc3htMJp9JtDaFv76xXZNmJKzEuqRD4PSBNzHp3Nsvn1RxXMGHZkAwcaP9ZwbybrFwTLtHrwudyCfS",
  "key31": "5R6CRjfViCrAjGTGd3iLxrcxaasYDmp7wjDuQ7HPS9WaGqN5UVzzamqebarUEAjsWwDUsJViBZwpstG8oCTQZMrj",
  "key32": "yY91QisZpck7q16MeZUQ4o5ZcqEXzQvdPv1kyWducTksH9HhwWwYxBxv46UTkczZAta1UHZKbjMe1Yp3P5i55sz",
  "key33": "5tBuop3CAKPCmESuL9qp2YicPfSQP7hp7iXtYPHWL6G15nLDxNK9GBXBL1NMX7cD8wZvQDe67uG6hvuuGmRaa2mB",
  "key34": "4ApmTNP1554DKcEFYoyPVxwrBRavCzX9yscMXo5q3ByoghvceAYWUSLGZCMtC9b4tdeT6DNyeeG3NgDUGfmX4eWS",
  "key35": "3Y1a6XBryUxF1n66KoV4c4xQUk5Tv4pn9imMQvk6oV76uKft9mXLZAL1UrVsqUTEaws7igTxgAYbRzpQcG8xDd2R",
  "key36": "5ET65DMe6LEyWhZRnooSSiMqHGiuaYsx8s2Kr5Q3apfKoiNsJ2i8vEHpMtjMiiPrxhAUM7GvUzuMjPMpeT565TKo",
  "key37": "4zNjKKV3kVSqbz74jGb7MZMMRfagr7jiwJZpbtfjGMR9GPLN4eYyKyNqDQKiArW1hrKvrF1ix8K5H7kGobnU4RNF",
  "key38": "3UJ2vaqo3sNvfe6LA1HwbvMCqVGpDbjkwGsaDWbGZDPT2j1sSmbGVpik33M9nVUvg4yRmXvafcTFzQfmjJxJL4A8",
  "key39": "2QPuWCsyhAiDYfZmsZL6SH1VzqdwpMXebvvQ15LyCbkLxk9aCUtzDzpurerATfq7NGdNe24w5SJ5WLr6pf52LTBp",
  "key40": "pef95GGU3fbViJtPpR5S8VrBwtWm7jLxJVXqMs5fHkG6vqEeX3Fwh9j41NtXuanAvbF1xfHZ9DajrqhSU6ydYfE",
  "key41": "38PDkN7mmS37gkbTs5kRp5pzKHybNR9nSBV7qquid3zhgZbw4D45F6L8n2DEXajtMLGYEiMZjgRTL7aiX3ADYP8S"
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
