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
    "uZwoRVAqPnBJytJFPRqtn2kuaADvK1E1jatNoTZUMcbFWN6q2pixppRy9vrq647hermW6DHYLnMitBWijx2xsKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BoGrFmXZWbVvYfzjaFnYiWaAfxX4PwZ6CCuLcysfSTWPv9Y7BUhDGvN4CBXpxrtQr2TyaNPkJ3iCoViUSgKMk3x",
  "key1": "456Y7AsZnD6vnDjiajjJWssHK37XnVzWbzzrmZaQpezLN7xowxFVTqJew8ppoV9jb1jQBaYUNiN7TQXGyw5FwGeQ",
  "key2": "Sit9uLKbrb4hqkWwKvPGjKRDsFa1GHetJfuTsSnTLEPCRBDKv6Dx4kSNdRMz8m7uz79ybFkew33cGejgmzfxdub",
  "key3": "5VZizFNoq5y71kwqTcqmNt1nzeyRciu2VTxYpULqgw8k6kbxrve4XUvvqt6Q17o8NqrDFt3Tz79qGNGowg8hTxi5",
  "key4": "2DjUhTRqYFrCwm7nS3QqMkoKDKACC6CnyFURLXAH3ZD93Pt2sDLyga2eEyCkhxJynExMmWXixnR7uz5hiyReDQ3w",
  "key5": "zySq7FkmjcvGZCVgo2rD8NUemd634NEmwvxpVipHSXxASZehEaMuWMaoUvqoHcX7Y3wfpXK4KDikK9rLYvYXNQV",
  "key6": "7PjYTUAEaDBcWLtZrPLavULwpBhzsmQVHiMWCv6pGna1yDEGAD2aQ7DAvSDBvMKeBM3fSyByHP62Tq85NFUfNPq",
  "key7": "4K2NXyQJXVLio1SFsvZDL8sKBiJnXnhpbtHixbANfSLxPXUiFMUTAFeJ6u8YgVBr5ZTug2ybY9enPhWUYsHFX7TX",
  "key8": "2p49R7B9Xd3jtNwi5KvGqvBqBzXv5go5gfkLBJvszoV4FSoq8AnGfkWxVcVuCYEX6mCC2Yvuf4S4kPELFZmkFAQE",
  "key9": "47XStxa7Wq3LLEy33MN7MLHvdZZhFgTsQL9UcEnioi9sa4bLaEnnjuFFifCsfeBR5dJGdPuKjKX3AsspXojSzt3w",
  "key10": "izVHMwwjLr4Hm5jjUxEdf62mCzyCErCsrjs76W5PCUjQeyMhPPYKv4PTnmVBZucUeMNv4ZhhF6kn2N4envnbtQc",
  "key11": "62vbpRiYbTTPgNApPXDkcYBoVhL1dQWJ2TVp5k7XK5qdT8G9dkxtHuuKmXXFef7uN9kTrtNu9igXQiELkTckaAn4",
  "key12": "3Tdk3eDMfcqu2Y7iR9CdwpZMeaFLD2MHcS3sgYT9AUMdFCnkSwG87vjVJ6nKdKLH8ic4HeLDXgYQ72My3qzDeQKb",
  "key13": "3B4hCPDu6FjmPi7BMJCbr4SmKBCMQdvgTRXWsYPaR9cfNb1i3FDKKoQZKwMuXqoyMa6a9pTjiSniwAamjpUnWhkw",
  "key14": "4mRzXFhrGWxbgMwZhwPJxLdDBX7UTM9dqC4j2GCby8Uzcchtru6CUJUurXh8tNRoDnqTV543cN8XcEv3xVnCmuHW",
  "key15": "5cZiHP5n8s3sKF5WuNZBUVyZwL1Jvsp9TqfNjNsGGdKELEmtZGBTJ3Fo5h5qprf9GXkff8GzBjLq2GQGnboBqiRb",
  "key16": "5CBHkx9TiZhNr9o2etJobM7E26xNafDNPUXfZjkfFfRMzRqATDsr7aCZ72vrSUJ4iX15F8o2VtY1xm3BwNm4a5HY",
  "key17": "3yw3K98sF8vDZNLEhmxBnkicqzALRixdhQu2dfEvfAgebuwsydXHjR1TZzhs2aM2W7FKscMyrTNVXRoPjLPX7fE1",
  "key18": "3MiJ8zUH7mTninW9ULZfpfNqsBhjzUY9m1BmZqdXYiUJxGvZhGd3sJ9n8dDAXXsngmo4YascvjsQsZcAfhC94Cvu",
  "key19": "2YtbzykgwPEdQ7deSJHuvDKr8jUvS4zUXY8r5kFC5iVnAaZQDyNqCW3yPuM18gcR3PP4pUDqNFuy4G3Eq9rMGTRa",
  "key20": "5qr1AEromqc6WzhyJH63hLgxzcdMHTiUMaj2cYSryPYNVkLk3bGAPSK9xvyVUKUks35BogSf9yHGXSvxB7pAnr8A",
  "key21": "3gTg2XSAYfmVnJ2ZWVpakJerAobAWjx4iSqXGCXfXpL6YdMYxSdXTyntnrJQASKfQT5267AqyUvkXSAUFr2jEm43",
  "key22": "5MCFpQavfWqNNkhCsM3tZRmR71vSD1ht8jrzAoqobrxneU2HtmnJBtaPGbwL54izxmbuYixor4AG3aGvdzi1Ppe1",
  "key23": "3dyuLGWqkASqeRNVPjysfnr3tThPjWP47Db1iK8rnTfp8Rkqev5qxcNomCxUaGPrsiWoo5ePoXwgB9HvWtnH4N3f",
  "key24": "3waHgryRRUCzjoBKsB7vTkkopabaym8Juh9mwPbVBZ3VYtZzPnwavyUyX6Y5TpczSU19FspSUULqjdYcDEuYT2zT",
  "key25": "2NDeRLf3U5hMpz3x9enZnW76oFb8uJ64ifRgwStmynvHxTJYMB77Qxbbk86GZt62EYo58V12KctPkr2RvLgZnMHW",
  "key26": "46Tv8aLHqRJCCQuGzTkmFfbAJKLz6K9Xd5nQLWsrcdMbzDXEK4YRZbKKFRLAjNTGXvhA4DedoPwVUfwr3zd8NsLx",
  "key27": "FUg7iCNLruKLCw47eCvyTAtmapunp6tim6LywkWLabRVkgQdhd7Zzi2ct9bLF44yScBYMAKYcmRUkRBoVE5joTu",
  "key28": "7rRoryThtKFSkX35wY5M4GpCJEeLftbmhXV2Mz5pcWAscfV47owHDAbHSgJEcLCxSvh366W7jNX3WShXSyir7Mj",
  "key29": "5JFdNyz5H3idJtNErQv6uSFHEHjQu8PebQBRpswELvTWyeyZKAiaFvHRHxAtdVqpV1t66SQazz779aWAYxPCroRq",
  "key30": "c1VnoBBUaCLFT6HMARr6BiZvDLb4QwXkAwUQdS2gYLgZ7khTChP2yHqZLtq3aqAMSTNVqg5gtKGffRwEaDTgC2p",
  "key31": "5SDcsUQZVNFvoD82GrehuojaRjUxhHN4gBiuFTyBBLWx5S8vidCNqb4gmcd29LfhrJqKGYZ7uVyWcYARqSe2ZZgt",
  "key32": "VDxB4iRP6Bgir1aVjk9z3wU1xKRhDk3xaA9niWhh1FNQ53iZXVp4LL2mrYARkneQ8TWPa5xMTJhTA72bVhdwUcA",
  "key33": "4AkK6vTEwBqud3JXzgQezEXgdts6VJ4QA1YKCgLELayM2YuvEWchEMpAZGZmucCr7Nmr7STWJsVsXoh7xLdjrjEX",
  "key34": "5dNcoL1TsRTTN51dYeLJwScxR1XroJDu5ouEEanARLkcJv45VpCLBWdUstiFPg2Z15R7VgnsAS3xzEB5i2CsRG8m",
  "key35": "h3hB2r8HZheu4xVw34YEnyP4YRf52Q93eDqPuYNt1eK2zkAFCBxADng4rDtGutkcEfcCVfiSoiWLpccVRr4bAiJ",
  "key36": "5JNAQNeZFeSCYdWLQ5BqBEVSw7tEQ1zjUhDYx82TFRwA7TJNqzvxjNcK9rkCyMktsFMKN6ZkxninCSYqFJFXnv4U",
  "key37": "4iMrw22ywVZhkDcyNLcw9hjgqwAkqwKksneE8SvbQjBSBLobDz9ihxV5sjviDxoKWVkcdR9vgscWEjkt6XxxWJsS",
  "key38": "493ZWX5Z3KUtpYDLBGpXCYh8dEpwhL7h1fEEbe6Q1uEG1jZNbfvScZTyFaGERjacbBTinX7JJtNzq8G1V8YiLMkA",
  "key39": "4A3FxWVrQjgjbPcothWoMRLkJBocWtwH5t7JECQJfUNrHePerqhMJnpL4VFhk86PeqyXt43jcSg73nmZc47DqzAW",
  "key40": "5c5TDpsuS78hawAG9yarpfC3ohbPhGVD2ALBDP77nsBa6Fvis6GhUDdU4U86E3ZHVnQsRy9XcTdXcWmDHyponAcG",
  "key41": "58QwEucUZBQbfJYQr2pwq2tAmpx7NadNeta37PVntHfSyQ3U14JjN3e2fA6kQFqGpcHuG468nTbccLXzYe4CHfbt",
  "key42": "M9Kd4aFtjk2SynDDQaVb9g9PDk2dG4otQdtqHvQarVtZPSeKP3zHcU5iniDvzsrCYqFFezrNvRhSXzMFTYg54w6",
  "key43": "2DLbBKLvUe9g9Vkq3sUu8g7cLvLGByTn2YoShFZLU6UYVbSKm4YTLSzMuotvhKfx3BRHz64UE5yHtEi7MWNNTPkB",
  "key44": "67bH73zh9ufrsDPU296JNZw35aU14jYx3Th3JfDRtDyTNFXSa3w4PYzKyfvLmfch7PE2BNsbL3Pfy8Vhb4cymL47",
  "key45": "V5obQdNK4bRt8oXpsBW6Ueb8GdZ7F4DACypNCNUQkd2fCFKKVapEVouHwfr7ZoSkhjtdHsz34pvJnjtPEA1uCac",
  "key46": "4tJuLTXmFUbW18rQKgoBrsCkR3eMYkp6DoDyNWaknQnXuH4W3qCJ3rrrWRtDkEVefkniFr6udgkvQ9cQktKMtiMD"
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
