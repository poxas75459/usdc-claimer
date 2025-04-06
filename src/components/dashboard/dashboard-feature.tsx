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
    "4tiSxZPFSqpKJFT22W6CnnbGttS6W94UoMeqWHEPNP7M3AecYgwKkjR9VbexWm2HYWSrmwuSEPpeS65vF6XUNuBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KUk1jvyW65PwkdZrB2tSyDuwmfkeCf2YSY4YRdxhuva1xk8nvhKm7up4fR9wxW24axTZqgfh1SmY5QYNrtmHvja",
  "key1": "21yN5KLtFBcm33TwgvBA9M1HMbh5vV1X65WdQWhQVZNsYZpnHdoQ7MztV7xARm966xPj8vr2wihfM1YbjCgLrq93",
  "key2": "2JPphJstUbtp73X4ztze4s5RvSbPE2HGr2prp4AY1aLZNKdenLhG4ZYP3A268FNKd1wKiixxZt1DfedByrn3FcW4",
  "key3": "rCbgsktjYuL2cuQhvpeSwowuCE3Uwb9JFVkin3KnjBqkh6vxakFFiPX44DvQew6ihBiGcX1DcFUSXWYXC5qZsTm",
  "key4": "5S59xhxUgXKAbcxqF15FsDqvS38F79Bn68KT74n1DBVtEFRjbyz9GJbdd6qCWLJh55MYavi7rUXzYyF8mAi6Erd4",
  "key5": "5TLGvn8JL3bZ5aHxFUBaWD3WRCjaKag45SvocPHbSd96d5T5B8eR4b3EghaxRu3iW6ypGwT1NGaoFJvq4Y9vLG6J",
  "key6": "2BFkp4jW9w8GAmhdHFJ1maQu79V3yjUt6BeSH9uHt6RfFoi8rdP7MHu31S8kQB4jnYKKpJRTPpX4a55a6kMBEyxW",
  "key7": "5vnCF9X3uzkcqfTrBMhXt4WGiTsFriZ2BtsdoRX36xwLF8Uwr1y3uT8EsSgte7atGrGHqx7m7xcYmRbQskdwPTkb",
  "key8": "4kJ9L8UHsgYcVt1hJnZhiNRREDRBuZ46BjSDaka25x4cFDFYwPppoeYZTm4FexwYcNGXugGuojGSNMQfpAmTSVz5",
  "key9": "2KCobnTekGx1LYeeKNygjkdLjWWTUnd7JHkv7sBrCCKhyT2V5VTKzGrzryQCLVrScd9BPPbKkegj9rvhgqCeezkB",
  "key10": "2XJz9svvw3doLgcATRbduqmzpCRwCvyUzCPqrQjnQjpKQcMDtg5sLvhe3L8c4ehquBMLUPNy1gud11eH9KAbC1C6",
  "key11": "WiMe4W7XUpzZsz5dMYeai91sP22JPWhdfeuJFzr9dTCx5NWmHBf1k6NLgUUPgruKiy2ySqTwi1ynHzCCCG2SVXD",
  "key12": "z3N7E9T39FXStUnqPxSbXUxxf5taDBjikoEMHtdQK7fXZKBDTkcLJGdYRuiLeQFmawkATxpm1fGqYBcQowLQidk",
  "key13": "2dfXCD9GWXiTyU7N3DxMhwhyqDgixC3jR9gt8TmRNz1vgJu6EW7hDcnk7gcN3zYySpKRusvXWCgkTqnTVTeFm5Hx",
  "key14": "343rhfK8b7EE58fgysmE9SwyeyK4qKiCZDKypwShJkfNpWjkpkvS46ikv4cjBxMSTwGZ6a5hpetChxmj3rJDsBnd",
  "key15": "41uDbUYszJEcjaV9A2HEdbU94CeYELhVdbRwhmzi8xH9jJmTrhyAL19fpz5TpXN4qBFEcb2hELwSghF7AzXX8SY7",
  "key16": "3Hf7dcYofpUKb2cHYTtwAyx5k4RXGafzLRhfeKJ6JW3XVSmqJ2gSkDfmCj5YqkRcVeGxDEHSnADeggyUVnCaDXDp",
  "key17": "rS4qTsxEKwBmLdgd4vd37AbtAbAJsMoj9r7bCztuJwzLoQeYFhHfYe9pd4hEt7S3MfSDBgSymh9hxC33u9sW5k7",
  "key18": "37LxjsPhXujkVBbF26F16jVsy9S7dRE8iRQAPXqLnm2Y715FdNvNk6bZfxbyEVyoZvdn8VwXrfgtPtpoXEUDa2Fh",
  "key19": "3e6GQq5G6yCkGGdDhPciCdY4i6ECzspse2CYBYPoTqA5JGbEfsWZB29ckWJXrPehbiaBBpsfoD7b42gs1Wj22D2P",
  "key20": "46YWLZnfPX7NUaPpPUUCv8jRTeBMe3HzraoEoWhbewocfDpa3zPxWSY6pBqqT9twpPqjj2zC1TFUK3VvtyQ2obzA",
  "key21": "Nv5YBqZpJVYN9zLXHA4v6e7LugnPgqUpQ7r3oH8jPCfVftHhsXu7ZWm3MF6G7kAMpYsjWuFKDYGXwvBQx37V4xN",
  "key22": "5qYVNzSovK8bC6ww9iXYjHjWPZdQj1FvPLj7xZZHzJMPUSXbgxuDxroa1G1DFwXwnWjBXUDGuzsxJJtxeWQXZEwD",
  "key23": "4fD2KNxq4dzQAiwhRaz71aNBXDJ5iU1rZKfzjXJByMLwuXNagMNDCJfEVSjv6aBntKgkWAz8CqavcMBLy4FEKEb7",
  "key24": "2FxNEAHxpotpboYEamyL5quCHh9JVeKfy8dAkjGE2L3vddgZjiTAQvcFeX656w9FAgcEH8VrGGfwjhcwR6emmUiu",
  "key25": "335N8Lom6oqgiRqyGUUhodMzmiiWACW8pnQhedfLaSBj79dUHjSY6hsPAFTtjB2bruutB5tMbcjggU6a5kHKmJj7",
  "key26": "4rPD5sbAJNUrqisR7kUL1qe4LGQiMWJbwp7UTG8bZ3kQkaekDEDTYK4DCkWcPkUqHazqf71g6gBsTp5iGadSQKMz",
  "key27": "4L1ZRobZvXCtZZ8eUmNALFrMusTD97RsJSwkTD4Ac4PQ5UYWjNMY1iHTpQgMo3LDNV6gVFrnoWybRnsbFzUCbuY5",
  "key28": "2x7FPCo27Gr7Kj471Dv9WqpCBRXumEgtidBL1zYX2ZLafGtYyNh7DANfaG7WoMcHfBTjhqPRYDWn8XKhRYA6rG87",
  "key29": "61gAQSmTbGc1dnFiPEKhkanpn5PXSCrtc9ZCotauvJ3rJa9XYMyy91TrDhJ92a3XizwyMVBP5cQcod26g6SGNhRb",
  "key30": "5bd1WLDj7pJmuhr4uHA1NwpFZVaTvDuG6suN1iTJA1gamjAcMHFyfhtwmM4BRAMpV5ev1ZwLdMuG9tX4EGJa1wxM",
  "key31": "6gWDsSKGzDuUz9suJ3Z1ECdypmYE37CxVJkG2sQfwgq3PZQ4Gq5ex4p2A1hHQWt81gV1PS9bRktMg371EAwsFYs",
  "key32": "5sPu7GCeaPmZ7K1mJRHtGnn8yigGaTDsHvidDeRZDuHQHFpCp3LGxuofbJ42RgJczor6hskFoLXcTafcNYTWTkzL",
  "key33": "5kSqndgcq9mVXZ6i5gGndsrg95ah4wGxLE9F9c3w4nLS2uUby34hH7zw9xDYqzbfXR2em9RE5yi3JdA7nKWDzdJt",
  "key34": "H3zYtg61NWW48e7hAkRuVdR8cFeMAbenv6dQYKEdq4jajRvm2Lhsrziz5yTNQ5tnfVRX5fhRjiEuMxr9vNF9NL7",
  "key35": "sZZUKh5Gh12fXmGiDwpN7TBGWHxJQpMuuoU5Ve7zkqVAfDc82WJFPWBupLNydDK5xTeL7NyujGpLKYBA4wbs5x4",
  "key36": "3DkxD18A4DS8pawksWiZfi85SCwCnSsofKhCNTaqhfX7VwXzvyFBp9wQ63XR51bgtkRWiX1VpeDJ93XcKjSeYu8K",
  "key37": "5iDBvJ8FjGjE1zHUAnkjHJiJBVotSvvsQuJgCHLe8ztKRTfDm7xiHZB5cebJ1RMqG9sta8Dbz4gNfuWKtchMTQRB",
  "key38": "3qYmWYDdc2pvJExifKp4yPtSgAhmnb4j6L5ZA9LzT2zyJ2BExCbS5QzZwJw4Zr2WVXTGrQAR899A13gpSRpr8Lwu",
  "key39": "39Eh9Dbkbv2ivzKj3ZFXoejuqm4x7JJH4A5cKtwHysBAXcDoYVD4wRRh8SoTwd1F7DFkGKZTdtVfrqvrDcKLrFhp",
  "key40": "2WGhs7hv15TSJFGHHKUxt18AsZtsWgL98bz6cMKgYBKPY56BQMXSXk3Q8CBDUBwZvN8sCfMNedQxRcJfUaceUwgs",
  "key41": "2FbgyDsN51i8vZLdcxbsof62nTPqtCZc12oDvDHL5YFRb5ZyWzyjw1L1XU4uaBfSJAi7FRSkMWWjP65bj2WWZYmx",
  "key42": "33jrG6fVKW17gk6MDoEAMieKTjuNtodNtSoQV6nY7q4sYhXH6uMEpzgPp7Wz4Rsdn57jKDU8XR98GQJ8mesMvtkm",
  "key43": "4SH16wXyaWM7qAV4u9H7FRoSYiGneP4adnCvjPr88LaqwftrwX2wAqJn8Dmovxu81Wxk79MwQFSrZWxoMUkT9hGb",
  "key44": "61pPszNfpDCzUKAVNqmSEw95zQb7KrWnoqh4Rg5wmc6Qu4pivSQzzstH5gP9RQymQGM8VGHUwGj8ivgBeGkf7HR9"
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
