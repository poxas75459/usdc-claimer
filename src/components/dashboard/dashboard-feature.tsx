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
    "2qtY2B14TiPoxgHPwcLFKTuSb6jdJrf4qi5ubuNYK3YbS8EzQAGcsvJnJB96WvMyuhqvJTtT2mnFHudxJTA3XLnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4arTmeycj3wrrw9b84FNNy2vLPuVXgjizJFTay2YGCQM9zXc6FGWA3ZpjgFbkaJgctPrkCPFiMKJwPvEuzG6tYbB",
  "key1": "441vMFeRXFHvb1bcZwjxMbt3Kmkb7CvdB3KfB5csEJZaoWcYSurARreruHYH1uRJQsDZYr7vikmP9TZr2YYsq3z",
  "key2": "241F1Aa9ro7iuLNZamn694HXcjkvDpx31mUdD3rp2EX99z2zQMx7w9721jXGW2Qd2k5iVnMTbXggPPR999TcVvd2",
  "key3": "q83pfMJJ51kT3rJTtLcs1usJpiq48UDb2xNz9nB4ip7FED2QdHrmq43E7wyP25JjbjjMXatZkcV59XmManJtb1p",
  "key4": "4UP7V5Hm89hMnsr7xFw41XDmeAT7163fUrypqkCiZoLBj4cfhkcVVNB7yEZmDGHtyapwA5bzqdbgPa3YwVA1RJZb",
  "key5": "6HacJntDnu7dxNX294y8v2CgdQ5KXbUqYJLwavxQfRwYAbRHzgQNoHDUBseZmRJnu5Gdg8CTXetv4e3UjsLW4Sy",
  "key6": "4k4dmw1VeZvdHdRTsgeU3UznSkUuX7EChJqjv3Rs1oFrznzXyZLJJnTR6mrYTyxnr9QK7iyJWarCHFzpQ7PXiwh4",
  "key7": "2k3X9wHjFdB48PcbeLhy89gAEkfNBAUFX5dmQaVe2hYUW63MvBoBVKnF6sv66vqV4meVMqt8htpJzLzciTp7PkNP",
  "key8": "5JucQUmhhzNt185wTaCnhTNdLkwvjnQed7JYxWYUpTMHxQiUEeRGynofmqA4evkEVPEhUV4CPYbVeipHUGadFbrK",
  "key9": "3yR6NoWeg3Mjbsbzdpa6Nx9qeGvKdbzeoZ8NSnGKUTTxAWx5aMcjUVBmeahF399tbawmLXfPbraydqcbJBQT57W7",
  "key10": "39Pk5ziPFqR6gN4X8uTLRTd5426mLt1aMQMtAJihdmhGKbgJVgiEMEsqbZvH5dsteseQMEoAkVKJ35ARSJVhepJp",
  "key11": "myvg1wfjqDE4RV7thnRi6vJ3oKCtX9EFbahQMTCejr5uGBvFzgSDLz2q1WEKn9Wm3LRdBiyR3sahBsSfNjrLzKB",
  "key12": "65B6EAVMnmK2umX1KFjSZoqsTgcqgKEtXuYwX2Fgv31jsiAMdq5J8wbdQD5Bao81SjxvaXc25mx9bBTN3JNdsN2V",
  "key13": "2G13VpT8PzZF3TvtVgEQmq6hnBtXYjyiRtmwktdthxiLt3EnZR1fdJpiVwDkhHYg2SVEXNuB6HgBfAWrQG3DQHsD",
  "key14": "62atqFna4piAL7MC6aif4t9Avtp7JfTEZ8hV8aRXdvPrHarPKx8nMp18MZ6cjx6BjXYwqbdzRVUYjixKv1TJtne5",
  "key15": "2uhDqrYbXy8hdzwPg2y7AvqTK9coWtHfeWrRg44fYeutcyiXDQYNuFgVWJGNzKGgEYDJwudjcW9T5f7APuU4uLbN",
  "key16": "52KDr5Rt1YSq9f4teNwViutA4fMen1qjLKGDu5teEDAwERUsGTroruRzws6mpLxUh9VZ3qcJaK5vTC7QACb3JvmM",
  "key17": "2DRXF2DaqLNy53qzBsVuqBzwTtxdadKYsmY9iFpCmcgZwHXEwiSFpptb3Vug9yjkfdyM7SUDYe21tsmfiBTooSLf",
  "key18": "2bAerwCXB1PaF1WDdd5Fwojxw8kntEN8qF7W8L7RvUzzPjLdvGSu8uYFvBS6BP7jdjJWh2DtFzeGAiGyx3a5SirY",
  "key19": "hizLQpTCboChFLmAbgb57RezThmYL9WctBUW1hc187P92s81mPbTw7wxoHCdtrPXYPdRWdAp934B2AeABN1V39d",
  "key20": "4w3HCGXtrm6F1ESssy2yP1SbWV8doFF1FLLCqzGQXLV8L4Koz6jdeVjgiVvccMc4uA1VwaqRmCs3D6fwyRXqmC9L",
  "key21": "2rjGjphyFkgXuCLETXVFNUs5jy4idv84av5JNsm93xRzKfK2Zd84Gf1LLK36aiosF26thv87DeywHEy5pbRVBaPQ",
  "key22": "38xwahbu5AtQQRSe9wAJTyUaj5Yi5JNHGoGtEsSAWd5v5UYFLerZqf4tjryUUYQuWpRypEpRN6TDovcbk6Ya7TKL",
  "key23": "a35iogLKqURSCPrTKfdZEkAAB6Rr5sSC7sqRWT4nMrTmrc27KghbwLJmkdgU21xG9cLSRv3oUwVxv6utX55b5Gj",
  "key24": "4hDWcb872bGo19rjXUZX6KASEoDYEZwXvyj9xDfGdY7vj7BWPfktaZyooLpvZNoKzcHwNdoJQxpApSBi3B2bXa3W",
  "key25": "4yp1PiJm9wE61abcp7FHAt7rYnbHXdnGDJgenSQFxKYMRdcgyMjYLixWv2Xq7Rx6fyazYKKpbqck4cDLYGFDr1ud",
  "key26": "gP8oye4Mib7YszQHn3x9XAkKusAY17i937eUF7Qf4RDKgk855hJvbo75yrBaMSTVpkmRVmB6TV8V54EbTPYrLV4",
  "key27": "4YsPSxCr2PR4nb7wVa387Vc6Q6B7EeFHGRuSJdQorxkLkZ4cR6hoVbrhkxJERyYm9vSnEK4NYVCqcMXr8mtPvga6",
  "key28": "66j4geWz8efg5uQScxUWvSnUXN3hj2D2Kyy5mxfUMc72TeU6Wp4HN7JuNmEutt4kw1D3W8MrFz6J28vXAY5Bw3LH",
  "key29": "ZPhiYCYRVXA3y9oXjBCwftznds7VRjDJCpaFnqNLpwwps7i84P5bHLhPZ87NmPEbPNSB2CfZbeYG3oQhpRwgiJi",
  "key30": "hqJ2SmEHqHgGQ4Fs2pPfmppDrPPMDAx52oxsFAiEGqzDZEz8NEPyvYK6A8L9tBBQg6BZYZXYyfpCuippfx66hnz",
  "key31": "bFdiz4uuweAEiuRkdsPiAKJWvrHsjuQyrRogcSNCQB47Ku6Njdqhaqg2CmsYZpfBLyoLK4vFpXrhxxpPmY59RiK",
  "key32": "39zekGR7WUmEZMBpwhr289NiEtBjRPFjik7FrZ3r7EDprw51Sak8gkkx4Hxfzp6Ubp4JaMrTveohVWDmDqnRRXbm",
  "key33": "2LxbrePvmVJ4qENYMFhxbX3CaHvoGshZuQjHtsoh9oMUkNGj6DY3iHBANeNYwnXrWUH1qpqYRraGdpzY5bTgJyYN",
  "key34": "qrAZun7B7xwRNMYTy7jQT5KDS91hAYfZ6LMfHSFMWazJCNXpW7RQEszdyXs2Cn493J9rAgeftiYkArmNCba2tdo",
  "key35": "4L124bJfrnsxj1sEe2MDzi5jF3sDp5DkJLzMZGqojKhPjjAaPFLTGmrWcWgZ3S6gEdtPNNWUNigxrvz8gcZAFDdU",
  "key36": "63vrYYhtwzSjVswErX29b1cbs9s1Nw4vvro2oBTs5495dbQ8T451AaPnGWQ9H7msQwBMzQTV88VyW3ghT3y5Yj5r"
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
