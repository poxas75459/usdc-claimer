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
    "2ZbdpdLJFt9pUWNzjziFwszJ8mwgNTAAoUK3jvd9T8JtftzC4ayzXoqxaHAsCDzfhvaTu3PTV7bYWmVg5vK2xVFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WfybCw6ZaSRGqhVvP3ZePXiTTYKyYULWaFoGuw1srcjEK1kkVJBHqw9awRvm5KEtqptLHGUEcXqhLcz9CLKvMqo",
  "key1": "2N5uuhcvTjxNQeRFtC41ixkoridkW7wXsgtT7aEx3KfBCLBir3Q1mm3jL1q3f9JZeXryJ5LD5Vqi3Rfc3XXNdi1h",
  "key2": "jR6VPRfPRHbzr7B2CRDiSS4CBo115UxLMmacaWVugGdZ7m2jT9B8NWounG8XaE8sRJ4Nw2p3ATm7vWzDbMGjdbN",
  "key3": "4b7hchg9vuKH3y1tgX7y4Dqe9sANzv9pZW5sS7u3BvvXbfs5tBnVAr4xgSEvdw6g9524rhi9mSC4Lw5fQvA5LpPM",
  "key4": "4j34fknMWCTR1VRKGdfxoANXAuB5ReneCH6RApaKgdJogLCt95hvoXtmmvh2dhYTVvZWmSAbATNDHxEgbE3G3Ynb",
  "key5": "4CW8Lxw9EH56dxkvpbCAdcsjQL1owLELezrPpsQdBHRRgtCmnVa9Hn4Vwz7ummzbF9M88nvFwLTSy29bbHZwowwR",
  "key6": "4mxE6HyVdBDW7cM8VnVzDgMaTBVTB6R3XzBZzSXnEbnf5Qh6miUMuLHS3XVafKk9kJKrMUhdeiJ5gzYCWwwgTgus",
  "key7": "4Xek6vT1dLQsuyejpZnGc9ohBMgAR5DvsxtVh6iX4P5gcpNsmVJ53xDtdu2Y5rgsRuqanSeu5YDQr3uTg3ja2pJQ",
  "key8": "4xhPmU49DgxMuB8XBsvLv8wDwQskcUmRsUsbxbyKDeYK21zJ6ZTp8aVBzvPHZ3MPhz2Hipxb4r9GShkXUzFY8ovQ",
  "key9": "4hVCGorcmogbCjzf4ZWJdMx1y5MwYQo7evaZsfn3A9aJthSrCQ5KkQ9H7cayYDJAuLaCmtd25X3LmyWZSDcHCYtK",
  "key10": "gR8RDVRTB21zmuQAP7qojL7CawuY4iuZ4zpByqE87KgKkP9eRMjsDCFNNArkQw9Tqif43VPD7WVgZvBLrsb68Y4",
  "key11": "5PUtqTbvg6pEHjvXeyWX9Bde2ckuLt7s9fRsv24SDVzzgtEg95mQtDY6nQkzcErXm3u7yLqXtSr2uyPEPVsixXYg",
  "key12": "3f9bKKeP86LyUPG7rEW4FHhzyfaXV8qeFdzFTppBe4vFc1WkTxLxGTtEnuz9FWZN2DgxyrvofCJzD45hSmZwnUw7",
  "key13": "4a5pjRKCLy8TVv2LkokXKasuUa52GsS9KPFjT8auebGfSGDw5yLMpLk1cSnFTw895PnY1ZNknNXExrx6ky7AztC4",
  "key14": "3eSWHKsvVw8AucnoAcu4qiuAFhgi6S4sZn7FWU7zrLG3P6kNvWkiZBZb8qR5SRw9sCP472VFsCs1yfEPDiZUWRS2",
  "key15": "5pHVSZLQKRyhzRXxQy5u7xgrTzsnfTVs8gGdHyY7kzZEy95KHU5RoPJmxTeRinSUQmzkMVcm7XjUZweasXS6PX8U",
  "key16": "451dCJp7rVgRcf9CzNg1xsQgMMY9mAfwBcwvBKm3FrhqsDhm1FfJezwxrEFCeKEmvyUitkoaAS4TyYK7ZsfQZvG6",
  "key17": "5QfcE7c1LDvjW7WQuYdWqiJnzErcPJzsbvuEwSmcnaWAExu3jMdR29K4RkhBJWiyXWRQps7UavkgD66LddXsB22g",
  "key18": "5XxfKHucsJacFKHDNYcqXitpdN2xeaAGokECGe7664gTL3vNYujBUtYpf8yE5QneDM7ozbmaicp3eaEoPyoRr6ug",
  "key19": "58G99FVH9hAq6hCfNzwBYM5mKwsHyj7qJZXEc3AFhkFce6gLS5jUQF2eZPdF9FTpvgPWesAzGT5aT8F3PEWaZLaj",
  "key20": "3cQyTztoAjoETqowDMmUBPFwrpG7WmUQc19D2Dde3Jxe1cFhQxVEHU655x6uYKtsydmbzE8ixjmMzTxLK3gjU9c8",
  "key21": "2cZcAyWGLp7YZbVNx35Wjp6c9CLPyk78tfPq1AwmNZ5rXvJiC7ycWDqG5zLbrUJ5zXymJS1ZoWAPKS38zcWvfrhU",
  "key22": "2EY7y3Z8NYnnTEfPbfwDayWXFnxz8oc3dkzFtRVtwXVBx1n9B1xBbz3vdiLUJm4sTg6fzPAkfSPhcuSS3B8AsWZ4",
  "key23": "5S43Jg29xxgmGX7i9vRfEKuCfmtgMfgFXejwEaYCHtJg2M6EkLGsT5poPVykhZjiVZfaMYPVGxuPQJM8hSTJZdmK",
  "key24": "7ffRWKM9ajKXoGGJLSzb5RnEYCcUeskfYbUeQHoUuxMw751A7jvtpKJTfa3xLpH9tF5LjxCnKbhBDtqDbrDnF8A",
  "key25": "47CcTQL3dyHzNb9od54kGZCa7XBwKfByqRms8u5qcBjYxGSFVoXd1G2LzWe6JASx5oGaP6LnUdoJzoSPrud6NgSt",
  "key26": "5EYJuzrYMsDP24XyLqCm2bnWtLn83HudgMdPtXXYbxyzbPQAXz2J9VvbNaSM617MrNXSXLDAFBeL5yZDD3YmHP5j",
  "key27": "xUahxNTzZYbuQE1T7erJDvBduqethdZ2oZf8ZdZPNWrYp3SnxCLiQRn3Y4qb72WpX5gcQSMxZzz4qf9HFPGqHYR",
  "key28": "fayZZGy4TeVbHu6RDCEx4afNiVz3uB2ymogsxGUmppKsfN2H9uNZhNMBX9MK2rRKoY45X8Lnvt5UFMuoHhgWi5S",
  "key29": "3yanjQJcHWDXqyMwzVDzHPJC9bkwZ2XfZwjUKMJM2FdFwJFMMcBDSiPzDBRtudTkzz2AiTNjWQQE1MwobZgy2Z9p",
  "key30": "2FYGknYT6Vg2JX2sQDUTkV58GF8JfVZBQknHhB9siNauDGkGHDjDpaW9Yztcsz3KE54YRnkzS7uDfjanZ7qgdsaC",
  "key31": "4SMcyV7VP6nHpo5T9ttqK6bWT2XJ4L1BaJ6gAYMMxJJfUwo65DR475jgyWKyYcsYmtxjSWmyKeudDUY6tzSxtp3u",
  "key32": "9YtJWTHJWw8STXFMsCmEsPJzctrvVSErkcqFpVVUHhqed8xAxrKBaRzzU2rCgi7gjFtRMsug3saUdaercC3XEUX"
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
