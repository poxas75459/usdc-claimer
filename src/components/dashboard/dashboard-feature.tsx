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
    "381KLiheJAow8riytKBWeD1qBREDj8HFXBnQJVzx5r7ezxGFxdwMgXjxuZLNLjLFZaKZQMKzRWU21Pz4CGAJpNPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eALpVa7PV3Vnr2NVTDaT2EEdyKfzct4LSWe4tJ85NfPhzzfJCA3rQeuhXrdGaq5nVzdtKnMhdaiKUjQAwkpaDr4",
  "key1": "5DdxQf2srHBXq6yWqiEDUmLr5xzjx619J8PQGX6ewauLqo6jJaTdSFYkYnGoqQG54jX5mAZRELE18cdUYDH2w7g4",
  "key2": "51cURVgRDqqyBDnGEn53pSN1sgo7qAxx2C34CGVQmxezmgvos12qDeVj3zxbRnhkKyLqnBkH8KfWQ2cSttNpbG7Y",
  "key3": "3s1d4YLQ4mCKebrhWavjt8mQDg6peTsWZFXTSTctDjouK6BhMNbY6PApqeC1bwbc1WpVc1HxREXdbu8NviAkLLBG",
  "key4": "67YG9bKr859ojKQUjN4ddYhHbqh8RgHmhxFjHH8c6rxEqC2Vw9Kk6Ehnbe12P1td7hkKna9Eors935eV8X41yLhK",
  "key5": "2AVogMierAaZQhdtGWr8v8BtdYBiFGKo1ukyoprWbdeSFUQ6mgsHiPEP7NAAwRJnQ9dZ3EAxu761fKyQiii7p6KS",
  "key6": "3dNFfUvQh5qtpYiBj35uu7h7FhdzPkJCnnYcDajd82FHrtk79yShow2SChmAXynrgNqritKaKRpQafW9xW7CQjET",
  "key7": "2kF9WArtqybMDqQfSerutPYktu4ZdWWsQPBtS4PSEEdusCm13MrWk1cWEC7DoaytcKethEkYgnvw2t8uFZ7p72VE",
  "key8": "hLVsqocBVGtBgUNhrip9ojXkK35So2X42oT2psZgsyiTYdLrncdPiPHXvvYjEtXJMpFUTEfBFUQWM1uWBj7uVXb",
  "key9": "femJXjP5RhhACmFSmGnygKrpHQNTNMfhyUEwbSsQBo3GjzGKY8vNYiZjw5sLQuh4GU31ArUBesiXRaFSTwxw3UL",
  "key10": "wU9YVMazZuMbmWS4mUj18WSCNjgovpSejnZMnhvFJemH32G2GixMshxL4qHSXA1bmkHwsqS5Z2H49NJ7DgLmXmQ",
  "key11": "4RDLwzJ9EX1XqS4CMo44m8qeeff9rxeSQMfVEykjtVKmakmuQ2NhG7N355heAJkFb3qXghRbYPKTDyRgt1FKvwtJ",
  "key12": "3M93MFzKpRktYf7oSGuNYiS5YKGJQBhnGUtu9Rzrv3pxc14ctg2BgdbrumiT7okjf4zE9282cCmZjQjfEDgFMMXH",
  "key13": "3G6rNDzorvo4EYc3345Qrmpd39tdf6MXR5fTtLKFz5KtkiE21r2xiZjFpqq8JwTsRwsrUwc5L8gtAan6du9x3pUK",
  "key14": "4WttcJXAsVZPAQRzNyimXQvjRsJ7mv94ZEWrQgU6bYxqzt1QqU8hrQX3THareQtV9YuAhr8824hxdguNt9yaafTr",
  "key15": "5GccZNGd7qhXo16sHRhYNKduP8SjMpmoxsARXfYgS6Gx6wN4GBFCtaXbZdETg6d3ZJbxo3qghBv5UjzkgiXnfvoQ",
  "key16": "2ZhSeFi8cu7jqxNoJ5tqzVyZTy6FgaitqoY4ZQ16veoQde22q84aDdvG56ugQ5Cs6n9QahTpS6PxKXQYvQ5CpYwi",
  "key17": "2CnrAX62w5Pp911K4DN7nFgSgr6tmie5FFWvGfLYYDHhcCSEDemCciQGwcZPFDEvHaGDPGZykx4TfT5Pfy877NV3",
  "key18": "3xD6CNe2FHHqvSrSJkVinVLkPqWyR5MN5Jo1jjQ3rBzUT1DXJewN78xEuJgSL3niQQxKgQF9GNF6k8HJ2ks2Dcak",
  "key19": "5VHE4Dw2nYH1hVkRUMehe5MmqPgJygzJcC1eY9FPDavHMf744NpqiyjvC5L6xgr7pPMZq2tCdQrch9mip3ocYMkd",
  "key20": "2UaHuHafnqnABoVTVbkUL49sbMFQeKoayBovaTATDqTvehoo2QLkCGTyFWMqLYUB4KRy8jY5bVkBT19FCZuXPe9J",
  "key21": "4DLj9RVVkLD6brLiZz4tZ574dWXcUs2A3w6BGwrHzrNGxQjK7Pj3cJvYp4arJifGEG4yodzpPw7Sgme33ypcDCr1",
  "key22": "nSrLTxw3Un6rWb6kSKofY3vSTXzYQ1wKJcskN7Ahp9LooR6KSpKDgwtiDGpjdwQB36MQfJSiY3qKRY2szP2Ceg2",
  "key23": "3RXDkaFV8VQB1jSqHfcWECSGntwP4txp8wgCcbsaBnUemaeirWeyV3RppNmMWU28ZrvD1NPQTmG5i49D5RCYTtPa",
  "key24": "2nWtTzL24MTdJNNJuEVeTw4DW4EXti9Ao7uy3FFXdAktdqWxuAHifpBAheiUQLQicUc2HK4HKjjn5MPTGxi6XNr8",
  "key25": "4VpziZoXBB63mrsqnrqB9Jt7WJn5AzFPAJKGwRC9hKirsW3gouVFAw3HacWpE6yqQH84MgtajcFHpvXPNpJ4La3B",
  "key26": "VTJWGWvNiMYiedhh62SgNGh57khUCJLAHX9ckhwREDgxuFD7RBva7sLwrR8VJ8rHZh6PeQbbmuDvY64KLPuHEiA",
  "key27": "2ovVR7oWdmu1SYsmtvuue9Duft3EpxfzApYYzURyg11W1s2XMFWwRhutybpSbd1CtbfzZUEQU1rYiMx6gPcspZUR",
  "key28": "5n8o1GZJiGAPCGeBCTwbHoBVs4iyVbLgKDXYZE4hqyLNGnYsQt9rhd5Vb4B38yCEkHwh2z6FJKGHDNyf4u9q8TXz",
  "key29": "3SYNcXZEqHPjTRAq5xkFKraVtxhSNQFRBDqTpEmBU6NDqqBFFX27WLN4UaEFnJdFVivaEHvsGTrmLDpDmEgSFMUS",
  "key30": "4mEPo8xkZ7GxXxEo3ZmxwT5Uq1FkPDfYmeTsiW8rhDr6PRt4EaDBDfpxFLanVqkzxnRgjU66EbpXSY6t7uStWDe",
  "key31": "5Bih5CVuJHSrBJXYksp3dNodoKmnmZsuVJ7bp8VyNi8sCBxypiybGiRRWBNmivYkarnK3d3pMhi8F1fPGYQoqSWz",
  "key32": "2p8FaQ4Xgdq7WsDpBcc5SfxJ8ceg5ateyTWBacxkFccWmqijxPQdoEV77qEroc6TsZqhsQ4Zc2AgDPgdJTYXYxxj",
  "key33": "4REQvUtqzLC5eZfQ9Sdr3KeDMqCUPu9DGbpaRLpsANnbcezZU17ysJMLnseY45ukTXe3vhGMs7fFtTXPQsViPLrK",
  "key34": "2aR2VZvcTVfQ5PbQKzDTF9W1mciBVRkHegwwukdgsme7Pp256kduyKuitbAScpiqrXW6HKM4G1vcshNX67j5pdwZ",
  "key35": "3EYwhMyVqYfBGkTbq7FDL5acj7KA5UE58BSgGMciowWzUEXMnyGHUW8f51CNAvcx5RQP9VxVbULwT2UuwHhFWHG4",
  "key36": "2YsJbuW2t5uf4iVAm7x1WsxjFXF85nX9TqBjdzzqWaq7gC6cLjCvjx6RGgHNDeZ5V1MRFcD2ZGW9pXGRthAPSN1t",
  "key37": "fQKA9UwLFBhMd679HPB9cZSpLF8BV47y3deHF81gMwfBY3mqnuSn6hcW7y1Bxj6t1GpcJnLXrjPofJKR3nj97i5"
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
