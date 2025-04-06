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
    "3TZjKa2mXiMjcyzpZn1pASXxtepStgPtPgei96YXa2KtfBiYSkPSSKGznkFkrbHkUY1RMBRthPuVqU3y7LQj6GLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKfpRnyrfkigZbtw9UTZUAb1vzYzb8fuEgSpPmLsnrYmePfJi9vBcXNuT82EJzj5yb5mEbrie1wjTf9Fuk7U3JD",
  "key1": "274h3hGYpUhTumLinbz4R8N23D9oHAeFkNZyTLNm6PenTD4tAtzCPU5gcFsSXT4EKcDFRvY7gg3dDBiXZR3dGN7u",
  "key2": "4pc2Rgev6TzDRS47ZGRW2iGmWHMGq2uVUB57vmtAuqN6H5i8h2bAUBkVCYksjRSwxJQ8yJ28fP4EkD9AfavJaVp6",
  "key3": "4kz63Qf3p7oi98YaG3kMw4qPnL8ZMFzYWGwaaYzKugxZW6jrH13uywhdoFyGU8ziDd4eNUcTZ9Wgw7SBQQnhr23Q",
  "key4": "62Xj6P2Hd3zQHvXb9feEKZETVs35Z3mFUEzGRdB7ca4W7sxb12k3QiXTkCxjHT3ureWbuhagdFLaFxhCs3Wsj3zd",
  "key5": "3bfSFHL6AQxdqiGj1DkA3ZYDGtSRf2hCKDKN4JJSx29Pw7xcU8tBAkVdhND9iP84pz7kVJ1BHicRswasVkxZMcPm",
  "key6": "43vt7NZsSX16j3YSsk7PpCNhE2XpDmAho4wpjnxnJyzmXg2a8X3PFA8t6JJjXCQsP2J2KqbKY3jLH8PSubQrsHWp",
  "key7": "5ntkET3L6BJ9MkMQ1PgPszcAusvJiXQY3enedW69zMbN1ip5MuB9KQR7sxHQqmH2rJrLb1C51F1DJSCiLjoVMNMZ",
  "key8": "66mNcRTjbqwXGVRFMh8Vyq9savbARQi1xFboJ9UhwD7eMbTraDcj1MPizkxW8tK9KbPqe7A2AXV3TvTYCHn94yWg",
  "key9": "3uUp5XFbz9QpVNpzsutcuWGs2dAGcCu3ktWGcm5jqCX4kZ11LHGw4NLNnre1pVKzjrdna8Eu2nmes3hY45SYAgpV",
  "key10": "5R91J9qSSCxmGZULPZXXjN7bCYj7k9ryik4iyx2xrdNv7UNYsWG6VmzwP9xUvtbKuneMyxNTjuJUf88omYtL5NKY",
  "key11": "47jkY1jEq8D3PzUfXdBp3HVDtagweXbxBkEi2DgnViKhiBMW1qRjGYN6mihptAkk8mkRgvP5Hurhv7CDRsYWvWak",
  "key12": "3FGuQFGh8zGB4kbMgJLbfodaVN91zxinFdriLnqhur6P1eKJhTQy84EC64bef971nnTDoRFaeoAKM6Q9UPXA6KGV",
  "key13": "5Zk6hca1J66WfmwEwpPHJz8Cn4ssokq6NirNFfKYCa3wwZyjngEbrW3nHvV5XY1qrMD4bBzZFCeUCcb3jYe7zR88",
  "key14": "67HfzN46VSqCcPmSSWhWR6SRHQ5aGgg6SJtbGCN7rwVA6vBHLVPqdVkcFi5Zy7RsQBAqJ6Cx2JHvGQUj1JMQy3ac",
  "key15": "X43BTKwWt47Z6i2dser9vHQ3p4YPi7WiF1MyjLXdiw5tiZ7d5gTAa2oFw6uNyc6eMwWVjnbu6U1wBu9Cd1D4adv",
  "key16": "pxaDmFf2RyR5GpqxERfvdNXrdMSosEGqYk6vcrP9rJBPacq6tSwYLUdRBRwVSTYVvJ1QCMzYcV47xXgUuZWEsKy",
  "key17": "3T69MehaucFs8jnj1ZmavwnDKJVXmd41LEA1ABKfwvVTiFnzgTRiXHGwEsVactgi9ULi5hoUzZ2Xz58uGA4c5fvi",
  "key18": "3ZFr4F86ZCDHKUj6bsUYeVT9gzEsm9zCkPkKynEgyGXca3HTkLKNo4zoiT69WaqrNEpRANGRRWR4S2qS42dCkwa3",
  "key19": "3xiqTpEsQZvKKrFKLuSXEQgewTd6NNDb3aFAz1Yh7HiWAWEFzorgcN4x61RqQZkTGpXz8vWk2mUaDeVpcsfyH5Lg",
  "key20": "5jRzrByrictALjEm3hxnTuLC97o4vM3DGmSQ6RiqJ48KGMg4mRZ5fGUrRUTF5KcT6xW5DHhmL9yTWpMdBAeMXKJw",
  "key21": "35Un6Vpe9cYvYe7moVbwNax13r6jeQEdUf49K1gpaWE9uHMCWSzRX2Z9p8C1V17DnCfnbqGo9mig4RY8Cpr1LkS2",
  "key22": "diYfS4QQM52rWb7PyhEEdsgkZwF8kVZYzL9KZxDU7qLLbX7fPVidUEReBAn9ykA87dyytEqfW1H4i1Q93MHz2AS",
  "key23": "3u5ECdgu5nnMdvLVmi3URpV2AAdJwYi7ASBgbFTDuUAz1DrpeHd3hYTAEjtGM8AWPfqJsfdDMfybHctrPDxeSZX4",
  "key24": "4oeCJzE7GPJBADxasFvkZn1KYGwyRr7VWKLdtYAUNL9N9DsAfwhe8Gs7bDBcsorv8B2ee2zowb1b7fnUW4cu7vYa",
  "key25": "4wiHtX24d7DTp9L1ucBrjvcEQVQUqT2xcDNNaqmUMjUCi7dHWPxSqoRLLHMSERKoDDMrVt5HXBVgu3NywjPx1MNJ",
  "key26": "56WVe13ZvsxjpNnjCazBQnrPLFsVk2QpnSBU3Lo7vGFGc9khbk7aUjdoPKGKBaAiUtjDvzAfBfbgPQoVXqVMEL5V",
  "key27": "48VGN6Ryc9dks9gCPZLijxTFoGeNKjPtKUvnb6WvpAhnazs9wVVumYHiz2Y2gjLZyj5UK6cppDVU9Q7QPPNqqNeS",
  "key28": "4YFacBB4r7rF1SeFXyo3kZT8cy2tDQJ3PsCevnptcfqefx2JB7HKb2D3uV9j5MGWbQ7oi2G6YZ3vpnaZEBUnWaum",
  "key29": "CcR5ntneSfXtFFuVjYJwt481j8uv4LHtriitXUFJmm3JjwqGL2ecN9HKKhRkxxLhTfjkGVNEQ9mvra2K7UiZAxS",
  "key30": "5FMc7aidQwVVAsLUSZBJkxtCqv78KSKfKwrJW45CossyLbVEKhMWsSZmsuAPk4S36RDmnmbh8jzyekzod3ugm8mf",
  "key31": "5BdjsV8wgSxMji2DqEabB76cTEsMhiHj8fHTUtPiK5cyDwrGPNA11fyWv4s7qpToy5XjNpRkdf66awsATaejQJAY",
  "key32": "2YwzVYzZdn4yKx68ftUUxNFNkeCB18xDH2X2wjc4cVt8tpbFp3YDnMib7NwudmGkUXxZHXfAZyuq13Yo4XeY6npi",
  "key33": "4VD9rHHqAhwLPeT8VoXdNGjRfZHr933u7NJNxdF7iVCzQz1PQUJ3ebgDGUp4DWNkfhAbPms9SVf9Hc55pVpHSV37",
  "key34": "5ra9ErVfxbJDSSCsYhoG2iqYsPAtBNVkfmKcfwJAcMk1KQ3ZXgg5ZXrdGjNJC82X51MLTyUCe9x7g6G5ukf6rMFr",
  "key35": "4nJzbETGUv2uNx8QXcDN6Yqfj3HB3uGKS684X7r52z5za251FqwH2LVEZRuAzzjKa3vHrdrrLCQYj1cFw4LuMkyV",
  "key36": "2iuCFRP1hTvQGuwdvh5ghJHboveGjvLxgiNZreKTTqKk8YJMcAsosr3GmzjH83PK7MeP8J44Jyx7Praijymfw79B",
  "key37": "5PJKWdLuZH9qev2oWaznj29wbCgoQrxmHrCBEAQow3VLQz7SgFU7BvmtTYL4MXbpA1X7PVzSGRUYNmBvwJYdEdM7",
  "key38": "5EfHrgbvdYYRyMqF8xN3zoriKJR1ioopn44CrQudjMLXys3SDvAGaDaFhd7JQGZSxE1R8uaZ46qdodu9v5V3wyPL",
  "key39": "kGDUqEoJzfAPLuqhrDarqCWJMT9TnbPeM45WA235DsY1fui3cPPdERxzkxp1ftSpHvFrSphnDMJZrszieJgYBYL",
  "key40": "2d7DNA5JirGCzAmDGzrrSEKsopzvkipHWsBtKPMgQyPojj7ZbhwLg5egE7Svd26dUWzcuw2J2VySMdmV9G7yiArP",
  "key41": "2VdaRndxN16p9qipKxSpp9zm9SEodMUtbgzWaNWt1Yp5dVShGWz6BXDo6ARoDqRxTX2dGqwZPmJ5trzC9pKyAy5a",
  "key42": "ead7foV2oDPTnDMghs3AuAUdifPhrCpQDbKC5bkxw23TmBLSNsXP8Q7djs7ScBVTSnuXK1zWnH2PngK2RgeHhqi",
  "key43": "39tuwiF6UaYjCs1AqUfQm277VytuZHDQabeFFBbVNNHB7vof4H4RKRpf3MLBFSHByUVav18AwQF54a8UEgHg5ugt",
  "key44": "2hx5nwKuUseCDDcsX3MSaUDq6fkmHBUJuLG832ek4WNtszCjBt9ZVGYbepfMfa62Z19YCvpe1Pib2AVd6vNww594",
  "key45": "4qe9o26mrRDub7rmVPkdSNTNriQ2pacJyQ3fR5MhNhzT1Ub7u3Vwj9TPhhBJqtgWaWj8DdtsCw1iBH89NJzbyu4L",
  "key46": "sDpRxyMgdJei4avzfwpjgd4NfNJkczDkCHUHBMk7d7nc9z2zpAFd7oNkzcweenjXNQHTBBbMqHNK9ATfiWUc4sP",
  "key47": "5gXemQ7yZEYwaqALPLF8P3zEKR3GaeJuBfKTTwX6qmQMVWVAV1k9zqoDJ4aLJM3PKHhmy1m83k68CZ7om9444unP"
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
