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
    "3ZQ1yeV25GCYCYhcbvvk1cwsa1SK6xo25RoSsWhkTwApKKbHDQxLbuNm4LyWaJ5BsdzWSMsECiPMjYcCwmzryRQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ar7PHEMJcu9pFzEE2bJZcgTV5zzQfQkejKHxbN8ybzUK8NfUPMSiCBLRL1sX2VdhZfr984D792GnwqEWyoDmB4",
  "key1": "4P3WfEoqair3VaaJiN9y8MmwVTpCCpgxTvsxoNnoh47siWPN7JFoAqaceywW46wcJnnjrpX149CCSqonURnSeADf",
  "key2": "2X9d39QcW5yo1kYFTav53gDT9Jh3pHv1qxXF24UNUkD5dUy8xBgWbcfYZC7k1scKBpe6u5jo5kd8YRmPpUojxx5g",
  "key3": "5usjFvFjHshdTkdxFg3m4EphoJp4LWXXoEkUKnsH9H8Eh1aTEgq5gJWnVUJbRyqm1g3SrwCp6RBbHPqj1VXPY1hW",
  "key4": "3Cq79jhi7RcCmxZRTm2xM5AkGFLPMyoVnHVFhdBVRAKHaded4qFSmUtfYeQZab3n8csgpTXQHzwTMtJUFzrAPvaa",
  "key5": "2cScGp5Lsha9Upa6LghcR43JoFh94TfjP9CfHW3hvbojanzafpf4tCF2PP1Yabhuys6RdTGRP1WKXnRtZVd28U1w",
  "key6": "3e3M9V76Z2LuN23Xq6JK8MBEJgzmdUaqNgzk3zxJ7ydPdftJLE8cdBfe3a7mNsdUea9UbgKLjdhGSCHiN2Py75Qk",
  "key7": "2aomLntJgQkaxfHqCUkZDP9K9Cf8L36Nqr6FEsrHJFbh3MLFmsNduEsL9LsjAdMP3X4g4qwN95CvXtCz9QuNXzKA",
  "key8": "2j2qkkbPGzCambQR6wKqAoYseb9HXeUw36UWh28mwhhihfmjoK4zQ2Am7ycMhoCFJVvhRXnFBdBnpoL89rFoLVCw",
  "key9": "2EdfpVwBrpGSxC9UqfqWFCyFezPNwgkJNkzNZVKrA2T8ZCgzjMJTW8mp1EvSq8gWGy2Wxyf5WndfgA6t6UXj6nXa",
  "key10": "5XKm8H4bVeXr4FCEccA6o5NfZjzpG5nDEyhL5jpMq8rvrvCsgUFJ48JquTWFeuWK4xpospi6XA2bhsiYpqRoYt5y",
  "key11": "2tCupe7Hp7rPiafoShK26j65StG6Z11ymBwA2ooPrg2BQcjL4esQMVjRtqRKZvm4Qsgo3xyX6sfd1fWdjeiDXQa3",
  "key12": "2L5EoZJko93NME2EZ3qSRGdLUer4cxufXzh2Bv6MbF4kkER2Sx3EsvhwABoh8vMNY1PGDTRYUb1rEnj4Xi6Pfq4g",
  "key13": "5GMDhkVNJUiePnjJEPwubiG2FCR64DhHNrnBiXkguCWqFbKVuYMeshxbTYK6Gi662JufpYbNLpiKnTphHBEYEwcz",
  "key14": "jp5h2vSJsWirDuovp3JMXTHrPcKnyPut8WKd5ZxUM3k8yZQ643PynortjsHzgR5XqcAbYBugz4x625UvjUZBbgX",
  "key15": "4hy6TB5pYvfzTyx8yhQe6Fk9Y9cUtJcb1Aic63mUfSbdvY7mfiMu3nb5Hu5HuHd5nm92bpJcnisvE8vCv3KLKZpR",
  "key16": "4yvy8rKicpvCzBeYoXXTw9RTuhQeTauhpxWwct6cMYEbqycqEzpTdMi2f2emAQBttGg36X6UuDpJWwpY5fmXZN8L",
  "key17": "sopG3FrfxkP5p7DbXbHwS75v7RfFigv6YTKKJUQzqdYTg9cz8r9EyPk43exheXNcZ3wFRpez7qa6hpNoTLQ2kC5",
  "key18": "53qqyKEeLLpnqW82SpkXn2t9iCkJoUoeEZz3FXFwrhpvrEhszJkdfDzTKjC4oXYd1pnVs4M98Yvk5M3PxqdCVKiH",
  "key19": "4yNqoztaQ5pjcMfposzKURxbihnWvjn3pMGgzetmxCpncF8nRPNRrmXXMoNpER6LeMnMs7dfcVk6VPXZXt2HPMk6",
  "key20": "5GZiqme1CtWjQLdXNGU7dbNGUBruQnD638hhYtnPvQfF5GoWe3eM3TH1XBJmzvX9ktkqQBSgeVpNU8NGgm2mYfnk",
  "key21": "2zbEPGr7YuqtM4PmxEFJLEKytT9r4mjww4BgtB9h8z1tBgcd8gjwhJfRzMhUpTufrQLqhZZ8Sihn1btjVMZFAbsg",
  "key22": "5GKStzPwzsYWijULJRkQiux8rv8YRcgT5WRWJf16BuBurySzzHNVC7Wd3H8AjuEVA3Z4yPHqSHKChzNs6Vs9n7Xq",
  "key23": "5nTDfd6t6QMDXfM7bgbvX2GWuVMpkbJWqE4fgNG4r57KeSkXpxoTSFSqJSFc36YhN9zPD7m3K8xV8dyDQ7EQjHaV",
  "key24": "SiS9Ft9k6XotrnJZvmxP4uheSMaY49Mzm371s8qiB2uRhXyxDBHiCmyHk3upAfqGWA4QKwBy7VbvMaqridaLS7q",
  "key25": "4C1gz4Xx2VuFg6QPdFQmN2mXKxJHZWNMq45w1Dj52mEWosGQwDz7KGWmrrquGGUL1aY9g92uNpupPq8Bgx6EnkYb",
  "key26": "dGiRQhcePqzPs8bhd7zGSMxoxHihB3ZcJQJJSnQfc3dtwXdk7JABA157j7zrSsw3J36YNYgV6q1itXvGtfkY2VG",
  "key27": "5bQcMmrKNyTrgDQQNNoZNx2vvsyxqFr31q8DghrwvTorRHeaupA9nqQmea9trjWXkCURydiPpVedriBkMN9Sey2a",
  "key28": "2ZeRvGXL9iwdsh5pswaX2Hui3wNPmdyykrsntpLp32wx7giMM3ycZYeCzMbzSTwsTnrAZyoAnVmBZXxtHvygYhfw",
  "key29": "38cimSCupwWZ9yKcaBKjnvyiZFDaTBqtcSyxQPfD3LTV7icwGagmT6j1Mii9EYMXaPmphUnbEKzPwjmtRebcC1CZ",
  "key30": "5u1K6eFg9vFk8upwZHdtZS6WH1fvdi8TFSCYbT5YbyCEKBdNjguVbuqrwKjLwzdH9bopaenRc2nFXcL33wdz7DCe",
  "key31": "2XKFHn1aZNyzA834C4MquoUeNWzQotxhy5ABLHpDaZiPjzrLcpmrXtZZcQfRvRZV7kFd7c5oMDwCZdabmbCWGSAi",
  "key32": "2LiWMVgLCYWsKgujatnFKG11evJAUMRot9xDjiqSDgkLerruRD9Vg5EZb6ABUhCcFg7RQGLbEaij4RTWj8SyiNnq",
  "key33": "3QhvCBxDutE8YuTVs52jRt6tVN7hNenNYzFySPDFqC7EjgmiRrbAzePtPEhouRJE22fRZQwcGtg4z4o3ck1Fcdm1",
  "key34": "5HWVRFYvyupGMhP65F2qknoeWLziMR3NWxcRJc7fpNLQJh2UeFvBXHdoqdKRCDHWHiCPauQeCm7PWMEz583qDD9j",
  "key35": "5sT3zdsRrvmivQrdjC7J8TJH62b5NASNZZR5wba5VKtqC2NrdnrwXZTuaUhKYn24cfETB2ELPMWDuwojUHf9jWjK"
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
