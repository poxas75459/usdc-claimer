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
    "5rsA4gYPoemkoCq8o1BpukQGz6C8bg2gMvz1k2tFc2Q1vi8snpP3WhBtz5wGjJ7WdMCNnG1ro2w1GtmW2NbbHo5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjTGBjCDijzaJrbVDnwJggWuUeg7LLo1tADPSqrSPZSrVN5MR8AaYy4tbKBnyFo2TSnZvcqgbid4CTLVugVzqyk",
  "key1": "uEBuEwUnTYwj18mwMsGNno7nf5W8yg3Cnyj2K3PLFLaYQc16Myx6PLBTwMTAXYRTjA8tdX2nNQZMVbovYG5HQXS",
  "key2": "3tpvFGHN2HdvLUhaW6wq172ZujtUx9aE8Ta12NeympeRHpP51YEraQmBk66LqHh19Z6EQz9zhaiacwq9Vw5V8tST",
  "key3": "2p77jWcfJQP2ksHFXks4jv1sHMC7Y4gfrY36K6Lv6cxEAQTNNT3aKfrnXXZCH8hhRbxuKycFQYTMhRC5VmYHyRaX",
  "key4": "4LcSsoMFRiZDe6c8tM9jRdzB2YLsCz3oCCzvTxeHgp1QeME4zjXTSKi2TXmkJxij9Kc4dRr14ss9FXHb3c9KP6cp",
  "key5": "2ZbhMpHFKPRt8PfYCt18toyrFXUZpeCRXZTyBFWdBBA14truxDw2GbyhwdiUKKEUSgn5Fj74qNxqbcCrTGVff8Z1",
  "key6": "4h8iaH3o1oQ1NTk4HNbzuKjPk6oJrAY6EZxAxq1rC2G4NhPED73kawmyrrdpfkppyKZAsXaeELLUVMy4oz7WGkgE",
  "key7": "5VR5AmnD7Yobz27KKfcFxV8L6yV4E28N18DGb6DGk9PCkRnqKVULBqHHu7rCXbvwhuxfYoUyXoNe5NhHWV7wKzMY",
  "key8": "2NQGY7t1pxPEaKfzt37DMLLA1w6BF2mA7GQBqaLow3fHJBiJPweEd8ey6MjCfNKVGSuuTevkz6w7QvfV4Y3VnZ5Q",
  "key9": "5hJGzaVzpGkumFEmCTyoafoS3jBuWfcxAop46mU7k9z6XMty342ka4CpSJSpuFWWgvF5gSkzaw5DzCKY6fpyKmDr",
  "key10": "4xVZp81vwqoAFfhTE76GKWWYbtAeym38dn3ibghuPJAmR7Yxt1SdkzNQBFhbDKSNZzPJpt5K9EqnxUj23FwwGVEe",
  "key11": "9cMfwLB99tzdFKcJVGhri11Ke97QzEMMZa22UtHc3FFyDGn2jftrJ1UYnUUNMiq1YNqqNjD1DfaHmxiDyyDftYz",
  "key12": "4y7BXkjVjVc6oVM9axLw51FupzTksZHLQAQ1jCbtrgiMgS9uudbDkCwses6Hy9hnMqyNrzo5aVabbtkmNCF2pg9f",
  "key13": "o1bZpGscK4x8AzXvGj9xDcYGx4rYy8z5NmSLPGQnHtc9eXgzhThNETrRqXhc5VcHYFNoLAMKhPM1zuBR9U2dYbN",
  "key14": "51DZRnpzGcy4Qv7Ss5ZU52AkXc9Qqhy9GcQb5oQkoNUGMmQE1nkJ1goW3j88bwMiEYhjwzyXdig1mRLDtiGBiSCJ",
  "key15": "5v3C2N7bFdecDPKZCYuwQJFE1AMfq8SrSRkJR9rzgwjF2bHXVKUTLwBDcmCQ8tk7KnwYwwHiYWv121178EbEEABC",
  "key16": "sC96yQ5Liye8XU8BtBfMMAWevrfZ2w8gzbUoQALJFqiJHFrTUjca4eE9QR2TUjLsaXMoEcmrdFfMyTs4Y5aSCTc",
  "key17": "2FqctQ1EUBWLoXufpTHKTqd2P5JSXnNwFsZ41cHMF9tdvxyTHH8bMZoCUEcyUgtYB2sTwMGEMvXVD8VHvdg2uFNM",
  "key18": "5nCPtBirniY9fNxcW6oPeXWTjThw67baGXNhRryZd2k2ngt6FcU5djnRbkmhtXf3hDVVmrx3dJZcaS95TZSkxwGA",
  "key19": "21oKjEKnBp3DTcTAZLMhumrqH3ed5w4eUG6JUf7AuC1GuncwgtXqLjJQYc1mMTnwHkS6Fj6BYaSaAsq3V2Lmkrn6",
  "key20": "3KRCu9LUPGMfHgCQbGXgFZehDgQ4GittuUZMhkfRhDocQvzoAd4QvVBMuLymvkLzDkMwv7n7fBbijHPJmKvQuXBH",
  "key21": "YAuMNGxxiz8ksUuSR1SzHXYRKQTLyCeXo9VsSGZQgfFW1uScFhaRxivayPMnZ7cJscQNRmNrjnXmsDYjJ2UY4Sh",
  "key22": "4oouz2x4v4SDPSrCtCNqBtkjjx97fsPUzrThK3rmjceUkLa1k43JRuRV7aTxeGr6J7Wh3QD9Vy3pAe8REwCCeU1s",
  "key23": "5NhKmyDSodoZDvKY8CQtjgnwDCjcpw2VADKmvAPHr3zcyhygrtBRnLuXuLrT388X4WK41qPzRp76XoQAs7inkxiN",
  "key24": "5yuAamS3SRn72NDAFNHEdmKgu5U45tPrpxeVsHYWjUKdQGSmE4tAsg5Tyky758Ny1m6YyHENwuqdmHwqNydMhL8R",
  "key25": "5rpuEXgzsqBNr7fJjXdYGP7YiHY8brcFvHzfGP8MDq9WSB1uWM3RjbVG2D1sFV9BVbNHM9PnYbYUN7FWN3ER5Zwu",
  "key26": "2zCmgGgpJCMQfs96aJrfcTZuzbFxfdmsTbAKMFG8j9JRS2bUH3QvTCsxaTYQVmDuoTKX8JipbYamiPtextEq9q5W",
  "key27": "5duLr3htqB3ADHdFZ7A6xrNkL5rSPTYXQjUvPsW4fvW35GKhUL1puSruDbcqeu6iWvgdLvXM1NvJ6UDVgFnkhzjQ",
  "key28": "52KmCFydkshz5Ntn4Pjr9VyW2uVQ7ypNU14YrVrsYawbYcDApNx87HYmowk7chPaTpZqG1d9sBfwPfos8ZrgP1xH",
  "key29": "3qV7rZjWfX64DGWHmbYrXBMmevS6zZLVsuFZ9yUsUuhUUoaGrfGBDZbKJp1qHMfib5nPifWKbH7oTLeM3Rd85wyz",
  "key30": "mGjmx427WTJrcXQjAHp899msJZkfQQ2ZiTrEoJwkk1E4nWPGqzPNRFABjaJo9GDVEUsZehfej1xt2rpLGgqUrqt",
  "key31": "46ZvffXhFkz77NJ5aG3J8odDsroStgmeLoouxG7Eihmt5GWWCZFsbSh8nwnQbDELusFQUZamRupPZrook6eFgi5W",
  "key32": "3TiRtfW5bbxbNJhdiw3t1NB1ttFbf67SHDiKsJY4L6vTLWnUPqxH6V8LN3vqvxesoZV1jPNabnWRuQUoNS8X2ykS",
  "key33": "3eTyn5rwKF71FsVj3LnH6DZZs7Ves6cqHppbWsdiK1T2sDJDHi4DrjcXA9HRVQdv3UFruhgJQGtqsPPFU6ZMKox",
  "key34": "4mJkKDSv2DTFvYtG6mjiYyUG5WxchZPb9JgZnzAbq5VwoNmdwWJ9YWENTd6WfSxSCTQWuuBfUz8BgND5uK9ZWwXN",
  "key35": "5ceHk5a5QyCqEhMFLV4fiFbW8qhHZ96D54aNoCu4Ms9iJ2G5bSyohGeNUxYo8Z9incyXvJwdUd8KgXcxPhZkj7wc",
  "key36": "3jmAB1GAq8AcMNyVgfwaHTXTsHk2GCb73ojvibLNq7rviAeay8y8mms9JkrijpkZy6WCVVp2XPyWJ2ai6DiuqAJK",
  "key37": "5ux5cabfURgzMWUKE2TKhkkb2PsUvUNad6qGaoEVatMgY63rr9bTy2T1jVQrgNrXFvocaeQQpagoQubwoKN1PZyg",
  "key38": "4tfCFRRnAe9vSjWK32khuW4QHFrBPuKhWZFS6JKGrHw5CPDjdeVQ3fPeM3RXoe1vMpp3kJcAyX59hNL699wz2zG8",
  "key39": "2PaxrVd1Udwh6kHny8qdzBukKeTi2AZPuacPQeoLs2ZdAHFoiXK13Rpy1AV5W9hiC3G5zbDdsReE4Hi3BuX8s9M5",
  "key40": "2Ltz3AEqnHUY5QSUV1nAyY89gmg3cRzb9aqXBit79heSy95txwBbmXTCsJ2ZNvxDF2wr9E2bgypcTy52wgE8m7QB",
  "key41": "2zXnRLgvuxNj4D18TeVvu5SsLiXw5PiUAKkSJmwg9Jr6QGKiSkwTEyW1UqEnCxsDezpksxewiHeMzMxPA3Vg4xRE",
  "key42": "55MBQkqVmi5gt7tTjWvQzxTtK1ghU4wBxQodB5yJqCzM98unzsyYzwYQUhmA8f9i8UpdhfizNxMs3um3Wuvnepmc",
  "key43": "5GWeVBPFcASkPRXJeq5LRTqZNiALdBuZvWg9nuUHUBEECDMCiwcWLigJaUhGyUfoqaTzcas85Ld8K4GJetL3irNk"
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
