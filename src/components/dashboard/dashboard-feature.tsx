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
    "26bpCLPUYNiEn2DLe4LtsR9HrSyJMmVo72KZQiuq8RAcsujTREgB8zXSkA6ZKUqW6GpkYPbpSX8yFGBSPEn3HgWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrnSuv8sxWZZqJfj4ziYXJpSBurnMSBWaSJh68xUjejXAU1S1TExsRRF5tSic3rmSqzM9WRAhfoNs9iGajkKRdp",
  "key1": "3pozdUj4zGdpr66YwEr5HyJV9XJGUVJ6syEKDKJJv78h5gTFS3uACy1XP7xmGZ6YYGC43E5hAeUKdAsyPJqr4RRH",
  "key2": "4wMZjkFusTg3SPHJadeWXMN1j1nGUoJe9rE6vtM5FRBh9CDSivkC3xsA4QGKo1o7oPejTJwSDAjfVBkgeqE6urJ3",
  "key3": "rEmJyNFuXQk1wEzGrfEAGWTTM566FgZqrmAqzWPz5MSUpihdMsPm8XQepdqdATx2ZAizxtV5jXyaRF7QjaQiUkq",
  "key4": "4D3yTTVUXcF4Am3Sw5i92Zq1dzJLVkMVouMNjss44ejfKU1s3YNvA8my9XNT9hnso9dCLQDGWoWRrGtJW6uS4mZM",
  "key5": "An96RLD4PBpBbUQjKnMdr5TNGXRgvCYoX2jXZMVNutz9C3xbTU3aEUVH2wu1Kjp7Z99796mT48aPvusZrYCiMJj",
  "key6": "SFr3L3A2n2e3PXspXLgcYyMVvrNHsXfe1KStTvxQy8qidAe5sUbmjTof6zDYtCq8z1qyy2zKzAZNFPY6haLW8NH",
  "key7": "2gDV1VgyWuUWdEXWiM3HFatCbwBpnr5rS2KL5DwrJLgfed2dNgm1yPcLgMgiJDQwP9wc5gAE9kr1dWB862dxepaZ",
  "key8": "48nf1F47RcyRqewRHksv3fK6N75emCGN6LDeB5kGu59cn8Jt6RjpKjWzQmSZPnmm4buvTW1D5YHUDmA5XCi27V1o",
  "key9": "3YPdDNXmUSJkzBKRjb5gKFzKbXUsnE8CHkif3JMS7EoEsvrjTaLW8mMwWrw5hbmKyCCQ4ZW731uwLy73Cgp2cmBD",
  "key10": "53qw6sBNhp8P4At2ssMtdozscbYMWBbrCHkBLKmkUFaRgG5QriQ9yb87vrzBzF8pfHJJgckTtgc7Z9uFA6Kxu9tP",
  "key11": "4sSuWhhGTkxXLNQzMDHkptd6NHmQvsYBw4x9KPy5xdi1xFeAjCCXqeJ9d27Au925p618Mk5KT1SymWAQbX2mFKp3",
  "key12": "45yWXnnBYAbVuecmYpCr4HpsQ3mdhuYC24kPJc93rTyBhbQT3VoJcZduW8pCY52t8ArZHavxkSazPhJTzUcMzunV",
  "key13": "2S1iRdHYBkVwighwVZ1resgaJMGHwvTxJXAxRjwavrXyDriqiP6cqfJoEhyQm2wj3ewcdJVMGa3pR2xVxvmFAEk",
  "key14": "2yaAARbpnEXmWpXQqmzwiQ5tmy29jMyTaYch7nh9CaF9byCNoixmF52kF6QjEuvkY38Pf1NoF8fYt5yoLuHhPdhy",
  "key15": "3mXX5T2iAmbsZvyTGw1AVEXUfxbtbpiLtRjQ74tVgPH47jDsk8ppAquoaEA1LPNa6c8ysGFENwUebLZXxf2aVvmN",
  "key16": "34k8hycLNGP8ei2eFEz9DcJvu21Ubr2kujuxgzdQWMFe1exxpTq5aoBZduvDH7twkqADYjL9ii5kTsqb6JB4zrP4",
  "key17": "5SaNmVtde77f12y6B7YNGbtNyn8dQtgsuasxejxPXkGYWg5VuokEw9gcFGqnz5vvNDY7BEXpZa5jfkWewgSEZBLE",
  "key18": "47CzxUuwTCLQD9CgRAriAmKSyzsVmryFvBo9TbGF1AEiCsGjwpsvwfyV2SLoEaf5JbGSgvsW8C6ofzoTwAAkm7Kc",
  "key19": "2QmAz3vPf3spMTzQexbVqBGc5K7nqPvgzHWUaEKhBbYGpZbvduqnBQ6nJm2wHJWmjLcYsT5YHwWA2E5Macy7ZrQj",
  "key20": "4mwLokoPvMj8LS3TiQTi2E8z25eQ1Wh8NfffrmBgwjqtgEGcydDPLMXKW2ieteG7so5rsT1DgUtpuzbbrzScBppq",
  "key21": "4VxuWtut4CauDiD3rqTaM1qCg5M23tgFA7E2Eezhq9HfqzxxhKcq21JjoegjV9riXcFmNcRcrfCMgKT8cf9R88vf",
  "key22": "iygyi34odhm1uwW3uShrKkyaF6S9Mh7khw5GqrwhgrNFYybYmAXJifYzeEh2wrEHMmKsnmX8GtqXBofXJqi4YdR",
  "key23": "5HsiP1mm1SFgc99iaGWj1njCFLtQWxyR8FNmD7eUQpqJ9pXcAAao3MFDyndM7fxC5tZ7hFZAneDoUeJFqrpnu4jt",
  "key24": "2H91ZvCYZTfALv9b2fDtqK76uzCqpWexgBRrMsV582WJ3UGguSyBRwwMM7yyGkAzket51oArsg7Yjw78XQGmtrS3",
  "key25": "3ww6oSbLLGqfugTcqoNRv7hcazjNT1yvmwE3qwsoj2ozPYe7QdVixKgjAgkZC74fcD8MQ5i3ycxr6MMme2HfYuBA",
  "key26": "5kpZ41y44TJCZk3PBBUJbRxnd5Qt9Fm7tyVhyipZG9kSuUJVYY9QCBHL1z1hsqZunz8Ww69DsPfVzpTQRVdLMCiZ",
  "key27": "utYi39iH13cpmUGFxNrHQgSzFfNaMEa1yhyoC7twmvxGjw6ShkuoNkPJkXTCtf4KTF9prC8vsYeCBhC1kX8gZX8",
  "key28": "5DfRZvfPwdg7XmqimFR4wBgct8sLehoLr9fpT4S1xNyEgZdqYHC5wD9hg5Bt6LvUvAkzJvwpvTiUcvYcpYeJ3yp4",
  "key29": "3eHq5nYAaJqaeXU1j1Tm73DeEpvD2uHPWNum6bBseX8waxAU7bzwQeAJnqE64ZWBerYGfaoq4aasjhEewehfn1Zu",
  "key30": "3G37TYFGWw88eWTHhgkLXjLaki5A1gcoUJHqChAiyiM1JtwZcP1uusBwQ9rgRxNmDtB33FMTS84gtZd72eDRQjqE",
  "key31": "5YKptHNyxqSqp1N1qcLjZDjM3fGuxPxEQ88wcM5ivEAzZDLbed8YDF2K4muuFgfPUEMEBBNkE8RPKBFFuGWxC1b5",
  "key32": "5noRCZvNdgbpHwqerYZKHBegbrHpgGM41mTKBQi1qqw2A6UcC5xcTEnLZg2YtSLXeW6PctHN5GTnqygWTR5NPq68",
  "key33": "2bTYe9rkr78RogUrk76GG7pZSjjCyhsP4tjMnsy2Ww4HpPFHeKrDyxexwLPxK4v27y3B7kzLzx1AAPxpFEMyRZBz",
  "key34": "3qgh577BzU9SwYaAywomDZCS6KwvRNkRbm84cxvNvRP9yUJWfTSR615cy1naY2C6qNX31KD9eYpn93Rdq9Hq4B96",
  "key35": "2Y4aq7ccNAj8yU2cNEFcSN4BirWYS56xqNxSXjrNyte3tWEe9TMcpvMdcQ9UGGvYrFYgTKQjSX84sqqWM1dxZm6X",
  "key36": "3HAnG4p4wbTpZ6XaJDFdrxW4egU1TzhZw66e22aaTWyR7ZoyqmnS6jxYg7KiMbigA5TY56XXfttzphzrRMj7QQau",
  "key37": "5ENY3NKvruJ6WStpYmd2wdjsEqgvZV2sm13VGDS2hNoSyeT2fRZKaJDksaRbrTh6hHCmDYzw6hT1XDjf8qoRztPq",
  "key38": "3QeHnJAPkV7cTXeXkNKs5gmuKJSthNdkgs64iUGarz5gXbSS5yN1Pno9dv41nwdA7k2yVPXcnWbsLNAGw1eADF48"
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
