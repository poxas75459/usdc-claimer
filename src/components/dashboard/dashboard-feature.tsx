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
    "36ADez2rXtstu6Mx1siaFgdz3ahGNa5FkMdHd6tuidgKWcRgpHx1aJf5iawDqxHmsNje9XQkb4aY38oAPfP3Dwze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLjxp2KLQHsxHq5yxBtxtmjX1EcZq1TgmQozLx5hC8ziKYiqkeyBfvRCNgBiM9LW85s2bkX6HWNdinrMD8TQpWD",
  "key1": "L1ZNwzkhrnyp31HgbbfEJZsv5CcpqU2o8fWGZXMJSWEhnhH1mXxHmU7wUzu8JiFSj7xxpDJ1pBoPQDo4Ak65xNQ",
  "key2": "4Sa3konWArqp8FRWVuqhjmuzBNfzZQ3iXxr9x1g7687ZnBVkWvGW65dpmixrfRQPkx1CHHq2iabeSn6DgC65X6Km",
  "key3": "2g1hmMP6U13Z3tiau9pFxnfR3M6LDwr3My25DcVy1a8npCazwKEAu2XbyPYYmxGBMMxnUXYtgocQYFUYMEX8D7Za",
  "key4": "4JZixD6bZHr5M5wSPTkawgvoJUpvpwMYnsFxYS3nhXpkSxc4QoQhtTi4zJ7RHf4M7L5qNWWiLiCWphpg5hcwexoR",
  "key5": "kZeRjwoUdG5YkE25XrFcSVjYexW8dbT6JMZF4mhfdpS8TbuoUHgS6eAEWRrA6ZDwdHLegnatRV2oNuvLCZF7yqR",
  "key6": "2HhMRe1QRKoGK4SkugJNiG2LnuYLphWRhMPhZJ5veMD3p26Bp9joziTgmxnpDanHdCqqU13LiHSSg3L1J7wJAuNt",
  "key7": "zqGPnfPx5LN9LbHc8zP3AUkv6AzGjZNmTJgZnBG4xeYNh7bFDTuNH4G9U9bvbbNzMKenuhwWzYyeNYdULCRgZCJ",
  "key8": "34mTujWLzh5Z4VJZRmY6v24G3U3btkkdreuvQeRGjPZVgVtSghLUW5EvtZDwXe9dscc8jH7C5RLnCVnH1QWYxTn7",
  "key9": "5UVbx6NAAqv1jVbpvLY3NcJc3ziUxP8MRBTgLqyNd7pZaFMDGaxyVrSWKSeTre5dUhah7iDtShwDxXhhzDiukNs1",
  "key10": "647rBAYJLj6j7Pg1yctsrSt3kxGGC2zb3UKHZYrT7Xk8jX6MMrLDGpeLh3VtXTscGnFGnGiwiprRf4dMbNMVKyjo",
  "key11": "5bDgEWQfkPAxkC7xHFnRQbreyoJigJiFXxjHfGJ3MEXHBPsK5qgYEVqANeo6VNYhXRktVG6RiJpJd4qWnVyrewH3",
  "key12": "5bKWcL1r6RYWBg1PWbM6q79s6viAGiU8H8mteAqHivkEgtCkX5jsinu2dTCcQ8Pz6vTmgWSjgBDnhViZ1YTVWwhG",
  "key13": "5edyBrCRpi23RVvKxNetTmi33EMjU9bfXm2X6TZgnPV1y9sfVuuh1f8opsy5rYv7G5RDpcsmLVfWpXP3WzKYit9r",
  "key14": "56mhWvpcyMqydkdkUEpNbqFhBxt9wG2QxnNDHDm9dCWxYQQKMxYpLhrD4zwhxxch2vrx69zH2NiZyEYJ8cNikLUa",
  "key15": "2LzZC2v7EeETFJf5uVZXDyNv9SWvHjDBPQx5zorEUjWFj1WTc7tjgm9Du2Y3iDTXKn24a1mv7bLBg2i6Fz75iWD3",
  "key16": "4P4MG9kYNjdtSzjjNPiAinKnivGT8Td9X2VB3BcfAHrRVqQ1gzadiK1qqMH67xN2HUzMRiuiHcBHEhkKAUjQLN3E",
  "key17": "4UFY3fhGnLyUhVqZEsB9H1Ebnh8d2TqXkNHL2isX6CFYpdCPENEpdtS58WNdLT3ww7LmwGR8Spxbv9mkoerbEyiu",
  "key18": "579zpKC7rRwfirQU47de7A5szMHHQn7VeDykzrbPfMwp17nS5pMEYob3G8T5jjRZnM9PwZUbcdtbv4Fqh7yF14wd",
  "key19": "4xM7AbRTHfjTFrgWgDcg5HAXebG946Uv1PVbqj7H3KdvLzk9U9CHmV3znA9fpJKp1kQc3P47jdH7KjAbqsJGYxcK",
  "key20": "5W68BsoGKrEUEv4rdoRdPPtcmb8iVFmY5toPiHkkHmRsXY4BFwTxQ38Era7sgQePsVvcHBpLLyatNJ3xpmtzzu29",
  "key21": "FgxG5ueRzZGgtY2CowNWMc4zt7U49AEE4hs43FU5XrN8LcYeNJ5JbSDtLbapZMjZhibFAJ7z13rAKGvavue9T3C",
  "key22": "22TeeAeDtFCYG3Co6XEzEuPTKHSCThgmCoPpopkZdZKEoHtdD5LzB5XhDkgrrNboGVcEkMfzBT8rbYwgra1smCeF",
  "key23": "4mM8o6zfyX1Uf1jkSprL2AMSAAZtD2KMLyzzuqY3HBGbyvbfW7drDYQg74Wp1sQ87FLqfD9ouErpeSECy5ytJWkW",
  "key24": "WMwR82Ae8o2ZdWosixzJhUSsmyrxvBAha4EQSvBqxUwkUBxyam6sZWcGk24E4YKZdg3amvNGAibyAdToQuPn3TW",
  "key25": "4TRnVUCkd4taUMTPpHo6Tg6j8EQeFyzitWTLjHU5t1aUczyJUktzSizW8kLYxTwwuAkhsMtDL76KYCx94PFRqV1V",
  "key26": "4UeGqdbbJTYgSGLNDHcuCiTV9mbDGyAqJ4VgHvtMESkkCF5g7XDbUcfbq9uZ8nEHxnDtQqDcy2ZZ9CuTBejFzXju",
  "key27": "VsGugRgs4c9LNJ8a38TiK7qtGzvMZngXpLXF8X3ijJXd8RVkdvdvNhcThYypDiPv7NHL3FtFiSVzmKxCm5hziSL",
  "key28": "5JEww2rsRCsjXp64vDofv8KUh1VKStKkc3oRgwv5ngA6NLZjiNpxxuDSEn744KSMzELofufs3acrTYC19fMKJ1As",
  "key29": "5M2263Hjnai8CxMFowykm927SyVeLmw9wVX8M7vegZL64vufRvbrN2WcmETP3x7pbAghP6uEv318rt83Cx6QNvi8",
  "key30": "5GxhErgrv6JXzZSJ9kteah5WkJNxyMcd42tY67TNnAdWuXsgefRCE1wtUGxx2cr1QdGcKJrp5grcVNvtYvQdoHuQ",
  "key31": "4PN1MTkRXJZA4ZomzoMtrV2CjTEkBcbbQGzjCeCoLpTepm2FVh4NVqFA5nTqfDpsPBya5E8z8JhRvn2f24h355Gk",
  "key32": "2iQx3vcc8andi5r7F76XTLwVgtw6pNzjB7o5kdc1LrjxYXrYi1x3L4eiR62YLa1taQY3U4ThbN9XfjoH7DB86mY3",
  "key33": "4wde6EFJK71TECpsnABkVbx7oJZSP6BmLquB6w1BiVrfRST4XvG7Ng3AeWUpLZmkmrkJ9xBFTUYBRNwAHEhHjFgd",
  "key34": "4KaQBaGRGtyEpSVf5jWwGfTedEWTMse6GuZaVJ9aP6Ermq6aWnZuKC8T5PR7WRsYk9rdZwYf9mNDG43ffhhsz6Fb",
  "key35": "2mKg2iiLn7AYWwoEemq1u7k7vTNG5H9Ge3FEuHKF2zpUwt2vSm34WUvo7Z3MvnjQpcbw55KC3KsKXgbEfWmd24z4",
  "key36": "58Pi96JoJYn8CT54DMDBn3uhenQBqaGh3ws2XafKkUj4DxRjgTeGv79q44BADWdZrs8g4e6QJoDJJgb2ZpFfn7p7",
  "key37": "3PMjgAFAWRhiDFA2khsH1gVpSJz4kKtKGEg7q9rkuAVPu7vkK8A9UqCFiXSpt9BqMy7NjYFpqjWwH3QarLjX2JQJ",
  "key38": "ipRt3vD8iqDaKS1vGZeqXyWhmDtZQE2Z25LPMobKcJEddk4YAPGdnBF5nDmi1pGYMA5KrSsDkere1gPvJ6kPgLc"
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
