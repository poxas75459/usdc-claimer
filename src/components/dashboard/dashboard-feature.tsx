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
    "5vsPztKT1gG6Ci4wg2ivfFGzbTNLokT87EnyPmykqweabRVTYfSuc5uJTjjgy84Kbfoa6ng8oigBeKoLLHXR8wS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CFLz67zh6Z7Zd3JNZdDU8feB5SY33V4X1KzLSGqZ2YrezyMmmqbAhM2PebSBzw1RpZ5QPKCsvBmPyWYVjSF2tF",
  "key1": "egGSeqvFBqpUhHorPL9xTsetPccmyv7A3XzmN925gWzurwTzfqPmEYNz9uvJkWhMZZ6aoCK31ejn3Luy218N477",
  "key2": "5VVssqBY7dZn3voEwAQgtrhJ6FZpWmyzNoVMUyWZLsDSwvh8ya83dtJrkPTRtgQV9nmj8Lp91pQ1YvVvy3XxHnLq",
  "key3": "54KiRoX8njCovQWSWYqGLobqoZUj9whpbeJXXWge4BeVEm7pyzhK6ktUvn9k9XTmcmySU8uWH4oB3M8rectndine",
  "key4": "5EoAqXEpe9hGrpuEoE3ZL5DWPzRgL6HcR9iaaALmi4PfVW9SkNdpwncxNz8hHCSpyiQCDdp4GNXvsEkZ79gVinnx",
  "key5": "2hNgNHP5B5C7qjYwsJHMXqGvxfMQsCJDq8fMqsGMcK1G7C61R9q13ME9pLfCHeDY6b6HNiDWHsWJAkSXyAduhuqb",
  "key6": "4DdyUy6G7mtkm9cbwmc2Jcn7fxpRESQg4zHEM8Nw7Fi1ANozJx7sy7MvxxPxm491YrZfsBV9vwe4ADyR69BPaErT",
  "key7": "67dhVhFM314PmJziWhV9p4h5HfAm6xoeJcUj2wVU41JS1YP4BMZFooX4VicEfgeSteNFptNi4GsT3V3k9ionyrXH",
  "key8": "2EVs8XrKJfoJobuAXEZHnaxzWFseh56K9FPn9JVeSny45wgUKG3N4Jf8C813Pviikt7DPavKbudn5JSznoA6QMAU",
  "key9": "5Zo1cYWURZdBWLUxwEF5ku1FgbmxUCDvQhdakVztUhPHMUGZp6duzW1Bo7h5kKm87X71pzsYakG2HecVzppxQCzm",
  "key10": "59qp46LznrYjKpsQi4aQfhP1AX6XsPNefpRppoyjbfZcvBehDEeg4gZTtqycB9NpWx7Q6QqNcE4WyZjYgGLSfEoA",
  "key11": "3eFXGgRe2BSbEiiuAQM6w48hZu5nER5GsHQsknANykAv327J9oZJZF1o5KdTgZYVKsMQ3VHUe25tD4u4paiCjTq5",
  "key12": "4wKjdQVqE3TVN7rtCC9r1PeiiozSNxFBrtFsTNWXpS7Kt5usW6ExyspcRyLVgrWN9uGUZAF3fwgVkAJFXJcD2Ahf",
  "key13": "4QcpQP4zP7o9m7NKSVJtQQuaNmNKKhVMdEsQ9m769tNEpP9dLZaEgDYCCsoKjhnsxbLvqEASdMc8UBrZ6J8qP7my",
  "key14": "4K3RbK3gdUStEiQ1FV9D4UR2NiZvjwa4poyw6kywXGGY7joaMpbakFnj9eN22vLw1brWx3Js2LEthpYWvgqCyrx7",
  "key15": "2oNPFLoQWLenPArP7ybpuJFpXPAzSbjTgJMJj4iVFo63sivdwx58HHp2svLNAp8hTFCC2cEJ48Sj9f7qXooHij1L",
  "key16": "3vxqacuhLCLYgMhUWUzaHdnpSQymU3SrLUbXhuWoCHHNa94VuzT6xCgJdvWfbb9eMeVHtptgHHBrQjYfBXJQZpPf",
  "key17": "2oLVrifp9vE2DK7PsLV4QicqEDjMDF62j892bwnHQsGNvh8kzvQePasDESw7zQ22pTQH7Xsy43iKjcQ36jukFHhg",
  "key18": "3Ep7iCFYM9DHegrWj43tmeQLbj1KkAyXGpKbL6DMzbfG9hcYtXmvBMKBfJVcNjfNGjDjNt8miaYzspkoB8iXr1Kc",
  "key19": "4JUogJ65HC5FTikJgN4eQmjvZvNAeyWBvywt6U8gVPcJqW9qLZdQaG9642wwyPPFqiH35aZWJWTsWnfbLA3EETd1",
  "key20": "3aaG7kKDH76ddPqXC3qJ387jh7EX5J2DuDuf51MFXnocJeRh3pPomPT9EoWNYhBTKTpTw4pjDSA14CLFEDFUYXwC",
  "key21": "4wBAhCbaf5NeXjuN9mERp3zFmb8HCtPg6JeD8kTKSnyY2YCFm1LDUMJD9TfYtFchKBnLiC4Y3hTp43tuPbxgDJu",
  "key22": "4kS8GATrU3JBHv2zpvAnQBEiQcbtiHrBLGJyp3M8yjgAV4C8z1FGJidhNSNez86TT7NyGDWtmESVRU5ZwNz25dnF",
  "key23": "Y9DYnZLTKxxrj7GCpc1DBV1jn9HNTQuLuaFautzjR6rgTdEFhYubBXV6u3JhuHDY72HuQSwwNQqeb6j2sshAR7h",
  "key24": "po4jvrGKxp4oAKSp6k2L4Lbo23SefkcTvL4E27bV1wXVTwgwt5LJNueqpX7yaR6Ry7j8u2tSucZUdmxqgSLj3V8",
  "key25": "5zuAhXw2ZqVNpedRa2ThgRM8GtJA2iWruvGjoeSVJFQS6Hmj8aoi2T11Cpiw66StxEa66QYThUMw7Bqk7M7LrUcQ",
  "key26": "4kAvzUWsncfDfQSa3KKDsvnVU4S3ctAB2cj5px7smVm5yd3Xu3GQwzWP6JSz1foD5tsX8dAFTLogFV3sZEXzc3hK",
  "key27": "4HgwXBFLhbi4hjx2pp2Pvosqh3LqJPdPBarkzX2dNFCJ2bKBiy3M5NyDqJqk9NZPrhD7ronJsCBd2ckpkSTWZy5n",
  "key28": "3ug6YPMPiXKoRFCKXhg23jtgQRYKQB4BJsMK6TkvUuFziQ4fku9SLJJ8Tdm4Qq2QCgYckBgF2D7wtyL566waFcJq",
  "key29": "2Dpwgo1xKKQnda36wscvmfetKABy6c6X4Ja88HJMjLjAso2kAm2Epi5dLsK3eT4PsSm41ED5H7EvGxEXMtJ16j43",
  "key30": "2KboeYhZpyrxBbDutgceM2APGN5JAdMG9gwQjqMttrPXj45JP2bNTx824SKGzt9Hjc4KZ2denFoyavu4piaDwj17",
  "key31": "56DH6vSmpTVA36UcXDxkQYJDDB3aPXtcQqq74coFeyaHMXiTKXwuKEpVfY2zmzftfkRi7zjZ7c5nsbMK8RzYMjhb",
  "key32": "2WdTNVbzedRKobNu5SS3yWZd5ok7xLBFbrXKD8bm7hmswA1Wo5LnTi5Se1DD3Qfy2rG2J4ZN93YJLUbDtUNmSZca",
  "key33": "5AQUvuDbiBJV9b6J2oAZvVUFUeoHYzcifVDN6RMptAbwQYe7E4i8xGP3Xu9cnR2EitMEn4nbF53m2SRRVFTrgCui",
  "key34": "HDronEa7NSURj9RRat7cfHpNxoXc4mpb3thk816me1TGTdb7YCanFpNNcFy4YqEiDaXTn4MRfsLmK2yM7WySPJS",
  "key35": "4mmd8gDWKbU3bw16qcZaiAXcCxugVnmshjb91qAG1BEDUQ4HbvXyzTHbnFYGCz2D1UADNHVmHESoaL7EsgHvL4Kq",
  "key36": "67daW4hitmQxzLVA94ah4KCMFFQuq3w5ybdv9Ufb8QJ1EdNpJNYBjfo1Nz9CSTtDFkMjzLdWXFV9N3GUdv77WoGH",
  "key37": "2SVTESfV7qipEJ6vGNJvcVunxyYLzCeBuCYG8KKTAKyVZpeZeHFmi95hY2JnxPhun2shBQJi2bkPwp4PEzdAMsGf",
  "key38": "4bMYXzm73x6XGQUCEZi8eJtp6zUiGSUoh7GGXgsSeP4FQ74pG6GUo4gzwSJmeLnTAu11LH459hAuZWPvX7j2UcMU",
  "key39": "4CjdQnARTFpSwaCKLuUKh5uN4CpSLvRiRwZv3WZVi7oNyXGeuUGHEv3qqLnPVuxoNPTbgVRtCUvPDKsDUUfXNtjL",
  "key40": "2AMyGHXjQbjAb81cFjfWApQ29hYZop5AuXGjjhy9wZmKfCG7hxHjd1sGHie1Aog9aa8SWyZ5VWwuGHwh8pVXF2na",
  "key41": "2dctqeg2o8qA9AsYYvVwt9kVyFcS7Hikq1W6WwL6Wjn8Gmxjk5EPRFM97QPzxE2b7rWXpJrrsrpjW4j4tGkApskp",
  "key42": "MPtX8Zb2actor9poFzZzMfJqpz34QQcjD8YF8d623g1g7jXw7jGGRtEbJJfX9n9NeNktTAcLZ3EiGjPpRRzTJKp",
  "key43": "2LVU23MAVGqAH6252nt6zRd9rDZeyxh1CxesmbJGJajVn94a9gJrqGjSJwNyX83C8X1zyZPeXCrebeSBkhCVGC2u",
  "key44": "b9sUnNoGX43AjE57cMwLRNvNFuL9ojMkh8Qn3BxFLjnoypf7raFEQMPyM6pnpmwQmwQ57gbXvho7ZH4CqhbK1PZ"
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
