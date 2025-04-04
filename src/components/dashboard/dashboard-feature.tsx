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
    "5WknpdJ1L1qLsz2Ax9pftU8tdqFv2HhsCz75fo8PGKWtagih93HyC36djhc3tzczUrQdHoWEB58RpAYu7Cdhn7YF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8YDPBygTDCcJxPJUxR3BrpzpgDSX4Aj2WFL1ZQb6EmxWDgCJhJ1t2cQJsF6DbZJokUjQxCmuQrc32WcdyJvShfX",
  "key1": "2EFvM9S2txgo7kmVqDsoEzkdbRNGCdDA5WyoQX5N7wqdsouGQJUDUQRYKijGyhWjBgkynyhdLSA5pteUxKF5g5K7",
  "key2": "4xzzdL5rf9guQLmcfn1zumEx8hWaLaqRt4eszXAN9qZYjmp4kn2px5SdRxE5ctu4kTZqw3PAt4Yd3ZGkuVra5X3g",
  "key3": "3X3uqZZLQk2KK8GfTpwMAySKy9EbvVFhz4jL5BGAXV6xi91vatnGffMUY4HUAmwhUTTyjBoFW5SCC1CdEyHzfJJK",
  "key4": "4pTfKT8P44ZkauXGwgNhEREvH4Ngm5wxb73aQ2tSJBkE85wtySHGWagtTp5qEgMqr3zQNup7ztVLreUhLfZ7JH4K",
  "key5": "2DviFWYDuyALrLNWvMoaah8yduccPXVEwdD7YnruSrZVcEGuZn8rXXCeiRaYSrT8x44QrXrgs4KaykSPQnSfyhFL",
  "key6": "5SvEWgy5jgSaWHXwJuZbssRXbPbNF6bNHMgwq9Ups3cNVioDhwtPaau3MAx3MW5338dg9M3kAjsa8juswA3b1n5r",
  "key7": "4FHzn2LqpP5SLuSE3FMNxzE6qXFXsJS1gvi49XfswETLJge8JbjFHgKpHGtz9WtvqPaJpf8K59ZR7Qy9mknLYawV",
  "key8": "4MLhNmtVormkgGFsLdAaG1VSHicrnHyH3Hb9drU32Axwnkeu9pibGvtnijiSmjmgTUSBX78KxWSWjBfc8mHPmhoN",
  "key9": "37exHtUHcqUH9SkN4efZRSUMhhZuLfaeynssFsi8zwhiECYr8a53ZRxMAJkJUDXZVkrERKLkU1UCfgSkrgGBKy7C",
  "key10": "21EihwmxXAoKzn3gCCGWZhCXi3Sf644n7A72wzLBJU6m8WpSyewxiUjVw9rjaWCZfUKKfSdyMUWmtMbFbVQpXRR2",
  "key11": "5bx5FpWswNoJhWWjM1YX3cD8DvHywZcpPKd2jE64cJLjUPtqUmygYRFXfdAJ5KnE6HR9sjDFpWZCPBUmKcjqCzY",
  "key12": "47WP2RsfbaEdyNnZ9bXroMdvngzQExG1kYTQDpkhWPhMYvPshdw7VHyEufzWgGdERDL8K3YAzkQNqZNQsgRnCQet",
  "key13": "33bLNxUmBcP45t5Ys6t5P3e1x5fsjhiNQk8MdzFJWgmTDwKmPrbL2KEz2c7k3XrCA4kwtNADxPv6WozVvBkp6fEw",
  "key14": "4rPQDNjc8FtL6j4LXBoxHquDjw91XbhW7ut7B7LHM42rNcWrLLzHuPeZ6aUAsRipnZreVWjG7Ghb99Km1TwQnei8",
  "key15": "3VofNSBNcrthFraXq6uvoZG3VdtF8BtKfubzUrLN2mbpn8u5cHa7JcbmUWzLN3LCzmmZTVaZ11iMquLKf8RUfGPX",
  "key16": "2LhaxQrkZ6XzN6FrsgjkZH5VxetTZ1pjx6yJr1XGdXDar52jV6xmQKhsictKZ2cz6gbQU6rrqnftaUP2vWDg8gKT",
  "key17": "2t9fNDtzz5XpZqVgEAAWtgbSkd7c9KVpfWXe14FwJySm1jkG14sYEm7iFJ3AbrcU2cVySVZWSp9QGZs3kC1JaUox",
  "key18": "3fbJkRJTiyfYAZV2Bpj3s3uoceaohNefbQJSSgwxpHYgN6xQeiwmSoEABQcic8Cj4xQvkUNy77KboYPviqZyZ3Lz",
  "key19": "mCHxxUwfccPfoS1i4xPDLuD46c5oGenqwsUENARJU1tXBkEC8pcryg2R6CkfpEuFzbFFG19wkdh3vbKuMduMnx3",
  "key20": "2isaTCoJxSPwvaCjjAnchjumpXHrrRUft7mjc3csShCdsgSeECFYjveLWjfWxW47mT2LmExJ66a3d5rbHrck6QjZ",
  "key21": "2QE2Co1jzcysReAXoeU2yhvHNAYzKbqwfx2GNceZYsotMg2VNdwdrEkeKgPovupzg2od1aTn16sgLP8yXnCtZ839",
  "key22": "RR2sbzxzxu9mttmcLSUHnMeF6pe21tBuvGmthexFjZWwJDQ7p9gawxDsvzL9SaM3NBhTWbMtsdjws7fEKBPCcK5",
  "key23": "2ABU6VdztxB42ixHn2HrHrWrbLgS7VKK8gtAZgcWgjfeuPkurx2DxVUTGZXBhaGngw8NqBiFbgxsBXc6byq5rbeQ",
  "key24": "59pvLsLoU7Tv6KEA52kuxcuZb9VnwGGyFokAEGZBYzefomTPtQTuAQmeMwkACcPuqkpD8fqEXjQEVSVBpBhRVozQ",
  "key25": "2g5R8RhBi4JhLrVavdJyTSCwEhSNB1c2DfvoZkLeafNNQvBt1Rh3w8oM4UvBDuDEvvjUQPbfk4Xpxgv1JGAKawD4",
  "key26": "3Jta1HrXFjbru2ESdbwQ6QsGeoCrxU9DutKmQLfSyE7oiDK2oDUhxJfMANUCcf9p9yJVzBDFDHbPWCNJ24heBda2",
  "key27": "yhcA9G1rY3xuV5KewJ1eVfMkeqm5WPyzsNLHYXJ4xPEYdLH2Tz9pgg39QkUyJuR7r7oZLBQ8ouFJ5wzh5nPoj83",
  "key28": "5MmDGmN52gqScEBL2BdTq8tUVGK2wendVCdFC8kn1PMWVfQ3hCYnzyXpDHdaDwZhiNfirfNYJbQgWkBkqX7UQNRD",
  "key29": "8CU4ZRf6UbXpL6qWmv2mX7MERcnShthEWPVSp97Fj4PsiX2C8awJXzZohDdJPyjiwzgvTVZk9L2Vrf5v86ksbjA",
  "key30": "3pgfioCDn28Di5ejnePF93eBCkRYwGASduK52ZGBPAY4poAmWs5coqiKBaoUabzAPA7tXodaJFJH7JXamcbU4cco",
  "key31": "2CbKFJbxzXE87m6w51SVRcPcxiL7Ftjw6dibNmJywcP2s3hrRWC9722uAMHsEntxC3nL6y1cQreCBENZBrVMbk8R",
  "key32": "5pvPoyrzqxb6byd3jgd1dsEYXAeSyd8BXqpxTdh7GDwKRWL7ckw9QjSp6pvmjgH4rv68vsHmybkwSZTFe7wuhzfh",
  "key33": "5VHXwRHq2CuXZUafsX7Fx1wv7jaNXtQBZ1cAFas5H3d742k7FqgqCV9MXT7biFMmMSD5e6uk1DV2QxJNZtTDQ2jL",
  "key34": "2yfotvko7n73BDggyB9HojMtQUK7GkAkSRMaQ8eAED4JvE5A7iT7g7kCaFLjYRsbfMaeLTBed6dUXyY4HaYB6YkP",
  "key35": "4kMzLQmZGrii5EpSdq8zYAwQGWxBF9BnDCLyQ7mJi2YX5yncwKaGqWwfch37Vsbp8vvzeYDtyBycjKTPTcBnP6YA",
  "key36": "LjzvGtEjshouCDUHfd8mcYaovfnuiy4psTHrnTzBokueg7k6yZC9cz6wg9YP1Carcs7x6kmMkgy2Q7NDyJZ7e6Y",
  "key37": "47fopJNxjW4gXkE48FuZSEeaPUFpmPRLuTuVBBu5hPrsSHhcGsKSLQiMkHtY8Eb5887HKLwvWmYemY2RKRDL4JEB",
  "key38": "3SBw6LKzfmi2Ka68P3ueVrUGRfhS6FnNGSjR9oLriF1gjR3eyWZCtGV6rSjE73vS7fY2vynAZ9vpWDZhj1qvycNe",
  "key39": "R5rWfFZAS5hffpkv136p4zLUD3W6EiieNp7Ltt6gX11MAuDqeRtmVQxR8jaWyXokTVJuCBTQcj4s75xabV6DpYX",
  "key40": "4GyWyuGTVR8bWs7qnZhR86VC7pNU5dqDP5mk2rpBCXf5ZSrcyqzTxCHT3631SMiUGGnjXWZdMkz9yvvdwzWouBFb",
  "key41": "5MyrLkVuenSFrtys4aXAawFdLQvJt53hphxmjQwdCNveSNz2e1taFLvy24w4n2F3wnz3VBX2EtSCPCM4AJ5VCL7B",
  "key42": "4tCxqD8HWgqKG7duVYkLrssiJurxuKqFWzuXVJ2Xr4gpJDJqvJoWwhpPHaiRJVWt6UvmZHxfyzSYPi1bpiB8Q8Uc"
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
