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
    "rNx6eMF5xk6vz6WqwPiFeiPbJPCZ8pqaKxgd7VQ4VQkZSGKQA2UU5gaZh6fueTua8wbytAufMDe2WQg5EWwtdWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjokucCKoB4DUYw7uSecaGbD48DAMaA8qBNHwSosPg8YLqWvXJ54pBtb3mimdUCN5jgXci888FseBH2BMxFoVeT",
  "key1": "488RR3RBwYTq8GkoEEUed37douYcQ47p34gweHJFJEkjJ7QW4oRkFy8FTWAEf2u3FPnGj98FWm3DfPMYnM3jyi4w",
  "key2": "3U9jwxsCQRbxw9wyx8Sxw9ojgmrDUvsp6PFC6U4em2FcSh1VTfVbZnJY1RHd2zDGmChy9WhNzNsFyzdHzaUv9yXB",
  "key3": "3VjZ4jQnNZVjtTJhbn8yS874BG7g4BuvJUi9SM5tzJcGq4qDHaSAX1PtgdaCjkoudmcwfgSNku7dsBneepe8LMso",
  "key4": "455yrzNG8Kipgo1CV8Zwzn1VzqeJPiMGMD2jZpgkaCEBsmLWRoYJ4cZf8gZh55neWh2cdQgLbhFSFhJaD3ETbMPd",
  "key5": "4JrShsoApgCoAbLPGPaetKArQBkqzokhfGRpVJG8upJMXTUpCtZrxGPS2MMwRsVM4q1KuayoPAJ1AhJZuy9yxXTk",
  "key6": "5jkaKcAepCGhjsrBscMNjG1c5W5bKNCAzrbqVdyg3kYA3yU2Cd5UsX19dWGQjWFfnygBGWD3JiCdpPPePDCxm6yp",
  "key7": "455iK5mQgNVVner1Ga1AySpaM8pHb8Mc56UFKbv5N2d8Q4AefVB8yyU1w6YZPEZNHqY8Ww9ZrjHudLtErXBNSTY8",
  "key8": "42w6Pnkwm2V25RUbKEzNAm2tnBuRiV5EJz2iVphBwLYRjv27un9VbV3nuAxPTMsmhSEdCaM9xcXbtaUmfyobgjNt",
  "key9": "66MMt2sAmtHnM19WMZqMnHnwjvjMYvgXJRtDpzwfsj9MQxJcayjfgrrW5gyEnfAV45fUmRyaaXVrdQdpYn3tj8tH",
  "key10": "8vuezr51YVDBYFRrFVTQWDxXcbVNhR9Z8z1xEkm8cjugorLndm3PUcQA4sLx7ehL9ay6DcenubUmqxJiL3JxQtG",
  "key11": "wmzbyf4dtwPCscpXzvVCrQrF8myFjBzLbevHwrap7W9wdvevRpyp5WM48Nf62HTnytU61ZHgciB6NQHJCRtRFfL",
  "key12": "kHxQrBtr4j9Ch1MTSer2tsAWXxJckuSFEeMvhbwvMYCF1uSGQiUxdU6vmmtsCuKd34ExwAbhfrJkpft1kgxWriP",
  "key13": "LgKmoSpNpB365bFVR626ucD1TeYjEzzfdi2zNe7e9LEC9iYcBTA4J2EoQv3qeBTT9sQ6KSKncwX6JQd5vMa12vz",
  "key14": "5yV5Ld88kidgKV1w8RLSXEMT8aZ8aM32eGY4nGT8rnDVX5UnQgA1gUuiUnzZouPnjW27U3ouQBQ4KacE1hP12a2H",
  "key15": "4XpkBZWtDZ7NGRJkhLPHtcxy91tZHahrpK6Zvod3K87856H3EeGXaDrc4gWF2DwuCAcgZiyJ8AZ4rTyMWp4DqV9s",
  "key16": "4zaxg3TQhpzom85T5hjGFvcAR8Z79cbXJe617po7MdYSq2nMbj2672bX6SPCpNDkWmds2s9ZwQSDGvNwKfdgNzik",
  "key17": "54pVahDLCCQqict4u9oHHNaeX4T6pAeeP9Mtynwi3Ls4shx5KqR25GnJ8aBsN4qiH2SrPGRmSLZPGaCDFqFCm9oc",
  "key18": "4pDt3s2fJiwUWiMuGXVKSFB6VNioiyyCKrd6EGSLt7QvVKnrmMPXhKxKeSNY3r1ou8Q2YEaKmmAADHswuQeEq2w5",
  "key19": "4bgnAmJhPQcy3c3JwoMM7HJe5pQZh7WQPbd5p4rvGxuKvH29ATp2q6mt19TsB4vn8TNRxoKam5FmPXaKBMhevX77",
  "key20": "5JBsWxjKuenWLWpCs2YLSnJzswvtt8zrcuavMZWDbhWMYfnb1ErNm4vjr35PwWbnzY2hWrdtHw9wGSG9rTTBsEoC",
  "key21": "2GrzA1Dc6zGsYZuTdySJa3q26N9HRJrZddvByhxp8tt6W98sSneUmNabgiTRw2NiSLemHsVE7p2qNN3ejRzW36dX",
  "key22": "2oQiqq3ijYCnzfDHWqv8rMCFNDS8Uw43J3nEoNxEa1n4KrNnH3EsbT2vPTLedDW2KguDB2pqVkpu7c7NAxEesRYz",
  "key23": "49CogGUPQiw877FBw2MxpG4LjsY8PWU2s5GH4XKdChWFgYz6ToQ5ZdhGXLXYSaTyukUegULjGGKb3Xz4eGnUkPF",
  "key24": "2zyUzoTxfycnG1sXvEy7tygTrbSmUAr9gsTEJm8kSbbJcj5duDhBF8Nk4KTn2t7LLtKfjzgsFivYSsrZPQT9wu2t",
  "key25": "8YC8pmPVtKVPhwmZJqyhXL7iPM9DPjGmx59EZeTB7UNERP5Q2YCgKmLVJfxbzdU7b1VvDWAMvEafH2GLb5dGzGc",
  "key26": "2kB9QjiKjGkqyLLwkrwUNPzR4XsZ7UMX9CDf2JWt583aK7dEsua2emcYCgYZDoLgZLjybBiXEdPXAGbggnyvmjh4",
  "key27": "2maJWKAt8DVh4yxmYzeWjA6MZwV1Egb9s3Z6fay2YmUQrBqkYpGvCuvFbMdGVPfKo6Vs3oo2KoeFnFDPJ3tSxCpZ",
  "key28": "4auQqC5XndSpP17MK9wFyLK5v7aXkRMHfEdbGCCumMqD8C4A8EUcGuzMHzUhd4QFeUoaEeaLyhLU26UDDyo4ErVG",
  "key29": "3uLpLoHFjNb8M1GWhw25hM9rgUejKHUX3gMwyNaBw4jb19q82H3ztstKoYg2giQqYoo1CcaYM9kZMjyrtLSrFCpH",
  "key30": "rCAdW9XDrYmbuQRqx93r2gmxfsibGEYzLJ8wbcpVBVB6tNRHfPBrGjdwG2jQWCDnhtwEofXujJEtfG4CDodvQAu",
  "key31": "5E8koVFs6W8g8dDqdpFvczjQQtV6cz38u4v3ju3aq2FFiX5C6nvdLXnKAQNHHFtBUFPgAq5F7jJwiQdMjVYxeAKF",
  "key32": "4k7FnKH2iBMgc9gGre1QCJTwDz1oEJUTp56ihAKyKBXU9mp4CZzQJAsCQTuMeoytVrQBnwR1Rak8jyttCwBRuQBA",
  "key33": "5oYeCzpNasa9qCrrm4iZ92j7N8uDUdrRvxo75vUaUEg6wB97cH1nsYS6YgscmgE4itCgBzECCrYFiWA3shQWW6if",
  "key34": "2wD1e38nCHaxbQu5kjPkgfGv4QEtkYT5uCynM83eYzbpdPm1JXQ2AisrXbaqUkEp26Dq99TFkpgXgene7yuivgCu",
  "key35": "4dEHELcSW4FdtoCjkuzYcTpVfoCEDnefPcnMYVSyz5eeotwipBkj1vhMHxzS2M572FT57GPNAMWA8rWiUtbvTdoA",
  "key36": "2RRjxErAcsDJFqX1Uv4LdQTMMJ1yuuUUH6anB81K9vLeuHWt25ZDkUsC1dZADtzrEZWfDoekfnXaMLR9rbYtxnMb",
  "key37": "4pNVLK1WtVAdN64Ehqjyq1Qnkmc5ykFoHeZb8EoUXRZbEUfsYxug3e6zhkFFCdHuzABv1gcN9hsTDd7QGgt3t99t",
  "key38": "2YZWQwhe8LM8BgZMHnHnSPdu3mYsjDNnBpPdPggzWrfaXPGz6QTekbVV3WycgvqFkkwnk9cbkywGVv7i8PBUczj3",
  "key39": "3YJYAvzgPkj5vrZzC3MhhT89fYZMgTHNQ8Dm25V3eyJwbXGifTRz9LVaeasTZJnA4mzkk4UzPV3JEsFgPDSqF68r",
  "key40": "5M9JBQjWPz89NueUHu9yHkaxF4G456JrmB3ui4JTUsVtRhhf91oeoEiB6gs3bY1UYVPmYBGLpPA615bLzbxkCak9",
  "key41": "P8e1JgPMDRGVNazpPMX15Af7XBgk3BPi2x1QCC7Y3LrYhyiPK9WqSZLxD89Gix1AinsY54wcd7gVKkvSe7wCnFW",
  "key42": "3ZKjmueHu7KFfSmsiMfwPE8CAUygRa6YiUudFvyJh4pf3rnroWwHbaCLDRZifRUaFaHbZK848eYTAptTY8HEv1Rt",
  "key43": "5JKzTEYTTLQvge2criYuGn6nbeew2bVNMCtNN7F8Jg2ctUAerR4F5GkRWzoWga9eB9u2iUY4zwZiBFxHmffHwk8N",
  "key44": "5QQYXywU7AjiccZ6fnMCCUndGntPVPgCKxqPjsoS2iyQ4Mm7DmVusFGcvc1Z6NMMhomYMkKtH1qHNgGtUbJyQPgU",
  "key45": "3J7KgjHGZMGawUBGY4mmXRngQrgicQbqM5LDhJKsTUhrhR1pY8UdK4uS2GMjrhQSfk27dMtLXnoQ15HacQm3Ytfn"
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
