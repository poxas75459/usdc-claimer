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
    "32qCQSaVxL9DneLFgbnk1cn8pJThbLGUtUn7bc6X3AVBEuwpWKj3X3i3Me9RaKbhZpYUha6wgCXjTRVzUA5JvGHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8gfwhpsSw8WKpxRMsUiSzRPQPV6UcTGMCrLDKQnm122Kq8LTzZeqqHjfEFEJetN4QrpXLefjQHeYxAyYLqLaFq",
  "key1": "3bzN4NRkcsV1ToNssb25gVsapjf8Ui8EzNMkDpvVpzPYKbPa1FmxfQcDjxRzWyVci68YupMJiEe73Ey9Pq2KF6aG",
  "key2": "5bqYHMChnUyjBbiwzDSsKUaVygbCjP1PAUWLYks1ihUEyCsmJJv23j4BYqbswXv5mWBVoAov6MXE8FRa8tqNvJf7",
  "key3": "5353UPDXM561J5tdLEDbEHzMjH2ujj43ps1s4hEKP6GE8SpTwvGdVvKT4PyzeQeaXVVsvPA7QgAhjw3VzkRqXWor",
  "key4": "pHCoB8y7iA9ZHZBJj8iyiQHCxATwJ7P67iQJYLdr7fPrSUdAMoabJHDVmizCax7hgCXcaVMW8kufLXzSKitoH9i",
  "key5": "5BG2ktJX1zzDJoptCsPb3fpvXWAbg1tY2EEcF7MV6eh94KcqJ3vAjmPWTpc6CDpvNtmEoLHyqw1opHargA4KxQK2",
  "key6": "N9moGk3Z7WV4PUxXD9XBRxRXKuq8dUhYFmyLzqTDeKmxxUz9KLPBpecXWLMdJ8GxepSua4fpMNsRsDXEHgGUUiv",
  "key7": "3VY8jv98E6ozsr86gSVMTV1fcjiE77jDEDR6fj6XtinRg5Ry7ynQuSBojTXEH3QytHquzi6aSwzsRuLc5RYvrmP2",
  "key8": "3S1QVdj4PqXvcn5momd9fwUnbSR7BCBXsbYvpZGU1BBvxfvK4Rz6T2dZwwWsmpqRpjHneWJorNVZcgCHYgAwMAsS",
  "key9": "3E8AWbmD7budkpbxjsqjFqiaZ4pAPnLz9nReMdakGReMHJKaUZttJ5kNhBGYFSPcTCr2kb8nZfcAnKneexwrCQ96",
  "key10": "3wNhWMmTAuhhA6MpqAR1BpgQNvMMPx6wfxhrh6k7sB4XaDCPqZpWbphSvVkUZkseByLso1mYTJPnhyoVyXaQdkVt",
  "key11": "2WxTtPQ2oZ5kPDecpiSfrPxoqs3iP6VS4UUKKcnQ3gpQUARKToHH82MW8hpDzUaj7EczG4XyVWnmL4FLcxYZudsf",
  "key12": "5HpWWLjUVEzSJhmt8C6mbj6oS6eH4tfABDNsQj5W3DsgNvBB2RPtu2LQDRaHCHDpGbywdRS5mvL3YtrQqDFRKHtn",
  "key13": "5HvieVqPLhVGTNAGYBLF3vHVvMzJDwveeSJZyfqjFSiP3D4B9XE5sYetAVCAgFWmpvm3u4Fcp1XnRsCSCwrBpBT8",
  "key14": "4zFiJPbTHSuNESWUtZHNsi2BQ1huiYkpbmZtSdMnNEX8UTXDEs1Pwe1Uj8UrFCLoYZFL4G6yTZZcjYAEJuSSjn2",
  "key15": "64ATLtaihenTmne3gXRmnJL379YCuxaWYe1bQp5U9gBMgzM91xMszhZYEzxQT23Y7Y14Soh3LVp3S6bNp2JtojNf",
  "key16": "2MF8HedfuN4rLV8u3DfP3DDZ45TF8jvLyjqH4jVAjVKe55Ynvpni1AoGktU21NmrCA2zyCCXktxZtqLnFwjfpQtU",
  "key17": "5ehKX7x6C56ER9HJUyWWekLeqQVKV8nwhenMRuwigBn95pXhetZ2LBzGkZasvJhJrtGfp5rJjrSXTjbPnHgtF1Zf",
  "key18": "v2QnTWGLpazB2eAdu64y4Po7Y2epPvwn8Tg1Eyu27ZZan6AFY8yfQWutjQBYHDSgbQKNBpt2jxMPGZMorAdcS6k",
  "key19": "4nxBLuutKrjfYYyDEmoTELYZpRpJAqs45SeuTU494itp2EgSH82vcXFCceMnX2NLHpactrAFRhuoGzbyu3QNNtrP",
  "key20": "4TrvtPvxBdUyoSsD8z5szXUi8JhvcomXdRGU3Wqe4YDUBhvYE2YJEXyBBf8b3PZqDsXrCg4y5txsqCVeFXuaPRYB",
  "key21": "26RGqU8zD5NUyqP7rwQuJrgoUqKjXFdQ9ihi6Jr1g9k6vcR9GoUyXxTBTtHXdYZkqQHnpf8CVD5vyxL8zNGDjaAB",
  "key22": "59Yv18iBHs94QgYjsjUKka9z1ta7fPoaLRXeLSndBnNpxYZNHQWmjs7QXfDH3rakLdQ8cgrCpM5LTxQdeqm4M7Eh",
  "key23": "2GEATeWoKNSW9mAymfYT5fUxVHMVSqFNdgJN4JMdjgJHjBEHKPcApZyHG6ucfYtNWgTYdYAQQ8wVvS6SPLEai7Sp",
  "key24": "3Ws9hF8sjvph9AB8gh129gCxTDKE8Uk86eY48FX6QcSmzAdPnToLi4Ttj7aD19RpN7hM7yxVk8n29PCyP9Fx46SF",
  "key25": "7y3KajT52hajL863TVv8EbtuBgGcCW8bMm1DSLB17uUaUUcne4SkVsuLHWMS97DRf8ejp37YL4TvUwgPH3sjFmp",
  "key26": "5baRQATUjouiyaXRBJpeZkN7S57x74CCm1pJd5SDgQbP8qd5x3tFGFS7giS7ZUqfgSBEvqJLaWqaSphu45Ui12nE",
  "key27": "3nvWmwCeUfASAudECgCuUPDKKF8fNpbzXopqfFs9699jrtVePzqinbYWTtQvpqh18GEH838VPCpCd9Tw3WC2w8jJ",
  "key28": "3Qvai3s9jyF51DMjntAfFXaNTLG3SEyvwnVxUW77ujSTLExXELapsbE5oMj3ZqCQmQS65asuL623AYUX9pbmf9Xn",
  "key29": "3yZ1jNDRhdvYX4BaqTA2PF9nW41KLFJkxJ8yvU9s3XUVCvfQoCEUKQZZswuiZ3zREqUUTNnmxkhL9iiMbMeeqJpT",
  "key30": "2DHrmB9NyBy3kf85psjJaygZ9eR3GRvre2kQBQEiLhcFEYGXsvSbjPKTkBNGsYCcCVd5dAZLz1ASZaxshp1STrzc"
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
