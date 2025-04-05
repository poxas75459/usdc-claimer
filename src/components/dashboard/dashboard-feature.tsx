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
    "M8kzwVSu117vnZdB7TykKjictmTiphiYTeANhHnjzneidCSpA4WDv68RjERt7UTiRhfC4gaSRkVZ42ES1Po62kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwQuMcHWH27SoZxTURcxqcbxxXETSWtKkrFJHaXeZ4Mx8iMz1TQMLZV65xAm1Xr9Gm8phFDEsVsB5tqSkACipCC",
  "key1": "4dCgGbegYQmYr286RFGxsrkAviiT7syLYehNn1Rv1PgMMn9oqbUFDjkR8vvuoxhh1c8HEBNjTK13WYxLZCJntCUA",
  "key2": "3T2juCQWtmQpELEyDu5TnLptuWrKmp3qDsMPPEkp3eKkip3Z5b3CWCXQkhSA454Q5FHSJ31JSiKCZMctsowgMSDQ",
  "key3": "4EzyBMDpFwqjhpEUqw3rwUL6fJNkQJm3hjeVWDWwgg35VKifu3y8v97jB6mnTmXy76wST9CDwpgy5CEwrC8VFKzT",
  "key4": "4rfnCSA7SaEBGNvhFoVnbVRqaC5V6mw8kx6Zi67LXbPsWMhb1aXDBcQAVJ5AssCcjmPzvFkKywWTRsSCMh7CDMy6",
  "key5": "3hDgWL7QAgTddwVff7eHcxLb9mLPjvqquKraEjNXWzLGBvkNngGJGFyMaGrAZCR4EwJgZ8oFA4UPocFjNCuinDCL",
  "key6": "66Ww6me44DenCSx7FXhaxqUE2z8rHQDCouNR3jMyW6HkNQis2JX4p9GULLFzQWgAxsfHixp6VSTVpZkWfenMzMbC",
  "key7": "2kpMyYzr8iRYnwe6SndX3Rfx8u5HK4p7ePhsT2DppMqrNoSmBsynotFj2RKEZSwPHmnCSzf4rYCxuPTD48Mfke8m",
  "key8": "2dTeMpLtJ147DdHJSEb21UeoGCfxuMEvFKo8tvcjWpRrJAnUyNhudCabg5jb1NPe3TkPYABDC3EnWm4W6inPsbGW",
  "key9": "4wMatdnrde4SpDUi1oZvR83LTmh4DLozJxozntkCi7vySfUbwkSbXpq51he4w8jJPdUB93qMor7HkFgQaAKv1eZh",
  "key10": "3KktmUavveiDdK4oQ8QciLez7TBfC4ifvr2zNLy9UrDgxVPsqAFdZGqYF5WSUHNaE4CVrfizFsyv1nE35fP2FrV",
  "key11": "2z1mjp55KmWtaVJon71MNzyMaJoVGU9bYqANcLER6PTMTof6LenfFPSMjYDKkiwWmbaAFEQ1nit5hqGcwRAaPkH7",
  "key12": "51zuMRMkCygTjQAcWXiNFST7dk8tZHLJNPhVT9XVGbRUG27Qx9KLWE1b6by6kujLyRg5bsr6jGZg2Hi9qEQK984m",
  "key13": "7ATDiVpK8oubwuQzej5dRgd6T2X8pQg4P1BRN5mGkdPGWo6pCfu9DESLsQH3FB2EUzYA7a4Ua4XpFAxqwSoA1We",
  "key14": "2HoCuKn2bgF4raPe3QngxznzvUnFHqkwKGVRZ7NB1voyDyuwUPnUxBhG7ezxBrdD4FStLWu4noR2JSBXvSTUHvU8",
  "key15": "4Lzz7YZJY7qUuH47gTfzdZ3nW8W6ZN2XGm2fSFBUmfm14V5gJEmsDR4hcxVJvRU5s3QsY5CHGekJWRGa9Fkn1jfA",
  "key16": "43TB9HrtqwG6nXd8HSbJRNF14qxuVWZrXFNmQjFk4t17yEcD791eWsyPiNR2kG7XU8PpcqYxeLTGzXpHFXqf15Dy",
  "key17": "2zAtWLf84KKD4fAjyMD5oWo1AraUs4jt5G9etG6QcR3yHA4AYj9rqkQgsQhvoeiMqymcWvnrQ8VP9w33p7AAntcy",
  "key18": "5RDkrfRbTb2gxAHhrWqYhRTFTrRRXDyzoXLtyELmQrhvTix7T7H1vQkG2pPjK5MRUCuRx6Q9rkxtR3jWFisjxY5r",
  "key19": "25PEUhF3Zi9VnVKSGpMNonFVgRxdnSJRxjpoNhocLMqmESJQFHRsrZKUa94wxTjZWDX6SDqaK9m4VebPaLCuBTcF",
  "key20": "2rjvnWtY71VKCxxoiwBgfnhcTC4a15zxMV9XTuyxAqiXMDF1VqRpoK6dRXeWukEkyjbLmaotshdqrh1GaPTE41s3",
  "key21": "3JKycsbpPKtkmJPDGbzCHcUeei45KXNSqGxhvxFVCJSzWNPH9AdymRosJzi6suEUoARSgpSCF973TvKbsScepMxD",
  "key22": "5kfe5mp8dauPDF2CmXeGMCc3N7QBT4FxG831abLpketQyTygQTywY9fwZRduYknhUKkxY1ywVqPXRtVL6Y6j7fvV",
  "key23": "3uXVTiZbpxkC6Qk4f11ChCP4Ybjrmp8n9o7HqF5gJ1iAjhhXtwJuUZVFBgzDyy9FmfdxQkqpTBJPQKw3ekXiBQKW",
  "key24": "3UAX2rdppWQo7TBsMKdHGNhDzQ6CEY3K2PEswnPxYxrF6ZqD113DdS3NbYBCwuU96xXSLz7JvGmbi4igzPPZtRvY",
  "key25": "YejqQ9M2ZmwSbcZs5pwAizGWYiidShZCUs1gt8GKt9cLTKUBnZd9Nqxo71due2X8xnWagvZGkkhbButgQdqjADE",
  "key26": "5RVKQR2f2u8adurLPGDVvuuVTnvU1KwjZQGVqPHw9EochSH27sRkabWcf6bwv6FK4YU9oy11qV37TP44DdASfavP",
  "key27": "2h5roCQefv5BgCd1rqnxQPkTWaGs5zNfsT3PdERgfySR8eQBxbUPqrcKYJG4Fn9QRTapDjHYe5BvSnbWUQ9mYmrd",
  "key28": "4wcB4eV6jXVcT9sAitUdZymJdiEgBq5FXeozXqDDCQaTGbfiC1JSCPi5Uw5c2ADBcA83KpP6ZWT3kKraGMSd1aWu"
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
