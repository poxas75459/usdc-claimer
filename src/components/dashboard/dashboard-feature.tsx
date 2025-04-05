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
    "2opJJrwMt1Bhikue21VBZszJiS7Jok3JcasFzmmL7SmeuoNieybv2S1K1ropmQPTyPDgy9XmojsgS7CESAiki3dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TX9xnvCHzrakYjSADWpKmysJX5JwCH19ChRDXLU32Ndde7DQnKhAhB1cceBQHLik71tug6bzJR9FFY8HxcGAV7h",
  "key1": "254PT7fGHXy6R4rnpKTJ7Zcz5VgpbiD9SFSHDqh7UhtbgpRh233FxscT2kYUAUZ5G2CRtX7qcfdJQumnDRiyyfHE",
  "key2": "335w2WAboReTjJ4usivY48HHZhhPCgppEeAF1yJopjJ4DqwoE8faciVdCGCuDbeaDcLYjauPkeKghXieKRhbCFW8",
  "key3": "4sXrrt2cuEfpdXhtXecPr5iHUWFzYLa9BTLugg1C4LKQjcFufco8NKMrqpyGumHmdsKx7W1UQhN7dQVgnhCSsJFu",
  "key4": "4eGtNr4HVreLjDBmrSNfQaTQu5XpPpGfF5Wxa2xfQhhhYjVuqJnrbTGHiGWZzAbf4sQBSDxkdp2KpXVGn6QZ2hp4",
  "key5": "kewzqwTthvDkqFTQPsArwGBxrSfZBZz4B17hWay86TTWqPUmauVdWVzbuCSsJgiwpaMfcbT5HjpBTaJuAN5NDAE",
  "key6": "4FoW2ezmap9We1VdqGdhTBMae1NWgdRVsHHz4qtGVoiFfGEAZG58CpSjSrxcAkoAErUP8an3xzLsewBFEqTrQuj9",
  "key7": "2C85KqPGjwby9dM4MbVCDSqbyYKki7ABGQsoNuN9oW9xBNSgVFfuXJKBruSGbeHR2FmSCz8XA3MRv4XV5uz6eNpb",
  "key8": "3GYbkApu5Z2D8GhZxv8KF2e2CLULBwRzstHF7a2bRu5qYozjdFrbx1rqzMoj8s7ydPNZdZzGSF3H2EYdUKxKnwoS",
  "key9": "4fe3VMJMvHQLVXxW6uxT9MH2LzDY9NG6xNGEbvkciiui2EZFZw45xaTPo8jBgvQW6R2T2b2k7gntinbhQgvNc5p",
  "key10": "ZaKdf5JiCADExcpgWdvCak7aLTPrEyn9mb7DRRoT2Dzb3rkh3sspQih7ERbyRwNKU728TMR7jccr8iCYaw9kPtz",
  "key11": "665GHFwLy7gd5xvhQqAkshB8UYijzMyMp3nvk55SfomWxCL7pWWYxQm3eTBGktKmhnyrxveCiK4sET4K7pVnFtSk",
  "key12": "5TwLWavsefYBbeN8n3D4U8hvPybBnqkLmYHY7jn4SFzBjGN1USSMEjRzEuu1JPQ5LeWg8X8MdFEiswBv315a2wtX",
  "key13": "3tkWJaMfcefmXehdSmyZypy8X3X85fZBoG7xLEFA8wzKEcug8doBLHsW91P56h3dbV6tgXNWUjqGV1C38h243TRE",
  "key14": "3Q8J4PuoV8CKyyLS8wwVEcGDa9z1nq4dmnvTiEqKaQykWnvUCfqTS5kHUPqtCYNjVPpaMQgNkmZaBCqctPPP7BP2",
  "key15": "4ccGHLUPSAx8HSKWuXGj4ZuHeEK95PLBFbUhoqXg8ETmSbHqjdz9Rg6WnvAMwUmxsE8P5cTYsTSobs6K5Nq3iRvu",
  "key16": "3oMWVQSWwpbRyn56fAWGiUZDY2eZDDKnX6DmLfp4Xj38GGkS5ko4QYs1vfXmvyvLqoEUHfgBvcMJB5LQMvXXFPAJ",
  "key17": "3kC1uGnMfTqK9KjsMeSH82mKjjySKejUPgVnpNnFEWaUhMmNz5ttqNNve7Pc3V2tKvTcHhkbuvDm3P5LcyqnJ9se",
  "key18": "Lkj73yKwoP3VVC2EEH77yijc4f38a4vSwpYG8MWhTdw8zw9otJn6riX9uzeAFeGM3awPRxiVumaioZv7uUB5zmD",
  "key19": "2ZbnnxfKCuBGMprU117jwpf8MBwxeFjZJ4ctKAJypnt9VEUPTaX4RxykYKyf6WhuWqw38AJfo1xrDwRUdZZRsNhw",
  "key20": "58XYZraqv1kG6VoBQYwCXytW7Ebm3w5KFFmtq8vMoupNgK3dR4g4oJxadTTNxakNo7ooJoUW7kdcCYDGBm1TFMrz",
  "key21": "3HhP17QCg6vE9pvavdP9xg2bBYvGxDDfts7ns4kVB4qhKwhwKCvD51BXLZYyUZWk6CVTiko2S2FhhbyW7a9JqUfY",
  "key22": "5cAVtWovtXyiR7ZQQ9ybKwEmYy5SBMLbDqWpTrzL2kdrqxboAxLLGegHY8skjUt6ZkFtUb9CT5C2hm46BJcfvZPM",
  "key23": "TDziUaM5QU6iiyU8BpiNoRVR9ysYEJYmkQ5zop11CSLZDcXLNRYhtGzEo9VP9TtJQ29pfsKqXbfMsEguuRXXD8J",
  "key24": "5f6WRwtyuBuxCCLmpu5LfE9aise4hVrBaKaSGu17gVn5DenodDMXmsDNrHGQShK8Y82ofMyFG4kAH7UGZKeiD1qm",
  "key25": "2t18xUdMmWobF1BDVQyNmkqgRtW3Q8npzv7AcEFYQGzidv28i3kuEfmAs1d92Yjze97eDLbGFca9ZUJ933hzB4CX",
  "key26": "2KFky9iEZVxJpi82URXMc26AUurS36sgnGnDMWxgxjeEvFmDu31zqfEZYqvgjSwWTwsd2BKcNk3iyZisiaWcbKem",
  "key27": "5e8UTnvmHAWXXGbLUXtAAzR4guPwaRAQ8Qnh2Byfon4JksqdB7SNCvhC6iucUDp2Z36xEdGiSbYef3E6ye5m5pGW",
  "key28": "4Z8KL2wRxAkKmrbfV2gWDGbmztpgkooFbuzdjUMmKWoux98A4AtH84j8i34cq2eCrctS9cnY2soaTQqAW6k9r7Xt",
  "key29": "4uU4FRZXxyew8jFoY6DKe3hVCQYtfJBSxJYCGVTrcHQEjrV9A5oT9W6XDderCS68786pTZggm4MKaVWZvbQbkbp7",
  "key30": "5MgqSQgw5FLMsnGQhR8ECW4mCxDmuEvfUuXEVYmo67hP3PTXbHs2kc1PJ4NP5Rd7dwbN4RxZHuE6QFqiYESkrxpj",
  "key31": "3QGBFAKKaeBkpnAUXKfaoTi4P43eK1pXLbVN6TgAaSdXtWrqTxwpvyZDd9euNibpbyvYqD1LQHQUEaULK4f83jsd",
  "key32": "2z94vjw8fwEWh2rq7DTXNStPPq637EgvCqusJ7q8mRyonzGDpSiaSdFGrYEnpLWGHamjvmn2kMML5dgnYtFb2a84",
  "key33": "5h4X5rz2TZ6Ne9m2TaLH3i1uH9FZ9SWsKP6HbVd3PA1tCYVQ46mhUZkzsRZwwbuVfGMtgqyZSRwTyySANDeVSdbZ",
  "key34": "2uQy1NFXsXZoXkfsxfWUkBDtgchYhBoGY59a91a2zf6oU5RhfCuE6VXd9V8kEGnNaJkXTFotbxBGpiQ5miaWQeQd",
  "key35": "4Yn9YFXGC9qCiVW6znNF2NnLbiiKfxphLfZCzCNZEqxDyv1xcgHK4D3kNrbzjAYEMN44Sq5nSxvoAox5M8acZ2fR",
  "key36": "28hc6kX28PVkCuNzEHRNe39ogYa2WTc318YWT15sEbQsvhAtsUYExGgfUa7fgacjbmYCyLUqMG4FLDPP2qydzie9",
  "key37": "4FixH13i75vGHLeH2J34mdk21ggu24E5QvykLePtVSyqRQB6sB5YgH2ChQxrYJFjunnaPAvrbajQEu3W2vxbd4w9",
  "key38": "5BSTpBGvFEHpHA2jpj2BVxVEfqR2CnvktgDBV3KCcWvQjn5miqbCZo9tDGrJ6o76zi6pV3ve5476WftodPC6t4ih",
  "key39": "4AGksWou24f9BHDSNbYkWxKw85CkpQFwG7hMH7A9Em3QPju1YJBG4a5Fe31VzBPufEGcC2sLc26T8FKiqcWRKXgv",
  "key40": "43wyiBiT2wUC6icbLMZdQX2PxgSBwKY3ZjZv6EUyqrb9HBCqH8Tcj19MFZ6tgfKvjecbTpw9uZMKACEzqLEf6JEJ",
  "key41": "3Ns9ox3ksjt6Xm89JKxe59xpp34FbyUMEJ5BsdagPdTLQAWQ8FAVvojTRjPd8SNqVmf7Cu28PkAt2Fnx65VWWmHm",
  "key42": "2p6UTuQmcdT3WeNXhd7kV9Ez5BrCTaMxg7fDNBz9UptcXo7JMQvKB6azoqhqJtGoVm3WmHYE1VLHN3J2sQWFqaC6",
  "key43": "4qjTMMDk8Um6Yi3M2X2QE1YYnmEvLieLBAmYjd5QF4gyQjoCVf1VCZUuTqnotWucvNqgUDSgPASsGEWkGFrJrwrW",
  "key44": "26nfFKdFKD38n5aVMZNpCHUM18N6ZRvCuT2kFGVEu7VWQDxRsBCYFW1h4dXsqMsENCham7tU8nQea2bPnKkoUpzJ",
  "key45": "wTqUgXU6tYsw4eUTfea6LgkqV4K9t58u896kcpkt24VLBkMwgajFcgZiCgb7Funx3K3kucuyYXwXPoT2YW8CMK3",
  "key46": "4TCpUsYmxZD7RVXV82Kbo1JmQTxG3Q4nSgYXbbhtWjGrDerZLpaxMubANuucUqDPX1UHxp2VEL5RdeTfHBWTduPs",
  "key47": "2fdKPv56n2Uf1XdyZD7sF2X4KCon2jsJkkMRkb8yrTZac5LsyXeQoLopZNzxZHEEwvZzhbpoD6FeEGPrDGqFJiiq"
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
