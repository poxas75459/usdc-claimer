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
    "4edyREw6gJ83PU37FJ8bX3SdcU1ziKyjQXoMwT2RYHK8J7fcveyW3dz1s7pQWQKqcaAePjyAci1U9JQLvCKiyenP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPp9gKLS9sE8P6BRGFiGFnKvnRdsxdZ7j3iNNYW6kQ5jEtXpDMEE9TpKLuX7TKKpHisFQMen3yHb1Ute6JgHjP8",
  "key1": "UibMnWS56ufMHpyNrfjGCqPUmuQdv5NZRJ6rhu2LwKcomSpcfT4UyCSGmjshfNQWBPDTqQVpoA5DyKK4CBEX8j2",
  "key2": "2RaSjij9rDMRKcRpVNajxfGHmrCCvfx3mc7ryv9djxUWquhT7izmP8YqC7LuYSKmtoanWBvDfpDWyXK1oZUeD2Ca",
  "key3": "2cGVbaC9WexuAYzU3ve3o2kCNRpTQurVum3QXdSkDpDZ7nJ5gCqP9BYFgJfUaLixfqYKEtG9n1Dhx2KpyXyrU5Y4",
  "key4": "2m8RyDu4ZuPWxRvRMQTZLytQyVbePRBWsfuborHZ7Ukx3Vg6KtwUQnt29XvUB6FY5nwsSQQJadV6VRQ7GnpuMe91",
  "key5": "4W1cE3VMp7m1MosuPXJyfNvuoxQShTieiSSNFLgsB16euVV2x84SzyW9wDYwxYskaSdtvHdTptVCnu3vUskZ3azd",
  "key6": "5akpbP11LxL2oc93Ynt9j1TMu9b7tioQyxgPnA4xh9sLDGmSautTrfMet8GfWibLNLz8CZ7EdqwPae1mfQZxQjd2",
  "key7": "2qCqzXW2Hm4BycEt9pDHYp4qtsdtNGUjCEZYSTHXfuKQgPdHuqZLnoj2qkmGQmbR7kVN8zCii5RRiGHozgW8Y3EW",
  "key8": "4wMakB2xVzCAqRuxf8fL7MSSSup3B7FZ7cNzNFrgmaKn84d91pvuFEuLpwtn7p3UmSbeXxXQMwXmVxAYF1f9WQLA",
  "key9": "XjmE4cik8XqbCFqtvBjUKhxtbfkakckkGeEURrHQtbx3WKTvsBagZFDUU3yeWf4UZwxakEBVDaVTGaTcb72yzjG",
  "key10": "2yN7V21pLtd2murmqcwqPxifsohSMK9D2qHJamRfqSqh94LAwgPhQ3amP4vQxtXZxXdD5LPrgDjDrrsrmvgpFSMW",
  "key11": "ZVtEMV7XpHNQpoJhjbKkUiCvhvZ3Qy96zgYjKHLGGj452uHWPSRYnPpjFrYnVV95ESMtGes4FnnKRKs5AhcUL5V",
  "key12": "5qqBTuMR48j5ZxUJ2Wc1givx7rfKwz2PfHQRKXi8XRh4Uq2qc6LTMrppBQ2BNDbkXib2roErWXuCoetP9UKnDbZh",
  "key13": "5LMdVfdorU7KvWQqFK2xdSbmxyfjU1fbYk32azPTirKhgW19ga7UwBBDiBe98TxR8xFrTd8b6ErntLWtmEMqjnGB",
  "key14": "bEdfQwquXhSvHguAC8WGwxTKTXcN2chWu2tHW5vxpv2STgFjajioTHy6UFJ7DytrmK4FvK2J1h32t62YoFiQs3t",
  "key15": "2doBEcQZTZC92y2H9rFUb3tZuDyo3ipDrvWCWV3LLbeQqAuVkGW2fU6bD47Hgo63JYfVftemirWpzdJfp3Rjcvbb",
  "key16": "3SYNH8zKZG1vDRyWT2HAdLSwffrD4bbK2bvgiNLnnhFBpC4PFEdSWEDvALL9Eku4Keo69Kfnv38R8tRWdkVGDkwF",
  "key17": "m6nSKfxMx9dfZoN7m6yjeppLv4UzBE5bHXNRvSAQx2EPZqHowL748qoiHEyrHhSwj2ry279yXsCNfmiP6gh4LD7",
  "key18": "2KNePCcDbQX8fFHYBEzTUYoZFQXxqWopx7YjNLHtA8guwN1iwQ5YM5jwZzRAEVDB91aNHieYGR11sfFGQgXitxys",
  "key19": "5rPS4His8fqVWU4nnx1dqa4w4rZ51xtZCnELLKRdgqZGnaBnAj8euhRgE54LH8nGz8J6aAtidi8WSgoLfETZRNZh",
  "key20": "5kowpGXKTjjzhBdNuamMVCb87QDRXX8u9YuQinGJvMER7fkz6Grw6HssRbwex7k5Q9KancRFxP6FE333TM36KDQQ",
  "key21": "thw2VwBX1Nyf1Kg32RFMU7L2aTu1FPisnsCkDqvQMhwAfkd3ho65eQrUiBQn1BQHqREpVc5ubXHFST1xXSBuB1f",
  "key22": "3QVTiLyqFYkRyuVNkjQA4SJLxJHh3bzb3mL1PbwVxXgdiXgZUACs97rZYW2edtH3vaTKFBcrCPX19Rr2CD6Fast7",
  "key23": "4GaCx74jbZvuXCQRQufBDQ1AMakboZBd7G4W1MTvBYhzKWGbkPvh9EeXReP5Z8aR3Khhk3CpC2L2GNvtMhVWoFa3",
  "key24": "ebV6LUuesPye6PHeB9cCzzHktfDSGoW9vA2rqr88jQM6Q4oy5UcoS7Evz4wAXZCTgsY2xgTE5qnPL3utr1Sy8ay",
  "key25": "5wqHzL85odjdsJy8shnXTxX2bSTSu5kp52Gfqxsb2gdwJ2HTNKAYimFAVCXy8neA5iTARKncdmdNLnvPHRShFbGJ",
  "key26": "62ebHPz2tUxeEALLMf3QQ6U3NzJMwsFcDYKjaMfJAm3aaiZHXV3p2oLxC9SKNQfQtgHX5sjgR9mqS4nhVkTNdZSr",
  "key27": "9k3u68X8GEB8ZG9uoE2jwS86VtWFiNyFu6NYgnypfcU5VG5ZQzqcLDAcWhMXEFESbAzFX1GrSF6rAd9xyfQKhFC",
  "key28": "pgZ6To4qpfH9JBmJiMhQC6VnCAsCDLaXEWLE3FUbHGqiHFNmxF8w9VZQdchGtwpqkJQyDtpowoJx73CZv4nNMkT",
  "key29": "5XVSGPG7F9Uz5xrEddd3M599Qzk7TuuoMBttrhBt4XyBaPijJy3pp8SK4C7dMZkecLJQF45NkeePBbipfipSodCz"
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
