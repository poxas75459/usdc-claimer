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
    "4StzfaVfdFD9wyqdC3pQh6P6ZcQ1PRQCRhw9uXak78V2KraSYLmfPmEPwE3BbWgU5gVk9G4cxSYFzEitSNH2Sfrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3os9J6ojkwmhRerYTe7DHm6f7jshhWu1M2R9RhsLeNqD2Efm2RU4sRsJByX9mfCYFskvnYMGSZ9MSwVLKtgU9JBV",
  "key1": "2JVkoUMJg5mXwYTRtrCEyVPHcyXVGDCVcp8KhbhWbzLGdTty4C3UjUwwqzAr5mwt8DJNF9CtXonMDYib8Z7QKpz1",
  "key2": "46oL3QTVcrQQVMy2xLLPGCUYTpgoD74j5egM3X6GgZWj5MJowQcbg1rirnGv8icWJftweskm6jnMAqJBG8Eyc63h",
  "key3": "5HXZrFxmoswpegoxm3RP7kDmrXYYpbtFBGihn4k7Rk4T8ZvNnTffWh9YYFfqBcfu3zfVB63SsG3wYQfaZUXkw1nq",
  "key4": "ayt4vHAD7A7HArwmkktiv6ydyqvdZJEXwYdFGXsVs5M45rEi1vXexhoSGidFAduYDg2juY7CfqTUpHqckkubZon",
  "key5": "26QbNZ33kXqti2qsUvq6DBEpNn93XFEFJvshMt83eeCXCHNNpCkqxwyPGyAtrjT6NFKaEru4AkGRqHxyAo6wa9PZ",
  "key6": "PffLjaGN2GRNnMs7QmHT5LeF9TM6btQSSHUi4ey3t4SJ2TZr69QUPMbcC6tXHiiYTRCPLnWtdmkaQ9HBq5K3Uop",
  "key7": "2Nw4H1nPhb1a7Nj38ShzjMiAi4sobjKG8Xv67Btip2pDgeAkcX8hJsd2J86GuaG3AwrYkNhDHxkEqsFh9UyQHsjH",
  "key8": "3bFYipwaYWiZHcBbPHvzkbCiSuzRxFscVf8JoJbS26qF3CWrRUsfJaxYkMrSL32WEFFxm74QS5VfGmVyrVo3NUPv",
  "key9": "2vmwvqvjYdEXHS58AGjX3iATKbYD1JNKQjcLdCqkaBeAtvJFxEkoDDexwB44898TRFFgGhRQJArRSCr82NRbH3h4",
  "key10": "4HgYkbdGP6kCsWowoTmb5r7mNZ5zk825P99BMGrfpcarBUjnbnCrC17oj6wHtxmwFYxYqyEw6fFi6JNWXJ87Ngw4",
  "key11": "781AjpGUGsB2bwmPMmyN5UVoivMcEHcGYTPSXm2a8ALp3GnQ3hvtfQC3FDXELCZqQr3RJ5SeKSobjF4FuHMickq",
  "key12": "LNU8UFYqfveNA6VHSj7HbcD3P1vXD6ak4QLRk33TVqb8fW6is1uy8xJhMhvSySdv4bouojDLvUi8DW2eGeA3uZN",
  "key13": "2qxPc3faBJPXqVQcmrzSGu7URFTtGbpQc9KvNqvADuyyREgEAT4T22MR3Ex3Rzko2kNuBcBHWUV5CL9LS2NZ59RP",
  "key14": "32PwqircmsXX7ALysHR6kNZbYmk4NnX2Wk3HBjzNvSmmqbghbaUbefLdA265nfoBNZ2ieqMNKnp2sp6zJFFTXKkE",
  "key15": "5ieskVYEUJVKokMp1dyyEcqdKcQQJpq1msNvJDYFgVVr32jehS4jYNQpvG3LhbD1Uggakerc3WmVBdb4cK3vB1ne",
  "key16": "27WxfEAJTtJg7yQvmzN5rdRvbNQr8DzkAHatume3tJpyuNNtGXitEdjU5k85Ki1ziTUEuui2vST9PgagPyNdqn2y",
  "key17": "Y3AZ2joifNxQ7aTejetqRA338Jvr29oE8ZR3a9pdWLjBGngzPbLaVr9npVGyip1Cyruz7xwyoqbjNiKu3Tg17sp",
  "key18": "2aDxq86C8eaV3aAD2YUnA2GTstKN7DFmYopaDDiR1boU7FpmpTU2khqYbdhFqo9jnDETQMXbwnYoJzDQ9YoDk2Er",
  "key19": "2qXYTCJYtRMCBjmBHVNwgr7Uu4foLB2m9CC3HbQ2agkHEL5PED1u6gw67VJHgw8bqNtGoM5qow4TS3QgrUk9Q8kG",
  "key20": "24F5LbcYfoCuk2JcopyroZxs7Nva8FEYDP6jRZUtxNtGiT2obj4oREv4z2BRwgvJrDnww6srz9KVpa8z7Myyw2aY",
  "key21": "Lyh4J98FXcHB9C2K1UyQxLKSdLqweqHAt7ZNLvivBawY9vr1jm2mvNJJxt7WRRp1A4e6VBkCa6BXHNSQw2Tn29y",
  "key22": "5Lb5W8HZxBjiCDbuMSMD1RnmYKQK7EN3aXMgV2QxHAFs8vETpqp1Nb9RMQffCTBSNKCpzjE5cPuoA3ZQa5Jis1hG",
  "key23": "5WfQ4SZqfxHmUBFCLUZwqk2kcEjNWZHJhmtp5F1hieUzmeh6gBVdSBD8bXRfxaKwMGqqkncjCxmC9JTSL8gy6ThP",
  "key24": "2zXz1Sgf8t4MHhPubP76YTng4RGTKTq9kagbiEq5JCvVzZTcZEhfL4qoDr1w8LYyZCarcbzjrPPDBCN243fwD6j3",
  "key25": "RyjtZ2QvZKXzYE9yf2DRmF6tGMWGpexs9cDUhNZXdmprj4BK7wtKwN3gjMpesoAz8eVBLW62PGRgsArgEG5LN8w",
  "key26": "2AXUidncsY16jE33NQgMvCCGL5mRkGQGajm9EAwpmxffEnt3xPLCvpF9HTyLzfXrNNGVG3tRJ8SMqezp57qWAxwd",
  "key27": "5Xa8EpHSY1DCYbPXAFo69EvhuefRn71achaersZWYWWzqwkKm9wyLwGD2CExnrx62wFYUgmQmj3C1FHP6rFQmuji",
  "key28": "1wusSwuBadHKjtwnJ9hbxR2tMMmJkqKPW8E9EZcD7XxAZkYaa6bgKc4uMyfLu7M8pMGZmrLHKUmVeHPuUkSPhAr",
  "key29": "2xg9diLmLdQMdix5kkYgp8YCE3TeB6L9jkR9ywHm1aZuwZtbBqTk4u8aaRbNuPV1hXPfdQX31SFVXu1S7V2vj4dC",
  "key30": "2gDQzKM1f3M1F91CfXJCCWhenKgDpMVnbUp9y8HqmDs1nk6zMJfpK8SxSSi2PgUTQG1dRkefGmWJt6w5AYCvW79T",
  "key31": "4cuwRsShVheMUQGjFt8TH5RJLUvpk1EN9BJC3k29Xqt9rtkipv28KAHGXZnPkeomew73bdTLzbPJ3ESEPiF4NVPe",
  "key32": "ZKB1HD5apzUMZCBzvdbXCxQemB9msKUxC2pPdkxgFgq77W17Hx3MbkMum3MRfUettgVC19UMkwRVLCW7jXdKA3c",
  "key33": "3nqN5LcZcqDZUEswia62uU3QhFJPMftanhxnstHwUZ9tLx2NEfigcVXMSCDAjpVFV98wPXmz9vm6FLTh3Aj6gw9L",
  "key34": "59KUWj9ny56RsNLVxcf3qbuPdzdeoEHtUgc4udfQ5NGBobN3bQMdHEzegEUxHb3rVr9vNCAYjXWpc6eUrnjyjrGz",
  "key35": "4DQKAoCcWUnAUTdKHB4ijt7HiGQSpo5bz4ErRt9Ps5UqTf3YGMXADHJ8GPAhp24UohbsWqmcrED4YLCwqfq8UNYi",
  "key36": "4HdtPfhKhvVfWUV8cFF5jnXxGyckxZ9BwZor1aJctgctZXfC1jmC9XSrrmqSbX7yDPkRPj2yuv12r9nVQKpJ8Pck",
  "key37": "3anajqwrzAp3xEsYFLN1kjAdr5F81h5aWs6ZxsFBRWQCh5xQ8KNivU6ka2v5jKufs2qkqQkuvvnWiaLnrBGLENYG",
  "key38": "3zKVUSv7HLyq8MwyqvdsJLPb6wLx9RTMiyGh4BCKq7wTgVf9vZiuhcacFWg6p1YTJWwvGkkaytoCthsD5B7dTZmg",
  "key39": "2uvPz2NyncumMZZ3MmiPmXatEbhvdTFZxi7s6EFygEx1J3SC46KhvB3sMcD3pNQarHtjEEPZP1bcagHsuvk7YtpR",
  "key40": "63ge6fhFZskS1w55jfk3t1hBb67oGYtWK45R6HixF38MrAwsi4J4t2q3rFeFyQt6izgHmVBk6pC54rN1AuuVhC6r",
  "key41": "3ztePjbT2MbdF4q8h8eEWSenjq9gKtbv1dEd8z1yPmA5wu2huGKjStKP5uBp3mT1EHQguRMXJ3L7DLXjwdqxmxfg",
  "key42": "674YsBMYiwgXy8Wv2LXoH2ZoEzmZqDGuk4FpnAaVyy1XkjCGvxPL8mN4268tVFDtduE3PBqdgfirvruUTanqAZ58",
  "key43": "3NKUpUSYBtFB1XLZzaA3jSM3ZN7eYeYWRs9E9EPxLsUH4rEZeWf8EXnQfVGhJ6NREq865xjdFFJcNEatAu1rmwhi",
  "key44": "1rbuemcd7zC5wZARvv9xn7gXzK8Rk8tZwGk49tNQhJfF8YfpgfQtcMivx9aka6XoreP1TBTPCyrE3TKahJyXWFS",
  "key45": "4BekekVbeRDm7bkbGrJDYGebbD1i2zQDncUH8Wyr2BCgri5grKscgt59JYdeMoS9rwvaNdTHibt2NnTTcfWmFMLb"
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
