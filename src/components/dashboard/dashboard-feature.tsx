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
    "5rXwxZUge1NEsaaNWRg5FT46UqQq4Xf4JHj6gbC34JdWUdwScdTceqt2CPeYnuHYp4aJjzi15AmqW92Cnry7p6oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GsptaWZ2xbdVKV2eLgtVpR3J42BvCJDwdycJ7r7Yc6XPhq9pMfcPcYn63hHq6cerVZXt68znvA73yyBCNYvdaRZ",
  "key1": "4v7vEpFqrVfP9gLn1Wpmhb6bzTNBUcevF5gVVoFDvbxcWkUgJn7xpkAH4twBNZN1aXC3eHmqnzs1M2KTtCCZdBJY",
  "key2": "5292YhePAeYN4uwpEfqrc8FZjXjXuoxhJ4q87WchkFuPgW4dt4bt7VFp8FcG54BhMNjaTHdevBjSvGH32xRD49iB",
  "key3": "3n37MAUa9fQV2kyxYwE7oj3wbecg6bSDKjwjWKrPHHSEQTLr9ced9Ci7KLmcDhTdzytmQLFP8k6ZfVSkc8hf9o3s",
  "key4": "5zcNhU8uCHVAgabSveb3BwJzBcW6P3PB7rWyhLQntWrHPNRJdE49Jn4w8J8m8JcEqPxW3Tg2hd13SCXRFtkXYmeP",
  "key5": "5U7QP4YNR1THWp1asaZz3vAGguD9SN3qSnw4RU7h1m8L9ZWSsmh37PpHugQaZG7zTXvVWqrSp2rsjhmpgjoJV4dR",
  "key6": "4Xj11491otZjSpHtSBX6ZdZBKGSYyFfwz4fR4S52zBwtd3CnDbysjXmfLJwNPd4w82vtX2ocHpuN2Ycm5ox6Hhfr",
  "key7": "6f9muCeJ2MKo9DAHu5LdPFtYDuMPbdZaDXGHuizdpWnmLyU2DSwH4PbZuoRe3h256ZSfDmCsnChJhvFb6cp8xLA",
  "key8": "hoiLm1juH8LdyBi4HwfaGvtcEFb9RURrHub7RWaxfNhQipFkGHVxupDSyJACLx3pEw6C5YwXDJcVsDh4Qr2oEgF",
  "key9": "4W817HsUDrgXdLojUDRPm2A5YdAZfrEvSwsC91zLQXySdD3ZKjKmzj9dpc2cfezRRYzqiFX43TMuCxApUKx6adtK",
  "key10": "5vnMUcssj5F5HD8tpEnWB3ZiricWGKejjNyseYfMjhjycMmpfoNHQHgSA2wT2KXy7qMd9DbEtfr6nba5PhpyAErq",
  "key11": "4PyF25ueZFh8QNtz35TDaa7YGsN2JjQHaRhcvFz2tebkRQ8erqHiqTW1MfXxn7HkwoPUy9g6DSHDtaVZQrRJmcbp",
  "key12": "EEyGHDQEKKeCX4y2Srmo8FWB3SYG48g1QWAvihRt7NGriRi8ZZjZ7BL44ApgKEm6qr6cBqZx7TX1VSsBzVvnUnJ",
  "key13": "2cwVfLbikFQaxc4BQYu2XToN4jRwmsQJzaj61VE7FKCTLXJpxF3jrTrw8GVpRvroYER2iy735GSYNngmXR2fUhnE",
  "key14": "3oaFaXUDVdeGWuJzg7CV1zD3pQVftvfCSKchU5rhjq328jwr6eWJK78n1ntPTXkAG2LWZdN1W4uUREtpn6L6kP1d",
  "key15": "2R9BTJ37kKcM7foNynwmsrEhEWF3CoA1qHpiTpAFQ5d6MVn88g6toS821SiAidssL9rPWv1GtsCGkbdAvF96N5y6",
  "key16": "4Luw2mFBKdZEvD2Mp7UUTvEW6j4g12XQPfCkPfMtyLeBiAq5UTPYhw3WEMewJmBmFBRt6qxsYEjUcK1YjCMaCdm6",
  "key17": "4fMuboD7RZJwUSVHGZgL2EsxPwftL2qKZhXhUrXVgbcVne6K1TyE5YmY5V1n213mj7XNtdeHcBjTzm1s9PHcoUew",
  "key18": "4GwjSWF89QiQqWenmMKu3FzrD3tqSVTW9zDPbfdHtTkxYMwxFpr1Rhbwx3vyVBtayvVtmKJvd75PSByc89Wm4j2v",
  "key19": "66aegjx6iMAtw4drLxwrvjeo83zqevtQv51nu4oP2ZTJeRpHb5K4Hz2UTWXVx6a3DwZxTUjsjwZD6qdWjS6cNK7v",
  "key20": "3mZ2exccLmSiMc18vA1weCAVn21NmQ3VFyCZncim95JjpYS1zGKLTnyEUwKSntbstemppcQJb6B6ewBLkfEKpyqk",
  "key21": "217HUY2rrHkHeHoT5DuHByHXPTBFGqv5z7YppSGBJuSkf9sJMvQuHU5ywW5Di1ZgLLLgzFUJXKdAnQBd7V3LmaU2",
  "key22": "2afWyBbMTn2EkuJPCFvCzphcgQPznCQCJB4tQn4Jj7b8vRenq3BDMdgDfk3jgahQUbYWGAB9fFY5dWv4g73t2eFX",
  "key23": "66gEDS199tG3M6yi8v9cE1wXRoJb4VKmJTYD1CJ6ypRWP1w4kSfJLmZLySVD1CZS1EkbE1BQsbW8W1b9CcgUuige",
  "key24": "x1epYDTWH6Vmwkv52QaeoNHfHWnvzH1AzgqMeVpshN8L4faBUcA11kY4yn5aZvaVYbL88ghv7LZUa6rnRGLa14U",
  "key25": "5HGxCyNn7HHg8ByQWoXw73TP95ge9kqducFsEHVutabvij3pVEnKuG72gX7dgrDkJRCZaTapxW6M6hZAuQVzPAQd",
  "key26": "5NShaqoizJq2eEtntNz8PNTwuxNdJP4Ascx2sDL3ELLmJEBasppZFCbhLhEvUfvPS7dkQGascU7AphUeyFPLWb2B",
  "key27": "5BYRkPvSsidnuhrAACuKhCQ9sWKXobRtWSkkzuZJLst2t2kaJCRUeRDpv7sYxGw8H5pigmZibQkwvCY84PSDKWB2",
  "key28": "3QE6sG2eU9LU9v7KMeq9VhKTahcTevDX3NBPo7mS9KcPZ4WhWEE6HiZF2QFoz8fdmDarsecqAL8Bf5rgr6gTPLTC",
  "key29": "5jBgrBdEwMbPdwu6mEFtvBpMuskPbZJwBZb3i2pdtbhcEoBW2p24khSPUEAJgk8xHdERDPBaQXyg89zmT497R2Pc",
  "key30": "3Hhr9Bd41bqpd839PDHs36oMYK9Cg9hA5qD5CrnNKEiegFkRsBohSJRAW3MrANGnW1uXy6ZDMFakisjUQmT4BhXN",
  "key31": "2xsdRWhT9EG7Yq19uHbKNFktFmtgwnXozUPFpLJftxw6BUDLc3R8TGmmrFB5bT1P6qSWJdxEgTPc85kBGGtPZfiq",
  "key32": "624F9gChEFfHNKSqds972XhyFrz3bmp9e2pivT5XYhvJqDKSTG6r8qvRRXvjEMXMneucyKTAppQZE4143Sx57eXV",
  "key33": "428X9CrMF8WEtpyA9NfBHyPAEQ2Hhn4Bhq68WNo6VY2fqL9yL8WrHyi6bU1rjE3YmzYes1nHbCHYN7xiBM7FLxSN",
  "key34": "48uGN1vjUngd79g1XLLMb625rb4oekoLnWLCfbECBPrXUFdPayPw7x7oZQ1miBserLwGQGSMtW84z8cVJokXrfxi",
  "key35": "51JTWviLrodkLmmmvRV7yBxzHaxtedaUyRkTMmQoL2aGQc1K4PvhGZm5GHdBHzKrbVozmNLyf37s3wxNmG5B4hNi",
  "key36": "37fJBBsKbjnTgZNB8Bcahp4QaCZZiHyLHLtvRCYwoLg79pSVV7G4YsSUdtN6arc3CF6z8M3Fe2xLnuQ5p8nXEH5E",
  "key37": "3cCm6ttrArACw1QNKav4PWgDzgNbKUMG8xsgsXxyrNamP3pGm2eXYrHi6n6fNpGUD9Y7gnX5tZ9x2dmgG4SYnrrK"
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
