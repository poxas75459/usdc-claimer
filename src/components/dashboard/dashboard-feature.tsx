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
    "29ZCWwmdTJizoqF2nLm1A9LrABpKTfobXByAQUzPgmUeGk9GDJfoLgf2JSr9wuHdgL4m6pkj2ztbmVmiw6LbPbVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MT1akcwUjv5iYSs73GFpqnAZQdLSDVxtZMxMWhJXG638BcNx6GqGXYLDm2aDdz37C39YxPCVXqpEXqzCDCxA646",
  "key1": "23GmqsXLEjnmt3t6Jyb64kAtzdxigNw4q4CkAwugSF6LYKjbcvcEoaL4wGSEwRU1rS5PyzwHy5d6sHnYYMZfAye7",
  "key2": "4PYfFjMpj7ewYBBwVXGVpzeKGFT8fRL7V25M6W1KCT7esfaMxprdV6oKZZwrAp7oi2gRTsoxm4MA4B8ni8ghq75X",
  "key3": "38RD5dev8rc4rp1TYtR8EUmyZ4fBdYF29DiA4WRhPoUst8fAbTWUZic9GcyxGPXUiJTjWL4wmVnRqvPYQVm1XqKn",
  "key4": "4zBCKekx79LgqLHcXvnSME3wDTf8jvBACAbiqaFoXNypMad7zK5o8x6QwFsTnoJ2mTN1bdxKtjzXXKdC9S3rLGuH",
  "key5": "28Z6ta6x2TTM35JYqtzoYJ8aTGhndpYS7nznWkvsyszBuB871nfmFtT5WRCiJhHmrWzSifkHtTnMvauGe8QPa9fE",
  "key6": "GJsezEUGufA5Ue33i6YF3aTrtjMtcVAZbeu5CKADiAuZ8rKaJX9DBBq6azk5Hg664pad4wDcZF56S52E7MTLt77",
  "key7": "29fCQT7nMDF2tEE2MUAVD6t9crevsj7w3NM3Bqrwu4aKSVieCT4NzqeGEHjaqggDMDfSq8KttiStxUPqcCdB5G8i",
  "key8": "PGF48NJgpbqPyTMaGL4FxPpADrBSSi9gaqRrJVrSry6DJKRowkwkPqdezFS1E9Zw9RHxC4vh8yDAdZbLuDnNjqG",
  "key9": "39m21LPSxPuq6XWc5afGnfwrMcJdz9T4wSxcgTPyw8KaTt1FmnhVHZzBh9mqtiVeNuFisdmCH4QJJfetafUpRomp",
  "key10": "44mwzK3hSvLdDxbjTJc5XRcNwPkV5JvpPCUpXxXejLX1c3zB8EkBToNBcXGyZtUV4w6nXM3cFNYtbUn7AhBr7L97",
  "key11": "3d5DRGLGyYaLtpNyMyPEN1DuUdZZFreL1b87Bq7RQMvS4VPzAnwM2L6UywtVR6PpkRqqoTo4srwRenhXtcXw3zDn",
  "key12": "PDaDLkwY9fRRAUZKceUStEma199B1xf1GDdiasxdEztyULwRi8jKb9e7jHALDNwPt4jCd1Mvmrq3t131cbwTgP9",
  "key13": "2Vqpbf1CCqaEkNNV4aozV3pmuJCHv7t882bqL7yTSZMBmCSaZbdhbnQgNQD5NZvGHjDZGLkqct7rQ1JKAttJm7Tc",
  "key14": "2BYPioFANLb1i1veHo3Y99RoLUqzwadZYy3BCQNcFZarAUuFzxVWtUCYZuLEhr6e8NmaW4rrFPVp8CMFTHRERnjV",
  "key15": "3xWWH3FbhaonYqQ3d8NWSAcchdSdKig7xvr1mUDnchwq5378ZZCh71wgQd1hNQF4F78QPdLdjGNtr3fDnRhLGpDS",
  "key16": "2a6GdXSnpMVMnUKbKZQvYdesu1eBzYTn92UgT2P7rgT9PgyEsnyyQRuxUerKBvz1sjYJDCTbhvALBh85WKMKwo3j",
  "key17": "4URJamStEoYGAVBdcwaQdLeiABBMA5Sd8sNYywwbobiKnUFfwN3wRwkdPueRujaCZGnLrCW411FRajoYwMaPBAho",
  "key18": "21LU9yisBeQDjaZfmaVBdJJoRfjXrdhSRkuCR22NR726dX5dtDCobraazmjZmfhDieNRVZGEVWoGiciY4zM2H7qd",
  "key19": "2ZKigC4TBywBEBq8ambvbfPNY6tBrZxiG6Uco34QheorbW9364K7G3HsTRX28DrhZt8Pr29YVK4AxpGrt9K4wTJ9",
  "key20": "4aMo35gky1Lydg8yxcLKzdWay1nRsKy5MMCyfXMeQ8mYLme2qVnDYgJyUfSswUW4gY1UTENsnE7L86hqxSx73bLv",
  "key21": "2dPfv4Xxnwx7eEqb9ajFyERhVnFioE16nLoCVr8EUr5HRJZazsF7YmeHoJiETvPfxuTnfon1Y3j4Mao5m1ngRFpG",
  "key22": "y2VMWKDS6VDnXN79g3B4nV4QQ4b8RXWysBBTz4BD9RKhUgGwCEVUyrYSmt9D5ueKHrE3t1os9YsvMqXkYmJjmYR",
  "key23": "g1S26gGZukt8wdBYFybJNTm3Y3fErWyXkkbBhnA3YVZZYKJs8xYhjaBs8K8emWbHTwwHVnMiXUWvDox3PqM42SF",
  "key24": "5Dg8hFLwZjWgf8aR47JW1foGWUNMDv7kLpt6PqvLEKqvizFajDwkewu4eGd6SkZ3exjFUwASy5QzMtwB84FGs321"
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
