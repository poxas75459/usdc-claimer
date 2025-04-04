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
    "5quaQx8Ha5kqNHoQ8aWFwYdz8JnmygLyrj5SeZ9b6sRnD2Q9GehFgPMGqjsmNyESFMEVx9Ydhbb5QhHykN8Qtak4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEj6hsoqeRb9azHXQhbpsum3HqiCeNDrUNnPc48KP7Pk3JZBTLGcpzBpESG6nuYkuDDkgnPdDf66aDc6QQEietD",
  "key1": "4TmLpHfdvqF2X3J8D7VSxc1f9hFZW6uE1yKz2vtxSaKqpb36iswpeLt3jADbau8qzhc6WU9nxkc4Bm8UKYX3FEkf",
  "key2": "5VqaHm1JcfFw5rZSGkL1sLj9ECx9z2F9JqF1CP9LqbFKutHa5Vzrm7v2XcEAydpCV2ELQQtYtFNvyuZds2VmrzCK",
  "key3": "3er4ek7YGYvcsVLe6jDgja9pjEsSjVH1coHJzHLM86aSUF8eTpcGsF8CnXUMvdroAAjfU2eAKb9WFkESoP6so87o",
  "key4": "5oq26iCoXuU8tDCko7ECjGGTes219qC1gkfisd1GrU81JjgL6nwurkVdaJr89isLWbtf1XmiTYEEL8gy9wMCfwzb",
  "key5": "4b2bvsqGrRW6DxUwGkxgTfsxfBA59rDWzFr866Apn8T3tFuZRscWbGVLud1FGSJYCnF8skVjFW2JwC6N3P8JJJQa",
  "key6": "2fGwpu3jLbcyzUXdAbuXZQiVMoSsaQfF8hipEHYBekkNJowZ3yE3uFFHjwSfcfVTjpFuLQibEupfnRpHKLAAUh8H",
  "key7": "2cMkrveYwpJvVpPtnxhAVa2RbLUEEgxjhyduYLxwMxs9FYRJXdLWLjRF3RgxdtmbfnD3weTPfmizM6fizHaFdTpP",
  "key8": "3ypc4zKVF7EvumXwvtdNx1tWktudo17F8d6zKwJMmuNMVG6FaNQ5QjJjvLNdMSjxQ5uJ5vajBaPm8agoV3F6aqc8",
  "key9": "5T9c7zJhgJqLN67jd9daLCeyeUqBNQka73LLGeXjqiMBFL4VzFwwJQk7BzpJ5Tgq7z8SwUFxr3hY6Wz9X1uWjBgn",
  "key10": "4ZaWMY9UirpG2HmVShHghMPiuZkvhEEZrYqgzfJjycWrgcEwApQsYsqoMRkEqYPcbH7S1g9mygb1g7jFLvUW6tK6",
  "key11": "3U6ubKQDsz52mWLkR1Lu7wX5xPdxQm32SuGaupZLmt9o4QqmoSNKm5tLaL9rKwVAtGwC5bwiVPJYqgFpBJU6Ld95",
  "key12": "4ovTAxv2dTKu9isuM6xpqUAYftUx991skQQQDwVeirpG6NmrRhjojhUsr31LQHbHTXDt7CcvnvF5AkMWYXQyopj5",
  "key13": "4H2BwVK6aLf5vE9rNPVsxHRyd6NmiiHAnXRmT2kRp7Q4BBwoiZPKyowoNKEMfMB63qcZ12CANwbEQjNYwrKRyKSR",
  "key14": "Sv7j8dfendAgRUHyUgk2Kbpz2zWrGsAP3viWAgjM4B5d9vemBxXAFDEVUy6DU3RJB14UhQnYQ6KHkVXynZmXrA4",
  "key15": "x6A6mtPLB97cnrQVQ5JLvCKnr8JtY2N3wuRkN3XSoKHVx8mGF5KMUxWQULFTvDstPKPpTe6kTsfNk8ANaKpwdtj",
  "key16": "2MfL4nczKwbsbxH4JAhToCEZRy6Knmf1RZvsDbDPNSTC7JyCLn1rmRbDdMdxqfr1hDYoRh334Shj8EF9oYg5A52L",
  "key17": "3k2hWCNyJZu2jQYAQpvr9aptHnDgKVXQQ5MiSPj1DqwJVSSFtD7SML9YmRNmBFvRTRF1r2eDnX6T9T3vtCevLjZj",
  "key18": "4bPwyUkKUztUPtWGRKac5yLFp1Q5UJjatYdzxNuHTYjv95bfDMqL5dc4XuazD7NAkfrKSfup3AyvpA9UHgnLHR4D",
  "key19": "4v1HmpZFNVBz9zm5GtwXRVWxtd479s2Aj7HVrMpARCQaU1HmwpQ3KGyFqnd1sMi7MTDHuKAo9Lt2uvSiUJAmAbmM",
  "key20": "jMRX21H6gJDsfywraACVdHtDFj3wKMqTYPGtMYv2EemTMsgHCta9eDbmR9iJohNwdtZTRc7RaTrq4hDqsgLH1KK",
  "key21": "3stXbC7TBfiddjPZMiS3hgkiG47oUvYYdAwZ7dG4ayo67VJNWkTD5HTEton3tos3k29oY63zzrj9mRU1i37a5fdb",
  "key22": "4ae5HFfEPGkfJw5Gc4v2VfbzwzDyWGACs1tDUbzoMf8H7VpP8moDXQJgsi75V62FjvYLh9xtpoLVzHGZuMZAxes8",
  "key23": "2Efu3KHgXZGdS9a4N8xPjXrhjEAA9XPNBPHXpHnkkKsGGib4xxpN9gVgx4zyTMwXxNpZKHFos1wa5sCyq7RLgzP6",
  "key24": "2AzdwHUSWQM1RVgdLVgKWh6at7hEzS3bTR99HapgLWwkwxDyDd5GL64xsS4HZoo2emcpgZ1M5Y2umNm914jFJhz6",
  "key25": "5oDNGrod9P1BGSSGttCPs4kNHeybsBWSr4iK4yggTsfjRv5CvnKSNeQDytsB7brMEadLb21UcpedEd3RXgtEZiyz",
  "key26": "5pRsJbrwyAqcgTXXmmva5BnLU1JhgDYzx2VbeDBscQJG5rfyPpnryXYQjk4GQLpnQEw49Yu37hsjhvGzn6X23iCB",
  "key27": "3rbtcgdsmdcxD3SbV83nGRUv8DPzLkFXy8af2FsEBM7rRs7onzJV3NArawFkvZusXytS6PEYJDtNWg6VWT9ikcpe",
  "key28": "5WtWQCGYgMKqCaeqFQ2bhsffa5CWaocyfuSZJzAez6nGantL1CmtrLPU81NwQCePNKEJEbfe2jEX17JxfgVhgMsS",
  "key29": "4AFLazDAkSBs8aLaqPnznzUkMZ26BTuiqz9E9yzSZ5WtaYB9jMLdPd5yCuf1n2mGnWJerNU7JKhYgT18aTXC5hR9",
  "key30": "2EQ1wPDnX6q2n8VeWDNYmKo5y9UiU6UpUWmQ5kmaRqkDv7v8my3UwnJiqBNLQUX3bKn3ZDiWQ38yjtaUCuSusG6F",
  "key31": "shHGtGNb2f2aUp7ycLcvovts5zBFHRNiYjYphygnzHg312RKsvn2tza7QMm4yVv9f3RB8MXgYinMQeHsjn5X8Sv",
  "key32": "52qqjfQEjoG7dtSfLZ9pZDCNWzJ8LRsXfXir3uK2JnhWsnwL73E1TBZN5ZbBN4QJqXuHEccYavTse2KG3mQgsEzz",
  "key33": "4b7VyGanTAENJphAob1Me5W54osS9emwUxvo937dV7DXHWvEYC8bRfjj9dPB1LPmgmT5TymUZuPerVR1wEp1b2SS",
  "key34": "5GNPkLJviGfBYAHjpEKSasae5cUYQJJHsKexczvn6Vb6MHQ9ts9us3T91Tj6V5tXtKHKrRBzpar4tXyKpAGLw6tu",
  "key35": "7vZxkJdYu2yuDeHsPmJetMj9mNG6HLjyGAiATLcvUC39vyrWFGUe8LtUCDm5aygQJ48xYe2MLiJpdzE1x3hnpQV",
  "key36": "4yRskD1GGxHi8ERzV8MDiPYgomkFg1vqkAkYXs5aSUTteLCBiMgav1JTbh5LepyVxE4jjd9vJJHLyaxFPCQZfrfr",
  "key37": "43aY7hDseWYT34TTPSbuVVf71kj4M8ayUhsETXKFqQmeiDEGckahpK5ptLXEbYMJS3dH3NbEjLsRZNQhdqHnJWWT",
  "key38": "n5A1ExUbmsZTVx5G9qL4faGzXwoZAW5nbj4mkbdEt8NucQANkdcP4Ay7A6h1av3xeLRBCesBVUAFHnDkH3E8DiP",
  "key39": "4mxWJytFVmPiTnPFvrcjdyE7q63YFoUdFHQBR6YPFLtwkyhkpvB1M5MAw5TynevBNyhn7WLzBLPjkjqsvBNCf5bF",
  "key40": "2vTesFhT7dHuxy4U8TMRTP6CsYoaEenfi1qgQeNz2hx1urUtLrMKNspSLAJzRc1GJ7sYTYSRFjPVTzCcqR1WGhSD",
  "key41": "5QU7PEN2kRA1fu1tedE2ZHL4BjU3RuE2wscdvAtucXDzCTVAvhNCnGsakavdrE9iWRQG8vx45bUmbL6r4x6rsqxq"
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
