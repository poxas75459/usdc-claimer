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
    "2MkFSYSBhQW99NnABxZ5H5mEvngPSmzhpo2ysnjZdtvAE51r9yMD8ZpLXusooXCpAbDta7QjrhNEckd7W4iJ75wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAjqJPg7A8QGKRHXydXwnpDi9s2T1nMK8juoTc9YXD73HnoErwRh3xiAU24ZtPsKh1B2APFxvCWsVNL6LrfTPnW",
  "key1": "3EXasfrTPQ1w8eK4FHk3dxGZd11NV7AoPCBDMdSey9ud9HhqpgyTCVzTXwrukh7Y688CS6srR8VBh3yn8eD7iVA3",
  "key2": "3BUTJxZv8DudsTES9AngS85duxnWSHBVoQuAmLahtJsi4sxsBoowL28o8QHETPbW1vFqJno9CfkEhnvf83FZRJy5",
  "key3": "3gf5JvzbxG9ppHCGPpkyK3VgE5xUTL8x62Wkp1Jn6eSwhoqPZH7iz5VU2g6YMRwxFwCM7Vd8z22zr1Afa2uEADH6",
  "key4": "3XCP3HLCBTsEqabZz4U6pAmKMeQA6adwNrrYKkB3Fkjhu2jBi6o9fGNCq2FkRPdXwCk1y9KB7jXu1VnPFzNmi8W2",
  "key5": "37ptYkdUbovdecdg3EMQ2CUJuDBQEcLGPbYnzr7b6p3PHLuqi5Z9QXDe8s3teVoSZKu5ezCH9iUWSbfxbTivugCZ",
  "key6": "2QKPnC8oxigEUkSnTYQdiTYrVm9ktAt4Cb6J34RVwziqzoXZ199MvaNvx6kfG9vchXNRVQM7GDzgnA9pGgCiB3HW",
  "key7": "2yMtu6ocPDMcYdC9P8QBzwdeBBHitZfVuzEUjjr4dKSzpASDXvpSdEyosriD84MzL5ZcLfMKJLpg2pJagffNphkP",
  "key8": "5NZjeSdqPHx5sKtRttDuG7mah63bLoXwqVfXqT3G7rj7xSag6YEXK4uD7Zr2K8RoJPeGqXprNSctQHwdw3W1n7Ts",
  "key9": "37bZehWKhb7w3FRur8FtT3vV6J86dR1apa7CbyY5fHcX9urvFux8YaTRCmscqRj27i6R6rZwo1qQZRy5JAGC8EvS",
  "key10": "4gfWQGgtySRKPScX3xPpDUaqa3w2zL6mici6FLkyio7eGem9Jsf4yav1WGgxV1LQaDoy9rrA1FQdafDDU52abBUD",
  "key11": "3EFXtpwdsTaubtoc7BuBsT2yDHdvXWsPpyYPQATkVREM3MyR2DpferBDtnNUKWDJhgL2wXNS23G67xTCzoy3v5hp",
  "key12": "5uipDiug3J9TR4dxeNTeBJ836vESZ2tgsioSmz9TdgyMXHnyCw2bbZ6B3ZpmnSv6z2Xa77JETPLdpTUdd7iLAt3N",
  "key13": "3zV7zV6UWagLPGdzgupRcNPsgWKkstVit2GJznkMRwQnbqCENCcrG8tXSoGgYB6Yee3VFDtwTnyybYkvnPrPj1ga",
  "key14": "3Qswe69i8NF4iPQiYdBZuTmRzxHRSHZA6TGnADHGdWGGmG2Pw2aJeUxawranzi8crqspVXL3h4kUDuqUFc2XNqBt",
  "key15": "5B6G7fuvc6tPeByTnbrV7zsCXbXqvP4nVSbF8x8R9qEotC2rmwX8XcJfFeeS9Z3fbDfHhsyPeCSTsLsw83TaWefD",
  "key16": "5p5CwqUeDj1o4Xhe7Lp4L6JHNjCZAcL6bwh8zbswzdtnyTGrHSr5tHBWs9bM8ToAkbhrREWjFZbnJNh36LCjnece",
  "key17": "3gZrwCCf1W991eQnbi2Fx8wm7Zyq7vLa4C2WRXLEGWEUPuqQWMtVdoMNPXwam5NRMM8Qj1oDboLR6uH14XD63j6w",
  "key18": "4VwAxW3AwiR4F8vDTWF1DqyaHyBLyEdS7yyJxxt1PpQ8kXGGNiTMdbdW4GJMd4ug96e1tRJ3xSKZMCqPkyoU5zPh",
  "key19": "3wdq7UxucXHs3qJ9Rpi3N6WwiiYQ13pum71v8tZMqrYSFsVBNgxXMNDoZQjrJ8oxLyFvhH6nKLwQv7CvGdJ6Z98h",
  "key20": "2VMStzsWEqCT6vpFMgvwABKxJZFs2LB7AWoLemkd9v1tQWsBf5tWD2wfxKKtmocKn4gmLpLGSXvJ7dajFX8rBa48",
  "key21": "4vvrK7jKNqU1oF8L9YAiwbbQRBw495SiTWmcUu3mM9N8XhsejifXGeBDXWAiGmTdJLzhu3aZxSHCnE5mf2YVXx5B",
  "key22": "4w8RL83X3uA83PsCvehRp3vxfQ7g5V89FM6uYJLRkUVJRs4p8CuA25cMCz5jZNThVWXsQLHbmpy6Fw4J5viBVBHy",
  "key23": "4LL3b4aSxrVSmqvqC773VHfB9EEpqytg4eoa2m5r7Yi6aRZgJ4nK9f6D3GXGXVEVhdjhJ3kSmLoCA39QHFbVWKqq",
  "key24": "2ocBt4KHMxh3rPQGKYYsGTfCM4JQa9NEtRA14HyUGzpHvm18q7GqTGJyRQeRKhiZcaG53EY4BhkkfkjR4nj31DT4"
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
