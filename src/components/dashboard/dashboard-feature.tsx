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
    "3fCUMF2RuHWH7D44uEibx5BMbfutxz5nvMMvxkkeCVuCuF1XXqt4yq8k1Qd5gAM8Ly8dLSRuVDQGvKdhHniugY9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BNxh28qPKkXXzEY3HWkf9J4KmgA4hXdD3et14o7y3Zo4G7yte7sDx5GYg64mT7zV8ki7ZRKa9TGtapx5AEvoo1",
  "key1": "2ZG9RwuvBGhYDkPAimaERVKbF7ZNSevsvR2Q8vaQPAsNFojgyQ4AaAuqEv8GBgLDW84ZVs6yP5cFcj1Pe5SmyiCw",
  "key2": "3DmKvw7XNEGJb1rS4KN9v6npsLz8hkjZUCSrcANTt45yYDeJJqswQo8ozNUPPCNYTq6oD754c1pVTv1Ja3p9WXsu",
  "key3": "2Fb4bZSjKjH3vgxfmaTTeYv3BviTucwbQouxTJ8bR42pFi1UnCYQ512KWVEpB4gBz3LaqkKnainaH79kURxSyPDd",
  "key4": "c2PUjNzu24XdiHHoDp42CvQ7JMWkS2BLvbZF41eRoRRwPkV4xtHD1CjMXDC8QRW1ud8U8pG8QYRpENa71BLGNis",
  "key5": "5fWYJwJRqSzu6pYXJr9eoGSHz6mwDKJ2WzG2X3Re3KuA5McxdyViSUxUiYY19L1qnrZeZp48fhDXNS31zvxirjj3",
  "key6": "3GLgDTUuJAJKR1sRd6NtgcSSEwYS9vvdwxBmkN5KTMYrr7x6sprEfc2G7U7Tnx9FquNChvokB97h6HEWjSmyARtj",
  "key7": "4x9Su8fm3WvASEydL4TnQvw13Ne1g53HPL8HawAynjM959j3PPoZo24wcdfUjJHQPZD8vwkWUtRDkCpK96jgFiqy",
  "key8": "2NnQKeoTQ6ayhqG7eQ8Gfp1mnE2Y586Q8GRHbadsQSiXPmSh9QHeuguP3hi45uo3qCmEfBAuuxPVduhm3djan6rz",
  "key9": "2kK4c4Wx2zuHoQJr3kUFPorBETZLBxxktnzXZ8CNqaJfRVmUijR9gBn3Ksg1dwBzkVi819xknLrtmiPWXnq6uCsm",
  "key10": "rPgHnbtMmJSWHeW8uz2LCabnjJsXviJP4Kx87KbUfrnVQw3soQ1xM2v715PMsZe2ZfRWgPVtdehsPVDcwxPsNZc",
  "key11": "5uJKFXHJpCr8LNN2b7T19v7NrYc6Lxk1twBXVYaHTCDi3gahLL7vnT6nuw653MEEsMdXZTxEESQKaZrGYRqwVfMd",
  "key12": "2RRTTrAST1mz68WE2jbojTXA8kNnXdWPnSd5MDUQmq5QyYjj8y691LWpbi2jSyuiioCjfNCPZabfqQFeKUobfhoe",
  "key13": "5QzUhjAFuqvtMnVnHDgNdGxksduVznaoGJU4X5gJ2WmKg8ou6de5SNM5TQks81RT4wuRGZMwCMCRJQWokVohYVv2",
  "key14": "3bkwZ4PSv6HJXMyA1fEQZ4RbJqJPj69KioPx4DcUqqNUSLdS8Xpc2nunK981uULgupNi4qnDDe56pt87ZDE1Mkk5",
  "key15": "4g7Y21Nz63jUu8mavRgpN6KU1QEUwJwsg4LQJPyeibqomUpDyRQMfZavvcfAQHYdB351Tn8vrGeoaytbBiS5Amrm",
  "key16": "3c7ibUV8Zrnb5zk43Dp9U3ZHy7fjWJpnutz8AcgwpcXWQvqQgiEUGvA79uptXHcPh1ehW3huCPvJL99cX1qG5xJT",
  "key17": "5RJNVUHDGsdQrBYc9jD2mB5aU4Lk7PLNVj2zCyuRiiyx9RymH36oaVsa5yfQW2dnaiivaV3ZpL3K5EbfDbjCFp7f",
  "key18": "3p1LXa7nRC2MGQpQueTLbqwNTsJn37f6CeTfvjrwLuCVTFgkS8JvsRNKD2bF3otB1Fa4ok86vheVeqNqZd3pGehm",
  "key19": "3Ca9qKQRZ9wwrCPJfaR3yXFmmhKvDN3iE99s4YU29KAJP8GnT5FruHnrU69wD7VRzdVR9nj4QG3uNdE99aS22Pcg",
  "key20": "EmNs8gZdFH22bHtmXdSwso1BLZvUuT6XzvZRbkTCeb1WhJH1VcVYyE73ZZAuEnTKaVmGvzhur8iMLfvX111ynCm",
  "key21": "2ujx1wW2igJfHsqfuSiQRuT9FhtP6ygjLbLH8K1AHn2773wXe41uJJzQR4zrpxxxsHtk8SdRtMKGEptPRbyW2tuv",
  "key22": "2PJM2wN9CcH53UqDTS63McEMrJ9MN9yZMMqYdzpuCxCDEtpuvXJWkPrUkvFMb91DW2ZM6DXrEXNTUjoPror2h675",
  "key23": "3NG15KZnneM3b153ynKxUurVH5YJWy3WPrH1biWq2yhmNwMMNerFCDc4wCkFVZUV38nYQDYZ5gqr2Jop9KWeuCdp",
  "key24": "f86p8gcP5wEkopnCkmyxTbqTg3j85KTqB1Dy7YkHwYpUWU3akxcePu1GMcSbVG3LoHKvu8cQrHe3iqgYqTzE4MB",
  "key25": "35HBREzRjAoZUZMrHE2NzNU4e4dqLXvPohR4N3usfdLTwCk43ZKLodvx18gTUS9sSzYw9ZZEYV2WG7xE9P3wuLwB",
  "key26": "2PYPJhhbKzdPJu7yHCzn6L6L9UpbL7Vzjf5audu5152A7823io4oRao4aN8J5verxCb7ho8EdFxzcDZETzzGchhw",
  "key27": "QMrfnUMtSLn3kmZb11PYMSPSCVz7SouGCNmhks6ocTXd83Y2szrjBfRXj9An9aKwKqrmfA46zhN97L4A3tXqanL",
  "key28": "9ocqPv1g52SfkSmQ73uvhdJCBQVqhUsLKxuNkkW2pMvzkjngR2YnXveuirZJSS46s1MbT13tcUaxQGJNLVKq99X",
  "key29": "55HXtyhMH7Rb1DmQcTkidjWptuJU9Q29thSfhNuXQcpvG8p1aMPwPptqN5fC4N4pWS71gmzYpjC8E6eNp7zPakHg",
  "key30": "2rMG8dxxyTLX9Y3YBWuvPHqLXr6FwQB4WDfitbQty9iSUrmuwvzhgVbVQ5N1jFMJaVYYkEU7cJ8gU3gDn4ZceVXv",
  "key31": "2GSb2C2bntYrZr1TMXPsb2b2cApKexWutY2EZrDTxKsmgigEq1xZMhHJ6DcYcVybPCKhYqZMH58mb63Vz3hhv99z",
  "key32": "46NtHyJUXhuCKRHHEDGJhmmYMnmSFxN5aeZtfpUQJbPa2b3kYHpg5gw3xpkAMujih7AdcRnGPEwnAUyDzZjcQf7w",
  "key33": "3eFMmwRR61wYSW9gfkTNtyH9pWKiteDYyxo8VRGWuyWWco4n3biYGzZEi8UWAQcAcPsQZrUbkpm6EeXUnxz67Dha",
  "key34": "2T23sBKCiZjqY85anZAt3qNjb1mZyQ7UCV7UAQZXdqrx5V8WdXBo1aRfkCT2v7Ct5RTKKfpfHqCpH8YkWPxxLvEz",
  "key35": "4S3cZdQDzLyGHZV41hQn2giVwG8T8ornoXi6sDsB4cihgMbjkZ2M4SoYtrsRkadUu8ZbkskXRs6gq1X6AkYuTjCY",
  "key36": "5mSVa7JEMbQmiv6rfLeANY4SdDUpMpWmemPFMKhjwvqnB6DvZShwqwUNPrmTei8SxhCM1mgxejvpkEfL9gcdstsC",
  "key37": "39vKtZQC2UEYZW1ktqScxaJTsFH9WSgPeFK8oceuMVLdCsvZ6tmc57jRGL6hGtatJxvZiW2u97Ad9KK8WSYHzLRj",
  "key38": "45VATArHVKsfTejRqYSeUC3ZpxqwuKJY9GNYEa7TMC4hFpFYToKqSA9AgSkPsbyyPtwnvqjwXeyT7ZnywcLjn1fa",
  "key39": "2SRV7QPCiG93sRi2wn7PAtJSBqwEQb5gLdeZ2QqRKQ7T1nqJBRRa5RRDDqBfz8DWaup3X7zywQFJyrHNQdNacsFk",
  "key40": "DQBAyJ9pfFC23hyHa11QQYupgNoZCtf7gKQDRwkjc4gJ3zRh7XJS72mtuwVxSVUmNpvQWi66JX5vHdcfaVmEBos",
  "key41": "5LEoGwunYm2vXmjpPDuX7NHNzA3LruXMjpzLernyPUizUFCE4Xu9hXXskDEQ4ehECwJhYoiEtPa7fg6uM7QCcdki",
  "key42": "35AinYRzeSWkSZZgo8Uruu5eyK4ew4HQF2JQ2FWkXR8UtRrVki869GsTdoCnVvz5KDHcJU3JybNhzXPwykrMBFci",
  "key43": "YPaungBtNCerZK4sRq5xftRxBpUxh97W5MniKaPQkjLSskAehHyiUs7XG1B12V26CMfDyY5uydqJ6aRqpBwFcR7"
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
