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
    "3AoDq5SiFtyyL6ffqaTmfnRNgYnCzBpR65xYNLVFqqLif9izR7iLHa3jN7XCUe2Xn1xDQ7QVyik7W8fqK2EdAsEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faWusMRD3u3dTjUQJeG8XSKgtiZMiJY9LsK6cZjWxzYQMEeUcZSPYyrkkYFH6fYYe2whT4h9z6nbM3XUhXQbVyx",
  "key1": "5UmvFJAh9ZB5R2AqvSubX1eH8dp9Wr2fpoLQD7p3fNpaCU3P7NJUrPGDexnDG4TxB3ynKSRfiGZe8o1UEeZUMUj6",
  "key2": "4z4JT7X9VUE1DugGEC9kcaFAyemDpNRvKvp9PvbLty2pnb3u1Ws85BuUpBKuryv7tcpiw8CpQG61f3DMEVe7tRSk",
  "key3": "DVNqso3r4T8GPknKVWCNP2AYkjoYn2K4rukBn9Fn4HHbuX5FWhXvmtMaEaSWGgfu1xasvjwNEQXWeivEjMQjaen",
  "key4": "47KsqjpTP6Tfx73nFgjaksCTrJWoVYCBiQJYdrithwL8YEjvw7L2xioAx5vktef7KqGd2Rsz5EKNBp6mzM82rbaN",
  "key5": "45zk8DTNBcAvLnNQDU2iYD5sUcpgHQGJLWxX3h3dRDAfVK61iCbGipFFCQFXPrG9LCUcqb3VMd2gnShL2ePHyYXW",
  "key6": "cvDPsJ3jLxqsUQH6gTMR98QpS2geWDdeLgkMLeX26ygpNKUxzryvQwCd5PUJGCj2grppHw9LJadZyV5TZePtZVD",
  "key7": "EQi3dz98vwmENhFHzgw1EDwBX6RKY8rMUCcXruCwm5QQUdhLLFBaQ3GVVS7BA97eqqj5mT4SK69TCC5UicVhouY",
  "key8": "uhFsUUidU87zy5ZHrn7c2LAcSg7hTgJi12USZuXg6aBWF7A7EYuEgZTcTGchmA1zj2g7pcovFez2FhYrJBMfrP3",
  "key9": "32nwPZeqk9DCEToY226NY6yFUb5XwyhWUYefRsWdDji5VbDw7gADekeWpiDbouaH9ipD17RBNLhX79CjGWNDGWBF",
  "key10": "2hCyQj7CbMQatg4JiSNQJpopbWfgULCpupkSztLnsoXx3fQP8hf8MVoh1BEq14pc2odVn7tzreqNA6YUPpti14fp",
  "key11": "WDD7gHteGr8Lq4YJPQnby3hRjQRYRVH68TQ8gaxqur9qZYQoQRiMA4EtrEBtFVaLon5T2K7GdzVc8NQPaoQrZcM",
  "key12": "2TndLVcURm3GQ6xunA2eQvHJkiua1TfJLxE3QH9CYjcuLyioQEZ6LFgjXTyy5SSRqqW7vp3kBFoQdzVSbWiti62Y",
  "key13": "2iCWTBUgji63T1VDDVExXks82CJVoaUw3KMvyRSN3k9csiGNVThCRFWos5cZ6ipaXztfLaGXcHDGmbxYUd7J7Wjz",
  "key14": "4DkQQDXwYSkRGjFkWVaK4uUgQy3eoNVAfCdcWGh1oYEbMDchLew1pRLuSvyzCeGMPpKsY8waWdDNUbJ523Wfxbhb",
  "key15": "4xS5Dme7Je6fjiGSCTwGi1WsuQsdUNgXXLgmRtCozBaifK1yjt2YYcQByfDqvNbdwcSHsQwNtUK2vhNBBUDjQn1A",
  "key16": "2a1X1NR97FQ18F62nM1Mbam16a8fDhteoCzQoVKCoJKQxeq78GGyNXBXc2qY8iquSTsDhZ8G4DBinYnJxnNrjSWt",
  "key17": "bLm4FrR1LiEQ5YiFQyTLZ7MsspY5siS3GmQ9B7egkCGYC3NVWCN6PqgLmCmbZ8auBoPwY5RG5goL3wGoNNziX36",
  "key18": "3ftiw1fPXCzCx2cMW9JLXeE336MN9Nu7d8bNCR6iQWvg8kN1mS7FWBX7td9Sv4Fcq7y5X9zhfpawVPzRH7xVTdBu",
  "key19": "56zw4zKHzamDN6qa3ehkT6PHEyVu1xnWwzkhsaUrKRBxT2o9xCAYPn8ReE1RiRHoGvcTx95kffyjj4BZcwzo9kXG",
  "key20": "3PL1rdTouoefdQKFAZjPcFuQHdiFDx4hcB5PTmSNkVc3CkfVHajHfM996StyVRLMe6kP8xFivirajYVucvab6ZJL",
  "key21": "2FK8aW1jE1S68nMQHPXogRD2EY3b9PGCJ4EHQCEWUnRreRbf2fGRMtYdiL1isVWxAXbGvrGuu6LXfDnPkDUxs57A",
  "key22": "2gRHkKk2nErc2nAfQTAvF2iH1wXssWuBGAADx4Myk3at7RsvmyFZJVYC26UiTRMEYXXdWE3CoHJ378HqBUa4dCC6",
  "key23": "uuDNa2rcp2ChpoFSe5Ppu8sey756vWtd71AhNXvDwgRH1y8oggnX5spHsh2kfAaCwQpPWKBmshTqscEnTUneBA3",
  "key24": "4qj7q4KeWm5Mdq7fekaRZoNRNKBtXGZRHcqHThro3DnzhRwDbZj3U9tV46bt496o62CwkrwHZonJSdusESfQ8hL5",
  "key25": "xAhYrvJCBaNRdJDbYDcorEismhcSwYqmkJTL7vAAtiDsGztpijr2dpbhU3zvg1r4Vb4LKajTjk4rC9R3u5jjruF",
  "key26": "295sMpQmAWkP2aRuPAW5x5zFwMFw9SvgiyCmupZxWgt1AfvD9ie5phdQrqfdJ8XRyaoBDBb3RaT8AUzozBdqNcM2",
  "key27": "55EEwo3i7JnpfJGtLdRS7m9j6uxLnhwsVMQpG49pECf1cgi2Z8e8wuxzEGYAx6CB4DWgvdLK88w58sgPDZmBfZjG",
  "key28": "4ZJ3G93NtuGDFN4Lc1bS7jfZRhvpxgc6UjZk68tf22Ado2VDBgTUx2zwsEncBhHZyqaeyaD5q3qr7b2rwDG6EMge",
  "key29": "3j8VJiTrXUHRBFGE7xNyLUrkuzMwvJohjvT2bsnDUD6FBneNH3Rum9am9jKufq2wapu3YDJu5zDwmMSm3aeJYjqD",
  "key30": "5W4g5sUKMM98DB9fBMi7JYk7ndo64FX4yGRm1krQP9gKGkJKYvVh7znb3SWD1jNcZa29XudgA8j1mk3Y8FqNVCRy",
  "key31": "3KyKcMNouDTo447PUtYccJ28ScGwcJBHTu5Y6r6H4T2yQEaUfemHy6KufH9Xhx1KZbAL2qy2mtWeQxzUQJD9HhnY"
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
