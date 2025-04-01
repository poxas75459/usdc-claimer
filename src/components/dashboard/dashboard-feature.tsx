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
    "2ez12qy2yaboDVRkQmUeKofRoF72KsYk9kwvTpNvsgL4JCf34966Av4L327hB5Cc2N2yWD1YDida8zty3Jzw8VMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6d8La5aQ9NPNkgHVx9qBHREHyCqx5223dsebqfjMP9AGDJFTagtNfam95SQqse24QLimFAZFVh4g94mKadqFb2",
  "key1": "5C27k3rMk1PyspD2JSbnBokE3Vy6xofrt2kXry8MgTUaGA6UUA88Ckmyti3eMewb44YVtHoeA5FRBA9oyerRpekh",
  "key2": "21iPgyLrazAS1F21hBfieJWfGRBMRvuxGgW6AZnWHp9acDG29hS4PEPhcWb41jy7gFBvJp5xDejnxM7Dvjn8rU62",
  "key3": "4L9P4rzHx4GY9eFPX5RmSCmCkNt2gepYDK9p2gepAKFyboikFreEXU4SiTGMmraegJuRwTwBBJ8jriZqGqRkTtjd",
  "key4": "2RUPNZu9GTJyg9nfkxBRYW7xFPwKYvu1MBL2pkWHfL3eM9KSwosbqcEC7QpRzyDdDuRhoVMkftkkC1cx5Vf6NXCc",
  "key5": "314WuCAYFekAcwbqDhiK1zKf9JSKdcGsDH214yjFC3iprk4juG1VSvKSNvwkMsP6oiEmnygPLCSA7HVrQZDxseQD",
  "key6": "3pXjaYJTkkmwzyDhNwfFXGskjQ3Va34NVHjt9fG4Sg9QRrtVQEM3QBxBcLkLB4fqgf1P8a2EQCCQudCCDedrEGSJ",
  "key7": "5kygcUhpN76bDyWX5NLKRWd28ziEDPiv4bLva6LZDFfKLiU8hmjCuqhJvSKezm9PBnm6LckkvYLwwNyqV4fiuJWX",
  "key8": "2RPEcXzwRomFXocYGiA53zwicz64s16vFsKkm5SLgUBuT78Dt7p544PsVfASJf7yybHMCZXLgvq3zagvYLaFEdEG",
  "key9": "5S75DtQxC4oZCE1P2WBFt5x5ftZWUtgKkfbnWP6QsTzb3MdiLEX1r5bDEE1k96wniRXwuX7tr8y6PKEgsTe8bWya",
  "key10": "5BHmpKzStfMGaviec2VUbUd4W4YPXDTHcUJhwQUCfm7oj3EcN2a7WDS1HQS21nR69pkbWsQbPev3gF99vZE7WwHm",
  "key11": "qdS1XPBNcgTnbuTwe884b1WmUybHno4sosVeaHLzFvUmuK7QMz1EQckfoaURNM6kHDGdmrPY3aPgFpwkn4V1u5h",
  "key12": "3uBP9n6o8giqnVjK5z1e4ub3gSoxHFUDRYze254xAceNXVjzf2aSndoUXN1GJChQW8EiLFLkJAcBuuHNJiDZfS7n",
  "key13": "3N8Liq6UqKNfSKCbnfkbVSxCg7kJ4F7GT4dZ4UoYdF8enngNY9xXNxKXVz55MxcyKudhn8SLUvHtTH8BPrUHHyAA",
  "key14": "2MdDWbSb1BZpLFT2GZEpCgu9iZq94ynnaE7qJPeD38nns2u1nPKQRQSBD48yZVD7wtR2aFJmsAiV2LVEBwaN5xAm",
  "key15": "2EcGFpLL31h4odQTkdgoKeEfcQnD659mPnLPi4VA64KsjMGt8bL2Frft9YU3t4WJ2x8552DMPbcHBs5xdNEsySLK",
  "key16": "4TNSZZtvWhDiMCtrEyAk5ZjMt1kQt3TpCJKwx6DDcfm3sAWzWmt9GCoGpEAq8y8NqWukkqfVx3tZMbc11gzbfa2w",
  "key17": "4jcnfQM146zTmPxSVmYucbEdmCSYkApWg92of6f2D5YR1LnQqgX34SA9i3TDrT1sotbciF4zB1rYk8xFVTApG2Yn",
  "key18": "5Tv6B3PDCEzMQuh2pTtqE7QYEEyawKNCpJt6imEsfHsbfZNDBNGrp1uRpN8dVprhX7nxN13dAb34qXcwxuoCTgTL",
  "key19": "2tTzmFHY83nBRhgRdZKTy9nMpdw2W1zTrcA8wPJHYNw6fP4f7mXTvrkTTXbYx1SbMWj3xhyPamcxgV9VjgHtS8ug",
  "key20": "3c1C5xHvXGvHz9gKzmiGynUa3txc4FeCz4a22T5jaJqx6sLLuGY69FGLUhbNnxdUJvxPHcuxfxr24pqgAZqGiJLj",
  "key21": "28Uv7tPtAWzFwdW3oRRyyrWNDgNk9yPRbtRq9FXXHCBNyFfg8Wnv8DQTbERQJG6mo7fMtKPQgzwjDnn7KpueLRkX",
  "key22": "1WeRTfTffmHBiatHHQzJfkqmB5JDY7dP72cj4JXdmEM1QBdHLYLEq67BMsVbifh9cUY6q13oXmJQLLgCRxCUarw",
  "key23": "4oE8EjbVPHANjUabnSMiXjb3azoBWmrqZWc6vjsFJu6UatWeHfgV7XcWLKf29v3m9S2rGZSaeSJoSowL7dqAFnGG",
  "key24": "59s8QbYrWwFgoQkauL8tRMpDzD4LxCsbZ4jUKFV1dJQC8DiLiitfy6sEiSFMtU3P6tHtirHXpiW6oJsJGHX7avXm",
  "key25": "UnrSe4BW8XL5VR5KM5CxV97YTZs7CTwEKUuiEd72qh5TUBWRHTJopLbG1uGUzXHY78DSEhvFE5aZE4rKKmPLAgK",
  "key26": "2WCkfuHVWPnBmjUBQmoYcMtYacW9BVcAxMyvAKkmNK7Wv4x12RmdgCeqL6sXZKSNC6tNdZsRe9JAkvzzNC94TAoU",
  "key27": "4Xn19FGg7KH8CUtBiKdxLnV1uNnWBstL8CdTsAsYyjvgjAd5fpTwwf5sGCyoMFTJLXw3ukwqs9RSR6ceyGAZEteA",
  "key28": "qPvNVMy3QazxCtA82HFLZMZoQB3PBJNZMTdWCSN3EymVPac7bcPujk7zdjx7yFbfZ72CoEvLkYUFpYCG8zhwGZ2",
  "key29": "46uoz3SsWcbeMndBbFP1w8m3t8q6hTNwYNsWE1jXKJaUMdCChMA625Z5nkjzeXHwxDbd2urwtug9GF3sxEG7s2sA",
  "key30": "4Lznve53LbsSbbL8R4Hrynrt79PxfihrgHZjGHHw48mnFfnovt6TaKf1A6kXaLAnP2ph9MPydHPfeGJL9tvyRwiT",
  "key31": "vidarE51CRB4LnSKza5Lz8CqtjdUY62zuPzfUtzvc4ZRMh3b2hj5NTEEYnJc5oEd1kci5pvxLt3Pwp9f5JYkHgj",
  "key32": "vQsBE4GsTLQEqj7UuuvNT8VZ6zZrM8hpk76yCcVWFH3j2beh4tfSDQrdrRYgtjvUSvrBGghJA3rrVZeQt9kHq2v",
  "key33": "3MsSP8rygTv2J8niwV61LF6zEpHX2tnDDioDS4eMpzC2KUXm5ATz8gwypBy94WBvXErJ8BGdwuJ1eh7sJZV2iRk3",
  "key34": "4dbUJUfZgTje6JPkaDELjyJJLAEDi8dx1W8jq5jKzQWZSrj6nFKzRH9uaLZQ5dvu5H3w11eZ4EpD2g6Mk8Vm81Gg",
  "key35": "5YJEmvq9LXQ5pTSzJZP8F8P2sQF88nA5wDBmeb4TBxQ1LBTqQazRubRtLAraQ1LLxH4BSGTwMTJcrq1pQPKimjTe",
  "key36": "3as2S5dQPf2RPnWYoSrs3U1p517BzgdwMkF544B5kFXhg2XkgwDoE68Xz7kYsyNGiu6nE1sdQGkkVqXJLxxPijdk"
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
