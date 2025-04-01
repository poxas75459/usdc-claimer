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
    "5pDKEgkhHJnX8gJp4YzdYvUvZZMhsZGpLt94Ein19EwX8iyDiFbwSo7WSf9rNNMt8aLKRtE5hJKxqiPaeoVGVFB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1CncjpQDFnhemiBrEMD7B2qyZPfXmh4KvBVd6hqd8p1geHBm37FFtbEtT2vckerHGhctLocUDn7ThPJE2pur3s",
  "key1": "5gC4S9hxFj2bzQkTUFKQGWHxpfGkjMH8Bh8zBfX4bYbikmGzooT3DCxmGtX99HJbieKGFinekUR5Ee2HmVHxi3dK",
  "key2": "3gq2yPHwNApUNnHjqNt7VLQojpUm1pmAwNrm7cYD7TyYybHPShT55NW8N7Lk4km7MMrzJhYJtbAyemPzE2qA22bK",
  "key3": "3kKFBd5oesXfJ7CW2JaVYywMrhXnx8yxJnNjYj3bowT5qH34zuTjeeCScnr9mFhktv6TQnrfSAMYQ6ynQyBgaTD",
  "key4": "4Yr14Mu3rDDEEvfY7t9omsympqgjDWP2VDwwQiDtPq8iFBxp2hXUJxFAvfzbN2VonDan4ck4SfiZXtoyHxKnbMts",
  "key5": "3hb1C7vhRLgZ8j8TN6TtE7VweksJHGbYqUBBBDJ5WDAg1ohyvbyj5gtGmtrKMionmmoxyDf8T1CxCniwtTMNmWiC",
  "key6": "cbih9ACB66QpsR7j4tuECS6GrDX9V3ETFPA7mceqbF3mSyBiK3HiZcatR8pzEs43AdrF5prqQVy7P21ydwHi5rR",
  "key7": "2srz3vTdk3vTyih4Uy9v55V3aEX5DXVynDCAFQawtmL1ExvHo5gSabgPJfPB4SvWzj3W8QBsb7p3uJqGRgGkgeRX",
  "key8": "4HJ1Cjsq9E3d1HkPkGpED3pmmd6zUDiVjLtqE2MxgGd8jGbQZYW3VP9LwkGDW2ZdvKE2m5xWm2AXLQHkzS59xMy2",
  "key9": "2JZgzBNLEdzF1cYgj4tSyNZXVvbgG2LzTV3HM3uKAfueBD47qjrpxxDLXBJ71SPZ6eBJnLJMtZYS8CxZ3TReVR9t",
  "key10": "4BMxLDWUPAfaZYT7ydARHTZjHVSPbMazfcfe3Nrc3BAu5Cvm368VseQfFejAkt9tr5dxKhxmxJ7Wpx1GTcqK3LFw",
  "key11": "emx2V6pLY3RfBqf8R6YxVtnLd8pkHheKXWbCZtiYoCX22KSzt6JySF5zqeRKzQ5en9mL3q1uDobbM3mzLYZUDv1",
  "key12": "3ooTxa81G4jLCLH1BqUrhaDNWn6KsxtQ8hC2awjsDpjw3V1VhDaeFeqecjik6116wYEaYxssZ5K5brJf7MQNDwHB",
  "key13": "31KRfmvvZariVCL5MejNcSmoBWNiYHG2vrujmAEtMgKJPhHK97sMsryJCQaK4iNHCzVz6i8sqCCXhd7sD6EoogiG",
  "key14": "dTB23DxpEKAZ6gdLUNFpduQVjA98cAz48QEJLapHJunbvTeXcBSUC4Qa6trfnja94avSfAbndqydLLNXwt7QRD9",
  "key15": "42FkPvZ5riyX7B8SvBVdhPdnL3Dx7idfpA1PBY6jndV4mLZMumSHsrSe2r6zL3g26GBtmkm43ERVfq7TaChk4PdY",
  "key16": "4hfzS25qkHU1r9N4GpUXnwwGVZdU99DJqNVLCeyoMRaibfzrAKWG4EHFkxtKghttCAmjQoqEh91KYJtT6KJ6yeTu",
  "key17": "13S5fcEek3JJ8NcPEwZqJ69H2vCMRv5aT6ZXWWGADUwG61GmVmXGc2Z85t86dg18kmuPLckWsjDjhSbXNZvQtiK",
  "key18": "PTFBERMoZWzWnByNGPtH1puYMzRzaYJCecUyaXHfma1nu5db1YoEsWrbzTLQqrXNGD6nhBcJ9EYdtRYtfQcB6i6",
  "key19": "3YB5xQWwDczt9bwx6tUi6C9SM1uRDsbzTsHwAjtae4jWdpQJaZx3ZSXjyUMc5sS3mjNYqr4jeBJbDVsT6Lrt5yxh",
  "key20": "4DxygH3TfsgB9QT3y5rJ1Mufm19MgKwDDD4pSK9F85cjaZDTo1KcdkiNJ8VgnuPopX7dCadzKgwh4YuY9ohhPgg2",
  "key21": "2hYP7Gt8t81oVoxVL2VDNkEyUZktZcZZyDqnu4234n94J4t14UwzE4kzArQ5i8eRH22rdkbmntELDZY7ZWhJ18x6",
  "key22": "2wTvvK1J4EGvq8wzUTKmLeg9sFD9kfE62G6jN3CWbXgwvo7nLrbifug11qqAmHQui1ozJZxPvac5VDknwZx2Lt2S",
  "key23": "4HuwrqwbThpbV5nUUnaZ8n5Yuj5CSccRUdaAzLz2ccb1AYkwsZrNn6hpxmFMneakfTRodeoYGSwELdCCq7Ja1Sxe",
  "key24": "3VS9MnwosfUp3KSKa3XkC5VdAu3CrZPBq6FyFAjmftz7L7V7u4FDdSiBwd5gMWds3cUG6jdnezpJJoKUz1HA55Wv",
  "key25": "4SEPyHWmiVhwrihP2okkMYb636edprAoeCZPYdLkKPbBk2jTUzqeyAksURuVsnY3suVhhawY92YQMPgmPUivfhmD",
  "key26": "5a1peG3Qv6Gh8L3za9paqngZkrXGU952srYwhchVYR3sF6XentZKRcATLB14avioYVe5MmnY1G5a8uJLUB1wySge",
  "key27": "oN3uGze6JvkThvqS2kmX9vx5xr6ApLXtynZRDXG28iHUM9HmWBUtEpzvE2qVW7iSk2iDqRcSYMaG6MSnt7aCShJ",
  "key28": "2iMpCzbix3Au7SZdKVUoUFLrk5QpopRZYB6L5PZjfai11uthxDCKnHxRojbnBTxrJZoTepmgNnufghjyvErKxFhQ",
  "key29": "5E4Q1vJBmkzmjsfZ9eEM9AEz6cLwbX9BP8Jh9pbhd4uiReAATNNAHeA7uzNGFkZDb6Ttp7MgrM7ePMVkfLffh5b3",
  "key30": "mzEk7E1Ljcv12qbvj6j4ATUp4p8qJu8ZidVPhtrGxPn99Dgx25bZS1cERXKTF6k2sSjiuUMzruGVJyHfa5oWi8r",
  "key31": "2gtxPMjrSWfWoa3ba3579F3YwgQniNSTnpjnzxzvo4xTjwABM6ExGDcVZbN24prXfYRuUqHtsTk9hQRtKBweDcw2",
  "key32": "2HNkKTYjkUqgNELQEAcjpe5LgEEtMfgCs42sm4vKxomRtCDoqTx1gPVe3rgv4xcr4FjEAU9xnpgFnpsxznmybxj2"
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
