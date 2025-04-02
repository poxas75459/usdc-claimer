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
    "5D68q6uPFki7ujRSTus4vN3UJA7m2ionSHour9BTTqssythM5JWM2Zjrk7yPq9g1mrjZxChLmqHKLbVX3ebWxTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QBEkRfeVf5UYFhN2Pby2VMZpJj3UxkVNCLKZLjpB9VyKJocGCUSfVzuqm17E613HJorfcZ86WkTJddKwL2fV5X5",
  "key1": "BYhnX9V1Tbv2xSNR9yN8udyQvEH2PXRPvwL5AnXPafGaonwJ7g5keLjLMZH2WYtFv3XK9LdSf7DHX5UxxbES5eu",
  "key2": "5GG8stm9vsEFXNyrPafBPwmmHe6MabPiVsMcHhsFZv8KQUNfbPixxW35APgX4y9UovLiG8erAzw24jhX52pKZJf7",
  "key3": "4TQngZ1T59xXWKSoaJYqf47QPt2E8YxeKWkcaNnVpjerTi4adYzmhtPxHuLmh3Rd8zGNV2RUeJx6WBzj4UnNAbBj",
  "key4": "4TPMQXQ5GhMxv6xmzQSVHPA6teU4KdfQZFwZR3RAAV9XYPKAcihciGUuXou4nN9aaFb5YAQ9L9ftPxGW5tJiqgj4",
  "key5": "5VonJkjGh16tZPw6BRsGTK3vaG5Up2iHuNPoFcpAUmo8WdHQg8qKcfriv1Wzxq8fnJRcoxBo87dXDiDqNUhvvknE",
  "key6": "2B9HU86cBtqg3ywSoWEAaiUgAiUKd8bbisJn9ykWwMWQjWJdicmKSg1ahu41CNysvRby7pMu6Q17FWFHiXxYknjk",
  "key7": "35PTPt3MzAUdUbx9hCPWgZWjFXjdWFFXixjni4VgmNNQQjfkVoaNHqG4NmE3JJRYTbfHe2vBBq6McdBKAzXbhqtx",
  "key8": "4JapX1c4aoKJFLpk64i7oPCv2xAHWkKhZxioFyecREfTXJd1jEFk7kUvnRGeZgrFa3FTXFJFNtfKM1osn8VKJJG3",
  "key9": "52QzAYmQuVSCscWa6TMu1XPrAR6y373zf77HVtFZnM4cKp7ctd62ujaKLGhnnHDx3uenorZpL4YLpKKpiGyegnp2",
  "key10": "25uKjt88kFnxudfmGukk8oNfmTzphaKsAiF8VpFjsD6zBj1SZmddp99X5kTbVUR3qqFys7MuKL571Akh5Xv3fxNo",
  "key11": "2m8WvY437yx74ZbjcnGX67cXfiJMXynbh8XjkNWUHuEvVWXNAYtWkqUYNmDd4AYNQqYGEiMeBKCCnmBcb7eSEs8x",
  "key12": "4AaZTuKKdGjWZBtogJqoCiVhbJTzLYZnYW3H2gN92ERo5YfgbDGZ4FbY6MUzno3FPYfTiK2ahy7T9FSSA1wybfcn",
  "key13": "4x7eKqpiRM8bQAvCieeg2HPCytxgu634LKz6JEGNzdrn3TDksie1r5r37Mw551FZaa2oSuLBu4eQ6dYGujgAqjwp",
  "key14": "3mxwRV8oEDABxNyTJRKmrCJK4RLL6kPByKxDnY3T8WNhdpmtgWEYjsGq7VMTW2kFcBeqon1wKMzDdoFrdT2p1hHg",
  "key15": "d4USAraPX1BjBeXXgftCQmZH1eQq8KajBQceV7kQXyEA79RQsDF9AP5k6vALbL5nKyZp7L9CBTiqV4ZMgW4KMkA",
  "key16": "4KKdY1cZvzn521NWHjj1ddvGiDsd2cko6sZ64k2Mi9y1hE42ho2FEEr2AAsWw4QTVjaNVkFQ8sRvTvZuEfuwquPs",
  "key17": "2C1YP8s1LWLWhBq3nE93nncKXxeanYbs6X6C58615vJckL98BwCFYjxK6izyToU2rRXpiNQvpYsQkKD8hEGoJuhZ",
  "key18": "2eiRK3ba92gPsKePwHgDfV77FkD3DER9EqmrrsYxCWJuFatxP8DdcP2uw5XFGZHq7LhZirq56zx5JqTzryLnDH89",
  "key19": "5A7K9WJE6nULFdYsosXt9Un2Y2Ro6LNcndkdAgUnqRJ7afaLYpAPACWguqorWkpLR6XZAUQm2CqkH9VLKY9xkcvo",
  "key20": "rj6wWqaBb8EAdQ9RenDY3skAdwN6M2R5NSmYUngerzeGiGaaWkpQ5B4ZYzqtbBvaXddpSiJF1SLMysYqfFSFQGi",
  "key21": "4JHm2R5jzN6J8648ZCYUrZCBzjP5AVxuCwQuXH6DFa2KTWWydHrGww3scQR2S74f3tNcDw6V9X8RgCxMTH3xZeqK",
  "key22": "N1TBJB58M7FYLfUa8RhibRSQtR31uc6XHsq6op8TJNKTZnE2RhxaYR7fVioWByy9XpncxpcNiMG3ZDz4PLgtwyy",
  "key23": "2xbLogcLqWGvizTjVcesHGBVgfcX6CcWju1H5atBdk28Y7QYdCbHHR6kQUAnjmQQxP1k2T9Ek1WFKcat78uxuci6",
  "key24": "3EiNnomo6srzX2XLv71o4qWr8wM3UuCHqBfJdbgTNuJnb2e1exjtq33kfQgD5iA9q7HtRByc5eYjdw9rBK9efY8S",
  "key25": "4937wpuYfQJFNAzw1nxsxjPCbrBLyBrYmER8gfC5ygMt7HwkqjUVoCdxbYgBQ5e8G424wDBEms4Dpwe634V33Vma",
  "key26": "5yvDNJC51cAAX1dic3PZcXkVvFqh32YULZ5T58pEunLXQaU3kkGAQ8hBVh3J8RRRZjBoqHVWLCNbpuWc4dDGohgT",
  "key27": "5AUYT5rpjzvK6eKTsk8TxaZbMirh7aH17TpSfuRTrRZ8pair4f2mTGNbawLDfDJciNbcaMuztcEmJyheLKpK3DfV",
  "key28": "498mcxLTwWEqNrF5hxJmuyEtRSzCH1dTJJbJXSom8NTbJFDB3U1vgrjYSAxxJqsKZPJ3cCNBPSA6bQ6Kk2cuN6q",
  "key29": "nJEzzX8hade6thaZEvBNiF9nbcYukzu38VUZdSxWNgQ3dMQ9EMYXNz8d1UUk6BEXtxHEmx5KnnnyHeQ2iQdp1wQ",
  "key30": "5BvVXGMDgGjDsdSBUefzSLniE2QBPMdQ8V1Byz45eeFwBUX89uRRX5H7T9RKWF9T9WkDJpTbJodmvnL5kdB54jMp",
  "key31": "2tvowMB6JYJyPYySwoCcs4yKVGZbMW7k7uLiciByiz3TWFXtFMY9SmCWfyaLy283DSX5MoQo2fqh8ieUVAxrBRER"
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
