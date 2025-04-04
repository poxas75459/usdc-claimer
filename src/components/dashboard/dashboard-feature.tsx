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
    "2Fu9rdvcN895hzqwMx2t8SqVguzeD9FXrW5kMSizPyDMATR4sczmzTuWkWorFMBLC6m53VWJMY2vozGziLak5sWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356FtJUCvXcKbcB1AKacFF1WcrtCcB7aCfhLic29KgxTyJy7X11Jrhuibeym5qrXunQC9HHtPFm5cYkEQ3DidSpL",
  "key1": "1rBAQ4thJDXKxEe4p72rPU97Zr4ksfqFeuyHRUfWcWqxC6N8BhQwofWGoEBewoxvH7Cby87PAM7kfjc9sP4xTob",
  "key2": "66PZBR1Dd2WFkjjR7ktswFcUXW8PrjcZs1gufDoQtFMiLEShC8mLab6gUbEf5rNsB4wJcgS8e8zuPpUy8DBiQRKy",
  "key3": "438j5iUKrVb4X4emaHjknXcR6fWXXgEZDyUS9Qf5w6WgWpxcKLNSMS2LZnC598jtBWgGMDnamE556J11tphh1bUr",
  "key4": "26GVSxpuJUN7eviYdrvbhhggpUKMCraq9n3sC6ZUewy7gQTzSWPUsCnMGzKmN6EhifcjjkhkWtoB3einJ3jcH9E9",
  "key5": "21j3C44Bs9RVrB7VRRG5bm3QyWymC5tpePZhJHe6CPz3Kk26tg3Lw52QRmRDhnipE2Nkir66nXv4gAaRhHTNZreK",
  "key6": "3CTb77Uw8nNEgn144m4atcuW7zkh4rVyc4iYt81mqMXh3iLGPwBu7E7W1GEBR8mqthEGuPGh6U9eKxpuYhDA9Co7",
  "key7": "3Zf8eN1nrR8duJsReeAdX6HHq4JWWgy8EByhP3kNSKLS8JqFsASsCUcdGMuoAGBrk6CSpFiXRxyyv6rGvZtm3krp",
  "key8": "26vNKsVPZMuzQVfFmV1zHkYqzPcjdwiqR3PVXowKiHT4tAyuW4afHXK8cckrHb7ZGXy49HU46AiRq8YEtgAcsNAn",
  "key9": "3tL4CLJe1fpVHq5ZnH5EdxQXYZ2UFGsBc7WV5spmMAMvFUEjVMj854YKupVwxuqcBAx4KF4NCRVUDcKGn86wTQau",
  "key10": "2beRzqV2BmbSx71yVUK8NGtwkysVDPRkRWXnWiPyvPe14FCWL6F7CD6AN18hjbkJjig7igNxfvA6BuARGDiH7Vnp",
  "key11": "3v9nXHx65vAnjC4NLpe4VoJnW7nnA8xwFSHSuk3AyFHMswWPWpwG7WX1qw3ieFkSBJRcuUqNGP9gBnBhPV4LjRtU",
  "key12": "4VrbE7PYjFd9CUhoZGntpn8yC2LJpZC8ARanULLx3gevH5BmaWXAsb4XopnpD46w3TDXvfP2VXf4bKdJkjrfD134",
  "key13": "3PfAo5WiWjfyPiPbcUDR2oonPkhEqTaRY6H8EfvocStnwRo1qrVqaYDwJPJSwhxFKZBF8rbDEBGaTitvCo4412nh",
  "key14": "2fy7SpohHRemo5pagK1cmrqyL8xD5oFDhNsa5ECWLDNRVNzsaWFDKKom8gARMoE1aiNqxAchULLb9fhgWkvBGnJ7",
  "key15": "2xnSx4CAjUZZaNcqJkSRHoF8f1BkKYWTF8PB5yzmnCrweqFMogpv2WiVDU1X7s6CcjM7aXKSFPaFDrKVz1xRJgsU",
  "key16": "cR9BZeP3gzqHksaTkRB7sXptM4v7XkN6jgmDPkiksz83GNm7u6Bd7FeS34jEotzijPZTvPU72bcj6cftSh6pwgt",
  "key17": "dT3snCX8rH7fvyavDnSJw9oBcPdgXvjSp2bDPy1diW7VVh6bq136MzFHxXYPwVv7gYRm2Z2jQNKhr58vGXwZ2co",
  "key18": "2BM8JjiF6y2wiyWi9gGc4Ci4jePybHQfpGLMqNoXzHb9hXGttPzanWDQykZSm5SEG6cL1LHZcLjcVeGvt78BPEZR",
  "key19": "3SmBUnEkDy8Kxfg3S4FKjzAqZe17TJwVc7CCCirRys9fxQxmjEEyCwguGcBHfgx34MS1AJywg2iJHjb9zSLZvnEU",
  "key20": "5fQiVUiH6bT5GUvRqu3SiQdtFqGuF8jr2iTYHrwyxdL8fEbKutuKNdTzywMugeLxSwpjey4r9LaEFNPEYwPkyw9s",
  "key21": "3GuXEB52tvZdiGFiCcUZDLbmzVHtneKACvgx9XskLQigip1EUm3w9nkSMGjqDe8qc5SokaVqid996Aqur7ReC5sR",
  "key22": "5rfDiDBZG3KVUYVRxG3JHsHRzvsJigP9rm3e94kAgaBAv8arPBjz8ZN1wApVSQGnf5VDARc8F4mjfg6xweaWbFBM",
  "key23": "34MGtyAaDTyMX9i2nExe2pJa9zGwevuomXqhh9fwGMJfHUEXU2e8b5wfSeccpkWedCyQNZyxZRYd4AJQPvpAKsnG",
  "key24": "576Cx4dePAZShNrEeGJRXhQqfqJ7zY4oGiKQKCpq2Q3UiiGGc1GWBYt6Tca3dC1EXM7UdApW5jFuXQbFaomebEQT",
  "key25": "D6fnHmb7wdecnxu67X4yboxrXE1qi6UqNm26eCRKQmy5Ca3192sQQhA1njWYPvxh7TMkDqppdSKpo11ZLytfpKC",
  "key26": "4UMvpCTrEKeMUQwKCgDHSL3Q2F55cZCUpVwY79NDCBFkG8pkfFCt28RmpHYHc8645Y8oGCQkKwBojLwKhzvE3694",
  "key27": "2LSGzY66ksQ9RSLekdUBEP317AGiZAW8jEtAMiLo3gTntycBjos3qt26ur8DbVk37JiKWe61rKL97jaBDbhY3jUq",
  "key28": "62Xk9jKb1a2RYwcV8MJJGkEg1doo5Utmn7GHuogPDtoyoCCz7Cu7YdsYBVHYJrwgjpCdoKWPcy4kkYAx1GoWDvUF",
  "key29": "3BPNdr11nvZPJG6voM58JLVP4jPs45wA1svoMmtiqwtg52WNNmdKP9hqmKv77RZYAimfNg45FsJJ34Nx44JLYGLy",
  "key30": "6R7VmJpqE67y458XK5k7ymnWJX9hGA3HX4A3BgeD5CgCSuTbGFHCGQGx4amVJEDJ71cuDFSi5zg89sHfD2A6JN7",
  "key31": "27oympWHTCSzmVPBVifjjPv1BtBB3USHYfsto1RRMNCC7qQzeuzSbhPaE9hoanrxD17GfsC4gteyhfQjVwVhawni",
  "key32": "2wSVqJF5Cpdg2D47A5YoCTKp2ExfQRdrWYxBpBpnXvyfb1UKvsns4t7ogaeKtuNCmumQkUAihdUXV3wyoFqHUBH",
  "key33": "3twaghgBmChNoTy6KkgdQ8zFKzUX97KBzvsvRMfB4o6boA7T9cjMxCmr3sSgc8gz7VPN2ccEKzXWDqnLWnrBwyCw",
  "key34": "Qfmgu9FwxxSAQysQCBUXzGT8MYnAndes39vBnsnRCDAYiZsN5x4Sp8zRRszUkDsNpuA5ufRoD8cHVtTWdVwqYng",
  "key35": "3Ho84mZyXReiUUHQLaq1d4rRWGb9QVk1njczYq7kTiwFvfntLjZZ4aKLuEiAHPXtEg2kJoQcUFWy39sTpq8GPwtf",
  "key36": "3UP35zWFtrzKetVD8DyDTwQsvw8fEqhBsQXxsim6pcS2mNqtkpa7R4F1xp5mpraHf33m6ji8H74k6YFdpDib5ojU",
  "key37": "5qjBt4pfH7DG7zyvhfTJM6sCxoy9JKUrsDz2HG583UbriZ4gi1EQYjRDxXyMZSdqifSL6spYBKG3hDisfZjqCrrP",
  "key38": "4AFzxycU8V9YTe49wsZgcdWFQKQbmkiMKaQ6psk4zVCYuqeZ7n4iH9q4e1xbKJdUSEvGubgA9bpTZLmYrfxh3vZu",
  "key39": "3rYpgW8XffGk63aEwgspAQW2nKWDLqDREpTjcszcckE1V67t8qwYX6ze4mSrjUPb9RskS8oUTMBPikcgzvqdWrea",
  "key40": "3o9fbzDG4uRJpgEkPEdK7gpE69MD5nwZf8GFBxmNMT3GDvAXKzqjZndTzB7SUAuUbnovEJPkXvMwQYZQhQNivmLW",
  "key41": "A2CdimeNULAV46eqE65SFLjVSFxALs6ZxYq3KnWWJST7mTWr9JkM9q9KyeQrZe3nDdh17rnS7q8NyT6vAoqChAa",
  "key42": "3M78a1279cZn8WQ2TSbCE8Css8KxeY3YyGZvUrfWi6qji7eQ5pXxnx5Xp9iQQXPEkhtAMvRTSU5yUS72Vd5sLZ3t",
  "key43": "5pkcfePDx3fkprnterEj35KDwUzfsyPsg7xKUArL6AvXeiBjPhqpxgJpo6TJscBMtvNDjnbKMeKRn7XHJYnvyjLY",
  "key44": "2mecXJ2KAegKPJGQeizrvvEUMzd2D6qBzP2zPfSvNLRigpP2crmiLaPWkUmGdbUbDnc6oxguSHfXpvg8HMW9nk3C",
  "key45": "3KTieTX3quzEFnLnenq6VF9sBSqiqsjSARiKCdZUVBLJnaABwcuHBdh5hGCTQ61t5t6GTbwoVk7M4PYEqspA8mSN",
  "key46": "ixaFE314UqB4aJRnpNpGL29j1pdDXHfh4JBb11nZmNcfmNW3qetWbtJxjw5jTHau6CcLkomjBASz41fAbVRURNR"
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
