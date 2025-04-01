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
    "3ebBcFSJbUeo3LYGR5WzAC6VjEAAJkd33BiMyp5newRAMkYXKRFpeMHtMuPK1X3zqcwuGacbLx4AiLcFdpXpKfPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swi6ZeEzjQA5LxA7czip3LtfoscA54cmxpfsxXeZsQAxZzckpZjErS5VYjs3CwTh3mb1HCtMGznTDg9829ht7NR",
  "key1": "2KaMXcJUdLuCEhC8SXBhSRQq9uAsZUCQ4kyQXv3dQAGrkUFYKB22vKRRmWre8wo1LWmfEMkfAQvo84UR7cu6SHF",
  "key2": "666aM3v6wX2Ef3kffZkufFHE87U4xukFNY2Yu5j7f6ieGTSiog6CenbWJKjmdmzNkDDNzqnyMbsktarEapBLAZVM",
  "key3": "2RSDydqxWGDv5Vwnv1Eb4xXbWEFCXFLyfEWrWbcmuK7iwEbJ1cWopzY2PrdZkgHNcWSAfzmfZTJrRLKZXema2BZm",
  "key4": "P89Q6Un6x9moRvNFfEctE2vZfRzmbtyZgKMhkezYw23q6uLZvWbHiDL3DPCTQkriTVADShKEkfZGZdfHJkoQahj",
  "key5": "61v855WroPLskaYcgV1vzKLG45RMBRZsAwobUYz4rwwNPSuiMKk2GY1tY1XBST1b2YWGWRrpstpd21hZKCmERGz9",
  "key6": "rWuLQtMwJq44LhQ8JZ5M5m4oh1XM2L52w2JCP4AT5d4N9CRY3uBjVZDq8fULqRyy5nrJ1DVufehFAYzokvMuDPa",
  "key7": "48wSzz4uVf76mNdbe85r9g4YdKt1RX6VjY6fEjNVvtqv8ba77n7FNH2VLbeQPQevb84Fc9obBJh3JBYggL6WiP8p",
  "key8": "5hUwPd6M5p8rVrmberyeeBSbAVrutg3GAG9efuwdkWUyvLR51hHnGEfyqqm9t6jiicdRErMvbnBCqKp5cSBZ5GCB",
  "key9": "5dfbprv7Zw359N43PjcgL3c2orobaTSGU8jfXcfgzcQ1SajD2iS1X9TmudL5zSYjm3wz68LQNBMJKiqVJDMoepcc",
  "key10": "5yzmapJGvXvWqZ6x8zT22D4TZrGV6jG7phQ5CD72FC1eYnUoaQx6NLT69AVXoVPhURQLTAiznNt97Xkq4QgAGEyR",
  "key11": "46RuucJz37qzp7seN5aHpPS1fBratWLGMeBfyePRAHTNjPRk4dVwko9qmrAbowCZWrfiyKu2kNxRwY8zyehjAjyx",
  "key12": "3H8hpEpEt9dVKmUZYh2ZcFYAHAVU97GdEC5JV7mLqM3aVUtnhsrZUSmr4ENp5EUtHvwd1imsxz83e6k841fJ1Q36",
  "key13": "2Ng5AyuBhvxVuxxABYnhD7BEVRPvdJgaR4Wc6dZCpKnfHH2wdVmHxr2aocpRTLFNL5acf2GeofmjBLjXiM1rAFem",
  "key14": "2gxYdA82LoErk3FnmQ2EVLs4r2YSczymWvpdhiyYT1ot69zvEjSwjaFqs7Mr2m29VjPbQfT8Y8zFURvYRSYtaKwo",
  "key15": "4jod6ZiRaNu7dJ4MHHCnwXNG1BxBpmdxtexTP8txqSwGU7nQ46sAiexgzGmpXLXYK8M76AdWrcbgrFXpJJmo48jT",
  "key16": "rM4Cc6sbqmRVuB3GCH9icVdDrRah9jGf4CizcwzwnxYo7Hjfqkt9hgajZ7cR1WfBePxiebmbFGuvYhXfAkVSgZz",
  "key17": "2fwYiN7azggDosy6VQHPotjAaKjKjaK4CkqBR6Lp3hoHq2GxNgm3HgtgYBHfHGuUuK7msLpWXqEmU4Rm4ApRcMpd",
  "key18": "ShkNQCCvkFveoc8KfZCPBtNw59GadrTWG4BJaju7fvHgUjCDgfuF5v2tpKqUiPmRwrX6UBALcDVa79AmK9mGUtB",
  "key19": "2BDHqDnXDuntV3XoruR8NLM2useRynTUf9WCBh9sRNTssPVc8vZEQg9XydnyLt29FZvZ3QACyqiJHyri2KF3JvZF",
  "key20": "5NNHWFUvswP1YwZxXepQ1FBGmYgka8Tt2gdRWme7bkTEVV4v54J6vQoTg3TVRD1t1YaRJPNoS4PE1M59nQJay38Q",
  "key21": "DFzHNVowRNjPrS7d8RrNe6wrJnqUinWVsU1FNhwxNxo8hdswrRLd4bf5oWrsxMjTnXSfkJdhVX5bKdLaNU3pk5Y",
  "key22": "5ZVuJVEJ6ejGhKJVxHZuqPQcB7D1vvo5VjuagUZHUqjU9JuQEeEEYnGYAouTPaDwJYQCVQLhvtH5B1UJiHQ1rQoH",
  "key23": "524fxXxdjvc6RWesJTZQbyyZDvJudWFZcewGcFBL9wSTSN9W9BWnS5uS9tHLGpK78sbiDYQds7W2tFtsDQMYa16t",
  "key24": "3tVNqrvCxCwwqXGqXLbbA3Kg8aQgE7zaXJ2K1WEHRwv1uzLrWEv89nvByxLR5W5QSDeW1Zan95e6g2LuuLW6cDcL",
  "key25": "2jgw7dvV1TYrkEfXSFViNyhCfUi8VdN95fJUYuuLeG6FNweqC2NdRQUDmZmJfA1ZpHLSZodb5gEWcmRDroBT82g9",
  "key26": "4VyrHegtycsvLLmmPPtBdahkuq6RX9xqH7VaiShZ6LeXmqxobrEKvGj1pdKbV3Zd95P7mMHowZNErRXMGdeFRRij",
  "key27": "BNwkPYrfRUR3UUPn6yvLZAbffLc6m1tHjifNB6Y7scJnwbpkK4RGuCJvvbCghSrn6xKNMDwdxx8eHjfjiZpdhJa",
  "key28": "4FGJZweTuzFJ5ftE1ZmGkDd4owXd6HGihYio6PcGj8ih7k19XbkU32YsqcuhBNjBhgjJ89xNM2qe8qZHeV9Qsyci",
  "key29": "2zsoPgTAaBBvhzudKVGyMJqUqrhYVcBZjhhhCUbmGusPCN7rTDsF4xmjodsiA7hYCp69g7Az1KypNv4ixtvnjxU9",
  "key30": "9316bYekyvZBpDF59ELompinosaRqkQJMXD8TyyGs91DxhFcPhuTHQmgFhUzHNwnsWX9FqLT3yAeCUt48Qbcxk1",
  "key31": "3dWdJjXNBqtnGTzSANP7rU1wZRUS4c8MJcqYfJnJbQtnuefFoJmVFhWyMn9SzhUHza1kz71p3uTvpDGDtTGfQLzj",
  "key32": "4HiVJyX5Zg2qiF9otxe2FDGs8QtJeDAiYkTDFMq4haXefyEpEt4osUFHtGhWNMRvR3mMB7A9aMpqLYSRDm1WqXvr",
  "key33": "3udRxNqGg6CwTD2CW7CFTxeMXXg6Dv1fewfqoTht6YboaTBkAPF3iuwE5V6R61aZJ8E94pUbAc6hmD981B4VE2wH",
  "key34": "2n31nWpUYqZnan18e4bfRvVtgvDZq3uPUk8N93TLDHAV6poZFbtaaFAPvTNE7Y7tTV2aBxkHm86xzZa3JZZoqasf",
  "key35": "62FgJZLtwhk9Ut1H264XCby3TruMT3kWARAQPCHP1Tpwas5jmwNJCZTQYFzfejGZ54ykZ1zXg8ghJtQRVqozXB3k",
  "key36": "4LmjfnA83SGaYfjUvrDNmAUaEwLgnaATt5KU2BvduadWXNw3bMPdfveFH34noZRJFio9otYGG67v2aVb7vZ7MqNU",
  "key37": "mdssf6B1m3uTdW8DyuBwo89pVcej1GsikRVG4DV7cU63JeT1qi1Lk2p644MYyzUjeNAyFqh6o1y4tU3QADpcXiV",
  "key38": "5WCYggtLja1YBYMNkv7shyytbkNyDhrLsz5zcsnaG7h5espQPqknmv4EAUy3siWFqHGkJoX8YAaEQYD72Qj4eUkE",
  "key39": "5no3FEjpZnwcdXPgdLPJk6xP34dRtFE4BCR3FLfp7TfgchgsxBYaj6NAd7CcCsp4nPhWYZFs4T6x2zCWF2zazW7J",
  "key40": "2wcug3LdigdDwVTcmiQYb1aGFxJvNtNqBv86R7DS1bx1f3LJ1B1nguxAxRGr89p3KwcyeEzUqBpBQCMB5jqBKBXZ",
  "key41": "cujm9jqMkXvsJZKL5mQMEUA82vKVnSdPt9bNQCwJJkgUSgvghbJnFj32BjQwxhu4HDJeyrvR8Je5QQ1xSGLFCMh",
  "key42": "42d1yGcWiHmEbErFBUGaj9ZcD4cdhMJvpmJafov6BDPA44XVnrFKehKF3vv8wgKamJU6LNpLy22sQMQ4E7Uc3yHF",
  "key43": "4GWC8fNGBvPY7NHFrQzSDkmAY2ysVtMQfV4NnYaSvr9ZKaGa9wZ85G2FPXN6dGa7tkRcgbMAcwQNWeCR6JycY7um",
  "key44": "3iEfGKogghStY8JBNoAwEoY4ER7GumUFKSqnVsWzd3aCd1Fm7ASY9uScySibirdHYqtqWN1WziveHabEh3jpxEWJ"
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
