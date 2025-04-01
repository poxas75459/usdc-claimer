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
    "249sMTw2JzBnKF66z6hvKFYTnfeSeGXosJTqo8yXHthyGFSKVsmbpY1fG5Fx3EtYA5iV4C9XXf4uMA71x7UfU7Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDP8RrgRQHseGqyhCrN8ArMonDnQTrxeqaTCJogQsrSJhRhF7poJpdkAhpgErnoa9JEXyGMW4GCwCGTDx6TwCn4",
  "key1": "65zEcQPiWbjvQWecR6kvXm1rZKLFU1DJLACvtrtymGp59xVR4zdmUd7JqKtUdrDv2HrLwjJT5JZZ8Ph4F7BxPUqH",
  "key2": "3rAmjL38uaZuWmWtp3fNFnazHdymoPCLrDZPQr2JQTsKLeJ8BxUYQ8Wqag5TbwiSpVX2M3LwssR9aDt4RhsrcHbi",
  "key3": "cP7sKMJ8riM1ukVj25WD4z6Dgev4S1gL5D7oXmXenNqP9UFBspVadyaTboJAPdgaGmCSsdFJAAe3ooN3cj1vwSb",
  "key4": "3KkhtY266RByLDQySkCbTGPQAFdsxAhqCad9paBXueCifZBKpZEN37zZAR4FPMzq9HkBCB1i8sSwbcSNXp5TBcvb",
  "key5": "3peLD693hjKCConDJi8JkHHix7jssaGYYVcgr53VCHR3mG2o9mAi3UgfbojyybsmLHRpvbzLE4dK7FxyQtC4GtHb",
  "key6": "4tjjix3mTFP1d7aBxMWmyne4W2M942DmxRodxGE8wnmGiA2f8YhYrcTMxPuN3Hdrxwe9SD46gEienJkSVS5pCccs",
  "key7": "2BjkhSkYR4dTto6Syv3gwa3X2k3Mp9hEGPidhL2utujmNQ2ETL9nd3juEQ2wcuMuXSiwRxLpdmiLcDj4LFUYRvRh",
  "key8": "2G7WMxSDNnSS3LCLHwfw4DEwcmnp9DfbLtMTnnCpYVgBuUdhXcW3Uo1X6AqeqN3jjnpeZQiowvWVmo9hvMs1QZLH",
  "key9": "nq1eccgj2S1HrPYF49hsDkATJ8mKdxsnSPFEWDustzNiTh5aFFNMzoKk7x3NGHbWMYaqyWM3kP8ACLSoJmxhcZq",
  "key10": "2bF8Q59K2pxEtaZ8ZBykpkUqELkszrr4Vbo3GMpAk7gg29NqZ2Ru2CuEP1QpF27KeSHj27kmFKQariVTJ8CBHBTf",
  "key11": "4xLLJ1EfWEuCR4kAJQkJEqsincHVhMcYfZTqZroTSnS22c846948JT22wKtnPnAT3Ba3MBa5VDdueXiozthGWiza",
  "key12": "9tyhFCKkSb33fRAGqhedeTAYM8tAikT1fWfuhNvv9F7zRrv7t8aS8MeWkyzpsETUoKtKyNpbFE8SCbqzWHoLrAi",
  "key13": "2NnLMKQVYDXYaB5VSjVixro57iSHmRcJi5TiBUjxHHEeGMEnV2roe3YYKjCS8oVStP7q89EtdR3L9bcr3WwxeMVb",
  "key14": "5uchN7pyXXtpJqs6fCwTzzBPNbSKGQPFxQkdTRuM7Kitrz6d6HpRN12PxEyjz27F3QG5BMmsUV4o6AZshe3G7kF7",
  "key15": "WoPfY8vfqMFRSJdERoquRdisVkWLQWWxN26y61ZoQT3Epah4YPdAutiw25xQ5VERpPkS9Zxp8eo3eDu6cVCmjm3",
  "key16": "4NEjgZSphWWc5YoSZYaJG77aeZ6QA18wRFWncvCoASkuK8TGHh8DiDG9k2ytG6megnEaYJ365rpvhp7XYKw5s4Dm",
  "key17": "4L6muPmWrchXzQetkfJMoS1fM6z3ca7RA4FrPreWHybcsgvA4hUhuG3oZ4DKDRX4sBweMSKLkcYejiVthSMYGWSJ",
  "key18": "2ekX5gdPNWcu6S4hcpcAnhwDjuKbXJFfMeQUfPZsx29ZGQY54dDmzMumCXSvKCeHz55U6NtshN7eCermxLWUQk4f",
  "key19": "2vjrbtfr6U6Zf4zc1whpn4hyYQovEdw15CF8qh8gyDA16GTYTpQ46AkQRc8hFxkvqeWfgKzAXqUKQh2TA8mcDHCU",
  "key20": "55frh7cZe9MmTETFqZfibfJxM51HAYxJ5fhPpX8X5xbg5UVNoKvwWUDU7N8XMubZ65nvnsKhv1zHyMituGGHeW6u",
  "key21": "48q5TzXkm2DpVi8FzUvHf1PpXkKZVmRAd8d2fFN3REVMszHrXoGGe7e49xszsUvA4gD5ozney1BgGe14g6MWGAeS",
  "key22": "31nmEUzjaMzT46ayUurKTcezJ1172aM9tbbdAwa6fqsb6nkKBd7ahHeBMhosvakVC6zh4mP6crvycttpdxuYBvsB",
  "key23": "2cQF67VhExn8F7hrRDj5ndhSKQ15L2oKPB1GHPxCUVjTkWqEQTzG4LW2riZS2kRjZ5iugUkPjh8ZHUnrVkTYBYJQ",
  "key24": "3SVJkUCFtWx5M7GBv2tFEqVRNcagTUahedEqH3gi8pBk3LDRnxTmnmPJnc6je8uNwSodP3ZRWB5SLigJTGhkn4uY"
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
