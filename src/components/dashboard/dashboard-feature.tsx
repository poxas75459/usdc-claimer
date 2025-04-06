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
    "4gLphy3kwE6MzswjbV4NEpncAZEMRB5cHNZNKdMgEADa4AD6v17K11tVFigLoY7SJzu8yVRH6NWLA3zjRiYHxSBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ct3NX6tfgPenupPAiUA6oDKhoVvM2AZqyJHpS96756fT39DNAymQ7GMiXmvLWLbvPVEGxZCA6EHrtnFnUTWGu9p",
  "key1": "3KbE1fKLPDQAgqQSTiBVyJpZ5GfNicarK6TYun4on6wwqV281xFJkUQNQhGymwjwwf9LsyEZrhCHXdLDudMUHdft",
  "key2": "2Ws3mZeM3FRD5svfQC7RR4nLusSGMBqQu1zhXrrxwBFJdVMSr8G3iX3y6csnH7kzn7coeH81tYoBDfYcc8qNeeWM",
  "key3": "4Z5Rscp5qks6FzdzzQNZdBWPvtLath9e2dNyFbFxHr9PHhKCX9UGW4jcHXNhg9ykR3GPTb4pVXz4HPB2d33okAD8",
  "key4": "2zrvazHYUE66SebtrRpYYfZ5rkGrFvWtZnwjbhobRDvzgHiWTF6zpw4XdHwvWgPxnTYxpSoZmcqMTzNmQm7jieCk",
  "key5": "5xb5yGyL3gMAyv3SgyUEdqu2AMYXgh8eLUz7FaK7t82YVnzkukLBWEG2Hfty6woKPnQCbSQPYTZX2MrgezrTUWbg",
  "key6": "4t4ATmksuhd5h9mxAjHWJs4jNU9awxf2V2dSnSqS5bcWQCYysKcdaDhdjWNzk6nNE6R58LrqpSCmJoW7Hgtnv1Vf",
  "key7": "2RM2Sx2w7YbUtE6F7kznbqfHiBMsVsadZGmTtPHbFysJg8wxws7QjBCU5gvF88BhhCpwQ7UVqs3aHZ1geLYw2zK1",
  "key8": "3fRLDTC7rD2GnYYReXK8D4P6PHHcNSQMtiG44Cx8da4cwhQycbFgWXwYKz9W13qndfMNobE1bqrvGLs3eH4EihkR",
  "key9": "G79V32an4GMHnjzYt4vneFY9FWd29CTQRjLq7CShjKLQdajUbB2nbe4XBg6Y83rxXupFTbehUCX3AoWGKswSmLo",
  "key10": "43ZbGWeAY7DrSY2j7mT9WniEipg6xtuAHjsLcN4qiLoFiGq3V4Y3v2LNtLUkZSDfkZonNHgtf3yDXABJq1N8Lt4p",
  "key11": "4RJVXJayJXQAhMfcj3iSt25hUf5o3nftqAixL6t9Ac7LjH6LAbDC1MExAKq52fXkPYvVbvPPqN1FBph1ephgcqnA",
  "key12": "2i561gKNZca5Kkfm7yvEKvadc153k8LS8eZgrHsZt9V3M7Vo9zKKot7Yb6iPR9LZ1FrspvwfGeBufkRvESmBSjzh",
  "key13": "ma2pQMB4h14rr5ytGuGPoyXqq7Q1CHrCTezx2F4fK18w8NmsxVvdW6iu9jCnBY4DJ8Z5urFLHycFDnjUkJPbJhZ",
  "key14": "nDmX54jkwbsWZNqe5UugiYWUevXepGEVJd1ymLj9BMt9VbAfE4GiPoD4Kb73LAithdGU5M8qWqbhsXMbrWPDQUv",
  "key15": "37uuFbDQKTBFv2F7x7AaZ9qLLVK1ryPu1ULmsQyMgQaDAaj6b9JXoeND7WALdYzaZ5rFurLT1PiMKrYGfATdRsKd",
  "key16": "4uAd5E1NXNrsA6teQwRjPojhuhkGsdSLCHz4d1Hd6XxCmy16JG7VUKS6pNCSVzuWmDUkU8nEyZQL1u9tiBBMmW7U",
  "key17": "4tj9E6apY3pDT4k8cEvgZLZUAZ6LceMc57F5g6AdaWHiR9dKap2ktdwx45HiYfuzo6cqrBmafQ1PEKF1uJUugJz9",
  "key18": "43LNunZiKgzc11akyTKQjxtXc9mc2nxKoE78MKWHMRinh8Dnnwq212AtAPkpnxWxDWaB5zoemvR8fDPHrgmAMuR2",
  "key19": "p5LfpbqskvHohppsMox9wPLtXm32s9Q2LvnwThQ5wAwB6n669S3dJGnofudXW6KRws6RBeWYGNashrjCFaChYRx",
  "key20": "Xbw7m8NyZUwwYpQbDxToKQacjeyj58Dm46cDqYYDcuiuk9PmpsPjwvrFaQwjTrUHmvtd9NHA9cbXBsnZYjre7c1",
  "key21": "i7gh7isLzr6g2PSQ4LAx6UqcZ6nKuvDAK35DpN45FBkX1cw1iB2rHdMkoNp1e8mbnfcGbcp3yAPv4J4aS69kQRC",
  "key22": "2wz2CYmitRuyhxEY4Hg2BTzJJAGR3msNVvEZX4JRt1e6MB6KXvW823XCE2ia3SHh7dDkgkKfVqKdfPFL1r4cXXhS",
  "key23": "42dtAgR6ZqECzC7EHt8ASsoW1shcsbo2yk9gcwY56ahzfcGPigcNtVJkPzDGog9wU3aFk6zjvahDsi9wxZrNhekc",
  "key24": "2EZjaCRJZf7Hm7e1keQBggC6fqvWDMeMCdYvMo3XAHnif7fRNk7C5ESDA4jihS4Ua5EvBx9ms7ujGxT25KkRN9zB",
  "key25": "P61YFZYhSc379uv4SuUtFofToqikMePgEjEW4rNf4AvW75wausNzU8mKz7XcHFb2VPtwW2ne9V79EBNnz4zPDsX",
  "key26": "3TjbJzFhbU26aRKvwQrdgTZKEqjpnH6mggkvRr1eQVufofyB2Tig2qXzmsGvWgdE6XNLsaqpYbTZsvdq1Na3M4wh",
  "key27": "4xAc2cM1dk6w1F7RQfrcTeowPycLyJNB26mvFgFvb4yWJS6DRbUFGMD33CdUVSecBm6RhhFyxeXkfhg8gUaKPtSf",
  "key28": "38YTPaprtyjz8oMSjFoGDAhwtbSLAAwqxjfhLiF3oLdAqhRVk6doNEbhwuVbcBSrVyZ4pE6hCAje7jYAEVRr2cEo",
  "key29": "5QZp2bpMd181eAzeJa8ZiXjc6rYNcKSY1eGd6ySJCGPkUjrg4i2xuPAVduKbfv2P6G32zHpVPaR5nZXGoYe9Aes2",
  "key30": "3jiJsMnXZ9eoJN2j9G6EEBd7CHeagKxFpj4hQyzA3heSdhSX4vzg7UaYvT1Dh2VcGxM6fx4tTW8HUG4BQeGGdQnE",
  "key31": "5XgoNsu2NM4eDqF4pHYaQMP9RUps3Bpz3F9FVPuFcCscaxernbufJqwScDZ6UMnRcY4wUcH8h8QKCGw6KBhDaw36",
  "key32": "27Zh1XxwGLf8w6AkFvc5u7RrbCnM2VX64nFZEV9z3zPQ85B71cdMNvb5E8rCdynvdkod8xuywhfTW5BSFrVu1eSo",
  "key33": "3yocB4dPbkvSvCda3FroqJeHUdFEM5cfD4ub4hPMGVHwJrEaNELnzJwp63yMiahtzMoQKfQJThptxFA9ncrzgDjK",
  "key34": "3wmeNWgYLMr2t1mKguyj6N1Af9cTXqNJTzxMpuMrghjnJbCjZQYvPZkjEaa2ydsZDmtiti55pTuDiPXjLyeKSUJG",
  "key35": "FySn6L2nbk1aiRYZFV22HDzpfuXW8QYtCsCHMutTKNUM7GpWPeiVf1vMJEqzPikwWSDZPEBRk5F9E3WYDzBJq45",
  "key36": "258C7HAdvTkuuc1Y6KovkXcoSojgMA4oicsaVzojGopoRirhc5aUWjePE6RNf28wymL4hH9qojKccoggekdjeYvN",
  "key37": "2p8tPBkjV98q9qecycdSf5gdhGmysF9cP3fFcPkJDnDVFTggKEh5JpjY4bAZkbW3QVpqgmgjSS2oJg1XEiRoWvP4",
  "key38": "635wAS1bv4Qdq3noGVsp8p45vV65ZYLd5nFwmNEfvq78KhvoMqqQc7cDn3ZdonJk5gG9mGkYjdC1U82ECox3qTzG",
  "key39": "2eLxMWcV4fD7hKqJ82zd9x34qNV31mrcfo69nGKQRhBc13HNxD1VBHzKDzsUr52x9U198i55wCTA12fAtD59wJVa",
  "key40": "5khVdqkvz6Jj6vqvEjEz9DovXgzyqMZnqmtkSvajmRBdt6oK3jHcFEWrWr8ubwaQB9CCaqcYkrYhfMjEK9xgojKv",
  "key41": "2zcDJFoZgLXxiybRbEfzUBRSeUCk8PbqHWseQvDsxUGgj5qoTDQ8DBi8zvkoBW15pGpT2Ci8RnFNKi23wZ3nKc3E",
  "key42": "4bUaWXsNVKnH1WeXtkZXVrJAMUNHnSHsLmDw8GbWew4o61fp1ENsu7u3d5AwVnia6qKpk5TdVpJaqWWU5DgYT7U6"
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
