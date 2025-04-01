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
    "qTiYSy9QodvRk6JEaFJntJGALDo93k3yB7jBYJWba5FNKZRG61nwdJdfis6BeyP1XWRYspZztA1nYqwtetLiqoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mFwA6kbJmns1Aq6YsP7kqcnwuvGefnjXvXU8ZJq4JpZDmgKXVTghHjGcq9XFzXNaUbiNkKAqDhRY6v6n7Vs4Tko",
  "key1": "4w7hXnUxYXN8mVjXUZTyULF2M7jUnnqFUPAx5THi7gnpSSSVUs4f8pMAE3rEweWn63J4oKfVgXWkfZRRaFcAvqf4",
  "key2": "2rNgWwKzGSVQ8drtPqrgkCvbP2nN4MF8sW7MJijLURywR12cLhAWGsTLxBvDYbpxD1zkH6pvV2tNPxR7F116gDKj",
  "key3": "2rFDuexN8ECSvHS5mz72FT23jvcqrkhFZhC3RXsZnbB3ftcze1cGbe9hibHU6eC3tZEbgYmZXQx9FVAweaVabTZK",
  "key4": "wyb5evdAWS3y18xPxvvnStRBNvEysKXWNSzUpeVeQCEubx7GLbVrVFxGauAEixXBFtUZkgt9mi1zA7uN96Ukz4S",
  "key5": "5a4EGTFvixWrrYjxxauMVsouauj8esRvLNCf1zYSr8zbzsWJqons5CzLDpJWuy6KFZ8giAurVB5KXWmr2xfKGnWg",
  "key6": "2Nauv4WJGA2G4ZRdtV3b5nvvhxcNE6ZupeYEc5LmEQ2HVqeiAarSdZfXbqZsoVmJTNNeKV3U14XoYNxsjQ3Vt8st",
  "key7": "3KPgjzrc74biyL5dPUMCPtRHM5kXty7HZqwFhUA2Hx1iUNnHEbHcbH99FawDUgBY6QYCkW8megxaeUDohY6tvL1J",
  "key8": "3oXMRLPKAhUaTdGjiph5L5yHhtGTTj23cfqyBzo5xa42uxwJiaDtBW7gwTry9QHuugqWgRCQavUCJ6s8UhjjNft8",
  "key9": "3XcMQXPDWNzECy2ca7TpP2sqaj6RugNULsgD6KJvb7KWDMdMJETJTzYjzGW9SHvjUaUHXBzwMFEW5HUe8eD8N7QM",
  "key10": "LadDDF22joVLAB7vnvzDHE1DxwMtTRNA3xN5FjVWy29XeM1UsGm3XWS6TDm2KXvvLZayAttHmvN25pnXBiLmyoT",
  "key11": "5ctGvdof3ZYyPV2Ta7MhqWVAxc6kRLFvtgfG5RELuwKGL9NroD4UuVXG8JDZ2W4FKub9TrifMMp4F8kRfgtfT3pE",
  "key12": "3gKwekCr8kUvvLZ1oivooBU9MLiyzD9vpxM6UXxA1tmJ3B2RmnQiKFSbvfaDFdTF6nJCk5FWp7efn9dgx7pG9dkV",
  "key13": "2Mvz2KYqK6QL3KTzJ2eC8irVrXgGdoSizXZS86V2Pz9piTTv5jfzwh75kkoVGD3g1CTU7wCgi1hi2zZRPoUojbv2",
  "key14": "MGdmpuP2SDBCHGJcpgBQDByDemnwq2gZGPrpA798X2eW4XbmcW8Wog1oR4WgUKRAYrNeks6Pd8Pq2qrWGRLtuZJ",
  "key15": "3v31kbUmU8S5VQW8kCe5s6hRwF5EQTZLuq4zPYQhg6UV9bijNzinbFozPWk6LQ1VMFnCvTrJivb5JeutgyZt3vNS",
  "key16": "34PLAVnRAsba4MuHnVWXYNpMyniGNU6MVPmuAnwUd5EhxFyPF2zzyHt27mLXdGFdhdsc6XmdHYwY8AmSktwEGDow",
  "key17": "YATAZgAp9vpARtsyYVYWAYVLShsaGLfVMMv2DzMqWDxXyWuUy7PimUPNtonDant4gX6Z3ZSxGPBMTZTN38XenNH",
  "key18": "22ZHJr1ZP1Ar9zrtTRyTFb9Y7GHVYW7mXXjVdnubdv94HucbwzpYS6A9mU4UtLa7ksX6qWKDFD3tPdPQU8cnywVj",
  "key19": "59U66UJGgdjTLRsRP2mqc4A9GcUBHt3kmtVRJMLxrm3ccCasLFUthpP5TNBG9Q9KE7wVVjEqUH8SdW3oKysTSJkX",
  "key20": "2N6Y3XqxQn2wcoScKGVNtpeaCEK9n5aV1UTtcvxBLnmhgfKSxJujYayTQpMeyKDoTbSzpy9XkpntinHQ14YGsk54",
  "key21": "3CetZ4KwAn4Rkvmsoz94ngfiZVJ4hwmi4q51SUi2GF1Z1T8pH5FCGT3LxciGmanwD42YcEbQznvwpSzS9R7bGUJv",
  "key22": "2rWLLjaVN1F1VSBAjCdh7kZV6cJXE7XLpst1cdtZR1yTDhBcRXkDYz9o9VvgBYcf4cF2BT5tijQEXnUcFfnfMYqr",
  "key23": "3z66NKEBqUfJhJ9UxC8B8sGRhM1r86CXvMBPKhmSpH9D449t3ph2bjBTPqs2adg4GMhWuwCf1UanysU3x3hNFKQp",
  "key24": "5FvKbTUApKvXNuuciFyoa2kCAC29pok9FN75pc8DGYcWi6A9bwxJFCX3oD57Bn7YjgHjFL2xYUcWLs4drKm66Ueh"
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
