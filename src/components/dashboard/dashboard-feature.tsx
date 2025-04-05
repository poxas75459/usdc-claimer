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
    "4Rp8ov3MBfzTS4dY3bnqxwgnVHMcvV3hhiA89sB6JtZ6f6SQXJYA3NMPHBMGsgSAtmMf1UtMsWdd6Ue5HEbfNd1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDdft6fUckU8Q8z8svuM3Wimunx7eLLAXNMewatES9o3uwQzwAc8rXLczkjnbaga2rjf7RrFcmNLCjby1JndAcv",
  "key1": "45nQnHgRraLHJrnThrZSyCYeSt7v6jVtHLeEcMG7q9uBtWJfX5g4tgSRCrVoevF5aPnJoNcHfquUAm9kJWNfM6Dd",
  "key2": "32bRGQLLZMJ39J6Rjx6sQ6F1mLAf9nnwoPPubZdgA3gV46jY7uy9t1zpHto1UbhFV8vAk6zFqjiC7mnR5QG7P177",
  "key3": "nCe5JjFL3epuqz4r4bVe6NJiYLK9WjmjXG3pGDkwAFpGzqxZmBkjHLUp4g9JarAwTjCRM69koRYt6ohJJsjrhm4",
  "key4": "62N6Gihz6AnxZmZN8yJTUv6JcJym8TCgYJrVq1D6KjVJ7EbFUpN8VGXZT9W2ZoxbJ5tErVaZJPbumX9W9MF7Ji81",
  "key5": "52FzqhRV9fJBSs8US8drg91iJer72EPkA54z3c1QTQgex7CucjKuvUjLsC1G9jkfT7pYRUD45uvJ3Qjz6t8vHTFq",
  "key6": "64b3jnS5pbcHsyrmPM6gNStY1zBUb94ENXDe9QJ5U1bJcfKfxCyYAovRxSzrMcB73vPrAFd2r1xv5EfdxTAigteH",
  "key7": "3xnUfddoyUBo8LPd3DsYnRpUy1zsHLtEH4u6FWsKFutXYdvJMbNBbTqwqixu6W2HZ2emrd7uuBN7AzzpQuwA31gm",
  "key8": "3KpuePPNwwrBiBG3J29tAkEjWSd3t3bPnwLyWp4b3ZTQmwxG4Km7z3XAWRxQtpik9DFfW2ZykGvCA5bddapuYPnB",
  "key9": "5aez4oxRNdoXfZaH4zhPowMnSumYnHLEkEAjyqqSipHGpgiCZfobWuXR3jWZKgBNBxvS2QqhSwsAVomE19Yrijyy",
  "key10": "3iDQRwxWMZJTaFHnAuu8fem3CZB8GsKVh6xyuBLN5EKcMRDqByYmTgD7D2JoPAMXq31vdVJMK84nxbsLP8MuJ6Y9",
  "key11": "3xecB3jRaw4aJrSn2sApSoUbCPVz7U1WnYrJmJtSoWrVfRV5FscdDvqtoxZJ3VMrUVtUtdibVYSai3G2Ji8wbmSS",
  "key12": "65RgRhwbBuXi9VEYLcHXqmiEBD466sivpEjYMtMYC5K5KKQWyPFeL23ekPBrVrJRN8AR5McFgS6i9tGTqgcNVXNy",
  "key13": "5YegcCpftzowieb6fsqrAD4ra9vUocWqNVAA2n5ZUu4XeAwD5e55hmvR9FKrH7wchsFsgZTad1K1zNy7SZtDbm2u",
  "key14": "2Az1ai3ckUn5p3oEwefqE1cjq6EfSbEbAGMHTKWyio6iCr81tPfzq2pvrCeiWUns8TYwQVA9kCgSnJWCiApfwAXD",
  "key15": "5ACsbGfAV2VwV7vq984eEPZ3iTVhjAccrpciJvhfTvx6hm5vYf86S3ZcdiZ39muQND64FNu6AHUWeXSKS9L1eHCp",
  "key16": "4MjZ1ag3nJ918iux4Bze89VSXLZCMBvroRNhmApmvEvyyXgZRMTTDRkLSfCg5XB67fcBwT4pLKVXhnXZGEUGGb5F",
  "key17": "23g34eoZZmk7BVfwfLxxL1sN4B5ARtcrVFLpDBDizupFbPa2ooZLhUZAaLLGfziMpUCVAgQyyPQct2jKNjvrYvP1",
  "key18": "2BHcSbbY6nut4NV9UNUGiCDjoaJDn32YKBymdwCuE1HDvbM3Ht78pXRofomAtf9kh1rE9ihhRXhaPARN1S1jQHxJ",
  "key19": "5artkx8kbzpHWdqv9DcReM6o2MipjvWuiEiiDXjXSgUhkGZkmSNQEeXXA2crXLs7iasFoqpiwnVZPwHtB6HrKFzE",
  "key20": "4ocFELowK69i3ZamAQWQznFU3m2weoabtK4mx6wjhhdSJPWo7A3r8aTLiR3ihjzRKZaEWRBnA9iWGMmqh5yDvq74",
  "key21": "BiuTCbRyTPvK3xrGyKsLxvdbnwYdDHntN8YwPRQ4Fm17vEF9x9tyfKQdpa7yPmhZMBoeSHRT6egWWvWY4iTjDF9",
  "key22": "621YsGE5pBsp9Y3EHWViq22poZkx6tHG2VAoeb5z6senV1m1DQKDr2Hxj9WnQedaQq71P75isE8Hb6zSNaMhuSNo",
  "key23": "23Rp23VrHt413NZaNTPrDMCBypbi1pvYwJbuWYGuTtd1s9JVFWNzkLbvS7jHGT5VsYoXrKpe4Rh4PdbE2zDLJRCp",
  "key24": "49hNKwF34ZLzEdNVE1XHy2fJ1AV1z2Ro2EzYLY6cd83MP3gek8vdB2dtYGjxqb2WubKjE5jB1ZwodXshpykJts7B",
  "key25": "2fz15Qxfjm4gS4g7QMoZfcVEXixCzaEaNqH48FKqwTUjJuKj6i3EcbE1ntSV4MsPaWmiVrSdM2BKb2LJBib5HMtQ",
  "key26": "3Qy8DZguwS8fWCb5dMYn86hG2niwas5LVTbhY2SwehmN3yGvhamohitTEBeKSnbAxRYsvSRbimLaa36crYsyPS1z",
  "key27": "KXJH7Ksxm8FvosP2mBLxYzaF3GASW9nyfFsguoQkTTPDxt6nmSruwVoHzJhzrEsP8EJnbfGkzT2RRHEZvaYMATw",
  "key28": "4AKFtCNyJrSizLAtSuoS9Psxibr4ppUk4LJfnE6Mz8yGYRY1jewdXgsnSSUJXxbyJmR5juNJ74icoZaZHrjRhRVu"
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
