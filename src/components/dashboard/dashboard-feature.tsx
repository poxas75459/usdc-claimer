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
    "8kr8wLnUSrspVj9DHH5BvwhV1eN96LPbsjjxT8qarDCNjDdxoqTjqBWFXSkLJqVGFAde7mv9Vo7WuVgZm179nvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YJZBqRCzaQuXFF74bMzfDme4JLzdLUwm8diDGynaW7PmkqbE6AyQmLXymWaDxfoEaWbxWJ5rAzkHPP6FRQ6nb7m",
  "key1": "RWTUV4Aqc679UZ9QJtZwQRxVWxxQcEChn7sUGYCr1pd7FybU92aHrSeeZZF6vQQQPpMq81vwXuZQno4FZD8NYZi",
  "key2": "o5B44XfV8b3pHqNNoHXuxe8hgyko5vqJq4zGXwrQrjyGHdaVTDQ9DvX3yweMXx3ugxhkX13Kku4ScNxzS82athY",
  "key3": "4tNR7ncx6WKYJcYrZommNxEMgyJwRAWpeMPHMT2LAHJrfwjFEddwGZe1F6TroY6XfzARpeXijCrPR3z1AR9bUEWY",
  "key4": "47uJCw98K6xbRwMAukqGwhDy7YK8tm42v5YaR6ZUQJuQRbcFxxFg6M4eqegnrbkX1wfKD6F1PKVGrR9han39uasJ",
  "key5": "4dYAfmmDb5PKrQaxuG16AaQU1Vyc2TmZiS6vih6nVbDcKkhgEBUDUCZs8eo7wrQ4LcFhZPrWfX14C1dPrH1kL3d7",
  "key6": "4wQWWR6yxgRBM5EnkXTj84C4BcSh1cV5hp8bg4pjSmgMh1azUgPJPxa3nDNKpTseCzQq7yCTxZZDETPkpwvCeCWX",
  "key7": "ahVFCsMmwp844tfoJ267Zc72hyQkv9SizEpRwiQpnjjMTEytNmzb2NerVm2pBrzVQHmyBv5CJBQBFdN1t84hp4k",
  "key8": "2U6aa8mdTJ8kdN75Gbxu1c9zSK8VNk8azypDLbLCMdYFBTTeAE7TFEto3foTXZEKv1gGrSjXAdTUQ1rhKBfqvE2D",
  "key9": "3J8TB2yx4zUHmnNPW41f8C74btHQr2fLKkbvkQSrDYNUYXhV6zTWHhZukzHkSMoeNRTe8H8jDtLHW1oEs66Xvxfd",
  "key10": "4ZxbKPZgaxxqMQTxkYGCGVS19PjAsWzUeCXfuHjrkcioXndQWjw6Mr4i75ANNsqogoLF6e1VMhfnZ6EyLs4WVeLz",
  "key11": "4rQxzJSK8ywofpdu6uzPuLXM6fAu95r6sFFiWDobtb4zRjJY78g3g5oQjgVhXewpZQkYzqdJLqE6L1VPhMpmHFXW",
  "key12": "4HPmERHQ9Rr42kQPuRw3v3bB5EgVyYYX6UBiaem5j9LeZhCbSbjgtCNtZAE5z9puQu3DX5xzpH5TjQQohAi1wxAZ",
  "key13": "55mEejUJJhVq8s8jr2ww6ZMFMfkmu2mJYLJsdVWSn4iXM8WVLRs4ZLixF8E1dDxE1Fgg4Kj3QKsbFKe648KQkHZM",
  "key14": "55QPRJLTvZmcXDjswCqWgqTK8GYH5KiGHahvWJzAiZgcoZH8xYsZs9aFTVxQRrJTLPGhUv53fRPNWPMzrR7gH9fF",
  "key15": "4gnWLwDZXhBvwmHXUsjmeHJmW2MVRtY5HnSjNamPViWiPUirKdnjTK8U38XmdXpCqSR7fT9pAktoRvo1mQWK5UW7",
  "key16": "2XSa3p1m6BSz2Xxa5ZiwagkXz9A1XwindVfka592UjPPsQev5jeQoQVwJqMsmP6Cu1y3xuvv1ujgEqBLqT5K8GWt",
  "key17": "3QtJed4VedtVieLRezN6qJmXya5JwMkRqH9axwTPcfj6rfMUWnyhNVBwgU7gq9GQMX2ynhiyEphQhQEfVaiMvgyH",
  "key18": "5nfg36RWFWaN28QbTY15WPbCNhDQythJLeBE2XZ2q4u7s5Kq9S7ZtWarem5p3oTjUuyWReZFw4ZU3RpmQfgBbso9",
  "key19": "4Aog8HAdHM1xqpXCKykng5rYzPebDNraRToqnSCMLi8Xm2Bb1tjuBLnDUt6GkXA95TPe442yNiC1gSqTba4jTF2t",
  "key20": "BGjcmjy63SJGst1821M4GxGgdnBNfQP4EMKCyaRHm4nNqAMMPp7h6PnWo7M7ThvToCWKDdoo232VYHth2sE1AKa",
  "key21": "de7EHBMAkPZ6fk7aHUr6xtkTWavUzDtStSAX2oBg8vS8VPH5GfsRJFho9zmErjgr2YzULCeAzysewFTFvD6CykT",
  "key22": "3C8FcsNrwYycoiUhvhDw39XDZbECEQ7URBqaNS2miBo7AbQfMmNPeJeqWERMWjW7hNcSHzNKB3DE24QAuxT3EpsV",
  "key23": "28fbRfP9Ny3bed91zDQ8uyFewQeJZ573k84WRe9oRYRCoSJ6eQXTxtiAMdqZDRwtXGHUwGRREYVntH4w9Rhw4SQd",
  "key24": "2FKNpLADEzUsPfcE4evCTQehYDvk65opDjNbRa78hrqNzNczWBgvytmLZPZWcLr87PLRYT3zzsUVGhj7NPvaoVnh",
  "key25": "2ctDWoUhndYnyjPofS6wKD6F6Keya9p5b7v5RA4DKobqWfe1Dxs4mMuBFPVmivPXBEHSQuEtNmTasf6Ak6agUWRp",
  "key26": "31QYD1SbaRhdhS23kb1BYacAbBxiwXEc14KveWxCSKciX7kkz2dRXAurjQdQMRFY47QUmGnp6mS864WXua4LYFuK",
  "key27": "8qLH7MmrLVZ1JrvWPT3NumZ4ebrt5pt1T8A9eH8BqAWwz1DEHfgp8i9ZoX53wLRhRnAfLgG9FuD6ESEtCLGUn7i",
  "key28": "58pJfV9Hf5N2aAw8XUe1p3wVfcgz8cjwmz53PEfs2sysXJzuFMUuYgajtKrqieMx3n77pxcF6wY9juFUnQhLaVV",
  "key29": "4utBb23gAX2uJojZ8DPUJvEPUT5DBQmrufVny1GXPFiXEDwojU6Wp82bq4au2xxmf9aVqcupYzhEWikgdEbeP3f9",
  "key30": "4ENCnVyB5ZjUSP43vcDrCXgtM1oDR4PLV7RUmYbvStCKYcgVbaydVnhMmp8zy9UCNHt3hh2RZFWshTU4BFG1RJXw",
  "key31": "5REYAWoGNThfuH4ANyswgvpw9vmQCzczhzCTgj672oS2qzQSjJQrZYiQSt7R5fnDYoMXV25Lz5uAJzWXDhRXy41N",
  "key32": "3rrp78sg15QrXX9UWKv8esCn26M5Z2oa71Ad85oA3sDpBXmkHDMXW69WdQf7Sdd9xbBUorvgjvFXMwFikPdkBZya"
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
