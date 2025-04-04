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
    "2cSPfFS1weEcaUjaiKvF1QYTqzraPYoxXcXf9vCTeaW6f7DuAfCPqeDhhBcvkKm4EuswokWoLZrag3kKFxmvqpTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdKMQp4ZGhijGPNdCjxbRrpFE89DsYvBu6ph1dnpd5XPWCU6PPd94sREvDPHvy9wngtnzK7WbtMpyaFT1PUmK7b",
  "key1": "4XGFay8tQAif7sYAhVVD8yQwXuacy58QWz41rtF7w9tUqSB4mKsbwD9etUsyWC5pTKQQ4sDjZj8ECVoMeVPtouZH",
  "key2": "4VFVbZrFg5A99mq6yC4MrJ8eJ5QxSZjQLyXvCKKfSZf48Ev4DMDwwudyMSA4vBjDVqVg43LGHuQw4jMkVNNvdXsu",
  "key3": "5HPVCEQZhBDrvzGBo8JByew1FhBeAyrnVLBDo3VLgxuRbxjjGEZf8CLRwZGvRoV1HeZpc3UPZBEVohh13kSyvU4J",
  "key4": "2nwCr4YSRWECfjYhYVLunoVNJ6akfAYoQNMpXLa5QdSCtYBXQniBB84aqmRN7Wx2xZoa1wQp3cyVatwB33s61Es3",
  "key5": "5U9pYCLxby5A2JjQJDNGmQ1jWFAkK5A1CtWVz6KR45NEVqPpeX9UE35fRJWViFtWNkgLGGQdAdv4yiqVLA9oNYWT",
  "key6": "3WUvBoW4TMrLuHF8xooKPc1e9aZfxErDHFxuVYwCggQ5tgcSfAMygCdd5hsBqFcNkqxUU14LL6P3pTP225UT5tVv",
  "key7": "GV2yDkd8g2GMFj4D4NrgK5gcwXxNYQLekh9HuVz1yGyjhRQgNe6e7rsmdDVN7UrvveqZ1AH2Poic5wU4pxUE2Zs",
  "key8": "4P7KzoK616SZRZyzkpivai9DQFEfWNbkxVhxmRhyNoMmDv39S1Tz6zKDGXsYvNiksYdJhoVzRpWeGiz7GZXLWfnk",
  "key9": "4v4GtCir8fhM4btQtZi2N9Gn2KoWU1R395Ar7945d8pA2k4ucH6yevW8bV28dcMUmYvJxUvt4qcRJ6uqYnv6iS3j",
  "key10": "5whaLAWcDXqZTRZm7CEESnQGQNKrCSDTDmFT4MZjyegPq2DwZn7eXVTGQT2mP8NBCCeLqg1SeDH9i9MQVjLqRscf",
  "key11": "61XP2DX1dx7HcP2Ha6K76osnn94fVfoxb7P2CQwz8QERPNkpXSMUr1YcdNEB1fB5st4siCWFUVfjCWefRYkE9Aso",
  "key12": "4Go8J9gFyVTkpzdcYdZZJGwCcyffvCcDxPRB3kE63BtTTn5YbBR3NP664xURXCoiPtr8uYh4DjtyqMtV27R5u5T7",
  "key13": "3K5HVZo4XDYDJjGrSeGTqcB79vnirJsAo4c5b8h4ZQxE1q5aJ8cco7GjD3mmeVx2eedFAc5ug9XYugs8BQ1JtPLg",
  "key14": "5uEnBKZv9a714DaKEa377rNzjFC3H5SqtPXmYRKMCuGbAtixyRZXsFsw39ahPdUrG58g8guqvSKyuW8wPTesyWZb",
  "key15": "4S5iDYT46DHDyyWrRUGRF5q8v2EBFhgnMLmcErmmyvU7UQagtctpJvru9GsnFQPcjkYoQJA8aKSVSemjnrNSftvA",
  "key16": "4CH7V6cCJetgT1pktMvu4eKBc9iA8V991EznT67LPsBs9pSHdRoLmNG4c7cgwHqCia5P9meNwraLrRLqc3ARFmPD",
  "key17": "JBRXP6fqTfXGk1BfAK5HWDZbZhdVTMiwauoCx7tSHazRWLSSPviAzGnDAG1Yrp5nGm4Qn9VGjTTLsxCdQgLeYxg",
  "key18": "2m4LSzTMvL3aYEVVsNzx4gARJHkLQtgegapfkWNAGxc6SZhFUScRmF2pe1eQ1KCBWEzM7F3SZ3aeCrC4yTMtLzFE",
  "key19": "4ZnhivsEDjbTjjbejHBfDwYKc18oSXR6KcxWrwSuwRXgRn8JuLJsu1uH8ch8FSH2Gb9kf4J4iWJDdoTRrHVhPjE5",
  "key20": "4uqesT7JQWB1vKFtC3rZp4YhgoC7ta7hae5vpn93C7cjejsB5iaZH4S9Vszz19SPdjey7fVHEenMEszJdU5raNk9",
  "key21": "5WiwR2J4vYE8xXdJKqCDnn3a7hbHsUGs2BRRy48JWEjBMCM8Z5U4nRDK5J3axPAK2Hp9Y1oFcYVaTnePsT64TQzf",
  "key22": "5AA6p9MqVfgsNw2rVM4x6mTWnZFQUXVzQjHhrVUBxLLvjiemz5syNiHk54mZBnqpniMJkrkbuFYMd9bpoVin6Ctt",
  "key23": "5ZL7ycQtpCK9da7HgqXqp1DWRgczNdKoLrX7cbC6x2D9J6V292TZuW5mb9Q9kqjNzS6tBcr2SafWYLYTWRCufdSd",
  "key24": "2BLARpACJyTDbY5yovRei5ap62kTr8aUPjV4mMJi1UewhD1d3B3UiuZUVU7snJkhdwNsKcogcGK8r16TXKziETF",
  "key25": "RzjuqdV66gwc9egksAtFuL4j7xbxxqf2HWMqVowkrRjWPERD2spFbeeyfu6yM5rVnb2ynX9ZUryxhCwi7aM8LkJ",
  "key26": "3bcpQUbGvDtuCbWY1GsbkDHbnBDNgoMrncZJXPPXohqcRW1hjyY8SLaNrgLuK3jGT3mKs3TKsBZFpb8y5wJo2x7u",
  "key27": "5jYNC3hKdcAbn6ti3gqbFVP58NvZFnP71uzHxt1x1uzPzK8gF1A37op17jArP9VA6ZNaizTSSYLfyexjTf6uq3Vh",
  "key28": "3uY4ZArg8DnGdnWxXDopFcHMCGXpiURNtz5gqyJp2YpX1Ep8vaUknLDTCQaxJMVcBSEDMpeuRzLBfmZCwDyxfuR9",
  "key29": "2zZkHwp75kpcJy6mcv9nfyFcUeH1T4Ufvskg3s9PxWrhaokFAJrJbyHtagh6B5iCF9zeEF5y4prkCQK6wZJRhYFS",
  "key30": "4HEYmFgm2FLXXgPvHoUckg3YbwwSC1e9PboQKjCZF4Q4EzoQevhq2RjZkXb4HhksSQqVeMM4zq5cqSjkzNivphhM",
  "key31": "4vJ7orHN6JBaLY8yMWYwy47zdHwiWzB8emcjnkbKJimwU4bBhyKvdyGqNQSXnGxr3HfBGCS2sMQtvqFY1MPrPpFW",
  "key32": "2Z5UNGSwokJkLjmaj2ofU8PcCmLe5M6tfZ2VFcmLHYWTJMrFpRzW8V1sXijjRQLaYyCxAy9paw4yYEBK4XM7neEk",
  "key33": "54axxxFcGhXGNiWsgu2fZW6GJEXYNQe2pccQhFHkQwNwJPsK4j39q1SmwQqhmyCyBZtMjLjoRMvqEUha9RZVdroV",
  "key34": "49HoGqGR9CezzznpRuCxhcNSJAq5YBcaLJfrSfBQ7DWUS6WGNTn7u51zzC53vxQPxgyWtCCgL7AMhSPcpc4ioVX9",
  "key35": "5AJUCoovQg6szDCXLCwLPkcGZDChYtkbRk1TcVHN7C2k1qbZ3hi5KbyMHggdN7c89Sy6AjhNN9u9z8tg6TyiJHhk",
  "key36": "2UKBedsAcCC1FmSzU7QC7zGAX1zdaWzmGPSrhTVdGo19YGjCQ9Kxm96CgpGcKZWq6TuiAmpLRHmAtGBfyTq78V4W",
  "key37": "piE9hBjAT2S1my8oCA6Ms3aQYbJAVQmuhnZBrtdQrShyNqQWqgvfTxKCSdAz31VZ6PoRBUoGkHT9N38HGpPn9XE",
  "key38": "2nmKnJHLMDegrjiwVvU9hJLH3aPy4VFq2hijewDhekQ95r3mv7Gk5iuoAHhDA6QGpGRVsEYUYbnca6w3q8D8j3VB",
  "key39": "2a72pV8GTgVDqFbgcEhNspFV3xFQMqo9RzX2tbrYAeF9zaUEAfwGqoLDdd7V6dkDTshdYdcYTSY5a9aeMqfis9hr",
  "key40": "38uyb2pu9b7BVrh4Fbw4V4fS6ckVmaDRnDRsDw6vVX2cKaG46r7Vcy8N3q7icFPFhd6TcEj6jmsY5a3oNq2oWhTt",
  "key41": "2yq6rLC9AK3WRiXJojpPKE9j4QbQh4sw8JAqDupLSa37QfL64bCnMzX13p9WfVo6Rtr75k8rtMjiJfDM3gSJpYno",
  "key42": "3EHx3US2bwQkq1U2LfeKKjAcPSevJAyLkQphxvox24SYEf4x3jTzC7wijwKUgB7wsUY96htBmzpzL4byeZSwfqT4",
  "key43": "4bUhLmGbLCUZrLMzxWkMKMky9CK5yGmWGUhJt3iZT84cr4cLVCMREGtGvm5WgtW9sb3SJgo1z8XKumjakjsNxTtZ",
  "key44": "59QKczPdsjaUVvXE3C2xpkG2Wd4ZvuVu9ymqS1cbCVSjz79Kd9s6fiRXuxCJ3Ek3U8TypAZkpAPDoPWQ5wz2ZnCt",
  "key45": "FSEzsJ6EbgiyKQjxRedGGPhPtCSGqwirSBQMpXqdJoswFDJJH8QqkJFr8SKhLfmh4Csu9CG3Ka5vwqWwaCBHU3j",
  "key46": "4UK4c9tYhqfFcVChjoYNzqwNo2vFWMdHAX4PxAVLMvZHXtbd2SWVh6bdw7fKYp2QH1f1prJDmYNMVSa6zhx3oPwt"
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
