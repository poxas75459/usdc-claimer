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
    "59SemWBgP7CyBk2XYHeXJK2rYCydA7ybLDVEsopz2Jit9WvZnBgLf3FyoUGp1H2RcAXBCXJACLTziNzrJWHG6xgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQwud3PEU8XjYANCLvBLeBK5aXk5h33fmB1wpm4gTfmhcdiZBqmMH986ivJF8s3DSVuWR7w6hwA221F67Zy9bTW",
  "key1": "2Fybc4wRaFo9LzCZBZpZxDNcSTw4ySLT2d9QWcT5vMuKbShmfZv9WkDbK75aoRN8RAQqhECdc5rVaHvCaHcYpuGe",
  "key2": "5jdTE1cnHL72aU39X6EgmjkRgVg2jZnUTjJ44rtiPBftewnGUhiXJgzKg9E3GzHGeXNJmLNnwdqQMXXs18H3W7Wq",
  "key3": "5aveWMc6yDr6dvUS3YaigcvEFFFzWtSuEJ8GmdiDkbBNgx4ZD5GYSGr1M691ohHoDPZ3BqadaUYMTUaXPP1YBU6G",
  "key4": "674RYaoKYWL67s7DdMgyPTHr9QkYagvvH5ySbj9yyUWP2CrW9NKie3vFqRSAUtXYonJoBeYT53uaTp5eE3HUSQuS",
  "key5": "5EaxqR57tuofv9XMqJYsZr7NW6fmoyY5dXeDUkxdegV3dJ3oH9g3UmNkNd9kZke9SwHuW2sQJ41fDJDiAekbDdXR",
  "key6": "22o2qSsBwjVCf6MkvnAWWeRcSSTG5XNyj7VNtXBcrvL1AsQUbufpMmbLQodjZUbUxrCxL4B5jBBdBWqrrnWdPaCK",
  "key7": "FHVUgpWSJNf1g9o1XStJgJiLdMwUFYS2pNmwmZXs1WjSEJK6BLiESaNu5aTWDxmPh7hdyPndQpBPsbdFBT876iE",
  "key8": "sXQx6x3wfvdQPpTSQ4395GUrDtW14PMJw92Uj9v4xsX9ekumFn5kmFZXnaB7o9i6Qefbbp5TXaZ4xH6vNWLWcPB",
  "key9": "6SuATaekEqZ4sE4d6RmJsUjtTxtxg7Fk5mymfsmfiryCdXH6Z16y1X6qd6brhtpY31UJ9w3ayPFSpGfzKXzc6xk",
  "key10": "34nJXLk52bxtW7izYDJPpRakjZ2Wd4u6WzhneCuPdfjQM2s7bjrP1PEQvpmtfMRm5nmRXChaeypmrfmvyC5tMEbL",
  "key11": "i5nsQxzs9pmw5DcjLFQPV5WYZwzRzc3Gmi98GgLfWiLHTtHz6G5vgfKxhVoWgQrczFX2seKyzGGHsKCJhzcxio1",
  "key12": "5UUr3wYYZhuvuwFezv5ksVxtuQhWmy3MZZEU1RBoVQcQoTB2wxWi2hz9SrytxSxcuuPe7wPk48N46GqqVNUwEcbm",
  "key13": "MgPpo4MUH9ZhkB6pRw2nK5EshXkTRS6E2HYrShAnyN3BtBEz7KjajxUkCBNZWkHfk84LBWhFnWLm4AozW7DoaVZ",
  "key14": "28mXn7tUdC8HveD16gjdfU3htuimyXzvc7B3BQTj2bhAgLvgXcADxUd9mmkJQsAXXt9Rc8zvMunURvgjdZqhhfoe",
  "key15": "Sib54QrFvs2vjfR4B1CBXkXAqWis58mB4Cw4aMZzCStvVzsmpiczXXpWvB7bW9vzN4FyuXFmDo3gTn3hDScgM85",
  "key16": "4gFhWBppn1JVuPDqXSoo7rNJdGN4JfWLM1p2qxtBRFJcrs6aPjnhy51XQkSprHP8Qv2sbingjum9qLU7KoSRieFG",
  "key17": "63kzLhYwTvVJHP78MivNgft5QhyLTh5UwZ6uWqyv49qMC36nh3xcQznt6v2uotDuqnUzPkbeCMDYYpGZRzbJwAaR",
  "key18": "5ebGGhNLr9xp4G2PcGbhu4tVq2JwYm6YQPsRmPYA32SqL18JtgRRen66jm58HbbMnVRHhXL9rFQVadRgLH8ALrmw",
  "key19": "5Jpyu5ze57RLXwoJ7FWqtxzf5mjgumRDY7t5XDaByd9feaiZuR27BTEPfMQNC6WCQp15KpDCXYfWMq4RrS9pxAyZ",
  "key20": "3PhYgnaYpC34WxWmNKGM2YP5aq58bVvj8ecF8Y6vMAMWEqpkexcjqW5nQyJnhyyJw7sDFo1L3zviwZ9bryv8dmQh",
  "key21": "4Q6EViH4NSkDbHW1HNSiTy4SxAMiLVWuJK3taQZPVfggp3sXhnBkcKYV45RiFEFdn1JGo5agX5efxUyXPEW8LQxG",
  "key22": "4MoNk989LojkKfyYaSXjBnsYxUxZ25WDaXVJSLC1cSfoRN22SzNr3RC9NfeiA7odSoGZjBvyHMFXkGweGva5dbWw",
  "key23": "5niYWtXPRm4eNNG7sbXLzgoK3633Sph6CvaGPb94u8fqqzXkvZu4iKgV4hcpMkg2RFtBwNHiumAM9kCZ1f373PFS",
  "key24": "39dvcX5JYwsbaxfD63PMEhMktdzrS7H7jBMy7nvjqSpSeUwck7CP8qnXHRBjUsYbaSP5y3cLQY4PCSypYEpts4hE",
  "key25": "2GwfR6FN8UMbAvghKceSERpxSW9ftdw9aoTzreoQ5D3md1cyVjEjvuyY79AWik2ePD4sVCVTatjwGaMQ1eJCWcx3",
  "key26": "UmK6VTQAuGRMdmbnDGaBb8t68EWKS7GwVjkttX3hpjND32hfPGnbVjXi3AUUQCDcCFfEoKmbQkrG6JJZ5AghZMZ",
  "key27": "2H5MiDxuqwGWMigE7WDgxBkVTyN2iyjJUYo6Zk9iXfK8e1Apg6jDyiMW7vq8jW2vggJfSdRPXjKzau1hU2HYMemS",
  "key28": "2XmE6wBwvv1G8ieSzdebcWeAeU3QH89SRdBudHibb7nGE2oXJLXMzWQacnWxTXEDoZyMFPBYn35ragqceaPcco9E"
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
