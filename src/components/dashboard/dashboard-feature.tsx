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
    "gYvuHCus1ia6uTwmzBCveFgV139FX7R8CYsoKme5RcqHC5TjFL2Mh4tu6XxiT1gwdpk6Crb1iRmH3mURbYnE76w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9tFuUZZsHt4G4YAtS3rocPnvS381ztUtzjh5t5rZDzabwcjJf5JacLCDH4UGfEgVCpMAGADR9anfp3aUC6zNgc",
  "key1": "2uktfdDYQcRpnUcWyi9FgnK2BYCwhCTBQVp49hNYZs1ybb4YRaqqGL2qQBxNNp3z57JsinjPkM8NQ2dkVPws6g7S",
  "key2": "3Es6yqr8XwsqSLsPaHSPxWNNAz9xQ2UTkam2KahBhk9MUFcD1sKBVXAevsL7M9X9NvqspNrJySmw8RFFGVgx4Tc3",
  "key3": "3xhYFBTW8ahXhTM7RRAJmkzGydvaHRXewTJQoEwuEtexiQoFh3VVo8KPgdAgJqtFJqygaGXaCqHHi2nLcQFRxhy6",
  "key4": "5RsL1zLKi97BQCbwmg3QofhQggF5PJ9E5MPngdMVDk7BnX12w8HAwfaevwM2CP7ujHNu88ZH9NyTxz51YNLPDnNt",
  "key5": "3P1HXo5FmTAPE2bYPoXYX7mUVPy11YdAHTG2oiDPvY18sPzjaBvt2FG4kT6By7wAj1Lvq1MmNVHrtoXh2kG7iHq9",
  "key6": "5oV8dtfWgSQHBcXyAS51bqcrRBK5BNgrr4V817WcjJ7JpixxJ7UweWoSVDwaxdHBydJ1QKScRdAXeiTi3E2UETFg",
  "key7": "5GKzHjjsmN5cUTzTmuT7GZdbHTg2tWHJ2cU3yjbEiqRPo6TqYJ2CEMy5Jvie8CW5ERTvcSgLvfWJLJBRMu7sptud",
  "key8": "4QnQNuJgD2LMtGEBx1TLch1k6q9Dixx2hyiS3GTmEDyErSbtTETYPedTLFosVbwiceoYnDZmc3Mzo8nqxB3Ji6ZD",
  "key9": "4HS6krfUQnYNyy5psiXTPBQ9Bqa2y5NeEzNKMJdKF5DuHpPvASAPMWiJB3t8LH51G6cYbnJXkFsU817PAVoEBC6R",
  "key10": "27Ujj5KpGbQXnY467k7xiweFPN6ebEhMNj8HSM6Sv8bDBwALsF69PTdpHHURzXcgXV9yvkVTqLNPBRzbGU6CUdUy",
  "key11": "5Yb1TsUno83M4DtB3XkC1aK2XJVZQFnu6B6EZzRSYpvMye6uaZgNM8VztWnyUMtobRi6FkDMEukq9LSQGqxguL7m",
  "key12": "4ruNa9ukDQ21w392wZGCKr4XWNX2YgNoC7ZLfcRkCdqn9hLVJZU3s1urnqE58BGUXobFL5SXWrwT1ouChx9s46wg",
  "key13": "547czoMrNayhZ4JYKXJwHx8Nx8ae2BGuStUrBzbXAVwcr17RPSez31Da9uFjfSj79gGDbyz2A3QxNtFv5Ps6Yi5W",
  "key14": "9oF6r75Lo2mLXQuWvBo89mcRASJ8zF7oCkLPecJh5vhJiDmeMq1hJWnXs1CxPVgH7cAEq14zcCLonBdRbjUbpED",
  "key15": "2xZ7yyV4s1jYpX55Rq7DHwgDHtS2kMBK5dtSdwvM3CvFy9oM7eDxKa97Mz6baZYLzzPJN6q8JTKUaAPx3dSPJSHq",
  "key16": "4w2p84Mofi7w5rJgSj4xrgWFU94SjnEniGpWLNLnPRWFbL9jUWJuqop6SxRFGFHFmyA9UuJHyXC7XX6bQYgNqPun",
  "key17": "2ZEpku8bcWySfnhf2wMRub68DQqR4uZ9mSJaAS16tajgHUTX591isPoL3usRyzNtBq69YSopxdMnv7jZ2VoYuBWu",
  "key18": "3L3nFY8BL9KLBftALnwB4Gg5RsXDd4Hgh1TNxxCmrwWS47q1CFvqJ33kJMK4Rxyc5WsaucTpbyXd3jzsEgXd9VqC",
  "key19": "2JzCL8uPM63aV3Jg7moqtHFXUpxD13CzZQCTGeAGWBLij6xAfbJARc41D78QuiaAMh7UEytasC68PWGCGcAh6nLu",
  "key20": "617LyxnhMqtUHW9VqSX6nwe5gmy1bdWdUEGgtRuF35mxXcZrc6iQujEGybGPKGhkRwwzVzpyC9fEnizdCEwhHWRA",
  "key21": "3kS4G4JNSGy6K4ZZxcX5Y9R33cX32i4KHj5ygt4icywDyszYvbe4ovzVGquDkZTaZY9xpDUFuFEBfdqsBrAmE97w",
  "key22": "3vx5fNseZ8Kj6XKrKDkaPNNkcEbRufCXKPHBC3C8tgX1HkGUdUf7obdtLgHJcyJwirV7DJVGYHy3hy3JRmiQhBvN",
  "key23": "abSYivU8K4jyuVPR5gNWaDyREha6KkuR4KnNn2ytRdi6xY7rSVgSnoTfC8mvJ7FhvdgLjdPZePkR8UUWAZwvawW",
  "key24": "vWdcnqhwcWrjmLyBp6Koqx8XkiuCjrfZD6TmiBwvDbDKeDENQBcFp7MFbX7GyVMEdqTQM58xwY3A7RHXGKc7ZiZ",
  "key25": "5S5JVQzyapPVtqDvozoeiwJGPArEncQqmFYEm43o1b1ZN51fa73UfVP1YW8pbT6Kxjc5cpgVcw5h7rZtL3ZHBsGt",
  "key26": "2NoKGAYHmBFeajggNpzJ6E8RfXdqvWizTph1ydEpeaN7a6wH614No8yooQpKQbbc2qALocJcNnD6CM4ezhgYAU19",
  "key27": "54mBxPzAF9cLKVqgyubDZwE2a2NHFiiLiwQJZgRR9dzHbqA6hHSy6Pwh4RFYoAwF5b5TuRWFV9zxsBiudmdedRS5",
  "key28": "2fW2w8dBuzEDW92rcXfVFL1BXNfbmtjjbuDrHL4M3qerWRFJUrKw4YcdzgSP4ctxFZWUpdKqhQjv9pQfHCm3CtyH",
  "key29": "5mrqzFgdHan2LNcSHQwvAQ7hrdoftseTBVdnMoFiSYsBry2MytD6D4VoivoGVvCLGL7CbeyotgXBNd1zhhWQ16jT",
  "key30": "2E8UHNURR3e89yDGjkMKaiGiZSYdMeKt2nSXthYrUWnd5rurJhXg12mZj8VS3sNapnwucPpi9ZLLChMkhUWJEa57",
  "key31": "3zFr9FCoAGoP5JQXoF9z4ysy8fwZZf4QWCYUBn7SfzTkc623HDAQY9Rteakov8fAxS377qoNgQzzvsEGfC6bckRf",
  "key32": "3zHJYRsKpMN9YGoCrCMbQvGgAmPDNjjNcFWs19znQ1RvDNesmfyQNC6xMJigRggR3wjwSQQCRjs9vFaxyMyueoMx",
  "key33": "3nMX6yUHu8a1uoSN9P6sX7VGVC9WF3GouBDL39zxZpNdhWeG6V1kZfuzR1xTQEArmE8RYnctK7c1d99ffdBezici",
  "key34": "4JmuW4hPqfHa8nwzbAokaqrH263QiDs1g7r6aCBmGnExdxqE1zWxBaA5zuuAXSFTBu6YHgFJAtJPn782TBZHs2J",
  "key35": "2699z3Y7hWAVTisgu327D2XxrPZLme1n5Uxmg4FXe26dFqDJzi3DKbhEKB4XQrkqDaoEWoUVDimDwzHHvFfnRJ4a"
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
