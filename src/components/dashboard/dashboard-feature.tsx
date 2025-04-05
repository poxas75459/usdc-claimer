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
    "3YPSt9SBP9JMVKiYceCjEdSf6aCRWNNAy5auAvSNUejpM16dH1Rb5fVaP7cEgs6EeYweJXYZe4Fa3mx6N5yrpnrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wab4AxNdD2yya2crC5Eg32FooJUuAL623Cz24SDLe9xJMopmJG4NZ9fF6YRUquA9uYakxoUftRw2ujJBki8eHDu",
  "key1": "59Fas8L4QU9nGdhhQzjYvXkQx5ZTwLgQYntHCyd2mvyPLCEtCG58VzKXuvbezWim5oZwdqv1T7Wu8y2aBNBNqQV",
  "key2": "5RhrW69HU83J4SqEyYiPHuvwuAjwf7PeXrq8fExxcWsAJrd45bw4FqsEcv4TS5JaXf9Pf8zTjzPtPRMGota2CAJV",
  "key3": "KPRvPYVEU1jjafy64Y1hvfyk2tE1S47SNK99nBNqt4mBjfbjV9wqCPDfdmVi3yDziikw4L5kYM6P5ZfKzZQUphU",
  "key4": "4EbP8zq7jTHJkceYWLvsFAy6VmoLaytFYry98rqReTSkdwdRf4Je5fg5uFyo6L7yPdW6wny5VZiGrRsqotfgVucm",
  "key5": "2uFuZGF5kCKJSVAcBwb3JYENjBUdL7GeGtEf1pXSN1ufWyX6vLQSJckv8uYvpTnGyf4mKGVyX2yXo26LA2dduGbx",
  "key6": "3HS2sKGhNT3zkQddd7SX9ACJgkUBKwm6C1zJAT4wGBdUUqPiD1iJGExBAgve58zvxc3DR7hjibrWD5S6JGEC4tPF",
  "key7": "5VMUAjk4dKk6gQ4uGEFcuct7jiUKEzwHvujir5rCJkNohVRjorSvsote9cFyzigtTDaUGMXoUVgXMBk3EUmBvZaU",
  "key8": "45HAtWa5Kbha4fRnUKhX9uf5sHpVvJrVqa34Mcb4HxF9GbCGxqRud8V6tosb69xonqvEgx84QVbKEu1zXmm4PVUx",
  "key9": "3arrWXGyN3X7X2bqLu52qMqoJtWdLxcjhdaFrvbPpB5X5kHgBLbihw7RbXM5H1voZvQUrRLmCJEcAWXSEGHurMoM",
  "key10": "5BsGkPNgCWxVfrMSZJ8j7ZXjVy7sAXSRqyiqyFXEQyP3Ub4SWhWUfwVdJAnYC3pomTqHTT3L5kZmj8siwGhxMDXk",
  "key11": "5Monj9FRGKxh3afr3vBDyAjYwiNfHcA7zddoMQFA7YLFWyCBFhmNDJVA7HhMAvenDsiB7pXYK2thEUPijy8Lrvg7",
  "key12": "4htqtSUrYVXbfHwN6LFyx5gDoYkizpn4zpKHvqqXrGGUwF3ixjNqygfEELYyqaCii76RQst1rfSNmZfeEzsEmEXf",
  "key13": "2mMUp7uaguGa9qEZNfioTimr3bozJGQj4vksAtsZrY9ZYku9at6SoYuh4byCNyRGQCGAbPdm3dNzKSiLjb9m3xCh",
  "key14": "ErAz9t3SXBpy4D1kytN6UKUX5MtqSaWifJCe7VgPxQVXjsky8tKAt7WshbeSdzgEKf4KEzhGzwjpivmzwdup1Dz",
  "key15": "63XgoApzexhed7bGGAkLzepiKzN2FNCUXseFVZ95n8fBFea9ZYrwgd9zmmjwUMi4pSPzyiNBZvb9sGKsWSBsehL9",
  "key16": "2erQifxPcBdrCEQCZ932Mi6gv6QHPsCz5uiUoregpnHpjpEwPn6LHej49p5Nt5K4stUMjkScgvxWxiAoyv6c554f",
  "key17": "fMtdVL7GAz8JesZbGgpFWBWhhNPiHsAG6s1Ek2RpBP45HoA2ynm3d2PSGSH3Kf6jxM4FVmPoYumD3KcNQZW157U",
  "key18": "2kyQFSm5D5mBbwMqTmerTC5SRqa12BS8nbnJ4taQEWbRb7pjZe1XSLcvXVTMahkPaXG8b2CrHtJxEsd67Via4WJf",
  "key19": "4qgg6GhgLBGW4rjfvDG1ekbYZGDVUEBwQWsWYLoTzFJLwM1ehZjSACoCc7FQrEXBcSjhfkMzm8KBW5GKxFteEgEC",
  "key20": "54zYJvHscBF5Nu3iMRq76u1ioHCh3SMCwY3hLP5UNkCQpuqzJLRvoa3yE6v4jgvW6dwYDHnt54e1vdhWZ9cno5rH",
  "key21": "rNgjpcKAf5StU2u1isBdkVLpddek3UeHxnpxtgr8i7qs4yjLWwGuvnZDTrJWCGtUEAGzMkc4SYfGApBzm9giThv",
  "key22": "2z9ZzpfCpRU7y5ayf2Tp4TLQPEEgH1oUY1TcAYuvPJc3aYEJ7cLfRBzZ8MToTN1EMAd1EErzZ7Pq1SD6ztzDLsfo",
  "key23": "2gw2DhJDynkvDZr2MuPf1rEzSGsR61SCiWXTu6wUC6bWukLqM5TW97RyemWyfiJjmMZrSQnye8LvPeKJzuYABnFN",
  "key24": "5LHLPnoT5J9ZHm51PhUWf5RXYFAFMm5RNXUXGBcmsmmRycfYQfKMrBNvXw3e2ee2nfgw1L8PrehEDwrdnFVaCYnC",
  "key25": "3We4S9RZFyFkVeXHWn1feqF4BPbjmBcTqHNq74XAKn72NmWGNyhqNDzweSaDSmmF2GAbGPNQAFskyLEbUGXR9KWG",
  "key26": "3HHemCWcyP8uRyi6p7Qbendc6A9PFxu2LnmJif63pdVbRtLQ3Gj4JzcJNSocKV8YBfoniXjYpdKegcd39BnN1h6f",
  "key27": "5TmurXEmv1KbUyG7h8C4ZLrZVKVeDzvQuHr9gRfW8CPV8cnCTK33h9M4psSVXfsMsAfzAj9jVo3Vy3Ni2WiHCX7G",
  "key28": "5PsqxRXjYxw8zdSLX7HBtFfSQvP6Th5WV9VhRKr6SdM8rPockPJzoeBBF6YuANMy7EWekPGkSQPr5A6Nt8Lh4SXb",
  "key29": "2M2T7ajp9USjVUKew4DuKMca8ZCfg7Vcv5bkfd3qUEWXCfUBpW9SzzjV2oehwAgzkq5Cg7QTd2LKXHkL2Ldb9nv3",
  "key30": "42wgyG4WK8s5uWkVZFBo8Va1bSZZGdyfJq2gFKr7rLsfLvhQY8K7zsiRZtLmMJ95DJiuYDLfUBRsqHsmgiDz9N7b",
  "key31": "2EZSRTsBzd3cWLgzQ7uuXb1ysjfL58vdTakDNBH25bPat1cAittG94jHyhZFM4jubLkyA9yBR24fmDrELs1K1u9A",
  "key32": "39TVSkq5JKVT8XfZaPfwpi4zbjFkShbiDyM4538jHSFRUF8EHMN9xaC54BEcsfbuxbHHwrKcS7uBonEJRpwmiHfg",
  "key33": "2p2gUgHVKrFY7VcHu8vGgkivYWAQ7Pix3GpyKJ2fbmfurkXmmTCuPkvqAUCbqm9P6odMWNePFBW1yZjGAjdpnBsG",
  "key34": "39Et7yBpMrdWyrQSHmtZkFKag7KLuXoiYgpXutyPHKeqPUaEr8NJX4S1EQn7XR1ocSyG6hC6RPaV4UGFHr4KP7Xa",
  "key35": "3t8UsHQgyNZLaB3J1mxKpHTCozciYpb8jfrmUFYwtfSAq33YCWq1E4EnZXJVwKT6i6pyegaUDWLwVFCynypHYTo9",
  "key36": "5M9JNdycnWpj77NcuV3bKsejAJHPfxRJY9kY6sCtpQBPH7FBKK6g9n4uWtVJ2xNQ6A9WzezEzQextQ1k2ZMsim2W",
  "key37": "4N8gTypXGzMzpSxNfY4chaLCumLMR2L48u13SX5zbswJwK7EcJc4k1rkq8h7hGWTLuctg6vQsRjptyGw2P3bZuAp",
  "key38": "cCact9bfSDkiyftbdwfsdyv9VVcuuusiZaAdmeEqrYysbWFNueNhiPbR6twT41YQsedZaQ41gGrcxdfPq2qp4Rd",
  "key39": "3FjtTe2bpVyRM4315z7TAnyiGhNZHYugHHKr9SsLdXRKHBYWn4MpWDsxqrJiGNhHF9v4LzzunQEyB1wkrBB2Qx5v",
  "key40": "2rW8Zyowo45KG32yDCqaCSNnB6b2hkyqgbyEe2xhP8QfhqTSoHv4FoPrqFSYGgFyUtUBwG3FeX5hauzpdZEce9Tm",
  "key41": "2j6eY8nfPxRzdRXYv2XrVKeDpRPUz2mzE41D5kBtfZ5G2qi2zMtEeyYKTUCxy4EyY29R7TMgacuPPxkpDdUg73CH",
  "key42": "3AZRLf4C9GEbsfYYASKupNLMooi1J4Awfuk2Qcd35cH2QvR1wzDd8qzQnK839Uxir2j6VagFTWXNmrSbJye5PaDR",
  "key43": "5G2XBHE4YbChPcMUwj4itsnUxT5VuDbxSKxcCX3mhvq5XqswUtRxD1g5yEjK2ECu6sDkuv9P9831dtXq8Eegmgbu",
  "key44": "5FM8STjRdC5NVWhB8scqxv3ajEU8ybgcwd8FvfEnmkQgpc5gmWdoGW1RHiWeScv98JSNwBLLmXBVFQk7Mf42KQ5o"
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
