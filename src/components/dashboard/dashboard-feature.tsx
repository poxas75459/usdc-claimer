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
    "3J7F5fS4tnZZ3PMCACtfCFEfu4Rmrj31Y9nZVBLvw2DeoU4meN5q8WKA4bhFhFePCYJhrfLtJW3Q5fKeddYWtF3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19f9jcsf3DGsSFq6PbVtHSt1ceGRHacQFJCwvfHqEXP8Kp2t1bTVbBTaco4hqaNdmUCXAjB9FbuJkV5F5mHePKf",
  "key1": "3kyjY8koncZ9CSUqtHVGd4ipWujNXw9cWdt6bFYdQKE5onNgcz6p79invKwAfb4WjpGFXmgKZnpzt7LjmNHi7rJB",
  "key2": "zwYSqim85qRzDGWbkn7heghfVGm6rWgr5x2kQz9gQucrwDNzewVtNAWnZMJW1k3eKzjqpocDbjxBW8tKLEkmTHY",
  "key3": "2hD9ELfYwjABkFFCJMhQQDt6XkK85YdnkJQ6zvi4CW74NNZ6aBVy1q5GJKCF4RRhmMG6vio3Y9p1P7y2MzYpR3Jd",
  "key4": "62CtH1vmsMCd2VTgdFcA1R4nxR6G4RKir3B4kRXL4XuXBtLbR69HaSPkt7McZwhYQMvu9mGdHb9p9BANLefVu21e",
  "key5": "2S6BY35Uy2THXCyKr8TDm8XPSycM78CNZws12HhFejtu7GNFzhZPCN8prSXmj2iKkTBqxMZ75mehVFeL1CX38L8P",
  "key6": "46Rc7siSmNLT4eMxiLuYfH82cB41QNk3vvqXr31eaxtk3n2aXVrnVZbvWy2mgVrTxUtKefrakgXy6rqXgQJH7RKn",
  "key7": "zZWtoPvzVEQww6zGTjyz3peXDFsTnuuR2JVEmHexxjUiXxrrfLzuPW5pAKovosbJyjNYQE3aVeAVp3XX8317LBy",
  "key8": "62mPsj5WZemSh5UT1zwM2QVmZRgZQQyRrKpq2fWCKhui1Vw5CAQ1e5o2Foh7f81j4JALeFKwGeeTLJpFQbsc2ZdK",
  "key9": "4NuBZoWn6nesy5W9MN6Du5Z9mb8ieynzbGCrbJj1hzivwXETs3HxrFx1US7bamjBDqenX3rSjvVGdYdDK86dL9vx",
  "key10": "2K4gAxbXZ3ZaPCQYQx5pRSTDfRwqs9m9jgv8Rh5JeTjnMXcFPL9nZDYmNPBSyaW3NLSASthoMn5hUkiSgcNm5mYZ",
  "key11": "Y5q2Va6LrbfmaSrRong9ajU8tJyYrx2CS6gZDDDmCrBWRU8JCSdR9jvxHhC8zTxqwvzztqqZw1AbDDdZmVq6985",
  "key12": "3To9vuEHN1JmuGV3WZsn4ZHiRffXi5YCgXWGRtjowmeLLaYBw1awmCsdupzagb9ZedAzkSCL6NtRdLohkyV1PdbU",
  "key13": "5KjD1ktoiom1xKLZ8zQ7GyajBRqnMcw8TJt7uPLsX74w7wRfi6hWVD1m38fhzAENg7526EqjTqXf333czZeWJUdP",
  "key14": "5z69xsguiADsUzBbfpPKaDp4iDX1SFGJwy7M9qLnBxmLQGZ8BvBnvabfbjtgjhPJ8acVTZMiH11jddZ7wR5piMkR",
  "key15": "qAcE6Ky8FvcMMXT8UjCoaEBdopTGpXdAG65a5w6gitUs3a23PqgkNB4z9FcXc2FmM2VJhN1qGnDagRTNbuy6ewE",
  "key16": "mxCBTxWNywBXR5McG1dg4x6r2Pq2msoyouu6fUnvUQYiNcqiiv8N9ACjBVKeEZFetzwNdmDAeF1vyUmKVeZ9WjF",
  "key17": "2hUftFYPjPv8uSNMQTRjNRQMBoVp7eTUAnHpy7SW928Vx7M5jgD2oZvFJHZZ53rtE4Lp1MQFoGxB8fJ5LTEmnQaY",
  "key18": "TdrWsNVEQgZHiaVmpcyeUU75Ros7TXKowKSHf2TCjrK8DG1WMniPuHiCyjjvqiGTxnWPFZwf6xL1Mo9yb9UvzSf",
  "key19": "eQ3YesP4fvx31ZSWpt28CcEUWDrEV7J9b3vrS5yzBe9UqJsVx943W3W8Mt1jJk3sZ2TPauG5ApCyCkAadXb3Dhp",
  "key20": "4zLcwU9f1YWMN8UeV1BCbv41UBKW2L3H65mq8fLnyFzUfrC7ok6sjF8fdxjSY2ASKNkHpYrz6cAvyiyjoL9b7MXx",
  "key21": "4Jqt89CXiQuAVL4kD8ncPvbSk6vY9VgTiyg19dq7KyhY493826L6z7qXLDXPVjGYjbRCngsFATwBXcmFFLcUUJxG",
  "key22": "2DuEyP55Pciuk6vHSNr6LdLtcbQ2F8WC2ZNNJyM37ca9YpMLTrTbNBWBXwo9tZKyXKnUk9HHSCo85foxQibYw1g",
  "key23": "iWWVRBy2DNfMpXn7nXPum76hZjL9jN3TsJi9hG7qYmZf2f4FP7NY6tKr3JiiRpCyn296yyu7oeMoggy1xKrG2yR",
  "key24": "4svNkSE7HvHnMPddrGJUCEzRfzMiZXuqAYpu76rQJrD92Jvo1dVmbNcw2DFitPdp63bUmBRf178g44qX8tw2s3Ss",
  "key25": "5DYd6Qdkbw9orFRkoXfJdiwwGob1mWKBusyLmqLRygcJ9vpHex8hmxruzBm32NiiECBo22yRW7HhDiLA7bpWesT",
  "key26": "oCAZMgiVABdTVdjgazbEhcMBFz1z7BSR1PAhmjXUr9XoCFox1dr5Yzr9WDp9b8oBDGyCtpPw529Qij1vSfqyFFj",
  "key27": "4RDbRbi8nwmH9mYQJcik1Vi2Av5KXuYZMXd7qtAAHnnJmWSYbkqokkyRxveQi5qunhjqF7UnYEYeZ5rPgtwxWmTg",
  "key28": "3xoW8RVsv6NfsYJhNrFduMXpL1jwid8fWZmY9WccN58bXGPs5eqQQ4GZ9cLRABuK4gbckAWrxEtKJ2xoyKkZxQ3X"
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
