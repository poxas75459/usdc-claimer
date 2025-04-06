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
    "3cZ964apCgfQimUc3HgKmNX48RBp3bqCJKdLdQQy2ociNKAaHtqxpea6RhSv7HYY4f1MZt5Lur4LYobLtVWcyZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rY84Ef8k7XvXvADXSZCuY41ueXHNTc62VrJZ8AYMu6gZih9P7E5wtwAQNf8BVKChGBRFBtPW3YQ16a462ryU32q",
  "key1": "nVbx5mCUtE9qfnKbSLcCU45xoh1ada9pFzomEf3H5HPh1NPqgbDTcpNzfes6ibEpRBdCuVLycx8JRYhc9PuQv7L",
  "key2": "5xdxCzRXuD48SvVfZJ3rDCCeb6ez6CGKQk2icsttGzHhtwmd4nz2V12b5yVBs9AhDSCqytbGi1hxCi2PTAJnSYJZ",
  "key3": "5SmKB57HeXUKdZMi2X5pcwNKCqCxTeFLhvz9zoSgrkC4kNLjaG9kyDDkaZv9cMrgxeLr1gv4jvDGRNPZRE8aRxtN",
  "key4": "43YhPzNASb3kg7syvkp19KoDfJm2UBV7DeY8Bnm4Htie3FNH4EibtnJf5dqPbUZGetEV8yuDJRmDAC5NyupwvCBX",
  "key5": "5ecWVQF64fQBce2jjLszrCnrv2G8pqFgCYVg6sZQqCdPoUpXyCAgvaSTXKrXvbyiDykn9WkMntYy15gw84g3ZCz5",
  "key6": "2etaxEtFQYAe96FWaWxJJ9gXythaQHDAsYGRpqpBUJBX9QDtodjrCX5e29ynHDXV3kRzckYFCzssJQAq16ffmwd7",
  "key7": "5U3Wuqvs5Z3M4iQd4feypvGpun38g5gXy9BwgsV498ZgFjoaZvLzp4dFkzkgK7eBnLHyJpVgvTH3nnbL9Y9BfVt8",
  "key8": "NzsFFBBRT3VnyjdFS9BkYTaawB3CYRG8wtNN6hVsuxcUSyYVJK21DAfdMNSdM8fEb9HrvB9ricQJpbXePo37Scf",
  "key9": "PWuYtjnthLzqALDGovErUG1BJdg7LwdBkgBvtnxVGeAjcfVpP9ZL99CdsV8aZNvGuH33qLwVn7K2aWGPCyNE7e2",
  "key10": "3gXfHRMso828V8uDYfB9KGT62D7u1QkiTrKEyKcPKounnQCaCb7GcEJ5gUfs6Nn9zCpDvm3KD9mpsqBNQHST6sMd",
  "key11": "63kX8SE9PQpLuHSD464VjhpJr2LVYccppMWPt22R7wKunCK9oV86ERgqHTTxzfGLaSoQgZbNYzqKRBb9f8uZGLZ2",
  "key12": "uuNZwMrw5iRYjcLwizmyvDRX1oe1AUsZ6vkrcQXTi5mhp9UR3mC7iMc9LNTRbZhUcefwa1KxMdvHt7nzeSzZopM",
  "key13": "4heAyN6k613jrLGfCZnhsRb2cbv3Z69j7Hy2it4SFH7THixcVviL5u3VxfUbcMQQRuc5dHz2eyVUyX86L1ssEi1A",
  "key14": "faBwrTTmkYJLkUkwxJUTyAMtZMDmjpPZLS2V7GF4dJNp4uY2WJMdRErTWYFnEHn4t55AeGTYY3MuTF1r7G1ucRB",
  "key15": "5jG3EepZQsSENiuWXd3CwFULM7J9MrN3R5qZr7aMT8SqR6joo52tDzYjM6QYMtCujGz6FPWK5rvBt6L9vyL7a4ue",
  "key16": "ZyFSe9kkLDDw6CrhzuJW4Zcfouf3yoGREq9sC47zsqPv5n69Un3MkF4zPXp9137WyM1y6g31pn8gQY69ewSXpGx",
  "key17": "3Vpq64NvQGgdyveKepPVBHGXDczXgS6FLcAcKQSmBuhCcKYjycft5bs4g6odHxZdgRmFnz8nA8oM5MC4Vgk2Zzfw",
  "key18": "4NKuNgZi39X8YpnueHe7AmZ56Cdtx6PryB6WmqWWcw9R8CVwu2aAdbSVYVnj8YWvPp875u8XWoVnXYnV9B7EHZR9",
  "key19": "3eZmQoyvZsAuYF4E3Fsy8tM4ATLzT7iGitFzcDHF16TBLVmaLggFjGeHDwu3pS5D2BgdATUBMJPo3kkxezR9C1Sa",
  "key20": "2s5yptSFKs9iWo9jgp8aujrM8nvvtsAFCNrn43Vz5eiaaAoQefK5Dho2A3fzZBJq9Yu1p4sjLtKURvHGwTxqHhJH",
  "key21": "2GYBdfuzjGGRxWnj1RrTXA51KvSqgKfmSAx5qmDqGyLn2SHVUfgAcdoRQoPUP81iEFQ2JVxLY739PLxTWD9Rxga8",
  "key22": "4kCA9t59mdNxfNgy2NPycENtrnLBzPsAqeBbgZfxp9J2jhip55yWw5919w2CJbP4H8UJG5w721hUQdGpcye2Fsot",
  "key23": "35tgrmLY4ThPsXWGKVKAWusDnFCGoiQsCZqcGbcoB5ymviK2yfWUfhLhc8G4gZ1gFseQkstQT8LiNQoxmkngkktm",
  "key24": "3rxjvkWbxfBHLsx533MhD9mXyxqFrtUuc6QB9RcdLp6U3nYZE7hVnmr5euuZTJWBBS3BxJpDqBeQdAiUpyqnUMrp",
  "key25": "2zMWJpY5R1vYnVj3KqntcCWzEZSDPi1Sv5JtsSz7NvKxdqQLKumb5cZVeSiAGvdD266xY8WSJegEoSe1wNKuHUtS",
  "key26": "5zqVbK9oLi7yk561hFQHvqFG3bWhMXE5Dsd2KcyctHzJhyKh5RxM6TisDxPYM3F51bMNCE8zPqF9LfR13k2EJGoN",
  "key27": "4sViSVQwy7gpxZHQquHxeCTa3WLgeXKC8jcdftj9zEd6RzEbhgRdgd9jrHuU1AJUV9mkedborzbLWVp7woB76Gd8"
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
