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
    "zAumyir4zo5oU4NKyaHaHdgmDuyzTrpVrwD9XEQK4kvCae1XM3UZLvDBheqKnNxfBN76PJCouMn67G82k1zcvaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JZ1zitoY1NP2hQUJvQAHVTo6xEDLcZqsT99fRq5QKEj1HfDy1jyk8t1za5LJBLYPLtTd2eAEeMNkpN1RdFZMAV",
  "key1": "4i3mZDsuLv7LQnS3vQSoU2peBStputGp2v9AqVC9mQprcKS77oviGuM5htpG1KE6vodRLcPhz5QV9S6WrNrqdbBB",
  "key2": "5vxqxD51GSPGT3tqiZvoygPfYgdvthBg8xSbLJiDSS8UR2fiYZgd6Wm6Mhw1jFs71eDyxbJnWjyEsAGDkQdoDFv1",
  "key3": "yB2wtkmvWy1BEx8o9jYystiLXWEQQk6qCA3SHtbTukEXFU9MWBdjJwT45hLVn4nMNGruUCKP8ZLrCRcu7W6Vxy4",
  "key4": "5rQ6Yx5zfYBMJaLp8sXpzi7iLDKsx76PxPmCB2zWvCL7NNupUtJj5wnsD8dFJFZRoU58ykT73Uvczg37ar7FAShC",
  "key5": "4xqeesTiYtQMUL8cK2rqfu3ExfC9twuLCtLtj2ixNSUc1AHBWFFBu9nAAzERLCCFWUvoUEumsD3sXEcczvAaxDTj",
  "key6": "5teRhjW3MZp6uex4S3mWyZJGSvhn5tSyfhC7dDC22Y7omL8gaEzCWon9Nbyt8ENe6zAguAoCCzxQiNFJSXKDRHTS",
  "key7": "2iLk9mgzjKEwEdLoVeeT5TPGkTt6ncZxvc4EAt5mFEYeoRcDJjaChC4ZG8hr6WikRZKJAa9nk9C7Eav2UNyj3uH7",
  "key8": "RTjiDrJtxf73HkPJw3H9wEAQTAtf2sY265GPwkHbiDTiasKFK3Krw3tg4mbDL4jod5DTzWkFuLH9Kzkss7YPGeG",
  "key9": "3x2xsgojQoHa5AzpgN7UrpX2EkxtJg4Q6W7t9HNXcMhPhNFBd2WhuW3L9tgpFmZ6WqKJqQF3DKYkV9QirHpqzf9u",
  "key10": "4iPgrUiKU2Abn5enBQj92XkWzhN1NCAZEoY9d9DAQhdn8uabo4wsu5ncQe2Vv1GHF3MADHHU72hGvMrLtRK6QYpE",
  "key11": "XJb7gJrkHE4wzDQxTiJaEuaCg2zACrTeYWpxFQA1b5EJAvJ6RVZ23PBScm5oBn4hW83vSYipYi4ySGCXeGUd2ow",
  "key12": "NXCHZUncBNdWRQfwpuwbuawCVKqPoBFQ8v7robsCkcLkarUZGU6SsmgX2gGMu9c4ui7oQayXK26E7K3gbUYLbJz",
  "key13": "4adeLCmusSFQbeYhmqg3ch8N4ntF9Jmr4idNwafog77avASSExe36vE71gXTJncYmr1ZQ2sj9LtJjysyb6rNE8vj",
  "key14": "42B5GuHeRwQXBoyTerjy77p6z7eNbjVXXzC4iskDW59KUvg3LvrXVMSbiJBzPa9kywtk1wAvJ5WVDCUJ621EdwB3",
  "key15": "4ixGeiCV4swQ3HxRDUJq5ehJFTaVYE8dThrPrKwkpkFQgzxTRn4g3fopze9nFxJT7xbSekweoDrRQZkdmu7pyoYk",
  "key16": "3EPK6wzY2cQksMf9NSWpBufUByVoAwUDScupYFLPKArothpby614H3TzETrcT4FRuYqSYTZ4v5ofRXzAno8SKBb",
  "key17": "4BEFrR4jEVZYfnwvPPdh13bs3wmzBYdYY7KhJ2qyyfsg8QmPyoWcf6bFhN7z9p8e4u45EzZVcrdDGPyY3VkAtzr9",
  "key18": "4kvhqhNgWArCugAUxg2VwsJQJx8VBzuywQokfuVHZ4wzpj8wxSFm9HzFUuduQEcybUQYEe8moP6boozjPn7wtmMz",
  "key19": "dRBXaL7jZTKKP3HJJzbxM5WaLPo5SDPgcZjetpoToHeENQ3AqC1iuA84xTLAGKd1tfqBmrbLxbt25LLrmsedQL1",
  "key20": "Fpc5efcGP6p1GR6jKNaV7d75JnQYY9fzB3Usbt4PcAhh4GMoRj9pF67CLq8fDjtgtGakZzLmoxfimSJ7C8J776d",
  "key21": "5hzZmH9o4hfqJHqdBRWidkbWNBRjFwrVp91NuDyj3NxQxwMs4YiaoCSWW3Vf34tRCPqggv3jEhXQnCeZM1kpuT8a",
  "key22": "2ErSiuuBxc5AVWVcYhVyF8eXSQxeyDXSAzDmMHjPbdiaRRourVDsukgje7d2yj35gyNbyqrL3N3NavjEbkpBrDQ5",
  "key23": "2Bb2AHc15hNnWGCTPHNANK8EEpi3ThxvJpnR8Sz5M22LQ3jpMNU4ZBKJjL1ud9Bid6Lua4kRzABZmLdGWzp8HCHP",
  "key24": "4DpYrcPrzPVSyfcmGLmwWYaAd2nz4Lgb1PZNishxL4v7x8QhsaN7vsPYmqJDNv24AisUuTvE4cyRXhxzTaPjtAkf",
  "key25": "4Xy2c1TQYGynqwvg28c5pJ3vF4SK4as4UfjJSWijZKvi2fwg4Ud97UufqBY8xAP9MVkwvnoBRALjb7MpSzzqn1Fu",
  "key26": "3g8TYpyN8g9Cgvyc5yQ7uiYCcqDfzkYrh3vv7tgF4z55vwVbhTM6u7bQLKGkxqjfohYbzNQVbWHotf7n5crivAMZ",
  "key27": "4Qon5ea3ScRvUMqns9jfzerUWeWKwDMipZFGe7an7wQpFoomY8TBRP6Y3jk81hgMVGa2vsP9bYrUCJPvShvmhHex",
  "key28": "4XeGC9WE8ukq3GbinkxqrxmsVVA4Jh5cize3JRiW2fNqKm7MTZWpX2Cvapi1VXhBLp1BmihhXV9VEgF7SR85qdi",
  "key29": "5zWTo6gRVJs3ZXSo2W62TZwZzdb5zzf35jHzEBjzeM5jhZfzNGQQTZLabGBYHV9D9mrFqSDuCbeSNx78HeZsdFXW",
  "key30": "4QuV2aTT1s5zzjZyX5CjqsX21NY39uzLd7eRtDScFzHihnfYX2JZ2rxTPN8AcozRQw3qFiHgEaFY9XVgDj1iUTV1",
  "key31": "5iwc8YkQYEi11kgFWVkuznCg9VqC2cNowvQRzpNFFKqRo6wEfvwW6wXXbnAD3SF1jY9NYZKU35x5yS955ZUQCCEq",
  "key32": "5pxqrRrVRPNVzG1isvNFpkdgWYJvmV5hbma1RqQ2wjGZnk8w5oKSqkNqE4ZRdeCTCVipHJ5m35La2mfGY3zZVkYv"
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
