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
    "63r9X4nAJQP746DwosRC183rXf6BTgu8R7EDgA6mpDmyQtyhThU1E7bgQcsbi7uVFmscyeWbsw2ztbQcRcLtKiBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDQDVp5Yw35PCjboApkkbxCktHFSnMLTj5eoLEHSYBtEPYon4GxE3zEH3DoqknxRBH9vkDGd3rSjx6wGzecxUVD",
  "key1": "5eYTmrjsn1hkkm649FqqjnHHn9gLLgtYeFjqEAis29wyA8CYgbh2D3DHvWB4j3FnSG2npu7nuHsSykVpA4rqKGi",
  "key2": "NhCStaYnZqKiUdBC4X2qEWzQvKQMAmbLTF5hHJD4mmAnD8TBA7eWVtzEt6P9HrKd3jtBAJBDvg4ZD2BT5A4zFFE",
  "key3": "3YKU5pNHbAKYN77DmwYdVvf15HFNZRaGUEQALFr8TJ1VLcAHhowcjEE26ay91Xu6p4oaDcPSxXHLagnQDZg1fz21",
  "key4": "S2HuuSwuu8pchXiKFzc9nDhc9gaarVY7EWuffunvCMkEgX26nHBDX9gs8DSLXjyF42tx4oFMnoC3ow8wt6pHvAL",
  "key5": "5AfpBxZXRBHXoomfaTXGSLemS4hKkiNRNaAVJpQc6ZngkbKLGuXcgYrKivDJ5rYVppJtyuxHs5VpVAAufUVskGep",
  "key6": "484L5bbXKo91pwcpdWe9MTDhE32AwKJdnvBTK1RXQe1XPfx9tDktNMNVYMaSDkq1F2BHY5nTJ7WZHToGkZ3hp6rS",
  "key7": "LdSFLRvjsPGCLqkRrcydcRG2oueFBcL8Z4knxic6ZtdkDAENvZbE9UuKgLSWu1vFntRxT6kPEmpAVXQ2G4axe1a",
  "key8": "uRvXF4XZpT9uYjc9ApkRMWQkW3puia9f8dJnoQVAHdcepPaEFQ3izcFU9JuYYPW1fvrHSkHw1Ude74SgXQ4MrLg",
  "key9": "3ePVTZnB5FSa6Frbz2Unvpcfec1eRJgasnpvssjhbqxNZG1NW2yugHLrkFtUmxr1HxH6YMUHcQYxg86SXBk1UJkN",
  "key10": "4yBh6ynXdvdM9fuqdv7YgYzLBdiN28HQ7K7EqBYUhPB1yK3ZUzGucMpBFwJ25YF2D1rZoJAvmDqzGqkXji9HdUDZ",
  "key11": "2fynDNETdjv4qQeR9o28BW5G76d7MyAMneKSNHXfpARPXgrQbSdv7JNNC7WL9Rmr2pZcdyaj5YpSHE7pcZ9jKzfE",
  "key12": "65a5iJP3ygb1T4cfL7JKdKBDVKbZo6AjsEwc9jDK6Pnqv32oPcNpmBzajUtPN1QcjjpikGZZfU6gouBjKEnCW2uA",
  "key13": "TUCXCMMZZizRGqrV68CJG2PeA1wCuBwk3y4uzfLLy4aUb2Q8svefy7U2c7589b1Fo5Vj1pzpivvNCT8rHcMkr8B",
  "key14": "54TciG9Cv6a6iJPNeBMRwAP3RkFyLHpZDcMZ1Mf9QpnCdRUoXFv48nXc1WUh7eZtWRVkzuxky1tSxgQmvS6HdK1Q",
  "key15": "5dr3YeWo7izsd3NhT1c79FULinrEFL5x2oXke1KB9MEE4rA7YhPvPGo6Sdrj271iYJSPTejMkSRw3hgYFzsMt1SQ",
  "key16": "2efVh3QwALcd7WDxR3xumaeP4nUuzXfUjppbjEtbVuKhE72rPaKvAcEXXc8YXUAzx6HK1FFpfqTb9QBszvgec4Wt",
  "key17": "29z8Wg148K1oYJjkQSYQ2d9qh35X26ZPnLbFG8aR6stA2HtwNUMVNLkEHhzsjDK9JuRdwgQiSQaPqUN7FaDhytGC",
  "key18": "477QJHGTgfu8wEWAoyPZpqBydFY1r7esn2rZphbvuSWg68uZX1y6VgrhMxyTzpAAvrS37DGSGUThZDRzedexsgBP",
  "key19": "SLjMmkR9jjfaH2PXmtryphF5F2ybG8h5uwF19fW4AvnUm3tExe4h3SuRa3xV6DX8F7s3carQcK9kGDThaxsbtWn",
  "key20": "5Q2aWEGx6xcCka68yrSwFbtQPbUqS71toYFs91KGxGAGGZ9D13cmyaWUMqVbV1nR1mCxaskpqJqkeaAWZckDdVGL",
  "key21": "J2yoTEfwBpM8bM1MXviCknEko9rEmVevt1C8KDLpVJdaDQZP2PXiW5pwg579uwLnmj7vCRxPrgF3sqhJRfSReYF",
  "key22": "4opihj6Yn9BTEp6BiPBKypnFQhLaPSV78dNydoUiHfUNVEukZMMBiULNomfhEuNgHWtBAjVkiMdttFobLF5pRHV8",
  "key23": "ZPhPpJ7q9uqX6PXL5NM2zYwFN6ge1FEBpAGA2KF7gZAijpydDcvqTY22W9NpsQXhdHf4jw8Hxb5GsfPDVLze1w4",
  "key24": "2puFGjEaKayeo53vsV1r7tzGdRqrRdXdSMC1s1utV2AruVUoKv7s2RGkL9EFwZsz8cGr9wJUgmYHXUyhkRxvgiqe",
  "key25": "3GUgLxLdrdPyxJwahq186pCw8RWBghhsxgxAbSjyQxJFenTqZb5acqdT46xv4r4Uz1mLjnAqo7RitAQBwPskxv7d",
  "key26": "oiU1EcH2NVbEHhB927vhGNvgKfGvhQSKR6LJL26JQw1VFh27QooypoAsiPonJd2JQiMXiuN6LutoLWyBafJbtGK",
  "key27": "4sNKnD3oj3Zv1W8TyinxVW3WzLN1i8BZjLSoS2SqP7bPByYEuVRjQjQwiYKUFaz2sjukZUZrLzuSP6nJPLHQ9dcM",
  "key28": "2kCo9UDy4huTYobqhD3AxmMax4S1TyznghGBeVbWu5NX9rGFh5W19n9xv8o2hsd2H48vz3VpskQjCpjtgw6TJHbm",
  "key29": "2t7wm1F4dLNeDXdb5p5rRSozVYssCoksFJqgsHvwYoXmevVLoKZMca5brGhBUQHt8hKkUd6KiFHTyKvjiw14fcRy",
  "key30": "4HDFos7FdoLM1A9711duEqxgTqSKfuCUL8Ms61KCwrZgJZcc9JPex3RDVZwBqqjqCxvqwGkzca55ZtxbMAgno9ti",
  "key31": "4Xv11sTNkXQXGhdbdwehuobEA47NjumEz8rUYXxWSi2GLnvHoyNvNqeSwopGidwiHnNjMC5tXTAWmtsHiYSwMX9V",
  "key32": "637pPg9W7gqtVCexYfsWbvuGkkc5181aiq6Ve9etyf5j6NE2iDygyLw8Wwzz4w3DEKuRyKnKMNPdAzY4rKvuSymz",
  "key33": "4NMmWgZHa7zSKxcfVXyosTCCSiu7CGfAwyPywikpoQ1qnSipeLZDN9kaSm9AgEVJv32qyonSPV8Ypenw6YULdSod",
  "key34": "4vcKFk3iP1K7ukSCg7edKR7aYwkKyp3mBKJo27nRX5rrkm9dUjAfMs32aBiXTWS7SC53nVKB2CiSebW5BgwYamy3",
  "key35": "4bfc8qs4HH9pVVKPkmt7LKVvCnkboW9vX7pWEqTn3jqA5qXUXVd4MWVnzxvaY4KoTfgxv6PLtiwAg1ofrw9Rti6Q",
  "key36": "2u8bku6ZxvuNNtviwGm7uU2AmcMT5vFp6mnBr8DrgGsyN2hPyQWAWTPcqdfCwXtZinE4EwegNz5U8nRVzAH5stKo",
  "key37": "4P6oroG3JqQqMW1jS5YNobnVwb7XFCJwT239VZmQjYgMChhGeZwdsDvB3kA4wAaSnXMdpQ3otcLQdqZbXyKo4oaB",
  "key38": "57vopgYYbJCzeeXbLEvc25NThuWgNsMHMENrAiYHtU1RuUNPbVcRLhc6757cDkytk3RV3kMar5bYnyjjWHudzaNH",
  "key39": "2ZRRT6u9t9ZwBtjsJejfwRPcmeakXFHDCNgNimRAya9NkAVkFCJitxg7xzPLQ8XYa2rrFJv18Z33sEue9Bc72Jpf",
  "key40": "4WNDxHf4B83RjGJxt1SnR1gQJgHXUv7QuV6Dn9MwzBjJPv2ux9kX1b9ZCpkStpxS39hmnYPxt6WrirtegzB7D6J7",
  "key41": "4EoeFbuT41yzHxBmDMgCCqwYoLoCwAyTmHRRYisgsT9AGb1TpTi7vh5Wq5oqMWbBXkfy7Q8tp2jSzFHQmvxnvmda",
  "key42": "ALW8Bq1NHxiTptuA9aaG5JwL7NVAyYruuWHfAf49BoNqMhBoLvxeVzFt5AB3dBKtN1rtU2q6N9qQVYsy5AMSZDt",
  "key43": "5Xbmr477QhgfNqtjdGkRugMnFNwQJsjVJucT1C4tmbhtPZ82C3ysX9Ur3zkaMGoEHUY6Vfz9x3t4birg4rtVsnEt",
  "key44": "Zg8mHRuZET5cjqEEJigpZPPviGfvGwH4yc9BCPGF1nACkFcVzKEjqTtzRmokcpjtK989ZL7jKbouQWmX3jsSDwq",
  "key45": "2vrVXD2ZDhyV6LSrb5TyFcAoLowzSmeDhD8h2X6vqyciYunvPR8Q43APG2zSN3VeYfaBqi2Vep8PSKumxjDqQLC4",
  "key46": "5drBAMUNxDqqmAhf4SwdbBau41gtuRpHC8B43GwhmbgAveVTzprQTjNnFSVp6ez1TgbtJXNZztgVxWa6wsGvsdma"
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
