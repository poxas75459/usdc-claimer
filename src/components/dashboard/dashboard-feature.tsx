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
    "4naFK2ix94P6jGzSeZzUKjVwtLy48n557sU9MrPrbgNHxDXXxiFAb1jHwXPKKbCyA7kFvWUoq4xyGuLEpRv5ERQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dc9g82G1E6rW15TnJR7LQL7ZR6V1AZyZttRcw3FHXvzM25foGAMwBFBCSBeDMvD4vrp88DrTbCXN4QkxdLp8trm",
  "key1": "2Y3gWVCXoK8fyBwmRkjQaU4XiLzPTN68aKFormPz3oBJUiTm4kT5HZUzMbBu16dKV2hPWQYDF1R21pSeSNxEmLQW",
  "key2": "52xumJAjq8h5vX17SfxeZEEYoC6RQbFuBKJvUBMmMFzTmg5NaMbKH58d5gocJCCUKfBmH2ooDsK8s25AQxd7zV9B",
  "key3": "CDhVwBGX8597BjYnisNo69bZoo7YKdHMWNsyA7oe45hTXDH6Kuigp3o6y1QqqSkdt36fYsoQSUmyTrcUuABEgU7",
  "key4": "9wvs3hKbR4MhCzBmaxkfQTsaz4oZneaTYDVVfYD93xjDxWNyx78dg1FsG3bWPtYcyEv5CHrkQ9HwGbtir6qJxSi",
  "key5": "5ueJZRg2h2vboDUGFWKg2BVQFPc7NuT6BxDYijuEDUuByxJju4K68vsvSFz3uH9K4kJqf6rKawgLSanci5onXS3M",
  "key6": "4ygK5GgZavfZTXevSWUqVuUkECkzTng69dEvquNBKP2uKq2CERpr8fTtc8crGcQDtpSgFSe6GEKSTrCY8QRGMbdP",
  "key7": "ft7SzCqt3AxNQBK6rADUu7eQqrrbhkUaKGnmQVRMnEp2Y45w79ykhEYskigod3TwbVzmHwtDqD8rxW5D6kSpeVe",
  "key8": "2xMheqRJfrAUZfkPiWtJZerUWMHTTxavmsvDEsbjkangS9AoRJruZRrXbR1EVjEezitbPZf71zaW6xqGMttzuNfw",
  "key9": "38rK18zkqVARY5po4FgVaaLDAVtquSkEdP5W2wCTgMu7d7p1jHHsHuBHJ6KjgnPC2aWgPCZLmJKYaG4AuD4rAQDc",
  "key10": "3h575EpCREDU5eNo3LoZ9xc4Utdd1FTX4stswiJNqA4PASu76DTzmGWNLbPmv6GxX6BoQYDEZa48zB1hzLCNaVi4",
  "key11": "2ReVJ4hVtPfZfnKfi8B7ZPinANDBaKwLagGtkN7QeNeztVigeeF7GDSYEsKjquc87anQJE9wMf315cV4RD4pwRgA",
  "key12": "3XC7M9qogRM3dMpSHc3d1YtqKZhnkbt4HzcjrzgUjz9x1DW1BwnB1ncgdRWXwib3TM1L7G45HRni3cVKGYoaMBbY",
  "key13": "25jnJsZtQKqRLfGKzfePmMufbgC4j6T2LcxQVFExDssVDNsgyVHSLzFMjQNCWoZ5tch4oYYuvyExHWZShTvDyG6C",
  "key14": "padSYvHeTdYUWfDqxV38hwhRib7Wn2gBipeD5h3aRTB6BKtCuUgShEqySmR9Cfyt3znNxtAZ2W2tY9oauFxEY7W",
  "key15": "4QcAqaPQivEf3Vw755kXqn7iBhYnhQrbjVrMPLUm88adGJYZhtG5kQwcQVT39RNt4zzxgDeU2mS5ZxBD9FayBxXd",
  "key16": "5QVEGRCqJEdbBBnq3yQW6DkMXPW1PchomM4XL2beoAiwxyNmmHLZLBqanXJum82P1Lrt28PJM1nsDEdjVQmMQZFa",
  "key17": "4ovpkrpVP5V831BDKjuZvYK1cuKo2P17sxegpauwXF9W87KE46FKKT38Uu22FTzCzP1u1soZrnarJZnL2KYvzjUU",
  "key18": "4APfucpsFPW2PJsq8iJSos45CjyXtFYzUxekL4t9o1jBmAjWA9cphsArYtFapJge5eSrTpyj3BftRPR1Z5zTTVnN",
  "key19": "4eNAPeCBDFEXYEukaZTHXQsG2KczVwU7XAAcKeJ7t5oiuus8tdDTnc5JqrDjKnTmRFeV4c8WxjWHjKmv1U1DQ5dZ",
  "key20": "42K2R8bdBazXmSknCRShPqyHBwrPUWHT6tD6yxrauTi7RddxMg5bsL3j2tY4EUb9za66dCWHKw9qXiXgqAEfBE4F",
  "key21": "2VBHksbWDkBwCnG4VvtShMeTuT32JfsbwSFqQL4GhCzTMVSHKxSWdCqHLxz8FnZhrL1suZbmYwPQBhRynKEjfgFQ",
  "key22": "3iHHBmJe1moZH2yJkUz8auxsNrF38JhSToLyfW5bBPTjcQtWrwJ8r3RobNC5vTpQrGXkC4QXwzf5sreDk7MSoSCJ",
  "key23": "3ypunG8tH6qiktkz3mk7m38pQwQDR6f3TsBmcSZUDLenxuAS5gtWPC6c93mNBnUTEUR4ySPaV11fM9qsFYnQ64L6",
  "key24": "3neqS85EDGHgCkLuRZvn9Y8uRLN3B8QZCSdfjHhVKj6aciQkPaCGMmAJpMPCu31UypAWcnhRJs6vy7SDTW8L8jue",
  "key25": "4gNh41TNU41hSN6sydGEWyM6NMvxXv179jVAKCr7nW4feL492maxy3X8fNsvtPHVqGeHKz3hrSe9mHyp3JGMR6mA",
  "key26": "ZWsmiQDKSDAiFEyvPnRqUCA3rM8rfz6pyhJK9ikHr4oSUcT1uYqJD1wH2AFyJkzD7y7RqAdAf8Xf5eXSB5XEGsh",
  "key27": "52jYrPCUoAdyQTDe9G9oMPstdtiJZ6jiYnt3SAECsTR1qLPzXs8DEpoMG6QH55mGrh59n4PE82FWTqPisVtPaqVt",
  "key28": "5n5TvYF7bXiWS7GgqMv7hdwrmmRWV6KyQhvaNhSrEwpqgm2ivzPPjpCLkqGjC14h6SKfcuPReyC7H6K32K8mQxZb",
  "key29": "2C9cqndZhZ9W14k7JPDCFGAgK2scQacZkzzhzF8Lpq4nLb4T8dGChKheZNZmqvzjTyZXPiUZiuDCKLEgV2mkjQCP",
  "key30": "5cbKjYLzP7Bnzg4HA3Acpdb5iGnSRGj2x19drdJYTpeRwr6WxUDU782YieGQgrMwThCxU1eAxn8qDNez7bFGE2aP",
  "key31": "CTJi2VUceR7RDryADuKWQSuNaatVuz7yNYgWDczh9QeFhCHjjA1DJakzTbFPnkZipbAo7XfSdKNVb9k6yTqnMUz",
  "key32": "3ZTRwXaCLHzL4Kpw9Mx1s7CYMeBYcvWAnmvcyMLNaw6EGZXERrNmmhUZqBmdrarDLqYQ4NtG3NLBVGAabQEY4ypk",
  "key33": "2fDZ1quS7cpfGnjQXNR4YJoKSpfyf3Jf9p5CofbnEbAioJysDrqNyxY8NZsCDJ5P995t3dmo59zzGosfeWB7Wwuh",
  "key34": "4qR8epGdPQxXsaKQk2RTKZKtupFQwx5AKPJhf9QJ3H4ycRwQxtw2Euih4WtTy3fo28t2U1U7iWhQK2YuXiFghvd4",
  "key35": "oK52EMeRMkzSwjGh6NZxriTE2nmCTLEkh9Ku6Xg17MHsWdApEfZNuWtpbxGbvPbporVqowY885nPrUzhYtd4V2n",
  "key36": "2XKsVmyLvrJAVWEFg8tosHRVpWWJZq7aZgnDya2Vnm9ERZ9jBLV3ANpqmC6Ex2HW2zm6qDtMv7c4v6PufMdhJSR2",
  "key37": "3eusiXmtXtgZ6FE7KDyTuaGQKk37iKyuT7Zx6zdWknqMBS2wq7w9xvbQFxQpEkUhzJw8FcepHuanDmZq4AJWRgey",
  "key38": "4jFMn5FZS1uTVLJGEPXeuwoxP57ahk5gx6Tvjyy7M4ZGhabQ73Go1ZbYYVjRVPZGpnwMKUEr5VvrsQjVDKTmDrRr",
  "key39": "5NkSkQ5qiqWaDqQRtHewTYNRGgi1FkXzJnyvuvjEdtRDhtnudkMu7jZCcNEMSiLuVHqHnPBX8UK6TjwqcyZrq2ej"
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
