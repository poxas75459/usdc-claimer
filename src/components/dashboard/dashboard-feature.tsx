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
    "3NtCMtTdxfwK1srexMZi8y6gvDSmN9Q6FX94V2BTQVBoWe7rKQjvtXS4RpvN2u8PQi7sufQ6Xhq76DVJcW81D8PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdsEtQsaHKKUNcyYYoJVBPgdRduQR2NMWVPV8mVkGcSDWes4fnXo2v6J9hCz64ATxAGX2cGHSSZQQXbrpQwtuuC",
  "key1": "29TxJiCtju4zmyfqK39wAEu99q4uUMFqhMDcHtZKCcDR1CCfhuXBZtYAzW9y1Zzh5nxzPjGceMWqJWELmzMherxB",
  "key2": "5nh5qfRqXuEf5sfHW8jFU3AiNqSvPNMgjLZEdBh2GPdsygM1pQr6dv21aWddVMk6mfqK5XoyfvPGo8jSY35mTq3V",
  "key3": "5Mro9V38f8LqwN4njnS3njPSpEs6UFyy82TABoHPtNqdvrutqzFXZNF3yV41vWvph8PzUjtzhYbswbo8sawPTVbS",
  "key4": "sNWapC6MZz25kQL95zwABE9k52fNV86GcGbreD4y3MoCwhBETDvCPKkcrDKEK6yV2m1Sundzip3DpZ9cDszAbHV",
  "key5": "3ovDush9vAQYUr3MLDtioXq5L3ZDSLS1xzzPefdXoTUYw7Tz15ffgukZeRagXKJxcNyf6zBtAWgKVfPnZW3Ueu3y",
  "key6": "4oyVKEoMAzR7chYnTuykNFCFJ6hub7Nkg57mbcL9pmgmVRn6vc2BEJ4SmfuFszEvK3hFo6aEMfbhnjGQS24NrGeH",
  "key7": "4KJ7kZ4z3xWVbU5McxDEh9bXD4NCmx7ctZKyNK88S1pDz8Q7r2hDM5YaTKByJbBZ4VkHrX8PUjVDCqa5tk8cuXZU",
  "key8": "28MZnzTHbawUMsjdQxHKGgxXu27XV6hFoA6rCcnhJMrpBdSwbz41XZ2Cq7odJyZt5Fq23E9Jauxy7o4oAY83kapw",
  "key9": "4ypZUvYJiuZfKZDo3gT8VWbMKJF48dUjEnDtmmdEZQTey2ZzJ8kEyfiVEkyuNvpwJNyv1KdSN1tzEomHYrL23os7",
  "key10": "4GfwkJLznPZEDpFKWi5kvBCjJshkXf5E7FRuyC4Rkva4B72vsmkxGSt7RX5dHA1rRNA2ie7g4DB2habRwaAiMVKA",
  "key11": "e1R1bTMsSkimHCTWn3gtgKKgnyvtiY5dGxb5vqq3YhEp4PckNtLWZabqVfnmAAQyLxep53NYf8sdXurWW5itoBi",
  "key12": "4MXgzadjq4x36AqUfbBQSh5ZormLwgQKoCX1AXZoy4xwZbfG1WmibvC9pr5VbkueC68mXFdLC7n3U53QzvmzXgia",
  "key13": "4KLst6yi8nVAPD55nxuFoN1u2YLT54PWm3kffVNbtrXpLj69AH21iuczov4X1ojxpehjvYcEHfhXaTmCdZdSa18k",
  "key14": "51LaYdQSRvWNT6z3WepvCX1dFUiANUHgnxsLHqeL1jh17b8ibHDtY8e3W2xDUPXMKBn4DDVrMcmV1UnsbJjKxPmg",
  "key15": "2eajjwP33kFBDXjTygKZRQKT6BSn7JDfycWKoVUEge4f8ZbDSVK2bwDzQieJAawniHBh6Af4GewmsrT6vj2gGkun",
  "key16": "5M81JmrWjHQbFmJt9YNBuaYdad5abewcC6S5LzdP2biAUxXAiUiTRDWm9XusYFiTCgdE3H97ENhmgLzC1W1uPc2K",
  "key17": "3pZxrVVe3vEcLrYRWd7QwGBLq8qd3a73JRFfGNpqMru9ah6uQewT7HACQEufu4oAkQXzJXHQvxtjoxLa8b1TtvVR",
  "key18": "E5gtgPnLsRrQXRr6BttCxgdgbBozfReu1JKmbUN2DemUG83HC3vnxYmVobdk5SuTemztMeH5rayNX48kvyqUc4t",
  "key19": "4TmZuRqAJ5b4h5ffXpDHCJk1fVUp82urJwdA1BzNrR7r2bVsNCruRLfrp1Qx618gmoBhDBWG8Jj2863Dn8xh3kKS",
  "key20": "4nR55oLdpsnQeDVyB9Dyd8FFVTqgbSpHTyJ42SQDf4pwR3Mpn1xUDWDeZaTJ8SDMjRkZeN1Gbz8gcmfaMe8NUebV",
  "key21": "3VJcVMRdXpBYmrMzpMKhaYHBJsGpyPu1VwHwrNmnYD6yWsxV5wuBjw7c8KwzxJR65TA12jf2xAnLCKdCtL5JA5hE",
  "key22": "3TPFL3vKoGPgMqKHLX1aBGWwoy1EEJgzTXHFur34tUnTjzkkRpeSCgfFTPABBswDDi1dsHJe34zHyRM1cwUWLboc",
  "key23": "fqukr5MbPY4x1tKqbfvXSq23VxUQ3m1Mm7ugD2zwMfXJ3rHYR7BTJwReS4rR9hRsEjaCFkTZBnvbtRD1QrQuBaK",
  "key24": "2uixGxJNkaNvy9CbDwkkc3RwjmdYwbvSDQmeR6kGfcck3pgVC8CgqdGFk7bmLjVjsqJHcRg1fiHKNEhqNuSg8my9",
  "key25": "5T63ZXgQggfUTzWe7V71uZtvAh63U1sFEE8ziWFCLx9C8pYWj6fkwmpbikmngUke3M8ePXthL9Q9u9RMoBiXxibR",
  "key26": "56RfisqsKP4NCvkojB9yKFCdGrN598bkM9iMPNABEC6Soek2Ae92BAo31NhDHKybVJiq3hS2iVzBw5z4NgLJDRU9",
  "key27": "3gtauy5YwKcoAJ1rr5g9FSziXxsL5P98ZLxmFEej9yzWry1fBzooxyY6oe7kR2aSY9f1eHEqwEFrNYVhqngC3YSa",
  "key28": "4fdBeibvcJJntwNvMqNWivqYKC1kD7Vn9kghD5T7Mb8wYn5uxHjiYM6EqFLm1dyfMMJKEV3o11iHCc6avDiKERTh",
  "key29": "3nQELMjGHeRdp378qsVVnq8EPg2ZLGo3unQ4APG4cBUUcfveDEZvYh8tiLkmzyKnLMrHGYqnArnJv5zmT3ngSYB",
  "key30": "3E3VSLk8kHZmumrgZd2AzcL9ewKqkZM21PsN56JtRgN9vwigKC5DojTDE9Zx5u7atSv3nTDEKazedyuQMNUgefJb",
  "key31": "4b4qvvB54UQ84Ljz9RWBEa3eQ6U3pBbDAEDmsPwjNZmHQykqYEW3Tm8BTE1Motq3Keb1yrLf1WLRPEGE3UFR5gzf",
  "key32": "4sbmfHku25bCpKXLF5gbMcoZU4esYQYSjC3RHcW9agdbZzFDtUhGSUk1Rqa8Q2hGXipjT8EGTuHt8DJRx3PA4RX6",
  "key33": "3FZFN95PLE1C64swunRgA3kbSM88t8YVbhbgmRc2HRrtkMd1ois5RqtZtBKegXvL2Mj8u62sTq6jbsHKyJBMzUUW",
  "key34": "5t991TmqqhJLQ1WZjxxfumpkZVUBKijKcp881onuPUUmgkD7RQPcdTE2NZp32riifM2TaCXA4Kxtx2XFkRHQaWGz",
  "key35": "5HJdbMKsdbE376rSsKqrpL6796ZQN73iDs9umkks7rXX8eaavkS3G79ZEbJkksSPqvnwLgDCo6h9T7saw26F7ErT",
  "key36": "2Y6Xbc5xteY73xsQ6xodpgJhfvuAcmoeXzoLExhcyFVN4ThDNmB1V9XpWRcC9F3fQeUhKRn6i8MecygniySRMnyC",
  "key37": "xwKtWe41PxebmH4noZgAnXUScArBRixiakrH3z45u2basew5XbzQCy8dAxKNprRRid4hAVstDnvqG51GcMYDaSi",
  "key38": "2nSKJfkMLmsJ37peRJqJjAaQri7BWFjhuzZL24W3LmdnpH2esu6q2q5y6V2QS9MmLjz9ZS4QvbDUUN7Q9CvRabQD",
  "key39": "3DpSfLojPK5FyHiKkxXw6tVZmMruWDshnCeEzPxsqFZT56nTyq74yY9khmRL16yFPkxsvydeXKcPVo4dk4yceFv1",
  "key40": "3uNY4ehoAzZizHPGi2VPWThzxDtzV4F4DAUXnDscLo8cUiHMKeaRVraTo5JnhwiB9rGme5ycrnmhGx4Je5K39nuA",
  "key41": "4GRPmGGrFkcAXe5JLW8bWtn7jmoedk9kikUoWKKcKNoMHSiqt7695qD2FkXNfraiVM4zjjY6GamBMbhfN57L8iCF",
  "key42": "2TrLEjPeBhDfAV2n6jaeeY2eExHHoZWHutY1tM2qkh8QG94e7YGRURabsm7YhpPoYrHz7BqfLWjDmgESRfor6yAQ",
  "key43": "4oqpPYL1ek7nGhrR9FSKw9UcjnMmGgm4jM7E4jVNLw3EQCPqsySTFewvVo8ooBU1rZRkhADnJRAeV4MJapvXb2H5",
  "key44": "2CDS7Deff744ZmAfY8HN3wrNNkyg8NPvD6wEK4jque9YRqYxv8vUkK3s5e6EepYsj9aDJzrq8GMNFodVRiyw4JGK",
  "key45": "3WAfDv7cDrkDSZAWzk7gsYKqDwn8E8utrU4taqkoB23RhTU1qmVLADCvtMPfvAK6ayD7TzTTpom4asCDbyPy27ep",
  "key46": "4BBoyYLmXXh3cmogRa9hFQw1hrTEFKTcwKKpdGPNiSxm5FF3LDQoFFBzA58Pha6NGrV1UPFooQZiqW9fph7Lnc9S"
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
