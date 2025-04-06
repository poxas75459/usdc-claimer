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
    "4TSDrW4BGU2EkGVSYo5ws2adoRrpVCggqqjEEWCYzUqnbeQS17WmWCP44piWYS2vzKsZPz5vL3YnxCqUDPYgBUtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZv7HCJ3J3b7aidzwAR2G8817iZunN6mHWj2D18DpmpVRaKpnNUMFGNhi33vQEJSuk25ttnwXv7YYmj9gzi1fim",
  "key1": "dMucN4GTun4p5j9C5UMu6bGjgwX2uEwWaNQCutzbuLJ9p364Hq5sZdaicnv2HzLsReUy24CxNGPgwzUyT83Bpoz",
  "key2": "jEeRbZg23PXLcsUoTCEeZs28RmA4gPopMQmEhHzjKYYnvxJVdzq6MRMuxd4eHMgU1B7xVPXc2gKVyWUMQ5xwM7B",
  "key3": "58qBA9at9Kk8r24jkQrExNwEgn9DPiYhwC8CGwAj5V87zhBHE5KmuXRtKJupXCnssKbCzvP2HgN417PFRfMCds2u",
  "key4": "5rzYBfZU4PPJB8cZmwa9xU2eaGJ7PAQDiwG9QX6NSYR2dKpqFWd2sACzsFVLKqRXa3LV9zhRTGoJeqdH6QdA5xPt",
  "key5": "48bdZ6YqNLfWA6q25QX8RPjEFMDwNqjLcvCbxCewk8pNoMhp8ATLYkuXkNB5hL6kFSHFUmCK5uqWiQtNNSbUZs5u",
  "key6": "2fS871h84YqgeJbiKTtErDYDR811n4sFXTmUJbGm9rq8Qr5KvveDHNWKiUjPoD74quDyXzfHdcvhoRMGDJJgG2FB",
  "key7": "3EZBKebtvDbBjcTSv76HZVyD94oRjoeRbSZ1jSmZLp9qeXDU9RRzYeMjWyzBwiwCCtNMXRD29no5NuJZ3WcwAc2c",
  "key8": "4MNno3Cw7d1PTdgRgGg4P1pWrC8RwFbYCTbMfG6RpdWFkPoMWs4yeGgjMVXE7JRyDiuhLSbLpmMkbD6hHGoiW3hQ",
  "key9": "4BzzVq6nfreUFPAf3WqHcF8q1SUJLpwfKJErMU5PmXpT2eVY3G1TFeF1eh5sno5RV9mMDk9ASmifaWr8fcvGKr9F",
  "key10": "21QZBDVRdxsDcki7TpQkJ6sPMVbUSq12vTRcBiyzqVAncHsLAuxXVECCfS1vvftSq33XuKc4zraVWju6t2FbzNoQ",
  "key11": "NemgnZLHFTsK4xENEXuyfRYwCuvkp7yov3Mmvq2gsaqWahj1oLg9o91rRcYD1TZS3nEfg3iP6widAsEffd3yt83",
  "key12": "4X6iu34QDnTT5UUeUrarmGa3daGQoLWA8ZiGRQs6eKvLGjaxRQev3eosQMafAHa4N11nApXxLVEncu2ufBcugBEn",
  "key13": "5XJfceYXXRDcocTzP9Dx3XdY7u5DrqtRMnNy17vgdLoTkMDqFtEc1kSX2BMLMpBjnen9TirMKtgbHwAjT77E35p6",
  "key14": "63vUHvGp7Lz2LMcyEF6G1oSaJcMdpQa5cbg6KMsfvLzjuGtKgaUimgeyaJu9BNtLMYdGYQWhBbekaw5UVSCsdn3L",
  "key15": "2DcK6NPd16aa3dQjW66wshU1GWHNgCwhnAKzxpp6QvXP3EXbYDsrjX3NFQ2bXecH2vjXMdDovVGpcpjKTCDVhoUz",
  "key16": "PLCbs8z2RHSy2fBRcoyg6gfWhQH1MUg5K6QpuT2QNjmzPDjB9dr7rZWHv7EFCTHM4tL1RmzRPMwgeFNHrrdw1SZ",
  "key17": "3wqDgKZ5AzFWkgosGsqAywf59QjS4xUa8uJUNN7hDMp2Lj5uHssAc68wY9x3cebQnVkN434E4f7FwvLbWv4F59Sk",
  "key18": "2WiK2MHtRznhy9UkJeJufriamobvvQ7KhCU7td765hUV1pywUy96msQXfxL4ZtN1Jnud3Y5Bxby2WovPHk2s5L2b",
  "key19": "2XpmmryMg4dfyPbFe6WU9XFuQFHpjearp6uoGVekqdL2EvdQhASRvpo8afFDFhACrmPmTpfAUKUKDVw1zBmqZ9mr",
  "key20": "yNttg3K7jvyH2rqw1asBq1bh9UabrM5arNECUBgrJxrLk4FcFZXFuiyxBH8ms1JfMbST9xwmdho1oPgXeCWqSNj",
  "key21": "5xFKnvuYyRtaciN6xBY4uKmUeg5ugXa8YJbhQhcd7wZgaJqGnV8Vr5fcdugy6U2JvNYcvNUJpQLXm9rF1kXjespo",
  "key22": "3VM4ir7JVr6JEVRVSc8badmxLohm4d9UJW8pxWcxTstju8k4qtUSG2Qwb8ZFsWmPcLwk4KEwPoP2AG2TESvWkRPt",
  "key23": "2rp5dYspRpDedg3GLr33c23mwNJfxHuAjiScEhhf9UXZ2gSnQZFw8UGFaymZ622KEGhrWUnMdrAeAPH2YK4zgVH3",
  "key24": "26Hn8teCuS4KqpihEhQS8sAmcz4PxzQrPZJcnzcgYYDYzQVUCU46jEhQRnPPB21YMxZ3q5hc8HrN7fjgYKhYsd4u",
  "key25": "SDWVUUoc9P8xx6Mcqxa5rMjtbLPodcYiPyJPKA62UsQVUfbK9goZeTghKKmXtGdqMwW6mS2NJiW7i8GdsA2DQJY",
  "key26": "43FcC4gdTmwMw2o5LttfCHTVqbFGzod2hKHo9FNevPE87Z7EwCkSFPKs7ZwqtaJPzY37E95iVFWAfBCQJjwUQjXQ",
  "key27": "4NiyV1dkfFQutfzbc6BH5qE63V4mr1chSheWduJB6iCrwpu5SsAm7JfuUyHvKfNcPKre1jsngaH9ykXU9WBRgpvs",
  "key28": "2ezfE7hnyzhRVAasMaMWXfZCycfp7W9PvEwXDs7QghVKCaJNvymtBi9v8MfoT4aGFsx5kNF5JZ6YDC91WeGudHJN",
  "key29": "4wwckGNmtSLaHCLGw9sxJa9tYYrZHUn6Ezb3dHVdRYm3DycmxaMXJPz7EMh6pUxsXxGxBT1AeYQ8K7e9L7jzrdM9",
  "key30": "5d1juA7Se9dPCoXfMLJUqAMUEu3qo2Fivi7F7bxtRkdvpQRiq97S5ZPvc8FU5S2PpYEaaqRMSCKzYGWrRgoXjTY3",
  "key31": "4Tdn5gfiu7bzfpc7HkTMxTw7JcWS8ugVm3qu886ZR9Eb4v1iexnFRE9EwXshs3cS489TxwLB2EjeqV34GYHY5M86",
  "key32": "5EP9hwWy2wopJtBUUAABJ7rQ4pKjQLFwvzr8NKTTVXFFziD1zRwqw8GswkriYENMEEa3rf1LgKJq3WLMmsD1ctCA",
  "key33": "RJPH1yrpX6rQjQDMJuZJTTy9fWjgj6tje6bENMAHnJvZa5b9z4C3hZ2PMp9koX7BrNrVLVEvhBMvmqwfXboyKon"
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
