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
    "24gWxMUYpYB6NJJAjWDo86AQKDXiFi87Ee8c29k11v6PXZks1dXdwzKLS9fPcAqZya9m4Nc9W1RobvTRQa51ttPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnYZv7Stv8bK7G3NZbYEzLnZgNdvqfiThjt2G3omjagr2MJB6GMZGeWEJsTSYqVKuNRq6SddfoVw7BxFBSQbmJq",
  "key1": "2RCACptpTVvtXKcDyCiS8x3mkLD7nQo64Ex7EPiWzVuVn3vKnrLzMcFpCx9ASKKofsr9xuwJVcwJCVRAqbY2ftLC",
  "key2": "67BP5ipqL8sxmwKo3aobMPsJu1PerFMi8hz93gUrH3cT5SYfqgP6zvcW3cdDgki8isMyoqMePH26ofurpyvgcKpr",
  "key3": "4JoM2TUGw36UoJHGLeCfCB8NRVRffvJ9WwZGGevRAGjNxrbnvqumoKCyoMzhgBdgNfDAd3ED1Kx9gZd362SH4LNU",
  "key4": "xfN1BERwE9twobCJM5Kv15bN8WzLyaPjmwaLpr8tTaSP6WRRnrRUdXWvqwbKShtib7sUWZpf7f1wLxiiSaE4Kyc",
  "key5": "afFXnHNB1NkTKfBVuQvF863qhYisBzdnahFNWr6MKuMGkc4ybAHgsUcmWeeqdvFfpiesGXrnrwyBXFcApZZCx7m",
  "key6": "5HRnSvJVkk7nDG8kovcy6WA4HFwvXxpdMk8AJF99wuqbmi89arybAzU9JoRTed1EeqJN7NnU6Q5cPY5mBdBTnLQ4",
  "key7": "4S9DiyUuWotoBKBNM4Y4QchnEHzXN3b3wVYqLQuXjiwwrwMNVnQBfS7Y2cpxVKYyX1neqr7ftLX8P5VCmKb9hfh3",
  "key8": "3PXQtbGYKRvY6oniipyRbXssY8RciXnMvnsNeuaAFZTALKxuqMsnLuLyqCth5mXsWBun6nsW9AQvKM5WjQ9yDUpf",
  "key9": "4EoJ6TAX94sscFLnnj6RGBy1nRc8W2N6VAq16FGrCeCVT4xrKrrk8MNJaXWtCaxNUeip6d1qFhALaB2CEKjHP4qK",
  "key10": "X7f2MQBqDd4HZtkUgJHFJxQpLTMFkrxHdbmrDneu5k6vpFak6H2WtwKEFPwKZW9wuSRoDmfHB1jvR7abn62xGgL",
  "key11": "2qt9GEqjE57kSPg83dKPdUZnp51a2XE3ZRijrddkLpBu57q3TJzdV5s82D2TFMqZgCTMHiZcxqcQ2nctqbhovAz9",
  "key12": "4jBXgDeguUUxDfKmtMi54hR4zuwa6odXQ69N31bRC6tBs8YsRtiVgu12F2PxXf7jX879oEaw3T5mNCVCa16v7bXG",
  "key13": "3oor4awDpAJwD7Eo6UJPqS4jHSoRGt8YKRymfZBxcc2w466x3vwtQoA6PU11ao7P7hvRu8pBBVVCasFPn5cTHRcK",
  "key14": "5YA24qgee4YcDZHNYQtkwUgJbci4Vuz1XiPSrYz2t6RLiFnvmy1TaqcWu1JZKGYX1AgYtibbrLn2tYy61Wpn6fYa",
  "key15": "49bAdBQ7e6MkCetmUswLHiTajZ2ihcGfRV3Bn7LQ2impTYDohW6XXcyER7EiAk6Xg9gZHRE7sxY3scytFq76QzvR",
  "key16": "2XLZEpxzcwRjfTvJsPh1GpiVFnAR2qpEjymMNYy1X99dzkC9Lyz2a2CyTHTGRZMyPyfsSvQFH2LqU4Jp2pb7ZYAJ",
  "key17": "fEYYZWj2B3sDJL63uLyVuewJjweQCU91wd4tKHGiTUpsX3Z8TcWUtm5WJTK5WTMqKPTSfk8P731z3LAfzZULMwr",
  "key18": "46fEMz1rpboUZHjU3yQndTmUEzksM7fQcEiPBcoQugX3wzJbdUeTqyFG9uttVPAjtfFAbGcbD7tkzbsf1DPLyVf4",
  "key19": "2pF8ViiZgw1LksC48rK6BupKy9XwbmtTxWBjWz6javV78Spi881WWezXNrz6eFh7edHXA2BM2vRArKD7EKsLDPWn",
  "key20": "236jdS8GdWqKicZqenyVdBdSfAdyv2dtrXvNTzU8Kebc8e2fKZ36AqMkXkKCTmrvFXSdcKM3LeQuR5VxhdYvkfyw",
  "key21": "asVSALhHcTESkDF4Wcq6LXaJWnqtJjHKGTXAyDy6GzdsYE72GX8DTn1HvmZvAJMqNXqse1uQCAUVC5ue6JoueH2",
  "key22": "2hcrE9kZvDVP5jXzEg2KvJg5CMmZEmEnGZmQFbhz2jb64wLD2tdYbux9TUxCcQpmmGb2ehwmoZBsbxjXJKdFz21P",
  "key23": "HG7X5e6xNsqhMtVPE4uT7ptTKNMt9MRQqFiEsUKCAJEtRjuA8TZUR7X9bQ8UA1PnDLT2TeHEms66onFRx4XksH8",
  "key24": "66WcGjZ1haYWNUUWozsuFvureFrzGxvFUpj1dEirkPQxc6Hdkee5s7K1JxeZDYN3ChRSwiFVDoBuihvvVDkZ5odY",
  "key25": "3k67Hx4vNmzayzLm1SurPaHjGwcKTihPYBKYACYiixEkzmbNcw2qFKXtS1DcNuY76zNRArY7XNWLx3BhC9EYkFhm",
  "key26": "4swNNYYLyVezd6ynM4TPFAPQn5m2Yr3bYtT9MyXUPEKThuzVPeSwkGia9rGpJuiPLH719QJzygXFoe3GFy2jmEzw",
  "key27": "67etBosTRSunHrW6XCjmXWMgfL8sxi9YF5YeJLT8Cqpn81fuoqsaZFBr5EZmnJVW13VBjV92cebTipx3QzzSJYHe",
  "key28": "3BPStsuZsR97Q2FqvKH5UevAvYLKjhCim2kquGk2JACeZuiBdZJ2VqbPDnYzAHPa5qxxKXSHZCbrWFJvLmK6QFou",
  "key29": "56PdV5BSwYM66nNmyRyLAg8pULHkfuUXQWiUiMs41sb9BxDU46GRCpUcVFzVErzMHMtgQbv2KuEJ6qZZh4MC6zms",
  "key30": "3sJgc6mKxUJSCxAWKci6YeicFdNjbLiE21vSS5FggMx9PqPmwhkg4xdWL5xQiVo9JfYrQvTTAkdjHjbCHLkwrUAC",
  "key31": "sRBCtNsWWyjzwt5HCykWNow951HPVBsdB2HHhqUuzr38EvHpEcy2sn2AyYq5BHUYszfmtS3EnT4gfenf3kMSsM2",
  "key32": "5JFppyETEoNTNXuALC4veRi9igY6M44SyZMBVN7yWW59HvZUDNCQB12oPaD7vnbSRAecqP8Mp5FP1NV89AAxuSvn",
  "key33": "3QBrqQURCUei5G3HvXsWWaceWU5ZkZpqeikZSVwKFr317AWw3tkFZTpnmcF2ByD6jqNcy1mWxUdGanb8jLutNuDz",
  "key34": "4VvD3Hkw1d8tA7PCWNMnqhFXPEv1BX5DgWjBnu56FX4LKb7sJLfSKfrC18bd5iW2d5kTsTLf2QziQr3FbytfSZjk",
  "key35": "3ZJe4kyVwV3666L7rRPiTSVpNRz5RDjRbYez4WQQXsPEopj8nusPx3ADJ3SfyPKwftiJbZRFC4efcxsasEkGiCEV",
  "key36": "3b9u5z9fhtDbnmNSZ5Ra8Jzaivh44DtRcyRiGT2quPX82QAKR4LknbGTsSd8LmaC2WRZko8P9GHhaguBZiLUfq6n"
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
