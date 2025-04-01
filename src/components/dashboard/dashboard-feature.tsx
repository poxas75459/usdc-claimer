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
    "34N6Th5q742FTAxhz4gtWkpmPzCBTZj2K2DLdrkwxPfDE5QvgCYH1w7MnnVsDxcyRGqC1qUrWKryVYuxTmV8KF1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niMWw8Qha9PGQWtoVbCt7trog7cXBqvA1hAxtJdGELGjyicS2XD4fDcaYydokRRvHAcKVYK1kGteUoPjyKbs1E7",
  "key1": "4RxfA4sP5P8oLsBLRnfVQVX18u7czSHREbgiMuErWwiK7MgFxySuUyS4m2xgw833RGSSF63F7KUEk2dKNKESTXJK",
  "key2": "5aPFhCVVMSB1Xp4mBE28f1XYR3P7w4ra7DqkzXukRubQL4dDm11meuUCfd4R3jRqL89UCNiSAJCETi8A7GWh7M5E",
  "key3": "gf6T9Zc6DWHggeYZptEgiv4G7fdWicki3vxuEt9NofspQRBdpzWUbUKsoi5JL3HsPozp9Uva38vTR2Y4d3oEvZr",
  "key4": "61GhUcct1VXEEzBzyTx1k1aEp85jpxfGhXSwpqwb2pp9GTZ72P9VFvssm9RTL9mkabAibXpJGz55Ffcmhvfu7Txe",
  "key5": "2GND6P2xw2XmvnpF5HUTXySyGviFGKPZXChK146eYDRaTt6wsS5YQT14SqnfHxa66sEdePRjtPiyS6wqFEekEKge",
  "key6": "3ACDiWLZeQFgPAW7HDFUj2dPhrWAbhWNv1eXefKHkXyXqe8RLqTXXapsoE8vgg9P4TsfLUBBz9rnDKpZhHtrP2Yc",
  "key7": "4Y3rJ8EEumFbUKfxr9Ynt9RNagsUDGVfnAy2zhZi7Fi8dxkJnGiB4D4jCoCDTHpFgKweoxP7RfRznwbaJKP3bQDc",
  "key8": "4Ediori1i1URBUscojt1A6nPx5psKZnDTaejvvafiR7SjTGUTcqDSj7LN6etGUUXvBK3qPV3MKxJ2qWS93zcyYQE",
  "key9": "58iXMxhWyooRVtFVdGe3Ftf9dS3nzikqFs8Kh5fWS7c6JS7sngZ2KoFGpDGZS1nUJ4jHgvpqomMDwLvCNMcQnLwj",
  "key10": "5KPDbvafs5MEtv1KXWUSmXzg1Dg2bjDPKSAF5eUJKuWMYuJ22fzWaCqfcB9xQXjAUtBZf9oFGc9ugAzA1QJj1bEN",
  "key11": "25pw1XoouGVwMtWwknN1zyJ1rVoxtnzyHQRYQ5b66u9rfj2mrqTYBxDshgnWrefRM5sFcJijAZSoEfmPLsRbhwVJ",
  "key12": "f9Sn1Hmp82NW7SzLXpdE8gyahegdCaRcsq6r3xJdahfLLsZacepX4cMdzYJJTngVtxJ5Jv6GEadJNStYApmpQXo",
  "key13": "zc4SsAgp987TCGKxmk8mPGJuFGTeSxXMnuunp86b1PNW4GGx1o23SFdKB2VUWhG7hFd4Pr5dh44wWHq7xb2k829",
  "key14": "2gQQG3VAg7ujA4jM4jj6ecy8PBQTSTAexueabtcuwQ46TnHxg45jHAJMzGkgx3CCNz6FddDJdBCuUjjpqksfPXKj",
  "key15": "3AFFvCYKZZ2psC162VQK3gP5aATQx3fjDygH6JnF8NZffcvrVHuBsgoBZ2YepozM7TN4HyvioNqgmWnxCjH8fPhT",
  "key16": "5jKBBV1GWb8RWkPQavESo2dSYr3ga1SdemUUufjL3jWQdv8bqa7Zj9tnza9QE2gLiL1cuj5RcgjQLW2vNAAptUF",
  "key17": "4rZo5Q6rWp6czw72FxuTaxZdBZGxP65cKD5YMhctEqp98EKZFAin9Z8w3RWSU2snvdinCjN7XXPE1GKLA5xjptXG",
  "key18": "3zLAr37ZS47kKomtYWVYUdfDhvD4ERVaMTbRMrf2y5zj7zVmRGcPWiuHgQwPxcMwrGe3z4EBf4WWQ55SpVCRaVok",
  "key19": "3PnAAUYajUYkCr648tNoaofKYcDqQZJRVqnVjFQhW3F5XQU62tcsPLCTuYdZ9h8FgBdtp2fvmqqezEXh62fi2ySQ",
  "key20": "3xUh97cj18VTST3zj2XFC3vNs18MJ9aSm1WUWjEB2fxcLhwYYjQjH7LN2x3mNuNp4sZacmmGHbL5R87CYCUgbzB3",
  "key21": "2A7sfFvycbKBpVVHxCqMTsn3xe5awrnjKTHJiZF5jegnvxtLWPL3KiFq3ncNZtxqQns9p2ULEhgAgSpKUBWnmFBg",
  "key22": "5irtQ5iwVNbRjVfXtJA4eGQv19mcZooqnhaHSNoiQLzuwTDnLvqw2dQ1AVZfticV32yFpSWrvpUvnZkVLCcHptNm",
  "key23": "3Ww8yjPwjJZGGTBd33g71QfDRAJSaYcXZyMbGRfjuPgCnBJYHi2renFAa3Bznwk45tQcBaLdRdH2zBYbU4jRnqcn",
  "key24": "24KjqARPDQEC36wcM4DorKTEpC1tBjhAUzVr49RrJhMoBgEJfp91Z3nkwusbTNwt6cbs1dDDST3kmZ8BCzSYpMZx",
  "key25": "3f6ZVBtxsGGAMdB6LpEH6XirEdxNUk23AMPK29HqVwxus5rZjdZm8jp8Zq8GmHMHrP5fqXZzWXzpCdZiKivD9LsL",
  "key26": "5AkJgNrrTrstzy7qEFEyreRm3r5L4mFtkBeND49zwRiPGe92AAbRFebMPiS9qMJCkwgoKJfpBRyta7Yb1MPAFzBj",
  "key27": "5gVguDwYTre77Hk3E5sNpGmX3jw4Vp2S85aMboQWbwDTnM1iR5cF1vRtfio93LdLmZXGLH2YxVaz97wqs278f7qm",
  "key28": "kT7E2HB6Payv4oZz2H1bRZdXGgDvKViSk5HqjE78gKdonvCQ3x5WGdcgxFnRgqLDWdDwVjb3NhRZTgQfSQfXTjG",
  "key29": "TfEpbMehWNHnShuPhdhUeLuQTKhEFqE1kDghC6PG9u9cc3M7NESvRXkUCyDdQt54gr2F2NJAhKPTH9XQo6KkrPL",
  "key30": "259Hf1Tq43GsNaJT4AJRDv7wtnaimsfEYP5zbbuVXpQqRLRFXGuU1AeuaFUBisBmhzFfUctgMCabCQdSBH5gUG6J",
  "key31": "5pdFZEgjW2o9ZfDmJjHiqANih2UvGdZQ9tRCKPLxxdatwXzfZhQ7rM3s9ujwXHdweM8WdXCMbQ4E5dS1b8xUdPF"
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
