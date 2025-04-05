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
    "35Sg7GKNMV7CX2W8xDvjrARrwG1n1XrXqiAX7EEUcK3jsWtHsowjEd2XF4wPS3efqhUHLnW8CvukxCRUDpJhVAmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23jX7FYybFPsSDD3U13NNbo6pMtzzDn7xuTKvc4JnhQPv12gqfHBycpRufAFkVAZoStXKiDso54HuqE2Cis4eewg",
  "key1": "558rdju59GcjPCFqhb6WtPMiDe7BvtzQ6fURC3Btr8uiyMXnsCtHCrEtBgh8ayoHsE6Ytb286zbKWofK1z56ffTr",
  "key2": "4fcFf73jGUqKzwj2wHWY36nGCmHDpwYdm7ZcWvai3mZ36dVkYHUXv3pMbSyx41EbSQjeWEhxL3YFtPQETorrugE7",
  "key3": "3kKLnqTPDKm212pDnAUuZy2zSs9Z64xkap11J9761Rd46uzBQvskpzq9vhJmCabkkAqurSjohYStGLBjCkQcxraY",
  "key4": "4QHR3Z44i4poSFNragiXcj2yAPto8vhf5vqts2TR9md7dSddi8634CBSPtGeGZm9jEExWWWGoVnB9VEfwbFUUm2K",
  "key5": "4BL28qc8LzEyqpktLjBZw6DLBNEwGAVcsK95x6cXsXA6vgc93zV43X15FkxnPaKS4x6YxcqQAPiug3RTMyX7xY5x",
  "key6": "5k4x563uzEBGJX9ETnP98EiAd6SA8jMFxXZsBudNAN9bvyfbaJQc1PDYm29kTZKjd8W13YzfQoSjbenZSffFq2DV",
  "key7": "2xLcKZQw7rgij2rQxonGe7LconNQB6wFEoS5LN6ak88YdvrEFBGChwioRzaiY8h41QpG1ja1PFZtVUd8RB2FgJBZ",
  "key8": "JeLsvXcv9cGUTayJTtr28RtkXuknXDvV8UhSvQ81wx6vBNvyDFmGqzpydRwS1QCizkMGsjAfFbcsaMLzr5kipsA",
  "key9": "4hVJshinF4F2bkUd8rs6FPWcMQQKmWdtm3LXHeJ6pG1vvcZ93NcuFn6vo8fAj556iC5JLdMmkQdb8CS37guV28oR",
  "key10": "2nPs3qhkr5Bh1ppMvTHdHmGgJtFFTUXQa4gkEyEYcNMrjbNBnSGiWjhsHJJxpGS4a5ea23n52xPCG3PygiAPiBK5",
  "key11": "3v9MySbF3xxZBTbiXo3mmoiDBjHqaGEogTS6kWwQjHi5YN3pUHvUMt7fuaM4Y89YAeq47mqESxTbHG9R15cNNyXd",
  "key12": "3LchuN3jYH4rGQQ3KYRwyF7EFWRoQjAuqY7WftbWpiH4dr8Aj3vSWG1NCJyY3BmhzVJA1XHqAKGrsc5A4eaWBF6p",
  "key13": "wgPAwqgrBQDn7WhKXTMNun7KYzf2KF748Uasa1H7a8kLpkz6wLVDrXRvvBkTjgFA4J9XoKsnPpmobPuMobuuHFm",
  "key14": "52W8ELzeHxv9DogAEFcDM6p5PLvitp75DehH8cRbeda4vkUuLR9vyNzDeMVUsC5mvzZmhQMz1SgGX7uZ2kcCvASL",
  "key15": "2C8mMZWuohkyf8jzWdGZSBtPGcvcanrbsAeeFxisQFGvUP2R42QMizdAeyXCRx5G6GeQ3GU6KJfBfrCWWBS9YyzV",
  "key16": "TjAWTVaoemEakWHm85ti23Up6bAuy9jWGtUyVm91oGC4tM9PGKq4chacC4bak6aVb49ShqVmbEWV3av482ggRwu",
  "key17": "wRbJKkJESCuyMfM6kN6sEpVRcYjqACV6sz7t8UDR4J1uX33t4cmGbE7tPdmKtoSqdHaNhTvQ9vAET39yCVyEoNJ",
  "key18": "4xrdMJjtNQBERmDZUpo3sQLYgm3e7X3mJLLT8u5NEkg9eoojNmv6KZzAHhw4xmELub8ZKATXmrc9sHHt2GRkh1DX",
  "key19": "5xLCzxrhfkou7RgybegZR9qYwuTr46Qdt1hDuEzssGv5TJtYsktbFuqauvuVG2keoHvDYAaD4jBwTjCtmWz9RroA",
  "key20": "KkmgZee2vkWhQ3u5M3TT6T2Ubf2TbhZjc6N4LMi9bz4V7ygFWJy4uhhfhumG7skByvdNPq9S53doK3oPjRkyzVk",
  "key21": "i9CMZBuGLCJLxQZzsSAvSC4WQQ4QSwKhvAhCfsnrBhvz8spZiqfT5PcpFXoCFPLqkU3rNArd4zxR4Y9gh1zb1y2",
  "key22": "3XrW2z4eerez4gQrjUh2tLdFoF4zeNe5EmVpQPDXTgeJZKPJKN5BTr3pc5K1jS61uuzUcCtfbmxAc7JwjxaA5wVq",
  "key23": "4waD3Sayu3FecS8rSmXcMxKbzixSTaHeZSkMFiMPsk9u5ZYmTTG28V3iNq3sEm9CCrxkUL2CbHnyEiCeo338eeXV",
  "key24": "2EPyUF5XeLhi4ugGR48ByZXn589z82kKciKmf4YxaVaBBasPs4c54XWzoNdB79s2EpufE8XtZZqt8kwKM1r2fsty"
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
