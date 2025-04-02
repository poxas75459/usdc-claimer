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
    "657xdwhB4zxmHddbSgRqacADWApP8TzLmgy1bohaEeiMmiP2YgXHqFqeb11cYHt1aNg8EFdjM6ogpvaE1wyzE9DJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQY1ysqg6wdxZVDmhoMKzENAsGZFm2krKedENDFBTNDx5pYNkVTqWi3FC8Bf8pQhfmX4ThFvtBB9LtCb49Pe94G",
  "key1": "vNFovST48Sp6nez3mTo9RygXUtwmRk6vdJRJGv95PjQmrrNfvJCa8peXNU6oap7JiutzSf8fEim8Viac8qrbLXW",
  "key2": "51deZb2Rnsa3hKSick5LJLuMXkYXdZCyEjfERnHB4YnbfFj8isjUrQpxYDU4oUwmELvC79XAUAuXHsjJVBXuHKTJ",
  "key3": "4g6FKia3xGaFjCBUHKsMT7aFbAPySk4oAEiiYttbiKGV9hw6L4mqE2M3Lqta2Cd2F5eCvwAY6YdZMfnmomF6smLh",
  "key4": "3yUxHAauzv65So9VVUs8mA6tPUJStGVBKjtEW2Y1ZVtxaCvRvu2TMQ5JuNVC6TdaoDi9sxFJQEfgFQ4rw2QHkCKZ",
  "key5": "97JFWv7xo9uyyFkrsMPHzNXtAoz226AqyJaPiyfdooGs7SpCXYZPKQgpPTwbYm2qedxrBSpqN3ueqt7R7zfD9id",
  "key6": "4rHFykANYvPHhWBTNiFe1AmxGd3tbUqGcZ9yv9Hj8dnFk3zTwj6Pxn5GjN6TjKN6DEu47RGDuyLRqhuBUeUujubn",
  "key7": "36WTFzaZWzsRJExu19AUuVXbg2ouq89obf3Pj4ki93SJ6FK9pSkzs8gkzZT9nfEun3Tj5ENf8AjWqdFwLMWZxed2",
  "key8": "5m1Y1vugWDiesW2DE6ykdhsDGDi9fLCjZpbNX6cAZn2TjWyxvuPL2kdEBitjfhGn7dhudPMHkHwDG8fUFE73omFV",
  "key9": "WHQHkbwRnUoQif1M6bVuUwmkujF6U6rfsnUKvthykd5cxTUVtHG31NKx37zjwt2p4qTLPwJ94rEQpkdi5s7xngR",
  "key10": "DTUuv43wrsgMXxoPYAbMXPHhCkdrcohirNwrVHZ2yKWbFqVcYKQHP4giJicYScYhnJ4HTpe2MAGq7ekXPVq5Mj5",
  "key11": "4LdJ4vN32mQgKFjuR9uLmo9fQJavi4EziDAQS7GQhgLZMrhjqyqPxJ8vhVsmPRbs3SknUUa6gjuX1wEYkHtSZGcp",
  "key12": "39oQTgtAtj9TT5CvpqXZHoTWvHKixgx8uVnZessrdy2u5Pmv5NGFYPyfKpnda8WwmM4FLy7vKHqEuEy4PQ5xHcKS",
  "key13": "3q9dLcYBw8VmrWuPQsYeRk26FcnpMyrdUsLxBQBu47Z6EcoYB1vehm6jWpUYv6FHV7ADLKnEEepBSTaqrMvo9vRn",
  "key14": "2q5QUjNQDXkASvYiom4wQkXEVTueLvDEbc6fP58Nuo7NViyw1r9iXHs16eoHTf8np5VXLXhjwqJNoFMR4xTRsT8o",
  "key15": "3iQ1cWAEuXo6W9SUYWA4FnNTh7wt1raASUeTYoBFXqB77dm7hVN4h19cwnHs8RCFPgJipMrAraNgta9bqPfuGqL7",
  "key16": "4yq2TM5aGAFHTpsXyNfQHK61Ynvr9GKtsn7QDgKDZNXfAabGMN9Nja8KcHgMhgKKGthasMjkrz3FSs6cNQtvwTaJ",
  "key17": "661H84Deu2sZWxSc3o9VBPUWgMk9FJpbZdbnUjZ1c1A2xKZpgUeT6Um47v4kKjni4ZZ9iRyB2Qc4depGSsvufBVE",
  "key18": "3JNA8NKaPVAzzJbiabSorsHgv9BgbAfsjBgWJ7H5BqCnTyj5bkTHsWN3Lh21VT4uergpx24MEtCvaUwfbbpwuXtb",
  "key19": "dKFjffHiNiWNFoVFmVrkkuBXzf1hD7T9iwwGkT1F73uPvVBbZcn7SKGhAUpowQDQwQpPeVBXzRpj7maPyV9qSwH",
  "key20": "nMgWVCPsQU7f6ZaNN3hysscsDy6P9MAEw9pvkwAkSbeyNDdHhmHHTzKq7BE1VxE54b9zeq84upMWas3HqUMrcWn",
  "key21": "3WahEChE7VNHUMaepSzyPWLdCPqFPJcpcqUm3wC14SagG27iSBRvBrEgQZ1gPESabWBnJoZcXqUWxLyFBxsqgaQD",
  "key22": "kxNHnyvR4j3meYPTyvjCGf9eCEzTW5Rm9mW2BbZwCpkcpBEFpgASWKJqYc5FBqtzQundJ1ffFQnGAFTgNKwxsEy",
  "key23": "e6Y5K3LZXLLoWA8uY9gmsRFBTNc9cQcfzxxseS2TbBY4VJERRRKrapRTmdfE9XW1DmwLjBKbfPSy4HNvLw36Vok",
  "key24": "5Dh4DjGQLwLYkNJKZ7UuAbDaQPXVxuYosV6L5ePJcgepiUnnczUCjPUZhZ3F8oVKVWHxuQuRnjuspJEk5qiJER1J",
  "key25": "3fkS1sazTx9nKR6cA3TZyAzgJSjZ1yZpPYSnK173CfFyrwHXoXJ54RzCGNPnAbytDpTmXT52RUABWzPYxv8YWiZ9",
  "key26": "2riaaB2qg2VdVkmp8X1HtbjwJhNtDYswEmGpdmCjteJ8RWucdwkcBnBPDECivdcxWNyJZzpvaVxofK2fNpuSxuGV",
  "key27": "2fjHBXLTdU6X2QGXMhSfa8xGRAgpXn528HQzwwx6aouxdeLcBKmpQ8pgqHWX9JC4gN7yzZr54RGok1AJc3NNm7iy",
  "key28": "3otXTpecfoTg4wXvPN5ZisA3BApoCipJu9Xaa3xA5sBG9w16LqTSiomRHw5dmedCcwuAA5WTZVRHYy7pwHw5FZHn",
  "key29": "3DC669SGDpvq3X7o1fPXaFrScLi5vucDpzPcLdoVJ2MLCcW8TtZX4JMpETuj2HAJcKEGEnUt7Z313hA8A3ubZtUP",
  "key30": "58wUJAi3UDUTRxYD27jdyCerhdHU4PpqNwPNg2DqzXzkEaPpwWTPQ9iZLKiT6XgGMwjH1t6Yz8NZPGA3tcQsqj82",
  "key31": "2F4y7mcJuda2hRtfTw842ySK5gd6dUmszjSf1G9ZRafdWrrd2GhDeZxvLzdTAS7bdC617yXc2unz2BcZqcWmrn2V",
  "key32": "X7Fh7R2gG3V5UtCG6yBWGsnRNWtoMpm6FhvdHojTv5GH9XcYbJi5Ahu981yFq7rwsCxBs1Bc1sNkcygF8eCSjXs",
  "key33": "3xafZZhfSg5Zcq3L8Aq4h2ifF2pKafQWqvoP8EfeRsf3c22dgT7SjbgadyFdfdT9hFMyEZGhHxS2u6HB9nwtncai",
  "key34": "5pejciBNQVceu5uvpjr4xxbDuua67eKF8BNPLbbGUVNXMRDW3W8FbTiggYFTc8rA16LNHwgyiwKo145VeySSt2Un",
  "key35": "5g8zpiCexHU5LfCaKjwE8TFKomEmzqec9YbqkuWU7twbwXzrNjDLyxuBo8zQKTVTiCKZoifSZw7zJowejvxr7Pp9",
  "key36": "5Eet12LtWfugzvcfmUD4wSMFfp1m7sB51P7vp369BwFJKLETW7wAgaSDGuHdN4MA2JoRfodqURBkpcXcN2QV4q6E",
  "key37": "4NVAqSx7ksUoSDjiAXyLyj8dYwnkamtguAUtaZTLtXQY2zX32d9qiPMFEvfgKJZ7TRTkqHzsJvNP6fzzJTkywKfH",
  "key38": "X3KZ518CU2DuJkD1RgJxYPzTNGstT2JdYtcsNSyS9pVW7HwFxZzmRzLCeBQuJAvTPg537YN6NFEaEfWSFvcdBd2",
  "key39": "fWJkaSzv1gyhsDuhXtWZ51EUHoveQYUoVMaVSAEjYdBhqBrZL23Bytq22rDcYrQkFCuJs9GRqa31FzLiGNUeHAp",
  "key40": "2XLXFo92gz2cyafJuLL1qpGSWj9RoGPNt9uzk6Uon3pspP9ohCs9Nu6hCU2EpcvPU1vsmL3XxG7aLYopEvHgKraQ",
  "key41": "4QyU5i9ZeXBj6Bv4icDjcCL75jz97z3uruf1T66qAMhKhireCwV2U7JeJqMj4Xw8pMTvWokNUAULUCvCvthwZmQo",
  "key42": "5XizRxsuAb3rYuy6kgZ3DyvGx8xJFbFt1PCn5Pt46uB7BU7N6MGKvuPJVDXZDTAuY9hNPQqNgShC9jaYJNid8APK",
  "key43": "5Jy75nhWGWvDj1gjCKd3HZydNMGmk1ER2UEt9yX4oS84sGaokBPyWjHp7mHydtUwepuc5eH5jtN9QVNC1qPW7P3m",
  "key44": "57JDzARbbgyaGq7qvAUoNGnbddbSmExxqpSV1jsSwGJkdRpcosdGH3LSCaYSyUbscYADRLxT5AgePKyV83SDmLYj",
  "key45": "2dQXCiQWH8hzNfCgGWBA5STw1U9BCbW1djStW3FXESm7RiM968H4RsMHu9nc166ZJmR2y7uZ5XLo3uuQ5muz311V"
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
