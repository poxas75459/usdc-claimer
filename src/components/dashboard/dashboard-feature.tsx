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
    "ctZtMJcwUZd73LqZWZrZYdAYzgo5vJeAyAWBSJjLY9eLqcutNDm83NL9Pa5J1DzcSjkyuEbhmhYNthnSUWWxgiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hL66QpFLYsnnhWnjBST86ctr5xTaWgEbUu2iPb9dhdkkk76FjnFMnmmdhk4QFLMrM24BnQVDq8jRHrAHFFgQGtE",
  "key1": "2nkucBGw3qYFZ8NTFWHx7dq3UDcVRVTbQMcQraTESwFUfE2X6hWJ4VDeCAE5kvhMuHhCGN6h5knN8rq9jNu8Mcva",
  "key2": "3mv2JX5Q9xMG3H6WB8Pj8rQJNE3TSCuSJEQKBTuf1sz7kQ4U2tJdvJPRvM5to97yWcGQs2zDfn9RZf3qwToGGCF2",
  "key3": "SJGQMmxhH2TYRNPvf7BLq9pVFR1DbpaX6VNFRFEkTW8PYhiiCk45CVMESnbJnHc3mJTFQNUtD2488vdiB4fdQzU",
  "key4": "5aYz1Yrm5Dnth6Yj7LSCNR96QVmNYai6M7BWnektz4hCRskWgfc6SohTfLNP3Gz6fERHoGFydESSzhufCTZFSZwz",
  "key5": "Wkdd77xhA37MksNt7QUH5N4R74ZWuk4A3XiQhubQDhnmmh3ERwVb19pGDWxgs1JXpaXVGktgDrnHu6RcNkUhVEa",
  "key6": "2S7syVz5ixi1rwf9ZnTDDYcJBPGsLQNh8y2QERL8MokQFB3oUk4AFbD8bMGbaWedjvpGDzu847n8Q9pWTxH3J8ZH",
  "key7": "2ZTJ9CqDXzpMxZFi1EkmhQBpein8xpwYUmLhZU4QUZnZprFcPiEBkBs9QsfbtSK3q8Yo6WRNehVcohHFG6heF2eX",
  "key8": "oxYfDgRGRGYsyvsuKKaUreebPS9EFX8QPXNbWhNF6wmPgoJ8aB4nHdCNwHhUk4zGPCNZsTMo5uYQs3VLzx6Fswc",
  "key9": "4Ue1pXEdyPgi9iMSMsuTjqg2ELDR2wcafhNADfwjuJvftdU9gQG7HZLJPo7zDKhkekPRVgM3ZwRTmu4SvjskpDr",
  "key10": "CvFkoa9yaiwbG2QrzZ1kNyh8Kq5dCcAcrStmv1ALBJPae7HwW2YbuFj1WBmkS8zKSAhFi92H129URvTaE3ENmqu",
  "key11": "2ktEUTgA6rmLcSu1obcn6ssKKjoqEcAFmTgFFN9sVNg8Aro6RajneoZwiAuv8HFSKMRf8GR3oGDG222TeGeeKoMG",
  "key12": "5udbRzt7vNCGpKG3DDgexnGsyijr7haaf2Kj5bRhFbJv4Tz9M4TNf68t54g49xppq3v5mqXEhE7B73q1S3EnimHy",
  "key13": "4VEen6m6z3oAhssU7UPmomGPpo6srQ5gNFw4DeFxpL9hUfSz6GNqkH8ptcjunFJRuPkXpFh4U9LERGE8NyBjgoAQ",
  "key14": "4cyNf1DzDDvwyx9Ghm5JzrozqyKqk67sCbmbZzW8EBcZWGmeeHatqWhZ9trrtnze6k7BtthVsjyzTx7Ze5pud4yj",
  "key15": "2qTW74myjV2jSSiMkXX1Gbaewdj72i9sCimxvA8jbutRtrhk5bm9SWFFCNtNXXAeE5BKwPYN5rTwJWQmpp2dDTtN",
  "key16": "3q3rVjz4LTKMqLmuV2hz7k6nkAfULXnLzxaxJqw4JfvU1db8V1q6bTd69VcKTkQqjQWYUuDPWzEdVTpqUHfMcpqa",
  "key17": "2gbcGag4zDiS8d27y9aM7rxKo8whyS1N3voJHZQCfbQZPUTFYiRxSPFWC7FmXasvmmd8j4CaTvEk96aUdTD3VmhG",
  "key18": "21QsfM8R1Zr1Q2YPZiQUR4MHf9PixopwAs54jwYXqw8Y8r1Az7vFP5kFWwPQ9qpTKtEqPyASc4Ve8niddi579Fbk",
  "key19": "5ABqapnavS8nULG37KsKsioHECNi24LvGeJUEwb2A3KKK5dRaXm9K7CCiGkSCXUeemoiHSEeJ6s4EUrWuTSSo2pj",
  "key20": "2uc7S5j5ThPUUmystyYq7TRDQXwMY9CaR9RvTPaPFB1Frc54vESUs2beyR6y41KrLbcXihmCtyfkFMYa4zse3E6q",
  "key21": "2ZTT7uRRdpUBLwXg8ur2z4LQwxwJnAZFi5io3wZ9B1yH2LT3yt4bszN96W2FueLQ4TAV9Dewj8coV6Vf2ZsKCLJw",
  "key22": "3jfFqwucZukjEfCK5f2WQk7Qcp1b56h2kKA8RSxoU6yUCv9jijr9r5ij3tNAPPGJQKnAyabF7qGaC7sPfpGUmRGY",
  "key23": "2PjBwdXNqJfEp7kYEyQRGJr8u2aZ6z26GaRsvqyqc7uBHZhgskzCh8d3wDAc1gGVr9UBKZsjcewVQKVnnLgyZkNF",
  "key24": "43TLR9RA7xoSxEfUXAMmGqvGDGRGR6feEuvepaaPUyuk7SgWrkjex7qg4DF1U6vyLBknGkkoHooW1Y9wYyxxCkmV",
  "key25": "3ZGuvU3ASr43tSeMAYy9TinJtTLtFeG4FawJGdLtKHrP2kKP11V4iuv1hZq8PGRi8ZeVeFy5G5psUgPj9S8Ev6na",
  "key26": "5xkGuoi8mau1M9gBz9G9Loawv1d3N2KqRQJmZ5m9mmCuVUyyFKgJWMy656Sqmd79j7EBrRNbtDuiUpJLpVy177uR"
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
