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
    "2Rgt4CPBVDqpythmwX9vJbsQECiaXtadXbDk5HWrZfSk5LC15PKfd6nAiwVqYQsKDnbHmCTnxxsJcaXN7FR3vycN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sETCovMMYbp9LtEEATNo8qqv5P2wydcBdH5xT6MiMC9HJXsufciVH2NLfS8QcSTA9UfqjZTNXPV9C5tsirNsqcX",
  "key1": "5i3SRBMb9UAkFhKbSfuDiZnMuo7gzg2P1oRcg7NMTNgciVus3rLyRD39xpoLgJuDZPHvjx4vaiDa5HsG2EGzeZJF",
  "key2": "4iPBUGn2m3GpYn8zaquEGTuuUMfbK2sTjSZF1zYXWJvNS9p64yvKZoedGwtNqkvoGTNxiipXC85P2vTbWQzXv91Z",
  "key3": "23rZie2Zaruns94BgxY4vLZgVBq1Gky8yeogzX4SnXjhxuUVCK25sFeFgKFbNhGv9cfcKMqtJZenKYfV5xrNogku",
  "key4": "5Aypz9eQWVAj8zFS4PAuGmBTdQWEVY1RSRM3XvvfeHzsJsYNTr9vxHxc8Gmg3f138kdq2wEqckE4MML3USLXLtYE",
  "key5": "45NQFT8tbLrX4SNUrDLm2MBXMN39bQ5fKEvGaz44nB2FEZkZ51GrYAH1BrATejTmjHYBMtPKc7wr4p16EAV3i7mi",
  "key6": "2v8r9q2c5ir55ZzTjM2HLZfJmdp5cK4xRcV6V8657R3VY7sp5K3GyiasSQYi1LnEP9mBNB2PDLrDJn2YjxCYSqCG",
  "key7": "2kqShxtf4tg8nAvQuq6mm5LcHcimwsWzYV5G2s2LKS9dMDykZx6waCL8gMpyLs7kgCsN95HZyawq2mJfA8Pgysst",
  "key8": "2a2BzckzPNeZeeLyX2mJm3vcspXfNFAdjNapG1CE3LwQk5T4joQMUYoVy3ZFdjC834vdXs7nh8UbhgaPW9Wxm5oT",
  "key9": "4xtYziYNzCjyYnn8vxDAY8WfCRpHMnEDanXu394gTVtTYmhqBSPWwZQGEuzDyKym8E3CkuL1DDwtzXoNK4TkzJSm",
  "key10": "44GMbDcHTSt86t3QnQU2gwd4KvoFnF7uQyBTikFd7QBAvHjZSa5r6FZdZM4Ry2sVyA6bAUBBwwwoj38S3VWcTxtj",
  "key11": "uykmDEXygTYTxXRicGv4zNJZYyybeVa2f6d6ZvYRktEywV9wFVKqh4Jv6WYzBe6GXi4uLpvbdW3mcAPw1Mzyh9v",
  "key12": "Ew4AiAjtJWP8Bp6jLs2DFqhAtxkFM7nGhWR2rmGrwkMD7URYhYcVA1tm9UA9ppSwPZSUZt5auyWHd6RwLBizMP9",
  "key13": "455wVYHL4Hiwcr8kSgMDVEhwD2GxZjbonUeua7ZksUJNjdkCDFFTofirmt37MPESUu981Hnkv1w3MZ4dHtoKE7Fx",
  "key14": "5ia1ZuPKHhSQUxPJfBiouh57JwsuNhuJrzMC5Hov8JX8R3QQ34LDH7awrpvmjvqmZcAgjrRyWCuzWWohXJ3JmoT9",
  "key15": "2rbrnnk4MFnzxTUxo3FMytSYVz3fx8ASa8Fy8RABLvaUpumFooafRh8k3AMTWDt6x3pQGUwBbNa5bQxirBUcNUGd",
  "key16": "4jrWLAfGhS8i6J1tp7beq9Hm9PRxc9PZMQPGhCitSeU9KAAn3MAwmeZtJ86gpQ6saE425tnXxfByGxta8EpAPKU3",
  "key17": "HHr46TpWNzJNBHYNh6CY3vxfvZm5maMLQ8uensLRYTm7uhFaXfxgUYxdQJofBV4LZacMa7XcYW7HGpGvrGAjxsh",
  "key18": "47p1a61khMW8ENg9Mud4JbEU2QJfFuG96XjtrunZojj9L7hrgkDRQx3Gfi7DcyFgABTxpsnUMuvQnFkYzf19NWH6",
  "key19": "3emLFZVYqTa9ywoDcg4Y4mcp7mCFYCMsrYiBkfBX5h13B646C7iYvZbmuJEVfdKKXu6rZeh7kmtxTdB7WEZfZMJa",
  "key20": "2zUQitSseoE6VUo65f1uG59aWA3nsBPZzt8FHSyFzA6cpHG7ByLnnWaSjcGLfyn7ysDArrevkKtxPuKhD8zL1qXu",
  "key21": "2VPNHeYMmBH2EyD489peshCR3obpkyyfrwCiQ3RoNNXbdmwdavQJYWoqbypHWEhgiQr5rjxEUvHCqyD6y62tyKPG",
  "key22": "2RxP6nmTFwzFFQVjg4SKnc4Kya6aZRomBo89DbYZKg9ZYQy4XFVy2VHuQ5aGSGyVH4tQT74FHG86mWvxwQ2Topbw",
  "key23": "5FeAJX3rwbMEofA2Q7Z3dCGE2f5Yt9bVnqo2Y8NBWAhrwPy2Atj1PAWtkdkDnntC6kjcyhhMaDBTTsH5e8W2Zw1H",
  "key24": "dmVN6W9iWV6D4K4fYCYrN94W9TWACYVcwgaWA3HX23dBnFwhzoh8ZJgk4i4tmPGEqq3fyKaKoGvXsPcznWwS3iS",
  "key25": "EdqhKjURzMcrsihHEd3fUaXxqHmvQ3GB6BDJ9QPTiojezyohLhVoTfCpbBmiqoSp7cVwJhTaH1tq2bEqxLi5uDY",
  "key26": "4sUZLPBp8vYMeV9fiowo4RMYPkVMZ5NwQUyphntSLpbvDM7g4YNPb6nznSZ64NJGFd2dPg9S8qb8UyVT6G11Nc4x"
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
