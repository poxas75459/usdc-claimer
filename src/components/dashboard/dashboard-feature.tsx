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
    "5Gmw7RnDgpabTPmpQMf5zXShAEvZWahJgNYt8M1vTSaGhDBk4Tr3htEUPpCLmNGLkxBJAk5xzSk6fwXejLFeiGyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMLhVAe7rPDiLN1NmXmBYodsYCmMLkXvWHSAzj9tuey3XNohjB8iiNqJFuWqF3rJuHBceVaraD3LJyWEvGLBURq",
  "key1": "E4Jd8mccxgq2VjqV2HbHtMYDJ9yeYcremndHX73o4iK51M93wDyeZpTXECMuk6zV2bxZXCbFDrkGDApYYav5UmJ",
  "key2": "5yj3TWFML5s8EBbj4PU4CeHdbkY1tV5d3EXjXmg7CpCVxb1JP6QijsAam8NkFvYUYCKWzPAeigLFm7zyj2gUtxRc",
  "key3": "3iz3RNsHazqjp896WeUBvgRaqxeY6E96oYQ5ys2T3BJ8VTNVJGVqXW8EQcwK3gkhbPDUzib21grvxem1X5ReTFir",
  "key4": "3xH1Vooypdf9qsvdfm55U6EVSKEp44xAF1n4vHtACHCSswJhwcyU6pGQHLSqMgynhGXsaqVUs14n72ix5Fy6j81J",
  "key5": "JJKdRugvcXyrFfrpAk2GzmP63yQ2XnMNf2vFBzwjtZjvAPBv5FjA68y4frtMgQVr5Y7qvx4VHoQVxDbCBDMaEP9",
  "key6": "4anGbcUNcVZYUzjSHxVhr7PcvPsvEW76cpzrmxh3hoQHPaZ7wfR6gvUGZCgirzb5dnhqS4r6GjQvRhjzZfTZ5ZPH",
  "key7": "4QMrsYpM6rZPcdraGPoCvMA4HfZDTmVnWjeEfezwoGwvvWz1R74guy3j8w4tMNjaCBqJtrhZMgF2Ks2WQw1cCzKy",
  "key8": "hkf1WLiy7aQjA1mbBGryoGykjXXLJvBkyg9JWTnnhAJVNwHhzU4bmaYR6fj7BNiALMp5CyaV45oQnKBbdjE2Ju4",
  "key9": "2rvXnubbg5y5Fuz3bgexoGyxfnPomxhk4XUFzCkyxt3w7eECxhUfuiFNZzQU876qb5j6b1cuERjos7G2ZG8ADpRk",
  "key10": "Y2paCNX7BAncNkTQPnKijp4Wnc2EUShrja2qHtWnqCCUyfwjZ6j1pzcq7YZAqQ2NSxs2iVBKnEuJuXS1t1K12PZ",
  "key11": "4i1WWxYcwudoVgAEpqiX4AqFiY7dgjNArwiqLRNgTkrHYrB48q4s91RmVeJFBghqYVqn3UcsJAuvsvGvBtnGz7BW",
  "key12": "VBn4tjyCbGrotggAs8QzhwrwANuCKHWd9kn4SgtAP92mXewrNs7Ptwq75NLTUEupWfWisnBJZ2ZaYWc1PvSq3Hr",
  "key13": "2aV3uvVeMQdVzuBm6SDNXu9LZWYBJS7ugUUSVHG2W4qWnGdQGRCnfHWdAE1gwE96avZJBRgHpMfQhtGpk1UkF8rH",
  "key14": "5VeiEAw7jXG5QMXQ9ZZyrDomeEq1ts3dJTcmWqHaZNKwHs3PzLhV6uzN46Sp6NNdBXVe9idBLjEhGihh5v29yent",
  "key15": "5Ux8BR8zGphxqAfjasLajmXvfkfVxtZ6uq11qRQmMgZzbLHqpVxm7xQbXtpyUvoyAzbUTtFhoAYuMJE6rrWvpge9",
  "key16": "65pb12yHREYH2xNT1t77LQby13b6n6qnXrNEPxjNKXT5sHmDaB1iEjRCicadnbSwCwhg2NeoToCE6or3rGjhL4Sz",
  "key17": "2BecZ7i4yjZ9uyYT99rxtvxWp7yiunN8sfN1by4fL2R44irxTNkSHEkv9gJYhPC3odmjd8FyYZNnVX2AMcs4g1hQ",
  "key18": "52Twhf3fSobuBTFFgWxyoqxbwBbV2dAfZcSE51fvKHhPvRAiPrxLqi3ayN81yFQ6tZRXeEoC1Fdcxfbbn6FiQ24S",
  "key19": "2QX9u6LgPGa3Se38AZcf9wp3EPqPp58sS7mKoW4LkPdFHrVtjt86tykaLbnWcQTZi9QK41gJKQTi6vfkvaJcQoBM",
  "key20": "7RxChkVsqG2ox1Nbwk5gLuG5MMq3SACoN9DYEDe7dUu8Mt7mhdtVDiWPWE6n24ycYBwMrQARUsZSGrePnh77GGT",
  "key21": "2a9wn6B2e8566kcMjUM3X7sqcQdpde8D4swKVA7gM2X9SwfQz4pSd4uPTXqEn8mkcxy66Ma61ypcjZmuVEVbZWCT",
  "key22": "5JA7FtwtfRDZDVHadoMHFtPofhLjHG8cQDVeyJzh9SfapcwdUcSTnsCGgUETDp17kZB2FgmNNnwpyWuSbaeHT4mZ",
  "key23": "2rcmYx7yvuEk9YJVqUbJHgbVqrbMxyNHRGEALFv7jFj1T794tR3h6BDcBSKmTgxBHDfpPQDfSNk8rVn1duP9b8GM",
  "key24": "sJ6mxybTWpkSCMqk9Tzsr7mAW4AJAe3tFqnPbaBXVudjPdAs8nMNEeX9yzAEZwkNEmkqdcVz4orCvwpK3sK7r1B"
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
