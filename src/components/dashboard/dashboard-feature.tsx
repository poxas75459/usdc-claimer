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
    "446xkam39QHu7xS9Ct5MUxmm1SSjwWjG8H4QuF78fTt9FXcU7yPUgNjV38owJGFXucMqhVd9g76qYjUEiZijmJAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RqL2GFSRy6DXX2fNmShNSsV7ZA1Ub6NKpqYaux8JVJReecaDkXajph8a2JRHSaJgXZAG2rrCcXvmTs6r3L5bhyg",
  "key1": "2CKFiPRjpdbCEqw8LiGzUgfBRMuXgwCc2Ac1e7epvK9yh5gqckNRxG5b1j3vcc7G3HzuGfqZ18kUqVRUHJfRAmp1",
  "key2": "4aorz1L8JyWYu51ycfHMAaeoP4CVfhqn2QpjFhpaS5EfFJxMm7m7zoH86cPQ77JqqW5q7oUpj6vmaw5R3VcVCtav",
  "key3": "R35fAAnBs9eWX8BAHxt8zRBg16LtyEhqgU9vDL4AZvLCUvAJ1sPz2zfFN6942z1TnwxNLdPXCzqFsDaBWsSRHF8",
  "key4": "UJZTRcnQBCvT46Ux6X6WK1FZh2UWDQTuMh2mg9pFS1qS9Jrof1kqEzQX1HsrUbFwM4yuqJsfyY2tRkhgwpDAVYL",
  "key5": "3n7psoqCFEbiMT2M4UAwyaQyXMyTZ8PMfYieFNcYiwVwZ72UJs34c5p2ZNdByXCXsaa4pZ3vnx48DdzFTJJbF4Jj",
  "key6": "4wfECA4bsXGV9AVMyFxuBrGBqSrJPD2oNSkYzm8fuTJDdtQausuCToPi7ckfk1bMzTfbyvowcuEnZ9J6nSig4HUW",
  "key7": "3dVVaact9SHNe3tZSHfuwCQBaW5Pz8pRpHtfRH6HeyntBMQC2bD286C93pK2MPreV53YGBwVUYRPxG3LF2AAa9tJ",
  "key8": "GrqkhZvvN5qXvdyJLbiNdq66Upw6L1BZomehwcEfkUXLKFirSCqjnfUP9SNqcgC4MY3Et4NxMihT9H1UHDS42dH",
  "key9": "4i7FruJjyg6CezE2H81o8c7YUUoe69rN6vdV2QJZkZRVnekFi5tuLgA38o24R9CE6r81kzXrotW1hPzHrU5ncyYD",
  "key10": "jkoJxfDgE4dqxCdtECdvttW21qqy5poZfKdMCUhXSgAZaTUDZJT8qsdqkeCypTGcXG9Rrwaos8hZ4yxHoTZiQA2",
  "key11": "31RozB9hKp3W5jWZfhP4xEYtW2yhktJgcPMoJHoxTDQcvhExuogqAERf1WmMDxn5F3fDqa9pjqLpxgK3JqBAyUDP",
  "key12": "4tz8hZzeNUVERMPmrQ17v73tUK1ro1CSxSPgtR6du7xyoRZeQpzd41AY11dC8CbxNi21MdeLJ9TwG6QCGx4rN1MC",
  "key13": "4UfToXvWTfj9KLapm42n3Wu2KvCNPDCSLsUhq6eg4S6neZHWBUu7ULVWiuZ1MmQ4cQ1p98Bmu9Ts611ViYLQjAD7",
  "key14": "5mbyXgqxj6Dpso8sij4ZLUf9FSYxZ7Tt5qteyLVqnuygdfYvn9ZS6HY37ADWZENvoQr4dKusFcN3ZCtabppiaWyf",
  "key15": "4aSTUadjUKoj6hoZdUz9tKKi4ZawBogNTNfW1SoKW4Vrvu7fwp5R4QE7hWQ1EGN6Xhp7TisaoYgBJFpgsmudWpJ1",
  "key16": "4WxW4DvFarfLufQjAeRo2phPUwz9w7SUYzkPhvy3vqCUBA69PZYuJfX7zgebjpnFvPDCMwV7W9MRRQ5KWbN8aDMa",
  "key17": "2BdBr17Wj6BNPAdbncUiBRALB43GQEM4CLUwT8bdgABDkmZ7KfsFyefgu2eGniadcd4ic48ovyWeiBmUfF9V1Na8",
  "key18": "2iiRjoBor8JNU1wj3wpiXcdJoZP9goLMG4yC5Q8ZQd8FjnqyYBwM4cZ5hfsfdhBFiTNo4aAimJyQFZJezDVhxEUx",
  "key19": "4NE7719pn7RvadrY6ENmoiL4gfKPrvg5RFZ8JqyFXTp9SsewERHmLsaeA6GPiAVr7YFcr5kz5wGVeY6ZH6Xe9Y3t",
  "key20": "5VxCY8LezcWJWsjmjSbFeHc74i2w11jysEUGkFzTcvYcSkSdpBQZgNJNejTYNyCP1uXqW6eVWyL2TzK5P4PMEjPA",
  "key21": "64VZwAcQQdkNAYKMuJc79ZUuDChPppUHnLso2C9TrBAz9H5GJdD6KE9W8sjiggsBb1jcbBF6zgqiNUt98CFaGCPC",
  "key22": "2a5Xej851uZ1tcPRu2ootE7ZzhPQTMpviKKeWgrhV1eK7dGiQpbSSZgepnrRfPm85yfZRVVnGXiSqShHPkG7yKFg",
  "key23": "2U25Yn4gqQtCfAtYQ4qGCPuTBDd7sWJLJxchwYKzfdiqCVbGzMfNWC7mPHNZRAMdYngnX49ELfGDNs52jUYxDrZw",
  "key24": "sr1oPVbbTkh8MucAHLGUxqxmH9Rb1AKnh9a7vGmAniKQypfQsm1zb2VQShQ65EhxoCxPzfCEF9xZvEAcPWhLWgR",
  "key25": "4282QCqQ7cCJVpyxaMHPwTsdjdAGeok5SyK1mAfwPcVVZD2CD51QJXow8AbnBHvjBW31cvp1U6FxVL4LX4Wpnn9T",
  "key26": "2fRY3g3VBuHD8YZGrQRdVYapQMtrdjJ1oYSUJTFBJeoxv5YSdDUy1EBrn916qgBDCh9PJYTpqFw9iimtS97hyze7",
  "key27": "4FQ1yrMnwfy7ETyaF4ky1dwhmRuTpWFXWbVPGq3Frxd9S4VYbn4KCBu2XaFVWCFciJPEook9zYQp7p9EfpUh36Jx",
  "key28": "5Xbt366DGatwY5iWiPdLpUNT4bnQJo2wnWuLrqCFXzjHG1qBt9JRRExMsYNfTxSnPPEvPKDz8bK4ympzCea37rst",
  "key29": "4ccWsyJ3KoLxzoR15xXiULo6FKGDj75bA7FT1CYkp8cZtirZGqEhaY53hxVQcgfuAgRJmta3mKa71e3P2Z593e1X",
  "key30": "4YrBR1JZdf4uDshVAYUKsuctwhWxdf2x2JQVP4dm7EUYtVbikcSu42sA6xEayzS6za5dW8nARz4hvhZtK4nkcXLU",
  "key31": "BFVJJYQBLh4nyHw4tbZdxdhiFaNx6WGXNfSkLmzk7pnM1aFRhA32Dw4V5hNdaRp3iN7nP9eApMtckUEHtwGr9Ab",
  "key32": "5iS68WpY11V46k5BWo4X3FC1MvqxBK4A7hTmfQFHNZYpKP3oFaGsq2FhvFw5ymRwJ4NC2PG53VLyhZrdX335RpWc",
  "key33": "2Sb5Jgq9yNct2hCqRYBvYjK4QY7hpjmCab4g5yxSqbHnR9SGD6KMtioxzWA3jeRwA6acmXP6epVXAuXdefxEjYDP",
  "key34": "jP1Tgow7BBZyoKknxsLD1FvJZpZTqTtLHrVjRvr1zHN5TzseCyiiCeQdZYCJMcAtKTfKbYNgxjFJiEVGSFtTMLB",
  "key35": "2aQbdRa8fscYUtdaqgv3PSH3GKFjRLwmXEN9S43eEbyYGhNrs8TtoEmfByvnPDQ41fNXVs8T4dspPy3fwogr7tiy",
  "key36": "45hUt8wvMLXhxcsQ3A9SrUorkWYy9Fe7cYSJqkqZmTinThcSDcoi4ZptSqJ4YtkoUiiE1eb8sUMjN9CMCtz3Pd8G"
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
