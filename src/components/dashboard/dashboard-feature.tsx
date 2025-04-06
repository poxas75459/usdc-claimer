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
    "41g9fMPoQw1ihTpm6gHuo6mgCsNnrSw5exu2kpGj82Sdx8asvW7wFKPfQYZTZxEb3K82BPwxYcUsq2qLpAqwpcdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zx6Yrd3AE2v6AiTfCiZzQmvn6vrAUPifyf7uwyujdKAAjVZyd9p616vDRVoFmm3tdkFTgSJ4xo6gzVCnr6tnhbg",
  "key1": "4JGacGHvTTDKvcNZoh4x9hBsPYpgcnq7dn6TTDMVvufRsmCZdZvx8zmfWRMXZFjfYfLZd9pB6RwAq7oA9EVLeNbk",
  "key2": "5vswM4PtQLF6jUERRApDTpBoJmnpswY8K2pAq3Eorquo9JHjNKu3qvvCQCsfR7QXWtjJFU1fyynfHQz215B7YLZk",
  "key3": "5QuePydzVhj2xtZ1bHLxVGPMjHtdUkf27QYoSTSmnntXJDoytZA5b4mzD9ZiDZoWeAQRoPoT1PjV6Z7B9K3nkutm",
  "key4": "3xuPDXJnaRVPQwPg16ceiYCbpAUDuZu5ucAFVh5vMtwDvRKHbD26dupSgGXrA1ZdrB4tHbgTthmB1gTMQT2iSp76",
  "key5": "4ZQvE5AKLgcVngHzFWNwBFAu893EE65aUu1e8xWLG8Nsj8AHTtv5of6swj37h8Qsdjsxx5Nz7Ud1a2xnA2p4bqxY",
  "key6": "3XpT7aoACSYBGCHC78zCeKfMrmzXU3gS6SmfXQjupAgeHYco8XGBAUdF9n4JH1Svxn5EsETj9aHJciLztAdydjVS",
  "key7": "3vxE9ipcaHv6KwbLFYzkjjngeiRSk91Pf9Lde5KqY8ZKNR3FFuz2mWwTo65HQb376TpHobXB7Cyc6swebAigrtwk",
  "key8": "2GBEj369ZjFG9RHHy2TBMYYLkepymFmz6UzDZMBzTngErsQmzDvZ4NCVQ4aH7quw3dvMY4VjT1CkDy4sBRtxRGsg",
  "key9": "3yaMXkoQxGzxKSBT6YA9pMGtMLAWiYkrvkNMrQy4QJAhUQpR8emaXjVhoPYNo2CiWBKD47jf1x2pH5f7PUDF1j4L",
  "key10": "3847ZDnijouvBNtoHMX6Qc13hESTpjtNTzXaBSqTCVCG8DvEsYLiQiYRmsDUvBUKhVhHZUMBB8B4bq4d2DdWdYq7",
  "key11": "3QoBpikYpC7HemRYp1ZvWwwVzojurx72xpCjiKJ6NatFxHhwTMdNVHLNtN64B8aUrU6cxps2JWfKwzTwDg6Vchi4",
  "key12": "4cLQvZFoC9SEsJMLDGPzg34b2kS9mHc9ZQH9Rbep5SVKSWT1aL7BHPjr6mEWNmg3L4aPMVmT1zrmAXqdw9JunCtC",
  "key13": "3ygvU7gtpZyzMhqEq2hWhECxzH4FKC4AynsJp7sa6DKH7n1ni7bisMxKSxbR8M2D2aTyrxhoPqjVmuuhWJXvrBFR",
  "key14": "2LqvvgXxr3fuEK21dci61gnrs41rQ9Q9qAJZ5H41rUkUu9hpryuanC2JERBKAK1mXc9695J9wAAjjoNMNTyNjz6Z",
  "key15": "37cs2yGSmgY2TzztQvxgHA5rXeGvQgrqwsrsnZ6yxbvFWDdepCQpce12w8HmzpAAK2Niuk7EH4gpMMEehf6BkWuB",
  "key16": "54FRiXtGMNnr1X65WrG25TEnw8Pq27uax9f6FPDFt9cRBpmUcS5qncBzh9FiiN7sXv1UuBqGmwnn1a7XKEgfrKQJ",
  "key17": "5mB3Y2mU6D2spHwV7GT6Gh2V6joz6j1Hr3wo1DabEXFV6nFB7RaqBCHHoQ9Sp9fRA7qNfe61jjxNQCkTi7PDzCGN",
  "key18": "29HhMP9X25fgscuFeYnswFnDrfFNXrrA9VgfdWgdEqmm1Py1TQ3vJy6m333jZ2UdzSkzRxH6CTF5eATrJxoKJShQ",
  "key19": "44CNWEuvHm8upYcMS75VzQGcy9SyeB1ZwrFgqeUTJA7JjrpoqFEp1XZpPiYQq4fhEguURhuTprsQUCUmQP3MkJjM",
  "key20": "bGLDQ9jWeLt7dbVoWib1tgDXKU2NHY2vkjP9pYGSFdrvo9mL4AdxTWv1bKzByZ9iek4oCUpwxm5T77W3rYmnLPM",
  "key21": "3AUAfqQ9tsTqYhfUpVQgvzejNMy4R1YJFDUD3y7dCDbBjVpoEHAcZ147e8QLTMYdJQMJxgmZZxfPMzy8Ptju9JKW",
  "key22": "4oZWa8vzPA5oNWDXKF3puom5SGme8oPCq9soPZrybFkptBV7dtXsU1bDZKygHutGWotWS4o8j2LMZxPiH5eKjdUe",
  "key23": "49AWaZTUo6QHQGGngqkyL98JCrP1UfFuyFoRDynPq9CCVfpbZy5A8u9bt9aTZScnNhZkn4PcdrVsmoAwJ1xK9X4X",
  "key24": "41nTwquM5zrnYpexApgZBWc2HhBRWgQ8m6DvgYr3JAbDa4W6bn7MGDPphkmv1vUmjjZBPmnxJ4B8uM2KfKUTGZ5d",
  "key25": "64u8JBwT7Bpawwhk4NVtFcDLrbTMrpERyP2mmx5qVuF7JWu1XCLrceSp3ZYckpq88D5mTyZBtcPVtzUFnmxtm6BU",
  "key26": "65T1nXmkGhJHG2L5RQiovyDhT51GXe5qC9hZCVSwMgEBinRt6UyeXXAwFcbZKvXwQXSAxkmCrNftQJQvFZRd1uMo",
  "key27": "5k5zqM97u3Cu1iKQ26XS3ED5sNe7k7dReC3op1FCybfwf29N9LxekdhWcYsEq843MkZGZfaDXZmvdChtqTH4Mg6D",
  "key28": "3RPxxyQjioBXFvD4ErshvjquiMoUVxMTLDXSqYAYaRCQ3jGDHaWa9MMZGKZGZWtphdvEVpoJgUfB2uGjiWg1MoHX",
  "key29": "soznABy9VYkw3NFwPNMnBxhBz6A91fNaSYuYHZKvbepVYgj4MHfbm8ngUZXydfRXNvJL7iHrgQi6ey9qu19qUZm",
  "key30": "41XfBXYvg9jYwVZih4XfNJXfQB8v932S8SqXTWCFMc8SNa6aBzoz5FGAaHHecp9hZCokP1rNifCQ3Y7gzGn5LnwV",
  "key31": "5A3fAr9xqoLY2NjgeQK28L8i7YDoCbj6ZsyACPeyHpwjHCDjWkkBncEKFJmMsjdBrqjBr2bspSLrjjgeaTgtG3px",
  "key32": "62MtSMMA6anatdeSEpaq3wmwkeTC5d37Yu3ZVE2z6ueTHxpgHGYJ7mYmjomtzixpZH5RZJKMnMhqAsg7RLin7Jjd",
  "key33": "cZGxEzSu4DRhwEW3h7MXiJTZuFzXSdwgWB2HoXMcV4i2uryTi6uFtCJ7wrtrH7YYRdk5ECWrhUuZmnMR9KadQ5y",
  "key34": "5SEfDhPPjfv7kntAf81kxBYN8S8dKkWm1nh6xPPjL89deZ1oeeW3vefEqFAULnJRiBsjfxqGMeqcnFjWzuKRf7td",
  "key35": "5Lchn6nm8BiS4a2mP97FJuoiYdi9rVW2ZUyo3B8Xkea41dpjPwTVHtayFxVCGJMnwZvmFD3fvBgyyccAfH25iJ4M",
  "key36": "3FFtvgxmKypFBaTDUMXR24YmV1dFt4ysQpKMq4EcgLF1CCsZ9eTdkzWv7624phEjA6oAxrAtrh3THV5rCd2fDGWV",
  "key37": "3ucnJCqn9rGkvkHfe6A57aJVrbhTsea4NNTsuSPRHyEczHCEzoPWPYexnoWX4UHKe2g2dAr1N6hvjjucn9enA2DT",
  "key38": "327RQNgNpXXXspnmwToMNGoY8ZmVcWLH3ADrbq1BRncPFjtMxLYSrVycWEXkjr4EVzgnc4BJnq9gr2zpMEeuahzh",
  "key39": "5XmHeoCbEHXrWKfT9oUEMvU9Uf2ZXcnzngCsMync493nxRBT89amEGTdwruvG7HcbaKHLrsMiBv6PoNha6ZyJRwv",
  "key40": "2vGkZr6viNQzc3GUdsVmRRazwSjpLKcb3619HS2gk8t3MouiaHa3ZT3p8ziiydm1y2QjBdxUEKi4MnR5ygXRouEJ",
  "key41": "3okdVt7U8GCedvxgU46XB2BZDXpSPmwE82njMyVPcGZa79iDJjesuTLiVD7hqQGV7pccCPwcdchEC6LvWTnKwmfu",
  "key42": "5WzSSQ57CLzXSTEzcwMD8jFYtKAnEcFeYcEQq867MZYDd8H2njEAt88KDqT226nxBA6MhiPMmxm4x7ueU91oxHUp"
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
