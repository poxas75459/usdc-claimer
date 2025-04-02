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
    "2hPeKn7yxJWGwgvfnFouPJfkFWSmiYYifSy82quetqbLrd52htK6ZQQXEr3mVcRDJE3fbd7WHgPXKXAA8L6x2phr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zXoNeT64V8ASu8KnzEfcv2HFt5jduKi78a3aKeBpNUH5LCuHApbqcR1AMuW5sNQBW9QsfpkNEHgjMwtZkwnGC5N",
  "key1": "3vfYP7VQJSaDNRXa2qsgGnidE2HgYuWFThrPhipwEgNRAUEo8afxRx4d5jeRQeo7Hodp63GiydNXT445LqC9hJkX",
  "key2": "5n4A8DQdkEh6WPiH7XVDvFjG9afg2f9PHvv6UPQY4F9iqt7ZXkt7a4kcn3ZtSL3MhDP8B8inaCQv61gVFVbuW2uZ",
  "key3": "3nn3wsn2Jt9QzS5QwyWCftaAmwseYjoGUvLHYaX3zRMZVWXGau9QHhaEqbVfCResNhSHrAuG1qUzWePAJsqYjtHL",
  "key4": "3dGsHJh5ECnGEcyjmMVtGLiQ1FwVA5hzo5wirBjBaE6rAgM7TGkBscUPHvLRgD56i4jmFimgb31zicFGLRT8XMyJ",
  "key5": "37gKobxojnVZ6edNEANJomX8FcW6nTu2ZkrxgLD7corkn7PwBQHG1c6MLLzhJXL5pgK5FfqKkvwNX4jYv4U7sVHE",
  "key6": "4p5dAueVbnPE86zbveLAByGdZNPE355p6fgpsXL1dy3f18ja4eXF3bXuN5eJZ6DENJX6eyC7NN9FYfW2soYqyBo1",
  "key7": "3qrKPYaFR1Q9bpQU8Qg4oSayRnX4bedzjzDzgZysCNttWUDsa7KLR3r26rsRh73TV4Zj889zjLfquUo36iMJihnw",
  "key8": "3tVGfDzRLk6aRh9VSR9zuXQwcL5gTqByvv7vWCyM2FEDuc9SdRdv6RnPH86YxLJYEHwbcUQ8P8CnhLJjXUibsdGp",
  "key9": "4nVkdunYQiUj7egF67wpZGydCaGCDgYPmKfLfZYFcZ8R3nCqPLdDqzCjqkB93p2Gg3jDWp8gLQNwRxikgeGb49zx",
  "key10": "2FucSwTxQ5BdjbMh6RTd2hcewU7hYDqzuaHFQoSMb2A2AQNTL4qLCS2UaEJrHvAvar9SxAvJbujnCT7j1vvD9LC8",
  "key11": "3dDXU37rMYPXKV8buNnBdxAEzcV4R89uvy6mYrnS4UZAVH7bNKiVS5knGMFVXtbmDuwmnNvzT8vKgWvAdPggFuvn",
  "key12": "45SUaHGMipUoe2z4mxjmvWJVpcBymQTHPrv6JVXEKZyFYiMspj1hM1EkpgUYZkrvBRiWgkmwux3Vp7nJfxAZM3k9",
  "key13": "4Wk1ap5fz4FohMZK2k2M8TJ4Kd7NwAaikJUkbHJuBD3cNYiUhz5ZfdFFgYQ3pXbJXmthVSDvvDXPvRK1D3vyg9MS",
  "key14": "3Vpxx4q7oPup91DvTYUjqZqjBCsXnfd7XGvi9aZMu317kuZV3uTQSA5fAZeMrNm68ARFJ6uuJpqUNH2abcc8ceje",
  "key15": "5o1HxKbDuALHJUB6nmYuC1Jaok8s6UAuvTY3wFoDnH6rHKMn8iyqyraCpJfqDkUjQEJUbeUUGYdZPDZnCWn1XauR",
  "key16": "4v6FTG5Zvwk2mAFEPoKrA3j8kMA3W6G5nqMZ6mjhQKW4TkaN666A7BvvrXZ2B7p4jEerksAnNuN6BYL7iS2Afthi",
  "key17": "2KSgW1WHAvWka1H4ur5cDYsSjFSUfxpYP8juqrQeePd8eNEWrYAa6ANT2qQeazytfN9Yb5Szvq9EUo5Af35N4xZz",
  "key18": "2fAoA1NYAzPpRCknCHQFyk3J9n3KXTBGhhVXyNEqmF6i3KYwNJCjy7bZDCicG6rfTAhpzANwGWxUaz9NmbR8sBc6",
  "key19": "5nU4Wue9E7tyLSnrujpvKXbxrr2pNinBh9ZtZUE5VEZoynXTqakJkppt1NTJ2LSY7guHfAQsyhpGr5NKFRjXwP2K",
  "key20": "sUhVGkengJSsAGrP4ZPyQLNB5kGDv7ZVgX948jnH4DoGh4sm69gZW2nxdvqLtqsVcVaT45Sew8BYZifXEjxTKV5",
  "key21": "td8AAgbdaMFgzUzBqbCWMFYutJ65m88eXrAFUigZR1mBgVrvwHwG1Kf71X5ckhG8Roqx3ML3KszTdF6c17jtW7i",
  "key22": "5AJFvi3EuK13hMoW5jbPb3stsEVaoyEoaN8spV8nAyg2ZLVU5fT6P6P6kogKWugvp9YbmsY7rSqG8Evz15vXxQCj",
  "key23": "4Fa5j1AkBfP6Q9dxNiNN2wuGmtz3CpCdQPwz3HU3tsYCiH2dNJVXKCjUVRqajC6VUgRsFAqbWVkHKw6Xv6qcD95M",
  "key24": "46YgevkEdKLZFgrkxWyLvGtaHPYZj8o1zHGNPHxAsiuyLUMRXLwba1vhZdWieet2jN6DpS5NFXQ95Ljwxi1YYeK1",
  "key25": "dR5dmQGwLX416o42dX1f1N5hFgpAAbxBM9Ve9KBkPSg7icZ78iwBWyLfW8HfRfGzmYPtoL21FGF17r2j7zX3Zp3",
  "key26": "4mrcB5odwehn7HSpCWFcpMEfE7wSYRWzM1T5UG19Vy7eLk2zxkSrigjBa7vKSLb1RKV2dMY7RcTdavHPY5SgSKiN",
  "key27": "YnjxDkHExaNetnuSyHY53A7EKJVyRpWyQm4TZLaHdB7e43ZVCuv2cF6jhVpJVbg76UbiRM3Q1KNpXTipHPEc5sb",
  "key28": "qgmUE7r12L4NA5g1XeSse4SvhHu7M4BGBUgv4C3ApA7uc5pNPyQCLEYiieztiuLkEsjkrG4aCQutiwqjgZUAvfL",
  "key29": "4MkXjUmaZFy4oaYM1rnedpqoEUR5xtBsZAt5rBpxax4E8V7FTuriZMAxayYni6JZEZP7rgGBpewh8AoZMnwHqto4",
  "key30": "533Ws3jcen3qGhAw9qFusHN3qP93PCeXq63NLSrr3QR4Mr3QhofbajZAnAG1CkxxpFFtqQSXPe1RSkNH8cZUybet",
  "key31": "3QyDcDLA8eTiY3JrFCfqVNif5uaavoQynSZRjbn4dXMW7epL2ajHopJysNZqtpxsvt6gSKDKoJ2UKky5aVGPEVwV",
  "key32": "49zUBUqc59B8WNPf4yWrxyEYByYBBio3SKeXJ8TFxQxz5eqTcGxWxxgam3FGUd73LhZHCRjPycABGzhstkGKCPSQ"
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
