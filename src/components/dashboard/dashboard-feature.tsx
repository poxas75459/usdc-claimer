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
    "126WLino1LtEMvMXSDSf2ndrytGeXYYD1DXYnMZFnDZhkLM2CuZcuj2XowR7bHBwR5cXFB96WH3rZSNrMmNVPPg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LSzbQAg6VTV8MewfX2S8JrUFzbNV2qLPoHdqinKTrJhnhjpQaLY9GULBXTZUfQokcxxzpEACbPHh4T8zisC9326",
  "key1": "4Rmr15JKnaVXvtuhxWgRbFswa1WkkBt49MxoMhAqohqf4rBSf5yBx7GeH1RShsMjagSu3jNh1nuW2w38tCdpcQum",
  "key2": "3FomXMFquvuGidhUwNXcfaKFLafEXQwXckgUE8sD3W6NyRHMLEcLHLoSXhmjnxw2RM2bHkAC5e92cNMxzsahPcR2",
  "key3": "3egSvN3r58myNpFhPZ4zpP7p7Du5fAAD2jFDsj7Cq8Aqznk6AHM3SetA5hYDuCNQNaCkCaiE1FbVk9GmDawuv2cj",
  "key4": "5iso71VpYeuFCwQNzHAfusKsCdwb8UgtbP9ZaXi9ogYHPKToah1ZUPcAKpmRaWK4NEYt73ZjBPmLnyCMMpST2ehd",
  "key5": "4JsQuGtXxsPi2mq5rXWthpG4SV8KVBb4WccTNfsz4NBD3UAD27n3N9FvZXaV1WYWVjqkwRt1NQtkNbWoUpKV8NQY",
  "key6": "CGgD7QWWEvNKrpiFk4zdKBxcucB1avgLZWDsYgPtkZiTJy5B6jrKRQDcErkgnpY5e1hsMtuRoGGASiXyPUsGYzF",
  "key7": "4gNEBaaCWFLgnWvfcmTj37srBp3eRC1m5weGknZpPZuufkj2HrMq3d6QkJS2JupzfWNaU8SvaNVoT52uS6qWNJbf",
  "key8": "5aWu69KfERsWQHDk2CSRwDYabWrVHyJFpRpqogneZ5UdiuSLrK8kdgjqu1Qk6Vvts3SUgpZy9P9d4A4qNiT5ctJq",
  "key9": "Fo8oYbb3u26LftHRsdPo3KB8rovYG7aNJp3c66uAeVGBNvr2g3ijtLyv4E7NfzPxZdpTuMGMwxLQe6YWAThDB3W",
  "key10": "4DhesLa4ZMx78FHkXeQpr8Xy2BS8r8kseWND7cBZS3gmjYK12eEaZt9dYbG96vyHXvVGZG6R8Utk8fmvttpoM8rq",
  "key11": "43uQBqNX6yizW66yh66Y5bXEcp418KT8ZsyhTLjv7NZt28sBiCr4D27w7U2QP3F9mgYFJUmioQkbzsbNLvRFC5c8",
  "key12": "4XRtnu2RVeqgc7ZvYNau8B9P5b39pJaqA22NsuxL9roq55PSwHaUSK4ifN9UEpYUeujwi4PPTgtXDVdwXwTuXBhk",
  "key13": "5thhPuVHuDmQsn1ZGGEf3aBev3PRDJHuP48GJdo51VbzKMjK5NKcDP6P4DtRcxpo8D5Sm9AYrhd2dUSBaG5tZKkb",
  "key14": "2bSp79hFcXCnESvMYM8Lt3mMH39ccZ1eZA38kuYrDcRSpdao63mXiNwjGbp6LwENbc9D5bPxpWF7H4f67MuzJqD",
  "key15": "5xiuHVBC5q5zjsB5WirK9b4mm8AqqzNpwwcF1MiEpQDWxML7Tyg9f6e1oc8V98HEc7YKjtpz8LaQp6FHqc8CEDaE",
  "key16": "2nrYVUo3E1DobFYUwChpXwdYurxYjwkRFxwZT19cCMr7jquWmGiSJRcbc3UtftLTgDFrEYUkMvHu9rB3JTf9wzBL",
  "key17": "46VjhrTgTfMRUNyVWMYq7oSHx6u2hsn4CE246ChnSFZfTp94W9smRfht3f674moat7rdAyW9fu2hxmRFoKo9aFJk",
  "key18": "47DaMBZv7PehbG2su54nQDXAGLCzd1wpaeTj28pgSnqoXwxTHXEKrQBjgVPEAeVMjCpvjjCgjwPVncDSXMCQBrBA",
  "key19": "56QnPPt9F3NvvuBzbvH8VcTYmAKWKo5Keh3jRSSmrKsoXJ7Me6yXNYUEMEWdc7mpiRWNptywYatUNoAKAABcPqvM",
  "key20": "2b6JmN9i7p6mDJRmvzktXvyPaiZCxVabfShxjQSCKVafNdXLBEXQdwQPTur53SXhRVsbqe8mnFCu38FLZhBN8Nc2",
  "key21": "3QCoUVdDqqvQroBXxErLRGaNpEYhcSExDRxgsYVApXNkZb35tmtSwQc2rUy5THV1ozExqAKrRttvS2fMh8W4Vi4N",
  "key22": "55mLxwuSCrai2fZCpGPvBY8kxqUvaE51RxVJWQUAns318uaQVCSKr79dc7ZYevF5HkmJMkPJYd9x6FwoPyfmh92D",
  "key23": "2VT6wnmNwXYiyDSH3JVGUnZvVLknCHGTkVTTMU3KwoCFMZgRZAzgSvZobpAg97ByLujTuDo7W8a2gByziTL7KGbT",
  "key24": "QcEj9AH8Shbm42agY3njL9wM8yvcHL26vyWCJVkXVj6Td26PNcJLuwEUrGc5GQvpfZCXCHujNtshWawiybHDoUW",
  "key25": "2ZkBLJxDbVaAFdXmyUMBifzoRTdEArKH3GjEmhkMS7d6D2zKiaKUKYFYvGUwWVsCFM2hkcYPkMG291v7BRXNN7nf",
  "key26": "3RCH1GPtjpRxCHqHiyHFz3JrJwefq3KYuErkBuaa9fNdjr6dTs7xtonGYcCJzmvDtAzcPajBypzCWf2UuKvWBftL",
  "key27": "21oS1T51Pryw9Pv3eYroewz9U38rn7Tnokw3SaxfqLkzrWS2KUqf4WUsjj5GVTF9Wrabk18zDv6s1jf75x1JfRZH",
  "key28": "4vdtfmSvG19FLzaAVJHB2D2hNTRkahmNLNa3nBBYyMxDc97eSPmhFiR2CNnqZt6DmRWT7xyXK8Wc5Zvy1b7UTrj1",
  "key29": "cj5RxayUwDRTKKHhzycnZ4RtTSHuxe7zVU79EpuKPWqnvRoPJ6nxPS6mAWbnKNcw1S9Rv7AWKPU555qXhUnnmfD",
  "key30": "adZepSX5xNWDfombSRFYo3aHesmwtu6WgVJEir8oDpcbeLoC7zhqD9u84EfPJaDaKXJCYB1zx5rmPYhBeUgYQGf",
  "key31": "jzbeQyPusBdTCbsdh1FEzDGyt8MGJ2zB23YVFNM7UbZK5MduxJfWmxfPgLnUrewMDP4imTbkayvnerdRvhKH53b",
  "key32": "mDUSCkugdu8kZ1jwGWhygPz3v1VQbiMSS4xZ3Dtq4Mz9d46C6BW5pbSJDBQoYFLzRWZv8BVy9G1UpUrKa88mHRN",
  "key33": "5enMxpdbYW9VoSaMBYaU6UpJ1gPna9ML94hYSZjejzFqEucMRr5xpNTj8qitHRB4HsVRVJ51EW2iMBwpPb848UJN",
  "key34": "3q9qEgsuzsqT5hgYLFBwkh7XmGT8AVcik1Mx7VCrR6D3bm6kigahimGMbcjFttB9xpEXSDkqZd6KLtghWNoz7tSW",
  "key35": "Mq3eVDM3imrj1zBVEqmc8gA8PGoasQ5CW1rSESFThvbnZ6sBmtmHyycZeYBaF74vxSyouusQEfeMEaR8ZBHncDf"
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
