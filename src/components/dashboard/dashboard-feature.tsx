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
    "5i8boequzpm6ahUkUEGWVMEEBdGwcaw4Q5EpCe5bmKeKjsAueD776Wt8desLAZGw5riJWvjy7muUCPnU1HXGSRXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26YLzeZrZEYSuBVeAga7Vg1Ap1PEBzqRKbvpCu7iEiss3kaLkvkCfxstLFPd6odChMfapCqf8RTzW36jAM4Yq6U3",
  "key1": "5eyFBurV1Bqf8Z6AEsrjByxdkw4KpGkX9T3wuhjiy3PSguGmwU8dgrUBgjtGrZu8M4SNhD8cfbtgLQB48PQAG7ZG",
  "key2": "41rPT5Bsv4yDBB5i8cEPnk33QTJyV2ruxTSxxznKvZJH82CLywujPYLanBFknBTaHuoWq9YtqWio5xoEDSf1Q9uW",
  "key3": "5bwFgdMLtc57aGyGJnrMytDkHbszuydZemYbKcRYrhtteu7pnyNGUdnh2H2oAE2Dhf6n8mSw44Bkgyu1DoW9ySpw",
  "key4": "kYWZByfxKEAaFKJFMCftnmAifCZTewTcZG9j5dmbNtVgzm8FV7YWQbp4Pdgc1DuE8To64u6HTsGW3HFTWuhPJct",
  "key5": "5L7U1rPNQU3PKLWadteN8PivDmcPJB7Jh7cHXvNqSjsaaRo3T1DNyc5CLNN1GTpwrGcDzE7XPvabw9zRNThPw24W",
  "key6": "5exmPQjLMjE9BGMBr1Ewdgub3yGvTRBZN7vSPutSTDJCQp6LuVDznZy5UjxHfN1wmswo8KqacpddWhqMmEAmY6UG",
  "key7": "y5LFpBVvQex1Fd5qi8SDas8Ch2DxWWMYxFminR61wcWfjB26djSkRtG15EtK1AvQqpM4mhosf9pRaKr5hZ7CsxY",
  "key8": "3znqaEgMyeLmPVK7JL8b9nBLcFmNYJLtRwXPbDyVycmwxQTtu99mfqpbet3WzuVzsiug4NzyFZL7AosnCHKyMLxh",
  "key9": "3vTA3KZwqZUcREKnxWkfs8XVA7c8YwSujjtcWt6xLZgNDpvTKSoC3mJjexv2w5i6u9CVDukzpnAnape1oSZ5bKdV",
  "key10": "3V4E2tqpzXGrLEF236CKah3Ke7CTdeRKx5X3NJ2AYZeFeS51h28qg2j6BJazsjsaL3qXbyuQnnZhHMeUczezxhep",
  "key11": "2CBb4bh3QRTat3iEhs8UoHmjL8A96tzLpNfHtfA8MKFcrwZRnAtH2YpdzSG9hZNbtWCYwxnRzrKobTY8wVuXPX79",
  "key12": "5RSrgyWBD7wvqWbZdpXwGBpHdQYN4GkrPBqwBFpDZ5Mfz9deRbi6b1p1BGX749NtZp1DqDWUrFPP4f1mTiqtEZy2",
  "key13": "3y8EaB3sppvYNr8fxATsjXKi2qypUxZAP1nsuut5YvebBVQ6jsoQYCA3DMHPuRKeACDcYrFAmAJ8rSsoScRVhYkz",
  "key14": "3ZMBUmLbuMRLohKxYpPtXqQwfZ6cCxHa4yiTpjvdDsu3R5Ch17PpcJTSZW2YmNUX4ynWzU8z7PKGNgPc4awfpzxz",
  "key15": "3bVvLwdrPHtjKSVQ4BQVREY3d8Cp2ABjLkp58SCE3GbA7iUBXnCRGaMdt4Js5nduFEUg3tePZ7qCdBo3aTru6PhX",
  "key16": "oJF3y8EdSjjStaecEpAKx7AFf44GycKVC2yqgVTZpmYKWwcvrxGnGCccqcHu4KK5B1QZyp3NEUj6QG1Kr1eBr98",
  "key17": "4xDtuEaEDa72MLmT22VMe58eG2j82ipTqh2G5X8jDPfKoWyQcugE7K1Zn4AQAhAqhbFuT28SBtFTA5VHBfdt4P2S",
  "key18": "3AZ3dFA6RWRgKoHLhucABMMsBuvr6qHsMpGfrfAHQFSgFS67dbXDX6HsfhULUbfSSyxVuWaJwbS9PZBmv2CvANmf",
  "key19": "2fbb63AhokwpMyFt8cVK27wGoKAdiZ21JRMmpa6HkMVLY3oSefS9Kaht6wYwh4kwL2bCAHPfRTBy8tVYjzSCeKsw",
  "key20": "HLbFJnf6WPs5Ft3i54nJh93XWeezQbtC8Ym2NVXxdp6FYGgFZULh5P11v8M5CGVDR5UWg4ADv8yALXwS8mjCyxC",
  "key21": "5uHuMVgVpWBuoJNencN9QC5Aw5jpDWCypdZCWVnbKM9zMPByEb9mjrYkJJgAhmJbYxJzDGqd6CwXBANqJ94Z94v2",
  "key22": "4VDcRJuuhmpcEPtuVQSkDQWCeUk1Ed9Vi65koJTLWpx8FsK3mZV9CUiFfhoYnwvhjJdvT73x1KqjKozMgWPwHoV3",
  "key23": "5NYa4Lrho1FWbityK5Ty7yXNW92WZrKDTh3Jsi1wQJfqyX8ddtzniMjS6nqiUePi9vhvbcn5kiWK9ZsZ6AeSgdMD",
  "key24": "3kBtx7JihfBheUu3kEW9dAjEgo2HCmtSn8HXULnUb6ZdyoW2wwhiC2VG5bkiVSpwBWrFRwbCoDXBZqVZrPUTmoMB",
  "key25": "hrGVVp7QvNqaD7mP1sugKk5EEdoifxC6A561Ndjp9X7AKBHGHrAKg3co5bmT4eJREyhPqsatZ9xicEHZRPX3JzA",
  "key26": "5Hg7a1LwFkY1FanNNhmiaQdZtLKYNMVvSoz8rRGV5BMjGg9WD3GVNqarEm1JktNTCzD3URdeNDUMb1c8xo842azQ",
  "key27": "4GZdq4YWpE8CHYuD55yDBBybTQm7BKwjsSyozKHRZD998Sve7USvhWVbFjrsjG8rUT9ou67w1uATijJGqFqKHyGq",
  "key28": "2RXAg7afmqEywTENQZ28ArXk3equ79ws9RmVs1FKU9pJywcRLqvdvRf5gKEwD2GteYMif13bWJ8dcj6z99iRdKHc",
  "key29": "3TwTxanqCZCrgd4uz3srAMPoHdMQWWA6VU6L6Gjf1harheLXQf5tWJLQ5RiP9JQRvL1DtXzAE5CAjrbLxeGkRjqt",
  "key30": "GEvKaqBfPEtsFemPwuNxwWrUJ9KLAAuwjZYNgJWs1scSZagjtohcBeZXg7PBJQvpPYPFnfJ69QwxSuQBzMAWR5K",
  "key31": "5eg8ewrxxvnkJZsN7Zy6mQMnsxsXP2EzqEgF9auCu6qrWmxXrUAnQQQnUPHeRWxS2HxQqLeRe4xMvcRtPKqhd236",
  "key32": "2E9ozUEFPvgdVGDNwLsndQcjrenbjMRtMuC4FYf8fo5FLYbxDTDR3BFZoN6k4Hf8Bs6iLynywYNmDs5biCbEE3Y6",
  "key33": "25pJvq7xGQYusLXb6aRHTh4YppbBBztZKzVRem5vbcM7ijeu8UXs74XeWRK7bMj6WndFRbA7RS7uPSWJBXkkwNvP",
  "key34": "4Y1TfeWZAFL51hw86YhHCyv81iiCe7JDjzwqBm9YDSreVrhyEZeSjSh3GJjM6ju4oQ5v7Z4oLMvpumhF1Np8VznR",
  "key35": "4PKWg58yaHFMdPXYEFwfkMJUgegY97e94RrC2cW9FMugcHJPCsWm6stRWv5T9w5ZswamfbgLgoPH7mkjvXoqYcNG",
  "key36": "Y6FAPnFGGajXjgHkgMmXLuTR44HX7upgANx342jPZKpkvKH8P43VAyH1UE7wTpo1aCc8ycDWKrMfLFxRhb1TQnk",
  "key37": "2Xnko3zHLanzkfjw4cWGiXCmmmEdYLoCX2L48mBe3uh2jLZexmdR931YcQC7pNpWsDHUMTCURRDaXdTeYoQEewxM",
  "key38": "BRdruC4m66dhivjA9uc87pKtzaUaeT1iWWziuhybbMQ5LwYL4EsWuQFCtLNjabdnUgFjNY7PjJb2hu7NmUTmEAn",
  "key39": "4241g5o95GSiP1ezP89Lmkta7p89M2rGcYu5BgTqEXrZFg79n6Aj1R24pX8FmEZsRLSGBbe4XrSGfxvWZ8uffyma",
  "key40": "9Mcqb1bvGjbHGASZZuab7xGUvmGdyRsruXVEHGobRoyJGHzWmpFk743WfcQNJ5TUerosZ17cKtLfsLm5mrGzatx",
  "key41": "34uZPQ2rkkEAvF51MtZEa33uoGFcbmxaqA6ZfWv72DUcXboFkHfbzHhXdwtw8kyy28BYFzCHVZqdYBkThz6mczXD",
  "key42": "2noMhaTYzpH7Mkwvcu46naTXRoHWYkwL83k4wHYcNC1kcTmUi5GLtX8FA8NtasYRhwGxSvC9Fq9PYpFtvUBRo9T4",
  "key43": "4q6yBSYVpP8jBdoNzRZdaquFVCGV2myhJgPcJvUR2Usns2VycJgiDeQiGtpvQRSY1xsXAt9WgwqtGy777pX6gcSC",
  "key44": "S8pi92bFbogpREVyg8weJfhhmnJVULDeFMq9xncpCvHB59zECTy7MK18Td1dTmT4pCQXUhYJg93YNec7JEKDKyP"
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
