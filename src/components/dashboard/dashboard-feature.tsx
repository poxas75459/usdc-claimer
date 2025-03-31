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
    "3a46NZjzFnPPDpKUEfPATh5Mz6cAkReMtvwgDpG8mLWZq4Sib67AFyfhxkugbRUi4rrjGfpf18ciJc7E9LdvMzTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdhqxeADoxWgt2prsMqDdGFRpiCEvhsTq7GkdfkdhmGU8X2fjPoZ85HqG8odhp5KpDsNWZnBCW8u1z3fiezLjDa",
  "key1": "513rWJrjt6Uwt2zHSTKsuW29g2VWtSt62jTqGj37f2xiLdfGMQKYqeEvtoA3WXckCPHU8xr6VcbjSyRFjuo444ft",
  "key2": "JNa1tRyFxPqv6cRbUWsNYkAJGSuqvBNTTFa8LCb8KZfLoCC9dLREp53q4Rq9m6dHCKrrGHWUvATX5opDhLooSXA",
  "key3": "16oqV4DgRPTEe935VWpXQK85rKVBVP3kNeAJQS8333doZtyw4giDytT6V8LibAK8trBSPgyG4FQv4pYrR7siJo5",
  "key4": "3dohhUN78YEnyhGwwurtt61QFnja6Fk1ECwM9wgDYLXHWSS7PbnbHgH3xtk4bnZWxvSvmtHAnZH9d3ZbkgPQHbd7",
  "key5": "2iVCicNwFPgBjieWjuZQz6sSGmKNjPntcJyNmUD2YLnQp3R2hTBFLy9Y6rC5rasBPQ3QvtYbyb4Eeni3o9WiPWqq",
  "key6": "VqMhuRmzYuyjCx7mVcebeTLkCdcEmk2SmfeNshmiT33Z2ZTsAdfMtqSYTQBLjY8Qhg1e3Ex9ZLYMUc9aSRar5Uq",
  "key7": "MtZja142DFggkrErYXjcHpHVqWPpacKugF93e1MnjrP7XNNHr9cUYNytbrPbegEeyuhcNWWk5Ds9HjKmwaYvBhN",
  "key8": "5CR5Cf5HphUysBdKsKaTokNftY1LJcVwrJ4XvK4gNBhJw3ktDkWt1DbTm4pCsHdqvCxGwyMwPyLA5JSKZdUffErf",
  "key9": "38mE1mH2q3n6hFxedtixYSNNvcY1qveEvmVfNAHNa6KSkiS5gFwF4we6RBd1LV3mL2JjD5RxqgJLNtPCKUoc7vbC",
  "key10": "2Tbg3nmzGRwd6EtDQsYSX1D8rC2LF7TyxaiKJNbyGaEsYZREJpwamjrP4GTPDimoKHRyLkc9QHXwnagqBY6vtJ9u",
  "key11": "5wHpZyqh8o6NeB4W4ngMCUXLAGRq5jWkHvfzsFVrhG5DzeAkw7o5jq2Rd3yqqfb5CDJK1NZqVz9d8eF6tTF49Gd8",
  "key12": "4dWVoe4dqihZWViKKdNB52xryJMV3ZkJWRBQCbk8CrXjQJAkV6iqRHWFzgEv77CdZMpUsDngpiSa9RcnzdMivSxH",
  "key13": "5fVYgpqQuyb4pHD4mDnEWKB58AP4XpvxZELrU29NounfVRxmadtYDKFmdEZhZDGqrrD5dbnTyU19KZUPR7mQiEWQ",
  "key14": "5Fv6QhjZowWvo3MGib8wgsGVjvDC5hFZ31T2eML3qFyz1AafJAwDW7caCRuEpWnWxECBA8q1eLRLGFf4Fq9SVnz9",
  "key15": "4XJUGCRQb2tAYxzP19T3VxdxkS34b7ABdmYzePj2WLCLFUvxASjdUW6jxmBZauZ77GyDjnNJ8TVo2xyh9kWSLZFB",
  "key16": "4yxdNP3iT4feWoeTqrGoJL5m2HGTwipHoaxBndYpW3rzM76RKEZJVTz7RrfhU2d88ksovjGebEkS8cG4wP7BNC5d",
  "key17": "3mppVMZTDXeg2b2y3CYSgDiPdVU2YydYer23N3swaCrVcEi5owJjaXETrrWy588dEJH39952Xisa1AZDw14efTjJ",
  "key18": "5hRmnDPSz89MfWZKAvZJEouS1X8RQLXJeGKv2SmaJvYeeTWzPYEZ67ET5HbFQDN7vXeQGkV258njSe3xePHwvyvi",
  "key19": "5kWBfSwcwPGzsWMaHDBdkrfxYr19mfpq2eTEkk3KQUXetCwxSGjyjru3xgjkMKTTmTXsiuhWh7riQV3LKQVRfFQB",
  "key20": "2P36XmrYJ2wZ1a89t9cxq9gS3YoVHh3bF5KyHZy46UahZBcSZMuEYxnq6UihWKSytu53naF52wiKPNC88YALBSgW",
  "key21": "56VGVJHL4NsxLX69tzVyMRco1hKoafkkYCgLpYtniv6TNTaVRKsigj5meYD53USW614sABaWgAKeQmXp1wVQ8okk",
  "key22": "2TCNraVufZaYuhVeTGNWkboPzsXP4xQGXjYLWin6FfC2sBQvupWqxAs7mTp1SmaLMakD1iA33eeTgqZAovCJ1eyR",
  "key23": "Zend9fKjsaeZvAvhVw2rrk3jcHZeMTCVuKKYud4R98oGeJA5VhUnt1UeuPWZDgShkUhmgTx1ZmasSHzgRuvAaRT",
  "key24": "atxR2tJLgGHTuMkV5CE4x61MF2obBKSQmezCVD3V9sz6vX9h2PnFmoTEjwxQnoKxKt9p42uczUVLAdoHtD9Jg8m",
  "key25": "2PG9omXFH1iQGLqks5s4CK5mwBHmkSJa3Qw8ZPiizxcidcuUe58qfyNh2DB1ihjfusc3et8Bff37rK27ZTDwQMPd",
  "key26": "eUUuekhnWzmEUWNgmZWTqXDfKCx3swai1Gk52Q9WzfPjkFTFCxyWPjmJDBMgtjVU42jLYdMfGhRuEbuuZeRwCbn",
  "key27": "3eaVfGoNEhA9eHWtxXMgjy9B2LnpanjycFoVSXyUvoSn2TXeHmfRWKBNZJARyaLe5csU6z83sJwyH3BkWNiqiP1L",
  "key28": "4D2zXSygGmkKFsMfiHBAyZVMSScWRr7ZtPmHbJ8XjWFyso8AFDQaikHSw5P37MrWpZbAJSXfrAGJcFASNM5kvpdv",
  "key29": "4zysCfqiXXtkeLM6c6BUsNjQQ31Uc7Ta3gVeSAEFnx2aW8eHo8Pfs2iVEHT8u3bN2dVPFqS2i1whRZxczbU9vHeE",
  "key30": "61gzdPMSUoUmgFRbC7qNnSMJSmEXTsqX9dcWu987hTRDVH2xCY6sb4AMmfiQgmypCuCeTeoGtuxeJNqFnEAxRAcp",
  "key31": "7ByWTaPPJMM7kDDSKjELWbm3aFVQZ3A4CDMzYPJEAQ8FXEdCZTA1kukkmKUDSuNZH9wfzRpn4zerZxf9tG9qYsW",
  "key32": "5j4UJ75NJdmPuQS7i4mBU4e1zSUm9RjJ3ejaMjrwy6ygLmhFMcan7CzYnwLx3ttCnQrizZNuRLSXYhjkfZDgboJn",
  "key33": "5UFHSNAooK7VmL653nEvHVfkBGihCBtyQtc9K3bcuELXbHD6JvstXcXYC76L2rkuJwCsr3FUXJrkFmeayYgwCivt",
  "key34": "yL759w5kfJDwqTKcW8cD6ZmQ7Lmr8KgDQYEYScNXrt4LjCFoLTnZBvWpdhyEC9hFE9qMd3PT3cJN3PkhMBUWH4x",
  "key35": "5eRnyfREpAMTqnSBg5qHSuaUzq818m9C795TELTXPhVEsXG6WxjoFdV5Qno6Umj6E9YohGY4p6nhoBUMCjbD6JDT"
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
