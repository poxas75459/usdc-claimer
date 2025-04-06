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
    "46Sfjeo4HLuXGhUNvTobmQWwSnUS3rEoffQbEahwmZ1QFnmmEZZcgyDfjr6r5RbuPrqE3VcEELDEWR9fvZMP8NZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37kAAkGEDsTEAZJ4w3vi1n6Ukx1yfUQXFy3jPN3sehvMTsUqbThWJWCyhZHPEXTKfydYSC73ioV3UWg7U4C9q1Ye",
  "key1": "3Mm17r7nJauSxtkAeDe6BU84dzbBcgcgpyrSswriW7tRaw4ZMSwv7G9ppZw2y8bJaQg9iiZBhUdZW9dGMmc1A32X",
  "key2": "31Q2wpcxS5v7o2Eg85YGFb2okkW6dYVjJQ9fEYGFviF8w3dgGcS9h22H6pfja1oLbropsu9wGSkrBG3pueV3Y4xb",
  "key3": "3XxGMGQS9FwX3AAkrzMcSewPwK32caQaYjFhfxkAtJNjD4MspCEqFdKbEL5VuwKWAfyDnJuFDEx5gkdkVotAyqWi",
  "key4": "xxpBoPCjhyxpiBE2qCV5446TqaRdp7oDMJ1H2GcCsD6dXzHoDLzcvYgkZ3oDCUy4nELnsxekASNpb8e3TbPx7jL",
  "key5": "H7ZyZG3vWVYzZR6iEK2ZFQDRD1w2VPmpNUQjr5V2kSmfZQiEagyUZodFbvJZHqkr6kNRbXmkhKEr8hjqpBDPUJY",
  "key6": "299WXHvaajMPCbKoR9piMJhQt7CwLudKVNwCkwLfaxY7B4VTrpT3ut8wvVnhDKCWhmJBQGsQGrLDWs3ifvFkCxxR",
  "key7": "5pTFQx9f8eJYuUH6rzUsc1uaoGfx5SerdAMBrgBpaNhSoit1CpDCE21EUvNELDgQPbeqJtaDHn2C1RzYBoZKNUSB",
  "key8": "3zpmgKLJDzPCBffDRQamVNsxwuGDNtgyQX9fxarhhffmx2vyVKWhiuLgbdp4gTxvXXt2zmQ3d6VAVjjV3wACjHAm",
  "key9": "59rRwPYVR9cShRA14EpJ8RGu3oP6dzbCbWv8LghbAGD5L3oGF8rEHN5WpAFjDHWyXTeUy8TkLoeKdzn6nq74AHnd",
  "key10": "2ZPYJmKNqWNQ4TQaQu1d8TfDdxSAzn6eHkLMucjocXUkpdpTjLpwpvwchjWhmdKVmXmS1ueiDGs39MPbyeqxjfCo",
  "key11": "6XQTG1XiDhQXCzWmJdkGVtwhZAPU7E9w6Sfc2MXr2ZxYxFKt3jfWzB2cRjE1ToFvsakPVMxdPz4XW5fsXtL1ZDC",
  "key12": "MVYjo2qB9Zf5kQJE9JaTyh28DmqyJgJH8TZG5614DbC9bMQbuprvMSjFAAL21V6v5zAWe6Cm59raAKZrCHzymbk",
  "key13": "5dtd17L3LUiGKTz7g7BSoYshYqy8PUbbMHcRzXM22HDL6YMY8maD2xi1M8TE5MjxhA2LuaKN6CUNQsCxzTFPvTSk",
  "key14": "2RJyev3GAf13QfkgrsZEUjEa1LK7vLn4KUtDu4Ldf9SspqN2y3Nc3m5S6ep2hDARien8R1wcq5wifhEDbXyfgGKY",
  "key15": "4LMyeSRiuoQBGWCXuSHjeUWZAh8kPaLqQ2x3RA3xiKZFuritddWZ1dYJJi6PyTV3dGkJcythKJZkpttYj9WmBf8F",
  "key16": "zWCAxbcqfTt9YsjTeLcXERsSyn3n8fnmmAaEqhjnrVm8MpvDrrhFCsBnDzNjUgiFjVP552j1ge2y3LA8HDPK7J8",
  "key17": "61tEdGcPLFjk5iPHBd2MHvxp9JCz1RksovGjXJeafHDGufC64pFQahWUhRLSsQBdxgFL2x1NPdPt9T7vzhTTuYmU",
  "key18": "5yA4ytXjnLmFUZmTbrokdrbPEy4GDo2PNehDApvJVn7TYra1cWP8UZiKirhmatZiUwxqFQDZc9tefRVsKhyoVbiR",
  "key19": "1ztagntx7ftVQ5a7g5NV7eV91Ah2wFmHmkSeAc6oQ47MYcJRdKkc2JabVjcUdMXp6epcyg7thpvTi4tps22xWvk",
  "key20": "4vjkTsMZGY4PSXzZCRtaqZmhbVXYZocZXkFuKiecAHNPqBBqxvXDDQ73gKZUuucnNgdxJNUxR8iNfDdpBifnaB33",
  "key21": "3z4ztYwfPdaqVq62BUdREuZE3Lq2qkA2sQ5zjLszxxMAmHfnyhSzwrkLnLCg87mjBktr5fnUuavFxEEXoDpGf835",
  "key22": "2nBzRF43QUrZzZNtAmc4QRdS2rhbfPCeog5ifzvYFWHHgSPsizKC21ukjVZ2tLTYQCMD7KduN3BZkKDtp6MKtV39",
  "key23": "4EFoEjjVwHHCHuCNCB7jHYTNcHZ5o9EbXk4dhKLu4P8UByEcfsBvNxBr1XnP9h496seWgp4jk1wPRvAopeG6mYii",
  "key24": "2J2KtwC9HCnKhdshjYSb8PeEkZvWNZrZccWycj8uAw7MGsY2C2ZnYBbWXvTtoirbqSakkjYrpu8nS7sRY8KK9Jt3",
  "key25": "5DetJmuYb6x4f3BN5tYMPLtjP7VpbSsZGpjgV8321jrA35XiDRuqmQHQvhGsTKsWU4a6XibAPG8LiDUbyiqa76Z8",
  "key26": "473XgQWQmmrzGZEMJDMKtBchLrJsk7U3uzHR1P1CDSm1mi5NGJtDbFqRFboLsdLJcDkAiagiyTuCjHd9p6vNkAkN",
  "key27": "3JQfCHhbDsDBrWGbBACZnWLg3thD4gFnhagXudMxMq8JDnPNmXFNWnsDECuePi8GGuoGajEjU54nY9A7GNvXGN1C",
  "key28": "2VDwZFeD9GM8NDWg85jou8yqgeqLkxqNvXiWpjqDPK9YvLiXDacSQ2AERbjA4nkjGHaWy31QjvK8YLs6EuywdhnW",
  "key29": "37mwMojFpTx2MmCg6pUkpVV2qz87ML6EiTqrWCeVLL6LWyc4JkMFTLw92NQQffo8dm1SVpWfhgnDy7aNpu7bc67M",
  "key30": "3Lygbp14DLnuVSfRyC5pjJ2ccZ1Rveaetxx9YtKRtymm4yvGzY3x2oArGGTLbVKfJ4yqQaS8S8X4ys4q4wDv7VHw",
  "key31": "37HNtB5bUun4g2pNcahRjv91fsgeGpWa8fWcfCh7MKQVSjh9UzRh2Puwo9gRysFPoigRtuXZX6oP51nTqWV8ckih",
  "key32": "46d8iiSKMeWgb1UADweQb5PUF5tcwSs6S9nEhRhnFAhzsfnELck5d7Jfveyr6DosH39MaqEee9bkxEEkfMDXKBi1",
  "key33": "5Pojj4xrkxMrwvU4RgPnNsAfAYTo8gzRsKihwsM5FdwZRDPVWNV9ojp1T8rptFSwVqsXqrGt6ZP2x1qdwGJ2cWeo",
  "key34": "bQ85Z7q1Y9JYdBa4vTiabn8mA7FCdQ1zFog7oQzrPCN1uMjpsdjYn9jzGMbJJUnoAPXMgcR6aqNqjHHoQUVxTjV",
  "key35": "49GwfEuG681bdD7GYWS1ExRKTCfis2BYjkez2HfeE7imKMoEVsWg19DnqH3X4iE3yiJQ4mtxxV8osjSKQ5W6PrMT",
  "key36": "24Mdb1SwW3293us4ZeLoT28FXeUQ59RY7MgfLfsYFsWBvbGyyM5WDx3KCLfNcPB23DvdwSa4WrTTCZCKThZCV5hK",
  "key37": "5qToFNDqtJYAqT4oZC2oPZfAP2udE5nKwsKE3fwT2iNWANKm3QnYphDY1S8uvevHsjNc2s3A34ZGJ7frg5FPzgFC",
  "key38": "24dNPtswxXEJLuAKLhMDUBrzrUGm3Mm46zGS3sLd7z46yAZy4xJz99wxSscEJ1YVHgd871gsw92fWoXe1KkZEnJu",
  "key39": "47Vix5XtbZC9byDSZ1FmTVdQurq8HUSRcj9qaHZTdLgMS1VNF4pQdFMYFL8jfGxDZWqk2sSnzz4a7B3xUjMLD2bk",
  "key40": "4nXVtUde8PgzrU6fQVMn9kgJyvy1pbi3uHHfiTZ5DB4n4jBgxpmSnjyU7LyJCDKU2XES9tp8doRbpmDBguA4gTeY",
  "key41": "PsXJEp8HC7Jdg8RJGKvdAj3SNCD1F4V7Sw1TCQ5SasALX5c62FPAwTvTJPVwx89aENfL1DqEyDiabFkpeKwVAAh"
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
