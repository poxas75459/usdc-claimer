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
    "5cvVNiCUPjVaLNvHuHAFHce92aKxPs8wkJrXWKbSrhPxKqb15mjQeL8fVnUi8SXJTNvYS4tjyAGKxmNBunNPkGq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ThPdsNYSiZ36Gc3H7CQFRqpVsCJkRw4NFdhzjWAK47zxeUbiaSYqK3GgmGiz6ammGhbQGbtyuVMsLxP8jzGvm6U",
  "key1": "4wa9wAB5WdVoWP2pUvXudhatz4tP7PUSuS6rDhAmy6BnrJYZTFiuZhV95Mp1koWpx32hDzrHzQLzLCz2qyL13pL6",
  "key2": "3qrXNEwLqBxhhjUY3NyGRZC6MDPG37o2STjpJkz2mZpaojWceQ2qudcJtB6NWE82mDypTv4qSnnwHTc9gNoreZsZ",
  "key3": "5YNLwfjAvAWuMRC6cqxt4KAEHH2rZ4FHKeiew3mFKxgeDdw9DqSVG2TeXus8hpTmTRzWwE154JWvdozyCW3KLpEF",
  "key4": "2phnzhFifkHmvC2HsooiKBQaa2iFD8sGEGhwz4bYCwXnv1sLNdWf91QVjYBK3tYpXnyzxT64xDpZG172wrANJqGY",
  "key5": "xBqQTJRMaLe6qJELqvegYtM11r9SzbsYVgj8dGxuuSZ5FfMumvkNm9hYBDreLj4BYAm6MXRdkYLDN2R5VCmP79h",
  "key6": "5oxCmcpRsewBaFJAaHrmeWfbQdCe6qJAJxUVyuGTQtRPmm56d9Asf2SqiPwJ4JgWwyQDMurnv9wcbKe2cvmL6P7B",
  "key7": "TMF7uRths29qBc3ASRhTbykW3sikrKYk6sXa4SZrcBAJd4BR7aKAk91LT4pitUJUqMMZYRHCnGCaN61wNbYq8NB",
  "key8": "21LpRHu6AZkGCb9Eq32Wv45oX2Zo1X3xdWKfgDFtNHoduJ3ipBF4n8vFDkJeWKJU31SW4vmnBSQwxAy7zAJjZ1YZ",
  "key9": "2Z1E38TAP4PNWDWkvSFGTdt8n18DoMnugLR1Y34z1T8LXfarY3mFemqMKnfM5opPg3r6Jy82DhbdMszu6Jc9vtNd",
  "key10": "5axPRa8U8STbWFRkksa5hvqMWkrVkK1X7t8a9D2rZrrKNVDRpAvUdHFksfViMw48hHqMxiACgUdqhv1WNNbKRTZ5",
  "key11": "3zi1iwQvwWLJsdYjsTcNRHCEqbPCX7k43q55C4SoZtTB5Ve4T5drnXns7gpj3usEqAAw9gGU94hJHLK9AqnL5PFn",
  "key12": "5uTXDJHHbdX2nxss6kEep5KmtGqUx69jt7TahBk6qLv4TRhDbjbLvPHbKCnYkQreRx9QBhwriCzY9AAQFLscHz8H",
  "key13": "Sa1si3yErpjZuo9T1Yfodiveepp8PLmBCVcvFQb7cDdt5gVYa9rRGHuNHzSEJj4a9G1ebAzDpvNfi2YsJxxAMzh",
  "key14": "5Vi5ZUqAaNF5SKrAE8MSgx161UvcMwBDkt7ciXv2h1biAaVyzhbn4pECQABavXVfhDf7913bEaj4RN47UYZgcDLo",
  "key15": "3jou2R3taXGsQ93AAsx3ee841rWexW45QAQaUqZG3mni9cyyWhovegWq2sypUj8FaUumUntMW66gPsxztFfpRX2h",
  "key16": "5xz6jGNTyp6gdDaZ1f98Pxi42H68G3ex8R1JMwaes2keHsjc9aZjrKpV5PruTpzr3N4npsziri6nd9jHTZDcK7FU",
  "key17": "v87aH3zWGkB2ntD8YPPmunQieofpoXvtmXm1PrCN7xW9ridGWXusTdK3D5dW46Ki2wKUWK8mzZ7K5EzDCLkWQQf",
  "key18": "3bhSMy4W7sJFiLZQCk1eHkJk3SqdB4SGw2THKfuH4xxvWbnWZmVdUqGCquA4bpu6DK11QeH24Nzt7nrNwpPoHWVz",
  "key19": "5XB36YUFX1PgCHjiDpcSH4ZR97pn3NrniTnLFUbApmdV3RGCBw8kaLJMssZhcurC33xsZ4Fk46FJG2WpsdzTbqZg",
  "key20": "5aurDQUMBqCTtaHdTAqMQAE5KercC8rnTfQ5D2PWdFcwVT1XRS8rbAv4VC3SLJ8PTHookzzJit9beBtd3Qd8f6AY",
  "key21": "gE3zDqJpyDgotjN3CZPeWRdVTDqA79MA6NzMyj3wZiHu9NAw8nBfaEHwFstcc3t35bXs1xKhk4YPx2gDWffPDR2",
  "key22": "3ej7SjvYxTXqu4sN24vpH1qnEwroSuA8WoRAos75JqF62kwsGsKQ6UgY8pLJtkJch95ZpCN2FzPQAvFkC9AJvmr7",
  "key23": "4fjzA6KgvsXfktQSU8tTbkzWe6vnVc3uX4ZwoMRmkrFRWk1TQvejCjKVVDaX916Q23fQv8hJX2ZRVu5k1dZZTfsu",
  "key24": "5a8WkCGJEtRZmDL7Hsbj8Ef2xQQFXFGtVMBzjTU3D9MXhsreDbuF5QXkiBeAcpfZrj5aH629NETCKZZbrmXLz1MG"
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
