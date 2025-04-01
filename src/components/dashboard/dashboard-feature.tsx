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
    "Bicu7wTPtEqMkbwbadL1PiCZuCBKVGwUhVVwCCHfXyFZRvzgJhRmso5Xp4qbhKpArE2YEq1fAySpVw95ZifQZ8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xoWUQqqbRT82pFmDy6eFCDhn9mSow5YGQf8SprYnqzi6hW66Gcb82whaJ4gH67JYAfvC6qiGGS6S6JgvDpJyAEQ",
  "key1": "2ta86nDok4vqCrLfkiqW8qFKYuNSMsYcjY4ojc4neHRX7rwsnUh5hAJGZR8iR6s1ndS9hne9wZ6hNrm8yK9q7u6Q",
  "key2": "2wEwmZ24YbsEpXaZu4FBoTzY2eaDoAkg5uPvPNZBZUMpp8vu7HYVdcEXzsngKaEdKgfs3WaKCvgUauWX5iRH7GPk",
  "key3": "2B2yH67WawEs6HcU2yKLfLm6bTa9KSLBewFK1fsRRWA24Bi3yHYAhHHCJPr2bvmAqDSMz8jRrefeFqe9YCpAbzh3",
  "key4": "5WJ3msnfC5BnmFXk1NKwPxrrwivqBPhhSYT3HinKmYeedhWoAUkQTZtpWhbfeATqx37sPv2ww1YN6p62yLH8LKH",
  "key5": "2smZRhNABWtmMKo3UGTmPxAqM4d9RiF7bnzPf4tGTcjKdbVmXnQpUDQw9hGrQ91kzEvLrF1uHnPkyQvgdMFoduUM",
  "key6": "4ToJctgckqishvLPd1gzzs7CZjJSeEGJ3RMpmpzZ3jqyqY5woRMukgfXqXsNzsbxtfBiWow9suaKWQUkYyg7ghjc",
  "key7": "2jBnMhtn9bfGtANBb9oJnbwpPmDaLcypr5G2ZgUAgoiB34KLiETPW6BFzFXbUDNq15TXeodn4Pd2dYyKCkbfcouA",
  "key8": "5Wfti23isZQ7cmmR3GbXAmRdmH3s9WBTf6kH1ZVYNL59SKEHYME1SUdXVL3RnC6UapJs1U9rQzb1RT9ps4gRkEpt",
  "key9": "5T4bsnSo5eL6U7ZRyymSFVuBvpVzbqciZ13ChMugupC9VFwMjnj8fQzG1DprcgTnSehgfoiSGMRpUpvHdcLMP3gr",
  "key10": "4FVtFgHNPoqrYE94esJN77gp4f8GPmi1vCsprv43uxTq8Kkb6E4ikJLKfx8WnM4MPJ86PzhkPRz9WYGmAEtvAzNK",
  "key11": "3JP6gxAxwExpuPRFn6sgG4Cuqx5L87UVMSQXFc2srMhn71azURGUK9zvtkQbmBcym3vnmbGv2mmwLfAZYPkmCovz",
  "key12": "2ndXkPgaQXSY8PppktCJASPk3ksnviadM3GiDu7FioJzKJLmcDDTpJVVwpGZMK79hMbyKKaT8mvFCYJcNQ9DaeYn",
  "key13": "2bFQt7fdLBkSCcruWV9yVNTeGavpqdsv5AibQ7tqpebJ9hijBJ5EVarsvrDD8eCxpS4DFYTEbPMNHJHksW6ZWukg",
  "key14": "3cL4nT5wi5bGKgRqHNC5UWTS4VhFCSseeGustsvwxx8uUE6tpsyh8yUrG1H3cusU3Q9Z3msSfw5RSS1LQTgT1qHn",
  "key15": "2XnhCRfSvFq82uSKqw4r9xUhWRWuEqRGkgtUcdHKd7V8VAZiNLS6Akwk6RhTtKPKoWby3EPVdb2Ru1mdm4WuXKwk",
  "key16": "5dJJN594jduZfXnuNPAxed2zumvaPe9yqhLrd6sJwXfFCTgG4dNPohiSmZZHKJe2BuxEFQfP5dsST3GUuLAgjPq8",
  "key17": "2DaVc8JW1BsYQhS6wYw17RNTcEDFsrJjCWP2F1qhBA9X89vPLd7wa83cCZhUbdMrEuzwKPt5nhno9SWAai2rmiAk",
  "key18": "5zyQVcVjk1Q2LVmZNdiXkR3wuoKf1XVEJDZzzWmgwg4AcQmhQKoxNKGUWAE9maxqRZ7HXt9sS8e5cmKuXsUqQ4s1",
  "key19": "3SE7TQ8fqCmXxGapVRFSuCS2AoRkDB1uUe7GiKdyYs5AsYvKkuBQghsiJwuHU5Lv7h62zVYS3rDwM5uoKV5tqpUN",
  "key20": "Zz7JsjeeAQwKscV1R6jsZHCgbiHjfNWX56iRYangfADLsQYDmD4eZw4bSFaiFL6t18QgfR7udKpDzPV66i5TCz1",
  "key21": "5FipL1apnu1i6DHM6UPcSxkVeqJWGPg6yz7H8y5Ke1nr1WbAGTA3PD4CNxdtuuFZzMLcnrSL77QAuqNLACdF6UnK",
  "key22": "2fX1H4gGd452t3yD5jmV9pUdTr9oGYKYGRD1SypAWavJPU1QNJMHDzRFrPQ5M4UvdxmkpLtFiaBfS9rfZvZUpPmq",
  "key23": "2zTFDciHB4sR6qY2PzrksxsM6cdQdyWVK8WrufB3SiEjpEz9pY8e54M5c2aQKLgcNsqubnKDv35L1wKjE7ndQ36j",
  "key24": "29HzEXE1Q412iDc9DmgUyW8jpXv4S7eWhzgi9btENbphXeSwQB3fyAMvGnFhiU9USfzPoTLUEzA6h8xFTcRAX2iN",
  "key25": "cjjQyekK5tennnQNQep462q99BLgYk639V3kqHXZWXtgptXn1kzXHiRzoAWLQAdbwuvd1ZztYuf4yq9WpzbgRip",
  "key26": "Mi9scNh9vNz8iZMvXCDWZa3ZKjGHhpUbCHjiaw4MGHqUWG6GFn9SjbfVsmDnuEBCL3bsJEtooNr5MwvRthZcU9i",
  "key27": "5SAX4YSY1KSVCAtc9VCizNYUVqkxf51u8zJVYhvx317rhGPEnYbLNJmWZjUQXgpcggcPSenw8uZn7zhiML1sabkh",
  "key28": "45AJybjEKHGR37uDR1hFSJaSBKRudMsGikDfgnVLjVhCF5eH48Jpdnu8gwcbagvVcGstEqAojUSV6uMK3bUNXjjM",
  "key29": "2vpRGLoeWZuYXVWPD9WQ4LU4gKcsa3uKfzNiSkyZgjW61pHMfA3fYHCVjU2FkdMp41dk5JiaZo51a3ksQZ5QUNED",
  "key30": "5U6jC6qNLaRf8jG58EDazWTznDnQVyKom2QeCuiWViPcg7tfr9L33Z23P6n9hAT4AUaiiV4ZAj5KV6gAdvRP7LgZ",
  "key31": "41EYvjSZZrE1MPgdYM5Cmt5NW6aQYYMVqkc7XhxYjaMMwjUajmFRQE1mMhqWyAJP55XeYXzkjdFjK482NnMi8A5G",
  "key32": "5abhJ6Un48pYjW5SGyRVwQ25xL8EZenxPiPa3iA39pJkAaAvpdibFVssTSMJcAgdsEJ9zAiXgyoBJp2wAweUMJWL",
  "key33": "56gZ1qGDb2cmxo9kYLoXHhocruFQCarPwMSVnbNwxLYcczRdDtKrjEmZujixkRSr26i9BMNnKV4HkU2DTE9faCq2",
  "key34": "4274iRoBmd2czwPcBgpEA6FcdLRenrMRMXv2UDo6p1mcmcun3Lqq169jwKrs66rza6D414ydBFMWVJrsrme2Q1KZ",
  "key35": "34DGkKoZLpeiikvxCWj7XtYSJAvTHphL4k2kGw34zE1YBL2PXmr51UhyY6BsrzBvHwvmFdR8JHaAVDxKNYRZLrT2",
  "key36": "3SuQN8v2EDmG2YEtPLtsdi89FDEP9tTDmSRi8e4ecwAtqnPbXd9Vqv2iAnKsxBRRYWu7uktPJ3h7tdjfLxfTYnYo",
  "key37": "4Yb4cKqzN6VtydW9P5kBYQTGAtZzzMTGYZ9LkQxCtY9EjBngynjRahUhGPyVSmDQoG9WmUcMXdurirWukfpKJW8M",
  "key38": "2TEKX65q6FfvqMDzV6cDgxX8THjJp41FYJAWiNq64Lw6P8PE7MajAtmgDDFUSEra2ck3q2pDGLsG1ZW1fhFKCa9s",
  "key39": "4zibyRacz6qHW9QYSyy4xL6is7yetNy2beRueqUhuUXhqhhqF3yTsfz11y5bS1Nsnqai6WMRcMkGLfkmby2ar1Ad",
  "key40": "4fAFogbHaBHhnK7e2jsftHmrNTYeqz2wsp5Zwz1p1e5tsrN9UarMpKRVKyjMdkDJbUrCVU45KziSHeucgQo4Tno",
  "key41": "5wW89QoamvpCrWupx8YgMsaSXffTW9sUPmcT4w8JwC1erRgJKQsLdo1mMcRJTFUMt8A7vv2LxhbptJJWbCSExYnc",
  "key42": "5eJUf4WNAnwBbwfShGtNGeEnVqE3GVkirUumJgryQK4kaCtgMaannQ5w7DzCGX178kHJEcznZaD3CoWEB1UPUhKM",
  "key43": "27AS3SsywB9oDzStC2Kc9NjcXpnemBVgFqCAXKmSei6v1FdGhfe5EoyY8pCx7N19c1JRF9fBvdq5aQicLE8dGEGA",
  "key44": "3x3ThJqHLPEG4HfaQYQzVckB1LW8yubP2HbppSpY5pFzjCrby9ebbk49REubVu9482BMe6p2NKoxrwsmST12AVuX",
  "key45": "2DJiEeDhK7G7Kb2gN9SEgj7ghjMeKVvJCL5dYXTKKJk1kvo4HfAbJxi3oy6n3yVRtjPww8hgj2ZtXjE9Z33oVE3X",
  "key46": "jm9S2kocVbAPVK8hSEtts6Bmybmjzah8Q7LB2kRga4guGassLo8dWYFcUFjcdUZa4rmi5WVj3QLe6WCrMnRRDrn"
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
