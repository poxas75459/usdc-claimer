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
    "4oZPhut7ua7WuJNq2PvNjrLmfwo6w1iMRpyvD131uWSZtdCg96BojA6XgUGVYMwFqWdojbFkNUdJF7spzNnpVEoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rriA66x1iZmHuBrCWxbt2oM49pLa1vGMX97cPZqBwmkmE3TfFDhebzEvVdbhKZAQW1n4PxTcHiHaseBhXCghsTt",
  "key1": "66MKoPJfJ4vfLVQHBkfa3bWcdCAX32TqcrdSgUQGiBoHGBxkjhpNt79HvhkgX96NksKW48sYqQcEzsVJcQ6ahZe1",
  "key2": "3R3nvSJoB9FsVxtjp19Eq3jtMzu2VsvuWnazKFrByqTaKJ3tx6L52t8AQLZAirMnRoF3JpKXx2KyLth5hTdGBJKn",
  "key3": "2LfXkjeyRWzJTRNtNFQA5MHvVeXAR1so1zTUfRR9cqGnVwLzA3Pwtgdmc228exFwhS8KP2LtCNqBdzawVKsPXxTF",
  "key4": "ZciZ925jTt9g8L6vJgUeHFeRZTTkcf3SunJqnBzGBihoETfGFMFCt1vuEyC5LkLjDU2Vw92WyhQumcxMnaWw8Gk",
  "key5": "6fLq25sVsEBqTguyoCagZ4sV6NVWmi2JrhLXEJoyVpEuMBs41eSbpz52wo397v96ehiPw12mJeP4EixRKot4WWD",
  "key6": "jPWzP1xSuuAHvYcVFAbkBcQtz7hZHSET5CqYiLGGPfaw98qohssX7LUux2HqMkXQXbzoTJA9YJhLBADVqruAMYw",
  "key7": "3UoKmdChTeCCmv8CimUjvjzTPkWXrmLNLUzQo1GqyoQHzyz8SLatDFABCrCnyASSGH58v9UAdwmyw4myXR1VEtPe",
  "key8": "27a3K9sjLqo147B5CZ6T87YQpjJg3Xpu1maYr8f9DZpUd5jbjEkL8PpnL92w2gUvPLtvvV8h7r4SeVn6sxGdjXr8",
  "key9": "4er1aTwAnc3CjR9fh9hQ1uvaZfc9WA1wwriJFmS5bwwP2ZRmZXs9dynVmJgfw7ctiLbJ42GxbR4g4ELi5TKJfP18",
  "key10": "tDmCVxDQTe6sEgbiu22f3335rjM8RdmNWypiRye652MhqSZxsY8bNQvcqREmQkuGdMZQkcPH5wFUFDbKtute8q1",
  "key11": "4UwCpaw4yubM2k8Hs3hi8xej1KmEc31GhaHV6MJ1urdK7ycKdJ4XDawD8Kd4HyG4PKwyUAhAoyreVokSUPDR1QiS",
  "key12": "5brrNuc3GnHC6QLTFz1r5uzzshER6ckJ7KJkmQFyb2kedEjDNVKC4hdYjXayRcJkMhQDZWozJngwg4o2aSf7t4yD",
  "key13": "5r9EwERYEEeJkvF4AxktggSTQXZrgTC1SQyW74N79tT6sxbpSWTkw78mp3h4yK1BxNDZ6tHCt3SdN2SgB4Tb2M19",
  "key14": "x6TuJCkFc2LdZELisnqJy56E4XTDm9pYX5rdyy841tgbVvKf8hyt1GxjtaWhXbFrtWTrtP39out6yLhuBfezuyZ",
  "key15": "3Gnc8xCRU9JtpgX3XjNbXRpZ1qgsYTEy71NDTmVLqtiV1acGTdc7GgWt1iYLfiKk8UMeaSGqZtWqqzoa99M8P9Vj",
  "key16": "2rgc27nKbpNwWtdw1ULJqHtSa8hW7ze8GkQpcgbdRnLZHx5te77kbNzdJ6NxpS7E6Sqh4RMmxyoTpkb13PZDDiff",
  "key17": "4mcBzk4u7ypzPfwCctMaG3B8xdipNe8JsjbT76v55zGazNPyoCPVmBVAZHbmsuDSyZrAAwf12UMTT7CTPfwSDXCq",
  "key18": "2Gfo7pQGQADP6zYwziuDP8gmXyNizZ5DS26Lciq13T6hMP8RyjyR2rEwhAr4W499ePjbjuqWMK4C8S7Uuj2WaDsD",
  "key19": "BSEFR2HPKVN5NqhyG9J6pmKnEP8U7R27xe4RRURpHX7xCKEC6nP2Y4LuHpTc2Uo9h6HwGTgqbYibtum6vre4EEq",
  "key20": "4B5KEpP2yZigfzZWx4ye2AqEMp8A9wCDqHKW5aasxThSYQDgndfGtGnvjqa5vFsTNLLR56P4LZXdoFm7wimm7ndq",
  "key21": "5eh74Vz6xyrn8xBGBou4uQMxf6aVE3Q7cFheMx7jNkrFWeGJcKwJXwHQSFtL1CdzeY7xgJxkLUimYgAbdiwqFtLG",
  "key22": "cKDeLtkghoqXw4J4yR5FsLmGigQ3Dh4wgmoutchTEWM1UKx5mjfBpXvgpe5Bqr1ni11P71idJXSgF8rnFChCwS3",
  "key23": "51Bx8TEqXKepMoTDAYmn9NDsQzqqLCZpoXrijJWMJ6nDCsGyYmq8PyhLVpWK75ZBvt6ghoF4qJK8S1fa2EUogv9u",
  "key24": "3jJ1cxyKq4R2LSNgnLDg8PYJHPiNWZYX3bbQJhfQEiRn1mTTUPH24iMt5aE1JqAsWSc18GmugnCWU6FzyTqf4EsL",
  "key25": "3gQjbKr3SJ9RytGMFEDZ8RMq861QkdpTCp4TNuWYu5d54LDcHXfrDHmJE4WMX3VF77W8agm2gEW3tFczYmWGpZg8",
  "key26": "i5jLoYBJBLizzPNFfaKDBwuPG4j1WaCcdmzmvMAnWKWFhLmTUFAhKM21xEfU725qaTxMDpoBkmFZyeHm2P9X7qT",
  "key27": "5R8hDwEZLcemUDJyXUofBFzZGXZyz8ijzLL3VaPsQKeEZxR8wTtDdszLvWsWXDM38gX9xLDg7iTTqTxyuwU1qyWz",
  "key28": "4DeaaK9NAo1p6hYWrbd2YcMDBhzUf7v6ASqyro4Kz3Nv3Q6ThjwpE9tkaLvkETQmN1dpAufpke2ysxkN3DZLdc5M",
  "key29": "4aQjpL1RmE1NjqjSTohshLrbZm7eKiLbhk5ndqH6JJJg1Z5Sh1eKex6QVyr8RfTpLGe4nHZ1UhMrmMM7vfaQLUPx",
  "key30": "426qRDmQ1XTsDa569k1bBMDbAYVPUFCniEZJgFLLdTA6pSS7VogcN3FkJW2jZHhD2VrQxPdzFtSbbBGDawHHsf2d",
  "key31": "2XMysyWUkEaY9zpxzKXDGrj5p7gjWhQsc8gvvkPAV9ULQY2vFiU5o2QW6cikX9anzXQHTDrsMXK26YHUn6b2bTBz",
  "key32": "5cpS5Y9c75vsuefwK7oWTLpMn9wG2JVRpMzUGiaMZuCbqhWwhDyfARvKWyoT39ZJwPpgsUnGj8ead9gZVNinPSGG",
  "key33": "NBjiNGVdy11ZBZcUHxFjEDmcuHyWTToe5ERodThYTr7KqgaomqGn23E4mJP4FtiiF7R3k43ximXhu8f2cRCSuys",
  "key34": "63KpZKRoH5aGVDcEqLZDqYShm9gY7a4z3ZKf3kcP8FwYM3u9JTSjvZrrrhSSQhApg9XmwyjFCtr5ER7n9xHW6RkP",
  "key35": "3U5Vb2oAsUsZN3RGew1twhKjGqhx7DZZ6hKYuXQcof3wWCxuZ1Z1PnWKpFbNz9pjxwLcvSfJvqNVgpztnvzQc51p",
  "key36": "oLUCPm8AiozyictPe5QbiMHMfGXpmD7H4hthZ7pNC7vqHYW8GopJftaWRyRJLhPd4LF7i6WrFthUoD9qwtasLig",
  "key37": "2nLc2g1P8FNj2U1axCYg8tKU9ZZZwbeVhCkMiaRTxfEET57VsneAkmbyHcPv4b6NDnsmK1RQwXgMxfWD4fCZKUp",
  "key38": "krtL1JnAey1TYP5FTc86FMwuZN9nuWmHMXgw4gLbrDNixzrEe9U3k514f6xo2Yt9qwmqZLNCGtZ9noHVzWPEZYc",
  "key39": "FQm52DEbWAo5ZmT6szRthAyxd9Y2fNBtqM1mobnCe4nbVxWMWddzBHLbd114vr1vfxjhmoQ7EaKsfeCqP2dKiXc",
  "key40": "2AGjaLFbBZvXS6ouDgwBHHfzCRawKEwfB5fXW6uQnPn6Gm9ZzXfrRgcphmFM9GBgjmLHCXHBsGcKFSQAJPcUFsav",
  "key41": "2bw274Mj2poEuNmdAenE4CFFbqwvfMyC5b1awNVXTYtbxhLQhGnZLSthhPTfNdyuvobob664SSkbJizCSLfNmdj9",
  "key42": "5KJhZdwPUkgyfwVZCDAyBKLSX2zzTVGxNDdK6NzbRGiyZxYjY3NcpPTiVL94ZKZ342gzrjB6WoiXg9rMGXwAoQsz",
  "key43": "VWPXhNvonsoJ41T454mBVEci4xa1QqNgj1giwoa23ha1zDa9EhZ1yCb2ufsJAEwGz61bBJ52nmhV6CYQQjazxFd",
  "key44": "5tHFAmpzstRcGrzR42tcgarGfh2Ss7DEkxYEoZWg1mdJWQTQaocMmDn3Ek81SNXKFj3MFapQgu2ERLsJJUpiHYTU",
  "key45": "3a9XEhuNvKSJVsJogD2jHpVzL2GXkLST8XSPrabMUCVhC3LmY7WTYwJNQWaap4BpuEBnhL4oDAgiNdNWpAFhUEU2",
  "key46": "3oFYKiEwJu6NvvXbsNznezbGYtgfQ8txFdt8adL4ZdZy3Do5qFb4WKenDoX8kHqy1HicjqLta5h4mPf9LZpSExoX"
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
