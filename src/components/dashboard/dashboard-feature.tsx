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
    "m593N2c9DEV59ie8zt7BeBeMazBts8tY1VdD2c8Vfref963tBQtumzYTpsDHaPE3Rh3MZzgut1a71SjSEYMSLir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ecq64A9okftQbecaaeGJcf83aGe6TobNcvyjdXBhedp3FxxAqU1nZh8eU73fbdXTrnMZYNX3DLQ7TqGqnMhufoS",
  "key1": "s3amzRbpwUHDW5xTq1reAk3hK6md499CQZZnnyaMr7on18DYzXY5v2gB89PMGPciEbu2BPS8aBg1XgKdtQp8hYx",
  "key2": "5KesmA546daJQyBkpuAXC4V4hPWHnjbgH91UXpccSYjaWbaFfvYpzKN2g7YfPrL4RoB8nyTCpLL1iN3nHUeCpf5H",
  "key3": "3v6eaaZ5mioBVAUEfN22JJFAjvUCwsquq6uyupWxF8VPdNYpgneNFpYvP5J8peAbrbGs3ed1XFKzWJVefFbwgZQg",
  "key4": "4YkPmMa1okB5CW1xDVFNpFsm4h9pGMooqTihFeBjsyozqaBBGs5PncdMQgSFUabbQ9ESm3Jyy6YeQeJ1MNCGwYuY",
  "key5": "3Ehi3RyFdduPyvyrYqk5ex3BDoKbqoksKgksZBLmniY6q4rvtBSEaGz8UfJVnPGuBXoBwtF1pkZWwDVfCxkx59m",
  "key6": "5PW6hGYVYGaoCWoqBANeCbRi7cGwusLWVMZoCXzNdrjSyXnvubmqy1B1MQZAbK5rNSMeoGdSy43dsHFfHADL7ozL",
  "key7": "21LKeHPxY4YtktoNMmsKwiyXQ3NhN7twg42fY375ujmRW4U2piifut1ojyR9qT5EFdae2e6oNZicbnDh5bSM91UM",
  "key8": "5Z2PK7Vw7QACXna8uVPPcmj3p4oGzxxuNJaNRTUsd53zGZ8WTJJFScQWEyHhehGKjZSa8Ttj1zVvXTkMk3NZwnpF",
  "key9": "iGVDAimXmZF7bMR51h12JJf6YkTKm2HGVuhL4YCNJZ5PBDQj1HDwY8m5W3sTEPMThXwskkEW2fiDYCxEzJbwAvb",
  "key10": "hN7FmfFoiQpkMXqecF1okptVfX9MhMkm3hfskQ5fav9D9idcGA4WHW8C8gi9Nb1WeW61iK2VjfGH8mfQYNEnBVq",
  "key11": "319yqDFCYo1gaLxkPP18e7UHtnjRpPbEgm7isCiRdbKcp3cNwLzqpmWtqNpDwtdLoxbj57bJh4GAbtocuaUkA99Y",
  "key12": "41LzgLGGDiuAsinmdufV2eJxsrfhf6kNgRmNiuj1QvPYLoNAjcSbZwYDbqy9gB2WLouTXQHTMrVDJJyUuqsT5gFq",
  "key13": "3ET83YTsLZiwuSnh2MjVFLQdoFg6CkMCVfxhFE6CrXeuW53fpWkzoBWvCHvCW6T8fvHVY6myAosP55SPgtG3XY8d",
  "key14": "51KhoCZ2dzFGAmiG4Tdxj6DiYNEPLq6uBfvGUGY7Yh2HCzz6nqNQZgSgs7agvhAzYyZV5XRmNQ8owiGUx8eT4gZM",
  "key15": "4bZek4N6ruYiRX4ZY4ePbuXMALD2TVf8SrokeAbsfsUG9LLxgHTn8JbiSgcnZBZg3Tub7gU1TqN8Wmh4X968t6Km",
  "key16": "AxndCG6Tqitbf3rGduDjmmK6BjJGtbpkScp8DK1owB2thuVzcEq5E3QquoGQ8HuhuaGQgCV5uNs4wTLuzrxN5YL",
  "key17": "CSXuEL93r7CLZ2DHHekvbHF1HZkpworrdLjQ5k1y5BQLBqct2fCW3VtQf38cVtrFjvof48V4zXLs796sQZHsjry",
  "key18": "4mpxj6ng69NyuhS7aehSAQU26WbU7WaQoyqGmUy699ArXr3faRg8dfjR9psJxepdu4uNx7MG5AiETdfAtt4fW7Pw",
  "key19": "45obYNeE8EYXpeRAnrMNicpNKfHxoaRDpGGHHXeCeaMjNqwEognvnm5BheMMKiqYpvaFxEX9rysK97u1ZMTtozVd",
  "key20": "iNmvA6BHdAgktFkZXWCfvwuXwwNhpqhVn2Rcf9mbD4NHDmtm6w6GxpMgzTBg2r3feRMvJfxWMuTGgqbLkUTAWyE",
  "key21": "FRW9uTRbKS6ZDvoNP3gXBCp71BZfBtZezWyHjsiJWCGZAammm1HwoutXqfv6r339YJ7hAAYpVrfNX3X92FerC25",
  "key22": "ut6uVFpnkCnQf3yU6Zd71bJoSRVh8ATK1duTZmcD9GC2tqBfbeqsHKKo3Wuv9CHRGSih4cETa28baAE65Ay7nSA",
  "key23": "2Wca4p7xXHzQymWhvajKKcxMdtesAE7AGiES7J2n8RZQ3qjXx44AQmwRrxDQWNQ8fRvQN7jgHFzK9z3iy8eLzeeD",
  "key24": "46neRg7YAXhSsjwwdEaFQkCK4uXGxb1CRXApDAyLmfFaiMuQTkBHdJ8YW4iX8Epx4ZuMoSXtLSGRt2wfAKQ1n1Kt",
  "key25": "2m1aNJnNeVYNhB6TvS7YLGVtv2DVnMf7nuQXj96wbtMV1HmQynv3hSegNJkoA42hP9KGWUJL9bdwiDAAaGPcZ9cS",
  "key26": "5A6tibZAH4S3mzgS7dGZDZDGhpyB33YCCoWxbJU9Dw5a68vr3MHAFLPtPb7PFyMWRwqLbU75hcHAhN8RcmsQEXWi",
  "key27": "3vHVeAvtVVDqDidMSvZggtjX214TTEg8N8czXtYfWd3hixdWVBrZizDxdWVqHace8BxAT3i2W8sb3A9iYyno8wjv",
  "key28": "4DR2jusEJcC1fv6GvgHW9tSE5UrCFMoMG5ysZ7hujdCxVGFcVgWYSHPGbKEt9v2XJWTEvg6fYkuS2Qy81aN7XYcB",
  "key29": "4w3C4JR6m1N3Z2sXaRJUcF7yfn9wwfUaxsLDBE6hqZW1mk6zYiNmG5oDf6AXt6HMgX765oMdhJjPNZ2SJkd6Ub3w",
  "key30": "5pgcC6ymq4PowBh5H6K1aWQwwHjbA1fNofrGXAfqz8WQYEvXQpm6soTkKoj7LfQraCqTh9kMyaEu46iJ7dagKSHW",
  "key31": "46bC2eUnntz8YgTrKyCBg2uFvVxmAfVmWMBGEKyVfMZYJkYYiADZZUkeJbDvpaCfQueYVkfETo45qybfRJhkjHRs",
  "key32": "2MC1FHgxwSfpG2xkpiqDGYL3ztPoPL5CrUHMA9GkgDBtN6t5v2gBbpCPXsseSaSEDQH29R4teBxQvuXwszhSqCE4",
  "key33": "333YgLt5nvxTp7SHxcJyaVQg11kFHqQf97pAuNcTH4DoZvJPQoyLTqEtaEcXVofYUqUPMraZzoBcsZW6fweZ9Jc9",
  "key34": "U66uBXq6Fy8ysENreJykpAtdJ9ctLCAMmpj35jSPggbg2VLaKVo53aVhXq3BKwcTaDohFvAdg74fXZ5p12bss5L",
  "key35": "2JXZug1aTXpFHaMXvzqihjUL6DesBpwMDpq1Kcm4tG9oSLusXNZKfn7KU1xZdcHsnuEDXM5eBwW54NMZBNbae3Dn",
  "key36": "4t8c6niLAV2dJsGuLNicDjC4fE671J7fy4LzLib38QTP9Z3BP4dLkeVAnMn23MPbqtXNgMsywNhZhJz7jxabvFEJ",
  "key37": "2s3J4sdzTXfhGsokZkB6eoRRPBqZBiKZdx9uDLNghjWU8nD4MDpdtr2u2xvbFDP4a77VanJiNyASDXWptqAMRPSy",
  "key38": "3BEu3vRMqFX8Pk1vtyie1AS8azG8iWTcRvzg49KnTQMehsqzB2ymSihbAj8vaQmh9TBb1RhLFfwNqrVZFfFVJFvp",
  "key39": "2hJSrbEyGSXDXAerLZhJj4YFUKAs6ME32Nkj2NMNiN7FTLPRi1BkB1JGhnUEN1bRSywmSDLhP5dQCRGkn1U7tNWJ",
  "key40": "5o4LRj2iD5bJAnevHR2Zj3JZ7jhyQ9Z5qR8tLMy5rafo7hV2DzH9azP7LFcb4de5Qr38ELYhd3hcAubrak14KCg3",
  "key41": "611Bkm1yAsTaHcoYB91Ugb6N58DydJvzqN8UzzzR83a74kq1Q8jswscAFeBoGLsZjDyk4CdgHH518Bx4seARE4TV",
  "key42": "J1PwX1yRghtC3w4k4PhAMuNGrwrFpJn8mHAFTzjnReBvWMpMQGvLFkiHnVrdxm4kQS32atWoCzauvyH4S3eFdGn",
  "key43": "3gU5RAcgiK4GKUqfu8U8JVSHAGDJYWDNZD5p6ndDT1D3zw1KwfyCCQWMH8ZvcSMpoJXKV2xVyA8YCDVe1GjR1TnS",
  "key44": "3AWxm8QgvfLRevkzt9F2x286xdgqpuQi39f3J4FtuphYNdZznWP5ffTcwe5CD3seP7YVvk5JbUSjzBQpgACrRx7B",
  "key45": "MXJ2ebVoq2BTXqYyvSRRbHAD5UJS1RoGDx78Ev1dbJ6CvWVKv8FXHF8iHZR4mTAgnv4mEkcGGwBSUKu5UR7cFF8",
  "key46": "9JYWjUFeETGzZxm94vvhAnnspgcUwGFSov2cqdQdjZfus54tFKYGjwuS2xRBB3NZaUoNWmPCobc7shC4hzJFfHC",
  "key47": "2UPeAFkLyACPFCxDGQ784TBEgriWrJfiz7Hz6UoqsvZAuRXNLWiYD5s9CXdLwNSWmBWn3JcGzkGjGQxYqYmohb9C"
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
