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
    "4KFkEAbEWEHL4m7cLDWpHH4sByJGwmnSsqQPBvsy9Pqu28FghCZW6RjrWf5qNDf28b6Dzwo9cENtKBzCqLusXTXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gHFE8omK6KW5Lkf4DcPdrJNoC99Me5LSqbthVdaT4T4VpkghxCSTRVxRB6eTxp6yMkLvxkEPUUAXW3gnMDV5mPU",
  "key1": "3NMMLm1DMwGmh6J94JiXZ1a77Pg97BHjH9nnU6WJi11DG8vz6F6o7s97kR5ng5yTwaARXAUESeEpevXcPbrHaPUG",
  "key2": "2QsUcH9ncmrVgaGLqPuWAeaYQ1pmNMqcQ8xAhabAyvDpi1eGAM6MwaT8xypVKbte78diV3UYqXHYwLt23sciJU1Z",
  "key3": "MCHXW5SMm3s6c6FTGC4GLT33mvLkjaw5MXNhtjRnfcm4HJxesfiuYr5kLgaBvJNDffNHcxCYjnGR5jNqBNkYS9D",
  "key4": "57uRHkJG764sGT5tTHWs3NextFhevW1UimbPpASkK5WcKCtFSCiQDe54TQZsA19jWxdbq96s2oYUwZ6kuPhFYxYy",
  "key5": "5kLMubtzGuioee9im3PbbAt4gVnisnZFVpAekVvadcPsTVG4NVTWPGXK8jkVsukVAyke3z4TZAHdCZFhWxq1Xwwc",
  "key6": "3vYawaFJtrY8MDaFyokinMT7KAuG4VnsRBE2Zeh5rn3f46L3F9zjqHbAJceZ9swKU6VGSebR1AJCJN6dffLWsBa7",
  "key7": "z3SX5DZeXMefJUwocmrbZwWtApz3hkPzeCjDNEE2He6yTBVgQm5qj8VKUTri2z2xyc2yyKcsZNj9w9RFbW6dgDR",
  "key8": "45DL6ESMfWEe7DvM6Hv1axGFpqckJnbARp8pzRsQGYmyxHPJvs5jziddrkSgAqYhLC8waN8qKyR4YaJvKKrpuHMW",
  "key9": "29XRjaThZKJnumNCxYFeHRfa9wDUf3Uoxh97KUPuzgiKfcfWTudV2pe5UzhWDcFznAad3bnbqwNjidRcedsy4khZ",
  "key10": "24rNkdosRGQJcRLzDHXpX6tv7qRLyKVmaorMnnMsBr4E6Z3SCMQNSmMnnSzaL4eRUFXpR2Jyuir62x5968SA2UmK",
  "key11": "3U9zrXiaxTsNrTUGDuJQtc5k8UpFFBJMkRbXStWtznXnLi8HfTFqZf5qf2JavA9fQKSLqpoFYbq11tfsSHeHGHgs",
  "key12": "32nmzxLQHqFVVKvAHqJCpcnEXjYLtJNN4qqUUs6NyGbwbJb3gFNumuQefbXz2Z1kKPeDG5d5bTjGEgbBkUH6x3P5",
  "key13": "2rtSwdYjoSmhwdkopP6LoCbuJnoeKJXZARmc7gHiuXjsSYwh2m2TuvpXGtQPiCrXtfwrzu3sNsuKy9ChkDCiMs9L",
  "key14": "4FpBViPn5TFyf8paTxTkcpuBayiTUNMwk1gEV2nPFMDTPYcXsq1kWcDA1rejfL8dh1havd5n7UyQn1yTzAxtsTSc",
  "key15": "3D6D6oWuMhuPmSCCT6csLoXnUy18Ww95tTuSNHqPRswW5wbDxHoaNgWTRrgfHPQzH6rQ3iVfhdhUmVJBbT3F6Tgp",
  "key16": "5dcnotfSLdJuFHf8wytYt3s9juqganyNGCmVqtFJEMsKWn1DY6jT5FZpMtcSkgX4SakvtwWs6VwEhDikYRHyRc94",
  "key17": "5N9ANSkvjGBhTqyh2iHvmfa3U9j3wDbrmGQ5r37ngnar87hMtc1EMPmfAsgfChiov98HaLRHFRR18TqmDhFV6UQx",
  "key18": "4T9nct5eaGhKKnuYm1S2igNrpsnxhPbvu6v1WU3XmZiqcJ1J1imE9pfcosxn1ty6EGKp5mtXLGaSx6g1LnAu5TGj",
  "key19": "4HBuZGen8HFyUZwUKGMqrBGmZxSiF9P1sLFwAUeGjT8abU6h92H75PG9SqJHB5ZzLswmkAKs2SAQCwbzQECMRrPf",
  "key20": "5hds5oCVkZitatGb1tjGVnref3kq3zjkShjyZgcHQPeaZkWqnDSZpf4KXSkTw5bCSv2bGk6F1zu2V7GvUtsgDhKh",
  "key21": "21AphFbhcJX6Vq65z5qHnwGpupEY2R9qmQVifLj4no4UZojL999pFeqcJzPb7UbC9J5PvWP6ngjc5PjBcZL5P4tA",
  "key22": "LcP9JfbHCDsgN8hua4ap9YezwDzUDPswJAmZbqT6uFHDw63b2FPGhGi7sVKJaj1wChysnUa8tuVu5g41FMLWPxp",
  "key23": "4rKqMuTxhx2PZeGjndwTJDuVDnx5HwhMLEDM3CbcFMadByZYLM5XmxoQMYvjYKx4699m1Wboq6V8F8UwVQknrsU3",
  "key24": "2TPRsQdrjK8XY5CdPCYeoe6J8VpdKrL86oA9QhjGTFzYaoshEVujPnwWiYPBhd35e7nCme6fJQqGgjbWrgRAupRK",
  "key25": "2ajJrJHxtsp4vkhT95md3N5xG5Tm6AVj6dFbSodH9qoeL7PxaLvR38EoyADbfwrT1qayczWgRVEv427yAyJgT3i9",
  "key26": "3y9WHwK9qxzgq9qngCC1HZmxvwMU2AXYwBxrTgUjiiEXzirNW4hx5y21fbww4bTpo7sjNdZEMWrUYsCt1wMpPUJs",
  "key27": "5s22t1LkaNm7HVfJA6Q2ViFB8otihWamoadWPGwiZneVBzbkBrw3bq545zdVx74jBAayxXSnWtxWShnnJMUdWjYU",
  "key28": "S969WEMKj5xibAEgKjDdAnGG9Zv4mGqCsEzyTHbLSu6oRz5PBZhggCGisRMDGRFDCFEyMcANMSiY3GNQJ23UUJk",
  "key29": "5b8gHPUNk77tj1yHNmDFsPqcbKv4BsgnCtUuBnDz2Wh8hnNGhtVHv6iUworiFuXz5P9W1pUGnvwPvyioGHwi69xo",
  "key30": "3RkoNBJaFXzkqkejSaxWmiw48phWciL1fvHDw5A7m7CJVCrTtd8TUiQcHk4JMuCVeCqQFEmJTMnUVZsRstWqcJe7",
  "key31": "4Y3poq3VsJnWTavks9EcAaamvT1G24D83NpRhmkrfMTv6b5vVmD7WUULqxNj4VWPzG6tFsdpmVgsLFoXJfuridmC"
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
