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
    "3nAqRp8trgiap155bmSGm95z6mt55oWQCtSY52VgPPkPEk9VoS51MUK9geDpbprMnwu7brhJmByJVWUikKPL5oUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ypq3zi9xQeN3KY5KNhiXopuoxMaPSRzP46ohYw1JmM1GtBpBGxww9aKEk7vrZ1bC7wZyMLHnkHPb912H8Rp81t",
  "key1": "24HTf8Rdd17ud8zvfvKc6rV41uVJVAYsTNCxkEeqfHwi6hbL7f6hQ2B7xZUdaEub3tqgRb1xgXrjB3mAC7tMv64G",
  "key2": "5F1x6pZ8Z1WC3rNJrJMcVYpRUssW2GPxTqKtD23LgcNkCF45YSy7jBHbYo2HqUiYUDTcDMm1yTMiSg7bsM8BHNnj",
  "key3": "5z1sx6akw1NNbXVajhvpziwTTKsuyifAN4Vo7uJ2rDxzKsWViWRtuvp9c3BZ3PkTgsZ3RDj7qsD8orGbwb75uwig",
  "key4": "4XxTyFHN4fxb75wFCPEUwdHeSwbAgbQp6BAWjkbEPcbzfBEQuBvKZ7pU3qfXJKmes3kZ36vbdoaK2r8yyd1RyZeh",
  "key5": "2QfRBKzU7bMk5jf5dxZBoRzpA9fRGq6Ry4V2CXw4nCVQZBTohpAZRvtaS6oCBpXVGegE27P4K66gWFZtfsyqrnX2",
  "key6": "29b45gboSNB4X4Px8d8TBs4GPTAXdPd4sDjqg2qgXXAQJfNTf3RFSdKDkNNDZJZj1LF1hv7hLPnU1vDiujzMJ3uW",
  "key7": "4Pnw321dHe4guTxHNeArqzF8HznyX6D266tBfp6H6gMj91vuvXkeNVTA5nR8qud8nJ2tBkNtMLupjVWUiAsek5ZL",
  "key8": "43hHEWjSDMSkgXXaXaKwd253KrbsEwAp4RHc6331JUHCJreiukhJXTuqUkfpUDRGmxkoKHu5sbFDfyDv7w8B19cs",
  "key9": "3tKm8bR3oEtYvu546MTQNUwMJ1XfZEqnZtCT3Z1wJvkUQQN13o7vvm31ct4fJxUqNE8Uap7QARNJjRBzrpMa1Np",
  "key10": "4MGdqjCLNKC35ouXND7LXKGXe2C81BUQu9DLHVUjutS69pLttQf35X3PZBceWWhERNoYzSmV7Zg8eVALjbbwzyNX",
  "key11": "4DRX97RvcLq4YTwTGpSQLBAq5EboC1SJqsvPacG9gxaJfuFeo8NyqTj6yaPFkFDRAdxqap1QK9M9CicPNs2cUgPP",
  "key12": "3FTswcNJyVnbJ4GGgA94CgSkaBCnf76Vu3Shsve2fBtUM6tLv9ojQf9SwxdZtRuLXqePBkYBVp6NdrDhMuXKSQz5",
  "key13": "YM654JVX8syyTpJcw7AdQXdUuaURrAXMzg29P948NYWbX1mLoXCdnYuSw7vx6oowshVaYmaL4YE7fiyKx8EREN6",
  "key14": "5oSEVCnNaBkTmR966jV4HmqJFZf8chv6BqtuogupKsntTuwDXSeYifoDCia6jgdYpxBHz566yABiQaE3P4tE79LH",
  "key15": "FJyANh6wqKyvsLjdMW3QL6ag5KgCwLtB1VtNv4AbqVeAVYMncxy4pDF6zdVQiXbRGDi9RPcXFB8DyyjZ63WAgpD",
  "key16": "4M3ZT72nERb6nKZWddKR4UCx57FkYSBMThbAgvDUow6Qj4H5GmvvgBrbPhVt3HgmvZ8Ya7dUE2RjUKhqjLg1yxy8",
  "key17": "g7bKDWRwPs6f2Z3B4vnjWgHcDvXqPzgfCUrEiKY9oxBMCdtFpyB7N3bjXuTg8zPZugqKLESTTGi5HzdV64xpGbi",
  "key18": "43znRo14j8od5K37d9CZ42y1NhW43HqcCvCUagmphiaxo5hLyEjmFA7Bs8Ku4SSe3GXrUNiTE4QWRqhNCm2QbEUF",
  "key19": "24oG34764fMyEkiA6B5tWUbfWGx3L7HiFXFMxQWgwMEyPTBsLCN3d2bRjajWmJgURLAiJkb3xVbtHDM4xqBJXXPW",
  "key20": "33DB8esfAodKLMR45ugifZRD4hp82wNeaAQxztSJcZqz5TnxueDTvatotByMQzFvZF1zepCH19HC3A7GLMmoDdzu",
  "key21": "G4qRMAKx2Y9Uvs14a6899KTgaTVHKVoTdshxexeicLUGcsmryMJbTEzhWYneH4gjJ8wx5ZqQuyCQFMihdNzMog5",
  "key22": "3ogcB87V5rzDdqPHLBJeAbN2wMPppv7DJHPx3BKSBRVY3ngTHMEbevU3TkKMaDcG6QK8Cn13UGscwQRQZjA2JVm8",
  "key23": "3b5aVAhhbWL8y6H1BoQEZxrUHiQMzsPYy8d2SXzG5oXziLXNsTk5r9J4MSgo7hK8tj2ArMgFiDPZXAAtG6Tna83g",
  "key24": "37FxuQ9TsjU59rHeAxnkn56Stf5rMcDN3ZQf4G6mj1LtSPq6QxGSooEed8Dup1QDT8hRJki1BmYxe6eH8KSNWYSs",
  "key25": "5UHj2Akao3PLScyWPwS4hetVHZHDki8d3LtvQuNbbSWFUSEfdxRS6Y1pCiAzc7hJ8bgefWUSTtQW9wf7pTnCjxb",
  "key26": "2Df99BHDL1myyV7urZE8s9AAgykGSn3SWGb63QFgxZxJTv7dL5tvpuTNo9B6M4PL1SWQhXVBE3bz9pNKvVTFKQQQ",
  "key27": "46ZwNedCK49CTh6dXeAmgwciZVoiUT5Kq2JuDHfx1BLrCHuwuMVThngENrCLeREV19EWcDnftdRsLZgdDZNajmDy",
  "key28": "5Rdyizfcj46Bk1ANf5Qmkv27g9xPKu2Er9p77NUNyxE7N3V2RhHAm21cHkTrsJwcJceTVuM4VRHcpJoUEZvgxv73",
  "key29": "4LZ7yf8SQ7NpxWSHPBzomb1khgboGADkd3TwU1K7G7TdKNG3F8H36noYBbCgLmMYUNW82tVayAHHLFmUcz1PuXnP",
  "key30": "3u8CQuB7ScP6hYFU1GTfaVJ1T5sqQrdEYMwQhgETMCjqdTUwnvY6XbNCwmNwF5jptPSHUSqVQut8TtVhzDRFgeA1",
  "key31": "4mWsgGa1HtvhJ4A6oL49GagcuJbATMqLTLBELhxC4RyvhJ41Aznx9UZhbWxVgpJFW2EBZtF4AaTgbugBYFDBhyZt",
  "key32": "V71PdSYVVPiZrn5F1vMya93h1SUsphybjip4Cg4rX1ArjJmrZtw3hbhctvJPekuY85zGKrx1MqrBEqZaTu1en2J",
  "key33": "Ds6FPdXZCaHpVN6m4RKBsuedMF1nzPyjyuuyE8AtbsNmTzhqShDKDTxtDTHyB8D8ajsBN3aQPjidpMf8Yhezbei",
  "key34": "vYUvXXEdJsJ2G2yKiqfsYHsVAFZ2sQBcyT8i2Rh9QRJ1FmnKHtWbRZaB52zyJdiT7sTJ4wSywKmtyUCgU9jq3L8",
  "key35": "5MS2gYvL3cNGTmi2ikjfh43eb1LmDUheFMYy1XugdGssPTWh9Wvic8rjC4KCsq2Nii6bAPSun2zMsem9EXAPgZHx",
  "key36": "39pyRF3QWYzw7T4qguBJwVT4vGoHSvq4yLaVntzNsQcpi4X1jFqZAFTRNpo8sjR8iEPDBPd18PTjRg8EVcYJxeyL",
  "key37": "2PB4xxZjeR7uG5ErFqTLMRQGuxKie4SqwanfxcBswkpSPk7rqzcYEPa7y3eEZrGKq85ZHwbFLUBPBaPVD2pL93Rs",
  "key38": "4RMcJT8h5s7Vs7eWzrsDy4m99jLx22BirUWrDM6rVUgLteEHVj39bene2AXUowkcaXN7V5Vc83btNCRNd1ZEqfSw"
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
