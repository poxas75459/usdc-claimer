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
    "4qpeXH6S3w8sAgCFz4NvbJ9VrB9gESp23sBuaT9Rim27CxfXdx1UTRASbVoxg5cdRvGBCnMrZxqgPs2HUAGpNXKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWpKDx5zrwXsP4mY5oZMcoUsoHsbNMsoNwVFGxxR9knA37cC4xECn81TTz79ChXVHbxa9JHzfvhdQNoHs6HwjGt",
  "key1": "663qgCSHmVyvsU23yBPcRSxNzZ64jjP9jes6pKZzueLUcvpJMPQBCNUvyiX34q2mrtBXtvexd758UvVAgXNG6vyP",
  "key2": "5tGHZmGkGyNaDA4fZz2RekLiCRaDGsBSQYZpF3qTBDkr4vy3vsLFKg7JyLiSaUyiU8oVRiwfwkHpeJgXzfW43JJS",
  "key3": "2fG8iiekNRKbWzptF7emPgZ383ACdwcZUsFMAGyATeQezCKEfBMJLWRoKfnKL6qjdY5JX3z7awF4pwuF73RSVan9",
  "key4": "3RkBiWTPfJuoL4QiXpGbPERUabAopNHM1xGUiv7wCyE6BBHE19Z2vTkB6TbdTy4cduoTSy7Zj254CCa3Wzj5v2Tt",
  "key5": "36bEDZNLHfXPyzsb77r6meoYLi9ssNZkUr6bNQsoT7KLjo39Hb6RcS4XCiUxgpgWScbwjRqRJRhAon7xe8WsYNop",
  "key6": "34G2i8W9iqrrzYyGaMVX3GQWUU6Ssj2N1yKdSnTkri6Yf5Z9oZhGPNYt2bfodHetVWRj2HDwHcKF84LNBUNvVcw4",
  "key7": "5g5SnM6aTd6nnAtCfBsXdDthrtH34bpSv5xjCxZebp7LVFPtDS9jDsa1rW991C43aGSV5RZjVajejRHkBHuHeNoa",
  "key8": "5612ZbFv8u4pBq9tNhNtVZHWyv4KgC9JtWd4uJLUaWuuS1HLr57tMzqqb4gUTDqwLW8oTH8EKfsd1ei8JmrSv5mp",
  "key9": "cNGEE6him31czPB3jaJtqdB8U7uSut3BwNMyct31V38VbwBHJRJhbFQSMag4Q8ahbMs82K94MYZcZUkCk7tj5me",
  "key10": "4S3nh4znKMoDVDr3AybuqjRHym9KRk2DsrJuTxavrx4SDBtBtgzwmHLyYFyp5aYzioznKKcGx2MumkmNBh12y3LR",
  "key11": "oTQQwq88zFSeuev2SL5urtMqw7wymAFGBE1kDtHYnNf4a2odeEr1CBsGo7G8B4aA4i17bUjj9FX6G5xmhz1uN2V",
  "key12": "4Sz3Dm5f2iCG3PwkjUZaN16vvmvkqEGKbXTjNZ2zPWrLfuXmvKNhWCu3zAZRBiXbyueqQTwhTGJWecVHvzAVHxqN",
  "key13": "5addRtV5BApUq8Smio1xEWwyNPdYxui5Crkavh3X3m1zrn8rZTo6Vx6iECNqvFnYW6hoxShJ9QPorGaWWZS2w6oC",
  "key14": "4usKKuFvaPKv9X4LHi64noyZJ9dSH6oJN5Pbjqw72PHn3eUZ4KUExFvKSLo1FEHRctW47YX2ZhgKxN2apeqVPCNm",
  "key15": "3ozfJ5NxPwJsAT21vmVSp1AjwQUvPdXwJpJ9hUuExGVBuKdRtQ4LSLMDAzPNgKDPxLt6z6ARf9WvmkY2KAPxXpF6",
  "key16": "eZSvHCKJ7Y9SK7uXv8PwLG5LTrsevax523ZKkWJuLpiessSnNKQVbWJjKsZQqdc2ZD8ZQKXfiBgMEzPsyQgqW5c",
  "key17": "4MtWKeWfkwVeVVZNGUzDtajCYPn1PJvVZbv54AHf2YF3feaPn6sqGXfMk1NLu7bK7siGX2gFN9EyacyKWSvNcpcW",
  "key18": "3RqHv4WqWTGmMPhv5CYXdmiiakiSMjjv8aQ2U9wKDQSjct9LGhanCu2KpCrxtYEo3MhRvPoLTcGUzGmRh54Q91Ru",
  "key19": "CQ9d4DcLWNyQBZmmUqwGeV8UN35PWycjj3SHSarK15PJgjwan5HBkKNoDrK8gYJ5JYPNTf7DGFyguqgwoabmB1v",
  "key20": "5uiVU5rNiLcAq5LdNQUUgKJSuZwA2oiASTxeGLWY8YbvewkVJyF7VZQLZuzCjkE3cLoB8pnnffPCHWLvg78mcvL7",
  "key21": "125z6i7ChZDrk7stFWWqRXhGW42y48fQZk2dRNb2YrJ8bnZGgKLX9qb6SctwZK8LHcJDDTqByf2VZJ2zX8wR2EcN",
  "key22": "35eYYZxyTUN5ARoiWX1JYzBgg46moBSM2jVqhNJsA1tBiTZ42gc4wwVyeRQBMyc4Z9vcMkqtKFCTAoHwaFrwEcZ9",
  "key23": "kFA9fSE71rJKxQ2mrmnd3ZdQB7RRc85pACeiGp23Jj4C7GEqiJdXB31MwdFLSFQBqmL7jrjpL8EwjpAVs4V78Vv",
  "key24": "24drCu1Jtrtnd5wmGPbFP6Ey49Q2TmbZP8NYs6Y2s7RLmq5cVCsQFSbRtjJgQocVpERxc3WCrh9uTbTgxUSYxCcC",
  "key25": "4S8UB7ECFjx2LAP8E8GkVB2KE8F4rxp4voK5JgbhfwdqdAne4zqpA3XSQCzsqgF7jYLRiibPCBsbgVm92n5ST92B",
  "key26": "5jPdJ5T7wnWhornMd23Sd2Avia4qH39bpoA5w8V6y1iEgPFAdZbyE3aq21wbXTFeBKvy4UwZfjLaHbYv9Cg1BWQK",
  "key27": "4ZyVUsMBmgidDnPXE6zWLhQSuJYeutZqbbbBCUUAH6XUDAdh9eZAdFHznJGWiGte6HGCK9hgK5C4S5B3JQfzbTyp",
  "key28": "5HToL5xRKsCubWZjQPLHdezGrj3m1qiqQRmYnCeE3epz21tnyS3bHqYTGUo9eHv4U9sRToguWV7Bfow9Sx3bJ1zx",
  "key29": "2aZQwhYMf4cytApzy22eZJL5KdJAtmWnptyKLtkESkwuN3aqDVsSGyQSQGhpABjQCP9hs3PFtMyWdi1MTRpX1xZY",
  "key30": "5GzhKwf5Y4eKDJkTbrRC2L2WNfh959a7sARNemYfUNLx5rzfbhfsPx3SsaxQJPrTFVYVbJeS16EGwobgEzUVtCDT",
  "key31": "63iUbo9nn3arz921Q7LU19ubnttoxCJuWfgBhiCsUzMtEWAd9tJnk4rpwtvawzikGF9a5xnNMeJscaudFQgjDxSp",
  "key32": "2zXQZeoZaifmdzSjtQ4c5jHANoTF86JprU9LLTUKp1YzDuSP9MLssWqJYxkb7JoJE5x6q8VSJswhzBWQM4VB3yF9",
  "key33": "dyyYLeWmNRoirXVx1A2SQZT16yiYYnr1cN3nwhfToaU5JD6Dwz3LR7DE3pUWyM1a9AYiYF2zpQWGQfJ8C49GEuh",
  "key34": "2Rh6TsLwXPd78ZWzxq3c5MebY1yPWmWgmdUzW9A7XvQLpAPdeyH33GhJqzWZAwmxTXHBLxoeYyTgibyo1nXCpeoG",
  "key35": "4fXCnPB6SdEtMEdJviPBzvD5pQg1ocDBiLHW3CQcr68gRsJoBDNgBfy4igY461DqbxaREBPaEfth77e4pL1DjLCn",
  "key36": "5SbPFCtikk1pfniUHt3Q4K1tGUXvPcPsM9rHLqacnVXuxQDWRtv2sYwbqnbnmmKXA1LjMzRKKgkTK5fpQkoA4oM3",
  "key37": "598EN99Cfxecxn88r7tcvsRTxJxd5cMGkujuSBnShqxbcXMrTiTC8FjHU3UQdcS5SMQFcf9GGyUfdDuWgeokuvAP",
  "key38": "xLQhZt8E1J3GDBQeWj1HocsChrLoCkV6uecSMayJfFkHrN3Ld3rS42ueTvhQPH5sTPzrD66PmTHNRPWuBfL24jU"
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
