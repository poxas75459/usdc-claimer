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
    "3tHeHp6aHEMXdxy2WsctZH1N1H68XWgv5GF6FAHQcDEddisuq18VbqLcYk47nDZZ4Bjyp5tDGNiLFhxqPugmGBKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sdLKCCk1TRq8dCPHuD5vvXQSXUsq8qwJcxWkNjDYbsVtCCSXu3iXShMVnciu1wJGx5ZcbnWS2BhhbKFqgSMkrP",
  "key1": "5CRexzyBtuojqTA7QkirgNBRLK5CZVjMYwjCDqQ6gYXkiKETGSE7s4kvCG96L1GGjDC1KgNbHgNL7wVG7XC2izM9",
  "key2": "3A8wrvwZP4MVhQe8u6JcjLbkPDmgXyCoRPdTNXUe53ETPeJb2VsWQy6wNF2vSh5cMicC6mKnadTcS6QtQ2cxu4ap",
  "key3": "3eUScnrALv8K4V69AcPNrVG6xEr8ZbUUN8cUu3zvRTboHUYpPci1RWVV2fWnzuBc7i38SEPvgHVJzyvNtRfXsMrJ",
  "key4": "5m3Y2fHghmMWWXyHUEJHxYnLUgUb3RZM6YJsULHqRKLpciNHGPtkoreFevx37iuNcvQong3uZivhVMobL44dwm8U",
  "key5": "5Wya66s2nfpgEjsgsgmUtFVaS1cCsCfAtM34EUNBccwZHXNbNuqo9Xwyo7Cy94ss5f3kDBS4H6dVeA4apKzQ7WKv",
  "key6": "4eE2VPw6oSVUWbASYTU4wEcut55q7Cdas25F3zYfC5mHNXRD8WDs2dukH6b5fMZiUX7MP42FoG4XzGZENkgsFNNV",
  "key7": "4W4majCmQwknaYS4zN6X7BYJUAhTUEkUNxBXPPHnfMc8zcdBK3jRPfPKJQVssrHqesbgF2gk5u6zwNfdg29z1NFj",
  "key8": "2eeS631EiWKa1fM8WixU4cwktPtHYuQLKGMc76bnUppzksYb7t5Rkvfyc1s7KqfLRZRpjbxDQgACZvLfKYmfg7nA",
  "key9": "2EZsE3JcEa4Syz4sKpzmXnL2bEqEtgaiYZu6i1UuFHXB2ZZCw7xdbgahBwM2CLSt4ckUMs5traJ1qGToKBGCHkRT",
  "key10": "4JGNyY1EqCB5qCyXAe9kay6aDPa48oV7DMfaUAnZHA2XNhrFVe4StJNmCt7kv776VtEf5xhhqCEwd4HQcgdtf18Y",
  "key11": "24zQnCiewGD4ptsBd1WfHabDc6ai5jqg2yZqXBikygZcrER5QWn1Efx4yBwFBi2TjnsDMKmqbC3kh9UHELUWi2rY",
  "key12": "3MTBEGC6dAdDFDDVMBp4kcVEeqUJYHp5uf3uXBSeCWEMa2S8HpQEj3BgdugRrdjEQun1xEq7H3EweF8ScBkgBJVn",
  "key13": "5khbJpP98L2zwtRSNEWA7LLi9aD7LJ2etS1oPMHGFm9ZpqMeyeAbPzZQdJXebVb819C7WS36DYz2BiXaheh48GwG",
  "key14": "3BTk5jcjdiueiYaeYRag3MfYeAHZsfFvu9vZSYwv18XQDYm4Rcjk1gfKPffb77f6MGtubLy3GuiYeNkA9jEzhjqG",
  "key15": "3YgYvAyf6qwLuaNS9qi1Q5P7ZLXPkTWLD2k13qsfU8tpZfttBv6LDHn63cDW7mwo2WvyYx3TaX98a5myR9EPbG8Y",
  "key16": "5E8qm957yBauDCC7n5qxwDRVkni3kYzPSgbqXiDktpWzEcBv9PRpEvgBTiR9x5xbyw9FFgwWDuWvM5gXsZtUskUj",
  "key17": "4ZH7puYXZM7JrUKawzcbt5NZKK7uWAY4dqTVgmWF5aSaWVFQTVyy3JeCnD6dLqFYX1D1obomVi4juaFnNDmFdWg7",
  "key18": "4CKd3N12aTMGX21spmJAZaj84z6KtadQgZZH8wztG38outyht9FUTphXLQZ7hVMj2qq53tKLsKjfW7rq9XqUa8ZX",
  "key19": "5PkdEMfDFrg6tuwoUWzExivPTNRoHpBh2paVpKxMc2QMi2gtXks56zeZ24864hMmCErQg7ZFPKVMPHAibvUkrisE",
  "key20": "5FGjjpTkmZMttJYJZgpZrJJnhD9WLj9152okthAMqDuZUCnQyuVHrz7s2bVAtjyMhSXU76cDdVjcLQB4BZeuNXDX",
  "key21": "3XPQybfdeNE2zbiEmPXayDdswxXGhcTM1irfDCk6UFXptmTJFRoJmyVj77DUPUzXpUeWngtSGvwjyrHCLZZhX7F7",
  "key22": "4JQQs64wTicWgXgprfjoZZdSTvXz4Kt1b5gAtd1FWb5wjGpfEHAXV7kDpZHzJneFTsH1BLdvShaht2ESfZnLHb6K",
  "key23": "213Qz9g7Pc3mmHNTsyvhRmxiM5ohHzSnzsA5cQAhKdGwmd5sTMbeMttAYeqqo6bPQQKfdKB2P9ZMWQHzjHsVWjWD",
  "key24": "2C4e79bDAnpnLU5e8qT5rgyRckDiKTHbMBRHEcErYxBVMMqWwxdbZeaupXSehbHYP8Vw7Uxaz1DXQDPnYCG65d36",
  "key25": "3dyDJd53cfmvj3zR7gtXud3m1FDGVWk4m5VEs6DJ4KUaupy7RyDno9mfKVFCsXq4RUNQNQbEG3A8xzkPwUzw1qZY",
  "key26": "3a5bfcKvWs62HX1n1ujey5gLZMnDVSHt6rrvdhc88vS7hG4VU8B2FTB7FKu1JmhJdD6PqGzZqKoz8tdJ2PS3h6bN",
  "key27": "6134r4VUuKgdE4ntwBXAXQcsGbiDRhYXKBgmo3Yc9CaCH5jrYnXqkwbzHduXfNys8LhYXwafFJP4KWAsGx3GeW7J",
  "key28": "BTporuXRvZDRMkypzu9uWPjY9wP3jmFCz11DhegnibS2mxU8ccQuouUcV9v6MRo1k9J4GYGgWys8RxcpDy4iWBn",
  "key29": "3kZGpPaY6o7VAErm5K2aEffAzLvF2Un6iVpt7TWv76Q9tqpbmNUVutfGHUMaCerkHT2cyK4qM9ycSdZd4bmsdhSX",
  "key30": "1RahmXhiDwdFcTeNuLom2S4w8jKQG3dwHVKi36ADQYrUgNZK4TqqBix5NJPjnPaqxBFWnEu1kBo5PajCZY3W9N5",
  "key31": "3P5eUZsFa5Q2i8VHD53QKHeBv3ms7Pmn6VxYYfBTVDdSnbZSPkcjoxm6jUm19HVx6JXYzMqHGysf6NjQF1k5sTCi",
  "key32": "3Zn1R2zGw2TyMfR7d8aFpJsF7eqsTWh3DKMQFF5CLymuN2yhcQX1KEwPRdiXsyqf1L5kK9Jp6hAAjMFC5nBiEPwd",
  "key33": "b9fHFeWLLpXaxS3ScifaJYXqNxJrEUSzQeyr2Rg13qsm4XiEV6BJBLz8XsWyzp1EUjkmXYX5pGfJ5w5YHq5ZtaA",
  "key34": "3zhjujKYQqCD1GMhGL7zkLCE3V7jfnzBJ1TGYwWYhN2jKCK6LrkAKp85fmsRUQ9zPJDQ5mUjmiP1r2RAbHKAKhy8",
  "key35": "5549cwZrbXpe8KXwNEJ7UCbdx9zgaLiyvzuRsc4dRpEJZqJHSovbgvKsA9DZvQ6Cqt63oMQJmqCAmkFVMqJP4Faa",
  "key36": "4Z5rBZDQXipqkY4X8i4VsFCA3jFELnvuupkNrR1SwWbkYhUKKD3rNwyBkyiZBmRYXGkzYckvPSbvoEt9beaoro3D",
  "key37": "2ovKSt1f5srBVUfFc3Kknic9HM58R1Q7mpcw5S3u911UL7w6fFN9prbbam9qYvdh2dcNjnC4AHa382ZrwpFHs1w7",
  "key38": "2JUzkRCtuC1Y4xkccs8fxq4po3vf69r8jRK1aRh8kCAfn2fJfz5RuQQvY7bG1FGgK1dvkKmSaq7EDvjEdgeNs5Ss",
  "key39": "5TtjUNq1a4jy3YKzj67mdtuQGYhxwRRnwFrKmj7Q2uEyKbSYAhGhYbXgnZP1BFGpyskobzoXTjyLmywRJHnw4pYc",
  "key40": "3tAKKYGuhNncRBgt41zmGQQogFUnVtS9nWHtvDhasdc36HzuJ1c6gpCD8JSbuUgHNEgPqxHau68iXNm7APcfzgbS",
  "key41": "5iCnaBE9cjrJmHqZ48QiVrbaaF4PRLkxGC91tHesbP6bAvr5krBt6vqfY7W1VYdqjnDc7nZAAtQiTeH8JFpFtvff",
  "key42": "5f2beYT5tQQEtwF9nWyfZsUVokXGh4DyF2qcSsqXJ6NiZwsdb8DmNmMbXvWKUVHGTs8UyLTFfAHwCAiLKaafy7Yb",
  "key43": "2dNPc8BorwN8627qdUVo77rHxZSZcjnb23BXn9qrQpQgmr9SmfcqkRebLwtLb3dVkz9Q6qBQsHStmPWVGcZeg7rg",
  "key44": "2utFajbdy1vGV28g1YyQbjkbkK6yTEeV88ig44Ch6kco3WRRykPmEvTL1dCy5r8ybntN2cifJEvEEkAhafs3rP3h",
  "key45": "3ZUcrk1Ge1mHHA56Cq4meW3ALQBc8jjtagV5A2yspwdb6xmuBq8UGCEtReDzWQajws16oN4iwKCUS1NETgKUiE91",
  "key46": "5rugLbZyaCiE4oCC5r4qLnh97n9Phixs2NbtVWP3uC4w4SpHMsNEWkDQkrR1hRHNswLSLVapM3McqU8ZV9AmhoMj",
  "key47": "WT1B9gVP9R37HkVJtcbpipWJEj3TL4s5m27QXSiorF2j2yuqF4PKFfEBeHHf5bQyyUArZmvTEHXi9rrZZuMSxWH",
  "key48": "5eU82mBwS8yiyjJd9XnDp2kxUibp1Sk8M4mmxRG1AYadyxsGRGvEsnqAadL3nq7CCNyoLCT9FHywwaHveQYWPRyo",
  "key49": "2xN2GvQDxeDp1WoZes5ayvgSoghyySGHSoJENNyGgobivCFJRFUoNbzxgT8R9yaeEauCTvunajMWWaoNzzFakrfX"
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
