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
    "2dmfuMu4pT9Sk9HRtpEnAUkQopLwcCJYUF3CmNrAgATMvjBWmWJmoVj3wVKzMBsAenzaXHbYNGarU3Mck4fDrYTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNwPE3kBc7F6xGP8xJjQmmteczQ7EkWGGgMKSY5DFdWZ46eCrdwDXeFq1K2cFsYk29v1BUgv1S4xEraTt7DjnhJ",
  "key1": "62obzUqbsae3EBZ7jxMpGUr6kRhvWqWhqKuEsZHWw9CZVMqcZDgPeRwPX28q2exgP5wa4bqfBBEforzUBDVfpJhC",
  "key2": "61THNrseSCbkJqe2hNCxKCC34XuLdcGyKeY9ZyX1RKYx3CQ73d2Vz4jB2ZBtLr2YjUoo4piRRWHYt587p57a568D",
  "key3": "cSuc8XFBzsFtuLMS1oDVzVD5prh7wrvzhk42TdC8KEqigGic3tHtSXSibyMGXvazsHQfMgw1A8hWc6LdF2vT8JG",
  "key4": "4ghCWT33DZRtwNyPJ32hPyww3qCepcDWNCoaWfzAVxB9Sedb42kHyDWD9q9iZMdQU7BBzqubMbTuixjtbvf8WFmF",
  "key5": "5672cmDhF3CMdA3HaYndye1MtgZ52HSBukg87pqs4423etEWD2qkqFrEwLkwmeNN5DVXusWeFBSpZb5EzUigou7W",
  "key6": "AMS1KDu5QBYCDRVdR1b3NDjTgUHuDMFGQXVRTe2ah5iGJmXLXrvLh6Dzr8DuzNQ6PrdWJQwZfmqQ95UNEfHrh7J",
  "key7": "wtMpTEUJB9JdXUooLwgGWgWdeWzRMFPNXFK34pAC3JNKkms4Q55tE1LTPTzGjKndx517zbkAE5sCJmzARV7AXJx",
  "key8": "4b1zQFiW3enYGmySjdy9HsEBzxGbNTU9VDkPRvVLEe4bQnXHjsUhGzdDcDtrtd89A89SzTBrzqBAXSWqGGxsoGAj",
  "key9": "KbhaVnMmiuYJp5RpeEmEt7FTUS9o4D9rRUBg5U8ZSwereDdNKUYNrxdj4PozYF1FtSNrmpbuL5cXqpNajWxxfUE",
  "key10": "47EbGHqkJFG2Tm26Xsz51p4ECY5qis3RKvt3VsrXQ5LqWmA1LZQgKLAF6yGRnAGjijj1JMGqJTGXeNTH9zZqeV3K",
  "key11": "3eGPfiRrSKqoxx9LWdNKqYTqvNGPHtzNMfWsHQ8yMyVVmtME7GR8vRUjUdHZo9FUgDXGRWkQxikZttMdXqu6DuSs",
  "key12": "53HeUTAMDkPnv5LDNfsqiSixtAvaF224sGCtF4iudqx3xvNWkFzrU8vHWacvg2UbSv6Y8j9dLoHhuq81uZApdDF4",
  "key13": "hjB1KsPkmAnbzTwhyBoU7UqbVBdGwhJH8RZjNbwws5HtUSA6ZsKcVYktQWgs3pWaW2AvRNmNMjVDj3NJ5v2REZ3",
  "key14": "3nKHaFae3BfPA4EdEgJLwgWVmrQMx3UBU1Wdca7N176jGu1KCkwr7DZ6VWaxc6DeVGavWs178Lj8vCGZjo1EKnii",
  "key15": "4o6H6n22wodj2roeK6iBzdFLy6rDYTb3qqJwVomi7MXoibBN3SaDBBxEqmjR7p8Yv6WkC4LRkYBvTyX5huHtByGH",
  "key16": "62bSz7VoY2SHCU9PJ9RNZtcnjKNqUqy5EdMLZQUSKs1D9wMjcHnqnwk8ho9cJvQ9eV76QxQMrtxdHKY6Yxn9jjhU",
  "key17": "2133wd88HtZ9Qw7Rn58YSJCFtfp1Av63ga68zso2L9dQhbbXhZ59RjW4GfntnHfyo8TcxhXbHvZppXmUu3oqHkKE",
  "key18": "RDrgyYZfDZpdd7KmsQnG3eCE73jEpSjfjPbj8wSyg3TSTzYGRazRKfbVVBTqF2QbuMCr7vmCEiQUVRgPPvnN4ph",
  "key19": "21ttCri3y8gQ28FVhGZ3RTvCx4wSjQYsKBeUs1sYz6Y6LWM8uqvrLU8NBijTWNBfq9r7UJeDiU47ZKy1x21YrDia",
  "key20": "3opxKhEwWp31myrGJeBrEiqZWSNMPNbiaigBzUzS3K7yjXcn9WfD5WToFep7PMVkDaCHgFCaKTraA53aDXzejYCp",
  "key21": "4KRvCBX8RyDLWcuDjeZP2ZMJYND1cx8GRoFd1jjkHFvPWhbGvFzCJ95HupyCMH6f8W8N6cZezt4s4dJ6Y8AhwR6h",
  "key22": "2afZLXZuECTdyWxNk2HPn2gYHLgQeFj2zyJ566rPHeU3aAujCyU31e1izdPRomqm3WyTiz9AjGF5rfEtw7JHYgrp",
  "key23": "4RyYhaUkQUFsJzTNUT7g2guitmXdZvAs6iHECxCsPoPsBDyNkSRQzZa7LGzEFzbBuDmD97MKtCia3gW75AadDo2T",
  "key24": "2cNnZAYxav4iH2QMTau2pwuaEoibU9aa3GkHWmdTmkY5WRFj9uCTRaXLYdXRVf4R9DMFuXnMe5fhxyFRf333NMLD",
  "key25": "5yz13HwXUjJjhELxhhGdZRUWZLn865EAY2VP8vmRnBoS72ZaDUDnSzhLeNRwqt3ZUAHkPuZt84h6LwUF7MyHEGoL",
  "key26": "3b64QcxeQAXg5arB55GJVDReQrycFVyuivGmuxNDaXwETFCGUjoxzRfM9ePeBdL4JRvzH5bPXrqSkWACYnGC4zWp",
  "key27": "5w2Gq9Cgudc9YagsR8meFyDAemgeeCbkiyc7mhkQW7z2x1bC8EbFmADPqsdg5qkJaTSkZQ4HLC3cGkr42535LvxR",
  "key28": "4iaAkr18ZndEuDxJeSvHmWRbCcVM8PTd3XaccT47Rwj2iMTk5JEuHQkW8Zku48P6teXSsC5SQkbhhAeqXT4Y69DF",
  "key29": "612J1r7CHFCD1RsxfGpVAcJge5zH7iXejXqqJeJHPPvTsS2vGtLdss52nf2LeyqjBPE92H6JVLVWpSrWwyenirBs",
  "key30": "61L45TVfdejHLYXwg7mknPBgMyTeUW14zyHtj5YQQexWpXZxyGKuLvyW36kLSSQbumTPEsLcM9R99K8DM4XQog9W",
  "key31": "4Umy3qYFNqvUrn6EWK69td57zYo8P2nVZfqCyVvKunRAgNz879mbT8tYympiy5ULfZawXKZpwaJMHxqNMrxb14F5",
  "key32": "VhiKbWY831LNcXLgVS8NYUrNLRNJVfYj6E5ZpEvKJZT3tisok48qFa7o5ButXzAqCaqLBMGCX9QcAqQCGHJ4a4t",
  "key33": "53UnuPDTrLgKHm1JH2UTV8cfgAitsVsQYQiQYD9PEFM8G7KkLF4egX4zhhkpHQKtDCDsrv4Tq12C3zYYfuZCyMid",
  "key34": "3Gkd2vrZQvUS31fA7WDJtvuNDbYNotWWeZYYHuCyTGDzGyY1f6WqpgyEoPJx8rowGVuaXpmLETQJdo79czFk3xm6",
  "key35": "3EiNi8dfHMThBnMtgsdScJ4BcLiAS4zjGnfzM5NhmKtdeBEwRvGadwej7BeURFWrKs4sCHF5zajAB4dFuSSxKtkk",
  "key36": "2fza4jrjupcH1c3vcjcmBxNeaDJRXK6XRxSvA5sXUuMT3ayHw2WGjvtfWUydo6pMYfPtpP2fEocJ3z8VemWMryts",
  "key37": "558Jn67j5y9iE8R5Cu41Rbk6EMRwzFgHgdX7gqXk6RpbMbvux4hrduMgogwb9R3kv3oEBme78KPcTYvsK7627aty",
  "key38": "4QbhZ78LKWuEvkesupiKkagEnvnEXtdVYDXCbfxytXbsXRL7iF6AH1hi7LJZ8hF4HMHHcj9n4UFHas9FS9gwfagi",
  "key39": "5TW1oJThySFTS8eK3ySUXgCKCj5fDrzCL7UqCzKAV12LjPnTD24Z9qiaZZTAf3xipgpDi2YoqcCsTDu6UKxFx1SR",
  "key40": "3queYjJtWTYA1Qtfs6fpxSMw79zWLACNJwhoap2g7TXms3Uux9YwWFx4zGMEEzNUqcayiToACGQUqUS8BBHMqG66",
  "key41": "3frKxJ5iA9eBVF6sZNwo6EHmpQHW1UfFL5dNFaNoFoeRJn7BhdW1aiMm2ANVRTWbQtA2aV4qiEeoUkesUtVZB9NY",
  "key42": "5skVuQ2GGEfDfYQL5tFAr8c5DGTeLkDPesQ4WTuDzCxFQ4qZqgroFAzrkVHi8mddrW4EcMB57MxMNmQqSo6oaHc",
  "key43": "5KX47BWNzN1q6hsfwsG1ntUryb2wdxoPpKNZyEYRX11TmWWgAiNDiD52DJqJu8HuHxmnyD9tr8toyLuBvfBDkzBb",
  "key44": "3toGri9DmmgdcsMLD8q7jGNrXgcvZZBZ3sJoFcfmjBYuimFGpejkJMDNGMrBrEzZTaPdKQ6RHaubTGwMe4D45oug",
  "key45": "2zXAVD1jG1DCQNjeHFuXpyHPXbE65CAdw8FxNM5mtZzMznGDyJHb6v1MrXM4kbkB3dDSRTd8tw6hewd251RXwYbE",
  "key46": "5fdUHvHPj2UAXqatGGE7LzuEQPSXXKUiKXHYU4GXo4U6WDn5Wyfd7AaQN3naUA4sX77S9pcUcDPXovtYnffU5BuJ",
  "key47": "4xWjnXHpB8R91u5K7AX1CshMVtaWqvh9iAm63FhqqmWjisZGYuq8SxSY7ySueTPbKAF5zkRAaEb1wW47dGu4c81D",
  "key48": "5Egai58NisPz8U7yWonYz2LfHsxnspf1rWjeMSdXA6Tgune4y1PqBNyaWpknRg3Lf9SwtDZmVxwM2mPih6e18ZVn",
  "key49": "3UsXewcs3RBiFsSbY2X9zfCRUJ8m27HDGRsQcKiJCayciSvubMYnTDcr4TAAPnxVQPUBHpjNvSQLxyXvirqkLtMH"
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
