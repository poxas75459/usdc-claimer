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
    "391WMxH1kb1sArkKbPA8vbDsEZs8vvEcvgGAmL3BGsyp4LocetVqrBmj5Xdm4Dhkfe8a2uSq8giWXuBpMuF1W8iC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gErhDHY6aoiJLCSgRvzuvhYSU4RZAbiQB2gpJhR17XmVDtb3SEMc733drPCBkMWS97TeG8Kj1C6444ig3Gn82ba",
  "key1": "2RV7g5XjA4rhEMB95uzshRs4VeYsta6uhh7iwF5snfEjHzhZhxagzfGDobHFkLqJAiNyi7bM7zRJva4pfsjqSXxQ",
  "key2": "4hERk6RK5Zo2zdn9XAdBiYfCobfhaXabNzPUBWgc91YMpsLR6wQNTbid2xzMpdtEc3GJbfTfXACV1uNAQew2P4Sv",
  "key3": "2vQ1zzRhmAzjGFcGq3ZFGzJH23JSzMib3YKBDWhduxrUEtsqQjRsM5dfiT741oZ2nubjDLjs7rpjhjnPPMJ8W7ME",
  "key4": "3ThfVvdwBao8eygoMVmxp39p3AdurAbyZ3EPR1QQZmXncXArkt42QJ6kwr54eQukBhLGTv71D5J9uSRvk8D28Kqc",
  "key5": "Ekf3TKXzXkDiXrHwzH2sLx7bHDeiUxJ22xmk6tbeUgTRCuHPYtrHDFL4cbs6pdfgEkSAvEiZN7oQbyCgH68n88y",
  "key6": "4HwLDLLTpf1U3XLjcd9odHapB8NzYAxsMTU2jnJjUikDMCzC8QsmVS65qSkaTCEQBMAJzYTdL2ztgxzEMSEzbRwF",
  "key7": "5v7t4qbzVmuD6kHZCDmnS5CH6DikkoQFrviJiCEHVhwmajHJ1AgVtbF3VMJDbKUjRKjJ2oAUtawpycVviTReZ9DC",
  "key8": "3R2BQPgf9X8PP8BE4kyy7xPtg6VGt2wFfi9GbXzR5T8M3pprrDE7zXyJfp2TRtTWwrBLjy1Mpo5YtCPfkcS5GV3n",
  "key9": "5RvjZJDhvwBH6z5guqkWdAxeKSfTPj5zEwqvgEQpxcVe1ReWH988iZYM2ykcVEHMBAFB9a8wFcQEK55FdR8z97eT",
  "key10": "5yFJnDGYDWPK9jh1hiJ64vsoHWQUarVySVR7WKMWwSaUjiQ1YzSHR68kZkhjLjFkRCdSjR4enEZx3Gqd1V1j7ffK",
  "key11": "2SVXjhGRLxN9XDyvDJADYvZE8CDzhp6byppQFkguWetnHd3Yi7r6czppXFRk3anhzGn6e9DEA7VtjKjBzRDj8mv1",
  "key12": "k8izwq5L4BaXZjSdFWoU34Do6TAcyoK9c2DUJQeq2VevPTQrDaP8NiSkQAroqSavAf6qE2cYcXGhoMLD1fiZABo",
  "key13": "5QFhb7inbX9KBDtUdaG9DHJ2EP3y5ULKZfg8VdZxprr82dChw2De7jwR7SyTviFXf8m5kf9esuqoMamjZK68c4RV",
  "key14": "3LLUSctcZqbvsR9aQtwBLZVyGgCPwE31dirMrEk5AjmSL2KJbdKc6Qv9Lni1p5Aov4U5oeCoi52SNSuXHr7xYDMN",
  "key15": "2n99ZuCZxowvtWcHgi7wtvHwMauJLyeBw6cdhkc4RBoBmp79S8gC6mFvYhpz968ewtBhwECg7V3dpRy3Mbq2Kyhr",
  "key16": "uMQZFetCYQFNEAhkMA2PL81tMkBNRmcw2XeeWiZso5wNQxk3yRsTDw1W4SvwVrRaocVYpV8yaQhWaqcouvVN6Qy",
  "key17": "5Byc9BwfqHJWgCwgNRV9w4ePnUWYZxRix7soym24acJCRyvRUgQtrodbyjTqKQQMVptt7Txomu3b1WLnLApDxzcX",
  "key18": "59GdSRBeeckqh3EQwVb8AHBi3CVtgadsa57wuzRpbh8N4JxEKwVXAoW3mBJzw8S31tgvyodGZNmuNrAVBmGBpyvP",
  "key19": "56Yiz8cQdCMLJKAJBX7HMBMrZi9ZUj5gB9XD3Nw66RExZ7ckMziDTm2LP251aa4gnYQdKitFfkJQZqXyn9dDy6cj",
  "key20": "52ZJhz1st3ZrMCYvuint81BJ1rX8stiT7fC1NkbceHahDdvwX8Yar3GtgvjV5K6ppNWMXB9hJ5y5wiE6wGykCW1y",
  "key21": "2h9x2cbqa5G5uWFULahjwfQWuZAySmGsAodxUEhqxbwBp4HfQBbZ7pjAFdFEQrGfgCxn9oKdKPhn33J3ttHWp8nY",
  "key22": "2cT7CuhHGGyhSQfgbQ8BCcUxKeWjQe1u5rEf3SBckkPrtAMkNKYE8QgKRj5uqQKrxq3txetjFZ6aRn4meBVHFijp",
  "key23": "XzmLsRn6KCoNwh6Q6RoMK155Lw4DkPzqNND2jyshS8Dc8Be1rENPkk5EPAZd3YKUWWVhCoTpw5qyFbKoDT45NSx",
  "key24": "46XArnELaPzpyQFW5rWGySd2bmAuDBPvEzUChAEo4JVnNERfXXnZQrEHW1vfR5krz6LMtBX2NRidQfNwqcLb61cM",
  "key25": "2jJv8r4Y1RzT2YDxK1ePHU6CNDdoha2XxZ9bu5zAKif1PNbrcsLkw2oFG738pdk8v23SyWSR1ZgbLgBpaw9hAdSJ",
  "key26": "5eg3RRrhLHiNZXsXH3pHHNUDGa7as4EKDiDZKp3wMPCcFz3rk8KdUfcEmGG6SNDqzgTUwWQ8RfGCgWgwFJuVoN7V",
  "key27": "2f1GZk5TRWEbZFKwvmDa2cWbp9Kt8By9amokxFcNo6qNXyDAYVW9Np6Jp1LmkM3MX37LxQuJgVcJPnF1JazAjbND"
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
