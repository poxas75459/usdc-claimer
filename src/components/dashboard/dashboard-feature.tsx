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
    "3uAaEPReMnEhFCp7LDzUdkXqrAprAEyu5f539EvXcSPmNEvnqEPayvSPuQXFikhQ16nJUHMEPihUd4rQDe9NWKsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCpKcDMi8SXo9iAi2o7snZRUkJmAD4XfK6snba1NHjUjzGG3nuT1NmgaiEuqMtzbijRXSxozLnq8nVcW6VH13uE",
  "key1": "2EqgCmaB3W8bvNxGtoqYQLajtdwgmgnQSeTvYSeqq8RuRYdBSEK7kZoSQSFkHhxtkat4imn2aDTetUv2Axuv4mKw",
  "key2": "5h45Qz5y4pfpKvhXuafT2x3f3hqAcntreoMuK54FobxD6kvqbP9ZkeccPBUWwAn8vpMqBsBjqZ1vQeJrNKBNBSNj",
  "key3": "4ZEBxZ6n6YsKfHWKgjXS4dABMyP9CfRGafqFF98kQFaAroemBURSoqMd7DzZUZAeq9HgNUZ4GX34CHeMu3Hb4WAE",
  "key4": "5NMSSgQd2ZWUGqGjuTDWfVgeYsQ78jj9dXyMvUSVqUboAwSignkLqzYc9MbsYaCLRfGNR4uXSmRV4nNskjv8hjsT",
  "key5": "35rtty5X2MCbjMz3GhS2tmmMhoPWFeLmzniDffNSqBN8SWpRptWMgE1zPhTCRWawCayt5HKE4B88YNwqAiFYff1f",
  "key6": "4vS92F4wvasUVbaN2zfzaGySbo2Nc5H5AoJUQT6yAAQeq751bxN3fhaTUELMbFwWGfka1at3q6BZHki6k1ysbwQn",
  "key7": "kC22etmYmiJyLcbh1zhxKE1G6Htuh57zyX3sz36772DBzkBiAF4PxeZ8aa8XPyqoyhEba3K5Dz8EcS3KzTAyPxn",
  "key8": "28uH3g9BC3PFzUGE1RpHkPUEFbjLNwQCxr8ThppPGgA3b2s4ArcF7sFX3oeTUv86WPwcCoRm1VH38dLULhrbCSXW",
  "key9": "QDUzNq6MGEwdWH24C6YyXnT4YAd6C73TsbGnqAL8NFTg5r7zFnyucfMDqYaggjobYCUQWidCkTtur1e7DxTLCde",
  "key10": "4G2wm8KAP8yW1dx1Gtgpm7BkYDZCa5xNQMWXqvMBCkhewr1uhPDeqPRvuwW2ZLV1uzveWecHhE5gkdbNeUQ96B9Z",
  "key11": "42QrUSxw6FAggHXeHo5VChtdtK1psYnuyWBeSz2tsQUyTLgsUJPtRBvWQy3cSLbXctU6Ht7JXCxLg35TXBbDVCky",
  "key12": "3s759xShwEkp9bvQRdsMKhqz8byhA4fRLhEm33UXHq89yFhC82ZaxcHkFAq5wqEgMDgGCZLe3B2iyoRiKbGtrLRU",
  "key13": "X8VF7kZZkg9uex9Gne9DG1yRo4UCeSWB8Ji3zoY1UqsBehLCfGbhTRLDuuBbDLLmb1pg7gzJeKaUqV8iu4DgDZT",
  "key14": "3tRf1pAXrAiJ7qChqSVxWbA17KBqQd9t15TWtPwoGDVPPdwJaXxFDU4iJkHcH4mxuh9hQvzvxj1sqF4z5eZ7aXPi",
  "key15": "3fSZK6BsMXVhhhwKWxTfVVReLpmsX7JhzV7Vswyqy4qbg1DTLwMaejU2gKWd7vrgAcPEXJAigtiXHnGgwNARXkjM",
  "key16": "3U4Y7uQtfz34UC7ADBfUDfH6nWkk7X2BezcE61qpvXJjFLiMRexmspLFMCZ9T5eTARkc3raw3seRyD9pjPde3Wrd",
  "key17": "28AXkCuHQwsCHqvGY4wjGXQGPeAH1cJ9S1a2MB3FVpyeAHPdLMYSGeKbo3HE6Kg8zHeZJKu19TLbBAZYANxWJjXt",
  "key18": "4pC4Szh7mxTumdcvD5AJ2gr9HbLA22N6fBrHtG9bfV6LvDAxT214CVe9p9hkqE7AboCNobVQdGeBKSxNCQQgWwwm",
  "key19": "4zUNeEACoQxsAzgbTgba1aDTDMWonRqSf1ypGfPCDs1ogSX5GZsNumVYji6NUosYUQbAHNvmutEaHpTudGZQGEmL",
  "key20": "3mVRVSZVNPR4UjuFcKKMTxJf6zyhXyeZP6yGSscAXjKxtEPetMyhY3UzpRsz9TAk8gUZ5ZRBQwnj54Kr6RipuBHr",
  "key21": "sG2qxZi58gH4kegxX4vpXpZWQ8VbimdqHxZP8zhKdbxXoNQYWaxMs36j6xiStefCn1mLBQRTsWQnrAusP6riyKX",
  "key22": "2X17aBFVjvhBrivqyysW6eHSc5XvvKwMr2sYAaBQMM2f3nj1Q1fvuLUwizYJDnjn6BU2QccHU8cxoJR1C7CtLjaz",
  "key23": "23LLzugrTgg9GkULvKJ7jRAt4nMQQLFQsQ5iHWueQVDXd4Hso9yTDveGL61AiSRbk8ay1WtR9vKKwvJ6XiMT2J5M",
  "key24": "5eYeg6QcCRt6HBuU2yHrcWSqv9jEYePXDtNA1w8gZ49NszLf3nujeYShDnxrdQhsEAwsDH86eMAELdCexRiVdaZY",
  "key25": "AvLH8gfjU5qCFRxDrZdavHndaZoFUCuEmYJcezgUaDLS9k9QDZyUEz1UYCqQWnAvNDithdwshD2LxDPqcpNb6EV",
  "key26": "4Rr6mNxRpS1rUu3nfa3UvcpSDHL9gDembp7wapp48VCTsLTSicGvnTDgbcJb2d2iD1SoczU9B3CYcAJuqGFHnz2v",
  "key27": "2FzQpHqG2wfL5dYgf84SiWN3uAScPev2bhY1VwmnFeA9prCJUehyoyGYFRTb6UdCLERmuJ7Y7JnegUE6PFcNs5gb",
  "key28": "5SQwUPQo1efDkiaTN66pAYE98RG9a52b4fgWwkNn986dRLEZ646ar6yTDaZ1926Ub6FobmEchiEpB63d3s41tC1w",
  "key29": "4wqfeJVAhuhwzYdAJxgiasB6ChWQEogod9EfUMp6wk6wD2ryvVwrrmXo4ZzTwHTkEpyDHCeZkP8pFTJ84hWosQE2",
  "key30": "57Xo622YiRUfUonkrSTWjMuuecqubQ2HovLrcjzjRck29W8UW6qDmbcM8EgTwFcZESPbep9A2tUHib5bbEmW1wRz",
  "key31": "b2Z65CfFgHzCQbCN7JfU8QueuTEGtA1ALQ3BBaSGCe3tfXsM4Rg8wUFXdZgrCpEcgbosNBofxRzVnXJSrxYG15k",
  "key32": "WDjiooUXozE75KvjrRsMNzC5gGnKHKgN2KubC1DikcAdN6TNgjqZYnCykZ3SfMDGvFSZyYCfi7STsso3xnoqfC1",
  "key33": "2v7wYCcfQs8paJSTGhAfbhxJKbSDktfv66EzoNBz1ag1oArSj3KLxuMTbgazPS5swDh29VFpeVYCaamHsSXPjAkB",
  "key34": "3K9y9vHB1BDbqL6F758CQfLcY93zN6awKdVj2er4zxkfPtrbCPdRiMT2vVGvufH1VKvvrEijqW6K3WpXotErfs7V",
  "key35": "gjtMcxTBj4iHSfLXQmELFbWpDXRUXMQ2JMYtdjGkcYWy17NF6qgHymwUVicU192jcP4xsfT4QZtmCL4j6ir9yQ4",
  "key36": "3Pt1s8EmBW8sJbKgMkLX2eG4XaEJEd5mE7uiipZkTpo4ThFEcrdU6AjLqJKprUMJAPjeQ3FcEjkYyn8e9yNEhWiU",
  "key37": "iuwxVjVyK8PDqWMUBmJMxyv2YaDqPtWwB9j4sHpc1c9DVVvZfbrAaMpLCwa6pjaLcpcgTqjq3Cce5GY6qZcFUyV",
  "key38": "2DyY2QK8d2hDdZ2558ut4tiCysz6MrSPUghWjE86XwDZkZWmS2Npj5EWVB9xcsxPQKnEHWaYF63hi86jN4xX8ShN",
  "key39": "EQa3GwaYTytgnMuuU8vtk1DkW6nMFDrNfDrjZC6jBLkNAKoBynR4RHv9H1UL8bNKksf9qmYcA3uRXHSRCD749Sk",
  "key40": "4ZAhuoLfEioGF9Xn4a2aUwi6TTfSAgaZkpGfseAzuL9bvjnxm3Rz5PUyc3CDpXfH2iPGRNcXq1b8K2kA38A9cPzU",
  "key41": "CVd79n1c8C5VJt6xcDHuduepDsLXbLnWy8ToZo8cqUQ77eNsjdw6Rmy5Ajd8bsj6wz5px1Av8pWmfMAUKgd7xPm",
  "key42": "5kXUxKvD2wprT5hJWa8Q6fT7sNNWWrWB2ze8ELs25JFLz3kjvUTczi9VZSXVegfkv9vC9MnfkPvMNnC9kjrE8aaL"
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
