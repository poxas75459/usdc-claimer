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
    "35iimsu1utFYYULMVa24a6FnX3NeXoXt5Niqpf1b2PqRCt2kPYpdu4o3zGW69z4Q6Tr4U4ariDYPgUm8cvJkvJ4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nB4DLoqyagoWXTdpJXHbXwjKmG3LDntFYSag5RBCVdX1nCBPhyETZALMmLZrkRuDQbve2swcGb85C1xYh4Rboz",
  "key1": "5VxTa4ZkN5TSYwQHzbHbcUSVFvg3JvB1aQQxvzFCPW1xJXrAVzJQRz8gtC5PmczrkQWrkzkoqR437Wx5rF8i2tgx",
  "key2": "5dAQLMYiTsfgbC9etRBkGjPQqRaHYsVUcTHEVtAxTt8MMLy2MuDGtesdfqWVe4yGudw6FtaULTyRgFZVTVgTsBSN",
  "key3": "45xRVSXkNB3nZoLG4biVmzaJWk6VSPnoi7FU39E1xHTYb1VEZ4hh8XRxerbDcZHRnkydB9nFEmKwbnZSgryr23wV",
  "key4": "8hynq7LM8Yz61FG9fhNqWBYuz1huVUCKJuWDaLsD47BJ7FiarR7P4m2Apg5hxhciTVY6w2yW8ci6c9xQT7zWxBq",
  "key5": "2rSU43Xzxya4Gz3dS4X8L932y7D4431jToLubZwr5dwGRz8s6g4e9GgKx1XS77Ka3C1tzC8PQCGdx3r59Kgv8ex2",
  "key6": "2EEBDmFD9bvtJnmADMBrcLWezY4Wm5YThDRgg6PqFazqkE7vhoY1rsp5WmVPsa1X1kjuiRbbFKbK47odY5UW46ee",
  "key7": "5qHaYSwFWYtWijMwh8FUhBtXS6AXEqTDvP3ehLVthkcLPVp3Fc3LKUYLYCXnSCbyhjHZckofzjwh5vKzKqBTbeND",
  "key8": "5wwSn46MrgpVPZMSSC1wd2qzNtnTedtzn5yiMcapLk1GLYU8wScpTqWYrAvoTvRNbdgoEyNsx84efBMozdgb2fgx",
  "key9": "5Zhs8kDZ6V7mwc1HvTfvUipThiW7M3S87fVhpLPwa7Ug4bP9NbUfFFuajXDRQuXYMYzdE4G84KzewQLvWbW2Gcz8",
  "key10": "3atXycxzH8wqiosyC5DjExEBh5FBKmzfaNiQ2VrYt3qyD5i8QMBTS4FnWEB8MzSy8VjCTZripNiKErhM5ZvbqXK3",
  "key11": "62bVVe6qdK5KWjyMX1i2XHg1AJecYgdyKZwibAdA5QXz2EoffEr1HfjrMQRBFzi7LHVLZ7ySKi7j8U8JPfqZPGj1",
  "key12": "5Pv9CCUroWcNThTXtxbhTHUPSX93Dy95jwe78dVvbbkgXUYrewDq2ERs7FcQgbDWdqGonZrJMTc1umQRnWv3xMTS",
  "key13": "3biRAtpzVGBHyHg6oHEBT92Y77Bpu1JXCaiLutQM9pG3oeMjuyPR1F6jjDjdo8NU9AVc6H1ZEGKU1xtQJf3mqDNr",
  "key14": "3ErYa5zMut5kHA4nCHeuNqT5JGEYbCN8xkcj2R3WKNUuRLXL1eCaZjjAL7p69VCiAk6kWXnpf9Uh7iSTERj4EDjz",
  "key15": "2UYHrWWbUHHjKdp74LK5uNAjXjZxjMj4V1UbFuPe95V3crMo5NxP6TWMyXS6VAw1oARG6AptTZNinfvDp9ERNfwf",
  "key16": "2eeEZv23kcQvaCToH4z2h62at6MM4xZgAUrLrzt5Ua13pbRvyDCMQx2GEGzobj5xgTuqz1Zb6dSxXXWVoDieG2ER",
  "key17": "31zRjqxHF5a9VWgvcYggmy5cqsG1y37m3TNeqcKxcqjmGJszVKtsMzqCtCb8ktmKc6ew9a8iMPVqk335uhZCkoDY",
  "key18": "2QZFKDayFGmnM4rHowrDDfW2oBXN8T4cuYE57PSgan3hFqhAXeAdMiMWSbjkni2h8vT2xpN4FQtXt3VpvJejtjW7",
  "key19": "3DS9QGRVwEJmuUsL1jBPhDqmyiUW49oHywoS5HoSg7RRLbkMxGpmRrQFG3Rjq21F4kQF2La31PihMJLdB28cZRky",
  "key20": "3zUSADq8xrhw2rZsqHtubu3XfZCTLMgGhksYawZoDApYFkzWHkakmT1SmRhS2XHw5uQgPf665vMhPNRsC33ok4KR",
  "key21": "27goy4XroUEND8wRJjpinMWQAZYWJa82VuA78CDKVAMkaHL2ZBtee5svZkXm43d1oUNYifBa8iH3ZUgQgAy2nqBa",
  "key22": "qQ16Z2UxX58cqX5ToXmCQ9xyYTcKb3JtzuU5FB5zNMFDq7L8cDfsjQovA3jiroRVoB19sFoBFBPvBvNdYnsXpFk",
  "key23": "5jsRFKWR9K2rnmPas3jpyLm8dhVoFsZ3QAUoTwj3ddnBZEY7y1phxAutsN68HXtGpjpRXvtCA9M8FSFRyqfTQtB7",
  "key24": "3dxXzpUBzzTUNW8gSFCaTkA1PTfppsBmYtYYpw7utcgi12yXt9NZW1RgZRtTqU3rtCKHAAFNmz8k9biA8Q3gGH5R",
  "key25": "5C1nUa6dX43qWccEEx3BhSJEnGrXM13Pq8HnK4QgqwaWSvdV7pDLPVFa9CVEKR4ZUfqV46Rt1vfpPrPD4hFrzXje",
  "key26": "3k6GNG3UqJu7DszVjWY2TbJH6XFynd5MUGvULAuUgoADj3JX8nXj4yzc75eG3dwAeVg7QujiMwN8fuhkqTNJJeSQ",
  "key27": "tT7ip8a8KWVDujU6oCmAQDNrAT7XBo6hK9rMraFBAS7HzDaAoA7kU9gkR6iVo42LtkBUV8xhDYCuizcYsSWCPQQ",
  "key28": "4kP1KbLL5PaUCkJ34tBSsTUM1mLtkQ55Xjp5rM5zYHAHNLkL681Wto3WKoNCp9qSP6Q6XavU8mNhdp6NwDXgm4Q3",
  "key29": "a3fdk16EesAw6sdJWProi6r4CUUkQbT45mwEd4JUk2HbyPUmMLgxUEaXkKvGie89JN1TzCLu4884cPFrSCLVLvj",
  "key30": "2HwSfdQDGoxjNCC5g5Wa4dFSXAMVm1oi9LnnpSdsWP2S9SSG1bYUuozrye54CXz9S4E2XjYcvcJ2mrJbC3pyz34T",
  "key31": "58FojRvRZu6mM5DA99pWWb5GWrLcCDDcnfZU63uCu55KqK1Xpa5pRsibmzCVYJZt7GRHoNzPahd1T2NrcLFPbDXE",
  "key32": "2DSgwsZCvpR4HdUvJsNy8g5jHYXHhZVLsin96QG8muRktY775oxw11CaNpSEkhide2gckKUjZHNwSEzUex7DnpfZ",
  "key33": "SifvY4swFSbqdPxzywi5WrhFZWCCtzCnFjH7uoMoSioBCatEBefyW6GwX39goW4uGHpUnUhbUvdgekyiACYYATc",
  "key34": "4GBxXj3QTb3V1Zkrr5RULHmX9cjCwMpNJyWyLyrt7fh6YGUcmmE7s3DDNTgHeDdZ1naPvWGtc8Dc3NCDxHqNAAZj",
  "key35": "Q3GQXE9Ee14koMBhbxkD3h25Uoynbj69tQ49RqWGZVhmvwkQ9jGVXFMBZze6VjSkd29KUF5b6SAVuUXdoPZToxz",
  "key36": "5dLz87gxaCoo5iA4rfZ3nsTbf11JVNepXu4fXkwQo3c1du8qHRDjy9cbirPHseQMkXYKsJpqGkVngseyngvWaomj",
  "key37": "2BD9RrgBCh92qfziSsQSJiu8kJJZ13nqxndwW9GQ6CppR4BGpZsdMotFJ5pUDY7KWn8u4h2njQceb7LhWbVN3GRT",
  "key38": "435B7gnPWpBM3DYf67iLg2rD6rhgpzwQYPWccwAThkRNqnHQhc6SjhyjpjZrFLGQq5c4mu2zdkeFMpHfnnYoJ8o4",
  "key39": "5zgeagXvHekR6ysCfeWPix7ZANpsBtPYayzF1iXRzq14bK8yPDBAX5842kZa2ePeAYASTfx9HDifddoJ5fNjyWKP",
  "key40": "5VBAhb51uE9WhnsU9t4HEEW9UcFE1XeHyaGPvbeGGNHUp1hGpkG5m7hP2bR88PSwBFTxaGBSEQBAN7jRdbczNLpE",
  "key41": "5vDW7qjUZfQZVwRoo3q6ixRFS7D5k2Qx5FCYWSCZ9ghPYQhcuaadAPG6wDqdUqtrkGYKJWRK9CH2X8Zo475tCgNj",
  "key42": "5g6q4m1XikVN7tozgqJBFxqdgpZ95QhR8aF8KzPX91LBcZL8SbcG9wz1yF15VcjoSfucCbMnBM82RDHQmVUMLQ1M",
  "key43": "4eT1eHD7endDxyyJDpnZPaaZtzqpLZ8QsvLsUUboughJqmFfpx7vxS1PscH22Yo8AnKLg5SmExfnCGhMzK2hg6iY",
  "key44": "33TJgbjq6Qxzf3YVKsCyL1tWjtWWgej7soTeb6x6DcZ9aWdBkt6U5XhMsoQd1isfhsGdLwcWWUXkjt7Fssj9XFDi",
  "key45": "aWgiy5uddRd1vL7t3neV6EPKjEcb4LNZzBGmqfxECuDXAjHXi7bS76QN4fpk18QMymSR2Q6ncDnK4u5NFfe9Xag",
  "key46": "21FzMd3xV7omMRxqjxAJqzXPcSqvQsQjtg55hXa8nT5ZMcxqn9kf1Emeg9cFeRR2WFWG9VXdG5k6BX6pr4hkycnS"
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
