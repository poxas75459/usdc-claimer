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
    "4HiYdYBFY781vh5DmJpF2XLDRQ7o2ghvEvWvNGvHF6Ada1jLNPaH1P733vNpzCp5qSgGZmWLuNnH9cqvRzbvXVLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KoU1n82qTi1rCqqcmGdjQcent51UP5ejo6fgUDFzYrT1ZhZPpB9eJNFn5g73j3XLbEkpJU89NRxvoCLYiFSam8c",
  "key1": "3TAsF5rFJHPDaNMtfxuDXms3YSu2qY8guvrKTVZWwk4MmynnG4ktpuUfZDMqTZogAdCPJk2FuYXeMiojjQS1kyBr",
  "key2": "65xnUryJQ3Ta3K3mva6TJBmCAUrakxLnEgPcpPYNgn6ohyUzsfwDi7XtZ2LuzmFZQZg9HnMkcigZoLqPvjPx1VGs",
  "key3": "NDBhRSn2mT9NWvCaXpSZF3JoZfU3ferPiktd8BLk7SVW7tNK1YTzPgxk1NjbodffUuQ9oSMA2J8AJXbiAT8ce3U",
  "key4": "3AdKxBZxmEJDLdLB9ZxVBuGYzkwmGgHosV7DtrJuxPjK3Vw1RzmiaZ2JXyNx6HNCGYGxyvHzSPzE6qmuHQU2EQ5Q",
  "key5": "2rDcUCUHKRYwBvrNvM9HbFJtiL62EwsuCRMNNBjhC4pmesvwit3CrY7fW6rBs4Td3bsdgV6yVZcfJSHLFY83HsLR",
  "key6": "3An2XvYxMpgj4uPiyDaypShsUng6VYCjRdgVBGzRUXD6kdaHgkWpfYy9esx8nAQnJ7JsWwBVFt6QqNqJ1xb4fwFd",
  "key7": "3Yt2YJUWaxu72kWvkbUTGgUBoPdZpX3BsS8idA7Ex9Lypq2jVqSVEtYfEQQWs5EWbxcLERS9oxMqyYV24QnqwWv4",
  "key8": "27FDsk2kL27BsVeb8KaYBuW5cWULTyZPNomhbQFvZvyUKSe1N1sB13Bwset969LfhQeDpKScedRq76RuwcrASXKD",
  "key9": "8mZyCSudo2xvCq4hHLG6PXdftrhUrCtSpPcE9EKqvbCkbFN8qU1PBdJ2A4HuSt4sMVjyPArnKQCySw4CRx2nMdm",
  "key10": "NTsGFq1AkqN5xWMxG5x4J6qF6XpdMjL7wAaBrcFuXk3wuFN2CtQfvh8uDKx7wTEsL9A4aMfs9yGArbsY7XwKk2C",
  "key11": "5EEaybQA1WfzPHguSGcgEDKrbqVCeaR42jw4G6ngVg48n3sTcMXGtNSZYCT4L8dm6fiAss6XxSFXe7sPeS3XX82H",
  "key12": "mxthLRDQuJ2DQutMDKUjcPJWPoWBSTqSHQf41fVTt9UzvYBasesWawLJNys5kbivCapkZTJrE7dcYBRyT5eJTo3",
  "key13": "kqi52wZn477gcptApWn6EEiNa1mRQwqNqyrpGzNe567NRSGsd2ReRgxhCUMpcZRczmU11JaZRSafwzZ25DxHixZ",
  "key14": "4WpweB8cgWUhxcy4uKjrxd711TTMsaR9UCR7qPkCNDsUWiYT9Qd18ZmkjEdGKaDqEMxtz8S7fNW3jwSqzU72y3yW",
  "key15": "5S3Ep8AgRjqM4GzLUWUZNQdrj3nkHfmhcuU6BdXw3xdkHk6PWCzCPJF5FKZHLak2q132H3xAb6WHh3KVkrM8vW3v",
  "key16": "46CCvz9hB44yn2bcNJAQ5aVWm61NM3fRNcWu64eAbcDBGxMMkcrnDaeVY9qyAhBz8NkUbaw4U5QzoTQ55fDfmwT1",
  "key17": "38WcXWvoWpxFC2vBdjY4KrKoytzbC57BjxpD9rBxL7GfAcCrTWsHEZsueWfAq3hTftUQKt715GY5KTh6pNHr5N7Z",
  "key18": "2MGE9s3ukiY9Yec2ks8yiyPrxT9LnYdWLbMxJhATTkuyQgjZ57oZbuqydhXspeHpGm7Z7ZF9BEReCK3ZaLdeawtL",
  "key19": "4BDVXVmVHDuXv716VWGcUBFmr4F3EUtqk4nWL2cc222hEzjRvSzbWW4hHq3TTXAqqofT9hw3vxH1dsZAuKW1yJso",
  "key20": "65BqyA6AeSojq8sjfj6JptaY1Gjc6aHhFeH5pm7f13uM6aBH6DwwX9GFPfukRyvyzz9PmNviAAReSiXNRowjgVw2",
  "key21": "vhVgadRZ9QphPRP8DgfS8x8QrULciBAHDEo1eAnsiPcrgmCc6Gb5CFNVjGw44PPvrJ4pKRsZXgtxFbTLGwnn2no",
  "key22": "4kwiNcTr1Pd6uN95gvbqdzga1wY2x1AL94KishXZADtjFtPd3p8nYJuYKSQSZECSXbc7b2tHP5A8K4GejAoVAZ5Z",
  "key23": "YjE24quPYBT7bcgMMkgtYfFXrMLatakY8yhVoHKvq8cTn2zR3sxvak7fE8eQdDNoLSCa3MhF873735Svq6UrZ8r",
  "key24": "4WK6FCpuC7oxkECmD7NmLD1EGQcM5MpZnED93QRMvGuLJKCZcDoGxob7LpsyjF2dXvZqqHDePSFM3bRh37TWRwNS",
  "key25": "3HP2bJUqU9MabosFaQYUJuFtGG39DuFyGRuCY82Rxtwkre6a3TJXx47FuSS4pNNELodK9pLqfZgPURJibNkgR792",
  "key26": "2Y8SHausisxQXyzx64uwLFhgp6zHXhAJ3c1uws6r3p6Trji57EkCCyv8KnBzpspkNvRqPyq18Po1AMxLnwt4pHMK",
  "key27": "2vjEkRK6LBgg2cqUbYM4SVgwhhRiAgDRDXf5esvhkvTMMvFoqt1QyzZHTfT7fM9memhPh95vXgkrSBdF4XqpS8wj",
  "key28": "2AFmcWhqPBNwRpVCKCX4sH5YYF1sDY9dLBFhxa4UJSNoxrZMGM7V4WNkK7asb2NhepwrdecnED8DEG86cwfH9unA",
  "key29": "2h6JWRK88rfYVuKDgBaGNEXnCNPvBwpRfWn4Aio5DWhWqmYrj26aLXB2DS2jtzPcepnYm1akQAKLUyhHH9sWKeBu",
  "key30": "3wnBVBnEwMtxAFrkARmmeKWH5zMrf9NSwPNWfHmYei2GAp7bcXaEmSzTZMfHfdGcCh8vMbFtFyHQhMeb2vC89a7X",
  "key31": "2dywkzLGVMyduQ4mcmyfeHWswnbEnr11Esj1bhehz1ZgQ533zdf5fDwUj28CmuHbcpuEBxtpL5mrLdqRZf3yHB5A",
  "key32": "26NKmkkPqUCRLdKhYYAWV6x8zvTpD5ut7Zjs9FNVBzbAMJpEBmDVbhg8rY4H7srmf4ZVGBe7nLACzftg3aNjYFyf",
  "key33": "4fFSeqF3zk5jAtR1quSUwu4wsdgvQFRx1oU8z3QqontcRCyc4zN3Skh1hKjCSME6YymQBUmGMzftb5fxikD5AQLK",
  "key34": "63ZK3dyuNwXL51DR8tBn56zfv62XqzDcR4DEWX9da5SEiGXvgcRc4aeJKMCXTB2kbnzSzBPmVA8yU6G98wHwJKGC",
  "key35": "3qXt9sQxKa3AHaZUVNZN9yM5ZKx5AVbB2SuP1C5nHpbehYxmvbKYV9bAfS1VaZ5iCB8W2MNCk7rYKVHykTMYAMRy",
  "key36": "59cGUEkdSMetskc7Q1w29zENxRnAj6GQwc3txT3eQnVMkFYfdTrUm2XUss5h5fcNgjWpFb5VfL7xvXUNVMpr1ACP",
  "key37": "zYnQc6KRMV1XMDmc4mBYXQxLvJJRcvEbpXN6KdSf5NJEjeSNxiehibENrgTxKR9aFnKEAEKSLFCB89YqzVzPLHn",
  "key38": "57oibzkDPR56GS4SCeGEbm7aVsznU4CjN6yhw3YQV5ruHEL28MFuNrxqPugQBC1mFAhWLLQBjySW96atFuBfpeZw",
  "key39": "2M2U35XiGGL9FvfUEVGGtU9VB2gVDdg8sxYS9D1KKxsBebsykoTgf4e287QB4rDLGGpu8pu7D8eTC2sXdEWoZ22P",
  "key40": "53mdVvaJ99JRvCs8G1pcejeYTWU7sDbf3MRqdaDZFgtb22zzTqrEuDq6WzH8VqpE74cp7w4u8mcy5LSPJcfN2rWi",
  "key41": "1vCaEDCyRos3MEQyD86zfZ4W1dr7fuG3nBEjN7QGxdDjo8L1qP4Ch5cjWUvTkreDqaxeTSrfS2BXvq4kwyXU6mU",
  "key42": "2BdwkAKUYVSW2tMnthAC4DsKRPByt1mqaZnGCaWFTk2yBY365bKyqPGCn8hegystmyiwDgJy2GwtN1EMeCjLNCzB",
  "key43": "3dWNXEfSCCd4jh7h5HZCKu7kWvGkdLivmr8cjZFwjGXnKv38NqCP9hmPud9shghJrEC85CbzwaGrFjfDDRYtS5bS",
  "key44": "43yzQVLuN2DkfCX6X3vp3W8KEXeZP34p2sZff9ijAJ63wwazGyfXQwhc6v8UomyXiYzKwpvCzXQFiraE6d2vnFnc",
  "key45": "5bC2MiTtvNwTt1zHDgfnjkBGnXJ7YjKzReGmcMo4aQ3CR5rYNgbEeWUECJNHcLYmDDJNf22eU1F56RwjiwKYADwU",
  "key46": "2EdtvogUQ8mFUyJp7pc1663Du3KXDdjV75FMjiHLM9RZCAqVKYSQdL5otfDv91cy3zLLDCSzxXR7qxzo239WEoFi"
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
