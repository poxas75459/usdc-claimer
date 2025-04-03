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
    "4EhLYnFA8eQSYQLKfAm9AGEtB1QySG5A5A1v1McmmqP7qZT3jpErW2bLc6Af1d5pbhDiSrH7cRagXxLimV9Mctrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdGgTh1o6JUjonJR89aTRNXsjhjUpe19n8oKqJtbxuLv6hmiKxqmq416g5dtn6XKjtjL6TojiRdDgVqgwrpowrH",
  "key1": "486pMzjLc9vfGi4Fw3P8iYBKDqjSNN5NBCmq9bDCsr4f7ji2xLwewSaE7cBAxprQ4VJMTby5cBNvr4xKP729VmPj",
  "key2": "btwSN6rnrB25d9XCZv1CW2c6oKZLnaSWanEPnR9kgEK2Ya9BD26SNJQCabHhfht6USi9CA3YARNhz8gBFwGGpE6",
  "key3": "4MqN57igQkUDrmcCDzXSPDKWFunBkLsVr1U97CLmsyu3XPCYsrg1ssm284srx9WEi5wrWZ2MrzT34nsjBhBDiKJA",
  "key4": "4eeo5Can6uxXWfJG4BMUswmMrJgPR3suTmgsQXdui72WadA4BK5JtvgUMH9LBkPvUTPtNaL2mEzVnV7JcV4ZuSeJ",
  "key5": "3kHqzsx7atWm7ph4iWufNcr6Dfoq7aYUxyxPCNF83z3qFMXPxnZh59G33DoSKELBeCyYMWfTo2dffTuzXTwTScFZ",
  "key6": "4MbkTuio4dykmXi4XyUVLEc3QsTMkHqRn2DQ2jJd8ckT7QzDMFTRonRVX2oqrCTBmkczuCTX7A77kMWtyz32KrAL",
  "key7": "4PjSjzB2torTmD6SXHfwTA2KnsmaCBCtKDzk6Qtont5iTcsda5FzSHa5Qcv48eRMz2KaaJJ7sTyE1oLCxyvFpiiv",
  "key8": "3t4ZWKi5yvsQTeye9pD51qgJ8YvCweLKka8dphjkJp43MJmBSBVEt2KbVoHAJ6ufSim4XqR4MzpvnQ3nTYTiBoc9",
  "key9": "3ufXZvuMHAQXvqvoiJbYubtTi1J1ZUdC8PKeJx6YkXWXKpdxwbr21pQZFNpASAWiFJR8sr2vuYrV3eTnxyVFcsgX",
  "key10": "2xyRSigtSNdhX7kFCmepAfdP7mSbLizrqB9f2iiiFUz2orZZgafvng35UszKcgYR2NcGishksb5GetNjefmHLKcs",
  "key11": "cYfbzwgj5QEFTWkf2TFe58gvRNu13FzgaVG2Lnk99pVMof6bGqU3T374ZBsStrRVuwnVq6twueyTaTUs6qdCcy1",
  "key12": "4MZ5CmbwXf4zyxGDYjhxp1iN4ingCKUtyR5ACmQWu31MEmW1zDXHXpo37Lu6eTbjmv5y5WHRpwU9C2NCGX6gfQ3c",
  "key13": "4pRWVhJGvKXco5NnPBvj61padLNBp3QAa3R1XjmRMB3qxGaho6SuF1r9KVFKAt53bmSbZzxSxeaogNqpnvb42RB3",
  "key14": "AAq4Ynr9xw8aNuhU889C5LN8D58y1Z86iQ2T1pkSrQLQupi89iyuXNhiLtREnxQmrkJL3wucqnG89JPHFutr7Dn",
  "key15": "44uwXtUrfiqRYup4Pqv5SornikdEA58xrZYmvw65GByzZ33TEa636eXA75kuy3sVuPRLH5NaoHy9nDUBZhtDEhzL",
  "key16": "5S2QKsuJvjkSQnYaUkk2YuASPPbnn3dGuD4MkkTyDMWas2D6kizbXMJL5yBAcBwKBvHthrxd76qUnJjHKiDjEHnQ",
  "key17": "QD9grgNJdvjkYj1gwyVkjnM21tr3cxpqbZEZcRsxkeKE9AxVXC5Xr9vm8fA8n8CEUzYdirQ7VegTEQFX4S3uhvg",
  "key18": "377PRuNArbnYyopGMETg2iFvtKnahYPTSbMizdZkzA3dCLrXWKWVpiDyZBLaV1iU5zDTcCTrJrStwbean7aRQwv4",
  "key19": "4j1NB9Ht4evyrk1Cg66Na7jiPkSVM6oazqozEbBRc8JMQNbnma8KuEb2rCW4etJ5BBYixX5R8QyEUbz9sHPKUgYz",
  "key20": "Fjyd7fck7AMDanWNhYRSvoCZ47FiscXA1qvJP7gpo838JndJYZxxUrQPC1jfrTpkAqQK9Ew2SJh6EXYTYHhK1AM",
  "key21": "4mctuvzzEGT9jZedh5dhAExrZ2DGWES7PDQQjbuXwozaLEz2TGo8yvwA5NekhwNxJQTr6C4c6ToDMQyuiujeEcZP",
  "key22": "4QxdWQuJJhGdMcme9yh9R3fBKEhyX3Qd7ZzttkotnYp2fKMwmJbEcy31Mtc7vMBfuAQiXooaxcVjspy1MrVuiUtC",
  "key23": "eTkrZRjCotPnVHPBTEUkJNuQsQKVgWDfXJeq7uHhm9RP3dzhhdPrBWrviwPM3M86tEjiNxMX7Q4NudSdtq1386V",
  "key24": "2pgekVQJnv9QCLstAD4vCBKf4SiZoupYuJm5Dg3ZKFtqT528mjw9wMCsrau1pAMUfayKusJzGqEUzZvkwG3fNZc2",
  "key25": "5NUfDzRPQnX2t9axqntbapixHkz8qXifjdF1GbfGNGrGyQJg3EPey3G9nfAnRvff6RhJREDq3ow7WeugM8XCp8Kt",
  "key26": "5Ry8WaGFzfwWTDHnTN8hsfWs5LqVxDdtJZkiJtgcjGqzCu3WtnLP99gxLtBbuyozXdfX4PKTySg8K2eN8kSKzSR",
  "key27": "3u6njjr9khTRf6dAoeoUnQmF5NeGoHaRtdXETWLtZPLtPaZ5NQNXeAgwyoB8pHshqY7hpzoFtbbhtzNKNV4sUh58",
  "key28": "2iw91bYohcLCvgYCu2rJmSZcUuTXFzZEqEDRMDd4cQoZGbELBKXvDCLVDdygVm9vnQ2ZJratFYRfREZ6siaUGEL4",
  "key29": "3G7c1CWn9VBma3onGbkgx9i9cWdRSSPmqWC7xmn6XjoUqDMuvgKzxwtHWNYiCvBp4ezp9De5nxzh9zVf3BuQ4jUT",
  "key30": "57UheuUSSvHwRhpMfmNSW3H5CoYo7Kfcxh1WDRezLTDsYtpPojaypzcfe2XQr741jH3qX7P37L8p13S57oagkyjg",
  "key31": "5EScrFmszqx7wgh2DTRJgE4vXy87JZw7vMtNHtcnERmeot3gasJTqWCQ2wD4GvtnQ1uLsBEDPJZU2JZTWpnujyVn",
  "key32": "4trtkYbQzHz6GXRnUxzfVEgx8C5CMtcuNiTxNLv8F8FNkHe6R7sQaWwMtgyR6renhhKHebERdFPo9WuQZqGsfxxj",
  "key33": "4iuqEDNqFzRUbE9LbMH4nnQrYh8SponhJAb4GqrS4We4LG1nX9geUWyJhe1QoJNhgavWfZCk87ipUfoBqk1pDz1U",
  "key34": "61UWPES6VgKeN6We9kHcRkHYA2aBVRo4iumX3GP9YD3KyQ7XVERDPJAx5A3hVbAWe9XmBbS1Ymtom4HRou7Xks44",
  "key35": "3WvoFq6fk4pLxExjoBbcHaBjTejtHXwupy5H3JeM2KDQUN7JQrvcBsUJLAvDGreSrp1HcM8BgqQBEUTjqVUQA4Pv",
  "key36": "3528JtR2j3x2CMfDZM9G9vBfVKsNZdEz2jTkpok3vVjkjLiLpDNn5evphauAcLuU7vLBKSoDmqkrDH8iB2yH489b",
  "key37": "4iDrDvW5cGuhDru2yUrxgZXFjtjpG8KGhMQFUkSVs7e7kgu9znXtQyuFmoyPGVCWAVPopXNZyvuaSRLEqAtMtWuC",
  "key38": "5DyPjwmJVVRvUBwJ34PeDh1DF3kkmYNoUNMfVckCoPocC9NhBSjUpKxg3sWkNKN1Ccbd1cJz6zPFvvWtaRLSRGMH",
  "key39": "NNyuBHTrPK7kSRoNdS3JsbrjnceFnTpwBy7XnAmzPCcP6Pk2C1zkahH2oSfibeJdqVkz9R3c7FLUKswoMtvkPgt",
  "key40": "3H12CqJjxgHgV4Ar8iGcjmVxWwvXJJbrjRrQA15R6T5yfnvPyvicZAyrzjwp5ZBetGMkfABtdL92xbkAPbnpzKvX",
  "key41": "5oWcepSKdtj9VUxsjtmbujNvFpXfnwL1sL4u4gHHyxhanyyzFCE1jcU2WYxL9TE9huCWAQQtw5VxL7kwuLRGeSzz",
  "key42": "4Rwz8apHd1Cu2gX1a5PYuBN9HrVTXKUJ4C5ZJouCCx3j2CXAqb96Es38m8dxCNwDxuxB65VKUNcMoKdawuffvSwh",
  "key43": "5ZbmCcFqPYWwgrP2cDSkRwRGtSKCLTQYfZpZbBuirLM9HEN1DzJARZHwwqtwReuu99Kw6bM3nvR9L19obGQ9cbxJ",
  "key44": "ssEeoXa2gwbRv5GEBLXrGWu43M6yfgEvEFip4XNVFei6kdqokhhiYzBXHDHLgM1DknB3JZMW7ZY6dywjtC65Vgp",
  "key45": "5fhhyjDVajsVr8AUFBPBjA3kYFrBZRV4AQyoomjAfQttRpwT3FhxXztFJvGHWpA1x3HqrR1o3dJYNQNHVm4EtK5M",
  "key46": "SbsvffoHzqMw91yaq19S5banTjVZ6C9zj4uLLqD54VBJxWKf6YPBbKCH8aRAAoCer32DuR4b1qKwhfzDTJaD15r",
  "key47": "pj5d8KrMe2VEZqwvN5bZYeBU1yqNNAhDCJjuswfg6e8Marb85cDt4UwvqPwJzks3DaxBzCa1khTF794YHSNi4SM",
  "key48": "2eHBhwvi7QdgmCF3sqvTxtTyVGVu6WL1mamTEriyt3LEexSwsXruCy1vcwHadFPVaN1SnXWgFQdeou7uQ9iXmCsh"
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
