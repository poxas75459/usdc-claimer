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
    "4nKdAA5eEbMjiGDxZoESZKLeriCCkpZNoNfR8hXb4JAxVVgA9V7nNjYQUhDN81QPRgo3myRfNBgHjQmH1GwVgqMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FqufNm6jvVE27bMnrpnhd8JiyUAGUCJ3Vd3cFtez6cwCK1kgcJRJpua1UwUsggA27ocRRk6HDEgsJb3xum3vqGa",
  "key1": "2dG9MwwBWyGdkfjRw9qTVv4agNJizAvJJ28ZgZK2WiKWPgPNW66eQcMML2tJB1EZ8pEcTe1XwyqiDYNM8XkMGsKt",
  "key2": "2WjuBnsoq5zdS8a8nedQrtcU4p4N26tMsP7yseDBP3PVwJkkBgEonAyHM7M4R1fU5SCLTfZrrQ5qVVQSpDhZtCKp",
  "key3": "4d7RTL3B17xhZrLBE98bJHs48ip2uD3CZbsBUTP88iM3A9uTSZtDoZqbKcQSthWnV6bVBEqM135zrx3t65hWdubb",
  "key4": "4baPdY3zVUEn6YthkLGtPELcB7L6oUZkewpsXm8LCmwgLkmjtGMh6535ndocLXyD26HrYJkTy8QCpMyQ5ksJL3rz",
  "key5": "YMZd8uRRBsUWVRCfg5QejezCcU1aPkLFghDHSDP25Hs1itWrwvUfu2UkfUgZWZQeGBBUqg3Tn23sfncjrdpRnB7",
  "key6": "5dUrgmJgQU9FDFAP8pLPLTdpfv8F4py2XosudTaVWck8nmvkgVYSrgbih63seGwBTx4pxvEsYASVpLjYf6VjsfBN",
  "key7": "378c5WEVRs7EBS1XWrqsqtLW3uPaYKUnTc7nrs6NDPRcoQxpaqu3yu7hVCkjWP64fuMZ49GGPL9nWvwVFLLoquMb",
  "key8": "5NLw6M6U6UsxGFdHBYNCiP9t7mEJXhC7cthQdfyQvxLenPz4CFaqJmBuSU1WNzx2MTSn4i7XcMaZ96hK2wFhFCUU",
  "key9": "4fntNJDWXKKfxGyb8qb8BL8CBJjkf1odoG2vFftYAjEmngaHtedNigzwXvpsfLdsJidca7BANbGPFKkRhcKJvqNe",
  "key10": "2akoCMBSEmmVz8BBz9CbnTqe1xGrT7xS1m17q9f9LU1gWWwThXbUXKoFMaMMyDnbAsDMqvcabMgqWBtbLUZxGZPU",
  "key11": "2Pwd4WzEu4LrUzC6LT4hGVcHf7GjRhF4yM5bZkzPdoTMgSUACyQJ6siZfhYyYJ6L61scPC31zFd4zqSRS3BbRNcq",
  "key12": "3zEZ4rQ5vRBFJuBLuoJFLnafmoBne87Bjr5ef6mv2pyJQaPZfw8dQBuQWjuM3UG3nEW6BTB5rYaRcXHvikeN28es",
  "key13": "xUpdE7RWVSjgGRkQCYqJ77EgQKBN6ktZfT8wrGDfp66NAoyTBuB4KEkoTR4d3zuRcGGqXsW7qmFF9M9QBEWYVAh",
  "key14": "5S1km6j4axct9ejRzcsK7LGziUBz6288gLu32y59rrh4hM4qFtga4C2nzRcuJCXFMNFu8y6oYkTC15Utp7xAVCUB",
  "key15": "3Y5kmSQVr7jpArXwQT3BvjLktdSUzrJdW7nxnBxQqSVW23RGMf3rVWyPf5ryCSMwiG5PZkwJkiGZHrdkN7m3YRHq",
  "key16": "2jfpUPkQWX8jmapCkvgHXtmKWDCY6mvw3YCpiRukixfCo7BQ8NtPjedh2h8X7sgXNyza6Ww9q7NLpuEgmBt57L2H",
  "key17": "5K89VQEN7xxP2f9eVs7zDjD776Z8wxSBk3y3uAvhWfPvW3byBrjqW1hYd7Xyfd6y4ux5fyRZLeimXay7AU57f5vE",
  "key18": "27FL72oZ3WHz6GnYfo6JgbFUWX4P6X7yRFVAzQkatQg5Xu2BczaVkP3TyAq2EtbxLoDHMU5tNVyk6TctFPPSse46",
  "key19": "2YqeTD5axFrgyubAq2rgLfM8GAzG3N7CTjgzGgYzXK884uBAZdXhg9sdpmm2wQFXKW5BUV22K8CS5x73QMyF5nWG",
  "key20": "fqjHRWHb2yRHvej8XRGxDAC9DtBW3h6jAhfYs5afsgniXEsbpWPWUUyUQsxDfi8PNPUB1vkbf39G71xWjwuZ6qA",
  "key21": "4MmvR5ey7fYB9bac1o41kmQtmUz48KHzGWYL95ciQLQGMVmTqivwaapBFPJCnPzdVmT48oMUHEyEMjJ5q2pJ5xFv",
  "key22": "SSEiLpbYfQ4PX2puEDxJmA3jJw1MYKEQhm1vTtMwMYGzU7XLB5A8m5ztypMzBSa1s3fcBun4d9dsToaXbwUFka9",
  "key23": "4qDvKv46su9WK3gZ58jN1j1DSgXLbWVDXWDYPH6qHMJFqwdfrKi7bwN8fnxytC1Zqqp7hBAz5DkmiAWh5XfeY5yg",
  "key24": "41XHPyiEZc9kCSQUwRWXdui2S99dAGXGY75ULMLkN9exhissEFpaa2fc3Tr36snLfxs7aEW5jyzAsngj88q5rvKA",
  "key25": "45xEuVaot1YiQ1irfz2sdTjRjLZQs5QReTJeLLvDyewXG428Y32r8Ttzf5gSBRDyQQ2XCDpJRtYtTawGqNT1Ay2W",
  "key26": "5JKQnU4G5f9PTCdmeSUiQwRq1A7oN6kfQNnqXh9V8sqWQQ8uFEqNM1JUq7pog8cAxd6RxqVZbjHH81CuqYukFvMJ",
  "key27": "qdyi4q7fZdr7qDAryt83w4JUoECv81NecZKB8Ra2ZyLJeS6GPxW4nJDNzEApnvANouGqsSoZ3w1DZv7WkcxjuHS",
  "key28": "54HUCFcAV5TAigJJ15JMezZvYip41Acipq2Z82bjBHHkJyUjpDfRrS7p4LYGHSq7vsrfQkSY5qJc17R9uJFk5zao",
  "key29": "3cZSjh82jcqEMBhe6odtXZ6a7kSGpSdUwBnjAmxxQhZ44V1Y2iXB5D8LVxaaji3DHvrfSp6RKqihRSZacdP2wUY5",
  "key30": "4MAJsLdJSrtB4mTsBJeZL1pLJdm6tYJHqbVecavB6jRYueqPxQtMAG2i8bXscCLwF1NvDXSQ1vpQe4qMovsQD6yb",
  "key31": "4WdqcgSxGtA65jwcg1EDywRQ6h3BTBoU562qT8Q7FuCaBny14jbTS9kWQfaT9P77JnKHY1xniZNa4RzxbiW9bST3",
  "key32": "kJikKcPbvGpv5kTtpaqdBhz1ajayKTmm8NCfULmdofXQqd2ADn7JLjg6X2jLAPWSukdaFsMqBL1Zc8R6H85tN1X",
  "key33": "4cB2S6iKcKZUasCBmmAudR4SAzZ9srzrPMyfmweeASwJovgSpz9bQodQPetBNEUuR7hW6CBKTopsLcoNc3Y4W5FU",
  "key34": "1Q3miB9L7pE7fPrcodYKS6XKeubava76SeyyVxSB95fmkW7rYdreozqW6bfm8isrHXwmmgGLtZNRKHewJbpNrQm",
  "key35": "U8CEhrSTopHuBruxDyEaULAsHkTUFV6uLDqyBrn5HvVeBGKKYXjbkNMMdNu7cwSnYu87jnWGv4XVqUMS3vFN9h3",
  "key36": "5rDFiG57GQaNTjG16YfGa5bvQLhACkp78JKP7UX51vR14s1MEwjbnLmcPo7Arg1RgzErkatr4Uac2s6XxYuN5omN",
  "key37": "o3vffhauTVUyiz4t44tZYTPZf4dH7Rh4Seaz8LhENrfuTvoxhKBW6ru1wQym6pqX8Gxc2ksw2866KLEQKxDwdJn",
  "key38": "4wzHmbrz4uvmdUF3CJrgdkAtgxbqkZyfk2M94YFek6hAPfbxXu8HArSxJbtTEmUBXP13iBBfRhg2pmwPN6bSkme9",
  "key39": "8KYSwztBtRF7VsJBGhg272UdAZ1Aic7JWzHfnRKTkEDiDd9GirhFxgACvbF4nejmoSBoFCVoLFsgugqmPWnAWmw",
  "key40": "5Z8CcJ5TDpTZFyxK4KdcuiAsDdWKiYiAeisZ6vf7JQiqb8vYiWrNf4w31FThHk5k21s9wzDCpnDHYThKbACU5zET",
  "key41": "3oFmzdTHKLsxmKTeoaEV2pxzmGRBMdLFnxgCeo2Kr8MKxWuRwNHQFjeNaLGvfthSWmuLU8bGuZXLLjbJSfcnfKso",
  "key42": "4iU81DY9iqhdquztUUBPj6rpDScZR9t2bZYvTkbfgmUFeCfMtWQNRMwYgH4MbN31S4SfxWbs15FaK5ef87bz6o9e",
  "key43": "m7bjWi1FBiVUhUCVWwmVVpDxT8v9Mh3bd81XKW6HKa74NXJZnU2ZT8eNbhg5TUabmD8L8sNLTiB81pCDsuX2sUH",
  "key44": "2U64PL5M9z2RwP5f78AMvyNWS8K1wFHu9QWiuCH6WNNAz2bKCKU6GwacyeFMe6Z9EQAHkwNa9PPjk3k75S3PUbV5",
  "key45": "4vpQ81e29QCAjW2r1ZubCZwy6ejugALDfKZHUCd61d8gpyy9zdqviYAh3ZcT8f45n8W3yRE1q9vUdYV4wBWTRxkk",
  "key46": "4i9PKgmwGWD6Y9uFzWwSKFxEBtMr47cxk9w1hh1vtv9iRbvp4JtYKfhybqPh1qSNpswpcEjt8NdjBKKob3LNWegp",
  "key47": "3QBKDQaU6e8bEbTocMBENQmG4i1jbxnLScogPB3AaBQ9tzrJAvfFpq1soUiuvC8vNHp3rockGCvaRqjr4YTdME1j",
  "key48": "3VYTJBDBRtWwcofESM2kA76v6tGSuAx9XayirAt6UXF4aFSYS8njawuR7g1iRbHvX6sAezvwS95ApMsfVc19vTmX",
  "key49": "xvm64itgoa9nse6Hcs4CjmdnyyCrqrS3HrvdrHpA9yMDxmmLwNkCv5dgRcKKJyKHEhiVFbknAaiEYyqboi7q9NP"
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
