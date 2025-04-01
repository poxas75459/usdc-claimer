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
    "47kR6Utt4rs4FT7tRLiUUcyeixqt2ZaExqfvF1qcJTBGu4NajohdBwUpgWYkwjn4WENGrrBUySQuYJ7B2VpWKmkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xfXhAEAKutvjrRZa15zWVDgSwxitL1Euk99TVLKYwuo1YKHte1f9in41WU6H8KE1a8vbfABGbaNrJURDzCLFXM",
  "key1": "j6t8bS4t5gQjx1LGYn4htkNiD7etfrnzX8bjMPR7tMQpQAM1kqujiS45DQHtAqMtiTPQUPCBJxCcRTBEDFf3oZ6",
  "key2": "2ar55winYwiJtcqHKih8V9M9m6ze8QT9RfUMRQjHnyZvP6t3hHQdyx9v7wZegbrfVDkc3ECdHPiHTVoEEUe4Uf1x",
  "key3": "2gm3Rvi5XJ89d5Lpop2gsyQ4eDri7JH26EmQd9tmZmFSYmFXvMgDUV4JUc3VXvAbfHB5k1YMwJAZ5NnaH37F6jgy",
  "key4": "35CC6Uws3EtjBe3kMhR1JJSGWR7Ns96MPXH7UdSKAzrSK49vw5TFpFgi59bJSgF7P6mSkVQUv5unL2rn85qV8g6W",
  "key5": "4aDPEfQHBz6msDSZaykBzs71AzW1WTjbECvxAuh49QNNqeoDRqnnaUTGYhbKSUNTfy7nBGF2D5GZ3DkqYJ28EJ38",
  "key6": "2hbzwGbmDAbnghYEP9M7LhqpbpoknySyzxo8sifZJcoLUU6DgQVdqRUZvAW8DU7FYJaGkpaAPD3NEmjpwXwamxJd",
  "key7": "RWd1Crm4FkTZRjRuzRGSWwhYUf5iD1mhcuXH6mpGQBaLDYqLEk46Dr5cG8tw5GEXVDuo1wWpnqCDkxnCoBMYKvh",
  "key8": "3Cnpp7YmPx4QRoHzgdYgPUfWnwbgPj4qpwCKsCqscVnhpdp6CNRr13APf53PyXKbEJ6UETQaaM94nrdMYTWUkxqZ",
  "key9": "3CJxm25862K9JoRHVdmaH6ZgAf3bpESSY4HNm8T81cnZ7hZGdRFHvGSgrDkWeAKoqaWwLCbVwjEjkQ7QVP6T1jQT",
  "key10": "25gyvRhsZsyT5J9Dr8dvj8yfXyJwmpsvWk3ZTF5z6MAPPEW9GUBpeiJaT2f2Lq1gL2ZFnq12EpQoeeibHr8xSFCR",
  "key11": "t3d4swgr3nMyyFG4ihfE7RpAsnpTJWAF4TdRXy9S9dGcFnPVcFjpP385hdVRoa5CUXmnNahzA6VjWUPi12Vta1U",
  "key12": "2v6n4CFfc6LzhELAhc2vENXEe51ronB99EU3A5qmXbRGBCGXSU3t7ukqKkaxWJM3sfKmdK24qmfS6qYHDrrtXxaS",
  "key13": "4QRs8eEPJ46768ryWEzEE7ECuAVpcbe6eafEYeEezcbWhsstZ9YtQPHLDmAz5eumaeKVggryW9x3uxduhbyqLLYe",
  "key14": "57ZthZKsJJ4gGbRewirgCizyp9tdNK8W2DUrRomzqGaoVHi4KNtQzFjFah2QifTFjZCY29xKzqxbaHmjMvYKofpw",
  "key15": "4vvUqGNSnJ1fQkm61xURj1xhhphb7KxffDzgQtcRP9zAQSAs1zMjJYSEPwKVx3gS1sfnXTe7b2zcL73rwicaGt2H",
  "key16": "5u4RMX2bhUPUMv63ToN1rNXKgNA6ib1fttTiZJGN3FjJBu5bETJEyZAiCgscwntykgoSDPwdKfNQNnE2v35D1Cjf",
  "key17": "k8wN7MJ5XddVRefv7UALKkU5wmCChZMdmcLRZZE6GhCoD5SBAyG7Mafh8jTVLptjQfWBD4k4UNnvbuUkxtYzMCR",
  "key18": "3pwq7i8NTs4kzvCDobZ6oh9Wks7nDsDTCX7LMj6DQAtFBjWur83j8ravEZcKE1KspB3H39G8nZLjLQbe4UFQE2zc",
  "key19": "5mtE2WV8mBP3RkcPbWFXTemuYiUhBh5x7rAT7kRcJ5rp2cpXnuCRQyUh5772vFEzQghJzptMoSx8spmV4SNuU4mS",
  "key20": "2GQNx8wsRuqMWU5SjfrF5imbYt1WuxajQWhACqLELwodFoBntJ5sQrUWqYZfydj9QzTU55qWhVdydJEgi6TDyDrM",
  "key21": "2wrA8duxVyYYQukXREkn1Xm44rwg1VyUbtjoedvd2oKZbyUQbBR7kUwHJsjj5qq5GjPdmUPTgdn4tEEKrCAKBrFs",
  "key22": "4RrTEhvLHWrHmGXppqM2ZhfYSAGbX2wkKqMZQHFYhP3Y5u4G4j3DPjktzQ26Z6C6mX4j3AjzoAmR5kzDjoTwAmMW",
  "key23": "2SDLKcvMH5PHndDJfxnibDJxAfu6pEstxbSgT8mshdYUMBWt8fqAibZ75CJajAriYnCZcMrwgV7MjZJ8Kkg5zA2K",
  "key24": "2pPJgdhLSHtXZqMo6mr5HJDUK5cSE5TLadnoaidy3Xn2pqZJ1shWoPmCJ6AnUFSYrTfRmczeoUs9iu6PaPWR9CE7",
  "key25": "2VQ1nfUvc6sBnC7AR9pkpwbwuqovQhzy5j8qrpfQSmURTx4XC1dWibDmLPf2cLbyTgW52LvGwfoni9mFiaxFrxzz",
  "key26": "jFJSXoN21gsLiuHPMT4SsR3VBAzgWGvdtQkXd5fvp2PNUaxTTe6bb8cAWpcdW88L2WuW1jHbj4dsqSmojkX1K6f",
  "key27": "TojPyMu81bgXJ8RQQcubb6TqJnaFhQrVoJHdRGe47US8k5sbfP7MjW47jMmikWGCLBfxpeA7ExF7bgFEeryj7Aq",
  "key28": "3juKofFbK2fX2VV3Zdi2M4KbouNhWYMWTNxxZ8npPxJi6swS7wREoDFimu7Rybbvo1m2a2d8XVNCWPHYMTsaqBqd",
  "key29": "3KhdDPfRH8uAR2Px1jaZWkaMKgiK5ED3F4sNHmefWgiaKD7R7uLdCtzWz4t47ed4CR22SmhXWgQ1BX5rkWe1XmQE",
  "key30": "3GCtJrxXN7xffrRDHxUDn9k9Jvrxm5XgaVUWb5aeE2Zj19wESvFWrHFg8isfdHz6eGsNWzVtc4bHnRgv35epoVcK",
  "key31": "2A3fb8MjqtAmYShYtTYKcAVJFK4AG7nmFie11RPpzqUvngNzcDv574W9WQLUrktsSXSzggTxQuuju3iBHnrxQjpK",
  "key32": "chBdVi3yJ9GPvekNR1U8dpqt3n1B47V2TNaBFhq9HQf4URqiAPr6j2fnaEQKMaBYC4UXBvfVqaxW2PbvNYsYsPv",
  "key33": "4QT95uKykWQEzULNuU2Kdziexw95hEEJEbfwX6ERgY4MWXxcg2tXQR7TGbm9cjL1wB8Vt41RF6b1qRcAYPUkHqDq",
  "key34": "UCfBtTRvUFcsmCLhU2DNBy5MSgew2s9eQSWX7MxBfdaWvoEBhQsa4dAQeKnx26GgQ51UmVkycr4MuEiYSea6ZzQ",
  "key35": "yw2RKb9WNfvQ1jJCxgiLD5JzFdWRtu7G4q8pHiyxWY9FqJqMzvfCX4FS4gstnA24ZQJyzVWVNBhrwd925EtAMNg",
  "key36": "39ygq11eqpSs3ZZxxZ58AbCZKLCVTPqjMrMLuhhsznf9KL2jiU5HGGNgqpQKLKsBAjqyK2LXXwW1qK7pKvofd6FA",
  "key37": "3NvJ1iNPea3RcAepTVAsKe6FkJfQodcVLvPgq1aubsS6e6cgYXPDkcGMvrAoPwP7rFVFznCZE8ugyQR58qLcs55w",
  "key38": "mxTggSyCJs7DHDSZhXCNJxkShbWz1yxjjdz6z777oiMYysMCY3eeQ99ocNSG7i3jWL5vmQf4MuSXZTdCtPD4bbn",
  "key39": "5wPMRCpwHhzWsN5iiDraDBvuHqnpbZDSw1GuQ7TskeXaJb3T1YFecTWJWiFphG3AyyaVG6nVSpLgDSGq1j4Zqz61",
  "key40": "2jSjs5sakgYtP9N3CZKdfSpV6ip4q8BfKckvdtRtGVrcYGLMstnLC31WHidy88K7kC1aB5fystukJV3zRWjinhh",
  "key41": "4x5xJJX4XaFyXFtRBH8LaYfmWafzUNuy4yqHMYjVHrtei1pe2QsQBQLaQZEnruAfcFKwrzz96dBuFUS7995JsmhZ",
  "key42": "2aiMoxmDE5A7NMXmYeuVCMBrYf19GLEw32fkTyj6fs6KHkxAYkbhkw7XSPqDiUy1Z1PkTXxYPdANg6eXpwjWHjME"
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
