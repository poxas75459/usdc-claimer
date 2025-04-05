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
    "2kBk6y1L5i9bH8XjtFtNVs9LVkJJ1BCMGmqCeixvPyLWxLxfUkWVNJWoP8ik4bKTfUuZT6BCWAXnthUkHwbNDhXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZJpTozPN9eYcorDaPKh91n286dsE1CpAbU3jDeVcbh33f7y7TiqRJJNPJYn1iDz4fsF132CUw4ZokFw7s9Uzd2P",
  "key1": "29tV4gjsYYNk2HBBhThpyWBC2p6RScxgDXzeBGeBpYFjAQyE5vHqsaGgitWbCV91deEs4abi9ET71juJXqjttpYN",
  "key2": "5tYUuZdQFscK1wk7vMAMueLraeV1xLbcNhJvF5a829sP1sSJ25U32jS5dvyTGc3ojDDefUnqYyw64XzNux6KogaG",
  "key3": "5xuXYzACYFHRmoRVFwYX2xfELqYcqso8fv8Tfuv9r3EgXfCcSTt3BcGSMN6xTNGdCcrGHT7TBkpWx1PMaNj7yv2J",
  "key4": "3c5LuY7w6CLWaaVs6hGMwkAGkdFdHi7wdRaxcvhLGjpo1ZVBR6uuRH1gTTbXG5PC4CGtuu1jXiLHqY8g3FZVAFdF",
  "key5": "3x63dMXBYfKK4K3FnVeuXXHye6Jk6CEETo8DTa84odnC8VdRfdzRz8BVBeB77c9XFJozEjnPng4grZ66FnaYySAN",
  "key6": "5dZUFXct5RZutNveAxm5Y7QyVNRfNkygw6bftPiguR1ffaS2FxcX16NxSSd49yJfSLxNzVPNwPZH4HnF5nZsEVfV",
  "key7": "5fU65nWd51YMBiLjtFbwR5i7Wtki6NaEjB9ffuRdxYfJ68DWHJw4Sk3pRH69ggxbdKHptVPmCN1oSVFjyjYsKfXD",
  "key8": "xCvCyAN7EWq5GZbb71iuBNax9d9Lcbycupbzx6EfHuC1QQ9GAv8XkXH7GYMFfNr5dL6XPti2RsVW8DETJq23CJX",
  "key9": "6gugggNbsyQMzpbQfa18KBNuPtUaiF9ewcMo868Vu5K7tqZeiqsrmqx3kcTP4UhsWDMwr2zzsi4fsCUJGQkXduX",
  "key10": "4kEmMUjxHcAedDsaTVfjwN4FmMwd89TLM92jf4z6A7i87k3sZXmMHAa24h37rEHqwERwCmLwm4qU4PJ4WsLi4FDR",
  "key11": "5vNsWjEuLi3BXtPBMZ6RMvQGGXvy95mZHvBcG6P9yU9s5JxX4MvgvHiSKdRzURGY6VyoU2Uco9Wii8iuAyS82LoD",
  "key12": "TAFQ6W4ENrc4ZkQRkcx5f8hagioX8kZynnv4Qd8UXmqo9sFzXfes8Ap4XGJjoSGHcy3MA7Uqrsw8TLUigSNACtx",
  "key13": "33oBdR35uvuJuHTikwmeko8dWMcRu2nqi9SPAFYJp27V74B9tcr9KPcJn14jdFh38iWTmbwCbrDcxVygRC2zhC5e",
  "key14": "epzUd1brBkWTnmDtrbgWM749cMpxXZxosAu1Tv8BNytve5iCVUQs6rNra4pb6YRzzqwpqKgy47TFtcPm888MmYF",
  "key15": "5uoKVXAmVCLaUCegqDEX6Mp27zLdNPFoyikWNHXgJJZjYcahuHQXMJf6bZwv1GTTQ9NTaQQTj8XkL42d4hDoBVqM",
  "key16": "cYHMfTqavgbQZPcDK8QbQ3uTAFnLBtW3Jyhaf1HmeQrFiDR6E3ZZCnkzW4brWsKjahjpPxrpvRFYThsELiRikqg",
  "key17": "4keTAPNdY1gEm5r6Tc5eWarNF1JyhxvqoN6qE5uadv3YWNGUyHTPURhK6BdaXTLjT4fgNSDucgfRPXnWLn52STEe",
  "key18": "PCYh5iEL69WU4TeNUhg6gDKrLYcDkxJZ93zesUmKLxuzXCyjg2CjBd2ZGG42bAjcTK2v7Qq39nvmzSuGFWrh3d3",
  "key19": "2j5DKY5JwS4rTeMwGmkwx6FZtDB3gG8ip3e3xDeDfpaMGW56812SW48gba7owtn8pyPp1Pvf4T7Qoq1VF6ypPeZp",
  "key20": "wSDZutTbcnaiMTVM1JaVH6k18itisMvkJucP8rpfxdSVynk9gq5ZzSdZev8GJTBggjpeRkWmBBHevPF9mgB5ocb",
  "key21": "2JFPionWReziGRory7AVMddkHY4zH6um8M8LGqqRcE31uCgBrS5ccJ3FowCUKrcxHkae2Lucc5PtJuTqPyZkopE7",
  "key22": "RjUq7dKDJVFREKzGPp95hx7MBYSAanMUqDJtSjWNWz6GhtLq7ecMYPvuXM9f5VBheWPj7GjTb9rCkgrWintn7yR",
  "key23": "4GCq6hyTtZnJ1PxmJc2hyLuLc84XoewijsvtCe8y9yq5EtMNJn1WsNkPD5qmEPTn8JSC8mjg9kUx2QVtiVcJhPgv",
  "key24": "5FsrqzDKAp75pq65eN5aM49yn1g6Zg9QiF3CRbo5XcvYzLktMWUKDtUbxnuMhsaYAoZjns2eEfKmyRxwpRgHFch2",
  "key25": "3o666cGcjzd8NKiw1uLrRLyRttEmvdRWAhXrkDhzA6ZWidRphvpMAU9dXmsrxjKtQjhqGTRuHdbSn2sqwvoX6okR"
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
