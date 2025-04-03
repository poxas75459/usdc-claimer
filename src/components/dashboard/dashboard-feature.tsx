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
    "YLompxgTPHqpVupvCr8YrU53XLBcTf2SAJRxGtVGpko4G6kLfWxkGz4Ljc9GfUKTWU16M8R98uZqUDW9XVkFFvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBjvtRBseupP8MSbcwt4JEZHXaP8DprwMi8EiWgYZgh1oprNaHj26Fe4QaEn5VuVjkaB6pYf3sXAtAFDs61qSb3",
  "key1": "59GPdwKnh1HQXAxAsfFdnpUWZS682XNmMN5NiEKKxLhdivybDaUq4FqZCrZTeSQBHPTAVWhooxtJdiepEENtH2ds",
  "key2": "3i9Q2AA6zJvMYToUejAWbF3SSEmyMLXvyAqvEnMeeieEffVAUJ2EL938yV19gN5iF9vvuwsN232Z4MTLTxs45TwY",
  "key3": "4hmG6kXHs7QNRQ9ggMvTJvQ67HCudqgjDWkr2rVXZgTAhoYiXxohYwYtYZFp8ARNmnj96XnE2UQMDWRCdbgxrKCG",
  "key4": "4BsSXQkWfeVxZKjWurZ85QnxxcotumNXVpXhxhUoC96XJc6eNf8Uw2dCYCi3RUhDaLY7uYUhmKiDSB2uCJ3nvzbY",
  "key5": "4okHJxnmRon7EVw1vGHrkAmxmLMwGUWHg43JmeUNVvVWv2xtTinodXwQq6w4gdJm6vVTqpFie5bQCp28y5ofX53Y",
  "key6": "3W4rydhosc91Px7WhYUCW9TT1Prh6egSwVg4M16yaD759R4XeqWsfrAxbaYbBBtw1dbzgeJWjPtXwFLMDzAyk3zY",
  "key7": "2GTejVBv6zVufbZ34atK9XyRAUQBNbjCZXG77s8KYNDK4Prn4zYppuLw8LE86kRGDtND9eyZFGMTagDZnEmoutbk",
  "key8": "4Ke3QEwYMBrbWrTaxQFmBiyTsifnYpDLRujJgkozC2RTEgoypzU7hAd8V38nNDyfM1KKWm84UKH2kRTRMpwk4PKx",
  "key9": "2dBvcBm19VbBDxGAZ2onD2SRPsTmYz7Bd3j74HMHj13BdxRHgwqWsf7UQbXPEfYvJt8xqmaLEERr2KEiohcMVDZR",
  "key10": "4ZowhthJR4qcaJ1SeD98b9tvfQbg75by2qhMQ7NZpZe8cGTyqVe1y8WL4iNpuALENidTU6B1qM2fyfCXr58U5Cmn",
  "key11": "4CKxiH4e2AfhxvmmKMu5FvEsr44HisHSJDHUTCKg94yGbMkh8zXVv1KEpHv8TcFfqtPopceKweSiTCBJ6iYKyofE",
  "key12": "6s3iDbhcB6UqTyiw8FMkfwpgfoJjbK1Q4CwbbgvCb2mVrSGWyXVVYM6wKFa2FdGu6M1vLnMh3uXQaP9vkSSRwcA",
  "key13": "4EE9xQgsQKC5Y3Wx9XEfaTU9VhbytvP7B1Rx3YgPEzWZ8C8XUg8shGGd8vSJkwPnEPGf3vRchKvZwvLwX2q3ki9R",
  "key14": "29sG4W9Ab9uzZB5K4wwajr6PnmmJRTrRfVD2wEHkdF3Gjax4r3T2y4rs2sNHJXxHDv1ZkUqkhQX73RhUBVi2WLhK",
  "key15": "2Tu6hJBG3JmDr6pwgfeWAXm617mtaPgAgGpLBs3SnZuqJmZ9Kighdg4LK4kUo7NwbdJ67TrG47rDYoBgQTUkLi5q",
  "key16": "2Ej5S5wifYVv22YxoJcj8Xav9mJStAvGQzpGmb2qsQG7WCmrHs3SwrNgS3SXxhz9VSBUQqUWXAxjYCUr9X5owsKh",
  "key17": "2ZtfXctmor3EUpQ1obMb4eFr7tB8tzZMTdooQbptBcpn1jacEcNBfyoeETiG5BfnZs5S7PxBdEXGHivzvaCu5ZF",
  "key18": "62amNUDt6iKAtEECdoQGNkLJZ8MHWB4sxRAmqFxat17dixFcPU4fp4gEH1wmMQ5DKpTdNiSfXVBtQEvPfrwzYhfM",
  "key19": "5sGza3orLJ4joXRxHTs46NMSxwZRB8VDU4QtxEDLZ1oCXGfj2sd3VngXTMdVdZ1fPpbLLv8xYks1pxkckdVw1JFs",
  "key20": "5WbkEgXuuVSPt9q2Zy2eeGB6zb4cnwNAHRyxZuWpMRLXqqpYMktvgwYHapMVBQVdycXargKisogPVErnNXru6xsC",
  "key21": "LpJUSYHEJ2CPmy1zknQvQ9UcTvC3QSukiTQQYyg4iU6JZv6NwapAN1AtFXkaGd1MkRNCdchgvW76idwCZuaA8ns",
  "key22": "VLMLariTyx2iGGNS6gpyU1JEFyVJYkDQGkvq1Uj3x2TXspEyhiyMhovfH7tSKo9SxJ36nE3BqvP16NRem8rAKhN",
  "key23": "24S9BNyvQ6xGvL3f951DbQZySS5XVKmFcF5WAbkTDw6j9XU4nkj7sfbmVfJ3oyLuu9dSQ8HNtwP4kWCVs5UeaQYA",
  "key24": "5uwzoCMEsk1ZAWUqJmEpuwK3bb5ZvpzCDSsk1iAke7CF5T8HP6kfe9tBR9feNQL3gUG4CqcxcNiWhoyT7u9mgV93",
  "key25": "5QNz2iyGNTobCun2LJLZE6ju3puYiUErmtcKznTFHHDQAwA1ATp4Xj3btr7kaJcKSATwxLKshZrJ27PF1KL5s3DH",
  "key26": "jZ2By41g9iSdVHc1kZdw7SAoGS2ziNEuQncqn9Bf3ocr4hwSBbeJ8uPJdqk8TnC7txBDHgrdVmcSeQbRP3Lwkr9",
  "key27": "5wYX3ePCZtrBzGPBSXWhgVQozUZ7zUubG7L8bPr6fdyTrw1pkkhJt6UQiTZ9G1ytWMGsYAo63YKVstks8qKHd8Hc",
  "key28": "43evDLrJstPnHD2p7BubC784Jje1Y8v1TK7jTHzKUvq5qPiY2DFiGTXCD3ETqDCpwEgMfW4LGMpxHiGkMr5DJUqF",
  "key29": "4kWE8wgNkJQiBL4CJage6uoiFM8naXzgKVg5xpVxECTT1NjTQx4exvcjSqY3oDn9uoanfWFBiARZugt92fRgD9Cd",
  "key30": "Wt67gW4oRQoCaWzi7ViS3Es4WfsKbzKex2Y4KpegRkx8YBtVSkjJeGxcdxhToG7tz3eMDwmyUuKADB4aTN2ZUq3",
  "key31": "5ouq3H55sk4WbjrgGMzb95HKj3FNYuShQmiJQUX8CmHjAkJZJWx4q53npWihVWZLf5ZjnT2zKzQgTMA2Bu6TmW4B",
  "key32": "24kaAVHoYTjWZWZXDQ4udRjWnE5Lq6295aG2x8gVmKPQpnkdKisyGQxaUstDZnnnDo4hVgNkKAvw6QB7y9FbVGaC",
  "key33": "wHu375tVLe6fqnAdKeaPZtxoby6NVd9TNDKy7F5i6dycNAB9EPC4yJRNbhV9DXUwL1NxYv5Zp1JSi2SLChdhcKb"
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
