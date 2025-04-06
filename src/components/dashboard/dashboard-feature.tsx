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
    "2voexT18VpKvbeH3yPxg5qRLZeX28wT5ncCTyZHZYhqXghmknuTS5GWnynqtowCiwDdjf4TzcyW5QzEw7pEGHdyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Yr7wabXo7FtNosrffRJZtwfsuoMd2dkfSnysryyWB75dw9G8KMUrnfj1w8pS3FFuQ8AWjHrFJDU4ma2E7mWeUk",
  "key1": "2j1BtYzwbziWhqY8B73ohYk56pSDpB1xhn833zCzh6BBjcCkLYgZccbubZc2UMKSfsiSibSNtuQHhtKDND2r1zmf",
  "key2": "kVPmwnYE99ZbQfvEhNvfrptrYLdJE6FsgNQVuUGdZrPhpW9zjGvW2xWDj5851cf5wuduE8BphUGHRiMMXGzvWUf",
  "key3": "42woxi2ZCc44hoo3vGaaENHPwWApbncYEgz2eQiDDNNt4UBjoHzmpKC4dzqiZNBsB7ToCaWH7QFqrLYmgBPNBbse",
  "key4": "5UpyCwkrGzYzM3DGxNg2G7D4x7dD71qmb2ienYuUoMiLiLcfNQVxGUfzQEXznSrCByh4M4GKhvvyczU6mNFQtJ7t",
  "key5": "4FYFRZzwj5794yY7uKDBbTQ9MP6wH9y7R5q6rfzM6LY1UC31DvQKq5TmAkNPgKgGKCf1TSgJ5Vp2X3XUkTuPtQKd",
  "key6": "YX7F9d1ie3zNW847HtVvFMQCtBDxjmbd8QR6HumwFzxzY63DovSGQ8PBtSLadwGsZsJCJxXNenemYuiWwaWM1oD",
  "key7": "4GE2DQ4HCNrsCKv6o3xtbeVL57v2T9qChA5wUnNszf2SsNVZ3w2jSb1RYSCsCgRMY8V7NccTa1wpAYNToQ8pJCnv",
  "key8": "3D6NPLDpCzzQHS66cFwbwVyv9cbu5ckcCYcjgZKHQdCCLgPGWVqaKF7FpAvcQVMUjewnvKP4MRNZeKthHjLe5h1z",
  "key9": "5xKq1F5raQt5etiHUiPH5EdRKznsVXGzhPmigMmGrGQJoZ986xkuo8fNpPnr9njykdGb5KX55ZJ2vAz426AG6Ad7",
  "key10": "QCiVZmiipR93Am7e6KMDri88S64YrVEqL7HNjuEsddb9GZs8fds8vJFsvF53NbJ528iBg28E4XbXD24gqBoQ4AH",
  "key11": "38oF548aZhxjAamBd9utpjbAMyZ4HxuHDepisF3yhnfX76mVu9XvaZLUEyajBWYEyJ2dXf49wNe2xGrT3GyByKZe",
  "key12": "4S14YKc85rUSqpYTnqzWasZ8xDmTCToog3KdwZVdGWU67xDBpqip4pPKFfUbDQfCiAyGwAcUfNiki8PNTYJ3ohce",
  "key13": "pR4FDMosLHdSX8wamNQgX4oCF8mGFGMBcj3eKnZKHMDKbJVxgVnMQedtEiXveGfF7FUg7DTFdCxLitwk9YjtSP1",
  "key14": "zVsByNLx83FyH8CqZSuxAB9aAQRszaowKfgK7CvnsGpeExxafMgS9rR7XCngRo51Bv5mUHTv6K5jku5QdLLYhv3",
  "key15": "54u6g1QX8WqyaGAdHsidpTkak4oAWc6m2XmmHod3ovPSQnGy5yD2xMb1ZuNjwr6Qqm6bcgnpfLQo4H1HfDyEHr2M",
  "key16": "2uiiqF73gMoiYJQ5MBvkzFrgnG6SHXhBvwKG3MMGya4Z3Qd1qreicCvfSLCuxLAvdLqfZJhhWMHwBY6m7sNNEoRM",
  "key17": "3PKnk2GiwBLRJMVJmZ945JtBHbMHFhvLc5n3eGnHXvWxrEZTWRemkCas1DYGVRLXj1s5wSURQ9TMrkNubScSWF4e",
  "key18": "9vuqnUEZ3tp5wjnyE8kh8VtQCoEieGfe1QBVRPW99MVax94q8LhXXEe8UGdv9eTuF49yneYwmhpN2dSWtdUygEv",
  "key19": "4taCNdpcY54JDPJkphxZAKLtEYfcxJBwZ6XajTccTHAqk71ZmVdpFrssaZkcZt3fZyNLxsRXLVTGPtLN1PPDsMYr",
  "key20": "5voX2xgDrq7P1Jh5oTPscEZK2GxVuyW1rhsydmuVAcnUac97TPUKukJqDwAcmYwoaY81m7FJCt5AkFordZacamhe",
  "key21": "EqCy4TDhchpwA4AdNHNW3LYmf9WL8Qtv3Dx2ZnVtCnpkW9zSod7nMvJ38gbmz58x7ocDgiW7UUupc1zn3J6382B",
  "key22": "3vU5RNDpVyYuU3WZGa2fYq2VcQgtypjuRkw82XaPwM25CbeScWvQTXpr12Le3h6mJQqnAx49rfEJGFfDyX8PiE4N",
  "key23": "3mDuZXDMhYQw8ZTH52SrGNpnHqzeL8PpNTZSKB6umm2KwuUUtKNmL9dTFyvHLvctVuiE1NFpv5egsUXb5NvGg3gS",
  "key24": "tXiPMy7nuprD3QJwp2R34SDwgCzcw91o9oEciJyi7dpfev32k236g7pE2k4crYShwSWTq66skjV3A6jNC7gFWgL",
  "key25": "mfrumZXBybe8EPJzdVd7Bsn52m8tkqbQgFNyGbfeWSC7nXvHsy2NAvv3ydqNvQCEG9pZyCW3hbs9jcmpmUpcBGS",
  "key26": "4N97mtdar8vcpYmFnFrdt1SrpAKMT5Azkuysw9MoMXHcqLPQrreDU62tD3J4SksAbYFfPReV9HBVzuwRiW7VoeZr",
  "key27": "3ADeYviw24dhHuhJkKTdPGyvWkJ2U4T5yKj8zEaYtFD4sNXLMjzpcVDTwAu9rxoTQbqa6j7Xbd7A7FKFycSoKULZ",
  "key28": "3Hdr57KUqUtGxWoeSDSBDby7FdYvQz8PHi785q8bWQU8tVpX27Mj3kRYE2vyoazEoaNT3yN4ExPXm1vRPLYUeqMh",
  "key29": "4qQkZjXLJfFoCS8LgxRhcvLq9JS37mHwYHhy7yWAb25iJmt5xft26vmJurZeJPCo2GRWS5asvvzsYMaDntydfiyi",
  "key30": "XYFN76ArMSPKJY34jx4hPuqbK3ujzLJCdhKzyNUcXJho8FDPymbSAV9ebuoZrMJkaY3XwnNfrwHUg7pVdyZt3we",
  "key31": "478T2WSRkiJELcpeyvvxG9qri2fxZf2ZeBJRD3p8aCqZfVvzd1c9DYXNJyvS7e1n4s27becZzRW5kzjyv6XMPQ6s",
  "key32": "SqT7rGydRh4MZZ4GCDES7cxPrv6AB1A5TPn7rSANiiwN7RoTJK2gY2wDrzFn9GrMuh8U61o9f6XZwnNkUCqekkp",
  "key33": "2koYnTGXPykVjMGQU49DGzQW1YDaUyKjfgNLLuQMGLdWDyaNCQfNGmorJJirrNd1wUEQLaFqc6TTZBTEQc7anZnL"
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
