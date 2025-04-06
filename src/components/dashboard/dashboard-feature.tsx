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
    "4tGSUiuwTn1tH7K4NAatKfnb2fk8jKTqYqJ4c2FxRmMVKy67oFHVu3217hLhmuwcezcEBdrHxXBkKU87jZ4Qq4n8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzeqXDe7a8jXEV7KTFW5iYBgPM6sfDhXYL5GovrxXUsvpA4U5exhGKEawtVwJTaqXLbfJX1zapnh96fXd7QdZW3",
  "key1": "e89uMcnTQ4V7U3Dpt2cCuGF533z9tHqpDHmGBxPbSW3J3A3XJ9v3XeCsFv7U99aioPa1caeL2zf85g2FYoaTZQP",
  "key2": "2mKCEuqvyHdzfWHzJcHSjeifX8VRn45T73To72u8i7pTi2hr5zepK8PdjozRuGZa1EJXKrZtqdnS9S6y85hL1eCY",
  "key3": "5k6RQzmrL4h77VBBESDQyysLNEMBB4dXBQ7JHfKAAD6cYfJGTkmsHZjGe1csnrVzcjZSWxKZ4R1BgkCvK7Zaasi6",
  "key4": "2QgJLqijKvVj4kie5GtCPXRjc53x4CVeLP3heNkR1MfxGKzApWngArNB7ZBd1spM134ToQ7dUNd1yNL4Dc1aDL1v",
  "key5": "51cLBfWsDc6fzhzvc5pSULPd4NzYqKUWaRhJYwWJqMfy9YW3wGJ4rVcdrHe6W8PzCSdy9RwAk5ZzSJZ11vx7FxYT",
  "key6": "2dLT99b8XZHceeYNvrqT1aqrJuA6i5dt4RFg5AcYzfhSF99yYAipzZNaUM7HJjgz1cd9mhEif8QhSjH3Ew5HDg18",
  "key7": "2CJcVqqFKHvfm2y5L4r22fTxwuNLoNn1kagRghzad1wCswHe2NWptBgRd8Hx5s3pE8PpHSuy2JsWXmepWbjesThq",
  "key8": "22w3wZrk8GDsj34L4YzSyFbscyAJgQMkyqdtP3R2Ts3Bg6C3uZu8Y5FD2kZyf7aowPRgVRm9UXwD46BQ3gt1ajDF",
  "key9": "25aCjv59XA4PSUN3wX1qGUqmMKsVCsQAM61pRNdZeF9p6s1b9G5AZ78VZrjKKyUSJbv9J1frPTcYJ62kwagqKrWg",
  "key10": "K8fpBVUkjAzYSzWaHbGNyiy7EY1ua3HNTBipamUTo7evNocM8a59xcscABDijCvHHp8oUr49sXRnnSRvXnfUn6M",
  "key11": "2i7EBem1BM8JDUCALZi8nDTf2JYL6dt1P8mnEy28VGj3yr4FUL6b8bHuAjpW5TqyK9qwihJtwsN9Y9Qj8WSsswfu",
  "key12": "79cBNFSkoGLbPbS3TfhPktwWedLhHycrTtTM76ZtYFpMj4TyHUmx6BcjbBtjWZGEM4trBKSEVeNMdmLMxttAaN9",
  "key13": "TdfqjZUQec8pSuVtgiWbuB9J7HHe6u3geEEvuvZiupMYF2zNw8VYTrFkG8CF6vsFzhf9Uvs1qxCk8NFmFPVhS58",
  "key14": "3cosqcduQGe1hxqvoQEhRrfERqhfL4NsDw6uS1Nz62j5UH2fWFNS6nTFVL8XUQbTVLduBGTLiW8ZjzxD8HT4yCWj",
  "key15": "32jFLuJTfSTCZGMkWrvmQjij8tgsRztijdrFDz4dgcFaV6tso4fZLnmGDGzaFxM5rD3rTFHadsXMt8WLjBxcByuQ",
  "key16": "4pjKurPZeNaREMPkAyXGNV6J7RPtSxq6WcwGM5gM1GdGBveazt3Gxp6n4pRpWq2GeLNoF1YziebQTM1XisC1gnFX",
  "key17": "26cdcCGfsvyexzrJ6WcnRUdDrLACqECFvWsWgornU9VtGnReSxiA7bfsrSBA3HDDQoAyhXhjJSXAPfDkDHSH5DUn",
  "key18": "29vPCChnJYJH15e5zTCkX6m5y7fde3w92nJejcYeWZhCCjpYVPFpeS44v1SuZAgrejfH7hZyBR8F3kKjAPZeu5gd",
  "key19": "5PUvMC7XM8ee4q3rZHNoH1esBbvdScLMuFGeG5MBoqUx1iArbhWuc4iXjhoFGAHCF9C5sPvSCeHKY1RT6pZs3dAt",
  "key20": "cQ6srmdr8RXy4MJvdK5XWSGEqypijC17tBGTvXP4avk1zb3fYVibWJwKKhcaRAomWQmMHsdN6g5UvNvfuMr3bea",
  "key21": "5CHNhPzvx7PCPdxJyLeKSHfEi4PyaDgf1Ry97pJHvbqiovg2gUBqz8Cr5RLCxs1tqf6JJHM28YRr8VC2MF1XdvWx",
  "key22": "3nVNSefUKFdtwQy9iQCtsSc45fv3dHLVhRo4vFHnUuwT1KkfZroUeLqY5JTFubFTfvoRgw8LK4NP5nZkH1gJCfrB",
  "key23": "2ag45vHK6jnutXsFbA4cZkqN5wZKkeoutcbkWNfFUHAbiZ565Mf4WuiT8D8QFNyqRsCqam39MwcjTBB1bdUVyqe3",
  "key24": "2eaiUvCJwF2ngg4xJ3bAX4GHr3orC4EMF4VVdDjPTjRJTQcAT6F6J8f1HTGz6kgHQjEt1afV3ZWLQTedYM5cjzB2",
  "key25": "2jMbwdPnfdwAi3us4Kn9DJaAuzsJaRo58rh3GCdPR6mbtKdkoAUrjppUaBJNDcZGfV51gGzc1CCYVeDDscvFLqB7",
  "key26": "3iVfPxpx3pANHroz7331Vbi6Xfi9vGEtfWdSCGznoC7DAbrKyAupHMdWggDu538uNB9v6ZoGdezgzDJdFAtpxuPb",
  "key27": "EPBGXoq3ncMWF9LjjDzY9ofJ6LBrn275G3nKEfUaLqYePK5ios2wqnZYEfqqZF3iMnUrixkiUCKL8Gez9QPqmb3",
  "key28": "2PnYHftTWCtKoQL6WDtNkUBfQJXTgr5WGCW6ob7zKTq89bScNqDAtSwVWZVw8r4LXn7KiYF1K67hv7zSkHngXENc",
  "key29": "3pmdWhSGX6takHCZEM2bo5SGJWBirNuTd7vQU2e5tidLk2aXuJrK54QGb9ELHnHGsNrcEts7JQEZagFDqGYZSR2C",
  "key30": "3pZBbCttdsiTF9C8AuL2tCHWAtGqTFi6QcSUXVzYa3FajwpQQpJ3pp1PLGMdHzGqNxupY83arwoxtrFiN9GvC9BK",
  "key31": "4MsBSmSNhZsckrtD9ZN9GicWTN24cQ4v12YqyLXecm3wAuYwgQSwpmJSLcy5NZaSrSnFJ1yvNZFJrRwj8Ycyiwh1"
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
