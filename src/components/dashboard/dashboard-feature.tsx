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
    "dpQTFYYee8BKT8s3dvpHHxSoKnqEPc5qcQ93DczkzZSTwcjE6GVZYvjrWJ6xmWEtPkzyw71bEkwPGAhiCGGSurg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5tH7GCPVFwCVyn8hS9U9W7qa8sdPKPMVBXxMrLR9esgsrUVzXKV2KRLCaYa5uD8HPjqms2LkdHj8Wmp6Xg9HbG",
  "key1": "64TB1TgHEtWz6QCdvwj1iXgvRUZJ2RNMWVKwkYTktc1x95sH1Zc1xT889S7g3Kewc7XSrPjfVxTV1v3F2v77biRE",
  "key2": "5PJaVvweqMgsBe1kjthUxX4Zkjv2yX4CS7cYrWvwtMM6ux4Sc2PCm2isKcFGTL4oynP8ZaLYNSmCV1gNTUDBVvf6",
  "key3": "fXNboEEVmsGgW8yjVnBfyKnzhpakN16p2u1LmSW6ypSfjHhK7KourdpDL7qAWnHtsZg1SWbGGori8fbV1Do821g",
  "key4": "4MismQTDymkAJjGcKCNLThWj962eSFQvHFn4DQR7ScFjKY6mhtXqccN9kapVpvVsu4eWPjYG3KpaW7kyLKp4g9xB",
  "key5": "36xa1XjowPdyboa6om1NyRZ5ChasuiXyFgi5fErJfE1DCUg8m62L3Sq5CTUwMXvtHSFwLANogDQwzrNafyjfroZZ",
  "key6": "2RC6GwA1fRa7HnyeD1koCCLA32MQPi2M1wQUfmFgbtuyhpmx8jtC8X6kk3pTULr6UwexHznX7i9uyLkepoTK7K4c",
  "key7": "5MNMWtpHCvE3e7USVdJng4kZdSZufiokybW3cf2nJnRLZT6qPWvkT8swE51NMq3RxJveoFtKw6pWwZ8frnpgr4KC",
  "key8": "3vtSsCxCSuLEFGXopeuLgjMFMEK2rQbSkcmU3K4gW9K4KwSSmZzNJeN1k2wF4E1e5rhpwHnvUr1BatuQYGZw1kqD",
  "key9": "3gDotacxoypXvkkTFRsXipi2xTkRf8imE7jPPbPNPvxPM3VFhqZZ1kebNicSS67UkJKNY1f2fU9jdXG7r1i86Tog",
  "key10": "2Ur3aWQwfdnJJoxr3SDutc8sxVf4k2mYjpqZ3EqXZ3cZfgjT2oWnacC8g8gf9onuzxr4Ey7WTDD9e25dzDoThEPS",
  "key11": "43KoX3pVLDz87Gb4fDrahGwUESwMBAKF6DA4aukLakyYxiVE2nHVwYfHutJS28VveWCWcg8rKmpyFp3d8jBxZSFR",
  "key12": "5ASaJHg4zWvPzc5JZJ6Zsb3UbBkCQpmaD1iA44k2A1kRh1krfN2bmDpKFpYsUhChHjAnrJ3X3EnVXviymG56EgNz",
  "key13": "3ggghxxRWRMeVNdCCsh6QGXJNLvoEhAxCXDCop7FL1squT2SraVcZcEqJURV4TJZqGfzAgQ6qA3yzCZsqzubrZgm",
  "key14": "4iDfbABo6fQ3gW7TU8R6spSJzC38sRfGmTXdBGMz9CyJwC5oYENCu7p9QghNrDrRmhYH2JL9mxfH9vskahU5HeVU",
  "key15": "nMmKGK2hyAx4XPyvpUYZa7JYJ6LhxdZBZuS5TGaMXJwtcQZBMmQyfzWRCWJZ3ykyBw26G5LUSeGFEuhNBrV4CP7",
  "key16": "3rTFhSx1VypC8Z9kb9w17oeBwHo1CfAKMi2tBgcngXQbMe7DfkSeM3fmGe6MDUft7g4sZdoVDqeLmKehVzqz1zMp",
  "key17": "b35BsPK5NmwbGTxXzYUtjZJ2euRjdxVuXTRNm8KQVxgyejrj1QqgysKergkmuiKewSg1QQtveMeLxb2yNpQecy9",
  "key18": "4cRQq622zJmVyYBpfTEXrqEuhybb17mwu9XiKXPRYhyBdG84wLKzy85E57sLRkHGUyoStx3wCNLfsDASWBSHY6B5",
  "key19": "3rSDvjHMEB9NFsNN6gkqU66BXi6WzLncLBGAYHdSv8m83jxcDuX9H5fq47MMMpBfv5FceEG5W9G6mPQ57zsjpegy",
  "key20": "5JReusSRWotuTt7o4oMFsSZS8uX65sQj1kUZBntBw7Ux3aHcBeqzHedNBLJGgs5bHFo4fvSyDaSDdyqStR4x5oE",
  "key21": "kjhKqcpsDCGycSL5ADfqFyoLzPL8kJVYt2CAdHc9SSfgBaAEWrJtbv9LmjSRATkrF69r2SvtAWU6JXkSuDnV89V",
  "key22": "3GpoMZMe3yWijP6DaEsrb8HzYJdv1t9RjiM32C8fsJiHndvG9xE5Zp6kx9ERxsqQvGffNLpHKBG72BSfkLDZTpSx",
  "key23": "4ri46YzVeh5gvQq66sm2fhTMKHYspsjQjozqmjyBR7fHyFRsSY3x8mP8BXy35UXUz39sjLPM73VTtL2iYLyeQCqB",
  "key24": "4PMzkU35dTTzQCM9dqTPJCakDn5f7A3G56QDEtSBzSKvkV8fRpshENPnL8miCJvkiozctdgbjRekdNpn3WWiXjt7",
  "key25": "4YWfv3rYowcFtPJCtPVgMEpDqjWWt83BMpTdkA988ennD3Fp1vU6q8vFCRGSxxw3Eteqch8wFpdMmmktRziyDeAB",
  "key26": "39r42uda9zwicxRGKBUdGrfU4evdBWLQhZ5vNmmExGxdU3tot1bhj6JaELbgy1QA6FXybNLU7rN2aAm1FjNp8txV",
  "key27": "63bdGSmg2pFRWBBqPXKx22tZSppTeMjeMTrET4SJaMHir6tA9YYSHwJ8zrfi5BMdjtqr5837CcZhLHvaA9d3tS62",
  "key28": "5DCgvXzYsMLnNKctYGQ9kn4j32wUf77LMxHHzKM4NiDSC7U6K7Uo6AbL4oeKBdN5WuAR53fsUhfi656QG77t7Zq3",
  "key29": "3kurqWu3abrh8vSUD9LFy5TpTKmsH5UdHQV7w2qBPq69KEHJZFyoZCBPSGj3nzuvbvqJWTj7w5E6JF3qckPvVSAj",
  "key30": "23rPxLcZYeX4au7oai5dj7GNmbYopTGSibK8BemdYf2CWctM6WgGKZDTCCoqcpAyau5LS82cx3FgSqoD5bYHxc9u",
  "key31": "T7sv4kkTw1sZhtjuD9is4zRdgC5ZQnAHufNkCNyQPYxC5UiP9PevJu9teVMTj9r49MnRxePDzAKF7LLQosLQ1BH",
  "key32": "4Zv53KiKWwCXc9izEBytcPbrNVEvYQ3U1WnBbaqeRBE7qSfUPYbaFCSwHtk1PE1paDg1W1bYdPkmqbR3dgFCvt7H",
  "key33": "vB1kf7upmJGWHV3k3KjM3ECZYe2dfTVJHXK3rLuVE47zZE934uzx6iBgyW3uEzCM2XyLcUanw3ZXQegN6nN7VJX",
  "key34": "AwjoEVFyrUNUhyoN1kb8Euke5gAv86bwhLDKWiu6ULvij3E1NLj4ewpmtNHmV3Amy4f9E4BK1wKAoCs6aVbvVvR",
  "key35": "4kKSyuZKimpuWWVwCbDa7h35RSW2UELK9hMkW52jegjLdt9Gwmu1RPu9E9Tq7ra6NhEEpYqkrweNQDQ4LbXdh2od",
  "key36": "N26Tmv2aDZrxMgUJweqUxX6cGqKdbgVqF9FqVp2HPfnkPWt9W8rBMGXamQf5fSN7HshatuLf1BD6stE9tnKR7qR",
  "key37": "GJrW5oEzR6a5zRBUKpxBfw15QL83jUXqpeUTXUEAztFy7WcqK7kzJ9oXQPDmn99voE27XQzWFmr3X3qkvMw18Wv",
  "key38": "61DA14Dt7JMJGFLKgEShViUH1L5jgorjSUqTZdHsK38w4uSMpWtF7RhWs9JN4CSvdDsepDEb5cVWPPsEFFBNEnRA",
  "key39": "2RLhWQxDHxEZe7Tymu3jC74jj6FnouWuEmkBNJWff8jUPF3agaCMw4F6NHpR6X9Hfsqpot7CZDfA4F4jvygJvQ3t",
  "key40": "rsHDzNhbXZpH78B1kBMyeVwgTVsdfEQyg4Tsxi5v7tGkWYfCYXvJUg1fdrFHThgpPRDGpdhsNhZqjWTLqCQ42Cx",
  "key41": "5tWTcgaBaiXMn1sQgbmsKznymhtK2MksuURxkyvD7tq2CAjR7qcfcRatCQB3wyuDwjnWHVX9dfPiTwiQ4R67VGKq",
  "key42": "3RbNj5fq6XR7VV3Jt66FpLSyRJA8F6PQ67pZQnWsbc4gwnbzEWSgDQJ54WLuMsnooqAbE3Ga1BxabTsy27nwbgok",
  "key43": "WZ6kbF743S5yaGA8GYoyiuX6dH6PHDo8TLpwnH3JqkeJpij3qc8qep12z7c7rwU5V8BxxNTGYMc2uBhveudV7VW",
  "key44": "5WrN37sCdCSwv3rh9kj9KeBYDcepxH4gpk2MpgPZ2y8FSuZ33z3NMuKfqEwt5cKdPoJhZuvnbgdkbY6UA7kCgLEe"
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
