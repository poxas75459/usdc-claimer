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
    "4APSWKD6pRdGx1sNFq2AgxnmqguTwDMwFeLwCxfATvzymkEjMKZECTFoVbRt48fxau5kPraCLNnusERwbu4WG5DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ERxr9N7v7ZTj2vgL4ShSJESZThtifvgCZEM2m1U1p6Jauz5ZJBsA7VCwrPcUnC1bnzZkYfiwTWTA6APBkgEwUec",
  "key1": "5FTeuz7rdh2NGmAAgLwz9jcvW3XuqF41g3XNZ3c2agv7fgVn1SXSBRZy6gz9J3gkhR4Yz9hqEnUUWZLf4Wk9VLt8",
  "key2": "4U9Wg3WpDrdH1uqKCCgLV71KX8DeHd8XfY4vWK4Pk4sCxzarAFvfF1dGoxsCuN2uUixX22hVA2L5f7WnicwwJcaM",
  "key3": "2tUY6h78bvedUHJYHySFxrQyVZ79PKwYoMcyCbtsNxRooVaQCgvnHsKEJNyjeTsP6UghdYdzU2n4JhfECujWaGrG",
  "key4": "25ztVQK3U7hBkxgkPXd22xv3vrMhuJ3tVtPofrsqJubSmHpPBYr821LZNsHPAj2o9aKqJ4WxGShkvS1cDtPguHG8",
  "key5": "51jnxLDAEz47NPCLHnVjFAzVnphzwn8ZWtg4hxnErFxYy1TAkTr7hBay74hobG1bz9LW7txaQq78vCPENua8xZmP",
  "key6": "3bJbbxETjpssSd5a3tHcjXJdJbkgChSZxHUL9F2bj9rFL2gTVQk9PXtdvkXmV3rtW1wN8cUCvUP4czqoAqn1cSxm",
  "key7": "2mQkpYxeqFfezN6qCiQr3H6kcmmcWWYAkSDEveGMXgWYvMq6mizDnehdfyZsSZbm6KguBHojbcXThz71696ZciK5",
  "key8": "ErecZBMH2HyFwxHgfUaxS3YSRSNAtdgDjKcCn17pgKX2ZxTXhK3yTp7wHSNf266L51fEijUDNSZnPM166mMQMPQ",
  "key9": "pp9aaZjNpRocdHgfCyQUKruj2YaGfHVNgEoFXSoFARpG9PGeP8RhfJh4abfXcBF2DmYxGJHoJmWyZzNxSEZj7KR",
  "key10": "ZsqHqJfjPTsvV3bti1GnoNNhGP5pFmi6UKKF42fngREkwneYYS1x22nS5Wy5xMH6JJ6tNY2UNwp3MNGAcwJtvnT",
  "key11": "3gk4V1XSXomM2SimgGcuWHi29Foa3h3KSVaGF9UdmegcRG24SdxVvd9vtuwmxRahGgZduMnFNzXE4ux32dwXbM9X",
  "key12": "GQF9ESmSZ3YR5VKph6GcgMM8b8qhKNzNhP2iHWMmgAqsvDTkuPTiZaJwjWciMmxRSDjtX5pnp9UgQTp8v6Af4iR",
  "key13": "63VEt8K5w3sF2o2MvF5dVpTPW5ucmkr7RUAJ3ANzeMKfPgHSz33yb6SmWyCwyaZbQTJDa8tGVHwypc7C38TALpP1",
  "key14": "4LfRwrWCGZLeTrExJsAyi1rb47g5Vgg2rGSt3gxrmhdKWm797BgimBXhfkPDqLYhqPZ4z77nVE8EvauwVntTchKV",
  "key15": "5sb5nqgZ7K141FwGzTFuxnWJdKHSiEvQHR3YMP4UMDmYQET9CeNYDc3JMaZQqdqK9VzwzR5YruMb74JaqHBEFW5X",
  "key16": "4bQXDmis3opPWwvwia3a2vJJERfEfYDyAbZYr4UKYe8mkDSNJQLY7b4dScixYx4ytQzWZRnNGwnHDA4HqaAcS3sx",
  "key17": "5cz5srKnDLmpcuQbxxCZMmUrCPQARyUPStmyseBsz5UwK92ASUSEzAQ44khjwUPjmwx8xKzUSEeiD9TnSpx1ZhWN",
  "key18": "3FR3qjFYyoZ2mEfvBccAVBJdPu16i6ZzVGrqH6KmHexqwQCE5L3r2F8iLLhDhUwQCfbGQF4yNMtLakx2RYa7xcH8",
  "key19": "65aFoogp8gLe6nVi39Q7BfP21RwFavfumhz9s5qsbaCnBLDwELfMexn2GVfHJpYmdTGcp2YxG66NwARoQJxWdmgF",
  "key20": "3XpsBwLm7efc6Gjyc6qL4PMvUaAE5rA7FVCw44Nng5vkF92qdPa7h9wvHqA4YYWcMpin1qewo5FiNgDEyi1WsY6C",
  "key21": "54G2wd1t4Mf3qUmyKTcshQw9jkyzNJ3KjgaAieqxH89LyEL3NwVXE5hXQKh1P19cqPsBVSN5PcdRQsLbgBw5oFfn",
  "key22": "4pwWGuB9gmcA3JkSByveqXgKExETRfoaBmZ2SbkJRjePJjWtGfMGMd87jf31aRB7V3bsbE9R6sFqEG32yRk2Z7Dj",
  "key23": "4Uhb6zSDLuznxDfBdmmyNp1nZY65sCE4KDACKSMiXkW3nf1cjsTWHtFAMQCa4yYsK8pYFk335Z6smhiN2QNXEnGN",
  "key24": "2U8cFocUurwM36rg66pFhiSKyd3sxkiVohbWbjng8pvBUx4Mx6yak5ahqTyRa2rQpMs5189NkGi8TTZfWDDgnBBY",
  "key25": "4ukERENuNH9Bn9119TG54dqNaiy66bv6q3Sixk9tZjVrDVSDBz7N6BrDSpQu3EshbRHtYbE5yrbwYCidvfxv5jHE",
  "key26": "5oEucWgVRTtK6DjQmTZcbFENUUi4qGG4dQH5uyzkCtn8Zqe8XiLsCtnKtwggKi9JiZ7F6YCYJZtSZZxqeJbyZx5a",
  "key27": "3kQZ1Zk2MheFuqQY96ztvz2DyoxLqQkBYSEASCrnfqhiotDXuoRTubPM9idrtaoN4AacEwsRGNjpY39h5c9HyFSa",
  "key28": "5kLJBBdjSCaaYZdKWWjkEYF2qX6QRDaswWPpYrcnyUJn2ccawHsoJBmpazn35oG6YGYuuvdLqgTRCMHCVdaMnXbW",
  "key29": "34dvnqD8PnJiucUSXndccGwYzncWEyWSTvrTN3K9EBSCaxbs9bthP1k6aLiyr6GCHEw5TgVSW9Ntuw8YVqiKmv6U",
  "key30": "HP4hwZwCKkh3cNw4dBoCFYCaZ9CQ5RraREp5MWvQr9XpeXCw8t3ZLvhvz8m2pjGhAv3hCDa8S8bm4jGS3SqAyWT",
  "key31": "2mpbuV7FMtpZY5oivJHqTvgiySwyXM2421SQfmN52cHABzuq6o9KePCH3JrGooVZKbExsTa28iZgahdJ7GC5jXTr",
  "key32": "3UzjyASgCWJisXpFv5LU3NZCT9WTuwdKgbxuD6hqykkPuhGiZaANqQTTxtTBUGyGUh9UapStTXMsXZjpDbuZu2HT",
  "key33": "27y9WVvx7bFSP2w4739KiRTSuDroRg2jnh8NKZNopMKmsRkc44Xm5NgADWnDGwjHQm4prcM8JF5dvZeDLXd4Nb2M",
  "key34": "4XJBAQ1P1PCyWRzp354pz7LCsKk8ZrR8HSpZjDeTWa6K3EYgKVQGQWo7TFSD5qBNq7touZxMpGWVwJnmRia3uKtg",
  "key35": "3QMvikzLxNy7DXENm7jAzZZhJneFiojsFHdNGaQ2yhyWgm3nJ852cbvsPMsTkAJWkb1i7WecWm9wPkhS5Bkp57zw",
  "key36": "2AX11PTEHaZuqhsATEhodMJFo3dF3yoyUka4Mp2DMwPfN4kCDZe67M5n3s7cFYbftv5i88tCMGLWTVqktdwfF7zo",
  "key37": "3KE9GG1dJtK4MMY3pBJp8ceH7HV6SC3958eGELVLB1QVzcLNFbPmafzdnRoSvzbPL2jupGGdkMivkQRJ59qRgFNy",
  "key38": "47EhfmrVPvWTAmhT7xL1A7yMRFLBeqqHfJxoAaxhMLBLziFCzCaV48iwLsaX4NQKYRzzg6wj9i7z827pk7vvY95Q",
  "key39": "5LwG9bQy1tnT2U3cBYfCscqRDosJSys8d4xYdKjUPKJv9HAqvguhvCpDxvj3PH1UuPHTM62FskvZuD7vAkxi2FNQ",
  "key40": "XwNW8m6H71DevtZNsCRNZFy7d7d8KjmJ9efUbfdSfn88cZSPWQ1RN4xiKprqP7zRK4WnaEtvAyYQQSm3MmpJ2C8",
  "key41": "3ucMsZyPrdCaAiUcCnYASXyCboxz4KNfSFoujHYCK7ESgXkYqfxiWzoZJ8TcKMSKQbuAmK6mHqvcrqGAdfeGp9Aw",
  "key42": "5WQdSReRHCxBqAWX7cewKQNL2QjwPpANEpBQa5W58pVk8d5sjASUx5q6uERRHoUXL5ynUijVGbYz63GdaaiG8W8E",
  "key43": "32cUd234fZv2DkaHAj48ntgx9BsvX7hisJuNeug3cQc9VGBoQdGBRgVUBeXmBgfRBuvYRUrMXKjYHudX3Fn8WSJM"
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
