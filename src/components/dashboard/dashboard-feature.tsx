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
    "5U3GAcSVEHEXd6yQdtMAJz5oLdciwGBZD9MDcSR7doF5L5mYtsdw9sGHBaMGkUzvwAXYswKgeqaXUNxLY5MBR36q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnz9VjL7rsm8H8igE3VsdZkLDQyCHXx56vbvhJYKdNB1UN8bsBL8XbCjpKJKrYExCV6qMi8uoQCnn26nRuAps3Z",
  "key1": "7F3KmLCy2mkh263F2EsuUM8AaDYBdFbD3JHxzNJyXFe15bGAvS4zBsQBghexHi3WPcTBFswYxMD1bDkLPiEsfDy",
  "key2": "Gkkcopr9YQW7zCZjfePktimon7omJxPPBM7eE7HEtVdJ8nVcM6FQz6WVCfufbztHTHGCP7nkQFrS5QD5s1wH1BY",
  "key3": "66cuNG4qHFuMhpv1DcXUYZfKjLGXoFeBnkWMiX5E395DS4Y4Fz7tHsUVJGJQwTM1zqEkTdQvrihLSh3is8dtduBZ",
  "key4": "2eRVDZF3ixGgHadMyNhPhDfjkn1vNCKEtME3tSXqy8Rs9f7SWA3yBmzSsaThuHkkxi9FRRqVhxobakVGkUeMwRqM",
  "key5": "5haRduVwu1ZStRZSfbPu7zHcsRJcPn46mSDh6qmX2NfjzMmu4nzsSEfN3FyC6y26Rq8xfH7YcLH9sxHhbbFm9kjb",
  "key6": "3jCxCbQNZAZjq8M5zFBY7Gbe3NGjpEMURgERD3m7GBQTLWg7JwPWBsCqVeo3K2g2ywnaUJsKEedgkUR6zQxsuFbf",
  "key7": "4z1vc4hJ8NBjrJz6yHPy6JbpYqtGFYUqg7SzGMf224bPj1CjGPLdPSHEWaWv6MKZwTwCsfKV6CVSsWs2p765TJiZ",
  "key8": "SD3wHFdXFQJDJRhgeGGgkZvXdompPMWJhR4AA9W18hAWhYCPNhXYeicX8nDmoCdhnDcsKKtofKJ13JPft1u6Kf9",
  "key9": "5bwb3gW3u3cUkyHdb8C8ZsP26Gs2yFESUXLqriRzZtyij2ht3ZNELwVNRz6VM4GGQKQo5rXKVwknHUwU773FctN4",
  "key10": "5BijzRS84cDDK4WVN9TNFTtctHcLLgLXHjLtMS6RhR82DYemtjLycnVKBi61XufCZmdSzbPu14wxdnAwHHHsArqs",
  "key11": "4ZavTBrFRK8saZPLQLsMRS6AvxHQiqsRfniLNG9rWqWmYAKGhccgq3ArMvcKaQcrEbho5ZFT26jN8SrnySjgZyzs",
  "key12": "3Z2AqaaKcgHrNyoTCeqQkYLZFPKzUjvPwqgaF7Cnc3r3znPF8xY3HSfS3Khv1AJ3rNxgFXks3EjVMHp89wPDdEFa",
  "key13": "5Z3kWG8r9D7vuw7dAXfcHmJ83VG6SbJ24fUe7L7cJkAVvfoFuuVRnPwxaJ2QC42DT899HoW9TwERWJLLE56VoLAe",
  "key14": "2A2cNjLB1z1ghKGJYyyTSdREGxhm1spQhQzDXbKfmCsS912Cjs1Lyj9JUtTZnTNumsxQ8qEXMSJ7Zkg9xxy3fq1V",
  "key15": "2k18J5Bsju5mRf1BXSg9PhRCvdWCcuSBpUHWvsKYiGYmL8kGcTs3HqECpQtEtqe678UY7Lwp86Z29p3VLcEV1LoN",
  "key16": "5gu2o3tckmRBgoo1vRPBjFQHCDUbJfk5MWDUY5mtZ4QSMk2PxJhUpSgScJrMVfaLbbGjibQngnpi2DmkhdKD1FjY",
  "key17": "3Z8kS6ztja4DoczH94CDCesmmBNFjQFuZqN8PDZMsGKqnQEWYSwkAZviRZwaJ5B9wDawzzeQuRqCcJhCz9LkXU5e",
  "key18": "3r1PaXc4hv8K3Fk2xpkkju47fV8ZJTh3rn5Z4wRRE5q3ncFicgbN1mnCq8FWFYXT6LPmTkxSh7kWWvUTzmQTkLFn",
  "key19": "3Z315rjJFEpWAQE8mp4x4rFwvXYFK7ug3kwXamfguyyukYjKPcUDoCMP79J3DfWPF3k18w7NErDmQn9aDoma6PEz",
  "key20": "3MgqXzWDyUDqSXeeRZG68RtHrLqUzUoKAPsvHv9EiZPoahK9YTXV3obVkT1eirCktrqPNfAjXFujYZCMfdsQFMhc",
  "key21": "2zLU7ke1QL5oySUgiHoBsrFex2aVZ7J2FuqRijGBKuyDV9KkiXYajqgMVd6UYrQ75RQP9cVFWwzjHdGrqD4bsHwg",
  "key22": "2cGpdSdYozph5tV9QDj5YJPkvxs5KtjcJGdKyrxiRLT7yYifJ7HyMiNDC7DE4GdRc4PkzaWHaKVfRpfS3w1RstH",
  "key23": "5L7gEPb5gD7qSAC1yXg5u5wS2SZZKvEkgf58AMe5JtrPPVvSJu8GNCu8W5EZnmPypZky2SbpMo7Nr7sVuhfA67yk",
  "key24": "5vXNVUMJyJxDk55TxwZ75ssNqPdJNSkxmhFfC3axrrQib6WYNDkU8YmRR68sn5iRWK9BUtb1LkZgazjwcJfej7aW",
  "key25": "4XHku6NiB8xfKMszKckKtRi9rEFF2oujLD9JBMFxNgAHtvMZ1xBk7TkeZHXqqzbjKJBYQNVNGpexUn5NmVmbTaYT",
  "key26": "4rfCHVtXWxr2t9YJLAr8wehVtFRFWT37JtggHunog5kfYTunKV5jFSimFypPW7UZvKhrtENLUJVLYhA2F6wKY8J7",
  "key27": "5rycMHN4NCxTVe6rAFX7TLRPE7PSbdk3DjubgsQxVePJKzBfi5pNhBkhETcDFJ78ocBecsc55s5mLQew73RBsNGj",
  "key28": "3tUKgJvuVXXLkUXL6s5esBHYsb3gj1bLuSP1J2zsHxZNo1mSQztFVEM8XpAGnd9KPDXUx3yGqUBFC6srtVGNx6sZ",
  "key29": "7nMuDSDUvTUbwCY5JXsDYVtcMsYprAGPo9CbWEWXX3KdHhMsnSP3pDAqzNFihqfeZHuQgjD36kpUGz73gtebsdL",
  "key30": "2UhWb9YeyvVodekyWykrpvD8u95KHjbwaBvpBtJY7TWEA7gCa3odAvATPeQjugxmFvRHf6Tk8kVKHQZfYY5kAUcS",
  "key31": "5EQWycJaZoSTj3nbmDBdH4u5EE5ipZ47GJy58Dxm6qgWNGSH1UwSzZWQLHo2SzBEJaYjgo6t7oHGrr3KV1rUQbNE",
  "key32": "4k3YvSfaKBvEzU7ChJv165f76Jw1RvcHrvMj97G1S9oe8AUwXteoQtEdiPpANBempWNH5TiT7YfwXaLa6H34jL6c",
  "key33": "37CQHXK9xyqtGLPTDYKuKdQE9YtgGpzDxD1Qrpu9FxhVVPBurU6zn78qA7bjmePCPoyKFA6JZ6bTPEPae25jasYX",
  "key34": "3oCtPDZ8aW4VpubJKWRyYogMtFLmW7NcA4Aw94E3gUgh3suiM9SpRf7bQyhUQkU6Y5g9Lrz4aqdCA1q59askfWgw",
  "key35": "2vX6j5DkCBDYbJgLzQxgyfM3JEM4JhdxL6QQA484ZHbfW1BZaFFsHiPTHdnoX5GfCV4p2DsFa5Zn7KLbaBJ8cDJo",
  "key36": "K6eemLfmdyJh6Kp5ZYuj9TmEtWbxYLuqcGY8NBPLis4i2KqsmWK58QPGZG5AVSNiqc6tkrYbHkZ9gykLKLjuoPq",
  "key37": "hRUkAoUndLDdwGS5vecJfV1N28hhCNsUEhyh5PkZiD2GJ5hSqLBLqjSgfMJB5cK3u8wwujk4po8H2VEf17iz8DL",
  "key38": "4QB4JKEDDcoyZN6WoZLnVLWuRfejokUoPKAmGpTQFdstYUzZPVsHAoL4Y16EQmuejBUeUFFQ3FPbuy9pp7UzHnjx",
  "key39": "2ZTdKshmaWuRqYLZ2Gsv5RTRMfFswT5vw84yfSruh7ZK1uTayL3TUpiT3N2CSEhKz8SEBodgD4Cvk3rV86HhwkG9",
  "key40": "2gYEMEoUoyJxBe4aZYPV2mA5Q5q6J4c3y85SRDWgC4nvaEzbfegNsj2m4HWpEHpVQyn3Fp2qxk4AsrnmPzvJbwVi",
  "key41": "4ewcpC326jsJB2tBBMxAdqSfWDkfwSy2HeN5oXM5LAnZzMpFr77EEgVW7aHJ3d6vDA5hFbEoCKFYgyCDbN5GfYyL"
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
