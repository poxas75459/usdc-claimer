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
    "3mZd4VB5VXWNJeP3FHz3JbprmJ4zcQxCbyKQhUbCPzV3b5JekmjV1TNjtvF36kiTHFyU1pv19wqMbKMkrZBnJV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEM2DiWPa7ydcksBXAbJC9qMispXxgBqyDcLSrzGwr1KRCkTyLrgSE2S5utbW41y9W8tuQMts7zqz4pV1aCXG6x",
  "key1": "7RJQwvSXWMF5ZyJcqz9C9W3oFu2FTz1ew4VFdzU9tfNbM9TCTZA4C5FPkfcF1UCeyH3eCyccauwydpuPr2SSTF3",
  "key2": "4rGYtGHajc5VURSTc8PaC6F3mMmpkRoFMUZeik2oguGquaXdJK61zxD1Tws6kcPHZc9g9CPcq253WE7HgSDjSGov",
  "key3": "2sMUNGwXP2N84uhvyWAwVHB6xJiu1SYYcgi83rhjKRbaG7gij9auD8mRLjUwUQpuGwpcRVtGnoQrk5LumTXU6CHU",
  "key4": "4Ysrg8sw6E5Md6aKdK8maXojVEm5vriAcfFmxGnX6meBiyV7ENfniWHtoaMR2m9rWDsYammSUmv3uryuB2vSrFaz",
  "key5": "2sdYnqDfGjYU8sLqgxCqdYyduwV2wADyJWyrFRHDhFr115dGZPBehyD2kR39rgvf7GJhQYJHYXtHdXBZtfsHTDx7",
  "key6": "5RG4gNCVaUE7byP8GEdg6Y1oHKgGZ4UZJRRah4SVtd7K96p3EgF9SsBNGx9C7U3geWtz4q7okyFFfSMHCTYDUSyS",
  "key7": "3VpQ9tnptu3HMeKS1Lvf62rcmq2T4bk87vgyERbUgVMi8pd2udCiUmNhC1MRbGEevSv8Zt71CSJ45MybVXgeJ9d4",
  "key8": "2MEhkcBwcXQNWCcHL1hQTzvc1G15yQdXSGe1FrGo2NuoZzryMmG6aXh9tjSciYRqQmvyfJL6Ebr1WrAHZMz2Pu9Z",
  "key9": "58jex9QzH4sx7m85GuHEuhv5voLEPzdwFgqdzjjW55xuh3vrjAcozANfMGP7BvaxQKtF5tVsr27XemQpY7HJtShf",
  "key10": "LwKU3kvuhVmfFWfLaMJTt4ZPbTdhGRfjfGeiH4G8v6KqPuKmPTuVJNhNR3zQQASvjuRwPmcib6nZKyBs5uu2kQ8",
  "key11": "4nKLoyYjU58sRNCBBormUJt8JvWVysTk7gXsScKCqW93CrSJgRsMWNTYb45vTrhcJASfqnC3wCVGet37xcmtxRQ8",
  "key12": "rpTd5d9tandMe8FRkYp6uBPYzsCLn7vR3taojD6C6L4wj4amscmkyWBkxjHjvouUXQFd2JZKpXNfUSAw6tL4dXq",
  "key13": "4gXjVnmjw3DFq4aPFu4PkBpGSaLvkmkXAptvdPe4Cekj13qBVRnRAX74NXXWAaTAH4zekAygSqYkZj8ZSYG8KCdK",
  "key14": "2MWki3cQZn3ayuzKDXBxutAJhPZRAqHVBAiHcAm9XYo5semW4m1juJq7ZYNfqHro2Li2BGaDVf9E5ofoeegxXWYZ",
  "key15": "5vcHSUMzHUyDhHakaZNrPf1ASe8inUbdJsvzXYEb8mPKaJZd7zVB9HhS7QebCbQTDMSHo14ErZz6DUXk3tMVLntX",
  "key16": "2HRkA2vkk7d7iUzaJS5MywfW9yFSX48cgMmMaimGyWGaGpMxdCtVPkEm2b9jQyjMs8NELez64cSDpVUxKCLD6bCG",
  "key17": "284UK6dGG8eycPL3Q3386sZWawkQinEqn8K1GZbsgh5apWhSMVoHwPfnE7KYJweAVUhf5TnZFctxvKskWvfwTDgH",
  "key18": "2GJSruTJWCZUo4WMmhPmN4utDiV9Q3K5ouAaSbYu8XgmFAxMfVWMkfCWbte7J7UpL4Ng6yUVvHVgvCmwCazSPYXu",
  "key19": "4omsydRb8upvKjaPsytqWPx6qXW9SRyAX12vvJedcku48zstsTmYnv57BgwyFskiAvPgvBt16pxti4A19gdsrX4w",
  "key20": "2Gg8KYCpUZfGzn6Gp2r7TXK8uD2KwyMPbYcDG1eFnCht81F2pUr2hfzQPgKqorey273yH47ntAcNxZ1pXoaSSN8h",
  "key21": "497f21TZY9ogP3AEHF6jscVQb4WjiYrmgMsEmStJAQqeLFRKzxH7LrFnZwpKAV9mk5StdyMvMWMLXYTuCZYhJ6bt",
  "key22": "2Rz2MtaALcg6uEB7RHYNT9tmMUKQPYnwEmVDS6mUXSxTAzWd2LgRQpq1jCVFquxsH5XypJDFFnsNU7HuVvojxKfX",
  "key23": "G1HNkHWpwuu9iptmqZs8UnVnJqgWxHNtejk9PLMtdWscngzzZHkEK1f4Pxy9bFgHTUzMGyunWeNrmtM3usnUJmG",
  "key24": "2xuUvLaukvHwJ6xgCm1PsBxTC5nQRBkK9yb4c45yDoYsNCyCZifoxVwfV7yy9UUcvYWkebRpYkuiUGi6S3irS56b",
  "key25": "4sxKAF3avx9cGiPfs8Cd7dJZf47ekiBnqwvemUAd3U9pCipuveB8UwEZXjgEzKf2uiidWQ7cznwCHRfPMuV2vnMP",
  "key26": "4ZMQTYPvdMFiFD1q5D7NF91wbcZXKWd4R6Y7kkb2sXjSBqQpwADoc67oKi9ZYTMXZAc675fPUnrX7k9iCDVA43N9",
  "key27": "3MagMnQLKUXj3pTFxMeQotqoCkK1fYkXK8mAafq6EiFbxbHPjkm7Jj51cgzhq6uPUGJsj29qCBuFHWnCZsTwjopW",
  "key28": "255XKGDpTPuR9moxhofJroJ98DKBNipg7tJvQtDdymMadVg1Vy6RLjfzudGE84sujtgUcHXFGvyR4qcB88KtcS1U",
  "key29": "ft6Mx5KSRPYWZRqcgYrQZPcTekk6jFmiv14vkjN8ZJGPWKTDkMBHPxPkSyAmK9H8L3ZJNxsReouzAnGpgY66NZz",
  "key30": "5RkdSGn5nyLKoXUuuCvAk4U9A33RRA6y3uPA64cqQ49ZT4HBQBiSFNWmkZX43aHa1q76Fks95tVLk8jbg44KR9dM",
  "key31": "4yHdmk3D6brHMaXumetBthFZyDV1k3J6Dt7tWcCgsDwHtBqGjppShQKAT8eSSeQyUpb72QqXU6mLnJ8oqijL7mq6",
  "key32": "5NBc7UuWG4q9x7oTQwkqGammbcqhfKfS1E2PNfoW7NqjDboVo6Lv61eTcbNSoRPyoebLHKnhyLJevdfAG84G9yRj",
  "key33": "5rZMdFcMBimyLmc9CykPgckkbUHKt9vHKp48vebkCivGwzbXBPJvyFjEHuerkcep6hWXkuDeTHwiS6mJHWKkFEg2",
  "key34": "3UhLa8EWgfpBYnbH6vfk2W4keWdhaeHrDEymWFVtEGPpLAoY87wSmmeL1cfR7F3D1K4o9BahNbn6PT9KqGXLd59v",
  "key35": "663x4P6m3TV3KUiWE9pvThRDTd1k9Xtq7hqg4DRMtxoY8ufiLrW3cvGJtufLvKLSJg7Lz5gsjxHjDVZqhGBz1GBy",
  "key36": "429VEVDFNNYzxLdZNGNybbs8gFARtVFq5rXQUHrfByshNiqBB8iN8go53sGEEDwT6y35BSKYz4pejhCgiFa3SMMY",
  "key37": "2v3BKd9T2YkLduHbR8nicZqheh9QEFPSBbZUZSJ5vLWejsQfYf9t9L4Y5CuaJTSZ7JzA5AiypS2fnVpk4vNQQQ6s",
  "key38": "3LzHrfx9QM56KEPeGRWWYXkwozcWym9aVGARGCMSqN9VumqmvsjbDghbWHfet3GJYRUQXohLcHJ65Q1Y8ceMnAia",
  "key39": "5NY1unMNVBQafAxkvGfn5pfwWR4uYidb29jmUwmGs9Puj9CX42JXS9apEcRnNF7U8fF195rvBSeSLndwLfJUr3b5",
  "key40": "2DAcwQdApio98Zu2daU1EFCRGA3UQbUDk4GybQaNH1YHHoahaxUgpPp4VJEwGZxZcoJs7ptmatNdCddKhH6y9EzY"
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
