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
    "2uX2QxGCLiQnAGiHyMAxVgkAV5g9ddvhvEwYkq8xrx8xkNacL3tdJuHPgR7JWnayZgftQahCDL5A3bLhZERAfn3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqohoKszt8LCyWnM9VJKHBdm2x3ikeKCKjNKLtM9HtjypYgrpSXuVYEqNDpEV1hTNrwznFEj2gHcEDyspbNSec4",
  "key1": "55WMaEF8ftky78RZEmsBUXyHMrRKEvWesMZZk5jaMn7GubvpFr4CekeAVp3TcTbH61HHYLyWcSdXQTBK6nYf5DVE",
  "key2": "3Cd345HbGPGPzhh4TBGPUn7zHbMP1HHHGgfjDtiyNDUtMED6SxtJfsmkYUzqrZXd4nwYEXN2T8cbLMzuzZCJuFrA",
  "key3": "3VgkV7Ewimp2MwnpDiL4bTCxXQyDDHhLMTFm9SzpzRnoAsAEwvJaW4ThzY14rjrNP5m9mtHP9pSvoD9zkprpqvpH",
  "key4": "5Mmye17znZcn2yqmYNBJRgWGYDXzdTvUa9sLWCf9GeW2m5jSA6q4Fx8wuSiGk9RVF7QWyN5ghs5Tw1dQhNJMViCz",
  "key5": "LewGpKwmNpDtJ5CPMChHeycoaBuDAgvfEExNzoELsjmLVpP7wt1Yyq3QWrJe3FhcbGab6QgqAdsRjyGRpR1tsJN",
  "key6": "3cNyMsf3FUbcjATbvcsHD9EodBZkigmvD3C8cdfexqGTKdqz6M4Ac26pHJdrbgkaBQCQmY8fP4TMnHVsmKccMS7J",
  "key7": "SpZcBEVaUU2YDFVEpGqvTVVrSgAnNDH2mFxic6c8gdipZjpSxAXsmJuhh9RcKCJMd4ALumfdY6mnpKh9hYoucQr",
  "key8": "3izbM8Cyt92Xt4iPqs9Mem6ApNGpSnKNfqWuA4gpHc2XauZuN1Z1pVAKq7rD1gjKZRE8dJu8kXf46Pk7wH4AxJMT",
  "key9": "5qNu6cVuTkTE8XJrEGCKSYP9T6CvNWaJF9E8d1rC84mtPweTVf2b9eCJ2bJH4zCVYTKxTQgYiZQghMZm8HDowyXN",
  "key10": "3atgzy7tY9SebgkC6nZYht8j4ARtXa5Kp1xhkSWZf9K5CwMobT6wMNp8FSoT3BZ3QbGYASKL83NYaqnAiQnxSmoP",
  "key11": "37aoGFneugUE1o87qqtfAzC82gQMupPFqYapRJLxBp8DDhHvyRryXCh3EokoyLWZhEs8peLYjn3QSU5Mf2pQmJqa",
  "key12": "2S6KEPqPqxw3SsAbW2iA4vZDCKrQZSHXu3EKRQag3iiCGuF8QeQdiBKZY87nY2oHXi6LpiVd9pVFDQjKE4GuZTXW",
  "key13": "2ny64domLBE7eq2dC65LisNYuYcRnpBgERK3NuBkKk6hroTkKairBUoRTXrSBVjnNZTWGBQLHdvszchBCuXyykgg",
  "key14": "dJnv7Z6Cat47XFxkn3k3fkKdeTBj5c7kAPzWoUbo4qzen7AtyfjSGCHiPq6UNhpnZCa1KwXZagLSKPEuAoAFstH",
  "key15": "JwuaKPYkngpJZcawEBA2KS9HDkTxu2XmYySYHK3XLdAXevVJTM5BNn8F3pZ6eWZAMBwigf4peuKnccqxhvqKurq",
  "key16": "3m7T2qcZ1Zwjw3SUfjVwugcR5s6r5U9t6X5gMW6o2XjEBSoPyLn2rwPtAbKP1REvLKuPyizCE1uHunyE2WK2hLes",
  "key17": "5wLAYgkY8bPt2CRhVUubycmcDYdmqxLYPED9ZBcGjPixAnRfoVt9vFFzcGtzofefzJzP5wdEuW4MYRukB8r5QAJV",
  "key18": "3oVkwFPtSeW15coKE8yFjh7t8Q75hBTfQvv5g5XY5XB15fE2CnX3BEPaAZR3DLQrRyKXBx88EtqDZ8cdkiSM5xMF",
  "key19": "2Cd6R2en2vkLiJB8EZg7oRP9WWreSLnjshDPWDjGTeS15aMeBBL6Jndi2nghtenmUYD2C1zzarH3Zoqa8HUpi9Ef",
  "key20": "2NV6wYq7kMj5adbJzLAPQycYoK98CozyszZkoz1hW72moxddXdWP3sqtX8jrJBFf2vA5puYSup1Z8aL5VHr3c4LF",
  "key21": "2x83yJ64U4QD8S5tcDcxyxJtxY3VbhyJrgqAnTnwoTJdKExf7qWG3VUqw5x7xK3KEQuUSJECHs9KBdbqVtBscc6o",
  "key22": "udhrFGxmHomkbNn6TbytZQ2GQjXH6zaBiFer5BfMoaYptLQ9oobSta9wmu3RYdGQvpWNrXbNhjWdqngEUSf3rvr",
  "key23": "2wgUiHPBfZfkQ6NGB18sh2hpz4tLZPxesJDrnNaEVy5Dw1TnVwzkhpnNuXKm1fFR4NtYFzr1aHTz1JwT4wkZWppX",
  "key24": "667DARqwBoMWUfHQ7Jz9DUgLR5piVzcoQqy9reswQM4FDEipqDLyXV3rX98kDoBvQLyRduH17mRQU3aNwbLS2zPN",
  "key25": "528cnSLZhCDS9BqR5HYskx4HyUVSzobFFp7Lrxrgg1vbx1x9iU4qzfdXJUdpTDMtr9SZYVzRovUcJjasd1wqVhUG",
  "key26": "57ZBvcW95rNpfZTgwf7pbChNHAWLDk3mMyT886BhKyEZZA4LoidgbFnSe8Z5FgF2u2qY2JhF3oJrjMxckaqedrgN",
  "key27": "3vKttBRZyfmtUsYYewCPAEzjovzmw4Jf3vnsSTxw4Gs3W2Bmk1DhseZUhACq61GJicBxABQ56ep5YuFtJ6QzgJP1",
  "key28": "2M9M8huHNp3whV11MxdSwm9kjg7GVeXZe5Y6fGQcWiUxnE23fsaBc56hMTpD1tvD9YiAPsW9tF56RqPZiaXLvVKt"
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
