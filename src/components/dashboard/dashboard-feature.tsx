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
    "3aYnbKgBhfSpfiZhYFRfesW5x8h3dKK8MoyYKZXCeZLrZMpDZcGa2n1gyWvXR4vURtNbtbyRm13tXFLXdg2MnBpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JpebJTU2SoJ4DLxTUgyVk3QuQZKHTwKHK3qNQ3y9xLrAGFuBvBVfEqeGG5tGGzgCWWNt1MGQe1LRLPGCJAWVh4R",
  "key1": "32jUpDpHPbHvcPHbnw8MwHRTKeVWuozxsjEUJfLUCgvdUqJdeUVYV85hB9EwxpsAKkCnNY64eTnLjEnXYy93FdXK",
  "key2": "2qo7WwxgQLuGcS4LjNB9BByunH234BwAxBxXT4Y6o6fyNLaKuX33Ny9AdTk4W4wm67pH4h3KDZfpMY4Pi9asD2XE",
  "key3": "2YWjBC3FEQmxGgFCzxhYPGoHGCqc4A9b443BzNHnx9rjWYjFP7QZcMqvBSrFGpVhHHtatpefKdGRjmSEpZQUSwdS",
  "key4": "eWgrLupgH6pi3y8FTCk31Xzgw7HUA9HBzd79aK4YeJ8K8pZvW99wZqXpExcgzCC8VAZNQzce2vw9NfHkcqWBLpj",
  "key5": "6717rZb72uq3iDCsjWSAsYi8Ha4ft92Kxf6FzaGHmQeTmrDbAXKvDcACWPLdpaqSpUPALj9jwBomBxttyQAYrXE1",
  "key6": "3h7LXAyFZn33VdGRuEGxrsTpjpFAA4ae35ZmbnTtqt3QvCJJ9ps2xUdQTwZLVSHWZ2pRFp6mdcjDWzDwogfevq2v",
  "key7": "4UoW6xfZSNkj1Utj12xzN8kbyNLrMHrAGjqgw5PwtipxDFMSAGbFwVKbws6c3RB8A4xuf65dhJjbt4cpEEXisr3w",
  "key8": "2vyX9EnSP9ByPcxZ7gDRmYLxqosnRkm5qFbzjfE299QjdskZeAteEGaZYJujaCz3FJyaZ34KVSwwQrGsER2cbVtG",
  "key9": "3pHxUhdVJEdxv9xuDh6eoYRuLWZdRcPPCfE7DrwUPnrBEnhS9A1cc9mqAD6ufG719grfMyNco4nJaCw1svqMNGoC",
  "key10": "5fZhFV6cE5SXeAWcJgToigE1ENM4xzn7eeapoZNbcozsk4tbhh3hK7EJ8e8GFKUFumzeke9Ze3H4GopDW9NPtXN2",
  "key11": "4wtWpGQMEb4e1zaqN4i2pQLEfs2jx6g5Cjom1zSrNZ9ojCpoT7zCv9ugHg5SVeL3hAt87ucbi7Afy9eKBCERL5y1",
  "key12": "39tAMLxEA3FkK7KS9RN5NhhhRprwYgfdpRBT6cGZK6se5ZofQGXacquqTpy7u6tSSMNgX26RKFihkRtx7ecdiU2p",
  "key13": "2LHnGG8C9DV4wPf6bpNU3SGDjEbwvS7ZYe1mcLydpzct6qen8hyqQjrbjoKhEaKRMsiXjE2UHCNscUZz7sVNsxmF",
  "key14": "3u4G6Ya4n2rufVjLgBZKr7QECYxTvBDdShrNhokd9DCpU2D7d7syV1RjjjEeu6LcALwy8P8gna67NBq9S6hpXYi2",
  "key15": "2CpDsHmz3h5D4VPCrvRU4SGeg1erwnQrDVBhyhDXh2ENkzfsdzmbAPNfHzkQEeTCSLBzY5nTdy61J6ArVtzDcbUH",
  "key16": "3hpo1tZZ5epVsdkcBFmCigwZuZBPJ2a3QfQyYYBPAEbz4UdFmGpCJ2oQbTYKw8W2L7yBVfGH2b5pFX5Znhood1SK",
  "key17": "4vnbaFe6NK4TDVnYAusR8jazaBMZ6Z26xYVSkJ9YERxvQb2wCNYU8bkH66n5U6me2nnLEzeAEjBnLVkydkv4jBi7",
  "key18": "3YNVX9Ef9m2FaA27p9aGr2CU5EYfkyjHN6pXSHvbbygRcWqFkfasdPhirKnubPpa8B542G61pSEzVCMXFHJtZ5Dg",
  "key19": "4wn86rvoNTX86iKymbJ1PMc9ZSwsTASz611WkxK4wJDCxtnJJ3wGYidwDsnmriGts25E1NfSRC27JV9ktYST2AJR",
  "key20": "5QVJfAmf9nzfqNQcJb6BQ1Xqqor4R6BrxipBWqzjbSqXVo413Acmbtxb7BWSR1fN1u6tgwVZvNqmwgzvV59myxEG",
  "key21": "3fLhcU5YTH5Lh31uftsAmZYQXcJtEAQcKoMeaRSsmCRUzTeVDWChqEVYvmzZ9ir5vKdCe8EUBMfEY7ZXqWvF9C8L",
  "key22": "2mn3xu5qWq3ueoPSyP4Ep3uKrFuRT9LmmU1EcLZFVxwuUTZb55znmmQfmRVFDn38gWhrbXfhwQvk7w8ity5Mwuya",
  "key23": "kxFgxFx2dn3DJz9azg5pbZG77JZ7SxuLELsSHXtrRTHT7XMjbcDdTzxXU4W1GySrcSgaKKi1YkQY1Q7WnxxLpKZ",
  "key24": "5gTQMhimFeNLxboJ5xDLgsRwim8C1TcnqV5JsvZyLwQpMsskFUz28KLd9RuVVoz97dZUzHXpnLcvZwnZcBDaNh6P",
  "key25": "miycbFQwgQDSNLPcNmXcU1Q3wJqUTQbcyQR7ePcmjhVVSz6PHy1PqBg3grUm8AtBoZeEk2R5ryn6ggMdN3iSd5D",
  "key26": "2ViJ8CJai5rM8krPYoMHeApyktorbCneB2LW5TXqpqg2pccrVHwkeyz1oenhJ2bYYw3eV46vo9CgPFhn6P9w4aXh",
  "key27": "3xMuprDjx4PZT3dJTRc7ADDwAUvpmnnBmqRL7RMkALKrMEtzzXiK72dtLVgjCcUj5xzyZ16jXztXeS8USy9muXPo",
  "key28": "5yDfqPQKWKEowwNyskm2VcvHvqq2jiuVxrqVAPLq7DHdzois682DoPZtDojGJ4JvGV2v12weD3Sztg6Wv3Bx6JWx",
  "key29": "2zoxVtLL84hAE8qpg7Gjui8n5e4iw4MnwyXSSGWbUr3LMPr8YEA9YoHwJgczcpPifvrMnAxXb4v9Hmm3ASTa3tR8",
  "key30": "3eScUWKX3ZEo1XLhLxhnrnxgk1Qv5s5YeedaAoT55UD96yz3ejEEafNEzBAcGBnhsCsZSnSnHiZvEA46tiEi3zPQ",
  "key31": "4nQ6JVyzR63MtWyWTHhMK9dvwwt2PPyTabhdWxk77Etk9BqdfeE45vkpr2BRkCmUDeB1hoGME4v2vn8T6uLP6thU"
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
