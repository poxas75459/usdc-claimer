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
    "5iPijNkd2zv4zeR9TsLL6cETyAiG4jX8sT1xrjJw7Zd7pTmvjME9opcGQEoLrctW8PNMMmcfmdZtJqwTjN8viPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hnsg1XY6CAMZBFrfkxUWPux8UztHpGGiT2YLfGEhrDohKxPWzFdsJ51o9NvrEu34xBTr2LJiRg9KoGZH8gebT83",
  "key1": "5fRHQucm11mRgArJdyK2xMUtygcRPCJkc7QNA2VSHDje7r7yW25i5AiCUrNu6knDTBoHsVRzy7A12LFAKZPKcfqQ",
  "key2": "4V912tuVjW7s52v1HHbhdXwfbux3BEvc6ur9xvmC1QQf72dLgUB4ERNmx16BLFBQkerzrBa2Q2sD6XnibeH5iao8",
  "key3": "MaExxBfiHEHeP4w6biZFnZMGhkSK4sHfKTmUBbm7Hm3pjCEKY63bAkXpVU8Xtdzc6HPETZ1bSTGYY81qyGRXbbP",
  "key4": "eeyCJjkEHeRgc66ngk7SNx77WkH8tVDyRJ95mW1CfSzudNr8JnNBa19z8G2VGUw4Pywm6V3voj8yybXEcUdKPoN",
  "key5": "2mHKmZ3vz2nePxzAxAprwdWHpWHpiEfv8P1sfZDM96EwTXPY4FuWcjM2vCzskxqeQbuZbUa6iwCSrFCB3qwQ6G59",
  "key6": "y7gACpMg8SAoZnosL5iwwZLQSLU7Pvivn5SwjpxYTiEqssw52Ajs1DqPVtdN7ozBKGkxpjidH9hHDsjN4oYGnCS",
  "key7": "3uhWXMUPS1sJSoetqXr3K23FWLT9t2MDg32E5d6ug1nJXaLbZV3rs8a5nm5g8kpmm5LEuodL5YJJBj4mo5gJ6PhV",
  "key8": "3NeiwRs3YqjXirXbQrMNogbDf47Q1fG3ArTUCausKSRFc2vK4ERRue6pCBrE8yvrNJAeLeCoucrTZvnKPMtAwXGA",
  "key9": "GwUxVX3iCteYjzYTcokuvC2WVsZyZ1jBr2rSyCVHKWcabGWjpidiEMiBQEe9SoVq1e7re13EjgFWZYSk5fqu8hn",
  "key10": "2eDJQknStDb5xaA3eR2K88UpdS1qMPxBRspcW6xA3qQYRrEHTcWuRFDRGddnxoYuFK9j8jT7Tn8uiZEeLFS2Be3X",
  "key11": "5Xuduy8jQn8TZ1ddzB2L8EgCNTn6qSWy4DF38Th9n4EZi9V8fvMSxZmgMdK44tmKHZUfRafMDqt7c8CoTiPWtWyb",
  "key12": "dCTjgAmMFbdWcGwjYt88XbDQ2kEXPefTwCxoo8bbkDfuS9WU9imMbCgto7KHiSf4WGUtZxCmbQjCkzDMo8p4PMS",
  "key13": "aJoBEqZY9CwxovprXc9JLMh8BiwDsD43RUxATYV9LtHVqKMiChMzvetp1RxKv6Ysrmk9TLv5GeXhvJ7dc4qevus",
  "key14": "3b1spr1tbaoZRoHykx4TKZUtQsw8ju3wGCrS1oxznqgsQbvFenjC4Vd4mTa5EANfvr5QAGMW7jrXoFs2vDnyaJ5i",
  "key15": "bDYka7VwxDTZnX94zJNDTJCjrNskbPqRMj7CRRWA3M5hg1nQHrPJG4wLjCzPWGpxL31H6ijhhtaftajs3EyKPCF",
  "key16": "5DBWJ5G5ejHmEZviHvguK84q4Ai1Cr17fBmK3xX88CuHx3nwDTcPb4SitPYDPb5bBEcdZkkMLMVgJp8KfMoKm23U",
  "key17": "5sZUU4AfBqsnAgLzc4avPFEvQ63c2qJhpqjECAzW3pTNmCPk9z7EPWuLAvputWSun5iJRcGHCJ8ZEKkBxUdChNpi",
  "key18": "kBP3y6TgL1HEBqTgL3wEaR1pBHWnLdx2589KrYLBZbQjri9J6zZbsukp5Xdp7adCEG3ucdeJjhUS8e5ddMcim88",
  "key19": "dt5vVZp2usWPzuLLdvmqgxfGaVTyCFsK1f892JVPzLuwcSzDCzkZSucM1JQjUiVzCN8Y8q5Fm2VsPy6hBVXy6sL",
  "key20": "5LykbqUnWVNWq2g6EkYUMjQEvrCAiwVHtrYeSoPLNdcDoj5x3uNXBiq3cw8QLXAHS7CsX1u21Q8wgjryqVVoMmGd",
  "key21": "5mxv2RY95zQyxbjcTE43vUznyps4XRWYBvr2HMgLMuFRLVnVpwKXMKYbx8eVH71vMLmdZfjRevGauRwHq16aHZ9N",
  "key22": "4shuwgKxVobfazye3GiD5x2bja8tAyxdnxsMm1nwUnhggrbr8wU9avLe7jPJdf25Z5BseAY3yWE9uk6VFUkDtycm",
  "key23": "2ZVA75LZfWcWYcchPvBitGwm1YuH6NjXn4cQdLR9jrCnfbWwJcnrFjX4tggDaLcDs4MwHCRvoZFUEHNRNGLZTSFm",
  "key24": "4dBLsTiQanA1oQmQjAXDZiGtPaGaF3qQyEi81XvszUcEo1i44o5TcKCNZnNqENk3Q7bnkKCaiuWMQAYZnVbEth8J",
  "key25": "29wdvMW2JMFDadcwXpCQRMfFQ8TBXw6mP8uRytvC1vrnU8yMckYg6AMUwjZR3HSTxKzLVq2wQ91a7oDps3JS2QrJ",
  "key26": "3nvc2umCWkE7sX6wuxu3rxRizzsXSXbawBuL2YTwDh5bsBKgYMd5UgrzY3owpwrEkfguVxNAmsgB5c52x67Aa5Eb",
  "key27": "5awzkkZppk4gcfK2vdBcJ6uoL4E9XrvEBR8nL62yUAunu7Pmx9rp79KuHwKXJsggouHz16yNY41KesM5CJUEXPwC",
  "key28": "3Nj7XNkqjWWtmmN6xqmGBo5kRxbPZMzKrMoqUoUrEyjxk7UyzKHSufX2F1Gf3XmM79tXqdM75Sowv4qexRQYmtWX",
  "key29": "47LQhNmWYc7xwNoEZfj2zfJupbPzm47RjQoCkXw8v8qmAV2qBd7ARuWWJKMaXX88GducVZFdbGQm4jYB6WbR4owt",
  "key30": "3ZFF1JqJR3RfSaHYt8xg3zA2Fbfct3sVoLcd7AVJEsRoGpPs5ZUv1e4qj4iiC5G2mYm3E8EGpfb8oqt6t9nKqMfk",
  "key31": "2JhgyUvgWe9Df7WQTMQaJJNguea8Hy29pwUMi9wSdLrBf3u8tyD5FnroWjsDhtKzeL5rjnQbFedjT1WSmzR3ddL5",
  "key32": "mqQqnw8w5j4zKSsPUubVASab4y2eFdV5Qk7wyC6BUXjeybXDSGGajLFUfHrN24RGjHKjbc4FCUSFKTGYiGNegHA",
  "key33": "5BcPLznbsf1L4icaYP1rQ5nWjUPDH7TurPkh7c15yWfjihebqmfnttyCY4kCX8fTrfSjVztwnC8SCuzcApQyfvT",
  "key34": "2SGse6jb4DyTXcXTcq2zzXgNsbiomszYtu27r6Wt9xKMZjY4weQrBFpdZehtpwFGv1GAaj1e7AsByAudtKEMa56o",
  "key35": "5TNWpQttR8SN4x2CAJLdJwmfG7anrEVa9V9qGojUgoQoJBhM67jf7bdVf9zZ5GYxeWRrexe3dysRmqSQcavhX7Xd",
  "key36": "2qJ6zwGCnukSJAcEovm2dbfo4y8va3MMqw4TpxtVciQ59AQj7eCUE4gbpgM45ov62gxgXfJ6P8eecMh2dhkmimZz",
  "key37": "4Bw1SGhA5CfN6x4Vz6wDEra21n1ffcxC1F8ahPZEHmLV26FggUBn7GQ3DdcYdtynuKpc61jpXuzWL5SQ7EgSFS2U",
  "key38": "2jYmUDtBTTuiqJGZXHp1i2c242iDtyp4cnW4LejQdrJgbM2gdCnvtA94KzPac3Qv22AiBK2R9zNMvUzXmxL1BSty"
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
