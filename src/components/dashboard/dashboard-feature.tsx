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
    "5h3hUCY4iCdEpyi6jdME5sfMigJTHBLwwXeC6GiEMzMvthz6dRY53f5ALTFNg1atqArw82Zky894BrZqUkpwyttt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gEVHU8rAT4H4y2LSD2Dim1kJ5EunXtSya4XqQ2dt8ZuKDoksiwSBEaesamc8FvDFyuUqa1pG1QyRSwuTjx6WMfu",
  "key1": "4dekBeh3qWKWFdxBaZEqgPw7R8TEYX7ZGVswsV24yHgUrFmzLKMxkMCcqHJv5Q9RHFXMrqbJaY6VqitvPuCAH4EB",
  "key2": "FceMu6gHYgWocd5qdq1NGziusbEYnT38STw1BVrwu9FPRPaKC5msEhuZaqM9T2cC8oaa5vny4SSTtWLTbxA7aNn",
  "key3": "3B4or7zQVMCsi1C4H52mY4DUsKY8MWzZw6JEaV2MnPkjc27ENVqwvdQjtNXuz5fNC2E5gq2gQvkTo4V6SjRu9KrW",
  "key4": "5C9yz69NYYGgVdemRR6qptPScPvwYM5YUUMCxJoiYRPVBKt3mF478mLgFDWeMzee39hcB32poHtfCqy5QAPkn74q",
  "key5": "5MZvqMdDFqQcVkjGkGy4ruaKAJgfbqSTsBG9fRE2JuVrDH9ZW4xcBeGg51rNNaTTgZD96Z5jfvoEBvSPLdiJBy82",
  "key6": "2pqAPs1bud4sLF4DqoWQTjdKEJdRqD5rHXHo8d87DHYHYaf2tSgmHDqbDcNzhTjsJXP3hioTnz6j6ceyVSqFUPdV",
  "key7": "4im1XrXv2nzcignABhPheRTWbuMuHXU4iiHFoUF4s3gM1mQc8uoRMSQVY51H12Us3B1fjWHor2p7odHCenJa2K9i",
  "key8": "wHYvctJsQGadHsmFRrrmGRDMzrWKQbFqHfFBGk3BB96ppt1D1iD7RZrcKaT3JoifgPzVyKetSTUfVkZx9HBsorL",
  "key9": "2MVLwXYJ8k9jpPoYoQb7wvuyPxKCXMQnYG73kGGPxXSR2traZ9GLjXHQ5t39LqvTsh9bygP85s1mfXqEyZ77KaSi",
  "key10": "5n5KNCGjoGLUwX8Jotw2iR45hfudUVHKHrmKBaoKqi6UrdB621TUGgpSV96zqDZpxK8JPx7ZE1p6zYKBEZ4SYT1z",
  "key11": "3XVFcj38EJfSbHZvf8aBqFpGneXNL6ioEtFDFYkKW5vZUcFCM6vebiYzEyR9YRGFxrEqp9qoZ5Xw4xgvqLvteYa6",
  "key12": "3HWGPkCtjUfW8UU9yp35Eutxh48hRTUHrrJwGDTxQ7FQ9vkNkiBjYzjS2MWSanueoMXM6SnKrXFpdQ4fHv1JnBDN",
  "key13": "3ttSxToghnxGwNcy6DPTtYpehGwXt5xD5N2DNVp2GE1gkim1CWhGoMF8KgUPa9w58fmohMbZ2ZafZpST74dbXpUZ",
  "key14": "y7Nq35fbFmq5zxp4JLJcvTJgTWpkB9o64orv8iRTaZXLLkg4iYbsEMFMh8Gdx8sG8m9WoNY4cEao6WfE4Q4WtUP",
  "key15": "k5ZWCTtuoyTGg7EURBQkaCHwya6UKZgxzcBavdjgZYoYmSrHf9AysRAZiczWnU3x9iz8KnmXsoq4gP3E3nFYWNE",
  "key16": "2SqZQzdPyvzYoe3TRtujLgGoZfQQpfPX5sTA1pX4ERfKc4djCuubVHBZo1kQLpxsSmuwHmX6eVwUe8FXPRnp67Qw",
  "key17": "3ryaxbW8p9Ne45tAk8e3rEi38SUYQP8YX3C2RECBFUtvLfiEHmRje5bKUmfSWwrjqpWyk2XS2UnHbTpfdzfAXP5D",
  "key18": "2vE1P8fjAP3xZjLBJWYmKNYh6boArB5AKUiZ7qJaeUEdnAFE5HZEDUf7eXWcphgcZPU6cQxvfdajva6L8A4UATus",
  "key19": "2Qdwcxf7YLqQwDtpKMacTNc4ghnqAHgZEMgdq9HopPTbECrXu3rgumadHZEdTjdiwEwRXhDgM5xVX9A9A9r8QbDg",
  "key20": "Q8AGXsULFjKAWxEDQ6StMxJxo6yR5W6kC1oS3uv5UoZZtVPECLvjArk2wFoQLcKGzHD916vkVgSKCAqfK8tJpx9",
  "key21": "3vmwtwB2Z99rXfsZfnJzfrCrZEU7AAgEKrA7VMvjZqRrnuR2PvxwenbtVdFbotaw6upUHVPHMWNLtNfXT9df6QxR",
  "key22": "4iQcPK75B27mUekxaBXp12dmvRduCxsik96cyWifRgNYMR7x4ac8TAECoSnKRhHgreeGchAYCkJNt8vywcvhJq4r",
  "key23": "4r5fLvvcCoVtfcg13KzmKSHAQKN42v1VvpLfbLGqpptDsJiAcMUUnkpRuBLi5PxsuXJhbAouq2Fck6jNFmGgfw9a",
  "key24": "4sMv1BW9evS6Ujy9hFMkg2MZuqhhuVjBfUj1cttTDjxKJ6T1PEoJHwETQu5NS89mbANr48fiDfmMtXWAPooByCLv"
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
