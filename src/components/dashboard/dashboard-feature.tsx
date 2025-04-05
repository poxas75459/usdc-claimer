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
    "2N93eCwvGsphJQfXgj7V15RsUevx7DfBHuGMyJD4hKuH3UdVciZYfg1jAccyFJ8o3hxxSvjad7XeMomxUuXJtTyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCKoMdPTrSEYADWHirQv191NQuLqhhN18JorbzSTWU8Bo1xQSBPNycqVZo4cLdkxfxBaFXLvYa7Z6JVMo9y1X6x",
  "key1": "4gK7Di6zeDXFb5EWKsL28oNhfh5iAxiUxqhUJocwo1xDNDXhBL8wnCiGXt22WJgQLRdmuhL3epAjnXPe9Cp71TNg",
  "key2": "64ypMANnYNJ2hBJLbMFGKzqEx1nScsKhi7sSzsA1pnwFFhGXDqY4vhwd5ttWsTNG1MhMGVAGGyQ8TDasqLafzLpm",
  "key3": "4RsUXoFrGVxvYYKaM9y9ZRNAPPKhUMLP9Jg3oMYrrHr3RR5Hr4Egv8m5ipZAptP3FvQaAxioMSm6NaMH7pn73mKw",
  "key4": "CCJ7wUab5EVYaDShzFeDanZa3hU9owcSb4TG28Cbkh2XKRQiA3dTsfGzzSrYqPhFYr6C2FAhW6vSB26EuKkftf3",
  "key5": "2ZAd5YYRxyXTPA7veMPGFhgD91YgEBPDvgG82V5hpTTH2XBv8xrnpuCt651M342WWMZ4VKnUqXZg9QnqKNXsgBx5",
  "key6": "2d9UErZhjr7yJiCwqjNso7yp57UjMggjppQxhDmLnkhCAJ4TY7moBXaCX1u5HNH2pF9uUycgVF5tBhMMDz8ugTDc",
  "key7": "5kR2k3FyVJgm7R24KowpP6zbWC92KPQ4MfWSsKKy6ZcAPTABRV8ZMMsba2bv1RFsxLZA1JHrU55HnXnYBtEomuLr",
  "key8": "4ySueGL9io5TktH39KeeZY258q2PDr8vjv6C9MeaG4c7gPX62ke3kZL26eE84xtQmz4tuKsycrEpPEF1naC2x1rh",
  "key9": "gQEvpiQAbVpzff3ZPUnNTPPMpMZ6AJmpw3EiaD8dt4igfVvQkzuBUmdJF5eDL281uPNPzfg1n67PssnMsUCnMAi",
  "key10": "3BH9WnkfDJ1sCGBMFWUiHLmj5ezCWFHLzroCyAk2991KMQHdxoaDnYP2c1wLg7nzDwa1EwR9jzrkvk5LfXcYwpAZ",
  "key11": "vbFpHvhdPqJ2HSGJDos6c58FbWrQFYAyKvNdm4aibKSVTPXijL1Krfc4TTAoXVuSusURaUubX5dZqVs8oTP3efT",
  "key12": "2NxXonpaYpvxqhb4SnbdHpLYHSvCg2FHXjYQRTh9s4cdrsVYqhH54aWxaSP7vq5zHQnHJ4mSwVzrZCD4dw3GDtDm",
  "key13": "4gM5U2En7QNVNjv5CaC23GynpiEj86tbEaeT4iQmxMRLs37Mct5PtesiuMuREBw6uSycZBwhdyvWMvSfJKXzEXrU",
  "key14": "2udmtrZvg5KrkXCC9HsYohi5HVPcVw7McuTHzNG6UKetQJ9QdtapuUNT2ct4UiBhf1GGjbHmhNm41Ezn7Zka5cvh",
  "key15": "3AiSLzfJCcaaEciJ7jyBiaYtzyULuEF1kWP7beGo7wAW6UaPNX65Pox1U4ZTK5ETi6ikhT9eko5xDa5yDnjNxWcS",
  "key16": "5XsVwf6iznPTs8t3sZ1L8R35rundiVbjNThN5HkXfcHwyKkFeqdkZyWGmReWu7cszBcMYfuSw4KeaNUVrE8jV4r9",
  "key17": "2y5sX38dq24Gp6263tFTWuLQ8LZHrkZyz2AFjS4S8TwgL5ar85Lrr2L1ghUte9FyMwDD5nhFNxJX4Wtz54QdqoTr",
  "key18": "5yUHuGtGjotvWbUB1doTF8ahjnk5nbFf5HxbZqCnc5ddbQsfyGnKDChpX4AtGmoDXjRAQSzLbNqchJTWXQGC5zk8",
  "key19": "5nuKvXeHT6xzPdRyVkeQ6FGa3LnVhioLjgJpdB4koRQMbToX4rSrZthZApBPyg2o7UJsDEKQfuxhXCmTqmFjbe6m",
  "key20": "24Q1LyTJASKHyKtVNWiZy9TAXgDyGjf2GBXLGQjpUmkNz8EKs6Y5KtdRvLFaZqywJX8dsdm5RGzKtspQr2hBd8XV",
  "key21": "KvTwbyEgp8qE6HCUtGjsv9fe5ujbL5ETaNwuxRoAdtGkNzKLrJDv8Cd9Qs5RECNv9zJFFc3Z8mTkHZso5eeSrXe",
  "key22": "3iVVoNQYBPqvp2kJu3QgfgjmrXGmDVnnnKYkm4YFm39EAVg4B4EgR4HhuaUpC9LkSPpz7SMX4c6HkYb46fTmHocq",
  "key23": "66FhURkFST7GNesBDyCY2QvCdeS9LJ6eAStZdzLvKe2kuG9ne9Pr5PGWbBz9V8BAvQRWPhJpEwSbjaK3jbCjdAM",
  "key24": "3SojEEudorNLVf8p6krVpe7314LntYtW8c3uQdbCaxaYB3CSG7JHgtMu6jSXxfbE2w7coJ59pusJMCazojnB5pzq",
  "key25": "5P6RHnZGSsGkCP4wqiXcJj3TpaJXLxFWMz9Vtqj81SLTdxMAc3DPcF5oF5jtkDeoes7MAuoAyaVERJ31PVRbNqvi",
  "key26": "CCajrMmWMcfX2QV2iPZ56Tnu6fMKiyXVmL55gbuqb6nPYEyzhvMKJY6gTxaR9ffnVnc5mBsfz4RKc3tuBHkddh6",
  "key27": "57yeP5TXPriCxtXFdLcPtX7shVunp4DNycPyH9eWb7VJAZ3iffkhaCdjASfbgQSazFubAS7kqaQaQjxbJMDjb4sb",
  "key28": "4TrT6U3MttWAguQ9SFM9fWCgtzSa4u7cNPnDjfsWy1sR5VgJMo4chhLGooHytqtnFu7EveAoEWwFCUbP4L11hhZG",
  "key29": "jeo77gJGXYmUnY9mmA8CbTnwaH46SCUQE5CfvC9R5LSh9YPLT3tjjw4pWHpVeYSochZ3vyBM1pY1FaqXvnuYbej",
  "key30": "2no9dfoietwegFF7AS66AV3qSAC9x13D2DJMvZiUghuXaxA3wFVuuoUTDW2JC1F8zzq9utnze1uG5TQzdMcL5s61",
  "key31": "2NKvFiaXDhsN1cjszNjeoCyrsrH6KcAEPrujdHD2SU6iQyEe4k2CDQif3mvVyeNXYfN9uiQBP3ycMVqN5Yi5PLJL",
  "key32": "AgzQddj9pQqo4YEgoVTEmErigf88tH76jeC4hxRpxFJzcdjuLxwg45D7cztMoKgPCwvDAKvYBgTTuXkEmGo3wVE",
  "key33": "5WZgYPeXcbwD2Gu4m3LfVi7F59iB2bETxmonrAszwVTLEYseeLgqKBgEDrHvMCETPJeU4nRQszs1myKbsvh8zsSK",
  "key34": "2rk4gwNG2oXJFu4nm6fpncsHV5hrfZmbvXt68WGP4GmjgxNmbpfVRoES88EH9CzdYdsoEH9aCAcSx2Y4yfQTYy9U",
  "key35": "3ULJzTKdL1pvTKn5Q7Bd7hykbHMdeotEk1Pp1onEuMHm3CW2B77tVPfedy8uM1U9PooY7k3kv9RbvhKufzkgw7SR"
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
