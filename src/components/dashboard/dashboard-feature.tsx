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
    "5m8i1Bvro4LWsRNBAxLqjCcFjwG6PEDh45r1qiNf7Ve17ZGChSL6U1TD9XUukvCZ6qGmk8eKaoyuTu2pxyHWk3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LC51ZizvsotGxkE4idXjC8F5U3V2uV9KsiWhjjXur62crjFYCgMDmbcRhsXiSHKMCKkeDcja3uF6tKDcckZEyf8",
  "key1": "3paxcqPxsE4vYCBX65R7wow2b1jyaQRUkjTGkmctDEEYLqE9CRduAtG5UwqgYrWE4PNXoRHZvTy5RYfusoUBu5Pq",
  "key2": "58FCwDq3bwizzMAzmbzvQQ4BTcQZP19AtLJWCet6f7Pvgn2jUFx1Qs4CtuFYig7aJSaFEvQHjjY4hi99b9f8Dz77",
  "key3": "5MDBK8pWcQFJfD9igiqViHycGSLuW5bELLbo3BNKpuq52buMi5nPnYY3JCJkAeriWa4MDZDRhf9nYqmVzE2ZJhym",
  "key4": "3zp7cuXbnsHc44JimBnvnKuZxVfui1owZobvRBErE5hyPDECfQ3nqxir38aZTzqpuy8gkdvpPVNwVayCtWKjpww9",
  "key5": "28FdCVQ2jSFhLBnLQsJh8eUv68EU42sKceunYNTJPDxCA4tfTUgU41GagEBKbibQ3d7Ku3wP3DisJNSDCNtsrveQ",
  "key6": "2pVqj7UUdrZa2vk6wYdGArDVfXotwTtV6w9EX5sAuqiSHJN3Nb5QsQ3drfA45hkTs2yRuwQepEYuNqt92SNbiy9M",
  "key7": "58R6sZYEofqtJwfdm6CaQpMZfobbunGT72v35sVYuJu3nD82H3hFafPFqT7g3ZfkS8EDsdDyzTj1MraRyfHbUsdy",
  "key8": "5ui4j5nb6Qmd3ThzezjU2J5PggKJJNDJtb1gGadUH16XNeezZ44SuWN7fxLfptYUyQpTv2SHWSr8EsrdajX1oYbF",
  "key9": "3Cy9Gwuy41ZPCj4CKYgTh4x8QjwTBrN1dHu6VJCb6eKDfyFQBhcGzyRgDn1adnrAQJV1ippJT85eKtrsNuk3Qzhc",
  "key10": "59WdjTR9pQZHFoTgGXzNGkaDA1Sv8aWPc8vaCRbZL7nE25AgpjPTDu7E4Wdeu98184pPT6PJzM8foZqa26Mv9nAy",
  "key11": "Pc48J59q6Qecj6t4vqeRpV7rZYneHC9E9oRbrXiKCxxMf2HowYDS3NzsYKamApJqgisaCR4Ahmy9BGzeZvSNBcp",
  "key12": "2sMKpNpnnzYacad1Up6Vo3sCUbpdSHQta33UF71BoqikEqHvhmmrTRgyxWrKPpbfkyKvMdPFWXieQP2NSxtubv1n",
  "key13": "4gL3njFnQYmvSkiphXC7bpLobjuMbwjXk1RL4ifp54axAmSLytduZhgsDyjXU2rbxmCv87DvaXJsqxrHQGQuE7Bd",
  "key14": "4WmhU1PwTTH8LVU5QdDkDXKUh5aQKrmtVjhBjLP6Mm4ZFpbaD8zJ6QNHAoobNQQzh5pPn1a6ky1uAFivPgnjWWV6",
  "key15": "aGD4wciyZ3fQDmG5Uk4oA7FLuQZxUTgHkLZS1xVcyKhutvTgcWa3AsbAgM5KK87xbMZKJ5Q4K72UfbkUVhjEbZz",
  "key16": "4twWXqJP3v75iqBZUgx4w3USwwfLjkTDGWGKnFsrxkw7LQSPGfLTBRnB2i9N944myttJk9znVc7A82HwTtE9ZoUT",
  "key17": "fPDLXeFVxs1iGow4m5SELiSE3yZS6aiVKTzzWhftRiiGQo3ggoEahk84NSCNnFLQzjFtK8zATWS7cAYvgez8uhe",
  "key18": "4YfS7tM77ZXQ4fgQDcMPa7b8xWzwfL95w3LLYZhQEgrg4yD1hpyJHjqsZFSDAFz6CzcG8xPK9Jmiv5wLsgp96Ak9",
  "key19": "5T2W6CqE87NAHStUHwLcBmbfpfm3gj15zvm1h9GZhu1PkyKaaT5fqTKBtdsuqunznP3yXnnS1ViJGi289hMQWDkf",
  "key20": "547ebqueSCkXfz3X9vhFQkXfeUnRPowDF7ko8qZbyRbkbKzvGqzBGMoAEeP22VZfv97w8zR5W6QTPxnkpXivNQbP",
  "key21": "2m6Vny4ma1LV5AMMe68oCVNdauLBVvw75PdaHagm7uaiH4K1XoxsinY8kYuPJYHZikVxwzjZg5dk954GSmexkBAa",
  "key22": "515iAGoLQwWDE21oFKra8GEUSjnyGDnX5dw6zz2D9WMz3td27JDFgz2jbPLCJfSF2fZaKRps66LWZEEHG2JHBAJF",
  "key23": "3xngHiFYbNThDZJs8dCWKZHXqsJX8XYuyv1roV8jLwQbM8cL2M6TxG3nzLdsSyXYsQSeSeBWQ5n5erC5Bk4zwQJj",
  "key24": "2uTVG5Jw8bec62pjJfW2gsKsd5jhU7nE9SqbvUtGqKqi4eiRT5MtrPZ3CMqFE4TboUrB8BoLtWbqp7gMrQLDPfs",
  "key25": "43C2VywW77TmsoP9LF8sWveTdSaRpv3ajHmxbucBETaWSX8nt3pgSUczu1cW3Q4EnKiGcy5JkcUtmKy8QBy68sbS",
  "key26": "4WR3B3fPnDRV114YFXdKecSxfJHt7MKGPHEpPufTR2SRFZxQtf2oUEfPZ28ZrMpvBsPvbm1uFiLeoe9LqoAByEaL",
  "key27": "2MrV4cznTPQjmJKF7EaRQS1oq487aLP7d14QFdQoQqE32ubHJE1ZeCZgoLTG69hpTYpfJv5wfgh4LBuMsdVRx1is"
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
