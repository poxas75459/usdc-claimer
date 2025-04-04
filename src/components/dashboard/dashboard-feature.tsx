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
    "61sz5vjeqTNGqpuh4hSkN7GF3WgUKQarhCCYuZUU7iTPLfQiKMhm19eu8aGcCemArycqSGdCPdQb5msXUNDDu9wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3djp9nWDcJUkr2K2Xv9dyXdHGJCoKJk2t7FbfQzev56mDytiWpeLbHQWQZU4HwLWHFVMXYUm5mnP6jrfB91pxaoh",
  "key1": "3rKjDAePmS8uJvRWW2D6xcYTBNm9CdR79eThVMqCgVhi33wZZNuDnqe9Qwts3F6nCuocYpcek8NbGtrC29ZyHmX7",
  "key2": "RHKR1rQc6q8Dc5sMoLxRrdcgwsKcs6JN2hQSHZ6BcunSwH4tvf9J4zs4VJPWvsmkEbadpwKCjRLzVh47tXghhi9",
  "key3": "3VUoo3FVe7aqPpQRrAciGjphpHkjMZ6q6wgVS2u2oFxWqp8ZFkHpQZGC8ApTihWRxZ8wCJGLs89ixDoJL1P8EK6Y",
  "key4": "3oRCsCCgP5p4GnAz2PJjEFFAs7ZAuTrmLLxnmsAo8BCa1taSCrf2EuXLai3FN6Ek34pZTTcrWBqpofWJeMAVHzrj",
  "key5": "52U8t9HavVdXSYp2NT5m4PjgMBAvhmYuWPS8PxKNCwNxScfqHPNrCgRktGj6qo9qkS8zzhhYkdgpKX8XCkgfQSUE",
  "key6": "57K4SSSFDMvez9qR6V8TmkQSy9Fb6tm7uTnfDkcf8FyCnYWKxv8B4JETYSUwWidash7haUyeDuPNunu39qVnQBRA",
  "key7": "4ZkMw1hvQgKv4zWv9jJNoS4WQxf8v7gpzFSFSjwN3Cs2trjWgYmCJMqZ3Sm248rP2h6UP2UJrLEnfcASndNHaemT",
  "key8": "3Lt3D8sjqyL2dbCJ2cB34Tbhexg6f58GvD8cJgzcC6MhiH6v2cdjwS4bYcdv3xxyEACy4p4F2iuGasTgv8WZCu89",
  "key9": "658V91LZBSbx6TNZRZgoshyn2xXbr95WTyM67wmL6v3xtQ4o25PZuEANTmAvvT8yqfQmAwpWw5pb3W1o8WFE5TVM",
  "key10": "4a3zebEbsFFvyGBpUtpVbQwWkpQVro9CrSKGtCmK7gdishgq98ASXcmyDdNWUheu67FPwkauX9eoczuRvxgyy665",
  "key11": "4eKC7MckCfrEbQWAFkdHfkQWivtBPnGsHitUMG71MqEX9f58Cd2i1FzVzcbMQxfYe6LYZEmNb2LBBuPpNm6h7rzk",
  "key12": "4DodnkKrqa9v5EN1ZBUo4qxj2vuCECqQGGSnwENry63fLnuZAWGoT5ufX41ZR25k8NSYzMAzPimGT2mmsKEZzJDf",
  "key13": "Cq7RYdcc9CSf3Pa6VQeWaFFHKYhmGLT4oSw3mADrcvyT8erJyB6oDRceVeRqHaz77qXwqjyRhqyhUZb4Y9hQ8sz",
  "key14": "61caxgEtuiYqtmZoWGA8nya3d3sCjUb6x3cptBpgLhykv5Ub6wQrkViLFwUT1yfsq32ZtyvWAL3wtwtL7c1BwWYn",
  "key15": "5Zrpsy9okph8Vmaqr4m84LsMmd2kLLrZRHoReepbvjAD5WLLs2LCZ8xNzNFSohM64GvkVKJycoGjUy4pVQpVF4qm",
  "key16": "kUykhKKb7wQ2L1KNZEur3UkrM5s9Hhk7S7bDCtSceMJaKZdCF8de9Qk3b1Ppvv16kQuKbUvzv3tHm8UybcZNXbH",
  "key17": "5R45Ew62HqnkjPonWY8EbFg1DBGKUDuyT8BtyJSEWuLeUMMDTR2MMDiA9hAyWezy3BcvtWmYpQUdY655LPEJS2z5",
  "key18": "37AR3ckGkmHw6W5ZyoECrQ68SoELXyiom9kCdZQeaSYWZtpd2hHcPUf89weBVk4R4RxKyJGfdFpHVbMwRMmZtXS9",
  "key19": "4wAyzN8fFM7oKuJedbTVqvMuWUjvR92TTnzryXK6nEsiXxfYvPqnyG94FvFXHSmS76fEWFyQcSiWMv8nmtNzZTEu",
  "key20": "2o9bTminTEKZH9aFxdiJApLoTQzvDAMDCHGFz1gX287pLMEbpT7B7FFVaXj5nrVhR6KbmzzsUkTBnTjN2UXEckcV",
  "key21": "1LY4QPqCgoZftooMFoRCfJD2FCyien59oifWyEkoGFoRmqUSk5ZUS1tBLhhP9YyQpkWDUkyd7KjoCdeupbs2iNj",
  "key22": "4UAuGW9zL9WGuMwVKrrYNPWN3vv7cs8YoNmKQRXVEFADMxEAbP2627sATu4sKM2qtd7yg4mgKFjGGTK14XMej2NB",
  "key23": "3hPB2DEakDn5YzLKsWQo6KRYHSGYduF8y6j2EC9rE7ZQBeYbeJzpvDVnAUU5Pey1X6FbZ86Tf1CGMgcQMwsZ8es1",
  "key24": "qisFUQk2S2XJsoAXCikz1XRJ8VSP2ienZ7tYzu85HQEZuXSJyvTXP8TwcJMm15QXLVFCYzGdDUFtPzWcjDoGmmR",
  "key25": "A75ruwiE2kubdhdsPa9RvfSkgWiWadgC7asBG2nos7JSAYTo4Tr1BwkMuqxAfsz99mML5D6EZQEkCKB5XHZMQNY",
  "key26": "3pG1supmvpEcKZjqQmJq6DvSxabrgqGxCg5iqnW8JAA2XVL1kgBxiEh21BCeTu3YdejJ2dYpSuWhSvj1o9dyi7XN",
  "key27": "3Fh1SLgVtkJTZ55pLUq4p8SB727fJxc36H2iDgR8BRbvDEcgA1x1AF2HL4yyjV4hZd3yv18vyrzASawG3wD9oher",
  "key28": "3VXu6DKeqQZPG1SArBfeFuqGoeWZuzy9vV9WHhkujymHDxAa9kEAFAvzTSS524XgxPmNrr4NJvKMmLv9C4Y5VaCx",
  "key29": "4jX2TdyQdYAwpPq5AJ7o61Vv23hJjFJGk8A2rBMfPGs8pDmyHxZp6mY3vnUvAgMAk8VyBpwB2dnmxxBiCy5TvimK",
  "key30": "46qRiykfVhK3yRCnB66Cuhdt5uusNBCvBa8j1HE7WUBk6q62x9MF3xBRofThPCHDfFLiyrUs6r59utjTuUi95qmQ",
  "key31": "5kCLP2fuutkqennakPR7Lp27yAtVpFuGEsaiR4Xc6XsPaCFek5H8gKwU337mTRe2b69ZbTGf8HrwbUcq1n8MHzPM",
  "key32": "Bves7zHCHmSER9E3yKNoMCXp3iLCtrYkVcM3vYYDkHzRR2fWPX5bVGcaMchxG5spUaVgrVjGrijTSgbmV6RUsRS",
  "key33": "2YznyA1Ns3AzyyTMPbXEPFpf5wMXDZvVkqE6V1XHwxyB3rMufnVYR1zg9JJA6CAZCKv4swJ5ZmEbeazwFswaxsHf",
  "key34": "4Q214cK7zXUt1L1xXFwuXT8A7N8M2F1g91x7UtcDHCN2UknvAYkVH98nJgmhb1qieWcghU35xdVNoeXeEAYywRWU",
  "key35": "48Mg2ZaTig3QbN8VG6Fej7TVyS1UognNYBq8KLA12G732C3pzKFJc3Ghg7tyeqS8TvejjRaPMYyC6JDw4YziybqH",
  "key36": "398tMETwZh1asKerN9VdnVaQbKTkbda6P5yTSt7seX6NQkngdWADy5Er9M42pzruXBrMPx7p5t2CLZugRXSYSmca",
  "key37": "3vfjvmZcbMmwnyL4yBdjjJb6osB1S56ucZu1FW9CH4G8pwg3Dn6q98g57fAM5BUoNdh1MEzjuxZdVFYxu3RGy8in"
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
