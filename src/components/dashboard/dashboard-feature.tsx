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
    "5jHfTLw43gqXaXU43e8b4VEaBRqggdSi6PGStR7xMQbgGkqL9VCt1fQBQGwxGFip9ToryypkHgtiN9kEnLne3gKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5upZBACAVsH178E4N9a9Rj8KW6m3ty2q4u3vTVgdaDwKgXWhqCM791rDeakNKGdsVq3aLYkt8zUVcAmRa1rro8Nt",
  "key1": "5uFNK2Hd4AynBxXs7Mgij3QtwhSuuPgbSVJT7dCv6itoQzGKQrYmd18245TTxH7Co4Kt2zUd9wQmECHBzGUErdii",
  "key2": "2qB9R81FLC6taJXiaWGq1H5ubcEnBJkjAgTQzhBm2ALXLUeXLsh9prDEvMFcoDk9uzu1eSBzcp7CoJg7giHgV1K1",
  "key3": "5hNdiq6qC9gREtwSDzbnZnr4sXeWce3jmjH2W7v3FyTQXUC1oHHAirEhhhE8nCwpeGa7Hxj1AXzxuyRmDBcNLEdB",
  "key4": "FgsApp34DPY5fv77yuTwc7cn2vzjRM15oxSo46Vpi4SA39r4YbT6mQmpcvv1LM5NvQFJMHe15VocjdsvkgZeD94",
  "key5": "52dddcMDut6JkPd8kcNjoYAzbbnAhyBc6YUwXizTQqebGRMDqTyLomKpkUSf4kcPV2f2525JVczexThKmuRrGHk",
  "key6": "6nQ31TmzEaoFLDrnBETQvXCK3sCk5ExK3HcyPDotymT2X7pdohUn9rid6krAiBXLur3BS4PwfXSKveSAZEeELA4",
  "key7": "mbEpUzDCN823yXubWN1RrLEZn1ydqTeC3kY9s8Pvd2ErewdCdxG6aAGp4f5dgvXvWNYSmMSv63ya4ybFhEMtTiv",
  "key8": "5m7oATQSVL2vJyCC7t8FNymc6nh1NkyXuYkeNzc1qrPoCbKezsFNpHd3hUn2Rypyt9NsdWkda5EWy9reZ3fYmQKV",
  "key9": "4FFrHKexNAMG7v6VWB5cbFJNxdvtSwpMzV3otCetP7kQkc9NWcx2wxucEyw7TCnRdSENMWkNHhkP7idrtckKRRom",
  "key10": "y73vD5ffviy5gy5ut95HbE3o9M5AM9uuF3GJ2za34MHsHCMN4dZaVS26E5SgFvRSXKZT5CkAGE9qLNyv3rct5yD",
  "key11": "3AsFdiaq7cnFSNfvMPN5NvyoiM4k2qiZVbPzeNtcgLjz4FZvjeLMkCJ5Q3qQJobnB4x9PVd7HSHDcR4oAioJ5L9o",
  "key12": "4vbzyuq97B8HLPmGeAbsDKuPii6NJrrn9ucy89bFcpEhorK6BJnKTmyWXkdh5q6zkt4uMfnwFdznyhHLt9qEo9UA",
  "key13": "2AMJS8t8Neody9vdcxAjMoLGNgyviQtqY4cs58AmmkNvePJHLANqTe3JpUgcX3tNqb7Dn6FcSuvygHLBgSV3PBAi",
  "key14": "3fdFVudRAC8dCDxw9AoNM93TKQKdBTH6sL1uWLn5MomD3rzjSEzmjPtrJJSa3NJmiDbD1fxw9Jr5FLjMvx1wir3L",
  "key15": "2EmtH64Wi7SGRQbFfxDqPkDJsq3mTvFsJVHiAbfYrocspXK2ezCUp1YTdxRgofqzme7FxEq85wC58i7xFo6Qwygv",
  "key16": "3uEGFqjroje658i176v7GhdvhtkQhCzmFzRLEwsBqUmMnKFY4eUDY3RzpnTxt18BmzGBynvMkEpgah8oY3S3PNh4",
  "key17": "B4XWYCnE8VQSUEzNUwj6SmFpJaTPrUnJdYnrfAXziuhx2hswqcYh9Nugti5frRDZbu7UcUk4CQDEtRzcPnvz2Mf",
  "key18": "4z5UbPj6UU6aFwC8YRh8QvEgb9eEgM4xtqbQUnNrb2PxCBmt3usbFE4tzst8EifdNEVoo4VvpS8HYb1DummCBUZa",
  "key19": "5mf6uQB1ZZ3HkWFsUWWL8768UeFMQbYNRqNMmhUMkUWCArgwdxCDz89EBeg7BF1waw4iPGmd3NRvodhJKMsz8fv1",
  "key20": "5eJrR6D2VRBkxWpuC42RFQDpbBB5FPSQHZpxH5ZRE5BB7qMboqgzAdGBv7VCCacvY6oAtST6x7nL3aib78nPaBpM",
  "key21": "9spwweqgpePqKLHWV8ts179APhrswJi1KPnhP1acqRY3tdhaNDccnbXKV4rJLKvoggJN5z1nWiNgJUdUk9B8r4M",
  "key22": "2tE8FWGczeFpmeuEABiADfipVnheeYXvG7Xe9zZDJD9sGDocbusuiQdurrRJUMWXubbpgtXMbHbP9uCGCY4t9nc",
  "key23": "34UGDEk1qHMXQhZSSVL8DSb9rzX55494mvKvmiqs66CeZJYt89CkVWX17mf1ib1ja9wQVgyRnnysjz7Qd2RHDRLX",
  "key24": "2tcBMbMW1LRmuAj9ngqMkWs36EjAji1DVVsNZ5KH5QFgq2dDe4L5A1DsEBFqxQn1a9SAKJdFaDjhuWWpEBQF2m5F",
  "key25": "4vgfw9B5iy6Cth8es3CYZ4f615h2TTMGCs5PpHPPaeqAYddVDBhjbvNunjWgTe6f7we655V3wNiuMWYpMYaP8JDQ",
  "key26": "5NYE5D3pmer5mHGvWUwR5Y96hwTyygwZGMzTU1iU2NTSPnGXu7PD4UyEh7kmBQDwjUVU1tHYe16mCjwtqgboLmtA",
  "key27": "2gU8VWQMjhUSN14UH39KxXBrbTuCFf7BJ3VWHHLhVKEmQx3UyRLVEcg7BwiW4G4nTLCQf86pQKmZGXivGofqoTCi",
  "key28": "5wScT6CHBnTHWKHjpCTTo2ft6JyyiEE8u7AE1XCFxBUWey4RB2N5hR8XJE67Zwjcr3Tm4Yb4KU1HyiaQtTBz5ay9",
  "key29": "8VSY31rYiRrE4sjZqqvibvHwVpNCjnHmqR5nd73rcRNSemiBPNsLK61dGW5qNcStHumMEtVjAsPCNX2dWSNoAed",
  "key30": "2AxUaAxn19D9XwewPXwNw35BsS9tgGrHxhvP5zNSbd4kzYDQ64fPSKeNE4JiKTaW18Tccn4EGPcMzvrfcFAEdUX2",
  "key31": "Wy51vXTXhMAB7x4cRBQ85d6ytzDCSRqCCHUTKtAmHZneGfUhPb9Gy4cnuG9tkM8rMb2z5Pshw5ent4Ayfny6D1r",
  "key32": "65e5pj5bAEGyMXtDJ1eqVnAQ1s8r2wQPqe6MUsMhcQNfYvoVFvG4XjhyrfXbg6KzkYSjPHztugVjvJ5D15KnS1z4",
  "key33": "3FP87UsajijHReRCEPrDhEZvCnKogAt7iKPeG9KBgxjwkww7JvTRyyBvEEs9HvJ6Aodwy21mdG3cHj49NRnMftLy",
  "key34": "VCHMno1noWJeC4G8kzB7fTg671UhttVMQaWqpiBdxwubcVwarKfsEmWrSX5ZVRw7bur4zY9ZY75DLEH8msg1bGW",
  "key35": "SrrmH1zijbW8Qu3bjMB47V7cmQs5X1Uxa27EX9v7ytiwPe83nMRLfCPhH2vuWXaHpXLTqb4DyCRCSqH2ajx9MZX",
  "key36": "36CsBoj256cCCvYhycnjAYb3XdzPAfvigbSauVFJU24KNMVNvhM2f9vFf51aLqrYPPbEXKJm4HwfnepQucYSbdH4",
  "key37": "279TeyGZdr5DdJatLv6JTBAMGfiQv3zEA5qMBmUZ9gRX3ksiFXZto5WCSTc7h2yds1ZtELw4CWJdj2SMTX28jmRr",
  "key38": "4jDxNH4N8JtrUDYfT6KiUhzh5XHko58b2fT7Z1SKDDQQcG41tg8obgoL3Aok9S9Ut3ta7392eCdn93D6sbGF5LZc",
  "key39": "iGUX6UcCjcze13aXTAvDE7mYhRZtFFgUYZr26fn5EmhfhLJG2qSi5KVP4279GELXEcarvMCWpPytEAhrMyaaTTk",
  "key40": "5VFhK48ocvtHMLUCzq7iuwdEbagbUe3Y9ahoUPYSTr33DgGwMTNLwDEhC2FKfK4GoEAtMWbhZANk414j2H6HpkNJ",
  "key41": "4e1k3ARXyNeqxcCpxQEWHNm1LMDn9FE8aD46V8YSC5B2sJJ1jXQC9sDmw4iLx5qqRsercoXpYEyokvDw6Vd4YrW2"
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
