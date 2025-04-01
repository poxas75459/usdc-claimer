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
    "3BFUCe9KhPfDLLf5Mc6sVfiqrJLbMSHSz7oxUgRUnwV3ruGszjDezWDGipTmXn2ZXXLcGbqc1v93XWWvcTHGbKuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e35oih4GXhXGoKaKtSYWqQzwYzc86NkCYVSeGEqiNCrPPc9YCmxDhhXDvev71e3qEnMrtoh9tufx27uaU9uG5ur",
  "key1": "hBJe7Zxdga4HDzB5hxvCmMwD2kmKzMmsx3k8rHGDSqxjLV4yNCnBgnA6pLHndWDPzzGkfGqeVAZ2bbpDL3phctn",
  "key2": "4CUS2CRC5B77NoAKJUPuv2zM2RQfwQybHFsfXepp2mk9tUaXVSkArpvo55RfBzDEPTKsP2YbpZLy2GpNKXXX5iE1",
  "key3": "32i35xqi1t6CXMoZGg314u2EdfREPYZ38D4rFbHk5GzpPRzBgqzS7ToXMt6XUpDC82UJpcfjmeNWv9qF3fveHCD5",
  "key4": "5RCRqWC6S8K7wj9i5ha8oa7dSrHoX7gxA7eQT9cjsxBEJfk82BTwdxVaKdJQg5f2GYttov6ZZD6ZdQEZ8mf5apnt",
  "key5": "472D1gks7ga2k1GEJiv4bXwkfqLyYd5NjQpVKrHw5essquYPkaYgKDy43AMKmuRJhhfPfzANLsUNZ6jwNhRRK9P4",
  "key6": "37JDpX9rTfLnE4tcxQ7kGCtA87qpXM8AQQEboyyTuZfH3Y1qqmYRK3CCDy13tiWjSvbWGFtTdWjtyVnsYa5i1Nuu",
  "key7": "279fcUAh6E8rto5S3k1tqhuQARYwoFQ3n79a3dLo78XQKwZ9H2KuhAcpjuauwtX85LZNJJxZCsU313L5swaKLVBw",
  "key8": "2ZeEjG9m1ETyw1aJ5YhZ1pZFL7qLj6qTWHEHmWMae82pHTzZj1DzHtXTiuqe4K8tyKrCCkEZoUoGjbHLZhwVDikr",
  "key9": "dd2JBQnZckKj8FRQ1nU89HFnGocQGy9DpNeobohEvUgHftSoRjAY4oVpGXUYYPtBbeWPPvxmxunMwGFkHC9PJNU",
  "key10": "2nuCGGUq7VNRrGa3S59aPsmWVbh9BWb18E6d5xgdXPgBAkVGzM8GqkCwBDLw9txynrc9DVpPbqerHJupQ9LHEVDR",
  "key11": "5tfe6E4AFEL67JzCxpbfYpEdKMkwyRbx6t7c57yCkdBvbSBteMB6c6vveqFWfHPygZx5J3GzPe35QNMZXEcEQ9V9",
  "key12": "61JN7GVZ8NGpb8VBwnShvNDPmSMeuAmYa3CbT3DrX4vJ2SAf1WStVskV5UjmSwjRdSYpJYHg6vysYmfCdG4fazJp",
  "key13": "NKhyXPNThBKgWdASo8be5xJmWMdwKLvUFLgU6VmDUy59x7UMSxSecga27SPSJjQS4rL3vorVxsG2R33c9Yp4nKJ",
  "key14": "jr8owa5WhN5mhHuiq1vEuqAWoPhtVBJFWzexRDCfwtjXskau1AVkdXkfkzJzmVKYPw9y1pn4j5MMBz25DudZoBx",
  "key15": "ntawt6m4BW5mDbqGT5EyV5S4vNBbnkek6422GxEtDPbfbayGgcpTHcMqD7ajzDX7CUd6inkwSBQQeHhnUXDUJtU",
  "key16": "45MW8ywyGwKsgQKv6G5EAwMvbkPTWLqZEAmEyLn8DP97Y3Fai2jkpsGMYiWu3xcqsmFLokfntmoGf5UZrHU7zDwt",
  "key17": "56A3UuEpvt4W6XuDWF6y6hwBg59oQqSrywR5Aw2UkvEx8x6HVnnfhUxwkTMHPwKUUFE5zG8znKdQbXy9d3oePgEN",
  "key18": "22s1PPtKR9iRfx8XpSRGSGx1QHTuiycTQBABwEEM9SupALV8MmioTAU4TbjPiuKJapE4rHBf3y88xxRua7JyuTR1",
  "key19": "rq1upYipRwMHTYuRnXujc7PjM65Qh5cyk4FgpedVrzPQMcSKXueydbqubZ4AGQURudcoYK5HgFFdEJgUfytDrXb",
  "key20": "4Anq7kqNeQMYFH1CNLYfZypLaFs7chd9PUp3MB7wFXe2WaL3aWtGewDcANR4mqru5AduQpba8HX4L72536FiEqv3",
  "key21": "4PjxziKizVeGzJJXgFSNkPeLqnNrUxYMxnKWPBKH8DS9zyizefTeunhURAVJuE8RULRvr7YCCQuf4nXYAxk6QyQc",
  "key22": "4DKyCZWtVqBHwcK7PaB9YFnodS4HGb2jgRAspiDsP1qUxz9M6fV27qvjd3dVb73iKdxj8ZuACvaBj4Vavkv1NBf",
  "key23": "4MWj8wgP1C122N3f9VzrNyLiKBJko8uUzzsVuew3Zo7dYbMHsBVGQkNgPPsz3eQ1j3iDQ3AAgeSHGtjNwjKT6rK1",
  "key24": "5wriw6Cc7m5wPx1VDa1Jq2BzXtKQDkcWRW7kfjaiCoqfNuLUM4twmXFPk7ge1naEsyqv1w5PJTBDy4ozsTk7jUZ",
  "key25": "2Gw4jXjyh1EnLnPzLBLeHAoEzmuW9QfSLD7qy4jPEwqVqJRTz3B8hKpNt9Jg3fPuTYf7bHV7EEYDDheegkYjATBs",
  "key26": "2SnU49gURSRyYDDHLYucVLV1JmeRELE5pVGurx68DyxP2LSxL6cmUYPL3388Pduw2rZRMHXf9Hkfy7TE19vCcpVr",
  "key27": "2QvVfxwW6jiXsxWmpHT4N3VztKgMQwSD18FstUeYemE6dxkUcegA7pTsmkcK4AJSJyJFkKtNAdujzBUe2i3Y67YZ",
  "key28": "RMT64bBEKhybuMdVRubGaeUTGUptgV6AW45dQw85wLA3R9GRqY78PDZNPFjHf3BnR1GsD11cURysqLtowMBFgEr",
  "key29": "2rWsVQsorehQw6KRcwvuMwauzSXp1qQ9JgAadhjejy2jDzb3hTfZoYtmQ7JBHqqEwV2MvJRtu82pXV5VhPDfBz4U",
  "key30": "5yA1DuAAGAFwBtDeKBviWvPL3uVD4cpm3h6rYd96zPpunaqz4hLpYYeMia3DMQtp1MgK5SSu85eg9u8Lw5Y3JJ8g",
  "key31": "31n93Uuf2RTmCbJy7sRNXb7tAftvMzx9QJ77WBvauTHUyNEHXtsNG75M7RtQFAyi9JkG83u4amTg72ivE8u2jSyV",
  "key32": "3tG8KWCUwVSu1Qoc3bSRt6H7qqbuNguBNSDspgy4yEFonjG6V3yirB9KSYwGWj2DsCty5Kk4SLvony1Tv2QGjx7D",
  "key33": "37taTKXW5gEhKC8hAd36cP7qKpwhCwSvf5dzLRAM2R5fAW4jVaR2V8yVSxd5x6Ypj3Uii9ChA3qN98AGSiB55Y5Z",
  "key34": "Eipusu2iceTwHX1Eyx9kxfzhJyhM18dvm2ktAg4mFq3qobBDtkgyR82J8zjp2CmDnzXLmCfudiHoWkSCcT8JNSz",
  "key35": "2QLRyPViqLwTMZN6ctBpNi6ir7R6YKTD1Rv1fAZCMPyFeZ7HH22BzieqKznyDLnhZQMtmhQZq93h5vJ1iX2L8fr4",
  "key36": "veRGgSTYE25f8XJzuyeknziWdAWrGDMeatf3eWRBJXgs6wzBRUQ7uCAo5GfogaJS9u1ukrGg1nnCNfEFhKPJES5",
  "key37": "5taPkExWCo2DxnR2UA9bpNXLNz5P85Vadw8XSsYCjB7jtZHsaNDHDKuDM97rf9e2W9SSrUJqdmrRw3zFSpcUFUdB",
  "key38": "4y2Q71WUdKccqPt9y2WXGvQSJsqEuyfZW7xqTFDz5e2fRRbmDEDheCfhWX9ba8gzkTAZsbNYwrNWo7e5xeLChjRB"
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
