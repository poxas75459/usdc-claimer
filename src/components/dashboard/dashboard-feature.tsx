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
    "J1P255SyQ7bshKS2fmZRThxuBFG3QQ2sSF6wpnNR46vJCMDRAgSyvBbiowqH6trmWHKGCGxDw15JeX6vsNfaduE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGnyEecS6JwnuiNKt6YGWWhLaBjzAViyaPfK3B2KcMQpsBeb1KzP49JQtSWg6cZdLZW1rK8r4CVGGzW8tiXhSPQ",
  "key1": "644XAGN1iVh6iC4onZNdcgpUHY7YQ16UrU8CXxUnxeQe4NX6YfNViMZwzGemCKQYQBSQ3o3h7NUEFd717hhZjgdB",
  "key2": "4R3hhBDRVYmbiEwQWhQWR1PKdGTt9uEZaw1qNPrq61UmXWfKiUS9pz9gCjrGR38fMA8NZu7c7eRtPVM2qehZHiRv",
  "key3": "4GkfhNTXRhyxwSHEC2BzmQvZx6AQSormbCFGfKqzzDtmSbqEat8DfzjSatwkR7M2jp7bqv1MakSfE7ExPoF1DFsw",
  "key4": "5kNneoAaEvF7CmYBpYyLGRspumcJp7XV1hWyUqZVrcLc7hq2igw847ePYxjLJfZafZw82UdwTkD9dXbuTXbJ5ZjQ",
  "key5": "4cid5pHQLg7P1YBrdcu8NNDFYCYxZPYwy8aLCdAt9qpVzTpmPCgTARLpkRR4hUQdwm2QJ9wX31LNxWvLFQutSTDG",
  "key6": "239nhoDGAfGuXj1hNJ6AAufCY4rBRDqUyHVCCpFG7SQSrRnBmA5imCrFJS59pLimKG87pU66GLkjxNoLJ12v15JS",
  "key7": "2cnV8FaUPPWK5mPxc8FP5ZNYmaVsmU1THSmhGUv6Gyf3Tuc5TmWAcTcGcjTsZyEhfrvXhu9pbymLsHk9CHvj4CZ8",
  "key8": "2Jv4LJcsyLBphk13qx8QL5HzFeBm5avfFPNvsXBfvKVQasFRCjfErNVsvVK4xkPEhn5V55aDoc4ZBrEuukPL4HN6",
  "key9": "2tBwHGUKaDj3ScXTM3JBBNqMY8Z4vpBKHvFpYYU5fdoJMrRMhnD56tcxd1un4tAXKXcuQcqc8GsbCwEuRArkRhZD",
  "key10": "2jkWXy4jxjVzzpijKZ2ht136RUi71xhfhmZ1eF46vA66BiPTZ5iZuprX4Hpz2ncJQTv8gu21m6cNcHjdCwCWwuRG",
  "key11": "2GnESZMmDvLQskoGXDQUmHeNG4JdA5pP8ZgKEUFB8oWSe7bfQgeoDxKYUDGue899yGsDgMW5R7U9gVKDLwwgB3tH",
  "key12": "3V8VyYZ9jaSE3wtQkjzWqGD7myBGenvNw2LGiDru4bQzZ1KMw5XheUSMtS9pNaTvYe4bjgvFkYFyE9WUkrXkDBwW",
  "key13": "FGcytRs8jDodcGqWMTeqyzLwyY5A58Bzic81nN9EcNSj8FjxT5nnCi9nYeLNzc9pCFWwEjUTA3DSUwBnKhuhAgc",
  "key14": "2FNGounMYyDsTSSmRZaUXwsBJnmQCWtji4NF6GaKKbmm7vERU2oLkngbnnyEDHwPZAFEojK1VxMctdM9xvRYfsAF",
  "key15": "4Pm8J7xKEXfQKLGKL2U3nzxQRayAHqGxu9Y6ktiXTLyouSXc8iA315cZvJAhnMo92ub1TzWsPTG2kHhpynYeo9uP",
  "key16": "341W5qM7unq8H8cGT2pCbVunTzS5DJ41kQqpTZY55hE9RGEJ9HzrKf3VSzVzBTV2WiHn82vP5johL1fW8Vv5tfwo",
  "key17": "4SDHREM7zPypxpXKEPyn5eRUNEECaozuzz7xVvcej4NdLMhiJzhCdfM6r7gsNJaqYsYrzmHz8XivTeEKcKFG4iwR",
  "key18": "54DzuEnQZjMwp3okLggpVuTUyXBnUWvLtoGam7SPMTU5P5rrH8KRiJPse42QjgK4q67mFBxYg5TXBUoWEb9CFuCV",
  "key19": "zcgnWtEu4kMfCZpVGaojkEKEJXqswCkMDBYqARJGrbRP51TnFjTpnVEtzdNrp5ZCdhmCCwD6Yfe99K25SR9kPQs",
  "key20": "2GFzKaBBptya12bRqwSNbRarNRsTCcYCa9BEMmiYTU5dAXyBGZpPLXRn1BHSK2SKPNgUu6i5wrQAvSVFYfHNnANA",
  "key21": "5h7MU11LFz5RTbBwvYpdSkHKohUyuHeGoTK6ip179gr48rhGuN69LCViB4ajtwSegdXoy7A1NdHQZg4eTWPA4BoB",
  "key22": "2ZsaCh8W5hbgezEm3AqKJ68ouqZbETsWW1G3k647JzGWBFN1aunkMKzFG3ZDAAMUcm6HN8nj6KFND1DvGLirTSer",
  "key23": "2juygPv9jE8jcKc231e4rHg233dTfRbbFwTZwXuuXcMWfXSGec5reYo71GuF4ecgiddNHTBNqy8ML2CEcaPF7z3V",
  "key24": "45VdDJwiFaZdAUg8YSKh3htVDStnx7sTjyThURf333EqmB6o5yTSwsvXGgyDJgfn1sBp6EH8j7q3Uzu9vNnR3XVL",
  "key25": "21VwyEDyU1Zi9c4ooyxmi2xrAjEEc5hot21VLV35x6JPhEfuMsCmwvrCYUVMyMy4QUNsBF8jFSNzwTagVdFBdoR9",
  "key26": "4i1FTntEakjhdQx1nr988k2ZyohtsfTBuXdLX7BzC5TzD3QRWsobku3zNsFmJnCtcopmuVSuVfrMAeWYYWjqbpJY",
  "key27": "vUpMR1tqT6NViiKCrwyZYJgCmdKxuoToE4mxe2bEHS2rs1LwFhj9b6wPyBrWv87AZ4fp97ASADFu69gpcsPRvqB",
  "key28": "AbSBM5jg56UhqDizQuTq9PA6UC7jBLD37jJ1dtWUCKtKznL1Pwx9hGWey8jL45o4P67dNRCy76KN8B7ZdMFMdvU",
  "key29": "5kxiKM7j7wZQoa4MPSWac6VtCnWQjeGGZY2yJ7dsnbyDGjfFQiGB7ncfG2FL4YgiKvUv3Xa2kJYeWz6nM7Fuxjd8",
  "key30": "4DB8ZSZtED4vkPzc3pQQ586M4s4yxUsQhKkbvNqbBXd7qSQHEnob82rRdkkhf66bPMsfUKaRDFu6XRSoXj87MGyj",
  "key31": "5s2BPhV2gBKnwZLAU26T9kTgHqWS2pyFd8HVquSvkqfu5zNNNU8tYiMzpjEmUCH4ZgDBrUGbf1eCd1WwaJNUR4Uq",
  "key32": "54Us133gs46Avip3U7rbkPWQuKNvFBQAZBQcA8sdTzvykHogH4LrRuNVx8YFP1N3eEN4bHYXxVYww3DnY7UZ3r3A",
  "key33": "34sLDiTCapzP4sdm3Tmdd2HAAYApAMoDDGu5MmNADYZxctYXVV93egnAPJbCaS69sWfJfpBTaWnboHotmKfyBhnn",
  "key34": "2AWB94JpPaLKy4YwWSavcGMek389TbndUeGj6G2T4CsjErzHUydzTpCNDpVebKLNuvWs1PsZ9BqwQzPFso1poiST",
  "key35": "4Fgjq2kFRg6Qaa6fBC5Fd4om3WDN9RpUiTcgDwLsZW17H8iyty2QUhspNrVrL7gsnEXvbuGSPtck1u8ZKwSgJHcw",
  "key36": "2JenhNgiBwvRhzsoywocxWi8sTBbLT8Jta5c73Rn9bRmtQEUjuVksz9ziAgGTmfDJeJUoP89uX4zPNmtKN2Fpdem",
  "key37": "3XaUfRDJtCoTLn198gGYZkfeuBoGeaLhiKJCNzt773NWXbG6CvRR7uCgNgV6LZnwKdpscmn6YX5GtAoQrWmaNr3A",
  "key38": "5CVPxTbveXdfnSPorCdNW7pserH1jRjkVUUkJtHCRzbo1xx7D6iCrbPyC5sQM9JrFfiKUqa8v5rs2MDDy4riU47X",
  "key39": "5hmbKBKPmgBqJAZpJZyGdXuh5jnUHuugdVH16hDARQWT3Aw4L1NTqohhBNjDQ32PghUFzUb6S564W3148pyeC4T9",
  "key40": "2dsbsgpUFRVZnmpTcy6XZiHWBsA8jCbqaeJRJrR3PbipUmxw9FEK3M2abzwPyAdfagR6mLDSMX3WVqcG5Sy3oMr8",
  "key41": "5uHRtKz9tPoda9R11XV9wUaowSbK7T2FMP6dxpJHzWmpwadehHjEQYf1RkhMW5v1HntQkcy5Zrgq5rb7itcCu4W4",
  "key42": "3JAadTA2ksN3mUQt7j68onyF5KzSpSY7ZqbQKsAiysoWaJg8XqnMJ45DgxNc9uQbFPsDf5DB7PyybMsqbDtWAD23",
  "key43": "41uS2a1ATz5RdmWxaRC9pDPsMjwoy2opxmxqdGER4xqHJpo3DpSygWr3ztTcAWdzthf7P8foMMyojLphVKAZgCjX"
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
