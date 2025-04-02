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
    "NcoKcfhxV9tWW2FQzoysfyh3vZjKTnJVyyKP1gDig4HiaUYMTUdrP6JnWqsMseK8So7JDHVHcsWLp1uhkM5hsoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EChjLBBRdGQszWpA7aUaFkc5aXMLUCPECtwqBGwjumJHMZ93CDxFzBqZkWivG3yD7JBbYKLFDDTAQw5Xviq7T5i",
  "key1": "qdGwi2NmkaMTxz9FbZPzqf7C1cqPizKinGmih1f4UBXAiv2JrnzoHRVSzdYaX31NE3aBQG72gK12dhxcYyWEPpk",
  "key2": "zGMXPPdVco9sZ3kzUqxDt7GodL7f7Er851zHefiQNeRvmQgUBaWtbSiZakSz1tEgjNdhrZ6ZeuS1j6P8NvhMxdA",
  "key3": "Hzdwp7QEU4Z5BUJFtzTCgousJKwCEUtfGmfr9qFHDqraRXXR6rex2mdugXQJzxP3R8qcmxAexdzLM3ew73zsyKr",
  "key4": "e662ZH19G5ECscJLsncwXGxthip7KTDdEjjAPY7sUyx6Srqkhtz4FytHQmy6K2eogae3nmaVs6jJ14fJ8GXyvkD",
  "key5": "66JrBJ2LXTpVyQVwaMzLyQ7tF2TVL18eXeKmG8ADFKBkedCV7ngARwuEFk45yFqFgrsvmVZimg49sHgkMt3cDum8",
  "key6": "2FSSUYXrL1PxHtEHgiLfUVxJTaUujv7yZ9kJ3DmvPtJH5b5kyBwuhvswNaXk3RHByvVLrxX38NCuWHdVnDob27H3",
  "key7": "4aTstVN5AJscs5NW3duX5Y6SAYC7TqywhHPUA4BFxcxvbn5VkTp79GHHHp455eNsaBqKaWsfe7Xt7sxTdSLrUu5V",
  "key8": "4svNfWqvNoig7LX3KxPMG2spR4MhC2caGVwEeXbxKbaLqoT9ZciosH9sADWGNZeLZbAuAwm83FL5BBRZYmXXmBAY",
  "key9": "25FwzeaiCUG3JrYjKcYvZNsN8jXWcZsVuDnNmSQykfpbs9csghxFF2NeJ68ENHp4u4e7QMfxfwaEoe9ApSfwRH2x",
  "key10": "5DYQCB2RVbpvpkHVWAnk2hvWskJKKwSgj47ZLoCTSSHFykKKw6wiHYhTJz44Ye7L4XpjgwrpRq3TuztPgrgCeSVG",
  "key11": "33xaymarJPgzvnTKuWb5ryeSVT5o4jwdwHX1UFSubn3WEvgtXigCQPnoFQfmxYMmyTsJAVkBq7fhhirppzS9ZQMY",
  "key12": "4Q8UKKJpoYzWgekbg6nwreA9HMwGBNCuVqZTMj9CWFUEzgQKFNK8bKac4MrJSbQko76LKkdC4Pqyyn6xiSSyjpa9",
  "key13": "uEwND5QFezbFDFF6oyFGDd64bpi9iPvF1cZigyjqY1mqcznH9qXBTT675DnZDqRAGFtomBAJgjoVPmrVJR3z4o1",
  "key14": "589i5FfZNKwUcrxedWi9RdTdRUKPnsL8jXuzVMPeXvFaAw8LHcAPhepw8UDMQ95MGmkS1CbDqJ1RuTX3dZPH5asi",
  "key15": "4oVgbgnfN4wERdD3KLpn666JA1vLy1Ve1G2ofaboR8xqFmQffVxYtPvjJqjT9HKU8s4faTeFnqSmS2t2qRczmcXb",
  "key16": "5L3EVveDYMvHvapNG2tZJJz7HMj8PuVrmEALNnXaeWeAdCc3m2Zc4Yx2RkM5Vff56mdBpPD2cstLYr2eGy8RAnGy",
  "key17": "32kndTHyzJBmjBpcKEG5XkLCE9KrNLiunBghM5GLUvjnwX5DwKkvjuwaEHWr2JgvyrfpQ1NJSPeMCS3uZuuC2FiC",
  "key18": "4x2ndfTQoNtbVBjXBcWugu5Qze9yZL8r1XfCPRsWJbFf1iMKuK96YzbFyYprQBVVcDiARDB9ygcki87fSHhfReNT",
  "key19": "dC31tC68Lgd7KuGbftMEi77BHmb3QzPWnMuh6D3dBYh7GrubAZ6FFyUgQ66iSc5W81TxQdQv4ejtdU9r4But5SF",
  "key20": "ddFHCB6e9riEzV17VnDLkLHZwFox4HbciC3nbbH8gaifAyKGzCFTD79fARu8t8YjHXMPazULHue4Uq4WnjcvSz8",
  "key21": "33To7j9XnBL36hvwaGTkMxmotjREeGmMFzjevmmiQdyi7rA1Bnw1e6uijopdadApWmJ5U72MnTLRU9Ygeq2TQmMP",
  "key22": "4c536uq3fDctU7WcAgwA2fuV8dTQheUyynnUTAVrDNAEGTYZ9NBDteuJgEjs9e9NUG8y9CLV3R4BT62swA2En9Vr",
  "key23": "35JhSX8x6LvUf8TjaZgyS7dUz4Y4taqvDUp1v8geLApjHkR5h56zRCAd6m4J95srCSFtaurFbjNZrbpmVDUNbuLk",
  "key24": "33Bc19fB6wYTC2kMGmyy2f5GNZhy1WTDuRMeN98rRYHYtdkD3NWLNN7Ntdyx6SoLNjiyZUUNdgfLanjA4kWMbmqx",
  "key25": "Ns2NMaijCGgRsanjHFL3uGTS7wTaodRUSA61u8UcPeo374FQMCru5Qj3cgx2SU2wgrTNahC9StompVe98vEZpUW",
  "key26": "GrPtRKavKVQJoHCyGB3X53jdUBpqoPWAjpejf8vpGRvB7FDrpbgehjpUWkFkS4uAQb3Ks8XsBYMjt5bqrrM5wZD",
  "key27": "2Fg7sawkhtTsGkAFB12RNsSKqx9aVkR3aPb1h9gQhGXyLYcD4mf3pZPinDoLoVfmbV4yZVwVQm3yZez5fw6zyFHA",
  "key28": "5F5ZkrruLY8GLbBWcRXqamw5qBYK9ukd8NDkoKoh1B3Rd9qzvWR7LvEGL7rVevHcPqwBVxEuhe4S9LrKo39CwJWL",
  "key29": "61r3DVQRqB6m6r12DgRpXPjWWN6dk8RzAcxtTA8mYdr9mqqFhapcNJYLZZuVYsRmuEHtxvYUFcdVENJvcypyd9mr",
  "key30": "475t643NBdoq5VQqErJFf2Yg3uqxytSqfQYZ68q8Nr4HZrf9nFK84rQoPYprFkchHVZTYZUKvB52NBBS5cGMVFeJ",
  "key31": "31vAx2vqDyMSGFfgFAeowsvbRLCF2FDAW81EZfApHVg3Zh3KuKEnWzLZwNRcdJ3csfqaukPYzxD46JLNRaknuAnw",
  "key32": "47XRrykyMzruqaLLidQJp2wu4mcCZ8TocZsVHxSjvp1WDMgZ7RsSVwAmhwBbjzm8FNrWyT5VCDPsVGK1BjDaGdNJ",
  "key33": "2M885EAyoGDQ9AwLrmHCczVsWpjSXipaJs24u7DLmFurqt1wwoxysSAijQ911rbzUuZdNPffXAp6WCBrKo3UpduN",
  "key34": "2csFkgtRfZBm8HQq9oyq3n5j7SfbWDzCrQTEnhMV9oULzCmRQjnSHAvbmKHtVrZztUrDBEXU47AJq2tiNJLBqKiG",
  "key35": "fd7mTkweTDmP94FBb9kwMGFnTyXPDcnq14QXwirEfqBEmop51JV89ZRXg5ddv8oAZU3FtaR4osK59VBbycCmeBz",
  "key36": "4bNxd7M58oU4gqt5wHwbWnDyxR3AZVi6BjHp53uaoJWV1xXMK5Jg1UQNfft79w7iMAuscQ1p2hJ2BQoGdnSj7NwW",
  "key37": "3y4qJZ3KV9EZcmDqJs2h5xBwY3fx9RUZspo3xhYvJ3kDMF9eP1USVUxwu4wtBqqJvoHdpXbg4x8Uy1wiPjD9NSMt"
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
