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
    "4r3ixDW7dZecx9oz7tLPa7Et333ZyLSrqwv6dzqMpR4fJQDzHNXFCfS5NMuo49gVUge6TkgcB39XwKKG5cdAKmGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNzwERN9L6qS2GkJqbofRekM4Y8FbmVqUP5tTjniRBpgUReoCvNcU9zcbNLi1sKCa1sBdaiBgY7aDM8axFZD7Aq",
  "key1": "4wU9vPdkpmH4s2NQcndhU1dZmhaBGWch7EBQxy3q8UnGPUQDSWPg7ebrs2FUvbj98bHPyCBiniDHkoYKzC1nU9jj",
  "key2": "3EJwJpp4rpsFbMzwUni18LYTgJPKJ6vGaLprPqKts7LJu3t5N8tEeujRafGzHTcxo43M5RAvvMXuT4zzoyhdy6rx",
  "key3": "49Xqzx4DaMph5xhknfkibjh24mXBTppU5xaC8CXpa3VdVhLkYBHcSTGXKv4vr85pxrEmeKxD6JW4jwocMEKw8hDG",
  "key4": "meDUuTq8KGUg3L115m21ykh4bdefffmzgWW4fFAZ3hSdb9XynrpxjT61uCZW8RbtxaTkDjgpoMjkCXw8gBFvrpZ",
  "key5": "5XSuBCnVrtRgWchdcvdaAx5N99h2MosN56W8Xv3XhbXoDinuwrMjKTgzsBn7zhpHWKefguAkW2aGA4We2WDXt75U",
  "key6": "5MztrHjLfqNntWEWa5npW1ZJy48e3CZshtFkQ7usrrp2Wama8KYh5Zo8teHEDEXixCnL3iYrZfUuVpWSV14db32V",
  "key7": "4zyHLxTKe1Hch5yFoURQPNmmufXzzaMBmQtQeT26HRQoHZHeEmEcZjF2x44u5QcjshZJX4cW2cdS2cK9vsN7rJvd",
  "key8": "58WLDhdY2B6dUhrMGSgJNG3fx7grBp3BwmKx19MrNGSQkNnz1pZsAac3bXk682n1eUYuWtJRRvR5USiEM7sCgbAX",
  "key9": "55qvC1omEeHsabBPCkU4At6cCzZjcWzGztvFrQ5XtTsUgumfdSxdrXps6x84817Dv3U5qrEPn7FuYE8gwv2drDzC",
  "key10": "4P5wjKoA4nBHeJZwZ2yYWWFKV8sNq34zF2sXBjqpSGBkkV6MqdKSCQkciXYMfKRCmGQY42MpCZA8444oRHwCyfiR",
  "key11": "5LTCmexWB9ocEgBZun4EA6b2BtMGXwPvFgfXBFXyvsET3khvyMF7tCuQhUffEtPfTr4MkBXagwU8QiMt92jupbGz",
  "key12": "qm31xcgLox96Pr2F9ym58pgQP2phmZEDj1VeHCURX7A5NuRn1hx5gWMeFjxo6MREv9KA25JMNnwL2MDviFuPc7Q",
  "key13": "43UsAns3N36v6heDLVUJ1ox4QDhonr8N1KVw9UtR7VMc3KwdBEhNgbMiAzugVZe3pVa4csreMUTMpNjfFz8fwZei",
  "key14": "57chcnNjtqokueRaLG1e74cZmx24MJ7u4s8knPatYiVWjqJcAtmcpMeSzBGCPa3zf4ZNENGAp5ehiJ9Gq7r91tMs",
  "key15": "DEBNw132YTCEkcCJ3V7Ac7H6f3UsHjLe1JK3yBz7Z6rEXVhpeGZbEq56XfSi6wrGZeHXYGbCFnYGHpmpBwnfk1G",
  "key16": "3N9L9Y42Xeq7f666CWGEiHrrr2e41XeTJm6WnLnPeYMcQqM1h6uWBs9zr1BXfN4toeMiZ6aChKZYMJRiecqCuvrg",
  "key17": "2NAvCiNbhiCp7QDwCVUx8c7311awU4ZmzxyvK2NBmWJRYBQ5da6XQkUXjXStQd1wqLXevm69Z92RxDgjbuGwvXnt",
  "key18": "4ZYTTVLHWRwCpXitL79uQ1KWVUiscKSbEeHK3tPRPFhjqUxLa9Z1irkivXLWEmYrCYdnb2HgRjT5cjVJJWgn5nMf",
  "key19": "3qiE2jwY9P4GLADgh5vmcwA523STVqXoL1WH3iHsntXzjBTEhBURdf5uQW5VEF95zSCeUM8rpQ4GGkCZuE6b4ysJ",
  "key20": "4dzDCQVuRJsyqGHvB4QgidRfSt96aMVdFfjpQmpVfSnaedfjEVtqorH3grTo8MpfNtLcDe8XmmyPrkECBzBNmvhS",
  "key21": "2X4GVkZq7XWGmybB4dtQ6TTtJ6axEsvkzejCJUHes5JdzgBgiPMhkY4tQUxsVWp3CyKKthnqHALLDMnL4jkS8F5i",
  "key22": "4ufQmmDZBr9ApMTHApjrwqMWtvgYk392x6nukbHrgbx4p3S5r4bTi5HMr4Zn1PTMQV4abwRu5yLqKkjPyNARrg8W",
  "key23": "4s732AeZXGroUEGjJHU8cBaw2jHy1VekDmPMgdL6WPy6LQpqJF1jYKDfaf1zSBcB2zERmjiT6QXZ7S8GNJS9K95K",
  "key24": "nB8RpcZh1pzrzCbpdhfLkgmggdziAAjEU3nkN2W9Uns9bNJ6YdKbdJiBdy1SxUSLGG4HVWmGp4fWwrgBYsgjzrZ",
  "key25": "1g5e1a9yDstHo84h8sYX8tciLRJkRRJV3UxGPAxLMxzP6gC9TE5YrWKRLqqu2NzyZyr9oiEeYyvZ98EwspCN7MF",
  "key26": "3FgLpro3GRJTL83bzrgvCRpH7zBib4u1jVPPFQyj1diEPHykyWTDDUMmbMSxdc9s2MUgsVXuYnmCv5p8mjakTgtM",
  "key27": "4paYhUKpFojTVB772YDNWyEVHwoywZfCJeT2yE2uPLjabScnuX1zBA5KSfLW6zUP4rgK91jekVpcYryvcqJ32bqm",
  "key28": "4wV53vqkZUz9jLTgEMP7sjnjW9JcN8c4HgqHTGokXigmPtYxTNawmSb5a6WUPJTynvMkct2AFu2vRzcAUKzjiP6j",
  "key29": "2y6HWe8LJR1asb5RbTenPCtsqgW5JhYciakqGv9WNzH7xVVBgPcPExXQvqnGAeBLRfFUgGUcQtSDNSeohbNfZ1AP",
  "key30": "q3BMiK7ceVHjV6t3fc5ptSKhu6SeWDLe9mxkgX4usXqinPtk1QzvC4oBKBJYSpP7ZQRArac3z6GzG7nxXyJZas3",
  "key31": "5jqFpLEabj5AFLTcr2MV1x3cNeH7LxYsfDa55dDWdxYWUwnpZyXgPnxe3wsQgNc6AheLW4z8AmAVqoTTEdCBcJ3U",
  "key32": "5srF74Ey3Swti1PFwUF1qbroJLKAcj3vFoB1P48kF1wD2gkdptV4BD6qw5VjtaPKHoqe2Jz8LBiv2Y7diGZJzXiA"
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
