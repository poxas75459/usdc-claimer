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
    "4x55ndApFnLP6roPXhsD4tNBM9WmbN13MX2EWmfyTtto5bfgPeghbKYZ6mrdUQms2yTwY2ABXEkqNyrFCHS6Ym6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUoewRHNTu56Nh6zcCwRssCuWEw2oNgiYaRzGgnzKZH6CzWedqBDcCdAx9RsKihQWbqPJRFf7SD3DmDxMm6t8SH",
  "key1": "5urayGV45CGRbnxNN6FWkGiCPm4CuXeABbtDW9YCBFTxp18k3GM3jTSAUmUj1VozL35PzGDDLGGiFM3wuwPVWoDU",
  "key2": "2Rb4TtZL3rr6GMbuWho3S9cfUr854nbmnhD6nWJ4XMZbZDxqtTnG63N1f2XUHqobfwycUqktn8eBJHvCHu6hf3Uj",
  "key3": "3hs1FaxfXTjbSuAFpmKLcrKB4xm6ZxP3hqDGJxVv6kTgBH3dCmXrBdQddpGMD7AFeQonFdubPFYLapRBb51PCjSL",
  "key4": "5L6pgii41fpXsjXAvm6dgJno2aYDrnLv8fSCX2yGfbz3jkNZiGZdR35szRvkyj1xTgMSbMM5cgijXdDagL36b9CE",
  "key5": "2Y48hgMn1WKVjNEVSqbXYpHuHre2ACeEFVqLWCyyhmcBmcuHnQQY4WPC91JzbKDgMgFJHdZdfViKwGTXKJniJHod",
  "key6": "2Z6XKYPs1kAQsbvMpwXbyVQJ3peK3tFvt9zGYmpfdmGZDt3nrbdwW8tdJTJiGq8YW3TQP5h1Pk35H7VSy9651hK8",
  "key7": "5uQAiWuBfAG9mFiLJTaWkCUjCxaFbFNt9CuNvereJST6MsXAYFEKtXoMGArcWWPkKrRP6g4WbxZZscdSf1q8BoCp",
  "key8": "2CBCerB2vYhbcJEXguviaEWvYSTDoE5hU7BsDALUSHjSG1eXrcXt5pynvscARa4wzNjxT949s9ahp7oWoP3gywrb",
  "key9": "ycokENSW1TUSjVNk2ZPufS5PLZhWARTiwE8t5Pefb3aoQAEQXmzWmdXSu7U22Qxf3trQpwk1Ta391np7pUorBQr",
  "key10": "o8yq7yHpKsPm3CLXxRTGpxh8nnDiuF35iAzNWUoHEvvrAq6itgRUsrmCbLCXx7wv5UQQ8Z2TVebQDttnv3YMzCo",
  "key11": "QHWeAuvZskwhCM8RxUopaTqvTeDnegPAivRKNgxq6g6mzHKWsq4xTiAaBPt4WXdGfxyJKfjqThTsgEqVtmiGC96",
  "key12": "53gjoz1wWeYCnTDpx7h1SP7DUo6mFKYJWimhnMkxQ9qNDm799iE23BU8ejZwyNKkhDHRdHx7nWaRUmFCRNfdYsiN",
  "key13": "2UjmS9KzwVvPUSremoW1yynNtBjkDnJaA8HhoAjuqwDAbxZTx6NNToqFzzQDfhWEHFeRo6K5XM97LoPqArBDDa1m",
  "key14": "MqPT5VvomiYRDD9WWSzafWSCFJFdrAsprEZZnS6wH1DVzFP9wuex6Fgyw274yPmVVe9x3hN6VAUyan2tvFbeSwz",
  "key15": "24kbPJqVtvfs8GmRDsBF1QY9qoY1xpbCSAGuhdTUpqauRAtQkwKkuzMeKQmDyHybC6kj7QonfqTNLgitbN1oNrKp",
  "key16": "2mf1mcfv92gRVKFzQBoEH1MdVn8EQiWMYePaoBp9JKLVasoBwPMMTWymSPDUFkYWcaaECcCAnkmfnCtGFTmwjSrd",
  "key17": "5vfj5Kapjasw4brkkqbqjeyiKZmwEG66Safo64KLn4iBfub9JyEsrQiAcH9M76VNmjoMGdUYjTSfKDfKtdzTJdzu",
  "key18": "3YFi4vE3KHqUmyMDpDEhGxuJdKVvECjve4RdXES9r2vgdhutWqouPNrSCXZZR95MGMyE2dD2ZBaADTTXp1StJdGH",
  "key19": "2N1tEu9CDXQzb8LjYZWoZ6abqP7iS71DT9wxd2N3TEd5LGK1EnkHFqZPiFfsGqQwWoiA7MUw3PsoxXLcAL3rBjoE",
  "key20": "5KhCM1xqQvqMCrC1jPC2c6fU5NC8iknm94v1wx2YKMYfnEP9CmW4bSykrpwb8UTb9dk8nEye4RdPLuFaZrZrwCWS",
  "key21": "4P5RQC7xg2DAocxpfPewSNYCyNbtUKLbaW3cviqd5brnEgFPET9Y3MZxWt7ZNWXaD8XLyojjGdTdpMzz2vtSFymm",
  "key22": "5Ba24Hq5tjvH4SBZvLErp6YsNLLKVpHFNCvrwsR9P4t7WqLhszZzt6J1dZxXW4uotExvEGXGA9ve2n9TxrXVeBV4",
  "key23": "5DUHS8xWdJuRXsXJ5EDa5CteJMMxAY92faCCvf8o7gbwYtk9uV7UaJTKHcDu6FJLZTRBtafqZaaF8Vqp5WrtU1vy",
  "key24": "2uU7LF3vYsJSqMzP56CnryKWpGVmRoDG1cskz67vML5HFVzLhGXsuBJxGri5TZ6jNNDQNNYXTcAVh8awmQj51DBW",
  "key25": "5W2JRgsWvB531zHDGfGgn7sq8yyyXmEd7YGcrp1wb4Nkv6RnRghNKbpoatWPUQ6dJwAaL2RSWHjoGz3uLw2TWgEi",
  "key26": "3Dmg1THb3cNEuHUqfFhe3A1M7avmBAmb5NhYmZ4kU5iq2PqsKTBNJ3BE1gUw4RBxgquv6y1DKnZhFSkCLwakzLwe",
  "key27": "28utzQRPZkviyd2fqZYYJEFETcjmqSoJKVhCD4LicKhxUVTHePtS895CjJos5LRfsx4T7M7HXtyMJJ8KyUz8gdGh",
  "key28": "3vNHuK4YpnCxpPhAA9ncBLnZdZeqmyUm2sx7GpEyT8RAR6FWz38iTfRbHvVM9pg2xJEH5VHUfnHY7k5eterh8Kn7",
  "key29": "dHQrpNVrZmySSg9McZ8gM9Y3pg9eEnPTN1YuEQHLvPrxZQpjDpGZA49LSW8z2vEgL3ScvQC8TDfj4yxSvu5EJ3R",
  "key30": "3Qpvq3PyPoYQ2YRKPhf9Jjh3DYZ9g5s4VddgQ3gjGdUBrH7kkoragyBPe4JDnbbFVE5GdGrWAKm9JE6rbsAGpeyx",
  "key31": "5x5tJP3bSWkguEzJtc6LqM6cNhF6n8DyPoKga9Z75bL7wbtPu7tW6rgnPyj57bNsGfqLUcHYKSY5MD6cQJVVKzyp",
  "key32": "3ZyPLYzSvaKWngCXqpekQhVMToFs26qAYJx7qnjYUDeS6pW7PyJzhFNXE1RwtW3JJ9qgv58NSPwSbHunyjAEfadH",
  "key33": "4D9bmkBfuW27W9h63UkoU4tabjTRDgZU3sYV7STSERZUkigd8XM494sz9wZB5UKpRFUjQvbFwb5M97ThX82vTJrS",
  "key34": "4UCgcnSSr1VMnySqECheLVyskFXWMUpPdTuKQxESX9kzqP4ACKWccefJigBesSfY9ms7JW3ztZ4Nr9xnjJVwprrv",
  "key35": "zJMy1vxoCuNk1dN1Vft7G1uuo7ZRvQqjLZgg98fTfEA98hVFHp8brNw8XTNFEzcDDbXRyetaCsRrT4LipRySAP9",
  "key36": "3EAX8fjX2xN7WpgTwE53yzivXwkFi2ditiz47cDzz5HiGpRZADxJFjsTK6fDGuKhFMbg1oJywDMFJdAd5ej5VAMZ",
  "key37": "4Sex6HTrjkSi1WUU52KPCsc7Yq3rgeXd8RWsbgjgfkDR11yhzrk66PKaFCxQ6riLWfQWaJaryoABAuekVwTVNWNZ",
  "key38": "5fg7Tw26C3BWv8HJdqV8SZ8Fr8CHvteEwcDeG3LY5Ygar3TbmU1pRYMWE8HPYeqtHz6crum2a3u34cXR5e5Rs8xF",
  "key39": "5QtsufBaoMj8citWWS3erffKbCziYtKXqReSeKvKCM3bJa5fj88WSLr47SBdm5Pmf1vYPRBbEmRiR4CcGptNKpC5",
  "key40": "5vx4emfm1abfqx872JNhRUQFy2Z2CqBTQjPYDyoyFAjkuYsETxDERAAUxUemuQSBmzxbMKVupDDKpCVVuWKemEmN",
  "key41": "3ZKGJEKejUUP8bhmA7cK6TagUjGsA88ooJk2dT7DemnSoediUqscDXbmW8Nt3aoJ399Wid4DUZBvXHKLZwQVsT6w",
  "key42": "59bh4eZFkxETuTpGm7VJ5npn1Sm7DZYUtQYe38jCn6ZgBpYnUvoCoK9JbF2jjT8Pke2hTZ9c1BTkjByMZswsFxPs",
  "key43": "Lt8ajRLcSFUufQeDEBzfMWaA8vKDaaxNMyciYnVfeTday6k6hYxV3FFeqbUonPP7dkXbVQRbydLn5NFZj58kKGw",
  "key44": "3DGDckq1MHMcJLWCajc5aGt9xwqdz2qbqT2zT8on9hPB1b3mZ48VDYD45W83kebz9mX6owLPZXWtLd65gSFxnFS2"
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
