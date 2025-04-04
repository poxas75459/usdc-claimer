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
    "2MbXMsd3p7FQyQaBdpnuPvXyUCpcXszWzcabCzhCGAQDBxHpWnBcwbaeN1FgKWq3MeqkibTwawgd3RNJ4mYQfQsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45cVXq2o9AB9hXCHD6zURsuvZ29vjTaiKx7Jgqw2Qa7RQUWRxQgW8FEENmf2hCnn6N9GWunWdJRjF3BSdyKdreGW",
  "key1": "4A3qL6G3zttdgjL7gb8EMZFWZ5N1Ffsfeev4poQw4wmDUsj3G8satVeW8HSZtgo81Lqzjy5AykjEQtFFsdZMxCf8",
  "key2": "5NGpDSzHwnGUcbLFyBZrH1hGQpdMzErhxPmkL1xMpjvrmq3CUrAPPNdqNBjvkpqNwv5BQ6TQMUiAW5Y6XYG9PmFb",
  "key3": "373vHKPPgA6z3JUvmxTU9fcZgLTbjk5Jsa5bQU2orBoq4qZBNVxPPBMP4LaRou8ernBNrohVEoqLvUxGmi2Wcrf4",
  "key4": "5vHokMndkeCmQufhXVA3EGyatTft5gJYB9ZnhgCpKomq8KuWgheAAtxpShVzCdGLatdsNa3tPuND5gFb9DaBXccr",
  "key5": "668GwGgCu3ukxqk2uGcLtBezGvJ8TTFfeNmASXW2m9R4dAiasr37yoDZmDArDN17D82qA6ijCKorc8Zr1udtg1kj",
  "key6": "47CkvB2DPbhXrPdAe2ExRCUuBoMrskNzXZs17joAiyvSUhLtevqoPjLwUPUEw7EUHoomXmmUYgXG6U7JVHCSicT4",
  "key7": "5pDDnpJzkztWfrZT669XH9EVPCnZsm68UMCjnwosnRi6P2f1P1z3i1w8g7GNF2b6hdSUZ9PZMrkVo4qWW8bW3U1n",
  "key8": "4HCxvx9MUhiTNw4JZ4MNem8DKom4Evzoz2Fi1YdLiXpH3ZSLkV6tH9bZW3He72331JoXsQrDRwfo6cxqoevNweWi",
  "key9": "2TUjTGNhPmRFz9uE8orNjuyK77KQVFiSxNRs2bBN5zLr8YcnBXCy1LfsDADtLi9o6wenCjiPf3vekdMLuYD1Qxmu",
  "key10": "5AsygH7DAv5oimgVcwR7uTfxJNybGr4HcZuYJDxSexkrAPMTd1rcgj5E8gCkusKcGcgy8c2e5jJ23Ztft4yCeXfu",
  "key11": "4n56nvXcdcQ9Tk2nKjNqWNcM5k2ZsautpJ8MGPha8LGBFAnRiMRHHWAxKjHgnUfSpHEuBeC9QKBLqraTLfn42gcw",
  "key12": "5LNQi9XVcPcPLQcEtpSWsrRFGKnV18t5ZuqiHKtrWE1H6cNFBPBX2PmSbPcBH5SHLPbMWBcFzS5cHBehzu8TZiGp",
  "key13": "4y56dxaff8z1rfQgUpYpS2udomQTjKLmFjvCma8Yo7TErHcTqvAbnBuvjEkfkNKi7fuFaJGSdTmshLg2AdNeazmm",
  "key14": "5a48K7XAzvbxKAgm8JBa3BCpY4vC4nLxT7NmeVrfqbRZYonNRrXdSuVQtiwc6hq29smX7WVDKTqcGMc1c8AwCHLU",
  "key15": "gsk5jtw2PJQFqwFJoyFGWXUJ9MwxdcpQuA9FJA5mcxn6NBW6yeCRSj8M7RpuMu3Tvwt4bWMN9dhcRFZyEfrkBqL",
  "key16": "fAVQ7PnNsVBjnYifhJC73ZQu1C34k1Vcm8hPk8ffGeSwaqdMavN4cpy4Ac3KtPE8TFuJk8JYhBmX32q3WxiZZ5N",
  "key17": "38zugDy8KNUjwduioBmG29kjczkWFcr2ZpW8FSgYFbhqXbsUrCgyEuu6ka85U7sf2qzMqpMJvqbJcstorcDGqn1p",
  "key18": "2Yi1px2VYDABNwscXFCxTibQBuh6BcVypDbP3JxsvLrppubDTW9fARfzdpmRWcNvc7q2xtgrr59uBNR37VGvemBT",
  "key19": "4jaY6csnmatbpFFg8SPZjQwGAoWAf2uJVAtKpK4hpnoxCEacVniLDpBWEf3jk5WkK2KsvjB6kpoB2iRyK2yiMmyP",
  "key20": "5n1F3Yd69KCoET5vX2oLKNfvjuXwK4YBZquoSuCUfGw2E7jTnkQkvSwCbtJzLd8X2w3XXB9DwaY8V9jTJn4eRbv1",
  "key21": "acwZyCPc7SZw4KSjuUiLXtvG2H2JEsm1Cv9YrSsmMwgxswJQGkCXVqYfY8ZW2XUBeixWQSBAHB8qcwyvQQTW3uJ",
  "key22": "JfRv3jdC3jPc2CdcKv8NwqSVfEkn1MVfWSxbsUDGpqpaQVG8Q6FjvbZu81accZWMa9n2iFkuFbvUHKVM7K8y42P",
  "key23": "Qrt56P2DL6fNaMeswaLJ8ciFGV9BQX7wDpg8VFWWJJ5wRoKV7YXEU1sh11yT8E6XvVLBE3mMNSNpVMSxSd8HwQg",
  "key24": "64tUsyvPsNMGZSXC2kLjp88AP3ocoYjBBdzfKTd3nF4w4qpG5fSgVV7ChqVzHDsuLUxZXk2wZFXCMSWbvM2cBfcZ",
  "key25": "2ydYv4uNkYkrdBtn2URbd5zMwgvzZMNHoLsMLVWm5XwrUR7H6h6ZpKvwsvXJhRaDr4d1R2PKkN5nqaDua1eX7qc3",
  "key26": "2xdEo6Z6jBxdZjeMXGC5zZhgYpLkuy4bgMHy1HtvajqsUYQ5bT43r3ETTm9koxAfYFkaWo3TDeBpaDunHD9Zpgyj",
  "key27": "cNW83bCXjWrYE2AFtfBrz9YQTvs2dvkGeJuGBASaea78XJygHnWoAb4xtNqD25tmkxbsvqrQEVErg746bNT7yBF",
  "key28": "4XXLPba4vK2uphmJ5zypv7nAt7Qqcj4BJveCfyY1ZawKp65TUyNAzX3jamyxYYCBK27qLjqbwG7UsJB7r4a4yfRE",
  "key29": "66ThCV4g6iHfbb1VEUt63XaGg8CoT7jZ3ZCHsaFCGK48UDnPwKrLJREbhNWcxKCMAdQeKybHZKxro65J6VPekAC3",
  "key30": "ANYCEhCvU6yW9nSoQuBgwvBvS71d8mANdeZV6Yo7dSivbVMMeqzjHCi6wXnGESSMsCFdobbbXdDJ3qRS2HomdGr",
  "key31": "3SRFLtzpGdYw1NdbmVJfanfqs6uUNRs2QLeNY8NVWErChs6o2YnEpcqPGsNikfwqHFR1ARvAV792GTNU2vf4p24T",
  "key32": "SX2Qt2t8ecgUZbNTfzLLqdqEcEzq9S3YKopJzjs77LRvNQBEB4oaNNYMZkwrTUFLFwMFsg5ajn7gPHD1oYFCD6p",
  "key33": "43xmBG9naNquemfjoGDjH4NRS4qEXLbjRpxwgAnczpy4foFAZR6yu4cEx6TdRs1qTgJNNVKUks4aGHHYxgtmZi7A",
  "key34": "2CK8peMjGzH2xMWrSMTxXXNk2KaM3XtiBkEAVpRDrexcZbw6GFNjx1LroLD8h6dnWV5TWcSnjbwZ4XRNTmLAUoyb",
  "key35": "3s6r5xHLZkSmDf9sUzmbGuMQaWftAphoPCybYv5bmpPsDwdveQohr9v7dfTdHRHSHvAsGwZRcxLfMWo1rsow5H6q",
  "key36": "3brLR51dcbBZGtqnSfbzDGkKzjvhFK4Ah2cfNrKdo47WwyPsgvbGGL9VcmmxyT2EHs8DZBkFb5iRNVXF6rgYH8q1",
  "key37": "5kHckPmphPJwF2DyNnUGXVsshCvQQJGh4vgoSq7er1emd4GjVd122FdGqRJoxNScUEv97ffsZQ5q2ogDDQoQxD2h",
  "key38": "2YhVAFgrcbe2XUZ83vwvUPsrs8cMwz98kk2FiYFiL5kL2Z1w4t7JjXKdVm2ixwYb68MUVzaPmNcY1T2yTFaysxeq",
  "key39": "3HVgXbcefMiEgeJRTtz3FZi6QL8W2bhwAFvoRnea6ZZVP4R4zsemdxWgjdkUJEwP8wFZfFLiETR9q5SLv9aKwfwK"
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
