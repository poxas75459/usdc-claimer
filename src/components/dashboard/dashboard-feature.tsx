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
    "677yTndYARHRxAJQqjk9GP2uHwMwaEdwMfYyqjAxJRVEaGMdGuY7kA9rbv1fRyPVfBz82WhZ2NtvtNiumQm8bzzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iRNP1z2gpfQNstd742TtQSyHxeWGyByLT8ae3kTxdvNdPEmksiXC9GSHxKKkAhVRzWMWyTTW5FQPtGfEfLjj6do",
  "key1": "pMS1Lnj1oy4cYXKgiVd9tTcTzobVaonpVPcfdFbzfuopt1BgUKJy7bJmu64jLM89RX8duM797wmjP9e1SiESBJw",
  "key2": "S5iKXZ6nT2BGSVuCcmjFMnpYVeno3qeJ7gSMj1W4Ezo5iFPz46dcticLXxisgzunh8hJxL69jy7WD2QEqJ8kYdh",
  "key3": "CAcR14VjUjJrRHGsaz6oFhQ4pcAEejizuJc5k1j3mCjsmrWMrtix1JShzSsLTby5TcqzMRrZeHUWE1Y8B8Fj7qZ",
  "key4": "2VFrzQuWEYzVJ9pZFYnGHqUGibtNnFRDyNgXnMp1bUGrhKCb4EsGc5jS2V8C5GUnf723LHMD1asTWUpnaurzgvZu",
  "key5": "4udqkvUnrMx9qo9z8jCN9KaqdULNR11JtqtTz1qDkwQgL8gABog4QNXf84yxZTrFDxJGBeeqSfgRJNPUpgLh3abb",
  "key6": "2SGxXMJ6wjfmRD7AViRbCHDtyKNZsJhLnhepfQvn53yrxysPSJVabMcJYstouNYL7k2DbiHoPHAtRctGA8MXQz1T",
  "key7": "4dBj4oLmz7WbQXBPukgV8jbRdKYuyqK9AJ38rgSRBHiXiRaTuaqt21eFMQpy2KzgAmpQh9aJyZi9fpV8EzHUsePQ",
  "key8": "2tKR3zEvt7LkLSpnDXm5SmugRoeB6eA7rQQ8acrGVcrXeeC7J9zV5R9TXyd3m9DTipPUhuzQoBxDrG7Qa7cNC9gF",
  "key9": "22QkUiLhe7YghGHiGM64GB4YUra8nQkPMJehA2TiPNnk4kyyVHxnLY1BawDLeeToiYCHA84sdvUVQzmbCWHDmXEz",
  "key10": "HZJEZCte8fBJPoqXQf7R52fRXU1tGqJVqygdCY9o46EfcgwnW1f3LHoGLMd4p9Lgd2rqWq6y7UNBvBLQp5q1Ni4",
  "key11": "2w62WVr87Ec5v27Qyn1YxdjUPhprzrf5qGEkHSZBML6LtmvewxowVpBFarBupVzcNuxQ4VeAGCGjsLQawD4PVvH1",
  "key12": "4hgBuCckmUoPjvCuVQppcetf6cDjcvhv9yaqApJy6roDdXbDqY8inRuQpfvoZsw65uN6zAQJZuR372qJCBCFzb93",
  "key13": "5F2ZQkshAfExfLeu8kVkVw4pjhtLfgMnMM9QtXAURdkW6GP6b6ppU1VEQ2PSuGnQAmA4sDdMR4VZ5REfUzfqZz2T",
  "key14": "5KsdkPxTcyojaBUsU3RoQdANGZFDX5v8vpkCcni3jWbbWiqruBDuU7wRVsqrZPp8SxsppfxwwMpvNNjmLG17zqbX",
  "key15": "4yWgc6WUt435mbKZ5NTDSgrN1nZHXdy5xEZEFeMXmJ6UyP4rKsxJEEx8pyGBWv6qRvfTxVPCfLH9weP9AxjFZhnZ",
  "key16": "241cGWj8E5QcjLd2w5Vmz7ZXPbiCVV393CyoTAeE5oNSBGtM5FaPqwXgSYEp7oEqWtTaJ7esPkpLekJcWnb5kpTD",
  "key17": "2ioD7gdkBu9Gh9URdcEDnvSvqoewf9M6XQ4L2JE3DJLBCbmRPhEFcMGux4m2oa7wmdob39KJEDDB7hW16Qfwevs2",
  "key18": "5qtX7vZgA8KEpJK1QeQd7DQQp4vjGmEdce2cGAnbZbbS3hhUEPKNM7pKt4wdz5AxoCrQF1Kbtm6GVNyzBGLGnfwL",
  "key19": "3GVxrvVRXyRN5CS8x6xpPpRZPftw8ezAvs6gkx6LxkhkLEnvYp62y2T4Fs6kNyKZCuw9mzN3WsowppMU7GGvRRwD",
  "key20": "2T6SB2v1LMMHwAf8t3uUJ6oKb4APRpt3pkrjGXJkQnuXS74HpHK7YBpvqN851LPfrCQ6GYwaMy6275JnmBQCZxAC",
  "key21": "T3MkRmWE6GMZtrYpoV9CoU89oNCsJoeVQJ3Jnh9KEXkkXGsJmBJDcrmZV6gizoFEkubiVHQ5sAHUfuqvsg8iQ1c",
  "key22": "5DYikvSeRz9MdRrWz6h5gsQSaz2ZSq4EBKot7i62ceovRmHWRqQU5vZeTPrQfX1PnVYB1HS8qZ2jL4cTFfa5WMqc",
  "key23": "s79LWVQdmrGPStKs6V9Y3DhrNoay5CWwHiYmUqyb1EHzhKxC1ub1RM8ZUreZCGqpaBoYLCec9MK2r7Qw44iBpw2",
  "key24": "ifrc5ZKoBQZJpshDmHN1ivxaK87EtwciPVPpRMZCBhPt5DJuwWrJyWzBLWxT4pZ9b5LJaMrvG5nzdKkXBHvV38G",
  "key25": "5dGcYnkU9UzC3KTBBEBzZpsXm3rNEtm3xB5vD17uYed5hd2M8CpSYKKTAXyifZhWf85rdubXtBuXkNwvs6itAuSn",
  "key26": "3MdpQW62YehBhCKHQFyWz4Cv5JEYXusYUuzCgJz9UWxeZC3hKRD4v5o3jrR84tPr8SvEDVuR5XkMsqPQPMbSesFJ",
  "key27": "6WbswjRtoE5rWHADdnU8PVQegG6o8JpisgfZ8ZHrNT6cJcLAgtAgxeznvNQjtfHfDghpbxzX8csyxXJruSX7Fnx",
  "key28": "4WpXDKjycEpFbvrmgfWgJntwiaXEA47NdV3JWLBFCz3DXLETAvrxQEmm5cg1VToTT5JqDvfaBUGE4yBrkDcDmMKn",
  "key29": "MnkfVBZeLrzGG8mcqwPuUUGPKvzAPqxJS3c4c5rVDUuJRLEGNRusVVcNfxJ87gxVA4j26Z5cNhNEGH5vxv9so2k",
  "key30": "5oypYu6qowqfcH34ybmrQvqVwhzQL2GMSQFfoMq62chQqkomMpsf7bTtM7mMv9QX91EX1uENd9zn3sQsSRCfmuH8",
  "key31": "6tRCsLHdH61ZKw94W1vfGxWo7WpHJcXYbkVmeB5RULKmofX1VzPxr8cNfBEzFUyREhL1FPEP6j8ZFf9aTWTA6Ap",
  "key32": "3sCjCcZePmHM9yEHBVWsC6zJM3UkGLP7VpU2UGGRnYEFtgvAMib6NsU1BcAr8Ly9CJnfN3z45jZggmZNuMQoCb9W",
  "key33": "3PoBLNWYVSYhBicvi392JSd7ogS6rm3N6jbTsRM91KRoywpTRvA2zhRiHXS9oDDR6N9aJ7yKvdyAN7KbmnUUaEaD",
  "key34": "6MCEqmWAtVwnmqYAstcECLYpgHdTVJ8KZU5fTo9b8XEoV2axbR4sAz3HN3VYznYwKRZ8fZLdY7JZuHhbCoQUGrS",
  "key35": "43AN7BTL8peT8oY1z9WKGLqY2qLKpWWYNgFVTiLb5oVoAy1mdAuLkhJyH3wm43qYSdmHFHtbQL2QMXfVf2ZrPFGS",
  "key36": "5erxVGYvCayVXFsBd7PbXGpihSkYnk1VBZxny8KY4HS4hS9VYYm1Sj3xAfDVG8rfmLF5idCHz3BiiB5ppFw8wqGJ",
  "key37": "2GHzSTNzhoujgaLjWVt2CtPENMa3i1oXk1KwBx4wooP5wUakhCDHtXmqJG4o477AU9V1nqYE68xcTSjx1wAHz4UH",
  "key38": "DZrxLSDXch6ZHKtgk4e2xBvvsykTmvMubPcC72AhVWuMgXYwZYuduSFhEzjjsPeuTVusJL19wouTu1PVRZL194k",
  "key39": "5Hj941VuodTw8gmPKrNUHCtpwxeEpGjmyHvMyqGT4hemxYeerv8PgcuoicwmVf28j9hmXwkLvw5vArRapQntZomh",
  "key40": "DuK4SHJKWK13RuhvZ9GB5sA934SK9Pf8uErvFSLZSKXjEg6FgLpY1K2ibgGCiYNMKcso371WekKoVvsbgBwq8sX",
  "key41": "mVC5QRuMc2k4QSi8x9brYrWWRbViqMc1g2AL4PzaimYSEQLHewc5iq9RkEN2KboKHTiyYczdGUq9qxwkmAYzPYs",
  "key42": "w8tGc2kN9yAQZ5iTeZSV6a3gzQpM6vWL1Grx49tDMwQwXZ6L9RYuK5mhn5VUcTu6NoDsjiwy3rLYHs7rHsyWoYE",
  "key43": "2wgf6fex6QZhch5a3RidRt6n9yNhJ9JyuPqasy3Yjd56UXga7y5zSLJRY5ZCU37eVV9fVJhJCZ8W8PPgTmb4X6g8",
  "key44": "25dKsfGmAx7yxHonqbAuPhdvF7rVtwswLXFEVhMYwoFwysxHzQSueQJC4vMcX2yaajAQ3vy4UoGVJVa8dsPaqbtG"
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
