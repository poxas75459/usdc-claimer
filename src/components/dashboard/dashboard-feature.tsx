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
    "BcLYWeziYUMKLaaBX63A8z4x35Xzjfn1zNwea8Yzhru2PbNTSLdL741DYcDr2fZ3PiVUb8kKmd1Cmg1Qwmffeeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vruJNUi2sUfCakDjCoEiaXvE2PXQgrEtede7AJYFcYfWk28oAftLGJMNRQwsaciU34SFs7sD4WotfeaRDqpSWcj",
  "key1": "4NeoKJEQrFKGWHnv1bvpPSei5x98eBVJjHpMRze1jQZpJ6iatWGF3LcJTtznJFuaVLrwNAcekF1VfmETWg817NCD",
  "key2": "vbDpZiwWaNMedxug4vfhjNjxXg3bJjD7LuBeStnj6hrrpDjUFWjgRmKUS4pPCsvZiRefZhmovX1kU4wGagq5HuZ",
  "key3": "5bLfYQ2mVBXr8438iyBjcQ6fgBYG4vo2FBHBJ3PRyMXGq7uVJPGFjWqcdnmWN4PyvFqTvFaPdZZQd8h8gSgFxdMX",
  "key4": "5QAa1HwSxkAsaHNwNkMxUfY3Cxcxq3EuLunK3mX2CqaLn8FVdfSRMvZmy7z6muePSeVGqeNwCmnrkUNwXvotzqf3",
  "key5": "5LfJXUV5nsaDGNZP9NbURfwGq1xHABBJYAALGgEXv5gvC3wX9BTHbWdCBEDqhcc9dUUwySRSrm4J7qX6qkvVh7dd",
  "key6": "5aNZTAD8uvLwmLvtJfeCjVt1DNqBTLCdZKmmYanaS5URRf8Zik1z5TfssBCUNTmfo3eNvALs7NJf4LBD4QUeX9zx",
  "key7": "5M9E53KjZb2nR5vPri17pmFP3xon7o71rqxFLJ7uUuwBta5gzCpChJdmsdY1BhoWD4J3puCR8cnNSfe35bcxpjfU",
  "key8": "3UTGxHXaU2XN39u7B7FK4tpFgxRVDPCBao8umqT89WBN33BQkxdMMb7X39ydpQmy3r7LHmtyCxe3zXXs14axDpPW",
  "key9": "2snQxi7L5qHM8uPgniiKaC9TMBYsnpb1BaqeE5QVwey4MtCDM5hc2fu9VJNs3LF7n7TzkNNLkFZfNuDhwZPNgkZw",
  "key10": "2WDpEjgxjQ8CptsFnbEqdFkVnoMo9FP39a8Zt8Ab7cvixRyr6uEf6jnmEBRibdNrPsuHaHkdSDe2rwjTqE4URYad",
  "key11": "2PPKrfSAA7ye5TGDFV37QBBgKqD8aWWTXavu6kMPtszicXWvsH2KaEEfSuiwccR2Ns6GCwrg54nAD5RnTUGfrf3G",
  "key12": "5YXGGHmRSzvMczVujdNieSis3ekRf3yZNSY84cPGpQUDWEZetz3ufUsR2vnjjAFtHbfhSdooXopJ7svbkA7hYW33",
  "key13": "5AvYnEuddGmoz8Dbc5RmsHruVskP9bNjADvFcZsigaGBUR9krMuRFjRdJk4XdejwmwNU1stvLKFn1mZvThGEFEtA",
  "key14": "3Uw1a15XaxfY3YcWkvvkz2BoBAa1XcbGjjRSpaCjpfgAbL5WbPHwVbjKjiekYeKYSMbfyA7b1fWFqbSGibBJjE9U",
  "key15": "jxBAWogmnYNiripYnPqVNJaQyRyri9xpyiJxGHrUyj4TJtwM6fyGCTujQdxCn473JTdPHmmuzzcAWsPj1EreYN9",
  "key16": "2Arj24QJgZwip8Hus1zCA3LMUHqEFohEEgk8d1u7Y9vh8aqqvahf48oR9WhwbG84QBDU5DYaajqrZjFSXk4F6a8a",
  "key17": "3fHUMEBxwosCrTP34qci1VTYap4vhULAvuM7zMxL4t8CAppcUMgLcWMaDHaMi27bt4wY5mPkiPuL3vnXwWebmTi8",
  "key18": "2Ugnjx1LdLmjpDeqPcpnAFWDKfEZNvzwtSRoHH4bTGCR6M9JcgWkuoz1eeEdBdDmcqvKLeQXn3LgBD4PASqkhU1x",
  "key19": "3jz8LvG56MxNvzpr87vtei6Sbr6Rsiz5xjMHgUuB29JaYt1cQsEaWog3nkHqPsjM8b1c2UvyS99Rr1ZF1DBzds1k",
  "key20": "2ngdh2kNWorb7oKkYANXigrYwi4bA2HxRq12KiPimFuBhiHmCKW8dbC4UGdDhyspjXg9zdx5jDKHWLEVoNQoAjxK",
  "key21": "6yeA3ZAnvcTwMWSVbE5yPQimc8kzgQYLf5nZJqKsHbnh2Qzqiz5HztA5Bxb9gL7JExRrDe8SU4j4oxHHzBpikra",
  "key22": "zzYhwWpeMUkbxdRwUDhjMKAMNe33oT2w5MQHWNzWBARnTw1BRfuS7mJmdN5BLQ6sUj62kHJRn9QnwF26UBQXCgt",
  "key23": "n3KgPuYhCBjb5QyNq9CAooeTMCiP1uaarpWXHB42FwUCfsRTirgKQPAqpsscMxxJUre9CDcg2DT66fqGtm7ztWx",
  "key24": "21jSHheDM26kfQAfF9tHFvgPYGhkVu8mjULmKvPvTRBr4B8jFynxefB9Y8FSCNWh1QaovGrAWqM7NUSPvJYHNFBh",
  "key25": "398qiwpUq7eSLNYXqKsbcGyd16YQjjhKgCeJDPsREBbrDQjb6x82g6sxT6butX7Q4j6dVSLDPRySjNRARDuwYMae",
  "key26": "3siUj8rFphnCDg2jrQnViQecwbUkHdU9AtYLHJeZAD71ymESdNQSiHUQmnGPU595NXardyMpyrcqALw41sRBBs1s",
  "key27": "2c3XDaGXNtytUuYGmUCRmrnVFPGJJMkDzq8gR8eT5DSGFGTvjod1ZSh5fArbUodqwEiUyET1WmkPCxnCxcqZNXwE",
  "key28": "3WcQfQsAD2xd2kVjThhMBK6nmowSNoR6moeGKh7AwhY41rcW2HJPKJm4MUwHLjA3Kze7rsJLJeZopakBz7uHVwex",
  "key29": "3TMEu4Lm1eFbG7jCSJCqps4pruSpHFd3nLwjmrnQBjJnnvgjDFsPAVHXPjWpZp2mg9GQJTvAm2x8cUNEhvX7o9iA",
  "key30": "3vNXrDNexVo6L8k6jRngurPeXCTXwaDtAmxm7nawc7zyrrJhcxhjhiD7fx4fDcBKgVji2AjKwCEA2Xirw8Zx5Qy4",
  "key31": "3R5wAYw4U7ni6sgNuJjP6Gp9ajdbiJhB6P7L8cRcmWLXv5rYvNkwS8SYZWjGx7tsqfZyiwEfDG9M5Gn1Nqydhw9K",
  "key32": "Yy3Ryiy6bDtNTuWt1U9xfuacQdf6nNw9g9WYZewD3cZhGDcwvSZTffJG4hze9m1W2k7SbmCid7rLiQDiY2scQ6t",
  "key33": "RXZa6NRbveZGTzJWp4BEH6UUakE4WVV1eQd2sfDvjZzgALLaGm3Kww8tHQ3X3iuaCdAZumW4UxDxNxtDvVs7mXF"
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
