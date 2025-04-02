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
    "hu1jCjC7nUE1FGJz56BuP9W4MBLQ93HtGMi6u4Z2CiBu7qrZYWxWnffBi2Nnsq5xyJ5Pico2JsCwEhU8XKRU5EN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DkYMTiY8ZjzYFp9kmX8TEp4AeQs8iCDB5C4G3GHvuWMn2kJzboWoJYuhzBs4Wep6MjZdGRvEgkTueueDCFK9tfW",
  "key1": "3jQnVgz3m3Yzz5qykRai7conbHEzwq5VY5fwGD4H7y7EbGPCE7A4VWzkXZGfg59zfw1H25wwTRpiy6bwbXQ9zrhf",
  "key2": "2LB67WdvMo5wgiQtk5xgeZmynTaKA1Sk1XLnNhvjoMcKrA8K74gD3DXHDVZgjNqJgJPVR5zk5mKiRPgyaTvJ4f1J",
  "key3": "2KiQa2QbpfDGvcYuBjtzKs3fugeZWhbA5BuPgchewYZVUcyZsKAajkt8Zoa2TmciqBGvfHuX7mU18Fdvf8NFiuUi",
  "key4": "3Q1PC31wREEeq9Lg2DSyhKhe9s9QcewFLu3VpY8CzDGcbYGLY2vFae7L5bn6fneMedZVwnDaWRMmDofFbrZzRSfW",
  "key5": "4uGkfoHX1M4QvmPbttg2f7LKeFbohB3XcP7A2vgczzUXrzqFa4EeBi2tJy6RN9nZzWQhhTE1jGwMNjHm9n5F4Kqr",
  "key6": "4uZ3hQZNwYmffjaHAwQ2SAJPtCzZag5piu92Fwsq5jtn5o8HAtR47WowNziRNMcZK6eTagHVJvPjDVaLFya9YGNZ",
  "key7": "55r3poNdfbsz1Lk4b7T3fWoS1azLDH7s3hzPTXDLJRoKLn3MhUBmzaCiG6k4F1dXrRWWGA1k1aXQf6q8MEnV5CT9",
  "key8": "33wb711VTv8iKugf8ogDdyRudDm4nFP8hQCvaQpjhwtAgFHmyirFSuDnBr6piccKQMo2Zvbz2fBQLYTz39BBgHei",
  "key9": "5cM3D6Ye4McZoaavzvUpWjnkRfF9yjhbkzZ79CixyjJmmuSUHB4wqXUbgQAaviA2bt8uTjw7sKA21HwJog4dTbf",
  "key10": "2Cp4PfWw9xhZsFt8f2yN7ZnWuwave2j87K7WjkfgNMtgjJCJAY1g2Ex1ZWmAzKR5gANk2D87j196wGh8UFB8zaBX",
  "key11": "2t2nJU7HkJyMmDamFbudT8H4Jof4U4ozZ9qGsFeH7kRPaSiJX8B9hpBkmHByTyuzYKtGfvzjYiHagiDYbeoXjDCm",
  "key12": "4mjL15JqaYrYv9xgLt2YHd32DhbyurS1kTJftmo2MZkRHcQJSKE9NhuAXLp494zHRM1wTpQcRaNkXS3h1i63M8AM",
  "key13": "4tmRUYvTUKiwYVq9F6cFHf7NQUFLyLpRxjzDsDfPJ9kfpNrH8F9vMXHPvFXGZJ37hY1vkuRRnkwg6YhNENZ34uFX",
  "key14": "32TVRC2fRBZ8JzBgwxWZuUyABsBy6QMEELUpktRcQF5m8xcWFUkZUfA9FbcF8Ze3mjzNxueeG8PDVZYB6WWTdwoF",
  "key15": "2VCVcPJUdhbxVuLGN8gPNvRJbzUyZ97za1M3wGVyR6BeH5zNbo7FL3p1A26G8iZ2JRs2UaNmpQ12AXWiytgDZz77",
  "key16": "3KFriYbfSeM4CtLHADyksuh1ZRfi3uYsPmNPP8vc2sgiqGUwVrJHVVC9qUjYuCKZ9QqoebwMbF9j3zxye2NCVi7b",
  "key17": "35DhyqQsseQEo2jRwwjnaH6NPuZfRpmdfjDBu7neXbFrUmCUu5YbH1bhhXrXsn9tiabGVR8cRPDJ5bA93CjkprvZ",
  "key18": "637GSWNJHBDRD6XbfbJ8HTAzbnzHwKM1FvmT6dDdjFrzoXpEJYmCfVXjjyr21Wgppxf1QURn71YUQi1hi4bVP15h",
  "key19": "258Ptk4aVPtP4tjHrknrPV33BWiLGP6axv6HMMfv3ABSb26gZQMHjsMBjL6qAzoeoUcqbKJFYiFdWHW17ZsnnMy8",
  "key20": "3X6uQrwKFNUisnncwcVJbt5PFKFEqzyWAv5DeeoZr6mv2XvRn6ZbEZTgrK65uoXKNNSnyawegUJNW5jhzu6CBjao",
  "key21": "2E511udhqNmHuzeNvSx9ccdaW4tP4F2h6Xbiajgyt6ReR4pjT9LW1A5s3keAnjdshPmECPsURTdM5TDNgLbqaxU4",
  "key22": "3MpUDg5SrhRqqssa3u8qnaQ1MArhLMYdmcqFRUt4ywbRAtWb3XNiVAtm3QmeL7xyXEDD9GmbEsYSk4wo5uemT2yw",
  "key23": "5rNQkNNmctMmFcMZ4fn6qfbXY5m2JNxYh9yvGoXfLiDMNYSofjxdoQFboSgTaTWWa5KLHecHBgUpTVXwsrCwpi7w",
  "key24": "3qd73jybUXV17pQn9MmaEyikJEVYvwPtHycHNSxH5GpTdu1PTikijME4qwBBB62EQ4fUfWUC4Y9scXghbWsYRTeB",
  "key25": "2Rq8cXKBK3ky3xU3iAWZs4uMHUs6hrzyT9ynKdYMJWS6sQD2oEBXSuKyNeN9UdovQujyGtH5RUzT6J5ppXixFzn4",
  "key26": "2CpLBBXvcacdAcRXTn849LGX5mc3S8W1R8gk5ZMVUi3gt4TEzahHa5b4EDQwddY4RjWFgsH9BrERcwXzvSz6C38c",
  "key27": "5wJa22zxqFWKSV6iXVzkgGQMnXGBSY1bXF291h18KN26swSYVXN88waDsyxma68iGd3niaiJn75vKSGa29UeUhZX",
  "key28": "4yoYk3A2dLZbqDBVYKtU8NxgTQ7biep4iabZZQMGivprXpMFdZeECnbdi2hFZn98Dnaqqe3bFmfCWs88n4u7H8wn",
  "key29": "2Ht1PKypoXi9Q64puje97fpUfMnRA52PMc1GaaCzhR1yVdQLDqd4DykbviPrE9dJAicYNUK8t653QFob7gebQYzd",
  "key30": "54f5QEDEg8xxnJhpYPVjaqV2GsgBQYDz97S9HjxnF4vsJL6QroxrcLurhHt2SyfjuphEFRLwyHZ2YdTXqKtWtQPq",
  "key31": "2XFYv6osUDE13jKAgdWX5yPaMDmdYpGnMqDwF5s6TudcztkL542CNP9yrwifrHeJA6NE26NtuwUpyvSaFUtmU5MP",
  "key32": "2LjfkCtzRr5HLizhHUUHhcbsYJSXb13ubzNCg9xAyq7pGxaY1xByFmUMRX319c9RcnAayncVVQdu3G2ie3qADXm9",
  "key33": "2QqsHZUqUPXkGsm2V7VFw1rW9dxUC21yj7iDmxuPNZ6SpLTSVy56hEwfTHEpgFtMv8wYt8fcQtJZHRgUHwQ8KhE4",
  "key34": "4d1jemeDiukgxjA3d6ZkHBFC62GzZhC2apu42SBcDRjY5WD6hAfWYKYhznBgPfjYvW3dfHDwF6Gd6ANENqTjZnAy",
  "key35": "2JUa2a38awYsTdGg33N2rfs6qpYr284UESzHS39nL4rcUtFsL5ENLKn92urZTUFJ2za1AQzaA73AAij1wi1VEt6g",
  "key36": "61kuwwP5LtHSqFPLS2MtGyaactB17uqihxQFH4DFTmTezsQdKiPNJuBdtFVHxsMWQSW4zHQqTMiyBYepSzWaBc6B",
  "key37": "FgvHnoJ9jCb5BJ5aHeFA1bYT6Mt8RU1MbfGbQoHTk8WHyMGmqvKGNLQZwUThAcTt998ycqepK9xtWePgnsPpo8B",
  "key38": "5a9D1pm3otcsnyWGrcMS7futhdUoE1SHAv3kB6ChkKV3oPusnBV7ZJDvMGLGEJtRDRrXi5MWU8TpAmhfLWM8fJsB",
  "key39": "5WnFaDqGAHipxiRMRabToHaWuzxSF7mTbKsKaS1YHn8zyUZW3QJDeH4XhWBn7yt3xe6kpgGzTJCiZHbvoFrTeRXK"
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
