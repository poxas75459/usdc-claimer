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
    "2aoNumkF53tobh9YDGACL7oUuKk7g2NGQCZbjU3eaY8UU3cpbscdyCnqF1hCPQt2YuHL8K2ev8T5rD36FqwmpsST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x59zzjStTeaqBHfDPcGqvmrPBe72sTH7UQXp77siJUVaUvruQNYZigukMxeXhHtfhiwwNHQAmBsMsYrS8iXYA54",
  "key1": "77CxPnwUxL9Yrk5iUPcAKEDhNT1hvYvgT5SE6gqAqr9Mjqtdvh9EAWkDSqSZc2XeWvXvLG5TkiboVwheRktJjtm",
  "key2": "xAf7sSExMA4v2uUmywxrfcQ3ePxjBtw1isDjqau9kh6P8J76v8QBMZzWiinbkWmn6XiNoq9bbE99YVBJBzAu9b7",
  "key3": "32ckds7nh8VFoFAKj5Xf591VFC5171hh1bF8hUymbxDF2nfybpWGjRsKrfKteLZMFHB1m3yz4v3GQMiPZXz4QgXT",
  "key4": "pqEtsEF7qAQ9eqZYnT49uTqBXpJKkqB5oinbhapZCKWF893x3rHz79LrvLrLuS1eBNBv7AocpJUgravgKTA7JxK",
  "key5": "3dBQnF7CmVf3dPdqUpLJNHZBD7tuGcCsqBzMb7tL88SjwbrndpPJgqJH8BU3cN1Y7x1uCoiGhspWD6BahcjMPF5a",
  "key6": "55WE8zuihN1DigtixKp7qEfxSAViwb9QkaHMnC5DjqcCRrcz6ya1ZTVwL26DdTwYLimbmHiS8nGPCc4L7BSfh3Fi",
  "key7": "2tmSb9teExCbCHpwdcM22P22dNniDCyXy7asqJNQmNaFhZrwsJWbrsrL379kHuN4N8hWnbxxt75TkjPGdWciriUe",
  "key8": "4EF7q52KYLLp2STTrgcTVZof9pupkZ4Zt7dhH5LCFvSaRSkfej9gemqsqZh5D4DKAt1KnMzSdEPKjyJ5h1RmWatH",
  "key9": "5M8j4dhfsRiqAoppsfuxAGM821EjYTcNBj2jDsggrdHErDRD3x4FJAwTHDAifQkp1Gi45r53454qyFnP77A1i84E",
  "key10": "2UEp1Sn3476zazin7cAuUDydJf31WSbG8gS1tRzDMziyctmh8Sm6VWBBwxXi7GEe3KA27zXgUYLQB9212dPSa2Bi",
  "key11": "DdyYHd2ka76k8BG4ELEB6ufPSSxik3TpLbzQK77jzJTobTF4tUD6ChnVYKSe8TJ7zNpv3bLvUe43RJ7A9qakYD3",
  "key12": "2UQfGDzQVLze8TY3P1huQDuUAtvgkt92fPE2Qz5sPs4781284JUy6ScTc3ezBLG9bUsuj8xrC8bhENDWYVrB6ca6",
  "key13": "5otdoFknfBpxKC65n3UL8EXBftSMSenX68YjtQscmZU9NGRTzPCTXDcepNgrV6vJwgS4i4UFaxLaNaKXMF1WCYtQ",
  "key14": "2bJpLyCdeYBGCpw8DrbNbdRPVMCVNRY1X5zVVohYmYi1ASjtVxiWXBqTMBQX4qv8SjwbMEqc7eapQ1LT4B9CucnB",
  "key15": "2p7cSKNFSrGqqe35LjnkjBdTqMkdsJtYy8W6kcVHxhe3KpQxRsdammBQtHgitTtMSqv1m6oqLkJyRei5K28ZGPXL",
  "key16": "5KAuC3uM6QxP26kTut2kiFiMnK68wCrF3k7ngBmRMRxZfn3zzTTrtoDU8hqFwyyn6Vhy6bxxx19pUK2BxyTZqa3q",
  "key17": "5LwgLmgEhhW1nD5Es1DdqN3jvPHJecPWfAqJiyzfCxH8GT8TbGsFSJsxTmAh7rBMxYKnZwBGdEtGJYLCaWjqH4Cw",
  "key18": "2bmfUHYrh5TX2Whn4i1TTfJ242AWg3ksPAMThD3R9wAYEGJfzWU1D6yV3HNRDzwpzmm2WLr4GGZSVufZ5wXXgG5Y",
  "key19": "4LQBb2oDyDySsrbJVQVJgWiFmgjSb8aeBcqhjnvrwzsBvnminkPWvSTa2Q1vNutAKxT6cvyWGx7Ni2hDD3E14faT",
  "key20": "2g7V82rVRu78YjPEhRHiUJ8m5ATZrghR9KRdGxdoe464UPoiFX67YRXoCY6kDQyxZ2sF7eneLcbfucL4FE6xbMGG",
  "key21": "3a6YRLxRq2giLp3jobWdgk1BEHk418iGRVGKXoWLbCyAC2C9hT7E8TbLvzJbRd2DMsaKvv8uDmNuEYMxWcqvBw5L",
  "key22": "2TM8cgFbrLGxSaNVNoVoJhxQGxkfMjJ6Ts5VqqoYqyzy64yHQokAxKpcwVmTzuRHnCUzYoFVSY2fSACef7L2Ewfx",
  "key23": "5gF6pngiszv6YzhogvSUK57CdN1asimAc5PRbDQ9dGS5cmPBMGU8wJgXVnMe7vq2F4aSEJeSgpQmFafsCt2msnPa",
  "key24": "5mLLbT12tzp9FxHt7wkJrbKSqM4Yet9BZwgSGpnGTpssMoqjdx4KdJfoL7uqXnU5cgo3FYydJ3WoeAZABV1neC4u",
  "key25": "5xagLRvqctRCpsHuKbRaTzrV7YC1MzfqnYqRx4DoXDEKaBKKdKj3tsRFHAfT64fXG1a22yXR8unbDUvMZuCDbpS2"
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
