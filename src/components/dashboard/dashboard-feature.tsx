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
    "2FktsieCwcmyddBx1KyqMtmKG7An8LH3CEtgX6kcGcwDbHYXFKZFpC2obt3numvjHsnx9oJRBw5z3GKjZpVpZM2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KS7uPum45Q4X9E5Nv8xuDv7DUR6GfsqJ2J3pwz6LY9gDbobVr9ADiLvDDHRJH9L1NZvFriUEYcqbXuS9jJo98N7",
  "key1": "64gCTs7v6ex8p7V7osLCcc3SFBSYiWLjpPEubrVGPx7jnGzkz5UkuLVwKCYuRATtNBstbXFJQDZ1MkyQfDkGSj4X",
  "key2": "26eiutAMFU7Gi5twbYfzLUdY39ZK6M13M37iQk6UC96M9Mk94YntoqX8rLEC9WuN22w3UJ8MoraYZRdrDQ9VcH99",
  "key3": "5rc2NkvFHnuJrrjwW5LSWytCFPo5Q6Ak3sEjNetb4tQSrhXYgnKuNLJDXkVasqxS2TcitjDswqk2TULUMLhoxfsz",
  "key4": "5JJrz2DuW21HUNNdMVvK75LYgiCrYKxGQitMfu6MDdbrC4sjLQ9beAX6KCL8TqzNzsKQMtW6i6fKhvCXySMPwBgk",
  "key5": "S9KZ8VeTBzKCzx3oGoP1XUcZssmkp22Px8pVNie7EjFyUu6mV69mNUxiVoDWHHQLP4EwUC2HtpJyQ73gqnDGz8C",
  "key6": "Ven8vovzDqDiQxxU4UkJWGmZnyy3oq6htavj5dmEyE8gr4zFdYoHmXFrWsDg5iQWdCgHhJ9VXVFYRqYMXaCbgGa",
  "key7": "4veZ6e4izRkQtP5jagXhxp2rFLkJRfRRPuwRCXDjMiTppbEu1Fjg7rR4Z4UkVLrxE5A2QtdhxY2qeucKNTFAHckP",
  "key8": "66FdiouWs2nFV35fYbX9ezyscxpmsdosd1KwqBkPtzCGsLs3Jz947FQr2prgKMUan8yQQPWzDzGndpPjR1GWHHB5",
  "key9": "4ZxLFoQigfMzCUa8CTn6Wu6oCj2MV4aqNgZWxUGF7aWN6cJLegmxPjZVei3ahcPjpDXDQVQZ5kQQ4PUV2emmgK85",
  "key10": "QMYJ5a9hDnUWZkrfZP3htL16MSG3GUtJXTz9G17TcRNU7BuJu4BX8mj485hDmQVXiLntiQhedAYpU1zNgS7dkEZ",
  "key11": "5TL4upPDbawEtun2uPLFpp5r2FUwuSiX5sFKRtBcfv5BJkTPKtFCMhSVEnYrgPx2KHaq32WwKGqrHJFoE3DASkkL",
  "key12": "3S9B8a8hXafkQdbUmK96NhL39JjYsqCSPXouyxokCnQzcs1nLcaTYGtxBweuXVvzWNqxyvHVGMPuYZ4QvR7ap6NS",
  "key13": "4bL1zYnN6HhY29cPt5ADJhFGsPDbn9rzffNZvLG4C4HkKCLbuNXA3WsCkD2KcVK3jwMbU9XqDhtHY7jtmfMBpkyj",
  "key14": "2QAyBjxJYPRxVnmzRwzKYecrjd87GT7KmR38maoXmrBDP9pyV9CqfbQq91FYQgD7AzNhayQcENPhr65r99Pxz9BY",
  "key15": "2C63J6e1XkonWdL7t3hytQS1g6mQt5rpkJinJ2b1NsEdb8q4knBWQ4w7kcsQSK35962ZrxeAK7WVvTMh2J5pG45z",
  "key16": "47VrniLTJ89eG9WLFUxYGGj7eRoAPj7ovD1FAUo8VLz9dpfbmSoQShEyCuMatEBGYt4CjgQnDdbxUdB51bgxmcrq",
  "key17": "4rvWg4adtyqdwXkehKDc2dwjq64E7Z2fdCnbDUGjeSyq772SGY3iLxd8aUeBPGCjGqC48Vgjs67EHLJLCQmaSDE8",
  "key18": "2bXcqX8Cd3SbqDwj1JsikMRsJL4dNzNykHPm59aewJYwFW13EVJDn73rKj6JtwenBnS15CLBSStRtwUr8kahXaVo",
  "key19": "4v7aqU9foDQUvk6YvBC7yeLBUqcSJNJruVReUNzfkwqMRd8TFvGehdWAsC4C5xipDdNpL56uYdJHtvqUNyn2V1Lb",
  "key20": "4i61CrLYF91xDgYxS3GvytGR4rKckg9jUrCaKXdGKs1b4wjnboz65XbAtaShEV9J4JzE95u8wPqq5P3F8NYQAbfF",
  "key21": "51oY2howL1dpYBxKSUT4BE2r7aQ1dPRajCf4QaxgKbBjr9WrRsU53zvKd6DaV3oPQwWqRaEXvN1QwUJF7231iPeW",
  "key22": "YayVnPPh3GdtX2Fn3WPu3TUjN1oLgAhXeM2oVt5rE1NrAok96AeimKvttFdqJxCj9eDuejYP6uGX7aGGZc17ZfZ",
  "key23": "GywYbKzfnHKQLDDeeSqqyHeFvQkcW4cbBwZyC6J8e9uaRbjrsYzxiYSQkwKTcYHBnhcUieyot2fHeTPwCJkD6R2",
  "key24": "4hc48da23gZamUZb2FiikdM5MrSeDpBsQNSkY5E7dbpYoWzfCGZBBRFRwisNDscVQvTkD3d1Cq8FudE2WKurwx66",
  "key25": "mMjaBKsaGBHMNM1RBqHKgjQrGzagv7ai9zSRefKnxdbLoZ2EZcqen18ZvjB6skPRVGr9ZVGneFxunuHuQtCofvu",
  "key26": "4f9DEWWZydnLCtCCmTnwDDsa7zdyfhqb7PoBcMU2UFFSEQtPbExXJcdYiL9558RkY3QFciDwEzzukFoaGqmHXeYC",
  "key27": "3YGhc1TUc156wjaYSyv3aNovT8Q49p8rdWacx6911MJJ4hCX5hed2wYKDjq2uVsykZVmGwMHi9N6wNE56p2xrze5",
  "key28": "zcGrE1hViA7P69dqeijzT9aHSX3A7hN2s1dezbFnSr59ggpLunma7HRNQCjcUTNTQY1t1xo3EgovSzfKgkJMoBW",
  "key29": "3hXuWqWyezpL6gw1fXgqVz5f37APKqKNdqxEpdBTrYTKPut7xApp5V7Nr3nuNz6UBgwRazaVHeGmqAn4F8d45esX",
  "key30": "42NMSb9KwppkFgKnqfx15iQ9VFSnmrzR2woJQwVk1morqiqe3aT89A8zkdRXYaEDbh417TiD5zWtCkNzUuVWrVH8",
  "key31": "4vnKsyUVPzBdC9oUnkseTCy9uqazd7jQ35Rd4ZnJcgBMuL1cMz4XN5rGe7yoaWCQcKSFp31DsifoSqKDWrFdbK4K",
  "key32": "3rJQoH2wedpA4F6izowo2RTJAWFsBxrTL6cgfH2ijoesfZP1BahfktEYJaXC1srWtkk95jUNqtHgcfYZ31JK5Mmp",
  "key33": "QhE2GorJifnBHs7yV6CetibGRdYv2u1Qkvq1YCKQaoLHknykwYUShfTjQrnBPFLuWAfKpY9e9hvkeTwtv4yPofC",
  "key34": "5dozJHSGHxoPoCFnpKt3ZoPCE5TEELxjqfMcBB3NpDTaaZWdVSWrazPezJxkS14uKA3HqPPfUxaEQuMkLgDkxqHh",
  "key35": "4UvVDPkLCyUPxxdzBvDFcswtJJbqLUPVhedyiD5erdQtJnSZUxjy8KTofqqHyBFN6emYBVQQWN8byhGCxqPTZ33P",
  "key36": "5pnzMtxnSgyfsrMvRMgea4jk5eNuNXCY8K83SAV1nMwXJpyJhC8Fxs4yKvhRyBAF2wstrnpDe2jPkK8tsonTPXrp",
  "key37": "5Yjtj2QadN1UB1d39b2fmpX9i7rg1maptwpbzwKj4dPyXwCK3rAWhUx1Hm4pFVDLET66bgQnhBFSEXdKFUscC3jr",
  "key38": "29EnJ7RPjbxm39YxFvZinckeK4tQShvWctVNTDDtEGWEaXsWSQDcCg6auqikwdCiFNdubottPSDLYZNsHBfnt8NW",
  "key39": "4P28LktEEyEgLcLDN6i2Hu4osHfbFEo2CssqY5NXPkR6guVcAr6eAwEzjopbSdKFc9rzswSorafAJrp94rt8Lcgp",
  "key40": "2WH79CQMPtViP18BMYkMemgsPB1Aqc6NyB89KTH5PQXaodUeQoBdVtKswN6jkQcZLU4iwGDL7ytKexynTBCcPSCR",
  "key41": "4ajBH8FQuAdQhShDNcMppydCgmcF7jrrEYy3LRVyjndtG2BF7FMLYwPBVxHsfmeR2PvxtRJWVaJHLBpubGhSZic5",
  "key42": "2c7RZnzFHXdmwu5hSr6GpiMMLBR4eapMy9kmprLCq2RpKUUvYAhK1ncPLiHKg2tA2E93FRb5CXQxQWQ7eoiF2q5T",
  "key43": "3JcYAEiY6LAmq5zWqhtnU7a8FnYh9RYy6vZ2J8KZgZShCJA9Hq8mMAHkCGSitNfyty9sASE2zkSC89oyVTteHgH7"
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
