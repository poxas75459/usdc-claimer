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
    "5WtB73npoas7z93dSX2oFpBCuquJuxLPQchCazeP8baA87M1mevwPKt2qHZbn1Y5V2RF1hibRFVeiiZ4Xhy7EfWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWr4VoKoSpLrebGapYZWYgsV46KiQtW2nWgzdBiFBoMTwRmQ8PjJhZkYbMG1Qb6FWdTSMDcdsKc53PjbzXNq4zw",
  "key1": "GgnpoSfsRuAwNcXhGnKyCU1hXiso7SWCScZUpZw9nxKCrU1zscD6LG2E1zru6uBBQMwCKuyz13KayYAsEbicX2t",
  "key2": "3FQoz5aqc796ffQnkipBxxt6pkBZRcDp6vF8Zw4YwC3HrYDbzc3KvCH7UBk784Y9xLqtXsXAwBpNWgqPjsHqnokc",
  "key3": "5dLAHo7eC3nUnXoFDeYd3pkKuz2X2SKDxx1h4EnqHZwa4M6PKAF5pYFLvUs5Gmjxc7ganPgAunVpCHqWR1m9wzRB",
  "key4": "2QkzHVTJGzY1idqK4yppo69ki1rm5VAw6hAianfCYpfevXtEAJgGCzWPJ5MYHtYzBtxbcqwz7swC6ias3rBZEJru",
  "key5": "gtRyyLLiRPWGtMCXHUr4n5qresXy8sTvELuLNUxhsXNLxcJksmtavGnnvUMBUnXihVy3xW46JdNHrv9WFXWPfRn",
  "key6": "5BCM5jzE4K4Sct7k9Cfg4ubcq8WNDZDJfxJFpR6NUqXeXMX28eYENQgg4JLbqbsE9wBLf9t4e9k5FgBijrAm6EJw",
  "key7": "4HRWwiyhHfgjxPP3aCsTmRBLPNShJHh8VR1jMPoRziScHZbrhwqjidG6xW2iRwpGFxfKt8PHANCPKtyMp9A1kaFd",
  "key8": "4FCgyfakBkxYb4YqqWrcFuvSanpvY7DBJ5MgfpqrRfgWSQsTZXp33UPkaHYnnRGoJxVrL6gvi8uvGy2ggA7LShVt",
  "key9": "3V1hnJrsfDBBsTvbvcC7bJRrWRGjnHu2jdoZCSUSMD5SDcYsr3Bo3SiMcAyYkYfnm5srmUTSTo8Amb69Rkp2beJ5",
  "key10": "4eqptRugkaqrzttCcjyY9UxEaCYSeGoyt6dFqDPEDHFgvRzCJi4dvTkx4nnNgXbjVSoY3aQZTHWVTNb41n45op6x",
  "key11": "5qDZ8jVj7AvY7FB6Cz25qNyjqJBrxbG8NQfN98UD9pNicnGRFSJj53VZ6usYDaQRaSSDp81VMkuQudvehofuvZEw",
  "key12": "4sCAxjEymbA89F9qquyPeFYcZz32o9YQehLU4tSbZYmhTNxaRhcoqGqKDfriUJtFHjSuzvBjXc2u37xSiymZrJmY",
  "key13": "5f2hYCZMR2kWnTp19fWSfw1QrfwuPE4C9sTLJk6Jtkpyv3BhYZTYtZKK7wVNrMuDWAA2j5HCS3AZfrApvyYKjTKm",
  "key14": "3WAmM5X9fEtMs56321Fq3EhPeZDhfReb5WpnYz4WQaVbeuNoxS1StoFAU1yiZ2ZyFfDgnPProUHZ2HfBn2E6317c",
  "key15": "5PL9uq5AF8WHVyS88xchTU9xcVS26oQpMv2YusZjSaviCcMEW5WSVANJA9w3VFoj5W8AtZu4uMVRk7da7q3CHHMS",
  "key16": "4FHqtYHSnaBydsH7C9iCGXADsAsdaKgbccouEDoBeuUD6Y9V3rXNk1sRR8L1XRN3L9MvVMEhGvtTBxXW8CW9YERY",
  "key17": "2QiLg7BUqRGqGjGU1BNdjoe9AvfhoAnaVfeVNkWGd57BeQXs36qAiTCir9h4kDVpUF3A2yw93aDGkYGHoeMCn672",
  "key18": "4nkzJ7j2FxBYsQpVj2CRyzwhDFmZKX59SgvGR4F7YfCMRRNYfPngPzzYspfpP71MVRHD9AKg3QCuEyFWiPGCQHtL",
  "key19": "63VT2aiBY3n5jyQejqqXRY3hop4BebrsEAGCGDo1mnFzCNYvDhMo8CgCVw6tfeXXiqozKkdfsfBJRmnq1aFyChsc",
  "key20": "2Bjwh7uMN5imuu1dPAfgob2PHHYa5JpdcUtmqpyMrMhuVpZPzy6Vky14AcMV8BHbiNC5BEXogCjPwePhtXfRCpYP",
  "key21": "wy1GA9saCoBTvSbUARAXvJjxLjsc8hoZW5w8FuR4Z5MGWhiJGGqaBH3UjLVryhRiMUkT5XxmCoMmbCuqYvcDoar",
  "key22": "2C32MxCqzoVeGDDG3Sr7xWURgjGcndxjQagKTzy2m9yyHJkyyhiR1W7cWoTcqSx1z3iYtdhxM65bdLKoAHpSymQa",
  "key23": "5jwfRxnXiTV88NDH7Hd9PuEQfss8xCnqcq7stGMusYGHZATbQ1vUXaE8KYUJSQVKmqRrBxKJ8byGK1x9RoC3u6ct",
  "key24": "qknAMSix842xr29RTgW9v3xEgKpK2inM7E2hnP2ZQEAxX1ud8gXUhdVtgpYxEgZHTC4jkDNkmcgArDvJHJR32Wu",
  "key25": "4yqHNKQcFLSH2LCTH5EZDeVqnvD9poyxN86VL5tynohzRYwXhqsnjyHbfCga5Rfk9nm5RVpHksQnmhsNsYSehRtd",
  "key26": "UmKcnzBMi9urwfUWjv2vcmw9P9eLgiHKrDufNDaSmiE9K7iDpTsuP2BipiTsHCiYpqkfyy9THN6vKhMULt3tXah",
  "key27": "65MmqbgsWnWUKHAL52RdzS4oz9U3myraMKHHnKxsGAmJm6Rz6Dk45PdZHgMvw4ESKiafggDdcW1VCUjA1QJpXgvp",
  "key28": "pkSfWN1fs1k6UBgo7yBQrTwG6zdn4rRSPMhy4krnyeuNi6N7E7zNB6moReYW7SxVugD7R1qjQC8mrxnoAuBp2gK",
  "key29": "2YNsvEfSY3WuJrShtQCmWAHegQPUJhxQPzu6tzZ2U26Gu567y3xwhM1sYY7ornQUwrMjvvmqQCX26MyXfFpZpohb",
  "key30": "2so55B9bmB3TCt1JNYLWPRqkThuG2SEYhWwrML9Pn2X5cduraEe1EDPLmrk2F7JosD8axz2DzmMX8sjyYpMrWivY",
  "key31": "1MT158LbtMuNgWMJPYp1UaxF8e8jima1YSo2VSCXcuvJstG7eAD5tRUxrjrsdVEHXo6qnHhBQbRzVkfXZVNExpG",
  "key32": "5vq3fDQpnGcXq7hbeQXS7LEyvsMhmSrAEDHkhECXxqVciUnngpxZPpT2SgJ2beCK8ZMEkduh7Mtv56qRa9pfj8Pq",
  "key33": "41MRSNom6UNCJuv9HtooU6ux8FfNTJMsAR3X1M9kFcWRqcLw8RWK3UAnN7ZAdaoLuyp3Tw34f1S9GBiKgaNSHcVk",
  "key34": "4ofTcRTrYTukzAVBdvWUyJH7M7puiQ3RMipRUrLJ6FB6mVhwUiCiUokrCBFsffxTNYK7XFs2MYMva3dv5fTSs4Mc",
  "key35": "7TEjSDf92XXLySAV4EqcPDD1WfVes5FQTBE2dX8DCuSmZ6fwjoYaxSpdJgkba6dKcpiB6JFn9S2GG2qXdGm8JBE"
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
