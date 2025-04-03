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
    "2pdCNSHBA2vnHtwwsXrV2kGV7JYFpe8XRuw9WXsQ27XyJcSM5xGm1mevGKLTuxL7VsTiZkfw1AvVMePbJw2Jp5qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVfTQGHRKSt7DWwqY39VeW4iVEzaL7n1NWWxEgda4mxM1V9CFXptJ2bXWQj5HYd9ozK3repTZwaw19bu13NAAWx",
  "key1": "5pY9MuYGHNFcii9dq3MqkTJiQREv4Txggxh8XpbghnGRAx8ph6MRjN9skDohjrQuQu6hZp4tFPGwqSQ5BRvDQb8C",
  "key2": "5iZSjQa6nPAfXTmgfDreChrV4rqb8haWgq8tDycmChMTUJTsGtrfokWuJeBQ8SePTstnGxhGBsekHBDoxtqwXf7z",
  "key3": "5z79kNhHDz47jHcSLeGmbn9UES6uPy9dT1aXN8tGyGtrgjyXNZQjDTvhgFcJQE4nj5ZYwSHC8cVsStuKrTuaVeDz",
  "key4": "33REfXVUe7ivhh3tDj6vW8bdw4UASeFZuwgtBzQFppGmx8ty8pB2QjCmNm8Q8uejA9udwPRYjHcRsrntcN2myAs7",
  "key5": "3hDv4zTe8CXwAzf9X85dnY2GmUX3VT8h6qmy5DeEY5phDDrYZavYNe3zg3yDQBKftCgu5A1mkFme32Q6yPcR8J9S",
  "key6": "2M65w4NpMK55n5bo7TJLSfnjsgZ6JNdFpV7XDFk76fpJQo4zi1jE4W5WmpBL22xSnVWuLQanwwy74VHLXnyzk6Xh",
  "key7": "3uX4JtsUB7Vy1DRBohUyAr9RwtBbFwF3kcXoNWk1XWoooEsqpKYxEpmVKrjspjjndXpZWYEMd7Hiq16ocUCy99BQ",
  "key8": "4Vuxtch2Zugaw7FFj5znrLido3CeDfHrJWqLbBXfZhkHXUfj7wbTTpG7yWevbSXAcJBHR8jZJzphLcABQNhuc52L",
  "key9": "ZeP6tKApCSH5crqdCC66p4U53CQyLQX8mTawwUfh9wFF5fjFiEQC3Z1LBD5y2TpjmFi3cWu6Bd4giM92bDbjhXB",
  "key10": "2Bv2bEi65iDQBKWVtc9dJUD8BdxtLydsWHtTRfY7XSH2RrMZa2845ECJF9Xw88B6J46U6A3AieVj9sf3gEJQ8g74",
  "key11": "4GsL7Xnpr1ZEqWjGWk72sJy9Q4NXH1DcPuZjDKxNFhHbfoURDqatoE5zvdHUL6otJUFwJBUJqWjTEkphANZDHhrT",
  "key12": "2shH3hFc6S9P4BLtieACiUkgg566Q9Xyw8o74Mo3V4Es5RzeL5Kxk8td6qdf2GPyuzGJGeq9g15USrF69zWmeFaw",
  "key13": "3YHXQXSgt8PnC4d1f1A3q3i5iWZ2neFjHmw7SzNV3aJBB9WwKpqEQSLAPq9W1NjEsMNXzBYMqTkpageA6BuW4Cxo",
  "key14": "3QbkmowbxrpSDXsmqZM18W9stVUyYweohbtCRrGbDFLrfwhDDoqY3DdK3EKfWKyF1AxCQRYmMaaqMRFUh84gSPZn",
  "key15": "66wqtFZFa1isG18ZteEuvsDzwQA5qCUT4ALAtJWPPMevGA4dFuA7f9YLQgSEQrYwnp6bEeAZ2kmmfoW5kohdWa4N",
  "key16": "54SDt6N3XkZ9Gt76fgsVdYHUeTPqyvn8BLD9xbY7xzJ6g3w2SBY2FE1d4KRVToeoZ5tmiY3CHpirYe5F1Wy4ivn",
  "key17": "4giqTrGqJ9MrnQvNV4ZDdzicERNQ4XcV5wGgsSo6JRhxA5JofekWeKvFdnwyr1coQYxRRsbWuit4W9QDkH1n7ALm",
  "key18": "4uVL4E4TPgL7gqGxCcjth8AuFAjquvvXEa8JG8byBAodmvZmDXA8zqn1RdKbRr4Ry99mVbn8zLcZALashJ2bRA8K",
  "key19": "3UocBV8pfNPLbsnmxyUppqhzZ8GnLZNUz8tybxgcGpxSkeVuV7VgSdTAsCS8svQwkLUwzrRUfk5zcKbFxTg8wkkV",
  "key20": "41hsTdahhPNRsnP7fHFTK62xKDV1Y8bMn3xiVvgoNCu1weNNft77C65ubhHr4VtHBCad9byi7rd9AdwyfPofVurC",
  "key21": "mXBVpCkiZ9nhvgC9iYcVdceDgvdFnJGBnDk7G87D9njujnTHsRGGJDt1JibpMF8rQtk3nwVxacZ62UdDs6m8vKD",
  "key22": "3YNh899yPsryBddm3pxzvNpyiNSKMvkRkjt2g3uCoakskMjiDFkbJ5bUjFBhUVb1qsqAVDjKxTHDHSfRJwC24gor",
  "key23": "32zic2hNQKyA3r5FA3wP2dHdzcNPXGEGnsSBVMZ43kVDJy8FUMDXMMRZP28rt3yt1PaW9XjxssScMND9T5Qiyn63",
  "key24": "2khJyYZPekW1wENoLZBWHModmokeDkb5yqauH1phyM14qnPQ1JyAPvo7ngFkjvgFuGHHH3qxfAYwixJ52o3tdzu9",
  "key25": "65HAsTJAkomHR6omQSrvQsKETh6MdprkqPHzjLNEcQABXEG3zAGesb4zXbNWm7nykSRjrqgwujCi5qL2N4seuh9A",
  "key26": "4vVuo5VgoaEb8Pbm23MKg7ZAKNWLwwoqapzP73VcWRRYDAfchQ4uMZZcGsugQtwD8MTqxuQtskJPPWb3hfkmtx7f",
  "key27": "5ymFmxfBZE4hcUCYnYk7ZhDYuh4K6xPevuBGG33ww9p8fXgqzMTUjmRGik6fxMfJXrMF3gC6G8dkgkUjq4kMAf5e",
  "key28": "5CnkzaHkLdvfHVfL9wb866kSf9WXnymDM7fd8PdpTfjRKXyHc2aPSvQTRQZAu78knha8fonvgEod9ACiNd7ZfvWe",
  "key29": "2iw45jSk3FnUXSRaaHJEpyNr32GR2qPF29qRL2HpiggLssx68dAn3xzyYA9M1ZafoggE3MpfKiNwYDS3cJxc3cKf",
  "key30": "ugDCKe2Ls7oXBmP1sUCz8AVohafza4GPp9gx4U8Jez5EEhYfYEopTXe7uoLeTjUajfoFDRLr2RgazFZ44SAGato",
  "key31": "3ETNQBXkB3KijJDXHZDX127wPzLbFjyChzxDkVWWjmvXhQbiM3vfSK8sXxdy3vLXD3SPRM9KHZ8uZNwkYm37t3oG",
  "key32": "4vVepdodmzae2zdzb2LPxDn49m71Mcq1gZT3tv9xt7koJ53S57B4peFWstUcm99UPRU28BgcztpGS2Vg7NDHuJiS",
  "key33": "2ZyWbKv2qkH1pFodQNSZs7obeW2bNd8nToia9Gf3yQNTwc9LBGHqhm6teGAmMDdZ3zUbJP6cXe8wWageccw5WELr",
  "key34": "4izceeZWjw4ti5Z9HFtJCHH5r5k8ZqLzUhv4bvJGnaFNMkFppL7TcQzEAho7XTsgtUqen39xfGxPpvKwnmtoexMS",
  "key35": "4cmP1m6rmWxj1qPoBSAZVYj3jQqiQyf6MQzyYbzLx25DUhrP1NgqjkVR8TggYewdGCVJoqdmz5PrLsbjNubWzGrQ",
  "key36": "4c8xQ5FHuneEFm4EzsHM7sQpZZSf65j4LwVbsLMDC2wBz2MNbxW9RHAFyhvkJzdypjnFTmuzhRfAubhFZskMaK8s",
  "key37": "44VGMdzGrhyoj9Zc3dUw7wuBehpW94KSs6QukkidfeetJeGj63Jczn7PB9f9iTk52ZHTit3zqtSMoEG4FsQvmP1G",
  "key38": "5CYb4v4KAdpvseFcVmU6bfz2NMt7KaZmUP2ujTw42XA6kSkyoSBWmgqgZ7BsShbdYmWfE6Qkt6kZBTRhJB16a4Qm",
  "key39": "DGgLgMBEJPeg18p4d94CAwrGzxoyQo7zrtkdxWmcN9xGfNFWtET4XaJzLQ4ccxhaWaCHEGH79aJMQjP7HR6RkLD",
  "key40": "3n2quuUNGmdvQ7ehpXZtEWHFMuJbVVEPNaW9gSgPW1vjboDnAfzcGZ6LtnanxJsJSbHP58GTAdQroHLSGHTFQ3mr",
  "key41": "7H2mR23HLvJqFFB122bShmz8K5chZiarqziXbZz2Lr5oLSc9MSxJ91GYoAEYt59K1zYT2RXM7KngudDmLD9eDQc",
  "key42": "4EvhYr9SoP9wC3KpeMJsjY6a7H72KQ65xYmJY6Dz2VxzaDY4jUwb37mWnVnixin1M6YYScEnqE99Pnq8q7pz5tT7",
  "key43": "kHUPJjXs2VEg8rt3Ci9Xc1YQ3GTj21z5a6nZqNkCAGXsdaopt5fSX9mTZDkWivr3qa6A4t3zV2u9HnS73h6yY3A",
  "key44": "4Khg2Hv7cLr8AdvwELiHBJGEW6okbUYcPRoREiR3PquX1C5BKW6CvwoVydWbJ8JBPqDD6ZEkigkDXqtNcx5iCo74",
  "key45": "uhx58zG5Lfr4Ev5mYid6X9cLGgCNFjYg8MQqXScszCiGJdekSuhv7yHY1nssfMeMrfWxby2EaFikTd6YYBByMyC",
  "key46": "35TmA66f8YBkbcZ5A2YN4wGR2f7wE4KW2c7dr5xKuTWzJyk7JstLhd4rTae6EAmTffQvDrHXpS8qv4EfwEErkBUP",
  "key47": "2DVVBFbtoh7psdUptCArq65kLqU51E71sxZF56qGGgpotPwqFPKwDc7jrozkML8WV59mP5Knwm6FzjQFVZSYPeEK",
  "key48": "2ot6rfMqvfcQmb9eyRqLnYWkLReoME9XsaQ5B5kUPDrR395vQYANUfPJ3FHBSHyYBTE5JK4RZ74EGKZRP38DQAUr",
  "key49": "dWW9rEP2hMwbnbfJp8CxR2W2wueh2jssztUcBXgwtpmEr4MCe3Kp47B3MfEMHPNCybyif99FE2jiefkq9NCKPZE"
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
