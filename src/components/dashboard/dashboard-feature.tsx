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
    "5G4dptfZD5pWW7tfZLEZ9gigWJSa42P5oCNyVCSbcigd9fbaMAbo82UUsL7cLPmtAZhLovCJQCohzEAsu7Bx8bdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfhEYpAqkfzoFCGbTggYauQZAHb9PPoH6Wnrn6oV9ytHRLEKAjin4tpasJaP8ifYqGPdBFVDM9uWjZi6XeHW1J8",
  "key1": "29LnEXLsv41k2UDigX2LsPT4jMSKuDZd8zN5eP8WomN4TZaN8aa5j9HYYP9ggdsfGVVoSRZsn4CXwu4vubVAq7kr",
  "key2": "4T2BirmnEM7vs3s7iaJfUKZJqr7mdxP8xBs2syfbA6Xo886gJ8NdehxRuqG7BFNAj1F8KUS1mtTAWegPkXBS6XYp",
  "key3": "5aYcbHKt7YsJwqzuejzkPBcwxyn8dMfXP5rzCVrYNG9zVVCmtZBKTJqtSQvVfgHPux9p94MfacFtUbcTgNGQeMNN",
  "key4": "4sNXvpSUSEtQEohCosDhBTdJhcWGCBqhvKoBhSnQxRFaTifygye4XzsjJT82PLeuFyP2vPn2VCGXNJo7a6X7K5Ff",
  "key5": "5DjkEWYFaFgzN41yuPFqjDF8ENWKfWW9BXs1xRkXngczHCgpdGkS3xpgD4gGbmwDoLMqPFSQh7BgxakMPTtZy8Vp",
  "key6": "MtfpA2UCsb5nLzv9TzSvi8FodWqaiJ15pz3WPw1g8BQr5rrJ6g5YbC3CWaDyoFWJAR92SoBUaGxLiEcrwU7iMfB",
  "key7": "4KufpFsJGJ6CQUA1sZH8MNoAkmUKiYJvA95eWEn18Ss4DPygFHgtJ3WstrWKfHLEdRrAb2QB1qMWdetmtqpyk2he",
  "key8": "5Kk9uSCZ3B7UnnPCMWvUKA5dEF6d9h4pgMw1gcdUd6boVcRQcnxFTsfeUqf1YCF87m2DpuihjRhxW4YYBMRJWQ7j",
  "key9": "4YxCFhdq4D8QKd84t1QsScNmSVdRaniEcY8ZoaxMPW8SmBDaTtR48Qnf9p28BWjZoDsN6Lt1BwpaTyEfZoWoZbUs",
  "key10": "4AAJLPxfkjLex2MGSH372rmxnwrwQPaWeDpHuSxBegQzrjdkPbNSzCuRSBh62PUv7KCDkru2ZU395tpnXWPeEiTo",
  "key11": "3oK2gHaZmUbWwgxKEY4ugCsM2TE6V8zXfbgAuWLu7iKLSL8tcQWFpkNNAJBXqD3NqdARuCZBWLD82jkbGdjm3Lk7",
  "key12": "5ki8iFJoeLzUXwGRnVakN6wZu9TZnrAf1eNBcJuB83zrC3wokBzzCAY5eyksLotFVXAzY6w83Uc7DYCha4y6Uz66",
  "key13": "PPjzZsxGSc2FubmYtkuLnqaqdYq1PEmxgzaCWXc8bJkJk3Xf1h44JdMuVGhCnJ2LsY3ns2o1tJJC8ELXvGJs64y",
  "key14": "54uYWVvGoKyJJHMYWrbF8emANRxVic9BF9TKU9e4jLphPTFffyw539yAGJfmkBEKvTpHE74xRp71skbmTHBhUDZc",
  "key15": "5RWcTSnEzLpz4B36gqTLRRv6XnbBuix5vjjaBnsbwXLWaWWHtPLAFquo4jciRYa1HD7N9iEo6HCwxhVJUuQMhQRu",
  "key16": "62h1Ksisn3DrECV3hB4EXQ5ygsf4TXo36dagtHgpj7t4w4z6z1sSiJs2DUYjbZBgwNWNyyws5GFUCQnzmTNVGczw",
  "key17": "57HChzYmYAJ1C4p8CGY5VH3SmcgBSKG3oXh1DCqcUy8KVVvkP6m9NsxXArz6rF9aQ7htsKRW4C5h1JLNeDqJTubp",
  "key18": "Z4KuPvsL4PHx4vaPfKR18GAR9e8BacJQNpyTzKsexgTFUP4S6vUf3HwzsjBLZxJXNEa3Xv1GxvFYAAirRuGKnLf",
  "key19": "3jUXugT47AZqA1fW2noiszEwTQmhGyL3rKUwaufquLqHzqtKhWAA9kyXTid8CwZCAueVX31CPME5k7ZvfFMCVXrv",
  "key20": "uEY55jvQPY1vKwep5vEPGQaerejy1XWLSFvPSkejp9ZViDPtSfDYfzAUc7ihZrE3HPBuzmZH8rnBxwWQqwB5T15",
  "key21": "2M4cVroXmuUC69Ta8eVHHBUiauhLL9Qix56qTUAoQdzxJcKxMzZ5qqFixbvXtf1TFXjgHBRnxZYoxVHHrQ1HqHrC",
  "key22": "4eFWj4JrqoCYgTVfNg7TuZ6QcHWZoHk8XYzck1UkjnjNKnuGZWFt6C79Pnh8tdjiD4tk8pM3HsziVMF6r4LuLVQ1",
  "key23": "5n18HxGCKmDLHiHGCyaPoGh7A2jgyDNDmjiWVeL2WK6SiCFXSy8qEFzcJc38NghSFSqiSkDeX3Be7W5xUW2CdnkN",
  "key24": "4UDigzuM3ZhZXuKiCNErT9peg7yeizatVGoPdszH33nPZh5bFXxnrhSNSMAufQ4rPPprBdXnh3yHCD5BCcRJTNjD",
  "key25": "3PuYT88xsQ8pDMUrTJkc9R7ux2W8fRNsfGiHBpb4toAQN4TsPDGEvu1PYtyW6HdgjZwHTYZTjU4TAxg3t1KekBqy",
  "key26": "5iG85s7iDiizkaSKNDZbocXbke7vsxwFMAVreFjok7uYShErmd9ns2wAHYjcUVrYhAkHE7MH2LG8ojsLsJ8y7NUK",
  "key27": "hYCL3Movq3a2yUW9dKP1hLVHEnLCDcnwaL32h3AqmwNf9fYs5ijY1kgX64ZBgfg1bYUk5BgofVzu4MPaE6cdUJC",
  "key28": "363EsQz4rXaH9kho25z86HfuZTCXEMr6DNSm6BYrrw272KtgcGikWYsky33NqMSbMY8Ykidbx1H6KHewycyZ4yXW",
  "key29": "2gsvAZcofrpZRpfwrJehevTKdRqmbudHiFRjtAzyUaAPeuL6aAq1CBB8HDbJmTuEAYyiZXBsuhpBYzE4DyqkzLn8",
  "key30": "2DJApD7tzYCsmUwHTfvktkMkMeBwn3rrtnSpGpVBiis5YMduVoL9dnx3emt1MF5zSrQeMy3NiUdFZLtj12HqEn3v",
  "key31": "3Ut4b8EfrXSdtTfJDrCA4QwJ7M6Ss8idKKUJSHxFk1HQnLHQPgDstG7nCNs1LYsJuXmKarhmjJs2ymNUVqeKYwNT",
  "key32": "3bKQZpsgsx5aEndZfpk4qC4TFPXepN93PZ2NZYVEu1NSb57hzGy5Kt3mBHwhU5t9WGh15udDLWdNq4K4uNkmPcBU",
  "key33": "3sGPEbkxB3fmfYnrxyxi9CD55VdjCk8N4nR9pGvcMyJBKJz5LUURVW3PGaEf3AV1BQbpVAsmGvUUo4riKZxmAqjb",
  "key34": "2rEcsSMJxCZopoq4TemvbAybyEAndg4aMZrcHPnZtwzwuFGupjzn35j9GwZ8gbMogbHeWYC3NsA6KhvXD2NvaCFA",
  "key35": "62QjxobCy1gorUyn4YK8cpB8K1g696ujpaALLkXuDVZQ4Jt1NRRAorioVqwGm72QAY86RjxfgfdHTbQKmU3k1rEQ",
  "key36": "2KJddh5VkTjBfoGnxwKJbGtH3zoPgsPfpGmw2wRRwdhgwfYKvi7872zTD9r4gwnxXgRFYHgDuhSRzjQznRpWkPHP",
  "key37": "53w1Na7K1XGsd5JW4eRqoccceCdgV5vxkYwx3AKVCY3f4kJDZnAK2DrsRqqcxi2XM6NapKABoP46kNQxxvV5K8pH",
  "key38": "d6sJcVkiFqTi7FfYpeG7S3oRvj6fyvv2fBPdCxkQSsmYEuCS5hh5uGKf2UzydTsK2EP7XjZCECNqqLoXaJhAhza",
  "key39": "4eaT5Ubh8EeVr4F74BkAusU5LYSuTt5Uvimm795Qoz7SoSrrqAWnKXzDh2PdcSvmtmtEQ2XKFJYNrX1jJfVctyQa",
  "key40": "4e53dpzN7wNmfiNouyG7jzbae1YU2EtgSWiVDXwsp8SF7rikh9J4qt19Uf4MP4WLKEYf5P8D8pbva79UfXSfVzmi",
  "key41": "srdzds89aaxKvT4DThbqnr2MGw4L6LLX4d97eAJmHozHntntoZFW6DaTDjXJDPCAXUSeBe1WezmtN4dcKT5jGpg",
  "key42": "2rYH1kGLqmgHYV2QhbFwry5hTn9st2k9yjoNMbH4zxs5mnJnhBoWN6ESu64j2X1Vtsz4B8ggJUgSt4UQJPKgmvLG",
  "key43": "2w4yEUSYShP51EvGmXVvEe5beU4bsguLvJtvpiQHJqc6pi6GkNuE3CdiP1MCpNMvN6THFV1nPd2z4nA4djFxA5B5",
  "key44": "tdfbqrdXV4XQ51rdq9gWTBeQkUx3LRcCqkcsksRgHPu8AWrJvUT7ir7m3X4vV416ZmcR9fv9iQ8DFqgW5QKypFE",
  "key45": "3CdaszdR3DWP9ne6agq889s6UTDGn9S8PXsw2h7ZFc4z8Ke8DAVNKxszWuPSTPsowCCFc77pcNrNA7rxBwHosDke",
  "key46": "5euVA2T5h9gkKtzDyS4zaKHoNR7oHC7wzdL92NQm1WNvtwATaKhY59yQ4gnVBWK6A83PhWnYS3VYSY7q5aa1smS",
  "key47": "4mjSLCWgEH3pat7dQXzjTCuGv87snLTXXaxv5W5v5fUnFNVX2xmjUzysF6AV5ap5CFci9cemzSuA9cuHHBtJU8XJ",
  "key48": "isUHHhic4ZARbcrUVpgQSVozBW5PbpsoaVqU8877tK3LPSXRDyQfdt9E5gPSGu6zNCJ5HMngopWTdNmjCzzgPE9"
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
