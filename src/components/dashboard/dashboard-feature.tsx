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
    "3QPd5VhRFyL1BsXt8DifjKmFeUuiCmzyNNP9BE8GxkKxopDCUw4h78gufRM2nNSZobn2FrF7nwPBZNcYSN6Zsh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7sq4rZ5cEbDJcnAbsnaXch7rUBXmdnAyFjAhDkkRW8cXusZgSv31kahak5FNB6Fcf8W3FrJNEyasutERWDaSxU",
  "key1": "673Tar6MAS13GEksveYNvaTnhdpdfiNGviNxnhrydUxUd3fnV6gimQ5yxbLraFs9yRLJRYjadXP65pp23Yzqp3um",
  "key2": "5Yzhat8M6YVtuZTd1aoDeaMVce3gBxFY3g7xKyvoiuGWTQBnhsaKKu2iZuFN6kNJznG4trnS4P4s9bjVMyKuSnEe",
  "key3": "3TABctGiA2hC2Q7ZrSfHDCNe5DJT9KLAfGS1WHKGwe988YU6pqRZykvHR2SddxBf37Qz1Q7uE7oBAcKYoLPuXBSm",
  "key4": "5DMXcA7orVr82tkR7gWn1TCrVZRJJqTDySytXhAohbward8sppuc4FfXdgphrCtAXr2Zc5qp4Yh47p56KZp78B9W",
  "key5": "EdFZrxtUYf3YZ28roy2nbtNWTubjUjCfkVh5Nq5cotLFinp7VrBdN3FN85nYYrNgsxYoXcrHaXFTQdP3X7Y9Mxq",
  "key6": "4pm7WSjqeHknYTdB68BWc5vQDSZ4JMvFyu9khAKVKaooK7rt2ynMZjgPp2wyRtLc9nDBvwBNo8xDP1aBaSKBMJJs",
  "key7": "2cm9zfvEjNn25ZCRVGnXgFeUk8AgYEt68z3noRseRzvfPdh2m1De3QwinJYTqJHwwCQkP5x1mmVDGebAFV9Kas7w",
  "key8": "3Zpx2F5njztaYsVW6dYP7x1wzfnAYs3TKHbaJp91PnDJYy21yjLt97b2erR18tu4MUUfQ4NwZ3W5Ghm69rfcaRMG",
  "key9": "4TPcZhx2UE3AdRknMUu2QyB7WzbTezEcRxoRe6rBhbGqvQo2zhgnhJGAYzV9WDaRr1qDxpavHYmUUiqspwiPMFHe",
  "key10": "3Z6jhUmU5L3E7aZiUWU2VpFoxSpD1AKSCwQBucrWWVvUy8JxyRsPetRrU4pYhwzmqxdr9Ls6x6i143kJqdDSmMt1",
  "key11": "2iDBPweUasVrr8fLwC37iX448ucLKrfr5HceSvhHeBqxBQ3SDdZcmGfYMXmHGJppuMTQFpbmRKaTNARYo8S3yEcM",
  "key12": "F5cEUk446v6spixiDwZD3r88k9HGggwdscZYNnsNB2ScKeaoNQNDkkDQSz7DajAY6TRSuPHtgNRB6L5ARTd9msg",
  "key13": "3kyWj5Qw5XnecuewdvKn6vWE7R1jS6rQ7DhaYJJPMdxVZwC7hYPiLNEHxb8XrEreteM3P7GJrfBBoBWdfh6vQCpC",
  "key14": "XFA5GHrpy5PGPhWN1zg6WKZdqxmfQ26feWAhJ8o689FCUzbDxXtRQqP9p4LbPmLHEUucQRJ7aumbozPXs8CJwDs",
  "key15": "42xaEtMftsdjyGZy91crbcDQk8LfYWAdGETjVfCoDDMg5wSnM7HGPePdz37uJSDjyw45CnSv4EaZhtPy8gVsWYfP",
  "key16": "5HgipkJW3AdtFQmVTK4idd9G6X3VQY3LP5QAhur5C6SPUe1qLoM6rGmKzQtSAenefPqR8tfPgQQWSagkC1Fq9YZG",
  "key17": "577DDR8y8Fb9HX5MKobMRKPi4s2eZFk1TsfUNWo9Pp4vBdgPqcXoeAYC7rqzv95D7Zg7VaaSnA3hVu2Hn1oSk3Vf",
  "key18": "5vbwpzm6GsKXoxzoFYcwoc9RK71Um87DVX7pmtCDFbXp1mwrEk1WUVWMWpdhoFFj4J8DEZhv3QpxVpgsGUDUv4MZ",
  "key19": "5N7saTf5Emsujek8D48Sa7LUuHZWuN8TL9Y8J6qYsModj13HuM92PpLTq9QwfCeAw8XPGSi1LNdeGCGTWR8SpRHa",
  "key20": "5N35iJuEAtugUYSguqtbhEfbzyrFx1rTp5r2F9cN464aFewVgQMtFjhHGQM6pLWYUeAonDx484SqY6Vq55wJHdKu",
  "key21": "5uDZUj2DqKWmWcdksGGhszL7L8i65DTEAptSaBXV5QbbNnjvNtvp7dwYWmFg1AyNmd9NE2aACzJaMeva5HH4LrSa",
  "key22": "2Qm1KigFqHWHLDGLof2CaBQYbqWHMrpQqbR5cYK5UNgQ7LrRdWz6SncBNsE8MkHniGxzXQKumXzQnPhxrqjZusmS",
  "key23": "2Z4yWuJEQj87gc4DWMyahxTeAS94YP5hqAjEGPh2bMJbzYp1ccamLdDYAX6L1efjT2f9HCRsBURvnHFTCPTRkKBr",
  "key24": "5y4spESVu3X4ryFumaJ3uPQNrtKgtJSfChhMMN8AghZyP2ivqs2q8fKNsptnNiZHCfeJ9LvczZnrf7ZSLCHkjgq6",
  "key25": "4AaseHGEwMaRZqh12GxwYksPBUjrd5MNxW4Pwk2Zy5a41fNbNfuG4r1jhMugBLnfu7RG5HMghZ6rtwsF4kj3Pi3",
  "key26": "DDoH6oYDkMiGd1i1neCVbfQVGtdAc7uyLHqiHmVD91znSgcywNs644aE3afb2rTPUtTVrVjqkKXJPVueQFnxwg5",
  "key27": "5hbS3wbMp5Yhgf5JfAqyq2akMCB17CGiy42jUwZ6jmU1NfaKme5bGguEa7RQiNjn6kkwGWhVuTY68VNPhyZ6n9WZ",
  "key28": "497pwGYtaL8agoTURdmZLALcGTF7tYRNYtm5BpKao3Bz7vgk2HgqxrqRvz2wFz8iqd6nKa8diTbS5JV1bktiqd3u",
  "key29": "5PP98F949ZXicUiqLSasGbrKMVkfZZ7o5vs3xweQXCQdyQY1fZQUrjfDVhdn8DRwYUE6qLro8jqZBmzosvXniSPV",
  "key30": "2y9p1eNNwPmBGxCrgj7aaSBKNdAfeNztUk7KF6o55McnBey3joPKVgiEijbSWCnQujNz5NbVgFSqkVf6VKXMSSr5",
  "key31": "3LZgsmGz3dFDUpUMBU1UtaPW394ta5aiXprsquVRwzu4bYckiGyRFBvyZueK3q1AUptpWFQB2SDLVo4xW5eWtMHf",
  "key32": "3kQiEsLffXf8FquJSMnT8ZosQxcSSeug1DBJu2dtTC7pfPGSfxKFL9TLbKR6jZbuVmjDGwQ4ui5gvWHd2o2rRzVb",
  "key33": "4aVqjfgwTKR467t3jn4miQnVWbAnxabWqFrar77f3T5TksCtp3nsoHpi8HjUjBivbZ8oVd2kULSHoWSbNtEqFK3j",
  "key34": "55BLZ6VKmgsTe7Qap7qGFzuweFzsAGvoEKRcQaWG84zaPj3cyspvz1Up3gdX21GPBWaVYYJ32RQfz2GZv2422A7t",
  "key35": "2xapV7UacXJRwZzy6Sgf8A1nhu7xryuT4w1UaAUXVcPKcKCFUayKi7Mzyv6eQQs42d1GsEZjpGPtW4wP1b5U2Qgj",
  "key36": "3PzedciskyPaFUXo7ZNampNfsmkx7t8KJvuoTBt58MStHcpCyTFYG8sMRFMVU46NzLqMQ6QAG2rGqQXpGSPNyTjk",
  "key37": "bALVookPt3qXQjEXvode3YuY6QYUgKewsmvNDZHFuAtmJwJMBC24r497w9PvCxgHj8DPuvb34NTDfjXrX663Weo",
  "key38": "4J3X9EMsE2AvCe1dzqGowPsowDe8juqtBQxhYwVeAjxZXgaFnFTG8txEbfH2v82Tm6PDv9ad6ZYAiNFuEExvPrnV",
  "key39": "3YyxXuGdFoyVLoaU6DkyjkCfK4yKJi9ttwqwxGP5MxEGmcTP22jFD7Cw5oSFM1Ku7kjC1VoZDE2SXhFg6APdBmPd",
  "key40": "2STumLF6oFrU55MKMcnZWAUN4WxcyszGkrCJMAPmwyqjAgoxbcpuJXipd5hXbW4ngycA4sus2aNv9CX3Lv2ATttK",
  "key41": "4qGyzUXBKGDUEkCoW1jcFtUzG6Cjv9FyXretqsrvKa95SznZzvkH1biAECDPKiMqsAfBaqB5YxQY5mt5mJg2eS2n"
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
