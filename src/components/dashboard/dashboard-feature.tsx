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
    "32YQr9gPkisUtqSVHuE1q4z1youpYPkWSECWHNhAz6H7dqQJpSUvG3E6heNXeTWVwoUzMHz8ABk474VqnGsyiLLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WBj8RJPoMdg5SMc4bqAfk749tVLFWLWKUgz5uauEN3pC5LASbLkc6XVUvwjDXB1w1nVr1dQAZhNUE3DeVsYbDPf",
  "key1": "3VSmh3L3cvDsHDokWMdRRMaQeh17a1rk2NnsJJqxDoCnYrwDZFUSUNe6Dgm9qMrwdyyUARCPA1oB7UzyGMQArAeV",
  "key2": "4ZT6CujzTUvuW8Ydz9eKHsMW2FsYwsQF6fV2j2hNnZEaBfZg9Rxjt8azwh9jmRvAzNL5mmwRreBnjXucayDCKowK",
  "key3": "24x5R7SqqViPvcevVyB9JHmL18uuE38ywEmaWfWxjYWnK6KbWkVq9LMXnqpE6w1TQVtcxLcMmSgxuCoV2qpTWBdh",
  "key4": "4beoKec6oRxmujhaEmbQ5vqQeDCM3VRHAoBJGDafLGeqazDEvr6bdmsrQJEvzmF6x4RdDRhpagBthLJcwc8QnQqB",
  "key5": "4gzwP8QVB7bT1HsW9qec7XwGCndiLTy7HcjGCrZMNcPXGB9LoEYd6MavzSffrK9bMaR7RE7zcinbYt6bZfQPFU3v",
  "key6": "4XdEfRm8iG3RDLUrH1NzAx9S1YCCm4CWL4A1oSmgnwnDFk4EXuEwe44Kfa3vDrCojPHbp8voHns4MpatKXsvSrrT",
  "key7": "4gQLRDvCW88JtCvtuZKPQdmtGEqLd7gn6dRQCwmXB8TvBiFYuAyoUPb9wQ3upXnExxCc65PRQdtEukAu65gX2XFJ",
  "key8": "G995Mud5eHTqMJvPnnrXtv6pmMa8DrNCboBodjHdi14TM4cxiRvHBZciY7PgfUfHjxvHnWbwM3ZG8TwnWNsRZEj",
  "key9": "ryGDJs717JfLcE1by2Sdo2Wxo7n5YuZAk6GzcRG5rBCktewCHc4jGu6AMsqeQxawaDb22U73sLfpE2e7xDxySaR",
  "key10": "5og3NasWarwoKW4mETTZv4QcTsDhMVB6QfAcwJeYz61p3Z58PfCx1atLx8qiRc43K3K5xPWToup6FtWHeHo7j33w",
  "key11": "5jno7GWvCgAQNNXurqibVptjX9aofq7RA5b5E2fvFpm2yudTu8rRFMLbYqzXaPfX92GuS1vBaQk2hkNBRMGp2AQY",
  "key12": "4qAaUP5L8CDVV7RzPCWTWLREU1ErT8q9QnFKMmUTWjNXmDD6kigkqiEy8oM4M2v9tQWRWT5fHMta2UnRRa7wt7ok",
  "key13": "22SkbSBYZeSSRyr1NKhJy9Gb33uiWfjMyU2h37mCRfMu1rHeGCjjLqcok96iNXwxUu2u4AxiCYw6MwKhNjw3S1cB",
  "key14": "3ssqhvgdGvpYcvPJBFPj8RgA11Vr1NkAjVB6Cc4us3pKGiw1qXU8ezyhDMgAu4EGJBP9DyiyqCb8j1Nfu71esX5Q",
  "key15": "53SfeLjKynQYDuvdtdnUSK7xrE55nNw7GFEXc14tuG38wLj6D4NK4aUXiuZgaSw22G6PKXot27BPMUwLuUNEYyb8",
  "key16": "4xFouqhkyjNRbzJFNjEkXhhPx5WrwiWqpQoYVipoTDN6ApyNSrteAPda1wpKZ1zhgQqaACJJWt85gU6KNrYNV4qG",
  "key17": "3JCnLkJJnKyVyGU6CgZGHvq7Cf5V3ihGJ9oa3wEjJRH2Y4g1429GBh2JWKaUH17bTkW7Tb96JcxiuCSsarynJ2r9",
  "key18": "2RqRucxJc1fizjFqHXvRd6L3spUd3S2GPbvY7Eqpt81Zdw9oAVEo6drewgR3fQtKHgRSu7iKMSfm4SRi3Q1hG9mq",
  "key19": "67q4Yi9YomHR7n7KGr55eaNJEaJo6Hrthkrk6SXpjKMGvprk8DBeSJhnqvGjzHpJeBq3DJxNpt1wTQeBUT6v5xoi",
  "key20": "5SL4zkyVYPWobMFgcVEUZCbgL3c1fb4kdV7dgdDiMH7rk8biueFgavDnedAw4cjenQ7Fpy9NVceJrLiqxtddRwBZ",
  "key21": "4YVoGHdud6VE526TmhDa1tpekbvqkgXNcSCrbGmg2MmtRvciQxGG4AcL4Wjjej189GLr4a4bZsuLoJ8WKe5PSVBs",
  "key22": "4CBEAQioyw6LakcaCd5ivKEMsipaBmF5cwVGNuCDcvZShYirqbSkt2LziptUtnALTCewfXX5HkfkMbTLkqZ7uEbN",
  "key23": "kwtdLcCJ9ei75fFBjBjmhSnWDMWL2hHb3QKfndcPZn5VaXxXmZ9XsHcPbnVjoLzyMVaH1YSebVPyA8aampmL8KS",
  "key24": "5UZWma9DxGC6s1rEBAgZG6irrcZhXeN6yYqSdWNZ9VA4cCAiBnwEvUdGqMhvCYyGjNsPhX61xnMzjVzAqyZu6XUk",
  "key25": "6CorpBg8qwxwuPjPyjn7maUmpgm2QwPt2QtQcepKNA3kN9VpbLDfdj3Gq3frk5GA7WZ6Jm1tDD6mAtSpdDzgPtn",
  "key26": "5DAaBDTChE94bQkiSbPnmjrwBGuPJYF9yBSh7cSGYoDFcFNLt4p3CvFfkDJdQcd5PHhu1fmLDY2dz7GvJbMH9FCs",
  "key27": "Wci7muJ9wqAqo8iUMeZL3xqyxLFqgRYuRkFdTtsMTGpcokhscFnenQM1SRjUVDFBAraGP4215dovWyoc8RTARvy",
  "key28": "5z2gV7CMPfq66vk1vbF1BWiWZUoF4gYEvn4KcsZ7PcytVoEEhtqbSu3ozUJWdHfpVsnyJoX6vswYN7ypuLgKwPEm",
  "key29": "67KzKGmUJMokzkj84TLcuTg2ttSzJtbXQwm4vW7B3wRg6YeBXRcXbcsLR882guAHNkEZhX78RcTQCugVzzbiNySS",
  "key30": "2XvHg947VepZ7nKbsWmyx2W8PjzNuUy3FCmoiQjkujigjKn2QWubZuLaLyqW3zoJVi78oEDhgropL5vPNCrEZvqS",
  "key31": "5asgSqRRXLawsaSsiKyw1XdXCCWSs9HM8y6VLJ2mdYY37M24SbasgM53HQvRiFQ3DBXtPGgT3FJsMHPzygJ1wMXQ"
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
