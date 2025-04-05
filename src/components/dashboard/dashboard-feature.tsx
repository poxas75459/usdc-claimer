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
    "tNnGdiPDHu8HWukVyGY5EV2z6z7UvobwfPRh7igy3qDwwHicZNgfDFTjzMEvsriHpoYBgFNfNJnF2ec2uV15Swq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jan4VASTVnZ3j5W6FjBkQRk1N4qoPW6HAb9DLgY234pmJybdky8D6R4Fuqi4ErQwueddGMncpqAj7hcdVyqrQXf",
  "key1": "UkLNmDiGm1C6AQaavBJsfrXK2THHE66XimJNMUhGngEY34Hv4iYdfQsLiaeztaj733LZJvsj8EQr5NPC4EV6F88",
  "key2": "5CP7tiD2n31uczEKkncxky9yoRQ4fvjry5eyNS8oDFssCLqwutQff7YLpXCNzi2zeixUAJayo5eQRZGYjgy7cahn",
  "key3": "JRG4RszZnU1FkKNz5yYj6C1Aa37feCH3o1uuP13bLctb9BC17SHVG77CSes5q6cNZTRyrgJ4keX4T6HymXWCGSQ",
  "key4": "2WRuzFFZTxsdS7AisQ3Mt71eprWoPLtx32keJMwB7imxHScwgYBK81zCbJqHRB6iqqHeL1uhyAbGRJvmd6JfH2FC",
  "key5": "3bYByDDyphH3bci1bywAr5eCX7377tg6cn4i88u8Ytdcc6JJ9pEnQXAYZWWynFEwcMaeKvUCEGf5qYobaDiPfU5e",
  "key6": "2QKUVTHJmP8k9jUiLFGb9psBjVBbe2kqTBiY34TXSrgTQfDGfdXDYS8Btp9trxHVNh1ws4H6vZ86zfZ7Mz7ErQWo",
  "key7": "5mhoj7X3rmmArC7HutBarMWCsmoDEYWpxWrUeiPpuJpk88WCSXBXspVojFcmV4NztSoVpU7csT8fdRJewJErTv8B",
  "key8": "2vTWdWAXta1RBkdzSJUsdczDSvdkmGaMAtanGeFEicKA4FE93HpJ326qAqjiucX6k3SZp9vzLtQqd4xdmqjkhmaY",
  "key9": "4LSYDyhahNUZXsYqSdSWkLQaYc4bttTeXFJqVW58WSWeok3iARJ2MuQyfj9KBcTnGQvWmaaeC8QfURTGgTWfYShk",
  "key10": "4feLa1w7QZ9DE2YWjLicSv7HCHc3mVKxJCuRcLhuiutxr4yBvnrnpmwGfoX4s7uVEWJ71VQhV8cd5B1ikUoF9iNB",
  "key11": "2GQ48YKCCPimjHebZuHJYY7ZWfYC7Bv1rKbnsmVDd3m51TG7D9rgYUUE4kTodN8TpqSUPaHxTpU5SYqX7e1tsDHv",
  "key12": "hhnJy7XSc1RrC4qAmKaGmLnBJxUHgWdqWqJGcMqEp1osiDECUCWyDgPRyB9hpDuvE6urcHZJcVVXuxykeCmwKm1",
  "key13": "5hSGZ72spVZruhWbsqqQuR5Ep9ZMhXhy2wnb4fY5RSwaZDjayPkUb1oqmGcD87BmyEBrw4mi2Kxm9HCovP7fWr1W",
  "key14": "28ojK2B1UJ3yFvh7kcoxrmZYmEhCVTQxv3CNWb53YEXTumfyTrw82zgmKo63vzefGRuMXHBeVphARiix8aJntNZF",
  "key15": "5qkXgZJGHsGUAyF7BcqgRcmKcbo1M3NQ2w85ndrW1YCbaVtw3VYu6fpYUfqiWcfX652J8oapuyZTSjNSLxBj72zn",
  "key16": "59Nr1yPcRmVBf4QivQmaVx3HEEUchpD1CA4rDHVJzeZm3kwZrbYWzA6bJxWbknaYS3VJc1Fuf6vxJVMyXvBCmzWb",
  "key17": "Emr48mxnMUtu46g5F8nouS1eB37J56iaisJzrt2o4gpJmqpFviuHUwhrzXVAELpC8vKcjs7U5MhxqBJxugKJhoQ",
  "key18": "2SsiMUFdswPYrM5mCPNiZaVEied4UcooxPbwdZh2r5qx3Xu7vX9L4SLstguvj5zqqPvXKZ3ZX18YSNL2XVBaTcy9",
  "key19": "3Qicgxyy12cBFJSiFtTFPSZefq6C4pcrgvx4ewErHkQsqXK6PFjSbnVKCPgqwm6MJq8FjSQJ2CMrCcJM5Z4xbpSS",
  "key20": "2MsZyWTe7qccxv3M8V13eCxUZSsqKY27naemJgT39sJ4dCxB6JXvcZXqRS5gDi6kvYRkJeDp1FKdkewDwHYNeNwe",
  "key21": "5Soiqu6i2Gn98h2cUX9EQnbbpzRBJQB3fFxcJQwBod848uWvdNCvT7kXFVWpLyQRkPeA8DqCa9wP1jfUt1p9a9M1",
  "key22": "54CQwwT79zTrQSaC5RsFby2coLjMdc2JaiafJskzNHSa23MBTGYs7jFVMq7mLXxMTfjYaKpQep893W3kwDMsxZaA",
  "key23": "4VStqPy7pNVny85RF2CUgWMndcGxEeo85iajBXSE9PNuGzY9sP2pQAXMxFfetqbWZcn8rqZEVN9TAnd1m5BoU7jt",
  "key24": "fxdPvRHjQmaW72dK3dDB68pQvvXDQhM1gngvUCrFUaMvnvaoKhxMhYjU94m4y2kUF95A58QxSYJe9RD22UAkmtm",
  "key25": "3uivu7iiNY9X6pGSeEuhRihWwaAKo4X8V2F23YSfnioG41jwhUaLvzSRrLwuD1H99NEcsRaN81JNtmyoUDQaVuvv",
  "key26": "2SZ23kgj58fyzgCB7E9DEQnDpE9JReVAV9cHgXCUdACKoy6dx54VR5sjrRn8nhvfWUNSFjEM4SWfqZ8boP2HtaPp",
  "key27": "282au8SyFuFJ2xsHNwFrRHxpyRKTHpTwwMVmiYEFuAJdcdk4n3w9CJgAwzn4i8vsSrc7QawaGUkaruHAVLMDFPi9",
  "key28": "61oT7qPXvrcvrX4rjBY1PBSjrZ9TWeMCSUVpd8tTYau7ftvMLkKpWRvetjhc52RHsgebuQXdg5LFoViaMtE3TRoL",
  "key29": "PpMa1rmkamjByCstwf58BtTp8T1oAtXSQfNNePFULqWDaDMavA6M2xcyDpMb2c1Ha4Fp4vbmh3q9DHgfBePnLTV",
  "key30": "4NEcVPyJQjhjn3ePLRUveuFH63YcsJa81S9XAuQcDiXrYgon4K8v6W5sSuGoGVWCKCxLPiZwt5ZHARhhvXpwv1Vu",
  "key31": "5fNmu3vR5rCPKra6fkcMinJGQz8RHiTtdca5DEso5EFkpA2BuR2o8jiU5nabhPhN9aC2fnJGx8DDPxoTPbfUnfZ8",
  "key32": "5KRrppgt3pUSraLdameHStHAXpJZBwpP9dneJtbcBoiidVL6KfjYETpBG4oHBdNgvCXcp7A5nRThSEphCvXU38eR",
  "key33": "2RuQVRWXystwMVkuPeVBXP86oP11ggcdXKj5RHPKNvGfnhzK8jrt6o1K5nziB6cx4FhKhLA2GbEmpZhgTAhuTaKw",
  "key34": "5NPpGPpZBEPhqv6LXyBrU7RVhoCvj2FkL2UK3yKrQXBLBG3hjL9r4SMd5Tiakw1hYZGBbX2WzUf4riFRMMVqxuXR",
  "key35": "1Rz4FqgkB6qeL5EHBwxzABcjAVdEHrx7S5bhPAPKdNNYdewLEUpJvk2br2eMqsdcciQ1s6KRTXneV5KyYq84EeP",
  "key36": "2JNNmwMZNH31LeK576mmjTSaztqtYFk3v72gLj4on6zKFE6ekavH4WHLNd6gwGkf9e5yXMcNRqk8YU69Wf2pyH3b",
  "key37": "3dJ6a6L9nJJ6zqKL15kcahA7z7dw2RCJTiv3bT5Hh3zRmK6tbo7jGwP7EAYfovyHnnDjSR9grghbYKQtTrcFgREt",
  "key38": "32bjpocQAhV949Aik68DR5JKCRw6YiNgfnhxhPY2TYqQhiaotCAMHvNmzW2kKHNH3mvS8Uwb3c5gU7td7228KhH4",
  "key39": "5kka26jLP8LJ74TiCYn3mXPPM4Wudv5NVHL14CotqBar9ciCWQiFQD6kPFtsZiH6ZNpGNzxxYUR7a83xSw9PaFzJ"
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
