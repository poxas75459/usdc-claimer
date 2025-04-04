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
    "vVMu3vvZmVCnozjazQeArFkKNuN91ZGnsun5MKgy84y5Mh282c1CRkM9pBnSBoPem6n6f955fqsbgyhWot66cr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZF2v9sXNukhuyygU4NoKZBsUfSNETmxDAuGQAn1RdEEoH8i2CM4rKCAFJp7w1J5ByYoFjHtTwTw9JkTvyw9p1e",
  "key1": "2txidsjeuWnbDgw8yyaqq3KnxTuDHpsTYBoicCgFDRtQ7qFu183S462ajfxosYgCsT7pwsvtHEww9fLeSeeynbwP",
  "key2": "4H9M7uFPdF2QDggHhCEDbTNdYX11V8mgcbrGNkbnDKP5DmrrNh7QWYKWEuvSvsuW473h6BzaCwGxeCRhPo53BAU2",
  "key3": "zEp6vX8nuMXizkB7TSXapmR3GotCZunsLyr6FsUydkN88Sh2FVkREL7Efodu2tNS4RxqCumHDJK6F3hHk7nR2MB",
  "key4": "58MMozfrXN8vFco44hVuc7pVcYcqcktTm6eNWsdQUbZ3J64U3GjvakNbKEfY74zge13dj9ecvvuZWVTd5ozMGBeE",
  "key5": "5UgWSh9sLxfjjXXoATXreV5WGf8YC3osr1Aj8BvcHriYkBmsUhMRQ9kniWJRDu2uHeh3p8JqxU6GjZwZZo9cM5ZR",
  "key6": "3xgZKtWGNPTWpjKymL3N22kphEQXnDxcAVGTj5ctxpvnW45ooeMeh17XYUdxoxwBfTS6nyjZrLXK6wjrRt72pHBz",
  "key7": "5aHwdMR39i7rywTSsLxFp1HWUF6da39RSvKMiGacRvy7octtvhEWNkNhK6aAg2F9dd6emsZ5KpYrGDnHWt9m2sDc",
  "key8": "3p43DivkAzww2UpLaTpe61qT52vSUonKvcsAtjKu6q8tCnjrNjbE1JFRqGK1RuZJS5KvTYxQacCHR22XYM9kq275",
  "key9": "2NcWe8YHbLEv8kqQKSwB4t2sD1eZGDKzN2vfdnvpxA1tFaVp5kowPDwmevq9rj4kvAQA2i3EHW1u6JR5tdujcKci",
  "key10": "62TRUpFx7ZarqwsdvCHdVY9pUM9DVT5UzmnbyGjzAMcB8jqYyFE6Gqgm3UpnMNnV1P3ZJfL9VpDqKkLNr6E52CqZ",
  "key11": "2fSGKFEA6gLkxAVswxB25d6iZmwhfWPJJ1ewWEoiCMsQ5G9RHnppakMLV4ot1VgGSy9GxSeKkk3JYFaHitAyaTy4",
  "key12": "5L3PCZqYv328bEvkP4J2LK5UorC7HCq9HLDu1jDpSE7PzhvSoJ4mtghWTeo1ndV2LDygQDp4fednojTW5mYX7jfS",
  "key13": "29ha1c7XjJEAe1hgT84XSZYny4nqqx9qeJCQ5VfyXiXWdoL92YMWnfzz7tgHPEmSSSc2Hf2HcRFgKYT26UZTWGX5",
  "key14": "3oHcoD3gZ873RHA7hEBt2FCEbsjDvmZSebZ1FYVyWbcPhGa4fkj6hzvJrcR8CPo6YonXEZ5GCqDpnfbodx1tQpM9",
  "key15": "5QZJouyqjpfGhqWD6MwRhpuM8F1kof9aFfeEupD1R3d2J3nRmzAF21rrgLGX8dZ2HSzkdL4UGUUAkVEpgi1PnU7a",
  "key16": "531SR4yFAhTsCYCdWPWqXPWgNozMvtbBc2TxHngZgZkra6CvpGFv1nq91ddfb5Kb7RJkssMUJMs2GdXtyWq8yENc",
  "key17": "nE5QT4YAf6VqQFL4RHcBg2deDxgL5zVsMQMVCzQEDUw1vsQjKhdY17ndJrBtZ19ezgzovxwyXLjqC5Gy86RhYJY",
  "key18": "4YKEC5rSrzQJ2X3qtjqoHsZZ5bYtAmkhv1dahdCiL47VYSCXfap4U6MvFfYja3QLXxerfqFCfnUoSgYVjupQKPVR",
  "key19": "4SLwfv9sKLwBK6QrKUjPXA26n8F9g9x5NUuvMHEd1ZR9jbR8gHTCpdU3jb46Pa8hrVfQyjrpM8Ei8ACjixXpvgTQ",
  "key20": "2JFQqKX8fKzQAbfW4YeaBuvq3fvhY1tHY2KjucTUeHfDhbD1xJL2cTVdbDLJbWqF6MfRp9vGZLj4k87q8keqMTay",
  "key21": "5h7owYQogSus8PkyDeyqARzXHP32aabxdjanxh7he2nLU9gYxXBREnUtnDhbQPXRQf6iz62zWEYTRkx4wCGuhPF3",
  "key22": "5sRghsjFNNG5x3YJMmq8J5ueKKsqutXaBLC4SaTKYruFQvznNXgxtL89ww9XACryQpHchVEPgqkNR89JL7SHbDYR",
  "key23": "3vZbpccrvc7xZu7DVGNjDzrEjz6wpmtpVinoey4uoyw3mjbnD1zhu45BUFMpovgGwy4y6YNiEb2mk9NRW2dLgZjA",
  "key24": "2GdZtSWKwHFRE2s6G67zzQovKDzpqGkKCrwP58udHLuJQkKGbwP7KEnAmhUkDJ5VyfkFpTaXdt9cXMFrMtP4uaTg",
  "key25": "3FkG5K5zMFKBhWUsYqdjPxHbbE1NWZSCphRdkBeJfGjidMcxQa5dcX9BGc7eW34QcR5ggR7eAdyJxVVLAxE1c6ab",
  "key26": "4diJjStEazicf7ky2aNqFQyoTraXkjg4bHBW63UdFM45296Ggirg8FTE6Yzx7ytzixSH8JGhN83CATXQ4KPjw6ig",
  "key27": "5VAK4LuxNYVBYbhuewHrJWZHWCNFaQGKFvr8hwm9fsUqtZXrkXDQkofTP9uyDc2zf3VSWY4HJmnKYjkNd9chxEaL",
  "key28": "5znSvkJ7STMMgheJfYtUKdkFfwYwghSk8tVJpNd8DL2MsvjEBMSgfPzRg6TApn8RKPSDGtwLahtKDSTcUtbamxcD",
  "key29": "4FdVb9W6NiUeUJu2jc2KoBxWh1YyPhJGBCmVwFH2nsPNStDQWWDveDebfrFaAuK1gvY5BRnSXABnaBGEoDaoD3ka",
  "key30": "4FS44JFeWH1tDeCeNjJw9SickjZnH8QSPxq4XguSEcwMa5HDHRLipxDBmZWEofz8cYY3EkixfH92cpPqxwAt8H1Z",
  "key31": "4agEDdEhA5ybt8jaZZd5c82pHm5nHsAbvtsmeVCNLixVPnMQtrXFhKq2VhaLXGQuFXgbWSMxueHpHdV3LQFfGsG7",
  "key32": "4oC6hQiyzWFo6dPrijys62S9xPqHFbdLnHKwzg6u7Am5n8enTgYArkKZ1suodbijn97pA4iz4rXx2GmRfmHeEsUu"
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
