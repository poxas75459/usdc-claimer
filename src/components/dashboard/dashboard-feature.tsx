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
    "2Sb57TS1kYbs23cgqzPokfva8SQHqcLD8mYeQdDUJ4sDK3GR2tpmBnp4LP9qJVe4KpSFP152rUWDfDcUsJfJf3vL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hn1GMALkzPreP66aFju2uDK9yt2m8fLL3FUycoXy4amoCHEyjVLX7k5f9pGX9KUjZkvEQfSZw66bgdvbvJAtnhJ",
  "key1": "3Ui4XjdvDqeBt7DporTgEpL5aNJWtmdE3st5sfYkHZV4WAUn7q9MUe76CgcS7ijEfXSgGMwfUceQaVj46FYMkMSj",
  "key2": "YeirB2ojMezQNxdmCsH3nsJ7Dg8AKhZxJvYD4Jeyte4LfUeT6SszCJwoM6S9suicWaWnhboWwSA697kqCeby2M3",
  "key3": "2jU2Z3dGHCQf6vbP31p22Ygh8BiUpzH4RKz27LifHansQtc5maxMkoJPJ4yNPHUYG5Sdb5HNzD88Md6MckHXaQ4c",
  "key4": "2PyxG87JogHTahUpJBzUmoemDqMk9b9PczpL4ChuzRPx4uu1WiTaMbZt5QQzWJF1UU3LxtUgxb3LdS6Z5rXvzQF6",
  "key5": "2jQ78XkgPAxBm4tbamHTLCYANUqAgD1a8PRmS4vVmrQnjWZNgwNifEJqWBUCvrinCbWc2T93dTGr1wkzspTKQ9DZ",
  "key6": "2DdytCUvJHMf6cuePWs2yTHMrzx7YKQbrupj7UEVxdYVKnJHmxcCM2K3JNCmuu1qyS8Lz36SwfSvDdvBcd2aCgVa",
  "key7": "3xt8XCagWbBzW6Rxzp9piyHUy6PoxcFsE7HmvdnjVAzGKST5FCwxfbPpeeFe96uZeJjoJc9zyCbrsDWt4fYCarb2",
  "key8": "47JyeRmcUwp7rsR7hTcanTDN1oVYWSTLe6uHBwocbQF9JB1JPHXZf9k2ph7BPXrVbbc9ofKcUj7y9vdAuEPjFsLg",
  "key9": "5FXJ2FCYKv8hRiXu9TeWkJKWHZYFJvuRuMWTdLV7itrAeNmwz8nn9crxT3dukYKy85npU8pq4FhQUKeTgqTcy5JJ",
  "key10": "3fcHAnKkLGPheFA5gnWfn5iSqjpQUvBgE84VfKRhNRqHHxwnRf17UgD4aQzjN5XfBVmngipJ12TBN688L3ouRa7w",
  "key11": "43npF8yk6Y111SbhcqLNLddSvnemNrAU7uP4NYy5XHBF4KvkFVDdH5s9iRsBZeoxxmaNUkVTMMqShZDnwmDrwFPQ",
  "key12": "5Gs3jDFJ5pd4LGDMq8kk1CpZNyrm8ZkqSHeEiiwhpwbhEXUxyNkG7fA73nAGMAv7ReFE99hn8VpVDkNoHCCRCfNh",
  "key13": "5tdGsN4kqfLwecwLYBU5QFngsry5H33P5ZNacmELVjJHeJZrYYqWK2UTVpJo4dGRpTpqsB9hbgpovihnUA5DNnRP",
  "key14": "3jkn7BB8N74xBjpovbyUgv3MsnwEq9FRWf5196DWKtdbyuwrQMm998QP1TkvSuDhcPfEu1YAMWPahYXJomP7cRmM",
  "key15": "2jVF1cMcFD9Yh35fPg7k4GR5gPZqRxUCArZmxKEXPPZU4KKAcTjBM6bnRo8nrtKo1dtaqpptrF5BUETBLSDAcGDy",
  "key16": "tLzMQMzYcYsTGKujwK5Kjq9Pa6Ef1u7o6vhCHsi4QHPZ6CxojCGG6H2Dkw2MfepWrZmfSx3ZEkb9daQLLB6Esqu",
  "key17": "25F3sZENfmtCMT3FNm3yGpG3ukAv81JwWAR7fwE39c5RG9ZVoLyA4JYNBwBMuv37PYPG2Trbg8jgSXMZJmf16m6J",
  "key18": "5teTTCYzr2PZTwkFUmcSh3F591D3Ho2eE4t6PkGmR4sFiLnEiHEV3dPP6WDjSCYujFYYetUTB4nirjXT45qtqxR8",
  "key19": "QkeVKrShpwNz1GGhFtCqCfGwMmNAj9w9xDMfwj5E426shjp1yZtDwdkr7j9NgN4kDr9xSP3D1C89vevve32mpjn",
  "key20": "ZLcX47NyXh1cq4BxndgdHCj56M5ssEBGB6XXDZ6o1rpLXpqXV9S85h6cABNMhGENrXsYmwoC2nxTDXQFHtjF6yW",
  "key21": "NggzMxUa6KVepVhT67EYazn58AU6hpJjYHBWee9q9tQwj4yhgt3kFZ1v1GSA7zU1p6KNPYwcJVcYFPZz2sdKzVk",
  "key22": "2nTnHmCD5mqbfP7BgS9XvM3JquDhJNmGVM1a13D2WWnaFN7kdEWrkZJcfK4yRAY84drBT4XKurTbNBHby4TGwAsi",
  "key23": "PKjvwu8G5YnzKv4zX2uxoawM9CwuSdHyampuCuoi8w3YoD87BvqcurhLuavYf9HcuKTig5qDmCET8gMFBJdcCja",
  "key24": "64cJBqKqZQ4zUomrKemGTF8HZFFH75RZCNhHLak7pRrFXrd2nqXYZ4DLGRJsTSavjym8sdGB3mWiSR7ZAz5yAhYY",
  "key25": "5Gf1CDek7ExyooCAsWhNoMUSpKnwupHBS3uhvCn3D5syVYcN1wg81Xg3uZnc7DAkSviHE45tEGni3J2ZqppBgWRp",
  "key26": "2P5qBuF42jJgb1T2WACbapRkT7DdiW44fRRUNnBpbMaB5YjpdtD2MoZTjNqsVwJCdttqQ63nZVVaVheBjcNgcRKA",
  "key27": "2et5VsGo5F94o4RziruQEuWuVq2TGVz6xcoRf9BWxoHZTQwLXrzH77kAfsr1TyP4gZM4WeiomA6a3T1MmCKjdcEd",
  "key28": "HKFaV36JRW1FPtTHPb2WxwA2ghqCp4SxVyChXPvjFWjbq2Tpyib4wFAm1ms46pytGoFcGuYqeUbihNS959AxoA7",
  "key29": "4vrvWAB1VHozoutTSLQS3m7fP2JCCgVTrbghBQhjk9CGj5Kw1i29Zu41mZVExKmCgnt5te8MpTvDEg4A2uMGXiU4"
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
