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
    "3mMYCer5yS6Cb8BtUWLy4WvSJQTTSzsu4YiwQrv4VFEDXVLqugZx1KDpfUMFytjVf1EiAYCboWPz9UGY8KfTwPDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ULuE2eQCkPD6wqwJ1ZQFeLCXZUFhPn6Qu5M8iR7T8BRFY9FsezkZTjhj1JeEUrZzkFweF89L7oKmvoJDZfNF19y",
  "key1": "32AZJYhztkMq38UbJig6p3X5XQkeVpMgeL7SXgFvzAN69FbDFuevCsh3BRetuiuh124zaNDcKza4rm5A5H1Z25so",
  "key2": "2VZDziaWixKVF7gHPY3KhkZSU8h9JL4ekXLA8ySRxEpJ9ocr52ZUiSMcVQUVL5VEajLma4p9czcjnUi4MK7STSvu",
  "key3": "3YNULLzz6nddXsKXZkLSeyv7XEYjJDJ2fiSa97KzigD18gyNSVQm4dMu5fPcS3AveCBH5eZLrUn4FEa33kCcocC2",
  "key4": "2CRx9F2g4QPhBSx4r2uywy7zSE3k5r1UzyArzMWm8YZKc5X3LK1p5t43ntQuuc6dEbV96swX6QzAitFpwMBLSkZS",
  "key5": "2XkRvtn7ArJYNDMYQX3ZXcowf5oShyGeymHhAmBC4zVdQvh5DRZ7DbnoBMm9bCcSdm5iht5XcVoHToUYRJXG64pC",
  "key6": "4KebPDRwneBDgHnZa3WrtXaAxRL3QWHvdSaJfaBbKTePE7UaKNhgukX5McyxoFKQ8Tte5t4hysPAHFPHkNLmhVxQ",
  "key7": "4RDYW41gL1diJUGghPHQGbDhP6LpdQjAZtdTFXopRMRpVs3XuJwzmSzV8A2W8pb8vCcbEjsWrppRzybYbPJxhwHE",
  "key8": "6Qo3yUA5PFSxGLKYWBoCdT9XRKU43Ct2G1DbnerPo4UBXvPsCf8GNiy57iefDyC8eCVUUwJNKVwgysHYv5TrxmW",
  "key9": "Rn6DaChSMpA7X2WXbfp4pV3UkcBXQvPdF9LNYAaqUmpEe64ZZqmG8KC91p4UHMUFaStPPV8Ddb6Azqiw6wEnvQq",
  "key10": "3KrpV9uRmLWcSts2y46r8oKz4V8dR4kLnN2o8N6tSp6rtgNn8p8Uu9pEHuWXMFKAKFKy4RcRmoN9Vs29vNd4Ny1z",
  "key11": "3qBnoWVQvnqqPZqgxmNb5nJwB6Ls7jQYzbe7yk5fF1U6oRQ9pSpPNH5M2vLipTc2TcCyS6JMyjMXvAYqZs6GpTwB",
  "key12": "2y8T2tFwjXsWeoTPr4pGd8Kk4LVRnZZPmi9kkGTCL5VanuBdEhzYoHA5YWWNmRbqUjp2uoxBiMaDerZR7Yb5YArF",
  "key13": "5VLXoizXdP3bC6xzzBuQqx3jfCEV32qsCvX2udHYo4tFy5nq4LAZ5zbceuPjFjFiBKRpTNLfToCGxcwtQ5JkA983",
  "key14": "3Bk3BWAWgYJfKXbPCf8ySBhsTpA7hL54pnxR7ModgWdVMFA19jrfh3a9KTxfDTZBZorovoCE926HchhragjmyW1Y",
  "key15": "5TXHuVwrdVFSr3qi2R7KXkguVzQTsySmxgYNV3iwJAdMLrjPcgx9bv1EKcW97CkocUJwkiDRZg9dPz1KUfLSSUbX",
  "key16": "59uq8kQjrKPwRKpCUyxsNRnWe5So3gWfkVD8KKJBSdLVHQZmhV3KBom8tASH3oawUnqHc6NQNTj7ysERHQFom5ww",
  "key17": "4z5aP3zhjxB8qmAn5UVMbvkkkoD46Ek6EcciUbvW7Cdn6yDcmthchLFGbXz6mu5uHtFSshiZ1PJvMxZkTyUzQMHU",
  "key18": "4vqNu3TyE4Hh1692ydKJ8so4Lngq6B4xqCMwwxJHnHWZbCjV7gLawnstFRGBDphdwXrtBtryC1vNDGbCMJVExqsP",
  "key19": "tseqP3X5C9RTeWXv45A862zkYMraVBDnebizJfbyhFKU3YmFfnTxJAemDkuKippzjLxmd1RhV9BTxA1PWCv3zoA",
  "key20": "36BjEPb9Vn1n12jQbwqCv4Fh4tXaSDNLNzdcLjiJhAfxy9VGawyyrAKeSV8shUj8xA135FFUtCdDKGY8T1kV3RmU",
  "key21": "2fMuCGKwyuJECGkAuAMppbFoLm82SHF3o5XBojKFyjwb6u3sRbQEWJpAPaRY5o1XJV7rrXHie9fD9XLCwz1rU336",
  "key22": "21b9n8YHPmroheQve6VDiiK9P8coZqQL5tTwbEAxrFxPMZhnSG11mv3eMTpntf55ECTgxECVpofCPDxTib7LDFBp",
  "key23": "WR1wcnSoTLzNkJMUp3US4yf8aatmWRRD6qf6ae8ZZsyFt7aMnB4kChMuaTzmudrmCaYdkEu9TwyoqLmU5p1oset",
  "key24": "59Saf1CU85J3teUKTeyzKo7mZ3xk3pdjmJgmKwMEhgQeydSbneNt1mRidVqbx4Uc3c2n4VPWNd6qKgnxB6K7hi5r",
  "key25": "8tuSfA42T7GYfDo2HniAtKN5nQpiKCjToXdaywDxjdAQdw22UViFoZw3ebKJa45JoP1x8TGsUm2WHMr2hHB8UTf",
  "key26": "27K3Kh9YDUS2VqDzabn2gpoYQnWo3b2GSmDm6UCtLGc8midfWUmuegDJJKJQ74N91a97SKXE31VLYKiiyAfn2ada",
  "key27": "3WE32SPfpmyAiaKP3ucEnxX4CMVuJmnTJLpqvmKsW26K1VAfi2P7NsL6LyXCefJEyTFctKEQ2cVA6itvvbv9Snpt",
  "key28": "4PdX7a4AuU2bFXDbjduxEzVhZUHyViGbnhMYuhFtuLkkjHNRQGdw6TF8FGNyNmpQddVVCzYd9Y8o6G8VhCTUBtHF",
  "key29": "2rgWc7EuJ8k8ga6vsVunZqj92LCV9yBmNJWkaKE7JYmseUbjvwS7xMhrYcMR8J5NavrogK3YjttrrKSQpwD6568K",
  "key30": "AHJEHLRU5eKxseYHJWBAjjx9yFvbF1o5uo4pJRMfRNPkzQqpiKkvEtxbLvN9x74YYuShSmbq9gDv5tfFwYmWxon",
  "key31": "33HHNJmor6S8e9Li3kq3EzsVCbnRvNKEpWhVe3LB82gHPa7ACmTPucroNYztCfgYohQPdur66pxsiGnFU6NVrCUD",
  "key32": "2KwkKxSiwcafwqnoXTgsLzrDxSVeh2bWEGqXmLakmjVn2YbwdWqq2chAEw4pmAkhFkr9N5yMiGQzKFZFw22beAnf",
  "key33": "39pe6wE2sFwyEugEpQ15ot4FMnZaPaGMkYdzvxqcjQATgVKaPcvggiirH7w6BC1Ev4vjBnfZpGpRhbYYwuZhhpZn",
  "key34": "5EdfrYmG3Gu4ryHwXKBvT9DDumiqS4tDdjwbbTGh2HnvqHU7D4cQmdwyTjeguKQC114bVSD9ZbRvP7s7gaztkz4s",
  "key35": "47dUfAfap5pzmu5ZhZFA6yqj2cSMneRmZv3JjovuBm5xFD4ep6x16aCBEdyJSw1cD8YitesPMfKXio9SH1iuKuDU",
  "key36": "5LkTxPsQ4CHNAauMZP8ZZmG9aekBTtjWG4pi3kBMZx6Ga4m9GJjZRGhveuKVcPJBUVokWK9i5hoegvhNUbYGts9Q",
  "key37": "4sG9fgiWC2bdiUJUxpUZsGKURZPEKbDE8phFQjQPGQKLqNN8C1xDE83TTB7JXpinNUEwdSUTnjyW19yPMcuC2hqV",
  "key38": "63W8qaQ9PV2j54Rr6twaWdoG4kfQu9QtXW4ZzuJ95NPDBGunT3otKmfEwPUSpvCZay54yzjy3bMCdDtBPpYCVrUb",
  "key39": "3xLNq3RcJKmnpoWyhrBsyX66XRY8ueBHz55jdCoVrrRFYaK6kXx2qVejirqnGsbmdRBQGD2etjA2D4teLjMG1VcN",
  "key40": "43MLvtY9xPoXtD5mMM5QQnD7y4qMj6yLvgKeVCioav2KegWjNsRZpyn1nbfCXFuymi5TSXbav37YwqRHT2VRgpHT",
  "key41": "61CsifMdao1HkRqPSDAJEwMki6Sxqma9YCt6WtnrJyG8AGbK2XAMqjFwMSJSpjUTrNquUxg3vHMWdEgZwHKtXD9q",
  "key42": "9NYgcyLFzZm3Et8kNBNwc5Fmfo1N7XLSGmq4SiNaBm9WwxhmGZPnFomY1uCPACCpMiLz2aqC6aFKcwpqwzbxMyX",
  "key43": "5HutWveUAxHFkq8gW8r63zQ7DG8dvDBJqv8D4bcefAmV3xfCsNdshvmrqmmtLNoaM3ecta1Zgxi4MTFY5nLwnRmN",
  "key44": "4y2S1yg9Nh1gmoqScussLaNrf44xTuxjhiwe2LWmDENW5uvzarUrgoJvpsaQYGx8J1bPa9hTaLPJhrZWb9ruVZvX",
  "key45": "4dnJ5H4LP2qmE4LF9rw6Khf4RVMEKHdsSRmqGMa2WMjuD7Q3TJv2nUxkWCXaAxSv8HUkwPARfX3p8kCzQreCifKp",
  "key46": "3ogQZniGRZC1ZaqPMPvBcqPpn4LR66HrGCSnG1754g11S3RSeYm8SSJX7AXgTLcSzxsVfTNgeiPackwTEDuxzzLe",
  "key47": "5baLuZGN7NWtuDgZofDFejo4JDjaynKsYkZKEcEsvjQBeAgCQ9vzRZJRApzUcFhcz6V2sDr2dJvJyFJz9XGewnH8",
  "key48": "5G1PDnSpNzad5cRpZs1ykSZMwFo5BEcpkHBBdUKF7MVEBtypvv5D4HaqVKRG5S5P234z6JzxNEgixJEexjvs6kTL"
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
