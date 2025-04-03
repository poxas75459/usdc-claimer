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
    "51rcNDQosu1k452nrQ1xaA1RPp2rvUzJcn6onVFnyEyPPMyY3jGRNKQ2JcoBEiKBny2aVBQhMP21ChqG69fSuzej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pyvt95t7kYRQ6EsMg7zexLfBy82D1Zch8YbaQmzJp8KTBNPwpAUb54uKztHbBw5HJAd9NEHwKonKHHwyXEdPrPh",
  "key1": "f5VUKCk2yz4KR3wduyRreZej5a2sDw4FyBPNArteJmC7PZeSLVzLHrQjq4nF9TtPayZYwy9iuh2mnJFB92VSZDS",
  "key2": "5dJRYjCSuAJLDUrJZQzKCytSEWZkNUxjq7TLbxqPPnXNiexpwvGR6zRf9VmqPQgvFHwJxnfrRejGbdbG8teZnoAe",
  "key3": "9gK4wfPzysHjPE1qdo4nWnfckaijrLrLcQGDHQjcQmY1LxNmUnoXAbQjFJiRKURjYLz8ja7pdwDibXJL48vtTvM",
  "key4": "4KAFmrZhmmsNEqEFfV1cyGg5rW818YV6Nf26NX3vhmjvqLgHmT7PANGntiixZVZaeHEh963cf8VuH2dX4QcBabuv",
  "key5": "58jKnRHQshzbtfdcnmnkYMqzvWugwmyhWM2B5YpMBKnXDbk2UqGZVPXErXG8Kz6HbmqGJuh9WwHg1Mz3to44BnNG",
  "key6": "9B8UVKzumn776Y6pH2wC8EP7a781KHUX29MCXDEAmq5aQowsLmyujUEwLEMiCq7r6bNS4n5dVevULvaSygCie3P",
  "key7": "3GoWHQ1JxEnjHWWNM7qpAif8CMhLekcoMrEuCR44Un7p9BLN7Gmg9Eqf2mS4hZo1oBmwGpaRgZbQDEhM33xHuuJb",
  "key8": "2Em5V36Kq9HxqeQksGKE5JcMd1YUyRTvkjj3JrB144JkJuhy4YtHfQi4CwBsRee8WjgK4Tq4RqAf7cj7RKC4mQPb",
  "key9": "4AMs9X9LqicQrdvm1ELostRwfjUwUrVkdJ2yVxRiCfqexX4Nu2gD6vFT3rqk1Fd5Tzcd9LcejLCDVXJyVoT78nXa",
  "key10": "3KJEQ2sh4KLagGhkUWv2MXrv4nrkTEkjttoot8QASNuKbTpCZoHz2QPh7vR9AxoSE96uAbZhViPzJHvcbK7mN8hZ",
  "key11": "5sumt9HKzKzKn8QSTBLfWUJ4bJed95VbokVyvsEXUTJcBmj85bqzki1UgHhdgti1hji5crAqPEwaqnz6wkbh6CNX",
  "key12": "47fjeKnQkT5zNRmMWZYMKeB6BycoRnU87eHKvzy9a7ucNm6dcP7hj6ApSx63UL2p3CR4B1Ryc4Q6jF3ELk9wPDqB",
  "key13": "5uZzfjuxYpikCmy4SZ1yu2KCPZxqWHLHUZb4xXhVHGT96DnumucFiF8BtrxUQk1aqFXJCFuvCjWRHa4PJpiYv3aN",
  "key14": "2buUJTcCSniAVn82PrbiHqBcaWGEaaVKWDnT4m4ec2PeZ4pMbzKsPVZabdKhkYz7MyqaiECreU51krL9q2cBRYym",
  "key15": "4L7sFGfPb3WzBe9DtDbYWNxz3bKSTH632YmyxnNKvuZ9Fx83hR61N6iTLmeQNqhdND7p9gag723eG6PfemRGqF5p",
  "key16": "59NYa5AnEDHJ6YLbHibXfMbuquCGpyG8SXqrrHzSFkuJxyExzK1YemEXrfS3ggobiVbK8TmRnE4ne64BoiJtSDzQ",
  "key17": "27T3Bnw4JzPYumkLLL4uHa2ag1smUz7cJ6d4LwtzS9PMqmvf2k7fo3sShCyGcMh4qvm7fLbP62UTjgRxTFnmrSE1",
  "key18": "129wEWWUCNYKwW9FWMi4SdmUvbfr6odr6QMn7pfaa1JV8mU9KKZ79XkQyM566PstVLECB6vsTmCVcob7pue3wp2u",
  "key19": "2kUqKToiQLCuxaqqD56GLQRMDvm3J2J9kPKtCnT2jguXwXqPR1GL36nQXTn2EDoNh837L7VwjnVS3ZeaSe195PCQ",
  "key20": "59PcczJEDTPXdp3uSWDnS3qrSNowCTnb7bvFPQmx7JwPhc23Pj12MFtrsHxT9MkgERbqfFp9PUggQ53Y6xWGbBTs",
  "key21": "3chnVnsnmFyVypQsqLr3S465BVVTJ42HZXX2whdxZqeBwtaJSvvHYLu5Hc9YXb4uDzBe8poH69A2PS6DrkVTUtLX",
  "key22": "QYerSQy5kfn4cUZ3SH2mLgdPXJSgfdM3T7BSGLQZR6pctTaarfCD9eutx4eoSb5TjmyVPe9fY8Wfe5yN3S6oPg8",
  "key23": "4mRvUWrKEUsRd9YDHVstdHnxoeaPTvs36AFJn2fSrKnPj9kNu54PPY7VaGesPezmHdRsCYMGSJajxaC8KLPjHgZN",
  "key24": "4uhgrHrcXY4q5ZHioHsFv39PSCLGLWPiaKjzPrVTX3tKjiMset8hsodBfYYKkrpAUyCLe1P9KQBj5QxFH3KMCWvr",
  "key25": "KnYxHmzNZc3EuhNx1qnZMPk1XEsgHYgXWYueC1bSxEb3rfo7BBKzjBhw1ZG9zbvaRWegTWUawJfuZGd6FdQB5j4",
  "key26": "UREgQErXb61LKddDZhNAipnN1Ew8C8hVdJivCpFjqi478XRCpeqvUXH97Wj443svhpJGjHVNjmvaLK3tpixzHr6",
  "key27": "4iUEdRLTHisexwLFD2ubvw513m51YLv9v4J8FSAy7sykxpUtipXTDtnPNXuFeKQAAw4qyBCjS8Zf7F7sen8jJpSG",
  "key28": "eRwq6MtjamKNUGfJitB4pjHteYvGk1TiLfoominK9kwQd6pFnnmWwEebpJYA5AqHRNJTsJn4nQJpLuHmk6hygqz",
  "key29": "5wJDWqzUTXr71pm4xn1LRWE5Uwa3sTrL1tD5f6n5jr2BYaZChk5C4jfLRSdkVC72GTcu4b53VLBD2JSRb7UCdJJ",
  "key30": "3XNFs4bFcYL4CtR3ew2WggBSGgCdpAjJHjybhQxjfAzfCPeKa5sQ9ae1VKj8eMcgchFNvfk6GU1yLq75WqAcEEnk"
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
