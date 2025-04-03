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
    "5b7bYTRGbNfFf4j1bHCEVjiUY94TdTVVdMVsQUaEpjya68gSANWiPGaeFPn4GcL3vCQkq4U4u8kfv7ELepUTUXZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKVhc6pwwXg4Pv7znD3SQ3nLd31CvECbdrMNRdFUhLfNEwqqiguvfhkyuNTqJ3XEEojX44y7RGTUDBSJ6xKDEX4",
  "key1": "xmejRFakRvRpxcon25Z4xWfkiVKhcZf5yE3Ki7qMRBkArifGFohaEqzt6s76XupzXV3cXuXSAHtwYgMg3ADvxBv",
  "key2": "3BN4n4XNkFQEPsQat3HZcQPbQ9pnUR5o6kdA6sbfxJQeGrHFpAr37dz2f4ewR4pxTiFtVfytaYxv6iUrj5KPT3Fq",
  "key3": "2qK9muSDMeXAxsFcY5QQM8rchVXBThEDKorQj7FfRFMoEzfg3UHyj78LC98dnVfvtcVVHweM4nwfUjbbTsPPJmmW",
  "key4": "2Hk7EpYbzvtP44c1nQQwoXnjgZiwbNk6DBq5No5TSkwae1Yj8deDmBFA1NB3Ae4eN13H6EBrLQfh73heJd6ZSQxk",
  "key5": "4JvJqHgdbGXxT9ZPb1eGQKTKTvj1EWFaTWMSN8HwcwEXLQ3s2SXUTBy1BNySmd2FFqDDUtcFkvV8Pj6MhXHBizuC",
  "key6": "4JbRGf5FZkeSfmTQxLu1E18AJwxhYCToqX34huNmMbUbpTX6iyk7WP7h121hmYSAfvjXjAkJj7iVQo2BcBh22kz7",
  "key7": "4yko8yYjiykaDe2ndCwqSsW5HFywwdJbcwS5373cVHWQipHz6RurBBEr8QSi3fTYyzMFUFSUELZMv9AVswvYPZcn",
  "key8": "L7okqvhTvV93AzRYV6sa8Vo9R3ev8UCZHB7BNx9mxVYzyRCZzrpXHqMaCv1uKcZxwaX7FPTKX1wTSdoupfhwtbB",
  "key9": "oAviMv5pgDPZM3RTdzQXjdijp4UnpdpqLDV7iozsshvFFAwCebzKtoaPcWXuaod54Cky54by3tuqe86zhDgpaYi",
  "key10": "35WMRct7XLcmRpKMcQfcCUc7SX6oS2rncWr4P6ZQK5bwWDxzjqrdsJxGb749dL2L71uhQz4SrrR1GZfiumKFS2bk",
  "key11": "wJzUyJn4C5VXAtVTWTX2Vao15bBXNB5EMoR4PSasxKQygfNjs8UqMkGuuMLh28frH4yRSqWHXU1AHP9z1WddwD7",
  "key12": "5ASkZKS44pXsPhE4tyDxaZM8qzMFP7FmX86oBruxrFi41QeHFkG38mEGn6oiEhD5Kr6K14PtcjdJQGvFY44dTMAZ",
  "key13": "3AXQZ4LyLBi1GAzJpUqUVfr21UkxnUekPS1ddNjThnVS99JfgcfgSkLHAkVXz3y5sdd3pbvrYraVcWD8jh1T8aB3",
  "key14": "2mbS7GQVNkiyFNuwso5JbyMbWerbF2Zzzn7PNarhLbm3fi9tCZD1UDDRQZfCgNzGmPwMJoCxhqst2p7kbnzWxBBM",
  "key15": "3LRQ1vqTnNh4Gv4DSuQZ6uqHQLvy6EYaSYCQDmuhwhAB3cUjxTLxoKaYcpNj4VFHedaDj81rUCb6Kkyb6NAntXw8",
  "key16": "3T3QoyhHmzPjrbjPtPebg44f7Mv689GBaGBu4u4UXsKQH7g48tHLTfon7h9Yqast6HvSr164t9YpoutXKb7nD7u3",
  "key17": "4j8TSkJsqDi6gNodUJpWHN7qwB9ajBYEnjDyMRh11THPBPv9aFLUUFwBBa4pjrP4LGh5sNmzi9YAhWzd5yx5jZgU",
  "key18": "ep7rKJJHr9qb464y4DWbJ86LLrJUhtaC1VtRobvR6QGxytdxxGYybJVfXYuusCKQ8TkgRHk9WCo8LKNiDWvH3ci",
  "key19": "5ywmjGoGjvUca1MjMPJboecDDNLkMDzcBjjcJWsdckMpigtX5dYv1DupJiehGXQyHB8ekE7bdEt3hjR2fij6g3ok",
  "key20": "2Xs2ntj2gBYQLNy7VU7T5fa3BD8iUmAV1L6wwHztkr35Nvvvmq5ZPek1YGo5BZSamvaJNUpYgfj2sBwRsajwbvun",
  "key21": "5c6RRATw7Z9oRDzuyeEixhxy2jLfTj5JEXY6Ek1svHQHEkX3jn4j9zgriKq9f35uhNYdUynB6bi4do8fMDc5at1d",
  "key22": "HpnpS1k2HWr1a5gK9vZsRnCKnQxquaQVq9XVaghqLqiYjhy1qHfCocaZsnYn8vpVq7RrNNzZhXcLxezGLeaDka5",
  "key23": "3719J8eUwnNBqd4kYNZsSGEn9dbzRU7iD7y123nUVcsr9KDE2ntHMJm1HWcnD6CZr4RtMJjmjKMELsdXoKHzZkAy",
  "key24": "GzED4pKSebnNNoXSf6yQTzcBwiDiJcqxoshJ8e7XjgtowzrdtyqzQ1bxq5W4FG2eDv91Cxm6k6oFBNmWQyZWEWJ",
  "key25": "563B9mAbh4mK3LUtoyhD4BYctvGKNEGNtYRj5Mcq7S1TrraB4GbH7oUK66n5MFJfT7pNdxFgRTKzVWeP9v47goJP",
  "key26": "2Y4bGcSL86St2v8869m7JwEPZfxJVSv2SXgehNEMWLrUJR7rETNtaHyrNsPspEkUYBFmJacEELvkXznXs24iqrA2",
  "key27": "3rfpEEyzeHzByJWEGSFs8Zzr3jiqgKdVrPYTMBZESKoiJFKhoQSQuuhs8i7hisJaydBHrTZmg3KN4LeQeVLLhwUv",
  "key28": "MEywaPuxUXs9MsyWsCoDbmenibfxfD8WZxLzNUMk84pboW3LZUTNHsyR5ca8moedC4wKRpb72SUSPJfLUMRvmuS",
  "key29": "29e31mMGAmPsdvAjrDDg6EvTUAjpTS3fmtgJjhMz5ZPNmxPw2YaoXPck47eSenY4nz886sm4sqiyC6ac4CqHdr2x"
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
