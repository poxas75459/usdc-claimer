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
    "Gqxd7JzJNjHgLmjcLGVSYdQefi9dGXXY8sLEJTzv7EmkxWShVJkMFRmpvfWErV7yGrkiSTqvkkzwP8w4gwAbmvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o24TDnaP1KanEZcz2cSy1mDTqPhaHAZZZL1m39t7dBcBfRnWu9LZcXBJNeQBN7ywMMGxsReHZffJU6oTTsvmt8U",
  "key1": "nPtmuLqS5ioHBcB6PqftAEmzet7yboXr7FRYQLfFQP5vJsA9QrZzHZZVWDepMo6Kn4aj4S38YbzEKfN5VmU7qYQ",
  "key2": "3FoSkGfGxpwyfbC2dV3UNbbZXLhkYFppTVqyEY6GbQgnzEQ9HErQdzrQHSg9KLQJsdWNtdHgEkbvYVQ4GWqvFSs4",
  "key3": "3StCiZQuoKh6Q6dFEeTmhx2YA6hMQKVDQAVW2Ro8SjTqW4CLWTv3JDcb4do6z95Q14H3uWg8716vmqyEUk1xByb9",
  "key4": "VHW7WrxwDhdrRD8Ra9eqB6G7qdU8pUdeRRi2Ea5gLyjgKsKx2RsicurCo2xtoBSfRHhhuvwpqDBz3eadW9F4K5F",
  "key5": "5nVgpknkLNqPE4ZKcz5yBG5sKnSpvdU3gEyQhHgAE4TUYydjPry1P3jmxfkRJSWiu1q8HSDwhm3a9fP1JNQxb76g",
  "key6": "2hUdXQ7f8zacDW7V4BUtZWSumrp6cEgFAqMDfeWZThSmqtysgVGrru5ZR9VfE3zYAf6uwAatEng86fPPmFHuWVvK",
  "key7": "3FY4jgxfgHwPHNm8LgifokhJbrtWTVreVCtXDQr8cGx51twfycoZuPhDHe7pDqnMC2SpdR4R1kPQ6LMXo6wZREyK",
  "key8": "Nq5wMN3hVwX6Fz2YX1Gtt2P9AKFcCPCvsTMpJs6eaVVuA1yjpW659dghjyRMqEtFMEpqDM823CN3ePtNibiNDsM",
  "key9": "3fVD2sAhHbgMH2C25AB4EAroWhru5FWGmdkQvoZ1EytksEgGTGVJgo2r6XZsq9KMsj7etCZayPjszSvqS8mq1Zve",
  "key10": "5c25uE6kcgQi8mEhu3JNPrpXx3JRGkSBTw26MzvKdfvGdEZLKCiXxFxU7zr1tT5NAFHj1yKrgRnSwXos9BstTP7M",
  "key11": "2DMS65nek1yVSdrzQnmEQfVyvrGj6xza7NAEN1zao5jrckkss6X3AxP6HTqmKoNACnqKaKJuRNkLfeFkmFPW5j3g",
  "key12": "4VyGgJGuN4RgetjCXoSWCNcJRK49xyassoeFoDn78hNqvAgyH2odHASfoaUBcoSuQdvmktZjZo4U3j2otNF2xZNX",
  "key13": "3TuMFRGDLgKTWCNTRvHtSAq57wPqWukZencMtXsgndcEYHuJSCMJHLb2ozJ57nWXobmL4docJ9icGkKAZERN3EZZ",
  "key14": "oEa5uuvVmJwGwd1TYLkaPgs2pvG6DuUAYANyyhQsjJqgKFp3bxKyBQJFCa9Awmq6g6BHiJT6L31DfQTvduNRp43",
  "key15": "2ouKJqPmQZdiMToZvQyWb5HR34hwFyqRgxJqXTj9WwYcdXF14EssPtY7hWtD9bwBxxkrjCq5F8dL5T3CsDFBjVcd",
  "key16": "4c8zk2c3eZk9CVU82vxgsVcBZEMMdBwdSNPbxD1utoBBrG7toc3iuccrnJBjEZrwwiyGJraTBxurCYhLF5FADusg",
  "key17": "3tjsTR7GAD2G8EV52x2sdwCChzJRdR99adGRuTJmiVpx8wLUpwJCTRxB9vTMv7Q3xsg1GonzkAwAhFu4otf5vtey",
  "key18": "2QQ9bhuT92XrjqvA2b19QDAB8ynPXJjFeEzVN1Foph3aCKpu9NmT112jZConim3MTY8n5zo6dZgfBvSiXKrNCMsC",
  "key19": "mrue34wKuxeWv3WPUi2ceHHGzGXD8zQ5vEqV568hcKoU3WcbW69PxnPvKDNA6X6nf51cR13CKibg3BTAyBqT49Z",
  "key20": "4sSRm7bUaW2uHv3UaBHPKv7r4Hw578bRXkD8UPvNqAkwLwkXvnCwnY9wC1ccvq3cqczpMaRxxAvViFod3XTfM1zC",
  "key21": "4dLXJ7H6arU8yxx6AggcMnv1XEetoCVFGtpqceESSm3BiLYr6qaxkYLa6Hob8XNjyMqWEnPfbQy5FvxESXP5hqU2",
  "key22": "5dFZ6UEgko7mC5pwesJj46Tgxo4p3EQz4vZRLaXQuQcfu9and9AJZQrzcPKVSrJmf47RJ47osLMDNc4z5fNQY2bW",
  "key23": "3ZZPfeUA1GYPShQjTKuqW2wGNKFt1QeAEog5VKtLVwF6Cmo2JjaoAgRjBXdM1d3PXfVChsGuVpuzP7tgTe1JN5px",
  "key24": "3VD2sLUTbHLfEkrTTgqF8RHADhkxUiSKG6DBnNovgyKvfiZJYPs4iEyKK1SFaqJtpHNFo3yP8boEHfUdm7TVp5cN",
  "key25": "5TuixjXjKxpaxeJC4gx6goCNqQk1V1r6TfPujC9CzyJ98cVEKp9XkwPAzGUteyVzdufjoTMjWNxhfSgNykRLrDY2",
  "key26": "5hMfo7W3MgCcKfRS5MemnR89nZgT4iWuhDBnm7WRQURPK8cuDRVHye6hsn1wveMWro38fP9B16dj1nJV3WTNEY1u",
  "key27": "5FTpnP2pi5TEz69Vsnq8bwAWg5oxPjp4b2cdCvgyyqSEnZBkwP4rL5wWAPajnxrHaxS7Wn99ANfgt7gDHM1c6AiF",
  "key28": "2SPZ4n9uQvXwEXxg9PMr5waZPv48uiU22PhKPMjhd1ghV4khmw9NAFVn132rdzhQsEBdAtkqHeHJkMy2praY4Nh9",
  "key29": "2BTdeGv8tmuju7dKfVd2f4fXo6H84NmSguW9TSJ2ATytUW4eVnXWWsP6cJyRUDxcKXsgVNUUFdGP2v5CgcgJBAZh",
  "key30": "3Wjf6NyzZLGjguFnkaxp6r9NmBGzbJgXtfJ9WtAbQCbnLYbnSSshApZBK5GuZDuTzAJhci4gLAmFp23BLBkc7Ftb",
  "key31": "59bjRu6Nryj3xFJGtY6drJVZ1W49B3LEkJmiGpBVYSk83PogHhnK1QKaqNC5GvWMePzYAfL6u55viUEfYGtTjaML",
  "key32": "4iizktckVFKLkAfxYdhhsvM9FMXhfe4B3YdgTiVxYukARFW7QXPBQ1aiEvZuXGzRBpNNTu2iprxomv77KwfAZTHg",
  "key33": "2WJcMV7KMjoVujcrsSnE4E3yTcUhjWBSnarqZS4z3AqwBqGFtdHwP126WoSnWGH96QtwYkhdvnF4xw7fczWRneDm",
  "key34": "5dzzwosNiYsVYoSrZV2Sf653NuSKyuSKU6bPZh2F3hkddM61bgxtUfxMz84sTi1iGoj8MA1Yk6pfF5TSfNLJ2aJE",
  "key35": "2kcZPMcN2e7yMNyzBhFTCEiW6YZdMyyTbi5ncfQfpkCbmf5kbmNYoUoH9raM37yXri4GT63xCZ6BnKjpnWaL2aGi"
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
