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
    "5aDLtGeMYBLQvxjdcsVNFFfmwSkTsw5WStGYYpBSX6ENBVGUqNMWM3zLGuoEQzzDYmEmsFCyBU8EJTZ4CNdYBvWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwhM65hXjFVwN65FaRg8wLRY1m31NCgy8FNJVYZ69t3sducmLZ5zpKKwhsTuYbUHe2rRwSjfGAGM4REywPEkbSo",
  "key1": "3PK1fo7JAj6PuArjNT9WVTd2jQpRdi36awSZ8GWZ6jG8Yj53LPHVtw1pnGVsDYTZYYNkxqTfwMJLEZAPDbh6wDSk",
  "key2": "4YU2nRbcJ2VQQbyW5XaqoMrUzoMSstdz4NSmJja9zUhAKi2BSeMBWviKTWbeFbrLAtwWwALYs5ZAUkFCKbD1cQp4",
  "key3": "5nhLEG5w6vMp62n88ACkDdnWUPSe6yv1Fh8vmNoDrpLcs1DYG9ndchiJUBu9ExDmC3B8HaVz9es7pkLurMLzUSTE",
  "key4": "PezBG4zUcJSyg3iviwCwFHiP9fJAvNRcshu8XnQQfKQA6kVWFTXwTRDtF6ibcYwJgT6aWXuD89Lt7YjUwy4Xvi2",
  "key5": "3kxkWkBTNC4qJAyFj5qxzJgbBb8Qpe9GZx8u4FZS98W2gKnZzXVsEpmj9HJGYAvCqUPgYPveo1nAN2upCiUz7LRv",
  "key6": "4vVbjv176wrPJZiJwSGTy2VWdgaTC1hSr7YgKCbaY6J4vahapPW9yD4YQhTyhso2KPP4pg2LNeZDwWjBRn3Si8vr",
  "key7": "5cwNm9ge9i2TbfjvKqCV8mCexfEN63DDajuL832roKFhXgAr33U1Eev8Cz8aqxjAvdYCjVtJXYuCDmvgTv5o9tb2",
  "key8": "2h2BxevqhPx5UyVRvx3pajsr93MaqxRrVHxCh3F3zojFVi8LGB5B1A5ud5SzEBPbm7EAMDYVQaBheGgQ15zgc4Q9",
  "key9": "5MT7R5khXyqNSpPT5tMLBoKbPDuUimvQXXUMcJNAyamnpVXUNFYXoByNCN3rMjEcHynRkQ1pAAdXtEw1q1UNHwPM",
  "key10": "546TRBpByyqviyijaaHmhdYLnR9izAhziUmKNiuFkt9wtTV8MfQEVGyt8LWHEwgXBmcqEEFLKfAdcrnDHcu1Tnfh",
  "key11": "42GNYdSZubvQHKySgv7X6vxUTonrv9ss2zxzDspX31tGzzKrxuR5d8bw1ixW2ouUawFhrmiWs4wxJqCYztDeJHbz",
  "key12": "2gouk7fLLfNXdpWTaTab6airC7X6NyMQ2BWpHEhYraMTgPYuF7Wph5bPPV7DopnbDxmHNEVDHcrAtpfumAULP9eY",
  "key13": "rz2qG5fHG7vWMCTg1YyjUYnD1cy3pkLUu7WgGF816aV3eosr1RcCfjn8cWAto4nFUy4eLdA2bFgUxXDzM2aaCoS",
  "key14": "rUmdCHxHzqjwi4SKWQyozY8YHLfr4mSBLxJp7CNqsmqMqsQP2nAkibzv32hcVTA4hX9RFPMA7je9mDs9mdD28bu",
  "key15": "39RrWwTH6grvjFEkuzrASg4Jky9nA36CJjyEzyKZM87j6QqCKrmX6WwCDpBEXojHeqSGMVFZoEvVGGjessVQ9uAv",
  "key16": "54MPKVF3iZaxpnofARoKdEhUmirLqGjAdzsz2yZMfm61vSwVHTrN4z2CnbgT3QwYaL7PY156XXsFqfF5WzGoEkFD",
  "key17": "2DA6TajoP4vHeVNsJNQYx89K1y7YZTERxpHT2gB2UN4mLQacZnAd1KYB7e1UiMSK3VNZcGK9qctSkYSXdfMzkkrD",
  "key18": "2TSBsLJV1VRSkGrgAQuu2etpgVjtrt5QotvPQEG1BNmhi3FsTzy7i5BvPzEbuj4Z1PhwHe5d69FSkRgxrHsRXrrx",
  "key19": "3Z6RrrX4K1JVEnPSREonWG1UUjypUUUS2npPRrodCAqqgTUGmKQ99Qvr8vqhG2S99A6RcbqXoAv6rP7hXpjHZb7k",
  "key20": "2kYP1Pgterf8R2TqtmkmtwjW37cFrP8ZzaKnAHihV7oS1QubT7ZXcQrp3VEig5prYr2jmVxUh9j3TJfa2vHpzjpe",
  "key21": "2uhoPmiXCELBJL1D4FZSdogWCu6UyjpJDgFgT9Z1JEjNxFMroM5EkMyK88iHy9R2WEyNPicWdc72AshJAw68hjt2",
  "key22": "4JVcdA1gNAuBHFSyKaQNHZgRapBV8E7BcwEuEVVPH73VTFsNbYJDsAfLkM7cBuRr3drRy9E2ear1Ljoq3eNzZXM6",
  "key23": "3e9cK6oq4w7kd1bD46mWm5gVrMqgzs4XSHpLfHAoYngNhvyq5kvuFMcy6C1cRQDPLSuEBB27G7pTHJi1qPTPHYRG",
  "key24": "4cjg4RVJSzA5H9Q7tKg6CxBLgKcMxawhjmdUMW7ZKHETUd8UgNjTFm4Q2sNXmR2nuBzxxRSEfJqJ2sswaahXvAqh",
  "key25": "2snVr8npuEVe5zcgoQgxk1uyrbBPbP9yXpPqkPRDfaYh2JnBEh1cJVb2hybVvTLxY2DKiLsY3DfSw2ffveJdd6VC",
  "key26": "3195qvksgShw3zq7wa6mRyyrEvEA4SSb5oMqChbnZxB1brEzz8FFbL3hX7B5FQiJDTACq9xREnajXoSULi91XPn8",
  "key27": "5q3qNuDGN2AJjgSPhqMrM1okQfH3ZYNHbJbtfhaGifwfVVumeWJ6MyWWzgr3ZQsbjeNXMh2Ai4LyhRBih2ARMonf",
  "key28": "4upXJFwgaGo6QttpEhXTFBE5mxDxeTUeB3K3cUSCFCsdeCLyR9AHiJkcdZaEss5nXcaBvH3KYXWPopFGmWLaSAj7",
  "key29": "5c4Hi952Aqy8MUaMqst1N6fPVQVPVNjPZ3kuwAYpQop3fursfxBfC784M1Bxq84EUZ9YhJT4xNYzVQTXbN7sVs7Y",
  "key30": "3znyUrcqSQ8tkHyZCMJCSZCtd53PAnttMyF6fYhUAwVCCkZf9H6iMj6hUeXihpjnWmuPw1vAEpyhm49SXxEcPPMC"
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
