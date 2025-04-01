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
    "4NFkLaFCiG3kbiAc7fXHuANo4htGz6Gtue8f6g6hqmss4oHeXR6EYMryhocyun53YfY7Q82gXGdRxc9L9oP359LW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHdpXNNUkFAkfYS3zXV8bPiDecxUAaCH3fDy8vFYaxW1Vv1jhWFqohqeV6pY38C9hQbJsNTTEZyjdtPdXcR5uT5",
  "key1": "BHgz6F8ghfys52xdWxAo8vUPBevGC5Qxh4kYEZLFSywLEjUB6x4uv7phQeLLg7x8daj941N99NUU4FVyDnurqkz",
  "key2": "325eCKWbGpnBBFvBEvDTdLTsMmfjDfN35PgWET928oPfAjpmHdYRucPjXRcFKFaVut5BRzS4YxncxF6QeiqCmfNa",
  "key3": "4ZWNFeizGv1vKRsxF954CQ3MGdBi4ckCcLtWdePKvjwiKFZT1XVGsQZhmJahV1gbjYYLq28YrpssLb2UDnDr1mu4",
  "key4": "RpjgEJ8h9f2Ut2oukK9rmPAwZuGNDtsw59tbDTkFu3NDpwmPnYsXpaT4BPsyrmrx4cPWZoK63nMDmcxfFHqnKRG",
  "key5": "21jzHsFNEpcBFHgMgWKE3GqesrRD2AvK8zujVwGPS8PPW9rxgv5jrhfvPX9xupWRrdVHf1EaxC89KDfegDsSRSx2",
  "key6": "67U4GwMGQvpxfcCVEuWzatrNwgbw3ojeEGSFSTdoDweGE3mG6TQekdMQfBTBeKrqF5MeLCeTa6fwYgSGAv9trdc2",
  "key7": "4PSEpk8kE3jDBRqRCcBwz1RbodPNZ5Li6pBsQea1oG8ck7oorotcc1uLaaTmegNeqWuaZ1mVWYudbQeyGCcB5HiW",
  "key8": "3oAi43yDtRUz9tS9rC4nCZSJDjV6PBF7vRi1wxpkRyehDBYQ5g4QFyfbcehgtp6YKfuAResciFDCPY53goyn4YP7",
  "key9": "5oHXADoLGHEUGqBeQ97X4RTDaxGHkVnypQ6d9Ua5Ak78V8z2hNrbu3wTCkL6VHQ3HmFbj8Km6gakZp6dsKcbHTq3",
  "key10": "3YwUXbj2qrejjjfZaXi5qKdTqxA9eirj2xUT6VjfQXeMWwdxesViHdZqd118FSsEHVvCtA5TKnsswdN67AzA1HW9",
  "key11": "3bfknVNEStu7Hx4go18JJ2nJno1xopZwcYktToDyokVXinzjKn9EJ7g6n2GWgfZgku66SR4Z1qWsSRyWQSEvPuvj",
  "key12": "4MWU1QnLji8Pk2rk6iowvFbrRBBEMLrYEuNLYkMfP58vtyxSVeLeUDynCBfmSL57GqrrM4nkhU2ZaxJsGnM6syJm",
  "key13": "3XU8dGwmqh4BWcJoQWRy4hSrtaXaDUQAi5Lf5MGo6NPB7troS1EmewE2GoDEWrEH4RiJq5yxSSYAk54Z7tab9udU",
  "key14": "KxJw664cDMTNnUefLEEPRSMxmZTw3M158cyaNxghMT4ZvgLcdMhnXFkX4hP56HDYagEpdZnj392r7pNfBseoAEw",
  "key15": "5wjRXkjPH2mjPwUKqNX3ThXUws97K9C3cg3Hg3FUfsSHESR3MiuYZ5yvLkeGWBy3w8vY4FiECWbH1GMgxGckuUx7",
  "key16": "3pELtH4jXc8Cn2E6qVgoUb5vNEMMy2unFKb8PxV3SvmMUzPsuy4q1qa7FELcUZdcqZVnU96mSPtzTrkE6o6Mi1F2",
  "key17": "4BtkvoGJgTueiDTwijED9sV44GnEyMPEC3BBVcr5TT8jduzLMyx8j9W6AaSMVzSzH1tWtwmXQyBkkpKCCPHc6Zso",
  "key18": "4q4uGdW9vAQ4ZX9hjS9GFLjdmPBnpuZRso4GR8CgwGPSk6uTHrhZNJf6MnhyJmneSGsJQFL57emguMYH7PUiqcC8",
  "key19": "34eR8tiQXie4sAuLc8VUUnbR2yv6ZvGZjj3iFbe74QgFXHkW3BhV1YnvttZJjdVohngd9JLgeGLa94YtvD1mqyKw",
  "key20": "5eQ6NW36ybs52CiuPSm6Uh73f5auVD7SLM2EcXzQHF2VuF9ntqoo27bCuGGE6tVQmB8nGpUW6ALmykXq2xeBvmmW",
  "key21": "siRZqgCfhuVdoHUFj4NvVNNdPkW9NGVr435jm477tgvZ9qQ9NwUQG3gTcbyjqyHaxsv4ZSFNo82DPnQf7KvzErA",
  "key22": "JRGYpNRNzAvr1J846RerVwT8mgMVp9P25qvJrtRvpjV5uPJebokx5Faph7ZBjdhhgfyXDk6Xjmi51YCt488SAFb",
  "key23": "28zfq7bPQHtvqXtfLx143FrT8t9VhvgyBDfM8unN5ywVuMLzn3m84YPLzGTpw2cBiucuVNy39HixaJVt8i8Su9tu",
  "key24": "5G4ATS6cy2Bda3vxx7M31KpVLUcPXNxKHXeaqNgq9tZuWvrc53dmdmYBkaFdr1ComLMHKfrVYLt4a8sMvFqDHUWp",
  "key25": "5pFaKMjboZbTePKxKToTrpVJU3jUbjnDKbA4pWe9xi7Epge7sUGDFmmGrVn3ZEGGmKweJG1sqetZ2fpfk6aFgdCc",
  "key26": "QXEgGbXu4Jb8KgrcLfFQgNw68A6phURgP57qsfHFiUp9RGmJunjoYMsXCg3g5JSLS42YWyGbw7RXKm35TT1cmsS",
  "key27": "4RwrMVBVLoTFKwS4iPLdAqedi1bbTaLJfZVHY9kyawyzm5svL1buBdgUdGCASkN3XzCAyvgaKF5scq3LgFMcASY5",
  "key28": "2cupiGmj6uZ2kh4HNaveCPPmypwEkP7zHMNMtSbE3LEBwjgJzErqfgh8bs2haqLCkDDQQcwAkFbLEWkafUwEBF7w",
  "key29": "45UAhz52ugU9dStxMnEH9g5vqjpqEzUwKb2ugDVUKaqKCpjJ97XUfGNFmhpy2weoByEQ7NdYumbgtGQwtot9nU3",
  "key30": "4JFv6k76SRbFTYcxnkYDY91HtknyC3ERTYhfqB8e3vgsBKNC2dULGm4UPc349373ZGrMEKyGkvVhwouQ4XoUAbC1"
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
