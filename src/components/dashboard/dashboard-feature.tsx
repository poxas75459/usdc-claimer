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
    "2MdoQiyaqnjZGUVxHx7rEYfTDJR1BKd3q3PCeNCZwMj8dCZMRGqdcSEVQzXM3jrAYNKiCeujKe6cBkQSpanLQuEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5taqoXfVKyWoMQzaZM3riD5buCv51QNfjEaSXwSYEopQQYo73R7vX87dLWjtiS3TjwMTNuskx6wBNMddfik1Y9nk",
  "key1": "vawgqL3ggM3ihMDCbsGpeEN8vXvZG6r1HfkH8Q3ghMweGuEvDAtMmM8gfUdg2HN8EEncLYgwa3BjjhkmKR2xuXr",
  "key2": "5Nf9X82V1fFSLn2vkYbkiX2Av175fYfBvHQwaynUAbzBuVJuM9Ar3sKWh6RZtacQ4BcL1ZQppuAQjkeNkYymwd6o",
  "key3": "5LqivHHiokmDEDYzFdeJGC11gFe6whypYd9z9nD6uhXeYdeabHZoacb9JSifmT7qF2ec55dzQxe8nmBLHaR492RG",
  "key4": "5wqo9ctZFwsYe5bN9iRsFnsnFtVDa51YVtJNM4FPPQzvANCC4a4hUaWhuDUXRDwN5QZQ69894vzwd1dzFpGA8mSN",
  "key5": "2UdWLgWS1a49F3sZ4oPuN6bnnxAY6qg4TrhtqqohDSCb7ig8j4hXtJVRuKMA9F2iVvxnbgg4Vdm9qZaGCgtqyuEM",
  "key6": "3Lbc85UEJ5T3GPhnh4fCfrMBdjZVGt2Q7Abk9yoarKroutf5Yq5vEXCwWEQm3GeVsS8Drp4ezUxFQsc9DmaM6tqc",
  "key7": "s7QKhL4YBzxXfP1tnk7M3ikgwR8gEMt933tDNWAJyQ7Az5JTHVHuavUE3TtTVpxatV3aVw5r1A1TKcaWXBf1wwd",
  "key8": "VWrmHyqPwbYiha1ZLJr2oocQz8fkPWnFkqU5WCfFJ2TBc2VNormgkzxrLfJVEzDdTQcHnK8uCDQK2pg5vLZCH2P",
  "key9": "xSRxBZAsLh2k4CXvnVyvr34twtX8LfG4kjuU14RdB5atehWVVwuhbnqGfPAN1K311Hdu6k1zejkoezaTHaepQEc",
  "key10": "3YT7WV7cKjMvBgnoZQmWwW1bLyBsGqaGPGHGxnKdCpm9KWqdesvipuevDTUXXR6JeZFgh3mtfwTtGwbPP5DPEF3L",
  "key11": "ZevN9rbtan9U5hooFg2yTqeKXqb2L5tRncg9JKTtL1D6wbiJVjZyJJAJQmm6TiE6KTWn43sJxXXokMB1NL3e4LE",
  "key12": "MjReo26BNeo2kbFeKY3H4JKtfgV9UHzA5t3Asx1mMYoMV4h4iJ4bowqyoDqKJtpegnDKscbSiKGEDsZuHN7FbBE",
  "key13": "dfi6jDNMnUBdyCUQiDWkeKA2xSgt8PD8F54wCcKiBFUK6MAVJvNktBNnbJsk2F5S92wSMs668Yrk9aKSRjFqiiV",
  "key14": "4JqDbVCcwyGyR7hBTPzG1vFD9Ud5XEoqVLDu183hmCVP3UUQ3yBv5jM9cmm1vhGSyDzkC9DbsrL3QCkCNoyGzx6g",
  "key15": "3Q4doxGaJ9t8ajmZFtZt3MBwE3qh5ndDpB57ZWqpsum9FS1u8N5PFgbf5T7m2JBGTvqmnoncP1oTwu7QeCk9Qx82",
  "key16": "3ZLosuz3pvoLDp7muc1CYtNGRA2io3pNCPbt3FyBX2okHvxvSQzCyxJpcoQgtZPjjxKaLBFGcirvWu6AYwjRWns9",
  "key17": "9MMVmCPkUXMRA8twVxYbdBJZc5CZKDyF9Eo29vH9BYAJwX4ohRohj6BKKSfhuedDRtN8aPULo4VkhiVM547tX2D",
  "key18": "4NhNepwpKVtLpcUoB6c6aUvtaeWKSJqvm3yKRqoxbk29Xfsia3tpSddrfMPnJ8YyAejie8ommtRzFSRetwY5wMz8",
  "key19": "4mc2oN55hsndfH7tRcEgM9YZAtBQCjLo1gGXopyE5C1PzjQ2NJf48KeqRUsi46obxtUTvaujsUqUw8QG8TgqWGhA",
  "key20": "3K4QHyfWhZunwA1bGxCUwq6e7QypetEi7cyuqXW6BZjthgNf24hmLBiWFS9SAQyfTEPqDqUdnJGJTQiJLzD1HeJd",
  "key21": "3qedy5UoQY5sACzejLNjCf7XjCqKo9piym6d7UfamWAp5perKytvcpA4npDfcqBYKFKgYqig6Pd96JtHRfkLtvf",
  "key22": "iNAuPqcack7GqSpHBUhjRDi6kEP1LVX1mnZzJzjse9H2GwkBg8uaqHnkut3MN9iRwJQP1gpL65kCz6XC8RRdd4n",
  "key23": "5uLUfa2DmETzVoucexkRG13tZNhJ3LsZSoBu2UDj1erXuGRJdjovLUyTKPUwpV1ZQNqjTXtkwzEqA6uubc6h3qTs",
  "key24": "igSkHNUKtbqAVvRRSMpQttf4oDGKCDoXB1mAsNy9Z8DNYhiTYX5CmhcGaBoqbC8VJenrWY355BMpjoaGXiU5rPR",
  "key25": "3vj5DyLQo75iUWLd2Ppky7XvN38EnfBMVUsguwearkAY7iZuA8pAYdK4fBTqG5p6nZpxAfzUeyn6AwzwwyzbUT7S",
  "key26": "61CwvK6GVCijAcCgAEb1xMNNuDbYV4AM7PacYkJPfDPwHudyX24gY5sihbNH7tfLxNkRusoWzqrbDLev8mMNUNyP",
  "key27": "22qxB4CsSYVwuF8LDZBPX7MxGk416csYRW8mDEtXKuDWQQTKVYt5WEj3C8fbaqYpysNvm3m9zcY7wYh9LCTBbqCz"
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
