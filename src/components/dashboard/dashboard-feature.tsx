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
    "TyH3Ykadvye5PzVDgTocFdRanVScvdqv2FBGfKv7FEPHFuUUgfKyXymWUTEeYpWuDaGiPz9F76MgGoNkVnDtkzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTXAY4ognYZwBWQxNE5VpzYWzBetyQ1W691BcgSWfdXh74EZPepuqTUwRff2oqM5tVHTnUB3uQXDrWzffN7WG6e",
  "key1": "2SSus3tVG5zrWUcGvMLFhDeXix8NbBD6oApZigtNfnz4zJNedvfmuJU114TrNrhhqbPdhEx8tpnZRATTHXJCddw7",
  "key2": "5jQjg2tF8dbU93ZUAhwW2MVgr9vqBNALh239X5NmevTrzGBvtkY47RoeraVyDA1wKaPdhKvaYhkBTXfYPamDB76r",
  "key3": "3JhuLHFJRWnRTejDChHxnjA9wCSGgCaA8rsVUNb7asMzu63PUGYeYYtGrgzXPYJ6LeBsLMRSPRhnQEyPbQHdGZ3p",
  "key4": "25uZfAMFJVAgiEq3ApaXnputWW1Vw97HqEe3GFnxu5C5cXB7QMqtqEjD2dS3wkHRhSoT7rVcHhig2eY2J7xFyanp",
  "key5": "4DcKFgTg4q6PRdzLiRpQrHXoyArExVqAjSHJPMsqu4Crzr8d7L9UWCGFYjgqJdFnAko5Z7qvCRZR6hj1vGAQzqAg",
  "key6": "5PC9DF9HppgW6XVE4mP7jiiJMq12TvYcwes2L1Lqb6qj4LAjA8hr1oDDBfpdtzL9d9DGHV6SKrzvMpr2mVa2whiN",
  "key7": "4KC9FgPekWEZeXy3f3wYAWQVM5XYtgRs6JsRfsBmcNrm514vYrvmj6Rgz4DDzXreenN3xtrUEvagDLNqhLcip7hY",
  "key8": "2iJfr4mPprasE5ch2whzBKSmjDZ5Y686rCJso8Ffu2RTtjz7WnDtJTjcbTVgtJxsrmGaxMMeUZ8eVgQ2VcZSxPBE",
  "key9": "372GpCCXrQVEGc1RNdq4R9ND4wU3xv7V22hzw3P2eJSAq3adRhoHXUb4npCUGdAvCV6AWsprgWyCHE6zWFdJxoYL",
  "key10": "4LbbKrvMXocSPtitPXRVzmXrAVG8beLbzabsLBYQShdDMq3BhwvtX8i9frUHF9TEwFEUHmGnTeqNUZGD6ji2rSvd",
  "key11": "5XeXFg4hhWSH3zQLisSfrv43MNNmQteMXZ5A6SKS6de3Tp2KG8tbw5wRB77ttMpbF8Fm1FqNErDqLfYRNT1GfynM",
  "key12": "57nzCQWwLozALKqEiAYPJ46ZnF1a8kdE6ZqkAdaYYqudaDDV8J7R1Eb9dvKSQqfFi1GZGB5WAU8gJdcTj1XTPVYH",
  "key13": "kWZjutQsWNtZt2yQJRTKQMLhTzFCkT6eQ4FB16E33nq52ibw8nZqwxPAXRLwLRs1nV9WEX2buRRyQWwD8xgtYgo",
  "key14": "2c9rW2Skc1heEVz7K1FUFFiCxZrXtWPpoJRLzMSy68AC22kHE2edLCyUoRg1zC5rrzRJbnCrsQ7dCWLLBbNg2B7C",
  "key15": "5MRrgYNXBiKqRu8c8JpdMZ96mJ1RDoKLAAhcP2DaavPvzrrNbFSoZxFP7AngsY2YACtqmL7AXWfdARJkD9yTSoRD",
  "key16": "3zowWj4aD6kbGhM8wAqjvHLZWQdkudogDsva9LBFof1vBSwj4DwnU6kwJ4K1gfGvmYLe6zgbV3dSSkF7tfQrHbLf",
  "key17": "QxUBqRC8ttFZFn55zk7eiN1KFVoztwQ18bnP8kuM19JpP6dRE9GfyaC3puChsFQhkAE8767xU3okWrCQ3Yy6s8K",
  "key18": "4NXrgmFZXQnzUTnYbwLst7vLtfTHZWxQsvj3TNLk9ZSJWVZngiVyk9ka6m8NZS73KEeqBz6qDUWcB88xwpSM8xH5",
  "key19": "5s2C5yHmBLLUSwaRySHswHDVusp9FWtDeLVi52rGzanKGev37BVwmXiH1xgdfUZK1fX9SFmU2NygHcwYZTWVduj3",
  "key20": "4b5HzPJ2Yc8aqD4dB3hdA6PSPQx1gSGyfsaqFa8th4y1UTKjiSZkTy4dRS4DBe88o7y8Vr13XmuQf2tFtp1ubJ6M",
  "key21": "kh3PpZJpLGij91Lr16i1jH7AXaoHP7WMWMbcsCoQaQ5ggU33RbQ5sdRoQ6nspM6wEXz276u6viHULAZ5HxmHJb4",
  "key22": "2VUkb7wAcMRGJuFkJm6fRkV3Vz2nbZMny9tE32LTWvWe1uPtzxDFBSXaubXV5H9HoTsTvgjiwmDWhCk56RuHR33K",
  "key23": "HkaYGdy2W1SsNv9ChJdC6KQpVukvGKp1vt8B5kAHfCkXJdBRhLnLGG7k9EjEoX7LyGRPC1kHv5PGdVeVukTWuHN",
  "key24": "jy9Hn5cvusVm6jW2epe3TyJq7q7SxN8qBx5qaeqFaRax7kw2vy7B2Sjm1qWneh9j6vWFtxGMzfk9F7nQA5JJBxt",
  "key25": "3Zun4rP97qBoTroLKu6mbZ5oGDmzmGLMuXgykeRDpwVhAj7tWtP1TTcdbaUrSdttMfCp1C1AwyenEgDwuyiRvjzh",
  "key26": "5QjJcWyiXLuwmABau6Up4xBSvm4XEpM3CuwSkHZoo2tGAJ2Avt5cLXwCuqKsrbqiSqv3TrT354SrK1BwDg7eV53G",
  "key27": "2uUFK1HL4ehJhvXWhiSnFCyAYPxWUuCx4v8BLyQDYBxSD3HgLzXszACC15BFVQ5Zxs2kPLFDGj82zVA7PxU4qWzN",
  "key28": "3udWGJshe8HiGZBdSRFYFrFP6cPgUeXGYCHENgut6WSkbbj65jg3j7VgEwKFdJjTwuzzTAzurCjL2ieyFoNoMM17",
  "key29": "mLrB4ZVebPD3beEDw7qgvtJgvf2JnfAgd1gnscrWm31SnTtWmmJwt2Q2dGtJFMFjDJopbnXjiGXj8yF7QwBy3uw",
  "key30": "2L6CKxXvSyzvKHYcoETnV8bkVh27cQHCbuVoDMwjo4RQvMAkA8gK2RDX8qatp4Q2b7p1vunMR4GLUH675boaRumk",
  "key31": "4gQSeF7zjsBhivxfdhyX6Qwm4K779MxscdrN9vxKfdNQufYj7EgNib7prqCLDgbfUNdCK2RBqhmbPiTrAxMA3oDC",
  "key32": "VpdikKGrQ7K5TJyf9sMsdK9rhtxgcST4a3XArhG77b8aQfrCuHuGJ7y7xLhBYSduuzGeXXJjMy1gKY2JzYPCyTM",
  "key33": "5bbQbtZ5rrvbi9rufypfmT9qZMxpgmeJiqFA1CjQuMnEDrQFiKDiwySmboidjC6NoH1oAhPVXjL5ijtfuKQzqgLo",
  "key34": "2HVbX42vcEqfLkswShkSYg76HmTQxjweVZ2WyicW1gYMAsSBeWPggRVaRRATJ81YN8iAr98P8vvoWmRvGNw71iNZ"
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
