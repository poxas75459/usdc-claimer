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
    "td1WjyUruXQZZoEGcsazVUAVH5ob36MbAHqHn28b8tZuuo5yAgppFdYWQNUXLK5rM4LCTTsMhRmuToYgNUfE2xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qYWwD9VTn5bfHjQVpUjToL5rP3RLVoDapFRUcvZLj7C4W2E9CJWaaxs7w16ttWPWEA4Lk8ofwheE5hBL6XeZqN",
  "key1": "5ambkrgrJN8ohk2tSrFbjuE4HCjVd597FgGzxXSuBzEDsoRtWBgJuux2y6zzX5hrcUFQDriCJdvmGH8Z2DNcNBcp",
  "key2": "346KX39nRgRkVtqzvPduPjX22dJCbGoV5bSpjteLrp51XtXhKvvPjLwTJyFzWyQ4qk9vweD1pWjdVowMM8xUrFMB",
  "key3": "NvqmiEYyVYWsrqzMB33LXTTrcXct12BnYtmcctEzaefNQ4eAasMw2XpKwgBghHboziiPrwbXzhEQqL8ejwTNJzy",
  "key4": "2MmRZEwFfsbVz5yErCF7hLkS5gSSHx96awk4q4vYYTVG3jZc4ZFgzBDMW5PYmpqJi877XhMv7f3UQrTWrmMpUuL5",
  "key5": "3bE2H3bSSRy8gj4eeLf8ZLVD85ybBkcGd76baW47dXJWnZmqtJaXBMoSxquCKsK2PLw8rrcyDa9m9GD7pfLJBjf8",
  "key6": "6fXN3xw9h2TeXXE45C8vJccaEsLgKD5jZ1EG1M6upNjtPdjLtW6QzibZq544LwbF9CPMnboCvCUq1bexnK4bUBT",
  "key7": "fLZRmPuUZ215x5CsCSwVSJVheVQBV2wgCQxcWiEjgPSy72EW1dcDU6PJExDDz6FpriViFEkUefceyahJYuEzEhr",
  "key8": "WcYctECnzrh2xan8kt4vbPrgyrzJg3tjbsAqtwDit2amqPR23vr7oyW6ZbwLXMBxtVXx2vSDKJGC32oo25zqHfC",
  "key9": "5d1FMF431DmmtH1MEPhCfVeFYEZ6vu2WfZZrDLW16ERC65UpdSY1qcM7fhTpCQxu5kwpc9SXT58t9eUQR4FEQevk",
  "key10": "S48pTjUu1mKoxy61sF9h2DURQtsrgaVyzV87h4WQC3nAULMS8FtfDtW5o3YtLfEheMqgG8ruifiQKGTxJtzYBYg",
  "key11": "4azbUdcKKygHwJdoaEZdEU9ZhRo73Yh9oUAY7Q2qRwKiErakXsUtDexfRQFCPmoDUSTCq6aVXhQMZXcXU4q1yEk8",
  "key12": "4xU5oFTQRvTjcQVhFdTeSKksBfmqyCGKPHojuibD5mBzwrt3NazryCsr68xiY1u3bifv7GspQGxk9uWS33gCET91",
  "key13": "45MsvT6H31ZvwXXTYvzuyevJUt8aLcTi6hqsvz9BD2b4uRJcYt9bXSf42s4m9yYaRnmEGMyqq2RB4FpXURgi5eDt",
  "key14": "QPSkhcYEXemjDb869dX5SiuhdR9oJNumkR7LY4QUDWXA21wTCjh8zYZd7UVNruQ344bwni5cokCHABgkmUCXFno",
  "key15": "UdvrveRyeoMAVYsKtVwx7BDk28bDnjj2yFzYFrqVv999oSaBuJ8EE5kBhJuueuWKsSwDQf3gE9s6XLGcqd3Zniw",
  "key16": "3FkADiEKQSwz9jhm45eosumb4x7dmJi3byt6aTFvEMQ8i4jtVvWa2S7KeM5y7DvW6MF2CVJ9X7zQdzsJXdopjt24",
  "key17": "3R7nDTFefQGspZe2HRSKbevxqykNy8PXuMQqGG11xigLsPacH2rwZe79fjYLyUYNTpEcWrVQNNEEL4v4atRHMiEN",
  "key18": "5PA5Rj2BCyUtFa2KrCrJ95xMx2Bf7sjCiy2XN5PX4g7ofJFFm4hgDj9Fx5cUCWAoGg2uFBpBzu9rmEbjHosTrqba",
  "key19": "3QL2KyJMFTFKLZ8kNCsHozF3FRAkJDxrnCkHiCzvv4mqFKEQgr3uWmAaTYQfVMdGNLbVubr8tBJUANQdWmDaLfPb",
  "key20": "5eJTvzDLw7MmdcVLtdSn1XYuzo8VoggbGeZ28nydhT31ZAZsQaHFJngQYQe37BWtoynyUaLxPs2HtkWq7H9V3EUx",
  "key21": "3a5gkRop5Z4oe7d2NvuxMGxhxiPuphFHBG1NAV8Yap4dXNHwkNjjaAsJUDVYUbyXw6HeFybXcpBPWM2gYRX9ortr",
  "key22": "3EF3thD5VG8TngJ7wPuwKpuCrc7UREjojF67qa4mWzPMrmPTGTyN4Pu47U9F8UJpj6AW9cQCEggXZmUFGnsk7uN",
  "key23": "5XW8zSfpF4V8Tvd6sXfiYqzsAJN66x5QkNxHWS5cvFHn5QhQsekFJZgUpFDsHUrAPVcjwdFyC4hGTiQE9zjhcBu5",
  "key24": "5tmrKyvSFAuxBYKoDjs8U8pmYxs4JXYem8yYg4B21iFKd5zXCdeqJPvDzdNdo81M4ieC1PLVpANS3U49L5Ho263G",
  "key25": "DJKcovj3RxR4TweqxinkJnZVLVuDDkY7cpNtsh4jkPk49ecehSSQFrhvAa5Bc5bKq53LJBShiFBKNUrSpCknUuP",
  "key26": "V9f9PQHsWCxEnaPScpbatLpEpTKLF2ZeWzfa9yYPpFsPtbgTk8M2XvVieZkXjWzMGduTuxesQWBTLG5xhDExDgn",
  "key27": "21scrLjZB53YXUpdnz3XBHSFVzeAp3MzaZzqyiASLNpkA6kXhWVCehtukkzYG5ASiWeeK6adG2Fa812LuexZzLmy",
  "key28": "46cNUEqx4xHNYohAy2xbNKeeXZnkoW3KajJ23LVmPqRjQVBST8M8spZf9oPzW29E2ou1qXh7Sw4MPET6Vp8yQ9G5",
  "key29": "G6eezCrA19niE5JAhg3nbUK3r5cS3Uc3CEjhikPBFMoFPDNptTphA1K4PX6VuW5yhXNckwYfLKe6Dnx5LHeBfWB",
  "key30": "29AgkB8McDPaU78k5eYy8vbu5sTnfoCqCuvMq36NjKCU6ozk56tDC9kEXes1kxaufjhthTcaJfQ2qWjqG1erjQ4y",
  "key31": "43xYTtC8p7zhn1iygLR88SYNSmU7t49NohA7tPKT7XujM6ECitJzwbZxRRu9Am7GN6yhVdcqvmmdouArDUNDfopq",
  "key32": "bc5auNCa6e62X3f9qcaw32EMhWZHfW4rfqJMZUbgrzb2gtVD3wZbeXbfYQZe6VCvrR2hwwe74w78cohZh7RWEcr",
  "key33": "3s9MNsRDCs5FRKdZVD6SuNvJAeCMzbf5JSHfA3ynm4R6DxuwamovyGCfxPL9hdyzYCYBRqygc4ncg3G3LnuVjpXu"
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
