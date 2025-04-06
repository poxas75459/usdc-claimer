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
    "36Djtc4wQ18CnkGN7nmhP8h8XWUqv7Ns2qH1Lo3H7725464TCnwopxXcxRdEMmz6jS7KxwGpLmqE5HZQLJkf9Lub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWZHBywBs2zx3caQ2XGxPfntJCLPnYfwx16Weo52FJKRYRcH64bZU6uiEDJxDqaw4DCH4J7Mb6S7mk6UnEz88q6",
  "key1": "2Wf24ggHDZXptGG4Jp2CyMEjqcWSzn66rpU8D5fB3rwNCuFsPBiDjcXQAiB5wp4M6jQe3erqoedSVKFuGRFDSk7M",
  "key2": "4gEdPxgErT6g2ythmkjiLUEweTrjRrvraePapGKn4xMdU3MyUisiGsS774dmvUV8tzrv2dHU29c2wYUN9nXajNvv",
  "key3": "62DQy6fVA2DoPBHtzQrQ4Nu3X6G99Wgo6dRVe66rGgWmYSzX8JVBiUqNDY8EKDcFU9MsvaTu4ioSNYQY8iYvLjDH",
  "key4": "3X29GTRU819NkLMf6sXcVouGzKqd641XfEecsDnHXboPPvV6jM9wqJ4Paa83k44q39m8NH7DAXFUoxqucFeET6mD",
  "key5": "2NRgNDsAex6iBkfkLk4X6RA7R17XsdtMMDrKX5tdbrE1qb6VVvhuJjVB79exbNLFyQm3r977yVq8aTXGrTiZVnG8",
  "key6": "sgC7gcWa2UhEy44KLtVDNMVo8SHNiWA947gYKHYxtA5wbXuid8RJfEN8mTW43kxDJzP1maRLgjofeknQkzg1MUQ",
  "key7": "3uUcfcr4nAjXeEmUQaMqtr8zrWJtX94vz3BbAUagJ7r2m1sjuAFzpo3cWCHg3CRAP961CVv14TwLVrN6fWcXrUoQ",
  "key8": "5gURk5FCGVnu91Xse8tw2xQRhcDuHqYChPq8zvz4QkukWbpmkDCHQ7xvHy15qm5kgitYSSqsuVXbrhv6AYVvFyhV",
  "key9": "3DFfvHQRJMDU7pspHusJSzfFwtCYvgTSmZjuAWBLfCLtsSs79C8k86YYBnsfTdDsSrkqWRreBP2AHBGadDRYLQkz",
  "key10": "3cTMcTjE4CQeAwm3pTBmrxDUA4XeLgC39TTrDHeQseKh3EahhwnMecXKzsZzQtDmeik3rGrSvLWXLzZ5xwut8XAX",
  "key11": "TUZyqD3abZNjG56pbGxHehYh68s1Wbzxw5V3qZxb1BHdyK9mKaFLnQgqcT6meXHEfrV8xrxP8KhTV5MSbDTMx6g",
  "key12": "LA3zX26hPHuW8MmfJGjVVNBCCxFaTbyfPV9BxYjospbDayPbbSexrNKXerWjwv8sPdMrR9NEkd3r1ND4hoCn1Qi",
  "key13": "33uwkQLshLVxyCBrKWFdHTbKnVrnoxn5JR6uR2Whsv44PdjZrq3swctwdWXvbBs9Ph7Nt4UHuxAbRySLQXXXpUz8",
  "key14": "5S9PGFafLLBNx1ChqR1t3JzfmvNL6zMpE4Dzb4JDsv1q7pKJEPUG5wjqpJYC38AvTv2cv1eQAAeZvhLEDePnLc56",
  "key15": "AUj7Amvbj6P4adbq9sS6G8kp1TyxGjenAswkcSZRNFMNsRaP91hTmhb9bk6mrgxLvia8cf6byuzEJMiJjYqsHKF",
  "key16": "4mq86nimAVDsVmcjwaU3nLK2SqzGtaMEfgufmYMkgwLFdkUV35MWo9LXqHGDycRWKxjQ6o1H2YZ2YPnKvG2opR24",
  "key17": "3odVpoNwn3w5dKE6sVkp6dT133WWLytbwsBwNForZZ8Gi1K62zWi41PrfouRUpiwQa3jP6Rohbziu6NwwC6NofjC",
  "key18": "3cPBhcoKFy28UsnnV7wRXqCWTL8RAQrz2qt63XndFfPWkqDDXwPvCxSCKF4C16rQTdaLECodDH4Zim5FkHambVyL",
  "key19": "51UvJr7cXtdyB8zuzSF9k9C7QdVrKByhN8Fb9yprsxp1sxqxCsnPEuwViorZjmpHMP8Hw3kW5XcmmFVeMqPwf96v",
  "key20": "JFt3KvDg6TtxCnYy7j1i5Kau8zU2CvNhS55p3reD3rgNw7uNsmtYUo1X2hhCQpvtppPWcnUmWAqQj2Y7ytJ2XRK",
  "key21": "4i9KbXacFiz7q9jdHnEbCVsJgqpdQyWGcrJnYFTFFhESdZpKChJqsGjPWKLeNaCThsNZREJRcXmw3Tb2R4goohAq",
  "key22": "ZiPzJZj2Q8w53EAGDJ78rSqeHAXbfViV5EJvZ5YUEqs9ZzZ2EkgrSxQjmZa3X11qPRt6ko78geckozfzcxr4SoM",
  "key23": "4M8tRm3JTkPHQFBX8SPhBspbZuJ1q6o3rcxvobXWCsYohRzPYQqMVoJPm8XBSsz5tnKuKfRnojpLsVihJBEJan7S",
  "key24": "44Tx5iCpjQLos4DvhjCgTBLddkbUfsmTzXQcUE4FciCShN6JrVNmQZnb2v98KubXhv6KEMjqeCYqb2d1pygT7LhV",
  "key25": "25CvWL8fCaMHXYpnNUxRzoQmqNaQEf57R5PHUsT6J5HD8hwtW8pcrbDReyfXYFBQRJKEr64cNZCvZtFWBK43UeSb",
  "key26": "CAkiTBpd8vmxTC1q1fURBNtDYYH2sLHRufHrButFLQtGUWaG1atAZEYgtFogVNtGrUASVP39prcHrEmumAonJrK",
  "key27": "swA3n27ePY6kN8QQ9ZyWMky9VWZepGFqRXUEbjK4scTfDkFHeLp9wRdqu81cSkzj78FJ3sbShW9dP1q3eYYrSKp",
  "key28": "2PE9M9vwXbeMAXdnkMUpoeA9zzkLu3KcK2fcBHSMjLBYRckCSHSXWgKPmMQK2tUir9Vr59i1U4SNz5i4SgK3NgQx",
  "key29": "2y7tpSYCxFcoMZRf8cUvhVwju52Xwfd8i8UPAh7fHqWP4YyMCgJqYgLKuSwUHFJCSFCPNhx5gqYwKxteNgmGXFjd"
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
