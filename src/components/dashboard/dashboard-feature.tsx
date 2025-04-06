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
    "39peK3shVacGH6TbuPBrVVkvjevko5FGCx8XLnPVxJZgJdg56heQUkX4QqKVTXnuoWq2Lz1us36iJR8gnDxmCZ11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQSJGmz3qN6MVRrrF1TEVFu84Xi89bn27LDJARStHUz52GwzYM6xvqcSLd725xG2AA87URu9CBrd47aP22PHWes",
  "key1": "4XYQ3fGbT9dvSmjH4HHGQCJdD5p9Yj6usvosp4TDqutc69BqBXfdBTHK29G7y3WCknRgbneKNdJvrL8K8h1hqoJ1",
  "key2": "4inHsWnY5c6cY5Hv9Cww3tTEzp7iSmai8UtPJfnWm9YxjEXSNg1cRsv47byC64B71PYL38YZCS3ytMtBVGfuRDxL",
  "key3": "5iysJtgrfo3AjYP79mhTWAxKHo4GdrNjXjXWWaU2yL2cXfuE6Us4eknMnLuLiaSt59cxW5Usv9aWbp9DVCAghHpF",
  "key4": "5Kq8aiseswDZ4QbqEmQm2Q1izfWzJWJH1hi2fmT6JzCSWRxuwq6rTpTVsvYBYSqKxyfuqsfds8DhV2qxjEvnch83",
  "key5": "qRVsD4hbH5Gda5ACViA9b3zt879Y7X2DzmJwkUT96twNPB3TdiBDPW4w7L379cczU6EqNsATsrpVW223zjsvhAq",
  "key6": "2cXJDKc9Tss3vdD2XMPD2oJvnjQMXSRa5rSBHdVy9wwJYpS9bJUcEb4jEPhfzZurLBCYrMYSUCZ8VwxdCiyyKUrK",
  "key7": "sxNY6xcjas7Tdb522C6zbKkzo8ADSoJ1KgdpxL5YHBVkBYV1sS7YaT47BimJCbpBdZepEpKPwUNUnmSJBV1dP7K",
  "key8": "4bRJNjXxXDxgtoWfKzCL17Lh9ydvdC8XUVBaC1aKvCCxvjVmnsCEXWEJuvuiZL8kYyqB8bqBXV9WQ8UWETVvb94x",
  "key9": "3dhd2Vb6Sv2itNgyoAmyDpEJhLfsrfNZwmEXRBC7N99rd6nf88UmFVjFpZH3ATcwT1hpHShJUXeUQLCzBwWXLjD9",
  "key10": "4ohNGZ3CVYvf1McFFWLqQGzyfqwpyDgKe5te6nqQwzz9xZjQUg8mbxQGDGKCPgCoynAfBLSekSYXufjNsXKbFUqK",
  "key11": "3T5UtVCW4BGAVkD1UhwjsRA3r3WfVmj6GsxYR8h38XGzMspVhEvRLRLA6gF53tDhxciqkxQS86U1FQHD4aASRSbY",
  "key12": "3EvZz7wGwYnCFkGwta6kCZVKhqn2wsy1CJEFRnB5StXAVrhBi8MvXRDGMsFEf8ajp51feANLfrbVihLQrpiGURyd",
  "key13": "3aH1WyZgwPXbDNev6rcnr6EKeqb27Cr4wibogpqhRv7c4PHCrBS4QAZUAHRQmyL2GD2KL2fU9sNE35vNQHmpgQgz",
  "key14": "hs32mtjokXD2psC3wNc5XDSP5WxHHAWjtX8XEHFFVNZWUoX6uwFg31shnoi9MrYMEf314HrMXmKQ1LARDtFJo8T",
  "key15": "4AzLRWiDBkkozSCaCgsMSWFEa3r3orUAkhQoXWJg27pbx7FgrA8cehVeLe1akRM3gv1JP6me149DmMTx2159tu1X",
  "key16": "3Mkj7o4q5jitSsrsx5AwgARzmtmKJqEz2ADMJ4S6UUsT12MBdt3JRPGzjQuLpgshUZcQ3aqxCzLBWLF4frqa2Tia",
  "key17": "62y1Lz7aYxtySrJLAomAmsevpdfMV6vXrBHwq2DRcrBGLWgLet6bV9nuDUy5PUK5wUqVbL1XdpcZzGngBZp3yS7N",
  "key18": "4HxFoB9JXJJGWMWvyptfvV7DV2AYAiAA1pmxrMEc2stoxNUqffZqc6WuQVimBBKCGXoBQ18NWmv81B5rvo12ax8D",
  "key19": "2h7gNQSohec41ajyXh4DZhyB1NFV2WyEVXraBVnxyqjxiPym9DAyPpTHkQZahr2xbWNyFWphcRiH7ytkMnuo8jk8",
  "key20": "5s8fgeXaSFvQuqxr7sjpD4A6bReLC4jhBcYLM5W9LeK23Vzs8WjkBbyzPCp748u23RgUJN1smzkmJgGQC2Lwrpwi",
  "key21": "3r7VTK8GEdMGoyLo54sPquYjTZYQ6vbBQx7YzNxy5KyJKATv2gCuyTwQL4oGcTjdkHY1EbQknScwgvpBvmK8bmDi",
  "key22": "2SuxapHv12SWA5oab9r1H2w8gSr8eTmcQrKF7tNjYCwv1DGfd2NN1p6iw7WzuDRoQaEZG5WLNrddwFs7jJdhN6Cj",
  "key23": "3cW5RBJpimBVe7b1MyAJpFYFX5eEKa1yzXTTaefvygGvXtyUBXaxqhXfoh9vVEiqjNvrcsgyAFdd9S6Rff1LVrJ9",
  "key24": "4vA8cfbqrNpBgui4NDYvFmZmih2PtThxofB46tFy5LD8QuKSyUtVpdLPvGSDvb7iRE997k28Qv5yjUotD8i5rDqU",
  "key25": "5BxRcwYS96nVWZDDk9aNXTENd5vYA6a7opM9zMq49knXwZTpHjgNkw4M3v2oJ7i4RacLfEFuDdqaj4GvEywYKCTF",
  "key26": "2xZHYJhWcRjrp79Vs4GsfQP8FmV6hiLT2eDSuALYvjhnwAK7QWzKXEeDcYgHBdpGNqy4nkNGAsbUrQuzkUQj6fo9",
  "key27": "526RtcnxrmzKxifH6hoDNKUARLWjaZTqsxw6fcpVi6Zt9vBSfys6jsjiopYvTLs1oTZSQqgn6UB4Tgw2ztG6SzRi",
  "key28": "2U7tfUSy7g8Vg2fx9LbtBQYTXTmYeWrUoHC9gipHtpLJzRNe8RBQdjwr9NdBEvdZ2DgupmNtUC8cqXQfcpesMkw1",
  "key29": "472LU3KCA2ebm3qyqxAyq7JNYC6GAY4gX8C5X24rxJXkboooSdEQn6nYgdqDJHxSbWv6sJwUZjnWnmRkgJV8ghHA",
  "key30": "33Q3vou9FhsDwjmNK67gv1ZeHUixLM4wbQujS38etkfaxzqj87KgBiPScZ4CrGWx6ZGax7NmPZEuvM8gY8v1wmwF",
  "key31": "3k9Z5rdSuv3H8utgofg5aHWkvFvom74dwN6AxWQ3RgmtSr4m8v4TAPZeMSGNvWaLj2smT5ZHzp6kx91jpiSCHNzQ",
  "key32": "4YcXAv7Gc2NRN8y6oHACGLUCJgSvVCYQc81j1x4Th2f2ZaWMJGGFXPwPNACiezBQEC1KcnkHcEuYBZeWDCqjn9Qq",
  "key33": "2PtHEnyshe4sQJdXMwbPqRUKaU4JpuR9MeRCyEtm9fTYGqdQG8bhZadDAFgDhxWQqyMHKv3Sus9k7LxNwNa4QFbn",
  "key34": "bgNjnKKo426xQwVUEw2o2iyk7rQGizEiUAhYS8mKquXhUmQGVs5khYX18jz1rFUCCeNfXVf5xai1zZ4SJ44dbFz",
  "key35": "5oeeBqhQ9UmXGBqzjk2aDsHzt8GCoUpyzc1zoSQgo1beHH7z581zCaQmzMNvzFL4WwVpARBP64y9LLrnuGm9efGb",
  "key36": "63hcbTBKHoou5xWGCgApcTM3G6jxpmdF58VBRUwL2E2nN49HMLH4b846kEA8FxZ72RRTL9ZqTuynFNsRMdBAGZq2",
  "key37": "5tscF9a6pMNciDmWoKXugdAaQA9eNbKimyEBLDG1SyBzjxosMnuGu1LFJUHptwdufPgdvGRMRmS71DgSBoNRyuAT",
  "key38": "Yy1VTJrBSYtNNEmbJ1mpcQdMfyJvNKrhRdGoNxdtG45DJpMJ8R2XTNzcvMGWdi3fGRovKAaNGTPYVzVWDaGRuYk",
  "key39": "5QqrkwC8HggsD9b3tsXR1D21c6aUni6iAMogMMmm1gHTTtGLxch2ecEdCHx9VKP3XakxDjGZJnLYFm1gJn3c8YZo"
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
