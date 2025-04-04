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
    "4P1tbrSMcguT5K1usZR7r3cbECarFvx8t1i6NS5GbLGc5cSzwP8GyrZmFcuWe9oR4YUmfY4CsF7q7CcVx4t1eZRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54WXVJy7L15xpqQC9dRsBcfRsffFnnMbYUgrM5AQ5VqB3EBPsJP9b4m1Afa8j9AXNNcjpukLphB2TMRdr1S42VC6",
  "key1": "3spMmvcUnEczLmjMdiHSiMG7wMCnWeoHRyTmfW4ifgU98KXs5He76WaWRT212KsS3uBiRu4V3eYV3iJX7p4vGXne",
  "key2": "2JELPKDCC4VUjeBQ6BcM4wXMzV2exappnzAGWEguknmgrv8NB46VMHzomEQYA6NDHyW3hDX9GKYKbCGk5FwZfBVL",
  "key3": "3VeNRygr6QyveQ1aRN6iQrfcM4d8wvXCdyjsRby9mdpGmtZcDEv4zKsyLs7jJMcgqvoNq27rbwGGfEDf797Dx6AQ",
  "key4": "sq6eMpv7ogj4zrHyUYMLKFDqmNqdGnHuGLbVKEZzz9rwCSnkDAr5CQPmuXYxFsB4kRPyWGwrEDGDd8tTdyAcC4g",
  "key5": "3BGFQaGZ7Kpyd8RxbzoWXmBrMJBCf9yBKgMZMkPmXCKHYtkKbbPYLNxrdozh8EmxH295VbCZWgX9AEtAs6bbc3NF",
  "key6": "57StRWsNP1Fakk28kboeB2bWkK312KE3x2DskQ75WeKFBFUSa2MReHtbr6PnVRHKLJErJtvBWbTUQreLCEqfDJti",
  "key7": "JTmU7XgdFxV4SKk5nr7cBkvskTKmu2iGTBaXuhwVEVNmXunhYS97cN17Bfpsz1ftViMbS3Xm6n3vpaB3m68kFbm",
  "key8": "2ELhQqo4Phb3XLoHhrZCvzbVEMbEsfaR3v1dzeTDD572RdXZftpGRLZo9nsj5SR3cFM1gUPH2GzatBs3mu5b1VYy",
  "key9": "5QrPbNqaGZE3XvnBWu3kULnpTKkUSoFu2y5quiy8wqiRLx6UX2rZr8Dj2ikPsz7dZy75LbLBDrqJDPkF6rJ7QpSo",
  "key10": "4aW4HDkhXx3CiAoZK6f4kD1miqoQH45c2s5UuF5Ta469H3NMr73VnPBest8PjfkukRydfZjFkkD6wz5sCpZ8mK36",
  "key11": "2GXKinuHXJjJLrjQx54C2Sv7Ydc98MwYwEeEjY1A44zhTPhUy5UqYcgk2pvfvxpBgdpazVP1dtXuYhsG2oodVB34",
  "key12": "5XqWGnaWmfeEVCEDdjcKLmfY4v3L1T4Nmti4DTZfDua3Dk4sGRyGUwnTJjH2njngb3ZqpFrrGqsjfnBzf4o26q5T",
  "key13": "5wprSzE4Tg8VR7UKPs7F6YHN3QWWw4zTb1kPxCrCY7nX7n7KLkTJfq8Vz3FMhVJFFKnACSTBVwyYYb7wZiYMtPF2",
  "key14": "3cP2AkFtgni5df2x92i7gGHwxBaHez56kgxTnKTMFC3RbvUeM7QWj1eVKte4iKZGNAbQDEA1Fk6psEQUZ7dccdTk",
  "key15": "2XX59ArZ8g5PPLD9ZyS6PVd4fKtBkA7RaGE7ihGwkTTFGxgGxZGy9aHR2AT6xuAxFcQTQhne1jkRAeydbgT7FhZZ",
  "key16": "3b8ZNsKGMBxQy7JJCHetaVA3ywSFWwZUp3Pek86xztn692MgAVucbHbHVZahtVuhkU1VvX8P7UyqzaJefusm4pev",
  "key17": "5QGSQ4Pg9FRmmUBTEpPx64TuYvE7X4HwnBHZT1qCas63YBdf1wmL8NVQShe753RKACsuN4oMugUm4kkBpR2YSpkW",
  "key18": "2fWNaihhYWqXsY4rxpL33TkxX2ovbnnq7aKqYGENg12F5LSk7kp8kTyG8qoRqRGj3xrNefNJJ8Pf63VXwh2xR2Mk",
  "key19": "5pPABhjU3rJxr4zTHQ2JtGyzyTgobzyDAKiKczu2qAiytBJoH1zuyPqoWrunbpzt5tVR1tE67V3xnQtbFMkaxFC1",
  "key20": "gCtLsAwFKsPdKpsVWdN2sLbPNmMHkCLsSCtq6Pp2YypqUiUDmwdp4xMqAdYgrgpHBgtiS3onb4GR1FvhAZdZfqn",
  "key21": "2pKUD4bDgp7NvZasoxBYYTmDD5A7qQtrV388ywuZAqBjVj94cymdFPVhRqDVttHFeDx1Ub8sa3fXGzVTe2AvZvhz",
  "key22": "4ZsJdBqUuNLiTMUsLSuwHSVQscfNrBBbfqWY6HKda9fNZ2pKEcbNbR5NNEBaCD693E9C75sZAKSPF8VHV3eDGKRE",
  "key23": "4ZZxhHKJTogqKx1RjYHet2j7g3htMNKAHSVPG21qHY8yrLGTRsBdmHnTmq9QzQ8qmCnUFQKcvFsAX9cQNDFGsfBk",
  "key24": "2grPiiiXhMKECYTttSfMeLGp5PdZfzeMHsgDpmvR3ZiHBWEpQpYN3DTrfkGb4hVHY8a9wXMPwWXB7SL2qvz5mzds",
  "key25": "cHqgnKK543AHCmSBEcTKUwxRBGzVwBudDu25Buq2rmdAGUDrF9hv97HmUtcyvt5PVU2EPFtEdjW4Qv8piBFNp43",
  "key26": "EmZwUPkf8b2qv6xo1p3FX7gq9z7qqW8H1daccwh9ZHR1crt69KtKGnC7EjrwHhuUvY2CMSr8FdJf38miYrCbRqG",
  "key27": "ehUQ2Ek44y2kevNu9nvyk3BGHopJSz6b2T7HZxFRsXn3ypWtyxbseVda6kB1cHy89urj3UHFFs5H5amyYPUKCyy",
  "key28": "5GJejGcMQALTnt2ivKfjnwkrBAYcdZFSfLwHyfoo4VN1XwUHo2KMgsPQu7KZHLU26rAFYrmHWeuurcMka8EgeXfQ",
  "key29": "5c5zRnZg5SvESsxJgMvD5AgJA5DMJXGYUv4TEcd5TecntDdZetCWYzZ3a6co21TscCDVv7dZMoJutPG3RSf3AoWF",
  "key30": "3oU7EfHMvZMhhUAMtYVeHZSDWc7j6ZenZ3w3dQZQogmYdP91rTBYLGoodYfVpswtvpUAk189Nf9SseMuPH9MPVuD",
  "key31": "QUKpBR7Mvn6MAHUdUWbWTHWjVY42LiSCB3oxi4XV3reDerAP1xzkMRP2M89prUQyuJGTQJBBkRbankU9X7oHdt9",
  "key32": "Z6XYqiMuP2Fxzg32rHibPzqBWXPahAFCPWoWznxipmu66v7SsZ6JGEodmuXpp7J6sogabrxc2VSXg5dXCpYsv7H",
  "key33": "4wv1wbjovviRF4LA5Eppnr47wvFqHcpe6d5coAQQ5ji6FPggoJZAu4PZojCEuGmjwTVTTf2MtQDdZWQ1habE8edR",
  "key34": "4uF9UyF99t6fwhJo6RBnLEH8pmY6AUsjBBqN5i5eUpVeG7FwNca1E423aBNBN5F97oQM2kQxwhGWGq1t6xXLMECd",
  "key35": "9DYUPa3z5pAwdR8N1d8YSUops1yVG6p27qbstcDprzKiYdpvKid5Hsay58kTbmJXw2Fvvu3VPXncXRm5FTDMNMQ",
  "key36": "2hY8bQWDTB3WNSx6GAbyEHEYSoYy8wPQrJtmEQYmvFpeykJqSBhW7hfUJiimgaFdUneREmB6cx6MoFY1Np9bxGQ8",
  "key37": "2JLbrTX3XDLo3dvTYjZPE6eYGxLXeCQpxyLKF248zUnK8s2YqHdbEYQbtWdHurL8LRnbvAfvRZb7M2PbNPTLNbd3",
  "key38": "4SGfLCrzxoHig2LWTLCLpRx33PvynUcvHTARmhTRZ4vARpGZNYi6MnNTQtWNGedZsauxyBM2Dw17cc7T5eeapcB6",
  "key39": "5doPwdfHwj88Ri77eru5GE2cT5m15tu1GtEDrBv8Bjack7uEFMmBbaL16Fz5ckuC1HUtHtTfzXCAFbpDSvpcDPxK"
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
