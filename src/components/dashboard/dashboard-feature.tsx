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
    "3LAAT72g5NvSGLJHsnT8kCKmu7U6KbQDqDft4RDmgE4kRzRCHosoCvHZQxASg2Ebc8dK24N72btEr4duH3qJKvML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhZpUJee3iXAQ93Qb2ZsJxfToLjF8x9bryvR3DrUF2ysz2ep5SQdKh291xNSQiMH1RMU3Xq3Q3h3NzBJMgg9KEc",
  "key1": "4JUxHZBBNHmZHgapinrZ86pzyoyvJxMTYUttZpjQoSZKt6WJ7zCKPhh6cnxxJbFvXefkNc5pPK4EBcTCXM4GsvYn",
  "key2": "2eeRjmP7NPxeUx8Xy1VoxMg679qY1MgFb9FXbAvUvpUdSGGy8fa1fYZwtv7VgcoHGeFrAsZFRdkQ9zzrysinnK74",
  "key3": "japQa6pLnGXVXSxxswxPzXyo9DEd3KPsPfCuF382zaXYNDxJWqPSuKXtkukywRVAzZGAfagJcJBL1SS3T3jaQEb",
  "key4": "3wPvYVorNxeH848zitpEJohSgqRxzmCJt94uNCbcX7evvgiA9My43PLb96uJF75AGqjvk8VARbTHwSzzkmMf9nQW",
  "key5": "58Zx4feEVjqD3bSx1DGAjFDuEsRM5hHDqwe2UehKDvCk57yvWA69E1SmYvK1nrAvNi5ZcEwJxYtkbDND9dMjCRAZ",
  "key6": "5yrxddhb1txWYsjhCi9zbevZHXgzss12528EnVZaHZBDwqeRFj8Y74Rw6z5RTUBA4QfHFNRnvBsQYi9FWnFf6ALU",
  "key7": "3Sn1vCyJF1b8ZvsmnVTVT8hB3vmrLeSxDenvatw6R9LbnCJsNSjW12XioaU9nW1dKBEW3Jui5P4zuTJG1i9JxnKp",
  "key8": "3u1pDR9PuDDjwkt58sPr2j9haHiEkU6DbVFHKGYtMHJrhN4tdgiuUUDpzMK7KXCB2BQjQSotBcTSFgLHYv6prZa",
  "key9": "3tuYGkjwmhX5WiTD6X7cVpDiND4N1QiFM3sERWJ8NPiwVo7zu9r3oa5uBQTiacQEvGbBUnGfyoRPgtGUVd3GCxTx",
  "key10": "4Gw7iRhyJe9CnBDDGNpP7WD47yvX6ui15RCeHer4bdzrG8LfntfhsNsLS2zbnf5eGShxYWUpwSnrbrnwUHHym6My",
  "key11": "5YaaL7d5n9EBPUibcBr6zDMWyvnf982PJgAoyFmeuyv2cq5rUzBpUMgVY8EDB4Q759gsLjUBR7oudLE3Yamo82zp",
  "key12": "59d7pNgP7WqcyocqhZxdZrnpA1QnKwBBWyXM5TXwNu3xridDR2GiFXsRzsdLBQbrDFMMFQBMAtE6g3dL2V9Kt1Tg",
  "key13": "2QWq33C1JgedNDw34D8AN1K3rjfn4BEDMT47vYkt2NgDfZReXf7dsHQg3QfXM6k7k6SLUbgEZEiRKrid4wfDioLF",
  "key14": "ErbLcbw1B1WZaivCPB34PxyTZzj6eQhbncgYzaxZeQGTbWoMhvPcPYTwYx8xECBV7dT7rqpd5sTdNPn3zQZEAfH",
  "key15": "4nNVf4Cn39rm9fhK4tX9bRz1MQQ6yMwWAjkivvwPFC3fCo2WDBX9g4HPVKdSQZbaanhFmb2TaMcheZiwntows3JC",
  "key16": "4VRzeAymWqN1VbieamGYZkNbtzp4TKZwUv4fdfmHkXoatjNpSMv26T6WqXZepVgLdySJiUSQLEF1VwwWEiboNGgU",
  "key17": "2LXqTMDpGSoX1Bmmz1ndNG1yAQbyJsaT9qZA6azgHAuKp3kNT98mXT6RhXDaX2wyzQoeBcriq13MLKc9cnnPp3TA",
  "key18": "2LrkoouRTz8T3Nr6aeY1H7FJCkYZmQMb2o3QNgqtZ7va6PjMewMBSmqw3azYa4UhLvgT79hkcUaFVGSuEa7ED9KC",
  "key19": "3AmV9kW6Zyi8Kcnm1arGwQmpabTqFPJxy9AKdRbGr3CvdEc4vBgPZVGzd5FEtb9AScW77KBohP837uALUtQWa2fk",
  "key20": "3fGrDRh7bT8dcn8VQnbi7EmDAEz56k5Yfg8ySituefus56kbfRg1nphY7tFdfqp1sF5TzjpGBFgJndRU4aNkNEG",
  "key21": "2qbHCtiWB55D2RCNiUN7RL1BDF9rpm6BDjWmyUC71ZYxgBFV69x55tWT6YnjaERHVxVks2ChrgXnBWHVtQvL1eBF",
  "key22": "iX3b8qNpVTcxdi6WviU2U69MebNL1cZ6jBFioAP1Fna6ceyaemwKBP4QgaDLxHTzvXe1BjH2nVPjeiRXfc2wUZD",
  "key23": "5hR2xu1vcfP1WhJEPEwiydXWbRPVkiwtSEbsnwqrpY21kCqjLPtoeotv9DoQthb8rKzM5jjDtJ2KRuDWNQ1tueNL",
  "key24": "5HobGCp5yucck7yhfpi32cJ9sSXv3W6yhVJ2vmb1m2D6b444hsp6ckJaWseMkGKT5kqr9D8gQpP9bNhEpFBnRmqE",
  "key25": "5xPHR9LwghPM6xehQopp1LSjdfvD36ZqisBgeDtyeVi14z6rAzMc38hsqJLw2PG1q9KYfGV7L4HaSUmpn1D98Kx2",
  "key26": "3ZhzVLNZW4n2ZqDvaAVy42j9fzSt6DLRrpBSabSQGTApc6EUp6bAnkoLsAx6ZtjfZUtVRr4MwAR1hK1PvpU4xsvK",
  "key27": "2ray89Ld6FKVPbqVw4jaPtLo3NhpueMxQvHzB7q9R9CvcqagdsGXJt211uX1PueEjMCkjjBYLG9ybtYtMv2Qat3a",
  "key28": "5m6qzfEJV9azSowoHYfvdjeb1aJC2R2wYpWSGsiGCKDyc1QECaFQ9zSnkMNAEKoFibYBCnGoLy6m7d9L669MDsCE",
  "key29": "6TuddR6JmbGyekjCP4HGFcPUX7nXLLaLHb8fjAVfTw8WfZ8XutwL8MvZ3M5u8HjbPC6bLuqTN1DAC2rUq8uq7Qi",
  "key30": "66z7LgrstVoiqD67WZ7Hzmk39UqxW2KtawhBNiwnatQoTZYoPfUVtxx75qEFritYrP9wb1T3quJGtcq2UaXggt9L",
  "key31": "qLtEGDFvj79DybPwRWwgXmZFnGW4xXsFuGG7Ryc5USs8Z13Pw17p36A37etbW5iEUvQQo9Ecg4gDVhKp4A5yxFN",
  "key32": "27hJEyyH683N18W88Mv1NKt67YW3YNd8zKwMsdubuNFYdU9iPkvrGXkskAb5dHfDCGaJrE1oc2D5fLCAXEZdqbti",
  "key33": "5oarbmPju7jKaWu5eVpp4BJgbpdJPRKKNNw1QTsDq1o7Cto1igYKdXvuBFnbLgYa3EhADCZjNVK3dJfxpKTHaoCa",
  "key34": "4JGyhihnyWh8t5zgkQseb7LK95NqUN8CmuPsfZZEHbbKzsyYKwxm5jZhRDpGRioyophjb3YkGV6iBkKrhyK6USb6",
  "key35": "2d61bPiKpEX2tTgLetRXcJXzAZhNkG86g2bJdw5e5LwvaAfaE2N7HFwakV99EABPZSEVsC3Agm1iBSK5BLZv8rDc",
  "key36": "3E4NjXqNuhGEjUMPG9W19sh5krPsx59a7P4FXtbTxbPWZR3HVxCP6qJzFMyq23QCFNWofowAXn2N3ecMPXy1dbn7",
  "key37": "CZmAUhqP6YhJpmGrWNEkKguyJL45UrmtPBgWJTkQWykh2AVQ8kVLeH4E9VT2uKQqcGnMib3YpRRYWQaJF58Pwni"
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
