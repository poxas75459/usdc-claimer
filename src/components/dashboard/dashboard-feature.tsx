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
    "Uah4yoP9aHp9s4TkByKiPe1T8uS9shsBhpHUhMKCVkXRfpGEhxBoDVSfwThZMtZLsPJpnPQxU6cMsKqW6ST14Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T3PP6c2PS8RBDfSGwKXmBBAesB7rkuEE7ccvqc47jQiKNvFigbPmu9j5xQVA7KGhNmCtNAYZ2cGNggScvStAxN6",
  "key1": "44qf47dLQnaSSVwEdgwUSNbsKVrdVCmdJzpWN4K5ZmP3XSyWuo7VS8T1XiPSWPmeKqr2i2iVgxXHFDnHJEXUBgvH",
  "key2": "4D1X8Tw1DG53L9WqmwMMnoDX5nVHTbvHnpEuKjKsZAhmatqxCJDPtm9AG4AMqVbqwyhFwRvRwMb9vzVub6LfwzLE",
  "key3": "4WySkPQKbaJPEYJF3mFP8WeC8Dt9ET9fHDsRXR8u9sgXeJTwTLD14YcwTmMjxkDtFrgXebGK7poQTgxT1pAEtv7b",
  "key4": "25rGDBVnqwBHFGJvAuHSLLQdKWoHjoQzMDJg9e5GJ1UdoHbHAPjSUEmwiyRXsNaHqAkPEWuGcNiGZkKZJQ6JQWDH",
  "key5": "38BgqJTnxsMufyFhL4ZpBLgN9JTPvkymteVkfKDLUSbEy74Dqw63AAwZkckZj58VuaDivwezYasnZxx4M2A819m",
  "key6": "4ubEPMkjzdMzHGa4pevWMpLXHQMQQBjcQHe5nBv7Cn899d6fAPPLzcxkgrbyvJ18yk8deAF9mf3WDagYUJHrf8M2",
  "key7": "4WCARJ5SZGiNxzGhGGFqwwGW6A9vuUcHZT2sFQSFj6PQdcX95T5QvqXP8PTY3eUHcTKiVCWQAYDNFbMvBTxoQprV",
  "key8": "5JGMdsFhNbgDB9CKD1NM1idjRY7EDdQgtFNS5Ld12S7pELsgJ3TCNwN1eKvb3ifPe3snnYk1mWToF5qoQgb3tUyb",
  "key9": "4ybinv2ntxYVKe4T4PYqTRkzqPehYAi22r9v7PP5ttuD23WWWyNP7a8dHvLHFVFEhF1wNUUr3Wncpji18uExEstT",
  "key10": "3unaYAqPvWfGYBdeYyxzG7jYBELchzKFFk8Btk3CADWMGt4W4XUKeMP4dfgpfzFzYq9GptsUNaMsxnDfJ2gya8mp",
  "key11": "2i5Nen9EBENpiWpj8F8oBVRiJt5ixeDQWZjtcyBxt6UyjSYNoH2zH86rLjbGHoxakSsZe5HuRY9rcFdo7X4uBUH6",
  "key12": "Wc5VKxufFuoSXiPt7Wf8voViLkSWVoPRHVCrKUk6xLuqxYTEdLfzptpBqT1u4MiBRUQLkRLgERScDppV1YCcPA2",
  "key13": "3pE775q98WMhmkbxbaPAxfWmzthjsxkvo7SM5uPCoFY9JesPVbbiWMa6oUxFghpBoQVRM2YcL8LMQ7k2aHwU73yR",
  "key14": "3pAo8oBgkg21byV1HaQ8DkxhfmrypQssMBaaAYEnk5KUe5oeV14buM3K9pP5a2Fe9n7FvZRYJGv663pF2QvVGYy7",
  "key15": "BXAfZccnPe37zrLts83a4CpQGy8gtECnaVDq1Q8oPi6wzzCRVWwWPGxZMXyYYU91qeYf5f9HbFEg5WZaE4M6JyX",
  "key16": "QVkQuywjQWePwq5GsQ698tWBdX4DUyigxj9pHoQpWyzQHuS2MEGQ2xz3tAuoZsPz1C3WC7Yb5P62uPF4KdKp1s1",
  "key17": "2MYrvnttFSKrVjVNfiGcWqGEgvhPgtwvYqCNMcRrudKANa9aYq9USEMB5h61MJLn2M3HjyEeTadaZx9c7YJmYuju",
  "key18": "5YeTCX3k9sgA5acY6KjQPS2azCYY9V8TLQRyfapVWZGGNKPupPLfkDAo3x7Nq733gymZGbDT5rXjcRG1FtufCefv",
  "key19": "3H2Yz6Wtx3Hi1s1cZ7iY9Pr9fDChKbs2THsHqa6dF2RFKc1edC8ocyF3sopZbkTnd6221ErpDsw3NNyvVdoSoYHh",
  "key20": "3aTECcmZMvwpjqyjGiUzVf16334Aa5aMndXoJY8ghv6akT2xLEFpdEWk8wVSHeDoA9QiYAsNamP4vfs5MvJhK6ZR",
  "key21": "eaZkoqgxvej69wms5JbrFG2Z2Ujf5SqzYTczuHTGNah69NDqRKC4uDuv5ko8DZC1nFxsys5264E3pWopMkddZs1",
  "key22": "3rmrUCKWW2vfztxcberRW1K5D2375qBRQ7CBpxAJREXdG77SY829H5ms4d2uULff6H68up8zzaMrGnZ6UpATShAd",
  "key23": "38z2iD4gpCxHR2Vk9WLVypG3iDqLub2oZ9h1ZwiszFV1cfH7ngCEabaKVE2j1iBRRB4Ve5HP48EbWuJgcVUcBHL2",
  "key24": "56mcemCbv7NpfwNhwJeKQNoxiTpgmYkgqGdEGm63L7sPykKm55Z7uP4iGaCmQk8bPidZVTQVcagzRTKzg7iW3BMp",
  "key25": "gjn1cjTSwdrsBhFArH77eAhiG6Dbwv2pL2nusUs9vudGD33cwjPN8hxMPCSBKqhC4JftxYDH8ujoTXYU8U5gKZ6",
  "key26": "4qD5LwgMkToxUFByF8SnMwyrxzYcCesf8wL9JZQxGkwhUyWWSrS7hfiHQTBT2PjAst9Ju5SPJDJtGhqa1TSiXUb6",
  "key27": "2pZ38yme59jZKC95Pfx3zgKjYs7pNVQSyVaBUP19mdKtepnCrzregPdcw5xthrRnaKCFjNH91m3puv7bAwATtcFN",
  "key28": "n4NgZTa5s1QXcGFHQ6EUEZuBCmHdr4sfXAmefUp6BdB3efjpsd4FFor5f9d1JHi7UFgWHALWUpyw7hDHJyN6pP2",
  "key29": "4cU2xXhjYniJzPTEHaLGRLEon4CpJULiMja3KSZDJ9GuUZ4ksYQDFihvJejLyxf2LRzpdUSNhB13PikQeViE4mnN",
  "key30": "3Kw4k6svSJAmhDQhcPmmZYGaryTzg2Phzc4YQaZUSZMDXjHrB7LRe1rZmxQ2VEpdawYasWLLnBLhqgTajSnoG2Zw",
  "key31": "4XoEe54UMdU1bDc5ct7fvwErpgHgq1Gfxs2ErxGPaVxS5mnKgbd9NvdkgdRaGQsLJ8WxLUd9mHS3LbbnhDPJHwtt",
  "key32": "2T6ZDXV5Nuwn6MQq1EvihyFZdjknZwruQBtPvfU4CWxcS5XQhczUXRZ4gQT2XYNZtXXHvnVcBkEqG8NrzmU7qjxP",
  "key33": "Y1uQi3cQ6UtCsKYFqt1osJ5mECSmNYQWt8LfNKsTy9QHE3oivr2QmAP9324QWDGuNXZgKwotVh1qHH8f1uFxkzd",
  "key34": "41sd8FQvxh53bRzuBuWKbM9k6H5tL5QRoRHCCrXaMWd1gJJiU4hA7yMqmcf1zRQJvSg1vbR1yostjbaPufSmBVR2"
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
