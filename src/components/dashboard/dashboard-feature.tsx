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
    "48xX1MUQn3SwnSSnuRC39Mz4CkeZie1aeF2BN35tSTRaDiGAmdT8usao4enBex69H4KZxDnQ88kPS2FF7dHdwL9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpfKqVkWtWicuKnDRSpRJH9D8aMFVUbezmBfH6cLFWjNDXN4pGcC2nvGmuVvPajN1Z8hVLVdzp7xoKxK9jceaUW",
  "key1": "4mjuk1BENFaksjXYp1Q6BZ22uuTNTMmFU829vE5kXKffdUiSCqv3JTYEg5a2yFsYgrkeWDRD2SrvGKK3prCs45nw",
  "key2": "5KsfUe7zSdb8G7Zw7Ez7qHPjgcGN7PuaQ84ukyFSH76iwUTjKN9Gzt2eC8XVYyKSQzThzNRJjKYD7nWkco38QnMH",
  "key3": "xGwEDTXm7q6deLunNMhX5gZXKL3NEb1JCsr9swKq3cwLSPJPnxMPrMkKJz9sSdNnhcb2aZk8a8k439HEKnTB3VG",
  "key4": "5r3ZxTcxNLeESSN545jdHby9M1bWjGRJ5WHgMByuG75gKijmHxa2dvrXJRbB9bnNvfN4g7ZjWWW1wgwDZAddfGZQ",
  "key5": "5aAZwthvUf4EP24TUq6a7x8kxFbDeEG8QRJ7CBBvdp6MnZrW6zEwJGSS67ZajZCNUkMtmxmWxCUrfThKSVJf4QDS",
  "key6": "2UwytTxg4djpA71JDAs4FkFDCf12K4Cp7qEcGFfgAB1jCpytYtoLJF5aRtFTGvQP1nittS99e7VW6Pj4bhRBsT7Z",
  "key7": "4vHGqEB6eH3rQ9bNSxRNi5r2fT15CAhwrBHLFT3zhLAvpr8eez2d9i3RZEgYRdhQNGJrFjTu1mUTAin3bcg7kESY",
  "key8": "g4FnPNTNee3gSDMBY5tCVA8HtXjtjwVvXgUjk69JMrpaqNkHj9Lu7HHTWBFTC1ozXWc9bhuFv5wVjQC2eCkzPE9",
  "key9": "1SKMt31kiP8ajksKtMMgMVsarhZg7bfTBCuQ6yrQ8VNXupvi6N176nokLyVNKE1ocT1APx17vnyBKfUozwU9g4j",
  "key10": "3KRPqZ51c3USqZwahUVGUWsxVPgbd8FZ2b4YQ5G9u8fBcas4rPL83JYPURBp9ooxfrhL92Bgj868zySK4JKWyLQj",
  "key11": "5NpTH7KQ5qsJGWNqc2X4TxURwQH1suh9JLumFuy4tkP73pWx2cT5MCKtwGAfVgJJYabXHkc7LyF7zbc9LmAWoqY7",
  "key12": "3hE9gNCCuQrkqAi9CcqBLf3hcUNgopu2uZeUBuRaK8fVNTwMTtKAic8WfQXE49Y72oTSagrCKpqu4VKsypkZyE8C",
  "key13": "2gsAXxLFMdkhr6Ro9uF9S27t4Xsug1PDESiEtHJzS5dPkFKMYhH6FkNyFWezZcoV3VBwNNsj14sLgVVJ1swVfJ42",
  "key14": "iys4g1zNdhqYRsqPo5tHk3MYY3ds1fzBctWYZ2V2fDW8i9M5ERKFfbaxb9sPsTW7U7ogs5FRkHeHLcKpxwgboFo",
  "key15": "s52FB42XffnTHJiSRtbpic2j51zVhvfY38XRjdmUtwGa3RcWqfZQ3W82g9E37YyS8dW4u2kTypu9C5KT8NHowiJ",
  "key16": "2YvVJBxj9XYNnFwodrfX6skxS2YNd5Jr9xXU2e7wA9agkTKpAbNpt8vTS1hTH49WZVxGj6tXwNCeMghz6bY7DEkU",
  "key17": "4fU9mr3K6rcSgQd3xkbHJZ7RDHDYVeaCpvgGfdoBnMrcbN6nRWr8XNHtW9N57HFwhN92CScsSKikA6oGXm1bKRit",
  "key18": "inRa1qoCDTcM6uSpkpoqj34ZUbbkJH459ud2oneB2t33Fa2ajnJ71uTTZUjunmngy3PRWTP2rPSqQh2fjtgo3zr",
  "key19": "39By8Ju53e2AQXBA9XZiraoSL81xVkdTnpRB3GoeKDB5zQyK4fvZo7Kk4uoJU3fvckVV17DYjhBw8FpMSvAnFxed",
  "key20": "3DAVHxPv9sgRw4HZZtdd5QcdBC2bkLnndGA2rNqmTri1QXdpbHyqZ4B8d7R95VYQcnhibKx2AykwnawBfKozr7G8",
  "key21": "4giFoAomQomNQj6hw2rvp69xRnWZCUfvmoTxTfgE5MF7gA5jYRvhmUHbmEtXizmWdV8sQmUZaFYBC9wNE1Pnk1dz",
  "key22": "5nX4BWS16wWGCpfT6PqntajCbTTxyoqXv51FqyaZZNfWmDPp8TbKbvWxM3AwmGsa5MSGmewQ2HRMQZq8oXJWMz2W",
  "key23": "489nCbVeTBXiUhZnQZCY3kTJyn9wGb3YFNxpMdTLB7LxPf1XyRKCQRf8wD4nae2urPyBt7BAAaejj2emKSNUvSvJ",
  "key24": "J5gukv9GMuSHCAi6BQXhofhUWq1HR3jZkTA1ykrGb2cTz186yjCNTtiYSzN8CBAdg3LSVj3qRhfVcR5pgaxp3Cd",
  "key25": "2KqoBtNiQECt3nGgeHEVTusGVU83Qcw42UAFFBNHm8bXnFRS4uASJEmi8VPTCyRMqJeygbfh4bKQVthcctwy4J7L",
  "key26": "46xe9dogy1jExR4PusPo3orKuMtFGfVq2ddL7Za3E5F3yqYAsCfDVPzqLi7Ep23q18nXjc1BoD5X9RfTBGrWYNnN",
  "key27": "2AnAEe9VYtzNc5yoXMwPn29JZCPXq5rFWBj43pS3q5vruXgtby28A1Ct7Ye67wLCf5S5NsyEpQtDMbUGXnmptnBd",
  "key28": "4yk2tGvAmhMyEBJ2LE95Bhy1BwixykPVPiGyKCac4yNz2JSETh6pvTSaLV62aBxhsxVma9xgVRQWxWAHFCu97Kth",
  "key29": "5i7RbRVBtKhgki45cN4f3guebKkZTDanvffmq16mHo5eTV9mD8TRQzGRAVDxdkaNdLJajPSQwftYfyaWLzYgRyGX",
  "key30": "3EVWJ5sfYy8k87jka3jyLrPjDUXb6MatK2cUEvYpWtCXXTXskLvC7TPZ47ZCm9FBTrC7rngL4NFEwRj2Bpa9GmG5",
  "key31": "64tAaiyAonKLuUehYTKbFb2WZe8GKnqKJwXaCu3hjixoKYhenpayoMqzsjD4g9vUxCTLFPNSCSEyiDJy6TAcsHqB",
  "key32": "2YK8XcNBXXqzHENGT1EL96Bq1gcxHSCXSkFEcqzDoNe7ziLdhUDx7N6LyNxZvh9qX23APJzPTiZyheMYTos9bkF2",
  "key33": "644aPCk9vNn35qps8zihcXeacrMzoqZ4LUMP4qSCr1a4X6HnhjVwknHYu3wAQ5tCKw9JXZBGLMuSPbEsfyU7EDq9",
  "key34": "5mzrtq3sbEmKTqm47PunnbzKFFJXnAZf11SDyLKRGe3t1EY5aYswdusaL1DAhGKHbiap228RFzU5t6NHS3VRUUYq",
  "key35": "6toU69y8HhLBb3ecHcey9yBHNCSerrvsQ8N1J8pvbqCxvqr5V1MhbDvKeJQN9aMF8CboeDeREFK3Uwvof9BzULU",
  "key36": "6TBYqVF4viKtggJT2km6g6krnY43JEe43D2My9pLJzvxVcnuo4NT5uW9FQq26NqhY1SLT49EUgmQBQCd4ALQmNm",
  "key37": "4pVT2RLHUDA4DdtbwHA5P9rcoHNKXjG97AuiC1xmrEnHV9jFc9uK1VmNEcMab1FWvqE7Q3Kxt8nfsi6EQwyeDHcG",
  "key38": "3xJ5Yz3XpXtvJkd9kUNLZf155PvikzKEA9FyzeLjxdRj4tSdtcfrm6E7xWceMiAgcEVvYE6NdW6r4K7pGSQRKyEW"
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
