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
    "5x5VBM16F7cxnkmhPYwsSoYGT5heWo2Ym1NUccKWefzZSwnYPqz1HYvb2AC3hGWRruBZnGqtHw3jqp5LkvNT7Hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hdAbZe3QHoPsemQJpFB1W1pgc37jbfXn5B8JvSqCjEJMv5vTvbp1CQUcs1r9714vgJrFAsnobtKF5PzSwop3EmH",
  "key1": "5ou1S7PWNW61csYdYpMLTjHqqM5hY5EwWoF25nwZJTDLBUaToHDr35Wx6Mekkj1yt4CRMdDzQ8K2FU3LDyKd621c",
  "key2": "1H6H1pG1oauwJpcCDxcgqMjw9qXYqV9qV5TcTkLL3xnPGtaLRz9wiG6ARBHwyFBEt3FhYKg5qkWDm9ReC4sNjKR",
  "key3": "RpfCyBXK7WtaXZHYs8tnCv5NEnXdT99QDa2vTpG47FdNyjjFA5B6Gh2bJFLFmp32PrRZ9cr3bzYxJkxiKTibBoh",
  "key4": "4MmncYLUkAbJ5mYUgL5DkJP39vLd4WCMQ9rpLiVFQawt5eUwaCatVLmZYBtMj7XCwqKRrmNR6CTVAZWT2od1Kwqk",
  "key5": "skK8bPCoXRVenXwJEEtbUB54Fg9jvLp2NgrS5Jg3n1ixd3y89kZ15w9tk3YnjvUStk7ufi1JJLyAcnuqP7vfeek",
  "key6": "5QqVGvAcTq4z27NwBdVTPToXX2tSqkfxYxHJvcqz8JKxzg3G1NVKkwfmWUKVCi7ifL7rkPPFf5xbVqs95QLoasxn",
  "key7": "66KYQQN4kJzfUbXtucv8Cmb17CM6rwKLC363oyh2CDVAAdgJLoSYeeqTrJKcu3Djhv1Lc2gLt7e2uo936XfcgYVY",
  "key8": "43N7gBoCqqynsCzPZN5kH8kMYSwLoDwDa5uEW47e2CDVzYrZkn3qpdwjmg11wRDwmHJrxvS1rthrcr7GAWwBiZeF",
  "key9": "3LJ4VqCUvggQqjmu7xzwzprxPx8DrR7wNNcBPKuQbVgbbP6WBVNxSUZ4bLej2yVNx7T7eQ4vYK395A5tM32eWHbo",
  "key10": "3RN8C1rCY5DtGxnfgS9LWhByLXKq3rDqyzn3X62fnW9kinTyFsxGHJCVN4UzVKzQLrs5phbtMznxjgyzLVJGsc9t",
  "key11": "2HpGDs8aHE76F5LsHQ97892HNe2vc4fAQjnw1GPbu2S9Z8rFkUVifVWEJbZCbieMiQFh6s4H7CGtLHwZX1aHbc87",
  "key12": "4ZjdbtGMM3P68RtCALduvoUqob8SgpWTmyP9fWNV8EWozX2mBfYN94jFPHBeHhYiEhvHibg7VNv4mrGjcLhyWzu7",
  "key13": "5Cp3wRuc5YJ5k5Zncg3tkbzk9fEubZdmmXenPYGF3PQP5HD2sDQPAPwKLBRjqmEguJxhExZsuL1f5EzajorvhBbP",
  "key14": "43xz1Yqpvmb1gTwnQRxtoF96tFFbGJ8anKqa6hxpV7BmBReM9rTFGuhQfTkuHvAVGse7ogc6uCDGdJoFcKG12nb1",
  "key15": "aHsApvQSrD5R4YmRBAE8Ym52j1H1LMbTw8oZe9qqgwPzMep9JMKFNLfgUVjBVQfHChxsjxXHtmiXUgbE5pM2C5o",
  "key16": "4DKDTPtAwaRTKdb1NcJZHWPvp9TsmbHK7NcXZ4GpRNCzDTwq1xbe7HzzjQw8tcfC7sNHmRuGiq83foNM6ccZCWC2",
  "key17": "2v67RBnkEnQ1bcg26n6axvGBoU4fbxD6XEvpiDdm35cLP6UxcRXDX4PvyBdoA4AV2VRMDGuVWLRkikc1FCAEdehw",
  "key18": "5RE8gS9v5zj2H8taiCUkweiA3etwqJnSNamMi8ebBfm9WVf3SmP852yaHj6Gn1L3q54WswNkg2HgR2ygFb895pAc",
  "key19": "4kF7jN9MbkUgEP1pyewxrVSPtBQSaG2akt2R4eydWHrEuiEEKhC18CzGwmLLw1H3NvbPWjCK2ERovfM3gVBcxFQT",
  "key20": "3NqXsBzu5GMGGAhMnDPUuGua8XDAJGx1E49fbYubFTZbTBLxgXtgNFiMySBRXmqGTSkkqazkqmBFBKN7TQyRcyPn",
  "key21": "32SJ2iTPgDbi6fZuCu77a5M4b9CALmDNb6Aes2TEUyqLdamR56n6NsMBcRKy71aAz41Td41kWrxNsKciD4ZURL2C",
  "key22": "49Us8c5SEQiC4nWgTMcbeaSumCnfjmT5MDpbPhpakSYHRhZdxSgMofQeUzCsD43tToXp7aDft7sfwHR715YhtopG",
  "key23": "5qu2HCUqhNuG35Akpq4PZ8GX2VTDMQdj8E34gajQdrVFqjNjRRXFy6Txopan3sscfnNQGsJ3TJavUssHga9szraW",
  "key24": "2D5D3sbm3E48sVv2pidpv1biTWK2kKBANBv2CbXAGvpecpL11eQBTXp9tREEcN8YDC7DrruScoAwvt664GPZ36js",
  "key25": "4omKpBMXvThBtXnC9DoaK5DMT845t93xZVTEYEF5vEpcZqnFFUqedR3MoDmBPK4KRjQWQtynHLG14zLbJjfUL3jw",
  "key26": "33ibAfudVFUVCgueMgvwv74ru8ECwRkVtjfgkSianQfPEWCF8W8B83nnfhToG78V6xCkZ573o1DRUeCQQ3t3U7NH"
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
