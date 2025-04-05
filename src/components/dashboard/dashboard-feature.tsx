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
    "GjgfeVD3MoBM7eKsq2gWGKZwmn2J9dy2zGNy4c1rHvMeWFoTujZucPQR3XvEbQWQzr1tjYpiPELs2CdYsXtvaZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625tMKccUPHJKCwvzUMaEsCVBWSgg9FDGYeWNHN6dWiMjp2t6qXzL36tc8LkuLJZbQMP673fcU2WVWnCkdAYyjmH",
  "key1": "328SpxF7AyPn56vzNTWwB449tpaG6u79PVQLDyxpoc3PWjemD4m2z5UPdtNctjNKK2H5jCWf5cGhaRnk8wNCd1Dd",
  "key2": "5QAz8VM8mTqu1XhuSgZYBM4LgxcMyTGpdF5LMVXRAnYriT9mFo249SawssUMxSBNMommmN3uyfrCdY6vzURuwXW7",
  "key3": "3SQqEFHk3mWt9muaB2Ap1xHSpBSpBW8cX4ZWmHqdCvZn8yvKQa5nxd9L7GuKx2BBfebBh1twa2MCTF242qUP6anN",
  "key4": "3rB9rU66qPX9UD6znmLyH7eZGEynth3qESS3u6sp8MAoTF8kSWTLi5bPaGKTZ1GGXaxTuf7zahiy2zjVuwV12Jh1",
  "key5": "4TgwmiUBPrbbspWFZhx2BSBT4nnbMXKdWxufHSZ7zTxVZApCEMzbSstKsrvq5SMBd3pyNYn1HT7Rqioa1n64Zmhf",
  "key6": "3a6b9KbskA81u7GuEyGaYPPGPax6oRVWk2cCHkoJbxLwPa3wD5x84VM1qniiCYYupfrzGvW2ZTmUniNoz1Eh5xns",
  "key7": "2ug9vZFQ1EyCwnTtFjiZnA8vGtAm6mBMsx7GyYMdnHcNQFziVwyfHnKxEfRBhBm9CMVnbXeFPxkMN11fpk2jBYg",
  "key8": "4f5opyAbBRXSJ8QgkTwgQLc7kwnCSoLsfqtdWgqFcbztxbAtEjPmKTXFxeceVRQ1m7ouTeHYNwmBLQFd7VZQY9Tq",
  "key9": "4cUz8qVGCnqwkv9JMkhQ893T9TXWPyDVbNVa2owpoXDvPk7tA7nRXc7kpBKECrMPHVg3i8PHBxcYvf6Hb4DqLzgs",
  "key10": "43BnUrGZvUZryz6NRMVnR5Hq2RZdMug5MrBGQe6Nb5uapNv3xnZHoADcrNFa39TvP8PzJsFrYujfgBJPvCKWDjhM",
  "key11": "2FXitu9DjYgQ3KNRkgYJnvyF43DKF4GHfN4zuRADB2MqfDCsu1MyvxaDdRqcbW6rvFyKq11c9UE2fNKTSiE5Uy8c",
  "key12": "23fohMwXEioGFF2rr5dCzfxhp39vZ5LAmZQxkPutBzgFs4PmZSdgyoD8nEbwNKuFzz2tiEr2KztdWwXuKNucxfDp",
  "key13": "4R1oaHPRcsCACZKanHxZ7zokbiHcLK6Tb5B7rMP2TN3yg7Hs9Kh9Pdx16JneZowr18h1UuyUz9iuEZ5wNXCXniQ3",
  "key14": "5jjXSsjEa8QzLiviuuvUkK1JXwRPuQnY4k1Uu9rGuYv6S5VVG43ZH3LtQKWLkRtCMLPUVwZBwZESUHab8rnv3BBA",
  "key15": "1MkNBCrm1PHo1RbVP7vdspDNakNgUrgxdrxFyoEDjgePn31tPzDwiFTPeu9F197bP31gSvhRFAZmr16yyGoPAfH",
  "key16": "5RvhgwoCSzEnKtHGwCeZvjHjFeTczh11sRRWRbMVpKjiKNVyDthYvoccb86JyDfqXgdj4xp1HExWErBoYL1kadeY",
  "key17": "3Am8N3A3pfXEPAJyC8K1Q6zewJUqXHGSNaKS7L1PevqKCi2zMD3fgCwNJ3gzEjvf4VEGWX1TpQrz676i6n3y8eoT",
  "key18": "2Ydtp8T4gPrvxtvJHaq6s3MV8oe4XrtqyfrbXx7rKu51CVVexH2gzq5WF17RYsraRc1zP9PNxWaW4Js9aSyL5gSe",
  "key19": "dMJqE94fjeHuwPvqGHTRkyvYheEW6Nxw2tQxoTXx3EfpryXf5ZTYFmCZ85EGpido44geVN2TMbWLnm4b8ATtVkN",
  "key20": "4yvkPW8HLHXbsPbNhPEUKasYUhs5gPHkWNnWcnneScgUwdehGC3RLWmXYGSpqdT98wtU4CJr6SjRFHdGLxbqHr7A",
  "key21": "3w364tKrWok2bwTnLNsBC4w9xCxdoccGMxeSUjjms65cYpGTsn5kN7HodTYQsvqN4m38xUCD5Jsb6wAXEfd9emun",
  "key22": "RiGmBNKHdCD61Esk4aWYWs16jamrsaMEjtddBA4tYENzYiwt4erB9SFAaV1VCuUnmsjL5AnnQ2nQ9FSEZE4WsSy",
  "key23": "3RXyN2kPh2oweKpYamhdVm3iErtijmNPHAQwTSaPhLFhpxvpEQHMLFWtWZiKc3FjMhUNLhjoeadsegwSteLCmwYn",
  "key24": "4HzbnT6jjaajrPreE21c26Rw2bwhozrfikz1McdbdH4JUDWB9Bke3uXkUvG6utNuVoyWfH3eKg3mbd4rVAqQV4Vj",
  "key25": "3r774FNEEaW1C35FDxskfMLCiuinmXJr9zVzTV8ybxHdpQ6HKghBXP4GsimwBhHQfN14GGp2nMGuWfa3tuJdRZgQ",
  "key26": "3MYWusqefFxSPuJfZxJ3wwpssyfGtr2P1Ny6vDygG9z3KoiyJZnqePHS6CWrZ5DWhgdxgDVnJohxKvS7i96ToSnf",
  "key27": "5id4ij3vq6FwbNR45a8oZDmYmMnapdPw3FtixNnxHfNzyFsRu3RWByMP5JisMSZDboDdg2WY9M4gEMCEQi2J6MT4",
  "key28": "b2NrJXn2PCaZveRVAK2T1bfEF3jhYYupJRrPdpKJPCLWTpekYv6KSE9rhMNg9HRnTk2YcMkzwNzXDaierj9gBAG",
  "key29": "2BvxoJST4Kzr9Lp2tbMTPu8m9tEq65N2TQ3x4EQc4srWXcCK8y7D2MhhQcVK2P9FhHW7icYQEc57LyeuJwC2vBXw",
  "key30": "iVy89KhcL1mLJiKhf5hAdqQatnUr4rQVqFfa79zzMAznFymiAK97Js6bf9oQoFQi6GzW6Ho7q6ijVzcdUYcv7w8",
  "key31": "umLd1bnhy8Lunf2TLhZpxvPgJQBusdUb2LnSTUsvc6temFT1bbW8jGsQWCicKJUydYQrFLDW4sxrbhSwWgbksDX",
  "key32": "3pkSnpjzFsZkafnv7PDeCnhv7ExzUG3bhYacaVeKBacryzD2yM8AaQF6btTYJ2JBrQpUhp4Xk6LGKwKb1Vg7javF",
  "key33": "2DCFV8Dx9bbtSUBq9HPnGn9H6Fq3toYEAezxGVKZq9wPngB51eYMHCpQjSwVURuFJ5wcgMKk7Hz6vxTkSTSKZ9df",
  "key34": "4qLPAALmLLoykHwXxZN7zQjdYoFocGx3B6VyejT8Z2avSDP8VZWLFdmXuEZbQXBivzkz6P1oF3Kjk4AaT62w8847",
  "key35": "29v8QLLHjbA2GDs42BwMSbc5xqZhGip6nE3DtB9At6XJxAhGCBxdG2hppqQPQm5PkdGovgDN7ur2Es6sQNdiWHEN"
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
