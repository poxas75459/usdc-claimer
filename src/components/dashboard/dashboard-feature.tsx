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
    "2RdXH8D5tdKn6WbePK4GxvHKRnKE5jU7F4Nx5DRodUtUhJeDsL8q41oFrB2T1GErd8NTAaDq1eECeZGYUaKattQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61n84A7fCMb9KAYWMXRUMzhtkTJpf8XNKGVNV2Ax6wsbdd44656C1Wws3jJ4GPLRXd34LLHqQSiksgMWtZi6RqUp",
  "key1": "SKPafvq5UZTxEeZJtWo5ynzK71dash7MFjY7y7gDCyZjNz5x3C5EEeza1bRqZVfeoe3gfbri5YJ9tDmsDMRJC9Z",
  "key2": "3pcrZyPWwqyxCKYuyHzJ22AW4pL1XtRpFv59WYmXAB9ScEXPakv7itywToHxnj4AJNmq86WJ9QYjnVkjRwUMRZF5",
  "key3": "4zwDBmc7BeDonnXNnTXeZtV6TQXmk6uhSGGUxrfgkTdSDxytjsuXkpPJbKF9k6RAQQzpWkTrzvmENtz5ykRUHe13",
  "key4": "43sPhccecdcCVgf1mXabmTM85N2ugp7iFRcQdBhidzxWvi3i5U2Gc3hd3GhZACadg5GcxT12Q6F6PnJuyy5GnSgE",
  "key5": "42N4uCebYpTP18HMi3U1wj5GpUqmR6vjnm8eKLqF3MqvbRKq4ndGNSHCd3z6WmZnmFmc1mfm1C82qM8DHieHM54Z",
  "key6": "5vMwLAfiSYY8NPs7BSb9Xk2aBHgBqEqwwsangNxWygMK22wXwRULBasERcpn93uUpNuiVygk5bEi5Lww8zjgHad1",
  "key7": "4Z5wNan2p6ir8FhaunVPEz2pRJTSWwpZWU2Rxzn8KdbkMHxvtA9TnHVH5XzaedHfXR63RakxaTMBXB7gL9qTuTjS",
  "key8": "4CGHXysUQCLyo5371P2KPgUw9dxEgAW9u7eVje8xqahP2rr9ESaRzrm3gHjEZYtgs3dRL3dKAa7J1CK5o85prS2u",
  "key9": "2YU1quwFprZ1zuaLui2DJLPvEY41D4im2WFtC3NA2Rms7dCmVcLb3vup7x25V189t3vkjDiD5kAqhwK9uGX2e5ra",
  "key10": "44XgmpLNZJUC3Tmbi1hiePaqGd5w5KpAip4bWidhqR1UgB3JLpUoSyFYJmD8psTdRudHnETivBij5GiZi4UiQA3Q",
  "key11": "615AC6iESRkAHLs8VU3Lg3noTcPJReTfozhXXRL59UXDUFm7f9DosfR2yQqWEsPjTjWBtDaCL2KVqboH4HKb4PuV",
  "key12": "2T4KUpGr7XEGA6fSfoMYUP59ot8eXgNrEyj7myvGdfTQzQwQCybexUimdHwzUhScRfoJ9W9DPbNNMeE5Qt51Qvkn",
  "key13": "55TrZuEpkvVGUFZXGb1J75iKxdqSmVvKUD62jwtuPPwLevN57byo3BySLAgM51uDVvJQhdZF2md5MKV6cFcwq3Yr",
  "key14": "5a4sbutw8J1sujamHybFdBSyHWzEt1pZG6mzxFV7xb3grZx6ot4EVrfYkrjwUydLY6rbtxqfz9ti4pecNSgo2Kw8",
  "key15": "3Q7wNPPuA5RWCn6SyKWaghhXcK8WzvsSqSpF1RSdPtE2R9JahdVQMViGKeDJMkLknKiwVDw3Mio5TJLQnKrmWc5V",
  "key16": "3GNbPvaJLQAPbfCwG4hVbjsjLzAWiWLdP4QrhbsTWSZ8L8hUgRSuntFdneGS3dbFeLYkKyTgsx6bGSrDmAVZNE5E",
  "key17": "3x2v3P2tboL8iBNY1kafVmguXdAPouG1qQD8psVt8zeWxERrTJVFgxV9Hy4bQQgBDUGcio39kvBR9884ymPcLf2e",
  "key18": "2guNsYqJADx5pECuUUyh4VZvUYTrcumCF39ZFXbwyXXBSJXQCb4vNJvuf5sYPRBRHtK1KHJDKViM8JA2s8MrKZvs",
  "key19": "2UQT6QicnWTemjjkBKzweHWgKDBbPcxakGjwdwpafzkzUCH1xoPbH3gah9AVvHcDMmcCCSZv3o5dKPsz8X2RpTBC",
  "key20": "44G6oU1m8qp25ccX5WkbozNmeiFW7ys6MubVhZiF7GxALSFCNVU25L1gH2bb8r7eAXamgy47mMD8yrxvGPYr1NDU",
  "key21": "4faRqJ5Kwm5CB7VywJANyHTg8mFkiWP53YoVuVro7VBeMYwjL16HCte6SvWRyCDMGSVB7ygZrzgTddUgwLNkXVRW",
  "key22": "2PCwyVHhqjA5xzuQZLdYoUpb9REaPUyJ9sMiQ6VHPafK3nkS3EJiyGT3yo1Q98JGKeJ3WTFbj3AtvdkoRWjvRutg",
  "key23": "4gNktYFYXKrHwETqpH78G8BFiiJ6eXFUVSyiQZb2XCD489bkKVm68SVn33MNgMr1WisU1n554cB9honZuzpcQibA",
  "key24": "5mJQ9dhFvFWouGYtNtkvWsDHuJUcPjJEA2CRAg9AZnEWVVvU4mcjeRLSsrXwL5WBeAUzuxfbtiM299PWk2HSocLV",
  "key25": "4kT1yYTTtr8RvaWN1HJJuqYZ7a3QbQzpZCNam9TgoBFw6oufUsXLGPFq9m4muaAFThCrreZAxnDYGnMFzH98bCBa",
  "key26": "3iATTBC4tat1a1j2QeN4nZoGWMzwqew8qLM2R4BQ1CErNpYuwzWXjWnJgDmDfBEURaAqyAFE2tWUzMx1ggAKP8Dy",
  "key27": "5nYYJVeCSpN7DBpUSfk5wEjWxmaqSEneAy8dAq7np48LwDNJb515Kzt3gCB9bymQ5UUtiTApH2FuTrYKUiJdFXJe",
  "key28": "3jeeS8MbiYx5m9pdrjPCvHrbMMmKHDe6cy156UkYJyH8Djk599Cg6Zw8J8JSFgKH7JcqExkT91F3wQQRqgEgQ8jR",
  "key29": "2ytWJNxJaaGSqNJPRxC7mWTic1TDbYvXQtUadjFSkfGj1TN2XYxzAY7ffVYui5GDTHrrRGMDqsqZJnkL5ea4unE8",
  "key30": "9BsjvZ4Q5uw2fEX5uY1mZvi5TykwU2XKvcArooXKQv7mEjFaQvvCd7iesF5PCekU8nT2CCdwhLP678kVUM1xwCG",
  "key31": "8ooGfGp8CS6z2eGAYiT4KDimz4oy1wtLKUKGKQej6wFzvo7RWkUkBRNGppMq1Jh9hYQqGrZbs29bMCc82RDLYyQ",
  "key32": "4bDM4vZMfRBTgm9PFAb8GTcrNYc6cYP1rDWvo3QmPwow7LKhdKJNdgFohqn9bTTWf8PtgkjXFoi4z3voLa7EUbfA"
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
