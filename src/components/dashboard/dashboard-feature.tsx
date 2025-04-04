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
    "4rJgDJ8qoqJ5E3swBHw9LeerxsTYMrAzEcgHExW1YeRXzQ5bh2DLTE6Dn4gs3D6gwAWuQFyKSwAYGGnavJdwALuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "329Zccq1RmHNp5PyybaXLvwZ78EWmbRP7QrZu3LtG9CmNpEANXUunVKYad28b9h9bJ3RZKBHRctuurLm41WXvyu6",
  "key1": "4RxhWzbVR7ga4b7cPxAZtb1rb4tAy7CAKUFtrumqyhDc6SLbZLxV4VL8Vr89xgu75CgzkNqwQyShHkZLzTDy9xx8",
  "key2": "55HuqMLF6hWfnGfveefFxFgRPRL1J6YnSo1DtU251BJ1iPE3DW6QF5sHs2XSHRTGTP8L6ExRotTeyhyG4r8HwqaW",
  "key3": "5koFkruXfzy3s7ivhEZjUroyyqNpiThyFFidJpDjXpPQgeWN94uP8EkyJWH6w86Ctge1bQket2dyVLNRigekENyo",
  "key4": "2kSadJDsgxtsPBjRPnUD7w3YpSHE3yvXn9S1nQ15FZpeqBQA7x2gbsNcSNHfCJJb6pYHUELRH7ZdzJdghMt5Lbq",
  "key5": "5jJtpSVQDQZwHjvPNsXrPWC5fij2XEpLqA1UdGGVQGihkGUa7qprdpGrPJaPBv7QFC3ytNtbo6a5gApj468F2pUz",
  "key6": "5znK4g9pkJF3L6758WimaMczSn8sB1FB6ZxJKzwVZEMhtVKa8uCEj7gKQ3UF93KJysbnH3V8FWkGRnoLR1E3isHH",
  "key7": "5EkR2STSpEWw29bN7vjR49HmyZiDaSaYFaHNv9czYdn62nPvXGkKbLiYgYWqsUWLFQS6si8pPsYJcYby4phi7TAc",
  "key8": "2Vwx4NvZMpt6QPoaANPHoDZFroNgD2FaD9ALhJUmHy4qXyfxLmfJoWwqpHUYAmGMd5QUHVNrxksbmqUZVZjkC9C9",
  "key9": "2Ynbfuri6L845WAyqa9Ca8vFMAngbKVDEmHqd91NiXMFGMu1cXM3SckZpkotgYnjRSUWK4e8bBU5QY8gtzLZaaJh",
  "key10": "4Puqb9EzD4RsmvmRF1tVLPT6E6bHGZRgmbW1zqycueXsTspYfzyj1W1oFKbxQomoPMcygnMdetR7wscbA6j21Rvb",
  "key11": "TJwTRKQzGzrRJ1TPmDhc7vN7jFDPwv7KmWBYAHYiQSEVfx36s62iDt8n9Aofrx8esHp5847Etpx78i4wTq82rZq",
  "key12": "wvYmVkRp1D4aSQiogAG7viZDeddi3TmXZ8Chc3LefjXNXynqjwoFqSy7TNcGY58PSVhuZom5DLbsopEbbyxAmeL",
  "key13": "58xweCNiNNgEdKZuavun6QQx2Fiwm6CsgrvCbts8t4EMmA8wx3Z29RcSBr79Fh87jKdif3DV7VN9jGkyWWnFuZ1D",
  "key14": "7GjG9MekSFdZsABsiVs9cXB5mu7AqLnX7J1jwBrWJnzb3GLE15urApHSXkYcwrw7vL7q9RYdh6eHtL9yqXdJQgy",
  "key15": "3nnqnFAwvp9RLLWC7KyRUZBF7sy7Vr9mRi2Zkkj6Cun8vpeByHkXBAAbbvXvt4e6cqwG1cMffJzDUSNygdiB4aFh",
  "key16": "4XUUbHBeFJNFNPKkiVdSRhJvooNXaea5FZzRETU7sfoRuL7f6UGpKP7G5woHe89XWAqceKBTFAowUgixmSvoJ1MK",
  "key17": "3fL5Xvv89hodNKWytQyoZGuJbgTaj6C7KWLqetAEanmG12zdBRwAgLqixmU2TAupFKPjKFz17uZNhu6CZUWUpygM",
  "key18": "3UKwXbMD2XnWYtwa3qvnyVWfBFqHrDzkbiYqWq68y9QefZkqCXkjn4q5NpUvSvLhGgRLS2dVhsssNJVRGrCWuT2w",
  "key19": "iKLsqMBesvQra2gxxtDuyiJ7DiCL8Txc8B6DvjEmKmoDLLJeyLQsxw2xbzMj9HwUhpYrgxLcdA36UPn5m6ngSzV",
  "key20": "51E5zj9jZL1SsHB87rrgjGTYvGLQ5uP4P6zNLzQ86ST8iHP7hsidi4guvLT5mqNAggsZt2VfdPN1LXJbq5mEbN61",
  "key21": "31rAHQ7czMhBKNrUfG1Frvnte79zVuhEt7m6gDRPksKSQdWVcnNUWDVh7LW5qBU6Tm7hYwodLP4bsGGLNcRgvpkm",
  "key22": "4bDBrywWxVwjuzvAfcjPuZ3zn3ash8icdSurm9FDKAPcHSm9Xo2nJJNrkPq31Ywn9j3UVDRCABxseZc4nYMtXJQL",
  "key23": "4YwNbMBRuXkhswQKEeDynMtGnVE4dX7tMEtyJ1W1a51APBcLa6PpQdmJ73J3yEbXRjc4TrcqMnPffM5PnoLmjWNW",
  "key24": "3cvkY23Ls99x9nSxCBGagGxB9N7wk3r8Y83oofF8oJdvgQasnzDsxvV67V3UH5jA88FYi6NfR6hFbG6Hi6dmH7AJ",
  "key25": "3GAtBkkgPt7YVr3orhPZ1GQb3C3MEQK4ARAGN759XqVXDzmkfg7wUYpbn3YvKUkBymfxuHQFY2qKFwKTq56JqzvU",
  "key26": "RqCjUSeytCEXot4r82Mwam8Rjyi95J2yUw6Kzh4yJWEcqQQHv8GFCycaWMYekaz2D2W5UpwgJVaiBkFeiu4uVSU",
  "key27": "3rJdidStowKE9cztncexoFsFebjeBkky1oXv58mceb4cabgfvAPurbpgW3m6ZZa3dgia3qJzYWUehMi9ibmh2y6G",
  "key28": "5zrN93DhbbmPGhRoncvxXSNx5ua5UCJY1Yiu5RYwAC8x8kDXWfexi8t7Fk4Vfr2Wa612Wze2og3g2BUakeo1bLaQ",
  "key29": "nV9fHdcMQ4tnaUZW3Rcwfw9e65q2pRVeaXoUNK74omRcfNHbq1RtS3kKUsbhqAmLfCqQT1XsPBXGRhC6kMv2XRW"
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
