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
    "5xBNaPdQNavojZg88ofTNz5oEvaMyi3nQsiANNJY9wcdeSF9CwjewgBauCC3aVHG61Zru1orRQaR4ZuQMU49vU6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471jiW1GpJNbXS3LvQgrwsTVQpNPri5YzH6Nraa7977zG9zhJKbVZFhkvE8NNLKVcuiyfBqra4bdoB5ZcG1NGE9v",
  "key1": "2mjcatHhGXpWgCpNVu8bLtp5NzAZ7Kji1GCUhK1icNn944tCuW7z5CKPAqjJU26uCigcUfWoHzUkB1P5jtRCc2A8",
  "key2": "4hMh4FdGQPrsfB6XQCX2gwRZu9USyRxM1C7FUfc8V1pJwLF7thd2LXooD7HBZBm6Liis7RxGX2M8YYucSqg9k8qB",
  "key3": "3i3ygSo1j2v5qTneRxLnDLsULLy83PwKNR1Wk3q2PNMHnVzFgdKuFkL95bpPAzxyzjr5dPipJe8mVodgMCn8nMpz",
  "key4": "37Yoau93dY9nZVWuDGnfrCSobEwihoVWoEZxj4ku3gBBtdM3h5kRGb8Fh2TdrXvB8y5n6KaiYJzdgw35rWwCY51H",
  "key5": "3F3NHyVzMsz9Fa3qgrr4o4zwavxDcHfi174b3oxqDNVTcfKdZD2xwzoybs9STAHUqtA1tAynsEUyijXGuuPFSh2Q",
  "key6": "2Z1RsJNd2y7NaDiXPKsnQVS52PTrNCBs1zjzMhp4MjkDpVuLQMcv3hkojqF3hutHYmQV6FFsd99R1mLjvdecioAw",
  "key7": "5v4ygKG5rKGzE5UpQy8ae6sR9CtrBtY65qmBfkKHjfT6qqoui96j3okQxPsXazDbLhUkTfrYNWkqgDZts9iRxkjh",
  "key8": "4VVrTtNgiQkWfF5WmGDvoQfesA7s9NU713yQuEiQQ2utBtF48ZTDJ1JcaU32596XQNzcLQrji6QQmLnMDnVCTRyi",
  "key9": "5LEZEwKNENNvtJprzUECkyoLWPdFa1PR22cm25WjJMRE7yYADr31CiMiX2pTRNcMz4BtbKkgxfGp13Mb5AiW53oC",
  "key10": "3dAMeoU5891a5Yb3y7cheaoQr8Ky5Lcdm87aYQUjLndG47gAC8sgBw6aNgtmQWQxZ8UEaz11bydpbyqYAnB5feR4",
  "key11": "2xZKxSYyVcwdwx3eDtCFUge7VFSqeEExpoaQwjQqqPsaRiQPpjhHHib4nvNChKS9knPWk6vh4cCxFUejQsk7YrUY",
  "key12": "6155GmCAsiVnseMHYELZvTnTuJErgpayRmJjF7XTTBobcpLBwdccEsV1pKa9DqxMxAFDX19oYmC2R5EuvGYgwejs",
  "key13": "3sNXt3bXsUfVTjrPumckTegBDHWAV4Hnrh6SN7Jkdn92AWdijwGz5wNnXShemGLATLomC3R8rgSKSFeKbJu3swYb",
  "key14": "5oAq8mmVQ2d3TPqsunnhtnrvAJ5SAQXMmuUdTE6qrjgEABgjzwnVczaG5ErvY66VjPPA4w3EqfTww3ZFCCaR8Mkb",
  "key15": "2rxZ29bZ7gtcjdjNw3ZfWvXmtPamVTrqAHNwRZj9ns4Lf8VVypycAMRhMHCQiFPpSjKKXUwT9chUmJYPVE86YT9b",
  "key16": "2w3k3DFTRPrC33BKhMtq8v57Ym5iJPPaNLVEKxjjWTDpXAhBCbiCepw67Levp4jNngxsk67Y3FwqjZxfstL3VoUK",
  "key17": "48aw3gMbCyKJf63G9p8z56f6SikU285xzbLPzhpxdTWP3VzkJhRYaYhq9FsDjPwtXdfrALsZhWUTVM91GrFDZzbr",
  "key18": "5Ewpj8jNUydhWUerA1NGPY8zMwhMuF4rLdA9fjdtuDpUNv3ctwR9ea7s6yT5QmX5W2iWNU1ri3D5mth6eWRgDHzN",
  "key19": "3ENUizpJiZSAvfnocgEAJipuN5AMtw4kv2za95vSDTrDQX99Dy8HFKUT9fmFvYyYTPwKSDZbYJxtEEmoi7ZmPZyN",
  "key20": "63xy5aPYpYqwxwhrxDkcgWTvjo5x2vxyckcmbdL6hNSz5W8bHzC9ni8Ef9uiXNssMj6TZntJGfZW5VBGAYRS6jaS",
  "key21": "4NE3ven4SEoe4zEjPjnQJDMZG9MwUm2SPdVqKAWVAs4rMUScZWSvG3JeE3JqjeALuUW1xKLhyn4v2wSCwzN8sXmz",
  "key22": "5nhRkyU9nLWRscWNLnnoaDwERy9UbzJuBntwu6cAR8P3bGNKLS6i3AftFsncGsTMGeNkGbt6tiu7fBkBPcFZSJEC",
  "key23": "GJ5bcNAhca7oTuXUF8EraH1P7dBSSqSHXFjSt6UPmwZNapu5xZcZCsQujRxEg4ycUEoNgVGJAfmom9P7Ne8ugyu",
  "key24": "4iXNicTTPXDheUxmfsfaEZnuZVpFEyCQzXTvXpUe2i14nULty9Daom5qkDzgPFJingdcSzsq9pCmYpmnYtdeSctC",
  "key25": "5tM5aJYKhjF5h5MmQpr4pthKpZzXe4aCkf4Cm4KoPCTGQokRHh6Ffu587gYkYYfqqwCmnyuQoU1TpgYoCpp2db51",
  "key26": "3kJPgaszBczSKacAcHxj46NtUP4epxiCQiME8aPCseTKv53uzrceZr87RWseBjp6qZ4VYdRiEj4nRXr2DdUuSfAe",
  "key27": "9bmD5zQnTA9En1Rrzzv6SfxqRzdxtRkLhW2PDPMyTX9kxyC6a3magmxwJnuPGG3xMEV6MP6q63mDup8z7zmLGkj"
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
