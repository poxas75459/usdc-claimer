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
    "qtm91wBfKAdVSsvjXtzD1nTYyb6PBq2wra2ySxLrmuamLQHpGPZbqwjGxxrW6gSy1xnF3WKZQe5ujhoLCqFJi7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGdgFCZFkriioKDSAssWxbbE2vN2qyR4YxkcTMhVbXgV1DEYFCHDWLxJmC9mtqjAPWPRCySJN2NsYBPK2b5fk6k",
  "key1": "2zMwWe1nypZ9Gu4dCiFgYGG97X5z6hCi6awiQfkVCjGwUAaVJnFCTKZcn8VBnAbvk4RDaZgbgef1ky9pheQAB9dr",
  "key2": "4getrWu4S66xJ6wMeRqrX6KrjZYnooo98uKiYuHew8MJygu3yueBN4GfeNgPvu9q5yDmvFvnYmJL3X8zyWanzWVB",
  "key3": "3Di6umanKaAxGRyogg2G763aau4Ks73s5osSGKdkWCkvCmrkpKUqzKu7EQmuuQ9Ma3P5LuQjSTAZYMZmpEpk6HJQ",
  "key4": "w7aie3mzogrTRKXAo1V7LCEc6N1B9U9EWi9usHraH1e9HoA65RvtxLggRuFbxm7JuKxsNUUboi5FtKegHQH2Eps",
  "key5": "xuZKcPJECaNCoCpX4TGNRxjW2TzNbGLpA6s7oxmHa2s9DCwrYTqPR3tRtpZYkW18t3CFX2EwfoRwpw9vX38Xj9v",
  "key6": "2h4oTUoZmY2n23J4ZLon8uarYp8CJQXSbG4z3dYPvgLToYeE13Pw6PbFXvcPMrCnm6AFQmP5xBgjHsenRgXMHuSK",
  "key7": "4FacDMo7Q1uP8V5sYsAmVHPtTb3ceTdGVPcjksw5goBgThAt6ZBxnWEdf1YHj42Q2dEAQAZL65hYxd7AjH9UVV9A",
  "key8": "2rNJ93DdxQnQJZysoqFrSzEM1d4Z9sgN46WHs7KmxQjXMzUcrNz8DRKEac3H8At4KF6R9K2Py1Ym3Q6EWeDS1v5S",
  "key9": "25BJJhwc33W2hmcdApJz4BfUz5ezPKPi4pPyro3dBU7yYr87WipS2YqNVJWYLU7GoA27Gm4gwPmJEiYv6oUKHz1N",
  "key10": "5MJdPzdE6TB4UswEhyN1GnGZgQaF5yEfzZghUyX2vxh47yERkgaoVrtUQ5ishZZo77pfnp21NmChCYsZQ6Cru3CE",
  "key11": "qELPCJKmWKjxDPNj9mb848dm1Th67c8485TmFWWHxSfYpTQJTgNkNiU83MB82zWQXQ22Z2TKQoJ4DsUJqcdRgke",
  "key12": "3os5mJoTXuZq8hDHnJBwY72HdtKzzPNXgfTHLmqbC2w1szsqDLyZaY9qshZS95ZFu3YqJS8EhYfCx5oRLFo5DpSp",
  "key13": "5aX97aNgdyHhYGtxmTyEDfDo8TdpeTiYzK4aXkpL5WeQYejZPy7DqGUzdqSspot5PCUxrNDPbtTSoutZvkXioym7",
  "key14": "4aQz7d2tkr7C6RkMxKNiqsh5ZptzPUf9hmvwjbWifDwbCWrZQ2EGGcnCNHRNLiLecevYR2hkr6RkmPxLjTv7KF4J",
  "key15": "3MSJmLK5mbYDkyo29kEgTcd2LMrDaE83HkaZm2nzBXQPBM3Y8ETy4WQcigYZ9JQVVnn681hzB6k9q9mAYaHhhaDK",
  "key16": "3qfpymf4woC4M9Mya4cHBukALQo8eqjSQbwDuWNKvXfexU54w528bWwrw3vWNbUTKHvAp6nKSw3tD2uxgGpipSRk",
  "key17": "4kcru8hMgsucpGzzW3nkQbTVn3uEvMeLpTzzssvQVvxwroLUXKGR9R8jT2vLofNMXhii7Y7Thft7d8WQsLGyQLqP",
  "key18": "2E5kG28T6HLiWaRo4C1X1T2zwf2EmJcm1B1T2MpnMKAGGVtUjAfzdFzxbJJEezGaXjB2k5SmSMVtCuLeZ8AhVeQ8",
  "key19": "F7hLFAVRqeeAYbEs3d8wFCpp2g4hMAjsNcpUZUp1H51sJXMErC7YMZcUSLfu4H4AH4SQma7X8v6RUy2kPdor9Un",
  "key20": "9UTKrzyQE3WpAVPgsDyg6yUhnzeDb7fJk2NdreyTmkwFATkEdFNq5cDHWH555tub4ekKGzJWCyi68S4pY2sAb2J",
  "key21": "5zmrPif7PK58zJcQTsc1eraXBZezJzSKbDiJYuB29VX4PiAYCBDbCGufSKArJnn21RKv1fR3w2cNJNyX8N6CL8XG",
  "key22": "2gSiSANnrwgvYEmPar5UMBuqknAp9C7chMmpoY3hsYsLAbR49vgp12gsm1KvzEBWQj37hGNGXv8orP111fvox3dZ",
  "key23": "2iCc4tfdqF9NwTaufdcS9pTt6TuG96u45vmhMyU13BzcRJwxRKKAuFWYPJ9BTCCF9ra2mU565kHdKUygQysvKzj4",
  "key24": "35j2NqcTSaN6MRtxnpuKF9Z3jMAnJJJYaChu7LUNZfvWMgyiyU38vVX5zkAgS8is5aXaDgjV8H32Yn34QsQAUkxs",
  "key25": "4LtrLvcoYMhaddwCY9aR1h6No4zrDqhXMNfU9qLaAdainkP5bBpeKVJXgJg2ey7m4GCkipaLnkj8kNUrfw3Foyr4",
  "key26": "3bAWTsQMMJNXciMUAoKXfQDC5rrApZj3svysygxNJGNn73S9xux8vS1Njg1o2uvQkbdsrBG4d6zmzgRcRCDxdKeE",
  "key27": "3yb6UTbZf3dgUZJjbo6b17R3DGaT58eSzU6TkYPdX7syZd79Z7YcBN8oVysve5y9xScRU2a9YL6DiwAcf495Kpg2",
  "key28": "3KKiDBhDx8TSAQENgAk84LdnfU1jZCj2JDUygPx2wmFWrBXkRKUC23CFTS4mKQKrrRrgq3fZHx5E7HLPYH8YuBdh",
  "key29": "5zFTKgC7PqzL8JgY5DUZ7fmDRwMWzrap9S9rjX5dPyuAZUoKMmGc58CN4DQHxc8QdG1JsVu5BJdmw28hpDpbvp6X",
  "key30": "K52dbsLTmpTcWipGdFefPE6RVcETG7VD1Z2MzjF4bwYurYZrzwcTrLTLQquYiu7ryRBLz5BXUDKUD4cJpRbBSto",
  "key31": "93cXbbmYvvAS7ivvrD3AZCYCmT2fLL1U6aFzbLzbFBn2hEkA3dUPgmYTWDD2wbnhH134nmqnTsQAPfWtZfnDEhy",
  "key32": "2EeH9WxntAo1JTWCpgKvFNUbgHbiEAi7RVT8rGg4R7pRaLQo4VbJghxj8hX5pXJBPds75vJBt4NBU6r2KC2bjuGB",
  "key33": "21MfJ3T448NdCGumyv5iV4aN4ofVMV175hpG7MdiLTHpeuQUW7mTZ366yrxsFf17CU74mq6jn16BV61B9wnBxH4h",
  "key34": "66qJcy1Dt8FwGMJpYMwbfZ9Wknv11GThBAsozg7qxpn1xGXmHaXvoqrbewWvJKXj16XmLm6LxQjdRmXiSJHZBnZx",
  "key35": "E14X4UxXRkpHYiHtEKDotw7EU9jnNsgWTMZPuA3FXkD6EW6BvdFZ2u47AdgxCnraMkJZcUW82d1hi3Z51zAMeZm",
  "key36": "4V8Qa8B3x7rVjMJHgA6Dr437qaw6AeuvJwSr2ALyjrnB9WNVwADaaCgBPDjviSFrGuKz91wN6hzQ6Nc5Fgj1vFKE",
  "key37": "49FRwZAhk1EaMhyEU7RKD4AFDcyF846C2S56gL5feAKEo1aCYESb2YTY5wPqDuPWnfPAHgBr1jzJ2TnnhbYVmg7p",
  "key38": "jYdU5LYFnSaSAuLyEdTi1Yo48HtXFE42AWK5hqEs5jMiVbNmmFxtQ8bfyXGix8nmkgZ8zPBdCvJmvgL7dufpArW",
  "key39": "3dodBJGLpRozLRUNs7P588dXF4fox8YqCaGbi4np3HjUaarMYGagBNGRv2GT5QBwSGtBPMTcC5RNCgmCALVc6BxS",
  "key40": "3kbsM5ATEX21rXVEH3AM1fmzsiiXwF45ts7HpYcjYYJJfBn7vxJXx44FrSRyTryU8of7oBGwKygontetDJcJoQQ1",
  "key41": "2s3H37aDfwWPQ2eBDA9BQQBi4wFwqaFim6XtqwccSrvonm1xEDNMw4ajM1yeQENuuimRf5qpMweSZcTEX9usSFkw",
  "key42": "4sNMinwAej1fNgiibSHfgJS8WnxjR8uDVpwE8zG4DrRfsF9YY52mEDkRGcoodNtzrrMyuf4WxfjGZEVtriZ3js1t",
  "key43": "3jgm5vgj5s7Jk5x5Hbp4uyQBRazrPjf6JNubyEQ84qsMeNLZA28YZrs39Z4Sxs2CRpCeEFYkdvGRxQoEWJcZCwi3"
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
