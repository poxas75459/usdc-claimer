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
    "5jcGYD8M7f6KDHwddnB1PUuttGfMHzLVKJMFg1GSzYRfGyknCVXQJvN4xH72g2JpFHqmfyNQ5qXzVc6YCmup6oSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbHmE7VaPQxSmuxd75SNDY66Q2u4vhsQoBozMaFgQxyX6G7UYi618Bc3Cz1RxA4cNzjKS13oXbP3rUcjLyTWcde",
  "key1": "58hTZCdZsmLnPsn5MzQTN5gi5jsu6sUXPQbyRmQvJfCCEb95MAnudcDB85R3YXsQBzucUNZ1xvP6Min5TNZ3zjfE",
  "key2": "LfoMUYMe8Hyhh7Eck3Zex2SfQ2hrjtueycRXMHnf9MzjiLbhzZ6LWgnbCGKFBmhvqPpfJQuxQYgCuF6ZFfSx74d",
  "key3": "3Gfz6D5gQpTrfUEhvfsEc6wEC8dZfP7vnzyjFAPjgZzC41AC31sZRkpY2kai6GnnKrSfxYgvRSNoY634pbGs5qLR",
  "key4": "5thukxHdTBK8b6xA1nPi4XDrirdLjJKLb8iBoGzCt7QboKMrZfspCT9YsfsYGmo6nhgb1BoYZMN6PBcGoDwL7piR",
  "key5": "5XepGLPzgcxr2WmeCTfRKHPMfkxphwmjJcm3SgMaESVeaWbnqjTG3qBXNR58WxmzsBt6XCwBgXqzL7uMD4ux5RV1",
  "key6": "59C4mHom7QQJApyatiCm9EPiwjcWWQsMsiQqEzpEuiJdydEmj5SFHdb1ughRfafAhFQBgabbzWm27WTVZWuho5kL",
  "key7": "yUAuU3Mb1iQqSbr21SCpy9cXpXBCTobWcPvd2aqvhSCH8jN36ZWK8nTJmcVbHfmEHT9uZz2Y1tJVLPsgqGgs6pc",
  "key8": "2MVCdhuQ2TEYktsgMwGAKoFaB6b9UXrDQfpNCX5fBPbFLmPpJ82Lib1PSdBmg5VqH2K1NeSKdRVutx3Z1bnsknwo",
  "key9": "5juvFEAUxFtEfrwX9L2Mxgm7Z53Y8u1gQQiJhSgj9wTA4vnNnRs6gzR6TKaCNdudfmFP31MpFE7csLLCuR5HNtgR",
  "key10": "3mkxidZWnEA7u2D7YjB37NupzbsgLVx5zBWpbVzS5V16gyHNnGiT6PSYjioP2C5D5XUBYE1S7bzAEjUkZT6xdEkm",
  "key11": "yN5QHLhD6ua8Cos4QSyiiFZt4bvKx33SveWhYnF5JVRnR8pvw1u2Kc2E4rVbHsTJoFXCXvmAMFp1rosm9Dz5cn6",
  "key12": "XU3YhnkwS1yGm9Cvf1Evq2gjYUTB6gApuWhfLEPo74KzF8NEJVsj75JkKY1vLWAHFv7evaav7giPGnwPAu6JCRq",
  "key13": "5Ku4KqT6HRG97ZqEuCVkwa3Upp235583edhGuR1uxRveRjVd7oEjMJDS9k7afFDsaLekQt99oUC8FX6Ukbqk4qqX",
  "key14": "Sgbf2RLBog3ytc6gXHL5UcSEMUQWd5VJCjbv97g8sSMStNj7PrArqHsVP9vbtjxygprw333gFU6FoeqqyY3fWAi",
  "key15": "2hvyLNhaP6tjxQb2nZDStXdoV4eNpyJ5SCcu2ASRRsCLLN9beQLxNLPmiWuVYV1DJ9KSc22aLaQsxce1nYZEFuog",
  "key16": "5o2YS4s5T91Hzam1gShdxQEacvzTEomYiEZdunXf65qc26U5KYWTGcW1ydnoqKP4ciXkVdJy6BgDXTBpeNbqNLHm",
  "key17": "3qArU6bheyoTqVbs1rnGtGRAaAxHvney56F6g9z5h81a34wTX8shuiK1fSRjKMm2H8EzjH41FcKeABap81DBMfji",
  "key18": "5FPA1ExpZ9zAZQqP1JBKRukLkPyLbPAXQXgLwzy4msA7ZEEJBMwBjvnPFVT3eT8bcyMMx2KsM7mbqMJhdqo8BQVu",
  "key19": "2GkJPDnbDSoDQqCs4SpwQR6fG7U3BHHpqWEuavF6RVfM67v1B8whhH9wqA889FuA27LHnXfckbTaDHz6UKzwkvqH",
  "key20": "4HkLYGysrVQUtLMcuZCnHwuVeJvK9r4hS1XMELmHW9VTM1k7VPa8z4tGs9tgbym1P8aLJPkRnesYmwyrYUnfYYr8",
  "key21": "4ndkmLe3BCYk7dmrTfetBodCB6Xk51kBJEEwvnbnSdH9UsQMTKkqv17Fuu56oMoKAK41MatCXyNvSngKiNNR4v3C",
  "key22": "iH3EnYhN6T2BEBtHDWQMjv8V64Qa3z3ufdGPPNqAG6iE1MtggJjALdEpiqNMg9rt2WFLfsNhAy7bYfByxaECYmF",
  "key23": "ppetvMQFDbDftApqMTEz9v5XqyJkq3reqoLZVHhuYUQu9tUczuCZb1QRC1ATqH1wxj46jRAp6P1Rjt4FghXxgp8",
  "key24": "45RDP68rd3HDHx7SMHviEhrKafoB3H3PQZKMG6bzQu3PEmGQ2whtVDs17X92ogfb9PmdSiG3SVnJikgFs1XfucXT",
  "key25": "D8m2hQRAe38qoHm5TDrDXFjezFT312vUfwQhYE9inzXan9HYLMTJ9zbCuwxYJ5Tzx7k3oPowBJFcJtkQXy3otK5"
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
