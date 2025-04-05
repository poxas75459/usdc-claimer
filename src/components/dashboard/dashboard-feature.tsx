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
    "5nkVdeKESLShSazVAWFbUqypzmr9zU1QXKPvKYotZZ75VQoc89NZaG6vs6ioY1tQkiT7tEQHNJc8G31gGGCAbqqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWagvKvn6Ufc11gLgz6KFfh9LKVigUxshAEebHMQjndEAtPrBPGxow6Rhs3K1NJtaJ6Hg77KD8QKdvo5NR4bbWf",
  "key1": "264Uk6nHpjATHp5D6pif75teKXvYd3PTTfxacmqAgaudBfGMCPwppsPa85xMkTeCznNjuGSuuZ3tWXtyKDCmnaGu",
  "key2": "iQbwhhmifP1AMd1fUwLd8r5AZXsyH1MzJc9nAbhGK93prPPu56WaTkjMW9KdZtc5wLJ4koq1L3LkKwch8sodMdm",
  "key3": "4Lh316UP8Dacu6EePTGJWg8xb9BSNYznxmH32Y8SyvRbfGsPX1i46JHaSAYvFpmEkuv5VFz59i2vKbvPWT5ZU5PL",
  "key4": "2BGAPMa9MhvbuPFKn2AD4fFPEqce4qmuYDme9hgDgMJEXByWYEdCYNsQ2GYjz4Xvb3UATi8NJ7SfEbAfQUrE4w1w",
  "key5": "2KLURhU8xAuaxfGjr4Ejn1yVvXnbj1LCEpMEBe1SreT81o37uND6dYVh3oq3wj1iWSgTrf6rZZ3hiFx9gLxaJ171",
  "key6": "4JGqcqamkNs3UU6HYH3XUUXfRFYTwwpD6EipibpoSy8sYnNyfPkbd1Ng7g2c7WbwqnQPrMf3wQHkceqMBN1oPdnn",
  "key7": "4wSReYx6HEGDdamcRAd8NqWfS4ryA37qhK2G3qe7V3suXiHWXdC3LS9rdLfAZTV9NdEyzp7iJuYCR3x4wn7zKeUR",
  "key8": "2F2cMYowP4z2R7eWCJkMxR7DBV62KCkuueVLp5PY6dXSYu4CisTQNHFPyhXNGiWXCbQdM7PbYDGHSpcgFJUsewtv",
  "key9": "3hDj9CrNpZZPRpArPnLN7QVL28RYGZbqWnSTGfyfXJEPefqj6wMKA9kRKBrEEuxihWiBiv6HzLQJcw3SeeErjwTZ",
  "key10": "64ucpVqPh72ayTyLVjZo2GN9nsvZuR3EgRa5kBbFUT1bGQRXCYFahBURpkaBDmTdbEjJtrvUonK4L3EUnbLMwmFf",
  "key11": "2w6WRjXmzACKBD576jsSe5irBvFV1bwGbV2CPTBEueVpjmA13dnT8ibF6XFuC791cxPgW74kB35CPuLVZVFHRPvk",
  "key12": "5uqewyKXuzQ91eu7AiDHXtHTmXRkpmJrVNmQPUmxRkrV2YuvJQfRRpJkTix92xpKmBfLAnZK2svKYyWgTiDQ5r96",
  "key13": "4Lh43rDrq9PqpmTDjgjHwKXGnQmSomNuBQ3gRbuxXSfpkPiVM9Z6fyH6KtnRDv3PkH2QP99q5RUkNvRRXpDmm2JH",
  "key14": "4RzuxfhUEQaxdwWtouYWjhmqGBdM2GWHjjfExHJ771T5oAv53t7n7CEzqs8FZqUHkGhh27uzzV4TaSC1vtXDCeL2",
  "key15": "3rQJoaUoi2r3fuZ4ydUPF21WV95MHdTzfRnc5N86mCP3nKvJCB8zPGkPejBQKZ1hGwbndAVdnEfocS6U9rjiMcgt",
  "key16": "41CqryHVTKhnzgCXYimYQqW7a8tyLWHTaWPyMg45cSvt2PSWh9fVjk4EMZtM2Q2JGzoJQKpbBih53YPtodQ7cA5U",
  "key17": "MrRtGkhUDgNmb4kX5BzRY89VJf9WA2W57XQEytTMQaUU5FU7Xq5R4xLbX5s9ctrifgQ6gmni4sHioLUFb7ezv64",
  "key18": "2VzJo1uKKFkxCL5bef1TWaq74y82cuYvkRRyxmEzBZFxSmMdGDSS6ZJWJVDKvAiZdbB3nhEWs1PScth8NQPDs4DA",
  "key19": "4qv7KFtptBgcTsLsrq6K5vpwAzmQEnQhEcwxh7L3DTi1Cc2q8qWv352SupxaVmPugjvY9J9sNg1aAJejJjnN8xFq",
  "key20": "2AKb4Du2gBMu6R62czPRtzdbMrUidrAbP6uzpAGDonx7eWL9d5QjSjt1PQhak7SwJjyxAXdMoJCBXKy3oeaWu45v",
  "key21": "Zztf6Lcq4exkst4bkboumebTT61sf5exzQd6hkKkftZhX1eFt2azEG9yzZUpL2zTqDurDav8yzrCe4DVkSMEksN",
  "key22": "4VK2sfbuSRUTsv5N4e9rw5syhbXXLvvpyUVaAvZtYLdoXW6bEhn8QzLDE4ejxtVobDbQWttxAU7KkFSGGBVbdV8e",
  "key23": "5jsQbedLL6a7E5dwyvMWnkzcW9tKcYmgNxfuZsVuHv7PxouAR1Pxe32uxf1CC8NrM5Au6wLjge5bNucXH25gnjMh",
  "key24": "5h5dQixg7CN4XwQSs9n1Vqrqoo2SZpjZ6MMUURMGmzGD4Y2Md38dM8poDCnCB1gLwb1qNC88LjBxDQFqCQ1TvfcP",
  "key25": "5g2zAnP5FMacuMB9UHBSLAM1s9DrRLVfrWVYkedQPqYTHE8kxfurKSvpSUbY9oi12VrDuDuCDxzAgMwXazrEW22K",
  "key26": "2UPuWBH9dqBGbow9dxvyQqKiQPGfxnXdohbEmZRB2AQzzWdBg3NoJDtC5PetVVsf7ZXCKLFLkXygAFerStYKswtD",
  "key27": "aeCmFJSmHSiNojaHTWEmuM6rq1S6Z1T4A3yHHE5hGsZFQhStNNSWM9Z5aWEnTb72jcvFtaeHoDAENQh1heZqbXW"
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
