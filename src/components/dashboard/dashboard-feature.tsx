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
    "5V7eA3MymMdqeUEzYPF7NrnBZZ3RrTRt4yMx7e817LKdQ3mPG7dZRi4buPEsRf21hpEfzG5voj7gJX8Aaa8cyjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PSV7ipHtYZjwZekJU55C1pW5A4Ye1sbjyH72HF3Sv1k6bXv5PtTcduQHYpK1LHQNv8hP9UWzAV22hExjizfgM9G",
  "key1": "5JoVmcJegNK1fRtvkbJPyHjrm8TpuMj5UTyzJY3bPU2d4CQWFsJ1JiDucZSdQSpgA6bhPAZzhRiXXHgdT2mkim77",
  "key2": "5vfb8iTqYpuyHmGuRqmHexXAj16UHf6Z4uAbYuJk1qaqQxVejdC4QmetD6mF7YCfM3qus4VRYydWieNBdBVtkU75",
  "key3": "4af12jt9CyRs1X1wGofYEF9ghcetnsKwUjAGrPrxo44ykWRazFuyeXnkwXundusb1roPRiEytFrcb51Uzwymq2pn",
  "key4": "2uWT7AJop5o8TZxy4jME5uoH1XrETbs6E2ttVLGq9RzYdpBj59k36TuFYULzieLFCRXKdeAtAzaAToWWwubXAimn",
  "key5": "4xvmhpJM5zFajnBLrFLZ64V7cHiZQDJea8eqUQDpMAngqyya8tQoLBp3NijovRmKoNiwxJaHZXogTLZxNxCYUvfa",
  "key6": "3Gb8QBtwbAQ2qq96Lrvnx1ZzXgmVR22yJ4dy7pFFEfqYcVPgHLXxdims37YLDGXYduXsmo5s8bTyfTx18RQNGWjB",
  "key7": "2nLQLhwWrVMS97nJJw54rQQhuS29Hq1NKwYEwyJPak53Mi1FQaf68jdLvmSh3h1emeHyVo3UwJ3QDQfQ3XnJMFPp",
  "key8": "4s6ASc7fpDkt7qgKe7qsLu9aHwFqW48zF7V6QQFtCaWrgdRCfw7erb3K5isW3FyizRhYxD9fiqZ7FohTji15ksth",
  "key9": "3euh2YP66zovLQzpvFNuMY1n6evD5NoRi4oCcSwoxM1uWpxuqxbkToi61mjXXTpRatMWNnR7qLNtQz5UTH6UqDgW",
  "key10": "4jB1tqoi3Z8Vn474QjcRGnLWAKdMy7A2CZz27b856M7ZCbojPzFJPJ11TpmxhcBN9NYQestUjtzmTCHPLJiJHPbT",
  "key11": "4QKsTL9BwGyK3RQ2sFmhkjH2nwn9WuTf3Xjbf2rJZj33VfUKfdfnjLRRNJRr476iQgprVP7t6rm7wx2t3MSpEVYp",
  "key12": "4pE5JN9tV8WpgTQbidGro6HZnRMYg9N3XJfUNF2rfrrz6sdTiVUVauZ4n43e3TY2x2rAzxYwWMRScENiJPWTakrW",
  "key13": "5KCZtGv3S4XxtoMwRjv2WYyqKv1qGjzUryeoYCDuUPvAurDbvoZnbC8FQ2SZSHCs9oxXbaKz3NZmFbXuTzghwEJx",
  "key14": "42PYPz43c6pTJnjv39qNDSj3fNy1n8RnKLjygGwTMwuzjBWDdTacaGbRjUi8F6pY8m5WmuF3Fn3iiB3kxSAop95Y",
  "key15": "5niCNLqCBMC3kcH34FXgQdRirdxC4XbWLVRZ4mi34vMsuSrTk7ZhSRVr9DComQ7uyVc2SjKDNVQYSGg1s4mcqHBP",
  "key16": "8hsx6UY1SYSR145quj2bAzenHjEP2xJYBBiSQ7ggFSfKfopPSKT8od1JEDF7bTGF4X5dFV8d99sKK3zVxu2Rf7L",
  "key17": "4GXUNq2qUL938AAYA5JmVPsoPQFET6hwQxKw59LxPw2FGmfDNEu4jSm8msmEMHAzoBTTnYhKc8KFwfGTUiroM5BY",
  "key18": "5bABBSv8jBQEvkDUV6Fnx8BDCpqAzt9qStkLcZcCZsUtt1uQRgaJLy1D6XgAAij2kbNTZpvqEKEHPprjZLPzZomP",
  "key19": "KdbiSydkXBCTwjfTqmJRtvQzjARoXepU2btdf3hAzk1Qic3bMZFzfrKQRLNpdaW9rZ8z5Ff93pGzXbFVSTCnduQ",
  "key20": "2GUNk58thXipfHtK7UeTBL2VL7uhsFqAnms46WZtraNdVCSTT7CqeVp1tu7xJqnPDMkXZFux6egDDUgYJm19cJYR",
  "key21": "2CZ91qugKUicBYkaJp1UwHgSn8xpSpXf3UM8kx6MTyu5LNY5qKs9vfqh7P6mHxtxzixmjuZ82LNqCASEi8R97Zuo",
  "key22": "2DvdmBLYRatTVM1CeduTpeUpasjqWmZPUwLeA56cFCAHm9UiiBT8JjAdcxFx3EZ6A49VLWyYWKnrxZC9UMZsTi5b",
  "key23": "4pYhK9EkvR5PP9KC3LdcYFbqVtknzGSCfusrncixrrs1t66FwM1iBXwAjC1CvqvfYtuKa5STFnX3Xff5JLHVjckX",
  "key24": "4VEsirnefavycmWyWjmZKn14T6n9LGPpmsirxFfs8UM8ao8MGE4pNdDWgSYJbPwdetazKKSzRbVrqrgmHmaP8fSV"
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
