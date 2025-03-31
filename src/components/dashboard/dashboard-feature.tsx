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
    "jYmnTmts3ZSRH4wiDC1abE4Ntdd32cY3jo3nXR1kRuzxJzv9dMQNX4XY4ZtPW4Xpj7WcNnKQFdw1mM3wncC5F8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43hgRCnWmGkC9qWbnxPMHb69W1Xs85gzLxYUfXfQSYaoUX11RDmp7HcCdw2Hk6uX5gxTmDk1DKCVwQ9dDZ6adpCz",
  "key1": "4PNH2TSREcuSBmU1Fy4Ki8mVN6Xd8rA7wfzniHLqZrcJ3dukAee6G3rsafS34k4YfJowpphSdDbuYbaEarCKFG2S",
  "key2": "2M14diysvGLBwbFfvnsqZXZzZYaPt5M62BjnJUvQ9enf9YB4PNfcJi5bVhQBUGaRZqQqxAqHupG9uuboRej8Vmt5",
  "key3": "3arZ8A7gKn9iP2Rr8dHMrCpMVBgeipb4EpfGR3wAU3S4TLuTBRnacJCNDYitHqy5RZodm9B6CPTaumwKTY5dH4sj",
  "key4": "63CnGkDYJ5W5pEUFHY5YVNz9x7EMFBk1qfxKAzfH6Hw9HxtcdsppXZu9kRNdpwqe95WpWSzm5fetTnba5VQnPGkB",
  "key5": "2L4BUPuLCj4b11t2bRBBVGBtr5NRsYYLmvvHKZM4bd21wigN1qYVcqffTR6ctf8Eyi2K5PcyAiKwufthyAk1z8UZ",
  "key6": "3y6ABHBRzetGBpurG3dsakC73y5W39jfqkBaRXptpVxz3Yjstde34w4EM5XbyVQgkZasBWqx1xZsoN8gPqV4Ekaj",
  "key7": "4PWVRzmVSZyX9uxRGPLabHgUMDH7EzM4GsaG6utvaDdeiGQb74Dzdmp5U5AoCGCJefnhauBff8LANSrVKQPgUcpn",
  "key8": "X2auGVuc5NVxFaNfVoQGLZTiJBbZbgvnT3AJjAbgxBM1FJ6Ej8wXKyJUnoDEx93CQsNqSuWbqddLeLWgRb7t92L",
  "key9": "41yuYiQerwm5nd9cbVH1DoLXoktBubTqKKEZ1WGNTbVbcsruKRzQfsc4Hj15NkgEe1zfNMCS6usJvftaSeAMstHa",
  "key10": "jX9aKqHbNvEnirdwBdBrbzbjADzgNTZcA8nW9rrfmyGFjNbQejfriT2hHvnH1Vapa1qp2h92enE8CgCo3nhB47N",
  "key11": "3Ycozd6Vsi3i9cA2JqkA1Q7herfZ5qsVq5HXfnSBiA4HMZhbtGLYvAZdV5V6GPz6txZgPdxHo1aMuKjEwaubqsba",
  "key12": "2W5uDSibw9wKuSrLsVR9t9SYyuDaFjAvceJU31LcvQt2HeoWWNbrpwKNQVWL6D8suFLiz7knKExH83yUtRbtDasc",
  "key13": "4wJFjdqNu3NXgB2ETxPgbu5pc8jG6RXHaACe43zjt6PR4maRnGbJFEeRgNwpXuexcqhGWvRSkUVLnkJkiwMVJ1y8",
  "key14": "UN9Xujd15ATwFbmCT7pZCNpqatsPGghnnorY7P9jWg7UoL49MxmeaBZAXiwgqptTdhvuCQKdW3rDacsZ95o76CN",
  "key15": "TVMi4NinegWK3RWuVLQBmJfo7FQP4b3SVWDtQQghQi45qdewaREK97VY8uj8cehLZZyMW436k9hFu2wf4oLueUH",
  "key16": "3irPqxi7WUzce8Q9RRijGRaEMB2tSN33Jz1QYZEiBNGVaeVm4tY5vEw3rHSWggGB9wXPXHnxGqYthqiLuYCEYgDc",
  "key17": "3fURys9YvKbz7SE5R1xwz8tf5wzXrTA8T5t23Dntsa8j1pzAsg7ktMduo8Doenjw6hiETuHyT8rKtqRrTSFzYXyr",
  "key18": "3e85bT6GWGEf3GMpMbJLXci17t6Sq1G1MHTkntTonAv1Aq94yFEQWuAbTBA4dot2HYTQxTjkiAknaF4emnLFnNvp",
  "key19": "X94NoJrrPEzmDVfdTh72NtKHEMs1dJDkueZ9CocQwXQWreM3cKCEqvTV79fiBYQF7rA5xzn4GBkM1Cd9xDFRUep",
  "key20": "2ccaN9ZZqbfiTxQebAB3fUchFvsuECKh8H94Z9QKUurH84d8GSNW9JYtSZ18pEDk6YekxnpyCLkkKWDz1Qwzduka",
  "key21": "LP2TxTjPPAsojiD3dQswZSfstyRYqJhC6zYt27AwuQgYPMeYYusNfvNxBdUVcB6ZfjErzfPxEFsaj7frZ8Wk84f",
  "key22": "xyXBi6ik4P96P3WWx9aTDuYPZWYvL6PGnKd1BDqFrQfS8AJysDAuG9TVmu3AvsaCTmvDdqpSAr8iLVbRZNwSo8o",
  "key23": "5yrpZHhhzb5ZQazXjumuahSzMNpzMdkS5kcApqS7ZgWwPY8MkXc8uHbgNKCCm4Q1afKnN9sogBwQEnam3rofP29a",
  "key24": "2xfLGEWmELEKsyZhHwZxCWG7kREh4WLbf9WcPLhFbqfNVY6SvZ7drY6jHJ7CQdVnnPi7SWeERyB2pLtugKaWw7Za",
  "key25": "5K4LWSv4gfitPaaTKQ8MPWyRnro8jiyW2NNz4nEpZfEJdi91MWTS5kpACSCHQJgE4byhMBp6Ns9RC42v1eRjnrfx",
  "key26": "27gttwENzGoBufxDrgXDfydKADPioMmnFyVJAXFQ86mC6Dx6Cd2F7PaXD1gfE2tZhFwCba3dTjoX9R4dYwBQ5QHv",
  "key27": "4qm3cP9uY5zQpWyp5iSKxQmARE5PL7t7fy9qrmjeEE5dJBp8uAs7mivAQyC5n7HtRS91iWYDdL4taY9dGz2t8LJW",
  "key28": "26bTKf2zWmk6jgUj3cG1SAJ4Dh5FBhgUjsHEB2fPiz7QPytegkbxeMWABFAZgcB6zXqwNwYQ91Hq6ezAVFTaEqro",
  "key29": "5C97T5i1jYfa7kE7UviiguKYRiSFquqPQNkRhJ4DFTfCx5wctPBJrykjdhNwPuSSPpZ6NhgkC9U7t4mTQmnmgJPm",
  "key30": "2hfDnCJBUv3HdXZD1MeQLTQbERPcXZvm1cR9WmvfrkQXni2pHjBgLiaZ2RcVVtNHVQNHgLPYFvxJk7553yi4HtpL",
  "key31": "3hXaBFaTxxhDsNaSGyVqht7mSsaedxvVYi7RfyxHNRaTkdpwigZ12viQ9wgMmip8A5FrqxtqxsoQMdrZ4gh9Uq7A",
  "key32": "5PJAwWX2Johx2EynQQ4tBYTQWjtMnmA9DHS775J16brNkfERuf47pKTLwUknhHrMPhN2kiMcPWMBcFeCpu3Cmkzm",
  "key33": "49CXfcKMqkWGg9Np4MsT4FPFSHQrcuZaxBR6PTtGs1owoA2ZLZ92993ux1vokCYghVAQQ3jhYWfc1bktLdptAQtN",
  "key34": "5ZP4pJj2rFD2pMdrse8htUQyjecEHkUQBsMdD2AzAh4pQwjVSEdu23voojBZn1my8PbZs4oocN1UfmNXBtZcMtos",
  "key35": "2YnyitAiiPWBv3berD8opLQ8mrbM6jgXxTfVw2bBrdCHB1A8ptdSSJ1swqbHqziX9Ea9oRmz72yaTNmikbf72aPh",
  "key36": "5cLpTdPgSnCTG4BAUWMcDCSmVMyR38nXJrz6hAHxgM5asDL1paMESwn8NzKDyT1Vzwu97efruiq8FMP2bLvF7Rx1",
  "key37": "4iFbpHV75oHYkpqapCt72ShDHDtqSqUGyQXC2B2wxoUaLriTEALd55kCcCsyzTNpSuuhvCQ5S22y7np1Lkw7VotW"
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
