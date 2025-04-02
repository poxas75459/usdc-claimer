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
    "4hb7rpgKu4RssRUoEv64ikNodCCJcUrrYzWiVHeDh8Fdhy15pKphBEvuQ2NniA6v1NSotU752dnnkzoehkR2fPoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43cUnHkPoimugES9N7ENihiuCKcNqkFviFb7v1MybkiAG1vqWjibPBES1ugnGeGCGdZsDLfygEiXRZ9rifBWkv4v",
  "key1": "3seSTZRFHgaA9bmZHH5ARUBbnCcrzJGovCEgqdahZbbbK12dmrxXpeGu9EFFfTcuhCTVyJizndxrP5FuDSe6LgX3",
  "key2": "5kT4VMpcdXLN1sExmRkjBBPV3y81pX11LaTnYwWDZxXqe88d8j4gJ5ntrotiJSzkzYFZreVrRFnLpAj3sC2zk28n",
  "key3": "51TCWNgS61m9C5N7t3FY2gCEgwG8MYGo11B1X6myn1U4cvR6GjVzfwdoj2yXkjHH4YHVY2wo29VmZzAFZvPMKM51",
  "key4": "61H8egQ1M8Xytv6ac4XE3gPoDmYCnEcYZ9jWaurHBKH8cQygyWtAWUxR3nBFFYoWCsopvNfGiAPXj4MgFMuE2qnG",
  "key5": "2e7iBdtg6eZ9XHF5ppiZnZphFz4zBykYARYTsf4TPCJP49rb3m72PEXFN4fV8wPjVtEWdcQjsHPp6Gof768uGryj",
  "key6": "47hpZ4PRqUP3nqSUqbNhDRizb6A3eLJ4rEnW7HQ61aKHwbkfUR8iDtpwikBfri89tFuqmFwFv4rG9yRfEjTWss2B",
  "key7": "3836EzTjoXGt2kydypKgtH8o1X59FpaNFM6VinxTdCX41nDCEUuKgF2Mxj1erGRuZoap7TwkbVtPSUm7PjbsDoQk",
  "key8": "49JmFKS25VAn42NEgxNuhta9pqqz71tJq4BZtq2K8bo1rV6jWoDeJ9K9PCT67jM3XFU11dZD2kBUhXzLAu1y9Ghs",
  "key9": "37sC4nhZYMGwKSeMLYwL9uQUNpKHDQrVqgNRdGJzXETu4CEV2HWpG3ZyK21XZ5XMqrFZKojFenTDGQs2YAnwFaF8",
  "key10": "2n5XpNkGePnDzwXqaSeHe8vDczkumnvSenjJjHy7Ewoe7LPYadyE82TpZiyeRk6NPKpTjsxJes4HwNVf6S65UhQh",
  "key11": "3ppLXKsbeVZ7q4PwWCtfnhRe72f3yrbNaQ7FfnXpALG2tkmWseumbCaysSub7guPAr5bH87JPKvJWdncXMAgEDXf",
  "key12": "4KzBxzrKVCa4yJCmFs2S5zsfftrVRpSE3ipiA8Ama6yVekPRAonmGkMGELQHrA2M4YUKNe9w4xmWP9VPyNh5vyC9",
  "key13": "5hzpGhScxsLV7AAv6nYP76LMLJdtq4grtD46ELsgurLJ73PMGokemGvvzR5dK5VVdap5XUcKQBXpAnr3kMKRadmg",
  "key14": "3baojSw1c3WkiEoG8ddy8yc8tzEcRm8MUNnpJ3itJhaUmPudZzwLkeehdizZr4b8mLpY9qQsPF2GBgGd5UFiqRdF",
  "key15": "2RDGAgswkGoDU5enpSMJa9QxXTx1W4pcqmgf25gtiGD5zXUaPiMMkiLNbwqzKtNMmArL6uPHcVASq25uE9HKMdBy",
  "key16": "ah1hVLgoPGbqRqmfuMm8ryB8vAyehyVTndBhS6BFbinkhwD2Cg2DRb1FzrZgHAXAeKWr2kGQRByWiahswVTtBNt",
  "key17": "nbKicGRQzDoPa8ShLp68PoQVUuP5vQGtCpu6iUDi2n4UvWh3TFYQatFV2xTsKSVL97xeL95rwaj5dEHiBtnwkmk",
  "key18": "5rgzEXaNkqRCmmLgrkRFVWMmjDReyHm5wEpnb6qPY5XRngz8KTasaUjFVTrt1jcRu4iCN8ajuoJmikrdZNwPGaDY",
  "key19": "2VHzi9UQoVLzLs24wb7ds5EGcKUtEK2r7WYSb1piz7dbLWAtt8T1hSDx8MMPX9k3n295y4LYRjCqkaVQXtv2zJyY",
  "key20": "23HdakJMGXktyQB9xhHJJvMX3QRNwzAcqvTVsKbiMBkB6ZeAAjYvnNppmuMgog5Di3XbH9nFsGwAwojoBuH5ggi4",
  "key21": "59YpjU4EWLQ8fRcRRnfopExr6cz9N7sbebw9dKsvYNfeHsJjuUaDs8nwVFaZCETp8ip2UD1hBQ2XNL4c5ZpdKNia",
  "key22": "GK4qTPATMu3VBaR7ffjZYVxz3AwZx2zshJzboKYnKXN5FtBCXqAtDxUDnCqXVxfYk5Xtf9an5sHaGbEqUrzSGMA",
  "key23": "5tP3dENjQjVVjt8siuFEgHYxH9xW2N2sLV3ueZj2Z16zJrrQETP1k3Ht2XVhg1vqi8J1KKMYbxvfbhEHYjZ2pS7C",
  "key24": "EpEFswqkjRofpZWYn3a1Y5MbeQToPSswTuQp7DtxPY5AqTfoKVP25yYxm3iDYLtXoYxBkdrDzexVPuJtKCXqvhC",
  "key25": "4hgmoB47rLUwL77Naqrpb9Td5LQSzHA3Yg1vvFFjQZy1zLyDYBL4X1rvKKzrQvmDhr4fmEQcEDZaUEzWbFSziYV7",
  "key26": "53weM8QYwGfhVYTCAUiuuBqYDbZoVXmvo9tLp7Nrh7ar4UjGPxomDioJNhfww2N25VJCFwityv4kH3aLDP4YMNZG",
  "key27": "5HhfWY4KQAdNPRvbzYnyg3RTHKNVG46vmET4Gq7HkKo3HMQxxzQ4gjUdT3L4zKhgNNfDJmcKsosCpvJJdzF4CqS9",
  "key28": "4LQdr25kGTwg34bWw5Nf2SzoEGZgT85weuLRAesa43tst2JLsgi5kVZb9U45gDnoDFopGqwMxsiPaWM2BzjCmQiq",
  "key29": "mzuDWKjzmBajxFAscQNrZ6DZMoDvzZ5vdDcky5v1YUJQ1dn8osKvTHHjyuUZQRi8wzReTrB4fNeCwvZAWrVQQtu",
  "key30": "3QvnCyBWpiGTaEg44Cqjt9iW611NGwXg5uo8DZrAhSL3NfotmkE4grnZ4UDRnWngPn8W6sLxoRr2Z3mp1L4EH2CH",
  "key31": "2tEQxTA4hvCnzPZ7tcLzoRfJG6uQRzQxu5uCXNN8t8TWZtq7XzCtMqW5qGKAMhQKF3ZPrqQaQaeX58DKwvfg9MRp",
  "key32": "xzafJqH8KE7X97BfXLcr5UApbGpzkoM92L3t6mFUXdNsBjZw35ad95Mw5EwhtXniJtfXRJXiWLyXeTVgznom1XA",
  "key33": "428NLmJDStFDCnbMtxZFE6wpnL2pBGo4XXnj25DSiuPqWhzAnMcAzhSHmcQuTxnpvoH73WP7NpkFZQDFqKbjXi88",
  "key34": "5YaKqLjXivwxbRE7QuTWU8debKAzk4iF5owWJdw1bneHc4Y6FygQ9beNVwrC1ZS2Se3tPDXsMA6tXDpjrwwMWepn",
  "key35": "5Kz95JK49wjUUwBY9wLPtoy3sReZhz5rmsFUQG6JAc1R9WWJBNsNxWfiXkmxQurNj1yRMSe9XBciKWVDVYpYj9qD",
  "key36": "JE9r62JDe3QeXhnf1UiAJdekX3PgLe8RarSUjhpPqfkH1tyMzGQVJZXjg6c6M8UNCe8WtxUidGHtD9EqQTNnwB5",
  "key37": "5ALTWZAuvigADX4PxjMZ4TtbEfavPt9MgG4ieTY5UG4FTBkz9tUiKvi37gtT6ALSgemyYetXJSnkhHBDfqWfMcwN",
  "key38": "eqWG2AKWTWknzLbF6TYirfz538iXmLbqThYRZbRDTHuCs8CxekkDyac4G84q7eoSUZ1kW2eVc2DDhHfmzvf37XK",
  "key39": "2guaMTsSGXfcv27CJZwHmmnbMphkPSiS9iwwbWhs8ATYMiQTQcmjsYu9Gx3u7jJSr5ew3iuba4XYV2LNQtbAkLYV",
  "key40": "5bgWvtyF5PuG6YMGNZszYcTEimRNUEyGivmmbxSpAkZQJP1TSaGzDuRhkW5chWYxEYr2RDAx4xpfhYqfN8GCc5uD",
  "key41": "kpvgMPwhnVJwi18zqEChPAEYH64kWJkXBsTdj1Md3VB9HLF2Q8E8YvDzYNs4nDWmaEk892R1S6nLuqgW8d7gAEL",
  "key42": "3buT7cooDzZr77JVs3BVse1RYjaJux4mS2A1sfFyK6hnqnjsLVFcXkDZKcLZn8tRfLaxh5E9xxHBAFKcu9S6Z5iJ"
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
