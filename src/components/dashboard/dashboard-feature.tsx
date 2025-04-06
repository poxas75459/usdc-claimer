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
    "5DgxCsqhzzvmX9HpcN5cHdWcyXtdeWAkyrKWJJEC5393Q5FWkD2LcHa3L9sbqWsEdnGf3cWwgNjc7GVVQ2vpMWEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49QLbbLkWzxUspxX7i1rHoxjhwDBNVfDCyveRBiWmr3N5z6EW3zXNYmaKsaYW5trBAFNBeGHWQiXeePnH2QWF3hK",
  "key1": "3DX8rd2iWqedL4iRbZ3PZHxCd7eK3PZcEDCYNAHb3cokmDYy2hoj2nDhvqXH7TKABd1FytzDbkeuvKvBi5Hju4XX",
  "key2": "LxL3AZ534oCX7t5NT5aAMgNoYyvh2VWuN1JTJg6S3NqXUq3vEMTZvaEghLKkiwfTRCziA3gydJ1oqGpVGGCfL4e",
  "key3": "6inrSArvYwU4cmuZpBXQJHuLopfgXiYfr8iNTJAsqdyruzmuQLeCeumjzF2xnFKkZPP7ydhLcGtyYUMR4RVXjYm",
  "key4": "3woZusZZJ2A7VeyMZ5FhRsDibUG6JMHQ1CocTGpNnpfNgDZB1K1JyoXMKrghMwnXvcyjtSjSB94UDB3M1LYEMkqV",
  "key5": "2wVUVefdVzgHTjDNLoNXCjJGw44S6hUyvVP445asKW4mZuF5LFSc1tVkypjZrBqEGBBwkq1fRBM28udTVCKMnVxu",
  "key6": "HwoMS6Tez7Qc4TDVY2v6716Rz6dBRNMEmukbCbMxrGts8ax6GEQmz9VcnZv8n5RA4PDbkMDfY83uwt2716XmdAa",
  "key7": "5BRG3QMkPCzoFBxGC2MHv18rFP87zcw5KcTV5NgXFMFyQ9vy6Aq7isqCqsWtzkFUHJr84sFvzWaQsA7sRVZFD9pY",
  "key8": "3A3bBXJuwSMcfA7fVmmwh6XLQ3aymYDMaxka1VubqQ5BwZveViGCfsDGqfqedTiGRrVnL2CTPyuPdBwXnKxweaUD",
  "key9": "36KFAP894kA44HjmaNSYCKJNNyxPFwhZXbHsemYTuhdreC3u4TUdYsBQfyH6AuhBrP7i8R9MqSttdn9TZPMxLqgG",
  "key10": "44mtxVj7Z6QcsPprLxuYsxBLmD5gvvq3C3Qzt13cS693gwQ6c8hegoJGspcwvaggPT65mLYSng23k2UbGnvQbXWc",
  "key11": "4gMoPw1He5ayqwTN3JXivSyByFAjajnhoPW1WAoEenta8gBRUZEMhU5WEokUYnFj4A86hYryTuMshjPapKAwXw7e",
  "key12": "3C2wrekky2mwDQ3bjmedDRM9rDNTFbnRykwgrixbd83nJGzntuMCBSykEFCQ5AxuVVkYnxwHR2TqbApWetDKVSgK",
  "key13": "5JRTQ4rHxUSpFnVihhdSVJ86GiUvdQCX2eUqeWnMhkkspt34c1TpTxzUuAbJWqmsiGQd3e4dQ3hFYZXTVy1nz9UU",
  "key14": "5HFp8H3RmkScLnpkP4RYTxNUniFMZmkpyovr4BvJqvSCmJN79Cv4tebhzq5CzPmExyXEN8wFw9R457TrHLSUtPZx",
  "key15": "2XsdjpaC8Uairtm1mM7vojzSptubSVE13cgNjFGvSY7WhiaynsdFZsu5zSXXFYpnMnfiykt777jHSAhhtexKpBiC",
  "key16": "2jP87D4hyx9F3vK84AYqzogZvd3ZV7avSJzEa3ZvRGc58JJGFEzkLknxHhUa1JKopCnTpedH6KtAUYmCVZA6pqNr",
  "key17": "29hRyF223qTb7KRvW85tzNPMJpgprQymiadPh9uMB2ZPhPb75ipwDreW68LuyseaZqMRxr7zHsNA5MDyxFvLTURB",
  "key18": "34gkhGNkgBLDBHdv8H3MyxS1EQqcxxHtHck49cSef3Ta57mTwvCJVKvH6RUojVsemaAZUpVkD5B5knUsJfMDeNB9",
  "key19": "Y4khyR2HkQqPjtnt1TbYnhXQpdmZkuxtWov9vUfWhgirkR8x8vEv649ZXk3xqMgHboYyu26UV8XY922HuuD4GSv",
  "key20": "4msUTCZhvtsts2mgFRv7ZEVmDp9Nb7KvGcMJotR3kuBwcLxJeoETVaN19upFsJvbJsLUDgE8YmcUaNywrdoywJPv",
  "key21": "2chndDdnt19ZjzksMJ9i1nYXhrmYXqRiJ5jJEAbNUxWfF6jEnJDRVq8TY1W5ReCmtXsS8hfqetU5ecR8v2XNpwZo",
  "key22": "5tJccF8R8riwbjGosW7sfaUgCN5XX2bhciK3pL8YxS23HftQfsKKExMP2nf9rkrdRcCGpQQdkxdnYUibwtPNb8dF",
  "key23": "31yNyr88yMpxnLqBgyck6roGETZDwbTuSJknEwavtcwZXc46vtynBGjmDiduVTKHXCu4wNYiePZWdQNpWHZ5f1CH",
  "key24": "3ACmLsxW5sbZHyAy4niqndM27tGoKhqgigF5m2JJYmeq8ZE6ovmroSbgdnT2Mo4VwJoJCZPa7SXeLHLPYyFQY5sX",
  "key25": "U9rTe7Y6LxsiU9PjWXb4h7RiPyY2TPp93amPX8My1rv1M1LBeQeZwHY1Ubj2Yp3fN5Cvi59an1CgEsKBjkriWvs",
  "key26": "3yLGc1t1AjNdepk1ZNzhsLQq7qvVjYUU4Xzc79fSd9wUywh9ijTA8YLk51NXbnmbHmTF8yFWtHYzgWirwpNXGtHS",
  "key27": "5MEgZbbrJKjQjhBi19pcck2sTuC5QgE1dgVWA6bUbgQ7m4JjAeNCodx5Aw1kWpFyCGHmf4RQ2RGbvfyWPYmJY1sq",
  "key28": "4qRWtkdmmXQ8N519RFk48FLFS6imFi8j55TD7GG5qtFoGHHUie8tfoCcNvXH6DuER9BuwpXgdd3J5UQkKjR3Ci7X",
  "key29": "5DM5M51GyJikfAeqew1oMWDyDAoXGwNLFPGd84XKUc8vAyGAWBVSgXmFjsdyXofZozQyGpTLFkE4hKxhPGvxfido",
  "key30": "3APmHGfPpK89JA1JH2GvzLnSXLdzfAqsQ5Hc7ek6HPcogrZ6N8FVAvVH9AgLY4eNxmugR7maSRGHNADJRuQrAjyz",
  "key31": "27GoGHviQPbg99jnrFhfPpjh9r1UdLrtj68aioXmcibqubMLj4xsxFz6Ezbiek2kkEJSpVaopKU9nMmk5eM7dXau",
  "key32": "56ti9yEiXwgvUA4U3E2966oVMRELrTZxKhQKPXvrdGqS9ZX2Q5jBe5VMbYEQX6YS5kUGMt5XdBYhGpfgiXi2NjqZ",
  "key33": "534n6FefD66wAjRVAqDCkoErEWik3UoMp6kiQJmoPkUNVqi9qWwKkBim1waHQvhnH5VqvfhQbcD3GhnPteiSnt8A",
  "key34": "2F62CAqCoVAhpYYH2sYMrDRsYvAEnxLGpQ3KHyuya1m8Cn4z23Yr3d2PiZVwQ2vpVyhVvft9yBwPWQFUaUZbUhfG",
  "key35": "47RZw4MAsxVTKzcnaZnSemHDAKeVBwy2r5xCJpEPmf4a42MMK34m4VstouMAQwN1AHd8JYXFXwXS4BQXQasMWE3Y",
  "key36": "3bTwQDZn3RwJcZnXppExAPzjer2ZbWjL4Y5BX7EjMGYWgMMDDMfuE4ETEoab46bFDxb36nxDJaGQGKFypYdqGSv6",
  "key37": "4cxFLUU9AnUCSJKyuuQmWBfRisty27C6VNtkoxVXrmVtv9NozX1pVXdsFwUcqUyr8CrLxzsZzfGYSX34PSsfeX4s",
  "key38": "3F8nvm89qSJRG1YNDKeodwLHSyJMAnDxcC9uamtrpeQh6Z9g4D9uhqzopAqWp1jvWDbD3wHuaev9hWMHBAjGt6UA"
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
