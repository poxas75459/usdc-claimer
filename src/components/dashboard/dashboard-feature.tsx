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
    "3fmNfJSdYPYSCLCde569F6bnh1kXnn2Ebr2oBzncDetfTHHt3KhVfWrUw759Nz1P6v6LYGmQanrp2PDcgXm43z7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F6uKgaJ5c9gx5TXApH781w7ityXojnaKvwQaDdqKBi8vn4TNYkNUzCzYwTZfU6v2zti7wPZZJdR6bg417mEVgJJ",
  "key1": "5SKr6vG9DzKJV7ymVm49NzUENF2ymjDyWtiYZvZr6d7bQeptRpFGth2GzQg4mY6UWHkE4KGAkU6cWNABTNo3wLY9",
  "key2": "3JQCpMcMUbWVv4guDjP6rMwGhNsMqmb6iqsTbiHE5DxSX7YK8xVaS2k5oxsxNfhBgw2y12AFWHZyyNSmahXr8JGw",
  "key3": "2MuejeHnf98Lk49YWHtcaC1HSBUqPzR4H37mbwWwe1bnQhRgzbU5NvrA1ZfDg7SQnk5mfZbnr7qEZgE21CxyFXbq",
  "key4": "XTX1CepE86xPS4iHLChXm9nYq3VbcN3hLfT3YytVTF3V5R3Z1rzrEHXZLmG42LJH8yS5Diy4HvupsAG7BJN3DDT",
  "key5": "2PVZuDoWStVWGe8vPdMM766T8pnEdABsJcapGSvwzJyw7PayViDyKdKyD2bn99M9uMn1Jsct4Jr6t1e1vk3wNkjf",
  "key6": "4ESebPyme6DsoHtVvL3VLH4ndoCKhPvHDteyRBLtwQ6oMisWymPN6XNS67DE54UdWC6XxbZygR9aa4STxt71kimo",
  "key7": "3jQZaw7hhNU2ZLCRCrfvkEkTfRbwfiC56foCqWsPto7zcemZZX6TbpJim1tKWDVV1bMCTL6VJhwcMBZmHyLpeevC",
  "key8": "5YVXLhTc5dv5sHW6sEqi2FFPjGXvufPkZH8jmecfuQjS1AhJfSmpvHKEuL3mhiVwW9nenbNgduwn1SGZaLW48Soq",
  "key9": "A6BriP5g9VBy2GberhXbwaEqpZ2aQV6CvN7tEmDgsHNNxb1vSr92pvWPHPWMKGdafy5AP8P9R2fcGxADxSvjkmt",
  "key10": "kwfPBenciJFghjc698aJGJ3fiK8F4Ye7drvpaCY87y1Sz9Ccoi4XZqT45F6YQTBNpiw1erYGDK335Pwwt26ud5c",
  "key11": "TaPeFXKMTxnEySjMFUyFdpPnB2dv9DLpTbohsLnGaXbh4uWp7PFf4nQaxLmE3smXrVX62bzRbSNDMk6ku6oV1Tx",
  "key12": "5ZkFCVsCqf7pLChKRLrTtxgkQcGtiXqz8Z1M1aQBcTsUGUxNWg6xBj3xMT3vw9aAu9T4v497uq1Z4pXuHvxzvQK3",
  "key13": "u7TwXegsZnWarTqjWKpwi5XWFFL7xdENELKd53Ghe94GaPws3qJb2415n4JPeuXVaQ6ZPut8CLVpwRqndcES9Q1",
  "key14": "5waw6vbyn3c6VTXvyY1Nt3oCm5t179VQchHDwvaxiDTgsRfBgewcXw1fRLCJ8rYsSyexGcVGpY14osf77rrHV6VY",
  "key15": "5QFPZ8qwDJHfK1tZfTetNfZNYTkmsyAV9JXCh7A7wgdFqfKfiFhCpaWXpvxgoo46icBKbiiHGNRAzxmmEPdre1eY",
  "key16": "42pWWQ4e7vpGDNrd1Pt6SUmt68Mt3riVZDTpwrQnzLA4Jyv4Hp4EEwQnu6GEFykj61nMZSKA8DtzdJ1x2ypoWBF",
  "key17": "24XYqPFnudqK2oDmkEtBMdVMSJjg3xSLbh5v2Ro99mLan7LniWDNwPFYWVuEnJZ5cxkqx2rrRv5SGr9SVJu87s7n",
  "key18": "4Jp6zC6TehMbwsPQRWA6SqimZ6tot6DDVN6V7K42G3X92g9vu2q9Yx2EG66u2Mt9ZYbeWjccXwE5dP41gZWx13Dc",
  "key19": "37bZz5J4GY4xAAPe7W8iaxBrEuDeS4CWDkhcqy4UQZgFUKZfLEzvvr8NQcCLg4vUPyqDr2wLS2ZTye5vNpzBaUyV",
  "key20": "4pgWwyyEkUABpAg6Xjx9xozTGXFeDhqSM4EkRCCbNLpf4FT59taLSpeX37AL6dyyxFS3B8TXxxRhyUy7REYAJv7S",
  "key21": "gWyNdwcYmDUsvJsVr6UPaaTnabcUuCyMUZhKiTxwTnfbVPqqtvRwmvigxoMvWnzu5niZMjudkWzhtNZdgAM6UQp",
  "key22": "WvxZFV6YvKcjrPhgm53if5hRiLDL9yFFYATD49PcBKVikHNnK4dmDpQuwFMKppeToe3EyJzqHGuSVwFvoLMxBJp",
  "key23": "29qpaaX3TtjyzQPu7uuMAkwABS2k94L4RbUYLEUBvvNoWo3KzH2ydRoKqWHMaUV6maripmFXUi1NwcadfZyTewrQ",
  "key24": "5oT7p53b85VifuptLTpPisSC9vYmWs98RfgLp5LAfF2X6T3hxoRrUL9Jh5W5ETJbA3rTkJ1CkPTr49nppKtftzju",
  "key25": "62WVDfN1weJD9wq7KU85Tu4KLsCtajxU6sj9v2eQnPoCSasRRdqdZPjtFnEJpeqnU3kHCZSzvUpJYKXRHi5nPftS",
  "key26": "3CJ7BWcnya8s5RT1CFziGiSWDf4WME6AjVMJV36pEoiMcjVx4i9VPdYCCPj2YA3K4E9jLfSTaQDfm78B6vTDvCh4",
  "key27": "3vHDRZZ6XfDjZr8mkx27ZWfytDJsCEWn6bHvsFJYLLSJUBJzBzv64i32kXT3Y5k3QD1o2U1EK5J1L8PjRUsXqcxX",
  "key28": "4mpwCJLsbctRnxrLqeVaGjk7iJXB3FdYzVbB78arH6eGuoy9a1DgZubBoFW9yztUe4pVdZumxJYAruzZ8VHXfC94",
  "key29": "577cuXR3rb2YEgVCtskEe65bZ9rkS98z4EyUDFBXCR3fLdKjgPzvHH8QSzSvnyDbZcsph1YFcd7zmPXr2vjVeA5N",
  "key30": "4wLmzgyDBHzt5SKFMtyQ7ZWQzoRR2SMyqxveBwgLHcu6KAZQyEpNsZaHta3LvqVk2D34ZMRhCmvDFpse4MfiS7So",
  "key31": "51evAbxqntA4fsYkCjcUaTdQkBaCjHtmwTasVvmPe9a4G1UC8qLKBBWXtVfy2TQ5ySwz2R7CoHHYjQg4aTo3wTik"
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
