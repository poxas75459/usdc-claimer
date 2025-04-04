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
    "3hizzcicJG32caF6nsofYkWegqaWte9N1uQW7k51PfaaFv3mtrtctLD6D94uTveggvzritoYuaNQUYrj9didVkXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4biCT8LfaqfWCpoheHKGo24M8xZqWaKhn4oVzpupotHANj49eapheQ1yzkBs7kjyJsM1y2gx6AQ76LnhHAF6cvqy",
  "key1": "4dzmq6PMe8jvLo6i4MniKSemDTnBzyKWLumbcsFAZh7z29tTeSdZ4gETgM1nqs2qd5peyvf3WVczu9h56w9R61Yi",
  "key2": "3LSTe5qAzExG6njFbYq8KBUmKuN2GhCBggh97YnBvnCUeckz1EuDqgzekZxTpzKyqkXZaLFJ4DyNrZXX7jFh8qyk",
  "key3": "3eXknhBGmkroQZ5tsrZqWcEMu5FApoyBx6oMuMisep5SYJC3znTTfLTpZsTcUgGAuKBVLXuMDBM2uGCz99HRt3WJ",
  "key4": "3zpr3zuHHdGhuEAHC3LgZfJhR6iCRA2w7Tb13qkiKU5bEbcQu5ke5omruFw2DXbvFNTEpo44SCtz5WxU9V3Y8cDP",
  "key5": "aoVaNi2qYRdHKyk1JKmYhgtBr5jtznivfNorqSnPec51c5emgS4DhNdd7y4k1xwCvbrbYDPL69D89kHUh9bxbLt",
  "key6": "21UdsYXXX4LStmdNvaKtpLW9xFFhoqaf4Hf3kEjU3z7E4QKTk43A9jUi3L6fHVtudzrLyDRDGXHG6avXnVJGBtxm",
  "key7": "5wkv9A9NAhChfZyhY72au7LsVE5ndoafg6ame8adBzFPdhH72STCfup22FjuWLphjzUrPRLhuNikswdk94PwB72t",
  "key8": "5G3xuhdm12uD47hzbhEjUHeZd2UsdJ8DN1vyVwaeymrYKoz78WjbeW7wF5TsBnaTG1iaMEUSEjuNJ5Frn9KnTaSB",
  "key9": "4r25J1vtHWYk3u5jgK6Pahw4LzagsTKPgweYpYa8RQ43Ezpfn3r5BtjwtPy1YBiVTM5sPHaYGzRQ1Sy9hgJYKR4b",
  "key10": "5rfmDkPcvcpvGcar6U9GRkQ2ybjYsTBYVXYVf6SJez1mrHrs7SfL6xc3DzMumy19jWxF1Kirt6veTHmCVr2SnsBq",
  "key11": "4ttgXe2Zs8nuenJ6RFGEAUSf2SiXGxdGr4UQC1uBaXfcynT7CDVMsF4PY2idDqVTi7o1GS3X5c1enyBMoeNStrts",
  "key12": "fBbPRdmdgzMfbvbAqNCrugz19xxaDKDVajZopFQVHEz71QrG76pYawKTLR5RDuJcGoRu4AAiJZHjx6AoZwmSxUb",
  "key13": "JcYWjd7zfjnDD8tqpay9U3dBfw6z5WreooHt8ioG6LA7TRMh9WZU8KF6wAiEh8gLmsxD8mBmJwGkgMLBHnHEiUn",
  "key14": "3PNrZmbbesQHtBQw4h6yiPr5VgVjmgTMfpF48app81xuNH6zbEycCpfibJwDy47QSjrs5fVxtae7V5cxrWkobHhC",
  "key15": "2vAADonrzbBAfAHmimS3D3VTqGfnn3YNQ7KCMPxhEKxoV4tvKXCw6cKajXwcyunV18VDQZkmFZTKe4Ymaah3CKsr",
  "key16": "ME4ifdLx13Snic772yQx476BKubSoqXd8RtkLEVfhSKz7eUKn9ghFNeaMBvcaP3A9bS1YsqfDCdRcCb3WzHaXCa",
  "key17": "4AFCCXuEwa8ESRGFiFGYvueAQ2B35mzkWGG93iBYVFSxqSX4AVDjbQyKNbNgzLsDpu4ja3Xwq75sD3DUSxDibvas",
  "key18": "3vho3rkY1FWUPAGu8kVr3UQzADHDngMGTSU1soFx4cnTFknvMBeUfVCnVvZ1e3M3VvGC2MbYUECAJ6CBPznEpfTB",
  "key19": "3xwufU6zS6icMwDdpTv9U43yidPUJKLDrmmBrjCrfRSF4eNmmZFL47omegtKbvhHj8CLabGFsHCR3mikkKdgs6w",
  "key20": "2U3u3RbGadorq3air2afAhX6jJhA5BtYc2u8obrtD35hRUL3AeYBN8GQP6YkUEYWWSTLp5Tk6R9trM9M6rXpzLz1",
  "key21": "F6tA1Ugu9ALCzTvrQLNYhAgArWR1XUjRPsqiQsKvznk7sEM27kKviQhZqbuSLzydJY7PsTLtgwGV5gmBjGgkNXv",
  "key22": "4dAywfq9J7R1deYZGaSS2WDDpD9zoPNa4jX9XYATgnrY49EkZq43QRYjpF5Ur7QXjYDmXssadQnrKVpusDzrpPi9",
  "key23": "3whfKumGAJhbAT3CWRKJLdzJQWZ5aHtXt5y6QXaA3PFtrEJcBZ6RQeo1rJeFdixqznhsgSAUVvagAiPwGReYiRkS",
  "key24": "JZshZwy8ozQfGCGRPx9Ps4zxc3aLmyVsS9tQQ9pc9pHYKjoSNmvDUNZGQifhVyZwnd1TwvMs5RLwYUPYZfooB7C"
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
