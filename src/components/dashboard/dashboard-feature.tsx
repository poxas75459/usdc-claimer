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
    "3BhVA2VEHoDifnaAPM5XLFj6ajWD5fCy2DxMAksTVFa9MpU4wZYCMQJc5Hk8qFhxCfL9dvR1VmhXnNZAwZg8zt73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LGMxonavjkoRpjnHAJ3DsGFjkuv8mpWvEEXXZEhtr7iLNuAKYseE1xYKCLcEAcmES4oNSLmky7s9tUZghKAUMP",
  "key1": "21auFU23jEmqisESLZg5UR8AKApfg2zZ16XFFy3NsWGKKvidgaC1uhuYQEttR6vntduLVyoW6gLTsq1PVFQ8aNaA",
  "key2": "2z6S1mx7XUtjt3qUNUDd38VPsnKzCg7WBZpcBa1gnQiouk7pv7E8wuWqBjJrzYYbXgVkUdRrQBwTG711vfqNA5qM",
  "key3": "3aA7ia8sdSHjGxVFwjBeUtQCHMRUxTyJgM9vgfgd9XX9X75XeXTD7soioF3CL5mWgcgBwpa2vKQVnXsBtgRBzGCc",
  "key4": "5Wguj9JnUB9stXGkegNDgbHiBRYpaiZpWzhQq4LW978gAbVUYXQ1eSmXp5WYtR5mbMotRggm8D7LKqtXMX71SxPh",
  "key5": "2Xny8zg37GLH92isckdEYwBjJhCBGGdV3nhtBeRPYnxFETTfeCLnHDGNY2GhkeD5ZLJ9YBkQECFDkVEfPVHZahx1",
  "key6": "5eGkxpyDrqAEn1usWYJig97g4sGCKNtjW1e686175Swico5cu1YSyj6q4RWw2DDCD2yRCGmuN3Fr5xkdMfzDc5Wm",
  "key7": "4yWzrLTEujoJBDjZi3bnRtiebQPBgCrc2LrD3fRNKM9GVu4jjvEp4PnFP79M4tRE57NmxcykGaFeyoAchvimkjTG",
  "key8": "58Ck1o1FwGrDWZSbfn9idPrfPB4p2SozLAtKVPhmowY4Dy6ktGFUn2mrSQWc9vruDcaGchjkNT6eyQQbKzvGhTyo",
  "key9": "Hh1VF6NjBXopF6k61rmnPWDtDpL4h1jq8P7Zkezi37BmGsbw2Jp8365B2t7NnPaqtojA1Cskx7zhEwXtrsrHXNL",
  "key10": "2AUhiR7cXBAvrviHDybByoSpJYjY6m9qk62wYHdJFZfZqtMbD2YXW2MtALwdyjKgefL7Z6rWYEU6j79tF9K2JCDF",
  "key11": "4z2TLSpWTdZ4H7QAcJDb4uuoJ2s4ZpjeZVbMJLUrRxf5uJ4nTL7JJheS1ngTnar6gWQPVrf1ZJcqYt65WKhEeXQq",
  "key12": "4icxG4Fo2wWYYEYBEasD8zvLbv8bR4JMEwoTGtygm3zsmP9Kz3UQMJFeXUfaFCQg82pAiKjWDj7mjyGcmees4tY9",
  "key13": "3XymtkLMwYaeSms8aEfc9JCiQguLLau9QuyfTgZoD58ASBEWFfqtkogktRp9c3SZVAFULz3L4NfPXJGWNhAJckAW",
  "key14": "3sTSQKFzQ3UNeW8xESkjhWExmC8v2Cj8sqeaDTTntbTGa6vg8HtwF25tNF6AhoYbZnHdMeftk6stvpg1hk22JQRP",
  "key15": "4gkwbfqwLPgCZS9wUuM9CpbZDo9kdBJVs6ZF8aV1qA2vwpYteZRcyrW5m7etDNu2iCsWKWY9TPF4cbu5c4JLT8yK",
  "key16": "2TCACCGc6YGz1DT9e8JvGTwG3vZfDYhkYuCP2jkjoWX92TmbhfCoDpPuDd4jTRhqLBQ2J5sq6f9wAkGeHg9dPq74",
  "key17": "Svb1Jni2Lyf6h9r1nx4S6ZCoMDmkZGGYYjZ6jcerWTj8KLYRqkv7woiLV7j4p6YAaxBLVJxMj7DZC7UQfg3Tj36",
  "key18": "3ZUhxAy7pqmXEEX4BXe8FcUcynvuwocq7DwSni6JURwKPTGogBJvg25DbEcrHh7RQCumDsxV3xezDBpUqMQ67n7s",
  "key19": "67RkRB4Wc1MZdTF7XNMht6y2D7fNCPoK9dfzi78St82oDRD83B7B4dhXxL3fuKtnNwMSd4MzPvaHgFkfhE3SsR4f",
  "key20": "4adv4Ly2PKR7BVFAKNKkhDCPYECGxrc35ZwxwssDS8Lw62JSTSY7isx2uYk4gYrZhA1RNyoEqKxkM8wXdjwqvjan",
  "key21": "3EAcWb3reQHVaW9HtWYBesKS4cYpySgN1eUCn1tRaoa6aMxbuWGYJV4WG9Gvy92hMMhQfN4p5VUzFqPXQAi3tkoG",
  "key22": "2pg4Kj67euqpqmhYeMTV5EePkDgQfHJ7WThkx7S5m6hQnwSaV5x8hugzkA9GtHPXW2Ufc9dAjeBuicSFJMbj6tgB",
  "key23": "5JQfcLGBKhCsbXTxrXTGRTitbTmGcrTkzAe83XUfpVSWZ8Ew9RVM3WEAQ9t2drzZ5KdJTMUSNbX8nprYKyg8EjeR",
  "key24": "bE1zAXQtVUvLWL5dLDceTJ8FhPFwUu55DxCMwEndU1sb15LJAwv9sX9jJ5mDvvhfhsoiEFNS71Knd1nBapK24zC",
  "key25": "AsSqHRHrqjSAY1F1e38rnsF6eV2ES8gHKjjKj2qQKhAvogTZHXXezGk4bPGiKSFYC9No7BzKgiyzxg9QR6j2kWR",
  "key26": "5Z77Xhu3wTBG1GX5PCZy6NmC9upWQYaxeEPKbAXuLosntKzCRRaeqWpHJWMa56XdvaTQLH2SqizcfJJrpWadGBap",
  "key27": "5UfJtco1ibkFXZb9omKX5mHrHsQWcg5PzMJbZfybVx54ptGxG3heG8TCdUJNX7H7ZoNFrdPeBauz2Qv3XyCrQQdU",
  "key28": "3A7HG31BxWpGumMNeyNHWWkfp6UqX9irsrA9Yu3KCeHdrXKUdqSqLWRK5vgSbVsCMK56Dp5xLAzyzy5oyQBdfkVP",
  "key29": "2ays6z3STXHopbfNPyBq1hPeNYhERpx5Uc2DfbbrajMT6zUVeTWNKEjHJMRs23qdJqKEQwdGdEwB52XzdAa4Hkxq",
  "key30": "65gReZhNK3FiEpFpxEtPRRiGf3BDqWxHDkjktToeGeKdy85TVmoDVvEvAjPXUkTf9tuE2ttXF7HDqRB5c3WmHioG",
  "key31": "u8bezzTrNioCoCJMb625tWG4CXevpGQH4cfX7jc99qV4SAz6Jpv1FzKpwHVR5zxasRHBsSEnhMHHVfbWZs3M7WK",
  "key32": "5NvXcqjwNRuS2qHMZ9X2LjNSjrikKTDmD4WmgdhTGxdULdZCCisTDjjyCoufAMyp3um93aKzawxe7AFcaSM5fWV8"
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
