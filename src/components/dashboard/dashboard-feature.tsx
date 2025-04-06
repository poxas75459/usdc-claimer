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
    "3m4RcK8L4URMhKt1gPG5tR6R8YbMZ8A5kDER9t3zkebPUExtGZya7FWL1448NEDwXnTCvEd23pcMXtWidvK1vW2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TCeXiSLeL6yW5dLYqXTuFrwmZYTsLFTs1nfrUfcRMLAsuxN6xMKbGCRxu9drrYSekCdeTLjJnAVfWJbNdgZBN18",
  "key1": "Qa2QTSrhQe3kiGhAssJnDheeE1WzUDyaHrUdmyNpVu8HnSyBL5re8pzSYurrTQG7aV9euQJt7StKT2ZHKj44wgW",
  "key2": "MAcXwLci35eYrS3uVNFmMAtWrNGjZWKLhGZUiiYeDnzPL2DE7F1UXZpFg866qX7dHftDThUyqex4LRUnU5jsm6F",
  "key3": "JGcro18BwrhYJbRDG59JBwE9eXERKoMBKuuwDsYiXKWwSxM3u1aq8heFVbgGGAZ3Pgn34PyHQfCcFjDFo8oGdWE",
  "key4": "2CiELxgdbjENHygFhqnGdxRL1R4SXbVAnUYGrGSeJkzWnUe4RFmdJaMq6C5jmZjPzwLr9e8tYH5X2EFwSemUGjUL",
  "key5": "4LsSRQiYV2tKHbUigUFS9b7tAoHLYcHGXUwJsyH49EkFyMATfCJxHDYy4g11y2LGr8siJbe4d6AuGaDki8mMZv5W",
  "key6": "5WU6rKcY7bGAyqi8RdWKZqghxErx7wfimiiEjfMVaNnmUGQxxScEeDVT8kAw47CJJBserBJq46HYDEsABdyLnHot",
  "key7": "5pFsYPXVqQTZ5dkGPcAamCsKUgNZArTLVQa3JZkV1geuUhQriUrTV3tANgDrYVJzjMC9bau797zejbUSiG3aaXoC",
  "key8": "55swnWPsmEbeQzCMSqc8NCec6ZtQXhm85ZhGDcKUpvWxC2WBT8qHdLgwXhCNH7FeqVTvYczk7zmaFRbpszieyDFt",
  "key9": "3nZqKNLFLG76b2UNfD4BowyjBQZRfFZrC51qJQyXkx7fj69WrHQeNLrD4oACBkky7izWuqzigeED4m8TGH8J4Gas",
  "key10": "2fnBCkSSKYU7piqBgjKh91tXhSsmpbzbsx8vTiV1co1ZnpRKKBT6UnufWyNLCZ3Q3Uibojju7uNXXXb2TCTuhZF8",
  "key11": "4PRLCJHo93qN4qaCkdJVd4EidR9nYk6uQTBFBDUqRkMLi2SZT54iCUmeCiw5JcwF4bC57EqA7xz4pCJuvvxDj6mV",
  "key12": "4xiQrvsZdJShzYEjzWdzd3JWX12ygvPBHBfDvFecz9AQJMqJRNDY2FfdCvgju7x5HYH4xKrTNLTxFSBqYumv3M5A",
  "key13": "GFa1LKKuSrTZWnAZkdj7DF7sPzeAjBj2nhbBriySWJ7o3KfpYVjeorgbRCMkMEjZj7pbAGPx3gRCcawZXkMMnhJ",
  "key14": "VV4j3rE5rWYhjH5F9BcovX8RuiFCF6EuCdQ6efipd5sdyb6wXLunL1UfiCxQRvp8o51WU9rJkdYEG47gW6RwGRq",
  "key15": "215dQMTn2mq2FvGX6AN8aRMXVWuxrgJPqfbQLKk5TeWN8GBUvbBBg2EB9GJ4Xr3Z8ZptW2EhERbR7jgeqNWE1QEo",
  "key16": "2SiFcKny9PrT2mA7LppSUQMPNnEgBY4ePPa4ajpnQVs3SivzrKidQfZwa81aTtnMzxNE3ccRNknqudM1itJaFAuv",
  "key17": "3p8rTECbSaWsNASNT2hoyRYCTRiK26cWpBYAuZguRQcJpeHyqZUfxTgFTEJHhTvrD7PBQ1S37aquJuzx21bbdKhL",
  "key18": "PhG7QoMFhV6RjUwYUGtPNaKSr1GvUn28HBXynbDMyv1XhnQAa4LgksAVCj1WJJPoU2rEAkYYH8fG3LdfGSp8dRE",
  "key19": "5XYz39H5LBE36MRzqsD6Jn2xTWnT6zjwbZoLWsxLvM6wnfAkjieeighiWg9Cq8JSibdm7UAdAyXcWQfP9PBtiXWC",
  "key20": "3NchZxPNafWPdMQKuhyqDkuyA99qKvwKzEXvbRCYvQyk1ZRRsMdcrfA8WRrCtze7e2N4uJZxgMrmnzssTGativPB",
  "key21": "4hzTQ8ZZZT6UxUWkc9XvVMFyPFnPwizcxdwHHH5W3wKk1qmuHk1WSpkr9RXnYTV3PB5ctC1ZxauwrF73ttwohgGE",
  "key22": "sV2tbrchepGNbgf7fD2Sk7fison4opmQZTu32rynQSngQTPzxxqreceVQ4ST1btZWJnyJaRoJXYLfFpn9sXZXE5",
  "key23": "tKbxncK32GmihStiNWEPkYCuceT6iiKRPjy15ThwXxzCq3BWvnFfe42gA71WWTKDVGdL3SPgJ95izjx5iZ5nBuY",
  "key24": "64a1V5k6Ksd2CfFWMUKmYkuTLo3oVBuKQBPSoZKDarZbivJ8fSDT751fWWCF398vSW6j7w2XbMpa1UkuVedXVm9t",
  "key25": "FKH8ZguDNaJpQTuyVxaTfgfYiwgMxk5akC1HKSr42nL7KSHyjPVLaD51ZMCctxCPpwAiGvEhKE2PZjfDKuxsB38",
  "key26": "4XA9Sk1svJEM5mX3sHpQbPFcndCNAUBHjEJV7FCTLZWbgd79RJSxsuaGaLwxoRYNFfzRChJY1eTaqtuFiyvRX4XR",
  "key27": "3df2wsmGR1cm1HpFafQkgHvKtZGQ3A4KixY1D5Vx9PuEGWtQaYR1ioMcfGPBgUXfqktJUeKLHxGfX59m1yjPzGjR",
  "key28": "5zQxwkxcCAycxZd6GouLTKamrgzG1WXa8VFJfsWubuTLPaJPYkvtQDRdTgGn5EFAjCW3KAdSSUa9M53fzrfyuq7K",
  "key29": "5yzKcsbSW3y15jcyum8xYa1vh1y5jS55UWz1eoCHBJoTfy9xwXQNhZEbRSspBybBpyGPwwZNE3f29wjVfWvZdHay",
  "key30": "4mJciVwDs7fBnP2KcjirbpQEq8rK7pBAtEPvfs2V3p7LECeQzVTy5rzwbTxPak1vGWaa69Bc5LdUi1wc9pLMfQ2a"
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
