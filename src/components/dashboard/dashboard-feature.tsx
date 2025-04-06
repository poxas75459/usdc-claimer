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
    "3URcBSyukeEzLmdLFdv1tNHavb5TMPMbvug41GKi4vnkTbT4HpW61g8QsMPKH2C1YMxcYQCzr7x8Fc4sAzUPFWZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFMpJd4YmEfe4xU51iwGcxN7ggLp6Mkm9aNkA8GcCZV9eq3fBk46xGhY5QQwYSv7RSqLAkNavBkEAdCTzx99dLP",
  "key1": "37bCjSSzYXcaRpq5UmCcKr78oWCmwhbrFR9owsEo3J9TFC3LW7YH2f6ixiiGhoaV434tGhXxs8zdzwWmvmgKo9aj",
  "key2": "53Y2DLy2ZvHw11TbMJNDWkGdJRerzn7D43uK3QJ6L8pffJVmnVQXWwDhN2JnQqPZ7zEe44oQk9UAST8Fv75xhXYT",
  "key3": "2ThZ4fh9zVeQ8jb9FmbjCd4Eb97bsjzAXHyXYdGxuc6fnNEkzH9ayos7mAZVSqTu9R2dv1VkczXBgQAX3y3vPkju",
  "key4": "mfd11TEhEi9KaZ8uBaQbxmtwzCHC1moAxBLZ711Scqj9cUfEs5x6WHNHm69zRTBEHF7zJmVjeeituwkYERUG1kv",
  "key5": "mAYsZkvqdoTnGTzQDKTKN1cfNiPniyBoGuGNqMkn2osSXBtUzzTzouG7R9oqN45wpKCcRfDRny4BVfpe6Aafdoq",
  "key6": "Rr4149BdprbbXWp3yRrKxiiGGsaMACVkKAq4fANRi6bLDWq68EmN6ntG7uupGDufyoPPQsBeKFjMJXrN32htEYM",
  "key7": "2eHHuB33xp7tSPDdr7XDumswsMvqCDTEsePu3R639ZdCTXieqp3k1xCdKYrSuEsjuTdnhhP5E6G3uLugmBN2VETd",
  "key8": "5Lf7TaQZHbAd4cN6hFQeLRPPngaLLPAJeY1p8fuMwNum31oWtMqPo5ys7L3D9odo9krHWhwzQDgYFpWYppTRD7pi",
  "key9": "3f2GbbaZFmyoH3EEfqYmGfcb5BYhg127HjiSMBvVKK7BgYb6XNz6GLNHRjsf1g1wTJ3sUawKcBNVao4UXhYLwpUA",
  "key10": "2LhQrqWbXGtsf1Ntn4voPjRukuTzf2uJ2QpYyzt6M3iJg88Hb5ahauQHmcvxLrSP6VoNkp1My2ms77vcBRXKTSM",
  "key11": "xead5cJUMcwpq1yFRsHAMYmhwkRuCwJ7t1ddJbf2MLkNuv8gLxPiXLZLjd4cQT95f385CywDRzximQcsuuhK3ZX",
  "key12": "2t9JrGXTVH9Js9n7CJ4DCeepZFs8RZp4mWiKiW1RuJaWQveDcXTwqHxJRGC55JdzKyWMgpov4GBXUSG94GrevLRg",
  "key13": "AbnLfkx5i4TCbBJRyhikC9GSduj5zYe2WuEj8RacgxZGPooq7uBDnx5GjunCFcA74CRqo2Ffn3m1JcuLHCqEMnq",
  "key14": "5rsjmGrNKfewJYrgsE2k2nPwnbHAF8ztesjazQoKf5mPzjkbMUzGcF5hnmqw2gyWHyvH8bis6UBKNBVbDcWXhU2L",
  "key15": "4jmzyyVeqbWNP1jumbAQLKTrZ5bZ5yn5PpF5mMeJXR8tykgToT7BDBUKwJKLJfG2KgBoFfQv2D8TULWj8fituGkf",
  "key16": "5AQZqyKk7pWHzzqksz1vB7AR4BiCFEUQ9xwffTXJ3aHC5AXxT9MeU9Y1MjpskbJQAFUSPi1Dt4BCgPxfudNAovja",
  "key17": "3xr8huv7aYuMgL3qaASbXFtpTBy1GqWDUsf9ePitsriis6sfZV2X2nbWNa1CXq65urxWPnhJeKQiM2Nwh1bK59b",
  "key18": "2a8qHE62JSU57D3aT2DsZuyAJDYvcs9RLuiq3Mot8dfLtGDF3L9913ukahk4mKpibzgajq8vrgL75HPw7azPPER2",
  "key19": "2cmDMpnMBYZDvMczzegKcYL3LZtvbHjcj1MSJ8rdVdnoAeQNi4U875gkY5uawQfNEj5NJ7FCXZmXRiReksheKQwL",
  "key20": "62PQAJanKpnovaN1BmWgyE1ffWdELHX34kqfuf8vmKx2CYUo46qygXbBbi9PdZV5GPHSi2BvzwXRLNsD9kDq9Z8o",
  "key21": "4ngB9amvyqukwfePBLbirwgips3RkUQyGeQorqMpYkagHdXWJC66QUkoKGPPpUsZCYeMaveXEqXCLs73vwFn5vG6",
  "key22": "3Dxm5T7EESXEyTqGQRTLzmioM9it9sUawfH6rKhDKRJ2W3K1pVD4N8EyhnQGTV4dHM1719R458NWWsvxELtczYJs",
  "key23": "3GkZ9WGWLfX64UK5xF8jFiim2Cm8y2u4kFAksy88ZriEufDvsLjLgKe39T1wwr9qqPeGkC9a7Qmm5d29h8xEuYNC",
  "key24": "5erv3UWEwup3mBAL6fk3aZSLZ2CiRb21tsRZJbHgFP8NznPx2iks57fPXNMsMoVsXUghHxR7pVGGrNBNzLD7e2Hm"
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
