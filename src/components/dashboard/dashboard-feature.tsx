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
    "3hsNBNqtak9B96fGwsR4RFTBVcVC1nzCRVJd3Ti8cjKK76YFfhNhs7GV7tnn49nZnVyhw9VMwht7qE9xQJiYKdse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33v6apUaj2y8DvXzLwYhcmK4nEQthsWbemQBBA8NcNdcg5AWyjt8pjMFWi7aJ8ZxkHAvNgxe5kmjPDvidexjreth",
  "key1": "3BJSUwtrbJvxLxNtWMDxs6yMoVBqFrjan3YMpbuuB8SjZLMZjVjZr4pw55Qp9L7dwutWmGgAXsLNsnEYsex6cbD7",
  "key2": "3bAYetzJyn5Qtr8YjoczYsX1XTGzAUedQ81UYVbeJEDmfLsPNu942qxdRiuKoTTXbMjwEJ22B58VPtjnDvwTgbaA",
  "key3": "39EE9hwUTcXMVjKe52JyA3S8tu3Mw3JaBwuqcsvHjsGEN1UCbo1RcNbmr7xUsU7D3Qbozqkfu2RNRJJEMdPgNZo2",
  "key4": "2ctRnfMFjcEqyeHjs259Dbytp2MHMWWhTr9ywunEiZ1SbLdygmsMpQNLSBmFzQTopfRLUyWZE6rxtXuxHxMJmwST",
  "key5": "sCrjHjp47uQtASpukhE2uq78oZJSzMV6XWx6ofWw3cNEVGwWLr4kpTeGdusSbV39HCVJuUu4niJnfxAH7v1uZtV",
  "key6": "5cByLVh6jg23gsfC3ch8bn7RJaogQy7Q9fR99xV4q8P8QgokWwnAAsUCQcvEuhjKKenKgH7Rk3fy5RLKJdjYEFKg",
  "key7": "HEtv63DBLkAeNg2xjBvDEhyESmktFhAFjAy9aQLifsggwPMAaD8aP2TGKxgWRt5YizBmyAhFvteRHaVM1jZY2UT",
  "key8": "5iaSSpav61p36RTRBMNQXwPNhAbCV2QV9EUXxQAh3hQ6jbJrruzfXwvSwZ5HJeVBzEreZjzxCMvTWBeTpxHSpfhu",
  "key9": "2gwHX2oeBZRBmJvAZ2jZqRqKrzBQ9VppZfX77KvxcXhNCka6UjExUx8He4dqyaPUxZpXo6HadyYDctZfaDsrCt5D",
  "key10": "5tNxM3nVvfgZZZzn7h3uDWCWDFCMSk4yKVsob392gjpH259ThiP1JZEErWgoPVmAwdZhjkkQ5d6zApwZJeWAgo9w",
  "key11": "2CS3rvPxqG8G79pH22V12gCzmwqpiGTYzgcWWpeCwLhUcYhN9m15FoM6NaCg6kXqCGXenekFxkiDhpoHXhSCFn9K",
  "key12": "4owpXjHiCh6SrkXbbK6Jom4t5gMuExhkCmdyzM9ffkvuEP44NXsFgz3WQoTKhHPDaqEffDtAwe8w3UafU3TSV8jh",
  "key13": "5G7x1L4b8gc1dBXdSBTVaPGfHGpa8HzVFG12Ag7kLAyxaPcKReJXPNvGpAYxhabGZx23bcGhoYarFDNwp3XCQGP3",
  "key14": "67ZLNv48f2E9DcTWn6G8MAVrExD3ArqWCSvkVxrvegZbHYPunHp4zwwuhVRRYegthKVPm5frEYtgjnQbjMpehE8c",
  "key15": "1217ftatviHN5JERyb3yx7d7D2YjCqUoty7Q5R8Y6hGcujPoZ7ZevsFmEpCcy2Jsu85hvnvKHTFA6GeB7xPG62Js",
  "key16": "4F1FkVa9A3Nqv33Vb8ebYwJNwN1rkKJ4NGGekFGbwB1bNnMzDzmUtxHvyQsm6rFTkTvV6jH6djxYNyNAm14igmYF",
  "key17": "3GAwjhj2mBqd8XLDiFVvikv7CAeSgWVyErejPA11KgMyhuCcrMJ8XX4wEsU9oqSCxzTiMjSz7rfab2YotjWYPEyx",
  "key18": "41xtacB7fbLozhU2JW6RgmrP1DmZw1wUD4ZvvzFJU49yB2pTNdXd7JsccvESGbzdxPfxGWA2FEXwmTkmMpimggJ5",
  "key19": "5xTHFb7adzbeM2diXt2wLiZNc5PgzsDZVg8KgdoE3b3cAUrvsW1BVtRPZBuvvmhNmbSFrk37CKVZCxhYzMu3ERS1",
  "key20": "5LsmYPXP2xuSayjHv4HgGY12RSFo9tZtZtwMyeSBxzQFri2Cako5LWZDETcd84zhJnAEFyE76i3cVxejekGJFQaN",
  "key21": "2qtQ5L7jKLGCGs1XmCJGZq3DwwbeJW3EqigRuLAsEkme3ia2iiG9KPvJvCdx9tD5e43amoEvXf2Fqn1ZEMmMBJ29",
  "key22": "4HPLBr2gimwJiMRsQoedGSuKMrupXK7GG27HVtgtEcmzYGbfERqoZyuwGVWkWy9KVicSGE8eodbT6xwmJawZo6PL",
  "key23": "4wjCJC8gNBSedjqvvDbE7cRR1pTLkrA6dEtZhksU2GfrBQ3Xxhq3MjF7drGYcpstjw1TkCpZrJUQ2eFd6iFJAHE3",
  "key24": "2tvm9LPcomHBucuiodNiSvryJhwnjzCN1NMU2V1FbKbEuXmtWPZFXjjwh7T7gcbTqx2AjY1HNZntcKgirvcmXP4w",
  "key25": "4joXwGCmuM83VGWTZwZuDjBYcm925FjBPpxZVPm7Ff8DkXRZZwcmUX6cB8uVFfhKdW546ZGhncRKLKfhbTYoCr1f",
  "key26": "2aQfu3nbiTw8pkexHwn4B7Ke4o51XVbxDvi6gwedLdMdtbBySbLsjfkjWBhLFy2d1cKRgwQAVDDD3mUwcTtKfYAx",
  "key27": "2qK6snNffjpo3kbvAf1Zj7EotLZcqbM6HVUXJzM8whWXmgtJcK1V5ZcaRek9MR1Pzf84XAuz4ubNYPAq7NL7qZHx"
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
