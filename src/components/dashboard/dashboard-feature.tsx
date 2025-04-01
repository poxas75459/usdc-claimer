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
    "2EcCL33KSsYNZQnJ6cpE6NtUtXH7GLVTMRRReyYK3sveqDpdCqUsvDSfNJPwxoGai1CPegYD3Kab1x1oESDNdYwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRqyRTuSE3WJBYsRRiJCu4cmreHeYWjEHz9aXbNzU7KZkJYJDTxdc1jp1VhZwf17hVpFT6iYtuGX93XvrJJ5CDL",
  "key1": "zA49NkUL9x9DjXeTXmeSUQRo1Zr26ruF49QUSeqMJEnryR81EdYUG5gDm5p66YwZFNoKGLnYrvSbgmYbCPtCmKW",
  "key2": "2S9cxvTZC65jnnB2yppYK9dtPxqvjrD699F4zaqcmNEeEoRq26H47DnqypqofnF6Xsp1Eux5UxraDRzB3KFsNnXu",
  "key3": "QUcJuRz5Af5YKFCTv6qWsRTtnsaa19jQgSus96jXUWP8ViZbGSrB5k17HvNUcf7XbaQauWWtfJwxEtpsrhyrsjN",
  "key4": "3GAAtGW7XGJFum6Zyc2Aax4rRF6SQ5ULp1YPVhP8zPBg1Y6gz8Zagqy18Si64dEYUhRM1SpVKnu2pYXkyVo6vz8B",
  "key5": "2n6TcwjeCVRDBNhyANXCrLcuAaU6dBmGZZ5BZxMt2X7wvpUEbHrkZmkvvYoTFHX6Ldhwboz6b16iLhKpn8EVh549",
  "key6": "3T4DnCGf5p1nP4vqvzy1S49WVnsGoyV6kfsSN2b7Ds91JH8LanFzMsSDMwadwNAeNGTUAjCG4sX7haCA3xWet77J",
  "key7": "22zjMUgLF1KoK3FDAAaMahsizu8MVZ3VUWHwn7zh2vDaGLiKC8nxx3z614GsKAhoKMrJv1X6YJDphnmg9MdHVdJJ",
  "key8": "2SU7xEs7Rh2PXetv7Syh6UQxuU9HQAvPgyUPftAqrzUvQBLie1dAUxM4hV5MYZuT6xsDu1SHzkN6RcVUdnLKntfz",
  "key9": "3KNP9Q1VG83A53vdiwucxJfaWjavTeaoujZYn4Tf1My4MGSwULvtcWUjNUw3bmacPYzr1HTJ2HZRci69gWkPnTLk",
  "key10": "62NqunE628TMpGTHNp1PwGSn2buoaxM3Zts8cZiHsp4h9FwG3EjBiaYiA4PPpJNqBwPV5nhHcjoGyGKrSurwc8sv",
  "key11": "4ekRXJ4JGHRDG4md1enr3Esbak9zw3v1Hu8mvbn3JxKCbEP6tMFuPAe3aUrbMZ6Q6Vq5EELwyAVdf6BzqLCHuBqp",
  "key12": "4zNqzk4odS6cHbQ4rdshuxTXWtYxjcTL3BDooZ5cgAy1BU7sKZna9ExT7pFojSQAbYB3omEUsRD3C6BMgRd56noF",
  "key13": "49ngSX1pMZjBXpyNs76BCMpmbwQsDxLa4CKNPhLg1dkSDvCed56har988rvZqrRov21t73LCRpRE3VYGQS2sfbBr",
  "key14": "Tn6mddTqA4YDVWJ8t3DxSSpUbQHWLyqu5ouoYEu9SGhgaPGRzL8GU7jnmgAk3TYYbhbkPWxiRtCxhFDK3E5Xyuj",
  "key15": "5LkdE8PWSjKaLex97iJhxfAqKSXcXPjwDNEnfmUPJV17LSC5QiifdvVUbyaj7vDn7exRSRH9MTG9u5Fezxmq6nSr",
  "key16": "4fGgbbKGrLNbfGw5VbUKcgrJYirTPSpGkyzRDsSVUxbyKVNjkzbuyTniYyyR1D4v9tEAwAzJpVpRyfNRSxJqVyUf",
  "key17": "4ztjeGxqReQKztcu6vHRxdgZx87m5S8MrmCiPS5PvduqNRyEk8xDxYsjJ6C785g5Wux2gR7H6oW25yoVBAEwYRfD",
  "key18": "2MFyXt19ZK3P1dnJ8RZ9ifBi1BeC43UaXBX1P1HofLDmiNcEshrywDHPcTZyuQGWiUQakNWFxMb4L3oL7DJSqsSB",
  "key19": "u9rUkDphB88wUkNXUqhJWy6urztJKno6V26aAB2V9Uf2owWfb3rwPnmZuVgRWFj8cXSntz4goT2xiuBYXeEE2sL",
  "key20": "2zYb29Dde8WtUTtmrVWMrFWqgh478PbKzR4v1a1rnezYFuoornMJBWLB4tDJVH9BH6nvbSWscjwKw6Mb631gSLn2",
  "key21": "5ZnEcmd89ywuZBokQYGNBk21nyEc1XUb5yqa4XSrH54GqdkK8UXGXi9GXJNaargvYcxq5YK15gsVHBtju5J5gg6v",
  "key22": "4sZwicPPJr4R23GDP2JdMPxJ4tvdQW81DPXc6gsS5yKEYdVsSbzNLQACNnJjpnC3SL6QE3dLTuRtUrhx4Aq6ezDZ",
  "key23": "3BbofDoHBJLxq7hWfm8pYVQeDBMhAczQyRD9e77fgsa3jvqyH2TwNZUxp9vAv1EDiC3XGTbdVKVzmq4mgFARmFYx",
  "key24": "67B52hRdUdWTX7zThRWt5kJk32i6PAZPnrY1rD5YNrQ4goa59DnjuBh3dVH5G8JXPz1u7m6eGj4hBMmuYB1y7Rk2",
  "key25": "2pZJC7kj1yEP8focrQ6w87B9cARRpYN96xbuvy6u3TjxeWohchPfsibknubbRQvB1d5qVzZcdyor1d6qBf87AvAk",
  "key26": "5QA9vZEDEJ9jqSnTZzUC6tKuXqEdWr8KwtsmT3VFGCpTmvS8BnktdjQ9HvRdb9hsyS2oxBA278yXsPdEn3MHxBo3",
  "key27": "65mWmCCYi643LchmuW4iZuGScfNuizqyXYT1rNjZX6hjZ2SgWZ96gB3FqNF37G4DpVquTBNmW1X43BMbnqJui2xZ",
  "key28": "4UDQ5RG9fb4PkPknswUiwj2591vuG5qagiPmgqAbjbYpxgvm97KEViV5ErkEdKKmWHmpqSt7btyqnMpnZhGMm8DA",
  "key29": "2fXbzTipMeW8JaEu33sQCopyMJdSV5kUn1yw5k8Sy4fVRi2JswnCwuCYSJq6rZZqb3SFNar66yi5fVmK2RUXiQn",
  "key30": "x1M6gQ5nExpZn8vFRBoWbiN6TvxR37xaxvi2FVy7eGXLxtPAwFou3URFnaad9cKNcCuWgC6MVCwDMnGjH5ShG1r",
  "key31": "4t4eNT6qTKtgoRensQUEqxwnbhxqHMwcYRYCPmRzqiuo2xrEjGhPMJ1rkakqt3zvXJPngQnoufQBNSCexrY1aXHP",
  "key32": "3UUrat7Q7g6XK6ykdpKeXeEmxSffA3qAu2TGDXTFwk3twspDmRMrEguDveLZoRWWNHGKzYxBF8NtGZFJsiRqezZ5",
  "key33": "5HhbWs8zVcH57EqbJuYQqhxFgptoA4vknFst4b2wrfDv7jfKdWxGq8WUqgexGACuZ6DTBJMQKrCB7EDKhdkrULYF",
  "key34": "UirXxxfVwtyNhpSYFSvprxg2cnx3zrCp27HncA7rQaAzg23zkPB786jvTgME7EFjZZiKwYi1RpPBXb9NKNbHMX4",
  "key35": "TgsrcgQbU6VXAKNiD9yGJ9s86AN82gdxo1ETEZ5kfsdX2eXmcrkJUU5vPtHhRZbq6s1YwEir1WDdNY1oVXgv12U"
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
