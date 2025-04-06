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
    "4vxCGTPuv4DPEjYJeK3hRC3WQZgXoSzRm2nhgRJvVNvFteH4tK8pm5MX6NsRF8TPbd5irdX3JZ6jDEKP3ztfFWKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3nUu2RkjsuYwWhT4VHFDbWeECCMkwXsaiYPrS9USGu1DZ3N3FU2ywFVtXYMTtLJAfCcbUaFhmjtdLzNKyASmKY",
  "key1": "2r1e7bk73WMc234LF6FtP2Apqk9CKPCceZT1f94HqhVbxt9LPpvKXWCMWsPFeerGyAvMX2vxXYaSu1R632n7X1HK",
  "key2": "3TJBr3NrF1ctZu5iWzUzTUW4cBusFsuU1zVbsJqjaYPJj6ZXopMUZJQmTazpJCF21ouhopwwDfss4Fvwjq8bdqcz",
  "key3": "44fF6ctGCV972nzLeJ9Ch8MntH6Zc1Vyebd66YWRrpb862Fdqkhix73L93ECpdbV2taGV4hgJp1SSQWwz7jEhTL",
  "key4": "wRnk4uNhweV54rE3VoQzRAPZaVnk23bkH54yjZR68bcB8x1q5AWiFyuR5boKT6bHNt626uZMwt8CZodNvh3AGim",
  "key5": "gnJmJuMf6YoF8Z1AWCK9gvCLgPjZusxvG44Zh5x8BWKkUM7jzr5sdTKYR5hCJ29T9Z34ksK2DdKvtiFj8v5QaQ4",
  "key6": "2EaVW3RLXxXJ4tmiqCDLVf2k5o3j3CC5211BNqME7ZsruiYhjcfSd5nNK3uc92CCGTK6u3fTR1EeuMa4oWac86kh",
  "key7": "3EGgUG9UYGAfUM1v2Z9YGHk34bdnq5WrrnoM7NpKFkXUK19HtAkUpDbBoCeZftgpnMqkHMMny3Vg2cSSw8KdKB9k",
  "key8": "FjGhRJCg58S1oN2sDZH64RLHpe7H9vM3kMuJ5Ao7f7tmZH2uF6Zt7L2XnMp8Mcw9qBM2bqYT8WZferHe25HByQN",
  "key9": "3F7Mavn8xfdyWMWzy79VuZGzoMaX2qnpj27KEa132aKYcpDqeFKgo3b8AKeqFSiMzRpUSpti67NW6DfksHFXMc72",
  "key10": "2HWP36dDZNytiqKycYvKvPg2xy2Mzq4HsnnVjrxmumzz4zxJrVCvUSitMGsCQuq6MA95SxSR7Szr9zv3aUt7ctaN",
  "key11": "5CRCaFwmT7CyboocizirJuuBKZrKjFtPnXLFPUayuxgjnKKkV8Yuj6HmVN3pzeSh7QcCS7LcWfXzHb7FeTdcATdE",
  "key12": "2pgkqHoa6fBM3iSwbe2jqb41BcfSSQmqjsq18EZ1Uv4TEHUK99YBS6pUzVBCmuQXbwC7UynVhnBYRbrWQShPRz8e",
  "key13": "2TD13EbkNpAdY8FFVjPK25WwtJcRH9YSteeqUWfEAuADEU8mtTVAEphRmqd9xWN1oLoYbt9bZvEgj5YoGFMzhpQM",
  "key14": "4xyWBMJQuSa7JLcK7dNPYdHnNgRtwsPnv2k3dBsrzgxjgUyt1DGFbNKGdVcy15SwsJA2PWPqvsJWek8FojBhwRuq",
  "key15": "5JwRyt6wmusjVwSV5Tu9eRFAL2oT6NDdqhARyguEpc5bL9KhgJYbN3LDDD7AEMf6vWQm7jKAgLNUME8fCZXkvNPf",
  "key16": "64jQN56PFF8tJDgerij34VgBUbjJRykZnJR3nSX3NnZy28X3hzkTpp5CRTFTqznHehqZD4pqxUz5efzjxysjLgmt",
  "key17": "xUQz1PfSs3PCJXbMhp7nMVLQWUZeio1LLKThkzfWJgZKSyPDHCdSJ4jf7rw7zwUzJRDTJoHRcfGUSTtPLD6CBoF",
  "key18": "5JA98Dj6npSs96eoQz7pntpURBuJz2yYLLv9t4ZVJNxZM9gHetgxNxqGVt4Qv52Mzh6oAXHpDJY9FNgKVKj4BhPG",
  "key19": "28YvbQsz4akJpAmZzXQvqYQviw99YVu2dsfzJr5vPq28zLDuGa9SkWGXBD3xshum1fiLMboW67ukvXB7uvBEwA67",
  "key20": "5zeUv6qGT4kcFodCKJsqUym2Yyhwu85834SHZ9DtaP8mac1fqYHR6t6TgH4kyZmDrVrDN2eLumPnaoKJ9BcoSrSd",
  "key21": "3BXQNa7GphYaP4uQtVe2MVwc74gBgweS3G2cmeeKSRCFu2NLmY7N5mNKPVVzsVCbDMf1ikpWgWFNuhixyQiNyEQX",
  "key22": "5Uxe6jChimyKd3iD4a2SB8g99WpxXEhEe76wyxaM5PmwXvpcH4bDHvtXmVqfxbJxoDsVFqSPpofukQKyEM7a37KW",
  "key23": "5kA9HjaEFLE5d87ydF3YEb5ambUGdfKY11KEht8ntM7Kojfv3sFSwTP4AXG4pZXNjTx9rvNzne9Wktp77XA45zW9",
  "key24": "59xKGvha5fsvJDcJwi5S6j5uAPEhJ3wSxFaQLt16zz8EFWU71gb8PhKLkNn5wJxn7oDYw1gtNw4wdw4xzmEaryFm",
  "key25": "5DPEik9qUtdWtcXe3y11LhTGXFht42FLSPTF4KPJyjkfYEHGCkfLz8pWLAHou8iY4ESn7bXa3eRDJAunGA91YKkR",
  "key26": "3e5FMNmV6ubJ5U9XofaEic4CC63ufdgsPs9iP4Gnv8NmsgFxn2snTBntL7CVNMGzaPBMbpRvcRu3eC2w7sbsHXAx",
  "key27": "4DHy344EEWsFE2VKTVvwaZ8h7ep9kAk2MTyWo62sDsabwECnDjSyeV47CsMvNnuUwihmggBFgSngiDSHc3xdAuQe",
  "key28": "33XowCtLyPziChN8hKT71PbBbhKEfv7SBwQuYW4Vg3izmpagPQXALMTtyhbsj4AQKLJWZwmmqCfMxJj672FTHpi4",
  "key29": "5z1YzSp5hF51H8fxxq4L3R2UTAvp6XFsoAcRNhmAQMsVxq2WxGodK5tZAiiBBnER7vTmAgV2UbBJFZBTX3iaDhid",
  "key30": "B91ezgHFDLswuWx4NRu3t75ZTBs95nzN6UKgAWyuZZPKmhAc6xKCwNUXP96xEfkJkXou3vGbUpjn9cMYz8C4g7v",
  "key31": "2uYsvdwYHe3rs7uQptnrTp7ZSsHYtFfWNAHbeauHVsKsBeVXFLivFPoMH6ATUACxQUj77kahLNGWE5MA9SvKF5qR"
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
