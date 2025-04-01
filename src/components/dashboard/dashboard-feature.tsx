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
    "2KydmvpKhdodYYy2r9F6cUeVkhg6XLrYQQQZB7Ba3yCy2SEqgcgv9tHawjBde9ng5SMTk6Phhjy86Qi3dWZybHcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDmxECVgu3vNgqeHxuazWyL6B88KrSNPkyvsKjPPdFjiF8CcW4qizwKiGASL3p6HRvArERk17jkvvGZJSJtgdBJ",
  "key1": "2MZi9f7NKeXh4pwAYnq3HmyBgaWewtUx2nHbnLLSDZDaJnEpzbV8GPdLJzmqT3EHV4GoMcgAFHsJutNpD885frXW",
  "key2": "4cQBYNh1hrqLeZCPwB61DWZR23McBob5WZu3BsaBxprDjiydTsDR3HnZvC7mibvwiUKBmNvEjE6ms7Yz5yogrtSk",
  "key3": "dyHLfUqPXxTYGFSdhUMyUAoMycrazEGEqVPuAjwjxYiUnWUhwHASF73aUEc9d4LAinc3b4Y5RbKtzgzmChg7Xta",
  "key4": "2SguMAGzz3fDmEZ5RgHSiqvR7D2uBpN8HqfyroEtJuZme67KMHsye1FGzssnmQLA5AQyyYHc4CFH4S3ad6f6sBQz",
  "key5": "5QjuLD5ssRhxSJu8ejNdVNqdnyaaCGcsYE1SNDHCdSvAb7UVeZEEbEbVBn3XUhSGsPukuWRAKJjeCav2nemocQrm",
  "key6": "3MjTtmsr8rTzLXJm5Mqmp5N6N8QgV5HsodUi6K2BeT6bwnJNCQpnaXhkp8Aj2QeJgjjnBBzcca8HQ2CtK2BzXNZa",
  "key7": "2Ja1Rc4BXpLHT9BQpT12NRmD6G8UgFHsqjWG8f51oYBMyxT4vDGjsz5iRtmKqHp2rN6EgSbN1gC2HQ1iYZzxFBSw",
  "key8": "3jjHtCwejXsXixhFxfVpmUrBoomDuBSy4zvCEgaRSE64umRZ113wYB4SeuhYxZD5eBGtr7Y6kzpFWzCKHF4bnwpu",
  "key9": "27U1Vowojmp4svRxQwWjSz6zghoDJsdwyoRhvVa2UKF2YXnSjSwRjKruKP4moS2HvtAmBQRzusmJGA7MQBLwnovg",
  "key10": "465RCZ6zmzLkGbKefL7Jd9RFNhtMHDVyA8Q7ZXjavm4mrC5UrsLVeukfyGB5iYvPRw3i2sJh93NQjuAft2QXfGM",
  "key11": "4XSKWb5fFag55pqCWNevANR9eQL19K1TbKXV5Dj2wbM2EhYxQF3cpQ3nTnbBDpYDmARmqpeE6hoGxfQZREVv1Xxb",
  "key12": "2RqiMZmBP4ebUzy9wvoCFXS3pMz18R6mukW2x3KLdtXpRPcSvqAJ6Ls9CxvD3P95QHn68Xb5YjQynMehqeAYHKgZ",
  "key13": "2G6yN6J19v1iV4u8MR6aSw1tTDFGR3cDnKs2UjBme3M1XHzQkmAAGtEoPsT5yc25A79dow1FrT9vR9sT8QND2nNa",
  "key14": "2NzW5vA2jnHgdqwMQTmymUFooXbu3W7biUeULDrbkAcpuH8mxkfzd1RFgPvtorSmh2q1MS4fipgpSpeVTgimUuyW",
  "key15": "48hU5MRbjUajwWayLEFcUuDExytM5QXHXYjT6ohEhRNEVSgP26Z8oj9gSbDuyS6tNKtCuNGBcaobp1Y8xVL9XifL",
  "key16": "29XXxR93ysU4jHg6WfddACbC4vE31M5b8W47TR8c1npFvZ7Xy4W733zUjxDe7Sut4hg8zGZTrHdeRcKTe26BmJqr",
  "key17": "u4EhG6dF17TT1cB4Rc3tva7ig4Ecs4dEYjpHTuxbCYfjGvSaQhrqdiysXDfreYDx7KLhjS7GGXrDek4vP45ZJUt",
  "key18": "3jKYvSu5yZaKvpzK19v1TN6AuQSkM4zz6xZ46EbtcRaq77m4wNesfGXybuYoRQ8LULLbwpjZXRhwCMTCPscYDRJY",
  "key19": "2a6euv5Bo2rGmmNrN4rdFm8PjLx6nRdRisQ5CLQUnviRJjZV66sKYyDJ5LCkpAumV8joKnCQpLWEuB8QJEP7Sdqt",
  "key20": "5KbpAxqawMZCCo2U8M6RQqVwRxfDpQxqJAk1mdSG8L9ZQqkV3LSe1qv5bDZkfSkwCeCZFfa3SzNojypU9RvaVBSG",
  "key21": "2WotG39FV64A7PnJpxgcwwrzAHn2kZNfme8vTuADLAnobapztyKfoomYQhErCNJbYbuJubqjAcqojJoKvxU7Mb8Z",
  "key22": "22UtSLXpvhcMdpM5FUpBQNf1spbakXjUKCWvmu39F61iRJpBJQMSDm3Yj25s44u3P5fJCp9DvpxrPPq9DxMdRUqZ",
  "key23": "4ATDwjYNGz7a3g34n8oBHKrEJofY9HzFwj8TEmP4FSYNZ6Fnv2SHTvt8AEXQqbDw4UKcsSKdKavjy9codjRvaDNg",
  "key24": "5sL5M2CAaZCgEY6K8zjJ5nQ4Zq6pNm3b6LNriKedeuPYH9Qc8k1KWa27aEarfuC36agp64UL9VhU2CqF91RSBfir",
  "key25": "4Lk5tgZ2PE4t3PM1swqWQCMwAEx6WNBSX4pkgX6qHCavWChiZ3Pt4foSRVALR9GJZb2HiwL2gidPnXs6yf2fLm3c",
  "key26": "5Nbwqa4kS5TbwpFaiupkxQqjAXxYf8d7yNXfVQTXicXVZw8HCkvNrXeFKHH7NMjGrdjvf4bMNTSdGVJL3VxXGUgy",
  "key27": "3uusCGiziGV3m4RFdthrnJ2Tr9WR2tkrRzbDUpxV2kWVDrj11VH6ueDnMHqCZqSJMtoUsVBmQcsEn1CdtXkbVJzz"
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
