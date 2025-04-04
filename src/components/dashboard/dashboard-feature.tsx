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
    "NphSNT5DknXiNKy8E3x2FbeHTL1vDHC3wiuXbkn8ds8GTtxrAV1K9D9AcxbQrkZfKjoCiTR2d8VaXG5fjEKsANc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t2QkCRyHAVTbmxE4E2HLKRvbMWmDkhJxvMoHwdpuJ7oKRpWveDDj8adTKStqqCosZhxNiKYvHTbfWTV9xWHn63c",
  "key1": "48y4Rn2QZrNM5zjNYXcBwRC652suATssaxAAHd56serb9NNqt6WRmidAPmtL17hZkQKrta7vkGVtXF37TbtDG6vC",
  "key2": "oxzDc1qy9Q2uMe4qtwnfEzxB3FuYejN2Wy3CrkHk7VVior4wFNZZF9CBHRc3XvdC2rb9si24aXL9hyRa8WZLyXB",
  "key3": "5dS37qdd24j1K8F9Df7RowYQGXBo2y29XVsKDwCZQwtyQZzkQdfozcc2g9XT1WCsY3TnUCqLhqzQ4kzHgF5iYwCb",
  "key4": "5gg4ZqXYDzXndaAavjHH8oNS2X58JM9uBSWAx5djTxMa5JR4DPg963LXSG4Rer12wC1xM23dV5fi2xUwkhMhEG8R",
  "key5": "4n439MYxvJXZ6oPoje1qpssGL5dk969MbkGtTTsZ7QpeHNqbbEemebHBmxucTZwPe15Uh2g282C3rkV2vX86aLgX",
  "key6": "f6CYprA7avR1GEM53ZQGmawrX3wJmXPRNuPpMnt85yS1SJuayUyoGCMPtGkXN5uewBkrLsushEHNM2bC2Fn1rkq",
  "key7": "3TC1NagAFrZCPmaYUrNFqg5NCvCVrPraqkAjN9NA2o1voemgxZvozxnv4JjGvzf2nkp9g8fS6SfqUzZfVaFuaqpe",
  "key8": "4jUcYTfDe5W6jU1dntYtf21KM4e71Mim9UbDya4Lh38cuMjZdKU3iR2FbUUdZ2qTpb1TGFL1ckGgt9rEjcaqXH7u",
  "key9": "5sfsBaZYUfnGDXDhYKFDgJPVLiamXKZ68M2fyeUf6DQTqGEH4FS8Yx6pvhpSUqG7ZtgYCPkETdZGUhn6zfmZdGk3",
  "key10": "Uy6uU9tpu4pinWHqwg7TVsmAMBzbwW9FwtnrHogDgDGD7U4r6g1Vf2HSpZCxq9vpfJv6nZoL1a1Mp7pQZYhp8up",
  "key11": "562vjL5UgiC8reDhZBvPJQvRHBb2arjwE2Arfta2igZhD8kgk3gvng463hJoqrpAiY7vUtd4ENJmioNZ1DES6pSv",
  "key12": "2KqZqWhaG7PhcPYyrkxuduPtXLZHmXrfCM8UpT9EavKH92TM2am18xhDaSLewC4zP1jWvzQNxbQdDxvkXpCewTL9",
  "key13": "3NFANSkVe4cwQm62WAym7QM6V2PnoAAvViqgq3Ro5DWjgscmseX7CR1TZyWNj7xB4oVXtrPUzJvKb1fz1i9A9wGk",
  "key14": "4jNspyxYc1BfMABySTZDYGwgoq9W4DVvXJD4e1n2sez1ScEUGE1VUTzkDDxguh6jFFkjqiAxeWv7mW8NCHu32kwL",
  "key15": "2EYvW9JGRmEUfDriFv5VJKcvGB2sSDk8PoFM1C7sN797GU5gCFNWjnZM2kt6X21FjQxRknKrTnizRohMDeNxx5gj",
  "key16": "23CD6p1gXmoYC1TpEVWfhgveXx9RFLcjvnSm62ZzqoMCMc6fq2S6Hik7xT62kWewSkqX861geTdAPaknwYMUuHQm",
  "key17": "67L2NigtYKRsTaFnK5DrLhrgRhZPh8Wctagc8QfaLdZNaJ6LyL1THRpiieAU7nbi1SEg6LZhvAc6mvuHNs1C1G6i",
  "key18": "vJjWD43AFq6HTuhy9nKzLWpWMAMCcftqiUznbMGMtwCfCoy2iHVxVVWfTQ5oXa4H9ERTB8Yyoo8REHikmXmLAhL",
  "key19": "5zYsKYK56YYmd5UrYyntoEz5SAbjA3XjcqCjiixPcg8Kzpqd6vH71Aktym66gYhcMojEmoLqUtmJ4WKBmXqy7DrW",
  "key20": "3hfiujgbFhNAnx5MKCYAMDNiJtZG5voxbhxrQiDPXen5AGAw7HpiWodehBdGTsMWVk47gdZ68oU5LBuXAaprBeTc",
  "key21": "Xos7ZitVkExrExWNjrUL2sQTDgXhFRXQVEKwb9hiBry7G3ywFpUsAB2Dmf3f6zrBy2vCXVgX4TTrcxEYhJxkqpa",
  "key22": "3XBpqKzKbHAZ6SvQUAYyFTGhSgXXz4BKtY2VupGBMsX3oBmzYffpJVHpsf8nbfnbfHG35aZVJPLpBeC3zybnjXTZ",
  "key23": "49EKUsQi3tVRSA5kcxJSR5ZYYzyY9Wpt7Xxok2Asrp4SbFzvG51soSHnUnGUZM6Bw7f2QXQ9cSGBsK8Qi6B5oJSh",
  "key24": "4jU1R7mq5gS46VWeoa2hXXwd94hHQv9EeHJvpiQcY4k9DNR3wgcuNhj2vpYGWJaq858qnY4CeXcTVG5g1Vy9k7ut",
  "key25": "2nhmnt93X1vDpQRDygbC8gVpGnH6VJ96kUHc9gSQKWVzitqoDkGpjgnxGJp8ZL3TbEca7hS77Y5CUPs6Wm8CJMmt",
  "key26": "517FYehzhbZpz6oS62xjEBqbpYsMvBPaoAN38r8KpSVxekafZeC4x5sHsxz8bZzrVYL7fFvRUxoGqhZ46DZ89Bv1",
  "key27": "2ADkr7JbsdgAXeTuBiiUjmhKvWa9qrY3HUBudkiUYS9j5UzbvnJMTHccDdVjk75Lx4qHwCZ8XwUF1wZ8sAMQrFtZ",
  "key28": "3b2DBckH1j8vmGxojq3wBAJiUS3CexoFczHyj7EYCb8TrBDKSUsAKbvigYFh1Ghhkpi3A6Vag4znZVphi5RmGaCn",
  "key29": "nBYSHuYLHMzUJDicRTtqLx25G3TQ1bKDyrAfcNRWvZi4r1JJie1zhHxfKYgN1eJZQd52tcnEtWvv57di3bwhf4E",
  "key30": "4be7npFXMTbHpGp3DZH8rxh3tyFTgrmrUSjicQsP4JRyH4EB8grq7kL56v3tTuoDpLPTrXAYU9G9WhfD4mYJy2qD",
  "key31": "62sePureNKwezzEas3mrXebpgXn5bxtneeK1MJJq3qz1yj9mdCw71sBq9jyUpdoU9h6ENw7zsHcoRsGi88koEEpk",
  "key32": "4Goban7BHqGRga5C98ypFbKTSKQrnruhBL46BeCmT8uovG3zVpkidkyo2ov6fv7ECwjenyAptgfJs2rqs4LxfneC",
  "key33": "23E6qoNU9cAjKPucYbT2omjRReBER6CQ7mWDKvm1xJ9EbWqAffKavK1QNnwq78F4PhQ5wYg2ZBCHkQwciEpqDheL",
  "key34": "4kdmFCH6WHn3FFKHekB4ShiLznyDyPHvnuVs7rQdntPximhfyehJ5xgSMuftiyoHbLNmLuMvDg3LZnbkmBnEaa9K",
  "key35": "4x8XKzGi5GASGBWVNfg57sVyVw8dNDxzCWp6b6PhAFFSK5mAcj8aDSMM55GmXeSM6i9VBEi2HDAkvcum3TNdN53p",
  "key36": "2P3Ba35FJLsvAd37hZpgTZosSFb1TYuBJyyr4dKeXAvmqJd5jskbvNkXdyCnx2QGLXonhzZXs9bQjEJE4x41Z8Bg",
  "key37": "2tNP3RzatE4XfL59UXkptvoDBvW1UNTM1myzDAX24tkrgx39GNqkUJ3mppig1krCSGW56FQq1M4dr12wUyZoEPyU",
  "key38": "26ATSCYEDUD3tj7b2Hpz1SazUChfxzxVgETNUnMVCH2N8TvNLrCoCZokCV5Fy6d4YLgwQLeAJzHs9EDiXPPyCmta",
  "key39": "5Fuy34gAJuQwDeGDw8i5LXP1t8VenprN6XWZUVfkwZeTbgCeVDtMdHxCfk89ZnYPv32BRi7RzKfpcFFPTzdLfKhB",
  "key40": "65CYA65wyTRsPtGHqUrxea7Z6eH3y672tHPVCJMWJQ6DkHN2TpmNNUcdAKnM4tfRnqRAs6HCwmX2u5tp1fLpmSsD",
  "key41": "4z8gFeVY5UT5t3c7oPKqru6Z4qM4XCqzY8qjqjNEYypHrs5X9cVuyVMYe83TDQYXn3z9bibrfoWmqYravH8LBAzF",
  "key42": "4ybXX4YcinNwMHfoYZE8PGuBZFf7495dudQEZtzFVCGBRuamdiNcWUc6ErsvFo7F4i6cycT47eidCNoCdp6HwEqM",
  "key43": "3SvupK6ojjUrFzPYhKubqzvMszYGWBjYYM2pepBVV12hVvtVJn1rL3QY8y7Lic6VwN8UkLTwLjRQFoN3Z6k2T2r2"
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
