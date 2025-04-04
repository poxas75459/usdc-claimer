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
    "4kBfwXEQYHVAwV9m3QsRfpknoT4WtZgX6WUdLYEntYsrL7ZXNkmDv5ULB1YCnXfsshfhsScce1ZvMxJeBuDrkXpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49W215z7938WcVk3HrpuMz2iwQDY3jrPLU7BTxKqvmaMKqtnA95Kq8P7MgKB7RB2poXNA4MdmY3QWDQ7AWKabpmQ",
  "key1": "4nipJqps1wPPkKoRFEeHaZq8ujFfvVhZkvU9JWkHr9W65rbNrMP4MhAP9E535hGSN2Nmf6cJfc8spRUq5pjBBadX",
  "key2": "47hgSRtQohf5kgPnSWUm4PW5MeuCqxqMEeDSv3dZkF4TS3mQwqPzpdLWhDBozkLwVDvmbgef1R3pVzqwuQawTgnn",
  "key3": "23QkBVcz4upczUrvk4X1Rk9axu9fXNtR9AoQgsPdDYXHtpMuDWoQ73QCDLihTXZT4YNTiWTKJGRyVcUW5PhwkAk9",
  "key4": "3JmnTzMp94Qx9K1oAzyHW7F2qQD6UNTGzfxX5DTKyUcnzEGN7ryB8y3ocuaE8JRQ1GghLjFC2GDj8LZ424ADGta6",
  "key5": "2M4QXZF3DFS7F7uoBAioVwNeLq3ZTktFSYLc9SkAbyQsEghDusERv3chBkfSFnNeKvQMVP6As3jSjEbyVjRuDa6w",
  "key6": "XBbtiiTQTc2LcLJeJR9Zo6WJyhavfFxREqq7iCCWxzgzEwZkqFNpwimN2RzuhgKxtRgzrt3m8NJKLYF9RbyGB9v",
  "key7": "4qP9iwsMHoFNsC1eYghoTbbGyZenjMe8PBJw5ZWHRaSn9HMa1RTHRgMgZ4qnsCVxr8MSZ2vV2heqE3NZho6Hp8oi",
  "key8": "3cCZa44s6Fn2JCWhQ4g7tSdRoafnqRud9WicDEQifuVSTfSvP831nf6AUprkExg6sTLXXm23cZRTnf4cJXwSZwTm",
  "key9": "4yhdcmeg5b1po4bCqrEVH876bcgDc4KZkdTxcDey3n4FhE3QXaeCyd2o9Any7h27SUJNDpqUKYkGr8xY3Db1V2bQ",
  "key10": "puyebgsBtYeZAwbqL2qKNp8CnB2pjVPh6TaDf6DaPZ6S7UA7xcC2yKiB8J2zu7rKtsjuhnY7biEfHidDvLphHwm",
  "key11": "353MBZHwP6yQQxifkQJhNQiorAUzUuK2fMj8ZTW4gBw6ZvAuU5FWwx7wj8WpZRPiA2GedP2raQkrbNm2vsUcSj43",
  "key12": "2UP9RQUF8FjM949Rm9BcgirUUpWBHaCpUcv2f5xcZWsPuAaLBEgGcAgSkpD7cBb4tC8Wea6sDMGBRBPButfR4BPu",
  "key13": "2WR777hGYT9Yox8ZiKWRfkEiHHjxrft6teNsyKECL7FcLaEf3oVYqtnGmbNYZ8oA53Fjw3WC4t6bwN5PNKZ6ydCY",
  "key14": "2iwt7cFpEKvC6AMjLhwTA7KoSFVVRXCMDf1deDVmLnerfL6jPqJJMzjY3FgDRf6A3X4NdTrsUwyxMK9E8xYEzr3E",
  "key15": "4bFYtfM4BxY71jEWmaDV3biDNU8CxjXRKuzWwk8eZRofDq8n31tCgJXovkYJKEpgp5Xuo9CQusaMsvgo3sAhrQV7",
  "key16": "3TBMBpugJ2ysXgr9JZgE4Nyd1NZN5naHpKcee4tcWWvUA2mKMN1BKGcr1YXMvwj2cXR7RsfpLoXAvoQXUP5MobuU",
  "key17": "62dEUnhRpKddQftnRL8EKUG3AHLRsAnCmLBQ9GeQFNFjBATsxwhzamFzxizd8MxVcp3Dpv3joJVCxx9frY2pCzKj",
  "key18": "4ZMRVnzCPvaV8rchL3MGDMWJeMnLJ3fwL9MSSPAD631VMdHY31DSxvj5rhDqauNzqMNekxk7sskTg7un8ACsZBhj",
  "key19": "5kJqvx8LdfhE5sonNXvfy2WCYzNukeoDh3J6B39X4HxiaejDJyq7sAV1s3SJiiqpP7XFzhZe3Gwqi8wsowgFg9ZZ",
  "key20": "3VGLCnYPbwVywZVe4VcBp2jogRx1LuApwdJXUAf2M7VoZXvwueHAgU1G18VJcQqfU8TSff7EfvqjQKWGX6v6J1Jn",
  "key21": "5iSN9722Z6HchAA8xuhZfuJ2V3E4gNDUs8cvneRS3QFMKpkoZCbQCprSFeeaK4ytdt1XrzHh4QNrb5GADNkPWS3t",
  "key22": "587FPy5q7HidJrsVkmZQ4mMn8RrbWcKCE7oFiayoMnaLMtj6Ekma2DVoSA7JRpTpN738g9vWZ5EQLZ6zMRspVy6s",
  "key23": "2VyLr4uXbyqcLYLFBBBraqsgCFPdMJBCs2hyheGkg7AnK2iXoVyxQfyoEFhF7wbDoDzeiF7snSkwCJcgMUe3TekZ",
  "key24": "2mUTCqWveewCwFHp6qz96rhrjq5bWkoY5hmE2ocC5dfkcsUSiydwGx8J2ywkRfrRjd29ArSvjSroDKyJJ1cBo1w1",
  "key25": "5htoiaZt7RchohRYhi8icb9PeZGt6DdT5iQy5ij3ZDep7GjLawkbbNuCF8emufGhhUKk6sX4eixB7W39azPXRX6s",
  "key26": "2XPmvmT3eXGWbvFVWv3drKUUT5No4cY9Fky9sXhN6JiMTqDtf4hC1XQ5fFKmo2JMi8HrRXZntpBUNz4NkgiShoqx",
  "key27": "3ZkQpf4dmZVSF9sW5iKhTf6KS6wZv1YaomhcfunmWHCoFjR9fKxiPtJiuBjcQrxYiDUa1TPfhoEdp9M9Wa8AkS1A",
  "key28": "bZWHfb68GCkpWqvqFiXtuXHXrdvAywQdHgvvKFEPC2hjnzkSdcMBqKBcSfY4bz1DSLwg8NUUnmUTRQkdvm6gQYw",
  "key29": "2b9HHtjXD3B7DdtgoRPfxfBJKniRAoU7RP7MbTeZZLXC3fZbUFS4w2riKm6BxrNjdvnQBFVvQiuHeYwtvFFjkoUL",
  "key30": "239pRtpC8cTyU5GjSjNMa6phRfUJnFXue7FRAgNqxEogNjn3P1kCbNFnpM4monomRwMJtP86kjBExja4kn7MKb9e",
  "key31": "4WE597MhCHjL2jdHcCvsidj8nb7PnEmj3mmSKwc8G962JVFweGe8vnGrmyX8qeWcC27vsRpRWRPvZXgYi9DSsYzV",
  "key32": "v4jQ8QcVV7JGWvrKSH8V4tN4VpZu2fa46J5sJzpD3vvP9uUPmpsYSdJg9YAxhBARNeqYdGDR5fcgJLWgDU6WsmW",
  "key33": "8aWEQZcFg4JNVfKFs5XRMsED755HHgy6qeH2hLxb2zFixKqDg2Cw7oFaKdwhW5syNouBAqkxuVXVNZbY7zBBuh2",
  "key34": "4kybJxvvLzcFfeZ5QfWLrmfgTq3oJw5kz8czaa76xFSCMYTrmJXUSUotWsKnHrQvytsBMcpNCJRsjKihuKgKmJtF",
  "key35": "DrgKqTWrTJ9qKoVjqKbc25TtdnAwsi4MC9jbZUkKrxENNnop672VLHChRPyntoTaAxcyZzM2XTs61Sq3a8y3TfJ",
  "key36": "4PgbkfBFXNyz616hCu1A5ddSWkLQq4bcTv6H4ZPq7UFbApp4p5WeyGXJKZUrVo5HYCQW5QLwzNDuJw1bqhqxhee8",
  "key37": "55S3Npbx3fLyQ5peuviyydbcP51XUFozy7cxdCTHBRuNZC4b6ijmW6Sqv2dDrkm8T3A3cFB3a632iZ3Xd91bixaE"
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
