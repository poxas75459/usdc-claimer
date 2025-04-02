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
    "3N6AGtoF6bJSVEyb5K2KnBAn9RGDxH44WfdULDwPXNcGku6CppxfCT1NU4VPGiULNCyHR98ESb3iWyVMrT5iagnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3goeUN71y2R7mPo8KwHzGhodfvkh5k3MQVVQFy8csFDjwrnUNVyuSBqv8VYrDvqxFMEKvrwAKM84VS9AkVHgEHeu",
  "key1": "4Hxj6m5xkru9kRAyo9B1wUPP8xUxPdHH82zEEQPxSJeeshEFAFPpCsgodhnXk8dfgH4M8DF9um5B5kUAb2y7XDu6",
  "key2": "4XdoXpJb7dvhuz9PQkiFhVFXggRRNksq37z8FcjzeeGaJ6Zg3mLBDdm1mo4iYJEUHTG5NMvhrEbitFFx87SrVFcE",
  "key3": "2SB4JpbfzGuqEqWsmyBchKZGKuNquDQKX5ZSxzd57K9twWHv8vJJ5WQ5AKra2gJNmXbjmjqkrRxFrnfxLxuzwvUZ",
  "key4": "GUEbfrgtrL5emKA5zE6Xj8G1ELRetx3yC523A6Z4gkLhbD2ku2nXVf46Rs6jR1EeghAxUBq7Luy9AWCRqkKcZtY",
  "key5": "61zsYBXH2W4zZzyodF7QoTRLgNewdcCLCEKQosECfz9mhjkunqxNko7y3xTc9AA3oPthgUxZQ3Sroyaax1B4A9J9",
  "key6": "3Q2UrD985WD2jC32oyAHAc4PyF3WZsgKfDEjfo7QNPK8hz5QVKA4Ca4c5LmYrM6LQj1SQdJ7VKUeF3nhQ6cW2KrT",
  "key7": "63ZA52D7NdAB5ZJiarpTnKdEz5Y2vqLsiS9ZcPzqnNGf7kQDHxkAxZUskHLshPv4Dfenuv14H18hjt2G4TopwJGn",
  "key8": "5CFskUuBxCcQYArRtAfbL3rwyK1Qks3Q3tvHmPQYRfqsKPWrHVrDNLxesT3u7QztRrpGikqXdLBa5L9XVCfzNq41",
  "key9": "4nqAAVB3LsdwXoyQU8Ui8hRT41XTpxbpwa7Ch5rMZPx9PzPoJUrZ3GLgXpUM2fFpZdxJgpdxx3Pjs9u4Cb72T9Bs",
  "key10": "sczfkfgfz2tYU2z78E61m2pjeMS5J3PbYs53qrNN9BqwkJ6Y3n9RiK9fLTnpXLFNCh4rYPbFZtuEshL1DD24GeU",
  "key11": "5bovsXzNPTEEwCbmzNPwp9xPRPD5uFbMAzCMLQVuwrTYgHR3ibBXcyjr3GsEMa4CUoppV8SXEn9giZcTBR8wQB7N",
  "key12": "4NH78C6CRLjhH9BJ9gU8QvxkXFwcAZZvKqxamiAv49EZztDmwtwLgpdExdyRGfoMGrfRXKZVzWG2jmPdTaBWA7Z3",
  "key13": "5M28DKHY6WzZYc4hQdywQyVo5miM7gmNwjjX8VBSZHvWhtaeTJAm3PccLc8xCVeyuv2axJY54mdfmBG3bePD3XWE",
  "key14": "3UG77uEf4WWuSGdsftbYW5DqZXvECx4eUaSs9S7u54YXGrQLNDukZuZYpDgrZqQDAgoJmiMixHorQVpXrh6751Kz",
  "key15": "6vothZHvfywBuUD1AWY4Uct7aAzedCJbSkaj6byruZ1rFGoB6oLafAUJcM7cYjLDzpv9rgxJVAiz6LCTUzbtefr",
  "key16": "5ijbuMj8i3vtSU7qazNrBHw1em5rUADSzqHCQFqKCykHi1VPY82MS6MJzbiG8rSpWYbPxBbLSawmJfeqFqhVBybW",
  "key17": "XYZdaZdb1VpCjBxUtj3hmrT9MrhJLTFnXC3zxkFfKZoL3qBx45qwJPS3aQCb6XsD3y5YffztBFRwVktbBY5orVQ",
  "key18": "3tsBbeGGR8UqULVnYgzxaUC3UZmt7vNNpcL1ejKhdgeXLJYbv7cSHuTg3gsgaYuFZ5atevyjXDhu49h899AGpgxu",
  "key19": "33YBCu8QEZD7Ycc9bSD5rUYb6hNycM4UkBtugKd7piiMVJe7yNuDQ7iKAAxa5nmrNAJ1b1R8LQiX4EmP3QDhBTNm",
  "key20": "2wR7ffeTwHg9GwpNPjzThwSzmwkNExftuMmWRoYcZtQjZvNDhnXK23w5W1T4bisUcQNdn6R92SyWTyxqPE719KRT",
  "key21": "2vyxToxu797p5SctyeYE6EkYT2icUnwJi8voXgxvRnoi1iDWk3uuDGW6bhPHYxVdweG5gghpT8fn6xby7R9Bt7xT",
  "key22": "2iVjLqKgR9JjdEXqX6F1VJNTsAm7uRUNJD7SdxqrJmeJW12Woe5no5FX399LG6Lk68HZTLpd6tfZ2SL4RxcExysC",
  "key23": "4ptqo7mAdukMoGqFhxDgyJW4Xw8huEcVfNrvVyfzZqs272c9YpNZ3mvU7tqZCqqKNtQjKgyTFDfuu4vNMuagbZLU",
  "key24": "X9iKPgbZkgYmkzu6mNDqA3N3tzf1FJ4iahPWT692FpeJnewLtyRB19H7rrWK6E1ynfZiXdqbRsTNJnXKCA5T5tG"
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
