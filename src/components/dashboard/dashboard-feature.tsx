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
    "4naZLy8xKxNiKV91dXKuZrfi1qar5V1ccKgF2S8B6Gi34dn5okLTJKNWgpzQsQTdKjeHx7vbHo4YgwaqyYWfjuKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAnNYqgnaEEd3JE9vVHoD9VUMo5FiY2pwqwughoGomdQg8QwyRWEaHetY1HsP3yd4d3t4kFPDkh1mXrCx77KfHS",
  "key1": "pUzM9X8FUwUrU3NQH1CDpfNn2CX243SS2hPPNB7HyBUNLxPHkC962AGG6q12kcYrWWxgGVf4muRvTaa2xBkxLvP",
  "key2": "2CpHUNBGdNyE1iKdUUNPERZw6xqypyVtZCZwnMtpvGW1LtZ3ZvsaAPeFe7qCUmHgmzuCxo2NR7YcKaLDYU7cXWH8",
  "key3": "5rCTGbf2tnKzHZEqtQH2BMTRRmUXP7x5r8WCnfnYgrgajWv7R93uMvH79t9RFtPNJGWZ7ayy1mXDbGhpBdE9Pfvo",
  "key4": "52iG75aYZB6S9mM69fuTHkUuccDhPZwbQUQkgT71u2KJFiAB6qwW1sdDCwzKRXjUMHbZwkLRCSAGFGiC4cw9hq76",
  "key5": "45PfvLjL54ajQ43674JjRHvjaJmdnp4B3TEerzdC9Hq6nRRXibbfw8nc8EaY3ASdnQv2r58J4vRoFNDkfrkNA9Lw",
  "key6": "w1Ncp6WBJxh1VkjbiFz8dYs7sVo2y2gBLWcffQdN5Uzma6tNv53N2hJxCXUY8bBFNj6UDZkEG4GQXhk8nE4DkG2",
  "key7": "5bF9Vp79cU43eQazjDYpXhmJz2kvEmD7ixpC37KLnLvoJ2KBv7ZuuhCCbTsmpvpYZUsjamsmokvdBacW8orVwFmi",
  "key8": "5xbMVRGMENESgEDWj3kgyqnDTfEPjBmh8UQf6j5SNBQjEJFKLBG3nBfT8cFs7Qkk2cFeyhSv9RgWFQmRyTKKZk2F",
  "key9": "tbYcKPVsVfUArDsnucFgoXXsLAjpf6EdSftq6Qb99yt4zT8LePG8jsPcY1CyBPecUjDkCV7TNMojUFVQaGz1DLy",
  "key10": "RVwgybB6r736SXWWjGozSPzh61S9swTeExiHak8NcE7o6RerqestBzHn1KVyF7q5xyvwDR89ysemLatJSn4s6BK",
  "key11": "2fJ8cib8uyoRSeEgKuuRgZDPCjiTYraYwjYJwbAoCzepxVLxALqHwjC9HGCfvzDWC4uDJt2czvDEFJVqZbHPP5As",
  "key12": "2SkGPMfeKG7YGeDKcHJ5dbMxy2zxKETtmVY1x2J6LEQFxVbxnpdeNTg5D5h81ZrYi1Fb3gWVzNSk2CgkVApjuEZr",
  "key13": "5nmb4t57Li2J3vT72hNfJsbhe2JW1EGP98mmpiia3FomQ7Vg1YUbQcW1sxJa6eNktserKTuhuMJs76hG5D8qLSa",
  "key14": "49xC4FrnhZgK8zrY7td7zRQNjqCFmumyVCMp2nE7zGzJ8XtqX7Pkp3RKUAEAaY4PYPG7WTb7Hp1zSrxeRZSZa4w",
  "key15": "4AWu7fXiNvpEabH5jxguCaJhGiPh7FHZst1UodRi6PYBgwJddYWpE5Rc6ezrpBdBFekTdeQx94ELjdn4AEAbnD2i",
  "key16": "4URyg5QQXquvmYrvDbCYvBjxKVnFN8AD6KxxxcwHsruxqgFxjqd6BjWPQqkRQmjt2MBmmGrsRW3f46gicSFvCENn",
  "key17": "tm3DZZxgR6Uc56eHiRjazNhxadxH1xfKgEP4EpctZBdzoGrtci62X6Vb4ejZkSYyy7bZ4vG8HdsfJvKFZBqGt8r",
  "key18": "4xddyNf5HmueZuGzcGRyqhnrR6UWj9sPtmKDiR9N5CcEUztyqX8fFynfnxyHjwB7S2p8SVreJVHaPHXpRrgTX2Be",
  "key19": "CGFUcPtS6Ym7ffZpKVfHrdwpRX4aVWz9abNfWRRxdpKBiTK7dSkwtKEUAEEno6CKHoW4EJX9xUr737Qy2m7yo72",
  "key20": "4rKt1HUA9TkN8fLNGmYGtJyZurTXizUBHgXaBsKRSgqJbBc8pviyoBEhWeXRMKekD7nq5ZksBN97J6LJnoE9FVGi",
  "key21": "2KQqtZW2891MEwY6DZkshCqBepXx3QqyJXj8jFAj9vZSHeTXdNRThrb3g3CB27p13ZuZLQzqA4XEc5BjxqTcm3Hb",
  "key22": "5jv13ho2oZr4E2HK6ymmLEGigcqX4XzSUigQ36yxaaRYqNAYZtGXf8riJb1rmdeTDoEDNU1EGMAS6tq3kTGQzZ9v",
  "key23": "hsbxa7qjXH9d9hzx5WJ9XQM3383UpFCpsLyBZQsTXrUxB5CLSDc11sQZgfYPdQPWCtUMbe9Lzd2vFmiuBiheecZ",
  "key24": "xa1ZnyQDybdfvhP7eo9oZAWG2aWbsJtTWHD29yaysLGPa2JjvJ7oc1gWTEDxQjdv7gL6ofFWujZaRCBESxoUApZ",
  "key25": "4fo4qNQJSVtdUWJoqZur2KupTDmLwY2kiZrJQ5Sq6HnaoisnUtmTDC4pAfB1hsfiD49PAHNWADo2WnmBTtpJEpVA",
  "key26": "2SnzU8rDWy6Z2Nku36Fss4UpK6fLjMZTFq8ENiN7yDqqRC3Mczid3egvFgKCQ2Ft1Ux6SpZnmqb8v3142HBZqWqs"
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
