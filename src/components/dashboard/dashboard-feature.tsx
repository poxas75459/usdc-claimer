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
    "3bmF5D2qXVKngT5Ghm3PRS56MigsNsd7NTmqk23SGp1U8BPx5p95YKtfCRoVnNwfXa99UrhSbJjCzQZAqfY3AKyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JW5GkuZ9T2NzSwQefWcssmS2fk6wyABXRLU6wASrXrxEpe8wy67jGyiptCXRSBBs2us3XjPGMuHKZhVwrdv9zxe",
  "key1": "btcfvDrR8LDLuYwqjio5ZU7aEpciZQQW4JdqtGEWxqB7dM412BjZww1zrP1CBrPtu8q4GG5qTrerzZShhirpnWy",
  "key2": "3t5mWbLUDhNYHauqBEWPxcucyuJccC9sL48VMznVAXPGqKkqnJ7FGS6BWkbrN8RYp5XSjqJ6HdwppBXhc8GyYioW",
  "key3": "4N8XwdPKK5sRGdXEp6fxLB58sktzFfd5P3WvxAqFR1PwdMLaCXwNhRz5xLf44D3LKP6Z3rncjPzDNxaqQDWRgH4b",
  "key4": "UVLZ7Ro78epaCu1q4EUTVypfUM79syJzh2cDuiKTnB939x7n8rMDKjhWxrEVN2RDbqiETHCob2XLe5vhssXfRct",
  "key5": "4JX5m9rHU6H8yYsMkQXXMqsuiHp8Xa4wpnx7DZ8y94HjkaLU3Vt8dh6sqg4Amdpn9N46DHoHBhDhKVkkqEpZxgu7",
  "key6": "DBFyesRgZhbfnezaSBw9nakUWQ81LvyETHmpbxve69oBziKKPNpnhaWAheL2eUcskP47yEZV2z1Du2R3v4e8tRD",
  "key7": "1aMhA7285J67XxHpRSETFZTxEGLPcKA2nLEf9UnsAsJYjECFpaaLMkkar9Z5JMTByJaqnXtEHTjwQpnG2ZYPru5",
  "key8": "4eCC8EmzLGV63Kq8Gxj8DKJaMcwSjDBbFhyqNWjWguENai4FjT8wDu1ynR6xrkVCEyveLL3SWWWBLePRpwceYhaM",
  "key9": "2ZWX9tEWJoSzH5YUK8ixL2b1UpeQ3xEDjwamMRgHf7r1DULXQRHGgnrBJVWvaHHdVKB5aGeut3Sn2c2CuJ7cGCTv",
  "key10": "5BAhpVsjZeyFH9LQAPXY8DkRWW1vY4WsMooa2ce3bVGgD7QHvTjDc9Un5SCkyQJesW3YT984qbXJM7oDq7tz844u",
  "key11": "4kmsLnYD8RVVXqvCKoJo3pojMcJbscWbdxex2auZ2t1syEbZY1C2LUqi19UBgHPfQ46qDF7YSq3cPc3pgA79GMQ9",
  "key12": "2hFyUEDnAsQPBMrEGFWaTgkqTgFPHaqoN4TgqCxkj4tLtUTgukxPZVtQKvjpgow1RE15SignDw8d15L2b2iM6RxW",
  "key13": "2WzwWCCWbCczUCJFKicZBdCMskZPbrtAfUY6rGdEmxXrQK4nMCERBQyg2vHtdA6zjHbdzLinrnV27nGNfLW68XZs",
  "key14": "4H9ABPZCDeGDdjrkWwTQks8aBGuzob9UirmdwC5uyv8U4X1JDvybvVGSiiS4jKzKiaKahxED4e72UTrzmtotAhzf",
  "key15": "2hGRUALLkzq3VMcWf1Fx7WCf8nT4FJuMrbXo2nQbWWrfeQS5fNZYy2SHdPfM4tnxVy3QbeMbzCsvk99kBSZsHDYH",
  "key16": "T6C5XAAGvG1KU2fEqXqqHT3xP13ta8hW33B1a1C3hqomN763b3Qog5ASf6CDbkmuySkepHR7zhm8iZovQaXoR6p",
  "key17": "2hMtLAM5CAh5JgzyjXRoai3pWBuHD3qPrznMmLWno4UJhXTGsH4KbuTmqwNfXAmS8bHjj2FHJPaqTa2CK1TPgbC4",
  "key18": "5PWk6Atq5dWAeWqGgL5zWYLvG9qirpD5GwFY4TpnnKtCfwUz9GXCZ7cxTqRr2sjVkSSQnryaX93fTHnSCL5ghBw2",
  "key19": "5GXewDC72M985i3GDUnPF36CzocsAdzyouEzwdbLiXN97eXT9aJQKd2tvCZdrhbsvMmTtZu4pqERCdk8G3WdM9SS",
  "key20": "3avLzE5Y23E32q6WnfE25Crcw7EemqL58c5ATcWcW9hqjQt684iNuGi3Sx4LiNENgC75niAsYMnJJwceqaV6TYVa",
  "key21": "5PRs3gavSseZ1xMjg68PybrhRwTdhdEzyAbmvWoqWQAjg2p72gnXpWQfCncjKwHSYYomwZtZqh3RmkPDoVR12yQB",
  "key22": "3dGsbYUu15o3Qi2afhU7Gvhah2qRBoDZaNJ7MMTq4ZQZQbSkGmz9sHvwJsgTs3tWCPiDNddZAnaSTdu1aNFR1myv",
  "key23": "499titsr8VT4frfm1Xiqetu5GtfH4xUr7MSB1eh1TDhdhh682KizDmYRBBAWkhzfGo68EmM9VJQ2H3qcegpgWCyE",
  "key24": "449fkRr7VnkjqEQBjmU6QmHuBh9gUNVzAxnihB63Z73kri4ht2s5PK13tjZ5K31cTFdVfAN6mGbFfrPnkBy3P8Y5",
  "key25": "3pfRY8NaQXVrq5yqC3hSL6kTanQyooA8qeFouQAU2ADNm7LEDu3bLmACMdBhQTR2i3NHug9P4coVRt7BKAdhrvaM",
  "key26": "ruLL9aurdWLdz8AU2mzSNc1ZFBHmajCdsWgH6rRpcNSG3HiU1PqxS7xifcjSb6SLBJvjMKv1UiQDCBpnMBnDCqD",
  "key27": "gDrJLTaorKEtANcRrWijsoAqLAGnJDv8CRU4neeU7LM7b5X1qFoZHXiMVWDNPAmR6bi8XmMN8jdRYhszWUAGK8p",
  "key28": "5qWmgXp63xz9LK6a7uv3RBsFhsB8ZaQ816QYM4fS5XnFe1vWE2BhrJs9SzwxtRCcm3u8DgdGy3NaWHH5Mwmn4hv7",
  "key29": "38YDQyYAbhQCswrXb2Grs2rMUw9TfBoftuahN1VhfHXCod4prtUaeabAa3R8b8C366LT6fmzExaUK448Z9DNJyzC",
  "key30": "7b9TbdiBGurgHB892mBrBX3aKdZnn4cxXzj8z4y55GheNcEpAeBrH3susFxYDcKgMDBKU5xnYzfNnLb6cZ2bSfE",
  "key31": "5SURnPDQruLRCuAoFtn8jbVhAE7KjvvemaTq4uwG7RViF54HhqgFSFNPUFeXZR2gZ2wpV4a4Rc51EAvpssEijpCn",
  "key32": "5jDag9a3wS42Mw3tN7XRHQBvcZ8TfRwLzBU54KXkQEptLvGxX7rxNNN2b1piZbhr4Pc7WnMoeZ2ptaGgg21wPqKK",
  "key33": "4uuvEsMkfow526MC6vZuFP9rZ4TZGTLJardz2u2i4Bgb4MZzDj9gTP1e4VdxoUZ6Rs3Wnas6FmihUyUDXjXAV9Gr",
  "key34": "28L98ADNjQNUphC1HgTVKT5k6hZKheGwMXP21hjnrptyzH5bLgfVis2C2t1CU23u6xkDKcsSAnXaRpWnEdo7yCJJ",
  "key35": "PeCG2JZLmz7vsauuBHPf8VyjYyix7spc98aQqaksTemitXrG8r4sYmNrJgZZNpWM7T14zRarisAzbr1jYV1iUQn",
  "key36": "4SonMWiTKzix8mz6icpSfmnLnmRbWvrYgv6sEkpP6irPNCerrdfHifNJJkPNhMrDCkMPZVmvL86emCGfsTvoLJeQ",
  "key37": "5DDWGDJxSUyg2ib6NyraavFbeVr96t5ZJtu6hsJQtVKFrwXjPKRnvkPRVokTKT1cW6wjTxSjKAJCgwA7nskJtze7",
  "key38": "caS4Ab3MHKfPABxNu2rQP6cZo9BZSCH6Axs4dS9wjd3roz9cYVj13v77taha17P4AhpQMHMQVNuAR8c4ap8om2U",
  "key39": "3bnCCfFGdDvyJK4R538PTUre5Rf619wX33SRJtssu6Nbd82ynx42miHi95HDpuZFJwwvfpq2DHCt9dC3zG3fDvrT",
  "key40": "rEx1YHsTtm4d1KSdthbWLGhihvksdksq41UMmT2z38AF3WGSsR9nW1SDqBG8876j6KpcDg9byoxjsJ3UwyrZXoF",
  "key41": "tNVZ7haVhxBhVEZ7AfQ2GwPiwudg7ExrbZJE4v25dL3Z3VWZUapcXJQKgzNcD8d66iRN4pGNdjJv1yqFK6NEP1j",
  "key42": "2nYbc9VbTFbvCWvNTKJk5TPW4rWrQszLKPm3PvWWTSHzGJfrdaarveckfvTEBod4E13Q3GxxT5zf8bYrTgheYziP",
  "key43": "2T2ZLTjrqkTpsfGuqRvrs4XV3QtCoHGmhY61SB4f1G2tDY8abBaXMNkxSbQ6X4SAG4apm4AQMqmmA3bduVncFqmE",
  "key44": "mp7vd5ZhubxWPohFBq6m7juSydgQFpRKTyu5i5GYiK5CdwijHQcEkgWNp9oXNiZPKrRMZvWfomdtnopkYi5C7BE",
  "key45": "5zgTuqRkD68boFfUDvuXimsSMLAvn4tiaxEDeTHhbcXtL8ivzsoqMMpggoy12KyPyz8a6gXTaAPvD2meMMagPiEg"
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
