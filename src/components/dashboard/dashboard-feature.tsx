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
    "2gA8HXew6fPy9pLnvEarHY7zxGHz3fXLoBC2sG1n91jpGCkEftcU9mnKcqNbDh23WiGV8NXAFBXzVzugqbBZJC6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dE55TChE8E2HNo7fh3V2NYneNC2m93HVAaSk6v5Web5pQJJ16Bn41EcpvXpU1Xpu8D6wKLDC4HtKcF4pPgvNjVa",
  "key1": "5Fo64byxisGhZ6XNqrhFxWUsztdE9vXg3D2BdiwUm2JWGXkzn91mJS23hJ5sPfHzLCKuvaTQe8k8zJdmTQ7SeoJE",
  "key2": "2YaHY1eC5TR1MrMd5FQs35eds2RrwnmBL5KCu6prnyEHvcqcHtkRwz2DBVnbW8f4BmowhiPMKS5pfYRGWt2ShukV",
  "key3": "418QqfgxtgTEVcDiwNwDouVSkwB6s5Vk5barhPafqurYkUQkfDrjKqoYLoLaiEB3vxQ1BcQFQvtt59Vj8kTGYZoD",
  "key4": "zaVfatEujRJp4VhaD37zWAU23HyhgqSzY8QQftULF6cj6swsayaKHQMz5XR9vf3ZEscnbKvndxtVYiNZD96NM4s",
  "key5": "2NHR6mVtBukYoYcG76erxCBa3rcasFPxxYVVYx2BtdqRhUCZhL6kodiytdu6WYENMHChtqTmETSbxJ1rMZP1tbgr",
  "key6": "3tV4hbhkmjLPg8oHPkwTMNmJAFbNZDoD4Z5rcnGnBHsfbmkJkZyRNTQ8SZvzwumbLxy8Pgnmg94qNabQBdHnZYrN",
  "key7": "Bjiz8f9LZRSkcoSsZ8CdCFBqXhWkeL9EJ9D9e4k3ZZkKhfutxzTC69FCpGLmWCqpRUBuhZDfqtusjj4ucYxxHmq",
  "key8": "4xXtjdka7zSALwBNnoSJmC7nWGioUN2XwMeebpcSBHeJEJ4o71FzCnTi8ongnRhGxMESgjXhnSdPTVHKYviLZ6V4",
  "key9": "4QMvi9t4EgQtCud7CHcenmsvzHShJJ2GCwSGELuKXD1nchMbYmfHr1wNrDzmvBsBnJ2hacJQR8Kds5MiUpptvXH9",
  "key10": "2TA3wGuvT13rsdSJ2AHb8bL1q9JwikA3fLjzWdhnJjqomYr4wYauHEefu27rqJEino1AsJnxYqmcxofx1LJ7uXih",
  "key11": "32PQFfbWjgKXLuq1zbGkVWGk27AmRDAuTGyE75v8jm2cDVdVSKkhWVg4ks3N4qTzeQ4CecHLvFLgWykQMjNZhgJe",
  "key12": "2EeFYgZNE8VGb6jdQPdLy71b4qqY6ad6Stm8QNXscmSYine7iDtnyKbCYxFsLSbfRi7Vu97orJWVjhMWS14ebfqv",
  "key13": "625kL4vrM4vLnQ7hMeDUsJDatWfknnBSn4cG1a9vh3bvCtgh3ZdjH2qUBzakCWLu9y2eisyAgH5wtJ48Uh2sp37k",
  "key14": "6a4WjzYCCmVC24Uv2GfXpaBLzbTyoYCxngAVtDEd5DHpmuZq4xG67kh3c9gbU8xjzTomPCzuAPA5PTnpcASrPBo",
  "key15": "5Z68RaZMzmPFzddaLRsewP1QE7vEYoRiNqR43qE2RcTEv2JPxK1gdPC6Ft92AJZ65Kk88wjWVzACqMdqN2ykMm9n",
  "key16": "KojJHCdpGqTtaSaYHgNuKLGX8spM7QN9MwKPwvUgjFZM7qZdojEibcJpUL3YYRGvn4jmQ4pzgwHMFCX8kxgnFAb",
  "key17": "oWamAnwSnzLaMdTeJfBSQqbWMmFZ7DsERKhnaFVc262myRuJ76n3yp7gXTey7oPEA6LWWX3rT5QNSHaqKfT9qnY",
  "key18": "3DSgJ5BBLNU6vSUyP1mZDKosWQhrY2NvJJ85zFoiPSxvSGCnZF4oiHiaY8TeSSwVRdiG2R4JAYJtG3fYPteC1xMi",
  "key19": "55Ciy76es82HNZ3hEnbsC11VtyUx4sKrie1cJSki1z2MXRnS9YP2cmpnTvnVKXXDDYxPaVuhxHcv6DPkiPBk13mg",
  "key20": "24xpS9TGa9t7h4vG2srd4vYLVQ5i6h8NKBmvvhs1t1mPgA6589MQyXAijKyBLg7kRKyKXDnSiua8gxXPQrmsiDy2",
  "key21": "4nRhRoYZVYPWC4cYLDnsjHAr7kb9UsUFpb38HdqUywCPa4QdjrEaBATXwN2k3wBXm59TngcnehHW2dyi81gJZqpr",
  "key22": "3xh1VUSTpinMki7LF3Q15Z3mdTfXS7PMqPjnWafraGXhtMxuGFPH3ZhzCeqfE1kKY3mwHtYYU4JDJCzBJgZh94tm",
  "key23": "5h7LTdbhfrD3nG6MFwpRgr21TdqJw2CpBbqimGTPoVg1freidYL4zLYmtG9z6QBk4XMz1LCWUHaDx4fy6rWk77yp",
  "key24": "2hjcM5aU2FdTqFSdwai6VmY55yEZkhcaMAe5ACGPUYW3VSY7L2wUyqQ6614yeG9wso3QTkkWWLjogDfRmjNbSEfP",
  "key25": "45swduFpDPQ7WffCTPwn1MdDEb7qX2eBBMLoh1jG2YwzQUyrHEubvTd5G4SzjK6jnmvYeaFVzuxJkR65hWd8jCc8",
  "key26": "2FFEaj2HTrztmjwSeM8MMzCSPaCHFqhmEJdRC9ViuQNg9E3M876Gwu2Prf6mNP83W5hw6K9DEBBBzyXXv3rJUhGK",
  "key27": "EjJALLAjAgPy8ZxnAiUyXRzfGnreihLhPSaLAaaBshb5amB7cgf54tVp9WDn6JAPceyjxaAcKeUuPWU5gUiukjs",
  "key28": "3MUzEM9Cozg8nuQbALTm7nNWzrLYv3BemdLhtsMawcTNfUnNouUZHhAmvtRkLB6BpQVZNVnKVv43CKE7kHPrPkWQ",
  "key29": "4pBzEbhEonvbM4weCFvDJo13CdtnGHcZfj9nbZNYSknPGQvDXJM19dibSx8kNzMzAVLjqVhnhW8ZGeoGHpNTamBM",
  "key30": "c9oaNxU3JWWQxPBqEgy3waGESaxqWPww1rcbVepMpQJqYkayakUqUkKSCzoSvtRFmsziMjLr42s5vLHiGo8sPUH",
  "key31": "617CyGW7PdV9EjXs5Si1ayGqVXTHzvjZ2xMZVBWHoZTwR2f8yBTpySepuWYrBvPp9tvWzkUCx4Pgn3hXT2Y8fuRv"
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
