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
    "5qPxbWMMWKebuubcvpUfhvZ6w26dNG3nsa4Qgf5vF5vqzyAAMao3cuJddRgBjvJPaCzSM6dqDp38oJcRJBtLroNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4etmpGG9u7yMGaswzoQn6ok13L8y8DtNkQcm5drstZCVZXwNQzZK4zw4nDcPJbrXCqc8x4HDsiAQ7Lj6Ue9ZCYMB",
  "key1": "5ftDjKsTNLbDQuMB3rbtgian4YkNcSo9kSa7FVG2dQsF8Cj965RTEq1qZRk6HkNMg7PvL4PqkSPqDyPVTJdPWdQt",
  "key2": "35433ATKugJP7Dw8MkykYWih4hdRcbRTpRCBz9sEfYfsWU3Erdo79YwSgGMaa2PFtWaMDs23xj6Gg7pvnMu1n48p",
  "key3": "5sPZgZhBgLzqC8xNja4FNBwXT5em3KuBpX38WgwVgtTiDqzGC5X226AVAt1xxxQHyYYHz1quhVeAoNqGw9wgeh7G",
  "key4": "21XDRco2y9EQ9UKedVmU12fVFcRq9nR2yAE9TkqB6Ym3aanLrRM5dhrF1TGChrapcM2Do6fG3kFemzhwdAeiLfoW",
  "key5": "4Ct1hJSARwjBoiaaAKdXmY48UMgmQKyQyd4rroNQs8HW73x87rSD5rxBuDYhngRr1AbNmpt27JYzd57gqwszdYQT",
  "key6": "rCrP3WuevW93cy3YRuPghdcVpEXhkQRVEmWd7ZnDoMrNn5CVnCimWLBhPBWKtZmGo1MPZ6fkhqAWCqQFWF7Boa1",
  "key7": "3494C1eopVvw3DQ3FBCyjwdwPzeWuV3jo2FM7PFFAgkbHR6FuBfcnphM5TfZzcKpYUTf7XJ4iUoA5uikC2cyBmPj",
  "key8": "3xPPS4nBjxdf1p2U2YgJPGjKNk3GEMrtuVkLpgkPmahK1kwM5ZvJe16DQGVtZBLgf5J4KJZ2RqcvSbGVJ9SaRX2w",
  "key9": "5EBJam4Si1QGK2vWkjde4wYqp26byy6i2EZk5EBR1AZ2y89pHA6JpnipHEpAWBVmn6VBtLNLwdCAHfV1DjaXvpaT",
  "key10": "32j42qZdzzZF2L8Le1R7H1dybpL9LsLNWKLahcKHNf4UsApZkP9GuZ28kanU33XX5v8That3Z5UqdLATGjGMLw45",
  "key11": "4gTPUYJE4TzBh498Qrwe8skSHrdoBFqfpnE6TKQK9MRYQG67P3SSj9TDgkNxTD4um7LLXbsmcqYLKWAoUwbyb5SP",
  "key12": "49Nprfzw3rd9nf2a5Gbju23nZSQsmpLqpyYMWWzpU5MZBxpCqaTeSZLZ48sYt6BTKoczxm9TXfZhyoeGKhC8jHLe",
  "key13": "3GnFDr2ULSYdq61Vxvy73giyA2QBjJJhjBikm4D5UELK9oEoMPRUZYkHQXdS75ibHw1WmR1xWh5RayNxogQTUPj3",
  "key14": "LKpwqpHEdW8GJHKuVUdMaJqm3doMsrhzexEZuDV8j8pLJczoTHDAWekZgRQQjKX625QBru4kgY3F3NNouyKGWo5",
  "key15": "2paYvuLs4qkULorTcDgJZU2e1Ab6UghSRj9NT3W5aHqk4AT1y7qxjJjSF1JtHkLLRQQCnmAR5VRp4TcHdLLn7D4f",
  "key16": "4FgtvFapydaZKiKS53n3gNvqn6WyGSizvGLBTvKpB6rwLSvHvmS2uZJ35R2YxoLmzfQiGGFdAAxPawhBiF7e3LCK",
  "key17": "BhATHdvUxHJdQ9Zw2yCPjMYekpGpsUvWv6Rx9ridJCt2PwuT1BynkwyuNzCAwsaUQRxiDM3nERruwdmidkJXMz7",
  "key18": "2qYQtRfcAr4FoKN78axDVrSvB4ciTu3DSA69j81uvhd2yPcPUNDT493SEFuqgNey2wKE2zYrJ2ThJZji1CzekPHH",
  "key19": "5UA4BQGVoxUGMNhShCdhJ2xPLYi7dQUK3UE8Px5P75LLKqwtG41htMettD5buoixsv2CjLufEFXdmjv187XJH98Y",
  "key20": "47Mq3XH1S98twX6Cj9cCsCF76dH4GJraAriGfSZg8migeNThrrru3fmmD85ve7FHhhbCT2C8qvyezNhVkqasYMZy",
  "key21": "4YFDxeBny47d7i8y6J7B9hbj3wtW6ZnEKpkSnPuPdwafGuG6h6mUngigfRq2tm5pdBRh1ygZpvmKipLBzt4WbU1z",
  "key22": "5yZJNUxTf84SUumSBPo7rr2Vf2coEg4ByASpGa5WDYp5GEvk7zjgTJcPjJ7yk6NBVxqtAW17mq1K1MxFnsXkMBxL",
  "key23": "5jb1p1NabXqLiQbkcD2747jzrVYicANuRrErmTDGjLiPtNeC3BvTAqB24NiXjCvDgnQFKzz5X3FwSJCEvF3Gy3RH",
  "key24": "4wqz2nzbRxBPAXnDrJB2sBDCWhvvzC1JJoqtwvtxVcYxm9RxumTt4QdUhrPeNK6kwovdhdpuuUrFZTw2ph4ZNfHp",
  "key25": "5NDfsUnwXbmfPgQ2TPK6ni3F5bU3xAJnDdfK812Fzx6dXEZv6B7QmWyPwJPQLty9or7v3PsMLYYqZZpP2oZKez6D",
  "key26": "3tSsxEfe8NiaE3dwm8cAREEoqkDMa8hxoH5AuJ8DBKsGtt7QZosUJ7qLT4bZ82QGzkTaqnpMPTXwhDtaSbNZTz6R",
  "key27": "Mn2fDbUuaopYcKQGzRpdLBp8bTGpqJWAoTU5RjrnureU8QgjLgQBFJeh9h9KG5f3qV5hqfiWz9oYGZiHSo3miMy",
  "key28": "2gLV6WxcAT8Ad5AWPLBHyNv4SGenMa1AUui7M1eB1Vbrw9RGSwJi1QR19x8wrbiHJpnoU8Qkrekn5bCH5u1bATBN",
  "key29": "2rQHfHwc6pSH44DUGXSGMmszeT6oApN3xsXiZ2rZ5QpSNtV2Ui946D91W1cKRiFWXbGnVUiBTM6Y9hMakfWHd1hD",
  "key30": "4XL5b6UhTWsrNfhyBCQCTb2a16ypAqMUuEq4fqX7juUDD7CUg5oPFydHLLVp3v2ncnfYiQw2aabxMUxR7wsWh1HC",
  "key31": "4t6gP6AgrqgtR4fuYWpbWM1QL8WS2fVrXTyhPJXGsWUxAr56raxZgDk6px5raJ2QJR685nz1unLUNnaePwKkY746",
  "key32": "3B1HvJHyoGQqLmrhWhr3YdXg2X1TZaMGwpv6iHXwM6sTP1oE3X957pdfcuDc28G568D9v8598ZbudBjbza6wyYhh",
  "key33": "2REes7FiNazJnFJAouxqscbYkQeT4BKLN5NAsq8iz45fvnsBDJPcEmqXAheoU4MW7njxeZuhthGeJBZZMah2NMhw",
  "key34": "46HRQ7Rj12WKe83of4HjyiKbw9BsPfZkgjvnLrHwWqDBNvtZRx2HsBXz1y1BF5jhhnjFDrqL9veQtEDySTpBKABR",
  "key35": "vJ1pdSFYkqNpX26HAHFWg6Hf7tbrSMnTxDiproFSc3pEVjQQdEVbVJdusEiK6muY131YehNX5ybxWJxyEqhYf73",
  "key36": "4HYM3DY2xpXV6d7dv6jYRbk7Sm7X35y3nhFBY1KkgxQMPohKm1yX45rCqEDUB44Kzd6bFAAJGRM9k7wqwjhwBbNW",
  "key37": "M8WZvK6PG3MdthQHV3BKLBwo62TdR9385CRkDACdoHjScUczouwGNPWwMRBnLNuaJhYkzCRMTr9UGpTr7QkjNHv",
  "key38": "H1jCveKNWs12HUcgF4dQ3jFd7rBCjcQPdxbBWxErAjxiQhRX11PdS77Ysh1eUBa5ADwQxtCxeTMEdb3QT5nvb21",
  "key39": "4rvuqX1JZrU4FN7AbysQQCc4RYY2ukqG9JFjKxJs1mTNZ3G9fn1LdPWXv4Ce9XjQfoFNQGjLwS7Ue6NuoQ6JSy9E",
  "key40": "8MdoQPGufXFMPbc3jEZRAHcpQAia3DEzfApQFQCRP4i2vL7KKuczVqehNedWbgBBxx6vqTpahtDQ8NwiNqdUZsY",
  "key41": "3Vk2WLVFBQqMraaqKHfxPuSxUaUZa5vYWbRVHZqi4nCNXBd6UuJWysBNG8DBS2xi21hrjEHCxwksSfGRCKh9CuwM",
  "key42": "SpDGn2Kf8PMoUbP7yhTSS9tBfQtCmMJ1eP6tibm7pqVmGeZGKyTdxpWdkeUBLL2pt2ehyHZyaoY5k72dUtUWCtb",
  "key43": "5T6N8YqTGQLBF1cZTJPMRSoPb3P6i5dwVDS79ZM4u8eLTAsvK1Ye4zQ3YRvjAbDdy53Z6hZdnxHLMpyzVgNGguw8",
  "key44": "5cdDmDMSHYaaxEH3Go5Zfo9r2RHN9qQpivkrXs8qot22yaw2VyF8LHmkLvfqQF3LJY51uG9LAq73kzwekksQn6Vg"
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
