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
    "2UtodZCHkA7oZ8Rw5LZpzTjfxbZMWK7yQ5VWGeE9vbTscjWDcajn1mSKS8EYH76CFvzPiEiHaNFcEzpq2Gst5DmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UB9PM8vXEmRqEA9NrNeDnim1UQCGo6LazcTmW4aDpUfsNBmpXNr5P7pHwwELoavz8jdwvkEft4oLJatyEBt2nuU",
  "key1": "2dAoG9vAb6my4xEBFu8mSGi65j2L5oec6B4RwKyHbnkauiPJZFM661hccZqVVpUKUgr1Su2k2g7yzZQ9PxokF2Qp",
  "key2": "2PPhck42TzdSAEsjCC5zMpsTzz3KzfMpgCiDV7UT176VafkdNcQqUTirC5nhd51QJJTsW3z8VoidaKPo42H8jE3h",
  "key3": "4MXcjuFdYd3SUueiMFhAUJX3uuML57iX8GR7fsYh9iHRafwZxKtehGaV3FrUWCuyp8YGUMwKS16EFPm7GRtCWeJW",
  "key4": "4Ly6RBLXUDEgwKFrAgf7hpzugeMTbeAs93WFjYPCAkjFt4KNTdqK2aPvDpbyZjwFYQ2SMD6wkU7gx3tmcuFNxcYE",
  "key5": "63kA8QmRiAQenZg7euu7PbyzNFUskHsD6R1Yewy9JYcJZXGq1wK8FZkPXfh5ym7KWUJsYpHa5uGNcUos2zHEAyXu",
  "key6": "wH9yL7nfQ1RaxmvJ8tgPSPbGKSjkSXFKpGTSg4Dw2mT315VSm7nTn41FmYKAHcAZQT5zTwWQZH4zVFeKb5soUDj",
  "key7": "4pmxFJQGJXTQQjvUbUwZ8sptUujLrMw7bJGtuNsL5cs3v9eXWKvHkUdhits67Xj28GeD7DVdGjXZmhVwyeBTLPCX",
  "key8": "24v88UwzrjJJEAfgg8aZ2Moiba2fGBmrERxjvsGRm9C6qyeeAP2pQAUEGadpXXYwnbAaVruUqvqNHrbrxyiw71zb",
  "key9": "55RYTu1gtTjEwAkLN6ohNYw1wYme4XQGkFz94Vgea96bCbo8NQzaTdXa9TXKCupdwFNVxmQ48Mzk9QXUHWem3gA",
  "key10": "xjY67y93kdfRi9mLs2A2TwE2bPQSuhRkUruM8YKHRUrp7k89xwVc9LwXfNpyyqEWM29iVHXMap6M9vGqHpBqkLw",
  "key11": "5FEsiEyKVrVFU6r7C8eNKNjZPL2YvZgUNnJkDMmp1gWYmBWdxFr34ViCJgmc6zy6NdR9CHhzgtuH9aGuYvYkQdSN",
  "key12": "2xhPcJ69vCuxaF6rVAW8rjr5znA2JUae2nDyQgvwFs8PEoq2i7r85SiHYv4oQFN3F3Umn7mN1LEvwbkjSXyx1esC",
  "key13": "5vvZCQe68z8MH1r5EoPaiy3Nib77cYSM1wCbofKgJsKe5xCR2paH2uYQQvW8PTDe797uKaNtjg7ieUUAMMvCx6WN",
  "key14": "43bZDYnXbTTPUxq9Tm65ocbp73iAd1cvRX6nTRNY6aithf2scE2eitTXvV5ZF4sJ1XVhqJLykLPu4282kAnSUpUd",
  "key15": "3BYV94Mi47jeWPHAdRFxsBXm4NRUY6C7t4WDKRi8RQpqiWqz5y3d3TcaGPQxb7doiXeugReBBLwu3rgwFrE87iXD",
  "key16": "3h3tCCC5iE91LHTnw8des2c4dt4UsjjZMDnZPpXjr9zFkV2m6xabag4dgGgvAMgv77H3GD26cihaCvAm7p6QqmEg",
  "key17": "uxdn7jzop5QE2JX5hiDu3Y1DZqidDBCZ5EYXYagYbqMhRfphrC7kXAbBa71HJfVo5joaGdxakACRpKGHLbEoepa",
  "key18": "3UfNJGEQjDCsYp9W3nDemwddkEckqKinCWnBitQ2vqPBK1nHtnp7MwFxtvXs8JxfNai3zsMr4UyUFVHJoGAr4G31",
  "key19": "5vsyA5uPZiXZZL1fhYyQDCZe1uWnHSAKLFxdhjaUoPs5dbLah6m3mum6oh71n7wqDLLfkRapPCnesUk3Q3EoccxN",
  "key20": "2yEHvLwRCF6usaYUoeesB1J3UmJmC3tR9KevMCyxjdpeeA9W3t2Fy1VB3zYyEbRbYLMbaPrsZCtZDvxkx3D6pnvn",
  "key21": "2WDK6fTj4oydFTCr6Lj2nnxdgYoat9LCJrVXVYF8ojcuMCmy9Q9qJsNKGbXQ6ky8N8qwnY8VY2XTuHFJWp78NusY",
  "key22": "5vJ6f8yn1pfRz26HHW5yARs47bt1oemoGki5tkEvdRb9M5vhM471Af4FMrMvdi3x7XJiXzKBFZXmnXBpJKup7CLi",
  "key23": "RPTV4yuS64aPXJxiTbe6MjgjWMEHEBazRggwDtzkAGcAmZ5cP3eriWxpf2nFnNvi388Qh9LWPNwNpYRhiNnonaA",
  "key24": "3SUDABX4SJ4HuuyMucb7QT1iiGWiiDFJWmFUK2kzgb7P9rXHNtx4u52cgYj4dZYsc6Wkq1w5vuJrL3J8pKyRGrAB",
  "key25": "hAhDv2UkKuPJJzYdn7ihCRP4p4kL5TquDBuTA2DQ1fm7RWgkQ41tc9Q4BRHYbyLxppYTsutGBoXNoF81w3nSgjT",
  "key26": "4SKFnUf5daGhjrnPZ15svxrCZwtT4ESULY9oUyM1pQd5KsvidHokGJHZcMEAvHKXYfgEJbR9TYDXkedA648vQnrv",
  "key27": "4KHMBUxcgXAc7W1AsN2kQN6oZt1ykcm6aeWeXi9dmWTkyWk96f35ogFPAsmM8A1cW4DiMppk22ysTkBDs2GkV4LD",
  "key28": "36HLXbsRQU9P58CkE28764ptsYtSLFuh3yqD6BXJ3bgbCWwV3uxiyiLXM6x3JqfcuJga1JHJijCyCFzwhv5mRA7o",
  "key29": "3nwUM7nHJqqyE7sAHnEpvuhTYk5chgFcBFNsYczfxSm1hMSo7HF53BPa7PkWSzTDsL1XiU8FvxSR4jemNanNGuWC",
  "key30": "R65UhzS7osYraQTjEKpWdHEkJPiDangCeuLtF5jQs187dwAEbiT8kuSYvA4KtuH6rmcQSQzvNc7moVz8i8JrT8q",
  "key31": "3V3CfF8nxZpjrSmRWHGkCXrPt7MFRnPpSKgKKmyqDdNgXxSje848Xmvzdddj4AEkAE8jdec3zZNZQL5EWAVuLAQE",
  "key32": "5Jt8tve4aJmzCe1zwuG7jpuD2afvTc47mDzHqwcM3aYocQLkQFb1uPtqir17zmrULLCzt4AKM6uJwio2E2FC4Ew6",
  "key33": "KBogGiv6P16BuFEj6jTMK5aENRrEXh5ThhK1k8ghYrbMztYRXU7FsRX9tZeV5kgrumHAtjxue9ebYSyCUBTPh4L",
  "key34": "XZdRDPCkeyCWGW3bZwzebXGwcQ5BeVTCqZrND8bKeE9L7dBK43NNRrwSaGo8i3qLjKr7f7A5QuVyF3CNedvVgZM",
  "key35": "KbKowgYyNbtRvFRKS1MULnRGoD9SBpKtLLjomFqt2wNpfsfqtNSiUPKir9bcCLwwLPcu8KkRXCY8SKrbivgHhWx",
  "key36": "dwCr5PbLFddsYkgvJsoFvoFtgfpMCwU7PUoVH2khuVRGZGdazLTjk2nqkTgmvYeatYoxhkGxtEXqnpQL2zRnyxe",
  "key37": "2qr31TW7s1SFcuyqRDYtdjsP65AWo3Qe4rmZiiHWsJ6QHKxEyrmM3TsxfFiktCo2QMbUBBnQj3FmksqCmSQxezFs",
  "key38": "61S9syk32oZ8DFSBVFSi2cwNKVcGzfbM8DpcAfisPYTSKsZ8q3Lqjmo9xSz1HtUxqSew4yFQs9QbgnybQ4sLBvLk",
  "key39": "5dd7vBuRSb55xiQEezQKrpMUsuUcBrZcdUEsd79ujAFhm7FCQQT6GzfpMgkq14v7ehNoP39mKPXuiVVnKPRQ3wVm",
  "key40": "3xcSTteFuRuq9jTHJgNqJDXGBKVLUbafs6Sq2tVa78C7JKq7ALUExbnMMkNLkCtaNdGF8sGrsnzdWP5D9bhjdNZb",
  "key41": "4JX2sDhmWpJjvsHJNaKLexCf1S9iCSCZqkAHkqPufuwRZQTBY48gXtKs6ELDZptRZRX2Z84Cz6LTbypVJ2Rd8H7s",
  "key42": "4id9mJ8HzKMaP88rbZryz3conKZAdmfa9kohF1WzNtjhS7ESzd8xMoKvbJsCarS7iK562MhB3FVkeEvQN22RQM3q",
  "key43": "2eZGYQfVCU7eLEx6DdB2aC3ySr7tmx52bx94fYQBMWicBgcE18rtfaFywyjLuPsd1qYDFXh1yZCfHHHCPuZBdr96",
  "key44": "4Eu6CCjYvCcfBENQEqeuovCmKQWP57pHUi5H8taTCSaWqxJEBEztF58D7ZC49AAm8QBdNgMjDjVih4yfhVJsWVM7",
  "key45": "oaYtUPRXkro558M3f2GUzwSbfUCZb3wwUTrQVLeFqNnq5FuD67kuyKAaVJyfqP8sHpYtmgi3J3EdmcdXrwwsf9s",
  "key46": "2Ju8wgcSEyRARw56YxQu3CZAic3QuUeUEarJAiYZ5tCmAZABq7G1nG8VQUswQwKEzb8E1mxV12nrGL6EAkMtjmQ7",
  "key47": "3JD41NXrDtdTEuZZcstjPRPwPu4rgHogjvwfwyGpgWNKpdHLZnYXxYauK6r3dPviNBtK2m2hBAM1wZRwr1vydox9",
  "key48": "2mNvdh7nqHYvC4cuerZpBKnkKS5Q1qQN86pPQmo1paN5idabbRmQ7nzjeycmeSkyPerioND9TEV6R59XaHC7AByE"
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
