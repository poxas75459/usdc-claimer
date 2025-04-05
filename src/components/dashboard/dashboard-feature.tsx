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
    "3bcAus2k9KJeSNzqAGnyzsHSDUqZ2waJAMUHnMvLYQv5ZPgVi1i6mq11UQSwUGZ8tgTst8cC2g6yzmxqNWRYDo4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGTSPaw38qu6WRJ6BmVafi3HTXTPwBK6yjpj7Kkf4EuAgtuYazjZhzCZ9oD2rXceL8LvSPVX66SUVikp6v7ESSP",
  "key1": "xgc9CJTNvC7ovLiKxr2pr6Z6iXco6yyK92W161PCvQZv2PDCC2S1yNxV6MSgyeBoPjD3wt8664YimGQX1HfGPFU",
  "key2": "49L4erS9asaEatmgYjJYyim3dJXgY3azhywqJBoXtaVECQBBmQUsUazUe11GrmgQxqiKZZspCHL7tUV6zVbq48wi",
  "key3": "4va2p1eTmsLp45w9N5F2ie17k3RSSt2JYhTAEHfC6HhXcRMSF4aMZWZ2DsFS2L256jL9aZLexWQE1chLv32ADLjw",
  "key4": "3QiEGmSf7NK5KpXgWU78i56zaf9Jk1KfEwTjrkjDthnRE4BNwSe3kmWZFdWDbBY81NfekG7qxDE6QL2zUc4m2avg",
  "key5": "2fa7EoRkMmd6qaoR8h8rywS3rR22zt9RRjfhWaYBmd63sQb1HiMYQ5dnXjy1HSLqUoHAG4Qm9JGPav5tU8PREwBP",
  "key6": "55RBg8msNgpSsm8xdTLCfQ9U63dUTDrrBtYy2TN9kPG3RwSKznpHf3GNHmCJMTmgLYZB6NGXcvzMz62MVHxixLqP",
  "key7": "66YdiFkLhfQLNrC6FaLnhLdL5iQetN2K3M2qRxSzfhAM4yWAmKVMN9GLMTRUR1UFyTHDHMeDH4U3bhHFfSj2NTvD",
  "key8": "3tjN6duk9kovAgpzj8QZFRYBVQfdseLLHjiUUsjaNatPJDz42pk1scoUK5ya16iN6dWKbq2CHgwSMhypYaBTR3Z",
  "key9": "5JEvNoWSwv49pcAz3Vukbg4oFj2BBQzkyQibyMYWQk9UMohxbFt71vjNWzKu9i1qzksTFf8UZqmCsRMrekQGi2Zp",
  "key10": "3hUeC9cGVojoYJrNSv91qmXjWZTjGJg9GMPW9K6jowtW4eUMzqzQGRfZVrS6X3ttgUn2zgEKSycnpvgQwob3DQwQ",
  "key11": "4bhMLUDd3JHNECVsBBKTvZUvqzhmdZ8VTs6xqTD6Gk8URmTGseLHjK2Sn4MhYsMudVD9qr1R48DVdaBaFEnLCVMu",
  "key12": "43t3Kv6vpdYh5sYtYgV1hHYib42UaFmfWeF1gCymuxULfXe9SnBugdKHw8F2kkxRNGk1cE7j7tXAqcAopEYvv2ge",
  "key13": "3mir2piPUNjMYDwHvf5nnvTpRkY4mQ5R1qiREBNhaQ7yqzBnovwJad832QDSa5eFx5Nh4qtf1RVAKV1pCT2FyvXR",
  "key14": "E5ZgevuZmv9RmNR5H5WyMGBykDV8iw8cnhJu8cZzDam2DwGjJ2Vakfccr5Z7LC21wxCKJQi4zmNSmTyYQKzi6PW",
  "key15": "6buBpx2X19ESHyrJeFKkeknFjotEWGcs3acwdAF8UBhWe6VKaFSBFAkXVZt4vmaBTQSxANF5EehbNZra9PMFqpF",
  "key16": "3k1wQwJfiJBkiza3iSH2WQLBhjo88nFmjemjkM55xuvd1t55gjPA1b5e59WBAwM7Kq267mibnRH3jpPGCqiCyeJz",
  "key17": "4gjC3tib2fm9Fzqp1GNVF4aLjZSCS7Qprk4g1Cn2tvxa6gjpuLe8JciVznv8nHB62GwJJtQLMgZYRzD1atrcCfkQ",
  "key18": "3ty2jrEMZXFRcYSubuTvFZjsxgK7VmrZmCgAo6MiAY9U8VJDC8MskmM6t47cub7idXWWESxmSLPYMPStxDuEpoig",
  "key19": "HLNZkyJYAoUEUCoYMCE4p8bPCj7yB27Ui3749UZhABExfdedGYAqrG2ctH8ced93eGLxBQoJZk7J9SsCqpAU26m",
  "key20": "5sQraz6VgrfcZRysneUB7tsExjFxczS8pYnejiQXgJ477bHtxcAHopyYwheNteYaG49R8JgpT7HPt3VADueDfgYG",
  "key21": "gCvnnNFJaH2LfM9uwGjrBoj81LXd9jPtYf3yVW481skHXUQJVDEDBw2LWju5gFyUmBgybkbWZHU85JQfeeF9Ky1",
  "key22": "4JxrJZugsLCd2SwjJKD6kzvyyQw25fQJEDMrUgprobWXgdCBYPLQsoEPfrscxW5G4UpMGReqcDYV2waTzreCBGEv",
  "key23": "5zMnUsUM9MgkJNSbNTKRLexfUv66z3GmWLWB1L2yUNbmiwtnYQcf5nU1xz2GhQPCyBkKMMgijzs49idYzekmtUcN",
  "key24": "VuXRXkFZiKwnAn5TDpBgTLN6XKHQcx6rq1xqRKdoU81mHncvo6ShSRvw1HzQYRR5T1D2wfDoF5YdVtxiAq8rACe",
  "key25": "mtRbdpYpT5RkL3ovZ53Ynu65BkotJoGTAL1DsyfcSwBpWTM8wUukS8xGDjQmDNLWnETZgM4iXE5H54BnWwcQsHv",
  "key26": "2E8UjSnDrNkyMjYPhfCefB9a7dwYV8E3QQVFwa1n6Dt9PAkZ1Eu7vUHXrGrFS4uVqUkd4FJF9F8gTbJV2PhfkdMT",
  "key27": "3HxDDMuPZ4LBcA1gCyN2jdb6nz3bHLA1hQKJWTuHXku94sH98pA9CSHmaBT7yAJMWNqsNH4w6hXY6g4gQpdhVDkQ",
  "key28": "5XfC2TYqJicySEGs1QgydYVgKAj73za6z8h2VcWgZPChQHvwzsLRFS87VR162aSfoZrgLAhktKJkuLp4Fy4DrghZ",
  "key29": "rtkWLsmciB9WGivqnZXtBqeA8BdUzH1ZUqqgt87FqGDvezinaEpR5SvvbxzqVkmpSp4dQRL7gmwedaVKREmVc8Y",
  "key30": "53KagGK4GUTidpTzo4TXwmVtChtGDgkqhLZkN6JWp2vXs5CFfwat93842ZZYiPh9UF1iHCVQarvBRUN1sQ1JwL6g",
  "key31": "5jbH9ffERrtPgCqnBoYn1awVAGtgtjoaWHfvrXMHwv6Chkw5UnvcsXKJt4p3u2zzXtQCCVN3GJ3bhB5kFv2VT58q",
  "key32": "4z4wYF2eXhUKmGVqcyDsnsWJqfBmsoNcbS16JYLkxcXgNDDtDiMUTDA3S7KzPMvWzvvnU1jhFzWJYSgv44jaMVTA",
  "key33": "2W7tfhMshwtKzmKkoMZiFGyLhpg3592ESLvpF3v2kRXeZcriSPdTQx72jDwvQvCM2ngims38XgnWT3HUEQj2CApo",
  "key34": "5Zu4o5im42RCGXYFN2ZkKYV6X5iGBBba8mVxHjDi5uqGZYBooifTnKGKVNeupwr18NgNME1FTKQsG9R1VYSdv9nc",
  "key35": "5JtfB63xHz4CKD7m7gu7H8o6YnT7ZkhPEdGArHpdy9GcxrHbgkLc3MMxq2khXZabMKiUdAVgPBYwRkmbQoJHw9zf",
  "key36": "4TzQimMysL9NnD2GvBMAxYSJ44zrLQUT2P8g6cLAMbZB4vn5mpFErz56JqcYS9ky9EjkR4MM6eQAVXSNNBXqkhdr",
  "key37": "XuX77seDzhYFov7MjoEeGfVXQjLVapDTv8voUB4jxo4pQx1oRu5H8fwF8n2Y4ujzCtuKRq6KLEDpT6ocpWDT8k5",
  "key38": "35BLbJhAizszWrJrHF5XrFjgkhG1zK9jktjvksfpTK8F16zqFtPZbX37kVL2CMHH2FJSHokPbqVMr8C7HUduQURc",
  "key39": "5M6asiRNZWkH6VARmY2WeF7j6EvkMmzijFHoFhAnRnZ1TWeR3NhtLbfBh8aC9R3YHaKJ7tb39TJGPywYGx6UAxuQ",
  "key40": "5gCkxjoaxiEygtHJViYykcvHHpsXCcVEmqW3VbAt7ioTmk392fjchkGg8X1CMNH2iD4zxSq3bi4y9s152gE4rnxz",
  "key41": "2VMwioHavcvR4DX5BdZqKcT4iZjKZQgAo7B1kAsLCkNkiqzGGtDRr5xZx7Me25cGAeqsy2maXKCCKhDZRc27asZX",
  "key42": "5cqyrZ78bT3AkXD8Uicf2suDA5DyTbGdBmWADfHmEmGZtUJZnYS2Qmaz8m38F7E9K4PJw1UBbWe9bRU62YtvbWUV",
  "key43": "uuUyJgo4PvUm7FEMiihAPstCXw4LqPKXWuAPqMqabfdksScsR813rBRkGKKxn1q7cHDxEh8fyuPeqqP8dHdbA3c",
  "key44": "5b6vfm7AQVQQsJYxXWCYgnmSKCz7mzY4Q8E2tWmvp1ZTtywJdz2vMujPPq3ckPMLeghqfNiskDs6jgZ1Xf6wU3cX",
  "key45": "3be243vKDzYwVG6kKRmCWkJkLVmd1LxGXbwTjgjHMGfiLj9tNqxeijbdEtqy3eWDK5gfacxGfj5xk5j3zsF4dAg",
  "key46": "2LBRiUoQmtqDQEfmpvxwcLoBUSnWN639o4Crg6Vv3y9Vw7LaFCDTZtyxYnGcNLWyZ2k7QotCcA3CneqXiHueVxsL"
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
