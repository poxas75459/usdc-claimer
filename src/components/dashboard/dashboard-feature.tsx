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
    "5izzHUiZiu2SxBjRtrz48R8xWx67Ns7m3SdQq9kp69MKnSofrJ7w4XuFah1a5dZMJFXhjQe1YhVkqaGMsXxjYjza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8Lf9Utf5d1DKigp2Lbjbr1wGDGj4Hu6TiUPoFT7pE1WiehCMVqZZtgqhNfQQY1bV8D9G959swz3BXyct4abtaU",
  "key1": "xjMR3hqMT1JwGfcicSSUSXxq23AHmhgod5P98jpzCvGqfFtEMxf25GaJVPHFUYkxmsXPGu1dGmffUG1fWmuTCDR",
  "key2": "4ZbYf7t4CEPkRyiugDFk15aoDxM2XBGXuFJVoVMnJHsfcgoSfCb6EfPQSc2iz3SYJtxqgn1PrF8g2EBcJcshgjRH",
  "key3": "3sRpLbCpLAK68VSfszuQTmWrYinzurDSrzxNWyDTPweCXL6MDcZwbKeo1GBWsjtsoLK2jaZan6VjCjRagXPPEexX",
  "key4": "3U764oXJipZbqm43tgNCFupoomTQ7iodtscTKochSYrJb61k1mBWcNVEHPmeoncRsRNeXzNbjpcXheXDisqS4UwF",
  "key5": "4KFLUe6DNbDUES6Qza7D6qFLQvNffAns2RDaPZCKxE5apX7H8LTSNBJo3YfhUeaMnGG4yape1pHKLEBBDPRt75Ku",
  "key6": "43CrzKTWWRhgp8WwcmWRFk3TLjxaGPZrsaqV3R9Znu2jkVmKHPX7C4VFLWPTYRnmeFsrqRfdNjVQg9VCa6hFJ1PZ",
  "key7": "ep1CxVBREH8hMpNu9aUsXK1z18Cxvn5CREnbPthGo79xSd2PFXuLMCd5M6R8t7AAHqCUXz3gtSrDgiZMyEdPSEV",
  "key8": "4ih1B8rFRKtsLpCuEXgZqpdBY1qRryjkQh39Dq6RaCRbCMwhs4atm8XCQ71iXPioxqdfcTBHgEXNuW98CeLUFKUP",
  "key9": "5sLKmnJrjovBuZEQ865F3z6egDNqv53yKmovvimgHDfLWyTDx3onctAtD3KWFskVaAWPQqEdt5enwE7Pg9rymr6q",
  "key10": "2Sx96c4xabYEmxwadAKRgjjvi5EZJD5ipuTgqyYsajpJQCkUrxakLqscDhrDcZTjihaTdBF9sRWc7E7VTmu5UQQZ",
  "key11": "3e15tZu6tzeujTu7tV2RcDiEu1ZgDPmf38YpH6Zhdoh8uaicN7TcEiFE2aNsJQgHFPD3TD7BHquYyU4huQ7aKfnD",
  "key12": "2si3MupbJP1DSCKeZYvh9Ko6jGzZA3ybeTc6pTr52ahHa6gpZMrDVz4sXpwcdy2V52EmGuBaRMdyaJJvFBSdkXnD",
  "key13": "3Tz4oxxd9VTrFPPhz6X8w2GkRQjU58myikuT5UGbJXHKYDKq53cbFW4PHbDmZfEvtgFYrJQQz8QoUNvDMji6nMkM",
  "key14": "cMF3qp4SuysJMfSgc8DzbAN28Agj8UzMCpRh4mBRcivMKVsAoKYsDNbot6K2bMgyCAEFbXAYm65BFDUeCpcYzJ4",
  "key15": "4khG1ShLJG26H2aQDaSjjnMkKPPi6MpbsAT6Evd14RWwuj9DiqDLPySP8b96WL4h8befnBCggFQghfYaZWK8tFBv",
  "key16": "43wT9n8j6C3UgBYFggymdYiXqJB3Fi9aiwVz2pWpRNiTtbktQbRjRbKU4nwY1aY6iWSMkw9Jc6hpYc79r1wRa1g2",
  "key17": "4QZttQy2TXV2pyvxi7hAhpNNsPVvww8NkZ1dTnjzbzjB3H9r6JBxgyf96k9WMF7ZmWC1jpduTsY8u37Nfo9WK3Gh",
  "key18": "3F1NvhxVrafqwDdVfqF9pLEqKQdzS5i14s587Yk3LjN7rEdF9TxH7Q9vHJmhcsan3vDasbwxWjJyzr2gGKqUHi7X",
  "key19": "5b5SSeFKGrdkd2tK8tB1B3w1kybkTbvT27gzgSjrmU4CibLT2r1K9okACYwVLGmSXM9XwFTs6Y2yftL3vmjBY6pS",
  "key20": "5tpTPr36cbmhF9jG2fzSJwqdfdEpYLGkebqp1qhyJcSGUE7fUc6KKt2KEhEaTqvsHCGo3b2kHUbMe5aJj5bBiuRE",
  "key21": "8RSSsQMy3agaRB4Bxrp8gJDHJHc7NcnrRfCY71NkeMi9mS6pz7sShqqptkMeb34TGJBErsvDpygDASSDUCUHBpS",
  "key22": "2oei4Fn2RgQFmKuGchjo24kWrF1FhnN6k64CjVpaB1nMDz7KqLHBfRxv1RvzPwn3fqJPEWXh1ZwFUvuwW8w7Wr5w",
  "key23": "5QcKzVpKAcvf2ZVSYgWkUKC5Umc5B7c6YPTgM5mQPcgmMzZd6R2M5z3PcnrGBwwRqiDcSmtmuRE5mULVGZ8RW623",
  "key24": "5iCrWEzsMQoAkV1AB3tC8WdyfyEP2mAzPaZXKxoFKTHXybY97NwqKVt6UKCdRA5UYei7icFvC3q7KuNdcL1sb1cW",
  "key25": "3tueuLzWh2eaSW6FZbre4jXcFbKx9paWci1uijGsSKakG9sUtK8bHakttBhbcwatDwcXJXDUAAVSAesvVA4Rcd7D",
  "key26": "57TQ7CJtmzaiASd5VRxwHPCp3HmjXnqCxNwENwu5wVNPmzH7CZXZ4NYawWziuMr78eGbaUVadsP3Mtx8n1dF93XM",
  "key27": "CWxt6vrrXPENoLNTwGNxKabYca3XahErgC2koV4K6vETMKLHRBygFzsR9GZKDQBiVrn5vCV3PpGqeqM9u6VHUP1",
  "key28": "2ey6nZpB6jhLnBfsh21EL8Ru2bgwdg7xuUtrJUJU52JXVvk7MtQV6hdcKUAdiYZGKmVJeecrdKAqNdR2iiq6inUD",
  "key29": "2QfCYqKQ2mrJqcpGDRZqHGSrNFchz4CKSLaoeDnrm1h1m8aDh1X6icN6z599xAj2vYBgLAfaCLEhMqv8ZzVEjZcW",
  "key30": "MVSPcjWYrCygHdrs4x1ue9bgaoGvgj2LJ7TbhNxbu6jkJEfnYVJWaJSrs3L4uECkjU2rzZ4yUoJHdmMhQopTQ94",
  "key31": "4m3LufoTyqV7tLTBBrjYWRCmBK6CudR5i2qRBWCTTJ3PG2th94wcGnpoDcowKccyWjKPmA2g4cTPSDQtAYb9G6FU",
  "key32": "1BUSn7fdbtAVhK1RzdndvLsQMXoZ9Mo4R4X9HFu5eezM18KCbMvNhDzCUYPabghwtX31hqwdGYmd47sRPuAZWg9",
  "key33": "6568sEV7RRNRkYiCXoLeunrZWLGTqxSgTbdREgx3nYBCBJW9rqeLDKN4PMEuVo4CdWbPmH783wA6W93BXGMuvLR9",
  "key34": "2xS58DSXNAqYnsD3JJPiuKwt8V4grMaYGRyP5KT4D7Us3kqgGJrb9ioXTSmFyonCd8MyfmZ6Gc6VrzKabGtU1fmi",
  "key35": "5RRQSc7M6P3iHD3qAuwUDL3RETL1PGWbaFU34CDqTt6tLKQ5pPAbeu9JfRsmr5h9WWUG5vt55TrFgzg5RWYiuTqM",
  "key36": "3hroGkmC2iDq8vD2BoaT9GE8DwPxUrxSdGbmAwWTGcMmJhQS7C9zEAWKCBx9JNZvCzNLJfhvJETLD8hBrHAjedTM",
  "key37": "4YviCxnxwhaPKztKjrpr4Hu2B6MSmq4CaY1WfdYLRXAaWa2MDB53hkPuf2zcuSE7Hr5qunCCCMCiH2SX2pq8f6KB",
  "key38": "535ucc4Ussy9PbydREAYUCdg8qdvwmP5AMst9Eq1NaJAPdU25CwaBu4SBK67XAvgyUa67ZJGAMot2wH4c4uE5wkM",
  "key39": "2n7zUnuDm4migZYmQ5mvU5dMZGsPpurU9P7AsTYzZybUcGSLXxYAEQ5HhoTHcWqdSezNxYeKQu5vKG8iTkQFDi3F",
  "key40": "4GQGTK5UFH1KRMDk5P3SqztydKuTxgt1r5Q8FbsPKtHHB57f3Y26qRPpwWQ3pcQsmYuTGftDpDuGvR6c4yTVkk2z",
  "key41": "2JWUBGwYiXBumBvKTpSjccxXcFLz1KRSNq1Bav6TeHcmZCHLpbnsjM1S3RWjM5r1WY1g9AxDtaxdKHhn7x9CRsKm",
  "key42": "5BmaHmbWffaf4RS7xy7PMWDKxaY2B57eezX28JHdj9wzF3GZodumeF6HBqwBmVQQc6impEeKM2HwW9AY3G7CE63X",
  "key43": "4tKPCVL9pewEmMEjAwgTJa2n2gYDLrnH342ZcPTCn1R496yWuErCThozC5qeuc46yhkwUZzbCtXsFY7emG9CkkyK",
  "key44": "3oa9jcVXsuVZgmEXpVfpPrWkMGqrRBdhE9kMgiizkwZgDprqBDE3MhjLQg8xE3o7ZMmSDeayQnQHkQRCuiHFH7vT",
  "key45": "5nvupQjbBf2tugbLeYKLQHKpEqVMdnXS6hHQCHz5iB4ioZZmm4j9JgW4toT2WFsvpJ3D5o8NirktmLSzxc1sKwCv",
  "key46": "2qCYFhG2qvRKUMbRQqZF11no7DBLuQYt6KgHdw56pEmMNToiY8wvmp1rVE3v4fYqqFvvboyVetUAKWBK2m12pEmW",
  "key47": "3VhnP96iWP7EGKRgBniGZrPHwqZuFqP1Du36TJK1JSedf7KM1eWiFiLL6v9FuxNn7yjLMraEaZXfZnnQ551Fw6qn",
  "key48": "31o7q42EGKbYp8GbmrTzTPC8NGR2WjuyY3xSnDwCDkdVQmjGfX5Dj5YpQhn6gQaRNFPn2x3KF97FsKsu9umSxW2x",
  "key49": "4mnomxDbhrbSRMpnurgEFm8FZhXivAGpJfzoCtwfxyMT6k5N6DctvyxHCdNrruMR8PzyepjaCz7FAsYg3pWEkArf"
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
