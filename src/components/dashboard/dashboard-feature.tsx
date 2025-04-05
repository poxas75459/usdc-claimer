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
    "5QXAdunG2LeJcqYKUUrdsuEE67EL5ByAZo4pEfijeouhWATfBg7vaKYjCEdStAt8jcr9xtbd3X65saV69GTWmmej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4GaLpMwbRBjG79L7RqLMoMJSSA9nw7dmwBJdkTgdmwutooLZuQXPbgbcCMg4CJKg13xL4cAMS2uMcKoksMb6Y4",
  "key1": "3ZxNzcS1YohoYEYtAC7a4NkhiwwbwJynuhsaY4ANqFnduSBR9NpgFQAnWgFx5yfz4Jt9dCdjB8V5UEUacZ8D5Y4H",
  "key2": "2R7bUVF7LMZk3VcFnzM5FyQPXj1MMNmqQAF7DwzzPiL3MYwD8smiDZNQRU5fX7tPyv3uwHic7EnMHEtZYcrD3sco",
  "key3": "5ovdZnz2y36tprhem2jVMiWAEQ3dZW6BV2A3j1gePs2K9xwk9k1WbegafreMmx3xazK8SANcFK5grtnBU5RSrsMq",
  "key4": "3nYTfYW8oTfZEj7GXQQMqyzAiHTrAnBeUKWvJTFpBhVxRSVsHiQwn39PpvRvw4XxPe3RnefRipVpQQmszJjiMwdh",
  "key5": "WGQ72rWYj3HhvDNxvTmch1wn7hVWuxpQxKV8fobcZifmShyxPp7CF9Hrm2uDPLCC9kVDDwkiZwWdRik1qQHYBho",
  "key6": "25SiMjNZan6xEvzS8jnHFZL2Lzxd52sUfFCebGLPEAPAeXrsm2LygUDVdG7PbZ7V3DtwUHk3kCeX17jp4Sgunfox",
  "key7": "5EDyUAsVfqNYTyDVx2qgXnKBJjGXZXqSRTjYHxipQYAvGtTYGKWozFRSqjsr1x5uJTMNG2651NvKjRoWZXUpyGMy",
  "key8": "3nFUUcAaE1ZNgsErP6uifnBoKxL5dwgvarNrG3mHaRJWod8eCcXJ4juhxVtg79fZ2QTXyyzfnSsB5GkU1MvbWZz4",
  "key9": "3s6wGeEqPYwkjEnE62Z2meNP2ezDPxYt2cEQDNgQn5gdXFLyN8X4dK8QnGYqsuqsLvbBJJq5NfiA49nQjVs1gLo3",
  "key10": "5tZGiJDg6a9azrgwLgR4GFs48yZjuvfuxjizM8iwjzssmXzkEbZVNXsGQHj2emiJxwzwtPRmMbeAx44fH5oJrLDz",
  "key11": "4CFtXMc23ic2woodN2ksahHhrZjYVw6UeUgKrhWWv25oLGkSteeXk6QsadqFhsAHFcVbUFQ6vP63xWH8AAU4ar8Z",
  "key12": "5V3h34hnZwZjr1Gvsrd7zBKFCLYMKxUEBkwrMoK633DHNwLSbpLrRG3S2SaxRKE5Lv1trfYwJELBVNxtDPX94ztT",
  "key13": "Gk3d3wupiTsQuAuRVFGBZ3d17HGP7gXjygoxdz9FeoR3AaQsuW8LeULKXYaZT1uN7xYB7RCHkvTLGkt5gRrVuC7",
  "key14": "Bzpw16KJ5XFSmKBDfJfTEW6cQK7LvYmaUiq9sAWBaJ5nfE79Ht7qGpiNWhyGDoJL9sDcs1WcmHxG1DY1F43qX5j",
  "key15": "2a8qJjVzbVXCUcVcvUspKWohsSZNYu1tuJ6Ci2LKxZCN2r2nM9HmCHcZph5zzfcd9UmKhYJDMNpyPvNFF5r6jQRB",
  "key16": "4K3kRfRvBi9BUFDTK9XeqJCX54m36rApHi8Yf32jLe3YLmQyrDcJjuv7rgDghDf7HoLaqXLKB7uuGaw3uAdpH5Kz",
  "key17": "4rgubHjSzYVyY8yrWZXskSNyB5kdcarTfTutdxq4DF5g6xTkhDwcZuWyoFN3z4A4BvRFkmq93z1HLP8WG47D7oAb",
  "key18": "2LvQiWox3iQfMWm3CSVV4BXciQii19vWVpZ9AUjgqNmRJejSW5qN7qDWSs9Cdw4ckeWZ41Q3DRD2rBiNxGcJ6UF6",
  "key19": "5siptiEAe6F5qknJbu6fU5QwyViSouVexoirv6P85G4sEvgFMaMKfPfEszxeaMYEEWCm6Y53sNBUQnYdUWWJbgNW",
  "key20": "4PWXGvCEBbDNKPPShMV7iyS3oRQXMt84cexYqpSbpL4rbUw4U3Vywjv3fsZQdd1Qeaiw5oCxfWEuXFYyYy8tWhz9",
  "key21": "5SQFtZXPRyvu4oxKRvXBRgcx33QKoVEyRGBzmxpfBsGaY65v44dpbd6iYkcJ8U6cwpW8aFJb7V4KUPG6LdG3ELKz",
  "key22": "23mPaPDKPJmVEmHKhvD7skC2VGppapHKFvgy8rVvyy6XB3kJqfH881mjF1k4NMsG3gPR3EpFyYjbRmRgQGmEDp99",
  "key23": "54DEugSLCr7Fu9AUdqo2yu3UCpC86b5XqAxfxQYyQiYmmSz1i3hrqG1XjCa3VGhB3B7HHUgDAd57yinzTFNQU5Af",
  "key24": "7ZRvM9bzaSS9pAqc9h2f618bZxQHLvpTZ8W8z1zuqkNP9hTX7S96ynuAWwarSsdspoMQKMzUwTFPAxVze9xwRRe",
  "key25": "qWenkySi4XmWsq3inJ1fhbmh4FJTBvL57Ue2VSGrAWDrnBQZz2w76HZnV8JTSzvmRzWdSZN58dPYRSPG4qqk6KP",
  "key26": "3ZvhRG1QbjTCqCSnTMdXPSGtvCkLo3F2Y6BTio5L9GL5GEf3Bec6ufJycwtho8haBeWMaQN7owRhJsGCZ89cKquu",
  "key27": "m9vkJum6tv3cJNQFRTAk4APwEAgMeKB5AVzoJhn3ydBVvzBEhLai17Ja9aQLc2kvEQrYSkuGyGdhZb7LeFqxFYW",
  "key28": "5w18wzfqophPf5TW1Dp5a7FaczZ1pTCjufiMj5G4ywyG9JYixkHAwAZE8feMb2wGNmj4FGkhvJM69egfMScVra5e",
  "key29": "2MyUnbRu1H5XUQGzULTBstyWNFzKvnbakLkhE5cByAunV1kqP2gebY1mPrchTAQMoCYH3c3Znta5TJ8BmUgpsu1D",
  "key30": "UDhLacgYd5rbfnrYDb2mejSqyEP3fBB1ZXgThsEob8xCpHGNvfagdPSU7TWGCyu9BhnwH5DJTjws6sajKsnSKvZ",
  "key31": "4BZr578EyqonZqpSJHiAVTxNgdtdNNhpGgiNLoCfzpG1ptYJhU1ByiEUNHL6HxfGBFCLc28YZndUeTfSGphdRmbd",
  "key32": "4kKRgGwHFW6BAgTMQnpGKZzWGbbZnoDjrrNZZKN84AuPLJeSGSJ3kcXZvJRAA9UoKzsyRtACHBCC2F5F6HqVtdth",
  "key33": "3Q9EciNgGD7knD1u1sh4TcPH81ygvym476oNwK7yqJVCi1koiBNuRj63X2BEDdLgcDRFyn2HvP84rvAWznrLG9BD",
  "key34": "5EEGmCcp3y4QExkAMyvyNHcW1pJhV3jp9yweiKAiGfxRu8jVbAyt8VSiL4AJtiZxtoDzGHMGyGwfdRTYjCBAPwwr",
  "key35": "oVnWeXrbRGRU6CBifP4qDANmJ3M7ngg9yKgppToR9Fbidy6CwM5itNNkqjnv3GVKAxM3DRR6KTrYK7bcWn8SkN2",
  "key36": "3eZhHTVey9HN8HezPRvWgASfvRdBzkXD6EyRhvmcktTDJrPFq7rqnAaqabDJVPh3CeE77oHjTv4xtQzQyYAbCjNi",
  "key37": "4GBY2XHYjBzyEkC6x4eduTchN9M9newUgvWNzKh6w4tpyKAGQcyYgYa7jVTd5sbnumJWL4uW1KioN9PTCDYkViKW",
  "key38": "4upTaGnyJiG5Z4wJTjtGyug27BF9A9rhipCmvGCLMo8TFvkLEc6TKimqfTBns9f6UNLSirm4f2dCEhTGkQ2DBTvy",
  "key39": "4NaNEeTuwCj7Nz6atnY99ceYUNmC1bGCsmq8haqpiNxM88RJRB3oWHkqxQHVzVUn9HPv3ipuRZEQTgmgKe9MXHhZ"
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
