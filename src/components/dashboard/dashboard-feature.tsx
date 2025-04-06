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
    "5DCw35HBimpY3jBHF6NF8hfk1jfs1s3kHkPugAGKu5xNqJRpTe3MDGeyLDCJDxTLHQHAC26szP9M3emFEM62K3Uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YU7FtaxTfTTVbqqmiksetrp5ZAZZnHxbUm3CJ7Asnub7QTfj6eP38nHHvqVWL6kHpNMgT8yNZLeUY8kgmbUGtyv",
  "key1": "3AnbWEAfP7JAk4mtumwZ9A5aCzW9APQmPwkFfC3JMy1BkGvJwLZ9W7k2oDb6Rz62Bdnn1dhFNB2tYJHESGdjR6od",
  "key2": "44bsoQ4cnHKwhs4WLbEgAzcf9kPXToyRrfknxeX1JLkzYUnSJkkeQ8NKjJZvmG7YRdfe2p8f2n3rCntUT6gdRGkC",
  "key3": "3NfKpo8t7tt3MSSP3Y1oNFeiKeWd37dt5VTHrQMKH2A3XdG3nLoH643iFDAy8J64mg73jaCn2QfgmfffAfvEYRXh",
  "key4": "4GAWDtZopn2qHJ84nuFnJFsKLq7xiKCKe3C1hfm44W17af8Kmmy5PCna2Pc6uEUBrV9cUbsAnxUWaWoxoU3FBWkj",
  "key5": "2XM4HWRpLPQ4FhWSpSKmTcpxFHhJozkbZa7ZApb5qhtDNQLiYSdBMD6SSzvGXRc9D1R9mFRdFQDauV1hBUkwSpZs",
  "key6": "2UcFxff9ufUvYUDDo2ZwbASNray1ZUC4KvLhMkHRU4ioLyQgHgsoZodPY41VyNUWLXveUKVPy8bH9zH5ij2iCTtm",
  "key7": "5mZwrRLcvJwYVMUsfJUEXaWCrRMatvQ5NNB2X4DKsoFuBkfUZhyuzFkmMvcV2SFhTB7R6JCVhywvGJ3BL1WKfq1q",
  "key8": "2SZZRgF6buQxRXsQhW74q92KpKqwNici8CJ4GwtwW3Xa1QkdqgEWt6BLfPmWjiJubRsmmoWifUcXYCAVDQ81iCY5",
  "key9": "5HZQEF5Lopvn5zDejE3cg7QGGr8vCxraF9usE2KAZLcmoCXrWCGdjg94g5655G1EvGPbdeG5pCeZ9t3wnX7nh5CB",
  "key10": "2tjaVswWS5s2AfgHQLPNGGd3RpuTewYEAmVpgJwgpssEg8W7Xa44YQ5tQNSXuEKN2wuyLpMmdPXui7A55a7sRB4u",
  "key11": "3iCqKewc2tejpS52zBkxzAaciQxiqszusXbxkt41UvsCUpxxZ7SG8xJucYEmbnBRcbkGkshBDWDZGJtyXP3Nerri",
  "key12": "29LSe4ZpG9ZwKoTSqjN8WmXbsu7LSawn2auARMUs48NpVUQZafzeyQFdbpbVFJWUc9QdKe5aen6oUGNQkqFsqek1",
  "key13": "3VscVLs817rRcwK9QkZ871SG5WrrkwfcVBExsAhKjPKmrjY3N2s6QK3nEkGX7YYBbnhTBWpR4MjVJTnaP9dgfW3j",
  "key14": "3BoHav8PHCPagMaTEnnEXLGhG93WWAR1YEQPeueZu8tTxSDgPXjjsTuxbhpeEydu49T9SgU4KZ6wMe4BT2tAMvry",
  "key15": "9hHC7yBTs39dci1m6kfdE5HVujXsz3jFkRTnfw96wLduHtD6oySRo4ZgUtCWFojfJcimTKKZK6FdxFLP5T2iCr1",
  "key16": "4MM2nx8KzS5NToHTM3py6aUPBosJtG85eUzErYQ1qp4iLn2eEtFk3bKPj54Ff9KsrFL8pnCWjx4PvJk3kKLR61cb",
  "key17": "3TTeGPGqJjXZHryMmRZkFbJMVLLYoH6x6GUeiXEKRe7TsEYL6CkRHieX6JUpwaCHNwWU2TZdb4eY7GaHt1N46dDq",
  "key18": "5VmTMsNAVreMy3LHGVLmFfVkU8EbvrUkhHGTTiaZkpr8C6KbNZf1gc4Pwu9mkgXkzPMMXVmMiVezpw8Yr8HPvPJH",
  "key19": "3K4YUCzAwg4UdpqH4oWFnE3rvGNqvTo5dRU79p494A9NWG6tfpWiaPcCLZgRg1pBcMZ3oM75BtCgJXc2iQ1A9bNt",
  "key20": "4JDEr2QYCe3vXtmBwbLDpNF8ZNw7QFHFpA3HEVRXca1kmLEtPNJjSyLuFBnh8jRZTAGjXNup255HMwUduQWCMhya",
  "key21": "3mEej4Zm8BJyF5waFuhHxZubcnpYyjV5R8DhRT7xFv825fHT8XcRbjWsubJLod35tbQSHokAgRm9YktaAnmj41ky",
  "key22": "dDVjPgdj8tF2EBEYXmgmV3Gb2sXBYQ2XUkVvQS4NkGZ2b4DquJXfcty2UogKfyovdGDEiDqit8pXu38cv2XN2Po",
  "key23": "2Jib2kcbGnggZtVeD9dt596vUHE2SrRT3zuHf5ZuV4SXQhs1n3g8zPpd9t4kCY3Q9Y62cqWU792kdRSPJnUjF1jM",
  "key24": "5RxHdpnyZevYSyvu5A29oQenD7PaKpn8tWjsociA5zcK5qr1xRJ62fKue5iYjntx6zAQP7Ho8LmYZtRY3RBVqeE1",
  "key25": "2fk3jJkjogN2XwwLyE6SFLHziXLbLSqYAXcvAEGYpFG4baVUGqkjicpFg4am5CWWoWbRSZJL7aCEzTo5CAAr2yEa",
  "key26": "2jUbpXGanu2fLNW9BM2dbwh2ej2MuLHD8VG69ChTm6PnBg8nGJAV9zN5kRzUKBRPrJuVfJVjszxQMDVoYde8C4QF",
  "key27": "HwAWtihCfPFP1TqBZaEioYbFRHkBdEJQnigHEUi7QP7cLFeKwhL2U9AzMofNxsUgpeTxJDMLnk2DzzW7WVhP7U3",
  "key28": "2K8JWzyEE3GE6P7jSPkP98eZbQiT9ReugM1nvGQdWnUzajnVEysmN9NJFMPpfH6qz5TjwVHpn7YdmqppWqiub1VD",
  "key29": "mUDZGLzePaXc8VYazoHjhwpF1ZZKXm6m7uv4YqhbY6usZbwD6SehHdKP1E8hhbLjhCtoQjUrxwN4xPf6PK2LUFL",
  "key30": "kFQzGfGcykR8ZkopFaVLpbEv1CqXQfdkqMGao5jPoAsF63NaBKJUALRmzvmKKFKBaZKP9xF47KXNts51BLFXHd5",
  "key31": "2QW2rEyb5GvMSXxkbwxUPFH9UCyofsKHW5xPHAHaBdwfucXdskBeb8wd1QjHXSXsCf6UN9nLNyFKDek9NSqMJKyF",
  "key32": "5occJW626gutdNxj454C5XMbSf5caUJ6wPLmbyDsqDEK14Rr2zeaexxzxsyoLe6PHkHFo25PptB7GP8yJxEpuF25",
  "key33": "5MsNQ1mpL4ApjeXnHCbQS1fUdaFfZK74NoCGJKxBTD3V2ggj45eaPoPDjuDRbjuifoVbRN7zWb9zEWdVkR1N8LpM"
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
