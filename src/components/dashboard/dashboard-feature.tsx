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
    "5pPNMwEL696zBNadBjEbDMvFnvN6GmLhpemgkKDzAxn57rJtKsQRUJeeyVDnYpEW765XjYMoj5a3wRmEqT23XR6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LvCgqoYcboC5Fo7iZjhgykg77CLM8tcHZPX9kYekM9Kws55oyiy4RSEjCQbtXVdrRRXdYKwPVeRkPmtfwcogeqy",
  "key1": "jzDtB8txWx1wybtACskMA2vegQXNHb6dVeTWFxSNpmDBM4SfuT2DCQfDcdWZ6yJyajydLCDF7cubPT1ApDfRLWG",
  "key2": "4Bn3hMhYPzijjkJ1q9rbgWPUT6AocfoBEP4J1nJw5ECZ9yWQNYHz2xfxkhN7z7hH19SZVZzMR392crJCUG8Aadqc",
  "key3": "i5FgiYiS3tg987jJWGuWLtWnK7NPMttnuEAZQKzfoAb49BDMS1XBvN8BTSLNbghoppzJ7qi68Y9wi5x4tA9BE5Z",
  "key4": "2MCwSpsnQxE96rk9eJkR2whrEnZGL4ddiEQ1eAxYGU9SkpapSiENz8raEZNk2FbfHoFZwGwkwV6SfdUHZi51iDHv",
  "key5": "WpkTdzq6akqRnwV2uFvQirVPjCtoczCGcEmq5ZgSCVKQqCrVxfLgAwLqV3ASfVFr52cJyGxUbxxV73eRDq7ksD1",
  "key6": "46kHwS1ivJTmJfmMsdmUjWxPXqPrczeRstihqeqzRUHk8CBacSLq8ACT73FYgGcEPLPphyp1XH46QZd53STyTutk",
  "key7": "5UfAZATJYdCq8VdmhRccEojyGgLnyosuzD92igS6TX8YM7vyRxKWxGzNK7Rk5DHwWoDvnWMpt1vmuAByj8LnuQKp",
  "key8": "34itPZuNs36NbYVMY6SMfaxWtB5XWp4vSFzraqnxno5Sh89Nsod8hjvzM5BmgUj6TwDLdsYbLeqYaG4PTjcGWuku",
  "key9": "4tc7j9rG5QdSFSdkDcLstcsRPuP91SwHcbt44FA8zvbvvZeLg87XdjzYZQvXXarhrU463TKquPMehLHVUnjMiYUS",
  "key10": "3qtskbo81Z7cUwirB1JbLeBWRxV3NExhRssYQiWFUedcY5eKLEDZp22uRcGkHeyw5UHwed1H9mKBoXeyqPzWE4B6",
  "key11": "CyhXcEqnJBnGmb31XzHdcYXw7yDD37fmxqQUbtE9gTC6aACUTr5ePTF8hzzyc4nJQNEta8ZAh9cpMuGpEJDxLgU",
  "key12": "4FyqJvhdQM7QJ5d7PcPqE9bisJz7DvhkgRTtxQqCzmcsnyYgZ7qZ98mo5GwHiFjNZndoUAxeGYJgmTDDGE9K3zU6",
  "key13": "27YGDojjeb7rQfyvC239jQQuRvj8LfGrGEkFbHu8BGeZwyrY2u9CK2x1QLyUTkUn9w7qrY9jT4YRrVSBizyNASSh",
  "key14": "xjGGe3U6yQsvpZBKo8DsDV3W4qFVoM6mTNy2xhHh3CtnR6Hww2XbHw5NPndHCNjSoi8Ph9aQeQx8ESbyDAX9reA",
  "key15": "58F7K8pp86oyZxBEPG6pYokxXc5DjPyeUzuXDABBsZbgkr6ddfxbqsSeYcbVAhpxqMxy9vNGYWE1NKCeLrc8szsQ",
  "key16": "iwdLzH63ZXCDcB7RcNL1TNiYUHm2qJXmfEtyH8YEFtgK34njUTEWwERUsfMPxaQCZfsoeJCU4TgBtVMTmAGeNsU",
  "key17": "4vqnNL5k2oGG2z5n56xFmDGn22JPZKZn688KEAE1hYrGZTJ6hYorWQKutV43dHphsAihJS2eFqhxvJZwQe24VeZL",
  "key18": "3DAFNBc2PDV41ftfL79whucLf38MXoCiCFgVX7Rvkx6xGWSaH7f98js6yFAoG26HH9uyB7C3Mz1iWDoyVzm8nhww",
  "key19": "36AffHr8AD69W18k5dPWdaHqgvQ3cNZpiJww2BoWDRTdqxjfWRnvF4YsExTpYb2u9Grhy4gVuKvUhLYsnQQE1216",
  "key20": "32qUVMJsT6iGJqF7vjH77zuFDqbm1rbw7QmMcXp9RC68y7QABrZ4oxk4ia9MrF3DTdxaHo78mHsRnivAdViXLC5c",
  "key21": "27YmhvYFi7FV2UtVSmgjWp6LQeqR4Rg2ueyHaBLGq2CyX9gUHjd9gyDTQSLLoo2KqqKx58Paei6CXzomHWaVDs8e",
  "key22": "5fe4jr8A7ESL2VeVtka1rDiCXCSwtTo7DhHL5eNcyAF43Mvcvpka8k6UYExZq8ut1AMHrfUXKTJ5N7zHWWGSN41w",
  "key23": "54ZK2XVuy8Htnqk4XMfanREEdwypXn6JfQMgEDzKRryGSPvXXF5r8AP8mvabgcNKTtQBzy3HZsaeqiWMqZaZgV1R",
  "key24": "4TSYiWzEZqCLRLu7e4auBhKrP4rSkRX71adVyUBEixyvJftHnYydxp1T8LnyDC8LUWHLvhK9x1Chc7z2DAbsBRto",
  "key25": "owKgBj3qxcbcJESo585hTHu9kWFaXEReqaTSxshCuz9n8xsq59MutuzZg4dRG282mWzavhWCN6e7WhwtvtM8isk",
  "key26": "5cx3M2Qhjy56asQzVAVWM4PfBVVLMrYbdBxe6DsvrK5CrJNXJrxw2fQ5pmV94eqaXBMYTphW1sRSogrNfoNVTYpq",
  "key27": "5Ue6dL7QafkQUHCkbaEy6oaQi6ntRKWTHVVajJymz4XVTeu8kxhjBcui7rombkf9wTQ92y4FQ6EmvV3hhQ4XWABw",
  "key28": "2Q3v86Tb3h3ivMnhnVYKWVxtj4brNWHcJLXocsqa4JaoT9ryAsyYXaqntFTQrsVmMZXZ7Z1YSrgtm6f6dBVdGULY",
  "key29": "3Z3gpo7BJv6XMwTidPR1YVpqJjVC4giwJUAwHWh7xdR3vccshXUa4HxHLufpc5t8xUArE7g5cZs7TyNrzmPdyT6B",
  "key30": "2oTLpZvJggVjc25RioJbLQvJWRNk2n6PQLktBzTc565pd1hAP8UH2TFRdz8QTjhVDKeyVsx8ekmjGGZPUUwe8E4J"
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
