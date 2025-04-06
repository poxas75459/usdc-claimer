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
    "3uZkhFj88zaPjJQqW6p9VyBcY19cPdovkCWuDy4Yh3nd9RD3r5vmScTxooQMKaDFMWy8dAaxy7CJQtinpLEAEHjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZPUAiuBFSb4aNicyrVhZATVW7QjNuEqzRgRnweFivWswS8r4W6M8qhCdVbvB61BdH2ZzmDv5F77NdfsR2te1t3",
  "key1": "5nN2kA7SuoXYsLBAdHsDV2Rhj1HWGPmf6kt7iokAXfPSEYNn75zY9Vq5bgLjwvTGm8Vu3vgRmwWJ3GHeGUb9qdR2",
  "key2": "wUx1Vzqe64D13r89gLJM65NKFB3s4wrrdnjXuQoTYyxuJNWLbboxEe5ffXe6rFm14iRvhSUMyfqKnMgFMU2Lo5H",
  "key3": "2sAb2KxucCK5J73rkWiZKQuvr32WoSdjkZWCtZTxGgBeJG5j7ocvegpnB5zRWM8tU7iSF58195gE4HXekDZFT2Q3",
  "key4": "H97VUxWLgTTWW5HYLqtxG7VDAHkNBWUU6U1WpXWyyWW3uCrdUJYwCWssLqTk6ZQPKfDxpUGiJy32Sn7xzt1SVi1",
  "key5": "t7aeVTLHABEuuKeyGWCzYVizSreXmTqdpsCezbr4Y65onDjpRqvod4dSCJpsGJaxKVQyHKiL5AACSqWcGcGfEcQ",
  "key6": "38Sgct7QqLeQCeifNjTXoiJQvd9FUcaNBkskEvt883kgFY4yxdrY1baEoC8HZBLUte7BSVyK7itDvpwyTQu1qU8G",
  "key7": "4NL4VzS3ZAm3pCkn37Rp7KURtKMzxVMxGnhJr1QN9mpZjTGEZ1831zPvpY46eTWvKf6oxgXxnQ4cshBEXbL2b9r8",
  "key8": "4KZNiKFvSXuWkYbFccBx25CME7iWKLzhVjCFtjRjg1u4CTUngqFTe2hqwocgcaNMeADJbNUkLRS9oQrra1kDtkKg",
  "key9": "4KHtXPdNYged8iYPPYuQuFnGDKpN2abPCZ2sr4hahQdTbhGZz4syMEerd4bqnymc2ZxjcZu33QGBBcfBsUaWm66c",
  "key10": "oLk5iPh7gmhgHk4CiyHsz3C43SDk7jTVRPHkVHxBhnKMkECBpQK3aHuAAP678X7jaAY73Pm2uYxyEcrqjAo79kP",
  "key11": "3Er35qMEBkRL1nLz8Gj42A58rXrqFdR8EwbzkRGU8hjJgMH2UbQPzzzwUYaFZxb1LRVCpEnwERzGaydwYc7sdZJs",
  "key12": "2pyYPJFSSfTEcHB44PBTnPxjbHB8CVi7W2vMkmPa5QPbrqosoGLL4r18PLCrANDsNVdq7pzFHEUd49XasvySiBJL",
  "key13": "3JoRHNDcPUCTKt2Zq95oonvrwNurRy9AUCN6wkNPLyvvusp3NDxWp7KGmDrqAEUFiCfSxc3AhoAALwS8n5iJyVno",
  "key14": "4hrNXdSuZgm1VQXmMsxMoyyioM2LJWKbc2MdjATBQaPgJB8LqQSQae8Jmyfmr8ouEo3fQWf3oJt1F8c44KhwFEEb",
  "key15": "3q5rhsFxAyMVuvqsmgzpD1ZpkHffnvbCUJCU6ntTZ8nPoeotqFcexdSHzPVmGEEPzZXVR3aHCygKJxS5Z7KtJF2o",
  "key16": "2ZQX3fuiis1FtN8fy4qANeJwnTrYEjM8mi9zNMYfceyQjjKi5paQxZSvK1PNJuZUTXSHZbafuEtYZxgDzCZk85Ta",
  "key17": "3DxThLuEBJbkL2sGAA5E14xHe8SoMRhumGLWvcCFwoUfkaxG6Z5Jmh4YBS5tQfS2T27DBHnAssvknZHCsm1MNLmg",
  "key18": "8YC7uXpSQYo7DvLs9Ep3DWevCe1Jg24SHF2cY6R4BXu8E8vjWywM34ZUCKocNBf9pWFrW6LC85mFyqGGwMspGSF",
  "key19": "2VJN3dSiqFpVUm8YJMFt9b9XCrHMGVaGapiV6fN5a746hFqwQDhgvHTMSYRRHtCGmhcjdNkJvs349UHhiDdwR8wC",
  "key20": "5pBhCdPbr32b1DMJw1nWgd3SXZN7tuHaLDrHeaGT4P7fRZjC69Asqarqy1B3XXjk3NQ7rDPy224BmtjYwRWr6qWg",
  "key21": "c6e1BdioHfodXUSmrU9N9bzF6SVaswybkmtxDcNongQh63pCXALNdmcup8VjSF7CrJDvRAytNsxhimJC4q7tg53",
  "key22": "2zvmBhwp65tYeEJkBd2xMMnWKhKGrL9DmCphFW6dGWAALUAnEyygJshvbafbQ7HoHPYkQPYFPN3EP6rTZKWf3mwN",
  "key23": "4mHbYj9ZciZAtfauxU7ibe4HJDQ3EkAVE2ZDYPoDKaqEHo4La1wkBz3gZ3GderEkJWgHHbd6DdPfWpAbWf3t5K7c",
  "key24": "qtmgnp1dhYZutcmFQ9pAxnWpWwazHE4qg7GgRZLTJyH2hAs24C9gMWurEpyGADp7cz2vKYEvaSt32e8VgnT9oES",
  "key25": "2QtD9XBQoj4mAGX38q2o6v7D7yVmTvx6ipiDMA6JXNq28jNQtdZufoyP4Je2vRX57LcqBcPuVUJ2PtPg1g5nEQBP"
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
