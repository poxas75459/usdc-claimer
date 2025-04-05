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
    "3c83ecCPsxYdR6voKQFiLw24mTwz5FeWoeHqV4ZNu9LqVqm68xE3UXMtgDinsa2Xy3FRqEAW8GQo57MrKRJXnmE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcueFuLhzyKqHQWE9uXgGzZL86ocLuHfw9neppqT1VYzAgXxSj993f8PULj8Yc8tKCp3TeK9bKeBCXfjdfKAK6b",
  "key1": "5TjwaBchvQSsLxtDuAyATQyvZUhSciPz99JsTAfoGvxv43dqd5hRFZws511e5iXP88ZFJ5zp1dd1NkBbTZzZ6QLa",
  "key2": "4Jj1imwCfbfuaNSDPGtLBSdVoHrbi9NGPeMHZfTkBeMiyrDhcvPqzSoy8cJ8TZV1D8ri4sNHTtkXa6YWGxqc4Eyd",
  "key3": "4QiBi7xBqowad9jwAqKQVL4eUzNZtUSS2jH6W1Xnt7z8gisdwj3UgX3Ry8hAW4dHuagHU5kpEh1GEWTnnmepaZj8",
  "key4": "3HZAjnKU4mo3KhZmh3ivfminqofZZsgFgNkVEjYd3JcUS1ZyS5C3CKchRDCtjwpCsUfBYgr6bMcdcuCR5K4ByArK",
  "key5": "55HV1xZLGTiAT6MowDQmsJToqfkxygpoyMcw1NUi5pungUXeJQQ9jFmWsfrU4WEshVRXi57huiy7SrsqSjb8xPLd",
  "key6": "4Whnw9NR6HYwjMQPBSAvUZoWbgfDF572sz5TX4qwYA76oM5ooc2RH3ENz1Zb52JPLwBGuQ5ged6CaJrsfufKwFwe",
  "key7": "KsqrnCybZpi1ofkQjMZzXY3KKvQRXBMHgWWU6MTgLwYoy4pMGCTNwE96ZyiMoZLMYtuF69vmnK8cHt9z94nEEJb",
  "key8": "VZqha5x8TMwuAfkjxvmM6RVfrfpeFoYpVSgTpZSkevqomALPFUCCUmN3yR2D6vAJpD3taf1nykrsxzrvG9QHHds",
  "key9": "5sK6AhL8AjxMarFr4nR36Q9cuNvNyG8cdxH5ZSGvt3AtndDLiSEigiXfn1TiveFtaswGwtB4o2quJUGwhJLhZChm",
  "key10": "5FogzinETzu4rFJiWbSqX4iNCr86CE5NvfUQLBfScisKzxUt3HbPfQC926MmdB4Jo9e31NupfHfaxaudkuP2SEpi",
  "key11": "2KtCPqSFKMvWUdP4g1k4yqFko2oEQ8Wj615LNosiYur6YNRzsSaPmxFCrYrvehawVv3CUqnDTTW1GDudbNxS2qnC",
  "key12": "2roWv3avstTosLNfQeE7kmqftE8qVmUbkMfjJCwoNhv5rqcGXHhYWc1AaoK9rZpjyWitN926y9NvfHwFNYHyrZQU",
  "key13": "duU9Ndo6VbQQ1CuTKg9zo64X4MJ5okMUFiaJuPuEsL7WZdj28eMEcR6BbpTfGikXTYNyTmkX65MeU5EcS7Zpe2M",
  "key14": "3gYq4muLcKfekhqtYJienS7huWSEgpjnVqkpoVt2YfyT6Ni65xpPNcp522f9qNToMfTT6ebT7Sh6P9AKvmCa8aUV",
  "key15": "oXhr9ywzebLMsWwVw4WEUhFk2nPsRggsoTHxojWNfXs1DuDoTD1qhdukFeLLvHgsNprp3FkaAnf8fr2e4tFyTgZ",
  "key16": "ScrL237RrUWRKSMweeBprMQNs4rfCJsa4wBji3nYwZ15sy8pofhXCLU9WoiHe47qCagEwJeZEBJQB4RcUn8mS8k",
  "key17": "4Z4EapHsW4mvG9WYebo43emv4gcGx4FK4dQXQWGaebWHd9hgkFT3hGmm3i59oBfwkkzTCWRPhSiCQRuk7FrUfLLG",
  "key18": "2eY3nicJnSLn3czLdKEMT9tPr6qbqVQh18SgLW41zMB69cx7VjZJCYchVSF7MRDGRCgqaS2Ag2H1czxmuFjtk8Pu",
  "key19": "2Bk2gdwx6GDHVoYpAfCsNyq6JbzTa6ozNVFmCjmmp6Ea9HeCj8nfo5ymNjxxGpdJbTCJpJNqbHhFje8zfy5yWZKr",
  "key20": "62jpjKBg6rn9cZdfGfR8f9qTzWymJroGt5YWt4MFCEwHhmxv6TYJ4NdnoBV2aMiztdFz5jBXWy9FU4As45KgeLBE",
  "key21": "knxRzpxz6e7v9kWFjfYirymdEFadgCd5CKwNo6Vw2Tmy1z8hzfwYJuLP2ttBYtjgtaSQePvgyugLBJWgRMSZdML",
  "key22": "35P5teWazcSw8Q5yUE9c79UozwKVTbZKUuMiLL5N2ADsLWyBbmNHhL3xizQj2ALe73zSqXeuD2gKf8GNrwqWZCRb",
  "key23": "5Lf8bwRTLzhBoDksePi9SjuzYT8bJdsvTXChFhqPWbKBKt4ADETgKDtCPG11wP9Qjbt8aLVStGE62FtP5nbFYYRP",
  "key24": "4b3TmzBVsWLRwyiByAD5D7RY1Tpfp4b35gnQn2PiiyKpcTKpg2zkQTDnV897nS8D37ZGzWt1x9L6GvnWQFKp5swX"
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
