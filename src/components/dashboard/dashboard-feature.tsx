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
    "67ewumzmJDuPspGw8wBMAqxuDL8gQbVKa7T3YXmU6fMXwoKPi2efoaW7Pb6xarkgd1wtumxQGgJiQdpRRYopZMfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WU4NeDDA8s3ouSSpTKugfQAXDU3B1hzkCSvwPnd486FWy41Ttg29MMdVDCk1TpDTnFPZbcLixoxJW3JzWbNQnsU",
  "key1": "2jHw76vYeaN3PCMu172Qdm6oaGZU3E6M9KJZKnbH72Lo4ARZKsbZwKC8QxXkUZGDs6M5VDK4frYmqVQHku35hH6W",
  "key2": "2eXo2Ee1cahoGULNc3DbBKJY3m5qDZcJqRJGSXnvqLZDp3oq3apEbrUMCJLVeKMXujhuqsyzEHDM7HQGK4qZS2Jf",
  "key3": "47sZLFnFHbLeDQpfW9uQ3xFaWmbiLQoc9h65UN2i3Lj36Hdqh8UKw7RFHiJRU5aQoJWdqTPqhRbaxDDhDRPumUqN",
  "key4": "YGUuX8CTK5ZmpSwVxviM5yHGwiEfAPqbiuvKek7pJdJis5op1JNTk3xmpR3VCvdv2mWd25LcwZz2188nHMnDaCg",
  "key5": "4ACdpVZBHU6cii3YtFFpS2RFGbkjXbHwhN9hhergNvp563qeMrtDkPZGmkPAnXHavVkohuieC9JBjqzdpLeLWKG",
  "key6": "3N3desq3gid482RYLCYvSg573WkzHAEsaDfv5yS5rX4ri5KDU757fMZoEsnUBeERcuEkpHL1ZgSffXbBGsRkExRK",
  "key7": "2PUcpoXNxziqndi7rK1c66x194wEE1hpEtRtQKeMjYtZeGdcoz6HXZkvCFiVtuEWgwBKQZcsdw5MdGQutVz1MkxZ",
  "key8": "xPaU6hnV8x5cjWoEZQQcRTKHCR1Ec1DUVHNA6rULoLx9iKQzM9qc7aU2rrMkLCnQU4Ga1vywDbxmYLa3ZRJxn4d",
  "key9": "dmeEHoQ8JiQ96toSyUaHpxJAdEYsJJKHpegBMYKACxDgMDCgK7sbU2Umyx1mRz7A3Znf292ZRiJxY7NhA3gLuCN",
  "key10": "ZdZupdBS7GdMBhoWYRM1tn5TJBVd2ao6h164PGoR922SFH7zwkMCCNdbUtZsfxhH9EmJTc9aQboAk4uGJbZGDVR",
  "key11": "59ACMWjXDuDp9rY7Hq2gg1VdcYrSwf3DZtMRa1ohcjWfHZyyuzduqYAUNkjdBJ5NCzs8ZDU8jsfRmLCvcMz6zhGB",
  "key12": "5E3n7tC5wMWSWAWwA1xL66qE5644ChwnaLejM2NEc5kcMm5MTHaZ1hJKesq4ryAaQwMFSB6dEAVSC5nYmzBj32BU",
  "key13": "5NLo1w4ANCDVmCzBNk4St12o5bK1HX5tnTzdakYofcHdMGycAybUE8v63N4gWT3s8pqVu96YvFX7YzpDkKB1HDX5",
  "key14": "srrDNx4oyhSRoLpto6JD4PNmBCDkECWgHBWBFKbbf6PbVX8CKqvnGCtnCXs4e5FQP9gHKgGhkGQry9Gc9qT8fkv",
  "key15": "5EaydJrn6e59AQwrRzsWdUEjWeoFjazvLDM9M4e9AvDvDmtHEz9k2VmwjdaSKps7bXvytnxr7CR4qnVgonikUcH1",
  "key16": "3vt9Y245ftxmgk7iwa36RrDtei78dik1miY8bATmzjMQVmuz1Q1JqDVCrKbohg8Dnb5URZSw5zgGahg1PbJk986E",
  "key17": "vmKkAtz2GpXepgZXft13EQZPGHV4s1DtoGhYwWECDudrxHtLPfC11UJijqiiSUysEnaVY7qvtWyVaygcmLgvDbL",
  "key18": "5hUBg4QdFPBRy3ifbQTc1e8M9EbT8EhJuceByvyPa3o2EVvMBfqVnfyHMNGF7JKrqCM5QQiJEz6vAtSJjFRLQrLF",
  "key19": "5wW23JBymcekDT5Agr4drnaR7Qid2QERX3fgJD2b3SgkitbsypN5qD9GzanGoKCypDH5ugeKoyc1XkSpW5db9j6m",
  "key20": "5kJs5z6EtLiZ9zBsX338ZJ9U6bmc43KDP3HyGX4n7ktnXLjjQFocyM5zX4YhgtTyvof5c7Cmz32rVPgKeiCwTt4v",
  "key21": "2ZiVjBbXnwa5JJNwje6ka7ZSwyqzPzroqJX2h7ZNpTCNmNwb28v4ZBLUUuLMtrcSKxsKBx1SNqkKqa9gtg7Z34K1",
  "key22": "Xkc9ajAP9FLwXrpoZ8qNjJThGXMmqNurZv51jmhpq91VnDCfhFr5SchbMoJxFSDKbJgmGFSGbWL2bP6WAAugVe3",
  "key23": "3CzLYEY4Nc8HsaZwLTG6VWt4pBH6MDHShV9WbhRNqfQSWuV5XZB8bviM9aCh7xqTAq1A4kJHjLvdnm6x9BocFRn5",
  "key24": "41AQQ5NnZn3Wt9RJwQxg7yCsS662XnhHmd9PkYBXTfo3EYKMTQxr1PkjKLJwmW8aNZ9KP5pYV2MkLDvfkfFNZmix",
  "key25": "2ieLSr9UB8eky8pqHBiZHYquMJ39StRQmiU8muZDJZYsGBBSgQn5QDBPyUahdPHxgXcWv4DucdFRUF4wEDbpZAbW",
  "key26": "5jZ44yXYLhB9a8SSMGPh2XjFfPUnHJXyji3hMPGVaTvFhS8c2TBwbde9Pxg2geQUcGiAXQr81iGLL7GgyCptuhcT",
  "key27": "3U3vRnzX26Sgt8x8qzmPecgUgTpnbkT5ydZs5ednB6vVDB65LfVxsGLh27UfGcbMzhdL7JqGaykfJYfgXjqYs6Fe",
  "key28": "3mPECtg1ctcxfCBQp9kJSdHbT2jri2a94PstzQdSQaeb3e2hp5VZL5MyDxCQJFtmT9vFdKsFaxJP9Yp1NCqU6CfT",
  "key29": "359TzSJygrwERAyfqLFpsk1A54ZYecCs1ooAbxaCDkorkYVk2SaVkL9P16LF1EGgMesM8QhuhmShrcT3abX4HHsW",
  "key30": "XEfzLS9WCSMC1qiHzZM74Wj5hauWKWQ9B1c9rAiNd7TP3uFtzWSeCkWFXKM3E8iKLA2P2m2XoPQxUpzMFLRpYox",
  "key31": "3Xw1Kj5AFQJrA2XZ49nSFuDXDJ64pFEWjftg9tS4mJiiM9iHNWSHbvTNNb5JJ2JZiZN3YC5bxqhj4CmBXwt1hhgT",
  "key32": "5kdMYXxDovJEgYdxnCJFm6admRzWZEL1Luro5vNsep9SS8zv1vF4R5mxUNoYdjEefKiMiB7cW7TsJ7PpCHKNcw61",
  "key33": "2xmYhCYrjBpCZShezQnBYzsGdgmNr6EishHNvjgjwGgp1zzjdv3SxFDZoyxmxTYDFA7kRV6T4BqUYg73Gogmf9RL",
  "key34": "3WACUp4bE8ZNiKct8jbPaR3Aw7UmeqerqwnwXR6HsryL21SEsnDKtktnL5fX77ia8S51dtFhYZNFsbF9VED7GfaC",
  "key35": "5sCCUrcJb6pAdJAj3af11pqhLHgNeeAH5xnjAVwTRAeDF4UvHoDjaA39mraxg51Hf2fLqbW2S2prNaQJ3ykMobGG",
  "key36": "4cLiDePemyCs1Jw1JWosKRq6AA7BRSvutBmaQQR2vxNTFn9LPvRc26V7MFCrzxdmG131eq1keHraHA3dLE83P6y6",
  "key37": "2noqpWC66YtUGhdKoCULbjVC29PMVHBpzGZcqgEwddZWanVLmJpB1Lrgo5CLAYdKfNgPob2RbzQKvGxhgTkA6JNN",
  "key38": "5s9oYSyzfZ69HRd639ZwhDskw4prn1ZGGhh6KETMK17pdnkmjniymecVZ24HSMaRQdfYCmY7BLg8W69H2cXvX2Sk",
  "key39": "9LqTp7eJ1zaDij8KFkp21j3nyXZjVG1nJULRtydpfM8qYj29uq8Ww1jerUhFzkUL8o64aB5BAJG1eJX3GL25q79",
  "key40": "6vay17CW9XoTsC5dGNRxGm6CZmEN4K5ZyvUw17Lvw3gubFyps8Cn8pcPtCW9vNRxoJdcEU7icXcUeQSkQL4TAyL",
  "key41": "HchDjkg1J5ms8vfxAetDLC5mJAZszjGxwgPe8YjbDQzK1jHQ8w4RTKvt3binjtdBub9CaNZBC7Lp1YKh7Z4LdZz",
  "key42": "2TDoGX7Yjb2N2dYseyHMSb3yY9AyUHoMhxGymtLj154GdBseGppV9MxzrGBrDKJ3hRthKvUYDRcuJraE7Howpvnr",
  "key43": "5hnWHoXeHR7VZLKJ3cixzAniQN61eBiWqFvwKw2Kk7Hzt1HouWCATXuy8csuCSXosp12vdYmjN9aert2qyAsPWfk",
  "key44": "5ecsNaS5fx7pzaAx2WQgNngxKVCkYG5hKXmNNF32HyBFG9zT5Y2ZfR3toE8ZcYWc2Bm757FJiaNAV6YqX9KHQwLx",
  "key45": "5wn1f4MJP1sSeV4xJCsM8Vjgn5gYMo18kBxCmk3ui2cB7jFMFRZ2XjWpwRnX9K5cPnM1V3pRNSvWts2BnVvZjnjf",
  "key46": "4c8Ti8zB4Ykvm2QCKCYBWm6ugS4UQzWmuptCcWCePqKZFd7cVG17F7uuBJhZYU8hBAcGutpcfRtQZF8hhQxtgGMq"
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
