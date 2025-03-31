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
    "4SQ5T42JAn6ceopGnsoGsZKwFD6yVMjsaTaXm7BZLK3qia5ZnhpAEUrDKmAAannGZbAtihMouZoBe852LdT1ZXCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCFCGxcGMiyjLYLPWRknNoBWfA4CHf8mi7AMyMdhwrY5M1DybQ4NC29BRW8TNGbuu9UME7hP5m9j3xzotW6okNB",
  "key1": "5A3iLC3qcH6NeVomNbCfF5fxqzksA6cZnCfh9qRiY5eWJBL41snGhD5dEzcduLWvAAcR8V4bpb2VEigH5B95iXHN",
  "key2": "3AawDiSMhgYPxZ1mo4yumJTctFv1sNMVscjt5HNHkzwstRn4f2FEfaA7q45FtNFdpfSKYZSgMPmy6A4Hizobp7MA",
  "key3": "4mYfr6ekk8mFsRA12CxzojFB9YM5NwCqU1pdDsoh5XyTTHg4AUbV7dVpZcKiKsmKoA5AXws6fjrVS1ssULfHFE5e",
  "key4": "2gtMoCrmiEdBHmXD5HWfBkek3k8YxXxgmETrrh2x66CHKytMekzNf5MaN4xuGJpbBLQ3ChRYVsLftUv9UqbV9AsM",
  "key5": "56Mm6Rkc6sciBCMUxCSU2Han34Fg5bJkgSPgvB64jLSpZfpfXKuN4wuncPqN871LmSQWNB2dgsGCtxankKzuqF89",
  "key6": "2f9kFzL4pi7qKrCEJu5cF7awSvS3uZohjMiU5nt7FC6HRGY5DYcAw5CsnVaQMJQPkbwgJKpqtJw9xL3KxYa8Hssx",
  "key7": "2KvJ2k1uu3eYFNLdHKzTvHNyPAm9gsFBFV9dBTdEJWKS7bFmFabamxaQ58T9d6eTSbDA54uBrXtAJx7qGdePTpwF",
  "key8": "5fkcmcMWmEz9AkvNjJutuXtisxraweyJEPbxTMQFkVGZu4NYMAcgkzYZSFfNzqQcCpmGvkziCTv1D5G1oTnxALid",
  "key9": "4pfcqqZG52ob6ZHefqhzpGaNgSj5AUcKxC72RPJN869uP3QwmKbeCK4dkj9wmyQBy1Kpa5JoGbA4ucz3awxiyrdW",
  "key10": "3udJxPCZRsSft7CSggReqmiwbPubAqqnhrneF695xikCGrpfQp1HJo9PSm7QRDt55miRF9kwtuqd9ggbWkrpeUAS",
  "key11": "YvXhUCgJq2yz6cLrkNvF62V3weDsKdNpLVaLH85nkrsYiZFtd1fDEJUZvSjNumQRpjauGdgNtmM8fiygdVXW79r",
  "key12": "53AJEd4Q6jx3BhLCFiHgzAMNUXiJwfVUbtevsrahPE9RiYt9hUbUs9Zy9xEJrvTQCJevTMfH9wZbngXpD9y4njDv",
  "key13": "53xNVeSf4A8kQHW9ZjZr5dk4T5XQ6RAeUDEqfhnXf5se9dYZzZPkeY9T64RTKPkBjEGAspYGokqrVNBPm4KGdH7i",
  "key14": "66CX8zrjEYpT1taMzVuZbPnCSwvTmzvagUuNaMf5CkBPzUPyohVHgDQMNKKGo8BR7nTo5qHWgPfKNeaYKnmA9t8S",
  "key15": "4HCHhxWi8ugKrBh8cLpU58rQv1NNxM8o49qJWKvPahXdoKXecDdVJG6Emy6jWVijoDfyhNSZY1U2YDPussxAQzSg",
  "key16": "2S4cRo7QuiZy6KkdiE2L57L4ckNeUXh6iwL4PqdR8h25h1cK8t4t52P5xb39DMekWcWJMEwBvXsgLzKtQghZGpkk",
  "key17": "5cBgHWa3Feok6cZtt9zezXwSsjHDuezLSu5eDvDfJKJT9Sd3cdrCa9PBPYgJPmqHPipghqnbwa8BdayxTT5cLAGb",
  "key18": "3CwxwXyn66h9Ab9rPKHPNB7anUawZCSvKYeDMPTHKchxXoBWvYM7TxenWk1DAdxX6x1yNCWp2qKAeNWdpPaBwLGE",
  "key19": "rfhk8pdd7z5H3imLVas2qSotRC3ivER1cdth1FFQEHaQiSak4VHgAcmXpinFuJ5XYT3cvum7Hx7FKZMzbcRznYw",
  "key20": "vURf9WdySwmUgxpFjVc65e2H1Xwmjub7WvyTkiaje5S2jXKCpoyMEsQ3JP7vuUMHUVPLN1qvZFaj7hauFr5sx5Q",
  "key21": "3vimCNSdGVNYj4SUTRcqRSBm8fxrBhgPXg1C28Fm3EbbReHgLsSTQXstZSZZ3dcMVad11WCZg19TKJSgw2p18AQw",
  "key22": "63jBTM5sKHKKena6YqjSPCXv89544F6c1y2os4NiCyGp1K85MZAiS7Q13qvAakSbb3wxSirLuodffCN6Zg5pdNxc",
  "key23": "5uxCdRWEqRENZ981fHtPtYBRonHPzfX4LcEcYibugLyY5MvAMRW466ZtcmqxaPK4K9zxA34Htd5fNLHJjosbsDvz",
  "key24": "3hzL1wYc6NpfNJcU8rfcJjgvTg8hAZC7WiYoVBek3M8Dijivr4yTagZQEWM419mifQB26Gng3GNvaEEpsbWTNMhH",
  "key25": "3ocCU5txtGpNtsdfD51XDrwvfGEKsLv3mdjBz5CsJwFzBZBuq8V1MNg6qwxoGY2YVcT1zc4umCEQK7iHBs6SnZAn",
  "key26": "6c9vATvhXFQGgd9Gq4xecCR2dbsjizjA6FVnJyiuzMc1Pk7o2BetV6U6CEjzE4JyNye9yFq93bc5QVBL3XCCF42",
  "key27": "DBcdjuJQz1n5sJPkvNu5aEBRLvGS3vNSWbczi4oGA12APeS5yUFN5zpXZy1qvt4gUdSpkypH1JYy9xb1BfzihbB",
  "key28": "4EnLHPzG2GM8EA9ZJFUzQmosB28CruhJbQrHcxHgk633hESprYCntZA8of6cJ4yYS6LVA4qivad76JAE5pgUyGgT",
  "key29": "3Gq7YqHVhwkC6Rr6BuHXCRW5sevQCXqFyi87ScWtYX6zKWJF5uzmuAdBKUQQsCUUK6avo5jhhMdJ59Dotz3JDsZ1",
  "key30": "PUXjvEtBnNfdyu1rJvr5pMo2gAq9KMCY2Ag2zqk1eznsiZ42efRF6yHr3JXtc7iLybPMLHSy8kAkE72zEwyXzUb",
  "key31": "xirLZFpeTcG8DP3Y1gfexvUQymU76KtpwLvFfJdhh816GwY5gfmgdNjjXKrGjEAQtdhn7ksFzkW7oefKsr84u5r",
  "key32": "EEtAvwAmzQ22fctJcac4XX4YsBXerpQWPEkK1Z5YSoUsbQjz912Y9iqVuy65yDL2tYXUQ9uzDXsgDvmKWdMGkFS",
  "key33": "2HQ2TitQvAwk3VKAn3PagrwBLTT1gQAnnAvc7mMj9tuNfu8hqiekgDxDefxZZySSBHuLr8bmwwAMngSgKdu8FzqV",
  "key34": "2G7VV5rtPgZqtYpC8vpNDs9ZzNufFCMYKqvMkomB8onX8gtQsmPTYzP6qjsKqDDR5ChNNT6qQVodB5Ktng84zvsc",
  "key35": "48eSZ5uDcpqZVLpviKzA7aVwiFPDtksNsdJQUuZrj1spbTqvznX1zBRYSKCemhkFqQBzFggpBfz311ERHiDqUtZc",
  "key36": "2fEKpEEH3Mu1uNQ72b8nU1zmPSQvjeJzGNuAgextqCTE7u8sCk9yt9atRuiSav98YMrhLd2cZ3dThCw9mP6TRG5s",
  "key37": "5H8wrLnRmDg1ywKczFqn2uyquFVXQesHVCW8j6uAdF3ZtTEEstEtSbQaGyJ94xL2AbxnDqMh2rdGJukSU3ovbmm2",
  "key38": "26WMB5QJRXbQUt677ZeWMPYhs55Qxi1bvpd7NLBgSNT5sb575zHGCWD6JWLX49c82ZsgDSaUHzZg1DCsVFVu88Nj",
  "key39": "MgzLyFYYP2YXhK7iGMemNpnMTL4uMLc7raWEi9CVy5HGEY4JgVF4LzvXxCWr5TyAiEudQuhdMv4LKLim2cckQ2e",
  "key40": "42XSm6c8tLmzgeSv8q2ueRSeQn5NLPNv9msbZ5MXUxefWTAguHemP5rZSQMguRPRiv2CL5e5VPYQaZFpofkpa3WG",
  "key41": "3n54FD1W4SLVWXrNWRMuMvVLRgPGASkohC7j7xDkKtDQUH9ZNSHqUyYfZn11C4q3qH7sa5uxNYe43GaEvqBKcc5n",
  "key42": "2kkb2DC3vBcpXF2HKoAFDux7eo4LCbHdvB4b9EHUoNqnrVxNZLpnXp3QZ7fMKfFed8SieQvbp5uLZyMZELa2hsfs",
  "key43": "qQaLidmVbarJRWLmLGzjyNdzavEfbDBvXVWahCSnJ1R33KizWrTQKpvzZTzupsD7hACSRX3vKshmZqtFxCpSSMj",
  "key44": "3nr3mzMGqq8RXM5bW7KbXdxsuenSXihwzFA9W8AqSvFUphqMi2MAdyUWx6eNdTXbA6fj8nkimmUKnyaFcnz7yHs4",
  "key45": "51taJwADLytpr1e7u6g4qy3WpE8Jjy7QbDxV7QssUUyTBC5fJGyV1b1BfTPdMnSKWjhZjkLeKbKXGLtJDVD3LUhy",
  "key46": "mwjX7wFKEjo5SNiky4g3U2swgk4nm96sJxLxPBo3kkfsQtuZL7tZcVtfYj8nzEzmJAyPnq4Czssp3ufkGUsc9XT",
  "key47": "2SJVT7oaM2nk5i5YS9ngYLtujsLbm3oFjFqWTtfXHyTnYZX1wyPoSGNVc3CjB96Vytc7Q7Hv73rTbL5SpxECpE56"
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
