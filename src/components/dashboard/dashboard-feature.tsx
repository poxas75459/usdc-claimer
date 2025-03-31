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
    "5TFr8v6F3UzusJDVtChXhmHixkbWzjcLNcv8fYdECxojQULKjcFFX19J3LV4rJkfZj2FqZEh5rG43mQiWQGvGhqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eiEhsxofedc6shQHWHxYMV6vKGvdar9YWgN31dYm47Rv2KJ3ZvP118qmhsjMz5tCRdi3NkufsKQaFXzWguvb1ez",
  "key1": "41gRDkrCuXfiqCBuFtqWmr7MdXd56FUPDw2krKP2b9Pns53bKdPaLh7CVAtk49fSrgyduy4p14Dda2kA9wZvAZRa",
  "key2": "474W86Pg9vtAun5H3ZhHxHSAcVNU85Y3KSUrygH5QhDNZjyTgZbZoRp2Pm6Eb6wgRmo8RMTEH1MHtiCaJhsa9ski",
  "key3": "5ASC4EFvAeHH7tAfvGUKj6nR845AkNTk3n3U2NLDSoBd5rujEZrzQbzavHSrR97WhSeac5FVYUw1jd8WT819nmnY",
  "key4": "66Ls4GZog8A2Dqx5yBmFZvvQxmh1WSqJ5Ry36QSsMjbp5aUiWefe2c5JWSqKkX3gUzydLWanuvWQabsVFMm1GEY2",
  "key5": "5cFBoQ6Pa9KbDECy27a93FcecMBqHW268ZBvyP6TzgHyqC7sZGqfaoEqYbKVGCi76M6w2eXcxQ6Zr6xZYs7zjsfs",
  "key6": "5dwdvJCAm1NB8NjpPKVQ3wBMBEKmRfyfB17XzShiAVUYw6cG4pZEyx75YYXskaENcystC2UehzBPNL4weBpmCZzT",
  "key7": "29fa4qwruNPx2nJcFoDHXfEQpyhiPKp9vS5BetgXGFMqsN51uEdfQti8SXzPYWxwMbawYc94BrGHZg754gSwX4Gr",
  "key8": "4kDfMKnMQL88zREdPikux2fvHrb3JJg54X1zpqthpZ9UJk6svC2kXyg8ZqBcUu5GmemMzDDh8DJt2hqqXcStokzJ",
  "key9": "5ZsWEw6H3NBT4wnDM3rSAJGF6XKv3aksmkcXn8oB2nfLtq8CanWDk5kpTZNGHS29VauWUXmspeejDGcdowa6j8rm",
  "key10": "5PRv8in8FrWFkQRKtHykXAFLaUpzoFLwpeuhh22e8D1vFKopMYvMYJ9CQ5m8pAUbUAAE8vqA9J1UpYAdtmj65ewW",
  "key11": "39tQkaqvkmhsCkaZhJrDfEj59EXztbswWtYnHGEfsefK9o57itb1JiJYb7VjHdYU5naXPHJx3XhhQtXqnpoHRadw",
  "key12": "63XtzWLZ6bcJ2TPY7kdZqbkLMrZdNt5LWeYK16QjhitCnJBgVZytuki925TxPZkhjscfGGezr8W8qxRc7tVaRQid",
  "key13": "pWJZaVVmRVvRYSgTSCbGAkNdGnNjcHcrqx95QXWaCsmHjVREeAzfYBqpCgBv9MQ3tQuEEN6nWx7A32gfnDuP2ew",
  "key14": "2BjEbHMW9L6a7W1DD7zCQfEptkJFg9xNkJkWxWv7AEPbiwJXegF2LRXKPtfDS31JNNxPc52jTqwYLkFKVF3EBA3r",
  "key15": "C4QheCyqrMPde2GGvhX1JvQ8S6822cDBKumexjxC6qK7mVXFhdkivV56EMAZhvg37maFsFJZ2Y9SuBrHRSwGmkG",
  "key16": "4eXcVxHedM3JikH4XG52tmdkZ9SRUih9NWSFD2cDQdnJSjF2xvf6KFeLTZBimbhx9a9jBnT42Xd4Bzx82vLSpVKW",
  "key17": "2eBU9nDFSrvRyPRuCFHbV4GWTjFAubroNSPTXAqG8uKpTxStcFP1F3AZRnuMhK5y1QdJkheevRZYEusGwNGK8rY2",
  "key18": "31pAeceJJB9u5HeLYXS99br45jh53v7eEsxZuyx17G4pdFvUZ6o8GDYzuU2yudzdsEZ1DKru3HH3PDdUX2MrMEUV",
  "key19": "38EgUr75fUp5PhTNCAoEGMVeXdguE8oeJyrwCza3W1uCzUNNLANQ68UjK6PqGKgYFj4w9D6RAuX3CyCnxAi6qWnB",
  "key20": "45MQvK65fnd3Hj7DxzLtrTcQrNDeHkSxnVv9imQ6QX8pQ5reffBPLv7x8h7BcRDzQtjJgm4TxvnVMS7qxwvA6Pgp",
  "key21": "311yvi91Ytko36dsoLxuzyFqu4Ufisq846BLpTjWkMbKBynHhk6JgF5LubPYLqmEmCi4uZzhD6QdbRvSEKaEouFm",
  "key22": "2Dykfa1drniYjNfN4qHfHX2uzSF8g24QuFm9pfyL3BcTxSdt5r1XFbH6yJS1H1WvBhfRi4KkgpWE3csjs2REjKxe",
  "key23": "KmDJJJvdAvdWGboWd9eueQLKoc2qJjtNaq9SoiszAP1V5NXbwJ4Hk88xcBp255YtaRhQsm3vB5oxhNqoKma6txe",
  "key24": "4cwnfzQEhgwCaDWZdYPRb7qpYiXdfZFrg2pjiDg8iDv3SBXFmFbBh73MrwH7xZQhY5Y7tuDPx4MfYMXtjcQVie1d",
  "key25": "3tskw2ad6H6Kq4ZZSR66aMRRLKzQEqZMVGP2cAnX2XsA9BCvAFe1AsS51Vbcpb74YgSXELywqsH5yoX3FNjeh9CD",
  "key26": "CrapJxRUSERoBK3BwHV2VeHMnaxgjGGe9kFXm7ynii6UoDb2Ay4g2BVJFiYFinqDovYmwgBFythzV2zfn8VAtvM",
  "key27": "4wdrZjkJL4swZC7WomUszD4r3xbBpstsXqUJepCqG8V11q9Uj8xhQjTCgMyJyZmfASzXmevL7YR14p8eqKDPTZAB",
  "key28": "2P8GfADV3rB2zqKqjj2sCx647mCUSy1FTnM4ALPWfA37vsDy5jjYZ8NEYg4ynDeqKobET9fxge4mnZVPdyKkLt5y",
  "key29": "fviLMnPtZW9NRxdcRfrDi54atWpheEuL8nxm5hZqJkWwPrZxaNQ7wf93pg1xJh99YzGryWxe3KKmdqtSkR4mfTU",
  "key30": "3CE3FjgTpQuydf3rozn6j9Nh3z5kksuJGs8f2AVMCysteGAS2R82W4UczXpde3aiurQvBXwJmjQnSG4L3vhVRkMx",
  "key31": "5kpQ6c7SxY6Jj4ynTx2rTRfaLDgJsxEro4ruAZdP5jFHHHxcquhXfEEpJncszk4MyZ1H2F1wCBT4sRAE7xdBYzJo",
  "key32": "4LqbFk5CyUSP2Muyb6LpUkaYbjuEaGBDGjLdtMDTLJdYfiNj7rRKYvPcMNbrdi1TfRLPyvaktcj1hsiQkVUzvpt2",
  "key33": "MFM8RfrABAkYAsdUKad1Kiu4ypBVVQ1iZVRwP3pjZBnGZCinwANsy9H2h1Q3HXsZNxz7PmEcTb8rUtX1RBtwFJX",
  "key34": "Qvp8GphNGKdrtkpi6B3HwzQW3gRFYm7p9HDE2JbgmmdgTmDXNgXXTgpgR7JxQGzoGu8f8tMsvZhpLJgq2xBn4He",
  "key35": "3mVLxe1E8Lmx1oMZBwwCCEZ2bfjNZvcRk4WdPw4NozTdnCevH9EPSD7mrgHmWTjfucKbmT2WBUYTkB8mWRfjSCZW",
  "key36": "2PQXbMF2jYC3zupWiahRxhauBzeBRX7np4VWMsfgBE59TRiNH3ARQmry6yC1udPgDs1JuGvR8ZHNs5P76Rh2J2qU",
  "key37": "38WrB7EBjeDUZdWQZqo8yg4nfqCMBsMqjvB8AEuNU3ipt6cwyz25HkzbzuSKHnUDXKC2EBZGSYmXrjnc9KfsF2Nr",
  "key38": "2WT2nVBg6J8eQnPTghGSkga382kvnDmW8X3Z22TGb7CHhXcZRqHYgWuVHRxyMZ1zdtXx4Hr8pFcRhtCFM4Fr4X62",
  "key39": "srtwz1wVm3S565hZHFBzJTPqjvBnJJxoW433Qw7S2Gyq7rSebu6UxF2md5b4erVttQhaT9TH8ejhaLitKR8LaYW",
  "key40": "2Fh9ZEwJ34XozkEhrfHgU6S6s8fDWqyEQLLwMaz3M8NfDmHNJiVvbZ93jHwAgcXoGWgKw3KG2M9GPMM5zTWSnAJe",
  "key41": "2JFpkHkuxPQiG8FZ7aGoeQ34q5AbtYFgTxooEyAHvNLXdXxw7rB5ozr4PknkXuGpyqPHXakV1BKU1Yky1CgVEeQi",
  "key42": "5snsGbV9ear5Ca8iceKhzPaDqCfBC7DejpZeciDAEsxmHuserjwdxNN4RjgVAhWXPTDTwiNdxeHtvUq7tD8XZySr",
  "key43": "67JAxE4edVDaWECXQZjXGYh3w2FGXrA8XT6NPCsLRzXHkLC6gG2mFCjQYM8mG4PzVayxdfpbWmyuYzMx12GYKqZy",
  "key44": "25XtTDQwhV7PAvSpqoBmoLLfaSbhs5SzHiMLR2rW9gU52Fe9R5w9TWxJgMJzgMB8s5MdW19LTEZzpYXAzoW8WoMv"
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
