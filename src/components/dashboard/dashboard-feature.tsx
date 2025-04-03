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
    "2qbXJJDZfPnfW5mLcLft7rhSqAu2tSTSrydgwr8GDjqnutq1yCpxzQjJrRwYe9J9cbJivv5xwJYzyXsxBfDBCAYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oTvpzmyP93x9yRJ6fCGEBCUW4CgEy8dcNNQgVZCXJXTmpMx4mdwKggBxyTTGTjzLXvnxkw31en88bGmB1gx8G42",
  "key1": "2UZb7Lm8He2cziXw2W7xCmsxdcvxWDnXr2kcADNPKkkMwVSq6GwCX7DR5Ribo5JXuq7283e2a31M24RGpQPo6RN4",
  "key2": "5ErjtHdzsJbNt9Ug3AEUJamiZVXwUUH2Gx26NKVp39PyBUzaNJyF4vf9BPEGcKcvbteKqF2Ac6nwoRMmqKDTkMYB",
  "key3": "3Nfus9FDMAGA1hvwKD762FCYAb5YKZAb1XikVLo8UYMVbM2mTetZqp7gNboqSwPBNJdfFfARw9pczvDm1S7mdACW",
  "key4": "4hWhTAa2dC4MNRi4ycpn8GzC5bj8Wh5sQ9zkpX67B2ozt32gh2y9etvPaN9FGu5xKGghAqrgzm3mPa7nb5DaafTD",
  "key5": "2A8raGRWdNHzVYTsY85Q53GixNW5wTgPTXdMJrpWjaKPuL1LCrBJe8Q1LjvB91W3NjWLxQ4Ee9grtxTNTUoxiWYW",
  "key6": "3drXXRoPRhSghN9ASXW7cvVShaGuGXuQ1Zxji6mWL2iAzVErMs2d5u6G3dhwavRqyF4pFZuC7TbRx5Xy8PkDLXf8",
  "key7": "492uxJbyJbCcrmhbKddRHwqWijwBYwJdBbPFXFkSXeXLv1v7p6BgdYa14TqiUpJFMcZqqyMRwLa8hfMvReCe8Dh8",
  "key8": "5jXqFWb3FC3gZqY6QkA5AeoWgeLm7t3NNrB9m6Tu199VZ8yoVNQzfB5dV5ATJqcdG2aYjRjmfbeDSANaMPrHHe4b",
  "key9": "2juYPeEeYxLPpB8KP1MNaz9jL73naZ6fzyj9LixAbxDKN9rnKEem86967WpEGrFAgKnz4TJNVihQYfqDf9prgEdE",
  "key10": "pdfE6Xn3Ppuwdq3yPTi8u446WVoK9WN4jXie4pmU2VTB3T2rEWdYB4BmDVVGxjHwzvmJFPcWwPftQ4RzjvRr1VR",
  "key11": "EbrMEZHS8Vb8ZCM3fdc3AhLrXnqmrMnLGaWjMGjTyNzYxa7C9MF5KAWi6YA5CCc8f73cFTLyhKCGHePAKzSi4d5",
  "key12": "3jgaHoQUbxNxcqu835NGmSZBvhohLSBfUDTQG2P5AaXDnQvugGSvHbhQsRp6GKQWNaRbEEcbJ2LmQEKHB2LoxRjN",
  "key13": "5x5TeiEBxHvs3RGK4fFyCkCjHSJXV8mibZTPLBZ2VQVfKtaZ8NUNyFy7u9aqftkksPx2Vbcjknehxw4BaptGJp8u",
  "key14": "4k1qK121f2J5TXFUPXRPyui4rzvjbZAmkFkMvcaHSPD989m7J8qXNARfZacqh47xTeHw1uktqK8ctnkbX7vbuc82",
  "key15": "5iF3kyVfZoCsBf1MpnHfjRsaYjbpMbksePXjXgGNp62BdFqCMe3tmupnfDhnAGBwqRwa2RYeG7eMG4GuNE9dAsx2",
  "key16": "4ZZKgxzooEAbBSahQkLaUbzy5zrpkXUEBSJRFbNWxxvGCRs9EGCdZy9kPZvpUvdCQDWzfojsxuka5dEb3WvpAJS9",
  "key17": "29fiTVpWMSVSg5ZYuRiZKqBcpkmj9P5Br63QnaFUpQxNGk4NKwChTaiR46LnhLkTZqjD8uyRcYEqnJCumCxFxGAr",
  "key18": "Z8niHUtJ59LiK8FTZjWFkxX4oKkkPNDwtY3yAimtEKKzvdd4sD1SSCDGERDUvYsU4Ep6JNs1bfqpKEhVanGdWSV",
  "key19": "5DhfJ1Mk26prQYFspmmVCHBPKLk5J1FBjY79PBUa1i1cMuidwPZaxYskhsRgr8qs3gtzJgzq9GheFMpMN828W46a",
  "key20": "2PYADHaR8XaWZNJM4NqnPRssitLCj6U66SxUzZ8MWCPESxF8TCtx5uLSBbc9sYmaYDTPsPbntieN1BcAJTctgeuZ",
  "key21": "sFySCQDW4ksnf21mab12oV75dxdAkx1Sp7tABfbXcUKRPEM7f2abSdcnvxwcmVwA2JX1zxfo7shXNR5R5sHqt2q",
  "key22": "oMBuWRiik4whSHNLsqHe3MktYuZanoYVV9J83tG68rmsvKLZ7ju9wqJ3jYx21jqCJYriBhpUrGfkrSvBPAbbkwJ",
  "key23": "wKefLXHnz5cdBfcXpT5NbuMEmhHq2rqdJt74LwFjcxS3GhNDXyRMr23DKJ3ZzieDgZyFGe8obsyyJtNL86oZkSk",
  "key24": "5gFp8aw3fyQpehBiT5HKwrGzzm9T3mUwhZLfbz7ctkKn4TJqRD76jwq3XwHKmaw1S12FYL32qb69DmGYHWbtaTE2",
  "key25": "64w63Bm4K4WpNhoCc3WUh9ByqGF5eXyszk4hEJWdHw2MMTJQerUvr5DKthQYPDcFmpkK4ftbjey43G3SMG1mQJkn",
  "key26": "fRzNkhPCmztPX9gDyvgYxY2NzpZbe44XuWdKewv46dUtTxHMMM7GXTLHAbg2VsSdLxRoQT9gwS3yMZAxigYNw8N",
  "key27": "65wdZUqHYuCQHeuHnibhAjz1RcAsUZKnjU3PtiuaxgzibzJgRQsLropKQ81foEf6TreXaDu4asNRC1sscc7xsSpX",
  "key28": "2S5Dzbo1i8mnzGQ9SQQhQmrEfRRdhmcJL4fbz9K3UCujCZee8pMbvkmxsVAgZYhMXCTr68EX8Cy4TUfSz3otEDLr",
  "key29": "4EkX2mSJndfdwpNjspjxFtQy5HB4iq9qEkkoiZzK17xPVRBqkiyiz76h17bn4mf5HeTdJH99rZuSZP6mmr4eKJ8j",
  "key30": "bEfZhJaAJzN6ctDa2oXdtGCAoy8vgKAmjo1QmfPr1pEoUDJweRiTcqh424g8L3Tf5zx8Rf8crDn2xgCTEXgcm2z",
  "key31": "5prAnVTpEp9xTLi4d6Q1L8TkR3xrozXfRPwukr2xgdCUzwaqJDoBeygmfdZJfZk2pVctBWFLS85LF7m7hezmJVE9"
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
