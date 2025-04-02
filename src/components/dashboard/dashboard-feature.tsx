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
    "2AbYX5w5RgNwnU6fRsrmBZqyzX72RdML118aJFzBAMSp96otZNJzYopqoeV2U1VUa9gaghxLZxC2wTevxyuKo3LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b6r2K4h4k4fXfvyrPTPdjFCKifkBnTJfLrK2gw8uRS4kPacxEXebY8oZAhqMqJAd3bPQ9BxApELJhWD77BUCpL5",
  "key1": "2JBS9PjM56yaUhLURjEC6sTENeE9Jc4CKGKSA8GRyEhhWgzpVcwQQxuYS69yacirhSL64VvzfNvZjHxoCDR4LoC9",
  "key2": "64gboKTei9QaPsg8cnvhMjRgrMqtoAUEfUcNyJNhXDPEK9W7eLsP4r9tFm1SfWircsMkgLY8rsrnFvzHhriNNjJ",
  "key3": "2hCMpsejwZS9Mrb6HMFVfRu3MxFZ2oZshduZwF4H8xMkF7aAyPCZrVdukjMeGPDv3Fh7VaznqGhVPJuMzgmzXSEY",
  "key4": "2wog8z7TmPPqGLxGesFJmbvfEc2eFPdkVqkvhbWhNkYdwcGV8xu5eDkrqTR3v7KHbrHWpLJsKKGQfm4NiAWYwBxw",
  "key5": "ZJzuvA5iz51a5fp1cZNrQmDghNwoWyys4uAvNoTo1iey7w1PARvd2P14muQBdD8Cyqm94EYD7ZmZibhodKwN8Rj",
  "key6": "4EbCrFjzGg4rufwQ5nBknjDocjjDkiinVrskcCZJisXsgAyTuLxAm2AGxXD2j3XbKNVyUmyMct5xBAGThH529gnY",
  "key7": "5djVUmtQrK3oexrJFA9V2fBD6pm8tU9y7s7DChSgy471aGryBycXu2Jun9X4UhSehoVpMvsixtSxSAaGqoro8gfS",
  "key8": "2RZJqMHq2z7RYPgurYfcNjhUoauPwpgkopMdGmb27b5RTXoUHY5pLCj1zcMPjtvfKfFJES6prBJoXACVjWGtNsym",
  "key9": "EVjfqkgAa4h2tCxTTSEh851tGYn8tuwtdMruv521fR4MYevXfgHDCS3pNm7xWUyoBUsVRqZHsjHXEFCnZoppN5g",
  "key10": "5tY5B2ujfX1dASaKsRPYmjj4gvGnHiVDX5Zo5Nj3VicGr64GQY4QWyrDzvraExEVb7MauA5wSUQEsnbif4jK8mHr",
  "key11": "5499JrZWZa7KoVSgqrNJN7KGUrSd9E8Nqzc8EYMtgY7M3XroHr3ZpKyM31UEKcEdRkod5xAP9UvoHhaMhhZ5pfWQ",
  "key12": "4x9c7hrfoXiNxt2T5gRfvgDBQYb8kAMdZ6EK4SjdoVfsD3ygE2gSGSsxe3YGQBTa2Ai1kZ9oaWxzJTSeeWeW1SPv",
  "key13": "3eY7SBABLs9pSuP7zZTdZx3ZnGMHU9QhuxzkhwydXpy3PbRsVDdCPBDFVSc7wPhDuUYDY26JBwusNEmXz6MiuKNq",
  "key14": "3DcYViDY4FkE726qMb9a2SyhtLDK9aXARnq1S5w7FoehrSuEz2qyNTrn4Weg2EEiZXeq3VLu9nxhbcSFbgqvUNa1",
  "key15": "5itEtiDZZj8Ceor2KWBnF7xQdt2egmcXZnhb99PbtXmmBtxU4G6Yddu1BZyDQkwGfN2NSDrkSiTRj7TPym1FGFph",
  "key16": "4M2K7hJxwR1LGUzV7u6VSuXzMKtV9YqwqpcCqUqfmcFiqPWnvSqHoY5Y7y32fJaP5nFsXoQt6gMgJwDXpA5dKJvx",
  "key17": "34DgmGPtvrq1pN7suJKBsYjowJuGxSuHtTichBHSscmcZ43uPbzWwk1xoBDUzCMoHNuX6WUQMgRguJumDwTJpG5F",
  "key18": "4oZnV4dASxrVtY1PoexxKV6Jrc4X7GoqvmssSabiMeyTMRRKFBJ9V6HtzfXnDY8qiyaaF3SW9QHBReMH3NKhphiP",
  "key19": "DYKCGV2UZKDvkaujKBNoAGaBTgNpJefgZa2k9LeFEoCkJkTatWayFLPeEABCkBXxkZPBbv63PuWWFZfQ8bNojXm",
  "key20": "2xcWohEWK9ZYPDPhDnvmdjtVFimb7d941Bb7yvMSaR8ZsmCpBWmBauTiwG6NgqkdTzKEd1KZz6QztBXbLFGoEMLU",
  "key21": "54cE4Xi5SA87yoEMNpEnDLEmES3Vrs7TUGPKgGqaLKD5cJT8iZGiCzAiY6RwAnCHhbkqioqqvP6X96tiQvMWTXsJ",
  "key22": "3G6ioqvWUZ1DBB7uqvgyanEasxymKwaH3fgViSizTJGgpFtAp9C4TDxYS3YVwrXFtZsw7KwUTUzTjHtWpcQPHJpv",
  "key23": "2TauqwGKBrioFb4sbMni5Uw1YoCxMEPrpHjCNHHvZJBciNCAz8pG9yEJfPfwYUCajGWmhvh23PBszU5W6jbakHWs",
  "key24": "5LDDJtJGDdKysuhGPCHjXAp64tgQKfbNkSujkCex9KVrK4GgR1N5HsYUPqnW94tcdPT7e6ZrE9HVA8YucsAujcZc",
  "key25": "2gFkz7dC2GGi7xVeDzRPwBvagYaBAVFr2gooh7DG4d21qyzDFi9JfnP4DeENirqFm9jHHAy7R9SxEHBY8tKQzh5A",
  "key26": "4cQY3GshJmfeuanLjzwzoF2NUCCUVLpYf35RhuC2gLL4tdqFBSScMLVCjPApX2zphxj3gCnq2vahQVtMPN63yyH2",
  "key27": "4XUG2zCuxi6Gk64zcw3pAHHSYZVA2xxBeNUfzDNHJG4dxEeASzjMExdUErmQ8ueUwetmSMeBApnTYXj7fMgcqyf1",
  "key28": "5fiigHGUUkkcmmc39T2qSuvQu8onqgvBEgfo2kifPh7faWXg2tUUAjkprtDG3X5soK3dmLA1vJkHpgSFdRSNCZJi",
  "key29": "RTMauJPA7rq8fTFCa2h74QZL28Lt81znQ6q84mXLmzGtPzRB1qSRe3yp73jthW3njGxBn8kMtsKNbLgPmGhyWEM"
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
