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
    "5BUHzVkiNPX4fx7un5jv3KRxehycMrbgtLkWPPiLkM7ZiYet8ABMdcJyBuEMtGFXkx7mMWfxgKF7a9fVnwFMPRMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5tSfEzYpkmu7f2z1LMSnDX6JavmsRApBmjmbWvyAVx8FzPpHJXZntr3rUpZx89xQbq9daSdXnAdWu9rKZiieXA",
  "key1": "3kMbvtBEPYFythufQpJ6d4pYeZjGGjL9dTZVfKRkQkRrKne96hkfk1YAfULv2RzUoJJVpGLp2DNuVU2iUi91RcB6",
  "key2": "5RDtwKyMQ3x8CQXAmv63na6teMd7FFSRWE9GCqUg3rW8sHXFHZZE6TQpECLQTjRBMPN1vYjDqV344sACpM8qoyg6",
  "key3": "32nY2T1xwPhAfaWSo6pjqdLsJnxa4sEHn5MtSspoogxxFJngTYfTQmkUcRsYtpNLKKmitSdrHPfE17J4yBZxUrV9",
  "key4": "5zU92Kh3cwcPH7Mt8Hqy8iXDkY9s37oGjecbyyYA6jUCWtUZPkUn9nC2r8ZznCmeBeM99iYUtwC7oS2Tr46o1LVE",
  "key5": "45rdVL1xCsGMAxwk9zmy88ppb9adybLmM9jMHd1wjdoxxVYMGHsBqjcrZTgDnuA3Dm3DUDZd1g1ZCt2o9siFkA5e",
  "key6": "56A1QvbNbc3r9zGgb19jFCkxiFyaCszbiE2KSmSiuEn1qkUEcfbC4JwzMUNqEQsEtKV5368CGPMm9SXJ9tbi9VPq",
  "key7": "37K4D3zwaWqJJMZ86Crb6jSchmDCxTVZSzdnXXxpurh6dn4gF9B5kuFNzKn28HSSYkCSfKRPNBdrYpCGYHqLcuN6",
  "key8": "2C4rUCZp3hdB8y2Qs76fxoHEvgZ5TKJ6ZNszja2ui9cRVamMdRsj5ZZXpPU3kcjUYsGp3sHVeDhNUmsJWk3ZW8zX",
  "key9": "S2kvZvYfEHao1UGM62NY48EGBzi923oM2z1HtmrSZW4vHrmKbqJMq9HwDmX4MN7AeZe5DbmEx1iMymxgm2r8Xfm",
  "key10": "5dFzNaENrodjeZBv3HHxrsD1GZVgwfoFZ5bZwEKWjjLFDjwiWGi9QzNg9BM3MbnFksjJm522ryrAcQPWnwkJwdHK",
  "key11": "S3QQLLzpumDcjYhKCEgdjUmw9izqcQ6GzakPLPcT3tL8mwYwuQo9DA6TUw4cHctQtSZ2bmuMuPMykkbRmkrd6wE",
  "key12": "3opeAHTJ3jWx9pmDvWLk2HRW3ijLByTg2QvFM2H3pVJ9uxJUwyYYfmRyZqRKz3VCLYiW4Zc28frvmoRXtsKgeBuj",
  "key13": "4kza48X6Wg4ShyQufc3kVwRfnPanBQEL9NXRBzqcgwUY2RDb5RdXwpvDdYdbJCsF4AF7SrhiM1snAvwnVHtVXs45",
  "key14": "3BSpwKifW7rvnXNqrEgcB3yN53d6SYbzghm3EdECuB8pnCRgdmGMPURcbvnPbgRRvWJ5GoLttL3MH9XF4cK7Y7NJ",
  "key15": "5CEPMw8ZC2g9mUgJkFKXqsA6sfqGYDCTNbb7DvJdFtWDXRx2Roiw3B451XD55HN1WfNoRDCMu5wXU3ugRg62gAnF",
  "key16": "2d9qLBojNMowWK6vjyZunmbpAhgZxiU4qP4mcWU7ENkfPiRbrSU1oonLbUzVjW1hcWjSB9qT6Nn5HvqgWRAWomxE",
  "key17": "2D9YJpDAap3ph6JUNN9Tx7csqx2jLwvXptpjJZWTdbVGa91Mn24695HQrgSMdsKG8tQ4Y6Fm5fZ8ad6u4MAXXZm6",
  "key18": "2RrguXcgCM1FUZCFMoC3kSde2f94P7WCed3yKpkYguJiTD5AnbuCRWnPDfcc1JpqMZxhU9L8SWBoZHJ7KgKsES3K",
  "key19": "4AHECnvHzvSF7T6nJfWFr137zHYaabt4gLN3v1EndZx2XuAXqBN72jKALfNFvA6cc3etfTKyeGhgdVHSmHZs6ezH",
  "key20": "5x3a6Ue5CciLwL6abpDxK2zm9BUznaE1HTEN3P217KxHFN3yQQnBgj83sY3Mxabr69tezBzC1tazyipaZhiWrCBF",
  "key21": "2CpDpc9gF77FxJ4P4Nt8pTwPyWV95hJAo6V5tSVHoEhwnq8tfRMqS4ArhiUwmwUAhzCZjab5vGZf6Y1JTQahqgsM",
  "key22": "2bvWZL799NJCCmeNsyJppoXpJKt2kurj8BuMbzWtSPvZQUCZWKBc9YSpUbxYnSxyc8UoUgxCoG5Q9K4vQ5CMbL9b",
  "key23": "3tKUwuHFxoWBqDJAV87dePcncBNWLxEEFrC18x4NGoLmwLXkjfytu9qCXRLhY2C8wZHgceEGS9hKDDMhzFSFSXez",
  "key24": "36Wy3T5zCcLwkoYFjWwxKx1VerQdEAPiCPXjKBD4AF4xZd1tWRNFNCSULQybpDjKjDdKP7mLHtKjFP2rsuBf5JmD",
  "key25": "2cafq2ZTjrbAhPan7CM2Wa7cXYAv39z3ntB4UTaWUgQFzMGh4HfaGHbmGZ9Evqyh8eLN7QsLrRnUQeNvrohMt1vr",
  "key26": "66NbivWGy3YuCoLb9F6XzKEvEAM9AgQ3fa9rWfuqdeH1KDVvkiFGbnbR39XrKKqN8iYqyq2e5HpeTdtctHzAn6CY",
  "key27": "4PZsDzGHDAJcxkZ2icKjoTCELACUbqz3GQuWnUsB4YG1aj5sQfmFpKJBVoaXyxFBc7QCqQ2sEnZ8jZB3RCYqY8FZ",
  "key28": "56eVvf1TCVrK9zrUrymFALxrqun6nU3ffiPNZVyAGT5YtgzmBNb4MWUS6VmS65kbdPkbfevJtZvmscohCoVxSzxj",
  "key29": "231UUQZNVQpa8di4ao2E3e43mCgEJf18VLkCHuzCfz8H6LxH8jevvzAxCYUrSpFdfR4pDx8TDshFcSoktXAdQ51A",
  "key30": "5UgG4TVyZLBsQs1P5wbu79QVtgd1CMqia5n2DcLp6vwquQH9GaqsskkgLn3pi7YrFhP1vdKDr3Kz1bBnYjp7QKVv",
  "key31": "2hhvK8cHwJLqLAJrkGQq9uLw7pBdB71WcawQ2pv9S9zJriMSojWSCCk4uWkTedxhz4iWTDuWdYAGUXSmjB7pDTLW",
  "key32": "2zr3wSbA47BXEo3CyPCWjr7sHUFV1SHaMcsT8k7rRnFr11HacZoLxAjc9G3PeA1MeTGzTyeHRN4h9xYg5ECcCnqU",
  "key33": "nPSP8zYpNMrdEiVgwrtTwRvEypqtNoK5Bvwsc8H3nRF1NZMMK4k8amvNEQzrU36MJ2HDoH4jqYfDWTSndkyMzxD",
  "key34": "v1CSqZ8Lsq2CaWC2WefkBLrGiWWGGYfP1vmHFSijm7QWAmM94FUS1dN6amkpJFFMn6NkqhbdhFgdPP3c8yf5kJ8",
  "key35": "3rpBXT8rMJTQ1TnT6kGzMwnHBmPETVo1UgEY3x216x4DXiATZeNhy8F8c5gNJZNWXDCLgye7mVRGQZ47n5YECeVV",
  "key36": "3shkxzdfEekbSQFtABX7KaU4chDryJsh2SERNt8qxZPzCiRq9f7ytTv1DYH78ry7s4EYXyPdYwJEmegw5bAXSodF",
  "key37": "44aRYu8KerQpXi9GHHZSkDJwwacbrVNc37oQTV9w4cfqpnk3qfPPXpmeNVbC7NUkijTAwf2TkM86PzR8MEkPJXM4",
  "key38": "sTFZBK4imWEXPgvQ1v4oVeycTj5DJJ7xSeGaLLU4g4j2JRXb8cgdnJkpM8KDCQ7JcHxYuqPL78o435pnsdhfpme",
  "key39": "4ScUgtc6GLZeMsL66x1ss5qteU9XWPaHzS1Qjr3RZdHfFigmopsv2pQU6PofLoxuxk8o4NSnSuTBDRipukNfx8Tj",
  "key40": "kDQUqxSi9dwSsFsWCwW3ykZBND2sJVBPhxV5XPe7HhQw1Hjr4cLAkExF1zzZtq9NC8DmFCr5oAs58CNnmZVir3q",
  "key41": "4UmX9DTtkTodYrrXtsbzWu3dHv5SUYR39YH5EiD4B6a1vqYAZH5EkPpXdn2dTozJWDR9gUy2tjdQifRCVPqN2UFp"
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
