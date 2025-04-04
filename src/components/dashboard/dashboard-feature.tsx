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
    "3nRDAcojmYUWJ1SZYtvTFR5KPUkNEyEEeHhaVk9HFs6tAKUFYxqTExhSiLaKNhDqBdt36VHarqPtsRw8r5SUBEZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAxFYf1dfcLYFCKJ719pynU9XkgDZ7weW2zRoJZsEudsRD15QJp8R4gQjNAbpM27MpArruF2i63Q5xGv6osZCmc",
  "key1": "61ELuB9i8nZXMr7KwN3U4TM2gH3iMQe26oJBDHfdXPiMMjDp7Gxyk4SGRZ2JwFKG9pCnABucrcA7qvkPS3oLgjvh",
  "key2": "27bCkMBV1VdXPPGtSBaALtT36M7WESurpDf61E6rJASkBamS4evN9a3wqQV3Nh9EdYbBgBMBgKawQKqGKmv1WNMS",
  "key3": "3tgVqGZmRZEMnUt94ddnevHXMef86vVe2PpEgoXqmtqiBKfx2ZYrGWZLHxZVsbFwtFNNMRopArkUk8bCYEaT78JL",
  "key4": "2uoRcdZQcU2mfR2pDmYpmPMKCMWVwbtpv4mvrQTjpBrNfPFmnpXRAohWiKmZEkY9PJcfiAMJvCXTf7VGcUetNFWT",
  "key5": "3z5YgB2e81w4vEeauvrqbBPxnBfviHVjicivuBWZFBcfH6w2EGVQ6W4stde1yfZJwtSFowaCgd7hpYaCrYnFtFcr",
  "key6": "4qdrsqofk6FcE3PWhz1uarhNv6xF7fF6s4KSTGVgCfsLYein1Vuo8NF1RuyCBD1FHVoLX7phsqbPX7jLk1WYQquN",
  "key7": "5ET1hM9jhNUccX7jiGZmRhqCDS7n1LNPhUjspshZxCiWVgj3aYjBQXRBFrJkYebfomorkuW4NhmGCBZCLJ4QLcsS",
  "key8": "2wtfveUsR4oHnHVt1yF7P6BdH8vQnuQupfj6ShTFZHV5ii9XZZ7H7i3LpszTyub2iExgc1zZnjgmDgNi7WwYwhxi",
  "key9": "35tiGjXhdrgJgNtFeDkr6mTiC9P9goDX1sgKfvhKF5m9QTLtbBbaSk51yFfc6nttL8LYUhyNZM276yCG61KZo72M",
  "key10": "3jsPrva3jTsKkfnGHUUhEoWgQVTSYdumcPaXLprfp3ZVGbtexBSWFivZAs8ravSymZcsMkwiVzi8Nh5umLkRgCfP",
  "key11": "3ZX1H8brgBp8WhzUzYJwyoLdoSRvq269V2tU8pfgbh3BaZw4ZYY26qHyauKRqsbaTRoPGgrw6xs3vaaYoviomj2i",
  "key12": "2KdGLwAscKzun1SUe5Rjd1ShC7orTJQTr1xR1FJJFNLhsBAeCJ4HorQAnzKKSVQ6B26ekZDqb322fGDwhoGyRFEa",
  "key13": "yTMYqKgAX17Uaf3mYpHvq8mueg8ZA6Q1t3kLJSYTEZaUarDBXBEZjwwo6bWmfj5FXJ43jYDzdC6F8zfmijTuSzw",
  "key14": "46MTUWrqiC62fXiFRuqP7iVWbFHKqhYeZNcP1W5XrZzb61oXhEBe77LyqehZHKCYvD31mRjRjKELT1UUg9EtXMc8",
  "key15": "rt8qC9LNGVzNgEGT1uE8pffv3C6JSp3qZ252k6a93xk65mGuZWbtyxvU9P7r6CnGpGenZKSXZTEiFPGUyF9zt4S",
  "key16": "3aEbXEgMUTqHxeKJUgdmbuys5uqRc6ABEbUsx4NqWKAinDNFCAZAy2cYwP8vmbumPNSRW3QbRX53vpWoVw3So2Pr",
  "key17": "5hnu87FqRyyqVUjeehfNSeEawtVYQzEKroXMESVr9hqG5HrVFVB1MfasZAd5YFZ4CJLAtNemxBtwZ82N76Ld5qgy",
  "key18": "yAUmfiL6DFVErm6HaH4S2Jrmik95eKVai7qjsjwTFvGvAQ1H8nzN33WZbkHzWpNQ5st2x7BxfXK8NeQJvy836Jq",
  "key19": "5RykaefGkpdXEzFTr1zem4rrYHiUKRXJ12he4EC35CxVctQwEepAHmQ5dtnxhzYEaW3iyNzdvHTrviXCeFyhfVrZ",
  "key20": "4RNk5CRQybkBKjcEm4LAdzg6vz2CKekaUL72HHJbyihGimDUHCSyhfgpoeGewnVAH97D9kWtECYeHXMgde1Bydqv",
  "key21": "5ouNfJmJGtN9nyr53X6saD1Nbwp8PeuJvxpoGvQHFcLhJa85Dz1Y53X5usj6uJnaTJPmdbT7hnAPUpeSRqBtYrXN",
  "key22": "4qCHaoXna1cJEuwyGFevxBC97AsRRwE8P4AiwPotUSBxJNHx7x2P3ndMBvRZz1xKNxibNe6zsKZ58Ny79a4pBNqE",
  "key23": "4mmevhksENf3vc2sWaPZQQhUahM6AjMsLApGpFa1RwxszCKsv1o4Jcyk8rgihrpm2AQ7ktNxYXj1s5Y3JcBZSpe7",
  "key24": "NNHk42zTq4G2dGrHM7DdmxXQuoa7oMXF6nKPLkLEwqqkLgY3DEu1FKMUkWizAbfEX2DmMpJ5smpcpPKyPuioLBQ",
  "key25": "5kQT2QRioPAosQYGfMTXqopMXojsRB361EHW1ELnzV9DSCZM3QMX2Z9Vsxr1cnwWyxt7zzJiWbHaTrETLD6WhH5b",
  "key26": "5J8w7H8zcQFkdx19hBFsNgPP9JkwgfodVKcxkVApgZ7JMC4cuCafcrP7edTrf4NZDNKjFQ7hreahQzQhSxGdaViE",
  "key27": "AVfhuxtvGF7tV5B1vEMec9dERTxGdDWaxg6TP2KrNv6pByaVKdornhVcHwmjSe4oSgzUyvDbedGJo3q7k1r3AKF",
  "key28": "4aSG9bK9mkg9JJhxxKpTJR5ZDxEavuEeLwGX7sC7Kvv53FJU5Q4XePesMNZSts96xFJCThUjcmGxV2jgme7WENCU"
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
