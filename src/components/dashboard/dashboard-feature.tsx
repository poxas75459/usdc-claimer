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
    "4gBFUk9sDCu2d4usL7QQqd65vDzt3xWUtupw5CHVRkPH4bc3cAjX3Mzbg3Y7uJ1S6SZCkoq4im6wygxAaWrHXgST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqyVHuHMbueWfJAavgCmhHLULnU6AQVm5poFXqiW2jQh7FvkAq6H8XS2gXQ6c1yyNpsDr4J8mjmtd1MABf4ddCY",
  "key1": "4YzUy8QocTQYNcRq4ZBmsNYfGT4kLqioFkuZWVKY4ZqNGuURU1nS7xs8z1k8nJ8ssZZ38kvztKeZhZLkQjWUFXAc",
  "key2": "Y3AxTVi91W8pGZVAiTH9FaueDEC9SzUVshVoWvL6fTwuTyHQkpU73mLgQ1hAvaNEKuDN77gKk5W47UqSSGA1BUS",
  "key3": "zLj8QdvFfAT5WoStdJUaXKp9GA5LQW4oebMcw7aHx5WQ4CRgDt9jrmkUAgiEnpYmiujy9Maoa9yoyfU8W1bEpE9",
  "key4": "58rrsBaxgJddeETZUKG99qa57MJScwjsNHH4AS5aFzMXGvQbDpiMopyKQYUm97CjSfVfhkbu35VhAPYQ4RkcHHCC",
  "key5": "5J2D47P6zURAq9dKU13a4UfNwfY3xNnhciFbdLEsxk77rzpjTnGxbouGeZ5dQDqQQydjxWCFEhg2XjfWbguRQcDQ",
  "key6": "V5XcX9hufDhTvJrrGUsFvNykhZWMtrRqrefjyhbHRaiToN8AjvteAHdPyTpeM9xtG8hJZ9JWFF9QTNTk5ABubiV",
  "key7": "4R4By7yQUuwbcQyhRP9yT9xvbfyC8FpQqYjd1GhKjueVYVW9cXqUwXAL8AEqzXY2HAuqSMBj4KKzPbPz9fUWKY2t",
  "key8": "35CPjHVYv1b6m3bf5YaUvLp2jsUbytJZxkJShRjVkopWdC2RNRSbxDDiUin17m6FiS78Ta7rQ8bkTunJvNAHMBsX",
  "key9": "4PwvasBLSAhBLjNaoE9gWgqK5fz1VBixMHyXbE4iavtcUuaURvfjZBzmGyUgxPn4cmZ5xFkL2QYWv3iz5Kom8d4b",
  "key10": "3NVVWxEoMvjEyk4TCejF6VY25vjT7pfMo3bkT997AGBQPyU2ddpbDraqCRgW1pRYucYNjB6uo33sc6kKeCS74YbJ",
  "key11": "2sJr3n99a3zeXo2fXJmXVs9N8knrznxUm3CxQzLXXgfQuHVVSbGLPLy9hmQnpqpXpshmv64AqRHEkXcnPdgj4A3h",
  "key12": "4R6wZvCkcNvD1KWRtBc9fixiVd9yYYPGDRjrujDqzNE3y5qXtgzK5BkdJZgo2gZC7uT26Pxa26Ht6yGwfx8tDejy",
  "key13": "66uF2JKmWXgEV6BtJwujadanpLvyZ6xiz5tdnda4eLyrMTbiZN1WZVVaKox5ERkrm7YfhpwPmaYdSetCH4T68NKZ",
  "key14": "3UgjnobkS9aUG3qF4YrdTqF2Lg16eD9sKKmce6f8Dsw5NBz64upQBhGKSwEaaKBrm34As8mpxvyTtkJZh1ozN3kW",
  "key15": "XcajLzLEPbMam81RZ8HYnx6Ecn2BCAmHMzRRi9KhgX9cqwDpHBZb79nkDCmk19i74ZS5QUgTeH3ZervUgvK7fq1",
  "key16": "57mD7MPqCzCSAUDoYNC8fpvuLAZ7r3qVm19RC4NGoP9kGSNg32gN5ar37xUeE9tondpAz8WGBXrd1326qeu82kZY",
  "key17": "4iVjgVxtKgHM2abT1vNqU4eUEwu2nJYP6D5ZNEwPaHdJBvznDwXLPcttcawemmEwhciLDAdonGvtVxYrmTSbugpq",
  "key18": "5XdqPowiFKWLoEFhRQZRAVr1oZ8Zkkng2xqpBP1UGpMMTx92P6MPde9WDTX3pT64znyuPFpnzDyCdeBgm2F3fszX",
  "key19": "brj4AvDDHVpTDrb3csdxUhjzjoqMd8NSYG1PPKBWgUXAu2qbPydAVj2y4cVKx3CRSy2uYqo1XwF1qSDdumPyafg",
  "key20": "5wxBi9s2RoZowXYZPaDxjstznFE4ta7bCwkKCWNp9QMYM4CRZfbyYp96LykXTGh12Mh84G4q2ob78SnoUBu1cLkg",
  "key21": "fVn33m9D4DTg5jVPZHSfDgmuSmUp7xLqa34rKwDo5UM6MQS3KAc3qgk9m3xGfTh2Mzc7yCz9EU4iQBdWrsT7crf",
  "key22": "2EpPA4F4BXp7HdQE6RwRcJQx9JE1iYKCMj5bNDfZ14Gb1VhQNYXGp7SDCRtHtihLtSG2DdfrguXgxvqXak63wqch",
  "key23": "53VXRcfwsg7RwDFBpiUpGkirLZf8f1XQjBRRqud91U3AtfjguG8yDcxqHXLpSEDdR8VKMSqaFAWfcNUfyezW5Waf",
  "key24": "4dFzzEFpoZRicrZSDhxhY58zCy39gvciiTWQCsqkp3p8bHcvbsHauDCdvZSFpzBeG41pahfSPM9HVps3dSymLVS1",
  "key25": "4JbyJk5vYBMb3D62uiNjhoVkPnKFJKt1KyEeMWUmaVJ4acGyYwK1F2AzdnraryHMRYhPsgnMAabTr6iqJnqMgGqK",
  "key26": "4onEmUs8dG5kWqWoiXz3SncoUpP9cN84RL5YJnH2Kat8xANDoe83Qh7o7mjk1GNM5cbi39QRhaSuE9qCxgW6PVxw",
  "key27": "36KfrbpN5T1ZqGwvtdrs7SjZaMe2caKZVTdsNx5erbR4BWnhQ1iUmf73riJtxd6uZjXJE5XtvzfBk2RnPjEQqTZH",
  "key28": "EC499EbyaHdh9thQLzhraRbdQaoheoVarwtQp4mcFsvQikTzYL67AiiHEswaPW1B3WPXPzujWfCVBxqtUY9PecX",
  "key29": "kPK5boXFMfN7ty3nnzwkb4EQPcwhsdLL2PAZs4TE33Hb93K8HcDzLHVWGVh2pprdK7rma1zobKwTXNnZvG1GUN1",
  "key30": "3VqXW5KBXG6eEPZYGGWACXwjCmRcFNnURKjWFjFfL1P9YzMBU9v9qSvYmwiBuWQv4T1abi2bB8WphVk6QRfgd2oL",
  "key31": "28k4XkpHMZP7WVNC8tTTqe2GVhP2KBAJv9yXrvnNukRbN9WoHqPjXXCTRvaFq6U9tv7XGzgxD6gezvcBbvxw2sNx",
  "key32": "mWRnbsyj923whkaEUfJeLeCw6AHdxyFxXpXjFVSd9nuf6yeQX736snjSEz3euqiqkRRK6QDCxjtsA3gqB1VWGxQ",
  "key33": "5Z83JukYw14cGS7f7FuciJpMpP2trGgPCHsLuj4KTryUweMNGEMGHejjBTe8iFLijiUSRMRALrT8DLJW4imBhaD3",
  "key34": "3uNZt4oo9U126VckCMVa7pWcLtvpydS6bbqK5UdfZLFqzZNUZpyuqT9hfqkzXcubLHs49bzJLMVENoHbuiqHmaN6",
  "key35": "4DvJdvxmG5PeAwhWB9jEpptUpyskVYrkWCgJCo2Hy632GVxua31RYNrrGz5nqhRExGkH1brd4eeZPeoAjtrAsW6U",
  "key36": "2vy7HKAm1GWR4y3y2Kw4UMNsHA43rSmuYnpoQTHEi9yjr1WKfxaPE6c8Dg56FBvLcCi97GbuTSBXthNBnUpyAbSC",
  "key37": "4RFCAYJframhn3EonuwtCHwMNtoeFWGMpdGyzzb1geWHGZCayyZ1zBMcQ5Fq3mh5chHxnLJJTaH4UbvKmzzZZh3B",
  "key38": "3uWgKxqtaBhT4VRnqtx8vEXzV4uAXZfvSKqe35vXdwxizEmaAYgAExrDYaqVpqE2YyQE1bPXijEZmiPnWmhpWKzT",
  "key39": "3MKsFmGLD81XR8BKX7Vgub6gZqy7rhqUJ9tCsGGdmrZ1AxEjgZx3eQErYtTdn3XhHfE1m6MDkncL1hUeuw9Xq7ER",
  "key40": "pfGVxdL5tNkexZ2fJWwM2CkEeTiUyb5LxQkaCyf6dZj3apWmuRKPRqtx7FnKeK9BoY88CzhxDLYiS4giZMeLdjM",
  "key41": "2DzPYUkLsHUD8vB25Mg81HYBuZkoUCLnCMwHTpK2951isoKtZ4P2NmqSUa6VKFDwkPPSxQbvS7P5zWaMk3uuHp1w",
  "key42": "4uj3ZyceR6iGvbnnvaLA2eiJuthvWjstmDShynnkznNdavSeqQru6cdE7ARYW4N1ZeWZrtjXCUWcSwNALYhzbcfz",
  "key43": "3DziquCgGM4K1nS2X8AANUwrMZJxE86dYkNZ7oRZEsijjTCujfV4uqGPfjFAafUidmvjxExVJVoszZwbEKfsfnfw",
  "key44": "aLF8kD8ZUM1YEDc7PYrxgu1rxF72XSuqspbcnWVKAwztfhDrmUjycGW5Yrj9fYKnQe5ZeZ5QAT5SsueVrQxnuj2",
  "key45": "2PPLkQuN6VakaeqjKJUr3xXVcGgdkPPkG3Fwm3StUkTUX49NaYkfzMFMpn99T7gnDmQQVUMjUmnTy88Tv2oFXShq",
  "key46": "2fryWNzEfg5fQdkvGsSLMQ59Vp5eJ91KzyfLWfPiYyoMxMD5ePR1dDiX8VF3FLwYKk9HhdG6LYFW6CF98ioAAL9y",
  "key47": "3aVPwiGSyjteDtFKqke2vjG84N7T1U783agKiVrzkugDgDccbBT8odYML13Ef8CxC38uDYf8Y7npEHq9iTRwYfEP",
  "key48": "4cywHdua7UAvuZHyRtgZA1a1d4S5hiPr3viVHKa3PdUYyxRjb1XcnWsPs1ASGUfhrfMAmkYAr2dJurta1eRpqdrK"
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
