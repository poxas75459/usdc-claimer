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
    "2NVgNdrpMSibimT4UBuDxLQn8hWX3zcn5zJFbjv9ezqKLUmtpe7fbrxcJhaBYYWU8SFXHsehWWxe5ExrB3sZNFAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VfUmqVPbNN9BTv81opgwPpuQdHM2duTBx5F8gXL3agSpCMNjbZr4YWDMHpChbSdWZvfnqsJNrwaXtAJjmCRK9r3",
  "key1": "5H5K6PmyZP2iAdPn1kV4DX4pqrGfN45uHaNNHsE6cADwk1RamrMGHeuazq3emAscGZ3dA6RVargPFbWcKt5T5vNJ",
  "key2": "3PYGeb4XWgihc3iEVLHcj7PNAKK1pVZwEPNfVqvYWSvws4jnroeeYQwJE3kubJEtHtCk7urcb949FPkqTQfDVR3B",
  "key3": "4X5tkpuSPFm3t44ua1KBBaoPF4UZNaMH1FHxY9QE81YMo21rZd8WyVXCeKtH68uGQiw5JpW4osZvSAZokTcqNKWb",
  "key4": "3cY6LWomuePyQVLn9XE49BDSpv4dekBkQXRi3AN9SeFJWxEhRZ5w2Dc57hhxJUbLMed1qf1aeRGrWZfDBPgSmPGq",
  "key5": "4WqDi2CzrkbYnajM8dgLre25NxAQaRtrKfaoWqdCo3JvqzGyp2ybf6Sqwgd2CpYZsFzLhDVk4jbuur5Q7iDfRwWi",
  "key6": "2YPhcUGrU7z9QZ4beU92DuEEhFyW9y57FrknCwt8tZnFHknZ1zwSrMvfGnoLuNzU7aJtk77YaMK4SamHsjVPb6Wv",
  "key7": "5A1eQ4pUsCXqfGnZ2ttngnhtkLT5aSbmEWvzLGyJNUK6kATnc1hAZJqu3u9mPoWSoJ3arYM3UiVky4zqpgySEqHp",
  "key8": "4rwLXsKmPmwXkkrawkMXmxuVMaahB1DGeJ2r5572KisK1sKEGRqFfQwDVXkRdkGmhjYr3DuxrfJqcvdXRuqUn3Wr",
  "key9": "48nUSuR9WLSqjjNHjkyJd3bJzRvncgXQNYeBNzYgzPRrgHJnUcVwzkwGjh6YzjegdYdiHp49J5dSYo8Kij9iNW6v",
  "key10": "4XmSC7LeDizTjXVDzj5gFdVrkrdzc2FpVnn8feJEjRSCnfUUNceWoD8rKqY5Sr4oKCr9aymUSqTaVZE1yaysHjtR",
  "key11": "oDzggNvNd6LfTk4ZDvWDW9LoPDBxV5dTQ6XeujpNuGBo5mpJmNCqe3RjBtmhkp2LoQKgDLKDbNWjcnuLJPAfjfw",
  "key12": "A8dbxozZguMGFiek158gPosEc7VFPeawWSYC3xXhrNL51Yu4ckxWRvX7ECQmMw5NSiLYdst3ipyywv2poJMX9iV",
  "key13": "5df8awnbZyseLnm3aJuM7SwJpnGPoQ9xWT8YfkhKFbStxptcXyfVzF3DkiWhnkqByB6yytR5vcFwVYGaoeW9PsCw",
  "key14": "ZQPYBGWwhQGK4pNMtXzLBbXTzysqGAXZr2gMvzG5FWHiAAoNDtF38um7Xc64euQBY1CHxTfC95kZ2CDyquWoDgt",
  "key15": "5zG3EexKMuZtaCTaHYVSUikpdDMHLXYodwHs3mfS8y6p7iKHD1iZpE5CTExSP5ENWmtBRYePMFmkUuDr7xLgxZbN",
  "key16": "3vcaGb4vgmZrmGAeAmRZKoqFx25gzJjVfdmPh48w3bY8Pbi6McPAyvgGiZsDSba3fQQBqwtssz1c3v8cYUu5Q4tw",
  "key17": "45HSWUDV5pJYxHbE2qjnmEEJkU9r2XYt5WAKUyHUNnW8AyiSzKjkKB5MqfRtX2Vf3tZ7MBcCX7s6bsxb6w58da1q",
  "key18": "2a3F57WugdDNTwfQCYEJhubrVSrQmV6RGtMJ3kbqV4jE2WbeLuL9kCc9TxSfeT6hKKtPvVCMYBFbhkteCnt82wop",
  "key19": "4Jy9sPxXJpiTNL42j5vPhrhAwTYrVYLQ7KuepNxuwteSsMWhrK6qKuZZLXp5n1VbHTF5i8BZyzHek2AmULk64cGT",
  "key20": "BT31rxGZFc9sEDtqwNy9xN5ZKukF7amQCoRtciQf8esx77tL9BttRgXjHHpDw1iANzDQGVd2mwbRU2exqqRTLVb",
  "key21": "3WQA48s6sScxUBb72khcqc9dkUQGRfoqUjvz6Jm9qSfR9v9Mpsdg2gNNfxFeaGV3s8nJsWaXPYzCLs4ENFnKD7Rh",
  "key22": "3pEQYvaeWnn4ZC7ztPML85McmCH4w8a5XB2E23q8QM3oe4NWaSWi5aunWNYNdfNGL5k6g78snZ9UCDn81VydafxT",
  "key23": "2N7h4MjBfqMzxnN6J2Ao3kKeYra26bvNxRWpp2E5Pc9coFSepMcweCuT14fsFU8HQ5rarX5YhHFvm5tpUSQnp57c",
  "key24": "Fmdh9Rnu9aARnoNvG575j42zZ3PnpYm1ZVX2qFzbEGnuY6R4XFMmaCr3SAK6hRjAYiTHYjZL5ZacQ4Pc8sYgSut",
  "key25": "4rTry47a3r26dmADzZMnHtBuWAzBWsmkxeBcHBfJPgkFnZDNcNUT7mWE8VhVY7S7eCn4f5kQx6UG47B6waHDs9iS",
  "key26": "3WKMBZj7Fgx8czbCX6cb5fgctYpUQr6s7yMUp3sXW4UDFGDPvKJA7JEaspLKjUJz1owvqtEwm1fx8yenGfNPhz8x",
  "key27": "3Rbki8YSnrjA6sPH8RXE9PmD5pjDstVgptaA5cwUPZhiAfQjKvwrdz9Su3tTj5749s8EwTDCCSSrXTJWkfY6eAEa",
  "key28": "3nWh6CqvyHie6FwHwRVDHiTjyMUwDeAdGm1JA1Z6samHdD4Pn1jSyXDfKq426BRqccwS7byoxHYdqaUDZ2d4XDxJ",
  "key29": "2UyXqNQkKsBHM8HoeFctfSp19GzgDiXQYCxQafiZLWJE4zfJugAT1axRKzTouJt21PkZMRE3jkwkwNX8iXFskDsA",
  "key30": "3KE9BQjaqzeYeysMuKdpYBuH8R7d3PRvTYnrbQF9AKHNYqyLSNRGLx8wW2imXrTRD8YXdWkxdyWwSBeHzDcGXdc7",
  "key31": "4xKxtr84nfgk5rVxafmzCQGAws8r7gkyamoFSDWFjEmdQiPA5FPW8CgDk4ZcWDpMA6hA5rZaASNhEjQFSUENzj1N",
  "key32": "5aLYhASXwz9o8E7Tm3aRiM1SLsoiGsdxf5U5rtys6DVcJMyBvUz9L7LtN6dtfiJ2TcnAsucWrZ9jWJjKztAFKHRx",
  "key33": "3bRq6jwudNsiyb5mwa6tzfgVfYSNdZwzSKhRQR8VfWcEZMXGxHTNfgdyQnSCvVeg2mtsayK4eMA4sSzx9ycf7eKz",
  "key34": "2fPEGVfFH8eKWR3SrrV49c6KXLyMCg4qcWm5wmfQ3hCeBy5jSKCpmw2BDDMotWw14m9jT1GaKpDUz58APpXoYY7h"
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
