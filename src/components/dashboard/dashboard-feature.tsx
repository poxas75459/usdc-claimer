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
    "4pN7Dy6AE8DD7ZatB5PjsvDzRkxYmQNwpKRzUdA887CBZpc7WcE8o3ED1xwD7YhZkz7srcs4nKZ2AuLesjNQbSBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBPsaHHD4SsSQPpXUvupJ3sG3NopD8J189rjFqJ3e5hMYhVMaL5ujRAUPLMZ49xsmxrGySDdw5DTTzfHtKtqCJk",
  "key1": "3VzsmUKTZmnjFkj8a9pKT81C3vdo3PjCWzLHo1P5k6pFHemRjP4UDoAxNhihUfsu9TgyTcADTg5deCPGwcQCyqWY",
  "key2": "58Cx6ocXYRpH6ccPbKrahhxV2yKQ6f1WjKEFrvtpEH3g8Aqdz2NPiftLopjZKnyC4ZBvvBV76DbRB6K5DxqDq2Ez",
  "key3": "3LuLJbDjgb439Qt5LaqWRxB2LukDwbByhaSh8yLzYDFqynmGAko2h4gkB1dcUFnApKPmtuXfcDVpnJArZNGBbGRD",
  "key4": "31a1SDHyY2n9E9xYTjJa8A5bfkQG3XmHanVP1KTyatWhXaWXS3YhAzSimEyG92inebiR1t69ZmUWfUeqKznCqoGV",
  "key5": "5FoYB36dQGv9vTx21BPYUZAnuGvcVNDSAjdPg4jwcpwiH8pcSh8R7ViHXCz1qwy8K2xaTbr4HYM4VRaPJSi6c6Az",
  "key6": "vsYLJydUYVeeDmUhg6mXqwHnkWomeaWcaXZZuiqD6P7fKxC5gDmDJbS51rSDNEM2VcNzvToDh8VD3XJ4DMHZvrX",
  "key7": "Tdbhvba96mWYyHKGXoEC3xQqdzUB7Rz6sMmg23uKQrhvgqSUtkwXNXpBLfKdRcSEiTTU9T8Po3efmd9ACuKzHHp",
  "key8": "3CpKgxxrJP1yTZC15wkwE98UKiwtijHWDSbngmeghcKs7vKP7ZxgSZkekfCqfQ3yg46esekHGBoekucTg1b7TVYZ",
  "key9": "5ximUkg1x66wUGUrQCrzCSd8KKifCnfuFTXBeoK2zaZwCeoXhw6QRjowsVYNhbkx9HcTfQtfFf1vuCrsaB2b53z8",
  "key10": "4BMixB8oF7qNUJLcTQWRfip1s9CSXeGYDivcqHHzuTvkdtGKBTuUWFuxe7bJ9XeJQbtrQMubYQ3HVSThbMyKMBNS",
  "key11": "4WqML3X5priBt2ByTu3fwg1UkS2j3kuYL7woTvqARpWKBcX3T3t6EbQVRpjeXtgUsEKhcUioGuvByQNPk8iwW5Yn",
  "key12": "5M3Co216BKx3MDLTFFicbefkM3ATgoCM9WWPXAwDY6kvebptxBNaTyuG7oTDL9GeYHuuaDveXWUCM9Y5foCbCz5D",
  "key13": "52YYjHzQpSMDtsXfoAEZU3r6AH9uobETXUZHNS7MJbwVu6tsmTVG6PjsnEJENQZWvuu9baYLcWfPB32tUYbv7AmW",
  "key14": "2qKog1Sz9nvP9HHZrQ3aw2XanHbdjSKfVAmHQTJ3i2MkczazhVad98bYFopomNnbjCbRQBEpsk9D33TJmtQUeRa5",
  "key15": "49WFBvW8p4fBqQWLmt4HXj13up1W7Tr4zg7FtPn7P77bcCkfzjuLoMDZfkfcss7JSo32SbUkVDptwZHbExxPyU6u",
  "key16": "4UPf8bz8o7zLEEXZrhsz1QZwuYWJynNg5qfdyRWrtdcKpZMhdCQPmhUiZoWz1R8TcxTofw18VF3mMuay5FJP3pYn",
  "key17": "5tKfTkCj69q1FaibgxVBWHy6HZXM3bPKhxKFQ9FTp4keWspNSKPUvY9NTAWVkJa5tuf1izxdHL9UP4kA88C9pZHC",
  "key18": "4pX9WuVUThyeamHF8RAZoN7oVLG1BM6sf6Yj9uNRghn3cJT4atdi69P6yWY1kQwsnGLwjx5xR6rEhWEcYN2D58Lu",
  "key19": "2XhbgjGHmyQQuHwgDbGSTtXLdhX5e1tZyLsjq3oEeuo6dbLMkR9ork47dL2hVzQPAwQ89ZURe1jNB4jd11Xcr35F",
  "key20": "2uscwpPhCkCYX4QB6aXwju65UP9aNz521SVYWTHpvFHbtsbMnHRGudND2ajnZrZk2zhQrxGbLYsTXDi63rBFFoZW",
  "key21": "3XXvmnRKvQ5MxPMgPoojVPoCVBBnsWp4tLZgc8wYa8HvxWiM5o1V3KkHqEc4QRp8dhWJZtzxui9NkNzYQstfqVGX",
  "key22": "2gfXvXDtRnHet6djFAkWhYPLRrUpwsTG1wnfF8Ce3E8YNB1DUEhVScCW1hTXZKYdCThXfvobE3z8zy5hbGt51Qzv",
  "key23": "5PcNWaRHSLbLbeCRiPVKJwACH9M8CbKsAwmoAsnLSvikmsWKVDZDSict44GHCtanYS48cfPTqVx2SBWnnzZ89jat",
  "key24": "3bckgHnQkwUPWGi1p8VSmqAAvtcXiPniJTmtA8TAdUCmRfS8uqYTeY3kSrumZzWACjVPTyAXY8GbaoT4MFwAwKnf",
  "key25": "S15zA68PFpya1SFEixKH5vgWiBkzsuzafeUyU8satcMpy9wT8BWWAoKMqLnE4ujanoTtnz9wTgJ6wFpFc3pPGBy",
  "key26": "4YAhp1Uqhad1BGkUMzHKzMkap58o4snhExrGhy8LLfyXWHzussEGBfBU7d8JtzyLZnKWqWauzBDV827UL31g5bC5",
  "key27": "3Znb25EhVnSjBHbzmdGfPVNt8e1gSPWeop9pujLZGMk4MDNipjuxnxNCquTmj2LAJQfB3XMN5fAbqZcEjWfEK3MG",
  "key28": "4Mkn386r3b3Py8smhxwvkrZKnguKDnTaUwy1YMDkF1hnKhtM39qQsBbCLbis7cPP9pmGqGMfeYrW4RGLUnuiPW5j",
  "key29": "4SZkgbhSikkXKZCNdn8qSAUg9uoNJ24kuf5DiNweHiK22iK4fLBrWnfAKdEftubiu7bGr3ZycGNuAfyq1oDwj4uB",
  "key30": "2E3oj8PKCSVk2RXjTWLoGoh8AvKot3jaC8SPz8FLybg1TtXFESLj3HvZDNjBoZPwLuVY9nG2K8eHWef2wxGj6xum",
  "key31": "62Kzarzfopu4jysqrKnJzFhYw5kQNgTrV3CYUfhCTLQDWjevgeBnPSt2CRKfAihMcAsKs8et15y2VMxnC1LUnPtc",
  "key32": "5kCj3PkGmv8T5C2bTr9YqdwR2zsBL9ThMMkceZ2cbzP7m81tYRiX66ue5jkRuoTJ2DtNSxXT9TPEcivS3zyVvqLx",
  "key33": "5p7bASnZ5m9aFsNyHNXNmStxdD7CTqYSYXo2Gij6wy5XubM6PybGewcv8QWvE1sLx6ssUEr3vDHtAr5cMb28heZv"
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
