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
    "53QQ2SVXf2XVywz4p5mj6ew8Wmv8A1LhgkwQMUyizDrhoVn3W5p5ffeMcomM7pU22nbzKz3xBpvnX2jrqGi3yQ4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cF6pjVcA7wZtpw1MxSLXDepeWn9PKmBEWTmTCHVgR33Qe8nTbmXrWDYWPtSNK2eysB51F2ibUz3uFVS4cEFAmVb",
  "key1": "4zHQnqNS9vgQQRRw8yVW7WuUaAU9s4Fo7X2z4ztTQ1RJVQyrMBD5cMv4Pwa5BekxZUc3DsVCuvLs7224jVW85TJE",
  "key2": "68NvBTFWSELQYmKK71vRUzzcvXySgviw2SHYS3BcxczYDAfbh2F63mRZQW4keGBs7bV8V6ooT8afd3pocvNJiyN",
  "key3": "58V4p8XvK1NWA3EsnwkqHFFJipvqLEiUueP1pBjVH3i4mm85ngKob5cMPWmeEMJrRwZ6KajxbAB4nySzUtZAqXwj",
  "key4": "2khL7cUJxQvGvAP9vq1RvBb34i1qDx212s3CmZegCLWnfRtg1LhsvV7gu4fJtmBXq5Sz8QERHRXUp5ge1mupS3qU",
  "key5": "496AZnveAy7FbSa5xT4Y7ibPKrbRM3uVcXZMdqeu5ZmVi23nfQXLqF7Bqm2PhwRUvHJ2AwYvkyf4Xk5WKtBQXDsZ",
  "key6": "2b6W9ekCVGjb8sB6qRSDxAeqQxg4i1qC6KNMtjYEjmuGKZ2fReyHWM4ThASAowqVkCCbeh81Yu6u9syFXer6Z2xF",
  "key7": "4B3zue3eBjzwpw8D8rMJbGoooMpjcL1kJUhrmLKSXLqer1XWNeDtLZWSYAhhcGyS3mGNZ5zrNrMfC2kZ8o8Mx6hb",
  "key8": "4QpenfDjUXUC44QaufCinZ6j9uj2vyLLV8rRMXk1Sow54sNEVk66XrUb2SEGdqpZoSUec7HYrWxNaxSB1tDFFyTo",
  "key9": "3RbCbmB3dALaK7WNxSixYnuBNdc3Nj2qdcqhxyzq1wA6EH33fBZJGLKR5WAPFepajNGeAFzgLRtWhxCSpZHsxnUL",
  "key10": "2ZCciZk34pkTNPjganyvgrX8xKtJDC5Grg14GXkpxKgDBkb9MNdJtqGF3UYHAqQUh5DybVUpkkuvaij9P4shhYbb",
  "key11": "2rBj1PAYdq7J8wZa26i45g7Ecyn6qyAFNibu1yYZJwkB3p9oJE6aci1f3KXHPEQ8w24XZrzg2xRd8cScX6dQNx8e",
  "key12": "4zt14kN8W1EK7Xqjot1USkZKtN7QoWXMoQt8vjfi3PSsfRAgaGrNiNHxgJcWt8pjtVuETxacvHQMWHRHZgUk8pPt",
  "key13": "4imkCVD6t7wMYTmyWUguNVL6PS7G2HfZ7ZWUkD66hB4rMgCzGdXRzixGgRygJh5YHksAgbNyggxaiyesjwVE12Tr",
  "key14": "3TY7LtfFuQ3njirVZxTFL7s2z8tTSwwNGUddC3DaeAfLXx42GfRbSr15NYoJwUGwD8xAvGzHbyV3bxt6XWEKVauU",
  "key15": "3yFK5eHDbT6pMbn55TizTfeWHmFjofjFCT6iWH3WP2vbHcees17YJGn2R3sJRvM76PLCP7bfD7FGxTsXtP17aYGG",
  "key16": "5ykF19Sz3BPKe21xxycPJkxJ5uhY67ZCosWXC1YtcJtxojxxD6ABq8VbJex7Dsf4uJZNCzGAuAXBcCKWaLDWUT5z",
  "key17": "66nrEf3As8vYvyppvsgXAepWCHgdyNqtjqF39mV1ntPAtEmnbUTJmN8R5rd4smBPpNvvrw1uHkXvSAT8oxys2s8q",
  "key18": "4gxWk7o32rcRK6vZ2NYwTHSnmCT3AK3Vu6H6gbb4DhJiLenFnVxPUqvX5eDqWgp6ogpc8RmsV1vcf7uSG12AQDkA",
  "key19": "4RPWPwK6kmFa71fXaEL1sbM1WSo2wsz5mekoDGp2JryJ3fJAfvdr23L6cUb32vPGJi227P1oGv8v7eQ9jTkBHT7w",
  "key20": "cE6Wp6mYTRvduUBmJS4AdmaM1Uoh8rUqoPqMTuJ9NmP4pAc9obbtkQ5tBbc2Ejn86rqXkLf6hFBVc6egxxxCEBc",
  "key21": "2ejqhGyRwAFBCYUzckLgaXG8cRPv91MpftkZ9YACQew9KGT89VCXu3rCs3wQUPgS1esJxYitTh8pKcXPupYvb6CW",
  "key22": "4hKCRYP4J7LHvzr8jwZMz27NBN6Vfmntdv5vRWFG89c8bCMqaegmzH4TkRfQiNpYKekUc7CTL9nFXniB4JEzaUaE",
  "key23": "jho8cQTKL66tZYSictKLATga1qvsYyqcD82fB56RoDi1rJ1C4fGP7DEBB4de1Q9Kr9B4EsJmX2JgbNmHHg3FqQH",
  "key24": "wEnurtE9EyTtuf15XcUPyGxstmGNJBxXJAS7e6EBGRiAJAT7EV8dwuwoXrTNJv4oZcVFFekre1gh9LMaEGcdQSP",
  "key25": "5FmZHkGwhC85w6RzWeovnzHrxN77TfSzStti6ZeKaviTwLzdVD6uTufav9VL31pJBNzjHLnZX4xN6rTVQEto6772",
  "key26": "5j1a9f93Ti8XvNdzGXyfTa89xHBdfMxtWTuN2JUxreNxcRLLF9qyrpH1cqc2ayfAeJWiotEKFRsWUw7jUkuQs8ig",
  "key27": "5G1S6cz2rapgnFar6GLKNW6AEEnmDLQ2r4eM4TvWjiqDgTHjDu75tbrhvDuG9qknMUi65AkecWaPvJy5kBA44jkm"
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
