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
    "45M2EajFZpu4KbLR5sWynGNtcZPZPruZksFZkSxh3aXKARwXBPLMDqimq33YucjNZ35UcaZcggah7xsVtvx7Tocj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4Qn1uc3NFvJYsgyVMNxgNNYaEc76jAoBy8qPLvyC1Bs1553sCGcdmyFxATBXnTj3FQqRdZRayGHi6zoienn5KE",
  "key1": "4AYhsE74eD8dwegub32WbUc93cT5nUywqUBYBgyrJsinquWWhUwD8JPGxqFLM9wd5xzRUXAFwc7D1X9ACnn5TmV8",
  "key2": "2X3XMcCnJMfJ5akKq5DjgYJW1wpXVdakRD8zJzZaPxJEzfRC5xobTcSLPYk5wNHsiVPfsSoqa76GWQhwMC5zaa2A",
  "key3": "2uGPeT2nRVh5R1MmR6M1iY1eRURKnQdwFjiZ9TAzj3osbcuCpBT5oHY7vmBWXa72MDLApup2ABreDucKByTopVzP",
  "key4": "5RCYspaGMVWU1WyM55kFJmmBNrrxdX3bK2S9QH5oeCY1QE3EVc126wtnWtaPJm772xvs4wzhYV8ZVewEdR3HwwoW",
  "key5": "L8hbFFSKzhXMUqTicvBKM3gPy7peM3UjbMGLnmWXPHoHbKG4gJo4yvZiZbufLUivsUNkownjmJ3D9ABD5CA7yzS",
  "key6": "RC4Uxb7AjasDZ3WVpZFEBstF153vXcvXnuQjD6gCTRkrYPuDtifr6EnQ4zjVeepBcv23PLzw4jbGjAHdFzWvoGH",
  "key7": "5wpbYHDTiUgg1GCsQ1YW4MwMaxMf5ErTBaE7CtzsGZRpT2UPJNbrPpiw1oxcYkATdXBgJsy9fpuDsaRDAzdakdJC",
  "key8": "4MT55SayNMkdVBXXW6ZQMoamsZMEaUNaupDzZzyUxEvxYUy1kiiUs4UsL5iFhXQenbURkvcbbfvhWCr4CoRhwqA8",
  "key9": "5NGQvx1yZDkh8eVyCsXXDCLGfGAEh5495ZP4sP7o5gwgd1WUnnKcawopFgxwU3Udsku2BmmhpPdxcDwJeFQo28K2",
  "key10": "2p4tu2t9LTXcoPLRVTF2F5fzTiFprSRViqdujQGHL6j2w6Avxuw6YmJTp6orAYvSpBpvVdegs22R2WEsy4U5r1dN",
  "key11": "4bxg3mDvyoj3zdebDHtfodVcUUrZaQ79kCP1UEhsMqGnKvtN6zp7VD5DaYmyj8HpeaDZPS9KBBt8v7AaW7rULvR9",
  "key12": "47pWnUzCqLCQkefhtnzfaawKcsc6wu1WFt9C5PFzbTvUR8tvCfeCftejQDCsE4Nao7RHHNhyu6Y7R5eiN6rQcdMU",
  "key13": "fFoKb6C1k6Wr4SJKCm9fwoi1H92FpawscirTjdL8qSAnZrNTxYCjdgfdFXHgaynBC8dDEFaG9HZ3fAToeRDnXJj",
  "key14": "4jDcqV8MPs2jJFLLfZHJihqLhGUmiocj7GuGTTz6JnUDcYdsvVoqvBJWiDstQjL7xfMd7vLxxWEXxsbnKyjYbdoP",
  "key15": "bHq9fPQicaEQHxFyCNYYXNY1RDQXcBPjmUnPQVQ3RAHUWdCRKcfSrbzCtK71gPtyQMmyijndtp1WC3Cx1ijbaxd",
  "key16": "NTiH2jGUsjpcw5jKxDZbuPSuHLw5xiqgXi5yxX9UKSD8mmWxjqGGC52gHLs69SkGTBoZuPqwQLVHxDFbqaKVAQg",
  "key17": "5xJRxi3vV9vGzKnYH5DSY4q7YWxfjcvZkHQRoQNwJy5sXCWrwikooKr462GSN79SmcbVGXDDkdgJe9G5qH7R3fpx",
  "key18": "64fnj93SE52p55ZjnU4BKXTbdtpzDWF51Ao1EAiujXhfzQGCSUjguCCpYNovXY3BzJ6MuSg2MkrNYejt731VRMJ6",
  "key19": "2Bmz94VvmkGYcjy627HZnC7LGtbxu6ezMohBC4GTaaf8mTKhiwe6sTyJaBhQAEBtPuSKbthwzUUoNcnz9RwZX2r3",
  "key20": "5mZsyoLLFJFxGjVgv788BpzrgdRSBib4LGcZaRtL1DSSLmZTySTxrb81m7hgpZnaYGoX7HFRAQNgNyHCcZHCnFjh",
  "key21": "5TfsaexkxHGXJVNK38UswAQrWpT8bbC4yZ9UvNQMEhDJ3MShGex89v8v9B1Y4advisx7soQT9TQVZrp9XdCnbphN",
  "key22": "5uLi57H7GHWQwMsYi4UAZi33ynywueNdxvPMskVgqyqMB4aDUzwMXzbFmHX9aD7W1AYC8Urk4suHG4Nn3ej4LPkD",
  "key23": "2feXbCCZi5mi9A5a4txAYWvHnWymGcwRd1zJ1tME29sXYutKg4yCyYtYSeFCNHJ7TrZtQ9UDB7WJF44QCuHgnnoT",
  "key24": "3kZ5PSbVjutN2G7djToshCE7nRkFMpQXHHbWYQNeRbtHGPsAi9DQVwGW8rqCCpXbVdZxrEZoyTxkBqKGLh2yrwg9",
  "key25": "5h9tsfbRTHjJP1xpARc6xFuZWRuLiJLZmdhkUkU876pbJJvtXtbUYUEbubyhj7NdYNiXGnLM3MvrfJY37YPmzsgX",
  "key26": "4rtHmARrBrGbpA1Rwiucjdswgskii5YBLsbFj2pgJTLYsT7yyFSX2ZVJtY2wZpH1Rzf7tAmh9RB52Hk8VkhcUNTC",
  "key27": "2bALTDwgWfEEkMqFxdLpqSTbDNtfAPvuYCArPeKRL6jA6eCSqS3Pg5kXupo2upHCKcfNk6JnqfmWAncD2aZpDW91",
  "key28": "3Wpw8q7rm1cPVPtPFVTgovXdWFkJsELuxBaE56i3QaduRTfuTuZ6L9C9HA31JcVgxfLXNQiAZk4Za4CL6BmfQ4tD",
  "key29": "5BaKHVWQ7ogW388JuBE9CY756q8g6e6Ya4Wnrby3fN5jHy6q64pqKAzfjtER1k2Dt2nZAYApAkDKFZnBe2LN2kGT",
  "key30": "3DDvDxBcq9TB5hcZ4Q8L5CmSQFMrPNR95JgTNKWHpUjut9mTtKww9RqTCTX56DaSw2k26EiduT6EaKz6FiE7bFw1",
  "key31": "3vDsonUYLADdUca5Y1ZCTC25ZA343ghfXDUyrcRenZ4wiaBWaMXewURoZt9tWvU3Wo85UjsBJuJ2T9NrxxbWba2j",
  "key32": "jBgo1V5G6EThF5CDnZBhCU7ZNHYBp5xXbQLWvFA3f2AQB6LTG74sGhAeRdY95ZWuDA73fbuAbC7pEayUpP91bRX",
  "key33": "3qzhyVVqKNdd3tQzjibdGDMCQa3WAFna8um8qSYC5SB4FGy5wbapWByLr82ZaBrxCFiNDEbBbNb9neyiKedhNTGE",
  "key34": "3LGuGRwJ7NQeTepBL5SJ5C51F4rFMfDBMGSCHs999acY1HNgFdqXFzsz8Fg8ef4VxR7DoHsxJxjDRTdY3Hwy8DiP",
  "key35": "CFxMF1X48TkGNiJfMSCC5pRy1cZ785k2ir4vwLcP6YX3SSyryEjKpAJrDxfAqijnoatvsVGL42g8PFuUWM24JTL",
  "key36": "22ySdYa9zUW9i6UAZUSarcE8mCeaPUf5MdADJ7KVTZKpQGt4Ps7psvapREyL5xAyWZrmEeWhmr3BwF1qRYkuSNPn"
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
