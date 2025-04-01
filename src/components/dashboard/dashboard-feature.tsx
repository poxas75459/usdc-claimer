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
    "2nCV7VpW1X7wZpEVCVSBggtktGCTotq7EG4gioX8h57iof4opV5AKy6xfp4AMGnGDSevJQPwWRHvPAweUtbY2K1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mxnbv3aJBGekuaC3oMJk2kEKtwh44EWsLJhdxDvCnqd6UEdVZnTd38Tqb58cRQ4YgTZ2JU6R7tY1WDZLG1xexaP",
  "key1": "393jLRdP6hFSZDmMMgtX2yMd3d7FgX6RRAZAoNRjaU5yppRtoYpp2nEqs6tEQRkDpuKA2BHTZxw2iLaEutd9dp6r",
  "key2": "3pMaY3BMZ6CL2oVCWwUwCVxWhnUovKZwjrTUyszeTVRgXHFiLbinKaJvmJwM5mGQwzpijEZ2LRK7y1Z2XFRLM7sb",
  "key3": "3LQrbdvK98vftC32KvDUYumAeMzQaVkg7DDL8phL3Gftqq21L3QMGc3uDp98D7LZbwWjDBKcWy52GPJ1k3j4EsPq",
  "key4": "2TLEf5cKAYde7YCd2Yo9KD5D1GZMvDg7cCJg2innbiYz7fC3rgxyTQ3ktVDXuyWqf9PhAt8qBjF9ofEXLksR1osT",
  "key5": "cqsQrgT7okhncEBKZtoNwhprxnkYLuQiEvhBwTt3XnzWWAjsBw36yhbMdGcPSWMvoMo5Grr7cohipgpANF4ASRL",
  "key6": "E3HvKKZkwWacGAXawyeU9UwUrtQewFihRPidvERXMuoKDu7uPJ2mAKwRjmo51RJgSYH7vjsdKLuBFfJ1bPsiSoD",
  "key7": "29sTyFYuDxzdTKUXPQq6FWTGr2JCjxNnCgjgJDuQS8fuyA9Mx84Au55X9MroaYPBFKuEGNtZf6mVZGTzTqXXf5LF",
  "key8": "5i6SqEnZZ9Ew2DGYX97LXZQ5Swhp72Zyh5r7tWr3n9NvXY12hmEeLoSYXYhP1fabZk1nGLESmwkBZzv5Q4uCCBXb",
  "key9": "4HMA4Hnc7EwqxbDDq5ZWcrg9ubynYPH7PjX1SwidDBojyMyruBtHm26uLy2HbqFPbrdtPQmWBAoabh2UKfFfJYWB",
  "key10": "5GHie7xq6FpMqGCzBftU3euZZcEZZNxqZT8d1ypDa87Gv2v2qEUoqs3Rzv6r2teoADEVypm8EBfkWBxMQkU7HYxW",
  "key11": "4UCuLBwTUPy5kXDswYoDpCApRodQjS8TpPA4ZarqvwY6GvzFa2WqSZUDskrfbJYBxbrft3sts7vDYHxNBGBVxuWA",
  "key12": "5NccTH27db7x5HSrcEcyBPtCjmGTKi4fDq3w26imbc67SJRKv6UXJAHHx9buDHFDHH1uZyBX9RmGCKWSzdUJzH3W",
  "key13": "x5qRn6wTmdVQkNE5Weuo55U79A5YCprLduQmzsRSm9QYm4x8LReaLZ9zsbP8wvVLSGfiTPF65fbYUS8kFMUNWwH",
  "key14": "3dAD6NkjuxHvSfYsYzMBES7TrHHKM1mJ7mYcKMdmBmexXUjBsx24es4mh9vPBQJcZbHNZxpD4vE1sHB9DRiSU8da",
  "key15": "3Gak3MNR9pXDY2eQnJ7b4gXVUVp1dZZU5DmBuZbUoQQXMeUYXpFn8D1ygE6FXcR1QXGxVYh76xAXturWVZp17nLR",
  "key16": "2FTGgH6SCatyGNvsN3H3u3ZkeMo42nQzhHGbhX6h9wfAyJYH3yUWYjZ2nia9pFERdgDF2jBG8itWzHg8vBb1K1d1",
  "key17": "AgVtDZ1yvMHuu5XUnTpf6zFLL7xrb1P1NPV3FrHEeoRSqrzjmyLrMwU6iXMEVS9umkJ6nRfzkJY3L1bc1ti3sG6",
  "key18": "38rTrQcjLPcm7oD3pdeL2JEiiYuWzvhP8FnYLRTbRMn8Woesq4GKoWdW3V4PCFfSrBcsM86v5DmitvbUUPpR6eis",
  "key19": "NSiJeXqLVuozQjA1DGnyL6Y5Q9xCdjiBMCK2M1uyx9nqGqokHNRReGCDqBPSPKymmLy4wAzej7p9yWsHvti5uNW",
  "key20": "r6JKFtyCra9vU4TMXw5QBL2pL29KpVzda4tj6RqFwo4ukALqRXpH4Wb2v7wYgdVynqhjB9a6SmEdBsvv3738m6A",
  "key21": "4nTubzmJzMoUBzpJcJgQZGSmmBxDohPMbRKpKbn7Vc2LjLg3DhevTW6L6uBt3NsKG3NtMKM6pGmTBoM1Z7XA2QT3",
  "key22": "5KsZdjNeRskjweos3NKygKHxPG7ZfYjdQxjSy1AU34AGNqsxwvxfBAaqeyER4fMALBpEKhuo9Vg33jZ2hAumwLw8",
  "key23": "5Ujsyw7fzsPFvSLg9ApXopVtUe3BMVzHSp5ihx6shWKZrjrhVnuAdtcnjrHodEFAu6WP2BMKhFyxsqE16YRdpYXf",
  "key24": "3GCp9gPhhSJBZLdqwAes71jU8dxSycPZ3Dxi3VneLmqRVe9T2Rp2Y9CfkavtzWjgvwDmDkVk9sVTVr5Vvmb4AXMQ",
  "key25": "fXFH82SrNpdaK9T1aYAHP8ConoaZdJjny4k5rqzdwZ78miJZgmEumWg1bVgj2tWKb2Uvhqq1xc7jPDsAWuAvfCg",
  "key26": "wZmXQugeg9rmLDbdjRXFZQPXxaaSLgURxt2kQg3D8QQNX3HJTcyvFM2zc8kNWpsDJ33RK7AjH1dDud53MorMehf",
  "key27": "3AY7GDiSzBgDJHvXBig5yhX5UMdJYqLNgPYPsWah4Je7v17WLhiEFoqiK28MPcYNTMprJiHAZBaXkNLxp4pYhJQA",
  "key28": "62c3gKzouJPKTMaCF4reo7dMKYA1ucCCAkztw4tqfhY5QKRsWLuqfU1fhVZgpogYgYZdo5Buf8PwyxzHJJRq9PJF",
  "key29": "3f3aWpzMBZ2ZLjyHEtYG47bq2ZPVVTxgPGnh5FagPtwqquum2HPMHQpQeSzzra5Bdr6FGvavgBCMpWb5u9cHJfkK",
  "key30": "5QQ3UvuGLdW8d8jGmoKysQwP2pdBtmBS88AS5DvZ1on5NAkF5NeitEKs5z3SNRXRPNydJyEybUesrj8kULyTm7s1",
  "key31": "4fWia6i3m9iDTNJBQRXhJiwjRx1k8xxK7w9PLA5s7iCrNWXjZZNLE3yZ4DqRHLM7Xw1uMWUVQQqCt7ut11y7BAWz",
  "key32": "5wDP4XsM5u3321sn2NpA6bPXyPV3BhEL5irsD2teN4UFW8Xi4pTSdNhNJ7izkgogXcYfh4FVkEoLkQF8zyeMmdt"
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
