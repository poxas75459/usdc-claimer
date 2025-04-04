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
    "2ePHpi2tRrGo542dTG2CL7Af35p9GZKJqBc4V24m4SWsPEPYknz2KhVLEKQBz8WpqCpHcsVcSfZNm8c5TaegNkzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xqE7KTrDiop9HySes3oyeT6YrUGaPLodP8fRjzP7SR3DDT4WRRkvEPUxoiHKAh8URcbrVukjv2SN2S6BxXpnysu",
  "key1": "3pGH9sfUtQtkVv82qSrMH1eYTKFJujkYBiEmnevBmGZ1nW6moEubRgUxnjG8yL6C9NVwjirrEGtuUsaEwh9QmJBa",
  "key2": "4Uo8vKdM2N2gLNtt1CdGHKWdattLC1Q11z2XFJfKTTW8y7W16MZEAzao4K9Uyv3zJZiihhvw3NYJ2cH2sHxNXRvf",
  "key3": "i9qKXVUfogGph2JC57TRPsMZ9MCHQshHAdPr9EyofvtpccgSc3VDwPGKhKqNPPARqWgBW1qGqUEjJJc4SMxUa12",
  "key4": "5h6RFTpXjYsvyACWusgcgzob9QX5ZYdwkdTP9TPTiux8FAYfv6z7YdJjBCwshmQi5vTuN7BUw8gCCBVseQsXqkjX",
  "key5": "4YSwm5igWd8mdYcx49ZdgFwXb8BmjuovZL42CMHqiC4sH3FyHaYrRW43HPaHX5CEVyFBKGXoZL4Qrw9RjYGJgxLf",
  "key6": "3Lhe7ZkJqeeGXooSiziC5JBbijzZnjmYNCmgczLWePmWpnPz6N6umQ8mUpeqV7g4FMWDDE8dB9JMZbuD2EBzVb66",
  "key7": "3QNZFiyz9UwtVVjPgE1vur7kov4dbz9E2KV2xxStL6GzjJKehin1kn2HpK3APYu7MZTZPParYw7DwmWB2SKt6Qh4",
  "key8": "4R7dVx6uDZXcJwbQL7mFDVbohUwfVryeEZMQ3wpp8KWZAj41dXkCngFLZLtGDG8VBPuHqn7WcrnKtPYdXhotiTk9",
  "key9": "3vvrVkzDbr9vcaPzbSUJE4rLwHFbFgxHJ2RtJBXzJHLmkSM9z8pyTSszh86LHXBGGEv6PGBz8TXaq2AVtjjv9ryL",
  "key10": "2vanSHUt8DTyzE1thU5nMQLYG1FqQt2xW6E5QL5JZBtNDBUyEtby69388TsNCsVoDyXAsuoQfknVZC9HW6F4jcAY",
  "key11": "5AZML5EEQqjQ1z4SivDaUyXiydDZQWMMxo46sXHhNJ5xa9gEb5pXnqh3NPxcXBWpsS6LpWwZntBwNZjvViM5CcKQ",
  "key12": "VXCDatsQtbKSTFG1zcCXBkw2FhJAsTkzgMRRMonfF6JmgCN32RkXzquwbnFnb4TdRYqEitVK5Gi9PAmafG5hXYc",
  "key13": "oks9q7Lx2P8XrgCPA1PeVS1UyFcE8VpcWBrYbWJXRWoPnQsg4fWQfbbMQKUqpxts4yRMF74SPJTfgixCtNLg46k",
  "key14": "5bzoB9f2XG2FcPKQ1NyFmrHUahe4C9pL4bisdCNdyKRX1uBJcmDnXjztBueUKiPjJMyH5wotw5RP9eFf16q7y84r",
  "key15": "G3nX8QJqVUsEHDtzmoRTE1eiDjvMaVB7aAdMhbj6QvenmH9MfaPGNigYHgUwUuekuhYCbHo5wAo7i3537UEE5hr",
  "key16": "2CAQ9FjyhsCYWxBqkxxted2BVzQ6kB2zTNbVycwKHko8T1FRWgtb7s4em3EgWc6TDNnmwA6a4bckqnx2tCb39pwY",
  "key17": "4nkgNoYAuX4wEXYr1oSwsLeJXHTj8a5HFHcsbUMRCGgsaW8QvbyzwFCfRPnwgWgJPsfC9bHaRovM72KknZfmGcMf",
  "key18": "587K8KfxXCdvkTvRHqjU7ouzcmvJxWQEwyeAhDaykn7kRaMAqNKZPx6LqP1VRjPSC2zhJyCjMRNJDi93ntrpU9sk",
  "key19": "4DnRX2xh1JCoyDVS2nAB9b8LPLNDkEqJL7A6vQrpGf7St8LQ13w6d1iNzbHFDp5xvnU6Ms1SfvsEmTUPvuoLpTAr",
  "key20": "2yq75uSrywiv6eGp4UJ55hYyHCQyBAd6GZ6XhaSBL2qj8dFr7LKcjmiVipdKVZHr7noHHDbsrrhQ6eimH2NJnAtk",
  "key21": "3TcfbuUA4igwyAnZvTPgPYcUDEKrA7o7q3nuJpte3bQTeAJWust6f7Bh1xgZQLiw3TVMTDA9eAizeSqrtaaNEzdY",
  "key22": "2v7ED6e8mW915cwWWcYJUpSUK5gSKadPCmRuwEmZWF698J7EXEhaVv5BYpYLkws48g86t1uQPwvZG9TpVEc1EBLE",
  "key23": "59TdDfkJHiAZfW2o1TkQ4q6xNMyyaDygoW4wSFS6mC3Djt1i5G3tyQyxoecECsDMX9k15cQ4CfHfWYXrWV3d3SSw",
  "key24": "5f8VD1ySfPbEdqVBHjDC6AMJmE6XzwgShxCf9UnZfHNRbFnqV44gEJnwftLftkQWBKwf8QnNX61qz92odjYk3hya",
  "key25": "5ThW2QBRLSfGYPL4fJtyn53Pan9kHz5qAs71JxCnquRip6VNYcGNVM8KHThR7bzjPRkNrWdGU1LqqW6wWTreKg6A",
  "key26": "26kACmzBXTmGF9h2uHrFUReHGcHEn2wLUXEeNxT8fyUrvV8kdKWuSJtSH6rySGQx3CaPoqTKq5y6RG9JbWbTQBXD",
  "key27": "5aSNhogbdJ1Z2y4SrfaQJy8CP8T9i52G1DaRbACUxcpGS2ByjKswSN3t6vFq7DCR3fcgWV9L4GKK8k7fVCmn8cLo",
  "key28": "3Ghht3xHdNygyCZfo6A6fADU3Vku1zZHrUWHV4ng6dggoUuxmLnA7SLSfTKVmBbcNF7PSg7A5ETgTCQQcHVh77RX",
  "key29": "47G3SrV7EKQ6e3Mwy1tWf7Ney9KSsRKxF6SeEXcHJF3mDJH3WjQCwuir67LGkTzu4QFJojFjBoJAAa8RaDjgsNC1",
  "key30": "64w67YgVCXvNCFWtE6fUwBcG71yABiQesne5z2XGhHcav9RLho5qVTxSrAShmDMPRaG9CibJ49HdTLfNmbhgjj1q",
  "key31": "2potkKgpfdGUeDuPWEdeVbXciqiEG3RzwsoHmiePm8yiThKUgkJKJuABNoukixaHAhxJPMrXUWaUp6oZU7t2UiPt",
  "key32": "5xkTnYoVNS1kDgSMD8HfpEtVLkXeBUNAR7cUxn9C99wKQ9CL2o3Kz4WHxm8V5M1ZiMbGJo3X597PVqhDWGoq6Brg",
  "key33": "Ysf8Nzzn3YQGtvFiUaaJbb4Vrg6ZKawF3DQZ8Bj8ym56ySgXtMaSQqFcXE5d6LjP6w8mcxmbHdvGgTyBd1Hbs7v",
  "key34": "4BiUP4bJGxJsRFRD6nkFx8ZCprxQdgWaVLpiJDj3BrxHEcdqtMRC4B7vZq2zcAQ3J41dP8M1Hnb81c3J1cuWdb5M",
  "key35": "42Rr5eeMSTMMhmCt8LfLnLCfpPFBasaW1uHT6gLj4nDvixvWz4qSdnP1wpQNt6QuQgvruQuJdoAa4o23hqfM6VE3",
  "key36": "3B8XJmbCfLM3mek5wyPyHvBdsp7xXhU3yBQDhW8DF9WgTMcECJ7jjXuqqRepHtrEnF7xy4BhfcWxZy8FsSVkfv1i",
  "key37": "2CQeQ92fcDr8rp2mpZb1UXZfg1CGzXPRdKxtra7AuyfVzs5F5k6UyhZkvtVjWXRhA2roc6ev431CETbTjdcacz4f",
  "key38": "DGXeq21HK2wLEY87VxL3ioew7BLEpdPJRiUkLdFVB9FGD82DDotLgEHSPRL9X7xj2fFGKRXYcFpWsnvBcuzYL9b",
  "key39": "26moLXQWTY8EtHc48VYrPmUq5bpqgKMFz8vgL8qtEtbhemTV43yV3LXuyKGoy75QRRLa3KEH5XpNPZfPiwdtqU5W",
  "key40": "3VgWhH5JYcaVqi5186WLVwFR4Zp8RxY3QG1TD13UcFGMTPLi813otCY9RwMScGECrRohu9ccNES3UwwvqpLf1BDW",
  "key41": "5JWESe7CEwi8NNj2z2zsLod9FJ2aV5MTbfMN9y1Fskr2fsQfaAkbxS3MKaHcPADiiTTLebPAxsFwq5vD6ScPpSjp",
  "key42": "5yn3F3hUVYQy1LXpTBf6mPUFy64fCBnLkjSEtX5pSqmN9x7zEXFoyHRKgK8a5dNv9hv1DBX821XU1igeKHWFj2wv",
  "key43": "WHpPjbjCMPB3WPMj6zkrybr2TSCKkMvGHTWtCx5hBXVVcvw7Fs2p3STPw8eq7kU3TDEza9MyoPS2nTUPyXHUS5w"
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
