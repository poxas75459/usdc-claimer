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
    "fjSZXnVEuGEgpMtbPjUqMDb2bbMSMUT7ENZhrP8TJh1c4ZfTGhVi64E7Fcd8UUQHnXjEZ9hx451tqc9PCEtQw7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3nw9wSekG8Q6X2XpBYWvcpPZzU1ph9WtMAdd2aajLhp9UGCM8x625YJqK3ieUao8quUAJNK2LHjtZNowuX9rKg",
  "key1": "2WLEx4nopJ92NK9TmBhgikyRvRFVgLA7wB35rq7uawxgmazkhGbJ2FL5Q3asHTj8NPo5M6JW1y9LCWjHPrpYwG47",
  "key2": "4iw5gZzwdBXrYYihanjQwNY5mCRNbU1gEmmef7vRdWQV5ZXi8aTF63KMuCkGLMfHybfrojNoDAdYxumnMaEDDe1V",
  "key3": "2xu8TAARewmVkKfARTsQg4YbnPaEFQHT9gJ5ic9Xw19HvBUnZG9nackGH3bXXkQSKzGqobnjXLG5GBQ5uFNcM8yd",
  "key4": "jQEw1KhUQ2E2nbETd8Wv7DthyH7txPqjkhCNYtMAfPmon9ZCjCbDaRQpMrFirnfCiesQojJoGSpa3hSAGW4HSHy",
  "key5": "4pFHZdJYwcGeQkpfpev229r2Q39rwtjD2NtJYio2zQf6hb4saiD6bYDK4MvrQvn2ptNYeq5KJE36gRYkPcoW8YL7",
  "key6": "5UKFFH768q9fgquhcNdAFLAy2gx8qqLhDY5SgGM4nNiSFinB2cWiajHmLUrX9tM8cqwRJ9g6FReGunagrwFj6ugP",
  "key7": "4qkDxYU4aojGL73uMYb8ibmcoK85mMaQso6cffnASK47y2p9EDZfV3gj2VHkJHSAp83tDTMwTddrGmSa9eK7gX6G",
  "key8": "zeqVMdtYwQgJYWAM6qDGi88djw4Z7Y3U5vQMwk4WLm4GBhNSgPaLPBgozZWbNguofGLCoJ5xis1h93aRLfxxDg2",
  "key9": "22Cizb2iRXtXsR683HdU2gW1XRjH2NvkqePyZ4SeXyZjRAZZa8ZQFpAytqdZ57gdGLAnD33SH4QNHJ2vrLBwj3EZ",
  "key10": "26bzULXhnjy6Ptxa8s9uUj2Mc9RkebM59ryWfzFfTmx9XFma6UxfEqZy4ThA7EnkFtbPyeKvsQSvfzG6mdBTq4LG",
  "key11": "3eb36xrjDGpu4oX98ru9VNDZryS2nRXkiqkvm7z56Q3CrTz8gzgNFNBHEfgJLSw67wjgSogPUHbqywQMMejg7iKs",
  "key12": "cHD6niXH5jh14Xh53BMKRvcKtdvCFAnK3MHD6uCrVPjhntvfVKaW5NML82pczR2yYbGKzQ4V6AA4NYwoGuyyCBQ",
  "key13": "5C37tijBZq5pxLuiVBamNoa6cALkMJuzHfoTJ5SoRMe4Xo4PisrPj637VkXMwSzQ4Cb3KmPF1gD8zXZhdS1XDfMa",
  "key14": "muboC5XqKHzSKofsdb7eb1MB63CDU4cToHxyDYofTdmxUCCM39BAvKvuojrmaLAT17RggRvKPzK12i5DfdYhJB6",
  "key15": "aqyxkrNWEfTqdH7qN5nDZnqZ8EDRN2nGAueo1y7N7sGMcLQxqM13aN5XnowpPufNLD9HrfyUiZ58wjX6FcGetUh",
  "key16": "4WHuX7GN7zrAsTC3qMJLvVqkkj8AbruTajtMxsM4rqLSBkFfqt7kN8C3K3WCZkR1dWCZrhnydaHFK9a514vvPevm",
  "key17": "4Wd7H14scVSWh9vgXEUG3tYN8UzeGrhu6ZMphWk4kCGUd3bdZMcmPKSb5kf4ZRCK77xJ39s9QCKfLrwG9Xy72bMp",
  "key18": "XwZJsHK1q24iVsraCi3iuAMBr4TNVkwQBKF76yTSmk1VbCpyXXhHkzgssaTDJKPiB5oDmAxuQD1GyYJXKrnG4Bx",
  "key19": "2gyVox4DZCcrYWxRZ8xkyDz4MougQEcr5hAZd71xP7zJCNauchKt9x3X6hccEimYVMLem3ac5YRQo1HL1D6sV3f3",
  "key20": "5wVC2Rvx1nGMeQw1VXQ2zRYrt9fvgLUHFw7CsSxsoCaxSemhMGDCuh4nmMTP16jYbzB4qedHik8c3avp9Jrze9Z2",
  "key21": "5qyCHno8rmjdhvTz7oFUs6WU9wNUNGUhUAiKrJtuAkCUJCwG8Htxcv2u7THoHTs8hyar9UaBaQUHhVGbCquePrTt",
  "key22": "5z48YqHeSFQ5nXY4sndevk7XCxaCNgdjb7YMbPGxYCHSCQDbUSoVCLP33xQAavZtKGjSJ4ZyEdK6qW1Dh116oau5",
  "key23": "47dmy86xHfhQi9PD4PH1fPNy1eChB3Ah8ib3VHrfkSZA2VJNqfJUm3ZYAVTnXuQ4pAAPGtUagpsecrnwTCCGe4dh",
  "key24": "5fNkcA3mUex41VyF5L8Jtr5os1VZPyFwDFpXxUCdu3JedXL8HdX4iPsRF9gkGnwRGoycjgGZUA1vKwA79rdwWCN4",
  "key25": "5qqXUH6yGPzRbJQFZw8QsfUzBM6FLQNX3cCrDUevY87arG8JsiJ8UR13ivCK5WL9USG9ChYKcESfj6yc1FGS8RBF",
  "key26": "4djuu2HxiCq6rLZU5zPDnpWUa89cUvUE7u6YxEjMr158tWCMBKsV3LZYTeg5NTTswYBpAmCBnmPzwjNmek8GSxms",
  "key27": "3eiEL6kCfwQksC5gy8DoSoBy9kis6TJdyAuUu2F6gbR1BW5tQEyvCYhCKvz7y5CJ8wGaj6gXR68GZoH8AmUuzea8",
  "key28": "2qstzpoAyDipzMDm6idYRoV72vaLmy3HG4LnJMDz3uVpyHZxRsSVpHZydkWgLBAxN1duB9WXVSnwG1fJcq5dLshq",
  "key29": "4tMH74Gc9e6c2g9F7g4vqmpcRmPDRgMfBcQMfn6fzdZLmKqhtE74oqLLy98LLiuhRKEoYWVhjbv6N6iv53Chqjdy",
  "key30": "33z9rzDsQHia9681jnGf9458DyLmZDvLr5psz41t4MAJn1vckN6Qg8qAmeenozqEsKh4Jj38Ss5vu2bwAAZ85N8f"
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
