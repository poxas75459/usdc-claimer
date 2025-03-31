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
    "2TJUtQcuih4bRepCKHtWe8FaXEkCN1Z4zRwVc2wKTpcn1tNcfR779FGQAqhHEpw8SCDxKiASTe3dVV84akWHPCYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rwzQzQnJtvMDf9KzMGnrJA8sNAeBejmRprTmYwpU7RnsG8mmfXm4jQiFb2wdENQ2uxbFmZfWHv8K38pjRCL7UWR",
  "key1": "tFUKkiHQhyoqUtdAmjPq3Vxr9FMasDfoNmzp4xKbf95cLoPkcTaGWunWRf4AnQb5JR8c2PvqeZ4qCxVgMwxnAiA",
  "key2": "67abDqBCBsQNTG1MNNv41mx3h5RhNqbus99ZH4BzD1e4v8k97UwaVxUYC82LRGjvjUyrE94HuPZjJc4vJRwjiipq",
  "key3": "36cyUxHTwAjXuvfR7gw28K6ZmEnmuPg9faGnKKdL4xE3S7K9YYuWunkCy6JQVgB62NHZET2xc6jRvABLjjF4SW7t",
  "key4": "66VS1NRSYgX6vkPQjjmara7AxREEmaz34aQA1g7fCDAicmvWzs5bnMiP5CagsJkaXtJAkXBxfmWF4DTiJtdQqE6f",
  "key5": "63qyiRuPdoxJjSbpqhuUkVmRTo8p7G3UWZyzggs4CzeG2vRnxBkWRJYLPn5BenhcXpz5sNP4Y76S1gCi4j8FNeFf",
  "key6": "CairnH9yHC7Qiv4r4f49E3boD29HqvXariA6TYHUHqYWtEcFwJVLgK9ZdQ8uNtqunJ31xgt63YqsPjuerEjxkNC",
  "key7": "bUJtvND11aTYV3MbBrtVFRcF7XB4vuo6aF3KFF7sRpFonJdCctLkP7vcMSmKafPvVwBfxKt5bUFPrFjtyDWYxYd",
  "key8": "2QGMH7ZLx1xdW4JRFoT98vCTcnrcX86dqAtKFTMCGEJCg7WzQ3eKBik8MGawzVpqHEcVUP1zE1Ry7No8rnUDSUUH",
  "key9": "4mZLYk9wLeF1HNBL1EmUJLxYD5kMUgmLoy282xR1xSXjQjskNwMjCeAr6qnjEVsY7j16hRMcKuQontNrgmbAwNTp",
  "key10": "wXpJoUcFrNnMubZmm6ZgDpHLcBk1LEC7rsrx7odrpLXxxTg8TLhn4wKfajk8WBZHCbsDtKAAGH8RdEuuXPsrfGS",
  "key11": "38pFRk9ETYYiuZxqBbmKFoojsoKdxw5atWsSEMTTgDVpUA9wX65Ga5gDACsQ6JjcVW4v6pERUaK2mV6CspYJpcUx",
  "key12": "3hr2WNPSMNVrJvZedBqSqtXfzboqaBZzsu8oWJctsMbUtNy5t9D2vjREnbDrYMVkBZyx4ib4wU7s2mQoK8p7Bh2E",
  "key13": "FqT7fKaq9XLyhGtqbe5MJVwBPZ61cBESiaVEDBEvW7ckGrQn2xo8MqJqs3EnzwN3WWDw5sAT4vfQxLwo1seuaxt",
  "key14": "XMSsPiTTGFRoiz8s7VDLe9GsVyH6UqArCm9xo8PFsTpvon8RAgCQFqWB9HvuFgMGZwkqrwLj8s56pZHfxBMvvqM",
  "key15": "uXQFiiu4uKHQThxSBvckiqR2tZHV1CePtSBfhvUGfWKR9bebM8Jx95TeNM93Z6GvxXZvUNngVQWBPcStcrV8MM9",
  "key16": "21h9R81esa3PokQJoVrKeFhXQ1CRp2aaiRJa5HA5vn9yJgMCZ1QnjwsBYnacap5dE2WsaUByBYciGmecJbjmLBKR",
  "key17": "v682nCeqjeDV1oeqXdyFFmvvuK1vbnVsYMbHxHgYpPHnvt5DH5VCMjYTiktp2hMnNj1K5M9THKeUUuwAVAWAS46",
  "key18": "fg51UbtVwtnNjA5yPo7w5syV2L5aCu9VDe7cEpmWe2ni73tGnHeVtSUPP9XoUvKDZQfrppKHQE9L4sLkTcC1iuf",
  "key19": "4SbX2QeXiXkNWAg2iwKwoh9oXR4N2BGfXCCqAXZJzgFZZmgi4ST5pvCkPEQQPMnLuc4yPFS3PNMsui7vrfDQi9GF",
  "key20": "rExfMSCLgm5i5tmrQBLkm2BvBmEcSLGTXanq37rXfiNggCWg6tZN59gJ8FdbYd5qdMUcWnio5hwgT8vzCxr8RDb",
  "key21": "3YnR5AEgMHA43R976EdDZNi7xkGWBSmGwtMjJ4ojDDrNrrB3wq3zzpkFDHfRSMKZzRj444wJSfHzpbB2Lq8ZxXSU",
  "key22": "4aGdZUo9MdKpbXDPuGWQDmCrGETUhHVtHA3PaACmLDs6JUwfdbyKWnrY2jWFWXTRw3xjs8H77J6kixAPnCFxRp4m",
  "key23": "5XeDVjoRAMCAtbCymZYUJj9LGaybDwNoLXFn4KsFb9fqyUk1SUut99DnzTXcfGZQDzaboEDWcs4YjKVNaZDF6NUC",
  "key24": "51rLybWPD8mABgEwBj1dPmELxfpFnUtZKFKFeoCZCXAFgaVma7XhVrayzTaBTSVyF8wAHJPihYCBZfcp5qAsTMfA",
  "key25": "55C6VSmqADGbzb69PsLX47SXnCpYasVHX94TnHXst6eN2DfVLwMwSXVhy27FdJoXg3doG2je185QEtNaorLykoCb",
  "key26": "3L289C6M7DJvWAT8947Zx58AJjgT4h5SfHjBxWoUpzuHr3RRHpn4BqCqkGjH5z9bGFCLE69mFcWoDbHEsHCuY74t",
  "key27": "4xi4qD6x5mnnT33gGpNbmMVuLpRbyZY9chzSsNXkURoWze2dxDxc67NXNMLQXqftQcNHiNKE8p9fHctLzXRirEb5",
  "key28": "7eUj2vVbUCQ9kuRkys3ogj5Hg2KgZqgZW8QAjsZUwnFgth42tQCYhqhmKE854bc3CqtAd77AEZwQ8G1V8QZLsem",
  "key29": "5dq9VaNkmNLPg7gCRVm4LkkT3VTB8Cb1aiDs1NToGDnr2J28TUHbZiGuzikh2z8u4RTGagdqyVoLsskEvPKWDqse",
  "key30": "5xZpWePJDaHEGMEBJxUE1h14VP9Uq9xEpMNjPviLtJuRurCx8qB8DmNEhfgzQ5SFPsK8HXE75AE9rZUgcarUjfV9",
  "key31": "32RLQqQJTse4ej8ERSHaDhRhQsLR8PMF2tGLVA8979rV4zdrmU96CpAfXdeF7j25vLmhZjm4J9H9SFjMmMsbxotC",
  "key32": "4DFzMk9TyB3okeXTXxLzqdUPD4pSNGuLmd2kGXPynaqYUqZkJa4LGnUzhNMTRUUMsegERSwVhmihrC8ZM4TCPCxe",
  "key33": "c1rjgDydd2Knai1YJ8SYqKXBknWVdEeXnoDdYHaeHXjbTtVjGP89ab4mpXWjrqXF5nLxFjQCNx5wiKdjXM1zGcN",
  "key34": "5pWX2VQXecuPCMR98wTHKWeT8CxQeVVtKkXnMkuwm5aWKbtnWy82oaee4Lr2hx4Tcvp4j8oebV4RecNA5rbmA3Fa",
  "key35": "3QPs1tCa7H6STgbrGRpRoh1YdZPSPJkv1rBuqQA7o6vX6pGcuYdvbaAgdDWJXkXSnyStbnAx9cpPV13BasYKGbyb",
  "key36": "4n8ETfvFvmXi4dEt29SnJEJZG84WgbyLTVfy5Cj7B2zwWg95xvZPUJ2hubYRW2712EVTi8xSJ3auNvWRXdvT1UV5",
  "key37": "43eKQ27533RMccZ8mpewdZW6mqRad1R94ecW2v3nUgBwEFGVGHbgvqrvrtdJEhufHWK1YgF5D1tnwJRkwC9WCSrG",
  "key38": "HsDtNLR5DCVjKczZvajycrdcMrE9THCjDQ5LcrEnAAHbqqJ8pvrU8PQAdt6LGEoKFcWDMDbL51Jt7yqeScHsX4r",
  "key39": "icvemp93LtHpZCTLpm5csEEsa5uyLobU2fAMAz675LGERpd5ffVmyAGNVmxqEjqhu4bRay239zKHfqNi8d98oGR"
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
