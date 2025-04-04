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
    "4m8UGbzJDCaxUgraomYaxp3op3oaFanevCS5JsV2aLytrJaJ3iECcR7Kk7Xun1WzeWJ1RLXoooq7Pz5ba7zXUYsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCncCKFQdN14MpnMYT3Td88FpNAETG3gWN6aJWVerge16bJHyvKQVWBki6bQp1GbxrEaxhWgymA1KAi8o72CFVw",
  "key1": "49LVWxC8RnzNsMjuoBPRqgWwLxp6BxZzYMVqbPSp2t635GvGazQ57vZJ9SKLzHHLzhWbkfakfj3VqZurxZquxDZL",
  "key2": "5mXix2qMi2sJoYJig5x5CgAzYubSmmnLALksJj9N4y1P2QyCLDzY3euRBx94qTmQPQ9hxRHztxjVqcV2Neo2uBW3",
  "key3": "3sDKUvk7FfZM4haE6X7a1csJ5JKx16hsgi8U77RJxxLUKDXMityDbgkXvpEwbygdNCZcqG8HP8cDD9piWAGuAcKz",
  "key4": "2aSzcCiD9qt4JD9NNAffsUe5XgguWEaHzNZB8fjWCXiC2N2wfWDHdKXTxofQauirgeQxNNhwig2vpszsoCHRzTMu",
  "key5": "3Jp5DYm7suu23F9eoVY7ofXgd8KyxE4AmL1QhPU9xx8iKXeSJU1LoGTNv2cL22sYVbr1iffY3ioWGgfydiCF8gGs",
  "key6": "2udS65yuDJeLEqq4mVrvmBCmcWTiDwBfbBewmjKboRzCzbzaX6Edp4AxA4HU7DsiJppjaByAUgKSPsu3sLtznMHu",
  "key7": "E78ykksu8LGqa9hVMou9dx5q6CoBoJizjNdHqkQSYTkzGZmxUGpuJuX6bXyf3HG7gqUocmWaJb28fc3Pcsqak57",
  "key8": "5dHVSLyZXTeMxfk7ttyNiAyAek4GJsTXyiFgzhawjuhjq1V2iYSei8zSPnU6PExNyRdkGg6A3EkutQENSaCHiunu",
  "key9": "4rPAYoohQ3PZcbKUnC8GLKLu8vgMuwyxJtFxBtHD3zTsxQaxaNvNgN34VMRNjJEp2DxmZLyKDEKzTkZJgB63gQVu",
  "key10": "3C5j6fgcTUwEA4mdj2QGKb67fXRJgh1LngQ6QakniyHj2FZTifGd18CbCcEtpMEH2ai6JCYYGwEiUPBHJU3tXoc",
  "key11": "3CdADLcQt1Nv9FPiYgth7GKAEro9sMbeUa2gxNHKt9tjytd3W3PQ8sY8cvGmxjN3MhfrMttLWVkDDgnUPqk9B1k1",
  "key12": "5khoaLFZNbrnpNt1htj4Q8xPJozFTVSqovAXeNaPYkr9okit9GzBPt9PVF5PxcPEPb5V7qBLdfBwTDCQSV1r14GY",
  "key13": "4Ev3zqtKBQ54WCgRXJGG8qXZZftioAtWZWHdCSo1r6wpaUqVEbpQsY9Avw1MjRHeocahZbCHRsVbCgWEiyx2GuBQ",
  "key14": "2HA22PQJWbgpigrPZaxNhH1VyJ1t73D8dKfEPrhrYpkGjTkgvs9Kxf4hysTdXi8qjoimDFCFzamTBAqHrKKHQqDV",
  "key15": "UWpwpnbu3XHRwtFyEcsXrtL5pb1dR2LV1v3bcaZK495agNZmE2Sf2v9yqwB4PyVK7gz4unU3BMCj6BHAwwkkQKu",
  "key16": "5y7madiY1d7UQoyFvq1PmXkWrdg5uzMckZYrbiUPaDW9zURVgwBhcwhYcawccfBQaPsW5czH6sfn2LKFcK5vGryq",
  "key17": "LiEnMgMYJEZ2h37PwXNZY8ahjD8FxFGCgsNc3f3mGtnQST87mhStkRTZQVAmVpP4ty3cZstLMCgcLmaTTgsCVGw",
  "key18": "46ygEMCCc8t1pdP1hiX4B3nMCkevxQ9iAVZ52PxCg5kbxtqy9vtpXs18HADVUTXdNCEZW2CpR6APjNLTuNKmjqPg",
  "key19": "5sfzCFZRt7aT7dxqrydzrCHVHqgHE8xncAdSi5Shx8mPFcgTEvCB4A1jkPMUVYtRcYH4aSgzLwyTWVA6jS5cBVM6",
  "key20": "kkUi4P3mbTNhisznq16KmqJjj82Dmis3XyvcHV1PN25w3oJh6Muebx95UWXRJ3eQwGr5CHdwodtR9gUYXZy9Z6W",
  "key21": "4Yh3MppzaPH3u7eefe2umsyXKc1gX46pQTVavQpFhaXUVQbfDoE3foPZgQJRo8rrcebh2GJSoxdetjNWjr2DYMtQ",
  "key22": "EG4d7KH2dvymg7ipUvMoAVmN5RGF3ANMqpuTYp8Lhv4X3j8N3fNcEEtcZdweTsuAsudjVVnRm7BRtMyGAMQFwxa",
  "key23": "5nEYTYpq7p6ncC152CUznQeTmhvW396GCE19ukugVhqAsa4pLDMTNnZ17UNZSBNqVsxRqvYwqXNDSuoifoUZFJpL",
  "key24": "4cEeXDsXDQDV97NGEiHwqCd5qQGT3VtbbUCFrjC2MnSG3uoXbyKoJSZwAkdHqpbTYcBdxJAiJLHZmXTY6cWkR5Nn",
  "key25": "5DKmksex13cxy6QTNEfbqGTf3x7ySk8FLs6WhJXUwpGNaKHyZBkiyq4afzxqDs8ptCkn93gyf4zSsFeucV7M4uBP"
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
