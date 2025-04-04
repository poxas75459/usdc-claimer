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
    "4TbFBmcdAreszxFZpbrTnhaaKEUEZRxU2sj5RUi1Mx2XKREbRUJNiPA123tabVordDknwDNtneB3S8JRYoYtewmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5739hNGVu5C3MUKXYR2YnWiKd4txfo1vBjFjVe9VTd8QCrXTMZYyz6uKVnLUzYroTS8FL3EbeZnXCAhc4fZnKyAm",
  "key1": "EhgoAcWCbcuv9S7Cg6vaeDCmekckVzR3nFoTnRDyUrC6SQNY2CgzeG5XhNRnN5KQFyswAmXECgqCGoqEk1NkYSD",
  "key2": "2EdcwdivS99FsJSm6piZ86wN8Tkre43pWB7SUeRgaxRwSyBCz1tsDaZtnJS81gWe38zx6WPcDQvoDybQzjYAmzbk",
  "key3": "s9kukeqWRGhDwJK95icZFQAoZrjTUwdWuFiNNRE1xbwZLnZaqyiK8mCGTxJAdKH5QgYFo5RiT7Hg8NwzhPnpjh4",
  "key4": "2xJX2tHLZ1LNsavJEMMEe1n8rZ6STFas89RQAG35JbfwC2u38Ss7do3AoQ5PEBKdCAL2eUkJ68Z955RNCmuf8GwX",
  "key5": "21HxPLdTw9jDBfeF75KoCG49Xe6wDFtKpABZgDrSCphCLzCUTr6LmDg3vT9tHeCZBTogWkCqYW3VmV8AySxLNN2r",
  "key6": "2L9MgDkmWxBJV1JaVKXcPiGJqnVA9tCjfsja5LHwQJbXR2263yY789DVoXv5M5nUmS2Yuik7nizRXaMxJh3vdNj3",
  "key7": "3GD6eTrQvFWoYmdQJDB61FLdxFEN2PNju5vBVS2J4tzaK26paxvfirgYgSkWVjBbQPw4AwkFFfXGxQG3xMxHyJgn",
  "key8": "Nh2JAj3HgeQFBw2FKwCJbjmVYkJWJUG2PpBk7tB52otwf2UcXrhUvB13jdWrsdDmusttvzhhoDcKf4KyfMDBPQL",
  "key9": "4LQFv6A5k6Pefa6ZUejXVR7iHuk1tk6DxYHetkUAheNaWuTtE2fCgAZ1wnmf4ELjwJNS7YzGCnyiQyd7UGTod2ES",
  "key10": "3nN3re1sJgCXb6gTkKhUxRoSBp3xWhFuLQbxUvJf7HVXQfANgyVgREAEiajLAwRh9ADuzhfYXSsZZxAg7kS31tJe",
  "key11": "4w9nubenbSN1fd8Xf1HWRFh4vyPKunTHvhxiidxbtxHJ3sniuiqWYRStroKwKkj7RHZo5RxqsvqbzjsWQQCwFA51",
  "key12": "5iTsT5NSpHWFLiV19RPqn3yjUGvVA7tSCmTyYQFsBwhe8nk8YZBvHNwPc7Db6XftYUb2ai4LTj2tJujnpbHWBGAP",
  "key13": "2SBVbQaYD6dQ2wRqDHDYWsXbbYjP22E5mXJgh1yENZGi9ZhMKfB6qeiB6pHCzx6gQa1se7FPajwdzkmdY8if7e6g",
  "key14": "3uAPNWpRRENBgNnz21PBcv1DV86oAUzzmUbVMazTXoCfNV9zqiWBSXe1QRFryjuADCfJrMLXBteAmFqzuKAyNsAB",
  "key15": "3waVNbe8htWqsrnvNvxcXQ9zG6L1LV9jtHu4bWXj9gbjU2XFmb1DREv2J9mxHRJq6Ju4Y3Tcoj3B9pEEuA64y52N",
  "key16": "1UTqWydbD9XbN6TTwTE22HXRNV6vLn63LmvUzMauHVitoTdx6dSpebyyWZMdx66k3nq6RNiFnWn948pnu8KKYVW",
  "key17": "4ksLfrZqYbA1uWQb225gbTM7HBT6zrkv4acCZHMoqW23nmDwQC9BXGbSwokeptGiWKHBmkGXw6BkxJi6HzzVMoQR",
  "key18": "yphB3okDm2DyXtGnSxoU84UGu9frnu5CSvwuNPQGQ77vbqpDpg37NhKbZ5Bxzmdna54w9HH62rZKvX9dTbWRkjH",
  "key19": "5A6vBPWUsYYEnVofA5iJbUAgv4r4PJJrYgsQqXQNHTm4MT57teVR1UU54XTEqLi9JzPGvFVY4JvhNUHqiz5XTp4z",
  "key20": "2TzPTvW8ANymVULD7U3awZ8AeYBiJTNGRgNR6XoiUJoKDtV88u96SZizzSEHp2C5vXR1UfDf1k7kj37fyjsgxitS",
  "key21": "46jboTpBitFc8qMB2Aqpqok9XZ6YCCmdite2YNDZ1d9vQg9aAEia8iZ2WGMd8zDb5Fd1dng6UeesbPvZgduPmKXb",
  "key22": "4wZTbLvxmzT3v3ZAuYizqtPjtuW9qhrqsoYVx91Y1QzC2iFufXMWQeSdYzhx7dXvcx1gUcazNNy5kXiqvGJTysFN",
  "key23": "3uFCr97RR2Y4WLjzqNkvEa1oW61foms4Ru4ymkAMxzMedACdukrLKXzd9Gp4KMftYfLJU4dZPeVrwEZM1G3YreQg",
  "key24": "3Qqd2G2mWudVym5mtYRMV7Zub1Amkr1TK18ArQ3afLXq4FudsguEcxNve6oiFxkcYMnJF9MExN3R4dbQVTaYzj5V",
  "key25": "5ysbH6voyR3wTA5LGytLZ4CHZV6quLbeVZBP8y4e6ERpSxKsFkyM82MPVdgxZvRkaNWjL3JCmiuFQ6iDd1wws7my"
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
