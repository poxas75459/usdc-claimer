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
    "5thHgnuxwPvd5toC2fHyHyVodjncEW7tmzJdiqHk4mdpkwFZoK7aaPXotE4d4Dh9562Ldpr4v5wedaDuPgS4L5ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Whg1KZqZ7HAtvcV2c2NpTThKszNCJmNYbendwUFE5F6z3texsJSWXWVwSJPKJbYumywqHHUk2vhqXJBY1UBsCyo",
  "key1": "5ZB4YXgczFyi6ydFQfkhjQoCPxkg1jN5yvfsbHcvEpLx32GHn4QPxpYqsvmQbpU5jn5ZknVKh4XHjyQF6z5VGgsJ",
  "key2": "tAzwkg7HR5J5bMGdjtayjWpNHRhttXSZyTvW7g9ZDWXXD7Qcvu1yj5V44VzpyKD4drpZuboixBB8A3wNSNx6f1w",
  "key3": "5yyFFABaXKAtxoCaE8mvFF6T6YhLSB25aAJnxqzKDz3uG32snwcQYwKmtNV3UY41BPrWRujBQTUYz2ubNedeCYBQ",
  "key4": "31MGPfPJNkZW6C4eqTYe7CbAkuNuiykERVaWXwvYYYKguwnbYBr5JNaSubT2TGkssPhnUecPAx8SLHeurmcrQMyH",
  "key5": "3tahF15R7gRDFDdvNs3A4ecRb7rKddWWJMyE8oeTfAJVZk9BAUFSiirrPWDeKgQ3xNXM1RHXbiea6ZsR2fK1v8Hq",
  "key6": "25MievEprxt3LJw6orfUHiezS7TvK2dxi6EmdiV7TgxCML3tRWZFbLfopQ6Uatxi7M8MP14yzhUueLZeb76R8tec",
  "key7": "5zcsxLhtVDh3YLDWrh6XtNwkevvu49aT6j9WA3hM1pTzi4R4dkwH2o6CB1nptR22gghMSkRHvxNQDfoQxuMW3EJW",
  "key8": "3YbrMp97hCFCtzKpLMEg1gnfo5izoXd1J8RQzCuvnKMYMpaEqf3PPpekGDHDkeQNPD5zf8CTVGArt4JiixRVzgV",
  "key9": "22Bcju4evPdGZ7A9ZCEy2aFpBoxWQirNP6vbae5zVB5qAwWRC1iwmKXBAiCTZEdXm2HF7mnttyDF8RmG5p51tTUP",
  "key10": "4z2shpUtCBrERSufVm5vjcaEmjjGgRSJSGg8Rbuo4nUdie2RcoD4XGHJeuT9fFC7vqnRj5kWm1vTXJhoVQ4Y84Gs",
  "key11": "3nvkiN7LMETkg4Etn9Jg4X7oq5KpFLintxJTGeUxpYjLdz2U5fFLH6y17naG9fFmNkpaGPFhU6wk5tC2JEmY2NJu",
  "key12": "4Hyt5TDGQ5oeLnSXi3nb66GVMm6hgpELzu3PwcNtB1ZtZewDRm2Ri6i4gLvxkaGYhLgbTABfWAH1fgyX2yk7b37w",
  "key13": "2ZQuTVxoD45Ceax8kqoo2xX1Ypje2bsZE7C9VNAZ62RDBFXLUwNabAJtXV1HmFGp7ZxsbuQ2xentzLdPv2nagA5B",
  "key14": "X3DSryDGjMWjNihF59B48chKuabFY4sVG4vBhEjioWjxHyZ2GhwzitfdVAZV8WTwj1fRdyDJBFnveDw3JfLYZwr",
  "key15": "5gBcQBzS8Xeijn8BMiUywEfbJu8iDzSUHjLwuYdUZo3rTexGXaeGYevdpKGmVU47CmBV5jVkWW7P9ycxYBuxavT4",
  "key16": "2yYKhEuC6nA9iNZQ2zRNFaZgrzREixzTtUESmPqHB6dFSxUQ38DbPNtgN98xiys6q337QVDtZPtFVexvrmzDxyKZ",
  "key17": "53FNdieJfvMw6s9Jbi6uTzWyDh9eNsDDD9cuVYcLucTrKo9RtLwv46MXmfm8CKwtWaHrp2EUAtAq7QmCExSdof1t",
  "key18": "4aLXmCRaddJhe8gHU8Z3MpiGzqXrfLgpheG2qUHvTwZPHTjwY4dbHCvCEuPgTWputFstW6pvTKz7qcuAXYadobVN",
  "key19": "3nxJcWVQZffAiueriTk7GXQfNPxgaokqcr9H8jEohJ7BymzFur9CarnFBXY26ZoDf6x7WrNTybdDELomB7igFRzY",
  "key20": "483nGqAUpTVH3tZwmLjoct6etNZxa1HuKyR6ZUZet2fpSTfciJ4oMGgB3UX4htx8D2NAnhuez8eKEiYB2ijkzqoy",
  "key21": "4UtzNMdH25G6Cw8nHqxuB1uVLWA1xUtH1xaQof4uNFXgthDkry97euYBETdr6oaN1k4XM7aHhnSNaAGdtDnAEav7",
  "key22": "hp7Qav7LzwD28BtYMKMCAaMfYmvwYz4DfmrgdXRira33sxHG4nJ9tk1kPdWH9PMn5G2M4cahdPtXQsN1RqLZwyW",
  "key23": "WawAU3MzJ6CZEyDc9N6Vv2uGtJsmxoQfnYnQ1zVeYpoXfnXmTsFid2zqcUUxRb61Sm4Yj2496myg61aMPJtWqAA",
  "key24": "2rYEZFfhxMZF3fgyTgdrxipFZbbER7auLag3aGZk2fcATZzySC8tkaXi1EGup7oWeen7hjFM4LhDeEb6GdKpSqUe"
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
