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
    "3uqNjpLgLabh4Qfw6LKpsYCC7qrBNL1gZ89XETdDiVyid6vq88oDV8ySGgPEqnyFjeqzv1BPqaQKBUcA2vDd4dQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u79hv2d48YBuc444s27QyRXLj4wfUb7SfkdLJEgYuNFBDvYXKwGhBDRbnX32X5ND8rnpyJe2dWRe5g7MuBzTejx",
  "key1": "A7ujQdC3s1R2rHeBz1FUne6h5ng4WFMssEU3vDbqNxZbfcUnqsgivrGCmfBUhaxmm6oqunAQ2RWEHBaXUGDmTdj",
  "key2": "3jZcX9BT1ukV3caVH8VGM8HjXcqqfcAkH4XHNWha5PsW46gQjMrcFSpTVmAR5WjoABJP7vzu4W25btbw5KFJCdKw",
  "key3": "5yz8DdZHfjSCKx1uhwBQG5kMn43hW4hpMPXA8PvuLqKcmnw6omoAekKf8YpJcLSBz5PMiCm4boj1Ap69BV2gztKa",
  "key4": "5oTFY5duRvRmEvX7kLc2JnUNXBVqxsMAyp4bAgDyYoSBZeGZ2FqpHgVS6ZZkNCHjFE3pEc7NEyMWpTeVkEbqiWyK",
  "key5": "3LqwVftmE1u9yJV1NPdzvV5Bgrr5FtFBtMxFqXUQMXe2FGTSoFoHLhPA6uHQ48YrYXSkWUhqbtKmQb6Fb5YPm3YN",
  "key6": "2pwANYLrFDNorGENBK73o7GWKE5Y4yDgbyGoDmnvGtG37BvZNKdwZBhRFv4KEVafLb6RFhxtLFdbqPXdZSg2bfUa",
  "key7": "3ovHJ2hysnYwfom15khmhjXzHbvwKE2HrKVjgu7YaEu3fY6JPpUAYigd8LcZZ1gLfxEpndbzWVWyVynB1sueFBBc",
  "key8": "4J7WYnDMcMGgG2ZuxZYVknroEmvRZeYxT5XUWM7u8JWPNfwWhBCFZxXHH1Cha7syqLXMoJ3HpsMdvCwvcpmredjT",
  "key9": "5UFV4EFcwi7YmS7NdtEt3wfp4XqWMRokGZmPnbERsUb361Xw2dRvcRxqnkxT1HfBtcbrjUrKfziZqVjPHvh5Y2d8",
  "key10": "ZMMVg4GWVNw6LpfRrM6nqELHddsNaSRMadxVedTu88XFu3vkN3Nz6Qg4mNvrTUAXFCqCpU9D1StpWvwCV2XJfnB",
  "key11": "49yvGrt1ibMVrFjueiET2qyZ5uvfxMK5P4pYA8cyR79ar5ukw3pJZ8aP3duhrNvkXzZeLyg15eipJkrTkVemUv7y",
  "key12": "2pZo1cEfsUfSpsLNDH8vEoYGf7G7EoMYmyXLNfhFoxR51gBnTYjS9h6LDr9RHW2RZcqc5tpRe2qYkHx2DpcfdTvP",
  "key13": "4HWiWPzzLDQfPMzDMkX548xqqH4s4JfPCXhgAGbjXnm4WVoWAE71dcKfQeRsHT8GA3n9HdGAH3Ev9x7o2xLsp6WM",
  "key14": "3MVKk7Us4iery7WqzuDhxWPp2uPAAzg26GG1hpjoTxvF66L9tph797N2w4FKWdwzRP4rjqdYsBqhGMSwBYFEuzZG",
  "key15": "3DChuC8136oxNdoUp4g9ryhXDVLnSgztqvWY9wdgMvWcYP58neUe7KKNo7wNgVxrSxpBfmGKMWJprhRLQLtQqA6g",
  "key16": "5tTtbK7Mo4y5CYSV8HK9PQuBLE4EH9HRKbAggZi9yHecQbuPANe72bu7Bc6t13rC9GkNYTrpyBhf4UX6CWwFYuKA",
  "key17": "2nq8aCcwDgWCWsZVrhgjvX1DyeXJMaEh9Yvz2wMeL8oFSKU5o6YTgQar9eR9jyy9HwuyMTtySRSkx3ZetJK7BRo9",
  "key18": "2kVAJiYdWUmKUmGuaCgsZ9rTNAcqEoedv32PTrLwzuVjPoTHsQ4USdbQpBE3sK5x1i5dPD5dqsDiPSCjwEaujFGL",
  "key19": "3nMBRGbpKWBM1ENawu3xm3mpEUipwEt4mUjSro6HGkPthVC7KDU54YEyCWNdmdp38NxakpAvX8zzWf7MAw9XDT6z",
  "key20": "3gfbZEGc29g2fRuiKtLxndCnkbJUAVBVh8oH6qXsa6FguYGaSZPGL1XPoQE4LaA1ngSJemG5m6giApCsauY1ZLsm",
  "key21": "RLPErpR6cikYkP38da8sf9B4MokQsW35nRQq64LFNjn4gVGVfbqTxZXVsNRnBAuR1q6VnaVNq8P4sUVsqqkGMWb",
  "key22": "5E3xgQygnWP5s8aUcPhpwuRSFv2aZQukGp8tWK4bUCiHYxWJX7LkwyxNuuJzY4VHAkSzko6hPWKr3VgETkUSc6tz",
  "key23": "3iNPcKc2fpvWimHfncLBKnb6j65ZUb4Adq4V1aEZAoH8sUS393KCczLu4ZSxkWow9hBhNSrXGQsm5kHhdV8HmAkF",
  "key24": "4ZoFE4kht6SzfzqhWRQmtdz2dm2SjcMti5D35rMfAmAJSVmpKB8B1mVFd8kGefa5jutB2z1DRaMRbxn8QEdvv7o2",
  "key25": "58KF5S1vJZSw9xNi3UZzjdpvxxBfxuxiAkejtHqwFq9mHs8QQdL19WXxZgzPWuLNNiNsaJ8RhSQ36cTTZDTfQTDM",
  "key26": "44TRBxbE69GSbpxKjJL2LwAPSF5w25NQjdaGYrZPaGDBJ68C2SY3xwopd2HR3VBmU4ZrqKmXgbExaqKKZpRozWrD",
  "key27": "3mF7mJ4PfJZeSUdthWqrasTg4dCKxcGJNtbTbRgvCMUGYdm3XpVVcyABFE6KUkF1iJcwGg5fhgZz4m4vCfX6XucP",
  "key28": "5qdQt8vuTm1D9tKrFByhUbHg74pQ9vUP4Tr9eyNi72pNvyqKwCGrb9YrXy22DG2GLiHSqrUw1hdiUmBfp91WEY4m",
  "key29": "4bYs5ZcSbUtX3B8u3mkWSWgtzRHMTFsjxbhwSa8rawFgQSAQdqYDGfGn1BYz5oXuqp8YKvspcECHyfWsqrAVUoFT",
  "key30": "55M24SYr47JhhV1LT8oeeQ6stFKEtwkUuhjb7DqSJke1sYLYFRrBLnDc6WhEtATLDryqAVgJPWu1kKmcUcN5LdWR",
  "key31": "3J8o2CBs4iJVkywXzvnUA6KW1z1uBHvbbSsaWmGukfEhUGjvMz4t8B7uJFKDqH6cdBgdKmUYRnvsTRB7hx3f5aEd",
  "key32": "2rgpzFXCbjQoRh8KkzLzTLw67ZUWp7rT3yPzvVmow8YpYYuBSSAX6zWCYouW1JwsLwmmnTsz2CStJ7ChWwP9YpoD",
  "key33": "3dfhuXtRwcaWFbj5rg6ufv625rNUUXYkoBNcXWX5J6Aru8yDJ6Ju5taiFngiZyg9dLGnJWBSojSkkGDtHgSxJ7PM",
  "key34": "5LUqUMn4BTEJpnwuyMMgbhXdSKiyobEi38LNfu16LbathpY5xDeWmZQnwvTUq9Q9okTV8JiDWyxNULCDct4shCWn",
  "key35": "26xsxmn4ygPTw77KNKCAyw4GvrrTaAYziVRu6C1iWZTdSt22ugKRN6AGeffuqUUQCDMhc7RQaq48ZBseoZfv5w9b",
  "key36": "X8NGXwrePHVXwG5i21tQTpFQtY2J3VW6Buu5CaN9QmZEhwEipzaax6xcDK5f3Gy676JCZrUGU8UMkCnfxx5f95G",
  "key37": "3FFcfb4Em5NQdq8VvbDUno14F9pD7RaSPd91YNd8UZXwz8a986kXeiEhi9n3WG3J3Mow59Be6Scv4UuDohBZJEJu"
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
