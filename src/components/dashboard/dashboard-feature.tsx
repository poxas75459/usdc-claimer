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
    "5PPkgzGubGVi5seKFxm3gFyhV7z24Adj3vBeqWE5ZUXHtTHUWikaRu3gZKihjUUnbqytDSsxzScoEVrp58fqmHRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LV9sp2kgufYLXd2d84wYXuURejauYoFWrZ7QvHcTtuoEJFbXAgnwwd17upPD6UoA2f7F82E6FSYVG1ZT9SgvHRN",
  "key1": "4CD2PYZv44JXWTdXfNebpFMNsAgWcAo2aqgDxuda1AdabchSKYho616drapgSpLNnKi2V8XyEbuNQo9pg4KFrV23",
  "key2": "4kju3Dt2r8cyYqZLLVAzStzZaK8eHojbrLxSB4fsrG5TiHGJrbKKKca8d6gxEbFoCD6nfAJYGAUDqrq67W1cTTck",
  "key3": "2eq5whQGKFU2mQxU5ZR8u9QpYDSYHnnZGrG9K3KCn67Za1GK68TP3ds1NsUThff63JB4ZanC5raasksRU2YT3qu8",
  "key4": "432KcmmpwrrJvAmgHWB4wqJ7PGcJKUdzYFyDL3M6g6PxNFjiMbPBCDwxErvtN8urhPShMVCMnrgn5BbTXTAMDP9v",
  "key5": "2RPX5cdzwbK4LLQrBXP9QuTWrKdyqdjA4yYMtCg9X2sVbrUkeVrDmkYccFfYvmKEgoMLCRFuDcR2944Pr7RfMqp7",
  "key6": "5UBhBBifrzRp9CfQkWFJNZPHGTkLTpKGWHLYdAzbWckbWxQCBdpYcPFXRowqobxk9fWaW5iLJiNjCLt3F81429e4",
  "key7": "3W48c52UUBf7a56SKEH1v3qkNx8TzjUngsBeChVnvooHJQHpZgC8C82Zc5U6nYTPsnMe1eHQ3Rch7JCa7EQLdTdo",
  "key8": "5ZUBxoS2zQLEaPQeQGgKJ29JVavKT8kDu9vQaNBMXqSBa6M82RgtyKEvG29Vwv5wbusZnxEUdpeYXWRfoLufkfuo",
  "key9": "2FGzWAsAjMS9Dih2JjqeWJFd9Fqmv3KMm4m5Av7nzbHFkE4KdUV3cCvjZS9sQyeHB53TZvf23fiyrcfmT1SsraZk",
  "key10": "64qmhqUjF2fnctofyp9cptFmfnN5MfknSTdjZP7fwZfoNYsiA56s1yDoBYtnkivF6Uy15H5mbsyFn4SCBEzZUJn",
  "key11": "j5tBdxKfi3oQMEjq1HHwB24hrNFnYxCAvD26Zd5b8EiqLT54Xmw3f6R6sNC5MBeZbJuRMTCxZh2jiu9zP3AfoQw",
  "key12": "4trRkLBdjKNaQAbwRGkcPi3HQHt9GkieajLjKTtcYpXP33beKERwCwR94V55DNUqQw2o9DrQDb2j43iEsAiHSMWK",
  "key13": "fH7tTCrbZeS6bpq42951Z1V3aCw4G3vae9cS2yTd3SNLpLJ4HkpLZK4dWjRFMspkSR1EtzAmpxU6zz9ewFRxiZr",
  "key14": "2FSj6xSZWnjqUPd5kWkENRT3rvfoikPDXQ4YC2TzmGpKyoRgFah1FKdpvdzL5F2wm63aj6Mpcfw79YHUPY94uiY6",
  "key15": "2Ev7KwLELqYazRqHtMhDvBhYipwQLhcuM1GTTeNxDsBA82UhHvawHM1ZwH68pjfZ7BfCjq1txUDRaHRa2f3jzjF",
  "key16": "34YoWtZGZmGnLiPT2MTsp2AyrXxNP7cnYYZhrsuUpqo2pmMi9SvNjXr57FMrzSLZkMo2DUhYpEWiTDH7YHCBvbJh",
  "key17": "kNKLNEu3ecfmtWQQ9HU8FwKXHF2Hc3oHr2dSuqpeU7aAogeEW4jQBoqPRRA4CWJ7YEeGZHAUjEScGXuZWLp7Aam",
  "key18": "38ahriAkRV9idar6LpwbEGWpN88Ds1VGwvExK2XquNZ3DiAqZcEHUZGTmprLxAQJvBXwx2nPNtsh3FBGQrrCQFPH",
  "key19": "4otcs8bJUt1Ngqc7BpX55ME3sinZhoazohbqviCV5YV9tN318EmYjWrwH3dEsRNJgACWyQGPVYJGR6ysWucBdnRH",
  "key20": "BpaAgUaELQofxbSUb7SqkZ9ZoAREjcBhQWdthGJyBJ5H3h5yo1aYhHUVR51vBYSz9QXW6ae8NfQLLAwVaNrro4C",
  "key21": "5SdMLxvSTGr8Lr8VPqgpxTXrnRMv6s3gzp5AjBxiyhVvbJVaYLS23p3D5AunNwXqV91fibhhY7dLW7yXY1B6jJJE",
  "key22": "3HtbUb61fsHaHsEgLjAABrbnDfgFfkoky4RsxJJQoAv6LKka1WNnGuceFKsnzJFzNBSrguYoGoRkELuuvrZ1maKg",
  "key23": "3XRPzkYwXk12auusps1BQ8Y8RevoossBeAFYjoz7UxUCmRpFYSzC4whT9mRBAPHDy6nGsZhcibmqqsktCE4JF1Gj",
  "key24": "7o4JHGiRBauK4vUmLY6pkNexqLzwd1VzUHfMyBDGqQK9aywAFypKjH7NwG5c9o14i3NK6FLuSp46TtukwKifqpE",
  "key25": "NfNJ6wJKkNPKgiNn9yrzf8yuJhSyubjBSBYykfbcdWfyz1BHuT7YubA1sFHuCVCAu3h5SYLE8bqi7tAp4wW8U1r",
  "key26": "2e8EmrJJ5W2Ekkg1D3ME9K9gW3DdBiHjefyHDUS4q7tAFReT6Uyb7M1nPhjQKQVCSJ7kcHj1voGQNPkQhYbucH41",
  "key27": "2Dz8GpCDrRkuE1GRqL6T1StocWxttkytv4pWFWzuLdiiyf5GXxV2BTigH3Z2fbB5a9pMj6uQFApXHY8Wp4phfoFF",
  "key28": "55Auumm68xapnMmVPptmRYamTxcVavANK2Ri1bdVbzNpTz698RMLCCVhogdmAD8fThXxoDqs3Zf7P3sW3mH6p59h",
  "key29": "4kPK96pTiK8Z8F5zs6hgi5oAubPFejDj5cV52yvmNuHQuqEybsMAEdNSLxPxYczdeeqtq5ouA41UKFYf6ZuDoG9z",
  "key30": "4dmP796QVM8qqwQXAtHQ8FfsXmVPX8DC7p1LYx3k36Y1NDrjtu7UsQVbHEaqtqaBkcRJYKDqpFDJnqWMZBY3ctRE",
  "key31": "4MJaszbdUsmDLPjR3N3HivhHCmXQ77BtoG7THU4FusSi9ZYDNAPk5W4CT5Fxhq85yzXjjaTkFBEDok1WtM5WbbUD",
  "key32": "4FPFdVVfin1v7KtJExvtX8AHHMp41vaGwQGpDeWYhLcofqsrenftNzdKvT2WtoiYYjxZQjmt95CCkvggiEqYT2MJ",
  "key33": "2uzqGe8mTVBjZKwvUsA53gGZ2463YzxREKHgjqXayHvQ8wRsyDAPPVCMCQ5PFWDUzy4skUC6HLJRnkwDUkmY1pMz",
  "key34": "3pa8SQJbnFhCSDMozWW8Zt9a1hraG7csmdLzsznW5iELjYYkdbfbBW2HcLz65L2CfiQ7PpXLECsq7hXa4mVzNWti",
  "key35": "2vnNLe95M7Gt7DszoNQFVd8kayGdAAA7FUttx1TAZTxDxsn5kE19SCyihJg4G24vnfvgepw9rGdp8n888DegRviB",
  "key36": "eqx5jWauBumBLiKoCUmwDH7VPmbR4bUXtZ4vEVsAjATBxbDu6UUje7hJYjRHnqsa7ha7hHKKXYQirMnCarsF3bi",
  "key37": "58pmxofxchGseZg7J6WZzymPt8AiB2pcqkd7D6u23bJ3wedTmxdrau5Br9u1osArtKG7fKxusputib1tuVuC1egH",
  "key38": "4xgxwPghV1doSd7AwrYfkDpYhNjDoffGsUZELHnW4LGFFNQUUghSnnXSm1z1qxjQ6fkZghWDZCxsfGb69CNkXWj",
  "key39": "bKbosH5CgWH6hkttCzjRu9yZskTV6jrFFidxfMbb7itq7meiqd7jTasBhqQD1X4wpqXksFT1jbYxQhqLjhcj7KL",
  "key40": "mLyjNFDJb6XkviJDvDY8BdA3DvwAAYCRhAgr4UdDK2MoiD8wyrvrcBiUsY49bJMbU4StkPQsRxQwEm6xa6fr3W5",
  "key41": "jUnbTN367joqqziqJwGac9mgqcQc3qyzFaC1rPGYJ23qdDLtANBGAZ1dS53UGaLCH6epvS9JDGwMDYyAt3zziKo",
  "key42": "2QAUwYGT5vwhz9BL5azBwVR2txRwwvy2hA26SheJkYqjRc7WAx9xA4BSpiktZfP2Mz5WvvmUWWX8rKhnJT6rhctZ"
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
