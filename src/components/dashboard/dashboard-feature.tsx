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
    "4i1bMEZCd2GPH3aUiJqX2tcQBws3b4B8dAvMG89D7NEDV8rfTWnLW1pc28KVxz1ChC4NYCdv6xTQEhKwezZhptJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HiqpAyJFmLhfBRDtKf6QMJiAWbXo1P9LK9RJQjYHSrkC7ijLoEvq2EiY6V2vnd77YUqiJrLVjPCMi6BPGVjm3iL",
  "key1": "3PjQrZFNxgy1wQ8xYkfqhDhtfsjCjgDNe3d58CHmaHznTrCTLh9nXNrH3YtnSCwLXch3JcRBaz4164qKWJmkGRtE",
  "key2": "5XAduZPxh38uVmCmTVjsprAcqPqCuQ4SGWu66ggddqmqQPuCyeNbYZ3TYWLAJeuH1Yzj5QqczzdCy4BVkP4nKXZU",
  "key3": "3JyZTFt7GmY4d15uQiQmF2xw83CZtydKiYVhAK1ggvXswtyeVNxP13EJN9xd3sFUD7otMPKfsAZ6Uhin7oL6RtUb",
  "key4": "3zmUB4xjj73tGhnk7R5Viup8dfYLgTfrjXBzNDpzvWgsHVYfx6BJRyTkoB4zz6ug3cGoRWsgFgeHgZMdVi8XDUfk",
  "key5": "zhfgu2E3ZYR3FMWXKHfeADMXzYzJ9XwNwCGtJKwxhkrbCwap1EbG3WneC4MCfFsRuqAm5JTmneEnnJZocSCvkEr",
  "key6": "26feWdY7UPViQhHpY138Z4WsiNZvgVCmgGhMVsctkDoLnSMZibMHQMHC3subKqMy3ii8MkkWZdnyiubsmBM9BVtE",
  "key7": "oAyvmxk93BnDGB66ybDjtsa9WUUA3bER2FXyGmE1erYb2Lva3KD7YEkUcj4ifhYTga9X8dagkYVSUaePhcMkV86",
  "key8": "2t4V3fT6z3GopZcxyKgWS1KBzPCPWLUH23x9jYEGcHVmCWAnWWLTuLXGBVUZf6TvGG5QF7oVdJExR95rrGmTtgAi",
  "key9": "LfaS1qDrLSos1FYfLuDNXyf6UvrkGcxocvkUZJuz1djjyshL4qZjZcU96fP8AFvBZfGCbD4fwaTe1ACLEJ8TyzA",
  "key10": "4S3gzNgbHPxxd9ELy6KgRhkDjKr7NpZd5YjSZJc2pStjU1bynmxU6oVckSoPkpJeDfU9bAFg84WPBid2Rn7hoVE8",
  "key11": "4eespqs51pBqW35DgPagpZmjSfMtsBfQouLCAQ31bQbFNxxtNcnh9GXzJvR6GpiebDy3Xy7mb2j61UU6e1sD8q7k",
  "key12": "5pVT6at49xDP4bsvoLn8cPa27dtTDmoDyZrazAd6oRAh7fKujUTYRz71zRiDzgsMy38Qb7j7CuksDwcyE98NdjdV",
  "key13": "36mHLLK2iwTr3qyN9WTZkTi7sSbmYrL9RhGFKC5qHCAGmLPbscU7SxwwdV4F8g3HeWAb2nw2iArmuTeQNjBpoSyd",
  "key14": "3kGCD2L1hX3BGBadKsQitonSaKVgEV4kiyRfFfhQw66cLmQ7oNRb5w2T771pMjQnPM1gT9kkiwHznuAeShBKfga",
  "key15": "66zQWNPK1MgjVX5PufvW8NhUUUmMWFbrYmHXuLe5LvgyngbXVYwnURwKJMkmVpGofEe71a8xbei2t4KagWYwzkvX",
  "key16": "sxmeEct9BiPG761TSvZYCruTgfezTBNAspyFvL5T7SU9MGiDoi2JqHr7B6rkm8yzSMqFWT8rFnVRf97MSRLwCdC",
  "key17": "3QFRRDA74SZEKGGgDHZYwiWMXUTEisHEN4fGysgLCZ36xBD5t1dZ1s4CwBdRixXUvkR6zZCZg9SnzPn7tndmGVFG",
  "key18": "4jKsJCuTdovKUCHCFAcwenb7pDeUZxq98GgyP4uQG7cbgjGQFWSanA3MNohNUMTL8HnZYK7igdgZSGJXSknn6feU",
  "key19": "58kapFZUTsXbUjqWSM987NriLP5tbxdSmxTng8tSxwyQRgNAKCCxiWk3najAMStUzzEWi3WjzSZGsxtrgHsi6h37",
  "key20": "5sa7xPyFRmCGjJ2Au7z5hhBG86PegNwchAyvW1eQ5SzHjTp2dqbigBgy4bsCGrF6mxUbLMcMM2GSzwWmsc9MCV53",
  "key21": "esFsUUh2PqMTWdXd79JaX6oRg5fF6G2Qmoz8rL4j3C3v7jgRLTcEfbpaVBTLTZHJ4tb6CJWeDkT9rF3gGJXryGJ",
  "key22": "2uvjexTFeNM8kER2BYbC4KvGm2ghE928FhWKE4GneRoCauYriAHnwHxLC7LZrGCr6SkTTugxW8fLPT1inFmZecU9",
  "key23": "5mFmcdPeKSxoAr9rjR6J729RFLpLDzCVjQD2mnoaGCVfxehr8k1RVzwPQY1DKb6GmQ2qngbRdwdH8xo2R1kQNWkA",
  "key24": "61Ed7o7ajyXUnNTyLFQZL572u8QDYAazrHP6UfvGxz2yGzzrt2aJRd4sBc6PNTJYwy9sgaNNbvqrQruyYKKaE73K",
  "key25": "5bz6fL8fd6GH9QgSwBLumH88PHBfYjVFK9bEAmkeEzyNcsYimcve25vsKs1AiEKTWe5GjhQuprtYX3knuxb3cmD4",
  "key26": "7TxaWAYSzQXscFXUS6DQkMV3KuCbkwBgZw2pvq4d6sips1URFhdW2ihdYULQoqNiuY8NNvbM8sz1Fzh5bcJ32kn",
  "key27": "43XHHnnjmxaTVJeeoeJ7RhCQcRVAux19KKFLM1fHddkegBEvo5fWTVMr9NMu865PUyQnGzvjuX54DSeh9KNio5Ha"
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
