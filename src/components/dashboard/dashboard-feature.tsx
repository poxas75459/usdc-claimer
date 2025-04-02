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
    "563Gy92vXyxeEwxZBeqQ6xDig8Fa1pmxpE1wmCgDK7PbNzaLJQxUxiJh2LuqnCVgLPTwo4MmXiaSLgrzcdcbVF6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmXhagJLJkSDzrmeSDpUavxzSpi4tnpjDJXtyDFQNHDk7SVn2NHarywvvQT4PgM3qixEUwsSmpM8r6qpqix8vXR",
  "key1": "52wqeyyDTKPHyvRxLPi5RZPQu3LeagnWtDHFUeWHMMJntfmbxhSJjZex7ZRuaJKMapBXRqyWkge2t9upSiT3VqgR",
  "key2": "5LAuvvTnYjFWaDUqWY8mDqzKk67KnhJN6nbszHj1hGVAMnk34gcanm3EeQQbe7qk3D3aw6v6PrV9QCzZjdTs3hcu",
  "key3": "5w9BgqR3uHdz6LYttfaKAY55EqriSGxe6oBm49LACw8cbsTDpgdpd1oTmiChz6TdtV9Xcccc1vmtGqUwWQ2gqQem",
  "key4": "2vRiKTGiSZY7SkSDM7AyorE97VDv8nTMbMysBFrSkmaXcVzCzZNiyeYdDDeTcpPiwgaDNgKvJHTBv5aZp2ov7UE3",
  "key5": "VDYzwbbYeWxDASrTK3K9NT9QDSSG1tsq92Jzqz3oqgxya5DELcq5pyzRLvoXhRdkfhiw2DcVyAEeAJUSR3bafQ6",
  "key6": "22o4WzzCUpzdVTQrhvAkKRKgNNkxm5eDquym38LS5g9PUw73j7j8bD9umzYaNACtc4XLWgUcQ5YJ32zh4e2Frqz6",
  "key7": "5tY3ARcMxdzkjDZrNmBvizEcnaV12DjB2Yo3PshiDfEzw5dhNiVnpxMtvyeHRwShJkfEjmjK4SGUQDVqzR7ECGA8",
  "key8": "2xajLRmsvuWvD2pCVTBnGUagYRymB8J5jdWHtT2MmiAcpAJ2aGZpbN4oDyKMaeuj2Vc7yNVhWmSudETEfH7NaYMe",
  "key9": "EQ6pjKg75yfZGnReN2rm2g3Jg4Yvu2ytPWbebfkAprPY54BpJYsR3Q3wsUXKvy1w3SidGtVQcdwbKQkYEMPqLEV",
  "key10": "3Ajdkt7K62SF8kZoSsyaW1CmUsyQdUwYbcQqZyWyEKLQTt7571Xt2VtDrZA8NNrrZs77NgjLshy8vURsoNSQevsP",
  "key11": "4DdeJo5pyVrzNxHMCGfbuYdaadBWui6jMc9By3WRRAKukpXBLJ1Quiqj3GriaRjNJ7WHDSd2N7T5yKzyhT4EbVqP",
  "key12": "cCfNRxdqR8LZFe5uZtirouyM2EaDasKBLMRtxwDkkF7jRdF5H1k4fivHWniKynbMCq3tj9of6hCV5b8WrRsT312",
  "key13": "3ftgUAschVUqLobL355hKNKQmPiYwavrxbEPzv1NwPb1scQNu6BJBJ1dgMQsSsrQZV4TaRWAq7rPPzXhVQbEMhrC",
  "key14": "64PYLrnyhFqdv3TpeeRVoqurzWtEH286USrTrYahiHzrvCY2sZh7bsjqNL7ECqFEevAz5FTBJJifxSTLMjztGY9R",
  "key15": "4K2HD1E3oPCTC8dhBmHqEdfWGy9UVYVgwGWWK4c6LjP1GqxkuRpWx1JC5mcPdqryz1VWWhtq9rq6aiLAhXWno4y1",
  "key16": "2CxWTmNCPP7ijAfEfUivbtCRr8K4tKR9C1jW9tbECnD9eQtxWADdVpqaosfMqnMZ3AqzQri5JUziWXVium2wnk3c",
  "key17": "4fwLycyntiFVECbHu6VjNg6AL4a5UYwoqXGh8digcTmL2s2M1v8TZXELuECvufi6nUHhFh5cS4LxYjbh7TaqwqK",
  "key18": "4xjUYxuShuKZ2rMjiLfJUbZW8iC4S4FmDRMUCgzoTZiGdSSRCaMV2sN81ucJAgd2RoCJU3YvRkLzSA5Ss24MyE6j",
  "key19": "5dGHUhWncgDhKsiuUJwN2RdEKvfciVCTeL7iCdCaADJTutrZU53khEN2XkPQGHeWqg7Ps7msL3r26X8pyy9tzK1e",
  "key20": "3jEQ5wWqHSDKvX8xmr2ukJ75G7sWYAyUYPVHiSccyUMbPVoqfqwZPbBgsWjiYNeb7QA5WBECjPdM3533tFH3Bs9H",
  "key21": "2cmyQUMTpaopqncuR2GQfh6HcC4J97YUmWRN4MtDcaDa45Wi6vzdAmN6eHJmT8HVsFXdnv8XXBRq1XAF1APAzjZj",
  "key22": "59JhG4GUFpFG7kfFki2C7J7oya8PJfEnWonZfFWyauF8vvXhzNhk6z5sHwxdJ7fefH31vXjrpD83uEL31vKUXQvR",
  "key23": "4xHvQF4abxNVErxL44dVWPqWLutouZEPqMyUT33TComth1N112HAJmT5njbAY9aSTJ2PRjxPxg1Ekgd3fmxUkWj",
  "key24": "3G7TqK3GMqUzXrY1PMfDfDJMFqDmmFjSwEwtMBSrWw7aDBPsVCJipzto7dY5RevFZg1StCyxuzUL2dd2LHGPdTCN",
  "key25": "pY7QWU4eH9xpNRzpNGs88ab82qSi4bbSjWeTCZafGQmHFEGdsxdX2eFfRjwAQjtwdUpAhCFoq8pypjXNV3wvC32",
  "key26": "3LBCuiBoAnHUZNNvtxVxpcYL55aXbbj9RKYpHRAwyA3qKTGWvUdMBVXb4XTw8oUMrjddCSTXUzYpntgFrxTvowE",
  "key27": "2RLFMGwMd3eCXTKrJ3oJfNH6EmcY9cgCnWDobgpKr7N3ecLwuH4b8kjM1tgAfPDwvpXnB4R87qxEHEXg71pLzai7",
  "key28": "3doWs1BifkgVxJnvMNLb3KewVuoQ9dmZgdiR1Ztw6jRWvkqUDosbr7mryZpdu1RnYKgm2699M1vZWV5wVnN3gvc2",
  "key29": "2fy3Afs2Hy5Kpvs1tZhYJk8eKr8YmDAHNLbzQVr18PeLhW15x83pAPNDB1J3VJVSm1dNzP387avKUEJJQ9A17P4n",
  "key30": "pD6pTuvmAHV9q24y46U9EMQH4KQN2h2iXoSCZW2tWYnHCmZ9KjW7Ry1N5hQKNcg3T4trNqtkbTN6jCLQkT56Dxc",
  "key31": "S3yDWWTp2DqUTZhaJoDTxeJHroMV8LcPVXkjRrXbt8Y3wiFTkCKqiihtDF3pmVzu65W7XpYBYVRrMhEZ2BxCknF",
  "key32": "2AxXanoQDYc7QTsokvZ1UQ4fGFLpAAWheMNMxFRACSw9vPpQTj1BmBwuPFb97VztnnMvgsvsVJo9geV3vVDyeTUL",
  "key33": "5VuZSFnKNabSzeCJuRPCWByK6VR2jg8nbJHZYpwfMSkUc6ZSTxfCYQq6n1xMspHLGQ3WgaeUqhTvvX75WCD95h71",
  "key34": "2mgCyRGkyVv1wTPYhr5bsEArJvhfi6CAkoDq3gQS2Ud7yESfrWB2MEQbB5G8aB7ytZ3DURDt71mLhf9NvefSWXGF",
  "key35": "VpSopJ94JgDYb5quMTCpkqLj3swSt3ciGi6cg4g9na7jXHUMV1XPskQaFqR2rFrY16vf8LsBrXWT2UGHneNMQft",
  "key36": "52iMUZfnNnRhUnU2c13J1aPQ2E1ZmRJzte7Hg5YGvJrGA59rKFg94bezLkei4HzTRE9SgLwHTZVbxPZ8CyyfAiAH",
  "key37": "5KzfXjh3yaod5aW59pt9h95Hd75mfstecrK5hCT6yh9JgWZBzjaVtiAtVvhhbqLYgFMPBFZCyyPAGhRwbFpjfNW8",
  "key38": "EDEFSUj2cZchJ4Gu8sFGAUxRYqmsauNC1ekTxtDviNi44zH6LPs2VnXFh3vAE4LouJMxHho4ycNP2NcbTZcnXCz",
  "key39": "5niJWk2tfGhJZQ55XGkCYB9WSYHxXLfdzs4foJ5KsKMGkXTt9zCZJvVFobHPAEtZh9eGQaQhNXUChdqdCdy3uJoP",
  "key40": "4E8DgeWegx5jfa1J6NyTGmoCFtgZxqiwuKZHGjeSLvbYwqVUGmHSx3giVYCKr9aevDy4fHt8weNJXYSB4TJiz5PY",
  "key41": "5Pk2gq6VQjEVkKjvmXRRDi8Sfovq79WoDoFGezfnSRKrBi2HXRKp2mgRY89CSdjeXM9zGqdU6dYGBFxFPLqyP7Y",
  "key42": "3m2Y3M2uGyN2jigoZrtMQh7jmNAYebuYW19pVsQ65BiCEAumPSqvrTXDx5pSDMoEpWHRjzHWzqCGxenH81SVEVbJ",
  "key43": "3nfJcujr8BA2rPv3x9DHMc1jwZHqdGUe6UqGxecB549ePP3vG6tnDqFb5gJsPBMd3v9LAcVRr9RgawP8bpVsfzbs",
  "key44": "472Lrtza5oLdDanxjbXo3NoWmYuVUiSUM1tFU7dgrv17gBwNwijUddNwvaM4CZo6z3mMB6TVCkijy41Km1GUqMFP",
  "key45": "4CMZmmteHYo5DfSvvUHfNSdkn3TvXei7aEjAjGtn4sxrpYaineYMjQR9wPuBJY1jwf4JuHfQEqV9NFVtJ1fMexvL"
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
