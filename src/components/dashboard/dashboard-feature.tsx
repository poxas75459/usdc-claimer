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
    "22cFcK8NuKX2dSbLdsaFEzTTVe9wvV8U8ADHPmkJ94hYj95Qyh7p5wrskK9Ztv1vDLWkQyM8g1QfY9DMErMMwMcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aT6gceoEQUDJBKpTagCUaFdMctp93A4zQrztsGHy6gKsCkzWTM3atbDBxsBhyw1oFg5jb8ninef7sUhr5eBbVxA",
  "key1": "3WdU3t3f1cXRw4qX2fAf2u7bGzfnc299ceu5pehzxWxdovw6FTJSGWwKWunXrUDihZeXdSfH3NcD3KrEdtrMtgPj",
  "key2": "5Za5Vgd33tu6BVa7KZzHtdqDuNWEXyfrM17a2MqnbV1cow6H3Vcsb1tP7QPm6ThFNKf6KdUQw9SdmpZ3JhiwkxfS",
  "key3": "5HBic82hwRyKRtyy6jTLFiHFMyRJ97U7fjZjQREgMz1nWqxp4DB35XnWgYca9AsuNkXjcgKsjZpczJ4HMGmthKK3",
  "key4": "2iebGF9jgUMD9PPej9gLSbiSxqdEfgJWVtuisa79hfTFLWXQUExUwGzryF4VvsRhS6jGst4uWyehtWhhdMDiQatq",
  "key5": "6CPMaUgwJeb9QKgh2S2Mzri6oL4BcxzyKheaKQeMp1mUJ4tKKzSin9XXCipuPrJPqA1pLZrSnrDCfCeTBaLZBuz",
  "key6": "4wG4qJxftTx5p1MyBTg2AdR5aYVCxe62qoWGcqFJA3RkAo2NRtjAqQ96LZGKCQRmkpjWzJ5nnSKU8ZyhCRca9dVJ",
  "key7": "4RWUto5STih25pha5tJNRSMwCGDxi6px5oKdt7y4ws163iEjvHD2b2t3Lz4g44SbG5kjfRZDXrvYvUUhrqCWfw19",
  "key8": "5ddaMZHGM2sU78zZT5MBtCGag2n9eKodKyVaz22EfECQ7SwVYHPqn6GL3zr2Vkn2MxUyUAjagLXBvCuDmvBZ8Zza",
  "key9": "158guySmeznuSv7nQRCJMDHthbUqs5ve64YEtEXRx6zp4NiySsETunXCAztpr19uZuetbt1nsCRjWKgNtVY6vyU",
  "key10": "7pPJk7dRogErWbAxeV4pd2MossUcU2dbtyCP3ayVW9B6nzUo1TknBPPWoAaEs4dhgGvozn6HSZgLneuR3XwJeVy",
  "key11": "2zUwkpnABwtkYU1izp6Fsbq7oA3vnnHBQGXK1cH291HMoja5L2ChDfPaXZXFw7c2omNfnvcrDoKm3eSvsw1TwDVk",
  "key12": "4tBs3sCLQzYLLCXmWZSeoHmxe3132UxqoKdPNz7cRFHtTZaJAe1Z7PYpqz4G7qHR9uDPr81DvgtU4oLhmVpuCMaM",
  "key13": "5N9PYDStUGoAj2DJTmXbsg9osysQJ5ybSs8i2MTwnJpZCfdryzb13xmQEBkpQzCigFep78ubpgqmzvWNDk491BhC",
  "key14": "4UW3E3YrctdN2ZaHHarzekoXJCv6KajVg7BXHdjQd3HkQ368mv4gqB9eA2jL8qQhcctPdpmtU4rXzTshsE1Nwudf",
  "key15": "HDR4Gk68cv3jzh31ggWUD7z23mwm78JMxVcN6ev4L4NYYQQn68FakFe2VJLUoSFL9izCCougXn9Wr77qWhT6w5L",
  "key16": "25WzgyatErE6ZptpoeMmzcGvPSXAop994t2yP3CAo86sfVV4bxMnbcgxxpg5XzBj7rSi3ehRpvPKR7kwJzURX2oo",
  "key17": "37EFhvUXKCaiJSSZFkaUdWK75rC9dBjZSCRnw5H68NQhgSf8DPgsK4t6WqvboiTR95tSAttMQCBHhp6mFpMGfNGB",
  "key18": "4fFFeaSw9Qbtn6n5t4nqymemJwXA9kBYSRNA9YTDexdPhXMWr19ZzS21q865wyMxGaTtm5Z7R8xKEmBB9iz4jg8B",
  "key19": "cgHvgXf5mVZi5qmjU14JR2YkyA6Sk5u1aXp9KgfbS3JrB1dztREWGfXJ3JnfPXZ6jndZmfBamdi5jyJCBhRVZif",
  "key20": "5WzLtRNo8Lc6M6RMwU5RnvnhfpyHbgprSdaL2MTQNsUTuU4VZ8EdVMu5YzttyDbWYT4JtSqjqEfazQMvcJLSqiZc",
  "key21": "3oVtnJBoMKHqVBUJmT4z2XX21PsUgnJGEe63m382aYtoFwjJwTCBFaGttNWizBM3Zr4v76eBKaW7ZNxP2DssPysX",
  "key22": "4hrEj7jAt6orHiRu4AiJWrcP78My8Arizha4jrjLZyLfpHjPM1iEWDBfRkTvjTm7qcY4oDtHgC2zxggfoSxyANdJ",
  "key23": "3gTpVwSVeV1pBTdcHYYgm5pzU4ZAbniCa53BpFC9KjquFpDc2S8aUqjXESA9i3akxegXzRv8PvnYeYhvaoKrYzRg",
  "key24": "46ZDM54fYeX7enWodVSfa2oHe6UY55xWQA8V5Dpu59iKQtQmobEXWWV17aws1proQBQAA1Weki6VAZDF6Ws1AjE4",
  "key25": "4W5wt4Bc7s8R2c8HPwh5H1z4YrX7xBVgLLmzLQzz1CK65UB9baNkAgb3QPawJMLzKdGkw6EnyCwstAebyBMwWwip",
  "key26": "5otM4TPwJFfYiCCLgd8aRpKkxRQmpM66vWZ9WKUc4UPbuLB4iUnzUYQMdk6MNyuWNSz9xazMY7nSzVvEk4a6M6iw",
  "key27": "2zKFwDL6QPsR84zJcoeVvbFwG3rRsCwowy5cKV4pkf7RM4UECTVjmxNuU9oZ3jNAB6c67rU63tEJs2dujXovCddK",
  "key28": "2KkWiy6ktmHrV3pd5AKqLBAz8ERAaMGaogk51RS8rSBhd7J1HU82gVc73X5cgfoSM7nivDbR65MWqXK9UamQW3GK",
  "key29": "34tYRu7JojhAsi8qrP8zWCg1kpx3kgxAGKgK1Fsz8n11reffK2AvAkxcdvnKCiLUtAdrT99RTGRhqdjKjggjAdHy",
  "key30": "QF1VXT4Lb29CZAY8FMtZmQTosDYGXU7QXbNYponor8u3NhDAGAEksLUVYwJiDzbJmM4muLVx8nXDsB1ejqsK5xb",
  "key31": "3puwJaWcxy48MkhLpLYVN4N5SriBCJZCK5VHmZ9VvVJH52Lii9fhHq56TCKy7TdxnZK3FSsu5cELnGUB8oFM8SbH",
  "key32": "5Nk1QLYaTwpKiVavw2juXGQrhj1J737AZ7NA7NP15Wqy5auLTu3fvWdvaYCATBdpGoi7wkrs9Gr7Vv2kdhKB3XQ2",
  "key33": "343ELNKuN4DcWbK7fESAG141XLB4xGDmRrsfBm8Rp7xirkM2VriaRVcb8gqkA8FWJ4Lez2UPyh1n2sWhLGvBhXhP",
  "key34": "4Sbv4huY3gozVRF33nkfR2G2YByaXwsqGMfAUSXD9KmuctAU2bRjYjg8H8wrXcqEohWv2i3XuqYZLep1V96eTrMS"
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
