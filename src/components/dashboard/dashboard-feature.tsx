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
    "2we9KP22vXUauuXar1mTtXDMV79TeSwGUHV36DxaqcwnVa3UKBrSWBdw5EiFY3PGY2K692RJy53Jdq1Kx6xkMfyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApTUtHw4MZKe4Ttew2btAAUDX5ofq92toTBg8aEbmugsxPd2te2TmQt5ChNrRRBmV4qFCTwJE9qE2qLLVXK36Fu",
  "key1": "43DYhTDPziMkS5KV6ZaLmbVqNGbNXu4q72yjn3ZJadS3cs9qQW8pBQLzUXUJUWqJL5wb1MP4pNLFGRGYJe74UqD1",
  "key2": "NPifxxvtFG9wfGTrAbUeH12vBdVHVcvB1oGagQ7R3jtEbekynv9faKCD4DbALzqt2Wr8iZNUHJSbV7Z1xuNpzCm",
  "key3": "2o88AGfRS7Wh5N8UVfebZ2SPjp18neP5A1pBTHn2Dyb7crY7ihi3nuFcqPK44VcM4EWBEK8e6RwBqzFAD3jEYAMB",
  "key4": "4izxVdv4Q5H8YCi2iYq2LX2VxQ3r7dYHbCuvTFsmr3AkhGELQx4pVQWMntEhv9vA36FwyejSr92XLPcmy9pC8vkH",
  "key5": "2R125a9XSs9x1x4buDyA9Kph5VwneyVXrfHSxe2L9pnGMVQ7Gakj6jEwddEQr9wwK6dELWwYRAsVkVHWRp9pchWE",
  "key6": "3G6E5agZGvTY914Kj15PwcJq3LBA9BZZyTUjveCSuoHBf69TG82oja9TUs9Fo7pYgqpgFQTrcQX3iaNe3yAskUzk",
  "key7": "4qRooAbLwDA7SUHhBxahf3YBQ7wEFeEGPGT5MN55rarKfqY4iTEse4i22LnUBrxnKTEmaPiUx1Knt2c9cQtRpXof",
  "key8": "5Xy4MCWG4c5BfAaGhkZbhYJodXHugMxzjthPQ4YyuS3RrtUyYgiGq5NFtiz6YoH6yr85GvzTwpTygGQHzdmqGCcE",
  "key9": "5RcxnBWSLcdKLXgEtSaeUZXmWr1LDZZtsP7TuHQWaBpMJ3WQSUAAR8H1kKr4CcEBVjAtCXnEZUnERTuonFRfqeji",
  "key10": "5yoZzQQ68BWssMGv3UMNpdu3DVTmpeHEJa5WzanqgsR5uUW3F98cAr4S6WFEuQgbPQ9zDkzbYKBhU2okSPrdNNjf",
  "key11": "4bkEQDdMBby86WiTEFHbAQBE9WX7hrFDQEu3fbFyvMXBPiJW5hPpevtK4k6LpcSNZDcci8EgU2i3oYwgefhNQjYT",
  "key12": "2J3BM41eikiyxp6J7sFiq1kr2Rv3tdu8qvRZ1d7Gw7qeLjK2yaCAeEGeswbG9yAg455bgcYHUkGqrYdtAtdPnBSP",
  "key13": "2jHnkZsGcGJHdcY4FLbPvUpmiLSb9JKGzznnHa3HBGJ97ommbMsqCQNnQshyey9nsy6iwwbbeWHotmDH4RFG6u6v",
  "key14": "3w639BcFAWpy8tKDQKkdsas36JBUkspdEWsW6sfjuix74ZEk6aPd2KFUdTX3kxPP6YK5jwf9psNzB7iXo67Dosu",
  "key15": "3cXpD5GEbxUAH5FPTXF9QxHLDzmUyq2kPyvgJZF58PwpUqrWLdyR3iQsA33RmkkhjH7KpbRZ3Nv55Gth7Uiyqzio",
  "key16": "3rgPHkS8QLVVCSTHto1FkVT7kUGsyCacQe9EPfkn95NZ38cyBq44iYy6PJExkwtppGYNoqh3THo9PQh9bgGJQevU",
  "key17": "3e3acGdS4FLEzWWY6A6davkPKHmZdAbeqJ7jsxd4ugASRyovmMutDBpRR2XY4ZnL3eP6pfF6Tc3c356J86jkdbRo",
  "key18": "5pS9XWv2PvgXAXXqNb6cCd9gDadZWPZSV2Q6Zdp15Rm8whHao1ACLVZpszcH87z6sEu6aMkPvWJAKMxx1j89aTTi",
  "key19": "2EX9rdgbLt4ke1TimS774F65UTbx6CaDhQ42qf6muSHZmq3NbcJStAr7qh6zJwWmL7n6mAzqt5iRpsWLtfVzwWn6",
  "key20": "4DgL3vMYznwXMiLvK3CKTnDS1PUYyqDwbHN7xgMdxFtjWaA4VwRnRhZceJ71zM4FL69sRfPSyt8ELPe2kR6dfdmZ",
  "key21": "2QN6nZZNet6p89Ze8pSpboUKpdMdxEGncxGhB33Wo78BSdbSjjxTGygLdJBFfa4orbSSbJ2jBvto6ZNJp34Pwjdb",
  "key22": "2ZZsDJEVW3r3s3tHKibqRRFvZ2MnESbA3JuSt6w7JhARNhS1NzSwtNujn3NAhQDAeJfiYpKXBXjJTe17emPfWaRc",
  "key23": "5bm9CkQRqBZSFYwmqvz6qNYw4FoVYqJXyh2QraVTaSRvZU16aa5Hff39KgQNhWUFvQWwsZLeCBSh88L9ZnA1Wc38",
  "key24": "3hFwzU4UUWVfcCdo9SQbmS4E2V3HMiBCmG6MiWUu2wMZtAMUxWVXzSkePrDXas9SA6KNzUEZNCe8ycAmLFBbwYEm",
  "key25": "2Z1xqKcNWSQ85R1PcxA2YLuM8QpQxA3fwXRNohT2NKAtHVPrnp3Uwqns9wMYPhwbCibPfmbCYrxDMHzkiFyjhnrr",
  "key26": "2y5W68E8CFvKVrm2QGsujKowbfkbWWVCpBSzr3jbzMEuERi6Vpx9F1McrEuoXwXmc2GAz4A3aVdwvursPNfajnw4",
  "key27": "2Q6ESZzFZh7NobqUUHs844dia7o28SxPFraSutYQwpu2vN67YPAJhooQJo8hhp3pacXJmC648ojNQeCRa5i3dXPr",
  "key28": "3ZPLxAud1Mu3CNH9Hekjib8n1QCiB8aiZztnqJ5PMMqGtaQguY6y7Hor3sGx2dpCaV5FHf7WK4a25WArCVjqckaa",
  "key29": "3gzQqepX8V5vmq8Rm5vGs6AMuKHUhuL4xvyhGqx148Ld4bXyKV4rst8DgeLtXnjBSBB91Xoop7M2EfPYFm8AsoRE",
  "key30": "Fu8SHDSWrN4XDV8gBW87wp8DY1XcddLahCqUn7t4MENH2mczSx1HLZnxtDVeh659NbT5C9LNb3ngbvXq945fEFq",
  "key31": "HdQBi3AyJ5BWrFCnb4uKFUkNghn2Q6DsTkBHbVwDSjMmuUW88KLjQ7BB6MKZf2v4kTpJAbmiUvdJGi7VYfbjPFn",
  "key32": "33Q9erpKVhz3Pyo4QCW5mZ7zmR4T2rELiGRtPD4gnTqytFPtN4nfYBEwuRP6ayXFgn94PU4c3vz92Eu7fVfkDaHd",
  "key33": "pm9qKKFkF2n9DZe3uu8SSyFMwd3Da9pNYqsc4U4AwpfkZL5FQCDf4cz9q6bwmEk6pedLqdzxvAm1agJ5dVe9WBC",
  "key34": "5W9n3dxxWmdoxiBzfdMwEwcwD4TYDrzmkmdmzgjAd3nxUWDdLRTjHjhw9qYEfF49TQ72mKrJnvKRQXfhXdfcx266",
  "key35": "5rsGcQTqwwJru8zhNnFhJg7pqEdFwKtkuEeq3kKCM2dmNZZgujepWt6381F8DAUSUteJPzuhdWATRz5BfrddzQwY"
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
