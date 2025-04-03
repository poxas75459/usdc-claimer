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
    "28LY7pYAwPMU8RF64NEEbjNgAKaWWZDsCkgqqX6t4g1re6zB4RxCnvSm5LcXoA3r52n5Bbd5kDsr4uLYAQPiJZUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hRmCkVAncDnojHBfjcPbvbtK6teYaCkJ8baE24VyiWtABjvoxdQrBW1ffV1WtzhTGcxhSSYzZU7qcX4suKBYfC",
  "key1": "G9mBh3XpQ1mgx8yGsKSmri139qGQWdzMSv145GYAYGSkr5img6YW1XF5DjEegWUZ1J1ip3ncD7SWV4WxpKo88vM",
  "key2": "2uYvFeHkhdmPskHUoUKGEufZsQUs3nFgwnMKmeQsGfZkDwHBDVxv1191hPu8aWjLmBvqeR7XqKerhP6kq2DsQW5s",
  "key3": "2SVvWSd6FeLKdhddXP2KL2aRhEtLB1Ka9UNSSgZaWYXz6HJwkFvAfhWMh92BnznphtotGjYXiYBjPFDSV3nCRc7p",
  "key4": "UbcfLTKp3ZL8jNBbSD3rKMGATCncm9NWstHWuaNTVpveEw3YDK2XGho9Aq2SvGSCFnGFPhkwYEYVKtT8zd7ZS2b",
  "key5": "4Ly9JYiYRYntwNQjz4Km7T9qzj3GrC1U4XmySdkwN2iLuzLwMEjdcSMj1cWNnGrmDwPUVEvZXB4xWEjNFi6Cg5eL",
  "key6": "4KXdyVDauPU6eN2rDKwSFc4W8Pv9izg51Y3yHJjvgMajc2sz2u6f4L7v1ERVayctyU1vNrKXeocmhJdLkRw9NH2h",
  "key7": "2UFMZ3mQX4vePqYAGNXyMhN9fnY7evNTdFw5N6VUo95r2SjhvzoN18LJdxcJP8MMPtWRG7GTF3B8NSgzucZm3bx7",
  "key8": "cuqwKrwFhKHTpD5MHg46FY7KZjdWjkL3QncRk8FP78SfF4GY1bzXzrAtJQCnfB9D9SnUCNizSohqGfSAdjxhn7o",
  "key9": "D8Rt1q8SJxZCMUeVoorSSow5ePLWhxAkfQYH3ye4paRWLey6Ye8BtLi2MHoxaqQ2b8iqYzeNa5sxnqMbueDQ85B",
  "key10": "3Zd5U5NxpJw39ZfBHRc9z439e3vUMSAC3LjhMqWmm1epyHeJLw98pKEKY34SeSx18dpjtwk9e6L7dzZ12SUuFfJ4",
  "key11": "4wQ3QRiv8RR2Qvw44UGYJEKEHZkjFiZoEgkLLiWcg2pioCnjEjjhTn1bsNRgXcwbPYSp3CRLFfemtqPUkjtXMs1b",
  "key12": "3wi1Z3GjhUNQCdL6VB2Xmz9Hea2YEPUJivz89zDpYoZEBvzYXa4zEjjRgV7T7Tcjv1sGtsjMKVpHLvoKuPc7BQ2o",
  "key13": "bjnpL6CSKxheEPZzNuAwWpU9SaeXuMigGz2bAcjp3fnocSSxQyQbyxpj1bhtcv5mzK1g8pj5ry5VRUxrgEmWgPp",
  "key14": "jvhVERyFM46VkfYoJgyNToNdpJVVcb6B8GYLCqg9vEKi28Du2zJ6CvjTQ8mfaCyJkKbkQnFd88t6KQ3CWATXQbz",
  "key15": "2Wmmz28KiLC9Qib7uM8qjToWLp17nW1yD9H93VUbg1jjvQH4i699sEvpJEVDUDjEykwacpszhpGMcjBGfsuRSFbc",
  "key16": "sz1T3d7EXYe9bWunxLcFDJiaMHTZBVcLz9uhBX5ynSLoGZpvnGKSXTzdFGKJeKdqk2yzXy2DrCMTQaj762q33Lx",
  "key17": "3eCdW6co1ggcMhsQ29L75mvLQnDfS4NPQuzR32bgxN9JjpUqAQQveSUiKPbsgTXrUytKzr7JMdhZQvZBAS5SopxC",
  "key18": "5vgEJXy3dxFK4iKXtFpVNYPEvPrqB7ofTzsgxARRNZTh5SZP4UFs9cdwnLZkYp36wPsCqN9YyjgchgbyAeWpGaoq",
  "key19": "5iLapxzAbhrMbS5wu3CrK8B2HBp4p4Rc1rtD7tzymhKmS2wUz9nexBRFxSv5rh9MA8hgjWdbcbc9K7inxjYWNke6",
  "key20": "5G4HVFgQ2FF8bfXEt7GGnsejNgqGgW6PxkaXLWeg26KFQsfgy61eoVkxVF8Jhe6Tnf1THXuhVDsh8gEsCawVtnnq",
  "key21": "xoV6EgvxwVYcnQoZm6QG1vZEartyz1ahWYbKuMMdGtrhgHXxA1hd11PqSxEZyA8SBvUrmeVmrQMoA6TWpdJYZNu",
  "key22": "54W8Ky8qBq87Tz3u8bwL6MSmzomtwSi58VqaYhG4p2JeyNomVbjgQHctVefJFyC9KW8mxobhgoxa4uZCYgCYKKka",
  "key23": "25LswLbFNVLgUT2N6a82GgjJE7wWsCZLQ3oP18exc6CtVd3x3oToTRqVhNgZtdz4eXjYnYYLMZDszFrgfVQEK28s",
  "key24": "3G74usf5c4DPBAwU3XhwN6RVHHk5B1Tj73Mc1F2qP8dCFd2jQSri9tavgvjaoewQVbJWad8nzmVsjRC8KbEn1uKg",
  "key25": "2XGsy3zuMApun8veMxtpgPnzMEV4DwiSJV6k9N33SFohV3rwpM2qrxUymMvYyL824hun8WHBCcCCgJQXJKewANVW",
  "key26": "J7ah5afbfCBumFLZtScoucrShqt82ac9cKN5ogB7rRP7rDwHLd3zX28XPDL3ekjuknfjxGjwuwqeMQZATTCEiEv",
  "key27": "4PuAJjS443hVceCnYNHpAZsn9aCVfsDDfmkqXxmEBVNmJXKsc4waZqqdMpFnoGvgKLMLSL2LYfjiWKgszsSBQPD7",
  "key28": "5vuosHUS4Sy6Q6UVPzEnXaQNHCbCSFMv9fxSfpNqKetNDwCA4YsCptt5vwhxNWBAsAJDB5SmbLWPCwLEcvmujft6",
  "key29": "5drScndCoBVGieGa4bx8Kwx7PbZ6uNa2AddVMzXqRQynG9E5gjKBnJa1azqWhbu1YTnd8uudpVyNUXsdw8TGcRMQ",
  "key30": "2wZvHWfqE5zsv6PiNTsQhSQyGEzNJAnqzbTzHFFTccYQvotjSqFZaHjwVwoggkgFgtX31GkEdnk6A19i3LZNpFx5",
  "key31": "3aLqNzNJ3e3WwQpoCoDqKtjNeUw2bu351BUSnRkxjyzeBA2tGp8GUt9GhirzS7rjmro5PKPUXB4yEfj6WY6BKFL",
  "key32": "2WKNB7pBaom2MxMotZomoFabaU2ZancMfDZncJGPX27EvcbYs5As4tEVMFnx7ajKKx2HQ6PpQXmDHPu2J9eLJEJR",
  "key33": "5wfW3WMYZoZxVr59RhC9HkUe9EowaeZdUrScKyytJm2d4NRZW5sbLYvYt3by1NExPvJL4Ks787UPSZQYjsxJXNZT",
  "key34": "3Q3axtsSqJgmtwM9iKiuK89sg6ZguVxDSj2hu6NzJWob2m9b8AA5919bvSbqQqCqfmor1QEcCUwP2jozdSBnMwRn",
  "key35": "4LjL3JAnsMQAUwBmL1KKjNzmAAiANATCSNGDQBbCfyDyV5v2WdkaMYuwe3dtj6QVWe1yA1A4UCBx5NxzcLPxYTUq",
  "key36": "HD3FduXnrSQNMHmV234u2qN7vhqv2v3x7p8SR4ygHb21ZhzurWouBm8w1pmPRayGLAB8y8NZcAdvjkMMbMnHb4n",
  "key37": "2F5o5nyfxcFdzfib9FpfuykJaSSRJ9FtR36h8qR6Jj67KNxV4xCNQdopQ1ms3nx6bgMxEhUsdGgEvaSXYzQkHSa7",
  "key38": "3S2tNqM4Gc2VCwFMxeUJATbF7XTE8rWXrV8QVh3E2tc3S3bi1WDLt16b2jSSWYka7dwz3PGDqNraRNXtuKMy6XRy"
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
