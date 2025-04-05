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
    "5cs3AGPhMc2GpBNnZSnaa5hJdAtoMtgj8MB8vCCuMQCKoWSQA7Qs5MzUPT5dnseHe9pudP6fL63mayGzK7fsca1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3ccpEJfEqFYTr9CQdpa538tEKTxRzLNCkCPE1Yk7xUagiXRYTVQDnPVgSHkHNFmRpVLkris3sEaJ86zoHt78tH",
  "key1": "5gHkVJwSL2i7f6EEwSryd278KM9dJ7eq9oRe8P9PXijFQ8DjphPCX7CH1sUT1tNcC7KYT66uDwt55WRhEtkHx35f",
  "key2": "46TQKF4QyNPWuA5z4rBi1BmPSKSD2FHy4sQFHB4TUVEHatQ5zgwZH5xxNwE8xFMWMvmMXFP36Pgx35ABuSGog8J2",
  "key3": "66ko5NYiFjDPrArU2Scdz4FbBqmhoQv6yUumC2TQ2hqGVabKTWkXteDukZauuYNEHUzitYLXEnx85FoyL1dRiWyf",
  "key4": "2FfNaP1uTbaZWA69T7trVkzeysqYYJwVndFaqEvtDQtPGo5mk2KyX36yx3dnyW4HdxEV9GWk6gibB7ZYqBgsXJwo",
  "key5": "5i4936h9hFg8keFhhZkKZz5YjCXmNV3obAUQStWDqp7oPRdpCCCLR2nZNnhfSRBM1aDLPPKqic5Umm2Wgzv9Z6Pg",
  "key6": "3SaoQoj3ZtrAku6GAaFjbLUi416hvxwVReWt683mmRbM97BHebZjmw3ozpyWgHvStxjCGzuyHrHAbW7g3X2fG8Lx",
  "key7": "2n9sjkwpVJvpksQm9rRjkLb7faGhi1EmJxR8Wd82hxkN2C6tauU9PKBksHcTnMngw8rDb9EUCvoy4VBXU76Va6zV",
  "key8": "2CCVxMuJAgH4SL7QGi1bCcdAcCgsBpgUM43rPd5ggk17FLrRth4a66eGTkri1VsUKHqG5QfuEw2zKQXg9aNYT7XX",
  "key9": "2SpoNZ8HeG8VcUWajyziH8yfBjmakRUjd9eEFSTyCfgSQdMRwrruHuR2GD8e12WL7Kb7JKPsFrMzdW8xvSumBt77",
  "key10": "3rpnBeaBF1juNPqjqqmCaP7ZHMdGvssHjwcXMXYdETGgQv3hT4XPCsNpPQTET42FbV1mTi1Wa3Wy1r2859HXaP4q",
  "key11": "2R1BUVVKLiwFN4S5SFANzGxMj4ufnChdroV7dLZx9dgctZXjDTLQKK3BKce891SE66cjw1MLEeYAo5R6XtPhHV9Z",
  "key12": "6F2EoWxFWA8NKBuaazWXemPQ29HMsrAqhqwo9RK448mUP38DH1w7Ejoo8e5Z37do8eG7bjExBYwAy9W46Cys7QP",
  "key13": "2LxRjVkD7PEd7BRLaL9sCzstBCa3M74rXR5nxuK11yxmatwWq9ucJUDSqyREzN3cvxyPUGFgNTbzbuNcaZfdUuQN",
  "key14": "juinQVroUNQ7PPAv8Txj3MFia7EEaJVJFiR4X8W3GvSF4Ra8TotEWPH7bE855t1aAzNsPbCHJ3CZhAbnDzBfpSp",
  "key15": "3AYeSaxJP37h4SW1E4i6vsoUZN3T35fyuaPpUwEsFYiT8SmVo4Ztu6PgSmmJYacJYfJBLc43NCp3aprxGo73ACnQ",
  "key16": "CmFAD1DMyNVLqJN1oNBdXLqvhD48DVmrtgBLvw1jg8JAWoozeTuU7HLVh8ZgTVjbGSdg6kVg6rfZTtfWxiRQNgg",
  "key17": "55hFQrj8wd9sBCuTjiVWi6EPKigdpUYHE2AVKNRifPhMgQZUEWdNDFUsSJWJTcV9ZvgqQu8F3ULBmJPuGJDXmyt3",
  "key18": "NmsYnzkqNru9UgLDnYb8X36eKdoca692H4uCyzmZXCZaJ52RQchuGMQtaGzQNQxTEhuJ5L6FQDmJaxzmQK7VmKT",
  "key19": "2ch37gKxSnmzpZm4cfy2p1E9eS55Da2ERoT4oJAKk3FPQA5RqqrcAjn3AeQhoy5NNQv2JZmt553ugRVfPCLYBe1T",
  "key20": "2LjLKiYY4yRM3sFPQ4juYt9xAUUVW9QpSpFHRH1pVeBS76d5Ax3AunTnkCJfwKh9S7itszByq4a1X4TNaihzJ2fN",
  "key21": "4H5bzodHm27Ta7AEv2mN6KYWa28TEpJ4tfJYRAJ82U4j9KbQJtP6jvNq5b2jF8W7rYFoS2pfFWNf8P5sgAZyUREZ",
  "key22": "4h9VSb5crnjDJUaXtkuqkBsCcY29iTRxNaJgce3ufDBVMQeaZRekVQnjViasbZXueDkE9YDU24M9GsDotdqnbUA",
  "key23": "3xtwDP3kEVpN77xZjJa8uv6aabf2GsrKALvzALM7KBJZEQtbMuRmShth1CehqiQmMPxN1RQDRBZBRqkDhaxCzsHS",
  "key24": "32SstBTEYNUBKk78PR6EtL8gLWLYpFD4YKAYLw22vfin88yv3pMnGTjY7XomsGDV3J8bkoBx5zxhnVyrgnVQuhqa",
  "key25": "2YjGmZEmSWYkxQP6GmRu6SU6SMW1pkZ4tD4zKh3UmKPoHsSYTHXcd1FJNiZCvX2F3RcemnsiEUKq8cStvLcemtaT",
  "key26": "3JkuhdRDxKLriY5SKRBmJ16wAoUpV6bMda3uCW9t5yQCjAFTzfx9T8udAegAY22EZTuSCpFBHHtoubjooG6m36Fh",
  "key27": "5UqcQiBkqKKXPmiVABzqxscMX35vEQmBi9YC2ai7JxS6Cgxnkk3vssWzJpCT2B1pk5oQybLYYRYV1qbdJgVxPyvo",
  "key28": "9o1a4msB3jtEA4UantZMG2ATB54yYHVerGFbwCqJXrAqBU88KB5gg1YvtRcwDN2HxFqK7QPKyHgDsfuTzUgCp3H",
  "key29": "5HpPEJtL9eegCZ52vTDEyAoP21gWz3w3TXzGMAgQCLFEnuVEChh21eyikQjoB9mUtM5RPis77WGLwTPFixn8S5SG",
  "key30": "2fNkVmZJZ6assh6MtQWEwgK5JQ6P38Uag98J5Ma9kqzNyQFtcq6DjnQWHacbsfnrzD7Kq9xbm2tu69DuH2AwC7uD",
  "key31": "Kerm87tLrs4ecHVXyi7knr1bVS7CMf2mnFDccrGTjv86r3KBEowiy8NJguahdjLRjiaq4sdu3da7qFytqtFng94",
  "key32": "4EuTDRGHX6aFzzChEzkaHYoL3ab2Dzu4XcRcstyiJoY4aKLTcmRpHkRwSkLpgwtGqdQqLru7fQRmDw9metEaXXSR",
  "key33": "5C31DDcFjMEwzL6F84A6d4ojoWcBeNNKv1J7GWkM39pyqxvXbzNAYmcwP1d2QSadQ1PVWi4Erinmzne8mJDWZxLM",
  "key34": "2cWPvizC9P6fHbPRzxU1Mu9d4D6vFWHMmmdCRwXXRmXk697FP5wAE1YAXX7k5F1SEQ3ncs69c17cSvyJkhyK8HP9",
  "key35": "THC7XQQtcaduQph9Qc4JLR4HrPven5Lyow1ZipitarLGpdSHXTN8uc4ZdM2YEVGDNvjXqmkUDtcDEYsdwiCmixH",
  "key36": "3af1GKWPwRsLzuJkcRkbaoCej9WJVZuvwAp4xyCtK38AewyJhb7xJpQv5FPKpj82wvPjLg3XuDURUX1pHAXm9oFY",
  "key37": "23erg8tHg8ihA3gPS1UKuh3oaf2yk5Mp7MQNoSPV2fUNqqXLbrGpRH3kPwjERMSnAGnMc7yFjGNXgAQhesDnQFnv",
  "key38": "3VhTDnXqByoaJJ21ZpvUw2NAFfLDAiaBJHqqmRW9Mq8gDpJNmAXvgXh5rQy9iptCPJWfuQWaHnbkyskEPZKZBr2U",
  "key39": "4G3FGKtmPbnNhTFxXYJLR31GwoYCDnxJKWoCHgRjGekddFgzZ76YuwB4g4DeWdwiLFyRFBp6QRSBK5jEwtv1561A",
  "key40": "2qpvAVav4DzMjVRvyJxP4zwTArUhECV8G7F4f5HtYcfWjYV4FJrfT8AACjdGuVGwE2MTPTdQpFZQwfR8LHHVmuec",
  "key41": "DkfMNKmqTXkzmf6XAB4heCcXGSTMB8UjHFfviHvfzgtcb2dck2d5H6svwTr5FMwVfvUsUUiD6WmZY41DX6NF83D",
  "key42": "66jyYjEM1hiiMRrCuyvFhBiSnbiahtzDwrmKMVnwmg78LUTTXMWytSiYpZDVTiwg441TMguBA3ixPYA7qBhYw51V",
  "key43": "4uxftLC1XbnSfCt9Zsyd3k8b4LtjHEfS488XzusVThytciBqBpWAADX4oe36whUu1T3mSAHfWq3MxNQ4T9Dybidd",
  "key44": "2xZmuZUsUzCGcsjBWsAcd5qWiBRsfX9mxTqa3g3cmGpq9hU3GiuZpQCR9jhkpRCTdzH2qyXWzgrDjLhvsi4J613f"
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
