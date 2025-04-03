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
    "66ri8Lwc3KaiZbR7LAu8RgHmfAA3Z47D9bXLgWkGJgQQci9yuAD4Z5jirmNkLyjDg9ngGEVRPx2AEasF2VzvmaWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qxAcGYEMjRc5w9i9caBg78iCGwrfHGg77RueSPKGBTMdsA9mfpjbKcz9KJAgeh1bMCnUiUodys1Y7BpPAjKrFfC",
  "key1": "42V9fLmjZ2qL3NBdjAFhWhvreP6RG3DvrWBpVJSC6FD6JoYyvJ7V4kJQUWvh9PpUfsWL4ivEHRLkECzbiFwMsjNe",
  "key2": "3zhj19TPpzfhBmkDKqoYgibvQpw1ruH24ApxZAvwiWUMrzXVM4c37U8X2YrxFNu2iQdGiwHUNEyxiJ1gmFuaUEEq",
  "key3": "3RMvAxoSuNvprf5fnX9WkjnyH25m6TjFujdAqAk5JW2mfysvBffxSRrKWzKVgTKPovacw41jYsbduBHeU1DxD2LF",
  "key4": "268ydzmzDYYEgoWuJVtbHAcaVefErvcQR8qj3FAULZuMaR3rmFx3a4iLRgzj1Gnr1mVGz9rk5hLcgz1fUf4bq9PB",
  "key5": "2aRco6Au2FXLKybbMfMMzgUtWkXSW35jUwrrqxisjaaYQF3e8ChtLs9JwoJnx4Fkf5hCsjZgy8Co5729MDVjKTB7",
  "key6": "3irLyBYetB81K1miXZyfBAf6VGp34qmjvw6sdUhcgrEvj1q4gSbuAmbui2PNYdGMY9e63U4hhtRkXYzsDsF1SECR",
  "key7": "57Bt71fczVLSaeZ5cvhwvAe7ByF8UA8ficGMP5TVN7rTBQVGVk7DHykKVazoRUR61ZumujQR1wTMhPVoy3x2SDu6",
  "key8": "2or7g7H5c9sv2riupZhrwXVcdU1KuwGVAxoprj41khAWqRbWKgRfcoXP63bCoNDT4EoEoqyXRvp85N6tdvUXfhg",
  "key9": "Uz9twohKhA2aFNhj8CYvi259F82DVB1Rqsc47tWjCoTEDdfT9inZZVVHLWz1Xyb6AbbDMYFHim8dfeJxJui4W5n",
  "key10": "2RoWeW5cnihzh8Cam8HayJX5vCRD8Rfdj43pGo4wH8sBqreZqnjsSPhHALc6mSneuD8vAdMxXSXx5QPi1B8Z66Km",
  "key11": "3GBZMCR8yM8c5bgBMxAS9RxRqj9uh3oUZdqmPuyMZJKtd4WLxGiPqDDijAQkhgtrWkJPaQZc7Bc2p1TomdgdSfmg",
  "key12": "4DsFtUfDBprRGaLExabR23vgP2869FFasdsoG3ikisAqcBFRRcmF7eacnoKSGaPsApVMFVNMjy43F1ZQwvBb88z2",
  "key13": "4KKUHKe6t2xGHeZveT7EUZPqZznDr5YcPxjz4Vw5eS42GzbCQ4w3w4orygQahJWwfpVKrQZKfEuDoAnHsy9rjBQZ",
  "key14": "53He1oCJkav4RdzfJkUc5wSqLJkEaFYGo2n8DQGwyWtn2dESmt9YkqoazUn4nznJhVAJkWXQkV5bPmxSe6kjxzke",
  "key15": "VNXx4z3255d3P9nPuWPFV8comjAzEEhNiu2LR5yWHhAM4S5FrbZrmFwoo4h6m8pirAp4xiCngdrcq3fuzzeyGJs",
  "key16": "2MPMF15gtctZ8CWWU9NtKcp2vXtn94MTA1CEQV3zetfcPKWGyoL5f8iAWP2uvXVD5LGryNScgKtZapG8KYpryk5D",
  "key17": "MS1suw5prEoUMYdqjYPdSsEnZA7rh5spg8kGKXqhYsGU5Z5P4NyDyc7LZSKnCYgmtLgBxb8nkd8xmBKquCPnKcp",
  "key18": "44ozEU6s2hkhq1RewQEizjy46VVWZSCSFbkn85dzHZmNBDdh5ADD8scRiwzikirnRVXAunqW7VsaSAGxeQdEgJD2",
  "key19": "4xvhNGsCXdavSea7sGyDhFgG28YGgAwdv5ifvms1VHtyXK4CN8fnWjiEJXBfyCDMZK33DrAkNF8JkaeaEmqNtVNn",
  "key20": "3Xnp7HRtn8KpMo6i4SffSi4cRp4BaYgWHZymuhxtTAwjzvfAtSrgY5sfthnRaBFFBKQBuZ369vPHYDWu4t8nxkQG",
  "key21": "3wKoixutTUkFfzSfjcPBzpx3VYALGf7CPXvZSHR9iV3aUZgBBDEH5BdQPsXsDJTRHbjVuWC2baRWaxd57dPUh3Hp",
  "key22": "338HXAdHCrEUL5aFPrc6ivqkvbyj5dYZByMW3q4SR9aovszjh8YgWbS86BXfikXMZwyFBfyFXXPTEKU6hBZPUwJB",
  "key23": "24E4XcJRMkxRwcbSZL8NmuAsBgMQk35CCkA4hQbUrQqfNW7umQKBFyzvmfdpH2f6ffJtXsEB6pBQsF4G7votojuk",
  "key24": "5PzRucSDkra37co5pJpRWbJvSeHXr33nLZxL7rLUgDt9iv3mp16dZMH2orgW57jzewp8j7zab7P4gpB4JACY18Ki",
  "key25": "61BMYsLjyaWx4f1nNw9Dij4tc9wjjQF7NGTNDCUXJ9HkCawL3LWYLr3bfqLZj69k1ZsMZ73mB3vrJy4MYaCrRNio",
  "key26": "ggbGf1VWRzaCnx8Yg6bmotFab9xJgvuVngLWoxmGh8cCQMJjiTCX3veGFDCh4nfEXdPaQnwmQn4fkitiVKMoNno",
  "key27": "vjh5fAWUmETBvyftwzuW1XTA9t5RnPk55uvW3qFtVmqJ22ieo9mhGSbnfLEKr2aJA2xXkAdMDZSod4WNq6VEHuT",
  "key28": "bghJag267ohP8Xd4aVzT2dBUj2p3RFBpLrDsfeZzHPsJgtYn7M5XNpcv56oAF6x7tUymBVhfS2hdpwWHfWq39en",
  "key29": "3MRLoZZihgULcjDDbokkkgaDewS5yhGQBvJeaTcKFSkpXsDsARcjMmV6Js1r2Y2kXodvryZGGB7ux9LmMgFmuek7",
  "key30": "26Ad2nwbxmixPxHGdmJLUAjuqFMU5csB4C37YP7GLHESSg9fg7a3u4QJ7but2GEfepeHwAHCd3UXZZWmvsbg16r6",
  "key31": "41oxsmxxuQFqqsKTaht76navYbq77emZ5e1YNnHWwrB211t4vZYqW7za91tmToXQyYM5t3L82Z1prdAP4vUnTKx1",
  "key32": "yPPEnjwmkea3n1uh2TM2782yAR5P7V2db6nWTPGVMhRdLvtjQSWN93UQp6KY5V9xKDc2HVnuVkuA4NQyqwUbYJ8"
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
