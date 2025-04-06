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
    "veg2frb1UNmN476y97Kv3b2DZhQXVejWmRsUaCFAUR2fZtCCcrB4hS7hGjFNcQ3q9wrtpLPGc9p6PnJa4Yfe9qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtiYeV24XuW8He69vbEkTbF8wLuh4SVdSty4vbTaZFWK2oTo7SPx8sZNR3hRbuxzvSr9nWCEkyr4Kyhy1dS43f2",
  "key1": "5TXjtsss8vzaDrjPVDXQ5pRSJDTh5zj8Fsd8bhwcxrBdW57WCfDtPjrvaaPHDUXjCVUQpgNM76EeRgT7uBUXA8ns",
  "key2": "38y1uERDzFNCCs4hPDUxjatRTZtTPruJkrkPfTBrJm7xJzanwsggDG6o2sqUwbeffujyUh8NHtd23ixF1AnDVzyF",
  "key3": "2mVQD9uJtNG6fXh8QmGZ2qKdR7VmpGg5TDGyxaspX15BsX63x9Vsz5AiFGZwZQH2X3uvZmBNhsQB3ksrDpfgPK7b",
  "key4": "5wB957Zy5Lw19QGZsEnYorhCCAv1VwT1zS4rpR4rEKgQKy1JQjHSvmC9pVWfW3ZsVdzyv1RbRbuUQ2HrJK5Hcqwi",
  "key5": "3GSLSVVT6PR2pgD3PcUFhu4Sd16JcnWh82xjZnwk9rjn6FZdCaLhAsPCTj9TU8WdjUvgeJcCyE9ZhuSGThKGuaAH",
  "key6": "3oRaCS8A6dDwBYbC9ej6PA7XddedDcDQeacunDZGmiL4eqnuj71e3FMC4rNB9Dtf2Gkvbwqtv1zsM96cfaFN9vts",
  "key7": "5ZA4AYsmcAMcg9eXTuAYY5DksY7KpMuzheC2nYQxUvbaG3pcQNwg4SZ5aeQWWifYvZ4ZdhetffFMEbGF5KdFFPiG",
  "key8": "2JmJdsFGok9cUHmFQwCpNRkoMnm6eVUm9CBpbTn5mNxrosf5XeHGRgXGkcFsaU7iYVsyNjuMF9uKSNMGg7xVQDg8",
  "key9": "4GPXggzVFkeLgnvdfxG7P9UyCDuXtQeS99QYHBRgiZEjJydv9TQ5aDMYjP9htsZ7fR1gWyYidEsXXXXmm9swmYNj",
  "key10": "2ZVzwLR3ARyycfmW9EiiiaUq351wozPLY3UtzUrFpc1a4Ao7gbDHEkd49CBwohCRCTQAVoiwzbwwUrd9RLpK9tW9",
  "key11": "5uERhMCcYqnW67RX3dzV7Dt2SUSNFLFCZhtjc315mVg7ofpbWxnhYLztmhDN1B3gzwUg4fDB8xL3ZEFXR8ndpyyf",
  "key12": "3yKviBxotKTDunjQU9BnNLWGS2xAuZAj8UoBp1SZoAjgKtHa5hoXtBjAxzqKshxqCK45FAFWCNhrDj1KwLxxoYTm",
  "key13": "5hZUBTZCSjroUBrBuERjP9p9SJzF4zuCdisejNqdcdNJuUGA2esmTs7vybX1Hq1K4PwHAWzAmohXLMjqTnaRxC1m",
  "key14": "2FQtn2TzHhvBfrwRTNkGpY1sYkBc8drcgUGXYF1EJQdHmareWzCoDjzyxMvZQmebMKqMiXUpnfcdAezjLhQKd8EJ",
  "key15": "42CYJqJMUKJ1Qt3kB7oZDTpXLvixBj1DZzkav5jPoWfQQUBxkWh22cHoJ1oPXHhSunqefDiviMmjz49Re7CtPYFN",
  "key16": "4iHDabeYWjtrJopkJ5d6JqNgHD5Q9UZwwRrrPVMviCq8T4S7dirV2Njvfhxp3dXUsjK9xSqPNo1WV4U9Qkabxcr4",
  "key17": "3RgdZGDcaGx2GdEza1PEWoLwDFv9UwnAfj85APwdHAKtojJwHGHvXv6ovo3aoyQ7jLwQz4HRX6ej7UMsy9edfprH",
  "key18": "9qjUMLvsDdcJv9UqRfpF3f4hR9BBD3KzTu1n5BDp2GLNyWZrLCiQWvAmgJEqde7PNfUPcieRSNK9oQ5eikbSZKE",
  "key19": "2AZLD6Fm2YZTrs5dRnipK5sWLVCCQqtA7o9txKtAsAZ92nkn5gmVWWV7rmuw9niYszKACgvjwQG7hVR7FzHrKcXj",
  "key20": "3uCQMD2TEtBFw8fPWwCCAVGU1ViuCCgncZRJTWwhn7uvdpyYQkUjCLh4VSvicto8WxifUovZLYBYuab2TmJEPb5J",
  "key21": "wxAZoUZ7Z9CeFGBZ8hSFPzVdBTG4RziC2mxWtYgEuNAAXeywpog5nHur7YuRyvJ9s3ydEj4JYd5Rt7mBbRKn6HN",
  "key22": "262QCiELFY3FRCCDFK3gaKZi4Hym6iMv26sq3vAGTjBsgMhxVRhgGFsxupFLq5XmLPdCNpkgrTAgt8TRBJX3B2kc",
  "key23": "2JrMpREH7GBLbHnBuQUxxgjsjfjP5gqhD5jyWdyoczzHAbZ48oMRj73YAT7kDgLWbVJscZNqV8GMp81HaHJmdrv8",
  "key24": "37m9qH1pvb5popXdKCQsiKQQ5Di4N3SdNxbhacEHhKU7hgmAf3o7sWrpF8dF7kS6XPQAgT4inNR3nJjP8qTvBP1r",
  "key25": "615PZYar28kXuVur4kj7n35KiSDto28x2KbyqrZ7kmjtMZPi2u8yj9Tkan1Tm8fa6WYWXpwanC589UTnfCjh6PXj",
  "key26": "47h9JZnT9fU58GRCzh5y97uJiSK5PEjMS213DZQuHeVqotiujTHSotrzUAdLHRADPXRvXpkidLn4ZfFVUnmNQbdF",
  "key27": "23Aq5uNMDez3yCnarCzXUqd3qEsQA2i9zfi9hr4y49pjbhPh4gKaBRiD58Q7BmbV9rAt1Ff5qwneZxFxHwn3NqaX",
  "key28": "dQ6HZpTZLYe8q4KbtbpHrtseRABEYYvdAW8TXktXeMMhV8uD3k8NCVgSDRzjcNDoDJitQJTYZXwnyEFndESyazF",
  "key29": "5yKNPk5cNuTj6M7NMpuoueaMqEMSVQD1KhzmqF5iz6FYdzwmk8EUHYjssybDo1P2WAzv6q3WDkk5vJvZqSCdy4Cv",
  "key30": "5izaApR5RUZfv3rYYyfPTAV3DogCWw3CD7UbRkoXeAAeQzVx7Bn8jHTsPUsCLUUvmjuTNssJyPjRNgDQHPsYkYdL",
  "key31": "2jZDy6xvPmUgfj15mQ8KfLVJ5xZw1wZk9pXzFbTkhFrvnrNPQpRZnfKWkdMVA1BQibMRSz4Dy9aLYp9PLmQN1e4h",
  "key32": "4aDYvFk4oTfQkRtV9R8M2LtaBmCUkzfxU9JhJQuACq4crcox6KECTpzMcoZvJp9WKBa4jSVX6pERdUbYvw54AjX",
  "key33": "29hbfA5H4UCMuiVTMbFyM2AkPQsN4x7pm1YEuRi3cqxXeS6hRqaspUgLq1N7YRvJBWgHQqEmgnyTenZLXkoFDufg",
  "key34": "5xJgN1xbV5r5dDBDw6NimfQVN4hLeUgaxHzrBnN6ebrUWYG6zo1ZXGRt7bdMhrjuwgAKeDdKVbXL1NTUq5Sg1PXG",
  "key35": "3rwV9KT5DPv4JeDYVkbtY6c2BA2kSgxCyabrx4sx6ib9HrbM2cGUK9pj6pZ2L9k3VogYGQitC5uJ8JNcpaEF521N",
  "key36": "PgWxEtXy86a1i2iUtJC5jZocgoqNq9WDZ6k2JLk2ch2ZNJ1r3RxBovcVxXBSruoZnz3jLw3EMfDLa2mYdgkU5Kr",
  "key37": "35piu8mkqP7ZQtP9ysGfpDeKA6LbNpKcEnUZpJuC4Qs9eMPbNneC5a3RFcK3d2R5BeZ4xqjWzJgpc4gCiiE9c2A4",
  "key38": "4rNgegUGG5hwgiBRdq68mErX47LoAawcCKyWpeokpCaDv1Deeevb13orLnBHrQE9hwhwWgG5fysouGymvWdhDT7Z",
  "key39": "So7DGmDXotGj1Y31tKqXBS1khmGWidvgtChudkYAH2HpwAoYEuX69o66TWt1QCDNSsFeRogXAS94Lf8xTecst79"
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
