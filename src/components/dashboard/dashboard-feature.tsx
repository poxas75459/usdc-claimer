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
    "3xfXJZtLY1XrM3AD9jMRmzuVBaJXqqQ7LN5PTJB1vBhNVsffyujjk42AqJHHvcAmdFtpJheotidJY8rXjGbe66M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gRbuHEb8ZjitnJedhHBekwg9Q1FBePNsn5YP3QeB9XBuS3HqZt9za43Up36kKZPJfz5HdYuhbwb8jbpYRw79LxX",
  "key1": "4r3pVWT79nRN7QJxdH2xkdUdwA8RhrLDd8F7TK23EeRqE2Y7x5L1FyMrkEFkgmsaUprpr2XN7WC7urpGV6JfecB8",
  "key2": "5QzEa6ZSx9z86UsPYQwjRgHczA6d5V2jvo9k2imRt7x342kEAJUuZmj3DXXB7h7ggwTfNWqmzmpnZv8yzVnb7aan",
  "key3": "2xTrLdhRpAzyPrT8Fq9dfLRu45Nv7HWDWqpiuvjdHNSXrU9mqebDiUWNrJvmLCsZfWnaBQaqTryuEKeV7Uxr5CaE",
  "key4": "3QW2pMiXd2cxxmL1FjuKkHkW4FFpkeZNvSiNr6YtyW6DbeieibRTo9aghxZwREPERpg11DeWEkEiNgQLptjdstNq",
  "key5": "sBmpowU7NkUzxJeVHtt9sPL9jFtWnaenCn9QRuMizvmrXNH68nfe5nNKkhVnXk5zwJfbcmkhG282jY6GeXBWsuk",
  "key6": "5MV36WdyKAnkWgUXVUBYeuQUqgoKwtov6cRbFdB6ua5ue92xJcZA2eUo27GVPYVMeC2DSXRogjshtKmfEqGEcrd9",
  "key7": "3mGHkfKPGXG8WgDAvsUXTtdT5NQkbj9iccrjsHGJZh8NcDoZXpgx8Ti4QFzPF7erb83HMHa4dMPsiGus7GG2UmxW",
  "key8": "2yn3gHVE6Tjw3t8q9z2vdahdp4mXCbKNJ8xf4YWrnvp4pRP3RdgDsahZnZ9hRb8m4gv5nUcKvmn1W8JBumyPzCzi",
  "key9": "3VQydJxCszNY6QF9oPpxp8v3F9yqWAjwLzVAVaFEFGSY8BL1YhgGxpDdx5UiueKWDGPVQEFb9pbZJQaMsxR9naJC",
  "key10": "4ma6J2Zf7t5sEDsLit4YX6GRPknEZzQGEkhr2idhDFSrrvhnziZFxZGKkbaTdqFgdcq5nkdKiWbb8kEGVvSUc1Qg",
  "key11": "3r8baQbjSwxsajXHNTQ4Kx6wuhzUJ3na9GY6D4475VihLHWnb45TgUtUq26rhhAG2T67CdsuJp8wjN5R9tURv4Yq",
  "key12": "59kYCDzB7mAQZv1XoDJxwt1LHrcMNyx8CHmyPtseSVAEHxxoDe1B82YqyxQ4M8WagxKg72dYSYKvjsWeGRNX9hsq",
  "key13": "3Qxy2QMD89MQjtrD93P4rT1vq9FpPVioC7PAa7ByA9tFn3i5jLb623jj2uVpdAvxxZSeDhWuhDWv2wNVHQZJKg8A",
  "key14": "5VyMHAAnZkHg5wfcfhW6FfXSMAAYPCd9CDhUKwdV8aPqDk4xEGSNaMqLzZBvUR1419Ws3krDKXVX6i2vrGwE4LoU",
  "key15": "2tUk54DP488ZtrGnNRj6Xo9hPKWbDbwZXSRkxGEuvxhEcT9oeSLT76ZMoDawEiu5Ah7RDCuk2X5LpiGsgM2SBbF7",
  "key16": "2XUBTkGhVBPWA2WNFxtPuY7muS66fgBow8zJFkJPWbujLDkFBgdWSFSfPtbBKfPYCt9QERasAhiZkKbEjqQZALjL",
  "key17": "3z1bPASMuKV7iohMehwtochJs17BUkCEeraTyF4jKEKy1v1gzaFyVzbpW7iUo1sx7JDgPAnAiviVYkzUqHQ344c4",
  "key18": "4JkEQ2kbbvCD3ZAMSWjRveyXhgTh12jE5ssEsUPW3A6j8AugdAJStum6XfMX6HqxyMFbqnk3jR77w1FhY4HRBwyf",
  "key19": "1mAkL6i3bdAP3Yd5Doi5wycb91DKSZwTdND89RkhY4yL2E5Hoeyc1FBoP7ApJr2MVQrjKNjcmJ6iC5CKmHaBKGV",
  "key20": "59b89hPJPrMQq1gGrAnYf4Rja341adVgrzTvu9FD72UnQ4RfzUknosWucTmkw1dwNpwKdAgbahDHxbnZ96KP8YHz",
  "key21": "2LqbRuhVpobhfo27pGUe7menzR7A5u7Hqr81ySKKJCctJsGqmsQtZP1Do9ozoHmHtdXUtuqycUapP7HnPPcxwxWZ",
  "key22": "31eBZV5UeCCtX9ShLuD6WKqsX1Hc8e28zraFihdNJXzEmkJxkzDyCXhnTA5dPm5qM3fjKGq16SzUmA8JNeMRYTf6",
  "key23": "25zmoraVHLCZCXQra3RHmPvBFcdU8QKRLqvZPC8dgJ4oeUxXFbb329zH3voPzc9DiAnaVnSUQ6sazEBS5V71fcuG",
  "key24": "ywhJT5M78sSMRxaqXpeoY2xRh958Hy4rW1uqrT1yg1oz9DV9QyVZdBiqzo1PVwMgvu4TTdP69kCWTGkJ38VQbNf",
  "key25": "B83JJkPsrSF45XnDxs6hVndtniB7Ka6td4QV4MTWkRxogo1uh9DmzV1gJYDfuguudg2ttNPKa3cePzDZ35wazhn"
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
