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
    "3Ddoy9Xhcfo5NhoopDzqR7SBXBhfqdD3Hg8EomPptANc14pqvdK9o6x5Tw7Mz1Fg8qo1GFed4uKsBzDn86EL2Mex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgdHBZAW7vdG1Ju2CkVeyirWRExr7RX9LtVqbeYowLfQ64tj7mPpfYNpZqBejB7ABArDTejG4Pm66FoVcKaCGJg",
  "key1": "61CR1qrKbo6ahyySMLVBm4bYdeWjwGbpEpZLHmysqXyt72p2oeqSsMTcAQCeaPwMc78FVQV4esoGfk1oLrC1kL7m",
  "key2": "4MtLLYaKopuB7vKMTVzxEaLZpcWr9DZ8zEdMpnKEBjR4NaKZczcVUbEMvSWH2vMDu7qyv2c4Vj37NP4dfyjaBhB3",
  "key3": "3cJ8gpud9TpEEGFe4poDscSXUjrHGDys9HUE88bY9YDi5Fh6exq8CcuBRgR8rjF6m3Ctjb333sgrQ1xNYfjHYaG6",
  "key4": "3Wabgh3Ez8na5pdtmsvmx8KhHSE3nSV3sW75HY1UHrcamtYoeWR4kg6WBVcQp7c9NoTmtDb64bZANgxVukpDvCsp",
  "key5": "RyEzgYxwBYjF597KKtCKE2386GhzigJzfMyJbDWA4rqYqReJXS73muvsrDtnefsTtNQ3H4f2f1btLaTjXeVPF2N",
  "key6": "28VyKyPcnHSFKyjsKT4ZANtrRtAcTsTXE7TTTnRS3eG9phQg1CHvyqiNu4zAfGznJAESt9FhKXcf94YmExXbhde5",
  "key7": "2VbG3wNZmfykdAu679rVX3ofpEd4S5FdMrUH4QrmxtnvYJLEV6Dm3espR1v3yzHcjNVLHNiBuAFj5SpxhR9ogkGc",
  "key8": "4YGBFT7TeGWmrX6k3Rc2wqKBXXPiPDNqoUMEcZ53wr2wcyA7GxMLrMh5HkSSCvkw9PANBb7BcR5ja959YqSzSbh",
  "key9": "2rNVfnEVKmZ1Tdq4pNF2TDYiJCBCM1QoS11npC5CTax54zUGevZA4ckhEXxyierbBSVv7HWZLJftgQCHT3KnJGQd",
  "key10": "5eSNssCc9UJPHpFVCYxv5LHWD5VqT8PTSkdwoPedeEBBXAH1XVpAaAewKs2U8jdusGNYx6HCVqYVMRmVfxkdVX5p",
  "key11": "3Pi9eDn8n96XdPLFqEPZxzVSkZ7ja4AMNF1k6V9qSD6ruwREojuiDYH5NbJ8Bp8n2Ab1UAikxaG8PsEeatqQ4nTN",
  "key12": "3HFGncCLTZWA9dHMQLy3ZBUaoi1PLQcyobEd6bYBgDoikkx1EsUR1vBj8AuNLxmW6YWnvkkxcMUF8apog2cSSuHE",
  "key13": "92w3xuYRmmxPPKyS4JjHWq8hKYLmEDwRvfDhJ2bzbF5sUH11rSANcgBkePjyXKeKEktGPP8qvGBgN3cuETmBukj",
  "key14": "3N81LdvHwrY4QxFrFBVEvhMXGGiyaDrgioRCqbT8LjicYnrsdbcqpSNbhfYA7YjZqBmv43sJF2ExF1VZd8cJS3Bq",
  "key15": "rAEv7zhJg5GSMaJdsz4RmbGyyrKuJoFaLcLiFprhrxV8mAs4QsC4x5uAYqBuSeBN5MM5Vd7AgusHJtD1KzdLMRy",
  "key16": "4huMzDm1hn1Nva3XMrtDdXifT5ha87kfvaaTSFTH5NYbn6M8qKXJAZsPRroyiZwepi658ZtUBh97k5t7GEqgBWAy",
  "key17": "2tB4YrFqoKiFTQZx5LKKWCex38CrZL9kaYMQp6bTr9zj2G8Lh4Z6bjBkNB7VwMfbGPRUH5y6FRNTYcTTddNAx5eX",
  "key18": "3XKMJFFkqfUVX95qXBDUkBa66rhSaQChWH32c6xBtTEtHUYweG39xJKwKWXNYQYP9f3gCwmLcGkWTRHxjmB5yufk",
  "key19": "2wVtmcfaDpDCS2AMzPc7AVoVNyRrNb8AEj2dyTiLauPm7WX6nLr1F6xTgA5fDkN9d6vsDuyDA7mdXtMQ2acfZ78G",
  "key20": "4yyp7P6kDU1v77djeDExCZz5pEMi7g9PLyZS5F3Nw5timwKchCHaHGciFN9RUMiCBdwSzj2d3xuHiNhhN4wdyy7N",
  "key21": "fo1sz1en7b5piLmHqfx7HVR4MwNaxjQ3jLQyMKrEBqwAhqhgqGBPfiZDvGLEyxM8NhMgtPdCBWvxWxdmTKvnVE5",
  "key22": "32D1Ua1vckSXAAvo2T4KoAwBtuRhQ2oZ2ddQnmEiEVV5PrxWq7tFu5tLfmny7BwLtqEiyQ9Q2uzg7GM5syborpTN",
  "key23": "32giEVEU4tnydJSLviVw1nzbKqL4R9douD6JVGB2aeySRi3Caws1mHxfgiN1redSbGUNbet5uvGqrD4WFTvaXNyu",
  "key24": "3vwybpPtDGLSxXpoo56E4q3MehNFy83FUQDaA4ZLceRnvcMXL67drU6NXoM8ve2NewJvLWYfJDPoXHKoY9T2HS5k",
  "key25": "58UCtm1vTyzeb13vXEcn1q5wW1bnjhuC6M2MJv1ZmGqhTLQ3P9mF4iUAwCHLvjjZPLJ2DtWuM2KVAHDBcVesdwid",
  "key26": "4HHw89YeWP7sVyjPQEewPj3LmY9vnTZrMjVdrHf7HKtxPjLYzCfsZk1bfsuLbapD6varDSGTHVDoPSf83L3yZFuj",
  "key27": "3j2vS3V9UYCHJZJGwcBrW2FsFgqKD1jKu9G3rxHHrawqp2YZVqdYRj3HbWGTCwDWtWA9H7Q9gmaLhFrNq2nriRqk",
  "key28": "4TUoFkoakwLVjUVkNhc2ny2Jc8zmFERWVGo9Ef3bqRu48aNvXqeC5zRMgEd4AijGRrfCK2whQFMb8eW5SHEkGwsp",
  "key29": "4cSXf33z9fTq9MvyaMspQDYRWrh1Qd1MAWmmyZpJTpQ474w2PFLJNsA1o9qytBJc72FTo6wFRVS7QqruZYEQWFiy",
  "key30": "2csy8yVqifgbEvcMqZeagPCi41pBjgyZw8Yc4x1QbevLVUcq6wM3vn5ctG6fFuKWAC2k6GVZBfhxYtfKyFV82RRo"
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
