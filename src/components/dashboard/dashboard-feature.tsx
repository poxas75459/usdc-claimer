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
    "2Gw6WauFp4WMcequeQWLJy4RPybzzjgWYEvGLeiDJWqHdn2P1CZGnDZvzU3buLhXSAHhWxEV8q2u7egDYwpr7J4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54MJLURDypaGjUFPf9GN9tyinHpJ7R8TU1sAAYPcNtazwknNQckbNgXWW4PjyntfMTWFob3jRdisvGxgB2FMCjTX",
  "key1": "JDdGaUiuQFNDjWmn1UHVK5qm3CXEPHaRYfHACwCAVDtapYvSEM4jD6tjxD6jfKogZrNT8jwqk6PrV5vgEg8bEqi",
  "key2": "4NHCTwYuQVRUSHqpBSZ715rbmdcbFCH2ZfcJgQAi9FcD4zJrTYBRkT8imC8xCtZ2q6NFDJyupq8CPs3DSCuxm3JD",
  "key3": "3d6oD6wDHdjudb3bZ9MRzddNGq9gpsoJE2WYgdgB249j6Ntsao67yFFt6WaXmoHwFgPmJ73kdGTuPLvXa7QfCK92",
  "key4": "4M2tcAj2aAV8EoT2fN7mnh7SyTMEtyDbkqjYpAG4bxHx5DjNJX2Dmi2NAzYsJ9edgL2r6oYCtNSxvhmEC8HE8voi",
  "key5": "2csm5BU4qbHTCxpjXoYUjsC43j6cat8Vz4K8AtmoKxFwiC6rWytmNBc2JTRHDAPctocFCBEjXq8RC4iKs25AeVEC",
  "key6": "3bJHEdabKGJyEJUda2tiyqYYnCAwXQYXAu8BdensMKC82PagoPUmFCqz4U7KRkKjhP3YK2qhepauLVtYeheGLDLU",
  "key7": "9wykH78KaCSKbRtfrwwsfSeKgKwr8tcBn6PFKRfgpWc1jGUSMzMiBBjC9hp6aHH3bkqzvkEJ9MCgwmuPUnPNsLU",
  "key8": "3N5juLnMr8TSt1WARmBfy4E9emStm43KsaVwjrUiTzXjodyCLjwZFTp2ezir4W49No7B4qDPocmTtehcfFWxPGi3",
  "key9": "3YiuNEzw3HFQChYaxjhYKKDY3VDFtwEGydCMytQ7VcDdC3UG64nWPnR1cBCTrEzwNsAcNMdMzk4zL1KCC19UohtJ",
  "key10": "3SviDEFYhkWgyp6cgJBUS2EJtimgaFffM79YbF6EqMrzvrTbjFmuD4bBPBft3B5HcEmmPkCJ65zQwdwcZuBKUngZ",
  "key11": "4r4JAU5j4PzC3roXWc7jkATwPyuQAd2kztdBuHqvJkHLnd4jzVMA7GqP19ooaLDnPjKPQHyq9GZwtqpoa7eywpCg",
  "key12": "2aFY4Q92arVHhZ5TAmp2SDtupWKu2G43rXGuTP1uwpHU9hYdK44wAKCyg5vy8zigSoWWQ3sguvNiN3PZHAa1JDR3",
  "key13": "4JE9CJ377ocodhGebQ7rHVjTpAUf5AGqvjb87A3tC677Efy9wESy6JKQ4WZevyZa8B8y7QcF496yBw5xBL1p12mo",
  "key14": "XgwAnsd75ZVYLNe1BasM2asVApEHnafQkoMHRPQ6QAEuTt5eBoKy2TQBg6odYiP1vyxGe3UMnGHX3TAqt84camK",
  "key15": "5NQFUxXV23h5cFydCDvHxjFYbkfjfRBLZYHDfFb1pPq3cLNg8zguQubK3DzERibrFcr1KqE4hYBWmnjFB7yMV6QN",
  "key16": "2ubQ5cqAY9mybdSXsdeH3PoLAuN3Zc65D46FnGjTW7F8DNttoCDvm5okAeN4CAWP2mbQZbdgXML9sSohmjWFAit1",
  "key17": "5WV7C3Xj9KCNkvBvS2HLXTZPYSm8XJgs6xAGtNj4egTVxhS3qDyXvZiDRckbL8GCvfru5H2i3h39R2nZ3N3xeKs",
  "key18": "26anJUqapSbTLZ7CuwGfrWkAWeqU5E54fNEqGxdzMYaEXtcwCHurXnpf1YohoWGtKGZH5zs9mhXv6X9AqJ3ehsKQ",
  "key19": "551MUj3bsWSf4LjzG1GkW22M5peRVGK26bqa3jP2juSCTSRhj7SYw8Dga2UJMAZKYXJr4vjmqouiqqj4VFwBmTPi",
  "key20": "2hQqshz8jrJKLvBQFJWvfbiZJj6BqwcmcRUHNshKmiBeKtV3Zbf7uyKuKiis4daAY2Wr1Ftvn4vzUehSfNWn3fDC",
  "key21": "5v4xsbYUrwx5LQ87WARjftZfpUarRN1UbY9AM6jwfRWzwux4GPszdq8oC4ccY1DtjbQm3n1JNs2cVsn7CJ688BYh",
  "key22": "2VTf4FFMb5Bp2dEe3mTt3xZQugheTV44S4CMrr7GsUfqgh5vAGrCSjgAoS7sGLXLKm2UJArnc5WA342Rd7ZkfxAM",
  "key23": "3CSX5s21vz16y6LyLUxMWPuCuyVKbqdJd9o9SwUesjyS9tv4gL1Hi4chdcjpFVDdAdhi8kwc9DcozYMY7Gt4NyPK",
  "key24": "4Kf8cvddHstqfooni3Y222tKpz7jY7JuEaiPPyoK37F8zEfq8gFZu8EFjPwy1YKXFkVi714nNekfRoFsfjKqiLCv",
  "key25": "3Cj9aSo9mqdVVxMc8Bpr99mSgpLrSo4ZNPq1fdRYcrpucquxeqGnAUjeQgzj5N8XyfmPzN9qg7WVd7n7a7iNZpv"
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
