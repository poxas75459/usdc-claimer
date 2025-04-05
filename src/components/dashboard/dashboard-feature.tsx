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
    "4xedHQGRBtGFqKm4dcqqFW99HJLnxGBzVuKBRttMW9usJ5TmJ2cxaZVzVNyZSbo5w9FrccuUh5XJjFjmZQ75hh2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNARwKLAQBjqSueniuuDPZrpUnDuxEeUdw8HaATiWMmLM5mjqzFsPtkgkhjSQSKA9XBQDRNC59uh5JTYsrXnwPb",
  "key1": "3xzsf42wCd1EqNqs5zLJhMS22s4Td98SeAcRZysVEteA4HM1mvFBUpvhiEhWove8Ub8AX6ZfDZCL8QMJf8iURbks",
  "key2": "2y1ZQJJRYwDMqvEB3DVkwCgzHs5GBSqBJDnw8p9cVsmKr9dM4M3t3Aar6sXmLtuXbKdhP7iWpHvqbMZxxy8aXEvM",
  "key3": "VhD4uLzpqotRSrVZtXAVefwvtrbyKuNidnzqNM7QHhzdXHnAXiPVjkFsMDVyHFnTUmU3v6zMBsSU3bnSZ2us2T5",
  "key4": "2f35NWHvm6x9fY1eP9LMm1nNKS5bsevYZ8p9QAmhWDCDRMPikaLdYwxVpUKcKjZLuXvVkQq5F14gYThv9n8U415i",
  "key5": "66vrYet8Ba3MhhePp9rRdPn5uhZ35MgmfPjYofdZdFFeGwH7FGiu2QBb271k6gCMxrriqnnF136e5ebfqTpMDkTu",
  "key6": "FSWp8zLVUwCZqvcZp7m8t4mhC4zuEVzjzvoxt66AJMeQcayZ26HVqVRWCnxhPVztK46uxpRjcfKksvzDvCgGg7k",
  "key7": "5PSsAU5peZ2TNS5JC9sKzfpCMkg43N9m5dmNJg8i3bb8C7HHLfq5YXCA43sBEkgr52jUbuh8jPdrP5eG6qFwAXqj",
  "key8": "3NRtLNZWHnyCJ9rZ1DwwMGkRqn8D8yzbW53tQPQJ8AWxWjFzMmLJ3Hh7XUkDsC9QopYxwaB9iVtKxfjndPCfU6Ak",
  "key9": "3wt1dh5x8LATMKRgvTxp9UGpbPnMy8yRtw5DndFfbPnucPuLSqmuV7kiXgTEFrxo7CdMY5q3NTy6WUNhaBnFMF26",
  "key10": "5anBbxkoRyZ5fURh54bkFftWZh6rhaWf8FquBjNcamXTfMESDFUpewovYwsK7sbHCMRqiWSH6ikXJxZEYaY1Laam",
  "key11": "3zd32XBReRGxaZwTsjRX3jqJbEzes2re5Gc4UrvuscGYpuMghALRP2yFDpcpdQhNt7to5ZvTznk2Bd9zgmQVoXvo",
  "key12": "2q8FfzpuKuTtA21regQev2Ms4yCZqsU2wDA6E2xq2oW5QAgZ3Mvw9mRHETL7CzRhydyyL9pSW9QLHEdsMra9iYoW",
  "key13": "4bqz1CLTiFYt5KK4dP7mV4e4cwtMnWJvtDdiFtXDkhqgqiaHrSKc11qZgfuRhuDcZHR3wq5kP58DWf4D9TmbhQ2B",
  "key14": "1uCP2GWpLY2FupzdKbevtxnB6DamQ6icYWhJcxvux379bmYpJJ2udd9fZRzuV5aWUeGrBY4gN4suZ1nBWw2SRDf",
  "key15": "scVeHwqxLdg8SjRVHXWr3iz4ZW1Spp8TvSpWa9JYGipTGxhvSqu26UYh8GU9LWMDScqVUT5AemckBbZbNToxFL8",
  "key16": "mQsQXsWv96vZwNP5XpRHkpcdWrdmMGzsYti4QeAZVow1mELMGs3KiuSdin4z6giG3tchAguBdtGafzXGXj629t1",
  "key17": "5Ei7TrEWJLWuHret2UPHUzNoRegcQpfbXqQUPYgpxEkd8mKJGtMHPFd3P8rgBGQKvB3AnQgfpZvc9i9ytCzHJueB",
  "key18": "TFYGxCEfBeZQ7WNBgcMVMXGkexEuhL27tSjgD8AwYv1Um2RwGjcuHrpLxfmzGcPLQ1QKJQDUTpAjhSzf1jT2FqG",
  "key19": "45rLErSitfhmm597MrSHYGJzbQTRKp5CzWFJxe2MtfR7mMRFcWgw8HpT6BAFhp5zdQKvcdR6nTDweoHBaXUyahxy",
  "key20": "5i7m2Mw7XmdfekJNCE4rZ3zDVDoYvxshQnT8qhkekiBQDpFxJsbpEWBims2zcXQwPrZ3qm1Z88S7NAMdtiUZTCYL",
  "key21": "374Ep2pZKeK99V7QVVfpK3wJy8juuyPhP7j4qoJNSdBkekAcDDThAYypG4x8pwS85onFnG1w1XQSeBdgkr4FgTk5",
  "key22": "AUBVf8ckiFXyErTJTpz26t2ihSsF1AbjUc4kiKVg8DaTwMkwgV52nuxVhg5LcsLJnTGxfLucHDxuHQe4MmnScRP",
  "key23": "2r2aydWmDm6WhWDEiEgvsfrkLi7wuM4Q2rHiyrZDff84YeuDLwMPt2a1THXLJubawfXjLMQeHyZNnaSZjQriLGeJ",
  "key24": "2ACejanfHv3UNBQc1QB3yoGvGCDd2Z5bxk3ggCHdNds9Z9M8UJoiBXUWhuKhzgYNpaRKrSFGKbnRfKhNnDHGQd46",
  "key25": "51h15kHD6dhvZa3TKzN6VDYJ89Jyv3S9LrbuFr6dHMxg43vF31tGNomN6B8Pz6VU3ePCrypewj67a1yeLTfrGbp9",
  "key26": "2AD7atW6aWagkzQKdqkANQn2zuF49DsKbbb1wp7Fi8kSed6RKomTY4By1YMfvZm2AT4LthkHyvghPYGBs3fiKdC9",
  "key27": "2JYv1Q7nxCWHRBjpzfDmgJm21DFL7V5cQNyehE1Wq4NcbXPaCLYZPGBW3xf9KJ5vTrNDgH2B42QPT6YxBy27xH8A",
  "key28": "3Jae2A4QdWcgeQEJWFMBa13cGbMx3AMBnSTDi8NHoKoZH444gEkcBW8r8tRN5kg5cB6kZQotikgGkqhQD97PEmZA",
  "key29": "49bxSd63GQefZdiuxAqJQ5yyE2HkTpKUHoernHJNKiE3YdZwBWb23iFQZZJtqT8bnG22qwzY8TbWA5RQ1eeE6JJR",
  "key30": "41AdL3BqsihiwTHw4esghGMxr5Bk1UbbJaSe5guu1NwbVXCUjk7FLVeEeupQw5xAcrF3pQa3g2UFE7LCuh1JRYGr",
  "key31": "2aJUYv6JjaPHGv37hLqd4Qjs2yRanvfwbiUxBeZF4GjAUWgWnSUWuQXdEdQuHB6EFWR6KWa2yjxBduUXvPAy5K9x",
  "key32": "3mEdDNUPctJX5vWkN1ZTYmVR3fkpeSw3bkHEqyZ7TQdx7XW88hMRiiFJVL3iiiFgm9c4tTy5rpG8GjWHrCfaYWxC",
  "key33": "2ox9DEC2opmGVKtB9NsEfjnD2mZebuCoUS6pTDA6suiyPHwtunMX5m78rLFjZ8iv5VaXqHzmTHEtkKCGfRdGPji4",
  "key34": "41eCiWXCMMqWd5D2RybzfQLKANPVm1YGrd84DnxQdddbHEVBSkGsD9pv1f6GpSadqBnhxDnXyRLtGQtnkDvztAwh",
  "key35": "5WUeuAuBSuC9Mjkp5JdcGL8FLFAbGGiT4jLWWm86HTSMj1Y4bLncgdKzpX4Vncj6WNDpmAYVb6jSpQha84Upv3ia",
  "key36": "4Yf6sXKk9aUgY5nUuBoZbCmnemN5cXVFjfRbtL3gzHyWufqvFgLJVqELFipPBg8MFNrMEDJJNvEtC5x5LV199fbg",
  "key37": "2m5qmxRn19GseQtg1VHXSjPXS724RNkM2AxoXyMq1QBJtVk5jec1ykxs4eFAYs4igkTmiFoSuvhmb5vYscMSpYTw",
  "key38": "5PjK64nxk9jvAh8cGnTmMrPmtWmaj7vwWjNgWtHo3r8KWtWz9EsBYdQbJoig2qBc3Rh93VAQbKYQCJVbjzxh5yxD",
  "key39": "2aSEGFrU5fnA9tM3sarz5sdXBqMcVeEnMmsYsLFxYC4gp3RRjFaB9NXYG62GJ4vCWrhM1YiWAeAVTEnFv7fM1vhi",
  "key40": "5PNjMFimeG1opbW7u2DqjmCLjFgzV8rG955T1ftU7A1QDMWgdKBp8vYdbVo3svzBKasqemeR83eCQLL6iErkJrCX",
  "key41": "5A8qC3UvQCcvnF76u8sfoaMPK74EAk26izCSWiDuTbq9rKnx4jZC7DgsSf4hZfMFXhBx3qS7mHREdJ5kGhs32ijh",
  "key42": "5FMeLpgX7pbfRHUTENi9N6zGVwbidCF8up2Eb49pNES8X1wNhCZC3NUmxVDydEueC9dPVMCsyQYM6NfWmmjAW1J6",
  "key43": "4qjLjEDjsDrTViTaucLvgNU1LkNbiAmwpVHZ8v8BjmKHS6sW2p5XAxR1m4p1ZnSgCUDu5E7siVdx7qHYWHvdRyvu",
  "key44": "3mfGW5K7jmMuddbadZ5RsvS9nPZekCur9SjgWVBBtNfUMwppNKrvS1VgsWhid7gG2BeSbaDtNARogCJmU9FiSEQr",
  "key45": "4JqPu4JcJJtQhpEDtRVCz9Dv5i8VxiAT35aEZgxA3fSnKXHDwaWVMFEqDNqzFYATnua75JggxLs45as6a7D66Ghe",
  "key46": "2sjWFRKdpuZpT7CBzkxwNLmzBCntHCQmk4xHfyztuZVLLgyJEmU2exGfUT8p4nmtPJgKEZT7kHYePAW8qRmhJAhp",
  "key47": "3zRtLFhxpqtW4ETDEg8tp6ygPnXSFK4LvMFfQ6aQCnp2X1pXHCmFMv3CwzqwPg1UrZch9SZcuh5Hu8S4aHh9AVLc",
  "key48": "4zHN5aD7gB68s2gZEM53ty5Xin4Wad11UxzLPTDonZNCTPmakvzFNN8q5TvTQGozpyVo7TkT2gcTcVAUmUU1vkHD"
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
