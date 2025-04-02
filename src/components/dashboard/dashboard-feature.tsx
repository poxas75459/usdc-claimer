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
    "ey8UrvcvRgKeUhPewSqYRzjAffxEzu5ouEY8RHFMdqS4XX9DGkhBKcpeEwwQQgQn9FBekEnTmgHJCjMd6K2Gng5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dgzgkST7yVcsX2pJVww9k1RQNZC5jMYsjG45JXeQTjki6ZBLY5PH9YfXX8yyW72X4ghCG5hFRtUQkU66vYeNb5",
  "key1": "5ayTMhkAZWfXFjYrnNDhVnHTLs6ebFZBGBg2LeN2oWve2d2pNi7yyyhhrMWzhhS9zAgcJS7aRipmAP25Lb5mf5C7",
  "key2": "3x4U3fdeHk2KEzCxBjx8NMZPFywsM7LSNyKx4knGmuEGSBHwvHa7Yw14SRzBbaicJhgTFYS8r9HGyg8mUf9B7RpG",
  "key3": "4mYihHMx3pDtKp576RDMADe6droN26RE1HwkjVBzbUtwpaaRQ4o42rv2sy5knYEozqt6BYksYvPGBxdk5bakW4Wi",
  "key4": "2emgnZSXcG1FRs1XQEGMCAqSQiNaEJMNfHcBjFpQeBFj9yizBSnPtn1XqqbmXFf1HvE61AnNBiXrBLeXopWHBy7Y",
  "key5": "4ADaJH4TAJc43W8ijdLTeg8crUxQyBd2Usz9NCDLTSQ4vsawXs6UPaptMB2E3ruKQUkhjKSwSmkb7qSC3PmrbppH",
  "key6": "26km959aZHtSC5SSue7AbBQY4AfZVJhNyTmM5yz7mFr4Z6NWGTywb8k76u4oYMUo8pPS9zExvt7BWxCyztZCw2ev",
  "key7": "ZsiKktwctB1Se4DJt4zHMFNcNg7SR6A7pBPbWhiESYeKfTsRiNZ9hpUWMNttLmt5AYmkEMiY74LKqLYAyVq4R9o",
  "key8": "EMgLkEYLDV56hLDfQvf7Vk9w9FFiFT4nyRkP9yoUZPGGMsL6UVL11QE6cr2mgFhjAJbyLYRToT5d8ysZvV8HTrY",
  "key9": "2HstQsg2bNibZhLBzSdFoe4ye4GwtCAVGSvwd41UuMCQezQgHWHNoUvviHjvbDLNTQDtdy7SpaZmAPyZTcjyPCmr",
  "key10": "5iM1nLNkys1pe9QP7hZDnTQTp9RoVuJTHMudBkepB7naQCPyoabRCfJoQRM5wm1Dfn1aFD3JWJvZFBsWm3SdL8jV",
  "key11": "ibxHGSFfJjv4aLXHTpCD1g9gZG9oJ1bUUMRWswZGzX4ZjzgtLcT5oUXzaNaC5kQX7hVfa2cR957oLHSXTaR2eiv",
  "key12": "4wDPcnVb678HZkbyUphMFxFBwQkhxJW5PfoXwRoYtA95CbhGEwxfyzxSdaJSrYSxQ2D62vuw4YUHhkNB8xchVuEZ",
  "key13": "5uhNXq33Mt9c1DP21u9Fwb3b1auuZZzeXG2v9BAGEksPZX6eJRAVKLDHDfzBHijTVguuXSCUtHGnMkDtxvpFhFw4",
  "key14": "3WKdoNkX5izsXiDVWMstNYC28bsX7yrMX5jaudDgQHSVp6q7xiTveHnf26T5fnodCpB4DgTT96Z3F6iGadczTKnY",
  "key15": "4mKcgcCTiTqUqsd3Zwhcq38RymaVEKo4vjT9g36AqiVr9xFk64u8hNgm7sZPkUQLhiZgMzjWQraBF4jwcZRVG4SR",
  "key16": "pABohBLVKkjA8vvf8mgjKDc24DENS1seCo6EPcnebBZWkRbBtwER7bFLz23gwAyowWQMmchHRWc6Ktt7nYDJdmW",
  "key17": "BYHphB87WVRkFrb4gWf9Ey5bBbi2CTSku2cnjBcMuzxRhBT8rTXceMG5QqzxemhcEjZfxb5ojU5oH7mWGnwuut1",
  "key18": "3QQ2WeMQy95mhsEYpj2orGafV4yHT9pY6xEdQnaTSmnu968unCq1WKghgXJgUge75BuTrHHqqtFuBKV9YrBZQwS9",
  "key19": "2juFkJXFp1LkocWxmjjfm3EaFr3tW34GG3UxENGqfHo8LE2R4iCthNYdyYtCFL2Gy2j1GWaEuVhYRDwXcyftBJxb",
  "key20": "2munzpoTu4xW8J8gs9RNzdZw3Wzt4W7PSKg11brg2FTYB5bgjYrJDAdvmync8mHnMhKZaizYGwaMGeBzuqLmxeQv",
  "key21": "2pWDRa7p4zKi1tUN5h5yYQkhQwjFAKcsD2cwZfAG8DsqpWzusG54U9TKD4jYmvCTpDNuNDPSGB8ACwpHeFRBrBgQ",
  "key22": "4F6SKjJSgdo41dz72ZBnLvKQpqnxmRf4d6HXHxPWjXu5RJRRAJxLZH7QYkfJMZhrCw27phpiU3HBnt2iEadAnjNK",
  "key23": "25QR46MLugK4js2cxFJgADLb72Faz2dTxTN1apC6ZsyfRQSFmsdn1WJScqRiX77oLNkBdsfwtkH3MfnUiBXKqCQs",
  "key24": "3wirxBbRkmeJerdzREYhRveLpnioB2gGwMMxGpe2XCyNRBSrPgHhWAQfwdLTfGU81hCASKsSFo5B8i3RaK8VyVub",
  "key25": "tg79PXg319zxVhktiBH4WPUfcQNnSJbrE7BgFhPQgqgChQq7WdqsumYhU2ZLHQfeLoKbo4kK2MqigNMQqtRqxzm",
  "key26": "5kvtqbJjqp64yp9QKyMoRxmuQNTVKh9nimjT9De2W1qsWbFAEcRF4Nh1Gt1AmDNcaZkjE53zbpH9zAtmvSeofmFq",
  "key27": "3Vsn7LsmxdbtXBKNgGDE2t5nrE21wFfFyQcUz51EWXqLDfpVcDdkk9mPA8TFd7U41U614pFE3mrgCx5YyiWAppES",
  "key28": "ZApExfB9VyFgVPg4v9hToB3ybsnXrGd4ZMjifpB5rkzBN1L1VVCJWWeanEfFynrXTGZZnHftz81puC82MBENG7q",
  "key29": "57F6o14HT6bSdVdSi94PhTctzgd8poULSs5N8pN7S318yjBE2ECNEQUPdYiVsXQsft1iqChCKLaV6CoA3r8xWZfB",
  "key30": "8QtVa66zGBYKRAmSsyGhubKsebqpF5MciX51AZ6EU1QqXs1xdgFos2T13DDmdYEJdWX54GkcCLUdSrdp9LMyHtb",
  "key31": "sCVTMte8CM689NQTbHk4GoJo4vahcizD9trmRPNTHtVfVujq2gBBe8YSkA9Aj8uVyaYaFiiRbueFcm3TVaRzPVw",
  "key32": "2bEk1gVSZYaNxbmvoHt6mnHURZ9XM6GVvgSR8cb7Rj7e4hJqFGgFmN9AXeGjvE1pbYjwrsGZ2WXgYVZeSj5jgk6r",
  "key33": "59VxwRhnfGLm6zWg9avcfYimeHJJqGUsuADSLMZdeEjzxpkKZQT8CJK7RvnWYKgAKuq8gc4bif753JgQ2GxmYiby",
  "key34": "WknvcPWS1isL3CXa1shDcXFf7sxPJoRFLfyuLW8s9ichR8529Nq4xNbN3naRzLwgRmQ4TPhX7tFtntD8ejuC26k",
  "key35": "5MiphnopDNgx8prJckFHrhjQrFFPoeJWcxZCkyqKvn2xK3nhK9BG7NEzfK2QdyrteUMGLu85VbxQMd12wjpvPoyG",
  "key36": "4anmny9s1igGt8cCt7cqAUCePTqMx6q2SBAZntCo1d18dQwxJcVaszG79qkGKeWeNLmGeFKYMosUsG2L2UaMfcw3",
  "key37": "5HVfB9UjsodsAQJRt31kLeKVBoJUpfyLEQoDb2GigvRhbLNcwrFRuST2QE8ZX6cHsE1W3fiMPs6QUBwYYVavU33p",
  "key38": "3C5ntSD8bwRQjms54ik3peGBo18WzkSBWZzcKgN74vkEq4LPKkqaWN3BF5WmigmYsfck8V15yZ8WToy9ZDVBpVf6",
  "key39": "3m1h7AnGixmDra7cYuDwFQjwBk3gaAcD2nkdRyDQintMSoWg88jPu5bNrbHF6bbuY3aEZU8tk7QFe7NahmpKev3S",
  "key40": "4CGxarTJ8bu7p7QxrVU53Zddyxjnfop3BYEfQUEEskRVe4PBZGuNLtB1K73FNwStvcnGEXuZfuJTvgUYAwQpVDcq",
  "key41": "2pS2mSUre2an9WsGdSK64hBNmzXKF3wWM12HkVLmMS8tyBLFSy7ivg44fW1bwv9NkdLFUqamLii4iZ7r9btndAak",
  "key42": "TvnCtsU6HGXHMUssYq5y7bqQxuiJKGSofdi1g4ZcnwfUwRMZCvEKuGmCMiM1WtzTADAyZixx6YEtNh4Uhvtp3Co",
  "key43": "H1P9vsYgTYmFhp6PipvjSNkTEDxUGWS2rmuhMpEkVV7gXAQJZhkQ1zJ3T2KGGSvBTexwqXs6qVWWsJKQcrC5TY8",
  "key44": "3SJxj1QU7jdLgGupXGo9q2Nd7MYaAJ9AL9mVMDCnHBdnMmhie2sFYBTPYYNAJxoG2hNTF2mLswQtHA9yJkgmSn2m",
  "key45": "4RgFSBD53fGwgAwG3gqcLjGKmtbwxfVXVzVJKUNLqi2Btxi16ezUpPh1jXSHBiSefZSTV8vMnyhK6SBH67Frxvi1",
  "key46": "5SZzzc22CuBBFXqVU2M9xTJkFS87TUxpm8qy3QupjeSJJnXTRKM7YAeMhUzrL67HTVqgYtGJmPZzLSU8w9sTgYjM",
  "key47": "vtUzRDPzg9eQV7jAE28Bkm9aSx4QGD8XzAJyk3EKBmvvMwXHTKryyrZvT9cyJhePXr3mZDgb4gjrprugqaS6oxc",
  "key48": "4bTZq8dGj1AyKrys36y1PawJrsHa3Yez4KaKU22PVAGpyQQXT6hB3vpUzyedubZy58b3aWk8GATtt3LbVoce4m1d",
  "key49": "4LG6VB69y1keKD8t3ARPwJ2oTSFu9vz9ggopboiUypPgyPyoFH5fXefK9FjxEGJVhQGYUZRPdkaEcfSaRW9cbA9F"
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
