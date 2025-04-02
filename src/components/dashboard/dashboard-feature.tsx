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
    "3ZQugW1cCo8NPSRnGSr9oxaqEfpsxS8nDE4sev8EN5kx9cUYdPJLh9jaNYrMvq5mCnJLi84SqBVdfkxzjzEgTiBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMhkaySRcUPN3gjhv2FhmXsfoVKdg81euswsNoJmyuUYZVKWdyTk4KJQa1zwVbpXL7TmSpgJncgFDER9bgMSF6V",
  "key1": "36GWTh6ZQxRv21h7M8rH9TTLy5RQbt1UULSgrggHJqCDxAVyRCBsiQXSUCH7CecBNJqnkYvZPGS8DxUg9MUaVYt3",
  "key2": "VmJ2YWskuAVdiMnkSTXAZXrSEkQfyvoxSmpxFZ41CgUqUMLhTiatitbQ2aDGdExUtM1nvGuvvmuWFFZszESsmY3",
  "key3": "AAdZr5rKqLvNpgKNLjGSFaSCK2Nt1v3YovLkESJNvWQW6ywYvYdnD6oJ16zoaAFc9ZFP6xj3HTWwvh7aVvqWvok",
  "key4": "4WqcV9J86ghgCN3KXZarmBqKV6T1J7E4ScF8LZrq78YvcHQB9hyXwNbQWgxwMFnNJoWEXBEovRMiYJRCLrcLPXpH",
  "key5": "5tK2Kq5zbxLpb9VwSnrCRhKUA1wEMNVvsEjV1YQRBovXKNh3HacncqLPEWoUcdAh2FsfpVqD5XZwkwrrhg2YJwDC",
  "key6": "3NFf7pY6cGNrNd6uaLeArHCyFfcwQ38MdF5FYmyDvvAVSwqPC8eUmiSNdXhUPQnyK8TfT6AP2vNUp6BSAcd43vnZ",
  "key7": "2K5x5VYVP6CG2W7cSjyrEjdTJp4VF3qacq6knznZvye5zs5yccHQXWof3ZstZwcfSJTZkvDfq7e5zDhYaaP9Wk5H",
  "key8": "5gdPsqoJohtiWjHoxk38EZzJRDHuSyoRD9MpjGN2Gf3wTHDgKLMJjRd2sBuPPCxEWf1biAozsriPAk5cTpLzchgp",
  "key9": "b3UWHXUzxvyQAngG6C72axQzsjzqNN8giPEw9UrXm4BtQEzjwJPxXSgF6tTx6VFKqvwQZP6782AXGqKXc6bAXFj",
  "key10": "5bJhgYAcpTm6ykAJV6FWZKSNBPqNwGcKPszdsfv88fX7FrTdgVUdPtfyAj12V3e9skB4uDzf43KKkoctK7dJhMLN",
  "key11": "52mXGzpkQyNUKJofCQqYB4JsRNqJscwQzwnRq4Q7pQrv2W1guAKWGx5Jhuba7xTd3JJFpQXA9MJYbfAkkyRYioMP",
  "key12": "5pXRxcQjaWFxXhHufcpwSMH6B4K3bH5dR6qNGouRTAgyFKLLR3ZoYQvRMisjrZqYCwtqWHKsH5fHkAeWDg4gTSvH",
  "key13": "4oXAGVxKKeNDAQbV7Y83tAaKAdodYDUTpRuft2KVswXeDpbU5U3mvgj8Wf1rcwknczwLuRMrvmHPzGtc2ktcr7hh",
  "key14": "M9fuJmzqsquTfigWK1j26QYZ5gd4u8DEqE5Z8HCfoDFDEAVXq18zw3X6MHiF5YCD3Qmfb5YDTYEch4k3Junzexw",
  "key15": "2McjfneBxLdf9pMqivT6ooSmPfDzmt2XiYX4JksUbYtiNzaRWKRDHG5gUcZWfzD6T6wZBUEqz6cjgYCAqGhHYU8x",
  "key16": "M9jQvWzgK8yj6bgy9Xhf84znpntR31AttZ9wuhw3s8dThXXAzPmS2iWDNzhqj3SnrE7VP8EWqUixqnYiMLJcukz",
  "key17": "3TCqmVsAf7TDCGWo9tQ3YiRo3NP5N2U6spdcCCbyoDFDLR1VGfFfRoQyPcmKXC4KsJjUY15i674e3ofx1WtFfrKu",
  "key18": "3opHPwkw8xY8LPngkuUyVSMDyucJ1wMzyuU21katBEKXrQxq9Hg9DAEvGXWNSYZhMxG9KBoUc1zpsNptrxfJsFdg",
  "key19": "2yDXtAtkY5ksU9RXzU6xDhN73gK3AiqJ7UGq7xrvhugbjSQgF6niLEpA1vp1vSgUUGToNeCQHQuauknageQB7aBr",
  "key20": "3mPjTP4CiMQCUwjHuhEAKzQTsuUzUgfTyPhwyxm4UzippvcA11rXHnbDU2X4tNDRM7ELLsZ2M4FeMUA2nPPzPMPx",
  "key21": "2S4za1aF2fJmCpdFsM1PMewTUmKNkbaACwtL6NVan79MjKtCCXgMkscZ5QUpv5RR53p8yCW1BqJ889bopwaMvjpG",
  "key22": "2VBdPeXFonMYHfyoW4CwXj92EMVjoVXxACyYxMFxfHsDuEJwjc85nnHqVepLg7cudC7eZkuVYDJmsqeuvBg6gpLa",
  "key23": "2WFchSF5gXB9ctLaiEiraDpswWzNLxpo5J5eoc4nTqLug8LCfEZZTLMYJvhK2PeJujwDF9PBRAevf4QPwKRBay5L",
  "key24": "61s4FSwXDA24DtDHjPEi8DmkG8yhCjki4ZAtmMUR9NcAkdDv8grCaKdNKrxs4tkzBrnAtTCQ7hd72THGKcBGc1tP",
  "key25": "4uPbCQbMKskryLmFj58fvL1eFSYo3bnGAqhMp8CV1M4XyUBfwhpij7AWv93REAKKcMJuXKEEaafTLBAxJWzuG92A",
  "key26": "eGzsG5fPcr4Qjs1vAwpS6xdQegdiPKNFzjmefdL3hS3nFpUuebWTrcAC7bp8CCwi3f3n7kEGQGLYj26jffJaj14",
  "key27": "5BXfSqFq6cRQdtgn6NVsYboGmpbTCmEriBGgWDLPJKPMXUvmsZHTQXmBxUtdxsCpSZsfwx4NiduyJrroqF1VivqG"
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
