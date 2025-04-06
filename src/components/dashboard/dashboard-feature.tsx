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
    "3wX5YRhxybci9vBVZ5MqSjpum5QHTgMRN3BnGkQCFwBBBMnvNchiZkCn3uKXDs45rPU1eWY1G4jXGXWHs6ts9vNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzSQmYWStaK1HZZeK9mSTsXmkC5vTaZZtM5dB7PwHJahz2EmWHaZfXgeVpyCSUTbfrYZst8VtmeRXbLCrBFoFKx",
  "key1": "67JSywcsSAW82ZJt6PX8aiqSF6knCy2DyXpURoBMxHBVzNk4f9Ea3Mq6kZbTvqHMQCgncEecD3sdx2F8ckARt68x",
  "key2": "cu9xKb4W7Ji4SngpjPCKLV9Vmt34j2De1hZ2RiC3VEHNd3Jev5ByZmrqwpBECwrjpw6dnBqjPPefNHoi1fHWJwT",
  "key3": "3CiQv34A4QvznN3VqanLNLgJqSaA3GKA8bMCreCBK5rayic5rzvMLCBgELYsFA52ACGznXzreybSN59BhdBGQype",
  "key4": "2m7JvmvQEEs71rEweMWZkLvfJ4mTaKB4M89BaJJ4BwRhnaW9b4A1wkwf4Tkz8cgRWkVaigWeLDCWrgvuYQu5Dmch",
  "key5": "iBZMz85hDbs4BpAnwbfvgVAhiJ53R1fLuAEYMLL8WaSg9JuTCCRzKGBhaPn56chjUYFfw7dF6NkL2hezsq7CvYY",
  "key6": "3MGSwouRF55qXC2oNsSCQCgzqqp5My5jnrhw8HEkkv23tKxVJQ787PhTLbY39hxVetscoFFds2dPPCyn3rrYeckR",
  "key7": "wtW54wak5yVqYhUe8keRVYJ5b2eVJUp2RaUQZTUN4f7yXnX1Hrxgxbg9jnk1eJVvEauBEaDvTFJrCrBtbvhb27u",
  "key8": "32aevqyHRdcoXx29dLhjurHntrXpAtk8JKbZGiTzwPiPJcMXWnnhjU5XTzAzcVdEPK7XqDxEvajZVUj7mLvY6SiJ",
  "key9": "3EKdGShRvQ3Jo5qp4bUqEFRRGVgQgGaPEHnzKjCh5pQ6u9mdktkfgbubeeRtDDGpnEkERvHYnLBYiu46QgpskD5g",
  "key10": "5FJgmHLUGUqxctM7HXj877uq5SUjw2zH6enEVhphWgUGFHHMGTnn93dZV4y7zPAw5LLrkcNovrFMVaGzKXcTKnE6",
  "key11": "MqKGv4vXCYiLuPQyiRgqcLRBtporWT6Hy9WHLchjQXHwy3JrKLUG83Vbi75xLeBF5xoDW4eDyyhgrvrmSvwmoTC",
  "key12": "q2Vw5ytAcdMoz1163X2JhYD5eeLQmSgMj3htZJ2stEvEBu71xVxnTCnvBvRXfN3xgibEpAKMn125F7YdYS3t2Wh",
  "key13": "Vxo4dtV7n9qRLSHr5r4Dtf9pE3J1WZYWmYfum7QwWD2F4xKr2FqgjrX1P2ZgcqwK2wEyjV5LA9JXiKtjGKVmMb9",
  "key14": "5ghEVxKUJHPe5NaJPeZ8bngEN7MDDeCStYAdKmqSKyskTuiPoiBK4wnDnp8N1RABCHiFHT7tWKsuzYPfgDiRPV5F",
  "key15": "5ehABXSxP9us81Pzqv4Y24rtme61KSKULxs1YtEf2wZ38HeVL5pxjxGRa57A6SP7fkD59Mkd2eDj4ubaEUG37knq",
  "key16": "MGcBtDxv6VbH6rP7KxnXm1SsNgVBRQGMpB6pCHvwUkwCjfvNf2h4DUvVkTbKrMv5zaQSU8hxoBFwwSTNa8QDtyc",
  "key17": "3cM7bioRCButmNdz88mGW5sAk3to2AaEAkpeTN1WmNy3APmAMdgYC8KeLNVfeUEUdbmaV23BJ2PBcbo1x3bUYYjx",
  "key18": "3nHT5vwYxkrqVpH5D9rTm5rTMmUyoFRCwLLr8v6B2fLJiTMJwzRHYPQF8erhQeD6BPacwmjqTL3gMy7ejawf1v8P",
  "key19": "3vKwaVhUGWjfd8Qjt8P31TVjAZe4b3465iqJhdiY6QGMY6pinHkj2j1GJumWGsNW8oKhZSZUaVLuUq16rWrQkpjK",
  "key20": "3gH25aRWzvHiVFJXYXFMEQmRKb6rhp1P5WJKR7za2ri3e61J8DdhWCSMZEZPaG7WGMFqMYyNjh4UyaQijiLeEeKX",
  "key21": "5oYNGTmnM7bfZNVu2kq3ESiLgB4gLmdqwgUCNaSqgRYEp2V4ovBDU53ND7L1oA76yeEt1yW2J84UqyNBCgsw5trj",
  "key22": "5ynas8XRYYdo6dAWGF83kpAzzZ2nJMt7GUuJpNxbYQaGHe6JKjGfigkSChwu9iN9dZFrHLD4hgWFeEfUf5gK7jpu",
  "key23": "2Rvi6TD9iTkChsCFDVapDm4gPB7JZQuukmsfi8jQofe9TQsjdjXxzUjHpgtrJhdBDumigQLEDnNFfqAkMvLQqTr",
  "key24": "25vxHvs29EBVL3wMxE5fdo9yv5tNFbCppByaGKiWAD9zPE5JYicrU4J3QvUNnY3rfFPhCZQSZGGC5iGkUDdYK1kc",
  "key25": "j1GZqdc6prheuQwYXHd7U7wYSKUKy5TRPuWuBCGtdwoS2YcWmZvjdt62viLeRJtx8eqou1iZp4cMBGK4pLjN1jP",
  "key26": "3z5A9WHs2Ezfaz8zLckVih33EHUoRmanDNx2MpYGUvnR37nYcv9j3btUXxDwg1AQbd3UBnBimsgoe11t55sR3wrU",
  "key27": "4Lykyw8MwkjCm7Byet7uW2S9TTxphMff7fVtSmqGWWJpCS1Bzwm2w9pXXYGWxdGMHXFZKWDFms59QSckiozmwKDP",
  "key28": "5Dv6bHg8shbwdxN4gSq4mTrP34MXKyPfW8vTwiEmmXoEHjVen6BHwSe1dcoaAsGuBUCBg6d75rVHvWHKMKyYVLtb",
  "key29": "3vbA1u176f3xYiESKvuyFTVNFjdip9fj9gxV1dpTX7YWRTYi6VCo4BHfGNzU4Sj2g3PbQ5FuVTsTZUUQLVPvxj6y",
  "key30": "3fSqs29qAXvr3wfntnVa2Dyrg6Gz9AX3tABnEpWYAYDFq6Xf4HjcyLeNjsGSWJzt1JLKAzp9uWU9CnVjfZj4W1Mc",
  "key31": "rqidjmswMbQ4nw4f4wwZbjFYfVA5JsEVLbVLhtkFM1sKjk8sdG6jrsPMQAUbTf1MsJnMAhKEpGKvjEL9n2vgfu4",
  "key32": "3w5RdeCpPYwFWqypDwW7toUnffALf8tFERStRw4yDGtxPbrv8jLJWQ4q5CaU33pj4dfhmdFCRXYKxpnjSA3VHC9r",
  "key33": "4ECwx9scL1j6QPNoXEeDiYZS9N8CVJkCTr1NLKcVQaRTnoCQcpd7At9UCgGsjo6zjfY8eciYT5UYWzhfULX9mBNF",
  "key34": "e1MzHBAdH3RK7QaHhiDd6jzajXw78XEn71DXP2bAADFnoBFdV7zkpYKHUZKz3AbivfSB1kjTiccP7jw1aaejevc",
  "key35": "2nmFqe1wQbM233tCHqYBHrxSRfqhgk8fkLbRp9v7D3rrHueqUaJEwSugR63qj4115tNPJJM2E7eSds4Qjz4yxmUU",
  "key36": "3ZGktbDDkUJ9UfWwZH9u5DWQpSfF8x7HjrKAN19t2iGWqVLH96zDkNYWhticLSGZEp5DUHatE1CE29E8crijtsSX",
  "key37": "4tP2Gg9cDu4Js8Jqytj6urwrxYeJf6ihC8Azyo3DZHjmTiwnYQZ2AncybaJpjum8LjzmufeSw8CZFYvZZw22A3Du",
  "key38": "CaGHWquD7d4SLtqaXLxSinUvEWJZc6yNRfdsHo1JYCZ6RkVSrKbo5ncsfBn1dkVCJQ9MntKncW471tD92hKPZyd",
  "key39": "31bubV86sLjLm74phuSj7HxD9KnL8XKDttuozSNv1SB135aMxEsz5yfJMUpC3osHG8UrVLKsZDCULs3JqFBj2yFi"
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
