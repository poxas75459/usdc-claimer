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
    "2vFTuburfeZ68oJdiH6N45TXAKLepvtLGDy4CmUPZX8KvxDAvMEGQXTFc3tPkR7PnzjDkvGgk83cH7ueeEVrECXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5X7sztEMd8chQGQhZHoibnctFFmrgU4HkRMB9Atx4FJP9pgRSk6daYRq6EwwyqQcA7Z25NdhEXBM7BkwsU6x8S",
  "key1": "56rvNwQjGAEmoen1ew44c456tXC1VEjgmEgpg4crD9o9UKjSXCaFwEk4Z4igZGEa2eEgYqREzd3vVUmpyLkPi1J3",
  "key2": "WuPwRx67xqBE3DVVUGgxS3ThGkHKe7Knd3wHwt4n65DezJxjFbBLduoeNMXPJHWc5H6KY7nT2vdDXQ1FgiCXTGT",
  "key3": "3JLuffbqhtbHXvhsdr3BNhhfMYkuWDfYkfDZWFu8mcyXjDYqjqELgxfWT9D9hs8UewNmqnCfhYf46dAq1t1Rq3Hn",
  "key4": "2j3TQeznYc5b7o4dKqpXvuVSKyDkEM4PPA38vgL3LdqjnA3P3ZfEGcW54oPaPaY9Lxx2UZ8gwNedKURvkLhykyBD",
  "key5": "yykgdxMGSMuFSQ8EzSTRqNdVcgtR4cgXpnLe3WzYWSDnU2xSG8ZWFXfFd2LMBqtSAWmLziq8KdtX5diWN5ZPxEU",
  "key6": "FZRe3BX7T2Dpyz8UUD3XtyGPiT3hSzRNvJK15jXQtYgHcZyQUfmAKhuKPdt9jRL7z9EAiZURZYxPXtDYNDE97b5",
  "key7": "4P1k3BZF1xvmr7ZHCBErmReQFv1iH7C4VVP1iFV4v8eqULsJsKLvzPiX724NQUMQByMzDstv45MHXEMx4N7XFzjW",
  "key8": "4kj6VkCZXsi3ZSgaXWAWGxwYz13FpNqe6v9BgggFHvHUmG9U4PLooaVAQvHCVM9vZeUdCD7YE8qKxHwUk8DWNosx",
  "key9": "25JtF7yQWt1sEbNzHXGppogccx6jVa6Ti4RWhD5sw9KxCa886M1Aj55GDgSMSY65fyL56jGjfRtD2pCMMZtXs8yi",
  "key10": "5HddJTeAKWN7wh68HGVNnDJrbB5RmtH7uEvafSXP1EThB1Qxb27AnTBNzvmcbYZsVFMJ3sMDpDF2ZaeH4HNFrU1j",
  "key11": "2aodgN69FcTLupwwk5BC5Ay71pLaPcjEDJkhC8CUbTeRzHXxTtZCz5wJtsm9Gk5F7VEoLvgt8rGgsXuM2NCidxHT",
  "key12": "hhhLQNwx2i7myC3nAi3E7xKVmu5s8QaaDux3aU7ouevjwgRccFrZ2ubUhzB1mDhbxaa4NcXryGK7ungisyaX7de",
  "key13": "2mGkYCWPVLgYePbghv6D8Lqeg1SqLf4vKT6xx6ZCJanQCiF2ndRNxjSJpWqzFsYXH62pvUoBDd1HVNg61qkGVqPi",
  "key14": "3buYYUBcQBoKwPwPK1zqJ2ZjRWvKtFYDvZgx3vfqnfAgsbLiGn5zcHiidht49apML7hHkmCdBEvpvFJFz7ofaw4C",
  "key15": "4rHEu5Y1n1kd6MzmqH1Qyr4GztvTV4fyV8d6jenn7DMru4RNvwsiEvidHUginBL2QAcSJ7B5hGfV2kVhwExvFvBs",
  "key16": "4uWiw5VRpJxQoaqVw7sXsDq6twD1rCejtJNrnfFmAfyGjsZb2MwVWw89LUyHU3wA1NGaMf9E2GpHfDWZsuayYmhr",
  "key17": "nXyB3Y1C93AMjQKb8GuaKycG2EWz6xEMag4T3KbbtUPPsc56RxGabJf3mKtWuU7UvNzo3GTaDZiPnbo4DcSQ7jN",
  "key18": "38QYRfe7R86ueyNcjEnb3aMUxTKoqEM53iM9in5hhQFtWwPsGicrrfrcTxV5r5e382gKd3GUv4Hc9PzPc74DbeKQ",
  "key19": "7Zyr8re3794BR5T2wgBZLT4wjZD8n2opqWhMa4wvmo7Pb1DaEXmdgNYU9k16gHk6QDHxjJmrJ5GaUTestvv59Bx",
  "key20": "GDnsxvZDN9ceqfgnSJRqsngAPcAifT3HUz6yzES8BxqTMV4ceEhq9u8vywp5kHbXg8Pxmi8pr4pnYM72SrUVnJK",
  "key21": "2f6EF5HtYBk9EDgvAMfavkNVd7BoXpfoZuRVADsNCkpHN6TCEkCByPfBkjxTvrCTZuGjURwiCubkitZkQBt67b3g",
  "key22": "2u9BbQxzfvdCWeD6eTF1WZFkuK5L6BrKZDV5rUMHB3EtmVwvpxq5XEe5vbDAwgAc6qLTgVrQWADpr7R2iCrVUXn7",
  "key23": "2AKtfdVikQ3JCQnzS2X19ZF4gyo5LqksdnRvD68BRECw8okPCxcYu6V2kvkZ1YctVPSE3YuRr7RxK43GjrSy6vtV",
  "key24": "32918oDPuQuBZ1BhwMR9xFBVhTGMZdzDJwStR4uHDnaRYvtCzXKMVX4aY4FhFmcDxto3kSHwB9qrjcnq5apbJdNp",
  "key25": "1ooab8QNhX26qEreF6x4aCMTKJCFjjj23dByKGbaecAvEYniwjf4yCq1CVkw2VGZJrP5x6m6EQjXdYV1azdzZoD",
  "key26": "PJ3YGdPd8UHpHXRe2cb4V3aFnPTC9zpVuUtTv5HnFBm7qeeK5MoY5A8zhxRpvpcqBrZEN6dd7uviBgEcx5RCpwx",
  "key27": "4aUfQ1oG4mNLvdyedXpycockGFAbZg64Qj14uEUG3Dhyh4af6swN8Ttfx8wKvCsEVy5Akzg24jQCdMyxkn85t8Wd",
  "key28": "2xaiazaYDfza7uVF2wVtmRo7UgYLmfH2cJbxfbZcUgoJmE8YJ5xNwbyAyiuadziYWkQCvfqDxYBAzVtoSv7AprXH",
  "key29": "2y4A24C9XaHEcKrteohJfsdDkcv4TtNtWc91nM7QjCFAP8QaSn1dfsyfCytUwLD9vC3EYfdA7dAoAN5BJG9gDMiU",
  "key30": "TYQasPQJnix6m6CfAxbcwBVvhDj9FE2JvMttJoXsU1hGhKapRFxpxEVaiyBGTza1P6eYa8s3mbpREaMsghUyevW",
  "key31": "5UeJG7ZN5uyVszhXHB4yfWa2DNpwcRVu1Z8kJ2sZRoQkTSofAmJ3F6RirsGLxWkN2MFUAyeZBMVyn44PmZj3RvtP",
  "key32": "2porFBX5rgj3SuqTTrqf7zg74p4yZ3h5oSPqjDDeNMn2J6v5riepHLLEaP8GkCySp8aq6Z2ghi9a8XvQ35E5pBwB",
  "key33": "4uXL2ggU3t9Zw77x9quiHbhqFq1KRf8qdDiSia6N1kMxhiLxn16cc7CdcXTgctZe4efaqDmEJSsHBSwBP1NxRFko",
  "key34": "4gxJLf9GBTjmooiicjnA3JB4QdYZ3ZJDWKwAFL3jbJE8Ltx3ShJZbMBz4sUCAPxvzXrp9vbWZ9L7d2cBFvi6K389"
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
