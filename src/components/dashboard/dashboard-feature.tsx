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
    "4E4VrC7CKBnsRmUQLAk4YZ1DohmXkZFNFbqyrW6gJYs8WuyJrAwakgbPHoUCsyJHf3NBKFiZeswmZRCQaxSvBYbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqMfUL4q9DySoF64rBFCi2AAJGyj9uJQAMEnFKHanaPgGiPRfeLwF2oyD7VhUcAAaRVGBKQFxMACG1dbKwv1MF9",
  "key1": "291L7xCpfG7gbjDxovbm2BUMqeWwXoHrw6TeZ242bCWGVFNcM4Eqf7582WHfbSnruUdd7XuTFJdLmCUMDC8jfZZL",
  "key2": "3v454JJqvZMNyfcKMkoC3po5VK5Gq7AbE6cp74MKjqGdoEk97vFQVww3aZMBt2Gh9vvhyFzRXeVy7AxJ986443f2",
  "key3": "vetWnj9daQfRbZgrdAr3pm99t8G27TkwJsmwk95oRZNdH6YbZZXPHSzJd1gXGHxnCHAHfNro8UdZc1WCwa1Ngr4",
  "key4": "2qi8CF52eCPABq4eruC2vZxZ7mAGCK89U3GRqUxiH8dDA3qLfSd3rgSJBzZoGfZGXTLLptzrzcjjjGW6Rcxx8Kq5",
  "key5": "44W365wUcdgNosvMisZufG2uBfDrSZ1E6iBPA2B9oEuZyqxky1NFTp6HuWMoYoJGTzLttQsDasRLNgnVFiJvcuUA",
  "key6": "32SiHvZL2Xi91Tr6JwxCZZQkF34S77Pdwapdc6uQnmFA1qsrtKvNxAePAvhDWjuw116rkXhEMQbB1Qd3sAkjjgZP",
  "key7": "47eaKMX4qjqhWh6sREZeX3oLRKDdgbjZoZ79fV58YENfo7zNmNeY1wUiGMiFgNccUcJmYCHciwAfLsFj7C85EJt4",
  "key8": "43g6LkkYTtKUPRZpcLxj2oaXEHw9rMvifqCAPZCzZukPdTzhfWpeGR6s2oib1WivRKiEKYoBUoewt4eqMCDwZXGM",
  "key9": "55bZs5agvF3cFdNkv1vgXUoQ7zZLDLUeNoV8nAjPFTtDDGxn9AwCLY97Xa3dqNtUxUB1VfVsfSA31gaUdrNW7KaY",
  "key10": "4QrstU67C1Seg88y98B7sRTxfYqvcksdr3mUh63FZ8dNDXegLAdcMRRAs3L5rn5EzZWvorXT79kBiSGxwavMfb9F",
  "key11": "5Ucy7MDwYT33Bxe6oTTyxPRFANSDsU9n2s4pA4dgWoFUbJj3r96wxFQ1NCcFY4wBHEcv86BKQrzVTiNoaf47erzb",
  "key12": "41zZP7NSjosNKcjWHCFfRYV1MmGJxtXwheNU1tX1eyA3TpRsRHJWChgdF3nvyQexPUuSDowZm868dDVyWB6Hw4qg",
  "key13": "dFmW5ou6d3KkhYjEVY14nAacBRFTBVD6qWXz5LLWfPEYSJCZiUmDBkvtpHQfKtL61Ah3t6ZBagE8DiUthJBLoed",
  "key14": "3Tat1JaoiyWepDzAFx1dgydSpzM8gUuLarhhb1bpYzpoxMYE3JvEJyUnRrTzghLFyzrREaZBuMosw4vwoG6N7BYb",
  "key15": "3JMULWAkNVVxuk9nFyUiXM5fJWu7hSgBiTFJM2Qpe2HiTJrufDbb7V2s2bFudTCyzYiN52CibTtcjspDd98zxqG9",
  "key16": "2yoh4MYy9UqHQyFufyR86Rd3rMkvGWttjCUHQHnK9dXACobZoWj7V6MSfY9KrpUugg6t3qaEzTNczNeJchAToMeN",
  "key17": "2TYVQ47pLDvk7siWejZSwSe2ShshhYdP6RbtToZ5V1tRmUgzKQfG32HmGCvT1vVdPiTzsMfRAjymZAeZ5czScEFD",
  "key18": "3JikbMSWfi83nAEXGYYLHDgLYWEkWDuR88m7pfFUAXxa5KyEaNEHPtWXjCbfByProRRUPBbBR5d6VHvLwA6VU5wj",
  "key19": "4HFFCwE5nRnM4RcyF854pBLXQFHHMmTi8i3Z55LSGZRHojrntP9pu3gKs1ycxXZX6Vnmqx4vQY1Sgo8qMUgXcUbJ",
  "key20": "3RFXDtx5k5RjAr1pkvhv63Zp4rP6AnQcVpPaQBA5xy9G9a1qs44K1PvVuSxbHx853B2QPxL44BrtMGBjUhqajHcs",
  "key21": "NZqKtaBf4gTob147BEEc689Dw68nDxrViXjZXUGX8uqMx3mdFqdMDKSMwXjr17cBWgjM8xdVzZbfbkopUS5NRfb",
  "key22": "2h7dDnskiZmjsueyN2sf8HMccC4fjEjftbs54Eq1E7iDGvgEKHkMYumuzQ8veQLDmmQbZKgVpbPEjT2RL9SkUfLn",
  "key23": "5P4GcSojgbCbS6MbKd1D9pbh8KkWU4fR75NjUfZUc1XbreVWmF1qkNieuKmYoFug7itmDYQYnMfR3TdxWuqHepBY",
  "key24": "5ThErik6E8j5BHKUCdgT1DeNWtY5u8wR5iTxGmFzcRj6FpSYbTs6vQnAfuBThBNZSiHV8W5DWfSp4n9qC8NmnJK",
  "key25": "3uFwrBEYETLKVhm74gwzrcuXFWfv2R9Fk73Zfa73P7BBEtQ1uSYKQihHZPCDgdEs71kCCwtmW52EmZ2MDctUjXQV",
  "key26": "3woocufRa4EQLVAtvNxnQKs4mqBaS2sTmi7nxUZ3eQfoB4ujR36i91kjHA5AZq4hJKonX7saAbcZKMJVDXZqkjs2",
  "key27": "5zM3nEvo2Ujxf7MfvpA7uEwrLk8LsnJ2GvCq1ZcZQDPCc79Ua3dGiCKPDuSfQofUTwxsczjqaojFn1ixEnPvSFtD",
  "key28": "4Rws4N2xfQ9JztVsKmNfQVtTEdS318SJfGXmRFoHnxhcHRYxvvgCGBLAaCBXH8qqPPLEes7X8fadFaho4waA9g8w",
  "key29": "5kg9xFXLJaZ598dTCPSyEHED2xfLkdmxvcg3upNKBX63FstVVGH7Yzbo34fTXvXK7vbfDeVixji7tjyqDhP6w1xn",
  "key30": "35UEKmbxxMzWADHdagR3eu4ot4ikKSetsUJHCFfRZUW1PVL5NRRhuvowUzpEH97dXnwfe8nYekM1niQAgLEWuNP7",
  "key31": "3KLVtaFsXZ1zAESn9653Bh4uN9Hr8U88xpSRDHCjq2wVmgqNGFLQjEFPpNKUbLtpW4F1HAVRv4mFXeTUDtxqHDbH",
  "key32": "FY1QFrxhhBBi1kxzzWH9VuciAEQKf8EG6mko8AKgMV87CPMZjYmiQCh8cDx8u1ACVbG7ZqgwPz7QefMhAfhGBKR",
  "key33": "3kekv1A83zFntcJMVFsj4xHgihaQk5urBCL4kkbhYn51uz3SieCbtbm1mWNM4qKXvx2NqJxbv9JifS4ySPNp9VPj",
  "key34": "3ZbgjuoUbuYM2Qc3M86a4hm6CpnUT7iXQRqLgXUddNujrmxha2x2tE7BvjjuscAyzzT5XPQkN6APSvoBqnVjxndy",
  "key35": "MZXFxUzz6J5A1RNArmNqAjcQr68MinJ16qx4Y92mNkT962xMPdYFdnGMswmQKjmgd51ePttzP9CkKbD7CYavigf",
  "key36": "5pw9ei6hpci7K7SpehiW1Jb63zvr7mFkcndRSgvV8dGBFAhwH9L8H4x4i4emRJ1F3LZmjAzDXS3QrtnmqSa3mwM",
  "key37": "2nUDizm6jqupgtZ3pcgkfYCaUFUdximEuA8FtEGGYdvr6zpW4Qm2xJd8qVBBk82TYFg1eCBVF2EvDr9emiivcHM4",
  "key38": "32udfFvtCArc1oHnRhyM8wNyjvEPxLoMcbouBDn9Ws7YJrQFxCjBVKXt8aj6Vh4cHDC8JjbsAY7g1cFXHb5WUDoV",
  "key39": "5AYzqNYoszCb2gaL9soWknxoHzSb4XZ78LoWx1nu9neVpHsU2HXhsi7EFouMaRjc9cc6yYkQJ5hyhNEsTfMoXSwy",
  "key40": "3vjULMETzvE9hnK2Gw6Y7JKJfa9tukwi8cQaP4f2dCkZ39UVdktFG3hr7JdBPhLX2S8QJbxiUYnRE27d8hD4YtMG",
  "key41": "2Jz9ZJ9tvBqCVreiTHWjmKkbF3sAPHWJqVcTUftBWycTqu4tgKntEdvRBhV2ednyTde1CLWp1bV3JbB2QRAVzARs",
  "key42": "4DKXZYTdFg9kewzeWFhXaoqBJE8hXpYyHTfejBNUFTmaUQra8G57zuCNX92mx6eaj1os67a5R13eXKJHsKRNeq9U",
  "key43": "BQvB95wfxrnAMiLnFgKaqVU5ngqCQjcKRb8uZTon9KHTW4L1ukCEbqQyeLj8Jiptm63GLN6XB1oYz6w4VnnBy9S",
  "key44": "4AHmrJmFQpf2qda9dZpTKQqfy2PUvZwGy9Gin7rNuFNDhvZ2WjXhfqhmPxUSvUcgSPqGg8QqtcKfPjoPhCKY4Gdr",
  "key45": "3t5EQGZUHsaT9wCjVPV3rs7HV4DqPuzkqUPzpYF6ws35Rg4WnCW6d4fczj9z62GAAvaUY9QzDR5Ktohw5TUzEvEg",
  "key46": "45yTmR1hi8qpS3JWNBPLVcbgCwPEkNsJx4u7qT6sC9s1x3mPgy5fZk8ygdBxPhSm5C95B5yyHEczyuK8R2hbsWZB",
  "key47": "WW2jVjHvktBShaCxszwLv177tKWT48gjHkoEAkcNB89cLBtPSdA2Go2fArysuhrnSAY1dTVUEY96UDuYGk574md"
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
