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
    "5ky8Go5VQ4EBDmBN99sr4zATE1HXV2FrrktKmjqDJoeJFmKKbzzP9wJFV45GiF6kNLMs3cU7t1PhH7bUXcW67fUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLSqNtoN5gCrwRqEFvNHdmby34UJfFbGvuHxUdDWbXu81WmJtLVoZeWTXCgNFYwELakZcAxXTUz1yru8dWnGC3U",
  "key1": "5WtTbNinS5L1Gw5qUY5H86SBNaKUBVpVMWmGHLo627gjrJugWynA67Q211UPYE6TLxf5sUr3zPZb9t9oWAfShRmt",
  "key2": "4yNXSiQw3LC2FF7djFsTCjGFC24p5FHHz9m6FKRoc6UG2KRzsJygZKKf27SpYsyXtW3DoJxCMoKXqQ41TXdUwo29",
  "key3": "4AVfypZmaEycUqQUZMikLS9gLD2W8FqLj7GLmFsBcniY867shHvrS11WgVFZnuU5pgUFq54Ty4nyork7bQHjDx3x",
  "key4": "2d9MCAyCtfgcgbgzhECSRDoM2p1h8sriujGpfFuCpRxfACCFf83hhG5YzAtfdwX8okG7vvzKmYareNQ9qbZauvDg",
  "key5": "3An3CfiGMvtV54cmRcpm956CjVcuBUqPDgPwi26xrDBfedeo5xzeQUb3tpzcU9cZzAUAaeEXjbUmx2avXBmeWcn3",
  "key6": "4j85LDh3GQcTHgMAnRA24Macm9ZUpqNPzH6Fx91SAsCWaX123Pfm3Kt68SdgVaMPjhaxuhpC9ZSNveFkgE7epT33",
  "key7": "47CaMdpQw4TAtfTU8mGZBscdsbXrqwhV7CRqe5wWbZYFDfGNakVidvwbkRtUfuSbhdreGDd2fTuwtZrjrD6Hp3su",
  "key8": "61tQtksXiFLHPPd7A5jWxZBC7stQi1jPrZ2FiAYbZ8KrY7hTSmQbts2EwiCrAnbLyeyLHXCQgzNtnrmeTX5uZxfU",
  "key9": "NP4xR9t5URQsV36BXTFeEnxHwKbDpMsXv3uAJKMRpxKXa6Wr2SEJqvRwWG8QBtiopNeS7Fmrri681C23gxAYkh4",
  "key10": "5RSzVG9rkJk5k2WJnfYMv5oVq34tQeDk1zQccop1HE28Gu6bmLuQE8EzUgg5GVJjYrPZdvupfMsjaz6qENGW59Nk",
  "key11": "24kdMNawhfcGvMJrPdRqwe8hgavvz6tL7Y87GUwy9Y5RbQKvPuL8Xni9FEck9n31AnkkZjiWVACnbWZneiqMnLSf",
  "key12": "ZUKcEbZiH6G15eQ7zyPvJWr8E6D5834PTwF3AVQAvyxiWJMHupovnTSvergNSuU9JEYsAMqQZ6G5geDNpdCNbph",
  "key13": "44cJiUn3bUbCUBwwxp43bMVQ5bbyNcU1Tj6L1ZLnu9w3tPcWs5PZq1BAKMSmxbmcT5HVd7agitTCECPd9mD1J1Cs",
  "key14": "2f58YfRz2cdKAeiLHYtqA66kbc6Upy45jVn2SFdKKbjWynTTmzYHCnZuM4ZFEkCzG4Uk2rLW2DYDMAVD5g134McC",
  "key15": "5Xq1sTUap7P17sm5zosPMShthAQwWr8KENUfcDX53c8VGhtnUCKgb8Kx62MRai2C8iqP8urdt6WsVBNfRMZEdwqH",
  "key16": "4AVxhEGyCXNzZFtoAUqCBJcyKZG1FyZu9Qr6QTwomhHWQApcXyLHKq6yFFjWiMMuqPCvqATgqJH8f7zNCx3bGuEW",
  "key17": "4Lpj2Aj9maWMpRJ7QGa6shDkjoeK4A4J3A1XRNC6ZsxSfqNGX48AB7wZf7d92vfDZ3K8b7PRC2nVweVT2SFHopFv",
  "key18": "D8X1C1bCe4D8sTzEsNgRkHjNApJVpBEccPVvfvHbMtBMsYZnzPq9yy1huR4t2haknGuY5ztdUN581qzT3zEq7hn",
  "key19": "3RKY4NdmaEFFhYRSwfaXj7mTUBsFT7Nqy6D5tNm4rrDWZhtKoF1mUeQXkyFRmi5TrMgjZSUyY8GrMQ5J1ik1Qs2T",
  "key20": "5LBe1aNfmPaCiULLAMBDJZ7szgXPE6jkve4npwjsJu4Vc7cczM8B7w54LCunAXJTzBpUMKNMJYitR6iWW6SaQgY9",
  "key21": "3SGcyr2TkS3Sh2YTEidHeFUQZTVDdA18WsoKyqzX5y5n3NG532atEbwUrpoQ9V31FQZ558rhjKGrbxnnoSZVVRwF",
  "key22": "3g3Kfg3xeyuSm8FVHTTHfgVbkAP3mCCrjHZWixMeKwjoAd8f5GGBd7QvDRwvoBsvNJTWpuQ8McyQYtLk9jnKHNby",
  "key23": "hN7qoXkZ3GV7J6HKHvQGiZyKSfuPpjcTyYYf8ZUvUn3C6abUGu7jcrXY4nz4EC6hncmahtZU3Z7BmwVTEnrn4vG",
  "key24": "7eLZZMBcYEdZBVVAT663xSKpBwSMHY29pH86E62kNqChcKXPZccymhHUuWWW4tFxd7ZTzwPs9gj5F2nnxdhfcbJ",
  "key25": "3QjcJBZvQ3zGTiXSRoPEBX2niraptw8tzfGgUM72Nw7gJEvJ592Q2XGC7mfQgeBgjotoUCvs4RXihLyTp6uCfT3K",
  "key26": "DXTuFVxUMun95QNXJyr8HZWuK27b6DgwffvcbYQ5PNvMSSJ2riDpZA7NPYe3T6KTe6LQj5UjafwUtkD4tGWDdqQ",
  "key27": "BNJgoyzS4xaTwarNoETJNgR2tmp4pjTT9UzqC28JZzhgu8XEwJhzhiPGFjqW9av4z8JKCFETmcYvUezDrMVeveC",
  "key28": "4FpAEksBo5XEZWyBTsumjAKS1GawAZMGxhWFTUCfTykEfpmVSi7mJgTVQYgSBk64FpftB3njKscZJKJqVNn6ipkj",
  "key29": "47FZut3GtcH4vcusbUhsP85aQ8mWzun6JANqmyGwNPssQNrQucecKCKR5FptqyZ23YUkHVZs5KWMmzY84boAcBce"
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
