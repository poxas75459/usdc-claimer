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
    "2GVuoAd1NTh2b4zm7DzrRXkgTanTc8r3vtv636cFdScwf6ja7AzTQfYp8HHn9oadV55feYj2FpRGknZkCT4HgTLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAVqX2dski8PvgJeBR3HgSBs8uSsTQVzBZBZm2mQMpMFQrK7KE9PTCeP2cud8Tknu6ZKFLuApWQkLJBdN55F2CJ",
  "key1": "2wAtiPpzpJyrxKKUTew8Xp2RZYECf2snn8cPGx5ksDqHWWvoMq44g7KaA32L4UAsZ8rB69pPveMEeTnfC2g7ztDk",
  "key2": "4VmTUsJ7K1FY5jUkwm6ovzhopUUhAN5mRsuZvzC1j3GtheoXYu4pucSZ9WhC9tCodb2u4QN36oUtW38fFudyr6cF",
  "key3": "243w2RBw4JTB5Sh5F5g13Lg2rdjKyMYTZdJDe2zBQFS4eA9UnUkz1oui74e9tyMnREFHA951dJxYDHEhXENBYRN1",
  "key4": "4iMCpgJsPGB8XxvJ4JZHgg2wc3ddNqJysZN4bPJ783tW4R15HXU6R6js9DwLMiEajiKwXfkpg4PJ6g4Yg9yrRUkW",
  "key5": "Ba5yoBCRMhHirB2k7cziGp7YssDCmJriHuxS9b4LtGuhuLhT1VTEwsPZPj7rRcUaD6Wb4JXFz64i8oBbbo3rSR9",
  "key6": "HmSTuuQri6ENFvb5qUNJHYE2KX6vTcjtauX25hhiBDu8M1bzA3NJSg8xKaucUbgtcGqL4YKtNKWMoo2AduDWJaz",
  "key7": "5ewUrkPG9JhGkfm2nQc2yNPu4gVGiyRDFEZigVNoYA25ac89GdxiHA1gt8hipSnD1MpK4wLAhZTKTfrrWTaP3nAP",
  "key8": "4NUSj25DcwaojnBSK524oQMC4VmmyR1JKGuP1d3ZLTmjG9ZPZEiRbG6P25556Uts1aUCnUwAN3H851KEZLzCjqMq",
  "key9": "4La6cid3sWNFvkHWSDvd4zjdewJJQ1iYZLhg5QXF3x7uEmZ91QDNz6vvanrZ8jbn9meRWvCrWXhStXjwmMYJStGw",
  "key10": "2Rda82Cno2C6Nux8oZ6V5L4CraEA2pfQaGeH3nQib57eoGrXMrkeuGVxF5Aq44xxiQfF5uaPEZ7Me48BuSi4sC1c",
  "key11": "3XRV6JDAtbTo75UdLqCPvaUF92vdwxGVN7mhyTzC1f5ZzyDcvZ6nMwJAXFuXpDumaoi2f2yyhHLjMREyZR8KUJhj",
  "key12": "zUU7bZaYJaggDHsNVA4sTWi7sXzQv7csEYPww2W1xG9RdVSBiHUg6Xc61abXZgCGVa1ouKFc7Crzet4oeBGUCs9",
  "key13": "4gab9gTU9hsG3NriSdo7FYktFqYVyFWJyg8aBmYKV6GDvEtJWpfFySnCnPfTYnBNmr4zNi7Egtf5tuVTtkyK1vtt",
  "key14": "4w2CF779GUjVjSEL8pXT7RT6LSarVp9Pnw1Ampt4cYcDF75SFCJMGZ9qGLjoPmHu7L6PufTnGhEsqzTzw32gtG4C",
  "key15": "59FcmsknSy25KD1WUpthL4KHLsHJxxhFyvzD3KP2dgjHd3Kn3ZmwtCopeWeAPRXcYGqcbkghDqo1WCmZu5q7kvvE",
  "key16": "22kCQnrNu6x891yxvgyikgDHE3cqPG3uKoUbeUyBMsqRbQ7w5z2vcCHsUutZCgWHje4LJ8Ff5PQi1szEBYGhwW1g",
  "key17": "3KMvFhN76ctZDT3rhkqCyv5PsdbKCuDCFLhZZsEVyTH5nxoyeHRyQGJm35kEMyJWb1s3MjvKCxkg4RS3cEBRMJGS",
  "key18": "4k9UXuYae8iwuRfL1S5CzaibZn3nRSje5HYPT9fbwccLMY58HESHoUnKSf8gmQ1KPfcTPG4CPeokiCn9Jmb6YUYU",
  "key19": "26t9yWFFxLqX2wLnojnGnduXxWRwoBA3bnga5MKjJXyCm2qvJHDnPpqP5t2kESPeLqYnYst1LL9Cu5f1VZD3v19Q",
  "key20": "MS2TyXch51HAZ75MKaJucqsvnnw1VNrVc2uLGdhxL6VTbjkqahtZFTTS7gvevXZxeq5EnAB4unWUXa6NAviZxiN",
  "key21": "5tdmDh233sJ8Q1zrHZAx7jHiBhu58vrkvixNC8m1yj2DvpVfKD6Gm8FdcfRCZoTvsNnH8q93wJPNqhTFeaoZMLXN",
  "key22": "2FTcQ1j5gtDKftBoDn6ykNWsSyM1ZFwi5MkAjdtc5jfrAwxgLBLtsqSsUxxbD9gkyB4oUtQ33EFKcEpxvErNDxZu",
  "key23": "4xeFTcJzj11S9DJ8Lmtjj5CgU3t3sNPgkB2ahH7TyZnPoxBZaM87B5rnG8H7gjhWYXLsetrPq2nx6wwpnCmkwYeQ",
  "key24": "4m3Rj48Y9KmUGEdroXp3rrhZfRGdx2GTALcKMF4qaKWYJkwA3cPLkdeEdWrGHB2pPvdpjA1zYkSr1o7rJNE3PMu9",
  "key25": "qoQZev6yyg3Jo7QCPbZpGZsDtDV9rUQfBYS4FzeYVi6HDgETXCURtfzcV2yhkW6feTgCD1Km17d2g37mLCMYns1",
  "key26": "FKKjrW5QytTsEapamATjvKx7dMmozQXm4MZCLvqgGjxxppz7Vjy5JPPYvFQKqmkv6uTsbfTeoen5rYMto21Ey7r",
  "key27": "4wqALqi1fDs3Bou98yvYug6HBZ9YeyXUkFGC1FiRB5967eGMZ5zQBSAwvpRpZ3FsFhex6YQbfufGRCzr6Kg7o86w",
  "key28": "5d9PvnzbDDAY8w8ypY7QE1CujGYJpdBmX6snaJah5E3NddxRzna3fFmKojUoQ4nM9rVio3x196V1qn4J5b1VVbG9",
  "key29": "mUfYbCrsn19GYvH5zLKDW4ysokWsvp8SKFGUFiv7C2t3HvDDgwH6SkeMFeUamjKwC83KmWKf5Ss87zQwsctino4",
  "key30": "6aUoJ5yBqzH1RFSDJzVga91bxw4CX1AMYJEBLHYRnod1dZJbRTUT9xBooC5ZKKpAx6YfdCtgupuReYPiHbckTGs",
  "key31": "5byDYoZ8EjkSsXektpF6yNrtPrSm5H15BNgvT4rsyB4H592ZbbCKepAufvz9CUZLUGa5k8odzNjN29qC8DAZxdhk",
  "key32": "5NNEzYe79p1wJM68zWHEgrEmTMzuBTF1jSr9StKgteM7ZUFEAUGs3PVLG8hFNiNQ1iLURAf7Hr5CJRusCza1V8UY",
  "key33": "5GZ7WhyQxM2Vxxn2LHuUqkB4jaxzCg28auVqTMJkVwZaLaV3xYW7xvnmQThf6dAPiy4xQpmvD6XB9C3zZuuEDntD",
  "key34": "45XAX6sFRVoia1EaFbCCt7BmmFNaMGJxA9sMz16H6HREk5phKkLpZnj8wm7Jon9RPmyyjaHSA7Q6nBmYqNAiMPLY",
  "key35": "hnNWDUnLniaJt5RVxS1VqqcF8yRiVhscQdQuevvggCtBv9jSHa7T8t9K2ynGQDnLig3od6aUN5DZ6xztL2qChRy",
  "key36": "5ehfQqd2YQN4W3SepeYHbFFhUr2J9YpX6sKWL6ZXrRmVcfbk8vyDkWkjHnXaAQAaoqpDE84xLiG9mu9i4iuqbw6v",
  "key37": "2rvEXDFqKTJnrr1zh51rFZqk77A1a2wJdtM3r7mdy2oE1h1NUZz2xiqAA2gfByiZWDRFPqVVuqgNvqUnBtPKh81K"
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
