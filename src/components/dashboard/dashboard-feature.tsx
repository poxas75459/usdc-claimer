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
    "56zt2evbX5KPJSp86Xh2uEguLZp3QwNTC8xNqVqXAxrhGRVZ2Yy86fUSkWV5c4EeTB5V1pddzUU5QbWtgN6tRgCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvzXhFd17U9jBQzywGj3hSP5R5cSedR7YHRvQjfNJ6LaTWHy9TwrZkEX1ijWEaN8i772bJe6GRvxWuvU1WjQnFz",
  "key1": "5RqGShYe3kxerrsF9bSpZoaR3QSGCjdgtKfqoQCBpJhrHwCkcji9ZeLkKLVBU4erxuD9bVgkRjMVg8SaF5MQfec7",
  "key2": "3BgCcpn84b2taH19zA5X6DLwqs8xqztQUTuh6LH5KL9Gdx6qU7Xk2dMuWvTEcNAwQPxmjapcVo59VNCfayMBiqzx",
  "key3": "um9E145YRKNSmNGc2PQZqEaoqnNq7jjEt5wdDaytvuauAmczbknSb3RCPuwApKC8Uw7Z9J3AXqP8rL5Ap3msx3M",
  "key4": "627MSqRorow2wb78FfySGHTSVDnxQ7APqCsyUk2DaghxqAG6nF6MXvMvaFAR5iihynxiZ6A8rWuJLvffn6u5xRBx",
  "key5": "DiXroEyiPYUjDF1CkqYTkjX5q1pBMA2Q5JgY7D6gY3YmhXcBQZEctMRz9CYJr4qEA7XHZk23aA8SY8Mv9XS5mTE",
  "key6": "2WEifiBJih2Tqy6kWnhH6B3N2euDkeFJKNo7K8kN3bH93cDeboH98Xc8R1qgEeMCuA8PcrtrLWmetdScRKgJjD3X",
  "key7": "3gE1bFefyPvcgt5GCsvpbC5EDNDsEyZfv5FXWc6G4rzg7iyvufwENuJhDNtQJxQEvYUSzwd3UQukRLcR9bshJ6H8",
  "key8": "25cGLV2rdb8BKLdPMv5acqSWNRxyPwTYRLJyCLBcBfiqSZJyLmP6rucooFgX8FRe8y9XMsjYyF6ckZtdax47LiQy",
  "key9": "3Hu6dVShwqDjqW1yeGhuzZoRZySJoGWQ5YY4cbXAHCbG3Ampn6V2ajMMvR3Q8KTS98jbFiaonZzjGh61JMiygDs7",
  "key10": "6jxKrBmyVvk6tDYJAbxnw22UcrnG7L5EBNaz8h8WqQZ3rUibJS74patGpHDDXgw1dTJzCP1be9PSee6DycLGGxv",
  "key11": "hs6DDPU1gVDSkrTiQnwga8VFTFcaXXDpYzm1WSVgc6obSNgFfB9SNcMWShoFdXP1M7FdTd7tqBCBzq9EYbqUna1",
  "key12": "4PoAs3BK3mq9dYKKhVMXF39AmrTkshnUtKrd9zhKjppQY8abUcg2kHtzm6ykDpq13w1mgf2tjQu7MCpXMk5vcX1A",
  "key13": "4gM6CCzpo8oZDYHHUqbuX2wSJsWr4rDyMASjuXAu5R1K8PhLjEF3RLBuanBP3i4Xge99RHvbXqNtTKVspdN6hgNb",
  "key14": "4MWGHZEuxygZQ7qdV3PFBn6E8WcWzKrx37mToDpWeqGjVJdCenFJpZiQVEHFkcms7yuUnu2fgAM5nbg8kjey7kSS",
  "key15": "28PpLsbhTC2A9GZ2Bh7TJvabwj9fAhjH56Mpu54Sv2K63xQ4GCyCutVhGXbUwFj6oSz9Vrd934tnq2qhAxX8taX1",
  "key16": "9gvkEhUYRDHMFFRSq36hTqoQsLCgyJpxqgd6oL56nTWBEu2aeu3mFwwwcdVSxkeRD5sDZM5fjiYqt4P6rg1NSH4",
  "key17": "2mbnh2kwdUzkMx4UUc2StYR2W26dXMSGqhAmipobFjyKLBBbUWPH3rvPpjhjcB4ZnQN49Ap7ZLBfkAQLj54Rridk",
  "key18": "5HywSkJwUuKAhdrzQcTcpuVNPXTXJs6maPiRWp5W2xk9AaoxjjrfNfA4FLKpc3x5omvLx7FS2mEAcXicqcmC7XpP",
  "key19": "5CBGfepy6u7MRZQkFVW6Y3246LZoWovfnjM5LC5PgeSuRK4v7psYKxQtD5V7XuQUjwtLTo3BV97Un8Jx75uUd9HW",
  "key20": "5v8hgRrQiXeHtPHkPBwDMuWGnTnQ67u5kszfaYUAMJZyoVicVVFfs33sXoFpeh2Mp9EqLzrh4yqJQ63AK4jsSWYo",
  "key21": "66mitNVrnf4H3YJ3jaH9EDyyAMy1zgSDhVc9nSz9EC9iEDsBSo1LwxwtAdwVgdRE8r2WqoGv6MFmYcRz3kPeXkAw",
  "key22": "2j14bwsNymnvkXTZdVJK3h9ZiWLJUupHQFHSUXnE3hfba8dNbsZE9zLCUHjhXxtH1wFs4weJaHNBzDKfsrkdiDPD",
  "key23": "3ks76QRuHu4hL66UKWTFsomKQmqbnX2K2KduuerZqhm9JtEJ6LMwdeYhra69PyNLwnmnFRfbXQp1YTs5qMSYiFwR",
  "key24": "41kEdwTJaxmdGYjVA6h1fnBaXRMsTGTbAFQLYUqPiE6KSTYpXtKtuVyy8UMx81rBnW215fMLFpVML7J29NZYSNGE",
  "key25": "2vLUHpFfoxGFR3s626cpZaKMerBoyLrNcfLsJP2AxAB3jHwZFUuMf8bKGYAmrZebyaF9ey8zWEf4jTqXj79tPCAi",
  "key26": "3ezXkKEZTPUep2UFWTzrpNp9o81wTB4dUnV19D9kBPmCzgg86K6yk9hY4pJu2MGf2FqXfnEJtHcjDbzdps2cvKxg",
  "key27": "3XxGhuGxTEcGoSSavsWHqfXbJdMLL3vHqaaW9Fo5X3HPYAdmC6d6t3YTEfAJszRANuGsei4dh6KCwySyukrSxXz4",
  "key28": "2BuAX5papuQtFN4m2KzQMVLnFjZEewq8paFVFKEncnfe3cvkgwVYm3SQ1k5VtcMSajVVpsv8sXXMNb95w2EqfZAV",
  "key29": "QTn13JdinKmY4f31r6D7hBg352qEmj37BG8qjYpLFdunAj5Eu6j9ZKZdvcW1HSqFrk6CMz2gVHrVZ9gxXUCp2p4",
  "key30": "4GG3tuxBVDK1J4PRWxVT7smZsKSCvcF98wU6DuohEcyUtEWU3vvvjHxT6VdDdfz9Jnr8wUs94PdgmfzJdtvdcaqE",
  "key31": "2nNv1xRJxCCNUtU8obgDEca2wZpenybjJfsVzcpVmjYKxKy3e5Batht68CroyuBHueQTwJ2v4GeRX3XKqtx7ZGZi",
  "key32": "5QYH9BnEbPEN5PTxANcTX5qD3in4fqctrH8y3TkWtjmkxHW7tkfxi82obhoojg8cjeaeucNXcHRL2Uw6VUdbRimF",
  "key33": "2rYbPNmJ2iooJ3qJ7ez66dQRJWKbje4ywuGRJMijtzAdkLPYhXRL5edD4XS52fhB3sP2BaSvJMPmLaRrJ577CebN",
  "key34": "egPUVUapa7HTXtuGmx7n7Tgwnv7G9ebi9555us2LtzhYiT93zZEqmP1ni5FSDroMHaUBuYq4KwnE3s6tmEBKeHr",
  "key35": "5MBGzXmatLaiM6ZtTzxEkDSHUodpt1odKoKpj6v4hWX4SGGnxGywwxzQ1PbLDeASUZEqgbRmtfHwPNoy8ZJGkoQK",
  "key36": "2fsaMttUfH58K7fHmNZfvTC2FxoH5kkmQoYTzzyoTu4U269LVinZBrV7Tpz7Lzx4kMXN9AP6cG5bSfG2VUCRQ4bx",
  "key37": "3hbKxj8kDWY5m5MLf8wdZGXHc81vhCE9PR8ueVhEJiV4gNnKn5kYWZsg2FZxgEurDk4WmQGkDmmSUSXxFscAT1Pj",
  "key38": "5vgLS2Ui3T3qnTjRoANNJTvusFU5Q2qTRbAHnzatk5LFJcnK5ibMtDhzWFZeEd43U6FmBeLpPNDCHMnptrKEbdE5",
  "key39": "5hfNSp992dTdUFeMijFzp8BQwn2fxcNUv3nUtNVYCSEnCpnYZGwju67fte2s2uSGHGon9ha1aoddSdM5KaTUq337",
  "key40": "2TfwCLmhKR6UAv1XCmZSXk1LgGNbyRESuGVHCpyAo5UPDLKrQddL8URhVEBD12SvkKn61XwWp55LuDUWURqgqD6f",
  "key41": "5dr5ziZrnjnsUsuuQizpWh6r5AmArh2mW66fDS3gJ3QKLFwmX78x4FoSWjpcYr6mJ6cg81Fmea1GsVLmf8rdz3j9"
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
