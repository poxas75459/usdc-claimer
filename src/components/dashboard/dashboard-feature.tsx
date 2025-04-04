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
    "5sbKoQfCAByBMGzJWgfnchTkfY5LzZS6bZhbhn8X3XAd2bLW9Ay84k7YHSpBECc5j28R6A73okuvNrPo8ZEYs4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t5LZf9dRWt5RMasN3oTKohV5TcQJt6jRYTjR19F7H998yVZ7TLYBWf2t9SzRQCTTpsfgKVFXvMvxGPNX3GuEtaV",
  "key1": "3e3j39iiSycQsBjuxSwq33J7a5FRfFhDy3DMMMptgKfuQ574cg86RgRhXjanGkqMuP9V1nVcvr9T8MEWicSK2orX",
  "key2": "mk7izue16JFy7HoDZusLHnHjUVkwoqGkb3ECNYuzRGwB2r1uvxVjeMyKVSDpmBNifNE5nSe1uCz247MQRwA3ZYy",
  "key3": "4k3qx7XLvhUX631xBBU6TBmbd5r4Vin1LX74WZzMq7LXv59NoLG9mMECBgHL91DWvzknyrUpubgzc9bfSb7BAjsj",
  "key4": "437qcJURj6PZxAtFg7iPCZCziec3NT9a6ehg4Z7csSGGgS1BkgKuSQwBwovFxFGnm5qzKfWng5NGvUzJnMSEvhht",
  "key5": "3qV2wHKutYXGQnbDMuXFETT3wWRxPen89WCprS8JQgVNUSvhoecvS2ucEySXFaqgHa5wkr1bwjbJ5t7FX5dmA9q1",
  "key6": "3D4qwHeWWG7E2wWe8T1FieckBdUQnS8qYfspf5nahYQgmdfy9yECKPmcchDgGJACsNEHByk6KvZdXoiQ92xesUkS",
  "key7": "38AZnQpanhrfq184LrMtCjKp78HtK362EsmNHV8FrSkGAcmm8QNkL1H3uWUUs4qrbyXPUBi6zU973S9aYQSYXVue",
  "key8": "yWKF3ojbkx5EmKsaqk1J5EinCgKCEvymm2wmzdE55DxyjA9vjpCyT9UMvifN8vrQ4AHwmPDFhnAJALaBjjurDQy",
  "key9": "2gY7MfBu3GNo4WWzKhFgmKDKh7R1xzUHBardv2VAJaUATGDC3o8UiT8gF45d5DLazgRGdi1Vo51sLbrJo5LzLJTz",
  "key10": "47Qmno8nDK2XEghbpE8fNETDNA4cGiavhyKS4Pig2w4KX4vuochh6QuYootCoabQKCA8kA3CDxBQEpfwkCwhSAr",
  "key11": "4TRiJtzXDE3vENskvK6eQJY1VBqx4mGfG4ZoxVKhNtumeqbb9kTTf7ok1iZ9wUy6ouq9o5bWMh7LuXw5AtdrrXdE",
  "key12": "6hDC7VJU52RWa2s5cWXUz7nTngkz7JjRDbzg6UpxyB9JAuLqHxWNboj3wUGiAtabDHzGVHkXUbLaY95TntZFkyE",
  "key13": "5xGhcor4ETYhhyf6idK7E7qzqf2nEBqEomVNynfn6vo3zSogdFqkJab7pAuM4ordHQzQ5UiKaQv2Seam1f4ggPw7",
  "key14": "4tzCH7SdqWByhWpGpwsWDK1XEioj4NPpW9Y1FHoi4z1u9cKnNRJGFdkzyFC3o6n2BuTYYQ8UY2egFJFb9Tyy3Bs2",
  "key15": "2xsCG4AoxYvVCPRFya3knRT6YkhZyTsivPMVrqJ7vxdBh5xhhQmrgX59V3odjW5jwrUuK8meXS83SZ6Giy8F7y7e",
  "key16": "3VTRQRVPH1TUDP2BjdQ87QQJ7ckSi6WGyokDVvMaotDdCEzZMrRFqwFLGv5XmCC5F3TjGm3WCb6N8aNg675tY9h",
  "key17": "3RaRRZ8f1FmqaWLqLn54tkS1GeA19PZuBWTNKoPwdi1tZ3a2mrVeQfAM1Wawu7FcxSU9eSrZ8vYY6eB73oTCmvaa",
  "key18": "4u2jsHyYzQqsxYNH6K4t2nXckovozHXDFrixKE9en4WghcyTWqiXfomLtnvttvxyLegw4jUcRrnVEMK942Bo3wCy",
  "key19": "61pCKKmPoXsS3D1iAaLxXArdxXhcBkYa5FdEPrWmyosWThF92NnfFrNvGJ8ZQfi71QqdSpQnywJKcy4kcYG6ML43",
  "key20": "4uf5tK9kKf4N5JrRVVcqkFkr7iyoYyGL2a7rfazBMHqXgLRUma2KGxAevaqWkseQqCXv7dvTdTggCnGHcp4QRyb1",
  "key21": "3t7cpLkJKkijQN6xbxhyk5xhExWGXLuJZGC7gdTh9R7CxQvkxfPMo7NBXQ843bvTYJtWg7EWTMQsig6c7Ya1ZgF3",
  "key22": "vdgGSEvHqhTMYytXb3edyVPGNmJv5xd2cLHcNDe1ywYb2jFXDSJmyEr9doa3qk81VAfxhqGu898JTa7Z5ynrz3m",
  "key23": "3v1XYZjrBwkWju36PwTfdH3BhjAW9ZMM9ZQaKnwMD9Lr42bTYxzjZ1Kz7HTWmWwacEdSmH1qFu36zu4MBRvMucYs",
  "key24": "4fSCeGqfT3UbVb6ZhSkyQyBR48owGW6ny36ggxL7M2ZhVHhUmEfM5dj2zLBeSD6RHRQjyoeiZwgjemijjKUSJZAE",
  "key25": "2eK7J5BJHdskXizZ8a1eDuTKqMeUpazduCfL6zrYNxzoPBVcDy3SMNSGTVNU5NhD6smbfUYJa7x7SWyPX7wgYsY7",
  "key26": "3yXE8rs6VL5LC18591Td53jcEJ3pi8Wno5ausWDQWCMS9CifhQewKPihkSp2YUSyC94AHPPXxDCUaJEj75pCna6z",
  "key27": "4d3EYiL6ktx9yB4aw2zsqUALsePDFh87Hr218MZU8GtT2CUQWVGTSLj35TDFBf8skJVjypUCB6jm13gAzYw1TvMr",
  "key28": "4DkbcFQULTLjsj8u8q2KhoPxDXJQyoS6jNrgn5TMC1WykAjURKsA3UhCr8vzWqR5LPBio2A9cz7PCjUwX7YcggxX",
  "key29": "X7WUb2ayg89NJ1FK7sddejk2KtWTd3SeSCuhdU2DdP6DdWkEsMcutiE9hu3xGSkAT6xmcHbtHkDvBpTtEh2C1RG",
  "key30": "24BfwixsyM2sFi41rwQn8mMVMADcZk9w3dzSx3Py6NnypGqVv7GaBfmYo1AUEmvawzg88s8hX88rbC8vjx4U5TTA",
  "key31": "JnZk4nWTHTGWqkVtT4m6awdEHn5HKEQbf2kDqnfE9di5F6d18PHuSzFFdrGYoJx2r23FiGpZ1qDcN8KP8YkFt84",
  "key32": "615GwjWUxFcEDQnfPXaS5t3uRxZCFRtPGxdo9vB2ZKUhkVFFRCfWDTq4gwa4PFJAgRCidW3FQrhGS5ux4uzmVFd7",
  "key33": "5aRmqeCv2aAGru88DZhGMWepxP1Q65nGvVeJrrWDerwK4f7HFBzwDtsCGEYTmgvdQ43bbUKZtXns6ZMkp7eXkSdZ",
  "key34": "5yyTHh2BM1MZEAtoAjfoj9ZvosGh1rmXkanSyVyZu1QYhS65C2oymZ2jozUGGTpJN2aFS1fADdXQBwXzXxiaugKF",
  "key35": "3D5QwQajQfUkS8SPDFiM1WDqTciPxofJThBEK7gqJG3EUKxrG1n5rGy6wG8kgEs7Psp7NdtogykP2WksTtRAmMse",
  "key36": "4ChF3LTpuXu7c7Gii5EQ3wXTPhfrmgTJUzpbRdpmZdDmUeK22u4Vm4ZB6rKk3t8RqRmW7A4xmW6tSgdtxDdQtD81",
  "key37": "2MEUbvzBZbyawBLbyuDuG3s5fujzpbMMCMGY9yy97aCo2SyCcPTp2AJHPP7mTnctUABkqBEZQGthXx7mx1jrsq3Z",
  "key38": "52KsTCBDuFmtGXacD2nALu7HfzjHxnby5EYMg8YwGDRvMoQSkprdSPDFeNPe8spcJkWCq1ya1pctr35NqUun8aDk",
  "key39": "fN5vBASyQibaBCfGxjA3V7NDU4Ya4gQfyaW4qYcFASNcAmKhsmyhtSu5h1vvjj6Fs8jSM3dPHcw75U6hgZuv1pz",
  "key40": "44K8saPEA7umvJNjrLbPd4qL1yfTjvYWTjTtscNoXCHvzeExoZq8UeWskn97G3cLsLYbKGXxk7tuV2xAS5mFLe1H"
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
