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
    "2oZQQsjNe3oHFCVnj8owBP6Ntr9uETNHuSoomjTTfWijofJbrCi1ZWnqeWzavKz1M3pD41GVdkJmkUqn3wTVSAah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBmBpZYYfpVL43M9pmVcP465MxR9oNEBFTjMRYp2MxfYTg4soXPmxZAU6QuXhZr1NXTBBCkgAN1u8ffxvhwCPHw",
  "key1": "4w2dxU9rp3oPMzjoXz8x9pk9nXZKLPNMPMKX666xBsREhKAKeDLD16zq2oB6ZpyDHSvm7jutV4GDZ1QZgjDGuuS7",
  "key2": "iGTSVcWB2LmLCHeV34SdqTeA24gkGFcYyduyMY1JicvmGGNBo91tFuBnXZZcog2LHBY6JBzJvz2jUReij7hs9zh",
  "key3": "4wvNksyQo777JU8ywPh8qwmNTYf3mJvuUcEMVQksU1f5ddr2Qu1hDYkaYRWXV6wRJigB61mZtLDmmviw5Kw2oY2v",
  "key4": "2WE6dbRxrS1iad9hY7WtLR6Dr4uXG665dwVs4D6gPy31fwumHvnLF8fpeKqNp2xk9YjuNJttybKkw4DTzLmTnsiq",
  "key5": "3Fmmsz89BZrYLhmbwoMPtVJRa4DiKzU7Habo2bh4wmdPJojTQyyrQPo6EGxb1SYiv8teWZqLY9wc1zJnHYJHLkUj",
  "key6": "5FSv6TpyXNhs9JenqQ8kZMXv7spUTHkTq14iVVbGRKEVw4NWZsvyJgXLiFiyoS6JHHEoBqZFNVi4edNRw3QdPbjc",
  "key7": "4ccachLudWQ72Qcp6W7GHVo52wYNzh4QvPXubdgxX6awfGubzfqyidb51m1ijkPrsmMZG6PkaAATDCe7foXbFdEQ",
  "key8": "3wwf7tfc1MNppbiyss5qph8QcYU58GZ1Lzgy8R3pei2LS35hBFbFAE9XZuiHnvdV1WLSGGofbYRYKPSLBivvG88n",
  "key9": "2PXDCu9wubW4eT4GVUuFNWuFTMdbnUw91S9tCa2BoPsJdKDDWZ2tekxy1hoYxk5VG6M9Tb7dUqLDD5p8SkqdHLCP",
  "key10": "2xJmeSCFmzwK5xbEYWa9S4wNWunNcrddTNp4Mgf3ktDuUFVp2r6M1dpvNXTuGmsE8ELCPDr5X1zGxH1K5hSDeA6Q",
  "key11": "3CNjfZa8PdMxHV3eWiSAfXGcNy2ZHxrjtX7Stm5BX1Rg9vNgjyHxKJFkK8w5KEym8EhnMkg8PsSbEZHd6qkgmmkA",
  "key12": "DL76p74WZLTm5Cv7kEqfQPA1Ktb1JZEEosBVbEvhiAv4NutuYo8ggvo7MEg1o38M1deJBNnNZmHZhxKeTZdshvu",
  "key13": "Me9UqJTqdczersHUXnFkEX5CwPtfF3EyF5ExgLE3zD2q3mzqyRAtJYVNWFvMnmnJNT2czXUGFBkXEmYum3jGKWc",
  "key14": "2gNomAJJ59sHwqnmNTPhwwEUAJPyVV4TzPMhBmjGow4dcXmmTtRmZ4GgA21wN5DcstpC44DLsmCjAXNnuJXsfHAa",
  "key15": "5CxF5sL1ZbZMcLW6N35K4EshRKUX48nZtd3xqKsjUPJWwaaS3KnyP9pxe4YqJfnomhoXTXqE9tdxZaFXToDd6Nvr",
  "key16": "5sinhPnNdgUbEcGNn5BTVTWWkCf3f98jMH4oEFLneZN3PBtwC1C2cuBK3SFnkcekQgQaNahYz1Dgy93goBwE3UHQ",
  "key17": "4GH3v8JbpddJt6g6q215yKfwcM4Hf3q8dXLoz3q7tLimkwjsYDreXVnYzADKrKbrDzDHquZtwE8t6hXWNTwU3Wqd",
  "key18": "39r7NtMrQUCLZc3wruXh2bPsjs5G4b7KvcHNvj8pjmusRzrLkwUGeb9eQGLFTM1v7d5grGnAqftLx8fWQ1hojnwo",
  "key19": "44sy8VDXCqWY9QLTCmharZMjEDCJEVs3473fnbXUTDX6uzrmJVTWAmiv3K59H56HprhY5P2vztfPsgA5sZdpMTT1",
  "key20": "5pxWvgX6tWdqe3hUwnucRVhWvqK2VSyZwASVL3LwS84D4KZ3nPBNDCw91sXZct7drWadF7gqWN35FDqh4BbWhmAt",
  "key21": "8kcKjX3yv1YjDpN5E7cxv6EKuv3cS2eJuEmFnX6zbCWKfyVezCwhQ4PiBe66kRSRD1KFkLhNFfBS9J45t6U7hzj",
  "key22": "55bVadF5HQBUj5M4yiNtZ4fcrAXPjQUK3ymLvzD1uEJ6J6zC1jU6aGiC4PPrmKsjxKmuxsRThTvmPZmx8W3jy7GC",
  "key23": "5zD2443zLhpUFQ7WT51NZszTwpB5zvi8aapVYYQQC5ZHGLURLjxk9jdHtmHnPAi3cXz7gTjNa9H1A428wipiG1sK",
  "key24": "37steWvSxDvw13ZUCLbJGUhaWnWs8giYXufcJZBQ1gsbbHrGZzj4uuP4KRkXKhMeUjqcSRTDbVk1PAVpKRFQ72sb",
  "key25": "2czfJv8vyzDK7RtPp6vFjbWCxGTwV6ET8fDgEanR5VkDDQ19mi4Lb83JBF9ukJxP7PgjenLTD3mFumVEpVVK4vQB",
  "key26": "56cHGnmAfCihGHCCzrqSBpL4TqXcmVVY7tKzPm1rd8uCsgedzDYg3vfAYSvwZJimY62yA2yrXZgxqnzynLSM7FCY",
  "key27": "3k7vaUn4RozKPz4uAsVwW76oHvWSVfLqUwn3ENwwH8h7gaq3ywzfB7yY8c58iJQW8Apm9fkWVRR1u1AkLey1nNf",
  "key28": "4GsZfWp2GR6Sp1gbGarhd59YVShFKsj2MAfNyUv7DbRXVDw4NMQcFyifUWQxSBWn4hLnBYJknahcGWQ2Jpjo2hXt",
  "key29": "x9D2WfDFRQKfAJwuEGPwtAt6SJi8vyxZKecwPFE6VrxTZbysDLC6hQWBmRqVQTdgcMGTHNcsnszFrn3efwFG75f",
  "key30": "cEc68zSSX7FK9k8w9wokFZb96JcmG7KorpAm9ore5TVZrWmYmuaE6pF3iKz9pEAr89bzKKp4PimWKUiTFDawE9a",
  "key31": "5wjs49QysHPESgveJu4EGMiks9KSwGPqhcsfm1YEtxu65XkC4kexwvkXjNxeuj34mSs79w8VuAjrATbV8X1mTBmc",
  "key32": "4ELDHMLmgrxMbED7niaUkwZqm18nDZe521hQdvJGGTFTReKpYsrQ9VRv4dzMeukHY1fcGSnkQ9ZYWhKebYJVAcbK",
  "key33": "21LW1ND2SnuGG8aeeTaJp8ZczYwpqMS7R1RviaS1GnPzAwsG2FFsU145wJhJPnsRdNyPadhTx6eitTqQnUsfVr2q",
  "key34": "3u8bwF4YGoBrpP5TzYwCJgHunDyKgmGwh7TBome2m3JWouubSqfjnibf1RYFgNi9s6e3DVhkFCvFJfHnGPkv5EyJ",
  "key35": "5agPugGwYterjfaaQNXrLdk3sTXpXhJ5APCHjbBZuTFbRDkNoLyVjQauvDmx8CQMeuFoueSGNSJAUZrQyQpPLHoT",
  "key36": "2mxAnpNB81WDun8itbyfDGTSC5zdDZbRSEoC8sxxLhdoy4iyKoCMkNAYCMjAxZBzpvzpWjxfkz4iwgqi2a7JvfLw",
  "key37": "221oouejGZkvqK2LSwetU3QVxwkeCSk4TgK3AZ197s8REBeHnNwrjAiXqZe6Sco1j7vD4kqAygqFBeyZ6YMLu3yh",
  "key38": "3zvudZLn6tnEGptXoZkK8DxRxpUxKBBSMwCbxpJ9A44vDtN9aVBoFhYn8q2RJ1eb7BbA8bhcgnNpBZE9HA6QN8fQ",
  "key39": "3qpWVrKtiF4ou8RQ8jpzAGgkXcMi9rAbAgjmamZ26TcQEivX92fMVzHZkn57dvV8cSsxTxE7xuu35DUpMfkDDGsW",
  "key40": "4dJMZDBKiSTzpmVHWExFfvC3DYUN1kUs569yBYMXrEAPQ9aKeGgKnPG61bzd3WeoNeyusc7qLXnmrTCAt4JET1T4",
  "key41": "ZTHJpa3nQ4kSQxjRk2X2cvdvP4UW6EwUxnrz3zYYFT92brwzEG9iwxL7NU4G2RGhcVaX1ndsVuqhzfqLqrt6VaS",
  "key42": "5Dyp4wbtfZnNLmhGWuujzwSxPPUNSoXYobogEdDTaYvAzr7ijL6f3NqBxZkEYvPyPnSPQgd1S22oCdTrFFJsNtFh",
  "key43": "4Hmg4957DUd3c2Y9avhGujwgmNmZP8nNuVDNZjkJSvncVrUi2hmyZMUQabxqi8jd6Z49S1ToKUNcEPYYTH75hwDW"
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
