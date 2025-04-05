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
    "2H3arBMhdDy9hU7qg5XpKg9nLKF33tqUuAK7th75dW5VpivZ66hNXzCbEddWcBhVNRDaETWFY2SCUi1dS2VKubgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjukmjUE1VDwWVHmC5q5iTceJEr4zHzuyd7gokpxy5d5FkcFkdpkPKod8d1QfrSn95mUKRnXZddeFHwnYv2NpqM",
  "key1": "5fWAiGwxCnFTYj2KHL7NaKyLSsVrivsrhFnf4CBwSVvmRPxPkRg4micdA15CVtViiCfR2yn777RaWWBhJDK5LZZR",
  "key2": "CNVtyfZeYtDSj5DvUoDp5WV7RN7mEc8hna5eZWHkid4KCuZTD6vFUUMieEJpX67gYFwHJc5T1PQoKJ2ieNWPtd8",
  "key3": "2NMypcTqvLBsABKrst1d8k8MRQyabPyNhEHtg2tqN67LwaBK4oKEqxyHatP1roW6EttqGHSMjwc8aJkGUfz7Kry3",
  "key4": "eKhpWXqj3Jr4EDJJAtHaAsBruGLS6HVwRAY92z924tW3hSHGXFg6cZAoABj2BF461x31FnZCUpNavjC3DkNyUEF",
  "key5": "5oF2Q2UMLZVc46tArvMTugCecRXDNkLxjELyVZa9CgZViAZrixH3EgL75JqsAsReBgLnH5C2U5rKNQ8Mbvg8KDGE",
  "key6": "4FdGCuMn7NCEvfc9fULbeU62zM2MDrALdCyCVwyT87rYc15k4jppiazWMKEN3bB6fFNozeajUH1LuqD8kuHszjFC",
  "key7": "5BjMRwyEdGMyGMx9dVtrXFu6GxeYxntDqPfLPG5v9Agkw9XGXr2wT6agfASeip6b3kYGjNdRjdGgyD7KyhDvvFUi",
  "key8": "48KoTP7E2rVvfgf4q9rNgQiZ5eQosWi2ikuxV8ZtrN82eRv8qNrsXaK6EkCoBFFnJdAZHPuf72TAPettkbkEJ8rn",
  "key9": "3fxJM3JNduhMDVbJHqjTVJSpX1ZKuDY8UjAbrYt38sGzvrdn8Gj8CmJzpWwEZRVB3hhe4harsVrSeT7ZFkDXruCj",
  "key10": "5R2UBNfLwmomWVtfCyzhDb4zDX6G3jee29PpcrqERbgUCMAVKU7VUn8t7DPZKkPij3mi66uvXXme2LDczYU9Nv7J",
  "key11": "ZGib7BJxmb8esKipNe5rRKAaRjxka9cpcLLnytiAQMssuVHPRm6vTaT2PAZ7LD7MJyidE1JPGZHmhnEHcJHrk46",
  "key12": "24xpsKSyE4haH4WmZ2wAVxuGWYNq4X7Er1fQJpvQjZpA8z3gUoBoduDtnMkthJf76aNu76aWYi6BCGM4igMuJtpt",
  "key13": "5qCxakjwvd325DCAcJ47aM5dvrmyAntoLUWJ4SXzKDmhB4pNjL9owvEkSUnaLtRprb17m9rpFKpkaULG5BuaBU2z",
  "key14": "XmhXB6hSr95U1GkpU6D8Dn5nK4is4zgmMjanim8wNTE9Ndimf31EtJvdwyEfRyKResuw2WXgvcvCThpLgvetEKi",
  "key15": "8ueEx8wBiSP574oRrEBi3xjPM46R8DQkhjzzQJRWr69DFoDhnBLFamLmuHXzHBgg8Mh99KefnEm5JhN9aamGTea",
  "key16": "2wwnPTbo8wCtFxKV97TEyM3vWgY4PBp6Hj7PYxKbqtr7xkZyUiDYaPWEkwC2MraJqQ3WSGWFjfnQBA3qprdbFk4y",
  "key17": "vaczJaCgMnqC5vQuTyMz3zKURmaF6QUBY79JrMMhxe68JyQ2FqZQqdSmw7VwtjgoYFfLYyBEFLqcbiDAnoxZM1L",
  "key18": "3d1kvG3jMs72FfNjybSFtMcXf3YaDzcPM3xv46Ud8K6VKGZdf7JrQQvhpTsytRWq7nKgCrK6jt4PoUdmVMm68oma",
  "key19": "3EqXVsC6pCzVdD2BCJwyt35zjtsT6NNp63wUB2sbn5v5ap6CrC8jPgnbHeCQk5mcakqPeNJbrn7cTcTbuJnhSTvh",
  "key20": "5Z3fDnCx9FePtEgrdc4h6ZZoWZdNuVypt1Ep1QqnDJT4HrQWf71JH5vYKVSHJtWaKfqiNDWeUBiAWAd9yexsGaFA",
  "key21": "3nN8k93YnncmmnFcNXmeQCmMCEMALBmX7Lhd1mNBWxy8DFFU4W5whUuqjvhcWyLs2TB3XpQq9h96v9r9ACSSeShR",
  "key22": "SSr3NxtXArYV6RpctRULtbpWP9UpPqhq2Tqtp5sigVknzMNTWqoK46xNVWdwcbnoSWbuJy5qnpTBS3oGqJc6Jyf",
  "key23": "VXUwMhibWcPpNeZj8eog72U3aapB6w3TNXv2P4ZT7PMSbanwPMGZ53KXGsb7sjC1j9JpHsJoUYozGbDpEoLxWRm",
  "key24": "8PVAWeFR11xNpqGRmg4gWkncAe38DdULVuUS1mW1SeGwuDcPanfQth4Rcoqt6iwdcXm3tEo7U9LBBAeG7EwxZGQ",
  "key25": "5g152GnHmzNZj1aHmFtXoTgQVpW1aDTp84pZcVAXo5c3ssowxSfXBBfrbUP8SU6hxYLh75HHWSoBMUQZapSF6ki1",
  "key26": "4bbmEGDPbMD9Ff1p5vRpvSXozqqNjV7gWe8jKH8p3Y8WjZsvgvyW1vK5rQBvPr8geA8UUKxmHbBaRyTasTEgF4Gs",
  "key27": "4s8517ZtDFQt4K8nUbEomfVa6jjDwiQXcRpQiJZygVp9xsMkmK4WySF2tdCkmMnvJPbXBzGqDArj2CC9JxQrrZKb",
  "key28": "5fPHPzoLKCC7kruQ3pD197AiLU7JMt49PEB1qqvhsgt82bcS7rtt9gmjmrD34eZ8eFGwBW4rmqquY9TduBfxEv2g",
  "key29": "2W56VQM3RKD7ZYvjUwmWz1h4N7MEhGV9H3ugEA7GtUzTXUdDe7V1DqQQ2fcgaoGwoVbunWfKko51uF2LKxbmyRAh",
  "key30": "3GMLu1DAkVa5ThaXW4fDsCwnQy99TuCr9VfevtN3LGZ4fo4aZ9D3HojtsZDzJ2rc4zoUZV8BYvRwA8CPUHdE2p9K",
  "key31": "p5EkYyqJNHvaCLp3fhTe3D1bJqjc2xqCj7cZVajeYcveoWNBZMyRVaGswweov66iVHehNT76VPnkg2EpeCiNNTt",
  "key32": "5BBYM71naYMoS8W7iF9JWKaA7sTfCJg3i54z25MmdhapVXzf1X3JVswc3rwZNW4x2vWwpk9amQ3RTvtZDWBkfvcS",
  "key33": "4mhCFCDrkX3os59apwbgu1JAAb37FSNXAgHaE3kvCgVbGmeqPvbQf1NReqGgrDVtQsRq4HCg9gFCoPE7ebF8y6rE",
  "key34": "4eunCmGNM6ZoQWRyT12th6TqTA4DQMefTbL3VUeLYD5qbVrbyyKVe5a3X1MKSfcHe753wy36XTHu28ASMruj5kKy",
  "key35": "3MTzP7iTuKxyCQ8Yp4HUvPncVpHW8GZMXYuBY3TmDf934Z5b6q4vsXTZPzsLoJWjNXFF2gEwCccc9eWDjc2nQsed"
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
