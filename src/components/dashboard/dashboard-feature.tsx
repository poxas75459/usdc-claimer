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
    "3W41k5swCqWqeBjPgTYDSqHF9fXruNYXLyftukhx34vMFDP9USspVTHXtkkvjJbq64a9L1TgHiEnktwpsQDBfxaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7MRF89q4WJAERxPyw8nfmuTqR68Avtbqc5eCHky1XCZEGEcHiSgRbQMZQNBAwPZTT71q6Thz1FfBL5zpNjBqWa",
  "key1": "4wk69Ykymm4HuJwBPvmxSZLu79YpBhx9YBFw3JjWHdzk4aDJrhKpuemBvNqt5FVCtbQKxByUfHWy1auhn9BLrBe9",
  "key2": "GTHNcqn3dM9ynpAhmp6eAMWatJkpH4PayPzDjKCPEzMXLvnZsETxicsdfWe5fzXhPvCE793VHEGoswkrynhP48o",
  "key3": "4E1nWa4zKrYYfqVurWLFr1KeLbsPEXTMjUuUtMCfB4PkoSEsatsc1ezKjv5LXUvX54ny9i97qD7ru8D9vcwPb21M",
  "key4": "2i98qkzMCCYS5K23V7HZd5DF2GwTV4R4oqZ3BGeikMpMDQXcfGWZUoxRqYnNtG5jhQ31dTTN1k6qZKpcKqYoNCwt",
  "key5": "yRXcLaycXkUBA4PAp27TfWJWVpsAqp5db4TUbTXB9hr4wRzDv3DNwMNLj8TwE3TkMckfQxADzoanvPP4EJUCkBF",
  "key6": "62zJWDuAnEfwgr3pcFuwLfQgqJABMgcmNVtn954aPKL6bhLvC1HoRRJKobEjvefZWGMM6yyV2q8e4pXXtNFN2eNm",
  "key7": "VcpCwANnc46SRuxJe1qKuL6W3Ni1QAQFCyhdRp55mTfXaQRfgCHu2QxU38jLVzBjL8jxXmFoKhpdAtJDF2mEo7a",
  "key8": "2amruM3bf1VUbxLRgedAyNerZ7BsEkHHtUeorbRKU75m4RsC8XNB83H3kpo1uFjToctG6K6wBfiTLYPkfm5s5dn6",
  "key9": "3pSWjGBfLFN9Q2mCXbBWfUkMM8dUdsubD332jvgQEmTHvVjVk9eBWhXJpr8HNCmQvfQxghEhQBT2a2NB6eJYW5x1",
  "key10": "3aCLcyiwCswZ9BmTddTrqTAMwSwfQLqr3XevkB4tL3LdArRiNsvUegNamMJQW9TZPF6EWrQ44gRF4xBxXozMBqFN",
  "key11": "3M3TLKnXYNSPDyMZ8ZL72a5V9d17zLMwdJfYooPqNW32LTQLVdT5SqWkbPawKHZTjkNUqKXScEenWR6vHFr6Zk7M",
  "key12": "5LZHJNgZCAqjzA8MkRa58i6chSbCT4q6WnoPyCbBkDd56sM6Lp7orzLzhEvt9J1wsNJgKEJpKthZFSFyGSHKsTHy",
  "key13": "4KoHrYi8E3dqvFKxbuASZtVQHyrt6r5rhT6YKs2MgpGmTfPSD8wDzGNJJhFJqX3Y7hUn2CWtRszL2UCKDQ6S5BR8",
  "key14": "2GxQek7CfAyDwkLFQXy5xfLNPVxhE4J3qPYEBHRPTVwoKGuUHew3Aqm2e2PAUZsJbo76cEu7CUhA4AnhRnpa7jqG",
  "key15": "tQ8cwWErRy1DfG8t5EdwWE242LqXSBbrj3qvcvmaiJ32GrFTmhgX72BaGYaiQnfS46XH92KTXXf7LS7JYT3bFhD",
  "key16": "2XXN9e8pfDQeHjXw9QkCAe3z4C1wiRjvtbzbJpr4f8Qa2Rs5NxrgqZowRjoX89ixSJHkQ2vRYM7AegQXSoZqRuPT",
  "key17": "4kxHJ6aJ7WKfM6Yguye51XA9zMAGKkF8FtWzxL9bvqycCnuCKcfZwK1W4wLVNen5YFv2PS1oiSijypFw1XLokxPC",
  "key18": "41m9P6j8UwYE9FTLfktYDdsvNG3rAM1qcG1gZHA5ZW9Tygi1wRc45zncJHxsw2osBe99HGkgQrZ9ELuqkZsMduVa",
  "key19": "4Y6d3NE1B1eUeJhaSXueiFG4SKb886WKEN5ftUMyg9rz1LQqLn9JeShT5wMceF37sAnR6QaumUuovTVGFPnk5FFA",
  "key20": "2JCo2k88gPpau8CcRyPY8rPNfj72zvteWm8nsgNkGjmQWepHRnfX35gdXMZTFPHPoJEMw9ao6o7u1k6efYzJQR2f",
  "key21": "4iFKFCf3QfWxDJPp6D19fSVacc82pxYn8CYu82kQHpzxVRBVzci5sRdUrsWnqvtnMiDq4cEyLnhWi7ERK8BEzm7t",
  "key22": "2QNBSQJjYSnmvBBQZHwG4DtjpubLVqaHCi4ZsYcs18BcrQU9YLkJZAFhNnFkJNpduRMXonEF7D8XpjTUxhDVMmtF",
  "key23": "4trYGheVbKcTfG9KV3bUTv2KBDH1QgywXwgZAM4dptayB8fU8Yf3wvKBCt9hJY8QAVgdufqGVx8FfxJSWtXb9jX9",
  "key24": "5iGYNbbkNXxB96ZcvkfXgwn2QbahSNt7wTdF8J1A46ir4U3QVMyeLhgPcwQhhWx8PKuQj7r9SAWABMWgbtpk3UYU",
  "key25": "3b7k7esacmBJ2fxTyRNbTss55AkBh5RbCPj1dCBjcQkXRgFdnz2P6REJkQvmNdc5aHtmYyYe9w5vtAbBXgd1LiET",
  "key26": "2Vnu62mnsayq9HvuST6QGgWWyH8UkohjBB4rtN99NF7Geais8xyuXeU5jbt2gyMKCVf8vSN2HtZMNmtixhVMpWJq",
  "key27": "5SUisLXHATMXQRraqfg8qmgqR3HrEbshKaf4U2MWBac828xLNUCDGUiepitwU1ev6ZJWj63jrC6PeZL4wk8gxr6W",
  "key28": "Kes6dD2SiPaC4CK43R2HKukgLQCQVQhYfDb3EETaoLniKemNLrU3CZBgwTDDyCPAw42vMnVGy8oXHvQAmb6Fesg",
  "key29": "3VbLm7kfYfpbsnc8XUmRtx5WuU2Qy5GGmsG9AiC2kDcrSQyyFNmctiEWNnhTw6eWWQBcpBpeNZ9tfjKQZtYuw6iV",
  "key30": "2VwRNY7HMsb79fk6fZQ5KWLDPKHfk8NnvUnrtv1FTi9PSjXs6TRTWMAx8DkoU9p6TW4BbsuVqTMF8nzwTs4Pfoaq",
  "key31": "5PKeo5pi4gGujAa38rLPyHQnzE5gYQC7Hns3FSJYFrHe1TTTHuwanbd8j7416a9QLvD9dBXfEZaBgam6KB3oLh3L",
  "key32": "4vBmtBo6VKNrgWkTkWdKzfLnmPSCG3pHjGPNeRQuc4D194BRN1fuYq4KNytSqexDZqKFJfmPXM9M32z3Djz8dVbt",
  "key33": "65qLzAkuNTXF4w9sAoeNLGPPFzWnxeuTVyy5N52QEafXBCuaSXDBrfixyhh8u27tA7B65xQ7eV56mV72tXMHXxi5",
  "key34": "236uu99fB7F5MJYKyQ2kMj7GT3gDLSd3phYdybKRmpRc4gDfXS8iZ75vk8DzdtftGTPxYK3aGNaSheSBVwo7si8F",
  "key35": "tGLamDK8227e84essKrju54QZ1WS8ecNf54GCyhFLHyV29y2b1NMAk9x3YEdsLTeD7FndSUAViBMzq1hscxghTS",
  "key36": "2dtnK3Dp3rcDUHFKa2snzuktZNTFHZQS78AcA7f6zwhXdzQRQoNBZaHZ2i16eq6ib9VWttVeJspy6hyJEHoxKcg9",
  "key37": "4APkGxmrRyLKiDjCYQeVHXvEGmVjMrFyhZQCDAUukk8of8J2uugydu9Rnmpiy2okc89MaknFepniYb1MtGsf5Eev",
  "key38": "gTnVqDU4HJ5rD5HG7HXaQrip7xW2zsFriv4jf6inreECiqKko8VYMFzFLoy3gqrHH6b3VymhJJES78cbQ93ng5j",
  "key39": "64v3wdXArzbBiFvhMpRyZ7kz9cUziwdMKb3WEKJ96SVYXgj3WgBkQyADtRNKw3J6tcSKQ5iLJRtrLVrQKBo5sAVF",
  "key40": "5cQi8mL8pqdvJdyZruizxBi6QsVY9v8KLt7Z8eY1fga7AN9URDbMjhbfnhtxK7JEVXLpJz5CthRUwKQYgsrbU1N8",
  "key41": "3bDB7Jr8adue6Kakr4cb2M1i8ETJSjHuC9x5xrUH8Dro4vWn3cv4W3kYkADAExsGev74aCH8xtEhj9LyQrP2T8hW",
  "key42": "2foaFMahjiXRCk5DKQgGumX4ykLXnUJbNsTNRS6fiPH2bFr7kZSFF934jftuoVZnRTohJML3H2ubcYdUAEWehD5r",
  "key43": "3GHtneM7eQ2zvmuCNoV4gLkCZo4hWD2iVbEjmP5DSMtzo4TVgN4briRB8Ud3LzPNGMp7yWzvVxJE3XCyAqL1eZBG",
  "key44": "2MoQ5TUiiFJbM2WEowu2iUFwKkBw3KFwNBEbeXbbq82JcqZKqNUxLPJNSbJZwoFcHFJfbCauEWNehH9qTtESB4uY"
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
