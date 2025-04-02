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
    "4EYSNY3i3cbmDUMxmjPsg6aK5LSVXqBQWgWK4N8kg2EivnKVFTYzWazv5cCaUsnGQohBryU9Kfy6Y8RPs3Ev9pRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "274mGgoja8EBKTsxzLyvBWdEjxHGy4KhhSEbvBu4bTU6fEiWsUWWtqRyK3b8Fykn214xyPQ2jqG3787z3VnnTcsb",
  "key1": "3gcfYdopm2SjmHpqikRkM9dit8kVogNQRRng16WPbeE8CyxNPub5khUyBXyJ46Kr72kbeuHmPimLDfvZSY5CXFBz",
  "key2": "2cbZGJuSUJ4uGYbLUjmXxx8fSQ9oP9csuRbfKxP9vDZhAoShVwzagkyXWPRXqcAUSRY82H8JJpyoFSFBBH2M64Cm",
  "key3": "3fyRnY7jndb28tkjMJceazNxxu6zGHhZUcwhfRKBT3TggVAJddJBPm8Uh67SvkLYqMgrtns4itWP9tujf6E5Z6N7",
  "key4": "5ZYDTC3wYZfbKrj5jZXEnKh9uCm8FQdp69HiBfyS5jN4qwGEdsaFNu9XFNRv7b9NUZTrbfiNTXHFVfvtxSqsNrzK",
  "key5": "4Viw9eAoHiZKtmLTxBJRoF3MeHKHi4guwr3qZ4JTR7cR5voqzz9nmxHgDZhdVYQhHtiSFbcqcYkAScH1vKhD8Jmt",
  "key6": "21cduXph5gcVqTPPSdQDx7njTHrWJwy6gjk2nHwSAgbNiEBtqboxQGDEvLpBP6N9n6pEJYnvocib3JoQVsF689qu",
  "key7": "2G4Cv5hkW1zpkwgJirMJrZc4FKwCM5r8z1noK5uD6hukxicu87fcPBv5vXUJ5wowxrQiNBjnUd2ECUdP9fxknxj2",
  "key8": "28FEpkg4VioreDza1eVYkjPYkkkCEzFaYodpZnThweukyvJDPjaCCPanzytcGDBSKGzLkmJXbVYNRQ52VUo9ih6z",
  "key9": "5XmnSVNVvYPNiicfqfc5jd5h6dJw6pc4WCTNfJ56bHEsFwTX6YHxPNHRRLwERJ1KfnxwADz2gQPRkpAYHgi1rdBA",
  "key10": "An4pUGEHDxTmwN5LArTPNvXHqg1ZqWnLABtzN8CXGX3JohcrXgDr5wWLwk48hEKYxbqitzb4JozP5AA7xoakre6",
  "key11": "2FvqwXH4buLQYrjLLkJMHqVYFQmGToSo2v9vePx5wKq4NhMyxucorXjmsmWzddNoHUqVyHtDQpYN9p5D9nC7qZcW",
  "key12": "5obpte6zBZtYZgFJBPYcrjShDFtjQLCYAmfaMc2soaupTzY1V2yW7JrkzHrTbzG5gzTNvAmcZjWNkeHccF25hT36",
  "key13": "3v6QWozn6ma7PEVeynDMu1tMxSJUyiV2CdeoR9nKJ139yJYfpHqjJGXJs9inssph7v4YoYuLqVsi3YJLP1EWZ9yS",
  "key14": "4pSVijopuB2fsKgyPF2L9YNNziwbDZwCKk53bTYWN1zq1VnBx4xQeH71tHrJopsdf5yhxJEKzaxMFaq6a6Pq4pMs",
  "key15": "4ZTwnaYdNErGGaQQ44tmdjZ7BPdqzPR3JQYCQeanqyZHagcD4TzSuETUYHf8arwARXfXnua8NUYbZ1aACLpp6U5h",
  "key16": "5NB7o7eu7bDMFMCW9YedjecuoPuuUM1tEDPMNPBJwaiLWKNGk4UPZvk4C6JniiQLBERVv7kL7wimr55YDL1o7n7u",
  "key17": "Gyy73ZXjmvWXkivoqy5bGy1mRHGEW1jrVvvRhzNL6bVub3EqCkv8kBFS6W6oxEERS2BDqWCktiAvZogYnCnFoZJ",
  "key18": "5UmZ8Bbse9dcEb7hGcbP97XjkrkMj2x2pNysBUXvbuf5j5JMSSciPE4faKbxZRt7AtS6iJvkxyTwNfg54rMvMEEY",
  "key19": "5suY83v9NzvZqhoFPKFnEeKVtLJR7C5FXTS4CXxrdwPFMAHFqnU6G8GZW3pfFk9YNGsQab2h1M4eXF6GPCNgtqM3",
  "key20": "5YoKYZxEc8c1tPmGRFYgLNUoYj8tEDpABoLF7WsAgsK1rnT3J5Bx24SSvh8ehJr3a7yzxgSveNeqevRQTUFcL3Ae",
  "key21": "2YLBawcU2iXX6TTdBYvRAifCnTmf8aijR9v6EKQbsHzL8pC85N5kSSMW14o5hAcK5zaFDfxjTwBEx4JWD6612ZGL",
  "key22": "5atqM9YruEZfoKdV6ph8nJuWPPN3cYr46c9LSApPJ7uGMZRSxxGSu3q4onhy3m9X3s4a1jGNQeqT7FdvE2a7hiXd",
  "key23": "3xhHDGJG83mMK3WkMzs2b335toXogZBs1fAQZ7V7ALQdBdX2NdFvKYvq3aco4JeXsjuMTBGW3ixBawUyab4kWKYH",
  "key24": "3wg6a18iJM9ez3wjCf419DMQv4QywXANmpqT7ugLf9ygvrDL9zQb69BzLgMRQaETSJzPRuZhBJaEwmW5snHGMSFZ",
  "key25": "2e7bUCPkh3bSvCKMFKNKk3foJEEYwztWyGsLCnmebQf8X75d5QyCJfhw8pgRAUfxMATp71mGEG4spoWkN7StHrJ5",
  "key26": "2rsWGey3vnhSCFshv57q8X4XRaUrvXr3SsBdxug3NTJVaE74MAcBFdpNFr51KLdAVER5WYMNiCmrDVBWCcWb5fH7",
  "key27": "2TVxWAxfje9UHTV3VCdkrHGq1a3NZrmK1WhQvN4Gs9gvpPQnUop3CN6UoH8Kv9wg6vCa8MbuKVEnFegR6oqH2PtT",
  "key28": "3Lc8gf8WdHrEPBPpfaFCx2pCSEEqA3TYiReBRyxruSnAHc9kr8xFj7tVG9PHUPC2ZnRaw8ved6KYJJvmgY1aMoMA",
  "key29": "3AR2Ypm2hWELrzcn25monzvrqA2R6AScDQypwJ1n3XURiPkWU6ndQ8KSLQMubCrPZwN3b3caV7Xwuf5kRFwpAPis",
  "key30": "5zHtLGnUKxSUg9McYKvc6HWsRkLhxfbnfPSTeyeBCG8SGfq5LMsaYUbTBqbtz7PnwBqhm3VmtF8nwJe4QotBACQr",
  "key31": "4uJKruFKM9Y1BCXy5R1LqoCF6oWi4fyX5kB2cpbsKKi2Ci6gKVBQwGNDnwPbgjKRQVpe1B7bPEXj2ZUGEH5RSgZf",
  "key32": "3WYYin9x7Ky31HfHvu9BrPCeGGvpdCT8ncpiZipNSLqRTirogZeQH1THPjSiZEmFJmi3UiCFwB6FxQfsUqt344b1",
  "key33": "uRXDYvtiPDjHiNwgqa5vDJUHY7rFq4PmDpEDCFJGPHgXjfpbBac1HTi5C5PiGwYbpfbTJt3s4XKKEoBhhaC6r8r",
  "key34": "2v68naocvi9ZLXzvD16Ztou3eXgENooE8QRhYNgEcyd8CuVqedKJQtiWy6ksU4Z8nSjJ5nP9A7KvKY51T91ubK67",
  "key35": "4Yg6Z1p6JDKQucTJpNmhcidJaKQBe2ZEKz5Ry2CRvbL4Vjj5apa2s7FmCbvX6ZsZYxQuaFYJicoUJrAkrvqHrT2A",
  "key36": "2FCGBgtcmJmua37bMHAC7C5T3NmHVuFqf3L3ZgX2Yt9UEqhAjH6S8VWbaXcYHWaafo5YUXAhbPcqhoyDpF1pvHMK",
  "key37": "VWb6Xmc8P96MERXq38eKUAEhMzcgD9CxNEhijD7bbfyWZsRZK2hohHn9zzgkas3RUQHGNBJ2Ra5t6rTGk2josyX",
  "key38": "2Xi8j7vaHVJh9cec7GYyuWPPu9y38aZiUcmsBpbgw8i9ACanhpL8LYNhuv5kF1YmDCQyfb1yVu99Uwwyawu9NWYZ",
  "key39": "392B1r4pu5mtE5RxeHPjhwq7CwVqBYwp7QZj6a7JrJoyTshYQ5hQhhu7NizrMqhPq8P7vJKtNgiXMgkGy7Liu4Cb",
  "key40": "4dJxaPyaHtXm7UmmpMFeDZgWQi3ZQr6k4e1BuXj9hiedRfkMTVdTSMtNfNfBLfjkNZYr9cq345KJ7H5cF1BvJDMt",
  "key41": "5YdAgTFGS1jqiAuTpQuyGhm8Hb2SesE6fpeyqB3JsN2j2zV5Xz9nqwmQ5aBSBtiBhbYaf3MvQzxuJpkk1i5Wnj5y",
  "key42": "3YWjZVFj8qRNonVTsnXTYeWUnsJmdex2Ua6oa5dsf6hLpSeZh12v382DzBL37x7isSCgcKVkmjcMgB7mHg5LcGPj",
  "key43": "3ggHDibjpqzYko8ijhgWbJ4mRJnn8FFP12srW8xP7PJJuWsVXZCPNG6AXQFyanzwduainMfoMwtt5CDqixzwbkYE",
  "key44": "yGqdBGsk5SYfkua4ovL5Uu9naEJhA8Ub9EgufDyrT5yWxKevBJ5BqfQKzDzoD5KUEmEraxGGB2MY6UDbT7nSUBv",
  "key45": "2UXkiKjP9TEHG2Va9JCGrf4MRsczJiYPCkwYcPCXzzQQtUUdbwagZvcVBLQZKS3ditXFLpWBVLAUFmkXwK9CTQYp",
  "key46": "3aWCW2eWWkhqEKwjbTP5Dw7nmSWEPLrQhHR28uZDRvVVEX3oSgvXJN5VwWcS4NCC5oX2sxn8PXL5aptNxTdiTDtr",
  "key47": "4WnN9mW9hjHrVVsSaZZBHyjayBZrYpB41X8Lqken7AMaiHZLFDR4ofPoQK7wB2kDVaf14JjzfnrbKwM4AfYLbe4A",
  "key48": "4MneCctaaWQB62gSqEgfSEGiGCjdQM2THjSp6DnsxbPXZQthnWzcZsGFDf6rAXKM4oJVxxraeYfPc6BJ33Afy2Jr",
  "key49": "5bDBFKhyGGDEZ6mJeaiK4gWRy7YLW3Yhcck3z5mhYbrFPXUivDkzK2MEMJGqz6RuGxGiKKrTuKYUoQ6WPom13TfS"
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
