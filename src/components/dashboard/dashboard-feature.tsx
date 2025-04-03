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
    "3P9e6pjQLgGejSzGLuU1NpunxNbxK4cu2PBcMarhdLVBi4nHj8iX2UdDKKR95WwdNqGZSRcyLV9DZjwXohBxB3Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyT2L57btSqZhUadkdFXSCenaz9dhAEZ2JtfXeVMZz9ZZpY91br6zPcPWLsmgVNntT4nrTgakz6VqZNZxJbZZQc",
  "key1": "3KdbvFTnBy97BRVuFMJwT8LCdfNWXuox3NDTHwgYP6CydpwtmL1YJ5AdZ82XtsBAgYLn89TJzLj9e9udHSjcf1MW",
  "key2": "26w5sopKY1Da9M7aN1T9d9CVqGzEoerkdK5pu1YrjrCaGgLu2YccCQjuaSJKdaH28NKWUsidxQZ7z3HrkPSEyreE",
  "key3": "4vzVkogHCntduhFB3jYENpxCQB7aw8kWzhPqsLAGMJbBEyJYPhCXNvtZqdN6vHtP7xK3cgFioyZkhLm27vWGVtx4",
  "key4": "ZSFpv5wYmzJLaKyr7eiivkK2SmrKZEXgcpt5EDrLJSa5d8UYYUuet6pnyCDMbVGzWWCavUEBYyjzXvwitxDaAfT",
  "key5": "3rH9z7UwQh36RgaB1UmuCQPwuLXD4iywvFFvPk35UdYRxR1jPk8je6c36FiqffPqWLzMfrNofvrjCnd3X5hUVFpY",
  "key6": "3ePdH68AmM77uD24K6m9zAshyPsuaVgdS2SDm7iB48BCJuhJzXiScuaa4fARYGy4FiXQQEvMpPLRsVRuREoDuAJa",
  "key7": "5uM2pPruWAh1MZejipbPpdjGufXtxGZUv2iLPzubgE61FTExkgHPx5UQbEnhAgdEBFfJyLtf4UfoKeSYmjvehbTk",
  "key8": "49fTF5gWAxRN9NqzWrS3iu2NKrq8PAK6rgy9hELtYPn7dAWFiEMeNhRFxw6ZvXqk1winbTfqbMBPfxkiU7kd9VDq",
  "key9": "3RyfrTXwo7hHp5o77YpKFWW1iQYeAz69Vmu8yD38QFqSR8cnRWuvwfzANC6T8KqnSJBGDsCDhMzA32Sbtud61R3a",
  "key10": "334Bg8ha8wrC9YkTC8cJ1TyCwMRwuko1SmBjJiSF3j2KexMDdQKpkVmw45fNErDff7FaZRxBjzzTZpb8PgKd1dFP",
  "key11": "3MatZW3eaMmbHnKLy7vGpmPriC7jM1dCzSzQZd6DgWtXAfXZRBekeQJR5j6BLetVmfRqacLazMWb4uVQSxri4xV2",
  "key12": "3ePRBtjRPmNCL2WVzXiyzoDfK4uniLti5tDerEb1rUsZ1wkQBkngMtUqS15DG1EhvAgc6XsXNiXmyjdHUJmzAC9G",
  "key13": "3rLZYUar2v5hRZDwM2F82bLXvWfAKtixrKsrWFJLATG7qEnVGGnzR9P37HiMXtvVVAUXKJ52vNbG6eDbd8Dp9ik2",
  "key14": "4uvu4WVru2YTkmLv1ff3FM7EN4P7LpqACwR1sNP9pGNZnH4aes1L9rpYk72APzxM7zJUhE6RyE9TRF6DV3aPAK41",
  "key15": "4nmuV5VHmSPXMS8dg4Nb5EXhgvwPem8JK2H45dTrjQZSeMvN7aj166ra47oWaxFFPkSUdEUHsTvuNMhJyg2rLBFM",
  "key16": "3f5LJfvuNZ8Xu1KcFQ6RZ3pZvNtjZpCh6UpbH1dondaM59C9W3ZEnxjXkEmqN6LwGVTdB3eysFiQrsb713iGC4VA",
  "key17": "uDZwzZYJyJQyH86hN2eGfNeyFdfT1xJM24EgEFXKq3yZMG4nnzh7umUjfYBkwWy1w2tuWp3q5pTZ2FzU5erX6a3",
  "key18": "MGAFp6YSa4HwigW68o7tQ4uGsaNkSe5uGGi9SZG7sQnd9b686nfkeTkiEEUZdbJLCfBF8D56FTEZhd8wXappKgp",
  "key19": "4wSdCeJgmhmsEmT2zTgwjQvz2SUmvww7B4mVrmgWLKEskf6wQeUuhJ1QhjV171WR9kPvpPtj8TDEcrdj5FpDE2Xq",
  "key20": "25e41ZAZMZqx4RZBjZ4UGeREAKcb2owvuuryhKx2gvY6uwLezFCyXP4zgZtrr8Za45LAgnpyVbqthuKARfmXkzyz",
  "key21": "CfxJ3zzRKLMCvceTr1MSV4wNNSgp2y66Mrs8Mzzmo9mm3GY9NaCqjFZRMoeD8E5kueMjZPCEFMirVvMTAq7BQoG",
  "key22": "5BbaVEceA2bvSqMxsQvtVQDmQxW98UCXDAEvQ4dx4aZ3NEZFrsjBgXqU8Ef5QUsJ6QVcRn1dod9MVkdykoV1tjmy",
  "key23": "3yzLtFUmesrBv2DZcJwFwcrGeUGe859YEHnPiBgUcDuR95RzX7tggmwTdXKbCEi4q3rRhoDXxf2NiNJ1boL9qJ33",
  "key24": "5LcLy9vGNsvqpB9dpE96FVQnfh9vJbQx6ZzeSGtH14hfaxet494sqfVhofgc2AedLDdTgveYQj6iFr8Ww9Cw4TCH",
  "key25": "4v9QDMNjoKb8KCCVNYLTwCGfMZw34QcapFWXmRdGJ3nJHXNUijKEeK5Hy2UjBr6TGfSDX1gce15iHJ3TJ2J8bZVg",
  "key26": "GnaH1xMkQPNHgsJcCRodiPpXCSL8XpvKuqM3Y8aCji1pSp91bJf9LQdSF1r2xrf9WwHkXB11TTUjfvwMsNnvBQj",
  "key27": "4hCEKFVPF7ftGGMbJrqiMmBwzKwouawyiFfjReq6hMe1u2YPthJssHXhUh5MpVQbypPJXp8Y32UmqL9kD7yAVAqX",
  "key28": "4jWvzNG5Rv5pWLi1Uo2cD7m3cuJpbqC1zxUHN5Zk4HpXv7M1RuPLxdBXn5HSAB5gSLzZEvLxC4dprtVpUmLuy1Yk"
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
