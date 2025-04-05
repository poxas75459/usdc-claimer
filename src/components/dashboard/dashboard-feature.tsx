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
    "33P1Riyzi9EsrVBYGiq9LKvVPRzG1gTMi5s4SUCTzeLYkLXzCXFbmddjiaEW3tusDQtVPTLmsr9rBK9EodhnkQKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sW1J1cjrNcVBkwkCM93D5r5u1GJ6DbLyALCmSLj2zDQFVF4PBMUQtjCDfoX4NUMQTu4PQgCrRG9XYpzuxiTqiCU",
  "key1": "2aXfJMBdCc92GCkDgSqSVFhhUauNXiXUUeEXzEbinzB8Swhhgd6wYnAFSJdFa2fRvsf6V4b82fj2PYey3oLqq2so",
  "key2": "1CidDXcLWcvCupf6yNqQT6q25QCQeVth58mdruTpQRb2ZgXpsMa1apdu3eLCSTrkbUcVyowRvrLmUJBAsCt7ZoG",
  "key3": "4D8Bcr71Rdonu6WF7RVJcWgAAqNFToitCBEoWzQmD2Hug4Pj5kkwYbytXcDJVGth2oZV3qQtKpXCEHx9t7m46xgp",
  "key4": "nmeH9ExuBLinNJqCtqLVAB2ECTSiGpJLCQBnhqc2ed6ojYfquVqGNjAr6WX2PqxKLKPD3ifT8gpjc5WFQvmZQaK",
  "key5": "58pd3ZnhZikaz8CcRbQ24eLmXvzd9AgodJs5ngHSyMyyj7HLEGd3umLieJaMi6wJN46ygoy8NfdJMdCWNauX6Bnu",
  "key6": "2hsBKQ7bC6mtPVeQi6tVNWt6LQooaG6aZh3A1bhxsrkqa5HB39JYUgWu2JcguGH49p6togVBJq5nzQCgYzhA3nKQ",
  "key7": "ifVXH5BoNv7ermmvVP9KWciiySb5MSN1sve4aY5vUaRYNYTdBWemn6ktSNHnFQTPmfb9SgsJtrcBc4vrhD9Heze",
  "key8": "3cPKBu6ByBaYjokk7THxg5W2w4BVKoYJia2XzhQnN9vBFwVHGmVQ6jsxLzEQpdo5MUC6MozhHjvtmozK92inkv9N",
  "key9": "33Jstm2yPfVYgGiZf8pkS3E4vCpqZRAEvPu6MRHL5C12nS2TxRuWjMBAoGSPo68tLTYKkpMB2fDR4UpMAsRvsiAZ",
  "key10": "5Yk5f6xFYgr9pjjNbriWkXxDZBsrDNtHjXbbMjnwwhi6T9PYm4Q93wrznaNS2F3KTMEQaczMxKd53uFtRmTDiMdW",
  "key11": "5SEMbYeoDcSaRVMngdmZqocEAngnpBELAJ4pt3NW5RfcKEKAXjDBDBBytEAvz5mevQwXqSKLPhVwdiCMhb3hPijq",
  "key12": "5spr2fJmu85o8PDn71vbp9c23D42na43D4PDAshSkKY7pRQnsEQAs268tccaCzfYaUpdmVefp9qMhw1xJX8XsQAX",
  "key13": "3JjwToQdpokWxYsWFL9f41LVzGcRtHRCZ8m3E9x2RCHYtd1gspYRnKE7WKRNfgHgQ1YHMs3gvtafG7GD8J4TEss5",
  "key14": "4q2x8ccbDiPYwAvbf6ZgpckWhEm2GqWK6KXcNoxruYmhMqpzZwFnGLDncC5UCdUAKjxQzrEvy4MnQHDmGR9A2D7E",
  "key15": "2HpFKyTRLdsn9SgmrCMuEa6YrujPPo6gLBp7gMMCMFeVHF9g97mbNckhxs6rs9HfQMTxXM873uSPREAZSmKxXvHM",
  "key16": "5ALLAjcoRvZbpCpmgvAq4Lf2JH6HXqFnCB6156jtrYJTA3Lsm5myNpP5c2RiW8cxEC8g9sEiKY8MdwX2qUSXFeQw",
  "key17": "4XbL4cxj9SaHN2SBzyzvWEyQRkKT6b3G2frHQTESHTCygptPcnS3zXXhYhihg9BVLcQD837AkQ2ichbmjA5gKSgs",
  "key18": "56SewoMWVDUMs9UmWJAFJ4c9JMo1yNEsEgTMGqLcbLpDF4yz47JwGuRxkuzUPHJeHMUzBGtUUggowP2KzuHkfhRi",
  "key19": "Rgkof44TkCTsd2H6XPQ5byEbjzjdRV27yZjDDgy2m9WLHEeyfrKYVPP65pDfBknb3Zw6tzeJwim4nzEh2pVAE9b",
  "key20": "3ziV56C3tmYMMk5ZqewAytQTLpojjt2ZX8JYoeNDc493NEh8q9VeuZA4isyxByGL2VNipx9CW2J84wNFZYfk7oDs",
  "key21": "5XGMVmu4quH4zbPLaeTNSEPaRUQ5tfCUmN7UiBp77EeYRTwkVd4FRp6bPYrS8y9yZMCwzp1C8ibjjwnsqTzQfCGy",
  "key22": "5hpxibqXShidKjJjxGBmdboTiRRfgZf3DGMTmscQEN5uKsnTd7pzRjA6ijoC6QKWz3efEvVYkP2EtQnWt8v5iJvf",
  "key23": "3RdgSV7JjF8XN8VYWBHsRYGrsdCiW2e72oSYc9EEA2GgSgqNE3X2A52TtTmJzgE1MkL1LHgNZCrdhtXKFoLrMPNR",
  "key24": "3AKDbM2sT3Ac1vzrAHZeaHe1gvWG3koyKpjPmYUKyesxuxbQShkfjtX7mT8dXdiJsxjUDwf3o2daMPMb7Q4pdyK",
  "key25": "4KuMdHCHoLW7y2yDLwqm2ho8YDebLjnmaANYk66iuEXnK5sxGkmQKjJNiNQSMmV3RDvQCSFXkaiws1qDvBYpysNY",
  "key26": "Dw9EU3HfVY8DNnXhCS4wtiZ8q3iyXx1FTtd4RWE6fCmHC16tSCQDypZckCBHa64TivuvVmQEBMTtRsmSkfHoka4",
  "key27": "4fVtXAZ8VPDD83ev7R7JrUAwQ6Ycm96yoCWaubBYb7AmjHvFFTmAkaS3CNiFrndTg3HPpsqN93FYYXq12zsQgpXP",
  "key28": "hmRzUAhm566G6eVbeJsFM8amNQZ3ZtbP7qqEbRbTWZJh81RPth8Jrg7cnwhALRnttGdw2HcVxzhmBpbaFc72o52",
  "key29": "5nFRb4DYadCc4hCzkk1LLwhmdTTPRLfMadPBwfFWWnHeRUbMkTRvN5CzCXA5bEvfSGRw9XURFyEgfw4tbEc4dXMw",
  "key30": "3tEJFqPNUYquWfHvWQHZJQaAenaooaATLwuVvCYd9ufT6aSxaQf2Kah9BM7hFvp4h97Gg297z8BvVQLp4KmyFogG",
  "key31": "4ndKJWyhZKHFdx8QoLcMbdEZM9dL8GAvSLp51oFYcuGxPzmiEcxfHhh5M61Ag7zEbBmgxDDJkS7vqZ5WdF4vDR1",
  "key32": "5Wj8pSsg85vVXWU9DAXmUxPgenPRouLkVW1j9uxkwezCJEA8ehLFFP4RfQzE582Gdpe9KRTJmim5Ud1iJUuto4vP",
  "key33": "64ppZymc3C4vW4ZUZgeKdbg1f6c97NUdj9tGcvqtDs4LRL3Pd6kYWPECt3Whvi4v5LNozRyScW7m5MfDsKERCbkM",
  "key34": "4WPgRA8yJ5dUab4AMNksuTempR8fvJeisSSzLadeXwsmhsGayn7cHxEpDtoFK6JaXJtsY9K11atMNBewANWqE4Lb",
  "key35": "2iG56fJuX7W1tNTLWHTUisJoL1rJLfei7Fd78fbRSznEZxootCX6WJeurNFGAE2EMwe1egUpsi2KGDvZFe4t2WUn",
  "key36": "4uzUQChbouTFDezUV6ewhzuaNVQ1ZJKCm8xyQ3PZVRPUwTBbF7g8JAS672B6WuiqMk7i14cb6n52HxF9UpfFtPXa",
  "key37": "22ca9MDFo4xQUybcjedPjkDyFvygkuQkk8ZTUyNvMUv4C5MDUsjpMS3eBCPKx7mw2XQJ5wt5BUcCxgorb2RiUpfu",
  "key38": "2197Rsi4KoN91kVqCGNVQu66fo5irMPppE5VGVLAJQncikUJavLaiHxP5EEV4BU3RCDtezNKU5KqU5E8evx7DJVD"
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
