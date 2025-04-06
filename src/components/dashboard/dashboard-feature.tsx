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
    "5aXMuWiy1LE2ecnJzKuV2wiXHjkEmKzF3ybC5UVPNWFfE8JvR512X9e4NpACdBxsxjNzGE7bWvSLQCXBKiHkKrM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U83qebQZLZxa9d25YLvzRxzbiiSWgAqLuc3eCBRFTe31Tn5PZn4VhnqkNq3PjWWDZU7GMpEDN9dJNmXThyeDtgJ",
  "key1": "5bTBGQvXH3z2CX2gWj4ZaiRZ1EnYMPax4sBgQnu3nBDgBQjSTfoRhFAdSJnHMQUrPWCqGXnJqJWMcZMzxXsvhzJZ",
  "key2": "4H1VzwqKLTqZwp1z3kbdDMtpKgyXmb67YyWUZu8kWjLkEq6Be7Vg6oPM1AsjZXXkrDS7VkPukjfVXXw9iExAgN5t",
  "key3": "2H6BGaqC8igat78LQSxJTwgMoGCf9DzzYHB1BXC2HXoRoqfCVZ34eRNpsdXK54xfyRtLxBJMAyE1k4TG1n2GprzK",
  "key4": "4nTFgMhAs5d6TbzuH3AXTL839SQwtUzFsCGT4GTy6kVGcUpQEfix13gLTjt16gdqLdWt49man1VgSzNuTekCnWbp",
  "key5": "5eXf5zE8Vg7kGki5F9A3MxbkVARkqqB9iovDUJ8vmeB84iqDk9HL81kL2o3wGn1yxJdxDw5cAf5cfjnSgMxXZfwh",
  "key6": "HLqQtWDYS2MiZosy6X31F4sWSNmV5oBsWyfn7rqNZJMu3rDmebQBZo97YbyiLxahFgnzmc4uDkRFaJM7qMJ6BPe",
  "key7": "DPGydsx7H2E19esmeC5dG2LitJqj1ZtKVqxkozyE7NgkELvu2bLggDMAaQgVb65NVpoPEEtfmvPLWDmLWXBE662",
  "key8": "4BogazprUxsbFrTqRLjhAu1eLyF72Nph1fUrx3Be7pDxvemnov183LMyQwPujzxfN3k6tsPyNb5d1oM54ETRg7JN",
  "key9": "4irw4XVxurg3Wm7syBH5CT3mDj7GNBdao24DfFUeAiLiQgJhvuNUA82G3XWgPZaytc5qFFTJKuPinXhpaqd3iTDp",
  "key10": "2dfBzGnWdwFM5A2ULHcF4xsCtJSK2i5DM8rPY7Cn2tYaWUUgKBUjaQUzABy42zhmiFZkqJ67FsqyrrNr9rMhRdJL",
  "key11": "2F7wvBq5fd21B1RYdw7YipPSadqvrhpGQXQDqr9aTaKK6UvZShgKBtsNTUB9yNoHkrMD3pZmDKnj9HGYYcWNB29H",
  "key12": "2Qy2BZWntDutUqHc7rfgaBzz94xwbF8N1QyRdVeNhnPgo4sWWsNFPEur7eGaTztaVAuZUxuykc9Hce2N2gsYhUsM",
  "key13": "5EZn8La5pSeTR33c17BLCfNseQwnu1x8nXeh5dX1inovYB9QqCPBFJjDtZPEjHGXtcdG2VmUj6MXN7jYaLb7HgPr",
  "key14": "66ihFHsLNWJV1cY8i1rDvHadtFs5oZGicsJvuCBGZTXajodge4WgEDhUrQ7bC7cwABL8dAVBXAAk1nc5kihCZpRf",
  "key15": "5RQa1zx5cVRdNEcVc3ZZijfcNqWxTsDovyTBUB8cZia5MDWjChUdLqdDJv4hSKH6wHjPR9nE4GFaoQvGMFPsA1mc",
  "key16": "2EtiMSGU5mHm3tTdzNrQkj8Sh7Rsyu85d5bbnYLo8gauhwp1cmi3H5DT9Xn4dxWZPBmYn5LRMJ4gqsZWq2soq3sL",
  "key17": "5ZkphNJqwKpArccYYfiUh3ZjPpgVKHnDr4E7eYM2UgGfpjzCK9Z2ok2Bzsy9Ni5iED1SBoH1Jd79sfaghzwQ4V8W",
  "key18": "5FMPudxQW9NPgw7ov1QFbRCwZCkh65FKKAWJAuzPqK86SdmQJeFxPCzLZAQjrcV9KtEQ17qRB68UNMPwvYTLbKEQ",
  "key19": "5vmFBwym2EZT9jJeADrdUA4phpMYEsFqyAQ1MN6tmidUk1DTquM1nTP6aNLQFpZR5v6ekt3vfV9g2zCzGGCtpQmP",
  "key20": "2FffK2S4dM3QnMd3Gb4EJ9oqfjDmoXwu8ATxSiHFfeiJLdFnmbWVMZCb9jSxW7mjmiWH3mKeWXBgKkZetV51rRqN",
  "key21": "2fSBDC5xXqrsxKjnBiUJiG2F1gniLMBjaRQayaamYmcc3tCGdTDuFWSj4bUewm8dSU2JsGFcKoDXXGhm3q1TMTQM",
  "key22": "5iMgHCxXzsuDWzijghnzExxZvhFWPaEKp7KJhpdpWktE447Hwe2NH7xACUcaotGpV19u6dN2p6avbxUJBTntVv8h",
  "key23": "4Be6wm28Y8TUCwbPR4kyRtc8HBSqKm3DFrJGHWyq4Evy5UBU3RorM1nm5hnLq39rkRWHg812Peg8UBp4fqrxgghD",
  "key24": "visPWYftmWxoeEKQuW3mj1PCaRvSef6f7hz636BgBFnMWU6rPeTrmgfnMPwRjirCP8gopSgVFjrKpEM3Xr7JBaW",
  "key25": "4KowZGBufMSDSufZPn33oHvfDbUVZQ6gpwJLJMGBwUy3cZsLqmKybNEn6pe27tMFv8aRSbZq8PTpbFzLv8jZhksD"
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
