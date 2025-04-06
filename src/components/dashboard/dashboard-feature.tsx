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
    "2LdsA3iPcpqzC1GWNonkCnvTLrx5gGtSCg2DR2gti189x4hHzV9BstimvbzdjiCbiqSFp8xCERMHG1tocuxPnboW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VK7yk6Wp4pwteB8ETL7pzyjVHuPfYxyjinBizrz2B17LxumfFfN2Nn1Gn9vphQC1Ufsmm8YeJNHtXWPTH9B4kPH",
  "key1": "4k9hHUBMfvqFJmnJw7L4iKiaJnNJxPUd9VTqyVZgYZzHDr9gfjeaqwqJqBBLmWhaxh69j626Q9MbTfV2UHSQY9pK",
  "key2": "3eUeZRYrghWAPd4Db3o8GJcyipuM8LMgXXM5oRAoP2ZLmCKjCFHbUPTx1sR4ZWnYmTih9GFZohWEXxETR4NGDKJu",
  "key3": "5d9Tn9HQgp5cnNbFRWL95m1RLf3KjkYhFDwYoTgA7fmehgpiewhTU18foR7fsoJfQRhH6SBDR4ySEFUhrLYSHEwE",
  "key4": "2TC95gTMoDDT7qqKs9BKjHxE3heX5MntUM4itxbCpHhdsMpggLkX9Z7x5mpaixStfRyee31V229Qis2nrbUr9NPk",
  "key5": "54rypu1MAKsfT2qbtDwJR6AoMFDB3NmKUnAX8SQiEMdt8s5K3UJNcQVzC1nkGwGELV4t7ziRbN1N9Mj2CZu94YMW",
  "key6": "4Vg5tTbFSWEP3UF5kqSZRkpFCr7ci8ycfL9RAs4M273AX2dbCUQZgRtQcuPx5jU21wSyQYBnsdxks8S8CTzx1pok",
  "key7": "3btUqMtTAv3SDTZr3CmTZ4zNHbTBZk4DBm5Wrr4nSjXLWiY2mEHCw96Y3sKDT9Z2RdRULknemx4xELr5gvq8NRAU",
  "key8": "3qKnsuQHzsoEqk591yzxHY22xMzGCEJ1t5WMT12HCUf178y7EGWeSG6bgykJFc7UwbRPjrEPALGqzemrWDVJkq7Y",
  "key9": "2w5tCbhUHTwfXiCsPDDNfXyh7j7gEsaoWDtxsS5qLMBemaovdARitgUEc2ZpKvv1fCV7yWJrE7v52M7nxbisGDFr",
  "key10": "jipajRYtDxjDoPv7dYai8tvxAgLorBDC3SEDzW4mwfbFQwUZfSFFGnrgRxrmoEGGxPJU6Dyo4wDNTfBbtRaaujM",
  "key11": "4zqb9XNEbphHrSzMq3J9t1pYSUM9qd1PhLDqhghApQU346FT5m7diGnsV88z6qmuBjXF3MfZmBG5qMxZGtBtN2e2",
  "key12": "2yzPQ5wAfqzYierQeoYxNeySqrvanrkwXZGXNzktyhqRHzigiK5CNhnX2dsgYMJPGg7EZrrZQwY59d7SPHrQXn72",
  "key13": "2mSwwtABQro4ZXLGsFaejA7zcFazc9vRpg8xKfS7fyBzZzViJQtJgAzANXpVgLBEPNizotz2A9iHm8eXCpmVh2bz",
  "key14": "2qvZq3hXXPiQopepchnrvtLk82HLcZsLXbXhRPXSjWAEmRLmhnHYh2hBNuwru2wYUoyYsdpDxGtdMu6XHphGUCt2",
  "key15": "4yerBkaGCeZGDKvmCe3jYVkgU2UJDyDKtE3uMkD16xedz7mv7Zn933QV8gD6c9bkkqufDkqhHcKFEUHMPw9qrtTg",
  "key16": "5RgBKDw1pXrBWY3H1AKF42HUeEdzEfQDgcXgAZkMLPVGpy8kum84hQVX86Xk7R6gGQuxNFMzELuiVFPGFLWUZ8TT",
  "key17": "28VknY3MqsppYzBLwh64Nb8butZQoTzwBo6TZsHPyMxof8Q4uNn6amrvKxDAMtyJhaoCjZfJxczetBAM5qgntcdx",
  "key18": "2i79FuMoi9jShctnmyAaKMpWUUpwBELtE1tgbHet768PVEJqwfL5T2cUFJBnmYwWMuByxBTkNz7aeANBzbx6nsJ7",
  "key19": "4drLRHPuzvPswBj2Tzoqi1bwhkU7QhBxRBWmZhe27KTffPsDeMrhUW6NTcU1iAqgvHDrxksFjsHY9nLGjmFK5Uk2",
  "key20": "24R1M1T5wVMhfwc41pqFN2xAa39Ad656UDBNjHbaKF5oSucnCrbDwBRhVnAgrUohgZ3nyX3vnQb5VyY1x3xSmEef",
  "key21": "UPMjsvErnPmRpxEqVdWrErayUYESTtz8ni7PdSjcMVZ9wv463zTVjDWcKgqU9asMQ3VTPW12R6Sf6yeAU7w8T8b",
  "key22": "huoESHwY1xJgwtrFMsGS2e9YCaGdKBEtBFwQhoDvHaaU38gNY9MrmmHmXYSM212sV2SxQXtdjzEokw7SHeBGkPq",
  "key23": "2HqCxaKZjxpXW1QHLdP5zMXK86crtQiNz8JP8RkHFo8to1zprvtHujTm5FGoE1NfE69GeghTxUsNssCEdTrFQtad",
  "key24": "4bwki7hG18t3pkszaouD13iPJfFcxYJWr6UeoHYmepLVbK9v82rbyjnZFtNf11LQ85kSPyY72JmUUSfzc1onL3dX",
  "key25": "3VnF6VuH28n6U7fMv5P3Kt5v846VcvCMKhEoQeH9FXQc8gHC4pNHf8Ki5hvPs2CJ8zjeX4X2hmU18bxVVjASJpWK",
  "key26": "34GsCjsgrrpJwJDSwr9hYU8QopHSdKnRL9AzZfP3Bbm6NmqMXXkZATRibhGEFk4v8EX2vk2NwHw4yJXqtpMFy1i2",
  "key27": "2ZNK31WCK5ee3WEdhL1ZFQUjgopz4CEv6nuo5pBCjsKN49C1vuWQyf2NDw1kQSdCFe5a5kQfmUp9Rz8ErSpntv4V",
  "key28": "29xxC5fqN4DPsPikexzZxYXWGw4j3eQQcXc65FrTXS8Dm4SgLv1kZykGYU1w1AFoiYFTXAxrN2C8AzBGYEcZxfde",
  "key29": "5ow24Xx6D1wroQKsFQkXP7U1hFsodrCGBQuWzTPLuhccSggUbYRDniWTSm56BfFyWibzRnyZRyngmBX7fi8g5ieM",
  "key30": "Z7HfLaRyGVksbQujyWi1oSYZrQ9k3wTqXUCt3uk1G2RoRSVXckLmbMjuwUgXNYzno1xmjjGZCvQudnognMrDsEL",
  "key31": "4rkoGb4MSMyuSHLtKK57meqSMEeaUw47pvWwzNKvRMbuDsLUqe6sNhB1rKgZKsowUk2TuqNJMyKy7Jg31hGj9GP1",
  "key32": "3g2NFMBPbHW9YhYTfxTV1eo1HTUEZqBU8UzzVEXr3TQNBmJPhK4dH67DcULQXaoPHGYLWVoEC6aEE6ajHUNFSNEX",
  "key33": "4KnzZw2KMc11G9icxEZ7S1CcxvKXGUQNqveTWdysbZSuZKeam8coBWNQQhcEBhGMxF7k3SP9LaMjKkwJKSq2ZW1c",
  "key34": "3YmrgzfmnVkg7dqNYkbegw13rGG8WFmZK77sew6tzNHj339KcLbSrPY3VrPfXVKuxMWUgQ8zZv4GBmdRWSZpnEjk",
  "key35": "4GeFyvMcaaWBDAooUTgm4VFe8LEz9SAY5efEfRUkLro6AWX1jBKEZt61t5t5Tkt3WULTCDZRFHsAeU77DYsrMnqA",
  "key36": "4A912Ve9YxLw7asRNhJ1Z5oChTkeX9sBfi3aaTksSPTuY5VWxS8EMAPfLUJDkS7UmqX4dBusLTkzJig6tDRDFS4n",
  "key37": "3Z5CrrZEXasqjPqCBj3pfTTcmCLTbH1SeG9aJm5vAPbaP8H3g1Ad5gSGyNHHHS4LeHsbce9QX5SQs47TBhu6ZbQ7",
  "key38": "3bSzJWD4xeAb3JD7SynzdLKhZT98XLD2PTgR5kvFiisxw9EixTdzU41wxX7d9q9x56twpo3CcdYn1UoS1MxXmt5K"
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
