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
    "5fo6tuURkrHj6zK2ZWNJKwUYfk1RNnFzNYfPtEM1Y8ryGMLKq7JmPXL57RE9vqJ168bHeP2BqfL1DSnoBFVD3s4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2pGjid9zXL9TXrrkY8595W5sR6LNcx4XFRf3dQeSawyBtKUZosYm3td3w4Y8SYgFNiR6HjE2fZfjL1TAqjNaS8",
  "key1": "4UA8AcHeMDXkz33Cj2XGVX6ZYB8qb4gYTcACDzPoECHVAeK38fMUZa1BFB1Lnfto2ZYGwQMLneUnLjnLnxKkbZD4",
  "key2": "2uKiNCjCzk4pwmV5PzxjyUUMZSxYTEFwDW2U9eHkDkBmM4Hszm8XAdV51nA8Mg7hPapFGXkwkiga1crD8d3TY43D",
  "key3": "3hPeEhS1mTPqa4n6kfD6sRA1YEqZRV997Z8BEVLx7n35Lo5dMqALEDL287KBs9nHwSZN2gXpNg7ER9vkp6zvDeDy",
  "key4": "3KtWacFHTSLEtkDKuMpH4pxw2xQZ8UeQW6n1oQwc1frFGGFvxnHSpVsHAgMN9mz3PpLMQEPWs5Kxfnzn9vvLS8Re",
  "key5": "5oiEHZvNLBCNEQNpnGbjHZ11Hj4juxF7XvK88LcFY4hGBiRVXh2ZeF8HQNQRyQZ8fmER8nru3npvm92JDdaArR6f",
  "key6": "2Qx5yxkymSCd2JSLxtrbk5wijtDjGT8XfJ2KF8cnSSsihkSbkTMopzS8nojCjXS4i8yuZgbZQMYWdn2XFHNt7SLw",
  "key7": "qyYcskJ839c575yVvjF2Rbw1WMTPVfCoVecxAMjhkERM8FAhFYhFQSC47oWzABWssUUwi6Vr6fed1mRkmzZWrCu",
  "key8": "49dqgade6rD52BAWEehJuf4qmt6RNpfgosgtj2MZFadADyiPuHHmSAWYEyQt25joATrHgcMzgQ3sdHH29WeS8zQZ",
  "key9": "2A4LmJPmkCwVNKMtNP6v4zVyvrx8iycnoAbYHF2rC2hQvbm4n1mTXvwq7ezKBz74HRSLpKgzm246vQECGxhN2xjt",
  "key10": "rwRFye6xCzH1MRqDo8nm22sxKhynaFMCYQjyMnBPKQRvQVEfcBF1WFwP5yfG8UdMHUpyjJeD3mvk5ddiYtuGHX4",
  "key11": "4ct5zokYHbgiPPN4oZDnAtGcqnMyNUhJ3EyPgBHgU7AeUiuD2m4hnMxCAQvs7KinGbybabfAFbuCTTumVWpBn8AY",
  "key12": "2hqwfboMTHcLzR77rwYGA1uixQdG76SarNkKFZ3QR2NHvRYSwyZKTZ6cc23G1jjxP7geWpozctn9HCr8ZUPRPsrd",
  "key13": "4FkmnG6i6jBPUTzQPyUnpNoRcbU5kvzjkFipJDB1S45M3LzpC8ANT8cE81haFDrk13enSRUvrx8q25Jpxqt2Smv5",
  "key14": "2H4DY6iwU8GwmxzNc8eLaRFaAo87zY9tJ9z2Bvf9PBWocZnFDoHcGeqQFQNt69eeAMEcphAadeHWYq4zDbtUEzAi",
  "key15": "hYW7k97GtG5brnXoE4epJYo3L5pRU1PsMdU11NgRPdczNg2NYLKCGuLpGgwFRm3LrYr7CwCN4vr3jmSveuxC9MP",
  "key16": "2SihuyjF7eBcQSjnVyJrobzwkt9d43eQo8kyNYtidhMv5wXeRPyQ16mecHoXFNMHjKuXU3WQp3bxJbF5UgR7ndJY",
  "key17": "5wDX4r7HmD7dw8jSmySBFJDRbNjZyx36oMu8wyKkCGTu6jbzci1CPDFLVuE7NgjBhrjbTXQ9zwtWe8RfHn3Nc53M",
  "key18": "39KAYnbZVprspV1zBKGz5gzrX9gVrhmiCuid3rxad4NyfAYzPbjks99Xpnro9Tesha1qgtTbuLo3FwzomVHMENP7",
  "key19": "4HnEG9YTBvwpdKN9NVEmgj6s9KLEb6CAE3w7gCJqGYghAXTxNfYq55v3Y4P19eNo6oL3vSDWzMHufE9D9Z9tpo65",
  "key20": "28gvGQjm6uqsdcrrDye376tTzmvoFndq3kNP497yVntZ8d5SWUHmwWek2KycGmibvcSRXUyi79bHRxN51kgcqFcn",
  "key21": "3xn5zsQZrMrwonn2Up2auEyfRbd8LrMrzDk1cvXfez9dXVE1kgHDi687d8UURsUxtvcgRAGALP4FEgQRtKAckihR",
  "key22": "2BUFf8SGEvoXYLgAyCKTFfm2wZzwjRM5oZEduZrmfY7w1dnkNZgN373N9eacaWdeQ9XgGiZGLxUeQDE9gfxtwicZ",
  "key23": "4WLysWYFhfAyWdr7uPCz1jZM96DhjsGfZsBpij8rPReVgUd8VwCisDhHaqgZxMdvjhHMsvUrAnmPV2yWNtBQStvx",
  "key24": "2XyucfWBumbmd3K4PF6xY2xg2PWgqqx8sy3Wmste6SBXsh9fRzbmyosBnq9EYDjBXBSfuCpSFKePtQRZyEYHrjve",
  "key25": "3mfn2x1YQhgAvqFBhD9Hz3ZpTBp8VL7N5Sqm9DxvipsfZCvQjnm5GntHFmGfJ2yMRchyik8jNej6fmYfcZ5bqEj5",
  "key26": "3GvUUg7PxKtKDiFomvaM3TBrBQnTz4dXTjSPtzafjct3nLGDVpFVM9WueY1eR8KF7mGZVU2nUwtuv5GXjYSm4x28",
  "key27": "g3ghxG9HFpFvpXrxpgEQrULonQZU3FodYFWvprctQudgzqPU6SrrZL4xWQkDtvAj1Ld4QUa4KQCFzP6WEyEpD7P",
  "key28": "5ZDsaTRqH9Mz1TGgmYzVS1sEQFcTXHnNXwnuTLXRAx15oS8EN1a7Ws8iKTP8Hj4yRFJGcXp3kFLRsQXbhgf61i4n",
  "key29": "5UKFAVWDEfQf4mDu9rg4Nqo3VZBK6qxPjs5DAL2mMNNEr4pkTxt39gyLAiPcz752QtPVp1wT3nkJbykE97FVydSP",
  "key30": "4BEwrVB2SMRaEtMN4U7HybxocmyzL8gS7N5Ehoo915XLMsbhE8sGTAKphaNHMRhjmm5GBpu7cbwgUGdwgsADrr68",
  "key31": "3xgG7PmUC9NMET9wWAgByifoPBwJRC7KLuCVK9nivyK5uGbt3pjfTAm1Z6iww1i4L692Y6gLpEnMG7FTeRYRsRYa",
  "key32": "2ZWXenYKoKNK26vujDUxM57XB484YQ8ABXNVsC5T4M5yQ7jxQpa1AoNbRRmMQeHcoSKtrffzQEzRKNjZFoPrvDNd",
  "key33": "4RvXhB8LqBtNr39uHKtfFcGdDVKbs2SpCnGDJ1woGt6RCr2LRtzPizyJQtEhRJhZqQXG4wUjASX3pecF3SGd2iA8",
  "key34": "5f5rVJHiG9QTvci8YyHa99ReCVTLceJgS1tspRrGjyn29pUGuanavaouCNWsfyWKQBXnDYP9rvka15sWnGzM17QH"
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
