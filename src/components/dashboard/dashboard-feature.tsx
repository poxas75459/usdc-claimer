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
    "3vJe3PcXBoNwF5n8UDKpY9xABotkw24MWVjTJGoTwLyhBeMAwgFRSsYq9SQRqiUkzECFG7oNDy38UsaDTqaCQkpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUcRCiDPNV1HSxGC5VP5jUpse7dJenTvEJnkRQEdkspHBEP7tttc5DXjFhRP4vbS75h9gY4qWfXF5EFdPNtKHbt",
  "key1": "4xgKGkkGiAbzzdo4nWMXhxLXAZxwZV9pYPWoewB3nji136RqoVzN1G5SMBUmzSxLPCkXuVpaJVmAbR8oCyGF4vEw",
  "key2": "4PN3XjXGiL7MAUGoVVa9MTurJmeBY6bCwThFJE1qqX8LGCsH5bB259ZWqXWe5debqP5qRLFbYnhxSwSsN8zw3oz8",
  "key3": "5tGMYcLpMVt6zFjwmqEnG1Qt7M7nuEEPqxmTFsvT5wcMY79652VEJDRkGW1QUYRRmQFFBBgsT8yv4YW9PFMPRxj2",
  "key4": "5AiKuezj2WqCCVN6x3t9jdCExDzkuWu8FDFNSTceL2JWed9XfwY6NUz8HhahHCtinASfP447Ln9vKhyvdpVKoVN1",
  "key5": "3dgEgFqHhcULSsAMmnnsqq1c2KnTqnbA3nDL3FbdKvPL6bP1kwSbJfakA9W6G8YB6ev6WJyKjqKZ4cJkQqboUALX",
  "key6": "3oVXz71efzmEWfeSXTHas3VLSL9TFonXkKxYmVnnUhhsDXfxcrtwt42uGV6febu9uHhC2THS8jFB3c5vj4bdH5GU",
  "key7": "u3kUqckcSxSPPMPC2J7hikaK92n46VVjjjk2XJgemvGE3qk6gyEwospXGi1ZE1rpk3GcCYmShWW89NcTQk2BD4Y",
  "key8": "4K1Xp3GiZz8R9GmpUVh3b6a3JscV94KjktfBcqdj3zfBj4Am6aJNs3Pwu16cUcV9LpyjGxBkTqHD7V1ybt9SF6qa",
  "key9": "5J3JVZyZMje8KD8jLv9yq8WjbHCMEXG8DwVwA2YgdQpmYxPdzxyYDuyytYpUGbBX4xZ2rucAkzGWQjYT8fM1jmiT",
  "key10": "4uF7XvGt2JNwXjvPPhgmCJK1QEJZvazN7iKu8aiwjRUJpxqxfQKuPkLLDNKREg4xXmym9JoVRLwyn7tsvrAsJTM9",
  "key11": "3Zk3Wz3RhCS4fcLUyKwsKXHbf6WN7YrKNA4JC5JoX42hB1aurkkMTP6DLnqhe4kXQjPzwJp3kYvggpTJVSgK8q9A",
  "key12": "5TuT4cVHiH8bCvNFdALwiVdakKcid5cjbwYcNXR4djFkM5pKnCUeK1f3NmDF8sqLjqCMVywwzusATWofP7jguqxZ",
  "key13": "5dZXQvQm1ok5hMFshCgz9eqKmKwokUr6yRt6GDDPWL6WMTttGhR3WpeHRq83LB4htGGU6pWGXy7SjGLnrUkwaCCE",
  "key14": "2WZCqog2dKR9kHceUX3Qw8PnYc3qHt5SQKXE7Sb7PoE5jiczALT7iC8oJMztm2R7H6mc68LBUrNzv64w2n88iLqN",
  "key15": "66Eox76Kfxkv55h66gWdaGPNXdEt4omWmMXqm4YMXZSTN4ABKPRP1AnQ8K2fU5wwrF4LwFwxvLA49xvP8BMDoB76",
  "key16": "5ZNYQTitfopN8NGTjpXR4su4CxeGV5kQFbCK4DLkQyFPXAiv3xU2tSQiMgXCitmho6LST3xSuBE3dRmxfNuBU2pB",
  "key17": "ZKz1y9NKyEbJkke59qDKurSN3Jp1fZEtL9cBQDcCW3zWzoNiKkByyhL5HEx17HLFnt9yXySqHN2EfB9uBwzsGYM",
  "key18": "4Z58JZ1XQM73fEzdGJeHzLc2QTuB2hDaoaMqhiqREc2PVTHctVCiTm4wuE1FQpubbtQYfKoAPFznzx9xgX5ZaNk6",
  "key19": "5CKWkD9H1KCqt1sPNcDocfKKG9kqYWjibU3zegPQBi61r8DAD1bTguerqH9Uq4qz9PvqNdDeRWC7cDCNrRtz9RD",
  "key20": "G9jkHvVGiDdR4tZgr94n89u7FVQzhZJ7HopGw8vSJPbKHo2dBW5qqGYRbdZGs727wKuPUkHV7ZKuBQYwRHWmhPB",
  "key21": "5bUtrQnbqwrfBA29Nn4MkY7enwFMQJwMu46h93VzUuNAjG62faLuC6wei59EmeCUSkZ4nkHezGfwFAmNRNZ3nD17",
  "key22": "W3SNz9Ygtw5PAPvVapc1sq2g9WF8NZmjXvXjJjCFSiQQSXGsYEyV4kWPi9B7WVktYsQNEh5VZXkvyWYvTZn8oj6",
  "key23": "2yvCYmGJ93fndsnmEZUVK83zHXJ8oqqex5KhftuggyENudun6zDTtTLNYLomnbYZ8iUmz8RAYazBCVm8XcHGHDdm",
  "key24": "cFUxykfNxM7EHvtCXtaGWqBRt3F2CTWbbNzNfwcH55LKC8Fzmp2ysNzwa5XCJLCVWkQB54qvnBxPNDUtter9UqP",
  "key25": "wptbhEwmZKLHjj1eEXZHrRWAHSNCNkfoMMgNh8taEe83dKbtwpbLew1r9G919N4WzGPEDTpjk6tdzpG6z32Nguu"
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
