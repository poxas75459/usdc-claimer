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
    "4PtTTkxoAai1jZX3TuXqANTTxGuUtooiofM1De6vm3kpmgWcbr2LKKDMifUP9XhPcTfWw8VagT9bzXEwCQsrvTSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJUc4JS4KmnUFb4kUKoEXdfscxuH7BeamvHWt2qeSg45M3wmVPqkm3S6xbNT2f73crMdQxaTvWEZZnJ3gVFrSok",
  "key1": "4rq42Rob2cZMef75b81ho9CrujeZiT627oR5M2svrcRdCCG5NWgUmcLbwM1EqHnJxXHJiiS83HDjm4GbP47pfwn8",
  "key2": "2PuN6xjN72Y594p1Bo7PBuxvJZSR2rYfnoiksy3Z8fH4odtHj5uKhuBSYbnHy3WQU8hgwD6a8GxWL5Pn5JGM1Ehx",
  "key3": "2Ss98TFVuSSxCsWX7UvTSbceFKRNMHPLwFD4GYRJyAd3RXdZ8kHmaE8vJRzbzEFdJjuAiX93bfJiwp6Mkd4ojTdU",
  "key4": "2k7dRSsJtYFPn4gnnVYkzukbRS26nyTehQ79byVuhXdT55q1DhyiXwoiXpuGvaRR1QQuUkATAMwkTUghEvXGUmjB",
  "key5": "5aNga2m8bAS4LAi3oKNfeugFTiSqdmEkGUUTQQgNrdbDDBaFHp124tgDVzpzMi35nMWPxsABcfVb7fNRRAeMdEdz",
  "key6": "5yNBHn8HdrNwtuKbZfdE3GsGDbn1Xvk29oD7geTGr6U33xmrMngmZqByhABxd4ECCfCs1HvbAcnFdCQSfbGSJ77T",
  "key7": "2TkZLUCWD7i5HEeTRrXHjBWXD1Bc7Pza62xddiccLGpuCQytoSFf4PoX7Xixh19LXuDL5uoVBsitWcB4KThPg5P3",
  "key8": "2vqt7wnbieMBNSsuqFiGQ2o6cy94STtHGXdq167868keSJVZ2QtvbvCQDaEmTmmuH9Ma3bmX6yEQ8g8AfUyKbLwQ",
  "key9": "3x6YkxZKbpUkEmmimCAarz5QEXpKn5LYLm75T5KW8Jg79ky7Yx5dwheirMDpBVmoLWB9PvGa6365tTzBV3a3v6id",
  "key10": "4Zakqh68U64zKLFwtW6q94BZoaqD7bSknqG17UvkCcUAC2LeWEnNwhsmdpU57KkXRj5JhKDuhjtvJBg1tjCo4UN9",
  "key11": "4RtLCp9hvi3FfRQGxAVLL8dr1NZYDppEFvnRTFjTTHXpDMf11EBUTFGzBdLJYcN2wWPVQjYzBaVR6J2wdwmKmDxm",
  "key12": "5fC2hfVy4cReWe3MTLuSxz6Rr17uV5dCShrbzBLTuEkviTQiZwdLbWhyKzsEALijUA8XD8s7WEDYVzMdeAjxqdTx",
  "key13": "45jthE2YjTuaaiTrmZnQESitkipR1iftDCLVcYaDyEBjnFH3v8jbX3h3HV9f9Y4wRqJ6rLTs4Qvf2pMgQzaVefQP",
  "key14": "254mGARj12ca5rYiuvHSxDR28rmZvYbKndosJQCrWQTqMYmnkPxW8ApqdTyo2aihAB3rUtcgXEYmNsBTyYM5R5uc",
  "key15": "44M48pgUMj936cWSfN4xBMSahybfG6jTiZqgTZZFeKqnVw9GcRnzW3bi87uLcSpJgf2cpGsLsVDWt1nBdUGtAMNN",
  "key16": "4DrzZEqwg9Q9duYvTHKDi11Fq1vWGpKQg2rQ4CazWDeu8fJ1bSR9RBgmw37U1M5DH7SX8pNv4gQ5YuY4LCqYKw6H",
  "key17": "5kjz3a8UVJKFRD3ANYMxrT43Xhs2h1JrBbobFavN51jUrZUHLC9ekKLoMq9p7S2HS2xVo6ybCyCaKudaE9HAHnEm",
  "key18": "5Seak1i3KuxfCSTYgEzLPzGiT1snPzVLHgJfaLNrCfd9PZHv38V6N8HAGv79zjRZr19xvLB5F2BeJL5b7JLsypKJ",
  "key19": "3wJ1Pz98gDFxRZ8gQgt31afeHS4imZuJfsJosvQ9HcPYTqAzbpbbiYYUKCSCN3TCncg79oomDdm6sUzMKCtCWpoi",
  "key20": "4mcdn1mC6fSsuXeqFiZ5EEVS1DzX3t1RTJTihh68QvxEXixVQEeE7egJ5mCW21RxWsvu29PQYbRb2JPDozKU2aKn",
  "key21": "51penKREcBskJZF2FMGuVuKpVnEhvAxNQnRGan4NDkhkNQpy54eYt5xK22f2VPFBEbBuQihxUN8pSmf4csQJHMeV",
  "key22": "2SMT7nsHLfMVk9rr4reT47qXBL4YhuwT2Rt1o42kBgPyjWz1aarrGj7K2Gwr3sBfWYcdS77ABCofbrBiAhUDTpvh",
  "key23": "2XYDgjBVDBMYet8uL2uy5UDKcWBihUJksLmPHQTBrQLLozNZ6bhAYMgT65GCXidLqBDUAJ1WNPjuzAyjmAUUAxSo",
  "key24": "2CGPEwcrHSrxymZZZQG6Q6f2jjGXRaUDX8kNsyCpyCyu2WXThtKrcZEot7unaSD3NrMRoD6QqGZjxQ1zy7jvemmm",
  "key25": "5BQDPc6X7MxhHfy4uy4BKiU3RN3NtmT7eYbpoyQ9AW7g1ftvY8AiFq6tt1HCSSGUa2JjEUDYhazTvahwMx4pYXRA",
  "key26": "4n9f86RX5YUswCfRS579GiMkUjqeP2RwG6BTVTZ5uk5LMiTWVFoYuY4KmTYakCEXVtd3L1GPonRcrUnj3QVRdBbw",
  "key27": "4vGAVDL3DVi3574ETsNrKMPM2r9jkM34nkdSzHLe3qp1zetkdXWKNyjbRuRik2vA9H4XRNMy9YsKxM9zkSkzDPxp",
  "key28": "4946nYDi6CT9usmedCHJLxke1P8knvaesw8XTCSadRjoC3KQkzX5xgBNh55UBZTCiHuNHv3hTUPfc7iJDVJMdcQm",
  "key29": "4a2EQb2wWUjzrLHt6FhokzUGArGB1VzvGdfFvpm3iE4LFZ8iwKUTNKaehVa9QsoZSnjHMhr1AUsLm7QiZu81Ycpk",
  "key30": "222ycgEt74nfhuR6zuxaZp7u7TCeLg4vFWfNfHwLafN1ZSujASABvNnxAazyTkQxvmp198GG96fdQpVZ4JsvHEYk",
  "key31": "4QP4SzEYXdXCTo5reQcK2DXPpHXhaJ4sH3TGmmoQhhV9qwGgneyFJQqFpPSwmRezKJ7bCEzMjcRUuioAoVaXoNWN",
  "key32": "tMhtRUYHigAoq1M4SVRxZT3K9zpPDVZf5ZKq94cXM1qhNCSjdNL1HyuQjXdqqRj3pro9k9uGYR6wWMce4UFcrwb",
  "key33": "Uy6P9i6Hm1tmPGb7d8Wod27n1RyDXms23bcRzBoCVTKzMhhQsfHom3oVwy3tZveALiGXVPEFnXdQEcMD1h1fPwa",
  "key34": "2QuVG3H6KqNgaMQdQcEJFXwbp6jUnMKq9UiYoxzkneKFTMZ3BeNwYa59Q7pJGBd77gPcMjjdC4AXPv5jgkBddHyR",
  "key35": "35gLiwEdbV2vVPY7PQTh15BLAx7JPzV1jpYRgVX4DMwz52T3fRPVBbjWiyL5Hjzw6qnXQY3HPi9rgXDP2he4m2c2",
  "key36": "2m9GCryKDBMq2g8Bqk2WewdTn5wxe77RRppXDzQo7NEsq42uvHhsSMH3isCRnFLS4UkNkTAuAFhMWYRobpwAHGvi",
  "key37": "3rG1E6i528sFypaVHR735bYM6kE5Lv5WxounDzMbtACjR2the6Gt5dZNbTgjdRn3q4UUAxriaFvBihqnbAybHizr",
  "key38": "4makdaA7bUjGW2hjCyeveHSGaUMC9JshiiUJj5UvRv8Uv8o1W2BHvRS7hEAmmQFx36YyXtqwNGeT4xdYoHq7e77Z",
  "key39": "24PCctY1PJ8cxWmDHtQpMDBoFWV5582bWY1UrrwZjHyfoowZEoRWGR7X2kE9ysq582Ve3wbo58gccp7BbznfFtLN",
  "key40": "5UvrRgMLDM1XucCKKizCR5Wx6tnkxtsrZh6qQf7va4sMHptAPHvnWgCJ4RHFHZAo9XTH14Ah7uMUdBXn6GyGizAS",
  "key41": "5W4MEFG9XT37D1GCi3DQUqSD3BeT1N2ch3prR3tHTUtgHXXWLmqBzJ7PSTEMH1AnCoBbDUQspBwMcYfRW4v76Hje",
  "key42": "65hWGCx1hxteHaDmUCbzFbjU2GWbmmWx1HvGazK7D6UF7QZo632YiorHyF1MBwBhcrx9vSyKwdui7QALSHDr6Rz2",
  "key43": "42JuFmeGFyk3gLcxHQfTk8sMXqi2czQqGyGksD3a4nfkZAT7KtuA4uSpNjhg2LsTZQpqgcBRcREFh99bGL8ubCTL",
  "key44": "2hRZu7su3aKqyesqhVQRzhjjoUPhKr78ggQ9QzwzUeRFzDYUnC6Qq6JFotNfhN5L4dNXsi6bZ4A4wpMHZGnddSyT",
  "key45": "2r1hCFy71FeCgtmkeswpcLkGTuFQXsKRQmb7s92crWk3HpnYeRM5SVTBsnVKCdtXTSbh9jePJcyCckkYU3f1a3NJ",
  "key46": "JW332zyb6ihis7QLgLHmBUewsLaaA22SnTtsvgxCocMzHn1dUpT1n11bE8xy5sEJxxfitzUpkydCRAN9MdrAvBR",
  "key47": "2BUGbcveCHVkquVbpMbnetEt1cQM4XqodHffFgfKL9vPhiiv74psjQRQN2s5M7Fwx9apfn4AGJ8MLqvUQvNzt5Dq"
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
