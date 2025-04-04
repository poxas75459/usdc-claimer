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
    "3v3i7rAYRbFcbcShLcvfAPDmjSh5wQJJhQfNR4MvyE8trqbg7cY31gYVHEHFYg6FiDSXzmjQc6xTZZetFdHYgFmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3dZQpNPpgNtmd7KMzZiV55GaH2w7PmeBsDzFNYzZcMyweXy1g1r4R4AVroTZZQu54P6dMEaH7MpEg6DDjYKQan",
  "key1": "3TL2TmgBZWdMEQ2nmtZwVZGdRtENkewDobpkHtgozT1uJYHPUkGErM92y649L3G6Abr6t2uFk3HK1BTDKBhEZHor",
  "key2": "2JBfPL7LN4uKsdaVtx4BuZNVto9MP4P5zVufSsNAMo6tvTujFN38rHfXQGF84iF8uW2sCXCG6x1MdzpPdpGGGsuH",
  "key3": "3oNdNCiArkayHqHdu3fd8Hb8v4ZXY2gaZZgithWwusdobpj675tZfWymDbQHFxgmmWGjdmQ8VYbzKrvkVQaTzxiL",
  "key4": "4m5G5LAMKqfjBkiWTeyJ8WHhfwdMot2mejkiyEb3wTB6Jx8khkvLCTwZMQDfz686Maz3dtmCsyJpUFBSGwhNZRs8",
  "key5": "QSWATaQwAcvEFSei5KJwC88suqpkTtvY44cGiitMeSntFLgZMMbXgFgZPu5gHCy7YhDhtgoiBQUmtjMj7bmVKtt",
  "key6": "3tvgyNHpJKD26283PuMJTPXjMqAC5GucyNBcc8gYnHQnhq6BXKzty9CSrbWaCuKouvDVeQwc8wQmy8AiahhwRC7N",
  "key7": "2scTqQRWiKdd5ns1gj8Mcka2toWspFfRKh1CiJjDxtLz6wqgf9ERL3VFHKhWmE6dHfQok3FdMutMgtiTHYyBjxSG",
  "key8": "4TnbhJdkKUsQctiEMT1tNMjwCPmSSmCsv8Dhntu6rfnhEgCP1Mh4NtjgWL22euH7Cpf2DTVhiECm2UZmx4tbhZRh",
  "key9": "3bVsw6sNZXkW8sM1JwSsGiEzGMG5s6XkK6y3mqRacA5KHDgoQes9D1sQ28G1XiZgE3T8J4ZnvqZPgTTTv3nj9TQZ",
  "key10": "5XW53PRXu1jNM2NbcXbPg6L8dCrzSWFTgqgpHAAW9dnPE8Nbj68CqYNLk2VA3gfv6VhpoDHNqFygedzvWsbQCoDe",
  "key11": "2Vx555KvTEhJJN3QcrPFi9K84a2SMrnySaJxgWnx2nP5dfFVCVbhAGo1Ed5hrAqqMPqU2nW6ZUo3NXpwbgqrC1Di",
  "key12": "KUkMHj6WBjLbjsn53DnzYmuc3zdynoxumi8m8RYEYTSZbXvPTPEKV8V722BjHnSwdAj5rzSKM2wNtL9C9Hqo8RK",
  "key13": "3WU36nmu3ZNtG7eLjDTzEZivwqiDB3LNMSjdcfhucyUtgGM3LM8CSVbyMcPeL888LzL5eLedspXTsziUg8TgFvBp",
  "key14": "4YvEQzXzP9y5zuBxmYXqSuGTgZLEjEfG17iEquEGMfmriinmTujcPtd6DqdVf7UfWJWHaojazV3gn1sPYj7tqJWK",
  "key15": "dR4YjaDixNhDn1bf7mdEkx7a1MHowMUa4pmj2jynow6rHJQYYn1TRHFmLFbcfLMVyVegN9jsYWhe86MVc7hh7nJ",
  "key16": "5puXpHTi465ZoQLU8w47vCexZesyuGBRaiS9mTYNZvdkbFncF483ndmBEkx2jYkL4gpmsSk4Rp9qms3QdivTyMZb",
  "key17": "3uvaD88LHSfDcCXDTpUmpn95B3taB87NJf726XPkQN1ktaX7mzYdkUZkzRWsqUziQtUCgDKKVwrKvfYDqBS1y2xs",
  "key18": "58WxDLJpXmBd7ZWUD4ktxzya94DPCNsSJnDZBVUawFsDgU4hum5Ddf9ULzB678nttYoYdUXnSb92wcKiGRC9X2YQ",
  "key19": "2H48yfRQvLME2cL1hspYSjidfmY7DNxqavAMgyKWtM5wJadFki2FVNJu8m1fkvW2nFuXZQiXLuiYXVJh7Gr8KFA9",
  "key20": "7iCNZWqPuuYe8NornmymiimnpzVHGZQpgnxXxvPQ5xg63UpqPpAbu3bATYwqCkLVaB3ieQ3PedBWKPefjGb6gFx",
  "key21": "rJpwod6XhaGjtEK55qDqfk9za2fbSWYmnrC8gDePJ2wByjXtVH3586PQBvmJnaSZAyB93m2tcjiNKUrpDQ42c8W",
  "key22": "RQsoavCDENoqk8Eb7DaR5283xP1Nccz5GPAoz7SuJ4fnFCpBiWUQATXBHAhWKmxeX46QCqMhe2kPHNzDKS29H6z",
  "key23": "4Bz7NqVxEDCBcMypY6gaTZ2etMyYN3neptfgvLkG4EfLUkuwHz3Y94uqnhj4tcXCrs88ZVi5jUqysRrLoX6GsJag",
  "key24": "5AxoVExTGTRNBqGxL4GUnxF1iAQLPJ4gf6VL4UmisahJsgUFKRn1BmQnzdzJ1aULJaKjEBCPZnNEkiF1CW2UxzBF",
  "key25": "4WdnJ3USBNi2Pv3XZXzDdncb9QSmuVVTAMjT9YtZ8cmPFKSRqpp4sDY9dWh5XTK1jHwiCGbksbt1aouJRg7rQ7ey",
  "key26": "4tpc5kWBtp2NFasrie6VHHMBjmhLRjEMHSf4bQPkCzPaZdKDS8vxaUzfnLDDbc4VKYhpsmEDtTS88FmFoaNqfLcm",
  "key27": "3Kz9AFNgH8iHE5xVjaaZkjKubcyMjFHGjUQZoTy3JRAivLssZbKEDmWtvHMpyibEKUdMCaNcguf6x7DKcYnti7Xg",
  "key28": "3W1B2RfYfsHAe58aXhrUdSSNAWV4vnbJXmWhVmaQFwhPu44o5MZVX3d15E5JLS8ugExSfqhUdfup8Sypik6r9eut",
  "key29": "2Ze3SxLXcaqW31gekG4WUDGTPFBMA1LBPdVoXV8irjoUjWsqNrH8y7o21kydUP7xWZZfSQbVnpjAJ4vgUbcADwRC",
  "key30": "3PENyjQDWFef5qCUgFjYNPPduSCYp3Z62RRo1xf5eKcyWY1jGD8NrSv7ah6CbtGRXHyptXbxhQipmnsQk7JEK9k8",
  "key31": "1N9Wh8MWfkMBLMKcPBPAXKZk3v1E9QPVyXQQpAnSAPVJVnMkvADQVsZ8xKAd4mq7ifM5ZGxZQLdmLpXaavRhrYS",
  "key32": "2Vk6BE6WaRk4yRnpopbLENW8C2kQvUkqDsgYjQGrJyt6RyufNjwqzTQPghwwrF8z1ekfeotYVjZZSC1aRj7VK9SJ",
  "key33": "64N9fa5Whmm3JqDeMaCPBt6iL7tXJ3sLvB2Y8fGNjamRzKJPPYgkpcAqwyH8wuVnzV25xrFqrKGQho56XLqC5t4J"
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
