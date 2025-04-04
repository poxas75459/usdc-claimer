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
    "5XW9eww8enroiQ6WfBeBWgvG192jTn46q27r2G56AxmNsmwAJAVsf3w5u1DcuEEpF8mP9yp4d4eHyRSwjLVJqPSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ZDh3wYdtgDxubVadrUXt8muKZZBUFJmnFABcbSQiXyC2bsSmWB6qs9Dg37Ufoe5BRJav2hT9XtSMCZnAxfFdcB",
  "key1": "G7RUM5XfxK1P1uGuq1JTS4Mz3MBCEVyYY96SvaG48aqbbofRQ8hsRcYKVjux3jYS1AG3oRukh6f4n1ts7PJS1qs",
  "key2": "2H2D35gMNoFeyxicza32yGL5sLgRrHyKfbVePKd2ajazny3Kez8dFMkBQLDVhb1DMYbvF7GNCnw4ofSJq6EFg2CD",
  "key3": "5ChVr1Nk39gvqc8CdTEpAk2mG8JM1ztZgrkdQKfYMSLmtk6Lov2ipRPexgKP58n5TBNxKgcdYdmbTqMmWwvS8sdJ",
  "key4": "44dbuATst39cYJaSG6Sg1izUd7q6j7ycjbHvxunhAqcGVE6ttYiG4KnZtvtz3vV2yBhbWTkTZ2jjHza8jxPr8cF6",
  "key5": "4doNJ2AQz4eXBerSSgsRT9EtJ1zU1EXCtSzuscQjZD1zUvGPZgcsbMHbznbgHm6NPwn96iAQrnkwjdVsNggVZhXw",
  "key6": "1pH6bzHeqrRSi3gfsoNvZEc1EQkVmfNYg6eqJCV1gRiYtAyn1NjuMBWqe1fmF7WoRxDtmvDX7QhvbKfEufF9Thj",
  "key7": "3KaAXmkPWzEzHpTTshX1cqAWvvRmFQGSRgrBE8a1LHtpeb6Z2WJ3mvd9p2KTKGwEY3osmFevAtrUKTnXseR1oyJw",
  "key8": "5218qTobJt1PLRFNikv87w4przjR3L1oFm143CiKNbuger6h5EwzJ2nbJit2NfoaukCKd1yM5cXc3gLcNvATHwov",
  "key9": "2eLne7AP3Tu197JMxVY1AGpotJ212FeDemiG4qyuBqBPaZJg8jPd5TTvmuGZHVs7M8KFzLfyTRNVRAzjje7oJxr4",
  "key10": "2Gzp1gASK5J7NmV4gwF4LzNWoRSPDWuYCHYVH14xXnpQfCqauCARQV1DYY7tBoJmoZ69xyxTDREp7iczebXyfALR",
  "key11": "62hVGyWiLpXJKPenu39jMPJZAY8LJS3zzEd41k1N8BtMU2v5FNC5e4RudfpdshKLyKMK6WddWHJbdrt4yT2VaZwt",
  "key12": "WhnC55EnGZciLo4XdTxmQ8XA2mtbsZBhjRaNtkHyKM2mM1gn87JrKtNQhRW1i5TUeDaXNXLmSTdEVvGaysbvG5a",
  "key13": "2DqGBLzoRtX2JaZgRkMrVeSFrx1QC8Z5JaULmStaM4L8xpWAyNaaLwAyxbb3muW96yn8gHyRMJVrnqEz16iM3o5r",
  "key14": "4Ba1TGH8i2XojszwKekNGQ7JXf2VXAdhd4ZnjNsPQzfXbV9jw7UENqyhyLxhAVnnp8ezsmBzErCpHM7ACMY9Pcf4",
  "key15": "hxZ4sNFyTaiW5ZsYwirkeSdrQGbiZqnvBz2g3AQ8ua6NyMn8Ah5cPyqWza2bCAKmpzsD9FZwx4dLViQb9n9Bq6z",
  "key16": "h7a4m8SPXNFgZBscFMJhYuX1eazC12cJGeadvpDnqBF3erMqdhhzDUVWrxkYL5BWGSvGj1fJS2j41so15RTDZSj",
  "key17": "3T8dEQAKVrKJaDC5BZJVuPAEw1SgV6qZTKzQzUWLFbtv3oHrf3CU8CuSgQvGKmD8nMrsHuFvM4ufvvomuzyPe2AV",
  "key18": "CcaUw75LhFj4prv2DCg9chERnretzD85DP5TimVUyPRarkkpg4T8LEYiuXpmh6gqcMgurDjt98kkpqAUEBLNhTr",
  "key19": "2r1koTXVvoL7wLG39mfLw6KFJsVmr9LfQCvcAgf79SGkYRY6JGRR4Qbs7g4twzwKuXGZLPTy7N65ozxjjMy3ATNh",
  "key20": "4TakVqysJPnpgJXkwEtTtcpJpBJJWwci2XyutFzUW3cQL6QfuGtEs3wa8mzLmnDDNfjxpDmjUU6zqCZyMD2edjZ6",
  "key21": "2d1xUrcrrFmYnRHjgqPs6Hujxyu7bK5ihTbxGHTPXmqm7U1puF3NUGujvUtDxMTkAwmRdBRJ8x1SwiVLyxqCRyaF",
  "key22": "5gPX6NuEpPUDRNQcf7wchkb18GaYC11aXmpP8MoztEvoRC41XuhvfbJhYDowAfEooxkmB4mCjxs2q4xVQokz6zcP",
  "key23": "43swrSmccxXdBrpPzR9nodJxU1B41hr8Ccmprj3k1MTsDE3zD5H56fNvyXewvTRpoGsAUuboiEjzLPEsZvcrLjDQ",
  "key24": "4XktDtH3hazpFAmBhfKfjerZdEUAkwejrwWYP5PeJYCtwBjeRhyMycM8CVhVowAiZnbfC94qPcB46EqMMyH6jAM2",
  "key25": "29tHGCRPo6ZAeu7dx8n63AHzPhxoxuREsGv34b3PWEtAxBk2bVtZ5rJXfPPq6y5gyiyCmWu5LWj92PxFyAHnsW5V",
  "key26": "4nvHYMtnCfgb3Ug8bZ37H6L8x2Z6F7XtYRby9KA47eNdX3sCWE2vkhtHGHzBChwvEW236fzhaqCkY5gxeA9VkgTU",
  "key27": "D1775ctsK2kTst3rS8sFYARW4mm11AHobQ3wPC4KhsZkvGW5tDGvACek9KNsXPM9NS7bu4e3creSvpXwkTrKc7Z",
  "key28": "5QqxFtmcZ8bXN9t34fa2CZzH12Nn4HPNERysdnFoZSDpDPjWqYekwMNyHBLrWPGQ3578i3QRGoci8DUx46EM3N6F",
  "key29": "2f6nkzppoQQwZYzRE99xTHtnbLjwxF2GWwWVkfiKLefgrs2347dZfUnfcsUvZdcWAcAvn4z3aQmVxT8uXRqgiwND",
  "key30": "2onA7PdiHjhRHpZsnV4N36Q41j3zrjAhQAFyssS7qU9ezueCYSALP6VRwbMfiirUA3sT2u3PUnUHrMaTHvEuuWvP",
  "key31": "hL346hXTzWayevXP3vh4pEoGAE6fvCfYvFGFkb6NPSg2Pf2mdb1CHoVTH3gNnMhS2jVKBmVBTk8EgWtnGq5uGmW",
  "key32": "4iQat3GBgWpDeyjPe1zbeY5wvx155mFHaoSUSoevKCyfwqzTRW6jMjfFokmAKR2q83e7bTU1fsYByxG3kAjYG7uc",
  "key33": "5m4DgVpbW75kktprpk9tvTFhi2JmtCuz1hSDpNmtEUVJdUJR1hay2NuimC7WCPWngV5kwxQeLoZ7WUsaK8QebXh9",
  "key34": "21dgRkR5tLGTrAANRnMHRESSTivvtNVZ2WpSQepaPJGNkT9xTbyTMHagetwDNw824mRa426mBu9gWa2UfesGjxN5",
  "key35": "2WPFb9fJFACUPg8y76zXs2RiCWSWHY6ZT4jaa9eR5SVFvT3CeFivtRvroEGFkRWNBs6ACuDBKGiUyhCvccY5FLxU",
  "key36": "3ueSxWYGjBE79tWAzEchpC2oKSj72s2nHRLJnJuKyqDiYvMPpgusSDjHJSTQC8c6SgBx5d45p6duKmmQtuMZfrQq",
  "key37": "3e1BAhV57ucCtJ9ZGUARKXyNYwEF43iC6AThHk6unNMkExFTyDap5FrKAnhQVbMpLKua5xdFFRYiJmqXvgDFUbTX",
  "key38": "4qRcD5kDuMspLEG2tNLxopvud2j3U4rs9rWUCQ6pBRn4dJ1m3LitL39PKLVWPkqm1CZKTPkBZSkU9y2YRLXnoeZR",
  "key39": "3hCxmFhZbpiNeQ14JqbksPcSfxLNTCSbyM3Q2knJ2UtC8ZD3WAkj7UtDoAUMEfcj4Aii6VzEkbpyBuDxYsaQ5s9B"
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
