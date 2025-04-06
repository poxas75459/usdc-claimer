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
    "4pjYr3UobBFAeE4wAQeY5FuSe5CRhoJ8Jj7BLfpgdUkHaZ3YWhEcwwReWx1sk3WsFz62Koymbtvja88neTxnCBBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562CPdpdTPuFZntQcwUcnqxNTXUZfJowcctQEtBDsKaBQqq8AL2SkeNxkesghTguBYkudJSQ7oqy55HZPZ6qfHx5",
  "key1": "2bxbdAVWJhSjJXWHTdoswfwBx1YksEXCSueKTbsXXNiGo6Xj7KiVVuvVe4w99otj7zA5tKg4RZVMPsTxUzqjnBju",
  "key2": "38LeL22xPh9Z54PRtgWpm9XRBMGgmW6wMMwPhQWcq9i8pEfJrsgSJqYpeVANoPdiJw77k4frr4HrDdbFbvbFHq7d",
  "key3": "4JinYt21d7ejoQX4YzJRc5zuc5pMSrY7v5QEXhJksDvgkM5pHnX8rrqw4xbez8DS2JFiDbuVUEUMop75fw4bv277",
  "key4": "5gBqPgAqU1ezV4sJnNU12pachozLquV7pHsLnPdeQwExT4eNxyGzvsHCVqizUJig3xsCZtJph7evAHKa3khZ7i4n",
  "key5": "v5QhV8rECVaudQb3oZJWY9VeabuD3Zk3Az45YfAue3b195G7yqYdTYHapaHeZqXHScD6rML5y4gEppp7RH7eCW1",
  "key6": "3w9BkV5cbUKMvrXER7DvFqFdDDwKf9xjy6iCbVTEcY9PBLTjWMa765UVa1Evxa2YWn5uaUUb5JFTwx6wxngV6SFy",
  "key7": "64oEKtrzoYy4TfmHxS2w53GF26XoNJBQrxgdUU4jjKauzAMyYWwZZfUdTH7weBUnLYYYsqExdxLWcsmmnD1wvSfx",
  "key8": "naWKXjLGfZ9YMsYH8xNvYERPVjhCzfTCM6cBi8cpygjnQA5uQfpcgf1sq8PCyZzndHsVvwY8X7KUv12Q2HLBQcY",
  "key9": "4BxTiNRjoqgQvEMaeuhfwjZGLxayViNef81BvFJJCjXeXGZ5NBkk5rtxD7mULT8wf8cFqeX6q82KLATVqPkoLnc2",
  "key10": "2ZvDN366ai817Nab5RNSoTq55BFg8PMnvbFVdBVHx3MTnAL7uEoZxeCNm3H7utL45Lo2LjFkxWAEvmw8umzgA4fa",
  "key11": "4E3GkY3uDVzyvD1XUwM62n5o4aTwcJmHPXdEU7ML9KC6qbXFHT1C8EiY8K9ejvEHdRYzzJgnKa2DteSLjyhh5SES",
  "key12": "dYr6ittRuEvGZFWdfnBb1KwHTUBLYenNbziEsKp2TGk8utqQULUSFE1chohWqrrWoFa7mfhLBdppWBP9LB3jFm7",
  "key13": "43dgpwwevj9YoneeygYuDC6NYwvpHvutturSyd9AnFqmXxm2JULzpudr4aFvFcAuKNvcU6trimVjonWbNCFFft1m",
  "key14": "Y6H4bZb59tFNHLvSx6uTneZQ7B9WETv8isc987CYRDuBSpCGbxZ4wA2Xt9oSkDH5NAfKD4izc4hYi1335udRPzu",
  "key15": "MsbbC5fGueXBtYcmqaxUh7Z1tFSyVisNJPo9CUfBXn25KXNbubkkd2bcz9nv6zQKrngC8aD81q93nHxDqNDCJJT",
  "key16": "4vKRNBEL4ec87c52oFKccZkzeumSc1U6jmeBSjWYWgLz3esB4UmFEUwuYE5oU4u7gNzin6DmFbNRyTb4PkzzxnFg",
  "key17": "3uJ845aCbUGhZZMV87DEHPuq8AnMP1qsxEexiGD3itaBggoKfFeyUdKHMKwjfuCUnCz1zwwu14hFy7mU4w1qW39u",
  "key18": "38oDR7NtgZbjir8KXpV1N5fqgkRJqGjojYxoKgsM4mzu54FMzyx8yDz5PPMRgAc3kWJbJws5auBgika11pJTk6Lj",
  "key19": "2Q5e6NWGd82Z3rUg8tCpyVgk51VFf3D2auHzwAgCSqbGXKuapTWJYEZ15nDnLGkoTzT7RLX2FPrhGZ1esoRZnjab",
  "key20": "2jEYGKdjRk3Y5Ux9Lr7VfD34kqCNXzk9BssCL9dt42YrMDPeVzZX3WgyratnstmUyoGDk16q1YAtCjn69a4P5R6u",
  "key21": "ETrHJ6oAJNrt2Py3DCNZLHL6DWJ5Dk1WpftQjz73R43qR4aQCihFsrX9RGHC3czzQhgrzvJw8czZWxeRuJmK6Gx",
  "key22": "3WM3pAgeAEZwi6D36dwi3cVuyKe3p3Zsbrpy3kLBiAzvLLj2uxoDQBaBZ9HKj4eynUkzh8kk2nJ6samQJVzFzAWq",
  "key23": "3pu7D8BexVVjktzneEYsKAGL3BzdrmUi95tRtWMgJDRvSc89yXHAtwwLnSiPJaSzcox2JJzJUgUqSA349UE8YUkN",
  "key24": "5xns8gXDZdbMGhD6dTsj7qf5xF2T7kuDdTvdBkGWQ2Shumsdbz1tPjMfssvwzCVQ5znK2kvJXuB1BAcBmaQybgot",
  "key25": "yzaTsWFMrwetcarwae5EQqSaMf4vY2bnLjX3mJU5ua4zvWcdGBAURT2QawTxmzrZqzdkmRCtdYEWERqJFZXf58i",
  "key26": "2yhX8va5MQ3rhWQSgsipsBn73AUDoG8AGexkeQdapx6NfU2UcA1GKCCkBfxj4wtUEoqHgyaQhW6AuqbCGn32kaoB",
  "key27": "4a8SEhzqiiqafxe1mmVnrDgHj74mBdCfrHKcNPcibyN5AVZW9mbQ6c5o4HuWbQMzDZv2wVCWpAaNQmig94U3UMwa",
  "key28": "5b9TSTaQVF7i8AKEZw798rzK7uSVwMGxcxKnXNb8terq4zaQeirwQ9u8FziKxf1LwjNxRFmm5uyjYLkdZ6TSygXw",
  "key29": "45PDoW3e8Xvh8ao2MDWRQd1yUXXafbncotzZvUSZrZqndoq7XkFiWMtR8scnL4fjxqWbLbvnXgaZJND7wcu6ZF95",
  "key30": "YYDmnCopHrbiT9Q5RSAjxAszeSEpPLxMXwbK7FdCeFZkt8DpJebtWS9ro5bowFbzTMwnQRW13DEzkUAwgmg4Rxu",
  "key31": "3PbWEuTaurTGzYh9Jk2qGWXiVW76WUtX8rrRTLNmkM3QXE3r82fJcGhSC3CZaYTkKX2s79RDJWF1Wi49MLNWv8su"
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
