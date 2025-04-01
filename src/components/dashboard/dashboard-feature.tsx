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
    "3dbuePvxJ8ksETbCSvCG6yrYxRbCTXLTE3nuXoQi1yFMKbXAHB3UnnZ5kkCf11cDMtPFmyHEDeR18Q14pWyJAGJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exgbQez21hzif8TTtqDvuRqe2udnvChy8Wfjaqx5vQVRsnCMyvS7KmMzuv2VRrscDmmwYnzq1UuHTv6zeEjvLoq",
  "key1": "5u1R8NivRrC3qfCM7GzwjUfc4xCHr4SP2UaimJu7Ld2uH9oHS6DMfQucRkBL6XUMjcKysxhqbfqKWdysDfm6kFuB",
  "key2": "5Mn6WabrK5dns2oSEgaipkpSq1KAjSAmiDPYxvPBP8HsKExRx3ZYGRP4KyV6TaMY63bTqE1dj1WzttgNCt9GdZm6",
  "key3": "3L5hCXZ5qvkhMzoGspR64zZqJNHT3MVH931mqhycyQxSCVHNp1EcjDpYThKKB1zyTremvmd1882GNL8Eto76kuSw",
  "key4": "4jKCsqYVSmNmdt81MxG5qndwCNqwHNF3MxMjX939ZbPGFEGboQ9goMVCS452TbLsgDgqDsbZNXbd3Rt1wMyDTHQh",
  "key5": "4NVdWd6eVV3RzSafYBKMRU4xEsLZKL7bw8zc91mmfi11V4wnHoVwGBczTkj2ttKMPL7UWoTpqgprxsu4DVJsffUZ",
  "key6": "62po4BL9db9muuSQ94rufUrgGX9L9Yg4G2rdttJhcd7VEt2xBmVCsSHfMoKZJkocZPQmFCYK5fcQcnHe1CRemjUf",
  "key7": "5A1poQuemFWkLLsFd4kctYQdCEHhB1b2hGKPJtZ5CsBPYRcHMDtB1f4Qs3SXQSY1EDTpwtDtw9i4XsL99ocSwzsi",
  "key8": "3D6AxVKmXUzvFwxxMaZubD5DHiFk4x9ddiRoUoVMCCCnmK7Cg4Ax2ziv5hmhK7h3bAUCZ8wG9owPooaCH3mUj4Mm",
  "key9": "4U6sn4Kn14aFRDbVAMS61ff7k8yc88q6H7BrcXALYE8NnXXrRMP9EppsYJATS5HS1992FemcdNJPhVSDdEM2Rqfp",
  "key10": "5mguSVjgjK3Jh1H9YCeajoizuT7LMycd4ibeGUPwzBiLae1HjrNQAUQnDTPLYqmNE7Dnz5nGRJyagZFFmWgHGKER",
  "key11": "Ex1yKKeeXuE29aJn8es3TFKwuNq6RPddxYUj9VVrcF7rB36fAidysKtu4pL23ENnf2i9cTcNCF77PkQx6CzE9a3",
  "key12": "3uoBnrvUYmhcapsWBPAzXpCQEvbuLX5rWn2N2M6bQDWKX6JtsS55SLT6d5vLJi3LiGFckA4vzLYZBD8DdHG5KETD",
  "key13": "4SJadjVfSBXDBHu2uretWSGySTeHGJBCwwZ19ya12vuDbTznUViJDu6fxMVRegGjJB9ckP66M7yVh3ZchrTHCNsG",
  "key14": "2Q4X56vaJszH1wAnP1Zhos6ShzCQzCVs38Y2FnQjL3LBYPnDaKgmA85ynAN3vuP5pokQMHMCKzUaEKX2Bj6y69yr",
  "key15": "3zfpDtuknM1sZr1n9SHKNkxjMKweGJqDt4smsuuFwesRAzM9z2fuDUemqkntaGcsUe1mnz13U2VWPczAy2eAHVx1",
  "key16": "bkppmxxb3RAEeSjv3yGM21wqk5X43tWyBEmj9MnSk1uM81L7PjDTKHcmiNsfAzyXwzvDmPWjAjisQu4GzzkMjYA",
  "key17": "5w5F4Ez9Zio91bbRT5Lssv2623ck9veN1nT1L14bhL4mH4SZ3Q6gfDnR9gMPnXqjEXWCkUKymGNjTqnaKbENbbxs",
  "key18": "5CPxnujKLj98EiD1ph8UEPEw8BUVRaNHqHAN6LG4hiuF4SuQZNb5Cy8UaMRbrh712XR4awpZcCJt75spkXEbxMw7",
  "key19": "4yiJmDU1CE61iSynxwKGPtyih5XG7RfQoGWmzWCoCdid8m5faUZ2bXtVXj2CGjqCjwDF3o778zb5zn7C2yp5NYhQ",
  "key20": "4rT4hPoBXZ4QYFdzL9RZ2zvbWvwQySybN26xTWmAMLqFQGirA6pAGzkfthK7LrVGxo8p4ixznGabokceYdUUtyLK",
  "key21": "AQve81PmM1gE4An8oLL8YVAu5wxbBWJkYL96ZFfg46PjTbUwu9dhu4sqe3eaSrnPewv76YzZFadnHibiY5v7rP2",
  "key22": "4o11n1YbFNcvmPfAgzMMnaQzdhDoPupCxyqitip2BeyZUjUkJQyYBWb1NqAkxw1A9pWHe8E9hRTV5JFsjnPg7XdW",
  "key23": "NpRXgg1opRPCsK7fhc6KEqUds9Sf3gJvDP9uwXt9dkudWT58ZVnh5nyTQHqGrVZpo31Nnvp5kzEZQeXr2KXCWM1",
  "key24": "56XwUJPTAFhUPATmyYxD5YzCcGd869V6XwfdH4vJnsrAbjjV1C4QvMHGu8BgtZGBnQK1Gpbi5i6k4xHW3vs73cs",
  "key25": "3fwv4mUeM5fkM9ekvpwZ5ipXaGhoYLVqBHUq8dU6ZWL1Xgh8RCpYKFqxgorR43Yj9FWuGakH7ADpDFyQAbZ2sSDp",
  "key26": "2DCGgnUeVg797rz9vSAG1YnxZJs6vXSvbYR5q5aPuF2VZ1vdCL7u7HYE1Rux1DJy78xmVcJQ4G2hT4yHVj4Yukh7",
  "key27": "2esoVTBRQ1Z3h92aez44CZjfi1wNd6c7iYkxLpsut7czbMQZAVT7TTpr97nHTv1G3ZcagqZecSKQxGSLuJkARaUZ",
  "key28": "GsBYnP51pKmvvCBypSozZRCUzojHyQTmaL66RfE9Xe8MvrR1FrrkgR6QL3fWGrtzN9HtEkmSSFyMGdYkuQj9u5H",
  "key29": "u9p8bpD54a6GgFUR4o2KHEY4onaMTgUovN5Hfs8mkmgj9oUkrA8QFrKp13MmvmyM2TTeAGPRRmZt7pVd3FRry8b",
  "key30": "47B8rrEfsxreSi6zJvskVJaSYvhM7WLUyVEnu3eeQs93X8MtoxX3aELwrcburZeo9NoaDDFP3dXRkG1TV5g9tk8D",
  "key31": "5hxPbnRDqnADdkyqk8wzfPFhVUNR3Bn2Dhs7cr1k6Gja7o5JuPAuQ5yKVhhDN3UJxKuo3BuJCtdUcXy7WdrPuWYF",
  "key32": "5XbPHhPU3Q8AuDL8AXME89xywgyjuqdMAkDpCyyRHcog7QDBoEvPx4sxwVipGZHuLLZFzUCWtBD8QY2wfkicZW6F",
  "key33": "58tiijhEzTG1REeMc8vRDwag1EDFYpcHJ9UWeTGdtpHaJ37Qw5BTuiVgmoa4BMfgj5nTUzSbwaPvUNmRipiDWmu2",
  "key34": "218kKsGBjzb1Q2W45icpDSZqdFGAoGWbmgmQscD9TNcL6wfwdbmHkRQLcYENmaddKZ69rbRtkGj2xZWAvt3mEArF",
  "key35": "gDNijDAa5Ez14PWycrM1TEb84s1oLVUqvXTvAyHcuD7z1pjHSZ1pyVKgBoFZtC3fbbgAQA1UrQajoLd27vAEUAX",
  "key36": "5XXyX2K4JQwPxDRWFRkJBp8B7yKPefKaLsLUb9exChGbzHPDUSzTqN2K9XfftV6Gd4NSMhh3MGySecsnunMEJKhH",
  "key37": "3Lbkd2SmbTamXVn5zDvoN65o2APJhjHHTM4dfzhJsekWKhqpHwbn58hzZWaJ6Brwp2pZ41SM63Nhz7iDwExKiE4P",
  "key38": "65AEYyo639CxsAbj5HPDgVP3GjfJ5JUD2Z86QqLNM9yAWmP5WMfSfdYt4Heh67vh9RBHy7S2KbXiRdzPaepNcp7w"
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
