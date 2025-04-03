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
    "4xSN6U7XSnf6W7XpNKXd7Ga4eGvr3smZHhjwoo4XstoQ91t7PA2DquiDtCnGPudarQ2wZxQbLLrGEaiwjpzHdcAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ukqmuo463BdqNxq4JfGpxbZ4RUS6wVTFcWT4UeL6Ynx8aoCVntArBDsZH8PxwzEXBGVSv6oTAHcjSRAXhbygkxj",
  "key1": "5q6xUnk8W2vaREo9ABe4jJJ93b193dwy64DBtb1aQzspkdgugQ5wcZLeZxi1vkXt1YSVDbUwqHa7EcP8aCRkcCnu",
  "key2": "mD9PhfL1LREfmGaKjEZB9kuZZaA23KPVzLyArnZBFFADfdeibJcua6yqez91MFx5ozYyG113ge2Cv4v4FRU99XA",
  "key3": "61nEKt2MGMd5gZmam1sS2AMMsfBxkQNKMxodz9FeosJKuw82YJnK3Sx7mLZwzkN5J6UyawkkpLCCxoP7Jizdzc1Y",
  "key4": "5nYNTzY9hYUhhw3Ds9pEJiLo53Em1V3vDsUBVvogufiTR99UcuZySGFFVY9kGbVoM9rer1D3iJGaHQuYh35TZU3f",
  "key5": "5CLTk3tWNGUxjHNQAT1sekm7TGxa5QwWnTbKT9Ex2cde4hMzitVcTfaGWy6TxipRnAE9YCnBJZgy2QXgqjT26mxT",
  "key6": "5hDFpjmR75ibhsZSFHQTquYiahEEFRWmzyoSt89Sog6NHZAgA5WEQW2tw3218UfQfRTVj3jKZWppzEkUtVAKJVaL",
  "key7": "2Ys8zb3JnDCDTh421aT6Ex3ewi3Y9GfZ31VY4zB3tmTgWU3zevts3wNxaZ7qhS8DBnQPKcKvXS63dJYoz8h2aDLe",
  "key8": "3fgEbTcqYw4zsUbDFxQPSRXdm6C9qM6ge9yTuQzNe8oecTe9YurbNfnXf7RgVuyaxFHsPngXdEPnYfBLmcjNyWuu",
  "key9": "2NPNw1C1R1KvMxiM6VpnnSKLPPtPnN2pfb6p6uyWvV7SDt2aScy6TCBshe8dYXHvxGYZ5ax73rmpmCYjgSNFkQu6",
  "key10": "39qoQarN1HDeeM5MogG4gFgg7WBgZtdYucGn9owuE7Vp95j52fx742ATyfF9raMU1ZboACYN6nEAsfUY2iX5hCH8",
  "key11": "29EcuCLiEH2uaYbjMoQHnW6NjqeiY7QJYM9UuhqX5xUtMKzF2jhUq3Wwc3PodgzRKF699RgB8myNruaiASbTb4rt",
  "key12": "4GksxxMKpEvFxrKZ5c6yFSHXnwRT24aZsEp3HZQE3WQhwMWUGGv7hsptVLCT5Wpm8PmobKyZjFXN6EyxzEsgBuQf",
  "key13": "513sBccN2tA1AbUkf5F41NMaQdt6h62R8VyEw9XT3KQRr4vBFAycBm2h1wP5NJBZvhwDhKT5V5oPYp8MaUMAfMN4",
  "key14": "41aJBphwyBgFnKs6qTcVhkZCwM9PHRzPtoAfpoGUaMyshwNKxcUBSscajoagDoh9DdsnvDQqSYYU9gR33Fu1Z1bD",
  "key15": "2ep82r9dgZrxXmAiMZAakJou4uR8sn6bbRwhtze1LTF9d5KDhREd2VVAmikKYgmz5oxm3JYz54YYNxczgxgJQnho",
  "key16": "2XK8FjvyyyX9XVMR4GVzv4rWEcUbyxG9RRTxSMus5x1UTnfV9xzqbGQdS43FT89jztJEoaSv6pBrPGaDPdT7NCpi",
  "key17": "5fiA5RNRMtVHJUm1HkACdd7diYr1C7AibnFWBxmyb5iKUu7nwUfP8sxjxpRZLLzGjGHnBBRQozyRM1S2PsKBoVQS",
  "key18": "3ruCCXxk3j2NM332E9f43TLVeZ5TEAr7KD199Er2CXhneDhx3mUiRoP3eqfD9HmtcwHcDYKsS8a1e6FEYd2YJWQ9",
  "key19": "RAF74pEunSmYw5afEJzsb91giQJxpyGEeqy91fxap3fCA2QA5D2qCvvpZuBKD1PaEbnLWieGbAo3MunHVEBECy5",
  "key20": "5p9Mky7uYzRUkxEPGdB37JM9ZicpnhfVoq3n2eXnwaxqNd3x8mxLhLaoD2Ewz9YabnxS3Vf7P4wbBBKnuWj5MSEV",
  "key21": "48MkZge1cuS6ye5iawH9nhtcRvRNaN55b142bedgZZ2vCtR13jHY1ud9R6rengmgbn5PL21DjFEpfH3AQRKy1nsi",
  "key22": "4DodU5ZvYXjWW7DHy4wR3ZL58St5CHyk6McdmDcPGTyuJYCr9MUSnWeDqGFq8dgMGowmTP5t8Z69fv32qj7kiKCc",
  "key23": "3YDgjqAM2Gcwvscn29THhbaM742KdQrvs17p7Vcw5VCnsRxfC6GYYJkR3ypYCTiJC12mZcgAfmmeMeeV6j6359GN",
  "key24": "5JoxUWHGdsMrwZRByBpjVn4SR4GMPh778Ks1RTYr9BMQUyoFG5yjcj5yeMSuYiNmzGNNWFBwNJdVceuBxGHjFmeG",
  "key25": "545LrtruAWSBu5aTwzanTRnedhB46LhTjNd4Tn8ehAzL9AgnmRrYMSW3M2fSCcjkDG75kfcKs9toZoevh8ZmNTVt"
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
