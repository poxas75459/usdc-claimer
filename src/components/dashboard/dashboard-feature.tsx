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
    "2yRtEti4sDr8wsoANhmwcL8XG6yW4RTPwNEdUzfNm7NQga5kcta13pMGaiPZXDYKzFTs8EXN7fGX2g6ZUuVm4W4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3BpRjRTsuSkccrj4PUqGHVC9Aaw3sPAWtVGG6SfhKZzwjuYspcP9bqDRb9JdgpqH3PNnjBqSDcLxFi6FspL1fn",
  "key1": "32AKMWn4W7gF4V68QARL5nU2xMNcVuBnkVZiq9GnnYGqYB9dRcQG7zCoEg8bydxGvvf1H5M47hMFDGmYpVvm39F7",
  "key2": "2u1JQGdeuz3sZvX23BA5JAA2zCNv8us8wPjLfggAMB6BZCxEpEELzbimbpJcggybgZZzhanmTFrSSGUU2shz6YTu",
  "key3": "4dsxKkuWMdLBuNxwEfmgr9NoUzF7SLCfVkvuV77pzdrSTRfvpChvFeh8v7qRTp72uZzKjZYCz5kxQRQSdx3pubmc",
  "key4": "4ujEtZb6gQf1Hv8CN2bKyFYP6iiFZetiLKDgkWuPm7F9Ep6GKaYQhjsWTnR7cYEuEicr8vbH6E1kq1aKWtP6DqMN",
  "key5": "3ZGfUv2od9YmkYQ31DC4HW6m3z259TeBuauGBnev6eoL1wywDT38Z9skfhoyHTciyH3ukdZ7QCQGQ3HsEn3rJMsC",
  "key6": "3oPv44Ffuh5mCSYVJeRhtupw6iwQsFdind7KoogvS4wC9Lt5j3HxAyryhqDQqE4WU7gKiqmrzq2qsdaohxS2nHfg",
  "key7": "5tFbDPqsEocoUdvxDjwpEspnqZGv4pd6zfj4eD4nPwDjtvJBR9enRTt1D6qKuK1p2FSUmdWer9DGYAU5S92hu676",
  "key8": "pEYjhADJZNj558Gf1d4wU4spbt41c2Dp1V9VDvAiNHTergsFtjhQa1jFHNHgbfsnF5RfuhHiYAD4qf7LFWyH67n",
  "key9": "A1CRjXYwMYNNo3Fcq7cqbDNMonbAnCbNXg4hkPZHjrvVnMgTxQHoWF5tfJ5iTSVco9upYu4CSbZWD3aBhsB55Ak",
  "key10": "4n7vfs44LHAQJui2Gc31N3H8xxsKopAbUsW4A33oQam3CKTh4R2cBx8MDoX4DFhhQqadwoXttm2WdL2a764sLxys",
  "key11": "4SBfW14rxFm2bRGxEtVy5gh8hEYa6R5A6q2uHkEjZ1AsejnY8duRovrnPu16LW1YnArTcQa6mzh93z34vxS6nzbv",
  "key12": "3ZGjf3H4ZHpKq5wHpgFfg8Hh2SrahBZ5rwph5cnVjfzj3EGMYFuJdD1e6U89XCNcEf2fubvzZCNfnAEwcREzo41R",
  "key13": "3CBHnARJPmWbgdw6P1SjLZcchRtfLfVMQyyDbVJPFrLYDPvEcW3KbAT5jNSTvJKpHPEcLdZb1N2K7N1bECmuHWA7",
  "key14": "6493eLxJ8Nk6p8vQRyTUArm5JbSS4vPyuerHRwm23zxdEFQ6mYNoERQmV2p8WWyehve2ozWUMx5sbjca3q3sjECZ",
  "key15": "5JjK5hdjM9LfoKmupgwzZyfpLf37g69vbyVmhknD4ivoWNkhYwAr9t3u5MAybbwjxdR5q489muPUYgJ4ZY1PWz9T",
  "key16": "37krRtoYemsfJ1aVge3eHZQqyQFTh4btXY8W4WkkBLdQSg1sChMJ1ZHiP9GR4YJJajMLt5cZY9n47WrDV1UGbsyM",
  "key17": "5j5hdkcwtSCQeNTjTUuKQwNHuyik4T4mTioNAXPA2Rvdu1K6HvoUEkSAKWr9WztPdLDZhgt5Pk1rJGpC7zvFCAUU",
  "key18": "YYks1AWFV1MFquCw9djqhbuzntutVMLxBWUe9s63dvDdFSQLA18rtxUkT9PvNgAiBqD5HCpSS9qQGKYUgoWMQah",
  "key19": "4LN9uBM4gc357Z5ASNdVfwb3kTdL5WSd5b3GfZiCoL3dVMTyQ7ehLJrn1Py6VoZAMLhDxcTyyhpsfnn2pcffEEJM",
  "key20": "59r5vzh4yXt7SZBNLxTtXK3xrR5poe8M7p8ZLo7k7keKMyRx3SeRwHEkT1QStWdo8Y4Yh65YFxhXZDQn1odKpEHd",
  "key21": "5W5pdbM7jf5StShmDqruCRhacakaxxFaszyHaNDbRU66RaMMujAq6E7FBVsBG4aPQpAaMC6pBMxqXAyTao3dfT9u",
  "key22": "sHv4m9TQrKdmxEYrfzdfbGAxqGjs332hQUmJC3y9NVLWnTf9Y16f6XLdL22ofAHxykNCo3H5MpJDCoTPdc38FUc",
  "key23": "N9iCQBK6A5u4PyjHszZDjmVLVHi5PZdUFLaCkhYHyLbarGSQycXN5XVdEf5whY2y6XnDcQMCXXbQS5cJ5QYPNP8",
  "key24": "4M3VkvMSdxLF4ix9qkg3A8VUwx1wN4MV7QqYcn3vHYQDcSmT4HdLaw78MkPkfXe74YoKidhNQpFYMe6TQRQua5BR",
  "key25": "2JqXTmgbEk4ZTyHZKEW8QZhu11kaNPERhEAR5tKiBDEqgnynHYCoUWwR82FeMMyJRgdPMK9pNvD8sbN1V2yPkrw8",
  "key26": "4j1TdDWHmVWBUbYuBeqZsbMim9RSfgaXgUN1N8yjxrnEnLV24UDpd3MQm2T9Zwu4QnRoXN64GrxmLVivUweemHH2",
  "key27": "zMjjT5Moem2p6yHqJHy2aeoaaxdR78Q7VASoNxvNpYc853boioiPRFnNK7vAY4h532ep6QRVVkf5mdrkK1GnPSS",
  "key28": "5YLBmXUWyhQXBqt2UH2R9aN7XdPdzourVCYBYT7bZ4hy5HqYAwKeUMg9uCzwR66GeoxWK9Cb2KBAX7gqRMwhjSJ6",
  "key29": "2gR83XQ128Uw3m9tK4JuTzHMAcCMGCS7AbzsiKkXbdkPejWWm17nnehTk6n1jbLZRYB59r9MGdHJbvCj7wPdYq2J",
  "key30": "3JJjBteQMeDELuu7rXckru5vvEXBEfQpYhSVHhzMAucPY9r7h5Av9GCrKmHNuZKk1hHusAiiuFFSsmKHfxfkkVN2",
  "key31": "C356P6xLKAUX7seLyMWFFhkLZwyHPtwP69uzMhMrnkWR4QnmkgBcHt7uLfGnW45AF3JhzKUpE9WDYeLnQXAuZRV",
  "key32": "4Z57dxRArzdJ796a9NbLU4eLoRmW9sqCnvdkThfZb82dxUEjtAR4CD7XEDSn43GX8n1dAv4YXbqJ93EpqEQZbqSd",
  "key33": "5ifzH5YUokHRp8Pvdxr8B7zqWkpbb9eMooGuHjYT17vLRRKTam7mHcN3iCb2mhUjqQkzQquKCz9aPp5iCZmjmrdX",
  "key34": "2C9k5vb3cKsTpNgq4i2FwHgEMz8tDTfG98MnjQLN1f4LG1wp1WzNEahVFSLvV29CCwyuESavVauewJNyJdK82DLC",
  "key35": "2WJfLYDvWj9zmYFLtjJgZBpak3a3xgLT4YELKUjhw7LEuj8n8WmGpwSHL6NPonrTzqqpYt8rwmKMo9Z76JBkV8iN",
  "key36": "4jUuipKEWNzS8w99VoiLUymfpNmDBsj2NQ6WoKvbBTVsF6vEvSL8CGkjyTeiLo7kgMz81HtBSQo4vDj69tf1ddkq",
  "key37": "3QYFyfMYv246L7kJ5eQQpDC8EQswjmuFYayaajjPsGXCJ3GEJpxxoexMppwNU6QGhhppho4d8wRaNEqvgVuDGZ7R",
  "key38": "fDdh4eRwLdoxTPvVXgShuQe6LbNofk3MsWTAkp2jwxgccqjjdaSr2KiX86rcUEWYxSPnFjmnZHqY43KaaFu7H7D",
  "key39": "2tQotR5SrFBFr5YVDqb8M1vPdpUciSdtBzJq9NAnNFN2yBPLns1HruSVhqUQ34C7w35dh57okENARjtWRrxYZK43",
  "key40": "5dv9uhEL7n6XPazRPT7McKaRnStKa9KWAzBioe4rGne22kcgTH191HHTcNCvcxgPuFGoYe4Jwy1sb5rdvV6pwr19",
  "key41": "4TrA1G4K7nDvVQwdS8kjCX5V7RffpV7Z4USK2gsJHaSTyshJH3UE9DAMGinqRkDHN9eJSVkPve7kWMZoMmLzYHsz",
  "key42": "5YNGtt1h5bvjFr7Lj3X28tciUhfDU5mp3mRvczk5ikd18PVnGuHgAohzAXjpmfvQLXNevB2DNg3SxJisVq2iCmWV",
  "key43": "WppGEaqtWokiUAUBN5orJERW5sAY1G8sixkfhGLy1Kvho1g3KLcsWh7H1ZGwaKsumQqSCs5CTA7BYEc66WP5yjq",
  "key44": "3VLKs53mtajyMUuLvZn9TQqbkRyYF6tv5LkyAbyq2BWt3f41N4xXErW6RaY1RhfCntTQuDX6Utd7mZz8JDEJPmKh",
  "key45": "615JJNQip8UfyM8eGNg5psCinfDXmE6YB3vdjSeusPwUuCrAmTNrhFqcVTqejePu9TrXVqiUD1nJkBDL2HbpEPhB",
  "key46": "54AHenuSqw28icksePNGtWHWTu4XDgMmVYvu4eGQLb9g5YMsMhdSnjfut5eTEvnizoZyZmzdcSEz1Zpx9HhMiyoN",
  "key47": "4kHT7bsFFJ3DozpzotzrtKxR9gNNHHwct6aiZ6GayMeAzhJ8b857ymc1UUDFk5JxsYP5ZtMYA5WRk9djgGvTHbAJ"
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
