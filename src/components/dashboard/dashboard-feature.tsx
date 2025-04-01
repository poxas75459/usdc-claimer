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
    "4nMG36uRpo435w6vPSsDgk1kYhEJyLSwjKVikcAkhDrKgGf8utxhiFpfjDpLLbxNERjnvhdMyzenf2xQ3N4RQwCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQVUpGJi8nsHSo9bmM64aRJ1uiuNwdiUDFGeGwnbwdwRAhYyAheft3Q6SEqPtu1UQ1r2y3GktSgyiDohkYR2sZX",
  "key1": "2KGta28cojA4qfHWSukkPx24Cj79Pmnux91isdtXFprXeKeAAdzEF7nkh6atjvhDasDmBqyiFnFvmJRAKMxs9BmD",
  "key2": "3oeb9KX5x7pheyv89VeFDmZ9mXhYkDFxqrtrYDvGLbtNUvQTLBR2aEUXTH94zFiSZ4KqqfwGNp1uqXsjbjrA54nS",
  "key3": "4Tq9oY2gcnnwCuFPxvs4hrCME2zZJXBX79mpofg9rVJa59DMo7gQ4rUV9poL34qeoiaWqRYDiFXHB6H6EBrZZbS6",
  "key4": "2EUVddEihfdp3bv91EAPQ71gpgaETWY7kN2wVhcxhv8QC3MsrXmoJE5fiPptqjvNQj4vjVSgkthzvbhenrqsiEd7",
  "key5": "39JdPFXraRGmkztZyq28vfn1LTezewyNVKNyxacr4UN3hsaiyYCcnfETH1csgZtQdcNPCJcfLW8mHrAqQZuyK3mx",
  "key6": "sMGGtbzPQcY5ba5rsJn9hY5dGsY9Lmy5QmvwdYxZqjjx5d8Z7WnaqYA8B2F6GThEpfU9XyuZ8K9cUnaUx5RUrt2",
  "key7": "5TGKSPKNwLDNWgQV1Jc3pP3jHxCmN8ZivJsPYfTHAPTSJwJNK8sAtVKsminCuHALgrN3MEVcgtPu1kg2CvRX5Jvu",
  "key8": "3T6N7B6T3UZE4Te8LkgMZQb6ivqEwiq7WgavvwxfbzQqHGwwGAjTgxGQVH6Qvy5ifcx1m8xrtZLBVzKmmWoE1ChU",
  "key9": "A7fQUXenWLmyf1CL1mYe7gJJtEPMYfq2cWyXzYvNVZuHbopRphoBHBPASzQzLwm7UDp8d3LtZoMc5dQXVEuYZ5H",
  "key10": "4Ks8ZrSEjUCMgposgDDqqJW8cUV6Zhig1eN8jwZWWJMnodNcv58QuvsR8TbXsudLEfi9RvxXxZqWFL6fzqVSZtbL",
  "key11": "57VfSRPLdzHUj9AHySkG7p8of3H4toSV4WRRYcpYwcYvCUy8NZWnJ8waBeaNjPYhfsKWQssK4XHrpUi9GNo9mSfS",
  "key12": "j1MqNRqYsqJ1DqBypAEBAQ1QRvLnqEBzb1cyVXZuwY2PAMQcntbmCPWZsXFMHgPdB6K9EYTxZxiAitsexJPGhHD",
  "key13": "5LusZhYo8rt3QPP5AitfXriiBePgXvSxkFdvPikYogoN71syPdthptGsf9gq2t2kVWUk5gjBCmfHdPZD1p4g4kcA",
  "key14": "4rypYmZGm8iS8mnvER5qMf6nqgv2TLsqoLFrcbqxLJT7sjiHwUhY2WNGqJEmp9bAuuYMYca8N8uNUS26BRNHnqzz",
  "key15": "5a9QUHXAyUtZeuHc6ivNp7Uz1x4PAyybuXa35nTg2e2WeYX1qPUnzYcHAvuBLi2cEGmgLcNE5UxrvPNcFPsjSVek",
  "key16": "3GBBsvmpywxrbLqnfr7XqRTKxN3VcymGvvy6WBSwRcW5FQDSeBM5vsJMGJEbeeJsvvXPNPULhg89B5dfwKH4RT5J",
  "key17": "4Cth1XuuXdkEpj1nK3FZfhuindkAfhzvBoFz4QZRQFDmBvWCyfGSMyqbYdWYoQk8sotRy6xuR31tFKKjJV8ZA7BG",
  "key18": "vNWqvxTGLY3gD2aPZVKtdhw5TEyFK8BizwWkM8w8HrvhxtCk7WGbSgJzGUcxZQFQAtqkCNHCrt19ENVw7WYFgro",
  "key19": "66cYkbd75FWWrZESVGkQnNC4uaKGQqvHaDBZbnKTXySAxEoxkG9RNxo95kydYHzuXGw4RWur3jnLYgUN3YfC5m9x",
  "key20": "4VGZvcbCxd74VbhE662j5uLJkRYoBCXSpmBDjvD98ewWEZrhtoEWDXhTSvmBHnJugPizp4MMJqASwvZcQ65YKHVq",
  "key21": "5uBiVFFkTGKGBQ9HSt1kpREpqitok27XU8a7WrCe2kRbHmPwyZ2DPLpT46MEy3qE7ghPGZGNxS7iXX7AoWB2joQX",
  "key22": "4A7t1uRDQRGeTVe9je5Ktrbqt27FjhR7RLsvhd65AvjfkM9GP2dukMM3JU2cvfgq1WaLeeLrpyUpj11BUBdNiReb",
  "key23": "3neqgcwmWa2i8LWwmqogDHWBkybLuTQpxf9TGERFXqvJDKLHC92t3uF7K3jSXhdqBmwT37MXjQ6U4pWN6cMbMeD2",
  "key24": "1BBu6fp7Z8WMMKzWkabKreHCiFw63D7dcmbpTsEuRuzFy89uUZfFYUnkyfjF2Hr62oNEGFBb77TBAnSRqj5sBgv",
  "key25": "5yeL9VwuZm7js7LSkXRYDT5vgEnufzsq2jeXLM8GcQfrCJpqACYYUC2j3fMGxJFFGaAt1jVtgt42dCgSVxRgk4qf",
  "key26": "5WXsEptjhNNfZpPLXm6WH7rCh4ZPYCpr7V9aCz93fdRj7W6yjXxxtxracMz8dCG8qCCZqkF8evUymhLqK2APk6Ry",
  "key27": "5nn3tj1dXV5ZDeUsnNXtv7tYCwG6stcUsqPu6aPjFYrdeH8ztS5zUb1BrdsfpuWikuaS17iQxDgQLSi1GMCufKqf"
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
