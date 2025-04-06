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
    "2VMKcxP8kLFawc43WH55hKeuyVEAnq1KjVGLN31dwCvgBjWbPaVC7K2YSA9aBXaGrFN7jPCqx7FGrk4Xm2sdFpmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsvG7BLMiEQHozUgzVunbGah3gpWrfiZJPhiPkChavivGDcj2cRZz246165y5noLqrZzQqvKDoBLH4VfvfzeoXg",
  "key1": "o4QKFzNqaEUfqBwME5UxxqMiy56mtBy3VH69DUhqEBGY1qtUjUNHW35yZemMWNbx9NysRubHgMo2hPWjBoyxTvx",
  "key2": "3hc3U1vX7TMSWrUQsjaenz41PkaniTRRXX9PAtvYNJ3Yp3EP9tfkDyB8dXnQraeV8fMde4Wpf6wCsWxkmTmqfURs",
  "key3": "5CxsH7G38YfmfNCovSwWBxPQZ2dm5FfxpMoUMR6ouJqoTGPTei7jrvkPg45X68PfRYqLUx9fLsLcWtei6dekryp4",
  "key4": "3xcTUK1edWtvgsaFbamYyVHM8Srmy6zUbSJXSAfcJc4Zk5DTh3WMAVhe1LzjrZ4jrb4A47MXgMWg1kVrnZm7Y7bv",
  "key5": "41kzyPMytMEKyNWoDehkSCqEgVxVDDufBn4js8K63NtEQ4C5Bga1ZZBfq39JyGF4uRE7dmevhcFLWYEATvjRwfRF",
  "key6": "JbLKrqq9y4ccMQPGkgUmLiRa8P412oR6jbG7RBmRtGWh6Ai9aV8qqon5RbR5p5ic6fFTjThSmTEDrb3EUwz89fY",
  "key7": "oXvN7JG1X9qLm8DWeAdWKtTNANWiBsiBZJCf21nkqGDJtZkwK3ifi8mCzi5Zmtthv8Kf4NwbSDSFjrnbMECW7Uc",
  "key8": "66K34mBRoiw3LqvFKSDPr8ZmkzupkmKPdYqyvTrbPUv4UUTLJgsEePjHeUY8uR7cSBzqTiVYHVLBuHuU3yt7LjkF",
  "key9": "3CqqJMtpvhhAqGsWoP2kUHRKtmSd61yxNNASyTEN9cjenoj9mT7GMedBfBkTKfysTWRY5B8iNEAbd5e5hoaD2Mnt",
  "key10": "29iW2kMz9S4R74DfWeVmCa7wkBfkEjniHdNRgj4ZSYsb1VcSqvvA5Z2y8jSps31XEHS2xm2axbyJLjJhAT2p8rAJ",
  "key11": "3bap5YEXMXg67BPRHKd2uu2jvW96i4JC2GAYGqdxLcwF6qAfJYuvMrkQFsvRHwjeEYkqXjWVptnuHqn7fXk7HfMY",
  "key12": "4gUNtE8vrG43PDF1ERcSrF6kDZcmAMaijahgFvCJmGR3yPRJ3QHo1Tx6vhzsfA94dnnKyWiaMQdP54duPV3LdWSL",
  "key13": "2t1cAAJSBjtEhmHYRQW7oSkNYLco9tnXGHADHGU7w2ennKBkb85sTkcKWLLs4j1F7sCdWNPauTCeMTFqYiwrfjyf",
  "key14": "uLduAhhzgpeyJgroV8qkUwzaTvtzbTM27VpM1Jajuacisd4CLaJVdDxNYJNgsgsBLzVTCpo3DjXMksYWciSHhfS",
  "key15": "5pqmcddjne4hAZuomyX6iAhcyLnS7x5RLQSSzWQTS1QJccJTJep9SukGcahniVxAo25QmW7M9w7evsL3QvFZpp9E",
  "key16": "64etwJXprDqi1qsQ2ZAMJ6cPSMvW5r1nC6URhP9CVmPhL9odYCwnHJ4gpj5RMiArXm6ew7U4tNZP4x9z6jvgxQ6T",
  "key17": "TAYMb8oAqSs2aAhhkBFKJ2nW9RAThg5W4kWBeJhVttZbxjg2PKtcX8PTo6nVG8mcihfUMRVh4ccezciWTXjCWPL",
  "key18": "4qaAnsNMmdgtSx5yJGfbW4tQ3jfbjx2sbq7Mv6bKo4mc9fPA72NsUMQTdwguLhQSuBFu3e3GeeMsNPuAA2nmcJ5H",
  "key19": "2ay7DsGiwiRctYRmkTDPAfGrY4ZsXvHrm5zHhxqiJDuDVHreUs9wHP8xL958hGCLpVe86tL4WeGuzcsryryH5RH8",
  "key20": "NusUDvZHkgTHohooTmF95BNnx2hQZhupUDNxEzdV6yLgmWaAXp9tHaGFSYgjAMaeeELJmtDhqVmDRsCCcRk7XCU",
  "key21": "644tQ1tiB638VckGvgYKd9eJP18ZgmeEMdg3qDjXwmGdorfq9MAW3Jxeg6r2uBSPz71g24ExqfzZxHpNmNsCgR8z",
  "key22": "3ZzteFkhUbdPDojngBEuK4m6NVUbsdPbd5QkdcUkPmmSvajc6j9AzZ6umfFPpASc3nRdjffpVmLEfDV9k6y1rjzj",
  "key23": "N7AKKa53rq2T9wFpnRKPC9ZwmkzoKVr982m2A4k668diTbRDu8rJkc1sT4D1VuHRFGVh5MsP5qvhy5jFSXR5EUD",
  "key24": "5xKuiC5N9RN4mBiP23QizfSbQeCthr4hjwCWDSUaJT1A25NY29ckfQySsQpnBpsuVPnxJUghhMR12YkgnA6pfF5X",
  "key25": "4LMZJcEgqgctBVZzA21XD69dGACj7ojv6Jxg51wwyVjK8ZdEQ766fjEWKwGYBWcwT3Cx6HREiWq8PsUzBr1TbGSX",
  "key26": "3fdEssEdqWLQCwtNSsXCQjg3fy8uJydWRDQ7g1FdQ5tiD2eGHHKt5hk59bouW2rY1kErZnMcp3AKpkD64yDvvFwN",
  "key27": "3DkPPaVSapPjGigbrEcFAGa2VQ6Di82kfwm5bSRhxoB9ctK3BT7XjrerKRKodiNCpv2fUJ4eLVF6VFZfGAdL2dMW",
  "key28": "38Pdjv7AEK7f3T9AdS4BfLvSjy3C2G7qMmkbYN7ERn5QXiVTipndNCgnpfhaawVhdbj5uWMnDjSkwUiRMw4uzGiL",
  "key29": "2nKbaNGAGDShSLMEEaLFECztDNbpErrY2ydbq2pkUYBjq3RkGRYrkasYr5A8fsHVbbPoPhW4h39BNYiCgGPb4AKg",
  "key30": "DZ2s3ccLueWbBFpw1WRKcUnxsHdekdfFJUQhQkDwDEyvM9yGx6coXfbPC4ym9fFqbezdGHDPXxuV8obGtdZAceQ",
  "key31": "2RM3gMXXMvbV4445iyCy6LKxfBzDGE2CeTV8J7mpouDZuBiLvNxFo21PdVWa6zJDJeukEkzExzGdHHUrpUyZTz5b",
  "key32": "5NwzPvEyNm53FexpymJ7jzYupjZyLEYwBGDJ8XastEVB7MxoUEyAnkPArghE9b8mFS2MocjdgqcGVMoafKYANzE8"
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
