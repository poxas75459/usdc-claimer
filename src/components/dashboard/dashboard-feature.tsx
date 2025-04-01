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
    "bncp78bZ26UnE8zUgsjd9gLMDPoAzoDThAHKqgcFQaLQLh6mdtR7amo83PKPoqAymnnvHjcwDfDxbDwop66atRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iR4GcXE4bnDqL4kpvdSb9e5yiN22Gdy2uAHPnPSR6AqxYYFewH88VEwrr8mdURey2ez6jboiC8YsfXw6e4UkWdq",
  "key1": "4acEvnAMEsihUrAPgtAqgvqXR8oS8YFpzqPxknyQwUHouyBRUerHgoT8zTry3QeaSMHnsEvufR66DBQR1rqPNT6s",
  "key2": "53e2DedVm6sFyaR145VvRSguTrLbnd8YdgVrMRbtcXyHydUURdPPJVUtLnyjUteTs8QiwqRkrmvT38tntw3qL7DC",
  "key3": "46aR82xij7Tga4arEdXRFMCS2ETdBcgnDMDP3Hosb55ku9nRS8GBiF9YFVHEQieDF4SFhHGnnpnBPxaNraNYQLPa",
  "key4": "5Q6xMtvGqCEYF47YC2cCK9AKK9YeDaiybMU8Djy5HfDHHC9eQWzikYcjL78Q7DNF3fab9hhb5b8oj99wtLtRDkNn",
  "key5": "2YifuzqJ5CsxdcTHqmXigNGRmmUoMq2TAtCBEwmYFWUeXJiCe7zfFCzXpx8sriQVnDbTFsKbYoEd2FVLFPXzBCir",
  "key6": "3By32UJKFPAnCSFnYiQcMChcwAnYMWAYdNG3Zh1qAPbwxBxW3amCbvzYhY2Z7GEvZdfSqkCoN73agH2dgJYunWXc",
  "key7": "4zzF2aSkhBQwJMZGsJg21zzo2VrV2hfowaGenusy9x9RnXpzs47D3PZha65bycWwSztb8ETa6g4M4vzMjFuZcxoR",
  "key8": "2vAJeGe6tPokXHbE9tjMkaU6tqsrzvuzjYBqnWXpsvoJQgvemMvSngZPvTt4Am51GZs3ndKMpGfKbdxfrVPSoKGq",
  "key9": "4NxTHQM39BkcXSRB42k4VrHni245jpPrbQGNbQMPPdVJVox4Wv1zuQ8f7RtPjngJVn94ouQ75RsmykCfTD8Z27o7",
  "key10": "3WVf13yLg8HSimjiLSHoN6xETF5TqJqVRv6qQ1jzyQzUSHPV1eHwscvdHJQjptRokwHGjPUFuKK9PBoBuCAL7B9S",
  "key11": "4iGVNRtVQXTVD7JTzStTHWNgfxYbNuj9rvaahGpKQpQf8tq94ePQehW582GGV8fqZboGmqM6BVFbJoxeUSaakcRS",
  "key12": "6gn2agocwa8A6uBq2cuLfxmNHXveXgFhzQ3ociw5tq7HKP5ABjvfvVs5GCe2LMURK7rLuv1DXhL3TeACQBN62i7",
  "key13": "3f7aKkPHrEWSFAkWeyBmjr2HaW8pqMMABnM7tLhMP2NBsYHJePPnmr4BMuc3aQCstus3tD3jBBiM3G5bfJgfp6b9",
  "key14": "2MTowSiaruijbnPjWqhAbGZsD4GYy67S5xqSq8pD8L82sKxBfV7ZtbLj2YH992VRbUTH2D36zxd628SXdmB1D4Bp",
  "key15": "5Qd9hKLcczf7qzHd3JWHUnxbBnst1wR9RfVYFeiwPBSHDdCgfYxvzs4ApEk5ibUbKPRM7WEC59LA7rc3iDp2PFAZ",
  "key16": "5YovYCTSHfBtK3fmJRsksdg5k4xmTnWThVJsyRyPiZDXM2bLXE5XFWhof3Ce5FFSVak7LB83BkKr1e6NPeS627ru",
  "key17": "5kEPPnShZ6chamJszMSRfWPRMqESTnyEPgmXvwzsvZ94U978muzdnrmxCCUbS1cNmSuned54avXLuryCr7jrdM41",
  "key18": "4dQ46DRmaDwjxmFqLA1gChkZ33Gsk5nqaifDr9A28dzv2dYrZTTKqYm1UWSnmR4KLp5L57FYdKFrMxRX2UH4GFzo",
  "key19": "4DYXf3k2xbmd1VmQ5uFSfyzYzJ2wcuwyio8mpRx6wfxwUNdvLzVR16k91iEQYwUKXUh7yURS5gm5YyrGD6fFkVz7",
  "key20": "5WDnxkhkRKN7GubhdduzukxsU7yeaeZY8jeDN5Ns5jpyz94RAjQ7qCC8ee4Qmq9yBvHHYK7XWx23bwJcdLwpC9QY",
  "key21": "39GfcYwAHfUT1k5GSvspMfkXwKqMDGQJV2J6ufwyNamXgqFBMAvarRiKBJtgkKCv5n7VL2jKBKPxALNeYBvJnXa3",
  "key22": "3tD7MfnWaMkdaqFCSEwnfTZ9HhcuhsDWfbfLHAFpC5p5XUM3kmaUj8F1t6otQnumocFDxbsGYL9NXRJKwVVjLdP7",
  "key23": "21Q6D6Ss1Mhg3KKaksqFG1NL8g84nuvnTnDSQZ7FFFQdwrLrQmajyzqYUCU5W11iEpvr2nwJpVWN8kB6t5HjeyNZ",
  "key24": "5TQfaQXN8VM6j4mELuPrR3D1SmsJHCMTPHsCYQnPD7iwnyzhkdcsZtsMz7zVeiVHnTRk2nXAr8HZnXYdrTns5U9j",
  "key25": "XVMCnEPVxw5W6cvENhUBYFpyYdmLLgMdEyTaU5dvj94WdUVn6dotyhdo8VTdJZ9Beykb1vFV9CbekMnuY2oBovG",
  "key26": "4NbuTvkuymUKFSrmiChgCwhLBDx4boSnXwznwgQDzNiSfSx5p9fKzPcUpnbnRYJccQWhm8feot4kDJZ93t3LiYja",
  "key27": "5u6UQy7sA2otyfjSLwN6k29UFKT5NoMTL14Mon4qFmYoBpUkkMgigdx1pyhPDNFJhgYNpNwmH3RUs94kL4BtAXXx",
  "key28": "2yxCnCcUZnJohfVGocionD96FeYseKivpbVKrQ1rBSd4psgmYYrQm9GDVoqfR2bSyBcFy6rX19Lc3hWjkJLmEAz2"
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
