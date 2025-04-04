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
    "5S3PwvqXck2dLrzq15B7jMkiBf4ecTReLwdug4JxLYm9pAUoYVnjhPmPBVPCyqELiJiBbHj9sWff7p1jzBj3wLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJzssE6dRzvSFkd9anHDRrVXLM4wFPBErKg6Ed5P7ni6wDvJyqvUDZeFuw77JXdh4PEDSysdzXYp9vK9JNBYZ4r",
  "key1": "61B3PjccznyfWxZtq9Z9qCTj2gMDzLPfaqyiHiSYUyTxX1RVdeSAPgsqr5YWWdicbuhxX644u9kEmWJa48gfbT4n",
  "key2": "21N9PX8qDFYPvj8XNSJzPgWH3Mh5fhXXLBugu2Ct6aqqwQ92B7s5EvUjEJX5pRmPvbKrz8ttcP1H3C3fJeq3gVwK",
  "key3": "3EuSX3cR8kGeHdtL2W5Um6ffLb8zicjBXn9oDDz3SdMuav9maBfjJQ1Q5WKehsWhYfKX5ZLnj4NaJKLpAtbmr2PM",
  "key4": "4p4RWHwPRrAcTgMDq5Y59orGx1QBsuBTH5yAxegU3PpFox2XMpzfBymdgREh6w8YXmi8UDnv2gDUz2hNv9RNyhn8",
  "key5": "3drCoF72TRFvnppcA3nLEJvGe6n6a4vvcfhvvwdAbRMzvnkEWwBYUGEaYzCdcnCe2JWriGotR7zeWUQakNoNcBWk",
  "key6": "qmyyec5XhbPStMZ34jtjFEvrw1fw3o27fpYmurKQ2R6NGe6ZxToMtjnVJFq4T6un6APUJR7nhkEFCZGCBwzhzDV",
  "key7": "KAvRoe8t22m9BC5JFciSkVZxSdarPAuXmFNBh7WZcsMxp3EqPQ9kWovg8719nS1qdgxgio2d9pyPXfqXNRdZUif",
  "key8": "2jAF7fEbL8zHoZHaC6wS9Z2UJVrLp4ngqbDjsb5kE9qDXdXS7ZrGerZcPqtxiWfPaLCQmHGrGMLhpX7kHmvWUHhY",
  "key9": "TqqfV6afBCkxHvc4niDL7eKiFqFnHXWq3BwwJX1BPQTM1cfFsoQ4zHaSAFNSiUCAgtzNRVksNAxQLJJDza4tczi",
  "key10": "tpZu9JhZ7tymetCmMeCg4UvpKtWaXf7unyUmy7v9fA1nKBZGNhQbgoPq12kMJYF74f33FUq1bPVyGy4FRTUjmKM",
  "key11": "2dT2kdd8wbQk38XiuQKjwjpgqDXkvd2XGZFoijjqBHn22EGC4HpNkBnvRry7TQzNcHS88nf1AF1L2NXC1CCujdfG",
  "key12": "3w2eq581MGZqM4XneHkYSg5W1EJW2BKio1oaPuVtn8gXDtzQ1WN22udL2fxS5u2z2w7ZP9cYpgeoTPiyWgpu23vc",
  "key13": "4NC5ED5WLU2TNNQQtkKenLc4Tww8a4CzA1FDNGVVZPdo2CxFD6J1kt1vXweuShXV5ZbnKzaEi4KGWwNsemQAVtJV",
  "key14": "29wvgz8sPxY9mJkuUZDEfgtfKvE9PaBtVke2EZwB11PucLkZvSCWRg5AgnfYXiY145r5YsGyLhCa7GE8ruyGL2yZ",
  "key15": "5zeJjKT1NygtEHyvNj8LTimR9yScfmgYEiQ5GjKtCpdsYRorVHBBuDBDEPHh81dbA6oesU7aDGMbC1oecmAEfqCN",
  "key16": "26ibLioqXfoZTEtYKJcxPM6yoa2vEJAL7C9L95ffx4EaVJciucK3zERwDPfLQoZb1hLgTywDnDCkjuA8qMg8RNhh",
  "key17": "4g3eFSAPwcwcQpg4kFV5dWmsVoDPXSMS8CXo7uzcW7YXCv7rNFFk3yHRX658ouTNugJDm7o3n141YDe3AUkRvSEA",
  "key18": "2n29D39kNs2zXWn7iswHvn4g9v2eabtGqrKZBdLKJ34UHxAfyeJUPHRqT2gu68eQL7HyBXpvxf8bSxJenbio4CS6",
  "key19": "4SxjnpQzMURPs9upZhmLVDoNQCFByCeFtnFn3aUbVesNpAyqQbQ1eFJRrPN5hamyrL4GvrWaGB9CV9Lno16kQa7d",
  "key20": "65SXCJE8YLQjCB3JWiAEjT8Ytt4qmmVTQLHy65FGTsidEL3WQgYQQ6JctWbaWJPP6J6VqrkxgoLmEqRrz8nSSYB",
  "key21": "426ZfbUzwWQx4yGvvnTDfqxmoTWppXLkRPyzCPmn1hCzBCLKxsuMZLcfb9cWBEhf3cjB5RbfxxetGpiFoLQUTWK1",
  "key22": "3ewExvifsHYk2YedXDG3BWqVzBJnriWotaqVqwaKY8ctrKw1kkFpkZckAmRnd4yTZS5HDaGqzFujNpB1Y2HyEabA",
  "key23": "4fDYw2aELajvR2CetCSR6SWwfw7cjWkyV97ofEUwXSiLDiU7zfS9ULXKhAi94gFw3CmPEmP1bQRpukoUYYDNLxh6",
  "key24": "mBvVkd2m5pW9gA99KxPJJjorG5mPd47CvRLbGRiQw7eNBLrXgALrtPccZ2E5YEJs5Ec7VQw5aNYL3GjCC2G4T64",
  "key25": "4rCz15jMihGcU3rmKFzLhhMGXsBUJ3FLwXo2VAaYk5d43P1yKkT8eguY3UgotnC6Z8L8r2z2v3xPVkeC1SQesbnH",
  "key26": "2FfA7wxCWbQTs5sAhvSFTNpaja4AnVkJF8besedPXFU8nT68GpmG35Afu41vTvj94rdqvtyhaqdHWouynrh5pV2C",
  "key27": "4CH51wxZfUXA9VDZJ3xCVnXkqdoSo8GDZRTpBeUfr6sSF99VHqkYK4s9BoAEyi3Hha6bq5x2GxHsnW29FbcvN8j1",
  "key28": "4x9Rj7Q8K3ehQS6zE5VsS13tjdD6vEkoGaMWYYy6mqgKoySkqW35bhS2TkDE9vAkfrWwYMAs1cSzbo3pENGFmV6h",
  "key29": "533C3799wM8HadEVXUapdgyYewTY2LS692ntkK2qYYXgzh8Xwu65gKKZEKiQqiMbtiwyRJRGbaePc2L6Ty6iFWxq",
  "key30": "4H1VS43xXAdPpuar8ns1vx3QCtPofrBCJA1cxxtWopuBALKS2eACsmVwrhcgowm3hchkA2vBqK5o5wsjpRhiMdQz",
  "key31": "37tM7scVyDcHczhce8HjtqQgz22BdUuPPMUVXfmRe2zxqW8YjA5KJJWzR319kD7bnYutwGsfmgagD8Bd4dyBftSA",
  "key32": "3uM6oWTvA4WNnv9wkEJgFSqQ9133b4JKA7QX2LvoRfumJW1H8b8YqYpQpvf8QzzRioCc1oRoGbxfTCtFSYzgT29i",
  "key33": "cU8RcionWELiFQtRqADCUVkTPjt2S9swWy3Bs2Pz1C7NsJKaXs95BWntW4VFAiN9n7udPdpiFumdoniiA1pB4AF",
  "key34": "4UQegktmXSzqxYvEK1R5V7A385rqyzXrG7tTtSpjzYxDsA6xcNoNKnvWeK8BD2Ns9r2iJt7TNMTofpUZwaMLk9HU",
  "key35": "4Rv9a1qfcLrbkWXetXyTLzrBvRaHKfeoVRvhyrpL5ksPuj9AWZZJtqKa8a38nQ7qV9wLQZqKHo542YfaKvs5Fqkr",
  "key36": "XfZyCki55De7b3mk7CrHxb7u3SUih5NXtetkVUmJ1cXjMjz93s7SxqLPVUJtNBgfaXAoszts6kByEaUJ5s2VvBf",
  "key37": "3gRn8PPk76BdAoLNpFbgQXCdnimSfgqKQ2oUsPLA2jGvNm4nukwbQdqQgiveZhGPzmfkGB1gqXgUH2FeLio7m5h4",
  "key38": "4zvw26RKnQvsUtKMKg9yk3Do3kPqYs7BWojhf9gTQE3yFm8LpXQ2rsPZmmmJGN77XHVum9RU53QLHP5ToeQo1Hog",
  "key39": "3aTCKgr83rrrSDG32ALA53HUAHTKSpZGhbuSspRbkyxyAsmx7EDz51B8sZuqmg4i3kUpiU45efwY3CthXxRNUk1N",
  "key40": "5ntMpsEL5f3HqnwfqFoMdFqfaQvtsxaVG2ZH2hPBX5DPZGDWN7nQ3cpKyfyw4svctTwgnudq5DP7gqB9y1VfPhj3",
  "key41": "2R2W68AYMMpioFjDXkKTdxX1MU2S68kdqBrk898bm2QjZa3LhxnRzrsgQ1cHyF8GE8dXoNGzV5DCTmXQ7zLc69Zw",
  "key42": "4JokMsS1wDz7oMZ2BreFZ9anCN7m24nnYLURKbjmDJxf2G6tLrQSUZwX64FxZqYzWcB4pDwYiX1K2qCjG8hcrfqq",
  "key43": "4LNoWKr3B8nonishQwCtEmoTNWNYKS8PXevf9WjCWykD1ZkZrBkf5TVf6kKFPAZfzU1xKBuKtMnYx2SemaEu7QEm",
  "key44": "41rwVXeSkomooVw8JXque2zk1oByjhBqR1iPMoHw5qhLDHGZAZvhnR1F8mLH57zaC9MJpGjvNuEP71ZNDv4aYpgb"
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
