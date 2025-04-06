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
    "51o1zDH81e9oCF4XqZJyzMyeL2eA2W7URWzoM5jv2shPcxeCdLsosN1o9JbViD7hBB1XvEfAoTyU8WnxD8aYDASD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dN5FWnHvoc66t67KQdHdYnJDSQ7Z9KqXiAWwhtxfvRgYRRe4auFwuMEivB2zNwRVhvVEkBxxNmhHFjD3cfkE91F",
  "key1": "54kma6Ls5dxf25dSyw3k4QtsSF8KWvjyH7QDwH3wv5fvuRzaiYgTQAkimkVrKr78bXacRnPzXT4nReSFQK5BC7nD",
  "key2": "2SAreeic76HxoM6YgNBsqomMzgPY6CAn6K5Euod6kRK8M4Rdkcv11yMTaUzHaFUYMoW8k2Lwz7rd4REo9PjNN81m",
  "key3": "3RfCZ4xNz6f3xybec2M4MU8gz4y9CnJd68KfNfRDrrHXSm3G4wv1eK2E1jmWEqPgeqfJoKZ6LGvTPddURHrsp3px",
  "key4": "Y4BYz4okJxNfmUKmBbGXZLixrqttAadTR9q4vQ2tghqo1Y2XVEpF3hnxp2JTgA6JvhUxZxsQKfGFT1hjhfRkQzR",
  "key5": "bb2szShwHbUh8g4r9kuGuSzQy5zZGAU8qFEZzUgVZsFf1Ugt9e8Q8s4AryudnxGBVa8mu5vU8mtt5CT3phZmj8G",
  "key6": "3vKCN8TKbw31AQdnmtF4JVGHLKYEW2W5b4ppo9vo92tQcnXLYb2HSsEA4y4CXwGjrCD3htWPx4u5doaEwhpCGGoo",
  "key7": "2qyaywLdvHabtG7YqvUv9piAjJWXZspdif9eVKVPXXU8FofQBuMzFJajZdMJFnL3FkxVv9V8F7LJK86DA2KxcsFM",
  "key8": "2DnKsf6a52AKjDfuNYHRDnAuAzA7aSB8UGzFS4MApDW7TucQjyptKQmairHBbd9ysS7h79i2tTBvzhNAfgV2JYDW",
  "key9": "4SiRZZn6C83gCPdhfh6uy2yCyf9QAv5qY8RCG9dkwNi5t3N8JReh7AGivUxFYCUyth2VDUJ9uhr5YL6VScMbXiTU",
  "key10": "5gSBf3WkRB93H9JnZ6zM7oy5QpFFVkUVinHph49rsCNZ3BBuWzfPRNwMjXqQpMwtGsgPruorW61eHxn1oVGbWTqy",
  "key11": "4AanM3gokr2TiavLivgnXaZxKcbeHEETC6wmqe5dKDW31pU9GAL3RsD66CTd7R97CQ6Ud7QVQFQ2rZp7gFG2xQAK",
  "key12": "3pqZGM7FMcQ38Fz6u29ofb8JV7PWPqyMbTa8ZAoEvaAVqvSmuSMEJ2GJkeS3zobWPm4zDgkePMwNAGhuuQ2YLRYQ",
  "key13": "2fveKYj3ZpyPNPXVohVkyTH8BaHjXJUp6ZjsGbA2ji9WeWUmP85ikLZ2kG19HKYu1CR3jkci9HrgR3hg5YAyiYzV",
  "key14": "3tPo1JpVJwGHCGVWHYy6FhMxA9d9jUNvatnyvo1vMgXietbgUoDVsrLPHM4qRj9mfos9A1pTQoQGq2b6a6PXZ53J",
  "key15": "26PbbSPTwKwcj2pRNEJkDkEiZ9hYCbTRbp4Zth8PWgGUJmHk9ozTV3L8Uhyo3gcREGi5f4DPjPHNK6ywJmrZH62M",
  "key16": "5Cg7PnKmPv8YAwHHxHkYLb528tGVkYtoP6pbdvCmUU1vzuigAifnbwmw3Y1zhoTBTEj6wgbe9ySAsUFU7w1zWdXE",
  "key17": "4VLLS9xXxU8PcAjWeTNaH5tQufrShVzk5kzQnCWns3zsspaWHoyH8zSoVgf8DF3J3p56EKbeJKW2NGLpkJre632R",
  "key18": "4v5PQo88CTYwQtrU6GWod4CA2pcs5WzfT1GkLomQ3BqSN1ooWrm76Gxhrm96La8zi4ACdz4cr8E4787EsHckQJmb",
  "key19": "24Z7YrQxYxKnVauuKASWMfsZnFe4SaR52L5i69S9sWVMRKL5nZRogNfkFX3WawbVsu4aoirNHpkDLFv7L4xhPszQ",
  "key20": "2q2dw9XTgLhDZ7GaJhzUzwWJfQXNzfATcHR9wfSJkGydEQ584NfSGnBFyjKkqgTH7jA3A5ZFFP4mZq5g13XeKcys",
  "key21": "5LFZcTSiAVQaq81ph1BVYMwU9Y7quWj8fGrRhfKR69mJQdv1pn3TtJ7tCDHBEb8Us2FuUZ7meTZoW9CCLQRcSUiP",
  "key22": "4GuKvwTBPUX7Bp3G7MkoxuALbQZ9EpRxV8mLhGASc4vpjwwEZr6YKAUQ6Yyd5Cc2PzHefeY2KobJ2bjkX24YFSbs",
  "key23": "yaMuNi8Sm446bbAH5yP6fBcyw6xNm8tsXkqk47xfC7BBtcMNds1AouTfBvu4hHVFN9jfzMJuUZADDKqCTJ66MTu",
  "key24": "3Be2jaAXk21PDRYpeyPBqcQozRtmqf2ZdPWxHywpEZDwVRmFwRd829DtnVEo1vvhXZ6rwpm6F1dLDs8RSsYYePvv",
  "key25": "4MvG1BKbeVwCfTVw9XUh2wwu1QBw9o6LvEw14rnjKus6FB1WHbaY42cbwYePbmzbrRwMuCfa94qWixsKXyNzmsYb",
  "key26": "4AVxgSmX5ZfZs9NZfhFaWAoA4g73YvPxahixVdfjw4nHG5S1pVpGU45KcYnsjA9Mf74hYwgV62DVW1XNZMdWy16B",
  "key27": "4xaFX8mJfTQsv8x7BYNhEtCFytQTvaSCkiHK2QDiKUMAZCD7xiUraR4t2TWfvTVokPj2Dav6C3xNNr48ZtBZRouS",
  "key28": "5iJRarRJGdoqR2N5ZmELdsLmRWFi1KT2RcqGJ7qmByFCf8SJVGgr7TWrsXgijLht5noe8Zn85fsuvHEWy9X9GwCa",
  "key29": "7oPpjT2so1s9p3ccWoDZxLsP9LxsQyvgPEYdVUX8dZPfNSFfWS9yp4zKURFKVaeoJeNQ2aKfFrx71ukpVT6G47U",
  "key30": "sL2pSWoAQuJdVeBhQZQ9dpWsMMCv1XpuyFWB82PexGAKGzq2new1VgvZaMQsGBdqP1p3ag7SxjofQwfZW37g2YM",
  "key31": "jV2niTDo86Pzdh2TjiAEPZf1SfarFcb8sVxozkr3fXgE795FSHkeig546hoq6G3612nXqtQmKd7fvP5zVDVmngA",
  "key32": "5xhKAk7Fs33iJJsg7jeKYCS9FiRBK4TLYTbR73HwmbHC87xPkoRUVWKGgg22PmHp5JNPfkYRD4K5UjyEfZVuj9Yj",
  "key33": "zpS6iGntwqzoaUEt5B6W4zFYaPm9meFXfmJgsN76NQv3mVBDss4L5PRvkURyw3HBHTkvXqoJGT57exh6G6q4w68",
  "key34": "4AmfAdj1cGfaN2cdeesawMzAfEPZjEYUR1gRqhm3Jz7HMm1trJvoJgpLWbKK5as8zN6dVf5r1ddvyNZdHhryEbxi",
  "key35": "5XppYQzf1sn5PwMR3Njso6YxHs27UMu7G8PBJhJapmEtvrwQBPkEkfzZc1vHus38ZBo6G2MtSB3Tc5RB6LwJyTpt",
  "key36": "4hEXkkSTEpuSaBf9Q2pHnmraoAfveQrfPgBF4tNFcW7mHnHZU2auTQfFHhDELmLfyYdJ5V9ZJANNrhSRxXWg2bYs",
  "key37": "5spjCmhQTtNCDSmAhwttpXqSi5Ep6CENSUChN98fX3ZaX2SiEq5awArR2SBaP24N45KQA9Py5cKRG6bQ5MUvUacB",
  "key38": "3Rk55Hz7Usi9hJMzUQFSrcV7ziUcp44KXJqA3woEPYB1kFJHes7CffjJvHHax84C9XC9B88xWDPW7nzc5vrkwHmx",
  "key39": "e7V4JUUPYvn3vXBwMFTkVHktCJ1K1SWxsyLYFh7HJYJJmgA3CmH3oQZNpPFchuTEnWYB515nuPBqmt3CEnTJgx1",
  "key40": "2K2ub37smA4pW4aVdNg9TauhJU2xvPXiQZD8WSL82q3pV6gYtRaWzqUCVp2vTpZDETjMuqqgjFefowFtRM9vjGen",
  "key41": "5GgdpYpMMKvjTrJqbDEoH3Pr4f3s1tDpEucJobTkZeG9rHS7zUnNn6fAB7hHyQP5MbM5HLp2JiecgvqPtjza4YN4",
  "key42": "2KKEX15KfHssC7kZGo2R6otdjUaVNYAuuipU5U2rzZLcP5sd6wycXRP85fnaXj12sEYsZiM8TodmgAcRK4w2HK5V",
  "key43": "3YBJLnXBvycP3w87ZPrqScmarmFotTTy57WR8e9dD34S7uD39ZKD4Xsf8vY45C4jPFy4wFVd76QAw9p6PNxiTULz",
  "key44": "d8xsuQ4XjgxrBTTFjLw6Y5vYHWvWAYQigLA31aHeH6bKye11kZn6LtNPypapjmder2rPSr3Hc8pTWN2YS3qjvDb",
  "key45": "2tbUFUd5EeS5HPZgd47dQT4CurwXRZmrsg157543MPybU2drg45KGmrGqPEE9zBLZU2Q3k9uUWwpmoF6M5khtKyB"
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
