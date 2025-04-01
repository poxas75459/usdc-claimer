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
    "5DxBRoUcZAU41ZmApMJHRW6jQ2FWBFyuDM7bY7hVFica1BZa71KCTGkUiEApf2r52WaWVqwtAtW9sct6654hMUKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YfGxY7z4zP7K7MfYxS6f3uHpPPXAGnPSsnBwMSBqbmsxRBNKdGSQ8TPvNhwGhMsZbw1CP1CQBL29QU9iBFuKnwm",
  "key1": "5csCJNvk8txEePFmTz3LnN52R1U2DFxSxaQF6VKiLfzwf5EoRjrrosimkqx2aGPMHFXEEiEYHdJgv6yPt5Y9Tv6c",
  "key2": "5M2zSyAhqTtnV8S4q2jK8Vq4CZzxGGprczTE73RZxyT4M17HxVZRpQv91Ai6pM6SJbzfg2WFRSzzL1UipkU3GfgU",
  "key3": "5MWPoshjHag2t6Ewc8pvVrVHQ4QCKuxm2m2x47ju9XwyXtP8FU16uKr3UGKV1eNw2GvuzUMW4rMKZp6YFxrXMz88",
  "key4": "3TfofCF8cmEKHp3CDx3ctekP4HXqqiFPkg3dwwPFZ9Rh4NBqmvh4c8cnaVQAVmaZezqbGpok8e9uJEatdqTztSWg",
  "key5": "3ihnV1MxGSZBPRZ6hGrpNxDqEPSFxyzPcpmUcHdSy38W2ctREym5W9k5ogmiUJyfzrw1woorRgXMVSiU5hxHGX67",
  "key6": "3hjMsFjQxjy2b8oP6rX1CpUjsqAFUTUGrNQpZgyZSmeBCKvZLnK1wCtVfdgAVkKt6NgDcQUWkbd6JijhjKwHeBL4",
  "key7": "3dXTcKbWMTfmGNF3ZHgPkasSBWrLdw6r6pfgAELJ1kswBjWvWgDZyUDAHPvJekNUNcAEXLhnx3uP3LzQ56anLvei",
  "key8": "3RVkJNmR7rZChsE458fwQNtuEjgizDtDBbTcXThW9UGzvzBUBvQmJ7gZFXq8aPd37nWeoRbFcCdi8dLbkT4qUjsm",
  "key9": "67AvnLwh8a9qpvoipjg8YNQAahzHd88ZoKWPg8eLFKj2wCgbQstjix7npcaBxxpHan9UgH3esME7CLPgUa6j4vT1",
  "key10": "X9U1DH8trLwB4isdKyU1oqu6N2u8CE98X2WAsvyZpRutsJ7eJRmTBCVAScyUnKj55nXPuUBroScdfGyCNnhygiJ",
  "key11": "2be1DazhUhEykba4LD9JLDDyAk3i3sTc1qgB6gznRcmS3dYi8y3gYWDnCHcLU69jmLoew55bcShFVuHUt6v63PV5",
  "key12": "5zofj5Nf6pWYvdkFGPV41Kis8rCCHmXqwbybvnvNnGo8NfGzxUMnbYZMvZbKSdM2A5K5UeEm8kcG6Xs3iBCZnYGy",
  "key13": "5BHdzkkdAoo1x5hBj4HMJXGUA7QyNU4TBAxWYdJUNnJCeMVxBhEq35A4xVtAM6zGeiYZ4yaqMDLfRgT4qnzgrKfB",
  "key14": "5CdpVrPogb1m2BXfRbdJrrfsy7eAn8zVKiyZD121eCrfKYkWYVhfcS6ZaWEvUyYXDXkycPksQXQ9FWYznER4SJa7",
  "key15": "3ENuisbL2Jub123AQXMAVLPas5NMb5FHuCqBMcMa4gBW6oiS25LgxeXN1CoJydZDVdJryEWsSzYvo4FhWWWh7AVZ",
  "key16": "4JfaBaf9458rnFqHE1R8L6iapQkDAMKrNd7v2vaFK7cNMR2D4Prfdh7Fn3oaYKhw6yEsdCYaWTPqDqfPd7NRudfv",
  "key17": "FzFKiX1h1UTefPwwrkCUDnCrbwy26548fPavksvbZE2JKNRz4KeVMfH6ePhDaGYSN9oRavmZFE6QGMDmp9VTaZK",
  "key18": "SSspBTDicvLp9T2vvbS42KvL2vJY3i9KpdV1gy8Csij7wEaSv1dkCpdxpa4bZL5i6Fkvs59WuNy7xLRGsd91PRJ",
  "key19": "2dXbiJ6SrcNezn6NhCpumBFhyWUT1X8vu2SA2rsm4SdGXctTTfMudKnWinZCckVVCgbeEZtyLtjzFwyAw8b3uabM",
  "key20": "5u7cVBUQrDbGXhjg8uBrd2mHpxUbC5wocj9QW6pL2Dh65VDgWqsYuDqrcvMGedwf8FYJttyJKSjbjHxZhswPmVse",
  "key21": "nYxXVXhHm9pgmQbQ9RrGoYdWGqH3MBmnLx1RDviobmMYeUE9F8dkM4qSQa9UMHaxQjcqVhCnUi4dhYRQsAxFoMP",
  "key22": "5USkdwdRgn6AdbZLs12AY2qtEknzFLz1KSJRM2ofSj8uQZau4vEB9YQPJ8yLR3n76t4GjQ4o1XoDUqNNox8RbskK",
  "key23": "4Kszxrm5BijqZqMW7Ubc8W9wJXDBzqvDw8bHSHZryGGRLbDihTuUUyGAqiw8fzQM7SZANdcEvxs7seABqAMmH89L",
  "key24": "2xwBdgh5Mw7wJ3HJBqd2C9AvyQdXLUhxpe1Fph2o31HjaYKNHfxYbWATtVB5CRHVYiNazyDNSP5XMp5Ke8qKdLMM",
  "key25": "3VKQZzdqRkRRBtMXcjY2xoJkrsW9P6KgcbfjVP6qW9rkLU2TNscisbou3nKp73iPxioY9FVQBG1ZMttM8S7EwJzw"
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
