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
    "3ej2pDWQPg7LJEmxpLdyz4SQu4zun2qSDE7g1G8o7AiFGS3CphAMjxokg73EPuctFwBLXR3DPhrMnV4yjUiNL9T7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3yyewjfkYYH5pV3m8BULqNmwNupNPd6rF4HyF8ALPgMxgVubTUaNv1UaPqD7uoJAbyuXCwpudGjrVKytS9ugPD",
  "key1": "3G18xtZxEF7LKaNRXpsobVhw4UwJHc2EaU1mJkDopd1SgcwLV5fxc2jG7UySmnPJGrCq899ofrwSoTdPPHoroEYK",
  "key2": "4CYthpo1rcXGNXk5zJv64yLkJ2D9vxRKdqWT77gq7VxcJoHM1hhnfViBx8cQxftudwuRPvWwRFPFprcMgwTwfSMD",
  "key3": "2rp8XVcnjfsQ7otrGhisFgPe2KyQkZX1Y6KnZMWbKYgCZ7a4E6pmaQ4kKHigqkHZGH1rSK1J6aSrLZ1C4Bnz6peZ",
  "key4": "2vDXbzvKygBCohMxnfUpytJYCM1kwAzSwHHZC2wUDAyRGvb4NyE4X73YwXdPUr1HfvgAA9s76cKnaC1NzZQPDiHs",
  "key5": "2TwDRttUPMTFAk48dCpAjwjBBxA4RGk8iKVPpxMmujhwLRGzDwiTE5XUfQnqGgKyrGxpfELHxr4p6PTX6sEwr9Fv",
  "key6": "5pXM848QjUwykCGQkYPAux74QPVPu3yABqvgUiXcJRMdNn2o9gs3CPdpV6J5EJRnW7zwhT7SfcMiZA1Y2C2Ekdab",
  "key7": "3nbiiAJjf3QokbkHUuegbDWRiEzuXpYxLBdSELBWTHhKQDJknG6hXWDXeQDSgCz98M1nX7BBo6vK1e58ZRUr8aKe",
  "key8": "29XmaCjLyTBrhgbRZ5L7WTbRmVCeVPuodi1ntPurmPV65RsKagthtQuW9djfhDo434fnCtjHYt2fvxkUzQHEwt3j",
  "key9": "2LMuRZedanxPsVehYHRKmFkwbXcvqR4THCGZeiH8tK6E1uPMjnLSwE9BRu3mB2uiEVqJhbvc9RVG78u9Wqo45Z27",
  "key10": "3wi7aBvcfq3DCCp1w3jD2ydheow58kjtiYzoAYyXZMxcg4bxD1x9riyi57CFEqfyS439HNhiA9Pu4WvgvWQ2XHMe",
  "key11": "29CDNgESNJGLxUUm1evCqKHjzxXMC8gGbi5ZCJjfa2acXqapvzQBKeJzDaYjpUxeRUnh2o1s5rr29ELjZie3SiwN",
  "key12": "65W3TpS1iiuDmqFyRRKwZTT4DWrDwTmuCjK5ZPwYfWQduBomcHxi4xidFU6W6ZE88zGsJq246GJcHmE63GPcriaW",
  "key13": "5vLYkDZVsS4CKv89ckFwHSgrjKX3WYxbeKkRu1ZqkoxQTnT45bZCSRdgg7d1RCdYjpEBmkwXbi2RNy9LiNHxncPq",
  "key14": "2yYoyPYxWxtDZU58mYkwLhmX6w9vCsEvZcc62NCXjEvqDx3bpLaWxWNu6uyDLB7znmnNy13qtTWezGzD46QhY1Hd",
  "key15": "62g4BiJBJ5ZSLxTMB6ts5uQskcncsiURuVn1jucJ512N8n8KSXVi9YTE1Gw8KEjYY771TFz7fzrwprGqW44rLNXf",
  "key16": "4bz8s1tjZGUEMbFf8LEbBqnHPmKbfRdp1RpD5oNfaEZxDMahroiAe85PvA9JonPBkSu83ZYLYwvh8iAahuKaVLrU",
  "key17": "3byQhx9r1n9dfufzvyPgXwTLtAddTGnUWT46NhMEFazczWSo87ntpvwa2UVwkzmTxpmbJnSRoXbrrY7BkSBbCVPd",
  "key18": "3eUxyK7fo92rLKiNUZEV5PafQgBK3vRJPXSb1bjYf7bzqG4w4KTsqViWmRgEHPoSEqnQkVoPALHLYaFA3F46BJSE",
  "key19": "jt87PNYDy8rwVAVVMe1SXDkaVGN4r3QhqTHZj7fyR5kV1gVAwFNkr2VP4f3UxJmbhEgnN1T7DZTQPScyLa83d9C",
  "key20": "4shJGeCr3LZAaX6pGoZz4EY8YJHbV3DPVwrgWYUyugCm7iDAac7HNJaSVJizzn4evvVWXW7pHyoTE1TMmimyZW2B",
  "key21": "SLxEUb7zCLreWNMYHcZzXu1kJNrYzKr2BKvbQmJdpuYbzunawTmSxXBLovCA3KHErTKVQAQmhGXPLySx5A63NKW",
  "key22": "5yuMaVTsBwtYN6GLZ5G4n72M3kX9cQafszUEHoCafhn6CEXJ17MUPp1VD2jrjibLwbuYN61RxjBAT2qgDLe23t72",
  "key23": "58Am49H2rhZb3s9s6wwrnuSb89fAz5CaSTpTTuEGcqUHmjEdgZyU4gvt4HZyQSVfkpGs7fo5frXu5ZA1DctKipGB",
  "key24": "3oMBy3LtxWq7rpmQBywEJstusvYeeKHo6nhn6KQrq2k7xDyetaUX9mwF9EDQBSjH2wHXXdKHjNYZGozkN44d6byM",
  "key25": "3ua8ViWoHCLCBdxMVc1shkUuzzKh8qcSkNWKRqwbxLEEbyRfzez2J7b3SmiQqHJ6nrxfmxWWvBcs7PPgkeLEpHjW",
  "key26": "2m3tExzT4j4CkDrmgawNWJfPRj3WMRtd5x5erqFuwikrwk6yyouZULanWStJDdhZHGx6QHQbD9Jdshoc9sDLCiZo",
  "key27": "3CzyjCdqfdTnXgh1uUDFqB2JS19ngvCkdaLGAE6pX8LRStBgEL31EogFgfup87eKXGzTsBphzaFAmjm9EbtyvYTj",
  "key28": "MvYmFR7DMvwSHet4iFDpEijPajNKUHRb9uuHNPZ8nqN4Py1jkpBqHQbnQ4aZeBfS56Cv4ah44Um7qrBkrorBEf6",
  "key29": "3UTKPRqH7CMQ5hrAe9ZJVHU69uZAeZRrUWNzyT1MP2vUN5X7VppRqgTBM5wFUJj6Ypdw9iBod3RAo1evn74HwrRx",
  "key30": "3HmBxieVGLNEiKkne4cdxQ1Hr4TWxXncg5NJTdJxe8RwfXR2pJ4RKKcxfGAc4W1GTtFkETqrV8Nzacu3so6hTHKv",
  "key31": "3ZN7257vvts9hm2bzkdi7JgykGaTpugzqaQPbLQkJtAJ7sp5Q9YMCULWZDwSM6HufVG5pFad2HNzcqJJpV916cnU",
  "key32": "y5tcfLATeBVwF5mj6fk5kDgPCofRAwSG1NJhDzCCjBRemQbmBenK13Dhoi7zm4miKEbkgrrVn5VPeVu2cdto6Qb",
  "key33": "3sQEzW8eNCvuddN2whz2DQGT9ycY2NFAnVkR6w6WPssRNeoB2ZiUDK3y57PPzwURmTbEGWghkacXoaNNUCqxbTTd",
  "key34": "NW1HKNapgRj83hH3Fb66rvk6C8WjYrXiLagdjUMydB7jvoJv334j3s9i35AkeELgPpoFAwzU3cSfbtsteLg3eUS",
  "key35": "65DeJ2PTcsQsXxSEfw7SSoevWh8A6NRoHtZT8ExpVQVG3SMP2Ks7oLraj7LYM26GtMjY8d8KzTnZUSgTrin1Arpb",
  "key36": "2THUGqcMamiQ2i9MiisgKnjrDKKDkEFWp7hdC8dSBk8dgPoR1FxQXhyViGhtKwigG6z57oi8UAJHVKhnLDVCwWtF",
  "key37": "3GVSS8idj8bSQdi32ZnRtU1FfhPXwiHnnqKC79HUbwtSrk84X8EEok2Ee1bVs96Jr5gvwXobTtebeeVRwK7AS1wk",
  "key38": "567pb2cezgYkS6kYHF4nbFtGqk8DaNMqH5yL8VPCRkAPqWGmCYpx5saVGTVj5qoPRJRFRJ4qvjE6gaiZ7BH266ek"
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
