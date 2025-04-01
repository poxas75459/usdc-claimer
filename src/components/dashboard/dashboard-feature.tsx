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
    "2x1j9W5R3V1sBZJVA3CocPjabw1Fiod2TwZffNKXo9cp3opvdq1fZeSjga6Fo1M8CJqG7X65EzceVQvSZa8K2Qko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JzPjQyTqHyNYswkp3zi1M4GJ6DPTiDqjrCVUfnxn4mdKw4iBx5u2Jzi8iu1LeFvL25ojBGaE5vYNK6QXNYd4dPq",
  "key1": "5dDXawWk78D58n1p1LNDr5JhwxGCPUopKjyYaubeYoJGrxRqKjh7zagbUFG2PvpocCmQ1fX1YP6hh6X2g7gu3XkR",
  "key2": "4UUDJhJj6WVRdMyZ9jZobcmENW8LFeH64sL4avR1APyeZrtXji5QpkGQnj3bmqVhSiLAj75EKpTpEr6NdDAiuc2S",
  "key3": "3nAvkzUw5eNJTNAQydoUUnF3vDbvkYbaAqMXc2cThBguDhFBfd9uNrNTMWTRxXa7S4hfYtStezK6ru7mvAiyThbX",
  "key4": "EPoHSqJ9DzqA149pBJSYp4RiQHrMEdA5baHEYi7D7yU4nG854WTqdG4Hdg3pPwvTwwwuFbdNW912dyqfkyWGFjt",
  "key5": "576PBqmvJjgjpLerwgnmuob96uaKL6dAtowsQKAdGyDppqmoRmeCmrKDXUET4kKPr7rwfqhxShrkLF4EgKGss9Bk",
  "key6": "4hUXPSWpgewY14zwiHhY5RZUqDj9bN4LXXkb8K2uregSbn9NPQKNNiV24EsvTjdgxtKv1ArrQRv2q6iUav2RU6b6",
  "key7": "52t9zwBo97tCBXHSwqC1Rn8gFmi8EDNu1LU4B57jBSW13FKQGiFq3nLRWhczmQcLoZUL36RQdh2DVpizFsDmFHNU",
  "key8": "4L1Cx9jgsuNKRfFqhWEdJqk9XFbQbsY145MCmxezTcvh7L79mGdYJChdTWGzKFDSMGfaACsFrYQfETVbfRSr8odX",
  "key9": "57EDpMzzS1urkty8Hv63L2KC1YkH82iPfuZXZ53c26nwKGHjRQQKQMM15EhXkCt7Pvd9Lu3SpSeNQNgLQqphf8Xx",
  "key10": "2h5ey4juwuyJ8GXDCumVFV15m1AWoQ92PL9p3PeNawpjPnhviCxJtAbuwN9YACgNSi884YGVUDUpXCPFkdp6AWyf",
  "key11": "33qSQLq9m6CrPpFNupuRrhWc6viS7npKvGGfaEfeAs7rh7LqJfMYXKrqQPmhWkp1vptaNp3Cq3KaSykLYtWGpSDZ",
  "key12": "35qeXjkgu1SMfqMx7RfM5F9AS24KDKCUPfwQkLhuYe9ffs95KBdedhmg6i4pvpYR8QriCzH993argJoKmQbkrfaV",
  "key13": "51nedKr9NH4dJb3BkuofXjq2rvqukEsfrNKK6FFFXAmyfwjLwQMq7FokZHQWNRWvrfbdQ7u3DfwxudkigvF3UEks",
  "key14": "5PdbkKDmhtnsG6vbrdRdBNRMWhW7X6BhjuJvvtL1owzVCLJW75M3bXpmPjM3uvkf5DCDwucz8udHHqD7tDk1f9fa",
  "key15": "3RFr6SiFch5gxAD7NjM7Eq57SbGzZJwQNvC9gCUZKA3vdxKxbc3L2nmUdTDrZwTnpEE6ppP4orDoeXEcY5kk5Vsv",
  "key16": "3RUuURiRf4ScKS6aQ8wUTF3tcte2ZPMNfFGPWBS3JN5zJTLM6LPFyGe46trSPbr9tu1rE2cnQBbEvLd3mVCoTV9L",
  "key17": "ACxF7SgQa6MHLBH9y7MzRoYCix5MU7rx2ForSKKDEG9GeNA5GcS6SC5Yv1zyP7FFs36uK7ECQzHmXPch7g8bRzW",
  "key18": "4GgnmR6EcP6TqfQumuqcPJ3M6MsgVcoWeZi5ENWHKVusdnA8xFRhPbwwJChkR34E41JjYE45ZApNnRWJeFYbsV9Z",
  "key19": "pXB4Ma4Htp3iiKd8zkNA7P1oYEUdKSJBsXUsNER2M43xn3rkzsGvVDuEGAZxKtMs8RvvwfAtoARxUFmRVr1hKKr",
  "key20": "5Ff8GCMCsiDL9Kuv2cC1k32cPf6KhsBYzK6gL3MwUEJZ5XLh37oLrurQzt3xmrHKKiyB7bihuVMZVd7m44hFn13f",
  "key21": "52mgDrRFb6QS3arictkx6yScBw8Zjw8G49QTo4C8472HzdqqCQD1J335Wxnu9Vn6Zxcmms7Buyr34aMvD4HQwq2U",
  "key22": "2JBxxcSkL3S6Xbw2wxbGPRPxhs3KRhpfmMkpNnYTyfGhYB3u3zi326owKy3g3V5sfeyMzyp86P6XxXSo6T88nHJf",
  "key23": "2mq5NrHt3n795yniRTV9onTorcehXruwTWuBh7VTmotc5ZJwLsktaLdSyE7MfpidUeYaR8skS2hgZ6U3vK7H1YKZ",
  "key24": "2bP5mEQRfLc2hvyd1nn9fVMjaRcq6GWNT668rPL7UbWKjqWqfScGDNYSwjWfkCjGZ7qRqCwoFHqk1tB4YiUKSSHQ",
  "key25": "5kHuWDXHuaBaYJUBYEFCYk7SsJqukpjJKytRHc1CqcpsreqzFxBmHWGDExfLQraWgfTiauwCFtz82RnkBwa6r5Be",
  "key26": "47SwncQASqkkiCTRkAr92nJuRJ36LMPc6dsSAf8vDfF4cxK4g4Grfiwn5pyHxsTquhNRC9AszoG7WZ1f5xSPAYod",
  "key27": "5iPnxd2tCBnjQNaC8JwijYxgte3vXfMeFMfVKS8AyBwDqmzPzcTuDWgU7he6cxHUtGg6HsMhJZuMX3rGFeL23G8m",
  "key28": "49KWAtQqJPco3nkSY853hHyZ5XpJLorooNrNc9GXx98ZgWW6rnWnTbTKcB2h2Cm6Ao7WCLTmJpAt44uB7QV7mtRT",
  "key29": "Jh84wyZmBJVYAjJtGUrXZoZG9UFh2fxr2i4yupVxg1VJkXC29QQ3FdBGRR1byYn7HiQBaVUqY3Fvcr6qFNL2aVn",
  "key30": "41uFQSJ4XxAErRVYXefgmFGMniiouY3oZFcNkysBww6hhXonPYPuzdpEKqMN6smsEfaDpq7Xkzk7E9T5nRzgqmSP",
  "key31": "fVbFowZK7boK5spWvbyLxJyPsCE5h1oUjq5ri2gbqw1MVoEs1BSveHDafEGuu92BZAkDzUTN7XJScenupeBrGaQ",
  "key32": "2j1zD8LSEMxKKt199UkzHbJxLuksiieQxgmbU8JvBgYhgiQ6i64ue3FjEUmEhcoct9WYtwy7SrkmcaA1po9fk4YJ",
  "key33": "53BmfGpwRRMMjiUE2xQiZQsqj3ywqRAF61rZwP8eUi3zQpL7kunCjo93xQUdBhh4g1qDyF3sCnoMw2gkn3DSngc3",
  "key34": "511ByPK4HaBGbf2eRWLvVYnS8F6Px59Sd8HZnp4VuFFYiXxCASCPQt47MpX9LNrAsSdcMMWQkwUCHvnZ5a9nXFux",
  "key35": "2FYJnMQmhjeP43vX9U3sPzXw6ejZYxBR4KV6PnVHSfyu3QZ5xF6jjVBpQG2mvYDp1uJ18K9d38rvzWhju5zu2KDN",
  "key36": "3PJVhztGALVwdrm6mW1Xue45Q5XfMC1yzaqWmmjyR4g5ZzFoP2iCdsgEsbRQdRaXJT6pA5TKr9PwBArrEPfukjsE",
  "key37": "ifsN2TYjEZHAuZbDfaNzinkBdVLYzPnRYmLgCjAduEAdU6m2qu2xHwGjHE8jFunKyUWMhT1yXKoWBPDenMLTzCZ",
  "key38": "3ETW7FudmUpdYDowKCwkEYef8GPfqHr3zTZETquMDcN4Jnk81HBdna3KxcoamKJG853uSmdfzXkgqBB2KVZqQneq",
  "key39": "3k6EBndBcEy9zuz2a8wXFcGij2La6XUYitDiEfVqs9vHEN6LZQvff72rQ6uZbR6hqkNHcFtw8RFpLrVayjdvewBm",
  "key40": "2NwUMjtq2DsnpcKRa2fVgpaLpxFhdHvYfrUhnDQUmQBHsqV6hXWnNfiATT6U5JFa6TfaacLzpLC1STwUyMZLeaP5",
  "key41": "3e6RzbFpWD2txwjzXND8tsHuD6jzdVJ2G7Cn8r1e6KsS73AnE56zb1kCdkvwy4qn7RFu4wMU6hAv39xsCjCGaF4A",
  "key42": "4nkafVoU28x5fYwsZySaGAuGDp4KYhFvKVM62S2xgzYRsjxYczxji4NYTpz6Q5tsVu36Q2d3G6CEtzkuC2Cxu4Z9"
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
