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
    "33quCKS5CqPfi614KbEWc12yrgbEcXn9u6Dvwz9zVXbUyAX5U3YgdqoXCPxkqYoAzyTa3w6FUmvDszJX6DcSHqLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7SMXqZXW1EW7y6ixHkK2QkauvEFDLfYnzhEBGQydCddCMqYYTMj96HwcGacRf83SKjNTFZptZdSA95fBRrysFG",
  "key1": "5x1Vm8yDtJ1c13wQZeZpTmmrGDDHGoJWvVEooTQHMusHMepbEs8b14VHMuvYQBmtcHPUcS3ArY3cqhQReXqchwU9",
  "key2": "26zaQu2teeMtM27JV1VDoBWFrjk57igVQJBXuK9qgnW4EdGagU7iyiQ6CVitLKHj5b7vg5WJ5gQgjrpnempwPV7N",
  "key3": "2wJx2TvfhFo3M2ScfVx3Wo6VkKt7ANRR1UoW1aN81L6eDifWTSHoF4AMKare3GW2dQeeX1gSan55Rr14d5CeJKFp",
  "key4": "37ZnnW61s9qvvW38piM7WQQ46A1Td61kPLdyCa5nUgS6RucgzbA2Xt6Jw5oAzFDLhQGCD8xxWT6SVuBpVGGEcfXp",
  "key5": "C6NNVsxjdds1SU4ps9pLF1m9Cbb2WxQuWntVvrUga6VQUZLVzEmJnbMQJ1fBr6WCp5X1ELmPF2jWqAdQQeaySP2",
  "key6": "vmQb1xkKSsUata61rZdjNB4JMfnLMiABZ7UQsATu6BmuJviriNgjQk1RAxN6Y4ZdRDAc3jj6LHQnEsekNPiqhZk",
  "key7": "2dTDmBpzWNgAjgak9oRiH3wTiBH5jXTcefxkw5k8M3g8XCnmSBNzhaFnfxHczXQ1X11bpTisFxdSDExRVWqmBh6C",
  "key8": "5zt3GLuHyM86eBbzD9yhg9b8gK7NTfgb9YNAHjLrWtBWg6PZM8eS6F2hcbnsApzwJa4ctFrTt75xfWhvB7nxeynC",
  "key9": "3tWutUiBMaMaXxbyV6ezSyozyUewnkFFAZ5X48Ffsc8uFRfXv1J1DXLVAUj9GzxLiE5nbkUAvuyDJnzyotN6tcq1",
  "key10": "3SgbJ6835z7ck7kVWa6M6BYZfRfsTf5otHtp9A7BVx5eoGHzrJegUWsPfJLVajqJ61SX8qzfjxpkjFhwzqBvR9hH",
  "key11": "2LrmfUSsmzMt7kX1psaQiAQ2EAs2m55pGkDJZEMaQCSV8nnZSiXmaq4R6xiAQGZps2LKhic8nw4Nmx6CXzg6MWeJ",
  "key12": "4Qa1RmgyQMBy75cNwQXhwA47yLVYeA5fcytmfAmaesnGej7e2oRsai4Lu4jufJsyjD25XPb2rDxbL1Xe4zsMMNdS",
  "key13": "5cu9BqRD3TSrJp17mzEzUR3RAcvrhsVLCMaW7jNf2tv4JKR8TVbqpd7zknbsWBkEnQyhMpVQiLQvf9CCAD8rE9Ly",
  "key14": "5cGD55FeqPkmAzD8s3R7mstQKqLLbw5r3qDHyUpcxYfBj5K6jv2E2ACFLMB99x8F28tWRSnr8FZVWpEh8vZyXeX7",
  "key15": "4WLQHTD1GWN1MSD4Fiabg8pKUjv2WQirraM6Ha9RDPhUczUpdCNfsBx6ouDpGRo4YKmnRpGMyjwPxiwybWpXDQrj",
  "key16": "2x1qpKQJYZRzTmmVYQ5j7WzqsPmxmBp2S8F5Ht89uvLm3bTtzDEJvEMJmy7zRmNiEpWMKxpXEe14WMoiV5LxB5Yx",
  "key17": "oghfTPu7VSFuJqjUBecdFyM2jVRnKC5a3nJnsGe9XVZMM4yGE1rPZatVE5WJeSoYdMDfSWfqF5vt4wEufr2mgSp",
  "key18": "N8VoUgmBHS7aFnbB3LiMKSB9ERu6vt7Mg5BE5cLaD6LUxxfi57ApBDkAzhnAdnpY3yMfyNuCFR7PtQsckZz18Fs",
  "key19": "6jQ5WKxRgtMnEWL3qwHjSj2QD7FthxTrCkP4A4jG9M8rsMxvraFmWtfZwd395EWFPTPUBMhonbRLSx5wvcG8ZhF",
  "key20": "33fYtPCEwdCM8P6cDjJztie4XYwDr3Knzga3EUGfB7ED5HhFQB9DeoEm2DMvRi91nGXHRmJBfDCAHV8pk1BaX934",
  "key21": "MCdh683azQZebVyqigQGJTY16gNDCC6YqJdiH5ZzbfFo4Lqmfq3CTaxdBj2czeFuao68DMMAAH5Kc7pqcbqEdXF",
  "key22": "3EBxnLFsi1TWd58aZqMDrEDreL6WkX41piMvLx5JUrkE5KjfHRDBLRufdc6Nx6BHQ9P5PgYLTpxiBXEutKvySapd",
  "key23": "5mvd52Du6DdbWhZ9XGQFcN6qYccQd57MeniF8xoAwiDRUyhrJU4n8TrpPWJDB1vJhCyKNaFq8FbiPyoHZCeVFHQF",
  "key24": "5fxJumA2rH9BHDeiidhLieLydnVLf75F694nmgDkXxZqABckm88DXeT9i4MSyYnL9kMrgih2KoYXBdtMtZ6V2Ff9",
  "key25": "2zkDATNVpx6fsLUXwyNETj1UBY1zQ41Ld8sF5ZkEQG2efuoZ4BHAf8YPrC5SYH4mWQkmqkgbwjf2LkSbq3Td8oo2",
  "key26": "3J3112HQnaFvBtEW9PJuLg7GFnAMmkEDucKMmJxXuDJUKm3WwdeZkBwvQdST79pbk2wW847qSNDAVWRP9oMgvWaH",
  "key27": "2CyKAc6TpSMVavszzsmwqhe7nW3fjiKd1q7iRYHSzFmviFkpoKJVH3mDXTk2wZDEDyawbuxXhcvhmXCrJaEzxpGK",
  "key28": "2Nid9wujsWvouYrqUnf6NBsEfR768pMFLu6thu34CTdfVQHF1rdXNGjHE6y7mKNf7iGexXjyw45zZG2Fj6hNoG4u"
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
