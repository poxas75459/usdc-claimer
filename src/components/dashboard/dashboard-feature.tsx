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
    "4Csj1KqNjz6hSdN7wcsQKp3HaKtVuxfoWcoeV6KLL8SmSZmEeKWbKQ3v5U538CR695BZzqpMWWKTBiM8HuwRap8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYjPysBRb5oCvYVVd9n826X1EaKQ8zqrxrTDq6mYaZGCuUEcMeJUU6c8uGhqCUG6gMHovRJ3hnFvK4rYv97ZYLk",
  "key1": "4zExLUEjXnZ3qrHDKmnzZbgVoi2kC2wCwk8hRf1PveabDCvr33Zd6HPZWhzM8wTmLgYiGf83HFcxC8xF6WVPuhHt",
  "key2": "3bhaDLnkRkjdgdcxqQfKQp7eqgUEdtYam37HH8VmuiTvTQAhj98NPs2us8st2q9avHCeQLqtECMUBcX64D7d8iit",
  "key3": "2YZQukT4zCRoBR1obJegNw9mPbfgjd1tGwUHqA6M6BzgProYedYpPPxbXRDuSLsNwUMQViQxP24TsbuG6MFfp8sV",
  "key4": "KzgwJFiTWL5bGrpzHiRQsBstq5q6ZzXF1B9gAdNZwTjksxxwxo6gC1qohS9oYmuGb3NCKt2CSJFGDMq7Ag7CGWB",
  "key5": "4JVB5Kp5SJixLFybWaNSCQBEMMiUrpJLW1DVKbASAet2xhdFTarT4mptys2ncvQeens6XWjfTsSc2ZByKXgDcCYB",
  "key6": "4i3reB3ZrHHEmHd1fJz5Mf7hZXhPz5GvdS2W9vgMMZq2MKdBdke7bhmThkWnCMcep4d8wTFSWnxE9FMvFzbuHAkx",
  "key7": "3JRSGYCCvsGpPiCXt9Hm7VcGWaoXZscEwn7YSYtC8MuN2FUS5Dgnh1ssUV4KutQWKfGuzdHFB1bLYxQdff5uPyTU",
  "key8": "47Fg6WRLxnT5ACmWxuc2EGZHqyEagFEtKvE46tLxhmr1Tjh7JXypPcNHB2DWxdxb3vFqP3k1bbXikZ1ecuSxyjY4",
  "key9": "5yGFqk2mFYifRsFkbjiKC7NW1frWtKJsLWxFZVuX6M8eq6fMPzWABvrgFEmh4iNMk9sKtAVkbdcpMNxJH9aAncVP",
  "key10": "4URFYfMymFFMuJqxt4VEPMW6xbuxc6LvYyPZvgtBigQRonp5qL6Sb2iJTeFzdrkpDzXjS7HTH2wwxGztBymoRrZp",
  "key11": "2FRdHqqThWJypvtDbnhhTU3Rbb6ZtVyUyiFJUnQz291Ssj571gn8TVAYDqY433moahAUUfVB4QL4VNdhMUBKpCpZ",
  "key12": "3zAQ8Q6PBjM3tzQceD4t1Ge3wSBdx6ipMEsNmyHXeQs3kc9puKYVovLAT6qDofc6Ddj8T9VZQj5KVXqDCA56cdwJ",
  "key13": "rf34DEGkF98Nyz6BqxWvoBSrjkbCHedUHA1MuWQAEYKaqarTrnYfS11Fk7nqoyVPXGLMMgobMtMeVg2DubSzWxm",
  "key14": "5d3R22aqs9E5Bp6PUCz9is8BoiZ1a2JaaqYw7SyjQPNyGmGmy8PD3nfJh6mraRXJmifGqaE3nzajpRkAED1g2dRd",
  "key15": "3yqyT3Nbxgo6mJyh987LCsG8pcE9tY8nVykm9s4dgFJL3tSiFCMwDm7WXSu7v4se31Xo5rbhtsYPLHLAgNZpVbus",
  "key16": "2oUc3Z6oRxhPMyLYF57sy86EXAtxnVxVy9mRs7vwJVkjByWATAJcBwjXmwM8juLt9pKxDT1gHqmwpFK1e82mFzvm",
  "key17": "aMNux8obiRNCm4xBXh2LTnt8dwBtYSmgsGES2C7BsFEsCe4imqopHpkDLHQdyjoJgRnSaRZPkxvkW93gC1WvFjk",
  "key18": "S7Xo7AvXKXVifTQLFB7ppH9ets81ck5N3q6pfywEJUcXYWs3WwjsG4ENnDb7kka6bxYDqwfvESDNhmgvAhfXCnN",
  "key19": "3QcNWzjSf9mcQFobVhEC6auV8q2FpGi1VJQEcbTMdEjZckbw59eFLpnzrjeupCZR5yTvTcdbdVr7LokBhrqFNyNc",
  "key20": "4dYqVC7Z89Sxh3bDkK2ZB9ZXWoHyz2XdtK3Y6VaHf8CrVLNHUb3MawMu53HwgGu84gz6FLmWAwjjgfwfKMB5D5Vm",
  "key21": "3xL7KJXen9htTXgc3VdByL6Sj8CuU8VwsTgGzcGftAp8DNsxSqencfdV9awnCbVZ1mafPNS8STzXvWqm8qLSMaPH",
  "key22": "3ocXBL4y68Hr6Ym2cVhuvozYuPoPHYPMPWLaap4D78UomPcUs2CTTfHp7LcbNPt4SzcVfj3xZKRso7nd15tupka",
  "key23": "5wDqLVhN6JiXzqhJSLU73VxsUSgiQnj9hefE7JuJwjMM2DxGHnL1vtGFs8Gakc1dagJf5faiWjZFUDyJYJjuYa4C",
  "key24": "3SpvEDFAu13euZ797xB4YJFLwazVsygC2DMExYivgjzdZv8j66LDopzh86M2hEpRDt4jHMRTJudwcKtYZWjY5YuD",
  "key25": "2e2MMuxoVj2k6qgfSqU4DPUxqtcNxeZEWdhTFW3SVX6wx5JxKUSHHQupr1cUAwNCU9qm2D7uTHuiRnwu6xSq7xCr",
  "key26": "4omJrettNTuzGkeQ2Z3YVJWL1DyNwQbcB8rDBWD9aS8vHTLZ2UQ8J4DrxWVJztt1zGKVcnPN123zNMyeYciop7b4",
  "key27": "635qgVhmP229D9iHhmJ2Knzt52q8UQHvSs2ALaWBNLSZcqKpniNvMNzKYBLKGXDAxNnPWux8H42GmmduH6Ks4GUw",
  "key28": "5qs8cv2vXWynhL861kqZDP35dDRRFQsKTqgaxxZPJki7mh88iTuvJAWQbLcwMr7EtKyqdEfoxQMUjG2xTUEcSUVg",
  "key29": "Xz79NhdHRRyxJskBcH2pMBBYp83cPfe9fBHAc72oHFnFQPooNkVipQGZoRet5RkSwhiGkXngFyNfUGZtSnMwakn",
  "key30": "449MCeutNiMyagNyJRgjyVWAep8yy1JNYzJmW7XUv4k4RDkRDGP3Y3bmULm42JtvVF24BSH73ZHSKox9fo6k5J6a",
  "key31": "5y6cdGmt8SrZQZDoho2mstL5GApZ8ApvvCMcPuDRmr9r4XKgyytYYX52rHR2MamSdypkoXrTPvW1xQbPWugFTm6c",
  "key32": "57PStSxWWYyLqQUBGPwdWpqQMDkvRDJSw4wY2WuguaWksD3uv8dP9Nw6U2othqJ49S4PVXz3zKYxKBoViNRjymUc",
  "key33": "4JajeR4WNvGyV3Lh9t6HaVRpLLAm5zu2VCwkjQZvbhQrFwn12kF4mfFph4EwaAohP7RTFpiSuhAfoCnCGa4zAnzF",
  "key34": "318trH12Zb6SRqFBcfq3WcnZuhSvHxRMwTQ6q2NmNMJyxCeLGNzLrivrweMK3bczaEZ4fg87d4tpH1Dg2DY5HjLD",
  "key35": "a8VNma8cExqzNirLZtx6MZXPpaJT7SGoVo6h5L5ewjKVAeG5emXmLstEk2f9X4WJ3TD4A6JswhwmDzuG1kUoXS5",
  "key36": "ERcDeCemdXFFidKotDrH8YQ1Nn4vnV99tDT3sQrv6XcrSE98z9pdeW1UmUUuBXoYuhYvB7DGjQghpWzYTwfbzkh",
  "key37": "2TE777Mz1ADJJCaet4Ad5CL1J68mM9pe7vxNxEzjoiUPZmnfWohpaHwbbxu6MbmmVP4d8pag6u5kmYySUpdUDgcq",
  "key38": "54pjb1XhX6A8chZib9BjFZCE2dY7xZh2ch4xxsWpfDmY8euRwVz1f6owKkCDsZVzTfoXVN9EsfECEk6sd5xb31tT",
  "key39": "9NATdsGEYczDACHzb2pWNRDxVn1dijNPRJ8k15JXzPwV6MGDaMb55CX8A15WVBSmfXwCnBHSFkjsfPs7Wt5MzhC",
  "key40": "5iE28Pg9q9oEk4fEaphccka4xyUj1vyLyTRbMJxo9bB7WVtVDvsn2UBHWXKuMz6CCVpaUisZ7ExBWgpSjzg4afjm",
  "key41": "39neAYZ5sGdrt6S7YobvsrnPSSr6CD8FNwK73cN9sL6HHQo8p2tpo4gFUn8j8mu2KQxHhopqVAffaivTxnY3AbX",
  "key42": "56UHmdWR7Eq9MLHr2HRkePjWwTv6FpSD3AfMPfUJRkFDwQ8N54jztsPfSffKe9aaopnJ234r4VvnUZ67pzVWFGxs",
  "key43": "SsfEv4Bb7KWeHTXP45c1DsAnTeZizsit7evr4mpoQsDvJj5U6NEibkSYEqC5yvfZ6wv4YEZwspLZtTYgujQQNjg",
  "key44": "5Z1gdFz3oBLM9dj86RTxv2DkaFpCLAAkXLy9XtgExPBy7D3rHnAKbFynnAgn4Qk1itVk5RSRSKum9TNHUaEBL5D7",
  "key45": "4zSSpfyrVb377xabaJbMy3htTCk7QE1RcAtfbAfy4Na9YTZS6ewmqSDEMjpL1ci5k7EjPvXiRAsapNYg47hwMwDS",
  "key46": "ZWK4Dy5GuFXjHWd488DJZWujuDNha9Uf2DUbcZGKcJcb2BKEsYweoQrBuynjjtQu9b8o7wRR7ycF3jFtbirdG5W",
  "key47": "4o8bWsroS2E18xBotbkBKaL3cGH9QtGCtf6w7kcF3DjXCQMDB7gsRc2vGcPaCT4HFxk4WhCstf4tYMqL33osDSQ3",
  "key48": "2PWqFz7izDkE433W5EtKboZfDmtKWDmcVKJaeeTo1qpSWMLEqDmQMTo1yEsyqoJrP3p51337MhrRyY6shHUcm74c",
  "key49": "Gdsuy3NGxy7mkL1hb5UkngYoUxq2kF6vGBYMVQ9ZKaLkQnpBkN1JFdR5SkVgFdB4FUr2CcHqv74Ln5xgi51bYXF"
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
