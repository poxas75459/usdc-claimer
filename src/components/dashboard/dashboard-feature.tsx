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
    "4ZNV39KwJRgy7v6j6tSz1yf9EnsomxstZEy3jVXM9JNqeTSzNz9WYFhb39Mc1JR9NYSpA6nn3VtR5Ktyb8uTcCbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49SGaYad9wyqWJ3P1Nzd1ZMqwmwM2KSVtGias8HN6ALbojpJziDxztWpKkPhCxhmp1eTDD9oxMgwHk62k1wVtzWN",
  "key1": "rcghFL7ee4owBYgeTv9Txjj1MMdHbUkeTJWihVsZ1HKnQYLpfYxrjGAJhbAWsHF4NRy9g1nKZ8RobZ6XpkDydye",
  "key2": "2M4npiFFktRLb9rBm6bn9PBpRQhiH9FPYNYwRHfCam6rXQ8PEruJRZ2BfMpYDBqfNZer3Xy8376R2kCAqMtHdPMT",
  "key3": "6Rrb2haocP3MZVH1M4iWdk2i2yG6rWsPHus5Xy6J5n7NbmXsEoSkmv4Tvfd9fthVarcGfAfUB6KJiK3eVJrvt6H",
  "key4": "TnZmhSULhHGeMAtuwj2QoYdmZNpKaDQZK4zr2dc9eWsoUP6tQSrxh6NXQsWbgDsheKCVxBQcNBAs37UULJNJ9pu",
  "key5": "3VpXHb2QeCRYFrPrBp2S4APwStc1gZTbhRg6CsRR88XgyfiSzFTjKYmRZtKWWCCWXKkJQbhQVdAKTULAvECigWSY",
  "key6": "51omK5UsvwYS8VmUWvT7qqz3AUWZ1BvYU7ZdeHGQk6zjMJqgdaCwopQGFYLAZBpVjcixvpmneHx7BhxYSnbEYqg6",
  "key7": "5Fnq7c7LxrsL6cCweGegHMxup2TnskHom5CxrrnBExQqrHSLNFfMZJAA2PdYAsTaqHq1d7hP3PWaoV38VeRpPwEZ",
  "key8": "jfJMb5s4HbuKFW7UYU9jbbXi39N7z36ZmxZqj6o3zoR46deGkiNtXU5NFCPCFJFKPFoHcByKQ4d4S3t8GdNJmK1",
  "key9": "4T8xZyQWKnjMq1eCy4eenziV4s9Ah3qv9smAPKqa88GRAmpdrN7HoTot2wdLeDNAobweguLfVe7khbRfWoB9XCAz",
  "key10": "5BvYxzW4qSkE6sdTEUFezxjhkSwFkKEgXebmmGCs3B2ARfJkMhNnsi9UTfHctYdkKFiC9JNLQFscMBWKEuNREBHN",
  "key11": "EnwuMK8SyMK6zgi5deqBwe5weTJTFkpL2PpC4xE4UQ6eEGojUHs1NsXovQGH1Fd6q13wXQFeZ4fWYd8aUTCsxF7",
  "key12": "MqBjfbDMPnWjLL3sc1Zh1NCeLwxtyM41SUaKaJSkZLJ7BtTNPe9YfWEmBPTUg1nMxwC84TR3gpASPpRWL3QUdSV",
  "key13": "4bxHKje8Zcnyq4o5cGZwgbVGqgNzBfDNsp5uwExNXB78CAk6HhyyuamvozMTpAPNTqNHZEsBPANejL7mg3JAaGuz",
  "key14": "2SqnQM58yYJFpec7YKVgTJ32KzcNrYQCAGuNSA4dkrHBsTe3ehzm4uHBcc3U58X7fXcxqeQ77V2wauqrt8CxSa5a",
  "key15": "3bGdksVNmqdTNjhhy8chnJPEmLhJYDLqcb1Ushbs5p4rXqwCs965WHCoj2Qjpr3wPCFFZxGpkCMLhpyX6kTvTenk",
  "key16": "5oxAJ6dgroKethnzYkxPTxyggfgxDSNp1dLeNyy8yKdQt7U7EvttgPV3DwzTmCMe4w2kRJdBV1wosL6Dhu6ezsrr",
  "key17": "5zhkzAXwWDWGCZw7B1fwQxuKXtEzczDjSEQLJcRB9JivogHAzoiZv78i72HMWNAZ7jYThbyVmFmUeD3jUDLuRY99",
  "key18": "3KQqL4w8M5BrvAT4dmvYbMTfVq73Q99utH5Xi8cUoz52yyaMutwG4f8GcuByaCyPigDxrR791VWvkin8Z1iji8As",
  "key19": "2XLEBfd92T1L9uEWtBB2WEKQg9zt3A4whTFu9yhWiVcsJ5G45b6bmLT5kaKXee8cvZvkwm6T3mmTb9G2t73APB6S",
  "key20": "2JqYoWvUTeRJDYa8AABG3mhw3vrVA73Qp1PzZL1p5F5jC7K5Poue8rf57xVQj7iHX1kk27QvetWqvTYoCkmFJFyB",
  "key21": "2gm1hNiQPahJGcguEQrkiJ9Evg4whR2M88vL3hpnWfedbBQ4AoquxX8hesCW4i1F4RkFKSjyeeFtFenQiwgYRnf1",
  "key22": "2TLvZ9T1XD5vZP7AYUnZyDHESNicAAvNKhmbk74epLmBuKgRVNL8zxgAZA9CYAZpE3gGhvnHySCf3zVwnCc9tswg",
  "key23": "565cwZAfTpGzZzjnYvDkTEA6HwKBTefQRHeZXU3VSJiZnEMETb5tsgQoLYpygjKHD86yZWW6UXisjCLMXnuHxsZT",
  "key24": "5oCBCfvCJ32MBYEubhcYezAQDnoKm8po1VpMceFcUqEJ1WLYaCuniW7zoa6UczeiW8D5WEEutrcae8mxpVHghvuo",
  "key25": "2i3AbRnt6bei5ud1yH5xB2xdZycZpoZJH9HpHyKXuc8MhPF2sy2ikfwoGeytXLkseij72TxxgMq9mFrnKs3C4zVG",
  "key26": "37uHvNG27PRBNh5tYiTM9mgFCVVcz2BscT8WjP3Szgmj1or5AS8cEDc48bxnDtsvBuUont3GprrD2F4brmNLNBv2",
  "key27": "2Wd7beVzUNbQvhxfgJX4xGsDwdsbRbkUgFtoT7zRx1DLhWUrozCsiVqWgCBeHApgfSbaCq11PigLWap2ExcRCeVP",
  "key28": "4mxHrhiMYsb86ckzPTYbQsK6XoMrwdNG8aE8g6mCaKa4tcvQfa2cc8x7Dx6uwmUwwuC8dizRXFbGEZ12yeEdr6Cq",
  "key29": "4cJoaNer1rUb3DTPQEhKiCuEK71FJfPU11Z4Sw13kErcdhYn8ok5TjGoGuPxHdDKqDH7afYDbE61yWbZPxuDwhWT",
  "key30": "2jriJ21jNXBNjQpkqZ6Xuwngi7wWhBF9d7Ruy3c8KLYXTrFvgpQTGFastkbK3PHaQ4BgWXvf9Z4cUKL81hTSbABf",
  "key31": "4MKZa2LMR51KxgWEhV6AiVdDFGNTxAJcpSJtf8vvuFs4aG4mC7Jjdpk7N5MvtTZstn7ZU6Qx4WZeudGC9H9eJQsJ",
  "key32": "3ip7joUyiuZRZpNfyzMrDMpZcb7VUbMtvQXGMkPPk3rWGqEZgd2LEJXCJjP9S86owVFLz39wakB1E3RtydHSG2og",
  "key33": "KHdeHAGvCdWEsLMzohNXFRtHYKREHH26rLSGUTzPB5PjKd2wEZrX93VEaSkt6x4eo8CskDD4SGerqjnMaKEBfkJ",
  "key34": "5aS2vuQTeQMD1PBG2u3KNZo2V784MHqh9iknR8s7eMf3ngwPKuAVJtRRSH6uGAeZquYSgd4Ee4ddFkz6kg9Y2iTr"
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
