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
    "5J2LpdvgBDEM6L1eKNcynQPhiHr8vTGdBjf4igYgR5NZTMn5KHhvrij4idvjYAKiw763Tyj2718zc6ZB5BrjPpuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2mxYf42g8kQUsAMdaXtc3Sk319b6oxmmjr53iyQMjEoGT57aowEDY5E2fk9wvhexuPQpX9363aPTg7ChYoWmxb",
  "key1": "nauQrti5vuvFiBVMybd1MJPaTWPspYm79E59jZwNBgxn4QXe9z4HJeg2oTz3fSRNwzFthkuCiS6HhjHBp7KZfnp",
  "key2": "3jqQEqMVekP6xwM298VGR8uoLrZTgMorNQeAEvuzs1SRPeohiSPbb7AZqB9q5Qi1a7zeC84eHmB6VHpCGWWUboca",
  "key3": "49U4cA1eYsRNP7FHJaQUP2NtKq5hirdKDQVeS1NbcUW5zVKakKfpzHcLjGLTuUZ93vwNqUvNLSwEZYvPa8iF7Zz9",
  "key4": "2D298YeYGM6SVGC1NMekHBGrtg3mqquBh3TmwvMp9bp5ecrznWXDo6qmYRCQkDABYgtcPmZFe6wQdFb6fDjbbV5",
  "key5": "4S3JTxsRgRzBzCpr6o364Ha8YjuLpUVd5jR3cahS8r9oUwGEYUg4W2hiRh8eggfU8WFp5hCkVwJgLYmDKnyc7gpR",
  "key6": "3Y27Cc2PBdnZC7J6U2jXbN17bHzL5MkmgaSyYqawPqz5rfwUc6M2sugYx9nATyYdd3cE247USJmTGoVjqDkNE4Gt",
  "key7": "481Tw5TDGFvuWxYZhPdrx2NMdWcXQ3kqJ9Y3QUPLPk2Q9iamxPuM7VibP2N5nbdhUhVkkW3tRZdVmj4xCv53Lgut",
  "key8": "2jhvoU5h4jL6sdX462UJ5tC8jJ2Mc1hUBaeKMCfjqNXbk811gVtbERBnCKp58kGn5vReHweXG6VhUfD1cw4u2XCq",
  "key9": "2XjfPzGJK66qfgBVm77sxzzfLjBg5Zeod3WvL5P8HMFuBLFGYRtD7gtFLf5ZGmT7q3goaf1iDbUPBd9bTKV8TsG6",
  "key10": "26qnmTix5oFfGRmPzbqFv2V2HsmG76EomJ4KgaBjf89DbXcnxZRTD2ye1DGYf5PoDYZ71huwepF2ieMaL5ezdLsQ",
  "key11": "27UnVk3tgZK1Su4FD4XZipRu1yjpFJcaVyJmJkbSMAUQuST5feCr9PuAz6QsWhzyfYVXH9RGGhvdXfwMgEp5WrEt",
  "key12": "5gzbgMs1MrRN4rGSpmpP1UeqLemevwueP87sFAroBiCpdnhtpsKcim9cRubTuWAtD9QLBeFAH4RJA2njX6CygEfE",
  "key13": "4ww3KQJBwaYc1YQQf2jfbQqzB7TQuqLPWzTeYQsdbAGnqMptCT9xoHxyLQQcD7FFzuXMuGJYwQF12fUaSn7SFHGS",
  "key14": "EvhRqkJPo2FwkjtB973M9pKyWv2KuWuR7VpLUvMrNA7JSwaegzGyLCYcm7SjJKGSckKm4yWUC1aNr6CFfHwe9MH",
  "key15": "3FqoQHx7TaNQCYVicU1DYCoJNBq8XX8t89YyDccMfV1CA3XDrU8r9cBFtcJqZHtyAc6QaebTStWMnxgRcU6zmJLR",
  "key16": "3PESn6WwkFDZ64DZr5tPZN4othPCBfBV4MerbUQHTabgPsXU9jLvqLzEtvkgSTahBYs7Nfge2ymppNU58GFyemor",
  "key17": "4q73eBEv5hisKfLfxW8C8MzmuC9v3EVZLW8zrFF53oTKELLVgqgvhJQXgLLXcMxzN4DagGNyayYpWAfNsS6FL4BN",
  "key18": "2wA7aTmwmxSeBvUKb2Ej6qHa73kTFsubQprXRrcWY4qnRRDPFGQwa63HPA7HZ64MY3gLsiwpZRkDR8SpA8dbSyg2",
  "key19": "4ji6eT7G5LWSqe8YuynNvgmwDksunEcpgpospam3ciAspuVDpbkEcYZPqPhdMH9CFSAbDjLTXR3nmo29pxbNCFF9",
  "key20": "SnikhYo2ky1ZQi3AwVjhz8EaeN8vSb78QhsmqKdAactysCTok8EhLisUomhgosPBnFasWT7i9QanYxW3ezn6puS",
  "key21": "3iYYoT2tnQ8RJG6noW1EYAkaRnNSLEy1CxS68VGs2dgqJh5eBJh5LszVfyrdkVMzTAdNEtGjA6x1w5zdsSgcwo4q",
  "key22": "2pTFnV3eqrf38pBx7Xf6eCx9Vx9mYvoG2doBAcYemmFD1PgeHZjfYryx8gSAXiuKGbsgEgYHyJ9KvYYgTSVDcjF",
  "key23": "3iedo3jA8qQ5UdLA7RtAoYsWrGWwV1MNky26TjJzFDKrYCr22EhYHcZjoyWMARNvasPN8PJ1jKibFYHHJQiEGF2C",
  "key24": "45FFnavBGTQXCcpojj3onkXQ8skaphTtGmtddwkfRqCgKJUCB26QFtERqhqM1sgT8WG1MgJWJ1SFEgXanLbGXc45",
  "key25": "5qm1iwMxvVSdDpqxtR5CkJLRqPWTzbWqcPVuECikNdPWBmhwJWkjPcAF2nrvVVgexpf2cuXtJVjq2oASPX12uoHg",
  "key26": "4Mv95J2fmWyh2TLZVikszb7fFpUY696vNEQNU4vo6uLAauG6s225fAfPmQhZi3cX6RuquYSoq9LTDCUqkc6J8eyi",
  "key27": "4MCdZWfuZPtNm2qF4GyvuLThdEzspiQhnouG85TbA3rnikFt1CvWjva92LFNJKYaGUASBiuux3ec8yDrQhgWFK47"
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
