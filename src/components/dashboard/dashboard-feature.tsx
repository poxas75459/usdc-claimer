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
    "371mwaCvNmkEqfTv7rfTHQgDcNq3fE6sWEnzCfZzgjT7WDVj336LCteG8HUY9ZK6SMnhkq48ZwaEuAZr9psABB9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XgKJ1DsgDwgP49FfR5BsZaGiwpLs3agzoumJjLUm2LicLPANkLz7tt7EiDigM8YoNuc4EGmPaocMQixxTDKGzw",
  "key1": "5Efs1pwwitBGoW8Wsw4iGzNesDP8MnfhU2ySzo5mrJ3TRHdFowvKeiRHY3tgXZkRqGuxxBBiSMCp6t5z5eVM794K",
  "key2": "4BKbjqFqydys81d8TZUXezWbpfbLHZeNmRGSz6HZ1EDPk56CwXeXG4teNhnw32nEpFmH2QhB9JkhbQ8stmfictWX",
  "key3": "2gsWZYVRbdhEo9aXKjdhThKKePrzgq7puRHEHNh1JbUuNthzbBhryASH65p5Q6wn2LVPTRnDf3Ly6piXXPQDZbGQ",
  "key4": "Qfzt8mLCr6rSMgt8yPxsjZikjy9kXMTYkwxwCGohCWm7dpm4RsR9A17mhBupyn2PT5HhUWoNkB28d4A2pgUk3Pg",
  "key5": "3XghwTdqGVpbs49TisSw1qdVDo7Pf5N5Ft9yLeTjGgjzmi9rUE43ePKArwLf3EvntdMWTXdFCUwvzr9QYCSkjsnX",
  "key6": "4vH6CmbQGWZUtN2SRqMAoQjWSWFmhoHSGPrTffD2hYpe99DRm3oVL2nsdAJLqQ9suoRmiYa3w9ruCdcbGKEdZML6",
  "key7": "2zzFB7nYyzFxfJ1mg3fqdEXbiZwdEHUTNHWmeBc73v6vmfJQ5wR7x5xTNES6yUekHRnEExeX1G6UAVJVc15MTFSi",
  "key8": "5dXCEtvJXY2sNMUWB13hMYo64WDXNgStKGtC3da8vQKWCyBKH2TaBHNGpx9HBWVadZdr2LtDU1snATxzg7aCogh4",
  "key9": "5TBe716ZJjEYPXpJhQAQWbE6ULQ7xdZuRS9t8LeUZUDpDDH15Gu3qJGGUeLR4q7nnb9rXzanVHpnXgtPvJaxwmpJ",
  "key10": "36mrK4nGv7cMoxRCNf9KCxDQe8bcNoQcTHbD3bw42aojZTr3zygj9krFjU4UCsHHpLVdRds9M5UPJyCKFwvZrPTd",
  "key11": "5s2bJL8e3HoEtocXNmQfdhgzkhCohxm9QFMwaXsapUeWEeTSb8o9EvS56EuEVZhsfXcK42FsxUbqMPs9J3pASHQx",
  "key12": "51SCJkFAW3PMBJqpb2FZANuRUZUUbh6B2tK35tDXWuWUesvyM9fcEMQgidDfxSZXwBV54gRCYppGUNsbrnCNDTqM",
  "key13": "5TkyBb2cfdkcGQt98DzsPd1xyYFToQVtFYCazMorDx9bGZVsEDnBX42nzQLkr3xrhGcAMcoRzSP6eNyFfRW8ojuY",
  "key14": "23ZnJsoa8jYDeXQSsTN3E6NuXQoUgPEFVeigJ7NsTR88wToiwKNv6NDd9wDCtqdBzQA8EWbZiTJRCooZwPofcZj2",
  "key15": "2D7kFjYBykDBm391wvx4iokKaZukgiV6YWGh1suupDh8WkxiKB6id8253wVm1y34dGBPABoaSwUSWuHNc3ocAyW4",
  "key16": "5iRnMGEimvwSruyvEMiBPa3bRtxYuV2w64PLx9Zq3dhX4QCg5GnNcFZyzmsJwt1v9FAiNqAhHJCEqBopsEh4KGVk",
  "key17": "d4P2nJJii2Nirg1EBsjk5nMasMJUbYBhYq6k8q3qWpWKRKS6PDprXsj48kKtpBGpBQeq8bB7L9PSqBL6KtRTjVi",
  "key18": "5sD4kF7rB3TRCkF8zwkWcyqzzWsmV1W4qRUHi5hpyxpH9PjDpq7f1ujC7hVJswSp4KmQJkzCAr9VPQCEDVJTybjP",
  "key19": "2giQmWQ2NTYoxZDUmZxUuvtuYernh4axGpX7NfEGXwDe3H8DvpYaTYEBY5jrBHkLx5Wrax6mSU2sByZHgdvjLfXB",
  "key20": "q8XPDWp6rDJ3DoNAemcZyxDHf4T7kc47ZE5eV3gVMNLJ3RnPHMSoZesWyej18p8FY33ceZ13Xe87uWoyb99Hbgi",
  "key21": "5W7AG9db3VbdATirFQFQ5kkoLtfSYCe84THJVvF72uop7QUkhmD5VhM8Vpyc2cWEwqrgL5bXW1LKg99LXvzPNadr",
  "key22": "4F5c3knBsMbMuSH146B2k6rJ34eQeMa8fuaqMun469CHJo1W5CoNfoxevJDr7ffWoCLYZNrVQVojKdap3Ks3MRN8",
  "key23": "4UKhFyjSYhuFBk1pbiKt4pQAm5HRkH3G6s37JshJJNQJ8Pen5qy2z2neSczk4ijEApuerm1kNz3p8o2cxULAnQAE",
  "key24": "25YB9wy6DMnYJJc6YCpwvuJU5tcr6Yq42S4TyVVY5xxUmceS65jgn2xfJb8vLPpv9kb1Dg7GxueuJ1tKKREuygzK",
  "key25": "4o35uGDtE2uoGGxKzM1svi1kuaVn3PqgUbvmWK8u4St4YYEdExmeoXDNc5toKsZEDRLH9fg7Es8fKJbGZHQXdCea",
  "key26": "2xqUkC7mgV5crXJbuJQJueL62ADCf81jt31by9KzQaQ4sA87tXKvmgE9so52gtUsEUGad7iivaRLqPu5BCy6x4RQ",
  "key27": "3EXBVvbDivVMp79pUNQtb6eiHRSgs6i8f1cnRuTmQRP1t1UtdNBCM2dEfBHzZok3gXgmjeyMubW33eokZJDFNBUd",
  "key28": "4vNM1keqLK6Vou1Lqn2qXWktk1TgXDJR8eCfJjPMoxMgJ8Q48ZayqxjLQnSqAtXNUko3PqJenBsRYN74c8EKKCbN",
  "key29": "2cafAFZ61GwKS56FBufdF8Ly7DEAV8iayjVaRdbrapTMzcLgKxxk7tiS7MNBAXqJgWcK3y3biswK1fyoktHt2fmg",
  "key30": "5pT2t3gpi8K3HKSPRRuqpw79BmSN44SHxvErjfUSpDyEzLVrKgLtwHvr9WcVpzuDprMsZPReU3zehY68SxYuR6om",
  "key31": "3YBAVjFxHhoGUhDxNWx4cq12KApuEyWBXG2Dh6FoZt96VYwzsQE2BLDKA6Rrvm87Jdk2Tq9dAK9KCRSsexY9CYHo",
  "key32": "5szPph3shGnmiukaJBKvPxrTXJS4Y5QagAttwyQjsCgR9dYQXbrQfyg5MEGmrCJtZKJ1K1VSHMzPcYXgPCisSxSf",
  "key33": "3PJ7TC9fsCCDpeLv3kvikrymmetVyv4mLrx8VoCwQFCFLC4ekP4GP8FyaEr4qovZHu3hvBuaQabkjtXbRm4U5Z3A",
  "key34": "3vtQjaSSTGh45yxx2aRXsYLhbwo9aVGthSdW5LtgGSChoFy2HTTvCJMnt2BdU5B11mdvjfnoTkssZiWGQwtnWUEe",
  "key35": "3EtjP92g24E2MyLWvs3iVpRgyaVkeF23aL9sun1WvhUjt3ENMuJgAVHUxZDy68EXYhTAy2xgmQAbWp5iDqcnoSvE",
  "key36": "4Ec73rYodk2ySbgRh2sj4wREseDJtAebj4uSf1BPdCAPsagKThWxhnX8HMkCtYmvAnsGN7LHuiRjajBHrPxYReL",
  "key37": "zqregDRPWoiyFgpD2gG4bFnrzi8YfSPH2MhrJntDBVhYFZfPC1g62GP59aWsNNqqBBXSL2TrExKXixnSZPUhURq",
  "key38": "36BYWCKPLcp3D1f99tuyYR1i1TwLAwMvegGh84KgDZFS6nqvZha5EeSTLBQBhjhkPP8aq4pYyuwNtrsroxrjevXn",
  "key39": "3qcJC8JrDCp9vgAR41A4gBwGjkSe2UZnrnPR2MZ5tEWrWa9R4if3pV6kanY9cWJmrdngugA9SYSsMiSaVWsHd1Bm",
  "key40": "e9qfrVAmu5dK26Uu7dt4jsyxFXyJZsF2Cx7bkW3c8jxm2M5dCVAxYnoXae573yFP3guoeCkgN74dboRoZUmGpLN",
  "key41": "5zj853wAHymxqrmML4byF3HtrcLydxTSsXGKcqh4HfwyLcquuf96RJASiP1kc7wbPujgtvWFqARDG3S7vFbEJEZ3",
  "key42": "3QzV9Sjzd7QTbNAQDguETRg898RUPq34SAdZsQGJZrJjay1sQtRCq8tNgsaBD3dtDjb2eqmrWcv1pqaJYSk276Ye",
  "key43": "4KG3wzxmGiKsSg8nHGrCw4dGup2veTf9cC5daci4PFyQe17vWs6wWc8TmHSPYnMyX1JMQwDe6M2P5pgZj9bPUX6c"
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
