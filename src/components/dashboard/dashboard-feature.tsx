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
    "2yxiFYuA2TbrjWQnn3g8j2BTuJR3M3FZ17czwrRjDG7qVX5K9zQyngxDbBbXwcpYieuKTSPdqshzauRi46nhpQbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AoBD9FoKxnJxKHaZFfjW6ZFdUHaJxstbL1Ym619yPPatx33o2Vrdpa33wqQxwA4qxSrpMXuph85e1sL2P1nao2z",
  "key1": "4oREK2NiNEwQGuiMPpE6boJmct77fKVwthRkhDDvQW81WFRjmUzeUZdoQJkb61RJh2ee83vxWTGW9yjcaE11f5rp",
  "key2": "4WKz3XweNhDLXBs7UHmzCyYE2AirN9yMrmfXNaegxLf7S7pbKGsvrTwXbHvz6ptFoMqwzFf6w9togCFS5YecTvsj",
  "key3": "2rqAdWTMpN99rrGS4zFExrbPUmVABt99Pq27UU7gscqUv6nf7sRXXiYh45mKmX6GYdGpGMpjcrgDjPrRZVqmptce",
  "key4": "4L24te5jMNpriLmVNuZF5YwT6mTJnAFpr9aeF28TRjK3w7RjkfjPEWA5ncHfGzAFMRJDJE3qoUSEWDTToktTutfq",
  "key5": "3HDtQSYFBbM5fGJ7eWdcxrUZpKPtZTW67aRRNWFWEXHnNDcQjtFfqaHcqMZFyQr6asAgvHwLF913NrFGN93NzYxZ",
  "key6": "5Hi2C25dpq4MeQDdk9PsB8TLe2yQBV5ZkpLcn81VYkp4jieBzSa4ySdU6d3cVEKMeso8GNyp38MWvMgBJJydVLXv",
  "key7": "jTm5dLdQ6pT7zJ5LVP5CXFU9FpPhUKANn5q8s8powQdqxpyFcN1SoJovjaqJkyWnY1Tm6bVorDd6yTXD9smXAJP",
  "key8": "hwuEwf1m8D8qPwcemMGeEjfkfWMhTGmH2ZPcXLQyBEyXdk5t6Z1uQUk58qHNSbwdxJape6wectXKk8AQQ8UXjCK",
  "key9": "xoyn4xvEc4ujPHR6hodE3LCn353HyccxSZ41oDSf1geiuX1jTanpEJPWPB7MNQjHVtHcdz2RwC3vsPFGQeB1H37",
  "key10": "Dtct24F1r2YaC7PyUToRyq6huM4KASU8prNXoB6ZWuMeCkNgAs1uXqs6mbJKecQUhtLJxs8iY2oAgqBW6Cm6KTH",
  "key11": "41fbmYTAfM2gYYxXXqRrkep8spBaZhLv2i87mWMJNruLqfXuXuDsuXtw986Sp4ahKAqNDRpVUxftB9RXhBZQomxT",
  "key12": "656szuQ5vzzuJEHHwmoVhmZsZHLcTM8MKV8SzYbkhdGef1K9p3nSYf9AVL4jPJ8sJuhdB1ntLRQUzfp86vKLkgNk",
  "key13": "HJLPEoQREgGnNPM8JL3EnZ45LBkdHM9jSRdB9fbRHW25zgvAWfphhrDCgZgf2ZpjeBiFfp7xxPwBGZMSSjzdMa2",
  "key14": "Fbvr3fAT1cwHjMTgRcVacjkqFkRy3eBmSeiQyN5bwmdE77Y1RQQAMCfG9KkrXrtynmZa12f4VknrDeY3Lf6Jjq6",
  "key15": "5Ybf6QvhUGmB53AbTxxMgbckybxGNeyFDBfbfsEnA4xVy1pDebpZKM2iqkL8LuETV2ya2yUwBmYy23j4dthEi4uD",
  "key16": "gH5bhEyWYYoKxbaFL5u6h7YoKWoBfhjmWNMEGgjUz1dNtgba3Lv7ZuN5dBgUAZxg9kWa1RHDgXc8c56Bn2w6fQg",
  "key17": "4eKCz44HGBzZTTxZV4VbJGmxzD13XRw9ufaYevjTwaEeJVgUfuxEtkHTe6dyG8Qm3n4wWWRJSZowoQUAhQJMvYx4",
  "key18": "5zrRa2ocXTM8eh3DNYfoCWpXoMGz7YNdSDXgSoCQQXuEGaE9vut7rcZhsogykgosiGv3F14jUBJthW3TR2PzpT8w",
  "key19": "JwWA2cekwtXGYxSwbNZLjDqkDWfPTkkAwcvhKHM8d9ukpRHtx93odfTABxHBmCyUKSb5247FAkM48bnyCfA7xJa",
  "key20": "46phAhai8cHZiACBjvqC7cUQMiMhR7YErvqJRovjEiU9e7biVE8ryYHYGGSmGvfXT1tyS3TzhXfVCrYcqcbA1sbM",
  "key21": "k87GPtWYho7vK2QW9Q6KF6VVZ8dbN5XBtTdyKzbiMVnWzun7pgBdAV3aacR26s4vkDjHZD6MfyqJNTrvjrcUJKr",
  "key22": "28F3RM9Zq1MfbxwFcjAtiXxvrwAQ4EpHcGCGQj16gqDJgSQgZT7EjswakdBf1JwmtEW5cWSFaqpqHE2v73JKJ22H",
  "key23": "48JkCKERHWMcKTt8ZP3DxUSNs7M3hvoMcDHpfmS4K4DLtTHZ4i7efZgC8LgRwMGKf8AV7u9D3QX4iNSGAZxaXZg9",
  "key24": "2yi3TRQGQrMYwhmBv916WRgTAFQAVPrZLMB8j5aSSUPz13iSBNhTkqDPyJgd6u8iCz3msnrxwnFtETvnGGk4yDto",
  "key25": "2SEFaU15Tjmx3m4wJceUCdh5Qah7JfFNZ1npaLPEiL8Hv8C8YcCjfgPiFNkykegABPykuLdFAdoptk9HqgLDLeKB",
  "key26": "k8BE6uzTDigXoBrtkT1zEYe2tG83NMZp2K3hsqbCT4Ca8APjvvz3ham2TbzWAYf39Teu5JiTE7S5XVb2KSpCGba",
  "key27": "27Za6JTwukq4zxzFK87eKwXQG7kdbgkd5ZH9skdRgnNwSWa4fCK32sNQ5rP2WbXAj86Hdyy692wX2qahWHQbiyoU",
  "key28": "5jQLU4xm76UwhtpMgkkq7KVsZDjKWn9YBM6XeDZx1JYaax4WLPpdwh5nrkZyhs6WsXJVKKgvjgUwPFG6VQTN4H1e",
  "key29": "Q5iyAvvb1SZQkwTNfi76KtAh88AKM9CuHG9WdQ1aUH1KoZhH49Tr73D8ZN681KvMGk1yvdEQ9E22RWir9XZGqjD",
  "key30": "38V7BZZ11jGckPdvSpLtgwDhDuBaR4EMDjDMvMee8fiGxzDbehjWumo8gJTPThLMDpzoFVy3bs12HQSjdZd3o4Q"
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
