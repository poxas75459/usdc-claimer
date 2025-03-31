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
    "5SdK8uVWPurYYdempxcTFhkuZRk79d2eZEwUS1pqSHYuQeb4VbpzEE2Ct5v7AvNt9fbEmXMYrtKf5XG1ZSebDxkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dND7SNP2t7kwZbHGcV4X9odezuVt4XJ9s3veTNk7qdBW72mxq1FxJC5U2boPf5TajdUxEBbXNidwTAYEz5mu1M9",
  "key1": "3xTrgejdxjBQYZNu32h9S1U1dXJyYSxbd3gUPmCYdr9Ypqbs4eVhTU3TqWmH194koATgdutbXWtxegvHjk8r9y9J",
  "key2": "3rW3ycHkCFbf2caVzasMPqTtZuTmeP9uD9WyPwBZu5MMoRkkfDDjt6RnY89ffCK89m5nDr7ffR9FtoHkmLj4mXfL",
  "key3": "2k8SPk7uTtGV1x9f7msXgGZnMy5DPrFeaF78YyRYxh5TCy8tqByGbefzb6cTmSXafMLRdKHrWwJB4FsJTjk2gTha",
  "key4": "5zBGTFxqRT8qLAKCJQqrSVbQafnPGomvccz1MmouVG6uwUpfHwJotMixfzxmkBJPwm8GuWfF7kvHfMLgTyh4VXTz",
  "key5": "ssdDVJGSvy9E4NnSNQWaSFecFeABbPqBmuyGgB3YQivs1fPLPPSXsaecf1SQAS28r8dWEd4AVpgWUwA3jej2ncu",
  "key6": "47A9Rn53QdVk9nzdDoK2TYp911rzh6fAkBK6H9EVCKbXZwDx4EGq4jFyCwRyh9c1CfNxhGcbTQij9vNnMMu1GNFS",
  "key7": "4owkrGvxZM3pBYEJrQebKFGy3VtQ8XF3hHYXBrziWj83LjzGTAr6T6opRaFePDzSRxp5RAzULLnd4uVUNqRsnevV",
  "key8": "5Ma53JuTJD8oDhFpzmxyAMkB1bjtDEuPxm6VUEjX2hh56hTp4vGHJxNXKCXm6jMSwBDCcHijrdMAnkzit9PRaaeX",
  "key9": "4x9yxVKGojMpiSFx8uBPkKnwoGw45TjJ8ypgW8oPnPJp7ccRpAN1THP3dywt4tihaG1YMCSi6vLCRUXudUBvAMY5",
  "key10": "ZAQ9Vkx5eWAX5rcabEDtHdYsPwGknXrKym9osnbjF5eA8dZiT1UJB9jvSC369PrQ1ej12mjN7TuAphMNu7NumJU",
  "key11": "2vmVfqdXbY1epnyjbmWwMjdCVs2zNWGUCvMQcDmaxdxDiwZDgW7q9FpEAHYQvfoFAwsRsFnYucdMnefUAiFRBffF",
  "key12": "3mKdaAJeREgciStLSJJBQwVghERtb5tauJVaEpRuR9TLhUsW5jpZd2dkPaCZuPzmRShNDiFXz5N7rUpeQjijAYHw",
  "key13": "yoHPTmemWbUYFtnSLdezCrLPA8dGpVaqxTkMksR5M63wkNCgESzWpZj9oXZRgTSu9zxpNoEf3SWj73Vsn76uSZN",
  "key14": "2VxfLhAUZQ5jjMdPPcNcH6JCsJz36JvfLtaXrzoQA3YjUmQR5UM59vV4Nfu1oEAhnxF1oUrpu3dVfkQoWWacM1NF",
  "key15": "r4RdQKyk8gfGZepxDYtodteH38Zieyz98WZUyZz8d2UVrUSDqDg6ahifUmoPU8TUnavLzCPC5U65exLi35szv2t",
  "key16": "2yi6GSPByv6FcWRs9yf36QKyqwV2VhhEPZZukQudhoRKTusvzN3dPu5R6GVEntdYSutBWy58H8uhNwCMacsprcmP",
  "key17": "ty7UJAUDNAf4E13cLscurnWf9HZgKNBnJka4Lw4aj5HZRineoqCFSAMk55yGpaQTYx3PbcU9m2NqCuZ3i1g2mdV",
  "key18": "L7qJM2PjhE7S2fGsJnAEuqjfn193cuHVwpBJyQXpEEwM2E6u35tiP4gQHpYr6owuFjNnN4kEMPEETP6aN1i4xa3",
  "key19": "4dXbpmKphK4K32cxBH6LsqatbhgRWHnpFi6DADGq5fyDPXXieaJvXwuEUQSyRGV5dntwvQEfzgGGgu7iAnHLKAxT",
  "key20": "2ngLpPe2nVayZdqwWnAH6Dk98gMYgZKJuTp7EX7KobLGsph7vqEYSXRneHUdbQGBFMbYZ1aFCpTYX12Q2UM3VVJf",
  "key21": "Yc2Qzy7NCajRAz9EU6kfWsmSpS66pheMuZsBgFBUqcw9XiUYBekN7ezvxnCtZWkZ2LAtzPreaUi2m2nV8YZ6dQy",
  "key22": "SZM5k8PTztsoFKXePMkmq5Xffzti6FdzuKMqFYoohwmrY72HYEzm9WMXBfPZJu51DM6nwKuLEsNhGViGzenndeu",
  "key23": "5ZwZewdbmgey9nsufBWL93xJticwyy6PmSSGWkUpomp9WAeF1MmZfpfoRFyH9kK6H84mvQdwd1SWjYZyDeuANokP",
  "key24": "2Z48BjyvvQtsG3Z13ZmobXpsypocgEKk7mpK4yeSA4FXhS29CkGBmEiXZurKbXyJydULAV36vCcVd7LdzUJWbCbP",
  "key25": "xk251CgnRKr61WpvEuKFx7aRR9iKbMjTkSevrhdbzUHfGG2s4HTZgMkYdjcogUAuWypsJhcsgFdqTApSYCv5C8j",
  "key26": "o1tDatb1guxPBYyRchJYaAHar8fpBZqcSZzAthBWHGoY7WzxSqMACWstaXyVRJQ4cL4aZWgmAuRNaCip6EG1HKo",
  "key27": "57cBogAKfM6GwD5HAm2iMKd8sJP3Vs8NBqX83Y2xm5PPco7HtYCtTUGQuFbkfKF7jLWZsBB1zC19QGWNVCQ4VXjs",
  "key28": "4fbCkZ8biMqvMnY2GvbdA2eg5yz63SNdwgtpVe5b9DLcKdZWnB231EaTE6vMjqS65JeieGN6vRwLvtqK4SFxpsXw",
  "key29": "4WwfAg7pwLa7JtRqCWGS67nmDQExzaSoMQQFGHnnsWRuaL4gXCYXn1kqeTsctVWLjjLuhF45j8BdQXZnSpGBs6KS",
  "key30": "2iHUWLtjBPX1pFEAsQ4VjPCx8CALNPVjSyKkBxy9KVzpTXxHwMX4QAfPN7xMvrEQ1LPDuUPbGjtmQ6hpxxm7yR7d"
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
