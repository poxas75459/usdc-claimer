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
    "3sbNKrnbFNyazYmkYan1dWyrwXYxYGzXz39r7SYVzbm3jcyepoYC4bG5RM6iWD4qWiGj4htYLVLzSWtFgGQ9kvd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDqqA7ywjBW7Gh2xyGCtegkJy9WQsWNeU9cUbJJHxsrqaxsnoHEgt8UGPyJG7avSro4nQdZSQkXc8KmfWo5F7a3",
  "key1": "jxbCC7wgx8XqyY2Baa5dtawyDx1pP1JnUVTuuTqi5xGUKCP6ojmgqaTfYWL8UbKVPiULn9TtBVEy3zgxtsmcfoh",
  "key2": "5yeYhSMdY31akxTzdUPU8uyhyEmWUQMG5G52HwJs8Kqd1kMi3mNVpRZYVHU7DcCkVSruq3GYynUZ1ncwCVh6qP1c",
  "key3": "AJknpSa7ghPqeNfVACMpyJcdkDGGmXFVNtq1ZtN5fBVnXPaKbMwiidndgx1McDebrgHfTeFy7EGM4KoyE4R224t",
  "key4": "2SwitHZ9Qpu7NNLtTVctSLVmRsaEqq2rAVUTzGQmUsgpiwyEQaPMJXJkoyq8EPdFAWYvc9vzt7c2uDda1AFuBKz3",
  "key5": "bu5YdMeX3EPVJ8K6DFBbASr5XqTwX5DY4TBbzfR3zg8frEP3bFTp4KnenhG19NZmfpHD2KGS7qrajUK3EypXMht",
  "key6": "5KVvTAHtExf9QwCeqtk3oXDgY75wj3MqzRDapTzKuuF29SuYE8tZfd7XJsH9BPp2TM1Y7vMYwhKVT7x8SPbrr6bX",
  "key7": "TQqKJQB6eGjodjS4artAoiPFpqkJuhc4rDdyDQUevn2TBP7qVUz7uNE6mEuwPADuorpduGsF8LspedXeBGrbC65",
  "key8": "5dQPGMFqQnmBSCjFHrEHkqtFZ4g6hUqZJqHjZqf8dkTLzekgyXdi1MNaaDu2gVCBcyrc28UALV89zirkqojt6SAa",
  "key9": "AKQ3ZJzkmJfP88wGwHbZ1dn6dzCnxAexhQnu7yySpnywsfPKG8VKhyVXg7G1KjodqAzbN4W2BaVp2iTfGNJjiB5",
  "key10": "3F8NCtW97PvENDKs1F2S6cnDxYH9oxz6e6e8jBAjYeo3zhZ4CtwWgRr7nQrx7V3JCYLRgBFhk7BfBN6kc6FqUg99",
  "key11": "66A9Vv8FrBLCs4pMTo9f5KenrLV2ktboFM9EZyGxraw3MB69Yjk1cVV9fChCAGULR9jdiADPseAUEpk7ax51BQ95",
  "key12": "2VVEsAdVWy5yQZrcDCvLnfnGg4QNgaZ2BePjTpHAUuUVJ7Afu7UDH13UScZ1rNEVDwaKGvzWZQSLgqbC6nq9G1Zf",
  "key13": "3unZF13jmaAmq6ozPUeBC3LDVvZTZFgDiNoL9DTXUaSo4prZa21KVu4uxCv8Hh6tXqHBjZ6t3DFTHR9X8sxkSX1L",
  "key14": "3tZrvRVSpaWyjjitwfBqSqtc8rnhbhLEC6ze6EJGLBPoX9AUAeQbkKGAdh7TLj44ndfJvFmN2tPdqgsZdh8MQnVW",
  "key15": "22PQu4PU9pMSAipSR9M7kP9m1ESgQCSA6izaDoRiahWWA28Gqk7BueRzrXN3dbTJYmbhSpzf9Z6QYvFQGPeWcrHN",
  "key16": "5DHT1sQDwpcpAyAcMpvpzwnFB8g2XjTLm33qQViSRgfxXMtDofdpQJoZLZY8dP3UtmU57teogvYtLhAoavs4m3gc",
  "key17": "414rD29e2DJr6frp5Wgi9xSzNLFB1ZhyjHRXkA3ixoBzWhrp3NbzfYLozatto7SfLtfccei5rXGuyxPkJJqthCd9",
  "key18": "d2GUsHrrHVvx8s8mS4jS25WWcFRRE8KmxqR9tYTR3MBJct4ZupvYdvMgC2cT4JiCWdJ8KvU369MmqKuBxScbepa",
  "key19": "2dZpZtfiPdohxjoZkiGFPjvo3EKXUh6iruTgqGYWuYMxno8tejHsUx1Lv356rVEtkfK4irVZCZKRSctLQ3T81TPZ",
  "key20": "D9JgVfQb5GcsopxHKRvk4s8c6qT1kcVWB8uVoYZpoUADRjheV1uhGjsvLnbvL4hZLzxZNYiabswCb5LXq6TCHKt",
  "key21": "5JiCEVrGQuWMWwHpdn9a5C6ajZCYzHsXPdM2YgKUMVEanjWLTRHvSEw2mVzRkgQWEEdowd4AVZCc6CyaFWTqKdPe",
  "key22": "4fGE9jE36nfLrZ1M7F8xpRRy3dttXxDbNuwkCStVyDtn9cHgTvaSeztGzVt4KRZzH2ErDB2WMVMafBN52TMZePHS",
  "key23": "5tPTHwfUZcQpPS5QXQdQsWBVrt9oxhGMd4PtHR9GDecdhomFd5HBk5DSLZvCLBdrLtmvEJ7gM2pSYAZNjWAFNhvH",
  "key24": "54JNnHSSnxSW1dmLLJHUDSyAWwi8HWaY2U5Mk39DCDyWzSwDLf5trLeeePFenHJUX88xyMNVWHh6oZERbvrRo7TU",
  "key25": "5yf8yq4MR6AAm6XsssTJXspJPGw34Hu9bws7SA6Afew5sg9MrJaV5vvrkV5YnYZgZrgjYjiNmMbknnf5GqpAvHaY",
  "key26": "55po51VXgw6qytuNnQCaHQc7FKGPVFbT4PMXh6UfBJJN3Y2Fw4vvSsQYKxJ1dby73QgNxjTdWaDEBp62NrEDfRud",
  "key27": "2PEaBg8uMo2EiM6vYsYjx7nCM9dzYLYNDaS1vgwhhBfHEjLFDGfiWUhHfHbHDTcPXgqTa3GgQS1uUmDAY5WHxdiM",
  "key28": "bttfHGsuwpqqaacvuWquvDBRX1yhmhE1Ri3amfV59bSZucLH9gEtuTHZfdBkBbrNR7wCoeQcSGPbsMdX7mabUSz",
  "key29": "45yHtcYCo6o2cmpv6eWSDztGMCk44Kswm8vCnpw31Crjv5TbNZGH3wncQcimLoG8RV6j9A4tqXrJ4hbKtttB9JSw",
  "key30": "5BfkUGKYMB8pjWE5PVydphKRDrrNCWybjzpixkQzteQaj69bT3BCKqW661s5HRdjfqhitePp1xt7n3SeLRHHVz2F",
  "key31": "59XhifxuPNxAnUxrxgsqTwRsffCj9weMdofVFwLFLD81jVEvy13SVKV6k3mBdiceKgfDywNrQ47x75fnas1S5r7t",
  "key32": "3GZS4J4GE7G61icbEtnTpRCbScVpS55qSyG4aHeVAkvhr7BBqSJMAQMuLUjeEJQW7apvxsVrVVDVXgPksXNipgFo",
  "key33": "35bPoQ7qC4wzU5FyZ6NxifcJduNy971UtVJ93TtSzuQ7fqyVwnztEARrA1JAqG9vbMwpMgRiDYMwS3AQtEupgzs8",
  "key34": "56jqoQ3rTVbB26mXvqatseQkETeBC8gZB5FyiDhrf7YpdHRM1jjsVRv5y5AtR9maRktRf7YjUVYpfkgT3QFSXQrm",
  "key35": "ifmuKgvgeL3Uwe9L9gHdJ1mtqNQdvvHtnEh67GULVzR1YbTeUyUC8b9EBLuLsjzYVakCTqQ99Msth4tttVjKkJE",
  "key36": "fwqxpozgKaP1dyTZCPaSTehuhLRLz3JAjngpTjHGHJeLaX6TsAEAP94VfrT5MgDGzFfpbxCPrFDKJgYoeDNuau8"
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
