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
    "ues4jCLuEdgHosz8SXDHxbAazteUpvaefkAJ3ofmWtdNxvv65WaiuJs7CSLqhStahnFJZBE8WfT88cSGmQGnAfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dW1Wa3JHTnYQ6ESY9MjNWJ9G9jbwnh8MLJEieuUZjFWExuAeRtS3xuJBvhcST9ZnYiuAH13nt4e6W6MviTgp91F",
  "key1": "3JctCr7R36qGzjmmkVZdiaZnMy8MXTYvBBCfzX12DkUjdU5hpZnfKC3CshK9MAGpmie9eYmssQqPhHSFCkUeeMz1",
  "key2": "3jm5hKiPoYbCRMziGYYXaAkXgiGcbggqCXyLHERK3mAVnCDajk8k3CRefMDQe4SeDRHggb37QtxhRFFtMtzraAG9",
  "key3": "4pgTUAgB2ve8GC31tigQJ5TgwFUrRpE6FfK2U9g3TsC7pfvwLGQLwg7apFH17YFroKagP1BwEGTEnetHb9JDXyxR",
  "key4": "55RVrSnh9X2s3eWfknCS5KNJksW5XzXMDhYPtzH8T4ipnqYdWrhoJrn1xwkikosJD7zWPTwQXfViPN5x2kErDRfe",
  "key5": "7cf7Lpi8jS9N8sXY4fCfSNoPLMKifHn5LJMAXbvjRNB4ND16SWL8Q8tfr4sGj9qHemnFgmirfexr6LUX8oACH7A",
  "key6": "DTQbdV9kBvyunK9kzvgzA6rsbrvVPCk736oqvsihzkptfbYcbwNHhwuKjsHgUo1NEjjjZhybDTSrHcvXgxG9yFz",
  "key7": "3nU2JxbEUqj5iEr6CofpVLfEXJP3iuWcma3KmmFZcwzdAVx1p5yXKUp37dQx5j8yoq182n3xCVSgDepLspEyzLRB",
  "key8": "mHpKyS9dQUVBPdNomh15oHzUAUywYhYCaq5kQNeSW3J7yvqX594boXvEzNFL3zeH3qTiU7Z7BErHrGNGL16dCk1",
  "key9": "5EWqpN6imHZUFc3js6oCo9zpmvvxyZh8WkcvNopgYTthuoDaWEj3q6nYaph2kS17E3iAMtLM8tTWAoQcTMvdwGyW",
  "key10": "4R4uawqU1WE6mSyaQSjuYbp7f5dhtWs54tskszY5745Hi3owZ3NUkKyKQqJcr8s5mMLHYuvJT3kNGp2qA9Vf3g4w",
  "key11": "2BvP4vHBd8k7wKJsHetCvrrHmPBJqg3rnNmq2ewDvog7BYbVGjo2zx6DUz8AnvSs576y3S8u6NJJuZnhXRoEHfWn",
  "key12": "36FvsvkhTj2szWTrCetaFjvWXcnkTvmWopL5cVjGPSMn1AXdsmpZ9KuVkXJ2rFXYy5zZ5kVTWxYyHcwt8g5m14vT",
  "key13": "4BZhsTYn8NXLxKyr7X6PXoavRCxbbz96GyUiJZ6iEhHfRn19xtEn1NpqgHiU2UbsrUTWR6hpxqBUuRvEV3FkNSMY",
  "key14": "2STAaom3XPiBUwsnc3goWr41i8q8dpyttHqP9iDTqDpm5LVMob6SFsFLJvXby5HTZ9jhfPKrF1ie8con3tAkhBxB",
  "key15": "5oJNEWC7ESQFTFYC1UN4E6vc8Ti49YueZcuGsxsMg9eKWbqen9c99zoe193YFzcjaUidQD9dxJPddcrXBguwPS6x",
  "key16": "4p5tR3zejPesWoZDEFvGG9ptRkqBYET4UoeEbx3FztVYa8AtkhX7g7cRiYeoesgkQZMTPTt2cRZzTwM5LMWHCBhf",
  "key17": "39HjDCb2fg6ZFk93W8M1UoTF4qi6iAuVwzx1LHsfcdoGcoZc4BkqeuXhh5XbdwjEQCoHWPQx3JjJkRTYg4CzAXeH",
  "key18": "2xCx5Pg61u2tkszdVWpePV39Bm2BPaCwGNxaTw9oj2v4HPFwq39MNcZtok75g6JPr2FJi3mEQCQMqJptnRSKdzUy",
  "key19": "3SBJnZi3KMiWGqTy3gT8kvSofvvCk94gtGaNEhrt6rKmMDUjTrRCbCmva4tfrFVSm5YEde1mQnfaHtAcsq691sDK",
  "key20": "5cdncEtcKFkb6rS3EgTJK9R5Z2MdzchsAtjXoPDo5T1RhGiAdXyJtDtbY3ypAxTX3qdjCqrq6YpyPUZqs1psHKqQ",
  "key21": "2xoqziiYz7WWxvzy21djDnnBJySAMG1TfgqencoEFvVYt4AcBGmWeo2mrHsxcwNmSnQXaa8PJvPcd4QNS3mbBGmA",
  "key22": "3iQiNbPggKBXgu4VoiDg9WFJNy7TNuFrms1u2m6LGRWJ8EApPFrMWjNizV21GXvNqjGTSBSfFXPbqk6W7bkqvNaJ",
  "key23": "62HXaGXGuy7rmLwsF3cCKbreW7zvCwwGR75KtkqSU9x8fsaj1idKsiSZEPUhmyrrPJkEQPtncM2GW9zR2T9rZJ53",
  "key24": "3ediXS1MmhoYGzE2pahazPtgavCwYivZQg41iE9uj3JS19AX7daqpZb3Kh37pZPxFMZ5bW5qfRpVqcyucFxdcj8Z",
  "key25": "36K3HMgECfJw6EBjGkZQiapCgrnoxE4TBcWF73eW3kuvdrq4SmJeEfPVx9z4iQ6b2WHZcYDCGtysF2dxH5gx7R7Q",
  "key26": "3dNK83hcLNApdCrEiLjzSgBZ6KoifJDhMVDodUz6eCxc43fEb6ZUBe8hdWgEdZPvmMrPyMfYJg3YkDd5g4F1QmBB",
  "key27": "mUC2kRK2NZDFD93aqPUCsRJeuz6pD1ZtxZkbDJhwdwjZMFDEb7WYY48adfgZjdkdchEFN9iAWPDPDr1jvb7prd6",
  "key28": "3mdGumMD1nZpYSn9tioiAWs1GcyP3G6UwSVneqtvGSerdjJKxdS4HYTe56nTCWVP1KcpRUbknrURinW2TVicf2KK",
  "key29": "58YgTsJ451TG5zvjCcamDq2cKuwQCYWAMVTjnsfDe54xr8qgt1WPwoE57eNtmG2hT5QmQ1jrNLgf34fxoDYHDiDL",
  "key30": "2fgTk3F8VHY4fVFnjYNsQwriWJtJu6A1GemCQs2wLBm8X9mXhChLKzYvYB6JwrUMExQWARMxGrzojYwMQUU4WJf8",
  "key31": "4YrmFy8Hn3tMtq5zgz8qXCumqvXNsJgyQmjSuCBo4bAQQuhaa51LDzegttjjgRNzqBfPqeSHcdqr3ThFXaW37Ayi",
  "key32": "45gCXDdHFrpbeU8LwyxtkiaBbDeTvq6QWmj1jRDe7fgsmCxna8rRidLf5ToJYPa1TaaWhN5vmL3y1EwkwPp1Sd2Q",
  "key33": "NyMyGHSdi38Q6X1SfJq3GZdqact6HFPg6uyy1b8FDUdYxNs9SxWe8uxQoVQQuLaqf3Uwqi28hoU24VJKkQTWpeB",
  "key34": "5rC8zkSm8NhyJKZH7VGEM8DetAK3M6SXwNy1xRmcSTRU39WrSTCrAEuWGpVkJpPsGeGGPu6yA8advdREFsjVW4kL"
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
