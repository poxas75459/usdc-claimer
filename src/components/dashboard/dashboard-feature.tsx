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
    "2qKY9iKR8sbauoS5GEKsj38mMrf5U8srYwkYSzYGv85n7Yni6RVpXXe3y1A8hDxTjaUSE3gYnbYbp8KGSXPamXqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RauyCbBVysxkLM7gmsgx8CxkdtKCBoBE4nb7mSugrbVt5hkNQ5LdFbpr2Q3jyyrZEk877cSbhVbcDJEbELLDurS",
  "key1": "2cec8iA2k7qwyeEWQvD9F6SAPHudQDujuJM6ATqXkN9hi89fmxt6B8AKuvpG7XqyPD9GrEjvYTk2JVYM22ZTWbn9",
  "key2": "125HZHAyH4LBdo3UocFiiAx1TG7kNgff29JZPVYwYrEPhhcK9eZEBdKPzrY3PEo4ioN8auS1qWCUCtSUugHtW8Xw",
  "key3": "4hXdu9em6tY9doNmjztwprzM4enfRHHeKWzapmva7KPXpcZGHCGZCzvRsksbpEaHMjsMmjJoiTyZfjGaMXAgRWs7",
  "key4": "6kpBtfobf871ht8CyC7so541Myt7dUx6eEgsxVuHMVHDGWj7tWiQ5p78X6AC9j68ZFQ2K1DmCN6moBDyCfXZ6uY",
  "key5": "3jeaev532UkwwqS8LBMJ8wWockyJojJCpsS7acGPk6zZzj9eVe9UuniVvHHDZ4VXJp58EZeo7aykYYQN8mZhNsEf",
  "key6": "yqtNTg4QoEvu9zzytu91AdH5sx5RkgtVfsZddT5dPhGrJt8v3qxAFvpHFjVn3viUktwHr4gqZ9WwNxb7DWNy9L2",
  "key7": "5UjoWm5S29BwDkHnNRSXtEGNWj7YKdEaW1WdmQTVdLkX7G3ALNtdZHSVJ8UQotTTPDFE7x5YXtqzbia1NgcCJjc",
  "key8": "21eSnauKFCwoZPC9p2SwqZ2z4VN43BXGuuTnqfQ5UKuZTDrfpRcVWuKfCKMtzXnMc71nboRbPEHHXTZTWmAVJ1WX",
  "key9": "3Ae3wbHuFgEUMuFhEpqhzWSoVcnjM5UT8J7anbtpF28un78gqdcrje5cp7XD8xUH7uyHE58sfNbAPC2n3tv1h9yr",
  "key10": "2v5mo7jxdDruDRkNiugicRpvZPKJQDDyh9aqu7pL6TyM3eu6cRM95if5goteEQCZALaMU3EhQ3DzGbtkMC1gVZZY",
  "key11": "3GdVEDdcKLMxfVAD2zuwCLB66zLMQ1nH3PPZP4Y7TXgeA8eAcQRx5ufZfZZ6m78ZY1KqU6Et2KfraSFCB6wPQdPb",
  "key12": "gqSMYyktTJxspRMxnUrKQcvcyxJD2PdtLLWoMBkZF2uHVw2Z1yhntRHpTdk8EUthDy8oae9ER4GUghpKAz4XP2S",
  "key13": "2t1izRAoZNF64VXmZwW5HXUHKaV1ZS9PaY7BCeF59cRUFkW9rxWPt3VRaXFJMyg7HEN9domAEenXNBMmsV755ZXj",
  "key14": "2MXAhTwim7RpvRggNiFHeo5fTzFmH2nC6qyHRDAAswoP7pj1te2HsjTeXWQmK1DbKnUajtXz9JYUYsutALYCjbSA",
  "key15": "2chjNYYsYephmfqj8C5KyZe8zWG1oLhaf7WWbjAGuY1znjhZZDj3yaRSLmK36CjFN9w4M8SgQDoeH6iDgrcmRWKS",
  "key16": "5jSckH6qG1BaNoSauLQRpGdgRAMYWjSDNv1v9iUksMb2UV5Rjuu5NQGYncRLW6t5NnkBKE43P3o2fPJYVGUhoUk9",
  "key17": "vJryovFwcYyPswfXYirHwdVzArWYoTkQD95WXV6DBZv86gfEZe6pQaRtPxPLCqpix55xShJAMcBvNZYhfEtrLGY",
  "key18": "3ZwgNveXDevDVQcgR8qMCaP2TXzf7Bzfb5hH5UedfXU5bJMSDhuYT4AKmzFjde2w4x9RKgZKQDSqqidrTDYsuZ35",
  "key19": "U1emhT4igScGL1ssa831439kGiHZ8BgNJPgVHSEgVvUywKErxm4FdXYx83nsH3xbR7sro7Pf5eDfD1a7ACgbM2L",
  "key20": "4aMKJNxwy2Re3MDCV65PZMkvWF8o2KHBSVjxJ32oY3DKAReHpe5mxQPyAMAeXs1v6CymRGQaopAZZE8MEo47xWMC",
  "key21": "sti5ugVRWWkGgw6JDUVrBR4YBck8BfzxAoK4LnhwXwYCQzjqBKMRhRyxpEdQ2ibePLpsQb6L55kXYourqZgvUem",
  "key22": "3x2RFKNJ6wc7jVxxjfFsa4LrHNDFCEwmSMNbtJDq9LiK5XdbPY4QiHf1kgSxwwkDh1N86K74ufDZA7FH2rZdVf3K",
  "key23": "PXv7XkKR2NxH3QdB55muoWe9dpua77Derad9EH9U7NCBgiPAmnMkmmtDzgEGDTnyZJgR6AX4PqqbsqrgGmHRDd1",
  "key24": "4jmWCPhaXzfaCPUavT3QkGVxMxdcvx1SWtV1mKsQNrqEqLS55irzxniTs12r27XKn54KJYzbpJG52j2NE7r6BrT2",
  "key25": "5WWce7mHkMNKsanCBPQwxkgMMRrD9KTbCEVECktrfEgTsVhT1j2rYhptVRy2EYa4yEQ9hZD3riKrZ9YQQxqLUjH5",
  "key26": "4iNh6WGxccvCE1iYC8ceuEpNN6oM9LhUEq1C7VCgzm4zJMp5m32fpVthVtbF6uDMHhN6PC53Mg1JyftgdcsTz74g",
  "key27": "5DiudCVDxmGgc6CWq2bCXMq7gbTmYwpBa4tnRVtzrXhM4YqhsD7Z7HQF8eYPSHNWn1xL8vnRBfYJiMQ4bd5rigip",
  "key28": "32yyXvYXGLfmQiJQGTbRzDqqtTB4sma6RF6mtf9xKQy28zWcbPhp1ibovBcGAX2yjyZQ7HSsFWrG5gQziBSpYxf3",
  "key29": "5eYdhe6fkbdZvKt2eVk8gjaboH5zzKRCpwSaN83HUpbLQnWfr9FTkhNvGjUmgWg1AdKUaP6YFtyFEUUZ4ZXAysMB",
  "key30": "3Lwwx1AyJw47VV7WLcLPWGnwpB1HstnXLQg2cfDaSgEptr3oz1FsErH4sG4p6wAHXC1Mbsec7VqrYUC2tVaSqp3p",
  "key31": "3j79GDCox4J61g2SyXzYPZHXwU93TfCGznyiBgiNYtTpqvnVhnUnQrV2WE4tEZne16A5Z8ToPnrD1rj18zJxw6m9",
  "key32": "5tkRxNs6DMF2H3McVQCMvcHu7zx7vzT2EYqGiFAKat43kekQRb2rZNzDigXfajCUXPtSCYRLf5UxybRXD3zNmqrs",
  "key33": "4YhSW9cMppoekPo95ygFPipqFAUFc6CMkG3ACJ4scSrvnxeki4cpbRHQ5JceFWVyNfoNDbQMLP9NDz5Sxocw5YPj",
  "key34": "2BnKEXktB7ZgDfT515rwRpcGBhjHu3M5RYLMkvRPREkRPD2GuLWJZez1HUmHPMkfdhcqoAL8bok1mcgver4iGLo7",
  "key35": "5mJJWfDx7AQpfxSaCkZjFfvwq9d3MPEAKfCyoMa6tw5ZDdT8JCuizr7cLVTWrQUd48mHM1imgKCzcXgm69WqNnAv",
  "key36": "5H96wGcocBW5pdDyrx87Gws7yU3SVNLu7pphd2VnZfEhU5wQT2XHSH67o4fpF2WxqRBcxH8rCz5uFj1KDT1tfZCA",
  "key37": "4XVEpzfKf6YXPP2aV3GGrwGoxcXaKWgFCbFr1WNywFRTfPa1nBcSZuv57kwE5Jh6WkTfbPDYfTFwFDpke8J88aS6",
  "key38": "gKXH9XSGbBxXpvjwm3nKxwf6PErW7SpVaLRT3nvY3HU7TJz6A8AvZXPAnSH8YAC1iEfhPgYP2zv4AZ2s8RD99tT",
  "key39": "4tZJULWVgtCdisVhvpWwAgJfUup9UgG55wEi1ZDHWCdCLvfLu4eBiWUqQ4d3NfgRyv2MLQqVpgHsy8VB5UAKYHYf",
  "key40": "d1eP5vHfJpiSrxu43bPpi1evbf5KcomF3cC8bce9qwrawXBkyZXzFYh6762TH2nuFwt7hLkGuwHL1aLmtfRo7K7",
  "key41": "3Q3ERsWd9R3D55fVAE4CbLnbNykxvjyQKy7FS14mjFCNuNaM9qHpTZmwbrHDsh8XjegB6UM42eYQZZ1gzbJRSEEg",
  "key42": "23GE4K6TvNmnELkTDg1pqBRyhVQaSK9ZwsdvnexX3NRXVZwpS6rVTMT23d7JAayz5kY1CUKphWTPWY7VWi95aMV8"
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
