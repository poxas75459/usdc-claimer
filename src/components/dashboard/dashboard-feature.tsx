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
    "zFu2xcejJMYGyFGEj62Dg9aAojyWRBoB2pfxRDD8oDLZArXYvNNesGNUPHMz1RqXWnm1uuaWXrVwWR9v1R2DSqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqbYchtB5S3UzyBJreh1rehfMeQtGkuiSKUdWvkakcQLFYexm6gdukES9YxXxdrfh1HTdXJrHDGp21YeEXb6NBa",
  "key1": "tjYcSuE4XnjTx1cRpV7P6onxnnUVZFqr5zVHXmkF1e9e7ze9MbkXvGjRMgkD5e9JT9CaspBc5RXCxKzxHXEd9Kh",
  "key2": "56Mf86SFkbLeDAvbaYpV96YKDCkSqXZ398PGCU9dTp9r55uuR4jrmDWWYLNLAudkPPQVRLhZPC1NgNADXpq2QziD",
  "key3": "5Qcyjh78MqZV6H9jEstBiP1ZMa4R2A4SnwMjc9mMmRa4APxutuCzJcXeLhcw18HLQEYPEp2EyGeQZf5h5QWJxJh2",
  "key4": "qV6ah6KqmipD9PHa4mHCjdxirjTfdEwodFZJ7hBQ2Fey5ZffiuR8XiZBGjbze9gtgXDpnXFagzRsHKy57emYhGr",
  "key5": "3MgxSdHLwugLn4UudrdTr1QDM7jTAnSY37Ufk3kXzzXK5ERSD1VDXqR3tnBJoEi5XqQtNC8MgLyms5xPW3Y6p4vz",
  "key6": "fuuoHoPM1mwFQ7xbyPLDUP2pMVdnDBvQUgV3TTa4CB4o6RvYSFZLZMWd3Cq4bgU1YCpNBhfXaWCxiKpqY1k3d8h",
  "key7": "2Gv3tXwF1uavnFavX9bPyCani1WYqNhwzHsK2CfHHyWo7nA2zuuY4TFupJvKy5onazs958miMp9fNQCPik7ErxMa",
  "key8": "4bX2WWoGCgUkSXaG1roFVL4hxmZYR24NkbqiHBwn4i6YQizQG53PMpprxqMK3ysxehoRxfsapysR3Tx3MzCS94v9",
  "key9": "3P11LNAKj8ooH6nYahEkNd75aAa1xQG9S9mjcv3ikQpHvM3JQutJCuj7bwjNEtaWRUEKQHL7GAb787suNaNEyDRp",
  "key10": "2BgcoHVYpaq9iHnV45eCBDLMJzpUohs4CXiNCgzLMDcdcQXX1UHWL1yaJDh1V2GSz8Ed8kgLbv9tCfjZFpEy1mMC",
  "key11": "4qhfPqx8GrDUckJJR4wH6SHNVDh6mzYy6p3RL2QoUW3ry6yTGfUz4ZiXwvrm1qnUrSPEoiZ4uaaWdC6MFXgSu92H",
  "key12": "RWNL3nvA4heRcbXhtaiLhFkDcQhKqSiuHFz2NXKWBTdpAiTiWuadtU8SKv8UYfsmgLK9FoGP3WXxt1sZrYneLMk",
  "key13": "3LTdD34sk9RfLEvSCAtdEB6cfzh6xHMNBZ2jHjqaWMEc7e7AuD25iJ4q3yzQ7RrZRUcymwdLC4feLApjipFoJpWn",
  "key14": "3Hu8vR6yKovTqubZ5s12MRN4WaSYpow5DyReV224qN6xd7zCbXHjQ1ega6SFiLWC38Y1yqfefpJ5mjiUiFNUNsN3",
  "key15": "5a2Ye8CkXirZfrpKsBQqSe4UrgZvarKnDqdV628KyzZ6DyUMxesDnkFH3bPHNXKDoCLNxaedzQJoHdygsytTa274",
  "key16": "4CbRjhGSFZCZatjgjZGAUvqn1VnhqQVnsAxKy6Fa8VxiAdGdZwFF81eP27pKjkewPPhPcn2MCbVLjED4Lcmz23nU",
  "key17": "5PeZLK3HNhaKQGqJx9L3WRWCSiCpvDaFh59RDnVvtQY3Ko4zACKJ5MFywa5Ri6mQDhLkiK7AjeipMbpzTw5KCPRD",
  "key18": "2bDHuJ1o21CAEwGtJAtLp7Rh19DSjoQ86KHUqAtddebEq4FR5DsphgRLnqu2dXr9QPYTCd1AmDiUds9AuTy6Pfu3",
  "key19": "2e7JVxrRwLFt1evshQkANbYLYqMQLXH3r6HHBcAuyswUduYyDef5NXzPqYC2AQZma2bvZtyLd3KA88Db7Z3Kwcxn",
  "key20": "258ShcLJ2nan15mqy9xxwZ6qv5v3zqxjhrqr51Y2o6Xpd9JeAW3cbagTkvss7dQZxbgMuAd4tCvLhstBKpKg3v8A",
  "key21": "4rWAYep66HvWbxeuA7yQqkDdhxP3y25qqSa8fi1tvWMK1NSKEfjtYsLPjrJXmgRMABZHu17KLjNxRFqvEiqLcEgk",
  "key22": "33jmakzMz2nShd6rtcj8zPMafGWV5CxKyq6eLLiB4cB2EHuiGdjAhkH6GeVkJXfkeZxX4ZRd5GMrsiQyMwrxcnmu",
  "key23": "oAy8XZ2H6xPVqG5RKwZ2ouzaBxgtr5A7tf2a71m8xUKosnMH9pyr2HnC7b9aEqo78QpZJrQSHviu4GA6KyuQZdp",
  "key24": "3Y8yMZ2xbfiuDLTfPGhTtn4DGEeHKdS2YksXxp6sURPJ6TTdFxtr7GUugCGnM6qQxGVKnv9Vv241bZXfSVame8Bc",
  "key25": "53Mdm9DQdAcF3fqqmkssMmK1LpzKQiTCpXUg4CTrixbM6EYHBzfxi98DscDxnQ92NLKTYgYvksHvgaV3qRDeJ1Qa",
  "key26": "3SJNzk6UPwMumeKqM2yohSfw2QA5tJwNnqm84DZLh366UenovBAXSjeinawppnvD4HQ9o4ap6VKqM3muto7vznLD",
  "key27": "3JDkvA29AENxYBBSdSB3jCswPpnTpWscfT43AtTFtAdD2xLhRV9CNwndXNR3enYupgSbCPq3co84GVqUbPsvTnse",
  "key28": "DWGyLQFYqPKt3MHcxbw9Ls6pMTEhKJPSvnaJxkaDHywfTHVxrfm1dxuzFTHLtkg7wDfNpCWR6S5uMY9kzJtw61G",
  "key29": "5HWqujCVQuq9d7cH2td74hrevLBrKXCukjTXBcxuxcdHiUtipYKjdQFCLSNCJr3wS8tzyV4uMucQVmRzBkMKPyZB",
  "key30": "4EZ5UyFUaSEJ8Gqz6qRHth4ch2HpvW21MiowD3rV2KB8REYednfaXKLXUTdE9FE1NoevVusdAcTBy7232bonU6Hy",
  "key31": "3VWkMeJWWwp8kHG68uLWsNRt4ZR6hSyqwcjrLvdqFn34gXhk8CFTTRw3gDxCDR64hTNS5zK9WZCwDnzekkhcxtGU",
  "key32": "5JKAQakMd7k6kZwSogFB75KnPwwm6Lf6vsywhDWffGw48cszaqz9d632dBzBo4P1UTZqfz3jiokXeZi62Eaj5NKY",
  "key33": "5caNAcKKyufE9wQdnBmRmTKYwyKTNimDN7uPJb6LhoZazQb4YnvUKYs2R4uzjW1k4HBBnpQWV1rNKHXromtErgTK",
  "key34": "2LXxNx7EuWt3vSpVdx2qWkyfK2GFntqQWbq2oz3QJhBmrj2oKQG5snti5gGrnHGxsCzZc7eUHhact5mrrUbijNo6",
  "key35": "NstQFvNhaLUpJQVtXP4vB97Vi6BnjE2zn1cxFrcBDA4r7J1iV2DjYDSV7i2mhmmfwmAYLT57diFyJTUTgBvHRgY",
  "key36": "4pFNnbp4SH6A2H6s4tevf8ZctUAHQg4VeAtEMDn2wi87iaFq89Y3NTc9te6SQEUKAq3brqEWcGLs6YF4eraxb2zb",
  "key37": "2Uhi5Rz2YcThygfQbC5RRYhjQVqb3T9rPF5zUvy6SWvzZrySGVZPrXQRMjDoJPcU3Y3sdcs1F7j7K8nkGqULZaaA",
  "key38": "2yLtysL3S6F3yg3CypNF7JYLHnMsDAtP8cibQewnoU5QRhiGFqSwEfvdBnb9mQTWatsUvfnrK5BaaDQMgLXrzpe9",
  "key39": "2gXAD49UGceVE6jwS6gDdGH38zRZ2T2KaaCZuZJognrRwCM4DHSLwtfxCt6P4P6jXhgu8e9kKwjRjnqmg345cGAV"
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
