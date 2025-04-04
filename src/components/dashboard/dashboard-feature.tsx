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
    "2HgXu3GpueXgAgWcgzN1wijnzngNyY5cnDeeMGmuhe6eAe6yHfDpUG9EPeqDfd8g1PybSg7DBTrWzsH6dwBJDsvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221uv7yPvZBo1qCV2fXSqiHfpJJUfLnRVSdU9GqqpWMthr9jMiyMszfG78pYf6z5Af27sJoutL6USDUrFRHQ93t8",
  "key1": "3Tzjtgjt7sjr4X3sAzG3SP4naF1n7YBRiHt1QANBvNivPpxpQfd7qocGkmT6wqevdes6Eyn5FRZUVkZfCNLFuDwv",
  "key2": "3LtKM7qPWyzCynRTney5krJ2mrYC8urXxk2qk9KGCwpfiLhmK5nemua2cwPaf2EyknmJHA227vfob372y6KHEYdD",
  "key3": "5YYrB2mDKJWyMo3Ta8ykg4ckz5WEv2RbRkJsYmGnXquCZcbAwwGn1eEBLHM1zBdGM6MSA9N9KuFH1tBEbCTHTkhc",
  "key4": "2HF6wTn8BksPpziELMDFTXyJq1aJYf7Yi1jEpJ26Ui9py4NQjcDcrkj81DmshkgyjUGDWCpCcT4x3ciXuCUgrpX5",
  "key5": "3ucMZKS2GZ5j8TjHGipChj6wCo5NdCgNQx5ZG92TVH7TaVBdpGJY5oM1JuDnB1DscekGCs1MQHYFMHowYLifXdgr",
  "key6": "264ay9qBy61NAHaHiwSv1yEHWLsYpPaN4ZjsCtnAXVJycth3E1MBV7jjbwptMKNJkUkkDr4YrvR4ikKusyr8jh4k",
  "key7": "5UCNSis4Sd35waGfzktGUVr6sP6WkdPvYvYeioEThpshMBNb1GgZ5iPh4suT7bda2XP8xPH9jaHBkV6copftvNAk",
  "key8": "5NmkKo1hhZCna2FDZjL34b9KoUG6D9ZMVQjgbwtfgSNDPwQTURT1mxHjMempG58wDtn8jiV4TqyCGQR1HMiKpRkx",
  "key9": "5B1rJLjoCwubX5gxsXKz6a4YnJU8zjN1PiYFkckkLAo9UmnKMPWwGHKwwiXJp6kFpHgHgnt5aBRwQ8DMvkYwyJpX",
  "key10": "zYTTcUcaU3RhZZQnRzMtSpQYNUUvPYFLxwHrN83enKhrT9QK3M8ANRB1qir6SMhd1NBupCbkJJH6RffJVgUQGp6",
  "key11": "55vjrmpoVt8GDYKV58zDnJ6znmo1eKkM3FGW6ugHfXPQAzoSoyxuzLEX8MGmXNCCW6t43EwzN4WoBnpjw5hCqd9h",
  "key12": "2MRJ9JzuoMk1KtHWgHJEbbeS8gckrxLYaUyq4sMbHP9S2KfhezKxiNXgYGXFdTEz72tfVasU4koRUXHWb2CtnEGz",
  "key13": "3D7SNAwSFYQqZScisiNCiCP9CN5hwre7rwAhW6mtWYMecgVXfe2ygpmPTxqmjZx7sSCXtoSfu1AZzsZKRUPndAcK",
  "key14": "2WGDthMExKw3iHXFnqegeEdWmjLAcJchdChgKx5h85NLE2ftLcTe7sNjsucbtvwPUUMaRXyPtDgcqjYFHsq4qRi9",
  "key15": "4toY1VDtMEVofqPvmYw2DWkGnAijmDdU2mTH5iEM79ryUpM1CqytW4JudJfRHfiVJPouD8HsgkZ1snn6u1jUZ8do",
  "key16": "3Q6rt7c3nN1psSEk5xpMgDFyqXWoLkufGwA1kKuQ6RfNEGwYtJ17zReZ3416yhF7akkvPWyM9pVv36hsJPeWqKC5",
  "key17": "eV2q4QWXKmXi1CQdvvTrVSSq9xtdX7V3Nkrx955T9rwKVCmcWmNCwefFpCi4LEfRme82B9EhH1C1rAqzu8fLhBY",
  "key18": "5jjNtuRvHVrFGdUQtm45oQ5ZwLcsn7dtE5T8xdQNPDSGt89TWZ5mMnFbE4vgPFHj8H4Z1WNyrQRzAYcicbANiRP",
  "key19": "3MR5RULDDzUSafVDrekYzjARUm6hMYvfqYPsDACWDFiL6NhBd7spENdrc1MG6JVAzoDkU3G4KXCgkMC1MR3UmZwv",
  "key20": "2unFM44SNqcYDyHESu8AK9gyh8bQTipVDjS26TDaGovJLcetfyhYK5ao9qrx9Wo3EcnHKtT6BM3CAxNXc1miqY1r",
  "key21": "5kaV6koAkoWaQMGxJgTSK65YXqLaaKqtpSHTRnTC3VPRWoKDnVgDm2SwwUcMFcm4bUab2NSCQk2cwD9MUBA5FmTG",
  "key22": "3KUAY2u9xTCqCtaikEK4SK786mVDzaB4hNuP27m1u8LZbrj57bJkrcjQXb2P4tLqL86FxbWVYEyA8uM6vm137iu3",
  "key23": "3RbwpMn5kkukqCLqNfKi6DScESVxDZov3sumryiZRqEzXVKygDwcTqPLNFZW9nRUXQCmCGeHVSNAia4GB2tRtERK",
  "key24": "5QZWhTLA17Fov1S2SsCt679tf3QzQGiJtyNnbZnDK2yAN8KNWyD4hn52SUNih348St9BYxr2H6kfJpKK6ndCj3dP",
  "key25": "63vMLEPcaCJdMzaALrnoZ3ogWpxJX4pUhnLL3sgUpTFd2VrHhEx19fCC3WDyqXhVt4AAfePp4iDtBVjjGWFMgvjH",
  "key26": "2uZn6A7vdJx9QknQ4YzW8zKBr3MBMYSwoAM9wPbL5y5HxE7K9ZTunkaUVD3CWfiKJq1Q7HK67E9rV7gmnXbjUeqj",
  "key27": "3M47tieV657gdS8HBgxTqVVSnuZwg2wNdEc2YmU6LsXkBWx5PDbJsG8c1UsZBjPi3kZ2MVDboALd19XktB3yq742",
  "key28": "2ibwJDfi9gUG91wQoJtE2kMXihKjSc8netsrj8S3g9xJQHogZmWine3XJ5vEQLg9EcAUFbUA9mC3wGWvb6GugiBs",
  "key29": "3xBKb9iqDt2ibSfXyHouuxTTKSB38Vx5VEMTv5L3orNTLxyCJjh6BMvkLFmaccSvmMWMvCMT64SWYYvUio3xiNBy",
  "key30": "iPEv3bcZmmNenQqyg4evDpcxTpmZusm8NRAZsQXvw2umahLhbgdHRW9q3tAG8VPi4p9qqgf9xw96u3BbEXR63fB",
  "key31": "3ikUDchsBAUjJib9jaSsDtBqcyZMW8Fxops8aWVc9X5nwansGwwRcVW1tYKSoWKqsNntJiTFmUY42YxoKtRuDy7M"
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
