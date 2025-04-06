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
    "5AWTQbe6geHBDj2rmgDs4S8DLgWMJ4buiueXithBKqPpkpUFowjugqc65JEVAx8PjvFnWo5Kf7V7K3Pb4SdYaWNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NfYops6Jeb95zNvDH2qXdvHnsS5wEQKc1ESziwMiftdvYifBoEAu6D1Lb5Hedoq1hv1NamVSkUSndR3BccUsq1V",
  "key1": "5BDbjYHufp8cD5vax4941niUADfS8jKBLj1Hc96yVit13NQrkokUqgH4VtFfsMzeiXxUohrmoKgHyLUMSLWXA6Wv",
  "key2": "1285ytoji7Xkb7Fs4qkX4hpu2qm1BvjcXn8HgmWQstgCuLgRLbbRUX6ByFYQExmzkcQqAyRQX15KW9AQ9Lgmhs1q",
  "key3": "4CREsBP8TEpvP7YfUfxSarJ9xcQ3P6aEjyJGsnN91iUpSJZ3DFmE32F2ewH7LmUTtP2LuyFSGqHKR3QrsR674fiS",
  "key4": "4h86GjGGwciox1bPtmdf78Gazj9ziWHcHkvP7VjxzxPhPazndruEvmt5NFXNxsiTd9Gte4pfoPiRAcHwTjdA3zei",
  "key5": "2qoyPudHB3ehfky49W9iSXQjJ2r8mVtHn6cao3LYssTckhwZD6A7dy5Z8GEH3pGZcN3pVFmCvr3WKj38pBymMzHF",
  "key6": "5f4wkAv4yTBTDUjWja7uZArgVPqhxgE6zbX8qHXW8YdChzKxVvcBbHm4fTvDpN64cnUie68Aif4XGqYV4Cqh15XB",
  "key7": "3JQ293AV5UHN42af4mzM8WvVP5y16ooP5jNj8GQSXy1ZbvLWvQw3XesaN5nDwnBXXraJ6iuXuCpUcqAZfPcZxWST",
  "key8": "5aoxVmec1FiN3sEUGCkoMJMkwBZvcDLGugPzwZagQZWb2E9HCuVLXzQttnC9r9qnQ4XcQTPBdSn3M8DDgcu345xo",
  "key9": "3kbp9cNMDLNsuSBDXWGq6p8sRva2qvkeo6s46ihGC5ayhx3f6FUWmrXt32Jd419iFjwSvdFRBqYPKjffxd9H2FBy",
  "key10": "5rbVq1jwFikqDPZeihAS2wAvbBBmMXEgyYGzpS54fusQpTsavLgUMrLeSP7vu556QrmKcwCU81EFc6wmnT6AZzCr",
  "key11": "2zf3sLG2dXgoDmuwWprXxDbJdnbBfFA1TAUPeW1knWLp1j5tL5NdUH8Ew7qExcFy73cDDNbLfsURuZCwd4PuD868",
  "key12": "N7aMxevV23uei9GCxUfTeKfeXCUYgwqCArUHkrCbkBBr1KTXzh9KiNv6AZNghe3xUP3KNmvrfrnfYY3PRWKZez5",
  "key13": "4CEzWgc44rwd3wqJzvTeKArqLDyL2rXcbjKVZfbfiLQH13jipDC7EeiFXyyZRDefkSJPGmpEF7am5bhGXDgwZ1y8",
  "key14": "3Bs6Na6iwRUb7gUAgHhGixiwR7dVLXeWquX6oGtrrSzsg5NPm3jBeRm1qt96dhastpVUSLHrsm5Nc8hteEwZNt5o",
  "key15": "3gXriy6qHixm21VavTTwt3CSMFFoA3G3xoNjY6RzNBXkLQUfY4PZoqAq6XK91ThQsMV5jwkRaJ11hqwQ68ZMTBS8",
  "key16": "347iQhTX3rARpggzF41cztyXHZWFGRK8UtdrRZoksQkpaqarpinbA8wrPckCstgdozzUmtzL5118WboxsZhtugUx",
  "key17": "51VLCHM8CNVZoE27ZLDM26CVNqe6bR2ZiA12f29eThy4xWpZeVc8Ss3KyoxjEWAgPfMLatRKQm4B5iGN35wQ4sJZ",
  "key18": "5VkrHDGmfpePVVCsnfFJTjp7KenQYmKQY4pwjTqG5SHUxQKPjZ9CXdpp4aAcVGJPjtEnXzLAVHnMagTNVaFS7XPy",
  "key19": "Ht3w279LEaASMbP1vQkve8w9YLG4BbeeahKSi9rPwqdiEiBhxr7YzfceHqAfUTLF1MaZxSA88JEeWYDtjEP9r1N",
  "key20": "2v9hGRdLU1eUqLjkSRJRknQV9h2rMc68LrGnbZoPRsmBZDGasiWbQm8xgJmfwTBeYDR9VvG5hPF1T2gPXqfE4vRM",
  "key21": "2BxUojZMed3SiKAnQZp8wAtZboCfTyF6hiVam79EWpyFwCHFTu1PPsNnDHs7JKKLJtVG79y8f3KhhYw4g6owqaRZ",
  "key22": "4Hh2XUxgjtZqixVX2h4aima5LNqE2xUMNTfFpVENJxFBo286G6KR7KNJ1xL9FVqmzHRXu3d9yb6dwbrPUE8sfJf3",
  "key23": "36wVaAhByJRQmWgF2p1SKWL2J5ojjGGgdSJ64g3J26z54xYmRBKi58DRLE6AyRejCGQz1eYzhkazpKKvesw1DMPQ",
  "key24": "4d95nuyTh632CiB5yYFQ3BEqaB7fFmkRyhLxxiCFG33gxNBZu468DRA7RKNkiwxwEfJNPfekEM422DBeHsvuHbmF",
  "key25": "5jhyMjjtNs15pFgrSgZF15SiRuCJs64uHd8GoRSNF3aqTJTULiP4SrKkUphoBGJoBwAU23vDRcQcTitUXhLgPmKK",
  "key26": "4N2kfgn2fFk1tvnF1eDzkSTXr2zn5VJf3Sak87mAewj7idLWmU8iK355pXqYepcMWjMGMiPrvWqrzu494nqQTYS8",
  "key27": "3ZohWFj9uCBFuoxZRzh8TmEksqCNBZQYNcEgGSWY6tWeiGfi7Rz3vbV97bPzzBSXG1dz1pn5Kicgssda8nrynp9x",
  "key28": "3CprV84NqbcxmoB1AXAQLEBV98vif7wAkhLgjUNBfrpa5TyY5QkcyvFHLkbMguphyxtyhUokdGQ7R8bX9qZ33jM8",
  "key29": "9oGDrnxDCffxMgZ5rnNzjEGKVJRr37zazAreZPfzDAz9sPaDUsBNFVCyxQKE9HLV2scXQzSHvmXkuJ8yzhdeF3i",
  "key30": "3L3Pt4eQ1oZ2CGrJoWmJwYSoDwzAibgsajsdof1sSvz8Kpv9C6cqmw71AAczhdPVtfRLZVMAVrqSxWgFneVZ3KhF",
  "key31": "2mZRVmcJFY1eWzmBLownY76xxx8vN6suDkSsceUzLeKq99QwYxS5kY2QuYn34rbj1UL4TM8znTp9hqChb7hXbDua",
  "key32": "5121V3n1pQht6hror7f6WVrHxF1ZX7Suy2CXaHY5AywD3XphSdtJB8TCjejMBwwcDkkFfNmXEHx28iS5zKKV5XPR"
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
