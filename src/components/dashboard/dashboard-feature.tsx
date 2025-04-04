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
    "3x8bg4Qn8AK4U2tDLsYzdusdwFPTPSaRXNCkj2focSUR4k2MoY9SHhjjkSpYKGhjRuQ3C7qGubpRwEST64kAMVoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jTbXNioU1bWSUDD3j6rMCKnYyHzbxhHGvMsZu9r4pxFUDkBcMYDbFR1coPNXN4EHLornFWnVh8NzXAombYc8sm2",
  "key1": "4vYd1Kpo84VuSEbKXG7s3c2jxc1skJFrdNWW737sDTGZiSzDe4umLB21D4YNYxpA58T4U4KPeusuVg6nHKAAkc9q",
  "key2": "33Urwxm59MB3pNSm1vMWAPjazGdStUDE7cm15h2ovD1gqcgVVmrq7avtXQbr1LxcumB5mCCnTaz6fVGNTocYdSEc",
  "key3": "2G5Nr9aJKYZdKZW7Are3C4gFxS6Xr8Za2XrKdbztUdzkZUjShrjhkvQLCbmgXLvYTEF5eMi1ixwkrVAecj5kwXi8",
  "key4": "2bkvSLAWeCZE7qLyjf2giutw6H6ongHrUPaKHNFb7tPFBH1KArL9MWf3ffKrrZjKQn6R2XvMTXN5aFxijpdaMFsZ",
  "key5": "3c1wqsYUbJvHzT3Ddn83Jc6FzyprfThgs14qmwgh5Vb5cQzrrVAfnz8aMNLZUKSD8LWRC6gV5MsnT71xrYU3A7UE",
  "key6": "4Hk7dCAkNFFafJJ1HWDQzQVgG8mhBnkhh5GbuCYDbFa3YEPyx9xf7aLhTPJaPjJ833FFX8zc4F99BcCoUffYbwCq",
  "key7": "51xph1pDBy5BrExxoM8GMLyvBSaCJo6ET7FFAQe92vTwzXcUxrbpeVPuTp3BeUNFyHrmJaEJ8P6rDGFFPNfsJaei",
  "key8": "56m6W7UwvyNjFCQTMntyv63bV6TBVxKEEEZvs346XuXrmrx5hUgKo4aMB1Yqm1qRg8xvdYNVFrswfnWjwMhWFaYN",
  "key9": "3uWSzaSvvromZPWNnXsxy4tDCdEJYKDBMhuQEDbcH6u27S143tzU2aQKxEG768f36FGZzE4D764DqW7R4MxgyCAi",
  "key10": "4tAtpmLXp9HoPxEB8qBxdUni9r9AocXBfe7Wh4xfSr3FAL2CWWodiRuacj4N8Wri1eQgnwXYnCZL5xgHMBDhY1GJ",
  "key11": "43hMkoyZYbRz3cDcUg3vgupmMy9Zqb897TWsJnbh2t39tiTA1xcnnwXAsstQwNM523F97BRKphqYksdGyv3SwV9F",
  "key12": "4QAx9YJiBTaAahvAyRJ74tU2nZACUynHdD51SEe3nrgcNjh1HvXi6Ctq5HUhgS26ms8zxNVYmtbQd5795bhkFPym",
  "key13": "5LuEyRNvfgcQVuEhH2on1kbk6xkUfSsEsfaChRHc8DNdB78g16zMhDABDjm2B6ndoin8QFvABfzdf14GwYQ8aYf5",
  "key14": "3rhCT5aiXmQDjWAwVNq3nUKDyF7kAQ966gebWkAyLkXaRSqe3Yt8oCi1TAE8UwQbxtBNN3ZDYnsvg6ERVVTtEDL4",
  "key15": "4cfRbjCqewkzpWUHd7wGXjACFRhRjrkrjdcXjdzkUogvE2iDw6YsiSZgxgR3ETnvYeGEt9xcNgqkhkLWWDDNJzM3",
  "key16": "5kJBaXcp85oAS5TDrBFeunEVHU3GpatPiRZBVwmM5j5LPHDUXzBzXVRENaS2GtrS8EKmfC3ZvJbr9Ksy8XvvkNeT",
  "key17": "2oBZeNbGgxjjPhoWQKG6CweQdF33YPgX5Kmywv8Tuv1Xe8YJk3WCQcg1vhxK4J7KSPqCgsu1edJS56wuscDxxut7",
  "key18": "n9i2u8yaCBQum3iFCyUQJSXJkUcFdmSmVXAjig7T9q7FyVvCcSV7uWZVqi9jahC1yHnsUA26GmbT1G4CZYRrqWD",
  "key19": "2LZoPjZgCeZYerrfQ4Me2qtpTZEEJopUBD2JAuvv2bRXstLWwTnKGhnpzw7wdASpyq3R9EQJR6WPDbcJMPaYNuUa",
  "key20": "4VpBkDXLP9fpuiGTmYC6BMaUF3BoAt2t9A2fTsXeANFzp6a3PMfZeJiHQoUaEwY4oQVt4YpjzK8zSpEXgTFM6pxF",
  "key21": "3M7kGTE6ScGeiKtMCBKRRxSMqSaHFxR7e1EUfhoM8Mc7PgVE36TxAExAgr7ZXUwkicoXS9VLSEmtPMo9uxa44SEU",
  "key22": "459BuQwKGYMzLjRyMcRCVLtBWCqED63Kv8AvYbaeb5wPAGvbmU2QGFmBc2BfTr9imBVPsiMhwmeAjTZPFufjh5KY",
  "key23": "5uBAhBu58ZnFuzJDypYqGwsgS5C7vfe9MrTvDeUkoVtqhwwwSgXgcdLQLSK8FYfN7kSnsun1mWp6ceahMZhSsN1p",
  "key24": "4Vg7xV7EAB4YwwTwsHeSyBJ9KLbP2u16GWsLqSqDrhscMhSUM2gVP1DZDVig9xxSchRRTRXxbDLWpd8ekNsAxPLE",
  "key25": "2QNqZnEk7fdS11AaJHjgG8R3EjBTqDniwZqUNaF8iS6Apzu2AUe4vYUXa2tZWVbSFsmB7pEeUdXmGZwZwrnoxQz3",
  "key26": "2ejSTCXkVP25pX2WBY8jvD4PYDgkXHkTwaDaiMPSecrzAXUzAPMSqyxLZYMBEFhYTD6v2Wk7hkjKxA5S65Equ9US"
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
