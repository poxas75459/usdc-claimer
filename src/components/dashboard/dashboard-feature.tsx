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
    "3fhncepiijxta4bapatPbTBsXFrS5rZHviFPE8c35qsajHW93wpZPp7bDyDExtceCXACr1Shx1nYyGVziF24ajUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f4ECxVyKfee1Mv3xQ9NbA6jMsXoandNv5QX3wpJGQBpXuLPg7vQLUWqs7CJhu2JDc4AzWRa92mzdVYyTXLtg3Ya",
  "key1": "45SCPiWzq2DN45ruNXWVC9mfLuB5Le756GSSubXQDtSEaNbytvVZcGfEQHeweLeJ7TVuWimg7yc7SM8v6PbkJsVK",
  "key2": "yptCd7wxw55Sexwg5fePi325BvZsJXNgk8XBFyGUjg4vdEqDS8X9fuCMV6JqgEG66vDDPdHmoUBUh8kP4CPZvLM",
  "key3": "P4zNy6WZFhNHke9WxgdYeLb1D8ck3yFdHv9qHfqGBi1zP1ZGWLUFNaukCxDoizt9Mp6qCSh6SRUR7FNaqdTkeTE",
  "key4": "5rJPb2j2ioUTLrHi5DUfmxtGrFpgeR3szXHmWE6xVGv8ot4j7sLQah5C32AJPRNEyHENS5HaiBtDJcafXzdHWLQK",
  "key5": "42rZBDy2AH78Vq3XkRHmnwhV2KSCouR8xirbbyuQ7SBisq2TbkXmHXp16TDpuHJ8M9Mat48n1EmXQjku5aHpKfM2",
  "key6": "WZHXgnDZuKsDepirYWhA7i88waVxVSdAVyEsxWtphdr9AoDgPRvna8eiycJiWpn7p4MJoTBKosK2e944EMz3Avp",
  "key7": "5qBfYfaa1asjPExjKiFocPML2jjsbE9Vot5eoKYSCRjKUY9rcnnsDCheTwUCExbZTQrLC85LT6xwF3xkBktTMThr",
  "key8": "5y37xrPeya9JNKPkLiNRqqsWULrgy6nWXGn75zeeDNxJhAHMqjQEykbWKabrugHmAfw3uaZqjtUYRdbaASUHQcT9",
  "key9": "5jdoTrdx7v9xLDYzTsD5XPi5Xqd1fik74NeGcQQCKzqux3h6jjQEHRsbv39dV6GyzNTxWw86zZ87eb3vuD2ikAEH",
  "key10": "5xGVNx5m6jSVPGBGMFygHVpJ5WJCfnvca4asSmviswVcDbEHTrVEueNnR2CHhJyM4ZNqvfk8DgWBFLmU77WCQhUk",
  "key11": "5UQ6c9t6EanJvwTthTHgrZvR6T2ctHpmhy9SFC3udgPkkxuYkPpW7f7oKWxmtim5rn1Yk7zceuHY75TeYFkDj2Af",
  "key12": "3idVqb8hJeJfXTAtyzzmyEJq5ahx6kBMryp96buYxpUjVXS1xkTiCbL74C1NqjYyZdTnEjVDPmNNmkbaTD2iEe8Z",
  "key13": "5LZUcq28oiNske6EH86VZtkGyX7os6Mu6jMhzwr4NnLcirArq5ytBif1TA8RySYQH8xENgvt9B9DRjjZtaMDduXb",
  "key14": "3gnvusvHtS9jmPmDmwduFykadYU8ZhwZA6k7E2joefs5PDfSbUcHyfo71AbzN3PMtNCrihi3iuU7skqeZJwi13vi",
  "key15": "3cu8BwJkcmfYyuNUtxoUbCAwf2iHHajBVhXcVFScxcJnmhr95ZJp1GbKzgyeqir5NdmEZm1EJvAaE3Naf9XHf1XW",
  "key16": "2gQzEdtJh21eurkeS1YKXznBRe7o5FEq27ECWCrnxmDintMCDLJZ1fCrDHqZPQ5kEifrbCwzkJVspJzH4aJ6Pvud",
  "key17": "CPADhS21YtWqrZ6YvxKKMzitdHPre4NPdpDhSpE8utkGUVSKcB9aBqAFqG3arkLKSTVbfL7asZWFQfWcdsH96kp",
  "key18": "5SpuNCgY1UtaQZy72bsvLZ6pbzskneniVQcT3UGHmX92EJ6reM4sB4HWeZvARWtjwPyanJs5DgfMG5dApB7Cv7Sf",
  "key19": "bt5oJzhJyGrqPZuPLggUWaKGz6pTbkd6ohFMws2tyyxGd9ybYzVBtvSVjF9S24Dobc9Y44Eip21JsSM2ppwCJXD",
  "key20": "2ihojL9EaVKxfRkoGUNTZTa4jMVGCLVaxpDXvMuzsKMXsyokNRA1TybUj9hpv73kr73pQVbLp5ARFw61FnQvttw",
  "key21": "3La929NPkHSfYs2iX42BAvi2kXsQ119wo4egmwnkL7yGdvVSyeJfVTVijFTkBp36i7iPhUtvCWBB49EFQmU67kvR",
  "key22": "277ECDtXqLghWD4gQbLRucK84ZwFLcuYxbDxTH9S3uS9JJdopkkc9TBQNkEqddZ4nCEeJnk6x3NvBVqfxmQ2GCUp",
  "key23": "Cj19A8rnsefoT4rw16g5nMyoo7zu7DJ1jQwSYHeobkrxeKP41QszWC4ArS3C5nukxBa31B4XvDAHPFH4DtJ45G8",
  "key24": "3gTRxCLN9saDcNBdi2G1VA6yBBVGHypdoBuAn96jG79LfCEzFZxdJsRp8cB6495hCRQgeMK8VTfDSHXZY65bAiZv",
  "key25": "3fnM6HFYhLbDFRu2AFUb9H6zpyjb16NVSEMWhrfLFMLYxG1Gbq6HwA8dYRfttJb39nADGVEPh6ZqNRiqg18WDwD6",
  "key26": "5D1AT79eXieqnfRTgRcYEjz9Uu4bv9HyaLnrg3xD4kqxtV3PQWXowWmfYAD7brrjfhgM53yjeTFguSsVQ8hgznoy",
  "key27": "41xS3yikU5vm63Q3ujPwLh4HyY9EZb4gtnFGTGXtY3BJ3RHTmLNCbGAYYhNyoD1GvxzAPqcYBGoLGT4tXcBN9YNN",
  "key28": "4VTa4teLLTbQ6SR1iQ6oGd5wAT7QfL3gdzWvLppBGiCGke5g6ki3tVLEdqj2k9tYbr4KTtuTUmP8iSsvNFK93Vos",
  "key29": "546LAgp2TatczjodFWCFKWJq2ev8bqbS11RpSdK8CsuWv6R9uLE8MPzgr2v5WbxAMB6hR6jaVwrW3Q2v6LfCGDnL",
  "key30": "2wHap5PDVfjMwZL2k32xyVao8x8sFq2NmPHncPqXEvi8dCJY17Cir1R5fjadTo8TDDa6Vh4ivfZRb2qjnRmKGRve",
  "key31": "2875Ewwv4UfXEopmuXG99Z6MvpkCvdAD5p6GdD7hkxSUcakBj9YTT8Cxhqqn8AyJHsCLQM4qN2c6PUYkBDDFVEaW",
  "key32": "3sPFhTAYSt5V1u68nM6RrTVJTzsot3ZrvmWG9krxA2vNH8M15MrP3E85Mhb2fnDf8CGLfTVBAbpWktpan7GQhLuY",
  "key33": "4gTyrYPimM6mN79wHmCrUywDpHhDtGdvBmmzp3ipLcJhXWniJayY1fVuhTJRE3qHTLnr9ryZnsWxeGxekjenmT7n",
  "key34": "3caZPCodtbMvAPUxkeB6JhpAxeLd9971pXgSjwNenyZ1zz2T1pHm5mA8v3bDy3uBhExtwF3NhJucVAmEWSTNBj3S",
  "key35": "2QWLS6v5PkyDvJ7FWakFnnPAg87eydzjp1XCL7rcSN9HzzJH8Rw9AQNigPSr9ib7sosZJFb3Ex8UockYSU5EKa3f",
  "key36": "2eFZ9dTyX9dZJnu88HRfb4c9wZeyqWzWPad7U8dnE9GoQj1cEzLyEsRnFhCcQrfh1vbY9KEWzBueeepz1WbNoAgK",
  "key37": "oyoru5HTUk8UjCSUnasNJxto29FmHUXTBCrmbBN9RQdz1gk3u9fPnR1UD5TSadiooHfCi9BiC3wEMMhBb9QDtD1",
  "key38": "37irAS4G4UWf4zWHSyk41WAiCudZ6aTXrRoa7Jc5RV6yVjUy918u6KFnUPV5LvdPUtzsyC4Evb8Rohbmy7D1ZovT"
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
