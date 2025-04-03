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
    "4UkJGHf7m6j82BhJJi5DcJ8qJxubqbqtzYraEi5sNCRedhhDiTbY6rT8C13Uvo1LjEWbjJwjsqCZCb6njNmHj89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z883vB5D8YTxsDdyMKXpRKDxwrEE3FfMsyNTeBZfyKWGVSK3HRfEdx4JX1pDLfDFBhq7Np5dTunLdAQyVQjfGci",
  "key1": "2heNBpJSRg2HfSdGRwQQWehCkTZ8xXJHE1zjPWrFRU2Gg81AcbcVbxMG6TR37DxjQFjeudeBQ7Wt3VXm1uotTzSb",
  "key2": "29HnXHCSyty7YtXzsQoJc7MuHrQ5YhXYiH721mYALe5JAC3r7yAAJvjFjLq5gYHPtSrbYR9vAjnrNgyKzRNCd6nx",
  "key3": "3zNQD2UFQm9f2fkQZ26wjyoyDpRyoBPtrjSGgcjrrBKncBSC76YKowmucvoyVX8jCgwW89Kfcy3iipmGnutGCEat",
  "key4": "42GbeRi7vrBRUoNmadZE3Q1Xo863T4pN4rMnQ32XqmwMv2v6UUNAFHaenpNYooPhk45jm3DZCnggkYrPpRSBMZyS",
  "key5": "AsUrp8zLPQ3CrMUNpNh3VHzhVvpexr1z8Gk8FsFuTTYdpHjjpRc6xj4sxpgKABNuaBmJWaX9ssu7TzkQL2qZaa9",
  "key6": "3snDKXJ93dYA82TXD8T5Bry9QTk1L6KeHae3KztHCwKYodiMA4W6LtDg58q1fiw8zScb7vKHhQj44nb72erGTvte",
  "key7": "2YZx6qSvwzMTfd86hqCkN3qnZPCDf7NkPYRB4ny6F1yRWQGWbnxRXZeWS9QKoBXoLJcD4X5cncRJSVUQ6FxCWBxw",
  "key8": "54oCspCbxKHaBs3ryX4tQi5wev7LeESXtQnUbSp3dAc3qewiDDryauBgFisrQLLcKi91Csa7rdB6APweQXjHv97N",
  "key9": "5fhTgeX3xWv4mFrCQrCpSA9gpYsX2EMYAZjsbyiQ8FiohJuFGQ8kxbPmyuou8xNdgdG9MTtHgAPHt51eQRceb3z6",
  "key10": "51858EFmPkLcBtnpmfsXvfEhmvbwuervZPmioPF8pMLwyrKmRyQvGxhtmxAEHnpiy51B53SegtGZ1SjDfBrxhAH5",
  "key11": "346qhzcx1zS72XHXMyJ4mBrouoYY6en89hqwmDQymM6bgAYMcqgRJhHpCtKCqrmsCk3UQLfYzyfEorbgrh3PLpFC",
  "key12": "32FQ3Ah7sXaYHwd26xUWoW7R3fhdBnm2xM6DM1NZa82TxzsdTaxrvE3jHNPqzijnDxdnhPTCmpKiiS9s428b1Nki",
  "key13": "5ZVWQbW9bhTx25Ny8jNCGiKxkhFAeA67z6ohbx1Z29vs5oXz6b1FbtJrtvo9fTMHyFywHWHpWbEH2Qy3bh9UALWS",
  "key14": "58XKMpiB9U1qpkuK2VP1WJZxrextEcmUrztPJwjFhccVp82DeWtzyTBvDLEQCmXY5ezjT78KL5mtUqru7qUVzk3L",
  "key15": "57upp7MJ3VnrR8rbnxN7Ez3jzdJAVJuUr8wjtMc4sSpUPDC8GfumLyHTJd4gtAsqKuLvpyejVA8PcYsFhxAVpMHA",
  "key16": "27jEte2zZ8GgooWx2kzjxkfAd3thfm2hAX98yn8EfecCcpUuSUGqGo8XBE5xBCxCEeNjhbmTHFUrTnx9HZrSe97t",
  "key17": "4kA1vUfTK8y5KCQ8HAfk4MEQMP6VNyVq1igi3xD179o9eEzntLs8rnxDTGC7c4r3iEdwD2QNUT4jV5g2yApMpzK3",
  "key18": "3gUCcB13SR1uGa2yhfpwseQ3M3TMUeiAhtwfF5rWA4XB91gjhPxSYLtoEvjgDJSSZ9uQYsvpNBZHmKtJf7hndpYM",
  "key19": "4DZxrvWvhB8fH9VpMaKEsyuERkH8e1ZJcUSees6rbKDqQpSFVFbjQW5dDYSythR2oyuEhkTa4RqEu6H3K9HcnoKb",
  "key20": "5wE7xr5mGKnQUu3cnE6jAbday5wX9g2yeNvqV5Rvji3TZ5FoyCNF7s33dTMiFs5S5SJRC9nPeuMFz3zBnJbMPeXe",
  "key21": "3bNUJnQBSjUKexicS6BL7uTKSfzxJdA64iNh9qkB4ag4UWSF7FD4wfZ35zeHuoFQMZrQPcY7gLsv3NqXUUpUkVk4",
  "key22": "2e2xow2sUE62MNxWa47j6KvxfAaGRfEFEmKmr8mhFb7ieB2ZDELxywdo4hjePQSMKSNfeDDcsSYU1CCQzSUpyE9U",
  "key23": "5s97yjeYeUUT4ry8v4af6jQgQZ7bKfgySNLFzjgfUGsNWerhkNSAHU1uY1fdFm1hngJsB6x8WEonZDm5tM7YENWq",
  "key24": "2XCbdLAG9465fnT2jf5gpVGBxDLDX4gyxhv1XpvaGXr3oqj3tjqrdB8kc9jz4b9m1d8xaK4zCuiUbZ642KPet8wv",
  "key25": "23aXdr8UJLw3EFAPNKqoSXpjFw2eZZfc9WEQtTfeHEThsqNRNkTMVC9jTw3cXHqiHk3QHbLcBr6YCwJ5Zg3VtXis",
  "key26": "3o9KdJv3sPCf4zN3hL8rUkinTzX3z23tHXXY9sLjBZ24jJkry88kb6ganTFwEyoGMrUKNMiWvo8mgXQBmENJ91N9",
  "key27": "9ndPZFgPpjNijWgArs84dT5tRuedxjvFXgyMp183LRGSGSWEzACXRRXVhhyHakgeTctF3YK6Nw8Eqg3JdUXXYRh",
  "key28": "2tGokz8VB8S53P31obvhZFyuxWPoTTZRo8UfJZQJKfuzjqB5dYzBHyenBRAqfH8aNL2u55LQm7aEzpLC8fAgH4uB",
  "key29": "4VVvjqY5XWz6W1MyUcJAoB9UM5yA2LCzAbB9LF63QThJfx2PS9LSzkz3QFC8T1Dw9NzdQXeofVEMji8kWWbxB3nq",
  "key30": "55h5rpbGigQCQATFtZTecLYziL65C8sqqhvaEXnq2h54s6GEmvG3KhatARZ52XQNeVwBQrjmLEHb5grT3CohTKr6",
  "key31": "51SpGbHGsjP2v3N52zd6XahfKeGtRd2pEaEDQDWrapxbodS27zWaMxRsikkTcaaA9SsjcZY327z43bidTs9VAEgF",
  "key32": "2nj6oLTuho6R67FD8c5wETLpU98voqBqCMG44s5WTnm33DVW93jt6cxNdXGzoD218UDqH1fQrqRptJDQ9ZxZowDh",
  "key33": "2J6vh1HYVndi83U3CZUiYW1aH71gscyEHN6P2au5WdGfDHcyv2xtgXxdSTxm8LmbL49H2QJh2mCyDegmJDzdt3X9"
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
