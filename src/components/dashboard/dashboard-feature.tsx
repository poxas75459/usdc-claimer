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
    "t1qpohXzkPYbQwTn2n5TvacdZiD6mBytWMmZbZPehASB2s1av5TFXwoyRyLcY1FdDfqiufAGP8iAGRVFk4HQYtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRQY6j4QbckLPQTQ1disE99Szf8Cohd7Qwe6vdMbaiMGZ11wR6u5vPesXmAvqBSLe7rGA1YfCL1EnDcLvgJohWH",
  "key1": "4QdPYRAob2fCM19ZAq1gJyXMa7krbXhP8JJw71vZKxKz1ea21mtGMzo43XuBZzcPNwM4ivwfLjEsTJB2GgpXiurS",
  "key2": "2S5Dexj9KUw9AkuLjgw3rPNeG2adE75p47NVt5KznnHBzWCZPfs89vFuUZ9eDKyxT9N3PkQXMXBpPr9NWNsuKNip",
  "key3": "4hBwtJ6DtypRVxSVTkS6rKTBpeQTAkdzSpzSTfY9bwGRVXeVPCrqTUQxwvmjKrXZAUJejRq4KWXccbkkobtLbQ2m",
  "key4": "34pZYbpyNFfSRrrD77hpLDYAD51Bts1HEHcEzEiooSQ8i89xPyZhvGUst53JSXiQeB1hVgTFWu9GFNi2PsCDV7Sk",
  "key5": "2wEfPt9jMfPyDJ8kCaXQnmN7uXjC7aBo4XUw21TYW4qnjHAz3zgefmYkVd9YjPFCfdYBzaRX74f8ew4ky53JmY4K",
  "key6": "4b3FD8aZo9ToQeSKEbZjEgNZyP9oCbqPxLHcZcXZ3wG99WM4KgAkaim5Vo2xd7y6uSmnQndaG169tMfQogEEMUcG",
  "key7": "4hq3MqUHgvQ8TEVAFc8KULPPcNB1iZhvH6UrDHF7XYqDNeoSRgEGc1ozN8qiZaP4cWkwBGCuVnhE8TZHFiEm38a1",
  "key8": "5uBgZ9bdhAKaf3dZisZD3ANKR4Xm4wU3dt47eUXqimhvV6js6iaSqSq8cb9Y83DPPQw8NtNdQUUmMrMnRHSKrPa9",
  "key9": "2iTDWSGtF4QuAc1V1JPLixQroP6qj4HYUNC9LqnC2Dzr3cLK4tKobkdjF3sQ7L6GiYSgN8Ub1NPBrceS2FubaBkJ",
  "key10": "3gNftpXkFaLHdJtQZXAiN9Bq3d1MHnbgW2THKBj7Gx4X3WgPLdA7wYPvRT1HATyTGyEUwZydYKaFJSF2Sh9HAMKM",
  "key11": "SeCkQjnbaBgqRPrsi2sZ89oovDwugkxtvsZLfqYPYz46Jjhb1xAtMCi5Krbt83oTftBcVjk8UAcj7x4P6q7wVsk",
  "key12": "5AYtRSKKYtxnAWr1VR5VYuv5HRYY5gX6MrNSZVGBSBXFdLgKY5jsnXZrZ3qJZ2d47YsmeYfhYoPECBKCLF23j3fk",
  "key13": "4AWoqCADGVZZBFUonwujNhpHXeg5SFoyZ7dXMt77wc7KUXMRPe4Vp1Ekxmp58oKfBfbhB8nSCyssL9tvbN3YXnrG",
  "key14": "23rDxRp5MReMs2PohTTqpQHH9Bh5NB9dnZB642UZ2gfG9ChEMrHXWcAsMGfVyset8z5iRkVjyaqty26nYwQ6JDad",
  "key15": "5vw15AyV6oCHbndhEfDEytTcVhjKN9oTYVwiTLbc89NWriXZRhdfpmEb8Smro467SeMEzsLtzqXGELNJXSpqHuxP",
  "key16": "5UYrhdG4S7PXQrEjy6F1Wq8oHgL5s4gQ5A1RGCbudWGRNND1nsh9Rigj9V3AfAvdMudVzaf9Ghu44YTiYNfA9JAQ",
  "key17": "9EYYLfQL1JQVZpEwZkejWwTe92AvwMj3QmUPjYqdTGXXUo8hiKvutrhK3abeW4CxQyRhdzFqjmBMcPNMXaLrDZm",
  "key18": "64BcoMvMwu6nbBtFigKEGcMXn9VLbzYfg5wKqVm3hThnQwdSS3mGFnkWvnRi3Tkp1HwD6JbocUR5iy9ZBieFX77B",
  "key19": "5T98R5CmtNXWjZFSvvAR7gynzru8hSjaEVZfQdy7KffjkbyNx8ZdZtLg2FeYy24osktvvaFrtwRtNZwHkTv3ANGD",
  "key20": "5r1ZLiCZjyEGrxHxSkCdqGFE8cMWJof5u7wG2VHomM59STUuo8Qihk8fnmaw89HMSN63RgrT6mrqKSavq4Xp7e2p",
  "key21": "4oEfK6d93cjzYh8dRmeUfGj1aYdxJ5tiuQXoZLCynUPCwygwsqHqyPwG2MTwZRumMs9D4y5HJSou2YcAW4Qtec3r",
  "key22": "TbPNa1j2XXpsUa14wJ4mznMpSKwmt7n7sEv6uDbVyFKD5Uz8DcL1rjpwvrgd3mkXVjioGirz4YxN3UecqJCnsaL",
  "key23": "3TKG67trqK5kzBY4fKnv83kHLBwfotbX2t3LbfDCkBuQDvVGRVwpmNMP5Xe6srttVZNZNaiukYKWYsv7pwsGdnEE",
  "key24": "4TTCCS9MhyFR6MQL179zD1BGAaeaDm42CBKU2Jc4QmKyFZwr6jZ1Nv537Emt9ao5SYptjFiA2CrmTmf4gMvkEiAD",
  "key25": "3tnzWjDcoGdXMUQ3Q8MyvpEjbdNHBFHKXyxEiajv7jgb7hcFSfzAeJ45RZQeUgEb53g6qBnCKybMn3GFaZoMAqJ9",
  "key26": "7Kxe9FRZKJFJ7qmtRaRTNKKo1ajNUKsvqUcWzTNSP11PcC3dxEQ9kAji5EyuVQbpmg59kTJ9UQbQg93TVLuHx4b",
  "key27": "Lq5ehJwz9c2chCFDYRKdRjPH72T5nCtPYT5aGgndQb8HdKP4W8eKmxiUfXvR6ZWdLVsxz4f5t2EwWajojeiSGXB",
  "key28": "2zCdBzYwKwQHZzoN2NgH5NpAdacwXAomMRrnsaLAHGWEgSp4usnEBg9cerwCtTfs4dzdKLmUzChvPodzRZzXAfh2",
  "key29": "5iVxMNnm1fuDGadfvmjzLzURHdFw9btsjnEznHK71HFsqDWJNNvGKh3pYGSYgCFf2aNzn5nPVABmwxphWWp5qreA",
  "key30": "9hrLWA17F9thiFHzS8FFM6uCFuWhD8mQ1mkQpniG4XA1VRTkNr7AjmLB2HkAMXd7FhwpUzcUDvPZ5kavAy7o5yP",
  "key31": "2dUTRX5PryCroYnD1g9eZSZuJ5oXKJ6uv9QYBfhxcUamzNRnHT6ZT1QPtBvdf2nn2DRLBah9dV4Ydy1eAuT7k7z7",
  "key32": "4YZggyxhkxi8pr3FtAvWLSs3sZuN7DHgucpeRkh13Z17po3wi2iiEML7pqpXJi31bkqTz3dgcmJPyAQHVsbg67S",
  "key33": "3Yitnr8oS8j4icQ2Mo1fgpswx2VwP4m9HxCaAwy15RWnsmJJrxZYohqrKdbUwqB5zHPR6dyiJM6oWs1Em28dGUp3",
  "key34": "2b2D4YjYfnei78YzGMyfXzTMbCtkzakfJrSP1JuSdrScUXpgYajATfjmyjtmGRaR3vAjXY1fri6fkEYMwSTjXkdR",
  "key35": "41KZYwy9txUobfVEVNDjDc3tXKsubX8Dv25FnppxFgRDbr6fBkvqZs6EjbiXWXcwR2vCzUFKPkg5PWJRz6aGzAxs",
  "key36": "2Cx5Xo2cSM4Lz3BKiJikUzRCdazvxJ1jVNGopsD55MUsKXQ3e4Lq9tyfcJLyvtx1bENY6qZwk6nQV5LwPpBk9BxA",
  "key37": "4df47d6an8AVuRcbSHHYmZ9eBYBoLCxqNEzYDxzWxCQnV3URjJQoVV9Y9aa4Whtxa1qvpzsVpchKv5wCUrfyj6bw"
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
