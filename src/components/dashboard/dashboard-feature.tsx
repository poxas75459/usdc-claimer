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
    "3Vjup6Efqr6iNnMkZyQD16QwMjgxeMa3SoLEEMVyKLdj52wu7G8gmBWp689ctp1sqqhsL5igYGe5Zn8Rtk53SXrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568ZcfFbg6Dv5vctSa5Viz9t8igUfc6ZSTYJnZBTAaz4jDcprPZ2nANnY1SRS7NDYMSqqCbfmo68WmDft4MeNDsF",
  "key1": "2cT3okMkmdyZY2YRFEi5Dyyno8LosACgeNALyoWsNDiSoUHcuE2f9pMGR36WHTTZPTtS9kd36Pf8z5XvwXcQAjNt",
  "key2": "4ZYR4Aha5HYEfsHismeUD3dYZHBmZaRhteFqDtEYaU4XkeHPfgGUkoxEE6EaqUioP6QDNCJ6MGs6XU9BiXmeQsvd",
  "key3": "4Es3CTLqBPnEX8B7MD6W3VpyEncoFeDEVRFqTiQUVnq4VPa3GiVisyQn3QCwcNUSsnuSyj6Me13wtsqqNRbprZoG",
  "key4": "2Cia7dPQcisv26hJgCgH7mu3Ro5SKxEWTD1GXWE1Xm6XkkghLfW8s8yKEjyJBiBLSk6rm2A1KkkiXxj2eHR5gMsh",
  "key5": "2SZbaPkwCVR2tdtxcwkbPRCX9Zx2fVr9WDjrgxpuxmXsbtAiSy1hPQtXCufhfamHDY3Chj4YruoDaexrJ8SvKT5Y",
  "key6": "fA9ktAm9n1Pss2KFQbaszw2FnwZWHcWzF2zhT28W3vPvWxj8QrSXHjjh5zAyx52Wdc2v8VESYfrzmc8w8hLVchA",
  "key7": "4fkrNmwRhrwQRbsa842oSAocULzBZKLtBbJvTAn9bbuf2hZ8HEtf61LBBZR4mkCZEt2YfYVjvWUDf53Z6X8HA2VY",
  "key8": "RZSmUQkYdSMBdYB51gXEUwEuoXrDhJHqEz9ZrWTG188PVXxHfp9a8FFSwsHc9Lq3Ps4H9Xewrz61w6wrpEJBZ7s",
  "key9": "4ZnnUszr4MJreXK4kkUFsmFeNNZCd1n7qd7NH4ZJqVmgvCuWGAZ3Sy1D5R8GbJDK35CYHndd4hZbrQrjYFHkaVnD",
  "key10": "4Afnzy2wtiC6SLWE5MWFvhqrvdnc3wLd8YgzikqLfoKkXfBGspY7ghUfALvk1fUiA5RSzkCsM3zVoKGosun8aza2",
  "key11": "i7TuvmacjD7igyv7kYVdVS4eE4jXz52VNQ5xoKRVtcQB1utyyG2pAhr4WT6ZpiUUFHv1s9k8G4XESKQaHThKWEX",
  "key12": "dpdXW5s5aSAvomoxW69XpNaroGYQwUHdZXh1CeUeYJmVfJNhgB5e9JDR4tCHVS1JL8r255W7xBJx5uc7UHCr8G6",
  "key13": "3b7Lx4kuAY1c5pHUTX1cPy83WQVyGwSq1qvQcrwXk3HwJwtWAaMoCgyRwqLsYX4fZTs6CZ9hk89jFVFT87qbzPha",
  "key14": "2cfDASpK1ZevWwtKC9NjARX6pMXnKaCep1sTE1wxY2WLcnXo6YYSm35mg87VePZrmXSSqUgwE2vQ8gjUyS4U2Wte",
  "key15": "2yKVJLJMbfv7KvoB95fZMEg3jXUALzqsURBQv6sJdRnsGhsdoZ3Vt6gVzkD4QbTrFrQZUzDtJAMVpeCphMZJ1z3h",
  "key16": "YQ9fanY12MEsXavsZXsMzWTscr88ae58LVWEb3hgy9FcWxwtQprx33TPCAwRM7qJyPXoPcHaEmCm9TxVRuDoHai",
  "key17": "5HWyRjpqNnkn44yJTNcH1vGimWSbEgqQQMJscNfCfpc4DGnqcJzS7jfVrK9quv8qmDiQrhxMzBSU6SqM6RndgeTF",
  "key18": "3EvbCgtKspuZmY1cJC42w1QJx4w7qVujSLgBpAT2niX7YfZJaDTmsfodmua8n3QzLFcTuLKMGreGyVPBJUwUH8X3",
  "key19": "2Yji1ANGJ7neYR2JowcBvPsicEvNSG5cbUzcQHiQsHpZx5kPdJzbjJQ1rThL1Hus3NAXjHuGPYpLPcNfhAnW9VyP",
  "key20": "3P1YTgdzPBzXZW7Vz9xwEzfiZW22wt2hJdritTwwtQVkpLSPV85PxdoYijxiiegzh6CdMvJ9bQjTQMi9TbgxNxGw",
  "key21": "4hPUddetcqXhLw1NPhStdFT1UTNgNmuGSfV9MAuHhCEB84nKikcDBaH6jsai5idGck3dTQ43HyUy6BWrjY8LHFQT",
  "key22": "3jgDBrzxHQtskB7FcFhHw6CFaSUW8Eniva4ZaHyKHTZnoTZqHxa3pXi4kFg59vWv1HN1J528UozT2CAhwsrhvFNW",
  "key23": "FmXNLzXJTBXcUTgTL1nmvAVKrpeUhK9rJwnx26AdsnosmuWLqo8m5YuUnr5knQfPpdHYwRGpmTyKYPg1Kmn1rqi",
  "key24": "5SdowQpophDSw6PmtY5Ko9frRJdJ5wa9RrMiyN6XczQ8bJbcQmavFuWoSiDvVJjPHbf5mjKAWrZ9UzPYLuPbhJVT",
  "key25": "3qR8Gx3NLW5tqo68qgmx5ESuo9p8LcmndHEKb596v8CpitP5a3UCAMxdgXUV5RYHxrpFZWJpzrm9Pafgeo7VpLcQ",
  "key26": "3zAkPo5Nyh9neBW5RKnkvGVWeCp3Z5y8ws1ehrBHixjN4EZEryUuX7MobARNMZ7kKcQZ7yRj6PWjnNUSPeTAzSca",
  "key27": "3kNfxzoWNeF6pvbZs397K51pbHhBKrRCzUTaBLghkAHuusYFdKwyr4K3wqpAEQsECKSBUkk7HqXqnb9Cssv3t5ss",
  "key28": "5gJQUvjosaXsKUJDtfdS13ixx9m287kWZpRpkxXCFdMVmyWzRwsdoJKt6XkC3agnxmVG1LhQ9sHtppENs4Jb1ftC",
  "key29": "WgxqjqjKzUd1GN6XYzrhVfNXoEwhBDFfSpdGUNuiyy4az4DvyiqHU8CcVVRjj8DP82j2wP1JrEc7RMtZq5DEncY",
  "key30": "2etyWRM4Xp7pV9cu9xjdNvrT5AhDuoPuDJvP2XFhk4uDZN2dKWt73cba2zS4uBxvUPWYmEuYxK6TJT4bPbkyhVPs",
  "key31": "2KY6ZR8jsdaA2d8eHRSEa2W1CtB1mo3ZMsYneJwN5DdNYCDhsjZmB2SeBD2TmHYC186biZ66BZfkdzaW2cqkmBXw",
  "key32": "4toVJSXeJLoSBpiDvWJuRQqv2DmTxxH9RZWaKESAX5nUg7h2FoVmWLrHV5uV5YGfY4J8W16emedWD6tSRvY46vjU",
  "key33": "2Zqg9Y7hHydLxDHWHzKMLidUCA5JH2wHhaYQkY1zV9LPx6PGrLj6H3anQo7PagdBfdSVrgYYDy2tcyujmAbzLuVA",
  "key34": "ZUXJVimXqXt2NPCgs5KWBpX3tQZhQiDqBtrS44LuMvu6rJhuFtBUXBBFwqLCCwvDbrg5HLoVWFmqXztdyyCrtge",
  "key35": "5SFv3NuEEaXJ3NHsN8kfVzFhuDyDYWJBCxNFX4NXayackbFJsefNUXDyJRsZnHUJSbG4kNzAiydxCY6BSB442Vk5",
  "key36": "222PmHgg3FcRA5Nja4r8gYkymEbQY55v9w7CeLEdtmmVNY3r4j8DjU3Ya9LA1YcZtEta2kirTSVQZe9JjiUNQapm",
  "key37": "E7LpAqZ4edACL4jyhNHUzMXy14gGFW5BhYGLRtjxZFRvdct9ZM4xn8qrVrJ8yLDft9P8R3aFdfdifcDS5rCd9Yo",
  "key38": "5Jx74fR6VhaJe2jNbDUQ33YDbecX5Wz5E9GusWSndzQYm9haoTBuNFUS1uTNDQkdSUzW6SbszM79uR2LMRBJXcco",
  "key39": "2L51VvQVnuVACnA2n98QeDnuUF2PRK9w2XQZ4MywLLY8YEUywZx9Y98Fko6N5cfzLUKbaepj5mJ8N2vqmrA14grD",
  "key40": "3EBRZ2Xv6uS9Lox9M3SZ1ZcmrokGq376fdBAm6SH8RXSGrEj4uxQwMT5oTRr1FbzFKsmeGbwCi6W2tHwH8Jiuowy"
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
