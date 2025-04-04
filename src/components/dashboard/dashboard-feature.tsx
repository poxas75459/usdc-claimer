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
    "4ALW6GHZEd9t4XmMCyHkR7ZrsUTWWAbThe2HAtQwiccrFTDvPFVJ2FzfB1yg3b76ydC1mL83wch8Khh7RSVxHS5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnVey7e1Quf7GsuDTtfQ9gdeUmfBbjHuBVhhojPZEcbA8uDqqYvkMW543cJJcKm3xhDVEXHYc6k42aLHQ5g2WMa",
  "key1": "3KCZUCtaTdonUoh53J5B9kcWHNAWyAnyhDZV9htbrJGqAiTjR1y768d9A3JuvvSKjCGPcmtTs2D6dDHhmD8TykpG",
  "key2": "3xvnLX41crZjr9qFgqjfE2PGDTKsC8wzxJ7ocKtyW2smcswVfaVEN3xHqaGgTTyz9TVD16L7egYTwE9PhykTdiX4",
  "key3": "4rYxEdbC12oQDhzvf3JSRNnQsfFjrN5aWKipbRZuNJuycLgFjvhhd46ou5TFefRbGzfcBiUpvb5ufLWcjJDwJQqN",
  "key4": "5rGHuiu8zyNE3ApWxtPzP4bn5jNCpxrRXoy756ai7Eu5NFa4eXq6Hgh8JBKZ7xsJ7QHAng3VnrWpr4aMqzJAJgEX",
  "key5": "3jR5ZeaZ4tDo73nCTP4bEWe5LH3UC4zzgh8SxUz4UTN1kb9Yqny9zsibaticYVyxwHCdxdQ2bXqudTRbpRgM9eg",
  "key6": "38cu6RYt4m2vtXFRHTG2WtWAt8C8unCPYy5hzakfekW18B4cnKeXY5dpugShmQmhmQBjCnAmx7wK8LWRA892qcm8",
  "key7": "3xRzysDbJ8gHusZHV1LKkFxzmCNquk3Hq63as3GmM9cqyvPMKDVHME5qpvi6emEUY5eaCeesvYNP8h7S3nKjVTiX",
  "key8": "3hQ4U6A4GjXzdTG2spq4Pqj3D4SzLLkdgeV1BNz4AeswFMqWu41f5n93f79PZs72vZ4BukJtZMqpo9bQoQaadxud",
  "key9": "4v3uZhecSYwUZvpDw2SQoZwfRt9WdjvF9bQfP75WgcrpqVAgk3TSAiLNtBZ8SX9yH7sJ5CWxsPunr5Kqnh72n4Hm",
  "key10": "5KsG435o15GQ84YpXznV8LAjFPZkApedm25qWWzbo4LfYXr29TuE9sEa6Xi6L79SdgkW4MPx4x7YSbBvgSxJAQbk",
  "key11": "2h3eWAai1maQwq5T1YyMpe4Cz22ijjVighZhtUMEqjDTkVYWaU5De5vL3ufDs2oDq28TkYBPF3EkFAuN5h47c5iz",
  "key12": "5Y2bwQfVWPEEy58KaPVyUasryR4XzzmhSeiiaq2fhGbGkp7KU7rSG9x8dAcAzC2kmH1cPQnW4GAte21sUAEam6NL",
  "key13": "24S86SgPSqm4iDrMH8YhfiDukgE7BNZCbPAkLddAyuXyWf3XpFQg57GthWUQfswPeWBAw9cAjX6auFJhs6GgYSJq",
  "key14": "5XK5BQGPGrZ133Z6oiKLj3N4DgxTy8ZUmKAccnU8irVqLfCsnpuxrpqfXnmGBy7WpiisfnSajns858C4v2VBkF4Z",
  "key15": "2XHmHi57ecKo969LFkUf48HvAzNxMTPgxUS1oVB7BUcS73RB7f94dKSW5Zj4vFs6EdLNmXj73QiGHwjVfgZZk6eE",
  "key16": "4nj8CH1dXFuXKMC3upzcPw6aGYtPVvksLRtWUwFR5bR2EbuzbMTahcQd8N6Z2cVFrhx3F2PCndQ5wy5K4M8mJQCX",
  "key17": "5fCPPeXUkaRxeeh5GjYh7Jrt4CmGXXuM1iupjg2KmkNHg7wNPTPsh4e339qBpPL3JRuBmLQHWAcp5oE97jmhKoad",
  "key18": "4d2kV6RB5jWSoDe33RA6mRH7oEQFAEewnBS7soEAhT6W8LkJLU9CAT59sMo8FmiAjUyQ8VcVkyND1qKjaxzEd4Ka",
  "key19": "26rxvcTday4MK8ieM6XGZFHmCR3d6seTkujCAseAVxzWui8mJuXjRxBq5Bpu9g8ziFa1YS73Q7syhPNnC87BxxHy",
  "key20": "3focn6hczquQaPuaYHGyZ2d7kKkR2deHZoCXthQvMrvTdjaR64k5Mjw45TQCRRt19AowZ8Pd13V6VtBYDAPvFVYE",
  "key21": "UW66yGEKZXL4ZhWGqop3nZxzAwBhRnWxtwCB2WJwU3SFZ4Q6fQwoL5fVB6NUoRvsYRtQw7L2bUrJNvm5rnTVoEs",
  "key22": "5fBbMcHQpkwksx11M5bQ5XJLckGHJYqVeGhLwiMN3TCWGtu4rRJGqWFFeTHVKHpLcrie6nuF4F8dqG9c9QeG9YuY",
  "key23": "3xKoz5NQ2jvicRMUgB1qwqT2cpMW4V6zw922tPZLZ4e5MXawaDPcdBYrZMuckpG2FUnv35KrNFT7fcJmZxLJU8n9",
  "key24": "NcsMauJWhrnN9ZcYzWcv7RYvRSBA2ZGfD3e6cNNYSmpgRPN64oFpznYLy3fA7XV8MZJrLubsACwrnJx5SadmPYN",
  "key25": "TPZAvy3u5TDuVVyvdzV4T58kqurtuqHuSZtdmSVyqsjeNATqWDb3scawE96TjVbNd6KhsxQa1KCybjLEtzDrd1b",
  "key26": "2uLGFbLsSTxShJe6uuxqcjejSdCTbaK1NxZ8YMkzL1dPzfhCb4PjvxdheYpifa5NSbiNuppebTp5R4fU49pHff2m",
  "key27": "5J1rqL7aAjBy48GHSxUtUSMpBmWnJtyzagHenU7kNtQQGx124jog7EZSay1tHKpSGxxzezHfxbQAEw9ykGygsyaU",
  "key28": "5674zswXTqn7V7L2m2enCg5HpUdro2Ew4aTwmsT77reA4f4YuuzrCuE6eaCdMaHeVgaM1CFwc2NdKgAQSAPNGouL",
  "key29": "5JEcZv1LibdRwyffvJerYbfcyFDAiPq4wCqjThV4rU2Qrfi9hsPtovr1v1iHSRneGuAAQorXpk5N6CbqRyiunLXo",
  "key30": "126TvWykeTXGxGAMJknsLyGzukaD3mceQqr75HmLjfDSZGLq7TSM9T9gKboSK23Bwh1oT7cJMhjYop2HEsRdhfnV",
  "key31": "3NpDEZMn5kVTfXAWjX9dZ1pKqSU8RoJKPAytYEXd4J4x3DcBQeyxNmwHtfGZqbFJJFdUY5fcdpQu9fFQhV6Wk8kf",
  "key32": "szA9vobUCFsqkCGAE7ujZRVQYmZCbGQwC7QuNrcwybSgjhkD5Eqkc4fr8xiCatjVPgiioXRBm3nTgHfJn2ws9tq",
  "key33": "5eMdq8R9VU1J3tHQgSgRL2mhVF5M2dnXJDKzm1BfcwD26yibohc1eViTxMkRWo9joPs8Phebu8udACBqC9qRCrur",
  "key34": "5zXVkfVBLfKAcFhW6bHu7P5nN9KKU4XUQNfKpYbXXKtCUWHHJSbaDbrgmp569p4vDqSPFpUHCcfu6DpXete74Zbz",
  "key35": "3S55nEBZNz4mChENUFFoxz1serktAFXq545vs8rWCuFccqTbjFHranv4H8wgcJxK63iJYoMz47oAsavcJeHgCZYx",
  "key36": "2WqKYNEsEDbZ1JLMZxER52QgFt4uJd9RAFjBC3BcW81o3WGJ4JwqphtvJWdw3JjroCHgHeX5riu8KWbdtcHkrsdV",
  "key37": "3BgynaRkgYPjxhc1hf4F8eehsVg82yGg52xpuUHZMBYBwKHWzJmwF4iRkTmta48shvu6DYenhAqTb8R2MujDBKYy",
  "key38": "3oZZ9ZXm5HpEjzGm4pVinSUF6cQy7KUw9haV8PJCB4qMutfqAV2s4bZBK6yst1ejFv93vaN4SmKYVcKuMJk9cyqi",
  "key39": "3KSrXRJQX3qQDhHfzPrZnJLnofzt4Lsfd9hoGx29wPjnbNAZTqDRbnUAGxXFtsASKR285RDMNRNXvLmXvzfEHwkb",
  "key40": "5Ca7Z7UbaGqmb2Fa9bxtaBcBhik7jYxJ1kg8wnEEpSF46dMRFsQT2JcWqPfPWMnyytvJZUMHwaiuR14Z51gEFgdL",
  "key41": "ZsetCMpUJjWLcq1tNKWW7sijG7BR7CCJZtQxzKNWUryrAKz7ztozMVcgkDgaBq6jUq6aQgizeRrKnLiFT5QRcL7",
  "key42": "yAvuZ3c6kQrx6641FyTyyREvPWnu2GTVXTcEz9Ju51mJd1G28V9DLsPqy37YD3XiyAfqdn8MkFBZAU3GkUa4xfc",
  "key43": "4RTdZWGs3yS1rqjxV71mvGUjqJ4NcTQXtD8KXYDMfjukKef9di3VjcSojGt7bVJBLoR8BcHBsp95fNac5Rksjhup",
  "key44": "zxK5kLWnYGvp4tTuDXkNDMDZsbGbPXNuyDcDZBKNnxqsBbfpYpkkriteRK4gM8brxYULL4zVB4MS6kn55xgHpff",
  "key45": "3BDAEQiqv8tipzwsZq3UB7fMn7PeHSv11Aw8SpgqhsESKfRU93TCStSDXPigBF1tWfmbgRZsJuwMif8VKGj389X2",
  "key46": "2u4eyCAHNpzZGKyPY1SYVFGVFvLr3FjEQBWFVfvwpXrRSELZSPkuSi9c56oJ2jqAxyyLpUwRm6yZJYTiE8XxU8A5",
  "key47": "4d4vzonSxhT1fUQ3kymvzHo8rhmrM2wmQfiqcTmaMjTnTPJrjz6hCi22B6xX26gY4u4FvXWQQJQjhs5o6rh8w7Mo",
  "key48": "3UJPrUTaeSXGuTER7iiGjfu811PEEbCV41yYzRXhBu3dbLA5uXLmWu8Kba3xXmVJosCaM4ZrsACFhwnCNMYRo8f5"
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
