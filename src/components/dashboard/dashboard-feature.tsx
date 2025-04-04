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
    "55zthSkhoNphcohib433x4P7SHKXBzfjsua7RPKJ6p8S6H4vbXbXt7HCUWfPbCMjqQSErQUXr1X94jjr7Sknsxir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ub6W6d1XiqB6gLz15tDKjsNyE9tg3Psd32RmsakQioxJGJ1xuXSimtsU8QgXFsW3Ye3vMvFHSKmXmVhMwbSvFi",
  "key1": "Sspzp9odNMakWuNAS894ZezuRyUmQLM26enoaUHeisoJQi1A1gKY2Au6WnrYuaJ9WZGUdDKp3g1xc1Rz2PQNA2Z",
  "key2": "4LedGUe4kPU3THGPiRx1Jji21ghaLabtQqt3CYMcb8h2sNSZHqbG6zAuf7RDDytTMn3x2a1Sxe2qywbK2FhMvAES",
  "key3": "D98dDJZLxK6qcZdB12P8WV7fU6VTAPgt92SP6Ziayuo53DWAxk6d9Sjjj4ZtNoQ7AUSaaNSRSUcKgiPbbHMcdXf",
  "key4": "2DcPGpcKH6QEcVv1dFuNH9DA7vAcxpKgFjRiYEs1eyxoo5wfopJfmLyjRbo5hS3HFi2Ljk1MH38pLW95Qvinw9Mj",
  "key5": "AT45uKv2tnfcPgCRHxrQAXdGzJXWwXz5PUwiT8NwmQMcXLYRLvPRsQsvFaigStrKZfrT9MRhbA7bA1RVg4xHZio",
  "key6": "28UzqDwFJs22TLMjdbNhgssxHYiYjkLD56sejNBAX5FtkWV3B91ZhQh4wduDN9XnKSgfLM51KTfzrRcQDWe7vWjq",
  "key7": "3Y87zQkEMRWFH1tPu9WTD7nzfw34u6vxZNHm2NsnzGv7J2816omotw2Q4PpmHQ4tZnXH5s1hv2qXjCLRgf6JGkgo",
  "key8": "3VdaWnxaQMbyEyGuW7P3g6f6tAV6BTWKE2SwpUUjU9LDty4mX1znvRuKcgcGS1FXoLJPSfboXVJNDDEBnKFQnP3s",
  "key9": "4j178dHr4gTkZjkP1QtPCJo1e9eqVrGG25aEFQyUomzGK1jQPWxNPMXLNnieTs2XMtH9nP4Q3tZf293cneXVhEqW",
  "key10": "2MnD8XdS3K4epg4QwB5KqRXXBEsShyivjpiTprqXvF6VFYqxhKVW7KXmBkwSCQeHGaW6bJrvUuU82v6E3c2kwCNK",
  "key11": "ZrrvoecQ3HyJsL8q1g1VAdLx8NW1cyJ3upyxVj5LShAoFJy8XHnsNA6FnVYiS6rprD4dpNSX478k4ZZSMfHM6d4",
  "key12": "J9PLw1AmbY8b3Lb9WVku4KKfnL3vtue5bVazkeru3ngw1hogB4D2CbBLvuHUR6nDz4f16BGnY59aXRLPjEdwvGm",
  "key13": "7DFinL9cc6MtXvB18ozVfG55n7GKoyr8vACLyxqmtHhMABJrsTgMTAU9EsB8V8JwTxNJkYXhYV6z9nCQzNX6aWn",
  "key14": "5wRqMpgWFe6snor3k6fEA4RC4xeZAtnqaTT7AEEVhkCnyfaFAMJQgzoWvnAmPMudRrMXezHzLhenFfLwz4kiyzKh",
  "key15": "3V1nyvUw8vhQzNcrQNXUxWaTuDojAaNccUkeWLJhDfZLjU8bWmYYqxNCcmGkMqEemeusGquGffxifqftqbCJr8A5",
  "key16": "3qKEsEZkS5h1GwJf1Ztu34DCHHx8kV8wTPnuNL8VMb7yqDxfWqraw8X3ZwbCHDFMBx4wVY7rhvKhezKvP4fJiuvy",
  "key17": "3hd4z521BeygrBeEPPZyDBRhBQm8MbDkvecpH2VfizpbTzKCs2Yj3t1n7dj1wyGncBCRuTSFb1SxtEVvAg7XSDRa",
  "key18": "2ZFSQpF3Yxfb5ExUsh8YcfEBa79qvaDxszTcXs7Gbn8MGc5CZL6otkNZRXwHh2t5ZgeEVADbYVnpetdeAAKbTZnx",
  "key19": "2ZudErCbkuQ7ZAkfyGL4wfo36oxCSnz8vZLR78gGsC73FWX3NAJMwTaKiXmSjDnFmeMUz98hUVjhVhCcsbsFZCgu",
  "key20": "5Xjt7JYq6UgfykhJBAoCbDnYMbQvkhpzUJNEjiQPkKRSuUKaevpnv3CJBuBM2Fq91rgWznJuNg24iantVYb2ju2k",
  "key21": "3G1cVS8C1dKHgizqL8Gk485Y5gEEjcuuRoyGKtWLGd6WWyRbaJ27jhvQYpgw6NYaYAkKPbLJ3F826vQcVw4bhUqa",
  "key22": "5xd54c3AR6c4EMsYFJi5Ag5quTKFYvFmEqJx3gRzyjvjuiVJgvReU6Aqv6oZBEkwnW78PEDiPm7r5UdEmctuB6nD",
  "key23": "3wLSb4osf2MpvxoaHm61xT16vGKJTxNPrB36k1khd4oyU3gD8XCkHpFCdxCyKHLHM78nDxxK6F3U4PtP7LNsc3g2",
  "key24": "4QtKYupTdkicEJB7Xz2oZLCwJfqn963syyGgUXCsgxa397NvraSkyPHHvzavrtMhigipB7eUhyfc7MbB1L1baNiK",
  "key25": "39YAAvZ52SNRKyiXvXG97iY7EUm59nUquF5w8FKoGae4b8k5tttJVHVCkAW7reA56LTq7wrXnD2xWE4wKD3eDPUV",
  "key26": "31humQkTVYKQNzaCrtf9R8hEUBFwTqPpSLU3PdvHQcbgoyQBFeUUMz9nMkEU5e9DTvH3GTfSacLfjxc6iYV2cmHr",
  "key27": "5HMgVsZYqS1ifM9UgRJry7nJGtJZVRAsVRVcBex7Z7ufo9JdD5kjxXLnuTDLkjVTHD1Epv2qifF2YKHrBe4RbpNy",
  "key28": "4zhgY8FqUFvDoRgf83TEAFoh34W4h2Rn8ehK4ANCBKgqVr9a5CH4HgzKaYpH7MCZ6b8kwRCgfa39c8ycqXuYdKBE",
  "key29": "43Kt7H86KTjqbPmcteiS5bAny1WkCniKi6K7nJzNZnoWs7cvopDYi14922ST9pMB8bu4zxNGVXZswKfdxKLiQGDj",
  "key30": "3TLMpYY7rQX6uzriyLVvQwgkUWuPXJBJjUhViuDmsxie3qvRBSDHgR1xiEDCPXuiBF3FMesen7Sw8rsXxmwG7mxK",
  "key31": "Z4D7HAQnKjczruvjhVgBSmx46pxeH9p4jR8RVK6gZnxij1TArFsopzgL2vvk1DB7TqiCz2MVT2d9rmSkoG5orgV",
  "key32": "5cpUxSf9Pmzf5jmH3mEJqbnZYtDz2BopZ1oCnUHwhBiUzjsPiEPkiuySAHdfu1Hx5deKncBSubDjTu2WPXc326Jf",
  "key33": "67de7vHvzVC2Z6mt78zxyvZRoEoMTY842JqUw97RXhokiDkELJA4mvWRymMTeuAMKUasURzvHxatKhv9bKc9hysv",
  "key34": "3cbKdZMDois1Jug4ncuTdoHAcWpDKpex1pa2iBgwnTnMGdvKRjuuKrjo7bWHy4veMHypqPMUnBnrHipdpMp7xttm",
  "key35": "4DZHMFhxTMJjnMzbksfxaKXyveRWzN9yH6Ynxw9X3uD1Dvm1Uu8eeGxRwtEUFX3SmiSbr8DT9WjHYBa9iW4gganj",
  "key36": "5gNzAMqhmU8rieMhDKk4wddfK9HZRCJ5F1wWsU263rGoXbwEMxNyp5LafVnYfEMH9Vn9c9tJRNA7PkMTcV2Ywq44",
  "key37": "3hruz5CioaD8MQ6g7YEAYXgvWsWs1f12SzC4vZQhwEH6tjeExZz9fESeamZMcq98tQTasWCqZvQ3KKXWL8UHnBrJ",
  "key38": "2QEPgnuP5Nd34nHq6raQojjM8XHxonw9cRJpf32gUMPGkpzbMbKJSokNpxAZpUXH9h9hgnPNqPKmosjJeq8r8ghK",
  "key39": "4AM1SmWaqFoxTidgbuY1rTNq71r1GBKqPf1xtCF5hEffmp7Zrx2rbxyQoJfgvbHYbvH8ze2PdoPPLHrpVKvLb4sD",
  "key40": "4oPCgdYUbicNLA51WNquVuVeMtBFLgDxmCd4McHBzGLBWK65MAZEnNam6EtoAfktpLeuWmtHg4N6dRntM91Kx5Mh",
  "key41": "4MdYZ9TTGB4Es1PjmJTDoeu95Z4u6dg63m1GhEeszAcq9KahSJr1MMHChVWdsnuwea7ETp2oUcqvqDkVjjS8LPVm",
  "key42": "5FYCrJ6SX5fUwoz48Sp23VPvHJY1mDNFeQtcTRHYwkdLLBZNkKXcswtpE8QCN3SMqbyH3WzetR2ERXuYNqHea6eZ",
  "key43": "3WcprryCF4ETAxkZauVDzcJUD5sHT6C3SDb8DMh2cZ5pTU9grsgra59apX7JPLL8wM924zX19nZJHeiDT9oM7yBj"
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
