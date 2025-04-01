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
    "3S8e39LoWjMXYAufzPcScKHPZQvXSsbUCTDdEHnJmWtxVyrJjcvxJdMf1eoyVY5SVM6Sq3Lu55wvGoh4HAUmeZea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PB6a1j9yY3g7UsfukHy5o86yNE6EW9dKzztYzUVj65BaKrgBnDcng9VDLyiqDt7N5m6HREo69em7eLRxoHP2PH9",
  "key1": "4MXj1Zk2fztNimrRGG3nEpxyFN8jHw8aqg6GPUiH1BYJUNqE58uJwJTTiqnuwVQ9c177ZKW8xebJBMxFrHQWZoUQ",
  "key2": "4c3JX2vzHw9rksAk3sPV9MaBQ5br56qQFz4yxde1zdQKGhr4MuzFCaYKJLRNfMbczdzan2m5L3SFd162FY2Gu5p2",
  "key3": "vRJqRa7t8fbTD4C4AMhh58VYJWJdcEEveiSEfvahkqgrctrMdQLo7nNuem1VLebvhWbkt6bpLhoXm6nbhMmVvRn",
  "key4": "5N3Htu1YpsVNiniQmevXEdmURKJav2ejXAUiS339nXMuJVeZ64VW3FSXviAAWoFfZfHqqz3X6xjc3aLCRGbiBQ7K",
  "key5": "gayFCrPbu2Uo9zt1eHnJCY4omPrPjZRxs3LPaNTA66eNG7dyt2RmJVtfzyVTGFzvFysUjBP8ZxBPTWgewuVh6yr",
  "key6": "5nyocdYQdaqwrtBCUYcbMtVfh8y7Ex6niCMraFLxcS9qeEV1SXhCTNrsh8CLRegLYcV2vKezHJvaWievmw9kq3xZ",
  "key7": "4mbPVKdiEpiSqZwGZPFUstNpYXTakrZL9SFZe8pUAPxvCJRqNiGcYjnVoRsdv6GkRguqHare48VcE5QqJGVS55Ae",
  "key8": "uPSW3JWY44zJFo2a1kET111gYtDe3nch97FPEmzQMQ5dq2iMTebThiMXpmsCDACr7FVVaSA4ftzmKYLsCUah1Cj",
  "key9": "3n8ywhgv81mwFgiNUdbrqgEi3mcjEaXCTNFAmQMU34Eohm4orhkeWT9EcxZQuMKkrkGuRYWCgcRAEoWqTxA9tNpN",
  "key10": "2ufbbGZfmSSjrcasyj6VHWTX5DVaxF2eR8EsXL8GdjJh6PWVaqfYEmeM92BpfiW7tzRNRTWwj7STaXFyVDbSGsK9",
  "key11": "4jECjy2B1siPsHJmhyyG5ogYcLvmEnyACNbuhfrNRmqxsMRo56ySriBoWfcPTbmYgKWXk9Hy7hPfV9k7FV59dwV1",
  "key12": "5dkcUocrSHQAnw9Bd1kncY8CHrHy3252SWpocLSzcmeYyKyd3xqAwDrLhA47jvcYiE93XYG7YLrXZhESWPHtGdfh",
  "key13": "5SosidJbXvCTM1cJGWwfjb6tuubQEPidizd2uBiCeCVYC1eqid9GcZueJRk9jXJbJxXSLZsxzBTh5nZKZZFsPgQX",
  "key14": "4oFUyNoUdd47rbpVnzZTHMm3WCVy2ScqkKaLXmcPfgHLi4gs5HCd5WvrNgXzYZieH6UfnhP1cH7e4LRP2W32J5u3",
  "key15": "2uco6jKsC63pxEsWzoCgTDbC2QiiV5QqaJK92X8X6zssTzz2bnGsETWdy8Zf4HqESZXVPuyFzuxwtWqAVgwGvsQz",
  "key16": "51Uur7ANcSz1utUzg7JY8BmR1vLN25bQJuDPkSztfhX75EHE1WKwuFzZ3DqZRag8jpaZk6ahX7kAb2jdD1p9FHnH",
  "key17": "kXMH1AVozBeEtYJWTG7vzjBzjSmnop3BpzA2XJM1tacNHLPJ8MWsGRvuCUwAQC6pkanfK7bLSx7LdVieJvi7pjL",
  "key18": "bXLr5kvAwPvcPP8Poqi73hMZgBvpQfSMucGaiyKno9JqBpDPdcqF97tMeDaVUvaNRoCizC2A7ubpALJpLsAPGK5",
  "key19": "66w1TkyEi12xhkYZCLB8fRk8ZDF5Zf9XnqBYsv5LvBmSLtktexW4W7wuaNgBEJ81cEZgUPpq3QADeMVj3afRf2Ki",
  "key20": "2SwTmy9S77KW33b1NKA27QSa1pHvWfGmMyjKqksKZHKue51PvLmzaxShPAmJn1AFRGC127En6PG2Dn9p4beHgRon",
  "key21": "3tkNN1MV1zPmrAvKf3bYyL3W3M4EwKLUCwhKfYthfbLZU56nNGWuyRepvQfNqa5ahUfCxPEEbJdQHk6QNQGBCaJR",
  "key22": "26q93TPS62uUvT821hja5PKTL4CBSrkxZqFszM3Loms6MApHFxPo2jum23zBhjWKhJvNeYk8UT8HVu1Q5e1YRpU4",
  "key23": "3fF8HzNHt9fM16KDWMnQcoBrY5hkUZ7Cv9ek5r8cM57en8XndnJj4UkcTPZ6T3E3RxDEw8Mde9FTLM9m7cn2riCQ",
  "key24": "4Njj2aL9uxwqJzNxzv6ijJ69cp2JwkonUbXzVwuBUYXcymkn8ZhndAPGV3VKPMwgqekcxjm3oMsk15gCwrKYE9eR",
  "key25": "3XNLXNykht8Fh4P7pmWGFf731sekP1Z8i3VSw8FdMTBryWJ1xMfwSYj9XDQT7BeHeQBBA8bU1CFtjfhr9vDdbTUE",
  "key26": "1fpf58vLQSUUeuzRk1UEkyybaSmc5tbULeaUd94Jjg9M7kcn5yKB7yvYn2AdUgQP5qhbd8oxfax7cVhSfyroxN3",
  "key27": "47TfQNDAkQQQ87ycaUCB3XnbPATnoWRmKjtWugdrQZhVYvJcMzCRMymQLj7mC9TX2pJWhxQHyGdS7WjsygvgaFz8",
  "key28": "363ydaniL8X4CtCzV5uLVSbxsbaUDJa6Eq9kMNCcGLmrF8bKQDQr5sqkCr14kGkWQN1fik7P2Mq3BmddP15ESXPM",
  "key29": "5h9SDwwDVLWhgJwauJM2QDoYT68AYpKJCbbJcoMnQsfq7PYpxTZKNRjkeuujLQnS7AZxtriBoWTFoJBPNUjLDjWr",
  "key30": "w7Pc3vV22RYeXanzzq2xdeqxemBx36wcLGjc9eZ9JwpTHGotXE5VnKyt5w6JCHgLQkJMkR6UpzXJ2hR4nz2UrwJ",
  "key31": "5iQQNE9JowcqupFCgDQZejn9VZ4QFGnndHCBBkjuEknN7WinwBfrFGocc9zkFRHNZjW5AvyX3qVGFFUzECSJ1j21",
  "key32": "Nvarsku7Zr1NJFEEpCdKCxFDNbKx2YS2NgPKgizZkzmPPytZZYoXwMhEUhFadUoVwdKqcWuaq8h3wYY44NV3Ugz",
  "key33": "2zo8VZ9KH7GSNJXoMdf5zXzrJsER7xdRbNzd7CmAU6HFmRAutJHDJ9qyVePRRL6pFz26U84ZNr8pqALtyQrjNn1o",
  "key34": "2caLZq1Xq2Lcvkjy8Sr2ck6YzBAFCHW8qP1iXKc3ZdKocaxq7yFfp2N7TryEbzLrSdnbcNK8dd2p41HDnKdQY8TM",
  "key35": "4FqRL8BY8HqX6j1bGt8S1F7KadUEeRrYtrX9Ys5ximbizXyKx5eTztG9kkbsppseydZaTXHd3BqrSqaxiqpGAsnR",
  "key36": "4xCyH29bvTS3Hc6tZCRJtLLnLQwF77KC6V4bffXLmEmkKzZ9Zh8A3UEuxhRgbm1a9AXjWn1HT7bgpNVPZLWJFX9U",
  "key37": "3cJGhgWT6XSrfwivPoP5hHKvEykMU44GtiP2ayog4Y3MaHnwHbizk4U2nzDLSKAJyKwCHz3BLw5LStQKVumyJ9FY",
  "key38": "2qjwEqeGdS1hbbdYupfbDZKSB2obgQr2mTsBW9Ha7Cfaz67Sg29etZ4bsQwACBezo9GQ7UfJfqvkaJ97PqiiCTpj",
  "key39": "5K4WB5Pf3SeT1z9bNTFYiJ6KtsoFm8uzqET6GAvZbJFpUBUVKXvwenAhTtVLqwJfrfLnHB9RKr69qHLdkQRiY38E",
  "key40": "57WWs5sp8kuVQ5UjbQ1DxvQMLUL6RHCEzsCiz4TUtyLuEJKuehhTiJYB4yJSuBAUzq26szkRzn525vc6ZYwcG8WY",
  "key41": "qdNY3SreX7EmHjcDhmNQNQ5JSMsKBsaQ9PeRoN4qser3VSNbgMuXXK8icREcQo6HeGMfL9j9NZz42EL2c4Am53Y"
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
