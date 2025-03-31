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
    "2s6itR1nJaBK8XAST1pcz6Aw6YxfYaDLp13uG67i8cxedENRZ9Cnf3SEYVXCdrt3v52ZHLF4Eaz6CK5tgbSgnEit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTBwqRdT3vGb3JfYQmW2wZKMMLQVKPJQPwFctMJJsxnw2knDJ4j5qrMqgJYHwCu9wq1soESDLS3qPB7HV2gpsVM",
  "key1": "ToBrEfU2XdbR3gHeVnrBybMqnuUSk2z4DmcwZ5n9vHSVT9vz5GMHeuVK8756brHoaVCS5i7RDQZKAGqEjoi7MqF",
  "key2": "2wC2Frq7tE4Li7dr7QJPCKmKZKcwzuTwKev6fjEBHPokGWSi6dM8DBK3D7HmLzNcXmSSKz9WBsRGXYAQ2hVvnzWj",
  "key3": "2Y1WN7q1T5QCivZXAKiLcXo8hMPKKqoyDezgD5Vw6kYxFxxe9G3C6Mi1teH3dr9csT5QYZzvkRXxbp9v3weGs5ij",
  "key4": "2ZNp4z5KsGjLk9V1UqqvFZ5wLXia8Hc1yB9ru7NMdTYrA16KrvnnRDLGK4UgCExfxHAvL5vM145Ew7n97Ui6iiGx",
  "key5": "2LmnSSkGoMKVz8hzjjXBaK2wNK7kBStCiCVJ8H64HXP9eaTqgR6QcyWdUKmgTefcedtdkzjjB6dt4DrdNmf81RDA",
  "key6": "22v9Uac1grSnrVPcSMZoULD7wy8goR8Leukheztrn5YjppWBTRd35yCzRM2JvqJ1QZWwXNeZGekRN1dJftwffPHq",
  "key7": "5w2d9J95wSiSHn1QgQSA2qgtYDW4F76e4dMzMVG6aRu1UDEV5kXsMzQQfH5ajuq8Bw31xEwDPFqABuqVprdPYjQN",
  "key8": "66yEDaaD6HbXZbCWf9Gsy65HK9uUsc9DJs4jq1KXW1sZzi6izfK8WpYmTib3cs1sY6Z9MxK6HkYmsuQmvNiLuJCd",
  "key9": "4eGgyy7uRTAMvGhRFstXfkfJqxRqLoNBJWAWZJVhW9ixTErBavGE3MLoJdAPitSxLThQBg51BCBUeqBjaZkRhUwz",
  "key10": "47MHCU3VWzDw72Q9ZctD5o6i6xUddjeRBrbEPVTTkxjSujRFUafDyryjV29Lfwaqo2BNZd7aGigsZwqVVhwZ5Wth",
  "key11": "isUmajTJa4zC7dkUGff6psZmgish8Eth7ZvaT3beQhZYDN6TJWQ2vZLBMg7LM2akr8Xj6fYGa8PhvHq3B269XbL",
  "key12": "2rmgaYNb9QhYzT7WvKg7gk3EaeYqPdCj4ioYiy7cWvyJmawmbLdKwcHhy8Ys2rg3i56bCgVTCLcW4GeJQbmpfK8p",
  "key13": "3dyHV1DdLAsQ6315ZMCN5p9DkneVTN3itNDUFiqUqXAc1WcsEXHozdaZogw5b97YRDdqW7VvtFro66JnURgA81N5",
  "key14": "2GVQr5hQ7zneJt41uZdB2WvuUak7ph5tLmuuvZVwsr4DJmTWwmNwZenfpZPjDxAksoViLgCrsGrQvFb7jKDDboVt",
  "key15": "2rqsfTixBkoAzZwv9fqou1r7CmrAfJjrTFSK4QiFAABF2WV3Ld4dBqRSkebRNrTNsFn4UdjUiDVbDF6PXoxKj74Q",
  "key16": "5fR17MyLCHHJNcWcuzt38Z1o7xDJ7G3NtYSddSoFH5qnqFHnuxdtYziaJn7jvZLCDBeYL37NF66iZFXHLnQgxToT",
  "key17": "4FfCdJvaHBwE36Efsb3PxGdVFatACtQiX1hUcRDtu2hcWHF2GPpDZGJvWDcc6f84M6sV8k8WNUdomQ8eReC3SLx1",
  "key18": "Ho4cM3KndMUHyWJaTLbQbYp2M8wNgxj6TKhHmkytrktzZHqvWVqqst5BkfuvJQbx35szxzguKX4GigiyVoJacQq",
  "key19": "Hiy57wgFFhADnyByyeqpFJLFUGNSqRoyG9tWdGJNaViabg3aW6HRiSNXCMTv91yMdjjPTmWxmo3nMn1F2sM64on",
  "key20": "2DWivacsDJ88tsXL7kC9dp9gSxwJUT89Zcc2AnV1A9mniYkfj5Akz3a6cSFarJuPzHS5YR3PEsSiDJigpyrAQEwM",
  "key21": "3axTZagvaUasrpExrUAL3gNBrfe5cwNWKGTUywp9PgZnYEqhgvEtyGtQxjieTTCTiq6ZunDSxAK9CxaR3L9bqAL8",
  "key22": "3Jw3qDS54bnvjVxJZSMGYVB2Gaba4ZdYnMfXodL6w2rZzJNo8uHXJfXMXJmvijoFMqGj5yhTmgn7LQ7jRSWHyh49",
  "key23": "3Kgea6YCMDYDoUTmWA7jtAzk1wSJ9mRXFSqsJ5TgPnXBjFuwngvFtnY2gx7EPdiFit58xd1KVRJ5xyJnBfSSzDzU",
  "key24": "612mc7Cq9zERei1Xfz8MPVExeBbQNhsGtrR3osee7KgzjB6ZqZGWjEBQEj4moHZawwR55MuRoRp5Qvd3AjFVEzu6",
  "key25": "tVfJfEjVhYDutGFNz8fnk1nTZGphMQg6n2CVGDBH7eQjZ4NepRJqfNyRC8mgAXeipNgMr4s2FUXTF7Xi3w2wvkq",
  "key26": "5AiqdrjqzdeVfmCeb1H8XE9kaspTMMqoePs8zJfhsxAm76zayphWigLDp8aKRDgUUXdw7JoyWRvojVnXuPuqVVZ7",
  "key27": "4LUTawo6q77EF4JKanevwqkzYjjaDseZ9X3hQypzCoq3AB6bZDhcUYZfTkhqX7wV4hST8nvxBkLZit3u1rBKYYpC",
  "key28": "4rxvE3StEipehWstGkpVUF64uAq3qiBbgc2chYwwPNgLdTEkHJXVqyQNG5gRL4w3ni34zaTkLRPCDAVwZnkQhHVh",
  "key29": "35KhLDaXWHrown5b2EKbiPphsH46wxTud4F2BFfDz1jBRvUSAHq4QjgUxHALJkAfeM9UStQt8VTuH6udjXDKYjED",
  "key30": "2qZ2UWjogQCoWwrSU8fMfhocuvAbQorZtpHdRsicdjQ5wLwuw87oYK5ma5riNPeuTnaejim6UpFT5y7caEcasfN8",
  "key31": "5idhKzeKbFjy4Qds8cDVmi7WE8qPxMXQmFtfhFxfvZXaPVzXzhxruiM2v9obnz9rhh7B95GCqZw1HnGdXs5moW2d",
  "key32": "aRiP3L11hcMdpLjHgoAu2PHAHhZeLmqZ5MaBY7S6rcfHGDxbcgxFRpdyVcqraxxVg87MeR2Q3BDBVzKx5Atrtjp",
  "key33": "3y7mZJMmMYDcehnpahVotQXt1ggs1oV3mHqhDqLewM76497Tzetj8HWJsnf1oCnz6RNrTd5NhXorcF25Nh9gVjcP",
  "key34": "5LUV2EGSnnqWoQ8QRXrhHEnNVFFG59bF2ZspjmEjjC6fbnpdKYxYSWu1vh8M3sqX68C3o9UzhKB3grunbMVeSCzg",
  "key35": "2BF4kRaRChsdYaPzFHki2ELxhvWZnu231nBumky49Ge7ojzpvamJ24ZKWZqZ8MAKmfgu3yj6A6zJy8Wb35nUPyJo"
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
