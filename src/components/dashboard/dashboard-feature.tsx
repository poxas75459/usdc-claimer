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
    "Lve454s5Rnjk7x3AYpn3q89zXxP3Tum1hrw1UQDfjctEhuy1ik8bzXrNBc3pjmZvb7LwDPJ7KPE4ZiE9aK3HHpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQQLHCBHgysA591Fq7XhCSda826R8ZTMAs2TCCwp7VsqQ2q1FsKKaR6511xL8qWWLQJ8ggWzzAkaa2UJYi5UG4k",
  "key1": "57xVZ5EaWueGFpohWpUhLUJx6poKRZgbSJxZ6cgxmem8KPefiaKsdn6D7D6z86csp7nVZHDBqe2tsGMjRQqkUHw",
  "key2": "4DYKyWr9KxV2EoQcAhMd8UM5Gv5ZztUtciNPDamxWeHvt1pZzDnxoVujxgA5s3JHve9TycmAVidg8TYa9ZTy13gD",
  "key3": "61fZxdUsmQT3SuCB8K2FCDRJaHP4jU7UujRY9kvbvpD4jYks2w7s143yVzRaqi6FyvW7fssBXiH22wN3T1a3qkyE",
  "key4": "2VYZhXjjfaqRJrFXSUdEQ5VsUFaXemg5h8QcabHPAju9kjMRYqguvf8P36WM5CNBwDMQwCTGcyv5WR14Y1FvrcS2",
  "key5": "3Po6KfdX1JHGmDRfWtvUAEtXTcP1trKBitpuxFCvkbifDkcyY7fAA31PebNbVVwBSdKEu2YvmpAPyhMdcXU9VEnQ",
  "key6": "4pEHTLT2TnhxcULArPtobd36meNvwwdSAATDptgcvtyBxeN6nbg6Vuk6gn1vyYx15HMfcWJ3mVPrWetLy3vm91wv",
  "key7": "34iQ2u2ZumPcmifzFugoHSYe1sFv9bQHJyUmmHmb96w3J9Xee7w8NR2sx94NFLS5Lgq9ECCqMsUMLiCdkm8ugCZm",
  "key8": "aEojVkkVEwtrj7PefG8XAonoFSyMK2gDdywoVuhGGVVWZRdY9Rcy9RVURambWqfVu6gTbX36RRyDAiZzWm5u1sp",
  "key9": "3DuHcUAS6pVshe6FSjFYvk4o1Gu8LFKS2GRqsLpE5NDiSj6B5wc8w1zoZogERWEck253WJCr5HCNskwwHXXjibWY",
  "key10": "v14CMztDMoxnJvCTwt5hZivQufTFm6tmjDTy8Civd7WmVqbyEMHWpiH1DsHbGVktNZMTUmHyCfgxiGXyGheDchN",
  "key11": "56ENqVYBz655aRNpAuEbT5KE2tPRz2Xg8BGs9FTmL51yEMTNC4cqJRjW29XF638iBmdj6jaVAhs74H5FASRzNyJX",
  "key12": "28Tmac21MPxqCccZboVuE2tAtxGwYY4xCJRuHx5zAKPamGEjU5vuTtAMzd4td2WABho8haPMcUom1MWDEDFgWARk",
  "key13": "4MKs2r5LiZJLUccnwdSCwLLazSAez8TtLyufvFYCvmiyarhtD1wGSM5poVD36uzEm5MZBPqQyDuB8p6JCNr32uey",
  "key14": "2oCLv3suTttFbEixQjdoJHPa22J4mZyi459ahimom8Dc4G86GaTbquMScuk3reRacg2riEbfR2wusdDU5Es88R7V",
  "key15": "56HVZ11zspKSx2MfgPNGe42yWpg1sMoNo9sqZ1k3an6Y2Fr3YMF1AHMBbJwt7ehFMU6Ddkngtr6y1oUudJ6ucJ7J",
  "key16": "2U4qEChQUNRS5RoZFp1A6iJQjVVHaX2Q5g3v8k8HpRajsh4a1SYFniTuWErftuTAdhAfCeb2gHrWwJG4PpfExxT5",
  "key17": "3oVdSVxJ8aKSFo3Wet8dYk7PppmNsF4pS4qCYiFHQmRYV2Ghu66nLM3x44ciD2KW4cC81pQaj9qAbkUkEfDC35By",
  "key18": "3vZ3rZevcKaPCsg8y2Ac696p9Ny5EkkcTjZZqVnxSmiwR9dKvD4crxoSvNivAcDk7bbJ1qvr3QLWHthuTxSQZgiJ",
  "key19": "2L45kxfHPfafN3qBVnXUH8249Dvehx1dHAPkwy1EdByibHsiiLyMY4tcb4q2b4Zy9Tk9eov5DCqAuShZYAFuCtJX",
  "key20": "d7J4WXxMcRTZ3BL5Az9G4o83UfpNvnK5MzcRLSRNr2VSGmboRpWGJuHnpnqsdti9YThD6AzQTexwCRYDn43Zg7Q",
  "key21": "2mUxHCPtvUkZB6MQX5jzrrP2CaXQVP4BBioRCMKpJ1f8RjYeieHM1vnuDtbQi4fZjdDoW38koVDzH5WCrMtnYQDX",
  "key22": "3J7XsTpvxQPj4JXoPsBzCqLGf3XLqwcRvNBZkN6Qf5QoKM222oAiP7JMqe3QYGDHiP4ngwT2LgZJjJWKtTEEU5oK",
  "key23": "2iyerpJzD58kTqt8cg9CAGNi8Di2Mtp1SvhxkprEHStRL1HgMKvnyQxhq4g9MZx6LiQfjUeRw3Y6cSLrbXe8uU92",
  "key24": "3WzMyNVUGi3TYiDkMg2gxTD1m54WQshvVevSqa9qEAtc48yzUH1rGWAZBJaoQ9SY9GSBjKsfJgyfWraxkMDtXZKR",
  "key25": "63DWEqcrjsUGgLacVwiwq1jXyZmeoVo11UGnwS2jvxZxm14fYQ5fLd7mDh6J3YojsnRhcu9SaJoamYhsdfdDj2nC",
  "key26": "4YW9pnKmAVFqzoxYP9WBppgENAcu5jaTy1WuxBmr8Vfr4GvfacNRJ27u8ZEDCYFCvhF7Kju95wbjWM56Z7q4hKDP",
  "key27": "2yxqiuHodCUPfk8gnKW6pyhyaepiD6tzUxsU2YE1VhZFt4HBA2FBgcudshQVmm9iHPwJCkEEfBve2A3fvfecSizb",
  "key28": "3CGaubZM4Zsc6Z2HKF4dAxBYT8hZvcS616f3bq9gagEGqvhsd2SaNYCLctrMM1e3G5RdAbXVo3RYSYo8fRdjtUgE",
  "key29": "3GrBKUbiMQLFvdL9NpdRRWzeJZJ629UxhFoneNnRutAyQrKN2cTW2daCiacSeA1gukXddiNx4f8qNHxrestLfjL2",
  "key30": "5pzV8ayoMeEtPvWDxmNsPg5kvtmEeTgDYEhRA6HYiVLs9PKkLW1uPURCp8WJy6DWRZMmrfYrGLdbxdvcVo7RAQx2",
  "key31": "3JsSc9wHkzm93MZA3QjxarG6pWK9ybCDra1HkKnyxBgNJu64PB6EC9NPJwdUK8vN15yBmjhaQgzamFxvkf9poimH",
  "key32": "3gdgFGqnznexqWNtj4Ynt6GaYr79EpLTh3Hrm5rjWJRCYpKTAaJy5kWZkwnJysLVugrNb9vbuGMxjCRcio24M6Ri"
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
