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
    "3NCaXtecefLQhXpv9Pdqs8z6eU2xxR7daT8wGFwZAg8mEssD1mRGyxXyzjC9fGfzdUBrwv3Lxi4MhZGvjHkGwHw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wntEfU7xu7Z4ZszFMoFs35oUkpADeFhEDesGmyDjjvL1BvRhotwqsUc9XkA9K7XtQLL13NMuzJNN1p5aVWW6br",
  "key1": "1pGbr81fgWvEqRvx44Mv7JyYhayLnsB2QK827nsTFQnypCtpTexteVRjs6B35pCiGFwMi4a6VpN4VpZP7KpsP97",
  "key2": "65e8trQnjmj7TNb7pD16FD46ChjCZWgR4gfYpv8hN5PUrFNiGuY3ZitdcAG2e4yUXCUsEpC6rTwKDbKNA2rVo18T",
  "key3": "376gwiuZ5ow9qCayA7gWSGeu1Sb1iqQvLEhi2hukpc15cKQpkJWjZjPRgoZcJxJ84hfoPdKxww2HbGdQJt9PsobB",
  "key4": "3zpwktHbv6KefbG91tuTcMTuJyWsDvaTNyPyhS4X3ebSohbiEyKmbLAb4AGCgBDSe21CnWsutLiAmpVVF3RtF4GP",
  "key5": "65E7FeXVFTG4Kkfc9Q7iooEk8prgLmGGagBKNjNueSZ82k71EsP2WwYLgqCvqf9D2XKuTQQF7SjGVSL4cL5JMz29",
  "key6": "2iDHxRSLKqqoZXNZWNs5LFyQy4kZNfWk7EMeMWZTwUEAkQdEEuqTvftYXUEKMD5ZE1CAeKXMejYr9y1yoVMCE5et",
  "key7": "5Kb8S3mHwi2upgYPAkJej6viPsZ1gjP8YxYp4i1SDeBHDkme6n3Sot3C6y2Deq2ThQBwNUuwkcCGJ5CqfFCaH9kL",
  "key8": "2uZU2dzyGyBPojiVUzajes48URFrHTHshKDrugXV6y3ewpZp3SggFyrXJYvdNTmr3oFXv8x4eEFygVdjqRVSG4BU",
  "key9": "S1aUDkPM3cHh4fEJsMpwW1ZDoHetTEp7ZXa2GBP3NsiCcxS7Fk5eFihctXGMK1dWw5GTPbLHmPFt453zs169KZ6",
  "key10": "42eVwiTLtoVPpLqZiibce3ERw7qMFJKMZtsSoacvL6evJV88qAr361RagHtS2V93rDdXadDqsUr7mhYSy4ozvyC5",
  "key11": "4RpLKxNDYGsxPJgpLg4vHHQaRf52rk9zr2jrCUTfAH5BC6AYbytYCUFP6SSKYiC3abw5i21DSBdzxxUPCAoU9nbq",
  "key12": "4kUuionxsXBCbjXMdruRVBo927PUcHMzRFkAbmV7AqAq6PZG7b1LCGSpnQtmvSCussiHfktJNGoRNb3YjLizVhfo",
  "key13": "34mcSn81BFdrwEiPCbCxM9DLesJZcQ3WuB7BJDovEeKmuGpPSTmihJAwZciYs2gMySpb1M7DbpkGChb5Qf3NrSt4",
  "key14": "2XKUqFrsqu4DKgjWeVVGSfTyfmXrVZWAnwwsUKpHmsvE2KLj9YuWXZy45r7DNxq8E3zqYBsM72Ayoqxn5Fi5657p",
  "key15": "3oSio7t4eZsqZ3nWVf8o3TEcoULm3mwUddgxWy1zus5UQc6qbJRSy3obdtDvkqdmwWd5pTLBtTUwmYqaHiW3HJ12",
  "key16": "3rVAvVZaomhUrQUG5yHWXYHKqNXdqXjNYB9QDP9mdK5eQSEtWPFxcyoRSrjjGpqtF5uaiRBntdpMHYMakCYEMfPA",
  "key17": "4iHnZx6tNm64wej13zLMgkfH5NpQBFaGtcyaA2sNWQ8dAV7ZH9mF1sH3Lbuk29QYzwF1omvoeSvT2zWUtcfCQpcd",
  "key18": "5nxYFmyarWU7Jzqya3rL23Zy917ADHwuhkEQvSCAbMot9wEKDUDXMrEaAySm6TMjr15muJEWd3ouGEkZf8NFRTmf",
  "key19": "3Wzs2vRuS3ZTY2y3t5fT69mRkKpGbDn5AqjF5TSxxCDkdpJHcBVVbKSdJ7MbQnK8TndGVXQJKaLDznLrxqxoqwWb",
  "key20": "4beKx4qMzVTHHBv9gp3wpp1fJnPVJHocry68fstQXF3MLayTBgML56eVox9ocRLJDFuoUc64ZB8xX2GRsQ9iSZ8M",
  "key21": "5TGySwab63YepaBX4bu5DFqSMHxcP94WrbWYQCmYr8WdJQ2zHHKsX4u6GgSg71H9iCbNvUaLFyvwAvBFv9T6GGxL",
  "key22": "5Xmr1tcJu2PoRoFuJ23ZQzybWgvuLcnQwNHphv31ZSRFH3wDfHvBWyQ3bj8e4S4ZC2soLuGLUhwNSvukmxBRemcj",
  "key23": "4QhnG2CzYeGLWBkwN4JD6wd3Qk6QMZwCXMmyZrquRzHomvAjUvx9q7Q3FPtnVfSxQo9w5ZT3K2jhZzbNaUJ5ZTc6",
  "key24": "4vh46Q9uHQy4NJp9oziozVUfJTnpVUUa9eePh6GbA2rCM8kiUp8f7PHpimBbjGLfzwK5TpjazCxPmKU9k4eYQjq8",
  "key25": "2S3tSeKSVz9J7SLKShWeLzfSEd3FTYZk6Chj6S1YRGUfXrb4MSc35Z3BXzxN2perVWg29fShsUqo68Kt57Z6HzXo",
  "key26": "5QCs1iWgCYZCdqceBXcw53ngFfvVdNDNPprUnBNGdAnbPV51TBN8KGreJLKPQf15PUtP4s2SEiAxF1N1g6Kdpjx5",
  "key27": "3haTuDuJchEXhJocrALsfSNNW5QKLKthvpCu31tzYPxVnYz34Mj84CQqEE8jCmq39YHiGWrEKTAuR21LTutfuYJS",
  "key28": "4ccr7a4pwQucFyTEfAaUrKMLdFHrtpjkezNXBWpgQkmuXXcTuYRGpX1GLSAPaEVhtTPG7UEUSLaNkTvyxnvBcw15",
  "key29": "2yyQGvSrDEcaK7oW6aqQZBhYNDFoTdNFDdUtUCs2r77Ga195dgAtEpxBwhCwEzVb4gJdrt53jjK4X4KALjPjUfAa",
  "key30": "J7tr8YLBEsSZqbZjwn9eqbqYU8C5zKr56s7HpjK9h2yfPd996nLVsbnLDqebut8GoF5YkKt8ri616BRJTbvxfGY",
  "key31": "BQ9X76CgSdmiec7Tgc2RB8ubRXNwbqVE7rXWswwZHD1VGdvpD3qpC53vBKunDXF7uKu5KgUUoXrDZzQPrd14YxS"
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
