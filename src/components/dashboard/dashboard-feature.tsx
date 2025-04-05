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
    "4GfJ2XagSQeMfjeF6frnyfqRQRTYBrXo6mkC6si3pXJTXomf3uVTKr28igsKeGqSaVetvdkRnTSKjaRCiDTok6uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSH65fQG1LMVaicC2CH47dHcpQ22u74t5BwKyEKB3n6B5uw1Xm4eLnZ11cba4Wf2m7J7aZbia3xnQRxqCR1ES7V",
  "key1": "4TxehMaQ6N9o3tKvC13oxYuGAgSPzMhDz9JbAoMz8Gq7CEPBzV6X2498Rw6RN9FEs4LrK2MHBvmgbnSqWPQXVXKN",
  "key2": "2y3eJuEgH55SitQK7TXce3XgvRFkExJScX6HvPeGAvbhZmGhcwSpnyGjqiuqWd7XhFZ8rcxq8aPtsDtyS6AS9d6t",
  "key3": "5bjYCYg1tyCB5QSaghWpyv9smM79FqfUo6BbY98yMh4Uhkvw8xVn7VVNjWDFZehYKat5XWHGQPPw54t8ts2dmdqu",
  "key4": "2snkjNubqcqna4kZnv2gUd9yioQroJEswUnv3Vyt9buQJCaf7MDjmkfLLMSxoHt2sgzSRULdBAjQAKiJCFAPCuBf",
  "key5": "5LQVZQ32q34Sp9M2osuor6AF79GENEPgybpRWoiYgEsf9ca6mNN4a3ez5VECZEbAah26MqqcyTanSvuQjYpxobCg",
  "key6": "2Zu5AvtsoAh17dgPZYN8cznyNhtxM9D3SrXzhFhrNnnsozMU9SQJeStKsVceiFXrzzLLuPBU4EQefSqMJa8t8rQq",
  "key7": "4z17Pbiuh6so9LQL6L3uGfeJvjzGXV6FDbYkSSFo9phkboDQ2oBAyot8XQER5cm5Z7Sc9XV5EkhVbduD2obeMxed",
  "key8": "36yaUWUtZ6HshQbz6bRQfWMc6Z9WH72gCq8oHNU94NKu7tmpnngAzBiAwvzTsyoKWvjDBNfQwpgt1WnGYrVVz9xY",
  "key9": "2BQWaYDfXTj5Th8i9AvhUHKtaoEoR3ggyySfvQSd67ngd9WNpdAuDydETBnaGqXZGZRWU2xP24U2XoLQhqkwC6kT",
  "key10": "2hop2MxA4dsJVjprcZq1npqNnfma5XU1bNiC8QvWWwXHgCj86eT46SMUtUUiNzFruLYmwgB89tJhHszpJAA3ygMU",
  "key11": "283VvweRao93RXoVRPmszezyprDLWRyTNM1gFVU9ahY4pdSffgvZd5KXTVGWHxeQJduesay8BxtTkZzzSBnC6t52",
  "key12": "4C6qEtSSbhCgGJak6TRJAGPgS5uQhvSyEaEHj7WhS9yMZtCv69GztncgNLo4p3cjf3jVZ9ZAyVruNjr2YawWR5jy",
  "key13": "4F77Xv5UzMykFMdr2WmsnH9i4uKqd7D3fsuqEVXcABuotcGGTBPmQuW6JfBwPiUVYH45N5T2UxohhYEYRifosF8F",
  "key14": "f1mTJpQtkR6qjDcAgWV3b4s1J5ft9zPA6xvQocR3qGtR5oPb3Fe17ucvzPBcrqP8diHitW9weVhPC4wL8w75eH8",
  "key15": "4NuKopbxWLJbmXhPVkGg2pXgduJFc8EPqZj57n8q1zL1S5uHCSXtWx4GepjvsGKQAM8TzY1LiueNqxFvtLHfHSwD",
  "key16": "5ZnKJKy2VsrQTeYva4MsjSNTjb6RBaMBd8GCGRJvFRFPvq1iNKsLcDe8S3tMetGuwRYX21AYp3P1KPA4PtPRLFo5",
  "key17": "kFDAULTCcWYXdcvineYhQSXzu7umwz5JaaCwHAsNpJBkmy4N6nsFStLQhMQ3AderGXnmDvi7MTock7aa5zacGeu",
  "key18": "33K3hqdY8ZkVrGCDP4mB68BZLGpn5mo4PaHYRvgHJiwczPA2xdvTff9eJCY6rSmHsZgA6vYM1nvU5rLBJ7uPNgCe",
  "key19": "5QoMHjHA8pXv2xkGbc79gRhnmUu2q8CUWDPymDYFvDL7Vc6KatWiVxuZdhpGjCCRVNWoo5ytpoFen65LGfpgicyL",
  "key20": "5PH5NwJamEX7nFXMdtS5yA4UQVVCxEcDdDFxt6DhGaWxRh9SoKnD8qXbu1uMnD9t1rBWvCKRSgVTgukS13roDkqn",
  "key21": "5Nuf9svRipWCw69Vx61R1wUyjKrE9Nbx5sTQrBpKSnVjAJ9CiL7pzaeefyyXNQw8AG8vX3QgsFrSTFrymfAMMthb",
  "key22": "5rXD1yKXwGyHfWxUktnr8mBamEv8D5zJx432a6GVV5ezFUeQnohWsCihR2BHrPCfrxPnGTNDGuaZEX6dKaAVdymv",
  "key23": "3Lpyy1Qm2p6ghHdPeDNjAJnRGEDbePmnjV9ZYdJXCDzqx9MNga7oPnMeX623nqHZSHBZuiEir7Z2WV7sn9mSSVCo",
  "key24": "3Z67xib85EUsyKrTnndwFUHQwqUki6D52X3zaRzEGfab6ViESJrPLXj39CsRBwTWx7DRdeUFYu61ij6sKXpqMQ5Q",
  "key25": "3K7Vip8aaF4idQkDXP1KX6VTo637tjmbfRGk99koENTz5knW3kcQWKig26MLSywBQJY2L9Let8ib8T373qmWcBmT",
  "key26": "3JCCELGAJTHfUvxmyvUgyEYNv2J6AxUMabArERYXKoR8XxUFQxmMqcqSqz9ydSgfAqfcoV8JNmVFRDLwR3dvGgPo",
  "key27": "3whEfWWqDCTdonVLfRkAx82kuGvCFbLSmuMaq3EKpiScmN1qtcA7PtNAW4ynKPLjDJTZa8oqkPV3UscK8jYK9iNz",
  "key28": "4e4jkB4Vc6NU8KXHeDXX9KMcbbqXqXFyAuWgrQ3b4sTdT2fzuNe1CWNH5mNCDXxzzjxpDDZM83zDhk1bMfxe5HPy",
  "key29": "38vf7FMs6nbL7hyan6pn7rkkwpMGw7FQvsWK8m9wD1eeULYmSNeFPkgUkCrtpNvkjxshKWgujN9qNr9GaWEZrLEV",
  "key30": "3HHFRoTDyrUM2E9AXcYe9CqkyjEdPEHandQFimBvY7RRaTdj28JGvTszKJbjUCXEJUmyVrkJhqMxsiCmzih2jykv",
  "key31": "4HWcyhsA7nnGGbJh7keMD4zcae6WDcW58p2dcoKD9WS3nQKREGsSKGjbqPFutMhoPfKka5QQJPjUyPvULqapbcZn",
  "key32": "5oNUsLTHarewSRxvnFE2LPpk4YovTUvBKb4pnfubgMmNUUiy4tnT3SHJp2hoVGqf5JUkcFLUF7P72RX2xYte3ArC",
  "key33": "5Hh3KhZoHZYSnR6peKqDdXXiibhUgLWq3X4AS2gU1jXin5ccVzA24rHbLDcFmdibnqiSUAQ2wiGx8mErDNg68gyw",
  "key34": "h5e8jrysHDoqf7CsJBrkzkRCwEikRfPaPpoRSSSaECfijzN5yBVtu8AgjhkseSj2A47pKoz3sUg8xA3eNk8C3kY",
  "key35": "4juFqJVpY87EC1Jm1zLEjnv1cYdedNbxCBYH9YpiMwR9rPMwhomR3mQefiPKzgsXPV9iRySVqD9m2XkbqdrxXwGk",
  "key36": "2eQwSWjbSmDzrjoubSV9xWYn2EmEiiNQPrisYPrb2kkgQbngJGeSyhCBnMEqL9R7Mbenpozs3kxvDwU1Cu2gqDf6",
  "key37": "2cpiNmgnk197fLY6b9aB2QzVa1Jx7kAaoXj7cLCrspTbygHjzi1YSA4LU5BtCfPb6QdWApv7oNE48abAC5jDLgUY",
  "key38": "Di9nfPfjLrx7v3754HGf9Q5Wq57QQnSJiqUwZJpCj4kZxKnabbDY66ucMZA3iyCWnC1KfuEFeepRCMg6geKwAhs",
  "key39": "5nsk3c2NSQqRUvMXMrrsDiTAaZ7uNZ3XKTsEd8KsDsV6NPuGJ3Q6pzhLBC1KRtM2MoMFd1qp9kHhQXZnFduGjyjp",
  "key40": "4Q88a7U8TcN2py5bYGk2W6cJdQ4k4fmXFBBut4tvsxVgZ5g3igC4J4kWAT88iSanU8i686KvWNwCKTGpvA8tEQLr",
  "key41": "43QWqzCXp5izAbi6qGWFsnrRNjNHkgahbx6yKyE5vae4YHdagJvwFzJDNvfsAhtAxtpNYV9QZ2qp2XpmxP1b2C4K",
  "key42": "57NtDkDoYXggRTzfrtpgeBtMumod6crrxqqSCuyqTVPUp2imLXcyS8zRo4fZewUQG7mHx9FM9b4M8DzvfuQTSiD7",
  "key43": "4tEpU2NX9hMFBibpwUPu7MZhY6aRSbunw7q4ni4pBLk5MgPy86R6u5efVKHAyKnDeceb4myppv1Gaw2moE7jPfPB",
  "key44": "264i3uEu2ViUyjU9AesMN4rc9BY7wc2f8EvBy9qsvhQdoAuvWXSn79778TLEsZ9kWbzy8d3SmeVMXNKVqupAHzhm",
  "key45": "5PEun5uoxoNG2uTQVdEhVuSPyyaYveAwaVjc5o8PjA6U9jHmPjerB1mgjLQpU3CKYdizWX8L2JX8wWTCaV8UTjJW",
  "key46": "2VR9x5uUtfdicjRgo6wnkdkapXvq2TFXGwvQjntgMhSteJ5X3jnMtrcSCzWr67pn48KjfWXoM1qJM79RQuGRfFfC",
  "key47": "4HTJJ55bLdib1KbDRwquKB1P3PUBUWToe83P5EPk4ukMc9QqgoTW5PVUmLcAYm3t8sQQuRQs9arKiPyk7RDGuBAp",
  "key48": "4zwY2k9bmerqCbhNJ5AXKdYskCi8mmEfF5GbasFwt9kUTyFFsBuJLXW1djF3MkWYBt6kjH1pTu1e8LgkTDeLasrx"
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
