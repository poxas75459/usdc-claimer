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
    "XoxKHn1gw2GHeiMRfcFomymKNzdAJdMXxKBRgTY9ZzGEANSvAe8A91GAxcsboAz8tDdNqEUQAsWYEtd36Eqa1Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A4uqVPE6Haoa1sjzMAsTfCEVsmJkbEbAomiNMAWRBUgg8YPmWJtNu2vQq7EF9DPrFHsaxqK8gLWx3Msn4pekdLE",
  "key1": "3w5ovTxFu5PhLa7mQQynRZqeTYNAUhkoLyhL8bqEgQKbPsnf58x57mUJ5UnZauHK36Qr3ZDJbnrEHBgmDPcu4aQx",
  "key2": "4EGaMZQC9uWAFdq1UnqRYQcFtLtvCHMjv1LisqqsE1fmGxufF2CAusSR2FjexBkGmcKL1fzGU51ZpokU7DsgS8wK",
  "key3": "22mQ2MY4FHT6wiq4saAJweuV7FysXkkt3JfMjUFwMbEYneTAdANmPJexSo1tP7DcPVWk7nLJ6MHvo71n1FC1Hc3A",
  "key4": "3Eoj1bT96yMKsZtd6CSzQtHHF5tR9X3GkBpjh7gqs1vakttqLGbqnKdpTHANgdUXi5vSZuhABQdB1CukzwxY2c7F",
  "key5": "5wKqx3QvpXqe5f9fbyF7FCM4aE8RY4JaeiTpid5TTZMs2p1T394c8UrcYmE3838SDs7b3svhHXvxvR7Tia1NhNmB",
  "key6": "8Ek6QFFbHX8j4kLr3Tu6Zk4BaMoPEmMzrwoBBa6MrauxGCCKqz2s6pueSCDfRizTinut6fuCbTvFAH9RwBy4jPx",
  "key7": "9V368N84TKy3AXBYah9vo5hDzEzjTguF9w6fWNcYUgaVFjzMRHMnWCykjym5H3V65oBvxGuG7ovCaAr1BzA7HNC",
  "key8": "4gr43Pm1rV5zxoUkj7QQy2HD2RW7SuuCMJLDThv8N1K4iCkZwPUyX4aBzfWNEPsJsQYZzT56aFqzi9HdRZC5oYdh",
  "key9": "4dHrrzHTXsFuqEMu8jgDoZzzUSJ3SfzmkEsmuSD5qFWCzLNyv3GXKjPviMASupy6Ji8aok2asrv4UXmHegYsvQ1x",
  "key10": "oVkS4FSwRipaCkmLquZRtLAtJUTn5u4ZwS48Rpfb6QyfRCG5ZUxiCY6zaV5eS2YYbiGbpNMVyBRqVACkLUpWqYv",
  "key11": "5qTHmJX1DKuUEppiBDLgXxqNFNmqzyuMxNP8jzHWjFWWWvGE7NNZi1hLDhxCQqJYzr2SeaEvM8i4utTsEGGubTHU",
  "key12": "3a8eSxZCjwYGaXNTvtkRUNTXE3gQGSw2mRoggqgGujfMBCikUCZhjxAMrtFPYxgmfRVd6W4EsJxzLLSNruBxyoyL",
  "key13": "5emmEZAfm7DPMNyWy5GHvWikutGMerEoQqCP3jSJK77tHJoVpSW8gEtesyicdncEuoCnkMAhfAiqTjWRX7fjAvH4",
  "key14": "YRnd6gPuXj7AVncdVoQV14ey3r8JswVCuAWkT1hVSidXSoGjxiQqsNVWs8egfqJ4gqUNijWzReu5BF722VUNipM",
  "key15": "2PLLhjJ8HUmSNVdbYSydM6H3dX6AxSETmGMsz5RjaiMzcrvj2Z7dy9CfLkwGh27Rz3RbYB5NdFjCETXHNoZBd2As",
  "key16": "3s7ZJ2wtq9FC6HEYnYHuoaHWKGxi39EdceoN5ZX1v3nLW32jG8LppA9KprsRW1yoQC5tTXYDDjckuQTHeYE46vg9",
  "key17": "4xuMGmtYaAwuoyeYf3TkAccnAm4Dycjt4c8QUXhWvwRwMVfcpSWjf9s2jZDReRRxA8RcLUP3qEEEAy4nwa3Z1VNH",
  "key18": "urjFXFB93ZuC5UcUSjCfieJpfv9SjeNunZkmQrMM9TXRroJdQ5DniHmrCwP85w75op2FCb3SDdMGU1Ywwi38Djj",
  "key19": "vHBoNRBuQwpfj9pnkbA1HGsoj9aU7Vf86Bw1GP5Xh7G9yQkww7sfqAhnSwX1ueXkg2Sac8StTjqZoqNW6Ud4Z3P",
  "key20": "37wh6v5mHkbCf9sM5GoNZQKqVXubDNNn5pTmpU8U9eZraJ9RkgFXfBPbZerLn7YYEWq5i3XYUYcw9skML4JWvyFS",
  "key21": "T4NJw99jgPf6Te6jUwfyQ2qunk3qWFoqZmnyHvbuUtqcL29XCtWv4hjXeCQ9VdtSs5v9rwcFoViw6SNYjcHwxf8",
  "key22": "2jfyPUJhrVC9GWuaagLzXrd8CaJPAiAyo368a9sdNYswSWAzkRBmTAp365KPGX8n9XVhWEiJnkvYHviWK6uZYjai",
  "key23": "2XF3jD2g3JUCbSvb5xHkSPDXRMC8qvHtUTh5YrYF3g7fSssbDunMJcmpBwLYcvKYXrLvTTfrpuo52ehsQFtS4nNB",
  "key24": "27cLZZAnWs4TpkLsBQpqzGfHGV49WfQBShjJTbTArtNR6KpuhPqyLXd4FaVwiCfNAZ2k1agwRu7RT1Xnxf47qUWn",
  "key25": "4h1ykBkrytuDyf4aZwq2BduZHN5Cq4aezSo1PoYd4qHaHf4yMVpk2PYmUQyzCfNaayy6pPRgRaKdP8R8EovfbecE",
  "key26": "62FgkF8EHFE6maci5cpHmoazf6sg2rF44FfV7gqxgcBMH5JTCQyVCdPM1ctXTmBJL9W6XhozaGHbLrweyypkx6jA",
  "key27": "2bbgyB8xYxYLDB1xfV4uYvvrnn5NXCaS2eufARt8jp82cSYJBJBkc6q2wCu3FdNFgTD9uEm3ccbQN7r3oFZvEGBh",
  "key28": "434cYymp4Rcj4Sef9tZwbNJfQRmjHnvYoExoqkkNn4i6ofChFCQYKUiBBXyUnhwAjBZG4dhymsrVfrmx1zJC6F5t",
  "key29": "24VY4DwYyetuH1u1ZWZpdMoKrB5QhBs6pymc5TWrk7TtsquNVPPRE2gpk8xb9oJ6dGhFeRiPMJwWHWyBsYWYGupa",
  "key30": "diSSbBEVb8AFxB9Ta2nHTnkzwzGVk24m5QYFSNmP2rHfdherNvx5gTYKeurEiWJzgkckPYjtMQpXUZiB5DUK2zx",
  "key31": "26U5kS25TmgxBGRBqAANq6TB8ueEhzfZtpVmBstU7TBgH14srzPo87XKtM8B7Ngj4WNgfDYKuAPjzRkRzmtPzfHM",
  "key32": "4xngZSfm5e26s6JTw1Utud62RmLjemzMT1Mwnw1aAFsz9rJDFVRfyajFrNP7rqt4PcVszzrUZvkZ1UiWgC8m9zf1",
  "key33": "cdfGAY1DD1fZijEMF3dGjeF3cmjZKKBD2ck6p979damAfVJ5HSeroMvC8Ta1zyo9nqAeEHnoSFxc4Mxs2ZuyfdH",
  "key34": "4JbDsRwDrF39dFzsis6XWxDez4huRbukXXxmanGA7BUyfq3zD3p3dNKQuujDMsF5XabLWY3rkXmohMPrui7prq5h",
  "key35": "4DfX4PkaV5vowesTYPidexpFQRYdyCobaoeegUp6LqAaAHyHfRaDSudpL37gURT6LDaY9JQgch7iHy1ZUriLMDPP",
  "key36": "4X8ZZWkhyu4D38J2SXkbDerfyzUpPuZxCYEgp9uUqiKGEhVqo2GTs4MPbAFE9JyTuUYDK8NCmncGbiXRwti9SHmu",
  "key37": "4GfxrGkokrPCq73FfWkB1Ax3c2qGy9MtwXVUcXu3W8mCmFtDvwMS1VpvUYRB4J9ycsKpnFcHouswdNX4c85Gd1pM",
  "key38": "3YaTQEgvHk41knPjv5ePGtbEdZxVD6fJN11YU9W8W3T1GpmWGppAchofEQbPJbDs6hNBM5Z9vRK9YpVkc99sSy5f",
  "key39": "3nzKZqLi9Fik3kSrvd8i8LphqdCPYdUxTAc3WzSqk2dmNeEfYPqn9997HxjT9944cB1q2Jsee9ZDN1Xms4RGkx8U",
  "key40": "43QBoFi5r4DiqRVYL5mDNqeDgVURSXNo6h5XULYD3VVjEYvJtPr3B5SiwVHmrzGyw1UVRrY9fx2NmCKdb4q6iPSu",
  "key41": "4dvYZVEGxsArMxTzpUC9Jb5G9ScfQXRqpSsWZPKHvT8W23r1r6YrKg3UhT8Umss6YTnoM9mHXKyw8WjDE7f21QPP",
  "key42": "nqW7mMd8VX7Fa47qPdE9EapQHM73Aq9uZ5P2CaX8G3cdAdCie9nGJ3XTnirFFfNNoMtwRdu4MnEXVDsWtuqZ4Tz",
  "key43": "2TZa2K7KEr23wWuFd5pZAyGjDfDnqZLz81TW3KVC519mDd3vEzHgEuzU5DRZEGkmZqVx3XPuj6z6DvvcEKZazUkD",
  "key44": "2rRgqd4aHNd8tcHYJGQrLN7VVogW13PHKbXCNoUjbjMjBTi81iaN3iBrFSRphJ2ZPr5B2RHnSykYCapFmzV6d1vH",
  "key45": "37Qj8X4BoWAKdvwV2jUBY1Hcr4ws1TnrpDgyGpRqxGvSr8uyeu6eUURa7sGnY4YkoK38LagWg2Xv8mZFzLnSj93m",
  "key46": "3GpjuEJeMb9wbf8fPwvhBPy7bYbeF7yiuw8n3XJwEjeYBSP3s1f1LwaFPZkFr8WFqGgMXsQbnpwrynAp9qXPyPkS"
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
