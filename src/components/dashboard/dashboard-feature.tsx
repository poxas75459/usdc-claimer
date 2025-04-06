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
    "5DKQ2kQ4sLk86FTBCAxHg7VJcZHukW2jRe7NEiFupXEK3rpBaLXbNa2btbz9nGmMZy5Nz4KjzDX4ek36aiVyVSdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsxsLbz9jes1ETjQq7RKUBLyMgQF5cMsgtWk2SAtJg6Sse4cq2dBazuucz1SaBSTmB7rycTRS6yNqy78f3MdZAB",
  "key1": "5UB86ZtoZPpkXKpZs2u6gjGP7iJZ9V2Q76xdbYA4a36Vyyc5V1MzH7kEvK2KQiNq2T9BkovERpUG7ESPnWrkTkp8",
  "key2": "jsjqVg2kVifafVTRcvzLEyLhTAe2UJBLnZjrqtU8EdKYTW9u9v9Ts1fn6dSVfMSrVwx1TuUeshjvUMSQNvZghWM",
  "key3": "5zLUWysEh1a89hfxiPZmohNHroELYRL6GSjejKf2AGdnfGg6Mtc74omcg38EFRPe23dHdXL3GQbu8df53g4xQ5L8",
  "key4": "5Taft7JZmXyZChM32Da4mVczrA3YFcQ4WRg7MgwvhhPob58VtYg4MEtDmBSoLxhRpJBbmqNtUYpRtRf3QaXVVrE7",
  "key5": "5m4GdjNL5FhvhGuvbXRp79BwyvGsQ8E8BWKDdWhmWQTDhnUGJC5retUhVqncmaevjDdXYhXR4EKNiPxjWEXBGDkZ",
  "key6": "YoSBqygodH64HJFcVPvocAhFesc6Xx18ubpm6sd85EkLtrd2KN5tFR5ohDhnyGuAZLCYrcxq3VTjBLXx11PHW7p",
  "key7": "49fikKN67Ko5citYbf9sMVKjA3g9yeSH4kr6qNJoByNwugTbjdiDgEvoTj13SejywQXxJMLntxdwBVp9ZXQMKvS8",
  "key8": "5QmKgeKJawe9JC6wAeXfGfRjXYcfq4ef3b7QsXFkJLQyZFWjyrv3VUsK9wqwvgdGhtwhCH6aWvPFBRaWeUeeBoJR",
  "key9": "3baxg5MdJr6BpirKdhMQnKgAZEZf1YB8p2yT1FYdLCF42xzGd4AfpKqSiPoh9QYxAXfbgVyc2oXzEmjrNWFNZK5b",
  "key10": "3XMiKBh6bgNWN2i1Gy8Cn8BmtPSeZBQ4h392XXRjvb3rxk1VzwVUabSUtsEMUe8yqrKDbQvDBvwgNshFEjm6g3Uw",
  "key11": "3K6pCicNtvZHZRiaFMZZCTri8E3nEyvuSnQayMt5pAnx6sDyLCeurCrMUzKRAdCFPCifzboejvHvviR6bfgaKsUU",
  "key12": "4Ey33FwqKrVX7XFPfxKvEsboAwJLsjDHLugyzb9trL7UweGVGxKvhKZyXjtNRKCpXD3esmu7BtKLDwRB8J4ZNCBD",
  "key13": "5kCxt2xMUBSidhSAfbUgaKmnammReJ6wgG8gKZWjS3r6Gceta2PhTANhEXAfe1B1uhXeCnTwVbLWiwZNSFyGwrvr",
  "key14": "4W5BjdVS11AuBTR2HGQCBGU5NfVZUhogMYTy2iUsVfkSNHL3DDp8AKKHGoj4hZPWPM8XPMHEujUN9wWau6i7KsUU",
  "key15": "MNEa7EZbQqoNWDuJNVqW7two3YRVTHptw1hMHKQYhZ8aWVChatpbTvkeJBkRpZooGiCYyQSJ76weZaPTs3y6BDB",
  "key16": "5S1KCBuwqzPisE6bgNYsQUGUJftLQ6DJEDpGtiLH9x6mDLjAsaL3hEjG6rihiXp4gpidpSGToVCD2JaDZo24RKKo",
  "key17": "5NYvC7xrUNXMdzuKZYyajGyz1YcbUSYjsqwuC2zGUuCf1Lv9wz9Qt2KL9ExHgDvNQcUi2cUx1zvNLtVwxzYrvR7S",
  "key18": "dP5RcRkzsjGfUMjT2RnToYKvCuF1TgN4mTaWRNRn5Gh6cNHQnzkxed8AMNTQve6bzuPiEQicCognftNXQMrmb8H",
  "key19": "5PMAictezzrU9ud7b9LicR2Kd2LgoN95sffS2N5esuUBWgqqbbGCpwrJbcAg5a5bKLtEVmFTzoFv8svPqoWg9NZp",
  "key20": "2Eq68J8ybAC8HDGW1WS3mcQArBnMKUprCXegpf4rvvnKSdBPer9FLGzRsQabDtDhKNqciNbrrvrGJcjFfksyfFFo",
  "key21": "34fjN9kUCNZNvMYZ7f9CGXoRhveFN7SL3sTBx526SW36HBBni1X69AtBiVhVqisw5wCWE7nZCnTHG41BuaCs9NDq",
  "key22": "5DgveR4jAeAnf6KsVR38SwnweFc95U59kLv5x1mwZP1vcpFuaMbcSu3ZkCt7GZgwDjkZsARCXvxU3djUWmdED7sV",
  "key23": "j2LtHp5cK1kDqiZ16eSNr73iNt3cHEBaN2aB9XMjWCEqb9hhf2eq2rRVLVn3Uka453G5ESHwc7DXDEGneL2ZaM3",
  "key24": "2VnCPfsQZJKsy4UzYrNnhfNCDtKCPmyLkJM9gjMNb5KVoquiV5Wct6pFJHsMjwa7q8gwGSzBPv53G8M3ZPYsyftw",
  "key25": "y2o13ripkaJuMGoM1DeyjaemZfVjH2cXaLZPN5nBsfHryVsX4gtUM28R5yzkgvY4Bhfprt4MJoTpdkSqTTZoE8Z",
  "key26": "4P2iC5ASzZdCLP5zHLN2m9izRC1U9RooZZ5YMCGKdP8Ey3RXFzW2VKAUXgpf3bXeF3oQt5VvsRYRiKW4xNq8se3u",
  "key27": "WJKvdRvHsNmYWvzGHHRKPiaErNnoAvxFy2uDNKwtioEdMCVrmKiXZvTCooMMS2CFwigpivrpQkitvQendgegPTm",
  "key28": "Gi4W5T3NkVyq3KeGcauUepxuhNwnyP9LCgzSib226q3AdM1F3L2dcsLeVYnYRwfCQZ54eWndtrMrapBF7GCkHCN",
  "key29": "JC68n6caqhgCs8jaFaFxWo1Q3sR2pAtKLQ5t2mbKH29B15YmKWLT9XeKpLaYaQAuvk8Ad66UZ38poPqocxA1WXR",
  "key30": "5LJLkkyBrti2T8mY85Jhtb4B5Vb5T6chCcWC4BNiTqwPfUrkZNdELRsPkQwyqbnDb9UzYQ2Nc59Bax4qxo6jtEs",
  "key31": "3QM5cELYBdMm8kpNCk1qEFYi2w91obF6ZekJYWyTViz5m4wKm88LW7NRauFiguF4YM13EjVuM1EoqsrNZHb4oQeL",
  "key32": "2XH7N9A2GMWmKe1FbcwUC67y1R6bJZXJ4DzJyLqqQuzVwmqkp74VGd1NBANstky4ZAYHNQsjzu6BnHDuyKkoKFNy",
  "key33": "DbiQArow5qc3sQBHkQ9HpFGAQBhTTKMooiFrPBAiRLcXUMmnaUAMvCojBaFj7vCKmaY5jrdqQ7kZCf5asNhGhyZ",
  "key34": "3RAEhF54j2MD27JtsVQgnD6Hw1bEVy1jvxedGYtpUVxkMxZefzkX1QEaWaxMzyiNndqZio2wFfHkp1HKkbp3WBPb",
  "key35": "64n9DDk9qBdENJ4iqdZXzkjRmfQiCEXZzXRxgvuQKcnahN3J91G5eEctw89mipGV5mY1qHV65dBZtKxqpuH5QJ61",
  "key36": "3shCPup23Uvn3n3QBnREhjiaSQcMgBeinc7PNX7zGadyruQbYWNoKdP5op93eC85R6gcy49K534Ui8wAAwHPJkEK",
  "key37": "4sY9J6odCZHs77PdvR5YffkVzvjwkMgWY3ScAtFE1davJnMLtSa3zoHEvVr6MxSJsoPTYJnaFYxa8vL61zvt2cbn",
  "key38": "4xsCSdGLX8VHKEKn5Sy8Z1oKz5xx6jcXi3sftYyiQnQeCuj6Reki31EAWTX7qcerWsXKUwheoN5gD4p8djtLxDqh",
  "key39": "3e25MyBjoCCtGbj5RD2yntm6bbadL7zaqFKYpxN88eiQddxt5tWvrswAJQUGkAD3csBbW5n7MnhevJirR6fvF4r9",
  "key40": "3diLTVLhicubJczuEiKLFR2fssS27Aza9CvWSN3cXwrz1iVXMNQrkZLzzxfVJmBaAjijVnCFr2dLz6biExWMpaoU",
  "key41": "2xmGg1QcD1oVPKKHYPe9kEB1X3wgitsPgkBqUrPyN2TdtvJr97dF7WhFvRLWmty8s9a5SHPEszNPgBvCuPCf2aCF",
  "key42": "5AXnnQP1zLZkRH8BbymA4mAaU8Dr2hb8551x9xVDAF1i6Kn4UQeJMUufTmbFRNEaVp3KXvYMUQJhGEMZgPWY71ho",
  "key43": "3ABQY75U8j3m3z2ryLQDebcShh3ei2nhffnHAYKMgcvJFtDuWiv9JYGWnAsYgFWsRTaDJnw1STKB1kpmh6XhEGbo",
  "key44": "2E2dM4uQSefEmGEKfGvVFohGDmBpzoomdu8Z8EGmZ6SyAdGHdGmePscgCx6ZmGKncTi1JZDiXRG1bddv891qFeRz",
  "key45": "inJBt4UELshqSYT6yFhjYUaqUtRLiPvrsdohrkLbbV3T2TrVNYxSiDK4AwYxdMFyRQXKojUFxkvJfQR6DbbnR3F",
  "key46": "T8aDNdJeXijCrCR1mremGQe6fELi18uNQhkC3MhDd8K4rHf871pfDzackqGTLNekwL9ewUJnjF8qCbSwhQhmK6n"
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
