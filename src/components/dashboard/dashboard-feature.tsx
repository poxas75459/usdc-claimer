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
    "2WxcaKAcJ7NMAsb6gZMams9uE3AD9yn9wmxDHWcKZ3MuWMuBN4SMruNn8Y9NB67YX2MPdd3Rr8q3u6KXA4y9Qu27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qiSb1yExb9DkRLpGGNeTbgCUAQAb2Yo7ko8jNFGt2oaP3AphE61Upk4Qp8xb3UARrktAKmuDPFJQHHWz6rzPxRt",
  "key1": "2hXE7hkgFepwnyACc7AgB9GqjbmvyeWaMSnWcFDZiFtaGbDm2MTyPGbBcpAkobeEVfnWEpYqx7BjBNUTvHYeJtoV",
  "key2": "2p3TFsRdZJK36PYEYVSPCrNdmFEmksyBPp2VBK2Ga3RiHMDrpjZBBPi5xoS5uwfpqecP9RUYbaUVMNG3JRJJpZr4",
  "key3": "3cjm3tF3WJjsapcdozcyrMhvGe9hhaAvs9s2F1BT847SoKk9rmpQkePah6jgrweiRzbLNWJQxE6Y5kpd1C8scCex",
  "key4": "fUJfBWsp9acQsj6hadRX3yjg9xNj5eBsG1bBCpTXPo9Sz4jnBfSSax12nCurCK69jhwcvCy235Tj7cLn5aHbN9F",
  "key5": "hkLtfGUucgZSf9rnubTeQrRgT6iZdCbjPqFj6TZG3RTFhtdqCJYbawDy3jYVJHAeyA1i3GwNpQdYebXY47FM7mp",
  "key6": "3cb1JXAyRRR2WhRmeWP6kAznQRsCgtWKHCJnVdS5UCeb29Xt2D26cTTP6hDZjvV3v75NzHTSbhC1P7399Kx9dSyM",
  "key7": "5c1QecRJsKBVUEyi1fGtvB2nCSvZY3sLDtVPNUfnANcuXADqdvQQUwEEZTGMbN8zTUGWFpUp5fZUfmnB4Gm4PGmp",
  "key8": "4FD2qveQ9vmoq3H6tK3UsEKyRifByCAhWPQkq86fTm8P4gZPTKrBuU9kLsixmQhVKwHQtDaAuhdzGz72gEFCwrj9",
  "key9": "4yQd1CaKGeGD1cC8Yms6pFRndjk56rjM2XKKVe6DnYsqnY2ddrpUGiCUGkF2chs3cdYq3sNyURqeWtBT3h88ArPS",
  "key10": "3g4enJuBnxq8Ve3S49YTbaGMsZB5zuNyK3h7WrwG7qzN6TobW7Dqio93Z7Z5V6ydfYD8roXKHRX3VfsHqF2d2Zsm",
  "key11": "2NUJ7DwthM3Gjnw8BFSS6A4rJCozv7KgABgthqQHXFbcYa9eNBAf6NQY5CuyiZ1VYFeR2jNXs2McQtRoWHVBThsf",
  "key12": "3YUhos6Q2YPYqh3rS5xdKTpEjhVmPAAkS33uB6UZwMVNWqtvXBe6dD975ac3tE5cjD3WZt1W7G6pAFjj9yF7mTLd",
  "key13": "3ore6exi8nYyEPpNvs1eCE5AB916pEdmkJ2wECGCcRNhBY4vt9WDZGYM2TLKik9tpLXwANuJR3QDA5HV7i7oHvVE",
  "key14": "4nFdpAN9EfUQTz3yAkk4Uc86tC38yCDs5WEk6xuVawA7zbLQ99SiuFDC985KDEHuYmh3cAKhnuNcErGjqXhorhBk",
  "key15": "3KUV8nTKskHsqG8uAnVgU53WUMhBkCqgKq5h7woRNLuPadxdXUtEYYKUb1n1sVx9Tub4UWRfVF2KAr45ao8BUT5r",
  "key16": "66SdAtPaTMz5hYh4UkcutmJJo4HLSE5cVDZskUxMRsHcK8PB24XqJ5hUQrQASsntLA59TC1KtPKY7fWGzQCSmh3v",
  "key17": "34gBE6sFyhHiW7NN8zjYtzMngGnbnQT22mFoWXxnHbPSzzrqgXDDycYYxt5Mvio4Xjiv4ckQwus8GdcqdgeAeNs8",
  "key18": "X79jvC4X97Y5mY1GvKfrBksXredpyjP7RPDn53ZNY8ge21L6gMw4UEKatcDuMpuBn6SDTRor6PKQw723U4HT8mM",
  "key19": "3Q3kaZtYr9HzoKbdDDLQdz98MEyAfCPMBQeUQJZ8oF4rWaBy2svo4EKaAjWGXqFQHduFspNsVu81R7T6NAAoTGyW",
  "key20": "2t8vuLScARDNnUXZruaDYMHGRbM48fGbpjgpSbUb8ca48qc9EjiZahaQcWQ2ttD6tsCt1igSU5QNgZozeKwBhLpz",
  "key21": "42v5y5k2tg4E3mBrtWuQnotVFdNpH94M5CoS4yAhUjt6WG3gvs8CA33aWAomVu6hX6FMETdz6SaxZ2FospVyeWDM",
  "key22": "2bP3WqECivQ4KHa7diPxcv8d82Y5jA8q14fbQuBhbcrFa7z1jLNhTSdELNR1tdRkp3b4M2crRAvtn4drcoXjyNfg",
  "key23": "BEMBYAqbwi7eLGq3iPSEGNRHLMBpHsWZ2tU74wSACaw4L3CVftKCR1ExUiaS5rPuGSAqGs8RQuUCm3JFcRVCytC",
  "key24": "GC5rR72EHJFTfG61n16r2BsBA25tjZhYSBCzjpcW9tHQJNXZuvanyzjgVW4dDKqJB6Mx6MWjTufoUzo6Nyu4b45",
  "key25": "4k6usXZQeNgnpMHV9ytL92ffdg8Sxri2YwfvyHRSU9aDsYNDpgsywGCe2kS3ZKZSAG9w188FwoeTS6J6L9QLR3Ez",
  "key26": "2xKnhjjmemJt5F3Fc3Zd3NwyFfeYuZsuX6KQBDDG4XXMxFCj95WhXSwy3XdGZAK1Lt3YKqE8PxEvhUNH9Xw5sD9R",
  "key27": "2gXGbqsHFfpB64LMhAbc8tqfbuDvD9yHHeBmCB7MKQwDhPkLdx95wiceQ64bdmhXuZKmA3EbmufKD3w7BKEX8iw5",
  "key28": "2YVkjFocShJqiKX4t8JBfnM5ZhXgj6jrQJ3zYmHXvc8nrC6SuVrvZt2c2ga81tsipeW3jcwsorVg3Zy6Z9H1948g",
  "key29": "2zS3nXqoXS7N4fHjdAR8keT5vkMR2dAac14WQjqcFRSAxtufKewr9QVqdapmBsJHU5VP7g1NR7FthpU6SZNNYWaQ",
  "key30": "3uCgQmFcqv9qooFy1g5YdYjVFWYfUS6t3gQLKsHfsnMkqT3NGbscdGUr4RCsq7TFEun5ptE8kTTchKp8XMXhTp17",
  "key31": "eX5LkrCbYwvCfxMbz24YFeMgQHdute3cymwWd5eyEhA5CGbTQGkBnanbwNNno4iDa5MNLqi9dkVQLdgfiLMABFX",
  "key32": "3iRY1MumjewZSraeMH1b6XBFiQqkrue647LdiXhN2V1d53M5zNaFEdbPRVE8Nhsh2SujCfpo4cvME4qj1yPgcgWi",
  "key33": "3r1PmmtRRRZUmSS7sYZsTCCtNSN7RC2Bk1ANEpozAbPuntNfxeRKr7qnZ99Zr4GAANsdLYuUMCn3NYaTDdqv4dUW",
  "key34": "31cTjC6d2fdgBYHLyUcremJqvxkgtBwiGTrpkpJa6ufiTcZ4NRLkusyvdyma8kqEBhyNpSfnxrRRB8C5JRLzrdxk",
  "key35": "3GmB64vWtwijHxLDyNyBYdhrwkbmitMMvWZ6V8E6XUWGs4umWqt2bydsuuVEfwJnMTUXSNBrs6kPRQNcmJYbSJzK",
  "key36": "2J7HJbcFxwcJfVMccgEXDyDSzX9QRd4HqEoudEcquB5YtPeft7j8BPE5fstY1picHx3cUnMMGHQXP8MPEZjnCrCW",
  "key37": "2ewKWE9RcJ8zEKGFtYMibAC2DfRBNEcsEmTA4GLvTVC2ead2V95YqtLMUgd3m8VxfXtHtos6zowhtYCRBDBire6X",
  "key38": "3hkogh3MjUTnvQsJDEs5ShnMehacPCNdfGenpHhxGdogydZTeukD4VMKGhZSUCktP5zTnL76kJbNoCqScNeFqAzG",
  "key39": "576fXUwwMHAxfPSXyMxw1PotNXVEHkkRy5z4jpJNxjxXErCMFSKWNG29HfqbnJH4V3KVQL4t19E33bPFm3wHhfnx"
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
