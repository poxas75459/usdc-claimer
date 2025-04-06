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
    "2yp2FVVvNmYLCSqt8WF76nbvWmsZvMYXuShXkyMoXeWk6q9hcC1fTtN4uwoQGYxrbAk641kaBzLPFJwXCFkgRBWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZetfVx5kQWc2TRqyG3WhS6esPAL84QrDnE7bXKTRr6wjuDrTLuRv8nox6vVXL3CFZvAV5i9SdB9WrpgfpcEJA4",
  "key1": "51UkTvvkNGjRwzP8P59WZHu5RR9fjfU6mNrhBKkHdinxHffFy1gHPq33fVPmivGfSSrYSrb6AJcGDr1rThfHQgV1",
  "key2": "4bfxfLZAuuhL9fLYR5XZoL4JQ335SKHmqyq4btfZR9LHxeixqYu1RSMVm82NGyu2yWJNEtFuWoEuwhiZboT3Qire",
  "key3": "4RP1rmWqsvTzqvnmZ2WRraXxgJW3MkzKqsNWmq9jT9KquVG6kB8zHd7aKXDHoT3MxmAirk9HpN52pM3wF4C6tTRh",
  "key4": "5qsidFRsufpnn3vaLBMBa898njqe2q6ZasyF62QRmMu1RGinaqzcf6xeQnh9VxzEcpvNLU3oUi1B3YGXio7EB9t3",
  "key5": "2eMUbouQ43p8Z5MMMU1HaQvPVWnUcagDryAEhJbpR4bfnh2DVBsnxp4yXLYCYqJNCDNTMjETmCbprjjiMuBFv89b",
  "key6": "5rPhaSf33EEASHoBkoEoBqtgVobombCK2xY4jBHD7ugQMQtxFfiTdPYAmk9JarPSuC3jjCH1NGeFwPtyjjPk8ARd",
  "key7": "5sMCDRCPzzahoK5HtiMcjHq1b4DQ1DhTsJ27jT1J6xauDE9n8KumxBmzduujFSenMXQg3kRPMDhbCs3ZPKrndtgb",
  "key8": "37KAbpkZer33bVG2KCoaUF8AeU8QbevRnTojdzhCVDRrRVpqw6pTVChd5mwCjoHgW18HNng4phD3aSsgAbMwKPfo",
  "key9": "2anYczUPSATJbv4QctoVveWzH37781Vb97zK1MYAJd7XtPr1CEH3hPYhQkureLKRpZDx8PRpNsuT25zkFa58XoHa",
  "key10": "2yzwoLEtuzjwjB9t7yZ9Map6hT5Qeo56HvxwCyVGWQdYUEqH11BvD477skRM3PpvgJabFLRQFai7p9x9Zs7hXdJi",
  "key11": "61ryBZTZGEzN3mHkR9FsEwtBMVPat5PMN88mp3DLvYvEPfLMvS1RyNL5kxzCUMJucFNJ4zV8bbZdkrThtuSq8yEX",
  "key12": "4HgTsT3hpQTqpPQTAo45mKd21eZTpFhnrawXEKdxfFQtCVkEQCm33aiTT9J6dvezZgSYDzaoojBU9b9QYTcvz2Zi",
  "key13": "FtyNBxBgMvNanAxivP5AAvTaHNAfoXgLSBUeE4brAJtGHVe3dZ5Zyd71kYgaKXJG4Kc1xZb8rUK2Lneh6yHGwwE",
  "key14": "3YoducswihLEf2uM9GgNrYaNpRsUkpWRU2BNbhCNkw58nivCSnAR6nzFVmsnpoKbyrhQ3obfr8GGsgtowPVkXrXp",
  "key15": "37wDkiKpCLBqevtZsmZJAre54if34fNjVH1xQN6ktGsT9s5mFmUr3eRgpQDczFptL6ksCgDo9AJ2rNpqBRP9mb9X",
  "key16": "2Z1FQiuJNkzxxwbg4fJghPqMy6TvFmN64KoSXXbjCdaLYVMe8FAt8Z47sYRS9dwvYarGcCDdzKkDSV8mKuQdaW8D",
  "key17": "37CC8oKuMbV8LzWC9xB45DW7DpWAsWbVmkYcTcs51U2YpNvsDrvwa9orhs5LpMRMCv5zozkeVkEY6D8fbZZvfdEj",
  "key18": "4yzLeNGBY8pHjGhv28uvbNZnVNgwGmBzFy3q7EW8HDvQwv7f3hEtvU9JvTTaT1FJ7i7Uv77Acwg9gtJyvCXX9XiF",
  "key19": "5auFNpXiHCkjUVVZikTnYGEBRGc6nUQqhLZC2gJkYo4WUzfLaEQZBDPjCyLkup3SpWceLaJvE5venN5ignxsv2wk",
  "key20": "4yGn48mS2HRxBwyqLwnHZRTismizGyQTemn5dhSoHF9UyFEZLrHKCRx9WAtzK4tRYGmjvbamHEkubgsmj2b24w5d",
  "key21": "3kQb9Zw7C3m12F17v1QLDmo7BkknWmkU8Y7Dk3Z8FexYP1EzSEsKo3YLmP7X6SorzMDFhGW4L3p3bhZxVdVn5gbR",
  "key22": "55ds2ZWieRMu1RTwmTTyYv9sQTG9zkm6nkeQFaAz8QtKKcacGauRh5Jnimg5CNHCWWAT6Bd57PNxLP7mRuPQqgYU",
  "key23": "2Quz2ugaHoLmMaT8GPKQhvCJeNqHmj5cr1AkikMmk5XD6ws4oYdbZPuzhP1UscvLVAdzQDKcM7juqf9xGKVEh9Ci",
  "key24": "3F6ccZ8virfCn9mkMq4yeQzkM65F3zVdf9GXjx1ZgSKicjrvzoDW3fuVQrBu58agag2qM9VoLoCLS9LToUD1AiyX",
  "key25": "5hcd7PqkmjFVe9xtGaXPe5bbTuGVMdd2aAEK6NNg3FcdBTH3QUyGPn6mWwLYtU7RQtRgJr5Px88m4LBoshBVaD4",
  "key26": "24Npp1reckiRyVMj1iVum1yd4GbrpCs7HW9Kt8AA4XZzb5vmygS3mB6Q5nTsxNWL6gzXGaCutbxX67ok3N8rWf7L",
  "key27": "5jh2G3PRDvfXPiS2zmRawKgDW2FU1DjPTx3FaNYkN3DXZiDGr9YRmSMDFad4QFCkGP9V5BxpqYEZDkffhgHWQDe1",
  "key28": "67EGtWpdThfCP4CCVnEHMPUAwog9YVuJ827kdwfdqy1ccgoVVTNrK9ZWQmifpKzydaDZGhdd5bgkCDU7yq7hD2YB",
  "key29": "2UsfZT4XSTiMEBAV8Nv8stzZ46yX119hgcn9AQRvb72hUaW8Tg8puimq4AsMynYQCDZ1uuwnW2pvhTuyYYSTd3v6",
  "key30": "4fPGgKUh8BB3mqb5TFL7wrHfnTBM9LYNJTnaF4WCawSTp9jQxYEMwLuuPDUC6n8ucDS6YhsszKHM6YxEZXGCUM81",
  "key31": "45yehYV6YBf2PNJVC1UGNwNz9iAZJGuCwXxzAoyWvkrTjgPz2zcSNVHasarba92c6WrUvoCB721dU7YpdDDK5Pg7",
  "key32": "33BSHS1PfZrBdJhupEPUhG3dhY7Xr6N9sgB7QbHRHxw9xnZfx8HjzBgNmukrWogS5sHHgGQv533RWxbXWGNZGuV3",
  "key33": "3BReCXcDaNsUNW6GCJogGMZKPKJpaZYYQc748uboVABdtWpBuqpDCTiBpk8LvA28nYhSyV6qQJfpxkM1wTNSKtDC",
  "key34": "3oWtwQMLMqhZmP1aa4thWsmKPeyv2auvypAq1U3NYbN1mqahnCKtLaZiDZhp9XLef9mMjc6ueiMDUeu4RJoEFEyE",
  "key35": "5B5WW6emAGNNah7iCiARBLkiMUtKcmjfV4BcUWZsCKNN5nP22qVzT1f9dtNZfnCUE1JnzNPqCoLdhKsmS1wXSnoo",
  "key36": "5DxrocrHSJoPQVr97Jo62F149NNcQoDoYyUrE16btY2HrMTQFS1gTeXCcoHhJu4vrCDfFW8H1TSgGDsgpc7ysrgh",
  "key37": "4apRjpAPFRSv61Aw7MhKs872K3zySXeYha5s4wHqSDyHgyN8yfCYssaR5Y1MVGQjLRikrZKTyLPxxJszu97LZ4VY",
  "key38": "2sakJj9MLgBpUcCrHdaA198wSzB7qBEwEgN75smA5bTiNjybUFqsouHBRtJ8U1tq3w8T6eSGib6dCLttxCpBviSG",
  "key39": "5kJ3C7Z1cZcw3M2PHp9HSAVf8QvzCpwMHekakUW9ee6Xb3BGF2sykWyQ1okSqCZb1jbchNfQvjDtT31b85KfdDyG",
  "key40": "5KW1MLQU28sC8zJLBNZyF6b3b1jmTxNRvruXrAUjUwxsVS8pNPxx8cGJ1GGHDVhKkMfwhj3GzLni1g5YCoHjo5G7",
  "key41": "24FZAzwfPXQ6J6vsmsJTbpauDDVK4PRAx6vAGC2YfEs6pdMGC7A44kNLCHojgFMW74u1CQzf2ioYQhyEyamj4Pp7",
  "key42": "34As7PSFa2Soh25Tzf6yy2bkZTQDzEfHSbsUBodCWRsBn8M9mD6JNRP8F4WwFhqdPcTJXk6UUEpUcTp6xWBtbzSu"
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
