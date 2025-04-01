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
    "39EKz8u9RHK1tRFjUJ9bpCEmNDXVTvA1pJAa7mSh36u44WmZLPLRQq1ivK1EydCjHK45dmhJPfv2LW7Ef6yAoWZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aT6pqQUm1qQfR6RjcX6cDQ2UEJPQ71bkYZJXKf4JE2VqeZcoHTxnUgQXzcnWWDeCQCorLsKTo1gPzhMpRAQg4Et",
  "key1": "2xnsN9TMsW1R8B2QjRWfVQqAcZ51J8TywGLGoQ9WPMeogMLrSZgE9jkc1zjzJb5varhqN1sioDrzoKe5JDN8Kxfk",
  "key2": "3D547VfgLuffbv4y3Eew53KZxKwkUi8kVdoKwUEKS5MfMMC3wNLeAotq91xEAbndiGFNiE3XyrL3ub43tm96pJaP",
  "key3": "3ub8Y54QgSiTzRvnAqv6FvZwK7AMDaTfyCkcdBPXdNYffUD2Xh4skWeggvk18kDgfVNzkXVZJrHN4FvfRWp4Vfg9",
  "key4": "31jMszWCHkFtmXCB6e7YBcZ57F6pGZzW1sa2c6DczR7EoHRxrLujrV1QHEgsTMTMB3BzygV8GXSTpBd5UgH7XA7u",
  "key5": "S6ndX1qcb4wHSP7oFdTfpXPLvaG4PJcxRQtPzY5pgGJQ45psP3izSWpHoiPujH33Kh2Zh8NZLdAU52VMJQ5YWTu",
  "key6": "jiX7U77RYSA7MvpR7gafSduWXonQdaZ7379ws47kFUbyfajDKvAv1hNorPhPLsnR6g92txQ1WCbNcXqS7J8okCS",
  "key7": "3FmCWXqjKHMzWZ8yKF7unJgT98Qgm5qARUtv2m98L2vdBLoSYifE4c8FCqDA9VAkCwNtTTNChrAzAcARNvmPxGW2",
  "key8": "2x1VsmV9FjYuVUbrVbiSy3vMkKamcZ1FcAaGYYxWjH3Y7Y6ctRBEz6GZY5A56myD7mUme37XMrNtMkHn4XmR7d4R",
  "key9": "2PJWRAgXNSKdESLEgTLDkWRLDXdyZ21GrZjRgQkFXEweVo8LY9udbq6oENyQaE8HyJq5p2mcmMjfu9aPZwY5dvVe",
  "key10": "4Qat4HsukUcTKajd5SsYJQW39E1FzLX2awpCD9qdrwLFmeoHS54Jk8gk4KbKxhuMx4wNL83xDzxZKmjravxSfuKh",
  "key11": "3uBBS3oAQ1BKuyWjtFzNjrVCfteVDSnqWGkcQojSN4CFFnCSZmi2HMMcTv5pQuhn6j73woUeNKAru3bi9ToY9aNP",
  "key12": "uCdppsCe221g7zPF3ZBcoUD9pZMn2CPhJfQEVhjQDx99M4Y6TnGFTgPfyo1nU6V3tP6E2xt8sLpBynCPMZZGTdi",
  "key13": "4aPamigLSDgd3kScEH8rTsYTV3rBRLjRnFXUSgSM9PJZZLTTK19WR46iJWijBmTe45EdtmoBM4YmXHhAVguWuApo",
  "key14": "5MgWdJaJirBK9UvSkXSeWYev8mp1crk9n2u9PvWy6oEKyzU7XB1mtzbsMkBFnDQWFwTWQTjtE3MKAGTdNZ4Vipc1",
  "key15": "jrhn2KhNRng1CUqwLhahPFZEXWi3153N1kyCvu933vVe1XFxkLjNFBWRWW54gbEM59PH6wiwMyDKEfMEAan8cnp",
  "key16": "27EwA1C7nYKodN2KjMsnXFVRaobbzdcs4BKVVoq6xeeGraRkPTs3mwFDpYyWk1uPxV5HmvW9JHidedrCWwd4NyHE",
  "key17": "4xLv6CMBs1hcArigwm56Ke2cT1uAim7VE7UTzTQ3jaw1cn3m6W7TWTq78gmnmVycbRpShBM299Lfm6XStiL5D5nm",
  "key18": "4nMUDhZ8g1hqmqQAjCCPDdPCvJeWtPirN4e1PVy6a6bQLJVnmpAWhWxHLvtaGngNpf3vk5sBZdBrXzD15nooPhyT",
  "key19": "3PEeN5dFJU3NAJLFR3Xf4L4NrKYM7iLR6xVZ1Vupz6D1iVUz2FF7Z1H7FXAzHoYHKBJBkRobnvrxGqszRz6StefM",
  "key20": "2uWaWmXMLbXe6xQXLvz3m9TvanXC2gDsSihshvuyvbTo8rNQ9znSM1s8N2cKsYBX4YYhT6MqKdnXkfRZNdXfKSbV",
  "key21": "65jjszjjYR7s8U5g5KTxJhFNmnrbU58DQmo58JmSxUDxxf8c6GkynpcuuAmysDxeUJ7BtRSmNQA7AUHRLe1HEZhW",
  "key22": "52MtMcZAR39Atfmm3WEGeND1nBQQUtDyDm2uwxQJJrebJTHPXkKwEWvgVdxBQ84qudu42yKU7mdag7yiDQNKHa48",
  "key23": "4zA1TZydXVrXF4gny7bLTbcVSQsahjLjxxyR39MWiguUSryrf8CsjwnDgAp5U3sNC6mbdiZHtMfxYt95AbFFRttA",
  "key24": "65xdsMxKKJVdyf2TZJHRNTZ4s7XmVwWwU3RuzWSQvy9KvU8EKfT92neVmq1WBSDiCcKQxsZxJpw8Gi4GULf5tiL1",
  "key25": "47GHCE3wfcrijcJePkpxXsWhcX23DgaAWwFrpF7ZXVvWms1z9KqBbsiy6rWdesTDJ5oizCapcwAbsFzR3YyvEk9j",
  "key26": "5jzzE1bjMTV5tHAQ2EAMrVbLXfBfNwoCtj8FJ7B9FdGapjC8nhFCtxNQQtG5wC8W49Y2Cja6y5Bw7hGfzwtYLWxS",
  "key27": "5qHvwG1cGXTdfZrK8YbqVumz3Y8eyXERbM2L6TCPh7NEwJSPqbejxEULtCsheWPhjmw5GKYczSbejq2co1caBfLY",
  "key28": "469DB6kmBZbE6xEiF1GqSt26mbpL1rNMyhA184utHQx3L37Cm1LouRbbkHiuxzHxHmY4rrxwoxHMhzukZ8DAbJaQ",
  "key29": "4d5wMQCAoPkyt1DromPqjfhuRzjyAkV1wTAbCVwBzTogxtK8F2t26d3qj11xWF6yWwUbd6BpUTLDWkM1C2YbGcgh",
  "key30": "27w94NHojVkVhzGgWHzDPSNa9s9efHif22YaPckQ3pG8ATSSwDhuuDek7nJLPS3qyA1irCoWUYs12wH3KxVTNS3i",
  "key31": "4mmAiKF82eQXWkdLCvZyGDruCtn3G2pECeH43osP1263F9rxjMMFp6mHGBzcaEhjZvqeym9Ky3rsGs27ahXw2xZj",
  "key32": "b65msQySMDuDuKWfQ1dRc2qCRiBnb7LtbpVdJPUGLyPe4mBR5XvprzfpkAQe4B4jhDFuJN8VSBK2qPmv7xRCKUc",
  "key33": "5BG8ugHCDUTUvcXmNQMKn27JoiGiqWfQ3bV19YxAH2DWUwrb5eEiRbw886ALecRMxJGRQMQ3uSrrgkKWEucLPR6t",
  "key34": "4CdvaPnwpDWFH5ZX7SNuSXmbWDQxLehyLx3DQekjgRzFBTzfmUodgVhGeDAxwwhDQ3zJDLf6hbJnZZhhQgjqkd8L",
  "key35": "9BsDrMCv9hfPtRqXxd3VN2R2o5fk8TPbFCMpQ14Q2bWqRjSov7CX3UUsSVvxZpSbFm5NcqWySGp6GzBFiscA8tF",
  "key36": "4PiauSiFxm6HaDRER29WxK9Wq26xsYiwTzBUciYpCbQSbsgR2A9n6bLsHNGNK26aV14WrS15Wm6eQqEFgNBxXimT",
  "key37": "bhLkKxy5XzVjdZma6AnGgWzSYsSp5y7FsGqqZBzso2j9iGCCFCUBjPx8c2JYg6vik239UNsQs9eAMTgw6Y971m2",
  "key38": "36TpXzLHQsCWScwe4keXogYz1sfyEhwke8N4LwzSC3FD5bViGvVX9N9ggEyMTYXcQGNEitQQBuTi1cGM6gtAtBEf",
  "key39": "43pxwxvPjX66my6W4CND7FpNth4C2t4EyKnYbWZpSH3tYMhQLTW35gZJ3Sce3xNAumCwV48jo6syBPuMAqtnuhH3"
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
