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
    "5EgPyunA9ueBW94xDXkKpXfFm2tEbkGWXrGchrvMamn22DpUPcHKiwe3oUh7E9dseBWkJDh87Vg3mArCRu14Sb4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xohAdx4Fixh4C6H9QRNofyVVhVVK4Xz3MoVVRBuw7hZpCt8xyM2hySuDHZ4CoV24VGFMRpGTT3VjN4JUwYkkJgU",
  "key1": "53Fg1dHSSggbzZqK78jXaTZJGWormEQXa7DK2j1ty5c1MZSMuP5uzhJ8HVpgf1VkWZdhXThw7qxth4H15QkqPuej",
  "key2": "5kS6oSriHZMV4oQiaNN98Nu58VR3b3F51LykjMmNZuPBL9fQzTNTy1wQpnMByoqYjR2bRjVqEEfQGLVniSACyB6i",
  "key3": "34LjXtWwFuUgqrvw1fyhgJuJCHXWpvdnLPfTtWneXuuxQdQqafy8k11PLAGJMjYMtd2BFE4HMNM1jb9eJDCqFk5v",
  "key4": "5Z8ewygrSPxFQPqKBVt9vVfbZeYE8uKUv35EjXA8zmMFuyqybTbhMbTKAiHtDy5QUQ8rmzXQ6dEcf7i82CZaHfSd",
  "key5": "Wo9Yz2Mw7LvQ88fmjskUWZKg44bEPkD8bPVEakmhzN8d2FsGYvHrg4n6bBMZVRwE4JyzrVfNAyzDjovD29EEthf",
  "key6": "oGZvahgV9yWSTgWmSpxtz5X4tzFhf25ukHeqPhTkJjgc6bg4qJKFnTdKeXUXymn66E5fV6J9N7TcEzyUNGXas7e",
  "key7": "4Jp8RkEPwGSH4oUb2wZTXU1znMCT5kc8bjXMRcKEBsBtoW5RznYEauCkkpBHRbjfW7tnbd97EAuB8Txa5YcUaWsH",
  "key8": "3PdKYhAdkoAiGX1nxRjLhnpuT9NwSXd7ZTdA4dPZiBH2p9FjzhH1hwryBhPosTfAyJYQGYzvSg5rFTcGuFE65mUH",
  "key9": "4Qxb3tZv3ifvYusri2ixG8idbzzNZTynppi6iek6eeJvZY2jtnxybnw4Z3NVLBU3QTcuEzZzKVresvLv7FZAszcx",
  "key10": "37oDZNGvSj8tjPUVpCXcX8DLpk7hF4x9Ur3cPuWXou85od8zxcoDXrFLvCZuJ74fvNG4EYn9KnNUhCRdFXnnUzbz",
  "key11": "oN3GVL7DGZyyPesqDHcW8isSnB8khtfeYuZGNw3RkJFAf3UYmwqQs2LFexc4wXxoG5AqMcddTjFPSZVqrQsRhqz",
  "key12": "4P7JM3D1ZJk4B68tfTn6qwrMR5Yf7FMWmLZuMo82zTxx9S5cHhUBfwuwn8zUwXS4qCbYxMj8dHoBGeD5cD6H67xn",
  "key13": "3665Kztqp2GzrZVCqSJeLmgRFZerc8jRefhqYzwRSeQC65K7kMzHbuUu7o4pVr2ebTTwoazXkj8ynBQLPkj1NFZg",
  "key14": "64DjmJg5532nHjNj7DZ2DEPocqAEVgmNMGa78EDi3BW5F6kFMuozTgk5JTMmw4yzUVUJ9EKBSZXWSthg9puhQACm",
  "key15": "2sX8FEBgqc4iXiUPCSo6vnrpRK2miJN9Fym1GsJgrk5ddBKPDf8ZYhyk7xmioHdArS3F27P7hk8XsT9MrG8vEJ35",
  "key16": "2gTrG2hdwHTY32dm4EN2x3CCyhPkxajNWwUpMAbpo3vVLD7Z7UfVqtGva1HMYFJSAuEdy2DrAtYBMuFbXQbJMiDy",
  "key17": "2EngexeURJJ89onxZBr9LjAWSBwrUNJj8uTprqUcpRaRrUKNQPUSBTd2DFn1Qhs2GGSgypJcjLRVXDuWwfzLKnfw",
  "key18": "2PMKGUEJqChzMa8EWRhwsvXeSypQ46ah41CanVAF2GswSNvhhxuSfn8qNwq4PqVEBTJMS1D3DZtZdmmYkqfNXKCD",
  "key19": "2uhQ36wpQVxnGNE2yZ4q66jdp4atUKot9WqNhWuiyLNbdek1DkvK8k4cBY2FjsFGhymbqKHfiB5HzsMxu4Ytw1rX",
  "key20": "4nPJmHtg7zNxTrM7PY9sGBa7UefMmkQGF1TaJjZs3dnhGjJdehggpam2eRzQWtP9X5gemhCtLTVHbXGVDgUwmeYg",
  "key21": "3XY81LLafzSWjRqHaXt8ctsTMA6tncXhtvQf2PFiqnzWcn9Q4wRHTnzdSkRyNjW1cHNjsAz3WJnbikKjxQx5xuhD",
  "key22": "25L1iAiHAVG7rWVeMmQmYrKPXssDwRGd4XUpMCYRmz8oJMffuD35sdS3FfW8EGWd3utEF3RgywRk54zjdxNy71ea",
  "key23": "266RczNArC6SooJbuE8FNhkU6c1o4NYPGa86Hj71tmYqnW1VgcfsXAK4p4tjJyoDi8MePL3za3ueQNbFu6vP9F2i",
  "key24": "egRioCPe2CNZa9cnnCZA5ooDcZhVKKSNrk71srTBh4Lr1QQ9ojh1fdpuATmr9mjKJC8489gEqjE3ZTsC5arVow9",
  "key25": "4XPpUR8Fah1poQ5tDvJZoMk4BynBh6pm8XbqfZ37wK4NeaGzZsnJ4Xu1rgQpYu7U2jUN4pjKSMRMQL9WoU3MrE9x",
  "key26": "HghzkL74dqiG1YCQPLDXgxoY3JcgNMNRNtGeZwQbkWjvRVzyeszE4W9zDWWxics4Muz3eNSnJCmoh7tJUdg6YBv",
  "key27": "25hRzkUysNC5drLoMwPX8Dsnk6NzwWR2Ayrdi7qCzovEsdHCGdQkGq3FVaSnoQ62Gyhz2hxNq2qXoo8bvzQ8zCVr",
  "key28": "3cZUVxqeZxssNciDEwtr3gnTnNVfdmzUrBL7mGKfcmgbBcge37LjhUdRXxm3bfUFESf2WxTuR1vRtKQf7uuJT3Pu",
  "key29": "2rw4qoSv8bcnDgUuZcYVF79hZU6SFxTSVFCBEsJmWm5mWNbEuoyi1EBCCKUnss8VVHGM6KMTHEN6XsfCcK4CdSWq",
  "key30": "4uYeHVbFN72H2fh3xbHDr8dd2rrw7JHWMw9cy6zE5bVbhQ1qLDJ6QJjeWTkyDffZA1fF97rmYE3SznmMeXTquwSf",
  "key31": "4jQ21TKePzULUqgbRspKbmJSHpfCSCuSccKx5hDFeR9TUJoWAz7kDSDnf54My5xrH1DFuN2ViM1u54969e8unVmU",
  "key32": "oWY6Kht9BV1ebFC3njhpZnzrD9C6D6DYSLLDYPtpxuNea2FDdk9bNcUYQVQnETPK69UDPGSzvoQgCmgfFnWtiB3",
  "key33": "5sUP9p7zEXgNLrTsDARiAhK3GVaeoYDQCs5Q6jBZpimcjeFjBwgekenQdkjqmjkzxdVtCwEVCEPC332AVvuCjfDU",
  "key34": "3L9orvKSkNdzz1Ys2H2WajgieH5AMAqB1ZeqZgjFodhs1zAY8r7Yb228ud8AhYnvBB9ud9vpzsjc4KfBed6zzWhN",
  "key35": "4afnKLTPHQM9vhnVt2sp8NXxqcY7EZKn8Q8FxkWfZAqgtcCQCNKbSxSUjj5Qp6WuUW9SHgJfGy6vxhZVp7s4b9pe",
  "key36": "4HnrqFRpJi3ECa7rDFxbsdimLPHyxTDGTonYxkpaaWjQjnkN4yKVD1UfjhYY8HMy65U4mQXPivkZ5JyjudMSZ368",
  "key37": "54qUQdHVnqc9vr7T7tte1C3F4cK6ikYR2CtdjYYyPP1LUXpHZzAvzMCZRxNLfaPevujs3Yg8xvYAvjJVfxwQ8KfP",
  "key38": "3UTR7kGNSMWDFtXWzzQJZV9JD1Tvcfr4G9oKMC3BJDfyrrb9SxkVBfDXBeeMsb5XXXTa4wr37P4GGCrAdLR8ZCwS",
  "key39": "2LrnNXyCxipgyUDRP4Rp6tWK8f7gy55mbnXLY1JTQf5UuymVDZ1sRgGcG3rwbfNeztpnzAtGruXz3LzDeYAtLerA",
  "key40": "5fWvMjTrjmmxizxcoGCyCCtsJAjEbVMhDDvY23MbdQzWYTtCGEDs6A7rTn4GvfrmHmD6wcqZ39oM8umTBnVjTBat",
  "key41": "3dhESSCE2XRxnbYjCdYKpg8NK2hrpntVYztZJmCyZyGG4ZjZaDHZzkDG21k8dVVCGwXmKuDhNRQWUQ2KjFbGAw9i",
  "key42": "rSmYadS4Jt9iPVJFKSQjHRehDwNwZimeRZQhWMzSF5LUBmCCHhPK2f7AMy2FiToWi8xhQgUwu1qTZRBGmhTEETD",
  "key43": "42jK96kE7SfMmWiKwU9VGSvp8hqqgY5x9T7jQZyqmvBstJ9gKBTw82qHsFGJhfUy3Ew7GULrDcHMcjQg6xt7uQ9f"
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
