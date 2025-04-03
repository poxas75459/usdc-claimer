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
    "3m9ZMNA1GQRpZx6AhvzcYwdrVGi5KEcrG2KNhaXoybSEhAe7VxaL2awAN81PDMtX6RK2PYS87SsC7tens1WH96Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGUXR85S8DZyfgTKQUH63PFKu7kLYAMn7MuXXr5pR5N1ZnvVMDLhggUfxD5nY69JcDnB15ncNeN9G8LLnGVHzeW",
  "key1": "65xz4qjS4D7CPHMa2aTe5FTxz15qUcok6J7pNFmvQrMCUE2tTJPAm5A4LQrAsYCprcGcXoPHRM8p97jXHYDBM4QY",
  "key2": "3C7eC6ri6KD3KqThxnP6L5MNdufsB8Sqh798WzPPiQQaq9NfbqdjqDgAYc1cNdFyUk2PLgRKcLUqZkmNJUxJtP8P",
  "key3": "1KVxG7tEwCbeaT2HuzjKGocZ2BkTyyztwBxrVEwyayoWPGVmquXvgFiuwhZXHhFjJGfcW7geu5KVUSbD3fCkzKH",
  "key4": "2hiNvcJrZ2936DfGoTZ3CGwXYPJ8pEiqCosrL2S7nfkFKpusEszknt3pp4UqK7jUSsziqxNsqEiWGLHzuHr3PkQi",
  "key5": "3Gg8vEgKg3ZoZBJsmbfywhwfkjskfkyTvr1HjFW8FPUTSu9KkTzuksCtpanAuBYdDUrSgQ3ucpummkVmCudEEcRc",
  "key6": "3R7Lpy4n54gKxcfPAqkytDaqfHVVQDYamRCEpxkjeBXfj1hVrZHDuqquQnQ1a6gfPjKV7vkwf5nTwvspCvNmpjA2",
  "key7": "49wnhQqfbVAPsSfHZTTh3dwhcRTbqNZLaFBwjixGL9pjjNb89FWYEaqo1pH96V4qrYy1tRWnahgyXmXUYeuXzYb3",
  "key8": "3LUEbV9C1vbwoza541Ez5UuPV23YzySkGMEZcQiuHbWAYhRUKQL27xcyTdWHoA3NufaFc3J6a7LQWmxxUkSrE5FZ",
  "key9": "35f4jXo3EixsuExdpZdumf6PXWqrda41i9BsrYhjpam1QZ4hob2wqRrNaZbAQb8KpLRF5KfMSQg2YYVoQaDbLHg7",
  "key10": "3VDpV45dS1aU5PcfcHKtpwoHSxUaj9NXQHn8qvnCou7fivwhyFpQVGRwogMbx2HVQryPGqTfdk4AxshqMZdsqTQr",
  "key11": "2ivpL9wAMk4nJMgsxKonxYvy4tSvuWuZ1ZDnypLBGDwzTH9QwMycMEuZMHHRRzXKWqrbaBaF839hAp1mAmKFxGww",
  "key12": "512p1gegYXH8j8c7oGD3tJVYeeMe7XeocLjHNQAFu6panpbifcXteyt4tX5FSTT4dYH2qf9ngMB5sWehHg8Vwq6k",
  "key13": "65kqqKonF9Yoiti14SXGyVUZ1hbvKQ6SP3WQFDU8hU3x94bMV3aUiQz6Y2BcfW9AozzqfmQPa3f9QeAbAinnzPJF",
  "key14": "2HnwoLaa3fov2UfaH8pDEJnHwua8M7br6pAvrqTb82jqy6Pq672KuyCHW8B4wjsHNLHHBjT3o8Uk44GjRY92Puh4",
  "key15": "4mPNjR37LC3fkgCundipFRqgHPyCzyCHAmrwczJaACi33Qe2hSt25NfkWeUWxWYeuHbSyb83jJU4BZ9SPXDSTG5X",
  "key16": "4vfA7fxeHW7yf4St4QWEa87bYTTVa36ZdRJb7LKKskBC42m52AP6JjuYHYY7F6W2i9NozAEvWuhuzJPT2AQZRQsp",
  "key17": "589payLJE2Q1CTbxdgCRwWUmXgq5P6hrWr4HNURs5bpiBFQXeaiuctVGRg3PMp52ktSMfc1w7LsXLfKZvc4ZW9Wm",
  "key18": "5zfg3zCRAZjpB5SFHiKStPy2os8MbjfU3TTTchxPkwYWjU7m61bsRZCJ6M9zwB7ZApS5txcGvaJAzcfa1LMJuSbC",
  "key19": "3txiM59uW8Fk6zgwDNWoegr9S8gNsmPJzHiZEyVgzHt5cschrLbwahfVhbpV9u8765CEwfvF73Uzmz1fmVVMeHmu",
  "key20": "x67jch4gwyjNQa7wnn3boewZsNtGLjWbUcGqBpLhbLSoNgtWqf5Fjuc9uZU1xw9EJYxXvWobT23aYMBpxWUJRt2",
  "key21": "5EbGDBNf95d4sByHeyW13bvc9iWL5rT3Y8GQUbxWDWK7MPzkPFzWETpuoYSXTF2exdZwj256oAx4aa7R8GhmyAbX",
  "key22": "5eJEPvJTYgpPs6bQeRT2BNax8ikTUaVAEDpxExxHe1P6PsCLzszdeFZC1UkuTycNxCNMdzHFyHbmv4Q2HTMcaDTS",
  "key23": "4U6jXcsHLSHP3jiUKV3BNmmoCxcFPXye7DzuzVdaXeKovQhrqDjWoD2ekeXJt62QVwZ82thgmPyz5vyXsRdssbxW",
  "key24": "46WnwpkuG9j8WB8VTht51RNixaLSCjowzSEuiazcDw6jbX88MAW8RFdnPvbQ3Ucc46A6VicpCZL8tHcX7Xv4jRsv",
  "key25": "316eqJcf5YsFXjJUV4J5Uq7R3xTqNXoarn9GrbebexbEwFRw66Bk2GAGD74UsPGMfLsZjQVGsXkKs4QzhRVjRMDs",
  "key26": "4VfaDZbpZ3PhkPMQzD3vCLZGtTL7Tw94h6rk6Bf4AhWJTousvvNyrTnA8RUHZu2SECV8YxCMjrQGh5f8wZJzbDY4",
  "key27": "57oqjnGEqQAbTwFzmwuAEBzeb6YB2GL4i6nfSn4Qd1Cw5em9caPZzrQjhWjLGYi4iTjawG8atUsKZ7wXBbQU8cqQ",
  "key28": "584aiLauinmTdutr83JyoidnefnMp1GwkBpofzdRnyuy3HFgqXhcC9jjGL7GUD5Aix7Hy5kh8BJDwZKQLQfUjE1D",
  "key29": "7WZar5ixh1fWNniLT5Ny54CviUY5uC1LDYzCw7pXNg2EdjnW4UJAsozuXaoVbJ2Kkrq5u2gV1i7FizfSPPQR33k",
  "key30": "4zK4dAsfnPecJf6g3vNDGudPz8eQbSzCmniaXM6uAvHuR7VHWYdWKtXTCdV8oQXLG29h69sMdV75LTt94stthhZG",
  "key31": "5R1AyCoUBsuAizaHrbirj6gbmgQehMn3oYU77XVqhriUFsn5X3DDb6b1AvHpZa431KcN9KCU2yg5cPU24HqJ7PAa",
  "key32": "4M4sTyU9PFfPqdxMxX4YXrogmrFNZjw3EqTPAqG8zqDwz2yotJrsGqgSTQipyW2jezZ1kvoXtxHJ2c8TzDiL3Pf3",
  "key33": "dVAkJkiJCAbdELGow75TgvmBZwVGTYa94b9Jz96sghTp8YNmXmeB3sZAhgfbeexxu7kgg6F5UBnTsc5wM6zEKQP",
  "key34": "4hyNh9TNCgkVpL2sRAccfR6d8LqPdX5hFUB2kaomDg5RwoARYz16XLCitNMnLcdPnzTDvMtf1xDYzNaj51pv149i",
  "key35": "4xBcDptovkH2KqHqo1Wnc4Y8fWqhNLfL61dPfE49of6Lik9CFnXWXTUppykotpVAA9c2wFkzUsXd8gzC3Y9nB4Z7",
  "key36": "adfwhbMtqQ6HvLMJ15zNvQPFf5Y2oyGcizq3bBELpLYH91kQJPowNRq1tD45g6vRubNokxdi9dmBvfQtXcrAmyN",
  "key37": "ZtrvLeJxgbyoMiiFnjA9fRcRDA8LDNqRFBSrAYD8nEbf8XdmtUAUAvAiMxQQZrtnCSRfsfQ9eSMqfT3NajAeW2x",
  "key38": "3Vq3Zxczc644pCL5oV4TJgYTvVnzXbep3pqZHVjJkNxTdgQ9YrxF3A7eRmwaVh8nYiK81b91etdSrrvgrdEbD3Qw"
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
