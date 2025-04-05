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
    "3d336erzAhvNsWxpNBrPBZyjkRhyyiyRAAhHVfhEQHnqvNYJTnNeJdK1ztbGfpWcMMaUJAFjaDyjqnm4bzjeaQ9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEFcpL4CnRJVKQUL6AMKPqf1HfvkWzJZP38xetNQMf3f5NMDP7rgJJx3zB6dg6vNFT44thK4s19Sx6dT4YeKTtU",
  "key1": "54S8tokW3Hd6dcvrYN7qwxWRwCAx1cuq7X4sXAiUW8Aha6JFRVqii5CLyx8QxoyvG6stTUoUBEKeLALExHVZxjgE",
  "key2": "5nexFy6EStmdy2ziXFf3yKC6KPxpkRRD8rh7iKzZiMFsm1d1BW9QLjhDueSKqvPCGg1AFbzLeXPmMvSBRZ3zNtef",
  "key3": "Fs5u8V2b8WJ1VdrXVkd275kZZPyVDVhfpFBeYaE8M3pSBiK4TKSZp95SanCNSxSu6xCRLPtisEPQe662WAys2h1",
  "key4": "mqMyutnv1U3ZK4g25qt5NE1g3RCN4L5Jc7LLk5S9Ugpc4sTijJCHGv7Ay5t5spCSFmkDaFhAVdmG5pA9zgLM6yx",
  "key5": "533iJGhmw1ujuUTe79AuzPk6XaAi8ZqKCVxxaFDuxC3P4yknzyTQNqxu8x3PHpCBV54KHdm7VCqUgBMjRoib5zNo",
  "key6": "4KYTADWgXdiyhNP7RYxWf7FWUBHnhxjmnYSqirNF1yRhkPz79jaFjUdvaAa4Ji9xpcrr4nch3VGJkr2Gi2G2BDVi",
  "key7": "57Gmf5mp2h7t1X1muDJYh5viHsAZDbMxAA2AQSv7aTs8DKvuqe79k8WH579yMSFtrGSyAGnTUMwpCKyzgdFQRwmD",
  "key8": "5ujripv3aW1YX8Zh4fevFU6N9je65rcXk3E4ikEQeqrN6FffXPGCubiCHWuP1mUzJF74Mzt3Fz5LF6FQVdMayEJQ",
  "key9": "2SY3oaNVHpuf1jPZQWGQFTQDbm38mdA2cEPcWT9TCssoT9PetnbEgbdF7wy7bXZaUxUXYjLUnmfNge5MU6YAAHEK",
  "key10": "5c3GgkY2vFDW4DPKZnebdZdTSdtjk3dQ93Jqp1ZWR5DxW9Nu8V1eGLb4SbCBnZRcN1evBidAp77mBH6WiKKhGSms",
  "key11": "wcvXvpRvmGawkC1XVHa4qJ8aDtM6S88xFTnvr3UzUZuybfeMgVqaL9HMVTgQAyL8F37VjSAJvFbtndvFv8PzfqU",
  "key12": "2o3Vsfaxezm5hTNXrTFjZEMQsnHoK8X9JDXPDytweWK7qtzTQRSf1g2DhwhAZsVmc3KrbNkQLmka5LCJboTVHzn",
  "key13": "51aXZ8APGemQVJ2T6j9BiadvNUyrPYcTB7iFzAi8zyJtxTKPL8LE191PiwPEaaPMWNXvX7sjcvQpTvVicJmKeF6R",
  "key14": "3Lr1g1AyQYsDNJrHdEYRW8UMDfvQNcNXUhV9ae9t2Tda5VQF6y3YEf4LjqU7imUPD9PDSK3X478mS3w85xPKhBgK",
  "key15": "2TaryxWhswXaRD2zsLUdsg2GUbczJRjodcFbZ3tJqbB5B3p5mbD3JP969Y8U9xwmBBpQ1ALZp4XbNhnaDQBdSem9",
  "key16": "4rWJfyZEpXZjanksPtMGxoSfT5U7PJMZe8aZqBun2nncjyYDYtir52zkVyKJnMCPUWQJ1ZGGJVxvNg6TqVRVBMEV",
  "key17": "4jPduuijg1tGN1fG4kMhP3DogbJLrt8ThSZRRYmAz2bSJ1v4jybdHcnvrym3i8MprhTjDX5HjwyGDMRawRKcwEJH",
  "key18": "528vyoA8GrFjSx8Jeyb2tgza9xCf9i1Kt6Ev7GiCuBc3ZhKPrcnAgPHELodF3HkxGRkb6XfVpt6ssBb4YKGqUnYB",
  "key19": "jz9cnSPsoAtCnykG2Lqy6Bnxt5xFVw1gkaZ9VcBe5uaqQaMCj7A2x5KwtoUuuFbrZz9s21H9pxd7GYLdEot6fp5",
  "key20": "3p6V9iEDfScyWZRAgQhn169qdcdaXdgwiGW4hWiWzkfGFXGbz8osVA5feBxzuakHmjECUByJhuzUP5gi3QqHp75n",
  "key21": "3iY9Ciiow6nXERi8FhG5pAqXdp7uicSBFYhg6DmVnhwmohe1iECJFddz498w1TWFwdh5ZMypPfLeTHsTU4CLcZHP",
  "key22": "4c1AX2KAqqKmeWccofWSsceKY2omvFRLixWrSUbXFhC2CHqsUfx7wmpabZJuCBmitom4n6x7pM6Jzhd3rwjpvKEx",
  "key23": "zYKDBnuZbjYwjQ8D1xjbKEnct8rKMPyCMU47TBG5g6hhvM6AyBTBkGnUt1pjobzVjXHdgK5KJuNUaPc1BR6Qygg",
  "key24": "3G32Z1NqQfQSSVPk6C2BXE72YV45p68D2HHxYqKV8Y6PqoRsvy6spspNwaxbW5jHoFLHGFKYMM6AwvwmiaBk7Xzu",
  "key25": "3cz1QsK3R5sX2TRxf667XDQGs2vdkVLg2MapFGf6XmFR6k4dZRZ9AJfDGpqWJcdUCttBe576V6FiH4i6MTKLuzoj",
  "key26": "4sFw7zXtC4yjL4nGiiNu2A9gi6ZVEnuFAQQbM8gUn3sYCXJZXpR51DkBUNzLgbCCASUZTpUERZnxFLUbdqnWYTLh",
  "key27": "38Xgm8WeQg2JxYPuS9uXQ7YsB2A7Prjk5Rc5JyQgYQsJMScZRQVjajxTDfRyoqBhfecbEh2j5GVvtvNMQDMSBqFF",
  "key28": "2AKe1LEetAtG9XjkzczdqkyFCzyxCMzfUW9P48J5bvvorKSHrfphAAaUQ5GBqG4bTWfu9XQfXMVfQEQh4CrSWKV4"
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
