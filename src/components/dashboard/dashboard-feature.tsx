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
    "2eCyZSeAUpcuTmVuDNqU2AszZ8mqNnCQGVNiderLdAVCNen6db7MmujFzvnbt5kswxzoYGRL41aaFjzwZPiQ3o2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sBgYXs4mFHWZiNyxNSWBT8j7yCz6CiR4iZeiPqxk7FSLWYdYpq53GnEsrFCcPVRs1eLASrHmp8zi1CKGrC9htCS",
  "key1": "3FPpQXeUQKn8kkEbMS7gXGyT9W9vyENexpsxpg3yPqvPgy2rjdPbgLfmAW7ixqZh2UCCuePPCQjzNksSbmZbxhFb",
  "key2": "4Tb2j9FrfXS2T6TQKQM9PsUPPXLcGyp2RMxxeCtPsduX4jwbZARQy189Q94AHxqiHeWvWsxnJfvsLpeuDoQL9tym",
  "key3": "26TMZpoMcy7zEZR7y8TRnTsZQSm7S2AxNvWLKH837g9o46NT1VwqeZycXrJ9pC7EnrMMsi8RBYiV21jSEMHB896Q",
  "key4": "5E1zBBdJ3mUH4NHztuCsciX3GCUkwHq1XrxU8k6FjmHYuu1hUtHS4cztxL4JM23Yy3GQ3LGd1aUDshQfaA9A5Bj7",
  "key5": "2NSbae8ggevQ5FfofK1vAJCNymXt5CFHNxUcn6ZSzYoK2JohX8vmjjWkv1dz2TxdMkcjRhMryrNsyyPkPCKvdPfL",
  "key6": "2GGBTUqQ93RwnnThiQ24VRhHUvZ5SQEMtmxnSCsBZhjBTYRH6MsaBpiXzBBzcRtE5uyXS578YhnoxVEJWdfxFcvi",
  "key7": "2ereVaStJTgpjU6e7n7Nv8ehnt62xR1AG6iCiSvQ75ne5RQ6BdU3wVsz4QKZiLneBHFcHaLHkmjrEUcYKFkXySXe",
  "key8": "9BLm5yfKdE8RY2Gut7yRB3Nb39YgWPazxbJrbLKTmTcFNaTH4wBTuyp2jafPsYf5VnuvVyh3LmQzCbXyYbhtdqo",
  "key9": "5KZ3qXfFns7swmYfe1LSt4aDJKXizeSJ4km67AiyMYpD35STN3gWg9xLQ4cFjhtCVJGijqYSJ6PUs1boG9N5cXzN",
  "key10": "5nbGeT6BZz4cT61mhpKm7adnhxet3bzyLQYL563bKnSnvGNTjRzXZHHwsJNH4obBJ5LrnunPazjZ4fLmAe7Vx5Cw",
  "key11": "31RXpKpEWBAkx2RWFWcbAA9z6Eoxn5MJhxmtMmVANpxsA8vvYc3yxTiR86ggr48WxWJ5PuMLp2ymsbmoDetGXgBt",
  "key12": "5EJyNisK5B65Fwxdx1eKZ9cU2tBEEdZrtEJD32pQhDQ7qJXmXb7a5cBFdiSz4zUaqPR77AN9U9qFpM1kRTjvRD17",
  "key13": "32eRCKgBRQVthc65dqTM3XvWKb88iyRTGkSrqD1JBjyk2dfxNYCFQmpB2mS2KfBejwhViHJyUnAy9qqQVS7sGf9S",
  "key14": "3GwQiia1NyTRfHJs854v7f4APmpskdcQYJfA8rm8vT3TY3oonRzBcBhwGg2xcBzEHrJ53WP4tStHcyaAwsT3Hnzj",
  "key15": "3gFdUCJFqfqBaKayee4gpKxmL5uEzQG7jn1ueLuzrDbUcuBSL9Z7LwMmw88ZzTXAHzmNrZqF1tskZpJ5ykXKRqN7",
  "key16": "4Wxaz5kXaSw2kLAQwubZrA5G6qunU2zqM2SCNiyPTFMJG3czAjejtwhPJpXv5Na8XpbTu1TZhQadfWiue2nr9GD7",
  "key17": "3Dg1DWvnoE5cWshbq8sfGC7Jn1WUwhXeiUtd72VbqbE5eb6HHEyvfqXBpoMiz7bTDreT3yerJ14ie9ArASXekeWk",
  "key18": "5mHNX4Lej1uqQdo9EV6QWj5fvgJmvQET5gtiWvSjrRHEcawapFLTZyLUFfnQzEYmC3ST6516A4fMnz6Y3WpgRXX5",
  "key19": "25wnPAkcSdrtjc3ePtCjKc7VRaKbmUNBmFaqP9SbEknKvFub4LyMoznEgxoM1KdiB8RQctrqJyEB9stb4QVPEPhY",
  "key20": "3XfwM9NHFqRo19wFX7F8JEdBtwDJPoqCBzh9Z5bpaxuJeQke3dMuGT54zE4JUqjiZwarpCB3vBM85PjNWhNfK4YS",
  "key21": "3jhAK1WjZsNFDx2DygYj5EAbSfZwH6HiWfN284KAzb65yCqPBLNYLfotLcgnZiqKLgycJBrX23crK6eemYmxp9oH",
  "key22": "LEE8J3kbCviAcKZ2nJD8Kr8WqERMFCqSQdvGm2vVTsSvwqXGJVTrSJBWjshQYRfb3LAWouWQGgJj6ti9RH6gfC9",
  "key23": "55wFTgCVG9t9V8yCUhhqBfUUPkWSwqeMDDndkdZGeCthei4DB3mm7QdMhYBKCDmn9By4buus9xouNC5qvFtVyoaf",
  "key24": "3BWsXoytCx2Lmncoi5piHWNVFgUiYy1PBhM4rM6ZtScnGxMCuPsAVZgBKMEB5Jw3nRvJmFJmadGK7e756S6Se1k3",
  "key25": "3xVpzGQrgT6AfVTHz4BLqGfQbEzdyQorRE4v8tnG6Dj5FTyscZhSuDmnmKEy3SJ4JQV72wCSAAcyagqHA5vAUGQE",
  "key26": "2vuJTRwvQepKUwiW3zgsg5ArR2uhFeTT3X5dawUsPgxQswrWGPcDk2ME7vSVEMCLHGcEdF2RxUGaTXqakJHq1qcV",
  "key27": "4E1hFdWAiVRbBrdvQbWVZMYfyt1a5kEr9VapXSAXgP1UJAvTi2buUi9Kz1wd5j3innXtPvA4T9mqWSJt6vQTA4im",
  "key28": "59iejFeexDfuJByk8riDESCrQk2PH6mxmoP1L1b3FPbxknQjs28bXpRbfYJJ2J7fiK91ppqfCDdrGjjMEsFffYUD",
  "key29": "3hRYDdNcojRDRENdZTZUGMbBpPYDBLZcwByDBrj2xS2cMt5hsUDTEvBMxuSvSxRCD1SpwYqDduLtNGdA8UZ8RVZh",
  "key30": "3mN3KBscX61YoTCuEMyAeQZJrMSuhv2yxNfcH1MoDHSsKKiSJwV81nZx62rZx6zYScZR4uM1FcHHhn5RwGxskarK",
  "key31": "5NnDapWdrVFDwC54xFN6r7Ads8TqscXiit4bCDoZkM2J8w5A5NWcSNch8MAymnXGhHPyGQLcxEhNY9gPS37TqXyd",
  "key32": "67PBmmo9ERUk2a7NPm1a8oDNMhq4gZ9R495utR9dGqekiYzisbSBz9sbVBZJVmSAYFsoqMnjv3ea3qCc11ugNfCa",
  "key33": "zW3iGfXnhP46UEP7jj6QiyD86xx36GUrDrqpXVjXTzK5sDt39J9wFr8v9uhXrGLgqh5yNvVSqVjhXSdKAbVAd94",
  "key34": "3XgCQveSy5vfFQnQBNizMJEKdMKHryHNBTGKPvdPx58f6vUhhri2oDXqgm8F2jmZm2nDAM9Tk8pGRHF6PZsKoheS",
  "key35": "6XuoApyWA7rFyHdxLpDHa34fSkwRZfn7qRXfYsDmFB9Jusy8JNysN9LWPsX9Cq7HpghaVVxLixdQf4iftmi3gTi",
  "key36": "usQmruL8Jh7FUzm5V9LVPyMC5zXqtEoHvCBZxXhAqxZQ9KJneEi1jNTa2m3TfeshrYDfMoNfzpyo7CT3uRShWiE",
  "key37": "4vmBNXUecVx4ymRQzzWswxvkLF85sk6FUpeze6XMeKcUchgxRmRNdNDXTJdjq2AwCPawtY2Psdk1Ge5jBfhqua9B",
  "key38": "4jcNdorXUzWZtaYw4Nd2SKJvHKNrf1vLo2X47QRj1deEQ9tHjY9TcaNUNCvzkFQJAe4xhYWj2h3fruYTvcKU5nVX",
  "key39": "5YhifJxBnzwVDUsCpbv74fmuPRMHNtoJMNRJWWh11AKTb8fxQom1ZE1zAKLyYaMhF5EHZyHSJBgj8tB311ffJfZt",
  "key40": "4ZEPbvfX5T9bpDzFktkqSCZ1fRXtVCuNndZcLt2Phafrya7dtWjpaxNGnAXSSbNK1XjVcbaSNPM7tfLyrUA2Rkid",
  "key41": "ufwwevDm21H4N8eoU1rpXQbKQquQCcFV1V2XyRN2LArXoXDcCSmPH8985AWzUkCLaayGtF2kYq9nVKehxUygFaK",
  "key42": "5Chmm2xGmiwu9un9dauPNjPBkdj7XvW9MRWHEfumY3pBGcLsvj1r9kHHErbGeK6ZEysS8UswePYqxiYFUDvy1BSH",
  "key43": "4Wi2BwTeLBsAjUQ2GXunx9eS53h6worViDcRbfBXzhk8ex1TRN9aNQkmWxuyXzNcXSGxdJKc2GuVVmuH43x4vTRK",
  "key44": "2XboC8mfQhn2tCPwtWCyWXJtPK1WjRWBLEFnPDuFSN8ULLBuqVY4hKvwxcVQZ8rBsMDmPv9BYHriAmDrnUVTaTkK",
  "key45": "4gYv1eg6STtEbS6qmwmBJ6jw5Wna5n6wnYbyke36btpmGuqBHFJXZMd8WZatrRQWTv5svB8dnYtF3vaGsz2jcC2r",
  "key46": "3rBpmR3TCxb3c4aooA3MvPE2iGYiyTjFVsagTTLoZjiKVcGWzQeYr2eeEceLyvkgVzsBBioYgaPHij5DCM2Mrq7e",
  "key47": "3AUYx1zLgnD9DJpuhuD4ivTR53cVh7BUCijGUdsNCMuBJUGjakkr81k7urbxy3tttCeWUsTCciqMooCFJnyR59nQ"
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
