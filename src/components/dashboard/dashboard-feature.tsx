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
    "5yTwwvqGfM8rnGKBUDAYF7ovYrm1ZBG6pYEYypPL4PP5SbnWJKyagWjZXAbhw3mZQ1hWGyXqZy7LWSwrKrMXBVfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STQas5nQ1gSsk81gZwk33wVZ4Urqdggi6RDte7vHfJqArJb5mm67GxT1EPoqaa7uXFq6wqKyL3hwkwoL8NR7HBS",
  "key1": "38Ku5VdBju57JPsZtJuidRSqsPFKymSvT3yqZvjzryc3PrFQiULNwKDvHasPG4JsM4CKuuYYkYwamtW2eKxDHQub",
  "key2": "2916PWLuPszT3mgM5fzdgtkYhP65UCdXtPPZicWKJUM5hp79o4tMXCXBNKMBQCkesqQCwBLrPpFZkNs3hg7dZwXy",
  "key3": "3D4TSqfdoi4fzNUbwyTsAbczWz4Hbkqc8ZRpXiSfKqrk7j2odLWbNv7R6RuKhGtqyXv3N8KYnMn6CZhpGimQkoeL",
  "key4": "4uUF7WtXFiN9ua7iQ7YyFDQDHAM3tTxhW4juHtsz7yQXLNJPEBRXJzvXEiC1jV9584GX81tJuT8GNP7LRQ6i4K44",
  "key5": "3kYEjwv7VSnent7iid1KDPtwKwq63aQ57es4BP27PGo9CHKT9a36eT1xxmtLmp3H1icsUBGi6ZCmqsDqYX4KLK67",
  "key6": "jYasGTZQ4VHXnQYa75e8DDMyrz3LBv4CgMRHiDFvvgQNDkgNGgFfwP4PwSsS9pYrFD4qQ4yht5hrX23WTCDKTyf",
  "key7": "P4cJdMEWF7XHWFip8oV8uBkSSLYkauxpZ1roUHc9TnVB6rBdgLLGUVT4hAes9DpqHiVQt7VR2kTPa7iRx565ypB",
  "key8": "QiB1ABut6mPLs1uPABNa5yRgdYEw8DoX1WKAooT59q2NZ78VnBtcx4iGsN57NtX4HL6UwUW3dRWncMD95A3HZ7n",
  "key9": "3vYoQxhVMutyECq4ANhDhj7KLF9v4sUi1YT93GRvGTd697k5F2YBwiSTPbXrRLTNKuoLZs5u9aLSFAUFUQJJWMSN",
  "key10": "4nQn5pc1hFvDkRY8HFLLRJEexAYsncsPQf3E5XKku4DhHTehcS3ke2xS5AmYry859Wvw4PNWSwJiN8MbFh52CrBc",
  "key11": "46VK44GibngRQZ9soaK8wC9jDJNLfVHcpJs7o29QmhQVJNdioQBrCxa53taUeu81iY7udRZurRShCcM9cUB8674M",
  "key12": "2tMnjb8JokC3b7ArtNHrZ6LLyvCyxhtQxdfXSkb9kGCAH5FmG6iqVwxdh15JBzSwWwdeZ2AwJXKmyv81qPV7jaPr",
  "key13": "3uj4BVQerMqsN4udoTZVDRDDusbio5zbMpBT8A9cmvhDDjAqompJeiC5GaJ74uGm6Z12veh2NQCoAw2iW38sQAAx",
  "key14": "3DASAbgTG77CUX6GQQs7TMC7TYPrMcnZt4R2fb5j2VXiJQE1swwURMPmAALeaUX3NciagUYRoihNKZLh9Mjydcsc",
  "key15": "4mbrH2RNYUKGsVgs6epQGXxnedsN7UKyc64SsuKrHa2EkzmuhoYu7ae8W9p7Rq3e2xWzp6VfhsuQxzV4EtvK99mh",
  "key16": "gvjA5WKeiKy98pP1egdBikahhN9UWBVwrqehntA9yPFirBcdTXrKLoY9JVkeBVhzv8D2PNBPiZkodDCWmeQ7tip",
  "key17": "4CnhmQZjspYWy8KKDAiPqe3uyXddMLuf1jZ4buhubEwdHLotN52QQpyW58ZCD1yzdzisSQsA6yDt1BhU1asddjwu",
  "key18": "5yPKDq8AkD3WFrhisUQgVXW3iK2JVvZUmQpcW5N96pEXWuopbqQc2HwVieFQSMYia1owF9sC6ijud9vLkmMJrKQ2",
  "key19": "tVFRktfSHtmfpLocZ15VXo1XuxZrUKQqApsatZ1THuqzFwJ7tGVd1NyLw8dBamqFbYRQ2skvEti8GnmjcyQhvhZ",
  "key20": "2ejLCNXvSqvfHwfnrSVmh79v9arjnNPhosfukpYt1uuS89xeqLvLoB52MeCXcy4fX9YgGwEDQthXbNiVfNbcjAh8",
  "key21": "5ENSuKyBQ1z3fjvtG3PeUSacVT41hyGWYF87gBKgNHBLfvTwi48B3mhUvKqm7fNXjXCfVMYxQvnsjmKMcgytVnMz",
  "key22": "4YN9dYTaWhsdJWG7aVNomioFKpKznHoLGpjzA7g8mz6VhqyHv6rG8R4Hp98S6WwgAgGQbrbP8L7N6xw73PhyZfDC",
  "key23": "5AaevaR1ogn2VsYnBkgd8rVVsg3aBmMNPn5aW2VHDB21Aio9TCZXLV6NBxhHjpRG7A63ZafCy6S8h7ZnouodvG5F",
  "key24": "5Xu5k5mepKhFrzxtsMPe6mKWFi97DgoCNkUKUdxYGzfPTQAbQ4CuSXhww73GbJWJszBf1h6Cs89vi1ct5dxo6skx",
  "key25": "kYWsJMcMXPb67apFbqL9m9vSrWHvBC8gykqPEvpy5t4r7mdv7cxgAXNEbAep4RTdgFk1sLE13rfcGqg9a2e6Pbk",
  "key26": "5Axx7GdXSikG2estwagfXPJHQCyhyip51RnkTWQWbiEQJcn3w7qSmuTH7ZcNAeKqwvjFZxBfheMWDo7yaCq9ks7w",
  "key27": "32DPeP1ak4NuquZNoo7URuXkKfGAuAp8TZLQDktHmDLZjCX7bQieLBWRkUHYF73gHDKLVtndm5WH5avgmWBg3m3W",
  "key28": "BLhaxQcsQ7FGoaT7BVwCWfgveHT7x3DHHLSWiaAbYttSA3kgQ4NoLKBJNHGT4yv8XnT6D75SeW3hc31BUVkQBEc",
  "key29": "2Jz9Vrj8eX8TLmpS5wTG6zG1XveNeVjSzc1zkXxRmXPMtT69GK4LGb9kCeVg14GjrQtwhbzvD6q9mxxS15T1WDsz",
  "key30": "5U251hiLhdFdKnHvE4NoqeaWnM1BACEj31sXjweC3N2e1814FCyhnSj3svjZEW9iizyeMDQ1vcKVtNnxmC23YH2H",
  "key31": "49CaKVFDhjwaN1ikQFspoHXLaTfrTJAqEXJpmsbqbL1CdGw4kPuQgXZxn3oAAvJACZgMpQre8HeG6QTeJMXF1ZH1",
  "key32": "4WxpHCMFTEs427pvJcLzDoLaLmky39STvdy9SJaY4UhmUVwUeiHzWRqkXtNC6Xownu59yGiS8m7oyJFa36NujYHd",
  "key33": "5JaTdwvGhT8bm3b2kTpxxfT3bjTd3aDCKn9sTayYW9Rsaqgdtki1fedVYNrjcSQQu81ZstMjLKjFeRq9dJE8ruCT",
  "key34": "4nJaD6inqPWyMqDf2kvp2BETomj3brjbqG7oVGRtF5WLtSkPHGzex4p7AK8qCpFBhbocQ6oWYu7dHcf775tmpm64",
  "key35": "9B6qMhfTiRQUV5m6AXDHkjuD6M3YWjeswF9c6my1P8WdpmEv8f356ktAP5L8DsD62wTiZNFBvbjRa7bSGRiVnPg",
  "key36": "2mmwmkRR4NdxRYGyRqkXcaKd9ghfq4ZKrbVrxM33yg8habJprHNRnbVpPGU12h2jQ7imGNYcucQpH8XFtCHSmbah",
  "key37": "2wxyP1C1tPSFaa1BmVucGbGETRoduquQbHd2V58uk3cmkUYYzGkQ8589WQMFaNciJRHU3QUBkwh7Aa4BxHjdZ75S",
  "key38": "3c8PyLrBxHNhVwf3kN3x4tYDTKxv5tMz8kiyitbBzBxdGKJwxX3UEub7krYhCUmqGQMvFjPN2euLCAvLUZKFeZyw",
  "key39": "5uBDGfAKMcXTaZDVJnPp74iCnPQABJdinb8o38murqoQyUNaWxxu3Es67oDEziKtSj2C9ZEsMg5ApQxFwo449jgV",
  "key40": "WmWxf8PHfAzHPSA1wxorQZEifLHyGNF7g2Vq51Erxfimucq16fN7Zma8LdKE9abBmtbHaXzAdC3wqjCUKTCsv82",
  "key41": "3Uu61qWFMF5bNpefAkxg1izGmakkLj8RxvBAdgnGrti1f3zGh3hUTku6yU5G5Cheejw2kydP6xeMPf6uGh9Bn18L",
  "key42": "5u9VTeSGPXLciUMU7JyJxHKTi7M5Mz9AXGfxk3yZr2MvkHuYNXgfagNggPHtxEEjAHEQkqAv5nraPs4hvVLLNBG7",
  "key43": "3eCNck33gBZxCUKKSRYQnaAB27S2qZGmGgq4XUn9dj8j45fau5kZ7msSMXnyjL3QmVJDHasNSYjw6L3vXL4GixLg",
  "key44": "4ydSb9dLJNc8mTjr511AcNDxQ8KPequ9iRWJXv9FBDPUsmuBggg7HLyqtq71aA6fSPiFoEAGMjsn9uVrtLV3ZfMk",
  "key45": "2KMXGY4fp3Tk6fK418wjdpXCzxy7hys7RPbv9jUAYT5q2Tsc3sXWVyKHLsNxbec6tXNUd9ywNSuUZzYndGmusjtG",
  "key46": "4rgDQ9hPiUqnMpzQwQBLka7KYoQnVr3DGuUojywFttGgTcUQvyPQj6zYPGKvdedXcKQRx5N3acZzzWeJDBtRupak",
  "key47": "57GZvnMGb8HMwH1QLuN7tAxcmxeFskbCL42XJkrvAndun4QoqGtaLRqzr6bec3pMw47ApRgRUiVCpUtDjSyfzkxa",
  "key48": "4jMiCGVGngtRW77hxqQZEF91WM87CaLFwPXDDYyHh6PEEejw3cnE6FxvV9xBRaaYSEee7XjiTqqXGipSbahHJKE2",
  "key49": "21rKj1r3NQwDsa3twYehgE3qebG97C7rQ9K6oUbWhNXytWEH915bm9AWJSQWAU2zLUZdu3WPqfFQ8AonFc6nvzqa"
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
