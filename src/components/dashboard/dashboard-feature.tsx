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
    "4n8oLTHPtK4N1LgtmU9BnSakepiUF4ue7W5uMVhAxumSFA2Ps5Lcfgpjmak1pHK3BoaKFqMcXKY9iy4qjBerfSPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmKqxYZzjPohVmUm8eoBaKNDBFzSFrLnc6c6by2QJYit6BULZvX4Vrf3oyYQf12uLSuu7A2B2Y8B5QVBk6pHPMY",
  "key1": "4c6NcbtCDb4LX1UKsTaexmt1ZgZaUECkwX6HN52wWdNSCJD7M9onwu6KRUmxtXQUzGWQaa92SBEobUZvfp4E2LAY",
  "key2": "5nsWM6EHYEsPFFBQDeGnHPGY8vEafot35niZAQgpc3LiNfzQBRc2eRxuxtE1Q3aSXpP8YspQkFX1NowAE3ZCE6aL",
  "key3": "2enRNmEnXyWcug1AnGdnpdEwRHxNUbRwTfPf6iXKiZSM1hHC9bcWj7yAErTQn7v6B9sEv7SrvpkdtgmCELXdJDyu",
  "key4": "4hq9MnfQL86jhFtq8o5cida1pXQ3Rck9esjfeP6VXdcVW7y8n8D8H36oEse2sd4xx2vK6PsEjY3ikstfg7omorGH",
  "key5": "4MjxNxgXn8rs3WMDzdLL1uhRLJk9oCwXZdfhnCtKJCMPKaajjCg2rSAoCYNRkPdquYSQqWoWeh8WxhVTmLbiikX6",
  "key6": "3t1zJfFdMn2mYmBa5T5sak7ZMofLkPgV1NNKECWDQSEmCFUmxC8TuXGNbxwuMad5tz6BXtuGa7q7F6oKJgouW3Jy",
  "key7": "5ytZkKhFv7pcE1VJ6t5km2RyN1j35g1mq3w2havxrp3EUADmUZVHjCmW6taZDSXYtGKvQNW2L4EmANazU1iuP3KV",
  "key8": "3cHYtio7aYmeQhcBSWLxhqrKcWA5J7s2aisaD8LDihjg1wuYnDgCtr8mc4m5zekusn4qbpRHnYfCSi1CGKbJv7yP",
  "key9": "5WDm1Y7p3cNJaX7nE9Ju6sNJQWVXjuyACfyFZq8H7oAuFxLajTonfbQa5nUBG8ra6CgMUBZaD6vofJBp4ojRp4Qk",
  "key10": "4PKZqYkMai7iaFV2owwkVDMH1UuiFfVwb6ddsYAroJjsxDZrUngAdAWAjrmpkopMYTb3fUpqfmgmrMWLA9gEiZ49",
  "key11": "56LXCzK2vp1TEA5irnfvYyBQ97m49ngMXSXC8yFRxyaVkJP61mFuLGNBQ7gXxuS3y3kukpT6WUipBAaZpjQQAsd6",
  "key12": "5VqNbfvxrwKijSzicfcySr5xu1NuZxXpUVDmwc7NvETgfhaUamZ49FoWZaZXMHodLhvo2VW5vRsTHm99vFdqb9QC",
  "key13": "4hyL2vMyHkhPD8drVYFC8f6PobzFGv62DZ9KAfschB7GtJPzd69xT85kGy4VZwczx8rHqpxqRmbbm2gFxNixp796",
  "key14": "CWedBtrQ3gwNvTY7rBsNuPFbqpCz9S77rZtjD6hbvFJrxacPyeVYzGXCt5WFyKxapoCfrFjeL1WcrPatbNBjkk3",
  "key15": "2Y6tQ1aEDaPtM4v8VU3rcKmjeowpg5X7ZWtVm9jQjALiaNDabximw9sWka5jDRQMZDYqJfUCADXtiDLpmhnP6yfF",
  "key16": "3oLxhjsZTt9bWFi4rLwbyQzWc4oHGLDc894cCYGAbUHuh4ve6kkAKQV6NcsQymJPvrwgYAPmQQ7KYvbFpgQ9kCR4",
  "key17": "5xm9yGtveh7QEtn4fFozR4XkzCo2Ab3FnaAkEXD3pirHhUbiLFYHyY3wegjpzricJKzDsuqiBkWL76vwGAvLSBXA",
  "key18": "QZDRLjJYfxPGTf3hqBwyqF1V2muvYNaDiZhPvv8STCnBmMPdeQd4hnWbjKM7eMpUQ3H78AgdJfxy4ZvquMSrcnS",
  "key19": "67KTPqu25kBrifcLvLGtSZTRtoCAw2gWNNWiRHw2ku6mcZeBCSZRiwxWXzrMzpqUVB58mnEfSVkw1zgMuR1boaef",
  "key20": "mwRBPeQt5WjUeu1jmsC9vvc5XFGyKug1yX96yLEutbkCbpKqCDwu8PKCapMKpofNmpLTtxtbBRpDhrJ2piHXWz2",
  "key21": "MgxG6KV822b5N9rGhjhjkZgCVqLLqf886WhcZKmT27MUfMSZW4PSZAy3FKLZZmhWqX2rNxdg31LW4mwccxmunnZ",
  "key22": "5hzEDfe1FJwX5QPkQp14DfBoF5RHukxxKXsTjudSNt5b6QhTZwErS6g1GPiNDCZNyRcjTxcxRciPeLqrJBWfYF4i",
  "key23": "5GMs93gjp36A7Ukh4GXk4QvpCZHoTWoTA7mpDgmmMynPtnSRpMdjLimFwB1S1cijaNexosFXB5xyLFvtTLG5mWUG",
  "key24": "2H7fVyRvjVRvdCUNHoX7UjGQGjnfXU8y38RThPr7gexU4u8eGPSK19kLYr3fF1yMsMQqi7ursutnm8GdupEUtwxS",
  "key25": "Bv6cgVGYAxx3UnCjVP6KGRHd1VyqwQpVkaShd4DuJjvLA4223UVNp9KSzUUnsPDcVk5nLC4fD5Ujj2ncJE1LBPV",
  "key26": "33f9DajBHP3wctrQjty1oTfthhvfezQixcbaBFXJz1YQtm4r6PiGpmUm5cMfjh44FCYWjsBKBbswGMW7kdT8Fs5n",
  "key27": "3ZATzmLbMKr9F3Bq3RdEcP5i2NqawmSof6YfGhbt9XqvEAwtLX1hk5QbDAAj9WxZLsjALLp98aThNk5yqHr8eMZv",
  "key28": "28GohKFWKZoZZyXjy6BkJJHb4QuE9XZF4dpUS3QdEN6DSEAgFJ2Q1ngjPDBdqMBQ5gFnt457RWonAi4nq8RYvRxX",
  "key29": "4acsvip3cDcjJRGXxRCqLrJJyULrDdi7ewWwZHA9zGy3zAGbWvcDNguNYNPA42WKRHnt33eNYnb1EjfY6WK5p1Mg",
  "key30": "3arv5XM3WmyLXjtnWY1yhgh1YNswDrMh9XMvyowrEu4sUA6pF1iWyehWnbkCD9qvTkzBEsWUmak9VyFCDKAhjA26",
  "key31": "3RaBYdsM4pMNz9CqVGct3iD8bT58eBy4RraTsSdS4s17BvYUbqDzJ2FMuYiUPRRfMJfwg1n9KMyQFVw84uAHomSf",
  "key32": "m21beMrKLkE6d4ACgWFyDq5RSZs5NyLsoCMF5qN8Jc4zkvKiTTExArsbRtQbwEqX9asVokvGCAi8kTsUoRUpCnP",
  "key33": "3Xt8MzshovijmQEkBApawxvqmaJXTqzr6JqLtzXQNqfrB8LwxPHU8E9C4p3PxF9iBL7ajkqSMeaBKRrey9aXsycB",
  "key34": "5NAUjw1WXbxCUwieDXTDx4neFE8jjPzKYGgvxJ7t66bNzkg9dBsMbpWysG3DRpgoJV5ZsCc4W6K95if3UE5B5i3S",
  "key35": "5A2a1MKaeoJFUAo8MmdbdCMRt3wfXytoaTnVioSzvetxcgKnMAHTap12xgLMMc3XAfTuWNo9no6SirVb4EbkeEmm",
  "key36": "2RfKJDmsCouNufrJwTQrS96XXUVfv6NcERWUBY3Xof6ZwMufA4t4w5y5rnugys7pZJ4hiPJKdcBMZjPtJxkc6Zqd",
  "key37": "4uj3HcHGKeRSunujVn8V4vRMfLjQvq6RzaNiV7tnLdXCyRQg4NNqGaV4Ze31sX4sUC5rT5U5JorLnRPeHkTCQjud"
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
