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
    "5QTTj5zGWy8sUF9KKtdxXzVgSKWRaSyJbAmrbv2ThjfTRrTWdcS5MKhaTgSf8pHvK3YsSf9Kz7yLq7tV9dXyqgxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hBdocpu2rK6QBETBgdMiTbFyabSVfbN8Pr71KWhiWxuq7fQGSpN45Vudf4zfYRpCpaH9QT7vSKco1yT6rpbposz",
  "key1": "2YgsTrAvh7c9vFLRkEzN38AV465g4cywremN1fQaK2ftBjj2r3moXBaaxn2BE7B7cA3qBnW6sBuTEwuGF6MTEC9b",
  "key2": "31WFmRkwgjFpxnWqV7FcQQEPZdojokTHSmmMW43eHcfRXMnSGZdbUFiuwHT76fAhEWsXJbZ5Yt4EDVLWQP9VqYT1",
  "key3": "5M4P58METgw8S59xLPyu528V3LwDmN5K3dApMjnTkH8w2scSbAgsZ7UaWcDQgE7gMFdyaTo2C5apVNzfW3C2iR7x",
  "key4": "2bWHdQ9iLcpShijwofk3J3Wwi8Aoy5oeDAMVowYYqB8bv396T9EZLWWhT1RJ7rni72W8ZUA18J2mHmntx3xhmB9i",
  "key5": "38pT67cN2E4H8pQiFwGUswWPVcsZByWE2NqUKQv9U6gUmwJVjfJToR1ik5iBDnPQfVVadpYPSnwb7JUh4a2YPa9C",
  "key6": "23aucfhcDvRy1x2PrvVnGa9bZGtciggPseoaYMxNyaCNfupjUnaEMfPKr38Mtn2kw9E6MzWAxZERh24A8Q1ydsnt",
  "key7": "66pEmgWJvrPjiJHA75WJUDbmbnbPnL2KKTyrtHFJMhMBnJqUvnPQ1C9uWByPmiPkoDf1S6HyMzoc49hTjXK44zoa",
  "key8": "4XqWFV1TWAzyABmWYR8pSxBFdXMeLu2HNY9fxT8hG7yVm3nVx9PLNsV1Ps57yEThamreCwVLtA5RLXMem2bYqDLW",
  "key9": "428YLksMk1jRNxYW1T3WmU4WxqxNJ9RhEgLDocNuoB5R7edSCiW4MB8WS4esKiigdvA3fdP62vp1mK2BgrQ7PjQ3",
  "key10": "3ZXLBQSh9g7PGnTWw268J239pq2dU9e8CrR6Xt8BHLYba2NtenAPgTqPvtDbJqow6JrABtBNAhPDaCL4rKsgR6WA",
  "key11": "5FNgTpNez6fH4p3rfpFuP3czD1ZLwmWMA3ZGckrVFUVRA6dhG3fHvemJubWB43EPz4MUKVtYRh7TM86Doxry67r7",
  "key12": "5zqmh2SayABEwXnqjzqMbTjGPvjDpNQv5ZibLcYGFL6Tia86YGoAS2ywTAJT4dUx2XvCHr5CxTkzErCL6uoCd8Ab",
  "key13": "4ZY47SACZi7iE5HAkTEY27TdGyHKwqWXwrJqAGLzGAJUcH2iatswkrTbm3oJ6WY6U7ERReNixeoeApD6rYhCeteB",
  "key14": "4RtxGXtLBV3ARPSwbB15uLwTarfWXzMoMMgxhFHEgG5FenPzttJNVy4snX9PvhFaNejRkr89K9kFQZXmtuXuMB9B",
  "key15": "4u6Zi3X62CXEdix6q3UqJJVZnFUiyeuEPb4HbL9gS4B6KxoymgnU3brmmeMxRu7BrHCpBJ5kqbzesE7bR59cWpf9",
  "key16": "5P2cFuWwAG7DFxsyzyJqPJqhDoZ1XM5FQzvV83vzbqgRxHC83acRnmjGEvMWDdZ3T9FQVkjLon8egJyYCiHLtZ2H",
  "key17": "5CgazwPwnY3W1jhdqoQVr4JgaekpoEqyadi2rUfuCUkMvpABZ7qnnQ7zWzJ8YNUxWDyhMse6UFDWAhp8ritmsfyP",
  "key18": "pMs956McVgHocb5yYmRzBe8PSg1H2mUc81kdhJqkUufUdXKGca1Po2bRALieU2bTfCy3JmMN6uPhLyZyX1Y6NA5",
  "key19": "4Bg3yfLhQ72auricjAyP6p6fw34tTjWqEkcYZbysden86wH8EZDZ51D7LZ43bJM1Cq8bZR7L4Tm2yV3Wva9owBBP",
  "key20": "oS8H5GCRWfzKzcHHZkNH3YGsboavKeJerUC4y4rcdMZzd4NzG2kbSU7UQnspiWA7Rni2EtuaZWPq6AQB2pMLsMv",
  "key21": "2tKBHVWr3igEC91A1qr2aCQDKwTkG9DXbyRXGNd23VU5sk3uoA1MaEn3W2StrmGr9gHZ8gxH2WhL6ha2zbVDuZ9L",
  "key22": "52ijSSFrWicB38ZNbGQW9R3FFwY9RJ81LDfficxtEzJJtfH6YnUbFHcERTK7D2Keh3B5mMa8USuuXpTXUt7NqeGe",
  "key23": "cMTibtyJ2KxtWH38FsPkPCKU6gtmCnURWuFcgasHvqwCFt2ftLCANhVmpryce2zgjbhpJCNiQhUustpuDorXrWe",
  "key24": "34LGKyJHHfauFf2nfUpzMsN9XWpgSCU9RvcmVsv8BgRu7KHEmb4c3K1c9DkxCEjqGjHRewbX1bTa8zYMLWrwCy4v",
  "key25": "D4iAwzmbxbWBGcSDCjKSi74X6w8v765HeLTtN2WWJHBAYZDipsnpzxw933beLtb37ZcjVi1mfyAnjFqZkbq2vRG",
  "key26": "51Jq4sNemRBdeNwvMcNaoBTzF1uBqy8SwZPCn4FfCQPqQSEa8RMdqcBLbrdcGc8faMdTtNdTHLK9WE2HuV8cGpVP",
  "key27": "3KayMebLqFv7HXXdnLznbEoZceAJzd1KsggtAZRmaxpyJ2JNdfCcChvEdxTL7HWjDtCBBVvhRDN4ihY8vAGyHpY2",
  "key28": "22LLjryyw3C9z11Nvs82U6KYUZDfC73T2WNRDfFoSxtw4zmcvwXJwfaLzzVZzRz73z2ftgpwwhXgdr8GW6YkBEnx",
  "key29": "3pniLdVJ7M8CBQSPqSYfr2CKcJxJtY5KNscVFmNNaZZ3FBDEufgqDs4e48dQFkaeuDZo65oGAbepKjZh1FrJ3Sqn",
  "key30": "GDWsVyxkkRJUhjnvvCJesBsVXVYB2Uian52DJ8CXwfrQcJviU2z8T8bSRV1fxLmrNjCEFKwbe3Xa1WcLnAZipRT",
  "key31": "42ybexu1JU9ENWTGPy48PExrXmuWx2UNT88svnFA433Y31W6YWH63ivYiCG1a7My8saSjoDxgU94UJTekQNTkzq8",
  "key32": "5Zz1d9BFBaJ3LfsZTuLRf8Cxf2ynYbLnRSEitshdvdRHrFmBPaHhu5CtYKc4a1JdQ7JCDVi9PSjTLyWBM2VcQxrv",
  "key33": "2D2Z2HVknYfyqz2B3xepSLW43FtxzTnbA97zC5RS1N42K56oG3bmTmFxhAr2au7AUjipPe73xPdBrGvta5nHZDVa",
  "key34": "9CNVPdSdP6roayLW9G5gThY1sWrrDAdzBENLupciuRv9mJurNwoZKucNt2oS9CNsMdBTubdqqGzTyFo85CaP8ai",
  "key35": "4PdCwzirE5CjDoKtpLCzP8pcK5z4hLshHAMmF7KMgAEtPUXBNb8xTAjLgSAMaybsCxNDsZkLzPdFFWgjMMEJHe1b",
  "key36": "2LUMm4iCjiE1dnrKheiVqXQKSG4ukWJF4Mkor3MeXFfy66YAf7VgRYMESndYygmsikWwvSFJJj8A2vghDgjFPmy",
  "key37": "sNoJRi25d2X7WMYGqukr9NTgoqsBs2wnqtfqo43jZLn7KZhoBCXMcZtuNPaM2KE8kUNRM9eMUqvSnV6t6WMPdKQ"
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
