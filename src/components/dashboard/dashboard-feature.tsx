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
    "N1NsmnjHZdbu1577fM59oUDznWw2nzKZraSWdXPZGp2fDPxEqUeSyWKwqGYNxHXq8mShNbX9DffVdpGGKYEh7Dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2toSo7DUEm5QUZhNwYHFSDqAxAj5nRjE3pX9shajA1cKCvpZnPsZt3yxDnTXtCbF31Jfs3yivhAD3gEph5GnaW8N",
  "key1": "2fd7ZK7dodctGoVmT2MdjvdoJ9xCBdjcK86KqZkYJpV2DV8JfLjEmPk6VmKkahAxK6Sqh7aur4jGEFAvWvWrNJZj",
  "key2": "3boKdLcbyumeA3PTjre45vLq822cxcEV6jZSZU2NN4zC8magcaC5HNA4BM2YfVAKzYbceDrN4u2fCunn1HghzThJ",
  "key3": "4zRXR3d66wGhkEWNXZHtD1oGGaGJ32SSGDrNhzP5vwvjTgsf8TUN6zihCSEF34yNQFbA6YofUXQ8YvFRE4NHZzZb",
  "key4": "5VUmDU9pyDUmXHniZfa8sMz5nYSBucnWvKwP8mMkbNTuxHqf1Jc8HH3R3ejd9QBoApBb1u8qkrMMM93hzR2GR53K",
  "key5": "JAJrhA3o4Mx3Ze8CgddLGTvcHoPrZrtJCzrYovBymGqpAM9KvDQzrnKdmUD1vMwhpM7JJ3G5QUxH3tcfutxpzPU",
  "key6": "5jLDBsqVYyswboB6KbhbJjvGnpzujgFCSxtiQ3BVNijudh1B4NDUozXxDFxfMhhMJFNuZocJtbn3hFkv7z5CHTwk",
  "key7": "2ix8x5uTUgWEqhUEsAzA1Wh9R8fnq9TnDrnCeMddqa9LFceYwmwq3qEiKq6msqiMAadjncGjiRfgiy1Rb1HHFRjK",
  "key8": "22CR34dwJqbsqkjPpJAJggaJCYLqAnXC1f21uZ9RSGxtf6oohgQF84WVJpm5fJHXF7fhPLc21PcsmvQP5VocTePW",
  "key9": "5Z9Fv8dfHNy2waocPLexvzTSaLxK9SD78AdJV1fVm9RXagYQZP2ceYMHo6nRnEXdWk1JnomgWGLXwQmNeeVA9Mgd",
  "key10": "4KxJ5kQiaEQbj8uDQvY7GwNqaHUYozacoXmYGnuDccTiHUx94CfQDJq4VcYHFHr49QNeg2K8cJezQUHfq2sN8vMi",
  "key11": "mXuh7nHRb4FrbUdLHuZpEzAvVw6TzopLdRKXzn3MVGpLyEP6GRJGyguZvgL5oRKkXXfdPb1QqiauTVSf6D2dTpH",
  "key12": "V5d3KVPZHoqdcCHwe9ZhtDd2x6F8QRwHfNiWVN4iWvMvEmivTBXUcj8TGyCtdJ8dvdxx5XRrmMuNphao8RznQ4n",
  "key13": "CgREAL6NkhB6z5s5KBVAzn4VAZUbGKUU1ComWDaw2XRd91SDdKAhQkKdkQYKcKVsZzXmunMca4SAa9idYNr9vqB",
  "key14": "2ByQQrRsNx1NLnTdZiER24gnxqrk1DKYA5PxeXkYXKCwryf8PkiyP9vjxk2A6SGpGH8s6ZjDf9aQ3hEZFaUicmKh",
  "key15": "5BZ2ZxBydP21SdtjYnbkBWpfzBCgDunpNQkyTC9GpSYiSNV4U65uhQwPEZyMxTmtEhqbLaEAEqFs33bfruEEqhCE",
  "key16": "Y4S4ab2WGNkSDMLbkFMVGS2cbBFTb5Wb3t5zkXe79Q6ypvR3H3S9ohvarMX6KBzhbW3T6txX4RXWWUH4A5SWXBg",
  "key17": "2XqvYLCJm3kM95bnzuZcgQ9R5cAX88SqCCEbYJ58WaKnBGqXpCU27GNLRD5x3r7XD9c4z4sJtAHd5dMUcEiJAsUf",
  "key18": "5ZJpairoRAEgkVuTAUdvk2SyPre5w2cDTzGciZ8STpPnnqyFYCFfzWXBjBHr9WyV2K9aeCQMg29G3SbeagjffqUh",
  "key19": "55LsSYgZgpYmoNq1RtTkwNBn3xYKAADbKYc5w5MHfKx7dKo9ZcNwcmX2uRxjwgAdAztGDrEy9Tinzp8sWx8Ez21G",
  "key20": "2AjxEHSw4VyPnZCRhEV3MridiK1efox1GKS2JdPU6rmZZHmx1Xzm6UVZx9KFF3khY3dMEAHHnz7BTsqWfZfVAFV1",
  "key21": "43m9NmzQVw2gbMPHmf2TMV2cLXfQ1Awby9x5sAjDvJr2Aqvse5YGhK3JPmhWn6i3BZmuz8MZwuTSu1sEYokTABRS",
  "key22": "2CHaf6tjg8gsQibD6hQN1wJ22zAuM8dMnNfRgoCdGD74bbhEDAyoqTm2Wh8YHAa5KK6iQxcat1NTKfiyz8nB7gi3",
  "key23": "2V2tzLG8XFgtZpJQRP7rM8HZsR6PMKZqmnwcu6vSTSZYWU8dL2vpwEM6jNtq7HLczMYhxDgfMhE4bFoRvZBXqqs3",
  "key24": "3RQrGD7A7x9vejEd5KAibMRSKCdBohJeq3ZG5REqusk2i3QcCmWWbauTFc978t7p1qHfSQFSHyXcQxG9XFTKhZLk",
  "key25": "Erc6wvE5nxrMCGy1MuYJ7ESeA9XrXqAk1TAhLnKwMyQgGVK871yzDNdNbWnHacQhFDPGJM4eMb5xC9df3RMdwdY",
  "key26": "2T6FdJkDfo9hoyG2gUBJtPJFfUSK3mGMz4y8uhh7afaAkqNxZgi5AKrmPdM1RkaqJq4oXjtDMB28gVtc17vrGNY",
  "key27": "5P6pnMfWAHwu7kRjXHsoj6sDwL1HzaCEKYLpmVqFa8b2MByFAvuVrx58mkFtqasKjf4RbBT4wyo9SKzvJoMQD4mT",
  "key28": "2VWm5ee8FtrnmsuQmrJxQZkhhZjbsZn7GdPTzXG18Tm5oHRfqwjMHmw8rG7CPJxCn32zM1HUs8TKtcWhSZKtwke9",
  "key29": "4JobHBR4YdDMoXD4uTXNP51oSZ7yuRrH3zjFqmXi8q6NhYNPN9Tq5Jo5EBaywpZaE2ya61CUPAwiLQ36VB4DgYp9",
  "key30": "5w1Cm2ZgascVDaTnnKo6FjHTUG95wFMj3FWF5o7iPpEabKhjFneDJQkJMnawFXYNounGhqCjr9NrmraN8SgP3XZa",
  "key31": "619CyCMBqvnFtoumCJ4XM8brQQ6f1QhbnmzLugHE5NqbFMTfmdGARkHukFMAVMnVqZmEr99rX1KPzEvTjyEYerfr",
  "key32": "gvUXLAZjDCJWBEJUYroWtyuFo8zpf5Y94CFwTygDj3UbtnSorWVhUzWmgqjnh9w3J1Q3JdMWPNca2xRaBNmEex9",
  "key33": "2wuXEmRKKskz8B2PZaPmHosE6NcGHJTLoDo56r4oiY1r2mA7eZr2iba1D6cNCQn5qEcpt2BTYg4jEzi8153ZkNpW",
  "key34": "5fKvGugB9qx4P4HFGJuDg694eN8HhYb7yaBTWxzR9Gh9y76pDigdeiM3JmqAvNWGBJFVeZHDaWmbfEgBXYyrHEF5",
  "key35": "61pL3VxWHnGxq8Hkbq7AGqcvWyqUyFSRqzTFXZoFL2k6cLGdUELzFABpJ13NXGVuTWUjrkkfCBaPMp4gs9pQ4AtY",
  "key36": "3K6XJsDg3sxxq2UPUgBB2JxtG2XzsufA7pB8UQiMCASRz6ipTT8BDG2qocmoBNZZT4SsBcMrFpw9akMUV8z5P5i8",
  "key37": "4kS96pSMDQ9iMUKhxv38Ynm1e9g8Bn5uW1MmyfLUMvuYBCHoiaLZxK5EffcUewB1LojDk5La9s1s9Nnhjjb8j4GN"
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
