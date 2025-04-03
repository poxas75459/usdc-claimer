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
    "3jzkA497iS7bCGqzFsmE5g4QWJ8bWviHCiR77P1Qc3tuhXvFvpSt7rMXDX7NsvJ3H1jmUxVkb3PAvRbZ23vX8FxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqrhX58vB5xWDdA6SLrKdAymZ1RYXSRBn46DGG5ZUF7SFLwbzxTLK1K6tJJAib2nvhxzP3GQdFgddAczssu8bRN",
  "key1": "515ekCJSjkZF9CKY2Ld6YdwTiWWCaZWxfqAQcreVKi8Z47sSg3LP3CB78ETLasWL49C7TomGnE9jjXX4UnQTVryt",
  "key2": "4kg7zDdfAyW4tp38JkSAqm4sHXE3Zj7Jwv7uYJ5XNf58dBZnGG99FDiAqKFAxejt3Hb8dgt2YtZhz6CcHq2jE4nx",
  "key3": "1d3rGDv53dK6XkkhjQZZNwHofnBcKE85ZGtYUMCUQ5yVhwx2YAtgrFp98XrUyJsUfjDBPXCAEtpa9Jx8KL6BGHD",
  "key4": "4kcPVgG4m5RMzVSZkxezE74sgtoF6PJeLCmszFSwqn3GtUVFv3p8hEXCgRW4URFTYJm1zxkmvQvvoBW3SFNaCw5R",
  "key5": "M6RhwWnBHK4bfZqT564KmwSjyW9T8SSHf8ebUfjQgKMKpwgv4pvRmTHFvbhZLzFaaWubdzT6HLaFmU56ff4FpY6",
  "key6": "4Ty3sNCvZFKbzC4o4KeSqELvcbqrWdWT8fxThUqsdoMLEbm8B2qLFVXkRZoPNa8nkUtNTaedxEew4nRK8rLvLnqe",
  "key7": "jCVMDGV121tP11KGLUEs7t8s7HFEMQF3LfdUX9cLj4z5nrQm9a4MWRxpYSYumvupmhHLmpNQw2BW3nqDW3LQXnx",
  "key8": "2FnpqwajCREwAmQvv6xMUFSjWw5LjtKyQw3ckMjQXZjxFJNuwDvYtDp47ieNnyseqtEEFrNgjHeKVRaCH39mSasA",
  "key9": "2EWq2he7gzo8qwY7YBb4JwXmiovnK6NM58891kaijy3b8osvUTwPeUisBGxQNCWaK4iqNS58wFfBuNhc2QPUu382",
  "key10": "4QESjvVnyVxsCyAXBaD1MTiddZH8Mv1eq4axXq3BvxiQCfzETZTbi68XEvCB6xnPa6NagjqCVsUGbpKhpzZ9GUMA",
  "key11": "5WvhaNTyam7mGQkM21iG8eXW9KCVwnQcJT5p7SAkRcfhJRxbgiJTFNSeGXFLz4oKXEodVFmxdL6sZi1z3cPZrWgq",
  "key12": "8wFHjdzdF4P7Hxw8KoNMjciZFMpy8xr5G2ARaSZfwUCgjN3CRUE8bKPytYsuv2s4y8axZmGWBwfNhbgQTZCYAsb",
  "key13": "6jVQM7rXYPAL4vddMyWgW4dxCsx4zdZFKKkCBnpnmbYaqa8UaS99wEyqrb29d9TKCu9da6M9zLJYvnBxRVv6fE5",
  "key14": "X4bUSZMsPWMTBWQzrGXVMCS4CJM5hCnyJQ1Zt4w9vKpkB7fAAZfMTsLGySoM2SGAzDETeX7Smttbky1yua1tGTw",
  "key15": "36bzGSs84VFyYJGW8HJfw7gok1EMEEeL71ydSBztDS75UuWPHR7eYYJxgFfuKqCXexwWyHBJYTHVcFdUZjmtuTC3",
  "key16": "37AUQEoeJxGaNeVwp389p6tRRrzzNMnr5JqJ8EoUUSjxeYoq9zdSDtduZbGeoxPL944MPmXmZptLEDK1LUJSNkTv",
  "key17": "5bJCPFywg4Vf91Sii6EVpSfNpG8un7ew1vavnUtYhLoR1erFjTeKb34Mx28mVBGnX53kTJ5M1RbJsqfySVp5BudG",
  "key18": "2dqpWFXPkWGLymtxpky1osrgxBquoNTC5DDi8ubq3FMVRakHzC9C5FdZ33TZwj88yAYVzjRr6Mg3feQgymncUCrt",
  "key19": "3tbfV2fybA5JCcxFyYBbCHyY2VCPKcpmYmM3WMgHpbh87Ey4CnbvwHGwZtjMcmhKjuRXB52sDEVie6m5agwy4dqr",
  "key20": "4W3Focv9qN5RjdxQnYRcUmHYLFXR93wSyD8EobTZkqen4eSe9nzqPb438jCEJJZAEYk8WjhhWpjD5uoreqPCK6in",
  "key21": "42B7mgvmaG2MQwisU5urjLCENRBoXuv9qeaoDShFfJnZpZLkpvbtXedhuEvK5GvYs22tJscwGwWMepU6wCxmsvNN",
  "key22": "3pduSs1PmN7vxHwgbXDgMDvX2JMTS1t6KtSRBM7VD1tLKNJBsrJQh9D4sznugTUy9XiPjKTn5QFKX2Bypo4WFXSh",
  "key23": "4smR9Shza8rJcGhRV5d3Tm2Dnz5G1cepFd3aFxTAGxsjzpLskQxzTpCHEMZPgxQHLnZmmSe2MeHSiaHoqzMS3UTn",
  "key24": "5UsTUVmaTKwrTh6sa5uFz98Ef3yXoHFT7xEKibHd8mnrhNVEZK2siXcZWtkq7P3VL5oA44dgEMnUX5NJXr7bFGDW",
  "key25": "5Wm6V7F8XtweSnoxatza8kd9U4D9qM1HNPDmbcq5MLzpjcfrct8Gff2FeAfRXxznRTdZwtAJe9Zuv53wEKWewcK8",
  "key26": "5kpvNHy3Arr2EbVixib2p1knj8mat8J9yRj4M1WMn8XwzgHwVcc3jiAWJUTHqSd6xspxSQq6shwzR18LuDfnBg9x",
  "key27": "5xFdJkJdFnEh255uZfnSgKxV69PoR2UWMcL9gito8D3JdJW8sWFHn5KitJi8KB3ChURTYuwq4rhRk1kzytfhk7M",
  "key28": "26KJkiB4pVCQzrL1sUuPLBSD6WgNpihLcsxUPYmkcVsCNXNDeydEXBvf1AwSdUtSb2HfdTSEs7gXC88jNEGCMHPv",
  "key29": "m9xMHv76HYy7CfoKZrNdT4RrmPKDVkpvSYZRfgVwSKPfG8qgH9nuEUycWDDdZfajLwRw473xxoV2Hp4XSSukZXa",
  "key30": "5MVzGW8DoGY5QELfCa9mtXucaVRHSia9F4zHHkJ7ZtpcFoUiuD8Ea1uXi1FY1KK1WF3YBwU4aSVBtNy8gPgaKEg5",
  "key31": "3M3Mx8LxDiwhUwPiyD8Zv4jfK2hNDuzYJEwaKzKapdgpr2ABV26ejHEC22YPwyuCi3qVKczPbGYa4mP6KB6EfCKg",
  "key32": "4HdESjmJvFbgbWy49cqQVtXe6ookCQgT8aUqAwK5s6NTMxcSPbYWg3oQ2L2E3t3xKw8ScjmZXhjJ7W6brrsAGubT",
  "key33": "46pGVgFK7KYzBQaovatTMoJX6S212L9f8xVoRgJUnodfSz5pDN5uWwPQaorhZGWnFFyd7CdQxeAUADji6r1uYjyp",
  "key34": "2hyHaNbrggxXga1fKfi7jieiXT7UXcH82A8KxQKJRmSUvMfMnpZPvvVXipmg6ZmSL2iuGFKyaG1byWxdxV5eATgZ",
  "key35": "5ycU2CFyKLoxksYjn9M1qSpWKNgSgz2qQ2n1eMnrLn8nDMPjQsc8bY1yvTKH1tZSBWFDSiGTqUuUyFZ8YHcr97LS",
  "key36": "4uaKsUxtPvwe1vQrNumZF6uGDmgR7HB5HVAvxShSfTzUfcocDkN9QdDVbctZ4KLWxnvz2gNSRdLjkL2n4np43dMk",
  "key37": "4sghxvz2HWvEVrUQhKnLp4A6djqqraSgKuKBkRmMn93z5SPVRyCdijC2uKpdvP19WwTXMXjMMYqWjuztPiSdUkAw",
  "key38": "o9rhj94c6f8sH6QRGrRKmHs7E3J3oAba9bzRYEz6ABHjuHVRMn4mbu66r8nCMircBbocL6gQZR74MRXr5drBAZZ",
  "key39": "5JrLdjAmPXqZkyw7SVvK5FyNnrMDSYyT7ZEk3L3VJCpMhWphHXaqPRCuerxDuehiNYwgpkmNgDgZiK7X21TRrYQe",
  "key40": "59QrBzjytTndvXM5DjJyk7ADywg6hU4jdfJgW4z5wDqjnGEJFdJAUEERzt7CRYDLDhUQ6t5wFC7k3B6aJ1j8gcPM",
  "key41": "3zz7LL8XgyAJMTnTEtZRxENEivmE891zQmFRe5ZBK3Zpv5bSvdVkdN7tEPoYDCEWqRmG4JPev7BdVTZiP52Xt8dT",
  "key42": "2dSy9791eKQ9Nu6fLJ1nkxh1r3XCcwXSkzoNJpUxeBM8hXy1sDxDJsBWL3b6P9GcLNNP3DxMWkF8NxR5wR5UACYa",
  "key43": "3TvgR1MGXfHa6vhiDMHmDhjWFwVCa4CEwQS8gBxFzctV3PouowpYqR8qoygK44vd9NaLfxMHmGceSoZkuHBFSuJa",
  "key44": "5nU6xFMYb4xmJNRbdWaxPs64oCXSjmr6msF9gP4hpevsjftPG25xwaBwZYE2BBSSj2hjiuNZMibAyWnuGzf8YnUn",
  "key45": "2PJsbC73q52H9xJHS9LfEVLfV4fUpvcPbLZngwCwBaGVHA54BidLkkioCzEeFUC2REwopsyW5baA5bD6261fGQov",
  "key46": "3edBY4b13goscroDUZ6UAUj2LXdWys1it5ichr7oXMjNVxAiZiT2Whq4e3SRD58zeogmUae63RBEk6U7nyVbsPbC",
  "key47": "3kfRsXUqdQNqAc2p9fcgy1wiCf7KVabKsSmEDiotyALoh1zrDVrZsBQ6PmbhmBwBX3KNgyaLrEVxBMhns7S7ZCMu",
  "key48": "4Fzb4kCxXnnR55vFW5eyrN6QX73DtTCymc2akQnz4iQpE2nYWL8J7mcr4G4JkMoPbyUN669JbQtcALGWXAXoErrc",
  "key49": "5sqsA8kRoSrpEMNJNmCDzuCyzkxhfeUMYZ4gEPqhSFjKv4oXSC2VcKaqqT3uYkWqGGXcFLRDXHrEDU5RKbxzTisD"
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
