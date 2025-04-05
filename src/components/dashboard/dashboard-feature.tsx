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
    "47rKgFFZQYyDH5feDE59zxnB6hAvEc5fmESBzwQ2jQrdweHZb9CdAKtiQDdkj4eiEDLrrd4aXjPud64QLV2LXtRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EBTZWBSni3A27SvVpohKjifpXqP3WnWxxVVEdm7gAYHf4XweGrU3NpAzpHbJEyv9KjasCf86vVmi2kdM51JuSU",
  "key1": "3uaKfdEj6uwB92egrWQUAcpxfWMwAkRMUZ6AUZj25dbJXqv4DuDoS2QoeoCW3KDDvCbyYXEyridLhHx6XNm5jBuv",
  "key2": "2C5vJVEwTYknHjSzKYkGiaM6Pm3RpvJ5o2rnbSzvBJcFXac8R9sjGL9zfpSy1Xyti5VmLRMpYjnPxFPTbkWixhB3",
  "key3": "63gUGKrsUJLZPyTTtSm3sGX85fi7DNLcfNk1EecUMiSULNkf61vTmTnrQLaLwyL4T94YNybV1eVZj25HkXiUecUQ",
  "key4": "24PtzNcaMDt3UN1qpHrHf7ybWQvabM8bbVTR54E9wdFLuauw89zyQKqdGnSRwqqoZXxTNghqUqjVDubtcirjd7b2",
  "key5": "FKcsNyqEVzQneJQJo1BtPRatvFDr9oHf1KSgqnG7bk473XC2DF4LDu2erjfjVYFNdCt29rBDkaJghLuTF22SP5Y",
  "key6": "4U5zKBtsX4U1F9oxU2PPSTdjPt6MZgkqmgGg9CWUzxorhrkTddZh54mB3HBShi6ZEhX9tNXytG2XR5FxxQyovVV9",
  "key7": "2kaLTDEcJpDnfmj8mUSnf2u1BLS2Scjvfqi6VUwQxmF9jBhD2LTfJ5NPJQwjn9GGHZBb8swC3ESi8s4xPtJK1TJo",
  "key8": "3B3vLpoBipViqYjmWpfx3aDiNt2p6Navk1CZwaDLW92hphbXo3VduLTqR224tfwpsHNJvqCWnPdRo3AC6YGNc5JJ",
  "key9": "4z7ejwda4GPz4KTzrYTHgAPXZiLsLcFX2bUuhBzHQi81SSizGTjYnVmpyDJWME9YAj4ntHuPtUqWzjAQKSw28Ycp",
  "key10": "3mZQC4yXBFFtuxs8nqwrxw25BCYcc7C2rWaD9rrCtmTVgvZPAibzwCr1F815XiUyQcJMTezTi875hgdAAkHZWBrT",
  "key11": "3nwzxxjT5RSTp3gRVxkBSYh6k1RvLzcpSBkNZzK43oKwF8YEHqxVHogmUFnNnehTnCCBguxoX3BSGrzsW2Nn4jbw",
  "key12": "4aNKYTrjZa2bpWjvude7UQej6EyKdNFtTike4chq47ZiuiT4ziWSj3P9j4LKo9TvJd93b9r8A3VKfvC9Cyo7wvds",
  "key13": "5GBuoHtfue16tsEUtD2Wk488LsYNxJxf1QvieDNmiHCRG7mkSjNwdEfMWGCkXBnsDhNzskXP2EnTaSnH3w9Qht1q",
  "key14": "23MVeiDGS3YqsSkGi5kaDjvVtGpyESeX6XhNpMuRrycnagXebnsLN7gnjRGTWLxbWLnMMPML6fvMythu4EEDJQuM",
  "key15": "22ZBuxcBjrKDzkp7nDmjZWpUtZiQAzGSLSGZ9xUT17kBA6gNk5pq5t7g5Sk89YvTQn4gpFek4omRLsePeALRCWjs",
  "key16": "22a82iGByknN67inHPq6Y9e47yvdDAWy3pxnpV293BbcGPVXq5Yh1NmLpfc99UaqcFqQR3tjFzn4DKW5CadBAinw",
  "key17": "4ga1EgUzBJpE5wPizQfuahkiwST59fVmCV8ynoGWA9oCMSP8wguAx25Em5YGDGS1nCoXdBdDGb9u7LMMWihA9i35",
  "key18": "s1iqpsGyesSRSnCNK7LxmHqMuZ9BA597w4PnwwC9H6AvFCoNvNSuMLZY4fskNBGqToeTqB53K5YHKcQ56abVHAU",
  "key19": "hhzEt4sLt2bAQTkn3kxADjGMt2tkR9idx5u9mEe2GjWXo6Q8SUJsjW1UQTd8kMfRfPK3JAcUm5DRRYDB7vTuJUU",
  "key20": "2YvJabkpQzozkm16Wiq17W8cmVRUybWWcXxPs3qFiBDERFYnfSrpQoZ86LcymF68tndsX6oDD6AudNvcmZBhjixC",
  "key21": "2fSrm9JJ7DzLrqzX5hZVuJ8VHLk8rbEBvKQurHm4Wps8L1mwhUEULnc7F4tjrQdKVKueToZiqAK6gcK1GAnGE4HL",
  "key22": "49JbmmtfCTBuo28pMzJYziBgcwiSJDM4sKBzNYb9TdMyz2Aoj5Z38csLrbxkCzpSS5dBkjrJwXSh4c6WGvKRZMCG",
  "key23": "4owVEdUC96JsNa4SV4FambTpD9e8hsQ5Pj3eKu8vGZhryvs3Do2VQr1iwm9Kv6uDgEi5FzuWW5KzdwG5i7kgqpTw",
  "key24": "e29QZhjxu89puVGTNefiejGELGkW5a6Ucnvjc7VnKTaC2fWeTV8tvn2S78hnQFjXhPzJ32MxZXVJGttudwaC8is",
  "key25": "52Lq9QwuhNuMgNymAX68WqahX5X34Aj6fjVNWv1cjwVx94c2WEz65hRwrsoq8PRiyVUMFvDvR9ipC1Bv32mY51mQ",
  "key26": "5YdPyZTstn1YreQ3uwKfmvThqkZ3og1fiBuR9YjmTsw2B3eix2efWcQBLTKKB1yUpNfrRCV5xkBZrhN8LBNj4hwa",
  "key27": "4XxTwbpHQc4LLXv2CXRejxSyjyX2vrUhxzUoL9i3Jq8B6aJc3Y2MtGcEWQCSfsJJ3F8og89ACLA7AF5SyP5r4okH",
  "key28": "3tXRw4iJZrk4tSpupd5UTEN7EyH84sW55BgPo1kfWfjwTDhkJABUkLiiCEfLVGW2n2y49d4tyX6ao3m5xE8jj83f",
  "key29": "4GdchRn6VANbgySGS8eUt3WxctJHQX3irhLbnftHLZzfp7TpodKG4jDYoTACPb3vMgpuxXc8fJLwYFbk5j7yG5yB",
  "key30": "4n7HhnpY4zusG8ddzv4aeomRV2q3dnyVvZYNxME4tACBorCQz3zViivMP3w1ZbLZQdCjQQNY1n2hDfE9rtRDhucP",
  "key31": "uWU2MLen4z6dFbsdb1RnCTKYCWKx4UmGEC2mRYBGw2szEKbGx6UMrMN5HKnJA5YQrTZp72jBXPT4CzJ1cMfvF7V",
  "key32": "3LwgjpdL8dbxEsJpxdQEFS9v2MJTaqmGoHmC2dP6UMJRVr1smf5jS25ZuiisTu5DU3ZNozqDbQTQJM3KeFYdxGAk",
  "key33": "2hnbTBgVtNJRHcGeQGdCjCadBq2kiLpXYarGg6ers8gML6oSVLANWobYFURUPdW1R9bLycqJZcFdXnE6nfKnWqDA",
  "key34": "jM6YKpebaZCLcEwSLyrV6mVrqB2QSev9PJR5akV2DL9Pw5Q33DT7xyvSi8z1mfWqvWTwq9qWgHD1GD6HCtG2cjr",
  "key35": "iFqqLvXyL7hESgd1kpMkT33Ke8DtKbV4zFe46GgCDCBYVx4m9nAapoqRpybKmey7JXYQ4YNVWgw2bnze6QMgCed",
  "key36": "3cYe38hsKXYgr1zm3jYxvsDSveHhjf1EXcE7dpboLtRUyeY9UpuBccTgc3q5QfYWd4DaH19GzwW31nqFmf2JxzHn",
  "key37": "AYt4UAeKgGfgJvNWQNctamEDcrsnSUS5Z4HupDwwqBb2aSFvkAaETyGZ17s8YtMWXNM5mcAbyerwgmC7jwx9rzw",
  "key38": "5pu71DTkzCmMLZw1ADzcNywAQKGmE3DrLBA9LU1qasSS9NXSr5XgTqGdxLCFcRafmMCtzcLJYAN7eppYeCx7CajT",
  "key39": "3PxBLxRbs2RxQMApgJKXzL7h7sEJrLuYV5DpvFa2BG8WMJHTvGEFWtfNzKuJ7vX9JMmRF5dRkx8mNLkix8fYpQaU",
  "key40": "4yZwvwKTZpjUAZ19egpsawH5KgVPihN2BRUKU3ua357nE8LiVZbrfpEwG2bGkv3AC8rWshYqNaoQZqLFoKFNPmcW",
  "key41": "5xoTN8oXCMcu5XrJQFLhJni1WDpGbB5DoyLosUMpisgNnLVVNg6Eh7T57pSq36H9mgLP7XTjBTwrw4suzyVbnqHh",
  "key42": "27Ye8ZiVAgAxfKwLfdMRGVPTZwpkpWy54b9hWL524cq482Fg2Mx3Lrq78Sx6Kay8ac6WzP7k92modrpNqBKTFmxL",
  "key43": "46b7gd8gEWtXxRYiZteZtjhJNKWufNVqjTQJubSi3pTXt2k5sQ3kBzosjHUNCTkimzQBBnjuu2fPbcfFtcG7CSod",
  "key44": "34fgNb5E9N8ETEXUUtTfRAxs9BuhYPZD8n9Eb9egLQoz4kmrz7QfGrgUW6Z6Hs696LBe33DpH7ax6qURZoo2XbGi",
  "key45": "pcBTbLdQ8cBZrC6MGY4G4uabzB9goYR5hbg8uw1PaRE8rRiAjGGzYgDSpQG9M2Cx5q3VGuivFaVMjsS82Px4XqJ",
  "key46": "3Fg1QEfYSRsLAmG5AWFqUSvSXTwdcA2JZs7AoKaH9MevhdMLgBmBiEn45EX9pb37ky3nC6a4bdAGv61Jo4J98gk9",
  "key47": "8dBbvLhTbB3XC6iuGrqLDWBB622d3xMSxyUt4U5Zai58hDNBLdXtyARmPZTsHgnHsokBbhv1D2Vm6CtDBdWS3is"
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
