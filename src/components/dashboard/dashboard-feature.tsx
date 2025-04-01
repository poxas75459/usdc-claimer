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
    "3AWp7pGsyZof2xU2r4JFbNLFL2YoCCy4H8N13W43UxQphxu7eW7FYs3FWhEsBhb3HcQhWhcxiyABZSHPNSTrr9sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPDVq1f7PCSSutL9LhTwHHtZHwjZNLZcafGyvfh2fEF9wvQwRhyx6ZLtDDqiB71pvdaC6tevETz6m32JsbDJTYA",
  "key1": "2jyYjtmoFLvd73rQrNt1rJ4fVR5s2DLciWcxE8EDbU72nD2pkNzAfYP1xnmwKcnt3c9JDyHFKgTfSxmXm1zhu2p4",
  "key2": "47rpmZuLCKpRYfmujdjD8EWj1iYR9DQfknSMgmkDrEXEPrXkryr3MnoAfeg2xSnJzkLxzcVPo1ufJHzCKCFYKrB2",
  "key3": "aM69fQdXn2MkTrKFKbsJPfuEDGVhJq7D6N2xpETMMBcHr75dhpEU5BezAXgYMfwtcu78fztp9cXYprTowAgGUb7",
  "key4": "fFS6nmiB4hAy843H2hxmwzAhRBe5qgtzbkJ2JkkSuSf2fweC1xgZwCDQZVbps3JHiMMrA7z2FPZG4F8CXxtU9YW",
  "key5": "5byNXgzapCLsUh8Yddzvy6vSFWBmGomaDWmPdqmkwQRhrYVucC23Xm5jifJnRUTJEnTYAQkvGY7cPn4ZqHspeY1Q",
  "key6": "3wpqNfArUxHYCWrS6BLx9d4eRzaMSW2cf1yZ1rPtxGEB8UEh48UjXDnbrTWyXCXepo8Gnqj3eyFMqJvxEgTJLzRG",
  "key7": "2ae1uDAhQB7Ho11Dsh8BuWczmz2W76imnWFFXTJPuBBAUjr3focrzp8BhS5Xjom2YfKusAY4dGSizVwe5Jhd7vKo",
  "key8": "4unokXGCV7Q3abbBghQXukG8CYoDs3hhGzU6pFYRMX2GJ3i7Agt6NDV1e6HhC7DeLrH2CUBHsDnc61sRUCmcLwA7",
  "key9": "wv8BN2gjZZTMBzxaGB8EjSYNoDwjbWpUjJcWAni7zVxWqkKbuQBXBPxaUqEr12mAZgiKYnK1i7oYyFddvZaKTX7",
  "key10": "2NC78bHsRuUjExwoZBD74sbtetsgrwpQTqkduuD11Pogtxvdogv3q2nNdgxgdoZgSkR6g5YoR2NqDhBRoaVAsyB2",
  "key11": "2QUBnYBfUwinAhbfnVRcdRL22KyY7VJQuq7FtZag5qJDCvC27yB1nBW2qVPiwkTGudXQqZEa5sDxdSc7psovY9x6",
  "key12": "37BkDPrRWN5Q29fFTMqEp6143fpheHLSS7gHpnR5DThXkdWU8FoCCUXHwjWhu3Ee7furxJSvynS3JQcX7cd8tKtn",
  "key13": "5r6uHnoyfWPv88BCK6B8WjJLN4yxEpYFnz3utb631E42bz5iAFN8Qx6RkY8HnwR4nNaUoNcFd4quaNvfJ2ocCnQY",
  "key14": "4yyCQoVHAZVCYLN4VraY9UYqpcGcdutY9C7AsCHov79XVpn5gerB448zso6XU1ZFzsRf2DBqXPA7dxnhr4dmKRn",
  "key15": "56m5TfWkyUepgpF7hJpy54o2pHzbBLqZ2odnuq3vfU73dbeWjicYydgs4riDauz5Tb6WmhL1j3gM2qMN7h7pwrmS",
  "key16": "5k4kVJqGD8DG4XMymrVz7qYuuDMoUoGwfwCe4YVuuXsMKNLoNnTswdwtEGWNiiBaviaDFgVTD9ZbPsCwDUqDxFCm",
  "key17": "3iUapL6YhP1igHSsAgE7MXBEPTMpVAuj9U2FHtsWMvhZPM8qyzVyV4cpvgRQHddb7M1EojifKB65bL4xSAGFKEvU",
  "key18": "4T86vAmnFtm6LTaraWPNSDPBy51NsAVd2wCy9J98rZVeuqL9xbmcqYNYRMFZboWvYJvYFb19imirhnyjRyqHizru",
  "key19": "4midq74utTyiBdDg1XhRDrdUhQjzj8pHTfufNPfpj4mjch8oQMDszbwVp5BPQBiHSa97TjpE2eq8g5dN6QZGwyjB",
  "key20": "2HpHLwajogoWQRDvPcUadzLwNf6gViuP9yHmmfCWRNeGpby6NvnHhuMWj9VZ4QFrM2aDdLBmsdhFxnaTiGG2fDmL",
  "key21": "3JxHiw99bDGcKrzZtNqr9EhVUfaJmW97VtAtRhvfATbUQQDN3eMHtXyf2wA6GAKsNcWGvtWVACcuEfF3bUfWP2sQ",
  "key22": "5awQhgw2QJFrzyFAmYtvfFinzYBSvdjALywq3JhXp3BoaUCiLss23ETaZZ4oe6KNzEiMizNGNYjGJcKfHiFSsgkh",
  "key23": "47xVGQQsVDUd2nD2T42jXa2CsKNw7JRD8JtZSMJ6erMGD6V1xknwep1tvWUYDRNeNbnfQVn7kmmssn743NsSj9gi",
  "key24": "5K6WQwxkugvLyruqY2BRjSPjph7dmcq5j4JeweSBMC5tx4JyAPVxHTiRgYrDuXZufUxG92GhSQfF9xD6t3b1KYoW",
  "key25": "2mETtnRq9XKh7ASryGnpmkAqAEkUAvYaHZm5PkpUz9jzN41okmgjC7FNytPfZuXsKXStms3t5BjZNkuoVGpj3Dai",
  "key26": "2wgwzGHBaBnouQ9fz8fjgbDQdLToXwCqZ6CzLTzutnzvoRDK8BqWdDnqQR64DdsZTkKAaekXNLEEbXMxTKjLiEBS",
  "key27": "3VtrR7gPdc5pMXyY3LuNmqGZM5g5qfFHmxVZ4FRtiX1wGLqfnf1xDNXiNe6BSwiD4C3ZpFTr9LCTpsrk2cbTCDjT",
  "key28": "5nPArZ414pK32LBbm7eE8CWD6TMz3L85U5N7dv5T8MA4R3mQThYAojm7KVWU3uzZKa7oq4Ws36VP9ZkxxY3W3oFz",
  "key29": "2xPTXq1QyWqqqc9ySrjqX1kmiiy3uMkAefdDtqwcCCrzzrMYhv3SwqJr8Em7wHhanquTEY2vqvMyL1GxfSnvPF2B",
  "key30": "2CpRmtNrSa2sXumKj1i4R7ZWrxLvYpEuxvoem6mvNuFto9B19gonqQzNs6tc6A94WpiUBtJVSZpxUqEavJixTP6z",
  "key31": "ziciLSsPhgkDCwfv3CmamRTLmTPJUbSzjsmatFjjcWSwoCao6QGpqqmW6eA1SPYPa7DzuKCNjnvh7zTcQHrutMT",
  "key32": "Jg4bjjjZKfRX1M6pdYvufxQcpnA7s4k86tBK38KP8teBrcYBhbduy3bZUJRSui67DRPGWWnynUkMohM43J5LwwZ",
  "key33": "58yYrECN3GbReZZo7fedyxFvGYtfDs5M2spZW4BRQ53St7JX38DDRMgX18YrhMHFcKSw4VoXt7Jy68qtG2MbThQd",
  "key34": "4CetVeZJEbxSgM1qFqEFmtkwshu1rcmsjYALy63SNpSsXX1wf36zzUBaXShfyM17gz4aVmTohunHLVoLHtDuby4E",
  "key35": "3RU97CadjFktSAde7RHQHtW5XyAQszhufX9YKpSuWpJFTbdBDWDyobEwUkCLfjUDFLn1jic5MMc68tfh76ueSFk1",
  "key36": "3iXSwwhxrLfdxJabYkksi3m5hzxAzF57XbGgSnvTCnqR35Z72gT7zBiHYSSH2WTv3UMa7PuwdgudVQgG7FQ69CuN",
  "key37": "UBQ8h4NMF2u4xKEEi4DB32PxdGLLZuh9EiZjbDTAAXaJPUGAwCrUCghDgtpnqG8UsDi3Gzvhdsotc64smAsAKa7",
  "key38": "33NQvYF8RLRaHu4AauBrG3Rs1TNuA1zwVVoKWMj7hDoNgwhdNUsy3BR3iqJx1P8QkEMQuMJTzZGYKQTorcrrZVWd",
  "key39": "3BKr6ncRtcGLuu5efdouXpmLkgXfNmYN1G36vFnYuULe7jEsHjB4eJCjfURGESq9KFdptCncrmZNjoH7xh5fg8Hn",
  "key40": "2TTfwW5bPrexhR5mPFnYzGshbjUMityeYaL1ECwfhRpk1a12Qd9xDx7FmVpSjKaXNByK2oaP3zTGD2BEc1hSUX3g",
  "key41": "5BFHRMTf8gXVPQnhXLXsmSZsE9CEN9xtfwFf3TD4XVHebHZE9R4fRfCsDo1RhrD8Trws7CKPtghUotxqoiHuFmdr",
  "key42": "2boveczwkmoaWRR4P73TBqXS8DCKtzYZnTE3S2CYXPGsrV7EyQhh6YQdCqB2NZEZv5xsK1a78QZLq6JrpdHpoGkH",
  "key43": "2nz9WWhGo8yCj7RKfB6dfpvUwpdzG6jDgMHAFn6gwqbAoDFNu4tmF4Hn41tCyg2VRbDcpGMtMMo3NWDJanYK2TWA",
  "key44": "5gnJYRw1EDNVyzPGZ4fGjExVTTR1a84pap5C53u6oPXbhbWVXp7k2eMifRwQBphaeSqbd99z3fcrcB7rPDPDLfEc",
  "key45": "2ghigYxp7nfpXLqb5W1xNKkjDXW7y73sCfBXyL9Y5bWjqd9n6odLCFDJMXrkMME2cwrhxbsmwsot4Jsryd7UPRNG",
  "key46": "NaYX6WbHxJbFgt4sj7p7m5dzFVpwMXe5jKz2aNq4YNSVack7hyGcTTz5bskmhmfKm3yRvp76F4ezkztTwECR81o"
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
