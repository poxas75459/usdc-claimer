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
    "4fEMzhpi175mvV4aDR7SLtXwoDSPCMLK3KJYYNTcUMKGT7pxbCzC7E9VguTYTGp9W4zrtCxGPFHh1PJzjqrkuPXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QdecD47S6JvKR5T7q1icg1dc2H5hd4poijM6CY3zafbYMQ2YjfW6yGSAzaBLfHsJZMZzo7DZWLzHcPRVS9dRVQb",
  "key1": "3FxcjSQjufQLteidamZRouh2wCTMR5eNSrp7iLCgMAWNGCspXqsFuDsghhMtWFtHHuJyzYkvJonzLY6jy4BRVdpX",
  "key2": "2rLm3fUNAtTxS5HWYEQiTR5gBnnmZkfDoCHAzHqxrFNpey5B24GwqitAUhHf3qZnRNxkMD7UNZQEmM7DCbFsWQHR",
  "key3": "2deLFVVPBzx1G6nEuUJSnCFvxQZAND9CYzng9qFvLTpqSaXeLRkEzxxjakQVB1FdbAi9atSGhiV3wCuq2BDUpdC8",
  "key4": "5hYpLnYQ39T4vBFUaMyyBejQ5g5M9hps3vU62jowd3KkYJANsAV5BtEdqZatjCtDqS2MRJ6pSkMCtSLjj73xpA5A",
  "key5": "4V6u7Z1MSvv2GfwuPws2TTLZ33NQvoMAse2UE21psAVKLvCiYRZP2PJYN2NZafrUDJFkW2Gm7wCwLTWeQrpzkRLA",
  "key6": "Rce2TQeZTZEWc5D4szs7HzFBfykBkdJDwi1vVSCABkRbbwXS5d7mofCmfLyHT5UGEbSDHHe5CDXu9Ra2W5QGrcR",
  "key7": "4CJP45ey7X5eAJTnY4Zy4Qog7RZ2DU99bqtZztAiKwjLn12L7Q84eE6etM2bMHzwsv1YEVeZuxpaqqDVp4t5TfVg",
  "key8": "naVvcRfHQ5FNsANLmjRqfuCA2y7j2cCduP4fCtcMD9Mpn8Ri9jwXR5poJqLXjbpGBtnSg3Qf9dGkUMtd9gHDcGh",
  "key9": "4a7zdhwoeQzgFFJ9U4m5eFkS4eEt6uD6iBwFZ7rfkck4cbccXZ9skENawdunH2THigXxjFtNoiyN6oSYJDpUGWns",
  "key10": "5hD846AcJLN7eghfAytaGRA1H6AZF7hWXqs7r8N8ynr92E82PCy54yzzM6cqBUJbBRTZJx2BPq249MgYe8jQLTDE",
  "key11": "4SJR9DxE6GGDD4QoaLUE4KXPJNKfXHdppB3shWYocQUdh7ipEaT34pUDbDsQLfC3qd81osE4JUudEf9LWNpCUu8A",
  "key12": "3WJBvL2tUV8aoxWfJqsYDSGHFd3X4zvWZq62mCn32PnurLQuxU1QyRzY7mL7u2WVyVpK9W9z6zhw8rn7qV4YaSZv",
  "key13": "4TFcLGp7yBapmeZS7ctsj3kLfyikx5yGbEbSoXuW3c9upBvWJCBBFF8UbtVuDLum9RC9SCMbfioXW1t3atJ7S3GT",
  "key14": "56YjxAmD5dqDgh21t1uTCKM1PwVGhScBuruHvghVmYLGGKDcg9yf3B4w2eDmmMzrZ949JfCvV45Xffs5X6pwTady",
  "key15": "4tuTYfVqjNv7QrWq1o4wNaFjbxdmQ1DQEwcVfsuG1m47tFHoj9MTEQAUYX9gv7cwSCdhbrFVcg9suL8ZeihcYdpB",
  "key16": "2XotEhH8bqgyGMtuzwgmDKxsKqrpYDoyHfGSHidSKBvpnuATL2cC552wP3whLXGPMkfpeUqcapJLtut6f8yCVwQJ",
  "key17": "5XGRQnPnKQtBtfQzVs9djLjweyDH8DKyWZdyiyvhr9gPhaGyJVeMin95j5Njo1yXatcHLiSRpk5Tr3c2GXiBW2Hb",
  "key18": "mCcGZXu7BVaDXWHj2MxpGM19FC7UYjGfvmAUuy3ZANwizJa19KFhuGAG2ASv2zfR44tEmYfaANHbEqJvCVyi9b6",
  "key19": "25DztbrbVEtv1MdVtQJfKWSYpqhGBJ7LJ5bW7WGWnpLTA21R4prNUwLJeQk8nT5RdstcZnSgsPjVP6oiH8P7vXNb",
  "key20": "3Ab3xmehJwivBNZ9EWmpQbNQJTP8SWUNyBZLjPr4whRE3kxYNcECo2KPJHZCKjyr9tDyLovaBdN7jrQ7M4DfNLZa",
  "key21": "4xa5m5dXCXasLXSo5YwbbsPA7KKPwyE3ZbjARHdxncBiowxdtzmbXUoNJVs57q4wg4arF2ZJ4vKSUFPF48LbTqZB",
  "key22": "5riPeDRxChVh1fbLVYwWwP31KCFSQkEF7yG8vir5E3eBta3tsJ3oZcRXB5bPVwtWSdFE7rXRJdvS8KDpDfNyyLph",
  "key23": "5iKnY2Xwmyk7LtNnxeqK6Z4wgRbAvQ43AdAKjxc63b1zVrMCCd7mnvGZArzRQtbHVZa1KXrvLWoswKzcbt5zKEFS",
  "key24": "49aAns89DeCDCaUKaFb1aGpfGGFGDhBbJLiAPPU2YL818VkeK4TjTaRRFVy18CgGBwspZpScaDQFibRL7T2xm9Cn",
  "key25": "5Pv1FvKH8dHxCf9AmHJNK4nZjMxEigXyS41mkUcwSkCtSfJ9dhaqCxvzqB9LChv5Ya24NcbRhdr5fjkaFbvL3Fa9",
  "key26": "3RR6DnAP5EJqsBDoNZAdd2fcDiVpqxzxCjwqbg6knSEUUn3kGhdZg3RCasu18UNZVLfTaSEsttGpdkrKMKTQ4p8z",
  "key27": "5uAKYK7y2xKwuk1pXUmkTUvzgx7mQo28cr3nFU7uaE3RJx4LCZoVyS68YxbDyXahed2qVZmCdnHRmdo5wLMWvreF",
  "key28": "QK3FnY3rjfyJ5rMUSKnf8x4A8cSS93vxuJzDTpZNfWHEg4oHKgAAXM52RjhvWPdgproCYkChof6MyH4Usf1yuSY",
  "key29": "U5JUpCBrjVkaKjK2pYgAubefUEqjFsDcxQpETf7AaPXSmcZoxxnYWJuEkGWikzFVaT4i83s6wR2w55KPtiVGJwV",
  "key30": "2rUTrsuyQ38MNog9XNWMfXasFnCizs1ka2cvBKhsPja8AHwXHKg7eTDDz3vkgMbRmpBSjL1wabgSV5uPASNwV2CE"
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
