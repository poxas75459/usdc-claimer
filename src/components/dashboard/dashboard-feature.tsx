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
    "4vUwQjDH6Bc3euLPLb9nCRjCYCffDHbwbpSKAdhzX7unW17vNjNChSgqFBDfSo1j8MSFQ52gKWDEuWVzXaaQexze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvLwPFd9ixZf4sUBuVGJ6Yn1RicjnjXbSHnK4km2PW1GUCYjGomqr8NzuL8pVo4DdZeBpFa8N4rhjUrDtSDSwmW",
  "key1": "Hc9fepbsx6yCdvDjCDhJzKSpiTFbfkVkeJqru1vCHTcgKSkqqKkpnpGKb7oEiPPyicKNuxRSFVWGiBBGgG8dRni",
  "key2": "3Hh1hqhriPEdocaZz3xwLPHm6PQm4isAypVJ8Pudx8TTdVeS3VxbVoi4UJAoV8tnUsAHr33qzoDc8wEtE9M1AySp",
  "key3": "3VEQGavtEW6vWE2dGRkk341oC3Qcwrsyc3VGEn5XofXtuDBhDCM5ioqK5HDwPfmPbxVWDyxZbxMWFgxkFKHQTdpC",
  "key4": "4Ldsk5N7VvVQTsWruKvV3GcryHNBTHVWfAUzXyscWbeeM6FFjomxtaZCbrgdBLse9WnbyZjpj9ikUJYdUYMrA5ZR",
  "key5": "5tKQJfZWoc37E7nprdv3bmy8yFo1SKCjeYZ1nBqATjbJMPRmiuHcCqZ5SdCEyg3jc7iQnmiwwNmMJd2HJvtH9mz",
  "key6": "3NsjEuyozb9iwXH9imfw4ezmJ7PqUWtRV7YgUSy4CC8z3GkCBNb68fhS2ywrtbSmRxG7jSrG1ewLhp6U7aGRunGx",
  "key7": "3kU2pW4LixV2PW2A24rPPoSrKcZfqAmaBJqbPVJKqsV2a4PZ2CHRfiZMSGrmqv5zvsGCQyzddX39hKveEjRV2msP",
  "key8": "3yMRGH9prn8bdWxfPsWDcPBg43gBRhh8CTBAFdK1ixM5JBPZT4VrnTJpAgwMtMwempF1CaoGUX9xWuBkUiVRjJ2y",
  "key9": "PhcnR4Dty9BW7QynnPFiZqY3S242yLCQnjc9jNmuQgsBtW7h9JU7pfkiPVNJEb5gebEUYAiRPX6vw1ksTNZAUCq",
  "key10": "45A36Ww5Ectso2gD9eyxM3q6FZ34VH8bSWpa68dyZ9HNZWbMZTE4vsEdfTTTxhubGHSZiu5z38y94Ge7krg9GLwa",
  "key11": "3v5M4HWFQ1qXyTwUiyXq64Fe8HjoAKSCkcY8wB3WHiRwR17D3HYCKV9uCeizJ21Eh5sbom3EzRBgTMw3YQngk2oX",
  "key12": "4ReKWyBtJeQYVbFhFQH9HsDQbr4nWq1DxDz1GfTh86LAJ3MaM9XQob7PNEM1QSRcqp4yRh8neVha8rxSEBDW8Dep",
  "key13": "5C9xJgFnsyJgKqA7NkMyZ6Z8Dr7VUnBuy9UMZH2TNpFk3BgcqRgP6gEDM4ihn284WfL4rgFTWGr6wRWLEaLfMJLP",
  "key14": "2TrSr8QmzdiwT7UEnQAZNyhCydpXDedGBmNjNvgidkPAP2677v24V9Rg8yULyMJtkvgBm6gb4NxsmmxU4cMr9RZi",
  "key15": "4AJzQ6E3PSJYQz9GPYkSRZtqqdTFuEVS2aMW95vCYRxt1KKk43rdjjmNnEkfhtFjJLvtLUKJ7dfZvNNxPpFhifdb",
  "key16": "4E4VtkuhGo1YRbCdnXSjKYsxcJf24MpTyy8KynSpJ3Ytax9XzQNrZDs7pyNz9douTi9WmNp2G2sr8dh1L7oeegX6",
  "key17": "4rfvLBqVU2VtwMP7V1piknF8sNG5wBYnVsb6F3vbv94Wg7mTqMEJ3Qp6KEUTDGoyJqHvfqeWMpwoyaS7gQECqCRf",
  "key18": "2fM17i7i74Jgt76nbbT4cvjnF5R5KR9a95hoUACH4DfoGMkmdHwga4E7P9TNumwkqMXScdzg9kHz4xBEjPHj85PQ",
  "key19": "2n2i7FdNoK4Ec9MxyD4pNjf8pr9Bfcz8LW1EmB1DCdnbDJDEBJh6P6ZG63iRDWerzB1ghwqjoqnpgcShjvuEEQRB",
  "key20": "3vtLPzEA3U5EY9pEYevSTnwt63Jv73YgKoVzpur4DfNsDBniX5a8VaJV7mchmeX73uWnxyswz7nQHiqDcq2h7S6T",
  "key21": "2d1khVD6YA9PcaoP3f3fq2C1pXexxGiRsVMHteQXKnaN5gydiT5pJqXX4GieNbgssViv19yDHV88NY2HFyaQNy7k",
  "key22": "4ERb7JnkHTJpnkY9nXiSJGzyGq11iM9kEn4wLozbAK8WuRa6GMyWdJMMMQjDsZEhnJLyFT6AdEEU6K61xUQTrfb2",
  "key23": "kNLnZURRhdxYnTPJMzy4wwjyqenUtBfysBjh3FEWB72UNYch483wjeJfiiHtjfHbdWEmBfydX5K8dWkLTCLEQix",
  "key24": "53V7EuBYMnbqAn2hrj15AMKpRg8yYAvctq5x3nfnEs3rF4nEEAWVULGrCBwiefYF6TsDZL21GJ8LBTBayjdyeV1x",
  "key25": "bZxrGvRiQxUrzXLvmLZtp9w27rFbdcFK9X2beREM6rdMvrReotTX868k8psVPNxFK8xumJMkkq7S9Pb8ohAvE2U",
  "key26": "3hmnpN6he3teDMqXAmzLs3oxsJEQQFES7o9pyhmWT4CSG4ZjyjM8EjkpkaZWWwgox8GwKK3eHjC7vQBp8hnQjs8r",
  "key27": "4bn3vPm72eLGGR65gmEpXpHgi65SoBgYYSJFALx5Vdz6r95eZUGh8MKfgxdnqaLxsdwk5raS178FgHiJXRUdZUEb",
  "key28": "3Bv3Prri7NKfQqFCYQorQpv8X6yRcYKYcRx3y1xH8NM9gnb3VV4y8nbtyYKCXGL9wafmEePpZWxog5sFi7M9sbZf",
  "key29": "4Xp7UL4NtJZJshDUfGyqJm41rm8bjqdFe7psxHRTHtLXY8EmxkM9n2ts9L7tHUWhCt5fBFcyXNeR72tRzDuNM2sK",
  "key30": "67BkioeF88TmindzM9HmK6fWJJDsUzrYmD2HYyn5EBRi2GYSRausZq49suCBTSHogHgxoLW2LdMYxBVb7EYRauti",
  "key31": "3arhDQwbSs8sopAdWsiZJbUBEGgs8xd9DcrBnQSFRsGpjKoCPNZ7oZWhnhKoiuXANDS7CtdjFQA3dUTp3Q1P8n71",
  "key32": "2UMtv3odJ3vj4SKedeRkFU3weLuGWW7VCJH32CeFLD8CnFSaMboLKjHmFn9HHnF8DffPJjUpaQ8roGQTMyn6o5W4",
  "key33": "4qb6DGUE2YezQASypeMY3PWzSKD4oCYVsoiZRPDHxmb42ayj2AUnaqiRtSvNXAKhrbuB2ncvMzkf3e7K69rt8o7C",
  "key34": "3fytcMg9jHMvwf6S5sZSwcNtwEg89uKWtwARr75NofwVGJA9QnGuMafXDyyggdsZnUVzFcbs7eDDgMvpHdXGnvCj",
  "key35": "5YGb6iCgAN5kMPUgnwnBFWJdz8Wk3JhkZ9fxqbshMBmnxusDGAxkYFs2rXT3rciucBCvTCowkBUJxajQkHCPZfNS",
  "key36": "3YZXhfqhGj8eL5izETELMQes7nKi58DvvyAtZtKbkhC8g7b8JFD8cxsF6LmtDZs7gWyu4HoJXAvVWFQGNii6BFnt",
  "key37": "5jePzPUFFZTKxGQgSRSw652Vjrjn31WSMyWcd7wmnugNSxGNeo2fw91dej9DYYxRetu9v9rcFr3N7m1KGAwYkBVm"
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
