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
    "3BsakU9E4hdsAHeueTnPAv329HzePYyPEWv9dj4cuWwatvAYh7mwhnZGMwkhQC9VSziLBUtmj7VgVtnVtBPmjUU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTF8fzT1EgYEfHXs7L3SYXdgpthc9Fo37A1UN92dsc8wm3C2W9CL7hgT7dzG4bcXaUahKCeTmV6nMoQf87kQmNw",
  "key1": "UgcHzYH3w85at5EVmNPFoCjZr6xwJxTNiKP3uf39LHof1USHX4AsTi5Qpfg3iRRwrho9XMTWYgkakdeUuPmTRfp",
  "key2": "64zvkYWvfT4WJSjYvXBEBLk11sYjzjTLGMXXYyNNgBNzCTXQf58m4rfoU96VW68NMorK5sGMmLU4oQ8zGNNduik7",
  "key3": "3U2hxrwPWBxV9eoCoXtyQHDtgHAAtnkmdpfCg5zMkyYK6At8MLbK1QGQuoXDapLeKVg7X8Qh1AtXf1kEx4gsogZY",
  "key4": "4Bp3ANXtvhXWWwHafxT7h7wS1VtHg9LDKV2LevLU8qZhsrRBsKbQVReKVprjszYNjfYW4B8d75XxjqEfDSKN4ci5",
  "key5": "3v6qQSytKHRwUP2aLPJuiaM7BR52eKSHB2KTPdJ4Nk1eWmH7kpK6gzzpJsp2mEUw2s4RU8f6yusjn22dJNCJEMbd",
  "key6": "4LJn5mtKSf2mBTZVJitV8RwjKShCJQAafT8zFb7P6DYGrfpfrrCn1BCJqRvqbTRFFNwVD5cbKaLUZnZaMqG9qodQ",
  "key7": "4LzpMvaLU9Af6mAC9nW7F5qyYmjSVbfjaVAqpMLXjhfp84psZxRVwh7yjiw8bFQrhfhQ53ZMxC4xuohzXMgfyNCb",
  "key8": "3jzvFHKLx6EMDUTrBxEFnZhW6bwdUKxkiagGoZQYRSqEiP5hUAcFUkvGh7rBG8xn7UqFx5zJZdf467bduBUQKpw9",
  "key9": "2wtcH1sJBivovy1XHN2cnGMh4W49LM6ARLtn4VhxqDEHY9YUSGdwLQxonemGWiA5MQBoVoEG1QVwJtQDxukqfRP4",
  "key10": "5WWj265Qm3ikhnpER6eEktr1JBTruC4XtExvdPd7yZcejg6kTUMNSXg18NJ5yRqTXfoDbTAKJF3ZrVXnsECHh5hq",
  "key11": "3g1PBZymxAaG2RWyvu5o85vG45aJ62gbL8FYjrDBHoxjZ4H133bseXAZmnGuRBqh2mHMqbjcFMhyrUCZoK3wbM3r",
  "key12": "5gZ6CpbqasMfsKxvQTeaNWJnHWaF5YU1MD5pT4aypGXAzfXB8RZHGyFqz3wtHXnP2SQDDGzSBXS9QuB2GBp8zJQ9",
  "key13": "5vHEry1sjeCpDcCmkFgtmoNX9UJQBT3H8WU1cCisKxk3ynf6k58hndAZKzMERoReYZ12y5LvM5epR7aszZqYPUPx",
  "key14": "5jkmoAjWMB8Uuk7kc1hT57huxVQSvEshNGAYWHy9PBPB7gZhLZz8HqmRdpNvDFosHVzvyCr2XxBFcwzDmFk1s6Et",
  "key15": "2AJs3D7pwMLkWAWbi9nwMTbh6EWopBg7cpynLterPzZYecWqfQZ61EuhNdVkkBexJX87Xmb1mRovsBxcyABC2e7p",
  "key16": "3eiZTvJj7Pr6C1KMZo8wzeMvcDTFuyiTJyVUJAxkfKPZETmtpveu32TQFT3PgjxCBQCPUCh3QxbBk2jJbbnXzaLb",
  "key17": "sXbKShfU3WbM12EfZ2qafKrWxYFSwYdfFBBBaM8aDhejYBuASfWb8qdNXdPeZaBgCsfT7MBrB98B2bTAsU9CLbc",
  "key18": "3BFTfJNdZB5XrQtTZ7uYjCjB1SKYk1bTYPtU4B4rafbvH7j6YvmKnHXTodF4hGkfjtDRQGMngQ93FzjzUscig4XC",
  "key19": "5B3grX76LqTZzcWRSyeQyEV1nNkTTquqZ3N8bB3TtwXc5nJEgUBTdZUhKKqoTYHM43cUVknp8WpfcxVCYQoviBk5",
  "key20": "fuuPm3rKLi8q4BwK1sp3GFR7Rx24abDJfiyZPAkj9JyB4LatK5Ma6iFz9dRk6DCNqCu4iRTqV3fzumrRvDv4Hq2",
  "key21": "2Au167nKVKkU3757KZKii4FEg5PZAaz4jST5fQXU31227aGG235FAYkddNeJ9aqyDJGXTR9AEVGzSf9SMqSWew8t",
  "key22": "3N1jSUkWbjNxY7gczKmRmyn1tamhtDzTVemLAaNWvjmxP1Kin4JKx1tZpK1xMo6LBYd3yztMR9zaQCLYpjZL9atb",
  "key23": "2CrtQWZZXQgaJtfSdBBfuGnwx1eFpB81CpCHzdxp9nD89dTrrS18t8MCy5FNrLLEz4PBv6tppetTzHjvx9wK1xie",
  "key24": "2WqKdPakZUVknJBLpdnFaxfmSrSUHMbgCqKYMRmKdj2c9f2xJrb2DsL3tH8EuzvuG9BMPW6CAJQAHxhJpvFiiCrQ",
  "key25": "4ZB9nFjAXWpKTo2dRJ7gorve8Qs6qzWVrmVhmyVGaYLQUBwRbSqoaG88afqtBy8o3kYyLpVGuBGPixDXq9tWaKoR",
  "key26": "3NFTDwpcY37C3VJ8jLbv6YY3QdDxjtV24mDkV14uNdB6EHRWeEoD6htFyn8NeJvaHXSWFwWkWPH3SJPy1NY5ALvt",
  "key27": "6JjyRdZcK2GpCswLnMiaddfE4nLo7WEifFQu9HqroNaSZA1vtHXCwwrMgPCsxYVjxwXMnggsyDDiuu6BKKTFEZR",
  "key28": "3dXAgG4pKw8cMyo42m7jpo8zWTpGqjazoqSCe1vEvXHpBDJfvvizgjP75mmFLhKMLb3cxiSqNeAxEAHPzNtoF8mZ",
  "key29": "3Ktib889HWznyCBgyUxzW2sWWc3zLkkstg5Qmq3hTJVh6K2qD2fSvHoPY8yvZJkMfdJGzfke64a2vxm7jztU6zqB",
  "key30": "55hqntVFhTKDdwzPTV8GaouciMZykbhSyAXqTToFDiG3YxqLyYr7rDKDTqscPWr45AVytAo8pkW1UJpc7rogC6pu",
  "key31": "5u8W3WmAw1hzkVScJ124mdjN6385Ds8sHsY3FpQAQZdQ1Wgk2h64ezcuhk2zhgh9XdypCJ6SjtT49TcQ7Yg66kHA",
  "key32": "xWd2YyMnuSMhfq2PfQ1CS5Cx1vjbcN1TGfLC383tdgHCnH36DcmYzxtxRPQ2R7hJetXD58wjnSGFWrkRDXwYvgS",
  "key33": "uADRaL8bZpgMXDEXvGU6WARJXF1AXZVAiN9RzBonjm8fEbXWS4z7WkZU2k2hd1yFgqn6vNN5LQ7z5g836wGxZHr",
  "key34": "3W1Co4Gz856HE36xVVGQadwNKSLt9H4ubZ2FtHpgxWdUYwTsvrJKZY6oNbZ7BdJ75EfiBgxVNdugfPV7oac2uqmk",
  "key35": "2abkzrfLtSEQ95fSAZYkHji6NHkvuCSqjfzm3ATkaDTreLAasuAmJafrymRs6qqUfGdy7N119yESm5iyV4eko6pj",
  "key36": "9orA3XXAUirhtsCX2YUfKKjWADgMKhFfw1L41ndsKShjegmHwkxhuShVMQDzCZcaeLC2aSoDUupQvCwR79Ay1W3",
  "key37": "tTUrZjEx4e66eb5e2ub2twDQiwFaDLrk2BkpKZkKcvFi3eEZsbF7txLwYtyrkQkeUzhX2zYXLaSb96KRoj38jJU",
  "key38": "4EPo4WLjy6VS7YUHUVUR1Uqcsp9bMAsexQwmrzH4kRTcH3GAh4d9boVvvHQMqzfUsx2dPWnGdnrRGrCKwHT22iy8",
  "key39": "3p3uiwRSYqPnAJomPJcYg6cMFKKZLCjsGztwuSz9i9KdAZLaZeQ9qT2s7d1zMWn6HyiR1QiFSKcifq8fc1TJkgxJ",
  "key40": "2rYhLVxxF8QDyNgbpT8U58KsezF3wpwvkyr2rVwJgX563TkGa9tEGVh15qe4aY2VYAuWgmg3jADuGJsnqqttcW9g",
  "key41": "36xMBmD31FpuTH8awnmhN6ZNjTc1UxekKMEa94BLEZrND14dsSdVfknbZ9SCzLDuUSvf26iPRnq4nHenVqWmbDKv",
  "key42": "35txYJg1ooZJboKghFkVRsQ8nyBc4ygkABCJpjSBxC9AMJ8hFqpjuXeW2AFQo14cWeiP15tr65KuCrJb4YRFRDtU",
  "key43": "3j4WGMvsYomdSiFMykCbERekpxPEd1uQQMTGe3kaAELaxizoG3Gx279kyba11g8Z3gVUw7GPB21vSoxcRworWNJg",
  "key44": "2QRJjjZdraZiqq9AGZsTyWg1adK537L2hM6xyg5JoMGzWBmGXt8X5maYB4fdhefWUnJEKBoh4yGRSi3tedn8ZBfD"
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
