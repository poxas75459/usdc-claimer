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
    "AQxHU17KXrth1Lc5FMkuuST7atCyUzYE3z78MSjD7b3gewSeV15c8GnsrF5pXSmkpTotK87VHedXAML1AnL1fHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1kajW8gc5hjJum5zf3ZKJi9AYGm2u17UafT9nHesZEMMU1vEy1Vszk88g91KgvS2hcAWDRazZ9r9aBNUhv3yWH",
  "key1": "3itW1VDsAs6FxbT2Ehc3SLKdkNAGdHyqxucZseEzPvoVXigHFxneLSEy47DvCc5nzksP4UGsBLHXVYFiz8JNRfgr",
  "key2": "5jF23hgHzqusQFcYcgWyhCuMfSyy7ByhCDCJUFZhgV5ExhTESwP6E2Qmn6oMoXX33PZQgkDJ1JiXnFU4cHwRYBGS",
  "key3": "2vwJxTFXVyQh9fyYHWWWoniDBVKaH3BVB1FkSYrFMbac5iYdPh2GojyR74Th3TSnoB15T5PT6Tmz5aYAM3zp1qMD",
  "key4": "51bDhCn3u3iWn6y2fNFGMoWg1ByArQuioAAdUjVL8qXiB9NbF9ce4Am9m3Jb3Lo8Pk34WTj8YQ4pEjdCL1T51o4",
  "key5": "4xyYMQNnpuACXzdpk2MQNKTU3wV92mjfE4d1k1TDHogFRWBzmR51VRukoQ1JAzp3cd5swazMpGxf4znab3E1tsja",
  "key6": "4CbyXsgUHyotCCGXSejsB1Dhz31B1UvcXjKzQykeDrpgkp9CjzGFtiAxUrHQtzuMx98Rgg8rUoEKDeFxcRap93Qh",
  "key7": "378oqux4t7aKdBjCtcrYw6nP2Ktm1Kz41Y5QWSbpWXn9ZgiEHJkMwLQVe5z438LrfUsyKjuQWoZmUGzsPB1Uy4hg",
  "key8": "3icRqxWg72dLQkmqF2GR1hzJoqWcT4G67wgk9ST7MmRsQWhSQ5GgA9C3Z1hG6cERFVmDVurj8DdHqoe7XzCv7Bj2",
  "key9": "4UfTUMTxLY7MfEN2UfF15dHcCBozBaqP8UxXSRPqRm5fzJaY6FCZdzK9mzAQU6UjReYsXhkLNNKqg22wccrPBFE2",
  "key10": "YmczbKJkfYYy6D164ccVvkag61XgDYDPvYFnYhTTTKS12jxHtN9pGAe4Q4nfozxhUDPpeH5UuC4SSaSAhaTJujg",
  "key11": "DQTy2ggpeqQkc49K4XhPdRdoJnvzTuPjdKe42cxDUSyMHtkUXDdCt7zxekAktpiqwFFsGL8ocHbj1rSaQdQ7u8S",
  "key12": "5Ke5dAWnYpnad4X6yzHrB629bZssKwAQ9VQcUJhRBzmYi4Y7NqkVvkUNC6eBAmHUcGY99wYN4DRXRSPJj3qaUxA7",
  "key13": "6zKQZVo6i6mPsCRYuEvViX7uSaypzHQgfcep1a2xpcp8YEqkAQ9yycDmvWHKxiaJ2Nd4ysud94z1UWTTke9NSgH",
  "key14": "2hdXkRpqm9XA2MaFWS1jwgveHk7CNqT7Li5gfvszehPvVY8ahGMrtRDXtdeDsT1iX2nU3HDdsCxYNAMtd942QCEm",
  "key15": "9HuWwwfurRmtmPz9Y2cBe5KXgQD5jY7M7HSiBxUHFsoqCVWD7XXS4n6qDPDLF7HtGMq7G2UyDuVsHVwgNZ6BybX",
  "key16": "3WxHjjoWY8vqG6mZKNCcdQcDqYhcdhjDQk4Hf1Z15gpTxxsASkqYuXbnMVgJ9Xekz3UXv1zCG6NsjYZXPuFit3ux",
  "key17": "KBfyuua18ymPZQJ3xcW7dE8XSQH7xSrjWimoRw6Pnw3KjCvmGNY7NrFDrruWWrGy5JR6BAjUC9NTxPbVsygSof7",
  "key18": "3y5wLgd86AfdJunrZf3iJUdGGCjom7Emsz17UAdWJm39NWhdzPhcX3i32wqkaKtnjs3wVgx5zrgCZUbzunp7HoqJ",
  "key19": "4JqSy2BP5VKgpi9zTEwKc2BVofJxmS1W6Nssrvyb6vXsKPijW1P5UhJ5DAPKMw6TGssKf4FbTMnTMWVNRJGMsq8p",
  "key20": "teG1mW2Zvmi1MQeHBzZYGVaCVeNrKA4PXyxhuZeerNzKfBjVMGb3H3J4QdSS8AS8f2ec532mLbGmhyF7vt8LPnv",
  "key21": "5E9E38g3wQuZxd2E4SDWiEbhwodfJwqTPtQw93ZVmSAb6uctmya11NxMYVrDGh7TTypXL88zYddCEZY9j4wu1SEG",
  "key22": "3FA94yWH7UQboajqZFt9W6xCmhjRWqTuzSx7c4UqFrnNosG7jSb35MtEGPkcC4bXJqUfULdUBghftDqBZ9f6SMWd",
  "key23": "7t7a3gQJad6gz51Z6ZBYbsycCbii3noRvNs2miMy8rbWZFCfvnV78QX4ms2xMVYtWsRske1itvMpjtSc693m4oG",
  "key24": "unPFp4KNHPEJB56TCicFaes7Lj3agrFNimyGZjriN8jYy64im9oHDnm4axusEJa1HL9mPxpauQhh6mirsfxaiyz",
  "key25": "3Qq9G1UEBanrHhjLwVvn54cTBUqya8YUHG2V3eSgNZqX2cYfJc7tGUp43z7hu9xcmuoTFv9vmuk2iufq85rdUcNC",
  "key26": "aioFTv8Dz4Ahj2Deo87gQ2dqxDYjtv4b3tYViGg4RDrV1mzX1jqQ7YviW1RraDtYfrz383x3rv2vwjwsuaZMycs",
  "key27": "3YBjgeYQpwNaLQFVS9RaX96ZToxVRiWP2oBfSm71zudXGe36o7kPonSrffvJBzvTcekWRNTPZUpEmkrSY9e5Jj5E",
  "key28": "5sqqzaYkod9irSUG51r6E2BuFUbDo6dvJsWNMNE9JL9vRS4pKW5p7H9nEif3eRVp1C3pznphHfQuAFsXwx22tLyv",
  "key29": "SWY1ZwtLSdyZAaQwKxfYSsXpwxearX3ePDgJSUJQe3ZwjAiehAQxbgCA2jtS77ro5tMDUtfjoqBCnvW7L4iJ1Av",
  "key30": "bkqmiykF7WhW38LNKN9t8csPFq9ieT7yuAYzwqTVSfcK6BkTxd6ekDqRUne79w6iGXzFivohh7Ddhq5UGqbNJqE",
  "key31": "3MuTLkzm8RYykjkKJup8CnbZzeKTtCeYgowS7xoL3ya2Wbt8Qx9DsM3CBvYnvuVgnJbL6Cpdf4Rqg5cKPquMMpZi",
  "key32": "5TtUrx8ynNGaKGXdeo3GFyvJgwZEJHqyrmspJR8jrwCurjZJitwe4LF14QgnSGkFUmTFt92cMCY9wNTpXC1EgEz3",
  "key33": "2PbErvpEtT55oMAgPgK3uzHjxzZjoLHJwG9XWuJLc2ao34L3sMprWibpZR3foapoFYiiBMdHZzFaQa9R4oXxybGn",
  "key34": "4orjMwtRWaaLmvH3gTmEZyqY9WHxCAMdC9ifRBdX8gen2RJkbnvsiazvdRGj7YpjNgP8tJRc1KhDZ12hTBPrmKtA",
  "key35": "2GrUJs89GgnRzHPHbJhckHEbHaTtLFhqVjeP83Tvw6dzQJxsTwzLboxdChGbSXLQNjwCeUaWAnyvdFVuYNDw2Rn9",
  "key36": "qHY5K4eHUNzWcw6Gw8aNK4MFqgzojRHMR8RY8ZMHvpspx8oApuCYUJFgHWn4s9DUQ3VVXhhFdwuqRCKtUq91qf8",
  "key37": "3RzDVbFN8XrZjhvduHpT5FrNq27J15PWwXAG14a69RF5V3FnvzP1k7YLWNFkkMuNkicn1E2155e36p8sRwh7PXAZ"
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
