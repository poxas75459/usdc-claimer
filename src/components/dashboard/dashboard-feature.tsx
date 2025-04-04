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
    "SoTEWnGfB5GLh2oTnnARxXz41a4PLR4K6ohCbjCSgKfqzT1HYzVm1K4YzsiwDCPgVxLHzuFkkeqvMbM8k6vBJ2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N1tFdXY6suhgituGGeDAEy3wgre1PJByGQb74kfjeYHuhsjWEoSB3CzmoLGT9Gs7cq7FLB4az1MixRDudjL8WVj",
  "key1": "4fpBShNewL4QYfNj3eXnCpxpqsfq96m8FJo1HJeVduBFjWvjah9JamtRt1U8XppzCh6Hp51VU7o1s4HEm8yU1QZu",
  "key2": "2YCiXLp8pEYoNLX1WegmbHibMnuYpcigCCpT7AFY7qeqQpzmJ8Fys36qCZtsc8DJhMC9Ytn44YrTzefVxypVSqNE",
  "key3": "3GsJRyTxJBm5gF87hsT1jighW7Vihd1UTCXmVcj6iG7jYK7psiJ9mT5Tt4kyJxyfnVjmDnkcY9J2NzTP6pKqn4EV",
  "key4": "mKEc244F9GkJASe7hijcf3trYHPAq2A5fLJD8p8U9n7yZhwfn971nZS8Tp6bMiVTpw9VzBtGp6dZnJMk1FiBSFM",
  "key5": "37GCnNyqkbtzRjigLTwZCPkA1Hq7Etd5rMnNSWhTi18KFMqCfs4MGkvktK9svSDUzHg1WLkqNbSUYTS4yrVeMLXF",
  "key6": "4uBvNVnsWaDXK298XUF3i1RwWRTCWc48u3195duhUYTCpSX9uhqNr3oKT3FNAZkHPgLyqFynnSFEcosdWGXzhzTQ",
  "key7": "34Jez8ead75z3kKLMkPhJmS9DY3De472HP6Vpaxjpcc44tCh6wTZnZ1H2fWy9291jyVug2QENwS2GZcNf76ynYdM",
  "key8": "29D2Eydw4q8HYxesLoxjJeCkkMsrgLfwicUaAPCQaxgBuKmcUdeR8DUxmoyx67g5yAmDVGTCJkrZLfKgWQ6Zjhpt",
  "key9": "7FZY1YQTYV5VrVYEAWQ2cWXtw7D5vkxHC8nv5WtYjCRzkm7mYGzioUg9zUTPeurUQwAxV4WZyvUkbHM24NhLoSD",
  "key10": "DW594c2imuaBGYQEZUWUgUkQdUWbQ8a1KSn7NXW4CkyAat8ZgVtqY9M6soACmg4hcMWZNfijbY9K2kjbe8YSTgs",
  "key11": "xeEDcTRCexopEMLKpFTB1W6G4Cyx7kkVoLeunT6hNEFZ2jtjjXQhektFdFKHRJrSfudhJdSGczUqWN5XxWTAU2C",
  "key12": "2CnRTbLyUUckUpA8Fd6gHHiWTYaVgYhf3XiYdxjNhDpXnMUeYUcHXLRq6PN2R44mz14ho7K1HeyYLwbAwdmEKDLz",
  "key13": "4wZgRojYBmNcZndzj1d3TvxPdqZaG2RjWqh8JVy7KKpy24ENCjonCspmU8smKJkcxyDKbdCAbCBHKhvaBLLXwDGH",
  "key14": "2jJ5jcCYdhHXs1c4iBkWdVQC2UqRY2pLvuMnUDLYnSSzDtfnKtYni6wwP2mUZFQD7mvdj4bm6fh3hC5zw9prQqSS",
  "key15": "5CFv9NNeUhDVFa5NMX9gVqhvvdZzDde2NsJ5xoXMGng9nT4FENKH7oTuaeBfAtvsGrXni2QixNLsVZ2YoJFPcfCj",
  "key16": "GkmjF84YunPua63inSQNZhmxkiBCT13mB7WGASe58hvwzV1Qy5JiyyHYACSi5ri1eomnPPsg4iKpWJfNcfnSxtR",
  "key17": "mry3DMF9hv5Gp1xQnW42J6nwHYbiSMsdLHFhagLnEQK6B1TNgpgKDyBmUY2xkCJp5NtZqBSUeWcvEzEibDruSJW",
  "key18": "5reiPXPZQm5tLidKdeJP9WvKHigGHPiC3Nfe7fLpRpJVWAeDMYHaPBBAVWpbngWtyMf8sLq6mZbFQxUaBqwSiwVQ",
  "key19": "2durVHN8JHngGgsGXiJaxxWWB8Nvgcw1Rksb9mHPkMnLwu51ug8kkopasEiSe4TyknGZ4whBAViKa5aifoSwNWrP",
  "key20": "574tr4hsnXEzwdcY3Rvt2GBMCc5NThWp7tfotwM9dy53xpv1dMcPDcoDjwr5aDDvj6nYd4RzXRe5chikzaJmZWrz",
  "key21": "3oksk81f7cwGbVdD619wA6yTjgW212vPXWk3dEoRJek3SuEnHvpXmwgJiNCQwUG8za1YA7ojYsfgsSofKsoM4Bkm",
  "key22": "4YaZgTDz7GeVeLsXeJxfkdb8t5hfA4svnGuGRxxBjePpFM5zYoygNC2hvmmv262GEzyCk3FUVGcKVR9t5bctNe7s",
  "key23": "4mEKTygR6H1FgUqqELuGMfJJKyUG1N9uax94VFA3TKYPMGenxDHxjoqurAaGoq3KDLD9795uL7c3D5HJXgtQF2Gq",
  "key24": "43zLb8o87WAZHz4hSUGEodvRBR6xhcP8RF8Nvb1gyE4gpURrLw1SK5RMrcm5ZQBfAjUvBBurSKNpFA1QVmXPuWuE",
  "key25": "2uPa3yHdi1SmLYqACT6k6rdvuWPNftWhyg6Ay2aw3trTX7wAhGhkLGRrgUEpkNZZtDbvHTcRATyAhRBz86tBNMYg",
  "key26": "YrB3F1JkZSkMBawiJm4CCKaP6gusrzvg6SaSA6QQa2KmP1T94KamV76PXvegtSivzVFvM5xcipkisBF3bFxjPTw",
  "key27": "5XkaEEpNNQ3hT554xssYVTU7G24TEMHnCUjhD242wtiqiTwguVFfGBAFChz38SEQB29uegjAi9LyCdfZWUDwgpu1",
  "key28": "4SsF48Sq5KCXjGPpz5Ky9K5fFCmrTSkWHa3WPXqmz5feK2gjMHY5uAaWedsu6VzpypssPuZu2EbLJ5djBnaWpdCR",
  "key29": "2kNciyQUkpUTF2MDv7WAx4zTayoE4cB2zcLG7VDr8i9AHGeiq6UpPMvUs1PZPXwobS6VMjS6N1rn95rxf1FdsYXR",
  "key30": "66AWugcEqojjhqQHkTDRV2VYMqdaSuKzTtA35PTwEKrRzZFjZj3fKNg4yyNp1WaDVED4WZ9R7kB92ZPd6egexKsH",
  "key31": "33MFDWs31GeTJmxiYgmkSFMuoSVjwAF3r247e2KUxzgaAENJo8ABBK4sCimry49HtgSaXYbCMap7dx4R9JbBZcri",
  "key32": "4oYDBfGr9Vus1PUmQroct1T59cSYgZjMwARMmqJwfi8CZtxGp39PB6Pbyw3LuvDbHQT2HehnRvoF64qt4wNjbSAh",
  "key33": "3FzZnm4oJ73xzxkQhAjAMChzDW6UQV4pxfVrnauG6aJUcD67bjaNABcbxMaYv1uakncXHFmP3qiGMhwXk1RRLXk7",
  "key34": "3iFNQUtbtXJWk91mSQysYuTNTgDMjvkf2xdfbve7y9jski9z9p78RbSkBKLKRHfcPRbcFP1oRECSBzQcpKsAHHGs",
  "key35": "3UBLZRujNhs3it1Rj91BRmczF35Eiff5BqHxAw5U1JQgUSm5sBjMBRz1EfUom4vZKXtBHugxboqEprAgnLfu86nH",
  "key36": "54GJn7FfgpvUJuSAH1yrJS3ymhdftdDKXiLD8d8XUux7vs79JHBxqRqxYBv4H1HW4JQ4EPLQqGQzqVG3hiqUQ7qS",
  "key37": "3Tfc2iUqt92z8QxXQsmmE7xw3QjM2cDnXBLMckaESWA8EdevAp6YSPQHHVAYbhATekrYLzcvZHvXqF7vfRmHfsec",
  "key38": "31jwwmDk3J6QMsruzoZKyD5n8bSSqazdsQ4xwktHGTqmcmHKCHym79cTm29igXQPNLhMCSwN1JUJiaUPPjd2Tdyx",
  "key39": "3zbN9eARadcyPiskrJaRnTTuw4xpzJ6Er44nAnzA8ik3BxdvHFpwn4PQ6ko8aymzzq5Vy9i8REgMsMumjxydp77Z",
  "key40": "LPGv3vZqN6yA1L6JD7A1UkyCYAusoeD5NAzcW4eQvahB7u3ZzL4qg5ZbUMSdoqJo6vLQ3xDNyXQZ7bzdND7vAEx",
  "key41": "4f32eRPgRRFPWBKQnrtX4ygiLKcv41Je78dUiMVwUZRmL4e6ok1dDBwZiq1myKtnDDbZ2TXi53F6XJecFZyu3Gut",
  "key42": "2T8QmRi28FHj4qdowsChYeKu91BnLmnBqwLjyyqdJLam4iqZMoNamisTewDqeow6wJZ8MjmMNuND8qGoaLNnuChm",
  "key43": "5AoyRT2Fxydi4fHGvDf3XDUqhxqJ3Fp4PFuuoRiqWaXhFHEPLcxu9Yo7eYufhJSRxrmyxK5ZT2frcJUkqBLDCHj6",
  "key44": "4bHyL4DC58vExPVQU6y7WweEK54MseRgYWGwK6rVtzgkjWhtccGqrdBYpozPr8PAWqFRxN7zkE9g3X7vJw65AZ8E",
  "key45": "5cKjt2k8fAFK15ogL32Za12X7KRXCk85iU9EpeoTxzbfWfy4VVoYFX9zjKE5Z5mDPoQ784A5tPdUUKP5aegnVLMw",
  "key46": "3bUAd8j34Bo45GnLKi4FiQn46UwdcmVF1GzALzCWCeUHqN5EPZ8GU1Hv7K6g4JZtoZ7xxcuPGMduzbpx2CMAF6zp"
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
