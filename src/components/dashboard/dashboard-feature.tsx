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
    "2LUBaB6qC9mzKfa46R5VencWPDo8ConfbfJUPk41CEpejqnGVJgBVQ5J7xXSjaW64LCpsmhDPMs9nPPCygd9tVa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJAx9cd1oF498VUW6Bmcg7ceFsSWgRWJmwh9GrK8Y3ngAZL5WY4SMcmUHhw2JZPAzPJBTxxZWyWefGQLNWypbx1",
  "key1": "gks63K3CS2dohhG2EGQ5berBDgdjoWytxbyV2jhjALiM4PAYhGiSjgBdfJQEdLoBu64oeyAxxQjoJNDauDWM55u",
  "key2": "5ANaviFnLJhNA4rbmV7kBC23XiHBUqGQ6D2qbaexxnSNhzoMJayf7dbW3PS6iMqBpABLthpqiprZL6X99xYtGDVa",
  "key3": "gGvepiBhQkVUY2Ti3q8AANBBDe4Er1GhV9nh4SfFVSqozm4iWn6Mna57NT3yBgrceM9JZGEPPrVuy2y2oUNkgw4",
  "key4": "2Y6LPALiEPJ5uosh78zKUVMSwSBjnSbhZuqDs9H3A2vQPmpEoFGXBfvj9RZjSBwn1GS3YLM1ymrcqh4JLwSyMMG6",
  "key5": "5HbcYUjXgHEu9adgeehn3FDyv4s2fBpF3884foy8AhfzDWgfsyTkxNqfbC9cpk2RtWKHEihbSWwASRgba59qvPNi",
  "key6": "2m4nNzM3stfvj7YecXekSsYFPgtz7M8iBbcxvRyqZ5Q77Efg4hW5jeS3neDVJ2eufwhZnDtfiRKR8o8NFBBggHzV",
  "key7": "ksJ1fBXucYQwxZLvAG87DzVTGQn4ypav5rHH6HgWJWGEhXUCYrB5T6Q8Ko8z5kAGnQmpV1UZy2kJJb2xBQkpf1H",
  "key8": "4HVxF9eQBBHQMFP4mBhvjPeYCc2vDpxpEWDjCihbghboZ6ivzKcxcddCjfXACbUHHwfZLmCGoSqaxJxSkfbpiBYY",
  "key9": "2P96YWfeJqwNoHpXoC99TcjaihzgU7VPusYJFJ4F1GMFLY87ZcF47bpjV6mLRoF2oEhteVisBUDkd2YgdbwFryie",
  "key10": "5cgEVipYMQjnCqw1amRdnNA6Zr3BhhxfWyJb5edrJk1zuJxiERQSQCghvHD4VZPzvspL7AZVJDQ7u46SADJ1VTLK",
  "key11": "3DvyQUiEB2nspokBUMYRtMnXLAiDeHVXknMqcTimkw9WvppHELCoDSvPyAdFUV2NKJFScVxpvvrxPArVJz7vxk8x",
  "key12": "YUz3dnj8kF7xQ6iwr9NVuRKhyh3rpZUx9Xe6ijhr2yUV4HaeZQ4Tv67E3mDRStbLULpaxF4VLWRCiGk6DQ7MSHb",
  "key13": "51Lzn4sQfm9ah1DeE2zVzEQ7StcctXifNfYeFfHXRLUxi8t7ErhzmK2YrDLXzBw4fPKmFdw1cb6KJLKMCLv7n74z",
  "key14": "55waAnTQzXmRFcNyiDvhe1YKH31bVbn1eSr3oYW4ZUj3DyHYstetFppsBHF6TB8S3aAxMdLAveAYULMqw4CQc7sR",
  "key15": "2HkmcSTc339p4jUs2geDYQUAFBzwYhbXsHAqwL1NjPRJYYZau9aA5ymewhAVXxwkZLgjxbQVVVkUiVrQNf3xefxe",
  "key16": "duQ3rmCtQofVoY9w1CvooRXLW2VruH7NHC2N9qav8LM8eibkq8vPHRfSLYV9AdkfcsqDvZt16CQjFA5izbQT8L6",
  "key17": "22gi71HtvjPCwW8Jq8pedZdgcbvqkQBvy1pS4w1V7uwiz92sByXR2sTUaCyvM3Axeoe94B2NdQSmmSw1pjfQamgS",
  "key18": "W2z5Y2Ewpuq2zSBHFk7wziCM9ZdxjyTkHR1RHSHnjxiygXTGaTiEhRfAjG8dzwvKdAcLGRGGBsewd5nMu1mgdKx",
  "key19": "4M3ziGCfZWd2e8MJNcDdNoXJcugBUgRD7o7Nj4yhw9Z6a3NJZsEow4ZtRc1Lear3YJseKXnwxsqvUfsdnwuVKbct",
  "key20": "u8UCcEYokhY4KmmNkyzKggqKAnUHGTQCLpGzkoJEq7ANeDbrHaWpLeEFr8XAQ6pmuCjvHZJpnvrSL7LzyHWkoTF",
  "key21": "4nPFJoGtmY94RezLipnCeUMzn6Kwdr9N4pMkpRM5eFWz3G9zpBjwYncZekuXQ5PwQHDygYu9ykEWoVZGXWJZdcta",
  "key22": "w41kRNkWpWgzwct3bg9uBn2qVDr9Jo1GJrVo8GF8JFNEVPnzWkpvZGemPsSKDCmkSa4QUf27K7ojLQCbkhfRrwJ",
  "key23": "5afkN7PFTPjYMy62hqQ78PHh5TjQ8xVKh86NDLBNnPiULrme4RnX3Q8G2ePiDLebzig5B3Pik1ZL4Uccqrj2JCqs",
  "key24": "4FX6mGSPdSFGSPDT9q5jTrpfaWm14ZnVJFXcE9oHptfV7q1xypkrC2tyqnchrE6cJ9q3gRYs8dxxzXv1H255hnVj",
  "key25": "4Q1R3ZnXhonnENuRLtt3bg55rHpdFYSwngfN3VVdrETKJWSQMNWZGxDoMFKkX926PkvuuRVEKnDoYDsgCkm6nqKj",
  "key26": "4icvDZCqHV2fmMtxm5mBBbwVGsovww64CF8xbdZbG3hk1uHwhFgFpM6T2NvxTtxuYk9Vn5rRAgLtdHGMzjXLQGJ4",
  "key27": "34hpJYpuUpNSsA74RS8ZBtnvvkEcmXRPBfhotrAWrUEwzy41QCjtAeWvsWivMCvgmDeCFsFD8WgFsBiF2FQTc6pT",
  "key28": "28LzRoZsjoSX1hiscX5MBxX5GiRHf6pZxSWiyRwLUHA6sQQwJ45R6sSb2gkD3bsJjAWy2JuUhvHB9jETboTTCuAN",
  "key29": "5KGoWPYBnFt4tTqk5NqHh82yQEv97wwm994kXmX97Y1xxfnz7SUSvRuBN1R7m9NQapiHumqrVradG7yBGjnrkVfP",
  "key30": "2mCkxs72Buk5AvJDKdnJGLroddFeaM8KUgEg46TBNzAAqbKb5qQuEpF2eySdN4BPzVNYZjxvWRiAwezq9yGyWy5j",
  "key31": "2WRvfTFQPcbG5G6EEYybwwgSbR3VKG3e9tUqED6hxNTCTVJ2QoYei9ezZeVJwDmEhnkzRaZ8FgQWgKuji7w1jFTG",
  "key32": "2wbSXD1hd2ASSX74qWgfGcFNVHJh5VxAfCMKGotuET2EL9Dqa9qyh9PHxE5b4pT6VmNWjJwanXRfDNh4xPLmgnxC",
  "key33": "2FZG8YtzthYxpWoau4KzEhnG6CfpxiiwrvTveoMYG8Hb2tyHoBJ5uNQDviZqRYYN3CnJnsm61YKp9NaPqBsyATVK",
  "key34": "3SJxMnzRYT6evDnYpGCQtY6je9NN3HwXLAQPEUmt4vxGRY8r4SdnCjjjcTDUxkwHX7ArktytaDH6h1MrsndKhEkp",
  "key35": "22Fk3ihZqZbxH9nQUdQBogdyQ8hnkyaD3zzVuaXVyS3qAzXKFg5MhGdnngAhNzzWLK9XSMzbt53CSADVdd5qHgEp",
  "key36": "4pcoU4b97fdpQ66V1tUhJDWY3RAXyicj1UPvfBbhwpQKqoPsfWWc8w4JkoWaPiCHG4Zi27tHvcNCkrqrBBqcbYpx",
  "key37": "4WKwAW5shsnN3Mikd8bVcqzGHXLcmw7KxchEASCBBqVG893bennVSYCNj4h8T9cGtjMsr8NvN4JEb2C5HEU4bDYZ"
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
