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
    "37ifutxkubVK4mF9sQLQg5LE5bxA5T6951nss1aobfcWis71vNzJy8oD7FCHutaJbePm1VMUmApsFq4sFgYYuEPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQVxRUTCumsFQET2814uZnpkYpLeD6Xh4DfpBvS85eC5y4nam9v6bo5zRvhNrq66jEs1Rg2a87WkaGR9bFbhFV5",
  "key1": "5BFxKDJN2o5QkNYnah8RDRwo6qo5TS7AB3nisztjzkhFRQXgJFD5zyLBV1L6pqD7rxEfca9Ww2bSa4K8tc5WanD3",
  "key2": "4DTJQWicKL4rRQsvyW9PSc8amWVdhFKWj2GTPGs6PAqjDKqVFkyo7QuHLaVKdutQo6meY8SZrLiYQvsdPK37E3mp",
  "key3": "T23WmkSQRokBW4Us5bU6xG2T7rR9mQrXthH2jwz4eCvu7V9HjZTQiTwSRij4oxuEihcwk3pMBqqZEUp1Non5EDB",
  "key4": "5TcYSeBCXxrSAEcgUCrVxwDKre7CeF48Umk9aPW6SH81vvrDGUsKkVgXaYgaoH7cg3prDR7qxjxzuriZPSaeNmQC",
  "key5": "3Voc5WTowQ1a6PMVAv9pacY4fFHnuSPPVFSSEdyzPRgNTbUY9Z6cq3K8WRJ49hGq6r5iV5QAPSYz2Teva2Grmd3C",
  "key6": "2s1nB95k355j3rirX3ioi4u8kj9fojHzzwyg4AhUjRr2DcvoWp43zVonHcxd6DveCXDgDAnEdHkrdKf7qPGPZstS",
  "key7": "4kbaCmn6JyEjewekqsPozyGcbnfpmDcyigxJw4w364es1ptLVuvj1Rr3EdK77NQ41aEA27i9E9BRVr1eKN8xcKyo",
  "key8": "2uWNpexjqbZ72rJgbjDWuqwk9dDDbzeEV4uf3yPSxYU1kdqgMSecCKTNtrmtbALdkaL4G9FDCujqAqXJeFqw12e4",
  "key9": "2umrx7ZmcTHqyimRZFeimfYtBggMsWmucikkEwgnav5bNsYermGcw93eabYi5RiYGHXQGmhVe8HG6hsgG5sfuW1f",
  "key10": "2t6k8cbo7oYD7FNLDBLuXjbeCvgtcnFmGEc3iVFpC2qaLSDkwZE4Pn4j9ZwhLsb179s5eVkJvoDyS4ev1m2TUezV",
  "key11": "4K5FJ7ScpjUcnpHeB8j4sFQZJxA1pZuWUYNqmUwMaWMGtaQFy6yMwwwEHtgtf3kke8fdNGwFMbnk3qg3SQR54TnG",
  "key12": "j9BnMR1V8BqRbEZw6tk2dPHBYt9dKGuuivfdAPro7nRwzpLq3ShpcP8xB6qQpBhmE3tihVYRyiV1jhY235mrL3Y",
  "key13": "3QxRvuS33pmQVUXJ6ZNCNPteZHADua3K8PK4V5TCGDxWGeEDFQV1VedYfG4UizDYvCpH4Y5BbDrYnK7nggKphKgw",
  "key14": "3WL9ZBaqwEZceBUSNJ6KHFi85yhRFJX8fsvCxCLBG8MnjKAdA3uDH3XTPENcdbLfTi2V2PCVwHB6qF3ErhG6Mk8D",
  "key15": "UvFDZWxJTa2BQWCHYwPTH8RDnM3jJRtjLHnJfpdtrvv2rEBNcA7x9dhdxe7tiwAhdNnhurcCa5k7wzEV98iUxy3",
  "key16": "2WKq87J49MBpmfyPqAEyBnSeYKPhRfjm86nKW6nUMPgcuaVYFNZC9BXFkRxBQmFpMBpXr5ff4DPyNxn2BAehUPmF",
  "key17": "4kwpDXNH9REN2n6K97q44JuhVGaBwqPKYNQZmxdw6sB5hxS4izozsrgcSzHeXovPGzpToz6ekvQKEYXGc8z1vrsN",
  "key18": "4hrcy3GP5noeqCAgq5xMjUSLHKinqRBXCvXjbTBZyhYVrPfWCW2qFWuN2hrfcuxNXgr8Woi394o3bMMzkMucLsMd",
  "key19": "39Hjr9GXEGC6hM4KswDyCJRurCZX3Cze9sTCANTFL49nc1XQqWExNxiM7gctYebdAxzNMauaXxX67HTvTatbQSrS",
  "key20": "3pK9jYVWkKYX9s87KNRhtn6F3Wsbb1hRnAqdvGf2yvsQ5EYMwi7HXkbx6zm7TWUmq54zL5DwHbDzuXgStPGHbZYG",
  "key21": "AmmRhES9QZ4rQbF3dNM8Dm5Ny7UqVs31NwtyhtJaQgjsB2yihN8CHbPJGv9Xs3yKTAVJ5UWXofUjFwk5dJdzgpw",
  "key22": "5iJqwnTatH2gphLaoCwSTdD9DCC5DGFg71LXNZH639XV5wfeoWevei7NEFBYcuJdjWzvsDfijUAsUz5yTbYdFXwG",
  "key23": "recxLMXeLnrnoF1fQAZQ48MiAqKZqgq6JH6Cbwu61sJHDAAco3JS9dRhJm7DPQZ5XwTF4BCd4ac5Hfe7P2rUT63",
  "key24": "4VyMNGSXoQqbLkQwRL2vxTvQF893ATi9FzfWdJeiqHSZRHLtthHTZhvjfa4o547i4xZRM41VTWHChRt4bsSxuNPr",
  "key25": "5W1BVZNPLmFkhAKMw6hnHiqY5gAjKJXaZUvxewXtEBkZBnaGCgYtwboHSpkJVNiJTUx9k25LjbRDHDD6bd7Ba9qf",
  "key26": "3qsfi98fZEeq3DMJhDt7ZZM9HSz1Mv4nPVYcUi4sDgb1fA8xMaMmGoLZCCfB1d198aDJ53rD4BfD2dzfpShz8DSS",
  "key27": "3oxbaCZihGB8s5mzQ4p1e2vD8bdg8UEj7YBWksAR2SFewc2gU3MmFtbLKCQuFca9Cm8WjpU76tqaXbcACgJWsoED",
  "key28": "3PGxNgZqqUBftX1t3rUrn1uRMg4cLdXCWBEe33wguDXkVbUrA2dPB4eBiUcEa8qTZBubzsLZEe1NukqFy2kqAQQA",
  "key29": "4Pc2nvUaZKEis3XvTwp15FgfuGjHsvsfryZxhues6H1xTMQbgA8zKGuvt8e8zujASTrexyL34KLSHzJdWCBhuDuN",
  "key30": "2G9LW2xxYCFXHdLzwX6acMb69Yty9sLSojGfNp3vv9P9Lwt8s3dwnAsBYfj2QhwDCbhQdP6CAwcriEvbpVQHdSy7",
  "key31": "WYLXNweoPdAiHNu4eaP5YHEePmnqXZXjc9s8cAphez6hii76ecLpDmf9JqxKtUuWv8vwCiA1aHwU4rbKp4hWNqf",
  "key32": "zRYM3teHDwbcdveeQ2kou3z5wv2dtpUZMuX7PVqZenjpewQGwQiyeb7JssvVFoRpxaGyWtK5At5EdvHLSJSzrGn"
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
