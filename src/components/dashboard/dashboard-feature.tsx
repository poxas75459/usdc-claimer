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
    "2Y9d7E3zzVgTqSdqw9kXwrspGzVhG7MVsiS5zaDFFC5YLr4ZbMwBVmvRfV85YKLh9TN84QU4GMcjppeXxVyUyb93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5ExKXzwHtErsF4G2v2kM9TT5eg48RAAhk1vLfVkuESKwhuGX2U2irf3fBDeNriJ3KQEz2WEKsSAzsRgbCWWzkY",
  "key1": "4xmUtFzBE8naYednyRwsL5BKoHfE6T9b315nDJnMVo3EzCXsbFkbv7ex4CbrNxBd2jU8XAXK4AqkVQeZ94tBjmvV",
  "key2": "3eL2H2pfrjajQfqG4Mn4FeuSQFKXQj1UJPLm2rjwV7sENvEMU5Pq41uTM79cfKZ18qnTkAhKB1yYH1RPUHoJCmaN",
  "key3": "2BXxLq9p3J4ucwdVknzTbn2MARFwGLiLJUZozggCiSsy7EAmRu5ES9UHk5bhMEPGVLo2FN3x1WLjM6DzD3PmakMV",
  "key4": "ed3bKj86beotdg3n4bNUqBCHbZXDoy3r6TZth7kxZGUBi5PyWpWawNtEHcuJ6o4J3eYgaCrvf34FJiADxugys81",
  "key5": "48jz9JVxELhtcgk5Bo4prbRMtDp3EUnweXMRgRHJPAB3DuFEe7pRAC2RHbUJMhqhWY169SuuQbumDBq3tTHWpgo9",
  "key6": "4R2TNSk939q5HypdRkDHXenz7Uc7hjEZufyAo7faeN5zSxweJvafbwGRBgmpezaodr8euxezdnNr1EEV2wWb8fQi",
  "key7": "5tTfTic9ZwfFBRgfU2XF9N3SUnLmpy9eZWnvizZxwkkJcngLe8PebBKzdqgeycgXUyQKxDmJSykbmaJDyCjo19jZ",
  "key8": "5fhPTVnpLJsmPE2wqAQdD8iU74GqwuACXDr9E5kjaGsS43bj1xAqYvXnrvKaW8j5fgw5Z4rnfZxjEDPu56vysoBe",
  "key9": "3eYHjB4iKjLb8mN2YXxyfvhrZ797Ugskqz5myc7tARBqX7XDnz4Vi9ZgBy5b8frrGhBJqhw77fxvddQErPZRETco",
  "key10": "2uHkEwac5rVeXhfXvjHVB1aAZZmTjhKHf1511TiLR1aeUybPWznHjuHA5vNEJb38RuFxakhHZcM5nS1ZBMx3L4Qh",
  "key11": "2f9YsySk4NK2FDoWj7mS2ByYwgugJDH3dDUUm6D9iJprdTuBWeoiou1dFoqdP2tCvnxxzVWX6sGgZDotFdGTRAdL",
  "key12": "4Lwnjm2wpicaBcZhPbch1926V4H4H8yEQL8N1sPoLkFwYQDDeXbxCQcDrK7inM3qVeKJJEKASd6Kmhux6a3xK5U4",
  "key13": "2CacdzKbjYWVkTeviJX8K9fKLmXB3CdDfXiqoN9GPqWgHDY9PJTvBU8XbihyXqe7Ht16qiktN9qN4R1gWRKUrJrK",
  "key14": "3HWXMpZsGtVVWB2RUJHmas68LX4pHpxGHMeHzwxTGCc4Z8VMpEa59ktTfqqQtgomPMYHCP9NEZWQc5bQPpBE7nbw",
  "key15": "T5iozuXHHcngN2CFmk8fYb62RzVvfso5cZaQ1pPFwTvgjWuGaErDD2GvBztd9XEknUcVigoFTgk9WdS75ASxGqV",
  "key16": "57hs9PFveWpUkmJLcX5PVnLf6DJ3YxuVuXbcrgWmh6KgKNaLkeFYxCVttQ7MwH8HXqD18Ba9ubVyrfhVqgNXyDJM",
  "key17": "4u48SzGc88EZeUo61Nuz3VkKcDa2KoT19QdSDMvegkQ8QoMU4rbDGrXCumieZ59Gb2iJ5uavGU3FQKoQrjBX3FCg",
  "key18": "3QBYbAoSXiTvNNJqzVBUXAoXNrCYfqFyBq64gwSqGdn4JqA325kYeoQ5ABYwp8y5tCNfAz5PdzuGYfGHcfhgMc5r",
  "key19": "2V21hLez1eEj8VzNLeoRkfp9TRoCar6hGQottL73dAUR18PCdRbdtK7zSEsr7pPvowkdrJ8Lacag66Puv5dTCeQo",
  "key20": "21kJ6u4idLpWzChfxQr5XirxNx8N9ATmtBuMV6GUpxe3CPkwTLRHmTxwh7FjmfBMV17PtuRxj9L3YmAe8iTffX79",
  "key21": "MFYY5MSQdcNw8NxUG2D2Q13jqDffyuwZ7uedwBneUa2pbFwdPs1NNKsLqCwFER82GTzJPgtTYn2H9NspRxPYXcE",
  "key22": "62BwT5Gcgw2rAAAVg5boniERQ1Uaxnz7ssf4dT8xX3SjGr9c8ktB8R2rDzMyHQMqE7teZaayvCQQck3qqsRMeCSg",
  "key23": "P92iqJgxcRrqtJ1AX1sm1uvkrgRApEkU8NdYHNHFNEuDVcP1ENSStWqvFdi9ZtokvTJmMKf5hwd9swb3puRwpQm",
  "key24": "21aG5xdpYWEzstNBnydkXKAyNPwTiFLjaCk31FqQgTKcELLCiAXB65SgNur9o38B6B5yV6an5sNiPGhdFk96XzXd",
  "key25": "YkKQdq1Eeazrf1wXt6R4xy5M4brSo1UdDu2bv7Dh6iry3gMJRjJ8ECxAgT2UrnE1ftgEdZjAd3147gYqoJzj1BH",
  "key26": "4PP6WdTUeu39e6m9cJ6HHxLRp5YqKizsCd2AggZR5pbHAusDEGstgjwoxb4DxxprTFQtcnDDNJeSUyMhx1MEJSB6",
  "key27": "su1duddPf6weQPBZszpEgYW2zReayZYm231aoxDHnQaR4HecFkDLejCc4oakWvrtg2m1zwSZxrLNSuEnCAuCUFR",
  "key28": "62Zq9uv9J4DrvPTMcW7qbgKzpcpno7rYYWLjsVUfps39X44pKeVGuTJ2RHU1WezQCGy8YRfCECSyAAxtwVvTqFN2",
  "key29": "2L7QCN3AJDSXXy6zzQXGzi2NFifSv1fmspDhfNRSWtEjcjky5DRdMVUgf6LbYUjk8pitJwmHNDfZky88Gu45URQW",
  "key30": "XGiCna1gwhWG4kxhiUoBcudSHSR1aQQEjFvYERnEsYA2cPDd8qKbMbwq5FG9txqmx3hnzA47Duim9W1vDomdYqv",
  "key31": "5WEz9QJMbmfK2qrxhJmBF62E5RgnuG6vqhaBiVi1duXm5yCnmnsdLPPv5vNa81X5WYPu5LpPzAAsnBscbPhLKUjX",
  "key32": "41Ns3H1C9kmchx5VDGpqE3RP2r57mcgnu1gTNy6mDZALkG4GwchYvqMKVWYbeJajyTUeyzZvFiXsCZiPxfdtYXvE",
  "key33": "ZsjZcYUACrMbKn5V6hMvmP4bG7c3k1JJC2jKoecT3BqZRjDN9gzLTdBshxxzrLY9Lqm4UCZfhUiYRJb8kFFGqNg",
  "key34": "2MMfvPm5JmaNjHD5iK9TaEMvyYqtp5tsJc5WRZTQBFLuH4cWjHaLLUE6wKBrBaEHjWiXWBhRE6dbxTytJgKQRVZh",
  "key35": "3vDGfzs7ee7GWnuhnspE3DUZnDrbwPiBSAMTanajwpHbCGNHXZYGiiyi63L8FD8XhjzxDjCftz7r9zVcNHD6o4fx",
  "key36": "3uBwGBKRyYnCn7Hyot7HN2viFf3DApHyuY8LZXTtqeQmN6f6DPHLHiBpQKYWcrK7acfSQh8Tj3bLHzyJNznNSDhA",
  "key37": "51VafYSa7RcatVRQjKW3Uc51WbTEHVZbVy2uWGLrd4jJQtHZKdCu8PsYXSgcUbDcVGVbMW8WudBV248nJXcAGvrR",
  "key38": "2UMaNMqwygy4Md1dxDWCPTVbPKBa1XMWU3VZDGaX9rZSa6GA3SSjUCu27UrjHiW5gh4QWw5aUpdjA1GVLDXd4rzu",
  "key39": "WyBFbJYmEJSLcgEDnCv23NUyEneBFSpGUNUPJv9dnoFLU6t7nBnipnWiviGesKvXNBJFCcviaRa5tJFeKmqc8Gk",
  "key40": "3eQxhN4z96e16xnn2gBMJdHJ9qcrv8AtmyfVardCr2tB9Yz31awALeQKt5MMdjVM8yvzTZvf3ANhb5qb9ER1dut9",
  "key41": "4RXWkHTBCK9EEGxrWT3GXrBqEodgJEwygyXrLnaMV8Woov75YvYr6AUha5SHgsqjQSFprpGyN8KuM9mmTepZziGW",
  "key42": "cRg6AR4js1eXDBa8B6FtmF9s1mhRDyaHXuBCAw1efBQx3D5R1K4PaWgD83akn7o5egQgriufkpcdW2WX56fMXEx",
  "key43": "2eeZYF7u18kxEiSvvcihHxTojZLVWYTHfEoxcj6aYf6yb43noKePvN24D3roXHyP2qgsMXzBqzaK4ofkguTWJkfx",
  "key44": "RPydn1Jd7ehosZJGcYfxpjN6XcvbLFLjNN8dChmC6LRpUZueiYye4iYpzavHwdirYwmgkZE79waK4PjHHL5Mc1P",
  "key45": "676JbVRaYjKQEQhA8hPmxenctaUv5cte2KZMS31xLUPzbuzzfkYS3TGiCJyJxmDvxX5NXFuZj4D9fj7AnQAAvZ5G",
  "key46": "31VoXGtAqZggjcpwYuXCpvEaqeMEPu5KKo66N7Kj3HDjncBJf2bXSazjjVvtpzPoG2AtUBsKApXozEqsbvHSFLYp",
  "key47": "2VsjPBjYKaWa8jjJVRt6QEKP6TubKS3s2Y9auBZt1SfiHG2u8TmDkXjBAtan9JNXUPXrZZ7Nme3yaLE838ciAMyG"
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
