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
    "4JKVUhrHpeUp2cDK8hEMEziCteUr8Pis8odGtojB1SPgVvzLP3NKzXZ7YTAGMQQUWxHYhGhncr9iA4C33mNTNsZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JyzVHshvAig45Kj52GtbEtSaoZFhHGc12mUAkKYSBKouWnUmCCSjTxrb8wMtH9TiwkyuRdqqYKg5xuf9Cz8b9g",
  "key1": "57BsoPBAJxSzRcNtd2gznrRPuxd77kQgH5F6F9YKVzgDGqJM9hjfGeu4xRv878Ube7yZPYzFw3u4zrkhW58R8xZE",
  "key2": "4xEkEGCMwcVWM1Y5gZJwnb5bHyQqCdVjL4aUPMZDdZUY8tKuxETcgw8765RuQ3Uh264jNcRd31o3CjLnkthBzuW6",
  "key3": "58MTEm5yVBaZW5Bgq58ew5kwiLMJ1pz645oPW6r3CkdqPckwewGxNiaq875A7uSoDJZ7XVxmohXezxLZCRnKqE3p",
  "key4": "3kcZXviJt5whsHaEFiiXdc6cwNQ1M12u3ygEdDtKpUb9gUEFyd3RHLQEx9LMU3kxJKBpRrDhDbjSo4sT8gRKAdSG",
  "key5": "gZ9Q5JjSYwmnYe7FUGJksvXHkbRWiKQHnypbFgcCkhuYDRgCjbC4rYz4ypX26wh657DCVAbsxnxgY9zdBtayC9R",
  "key6": "3vkSKHDEAg9cpi6oy2Bh46bo2zPetjDaq4vf3D8rvufWZYKXfGUAAX3moGb3qRriZBcMXaSD1HAGUHg2iEMT7pfr",
  "key7": "36S9LzHg4WyQEdwWdJpdt1AGjP3c4n8nJjo8cocEHmTkr2MJ79MjhEGPq3RViKgMxtUsJBV7e7n2auDeGo8xyWJi",
  "key8": "4ETWUsvWksMu15U42Y1jUq94jiMiidG5yQQ9CKuCzY9dpF5QsQ2KAGT4MkKRfQWGywyZ9sMoX3g56f3Zh1BiLDbU",
  "key9": "46tmhrrUwnWUjUgx3WWhQfFmYZAJAnzQg4ZaGqY35S2Cexgkj7rKY2wnSwAeybXsR7gxhAPq4dyieaW29ZYAbx3W",
  "key10": "2o1ALt8QQZKTMQHBeY5vuFnWdGUT2YjpvgfMfJYLTvaPt4yCA9Xq3SiBA69X88Tjn9Jg9E9uMQhRNuezT15DitSA",
  "key11": "GtbsE347SQPNf6cUJ4ixBBDuJEVDAB8zsjXwuJPJpedVEnWG5i6215vCnp4ZeRGxfWz9rKM1GJyHtJcSaY2vTCV",
  "key12": "45axC2eyv6FbTKBymvzcMrPiaippQAi3shRwuuGMQRvc8suuRsRqbLzD3NR5QrcgNq8EGfiJg66rBj42Zcpv8DFo",
  "key13": "2DjM1SNvJgUk3NFxfRivBWKCU99tYPS7VpBvgWrrughmcjmXqf6PfZLBCD7fp8jUkkTETNXeZSgkudDZoMZrL3Wp",
  "key14": "dAZqaCdhPcsPoKag4bX6RkTiCMCjLP1fK2tdj2bHTZYQRdGYg8h9BmuZL4JZZCtYAK7SNyWjmhuvDecTLbmC6eL",
  "key15": "4hXWzHCtzDn9qVFa4VUEHNu9TbWH1x7A2Ycd1YN4i9vvE8ep8febDqfe5P7JtmSxg5WSuSyCuvrrSw69GuvTDYaU",
  "key16": "665bjdAT84s9HsiDGTz3g23tC9jgchXK89RrQiGQotPEw9qGDiG6iRsaUjQPUegaQyAMXrtpr6irTgFvMi9eNniK",
  "key17": "39fTKdAKL88r2WQov2W57YnsaERKgfUoSejUh8uT7oFS3Es8rvGH5FYvKLGyGgG8HGm6FKVWBDN6LSkAevfpPSwk",
  "key18": "1mSziq6nqpLefVBA4HCnT8Nf8Lxyco1CktGho61N9YzjBYgvkVUzntqUuE8QcCq7wjdyapbJwLxGTQz8B7xMp5Q",
  "key19": "2GEhjkWGop2pUY51utHqLpBxtLWE3mP5xMCETPWhwVA6kZhBPGGEgP85J1r2yP8KUqs8EQDbrNg8fyxb9Ckvrbz",
  "key20": "eUxnL12QhAfXYAZ7gycsU1CsiwsCbnSxq1sJxyN3BS2dNszMCxw3NtY2ffoeEMnySrbuXWMpW95q1JdCa6ii2Pt",
  "key21": "pXgoTf4EsQoXLss16NBQMDdX2SM5CVERk9jU7QYxh888muUVXoJcFixgKw8mbHsBkqW4hJRSnS4kngF5FpJAMwp",
  "key22": "3PkyaSNGwY1sthd4eNVVrWecy88jiipTrWQkasNAZeAzC2b5PPVEyfgijqrengA1mkBoyqFMvpinQ6gorknfqoh9",
  "key23": "27xYWHNMR1SG7JrgqCgxGDHsNiNuCUEPdDrVQ5ZY5faiZbhgj9H5kUnstc7GFyaQsjwPW9PfQf6RhGrfVQjgYzMu",
  "key24": "kYtoFiw6qoGp3WcsPYdqqHbNvavNeCn7vqivbVwmiz25FPNxWFbn8xZBaaADq6UATTE5MSaC3ECdSqYk6fK6Fo3",
  "key25": "3M5vT8JngW5ZtES3FCjjNxXuveFcGFC9JficEruVyDasfmcLGRctQr9VELQGesb3aqrMym6NyvYwk5bDRUUtu6XT",
  "key26": "3SiEHDFysCgm4WSBaxG8QQW9StiZRyqETDrnwxyiMe37CCk4H9ztmr1sdzcx6VDFKG66J3eZq25J4ZrbkSeDP4yK",
  "key27": "54vmNLCrJT1LdiRtayC66WBauWuf78qpfFRoZUsRyon5V1NZ9nhaPKcWbfQw6xhDswxvtYJkqFDyWUz68axDgNbn",
  "key28": "58Q1gYuuMPH6ep9LRaxbjFuXo3vgiG8WFnhLaHw1UT8wteCimPfkiasQp9EVQLa2ATeGuP7asW7jse7BWdzYVWKw",
  "key29": "3R53xwHkvHqbhutMJwQpR7oSfgRmVR4dS1EUYAeKEcxf8cyFBLvZf2EpD3fWBX5NN2ofDwh4C6egaVFWg9osoM5e",
  "key30": "Dcycz2zEDGZBZdEoD9F7uLHfbka4B4WxBqPJyfKAfpCCcMjibppeaYwpriYJwgAQAMuQzY7zAuauLRCWcPrqPjb",
  "key31": "3yc32EspxyhAm3icnLetQcq3UrZaANpCZUfsV8EuAMFn6KtECCUkRMgLt8J8CyfY6hMqpEQemgdLjZTmf5uPSTiQ",
  "key32": "2fyQwBrYvvZKupvDtqpsrxY4p4jmKKpvsXa9CCAt4i2TKePYBPQdBoyEaB9anq15188TsKrWwN1tQeJj74pS9rTA",
  "key33": "3474WJs6vCnLiYDc6G4DLbf91DK5Jf83abDBYYwiosNeV8yayd7Md5aWTcgrLNeKsdJhDsoKp39EFrqWpAoNbFhG",
  "key34": "UpoBycSeSrkFsZbNyWsPGmDUJUtRh5rDAYiou2FT9KdkmG5fD1tNVKFEutN1aPDpsT25y2KqZdJy7Cez1qsEXLp",
  "key35": "5WTdsT3cjHxUGgdZUhaVV586FDmJYAnQSw4VYnL8kPpAmzR6QsA15MRnEhLWP2ZUgezB2SDRYwkuCytubrsYyhUw",
  "key36": "BACZqaTG1NYJGqEmWii27aDS1fX4RLXDTBDJ5mfQSk5kVCxmQeRjDhJax6HWPRNg917tHbixz34knbTeFq66oyJ",
  "key37": "5F5Ef8ZoDJjZai9ocqLEmFcNtpS5a3y5W9u9vTe5RUZzPiXBd6vbwTna163ngEj8Jn1fD7iP5CoYeJd687nANMQ3",
  "key38": "5n1tGJFqqeu4VLpDjCdpUcswWgKWT3LgGEUjr5VVT4RULF6SDSw3S1V2H8e7eY3c14ZHmQmHjk6XqnEesV6CkyCY"
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
