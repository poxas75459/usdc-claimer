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
    "32232xXCwYzZxUospo8PT8FgbsncrK6Vv5qJZyoUEveEqmGDZAYbrrBtD1RW2rEGYwnWkSwVX8HLyd8cDHXFQukY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmmdCLa7BF4wevznC2g3f14N6b2L4qUd3pDUtFCURBwr4SrwBXV8oqJxVtBBe7UVfmvcQ23mTMLwqejCFL3UBHt",
  "key1": "5Fw948azMrXnz3ztffhYJUKbiyn3TLaEtcuchYepX8w3xNMH81z5vKsunZkntPLXXwukDFzrhNKWUQtUM2csYbsU",
  "key2": "3nwnRvALjRAn2DNKNQsDpYNUwT23gKgwt4WV2jzUfLEFhZe65SaxvkznQneT8ge4pqaHc4tS5BTsN93MLiS9wCNE",
  "key3": "5S3omQWwnUJK4RY1TQwGm2XNdZmqYnNY861aUuTJ2cTb8sM3d1E5Ndx1TBwmzyFGNeLnzBkoMCTMiZgz1DzCGrtr",
  "key4": "4iYzPUDahNpYSVkfbX9A5MkVt65ewwDdNwco9KWknWZNuxYgjq8rfpCH76W98Z9u1isJFZyM3HStwWGNifbF7gFy",
  "key5": "5PnJhhdxGo2wWSjLocftDZk17BFPhEHozXuuEK8jt4iznpFZFs5J5dLSdHFmMQpA65iZcXhYcfCyrMcyf6prxHL7",
  "key6": "zGSKyK5DoSSBwpmgzAKhsiF1kas3zTUfMhR5KEnfiFt3hGtwv6WEbCQVzPMSTfPoEk5kMKvVeXLWBDKcnaL9ziL",
  "key7": "3MQDH45qHCrpdM4ZuvAWCc5XqC5MTD2G44mLEYrDHJhZ1xJ16gSVeLyEtygPwLisnwgmL3skFD2f95rJvaidsCgU",
  "key8": "5vDnzZ5j6eeYLiyz2SvGkpiYEnNQRwbySLSwxXjZJsidPi8uNef2DUSTtEzxYUWbHH4hQccwKWn2hba8wrsBcLVz",
  "key9": "33xG4FJGrqhfakfjaWQnjhDY1FXJyacKm2fsmuYCMixCy3G5sD2vSatSL8rNvakj7CZDynR1P4FZmdXHPmDjQX7r",
  "key10": "4AY1WAJtS8ZBytNswQF9aiKY7XB92UfjQfCUyCAWHttWawkrVH73yZ53kACCzcG58pCcBT5AheADAS881iUuiWSt",
  "key11": "3EANyNRCTvSPEkksAbgHzD2F4JzqLXJiUZArer7wYgj91zh9KN287PWJ8YbFxHeHtS9NhSodReyna3U6qJYWBK2Y",
  "key12": "2FKaeXQBiLgECgbppuCq9fCFS5sCbXtdSngcSUWcWEnoERdrhRZrUkyhiP7ak52i7mm98ewKPQYU8qN5z5CroEdK",
  "key13": "55WVSuGxaCEqRc8TBGw1GAqSoVgbDhKiSK8nvQHQ2q1VQGQb8cgnBicWeLG1magjLkD4C3iCCEz7rFfNddinvQxi",
  "key14": "2kXFcEfhzhtKHAGCNnowtc3o95kWAy8iashE533tqCaCf8fmxFNmYNAUmeiUusqzyVPf85xoqTMst29t9X2E7Xt",
  "key15": "JQWXBDjxzr1CGUNE396EdofU3whCjvkdR88ygyPFQ5DNFrV4xA8WES6gs61vWMJCsJJrsC33bWKEtBLkfK4YQ7z",
  "key16": "2tSEirHg3dSZ18EZ2xxe1SjT4J19wQBnjkaZLj1pwAyyBzhPe2mCAeVKXcjKYYc98fR5xchdv67YyUXrctRutEed",
  "key17": "3tXShDW4pDjUF2X3VG71B6LYNdD23VCdNsh6dhuDZZnDFbPXv625eHpksm5nWt4jndGZxHJ4vPZGe3BKRjryoTy",
  "key18": "3F5EDXMeq9pybJrEXC8vVLfKJfVaGAe6GCCdFveH55SyJnPFmV4mHumqrGHtvT1cWj5v3ACPWMzeEbcicxx7QMmq",
  "key19": "1UfMtmxHeihSrYUGpPSWVMn8arHrNoEw42d6nZ9da7s4AJBzkDNxDDhzGE9c9gpPBVnnRcSWzX7yjgLve32KiZB",
  "key20": "2fs6baYA6MHpVyJk4w83mvtscf9Q2zegTQNDyApnBKPr7kdU1qMXvTVsCjb4X3QBG5Mn8mQP3JVmY6GGudVxC98K",
  "key21": "i49EGxBfvyKHuHU6xgz4ykNSFfT7wAwRpwQFTVADG4fRXqrBABthRUUD7ib6VnN3EsBgjjSUiwic5e5fXbqDbSM",
  "key22": "c96dqcaTMgGFsY41Et7qxaWVbERucwcj4ESEHRsBTSN6FaUW4VBFMCqsa9AxYsE8NaG2GyJug5Z3Zg6f6VkaKPs",
  "key23": "48tAvw7HdquLVFHx7n4xWdr3SVrfDjFq1TGAMJswfeBZ8RqWrGzxZD5Pd7pNauii4CUypei5goph517E5GUwH68D",
  "key24": "5pDjyHJpVvP4AuTEhCyanMfeFM5AuDxo8njK4viP1qhneRsTGPzmNFRQiH5xfzPH2e3nr8JrsJd46TZy7w6eggKR",
  "key25": "5aHvc5jU9Qr6fCebFzfmiwj2fspB1P5wDS3YB2fA5WqFDH5nfFKZLqtQLkCmdtKsuYp8amXQ44ZENfTYuDDkj5cN",
  "key26": "66Q7FAFa8FQc6DdC2Fn5yYtSEezsdLG8S4GvxSFH1RrDUHsntLUJNtiGX9dGUdS5sGUuhP6f4p5MFPBrzt6eriVu",
  "key27": "3486jbpbmzMXwGGkh573SKBsruwVwk3PUefQbW59PaU2yT3xCVv86WchVwFGj7cPxwNrxgby9EQDX1f73JUAtCK",
  "key28": "5HmgiGnSkwWS8T9Nrjw7vhCNxfMRLRSDJak7MDjdeAQG7bEyB6WML3A2qz5RGheb31LcHG3t9zeuvG7aziiHCwqf",
  "key29": "3QHcwe3UBoiMSDNrtydbhY5BeVnd6L1vL74PAGZ31znMSaCXKwafmgVSSX5p6jwVyPR1jmXMGBZLBo6ohT7UHqnW",
  "key30": "8YCJmep6aoynfigWYG7VozrXVpgmzeFLFuGL1wvkr4TkuuMv8oNKxHDcKfuSXgjTUDivw8qFazy73LRvTWdvQKS",
  "key31": "3C6YNFGJcB3ppj9sXQie9TKj49tZN9451KDfWMH8qEcDXyEB6wfYVSVwGJDN7bfnmntzmFND1i78tmw1dBwyV1ZZ",
  "key32": "KHrto2FpxpJzhumyuAbRhAyy3r7M94bcu593SrzoQbhBhMD9tsV2WATz9CkorT4trSp2skQz82n86G4uaq17N87",
  "key33": "33Cj53eJ52L9VRvV1VS3ufYZtWxP73iwisziHeCejDPP2dh6PhLaNx3WmMCXXJxpzj324hZJFyoHYe4Rq3R2jMm7",
  "key34": "2y6kyX93g4VErL9sEB5q2jjVst2SFE2PAW8AzX4xcauogpULhM5KdRRa4nG2HKNU1sqH4zB42iD7H6nZSTzYMFV6",
  "key35": "28dzuwEoHANtddn24skzNTnRYb7Lx8XfyWA4VPtk52XXFE52QQ1fnJdvBzJ8MSQj8sHxiYrcj6LekVvYQ9moMY87",
  "key36": "52GR1kS7UddBnwwrWNyJUSWjjy9uugC2UMPtQX1qXWS9qmUsN9Ff8ZF6MzewJgkQq4S3qArTiXgmZLze5vEomDpT",
  "key37": "3As9LRNZGoDeH1D13eAi2hAwYci7wSQt9mxicNuu8cNPYyEZf1LdE721EDiiDu9TMhByjX8R46pnagAFLmzTrDL1",
  "key38": "x3iX1X6gcQUqKxLv6apsmyasdoBzmFX3PvqFmzC1feuux4rhXRejgahjGypcbhsB6quo9EbLd4kG7UU46jqsHjx",
  "key39": "243nZoUBrbZFavvKAo7zHYpEsAYroU1TifhBfX2nFm1W8BVQo11MRZrdZrUvGg9spNhvKG5yta9CEoocB4huE7Y5",
  "key40": "3Fo2RgTBFsWFqGJXQf3v2Hs1bxnmmcE3EKdCusn9ED3B9uU8BZjR5KE3UWzw2fSUHDzCfCoHQLxDjPSVK7qUbabj",
  "key41": "3cwDDX7yX2uRK6kXnADRgv7arCgBuzvR8eF7yVwXsHiH44KvNZCyv6K1vUys3RyFg4pNbmTDVMqzukmstkSf6U4W"
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
