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
    "2N7uEqXnwDm811PoJbQAKE7eUfz8yuYeycmCjX3TFu9N8EpvZJ28dsZYZ5D9Nv21sufYBktXxRLG6UVr4s2v3dXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rvq2PdJnoGbsTK47W4YLuWJ4P42QWMh1fDcxugTr7DAs2UJ9X8hZXLdF5FYi5V75um5kaAvnBQURC8g9fyJmQ3T",
  "key1": "nnQgGxjekNEaDtYp69hNYne32zMfrDj1hYDka2d7bFjoppxj3fMZt1d3v8nDfwFRUekyddoboeVHbKp2XSDH7Ac",
  "key2": "2ngmjYDtxxSjgqb6DEYCk8sgfrraae5XhXb9Lim6pskNezjFNSDNS8B6Rn67vg5wa4aiebRQJgGdrQME7XdjM4J1",
  "key3": "3tRPiSofGEw9ya5dPMPYoVQro7hk2vbaZwS23J3H8cggLE8ufe8AjAmkDcJyVQyq28EVavC9WoZtFVkwKrPT32fJ",
  "key4": "FBiaQd7rUFpWawPb99qbFJMP5xzBamfN3p4iv5GB2rdQbXc8j3aaFD1t7EH4mq2Sm4kkAJMd2vvZ7FbctEsrnPD",
  "key5": "FqkUWPPTpg1fhxZDC1xjVkkCTRCDdjCd9hg5QGgRYR5wwTdEEm4MbxrU78maPGMskiNoVcPJ16SrEGxLHHsZqh8",
  "key6": "2AiSqy87h1voknsyEBSGbnY9LixS51HK4S9Z2xqdhkjEs5JszM6vGNKdaRT6rJ6GBV1gVKvfXr7cTbtGTRdFTnDb",
  "key7": "mGzwHWz3DkhDbbQnpkHbG4bZ3mbCBCC7aENzr9gUh23JcJf7P1SXErxRuDwnGL8pdW8v2LmFZmnJvTK3Um99qtb",
  "key8": "5duAYD5GRXW9rjht81RJAmseCu9aNxnL3qTpfZZrxtZGWtWvcrUX3mdSbc4ZZEbp2QtJfCBNPuzYnkE788rgWu3",
  "key9": "553LAAYqKFD4EXLKXztjTKHXQGPM7g5wuxVnubDS9wGP8uXwfYtRisgQKf9XttvLVZusT9qEDbaKZ8rhrWnCZtMd",
  "key10": "29pyQDQtj6cZpqcqZReWXKFUctM63dWofQEmU8KNgh5RjhvFd3JXSu7fRS1bY7gmcR7gqaH8b4iq3S2KZsX65NPT",
  "key11": "4mgNV19CBLCKs66xJPUPKpxibM3pyvH9tFNfYhfnsK8Bg2NfKVFs36wXQMB6o5RGFfSAfqu8VVCCSzfZoPcnrfyJ",
  "key12": "44Q9BDxocBnpWCm5QofmpfVaD3EsGipMTeyLUAvV7se85QS9E6otTWn1giZ6RwuZLRPTK33E6nxk6ByCscWHKTHe",
  "key13": "2Fz1et2nFjhUKa5dbm9pMdARVJvMqWp2sJgnhSSj7jFNwZftFyCzpnjy8AunvT51AXnCbUhE12abx9BtH8RUdSSX",
  "key14": "4QSNU6mZ8muZ7ddzHksnYn5QR2Sa11MuDiEA9MS8Wu2bgsFLC6A1LSrpFP2DgAnWuqPNY7HDAZF7834RYCrzQXz5",
  "key15": "2sPUFguVtwgV7fvrcUfAjojkoL1ZKXyat5SwpwoP1FZmVfWphfKpvvQMfg39tHKBUX9Q6LyxBWTjdJX8pNFn61uV",
  "key16": "4sQLzaG4mJQi35Q4FeeVm2k1eYnFcMfm5H9TahmR9YWFHKUUgfbURjZ44dHQVuQijiShEGfGX1Wi2vuJqtxoYZbK",
  "key17": "2fSkvbt9oYERFLzRsVrFwqVwGaCJBRR26ZFj8bo1QpjzaB59WKfKPrH4JT3sgtNJke1DEUKvdM9i4eiz9bSfjmbU",
  "key18": "3zaV2Q6MCEUqisaBMdu3KoUQHSSNaX39cSePUSCxdYugp9unhvpTZCnS8fYx2mqTQNKXtUSQDABTrsvNeGdhzL3s",
  "key19": "57CcjQV3fj87iqhqpftojoe1TXc2BBTmYDhA9J1CXj7X3CkM6FkFjKR7HNGyZSXsHL1Dz7uo9vKHrQ78zzNhRw2g",
  "key20": "59jtYBi1Lm9tzyFbG1CJTPf6Jk6sTTHydps8cVvgYBYGjuWBEf7mcFs2X53SbV6FW8vmdQuurLRnH9vTfiypBv1U",
  "key21": "5bAcrjFTCbWsAHi1mr6SpKUXN5KuGAmxBjYZRHJDKuBzCUnE5DFynduuowsRbXnkV6iZKs2bbSE3wgj2xJ8h1KpB",
  "key22": "2gGiVLuDWfiRAUeeSb5Mf17ab7KwiHq2pPYN4pof5LB7SbKwoXWkAdxZkjQXq845BtxAjehxA5thiJY7EoJvQTph",
  "key23": "t5QT2sHjdyPq4k7DGSZ9nSTSt2QRSXwwkswkNLAsFZR2zWcnBx51szcrQqTb2N3wCMEkoPbnoQQG36hxYzFarGk",
  "key24": "37iTA9GctP2cxnegGQkNhWJtshU5crsPZa2NUUPfSQ4spseatMvZSb5ErNkFPFJgQgQjEjFxHU7VZbnpqfhPZ2My",
  "key25": "4odJUhfg96xGs26eoFzhPV3Eyv3MsHuqmSQyqQh8abRy38YA8iXPrikeMo7NzoHgQkdcbMoutsfHSsjG9igp68mr",
  "key26": "5Zg5RaMPnP3SefbSpDLrzMBWuXkWWhEHCA3bDBhUzDNch3atqqLhpkHqbW7H3h37mHr2TdWFRCoWEkg7WWQwP5DT",
  "key27": "578d5UC93Ue7MHgJsTudYRD2KZq4cFq7mYfKdK8tBBMx5NEhNyUyvvdFKjLVdf7SaAtjK5nXSWxxG6wTKAE5UTyG",
  "key28": "2rmK8K4mQHE1MZSi2V4vm555srtzn8mQy3w7e1BHkn7PQ6KgtuGVy2Nai5AWjYjJNipQHVFnbwyWnf5zA1hGFDiQ",
  "key29": "2Xwfed6K7Hn3Ex5srA5YjUAJ6Rk1uH7Up9YPZ6bNmRbj7q2SUt2PsY3XqNbjypxSHs12w1yVw7W5PLgC9qisvy5E",
  "key30": "2Tpmb5rTA7JC7qDTTrKTmvjqHHrJbT3Qx5RFCEBGsJKaEXPXcNwjhCiFZHVifH93XXZLrvBpp7Uc66zyzfx9WyFR",
  "key31": "8DLvYKp2APjN6PHsjR8MmTS39WTiuzqVcHehxxAQe8HL9GFnu2GPqTgV3dExTwCTWL63f34J2f5MgQiAbC8fw35",
  "key32": "55rrd9L4NekjJv4YVYEpKNRdLhwzGDiEyzxtiANUZGv9dmBNLnLfjgvTpvYQ6emQch45CwhmyyyQRbDsqzmYeYcD",
  "key33": "3HB3ZcCGAxGDdPFp4uKZmV5Rc7bstWyQFwkzp2k2EB6QiBQsaFsCsvDs8EHsqJdR28gPJnM57nWFiiKUcYQUQLqs",
  "key34": "4NybocSnSJH5mPXdhpeZ2yyMA4XMnJNdgTNm3WybeaXP59XtcyKh8XWRauqrku1JBndCBvzXzUcMGEnEHvdAdyaZ",
  "key35": "2osPFJQZbqZWb3iAexULDmXc1YPVD4cwvNB358JKtyqxVTEk5yeHZ1DnaEZ8aSXCBHZxjUFEuW8VM3agLwWiGfDK"
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
