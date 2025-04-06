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
    "3N6ezzoLF9pEmrX8svBhpuCL1k8F583sYMGfp8WLaEmYBzkx9TskQxCFtFTCDq61Bve36EEJ9GLoM8pyu3Wp8vSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxgAVUBKFeUbrXBH7Rh9wmcDA4ByaY71iNnVAx6PxSexMK7GBmFoEL1FvpBr1sVf4bAYxBGbTCx2FsvfjqaZvxX",
  "key1": "Foxo65BLmD61fTFLMrJE5hMDyXspzz8F3r1NeA6z2SeqqQRbXe43mp8DNHk4zaFyp2TwPNvCeBRfEU8QSXSeSLe",
  "key2": "3CMpGMZ9ZBk3qYQEzarTEh2uRtrqQNWB7KtFt8z1ySWTWAiPJyeiYNo9B7EKfFaguQGg14hPkDF8SAarDZtQF4d4",
  "key3": "3k3JDVhysAuA9UGANP3FqG58vQ9c1UEPUBoMqHbkExagvwbQJH3pabY4cayYxhbYF4vvjdbmPKwy1yKQ6x2CNtpB",
  "key4": "npeNzPZ3GTAjn9xFw6Pspfq7XaFCwBq2XXaawTgtTKSF2j9RZygTSFMev3VK2FRMqEZBxQi3KtkH4S9xbJhk6f8",
  "key5": "62edkaExjWgitFzRBW2PAvrSQ54yKbAEgGvJTNowFZsd8tLPKjESyqMjEZgnEGPBJ1DkZutZNg4S4HhaeDg6CjL3",
  "key6": "5UgemyKiWwRnXmXfBdMvmUhVaqB65GJyuLxCNa3MxCKp74SAsYZ8PuovLWmioYv61uGEzDLWg1g99S4BYyGwSYaU",
  "key7": "2orKRDmtJv6G4yPmGTLGiTMGNzoJfeYKPpaQyvJhDccnvxGv7M9grmcfpjf8ygfmnCv7ZGZzvf2r5p9f4JJ8U9zH",
  "key8": "61fCcqwNJiFofdThCR9QwHxgrCaoSQi3kzycmhDq8enJPXpQAFqE8LdkD9JzTQnDCD7mXLBQsTQJs3aLUUnoxLEU",
  "key9": "37vjfBoPYqbxZ2QNHF2ieRtzQ79KfwFhgRMmatN6xVX6bMnvi62uwuQsuoeThWMsPdK7JXGMY6EDm9hQr6QaFarw",
  "key10": "67p1esokvk5SLX9LXyKwyKNHc9dc39ENNNpXCeBzgj9iZ6GqAsB8oKHMUaujCLW2BTaYwHFo93fE5z5cxD6F72rE",
  "key11": "58VrrpsznKxaTLaX2qVDCZV4QzPcBwq9PgApeJ2smjRDYc8CckoDxkJWyqFsieaMAWMcy95tqBpCbSSG2NA2nMv1",
  "key12": "3fFSHgwtA4Zjms73u1NSFMTkSAFz6HaVJXvfRNypgsLXKBkjCzqFnbfNswCFdwZ9Rg788VejiRtfvq3agiuAtaFS",
  "key13": "B9C38UEPAbZ5LpWTo4FLCviyG1Nz8QvsBhoHYvLvicGhe5vZttbF4NPLSC5BPbjUjhBtvmET2afh8vVoPqUXdyQ",
  "key14": "9qkLRgwpjRhDLXfpgLNtVxeioQ1MpUABSGPQ5PPioqGXk2UyTHDSwWRwUTyJHfHupVgHsvSKUFZhe8iRdbGbjbt",
  "key15": "3p9dzqZuH2WJp2KXC3shrX6mTT3WjE16ieyEaZh8K1KXYAr25qcs2Tb3ZhpNwHVQCHaL2GupH7PJgrfJsKyP6zU8",
  "key16": "NPQsrZVwKA6hKYonSD3SXNxAqydX6UT27p5uJvy1YH6oUXvVLWDBgWW3n29CwPPgLTiV4YJznZJBEyR9fBjbP1v",
  "key17": "3PBVmgYuEk4v1Fj6MpYziCSb8nrSw29RVKUnp5699vM2DNgARG2rg6qw4htKuT3Bm3BziGPoM5Wi33QLghR4Rjr5",
  "key18": "GTR87uHrZLo4WGMHgBcBGVaYsZJ1p59VwnyUh53XEvTXdCZvDHQsivZkkCdFgdfevVe3Pr7q5hidyDtMccwDrUi",
  "key19": "4XovhajeJM1eN1rr1QDVR3sf1pgT5GTpmLVqhh6DFF7pHNGtgFs4Sk9eHrosVZKti7rBi4UfWCvKJB7t625SE1hc",
  "key20": "5cqzA28xvqpCY3c5GVk8LMTXDcfeUnMacogf1p5beYkKS6sSBDeZYvkdv8NdcAprSJhDwKxGi2ChDSMKwr76XVPZ",
  "key21": "51Ev16tsTZU3C2seBfaMoyF2QGpP2mMTTS86rA9VG8HHwSSdGgPao6j6qKQrcuiHqUwhXTueKah8YYZfY7JYNkKa",
  "key22": "2LeE6KeBLyECG5UVhmESC64fjZjw1V1aW6uWe14VYD53PR9iJrqTb7WRH5twjNJhwwSKRACB6sA2t6avySbGbnr6",
  "key23": "31XyVKxNKqcoCpJgbBEZ2xH1cGfh4AxSty1GgN8jy1ALg3uiaG7pysbWt5pkjBezjTDpUdHZat4k1dWuxsgszJko",
  "key24": "2usUdcsJVonHZa9LSNM3dyVofRkb82fVbu9zscG3JziqCn3XsuQ5dcCtpVGHRvGEQSCjMQnKW9WwVDLGddwQZbZB",
  "key25": "62EAwZVZyEYWRn1p1Kf9VJn9LKUZVxkDXVUsPtkwJ4P8TyGLJjGwiP6UNwm2Yf14t8BtW3iprhzt9g7wmZFBcrxy",
  "key26": "3H4VSgYWmg9MY9RTu2xZKikTRKNwG91TdHwbsW96zGmAxyNuCwHLN6QsaNHff7Zh9iK8rgiKdcoMhm6ycxKFS28z",
  "key27": "4ukoMmru1namKxWET9Us5j7WQ4BNHS9e9HJahMQ7LXMe6jA91j1tDPVsMr5LUYj7yXDz6ccMn6GQVRUKehNubFGD",
  "key28": "4EgsbtXxv5h98NTkkyeguqGNqBgGqw4fq1BjT3ajKsUbeMMa4TMMY1gNZ5PKvJrbQAtPfE1LxvTY8jgP5AJv3y32",
  "key29": "4YkofYpUZLSFUBqNvEEdGahvFc1ABUty6GDKuNVEW3ahvN3Tt9YRZEYMPrerRqgVrS1benyLKggeAwf3g3Er9ppd",
  "key30": "48QuMsvDvt4rkw2hZSd1pnta45dXeT14qixNMFkUSmizDP7uGtCALQ4GDs1Js8qyzMGoJj2JKmwdGayj65MpqymG"
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
