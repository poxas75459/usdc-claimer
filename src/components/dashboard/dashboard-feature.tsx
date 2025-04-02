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
    "2NpoTqV6JhKBgKedhAknn1jng7cj5k5Lm6kEdJFfVY3AesFVDAy4JczisEnUtdbZC7yGMXMAmWT3Kg5bF3wChQgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLqyVkq5wDtSetyTg1HVksorNCMTKfVKzmgVuHCeHyB1DBTqF7ukhF68UTSwweCKmxJWoeT7K8CdoA6bd7rtqZP",
  "key1": "5kwxp1pqWGfNXsS8S3GCXN1UUm8kxdXaCBxLgUYvRn1uvs8dXVqiK4BNnw8P2SxpAPUvdnuNNQA61S1Xkm1XqUK6",
  "key2": "4i5bCJ8hWddSfJ7o5j5NwVavDzN6FSwEXVzwhfrKYeNDcTUCtoT22ADXza5hK5v83GHF4Gp3hXZDSr25PDEEDzTn",
  "key3": "4MT1H7mNUmK2cyUc6NJD9J8XZindzL55ftYLzsWJLtj3wZFhqDCybiH5oSRv3SLeggHxHbXXBHPtwQxnPzaLudoY",
  "key4": "4j8mxzDtLG6oHGEsJCiZ7ham1Ca8pnBDftpA4R2GD67wBwKbQEFfdJntQ71mDGv1ziXwPrRSx35arcvKfMZxc9CG",
  "key5": "58WiLNNdnqdMkn1wBauvMuFRt6iNfmmbWrJe3CYp6WWbF2Qbjcr2ezgDFMXhVDTxakXfSdGbdb8yqxaB9KQerEjU",
  "key6": "2HkgZPEBiSVqwbVXpMfwowJDnXZ4ZHXzVJSYdGBJfpGE6Njf1JsrEcKVd5unvK8kVYdBJNZAE96KAjbsA5AcuPgA",
  "key7": "614uuxvSeUxou81fgrq7Y3YD8ivwwLRsR74yfZYjzEY96rQDY9kXHD7qDu5HJLtC9LuSvaqPNnBwW47tWj9u3EEx",
  "key8": "2wePsjYv5hJHdCBeHFv7to12ciXPaAn8Rm5ND6sSM9EcEubqWiX7mTLsCAZZfyAyKJdGugzzcUENR71PmsL1vX31",
  "key9": "5BDSsaST1De5qG7AzB357WkbrzBsYLdDvuLvSBYGgxJLA94ZxvTCpJg24oKx3RJ6BwsUnQ3Ycd3SaEfsz6q7cR5d",
  "key10": "3K6QEp6bE5pJKQk1yUq8K5QCqHfEBR82KqTK5RVBqCdRyPVJ3fbZ6qHCPLHuz5u3gqZ4Lmnjf9vbuKpUnfmSg7Xf",
  "key11": "43E6zayfXDzMSohAzW6ZSozAa25e2rNXPhRzkNN9v9mqmtuSdq7NzdZ5tBikdvvJPKDKkNqvEvUjDggLkEjnDMXu",
  "key12": "KaGo611Lc3sTynKE5DFkHsdrZgqpRGsMLVpt97wn724JTuV7UfAzsoqnijeTeGKbN4KDvsGhNzZXz8r8n1Z2vsT",
  "key13": "52YN5gkbHctcR4DAhSCdj6azXaHTH7ZViF2z3vzDZdGY2yx2cWntjeCZ5pFng5YQ6KSCZjtExz9LE7hkka9Y2t4g",
  "key14": "tJ7X4qwbq1wtgXWmGm4psXBu9n1KUz9j7993zZasPbpcSbPVwDDsNMjZ75mbuUH1VdLeMxtaAyzEKpXxXzgQJvY",
  "key15": "5xcSnL1e5BYuDGjpGDkELmchrns2sa7ba1SRJug3SAUubvT3CyW87X4rgWTrFTiHoQ7VmgDGGvLano413RxV4umW",
  "key16": "Mmi8G5zZsrkg6DuAuv33dkGWGnU62jFnXqBuX1SYa1uhUj5xZfiAtJEf39okyoBf99kXxErbZqa7M5yqa12Jt1K",
  "key17": "4WoieDwhmPL5NF1WDEL22ycsgkwArGoHR4Du44PVD4FQMkFCQrHNRjcSiSeMvLvL5Aq6QyaQNgm9NtWmxfiHvgsu",
  "key18": "4UNBDv3VWhAZsGgPvyL3Kouj7Em7sWoWK7N7qthKst8BoCTnw4fKB3Jw2y4W7cKiFmkTPP2QkFw13iQdr2x4ag94",
  "key19": "4jgoqJNFQkH9b8CzoiwA7MgpQGjfy1KMQMNiewM3G7NkMrzPJwWbJrr7NceMheo5uQVirqwGjJsbJBiwotSHDXWw",
  "key20": "2BQgpTEdaSWFTtxZMqqkSwsUB91PfM1KibYW2u6dLuvWuBsh72WtxM39EUwhYQrfPtfVD4jcFbtsJ5jaRyyYhxcn",
  "key21": "2jBug28Zgbrzbe7qB4gvdWEdWVhb4wWDbPvgPd53p8HjG6uYNaUfBb2Xeo6t59PT1PzZRQyzwWhjE1UTFmkrT6VH",
  "key22": "KYzKfNcGHD2m3Wd24qiyJxWvvzLtRik8CfzaeqenCCXLm8Jb43nkK225quEnz3rseQ41L7h2cQFcsC6b1iSmvW7",
  "key23": "5RCECLk4WMpcY2K3bnjNBoWpW2yBPpKWQzAtXCxkKQ3NpZBF7v9Jz9X4FKwQ5R7QMcNTnwNWbrjQwuVt7Rqg7rev",
  "key24": "2Hob7hDM6TcjPW6cSJr6eDe8YMVzseWrhmS22fY2FQLz4U9QXg36PYhLEfiwJSzx8vDR3yEXJSeUa3UwEERafsvy",
  "key25": "4pGDQqR5ieBn1dniLFTEvbhjbuyNt5TGzjLYQqK86qPBtnFE8wfxKczrQbnbH5Ab64RvCFDAJQGyFb6ekonDiAJx",
  "key26": "67VUEp5xVwkJVeSwYTuYWP7zk1sRH47fPtrqT9meBLBTjcFnVQ32CmLxYi1Dx38iyLP2yLcx8xnCBFDkGqo8peZB",
  "key27": "4XSbSkCvRMVju1aQYtYzjSC1pELJEdpzcwC3seHJwdQMJweyHmX4aeF8kzMgafBNTxA92UsgJakqJpDsoS5q2zot",
  "key28": "3zycj9DbpCQq4mvNFJxAPoWxPQc2AUBwLfUTYYRpNuXMQRxWtP65UFNyuAb226Jo61Gmcp1XujBaoYdrAB6JjdnS",
  "key29": "2JTe8UYUuEys64wY6Wakb6NLZDuRMkM2mYZaTpxXXbQQ6KcbXKrwxkJT8jzcyUHhTNF8YYxX7FuPym25c1YyT33c",
  "key30": "56ZZUC3urgeQQaUiRLxhCRPVNHs6SYvo9st8m1LmpQzJzn2CQ9j6vDpcXWDW6kK7HzNqHcmC1BHmAbdrVaukpWxF",
  "key31": "3HqYYR1mSCf1zvrf9bcVC1aGrhKggddJTiyvweaC18YkCPKziujjR7E7qWXQMPQ9v8nfi1WVy3CqSSDXATTK9vws",
  "key32": "5eWUwe5uKmT6Ew6dfWKDu8LN2zxadaKNdsHxNNxFprLkuutUSzKCebvyb1szPCba9DPENrSzuDxT2xpCuSs1g3Jh",
  "key33": "LG9vNvMUW2JojMr14NCWK9cTJvftZouRL61hzDBpsMuiJTtPEdUdVGmDEy16zRmz4rxf2M76TFkZaR8ZKkemWUF",
  "key34": "4umJDE3ALEQMoSgMwwSFEosuNa52XY4uUkSvsLny17owczERH51L9C2sHs6x9y77WnnSwpZZ2YrSW2v4SWnbwur2",
  "key35": "2owJWW2ipMuJAjVfHAMs9q117VarPz4D4v6Afx9hSrGT43x6mbzRQ5kTjo28iqqSZb867gGxRZ8cVgjfxzecn8Ni"
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
