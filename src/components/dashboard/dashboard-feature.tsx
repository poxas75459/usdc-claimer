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
    "4KrtbHsVsUgJ1bKRxgfHe6fg4SxtR54n3QRVNbzieTctKmevAKcKwPNs1dCJXooKSUSahxUQu4fQP35KcqgeZhPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfxKfeGTZKBpZyu3wotybuPfgTzZE3VcZrY2uo5fgxwHKwRgQNpgvdYhFZMVP7UXkJb9DXyckBuyisrqAShxhwJ",
  "key1": "5G9Yb4WoQJ4RhaKKmmDvfL3XWtWai7jFyGQJGRB8QYfF532LYSSSJW9LeA93ey3SNNhs2nj8F3PN4qirfb3nDUxU",
  "key2": "13JVsMNUr3t7Wfdkd2rjDLbdRqUU3vPE7vmni3Zes15wWW7K3rhDTneQb2YQvfur14o3nEdLXftjK9KsyqtrJit",
  "key3": "5AzWRdmfcVfbNRVgheLHkkKU7jR3Mayt2AY2qQGQXfqh8H741bb9ULHhV42SqAmWHpj56gfo9NPfto6bXD5oQ2GM",
  "key4": "3TRTK36GQCrq9JDf6dKQNWzokq8ydoanKAkj6UbRFTipQLed3f6AA14k2tpVjgfkNe8km2WMzYRcHD2S1GB4HjWc",
  "key5": "4VK6BNXVfQjEQLYxRxtZjfUNyLLrRi4PVppBYGTBajNQgwSiJY4At2d6M1f9saRnomb3yDkSC4CXRFJkzmNe7bJf",
  "key6": "3fr3p5zXU6junc987EMk5cQLKUN4mM3HBuY8iFu281v4Tn43DsTdpAb5kXVh3w9NjGL5cpXi6CS8TMTaWokSakHN",
  "key7": "2z5UoxsiFQM3mN26iNE1aJmvFJdLNagaRY1wZozgpfKmsVJGSkror92zHmAN1sh3mqxkzZe7NCkdf6xfFBgW9ZkV",
  "key8": "2Gisk3TxMCmckZCHta5LxUck9xbBtmyzhppiAoJv2cYHN3Q7UYgtLWJrpbXSQiHrWW3m14cMAuyct2FpnX8mUUfR",
  "key9": "5uBgUNtz7J1DiHsvaCCe3prZCXiUs5tP3JA5oyatgH9VqZZ2mzoBnjwkQGg2LHyjjoLTG8dKK9j47LbFiq57aSzp",
  "key10": "3u2bKMjAt38kSyTzZFP8YyQHwnh779SqR9gWLPdw5hEM4VyfDg2SxxNs4CZGHLS768C9kioR81KB3YBPiu8vD9mQ",
  "key11": "57UxWAj6bEZQct6VnhFXVCtUmooyMZiLNkvaZXv1ehj5oQtENkWvDvgonvXQb5VYSF6di8wTB9uYozgjbwfANK3A",
  "key12": "31v42Ub8yAWck7PA6aGb22UWz3FLT4iNqh3rBqRcquE6QBffjvGb1ucDxJWxPQ9HRpkqWAqdQaWWeyQUK7uHAFgZ",
  "key13": "3qZPuWkF8U6ztUfkCAzfuGfVBcQdz8H6nxdus1dSXyibjK5iaM6FR1n7PjdDym45tdwoKSLswPTNrJ4mSTUZYtMK",
  "key14": "3RLBBTueWUua4hLABTpwJXxPp6faoi8fnBBPSmJsHb45HjnrBGSSHV5rb2PGw6hRPLMHUzigmot7Ay5Fks1CeMjp",
  "key15": "KWCzddmx6yj9QW13NngjGfBWJjHLoRntFjJ3daSGkxPPUHknJRFaifbwtz2Y9syBrcir9kDUkVTeKzkUAPoKSVq",
  "key16": "5qMGC6e8zteYoXus44EhthDGZVCP5a9JQdtZjXfAHZx27yXsdEurdB7BhjnnNvPu7erqZ1Wt8Q4UMthXGTwVrCVK",
  "key17": "4ibwGUenramjzPH2ws2MzXRXheDFVSz9cS12cGxoURri4Qjq6z45r9gcNs5xmgWwyz8CeSHyfEriEyMUFjsY7s1Q",
  "key18": "hzAhPFKDVQJNHdMXpdhnkm6KMMG2aU3Sbe4Xawq89cER5H12P4aRQ9nnqDHcVhRPb5WFfpXhMjnNfnM5sqcfgBv",
  "key19": "8Ca5vtrCkcbG9QrGT7HsDkELwKHsUbz8s42hmm2g5T8Eecv37dkSJrRTHDKWjcKEg4bSpVmMLsen7sHY2HMnJHY",
  "key20": "2V7gLxgdFTUDYxdbbmyUz9DS5UKf81dmqoJfmQPnpj4re5HK9wzaBcUfdhTag7n1n85ESDzFpADKVffpyiqMHtB7",
  "key21": "4JsUcNAFLLuwBt5v5vSCQurVUg31zfMJMbzTgrUjaRoi8kSFHyjKPKgZ6fL3NcK8Zdyjv5EZ397rmUgtmVm1XvFB",
  "key22": "3X64vkjE7VF8jWCakdtdJLCsyvpgZ1Rg4gHrwb1v4qJcL5tienVvkPQsmXCFd7qP3YyVrnNkyEP5XPhgJoBEuUCj",
  "key23": "5ACANnuvtE5yqWaQRux1KZchBDc8p8SeBZqgMY17DEp8Xa1F2LYqGyHEbphHNQTv2vCCzZ4VpQsNLGHsfZeGdXJi",
  "key24": "56HbNbntDZn3AJPGu9rkXQvx1gsauPgGNDjetUnUdEoD6kNimeJBQT3Ytewx5WNaQHErBd7BbmGmb2gTKd5WtwGv",
  "key25": "6dctqgGpXfdV7HqcMqtTAj9Fs1YXhpRtafbntaTj9ivkSX6Lb2o9DHJU4D22qb5F6TDaSLRbbGBNpBdpFLxYUkT",
  "key26": "33XhAo62NWivrekHKUVf8ELk1eoD1yEMp8tRM9Ny8CVJVa6xKmdy2LTJAreKTpxsu2vrLjeq7E7N2ZSNE2yw1X1i",
  "key27": "41zicLH8txC8eBKzTmeV8z8ySwRTuapCP1iMwdygqaxoUQU7Ubzb7JNpzT183gDFYHcdA7NV3A1jpi7HbQEudQTG",
  "key28": "2juXdDzuFioHEvhV5DP7V2DY9cURhpW7xgeNue3KWJu6FRa2xFSKKPU3wnbNoLZv2ntjReGD2kHW5AGHac4hhgXj",
  "key29": "22of9Qkjtf9X1U7VreJdm78qpwCqkqqMrqrjvyQiTFRmZHVQCH4mjN7VKWHzU7W9yfhXbT8g2jvAHgMPUtAMZu5y",
  "key30": "kqRta5cSMUzQvyWS8MnJg3QLbkL7TuEysQyUK2phP6yiHeya9cpiy9UJcfiei8sbUPVGoUYtrn6271pBoH5XJPb",
  "key31": "3nvSQYyRNBgTtu9v41WhYSiSGR6KgKnrY7R6mTVA1g3EWJtuSuK7Tm7d6XgoDUo5F3sKCB7BdpGpnhoDy3fzA2fp",
  "key32": "3w6Uea7E5Z6MSPUqZ1TtS5DDc9eExhpCkt7CG8p3SgoAKvbgu1o1GpCuNizwqhKDhHkP138E5t75UTpjjS9dMaF9",
  "key33": "3LJ3UZtetN9CW3Xe8ZCh2ghx777RmGZjQfuofHpFEQ45vu5vyAZ6yYR41EvzkQjEEAfJU6HseDAE3WGf4pst46Qc"
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
