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
    "h2vvwkG8CfFT1iv7TaSmUjPT1AVshf9wWUTCNWinVpGCr4SBvQnevZjyVKgm4Pydrs7MTpFGdVKrHvTSqBPvUUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hLHNd84wh7JSLJdmnsXYT6cgxWG6DWsRxRJaur3MJDtVF7XQjXcUEXboux7Fp83NhAmPAKeKmvoUZ1QeoAxKY7W",
  "key1": "5keZmddJjkwpXXPFkiK2UAwZt91D2YArZswn8JZdVmmkkM6f92MwxNjK55Kietoxp3D2Ua1HqNqUd5nL9ZKvem19",
  "key2": "2nyZFA1PJ2gtTgr8vWhoAomxSJXPMMmXaS2kucSeK2t6RLXk4e9PMTBaXZpbgQHyT9UFizZv6wAafhTaw52GNF8u",
  "key3": "2LMCjcgddiwmpXAy2HgJ8GMz9Xwgt3WX2pVKWGF9NXEgYABZXBENsmxVNbJjVK1sXsUE3Eyrp1LjJxMeGF1ULhw9",
  "key4": "3sB169kzaYcgffjBUnPAZy8pny9KxVyVZVMgqYCtWQ7L3PmQRsNdhvdfs4YoxgVt3ePfTGFxtKYYUXSW84Fen7YN",
  "key5": "5AfapqHJ33iuRixFrVgKLLP9PMFaBWDBven2eou29U6GwWteoWDs69Q71ZQNX7StbHhiUeb8FSKBu8Zc7sEq9tVN",
  "key6": "46c8Nn21rXf7jKD7gom9vuyTqJXTvCeacURQN7SPfUUU9HYUYGrMN1oC2HQfMtX84rLMoee8biA59EKMpArC5hpJ",
  "key7": "5Q5BotGVybgBiyAjgpaQgcx9Y1mVeX2R9FfvkzV9aUDpxkur24MciMrULwfPA3g8vPGe6uAdkY1bUKhdTL5X4UTY",
  "key8": "3ikjrN8R4b96fZ4G6zDX7cxT7b39z6jpGJfSFALVxPP4uKDk25SxG1vqPszCkStAwQuPb1rqJWeioQ3q1rwHovF5",
  "key9": "5kpMxeSLJXxhRwNwK64kJoHYvuViPfP5LMtGsLma1mzehUD4D99odxRyfWfsP5CKD1eZqRX187rERnbAXwfe2evz",
  "key10": "28DW7GtN4bnSZjTnRL1q81ZbtsvTuBxxLGgD9YNVHb6seobQL1txD1tCqHwk1RLFVwFTsaRwnLyztRQDUXFGp9a9",
  "key11": "38TaJuYoqtwUV67s6Jcw8xeg8mfFGefhe2wJwnf4njtWaDGbci6VuX5n5yWQHwrAhCXUnpQTbPGd5sfLLJh7Gt9H",
  "key12": "52ojAv5QE8jQvNAuak9X3Gj4pHyihqgDxqv6RW7BhUXqZvUPVCLbbkyKRuwbg54yFdz6PAXddG5ZQtBaTJTKM5M7",
  "key13": "7b5WXA63fDcwchLYDbJcZFdTMcAkhextwJquK3ucXVaWjA9PrDwnu2F7oDaDyVivmiCEvtBbneqshgAa6ZpYAgB",
  "key14": "3osupaekzC9RLeEaAZCncveftYmFzSGjKmVyeYQXUQ8imRjE28EVqhDjkpYooT4xDTWRQVaVPNrfpzdJXV5aqsjL",
  "key15": "3uCytB3BTUhwxMVLErgSAe8gq6NspZ13R8rbiEyhMvvXT49AUUGqA9G2bmbx5JK48RhReyoyttH55YH8dZiGG7d8",
  "key16": "5JWh9oKNHyyHdQ1AhMQLT3ReY6ybR6d7RDP25g5F9mqiqzp6yKg3W26PMwoyxvvWvVrYHuFcXGhFtxjaYWtGkUWP",
  "key17": "1KEJsrWkei71bp76WLsNHo15BA2aueKCYNR4181mY3J4CqfQyLXiQuiZ7SQCkPKPMydYXmrxWq2wziAiYhLB9i2",
  "key18": "3sfn5Weo7Lhnebnk1BsjaujidRRxDhdVrs467ANeAyNdJP9cNSY2SmL5YMFtkUWuj6LaSzYHXDL24Fb3isKweYeX",
  "key19": "3UqSfcbNGZQjG87jGs4ry3RCUTwP5aqd3mMhXJumGQKBtVLhwfFbmVSKa9Pj2c8N9Ts8oFjnEiT8c4cbnHvH6uV5",
  "key20": "5HswzM9D2JhV6wqq3LphPWorakx4pBMKJnNrqHajrvEQqrpsJbmJSj6KFbagiBvVR1CDamWor7QhNaiCzHkKv3W2",
  "key21": "2wZjnwepsHextTUtb3AgWkcJHHeB5p5nhWkHukwQjLHT15SDYdzKEGEgpDcjtXi2onkcJuy55i5KEaVZ2ERoZ9kG",
  "key22": "azGzMjviqFcmNKWZZTv5wRsyRurFMNMCjeeP1wnDBuhtnFJ7QztCTLtEHdcDbsgCqdu4JZvAZ7oxMsfRX4FVvmW",
  "key23": "3YMvoB8W6JtTjyTthyzpPv8yjeNoMHxFCg1upo7ygiYykLX1ak63JxpCdVqCeNXescpssdaiKsgvThhVqArYgvGN",
  "key24": "HDDmBjxutpW4Ye51WBxWA4QJ6ZWYkXpXBMsza7M75XuY4b7sgs2p9ig7bqg5UJtStre9qDtitxN5Z9Wc2Z4ccHb",
  "key25": "4JhGTASV7DArLMv9efpvh8Wr6Lm7YkAQCKa77W3Pv5Uhrr9mVcvyfw6SjiiV3jVUkYcNUF6ASaVvbfYwVim368Lj",
  "key26": "3hbbvLNNNTdPsjiAj41Fiw9DwMTjBLeWvnrzkQsHKavkLYTgQpqt2AHTce1qHEaDtsV8p3dJgrb9mnNe8duczvHo",
  "key27": "XtDctufT9CgNqddtPpVyj2TmmjsjV5iGuXTXVxvcfthqYq3QYTGh4NNsMdiZbcwVZQqwMo1mFtZ9ZcvHzyavLsv",
  "key28": "5zopqJuWmaBDDPATbHy9yWUfBoA3BJjcmPnfMhnB8dz8MoeywcdKK7JiXgU4Ws4Y62NtgxTkhdfcCYP7WCbXJJjt",
  "key29": "2ffWF85DKNLoMQ7wbrJiEJ1125f84F1tT5CTdcMgjqEUwDL68PXWM1SdHwxeToYVyhammkYHsWpTtmaJJ3ijp4Rf",
  "key30": "32Hx29ATB1KmfYEFkdPednDpq8tCTUYGVnbeyf7zfCtDNTascS8hPKW4jNJhR5zVY39Qw6mxHwAKMNAp2aHYHosd",
  "key31": "4rpZC669f8R23xkgLJTWX5bURsTieHepNFY2W3NBxonvrt3j9xv4SXe5QhoDvEKZH22tSSayadktpHeevmLbQLUW",
  "key32": "5nNMpJ2ofRYxkcE7VhEK39UPVXsMpKqX393C7uWVoJ6uoPPaZSwygpxgS5W5gnzxXXRwfa1cqvfaQ4NRchR6wg9v",
  "key33": "4DcVAeNdRSSgf9xrGbaG7NH53GrYoUFsxG6gdNK7kpc2Gxci7ZMHGrufTqeGSBeSrMbvW8VPB6XMf2aGDuxYU8eK",
  "key34": "2p5A6RbA3ppFMfMtXhpgEe2jfuTVEaoEmqRie1fKKDiSHbRHUBzKg35P2CSdr9kvEHLknT7q9hgnp5VCYiWraGLu"
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
