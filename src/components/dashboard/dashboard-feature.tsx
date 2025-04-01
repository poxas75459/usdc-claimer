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
    "4RfwWHnJ8tx1ZmUho9vE8gJwb6jaQdzuwbZ1gTApAPEiMneq2wJ3wx3CbzbknxdsptGuv2eD9qaV1xYDEDETjKxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oQFcrmVY2rLMa2XSX5dCwhzf9Qe5K5RVHrN7ZSwdSkaKentz3NpPry5DunqVjDNbch3VzkFiSbRXB9JGhP4Uh",
  "key1": "5XqQK616bQgDe19kXg1ppYnQvW8rfptG1p8NdQveM4mMwcSk5dcjE6XbNdkdFRqU3K5dHzAS8MBrTH6RyE84THBN",
  "key2": "VcaRjKYAtYPER8PrLRqBuYGdq8PsZcz9Dg3NiveAFuq47VLZTnUXfUJ7ZRRpsW4QFeHR1nHvkyTkwaGi5B17MAW",
  "key3": "3R5388E6bSEje2Bh53TPDP7FtuTVvYaFRcnFDG49suR6Y16XrF4R8aKHtHPBW5RfXP4wW51mX8iSVWQ7arB8cLLU",
  "key4": "2YSPZi1CMLmcyEySW66mrnLJ4D8YPCg4WDgK4h14ncmNkSu1kMSxPBGrhptxEk1EAYsWN4Vd9Y8BG9NuVnmrKGiP",
  "key5": "wCDnX34bQPHVseNGXu6Cvinek3As4rmFUEvNA4obUekXrvmKTLPeZLsHRoVd9JFSbQpBBRHC2bjrTemPyMHYuAj",
  "key6": "44DNZh4dn1K4aY6HuS44Svt3JojudSEXnpYi3ZEfHSXQ3hcxbhThaccE57hidEX1WEfFNQdcVvHPUHD6LboKojdW",
  "key7": "3pfXSJ9buQnbEmiaaP23C9MvqQmuKUxQkMfyss67M2D63zNpp3jF1Z2NzeeGX43XozZXNxSDnDFUSHXwutmSnR3B",
  "key8": "5bx2f1aWaK4URTXHNUa8KgBA6szd7xaBv6rbsnE5zUMEa7duVm9hMe2W3anhCFocDZpVDDMU3j7Q1LgSjWYQH92N",
  "key9": "YTfVP3bbAv1g4FW8HYcdS8aoHc2rFRVTZy18cKYGLf5h8K2JXchtE1FT9BfvkhFNTsKrc1gsuPr2AxtuAuVeaY9",
  "key10": "5j7bw3c8srRXBU7qCKxYb2gR4HsqsMWhjfPVS9BM2Voe3yBN4AjAvj6Ke6dVyHQRX6mECZyDPVv7NbVEjXxNyHFX",
  "key11": "nLv55niXpybVmc5sWkPnEnfU5jrbmS5KWhoTTdkjv6ybn5L2wdJtzBSJScSN8Kf44zsLPk7AXdLRnTrxy454xFD",
  "key12": "5XWCPQujcdfWe7oSbRo5s5d5wnYRXH7EqWLCQrTMeyi73o9gip6An8iUebvS4xYrmxJwoAnWHVVyku2Wh4jR1Tcr",
  "key13": "drdkio4t5LG4HRiQQM6BzDEr763YNK16Yt3HLj2MNjtJkqHcEmxjMPTurrA6euQ5USnPAvgsaFAiAJjntp95C4m",
  "key14": "52SiknWxqYaSssGRHt28ADiMhk27XAZgy2A4VubFgWatTYH5PQpaXAyjsvSDDQBwrtx3tRuCMLTTLt6uxhD3F8Jz",
  "key15": "26RqBH71hzDqcAJX6pLGfSzoDouLLwTMjfaCM4HadgKmWgAsgBay9rTZN2kdZr1kPeSGWid5u5gy2n5nGyk8YWyv",
  "key16": "4p43GVuEcmFdzn3Xc437JHBoLWdGxdMoNHP248RUz1uiEyYyKXcjLVDg181pTYWzJK48ZnQNJnifCPiwps5U8NmB",
  "key17": "2BriikLcqdzdoJBeswazpjSqugSpk61iDpccvNCE1a5UXQM7divzqsEiDe2Sk6EFx7DLoaoLSbrZTb4Zj8dGutpS",
  "key18": "2bw9K2miFdgzqbe2s5uyhVTRu6uhiCVsz5AHXcmHHurhQaaQPD62mB3u1PkLg24df3kpYZoxV9XVFSXAZzSXHpcA",
  "key19": "3zKbr51hVTfW5yxmqtZkZ6QAxqFnZzL7gwcgQ8vbcXMHWrrivfP9ePLQydwjxv2UVYZtwHerNga3am1PH1fKmix5",
  "key20": "3M1akt8EeTQBALDFAQEmMqdP6qgpzv2vrJ4FCvgG9feqiRFHKhtowPZaSX7QYRtwuXAJqhGuqtSsk9LqSxAMsFcy",
  "key21": "5UBdJXeGhKjoFYMPwVsnpGTXEsVzRMNYoLyJC1TLgy2squDyt5tQni4DZ7enwqTb1HRwaoji5sLhqaZ9CpNnvEby",
  "key22": "25vzPZwREDu32X3AfU5WAStHgjvxA4JciXFQbm4JgyfV196xte3XqvnSt9dojhBfzZhJGQ4GdPSbdUA9E2M7hjtB",
  "key23": "5S5yyGtDN5g2xNKR66onxWHLQE4evQf9GMh37vJeEZLbAagj4ohZ41yun5znzJSWJMS5NhGK83Y674kLqFXHBm2z",
  "key24": "B67YQr4maDT9K698k3YxhBmnfAQyheq3DAwCzLGDGU1VNrHG5YuCqsrUusCb9ptygUQsLHnLRXm9PpEpod9NVHA",
  "key25": "kzBZ3mnAujLkWyYw7bk96z3ZL79EyomvaAxsKZ4m5XV7ucd6LecqvuQNASfNL9bKkGYaQh4HRoZDpzRZjCZcg4K",
  "key26": "4wktmSnyAguCeAeALUb1m7zXdHcJHiMbfkkN8wWsoQS21LgnvoQzsRDQgWxcXkPmnM8H9Gfg7EuifRB1KLvwsXZj",
  "key27": "3yKPKdY8kh4SDKoGkSurAMkAM2n4h26TXtWJRodCW8QQbKf71nm5eanqScjViFEUsTGJEWfzd9Xx7BBPbjkSpK4u",
  "key28": "5jDGSTWhK3tvg9oJq4fM3XiRnU4fpYgdUyLaiG51GmB5dodufHX3yNw4mhfpGcBA1PYmdDH1AqqbnxmEBfeXNjTK",
  "key29": "5NcP8qNppjzEFBP5AjCznPArBrzKNe2cbdRfxmbhYgbXfZFQ7r1CzBCqk13mz2TD5LGjDVNSMfqCfSknBdCQxF8",
  "key30": "4T6xgvxHunCYAWK9n8XwBiyqgrPDW3eauo1BgQfoxT4864fCdQ4efyehEvN7p9KAdVEai2iTmfvmKgmL35fcAxM3",
  "key31": "3URAXpTU4vf1kPVtWow1UtzUGC4umbvmLY2qya7ghSZpknDxk9YWpgQTYv2UnuwD6pFxXAzFFvFTVrEBCMHuCmGv",
  "key32": "2V6ufr7R53wUx1sgyvopro6WEBAmECrBKVYZAsDDBU6s6J3QGBk4fLx8n78LMcWbYBioZemyHYBBztj8f74jnUKB",
  "key33": "5iPiQZau9KyZWx6f8Wa96qZpG9jcAAUcYCgNe8ByJ7iDTuoY56MPuSZrMZvZ4zXSWjXoFRKszrJWrjCFJJZegHq9",
  "key34": "22sRbHAedhdzgjo2YHFLVGJoYDQAbRtQKPCrcT5gdgutwXfNjTAMcQuj1BAPwpyQw9ArbjaChVKsHUxY5XWJenpn",
  "key35": "4PhDv6WLfzpRFt2pGTR9rVNEUHxAik324SjzC4KdjwRChEbcba7BBZBo2VMhR2MGiZ9PFhdYwp7T3mBQ2VpdhYdZ"
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
