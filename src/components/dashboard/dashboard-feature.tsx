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
    "5pvRyF7i1XgzYKeLXsu6XY8CwHBtw7qnxYZwcYQM9MaakuCGwmTkpGQYTa9d3UvBdYYHKVdqH4VXwtVn3vjZ9HWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRZ7DoadXjH9vbXoXNJapwW5RfV8gUoGdCeZQcSGbL7w3bd8aFe3EUS4Df8gkozedaVfgE4RtGDwieQazeytAYW",
  "key1": "wACUGasTn3s75KWMfHdiKbHU3HYupyqn9agZjXhzrmHqd7XemgyLuG4LPLC9Adeosnmb9Y9rj2SC38tTqY57dgJ",
  "key2": "4EoSNeRuttYmfyQcQjXo1JbGfmPbBnZpYLGtNsVKhigPVT7CV6dZCft2apbozqsKPd2BUiF28NTcquCE5pnmojUW",
  "key3": "3bdGpfVi5Tf6JA2XdhjeyLqzcYvRid6fXnDewsZ4tqTsSecaXjszeK5NULW1XNVPCrF5nZSy6PJEzYsDaUtLR5WA",
  "key4": "5YLqJmzPoeaBnTc7GGSPNi4LxAehkn3QESdzVe8HYY2wUkPBmoAu7EJTjHYz2kkckkRnuN93R1AfyhcG9i2avuPY",
  "key5": "3EigWDyw5wLr2GsqTzbcS3oqdMKMao9T8y6SR7iVT6L4MPtPYnVPLgpBwW4WXWR8r64ygpdkUQVFvXUs21ohYCTQ",
  "key6": "4t1WMFtDUwE3ytxrHFp12Buo8fCZBwABxEAyK7B2MZkKrvJ5hoYr9T9FjymaP45pgjWfSi1hudzyvjWYF2cRs4dM",
  "key7": "3Rd5uHy1WL7jPGmbVnG2vS38Hzn3VcWyqMkqzVBmBCKF8DE3T5qLnbmKZcDErW18xaMRuqVAzurHBaSg8iowf2hh",
  "key8": "3oQksTVYkki1Aj7AXHua2hjC29aqxn5zEDKDVwNA5Wu4TkxABDRfGBB39Pe4BZ8xDaVHCRE1RpJ9YPvccQnVF51w",
  "key9": "wsJPuGsTmgeSag1xit8bbsYYvViWifx7gsQjehCfiqgWY5KDyHTckJ48uSNCZjhA7JymuHRVzr7nxEhViYoPsV1",
  "key10": "5vEgfpyyPAuWT3Q8mKj4Jkej4p17w24N3ZCh2xiZeecbmSzXy22fwV4GkZxh1AFYVpku7iNs8e5uyP3wFfG4KA7E",
  "key11": "36MKUNPz4C2pxLrDtFCF4xmrqTkvq1Ym1eYSmzWH6BF1rEoyyaFzfwQYHWkTCd4FZngJyVpH3qyC3uv7BmKicgA",
  "key12": "2CWWMoaX91Y2TDX5gPZipJVuRTbhM584V3PXA2jv8oY4VtpQgGR3BJtAz2WiTrbXQkq6LfwcM6fgmdeiTs5rPQkL",
  "key13": "2ZHWPsmCPuKmd8p9Bek1KBgMxdtTaT9SQbpuNBsw6DhEpndLaHrjnNBM95nG2orNCx9PSmz77u2KhpW8fDdT4F35",
  "key14": "4HZyiVaoQF8H6YYaD4Aw6gSEYnrv56tVnPdbma1J66gbM5sn51Ec1VRcLZPnRTs2PUkDYAosZUCgkthzLrdHhL56",
  "key15": "DdUfCoXCki8JEswCcwvb1HkcENFAkz9GLbqU6GYBX5iPAJh5RqLkRr86NXY5N6pRQZPAdxQG9D2g7vyQzHUhkrw",
  "key16": "4Lc2dikGTR3c5PTw6Q195Gymrko1JVe7mF6iv5uSbw7c21Wae2But7czygcH1ZirHQ1VWprppRrUGyyHssr5aBmj",
  "key17": "2ksRz4xBVzKysgXfUFMMr5VPmSyuJNHSiv85B1VbbvU5ptP2MZ3uApwNXUvakjbUK1ovR51i1zz6iNsCDWYZM5rb",
  "key18": "4c2YGd6nQQAmzqj8uNbXH2phxNwX7ESnq8kPruDiX6fAahXySvzbh9rDZWMBLFHcpucht2qBwoTYxc8qfTAEdNeG",
  "key19": "5n3as8HXH2ZMNzR9TLFcy4agpra1kS7BzeW8RmqmxRAZszb2GHsfTUD45D2ArLg58S4gXX8P8iEq7S46KdUhfuPK",
  "key20": "2GbiTRnnd4drm4NSdjEZ5km4wpwJAQb634Bm85wDx6sJSDHyrS5fqyzmhDXyMrNKLKNkMuS7H2EWGFtkrA3k6Zpy",
  "key21": "2arAyCczUi1DZsDQZMtybYt6M1QWoEKYuRKydgeP7ZsJFd7crCPbXZfYjM8toCU9jswTUSpZS2NrVMcUgxVoZPYK",
  "key22": "35Nvi2M9VussbDcBKJWyAcejkXUxPRmSsRExeKtfGyqg6avyV3ZkTDeYhYmE7kV2dhNsMknWVpaPahrMM6pnNEhf",
  "key23": "3cqDJyFt2G7wppVe5VJ93AVBokrvezvryK49RprwGvNN2TJJ4FooWDjry7ai9b4WakHKKVsF9JU1Yunp2Coizp3R",
  "key24": "4Lk77bnS7BVmgqDhwr9j1sQKRsan2FMrEC4CPQoLRvrAS4QdkqGBiLNm8VZHMUEti8qi6v7bE1MBeh3ysJYGWVAd",
  "key25": "4WPi4CjR23sh4uXTShborqNUywo4zdREz4DcJdEeCwNJfixvYABV4YPdbL5iN8uCcjdBFuhkbtUrU3BBuRgnzcgZ",
  "key26": "2EewsjuoUXEFGErEdyBxFmXzPz7Z9XG7mkedc8HHfgCyU7HhKqnmy8WamucoiAQ4jJe44sz6DfSnduMvwPgxFN6k",
  "key27": "3c5UdHaiR7RAbMMoSZxx8M8dDhiedqzLHjg3doDJ1JSY32vEyXrjz7EWaFAzBThhcgzCEbhUhytXSgaN3aJxYutz",
  "key28": "34U3rqgghPpEh53CUhXtPRz8iFKyqdTGS6rbAjQViaPEvQH1T5UmqYN2t77UZJqWe6sFfWYTR63kVQtfC9NQiZ9g",
  "key29": "5d64MdrJinSbXjgK7HGMBzYGsEdDfzC5s2XaZ65Z34tucaZQFfyeinHrRFKGVJpf12d8rnqPLfSmWC79z4WuZzyB",
  "key30": "F6xANFo6noUqtToHXripZ9jWWGzQoVdeUkbcaPtDfTAXZnjSSjbyccVWH5TdBArXHUD7L1a913QsNgzJsiBdy4L",
  "key31": "3VWmuVQQvQYUhakUMtTEUpm1jrZRGVJVjmRc5p6PqvfCjovzAQXqerFYYsq6Tu8iawrkJYx2vCJ7e8NUp8gAJhwM",
  "key32": "Yb6PVSdz7t6CBJCPNUGVZY4qMFfCLhwJgKMcoTm92xui3PxpEdrK7t8dZVhLHtFHSh8v7X41P3vrwExKANVbhUB",
  "key33": "2UuNQBsCnLsRcQc2UeS7BEiWP5QfUeTyGV7eo7EnDSnNPDX4LAvqH7RDUWGxMt3izVf52eTWEf95XEewKNmkrzGC",
  "key34": "31SE4jV6AwRvgbsqroUzC23yVsdw4o1cgnNKuRzu9YaCcFqLAfyHQbhrVVPMM27TYcHNyjCfA1om4v7HpnkNZMvv",
  "key35": "5TMoLj4MfyQ2TjWzfUogWtaUsR6PsPxMqHbrahJVeZ8W6Qs6KMoUoTEeSGQAgVu9YHL5YajG6QZfeYUmoGH9Awqx",
  "key36": "3qdWdT4biHASYdSe9dbUFqCo9Ls9mgRWfYqBNfh942kCsndxsDEgG7RUSGdFckfJffokvpHRqadH5hAy5E48pNyN",
  "key37": "3ivHC8Lx9K7hXwuSo7NgeWzhtYZ91FkEyXXHDHKE7o5An8JEhpZeJ4MQyp1MgSesrVHU8aC46SEeyrfxmARL4817",
  "key38": "5QpD5xAZ2TUP9FpCczadEXRt6YUE16QYawKXVCRUvrb3oXaiV9mVgNMEzUe6z9hg9phwZKXs8YdzNcjrUUhBR2Nc",
  "key39": "22eZ1rHnPfpymb956kxVUCSuW7sE1otUKdnhxpHcgEtDFtvYeC7VyPQ5pXzApCPDGLe7LRddMYJdTXT5Ei8Fi3C3",
  "key40": "uGHMrVHvZA5gZiHn4QBooerB9Ksnqu8UY1XZZTFMhPAeciPKNdPbAwqtiCHzUsE9fT8dvNzSAPRSqMS5rhMGL7Q",
  "key41": "3VCtMGCWzhQHNLDtRt7YqxbympYyumwX2utsovR55uRE6xU3ZcMTgPkrtGxYq28nkAL5NVF5VKHusrxrAGe6WPwF",
  "key42": "215Gw6i17payBrPjV4vxzssg83HPmd6m1YNeMZk1dcxmLfhD68FP7NwJP5bUZrcU8JitvAbpib97Dh9DbjNzn6u8",
  "key43": "4jEkJCXbcoD9osFyyBT23V4r4jNNDr2tx89kH7xu9QGku123JoZY79fJRZ93SgDAwV8427p1AuWUvtttax5yrjR6",
  "key44": "vFtYJ2dXdEdCDCwmXyn4ogm2j6xKENEDPfx5ZNDitZJnhgvB4hbK4v83jjUfQPYriyfJgGtYTfrvGFdaBrAqXFt",
  "key45": "mgdK27TGf1mbQGd4bBN3GhNrLEHdRuT8AoQW6AJHhWrf9nkVJ3B8XtAmFw8xF9GF1bTuX2E4TJTNyCuzTTrvCSH",
  "key46": "8Mxh8kcLzKgbaPsC2onhNDhHpHEUALcV4VZUhiE5nUo6kTQ1Br58mr7J3fbcyBXtdNJFuhtHvG69fEfzF3tC2ys"
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
