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
    "3TqirxvwAjRAfuRbZHpVTtZndktKJWqoCPdhB2quLp8eXGUSkApEjL8jfnigF7YQFxC5ZoUFbbXEih8oMjvMF4cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSVqydmbvbQADaLQGgCDrG5rWxPhGzyQj5k25b1kqb91EzVWxc9x8QrTbdkerG4LgremC6tJQZx2jJdR8cZ8jVA",
  "key1": "2yBcvnCfDQ8AVEPqEEb9riAFQT9Jd7FwiuFtrTC7hwSUqqxV9weQpPFn9J9AW8VAHKexXB5fgAKWSZq5tw7qg7xg",
  "key2": "k6orHwhJJtZpY4FpQfnjwePrtcEqfd4JLXBNLpGxKD98NtbN7zA8JTPmfiKYY3C4yvDHgeauxGRxYAe6ypTBQ9B",
  "key3": "65sSzTSZviPRqJhMTRTPFYW6aQt6TQR1c3EvEmkxW4Qu5FC65ihpRoNJisB6g97xDvBM8zfPinVof7XEQkj7gi8H",
  "key4": "4vxamQ9K7oBcCnb4q7EZnqFfqXdxRbMSei92ZgzDDTkGpHKwofMDWQaiva2znq9f3z7Fe3Ws1jumPApw79eF1W87",
  "key5": "3xsUspLdC6c8TXTfcJT2mwh2Q2fbJrLoeVYpstuF5vgrbqGtuMmJKsq5Z8wpqQFQ2YrgSct2RBUWgf64FyQXW5pq",
  "key6": "4H2b7fEzaYrXzPskvvh3GyMZtAAzfv3ZcTXeMxzDdUP7fKbWFitgvKsE8RACEaxpDj6xpfsJF7mGBim7wiTTpFwV",
  "key7": "66t6EvLAGSNRgvhZKd1YfyLGBgtXe43Gr5u94KpbXrU1WuoVCHjvWf9516onx6bYJ65Es5csGYEpsnFunWW3sHzN",
  "key8": "4wimpCWAGEp5ww76jLRgMLcfD2tkrjcGuDTuvK7dBJZysEEqx1bCH4KijN8aU2c1iWkFop9YAj2ka3RGrwfVa6tj",
  "key9": "5LwQjwkTcpKVH18gjQsdvkquc5E5XyjhiNgmR885jUqAP9RtCf694ro3aD4EWZCHrDgjFJCGcvmijXYZWhcwXMTo",
  "key10": "3bNLz94yNMV99VN1bg4XazTXGeu2FG8Ci654E2BL2MqVMsyjPWDue4kJBXKWQPkP7BiUKpiqeHRvFZkZotMrJi3q",
  "key11": "51ofFMevMPJhVL7SMMs4QJvFNfQmTJ5uBkQuHzdLBu4URPQYTkC7GDwBxEdeXFWoQQ7qEUUFhcZUbHRB5yGMXyHs",
  "key12": "dzCiDUEg8wRmGb2kdCPNit5hhxaXutDJKEk5rRPghU8pWZwP6aCaFfDP9E255UQmYbLS67H5tFosrjtWs8APUTw",
  "key13": "4Y5p3MZUfVQmmdW5oDWKyia2Jf7X3GsBBmEd1xZQ2TuBcyZEPbmoaUSYpDvdNCpafzjj8m5g9ok7ggxsYCsTPe48",
  "key14": "4rU5ctRtSFvKeiEUJkJmiYm39ui9hyU2MpRn581hhNdgaVMB8QfytngrATKhurPrxNjyeLvuFEHvdKbgaF6XX3yt",
  "key15": "5wbPBAuXBr7NCskHwxkgCHJx6hKZbZT8CzgzjsPATdrSBqaJUWNAGNcCys9Rb4SgHygQGvmDDUj4Ju2rckeXwaie",
  "key16": "2eFV4q1Q5XNJWdt6AfPmLaw5Ls4eqUmyszTRCpJndQTSZb2WUnpb3qRaq7CwXZWZAPFGbPXHLSjNWLF7YTvrhks3",
  "key17": "4casJrEoAsmXNSx8n4izfk3JDfuY7oLY2Lgca17ErJLc4Lqxb9xjFM2qv9Wpqjuqw5Ec8HnsdEjAsBCK3H8pCf68",
  "key18": "4WZuJNbTsLk4V96NT4zsmjjm9DmoeRJfFJakspKndiQwxp8Bu9J7hgFYFS1YEd5Fi8zcXcj6wwgp929C84EgB3kG",
  "key19": "ofV2ErPf6eVM8wjv8sPCEVPXUA4EnnUnzy1zi7kxAD2msjBMv73w1UpCc1sfmgxJwDXna7LiNqnzunbMEF1WhPf",
  "key20": "2EK2138oTB1JMs3RbsETFQV2SVqsx8yuxnTZ9LjUQjgfjMiSSG7G8DUjTkhyxssm4U5j4PkvCZ1mF8E1MRdEi9a2",
  "key21": "4C5LeTwBWKGLKw2RPnYSKFF2JiFMAdzkX2c6BvokX1BCYMbdMXVSH8Jx1dwjLCMJAXpiRv7R7oUyM2CHSyaLNPsS",
  "key22": "4JGjF282rsKSiittu9yQRn4zwd5ze3kb7oa3cgNvcMysvqUPBixWQy7Egc2V3svSqX2fSChi5rh5hPfN3okaqxcW",
  "key23": "2rhSgjWe4SDQtfLu5uwLYSR9QPPdGCAdcLsDG4TAUvRFXdZ49gQq3xvAuLYvuYqkuW1GKSUMrxwMPRVKHZGDvbjm",
  "key24": "5zGqqzRwCRyXjciAr3ZviZdCfWPL88qRcm8Q1tRLY7ACetyqE8MLYN8GxxmEYhD2euiKRW9ECpyRxob9kD8t8qbD",
  "key25": "4ch5QBLCMYXGsZkCsuSunFeStRg6TebwqoJPBWUBPCz1cckbRnThUF5VxuJn6F9R7Pdeqn9yt4xSqbkLqTiE6vTg",
  "key26": "7KL5qPzLJBREuNAnHSz57VShUxBo43ZyBTpHFjbinv6a66dceS72PaoTyk9vuQj1u4raCHBTCRH2JK2pK4H3HFN",
  "key27": "3x3C7mDfBwzD3N5TuwYNVBJ5ZbvFtt35ugtKm51QVgWW2jfmPqNek8oP1o1E5foY5YptXhyFoSWJa39wuMYyTjfX",
  "key28": "5jv73Tep6yvTorhTNx3JX9b2VFXgQHgdCWk93PKS4oAS6mwncFqaRPtbobV3YeXHKxusZ6coZivKx3D5ZHPUYBua",
  "key29": "3rJKpF546hP9UG6NWZuw1meEdJTQduBsNp6Y5KDCbTimtCD1iubWhUUhaj5S6rcpvLwEMsr7LVgr14uNvgw7ysBx",
  "key30": "5dXXoYxFDpiBmez6nLS4nDNsXoQx4KA547qibCd827hfoHVRFqn29r9qN2v67xmnQjqqAjmK88JEETUAsEfStncv",
  "key31": "65gqGZRisQ3up7HXgQfnUui3UbRDaoSZeUT4A6Lz71jbnUPShAbu8AM2JPy6pZCBzPJhtTXoxQG5xJmNM22VDxnF",
  "key32": "2xtXv7gMgsGcznAE3dmS7tTjzAAq5oFStw6UBs5kQsdkfmE8UACSNmDVcT6D7VP7W51uNprjkA81wVj1BqEG4g6v",
  "key33": "MbkdByRLtT2BVHnwc2kKyo2RNrbvbM4Co7WzkBdeRuFnoZHGEnrfakw2XirfmngjtxVyX6GPssth3mwKorMR4WP",
  "key34": "mdUozGfVmoVGxH9S5eRaDe47pPUBat9d6EREt7ygk55jJugbC9cPpcz4gbSnmqnGYTY5a8mkjUnktTo8L2Z51i9",
  "key35": "82iJLETwn5DQezWZsisvRqQ1Z15Q66AfkxbgdgffPpuyTN8MKZe4Vq5HESt8FUATGA4to9c3mFj9L3rDiJooKha",
  "key36": "5G5aH4JqS6Wx8H7eGQxJXsvokh6Xr2iwQez1YDhVyNDTEBWW9PgE4gvQoYBqtaEhdWVH1nsqDPsk8QTkr5ouzizY",
  "key37": "Wh5E3t8F4PjPmTKf4J8xhVprojgUG4oEu9avcFy7Y5ssQcxhtpgWJkk3qq64B8sSNyQpnkYhvSqw5r2sE1FkXT4",
  "key38": "HBu1GxsnBs1MQxNRQ2jZe6Ej1Z84QqqwLAvbiKeMgkShhbYsPorAddTkmAHhVL9tgSPrvkjbddoZMfoKr5CouRu",
  "key39": "2pPRNY9ieVaRAawixZB6kFwkzN8epyjzHDtN1b63NWBf7atKsQfKcYHjz8NnQYE5Sd9Gff6sCUMRWh2deG5bb4z2",
  "key40": "24NCktV5rkbEemt9B21jRNUCXq8gh1WXDS5i45UA2QygRcnqUE6jgi39oq88YuhcdbRQGXEAjuhKedij7jEfibsW",
  "key41": "DkS9MAJaCijETGjf8fQ5VMoUxmAvSRZ1MvMDP9wK6xZTdh5EU8aayXrcugsvwZ18ZMxrJb4qbrhHT9DUWwsgh1y"
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
