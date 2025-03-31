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
    "5DAwAda9TzApojSWQv2zkfoqvzfwANJpUiiTUan5poheudjp559VULH4FcV3jXbKLMeLd8Q2RBX3ffYwkJLthzPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWCSu3yMuJXuumePs4wSFrPi1uLiBfoNQFGrmcS6sMJbcUUcDuu8WxRJrXPhcbsqKqpHk212b9VxGAgWd9xZkh1",
  "key1": "z2MMvSkVacFGdq6vffLfLNWH5cZW5FficMiVDTK2oAfg7e8jbqpGRKDTZ9EBxViyTEwZM1cbVMfw8zEjVEx8Ubq",
  "key2": "5ydtdcZ9kgTnzfFVx5dJXKgVTLuHaK9myYYuaSoQipJCtexhdPo7J5z2QyhDAraZATCcYwbLQ3Kdn12S3183AxDm",
  "key3": "jKAosNkYgetBBqcuXP419rZNxUT1j8rALubziwB8im9egaw7zxQ9LSVLq2FVTctMWy4Z5coXChTkkChGWeaaYti",
  "key4": "2YCgAEn3dHBK3EnUG1F2uDgwLqHfUzfts1jwbo3DFYn46XsKS49HkBhFrNf3EJDsHLpZ9gS48jTX8Ka5YbxUxRJQ",
  "key5": "3ar1fMf1UXJfvBHZiHCPgWaxidrc87QTghKjAmZ8EqSeTKkYfZgqnqmJEnfZ9v9gbqY3oMt1kmPfWvWUFLYVQky6",
  "key6": "5nv8Jej6SBn8sjPRMvJr4Fp2GrBCa2E5T1YBuffmv5w26UHPJxHQ8ZRzMRf9veGujC9b86HRhdEHTL3Vx6dPB2ab",
  "key7": "4xUg1P5WitAoKv2tn9JyNPDWiVE1RFzJ6qhyhvHt8WQruCawWu2J2oUXTqiBTFZ3CEgNWM13XztesfToVA3EQWob",
  "key8": "4k1msKhQmM8yQuMugTZRsu8oa7RCtF9Ep2wntoqSiCoddMsfuF5QS6pNJcTbE3dj4VNahHT3ascg5wHHdQheTz7N",
  "key9": "2znF8zK2ddggH4dNK9amHC5p4RrdUyaQr7EuxbN2ZRNCABM56pBrbWu1c6oDhxRdowSA8CXHEDqw65LzmtLvuvZe",
  "key10": "5TKhgUtbjbC1rsSsSjjvEqyjamL4CMiGpGd2aFCPRXLZbnUhGYTbqGjnWFcuU8Rkobzfkc8fkt7f7rrUawwfG719",
  "key11": "KQkFGs3NwKresYC8MQ9YAkW2hNkN994f8iX6oiEngmr8pUQ6iTiyrKmUvyYGYg8He3nWqfjY54Mdon8W4YAPgb2",
  "key12": "2zT2y433MeZoH4ZZ5rb7AimrbtH1SR9kSUgnvvXbHqvXGPzuSzZDMcvqKLh2fQ2pMqDmYTrPckHJkYn7beYbybZw",
  "key13": "2AEwyydTQsj7bgdL6gZXaa2yZaxNPtz4C3e2KSi2hNW7fWFz5ZKT7JxwKfyWK9V2K3jS3cA7KJVEZWqHTfdeLhRx",
  "key14": "2rZxhwk9eatRLQepS2YSB1Cy7SrJJkL9aFo1tRW6hNGuXcC4NQhybxm2S5tts8xpqgXVyJkd14g7sUYW4iGA6NZ3",
  "key15": "71AeTAp58WiCCxiyFLcuYha9oKvcdiSYq4EBZfRjnc3RiTVLjMHzdxFKHRBCwQ8rPL8tsTj6K5VFFD2yBDzqRZy",
  "key16": "5BrUJW8uiB6V7W2Qv8K3ALudSv7cu1GC7ytGGTXuY7jTUyvthatGVSESrLgz7tu2ixt3iZWtHaAy1iBdWp439bzo",
  "key17": "4w9GsBjXGsbGcxrKHoNUT7vHMZ692DtX3VRpdEWH7fgGKuUNR9M9X22TFAu8eysTvzvPejK7qMquCocH66LzKAeg",
  "key18": "5ioDkneW6HruUT6Yje6WoEVrTw6wfQuZDqX2NVrGpbby9kb6jEY7LGHcr3N1z1TeNPB7GqfqFMjcKAPs9MBNLTbq",
  "key19": "4tFovvuyNhmbdFdNHHteZksiXXZWgzmZgAGiMn7mz2dy1B3ztqwxwa9UvXqgo6Y2RVSZYyvXqksvRFKXzh9jCXPE",
  "key20": "52uS6xo3zQZiJvdNZBtFypM9jD8PzjrQjHfFKyFu2TgbfP9WeHhjnCBgU4rJKigKchhAt9PgdWiU1kZZVHNW1ozr",
  "key21": "51tZhzP3mX8DeMfQGLHTGnVE4mxh8TXQ45Ky52KHhY2oZxtUbbAe2Cboy3qcqu5KwzGsfH3asnZcSQhgNRgVUer5",
  "key22": "2w4dLjXSeEPz9WWe7eex1kQLTFh3NyThz4Si8MaYKgogBxpvYq19wybQZ1etoTVVFMdpZgUPNWrWMd7YmWLwt3f1",
  "key23": "2hXnDkpqUvPsYE5zGuYUt3vri3nQUmkcrLUmTQ4KJRE4eMmZS6PtTh5dzf1W7k3R8qyA2XGSkudaSKoQhdmaGzFg",
  "key24": "125JobAKa8VhHMzHNodtUjQP9faLVHNa38GJsuBNter5aoM4urSREvAuiwU94pwjgQDzwLCUDBwrbfZPxdW7bJVo",
  "key25": "2Ts8ZN49Gs96nbUASXWpoxgHTzSpcncTLg7k3n3Tfqb6XcLj656EEPAK3wywg7WWWMVvGL5ZSqJisAtfb5mafj6N",
  "key26": "5tvfmqN9pJ7dV48ftR3Rqqz4nBmcsVehFoMkaz7DVM8AUZBnYLpdKW4iqRMDKvAYe6ahRrVXWhJBMvDxc52MNMA3",
  "key27": "5B266ddNyNbnqHN1mNP86mX6PReA16mkW2TRYFtgdhkFAM2k5FEAantvCKdoEddBet19KtAL4Nys8QfCBNS5UGun",
  "key28": "3C3jZVRvmUDXdK48mXmMfEZnMHUPyMzkDY7gs2BQ5qmPzPuppdH3eCwV3Qs3W3SsinvkTnGfDveWE7CQCjAYHy4u",
  "key29": "dhtq5cqgdbzPjT7ap5BisKAewDd5z3QXZEU54cS4pi143rNQSY92JFJKSGDSCD5nvz169nEpBN7RkNY3iYrjasd",
  "key30": "2gQC3a48c1KFnYgBLCUKqtVcJewUf4K6AzY8P1VtH67SQRgMcoPLdFi5CzmCZ9zQwwAG6TQ3CEnhQBYbYkMEwqSD",
  "key31": "zN11i1rhFKA8u9HkaxQoX5eSyGyYUyCdJHkCisSrd1mKAfZCKN1WodBekvftaxa8b6oFVqpth4Mk4PbmyGK7QCm",
  "key32": "rLuC3gM73vt4mctMgnx6K7DWLFR99yQ9pSw8M92NYNH3NFjQWri3Lr7n5jMUE5M91gYRSbgQzMspUC3w8Yii7HG",
  "key33": "5RGgYXCib9yvnd12CurLHk5tPGekXGnrRM1SfXx9Z5r1ZVUyk9FWH1kMHCeRaHeam4PHF6ojyamgpMrE47kErLKb",
  "key34": "MxRgeaARGdGPaZenWw6dr1vDuRBikdDFdPGgmFcKEKnQuEKSA99Khr8WnKFkLEFeFCtvniHpb8pvp6BdqfLfgqm",
  "key35": "2K9ypsQKUsX2JPyvH5J7NJNEU1afaDaQyPQRZ2oKhhDXb4SLpGcnJ7V79wxBoPq5PH9tpPSo7668kHcptd9jRtxT",
  "key36": "65RwCsBGRP8VGHcwtDPPtvVvvq7pXg6EWQsVwMBarW1oqMidDhBaTL29tU7AqfQ9GMkEukFU67YGjpDpwVKgyQDs",
  "key37": "3HQACMPpYbQhaPorwATbCrWvQTbHmn7s2h3ekSP3PatsoagGysgWfw78Mbo192u5QYYf3cx58VUVzW9niRPxrUwt",
  "key38": "5dDG5rZ5m8JPHqLrg9mPr3gikPPJkmEKLTM1UBueU1j7nWi7mRB8ZMSCnPsD5Kyhdpbs3BxKvqMPtyE7Ynr9soon",
  "key39": "382765CvWfRhxmVsY5yuAYCU9Wb6U1WRq4MjBrigWXY7xv8jb33zbzh52zvtFbgx9jXzEmFDaDtn7YezKMVGBvCS",
  "key40": "4dJBnkafb9XwckGdncBhibBx7e5mxioTKi8hXdHZCcYZsqRup9iMN2m3BAtewgbB5WBEPMSxJwXL8gTwXQYGYe5L"
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
