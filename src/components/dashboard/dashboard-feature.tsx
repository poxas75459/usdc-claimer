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
    "VVf576oN8U4eQxgxXDRzq2CPdUXbRkRZuCdbyKavBJePuUw9T7BqEXLcJ1c5vvjxYu7xS3f2FSmo2htiXRh9JtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGLRjTet1kQLk4h3eJSUhzM4AAKzzWEsMqEw9GxnYUGTgDc5dVhH4MKBYmJ8FdA4Q9TG45hJzNsH2jRGQoqoxxg",
  "key1": "3VmfPAAcDrWod2vy9pq7C9hiZHrfHf4RFhYu3RYcjwGP2Ry99hQy7ghwjSqC5hygz7tk8mbpn6DRgbkhcuFFfrvN",
  "key2": "2LPeQq8c8BdhXGJ8Htiio9QuBJxYaciPwgkKZi7hRgbK9sF9z9bEW5WZN7iu9VS2NtsGiYsHsPCAKNE2Ut7jtwRL",
  "key3": "4uEKFenS6qybQqwfpAsYcLf4JL8HxU5ZLpxMvvWwguczZxLTMbLzsyzxZDutJiS4LdrGhvdkPUYCYRm9S8sLERsZ",
  "key4": "3x6oDwGpR6rvc51cfivpkj5xRsFvF6NozbjGoMoQfx366AGRgaogBy62L9tNhNdW3Jt8MJnqfrHvgCXbbdBHBmYX",
  "key5": "QDDMxXPVrrpKRB25gJa12JbaVnnir4r5jojoAXPLpN9WosXVE7AMGMaKQNpwWMmizgVTmWYvnYLGaScpdANNNT8",
  "key6": "2dRJ37FPtjL2PhMhiGRt7DLAcm4AkF6euEoRjEwRWz2JRhjyMeArkueGWu2LsjtG1CYBGPibbRM5ZFtU2DeTuH2x",
  "key7": "5AqzK3GgkH1aGG3ofrGsL4DYDP2dhFoNzg57wa9XjY3qfth69XZeyynvAj2HV3DtUhPx8BSLsmFteM5RPp1EEx9A",
  "key8": "335EcCoHP3nK8St8cdvUV1g73xk3oKwD9pto8p7NYeknJwed7eJ6riCmoEp4S6cojHQ1Dni9LijwtSzCgL2xUcyK",
  "key9": "2pzqGkeyd6Cm1ydSHyHwzDV4N2J5g1eu6FiqrPYJNnyZJniM42Lv84TQ7vc1fpcqxhzxgdip1sNLuVKZgKczj1jP",
  "key10": "5KHRC9cdavfWXTfwjaueKdXHyiDrsFetFCcmec46nNNQMaKsMyUbbMyCR4wRpzm1QHYFrwzieETqXNUbQZjFfyYU",
  "key11": "4bwdHFXF3jSuugYoxKKttCg1Ujjyp2FhYBYUpBDToywU7pvxJRzXhij8B7VQfjMP73hwB8iDaNtHfK8HLi1WeyR9",
  "key12": "5dqSsx8pHRdCbFFYAc9QbvnVwtpecSxnB895q3EKWD2W8qRXzghX7qrxEorPm8VJXjfz5VgWb7rHxdJ5tbYJoi6e",
  "key13": "3Z9HeegHxZY5kG5vMRtSyEBZc8zHJxKnScU5H4Szna1zVrY7oo9iKBjnj6qwXzN5MZVjmxXMMdzALFQpjh3vKNC5",
  "key14": "22h4KB6uwvEQvVc2gMo9EdcidDHRCJSfgNRrf9aVqbEygctEZv4qpHoeHn8M1a2k5DMAG7TGyP6sZbaYPXQckUGw",
  "key15": "5tM8PYfiCYV18grBCfBrTk1G2DTznkpoPJSD6MBYk5bZ6KmpJPsk6eFseGEgFTegrtyVTEZot4nX4cyE8bKAoMHC",
  "key16": "2SkE25LhknvDRcg2KMyaY864erfBoDFrSKm91t6ibqp8smf55ZLPRNuMyQbJQM3yanXtSJKQwXBE9vf56v9xniDr",
  "key17": "aRKnzcdG7AEG7ZRrHkCiB6ozdts4dW71bDJqhExboeBWAV8zovTSiSLVYAsLXajVR3dXujkpLzKZTY8FpBrufE2",
  "key18": "3HdNRvhNd2da5NPeVeCFczRN1q8xuVuZV4gsbdC4AuuKjK8hm7RNY8v6RPGASE22BTKzcyDFarzM4pcdWgFGsUq5",
  "key19": "K5WTxWQpi9dZpU9SVzbek3DoRwSxfhMjFm3gKsGUZhT8JQkh8YMNAKUDRn3S69qv7xxPUvAeEq3mzaK7TM3pUdE",
  "key20": "63im2RrmiX27upNcb4dMLepYtKD1qW7wickjSMSoYS3CUy2hoKgmqRvcPW7pDUzsaua6ra2d1PJmBXL5unZ3qMME",
  "key21": "4qg2K21AqVP3cnmo6x4Q7dsS7YDRubyaKXhY7mK4u2gjJ3q4TTy1PDZrdPaDsJW46xxVrpWrJw1UM9rzx39MRYgV",
  "key22": "2gt1zWkW68znhs6PuonTuByEkJCRMTvrLJ1GSoa269wr8LQ6iNhGoNekdMruSpw3u7jzqeipJhrA2dhXgQyRXhTF",
  "key23": "57i1QykiVbz6BGr37SGj7o1NF1ZoyvZ5LapagDUAv6sCa8UzWX9oFWuNn3EAnLMc1GPFA8i6SMfXKy53SE4aMeQ3",
  "key24": "3WSMNQVTXKbWjRMspNkYatmgvGLXQH2SdykFmacAUCJsJk2EsQxrxEgQTHJHFmgcuRgXuvg1CUoLig1XvSTCP8nQ",
  "key25": "cXMYmsc8etXdzVgQqbR2NofKYXQjEfwKNSRBohyVwHV76V9xQ2SDSvVYS9nsYJLiv7X5DGkRNpzQpQ1yHFDRn7p",
  "key26": "3GJmtJsSo4RnrT2SYgfBqU5UMraVFbQkV86nGLrUEE3981PReEex2KRyMCNrmzLW8KSTiYZqbFCrBL2ePGHXtghj",
  "key27": "4gvBLKSBXiwM9qp99KJq9Y7UJPscuyAgy8G1FSZPibpn4PVHuifTvmsCY16XEXe7HECUy8ZiRhAvPihY6weo1vFz",
  "key28": "2pBpNktnnh67Lrt7J35cm2xYtKiScL961JYVQGfEirhWYeTn7DutjcEn6JG8DRKsVqHDqnedZ9GucxMWo396gsC4",
  "key29": "2bBBDuKLtFqwKua1iCbYvXRHWPyVNaPXWJdPoDHUFqtZzWNLAF4YkbWSzrsPFcusjopRyfBMArcCpmSZuNVc59B2",
  "key30": "2akXskHMYK6CQ2nEnWjA77SZPuaTxHtrbykD7uS4q1eH75twGBgFJVRq1UfWbUNzH7PCMAabYomAgR2W95hduofW",
  "key31": "jc7xxnNYmWz2BXqNBqu9rkXUmFmrvTrZAujbjs7AUuNnV9RDt7PF6X2xD3REsv3CeMDggdu5YtcPhUKvxtusDjV"
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
