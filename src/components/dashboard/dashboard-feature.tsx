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
    "4dGKxEmVDtFKmA7z31KTuyEUdsnG75oKtWqD1xS3z1hb4x3Ct1s2WrJHWGPoBQo3a14qqRMXvsp9rjGyPsqq22pM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zr2App8Ld9vthSQhgs9Hn5vJRUqb4MxhcCfcAgHmMYB7DNXGtiQkb3RYSRC7V1axThQBw8Fe1xR5dJNm12AZ7MZ",
  "key1": "5Gu2eGCxsvhLoKcSTD5SxoGNCNcs7NUURH5AivWuQzWPNbAe9m2zSVeVVnrMdGVEdkrDpxhFrYygZWn9uvyXmXgW",
  "key2": "2AWJr7o1n3hbzjpdcm5YpLXpGNtc6eaS3QnwT7Kp5LtdMsoZ9u8xyNXoGRehPfxCQLUTK5fuQ6nZ3Sz6oC4HEKeg",
  "key3": "jY4svVa62Zzvuhhd3HAAoqYGP2YWq2iPSzisMVc9dTgn3jeeLhUAC7noJwQ54HkaKRRkDhejeXAYYTobqQDLsXh",
  "key4": "2Pn1KUxFfpB7TdMecryksZdm3mEQ8sY7NwztZubWpfjtHg3QyWmDAA3kvj3KXiFhctL6jY6Mja8DXF7vqZ5LuMS9",
  "key5": "3H4y6Br4j7TYH8u8GnPjoND3tqJzTS6DnkrdLNoABvCbuCZ2mWN67wAZAyNZMfM7HFzaApvfkRfixns95NZHeke",
  "key6": "3KzRw2PgzGFbjXn9Hyc55KGXeeuViNKuJbxYHUfanZosBDXZdbMWN8k16E6vEkb7GkocvZnnhZGB4cq2YGMB9mHo",
  "key7": "2NpsZ3gF5qVjgEYF72eJNN5ywusTeF94wLX2rWJFWJsSqunawB14ryqziFV64mnJBHMG3XCoJhPD1tQmo8C3HkdJ",
  "key8": "121iqNtEB6HkdC86WQ4RnwnHiTq9RXqxAFzo3cBzZk74vbANB2Pg1qyeNpYsfZAicRTzjZcQPpBvtdYLUHeJHw5E",
  "key9": "3FjskKmRM8wHJJbYHbHG1KXFpRfR5g2S3Qquf2yTgwtJaymXasZ5oTnzyjE8xe8stHEGHPKRRgeHmYXZju4WDwp9",
  "key10": "598Uvt6r5BcMfZxBmW4Fdh4tgtYAV9M1z59MaJfRjxEnFHVaG1L2RWssmZSAq3JcRRoG3EJWAFpPQGzXnKM3MbfX",
  "key11": "3BvGH1kdW1jQ922uSNicx77b6XwtfFpeBK3wVnqfWw4Uek6dwS7ytD9SbyLQJNmZedH516qcAbRbLJekzhGVGGXm",
  "key12": "41ir6CbVjZmeEpgetRyYgxQJZft2EG9g3x9ZAPcvrhwHMEV1V4g2z9QPZTuGX59ZpzHzY5YkXoSxvTvo7Jsicuch",
  "key13": "2AJ2M2CEd4eFEZt2XFWcu83PkYuZX6uBNn7XG237sufoAtBpWWme67d7o3b25uPL8E2zDXsYQ6327rBpykTRCGnH",
  "key14": "4z2Sgap8BJPanibF15LXUcjbNRp2gXYqmac7fjZci1nLdBDJ6Qb15t3NFF3biri6ShAffBg3ogBvfBHNjjXUHNxe",
  "key15": "2U3AZ5kdCSQtreDpVnxUDBfJeEbH1ec3nZkbTvh3Qpip36qFv1c5A4gUCGSvSiC5NjrkbxAcFRLiKJPmY6sAsKgV",
  "key16": "2jwvVZ5qCU2ErRvtQvQ4bMQPTXN3ppfCC7LYSSVBAhFGL8EDQuyUzxHsgeDY2igStP1f32ektdSkpnMLaAnP3PJ6",
  "key17": "DUGJk3X1uPmKz6PRVCMom9RD25LY17DopeDbu4LkYwzgtiCeNmrdsMMKe8E5y4YezaqKWXCX7DAQgqwzLjSsXhR",
  "key18": "5WDqJiQ47pRhK5M5yLuY6UwmaZ9f9MtAznEuTeP1nP7gnRr8iHV9cWxujGfpEh4968XmFqfXgWESCickRiteSNRD",
  "key19": "2u3E1ENWempHYYewcvQKowRm2ewHfveVJbk6f9nBP5GF8LQdSyCrukx1YATihRooME9bT9Lq7A41zDZ1jcNwJrXz",
  "key20": "iat25qzAHJd2Ub9d7RhPo1YiZrkmU1UUbwSR3F662Z65W71obtPfMeiqgdr77cvjV9frACFp3p8sTjs7yTR5iF3",
  "key21": "5z3pkfiK5HQ4QxDJkhfTQqRguNrvXSjUq16A1z59hobcXhPiduucmS8ap1AoqwevwmNGJ9RveuqMSe8b2YpeUkex",
  "key22": "5a1khU3BLWiBDrfVNSLMqEasYtLX1JQVTxsKbVhCKbmALqEK1nVc5QBfNvL8xg4uWgNEzwYatqxhVXh2nHY9bKZf",
  "key23": "4zRGKnjD4L6NFvKAnYaBuFd5BuUct6y9J5Xegv4U3148Ju8mBM8tuH1d1TyBdUdkfnDdrhTvCjtZU76zVwZopfZy",
  "key24": "xJHE66wJ5yQz9LotwAxgv3EXZpiBCArHDFAhRJvay51fwL8tLaR3ifvPLAmpzecyT9yLinbXU7fX7Gh6mTzmUh5",
  "key25": "1acgpxFWMCaR2fMgiASCsbwEZ4usrfjdZJ7RdjSiLndKia1ydMEcAyXa9Hme4e3XjdJGWs8vA9cW866tXDcCGho",
  "key26": "2JEgF41mPw8gJQ3zaaK5saEhMEuJeAV3CWVeE13GyhnnKgrHV6bQEDH6LXcvzVvDGCmbbfrhs8DnZkmNEPfaGqH4",
  "key27": "5qfKDm4Gr9V8pKWMzKxirQ5XHDY6r56HQ5gbJgXs6tTNQkwRHjzR7qXz5x8HfgN1aVohCihi7VJnKg4n3E89X4mT",
  "key28": "34rxkJUGThK5S1X4CMWh7dT3BLUypjo5dMXDpL2xKeFf1Y8gaxDvEF3wDwiEyuNaKHZC6EzNgg1nqpJbWDU4LKih",
  "key29": "2JnFtxXSpeFa8weYkWAbSVdoxRug69nqhndcXngqQpqxv2Qz6Y1wWCs4t4p3ABXd47Bn1UpM8S6fPu2dDG4XFhkD",
  "key30": "4DiBzLj7sUFann4xNLF6kFVym5nHMpKPE3s1MVie2XgZPw21kBWUmA2194HCu7jVbfNWQFYDByFHi1CX17AoJ8N7"
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
