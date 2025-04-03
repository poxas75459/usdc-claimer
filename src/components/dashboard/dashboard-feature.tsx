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
    "m38sfDu8mmu27AkGqtZgKsJSDZ1YetYi85kQ74U2nttnR4A8woJHTijZEnuAbGM1Ck1YF53Aj8iystvtjCcCkGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGwtL2dN5sK52GH6pCSP2U5W5NkHABEUZZnYmB8JWdjPxWR6y1SZ7UU8QRrXNsqzgWWUM6mYRRZuResg9iLRA4V",
  "key1": "nUyZC4xR2GVxVUGRwtFDnmZ5mvGqiLiS7cmCniM83PiWQPjN2viiMQRq5ZYDR82fR8YM1PGkv7LtNLFpGbgcx6s",
  "key2": "2ppAM1rEFSMG5qfmEhMaZyf4h3YneWveDbfhqECGvpNAqh5rXGSMJe1VuRjTkuBMKASKuQT4AUvBZKBiwH4i8Y6Q",
  "key3": "5AnQzVYcZ4RHRG3ER9ixnqHJjZ7roEnkYTXein7kYmenFCsxR1P2WpFdA6A9nf7CKYFzB4v5BvknW8H21j9dYYkf",
  "key4": "4hvPkt2Qt3Ge99qZkm5WhZ1szmLZFmM4JBrQxAy2JyBoywSUbKEhU87rDRezDqQan9JAzpaASzMGiH6oQ5Uwugos",
  "key5": "dEjRNV28rGTWFhXXGCXm9PtqHw1jSaB5Wm5zmXwrsvd5CgGN8RotYDUA6fQYUz7qMmjw1hML2Ai4bqxpBSzBsf2",
  "key6": "24RKwuhdVJwbnp4SR5j7eq3ReTaH1zMVH616ZLDE3XL9gfxqmGD5NLkghYzv6q8DAms1qgrHUHN4JPF3hGDPRpzx",
  "key7": "5jspQ9mp1UH6MRQb73Tp6nvu8iXGFxfEW8fxrrTZgDhsy2bdsqwTnksRxx2znkAhmhkEABubJ3irecBLKmbfzcAG",
  "key8": "LHqAhubQ4E9cr3mA9LmrxLTuRgjFJXZ4rxxC7hHHFN7HJb8eaiHGz3QRr5tA9U7ZZwNgQoJpcmgLHds1RHRt6a4",
  "key9": "F8omQZQDm8ECzzyHPbqK91KGQTCEs7X6U7xMy3GvmYoz1egvRtonV57AqMTqokJH6ScvU8xUAmq418b9TEWHwZM",
  "key10": "5B7WjoSLzMnUuEpFhsjTftxPQDbKzA1pivy9c2VexotKHKcUG61yPfadkyFWxZ7PheNRPymKqPfh6xCxCpUtgAEe",
  "key11": "21HwBdv6phVp7uNv2etwxWKZhQ2ZM6yJzU2oNpkxBHAx2A3tXHNT3Hkd5CVJaQVyTxrKkyNBWFwctdJHsy6HQkM4",
  "key12": "PmxRHw3HBLq2rcoDJkTPwHFJkCccbZcvb3DVzLAbmrB3RMzFjGi1SmjiaNCfreiLJUv2BiugjaoV5zrDCze8uAh",
  "key13": "j9Kfoz5jTmpw7jpoTLHcKju12Wft9SLkgnZzrUsKJCZiChQ5hpKQD7Ycbid3eD8bvFnXdN5S5dtzBLPebPiyNuv",
  "key14": "3LiwvkPEgPAiH4c63SAij4fNnC4MZcuSR7xRjZHwXfpzgbXdmJBkvfUdnRo31jLCBAdzFuygRnA8LrijEHRzGgdS",
  "key15": "5u5wKBBM3DBNyPB6JZJKu1zkaMRyHv4jf6fzLCrz3WpeRQSiHzCT5QTSBQW6Vmz3DxxAwZ61N9xUNprzZSqJ6Jf",
  "key16": "ZGkxbmKwy81xqfgHLKk9khJSXHFCB8dHaSeDcrBpBdsEAg6gJHa6jxuRY5ZVpuJeZLd6aWDR5nVvGgBGKpTnVyd",
  "key17": "3FZvRVGjBrMfsytU2XjCWDn2JX6g7fZZiVFTmBhRvryyJe6RJafziJUKacDQSBLWycaGZhQ5AsYteZrqmBQeLHrd",
  "key18": "CNau6WGgvmfwAnoKEnHqxfGrtUz8hGj1DV97ibxNXnjaJ68Xz6jzfq7zFV8zMk1vEUKwbR8oLK5KHZzocM1xbmu",
  "key19": "THoCSMSVG1oxQiYWxgsFQJBD3aYq9VYYVyP12hBzH2vtY1PS9vmw6BdAwhXJ9k8w3YiSUfWs7grMxZFRoBjisYE",
  "key20": "4EEasVyX5QaCVDzTCeFh4rURsxiH789GatfGBdoYRgxE2yMZRPkaeZWntXHwcu8r7xffR7YeJSpBePdenkxEE5wu",
  "key21": "4b5DN9kdbc3XQ6WAq9Snz2zNN5n2oPLvrjsnY7FHt3zeeg4mDvHsRg7vsgAk4Bub36yVu7Z6wTaS7L52C7hdMA97",
  "key22": "236vAEHXioc7rijCuveXWgXeVoi8TQ5jbryUkAY1vbrXLcNSdsGMoFxwTevDU4tU9o8bDnJGzsfYDzZK47NRfiZo",
  "key23": "5xazB5NSSA2TXLE6jNgLcEziMvcwm2DWhtDBjCBybA8U7WGfuvnkTZXRMKc8kY1pP279PwhFZRE1mvc64WHJnKVW",
  "key24": "3PZDNJroPS2Sx7aUnTxHBDsPnPkRWrzsHNxZkSjPNkTbUjimyb2szrHENn6dfU7vD1SRj2fDBFTge9LtsbUCMK2K",
  "key25": "2dwuJKTJqy1q2xnmrRuwpYr8ZoLH7qbFp9inZf3cbAaR3bA8C7rJ9LNsKLWXPVKURdfqN5a4cmmannSxPWvWMUWG",
  "key26": "3tBvU11qLsVyNfBbaZe3N948gxn43S6vXMTYqdohvCz7QTYioqcz5nDpJ5cnSumV2urLRLsx2FhzqXz9EM1fYLLo",
  "key27": "2n7LpG5BQ7XtUegu5EGCkpJXBbbyxfVngtDjdipuXcxj4x6vgx7vjNygNGa5CWo1KbXircnFf4oEUJcweSCz6iXV",
  "key28": "5LB3PKYwTbzF32dyJRTTzj7n143427QgoP71JCMp2oKRZHhUSUYah1G6jVQuBmEdpHiTqoBZR8RKso5kDWWKZH26",
  "key29": "2RAH5s79w4U3a39kbw6RDS9R9mk1xmJUHqWu9RhmBPJAjgZe25sfz2nQfU4A5cPJkwxbZHzguMDGk95m9nL5ebzJ",
  "key30": "21mFDjpPx2w46B515iJS9DMVVBPph86E2HcKQW6bFZna9MNzrQG4N2p9shJsa2fuMR8s37dzGyh6EyXYmKHZ5WLr",
  "key31": "5eBL2nhtQXeNA5tW6wtgUKF64gAcxwCqoYDmPevFhBiTbs6tbFA2SnkQaqcdjuYrgdJRK9bpbasSdt2YVWAGD4bx",
  "key32": "2Hcu2SkHsaydbfHS88AFpo3XDYawVb9LkavBkP6G9pnuqe7hsceoWjpSMN7zGg4NjBYe2Uvpnzo5AwmpigdzbPHR",
  "key33": "zKxRqCPyMztMmA2LzKepQawp3LrYukPyYMEyGe6Mo4RoXvrS98m95CK4U9EmVcuKE9DegppDJeiWZ1u2ELrShb9",
  "key34": "5hQuSUAKQhuLGXsCvjfR5AtJsc81VbjrEhgv1MZpuTynf6sNwVLrHQLkpSmoQs3Ni4Kaf7sm71ctxgPYUtUPVyaa",
  "key35": "2ZPBJpyh2QoTuxEgSWwVEvB9TU7943NeBL8kfv83kmXJmQ9FvDpbyBCXJUs3beFtTBWkTfnzC6u8zg9PWoqweE8z",
  "key36": "4EfDtfcvu4G6MQGRXHdf4hahMa7mCdnnR4v6H9yUfpfymP55A1LX4NJjsW6A2b7epAXfepJxnEQxYRbo2HrXToS3",
  "key37": "2dZmfAavXRgUXrhH6GY4bMqsHZnqN9ScbjtEwDamweMPbNmrV3eaeZKQonABSwDaCbdMCLoC68x53oxNY24A9UXP",
  "key38": "7tMUcXtmqaRUP3aGJzyndBihpxyp3bUpFPJazFEJtaAtwgtiTHiSsUCuYPy7zGws2YzYssZpFCqxvWftcdEHSGT",
  "key39": "3D4iGcvLoRRGQSUEEnFiJWoyDtvtYbVpQhY2eodtxgt4YKMRtuaL8ofQLGJfmf4DSbgfhEmioXJCKHhVprysjBCs",
  "key40": "3wvyjaiQyCNafzwev3ndbQKHvCr9sBiUfhnDesqH2YZjp2XUYrX1dwyZmqLYtNh6Kb5ppVEiP88PcBg8FYdrEKvv",
  "key41": "4UXx5nsZKnwCGCGas1eiZFuFemhus7FT4HjhgSrj5onfcY8CtuxZ9mjfsiZx9sawp6iQoqjAngAmBwHvzfdScmSQ",
  "key42": "FCtvSNDmSwCk3pBiDHWgKLwNSbSeTGMw5rMUUCj4RUcJxtHRi98jcoNg5hXAQE467m5wfKE6pXA9vs5AMm7aAow",
  "key43": "2PfByN6mbF4k3a3bnkVTDNG426q7N8YvXdLHqDngsXJeSfjQwQyJWhsbmvNKPZsDPRjEKsK9gtoURE8YLd3r76F",
  "key44": "4fwnA19HfQUJHyesN5wSUerR2VE9aKt48guP2bcqBkYS4i4eVdR58niCffBXLNkrF5BkDn4TqrQYTvwxS2W6zzaE",
  "key45": "2BzkDcbiGXHG6Y6RoJC4PEV4Syot953ZMYz1tz2FH9pRnDcyKZ3SihA7sp7ij6oxQhMByFM72aUPrvLzh4nMZfHs"
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
