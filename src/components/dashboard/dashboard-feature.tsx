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
    "33816EDZJrSN16xj67nutHApHrDeP7Qeti1934cqpa8xz7qvjmuZEb2WjVfJrZArd2P4yE8aj532W5ccrn4PDWjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NzfYhyqA8zLeQRwzbhuWw4d68HxfxkHsKTUzAC6zPpzyrsRDQuAEnHcP2Wi3o3QuvDNmTUrdQMw5qEZpAQqy7Qp",
  "key1": "5JFw28zfkon4cUMR9Ngt84SQGsRCXofRroDc1j6S5XFz4aWasTYJjLeqDyvJ9fzrHjCrfffp4TdUe8LDie4vdrWA",
  "key2": "2krtfaW4X4qCpNQ17GFjrKCn8VpvBHVnrrmwz2dumdTdevimoo6rjrn1QFPwEwzdLQHUfPScqDyFKPTBQZxSpbSE",
  "key3": "2v3NXvFcJiKGJKyVyyiMuQC1QYKNVTco15QvGEPu9aSfC5rY4jEZKgEM52dWH2fLFJSe7NHrF7iUTtLY5BejbSWp",
  "key4": "3hJmuerxEkaukroFNH52tY9xFVeTx3EDVYBtgqHumEdMZ98JZFM9R2Xmde5Z7ZSS2FYY2uKmgqrfbAtohZ1bjWsF",
  "key5": "485mbzJ1EpSWvbejwip844LCMwM6pLe9MSmorUe7sVN5REEL45yGT1BmD6GC5psEi1ztNASGNeLZ1ukLzEs3Saxx",
  "key6": "BmGrQLP5dmcSZSoNv2r8uRmNn1zrPwRP3DvewWWxcJLum5RdTbyCW8FYXgreEdeKi3yUNr1SW64P7QZoQdGL6JY",
  "key7": "21Cks6X3MzFkbUqWpkHdsiQYu9kBh2uQT6c6bcNd7c2EX8vL66LbFRZg6tSoomV9GGKNq5fDjXh3Pr7NcC3dMWit",
  "key8": "5EFayDZ8e5eHPjpLRPV7HjsTzAUt1AZafgfbw53aZDnpoyY7MMmpDiJir1p7p72oZG3PJavCpNDt4biLedoNaU7H",
  "key9": "dZjQ45L2qeGdiTEZ9Go2XDKQPsPMwrzdAmMDpsNXQTMo3vBPsZRZjXaY435NfHfxLVZydkJQ5jazBWiXF1wG45M",
  "key10": "HdUybPBNc9hANyPrMBjdFntDYr9ZGMYho2wfW32h14YhXj63SCtUNuqPtnf8bQdAeeELQiMm8AY1UPLL132ob4e",
  "key11": "4D3FRuwyLVXoFFfLyGSQEskMkzLu8do4isyuGkAxURBum3edsFx1PxubxabYTXgbguKAJ83gXBamhAtTTuDPQQX2",
  "key12": "rfDrhkNKKk2QSX1hz5ZpV2Rhc7QquRGpEYYkm4b38BXzWibx9Ur7QDnE2NGj9dAJtXQp3fd9VS6DJ6QTo1qTAt7",
  "key13": "27NMwzYZ9RxHfLt1XsydaA5HR3r6nbDC7Bgbtn7Lm8Qi6SX58wDBG4EkNuHdoAqiaUogyi48Ugmck6UP8ec9uKCx",
  "key14": "35kUfXM7Uw82jM1C9NzAcjLb94NJ2dEfpeTEUFoBp9bmWhf8tzw7Vn9oAjsbuVuxCJa8kxVVqqwUUAFaUEgQhqof",
  "key15": "3T51Cu7chKqpW4N3x8YDBseC1kmUJ1a5jgH82VP1ZrQB6jE8SgFJJxvLTd2HbQLCxEhrAL1MpfmJ6zK8kMAcbcAt",
  "key16": "43couqhAYRLDsgocBd5vaXBqdNDriLxUoHzNt5nEgpfnMLfwtSPM924A2VPgbgM1KcCNCuNjpeXK4T4U3ydKAK6Z",
  "key17": "47LT44sjz3FXG1vPEk2fvVvSXXTG268s9XDaHmurTsfe3AkwEmQLDf6CPE6dgaAU5fSMge1uWb2wkRNMYUtCUfVc",
  "key18": "4TuanRQHUwxcNgr5jZqE61uarRY2cMJbPf5x777ktcgYaksepKwTUoCtgrNCX6trpFTzFefjpegAFb2qMn3qUPnC",
  "key19": "3rzeHDQV1g5EPNytD2peAUYVW7HvQTVF3bBiDc87Ng7csYEyPWfKy7TiP7prek5LvHAAC6Xww1P2G5c3AVHCRt2C",
  "key20": "4kAEqY9Eww3uz6bFQJCz8Qjjxc1dzG6ftgg3ajdAsF92pAAjRDWeczACFvpTBnAHX8nbFnveP6orrj5fHLhoYXS9",
  "key21": "3ashA6QkkeHTW1ZD2DgFhZynyKmDKKsjBwNXabf6mQTk6u7xjdd1NQCx26ba9PQKuHk752dKMmmCj2YqRdziaJoD",
  "key22": "4pxhQdyMQT9511iuTVtPhPY8ym14gWJ3sDtCvFpX3gtLJ9DGravWMswbEH7LRP4uwvjexEbdhzn4kzuKo5BjqAMX",
  "key23": "65RfXL7dih5mgF2ehrTR9sAocsSKxjUz9sSij8gnw3DeAwfUussN9gBjQD1bfsStP3Xth4GwCMKLtXcA886vyh12",
  "key24": "4PAtfuF6anX1wVP6fpcbHvptfisTuQkyqbuFMJvH4MFMVFThVFeZomkkvhrYRr7TVEECZUeTQg9akQ27tEtw3Wt5",
  "key25": "5Beb2nfi94KrPNhJvi9nTSoY9143FAftqTDQ55DebKqmUE5Avt5QSb7Qza2wwhP7AsXNjk13WHLukCxGQTxMMXLR",
  "key26": "VuoxVpq5sf6ZdKvmqLapUASvQfiZqRdT1JnurJtAjUuSkvjueXoyW6p6TGYTAJdV4D8pTZB8Ex9nGYwmFYum3x1",
  "key27": "21wznakmG1xwmotHL5sF6fJBcf2TLKMU93WRFJhq8sZHic3yDDDsv6LYf5wrpvzPv4e7qPVr8jddF6EvbiWvCDmu",
  "key28": "2m4tmt6LXjSy44hJpbTC9M78QrZKtE3njTo2NL7QJMZBUiccnXjiVpXrbT1s1eiM1QFaDK3GwqWhD2r45cmuaAQY",
  "key29": "Q19YwUSCvmkNbkhPcd72gJRsbcB4SqhCreBJdJDTMW9meL6BXXHkuSmUF1ZLH52jZvwVPFcrwhVCG4Jf6GoNYjC",
  "key30": "5gbsBFjnUgPgqjihGKopLx5KQn47ufyy98A6vmcUoaUPAwr6v9ud9a48gRrTxyvAyrteTeGhahGvXyQn4D2U1xPf",
  "key31": "UaGZovvtUDWds5VKkfbUoR7KhS4Xeaih3Cvui1QjBovDnH1Rbvfce547W38yD9oBejCk7MxKRUGkSgVoQEH4bLL",
  "key32": "4ZxoKnNLBnpBKYfaLPXsejGBRfra1WYUqSaXfQMPKw6QYcPBEbPqCoLrXUR1tA1LoYD5od45nVYhTmbJ3YZkohkT"
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
