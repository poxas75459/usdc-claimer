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
    "36sd8TiokPGsUyTdP1ihnMSrP5rD8SQ9CcoNCLZEmykM8D4dLJg4DMu7LEynHG3j24sxMP6eYSn8DFVSQdWpjVSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wjw5rcPBXZUBcnejmh15tQ4zY3a4md7ssNssbJKqUPNhB9aHLfmuMNzRQeW2DtJicA3w2ZFWVx5toj5iwiSuQa9",
  "key1": "49HcqDFiTp3QZMDDcBbdRvrSJvBGoQAuYQmkafE7VTKdHkJy6Y58Qw69UWAGLgSoLZwqTr6c57msds2NiRXGXDWy",
  "key2": "QPBZJGnrGN97eHYDvfZdZT3vinXzCvweCmQoXpNdj4vWSCEkstWzh72WQREzFeV1c1umfxgyCNgHFN4kv3tvJRw",
  "key3": "4AvURGog78MauTJRx3RVLkry6UWk9EnN6PPVh1qudKV4hgD2EHC5QovTAE8Gct4pWXEpDU8JAiefUMGwLs3kus6p",
  "key4": "3oevwZTnzLpidKukGuv345yTw9bErrGWpUd4mzH6sBjHLrxbAVaMUbVjbkcTMULXbiTJMaea7kYnM3LJDpNQGCca",
  "key5": "4JXK9A2S5NcTD1sVGK2HgpTAX6MG5iz84kqnudzw2vq8xSjctGBNAGaQSCPX9zbhDRstVqimFNay7g2d6WQudxTd",
  "key6": "P6Hbjpcw3MEa5nhmuedQvJhGYuP3xnqWtQx2XFGKj2GWKLrGprx4V35BPAyYeiUMiu48CnfzqpcKkwLikScwEr1",
  "key7": "HsJoHTKbWck5tBbJFdtwFB1rth48sVtCvnHH9ip8Jgu3Uz3eenNtPvZfGbyLB8jTb24gkUDcDZ4wT85sCecSvdx",
  "key8": "5unkgQxqJnXGRqZC6WhM9nMCkT5czdKiW1sX7btXHkNiMYh5kWWRPMzgc1Go5kVQ768n4EZ4Fq9RHC1NkQynV61h",
  "key9": "4n1j4J7HPS5aWtgK55eLh4xwHi3rMrZKamUbAdmESLZZPjwr2XJ7yEzfnuvGCpatXYTEHp2ciYBFc6cyWwL3LmJN",
  "key10": "VsPzDrHVnZLGzaeACFy8cxZXNGVGLTJxrkisQV44UQwCvmBqaXsAfoNBsGNz6jwp12GzZvKjuMcehkCMYarxTwd",
  "key11": "5DXurSbKHXhhUGiMQdeGLFFicFPJ6pWvcovZuisLnKrNiFPGyevAh5wCyJ1rk5ZFsedHGy46QEqrduLMxvSVbZP7",
  "key12": "4GEgDS2hiedgf9wbwwwseiLopsMwsMYUoRbMotjkc3n3KtMezdXg5rxZAFrV3UvWFZF4rETCn5oVFrerp97Tyaks",
  "key13": "21pwaZuRzoNfM5We3515GEUwGufLGA8DBftU3UfWc4uN18aA58MCibLNsNpuJVDW9YXNTSLtPKWAuBqEKPrAoLfk",
  "key14": "56uujmV2p4kchxt4SRU2dGcYgT45iFH1aXNdj6jAzxVghc5aTfHmqKrmEBy1xwxog9zwsbav1wjRXGVeJjpGXDcD",
  "key15": "2c7MVyXd85xDqfZKR2hb79BCR11CupX5X3GWEieyxPGAeFU49Cqmp2e5wA1GLnHe1fZUuNtMUM8fBgScnYBKMBvY",
  "key16": "3pzNjVsEUuJrtD1pWy63paDnMZtE9AXhqBphVb1tCMBZjKZeke9z7oJ9kco7M4BJZDRdWPHmAwHCMNpNnf6k9eeT",
  "key17": "5wxJhcLcf86Uefivj7Qi2RXa8LJeEgpiNN7DPvCi6ECxBvi25H54TPhKoFATT2b9QKc13rZK4QG6xT9QWB9nPyyV",
  "key18": "ENqJKbxnsvUe62hyrEhHunX6sa83JVunzfqVPfZhABJF1UHf3Z6iSvDTgXAq3AWNypBMVLfekBcsB8X2UZk6MX3",
  "key19": "4Z6s4PBHCk9LsUNRx6ZihurHrKTtqm4CkiASZnnnFjtxSrsVaWabzASbopWC8hS4TnPXcZHzhnqacJSG1Y9JmRRT",
  "key20": "4g5kACFn4VvHEoBcEFP1Yzz8uxnCkozfZVZPUZr49poouvJb63iEotvTWDjyaxZJhvV6zigZ1uha5x7pc2a2MU35",
  "key21": "4LSyp9cTj4KBJbUhTM7faggQhBC3c3x6Wcmi153XEkHzDmwfoHgEbaRZf43Vrg68NrRMk7TLbaRBwVgZeAx5WsGf",
  "key22": "3T3eRNiLNKHV47HsHPSeHPe4oRLgBPZWr2p3MWyRZaiF9uoLWYdD2mhf8gYEftKsbwGTvoewgnf1hMS9pTQjbGFS",
  "key23": "3Y8BUxZh5ktJ7rxBfqx2QheMKrTu2KeBUa1vfRxDDEJVNvSKrtdDVDFSL8AVSPihQJ1qvdkbgXneGiB6svg2G5wL",
  "key24": "5yVJKMvSCuQfy8oycWNyjSNs7i4RRWPY47ErxW3TDe2LqLFjewhsEZoG1RNJ1NbUGk14s1X4x681YxVuaz57dzR7",
  "key25": "5Xrv6rLBgjiXP2JU4ahatM7ekW3eMgZJhH5bZU6ZK8PswJ12eR2A2d9dgWvoYo7WrrbBmL2SYyREZUxXEhei3XKP",
  "key26": "fSKCFaYGX5BXjUgKHaoqfHkx95UZBVZ6GPHyfpBFaaJr7kMr8gsTd8kLrYb7DcgDzCkwT1b6ySdzRZ5ivVRKLWf",
  "key27": "61CSjgJH9uLrPecq6A6TsNuBDWVNCCtiyfaxY7dEF8vJfTVux6NeRvGa331MVCYsCu6SiNGExvtgyYiRUEu6YpEN",
  "key28": "Wdq9uxREDkyJkyARNs8GS3P8Zc2aBWiqaq9KRCBg4UWVsfd9YaWjniZVMdzWDEPSVbwzvf5mADxXBoVTLgPh6N3",
  "key29": "2KpFuj4gjgN4drZNqhumdqDgWpZyt4PYyQyMvudgDRXcEwpnsFQx21pbWZjxG5KxQFgHQSYghYrpMhjqARbCN3h9",
  "key30": "4GQF5miWXtDdtLkVLDKfFPFBWKMRQG1ydqESJUyF625o3SpWsqKsL1gXHDprDgv5wRTdJnJNnWMvWtiDgMXwez9E",
  "key31": "4f4Q6qRB5ERsqNi3yWQGfs4LYviqbv9PP1dVx1ePYDbMnLUhd55Airy3Z4vJBNGVP51ozZpZZt8EQPtDV8HjRYxK",
  "key32": "5EiLHcEXhsFA3xgbJATARZSCYgysr14NmcGrWWQKpFScUiadJ7Hf5Xy5mUaPDvFb1kR4wAcoBkYwA9iF6UJss9BA",
  "key33": "9RDRBA3ecJ2KUZY92odYPRzyXAT1GDdU5fzDoa952FoGkW3FF8T59wyvSTsxXVhwo2xYH6kKw5uScL8cAhD418a",
  "key34": "4SAvXGVyQftZdXzFenVxENzW9TQKntWArUcrqc57E8PCx1G2XKmEGErM2BCEmsPUbjdst1cjn1jv8v2GMnLKJ7jZ",
  "key35": "2bxYpzHwUs3Xbx9LJv8kXAMxZ6cEVWxw9eeYr3weJoyKaT8ZbsuWYF1rushiXVSisgAFWdk1dbaeAN7NJHtJub2b",
  "key36": "PG7DaCMA2VqYjiY6yBRjsH3Md3RoRadn9y9p4pqLJNZZY2PGBy9vadikTPQDQT2TAfkJr4j9UwYLVnqEx4gE41v",
  "key37": "2jZ6gnhzn31xLqkhov72Tqf6ke8KYdCbvZctFABfAQ8U5WChKzH5qFYE1YyspoHeYPhgu5YuBQuNR9d77aSBHDHu",
  "key38": "2eUE1mv8tkoQYPk68rTtX88geUeAUPM1G76zDTP6srQTNYcbw4peGLf92BEuqTbBd9rVXBvJ486Xh5smpk78zYnN",
  "key39": "3GoVeUzL4SXRpQck4CJHWaRsLTTn4sdH3pqsLvEBi8YtmAthEXhsreCBEC31VrfCf4ShG5yh5RyoHbpdAAJV1egj",
  "key40": "5U9KqTcTzWXCvDrdkzyRoSZPC5JZ7aKvKq5BxoM7Z3JmocNtETb3uV5UJVFU7guDYx3LyDUdFQ99d7Lye8peByCm",
  "key41": "3QcQV4SSNjSawMp7t6KfiswxkQKd7F5jWeAwZpvZtUAeFYFUEfNWSE7yfACoJ1GpU8DwEnXbuBcFtqvNnFbxJnYt",
  "key42": "5DyEFDc48TgLhurxcnwAtWz6rJQdesR78KFep4ep3xXycuLTbYTik34anBsRRSrsWXpnAmPJzuw1DHdMefocVYiy",
  "key43": "3f5jeZmVu1yjDQUdspn1v47SYw31Sqmb4gGiv6hM5Gbw3kvS7Enp3Ec6skikHciSHaKHbFoUbwFpfDsVv1XggtkL",
  "key44": "9dAn8cQr3nqWKpiQ89VCXQtak54sgTV7AVd86nE5ZKzMrDXtqKJN23i5XVTWEKByrhs3JNbqL2UXQo5tGUaoSXz",
  "key45": "5NovBcVSoQvDBAYvskdftUPAeGAK33EvENYPZD8G8R8P7n2YrZe4sL9mstcZknDET6VFu5XRNdPV9yDdnXkvvJax",
  "key46": "2niWCf5ue6E1ChGYKcPBGo3WJYE9JjkqCBPXAz6Q7DAnEUJh2qCjdnBLvV3mWFcEcxhA8KUN14JjZokwwKsiCHAN",
  "key47": "52ThGHZVVWfVV6ja8c7Vh5Q2wZ6tHT7DvZXrG8RWpPKLzGaEUxKdCqnCaoydSjv3d5YGFF5ZmWoLP7EYRHLkWzqa"
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
