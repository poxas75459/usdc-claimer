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
    "4U1NLp9N4qxvx13YGHTViyJdjVnWsn7zVXFAHK6rfnyxdgBpx3QkzNHyCPea4xrVAYoRspM54Pmo2f3ZLYEKFdsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5fx5BrQtuRq8GGKEo46r2gUis8hxK4uoja4TcGEb4dkEpUNxGzms4tKPd2fMJeN3XquJw7Nakfibyugx6t5V5P",
  "key1": "5gtbdcX7JaborA8Jyrko9udXiPH9sJ1f8ubTEDC4hdLzeh9PoehuEDwFzXCFf8hJEgftqRB7Eb3szawbJXYgQS5G",
  "key2": "5Lkzz23qXtanzJuoCYmcWqBjzmWqkE8PgtJcAgf4TAidCigCSR9HwtSxXG3Z8RKKBc92e1wyNG3ZMwsmZxTJSGjx",
  "key3": "3jQDwrDHFJminPWKXP89c9z9ULhkrsCWjS6cAmEUFQvaLJo6HeVRF2JfdREgaYgXNnGYhHUSro8vLgeaKK4r3SxN",
  "key4": "9uUwpApPQMSWoMq1wRY3dKsCHXvFRvXVpRTK3EMXanoLNMdYbW3cDmnKteqzf94jqHXHcUZjoKTio8rvWWmSimz",
  "key5": "KcSfxkUSSsbud3G66QJ85cdcaNQpRXxNxjCFqddpB1CukvP3DB8EzfqCexoXC7Kr4WVtRrVuhFqAWSvBtTZMfYX",
  "key6": "2cvx82UC7L4DSDgu8Pt8N2z9BUWZHVnB3imkgWMj82rGk2HchpcbardJEcE5eb8FGJtQAq9Bamk7dKFjvoqN7Yeo",
  "key7": "4EnXrJLwoh2mfNff358UtQhDC8YDjpR5oKaAwTo5ahueY7iB4RC6vYvCVruEpsH6Fr5o1ph49jhHHbNL4NHb2idY",
  "key8": "5R7GqpH3tqs1RDbcftS4V9Akg3Zy7n1GYFqbWjzW3uV5VcUPgWTQqs1FcKDnPgVprtC1rJTw7YdPv7TEpwFBqtHV",
  "key9": "5iUckq1J31dKBqqhHPQYZYJkXp47nwky1SPGSxJ3e5QtsAvU1NJzjaGEoGgVcGD9WAC54ZmBNzUm3WUgQzsn7qtg",
  "key10": "28z8gptDjsEYWHA6e9qaaBh1zQwdfBk3ZQBpCiQS48wHu6dHbsfjCYeJz8wnyC1HNRR3rNkKUif7j2qUuJN5QWE3",
  "key11": "4ZBYRkJBYRiHb676oFbmst6djmkqX3hdNhN6iWLuc49WEyyVHZABG4vNz2fx3pDGjJvF2kQwxEVrMVdtStZv3Ljx",
  "key12": "5UX8iTfoK2SsFXooYsqmguYzgPbqdPg4MCupwmYpTcxbbAYdxWTtScXYFQEu7GosZKae1YjSY5hUALqJo3MByXfQ",
  "key13": "57dL2j9tnTtex9GyZNrt72NiwQp87sCPU8uzqoMJpcphrNX93rCXzw1XSARpGNrchD9XwcXdnrrhFdE6Ggvz11Qi",
  "key14": "3hcKFtyGkHEJbmu87zuCFsgqkQ8VXepw8PxzYqyJ6yuikbFFgsqQEcnhUKmCnfAuQsqSPe1iDBCmtFL17BiN4B8X",
  "key15": "4zFNPdfrDmJommw22LWvfyd2NZMAio4AoWSNvkkZYS66WYQ97sUFELy7jYL7gcmA9JNSbb2tozXehDyRXszHUY7D",
  "key16": "2cp1vDrBGPxLEcZ4EY5CQkLzrYrQfvnVzCWE76MM9TJSHSiBUek21K4e7pZJhKuHVKh6enhXhTPWnZZpjN4BHiqe",
  "key17": "3PB288p4xXSuh3gBYjjr3bRSb9LAXmXpaBZ2YNZSdHJVSBzFqcby74UfifyW1j7uNnxp3pe6XL8PtYztAcKedvbq",
  "key18": "34sUY7iqkAPdBk9E3oBxMGrxwC7KY4CK9rSdSUpB8SrsrLxPZgT9y8zUEnwsd84eFXJYNQwRNcwKU3SsJM9maEZd",
  "key19": "2cEhxR6nvi4Fz558R6Kx7veVuoJUWMEAygnLv93LBuABFv8BkvxmfBAWvLjiAAQNB2CybPBiD78zy1cx7BAP8vam",
  "key20": "daqp7uhizYdVm1EokDPVm5P1G4cjtcgLyEoWFf8asutNfwyfQmiXDCHA96RhKQp5uvGa2A4mMXW6PJNzefbJzfr",
  "key21": "5Vs7pNhj8XXqDVPpwUANv8xMqAU1iwTPY7tH3pK6QErkQAGJRvKnTz227N8mDAy2uAQ1Ejq181obb7ew99ENiuzE",
  "key22": "opisiXGcUTiJ4zVV78jAikcHeeLaB4L2HR8QUbay1j8SuaaYFLdmE7LymQukoH3h9WTRqRa87WXZ9atxW76k7ta",
  "key23": "63JNn6U4uJCwE7XawMEe8Wo8rWDALyiPQPrPCzZzS56r8gN51oPtGYYhU9U1C1BehWJbpaYK9rMfZK3jxwbci2hZ",
  "key24": "2uxR73pTJ8ZkfwoCzNCURdNU5VQCyxPE6tYRp2wFWUWjBSiB66AWxFSFermG5kurFec3KuCfQYRY8t5p5UgWRTVM",
  "key25": "3UE2SHB1RYAoyRfUjzPYTnqdWy6xPjhdTcdu4cHwBJYPjwMDD29M1HDCFTT74Gpbxb68QHhKjEqFYDDRoMe6y7ds",
  "key26": "2WUYvquuTTRAWQtQ5dGmDXEacwb6RU9ydyjddXfDeYQqj1X9VFNPs9V21gzukdBg4G9i8sjiGz4cV7vhGhcZ1YA5",
  "key27": "5abyyhcFLWg4MDoHm6chMsey4GhxP2byDt7KUa8UisyLmsHeAchdCxRmP6evqa5y4sJgBs1CCuFLgtF2Y5dpxGqL",
  "key28": "YRrrGEdTSyz1v3VPyNwzy6UhobfJhHsHFKweAFZvoJYh4C1oCbLUf5ThR8rccRUcpPrJUmopsntTARYHy43xUjb",
  "key29": "4gGbKkic1v3PG4MByCm4MEJtoaQWYsUWbvoifShw72CD155R67Akb5vfKbB5x3d2irZbTatfLyb5Z86oMdZk8zoA",
  "key30": "4J6kjJRen1zDU9hCrUeFzT16nLkrueEd9iC6tQQf8fTYByD6PChhn45vGrdtRnr1vDHuMmZzAxnGPzcVYgZ3b3f5",
  "key31": "3FSCLs6qZyHaBYa6mXjL5WbdrrifyvtWvjqC1zZEhdjiVq7QZD46ZcS3PadaN9RBpGKDwCKm6X178nM6Y6h6Za8d",
  "key32": "3UUihnxSBoVYvnANCL1L4ELYd35N6erDtp7a21bCdTSS2WKBGs5ato3RFHgR37Vh4Y7uqbKeigne4NRDeQJd8nQ6",
  "key33": "HDn9st9MiE4hHKrJn8PqKVxkzZke1z21JUpHyLqbFPRAzJapCQF5RbiEqEX9y1wfrkRFEUMwYaENYzShY7G6tMV",
  "key34": "2RTMdKMyKS4MKYUMHL55uaCc2oagLDjHDX5tEeQMePkWUzENoBmarxLSNWWpPyjzKBS7BKgCHhJ3HhTvNPxfV1AK"
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
