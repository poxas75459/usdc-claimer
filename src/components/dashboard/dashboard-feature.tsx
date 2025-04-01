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
    "24Ku9BFSKfPp5v3vszjzGDCdimVFLcBL58WEXmPDMhPpYP3kSZemTuDVNFqoz55saDEBZwtumo96jde4mZjtXZHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NEZu4Nt1BPmrYy44scDdu3qHsPb2ifdMuqmoZGyBpMum6uy1oPVKFzeJc1WNPDmFT4DzQiRFDKJr6hKUFZo2gzt",
  "key1": "4TqZsuHgKNTXGMPf77ut7L3uoWK5i5d1jj7QMx52ABYdtV4ucgiyzRuw9Xz7rRMhqRkM6EJ5etvvGzm1VtsZFhzp",
  "key2": "3SiCWQUotk7LqFrzn9gLAoUgjW4VzS7V5NNNw1Q14qq1NQYXVJywXznaf7QBHXRKURHhcAoa6X6dWULYjyvJVUHp",
  "key3": "6qrz7v3jvbVynV8fcC4N6ufG9gPRbibPNd5b37wrbgoEFxVyjW8WMgNPKu8ACriEQekvXdrowEDGDSDuT1rWDXc",
  "key4": "5Ujdn7dXsP2c4UZX9iMLPkp5yCX55TwK8cRJ1JbzketkMrs2HGqoCdbnZRJQtzzm2Dtm9bkyWmFSNBGzWvtxyPYr",
  "key5": "3pzBapqF4nEuKVE4Rdn7zWzFAnx7J5foxwjwiHQeY8QeoskWga8kCcK4S1ENZPnmVyGbFbrFwZ4Mhu64Q2xUtsD1",
  "key6": "4cKWHqw633atSzogxw54pjoCydbpL5aowY3g1hC7WUa5HM4fjk9GzMzbEfofkjLvxBYp5GBLCFsKM9qwk4f8JBoU",
  "key7": "geRik6EbWya26WCkKvYUStfUcfnvwPScgQ1NyCTeSQRisNYkqA5d2aQx2NAFLASmqCu8T3JP7joqG2vx1wxgXFX",
  "key8": "2RC9BBJo9vnFANP6bmZ3XFmYbKnTtfFcA8k6rkXwoqFTKFMSahduuqAeRMibHqwuGQZJWY9k6Xd5q5DkoQRAV3zC",
  "key9": "4zySd41Hk1rpcAB2VwwhRzPdu6qYsKbNvuj7EoGwhm3BVbTfPK1HnknGHTaoyLEF8Bq3QUDMG6wYXDc8t3Ejf5F",
  "key10": "2SY6UFAswEP8wAN527LL554V4v82e3zGMpsiDU7ywKz41aSieKCzB71mHBZtXfAWhsCrk61uPzNcCnCJN3mCGjN2",
  "key11": "3YWsCL2rhvKB2av2qgp7RorB9f3MqUEJUr5UxZ48fQHgNrB9aLno2iazYx6AZTPbs9ekbZZPixFBjFVBrZdC5R1f",
  "key12": "2BhtbPncDyUB3cGzQLaL3MRYnjEcd22ymcB3DznBgBuBLUkyKszSKeEJVNnhmoyNWZXBjaRf2esapxRGn2gzTHPj",
  "key13": "435cxT2uRjsnc3ET5i8QDbWsHzwmk6j9aeP3QxCCPyyYkgZyst73esygovcB3mUutCF3fHipxNYN9Bqs1U6s94aP",
  "key14": "5ZNCS2VJunEsj8M1dgp7tcamW1JTkvARK6VZrdA5CZ7T6NSRPUzZLhQE87mmAPiyS5BKt5Fx7q8msAFjcCg56r9W",
  "key15": "AVPKZphKvpQKzQvvjAyNQYur2NXhoJYm9rLw7ogfu9ZMZ2G8frT6pyPdXAjwbLpNHRm8AUXFzq3ywMqd7EMEPas",
  "key16": "4kXEkw1ULnXAKJzRDTL8xqb5fmxDLjh8XpNmAHcLSEVH9sKzLPjMNdq2RXqdvL9SR8wF6FL8xxM8oA5G1gd1H8B6",
  "key17": "292hgUR6XWd3GLtKM5ipPbzaBAabG3gntkK4VSgXyondxHLgQKVdF8HEkx1LK4uJnckYFVqsUiFjjo779UJRdsWQ",
  "key18": "fxxXMj881LGzDNYUpjTL6PUexgp2xzMcykTsHXFmGTJEVXJNGRvk3Y7ZSjrn9p5B8Xg571PxC5Tu7N3qDvL8Eak",
  "key19": "4Q4f61Cj9FrbQs4A3oVFdcJ1NZxs3J49y8fpyuG1dgBhWR13x5h4jdkjkEC9vv79SRAdGtRjDMRyBstZ4Q4dQ3zZ",
  "key20": "2QuvAx4xnjPyRf1Zqcaj3dzwjT5m1GGDhYwJtbE3HEGPJezB6agH6LwZLsYwmZb9cw7ppUkvvH4pfPPCy7BshPyG",
  "key21": "2umux1Cmm6drNmCj33MdyjSyjfxAoiahLqvpRu8nQwBjc3sRiv6UkFBaAbzmPr2TMzxg4Fus3Mn16NGdm5jh5n4E",
  "key22": "3HS9DFhoCMN4rvTdEDaR9FxZxU4tCRqmGzuVzHB2t43GYLKomMerzBpJvK9419JdzfkKLx1YVidqTyvauYAiwjuR",
  "key23": "6qJmPKvo89US3LXnMaigjDtD5MAruyyDmSYHg7uc9yvhRwjHEV9hpNBLXbCTbGoZPazMvmCDRvKkqWCZYetcqGQ",
  "key24": "SGiMEsjpWsuxTYAwrLj23DrkbZUsX97ipZWA5FJWnVUXHSKtwULKwZCJcmEXHWsnYy8Nf2ysXFKFy67nBHKLo1U",
  "key25": "2rmVbjEVsx5qAqPRo9YyJmwgvwBCjW8aqMSmStG3Lf2qNT75DDaTxVYda4aGBXp43vsaYBVsXkfWUsAiuuXNkYfG",
  "key26": "2tfK2EcFnKFTNdspz4cv7XBgEe4jLw2FY9crm7S3Seb5Tqx9pnZfz1VJatsXnVY9D6DL1TPvxLXocjvBUWAUK5rd",
  "key27": "2NuLzwnqPPoSvY54oD4CaN9n4msBuft2M3eaf5e1D2shen1roCaW43Ppnuyt9HfQFkbM99BVMKg7Z14homFJVBf1",
  "key28": "35UcMDgd6DafSdnoHUPVyAZp9AuZ9TAux7F1kpp829NnoCqEWPH7pzbupCQbd797PYFRGVrkexEDcnUgGpsCud5c",
  "key29": "3j3ze258wxEm3dLWhj1aZdewm4BfyESWkzveJS8Wz4LGXJXorbgpUAK7nFUJBTB1PVAUcoENKtkDotN88W5w3xZd",
  "key30": "Xhtvaq9isbiZ6jSfk5hCzLqNtHaE7vrxppwfjX6dy1BakKCEpY4GHhNhFUXFqH5AcrZ3gM4pMFcb7XvqAmrwuav",
  "key31": "2Mk98Y2jqZWwhisTQgQwMgRJHzG78UVoqrNcWrB97qqNVcY1pm9KJcBMFBFgx46Buy2qrY6C7GVY2oLSG5Wmw9FM",
  "key32": "4W6Eb5dPHNm8q3io4dGugDbpuqh2c23caKe16aMoFtKD2s9wmEBBLnunpa7PGGDzZkz7iuBgA7br1Fwq3iDPQKCP",
  "key33": "2yAZtDGNYxv2TvHM3WKZqcx49P5LrgBZhw3YPNaBuo9z8Xo1rxXyD5egDuNpM6SRK4dv2FxZ9Lx5pwjS2cuQD3nC",
  "key34": "3j5hw8GvFQtY287GTRVQ6c2p7DR8FSyyfRzTZsYy24oPDK4NdVdQKi7rTjdPdob8u2D1y6hMzV9KYxrSU4fjeLnE",
  "key35": "53Wq3f2ng8TK3ZyTHGPWo36FLCvvNRZ91Co8wj1tMFFACdN6gYEw3N4ofTWTSqtmSdsdz6Z6PcsXcueY2gRLbYKn",
  "key36": "5HVJ5GwRS4HbDkx5Tqptyp2biniRTrpbnFkMDUN42pnN5xqFcznKXWGSZcG67A8TLs3qzdfeZ3oZn7Be2MPWbF5i",
  "key37": "RL4kAfbch3VZz96NdSpyki28VMpNSLtetetPcL7wTBzv8anLtxW72VgmM8T8pPCh21TcUwsKn52DrH1a2EqNi9B",
  "key38": "3aFqqMQZjUETiYo3dgvUjzuLfHRYKYMKFDbya41UMQ9tkFvNqETb3vmjbDpDzA8tMeRiiUQik2Yk5dLNxq4EfNSP",
  "key39": "26a2bcTLKNRmjJSjg7vZUjYs33mNYqJPhKDSQ4dJ9iMDbWM4os6M12MqNc3FxYUVeShteDkk1BKCbkQALvVfueXM",
  "key40": "KqS1cBzmUU21Qh4yvdFqwxz6pmwW2sN63SRkbwP8KGRPpfBQ1aofaEcbY6h4TXeedJvvizUsXXE2yW7ae8HLMV2",
  "key41": "2JX6bN2rQBwd82Qhdt5a7nVMBb4DWYdzEuricpnXq478ma7dL962VzUs9S1WJh9KBJvTMUU8nXrftY386xZMPvsv",
  "key42": "79p91h69ccwwyuYboGewbDYYgPtvpY7EdJom5sb2MYpTAgHnsipgAX6yD6Ai9ERsnxsdr58vqMoyAcxU85w9gDB",
  "key43": "5gpfmzJQNuP1K5ezWcphhnCq5KLJTKWNfrUF1kQhq3qWGBDfsCyxKGFUWFhYssbhxTZLzjFwW4Nm7K5w2FsiZksG",
  "key44": "3aTRQVJNqvyC2YkfaPsouCptbepdEpFVAjakkqRJRRNCTRthyoX4kiWDMxUP7g8PKsH3rCx5SPN97sWWHTVMic1H",
  "key45": "5oWesUYMLeGe5evrmKNpUcs9rtzNHWBRA2ef7zD26VTPm3DCpWAXSwMAU3TKBnjP45FaL4TSYV1mpXo2SM6yv6hU",
  "key46": "4KKUXxLAXhtzNEdz3SbFJiYS3WChq4rZH2bxUbbkr8HZ3K4ANn1wp5rBuTBCuiVZ9cnAMWZdpuXUfKUquwC4LDVA",
  "key47": "25MTFZhUayg6DuRQp9L7YZX8Cr9ZUGHM9TK2VSkysZBr8zCbcSzexZ1R4vYoq81VRAoaBeQ2NhWCEMJTVDAoYq1Y",
  "key48": "5heoyTWCQDmLGKciPgB4Y1MDhkmeT4zmAan3FrmBFYS32ChTsPkKXZEwtwKD8zgLwkURo81vu8k4MvsFHCHp95CV",
  "key49": "3uJfxrkZMZbdJ1KFuQFovZXdNGWZsjHx62D7W2xf8CeRTdzDnivk8U5T9KGSFyqG2dTL1cHjYZrsu1GjeAuDyXfz"
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
