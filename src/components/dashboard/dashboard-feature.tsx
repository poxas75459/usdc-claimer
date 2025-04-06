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
    "2gwUW9ber1MWuoqwd5QFbaGZE1Aq8bEs3NPtcVoz884Lppy41Q7kEKST5HAmGxvjRHmB7gBMsPyPZtdHGzZV3zbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRVk4a3iCFv5JAYYq4u2KbcSHnjfKuBxPbuHjNNq9BmufNQuswv3zj1pCNB7mnswzRWqcmCz67fNfMiFXRW2tVk",
  "key1": "2bphRyyGzRoJ7Tnj1eFqDPayZJfHZL126hAD6zPSYgQ34CKfTYy13ax3tGkeiqLQ4ZTThJRsJh9gTnCTaeE9qMkm",
  "key2": "7AGp9Agvhd8ELVp1Y4zdddUgRzeDFcayRs4Upqfcs1aUim4gM5bTQzY9f299uXsmURPSwtTK7fhPkgXyPL9S89S",
  "key3": "3dM2FqhJJbZRnhoFv4fURHNAR2dA6SvW4Q6bFByfK7Qkgxfez3JnJwU7n3GYoqcKX9TG2shZ3cot3QKRbYscTvVc",
  "key4": "2NsUEg86mfxrjjs6pBgKmhvowi7PmC4aG79JmBKBGE8TCLez2Sf8krJVfqcYbW4NnQmE519pQTtiUdo1h9mgaofg",
  "key5": "rgnTYkVyskMhkcmib4dWQKJj2pEnzr4BquKCmcfpgUFHgsKGFqwmqSiC1QYFXm14RLAnvgGW3H11PEVWYMTCiP4",
  "key6": "3t8SXbfofymY2wSoAzwaxSAtxkA41Pj3Z7mog8qNw17PMyWA6Hv3Ud8VHdjPu19gmcvFgpyJkxLydTP3guDbVykb",
  "key7": "nJLuE37qwTsCebnQQeE21RzevhS2TWr2xAzmp1VttKNPXkSrQz4htbqEpCRy2etk6MU2mTrjWERYrJdQcELv4Hc",
  "key8": "4ZjSgEvGU8xWFpghbVrQyiSbUqiLvQkADTisEMizRjUR32JQkNDsmnxDEPvKnNvQPZuMp4RLvmor9XvTz2Lyk1gb",
  "key9": "5dVeheJU5f6VNwvdQkYEEvEYTk6UTjERais1wuuWm1v21KC6RZym5pksftXUjauUsntmknXqHb7muJSqsJodsjvQ",
  "key10": "5uk8A29A3hd9fn5Rm26gWpJDH35T7FTrVCcquJ3KrLpuhkXdXenLQgJhUXU6WtYuQ6fAEvpTya7atyBNZftS2sU3",
  "key11": "2omLMHmQ4aUxgGZsdw9WGEG9kVTYd3p9eu8Wq2YtFeNKZVnmp6Lgp2S95fNZtaiEWfXTcvPDGGy6EeAuTzbmxHoX",
  "key12": "raTCNT7XGYBtUsKJYHmN2NSLXd3Et5EGpeRKrFH5b4LZyWPcexWMqQeXdZv4pCpqhvzURwCiA82nBD5mDpkp6sU",
  "key13": "4u1yumK4daezq9Rq3gaa7Sk3WWERjcAS3RbVFxJscByAjoGEivYvz3tPzqjecJ5dKLVTQFQuWgspqoYe5XgSWGeL",
  "key14": "5stGyCwDaozgFfkxcWTrk9x43QkNq7ymUUnFzZicgG1hL9JeEcUD1iqGaKVLJkzU8cvRTWyQGn4BMavLXbV3DuJ9",
  "key15": "4aFcD7E25ajG4fzBu2Q4U1qFJoQsJfQuCeDH193v2sUKZxtB6YMP2Wbm3qfwk6rCJbsnumU1G4n7Ld4Bzr4ixLgh",
  "key16": "5JQ8TwxMxd1r3Nb1YhNaVcAgCp1sD6wBqdWiRQ4qG4LgEyJz8tkU9oHt1X6UepBwfAzwvtxpHmSwzscko85LKV1V",
  "key17": "3zijsFEviGer77UKtvpzjaymvhEeeGqhCSnSeYNosaDTuVBMiQGuUFEmB1ctoyuTibBm1Lta62xU9qPGpkXH8bVU",
  "key18": "3ywZ178jfoMQFUKGQyrjmA1mn8xxxLtrwd7tHRb4fUriEGc7Bpj2YSmu6LHa7j7L7zdpzZfBo23Fumr8oddWxJcj",
  "key19": "3yFTE1KkdminHLaTksDuj23QT9Lz4r4j98qCDBkQB36mtRiKGWmcyYaGdfpoJmrHFet86xSgfNXyXH4fEP5qVEk2",
  "key20": "cbjnuMShKt6DBaHypVPyzrsJBLDn9gDEdGm3jinwfxaD1gbQvmo9n4bjZGyMYf5xbU5AGnQLEWSZ4VTXTYdGRCZ",
  "key21": "3sEBZmc528UET5GR5KEvpwREb6VrAcmac9EX5jEFCujxAKrdB3eRS5hteHczcnvoJqdbYo148kHxDKMT5vmqXQqF",
  "key22": "YMhjWbz52RnkzbZUxmni2udKsrqQvXX2Q35JJjb5MVtqwuoNyFGweGXZCUzSR9NcfecwvRQAtvQEEVyvEkhTiwT",
  "key23": "4E4suna2aNzVukSCFFgwLvi5jSSeR8ZWaLiyCNnKmUzZhamqYKUU19z86xRPg2Z17KsAWnmE1LgKvcnNTdFT5sfw",
  "key24": "xkYNMDEVkk5RipEBMfnvS5sNzxhZVVjnhDeTSHdCkALuhwoKsq5sFr8npgtM3j76NzSfRakX4v6KauxgptrY3za",
  "key25": "4x1zc3mP3JiC7JYcw4SPthLFsSwmb1WLGXvh4Rxnx83hMs1x2RkpWJsZx5CkvPzXB7GnBhrsNxy8FPFKFhRovU1V",
  "key26": "2VHbdCwWvUuRhvfn2bFMZGsyqRc7q2zAD72HuWxpwDiucGAdCzJjPeyxWxt7LtvSs6AX2pMeDqdPAtyifya6a4tn",
  "key27": "5iCCbz7ypfRb4rQzhjNjhEM2A1B6LS8aAsouximLPiPbRwTJZgvdNDfNm5WragSsmpQDjQwqno2yvpwkzgKnKRSD"
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
