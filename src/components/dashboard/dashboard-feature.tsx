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
    "5LPUQk2sZiqt6gDXpRuDvnJ3Mqte4CwzN4sLnDn21icqSNeu6eSNToad7FgoxqQwv8nwvNKXvUNzAMcQ5E23PTRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27sJj2qNnv4CGC284avvtivD6KC2i3ANjUXx4TaeyUHh2JxXVaeZHk5bgGK4FEeRdx8bdSzZk77tVm6MVB2yMQgk",
  "key1": "55m6LMnRgiqTwsCqa2E3bppirUypc89wNjcBkwZ15fzadSQaoo3nm3wajnuCZR2wHnrwCTTaoeNmoeA2MGjbDQ3H",
  "key2": "5wQFkwktou5rBhEfynGnrtin79rg51xZHXrXcpMsCcGRiAi69HNNZJH3FvRSbu9UUnRFp2C58FTf6ULcZ8jVMFya",
  "key3": "3RXfAWgn5j1PZxWvUU5b1L7G7rHA5phRYVFLid4Xn4EPhtRZznbUfc2eqQZZXbeVRzXXrD2ZHowU6G8GdVriF9Mm",
  "key4": "3t4Hk5XvUVdFUVU6aQ9KG14GuFYiagJARFPuP4TZdmVqiD7JCZ9erzPe4V2S9xJDKcW6MZjo1PPXnbJMMGQvwhtE",
  "key5": "3JVKBgrNeRM7PhKnpQCR3zbAm6AfWjCRRi48psdgFSmUQmhUgmUjBm4EEtTxmvGE5toQu3b1qTSDC69yxakW9zCc",
  "key6": "5U5ekqv5Vdww4eHHPXZZMZqVNUUZ98U6B7svtG2mC4EsEYnkA6zQPFD6oSkT5ia4pAKuLvCPb9p7AFU1s1s3DaN2",
  "key7": "4abj9D1VCkywhVGtdmVv5rXJuGTs6e6GJbLcyDqCenkWrxCuMRgPhy351vKD4oMXRynawpuVGBhGuYEQ4yQF3E9w",
  "key8": "1XGRp1KoSeNhjEF2XcUKZRJ89p6PbYNNv1vE2zgD924yjUcJCmGnSQAe3yLtJBtdyAHWpEawze6q83vuvdeUKR1",
  "key9": "2JKTogGzwXEvCDLfzL9wa4xaCghMQRGgaFy8JkiqxWCRnZCM2mDM2DkyQouHHrzTmNzsod7DMWhX9dgp1P6pRqEt",
  "key10": "knEti72rhGcadxCwkzPAEaq6mMHvob6fTQTMkk1aW62HpXLgbhRL43JJNnwocKXQUz47gKyJrkq8TVA7BAwj9k9",
  "key11": "TUDCB9GWmvwfcda4SpEdgcXpMwS8tR2jNJsKkMjujfefDrbuwFhtbRRhudatxJC16MiYKY7KwFHDaQi33Usc9em",
  "key12": "2KmniGKTjytcb67sQFn8sviF4aFpfCg8kg1RDSQDWsmYL94SGB4WSjDxLf5LKyiqveWtQvRgQXbrfjyNXhhqxSUF",
  "key13": "5yohVfZPkQGusvZzGungJw2fFwDJvEyADDN6qNMCbfaTXVrGKfQNGmSZdgzLSMZgHzjyn9NZLcy5ZQNskthUj8xe",
  "key14": "4SEW6fJH588F4og78P63TDtDEVnBtRxMYiXrAQmt2HiJqHE8eyi9i1r4tq56sVfoUpASBiGcDyr9ABF3zerN1T32",
  "key15": "5JtUQSAnCN7uQkxVDQt6qmCLCxngXTzX1uVHQHjFjs5qnEewSg9kyumwjMBeVHXciKQkuJp9scgtjnkroSRyTtML",
  "key16": "iPJJ5JZcGhCNafMhgdALgNdHT8upx72bwwbT4M9oogJQDfGHH11PS8fY8Emo34a8iWHjUscmA9N5rUFP1iryA1D",
  "key17": "4EYZUYqo8nQsF5fbWuWtepc8YY8zgKoQcarz3vrdWsCsztU9NLQRFDnn8Y5PYvoG6BufRsUTAdkumqikvut4bBWm",
  "key18": "vQ3ubnrS9L5UXAj353kw7vwaYAV4AR99kPeogSFfcLLoRc3s41wVUY8NxBqCQWKaHmPPh6wBTxCpsYf1p97PXd6",
  "key19": "4FaD2XpoGknymxoUKhEa1Y4gtfRGG9667TEtbvfFS71n37TpYCWVVwnF6Pa1ozdeJaCjLkbUW8KisTdedJUQ5EDS",
  "key20": "4jyY5WhUDsonvT5CNepwx7wkw6WquFoMSNmxqvyB4gB7nrPLF4cyjTrB61ye23EHdjccek1sFqnwB3E5yeUzpu5s",
  "key21": "56Ls2i86NNQRahNLqAYF7en2LQVvcPgdZKXdtusKsxurFcTewnFKtz5p5VuoVZ1WkJ7B2bFbd8ybd8Ds75ySd1wB",
  "key22": "4ZTadbFxe3F6HGJ5WHESvUhUu7fepQeBNFvxBtwhBotqRdhHRzCqz7jXy3EGcdgS3KgbcxCj2U4g9K9jrxjtpGPi",
  "key23": "5NzoLjg4pQhqbP8pXHVWFYxDg7YmQmc51DgVvSBQwjnPrmUSLAZFqx4CpyXjQCUvB7BfynhuHkzeouUed2BCZfey",
  "key24": "5GjbrVsjay11DSDDjfNTGyXURW8ULZaTiMmHDgDg57fFK1e2ruT4tcVQ1NxTE6Q81hCSwsMCDb9LunPLzrDXXacp",
  "key25": "5moR2mNxCsTRYMmq8py8cXUhDDYMdn64B8fQmLBvnsWsnDXGLH8WmNQg73dXPZwC5m8kJvfaTTHot38pDYgfftCX",
  "key26": "2xdMAxZtVVZ7dNXJx1QiW5PyoWdCdF1nHJpoZTjk2wVw9eG8FweTjBux8Q6gLq1tqTTKHLazEcpKrqgCZ6bKAYgh",
  "key27": "37yhFParwx58Xk4MPahpvoPEVCQjcbDv98EjYx7rEkY4KdT2dB3P5XTU846PB9KzRsEnKUGg8dhXK7QFzKR9VnPh",
  "key28": "4wbqGYsaTrdJeEgbp1xsgy4Jwnq23XxeDBcYeNPkYYBEc4tr7RKvvmX2TqSxvNwEbuwVBYQHkWno3RW7obiDB7gm",
  "key29": "55QugJXzwN6qbdYngzKVo7bzcRqbDh5fDDDPSakck4WugphuXfx4obdVe4Upk7SZsfMcYsFQdtTZps84nR6a7Ljy",
  "key30": "tjhz6wfyAnhk6ViGqABHVCn1LrEBY9iPNRouzUBmNn1wvuJGdcQmeU2cxRn9QKkkam2BwKd34ZH6vEH9oErqkxe",
  "key31": "2K5M689i77NWdiwWzJNDHSSehHbTWiBFYHhqB8scBwJgT1ZyfD1THErqRdVaYwNhPgvW3YjJWJ946yEn6C8mvh7J",
  "key32": "Uo8bMXtdi68312iD86urzC6NniHzsLLJ3TitYuULGNoHk6MoNkRv2QPy3kg8pSRFcecLXPjGyFCphxKFDa8vnCf",
  "key33": "39enYG5oh1pg37kfSsbuh18V38snDpgS4XQpgwp75RU5Z9KkYXVHkionVYasCYsAio5JigUcgYbJ9j89mn8WXi9u",
  "key34": "5d4WzZpYqEXagtQnB4gVoS85rB7wShoG2K89n2svBmo35ZMopv3BkWJSpSjuPUv6X7BMuQH8jCGuahgN3k8b9yks",
  "key35": "3Fv9renTTRPHnqmS6iWphE5LkNi6EMb4eBpyC8hKaduVPHezZCBnBQEHye4f7neNah6AqUYUcFHACgbhjZbpvJAg",
  "key36": "NuqVgWEqDD1mqrPpWMiGovyCakkPqj1tNUusnnkBDUDRT5ojjLeHq5wnKyc3pyE3oc1FKny7QH7XuRg59Gtkzw3"
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
