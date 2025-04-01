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
    "2hcf7hF994maovgzWznZ69UmWzmPsFz7MLDdmFMZjNBMgzTXtPJFdkAEgkpdCKU6nmQEYWFVWZzEk2DJULDnwkZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bC3HHyWMQAZnumXJgY4qXo9uLpwzFeY9adKkxwPorggm3GVcT2hZVbMs7W11CnmwR4icc5rLfuKyrSBZTJZVPpP",
  "key1": "5QpVzoUJdfhjLd6bAy6hXS3ggSpaqyw2KMb7VnnHhMR7xRvaZHcHW1FkaCKYuwLMxufSiFmLFUnvn5GDenEmPtGj",
  "key2": "2TZSi9fD3Sgn9X5uqLMZRzZ4pge29qcC1tSPaWSwb2mJf3iaFnXssx3Ram4PNzC4gZAZkZYStcoX31b8gVn6vok7",
  "key3": "62BjGb6PXCkxBjETZWbJvdL75EHMQCwsJ3mosGwY61p7phFx9qcbxCsXBBPdQxwhVcQWDZZ4vCURmuFRGthh7PC",
  "key4": "42UX1vgd3jdk5Ty9xC1UJCXfz21sc91AanvqWhWrRpvFrd2j1K43WDRBDw2TuYudoXwUJyUA8ahyKpb58QaMmDa4",
  "key5": "DJJP3zvR8kjid4v8bwGZzeCDDnzbWVrqkPdV3JZkKDsoLDKRhWw45RzJTTZNbzMQbxk4sANbg4V8JnamxauTkim",
  "key6": "2PM9iESRLmfz26krPbKL9QJKbuk8tquNUoGfvbDhxXLkByQDSCGQzPBQNVpp3HmcA8djb1fhwKfhYMxvP8cR89X8",
  "key7": "5LWwjMBixXr1NAFdJ5Ee8jPnRKAusMfcj2YdqFeZL6ncbBEgJqxNKTAorV3VUV2hCaMEuxKsNVbDo9CRADAgcPNu",
  "key8": "dhzat2WrAJovokCeHAfYRhY5kogSN123Q6m5w4bbTqM5jJ2TDJQJHWiE3KWZzvT3EFjeKeBD9d3tEnKDQSsBWDx",
  "key9": "4rafnZJDbFa96UZr7vjfpE3Pm4tfBwHZxcwsLChYsuwxxtETw5WrjbfT4jfrJjGXTHXv7ynwnDQ7tsc5PWuEoEJn",
  "key10": "YZht4MGPFBiumHieZ6ErrFGa8TjgS8zFpQ2kT7Ucd1yjk5YGnEvBP7M3DRE9hXfie1YXie8gBtDf8LScUgxKEWc",
  "key11": "2RjBpiY3PmkrunhEVN2ZfHAaFDcPf5tY9VDUTAQ8gjmpS9w7BPLyetNs8GEWoys2AwHvR9NgroQbEi6y4dU2nxTJ",
  "key12": "5rZkMm5wVnV8o3mwrjyU86nQAJQJFw8K1MNKBo672LxRrv6bYJYMC7bd7pChaXwCPnF94zmyyW1khMJduuSfL3K7",
  "key13": "2yYFFJTh6tJV9fspMBgzB4aqAFV8gtzKzAk6HzfP8uaemyHgpybXvqrph8sjX2MvEB3hGug5d4SWWQu92BHfkze3",
  "key14": "5zsPBhFDpwB2xPJ8otWi97SExrz2RYVGoqyaWQS4shaGsDgc9YdpESNDuaaSRxhE7Z3D9rDKWwAWZGUEZtRT22a5",
  "key15": "2pNPrrwuD7bZSq66VYtQv5pfk4iTMaJG9hSLzrcxYez7LTRqdcqRXXnxktb2dTcwAKpQJyne4b3tbmb338u7TBcS",
  "key16": "2mub1D3k2zzF2HrEFCaBTf5zfA9AdNCgXUo9dyuKd3Ap7TrBHYbircYwvZ9PYk79HLgvJeFkarkdFhWqGvN7aSuZ",
  "key17": "4YnqEHfuJZXnWskfXfPbacYXzg4tn3gdVWXzrEy9oUFFi8GXo6WUyjk6YAajjcbzLd4moEVFm4PuZ7m5ZEHUGHos",
  "key18": "vSJhGArBGedo3Xu1D9NP1FdAnFr5MHBZz1ktr2c7cb4qhbYvWcnxRh6zUesE8bFqt8uzN7QBuuCEb9aPfnX4DMv",
  "key19": "QCR9iGHYXRBZgvWosxXG4hBz2ifnodkYyJBbj4zu2JVey5mL84GeJ7DseeXdXKE3xj52uo4YDXeAo1wfGaWQmiJ",
  "key20": "2JFSD48ngogd8xTfEocaPujCYKJTVyiaZECqW6Kd3f8ktB4xmSdozzftHZBALXoJk5EtnLMwU9Kqo5YxKSW9DLoX",
  "key21": "5rfEV8o4pFzqRKLD7dByWeFr1ZesJb7j4a2N3JAjaZ6b3KHCv86McM7U4N1z8xFa6JuxTa3NaaF729nw7gTJnUkA",
  "key22": "5QzUJeATEQpVWUkzwcRRpWv5Pkf4DoYY57qeErnuiNrLaq9iaGwDdvWSFssCJAoeVnVdUN77VemH4aHCdwbCYfbr",
  "key23": "3ks1ucEjrDXeJzXUCFZJHne6W6yH7NiQRAZF3uPLrv7JkxcykY9ms13mURkhPKEnWfNft2LDuGvGXBMiw6XnyQ2f",
  "key24": "5LpqPz3475bJioaeC8FFNxufQMH7GtyPHUyLwzmHmg5vZRkU9z1ZXwKEmMrvWgZEfzF4ucPD8Yjoesom7P6tMmpG"
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
