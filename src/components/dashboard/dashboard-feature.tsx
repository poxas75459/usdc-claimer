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
    "5YRjecm6WRoH7axZ1K9xPTAjnRdaTAETj2HA3BEuPi5FdKCU2YoURNA76quj97kHpvHR2JHg62T2KGG5Ubt3GWAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z8RYN5GYL9xruBroW9FWYaNU94PTQGGLnK3mVy7KruwkfR9bKe9V6GPKe1uqX9rU8vuz6nQxAKUpqCLsyKEp5cb",
  "key1": "5PsCudNfxwUeQaCAKuCeB4osJnDc1Cfmht3AdtFqWmu1K9jMReWCnQaFrTW5eQghXcCjje8ws88iC6AvxtpfescW",
  "key2": "621FC2kv7gjdLriCGJyojzzpwJmgSFKXZ9L2e9kuRfu6YMbPsSuWRkDSLH51xLTU9LyvHLDWE56w9DtW5Vicn4AM",
  "key3": "3hxG9NAh3xs17CGRUKQdmJFRbPAPqqUJaEAF9c4RrArRbaMt4G3PsjXFg6LZj2QjzdP4uh7xnwsbijCce8u5qFSA",
  "key4": "4eNYY1XySK4grKX2whRUXqVRQygy59sB6FYxha5sNMSMEGg2gELL3fozZ3yFxcuYDka5gC4yBWPV46WcS7zn5nCD",
  "key5": "37tLMmHEMmXTVB9R6HRrq3W2sp1hbmgThTyMX6FjwoQk8pePjjqi6cPHFbFrSfpoRNthBnv8bsmZctHmiJviuoDQ",
  "key6": "3F7CuSH8TmGuCcCX5mzxEi7kjy8jgg4yUdwjrAEQ7pZYR2c2bxcoWAaua7AjRoSCF25nn9Ex3HCACkSLTSVQVrie",
  "key7": "Zk7MWEcJmzdrmVb48zNSstvGswXwyQKAprPxLwcEFXDdepQggEnDWzVTbMaqBB61D18RRHawqe14b4xZCGbdBV8",
  "key8": "2jnM32Z6dWbDzLZ6o8U5PUrk1gAxMteq9YokQ4SbzS3FG6QrVmisR6nMYb9tLdF8kdwf55brbjKsV2Ybh8R3jFoa",
  "key9": "2EFvpcy3mfY1uTDT27LojbpwL2bDxtFFMuZxemzUwKwivTiza8Tqu48mZ7hG8AwM8dvCWV9RkBAVaVdV14jYeDdD",
  "key10": "1RifFu4pL8syu7kXzqG83Ve8ir1M2hzkc5hS1C22zGrsCejbgWhuUGseTayxBN1WGjhkV21s8L1fW477y6xCx59",
  "key11": "P45H4amymntriNKmeHak6iw3e34oYBszuAioTYE6m9JSA2faQSuwmcxdA1i1GT21WwzVZYwaB2qHtyiX6vM2kue",
  "key12": "3o5H2b2iADs9mgpWAT686ybaDUHLH4e9qbrLbP1VkHDJmomSD6TJjvriZsDXbNPDDox21LmoGQ56dsQ5KUUkRiWE",
  "key13": "NWUzWPq4m25K8fLNpeUc5G3fruAdx39rNbZQNhoBHNnSXSYEQJXib7a9zodBPjQqGdiFgFRHtDeAQorq1dEhtBg",
  "key14": "2FhDV5zkFwkW35hGXcyrJSD6YvPduUR95K2hJ7G2D6xzDYSUmWQVxyRG9Jtpyz4ijEnrgD91FVpTPmX8mAvGRM8c",
  "key15": "3rWuyFeFRqQUyT3b9QSCkhYkqSEqnV4iaqiLoVsv1B5Y254vDeoKuX7gdkXZJ4quuFgG9H4m21QFWH9drqps7XiW",
  "key16": "3Z7u8M3GzqENChqvUF8vqUmtx8f3E2vNMCmPvpe2ffEe9b4ozbiRNXUAAYuQMo5w4PZTH7sdLZatDg9537RAFbX",
  "key17": "4F7jcLmSfCzuvGgSaeSRBzxBfbsc1rsP5mmDhb8bviJuEqps5r8FeFDCixLnFai2KpMSQnDjuQDt2doAoYSQPRar",
  "key18": "3mDKwzQSX7f6FD6uGHPffe9owDbU5Gb7CjWJC6mu48ijdjY76PH94JU1H8xMoCEXCiXPGN8V2ZAFPpei9YE7Vdma",
  "key19": "4rPUV3fV8Qx4cttidSeAZKXG1V6dMbcgYM1BVe6H2uoNYGubMz3Jwt38o7egLxUyaeDTBCHy7CEs2qa2ePpphdgm",
  "key20": "2cxUuJmmgvDGuGLxButWtrf51Y4f8F95gyauc1ip1fWenbXh7dLkj6QgLerzfhkHQ825DtCmqy4zJ9M5TNHNgv7Z",
  "key21": "2zV4faB7uy3cfAgf3kAJtwLhxUx1z8cU2JWeqVUCvGTdihMREb6E75GQXjgDcodsYPciMjzSE4KqSS2DE4GAxvEa",
  "key22": "4fZS4UajvxtmZccPiMWrujZPpvXwwkfgsFTLikpvbcQT3zE2ahjjJukonCrfavLfWZYJij1p6mg81cWYFqmLXyzp",
  "key23": "42cQiFU5XQrQAu1tnBg79nNhko6B9VsbKEFAA8yUYG3W2SZ8a2syrD487JF3xkn4CnKRxHKNh1CgiKU8ha1UJVZj",
  "key24": "4RzuQm4JaXNqQXZJHQuEtiPsYA2bWakRb3FTbRrYRDWPeX6n47MYrc4V2Gd54kEw2v8kFYn76hipRsCxc6cCgLvb",
  "key25": "ybQZcjDPgwPuVcb2tvyucJkSKZ8nHp6Ft4jMBhQJHuwRjs9UkuBJDk9nXd4ZdQY56NR3cM8y39PM1MsCUstHqfD",
  "key26": "3EqH42n6QnNV8vjeQjCAzp839Ng7gp4w35WWrASC3oSsAXNZa2p2pXhAK8mYxVLzW9vjv9z9BbxJDzvJsauaUYPy",
  "key27": "5uags4eZKHMVkKJ7u3qnj3ceFQ5ufXWPeR6xD3Km7EwPkTsWJFW2kK1Wv6soHrLMM259sZ8vZkXuc1u3Z7D59X8c",
  "key28": "KaV8tTUk2eeJ4arW2DQ8Sz3imNte4vMBTcYY3AKmWjx7jrzknuo2sAFGeY22LhaVznXsH2rZtcZcoiyp8XHC29k",
  "key29": "64xQh84khvFornTe788uCtcsYfPb4FJvHKcheJh53uGKqgbgLXhmmoywFuAFPvwHWqdgsgAe6SH5BG5GYLopDbCU",
  "key30": "2gBD8U2rjsZB8pBFQkGrEmBxHhZGRDwhdmoEtgjp7x19dMahxCGTQtEPjAhzgBpCyMDe5h816fN6FeBHtw4Wj2Wv",
  "key31": "2ZW4j9KjdMZzgA2KTgRN4j9cm3BMwS3Y2cKkudRrsGcJY5eAk4tizwRe245j5Ma7Q8UF2icKW8M7oQt61p3vS1No",
  "key32": "3NETMJGPgxcmrV2kADPYiake6i6DBn8skkaekq9Jskk6bgx4yt1uQxXSo976e84rJMcxnRQpPrUHRCEtHgLsmV1K",
  "key33": "3DxNKTTkoLZLLu2mCSAJbL8DSJDSs9Rk4uRC3pooGLDoF7v6uBjAY4q5u31VtHtZP8ZxtmoAqtTU37fvs4GSRAdx",
  "key34": "4cwCQVXXtFqXzZpWTe8A43Ls49oq1KKGJDs2p8uuL2FcBuuXB4VQn3wCsJLMaTZgaFs2pMvsNc7rr8HG69p75in1",
  "key35": "5bWTZ7XqXLbcvGcVSUL16HgTay3ujBaaBvnAZse3yqBe2kue2jW7QcV1JBn6FwyhNKtQDKEdLtoBkHJhGSmK18Ak",
  "key36": "3UnXwupCvTQW9MDWUXJreKMyfRtJxRgpRYyKCefAKgLLP1tvSpCL835ptuUrw2ZKKn14wv4DgxVAELpRb8gKWWH5",
  "key37": "26dirckt25V1S3DUJVd6eW6ibBrqTMtZC9JBqMj6P2g8fDmdNCq8kRY7wjcgovb2N85FMMYTtUVScmXQuznxkJMD",
  "key38": "wP1yyGbYFLCs3SPQeQ5dEcmZeixHSk6EAaHeEZ5Yj5HpgkHCpGHmQEG9QygFbEtRhxCXSwZBe89K8qbBEQyov1e",
  "key39": "4mKubzUvuzgy3HyREDtNoecwaHhMCXPfQ3iJKoeorfrgEkJyhhzoTgMooDd8Gf1u1yHCAaRBTCTmbiPQqS6mUTsV"
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
