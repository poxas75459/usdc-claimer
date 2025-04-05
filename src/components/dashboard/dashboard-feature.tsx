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
    "2JMHTGPXYoiHbao5VaHPtWDwa5Tv5scW3xYGcoY5bL3HVUR7P3MyJFkshzgwi7iLUQpABDednBX2DqDvsJVN37jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7zsFYZ4tE8Dtw8wW8uZxUJtffWUwJKbzesmUsvJwLUGxF3f5mWQPiXEZSs69RVPo9w2FJptqawmoWXzABts7dS",
  "key1": "3PkaTnMT4vPSKh2Kv4Z1csjLLZU7TwLXFT7Fqxc2peVHCLLDW72StMR2xXr9yKGc3z882BuRb24qQYBY7Q19zBxk",
  "key2": "ZvZreApXxWaJDYHudH4iadib8zyprj5zhEiqoHw8vccHDoguRiEijtQXVMc4z2jjqty5Zxww8qqYszeyvGXjjzu",
  "key3": "X77fzRsqzqF6sj3iNkE3McSsWmUUqxsSbhPASQLzL8bMHbQUKKgacnbqF9mq59WZmdsNM5zcp4Ymiuw4NBEW5BK",
  "key4": "62jffLW1P9CMuqdQ4zZJThHtD1ic68qhrp9H6Q59K5NLFy7KVvWfk7JnxbMKjHfEoQ5HZANkCqFPjUc2ukwReuAm",
  "key5": "67RnyxGitfQz2NStJ5XTSSZsbFMiB51m4ptSifQrEbA5WMkiDNbo5MWGaWopMdQKqdbYudgnaxpQA4QmBELAohzt",
  "key6": "kgwa2seJiJGcACT4onRyrUYpigNQU6g4XWV5XA84Vo5K36BEWXNaGhMyJp9yQ5N2dsUE7AxpKqJfK6QkMTivA3h",
  "key7": "4GGw6UdiotjVs3TYEBLgyBDCahuWFBp9HYeBcAfFQRbUuwvsL8BnBZM3gMDCikJkPyCzEDSsoRbV77uZJ8LQWePx",
  "key8": "3VMk8ioFPrUGNjVqueqhQXSmk8iEQnjoDUYnnjRacbvG4CcTyhLN8t6cheYrgWbHq3rirYnduyVACvz5wodNY823",
  "key9": "6715gPPSpdUcTh6KRVMYQsUhbXMFepyeMMPw8ppdnwDecZ2cd812m9bnMMmYvuxSpTjiDNT9xZ7XNKWPconWUnBP",
  "key10": "65AEF7YVE63CyEdqT8SKijLxPxrZYs39XNGyXuVMS8ekF9Sv37DzHHLRij95m22x2W1AfNpW24yETzFerwP8QTiy",
  "key11": "G7D1vk8XDbKgt6HsFfQQsMhPs3FcKPtGU45TzR15jCfXHuwqFaWS4fvMXZPe4CNhPW9EVpRzGLSd29b7BwCPPZp",
  "key12": "2NJQMmhVNTa4n8RsQHEEtf6pSqkzvhU1SUtKxuTFVCGhQ2ThDykvmnU1yxQZS9qFV1RzxzBF1z3aADr7oLPuke9e",
  "key13": "23AtkCbtaVgTXTZdJks2X1J9RWWzSDkqHe5Cm85EZfwXaEnkiCXNt2gz8NcYwjYdGeiZeT1aXWTYrWZNBdfmfuAL",
  "key14": "jMJNvbDgutfpLz8DuTTB5x9vFVgN6DzzHg8caT38azVjnpddUFsGwF1yVV8H4jB8h52czwKRqJh9EVkiDqxaZ5j",
  "key15": "5WqPS61SmpeFHMcwV54rRQWkSmCQpUVafPivK7KX7bwvaQSiQAH9GKm4pvVjZSXMbdBi146r64HNgwMtpsAMpxP2",
  "key16": "4DPFmCaQgawBromBehZBheyCL8wUKskV8ZtzaRcbX2XTmVDJxMaNJ5xi559gk35xkuw8DGnbTMJ6uMXNkTZ8Rx1u",
  "key17": "2bwGwp9FdJnjLKsfty1kUwtHg8niBJb19irswTfzQ7wmyvfBqYs2PX9k9qjTeQR2koWUZkVDLHLt3JKTUG88Swuk",
  "key18": "5YRbbMiSBG4RdT9jdhPp51NGc3WPf9qJRyHUoQnsfRXxPt3pmZ1gn5WD8QwbFRvLu3DPaGrEEFveS9qq87YUEvPe",
  "key19": "ss8GB8R8zRyf7cf2P65xhVpUNHeoKHs69769zxDfCXx2AHZVC9KVdg2nHPuJBc2Fs5c9qzm6szjEo5KPBmCTUS5",
  "key20": "37aT6UDBdtakbPt14McJoGCUTbp2DJx9hPHQC9Ff7WyyzPfkpsZdC2r4jGaxpnCkNEYpX1pNMBe6deVTQRyCgBd1",
  "key21": "26tvrJQgk3yWfGk5hpxVnWQBq8MjfSiruohsXLyxZBEdWxsbfgtE9JRzXvjvXEk7jdWGaxGLb4fpUgjQSEuxNAm6",
  "key22": "ytnMp1pMVZqUJc8HyXndmN1czgh5w6DuEDCPbKUCeHATKtwwZWQWMjiALqksw7tbQ4wKrTum41atAZuGjBmRXkz",
  "key23": "64Wm8xb4BxK2i5qMWih7dPsiWLPGcw8QkgFdhNPKs6KPGkYGAA8bqNirK6b71FPgZtZ22DSz1WrRTYNqSeYhCsjT",
  "key24": "2yKczHXTzs7ZUtZbS9nd6yECrDbXuwa8hKm4Bhp4zZgzpMEDe9YHjr6dcHWK1hj4yw8sM8jCuDVNpMH9gCcFVUSt",
  "key25": "2oxt8ZfjhWco2pqXnvPSu6jTvyYL12e3MEdUtQUsMQmY8994YNnN8p6cTinruRrFZpGWTPXnHrpD4NjVapK7nxze",
  "key26": "E7cLfPvVmUUAatJTzzDXz28AzpYSFYGwphyJncvphxvPyrcnmNXTWaVuKpCo2cy6GtrCcd522YaijGoYDaSKq2C",
  "key27": "3p5fQAL8yvfhq2fstRcWCwywdECpPkGFxWN5VHs1VxHmon2WcbuwbqqB3W9vs5FAij2rXsgvSMwb1sEPDFWvExUo",
  "key28": "47VfCg2DrHV3CVDcLvnKfWzrjoQrg9bciFVqR4UjvUmLdPYMHb9BZRGRiffMEJyxgqh1bAiNDyzsURiFpYRTY3aq",
  "key29": "4HpUebx9F3K18xjTgEoZcu97jzqJXvzgj3jXNT6fKV1uFnmQAYCnWcrKFbGvrpTC2Mdf6z5dNhHNys6HZbsrKquM",
  "key30": "5D6SbFL6FDPxoPDXaVsHdMC6CQ91JTuS1NCxAjZ82WnQQhEiBec4rtaYcdAv6KCNCwKLNQPpv2h4kDiLeUtRZS9x",
  "key31": "3t1W3eJAc2DBzk3gvH85Aia6BUpKRUWMYqPkGyZoXqc82iaM3g8nMAzU5aLcbJQsv6vP3CeGNNbEeZRf9U9ks4Zk",
  "key32": "4TvuaBRbDcBeY3WM24QDUrEPC6y9PB26hbJR9rN2LBsHQckVWdTxzMBT1Y1XcF7tVmURoSheohvTY3mK3trsm69N",
  "key33": "4vVt14H2wKdy19CZWPmvCxK46oeW43zctt9KV6yqe4nuBnry5U6sf6SSje1uGhdmoUKGAqpvS3y884jPd5U92RVK",
  "key34": "4LhE2e2Kw9kCA5xeSWjmRWj5eML63jSaJJUtKTKpsftFDiD31g35vLBGLQgKLaA85ZXWxEGrk6JnZvsWf5rRLHcN",
  "key35": "3FrgKKbp4847NX3AuayFzrPbfeQuqbzbUtJ8BMXAfFNcfwshSGoe4KFhK2WabnfnS8239P8UA3t8pvYsrsP2NSj7",
  "key36": "4wCNPW9FNLiM6BCSV5sFECarjc3FksK9g8fiWcxF3JXEgrdBsTTcGEbAks4rSXMQg8UVtwQhSW7u4n3U1ueNXV3j",
  "key37": "KEiFaQ6UFbFLvqo5upUuh1JirG83arKLk4N3BdDWBZMUUoiW6QQ4H5Wzgw5prFNoLMD7zEr6S6C8o375QtJurJ9",
  "key38": "2GjftdU2aH4Wi669oD45fL4HQ72goA5vR5jF8bv9vY45uoKvnSGTk1KDfezK7NidX43LVj6jNRx5UQqmTTF8G8K4",
  "key39": "2LaXUC3RVc6rxJaTtpMviAY9aX8CRVb4cTvM4SknUxv2X9f15m4nbLxeSUrzUsscmDVnNVa4DpW8Ub5YW75XCGNB",
  "key40": "37XoodETtnx9Kn5Ryj4CGkB65cbUmaHveEkHVNchJYzxAQ2HzoKAdFGAFGxmKNj8sxSgcxUEZsVtP9KczRs8cLXX",
  "key41": "2itJtp4te8nhfT1Bn76pkN2hEsLGjaPqwmQix2cjMuc2AJG6Prp5vpzzE35wAofh1jZGLzPq9HuhurSbsaSH56Fh",
  "key42": "3PvdKYTnWHVpgtJsXNFa2N9r4b6EzRFdP1cPYya2gVGSb27fTDC3ZYbY5ZKbDwpHEqsqzKKf5iTFDyoZLxK3bLHk"
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
