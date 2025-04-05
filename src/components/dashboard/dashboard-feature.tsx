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
    "7pzKMRZmUvwXJVdV9wvT7376UH4QR3b4TfYU6rU4GJkshrpqP6vvxJJH8YYUPfaAaEfmUpqFRuZyERt1Gj4snJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5oKhcZqe8AYcY289JhSb16NUoC7XDEeGvs9BBZtKWD5nDmJbw7cnv5fc1bFW3YUpeGM7AvCyy2v5RFHWihZMdY",
  "key1": "5sw42Rnhn24evNaeoXZLhSqz3hYsgH1jiycx4FA7NZpNPT4pvZTmaFL8bys4ABxdy9NJQ7sPftVgLyKE9yRGuQc",
  "key2": "4UwxBr5PykepcehNa5WKWUUKdg3kP4rkb5gzrWytyEZoAqj2SvDkLTWmXxKFWeocgVRUmxB6PaHyZ7EJQPfvG3MT",
  "key3": "4MqqCe8SVXYcr484GLSfczuTehBLetP9RPWE37YsecBJHF8cDN5crFdujCsyp5a5FQK9dHTGWMWpXokiEEbeyJk7",
  "key4": "5TwZiDtYEhktnqcY8d4GvxzQ38AssiZGcgSJKmhBVs9Sg4NjCMYbaneDX7TmGYaWUsurTiJkPsuPdTPkjzbbhDUQ",
  "key5": "2EEoirvxHF7NdGG8CMrruFwSdnDfgcce7eekbZM3eZERtMjLeSz1vGa2ZFUZtQL3Ffzf2baKFdpY1YCCiPVhqh32",
  "key6": "KsQqnYpkftiJrvKjii3Vx3tbPamyAbzUbbCt8AtgtezcwuKCVRCtXjQDT4D9u42JC68k6kdAA1Jpj1RD8bZ3uwU",
  "key7": "5frU9ZZ7SKPTLY24sPF6UJUCr6mLgud7GNcAgJjmTCpRDVbqVyErhHu4dt51dLPguqaFPzrqVRAsaELb5iLRzhTm",
  "key8": "2TTaru6H2afrkgy9rxK3hpRnmpENhqkUNBgo5SyEiUXUdt3nYdfCn82nCv45jb1vjT4u1zMEeH6zhGc4uWCQfLaM",
  "key9": "54Ent1zjmNYNuYsfCfSFStwh5Y4itRmkSELK4tHnDaPkKMBJSsqKYL5WFj8984gGiHTpFXQXbpsmrdLn6YcJGTy3",
  "key10": "5hAiRsNQPkH4KxHJyqYHqjEqkEE8jfzthjRUeBuRh2KvJjBb5ybi1pJzvG7jbYJk8J36SQsjjNKkyX2qqMCHpKVU",
  "key11": "5GZYGLczPJnWSqPSV5ox73FwCWC3xN993VrtTRUUWsR26oEjCyhAPtSnXUbrA9QkpqpBLTRSYWXxJz7GMWCRfHTC",
  "key12": "sPLgg3oj5zeRSgT1Wj57P954Lx4osicC2noXuC4XrJZQVaxw4xUKbNhPnSqxFoZ43nvTrYyh8JQ83cWjYPokBwX",
  "key13": "4upyLnTyoUTNUYr5ibyLTxqi2Y5eU4ghutxNB4G6ukqi35sFvAnc94BSyGqHGF5d7vTsmBLjw8HsLAGF1AgDW6Hz",
  "key14": "62YNiCKMBsWU6BtFpf5RDpxeyBXoSaUsitMYJCAjZESKHb7MaGLjPcCWcLV14vd73LPppSESjHsm9eVKEBauqRfM",
  "key15": "38VBpitNLm4VnMTYEhne7vyP2R54ARZTvCUcgcWny3XDf8xnYq4uNtazdDJmwGCmt2qWMuyZJXH45oHt8YMXUSmM",
  "key16": "5sNePNYdbMUVJC15LsJkgJHjxAgw2bC7A4icP9FUZTANLB35P4sxDx3UVQARoWYud6wLKUvw299yRgkFUo1yuZbD",
  "key17": "4Fad9v5KK1a8Nfrdr9r7d9a3SsdDyaXTJEBTijGkYxy5BqpVSPVe2Qmgy2rNs1GJ8pRzRV3XaZmGTjeLRZakT9wH",
  "key18": "2NzLFXFr25zNCprk5nd6mEdVbYrU7n1cS1xJTrk7GzkbP3jnS6f45yREzfST2yEUwK38pZCNFcyr6iA1EUWCuVzC",
  "key19": "3PDUdUBZU9e1LMexvw9iSxHgiS6F9HXavQ2ZCR78ERBEckJHqZhz5eK3HN23CPEgLupRuwQR9WAFGbBbnGP5wsro",
  "key20": "4aNAFaJDnd9qLXNNrWA5M9yoT31tw3Gah5YWzQuSZqV5UGSjtR8fNLwJEm6m3MiAZYjLJn1hbkLg2DA5WKSWLgah",
  "key21": "3Q4V22yKdC24QZ2LXK9xNUwy34vc8fx55HtBBAteqedFVjhhF2qmotMALBFjEJYALo3vz5w2eDL8tcoR9T3SYrvG",
  "key22": "32xxshd9GSQQ5dmtTD5nZjmVBohEzd6bAx9hRRyTxpd8P9Hfw9UKcv3G4yVXjCDyNtmDqmPHG8kUuMKqhVuLZTJ3",
  "key23": "4esdD9jPTFip3dAhFnbytgqGah1buf7RJsuuzGSqYtzgSVuPzDvPgsPL9ph8sL2NZrVB57tCc2K6wEftXyAKY8jF",
  "key24": "5QGT9rDrhcEDRyGVXuWqYrEkGThhnHZJ3HNExtk34W77qUmUsEiXbhTaTSUxaVvSEa3Ksx36TABqg6Lddyo4WJvv",
  "key25": "3AEffBHpy4mh9NQbUqPWuN6BEzfWxurtECT3m3SCbpv7cWjy2YdDpWuXFE81vfd3BWa8XMvkPVrCTVjPwxLGy1Hg",
  "key26": "3KAUcXqiYRA3hP53wL3dvAc7tdxFC6JrULPMKz2MFye1q4Dan35df38qRULAndFxqe4Tf7QcvAbMv7KGXKjnAFBy",
  "key27": "5KuDv1xe8dEpwcBWF2wLjRctsDeao4S3TEkxHVbrGchzF19DpEzNzFHuufyhaWJFErBH6KjgBQTMNLjfUwu7UC5R",
  "key28": "H1nAgewdfaHUaNP6ET6NiYqKXcD1etAZGsws6nZoRogFKrWK8fBH9HiHrSFqJQUZDABLEXFPZLE5fUh3hkWGSzG",
  "key29": "4dEvnzPSMrA16DRMShct4R5kdcATBgjHNEZYooY8p45YriRET3RCaZPCPdDj8zK6dYiwutXiuwgCdQMSvEEs4MUL",
  "key30": "3HY5Mt9UmHjVKskigAJSE6oYMCzpJpz8ahDejKEqgesynDKjnNUhDF21AFuDUoGXHHXdHpJDQTfjLhQsXSjYNzj9",
  "key31": "cpXtSWvtEX1rDVqw6PET4KMdYvr9tP2igPYDTiiqAz7s4e9vqKe71GSyc83ABExuHCxhcTxpeBCE2BoHMJZuZRG"
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
