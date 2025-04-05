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
    "pdj9VYBvxdsBsZDwet8npc9LqyjZ7iZ8i5qczSYh32gT57yaPVpKx1q7sQf4iQ81p19HVSeWUBZsivqJyQm4Tgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipmNtE6dtdAUC4EqvecBkgGJPJMN4rqaMLrBFWMPJPdM6k1qTZ2TURSRmXRBLg4hrjjMK4rksQBJ6y45WtAHZbg",
  "key1": "SfDVnC7msAujc9vvQuP6nfZWUmd2LGeVpvt9dxLUU5gSRTvez7TEMetZUKCTk8BRZkAjX4GnS9ovnhAmtx33ZwC",
  "key2": "3VBAFAXd9VvDsoDiQvVbg51T3ptjs5nqywFbmmZpLivJD71VdHfU7KThQfXeahMwehvXvEp3dDd3JHVSUPvm4ft6",
  "key3": "3LxA4cJ3Gg2FSkqtvPHsd5vSCaLYbTh4mSuPfgSRWdt8kFq3394pLrxxyJBn5GVrtAiKG1HfJhEUzZpnz7JXFP1y",
  "key4": "4iVzMWVUP1NMoTEQiV3zoEwnSLphckcCDbev7DLWxnnEAMCTdxp23QHxqkGDzGBjVBr2NKU4QozMdkjT18hwg2Ly",
  "key5": "4N5ofdc28j6TRxAd9xGK9qjZ66gjYhcLs8bdwj2zPKpxUdFbbYkoUshE4eVy38jm4esPCkri6bmS2EFfxGfbAj68",
  "key6": "4V4ohRJqzEiNZCUQABmPUE7aksYLFhVzWhQWuPgZAFzcSDaGMNCUaTt4MZWb4XLo1MD2FdEmtb7P2g8iXSR8mWUH",
  "key7": "2BroBADtYb6VyauVV3ry52m729N1LohQZiyu41Pm8iavYsebvXu8Jt1E3gHAqd24KA6Na3Ka8t71WDzgjgeK3kCw",
  "key8": "5twC6ezuhta6id7nxjqQS2Nk4Ft82ZmyvNKZmiVg1LnUzubegJvDGBbh6f7Bssi2cdUNsK9fnA3PVjrNvvVp2dus",
  "key9": "3LJqLEpiDc1HsJS4WgEn85ozmF316sL6BZesz9GWfjENZ1wDFj7n9QcYfYLVzSZ5QPEbZp61V3VU4US9iqmPiv7D",
  "key10": "cmXoWrsDCVypJPQMfvoY1ogjzAh75pcLTyuP32Cjuxy3At8yUNCxc3b43PUghWY27PsS9xRA41ueJFcKqsBakiZ",
  "key11": "xgGNK77Q7eA1LASo7ASx91HTv2BHKLF4yy6XH7KGGaaMt25mCS4mCMhGEtvYEhjFAZKEnpzJ2tvwRfDX34XSBTN",
  "key12": "Vi2m5NycHn8doBLpDVtNjegoyTbTtUBhzU4ZetDcx6VJ6SYKuaHfcJbJQ3kASovvnyrESJTHrF1NopPgfYHwKG9",
  "key13": "5eHeMgMoPEh4o9dnfokWgcBpuhShWF14rakArwZqWH5mRxfFW1Yypg1NTGr5iUeD84kfS3pwGfAGwDrfzyoowSZw",
  "key14": "2PBZfUKpF249Nsdzg6bP7A7QP2N4qdS9QBM4w2L9LwHbzcgHbexxiyyip3YmUXCQq56q46LhfYLkL1ZpVsz7ooab",
  "key15": "5iuYAsaAbrj4uowzqyTuzYV2C72P4p5NUJxVRZW9E1RGuPDnZNqkXQ4tFkjXGENgC9VhACEQXQUHqLwZKPqbBGhh",
  "key16": "4BYRwJWS7V2ECtuPos2czPwK2bLQZVbDWnCAFXBeG28t2o8CkhktQc9fDSvpz5ESqmcnTPj23xtUpovff7w63eVb",
  "key17": "4xV1m9VGTYH9TBRT17Cp2rCHN77PJHQExopVe3CRAwJXVhNjxmMGd5yZQhJ2hFJ6VM65c7W17kshmyvhs2ZgXDaj",
  "key18": "59RP4jsW2zNMvCuRcye3EYqVHMM4A2RxwbUeTK5pQ2R3e6wc82eB6QnA4fnauQzSYp6NVMTkKHJYWm6CpGyuzPaq",
  "key19": "5YwQEX3vvSUpUoWMqaSRkt2dqG6Eo7gp8LLQbQ8rs47P34A25V5HmWpr6oyKivThque5ot2agGezJQLKSwM5CsQX",
  "key20": "5RjSpLNXrmzj9JXhFyJSB8HMN2PVsxKSHThPwGasQjwQoPDYwTSF3q8UWnmmMNfR7gEVuv5uqXyV56PuJHhmZ25A",
  "key21": "5e1bCZJj3x9yimiUiQsfdW6U3142UZXUn2Z63bcCd17nbGrVdKDKR1nAVnvzhMmFrybyxFNvj9h6HBLT68SEdf3h",
  "key22": "4G27u3hMEguUV7MX2vvttcmY6bKfwaBVWaScHctqW3mQi5qYWn7bnwXei4PuGWTKuFK9EoDN3VWc11eiw3WnMQCE",
  "key23": "2WTZCK3KtA7EqYifdPVZwfnCWjaeYG79kpwFvR9uz2JfonvxyNy6j8CcJKnwHe1ch8DprDGxahY8TKs2zT3D65Jn",
  "key24": "5nARehGu2iRwt3KujUo6Z5qnkCeVSh6xoyo2jh7UMNe7LjPe5QsQMgPjhuFdHa3g4XpEqdap8XcbxmcoTF2rgtoc",
  "key25": "4rv3ZHiUZE9CJoh81eH8zoxcRi49pp1cbiWyfBHerPvtH823htdgagDcXN8nM4deKJSZPAAtitHCMN1EzNncuP4Y",
  "key26": "4EXceePbTBnkYcaNt6WjMJ4zzRaouNZJUxVjWDN13fPrY49k3vK1wVQu51vbDDGEZHS6sowrAMmZiCGi3cHgXY2p",
  "key27": "2kc6iaQtL84JVziULxDeeYPY2UqF2KRqYJWzsm86wU4WxmRDx7GMXPrfTPnWzb4sxJMKRdZbgsrtnRQS2EjGEABo",
  "key28": "4vhA6WET5EK9XgJHfXJNCmKijd73iqCV6tzDq2Y78CM69sV5nTdBgmwEmGu83sqTj6CLau28BLmLQXRqDRCTFoAZ",
  "key29": "4AzVGLrQiw3tGTEv59d8FQz73pk7VSk7JhgkMoB4Ex4GZrzKqx6Le1gQHCx51r9qdXFFv179EZK5hf265iYRdPQc",
  "key30": "3LRkji2S2xZyXsqjBxmLcTnYrM62X4y9TUQbgiWkK3Uf7AAdVWCAKE9KrAMpZkC9nPr6qhQEj1XhcLJoVBUG42Jr",
  "key31": "5LBbEk2v3K7MwWzZX5fYPWfELNVcrxDA5djPDr6gXDFYcgvCjzaqdwqhVJ8H1BgPaN8NKHTQ6d2c49L29iHEUEU2",
  "key32": "5ktPitHwiHtPYG36EWp5TUQdFRBQgj3Ba7u3WBonx6rngErhGYscNV3fvrKw6SUJ8n6ijpVPmCx299hmYwWA4G2f",
  "key33": "2cWT4NwmtRwXYB6aTBLdg6G7teeR7aSWyzpxrp9FhnjccNj6PuY1Mn1XT3FZ4qaLmmbMbLUSq17JbfwvcQ6PuoQv",
  "key34": "4rLLHjM4pSCkvvn2mNt1THaZ4tjsfhVUZAXJpkoS8pTCJdW8JbA9xorohvRUppeiwghLuk5BZ5jHaDduBHHshH4j",
  "key35": "635ZhWJH8GccrvNRkeS9XH88bb9YVbvucSRDLk1tahvEihBVTVNJEkugNuZMXaBNkqQcYZMnJcGgL8XaQabd33pL",
  "key36": "62G3bnGyhBTfUtSMjWXYxbHXz7b3EYhsHB482KG5npNsd3A852LJBvQpdZGEgY6kXrEM4CUddqepTXEurpyjL72V",
  "key37": "3JYC3kyzjteTVA2eWGyeA97gXH2h3XJoxdtbDksSCpHWnBGJTZd8gGaAztNB8a6CsX6BY163bFHCofLxBgsJMhHH",
  "key38": "4WsZzBvVpGsZJvTn8WzJsFfMbQN4xbs76qsHtP4cRCSYCMasQphZDkqiU42ykyHf2a6LHsXbb9u1wX8KNXUeQcC9",
  "key39": "5u5a7Qghc5mtQkdHXWmaGRPBpCaqHQgX9RfWydBiFv511Nxb7CqZHhep6Qu6CVFfDmtP4nDYQRexYv4PqYxFHLnu",
  "key40": "36yWepXEyw158QLLJzGDvjZ6seEDovrko4UsQtmtHZygUohnoYRkrPL4RJfJ8LB64JVQZt4i3txzKHaW7DoTh3Nu"
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
