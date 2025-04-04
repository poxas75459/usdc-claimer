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
    "5LH3JwEdaUL1yYX6y8Uc2QeMeNCSbV2cxjsdX93ibTizLtUERLNk4MRvdHemC4WtRFXEbKEVzkwaZBXHhUSXrb64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjVmZGPSvAbk1PweTPkJVW8n6aQ6F7JytAQPBLvoDg3wtH1gAom6yMitGntJPxr4Fz6x5kzDgH6hWwph8XH82LH",
  "key1": "Er9vVNR6e4ea2TWsY3BZBCU9EhZEC4wt2b8MMd2qXivS7WyBSPRZjWnFMjesd3zqUrhVkaUSkxPLAaoxyGnzWWj",
  "key2": "54npHfYhUfekVXQ7htZQh1TRDwr77TJ86UZ731UyZPnaD39NHjvi8TFLekggZfwgtRPju4mxVPkrfUhgWEhnuC7Z",
  "key3": "3MyT8MkpVrE91y1jtFKWjUaw4Cf4KMeKqtTWSwvNzYzqmWWavKD3XBQiRhkZYkqTEceVqj56Drvr4cH8DHG2Jxmp",
  "key4": "4cBRfkUNyvfbH2VUTQefMdvaPvDNwkEgARiN6beeMSnckfkUgnFSVgYtGZL811isK2GJ4Y1KV3hcCCybyAhbyTF5",
  "key5": "41BK9739hELTjtWNFscbCw7xsQ6STTVcS1uu5vSo3PKrw7S9n4VSbeNLzrA2YgSYX1ZivKy43yWYD8frnUuUJkR5",
  "key6": "4wAjXBDCqYfPTBhjVzAf62zLnL62xBnPDMAigSheP91y8iNJPyeECqkemgu7rdoUYDTzmMJ3Jd2n8SrQXyiBBiom",
  "key7": "5YKTr5dhSbDSMVdRhhm2rVnLY5wFzYSJBpEooUfs5V7GwkHjJkeZ7uz8hpRKBjhQCnXUXfiQYbS74x2PyBfwjr79",
  "key8": "WQ4P3o6HSrB6d2XAFKSJnLtaxxT29pqG8QFaceAkQeE3cVWinrMLmEWdAnmuvSguYkHYt9jv1DJEdy55TmNVcWp",
  "key9": "3A266vadWcfmLxHrr9kEvSvEsbhSv9rHDLXjfuEwNJN79sxYKFYq539XsFy999DPuE4LProSw3HzfNHhDmMa3YF3",
  "key10": "3yuYh92QZfQB78cYovYA9fmQKUoQ2MQKWBveACEngYvZCGbM4RmrJNuzCvgA24yVMuLCqamwdwYZKaN25p1YVag2",
  "key11": "3JvY2bdp2js4scetL5Qi75FYGf8gSXkPLasBmQZGovEpxsNu4wM7z2dzZ7qjpiN77EpDLAsYNkoK2eKsG6ZuBoLy",
  "key12": "WrvJBAfVwFM7q5YN3qtDboooFfudrVDTbzvc6AM5GrLLnPTyUB3fqJuKuQd75c2eyYfggS6KMWNFYV1iD3JXYND",
  "key13": "i3SkLLb8TD4vVPZHK5Mjqof1D76jmWp7P6CHVxnUqZvzJSRyRNYQQ9WCt98UG5htk7ju8ft21scMM1t9D5MogXy",
  "key14": "27Fk4VJKhn7zKXenHwgUqmvSAiP3sduCaKanhWfbrtxtdfK2aUjKqeF8T2N3gcJt4xgfCXSoWYMyJ8GeBvmTa9Re",
  "key15": "4EHS66PLU38kgAJmHAbdvx8FFYDPf4N6RoXdwZXr4gX2wVjTfLwpnea4UoFt1VTzCeFcSbpZqDuqHF8JLAdhfKPb",
  "key16": "3wxk4VJjEHsSzbBr3V7SLfRPXYqmaezSpk1pQua5Z5RvFGpJbRa2VZKbK8df1HdhmpHTDYQQABxZTkBCT1TpWz7v",
  "key17": "g2TFGDU4oBU7YC8VwAKHxCNyRN2UNEWirsWbBK9wGpuVK7VeYkVDBPHDrBX67HhMLeDcgjQowajyR8g33F2aACf",
  "key18": "4fG8wHZTf31sGx2MPmYwyhmLePsaQ6pKBSCHdrVsB93YA3LkekhPWrYpsw7mXRteCoRW2m3MsDsj6ukS8HJi9RwJ",
  "key19": "4HD6TG6LiQCRj4MzgHSrnnHNPs1NmyZxiLsVCFi5VzvT7is2pfQhyyZMB2AT4TxwMMFgd8apk1re3ZLR3u1Cwx3C",
  "key20": "5UATT3RgpTpjfCUAZMvBxjrw9T8p984oCktdMknsFrsALbpdaSfPMmrTVdDKMHK6TqKqe4oM8bEGxi2F9SbeELTg",
  "key21": "5HE7wQW4NxE8y7AbyQEUqUxM5YjGHtLGJDfa722He2oYPbPRBX1vDS7CgqU7fzV1eaCok3zA5pzsPwizTKawvKLd",
  "key22": "xWGZykNJCoMvekt6oNBDTiWGMPcX9XyKLeWmKX79StjqVLTAUBMyxeXJFasySRocUyQp7rGrwao5ZReKVbDkDkx",
  "key23": "49R7iaGB12eWuB8WcNKNUCqzcspxbapLcpT5rbKR6hocmoyPnxbqiv8tr7PvZRRBwnTTADaWM9UKGuFYt2Xxzm3W",
  "key24": "Qpsn37sYzxWFGgUsRkfYBjaoDyJuZgNDzSNMn7XKSu2m4aCEpTi8zbeCJYWE9FqyJDCmoA2RGumjwNwy7YJmfaE",
  "key25": "2HnQpcqrKmpcMJaR294y65jMe5bnSwbQzEnkqMaPbeykH9wxAWPZ23NgFFF31Fc2LiuAHxLojBRskfaAzRJNiJEd",
  "key26": "cFpWQQZd3xKLkdNnDxVAevRgA5c6wGtUzVq1z3HTjk3totcTNKCU8vCgmFHLQgFF85XeFtPhaMir5KUjR4tQvDC",
  "key27": "4PJ2JiwGoZGPSgi7sG2ZEqMNsMn6dixjaRDh2tbBKLw2QHKqPVjCQoeZRpw29PphsmyzRkmGhtTLax96LkxGf5zR",
  "key28": "5jhxgJG23Q9ewLAtJNowKmBrFvfCuL7hEceAsbCbiscFa2oeYyYMUWsahWx5tf7pNC3soC6Mg7LdyF7MENTqwUPd",
  "key29": "4Az6GmhxK9jUGkYwNZvn8oGeWRpsFuHxT5K94ziZdpvgrKJ6hjP7d2gsuKbWPSRKfxkpmmgLpiygwJkEqR7tmPsz",
  "key30": "Y8cYTmbNadPGPUVfStb4D2zm1xL4thmV9f2qhf7ojPjLyQ9CZLSzBpGKSBLiHrVyo7SWMNaTQojx7Ng1ocC377r",
  "key31": "4pd2HD2EQkDWmJmX3DAtFW76iHmSyty99LjWCLx37eFcGqTgSXWbhsBVJjhm6Sncwqts2uz31QvKQT2mrYHdUvAe",
  "key32": "5L57PRC8SXMgVWgkYB6ugkkZAgygW9Vf8H3M9xUzaSm32KDDox7TPJVuhuUqqSYufvTQG33mepT1YNooDWvSDUiP",
  "key33": "2TGmfadpdXfjjQCQs7nmuVGigzGCFW7EHg1z5vTjvZ6Js4WTDhpcD2YhnqrkWXuiEwtuNiMSMyQwW6fUYtNn1sNn",
  "key34": "3TomQ3cxX3GVW8P3y9jeWtGcq5zhuNnw8RPiYndoWw73rWszhQWxo3jFpJSoyvtKJCM4dCCzVW6bDkKH5WHa3qR7",
  "key35": "4FQgKRen5hJ4tjJUaGLWeWd73z6APeGuUs3fieEhaMq25cCqfUqmb1muxayWYQ8BYPo6KMo77jMPQsFww1enPtK1",
  "key36": "4tvKmvfV5qi6TBZSXYX16U4vrrCApC2Pb1kAN7o4xqzHH9aVoJZTK8DjetJu726yJ8VWgEbfFAAebtCJzWkMJVMT",
  "key37": "4JYHRSnvNGbVQgT2fxKiLZvzkWMM9QmiU1u69YT4BKtNitdV5127Vfnd3EQBrNiqBWPjXwVCQh4jaEWwiaxcjKwL",
  "key38": "5KkA3eGBZ8JoKUiyj34UK4zq3ERquHSpgR5KKYJmGvU4FRBuHHo8r4SppM3sUmWaZyynXhmvXDUciry2K1EgAjEH",
  "key39": "3v9f95rcmLxCKRUr1p2HDbApRCFDiodSUkFPxFQ1AneQSbovzfAkVkRbFWZobG1hsLzZxwBNkRx7uRASexQXNdv2",
  "key40": "4b6E5cN9bfgB5ThDE4wrE23w5CbAfjiuAYtYmcvvcQuxtSzN7Z53gDsLmyiKMSjD1y1yiuqqz7Mmx4JBT4hNmqd3",
  "key41": "5CjnTUQJ4j8oLCN7bcXvuGB6k9dBDJjSS4vsaxihDtn2XHbiTCNTQdYxT2DT5kUd5Cdv87L7tdSaidvb3Ve5YWny",
  "key42": "2BcrvXMDA1foD1KQXWHwSZnmoRWkefisTyTK6czcVMkSd96iB4TipujUFWyqk1sLBgddDtQEHgh3HxedETbQYdMf",
  "key43": "4MMHqFPkCa7HMK9zkfidn4SxjF7Zsv5nMtkwZWTS1kmadbxDT7yX7Ct7wPUyPLpBBDxXdcNhzS5va8ZWdi281LZE",
  "key44": "47GvTMzPARiQqfkU613qeH7wEZUSfYb2rKYFobjuJdBVDayyrdZgH4hPtJEqhHpMtVrHeHjszd5GXNm4xY7kTLPB"
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
