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
    "26U5HhM1XyMmW8EVPKq3UisGjdewiVBXon4d6QmnPtGvGQfpsXFwnR9RAjNijX39SkJxGygdff9kpHfzoJr72ZEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUcUGmTZ9v32MUdUJmdVtv3sZhEwsoBQkBR5WFm8x6Qbz96GArDtjBBdJgRY9gG7yojzJq74NHsjE7jkZzQE4VM",
  "key1": "4pxyJD1adveAGG6kL1AqnFZwbsi66ZFXMxxPLJXh4cfT1obeuKAyRnGQFyfS3azSoDzG3uFVce2zcgZSvBKXnprd",
  "key2": "5HkoMUkDmfkL1iQDahHZ8vCCdiWKui7TajdFyJ8sucHyzJyqroC4Tqmdq899PvNffRDLusWF4FskaaEcawQZfzzS",
  "key3": "5WSmjkjeMWwkXHCsM3Ate43xTjGgwdCfyVgStUBKEd3FCVrFEG3bTYBgN714XCRL4i65fQziTLJ9BXdkGqBCZWF",
  "key4": "3pfYXaFwf9qV6keNmqgik2Wo4Zf3v9DbKFG3i9FdeDufQGnrb5LVKiFHjJYkSzSn5SYaAL4u3mmM2vBQdiYGmP1A",
  "key5": "4NS6xVapGVsXKzHNteiFaGoTx6kjqnHm8GVE2p2nTAo9nTuUokbpsNyGyK8s6siUFeT5B2ZewkqVfAahw6FHu5zw",
  "key6": "4c3FGaztPWHJKyNPPzZWGxecteMv127ymCEaKPrpxYHZHvDGJYPo3VxL9L9mtj6yrwwHDvjGyPpzdDcNpaU8xoLn",
  "key7": "2Mcg6hZ2G1c3d8PUaspr8minJ5xnxtaaj3Z7CitUqriJKart6PmAjFPqi8vojoX7x1MCsse7pYg9F7yzzTfjEsxd",
  "key8": "3nyVq9rBWHoNEaVxnWkz7N4KgdGANYGy77EdnXYdZc843UPm4ch326HpU8fvHoT1ZzsdzRQDu3EL6bZ1ygtL2emg",
  "key9": "27saYEo2rCjtdUR2tTUtRsRNTSN22mgwZoFnnt4KYmumgXRRWwUmR3ywF4fDSmXtBVFdXfBzPbwJhYhX6mqKsNna",
  "key10": "4fu1otBKGAGKFF6EZit3oiBzu7wNSnnna8ufqQ51W4PZQth87ALr4cqaF5docHb3rLjaDf1LkWtmRNTHMimwX9SE",
  "key11": "239DcG1aeYVG8pbpuNiMdADJrNhA1AoAj7BiJsprChdfqEkHoJSRtFwe2kqicVgLJwLFgTXQtpCXrqsTzT1puYC4",
  "key12": "3UFQ642t1TDAbPTXnNkeBLMDMgBzywvXq6E8qVFNHmKJiqUzRhJwGgNLLN35sQYTj2wnQ4RHjXytYNbsFav5fHWM",
  "key13": "58u1GMkvUV9o67ekiZwMDyEu64zB7Qjzk4V9NaZ5BsapksfWmXfjTZar8SyxPRPh5sjsnt6gqGTF9FpjHKvoefJ4",
  "key14": "T5YFsirvENx9hiVk9EQcPzqQ4uyVd8nn9tLbsWPJ6xNLwVJZFFVztQqiZ8aRD2uhvadGbuMLsBq2JxR3Ny2b2kK",
  "key15": "3a33JF2zc3SxepszDL7GPoMycW3DvE8FMZXbeiFaCZXe9uaDbY2hBy8UG4oWBGZ2LMGsLkXfvUXGr3C5daf7p6Q5",
  "key16": "3sFHa4yvUFkiFte7PZ39b7Ze6ydWLhaMnSgkefamiHGeux3iqEXxZRkj6eeiJhh7y7tKESRsKgRC5sfDmtHCZn3T",
  "key17": "22aytDyXmzMw7ozMJDJAkGa9upgA4J95QHXh3tDjVbVRfgE2riq6xgrTVxVj2ZDbVF25XRTtPtCbTzW5Qz9y4Jk3",
  "key18": "2St5Q9kna5KJSR6NLbh2fggDTuGf99D25Vo5sir2DsWGqZuae6wbvF3eNexfmva4honMcYd8Uc4ru23hU2MZBTTv",
  "key19": "2H1nhybojWPrrDen3aF9YXJ9BTYxX4KXzmzzoCX543CNEty1JPjbu5yDiPVwfFuDeb5L6JvqFuscWYisBADoSnhr",
  "key20": "31FCG9sBmL9iibhvhwEhdBiQVTDWPTB9T5VAZihzv4NzvsePC7XaJEsaRKKLjBS6QxBsqr2eDqmRFZcNrX1iQbx",
  "key21": "ZiB4ZvfCzXpXGS55dMUifUpro3suXrErgZGV3Hu65FNzLBFw2A8MQCA8ouLfrSoBikPactsMEtEnGgBcZuFzyMh",
  "key22": "3omieZXg9r7Q7W6FfP3NV34jLXAjPt3a27ZZhZiyMEwqmRPwVp1FXoxPTCWMSQm1iAp4daTxpQyC84HxTwaToQdy",
  "key23": "2ESN1RJFkQAk3p6z3yDfxmvSoXRyJ58cV7aMd1NNcgfrTHhRJwkKR3gvvruCfDSk9mVB5TndqbFEeUodfFJdZN1R",
  "key24": "4SW1ra85iNe6TvEUp759HNSWdWoRc5QpccmQgy8SEnqLZ6MCotXZfWdZ6csvbi9zQPEZbhhsPzDiVYCwFxXtDNXV",
  "key25": "4ozJ8tRTraVhbdHVMYEmUYQHpr3wseKHesXNomBUxa56tQSva9GUz5t8zyzaeZ39Rj4okCocE42KXLdwxB4xye6f",
  "key26": "3DpwL6kiWVjxJ6Rsf3pdHiNvgGUqtpi6jCQV3v6RzopKwn7rDmke1WiJnNjMYcCvrAx1wL6sS5oHrKx6xbCFYQmr",
  "key27": "2XeUeFWvvAf3XBznNNEAq4jKkUBRNJdvGuhCQntPxUWgQm9wijRYGZe3bigTKpMhcAac6CtgHvvGUKe6vT9X1u2p",
  "key28": "4W1jb3TSMWKM5C7PqnGfgWjmNAve4QRT8qvktMUUcsyHWgxPmt5x1r6qx8PyBESsaV4PLDJ7H7cxRrNsRBcT2YTg"
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
