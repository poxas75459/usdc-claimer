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
    "4o6HXHf5ou8q6vC5QrE5wcotcfpaKsrvx7CNV9gfXt2cqbsVeXDyZcCe788H8XMYTh1yXNuBh3firi7MBcEdMHNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55baxGjcrH3LdPAyYNqt2EV2swikSCPnjpxH4d6CW9Z1DtvCpxxc1umTXb7uKnWU79rTmW55qbpVZQ9KgxvsPdCs",
  "key1": "PQWD2gJnCdvxaBac9fLd7M2Ptr9vs1gm1j2nVbTRRwYMggNoy2csHHMKPCmCWQSQwKGGWAoN4jbENP7APVsHP9m",
  "key2": "66pbjfFYNFzZB7s3J9i7qteoRQjBV7i9zBUpRkA2hBEbNSKgzQuKpYJHEQiuy7qzdmzSx1Tn8k18cCNYb3To4vbA",
  "key3": "5opmXGVM8VyzHS3x4xRJJdTEy3NxEV66k5Xk2qVa2pXDWqaa7gDTQ7uE95S4tr2p7S3bmQwj32JEUJrgPE2FSPTb",
  "key4": "4htTR53bDu3zDy3iAd6Jg2Kqp3bMHPXRrfWrnrt3W4UntsTtwGvrEze4fDKANMx7rXwS39hV7MJKzqX1DoYpCNns",
  "key5": "3gkPaLdkKi5v9taXRbMkrfNTXj4ZjdfMwAihZXhwniDrf9rJV6Vt7JV7Q9JFUFgvRsg5AE85i4d5dGhz1WQ9Rxbc",
  "key6": "32BEzzddhRn8VeL5MgFAgkrKEt8YDMaMxQQUn6w5tds6u4MhWw9TGcFSpiQGx4cqAZrDnmHSQnty8KNfHY8jUhJJ",
  "key7": "MEj6WCFXGX5qEzfieaDJ4oLb9NaqkqRBacBrMGeuMzZEviuAgPcfUscSCk4fWXWtevFDqTPzTY3seQciGd6g4uE",
  "key8": "2xK2YGso1X36mKWX3huuWYxABdt1PSgiPj8GA9CXGgxcjFphsKog3jKvL69B4AXRVUYJsuN6y7KhK8LJg5VrUEVD",
  "key9": "2LKrJ3HQLCeEeM5o3EKxsEJCmrMCtHn7Ycc8tAUng7oHcotK73u3eR8pEHWzNtBAD3hi7nF4LxotQy3P1p296xRC",
  "key10": "xaEGTxwV7cJiHwsNF9ScpBvqVsy9rC2vPGr5AmcwAyLDDiKrp7RPswoQF4K7KTwNb3aMo9TYXiXwa8Q1bG2n53e",
  "key11": "4EoFAh6L3fZ8J9hkWPmztJqUMTBMEZNJSdJitKc92dpgQaWFKsZjUXBHivEGG7Cy3M8jCYAyQVBVx7dvDxdMKafA",
  "key12": "femh3MRMjiqQdh9NW1v21CCzR8u9z1pZHdJ4XUbw4SWMjdKxLDY5iSh7mo6Te6U9R5VfCMkr8HBdcMnoyGYvpMB",
  "key13": "2s3Lss82M8bmchZoudswxRJnXxnCfeaPcMJLaTwm5fimTUE4z3V9pgj7uFCbMZviybjFjG1LAJmQAGLi6fUqvaEd",
  "key14": "3J8GPvvLopQ2QrYmrxND18yCFnCv6K7ab8JBe8HWLgaJxqotHLLSpiHUB7eeryuUgQgAxGwKs2VU8a2yPNn117ZR",
  "key15": "3D2jAAnaZVnPiV66BiGNh4Yq9tTaLUaSi8sF5GrzkWeHrbezAHa7tYftxeuahEAZWDz6GH9TgakcmMHxThtopgNx",
  "key16": "4kZUmShoneSqCRH1W2V1NQ2914MCFkUPk2Z57frHDFA4Bp8DBw63EDP9XwLHihuckYXifQLAxg2HaZgqB82VRJKz",
  "key17": "2P23h7bD3k6MRVF5TZT4Q4nsGbU8knR6RCovR1o8aZLhnm3QK7HE611KZuEKTmiVof5ohYjsaTpKchz75ZpxgR7X",
  "key18": "35bAaTk564d43BT83DpZPqYcFZLoZ9nMeeNuQbFb4fK7jvsYxpuV8RWDmEbN8n6dNSwkipSJ2kvx1vW7zHQFCvBd",
  "key19": "bhjvCe4XNVVDHZeXC3EqqcKgUT4ceiKQy9XWz5bxtMexvA8HMSvGheLcSpNxhqore6gPgJrm48im9yYErPHiyZr",
  "key20": "XT9vQEkLTevCiNbniWUZLeEVtjCLmHfe1qswphhsgEwz1ktcYBxbhvJAuxAV1rBH1byEjy8rUmfVGFWBiBQ28aY",
  "key21": "8jjEPsHysUDYutLyWb8hxW4YiUBnEjZnNZLdva5hj3LGNXy7WXRhviogEHT1E3JXTaRNzNY21tferKoPyw5Mesp",
  "key22": "55wwryS4XEK8KEiWz6uWa6iLrvX4reMcJrbX17Xro6hhrTztzbVwZPkKDkVtsdKQkL8uX3MEJe6V7AQpm3Ed5oTK",
  "key23": "4RtsdUcG7BAwbuRQmzXfA7iYs8zrntnNikwLWNjyLPw5mbFtbXz2eeY8a95C2VYzt95bZTcKbYMNakofe2c6Pq3E",
  "key24": "5yyUGXCa4TDi5DBi65hkU2GHVLY2Z77KuQwifW8aqogDJN5u6bQpHVm6gZkiG57supwYMTfJrCU2Q19emcgSEVPF",
  "key25": "3wYLZqMnNS2ABENYsH7zyj9rxCEhFZRxKuiMipcyhKQhpKyjdaED7q1EJQdKnbY3Ke1vBQtyELt4cqT67iBF5y2T",
  "key26": "4LJf8y9vuCw2Z7RSvGUNVjMewmzbbwNDnxxEGV8tpHonq1S918Bsr88RyrRfhrP73uMhs21rAKrKE2imWXhEGtbm",
  "key27": "2dcEKJJBu72eJRjFZy8sUaZxPXyEs6pTmRdGZRu9HdKu3s3yffpV5WCdgDnikTCSMHmdiR5zNcjpPPrrf3dWx1uc",
  "key28": "2joCo1phiG6YSBGTP34ecwU17ehmiEFuhgAWeD23p2id6hQnPSwdjDT3SFcg2ZNJKq75jW3bZANHGhAXuK3RqPC7",
  "key29": "4kAQL58BqtRuy5zRdm1xKyxZTiT5Pmyk5c3a7fduAyf46aG2uTKjNBKuSFESKBwMA1wwqkyPjYP4HgXmgU2G3tfN",
  "key30": "57hh4u1p2HpT4RLJMF3qhXHc8krFq3XVKeEeaH5W5YpkaTEyckps3yWKTMgEXAMzMzcV746z3Zkn3tPXAoWRcdGb",
  "key31": "4NvQ97yKGrFk4QLDWA9WMMaT2PHk52iXCXd7cMZVSfNNmk2iYFbDgb5qfnfTgXFJvePnE3nVt3knCZUuzGArQLe1",
  "key32": "4Na6ELxd1H1CMwM5xWHU1aYSuFXTSesc7FBGAXMyZVzgA7dUYFA544rppaPfZdp6YEA7dqnuMMDg6BToBRd3YcKN",
  "key33": "f4LkRMCy5PoZmDFKM83cKA4mAjcGiJCLHP1fgm6gSdBbqjbygYZ6PBQmCffaPGz9ovXR4Lk1fbUiRP5w7kP4ZQ5",
  "key34": "4tYa9yw6VD62wmhodDqxp8aXv4VF7hi6jyZgkqVMaAkiv9onfLKAxt3YzpYs1MBC86m9KvdMutAFqFFAxMFMMfT3",
  "key35": "3vtXKYDJyRy3pCeNWxCTYCrNb3rnJCds3f2idmpQiUSPBh1mNYK2XNqsoBLVBeqcfhpayjzjNdAuQTmhdAKnxb8t",
  "key36": "LjDfw2misQgYecSijFueZcbnYXAbfNArGuSvyPjEVQ7mDcgzFcyFYpyemoF9fFu9jrJYzghsWAQZvukucQ2inD9",
  "key37": "5Jjpk6YPyZa6xKT6U9Gw1Fzj9qgNSDpvWhfQ73k4kGYPRNJQNzVqShPdqsEgdnff6ppRGgDai3ad74ynwRjx3ETk",
  "key38": "3SzUivCjKFjKYWabxJSsMrvBMf2VwcTRB7kSFgU1C4ChGwyjgMzyWvCydgfatpJwHtMJncMQb84Ao8bDjrU4V3G5",
  "key39": "2nxy2FAKoMYYK3kJc7uZythWcKosFKa6rdqUDrgVt8DKWK2QthnBLDQXf5AYTH6sh2b22K1SasvFfuG8gmrPZJC4",
  "key40": "3D5Cjis1APjTwKTKuUtP3ZqsbbvsoUF6Xdu2m32sbLqDqebJmohxWAfdkxr31Az3FSysXos81XNKEPLsRzdWwN1C",
  "key41": "3jSpmDJtixdtQVJVEjjePzSKekk2HiAhhkUztiQY6qPBhp8LuKKHJMtj28Sa2oQsp3tqfLtY7dGAcDrdGDvFMDru",
  "key42": "4hm3Ap1cv8aMg45nKAodfrv2WKzbABGUoraP3q6NfsWrc9bgwiyZDbSYSNfVQpisL4N1CdRnGq57S5YSHsuKst9s",
  "key43": "5i5TZzWJbB3WvJikYd2STQ61dsXYQJFhBe3fDRQSshGFqDLRFVm9xqP95kuAp1ErnfZBBoe7x9jkLW9LJVQfp6Yn",
  "key44": "25MVgwnisSm8WDBKPV3s1EpBUZ5UKKoVfUTNcRJCvKc7M44SFMZRvXAXYzjeP8arMj9Te9ofHSBqvSGRoqJLvJ4d",
  "key45": "5Woz4TAGXYNmRpdDNJUKCLdzaNQAPAWPo95FkXrNuEFc81JyZqMfiVRUZCVK35JszPbQ1oNfqvsoXG7hc1g1hZYr",
  "key46": "2AHRV1jNFgNDDuuQbAAZNa7MggJ7wJw7hQHfBaXGXpsp2JZPojYvNXdBhqVNGuuAeR4MD8Cahd5iJDG53QueJ8Zx",
  "key47": "36zHqifmHmasUN6KF1bcuUYaNFVctTPnv7spcF1dFT6Cm9U1RPCXnSFT43LhdAgehEJVfhLBgSPT6eeT3x2hQcKj",
  "key48": "3sh3ia2C6mXCWWzfwwNzmnzXPFttSFXSuaTpbicaBSheacm3TLQKQtQQzBZkFpKY6CikmmXYeYRRDTMHGkw5HoRi",
  "key49": "35J7Zf3TfvLQNjP12EP7SvSQHzhE4vLuZzTHkSf4N99ZMZxGzzobdvD4ADxVoSprePB5VNz59kSfWNGU72CkEGGp"
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
