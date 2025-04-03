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
    "gZy9GHw5E9fs8ZsfUuFzv49UfoH8gsTiziUnASWezE4BzvQ8XMxAig1XBfchWC8FnvErmZusKMXwJ3ag479ZpDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4SrjBwVa6eBXYyUnL2PLH7FReMCggx4H7NKdk9DN1PBVcSyxAmYBBWKBPkDUi2vj2sdpXuf5bFy9hTaJDjZvAj",
  "key1": "22x9syEjgWtGQmtsks1ZNpZXx1S792m1G5VgWP3ytir2U9sjwzasgU5G8yRVa7iFAPg8sS8pizAatKpH3FrV54F2",
  "key2": "65S81YHCv598koxrqzaztm5MtrWLzTSJ3yh9VwLtYeC2Zx3CL3J3SF3QQwbJdGxtFuqyxBRvpchDXBZQ1z4HEh4h",
  "key3": "3Znm2emMUt2DiQDAUmW9chCaCL2gi6233fqtmXgQ6CDWyXPX3LtKsHbmKG3TF8jvApidE7PUWs5Jn4kyGMVWFwpV",
  "key4": "2ZzgBi3cgzZ7FKHCb8M8UiZf6u359aXWycCc4sdArMdLSXNxXhs5SfQYyWkWtH1eL7hVhJegkATz4WUCsCq4EKAc",
  "key5": "2uRcodz7dwmiNii1X36oi9D9jQEKREfkk5Jznib71dh9xHRvnR5KzW8KS55xP3eqTBYobYGU62aGRxzc6gx6SjoW",
  "key6": "3ZecAnBaYirc3ra3P9Ngw6X21S1pyoiCnQZ7puHKchW75i3FG2Ko4SZWjSnfWaBk34bzSHfPrHnSv3AeQoKUkmi4",
  "key7": "4pArRAAzzLDaeuh3SsHnatcGBNcg47jMcUxB7yu6YfTE8STwMAiRDtixjwsAvMSzQkU1p5zfap1z2xgdgT5DGNZ",
  "key8": "3WtjoQYsNhJF4aBbQDNDrSejPB9WV1K5fhkw89AmeSPxDuHHvn4KigZybv67d7hbiQftgmQC9cDVvRi4c9s9gfMC",
  "key9": "s2w38MtY5KQxLtccQjashhXnvzcy1mH8ErcwrfsHsifvjUjiJzb8s4vW9CeNCWUzFyYCn62c18xjds9dBwX9hYb",
  "key10": "2EASEByGk3aMhw3NEBnPQhSrxaWRK739rVK41YE8QkMmZEJ5PGGKTSo17AFRmL31diGohjC2ZSJZraFxwZLJDn1R",
  "key11": "2nmQDTPgU6sXoJiXawuSJpioLnw7Dz3a3ErN8T47cVveRZkWnU8zGG1cxK2vgq7ZoKAADtqYmEFkaDyCwd2uBahw",
  "key12": "4j6QccCoZNiNST8uFE9SyiyFyH26Ri2nmvxoqBEg5ssJeQYRtPR4T39PrJjf5vT6xsC2wbkq4ff8CBFCjv1wVnWj",
  "key13": "5rL22gVcx8KpCjYvmeaQTnZ4pb3AgNtFyom2QHLWWRy1kjxwTcrppT28a56wFKjiC25uhjrNq5r56DfdqjFcFWBB",
  "key14": "4KRFKp4MQyHypvNPTCZkLg3T3nTNdAXd3UuGb7i1dQoVJ4yRMPPu9ygX5V2W1sLyEeBdfNRiYWPvACTjDQmGVuee",
  "key15": "3Dy2tEm8aeC288XFWwVixin7Byi2F4KvBy9yiKrEQaqWQhwBq5n7eetQ8vcYQzTo14LGr7NckXrwnws6Lm9zKJr5",
  "key16": "2HLiRjJ73G6h57VykCvX6jG1iVR4oPfGEccnaHoBCANQ4WEstPKszAsKTvJhs6iM3scT3fapJcr6jsb5W78FafNt",
  "key17": "2AvBL5yqEzWgvgaTMgVZ6VJtDpRzFW8C3dGxDgU1BsH5ZDG2rzF4TFZKfTQxSFWWdRCyRxpchvxma6hsdUaemHzd",
  "key18": "4iShoDDGAbW1EnhmbckenY7pQfzeJPgsGKLME2XUQqg3aGbQ6qCYQ2Gnu2uH6nAUu4DnLq5oKT7KF89CouDftHLH",
  "key19": "F8LynPFEkEnvsrNVNChn7Z5Jr3cXqRoKJwofwjf9WLTcwjntxzvqcPezhYbXgLsk9V8UMthwG34U7xasTZBQSk4",
  "key20": "4mL159JJy4Fo1zmWP8GUxmKZAMEwNi58P3F4qUZzYuM6N2x6Xt1otzAbEa8MXx4zEBSJhWSrMrSk5gympusEaaxT",
  "key21": "4oLuaVKJ4TN6xS8yGpoA1SE4hGYxL3TYu5sreeUZ11GuiigJCk9wRgaBiv7xWyeYMwANeEWjiXS6f13navUBXdGz",
  "key22": "2eSHj6HrXBGpoFzY2Lx9upCBv48K9wo4hS5NZqqJkyBGc4zTQzG1XdrHxZVdEr1ecfms3K8eoQD8DMHiELPvQx96",
  "key23": "2xrNsyagKFzKtW4hqzxBLzLZJEpvpvweGaSxAJ7yt8U1gRseAhwKnYz315AMmbksV1dXeRaWbCwNzjvDh55CvRgN",
  "key24": "3uVd81EJBqNHWPQFw5M7MbPdcdUsVpoJFWAcFqz8JPRizrVCJJN4GzEGHksqrnN3XL3JBgGV6D6Uh4JLDGxT6oN9",
  "key25": "5cA29fDhRoAguqe1N7si3DvNn1JXtzZwNDvUXAMQHrDPgMvXjxAyvvNmMq7bB1hsJX1fgKoXzuSCtFFKEjLPEQeZ",
  "key26": "5bn5N9PBzgFdMTapP5fKJxXYE2n6NoBDNciXuQkdw2DjcRsbN3YHREMP8sjrW8o7KHoKLFVBBtwyDnVaVkVoQSKp",
  "key27": "3aHfiWNv6sApaR3nqjXJB4RaCkMoUb1WCrPkgZz2xVmRhMEGqt7is2jQ3WEsX2ikmqYuzt1VQRuz16CHZzJPnZxP",
  "key28": "4H3ymA4yyTvNkgPfpZnhwZxVbEqrdRiUobJhKeC33KTT3PfEaCiQf94UTCgvp5HpCsbVwoDGtAuuDynmv9U77miY",
  "key29": "63Av3YDraSZSDn4vvDnmj3Rc8EM21qk5xpmDqxoMu93hdRFAJcFXX7bKic7genhBH5WJLdDfwTWsGeMiM7phBBUZ",
  "key30": "4QNcaMLdvij2aC53WWu2zajArBpoMop7hW7QfBftzASGb4SZLaPn57RfN8xJHCM5LavFpXQrD8aNXnViWj7Y6cDm",
  "key31": "66bxyxwnT6MCBJBq9UnRWYM3cCJqeNKUH2J1vYjM5N9Bb8E1XHn11e8qsy7mRFVjz5BokuDTmn4k1ATwiyvYtetf",
  "key32": "2ZbrsVVgaG4ZNkWdn3eJMoqGgX8WvqHqvuSU6e16GNACMwxyUuuf9vH7pzZL3yoHhaiVzHQT9i24qhfQbhHgX99U",
  "key33": "36JoHGujTeWAbUdaW5VR4LSSDB3bTFnxbqkx168Xcv4RyjX6zh7wFkSWuEg7FMarcYzbe5jXk85adSkb5sxqQ7yG",
  "key34": "3hZBeAFTurpRYQx4WpMcGZzRqy3nyQQn5FitboBj7LmS6ap44vB5iKRP6WPBarDzf2BvxVyJALupi2DbhaJwPypw",
  "key35": "4ZmK6uThiPHXhqhQcTr24NWjrkjYNReo4LpsdGanUSvps2T4JocqNMt59m5K78BzjzAt171GmhLymXnkUgCMdoMA",
  "key36": "4Wgmo9jaLVab5tVYnPFGUNkCyPwviE76HZ2Ei11Zg5Nuez2yv7rZuyodMJZbH6jNnTVzSKiqMPrtg5gaUaYuhLD2",
  "key37": "3eCDuKwkTcTsfvdWCzvj2RY4pUEMvz85vwhd7zxTJYHPPJJtUqjhJQADeQbzWT4a8wJnccYphZyvu2PnPu9hxNEq",
  "key38": "4oq8H7EssqRAFKqYJG6nPaqnxdQYycWhhrTk1Z974tQLchGcckwjR4DGceyX9Ft28T4f1kUBaE9Tc42QX2QXP4nr",
  "key39": "3Pu3A9Tu217BJW5R8vc1uqWY94vyS2MxDuzMRjg3hHXHuL5TYbxc1UcxMKRpZkgBPPLvKurczvmGgpvyFBaoTmTu",
  "key40": "5tU1uXqLk1VXX5cTM8Xah6ePKNcm8mTRmcpzyF7DrMrdsdNHBdKhNeUWTBHCHkEheSTZ2myMpSVim2YTbb8eT4dv",
  "key41": "2BzVsvphqEzMyBSLKMK412V6mCUKdx5VhgqE8jcYgWtUYAfuDwq1BhXtZE1Su9DdUCG5rAGRbZ3agp3EUe8LkQ4J",
  "key42": "2ZcgkpJf4sj1fdqV4pZ1d62GJyoJp7bCwPyi39UGdL6J5iYuzY5bn4U75aZZY869VdafUrBnPh9QiZAtgCLvXkQX",
  "key43": "2q4SRMP5YXzMkfDpt4fV1ABfgxnrZ27b4CTWrMmq9m9zLN58dEbjg7YQGsEofUQJJrvSs5m6EFSV2MEvEWT8oPV4",
  "key44": "5UaeqWxDz4WqtrKNTeLbe17gKpFa4dMziSyvG4Mo4dab56zeHNCdrVHZTfKFYh8vXS1cM1jDwzSDvdMCDsBAcKaA",
  "key45": "Mak9XQxMYQua3qRBz6kjWKUfXxfkvu7SvLEGJ1sdHDhXhpyF5kyVrsqnW3iEEkyL1ZhEZecy73GpyBZ7w4RrWP7",
  "key46": "43kejBQ4aM8YRhDt8REERuncYaaXBxhCVZraUcgEgCR3Ce43YwRGiSKSPYW4vLTjLh2HTYf2of4tHMot9KKhXiwR",
  "key47": "3q6AnmWwQt1mZ9QdhtdG228U8Q6Mf9ob6z5nbqQ4rFx97CDSMnVK4cjSviAPhiJN34xqwe9rCPhfoLR1Q1AMxNfS",
  "key48": "nXHoov5gkXwEF3qSEnvQJ83m5Mgcny6EnvxdjLktJc1rEDPEiEdxrkNd6EC9NiXWiaKDY2xyoKp63535BQ8Scsd"
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
