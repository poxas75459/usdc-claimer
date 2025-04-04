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
    "3bDnymmbwXVV3NZ9cGPEcoCYAfz6zVs2pAoxjVJJ8TwBjeVtoyoUrccWqFj4m4w1r1RcUpWCdnjr9npoeDbTmozp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DV1Ee8v9ToaUNaeUhJZUvTif7ozuXF31U7GRB4B71CyWqsPrWJVBSLF8NSCLpBjnaiRjVPkkXJ8MPpW1bptqxe1",
  "key1": "2Z1pWxUAsZPQFHkxs6sZu9npFKqB7VNZACwucYGxi8hsHfWCd9U2bvkRprnb7CFyS5XYjNHg3s7oYgdrqrH5r4XZ",
  "key2": "2JovkSptooLkb3s7TEAxwMioF4Tnkpe8u9qMPWy9taiNqZhNW5pj1WbZUuESAvvETi8dMLHYKeCTpGAGNXPmRp6u",
  "key3": "5hGwPTMjBnhRVWY8LrBAxCQEec5bDJcnWUK5o1MzRgETLJPQehQpe1gbtvKyetd54my736rAUTtPz8hqKsP8RH4G",
  "key4": "2qKRYj9rkqDHFYCy4TStZ6Cx9iV1M9sc1oy7wDRd2B5HvGqVhBmwoq2NWdRhKjAtZzsFtKmjtoPkZ6wg6k44pwBz",
  "key5": "3a3ZzzCQCbixZvPSp9KEHaynu9mazAhvnW76Fo3PAhxocs4vmGHEe8brpr6TwFjsFvYGAnCiWv3qAE87Cxsg37m",
  "key6": "3haCTwxdDSdbTUXaMKUMdk1advSwLjihv6mYBrrCerzqc16sQogPFaGzFVS3hMN5dHhKdDDfMo6t8WsEWfJCanob",
  "key7": "4LAFG8qDaGFMpSQ4bQ1PbrDZeUmLVjuBAwH52sXpNUV7qj6h8TvtrZCf12rjqbgiDP6bvyizidwZRjcfUmY1qtKB",
  "key8": "4P6npgZSxMfYGx25mh8noEq2A1SeRE5MrpwZKLpnJMVrJeDrMx1urEW9nDKgbJqakL88MLk9zPYvGcN86DfwRQGD",
  "key9": "25ZPUSyq8gsuekPt8ufhY44QSvzuix3ffL41ZeGJ8o448vi6Y8maraLLUqEav3oqDUoRqz2PM4ytpTsCf4Jk5Ymh",
  "key10": "52PNeA257qwYDMJoECkXKQS9UgeAMCKbnUm3x8rPTX8uRNQ5PqhdgVtyLuykwW63QhNCyV3ZdutvU2PLko3mSr9n",
  "key11": "5eEVftg8mpXcre6WRb1LL8CpgckqyVn3J8hb4teJv49ABjkh565SnVUEb23i34ykLxGK8zbR6yJEQpDggzvsqFDe",
  "key12": "5eLKeNc7dxvoEWEmHRbjbeeckVtKcEzdQbSi6MNQSztP6bUSiftAS2fEYARKdvU8tb3nN3mTVJyXAuqP4UNWc1Wa",
  "key13": "4SuA914XyvLpsYZ5Pkis6PYtEm2muGwYKUcuwsoAP7DDTXKpyQgPA7HnNBW92jUmdGfRMmMc2kqbgNXcqpNbA6CX",
  "key14": "2f3hQJDfwEHqiKVqax58ypQPNqAwkFFmYdvBA18yR6EQHUPZY7AFD6F9jco53hAz9PqPqCdC8XTE4jMa13LKKK8a",
  "key15": "4MnpXggSquxtnZ7JZdBfB8KV2zzKKoi2abGrjynNwAbPAngGx9iKh31xehqQCLizpndYCUV57F6dFuX2anaCtsXv",
  "key16": "4Q2Hnt3L86SjhdXTXg8MewbQkKdfVXNoH6CNPFJmBQmBkPbk7BaYx6wuDNWb1JjoFLrJZG25PVGZxd511tkuubMW",
  "key17": "5orpvgT5y2iCGnvSDFyDh6gLVL1Z5pTfNJjNYcJneqKqZ6o3FguPWr8py23y4caAnWEE8E53gMxixSi6KwiVCYvy",
  "key18": "2LceWQC8TTm4W4orYy7VVqFjfbb1FjedLqrvi1K1rrQqGbv7ebPQ2hysYcctVDkbX7QXbKWs2NTEesBHu1jVN8bc",
  "key19": "CeVPbUt7HP6aX5zYcV7rqbKxa5rMzQXLKSc1WFvxh95ZLUDmviDA46qQPpo42Q3CFrnoNnWp2733yTSjyZsqPYu",
  "key20": "3Th39Mr34L8E4eqeBvjz4WS3X4877CJyuf4Mt5kgyuoohUN4B3YCfpEaaQ2pZGaYKN1Y5eLHwhwuyqhfMLfZJvgV",
  "key21": "4t7CbmqAPd5foJ9Bhb7dUzUWuHEnmnPDpYhRVJmpuHMWwGPQX9Nq2pbiF6TnfzcJCX7BMHjRbPoSW9kvbFunb23q",
  "key22": "2NPngCduGeBCuHvWNcNSSmE5Dhi1bdZAu9LSbAnqZrkQDizJoD3YGa9wY5NHKjymWD74tQt1GGiaeFPXimgzrXYV",
  "key23": "w4zTPidxZT5LDRiXEyobHu1ogsNCK1HzYVnYyMc9GZHp23kWBBqHMFRcJZMwGhx4orf4ahaeNce9NcBhyPZTFtC",
  "key24": "BjYyMPj3M435EuqMRVrBGF1nwpQtrFQ7qYdC4t6zqJVyambkpdULMnP3FPSa9ioRbbYfyE8g6DHC9saSBcsKC4e",
  "key25": "4GBVc4vWTAqiJ7GHGfRmw2VCQWEDj6Vycc9ArcW5fwJBExwBAHiHLJ3AfsEtzDkEsS3QHsm7kkRuz1m55MSV5P4h",
  "key26": "66cKiQiCMHMgqGMHUrVXcjytoDXU6aytmboikgWsUcy6EXpKqeJJS4fHga8qam1vufPeei5CcoGqYet55Hv4aJdf",
  "key27": "35EKdvnZNKgTLd7cwfLsyDqUSQkHLLtqkCsWoohdqBrauRu6yT6oweXUj2QKk78yVAWKLvu7C1ncgM2bdbUBbXsJ",
  "key28": "5356c2CSEajZTbuHUGBZGwrXYx2n7fEf2AaByXufmVz3axPFre5EgBWJFEagKGCssgS3dhrC9yW7Evu24wkdFCYZ",
  "key29": "4MLF7QnhaWYz1dXX5TGpN8sUwmKV8jJgyuRHwYv6n7GJbTzaUisnmJVSpcFfX79j2YYX87C4iLYQXp47acZtfr4g",
  "key30": "4PgQdPmc1SsKSX2nANHXrKSkmQi2HX3fixHrLi41dkKhcizPMsjnDtPoiDQ9J7btkbvpmxoLrCpm1LEpHTV2DUBx",
  "key31": "4kH7kWiyioB2ucX4h3cFofeNNbtJ1ka4xnvFHhaXhJL2YS4sZSeBjvncmRCrW2qU9EKZjCTbGnRAa7KXnBCwpAqa",
  "key32": "5hfWahv3f4j4ETgP3gBj1QVd7A4UQBTNSvTU4ct7tvXwTPaeZNUcm2GErkHowLoAy3GgJNChkknode3d6Tkp1h7e",
  "key33": "5UoUiHTZiHGirfDrpjK7Ht1spNietWttJ95TTc5eJCpmopAxTs3dgnY12X5dBBj9ydigoQvqVgzBLZ41eTXgXSAu"
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
