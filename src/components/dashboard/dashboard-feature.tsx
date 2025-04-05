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
    "5YCp9NADpFMPwhMDkoxJTYvF9CPEgHwtjjAjxRr57xuHG9hcvPmdykHiCRKsVvYc4ALLjtvYdTY4kvw9VkqMzGNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXYagvPvyAuhtA4JyQcFSMP8wd9y9DJJucuGeSF5d9reEc9sHC4HuVX55V2gadF9KjfRDT52UE9BpE4xjqUkz7f",
  "key1": "4J51minedYRNUUxPbHRxRGg886CwU8Key8gpbeJ8bGJibdr8zVy72zXTkMDGSoyZg36KN6jLQuqF9bGep296MthS",
  "key2": "2d1tP3rrRJhE9Mn6j6kMzU1tmGBRmA24CAdToABjeohSJAf7NDju72JKeyTZVcy557P9ktpDLJu1tJC5U2e34Rdq",
  "key3": "5PgMpRmknfGP37criEqvxgKoMy2Y7avKxXLqg4SudbD37HCXSvnFUqyD9woFY4te2rChHRmm3j5mAFraBAT1VLuX",
  "key4": "2JXPqrQXfjje89G3TrQ3MgJTvtDVYaspfPuSg99aN3RF38BcZ6FMgjLbRaME2x5Str2vwzvY6pQUacRXMQwcAa7C",
  "key5": "2eRdnVrVUdeLDsT8PG6c7Bx7q3zAirR8VkgdsF1Bt3NtHaFaJcNRf7P7oPvC2sHQD2FK7mjY4uAarkSUffZUcyJf",
  "key6": "ud1JeqBRGdFvhvPFK5gKx3sUVwrPPzm2W2jEvrFJBptWu5GRUhKaZmnweo1cose5zN52g61RaLRGvZ7ijoYCJ4j",
  "key7": "5JE8otpPjzyoz3QKj917qkKCumRg6cWHAvWEX2XLgnmLMVNAEih9sCKDLDtycggw6sygk7to9oDmwopJWjS6VP35",
  "key8": "2M6HmMJsLmjDVfxbYopzgpfo8E3P2JQ2tTcvS3cp9YZr9N6a3TgRbavLy8Mj7ZrfEhF9ooDpCUNiBKJ35wAT1TZX",
  "key9": "2uwUyE7yhe8mN7o4VA2v5H9D6o4SE96aGmedSXQ5YYt2CMRVU2WeXkKr9yh57qnPohpZQ1boyWimzumhX5aP9dGM",
  "key10": "dfpWQWvePmsR2D1GrRpDBuSJoGpsT2fbJDLpFSpPL7RH9n6G76hvpwqvaHvpsfBXy2g4f84JgWSGRCxTLDen9gQ",
  "key11": "EfZ29PhUuGQL1txrH9tgL7b9f9LxhnRKHNFMUYMj67f8qYxeBWgstVBfEvZMpZbJbditzoatyBiKH2mEh7h9c1P",
  "key12": "Xvg9jxEAa2ukn3DzJ5rSq3MtL5esh5iQWTmicQPaJWVJkPvr31ztHXRAfdcK3i8sdq9MeNTHcb8EzJ5VbJYUPfz",
  "key13": "5DKVZqXdQqwMAXP9GW84b2aeaLF6BHYpZKNL47zVRR9sWQtVYbzBkqa5De4a6rEWbCan5XBuyEe1cKfPT2VH1SL6",
  "key14": "4CUW6i9aCSoxVEBB54KWNvHZfban93dXp8caB3X8mZEGVgHz5BF8wE7SRw7NAmDCJzKh2Kf9MBDT1EjccTZFEXkW",
  "key15": "35UzmfPAin69C3XRcH9WBEcGT4KJkwgz8hmRRyYTpfvAyN9JxLhPAQJCNAMyhtgGUoZkh2mpakm1hbVCFVR5qTzL",
  "key16": "4AYUkB2g8XGtniLzgPBmkmanKywU97XczXnM4RtkLNZDiUfrjHkdVR17naaijucNYfkr5CwagJvk5wP3dd5b9Rov",
  "key17": "44YSuRusGtPAduoKodWn6ArRuahtMczk9PZ4sqAaRjxuVNSZZbZgDPEUwD6ah8DPb8igdqAT2cc4DCPSWtPMjwTw",
  "key18": "CpxqfdKY7k74KUYjreGKigiGMFTYHfDY2zxSkzag4WvMgzCUjzegFytLpSmqRkeq22BxF2N3x8rXczw2ppNj9H6",
  "key19": "3CFi29TZ6cq3wwymTz9E9eRDcviRTHnkrnbLBZKJRt4AEr6RLUS1yakGXRWPLpF6561yhQ7Mfz6r5J6PBJNBpHaf",
  "key20": "uoKXsXucdVgCppsuPBUcma6xjuo4cWBqqfha4DKw176vJHPP5Yah1bcA3pJT1ivTEKdAVRbRaLMhZzPy5H8kmjF",
  "key21": "4jPgUhGz8oaigijHht3K9zugUH2XPWdXdf3K9TWvUJWdYhZNCeGZAWWRtrCnsVn1Z9BbnhykWLJcxkdWg1Pe2H9b",
  "key22": "5RGbwNCunMJy55mo9CnZZ4EEBaEVFDgxKjLh8oRhLypx1UBXk9HWpptu8G3JZe2W4E4CTSBMPXdJXpFXatairTjC",
  "key23": "4skKX61qqoPG6bNphP3T6jpPVdmj2wqek9gyRLRY7JK1om6Lsuna226aot6pnBkARgELd1LeUQCsejtaUcEykH75",
  "key24": "2v9L1jWen6pAZyjyzdgofRMSLs4fq2J8vnKCTJfmTFsy4SN2EgZA8qBEa8rcGsgjd1tVjFy6TdcGAyTEaXyByCvT",
  "key25": "2CPq3eHp1rjs5xUvw1SpwZQubmh5SykqQ9TkusrdrffoGtCT2JD6PLpnPS9UyTEwS9rNzJRhw4TdMk9MphosdAj5",
  "key26": "2PwVD2YQB6iEZi9FjpCJc7AWe6vT57G1fSZAHNKsjnzJiSt1eFj4mBkWPH5ZcF4NJTQQZMg2EPAUifNciBebWhCY",
  "key27": "4ExKHXuKTAAChPtkKSiJkPadvtcdWgwrc3irEX41KtTUeePmnRTQEj89PFC7maiXRpJes9tibX7db2tETpHNJxTF",
  "key28": "3cf8mzdgJ8wdaS72mDiAzjEB7nxU61jXctLrkjWwPHojFpC4R67qNdfyzoniFpt14WMryjMjmceNwALRAHzJW3TJ",
  "key29": "4refj8K9qPxirDHpzLGHnn9FkTQH861en12bjqJka45Qt3NYcyNVQjnEeYHNdkDsPJnhwbvByYLrxGLX4sAzePnn",
  "key30": "5361BF2tCoaWfdbYsBkgp8VdaZfZmLvp3ZcDtHWdvdUF2xtCVyH1iixZ3Gww1MHtETq64gx9Xfz9GRHiCeDz9ZYR",
  "key31": "SbLKDCbjqFG2sXtCJk1XH5kqD7FLeesFsTWahjwEEx5VF6pfKsWCJuHT9PXfQRZJ1vKDFDfA7EUrzjLDf39DDtb",
  "key32": "4XZQpvsSSEJUzCqnmkjhfrASW7DCK4zVK1QP3MPZRriUKd72ukoZfBgApM4BvAkmpDePGfR9uwU5tx7kLYw2H92U",
  "key33": "24GT7XfidEi4XDink6w7JkUcELieK4oLQYuwT2qkP2JrQNTzKtn5VAVt2k1qv81imAy3DZpyEUQ3n5yb8sh6rLfG",
  "key34": "4ehV3KXrXp9q2J6VAqqE4PjTnLJ5htJAuq1QCQJg5Saz7PXSVwK2n9AJhhJnxDcvpyoGFgzuGFB1fYUbhhqHMDVr",
  "key35": "gYMLqEi9bC5ijsz6iEwF5mnPX6soicKpjPk6J7wthxkSD6obfn3SCSMf1nW9vyVUJdBGSx5khk8Wejgmk5sj5Ak",
  "key36": "bht5Csn1uTctyjTqoLLUYtWFjhpeXxy85w954HC4aBbqTcYwgD5UmCmfC79nNXP5EycAjMjVSkCeGN9rLSwntqE",
  "key37": "3Di6VJXjDQL7L71aZpUdCpPzJyMStAgw1TQoorAsM9bEDLNPUeQ7ySfQ1hg6vrVfG7ZN8ruXsTX3U9Xg4GVMjZ9A",
  "key38": "KeRcvJrpTixgdcAFVJWA4c7FRJsSM7tHGascD9cEuni5SX5S2NQaPRMtzYCKWRKNmGuKo4zKwxaqgNgfGgwGZhe",
  "key39": "5NRKWXeBMEb2iMgezLr6j4HH94mRYNSmVUUs4caEBZoxWXUF61jy9fyvYiYDB8fNAEKqDWjCSjRDKnNrnW7tuqDN",
  "key40": "K5xV79JaaePYt99baaGya65UVoG9Wiv7XRKv8X67Zf6yWDNChgPsQVy7uUxftMtAadPddcTZ6k3pCeCGrQXfYTK",
  "key41": "Ti7Pd7XZJHDgQbfqJz4nq2ZnPRtGnjt6wsnqJVvF9kpziU1orygCrRVhBL5gJD8otC5UAe3scwAAimU2vA7vgLs",
  "key42": "JUDQQC2VRckjVFtQ3RQc9rfnwhQav8geQ198ihpRcXNC8iLtr6UE8NxDa9we2p7HgrsR9kxnDjBJ8eZXrfyrkA7",
  "key43": "5PfQuVGayYcVQxYg1uJLtqvZS3srVK5h4w6vdmcPk94Sb9EQhJY886umzGn2pfHCVBCYYBZ7N8KYhERahzgH94xD",
  "key44": "2DKNXJYP8T9uf5TxBdgrPv9orkhmHpcfaagPvwesq6KKkjuWchAXR7GLSmFAUA3Y21UmbZQaKQUtUptLsXgrbd9",
  "key45": "5rBYWUF9JhVjnJ2fzmS8aqJdhNhmUk7DzFR5R8GoiSg6RJabwLatjLC8pqSPSww9dta6awQqyifjSyqCCvbfenc2",
  "key46": "3dBhfuPgJjtgY77w3rnzCo8dEjE27tYB8J9HcsVmmNuZHEkjRidxY38DUJoNVkX4J1kMUFoCuSpCttmH4ZGkGDXf"
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
