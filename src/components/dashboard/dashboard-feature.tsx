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
    "2S8mZYvUQaVAMVFNJdYKhT5fU2HYe1w6Nzd2RW8Jcv6UbinekucH2YcWJtXFvL3ASovLy7bCJTgii1DLegdmZyfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeToKZ3WLXjQE1XQjXrso9Fis3WBgDMm1an3EEENtNTZAzzSnwMyTujQQVhiaeiuhpBpE4LCUi12cTv1ye5mJc",
  "key1": "aDhQyxFmWGpQcfUi4ub1ehN4T9m56za7oa9HRHCVg9dBqANFDcSHHyHkCHHxvKYTLY4eirho56RpfJ5SPon8L3J",
  "key2": "43qYLTKpMVxQuUbuGgcgkeNtRDMxL6Aw3ARdvzANUXzsnF4MUEbQxBnKr5jju7t8APj1kYhMobL47LAtDVHH71eJ",
  "key3": "3VRdoXRJVC8vbQAw5h7zbxYAE8p8CdCEvbi9gLKRaY3M2LEWdL1HzACjC1BDzeAECRVW52hhSH6gCGzDvJg5kSTR",
  "key4": "ugQ5tkrmcNsCR5gDGcX21cAdwEQtSrzvZPsc3HNkRESbLwt73vW4jUQtZzyFXqsKdxJQsaRACYioqQR4XNbpUEk",
  "key5": "RMzaPwEFNEEHTtwJRzmWNuyF5q1Rxe6JAmK7dWJ6MjTcK334yQn2RfCWHmvEcUraEg5RvZTqvYTWFLKCGp5wkq5",
  "key6": "KFG2hafmc2PBybBHYYtXFfmbrN2dHfq85fU3hXmje5x42hdzktpS1ShnQszrXuftnLh3ZVe9qZ3NiinrXeXbGCf",
  "key7": "4nzS865V6vYNoknZpBzVztpLT3jjL6Rzwbictiv4GERDwUvenSagXhSfB6aDFjPupZjnjuQFBuyfArvbyp549Ymq",
  "key8": "5TrmTzSAMi7pnkXLF2aMsT4XVvM9tk4NNm7tuUhkVJPVZTzjZDrx6cxqo7iEG2GowEPHBiXXMzL5bAPM6mcCZMVJ",
  "key9": "3RN4tzs8vAjdjSi1miBGka9VsS684QCzwUrKmD4MCtQRDnfUkTja9VTVSCM1ibWCADc7VndUT3upnjh117ETSb3Z",
  "key10": "4fS873QnsaaJrQBqesG2efu2pvhpZbhdWQWCghSzLu8rvnXb1TRA1C7fCBU67maYfjAqXV8vPNR553oimccFA83V",
  "key11": "129HXPgF79ULHmRpvkutdfTb3cAJcVDhSv2Wkwhc7Lzm33pEA8TVH4kuiT65LM2nVcnw68UJUjzdgJnaaPVGGX6t",
  "key12": "3cP5W2U24wM8P9orc91BcNYgs27CaM8WQtBHSz98MQo5B74mmy1d6W5cvVqFR5FkxmsmntASV6SRU4CFG8u4fzaF",
  "key13": "42TyLTxiz1s4PtJeLQjQhBB9GQhAbMqNgaiHe2GJv2erV3r1N7d7Vxqzg1xTYnXJ6QSbb2dLrHQJvU11Bf6pADtw",
  "key14": "3LPku456XQGcgLXGGgFQRVivyHsKR9JdB5aqX2UM5De1foH2Sjzs82jTNQ588Z9fQAy3acMNGxc7Ytcd2uL5o42U",
  "key15": "5mE8RGxEGoYvbyiha6Qy5v1vc9ZgMNq3UNKtGQvXu5pAtQRZxAg1YR8LwoXtyvR6nKxn2yAC2wG21Ftr8CBcu4xm",
  "key16": "wFkSCaDrAWpjYpb1NDXuN4sDNpfWJVr1ujvcdwnXxL7by7y6vqZ2iSFqDcyRQxDmsQR9ibrMz7SRhpNqDnB3zTE",
  "key17": "3RV3tXPybS2NuumUhUPJo1X19dTSWfiSDqi6gPKLmyxdXP6tYNR61mXEx7XhmPkGAPYXC4T1zdrZq4Y9w2ZNmjyZ",
  "key18": "U8nnKFo8PhvLq8iDKn342vHmnZibTtm1HxVBf1LPT4szWwAEfEz7gGVv6TNKBnN2XAo3uNM6ADzi5Kty18gNv7Z",
  "key19": "2BJxgNCnFpS4KbAWNh5aKZqspstwtJ5cHFMvxfPdCrTUZxZkD9MqT7B2Xt4wgUKD3xSM8Hzoh1YtkvmCqttNpsHS",
  "key20": "3hNSi69HXEjxdQwHqPfkH8VwBtRCj9rwRPTqx56ownDqGQ5vjNgiohhcFXmhLB25Lx3jPMDvzumuBEfpewdxp6AT",
  "key21": "5tpN6VL9nF6vHdh1Ga5nPfgcwWx3HguNU6vtC4SESY3kmsAskPpVojDNZbNmmPB5vbbtK7oWgRUUJBKxK7GwqA3",
  "key22": "4WnqDauYKzfrWSjjKPjBmLNahShrfP8QfV7VeRZKkn66dpA2dpAiXPPZtfFnszgcCBkCFm1QRNcv7B7ZASsHJNHe",
  "key23": "2uE2ZmGB5D5hUfaq8xVDExREHHsCh2ngGD1z3w7w8reymEtHSTP7irfcLRrcTrh1emU6MVMtmwNaAktnYVEopGmn",
  "key24": "4Vi474VKA45n92H96eUc8BB8BfSsR4SwYsq216V8MiaQaVrZuGnHHnfYjSBoSKcBgzPKRc3ED8MBz9v8D3SZWeDd",
  "key25": "2293Wn35jmvurEzsUHSt2Hf7u4wDF1Ae6x33s8NLYAd1xHtTMvt5PwSFMViayoS26z2zS5qpGNvhLH1ZKuhwHdbL",
  "key26": "25XQzZAMELx66GTHh3VYDgAheZqKP5qEw8SED58gKNQaVkPYNTWP94fb343ytFGaiTkWcDMZsvL4XvhPkvrKPhKQ",
  "key27": "PB9UHbynSNf4EJp1ypyz5LoNSUZN34yftwzNFMffZMaJArsjGiodzSy6uYF8FFY5iSihHaSTSrz8jAuxApatyDn",
  "key28": "5rL7GK2cVDdpa9VvdXygDkxFoMyzWYikD8yN6fptLEtbfPt5B6GLQF1E969Fv8JVgiwWgCGvaZg9TPsEgv3zeAor",
  "key29": "5AToQq9DaAZP3JCMCrD5r2G8p4QL1kKwpG6DR4MxQmrDvS5LFHhbqUXumPJDmKKnyFfuamL8jNmjaVGssBQPKT3K",
  "key30": "5LN4vKpajZng1rGdujEVz6dxBQF14wprREwoMJXoGBx7ADy7QeScutDyzA9bFKPuYucD2apvTqtVb6oG7Bo38fz3",
  "key31": "6vUid5nLwYydcrGTs7ndtCDSRmYQfNET6NWLcHD88PvfpiYbgccd5qaYpnNCuXeYXLaFAaUyWFYw1ShCHW2zT9o",
  "key32": "5cnsqbZNkjYMMeMsdMEkx5dP5cwTNMvSiyRjxBLSEm5ccY6RrRtSKKW9convNtum1z7su9CVYi9qgQ3FH2aKMr4b",
  "key33": "5CeBqyzrnSk4BKruoADtk4mD4drxS3UiySQeNKsP1iM6rQfzhzXi8bGPEraqjnAH2rLbtSav1VP4E1KxrM46YzJZ",
  "key34": "HnXFoVi8mjPBXnGXoEyXcZZaFj5jdDbKSJ7qZS3VRE5vn3JbcidgEf6APdW3pcWsbHeWpye6TKHgu7UZCMHKUyq",
  "key35": "2SCeFbD5KDVXWhh94bAFdLWh3dTS9cuwk6si3TA3VJcPDEmxeQ9LLZ58hMCTPugWFDU1JmEdyjGZxgdBkEFMj513"
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
