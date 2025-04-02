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
    "tGuUbxtdMMML9DY3kHi5b3JkBSAUW1owtMKiAhrWxu6SsojhvTP4z53UGzHeu7eZtSKD1ZzKbu55DNio1udQFoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRHKuZTEyfq7G7afZGbLJhWiPRpynWgUyyDuFJYknHxKmhSW88PHts4nfmCyZDoimkQzZTgJtkio5VfGBpEfxyC",
  "key1": "4sJvG6HpAZa9fb9f2njP1YVpUMo93vZ6F9vF21dCLR5H4ubrfA9t5wtN88K2NJqtYTb3nnmYN9ybFcbw1RS2TGc8",
  "key2": "3WwGMZx4oJzKAFWv5N9TaQkbNvHDWc37rM8emdvBe33P2kdPLS2P8BfW6WgNy3YMHyNgxv6o4PruLrSY9yVq3CfV",
  "key3": "5qq7XopSduFerdevfkQxbCiVsStvUFQ5Br3EQ1JuBDHAKzHYafYYv2iRjK3hhHqxHjeruJ8o843p5jxCVbjU2Ct",
  "key4": "4p7HvB7rmmna3GzhQzeFRWEnA8NA82eDzivD9LjxnLvfHUZJcvqWhiy7vWHkBTnB7KGPPzP1A7foCost84xXcfYG",
  "key5": "wiVs48yvL3Nn8osM3oARCVrPsfVof6toteUubcu31rNEaxq4VmEkoiY1frnVQ9Pt5aUNZFRukj1K6YhEdsepiQ7",
  "key6": "2itWjEFLrDdiKwsotqujvU8HFUCFqR2Ca5TgWsNYfVcDtUgPyxNCoBeJdrhxLCQ3unmoZ1ALZr873pEPFjDo6hzp",
  "key7": "HXMi35nAmj1ASzwhB5UTm1JkTWxh9oFLHXHDc7U3tSQfAeF6Ed9vtjsBCDeu2JvYf5i46aZiDz68N8EcCC2SEaT",
  "key8": "4xoWp3rSCHNbQuHstW5Jm5TJqbUTKPxw92s9Yv5nft3uTSMdB8eawbaCRxJzAeG1A5iopRKoXtULfoecTEA9otVA",
  "key9": "4cinKEVsUCY1JMHj1x4FnTepKnW1qDCfN8Tw8CqdjXxMsJsARjme9nWFezLAX255W1ZS32GnwKigbN7H6tCCoda8",
  "key10": "1hGH9FLteocxuxySTkKCQj6j171npbokynpPmBNswLYJxcdjKyc2ocmegGzdfj6capX3cB5f31tVueUJLXwCqiB",
  "key11": "3XVfyzRKWBcM4UUFY6jExaa3AKjsVt9n7iQ2bUjWRQVfyRD8J1fsJjFqFMyWEcuw8b5fiHjmHWzLBRaP68FNkqaU",
  "key12": "4b5Vy4TBdWiscQEPaeaYM82ZnLWTqZhv7Zt7vtDLFn7SGoLPcHPdT24pPpDn3HXjrXGaxyRoUgiCo8TZpgeikXZV",
  "key13": "4zQfaLfr8UqLdb5CVvb6jRj4A697HmAngMNeX8Wxwma1qVwxpfcTmHvY6AVBTeUH5Pi1VayugAPr4vbvyGYrFfNR",
  "key14": "42yBwsgvKYHEGKbVt7sBfDEHbrLxFS5Tag9jv7WdSTJVgfXBSU7gRy48G2x73cJrfdLWhPTHEW4D4dJSe7mADcMu",
  "key15": "3xNPTfhdq1475Z6eFsus6ywDoDJQRxdRzdNnXkT9kvQcwR1affYmWp778jL69VNKZ3d6HfpPWCzLUXSYpgHCzGZn",
  "key16": "2euyKhgg1RGs4CzmYjPndqRvYcF2Wnhd8txVt4weEc7Lak6MzPJ5fdNpTK1ZvJTGw3T8JeBUGVYKWgYN6hvfLQAk",
  "key17": "5f2YBXFBTDKm2U6rRF8wwSUoUWcxPqT6e9LNxVe9THUKChty6evuJNTPeUvTuyho8TLxzFczhyqUiaF8f7YPdHh9",
  "key18": "3VZu1mFis1Cqdqhyaobarw9Gz8VerX3bMbQXW2wB9XY3F271mCq55weykxZ2i9LVJiBNDPMWcdadGLUSTbtgiz4M",
  "key19": "2L2vfZrtqf7W7wGsrBUBior57VXYQoo838JUrDxP3fwaW2KtQZVxq8qVHv5ZT3KVqP8sUhZcEYt1R7zk7pERq6ct",
  "key20": "47jxqWG6iA1aSrYQmUuSMPPdJs2WxBH21tzirrRKw6evfNFGv8anmaM8baGjNoajEjRfo2EKsuFw8wWnC4bkPU2u",
  "key21": "6oJyVShoSYyKdzC58pS44LPsWh1T9Uujuya55kDMnikhzfmHnJF42RZubz4nZK2F91k9H1G8Xvr4H4bB2DpyaEj",
  "key22": "5rRR6SqWJKJmeRL6StDB34mWDp1N6StwPn5CshKiX7DVLRG461zJMtQcJ9gUEcN8rBTxDcgy5SDT7yi4RVnVtsQP",
  "key23": "2MmGU14zt9iBsuuuq1PnHPCpz7G99TzEuXvzwjxzk992t92x9Z2dF1jGXcLJmVRwkpY5H3dqbhqbr8TX1PZSSbvv",
  "key24": "5YPiGJ4xBXMWC61Uik8nPdMADhjZJpMSyR8v92GHj84b2HwEZB4UdLz4E41sHbefkD93RyjNAaRSYYs6iECtkPUN",
  "key25": "2RwiKSX4MNjHCjMryqrN2SqBEaMX1ACZTieVuaXt5KZxNt6rUb8toA7UZym2QmYtLBtJiiRpPZg8vKRrr3yenwjF",
  "key26": "468mQM4em7HSGuuZHxAr8zESh7c2GQVoCnDGQh2QviLp5bReqrD9bd8wVxot4Vg7E2qAPaEctgxVdwJk9XUDmMad",
  "key27": "5HqzzduREbPwJNTju71dAyCsqpwCquJu6zrBNV8shXrjozV7HtSoagA7xRW2fYvW5KoLZbgrj4nTyKa8XobHhgsq",
  "key28": "5SbvfxWHsErrg51Uh3hGpCrtQSbReRqppqB2dZY8WD3ypQGDvh1uMFzZvrZrw8HkXSQss7nUpJP8QLraUdW5SSDF",
  "key29": "4Tm1L4EdWZqaS1Fte3ZfQxSwxj5EXGe58PZ11eDd725sHHYahjqZmHNnCmBh1MtgdRNePWSzcoeuiVbCxQfALMtR",
  "key30": "49Dt63rUE7MkmGPqtzZ9v1yfEuUjLgURatVvJbFXoELJd3nSw4erprNs2ot7jFHc7E8L5dQiV24yfYtzezMFi1gG",
  "key31": "3oeWLwcXEUnun3sa4tDXVnS9H9sNgegZMZXvjqgbjZZA3SiP6YyBo5mxiM7H3sZA5mxFkKkMvwMEkqrMXNRLR69B",
  "key32": "497ULmQjJsxe2cCUfbm1VM63kj6pbuPmSHUrhqdqH5pTJV7YMoXqtB2on2fP5JTqw2vAdeWe5t6G3pZ7w8WWTLgS",
  "key33": "41ZCsZfPtVtCCFTxqfFfiFATUAxfbzEG4uBxAx5hzY3TwMGQKzaBqHH5jfdtFKQLtobqC7QoVnCubNLJ3t3n67fq",
  "key34": "3L43LBPrEUpBjUYubzRP4oXGZa1QR96H148Tc7RrYDemAiGNiZZAbvkCKitbK3bYt7SZUzVigiw4t4ocMeynoKuz",
  "key35": "45JVzCRAS2hygU844r9gY87Dw681M5Ng5Dq9zeBrmfQiAUF4Vs5XH3mfyNA1FcFZ7YY2HYmJd5ZBadX2RgzTpgXz",
  "key36": "Kt1GMV15jG4GGQPnzUPSGVKW9gHze3B7w5GzZ2iHm8pp5Ap8oVKLfdxMvr3B8zBbGFPZtmrBwZSqKzBSR8deYuD",
  "key37": "5Z9DrYek4XPQ5yETeGbckkU2TEafXw1uH6PoBS1gfgkT8F8BJouREjzvMDFxQumBLBHyhhXEJRYzdvqq1RNGR3ko",
  "key38": "2JmeqZeX9SRYo8zqmvfP1TQrMPW5oC4jhvwJdpx2DREnMK4n1y6j7bPctWxjYigJbMSsepmkiS4gjBDsGEmaA88H",
  "key39": "4mKCSPs6qdFVtd3Pv67xb6SLzBDaXNnJ1Ns6AyQDGeQU6zWCZzKQjk6FfX59dm1FFFkCyQUK9EztfH4juFyvtTEA",
  "key40": "24xVwuLRkq6g8XimhW3Jg6hhqFsnz9xCvL973hTmxxZ3RkNKDYLw8JVxaWgXEusvkLP8nThGP3xPEVyKP6VXmdPg",
  "key41": "3wycULo1bE3sXofuTqcA7FNxVbdzJNKEgQBasWQA2UMnUmij7anXTZxVwDJMgtrt3BJ5mfMUKWJEsQBMQjJcyFDw",
  "key42": "2NnukZD9fiqJr1tRrFDeei29PKFwu8cZEoAVU9DhpssDr1tcqNU8gj99FzJGJZyjaKBSoP2ZJuWMcSAToi4kv5Jj",
  "key43": "3AFSdMStAiWwyH8YAmCFmngGjgZMko2DssPtkfT7dCxQP1hUh8GBqdr75NHJvHcQGQo7mmjqgCBCooQkar1xxm42",
  "key44": "7i1K75YZTGE2d2tkijp7AgfPnrR9YkZVRk8StRpcnXiBCwWvic9j3sDu8k9zPf9zqpygBWhzCNTiLFSTpHJy4DL",
  "key45": "rpbNZcjmx1Mnpsx7esxuvBB9B7VfQttz7DVXuLNkM5Nkm4cAJtfCRCELZRvPCM9ztPjxrxpbx8vTS15NgZUq5e8",
  "key46": "TLwfaRin51QPhJdFAuzM9zUt3P2cRf7ciTnm8KX4N4Wm5ygDkfHsT6y6ay59VxCg4Zj76EsqwC6YbMAcJLPJvbc",
  "key47": "3owDgGPEvstHC8sLfqwt641DPJLokmUkf74ebctREXMz7ERt4fByTeyF9M6Uw2GdLKiHq7tE1jQtu47F7qtmwQeC",
  "key48": "62QuvRap4z26u76ik6HasgtmcTA7t8XSiJXbnammZ5bdtoJPaUcsxv3pDKxv6tuzEg82MgQ5LY2btLmckusC1RXC"
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
