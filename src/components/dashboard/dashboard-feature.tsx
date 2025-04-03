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
    "28aM9oBMf9g8yESZqvSqXxrSGqaxmWp7wqAfPR4j5LGjj4wBXtwbusXAS29xQj84JKA6c4baAtC4T2SuyNhwetf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H2qN3izbwqMgtAQYGcgQmHvaNg3GjhdhRqqqQKqVK8gaQWbSRcCoyMWZ93MuVmAMG4NwtaUB1LBSqos1XwmG1Qi",
  "key1": "4spt3XnTf65qLciVYnpSJFCvMtJF3ajVDu3Rg3JxFpb1shgfrEDFGTuRRC1Jf3m7ULtQX3AsYsv547ZXRoxt1viu",
  "key2": "4TtNZFLNF1oLiCzwN7YXWafCf6CKEXGiCFWghzCEEibDtnwxLH1BjnuJp79E3WAa1igPPAUDdBz7jrYshiADbBXt",
  "key3": "2janHSHQNx2EYWGB83yNSZYE26qL8RxQDxL1sNFkRkqLujZFnEqGFv3mqsTw67YQZqCzjojyErkJz4TGexQCgFoc",
  "key4": "RcYvdscMp77dSYYD517RLFiHSHrWZfde95PWUpgNJiLduwDJKK4LCTMpBhq2pFg1fxVnUoRPLzTgtUCeMuheq37",
  "key5": "5qrwnECMotWck7QDCYWeEvYqeGXdWwUG9u9hyLSowTHkD4Nyn746DnCGGH9KL4zbXM6yoXC1q95HghMU7cEXYK8Y",
  "key6": "5GGP5Nv8bQ28QuWTAV4z8Tyy3Dhzy7JVEJzgPoHUq7q6ZKaSostXS1pgj6oDs1nKT4h3nQeQB1t4yhWkce8mtk83",
  "key7": "4k4MMptpziYUrnPjbTwzAYWgKxQTaSzdyBan81zsn9RQbK9s6oJ3qk4MJhPmAES4qmDTafWkzuBvZVAX7WC3xw36",
  "key8": "5WrsFX6by5DWtDUdSogmLNiHZXGJjTjBSJzDtG929PzFqYTYCrNicPnR4yw3PiDqCUjjVWD7KRQMBWrg8MneEEQg",
  "key9": "4dhWmqmMatpxddipFRAdgTUN2yfFSednVY6C8nbR4f58e7BUwxQ9H9i9Rh9m3GvzZaqTxvXJTbjerTrqGfBHq1Mv",
  "key10": "se6HBJKUgANe3p5ncFGJXMxmXDpf9JHatHspG9fU6wGWbesBhcgseZ56sRmVus51DGtXf9uRtmUz2Zmo1US2ynL",
  "key11": "2WtJSCAixnbFVReo8bH5qVpaTnCLZBPexGeKbBmj6G2v62zQSN8khxNiiRH9jiSuVZGywQeApWG6ywte7YEPvjYf",
  "key12": "4bmcfPvEs4au9QtA2fJLemtTDZUqn1y7Zf9AteX2gCvFjm8ULtqM1FWL5inHuzQr15ovPvdKQSjGo8MeeXix6Ljd",
  "key13": "2aMXvcn3atPxFquNeyiaZyNnWhafMm6wVkcax86Jk9TUNh7TkPQvva677huzfDdwabi1H4oghA3pUsqT4DR5TVBu",
  "key14": "3QApZP5fPanTWYZvZyzRBBWLrdUQoKKBuUvkXvjPrTuKowiPHsugamMP41oiRhu95vKaC56cwAvbkw8uXNCQVkRk",
  "key15": "3nQgnQ9BGMB2WBuqkGJzh7TypaUBu4DKVNaLySh8TvW3QFyjN47jgTG5Cr2y8Cs3fPArX58TUAfUdqdq3L25EAcU",
  "key16": "2ziFHs9HGToAu7xYqTjAKpkomc6B28ZbLHfZmNbetQssP5Y6ajsfqsfpcjgtPFgMBcxRVz73NkWreA3J2KLNU56S",
  "key17": "66ggftGaXxKGgQJ9QjM9FCzicPQXj3s8b6PGcP3JKhaQ69nsxHqVzf9PuPRNe8jAhVfZZigDSCPz5T6rr4UvjX9W",
  "key18": "5KyzDdLQadFmjsEEbr2tHjipUvRkQTeg3Qg2nGiuyUddvsk7p7rjTYieyYhquxruGtkEGE1ESZn2Vq6kNemKG1G2",
  "key19": "Peuh3Tw2ZpZc3nefQXADcMZZ2QQbtvHoreA4FVRacVBQp9rRBzceCpSKgrqG8zoo5xWTAeKoN13SsQajHNWH1HR",
  "key20": "5hsKSQ4p7jhcZVTQCyoA879EfPYCSwedtJ3D3jBZD2SLFoC5HBKVgGNWE8ZMY4V9ne8czA5FV9EmcGXmfUmPeMsV",
  "key21": "qNmBzmxCQyqEwmhGWdGLY53GqqSHWBDg4AEoFSdcTKW9yqJxzSdi4mDT55QjB68JCXYbjQTwpcuPyDoxZFimtBM",
  "key22": "4iSs5QGXpwX9ajW2iuFZxdBnfDHJiTZz9tzQcTYrD5byxdin9TKgT5uy1tXsQuH4JSf776ZanBmdMXAbomiHPzuC",
  "key23": "4xCVk5P9JCjN8AaWg1wWnQCadzeJpByS5Htk2Mnr8rJBrm6D7rwNwKdSFAgarfrh6Qx1iTddRA7HJ1UdHNFNQRu",
  "key24": "2ZiXvWWvq1y9Pn7tYBesDdrDhBxdoR1Z9ZqtremAxVPfzpry7C2tG1GXkb4Kjb5cw4bG2Qu4YSEKyBn98ADVEmAy",
  "key25": "5fKm4wqFPUPtLpsoEmLrtyonaK9MxJZP3R3VrAEQ4sjyXJHbF16pt7PqiVhnjihTyaSXCPxG6BCU38rZ5ZhBA3Er",
  "key26": "V7tujQF68k3qPsuzYFBnAQNVogQtfGHtCE7SrQKqKy2ghU1bKEGwMMDX2UhV6TicV1k1in5LnantimZUTKRsvpM",
  "key27": "3er9UTS9Rxa13LmMmfSP84m2Y4bfMrEnoEyaHsQSKyZ6y5i2BDyfh3jjXHdEiQ5wMryEvnTXSwXKzeF5pz9qdCq9",
  "key28": "4nT7gsoMXwmu3Yfuv1FXvhxt7BbdKQytXFZVLsMvE1KvpCynKC1z8myXjrPtqgTeLPHCRq9cP7zvYgDMzWL3izEk",
  "key29": "Zh8nwtpsV67f8QQZGjw3EUoM733n82CFAvqb1r2CX3PeUz6pWu8WiLBv6sECux7nMWr3LoJDe7QzQoKGWjokKLi",
  "key30": "SrYiZFtCZxPLgiWrjo8kC175PciuXbXWUjLSaxE811YtZsNqMbRjpbmjpW13tMva6VEDkJdXsKDo7BvdoAnNhEo",
  "key31": "2PwLhqaZad89o6gWfFTWx94D23ZegGAMdzLQfoWD4TqVe1nbjX1KivD43SnEgcbh1GPRx1SCsxZr7G7LQHHzLadk",
  "key32": "5ddVvUjCuQ6L2PUbkdWpouG1DwnToEYDPHcwHoDummJ1eqRTVjtMpwxeSuVVkU7WPbaieth9ZPaJq1rnjN8uS4av",
  "key33": "353QkGxe8AveyELTrX3Abrkxo13ASR56UZLFogPKphppyQ6Mo5J9MWcnu9Ng9KREQxrvZ29LSGNTiyNpvRK22iuL",
  "key34": "i47JJWU7JQ7PJdHEjsUfiuqrSLWeUhag6XeqEF1BBkUEKZ8hQiquGsJSZabFWbMd17kSstCv1Rvj7hQWauzvvPp",
  "key35": "3DtGQ3riD4Lr7mM4Vsytac1Tz6HiVuAn9vdWvkNibWwWLUzHrWya43gTw77rkDBqDuRFNKEUWWFQr6WmcP2vo9hM",
  "key36": "2TEeEA2UB2Dk9FYPMq4UFsEdDFNpxxJz9rV2NMEegUpm7aMNpTT3Byjz9Tq2WT6saXQ8oiNRFAS8FsFRRcgKYwXf",
  "key37": "62RWACVg7yi2HiRq4GsrMTZpkWLvb7bcrJM7k9HHU9Cur7sifmeTFEJXyt96wFaZHKde8QtPCHviZexsi7hpjjzF",
  "key38": "4eg1S72VM4dLkTP956mU5aQXbYZYNiV1yohKmokZnv8N9XgAL8DwvrbSZS135AZ58JCFMnf3twLcFawiN865LgzP",
  "key39": "2uF3rkfFRu3MwQbW6w9NozcFn4GAXo9BCLdkN88hpTPuoQqQKsx4p2uZuXQaCx5vPdXYtyYU3BFNdbMxTabDBLeP",
  "key40": "AJ2YN53x4Agk7sE7XSUGYungnKxgUNPxJr4nBz6VeF9UQDxki7F6y5cEyuHJEDEz2afkGvjYGB7c3DL1im4SgWP",
  "key41": "CriQ4rUVF3V7tC5iidPeubG2XNAvazrxnzwqJALvmw9PQYcwBd3q3pazo1f3U1q1oWHnZKRxTZxLDta5qKhRGKd",
  "key42": "C8QiSbq8EqGjkkKT1mFqzyqnjzM7kmXSjMocifp7aFjLssLubY5TNZ2tyYcULDbs15tHc6qiqqaoTZUNdrAcfNg"
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
