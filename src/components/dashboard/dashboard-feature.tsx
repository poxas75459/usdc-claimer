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
    "2yQEynM4LoJzGYwgsmfJcwHyCCeAom6FEW3X4N6Lb7oo42zEXzjpzGZ77Nf2pUfuyDjAJtofinSYg1yn1SMXYACi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XVDtGvSudTHkP9JkXjpcQX46FSRmx7K4qdj7FwV9EUn9SoeTw5pcsmKLnHDDK3s6DTVR3GAfssvTEHeuoPTePF",
  "key1": "2HWAoEDhN7RVoGvjryFBGsUssRbvR2W6am7VN3B5mi1XGBpUzmYR1FH7sHVDadZjN44V8ZyuDoKuUmVXXpzkAndV",
  "key2": "31nvVJ8wGji2ppjVHdevm7FthLjQdRstoSbnWcf5TTqBZmSzdgSAPUEodq3syeTpPgeEM5qduFGmTi7vefSwSdYB",
  "key3": "XuNqrww2Py3hESs7QwMbrDNHqXcamQ9J8y7qXNfTcxiDUgLPEXMZ3Myr91gzMZNB5gkaBa1KHx7zQf7oG93KaWe",
  "key4": "4Ey9uQXLcJ3bkdKT5sqEDg3Tv5KZrfBu9RSXxeHjQH5mvuZoHdo8wVinwn5GGstwk1SqWXZr1LRxJEiwXfkB3pgX",
  "key5": "4buSURUb78Ja9MKoyk3vYEc6PLXNcctBgrCZnJqEUe7J4vmtgz3v2UF8cEmwikXPtP1RQtFt7K7ZBRhYiFXmSbjw",
  "key6": "5PSMmGP1FyjdxzG44UctBMByFSArMEJDtgVmpM3mAQ5XvdKUNc3DTGihMLyGVs8pJNsvYoBGiYhHj5NYL9kg23rQ",
  "key7": "2eb3NyPfctpSfH2b8S8V9ZybvCNz4RYT6wLXKGjQahokj4TZ9yQoysMSGUmEVmMGVKp97NkhAsrQDFfVtyUBELD7",
  "key8": "5G5NfQfCCoMcZZjyavMckvyUJ56NciZUHZHYS1rKmY6yFTsjD7o6i5EH9nYgVAPk8bepByVuzzWEQwyRz2MXa3Fo",
  "key9": "26VgwRKvk2zzUEQ8uzaHiY7GGzu3A2AxXLxXutEFQgfafQjQ5sToXC7wPgRBWAm6kTWFksmt75mkmtHRvK99enzE",
  "key10": "34Et7JD5DWXhtHqbMe8B3SaC8ejJuNvZPN4tfJGd4DZxGzSYKXM1ngTFxTRsLmM5BkGpRvG4UyqtRENA2u3dUMKG",
  "key11": "c2JAt7bHstrufvaneNiBWpnbYg2geUfwV3uWsvJQafaAJUxmE3s81xqpuUdBv4vBhwUQ1WftNQXoMg2H3pxGFFr",
  "key12": "3b4bcErCSoBzjNKxsR5kbtCbdNnmvRAAp6BhN33D96gq7RHzEnRqiBmXk6WrHs5Qr2MzyEs1GhgPCWk4vdrrrqwi",
  "key13": "3uuqiaxXtJrtG3W3g7qdxjxdNaEd6EiCLu1YJ9GDHzKABP7b97Hr3G1WVPRkBDTRUVVePSEvYr7GM7ga6bafbVsB",
  "key14": "5gQv3HM3zavYZtGCcb39651bagffsQ7zuiwPHVBYNDqzvn15K7mc3DSQU6VfqEMEKaFHkqiWB5gsiWzb15k77CBV",
  "key15": "39ZbUXLuPDupT2T9anRHkRfRn1gZRLj9xb4CcUU8tKYy8CSjixbG9cbf5E8K2GhXiAzFuE9PQwDHwPY6An1CFLQj",
  "key16": "4V2B2sMEoJZiyhNynD5c2y37gSgS39bCMDdQMANLhh86onn7vhsTUnU7A3pf7C32dsJg9EqXa7Dw5t9b3QxAn7qw",
  "key17": "2ngrKaxeG5pSqK2Aw4CNVFrn4XNnipYZAQ7ok9fhJNprEjiixnW3zEb73ckgZChJ4CPrVFrqNTCpsTwP3vc6TDLK",
  "key18": "2g1kVhf5PivHXSsqd58MAMRo4YMACadtjySMH7UtxTB145PfHE7mHE131XVHxkvWCVsGLwTTzMnNRxyrG48oGJse",
  "key19": "61NcdWcWC9kwjhyLPeCbgVJ7kQYrkFHbAvkY6ojGiDJpXQwecLeHmsZ2qMVfrg3bQrWQCPWbZ4ZmuYqV5yFFtnEi",
  "key20": "4jpXuHHvarjY5Ues6TqBqa4FztBUp2jSMb5TJ4gnfHweXLx2s4PMbVZ9gwHRNjvqaikfATi6fZBjZN4nsj95d27T",
  "key21": "wkNyWRdcLRs6VYgqSMfuUxSyHkEyEVfQrVRePUsAq2o7AG9Lu1T29TWS5hsTTT6oEomwtBSDWGaNGyJHTiVzY9i",
  "key22": "5XF61ifaBXysj2zquPFovNk4CMt5oxXKzH1Ysqd97GS4ytncXBQ1vtZVa6QFrwcNsiXjEfyvT5QYq3L3TwpU4JDG",
  "key23": "43VqbZepPig2z2TwBJfgR1FRdcrF965qNaErPmDcgzAuW6fqHN4kYtsZsFKgr3RvwMPcTGcCFpj25BjPQdc6zzYX",
  "key24": "62BtSzckHyWJsmoSj7TTaihk7dmTHf6QPsJr4YViyCPFLFHG85LVdn1sfu5ai3oSoCw4VAsneMHDqwf28LiLd5AD",
  "key25": "2RBTqDBQSLaiXqXwQxTXmg72ZJfcxgMj1SU2LPLWtqZw5HNcDaoa3fw7fAjGt2jygoQXoNZ1qMfugb5VpncRZxem",
  "key26": "3VEf6kpD2A4YUhRorLvpJBQbXxfWogGtGMsZ3Mf6g2qJmvzShy9N56tCEr9SQZ9SrpWTWpDTmmPsoC83MSdHDEK3",
  "key27": "45ReGwKfVS3tQUv5amgJd1dwournGKFVXjHjHP7WC5i1umSbF3GzAdGqQZA6VQk3kHxsfuXKQXc3Z2aLtfqavqwT",
  "key28": "GVVZFt5Gb47bpyf8BGiBcjYXMeJ1AfSXxT6mRfobv9ipr8sUaBZySucPtiaCZK5hGRiTj7Rr5yff4FKDByoQP7N",
  "key29": "2XBuGVEZR8gCe8pW2saMEoZ1QzeuDcrFbVqmrS6cFc9ANcRUXkUWEfnffNkssdpd94o7S1uHMmkb7bKHdSwPdpU1",
  "key30": "4WNPgVBP7KtVCUKGyitkZSucTbt6XsWEqTXXisTXuDW5FzyuHMLi9aDRXmqsBzy8MBmKXFGno4CF4s6GSb2RhAcu",
  "key31": "YbWBdJHo7nG8sxr8EpEP9w1Y3vE6MAmTKJAHUq6oCy6QoPnV1QRUyJrMHQj2DRPanWFQarsz67y3WecWyYDU8FB",
  "key32": "bu8PjvTppCpr1b4bh6hQqfKP2gmATyBy9mAA1cbrT38wjh5cJgTUNmp6Q1NinfYvbib65TzVD5PadSc6gNNU3nH",
  "key33": "2HumcaN8PwiK3qugN8WnDPu5DsBahrzjMPnD9TQYQK5prFrNVKfbAGvwxi7vVghxBBLAQgmTQN2J5ceqvCthWhhP",
  "key34": "4Y4d76RqHxZEiUFp761jRL9ZtsTcdU51cJX9DQgeeWw5GnFap8EAVMrk8NTEx9bVdX8JJFw6oWMwozi3tydEfJVz",
  "key35": "3t3kGuWojqYZXVEQfnM2RkTMdQu89rNryKgthWgqKR2kek4KngufqfXD6EBpjzJex2D7V8QaW8mrtLTok8ELvN72",
  "key36": "xLU8bv68qqzGMEEiu9a4z2e6U9LfQbyQNtkKe7Mka3bcCe2X4ZBb3qNtr318yg72QnBw9soiCvgZoC872SZVmJd",
  "key37": "4rK8ciXwJAtLeK783nS2rmbkBNWueMV2TNFPVR9scpa5B3pgheJVLqwxUhmq36Sc7EwN5WQDkTvJ5KnNPCntfRMs",
  "key38": "3QhTD4ifnDsgk5kZ41bgdiECXt53zGho1kebQu11RzNfmgyY5Gmk9ePTvUU2tPxDYNbhet4ZhXHLaJKvfjShdVn6",
  "key39": "qm8p7oZhGfrVpXbaQfYFruZuPXp1rEeBQcTpnMyYLwFoMUQEkgkP4Qs4cQWCLzMa33YPLKGCqs6RpoSFfUry9bx",
  "key40": "2HauHNBAC4Li12Ld2YnCQhSDFeF3Brd55qJWv5PBqa6zTLjoNSZqZ6rCLxCRaMQQpA75hwPFZ4e5JLesXSMZkYX8",
  "key41": "4GMHFz7DS5YNSXuDB77c1BG5E12iETGD14exiW6kF1jYHADH8R4aN5sBXGgs4YHe2kAjuPUY9uJtAsb7FsmjdNG2"
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
