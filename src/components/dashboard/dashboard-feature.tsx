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
    "M2n9VhTp13uuCcWMq5DMMjmutX3Z1uyD6KRV54bnRbzj7aqxX2tRcdA4Gp5mL81rycAjZtwczu5f5qmoVxtZ4qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2NzQ39dkZ7qiPCFxEKeLxjWmuEP23uKHgMpwetqJaKcnFmtX2VvB6iQHiYjrDKp74iKsDvSLvBk4GQ9i2ZNR5D",
  "key1": "WsQer8TtJjMLx9Scb7hHSET5wduDG5FhGaUCM1G27ut1BsrMsDNy4YocZqKuGonHwxuXvE1nQzWJKjeSZmasYGK",
  "key2": "2JMANvbPDnM34boqjqgWdwRQNkWbXEVXT3Uw95vJMpn2FnWZTMEwmbDFR68TcysBWDmiBEYUD5r5ALEHgfguHCji",
  "key3": "3fXeZnw6Yqg7GS1HE9jXKpFLErcaTgaWi79y7N1QwQsTmqL1TunBapX7MQokYj6RASHntXMC5o7Xgnx3ATMGVc5y",
  "key4": "2hgYKFASQL3uHuq5H135Bt1x3wBwPgSqfjB3qaK8pgq8jX5gSYpWphnJtCjJjTgzM7NLkqndKQj6yMTtGL1KeMxh",
  "key5": "28YKDGWuPawVuGSBX4PyQqHeirCsgn84R9qyGdiVL4nBpgknT2jWNYPnPKVoUpQLYNUn63iPZHftJwtGbxPJv46t",
  "key6": "3ALejh7a5hJ8rWssbhCX2xL4qzfCd6DXm1QGZHfRSBL9F8LAiBmDuQsALgktpPgsnJQ6XvfMTws8mdAm8HU73aTU",
  "key7": "3t8R8sZCKjWY9eMBk3P93FKsc2ATwKJz2pC8y31cxvuHSatPPjfqweL5xcNSZ7H81iLEawqUnTpWJsd1oyL2yhqT",
  "key8": "25dKSwWzNNKwYxWJKuaF4ymxkgBt6RvnVGRwCo7roP3N5XXkS8VezQKqxABsDvK9ft5ntzddqxwbBqb2eYWXgkNZ",
  "key9": "2jenBevUt9fos4ZzhLbZoV2TJVUW7HBvCqxbxL8iXpuGdErhEYG133muh7tyLQxXLpWitwJry6t69JriAAASxDk9",
  "key10": "4TgD8gKgWAwCeBwRM9tinNAxQo3YjNgRbCLv1aMv9PVSZCx7wQfK44oc17X1hzunoNkFPhp48EkuRiefGSbiTXou",
  "key11": "52QibD1c5tuzM7Bgvargc7y7V3rTV35U6aGZm1Dgaq5CpxcV4FVsxTCVydTdiQpNdeckBYjV1TZLq2zZajdSzYNt",
  "key12": "DSzk2xGEeVr8wrTV7Zv3NbGLnfwwYCUhP7UhCAYU77DdTkCt6qpr7zfi3a4JjuCdbbQfFNgpWLhZRZJfC5iENp4",
  "key13": "29XANnqqXfrKCcM5wxu4BGo4fsTnLCRCmCXUJWracNRYsXB1dnm1sYdmLdUmPMFSqp9WX2s7QAzkwm7uULFgKaWq",
  "key14": "2XTusrsoupFrDDjnr52nGRu6zazQ5CPdn78C6NNDe2eiL39g5UycSk2fucUynJobVkC39pVMw5biVwBRNCjX539d",
  "key15": "3K5WyKqzj7q8jvpoNEuC7YwnVpoP6PUfakYk2qU8LNdpVPxCTbtHwZYRVgfKmHzbUWRrQ8snQmEmpovprj68aRw6",
  "key16": "3ZiaHd5pGngj84tXjamJvTGUrmmBzs8eYnFrWy1SSAbrFj4zivGSzYvyKdULwJG4kUxhn2YXCA8nMJtRsVgohxXd",
  "key17": "5TnUdEmsk6L6HNb7dfWU9ZPmowDwRorCSme9SNu7JgkdfnBsCUVnZ1dsxgkJbnTC4SL8jhewoM1H9YEPREsFkLMf",
  "key18": "kj3BKPhhqs6v2up9mhVfNZ5fEtLfZTXV1d8GC7eUGUnaa9s2vHuSJSqdgebv37qHqm23QcVo9xzYmvUJ2D8nBFL",
  "key19": "pMmJNY5TNSfmpHRT7o57Yg5MSDwQn8Pe5fdLYWhM224t3cbnjRdgooWXbVPVAYBV1bvBGvdnN9QoZdfUgeX6GwE",
  "key20": "AW6FC8w5SLcQVdvW1cd4Zp6idYukMLbaboCSAjQmsMxn4EDVKkacihE2KsRZrTCzmWhugQ9GEcveznAndKbJGrT",
  "key21": "5osHEWaw42YaFk4QJEMe8CRwyoMixaiXVwEjAbEJoPumXzCrsDqP7rAf64eCanMCf6j2SBe6Hr9aNqywyknD8gAU",
  "key22": "QvJTYdU4XULxx5J71GDjPMNvWUnPXcf5J9sRYUu52VKoNYM8FF53MT1wZ4kWYG84sNUYu4i4PfhtLB5m9kFLd2d",
  "key23": "45onhr91URGH29RqsYPPGhEZbw6dtWmtAVQxtPX3yjQuSsmQovK3pwGMKTSjegoHzzt4hrvUusXKgD6fArFK4ZWE",
  "key24": "35CBJUYbPTnxEGCiko8KH5GcvybpE6YtqRGHXrLevbYWy3ci8ij8RbQcZVrbXQ25yPbn5uJVzvnpNL1QvZmyrSUk",
  "key25": "2F7WsN49YmtUhGHY5u6KC5HKEJU7CxcFZ7EjUrjcTndxjHMCmzUEXVZsAco31oousm2VATLjZBYVKTgNjQaKmr4H",
  "key26": "32f3cWEfDJdcCMdD3XYfGU2xGaCwDJfuyGvTgjkwKvEzpxhxZqHwefVJdJugDKB8D5hY5xXGxBJHRiG8Y1Kcg7m4",
  "key27": "4JAapikwYAEioRVYZfS4HAMa7fsPqkgY6bbuK9wddKc1xpj7VaiaC8mTDzkB4BKWTsvxRDkJfChDasPRXH1MsrkG",
  "key28": "ZzqHwanjeon5QfXq976Td6pk21vK7Th3DASrxRHZRdLiKQJmJkyC22FPgwWLqjCfootd79KCyg4vv4owbgCkb2L",
  "key29": "58o9MEbzLitef4L2Wiekz6wite7tmzTn4kDKybhdWSsazzRRGzZAiJ9Gd1aGi7G7vt1y6GRV3e6KhdzqqFiR955",
  "key30": "3Dvjdp3xcmikycJ5HTeMmXbSUoPkjWm25Z6C6KaKfKduRhBoupnUWDeb8dYrSPq4JF4aGF2N1wp8tAnVYYo2fHSw",
  "key31": "2UYBKWmaKLHbt7XjQtDa8thXTDThzyy6WPiH1rhjWuSEcJnYDRzLwbn6sHRLrsqZduhaWtWe7kAA2CrcTPB7xu18",
  "key32": "2KJdHnY57KGVitMvpyu3sxBmbfwJTRoNoe6yESaCZmy3AmeicjAkkYUSuhugERC6cpxBjttMsyPMhxANgzeB1qok",
  "key33": "chL9wyP9BJBjjCsB5kbmtkkV3qS5n8rj8NJLygPvTXYfV2fuchYrRy6fYDQ3YxTvuDFg9YvtHAMCuKk6Sc4Hkaq",
  "key34": "4EF4RLDkEPSr2D8V7FHJD4yqqABDd9DHkoBD3XvuCns3xs1sMVQsYCDTSsLCvqe6U9Hy2zz5HpY51Q3ZjYyan8UA",
  "key35": "2s7NKjripafp2mRsy1jfN1EkoSkuPFWKQ5T5k4LNoJaV1LU9vnL2jnviXLPoEs2AqNuQCUCfMV9ScBboBj9WDEhV",
  "key36": "5dNMNCWh7gm1vSpRkZadXZBEwvRkYE9ksQ6irDuXgHGNFFrnRrHMWH72tGpZWeb76LAi8xuyBa84WeEDAEUDaUKs",
  "key37": "4A5N8cGMMUnn7XndN2uzMgdGABnpN2gAPKdCFcAF2hm9oJ1JkY7seqHkbn2MMqWYHtiKBtWD8Hs7DNGuQK4P1iye",
  "key38": "4h8YvgASCaSYKZbPC5gfViQpJeoXsuf4frduWThWjLXxambNU6kyYVUzxnZgA1yy4nbVyaUwsi6vEEBnVztreXMy",
  "key39": "tHMNZoocS9MKkJHePTXnCGcmHvjknE6UHDqV3bfWssscXsuhqyhk9GcKQtsvqqUDcsUyu84kRoD5qiCgdEsC3ib",
  "key40": "2FpbiVYWk75UnEjBRHhfkwJrQCzGkTQqaayd15iT2pS8fAfniXQohLDwdcdhS322ceid7jasbXx9xKgcG6UYhZz8",
  "key41": "5eaBsyW7D5SrWGwt9HhPpjm7ciXMsP5UhDVjXMMXP7xMcLHsrAordkvsUggy9jo65X4bwyyKoktjDRvGFmUrBXCR"
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
