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
    "2o3QyJSCT6Gg9n7W9p2mzGkkg9jsM2u8zMQgmCyTwjJuMGDA3cRY9513sVxbCdiSB2Xb5shMJtZirRJQN1cDMbJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u36UUZHLaHgWYrrTa1oREWgp3tNY96VcsNdbb1BWs18j1vVmbJt3LPc31fXVfR7wmTVjYSsNWWc2deHLd365ZEP",
  "key1": "3oSzmMXDtCWrRbg8R12U3R3wqXDwBpNYsLsEvKrpJMwT5H2A7vnU7ewCSabGVjpyBU67xeGLQ7KNF7LUrDFbCYDS",
  "key2": "3TXoLn9J8ZmaB6mfPoMtPumnMSYbQCaqQhDC5e2aGwbjAvqUj48J1iJAQCEQ5szwiKfxZnD7U78KuGECpQnCKmj9",
  "key3": "2sKm1eXm7BeX3RnDgDenfpw7bdCjCuUr4MibcHysY6bvmZTkXq9Gs7XHNqsaqTatZHJcRWkoErMX5V2qCXUQM75k",
  "key4": "3FCxbdEwdkqgDyv1NTkfjbzXvuaCpgdVTXVLd73LqaHnUvU8cHAT8X8JkjZk9VDr8ZbCMqZDjgcbAhkrLKPBcMY4",
  "key5": "4PESXz3YMfoEHWcSMT6XShPLNrbTdAzuq5pAXangkQpxEHtcoaQvL4vJLwEiDt6b1DhFJZ3aB3M7di5yvyZ3UKMv",
  "key6": "5K7dmoTT3SDM9r7Ta9cBmg98ZJQvPaBsWeH6cTD3gykYsGQ7AY6RLsBoubKKGnPwUrQvD7bgNY1DagYJHTh5PHsi",
  "key7": "4BrTWZbLGC4xG7cwWSXCd8YDFya4kSwpqyDF1tH83YcA53aK53De6eEHtEiFEGLKJECPX22nU2LqU7DA4D8LmBEU",
  "key8": "TzKQRRCaWe5GMk7VpLN4FR2LPSKMhmZjdS3BcC1mD795pzxohrND2sPvbH7h7CSpntwgCRVPcohyzpYoTopqxBD",
  "key9": "5H3dEo7FZC5BHqnpzFi5fsWXgRotMSuc4bv7CDLkQtvzoXQcGCwGURLo8SHwTEieRjM2asECgFi3WqBVsD2f7aDm",
  "key10": "42JvM1GmGLtGSkpgyh3A4yBo3TwstvyNzzzJV4AaGH3udTBhbEKziPCCyo8j7NKCRw5dAwYRXun9x4DGKETpk9aN",
  "key11": "4qtPJjCQjQaaqHys7g6hoy3FpEojSjj6iKJeGveZAdrmJSbqvbCBPZYv54fENHM2np1Zbw8XJmrhxEJQBo1qxXfi",
  "key12": "5wqWzL6boN5qJy5BnLagsbYEKVZQgXpfSQ2QBqtL9g1X5nQS8otPjoASVgPu7ZZdvpuCiZnxY5Kuhe5Q91FAVRk9",
  "key13": "271sw8cGCWysYtartX6tsqWd8ncyRtGKsUq4fFiX8RCH2frmtXG5hNEZfdBj4HH1ZpgL3JdYXJMNzPtygV2jq7y1",
  "key14": "28TZpjdw2iVksaZrGC5exDbqAgWn2Lz7s2FAYMKup1NL7TmJH9sWm7SZz1LPaEMZLah61zZUUXtVLREKvfanKmrv",
  "key15": "3S5hoRTjuzyp8yZL3U26tNBVFEvJn79vfRvrJpgdCzxBxGbg5cFR6whRKiYDVsddncYK7ETBQjPH7CNfz5AZJBT2",
  "key16": "33GDWwkYijDxu48uNE7BUAhoL7Thz4NEMH3sU7V7sTZ5wrumt7onL8CVeED8w2Fw4yb6YhCgAZQc6c81oXLJRhMk",
  "key17": "5PEAz5xFS4NUf5rtpyT6UKtjJix4LEGiB38dxHy1CXWU3gftzTdjKwY2qyg7e6C6JRgqkN7nNmkrHJ6z989yn4fR",
  "key18": "1Mc6tR5AbDJgsx3gwywCpt4RdTReJTajVUyQ5b2uvEuPmzszFxNeuyyDqeWCvFYbqaue5oEWhXmjwmLqQiYyuL5",
  "key19": "fAAhdExLS2txg6HWaxJwhsCzwVj8rEmj8o81if6NFNBKAFWNiwypn4Q4hGmNtXiAfYKnU68cQ33rvBxNdqFHi7T",
  "key20": "4wY2keUPCWnyuvzFBaxN9SUp2bYgRVF5aApMZcnKWrKxZ5otEiJ4pFgtjWvPWvSKzikPgyzshfT7ix3tpdnpsUEv",
  "key21": "4tUuXQPwF1gSnm3S2We3bV36zWu43GN2biV7ZwMMcC6q3sAQPXSM8i4RvGt6dGNf4rR8Bz1DN66V8cXbZNe46zjT",
  "key22": "3kbHjGtbdMRMyE5UKcEqnKz11uxV9u1Ygx8nEQ8pcmdNUSqnYSDTK9cDL7vBerY2HqKJiiMn82WwgkEgerraxka4",
  "key23": "28pfLjiNCqXeGKMCPX2YgFZeqr7AH9xezDmLcbCrXSe6BwJDZ4ZEDm4dkjUcG8d2iaTHJ73WpRoTBjrDqYFba2vn",
  "key24": "5Cxo8ruRTTCyMv1rvi4sHbxUeB7pRfQBG2kCN5PJwhZZyytWJjr6NPqRGXXEYGJGFb12YV6BuCAwqpKMutKK5x8a",
  "key25": "3LDY8EfXkgJJNdfJafMHF4S5uVZrbfRfDSxL3fFyQJiWc93HfJn33GfH9yjRPtLnCsFxjihx84WMqc9y5rQLZvnp",
  "key26": "4hsN1jE7fFrUuKe9BpkUHGPq9PmbTwttaaDAep8y6mTqpCFFf2uZuCka69y5B1V5SuAXTjU7uZF4EdArTJtYHo4K",
  "key27": "4qvtk3rhJRoug7Wqj1UvFPvWeTZjqrvqxSaScKrsyKm8yKyPhfzN9YuC5YL77qxuaer9k3DbABkKdJp9FV8HSzma",
  "key28": "5u4Ug3ARHwVZTjqVWJ8NgYFSPbKN3HgPMj7VYaoWxrmzH5LL88JEd4Vxcs9nbpoY1xExkVf9WSjz2kGw1SdwXd2E",
  "key29": "3FiQCbnvYtoWFG3Re8cQmcaya1o9cqgZyBhRqia8Hpt22EecwL6P3TXxgPLhbP3Vp5PkUHg5VnkYgwoZaMtbei2A",
  "key30": "JadYRXcHJfD7qTwA657rr4YxauSHRFNDTfgAooYq38ET5JVzMk3fgoVyV9GaqpGyiW4ddh1oSpEhsPSKKD7LZqh",
  "key31": "YjZzHZxRTG93V5ziCQtTS3kU8sMhpXLQTeZcvGyQSVK5gJZ3iF4vASzbZXscsQ7WNWyj2UnmuHQRawibutw87Jq",
  "key32": "4Q2GRskX5ft4TZTQfaZXe86QwGd6CxUeCZXg1wLt9Uqb9AVa3HecBCfcgeimp5S5Bzkwt1biXHzL9h6eUP327i3q",
  "key33": "2M5SgYiHgsAdT1wKghaygZWQR7LG52Bp5AdLMDTZVsGdE4h1f4H3JNR3f5pVPQWgZh4yCY27CQywjgHvssAiwZir",
  "key34": "2Xe7b8gUUSedCBocri7VbkZzLGhq7aXibtHR1L7f35NAPbwfKthFrP5Z7UejKfrYMBa7L2re5NcXgPAABNqzR6iV",
  "key35": "3TXLHuc6psFsHVmReECGQtfYnuWvubF7EWs7zPzw4PnUbHDVbU9FVvAVtscR1rybLG9b4Wz16DcWBWBr8ZZWdU4U",
  "key36": "3TNGzxTYXxaHc3b8JkCmpGUcCXzx3xnvX3yuQKHyUJrJ7dGU7g4R6ZF5pscVGxM88fxhdyHu79Pj831WtMV3W3T5",
  "key37": "29ofDHjKy841Bw7snoLruhGVnLXUQuxHKgUkjXQN5vtnyB2xfxRm5BKTyeaBUMbEW9tfvfrEAWzSMxt9RYNbzhp9",
  "key38": "2hwQnpWboFJHQQXSSzg1w2gmMcRVHPbXxPgTm9ndKxgi5MeG5CENDbrXzteuybN2GMm1MgHnmjr6Ljfo9w2i3Vox",
  "key39": "5XR9rV23m8poqCwAwxGFSD8jymmPQkQoS1q842AFHSUhV8kZnJqBJjbQyQcgdsrZZp22a1GyJZ53Zj1C1F7XWim3",
  "key40": "4P8TjVwXmNsrJhsJi21bRsWpiDz6JnBgM7MFtEH7bhAHnQkoXXxKJoQunqo9HBTrxB668kQjoNGc3VcyZqbQMzZ8",
  "key41": "575QSVBsJHSmUfxkyY1YULbv2PYA1i8qkcC1nb9VNMs6XUpyPj3G2f8gBWKSyTfRRApHRTHKXRFRG3HsntrEMpt6",
  "key42": "4QqknMyvGpAhGsPoxk8mSsSZdBPUdUDgmgbswkqcLDGQqPDBTFskjDn2FM81cMgoJeXsQAEzBMM6aueyF2Xu7Ba8",
  "key43": "fjwGiMmXJHRiMAFKztGwoGNLQtJq76FRHsCc4cF4KPRYRNVi8eeh8ccSkMpVesrPbKaE5EeN2265sERXrdjGmXH",
  "key44": "7uo6Gufk68MLMs2kbaL35dJ68WYkwrmYqSKhPgka51mSEYWyjHthNRyVxN1KG3JukPLnF5YzHXxqodHmP644Mg2",
  "key45": "4KFp2tEm1nzg5uD28s6SDBRAo3GMV5X1pska3sGY56cSca5mKK1qUSiZTVnaisdNLoVVH3xbbGTLXQbgTERrbv1i",
  "key46": "pQ7jFBZEdApmYC9kTXaCQ2nXMevcvzyAyw3NnXCRorWTyqkd8c8nLHoQcXPhPxMAbnrswUU8N29vr99oNnqCyvN",
  "key47": "2NHBvcRu6aJqJKZcnC2PCWx9TvBhGAv1k8opaNYfHkN6j2T3L2Yj5iKXyHHuXrW2R7sftsSBVwXsf9w1z1JbuYW9"
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
