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
    "2vHoj6hkDSaUi6gQcj1ABh5VzpKig82bPwAusdGJiPNkHzhmkhydRyJretVdVVXWqPs4r6FGdqY7eWVwdBMfBYBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EuFmLEkKEFyyWU6cgNQ1FdCoRtDnnGwnAETzNUumoCuCdRmGynjhkDg57V97HNSAxECadAJsLcF7Cz7p7X1dQEi",
  "key1": "2eNH5QdbBNZH33BLqCsPjYF4r6aYQJTvs4rr48SF3V1MRwwGWjpViHhANVLV4hMwYreifnKTgi9A26vC2aDRQfpY",
  "key2": "67Fme5zkXitRuyjR54V7B3Dz9B8zcqV8Zoq8k1XH4TX6haifertUqWRj8nkowsUSL2sieJk7q6MXusMcTEGVS4up",
  "key3": "41yBp6MZi8H9dpefU7iYDZ71kX7uazoA1h4Kjb8UxVDEf1BLtdjEhBct9tjzqPsjtskF4HhaprDt3ZYQyZjpDGou",
  "key4": "5xmvzxFyJ8u3jXtUXH6N8bhb13An3FzwtyjeRMGNtd7dTpBUZ96fc16DXTKvx9o7iTfyswxFyfZ197Tw2CHXy8af",
  "key5": "2SL3AXZ4G1d28hRC4HStu4A6YsGxnxZVUS689MWcGUh6XRKSzMiiscQnkP215KvyrRnM7ZWzPjQcVT243tqVL4Ln",
  "key6": "4qa8XyfRNQZRTKWF6J6YZbkaP2tRKtbLUZjpv2xbE4i3nxiqhcsBvioWmArnDgntyVAGgrPjjU2eYwmWUz2MHt1b",
  "key7": "3BQUV6idXvScW67P9NjKaMCisbTbeyYvhUqpbQa1zsFyfpoAhU6RD31kqxNjgdq5jfU79NUqnktZnxA1AbqKWbL1",
  "key8": "5erPFQNrGynqZvL5FKwCLJ3mjzWFA2bVKBBZJzbpTQRRzh3GeHaT7ZVgd5EvJr2jA3RSZBPAr1kGYnZZ3KzHepe1",
  "key9": "9nKJgX7YASujZQvUhaNsj7J6CcARG7Qek6NxAvc2G7BRpW2aG5Z3dqfqXqSs6xVUbhaNkRdvkDxHmeJcrXum7wa",
  "key10": "4h57zAvBMwMqYjBCEFvRFwzMpqRscY7qFxp4ixp3tVK5ee2ChH5NNTgRhMJYCR2QMvXPT4RwYiUkSk7FFepRHVZs",
  "key11": "5kx8NaQuuUf2DT1JENmMr8mwaacHTJckxPjairWb8kGcQYzhDCuzTMAZ8gdMWqakzUZxKTgZ5Y8RW1XEdLDHKwSb",
  "key12": "5os3sUfPtNgdypbmjvXjRVGnyh84WcmebPuTerfnQuLN1sxVMEKwQEM4XFqXDP82S9ktrv1JsE6m4W9VBfCd9E9m",
  "key13": "5NrHeGii4FQsoe1TH8QDyMogWbke2jwBasA8a5SDN12SP9VEVqKLYW1oAaVHdeSe5JJa44EwkGB87br8Fwdet1jz",
  "key14": "5cGMNSh8RURZYxymE6aBXAkDEiNueAAeNLBt2xbmsynQCtu6wBcoUJY9h4E59FQNmgsW4rLXEJL1W8BhELNTHLN3",
  "key15": "3PgMzjdsD1T51PXdd4bwgVpzK1Vwq5PaGodCvonwCLwBDdZY7eFpjCU9Kxn9v2iuTTLq9B1X1jExEEE3adAsbgqB",
  "key16": "PoyfhaZmH2qyXjAffy1ukKSCMSdu1BTzGsLtiFBmPcPjGK1PCSgSrYaMKCcfFEZSVg2MPPtXGXaKhGkcx7Sd8XK",
  "key17": "4awberiqdP4g2HwDWE1Wp3WBrjabYkiMvmN2G4nLAWovke8a3QXgczLybf2uQMWXuSjhktLFy3Gh2PsDH4iCeTJd",
  "key18": "5tuq1L4cXpTS6NebTFbtfWXPbMUozcLc53RVQXRvcM5J8XdzHw83R72AWAXV4oFp96gsJbkn3ECCqSdRCBPAGukL",
  "key19": "3kLhovZr7PEudCmMkUSVW1PXXvoqRL1XMgp3GXGFgDmHLtjKGZRRavy1kPVt8V594J62V4CbdPHX8vw9oJbt4SL4",
  "key20": "zzWwcizMZvEj3jwQeAtSRqJXkGxRaiTniEvTNZwRSnvLWS7BD5kCANU4e5BEwd2XQbbXqWHfHBYjF1Y91uZhAW9",
  "key21": "3kugqUU17gZ6KgK7bxZcV13pAXnJYGU28tQZZM9JDi7Ac8wKUMpxaHTD3s7RM3pB95dR4kYQ7JV4KMcJEkBqa21u",
  "key22": "46qgD4rgSYPsfwJALL88KqcjsfJBTMVeX6oA2bRu6pyBbdh1uvDUNgYs7Kw3yjhidBsGKAAren7dCk5D5p6qxV1Y",
  "key23": "3aERQEf1vtc8jZ4cv7fHzWegF2mu388WNx9gjiv3gfMiE44GAR3pQVCsKV9Nk8iL42zKPHWXhwy3WpejiLcLPoFB",
  "key24": "3o4QpMht59PpemtskqF5FvsWNQsyKVouPXA4Rdq4DR4w2NsRD71dA5CyeVk4GpeYMdP6j7AmEDrcEsMMZWByPy9U",
  "key25": "L2Z757rsapcNNKsu4rhmuc5uZqbCVenvLziYRAQsCDxem36rPy69pkkagiaYcXMuQycLXYF6sQvw673SmQtfr6R",
  "key26": "5dZrjtVSzF2zKX1NbAJiKc4wjUz1jJkzDkG9RPMEsvXrYh5emi2wRhNYnWTvirQHoVfY5dGJe7W53H1LHw5SA6d",
  "key27": "ob9uLV4JisNGHYkEiqDGCkXos2eg7jzhMwEzkL14WCiHcPxawox3warWc4QBrLN65G31qsaNetjMpDybpA84QY5",
  "key28": "4wXvtfm182b5YjqMotc61YHxqx2oAn1jkVWTm4BCjEWTVvYhcnEQUd6k98Ec16Uvt6zo6vEt2MEyFCqpVa8aaMaF",
  "key29": "3MLzvApzzxCUV2VNaxHjb6fqEyE5wDPKAANCimtX6nwzddj6PeshHCmLhtrfeMEDESMcrouKTULiBy6Ndq4oMQe7",
  "key30": "4gN7HQXysuvZXdhZnVzu8SyjFvNKfmMRzBfBYvZbsUg9s4JXaPAQ5ip3poDNnFQfK9g2MCq1HKPWorHRAtAx4rRe",
  "key31": "4XMoNSwHRQfrKdiJ1S55hvMy9uQfgLUG4qXf8BS9qVJKDNdJrfghzCVxVCj6CoQp89bvf5csWVR7C6x7i7LUe6Cz"
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
