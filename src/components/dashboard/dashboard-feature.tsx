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
    "2HjVphgPmtQgMtvsBMyTChZyAyhJ3cTCLGwJpcU9SVXwdhfPo4SGJbntUStUFNQUqGQQtWRMq3kpGUhxERACHbSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTQZUBL9w7bX3iWPX9fPa1e6NLrh5LzMUhPwJgpJJxHPMrGmdx1A8kqKMAsGnDfVJNM1tbexG6NYWiFyHmVLN7U",
  "key1": "67HxZwnvSDkBXYcmB4BY2gKhZdMQ5M7V1YuFq2YKcfRFjQzYbWiRomtzMLGZJKkHgPYwFurY49sihrxrh1cgMujw",
  "key2": "2vXop2R4jtjvcCToiguLURVFnS1nPsAvtV8UGwScMT3DKSJJv7u7Vjto2RK8wSChbCZFzBV5Dg4cZGFKyEUegxT2",
  "key3": "3Vnxm6WYe6JBnFPBuXHyf99HNLnRB43Z4cknTjxxAxoEZgJzm2z8JZ9p7fhMBXv84sSnuLmeTjpqy4NLUuokv62N",
  "key4": "5Wjz3EvBdYWVLNux7p5MK29AGbTkzUuG6Fdibkawt211hhWSdJCKNAv6qnmib8McbXFATaZkgrz6HVtMVRGGkYh7",
  "key5": "5SwFXMAd6k1ehZBkH57NLHYFKMQ8RFnwPcv8SzE6HgqdtcinfcVxS8F5zdBqHC7czP8cWMf6gJm5WRihuB9SDknd",
  "key6": "31bU6uW2huVb7pbCZmFgj6uqzbsuaVJPgCDiX6VH2sntfYWYAtd38zTfW7vyDKsooQvEgEV8GAMfuZ5JJNwHRKtw",
  "key7": "321qL9KHTcNVQzt6SSVYiGXptuyLjQeaMsg2AF3yowpqUu34HwXxrbGLXWf72A9S66muTALpPRvFVjg3pLEma8g1",
  "key8": "2omB7TTzepSnCX9kpuk3ranLX4UwnVJsp4uGDwbELHp4zQHwY1p93gsVFCgGX97R6k5fxCoGhrvjZYQMfdGpqMJS",
  "key9": "54RcFiLdMntaYc9kPaYeANXaEcc3yi9Pq2bH6E9FYz5miNtYzDgdvrrQ8AmaRhtJexT9k4tPibBHCfqS6rZExQTL",
  "key10": "5FaWKWSg52BjxKVGH65uqQyF6G5JcpHgkYUSJj9KQNZ6V3CMJo8e3QS5AwakWJzCefbpMgHCRpDpSAxSfLY4N2K9",
  "key11": "ddcoW5LehVnEMpusDPLeXsaP3pmxQTBbupzEYuKiWtKLV6PdHGS9JnXZagTjR24FimCRxdqaqjc3s4B8MJevasJ",
  "key12": "2cTsFue6XAbH6po74eeCnHzrKEQ2U7dbmcMcwf1GUXe7Z659Hf8fYthWuTaoH8CRVLq1i6a7VGnyDqXPwmTyfLQ1",
  "key13": "36sWEoTYFDn3v7CgasaLPJJxjqyJqfJakYn5SFUSqfpXBDVNooC9SwaiyBgwspacQV5cGHJf8f34JVRxmHwZivUW",
  "key14": "49DkrgkpsHFyLZSqd8s4QbtKLP1GDNrJv2jDLn9NK1gdoQXhMW2b73iT5kcLGmKPRmazmgSz5Ap8YcZSPDfxipgr",
  "key15": "5fqxXQeDuHnayyZRgwFzFRayHTESXgo1gjb28MGQeqSjFf6ZgFhjHjP7srMj5tMLzzDQFk2s29LSDGb3HkKUcWPZ",
  "key16": "4aJdt3gN7qHPaUddWPDJk2LSAiqQzBgGCF4n3oPZrAoiAjRtsg9EyiMN5CM2D6ij2bycMb8ZP65CeikGkrsAchnU",
  "key17": "rT2qoUTNFLFwLhsVgLY86wkwWDHAprE6HN6gwVdUj4fTCnrvkyhwD5t6JajK66n83EVXrwm92J9qCfk8yAYTNwZ",
  "key18": "5tQZQtR4ooTiFbZi4oKdc2G9P2tck2VV6N8zxqfNCfXEkRLjc5Gd7h9naT8AwKF2bsv83JR2Mk7sByP3Hz9RSKaY",
  "key19": "2j2GRbXZMd6dcxBrLWMDMqJJGH5WdQTGBx5VCL6Ae9tUdddUMNJnRT8mSyYP2td86WPqkdu3GA8kJLE3rQthdX9F",
  "key20": "5XcGnxHw8uGWLWyTn445vSzvXhKe9XDsfQKznKPWZ445qyEWgGt4aa42fvJzpyJhbSZ56VCog3YdAj5329q8Aak5",
  "key21": "4QAXdUqZzz9EU8XT75NmVWr89hSsT9dcLshjzA9pt67doa3GsNjd9TENTjX9QaXHpDhxS3smWVVfU5AJG6GPk5Ao",
  "key22": "4NZjKHjHtiJdbKYnecBTZBCr3BhVHDpCTGGxpKycjKsbasWyGNtVwvGgzYKby1GnHKZRrvDNsCJChnxfstLpbDNh",
  "key23": "eWcwwj8GHEVczs8ogY5bFWgfDRSU5ZGh6UAziodtPBG4w5v16ygXqwUiKRDKLD5y1cagN2cVAZFsTAtD7ChjoJK",
  "key24": "4sUaPFG5xCeeqXMhvsrCyatuipDdrkNDkoCnRvZoGeu4mHoS7cByqbHVsBKj1Q8LhR68hGFgnvcYY915QD1MeLEF",
  "key25": "4JroBNByd9vfcvZvoeaXrjwYPfggzkvNhUpSpZh4wtegMfkpC2ZHCvDFMLPojV8H9sCYQjtmJkJSkSZYECUdfWB1",
  "key26": "2PBSW45eeEsNU4zUc3TXu59ftXfuR4yJ4XtqcL2jJ4fyoK5UCxTxRjzAebWPmrcRnEWvBSijr8bJVK98q6EmWpdo",
  "key27": "5eWn8jaHDZzR6Qund84ydFX8zijWHbfS7HxyvwRiCZfYBW9qNuiEH1d9qeyYEFsVr5xwuFooxoBQfpQwbcp5fPBB",
  "key28": "cHWCid5sMGnMHmvTDELVrYCwok2avHtbnMpcwzKKZthYLVaF5hcnBBW7A3pymgVDZx3ocB7JqoVvYigoBb5umLg",
  "key29": "4uRxaB6sQZo96uH5JG4BVTHB7vMujmLvY2uFBJ2jn46g5KaBP9iALteAUjJQfG8JnJ3L9rLHq85L2UDbnffJijPb",
  "key30": "2NFpsyEoWgjCoj6GCVth2d2uwrZrDEnGew3Ue2f2tuaYC9PosyJBCWqnYbbyMyZoDiZkuvcSAM6CWCXer5MA9x4T",
  "key31": "2z5GiPVc5hH55JzSJ98kWC24jUJkC1M5KCniAUaBeBrYEBWFp6otQnJFH8kYPrQH8SG82u3XeL4vumtwuFrhZVbg",
  "key32": "3G6kNPcGRs5AGQtZBu9G3xzbWkk5oPGB82oJwMJc52QDn26aHfuBFwuwbz3q5DkRpiF3qb3BwkZcFev7sFAUbdUc",
  "key33": "5o2LpyMc6csMeMdAhh4T9ubk21FmuNetTq2iaVyp2ga5k3TqJ4VAUPbmxPownJ36WZTQSjWv3kuwsykAhiy6gRbC",
  "key34": "2mrkCHH47SpXucVGNSbd5upyWvYgGMs3oY473oYUmzYfzRiQqfCJ2c4Qqi8kAA89sotWzMRHiZvVH2LWdH2fob1r",
  "key35": "64HCjiPfiHW8rshLtkiuBNQ7sVrX1xcM6HFMbFXH1xr3B7YdN5mtQ68M9vqx7z7gGpRYwkb67rcFfsUhtsDMWfMN",
  "key36": "3rXLA4BVpReCDq2AvPT2ctfCzECA6MyU2omkHEHmuqA25YbkxEg7aGotbsB1cNbPRrnRLJChqhn3r5Tju2Nor2SX",
  "key37": "5Etw6NztknUSLkEGhH968KN6r5tS3WUKsap7KWcktu8rppc7girpXqfEzCK21N16zEp3QCx5Dmw1dEKrn1mA5GDP",
  "key38": "4EgZ7cTQ2wgiZcYiNH6Tz15dK7kgzmYue2LPQxVbmwbzXdkNj8rprHLxPpmsan6dWNAPqmprwDv4m7VfxhhjoATN",
  "key39": "5c9K6ZtBcZSNX9fN29SruuTwi2E8RH1SGmEYQzWcjJsY82T34xtijeuLGVPqptPhNhZ2GLrPH3a2UuZL8MSBVrUq",
  "key40": "5JYhdpieJoSKeYASARX6SVR7zZ4vkw5V9ir8jULGog44SAH5ZoVo35FE92Jth82nzpnEp7HVa3bfdPCATjUWB3t3"
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
