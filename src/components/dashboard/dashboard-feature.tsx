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
    "4EYCcPxnBb2KB1GTo3MLvzeR3DTiadADjJJZnR8hQnPZeJ9qDJddJWgEAQReSEwZ7CzaTzrsqFanngdBpVqMqB6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1hGrDBpdZ9r4Gi2WweRCD4GmgMy2gRGyQGnA4NThYtiG3gU9oNEKVvi7nnPeipr7ZY6GcXqtAt1XfgQpgNvm2S",
  "key1": "67LKYrdQt7GUGCCQjZsdUhUZqPXqAiNdwJCTLSgX15ujkZyniVtkFTKiaSFP8Y3burmicsFovtAXJxXuWxdL4JgL",
  "key2": "4UweVmmmVGy7cgnNyQk8cMxUE5mNnAYZJK1UqPQHQJDEH23LXbcjoapRSLhNEvx32otdHosSVEqXvKZUwTqhgv4f",
  "key3": "qdLAokSTvBh1EWedrXwAwuGHUtGvu2i75ZGiJbE9YbmiM2xcTjoseZAEU3QYGo3n7if7gpXvYGtG3zbUEEp1h6d",
  "key4": "35yNWfUCDwWehXthw8uHNMUsVaX1YF8UjNtwpcS5s8y71idmncz2hVJVofEhTkMwo8qJfPCR26P33C6vQyeVhxYe",
  "key5": "hHhnu41hDgwt5gnPr99mSdCGXFQXL9RojLnWiuNaAcALqoecBCsTxfyiSYgoprFXp44Nzthq5USTjqRuuREiS44",
  "key6": "54VRm1H8f7uUNMktkuj2skfdaUFTda1km2vFpjn4Zxu4XT8zKvE73btt4vRX8qREVVjN1ukP9WYfveCRBp9URox1",
  "key7": "5VPk9BWKqpG4RCjLytRPTTpinQKjteAPc5fvjkopYFLRBzXWmTEpDZe4rgvt91RqBqiVN3TYZeJs68mTPqi66AwK",
  "key8": "65s8TwqjiuoPg6zZ4AdPVcCEXa2ub3BCAptEBgKKaQB4crxrz43vCe62eDfahi8umZz1hnDZLU3276TAaVMPCDH7",
  "key9": "TnKXbp1uhc6ViaX2JKdifJy8Se3X4m1w9pNZGkqnCX5DQph9UvVDzxjE5sGEsq8Cnra2KpoT1XDfzWUQvxX6VbT",
  "key10": "5CB898SgUZknTyKmzunGPyCDtkJgLFQo68n7wkAGWmKYnBUszfN5xHzs9SMqwgN61ybr36rGMfUkQHVU7MUJkcHj",
  "key11": "xTQAWmqyF5yfihasRp29zfJLk3vrvSnsDr9yGKtXhAyXLzb9TZkWJdqoVyryZhxEiDvvixkq6CEdGkrnnibzQeU",
  "key12": "4WWYqEGSQgMNhicqvgzrMcaYPZFavds5HZdPqSoC9nHZHDMw5XoxvD1XFDfof5KsoULD7zv59HTeq7GPrb3zUiPF",
  "key13": "5jnpLoCVpLHQGJPQ14azCQcxRTa81f8fHhDQv86qfrdd547NJrHRhf3b6mgKSxnajwgyQvVvAZZM8bGwGUEuhmWx",
  "key14": "5RbTKp8NS8eU6EkHr2NHRxU3HebVNaM5bFrt3njsqDK7FFzZuJRSzzvesoBf9RznF3AApWf6vPVy3ozsq46jUvMj",
  "key15": "3pcJD1Rwk5Y6Wyf3EQFGA5GbFeqFAgdCDrLtZQSnRfewnCC34ijwnmo2Xa8c5MY3xXVfmVyyL2LZRLRVvtBhLpj",
  "key16": "59GFVmbqhZ5Mu5bWpgu7p3XGdEtHLjznjMraXSsB65CToq8eJwMfoy5BUwdjSziEpYiredBimdmSidaboLBF5n58",
  "key17": "2RAJRZjp2YBrE6cJBG78w52YwE13qNmHxemumA1XhuHgK2VivfHb47CiNx6xAMgTiHSii2nv86qTSEpKFaVpwGQj",
  "key18": "2hN5nM27E52DeN3QZKqZetLq3RVzR9mnbLxbU6JxFsNEnrJRuTxPFhcDgcbB2Y9CNs9R6H4VSpxt8w1RtVZCwACA",
  "key19": "3U7jQ8ykrVAyszDHzq5c5VW3GYkdmwq3o2arMvRGZ7vF9Mc5tpZCW9jDGexmwDGf4giuCeAyBqb3a9JCcCrmwMj",
  "key20": "2Y5qQvM77VnifX9y7TqtCcEqA2mK3BWQ5UNGyCYkk46ZpTWZpqDfYyD3LKneLEGgcAf7ntBYMASkPk34uWNspM3x",
  "key21": "5EUsAAAzszxK46P8CuBp1jSUkFyYLtgAjVcj8GWaSgWxnRe2dipp6hMvKgH3h1HQG1v8FXgXJWuGEA8YcXbedRzX",
  "key22": "5Wr73c9CW3HH7PYKmqeDQsbQq3o1hLscZbJjvsAeYqiiTkuRnUsYGsKJDEs5MHTQY8od8wf9FxuNSPLPhuhyKVFT",
  "key23": "2uuQPgcPGZDxBs8GVbuM9r6tzaLpp5EyS6qq9GG4U4NCCs5Neok8UfhdE9tFZzMZFxgFKaLocrQYJvnhfvsY8qcq",
  "key24": "4VYL2vsJk3M6tvSDBnvCCmwfG9Z2NH7kTJnyAj97ThV9PZZAVeYdQsNJPoE9T6d69hcKZ3DfKTBfw16G2owyWAu6",
  "key25": "2EddkLQhhkfPy8W6S6b9pLid4TB5AKcmCdBCNjYpdZ8bYxiXz2mgDDc38vRMDujHPMYULuwneL5NTWQVzMpkdLD9",
  "key26": "62F6AShPGrm2y3dUg2eUrwaVzRhA6XmgaUjxCBxKCFv8FeqF3oyqnSFFBRhrVEZoxUTirztdZ8Jjo65k5FipMVn6",
  "key27": "4YKSiVkNRSDt6ZAegAoCXoQ6MSL77J7vfVxtN8i89JW4HuhaoDbg66w3iKdacB1KBHYDfZ3h2r3oQydjrkZLayUu",
  "key28": "Yqh1zdi7Bz2aSqL718xX8PRfUhkeAUiyjuL2PrxGgUuA2UejGW5sbXVDsRkhhKuumUvMqQ5DsfUJCRncUehMhCW",
  "key29": "2b3sqien1K4ou3AAmqk8DKwSZYDNGE4Tb2Hcrc3UxUf32M1nwFHCepTcaYz7DoV951TopnaKLBFNiWJNB9b2fShx",
  "key30": "28XcQzCe5H9mKfaJmQ8vSJNddtG2iLfcZEBxMQE9Jt4ZxCNaEvPsboQFku5VxQw13wt49ANPdqcfHDifLUjawnEb"
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
