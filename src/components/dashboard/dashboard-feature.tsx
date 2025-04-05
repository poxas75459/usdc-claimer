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
    "45sxtMdSxdvWCbbRaUCKL3GeyULBLRBbc2GcGiSLHgtLLbkeNwCySEjqTuzNWATzqWFpM9wVVJPh1yNaqhWFod5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58cPDPhcE4gj4ymZBRv11718xf4Kw8FrFy5vngLjxrC9LLf5nfx49guq2shtKMd8GYLfMeQFnjnwvYzmrwatwgX2",
  "key1": "9sKThXzH5z1PSvLce8Se5mtptWVTC4KoJhiJyZL3EdHQkL29TQgpjo5837jbyrpxRPDAGrp32treHdCz2choNm1",
  "key2": "42oZDbeoqvjEoVA3oja5ehzGnpftM3Vr9Mpo8xoVKFxqF6c7t1PasX5eTRmWUzmhwTCqsrp49GrP5v7Vq9RbU212",
  "key3": "5MwegHsVd1WuFWrGcTk3p831TZLeSdFpR5AVVrbxzkzVhGMZQDVis6V6yHqn6gBJSdmLFuoUiwJdnG51xr9gLjeh",
  "key4": "4D26P65YQ9SGESodJhfNYKaZ4u83UBesVK3jzLQmzSg3Yo4LqCduSRs6YmpdXhdHGEmrFiM9FEKXthX8pUQfcBaD",
  "key5": "4Fk4thmTGihUhqWVMY3oTFbGVkqTwXGGfxaDQp9Fm69ePb8d76mVMTyAMCqrtoeJscojoHj6XY2wZHsHuW6kyxUD",
  "key6": "2ZZxdWjZB5dcDcpUGL8KmYV9GDG2Hi6vyurUcf7ukyVr6NeJDMyepW7smqDJt8gByZo2pXEawF1oHMsSfU453oyn",
  "key7": "VSKnmR39Ph98DjvEnZf9BSoEpXaxFdHFxSL3eU6b68BrhkqCaZ7B66DKH6WjLk7nKQvEtFhGTYtQCadSW42QoMF",
  "key8": "SyNDBwHxZTuBry84LSsscMkLfhitGhQVk8YLqDZxcoPb3GuR2Eb2cLBsoyF4kQD2icz8a5sUpaXygQPyJQSU3DD",
  "key9": "FkDQbFmDRL5E7GshW1qX77wZ3ivBaqDyushLcYYmiZLdNMYHgJ1YnmD9MD6FcxFqEVhrUGiDVxwVZ3vRNneCCRs",
  "key10": "4zhwhDWXCn9fMsSy1Mt8tKxQTvKakw4Y7DbfXctCkTModDiayt4FY4rLGLYzpgZVwKY36s3k8bze161aixLoVnW4",
  "key11": "1WZssnDBz2ETdnRVmLwTPcAFJSHqpsuyHiDjv3u4DtQmQfxkQnkFxZu7oStNKwV8QZWE6EG79TaPfJ5Ho8hKyBc",
  "key12": "5PV1U5dXSUb5gtWYhUFg1Kr4JqdR5D5Z6zjTDE8QwkhmeBAYsaSQf93Uya1AsGdNFdrYuxkgvfdHpaGSdwyLKmtQ",
  "key13": "25RsZ6BWQRXKaHT7XT34wNew3TopMATxcJndjHNjcPLGc8769F1iQpA3dJxsWHHHxhkEtf18Eqi1Rmf7a5FaTvBd",
  "key14": "5x82evrjbhXJaxGnHcoYJ1EwDR9nuHHn6FpY3CN8pBohv4SQX1zA7n7uwRhfsVifE9duG7kRZJqSLnmDtNFdhtMQ",
  "key15": "4SRWapEMPr7PP9dvUaE7BTDqLQhq3U4cHoauiGC9kSBGmZLiwXoXTTEixPsYhXT1EfVLzXNFHFhCxfq2axkVi7LM",
  "key16": "3ETTFywqy9soDZoxm2tjTgvWkQqBD4LBCikmNjQAn2SdYRmDT6w7xv3VXnmb2Y9n2sJQivJW9JBnDKbpokhGeFLr",
  "key17": "28zWnvbkUyFW3fi4kkbsyUJaNbH4CASqdjp8QfhnY1Nx4DFADgvEYoL8AD5vwqs8cmngbCX2Eo6wrQdFe8AsbFUa",
  "key18": "CZpWfL4Pa8CvJBFkhnZWTW7JC82pd5GX4UhMgF3nSkSWY9LZQqh5qWoju2TZJNz3H1e7BiA5KeV96LtTPfGLMm3",
  "key19": "3GYv7SkrcW28CQSKdSKwsLZaqDpsbLTSLSezd968oSLvWS7jy3mixAQzsVNHNLx6zVvXd33mwtywEr5gN6ZrU4iE",
  "key20": "2PPbhgTYttNDDpW6PKjmFouctavTjgiEaK4UqFpVRt476ZUAGY2s9wrFXpSar8G8whV5ZKwdPfap4HeKvapDDDDf",
  "key21": "4Mt1ogVg91QLKGfjQFQQuxKghMbX67eRy1JvecSKSiSpD6WjdK6yQX8wn3HQZjKw7fRehnSd31cKByCGfh4GUHT1",
  "key22": "uPTKk24HygU1QdfFZNumxPmjZQVGp3vpPBdfPSiA4Sz3RAN5BUWmsRYhVkbvUFFz3u3hkh32gh1HxEHRomLwDri",
  "key23": "4HvUxMufDaGYhdJWmYmBqBCq6ucbKu5Gy3tcV1Pd4eyNdzrt6okxUT9T58YjdzjrERnt7X4YHRWTvTiqQUG3Fz36",
  "key24": "qqSdZDPVBv3jNbDAuXJcB3J6CxRqdkq32S9VMeApFrBAtVUuYWR9nBuXnciLfcLYJFmzHe9msgxSGHw7uoJqrRH",
  "key25": "2kEzSW5LawdKApNLUNzVqVaQCQjSfy1jrEqfYFmn5nAUA997UNYUiyXUwAtcyifNUTnxymy9n3uNcSkKVxJiiLKy",
  "key26": "48VZW28o884sn6GdsneAxKKqVTWkd1DxYDfQZEo2jchAEk945fi3DK6osqz5JPaftB6b8L8fBTqBfqzHW7AuyLnU",
  "key27": "27cKyUpu3dnADbMTdeHKvQheWL6RzdaLmyj3kRyebBmGtMsgS7uiixGytQMnHZAJjYowZSs4PyPAEh2a38D8na1d",
  "key28": "5iafs31noYUNAYCU4jjXvtjHivP6N8Wj89df64kqopAjjKqKPjik1KbmRg6iFbg4L2YShobYjwCVm7eZoqupFm3r",
  "key29": "5MvJvBjzEnkEiDPMk4cj5b5ByGFK8SuAsCNj57vo5ZSKtUrxVDTY6GkxmeW518xMhuV8C57XQXSZoBSfsG37JgE7",
  "key30": "3x4YXVsMS1nz1BNs8GEANkXX3pSTboN2j4CZmZoHkqALebJiUvit19mEYF4DJd556AgsanTFZAHtmnpStfjGTvyx",
  "key31": "33bQYjyDRZhTg9wGdjYirnKJEf1fXD87Tk4Q8C6ETEbQPAP9XAsZyUBqLHKbX8tQhjYsDSETmwchYeHDEuQPbiNX",
  "key32": "5qk7dQHkJCp7CJqXfg8AvWAx4P61zkHSU52gYxjP6VkqYB7d3cGYtvmyvM3cah9C45JK9rvbPYegauGmEpyTXXtP",
  "key33": "2ryrDX2PF3GiaZxu4xse73wLxXSDNFfgRv8iPRJCTb9gQjxyHVYFXnVekMPnjQhqtg2qoA9VZiMhHAtXGo82i4nd",
  "key34": "4diZYKYGxdWnbN4XcfVHut8qnZdKuCSbYNte7TNFGPfiXL3R79w5BfFfxLYVbmHsEPdcp6krpXqpd2PMZKSAZGJh",
  "key35": "25X8PU8BVPDWYdy34aYud7zVeHCohs3XvPvdWLTSATcHcmTbzvMjLECHELP2h7XYEuPBHKvTuuM9dG4VyqM2RtY8",
  "key36": "3g6Nujc1fdH336GdYpeSnLYUUDop83WN7PoJY1TCTSMwSqUmnbrFrmBadZcPfh3Y8f7VhvUCqPS21gobCCu2qbtq",
  "key37": "3gndH2jRjS48v7fa9qLoV5GaAg8tgJipho5P7KEqM8cbp5HC91teaFWi7wW8WdHhN6YnfRawQxu1ESdKdgrxf5ie",
  "key38": "5JVYy29cun6hDLTksSoGHuAp21NHfac7SZjKceUpRSx8tdRpYJUL3XtVySsdBabiJy743Qp1pcTiqCeVxTg8xmUR",
  "key39": "4WUtAqg7y6Fnc3PpqWW8a7xzLm2Bev9jL3XuhLk32mZzf2W6JHB3PBtUfW7kA9xJRSPrTcnZPhZoXwMdTir5w6x5",
  "key40": "y9TjUay5XvrEE8jsHSiDmCq1meRv6xmhrCLw83S2NW9AfFUpkt2SFCghbU92za3rvaanzhbxgjVeZdN4VNwDmtg",
  "key41": "3FMnosPrmicHeS8u2ZmQ6nLdHCwaR5S2r8qSNi8gByZtsc4c1J47qaDFqRw9nXwkCatSHJwBQaoAgCQmcmSebdqi",
  "key42": "2CJjV1QQgDwYtfVZ1HDYBYeKUdSLEiGY6ehumqnzBoiSF6JuodKQaYZYguDK6jAJvb8sXwfcmn62YeWJbwS6LSXf",
  "key43": "GyahBv2Zvm3kWK7ryKpi2yFQ32khW7tew3U8mNhhDqg3im4NLavPTU62mroS2Pq3govJoh3UQsS476AZXxj4sxP",
  "key44": "5BAp7tG9FYbQ3UK1hkrqAhHcZ2aDCibPoNaMh8WSX7XkKkd6ogF8B9SkxoqC2jVfxkoex6Cv72zJLZfu6tZ8F13A",
  "key45": "3nAkTRZC8kRiqVZpgG6U5fquiuLh5vEDn6mko9H9DKj7uqmL25rC3N11pKSDwCZVUYWPge1QWD2yMSNE2MUxcsSD",
  "key46": "437Pv8boFuXtwXX2DQCYBwQgRJKX6dT3gAGprBj8oNZuDnrRniMx7aC1DrhFPoE4wb53GYfZeauPAv8NBSESwSC8",
  "key47": "5QhHQX1CRCNggqyxf9RPbxbsTRfhroa8AzYqGqN2sw7NZm68WY8eLzTXmDMRQc9LRcAKpCZ7kgvmDRyyTtU6UWsJ",
  "key48": "Q4w3jiSpZUzrHPpXAAYKvKD8qWSVDBG78JoSfWQeEcKpzHXHVLqwLEQyVXXT2SaHdpEuX5gBR1BQkhezFqH35AX"
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
