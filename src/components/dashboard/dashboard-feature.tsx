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
    "EctUzsoYF6RFrNVX8afHSUJZhyTX5fabRr6C6b2r4sBKRsKSvnqAzq7DQ1DwdvtnWY11o7zCvx5KMcVgdvsVvyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QC6xzMsWg7iRMwTBZjmAXKbjSMXoqor4NTXK2ASgSetyxtXAhQrttzKBFxkYLvKofW9ZUBtC1nuQgHYGVNY8uNk",
  "key1": "2oK8wv3mYtGvogAEvD4Tu8AH6VzAD4JDbP1zoiUh2WtRPfjj8yQ97U2WVaqAGZNLjyWaDCH65MrmxbWuJZSTvD1c",
  "key2": "4MfAEw8j9wLB9kdjRKT5HeFPwZ4K1FcqFRGM4RJRbLBt9HJNVaUZgPiWkX1MTyd1iKtsTEwgMqBFSfvLaS4SBRdu",
  "key3": "32uA9mXcof2NXBfrPfg2WxmyGWcy2CvALHGpLB9g471xDUsRNn5ZKPMb9gsf2BqqVmJHf8mMCV4r2QNiVU7LDzvg",
  "key4": "FcgmLSPUnzeGHftpFEdwPA7Jc4so3aiLbk9speQpAJDBZwhPgtEb4cq3VyFpghfesfEeZCMHiEVhSXwWHV2W6Nt",
  "key5": "jdD6zm7JHb3Z6dEBRNj6Npu2YtNdAZdXRhu1w1wJcYXn7ZpHcViVYzfoPZVzZHc6EGWWAzs4ZT7n8AYH5CFXHnx",
  "key6": "3Xm9Xgamq8RmbB2nEsxShS9LfdnRBmKLm5mZLRr7yS7AbZpW1dZt5r5abq1XoTBZsub6fhEL6qFAce1QvNjFYaEN",
  "key7": "5ovTxWCmoJyAKcoFCvaPK9kTXjh6YN2N23QgghApHyWr9aLoPgjKfHV6YCLgUyyCAsXvjNB4uWGdV6AbTd5o36NA",
  "key8": "hzcK5zV1aopmRB1zA8EhxdefaLj7pAivd6ZXbQ6X2x9LWex7jNFFq9oouD3b67i8WRdhgfZmweFyxGGQQVdyFLk",
  "key9": "4rssuWzJG35knV5arzUvAwoL4Xr6AWtv1htw6ags9gb6RimVHhaMrF8iwz3mDsV6wfc34SJKBvv67XtPqAgTHyYZ",
  "key10": "61woRy7hcjdZCcNYzzMoYwaAiuL1haZRVzepqhtevD7EPencdWgE6XKonzHad4ACifNDmQnzZ6pvKzGcC4yCWwL8",
  "key11": "rLzGHgqsPW5QWfRRHbCpz7AUtpgeRKFHSzfr1c8rKQhJjFypoBkTt43T443Pep2S4oZueUhb6G33HCTt7RAqB95",
  "key12": "3oDzDegM3W3Sn1C72nvLoRQBQwZ8sJayBrGmVNwFGPeaMgeMJGmYxzRc2B5JcdqCsU8KatScrZdZRAhGZtgVKcw6",
  "key13": "56e3UpUhUbpae9JmjTvk7spmhqspKDJbYZJPhWGGpy2nJyo31FsSxiDT4xo6tMPgohScBncmjyaMg37miMTF7F2H",
  "key14": "3fC3FUVfRkiDyCUEMxX3N4PRTjxwL2GdpGzyHrsVTa9DWProRa4KTqrMLgZdUmSay3KgrUb1xuEmAUce7bmHrgSD",
  "key15": "2PuFAXtKDEhAP99pDXPo3S7jPYRkuruoccWANLfgWxB8rLThP9vmtJvdZMLTvUQtaNc2MjoDtAZgawkVnuL9MmTb",
  "key16": "323254ykMjhgyjepdbPAJfTLeAEpmCFXwMDtRJUbDUmA9Yj2EDz9sJwTN53RPrvvubAESsra3f4hFxGaaAYG4nFE",
  "key17": "4ABznUxJH2u3b6qZWVh5jkphgzsKdXd5V9Fz4KXNppKUbMeCd4RoC6acGZbByDNVvcPskDaAGCi6q8o4FSmnPkbT",
  "key18": "aQERjHHnifhSnZSzbkxzs6tsQxawKtzqhF97L9gG3yAWMSD2jbfxjBokGAfH8maH6rn8GTpm6qXh3PW6PqDVAz9",
  "key19": "4UZUQX2RCys5M9gDVxSzLfLxJFfkwEz6jjhqNTUUND4fpBvXsnmM6znCjgNfANTC9TLbXpwpZv7CUj6iN8NUEVMS",
  "key20": "3Uqc2TNCKRXnC8XHKfYSk99FddeSBtm6heHFm5brfdeiba1zFbaboF5GxefTyPmwRjvjRFAMZ6g82QkjBdToif8R",
  "key21": "4hRc1LmCpvc9TRV7XhPXoR6E13QgLdzEpzbV7f2kBVNLu33uDDQgkEzmdJKbq4MGrVxwyYhMpPRUnKJBAPW2iQY6",
  "key22": "2einc1G91gZ3RP2evKjSmQoL7RRxBzVYytRAMzFxJ2tMxCFovSjTHpd7oXsCK9nKB9xkVk2Moosgqss8Quhqd7sB",
  "key23": "ZbA3fi4Y42HqiZQ9nUQsDtWDcDJF1ZPRLcZkzTxGV2eey3LFWdW5njsLNjDHPQ4oFfgExNBojRkookWNYSvHyhk",
  "key24": "54v7oEVUPkTQBU4oG1VoseczCKum7vaiYpPRJ25TquuQNLhVeHjYxRJcTpWXC4gvqmkB8Jw8w5SJ7HqrnG3mnVUM",
  "key25": "65cTkrCwP9VkLTdhK3PKdB3oNrQZg7W5nNE68dmHsT4sqHLxFsDTe6NSiKKAe3DCA6Z7BmBg6mNguhUBWSaAKiRo",
  "key26": "41SgWS8X7wAdWCcapzcQJEUZSw4XkoRTzRJBo5wd7G6s7dyGK4dNoz9Z6JPZ8wpZA5dU8JQnU5A84HGpBB81V84r",
  "key27": "3nhW5J88wnBtWLWs1ofUuKX2e1y54nqYRKWr8ZMPiLXdBGXnaK13f68SoG5DDG4jPZ6kqY1mbS7gX5nNdwRMcZLo",
  "key28": "4TTJHX1uzNpMxF3dWbqMKt1cxfYQXzUZ9ciqRFzDHwRUYAW1GnyRhDtTDUaVGZfWEvppyTs1fmCZtnrZbBgomGKA",
  "key29": "mGKnrwNvdhCXb5TPS1gc7xD3EjdGqphi2fFzxM1Zy7L4FAswU8w7YcBDjWpsNWvrvNg88Zc8C5xZgZSxsZ5dZqu",
  "key30": "5L4YmJ1EpPaqE55BTkNyovD5KiRiT6vXMd5fu3RAxAzYrwVMingRasWgmi8rRNXHiTnskck1hLGf3RQKnBVk86oZ",
  "key31": "2DveRP1rhThG8TBPYwCdNaJLnqyBn2Bm9QR4LNmSz2vhEyrAxx5Y3JtRF4qojXC5rdJtEP3Nn5uo9xZ45et8Jv92",
  "key32": "3Hyauj5pyVuqAEXtCQL8y8XtdLtZ7XEiudKEq7WJ3CFNLoEqM7u5Rk5Uaaq5SRQPX4SY9wUVTgikjKpiKzUhqpYM",
  "key33": "5NZtsoPepggisx4qdc4U8URYP6TCpCe3aoLBo9hRXFhkfhjJtoYkwpvMHyXVEnZ9Z9LgNrFfqJatmnH4GDmmTNW9",
  "key34": "49wrGn1Jy5vSKGzi7Fh5BW7wBQKP8y8d817Yv6FuRz1yK1oUFeQ8ay59b2oppRzgKhA7KnjSARzL89YrwMFEpDRY",
  "key35": "3ti3urSj7mpv3tefuDLNy8Ztq73iZMHkaXAG8xo9ZNpHTeYUTKuTuBPFDuZ7PFHkgEstoE9nACXUFFb3qYLxV6tQ",
  "key36": "wfsR2JZQz7YWaSoG6YVKihVKv7cZJAEXTac77vKvTjgV1QJCpYMCn3yzA6HovmLiR2ZUmax7sM4TBQaeuLr1b9a",
  "key37": "3gmRqfcTZ9ZkKbnv85UmkAVMdUmezL4KQ2M4Kud5YA9oaQD9qwvfck39jEj6RXA93vNGSUv5ifgVghj6t6LtCP21",
  "key38": "2Kfo9XVLKKGmbuh9uhJtaZsr4HBzGYTnu8f1of5ko95pD1eMoDmfYtJTCbKtBkDrvWvphK2ABeRkUp6oKiud9bsy",
  "key39": "3DrRSUfpVMmaANFGKYXvAhZ13cNonH4qYduhKGwEqNaBe8k3pfpaHswfiRsH3k5vcvnSJEdT78RGG8YQCaRNW9UE",
  "key40": "4HCWnPrB9fazUNZygtukwDNbJ369JjNviueKGq4PNvfG3cBqUJ46QKQRwDfN7LFBHrpyPqWbTpeWpzU7BPepQBah",
  "key41": "4EqEhLp9PnGeoWqngqdkv22djX5xMJTu69SUH5JcdVNxAjRr1R1pnkcmgghE8xgFcGMqdRi1ygT6NdDa6aBysnxC"
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
