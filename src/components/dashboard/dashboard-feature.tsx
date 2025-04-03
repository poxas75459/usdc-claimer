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
    "2saR9AFHSzUKdWydjNBgLcsSgH8Xc7NneVvgxjYUQqaa1RF3pZbYnZtPNceWR131uQMDneMr8vvqZRqXGWdxhkLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WWV3D5cdD8tz3dcknqdYFnFucgDnS8ca9zGUqJmRGv31j4p4GFwbgXPzLGo1bS4sqXn5YwTHcXbYNW3XWCLaESU",
  "key1": "15t55Zfp495FYtGE9Cjtujx4YYerj8e2PphgMLKupEXtZLoc3KyqfBgTBg72T9WfMZXWw9HLYhhAmXED5BeW6B4",
  "key2": "CVHsdYMYwSy49C3L2wkFmKBctKwq8YEUYxA22r3Lw2onUgAiY8wWMucUnxC4KntuBepbuKGmPz84Qs54GWYDUkt",
  "key3": "32odARXzJw8zsuPorhozAkx3HLHvJxvT6c6yCjDQwK93w6jWahafQBbUHxiBnpKcJDCtXrWsVzZY72RmC9X3wuXN",
  "key4": "44ZbLxuaMsWGL9W4nCSRXPAoaLv4vnazHqF4u5rChVJkc22eHQzk4sBUSw6Lwm2kyw8qyGYv1fG555MayqSDVqnK",
  "key5": "HXXkM5PizMkKe1dXAgrvQVemBs8gCGrQi4wuAx5CJ43coJDJzpREJRfNQ8RfH4BJdRnFWAsDnZFo7mCHTjKUF6i",
  "key6": "4mqD2vk7M8cseRxvdoy1hF5o2EavY6nuhxbEfVmqSqpYc1PJDprTWk52xbt5pATfrntWNVeeY3uH8VzvKxKbmsEU",
  "key7": "39xju25BhmbRjz1jM23nosoFs9rq5fZV9DASg7nRTtVXqeyvYS8hkau17ANCvTzrQqBDzTugBiGPGnXzdfoFQo4o",
  "key8": "zPsHUoL5vkPALe9XmQJhEbxaN2UoFgQ3ipeN6vTAWs9M8hH3Czo3Eb6mcLeZyv2DqUvPFS2bqbF3SNbYVnSG2me",
  "key9": "3iq57oM9SySgsUzpRSku4RtbT8xfhUa2UGP8gvdcDf7rm6jmN7JzecyHrXXtiW46gZ97dcaN9rvLsqsi1CDTMn43",
  "key10": "4deVQiZCeMSCvyxZFCyBgpS15ksUoq2F8TwmrAuJhL4L7PhUs49rNuUEzeHsUTWNSrc7sx97x3BdxZPszZujZgh3",
  "key11": "5RYM7gubRhHT5eSHeXRBTacDBFaa7nYwujUyUsFFWwqEu8ngqhAPy1RNqQsJQpPucZwWoeQCu95PJWynYCpNpr9b",
  "key12": "3g8W5sMS5jgEZ2FMwW7Hy178AoQHbNKrw1TokA4yCxpCDH4GfV5UuWk6ULNMQD8qMDbbgadeHen7h66aUa7w6kwP",
  "key13": "2e5966QzR1rMBMPqXW1uTqfhXtFb6yyFZ5rerdckGZpYq6cV9ZhApKoHJVFEtf8Px4TDGG24iQ5yHtRuNoqNagV6",
  "key14": "2DTKTmcuuvNQHjhVBgEnEmUNBJNW3Qbv4ygxoM1D6Dz6UKhtxRJ86WGrGNzcj1bD11puBu8V81i246qwPNgkHM8J",
  "key15": "xZ8mSoVfTf8ZrRia4CfxQKFUdxDRTk1yyMBLCEJhUS1v1nbwdhizWGbr5urMfGgfdoWXHjuMcgoXQhvVz1vv24U",
  "key16": "3wjZYFBuWVzw6v1vKhMs2Ny54h6S4Tr7CCcdtJrUtyDsVkapcVfVGqMUMTqXRC6xxHPmCkF3uYenNNNpBy3BrXAG",
  "key17": "3fsPsN4VDXZ54cjesRngqgwaN6FwzjmD1aeEoSe7fgBaSzezL3jWVesCsnhp5VLZpqYkBSH3txYMQb9V1PF7Nszn",
  "key18": "41UECyLZ3hicknTJtT2kKV8RzDmTtfn3RZHB4ZkhVRu1VBW2Hu6o1eDFnUwSc3gReYRcTJy9LNGWmyLFFtTqGGk5",
  "key19": "5jy519nJxUkeHQr1AdPiu7t7fZ5KdtqYsrxzEaCBBsgY2X5Tyt9bhKdUmwoNuPbWS1WSemVymbuc4dEcHH4pWTc",
  "key20": "27REFbTLKutXEmPA3t7SJqZppuTDb8gR7g5StzigxgnjXXmghCWsLHKFiuMTn7bcYhfWif4robxGdJzBMSAqg8Yt",
  "key21": "xexAsd6xuVLnJyuAedRoVrC3Uc1v3eV1tGGgPtghx93z8WJCHaUvF5XpzcPzfVYqpjE9iwMNsF5CNB61HgfJ4HG",
  "key22": "3BDDtfa9eLa7kPdAdmto3vMpPS1nd1BTWBv6GPXCxQQ2XsDv7NZQjzZk6AGfdqwYbSJLFkokEjQJLkWntX9RLj9X",
  "key23": "65iwLncBDTQ2EQRwtnnCvat6eQHiyhwU6eNHoQ7MP7uN8YCUtRteYqGWHB9Ps6VYzn6WAj5HL4LCMBT81STgC2F",
  "key24": "2tjtPKJj1oxWU99UTVmt3AZkVdfoDpLFfsPURDGCZQdAgzyQjws4ou2XehwbHzSjpQ1WgfAxh3fw2oK8Zf5eZW5E",
  "key25": "PyJ7B8tis97Khyg2zGFHPyWNXfufQoS2YcmycdvHKinaCG5jZCevB9nU9DKX2LpXCjvdQhsw2ckd8evWagbRPFj",
  "key26": "oiszimmUKrGfx6diUoNWhAPnCQmq9wsy38shP9PTEd3SikizZNW575dgGqv2asxR4T6BhNri4K3t1sLwsM9ScTW",
  "key27": "PMsPvJB3zCvBTiL8EueZgmqEEpbo5GVQyCd4Fwg3zodR6mu55dq8sgbw2JdJRWnbqomuHgjdNbFvQcuZM59CcoH",
  "key28": "4LgkJd18kRB1bmpi9u2dYzEzCHDceNT77ay3u5Vo9x2n2pm8JovLCbV5vMQa8ug85LGtSxzEMnAEqUSQ8ssKz78i",
  "key29": "38VW584riRV6niMwpFTgkabKdP8zwGGCx9wpBar994QLRizXiVMFg6n8dmv2CCMUbW1KjksjsSdhu8KaJ9FPazmg",
  "key30": "5xJbBJeuEBg8JrjJpqSsEhKyRe311qGJEBaPAnqhu16pYUsvnuDyHsAGRNbrJPURP5ufLk6otV8FffUtHssgMCCh",
  "key31": "2uJU9PpUuy4wYdbDRVY7jKxGxutD3ekKCnrrMqPD5XuZ1sS794xX713MgXf8aGT1gCm47X8HBPtQGJ5rLzUWJ4kX",
  "key32": "2XTw7GBNCQ7FnuyXYjd9qf44189p1NCX2vgKd1oLGjiiPBLLchpkVdAuTi6etUFEvEL1PZvALYQy4zDJH2VfLieN",
  "key33": "2YwnBiQG7LekUXEQUrS5i6k826Qs7SHXhhKvTed1PU7EN96wVbKF8KzuinbqWipwmzhBzt5SCLm4TmjqLiKwLkBX",
  "key34": "2aQknTd8C6tehJKFrpsDrjVN4eegCEP6PJdZLivWyrJxmpCAigEdFEdWFeH8NY83piVmR7dZ43bLgSqaH3c9BgH1",
  "key35": "3tiT26RaXd8mABASSDrdQwrQT9xHjxjeHNW5avbwqDL6TNBhoQaV3cmYMvLopC7dVLkTvfsm3YGmeE1V7S87Mv15",
  "key36": "3j1guWGTKYEhH5G8f7zunP4uBuPUkzPRWWyfpRMxc2tDdHNZGfLWKz77sKJFQvdoK8ddZaMmtaKk5X8kryRmV6WJ",
  "key37": "4VCpMYEjghR74G7eKUppC8ZeznawVdPSNJr88iQjMhbFFjEAhwcKHJLVfM92UuoeXKSyM72ZFDaYRzBGkcjTRQrj",
  "key38": "5AYWQTq4fnncUGC1N6NsJotjvGdh9m4uVkrMNLVAoFUm9DECLDgeyW93tzvv34Dh3SSrZHpX6AsWfLuSyeA3obbB",
  "key39": "2reaEEskBnaY7Dj1VSL8JavX6ZP8MFjBCk8c1PUaN7V5FupVg6ShwRhBTQATFHKC2DqgHKaYCQFqu4ihwPDMTkKY",
  "key40": "4wPJqBdPg3WNQG6paDzgiQU6qf4nUbT7gtWAYvDPctJdej9JryJuXkd6m3dTbuAfhNQkn5RhFhRaApHc4wodXub6",
  "key41": "3vdafD9BFmkr9aRSjsV1b1XqRVPPqVzzdzJz6ZJh9c2c6eqsby2ELWFsEqaaDbFVy2UjKpfzh6vcNfNWCLSmiWEc",
  "key42": "61HRx4cY9kQPypwX4TrUCzgeQvmazjSkYccceLsyjsm6siYR6ZkuNQX6GcFTbMA5wYXvyMZYP9tL5sEaVRBLxo5d",
  "key43": "4EDUarKDMQvyRym8GbmegQSqNc3Fn4aP59QsbQksLtXF7Pbuq2Jt3YaMVcBBzwqhPW7NnmxSGBSztNCgBaX9Kv7g",
  "key44": "QpKL4U6eA6PbJASTi6GPmBkDjHYoTQumDirgECWpaneHcHKGA1JWCvNyL9TvTWACCj11g4YMFxCPMkZwasHtKbZ",
  "key45": "5AsnEg5H8ZeAQkLZqnNJo4ViNrpCTQWi3po3cgLU1CSNQbhqNnLacbjowdZf9KdhqKJH2pxHEy55VGivGLFVyx1v",
  "key46": "4jm4edBVTq7yH2HihChH34LRCsNRznAFwg2DVrDBoUAkgPRD3QHm5WmUV6Jo5YkkpXQazX8v6PGqmQ1DEGmYqJ7R",
  "key47": "5gfDf6yUSt71SogrmGmkiwGNWAGi4rTe2pX9oazvoYDYNqsGndi9LR6ThRVkhd8YWtYoDtsVBVHG1mBifFYsvjc3",
  "key48": "4cbafewkw8ZeRxa5yYas9XcPEiDRH6mDqigQxzoxpMC8faWxWusRpCnfg8ocDLskTnrYs92WRZu2REnBm2Nh9fGo"
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
