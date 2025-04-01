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
    "Lph7G9YC6i83oLCXxLVE9Tqjc5yuqA842gcWNXCkNd72Awg6i1zYCPYn8tN6NY3rhNThwPnDGT32C5dkXwxy3KE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyccaEmao4qHJvvQbCgjeB3DUdVC42ZUwNEeNxH7yXV8WrWgSnvXLhHMSHFR3ri9vFTkpBf7RwHvWtykPNLHz1S",
  "key1": "4DMmFirLNVQHFPjNK5nZeZ1tS2SZzxGMkHj1N65seoRh7pDNTjjbSvqQQMecMkETF4pwQ9hew3t2biwnxVikRhj9",
  "key2": "5WeqnkaY4MJrrBiyVANBr5dU8mZNTdJn8aQo8KFpx2aHERXiARygXd5Gd1fpVGEYj4Jo56AFKrSnjzoMxPLJCEVc",
  "key3": "4RCUzAK3VkVFaMt719XqoAY5QTKq4ZBPqnz6Mo2fmiY9y1pLTk1hgpWKaMWiEYQrCQc91sxHsUKmPpBENWbwBdUC",
  "key4": "hoeinLapshphMg2y5X2GPwjeRfALqw31X1ZKtp4NMwdUiD7X7pNCYb1QGfGJDZe1SBzhDBE7FQiYKntCSNXpVYA",
  "key5": "3BfsLwj9SQDUeoyMUKnBJMSz5naM3FMkjKXAkWUycikPStZBSuKELTWYQQeZVoSFbZA9jYdjx6v9ydpUYg35xps6",
  "key6": "4oe3LKwEeSP1qVXH7GAks11GrfGK6Pu5zW8Kg8eTAJn6iD1wJtMXoRVE2HishYPm2N4rhDzxveZzBmkmQ8MWeCaV",
  "key7": "5zrG56rFbQa2hRzhAyVhJaeBNxjuVuzP92rv3goSM4TYrknU5cu9XRhBN4YLmsN1auXHWuexi8sy6EUS7FXT3Lg1",
  "key8": "J4vVVfYjhCCTpLzNHdKShTkZpiws2tPVMZJW1YHSBBExfDggfji1sAQNzqu39ginUj2Vg3UG8TpEftbGu3XCANk",
  "key9": "2j7SbYUNo6ssw56avnybKtSqbY3qyGxCWst9rQ46QDoqYkm98K7V52Z1jGBfzdSbvrNXY3eXtjg3RDxUVaNRyu5E",
  "key10": "4VrrkjFhL6ZpBUVCSegS6gbZHSM18BN7fkFV6tST876EAprPGkfwwYVnMeqrHvxrqjCfe1nKCTbdZjCbAA1Jao6P",
  "key11": "312RXHKHJf3aBquBmRXFs9Q8cQzFkMchw5rM9VBvReuHfSBku2rUh5UQQyiK47hQH7yKnZQ95ktp4GxhRGivZfAv",
  "key12": "tAwNPTiiNFdoG8n763qUTq9YMPctKdLe2PGzJYWkqyC4FEgrMwejp8pH79zZhFuto4DqquMq2WwUQnTC6gPHB5U",
  "key13": "wM9n3SfR3HhxE4fN6wjZnhG38aiwpFcNuL5c82hFH9dP48zRaPEeKVbttYECCyc6VxEbpRGmZiBUHcfde8XYziF",
  "key14": "2Yc5cihXjESGzcCz9V7R4BashejY1Zy2GnUNdiGHBf63iLvW8gMCHU3hWsdc1whY1Z71UPPKUryMfmDAPrBPTvyd",
  "key15": "5nifNBtdXQRQmm8jnuLj6ACXTNG9HUXvvtPwJGPtyTvBF6szUzn5bf4gbxQKJfyFZgoWMgvUkJrXDPsPNBNKLuGE",
  "key16": "3Mb9Wb4qtxk6m2xovuRY9mYkMRqaNNrQN1FikPtYCmZRyrrdrZTEm56K5eevtw22y7LtagzKVf6Z7hD9L1q14QJk",
  "key17": "4Nm6swfZGaYvitiUsFTPEbnAsqdidbzviWrJantmAUin87YN13hUgrB1zmmW4mmbwv93DVnjs1zzrYCj1fmxrE5J",
  "key18": "3mmqSoRTPj8nGSdJDsB2uZjY5rPdHSpJyaAghoCdSqzuRLPxjFZctvLyvSkeXFWNuyB8bQA5nhR4D3tUWWrtdVmF",
  "key19": "4bgwvd3kyTDcAjErfb4WiBjG17PCT4cFsxFut3iM2hsFXcPyA3tTeYbdFVVXt59tJoNfnbhLiumS8UMNv3dwSY9K",
  "key20": "5UMrhsPPNd61URbMZtZmztxrVXMjsVgbiQa5tDp2XUEcDZudyLnKNTBAt1iR6z85bCTFxWeapDiY1Uz1sHPkyfw9",
  "key21": "664TWTmVzVbisMASvfT6CyoBcfsqdq7LKFrzzX8f5up8LZ82pAYXsrUwfHFTFJDJmVgovaYYUWA1X8vH8zYWiyVf",
  "key22": "aYTzdk9g2VEyWnetRwgiXFP3AiC5dZinyo3GCnqqwJ29Zd5bT6wPFbVqcEMmSb11VatY1n4fvc7YyEsKCNkZKUA",
  "key23": "5TJyVaHPfwYbzw42CmS7UmKdQRiFEQedNxPMsVTJjcUSEcd747hdmCmqRJwhE4UYr2uSDV5x6sVUtjST4nywAhfw",
  "key24": "2iAM4D6moBdR6mg14XjsoSL772xPF4ePQfhoYhPGgjW8PmeSB4zzQ3smdpNfkxyWMUT9aqURXN2trCHqGXm7z5wS",
  "key25": "J1sdtrChvjDFoTySSDUe84eyXzswno9dAiuMeS1nrNFSBXuYAPkqHffbsXHNG4GMb1Z3oVW8yMqqhZJZDgExGvJ",
  "key26": "4UHRu1ZPdqrHGoaCaSnNSD1CCgVnCZPqK7x8Bs3z4NF7tUqjoh36PzmfZhYmQRFL4dE6GUKJJYpCoprxAXBkeMAc",
  "key27": "knr9qG6GhiL39gDmztydsHoiSHX29SMgrPJHJ7ESi8eS9bdbY81Rs3mKjFpyK6Cx5SqMWuWByK1Zswf2db12u67",
  "key28": "4bBKCev8gZh4k2CSGDkSgBevaFkRUFxNeKnGab61zHzfKV1UvdZHdk36m83GgD2X9LeJ9jLF2tADQKFYWtErae3r",
  "key29": "4t3qaj3uqjkVymk2hxLW9Aj5w9yyyxSydMcHj2WStGfGvFPvauSMRjRDyNrtSHU8QoTBxYj6uvPBi1hj83yWbFiQ",
  "key30": "5nYxGP93SHTHvbmdMvrvBsxahisz8TpsErURQktw9bWdw4PGHAmTaJ9EfxYBKBYheCG9cz416cxmnBHU9vbHRFHq",
  "key31": "42Dp25LNF5xunh2xGuq3s9vfujew1dPhioRcxpAzsU5qv8LpZCSm5rjs2Hso57DqoyMP5VKquhtZYwvP3KyCbAnj",
  "key32": "3zsAEjCX8gS468biaUpshFX91CmAyrWM3Mibkfpjk8dzTLuLNxUcE6NUSGmMRb4zsHuoLfZu7a1xLNsQETLvY55o",
  "key33": "5ikbNYQ25V8R2bY6DhJgNwtmJBeS2xJKK2FrSbggdPYJE97QrzRDd66efh1Vy6wRa95J7JMRSvwBP7ofC8d7fUSt"
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
