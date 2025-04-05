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
    "4fkrytcG6uqRt3NSEakcN4yaRYNo9QfiH3GFXGJBcRDpM2Jxm4Tu3eeJm1bc3E8qVcwmfExPmnNS3WgcHmQ3qxWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S4DrU5dHaH8TvSuJ98fM8tPMDZtvSZ4923JYQG6eLWt53eYLikdj1JPzEBUYsNAJ718XSxwQoSBJxJfAVYoFN4G",
  "key1": "2wSCFhnji3fjdQKbAPXqjnTjbL9B8KoAoeXFrfA3whWbLKVSS2StLC1KH2uEnN7dGJcjLZC38LsPQwXbuyHfaqEF",
  "key2": "3HveJ72TVvqazsUYCTGzXdBvGtgA9GoAjNJExKQjw8WBmngUxxUaSxVALrxQbvJtACg6WuFqbfVKZRpvisV8Cb6R",
  "key3": "2TfET5jqTTQVSSGZyyjmQBaunEv66uG9yfZAVFRKXiucNzSCqaaw1pib5dVATPrAhN2QjChDNU1S7Wsf51WMiqeR",
  "key4": "vZVea4ktQyWQJc8jiHoj5y8nMGjnbXNkdk8xtD8yK4fAEqTU3StQJ6rtJb92dXG4WyJw1x6ExDiT4GYrFULjNg9",
  "key5": "4QgXpYcE3LYRAm9hoEyur4at1FiQ4CQDaHqGKg5jw5UwF4DShwAQJcJGpJjVafAJ5cD1xCaCVa1jHysWsnT8yrou",
  "key6": "4wJiEYZAc8HoeVECwnte2q1d9WFDfi5hh2rwd49e13jt8zA8D2A9ihuDYySckDDVfxwFHZLpT45TmjVz7QpWjG6g",
  "key7": "4WCZ5kXGPcjvt1dz3WZVpvSuwpGvc47U4kYzfSGuivuqysGgxZb4VWoXX8aCBdLti5q1YrAfiEfVS7eMZ8zVJWLD",
  "key8": "59x68UYasXcWPCCdHjeCD6D5qXVSovXLVVABfFQw3jx8zgBJgbH2bj648Bu1jgYNgevjen38BTjh5MJieQCfdTL1",
  "key9": "1TVa6UXEwif3ubcn3mNWtz2yCdEN2x3MCi4p8em8mjD6s9Zog5EtMxubinGKxaQGbZKTY4zbbg3rtoSjSzCFAho",
  "key10": "3TN6KvWxwtKk5HYkdAKnDDrW7MYvi4HMtatEyX1MtjsPeg4zXPeCjiicQporpVcR86rQQf71PFoQohwqBunpaAt3",
  "key11": "3GPqXEb6Rj7AF42ZpjuyCiYkyBwCg1cJPWd5tHrscJKB3XnqxVDAcYdgFx1rfs9kZ6MCvhsaEGymabiw1tFVaWYo",
  "key12": "4aWQrY531kcNPrnfCNsVgMW647TPrb98aWfUpNjyVoFb8b1Bz8Qi8PBVGMpbUE3fW7w8vphEzpZGCPhEFdxuF468",
  "key13": "3vqF6ag56MsDZFcRsVKto2CG4R2E59GBPh4FVGiSrjQsB3GkMi7WAbVWdTTZq6HrtfCr8iB1FB6FPNfcvZt6qksh",
  "key14": "47cyNZiXQDWUsSivcPoQfHYyRmjfZjnUcymfWYU1D245C5PXGoZuxZgjvSKvBgxJoqX4NHHnwCbxQhxgLew6UcYr",
  "key15": "2Fun61D6FcNH1x5F72555Wzc9jAScbBMiwZRARYE3mK7Zsmj7nv57mYzCRxP6DJ4GGreG3YgnZhLe7cNTVC73mmx",
  "key16": "4uzYxnh2rbKmBBfDt2KfqJr3okZr8DvWookJjk5PRAU51ejSfAdNRhSHMP9PA3kboNz5sXMQKEjSGUbmVntM3mbB",
  "key17": "5n2cHq9dgdyG9hY3XhbcSrQcbQ3LxtVQSdB2zC49qPwZpdyFq43NGfvEu6kMbPH97cxU5gMaApC3kuxP2n98EC9o",
  "key18": "4Du9vTyHaCqteZizTdDzKriuPzuaMYHYkTv739DtLBDWAP9kYWdZQVxo6i7Ek4qrFpvDzcUFZnUfPKsgbhLJH4mS",
  "key19": "4kjtFNf2v9a7jW9TKDK2CUa1VYCMeee1sbBcEYRyt2s4kSX6cHdx6doRNzHoeNrjRKMFjWQcbZUVvkrs3e2gbU9R",
  "key20": "2abvaNL2JbbUw9C7Hqy91GhR18s2SRSnjJ3PNjXxDjFastaLKrhh5yTrY7VJ8MywgQ4rRNsoEuZPtzHH78CqeA2w",
  "key21": "62gDJJzGAo1y4Mhf1SDDYe5kxkUtqhsGDrcpaEU6TCHwvaVbkhTQ77N52Ahhi1pwUs8xha4kSYrgvn9xkgh6i4rs",
  "key22": "3TGb4FczNfz6NSZJNbRKmCNTES2mNB4AC9QvsLr4zuUW58MiWqtfiD7NvuXzrXWb5spVubmz79v5bpVQHMw9RCUq",
  "key23": "2gm9P6nEdouTB9ZoWjT9cYBsyGLXz2Ze1qaZJkr4VwHDWViiTwKGgewQu97HmCpk5yk6au2FTwef787iqK1RWGwf",
  "key24": "3festAAi8zwvTRjVtd6cuxhXnJPT5umdC9q9NqHCJiJ4eSwqQ6khkA2hcb7Hza41gA9P8aNwkDDdVbJMzeaF7Lj6",
  "key25": "4jMXPSryRQ7vGrvhswKgoDuqYXpewxVFmAMEkPRJ6oaDpU7sbMzjeMf4vUhXojCbnr78HWPYEtdJdQXGZteW35xi",
  "key26": "4ebyp3v1Wsgg6YhLfqPLhzeYMQcmArGZijCMNFvZBkbT4VwE3r7qSnGE9hEUP7JPXQBpuSmiAnAV2Vox2TK2dp9P",
  "key27": "zrBc3HVoDkd41smbE4NHgvCahUN6PREVXDckjUTBSJeMKHoQSyxCnSZBFPQd4T8h7ESwGcVcnBH3RwoWznQaZgW",
  "key28": "4hE4MhZVg8KCqBvqRGqt8F8xa5XnP1PYSYjDgJZFfwxXidW628bLbSGLUso59T6zKqxUnvvjdqHDHe2WaS7uuggH",
  "key29": "2BeQCm8xc4UPKyipHvitjerYNQxTiqYRdNTHjnUAgrZcEDfRvqs5mu5P1orFen1jezN5fuxshDxP5iCBnpZagFc8",
  "key30": "4k5KsDkQA541Fqvn2i2b6vnnkhFXuAkJaaNJiKrsySUU48Cb4mqkMY1yRTiW2Q8Giu1PFnc1bWFUT3M7B3zzy11b",
  "key31": "26eRz2VfVJGJhtvBsUgiELZgiBPyahEcrLU5Tk5Uc9JL7KV8YHn9LtSm96L6p6dBXgFLjatMQBw7MhvgLiwoLjLy",
  "key32": "2vpuLEBSFPTGbCYV8KrWVWXr4CKrpeVbQGzUTadu1WwzGKtVwCajd7vrRhzUo21QEWpypGm79o7RXof89SVhmVgN",
  "key33": "2EfmDJs4wwNmsaA3rqWXfDGZ6iejs92f5MY6mKxkJ6zg91t3LZmAMLqGm1Xz2JHWNmRvNgXetgo5proe5egQqy1Y",
  "key34": "2vyFtC9eG3PHWCLVjeBoFv36vdYKwvG9HNknutybGSL5g1GsEQNkJoGT4kzqR6RiECK52tDgLRe9NDDCkN6G4Qo1",
  "key35": "5jJLKmbV9QY4LwNJGaeKsqiPQa4DzmMbPeuRGQMBysBwZyR1HGKuyjHgtHg786fBayi37L2JahQ6sjMmeSr5hhoV",
  "key36": "3KJz2XL2HnADUkE6yFtwbRunFVTsQWYttzJ1oZiCn8G8Q6HHMPh9Ky3L9GS5XQdi95hVDeR4yk2yMU8Kz8XkQyyp",
  "key37": "4Xf1aX9RYQ8NZpbHn7NDxxaAPbomX9ovLGieBpvMXbRv3wuZbJoh4HrHHL5yLs6HtFZU64K7ME3CEHdSvzpCzgcf",
  "key38": "5dD7CwbmyDWrbvZpFKZB6TAjrw4oyyiRtAMpEs63C8T9KRSF1ZpokKjZxXmEaNRRBxJKz6os3JsUYF1hDKGzSP6Z",
  "key39": "3NELdW9WsqNTx9ypa1bHmMKDtDqH2PmeLQUkWMdA3EgD5Ls5aaA6HcYDCAWH57hfSGgWPLbwK5441odUjrTgUZnV"
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
