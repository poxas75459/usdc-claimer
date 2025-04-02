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
    "5LoH8GLsiwjw2ZYp2K2rifL9Bhd65DQjqYjf9wJVMM8qWTVwhWoWAyTANQezHe81ADKCDkjnhbLKGRXsqFpLuUQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zmk5aGGJ5xmjTchWQTR2a4VWqsmzrztuj9NfGcxP9f5yh2o3tH5y2JEPim9g7hijMEeuSMwqcAJYXWAkcKjwHRV",
  "key1": "zpZwq9G2w3YpsVupTZd9Q9raK47kGYMeb44ZRdkaV6Ycni3AiTca8RL7QacrXu8cfyJs6gQKQN7DUqpqJhfgLgQ",
  "key2": "59LWMLNoPecwHQboZGWnTFc7ncmpvRzik6fPWkyvUveZBuzu1VVWVDZ3QM19RT8a5oX6BgMoQgQD3JaRMHznJW9S",
  "key3": "37WboNisaU8hzEjLTiCv8f1FV1FThfavQAvTs7xukEfQZWXqze9vQsVoTsePwtmLDyC3qNnXPNSgXCXB6GuAzkGJ",
  "key4": "4LnHbiVuxXPdhn4oggxbMVBrosP6kZULrTiUousKzDnrBDkFLoT4kXF4Q6GBuW4tcR2YyA8Hvh5V4iV5jCsybteh",
  "key5": "49kCM77jKZUxuHTZrWwd5r8ZjyRztFK1j5R7vFiPuLh6r5Z6mBTfJibk2yPwt9LgEnghZVJ65AaWgT2J22mPc4Lm",
  "key6": "2ck3BGKXqfYAXFfSsHQhP8m19MLgxdgDLoV7WGdvc2GfqWeMwbvL2dB4Am8n8fGrUhSZxintr3nywxtp6JsWQZz7",
  "key7": "36ULr2VNrMynvJ18zzZuLGkCRirjpYdivMh9oyfsrsAyxFqrwWxTso3FAWHyR1PjtsMMjvUbKuqq13dT7p7CitMH",
  "key8": "2ye6WZLzY9v5x5bkSkxuSxdgw1Xx2bQi5zWU511duxsidAkmZhTyy8kJGygwcW2dE79WMHf3AWtaw2pDwezuJCJd",
  "key9": "W4BCgBHSXdEWMBrRDAH1Y7n4ZMmCkxZNtrh71Khe3zpTeop9X5Zug66Jr4fBnGfrHLaxyv6mor7WvsQXQRNVMim",
  "key10": "3FELMSZv58LeqWdqf7Ej8QVt1eRpnoo2k5NNyHW5ARfPjFBgeTRZCBdm778zd1bweFnHDrqtep8cZ6Fk5k9TnJGb",
  "key11": "2ogojED7JaycXvnx9xjCdJpd3yRg3vbek4TA9ei7kmkSi4TihTrkmCEyAtfe7epbAs9qxxwKSazhMgX5er6U6GaZ",
  "key12": "5bkCLCzp9LgsrdVsg83T5MzshozFSNUjVcKHvAF2tN1qfL7BYEkCc5i87TdmSrhDobmu2pH34ZqFkXyzDGdffpxT",
  "key13": "2KWnvFzeBJRioQ4aHqw6zZ26Grs8um8RWUjLD4dVDe6sqSNwk5bANux424ZW81Pfh6pvvUCa6doMpvJ4CUTdFXAy",
  "key14": "4i3gYjT6NvoPbHkr86HkJMPQhCyc1cuCLd49hLDA3TPw8mbbE6yG2tw8yUuFVXpCs511oPKAMnzCFT1uqzF8rnqM",
  "key15": "5maceJxtKtVefEZyT9hhjpsEpPNdLFPwTovyv4fNeUyWKe741yoECnEccBxSjkeNrPGvyXd43VR8dzPKfeGQCRq6",
  "key16": "5tVTSuYPojsjGiH5WZ5Up8tCrhvn4pxEaYgnkCVgkuEzfaQcNFs7HZYLTtXmrYGzFkW8HbkMEo5umJbX4WnQiJjM",
  "key17": "47TsGfSoNggSMgattWdspPm3Njj69Vt5jewHSWDv3L9bA8yrWqbhCkEtUcXAKEYVXnVPmc9nnjyANUF4z3XFhjPX",
  "key18": "3KPPiKEXW5GaT6VEivVMWKqC8SNS8KGpZC7uTDER35vVoNx5ifJWNrhP5VNyhup9A3obPu13M4nH1BAxaoeBEQsn",
  "key19": "2z7DGjUaQArgMc7Pn7XJ4asYB2uUxHmsvmL1HhSkQURNFtdwqS4DMWjQwQeuP8PN6vsdSyuRnXpPL59eWcHPSEA6",
  "key20": "4Z7UToyYH2fA464oiyrQu5ur3fmGRKqnB9FSBo1eNTKsnYhneeUpkJPNPK4D7JYd3xa4hhpnuBb8UFugwMkNgXJC",
  "key21": "2ComDYWvJizSK1vmPvvANaFGc4Eb2CMiY9nZqmGy4jHzSmkGxK1iVFQSVb4u6haMJhzk4nXcjNy9Df6CTFQXBBAF",
  "key22": "37k5nMVL8CGh4XMMk9RSc6qQA9VHjHzwPyVg1UDR23G5dqfs5XitE3WT41CBdZdmWwprwAR5KnWxU5H61kpeRNXV",
  "key23": "2CGFjKrsahpFxmL2QmZTv7y9fMmRcAkSbRghMtyVXzTQ9H48bc1wZu4LMJymiZ7mkbnvpSiwNADkfUbNJa9ofX3U",
  "key24": "32eL8JJLU9pt8MRYWX9ibNoJW1fo9t1suZjXLBczKK6NES22ib4LHMjZy4DWZXJHPQf2QtuygeTkddvUFN4weh5i",
  "key25": "63LvGcmCByDqZeS8H6UX5GhYHvAG1Xeo1KtCqqBgxGfT1rQV894sYKLt2sznBSg79YS2qv1y8bfAw2mtsAaXPBh5",
  "key26": "2mnxpFzSPwLPSKMHNHJoNvEsMW4WiegymHTyJtn7hNwzy7KawaZN33AEXs7GgSyjNAgZJNx8GYNm2Jx9FN1WFjvw",
  "key27": "hA2E6ioP1nQUxBaCnxUnLms3zw6nbA2M2Nun4PP1X5in8aDXiSYP76uACy11E1eGoa5pFGAiEJMtMEwGZmSfatJ",
  "key28": "15BNEFFfCTBq9AvyGaLSHXBCk2WJRtkiQg4UxUjBu2GPbeUMjdddNwEFdZBuYJJ7x27SdcEa12w2UdNmAGfoqEA",
  "key29": "4asD81rAaQ4DXLsP1474wrMNFEwsdBuZCAspxXuxhn1T8nKJeSFHnUx6JikmUbrMDiiz614enrDYXY4vVd1pbkkY",
  "key30": "3NTbAiV6oorBUrMTeDcVay6yvMxcTL4iVk8VxHqc8tHR91VgLgHRPGPvXZP5KYvsd8p6BpTCPhCXAPDZxoMnn2Yq",
  "key31": "PKvt7vuLmcsLAJ3K4XR9d3yBx4ouuNHjxxX2ueww8fULignajNfEoqBauZZ6weA265Hwc5xPnCdovSxeNhyX9Tm",
  "key32": "5UQ9K19xW9QgEv8SyaCmixey6xKSW9dcnrhzYBXnwFgaEvmAJLApKY3zoLXpE4bwUmfyxKePMu4NzECUTp9H4NXP",
  "key33": "4zVsr1W1Bsm4pZLvpW3xtForK9XgXXRBiKDvmCxkZWcBKmDL6r5Z2F8xcmQn4uVBYw6RvcMG4Za5kKQ3HopkDnFr",
  "key34": "5Srjs91uFFmJV92fWq2ZpwK18iWRbFLU3jkfV8sp1y2AHmeXys5ZAajhHyjezXqBgJ7L95TTZL3xFHBg52kahP24",
  "key35": "3Qcun8T6udJKCncF13q6u14NjLvX4Mm3ZkvSXQTwqXuDxfcs1EgjGGjxuBojyd4tE7y5Pj6eZYiTQTQBmDhwLLiu",
  "key36": "47oyWi1eqiLp9Xc719TbUv2T25nHbeeAiWibHdXVesWttFxmDBdPW9FXdoYordCmBxUroTUUuvgMnd47sBiWk5Kz",
  "key37": "5Xk8AgRqYGArdi36ysiVvkS1uBhjDBuwfPUfNmMuW7APSzVfdeqaycF1rNMPnAcXPFgfnf7ek9Mj7ipTdJ3YaFMs",
  "key38": "3SCMvtzGoj1BjMaPZecqZgYrvUsX7yJRcYgQHXEGiHPZ9DK6UU6MHaXjUfFwJ1QjUPvWw2VtzVHhPia2RqYGbdVE",
  "key39": "2s3CCj6oP8ebB2jmzDvcPjfzpkriiHoNeWtcviFGmccDwTyesTb4HFcmcqKt7a6zLJxjHzRiMvXe3hB89HKQ1atA",
  "key40": "3akUte1WhqHVScr2v3wPSSnN23kFC8wBrmKD2EemZKREYK3rmAzTaJ4dKSDTcktb6h2nRqv7XTAP1H2z9HAeSsur",
  "key41": "5JXMRrPY7mvYbTvfW1x2k1YXLgbVHoN4ssfTBJgGCoWP6GS5orpjqaBwxYqtia7YCjiXbVezKMSje8hFJzr1F9cu",
  "key42": "4LqmyibvYtgfauCgLg2kNqgbTPc7wFGW3F2JVjfTPJd3T4d8kY1y82nx3WN4ctwgwfxajximezQ4qmAo3dTwQQzV",
  "key43": "45GRW3hoBLLz1SwZdqcPYS6K97UjpwVMo1q9fQRQGppyeu3mcq3cdJeCbXai2tZhkf2rAQuPp6yvwTgPuKNH2Cvz"
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
