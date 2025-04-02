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
    "256AevpiaRc7ezF6BDa9LKkHHe9ZhQBvcbMmw1syT9jrAgbbmM26W5kAQ2HVKrGxudYuSNRs51iU8MubSPn96GsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHVXxtPxbDzaTphrpFcDQMY19HVMRUdGxpTkGu7RY8bMKL2s1W9B1ULYorK4rSsxyJPesfSpVfLSQkD9eQhqvKx",
  "key1": "D2Wq4sG1iprP3dV7oZey5ni3fVSWppCGVN4Cz8vySK8setgxecRqjopMbhjWhEyBgHLazb2hxgVVfVUQkrQh1BH",
  "key2": "xnR3bM55G7MGqYHTprDiLJRgtSA6bQCEv6NTkoUFVSX28vhjiahfUaZwEyJKpsp8gEhq3r9ALjN99PJJAE7XNbY",
  "key3": "3ECH5fyKfYSMHZcpQMHg1piCmacpgtGSqPQcrsSzGEiQ4PGj6KjU5VhQJpZDGnVF5qf7LkkqLPCjkA5NBafFfMBS",
  "key4": "4kuPCoarSFKmHNmPQ6kK7Fg2x9FjCrTW5aUcCyeJfLhPu8nbyEtQNCZ33NANykSEFFZ7ZbgkYydmc57d7PXhrjzT",
  "key5": "5Ggv4kiRDQ6ikfkaCBdGCg1i9KjHMkCaXTkaUw3qxraDhqEFX28NK6ASeVCSkJQqye4w2KJbqXoJquPw9ZVxiJv9",
  "key6": "5CgMpC7LwNEJWYcYeQZY6h6rvQypiXJcVsGCxa3oHdunNubPCEFYKxSDD4xev6rpzTVQXEmJX3vh7u13ey1uq81x",
  "key7": "1cCxNfzBncHyBrgBwiDanskDMF1baTxz4bc4tQuCdAyFDABPU7qHZVCzGSNX7oLt3r5MmXsSQBuoQW9AbDwpLzV",
  "key8": "4YgGHC6hXRpHKRhfFUkvHHFtKCL3dsyyaqarfcgN9nbVwDgNbZc5HGq5CKNbXcvx7kQHcgbsknDCjRiDydQyHGfK",
  "key9": "9PyZS31qSDSfe2AHPCFbjmrPuoHa27Qh6GFmaZDUypLmpf4bCEbTBUF4cne7LJyYPud3FjQiQbSJFwG9ggYpN9q",
  "key10": "2hBvn8rmzGXE7b6RhqQMVpMpS97FwpM61raymNiLfTRvXZ6x2WLsLqQeY9gYgPzxWSN2QFfuXZVStc7utsSAWmRP",
  "key11": "57xMJscnkwHecdLyKipPjePMaNb1SMSyfTjzucSmpR2vUDU5GWHw4qwjEJtW44bjmQNadH6eHejam8jHeTvoBZtx",
  "key12": "Ntfhz1Ai8fSFXUgPKYKczQq6TvUDaQ8qRQBtDmbVqQPokT53WfuaJT8HQTbBsFVaYPu9sF4CsJqrRPXJeFbL2HR",
  "key13": "32rXQsz1ZrKa2JtmTrBaGLPRDrmWJtjgWsBN1t4vnYQPcj92DPWTNnzCQHdq9m4bmCKLtm94x3yCHEGWBpoKNAQr",
  "key14": "4ym74Y62xYQiK8kpPxhkWQ7petJb3WpXcrjSi49wr3Nedp7TgEzDaCjHFExVfGiSv1sDZW7Firwn3A9HsZRyUb3T",
  "key15": "xTzicPPr1LBuNgVmVLjsBUSgyX1uHrXSp73H6da6WjfZRHL7UD4Nw9bUyu4mr3oeVsAAemHed7pScLYCJyG6kc5",
  "key16": "5Hn4hY2fyu3mCALsztehBhWEhP589JfqM4VCEPoLmAJQoZ9k75hMJy6UAixgmuqQe9NMeVJdP7VJJ6e1yi3LUxy3",
  "key17": "4Ne1K4oAiieB7uvjw4TVNTzESR3T7Cfcov1kLRJ5DtQdT6FFammwsrmCL31rYvbTw3vPFsXqNYwSxYNsHp3D9gcm",
  "key18": "42joC6MDYLwcSfHrNmyJE4NJMayiDL1YxCbczbxcMHqjxjvb5DMhsx5hQc77dxCGLbW9Lp2mEGzYoRbim9cgWchG",
  "key19": "2Qyuz8wiDeEcBW64hGDq7BPBhYtoSaBissQeT5FvF7zK6w2LVNQjqfJcEiyNYnzM97ip95HNMhqMosGS1HsQ9Y1Z",
  "key20": "4bcsNatQHkoFZDHaLPGiGLZQHRhWF8WjUVzhybJMkS5itatmuHqMCopiiRGyHYS6HDDc7W9p8pJZyL7T3xLB1tuC",
  "key21": "3s2e51jCK82hFhMMUx5T94oYxujGNvATDgatbePfhjxpt7dXyBW7Ge9BkEVoQuwrM4E4pAWf8UPyUwwFhpTvzSdR",
  "key22": "2YfCHSG46dbSKgksSMUR6fF5HRs4SJPjJLxPKcrB4DiFkwVzMD8jX9KnBgzXX7fqFfsxfRx5NjjHgFVddXhsTBEH",
  "key23": "41yhtgbFwzMz2ZuESG8YVGGMq9nFpRNbo1iHJWCyH4TctY5xRtiotPSGyknN8dARggkDSb7KpXnX46uAnZ8NDJSB",
  "key24": "2BFC8UUsuJR4mQsMTqgHdVAsTuQxh45y55X62rEZmcuUyom4aa3M6Bxt8r3A2n6wqa8H1Rr4DQortHksZU1kkXa2",
  "key25": "5i3hctRXrfjELF9HU2XeABq7t457nnk7VFpkh95cFjennnxSt3xkRBgXHv7PbDfYtcXxuDY3oPNgc3RNw9YdiD6f",
  "key26": "27Vii89NMGZ3EkzsGjutXMJiaihPxi2S38PnKLGvzAizzVrL25TtQpWryVL2norbVogYykohm9VMzju4Bm1WzbZX",
  "key27": "2cWKgVgUGfgngF5NUfRErXx94MLtDEEX5mcL1g8hCVFoCKphaaHim1nUBjSY9fG516YJJdKdrdCHXHLvzYWUWWsU",
  "key28": "5ULyzCJadKrb9yPA2b6qUDPCH6mGVZZN9Stq5dPppTcv9reNVAWBE3Z6QDvJBDmXdM3ytgMaVsPwfaNxf7Wq5oAB",
  "key29": "3VCY25r7FgGZB13Uee2fahZoeKY5ZmeWFT2w8TvgtrsqPEu1G3PfZerzarAGSez5yqXHALTrzqFEruKDNYHAfdDS",
  "key30": "2UZhvXyhfQbXegqdCnTzWob4Wsgc3akhv4qhro4RoM3K29yTvzsZcLb79bGcaBHE8HJTkwwkwrU5rqgQHsxfLngd",
  "key31": "5T752N774NZCYqDUXtpg7NaGzSXeTLU5hB97nXKCThunxHVStxMGDjDbDNht4sLaTb5jx345Gw2PHCrcQTVGPDyr",
  "key32": "5rNgDxzU8m9c4ManRi7ecYarRRrMpbHQVpenjMb4UXsZpgRsap3ZpMVzqhANTngJqPx8A9hYUUJ7YKZa7hYXLeDk",
  "key33": "3dDvFK4usouwLFBKbQqF3FpENuv6r6Rk9i6KfN5xtijDBihiy2PBoAzX7j7Ha2VrZ62qLeSNVQXQy8f3grS9E2FK",
  "key34": "64Q7kgT2QiJZYXfxQnQkQPXo1GDL9fwKTtKy1UzgwsXKPXLuWGoZXMErM4evJ5sn7UCaKP46M22VYUSDgp1TQYMe",
  "key35": "3j36uBeVwHZZFFUMeFq8AqPsWfudcPNJp1QgobhrnDkneb7nxqWeENytVf5XWR4FBcdBDKEcjDUio3oNKYPkT6L6",
  "key36": "sDK1VGeXAwJXLxapTgoMGGzYty6V6pyzvYAh46mPuvG5yyaV9HFJ3qdU5fVL74dN21CVDGqfNT29iycjHhfuqkX",
  "key37": "5uH5WZT27qFLunTHKLK8tRjcVR6TjWvRir1cARawK7xaZjhuhQENDLgZczqdP3dFHD45UPdpZDL3hK79puQR4Qmy"
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
