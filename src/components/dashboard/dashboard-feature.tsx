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
    "5fLWB5PWJg1YXeo7ViqoGW17GUpA5Lq811r3yshcXreyeuBMsZHdGEp3rDNrKXndAkNPDJhRoKcTYzvbsPDbFV3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r2QECe3e5BaiesBYcmmhH5UB5g8oFGPtd7kqDpvkEmigVziEpSqo8grEk48kmA26ahtzyHEm3orNyRHQ4ogQA4r",
  "key1": "5d7J1MegFDzHzPJXSmLMY7WJe67L2hRpPCwZUQtGWCwhTv9v98czWJcqx1q35TkraJ7dabJupFuZ3AGDiEAgXfod",
  "key2": "2Fch9igLR2tDTSFr3kim1hApczubSDnvRzwzty8zJqNewdqiYygu2iUq84xugW6BK3A42aicrgkUkLn5e4DHoKUw",
  "key3": "54iNA81UBrsC4iX71x5d4rqdMxXMLfTYuJ27fFnLJ65uvkm62uCZgi1j1a8NU1wV27URVo56tAKRmGgiaUXLjZG6",
  "key4": "5qyhAkjR53iQQiriVGwve3MM2GwaoL2EY4m6cbhBowdX1ofHURoWVXkq8WX21ikarK9Lk5WLimdzTmVBnUr5c7Vw",
  "key5": "5ToRXqYR2dTxom1wqm3ZzS9h5goQNdhka146LDaaXehjY8w2BDKU2n9WpkqBg31GX882pH6Da6UMjhZnus8PgX3E",
  "key6": "NomPhJ2CCPG8CFnrfmBjHtQJzJ4EUTwZz1GmuBMc3UczeThePVxaVr2fHtnCVENG5etDnT9LGaAM53Ex379BuHe",
  "key7": "4Xf26dJQzA7gxptdjfnHjyG8AL1rxrNqPKiHMHMJWrCp3PhnPvn81rDQ7dhqjFUuqyZ4E472tke9wgWtqMYyT7qh",
  "key8": "5aq9KmgKCxanwPnSMbG3EQTPTbBRUdpGZ6Cse27QKCw114LCi8GTMNk91R5pfptZabXsisZZ1ZC6rt3FuRSw91XF",
  "key9": "g1Sn1QzajU9xc6dMVQ19Uig1e2o6D6kBN2EXcAp5dKEM1WPsDuV5tYFQWaR9E9Uszf47HVPdUf4m8Jt7Vp7nacN",
  "key10": "2q21MkByccjwbmsP6UHn7dQzAaQXEBJepZWEMVvWUqmRQDkd6wfgguL3an5eJBtrKjDJCwiNRGD2YXuLwLGMHexj",
  "key11": "558xtPTPKkeVwMhEvWmfoMCRKuYdnrK6qA3yzoP9wR2Q2JQknUiUAsFigMXLug5iYBruj6HQMTjSS8MVZ6VkYhZB",
  "key12": "2miG1ypMQjQH753qD4s1tGWzn8QNokaUa8HfLRpjPxBhQE25WYsAh5V2yWnfBQ6wpztykNd3K8NBhEiAcYHaudTk",
  "key13": "5omfna5CPg6B7o2dVURdZMwZWhZLYScFGGeY5urQpiXKak2zggQWAKQjE7dkNfGU7k52hGUSXBg5zBiCemdotybm",
  "key14": "2MzBj6Ly9JjBu4Zkb83U2TxMKE2347yNvJehzJdRLHL6mpt5x7sqs2aHT4Lpxu9XpeufKN6FGWASJnBfLCL1Bybm",
  "key15": "qWG3fGGeP4LsXKLVbN9ykx74oAGzStG2SJWeBQByXpyrzyhFUhD9M2VR7birXRXXaFgP7xgnCnyR2SpUFrq4Wvd",
  "key16": "3W8Z2jH2HvcVyUtshy3usQso3jL2729A2rhXoUT23nHcXvMy9sThtqTm8jLpXptnoUyr6GjxxDGciZVC7LfkCAtj",
  "key17": "665bPovn65oYHoaEFjtGfSxkne1Zn5oCRQTWFCADW1sxtFnTR5cr2Lpq5RC4vx6mq1Ghz678sP4kvbJidCYVwKtS",
  "key18": "2naETe7auQ4f9i2TJLYp3761Tjmekgk6CoDFdCaacc3fNxi2f9ZxG31DzpZEkH5F1PoE2HVZo5Sef451PVFZq9Kd",
  "key19": "3QgRQsUWyzd41wnHgpgxKbX8BsNSt9G33jnDLQq32dS93Bc8BRcTNVETUd6jxxWBcW3JeuS9CK3GtBfrxKbHbxE7",
  "key20": "3oNCdu7Vr4Loosc2WRcYrme7QtuZJGFLX56JvWk8zezmg4ZmcrSumHXjnmLdcjqA1JwU9zhmtmYmb7Rdq5yoAYUa",
  "key21": "5YP6SMbup2GgVfJZHGE3FAuDytUDoSG7yca6eqSZ3cTssJYrWQoSMH1QUi8QvqK41ECtDrgkHB6Zu6YcCQ6Bi7jX",
  "key22": "3JohLhrATRFsToFenUFwbiCsLE5a823avs6s1DGQPJjvEgqb5HD6cnmwvSMJgLMjZ2NuRfJhx9Cc4upptpQFzkNr",
  "key23": "3sfzLNjh13wcfPEXMvpRuwxdYY6sSc8ztgaeTTBeBbSjTJouH9gocVnhY6Wb7jrzjx3gtMirfqJQAATwWWkL2xCm",
  "key24": "BX6eU7bu4MJT8axu1iA2VneS8gcMC3ctLiqhzksS95t1vLeXefvry1Lk6EJUMMM8vxDe1cixAGqmMxruQwmRaue",
  "key25": "4TzH7GP2jBcvMa3GKxvLgRVU71SiUsGwCWhxhjuszt6jAAreHoTZ3FSTM6bkja2QRQ8L1438195SAYX9c7Swa3ZD",
  "key26": "2W3gUEcLLBQ2ASByg9x1spkWCXB4o34uq9oLBw7FdFjz8hj1kL2ayefsLW81ZiTMX6CAH8VTTD9WMBGSMNqr1Kw5",
  "key27": "5DcYyHzFbC6hsh8vtwaGLpzmWRUfdRi4AqDepHZDrgjRY7QdgoEFhTuqD5cffiefZCtWmkEu33ARQKWatGCZvmQf",
  "key28": "5q5S7D1oTLm7Ze4LN2TXe5KLtZNt9pAAhd3NWEJkfrvDsgtbmqzDgL8KSy4a25VKhx7zN1E7GthosZVHS5EJ5TYo",
  "key29": "38JZmGrh1vRwjqFq5Tu4kB87tHmsyLJaRRQocCUHrjduEosxFuPNSX99AXNMakpN6dwpakAu3bKX8tixCUiBGqGb",
  "key30": "7TAxWAv6xJkt7adfZ4Ag8x9fuarhXrKJ86dtRZu6MeB1W6y2Kc6GhgwRqBEUmPEvDkBNoQJaniHW59BoGdkm32C",
  "key31": "5ud4aVPVo8pFYHr8LxxLMBgLHEgxJPVuQ3ytk4dgjQvijFB7RHSXruSiJ5SfduoJzR5cptudjofGr1bQrKNsXz3r",
  "key32": "pjXUv4wEGf87ZVeeKQceZYxfPx3QMsjzq68ozSWjVuFby3c2fe4bstsEH6op25KUSp1621Ekktn3fqrSP9UCjd1",
  "key33": "2YmGwxDnAseHNUDMiDbwamWKwiHvyhwMKkymtQk6FX9U628UttVxzUNWbiuk7YzuV82tn8of9XHYMQ7syuiGYVLr",
  "key34": "XGg9XKu2qakBwjXrK27RhAEsddsLDqdqb4Gf63Qt1gGeSsM5ZiJ7Fj7pZrXr9nQkh7TH3c4d25i2vuP6xU9VVsT"
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
