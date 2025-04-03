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
    "5chdwHFEvdtVc4noPLdTndTATfR8XFyHBP1hvqMs8n2ys3zKSG87T8NxgxH6jMijMochzFXmJn8xBFMtzkN5cSji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1nsERco6dhqrorK33ihfBccQuQMPugbNMRXMyQvU4RQGbq9y2Mx2RDuambEtb5ag1VgTZVUUkGE54TEdLPWXSD",
  "key1": "3JkyxDSHWeXjanK8Pmso1DyLitvzd7S6YcKXDD5HEGY4Gf6AhYdVqFqZdJFBYi9zZtvGgNVdsx4QhLFhBGGuuzS8",
  "key2": "2aUCeF5n2NrjB78SfJKxo6wcxLHNghqRwgtbEJrV4vN2yh5K3TLXvqo9sWi4RdVwP3xPfBs2ZCnmtKXQxn1rr9dm",
  "key3": "4CaXyrdFAH31RgNagbQDk9L6eKh767nW9p8o1Ndpcyt7DRjrMX9Yv638LvgDg3dFG5jdgEjzgeh73nXrpKPbzfUs",
  "key4": "5AoH92jrCUNtRusebcPcPoPVefSUqSn223VG7QsHrUtg9WAh4tiEZPxhM6qhGWXFy6UrAkcKGLFKp5H2Xm65qQwH",
  "key5": "2DPZCcoVoPrNhRFsYVwxderXh3C9bjyvjWD3EmKZASLgXFEu7Hn2XBVx82fyty8m9XM3E8m1jwKDE3kkWxgBycLH",
  "key6": "28S74BUvYdMeUhux1zd8njV1uBJ1TgbtaZ8iJUfGGd7qiM3fiEemgPueqEVAESZPFwXotUkyrzN4W3LkA83jq2iy",
  "key7": "4GZaLbBei74c9ne2Kr2quoB8daA6dtuPQm2RdzUb1r222gx7L8YjjcS5wkSgxkSgWSZCdqJwePAURqo7foqBrt11",
  "key8": "8s6ZpFgzRiSFwNc67tpTnBavLNU9cwB3SUTmrFq6yaBv5g2z5G8CBAMDbg5r79tbEX5mFdmUfru1NivF6EiCUfC",
  "key9": "2y9TWwEDrYWJXJHBn1vtNZqvFMEErMmfYceEte6ZUbndbacwKkhBkFT7xDrocLZdDkYXp9ndqzmEi5ZrnugUeGmS",
  "key10": "iFtkLNKC3RAEAbVkkpXE2fqiRNJgmeyGyZjyRCufa4gXZH97seN7TJZXtVThpnnh2TECJe77eLBLujrVQ3jtmcU",
  "key11": "2Ct77moJEyGvqNHchftubKThHfFbWPHhujEGdhpZGf6dTsnY4W8VsAZTMoVEXZCWmkU8VRsEQBnWPedoWsMaSqaB",
  "key12": "3s2qfWYEitoqxenDUYf8S8rNszQCYbygquX2EE4j2D4QvN5DbXhy4JWmXXuA7BMPviavb4w1Z2zkdtZioyAZVhpc",
  "key13": "R1EJ6jkHiNtWeLWsoEG8nTYk9v8KdWU2j7upi7tBpRw9JLn97R9oJ5xePPyVLQbVyaXA1SAwWn4bYCj2RT3hcg3",
  "key14": "5FS5nfZQy9GxRMWkf4f3qZHhkqVcSx6KN3EqMqUo2bgxsGU6Mp6gkm2NK1fM1BfJRvHGb2ACQ5kSdkRkGQCbk5Nd",
  "key15": "36JJB73LGjBKEAnXKxppwFLYzHnDqLnDS8CpVmudakML2oqCaLfqQeANU5ZWhdBd4nBrz3pR7aMyg7ySJ54UG5aA",
  "key16": "3iHFiSh3syFWYRtHaL1HwJB8RB6mowhV5qvoKEyrs6zZEZNK4qG5i1CLJu84EaqLoB95MLmncQJ8qvf2bLPUUCxe",
  "key17": "5dJLEnXUEMjhZzkCfjTgoBgWPB7brnPEERwxzr86riq4rxv87C2HEiRu9in9MJRV5YZwK72Ywjd5NASHgNK9THXA",
  "key18": "2HLH8iE87nhTxaVZ7kZAuvuvd9GW24iHqstNinqXmzJVX2KwEP9qHnMbuRdaVzskQxtAcebFxp2C2vQEJjidqFQD",
  "key19": "Dq57HiAxmMm8euqHPRWM9izEQjDnCzRL4s3jpT3yPRyUVEsnk53G9bUE7fUj66jFsr4fZa7zG23hWPtD4DP7ffQ",
  "key20": "vnX2qEodpE4mHv3o57tNduBckEPrAhbv2REfx54E9cXbYgT8yWqjUjAwNjegsYcjhrL5Q5em9oYGgSqoB3sHM7S",
  "key21": "xxCCmoPrTkP1D86PhbDR1Ra6stmr41Vod1JBbSqP7svdhL6pfcTdTak6LcvKSX6thvDhpxYLrp1tMC1mUMR6v8K",
  "key22": "5j2daRffEJRCfL2p3D7mSShhd7kJtZ2hvKM4DgBfKr3bYQtvfMWkr6nqDFNFFRs5MmJ188ojyWY1uVoQDWeChSVZ",
  "key23": "5FSjyCKKkdUWNdJ6L18R22ihw1Y7VxZS9GeHe4hBn3gbNrraDps426QDSsRUn7MWPU9zDC6KtJNZ7a7kPEU9A6n9",
  "key24": "5xE65FQQXu1z7qR1YnsymmdzxSEywqtXyN5e1a71KbSwyPURtBWBe3UHauQhhQUk3g76WEquavFrScXLmDiKgiPo",
  "key25": "2Mf1miY6iUqdbYNN8zTVNKwJqqoghWbAbbSPPQ5zzwS2MQ3XTRJbX47nV5fHCXRzuCvWS2jx4DFU3CqqVMLH1gzD",
  "key26": "2TZ7o9Fx7tKu2XtuQ3ocatYpThqsEGCznEqVsb63dRCsi8MUDd8ZhZJ6kPA3REuB5oiZ8hhynmeXZybD1PVQedWE",
  "key27": "49EH6aQ186fZ27LQSKUH7Xd9QH7AKR6JyTedSofcNhigHhuCimxcS7X48ejNjFyVer37kL1hBY7u1ScwVTHnRBem",
  "key28": "2X2TnJw17trZM5QrgV7qXjtP3yeoCKd7JfHx1TXcx9f1FisbyJZDsEubXDSUbkJELKyWb7AA4XAFATR5557dNNfy",
  "key29": "qX1fMqPBydB1fQ4LCbXnPh6TB4WckGgdvg1wNeWgkzg9pYLFyHRxNV3Ct1sWv1Kk6xkguXk51G9s96S7YxwLV8m",
  "key30": "5p322C6mSXfJth2E8FfbLP47YQ1UquzqFR7eAYkY6ozAJQvSnYEMpESMRiyzvshGhzUdCF8JBex3PepikCkHbB5z",
  "key31": "4XqCKqGwGhzk2bjB3SoAphtwCWWbewFvJVUv95xqAg34gyXVNDoRnTUSbyPdJp3b5a8Sam1eZxWMhnpMdQp1FZMx",
  "key32": "4HEZXJhLSATeadUPxjswXeXcPeQ1RKKbRaPjf9SnW52sK2oaPJHc9aiBcnvuTgAGo2vpc4SfkmMaMqTCFtwU3NyT",
  "key33": "2xRMBpwgXXsqFdtiDB1byuGThSjg4pivEz6XCFrA4sRXnuc9d82Xw1zW8ei7uTu5c5QGAwT5a6ihx2pJcVxCcQek",
  "key34": "2CKY9oWtrQ69ctWvkYVumuGZNXwwh4VNem1oNAd59A2yFrCxBHJ4P2htVcGrkbp5rPC6MAufqWqSH2Tgo67UHsoC",
  "key35": "2hZ3tMW1UhdGrugfGzLZoK4PfgniVSxZACofPXm51vK6ecFx6kH7xSomSfVE4tDeGBFa5RzeR97Zk2wmqacwK1iE",
  "key36": "39XKCEn6cuafz5WkXcANEEBrXqi3fEvvegVGshbW9z8qhvzo2av5ZeQJKhJRAnFvnFjiQCdBDHGrNuUY1H2Wfk1V",
  "key37": "YVdixuTQPovwLnAtC4qPvzMooRP3K5ngYTgrX2vLvsDNiLUFZeNZuzShAEXbnokky9CkUdVRygpmyqDcRXv3X6W",
  "key38": "22tCwrBRxcq2WGiUTL3uXJ7bixpB1hsuz6LWrFvt6qpdxc6Ju1xBeu2YMho66hWp6A7bGJg5aywnGNLSRRViFnD5",
  "key39": "3u73W5HAVpa1rajxPfsMMhKJP4D6Lfsdew1t8eBu8dybaRTrB4iSWgyUgQTP2dr687SCie8ZshjFa9sA85kytYqq",
  "key40": "4r3y8BRa3oD9nhLREz5VjSxGG28paGe8uyuy1fmrY2g7RitMpd3msu5hqUckpk3MgmfVSXran3KCqbUcYx9sw7dS",
  "key41": "4x6B8WrGnAPdcBAZL3W6Y3MC37cBk49JzK62gDWjzK3yW4qhcwqXjGPq94zKPDMuEkDCaKTGod76jDQeqG8sFMMR",
  "key42": "3gZrj4y1QUWrGqpJt1ZQepspiP16qoV5XbsYrQ3sEjvtUSw4CnJcjg8DHbkiYjmqdEGzXgSB3FRbu1boqzFV9C7m",
  "key43": "3LBZeYuws15F3RDBonTX4QhozF9MHqR8fsjU3XKg4aQZDxzEPMrU9w3gXwHvmoqh6zjtPzrzK2PSepDf9FgUcTA2",
  "key44": "41imARgMqBAdz6PaFJRG5TRfTXrjVUsKSBdTjPHwRf2XrMH6ThRnFHJiLLsF3DNdAjMH6dZqjQcbhrgEbmmUMXQR",
  "key45": "26X49ZytSDX2za9eUu3TUe7ETrUBUyfg1Ugdh9sirwMdbHFf6yB2HYaCAKY41wHovMpVTF7KpxYMkyui41v4zJb2",
  "key46": "3ScPRzwfEBCCrcJWp46jtHuT1VEjn4x6cn4LjnCbjH5jCMavXzrkmUJPb8nHLhBHsZHkA555VuG5DPi1cTLUrbjq",
  "key47": "33D9Tergj9sj5znfdCAcWkGpusLz5Qa8VwhKryHQvuQiJWt3BuvmNuKpf8rnFNRj5Kypuo4Cp3SUvSh7cUgN9zrH"
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
