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
    "4Tep7gXFVjBG9GWDyeRQQoFcVsSkR5ySiSA4Drm7AhTe71wzUoyBV2Q8XiLyRbfKskQZ5q2F1L8KBUXdyBN2xuMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zaC2NCtkqpLDN5Z88xkJEmAE2kqypJvEwbD32jqysDg2m5gXXK5TVnWmPvMYxzfj2ySYKNswR5bePp6u7qnHU1m",
  "key1": "3YB5vatsLZsjJmHvMBtBP1auG8R4fq3F55Hwd6XdJ6GFBZsp94LrVt8yJ31781CPnT4w92Ttv64QuoXpiNMU62Pm",
  "key2": "26TxqJE9g6KnxWTGVDvv3WxDvYKXz44UNPNpTwrmYRjdHNHqjcxKBRAHsHZEAqm3oCDDF7A8xwiaWoML8rpXwyx6",
  "key3": "3epSPb1vArvG2cywvtRBSPRp7Aa86wo469hSppUfi43sLTvw8TZs9P9DxA3Lok5N1YmQi3Uh2Gr8Vk222Cd4NYuH",
  "key4": "1bbXNZosj3RDspUNShUBaUqme2mXa8Y91YBccLRjTkqCEM17mTQhiFhxJ8cpVsWDA97RUrjop7i5n6iUFJwDixT",
  "key5": "31jYPM9hMJq6Ue7Nme8b9yVm3K2NTUAwQ1DvURD9B7gHVjCqyFLcYGxHv7HGUogwbL2bK17FgWtNKjTPXQMQhxd3",
  "key6": "2STosHecEx2QKcFMgimmCsAnqCXpbQgowok5H43TdhKRZJj77WvWJ8NxisUfxT11euuHvv9pNS7RYpJhakbZFzRs",
  "key7": "2f3gtpwbi4Ev3Xnk9gPe3EhzbmGsUAZkcUAw4uwU2nduZuogaKXF7WreRKRLans56usGGovuvDzSvWsuR2rFF6hc",
  "key8": "493JzpzpyYtGGB1f4UMVva71DSegFsSDu58Gejdg4PkPuoHM9FoZ4NGEfeyiFHor7BVGDh6YERoFn71ssdv5nGsJ",
  "key9": "2BaZ9UT3uKZKf7CVK4VDsS5XHQTY3ir77CDC8uhbkZ6ghWQCdmk6iUwQqiVS5VqQFgu1ZYrFJp969JvbKggeWvWJ",
  "key10": "5C3Taw1pJM9BuGCwxJ7h2R94m4yQo1Ty8SbXKutkjqcymimipZSQLtot67wNHbQb77jqRwDrU56SP5c8gYgAhhUh",
  "key11": "2NzYJs3bVh2k6yHE7WCJNfYxWDMYPT3HZcbZAHsC5twZMLWJufW3JDYJeeFsgMdiGz2vJzS1yBu8YKEYJGENXgDu",
  "key12": "3XACd1SZ6HuHRwfzRC73Bo7tV2kemgPVju2J6EpLGkuVc1dYf7SzpP3s5LTeCeNymq1UpiNcXfKcY8NT5FpiG6gD",
  "key13": "G1NszwQ63tvC91mCodJc58nTML3TDpQFGSciyJGiCUhvyPSmX4jteVBuxXRV2MwthxpamN56pjsdiBffNxtf68G",
  "key14": "4T3DWntgYvMBBCAoUenQg87kWR7Wszo1Z8ReyAUyzrNLnHqXRF5SzXFLoDAqKpuuZV16MKGkaAsxioQ9fBLbznhc",
  "key15": "5qMTTtwvfmpmVy7aLQmcWz1nmbKPEQCxhm5eELW3HiiCM5ech4t3CUqp4yNobdxG9eNj3KdMmMPYT375oXeqwby8",
  "key16": "5bUHJoaXz4We6k53H8Lh7ga5KBZsfpJXGMVX9yRAbKJqk7JvN3pFPLjcoDQmmPp4NagbuogvuGQNwgcsu458hVY8",
  "key17": "5gpfjc9sx3ryaZWRLNX9gocq76FynjR64G5xt1BNhhZKxKPfiCTNpPg2eo9dooLPHgPKHs3gi3C3yUHCjowrFtxb",
  "key18": "49aQGnvN7RrTpHsfEi3hCNCfJPhyuZReHgKS5mVi8W2S8zA2RUHNy6ZdLJo5ZhAh7qWd4BmBh8js3ox2442uFzn",
  "key19": "dA1HGFtosAeZiJm41K2j1UYA5D64P3YrDLSbBKvSa2U5HkUxNWDF2Tb9VNc2m1sLX8RKw1TeGHsyNCTSQJv1cLx",
  "key20": "5E5JKwbUVyfRWFqnJSm22N9cX4W6PnXaYt9QoFWfcqNvgyPqX4ZgYQXiii52XFbdSBpbJMdYH5YwuuoyLhrLRjhT",
  "key21": "4Q8kBEnXV4JbiDJA4H5mEiraNChEPPUFqoFNWWrp4vvGMyLSa7feJhupdiZudNBNAyqA6gAYZtZz6J4nipgH2kFD",
  "key22": "37Hw3qBssVzFJBv2BNSXyfrCDu3sP2jCZiCdwopxW2LNocKxqfBZGJg98SNvjfMoVanjUWPdfx18CQDpp6U8AaqY",
  "key23": "2vvMuxW5VNETixsAEqaZmyeCbafhSmXgxv6c7B1zbHyCTkBZzeJF15v236ufctRVMKuUNp9Cvgs1iErDEML9BoTu",
  "key24": "4ZmMB8kK6rqtPnwGXZFXq7ddoxBDQe7yq26E5mkkEQbbyeEQ2bXtkrDCNecHUBxedKr6pAwQCSvYvsoPpfND43EF",
  "key25": "52uJkJAM2Ry6ZdSbsf6jUiMVK64s5wmcrGxtSmsmfbyotwa4FPAfzsVTe4GVURKUEeTH9feYkphvsmLxtFCkRzJh",
  "key26": "656SVoiXvDC97EEGaLX9CoscJoK9iU3oX4R27HAe1oafueWMKUb5ir8RUZdvjTnHnq9EhSLs6KUUUzvbZU1SHmnR",
  "key27": "rQe1vSccQ42epyA2EsQEoehXsZP4Rw2fKzWhc9NsmjnV95QzYNGhMtdorpj2PDktYccRwuuTdYW6FoeJ4nSQBDH",
  "key28": "KgYsaQHr4Ts4naJzyaTvHdqr3MtMMVQ4BZCNSsoiF8gjK5KXvXwZBigbZtppG9Dcm4w1HMAewHVqKmphHASWqj4",
  "key29": "4AMD4n1acW5CaVna56t2HnsCuFRDpfFccq7pwkRa6vrEdSg8yKx7kTZqKLCwZAfbUwEpmpnJTu9tikGZtVWgmgV6",
  "key30": "49ajsVg4D2QiGPKTT8f3As2A1XWQ9u9BfLNjnsFzfS66wBikZE5btT5aciuPLNJTUWhLfhiMRRRjT58RZzDj9x4G",
  "key31": "39P9aqMQQYczu9XWC6jyVv8SSjDx2XSysBuryLVsd9b7NzXS8bmq5mzNDZiYo2DX6ibHNXHgNTPGAxWutYd7vRwS",
  "key32": "4u9fpUBW7CNLufApCkga8gdXzzLBvbzf9qTkF26VeqgH269pT7GWXHdf239ZQogDxFZ2KUQFbXzYCZfLDqYAuMJj",
  "key33": "amLTdRmmaQ2usCBZnwbpqUGYJeXk27NahfWqGs71Dj7uufuDwyuptLYxKYmhQkPDkPsDzEWrrQgdvhKGUcABQWd",
  "key34": "3d7wonaTrPo8n6RXuKRYYSUKTrQ841Xog3e5wjGbeYi5k96zHZSGSe3D5v5yU6w4qLnTKr8oG6YtBwxsM9WZMGtK",
  "key35": "3GStcwhEHmu9wirGQjJRNxfot25Wqbb6XVWkaMWXBFVPYPawjmv3YRycy5pHDVJ3t7FY5yNQc66TZ8JFb6hF9fkN",
  "key36": "4bp6FdajyTxeQsp21B58akLePQ57a5PXa1zyPVfiuf8Gks9RMwqLPfnrxWneWcX9mV9PjEPcJAVKPeGDvNKLPBEL",
  "key37": "5bMNz62znjwyUGhSBie1ZKLSoWd1Vj9xdaa1nYp9uPrs1kq9uCtkuZRb3HmkjSMkx6QeBD7mPB8ieUrZG7US6rz5",
  "key38": "ogRjTRa19KDUBpQNuNFNDtBZFBD46JibYRHSZNQ5ZmcAmtoqHypLELQA86zWaxhR3qiN377GPF9iqBJDSaSretV",
  "key39": "3pqPPiXUZr7nJtMLxGz2WqaMXZMGxCthXfdSs5hTyocu1pjdJ6GMAqrWVqUCzrZ5xjSk4EzEFUCUddGMW5WkHJxj",
  "key40": "3zJyZVtQd6uXRAFk1hLzPF4o1WVgUQnUdgupXbdwciv6uUUiJCS86SEBrzQWowm4SGYdqsRTRFK1aMqSEWSQpkAh",
  "key41": "2L914ghX9wNJNu6VWj59hGWV62Mq7yMVARbNYc6SyAEzfsbXzHy7Jsn9gTJ91Ga1pFMY2MoXh89EMWZ86BkUfLQB",
  "key42": "2e1e338tWrHdcW2DsM6Pr74RZppaQuK4HYKiGiAC37Yk4j4hThRPHb9DwrJANGAXBvdzuUy24BxWy88h4uF3e79a",
  "key43": "2ZUh4NY5ASAqzuJ1ZWqgP7ziGS7kVEzHSiBcWDP8eEar4tVsjqQiMcHVvmJVtpo6LNvKVpkZMoQQXJRpWFHs4CZ7",
  "key44": "5LKj28896YdWcXuQrJ262zDNXuJSrexLwJMos2YeAgGSdRQ2av58WQ6RnWfLhinoFvmcennJfZzJYAmMvibefofJ"
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
