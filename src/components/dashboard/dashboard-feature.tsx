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
    "4nbSu5ydnJA7g7Kc9XZ8mDNXeyjXKVEAAF2tiCMGgQ1z29vPsj82hTYaawtbjx1Hvg2LD55Sja5TXdXvQassHuDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJtjT4xSHdFjdRgXkZSwVmV28u2jgQMH3pN1MyNUtB7zzEpH27SWnQoi37ARBwad9vaU69nthcF9N7jQ19XHVaC",
  "key1": "5qXZKC221q2LyEopN53wSAs4z14sJwX2Nxty5331NW4KDZPDFCLXLuJS5tExWfedzr44gjsQaMiRCAxXNhW2hETb",
  "key2": "4smUPxEsYUwzTUzzUbmDthwNFaQE5mfpowefXqrUZGcAovR9N2WesUqDFZ7YdzEkCpEt4E2bNGygRyp9qpJRMUSH",
  "key3": "5jG7KzQvnLEvBXLFNm4voq5kq4XwmktZ2RaeVBUy5BNcUndCYh452NvbSXgU3v2RxwYrJDyVxfYFYn12moun1TSS",
  "key4": "39L7gKp4dwjsbtCSJm7AZDrR4L6vTLtLtkVm7DpLkQjbe2BvzCmBPtEY6QYMS9obJzoMVYyrtdZw6XcSAdYLMqRM",
  "key5": "4u6kPZe4aQx9D7y7js1GBGjujxExPCfNGAjh4aZ13ThHwvD7iTyQY2x2sZCDCcy3UdUEw5W5SXCtSk1WHrdMbmVo",
  "key6": "4aTED3yEg8uQd17HzbtR4mMGTG5gLPwdfBThgpQPKQBXVaVdKBRemTZL5Refzvbvk8S996ux9LKNczAvzkT683on",
  "key7": "2Vunps9Cnk2YW4vWxXfdungYfQtLewkBJ9QgBE1zPrsMboX8rVaHE8jehENMWQg5t1mShqsuFu8DSFUbMUQ73Cev",
  "key8": "3gSatwg5Zv5p5ehjjECmToGXseqHnX5p7g2K2TwJHn4xRPozHkccxUH2ZqFSTkBwKFAcVzFHZQWydVjmvhrBeHUX",
  "key9": "2nrtqyRtPdQG6kyQJY5ce3ymBBJxdpEoK5aS6XbzLB2dNHpPA1WW4cN8cE6XokgwoPVsPAZLzRVgwa94BDRpWBVv",
  "key10": "5uAVnpRSgXLbvBoYsHd2BAYRZ4QHnQmjYYixMCA4D3ejz3BiYJDedDeZWgvWGqVV8wZBQLoSVE27GCz5uFWwxLzh",
  "key11": "342JytuT8cmfGZjFbbnnuVuwhYCgJX4nVhHRErEXu7rz6AVKwEL4WxfEuvxrMg8qT2rqy3xztfU4GfVmzLCD2BRW",
  "key12": "4H17pgwiDKtMBKpZ25igtA1z3AkqPCBWvg3Z1Jh2p6fBHqe26kNND3t8tkKDVMnVE4eFi82QxBaotzPTrRNyg99X",
  "key13": "47FHi9tjxHswe1nEpTf4ebgyJmapGgQa4dVVpmvwRh8hfmWGJJMzenaSoAP6tcP16f8dijs5KYH27uF7Yu845gv7",
  "key14": "4ygeSY1jnJT1DPMEuZZqL8QM9REF2FJe95aggQjKBmY7vc2Sq6Tp9hg8ub5XRaHbSWuqG4zAb2y3TDvY3UXph3uf",
  "key15": "5BqU5huvNCSnzFeLHjsruWcUiTZ3xAUoUeyWzdsMvc1VBGDz4Wi6gSud9fgUjCLr5LaxB9q7kXWEex5iZdJDxgKQ",
  "key16": "CdbSGBvXgwBDNgLYLxuvBEVnBuDptAmdHgfPbM3Lj7cuV9xeiNjuFpyah6R6PxKKKW5pfW6kB1d1CTrHehUrP3J",
  "key17": "5MLvuqFp8R4nR9aVVw3vydrAkgGoVzBZysuRBmASpNnf2N9hMigHMMwDpvCzsnYuvoT5NtVFpugnkVo91DYXoHP2",
  "key18": "41qoMLYX7uZyG2WV5VGgferLmZkAWNgHjzXec7CsSJTYdpeLW4EBCqtJJ8HfW9sZnzr79ktuHuoq3FUHHQaogpFP",
  "key19": "2DK44d58eC6AXNNqdJCHXUDLXh8THyE15SPTW2v39ZATXQsgtbG4oxzHwZkgovxebZXGyDUSEoZfegLGkAUvmVd5",
  "key20": "56pkLyKRKmipGbkdEq3BybaZCSQbAawGZCCiHvtsPmLqFc8FqSzswsxPCJRntR3Z2krZJXVYrDAQF6fJodaXNyDv",
  "key21": "3DWX85poMYYhPHZDr1fEo8pTSMjog9sbuzvgEzpmwuHdviRrBLG4YWo5F16hLDq6KQ7Qz5dwngENLCL7BNsweUtP",
  "key22": "65U5bnwzHMd7HAgwfBHPz5bEnGnrWDvj6ZtHwiMEg5sHhNBLmyEgqSLfyoXX5xWKvPq37Fitq57yYZMNxnnd5Jf8",
  "key23": "3QyVhfDEJBwhRTXPnuPNJ7ZKcMRmREk4C3dD8bqwwPbXMY4Gn8RSMJVVtxPnyWoMnjfeoEKm8ecr2zPsHRAd5J4w",
  "key24": "33hWRkwpuXgndDwoy4emMNdiHZdxdbGaBrRQeuZGokcNybYBc328hEGnGWEXD1Q647hiqbZqbzraBpDVedjKE73N",
  "key25": "3HWAKdzvFTy929eLhmED6kb6Qt5k8rrqJzDtfc5z2vYg9syiKBJfaQXAGm3h1oC9L6jTtnKqBThuqjhL3ZPD2m4R",
  "key26": "5o3SAMFX21Cjw7fWa9pwdjuXV6GLeqRTNWpjckdocRMBhfoVEuHWsCqVX41TjsaHXp2XNf6TB99EaadSnWfwSggm",
  "key27": "2mZ36YPkTdu26qiunaZnpbKbsa7UAEVwjGpy6hivrc7g1yr7N6NbaeHoyosqTee38A11JbJq82Dq2Q5NmfDxj8Mg",
  "key28": "h9e4P7rrdTynzxvF7s2eW6AvtkLtWoM7gLXDQVeGK4rb2mCG7K3QH3ckrYaK1DokbFNmESPnBi4yAx7VAvLvue2",
  "key29": "3voSL17PsscKVCTJpcWL3dt5whhGXmpcsS9s6XkTWkVZ7fyf7L2kz5N9F3RbVwVbkrzCgAmRyCyWvbwZkessdZmU",
  "key30": "8Wkv9YQW2pUm3e4h2teSA6XQByhruq3hMTjfTmyXG14Af9wjmxGYokosua8pketNnxCWFwSe8AZZU6AhackqLfg",
  "key31": "2fsjg3wcEGkvQQ4UFBRYhajaj9aSDuwcmVpfRi4YNC2x7TvZZ8iR9x7ByiFmR17dEjYphPEQwcYe7g4ZxmVzNXiS"
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
