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
    "RxCRLsV2LAosYSrmPZkDVDLXx7iMAMWYBsrxujDDLCgiyCScLY3NuXe28XkA5xZ3iX6WNBEA8fCKMoJaoaPu5cS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78i98bqYVtLanp4XawFJtHAWWqLwC8h9uYZfmhXPudcbvKM8FNNGzu5JVXYmEezuQvxrHUCRwn52gXk6XUEyK3r",
  "key1": "y9HYW6MT4vvcMDGcsJLBAKnBjmpMWc3rbAHT62HMx6g7boXVsMp38F1HpFzFK7eF722DL22YXTJKae7SGibgHbY",
  "key2": "2HwcZVfDUdgD6Cz7cLoSh9V79GXMiyZCYp4aaRBmVhkdeAGd88oWQ5qLdgefV7TTxeZ6e8tTBfP4sqstQZmmuc5m",
  "key3": "3rcuJvbMckQonLsfCiRC6mBynbhqziHLUL9QVMc1omWgMDkakggBvDjbJVxyR7aH6ma4rPfHtKK8Wy8iUyb6L8sM",
  "key4": "4yRqmgEzh1ZsgwEmYizx8VqtWnQ4NXo1X4Tt3jZ5FpAuGz8tRz6pcH7FjgF4wCA6Z6L66PEfFyorq7EinuxHPoLr",
  "key5": "B6AvDyB1kBmS1EogiCo8BMcdDmp4ZDmFy1CxuAUxZjg4cjVsSKzmjkSTX7urS8DcPyY68RTmiSrvqK6wqB5vF5F",
  "key6": "49FRK5ZZbLW4943hWAdq5GGoEHaBoWEK1Bp4opQXj2aCDibEUG9ZoC9LKPuT5RaWSekyvsUk3dtmcYS27ADPyEGh",
  "key7": "aGkQFX3BhK15A8ZY43Fv1NWpfjQoV2YBnGz1d4Y3JBJVK1C8kgZ9vJyPye4gnHvrgVQa1f8fw5EZrctn5WeNgKj",
  "key8": "jnjX6YPNDttzf5RnzusUywAVDdLHZ8dumsn8uTgLGHYo2kB6eEC314po9dTvfteYZ7exXq9pMFnT7i93eNBjAYz",
  "key9": "VNKAShNXnnGYu3RY1KyvudyFZVFKxhfk7kpem8JLzW28cqin7mTQHp7GngaJzeLyH6cRyFrQKqZAgr6LdXhMp9P",
  "key10": "3uDZokHJ5qro8aLpPZQcrwr61paV1ZmfQ2g91xMMidqGurj6zT94LeeQWSEAJm4xeJxXQow9nBqfTGpTuZxospn6",
  "key11": "4qcVsWL7wZchb5EP3xeHgfUB4ZQCxBDP6SG9vLbmtvWwTJmxk3PjJiCCtg72DgBwcVeEVLvgtBNsy9GWaPhQFuEs",
  "key12": "2Lip9gimuWwoXnojNFyhztVCqDgNrzTxiBA4XFaC1DKWpAYkpyZdYMa3NDEydS1gkgeb6uFD15WdccN6eG3bA4m2",
  "key13": "42qEtQvmeUs1njdhV4T8zMqbeTsFdRtQZXzd1zKVhdrJsgXEQgtaYb6Ms3pcLkFpLxcyMEudspH4AW1qfRSbqcxf",
  "key14": "5Zji8NpJqzSNerXMvRDyctpFEifhHsohjREEj8TXMBhzbnMVjpKidmjbby3kozjHzzjSKHufWcrRqSqZeWpA4AZj",
  "key15": "2KLwuUr5HZ96mQ6dkiR1sDkvAWTNDRySVgpn6YDcqp74bFyZa8NmwwfxyZf9RxfEj2ACTG8TgjyD18FkzvVPntds",
  "key16": "5n3Ax2xXxrSp8vga4jwiPRfWVVfh5LBvhGhUFeTqjJ38oL6DmgH3XuWeZAVZm7FGxdKtoHNbLrSBeCmLXQz1bkfL",
  "key17": "2dEXDWRxoyNDG4ts861n5Mh7rjYaDBxAFGkt3Qo2usbrpMawK4Y7cphZ2nGkJkPMM4LXFrqz7xFgGRFwkK395Fku",
  "key18": "3gPcdywpkUeEQgxzhxgLtxY5UVziZuWpUi7PhKaFuNSRabEAqABffCkzUb6q8pe9XGKA6V3q82fPicb9SfVXWfFy",
  "key19": "2K53C5X7prQVZfpjW1BY7wSf4ugg4TSXzezGXZwNyoG5bnWSDfuLze1iZpLmWLcAoFGznJDCZNYb2xsQCGvLKien",
  "key20": "egw93WjUMnwqcwWQqd1vWCp6n1hSbT1oafNpPnSJU1HSRFQkK1ZFNXmqKr9W85knFpVFst75tkpVVLRvy2gJfgG",
  "key21": "38ejiu5Ls2vhh3LYTfS88d9y4sxjWbtkLnmRSGMWwZuUGA3e2pU6TjH9gZLStndcyx8TJU55Jsp58m4yTUUH31nr",
  "key22": "3puwe1Z1zoYVFCpNzNjQvjm1kg4PTzchKvjmkUqR9ojV6dEMr7hACKQnKG23ho5uau4kHutWXPQGb2z7MkK7MVZB",
  "key23": "57q8Kgqe3NGrux9GX9EMFxcetgF5hzwAqEFvhZCs14LL3rREzXtY3xbsjwoaQHmNvce5RdHZPWosRLXijE7bfbxe",
  "key24": "3cdv6urkbwrz8r7dSx4JjKcTwERGznCXcfDU5iU5FKbqxkxuyVQ1YodaYCwduXvMKSn6KNcPiALHtGLT2den6McE",
  "key25": "3nkKwNhqMPVd2NHWcNfLeP6KkE4TydejuiydhgECc4Y3DL3DTMzzRCGpQ7o3KGiofdZwYkopFR4tr358X5NXXS3m",
  "key26": "3EEewNBavZGLSZ7pCVZTZVL9N4BLZz58hDtyCwdhNqkTfz36bcfsSpKZg4gjJsW2DEnTRRXtLSbB7angnY9PvBZb",
  "key27": "4PuoktE2KmF6984E5qavxbv7nFcjQKg6h7PSMSG2yWGSwSw6Zm3MR3CKAx38MTRB1BX9Lr9pm7YbV8gYdJy6Mf48",
  "key28": "3HpRpjDdqXRTxCTy2WMwhNkAmgy35Eaij3yJ9RDq5YFpf4cPEHWufiXQspgc9cGErtUyJrn1an4VkCzvbECjuTvF",
  "key29": "5VWTk59z29KvjkW1ENXCWatHz3GXHyHy9NoXU7pF5VcNuRDDiBjZd7VUWWyeYWNLXzN5fZ2ahaiK2rXjZgShK6B3",
  "key30": "2xJb6vgXc8bkRZpfzKBDicF3TXYFgue6YhFs9NCFV3SnUh4X8Fr5uxFSPWPqxuyVQfQ8FK8GWCzUem8DoZwdcprg",
  "key31": "3kxMtsW2tydKWSLgZZZM2oXqWtH5P596iGouQvR4ToNnLitGSRhDbbHKPXSn7CDQRg9zru9xwut2WpMwhurH12hm",
  "key32": "sC57LcFyjPzEyJaFzWP1isdPFUtudStg81woYAiT5aQFqmC2kmMWpg7F8o2uHnNDz6VCiEvFPSmCpj3CAJoBJvQ",
  "key33": "2z8Nr2LLDBxiTwWkr6QxFV9EuzUveDNx3f28NhNsRXopyNwN91RaPCrLzTCD4rrQEijT5Xm2uaVRx7nZzRogZeLK",
  "key34": "3ECRVwWRRxGdxhTt7CXLb1Xb9PnwGnM1o8MPmKCHypCnXffweT6Lu3L1h8a8u8p9gfJaEPUvDY943EW93mssh6Fc"
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
