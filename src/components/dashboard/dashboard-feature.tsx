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
    "fR2f8LdTkuAVvQHHjYQGymLq4ddnTqztHZQFG2S4xGiYdAckB6mWTkHnB9bh33eBiHnLk8sokiG4Vo9zqiT1cAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67cno1f7bfqkc8noqfBkb9umn2ikQFE3RtXY4FVcTm1tTrdmpdAYuMeV1T9amx871FT5CqZYwX4xDLKQt4WmNHEk",
  "key1": "455uRhbtp1WzgXuGZdGYZSu3QJnAiYzzuzg9qf2Vd8WhVekjRApy9kBovwsM33V9NQr9PfoU8hPHRuZD4yRm7SA2",
  "key2": "4B4uYCpsYVLV8KcurF7SJw8mRWH3aGAY9YZst5Xhdqp4CmRimYfJV8GZWT3MHahtmbnraCnStqM8cztWMJqisV9C",
  "key3": "xaPwy4R4hbRuHBgLKiroRC6jLeFW7erp58vNBqzNvBNCnXCgBxjfiBWNVTdSwKCLsWGBr5iJwq7f4bCbqHs3xSb",
  "key4": "64oAQpZFKoUbwX24rDGuHGXmnHgfgT8SSvgt74DNtcKDrX4XSyVx6whHqqx369cimciKyBCZRUryARrpFcAbFdMg",
  "key5": "38nW2tLyFg8CtCRo5xVtVH7Ke74amRXrPGMS1BdGVifEkNiAF4zFU7XoDQNNfQ5hZaReudPgP5RRd3rcSTSEZeaG",
  "key6": "5on9691yr13hAiu4yWoW2VhYCjMWCF8oHkRcT9EwmNqAah9D3YZaLUiF9mRPHCZqxhxKCapdTtvmCbMtk9ArZMYp",
  "key7": "5WwxsCfSjtRJSBTyFXCqzzMk8ZMEVHXaP9mbhWH5mwtbkALQJ94M1hVUhRpDEzYLBm54G9sJaAKp2bCjRrgunE5w",
  "key8": "4LS3NV8sP1VoeDLR31NaQrEkDnDj4AQSrFSunks6cF1AuGyAECNatMpXn4m7JCCWdV9gxGAnC8RzZTy7pocKRcx3",
  "key9": "GNrH6wpLY6qZXkaf3fGNwEeiLPBonzN3vohaAz5zDUAA8mcx5F7JtiASEFwvXkFTucZu62HgUmMDe8BzZjKfb9N",
  "key10": "3yLjKtE7VVabHwwhxnXHTMZUF9HXcvUQ3pueJWr9TZCbXUojqAuHhRdoyQKDh746gYVD2VPiBJj2TaKcc1U69syP",
  "key11": "62wUUpgCRqGshFxV61iDp4fLq6TaQkkMut8NYT5edc9waYMKZnRQiU26keJqEdfiCGATw4kwGBaSpCLPZTTLAjLp",
  "key12": "hpWqVUw8tpbSNt4D27sxXUyyXHL9yjusNxv31Dddo1W2yHKfXpA4tT3v1zHXNTtuXWEWD6JTFc4J6C8toBveXur",
  "key13": "3dS1BfXdUPTY7Wdmn4mLwDRnM7HUcdYsCVb79QevR42jQa1RhNvbq3oNwZmgdU6AkUNUq5c9nmKUzr1L3EaMhyfK",
  "key14": "4D46m4EhHMV4MUUFzbUs4XC9SN38AVUBBYgNjCZQy3kmL1fReBz3GNVfWJutxWJgMHTLfcp79C4Sfg474LSufCyV",
  "key15": "4BLgy17Uj1kbKnrhr4ZimdS7jxmbgbBXWcBq6gqCknGSCxGGa14p56fVXcKyB6pJtcPovwj7aA5u6aREQHk4f52s",
  "key16": "4VQoVfaAP4ztnBBToaKWXTXzPUU5C45R1ATxciJngp5b885qsErn4AzPVt6C2tt8NkmpFd9hBc319zmfKNpK4jm3",
  "key17": "2o2Pi3h67qRqtQXWJmQR7S6QZkqcA8n2bhQvzZRfMGDbzkrojDA2GFfWRvjPVPvVhKymCYwqKshhr8D2DbWCgeeT",
  "key18": "4uDj4eoenQ5pPAaWsC6BpLBXrFvhe6DjkCGieEHyixTgrgs1VJWhH3auTXv33CmxnedMe78Ycy6nKaiXKhVs6n4z",
  "key19": "HGosbRyf29qKtDe2YxiKU6FbvYvPssYi5aPGvpFaRYcuV8Xcx5HM7RReigxD47Wz5eDoiarUVQH19TLVa4Feq7r",
  "key20": "3wWYy5mJVjwULjh3MP5u5xGm9n9uAn1NLas7kj6uWt24ys5y2sMX194hZRmFk6KdaMDhvhcCAAvch1sLWoGprRqf",
  "key21": "RAegFdfe1sEKSEmyQo7rw35hMg8rTWBuLR4PynjwTaee231GXCh8HnaCDhKSr2KHrhs2zcdeCM2N2eu36NqBNWH",
  "key22": "kBhvQ6JTyR8EywQkDf8z7hE3hVx4HXLW4w8sY8NaM46NGfz6gfH5Hu91QAkaCDgz4p6uv2HKcNufxcsZzLMXBi8",
  "key23": "3eTyaDj2HC8JNHR45ANzpKctFjb2FeXQ4oGzoAinTYL3gEB3qvEeg2cjuVbY2faCynhaTzeiTDYkApdPdhTmL2o8",
  "key24": "2TaYs7t7T2Y2rrgHt5CDxTMLri8dWtCnzuZzAqecNLQKLiYhD9sdbEGMiGUnibBkMAwF7rorxLQuQj95uJwEYdHs",
  "key25": "3YbJmjVsrvsyqgJkgSe84ww44F4ypUgFhcLja6Qq6XLVhSyLr8dUGgHDVmjAje7CvJ9m5rnoWnLfQcxDRznUEJHB",
  "key26": "4BHYwikQt32qHVGFdb432rwufsmJRuuCiuvQYiev2vMVNU6vLBc9jUsVQg1GTZ6MvtSBjv8YRxT3Wi4rerfPaN8s",
  "key27": "5NtEhMPeaZcvfFPVUA1aEnr2bMWCA4rXrzULcz8EyoZ8pUooaFSEgLB1J1hsgLcKB9Bq72wgb9DL5USmjH25ZnP9",
  "key28": "xjXBxXAV7kThux2c3KhAmqrMTVWMJyg2LcwzPqoLdYPgSV4pQQcBkwrNQsPYu7L818mfFKHaerkTtTEtHv8y1tW",
  "key29": "2ALB4iGg4d1ivkTYaH3xiBDXBP3nCzs9dMkYfiYG7XEXmswRFgGMU6Wj9cmVEqM3wzxkV9gB5YBSfVmUQYgJFcLi",
  "key30": "4E9zv354YjcWaEdjMTggfL7RhZx2BFYte4aURzkZ7SSb8eTRkkrf2fk4SLtgmjrVfomN6Cjp2KmaXpTxeP3HQStM",
  "key31": "3xmms2n8WkxffQwGYMARXXifWvPtxZ78mnUetdK3si9vT5AVnGqfHipgQt4m6spKKVP2mNgzo3bENLV8LdrWJ2bw"
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
