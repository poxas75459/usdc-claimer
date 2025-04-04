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
    "gho2wWQrVZ4cJtw9GtFyVBz6J2BwrkL64pj5u314b5ppFJrMndLnqexpn5x8kZVZonCVjxuRD6xdWP4kzfaQSZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txWEXd9b2ikQbyW4s3WDxxx9trMStbEJQo9heAGvcFXZAj4oBww9UMvtz8nghrZneZt9DLyv969ENuuEtyEZGTn",
  "key1": "2MuEibmFTYa895dBMBqxSgkQ9KUSaefFUg7XYYad4tNtTGKrr18dkuzMkADDpbpAemKt2D7uu5hmRZdiGgs1TgqE",
  "key2": "4NfA7TCnuhe3szBp8e19akuK8DGJX3GAteDLF2fMpg7uPqt6Pf4MfHJwFKBbivc3U1yU4VsyHkNeVKTA9c7RP963",
  "key3": "4w5JCz2odHxgSWHEKnKLZKVqYvZFu5AV6g1MWRGnd3qJfLy5RwWZdt5Loh3smbnX7YVo2HoMeSMZsP3ymr6eTXEg",
  "key4": "4a88NLnCiNPZVXnCvAgRdX565TDQD66TRXAnLHTvpX76JTDruiwrnypqPDxH4LfcxA51CJ9n1vbpSzCdVj82jJC7",
  "key5": "3hKYHD1GoEy9rcLu6PugGzXuiuznktz7phCJSFWaCL2Cfxd3JFbQXfhTrbT6ZUF9rAhYAvbPGNkjqNsC15Pij8AY",
  "key6": "5Dqg35C4t4v9YJowVZQUU3T4iL7wLJzPdhwheFCdfiuLGZRisAFUUTAJ3utDeswWv8nxkdQ4duEue3MtAiir5xvw",
  "key7": "PyRQScmFFNBb122MEtoRpVEkezbUXm9Nn7iAvcrRLBHmcLRkczJfCM5XQsoaUsVYwU5MwxdCq6v9o5AyZBfRe5U",
  "key8": "2hUsUzyepU7GQYfDTEdW7cLUf2nP3L7TGuhjAnGjjFQxtFDfKZt8xQXKQj226hxJwZqJMPhwz4WG4SATyZy6cmJc",
  "key9": "4mg4EcZ5Gdh8nPASJi4AhMsMrWkm7MvuyvcWZ9TGTNs9qAwTMR2ELUrLbJ6T7Nn95hJ9YAJE4SaMJP11p9onSyW5",
  "key10": "2mzsDb7RKU26pV1wsopnwecvbFzUps2ezikFAJRCFmphkAJfGz8Vf6VM9xSbQndaYrUEaDctaStMPW3ERG92AagR",
  "key11": "VZswnzrF7feA9Emqt4XSEtpCPRfoFy7MsbkkqbT8dHxSAs9CKXc4qtooABHGMsgdsRNszEW953WywPauZXPDXrP",
  "key12": "5c4VUPtughsNamZr8XiEXxfJY5kDUrjBb7iWtFXhdZuhdJ6ZT9Vji2o2aRCEJJ8psKk2qwkDzCYvCQzoLH5PmcXm",
  "key13": "4mJ8Nn9tMYaPr9nKTotCBjC9VC93Sf8hg8YgdhrHSJqcSKKdGBUziuav1jw6NhWV8jfb8nx9z9VQM9PybzGGhfaL",
  "key14": "4nq2QojMsoQJFvE9Cd1VRTACDjuSfdpUbcfTti9JZ3rmn2QAR8fu2j1h7qBTqZc5FzT1jzhrRND9dufh2UFHHBzk",
  "key15": "zpjQ8Mj7UrvCZ9UUUgQh5ghXn15GtQ9XiFVtysbw1FYQwDz8WPvwTzXZdLqT3UB2vUdzgV1nWrXkt9U3PpEGHYh",
  "key16": "25Av7BpzyjQQapPqLLJ2YzH4PaErY8YogGmrzHnLbrZ2TxHoQ23dDEWojGnvWLXqDDvvczfq9iCjUFVC9rbmjzVi",
  "key17": "2vjmL3SX6KuHB3p3HY5WTXX4YU2Px4H5pKk4eZisNmGHaCuTgvngCX8g8r7pyUf1n1n73fh375MtPoGkbyvfBrE3",
  "key18": "43oHPyxomm6WFdY2era2tay8gUUMFgBAyXnW63Uje3VZpc29o79d5ogQEQZRaCNyAea72uDpVq1wJhebbmCGBi8i",
  "key19": "2JtK6hy84DWvftqmZUWpEHt6wJKvj3zBoQ42yQsaKQba9FFEdT1XXPGBLWSez5qQRVicwW7B7Aa3p3staFFJCD4w",
  "key20": "5Xp2ifjP115VHXLisMupnVoaYTXcmRyoA6wbPocyYbFPS9QSrZgG1cznf83ehSMgNukL6UWGPxHwz39QwtR95m9D",
  "key21": "2fRFe5y3UtSMAZgbujT3K8eYCykiRMt96dWjxkCMC6wtrMsh8dZ9vvdRdTdd3enwRYZ4256fewBzH64DMyZ21JW5",
  "key22": "48t1QGMQ1x2nhN9Ay2AWAyoZnXGPKPyPzA8Uxc1vosn42J6MuygVeaooybHr9FvXKny3oHhu7TNMCKfKw92DPKaH",
  "key23": "4tiCpAa23zV4S6Z3WxymXThsbGYo4VzRERtBuGoNNuZ2TKN1HdEbrAMpDVhoocP1y9VHFDjkgGRKmhNXadGzLmvR",
  "key24": "2iSK1Nmd5GEYA2u2eKfi6uhPrLhH5wyM6Ek8NAemChE6ixcA2LsQDvqsupQu6p9i6rDiaJ81zazS6tBu6eSNd6MX",
  "key25": "4wbBwP3xrsQB5zKVrxUqPQKDujTRQvN3okE2Jn6Lmth3RiAX8diZ5tYLLzU8ZG2n1zu4h9t5djpb1CiRQepe1XES",
  "key26": "4ayrkBmRdipfe8EPi1XJiaM5RDzkiGHCq2jbge54yPajHXBj2dRxe9Xms5yM4rkLTXFRr9sQYYWgEkN3zJBF6vuG",
  "key27": "4br9PpGFLBh5QYVdDQ4PbnD5KVKEj7BfShhkuJTHyZENokmdAP4UuZi9nMW8R6t8DT4FsWHYEEw1b7Twe8Nqqsab",
  "key28": "2dMCXtymte9bVbV4JdendV1vprqhKytDmCLPSEws1sUwivGLXme9dqQmK8DpFbwu4TkGPhd788zvMibnh72zx1Qf",
  "key29": "5wNQ8VbniL5wFYx61HG3fvYN35GdsNbnY5xQbMs9qXhxtnqEgsGi4EaygShSdWYrQJYPwqgFfuwydNiRUrJM34ja",
  "key30": "4Et4hgT5JD9GDHebBt9qnXZ1fKeFmagxGTEQ8FrTTA4pJq8taUPtcWMmGGfuKJWkCLaEhgcwKJ1sRdVncr8n4oGS",
  "key31": "9bkbX4mTey7SEmAmZMY8JHZpyBoVngUpvQCpnz775Usa17pFmGPuFBt4VkLrSfNcfFZX8hkjt64nhfKvwp5yveD",
  "key32": "2oVasCjtA2wq2SBgHYUncdXwwegFkKeUFvsyrDqjBrYZWoM7PDFdandXcstAMmDUeCrpFETncC8LWfv7PCutrH8z",
  "key33": "zo8fRFXFd3cBR337Kvmv5oJVopPwscYVph73aXxGLDurBNyysz5eMg3jgrrR1qNQiPqW2ye6mVE2PYrz5HGLi1g",
  "key34": "2aG5vdmcsYSvp9tnYLwh8LAurjr6z7xAnafQvXJrLgKaVPBrJXit4PaoB2gq4mqia4A2TbWodNXxbBuEYmJKGefk",
  "key35": "3AjdoiEfqtV5daac3iaHhmGNXdfL9WSPaUxrW8xbJe31QDmZELQuysRs9DKN351p3MBJgQkmYrbhmVv497FkKnJ1",
  "key36": "3uBdkP8i92Hg1pRB3svhJ269vKqBwvs6648v6HLCe7hF7oL6oEWyqUaqkF7fxYWwahdNdKDJsCLB7gMgHrMBHrU5",
  "key37": "5qWmoR127ZZGzgQnQDtTrK7YqRrKY79UC4HFdSomt4XDQpQYXSJCZQQzr3WQjhWPRbA8rUNbms8L6YNGNPw6Cbb3",
  "key38": "2dcKRVh7ohEBKqMKYKvrti7e6caHcwJiPhMvL4QRsDUJ78GqVQtBVX311fuiueewxbS7ct7KGrivBCg8ng4NNbxc",
  "key39": "4UnFQYttsER3hmGw7Jv9EG3BNdW7uTxNwyZQSj2SEi9H7oFsd5fv1WZsQ4oL2r36S8yonmtbn9Bxfrobp93itPi2",
  "key40": "RNyoiqaWSyq8HrbUPEWejvmCvgP4PTgAbdsAaGs71hm5eVCUVKKiLCs8JrsWb45qXW3TozQkMapVpJ6HvmZaDUU",
  "key41": "AMv19EHi48e16YKkgHS5tiSBP256w2PTcPTLnPxfTUHqrzC3NjNnTJ6trsARRiSbRe3H1CuQUQz8j4hYUdbYR8Z",
  "key42": "4QaeCF7YNxJ6NoxdBiRFHGujvs6XZCNJSea1jxe4yRy4TbcFg8M7SsKRi7U8fH5YVy9BUKqXG5Wx1aCLVeSz573c",
  "key43": "57VV7EP8acHjP84bP6GvxUgFWpai4bLN2zVzS8i17pafyBWMKAoT9QQZZMeEWYc7dkxmwmvujbyKyqb6xE3gH53b",
  "key44": "128hqj7ctXHE9G68uHrctjyYvsFPxqGMpYHKDoRPocBDqrsRn1yNRGNKrKDUWi1KYk5rzNoGSRChFDUD4R4m1HLP",
  "key45": "5v3Ra4Kd4yGHzkynVRU818vMCvhD1RDVqs9RZWtWhJvSKxBvXoCkdQ7f63YwKW6Haxu3TDdb9Ata8HtCNVAKGuVh",
  "key46": "52aX3QPAReQX83EtKHCRdwX2zJosXiRK8bzGVCM21fPso4MrX1EC3Vdn8cyKmWHnKHqwiDmP6PM2stbGhPyQzqrz"
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
