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
    "5CroH7kDvN4kZVDzC4cB5orutwgRv2k199V3LEXZsB8n4iWZWQS67rRFmBM1wRjLMEkWb9qPv6EsWdzpi2F9wi6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRkSvhuZzYeVnuwEPbvXCnDh5FgFpGCS2j4XjnHiQftnrSXnkpSm7Lh8MSjpxmc1bXhLkFA6FxiGqpnkm2exVjn",
  "key1": "3gvF2aHznNuqsCVj1f34Q28mikz1nowZhRyM2PJCRxPRXuqmq68assrkkfBScGExdwRLdzZrr9e3e1VotxQgLf2w",
  "key2": "2PDrdoZBAZVJY8RdVaSBRT21qogCVs41SvhZhhZQCC61nzw58vFn7MrQzJcgqECTW5zmCYqRGi67TmhHPHwkNZZM",
  "key3": "2dy3eKevA1QvF2kjEnLbb3aDFAfizEUhyoAE9BzWjpW9rfmSeX82o8Wue4sLdyVysQyFfpAmPMf5mBBSuBCcZdMX",
  "key4": "2wuHBN1i4XghBarwZqfyBYqPYWGYYn14sGYLsMMKUc54e2sZHtLxj14P8iZhtXKcHEAM5DHwN5hNkJtqu1SyUi63",
  "key5": "niK7pxqAS2h6fRqoaSoPTe9QGDRCnctwmTTjyKp54U8t3WQLttRRw7yBkavKBk29Kzxn7zyRcieV8s4mNgAodaC",
  "key6": "ySXzF1mTtnEF3VvBU2uDuEdMDnkydno9sryyVSAwWgDWzseX59L3w7zVZSUaaa9Xa4jWeBsuPywHzBJ489fEmN8",
  "key7": "5XtHVK3r3LaXuJLhyMqu4Lvmkgc8eaDUhA5J3YkVxoK9zwBY9YNAUjYTL2iN7rTUQHUKp5AKMgNaWFefpwHsaDjp",
  "key8": "49nKoxcPy2hXMTaKtzipxZighj5tvcWce6tfcGENM5sFrFLggh5UFBHmJJXUecTZmCKs3nZGkaAzrABtCKWrdU1k",
  "key9": "3iq27nCXR1vAckkZSjyqk1s25t3Mqkikcfjs6LUAWH4PkZZkdVuBvrbMdamPmhxsaDmf1qSnqs72JbBxETeMmtg5",
  "key10": "4odF3Gk9DxC6Wf2XDQg2gy5sb53S35YJE1935JB2Z5MmcqhM3AMeeBTXYMcGkxvVkDdFMXQEN5quDbb6LAtLFNgg",
  "key11": "5cbcKir52aJHVKqyYezjBZxttP8TCHXswgvsXDhZmhpeQwkvkL2zCWEckFKyKyLp9ALmgmRBaRUvb4kas2doBM6T",
  "key12": "35GbjKUjqi9HjQpYHdMKsxfxjWxkwaEqjFN9KfAxJqJwReJhH1ReAAaDTgESWq8RRNRJVkvkX8RthEGD64QLh1ez",
  "key13": "5aM1YnpFBtdv8HNqTngHKtarXJTMUHHuVfBACycXYhcmMywUEEfdDAPo69j4GBZhiwyC19MLpdAZX95LcLsi4T7f",
  "key14": "2z9AuHFUTnExJDntJQjZK5jFCEAjafqN1yGyC8umkLa6fbgx4yCKHqMqdyVLBoCD9akejVTqv4pr5uvzi9jc2qWz",
  "key15": "2NUQQTNGaQAN8otPazzJHcsAs5C6ufSbwUrMmTUDsUUp5PtBunieAYmGu1qr2RVo18ro4bvjwyF5Fsxmr8JqcYko",
  "key16": "2oXasn6g2ehUsHKgmBgJhUQD8HEHNnjb1hBzHRGqgJrMohAnHLhLf7nYkbW33FnkbewjpAkcHYWagW3qP2BTwBu7",
  "key17": "5ZHyRYJd1J4zNft1Gh7rZnhp3juW1d7FogzN4QJJQqMU8p1JVP6rRgFWwXPsC6bkT48M2B8paBmJPefR5KQnQUB7",
  "key18": "tHLNrDhquWbgtvCDmtQ8Fv8vb6KM32gpRYUNuFaw6yhyNtQuRsWga2VgCWjQXikZRBY3UkmDhMYzCQr4rUo2ssn",
  "key19": "2MbM8Wh4Kq8Myy3hfEGPYLzbgdRLmnsmquthhjCXgdF2Twq2kHsQ8s8xhP35XXobp5Xv1SEcxFMEL8r7F8241Mju",
  "key20": "4idKVVGbcjPv4r6h76QSuKjwMRcg39J698HjPon1UdP2D46Ch8Bw94CkCnrV4x472LirsoQaEoSEFATSahuTHUCp",
  "key21": "3L1ipP61ipULL7c2cCRM4Vwom5x4cRmhUKyZJKCKxczaBNV1wjarr69LKvwo8Y6orcx1XvcQzjodTTM9QyQ2Bqd7",
  "key22": "5dYGxKeRQcJfrEGPEiu8kbGF8BZjxBSrHDjtmu8M213bX8VEuKKoU9u7iJNWFG4sb1Knm4P14LrbpVCYHBXfRint",
  "key23": "2YQpJemxb3Tt6M8GAYkTw8ebcD733Fk5uHQuA5uozDkC1cieK6afWLDMdyDwMZP41VgfHmASs99cMsfh2nKna43R",
  "key24": "4zzp2hDosF4tLnVScWr83BDW5eURenqNEQURC1irR6JnqSQgnw8bZnUywsparo1oGcirzFQ6diXmZCqdfWmZTbHq",
  "key25": "2JMkvDZ6ndGCn1oMY5jK6wK3X93RPRZjHKvXuGaKvwSPihi7do6kYPztsa3xMq7VzkcwSdJfm8RPaHAkqPpcBFFp",
  "key26": "381ZYt9vmUPyS4uJxiyaWjLqcQJYavJRigbv4N1PhY1VBkrsQ15tHXkEDuwXidtBgL2FwVuz1yL3nXzkXtUmiQwQ",
  "key27": "2M5fXpxYRyyM8Zx3iXeTf62WCLSvzWhyYpbStQNE11pXg8ePQvigzTMonz8NaX9VJebeNoqHPSutYZmwwUKatrrd",
  "key28": "54hZZrdEFUb76JA5B8M4wCwhgEeSMWmg9NdEpVMAhURXZp5c3XCeZnjk2UTxBTBg28ZGk3VVHerT1cdRupkJtDAP",
  "key29": "e4NGnxwjd3ZVf1fA8kN7iEShj43BuKLJdgYBRiHUyerXaRUi5xf3W5hDXPDANaQVZuKr5GyMZ4hJYwmk8KcQs3U",
  "key30": "25Kja6HnVWNSibQwpfojEGRkQBvaV3if5E14iuxjnLtgpTNDsvMof4WjMUrhUJ5yRV2hfPFqk3F7G4Sx4Szhig9x",
  "key31": "5tZvhRfuftvkBWpmMnPovjJrXUjmuUv3qkFtZ2KxVF1p1UcWruVYsA6vvN2o8HbQYTdzgUfJ5NVNWf2HPNgkDoVq",
  "key32": "42GfyVLL6NCFkF8cZNrBCG2MLct3SitMGgP9FYVBBeXNKiZdEQ2NQudfYNuLVGV3H8ecRK2JXdHaGP9e3zHje8aP",
  "key33": "4ga1m53nyVrjGJdoHxn55WfG3YmcoZScY1frZvkT9kJJMfH1vbuEDQQ3T65kbatucLvm5gMwp3SHasCCB5nCdDqe",
  "key34": "2X6N5Hb7VBfoLQt1VNk2GPNHTeZ1bHyYie2YpHMU5de57ptYCynxhvXyjC3z3cLodPYVtuPGSz8TsTe4SAWPmr6R",
  "key35": "4cZWoHEU3MAWSUrt9CrzKE6g1fqEzFymfyvTWufeXBJLuEGwefqKmpbTQqK1RVDPrVP2hHHQsTWdwGHFC19y39S",
  "key36": "2bdvg6BUiRyar46RvY8wCe6gXhUPGonXZAa6eVKPhdPkxDWVKECeTjF3D3YKadHh1MBhuRkCe6UbhTx6nXnJi88X",
  "key37": "5Cx1S8Ha547y1FS2e95bhf8ThTt6SFk9bDFXmpJrH8RRzzZHtYYuH6MfVpVR8YEZfVfVdBvb9fSXhwmr4CQAETwS",
  "key38": "3c1JH59BTSKogF7X5DfpjSQv8txUD7A4vskWdjw3cMfhMngZP5aMALD5odmFZVq4R65FJBbR311WFTiRFh3fpGQ3",
  "key39": "JZu64BVWjZ5yL9Qqsw7jYsGDBxM5PAvvfSGyqmStQbWEaZRfD12ZFpuoQfpe9wiZZH7aCDLMxTjrJYDvayViNdB"
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
