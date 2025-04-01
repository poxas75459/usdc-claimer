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
    "3NTdGAZUAMRTSVj9bjYywiqScWL5K3jzVQadAoQUJUcgKggvmXxUuTBKtspUtWyZLyo2bYj4PAjyX8Gbj6PhyoGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iymqgRC1baZK7HKRvjEUuFbDdRVwmJqNvZCJoYyGmpRKZsp4dUmh9oGwS7762DYQjDk8eJs1GdSA77Yb3hJ2sef",
  "key1": "42GfbauyjR7oPqAPzh3ZzQVUE5HgiML5T8DKFhrb6JoyzAYT6mMxMnxkCyJgScZi1f6b5CEhG4WvZaabzuVsdFEV",
  "key2": "2ygbbGyt2wAq1bXehopXTYLtU7Z7xL5MnvG9WYJfkVPJEfpPoRzW7uUW51qe3E1e27zTs9Xt4pYfdUytpnonXRqW",
  "key3": "38BdhAXe2bTqE7hhH5kp1BuSHJvBvEsRpAqw2P5MJF7YbQo61iMjCVr2FreFtSTfXAJtCf85pnee4aPzgFPPqwFy",
  "key4": "5kpeuRBV3P7KWryify5j7mnCwq8R5MtYUK58TqDTScKxyoiAJLT3XNG3JDu9AmTuZNvoH7ohnVNEk9Ax7AYj1SAg",
  "key5": "4riVBwWEusnkExkFq9yH842V3Fr84vbzErtodvJY7XnVjCB2DGBzyLMgnRdNYT2jV2989Ddf5ri3zy1imwdhEQfP",
  "key6": "hgKfmhfKaMxhPHQ7jM81zFqd689W7uNFxhdsyAhrEp2EWoynfwGTdyMgci6ANzcyTdM2fFWbpAvEc52qrJLq8EN",
  "key7": "51QPy5fMXSB8w9LY6NdKZKiHf671bCosQjbVStTiWe6xQdT3wyg5kmtCawPcLtJ9sHSJGiQYpygMBuryChLJPyCR",
  "key8": "4EEJGQc46TzKYdXjfU6qhSSAQXQ7RURpwR2rPMgimoNZytDsVu9xrkWbGVJG81JVugYa4N66wj3WcHXGSx6FtUFm",
  "key9": "2LbtsHNR9PvctTneASgYPsYM4nJb6trL7ko8QAg9G34ZNFffvHixLCQY58Yc7P7HuRzT18m8Tb24dLuJWFkw3PDe",
  "key10": "27qsWuQ2bvvJqkWVcymttMsrNpxVerV4ojMEtpUfD6iQZKHVkxcTaXKGEEd9zCqHxtSwhZAEy3Q7TiWfkSwZY2QF",
  "key11": "5URuSNriGMND6onjnNDbAMhZYc63C7J4RxL3V7CqLdVKsuZfF66Ci9icMWMahQHLkmVvoUh6Rc3m7VEmsdmwNuzk",
  "key12": "4qwCcqiunhZhhq7pSDcLKiJacsrguaRXFA1Lodj4jcb6ze4jzN23JBhHvidRkj1N69Zh2tcWWreVHTDEwyfyWcMU",
  "key13": "2uQ8QspMk3nuG718tQSVHwY77d4hyXUEmndRLQzjaGtPZZmBCmYDcfdY3XCU3mn68kuKEy8uhYRqCfWt8CEYRAXJ",
  "key14": "4mRSWgMUYU4v94VZyjFgdEmmvVntU6temGFxBWqFEjoGKs9PpdQwWASK6wUb9i8mLSw4wxmm1TdDM3CVfF122DKG",
  "key15": "5D8jJjkQcTkzKC2Jzkfn1WqezafU5Pco5k3iRTkFtxQJw2dj8XZvuiCR5wAk8ZVcRE4rbqmbKvtnGwEYiRtPS2M5",
  "key16": "2csGCqoxWUVDW7RYo8DTSf94h3h5eM4TeR5TfmBDikJxY95bpE4YLSCtZeyLRQug9NRQUrcz8TKyrDkr4rd5CF9S",
  "key17": "2BwnKe8SRDMy5pA9Uo48CtjYcwZXzT9Q6sXrdDxszABCShKJGBUC7sTFE5jEmSTPZjEUexfUfgZ6BTsgUxiS6ifK",
  "key18": "4WksGwaUDpYYFxpLMeAiHBu8TCFmagYbtzE5hDFVSvgv7hWQPzDn2szTK5u5nF6ViaChn5tC4mTQGgMoYknLTtVp",
  "key19": "4Mhf9atCZbaQCR8oEKjyq96gkXRRWRwo2aMet1ksKMZjTQnQAqLbigbH3NBsM1M7RLdXmKot4NgAoyqTu7ZSTTHy",
  "key20": "3b5cG94ae3p5vurnSwBVnXbMj3sQpFjxqJa8XGCu6yryNatjXg7m9TiHJ8wHWwiF3QsLDYncnKmjTdPeHsxrDien",
  "key21": "52QWoj2en4Z26tPiu2QsSkttfpho6saCPQEaM6DHsHrniedFWK6sah1SedW8A9nrBjuxaoeDFJxMzkAmXZsguiX4",
  "key22": "bkSE3FgNnhPdP235qiqzng689ei3gsZMah9HvonVrz9Cn2MwMTy4jpQEcSFH7suUGTsnKpPd14g1engrn4ZigyR",
  "key23": "41L2i84QzbMwisP6M25pVK4auaDXirfpSqH1DzUsKqcaqvbXMQg3jiTqgczziqepBySQfnSssKm2Bu1H8tffxV7C",
  "key24": "25iN3iGy7WStFazhrawFdjSSr9M5zdASrMHfisKxBvRds1ELo3u2q1jaRhKGaqJEawn3KSpYnWwfhtTjchTfg234",
  "key25": "bWg2K3ukzKyHLJqWZg7FdmJSm97GMjAFSJm8Da9k76muMjHJ9jbkjgNr48qLYBJCTM9aGM9aidcNWqFqVM5ovV2",
  "key26": "3Yrf7vibHse1K5W3py4jvewyNwKereBhsUwXPreQ8tMbTfaYcyDxB1U1JhnJZaAszBxxyHAAnXUg7c9zPNEmuypA",
  "key27": "LZurXM7XxGgCiqC8JT48Eq7iyKQFA3ATg2ex3eiEb5Xi5GGqMrTP3sUbSPC9xh2JN4bWmQkMXS488Y5PAvVsrU3",
  "key28": "gXVqFbYxXLGp49JXEQcjhi295SHHmdzwumaBJ49HTQ8BtQDeXsjBkU32VhpxVGQ6MYQJayMQVHcSpAPXM7FiC3p",
  "key29": "G2tUBobibixr9aV5nfA6qMrDSg2XvqNRMQw5JBi88fqtKLxuCnYvMeZfSEcZ5iPbsnURmdthsnpJTLS2urSNXkA",
  "key30": "2TQqRjNotfbgbxPCurvGajPQXikpXvW3jCHRs7N6HE4J9FteDGmz3GdZpYJf7yJpcm5J1pY6vMh7UjZppee1zzsQ",
  "key31": "5SD453nFmRAjtCL6fEeBtk1rPeAJjkrpEFzh4GWa19hUkvSbBU7cZUzsXyohLqZJyFREbjJpbkeBycoQ9vvJNYGn",
  "key32": "5cj1FuNCLQGzWBjTzDLdEh2chd5W3hU7gSAs9VTGENpAbD5Prn3Q7P1Ctdbg5ch1sLVWT2SF6QFXen3qntnfTSHa"
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
