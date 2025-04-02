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
    "54fxEWDmeRWB3DAdsKUoqMLXwv1PPmd1yxj1G6CQKTgxXaZQQuKxqWftiQ7yBk4V4VrXw7S4fZQicyCxqtZcAzXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2wjFKh5HMdSkkArY5mLWZ2uNZUWrLBuYb5nUdFVmwnHDsFwTDRwaRdaTw2P2LSFenE5Y2oHtKSjTpn5ooenssN",
  "key1": "5i6Q7oWn6iaXKgfNozWxxxqMW9Upm3C4uiAMMvU1A7rkbAB1a12KLP96ftrWmzoBVt9a4fYjmyfujFQwhkTFdN8U",
  "key2": "5LatEWoHKFsvHL37tCFnPeshBEqrmRqjKuZZkfk4kAcCJnELkWKVc8DPz1JNvPAmkPvjTYtASQn41oXgCmhJ2CT3",
  "key3": "27VXSxduzGYUFN2PJn1ja7U8YxKU9ha44WE9xVbPz9ZidW5zxPBXcfPpw6mNK8KA5WZy37hSVP6JaMLXzZ1Mpi3S",
  "key4": "5Smg1QSQvY9NtZ5mjPWtpJDRXBLu8zAZAwBqTqgVDpt1Ly56gePzUeY8HYXTgYcY2HFiXFWdEEU7rDpmurxvpReg",
  "key5": "4LTZTw9FAVuckQAHv6TNsDM8yF5q13MdoHCKiKViHpKPLNrobAssgRrwfs2wZz2P5ZHjm5MauD6htEoz2uQF8KyK",
  "key6": "Brk83i5YCKrky14ucuJ4wKkZ1fEs3LXj1Yfjo21Rr1CkVdWPjqzFR7r4eLejaRVXBuTe4shMZzcAWcuMkMARFcC",
  "key7": "3r7F9bfQE2jAqZ2CBfj3Muh3hZ1wdMQa1NqqEKTGbfE1z9Qc1CU51oTuZXZeFDYE1VDBnck4BdSY5yKPLRxFZczn",
  "key8": "4hNiDLkYJeBfk93VwqaR4Dniib6a9t7YabRo8HxovvqvBDTpYDGVE5zPU3YHkji8uk7yDQbbRCeP89UCnmbzvzbY",
  "key9": "PzT8Sn2rFVnbqUvrjWSrr8c3LUoaTKxQpxfbnUvqD6s5eyVRZKVZ1NdQssHbyJzWpSq9NcR3TrbCdukPQR7pKox",
  "key10": "5aNee51kUCXBLV1i1LXAtnCdBhnuw3vovB16w8VdCbZTbHYKcZJ72vBgKmufmGSuuC4v4ZXPtheZAYq2uncZXtaT",
  "key11": "481bHScjS6TakvNL1jgtNPYZL82VpNaf9M7uXtho2VNrBAV4JkJfbNfJeNUF6aRbeJKjbkkeWVNz5XH484x8hP6d",
  "key12": "2tuabaDwktmJ7jB4NoPTeTZfW5DgwCHxLkcCuwdpmZPWVJnK6QEwckDBkzKVNaPbQ53j4779qjFe6XwC18phQ68c",
  "key13": "bX56csn2kke7joduNDj1H1vLNoQi1vsze6YC4c5hAx3gP9resCvmN1D7RpWYfxqWEwrhf5CuwaE787fV7APK5Tq",
  "key14": "2xPC3Zp9ZwwKfu92jtEwq8stXfm5EkhCcbXnouHD7SZfJKAC6q9AiC3UaYzP5YUWATAHXPdjRzS2ixFrNJt2hJib",
  "key15": "3dmsmPgYJVR8rA1brqQiBTfMbA6DpUqx7UENRgxyoN76pXktriryDyCGYdDeWBwAtijJNczsp36ZEp6gJw4i19sJ",
  "key16": "2g3AN9ofVDUixTqHUNnkenjE5LWucaTvjtw1XAGD3aUpvvUN8uDbu3Ryh2aDNaXQc3keH3tzyjei16VwaNZNR9M3",
  "key17": "5RjDwbeR6pjBpwATpYQCGC3A22u8rXRyztEazHNaJLRBH2YvNQKbA62VmAPFQtWXr9VFZcebEpzqpzX9SM3mi5QD",
  "key18": "5iUEmgvRyohL2j499iH6G1Eqdqkrj4h4WDLY5USPwdNnURHaJDU5iKYqBBmG37FhnpJbbPuQkFunAeTn7gpdqtNq",
  "key19": "4z7rnUNvZYwCy4ptZ29zDpEcVvJbdHUKR4npy7cRgqdYX5bsrSkjGNXYyrQ9b7xqvASh5aQadzCqBy2GJr2B5Ve7",
  "key20": "2B3oGijf3YVhsoZHQRWX1a8F1FDg39Knik41Z9N642zZoerNHt42QFvqjMKQBCTpQ23ouUwidxtC7gUEjgrBgQzL",
  "key21": "5m1mHXwXKp3y3YYiRUArygUEEwM8PNTdfnh3kKGSuZ6FTXak8iWSMo5iMBUViybtzDd32r8jN5psKMHV2PhpKKEy",
  "key22": "3vfvDH4DgAGicr1nb986D5rqwd4pm27tFdWc9ADH4HC8BSG1uZ283KuZ4JStnFJrHjpp2CBxcSApgVvbbBa6ogmP",
  "key23": "2F2sbcvj9e3CnZQe3PnZ4BdmuPck8NiCUrEEW1uSMSBCEKQQyAnaMHyaftqmkzFaN4DftjWaxoufdEtXHH46Yvpj",
  "key24": "51BV56UL2cKpvjV6EyLuUaiMnTSNqPQBvNK1LZkNKf8NH4QfAp2Fsh5fZSywfz7aryRrJckxsHqExdf3jNGr2ujq",
  "key25": "JuEFP5DVKp8GRYc7saQVBo6Vg9zptsEkFJzzcFFxTFzdX8huvozTz44qjeexusaBf4MBydt1bxSNc2PyUi9RnUB",
  "key26": "9HW1nLn47EzVowBxgA67KszTSfGCq9oxV8dy9vxaUECoecCByhurJCKf7pfyhHosF6nkYiK3ZbEZ59wdRTwymuN",
  "key27": "51CRuj8bNrLoncwzEhzdJ74tufZh4QjPdHkG4SCUT5onY6HC7dY8fi9mnXLXKbWDR6gwbiLyajDUwzZ8zcaogA25",
  "key28": "2Z4nMZY1Gvi9sothrnMYfeVgjgTcrpDQ7zLTzzPwPyvZU2THLt2sCVX4nBEdGbtvgiinjdUdZqx73dQYHwoNrVMx",
  "key29": "3fagsJm82cmncNhqCnSShoaM1G4DSLgDjTyepkvJNnmNVVBLxdz6dSo2jxB1GQPW8RYJgJzGmstHU13LtcQyGYuV"
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
