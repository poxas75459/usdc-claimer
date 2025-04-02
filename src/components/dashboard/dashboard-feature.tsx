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
    "2tXvhA3gYFdPj3sPZDBwi6h3L5gA8pYaocUPd8fvWXsJyPqTEir7Bhbxo1Dx8DZd3c9Zm63Tgcw1nCRE8y7wiwM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y63SSAxuEAX1MM6tEAsyi8w7UyPgx6qycvhvARYPLbHVGywuVgbpMGrdibLSXex44f3pJnwkc5D4r7n7KJGXDJG",
  "key1": "QGEUw46ft4pxKepTC12DRXNfSruC6XHvQ8zhi3xE8zyNFEquv7gjJUBWgezTpyBqhupn5BzAAyatsk6Vww8x6Cb",
  "key2": "VnVp1KrwKEcRFxVEMLi3Wp278ngT4RkDW3X1w9Dfh4Zqup7eTR5tpEH6mqQ1gPXsjgQfhDGRZ6fSHLSZUVzuvJh",
  "key3": "WFFjSJFXJngjTH7C8Ryvy8KjB9DGK4QkX8nrQZ3S5gVgBjzh4wTNox21a2QhkjVYTniY7vLqJ3gqTzw3fPsQzHv",
  "key4": "54dVLmhr8Dbn6AqjfdSgPpb2DcLbRdAyLVcRoSnCye4fa4iiMfLLqr5jcL8xYayJajsJR2GTWdCTrNvPs9TaCpS",
  "key5": "4TCNNQCA1RGBxDBCNDaQotRUsazW3v1z6HJzn2Tx1YuLp29nK5N7FnrCvawh9k9EkWWcB3ycLkg6NhrNZ9doyFxr",
  "key6": "28HYULbPYTWtnZyWHpEV9wBRgi7DxFUUwffMnQQyKRBqSs4x9fJFGUf6S1B7ikoLBWeekLTqXaqjPuRmHNKvuL7b",
  "key7": "2MNv8Suu7ywD3oDK8f5xUQRD74KrSUci3KUrHG9DrEx7q7jLC8UyFc28QR32Gcd7eWPEUWJMRRBCMgKVa3PLFWws",
  "key8": "4vs6WmkHTBxbRCWFmdUH8QfCBwvvrxgDy1S4198t8h9arRQkPedfi1DPWvkPfRszSX8bSkB393vZstg1JS1e55G2",
  "key9": "PAmqKwPnV1zLZGryN4QKzHcSGRXzPVDK4Qkcn9j3KjufYpZLcnRPZGFkb5PkHJYgKajsKjnf115aGfTFbSTJ24o",
  "key10": "2UxdjaJacxaxjjcrctYkHBnRqCsedP5Aa7TAKvepSQY9Ajxa66G2RLrcQKqHGseKicLv37kUY3bnuTccBeHMuZYi",
  "key11": "5DdR5UvsmWTMk3g76w1XszVa6R98aSYntZ5y6WqG2N7kd6kLsCRJ6ogkETnCRk9T911zU7c6Z5Jtj86McLZfPuWo",
  "key12": "4dVtzVmwfDrNSsS1Co4KFWnxSNKP89uhDzVeMtVWh9ZT2ks8MyPTDHBkUL7FmDMckxuJVc7AU7WNDNtwUHZ3MQdc",
  "key13": "5dgP5x3u2JvSdsNyDVYsSZhSpk4Hf7KC9bwKATJD3xD3Pf4SuW7nAgHs2DgdEzBwzyDJ8ZVzQDGDB9Atd5qYdEcK",
  "key14": "2DhpPLdnLwusZLYyEHggpwbkSmqVVZP3K4zRcZM3UhM5c2b3pmmhvWxwpdAQDqa2TQCeauMn47jHR4Kv2h5Qw9Eb",
  "key15": "5uQGj2v8hb9neyBpuAdMUErXPwQrcmAW9gYNuStPubGzgNrEkMfgGJwRGykcYxcaEY2wDRw8PHCGMp8B7NK9Xk5r",
  "key16": "5ChDFnVH8kMhMfB3WFXzSYTWrfZJ1HhZKBaXeBr182W6sSvyCq7xy6EejPd4JSomMi94rt7fZT36vCgYtmD33y3N",
  "key17": "5fVvzmAFeVb2KGuq5x8X6wHi3XRKUg5UBSmZt2S7dVW6iNBLkUTBev8TrrJUGXwyFirKXCzUCwZ2FWr5YHcKyDqE",
  "key18": "5p16F42i4q6d9DyF1DM83KSqyewKv3bVXEFkzscvP8v2r52vBEMB8fzGR8Fu8gD3nRQCFz6tQ272Y1jBVWrzrbrq",
  "key19": "61zNNQKYNShhprPLWkaqRXsf3ozDvbojwudcfHjTzBhLBch3my5WW7obmWKpYVWqo89GP2CR8JgGwPA4MoXNrgbM",
  "key20": "3UgXvb6ipu6QMvLJASqh3UqgCmNyewb8JdviLcYX9Ua3MPCPX4NAQYvKUsCXwytmifTS2kRnvru7G4Fj6VXoTfRq",
  "key21": "2tCZvXRChpBjtQEm2cGv9iX5beyfj7y4kZsdBRSTUwrJrNcnbXgL9zDohYX6f7REkQkyAQt36E1DkppCDWD1wNvY",
  "key22": "gGActN3kpZyfFbxgnrxXKfiBjvyagt1JJ49GGZ1GDG8YwKQkYnAgzLLHraGiSyiJ3w5mi8evZhMDTDs7qLrvtoL",
  "key23": "2ZkCJ88QNGVbcWhFf5TSeRTwhEyHVVqnAzyx7H8VYLzVPS9s4SkwTJVayjSegygSRU7tQnUw28c62sCwJN4ypLNY",
  "key24": "3LMyF2hinKqAhQRYFNbPHF3SvvgYXBfrkWJG19QgUC7PRMzDbVNmciVfGyGqEkaMAfe7jdxF7PRffNkwwBD5ze9x",
  "key25": "2vyPK2yR7WTuxRLonEDu7WR8NH9c3PQDXbug1utDw3qgYGr9ymZqvQoU6wUX3YTvntaPbK6Fb3gDXK7gFoS9hbcz",
  "key26": "547dyBVLxLarZYCMpc5Kk1PquxLj4sWZYUqrR6H2TbbbGYeZm8AZN51mFN1beepivrMwqBeUD4L2Q5ou5Q7wynmq",
  "key27": "2W82FJn1dBQpHZahZK7dJ4yZPXuGsYUJfT616QDRpuTZkgiapHCXQ66twbYDuCcpJP37YBMwAdCKpDx8ykT2eDY4",
  "key28": "3GfxXfpJBeLbk8z8zCqXdAcGiokQdAJrNP6c93cpBYrsLp6WAk8u97n3q6NM8W84Qwchyaq7oDdp1pTbLtcj3A9t",
  "key29": "ZEiM58jFCyuVUdmT6re9XivJcStXRUEJMxpGZQ2GduMSdLERRozL4VG7EekGL5aG6n2LQjLK8DmbBhu67Brzayu",
  "key30": "H5PzqLoRute9Nn41pb85nvy6Q9oK9g7kumiMjzGkfd2cqxwiZEVmitYkXWchD1LtLRFmRvpVrjVt4VXKkpWM3bu",
  "key31": "koBYjh4aT3B9tGy1B2yuEyzNTRFiPUb1FPXBhF3vK4qShrV8S9JwQynHs1BABnna7TtMBo2uKrUC2phNsYD1KGe",
  "key32": "qpMp1fchZAy47fHVmwi6khFJw5NcEpA8akLjZJSxYzdHQBd6GMBHW2qZFo5MywqvbxV5JKN1ys2nWj1NnPdciqv",
  "key33": "4SUXvAnLSVW1HjbM6Busci2du5JuTgWHvA1X1pnwK9q3YE4v1ZBj8wVXg6pcz1ME8pJoZjeewyo1GpXLMwtEzp8X",
  "key34": "2mi3nhrH1oMpjvJgYw5wWGGg5BV9Wz3UqViiPXsFigL1qiFLhJjirmKNejgkrCUYPSaDrwRu4CwEySsussJp6CVL",
  "key35": "5krPZaZbCvtq5ubNsVrni3mg2Hm7wGsbG7dPcdNyJeQjqJQxL7YLKeD1DVWDADTGWYjc3VwGyTCkxwVjVf1FwGTk",
  "key36": "4wU2VAjojcLAo2Zi7id3hcxGbYCby5LuHpktFejZyBe9Wi71JhxACGCtXaN82eDMMFfDPFE1i3hdWiCEniBcHX6J"
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
