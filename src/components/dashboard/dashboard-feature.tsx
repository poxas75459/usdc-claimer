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
    "3VTKZCXXqMcKStD9YmM1xqNqrpFLwRFaUy4Mm6RyGGqw31nVvZfNsmRuc9nrF5S5Tv9fNDYMfgQ1Jnact8Ch7DNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMJ8XKuNphJJiDXnPZZk9KQxkmMEby1UMTX2GTSui42ymcFaJEPt1krygGh2iDm3CZoLU7FMBp5bvUkHnPBrT3p",
  "key1": "3HSsEY5LqLnsmXu5Bxdxm1utrLC5Vzsg5oNeq17N1stSNcuMoRu4DCVgzwQp9BQmwzxMNixow5UKXavFFZQSkXoy",
  "key2": "5eq6YQZ7EUQzJccjGg92nbYZHHpwSnxBbcuScxCxeBF1WThhK6TEHZQPYt1Haxn25HQRozeCA1Q3i75qTGJVH1ro",
  "key3": "9oFQb19mH3jdAUgHVNTF82LLJmy5HFBwbACYfrgcuuRYLHhVtLtqmFnAHTeK5wnfgdgutzCzegmT3tHJNoRX8hi",
  "key4": "3pNw4W4pnUm6fy15o3D2mXGviLxuJKheKvTb7dzumKMHmETTRNntG3mGwujnW5ZFM9fs31gyhYfKuM3LTh4frTt6",
  "key5": "63nVfSViLkKR8RicRb8foKR1zEk7egf4wwVXQoSn5wfQYo1PXPw3xD8UUP8NhDrwjXggqrRy5C6denyHnuqtZyXj",
  "key6": "g3BpMw17xq5CC1yYrC2XDjDJLKBSBEDVsVu7J5HzX5iZtSM7EmF4tU33FbudauV8KiJWgcy8wVMHAp6pnZdyvXw",
  "key7": "S1VNkoqqwWStGRtSp47dA8pw2DHrW6Qwjhwo192ukjM6snKnWCDHT5ujRrfzLj4rU6L9LnUqmKKLxyRrHDqLbP4",
  "key8": "3afY6d2TPZvTVHHLgcmzAyDmGUuWAxUUT4TwA1GcfAWhbVFjvn7dcLUMGHvBnJADGB3mUPPXQBkFKwVcrjQCG6jP",
  "key9": "4eS3o9Y5koSet6UZTn5hep3ChmQbNNRTDzwQGwVUGxMgU5pyEmbvQmxzYREC3uZPsKibpAnPP2Q5osLYhwzzzuSG",
  "key10": "Uw1xsXgV9t6C8Zxujz7kQKipeHxZDnKVV9U8ibVMCJpSz8Gyv74aZzSWpCZAoPJ2FcFsRFk98ZWnkRyCRvWmXVx",
  "key11": "4LfrziN4ECmLsTEy2EVRgZ2wqpvWvVFcnhi46ixcrhduGpgDdj3da1XwPWJ8xkmZ7dQn29hWpZx8pFzMh86rvaAB",
  "key12": "5MFxT63QC54ARYMis8wnwYhBReMh8Qc487Xmk8qARKSDVX4P5GBM1KAjpncd8hLN95RDnVDX2Tn2CDXrtWYLUDHy",
  "key13": "622F8C39AnYnTXVHH9BbC59HK5RtdDZJn6MVS7GDa9cBmwBvPZspNkrneutUz9aQk6mZwyereEwXcoTHjcwWiYPH",
  "key14": "31CL9HJ38AsqpA7ib9h3RdnoYb2X62Fn4dySVQbwSP2gLZPofMrnWbLyvu9uijQ6zMF8SeXZcYV1jbJhDMamaCnZ",
  "key15": "2rBk2jUjkxts1Cg5iqkw9GmniaCLtGuPkPhA2RLS7TNj1aCxgyVuGJ36NwkvZYs14UPwTfBFqst1UNxu689YvK84",
  "key16": "5fZzvRMpGTFW7BCHopJyP8nQoVanKYiAkzmEwYfmMRnWdw6FHSK9YqQa6MXMkoPXVh63wSsAf1GSnWzt6VEaB8WX",
  "key17": "3tds64ptWexyPjYE1UdLBx344zGtBswymTRR8Zyxgi2GQRemuA2Y9qPVbePr79rDLx9QqCFNPN2p7S26MaYZcXtj",
  "key18": "3GRqJU8D7o21QDtTvAK52wG62uXzG7NVEdwfPes6Mgemgq1btuDWKo1Gf9V6f3zqzdKc63fLNxuk4zp8EzM8uWGx",
  "key19": "5m9shRMyLj1L4MYR2uz1ZQGG2yPiCco76JjyTCWYWswP1oznuctuprPgrjqyQR5YCJgVeZkeLKN1XeV2qQqivV8P",
  "key20": "3LYt6XHukebk6QRYHHi1UwSNvfpH3NgSTrD2aZ9LmuRTDUNqLUnmkKMihYUdHMFXnnMkuzyt7rwDYRLxNace5hWJ",
  "key21": "5T1LW6fQaXtR4DfNTT1B2uXjvyTmRD4cjPgiko561LrjnNo3YACcXKP9f592uG3DoS32WE8yQHifezSnY6gFypoE",
  "key22": "5a76FaxeWbUAQ46vEwYE4UX5bdU29FjcztHMaWR7CUzVxkqLi4tydgJ81jW32KSBgRRb7qwJLJqZT8T97YRWbd6A",
  "key23": "2TvVHGkQCCToA1wcp32vG29HCqpspRBbpq8VwA8teR5NEsFKVYy5fiu4SpgbvuxokEVfpXsCpJGP7noY3ophTshC",
  "key24": "Vm1w9RkUynk7C1BPrD8zpsjiyiP8xBJ8tMfcKJdsonGgARgtELcB8HmAfuppgjmYYpdBsgqbuNkK9vkWaXyKH12",
  "key25": "5EmxuT5UFw8C3expWdfrVn1gose6PSpP2p6PRVYvooXSkdMNcVoH9cKsdsQkkToNYb1XxnXDxDFhgLTfwEoZumd2",
  "key26": "4QBUbNyBS4xbPGL6F87VhF3GcboEef9zmPoDYw3ZGT52DTHE3NEz3iawyacehWCohHkz9jFFmPVyj4ywrHbirbTX",
  "key27": "4xvEiqYxTwM1VhSR4TxYLqFYZ134AmmP9ss1TQR9eMNkMdbqR6dKDwaT89mRpKHcoHZWn371oJezLBFQeYwSP3Ap",
  "key28": "4N1u4FFQp8RUhWtLmkWE7NiTCTPzhFr9TKcG9SKBqmAFbtXv8Nsj6oVPCGTrHHEeZsJD3qoSGBLZctxgNTB9BiR8",
  "key29": "5K3wza7oJtodQiLf3mwhzuqfj8Cpo9zEduV8CC8dbUoxLfZY5EoPU2JKZXP4nnzq4MGaL3NGM8MrHEWm8HVdo59u",
  "key30": "sXRhd4UEusJnsCtHECdwQA8sS1X4xKCLQxQQGr3cvYjdVEPxBQg7ULbe28W62FkUSDGfS6uG1zQ9bA3NThdR8K7",
  "key31": "3K9pJ5xBWNCHjqFvJY4R5ofmUPCC3jmqGhdSQQDUbSvhYZE1pdKArDXBV3joC2ekeR445T4twP9kg5QQo6BTSiMX",
  "key32": "3LicrDwoNTwrPxKs34fdma7amxDc7eBrNmaDMSWzZpMWtLjDjmeudmafmRuxf224w6TBRMzGvkswEiZTmYPKMjLg",
  "key33": "5U5h9rjfJKVV5W2mYJ3nLKrhDC2w4Q1DDgfcrDgdmPKJFh3WCTYFGFi1ZrnuM6PpqskZJwh4Q8TB7zAuxon4Lm8Q",
  "key34": "xFqxYKypq3eR92bGefS9rUmtineBeZY1SYjueqWWDXEcV48bgHgGG2o1bdHP7Z6ZL3wUvYapeesqcRc1ihXbFnj",
  "key35": "345K8UCK8H5WLiga95jCPhpt8DXXrs93DNQd7Rhe8wKLoU4PDJYn6KHKMY9h3Mu9qK6tHdmRPTXcJN1J2ZxW3UoZ",
  "key36": "4gH3iXkrkE3iDYgXecxJ3SMRReRcCQjXjUUR2EUbzF2QMAtqbT4N9XJprr5pjpndd2CyGB81Te4VPJFF9gL5xhyG",
  "key37": "5k7YXhB9FtBBBDG68A1De4VXj2CQWcPijfES68zc6doyXdgbUmeVbeRVMhfLnBisj387hpTxswnbhLgY8MQbz5hL",
  "key38": "2jPoT5bhvKh6Fo3W2uU2JNJ4EDaAb7ke7rXCwLhjTLbmSoVmSuGKuEmrcaw3YLYzs8hEqJnKof6EA8ZrP8NkmKLE",
  "key39": "3D5AfXaCEwBxp5g2JuSAXksRsofkoKoCWG6ptdAsqAUTua2QB2T3dDeUks4CZAQVgscWsKEZGSrR3ik5ZoLgxv3B",
  "key40": "UpkJULuYssBfMj8QMiGxuRBDAwH1fyrdvSmNGLfefASrDZuw7b8UuymSmRsbPpy9XNt19uDdhcQgXyXCaezVsC7",
  "key41": "4xMpPH61iyQMMmH9wW46L4WqtD2w1BSm1rsZkfLiRgz3rniYAcHD4zsJuKitfE7ipTktCmF86xLcPWKFKFXM1fBn",
  "key42": "5YKf1GYkK25m8ZnntvwWBvzKLnjqvpCBSQYLqnHuM6PfpK4a3bP776R8rKv4wrHJquYcbEqgwXGTtLFAw96L4TfD",
  "key43": "39H9PjNwRUjiYMVbgXCufcECtDU6TcZfaQG2crjysMmffjLBdFYb67mvXRqU6qUEARyry8xRzNuS6EPEhu8CE5vt",
  "key44": "eLAy7uHCC67thiQhFQtqZgke3UpR2rjG2rc2ivPDenWwBinCp3jAd52AZrzcLkYhrn41j7kNVgLrYbnF4h5RYy3",
  "key45": "5yAC7GrhzXwj7ee9rnr9bSNAxKxrKaUGyqCTrJY1rwbsiioU7S5DV2TKxqVaTmXncWx5Dn25wbjZrGKuvjE2g44a"
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
