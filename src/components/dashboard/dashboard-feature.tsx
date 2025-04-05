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
    "46u89nFt9uBzCv5WwPfMFVdzyD9CzQyxKnvQPYnd4z3nFoWTPTgvs2c1wyq5zzRRiptVqFvD94v2MnPnStL565B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJcD2iJGP5XJpvAdNCqstnVYC7DP8xRnUdzYQWB6fx74HLbhU3sAfd8sWrJiVAbTgaH98bo6kPwokiZFM7mCMuQ",
  "key1": "5f9iTxrBESm5V4ixAqJEF6mXQD2beWZQaU4obTYKi9bBRUwJbhZUbrh6L8qsFv8PhJhZwwraRJD2zg8NDF8NTWBY",
  "key2": "43vVmj6ZKse1MVUF1VapC5a1Z4BgwY4MKPTz3ysBYremuy8GxWFqs45NJAUawoN6RzDhkhn6wCiXmcGXuy6SN1MD",
  "key3": "4tTXVdX2ALPghSJeUDXrjXQfCyqjKnXkiVv3NQGHYe2Za8We3TPHcaaZzuYXE6uETUoExyRJmb4PmsWp46NsUY73",
  "key4": "67jhEnjxEmwBWjmN8re1PGuwGJ5KfZVNkVvP5GLe8Yz2nWNAt345yBdVFCJX5iwmfe8AVd6fdrKT4JDVQEQWwopW",
  "key5": "BtJz2DRkFoPba5GGwWEQJ2ZEB1v6eQFBqFspsNFD3sE57LZDnaFzGD1NjDjLcbyj9rj8LPMn4TaqoXVDobh8RQv",
  "key6": "5dYEGMLVLg46cisDKuL7CAgeCbgvESdB2U5upFc9ahuD3rN4Vp2uhwEPmauXm1isod2D68bmkCCAY7fN52GUNd6M",
  "key7": "2rsLcNGepQVEYk2Lyu4k1rYwtd1zgimFeKX5maK9TdSBJf64z9Kv68LC7mumHNcmMNZXMBMVAGPYPK1jPPMjdmWm",
  "key8": "5Sqr7qf4b9THDkUisWCWK6dHHbKypSDMtobW2KpvnfbNudvrp4Z8ae4KsvQduSodqK1PBeRHfYHPYHhrW9GRAzkW",
  "key9": "437aZybrh9hLTmUs3XrJUy9bNxgoqiHhfyZftQFWmygXodKQyhY2E6RDpn7ZDm4XMHaQimCZsW5dFAmMibcgFd5t",
  "key10": "5pNerVPenJG688Kj6xT3vu7RRktjxxyLYRR6LW6bHdzF2LBEbBg5XLmyoPqn4dmiDCmUFbQkGvzRjQCnjqZVZLK5",
  "key11": "5yAtVyxLkGkDW9v2uofuoUbvdTDepaGgmyLu1DQUhSDoLGFigBQAjB7cB5FUBbpoid7Gv6t2KwWhbVz3NDhkMNWC",
  "key12": "43CyZjWyfg22Pvu3wpYExV5EknFbapi6RiCdsjdoBT2EYLQQ2c2KGDsrciEvogVFno272wrCkvmT8G1BAuNP778o",
  "key13": "3ZSuM8PhpFqJ93Led4iP5Nw8TnZzteGFB5RcK55vrNqPQMJG48TbCAYXFzyYYqVUkts56UMpVwgwaurpTQtxeRYP",
  "key14": "2eZv8Ey1brgQu6Md2YC8Kt9uvRq1G8RmpELFaMzZ83bbbYDEocGfEf6ZWjgpHj7bFtPMgL6NswFmNTuTwAUx5UjZ",
  "key15": "2wp8MLRqRfeUPjitdBf7wKdYx8XB2Jks2Hy7DZ8KoMKWAFvyPFnTs5bPhPRgxhqiVCd8CrFBjM26K3NvEgGCHhP7",
  "key16": "49txRcB4AajLrXkzwi2twsnDq287jijAeNPFkGhfBkDjhxxjX8MqZfyN56LhGcLkFbBC2Fob2wj9CHXfu3qoEgTA",
  "key17": "v7QN6wPxakjHq9WqifP9e7if91oFM4kVZ1aKmSGpWFHFrajz2LAeszotAuAeVvmWxNDRU2zrzhQsmh1QBDJLuoT",
  "key18": "SpUtAnzZyZPqouBxmFsCZeLBRotAC6Y2ad4VBZBpX38iGeK3h9EApVvj9XbsUMGcG5KKMxUS6EfPoxvVYG5Mye6",
  "key19": "4GJF7xS9eknGZ1XHHB4apc4c5y4qLdLqYZyAD5quphq2pf2yG8pMC6fnoyU5Hi79tTNibNHDArf9YNRMBYCEoT41",
  "key20": "xMnndRF8BTeeg6RvNaKdNAytnFn673EaSUncgzsG3YFq8zSNndRGekZVjt9WvLsfHNkmQRbuoDBnBQxJxFUp3NV",
  "key21": "4Gtn1eE3daMuHbkyJokBpLw8oKTBRkaC2M3FtJ5LnAtjhB4GJW9DWHgwkQTiqwiX6dKVcermVEcRAZK7VxmeKLCu",
  "key22": "Nb66SQXkkwMBtzpxtEV6UQTDpUUMvY9WyJrGMWYRTcrrRJgEPB1MNbzMy7N7z9HFGfy3bDj8JnKNaxbA6E4GN7d",
  "key23": "4tVQipNBnNPyyiFtLQCL1YD1dULKWVhEySUpMfEKuhuwi23XcPfreN2pUGZum9YQ7TcTVPdGtX2csxVs4M8FjpEZ",
  "key24": "3PLwDFSYy2ykwBvBMRLSSbnEFEDwXg5Z22hzLQij2LSh8Qk8v7PNu7pKgsJmVm8FPAxsPBswcAkmyeFiv9eq8w49",
  "key25": "NynZ2N7a2Zh9DxzN6VTk31amaCh9R2DxmzhxEw4ESY22AvoGLyjQND63B8r64jkQxD495iRnGPbTcpPz89mQwPc",
  "key26": "3C9hithxkMSPuxMwzjDohMJExwysU9pss9eVhbS3ysVir1nnmUaLSBsi7dXswTG3BQx9YRUrhinjz3McikSa5FBT",
  "key27": "5d1ZtuhW9KMh3twGjV98GiXr82fDqT1ybvUezfTzS6tHiwHETvUWCoFxwx675aZniUTuwpEE3KWeSb9DyYy1eEJW",
  "key28": "4Yko6PvvMoxP4d7ZorFv5CDC6GsuY92DD52heZDXZqtWyjPZCwqKbwSBkzdYb1ngztDQz46BA7AbAVEu2MqXG9fK",
  "key29": "2pPjAueddMyNUvG7k1t46RLDZXCoDoJ1B52SXk17go5vVj94XHMM4xGgYwpi9Y7ZKw3G2GqFdLBzr1Ua3ApUoT8X",
  "key30": "3cYFLson8s2Z8ZSmcRFpsmFumisUYCg6A6hLX3eWyCXYA93bRy4wng3NPvzoJeW28pAgt4WXNfkvG1uk6TVJfyjL",
  "key31": "3fd6Babb8qUiu6gf4hrPUxfETVkscbugCXsi8kKXrhzA97dXAMoMqWBSDgV1316wTRJ4296wNdtGDxjnq1LKbLVY",
  "key32": "4W1ufN11pBVD1Wcq6S7cX2Hcab8LYpuKKMc11V1ywubV9yJnc4Kb4iao2YbUqQZDDtwuLek8HnEe7gpPKDfDjvyv",
  "key33": "3DVCxxwN1cS5AzUu6Z2SudLX9faRfhho7FEdYSLCm56uk6LFDfwrGZePC36L9HQZCUGKAgNzy6KFUis7Ehvf6HwB",
  "key34": "Evjt551BhNrGUimzHg2kj8aTLSMXidUe7sqqX2sdEU77WnRXA9jUacTH63xzRtjCnSmMzhSJc8ef9itRerrSJzN",
  "key35": "s5os1ASbaZhL2zQZHQnDdY8Gew6XRpbDvRCDBhEBamVy1hbWCBWWYswGkq4vMDne6jSdDkzuuiFqZ61zxAuwxUn",
  "key36": "pKHSmEZJ9yvBfTdLstLhe4am9jUViXfSexJe42S2RLHUMykWnniVEsLMEaG2yh36Jjkhic6Z52UhDQJYK14gxq2",
  "key37": "5GRxQeK5BHiNK7QgqCgyxR1oio9KhMY95XgYjb1EtXeboXkjqZ39aRSY3YhDHAgXYwNBD9qWirCCZxAhFgQHhgbM",
  "key38": "3u2KAwMZwKJSNxxJmf4vZSxsa6SLgwqX5BHvFYqjtpf21AXWESXqkHCzYbNg6Lb8sCCUxMzkMr1JaE5JZBx1XNS2",
  "key39": "oYGTMh4M1VNFydzNonuxJWxwc2gCar3A68oYoXSaiC41BSvjZTG9RMeqWFJAVrNLDQcTTjFFuxTLZ3ekzxwSN7g",
  "key40": "qW7mF8BMWdohPTp1tJorM6YJCA68e9MPXpSVASH6gZG7QezoibAZFjjgPvbh5rLo6ACRJd24tG73ydx4wrNuGp2",
  "key41": "B79bWk8i7kjVK8AnaBBbK63P63D7WXvkkkKPs5s78HsTn2gQ6pnCtHdy8zJx6U9ZdktUQ5BSZVNzHqHVREtzjN7",
  "key42": "qzVqo8PS6zTeFoxvz1WmjACxBff6gqrpxhgfkS7iJtkCzLvCdx4WQyVbGRDDzFoN1K7Vw9Jb5mHqU3mFaKqe1aa",
  "key43": "4NR7X7LqvXQeUApRz4Ywo64NSD3tNKY398eRNfYGeNk7DYYiLSVKDc2DbvLXQRVE4Pg6DnTgAELJp6Fq6gaaaYiB",
  "key44": "59ziPpthJBpArZwX4m91rehoES2NZqrTTwbixzMBwvNZgbU87eGVpJUYkp6tdxaD9gELxQk2bpXvZuFWSS5DMtrJ",
  "key45": "3HfesxNLmGHW8PxVDkuaZLRAgRARHsTTfsG9NdwTPLFbwjepR9pMCmBPkfUcABuHwPx6WPHHzZ9swEPBTF23Emb4",
  "key46": "54CvvDPiRcRQA5YXk6XYud8US3UsPCaCPHPG5LDCXdRkogkSovU3SjauGgo29itni3CP2UgRLba7bXvt9Yqv9ASC",
  "key47": "3GEHBmW4Uy4y7hhfQuEMEfJNufL5wfCk1FDEDiCTHrRgaR3LBp9CLV49cZ6Zr6iYG6xQJhhh4Wx6Ty3q4mUYVzR7",
  "key48": "4P8Wh9SLXkRKcw5pCgaJwM1t2vhH8mgeneSvJFDPeancYNbuHp9umbkVyeFRz7VLsxVxeWfW69MEZtu25misUtUB",
  "key49": "3bnM2DYazxo1qhjwgj3RgwuZ5ZSimijPQBiyNH1ZHT3cPFCdj7jvaciUTsw5zkX5vReRX3T5eo8FsWWrNX7pT4pK"
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
