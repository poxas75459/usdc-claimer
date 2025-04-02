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
    "23BvH3GKEzz6xyz9pCkMLitb1JP8ao4sdbR9ncoYXnK2DXFetG2RKLaQrTuzc4JzAmVzgWeVV8QbRrxjTnYyih3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVwPyi5Gqi5iyzMBva8aMujf1y5t9Rx7N7XGfUvQmb3TVa5Wfi5XbnXKEcfWUCbRJ65BzmNz5up3KByBznQLpkE",
  "key1": "45YS4aLNkF4RfRH4GAFTyHU3wXTxtEhuX6teXDuWrNEG2gvzwsN21CuNTdJ265hLckyrQH3SR2JDRT1iqVEbvdmq",
  "key2": "3WsvJUJYoNttzvg6phbsvj8WcSTPFfjwHbdJ9UCWegkFJGpWUBJWHU1RL6PZGeuUWKp8gmsD1oAdi2iqZfJjYvVz",
  "key3": "2H6SLEUdkZvQ5h6nYjUJFkRPTqZ8j9LqmzTHCzzfxgLQWzHWEWofqjq75jgr1NzvQtHy1Pf8TayNAEV6W46ZvvTf",
  "key4": "5ZMMfym1pUi6DRYM2YnRs8mjdkQQvBmBBXpNp2pK45GzVCCSPpPGm2isYtVgpsxH9W3YJSgYVjWmpGssdoKe9VWg",
  "key5": "3PvwXN7fv2Gru3H25mFrQF5UAdy8L1DtYhtYFLKPsWVuYPfPs2qtJGEJoDh6FBL5HUBDSAfcG6DfeUgrhgB5VFgZ",
  "key6": "2PVKi622U2Ggf2ACwQUX3B93Sjbb71ZYUeiHhL6mrgPaBAcSeitbSudNXeqdY9EGtWQy82uafreuSBTJDh9HtxrD",
  "key7": "3h2hDTvUPEUAS6M8i1j5WEevDvevw2sqrciQ1t3ctK1dJk63sNFnX6mysXCsdLpcHiwWgdwUSXN4mjBXfWSTGUrU",
  "key8": "2bvEAoWY6mP5Cp3C2uzmw2NhXh662GxknYooXXbsKu2SpdeuYFzHMig4cKQBcmyPVuD8rjemwgNeEU6xDBFpbTpN",
  "key9": "5fhjPZ3zcoo1BdxyWUoJWQwjnD8xAs8KtrcwGkXWcZq9XCYfMUckyQCppDnUYMYiwEWUMvmQn4vp3jrhSvmU4hQv",
  "key10": "341kfobDGS1gnyH5bf5dtEjpTbsuDXorLf4qTM9wP55BAzpb3mA87mu5mNexjt7NydAmLSxffc4KUqP1qaciMSzV",
  "key11": "4iWcGRUo9nYNrCCP8DoiepjnovCPu2EPrm41tJRVuzABcbvNBotXqFmonQoLZBMTjiDCMkkQoo3bSmkjwumh13E",
  "key12": "4fo55Xfm4ehAntqsZkbbMerwDyLSUnw2i8Q4EHBof41unFa8XLXTuzjhgqQhTsscAdHDqeqQiJnBV8ht7rDxpc6i",
  "key13": "3421sMrEfEYzcjRyaifnTSGjnUHYGkVMx1KYb4W4vjqFmkjBvXtKexqCp9W3SSL8QTsS6oUaVbu9UWbE1DRnwrqN",
  "key14": "123V9YLDYVQnGtdBDn1GTWyDi571ySTvBVE34tMY62QrdbzC3QWs1oNnjjv8upfZNeREtGzQJhRn4hd28hUHeBZJ",
  "key15": "jjCi2fTieiBrE8ehGVgTKUgTGtbm7YWzw4JF8diDwvuQooqfjC1f3DgeFZXJv2kmTcLJnB37Jc62qV2JSWQmai2",
  "key16": "61MJhjzbHUNpnYquZqSbQ8mgPbwkELSeHHSZw1vxGpK5Xc3pDYegYkXhqedQPD49snEZQckXnpotgatLeFTJ3hMZ",
  "key17": "4t2XsWYAJcCV5bh748UvbpcbWodVMCgwQpXEJDGgopMw6zo9dxp7pDM4vkPhTTFi7fJMwiCvJ1V5KQSDCK76DfMY",
  "key18": "twcw2F1rYWVuEze5UtdFvhhNqeyRPUGmggidMTSS2pnfcCH7aqxre67Lbs6ZbywPiKfF9p38wDY7Gjub7GiMGSh",
  "key19": "4yD2DmvNfomn8oe2mLBs5wMp3aEehMyJLcR6CTttUio7KVmBmjivNYV4YKMpAih5k1zfdZr5i2kNBdgyszbpRN9B",
  "key20": "4wmnC4SR1zserTkRcHWSfYNwadC7yexBFzoYM7U2M1DZoes2vUq8shJfsH2PHLxvXXmbAyKSuq5A98m56XYhv9f",
  "key21": "2fPgPomCoWQXMzCQGB9M3MuQT71wPBxk9V7DzyExg5D7TwSLUHGTz3Nj1pS9AHqfQLWFAE92t2R9HMZ16EtyFqd8",
  "key22": "5ihRVBpqgf733DvGHiRAZKrCFR6AK5mq5C4TnWPVV52CBDFA9yGPtygEjUPej4Pg4RjTp7hcjqA1P1gUvk888VWh",
  "key23": "6EgFVBnRqhL2UeKi1dvRfL2M69Pq2ow8S9mEXS47KgvStVLnhZh5yuAnLnDLqifhRWzaWWcXZFSyBExFphXxwz7",
  "key24": "38RmZt79iKJjAVbe8ra5duXJzpwnjCmc3KfJtbDHUWyc85U9o8bjtjyXPuQ3WqNCgrgP7mmoWLadyQ34ZVogRdbQ",
  "key25": "HZ637ZG4hDARe7Qdr2Zmh9kfKfVNgDqtRbLz4j3J9HuPmsF5c8yFN9XBnLe7Ah5oduQdYJR8qAj44dhfWHmFU31",
  "key26": "3FM3kUGhf134AncPugt3ruaLieEWYpDWLCZTGjf7Vf2f42pm2hWdCPFEW29gSMDofyeRYgUett3AN3Gmoo3AMgzo",
  "key27": "4H8i1ex9W2X1dKEEyUKvUaUvAFtnRw6Natawkz3sLeYebSFp1HQxzAWs3XXfqEcF3WvWYvsNeqKaWRfQksVwA2i2",
  "key28": "LSfyGGRSKJJBBtmMDzwwFpENJVaHMAMkFieWDDU8eR7cQQ1XSGTbrCGKt8ZS6qEqqLRYgfTyh8PCBRnG225JUi4",
  "key29": "5dccZ6NmwqppEapzTAGnbPsie3vYis9BFiwmw5Uh1V7SHvZPosfUXkh2JkhxrokvPzPiXETYVSjviZUvoy9ueyF3",
  "key30": "3XQKuCtkWFaU5Z9upoFmCWJdZWCksQvjk7J3dRdxATo6FuUbgiB2fqgcWYctiv3fXu6nDSvzCAFMpz6FGtC7ixuR",
  "key31": "3kHHzTwDLWNurhrCjStiYgXFWSjv1q43eoFnewLKBttrFmEs7b6zn3agXDz4Epi4SCFJ2a2PkZXPrW5XWZQv8vwB",
  "key32": "4Z4MYwgEHY64SQ4d3n9D3zxNnrnLJP3UivFV8SvzaH4Qd34DgqhAYCdBHnNRur6x62VkrUbQ8RcTHDXuRD9wWVFB",
  "key33": "23txV2VS4zzfv3qjyjcPZK8h8cifhszTPMomx25KFQeBZUN9afsgba1tyRUkahyNFp1dco4y3Xa2gK8DCYiyQf6d",
  "key34": "3xHffhZuMgguA4gqKoPLuvgjvpbdWc9ggb2xJyxwThpetbRYHshv8mSesBpPeq8QLjmwoV8kDm9bP8DkKNzmeuRT"
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
