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
    "3rd2fNdSYq5kQtYUrZ3cfZwBL36R3PeFdXHNwRUZ9TTW4PtiE1fdGhfLAr6x2tSfGqGaaGH2vtxm2URxQ8J5unbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hC3gnZgcVnP9sMCu775KYKJPd4Ev8DvpdhtPB2SSdbYs5mrj4UzLtW1KqhqU2CA2wrowrfBF1KJ2461Y7oys9mi",
  "key1": "67nKdWuZXdv6Yk1qyNAqrQsFMz7dkTLJXxSyRRLCjbfMqbuFh2t6jVcYkKYjA18WV3nP43DHYAbuUd6ojMcdy3dj",
  "key2": "2b1r6MGEWnWREa6RbigVQJRJQhAwHksrJDdEjoWcc56AoTc85EvZEZg9tcLaG5VDaAMS8TPjUYU8gNaUMKfAScdj",
  "key3": "3MGrykWAY5TBY6MokdcP7DU8eALC39SWbEvX33aGYKpzEZw3uAbE4r6JwxHbw2hzTfnE4zHsrZQsj7tNbUmKyba7",
  "key4": "3v7RnHrKWcMhLz7gnSks5tx2qkTGYC5WfDBbxkCVoJQg6dVMts5ye9eb1D1FXrZDapamUWxXmQVX6GcgpBwfi5qs",
  "key5": "2Ao5wTsDVKPm4ffLXCKKYbxbpBsZ3GJgkK6UiqzcV6nxroGb6WJ9K73PQ6sMbWoTqR8BpHwnTPG9ZbZqD49FuQj6",
  "key6": "3yKSJEzUhSoQ6pG5K25SuHT4YBWsG1xfSvN9kuKNFvGfX5z3PNPZUBEWi8HAar5mz8tD1LLuKtPqxGvC7Cga6NbU",
  "key7": "rrsBdXPSLAvrDLhcCCwXshfoM7P7bGvjPKwmA3KseBoPSAJQ2DPbYwn6K5WwPk7cceJBWoEudYENxkHyL9zmaPB",
  "key8": "3tAYTU11AWEs71twqVJmB4DJc7g2Hek7ZjKScm3cTkqe4LdzUQzvUGbqCTKMgKNAUA4wDemmmT14jgenrSscNPB7",
  "key9": "2swEpbBs9wTF1jmSLqyv11zHnNZ7RD7ev3pa6U8rGfewduAB67zqv8kUDXmRm17FjMNkfRZGFZpYiYcfg7weaUCt",
  "key10": "46pFThvZWTQN95tkeQfUJhPvVcJNQxNmRvivgiwHAABapwtMXDr3BrV3V2do5khoXk4N25GU5G6QR2R72yVrPQeQ",
  "key11": "5nEqYidriJZ4y4eM6Jy6YUAxtazFaq8XHaTesSW9f8146yAGPjbR2kvFrzaGzTaaEUEaDmW1gsxuD8XfGt7sbu4o",
  "key12": "2VxeG5jcoFmnPTtsmmivJUEBS7pgwNkw6zL4UPtpg3knASBFnyVMsatwdytSNmaPhjFSxEVrwDaTtVAkgi67HUei",
  "key13": "62wT3QhxjecFVAcR5dDHeJfj7ezu1EXD4rSwduqCYRNQ98VVH1a46ctSUL14YuWFmABWAvU7yufEhhTLFMNCCiGz",
  "key14": "4hV2UqAs9T7Fu9MY5Mc5A5UV5Uidk7GfLQ4NPKcn3qmH8aYoZWXuNFvzS56g1DzSrcd7yY4mS8Yfeimovof6Af8k",
  "key15": "3zDjn9PXphyHWgDpQ4uSmLWRyAbdae7Roc8g1Lr55wCn8KxDjFVKoQzAVTcYzaeWNykztkav2oQbUjP2eCWMkCTv",
  "key16": "4vQAHu3sWWHkVW2rAr7iX8NBYkDW21eje94HaCzFntnpSkLfSkeXLJn2RbYAFMTuxs7MPV5HFLTf9t8UmDK1KXZv",
  "key17": "axHPHeoQFcpk8Vjj6g3rWmDnM3zTvW3nr38Gqs211KTThsZCGFZvG92KjLeHPzuzJvoHpJ9Do4isRDpDbLUHRBp",
  "key18": "4btPJx6Wzm9YoF2gdmQ797bppdP8eULHPXG6XwWmEQjdantWoxUC8mkRQR9J1SZeebUMe8P6msNsKr9WZS2JG7if",
  "key19": "5dqDuqq1rWT23kkvbC1U616BpLMn7NqgjbBZrbg4wdhBrLu1za3yEZonGdNJejqZCg9j1rTFgiYrhQMKzFcUSkqe",
  "key20": "2LqfPQYFhk9JFbWq1nwfSi7BseXFcSi4zhWV2aUnknA4cccPYR8CQTg86sZv32cpH1kKMcWgxaTXRXn7t3KJMRoQ",
  "key21": "2qbHu3H2VrVYCyV5566TmN2eznLAy5NGRejpXUtRgih8QYTpia9YF5pqGBpRjvgtxHnZHWmJ5JT6yNzkc3sDyVyN",
  "key22": "2okdYZCzRrw6f5gZ3XKJcfjiCfJHvY1Trkz2uCLjSEfmsnEYLk6NmmNpEJkuhCwq5MNv2svDCwxrpYLbCSseSpKa",
  "key23": "4epqEqxm892taZ52eXxC1n9hPeSgRYioCpYQXnZnh2NKa4oZYGmkkwGN33ivMw9EVoy3S3Sd4yov21TGazYQ4B9e",
  "key24": "3PpmH3p5esAzU3hTVwWC3f6MU6HkTYqZ1mbQYzAgvMSd7mS1fe24QohKy8DgNsLi2f1TPNo2JSaZSCaHfXVy7u4Z",
  "key25": "5Yga6K61aWVch9vksoNk4xboFNZX9d8mTac4NkGbSymobqZ5S8R6QjBpPbu1kcgvE1kKNkhjiBHTNLdZj6iDtRGW",
  "key26": "3Xh8daTfi1deAEDk6ZZKyJqY7wNJcWmGb3oBqmHNEMJUE1MQGMfT5DAXRFRDpUS4gbrsz9gorxWrRf9zXrWvYo2W"
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
