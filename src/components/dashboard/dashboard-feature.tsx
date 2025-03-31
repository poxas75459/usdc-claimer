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
    "3cePerTa83VKNkTVGWZTZ4ih68dtNQo6VqCmPAGDi9PW3UTgQbZi9HpVKuL4tyLrHk4Wy5mc7d772XatBpPjUGdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uuDNT2wKvHfdmtsTDiLbjMgqF7YxCFSGwHZgKsRFvvZnikymcb8gvkLs9RcGEz3yKZymoovw4TCFwvaouV8GN1Q",
  "key1": "5e82xz9Xtr5isUSjd2xNpYLnvcnrfCgX8F1bwBGfPxHj7AYWXCGn4841DxwDwGeabXS2D4gaMzSRSHQwEiAQE1d1",
  "key2": "565JueRsYBqHCZsWcuP5SR8ZwJetrxZ1C9nbMFyNpBxpUbmX2StLBcwMYZdzVHshSjv7yxV3XkpY2ugP6akQddGJ",
  "key3": "5PYhVdNMsZngyRMuCE4ZsFKYimBm6t8XhLiMRzUZmLYooraoZ9x35T5P7LqSXijWLJwxDv4adMrpRGGqAN3nZYHV",
  "key4": "44srphYoqFm2gnZ5a4kBMqFt14VvWBjzDegZmrbJTeHhPoKz541JXz3F13UwpnBsnnNaxGrpjQQT1H9NjXZzGP8s",
  "key5": "37gXLugYLYAhJXQEhjCnCPacqGPUkyqgW3hbR5vFs3zhAHWwcr6x4h8jG7ctAEahSxgiphayjw5cJpP2T1fkpHrU",
  "key6": "4uok4HeqSCMK9D6UygEe7Eh3mdV9U3g83Nf6gLj5UyB6zHrTpNoG2yC2sgRxYWi7o2pgfQTH7Wd4HTJ2RQV5qabv",
  "key7": "3jFWWT8s9M3zMLNENLaMGU3S7THa1F7oQDFEDwNH8ggpJ3cmAdzZEdev3zJupo434f96yEu7pyZE4JMvxUrZJjf2",
  "key8": "4ghtfDpnCRZGnGdRYBnWi2sqAQe7F7xCMZSKSogXwSpg94hkUR6ugEiYJafH7N1XrLPfstFRPsdp7yQtkdDYKFsV",
  "key9": "2Aco8nHqmdrpTi1yaUbMPpJFmLbiTE1yZmaLgXurUqxYL1FWsfJKahDzJLiRHovES8ePcSgiY4ZAySRL28ncRWXN",
  "key10": "4eNhSNLVEs1Z44aNiAj29mwuTrERv9GMNA1Kwqk8vKJqkKk9ScCX2TQ7AjF3uc8MLN1MXVXGeX5M2HHiGZEkE8ef",
  "key11": "64DdkTEZWRdg6yg7XiEfzdppwP5wBjqY2qRvfn5TXfsvXkb18itcfuNE3hUWuuwLMczjjgE9mHLTyRZRea6X9Fnn",
  "key12": "TCi73f5GxpSd8ueUoPq6kpHzNuhYmNVYcCwjRqzGDogd4oNGXQ2RiFxttqHgzXRP1hrZY7uNGPWCcBfg8br2L8p",
  "key13": "3SGaMufEfiyz177qJTw4C51jjRoMYHPfzWftVPyU2dRqWgg8F3Z11z6L6mL87F5KmTnMqobsGZFJqqvEf5BcCKyN",
  "key14": "545DZ1dyccFddFjCm61fWkd9TmNkW7NX4TRjeYnP4s2CtQ1HJxAou5GWDDURs3ufd8XtQ5zRMrtbb6itG5RTMSnc",
  "key15": "gW1WhhLorAH2edisLJ3eGvcDC9J2uU4rAov7Ue4zsMNC2EUpwGUV6TG9VM7PbqKY5qhqsdV5eESiUFK6Vb8wwuX",
  "key16": "4cY8iY6s7gRgdqYc8QnPuzfPmYddfBpQUqJVePRFJ5qBj2NUMLrozpQEN3FCoXvdUbr7XGKHuGqmbaygFmwvSgbZ",
  "key17": "5z7Uxdz1idXZ7AHkYCDohWK1PheFwFdDSNEwAh1YjefQuY52siJ6J36BxLW7MGhoarcdkZaD7PRrP6siYFzefegY",
  "key18": "2t4jbUMqbv995A5jagujxCJVTmFMuKjiDh5zPSt1zaitjXdXVPdP97SJZQ5vUyUpYv2Zeb4kZhteddNbokwN6HF2",
  "key19": "5M7ryByWDDsPQbcryFAwyvPKVronHzJFnVVKppvDnPwUmKcJmn4A8Tea5AFD4yYwb32zm5cQheDqyQHUgunqJJ9z",
  "key20": "67KE5CispHbszTXVfqiQpcxamgAckbGxg3d45n1cAnP57BZAFXYNmaXLYxV7igfFbPubfmuB6WewYoDYfhUDGYbj",
  "key21": "4FKxV3YDSLAoGVTsm9wP5A6wABUvgRF5vDsQj4XKFRjU5qejQSpVt3bKNsFcu9auTFLDjZG1qEeX97bUA3LKpdts",
  "key22": "37Sn7ytqARHGDTDodXNkYGB2nYL5sPeyhEtwDNtMsWMLaiY5Ubg1GF8EfUZ8RTeniDUjEmfZLFvWiWeFVAuYoAWg",
  "key23": "4WWLC2vpRWUv1WSur4Gcn8R96HHu8FCCbATnCuKZythYaWvakY35sfJqA3CM9TQEPow6rPMPpK7cdSmuLDTR3Qua",
  "key24": "35Fv4AypWyZcyweGBJSN4LMY7uFZ38NzR86PF57nzHNFZyZqpibCZW8Pa82At6hdnfXiELKzSmnbaCV28JzBM2r9",
  "key25": "A8GtvP6CHR8hXjDDTeF47z4aEiDzXkQKXETs1GwohRHAhqz8QkjRykrHynZ5P4optZS7c14wB4orKo5mvy91kgx",
  "key26": "41vVggcngJrZEMxSoLhuoFnV4WTBKSTPibnsDbYXZE8kftSktgQz6eF5Tzm8J2sBZXbUizSNsxAcHU2ZHvSvvU1i",
  "key27": "2za355jTsDLHUx2jCQMoGCT4sck4cPkkdt1HAAaiG6rfA7xNaMi2fSSPQ87HVDJRQYeCMpz7pwqVDdr7TNnx6GFJ"
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
