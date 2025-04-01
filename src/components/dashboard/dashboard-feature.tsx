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
    "2XMKTmsPsrbr6XWQDtNRrdkJVBJBf4JEVoUEwdnE7ru9Z1jCzFMFdCwakZ3RPfZuUGB7sc9RFQLZ5xcKyjLBCiGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kDeXJ5xACsr9dzp66xjYSoneEMnkPSDJ6S2iUASpXfPb1rxcGXdZc7TeZjtAKgwS1TJNKbQaQn3WgXsPVEpre9y",
  "key1": "5UgigaqQ8hp8eC4sRNWYkAgTfyvFZUro11Q5ekH56cBftucQeiWRDgBo4dKju6J4KDdtg6kW8veD9DtyJXtnB9gp",
  "key2": "3XHrD7wm7g9bcufhqc3DE33W9XkeCS3FJFRRqYFBVqDVGHi4HvyQHxG4c56kPdXzpdsfRb2YxmNxZHQE9G8CLv4L",
  "key3": "wuLwrCAoNLGEr24m34rTo3yTtgCUBot7vQtyaTeACmQcKP27P8T2vgNXtu8fkcvXya26CimEBRPvyncxVQ7SJGg",
  "key4": "bgwr3wgna8kb8oDuMzxiSdkbt2NinuK8wwdwg2QRoGK4P3Abf23dcF8gRjLeaVPGYvTk9FWFzCzCM7gPeWwCwSm",
  "key5": "5BU5bX8Wq9EYXedcTrMrwfNp8zsnZDRyzPmmTbMLQvNjVfdnSCNWPNQuM12jxwHgdhGeBNZtbmk5FBx5LXqachSx",
  "key6": "63HNEL9M9U14HcxJNGpjYKK5v1v5HKmDYUbHVPh8agSw7NbHBaVSLzt7bcPE62KcmiLNeYo6oYyfgjCCBTxDR5YU",
  "key7": "5z93Sy7sscFq51q1E4YdMLJoD83U8999GsXW3pJ3VQMCLQridKwdEV5TLGJtk3LBXuQdwjctuj37QB6pwMrJd8Ee",
  "key8": "2Acj7VxUUYN8D4MimL8itVNBPzpvLUk5EFmA8WVKUw85H84dLhh8wXGU3rRyL6XXuoVjNPGWSKjZf7XN24uhWNiQ",
  "key9": "5nyJjWHgxyDVNTpsghq8Rs2CGq9ghMBWSjxfhhQt2fDo6umkyKxjpbtqcTfZciBpWuWeCMAzng2Mc8TEq473yhnV",
  "key10": "2X3BA9PELhKkrCQX5ciZUhSVxVLUgDw1qH85Cyfdbg3gpx4k8AKt29T8AJtohvJLQ5DJpw2fCmcVrCUawtXvuhQj",
  "key11": "56gLK2un8hvC1X6MKJ44gqKPnJiPPRSnFhLYYXX6biRy5f1G1FYFC56KsYZvGNMhbWbPg4VKs2RTQdRcWNUNMMWs",
  "key12": "5pRGHvwKvQawUa6GcKfUy8GWYo9XUk2jQGKncPUeitSj5AQfDUxvfJxxx1bPSXV43KgneS2LiMLBqh3YxrGmxMEp",
  "key13": "XQsR1YQwBJutWPstWq5osdBkNxdEDGeMvWktGR6LnCEca9bWPVTrAGS98ZkNt3HgXPADKnZKJ6uhiKJiJqaj9Fe",
  "key14": "3X5b8MScdjEVRP52VrFLwgcVQVh87zHsxYmgWkDKaPx1mhAgPGFzytpWybdivYZ9gHZqhBidz2g8mGJ5595hEFhc",
  "key15": "5e3Dm9j4pWm76yq7Gk9v9USCRc5zG36QbegmkvQoxxwD8YEu9CQyrGgj5CGw3YK14wjKPcPHpQKTNBphMba4gisc",
  "key16": "3wm4qPMzQ4tNkgnueZFhyEz6r28eTjLx9VL9kAthtjdU9EJg8Gwi26K3JUm2oWSwba8GNaHGMJWE6qu41hyiXokk",
  "key17": "3HuRajomUQXmbS1Pr5Ehfqev8tuHJDsesTYXoKeNKeXiCUy6ysugpTusxttvR3E3GfAsmhVXFz9NKPPwhrFTwTA6",
  "key18": "2vQqu5PWRC5hYEws62x7jkmM8tDsNRtsF2NFgDALfbagnzSHVuAUZYJRbYVU7QHYDASMdVC8YpbaMVWHTDibHaND",
  "key19": "45K2eqGQW15Hq4wJg6SvYJHTWFUarbcbgh9Zr7Zz6ckmA2BFUVuCutbWsmZgiRB2DoSxcMm7Zq3QM16GJxKDiAzE",
  "key20": "4SrFVc5o7HA26z36s9dYcUGBrTExVrW8Qa88WhGgLENEeBFVA5pyDBfoBi8CXPX9DT7cCTfuuHUfJpXCiMLn8KsM",
  "key21": "2bAhBQFqhvqm7JvQ6HFWTvK3s3fZ4zQnxSc3YXdJBCvDLMZvYxLaDJVZLraX3cjT921KXytyU2Ad9jwYny2nPKn9",
  "key22": "2Mqeb5vwCu5b1JCZbGiEHVP131TKhJAV9MVqaWG4aK2rkDXxNk2aNMxk69TaYQBTV8yrAjz5CVyWvLXRBHKk6Ep2",
  "key23": "HwNQ99dJuv4MXsvVcdqxJHaUeHstupvYVXH3WkqMZ8xsq6TKq4YqHVmXhSH5ChnWoGk6MftFMaMJLjtznKx1Cu8",
  "key24": "h8GKxFcTABfgaKbAWmiMxR61rDYx8fAt1BKakkrqYiwadSSi15mFGHnZUEBf6umwjhakkPEpQuoaykqsWcVwTn6",
  "key25": "4RNcksWD9Djt3AjF5vmxdTagjXWwa3U9Vf3BQXf3ufz2N4syvq63iHrDHgk4Ny5mH3aZBZW2nSLAwg61yui85Enb",
  "key26": "4NqwsNy46HfteTMjGJ8qPXcB2U6UQTcNjBgbtB78QGMNSLqghKbiqxtQivyA9wwMbzbYPwyJXDdB3rM38RBMe55c",
  "key27": "3vUSvyV4ne6BLdxwFyKcs8fmsr2s1us933DzNFqpREwRojhzwYMJvF3kNV9GPfpow2zt5HmbPJ1AGDtvGTXKCnLs",
  "key28": "Pk7VMHMDE72G5MHLvFe3Fefdhw5CjMqWC8iWQvo3xK2wyUFTx33ndxdzkfGXsByyCKgDtBgVZUnuKQG2P41zyTc",
  "key29": "64r6rtDfeWEMvT5fbxsaSiqVzopUwMQnvuYapa5uyXZG54id6ACjkhw97bSyCU17upLMCHNYY9tzS9W7AAwR6MVZ",
  "key30": "2TqhKVkdqrX22r8tUAnb74dKpxS2NqmqxBZVVyLf9sXGRUr2T36tipLBeeSLQQxwc5VjiQBX77qcrVFd14F67Htm",
  "key31": "4KrnTNrB25fzJrybQDLvkoJirVqpNepYfQ62oHWmZPsYmCoWLuG34mU8CrZmyUce792d1kLDZzCtB1QzEveXfCBW",
  "key32": "65y6JvUhN18VxBUDaLLzgLR5Du6ZBiUUh4KY3SR9bCcaX5ak1UiDjGy3teek23Zo4zwD8mWGDEniAwL64dbogxvh",
  "key33": "5MZ12qHSoLvfzV3S1qKQJ1yTMzY1x6y2rpemskguppaGw84RYhodwoWDDCh6KiU5Tc3aTG9mKWmaxL3DXPtsf4CT",
  "key34": "3ct6jV2nsmAQVJvEcj2jqJDKWhEeintpneMue9mk5HouSoHqHk2MCvYFiFHTXo6LQkM1JWciTMyieRHs7VLXf7Fp",
  "key35": "2toSM3Uec8kV8DkGXS9zqrU231JxdLfuSmhsLLN59hG1A4JUjhiTQBn4TBFK3J7zbYkqbzERNxQ1RoXU9YWjJjEq",
  "key36": "4ivgNc9VDZuWA5cVLVLYLLwYZQeXde5SSBNNmWpBUvZKkjwY8XLE4TbwTNNHdnNnEpTxmdNe4oAP7TgTztzUKaFN",
  "key37": "3EWSZTzm4uTZUN2k96oH7BQBcFdYVKkQ1chCNrwA6qa9qou6kLgGQVufYR2Jh7kkFyJpG5VVyv8nsSQEr7QhPc7j",
  "key38": "5WMRq79fMjSswN58hf5Tw4CDyaBb3Yc8ZS7Gov9QFsFkiUqdaEeFMBEaokuji1CAZ6uDtUCZ9jS8aHyTH7ACCPYk",
  "key39": "hW4VWeHYbk9bD78JBe4YBYtvovML3f6HSVUwA5BinAJvTwhDh1ocKtfeB1d41FBNTpCzW99DmC7V8o11svZJ4RG",
  "key40": "2dhHzXFrcMNNQ4sErpeJyWF4qjFSJCed2L9owVAfmqsZjbp8fLMGEEy9h8njBBimgMQJejwAXRo9PUpDzKHbjC5K",
  "key41": "3gY32s7DQMutZmZPaMW6ppz1zodn4YRbzfaugnrXwe83iXDY1MFMsAQERxhYRLvLKNkmtUFyMieSNRL28Jz9k5mE",
  "key42": "62ft8gAzBXEr28RKpyN7FhdmpRjLZTMSRp8H4f3hDjah7zCRn9E41Gc4xTBgcBuH3C4LbLEh52Wi36J1do9rqv2i",
  "key43": "4m8oU5y1nxT5wRV6WfNZGs7c1i5amnYmai8QjFgqjFKFL1Jj1zLqTtfsVjHdq9uS5WRmeYqZ1BB4k9kdCEQz7hdB",
  "key44": "4v65uZGAejhtiJqui36qrfQ4RVQYGUJQgB5daLv7cxzzXaSHorLi3Azs7ara72aaksNnHHAprEFztWKNVWpthPxy",
  "key45": "2rHTU58NLLr1xfEWPi5x4fKDadhPLeKfzY2k2gqh14vDebkHnmKC6swPQ38WDCEAk7C1JXzRdsdwjE1h2CGU5syY",
  "key46": "3moRzJgZqWaLfyY9bTthEgXfGU5bVTbEUCHRPFCLA3bnUnR4z84uSH1WvCRPjtzSxJcRmvxczVPZFzdphqQ6ABLs",
  "key47": "4h5j28mA675iSsRM6yaFQ8pyneZmHSSUdkopVQpqPpEoZ2YmqkGLfX1BoJ2ACP9LThdXCsKSjVakTDnf7srF2Xsr",
  "key48": "2k88t3vkw8UrR14T1H7u9qMtxD5UXnp4FHUofM6o3MWXNKVR8hior8DiJtBKcrdPFDTEFj9RPeYqv7T8i2ieBxR7",
  "key49": "5G9ydNdK2K2WmbWEcUfLg8ExKsnY8JLkiiifqjgCvet73Byb1L9ujjvdRUesjPTy7Zn655TBa95fccyDFKchtERA"
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
