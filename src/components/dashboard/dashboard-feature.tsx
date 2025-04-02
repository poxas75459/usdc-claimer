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
    "5Mt9CGtrDJXS3WPSzVsn2G26oL45tP1nLAfFXHcNB3P5yA3DLJpkCT9imC4i2vvd9kSby14d7M73LZjRVz6GZVqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1vvTLEvj8e67v5sCQJhYoHBFTSC8j7NmpcvgBYN7LR7cwcGn5bS8JZJw52PxswXYWAiC8BecUggoHewW23TJ4q",
  "key1": "3xgYAUYBP4PN1kiXRvsFsthRMe5wkve7vXX5uAT5m3aW95qn7iJtu7MSN5HPJtaf4b7rx4FAaE968T4D5w7otM6m",
  "key2": "d2F5P5kgRaNFF8u9oHyX9wrEdpdXehbCBpGL7LqYQEHdhX7QDCfjmhNRyPEcvYNm3Q19VLWP1jPb3VrwAtqhu2N",
  "key3": "5jQmVFwmUkHUAvkZWsaVxQGmZAT6EmZxaDaEoTUvJZgpQQWf1XpVkxVkrESXvJ3LYX7Zd9sX47L5UjBZENKb4ucx",
  "key4": "C1tBFdBGCPmKQgVTLo8B8WgAFVtkoVFXooz6df5ScchxvmNGGbgB6PZWDPpNSZ2uJ5RJFRkBKt2kGto762LiBUu",
  "key5": "2QPHDLNHoQm74ncUoFgBN9Efq1v4PAVf7hnuftE2gRksM8ee6P7daNSoeVMf7DpbXgaBT8fWYHb9beuNMiYbZV6Z",
  "key6": "2t2pD77qAnyacKDTGVZDXVMF5Bk3s9xhoZ59DWAA7tH5Z7fUepy4ZpPbeJ9dzPMR5gJKrJssdLqJU3D2ERGU5fbG",
  "key7": "3BtxFW1g6SqBA89QAuwcqNUfFmoeXYKBgFdVYXst7kRrgmaeJ1MC6BWkNjRReTgAVnNgKFR2qTRaUQZfTRrYF8C3",
  "key8": "2fww9sVas6scosFhJnhc71z7H6fkdM2h23q3kukECY31LmPDrJkotPxPxujA7tUfVcDp21aQZrtwqGbNj3iH5tRK",
  "key9": "3N1bTuvbuH6KoVJPkWiFJJspE7Tyo5GwraruEvyaT32uPBWS6TJiBYtDX6D5Zqf9QEvTwYTL1AsRqyR6VZL9WDdd",
  "key10": "5oPsbKJRcuL1vdniwN8yvZNjHQxzqw6U7iDrxb5aq4ZozpMxBtu8gto4iKn4jNzPkAL4GK3rJUt1FcSQr5cRsKhc",
  "key11": "bJCqCGR88oqd5DtjxJrtEqMZgnVMEMUyzk5xRRfUjHaEXc8Dcerpbs7boFvBZ1cbBTvPQ3eUtz9Nh3SdBdmnF5T",
  "key12": "2LEgPJi5ya49SciGcYp2oXeEZ7bWWk8Ss71XPDpLmiDWc6Y9JFVDJ66iWjctbM9a1MZB2aXVvbHR2gLf8iMszREh",
  "key13": "4CE9bvNvGoGdtGASQKZoQJ8iQVUasTnMQ6G4c3StANxwew4K34uKDWcQhAG1eQ2KoTRto59BC8fSj98xYdP6Z875",
  "key14": "34BjoBUVJ1AproW7wmokCH7e9URxBkxbHacr3ziQA4nztTxSR98tFrPxyNBNGeoeUdKNNxnQonw46JbfiDZnC2x6",
  "key15": "41RVJvS6QT2uZCUvNn3YEzayJaav1KMf8tLuGQtPAch9ZiKghtUmWLcVDxtHQjtnYKydj6EUMTBUvnp8yutZwCQ4",
  "key16": "x6DAhLHCS3tp45UiXRu4P6n9nRkuDGwHj48bgQxhpEb4cpFCKzHFveuHVrZYYpNLKYqEwooPbvVv8Jnxzp12XMZ",
  "key17": "2JwFyYyhm8Q8m2ddGXuhp89VozG2dDDV1sCDjmkggoALitenjgRCQNZxTfsRpt1Er9GTF9JygkyrGYWCznsprP6s",
  "key18": "4kFHiHLM8KMZ6z1cTAfojQABFXf6rN2cgyrZXxZohisH9PeUDRu6rwy8qCGAYVcd5Fo21b89Qzk5BQVgs727J1UY",
  "key19": "28BJAEdhjWuDt6ekFLsAHERpXzKg9h58wTE1Quv1x9yu4NFtcMmxCir7sunD8PPBMXj2yjADtaGTvwiAtVoufWBe",
  "key20": "4aKhE4LgoFV26XjeCkS8eUbtohLnJeNWYuazHCqaytktg7n2DsUbYMnFVNWifa1YNmcadmfnNE8MMyYbqipK3kuN",
  "key21": "4fduAGE8VyCjkSGmEuH9NECMR9ZfzSGAvwzGnk7HEx3akWRHoWpNP6MQdawCXoE8FruJFTFKm7HZXZABb3zeyTWv",
  "key22": "3fRia5vCG15FojoVJtPktnNeDwinSeMV51qxW5YBtask1i7gNTubiyTyyL3cQK3DTgydTVxWUUYChacoYHRKSjju",
  "key23": "4mK7bMRsZCnMNGN8rApHsMHhRNasDeqs5bLUb1QK99yt53RJk9Sf8uH7Z1MwrnhSoYUnzBTr977TvLsFXEdZFM3f",
  "key24": "4X2ABBynDzwZAGAZNSVeSsiehe2S7N2EXwiZ5yvUdSqx1gGiQiZPCu7WjQDheKDPFroJKmnx7d7VweZAevL5EC36",
  "key25": "4Yu8fkQSeMTKW2BtPeNrNfejQn9BD5q7wVtkvprmu6hYiMdFNSVi2NQNbLpSrhV3DKSZS3ZKvRtVWxZZcR9grVA8",
  "key26": "3xMzcHcEr4hpC1wH46FnE5FjKcyH2VJzfaunwVcNtx9i3NMRi7wNHLFacWitKaJ8DLCRqgDnkzAn6UwHivVXi3hj",
  "key27": "5EXWb2E78pakeQaddu1T4YJ3ecekCMoxdPSL4UtYPnLGWhsHJWvaiNiCvTBrytey1TNnG6uopTuqhD4ZNyhknUk6",
  "key28": "qQDzphFeJT1vy9XYmyWDLjQfgJ12YqK2XVpUvShNQx3JvgWoP8TAbdu62RGM1bfSUsCnguwqFLMfStVb8M6DjqQ"
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
