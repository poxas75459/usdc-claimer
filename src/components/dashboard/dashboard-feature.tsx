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
    "4F34JfcG8AXPq65ZiHqGqv3B7epUjj4zNX2pNoJNZRYoEkgMZKXv4wJkgfNzeVPtzkPNAcYDHLRsJQJjw2Xh4TBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iFv5xFnBPj8YWZSmVfAy3aeGibVEqWo66kEpVd1qqUsvfwsaBP68bdAoFmHqsBWgDDFRaVzejdrEspzjmaEDQB5",
  "key1": "2EKafXW5M1sQmoiDSBebXtWTndB3oSpfH2LQkiDojbqYXMFwqc8QgbsEs1SwVWftFjKnA2JdcLcBAUveoKkqteCt",
  "key2": "3yYHrhw8BRYRkQ8fjWMPmLP2twARXbu6G27pRryzEZK8mYrYGZoSAkuitc2Qoc7ds6TxeUiBvVYThuZ9TdiCFg81",
  "key3": "3qCFbKXxjfWDQb8463K6m27kR8euXgFrCEgNWfNnpmbf4GxTX2n3yxd31w1YC6r6Vutj4DddYi7aXhyfYKKERLN1",
  "key4": "2W1RdSHfUNxjXLPAj7eNFC4sxr7kdNkAkUBD5VNZ3BnbybdSLpxi5B1K2cjX4T8xgX1c81UMkFFy7GbA9YF493cK",
  "key5": "3F9MBBZSYfsbQx3ajnXxXwpGs6Z7ygCcn4nx1xX3uyV2q7W5hjz8hfEnCq7Zebt56VjSpB6YqESVpsiWEK4vUgjd",
  "key6": "4b4xhAKywpRNVQqGLYGMgpuJzAt1Xzjk5AEG2estWNuDZ7NpZQTUc3N4DRTHKN9MRtyZFkwKyNgwerWwrkw1n3TN",
  "key7": "324LCQ5sPHWXc95M3RqHLxzL2watwFb4KpBhxNPKPNQadCnk4vbLsbR8fGQUMBLYMq6XtyPNjxeTAqfKaLEAKipn",
  "key8": "4G5vRHQLjetRikJznxQKSny3fBNXA1dA6ZWoMYZXg7HVZkVnmUhkzLctYfDyjAcgUATbQWCBEy3hUgjk41nyaV7q",
  "key9": "4NGH6uHxsNbzPjjbHsfa5ZZqoQzLf42AWPApv7MdCgMSaebpoyYEUHcDtDj6twWzW5wR37AtcuUYNkMBqVh8wzfz",
  "key10": "3ASoDRTyfzvj9ZpF7rXaZBbuk1GnkTbRegHjSjVtHfg8pxkqrk6ahSUiJqYULLuiAg9AczpKSjH4BsbP9QqZUHrE",
  "key11": "5WqVJazCYVfd868qUVzxCfRZCRq3xserz5yoYnk98Sod4oHCeLFqKR6WwybiK7Eb5vuoEUoNNvTuFqpnYGbRVUEN",
  "key12": "4vsaP6nBWaoR79apCDGyUYYPrjQyZDwb8NLG99c7xSbpGgBiReCcEXSPSSVeyf88RPmbsWeZyc3JnJJsFj6XzRX6",
  "key13": "4HGWTPBQQZAhGjL35mqw8GrvV1k5zZDcpvkBMAXL6gTuMdywcZFZR9tbsQJ9xp9gyhDP6eUXBKvmC3Lw9czZqpWc",
  "key14": "58jj6kq1zxTS2aDfGg99DmNjdkEjHMn2afR6xjvPn4QxfoiGYjhfRyTLUAeqHGZqUkWP8Q1wNRZ6gRZwGasdfhJv",
  "key15": "5nAziZteWZKzVRXKPkMhzVtyLvKBTstmZfaQC71NGMCpQrLpgCyJ7DdNVWDnFxKGtgdTERmhejg4sS6RcsrrMxCg",
  "key16": "SfEdtygUnmwxt8cic6QrVrwZHTUoefWCSj3UZWdedduR8yNuxxVQu6C23py8MBzSxRobN2GK7X5YZc3CdH4QB7S",
  "key17": "3D9piHHNghoEK7Pc6geiPgbKf5i6z9pifBsA6f37YBwS8cFT4wtzRuTGiJ7zZcmrPMRyUMry3YJQ2prf1QqpzAzS",
  "key18": "5SaZw894Ztz97Luhy7vjh5pMAtjAwfwYu4vi2BnhK2tRduTPhEbLSpqcYMUBJTcVzvEoBPZfUrRAE33FGZzinYd",
  "key19": "hzbAeWtRkGtFhbmFtEkfNP8jivDHpPdc6UrzTzDVR1w73ji4zU1P4fRtjQthGX7k2ZmitdBYkqWbp8g2EVnXvrr",
  "key20": "3nf3qcDmJdMY3xkjZf1WRQPga1qSAA7CHnAVifmYewibCAWiAxGm1k9RsCpFFsSMfkuvwJ8jto3wu6fu297Phvy9",
  "key21": "4qujLwZD62G4THcY1ZsssAoALMKPBnJkueQpj5p2xNYufDP3CQcQt8U5LfEF7WNoVBTqwvKVydY8kw1fi2wqDds4",
  "key22": "3mrs8W5swTBwGnQkAsB6WqcPDPfww6nhAbjzXRywT9Xam8rNXsFNAg7oH122Ap9B99ufiBycAYvsxQrZ2p2mBx9S",
  "key23": "2Nf8SHJn1z8Fh7c8ckRN7tzbRuetNGc43Y7GWks7rvxgjR8phXiB37KarKXB1DTd4N419ZjAUTFP4erb6TdFJyBn",
  "key24": "2KdgnAaT3Ye1aN6G9kyP2TWkTkaVrde1QR3BcHtdvCh9FsNm2TnJvqxRXEqgGGYoiYydipnxezi6tpanJhu7syuT",
  "key25": "5ZSrknqy9f5CrBLMiMwWAJLiab16BFnQp3gujbsYqsCqVZzmZTETJszoa9L5ZrcuVygBZWvEX1xEPqR8s3Jnt5tx",
  "key26": "5qTCkqcauk3y7QXCAjgxU6YFXk8CsZRYJ21yYkGCnXKwab96i23KevLbyjUiz89TAPp1EHzXtkG873GeNcEtqGxt",
  "key27": "3HgqB6vtTt8kHtgJSbNPTTgYJrFPYDCXHz3MJg8sc1iVcGJRddsUTyRuqCuckAHsdU7bGDfzf7jJSHorvU5ykDiy",
  "key28": "UxHXdrR6zUSPMkJT2acotn1BPth8rtfCse6pE8dCThSpZ3bPKWRUrCHiLTdhHtDWMzavTdXWg9qN4wXgANPFtCJ",
  "key29": "gfVwcepkLi1Azkvj24Mn3mCuTJ4Lb7f6gB2dutCX3TvCNjcRUugntFuKQtTLpVVy3p4KgAb6X9zmwJLyXizpuuM",
  "key30": "cen9p8VXvDvKG9JSV37myhbyCvrVw9gbnd5PXaNyLLxQyrckmHs9wPYvsFrgC1DGtpM2AD4MqmqHoDovAx3jCNZ",
  "key31": "3SSmtMWgo3AJrZD6AT5WeuqUH8wKZnU4KjTRnpRvTmytc1DGJ6G48R7dep8ZcVEGGn9Ha8tXzaV4e4Jd3kXdaWfP",
  "key32": "39r6z8W7vA1cYST6KWnpvB4zHxbJuq5GJCWfSWLGuEWN3RUxaQMbHxM8d6ToEYLV7mn6CmHZFeyJ9Fc5cMc63uGG",
  "key33": "2DCC693bhJhXemDf98xb6ZFPHfg6P4rx9dHWmpg5UpNpFfeRJX7b1uLbdaNt2aHkevCePDTsuGSFZHB3q8wi8E8p",
  "key34": "4Cd7VMqQpwKdvc7P28MFwj7MzPBusKFW9ZfYRUNDqUST1J8iC4DkUzLgLtAADp27stYwvzdn5eYausbBxBrQDrVn",
  "key35": "2duD63phtsQ9LWng5tRZYem85WwtDJDY9wYWphB8v72u21BaKNUnGWVaKYS3NP5oghYipBYFSzUgUXLcA9BmiqvY",
  "key36": "4wtZvwyAdMHcyRHirZzibyAFKRtiiD9b2F3SdnYn4rxhMv11Ak4H8KiMgVRsjuhNsJddAnFgCwLDZ9X1w34mPpbP",
  "key37": "VeMhC3uzTkuh1ZYk2z4Rg4KLRubnLHx3u24akM63Zmjxyf1ptjsmdGh3fJyeL2SzbjFhGa2NPQWTDjEL7qhmzNT"
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
