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
    "3FTYHh4WH4eJSi6cmVABgRamB92z1cfUksSvTFKvVux6CdCwVYfo24qe8qkTiriJ9rFATobKT8NQJsUb4E6EdSbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34x7AJp7J3nV6vfV5oTnE4Sgweh49FUZQYbaDdZAgiZAcz2bawM7brLiueccou7kqNcWLAT57jSjF1QkKve74yVP",
  "key1": "52fuRiw3jQsWS3xrVE2Zr3RAhbBtRLAL3dSPprUTYRDTDwdx8GQt5jTwSHZnvT3yEzBF6yDsAnFYKZSnMrnKgX7m",
  "key2": "ksjMMuKQzELrEbfN61GJa8a38y8Lbj7FKRMybncEERrt9WDEebwm31vgUzE2nUmJvmG5zCYXk7S6fe4MiwKFYWM",
  "key3": "5SWfp8XoKDZAMjThPhgb8Zud6tyNH5sSdcz8Lj6YRdKpPvDAKCQcyY6EYs4E5wQAueaiaCQuExZCFeueS4bJit3p",
  "key4": "WcW97zwN74EttbuCQMwBk7GbQTK8PU7MRHGrvvrtpGJLo7QqBBUFH1JjcSVubQdiRF9xBwKX9iXMAVD5HKevvdX",
  "key5": "472VKV2KFgrZMC2PPUxcCZq2cK7VoiZ3kGzC7yb9FYNQdnWWPbDzkG3atnDufntZUAnZrviJnQj4Cz4vUGyE7Ay3",
  "key6": "3ECwgbRME7truLJ5iQGudyYZL2auzKZGg5SNPFfzrszQ2m3R79uFtCMsd9Tj7AcBes3SXvkrUVtkr8gvG1ZRkEdg",
  "key7": "25dopbrQe1XAQsmrUWUtTQAbsc75KQd8nJ47HctnJ5rKadAQHuTKW5PuAXVkXzSu3TMqwWqnLfyJgetH2dwnD8Et",
  "key8": "3vehT5C3x1vcNhCZb3hjcpSQVA6aoVbkszosP1CEW3G6GEXScCkaUU6iBKuDkhfzHFbAcPRJJ1BA7Aajmx42xyzY",
  "key9": "4JsSgzyymvNcXbam994UskqLwmKWTi646pqhJgdmNbGWwyn6gRDEhRM4sj4VcHM3cm7WrSMSSxjwEEjqu1pufvDi",
  "key10": "4iMYHjh5UBuwD9eMJV5KDmFipiyJwEJqo16HFXxUnwwXFfugpUU9G3UCQZHPTBviXwzYMbEWd6jRfFBU6YX5D7hD",
  "key11": "52Gz3LaB8pidUXjQscUZSz5iSrNL27xcXWRbsd58SSTgPZygCm5hbetVxBKttK6vYK572xCJqA9cMwiZ4BRfpuVn",
  "key12": "4MBwHzm6K2ACdj9EvMLuJQJ1KBCyufSpbafzp1SrrZCKnqui2sGLSpUkcHMiEmKtmGgNLUcM2FPcixUqbvmM2xmc",
  "key13": "52nAQ4ULUkG6yb5S8abNa2vcAZmkkh8d5VRxUzscLPQeyMbgziP3JgBdEVNgPzLKN3KKfUejEfzk8GSrfCVQdChu",
  "key14": "3re1WLoiSo3okq7s7gSeqmaEqzE4XccnmbFYLrQf26z5uq22bFjfiMGmd6HoBf42SBNHkftC5DmMvDXrk2imkpc9",
  "key15": "3y2nXV8atuTTiYP6YDX4tMYmgtZfaWGxnLq19fLNrD81sHoECHY3skW4sRZUg5BQwqLjCemdHawnYHZiqFsejCXC",
  "key16": "573zoFw1YuGBfi4dWvwm6ycNQYcAYcr7BXyrebvC1mFrb1GeEDfLzLDvQ733JdyCveDaFBnNNB7JTd54r4e8ob8W",
  "key17": "45WtpjJvhdvtUbUQehjXuzFd3oK64BNyDQucinkxdjw8CnV3BBB6gPxVTSPB3gsmvq8QGEdz4H1SwayptzZZCoFS",
  "key18": "4Ycx371JC9pBy2akn4JyDFEc2rTX1vb3moChk4gFe3vABinL2nawXLv3SwGHt3HQToiUoDzk2fjDN8J7AddaybzF",
  "key19": "3UnEmWbx4vMzBM5yVXnXZKoXvHbQgQvpD5D3PKvT4W7dvizMFt5r234TpeY7KLAGNuz3SbVQgMLn94QWguY9xnd1",
  "key20": "2Tqb9EdNbYS9HvpHqQi3RzQvwVdsPe6h1Uo2ZRAfRyHv3N9bprNHZcjnA4gxLPkKBQ5h1wvdJSkvmsK6A79xFNq5",
  "key21": "kCXJa3vbCNQ7SzWuyBwECvv4jf6zqR9GbQkWRbcbrwRZnta4jSqvCyGcESwidCcBti3Dm9LNT6NHjjQU1TTGufG",
  "key22": "6uFPkjZtaaWxyyoNJHVB8FTMpFDeoD2aV4XMmF8HhGyQsHNmYhUXYUuN5TFbpo1ggqaiGFMKqtcQwiGCSJbE3q5",
  "key23": "4VsSd7y9rfrCB3XaUtDAQUKdEet2Qgyp9foVbvRQuzJE3Temm1tZcXdU3wH71Hob6QWWoWzhiKFZQg6zgN5Cc2pU",
  "key24": "3GzpJRXDNWzEm1fD1NyUPYwMw9vJ2oEuQ5jgLSehvwgWbR1fL2qVJ9XA5eTrfh13YgUkVqMhQ9G69eLxoRrZ6G67",
  "key25": "51FEkgCDCa7moFsk6NhE5MoyvXNoR6fjheucEVQwEb16ZiTVNyJbZ9vrVNfUemPvXchG1XfAfvVyJiSzobLLArgZ",
  "key26": "629Q8q4NMBQwoPsXpBQGea6mJmveo3skj3kuSZikTZcz3AtGb4e3fqdd7GVVDFWHwRFCi7dEGQNRyh37QkXA5RoV",
  "key27": "5mgvMMa9TiRw5Mdp91xgsqPo7AUv2ZXMjKTjEj1o4Khg4dGMyyXAeTbHAxW58bhfHE4PXDAMJx5p6kTdZr8BXmjE",
  "key28": "TXVJKfdmLpyCQy2BmdoE1DCK5iy8EVNUvxf3XKKvfuYGtRRBMS2p6CySdBkHhYiVhC5KX2gMQCUuv3MT2xyreA9",
  "key29": "3FzUYjpQGE154KqzG4zw6uPwQf2PfJXeRE13nmYyqoEqVVHv3jUhK48dARAasUKj1yiRCCUz3nXhyT4XyfE9dPwZ",
  "key30": "2EsHZFtCGkytosPAbSGmbs1aPZRBnXCKNkdZusUqhoewpzq7v8HEpLpUE1R7LP86iZFeSoGXNCxPVhp2qwpZKDb2"
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
