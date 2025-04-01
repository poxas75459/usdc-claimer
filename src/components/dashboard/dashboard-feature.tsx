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
    "288D8hHgiVuGfYfjK8hGb9sAQmisJT7LmDaspBEcd2aXdbXZGHJiYSfeqLXWCuGGWJNmfj6Jes8oVJG8R7AjdFEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vA5a1nWeRmx4HEZ74gyE2btCZusWPxGSLDn9G9nbcyjCyLWbHXPRSqD7N4e8GkKxNEuBpoQc6SpBJKkMJHj6rPy",
  "key1": "2AHYaajGEgxnZPUNbz6X4BwXgvaopa2uvLvvvvQpUQfVouiHzUuwWgVzLmTwLq6Tr3iaBdR1rz4BRvyFkgWw1Saf",
  "key2": "2MWADHAkfKCfzte7Hg4vCpGC78zYX5cKnbMLBA4HWptSDbkRRgTaF3rE36CViJoCTYqSFV3za3w2ANcvg4tJQnn1",
  "key3": "2NZXAVTatUwFwzvy3PfZzzRt65FvKRwgfFyqEY5xgoPQFdsHTWbTS794tnCVtNAsdU3b6ApXh766UPXZNnxjSzSE",
  "key4": "5q2soNeAiJKiwek2FZ2Wz3t2MswgLdfggnbyQw1qYJKy8VF5ve7GQXduRQmky5GKKP8jD3H3mUar8oBowtC2zRo1",
  "key5": "wCNgv7SjuLM5Zi9Bss6aH9AiGrMauHWN4sr7FpkkgRWTccAreewu4MtynP4fvSmFZD7vGfn8iVDisvt7u9FMTGe",
  "key6": "5GdkpdToCRG9rykveJ6UVDCW85MMJReMLZpieMM2xv2kKw9wSAbsM7Jqwudn8CYMZzaZzrjjna98b2GJT19sZPKC",
  "key7": "34irTC6BdkfD8xMUNdKrARdJ1bUP1UWUdCxnJMGW1YTzNCYnNmvaLiDtHDNovFU7PmvXu5NzxNFnRd3gmxM3ZEUo",
  "key8": "3PToXNx4mr3RWJZAeEWSJXh7UeHhHftn27bxiVKHpoMZbxNqDHdbCiWGMLyukqiNuXNw7xc5TkwNm9c5SwB6qPQV",
  "key9": "6ygZkUw7BSpgiitEsv9V4hNtdQJgQBdBvrpj8pUojzyAKrwpkWMyRtKFJntyUL4JZ6AUhkRKi3QmJWZoqJCBok1",
  "key10": "23jS6ZwpUJUdLCCGcHf3X9fBQsMPjD1eQb8JKmDder6zpbmZFYJAZUbVP8KqPReKDwz7xyS5XLpfNwZGSPwhW1BS",
  "key11": "zp5uqgUB3tmXQMp9AosjJBY2g5aDcTmv9yQpEC4Kt9mcecD84NpXEUC2qBHRLnbUBhkDsTXgqFAYdm8CDdku8aB",
  "key12": "2ggff7AhaEjN2PbkTBTPDK3XCnQDzn6ezkiUEC1PZjdJGanLBG3mWYKkt3Zdn8yzeSg5QKUjiDhbtga9LF5nSsAZ",
  "key13": "2SBxXCFomSCJhBfAk97p3ujDMkqVcxQch5oH78M17WhcHjSg56xdX5HA1aUMExyDx8t9jSfUs9G6dX826gSAkb12",
  "key14": "4gszJAtK6Bi2ikJjgukFgzdQC7tDBseP6DFrHW1qtvrbp22oY3w6dEjfQqy2T6XGgTfFPReUq6Sk5imNrjELghtN",
  "key15": "2K7cu2yA2MPgbNvxSbK1mYS718Z9JRNBQQqWr7DvBSRJYDZBU3ZVjDJzTQPqZpwNt8se5nYEhe1jVp1SjRtqCrFm",
  "key16": "59Q5dtMiWAGFtXWiuJZKcqHPWBX8v6jcBZtAG6rPRJa6MikMECuxLcRv5BcatBeS5g6vsX5B6auXU2ej7U1Bwr6F",
  "key17": "bdGF6mWSNqpQXtLZBTSTAEjpqmr5hwY9nqmtYmLFVBC5QVDJz4xjg8LAFmMHm73KE2rtAwZDWfeP5RkYT4yPxdn",
  "key18": "4hHCLNCgC68DqbctUuM16JN9Rs3r2nZAmvkCT2cZVqS5cbaEdRouFwXCHCDQfKfJDdDA5TkNwFxVf6h42GJGVRQr",
  "key19": "4SqUdhc6suo9KMfdJLpRcL151Edtvooqg3Y4r5F6pSr1iMtJGkxtus2tpnSoJcyVBKzrZC7yMiqmG1dUbQX2FVWs",
  "key20": "5kSiqnSJuX1gniGQbYmnGZu2QqKtNyYqCFUycZfwQSw7BhMWsnbh6F2aaKCxL691akB8vHsa6gaaCxHf7JKuruMP",
  "key21": "4iijFXhCrgLLgSA6ver1c9M1gdDvRPqfHgHccamAqGYFgEepRAkJ2dpKSYTkLquAioYuucBmKwUBFBGBhssH1bWN",
  "key22": "3VKcQ2PWquMMypffa8V66PCTSXVEHDL6Qd8F87xZPCnGh81Z7P9Fu4gwQgpURs2XsBY6ZGpmNJj2494Fjtrhtfb9",
  "key23": "3TVjkvdxnFCepE5TKoYC1fLdHj4vH1F6htVe3LHT8eRJVu3oa5PUHULgLQYMrBrca9peodtq2cVPNgiuk5YaDmTh",
  "key24": "4QvrsTexsEZvUa9pYnJFDqMR8VeFguoSyb1nXDFrAKcti74ok5R9aHnVAM9QSRv2CCovXCxwB11YaZuYHi1o5B2Q",
  "key25": "2ANjvfLpUvtpbAn7SxhZr1D4yHq2fXD3oskuCnVfaqa9ED7c2atFJQ9mPhUcYereVYHbUJq5Mi4rXcQMXs2WKur8",
  "key26": "5rpmKfZkEj6HbRZk4eYd7yFdeiWagHYeB9FcgDzBHtQcNQrdWPDbodgK95zs3G6f7uWMEpb5m41wTur8X6KdksnG",
  "key27": "fVFhgtNvF4vF86hvv59GXGB9ZU8NbByUbEUBiWWpYXBLeLtZDJT7om8dDsqfrJPyKLorQXJ9wfioqtzrMR7SNua",
  "key28": "54SiVvymatc2Uct6DHPTAa9R2qk6jE8tmtfkFFb7HeWS7ZCnNBH97BLhjsdRPsyjoTK1EB4Y5Vyaqez2Qf8EG86d",
  "key29": "Mok9JsJ42mDgD5FxvvHcyhdvT6d9SWgrmZkys3cTBVeSf7c1JcnZFmFR2U5Fz3cY8PKJYTQQTbUZeHCAEcEZwQu",
  "key30": "4djF6RipJnku5eQNRVnJmSXJxjdoCojEyjjjcV8jWiCinFqUaUj26KQ63YmAiyQcpEuwshDPfAbiZpo7n9CA2nQM",
  "key31": "5YtgrJW4DaYPCvfVL2yo7cuRpLY7kbyzWs98Fx1fhqNnfkW9z74Xw5PB1JpsBUFH6Xi86PWT77dBSVi2z2EHhWuT",
  "key32": "2WatJRkh2MtifnHfhSLtQEVGTyYHhLV9o4Am5B3fCY7goyxT7uELcYvQ8ZRWSFu6Z6sCfJ9TRxnWtF7mGgfNuXSa",
  "key33": "4Koys9gBUwzxuxszJKYSkR5zKBrqRbM7Yp8zWr1YkkGtjKXNr3DKoqZArxqKGVimFethieXTqDafC5drjxCJZRwL",
  "key34": "2zYMwgbW1P1E4wgDxJGvL1Jw5xGd7jEHGaQen4zwra9g3RVLmugFFBkaUv5wh2RTQTTPgmrZMZXmyWQBCm6nwSC6"
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
