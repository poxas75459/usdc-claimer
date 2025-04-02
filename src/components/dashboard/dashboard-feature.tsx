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
    "52nujXZ14w4JMBKAHxtbnoXqUgMV3QsPVJgWwMu21XD7oL6A9atA6DipxdRU7badV1DRycuWtETrpJKtbhr3RnSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92xBq4Jp9Y5BfEY3oet3ARnTrcGDk3sZ2bPbdFM214V8V1BtXPGCMd1wd3uhr8wYMArHSYjNvhbd3jZq98TYfid",
  "key1": "2NpSoGoTYXWfJXJSfK2aNCZDmirde4Q5zVjWFzCfKUa8seEays9PrSBuVvrdaWJLan6Xo2fRXH7cz68ZeMroy58F",
  "key2": "5WFAMu4RiA9fmYBAomuBqKA2fyCwZG5Ke5Agd1hjobubfyBvtGhEWkpd1jDCfTLHmKHThwyjSkv9XGnuWZcUGUUd",
  "key3": "4AtZFHfRff3YZrxXg8K2L7hxsqRxNVQLKrxv7Ln5SBoYcoEgscdgvwUZfodXhWKzAvaw1vDr7b7VVmcezUxgpJdE",
  "key4": "2Xd227tCwrqgqhk2uE8gSp3EfzJ1EMVdFtsVk4iwpt7ox5FRZjLXtAqA5b8PXLjCEE2mFUbwhBG1WwjkHFUjoQp1",
  "key5": "4bFgw77te1VcRfANcRw73mPRgD39NLgPueD7Xf2jcBWK3fnFYVP9y7TyQy6oCH6Tuazm3HzFCt5tSmcbN8QsxC45",
  "key6": "44ZDjH3KGwe5QX7w2geuNVFWvkjKwSkNUfGQMXF1iiaye6ubWU7RtFPtwX9Nx88d1anGtHw1gV4e7e6cQgwWtFrq",
  "key7": "5ubpj1LvQ3avgCb3QmyGuMSkWcCruSJVwiu3bS8V55ySaCYPSpLhXgDdLJAr3ZAPe7YGDKhgVJ9HddLWLoWncJkH",
  "key8": "3rkSAKSLfX7A8pWw7AaG1GznHzVkZ3NvyVh1MBc6jyrNpDgKTUKGpbhK4TR2wv5fK5BN9yfiUtdfiYJWvpFrCjtE",
  "key9": "3dBrrsn8hAZNKFXghQswdtaAheqVZzbge7tD841A2BJTXjEuvuxXRTWdG4saU1Cj5jFbHwimYe2qRKwkida3R2vS",
  "key10": "37a6SJ7Z7oSdBJnEP448Hf6A44Xk79rCftjWCXymE671YiVGT9gTsk2ZcucRRCHwCKhTzLKYN7wbdp3Xu6nYN4pi",
  "key11": "2gkXGA3Ccx7X6X9gM1ydgvUPyM4E987WoSMQbSQpT2ZttTTYqQQP6GzX3Xy7LpnZino1PDx4Xofdrc4Qshx7xcrM",
  "key12": "2avSmZwNyUeWTzHTXrbH2tV5uWjuFCNycSjFA3rbWzG2oZyK378x4jRE7vA8atCdvzf8qPuimUUsACfjQ5zF5Pf8",
  "key13": "5Zf8CNRhyNMv7dxd4VMTT2Dxkvpmp5cAhRr3ktvXwjtWy8WTE5v7k2s9UF5C4gz2brYTCMLfKTpup4nb5g16dH5u",
  "key14": "58XcjSMdJMGEw4sJ58gdMhyJZpjYwy6KcCK5EUyFWY93XnEHXbZfiR1ouHP4pFmp8JkSxB9XKq5mapiEDKFqGbjr",
  "key15": "4obqFZSdMaUFSLEjeS9BYVjuqAxKYivRUGP5SMcA28iNibbjLbpJuetf2WfnzcLk76r2pyFaYvLzPZpph4qwWwA5",
  "key16": "3w185Qstdt1K2YZntfmJ7occRyPJVdx9NNw6yi2PcpaArGWFoFfreThJ1RSwxFhUcbnPvpaAGX8YKTG4BtUyotM2",
  "key17": "5MaSSqYDahSZCvawv4BjSqmywjMRYKw8WytGrwPwBjs5a6Da3hLxb3Np7SEJ98gVL5t6binmsCDjB4u8hD9W2Ekc",
  "key18": "pzhcrYu764Ld8rBAGhgD4ai2fPqsePEEPaLyqNFYVrS2JRFtbsn1nLMjrHJUPd7TQXTUV7GE9UQmj57k4cYqJH4",
  "key19": "2zMN2s53Xfv1JDCSJbo6K2MpgqDxfjFBz93AHktpAdxJYDL3xrigcz1r6mTAmLNjKZ2Uccn4GYz1TNETs2nw1Vvw",
  "key20": "3bnfZgmdk2MLc2DPigJGUoa9w6xpcZ56WfdeXYibW2f2MhcVNKKfBdQ4gUNidvaTMmpUNK5iZFwPimBDNDvRcR7k",
  "key21": "5hJJDgTmpozDU1KHAuiA5KFDfm8aqYMPBDESz1dtZ2vJXz6sJDVGVd26vEzchmNoEJu5cY68u1LmHtsU8PLrUBW7",
  "key22": "43MQUDNnwW6CxYmtDEbrw6tv41hbC51PUdGbM7HJXkV2VJLb7GNPzJDzqKsGNU5uANJ2dkxfF44TpzaCGwAT3Uf4",
  "key23": "2qRFsjv2rqSRnhyv8jb1MeP42NeHGAW97ahVuddcsjoULKz437BX5T6FpAgSNY9m116euhDQy9mtjKnCJmywWLVD",
  "key24": "fBufoeCn8tWKj6BJ6hx6w6DxG2FbDKhUJurfZ2PNR36ju98aaj4AHVXYWycMC3qx14mFLydLum4tQpGNsJStBQJ",
  "key25": "5vUtF5pb7pwnnFgdVwW7f2KjrENvMqN5kuwewHunG8MYxDWnTL3GDZX8N2MZk7GapLkEYqw64HEqraW5DSmVGD5i",
  "key26": "5YMPPhWKWm2XtB6Hdi9rB4aZEx6wzdoD6wcxxd3UWRad34KFb7G5ZcPm6u4Urj6eyyqbzfgeztqhdi5HeCjUeFFD",
  "key27": "41h6B94xwhHoLJwShAkrRF8LxVLPGRASzCk8oLQrYK1p3EwHXPFTiBEDtANpm3Xip8kW8Po3PFWps6suXPVRaB6N",
  "key28": "3JGE6PPyJ8Ydo9PRnWLfQcTXnBtL7PCvhzriCA8ppNAUP746dbnHTxto7szx6QTbtaPBguzTWskaNdc8Koqrvaid",
  "key29": "kdTsjnb14VCPKwzRCGceCi4TA8fLddR1CBTQLt9ST6g28QfASdSfRwc7hVMTf49UBqzX1A8WZcx1foHxECQXjAj",
  "key30": "2Kn1EZoRucU27cubAUjA68fvDvFTksG7Xm5T6nzkgKFPeWwS8UMXpphuHfRij4KteKXP2rMakKQkcxT5WQiVnzWG",
  "key31": "5a8YNySPp7phBc71SfZnAwdZ3VsLpAYh9KpmXUMhVxicpoGPpWtN2uLHTxwk5xBP6JLUCw877E6jsWbHpts4bN25",
  "key32": "2opK77r7Z1heBufTyFNBCvqmdGmi5nbRdVAQNN7FL5gBpANSgKyt78gnfogQX2qLGTLCGVegJm41qYkyRkscuwiP"
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
