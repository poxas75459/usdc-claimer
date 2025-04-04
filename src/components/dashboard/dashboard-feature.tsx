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
    "4ZLZ5GiDYQoqwrzf7sCwM5JowD8G2q7eJvrh6cd4NM2WYXBpDVajgCLmY2efWiaDXTruLBk8gCDtmmz18GehdcQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UgWwpSHfHkBG3ZNi99k5DkMEyMEBRX5WQeGJQd5QLFjK6g3PG2ogQXfmSu8iEUortybXLCpxnG4Urp1W2J8DUZ7",
  "key1": "7uYAdtygwYssxLRxayxJhgTXgJuMcYfHiGHNhX4wB5yAXGv6YT54cjDTtwSPG9PjYG6xTKHEhL9aJbt98i44oQL",
  "key2": "h1sAFVJdhBnpBcsfrAXxRJ53nFyAqMADRG6PkNgWS2Z3wn3PexiEYsq8X4zqP2QhEP7zoU5S89UA9syxsxJSCv9",
  "key3": "68hzTWERRUZriMPyCxpdEfsD3d9cVwnfTChdbk9LsFfFCXfBM61vnm26qZgxMTAGczJx6SNh9fhTqsNiagPf5M8",
  "key4": "icTzMVM7UXuRqG8amVfoqSvkmCTDxvYb9bLDzfa3NuzzMNc8vH2eaYiCrYUrHVuycY3sob2uXFTJLf77GtJHJwQ",
  "key5": "3jS4q8DSFreFRFtL8X7bmxNu4ZVSE9XjPh8eiCnaFbG1uvyESKM1CBWADMw8DA1wdv2ykshX2xR7daYRcp4p2Py6",
  "key6": "39VqDAH5UPk83Rgpz12LFjNvvVarBBrTCTEPV9mZXxqMxtGpEC1DuMvy4c3yQ8pWiVrPBFiDEAh6WjWS728sMTh",
  "key7": "LFgDsb2PCL72WWa4ECcD1HSZnQi761AkQ4gYtZsYQzTHwFKF54fT8WRRiqupYPZNdBKtBKbDFkizzNkMnN9TqMv",
  "key8": "EkXVKcERAjRX94WCg1cZHRbFV4TyZawG48hmxe8hQx8q5pAx4ZJxWFm6LQbRFurpZYZkHyFhFCWdYtd1uEjP5UR",
  "key9": "2dpDFgpLWkQ2JadkghGwBbXtHTczgTj7SGMtGPaZwJUJDjEAjKJ11xU8UncjtmAbvnGgrwJYcPrPb7Ljq7vMzczR",
  "key10": "5VfLD8Wck9ftGLdaGgjmJ5aQcmEq6gBCaNj4byF3ocXE1kJtmgQ6yLPeKKgiFbG7FTXxAr9LX9ApXGe9hjBw2K3S",
  "key11": "43LSR5rZLPEabcCgPFimGvK7mS2pvWmm1aw5eBsirHi8ZSh1W14198fnM443YPYykpDwFwRVUziQrt3pebGN4w5j",
  "key12": "4PsSv4Bx1uPXdgFi3KDuk79kCDazpNEUXDHoX8YTDvGwGAoybbxuf1Fv7w4dJW1ozmByyNyyePC74dFewLFfTrar",
  "key13": "2zNV7r11NN1cH6VoDGJNHe2SQXPAKntYM4WW2TWf9RcZmnjiNhdWXqePkh5oQkmPmnrP8s9bqtz1MCkqLm8MGFS8",
  "key14": "5FCKHPe6VDoAWin8TkUkzqqdTd4V3mkK2eaZ8tAf9jbbvGSGs44TgMRpqUsfh3nKaJTFgUBSZaHM4fDrPL668VWE",
  "key15": "wRTHCkA53fpXsKfDhJSRG6ykfQYkVLaVG8g3ZSPH2nv3JhAhULuXwPdFKychswC5ywzhLDNmxNwyAVGjavkiQ6H",
  "key16": "asu6S9efXpqFEVfQJLRMuaEpBW9CUHh3ss6KFiWA7zekUnEJjjSmd38biVdKMDozYcJFEbsU73LYiW17W8B9UZm",
  "key17": "5rHGHVn5zfZRUw6yM5fgKFLBLa1fbAZZuSNXnm9qnBiZNtMKvJJrgHACPmYMbD78PL8yRfMq1HEi3voC5cfYqzer",
  "key18": "55hLMgnNBJqEqos6QTEeHUUexL5SxNw33173TUkSYtjhdR6UyqKRdNMsXFKXttBxU4RUPyXmvks64CSL3s5P7qqU",
  "key19": "53NPZZanRETT46yy2wQR7NQbgS29X5ZFBzBfDu8J3rFvE1PnrrM4ddkJffNWCMo4TttonXtq5Y6rA418GRvXQSKC",
  "key20": "2nncVhPYy6evhBjgkZBvvDrTePmrFTXJXAyz8xj2tYSo2QYZdAZCHmiRroPij7KuALYJHXBXvUytHg7ZWGsMqm4f",
  "key21": "dUFNFKK4rzS7ozZt1chPYtvq6V6BrNeQgeyMj2hPd7VUwbAvqF87BUG1RtvRyJJGLdRy68Q1wv1orEQHCHfpb86",
  "key22": "42UTH2GfLYZqaHrqyzZspgViWtPeAHZqV95rBL3iPyZJtYY9n6XYENEjNsEK12zaJDid1hRg93b4t2RMqGfWGcu6",
  "key23": "4h3MdgoPX7DC5FcRRXT2bxm9v2BA9RXngwmY1yPMsUDfvVrwG8Prg84ALS1p3pJSrcr3mqACqCBQax2iXdiXo9XG",
  "key24": "2vmgd7fvtaeq7uk8Rki453PQ9XF7gaC27wqQSe2CXGAxUYcQ5GKhabyBexSnjamB5zYYQg72cCFBgXcHceG3zw9o",
  "key25": "2YttmUBq4jqRSRdgvV3PE6ECNoyY88ekdtABsuJ1xHXkBceuHBhCsnZ7aEDeSkfnPhCgeLUwAZxJWmiToq2KLhso",
  "key26": "CbszowUJwvMSgzW7qk18vfS2ARNrRow6zSUbWuDZ68zNXyzCkWUShsET6P1SvRXsSQcgyJKTjtNrqE8vjzf72Wk",
  "key27": "3AZ7HUQFHpm7S3U1YPfYdeNuN2nxNkQ6pWSc8EbFggYTpHEZTeAUXuXmt9hS8ZGdPgtF2vyPQJYvE2jfxYFE7azs",
  "key28": "Nk15nu3fmvsK7sA6M395NZ2HNQuAXtuFSSgB2red2RWDc1HLfPqWv6iyWks7YqqtTW9cm8Hb1JLmecTDwKq4vSJ",
  "key29": "459YsuYhJLEkKq2Shgq5nxwLy3xHnQBJgrj3hK3GhjXEaLmFxnuozhuh8CQwvbgPTKnJqFT9mtakdD1BUcmTw4U4",
  "key30": "3j4jmcsYnYv4BHoGE5EmHH6VSP2kmpfpySsJGyFx1KALzBtf1Yinmjfc5UWVmTURwFYXvBjPdBNuzbZrJAA9xQMw",
  "key31": "iSeWmvJ9nRWkehCekBHEL7dmT61BCyR49PstP2MDsHgnPCAr3FGm1fqAKQWeSLXvhrPPTznL5v7THpQk82o4YPt",
  "key32": "3PecPpofeYrmtFmrZQhbZMzT6v2LBksBcYQP5kFWkmFo7NwC41jQoB891RUkeRtu2UPBJF2fvSkH42sygooa9ZSP",
  "key33": "4ApKgoZLHK16FRbaDTh3N5hhP5q2M7tnsnAn8B4aznUGdsaAz48gTBJnwMrQ4jZowbhoS8PsrPyNCktXwMDyvQoZ",
  "key34": "tmw9NQu2wqDCjqw8wjCPejcYkYMLJpR7BcJWszqAXR2qNmeaSbjWyGwyPoZ6Q62W49sB25bUGW541Kt5paxbLFX",
  "key35": "AJhrDha6ngEYmr4x2JCYFXDVXvaygBjPxe6NYyNxbQ9yFhopfWG4s6oBbLzWYkSQDXgm9QqcDK4rEDwVb4JZMTQ",
  "key36": "7WVY1pX4S3Nw56RcRAECtsoCb3LvkFPTtPurSn3M7ntbFK1ZJMeojaNLYHPJCw52XiC4Xis5amSwtwrDoHs3Emw"
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
