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
    "t4X8QfAwhmcvEPLW3F8Gu3wYUxwnR62FfU6TDvPccTZjex9yGwzvco1oLDMML4V5r6jpvc3t8JwQvBtDVs5kMCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2nrckKtKEkEq5mRABjX3jm6F8RDejkem2UC66FxUZrgNQKWWN8p6cyvDSXnZni9bz4q4WRJU8Fcjmor4cJfAFG",
  "key1": "4tfBcV3fWwZ87J3x9z95WeHW8mHzTiSxuHzN79r9yg3Q56YWAE3FuW1xrz14GQvcaLodjAxJMCNUGZMP7rT1mSMd",
  "key2": "rKPrxF7M8KufMtyps93bhbrXxJS9dVtQgnV2FhD6TKLThhwTjGjqFR6TMT6Mz4kLsRpWVmRUPfjoFdcUtwJarfE",
  "key3": "5bAvZpBD8f2m5Z3jwCiG6BeraVeeacfKtaHzFyhE2fH9z5h9mF3TCLsx47S4wK7onim4vyxbiknhwppPkv6mRpYz",
  "key4": "3hmfJK34RbD7AKLhNN3nCGT8gcp64ZAGb82EgxgGHD7qfo9iFkAsV8Ktz5gWHCQKE6yTf77dcsk2NXFVJtYs7QD6",
  "key5": "3VUu2kwPRCDSx82PAFsn1gfwrVBH5ab8u7DpxBkD9xLihKjcM1PuLwAq41zmsuQrMxmiS4dJd1ybCR1ZRrrDKo7J",
  "key6": "3yfyxZhR7TS69sRTCbNynk8hjKXGcsso3Z5XjcgELsGUEBpVSiyxrFXAH59Y2J3q384gxve5csN6KXsRXbZC5fYY",
  "key7": "o19EPrE33cJev54tvzTzphKQtqUkPVQMqVoqNgv6A3AFQoiU2PCBZXhJ9xu6psR7TJ6eTi4VRbvtCNovoJS6orv",
  "key8": "3pU187nxi3qLnG6cyJcE4NnKrFrhpvKCsWmnYM4pTwMzGvx2WSCVtg8sUnsY8fYemPr4iv7f2YQLAxoWXrAdkHcU",
  "key9": "3CB4p1pXJAi8F83f6bEQZFafeyvZgsQmaKeezsDact1dnH3EwGB2tvvK54SX9zEKSMBXHJMojcVmpMhCV4KeWPym",
  "key10": "5keNvLTJwyfueVVoEeQVKtchY6wdoKiBTzQsTy5oqansdaEsC9tgCURgmstJJcGUmeiW8cXMNRxePRvexQhwmYVv",
  "key11": "61XEZ3TGxr4hJ8PMkk6CnVaYs5nYoTQbXuW15j3X73cYUe8Hir2H3gxzmnrmeN1sEy1whVE5Nv1shfBBBUhsNxSx",
  "key12": "5PnFFrv4wpheaQxadRiLpQsBpFPUJpxvd7Pt4gQfHpPaibZks1449SkJGWduDnK2RbrbfZyJy6uTSpjfcR4kTEbw",
  "key13": "5Fi5KYRGLm4WmZY7b5V3xQ6fLCjvtTF5ZSHdbasQRFbW9ovCnUqB1Tct6RpuDnojWGvCCzy5RoXpUpkHSJWjr3ty",
  "key14": "2bBSkGjc21J8ZKNQ436SxgmnpGTfB9H6CZYqrLKFTf1BQ4cz4C3Gv9psY8iMrV7vBcQUEZWmQREc7LzeVhgrDaNt",
  "key15": "3HXsMg2V5xBoQkKdSbct1t8uJgreijjoUn9ViRNuF6EqCGmWcNfdDYx5aj8LLjFqDKGt4pGFCe741xx5cKgaZDXY",
  "key16": "5iZbmc8w2pxMpLQvvzgVpukRStPWMh3HL21x8FT22UQ3D8K5Zp4pRv2Kzuvtw7FMdh3MGAiZds3VZNWbNVPqYHk7",
  "key17": "5SgwswDFbukSYmjHMozSv1VFkHJRuzuNNPcU5ekM7AJtCxMFrBLjH89Dgr6XaQUDD2FFKdkFXTPPyE7ZFNrpBhUF",
  "key18": "2jTAfmta85T39CCyzzhNkxpKf4mjERr5HnpBYcMbeMoNLYiiXY87R2w19iuk6i9Mh8MHFt8JApN1TPcUnqTEfN2f",
  "key19": "56xwMV5Ce8cbjpAaiBt6bSWCwviQNE3nzAm4psZzLurS1WHYS64TSrShYarmFPArCF9P3Q38NTGmx32eVcY6N3Tx",
  "key20": "5KJfzqSzd3AKugKjSxJuAwYLCLQH8t5GaUQGTiiLqMK1MPphBgZAEDniUdbj8JZrgU9yYTtVFfmzrKPqtJPumG1Y",
  "key21": "4unTTuDosuLifGhtJsnckeSE7ZNefrUgYn2CnggCFArEQ9AdvgJCoWvmABKhFeBC77sMTZGfNj9pWfW9BXN4XUNB",
  "key22": "3b3BWspvFSJgZ9HtwqozUAB7m2vqcGzpmPRbU85FhGjAP4Wa34T2RSo1ip7koynbaeSf4G4zAY5umbYAreF39UyC",
  "key23": "4vZ6qHGaEFn45VLfdP6pQ1rJSy4MnJWQyJx7RDiBDf4DBA6aj9UucjcGrZwPRD8vFbTKiXhkr87Lrx3YRuouERbt",
  "key24": "5fZctKrFmNc75mNhWML8mJriNkjkyiuNLmojayXt2XSjfrRbUpNkQ8BrxZWrb7WU3GZsuANsg6dqFCFt9xPRa817",
  "key25": "2drzazVWj8ETXF7kr9CCgrjQCdesW6N84CcTfDKdcuZWJaYkxCuWVeq7w3yFBduFpAKWnEEQjTnnSFujspMAeNfe",
  "key26": "2CZDKdRKwwc4TmB75rnP1Nwk2uYmbd8XRFFp6AauquuNHDoUi4uPSL6pGfFsEpxfRXK2ytwMCVvXHvhXMZhMBV2R",
  "key27": "4EEEh6rL1WL5wGg6LkDjSJVKxSyQWwkjvPkv8Asd5PybL1NyjNjsgQhxMzbe3smRTrFUKXHKdJQoEDWn1ajLHdpo",
  "key28": "5MxFkrj5GkQBChdG7EX5EyNkmhX1HunGBanHVPMj4ZtEhUXSSXEZkCQweyXTAwkSjdjgmVVB6fJWEss4XkeQQ75U",
  "key29": "43hbZoBP4nFrKJjHTqceit5F6Y9C6XgzPhAyBtoqbytiGBNTAK33Z2YyPZdww3mQE5dnCVV8A8RTaSvU77tbquqj",
  "key30": "3JVvSj4oD5dr2VD28RF8TwF123QWfp2ZyUxnPf5qAbJout5oVpLaScvnMDzwaQAXHZo5vVn3v5shQggNX6NrjWz5",
  "key31": "492xaGmdYHaHDnrpiZCqwg7RpJkr1mJEMmQx9fdkdNAEKqb15F9ho4ZgsYF9MTyxzpsPSvz8fZGGikuj3v6JbQ91",
  "key32": "4aEwkGPWqqBaSGyPjjzbioFPtcnQhkWC1BTJwhm27xvbi9KP6nZm9jdYzdgU4229JzZhLrqcusLB3KCV3w28Gcxm",
  "key33": "5LfSwuS969Q3EagQ7rRXYmSVL6BwXEpWjb7GFEKqRjeCtvR73yfQpPpepRC7QTzC4squxMZuYoHq7EmEEYomkUdH",
  "key34": "2CjXHxdxFAvUfqby2tDkWVKnaHMRssgn4EFiwnKxVeTqs5PyGgTXJ9gwUdvC7KQhq5ZH8TQX6RkKq7Jc17A3Y98R",
  "key35": "2xbZ4rCYb63zQdzgrpm7tnVNntn9NsA22g4ZGwt2pfX1P9Yz9uw3VnXmCoArsuu2LftKfkLi8C7HL3i74GaZoPmp",
  "key36": "5Wwh8VPwy2wvM3QqZttT6dpdbFcFjiuDb1Y4gMpzApd86BqFzYYrWT1eTz58TERnhM8aTKGsNQjfFYx36M6WLv5o",
  "key37": "44umahem5CftikxiswrVDhoBB3xmSGyfmB3vzAiKirsghn8hDXNrqXtPNN8BhoTkrBNtDrCUAHmPM3ovqFsu6bu1",
  "key38": "66WTpzebVaP6ekqHtXruYRmD26AiVDV48wCZWHyd8afD5jmC3Z3HLGBDEYKgHSQH8ucncjHJYPTnvBNWEpNFUcuZ",
  "key39": "2GB2CwRovSjFrk1aHMdWjZSTJYjgeoG47ByJUmXp4hS4ccfxCJwwQGnxJCgPqsWqRShnzDf8yxGfgtLDLj3VHkcz",
  "key40": "2cxtQDf95iKZ1o9jBoWPqVzWh6aJ6ExW29PZdAxoN12urgztbh4tg9sTLpiieJseRHwv7HLVimYMfpzGrLESmbNH",
  "key41": "3LAS58N1E2G1XbZDMXpSSZrX52jJ3wb7v2JHEvRmGiNdkgp6wJqh92L9s1fy599H1MqWRoo82mi9Um69MqRbE81U",
  "key42": "PbC4y23TaNnNK3hHEc8H3R5VLPGaYHzjvGoNHK9vXGj8jEt55cR2qVzSvDBLeEHUXEmBRanTEBzj5zJ133Td9iF",
  "key43": "54TG1NUZ9AVzhLDbk5XaMA8KCbdoV7B6BcDES3J4sdR3rmcjqUYo3jaqJoPyw78f9K7dswo34ePZDTje1kko638C",
  "key44": "3vVHdJ6G8TTqL8ytiHCngyQHeHLGhva3UxDrBm6Mr6KPmm6bfbzJz9WLrw3iAeWhgK3JCy2SeH7K4JWLsbSYQNAz"
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
