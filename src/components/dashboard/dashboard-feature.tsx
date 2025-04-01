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
    "27CaiJ4oRrn9kysCqtMR9ocJQKr7h3kfoKr8anUQ2VYQRYhBk61rBr6h4mfN3pLk1rhAaanK7qd2NxuPdLwaycgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AxCktjsQQCRM4SdXLWDY61hUGRr9GqMxwDbZDFbJZFBxEtrSh9MsYH3rUsnbyo7u1PaYLFHFtK6z6VJ51QfyPoi",
  "key1": "5Y1j2VD3wQrxwzBWbAvfzQJEqTp6cwGRZBq8suMaNq3DNSLRX6Hme5MmP2pv1L9yL3Lrffy8N1cvBMgctLeUceGN",
  "key2": "35w1m2LJ3o8JyNZKn9rKDJkpxm9gagpk7wRRxYmM2sSboU8gvsUzYUE974sxso7xC3xYL9ENFWucCcF8DC4A4vMg",
  "key3": "55nH9V9A29TS2AojgMWEL3DWh5Md5mN8YCjKE4sPP5UQwexjToTfzZYioPSpBEDWEhixdW3uTopSDng1GgP7UwzB",
  "key4": "4bHcPaqQ1wVghvrqY8F9MjERNJECM7fmHXTvH59EhwpRJNcDgEyAQEzjK2RiYnt5WWBSLwQnccyafBup6AiaL73t",
  "key5": "5v7wdAMEEeTnHrNQV8oCWS1MC9rov47reyb3SbNU1YoVpGFttZnPJP11Hu4NA1GiWujss65ujYcYRCvHXrU44Byw",
  "key6": "4h4ht2zyXE7WcW2UGMfFBmJkQkJ8t499Yodg8WuwYg3JygE6fku5yJdRa7MnNWquNscZd5eZrXuAEYZC9Rz62h8N",
  "key7": "L3dyKCPLuN8BfReQn63nzRoHkJTUJFZP6eY6Y8Ay8nmUsL1qwRBfxQ6vsmYGLqtA9kHFvc2mEAgT2yWqzm4uQSr",
  "key8": "9Q4qEFpAL71c9Jx8YCfLLes98q6orNJmNvWdhkRCwHe69KJQo4NA7eRUP1stgppYoDoNnBM7UN7Z8ffn8XhFGWM",
  "key9": "5aFt6Xh7d8bhr2Y95xRC8y4kjMg4YPnJhu3ML8ad3L7A5xG563NKa1bd3RJmNDYLWLi4tYdWtiLUyVFYd35SEFjp",
  "key10": "3NYNoDnodhWzhkR7zM8x9Sw1Kf3jefTdej9PfPpHdTen7jEjqRLEvoAuJVXYLosWXiJHzRN67rsK5aTVAaE3cQZ",
  "key11": "LyQeXFBJAcNoo3w1CCaj67VdKgj9qKh8s1gvx1Y3qaX1msTjTTiGr7tM83tvbspXJtF6GGskUfMZVQgmT5gpFYy",
  "key12": "2HHGJJ8WWaNnSoqP7AzjDQLrRxUjiyP4B3m3CjEeKdRHcC2tZ8gxrL5TUvdcBBQ5ezhvD99a7iKNgGJkqEWyUYBM",
  "key13": "64NrZWfceThGc2Ew1NYjUqD4FuVKM7zxZMbgnxFeAe4EX1TsLMVWhnvKd6GUBHjTZPq2M9d6TcHTRGPck4XVdwNr",
  "key14": "5XYscY1aqb3dhMdkJAeidoS17ZHkc9MnXAPfrfZXJuNZfVGv2rFWMS7knRArUQiYYj5g5Z8Gfgz4wz8X36jdbncZ",
  "key15": "iGg1LhxcouGmcyu2KjujfpxfMt5RCgsZ6tCC2WaRtBTzRQjJuxPqYXrzLPZRZS1FSpnXAFfoZNubHGmpmjPLTiP",
  "key16": "LnJFL3go2mVFe7PTsrJ5MziabQDDdLxpiuLVBZRrVh93gyNLxq8hHG1URSGPWxbmycZ4ngEY8tG23Wp1waUENPx",
  "key17": "USgepmnKYKkYFJdBkmCyHYanHdPAuerKhWarLHyZ21f1GqXG32DTVdCTj5cMEDsGt7RyEgLrKY7DmsRm2hfnTcw",
  "key18": "5d9tuu8Wr3So9MGQ4j5MCiGDYMadjbv5iYtRfqrc16reGkzwBwYTcgo3kzGU3JNbY68zoSHG3pdCEox3EYVe6L7y",
  "key19": "5fiCfLQ2tvNHy4UFTkKA8uuH1vD4mk7NYmk87tuExkTpPL5MALjEnot9s16v6cvDviMqMnhooFqHu8WAurB1S523",
  "key20": "3xPE9epcGHcFLQZTicwiqQ4psW3RigbofWUR1o5ZCHf6EZV2cRHbAhD4ZuS82P5DTyjnRMsXLc66tiH7mstEBY3R",
  "key21": "5FgdXYwUmgteYvTdm72PUHUwj2Vurgc9HSdcyfPm2gmaDfqPgn5Wnh6fSNKqavykfYbmBHZB7Qbyg2YpV1HtyWPz",
  "key22": "3BTiivgALsqskawSpjkYWCehdcvGpVN1xvnzH3BseYjQ9iiqG3oGxS7MC3wtxdcadjzjX5zbujytDdykDBd62J1y",
  "key23": "4Hqado5AzrgycNQ49zoY56DsmaUKjyea3vDzexEurkTqFypD9ywPs9W4257qUYp1BHfhLCKA4AVRJT4T96GDLNzw",
  "key24": "5EHe5yG2ML8fXfF6ygyB3KHAZtwQ6qu5FC24aeHyrz4ZG2DV2fQCTRswMNuQXAiHoWAMk6RBRuR2Wxt8j7vvfQRw",
  "key25": "4P7Ag7jy5xvJPactvmqhvhXBQXzVodPtnogfAVowrkGQJn8ApdBDRXRBvngZX14P7G9nSySkdco3YtRSCKRFkrPS",
  "key26": "2roNeqpiNse4UBfhGyVnHpHSVYjLnVqFfApoJz1MBCKTDiuQhcig5PG4zbBmR8S6TXExC8B18y7fJC6VgYBrRFX",
  "key27": "2ScUaKFfR6fa4N2ZafvZ8PsX7iAS2zcVcqf319akNqLepoTy8Td1X6RCSKbo8fZCyJfWB8tNWsNcTMxVqfF3tcTp",
  "key28": "5xHbcxDmVVNu12D1F9ig6d9oqhh952JfB8VXrvSN1r5fLtWt5rffGrJNwJbeRTyfuhPfiHcNFuZAxbZ867eq93E7"
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
