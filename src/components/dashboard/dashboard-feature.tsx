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
    "5A3YMDsQND9xR28Fg6HR9MQJSHBt7v5UfTJQ1vTytBmRxuBk1NcDAbRaAyZXoTYy52uZrcDgum5SSatUyjD2REDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkfmjqQJJMDVamC1wToV24tjP3KfdK6X6YhyiXdxSJR6oK4BrBYXnX8ffhA8MDN3yQMtUoukmteRrsbDDwHBBwv",
  "key1": "45qzr2nzWSicx37wJZoBdrWePqsjzDxKi4dnmKMmejtfnxLyfRDsiVnkW6JaTr3XdPGGDT3S63aqLG5G1CF8iEYN",
  "key2": "2HrvyR69vDx8Brn51p3HbLid3cpgRK6PCcdTxZuhB59uNjwBcJndT4SD712GB9eM2S1MwMaCXfpHSZth7U8pKW21",
  "key3": "2Z4uLNqw363iykFery8Q3VQFRLtjb5e16bgmMrXxL6nBmRH2SZLbe7YjFbt13iJ6hgtgcxF783Fgz9G5THYGiArx",
  "key4": "3nkWpDX5Sm71HiHWksZnbxNakYRBwRydrrWUaFCj6Esw9wEg6ZCbk2gV3CTQfR47Lbc8snyUSrhLzAgRzGjboo25",
  "key5": "4LfYutAHWgXP1tyFJsQ5Vs7FP8fKdfD7L8RxnhVUNhYpiXUSiyCTg1Q1yLQJBE8oT8Nr7aAwnXaiDzzrPVatSvHk",
  "key6": "3W91G4kxXU5GKEeXGTYwV6edWUwhNm3DCxKHK96KMALoN6SnysVktvHcsS1Lqb2jxouq7ysRHTzYB6qYxRvkMJ5G",
  "key7": "kXBXQtjKe3qBAcJouAga3znxK64ab6vMkeRqXH8wV174grcfykBU5vEhpuZ5XmtpsQBg6Ym91hw7Y5QX9UVhyvX",
  "key8": "5zgFS8eX3VhVQWgpoUhmfRAaojYe9Q2NQLTc2Exv3WpUpRUVDk5ZxxZfDDuqGTDygQnLHQ658rMpkFdMmfmTEY5b",
  "key9": "66h1dinb55j99oUTRRCCyffjf3TjXdusk8WgAfdBgdwDT4rxEUZLG8VDJH5FKLfhrnBdmThQXvx36J4WAS5HGcFe",
  "key10": "dFT48tnpXAjk4JUim3dYfYBs6ibQDJQdzhyW1VXe4Bi6A9kGr7tS25eh8fMzbUHmATwbE3RR2LgZP78b4VNXb1V",
  "key11": "2pf4sUheXG3TtpXvEjHbPuWqTk6GRKLRVnj8c8Wpj6F2LzpZ6WoARWAxUqLJt5R9CA79uKYEgxSy2MXfzHLeqRBx",
  "key12": "2KrcbCTVQVLwyvB8Z2fYAR6VwoRhsMLQfuMGqnVPi9ntVSKGsQxwSuudaixu9SQBzvhTtwwpdVVMw7BN35pqxvvv",
  "key13": "3cDmM2XSQp8qfPhmyL9baSJ55Z2E81ZMC4ey3GsU7BcH29asYgvM3pHoNiPn2K7WP7rZtPE1YjHHwsakHnsc8hg7",
  "key14": "468rqMbJWnhjPosiSbwEK4kch6ZBLdmMPtxKojFqbi5znRW3ztXFNVL1fd7TVtT3MxAYNaHpvPD98ab2LPxUCBpZ",
  "key15": "33ZPfDmz9dAkBXUCxqD8ESRJbHXVaXyy2jNYefy8ByUzgNZxXpYHY4xmv2GqExnqmgZ7GoR8AqDkViXuAVxDFvhA",
  "key16": "22qocn3xTDkc1oEn3qBXZjqnsTQJLr4FX2e3K622HwiEtSfFBeL1JodiLSzZVHouzXFKa3PKumd7WM7Jp3Mh8ySq",
  "key17": "3RWpkt4xveY9g5GX6evVZ2YQ9uHxsVA1RnXvAecdeJzfqtQpVaPwYP8JqXHQjauiex1EAZGYwndid7NdwENR4Gis",
  "key18": "2ASKZ7WawRZZ6P6QFPYqU1voFAgoJS6xkXS8GHRKnQY376G6hiDbMWQW3pp7ZJJxNt3z4HUhMG6gLzmfy6cEEvMc",
  "key19": "xrtyR3C9FKad7Qr7CAfE673NiwnsSsd7zYRUu3suTtMDwMZG9jMaQ6CtEPTtaGpsJUj12Q5RRxSHtzpLd3xY61f",
  "key20": "4Fe1nmCaHu2PAzqNTRP3jauqTafz5Bj8APzgnoAa2sZRrVgwqZnXNDgSjYAHrdvXResfMweJ4UpvnVN95RnrxnXU",
  "key21": "2XboEVGY8LbqnG1nn8nyfSoVFooAXUXxYAVEs5n1ckK4rQAyeq3kfHgAawLWVR684m79vmnKp3yYf6GvQjDz4eW6",
  "key22": "35CoAGuzKaTWu6wqsZeLK3dBKXhQAAfZEEcwG1SN7m2MK8kB59nAy8R23PtiA96HzkoPQKX3oRAnLu7mQtR2aR2j",
  "key23": "mmJt8UJr8gW5GLKD4ssiKcHMtoyLTHmVCL591229gsYpi67Z39Crtaj7Jp2u1b1uZZYmpWzRKmV1jiM1pCwSAfR",
  "key24": "2ysSdQPPXzjNUKc6UszP4Wcg9UrBpxdnLzavXvJDr3xX3XZGgjJBpGHQa5dFXEZqFjG2XrtTNdtosyHPfSEnoUi9",
  "key25": "5gC2VGwp5cVoa78v42Qa27vqsMEZdcTtzQJfkfyNZxHNwV7pRdSTReXTx72pZS6dW6EZ2YjXGYsH1RPUZAxQvxbC",
  "key26": "5airyksfhsAb5KSDbDczZpMhHDuR4qNkm8XpA83ipzQpxeUyTgStdDXgaQCRMiuE4PUo2ZqFwsN4DN6T3VCvD697",
  "key27": "3NBsgvWSfFoHW86aG2KuAKTT8QGzTeU1BCusE9vBFzDqSvzwGEC4YoZCYQivawG9Pc83M4SLvm2KP1ApSTZf7uPK",
  "key28": "iKgsfkuKmT3CgibVXxGXvpMU5hgKhTBQ5jJZshkNcWpbiuDovFEmnzPZPozSY1FBKkWKemvKuCKVoHEihnagF43"
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
