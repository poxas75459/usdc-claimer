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
    "ErzrvfcEwy1Nc7HjANgajmdy6vct6GfJecA7Ekva2KJXJXJvRBh7nsraET5QyZkxUr4Arm3hbd3M7tYsNT1rMZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqjRbbwyqiqTW3r2CbRE78hjKsBtXESuzT2xLC8BQk6Y8bhVD2LXvsw7iUi2vivcAfER8yGhxE6qBkZ6ghpsfHV",
  "key1": "21Q2W6RwitsFqpwDkgJzhAPqFPyjsKLKr6zPkAh1a1TWwdXCa5Ud7gAP5eQJmjBYREtxcu84zFZeNqVx45ndt66r",
  "key2": "4stGbNdeESzwWgRpGFawwuRqyBfDm5gvptRTpe25quHnLiobwqhZF5jobEPxY6wjvNftksyLJSujXn3kRRNgyCFV",
  "key3": "527uBx7esp6pvMpesKzHr9H3qxMVh6sguPC7N5qoFyeUjxrijyapeahw2VVx9vDRSQfXq3JpzXV2QFPVmM2biK2e",
  "key4": "4dkMrCj9Z138hmiNSVdQoG5WXojZzMvcXymKbi7eSRAScUtcYxjp6aqaNDR29Dmzp4TDkb8MpeX3mgEHiusfgR3G",
  "key5": "4m5uhhucKgbkJuiqpfhe9e25KLyz7gh3MTLZMeMj9LfAPWCsHRCYLfrkZquMShKtM67VzhrMWN9dHLXZC3FRZoLn",
  "key6": "4h9XDRQEhUMicxCmSbFkszvzekEa6uFpvFsxggvYvvaWsTguyihFfaKz1pNC2di3Qfzm2Hh4zSwsHMhWPKxDdWCH",
  "key7": "46VJG4AzgaFjR4L6xf8UpiErQbcjPfa3gLdGu7ScVH9vp8ZDNC3pZo5UmDZD2yte1BnbQAn3twk8AKFihGBiEGaa",
  "key8": "KFzLfiCnqtUwHCPGG25bNpSLbanRjrheoRTYZCfoErSaWNERHC5nWwd8K6wjBHAdju3yze9CNvBsvdWfkZiVgUo",
  "key9": "4yogdbtdayojqr4yjjxZRiQ37oE4qceCGT3R9HQtsi9nweemSGYbjk7QknqVZvHZ6TwM43ZBYuHK9TxVin964FNg",
  "key10": "5RpUSM62b4j3SWYH9XJ9hYL9sczgaNfkzCUnPpbXz1xxorq2aKTpd5eU78jwj6eUKV2tmPizteVsEBUMKoQBaXr8",
  "key11": "2x2USMd8kkH6Ww6f76UbMmNtBvBrrng8XWWV43j2na6iNxciQxdWy7gYZ5WtGAjYovwGMupwPaTHhXitHjB6yJ6B",
  "key12": "4scohMV8M5J7NVcbM9r6q5kTHumG7wA9dt5yQf3kD5iKokN7oHaMwzDwPyxtYvPT1YCNV9v4rLWBeS4788SowCWr",
  "key13": "479UZxLsFSmvM8v4xUHeP2XJgCzurbtRyx4wKZFkjPhxXfyHLbfLhxf81NCK1GoUUbtg3dtLCpNgY7PGpKkYnCki",
  "key14": "5bsMLGz55Mrz4fj1bgyk5sJx7LuASFztQNYRC39YAbE97i3B9NLdqYpjx1EZtJRS4XuLpHyjowSktEthhAETWwNp",
  "key15": "4Qtq1wmFLG9bsnT5m551FxWr5WN8E2HmGrP4SkYpGz8qH4SYFig8UZPCXd598wJ7j5J1E8Jmf4T8MUYBSfvJNmM4",
  "key16": "49Gvz32UwUBZTpJvdiQ8yLBL2o5AZLiu15TLCPsytZVnRDhet1GJkSCCGMpspYtd4HtFLDB65MnY9TG629txPDtF",
  "key17": "3fmnFjDwzHH7M8ha8eP5UK4MgKq2wJkmBX458T2ueybSTRCEVP9cKmp8F4zG4XoYUMJ74ttkTdfzKZFWi1VmD6Je",
  "key18": "4uoQbFwNx1yanZqLLPCoLgAyiXDHSbjYEVS58tyybmYcdp9JpDkKBEunxmoX672LB9Gq5FabzL1uuDF6vs5fo3Q8",
  "key19": "4vv6CVJkUt5k8CKVpB4A2SZCKS6EEEgWy9dP9a3Q839ruuhqFj8VAenKbhi5t1xWfv4pwCmGeynraVGFa6VrhGCD",
  "key20": "3vEysBtw4p93gV2fuZgT42w7ie8ENL9m1UYvgTPJoGeaf29Ja6PhuCFqEoK8Ag7g5xJRXHrJGN6xCxEFbEmBsczB",
  "key21": "5tCZAnRzAKmfnqQZZGk2NSdFQHm9X9ubWMjNMGJe8weMUTHmw9xKBXAArHZHtHRAUk8pXn4efq2szNzPrZQi4XuN",
  "key22": "64KHN2VUscZ1QNATdq6sZTt9a83jzVShXWCCq7ixGDyapLzDQJNMSdU8aiH9JSynEusoNWrHCGy8rWmorTPW4AEe",
  "key23": "63cqT5TRaQQuUXLKqSCufGWbDFMuFwpwHkkKrXnrguGy1Rs3P5DiT8fd9SEWDAtyRnKVmWTxKedhvaUYX37sq9rd",
  "key24": "2wB35WmHzobAVCV9CLmzR2awXpoFd6GTkD4fGMVvUHNLgCNKsgmsRgr8CW2UmCbET2WBnBgv9dMNQjzzTHPMj3bq",
  "key25": "3hNJreqxYWXYrpYRZ2YjNCTP958K9on4EoS7wMThAuUZAbbGAhXibsvJgLwjHvTSYVZaXVgiWvu1T2LBU9PcZAL",
  "key26": "2XB39ExW7yS63frCZA1bPLLsk3M3c6fJTK3As4w6ojaBaBsyLD5TwdEUbCXWqPQKdpNnE8yE1QtQLQQZGppu9Dr7",
  "key27": "5dPXowqJ3EKJN8rMDStTYM2J98CfwhteMkQv6cewojtgxKK5CYrW39ezrNkbAxavLGpB2RVgkKN8mjJuNubsXJwR",
  "key28": "4sNWqoUe2daFWXhPtPAJwi51dUabUbTK71GFqDhu8eyeFgnDm4YLnHWg96Fpau4Ve5JXbJwnmUwxFWzXiJka8iB8",
  "key29": "3wuWqaNxe9XX4TCfkghzeczxFy3cVZ64Mbvn3uHE1tyk244RpxAd2EsPkfLGoZceJinoGLf4DDxHym1FZu7UdRfM",
  "key30": "3PUvmRCotJpDS4aZvZFN7zhivhHPcHkKBQpk1fJ7toxZQYKohYr5YAVKPwCNg1pZVmNaa1Fbvks1n3LrZUw5CRrD",
  "key31": "wjaG5pj6vemKFbSeEuYsNbZyMqGAewYfFbcotRHtE3mqcFHsqeWysMcWE44grChfkstgu9FsNtAYQqjz7SzsUM5",
  "key32": "3J6W3WWtxNqCkgPewxC73LSRWE73vmmkCvWLhVN5Da14B4dMf9MCagEaWgKQqz6MdWHyW5qwApgSjQkyFHp3thc6",
  "key33": "5b4LNNKmk6mmuPqHyeRRjw173rSvLyL4vucNM8mXbbRRC2RubrsRTpNvFdnn9TxCUv31Rm57TgMX5ihiD3H2XpKG",
  "key34": "2B6yzD3zDruC6ooFedmw4xNKLQU8BfSTM1ZoJCYvibqfEny8qx94e2ALnYDiPwtgXHoofuMKKec7ztfV96iYgy6j",
  "key35": "UL7Y8R8Sfj9GgcwTMLz5HUnZkcgi6wtSvgqj6KFknLBvxH7QTcqsirt2y8XAnjh3M4qrHtJvkHcme4eiqzjxfBY",
  "key36": "3QUzRR1uk9QibabxdhZSNwUPQLzbbfqyQzxW3L9fzoB1dyD68aQ7s5r7kR1WaWCUmGAqmV55jZY1Umnz6rJ5RzmY",
  "key37": "5oBCXtDVPoB4LMAtKSdb8X7WCsckpcXdkiSdWUaYJAy8bCYTfWqPxpgx3kmq9EqTkW914yKpZe4UXhc1Z19aR7kV",
  "key38": "XbcsXXQkXGGsvLeiZUDfmFdA1YrMMjgGgbqTNQpZcPYbCPE5oFheeW8ADcAhLvmTvxDTTT1Sq1ivME4ga88nibs",
  "key39": "2B39q9VHJ61eLaJwiosRiQPypyA4WAxKEzy2BnFxHYPxquKjgv56n2s1Z1UUh367WLjK9xfUJcxhfe7HLejCy8Qs",
  "key40": "3dCKYPoYq7Bj5J1RRgmkGonxgNjVSzAVGKwWP8nSui2gUWxGLKAkpxhYgWPhPuPSHiseAttnyUgA7ZYqjdsNvak6",
  "key41": "5ese7EB16FV8Sn5JJRV7dmqFjZimshhNFmeQsfxxw69KMeegk7KBGp7tsumLLVhc5t75SX6xRVV7WVe2b69Tdedz",
  "key42": "3QPxQ6F2tVFmSAsEmKjfr9yBsSNu2Ym5HiuAffYWuVRhWfBQArSxCeGcACKZk23AkH9kca6pZDXi51FPsyGpahre",
  "key43": "2UocPHd3nf8ptWyR5xw2pM7ZLA1ZgPQUY3dm9S76EPQuryuhf9pzS4hi21S5tLurgdd1k2XL7cDshhm6UHhJN11J",
  "key44": "5qEyqqbgk35ezp2Nr3b4tytXFLa7vD22aKM8SFpAro9HfdkAQAbFi933m7DSYhWMN8fHPComkjHqDkeT8MwsMxsE"
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
