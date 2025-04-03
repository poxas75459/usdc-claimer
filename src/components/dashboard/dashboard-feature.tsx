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
    "4cPguXidRvsFkyFaGATMbNE4GgD4ao2kPUWAta6qoy2ypDZH8PH517fzKmAzXCUi6n7mAsL6ctrCdkskx3hMU3VZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2USPsE2CtKuXN5PoZ6e75dS8HqCn9XH6Eny55Qv5d45jnzBMBcc1BsAqjQYBq1fu2htt1beHT9RqDYDtpwRDbKUY",
  "key1": "2NA9KafLVs6eWnJfJuDE6UPnFmioY7PSyGSRL2M7vo8FTwFmeDkR643v8NS9gGCdZCqpcMsrDidLSS3JWPYbnhoA",
  "key2": "7CnanmjDryj2dYQra8hPCxfu4UjgJxZ4is1VhMdoAQFTD45fGn6i1FcUJFR2MXLWRKBm8nnSbxzZunadJhqLBS2",
  "key3": "5CSTrYGSRPpbt3Ag8aZ4j9AztCP8mXwfpJYw53qz9aL5C1k2ps3Xctk7yigDiBYpcLgymxc6fQfhhtLQEPEVZT4g",
  "key4": "5i55Y2iQC4fxH3X3V3QUinnPWEFrrc3jeHXxEt7r57CEaiGMddYVKgqrjTJspYXmMGMBr4oK3apKYgpS1nrxmaj6",
  "key5": "4hq3dCWkhY3dEH2zosQ62Ai7zN2seUvgKcQhWeJZL3AeoSk5GJqgpDM3ATiN2YshvbqgQ817tp1dHEGhxiw8KDFm",
  "key6": "46NqK2xyMmf9uguzaNcW4NRSLdyAaLKwFXHq7bo8WmRNhvyJivKVUQFXGNHy1NGsZ1cmx9xKHak6EgbxUFT5sfk5",
  "key7": "MrQBq9hmiskmeinshKKdWESEQZ9UjEgXuJrSjpy498T5Kn85bZVdRxt6PcjsnYyRZkrznpnAeDn3HiwgwuEHp61",
  "key8": "5UJZDfS8H7jBPxEAtzpuZ8WXC2mQUKyXXkvdLBTpt8JEWGagBy683p4dWtdw5N3h2hUHqJPKGXL4LSd9bgYA6wSX",
  "key9": "5t74jUShrqUqmm1BTzCXjg29z8dDioUrxPgVmmgTjZ5oNND6LX2zn96zN557S3Bn61dRxiVEPRJtX692Q3pE6Gyk",
  "key10": "4nvYjCpVBHkqBYUmwcfwfnWakybt5nFfG4cys9Bi4iJA3Xtg58YsqJUnCr1tMFYu7iTSg7WPYHs5dNR7WHcu9fNP",
  "key11": "4nn1NewQEJ9Py1RmWe5d94fLpyo5pUjPfnudQ88pcqsp3SVj4uHN8NBvP9MFDRoiGbEbzuiWtLCLpq7vX2gYbUwu",
  "key12": "2r2wXXSY3dkJ5n4ZYUsmKPBpuYg6WS2CgEXuGKbEHxhgNNdGjwo1LhkigVyhXR5h2p7A7L3A5FywUZRi5rNv63w1",
  "key13": "2R8AhLt2S1MayhCDwbSdkdRCAhHr7zHqGFRBygrzGyfDyhyQVsmuf5xCdegv6sdbpxvarCeLDc6SfTGf2SU4WYUv",
  "key14": "2rxv5G4LwQ8YjirVek8Ar8cCgpMzmXfBe8Z2RwwZP1XE2Pw6gRHsDb25RLVjqBMNkt7E6QT81cehRN112ao3J9dM",
  "key15": "4abFVQAXGffEfzfodjhoyzEeuRVDcHuWhWgdzADGVkztgQZ1DNEJJMaEEcMhJMMrtoqZxesrFw8qQgmCcHM6qyWv",
  "key16": "52APchvAjNb4qh8ZA4sgX6kiCEDkyGN2zfUtqAikAaCAg7QHniZG3J2Wi3TXyKzeBkCyj9i52jecTVYPpd1QNACr",
  "key17": "2jojiBNSfuz8sqM2bHzc4wFLidxtGb1PRMJcvqRahuz2JAYMXiRKwdXRqWLeZ4wpnqfGm6mFcSyjYebt5s1NxKkf",
  "key18": "dGEnxjTb88S7cAsynH6NP7ALnap58nyZ3V8VKm5qzwm5hqZSEfyFKRcXqJNGuk1VrZtFMbwqmpKUoLHFikLijL4",
  "key19": "434nkXyEDqhdgmkrayc76zdVwj7D5f1vWz2Tv5y7ieXuTvFKem7J1opEzZsSXJt5aTAHym55ztJgXzc41ETcEJHp",
  "key20": "6SvMXiRXtZk3hvN59wdPacaun4fvXCewNnLtb1er1B2KD4PdZok27HFA9FuJroXcuotpwBKaU6mGT7jFH4qHazB",
  "key21": "26Eg61cDerCJMiMzT68Kb7wyhqAftbmDNShzGeiF89xB22cEWZHNj8Z53xRLGsY4aXZJDZe1P3PSYkdeFg8vcmcA",
  "key22": "4GhNKGyKY9b4vBQhyRHdvj3dj83cZDPtZGCqvyZN2rhrWudt59TSCS3XMsBshEMhbfvaXFWHzobqMQkbJdG1q8TG",
  "key23": "4xCAcctMK1KN7Wbr2N9HcvDfmanhTU8dN6nqVQWakX6HUQDxNo4Vwmp77iV47YYZ6FrpWQyAfJT9CxvKUPUesPtD",
  "key24": "5eLiVaZzq1q2hVdR7wxmRzUeqWHsQT2SPHM28yq8gbpw9QtHQVnEmfSFKRMNmkWQWbXHZUJav1q8FRQD8xu5tLn3",
  "key25": "G1ysY4KP3uGWBxiSBuJpAEtHJ8ZVHnLqg4GuoWiNneKm7q8yZn3xP11FBvJdGCdfjNkSCF3Bm7naVy7wrGo3aiz",
  "key26": "2ggFrSaA89G1nG7TkELwMoZ6HyYbxfcGXdGtdnTrTduQQQ4ZHqz3DuUCHS49aAn4Jwbtw2sbRywEFSyeasEDJ73h",
  "key27": "582Qn9v8nQ5vexU8Zth1LCmPmUNTGq16HP7f9qmuMZJNosV9QTADsgkNa6jYJn7oJnyPBY8MAPRqPQhtawgfbSj3",
  "key28": "2PQKCsR6QFQgsSL9k6521VKUTVSMFtxVaNHfYwtKUiu4boksvCpC5HBUxYpJMCKDBfxxPZjL7h79DBxeL5HRJQLy",
  "key29": "2y7LqAdAWwnwtsN1E8vd4U4E9syKswDkq1Q9zbDgC7j54Rqbgv1tsZhprGYXBQZ9B9a9TW6zthJTpphLX368GHVJ",
  "key30": "4HAHBpr2XFDvvdUrYhqQRoUo3wpdAYYU7egrGQQfUT6XdBXkwzeceHiwguZVXbRQKqEPRiJyMkTwyMYXPRU8nrUr",
  "key31": "cuVqvtyMWSqWR2ZqGTbwiQBStiboiHUJSPz3o85MUG2ynVigkZ5jMQiiJsuk8KALWGWL17DnHBD5yrkjWtRDS8G",
  "key32": "3uxKrQSwyeGsfeFaoAEKNV1C4bf7nxSEskXEPxB6BZNif7HdYabEwy1aq9MvjdRhyrL2yLeESwteWBE6K6EdXL6f",
  "key33": "4npb1gyPprM34q477GFepaHFLXpyUDYcejUzLrKymJNqWHAeVwg2Zk3rqM2KWuGamGF8qzHom2YJ7cAnsFsKomHR",
  "key34": "5TxZYBokjyjREPyT9PyoWR4ABqbkXppXsk2tPBKh3HgU5F13V2XtZd1bikedsfroFyzGQw7RmVsTav8JdsZRSv5Q",
  "key35": "4kELzdKaBxTgZaqSDUVaRf19csC78cMxSifPsazxWBDH9Pfba3FUn94Vhd5HbrLgX5T2M7AVHyGrs53DNP8Lp2kL",
  "key36": "39pgHe2Yi4jAR3fftWtoAZCoDUharpijtqp3XCgnT41odVaqTXvkz2EsCVF2VH4vNfnxWQ8NjPojShXS7xLYtaT3",
  "key37": "r6zdr4aC1bN1oLYUpRdJ2MS7UhZE7fGCQaJy3yaxvC62hhJkxC8qHeir8LGRZiZrf2gK4gxJWxixpsrWx3EtfK2",
  "key38": "5mVn7GHLwiFHnoVbWGQe1XFPFMmu7f6UDiJcU7NJv2iYQ1ML2iSUP6JQ7gvPteNrXSQwC3ZwmxGtQsHJck9NffLm",
  "key39": "2rvLNFZWBVuvrbwBpcaHraAzaJeRDqQbQM8s9XXB9P2cjHQNYrEmuMgQZJYE6r26NyTeGMQxtDbnkYVyPcJVRAd2",
  "key40": "2qHaJtwBQ85Lp3LV5RARzTGjH8npLTXX3EJT2gPATYTrvCUspsuwNsfRoh9QnTu62hcneZkX3U8D8gkPZTV11Mzv",
  "key41": "4S1vKBhWQ2hvQ3wUD3ZjGeVi87k7FMY7KAa2BnDMrdeArff5gJH85r1zVH9FovXFJALC4wZL4UMfYBkHzVxEKBf6",
  "key42": "5YXS2UDK3p5gQheARnLuFtADAWCxwUJt2jtNmcz1fUYwiFPvbpvfHhNQk5at9cwz87UWZ5NvXxqychFFuKKHEkXY",
  "key43": "2rsRrfeYvKcxcjUXkvxqLZwAgXUue9p4apmWUUaiy5tb7uCdG2h2sRtuicKu6dbiBGjbNCKNLZWX8ENA7Yr7XCCZ",
  "key44": "4Fr5H2y2ChGiVD5pZs4Xhqy15Js4sAyPRHfpEzF1UvnvQumhfEshubKasCfmEMGBzzZAVVhYyuf9TD74R6SMcAZy",
  "key45": "3dveuZQALpdkV9m2uNCYGPqRBNR4bzq6LmzDfYtav5P6eu4xjqdcMTTfTXesKzWCQj4LopBoogbcW2ZuDusfzcyP",
  "key46": "2UoKAbHWJsoiQE24ajsKU989DC4j6rP1qmmMf2q12KFoPZQ799sZf3fiZbF2z5swTtFELKNHHDxbJf6m9kA6w2W1",
  "key47": "2zLPUmKZoMhKSwSi3kVoVM57pcV1cJXkZsY3ZBWbnKiZEsGYBEH7TismX6grKemm2fDAxnYnbejk2MKXwPfmnHLx"
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
