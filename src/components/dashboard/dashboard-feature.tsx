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
    "4stAtSsRUmemBdCqa6C5tWx7J9j91GwMwgGhND7KDUdqW2CKhbUsDLY5PYVxpsVtoD3LrTYsLZu2zpjSK8qHBkz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DdyiUHUw5AuovfJcxB1HvTy2Jb3puxeXscD7iGGpu5GQYG7CqaKzBQzU5Qz38FGcgHju5KZrsYdZKWCvyuwLdJ",
  "key1": "4zXDfpEjVJzwwhUzpoNu5L34VACUMz1h1YZh5yNMbiY5bpAEhnb1Rgw7wzEK1v2ChwaeKqLKNqyZU2tgbFPUr9eD",
  "key2": "5cEeusW7vkgEJpk1WMCStAjyXSqs5Ge3L2f7eabEwiDCjDZufJ4syJCB81WMYJwn3tn4XJsNCY9ezH4jcdAj7SfQ",
  "key3": "3vdanLq47cbq39Xbxhrh2Wr9b97eaV9MpyTHx4AgB5sbnHwsuoTgvqgD2fpy1iESPqimttgEjZEaQpavuBfwEYjR",
  "key4": "5m92yf8oHnTHHNLkXrQHWDpzZyNNPmTEYz253hMN8TaJoXbeECPapLkZwP8kaJc9LZkfryRyHkzXRao4NUoWKRaL",
  "key5": "5PXEoA6GRBFycxM1bmuDd2Mbc73t5deWKnsP89AYEfUYeNvTLJoZ4YE6W8XC1UjiZdedpae28jNVrX98YS2mFQh7",
  "key6": "2KNFAQhopQbZ9H1UVDyc9p8kd6717N7K2PSH2EiEtB4eC9QffG8z65SvMhBtff6orHbsa9pXrJjhfvhFtCrHqE4Y",
  "key7": "66whmPDBDrSmYJABmsY8Lwihnh4SQrp6mw3s8FFZYv1EcZ5TGQw5jMMJ3TcJUVLWh6iDzhKcKu7rp5wDbwgXs3iK",
  "key8": "3D2aam5SXzeahz81CqsPPZ8dxrtJKyhjvmsAVRpSwGARRGJnsHmWb7WBPsjNS7k6Pbqa2jrtEegxLLXPjmLXSU5k",
  "key9": "27Uqh47upqBBmnZzXKjVdekNraQCvd5dwzrmLKLiScG2QbLtcA7ATyQszPaynh8nfg2BdCJ8WHgcBJ7n4H8TZLWy",
  "key10": "4UVGKDE7ZRJN55JhVtH8ZibhpQUqA1CJvK3E6DhHvZcxSn2fQX7QjuW5H4bY8xDFxzWc8CrCk3d9J7JEd35UW7qY",
  "key11": "48jcZtKfD8rpvofoqM5UpCrnWAw8TYj8GtsgiEJEaYN395vuMoRV9c2Eddw2HzP6m79UQuaEqnFf1pSLdmhSpRvJ",
  "key12": "5CdPfsmGXyN6nm19M6hszHDzdA4hkmwjcjSv4E8m4kbKx7Kb7dn5mHToFbhNYNdMoiMULAAvUngF86f74phYCiyf",
  "key13": "4KfdkDgD8LCymty4Lu862TXyfH3AHTF4CWT59SwcYvDrCuvPeAwcXjroMLDguuYw6BDudhf9XyGBGeS7axRUCQfM",
  "key14": "5DmtFLHn9m92yoeTBiHGhRwCujCav4kPrAUrEYLu5QHJR34ELNkQkAvomWtWuC93aLHN25uFCwwMJoR3iACrE1Ty",
  "key15": "3StoXh3Xv4RF8ZJ8dZ7ce4ED9eFcwypiWE2Mh5jmV2x2VTZVHYzqujDwdTbLzF5Y7xQj1ySrSncDFphLg4LcfzD",
  "key16": "2baNWSGgpWo7WVNvbipWEdbYNwvkGi7ZKQah8B8UHJjggPg4EX5BKiGVwjNUovV5exqPiDZ499fP2xMR2SJzEpmc",
  "key17": "4SpKGQWGWT5H4uyyW42Qf8sEkF8iFmCxf5b46FkFCojAVDDvZeugRdyuLcdhw1zzxxx5MpyY77RftifhQoXakpkL",
  "key18": "wMLs2PBWiAoJnn1xik7C4v9nx9rbsyXUuYnJ3Ab2PGt7kJasTZtP5soV4fGspouM6nQqhW6p4PShZom65LF2DHa",
  "key19": "5AEzgqemGwLyBvJNDzqRmCfugSbG1G6yFmzogcgERxj8SvxkK6AfdBJ17cAMDx9EA3rwsPYtapCyZ8xXtweJuqzm",
  "key20": "2JMWtRvwahnEJPvyHfY7JVodYZ4vzPjLRyAJKsMiem63TcXwBivuKWyzdsrv4Tkchad91q9VdvqVDZHgFffNw456",
  "key21": "3aFXh1yBQNztHPN6uksBXcumG6YRCQ1yf5NSkaGWMssj6GAbF13zbP2E1mgDS7gBda2zgzvN8PLQHTvofYwriDUN",
  "key22": "2AhTvr34eUezAjyhaH9em8hn4kaUVj7EG7VpixXSRQqiEYCbCQZ2Nga1Zf4L6HcGdK7o74gLcpzmCvWmusAjqWc7",
  "key23": "3u1TrRJL1RmzhwQLdB3gLPHBmBXdC1ZH5nZtaukEMqVqhqXN5pov5x71gjEe6yfsDo4EKUeP4ZoQC5HDNHtDwM7P",
  "key24": "6Ujh9VFTtMcd63Cph9TdFh5Y544LB96vfHn7onx7Nj8yE1tGzDAfusvsx8jX5yDiWoWZT5guaXmmc7USLydY4yy",
  "key25": "4fh5huAC9HhBN4aKBuPtJsfAwgTa7J4mBxqfvn8mkRub6K3x2S24faJ3UZCFrDVSqhRvUzQkHz8yLPfHhGV9p8Us",
  "key26": "ngDqhaeSVuF5JDTfZo7ztP4mUEfWGfFrbjk2VkqtV8swb3UEAupBakc7NP8THWtknv8U9uAj2YLagGxXFnHnWWE",
  "key27": "5HfK7Bzp6ZZG7FCfrD8ejjiW3FXjoXNz4zEKX3oMsP5M43PgnVm8cRxm8By3nn6yqGd4AiGKwnHFEsPm6ZZDv62V",
  "key28": "5PrBknf3N2axWu1R6HXyzxd7wEHwxFXMGrFJWQZnRBWz2GFqQsVAj6jhN1q931Ggo8pkNgbq3VbLZEPCKugG5pHu"
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
