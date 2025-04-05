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
    "tLzg48e9ckzk4cu53f4qQskQXKiUbktfiRPy9WpxgyLLv2QNeoFf6ZVcGj5DYW39nn9xNWF9kK6xFBwMMMvXmyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZDCpUCzVfiYcVZbESqPXpsqPhQe54BBhk8CDjQphXtXLpxW9NnQkG3XfxXQpUPy3317ZESv1sn62iBdrcT1Kys",
  "key1": "4rwBHcM2bSAtWFhkjdAtw8jL5inNFz3UwkiyfE9SDSFMq6hXCZvbVFhxHXnSDRJHoymHLNe8h6aJ7y95MH8V4Qn5",
  "key2": "7rhvCX8qahNJ9xyXM2deiydw8R7JpDAdvWhbau65WZnNjxPMG8B7R6AKWpK1BaReY43tPB9EX6oBRXcF8K3mYjF",
  "key3": "3vG1z3f53CqiVd2Z6qaFJnS2AZRQZXM3ddJaPcHi7RkJAyGqhahXV3x2MYR2PTDKSe7MRzNbgvQ6tPAzgLJEHmp6",
  "key4": "5rq4kHUeYetJ4QUbsAb4BPFnnDNAHWbyQudCtrKobutT9oZHyD5oLN58hoAy1bJVkzLTzK55dBq1WveoZDhyHmmq",
  "key5": "4SBYykThLm95BfBcYkq3S7daSFNkQ4oj1t4at99eaBNt6Dbmis2UGeYDPFNAzAmwY6QYwrUda7GDDsohrUGhvTNt",
  "key6": "3JviDkmkrbWCASS9UvAYk4BSXJUqCLFxJ5ct6ke8aRpEdgau6UHJZT4a4okAPp2naAEBAQpi4f32AoeXyPh3w8Db",
  "key7": "2m7G1DzcDhy2D4aopaeKmA2txWvh9BFsNtJVdY4ZebKXP44ncgUU1VmfuR4Kb5kgJQz73yS18teAnQm8VYr2q2th",
  "key8": "idbKZ6Sp74vYif7DGG7EfeEujokQsZs1vhvVsxT84BgGMtkzj5ShYa7ZHFKJPBqsiaST7hsh9a7dYhWKN1RDttq",
  "key9": "52oBBLZ5y1NZwpkniRYwmYjUY37AsVjmgk99i47MMn9P53z3M1EfMGdMPqu9xC4eMjuzdu916Nmg6y5LDLywjHGr",
  "key10": "3UxsGuMbuLFtNvqPrxnpae6rdLiqaWjkPFw5fYE967bP91vxwte276jif7BuKCmUzUfoGGBZneV7u75XYNKbtZ9D",
  "key11": "B3MsnEci3k3xqkHMzj9VD28SXyR9BGnsxG5uR3W7fZfG2u6LAnbD5iJxgjNQc1sRJ9F9EyNgdwRALqK9NvG1NX2",
  "key12": "5N2P4mjs8ny8sv7yMecjsv5xLbwQ7DXVwwVvWMY9WBXnXMBiqZMnT1ySsUnsXR88a7Us6x7qSwTJA3ZQ1aEiNaN5",
  "key13": "VMRseRbkJXURhuZvftYV2fuE6FQ1B1tHvVteTTJRb4kWPT9NXvhbb7j6np9anTcz4ntM5VkoawoJEJjWNMyVVBE",
  "key14": "2cBvreqqe4jSEV4nBAykbGrNdsusLEsJ8eRArTZDoNvSSSKd3E3bAq7Yx2BHKE5hM3gkFN3BtMJKw4rJMx7YtYDF",
  "key15": "9FJ7iEbNjr1KBNYp7c4vRyuFVPtfRsyuqZDtJitfNoPj7asKjScot7Z8Zu3Bp92rugbhdY6MVtuHscprq7G7UcV",
  "key16": "4KpggkjVMsksgb2wBBTC3a1HrvxMqH7v4xUYYRomYTw1K9iPeBi1wtDYLDLpaXPogGhEn1P3Spbmyis7t5HemqTB",
  "key17": "3XNzZpnCb3j3HxnGq6NtS7LX9FKW8ZeTfa8ouiyJxKvbSuuuYHvgEFtK7T9jZmeEaHscAs2qvmGJbh5bzueH7qRj",
  "key18": "5H522pbcUi5twtaL4fVUfthANd4qzQEQGtBv3n8xbDuY7bmahwSDjzechNScZYkANt9HC75bj7iB3UUm9Ua1gW5p",
  "key19": "4bj63Rv2DkXiL8vN3CjVNhuhLpQEWerosy6Am4MTnctwktTR74y87dA4QDiFbJLkJ2YwpBMqrRYG1fNq3Bg5yhBh",
  "key20": "2wrFko7GZZc6Fx1bRHKQ8R5QAFwpbi11LSuKnix7athiKNcWHhQUZB5nX5okMdyynksqK6Cx3bj3qbew6oNj9gkZ",
  "key21": "3P2CQfWRGqwNrMP7GnsBgBrufE1R24QcqF9tYotLCCZfAGTWtJWY2GnEtJZJ7DXSWS2UMVT16kj3Sy94mtYQPP2V",
  "key22": "BNWwaTHW527FJEbr7QDFxKo5euMEzoP1QCq4bMVJHZbsb9yuE34HWddCUdhbrNUtrxp4iprn3n5aZRyCMzkzj1w",
  "key23": "3YuYNUSMd5XJVJn8V2b1w41U2aq3ggfPzvaEwM8nJyadZco1dxvpzpSMinpP2QGp9rE5nDSYBWCWpb22ozT99yFo",
  "key24": "2dbN1T6SEtfuuJJ3FKVL2yHuuSivF7m8jeK5CWfrgbcc9n12CYPNCYt7cvURC5KdYX1yjBdm7ZiZk6vbyz3ZRSvM",
  "key25": "2we3R4DaBcBRD6fk8UjuW51VwnKLVxHpXZiMiCYZP9MqdK9pY9F7VJhCWpjxBA7no3K6GUTDWzyeWsYbwRsaCCNh",
  "key26": "3D4yFJg1Rrq1puH8KBmCJPByifiwU6AZtsbMMb7aM3ifQbX6whmWsqQKXEa4MzvnKNDq18etppjJENwGEzaaVCZo"
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
