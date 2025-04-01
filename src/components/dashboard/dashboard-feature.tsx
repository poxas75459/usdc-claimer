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
    "5p8Hk9KcopvCaCt4Kqs3gveD2KZCidrfgqboGE2yCCC84JxfPsTNk8iyAzSuXWwykUmXAYYowQ8C2AejC3tsG3zG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqVJBDR5vcBBjTK616Ut4x7Bj45scqcqPcQ2V5Yc5LggQi5J8Yce6m9AVvCG4D76d8JxGrSQui5Aksmab3xbLDb",
  "key1": "2qTzVeYp3q1cCGhchnmuR8i5SqvGFXbt2C9qVCysXG1AJoideBeWRewTmgcxkogAPu3wviET9i5SYNUNZ1WdAi5q",
  "key2": "2mZda7yUtBLLf8VMCP7eQTocF9J1EePbnHhD876PKZC7bpXFZjvaiGPR92GiLNKaNcbTkcjzDWLT4TrLQtiKKhgx",
  "key3": "5t24oSYLn5NzTvrq1r2gteZC678By2PVp8AGxydSm1f3j19UiGtPKrDfm2c7c9v9p1S2TidnRuWyBpTjpiSqKbzV",
  "key4": "3ona4oWsyPFwJeBwRSw9m2MjMy1UYvFg12qCNdsbFVg6F7Pm7ThRDU9uJJmHdEAL2CHqJwMUpPiuJNLtcvEB6Wgt",
  "key5": "2tt65iinsvLH2YWBXzUKgVYTQd6X2UQxrwqtWprLzPxBsanyCfQcMFkqxdN97pFAt7q32ppYDpsZGj91Jm6EcUFG",
  "key6": "4nG6xbDRNKKWoajKhga22gC3rXTs6GntLoL3MWF2ZM9i6PfgQkxhkd64YXnYudwEVc1SPegjopY1MQPqjbbrvsj2",
  "key7": "4nJB3aV7qwyc3SPGGxn8NYQHBktrmrXp2P5JL3JDAZmb1EzpAV9Dcoya8w9QFR6KFDW86k7Y4xX46tz34BcYgJJK",
  "key8": "p2TUu7Fzm9fpjXLf7MjNdP33V5531kFhUrvjcBJFUozcMkSKwEQDm828qEknizSZpBRSwCUuzVhExWzc2R2fVfw",
  "key9": "3RwySZPfUbSzEQBed9eLjHLb6AtvGD2FhGicx94C9i7ro8MrCkUJSEhVVReUyhxxtDR3QNEisDuDAV68SJZaXXJy",
  "key10": "t58mZLi8Nespc1maeN42TjhqZhZWtHMhJhNKZJtWwawMMfuVUXrmwpw9nAFr7Nww4574oiQz458DxVpeEsp5kqp",
  "key11": "52X2fsgF3aXXoq3JtmvsY42KKKESUqvb9GwWMkK7pW543RdMPXK1B7QKWyAsvMcWUHiqCL4SYYv4ZYPPXNxF4JYw",
  "key12": "7XLo7LnXNRBvxomNFv7enemV16Dtw9XxB9Q1mCLED5mhdsxzXh192R8FmdQmMbjRH6MeSJWXRFm7mnQg3AWYTMh",
  "key13": "5CLum3DkziTbTjuab4P9HJXn5hZmx1qzXBY8NBFY9BZ5MEMaJTGCFyz72BT85vzo2StJLp9hcDcSNePbJYrpVbeP",
  "key14": "4pX1KU3q2DWBRVhcF1pQgugAVXG876pjiGXnimkg6Qwzq3WCc8vh1qDJER7DsJbaCbJpxFRivLgmusyfvnR1u9nv",
  "key15": "2tNaWFovfD3qqNTMWwJ6ohXtzxNJniMVanJ4ZUhM5JCpC2wmm6fKf2gsBKknhE7WkSkorbKcTXif9CJh4QRVp8oX",
  "key16": "A8WucGyjkiNLJMgwVEwJ7pfdvMUxhitLqptcUpkMoNiBPBhJompU5qv8zPxRcTEkYfRNcuT1VipTo2mpw1aEzG7",
  "key17": "3hW8jt7672tUgXoDo6WGdB4vNfSVhemDDHV9YiWidjHxoTAUVRCfqzkyBfTFpHR3cJUt24i6bYFbz8xZ1BdWVZPn",
  "key18": "4az6JBNjbFF1RgSJzWCM7KrvdCvSvS8TibtYzhtN6kPebjLcFnswVLRZVRghrd8zu8CBUjz1BTaHJvFDGU1JprBP",
  "key19": "3dxkxMSPCV8WM18p4vFtwqdBfZqbNhCvrXDKQkwhiBFgepbdd8pJNuiU1zVwe59XLkUyHeeqMBW49v8uXcWz3NFA",
  "key20": "3DQCL34pYixfqSGez4VcpArEfeHQk6fsVwwcLYvuaJDPy93VeaVm7wZWbYupRh7xc4FAkK93RSi3RSpqrLSaWdVi",
  "key21": "ACdH4fWgQP23vQEjymsfnA2tYfNi8gV6bxDQYSg3bhVZUTQSWsVdpXmMW6VvVuAmdeLAvptZoute8dNX1Tcuh6r",
  "key22": "d3vfbAjKazcfbcTmBX4oFyLHuSZceZCPJw3Z7Wv2iTztihZYWgEtt5LvFb2wNGJyhaqzWkppN896Lpr9rD4bgg6",
  "key23": "4sTEfaf6L6Tp2NVuJWqdc4V3ecfwxfsP7ESuw3T4fbQrdNFgpvxZn4oXR7LoG2U4j4VxpPZjYeZ32hLtRuDVnFJM",
  "key24": "KeXWFveZaagWNmtsxndqEwYi3wqykL1qvRpXWizaLwrthA4K8JDkC9ckT4sW14hcgV2apRS6KajBhyWjQ9jzJ9a",
  "key25": "3kJt2damx5ki8G3Nmz5UrH72EJcLGZHHfPuPZXQLp5JgwL3y3b49BNVhBY2PWmGg1hk5kcSdiyx1rNNRQZGAHPXZ",
  "key26": "5WX83nq7CJt8gxA2VZWsebAMfgnXB4pF25G1sCMzLjdswbLae4E25QRpv3hF2ySpTAsQ2QuPfnrd4DkPd4Awt6ff",
  "key27": "5bgVuctUdBmTZx1GfcSpCTprdzMtVSp3Q3LRiGtu6123cncR4x6NBhboGvV7PSdBCb7RYzBcgFPtNVkx5cjfSH3S",
  "key28": "3cooVfQc5s7MaYbjWqWC5Ccb7YtQnb72avJYTFC73xd1eFcoLBW6P4MZUUFthZ5NyEAHznFGQDfAwYwbhkxTdy2w",
  "key29": "5XkkJEDM2zmMke8tV51sZsVAP1hwnE5Lxq6bFwYhkeDr5or8vxLsmf9uWyUQ4xYgEu2ttyhhm25HwfQqtyywn6df",
  "key30": "5GdexDQf296TWGq4KBGbNtzDBJcbREn5xZT6gquMoQ7E4q6QsM8vXqugkmmDPoQxfjiWYn4qqKZ5UJ5aKxhxu96d",
  "key31": "3Yz4jqvhK8ShcGjdT4BTRAzS1yNQMz9A6WQcnGP5ivurXNawZPHWQi8sUtZ168sAZhSRbVVzUXtaKmdkFNZZF3t5",
  "key32": "5sYqHj3mqY9gAK53zC4aLHqVAjtWngXSEpX2n3h9h6nzMFgn9ZA3SKS9N3T634dzVyda4ooFPqp2V861Fc8YA5a5",
  "key33": "G3rwienXmFpRCWKdiwH3W7GUQdxpTEGd1UEXa9pHkBCVLS4iA2BfhzmxQE6eyofYyV11tB8q4d4Vp4bJXgu1gyQ",
  "key34": "4qkyEvyHXusywmx4bsTdRxJPap5Lw5g5My72rA9AJQDR8DHJ5V449dZAGj57QR6GPLoPRAecFyGRyRdiSU8gYk6K",
  "key35": "V3ypHmoUDd24X9YhTNbG8HLYzdo7zxetBr24HCghYXMtf2JjdXKCsJNySe2TRWw1fZzgm6BPYmyknoGqTSb5Pb5",
  "key36": "21aumVa5tcSPx1R7gmHdNb8M3Rcm9bUaaYj7CDcpGuz46D9rEB7B1ZpSSRx3p2un7rq8gYsASBvx6qCz1VcQgs3o",
  "key37": "Ykqp6nAq1KHXQiysZCyXLN2bGhg34WkhJ9pWYJd3sXYdMD5JhoJYLWx1BCr37m13aTMbZYszNSyXzqgPhW7Fogb",
  "key38": "nHyu6ahUUoVdMpdWmA8669JoUnS5XCXSFpHdtKcCjoCwVQcYBtE4YSRpjx92cTU8zAemTBK3sGkYdV7uCfzZjiU"
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
