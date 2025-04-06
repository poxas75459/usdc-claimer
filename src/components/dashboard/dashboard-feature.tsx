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
    "4SfJm1pkqkREdJrE8NwUitzDQXsPacw2dsxFH957mqkqgUmsWvNAeVDxudHQLYoSAdyosYppGsfJADB15EciwXM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A5Ca1LzLqBnffEAiHR6zkoLXJeXJ5Mtj9BgB59NzgkHQcfe32UFuKmapFMJiMvn5xwBsSQX8yRUd4JLAys5GYC4",
  "key1": "22CARRvf5TM3ypVSUHCn1Aaejfx8YJq1C28ZoSoszG6rGqS5VLoBdErXZgNXasiqfNhgZAzsQKkUDTjS7arepAF6",
  "key2": "4W9JUED698wCjgyPNYNQmQ54rJ3WNUPuufKaqzU26SYFeZdRKpFGweAuoJSYi33qQ2An7udrTi4q7AdFTcU1CUbU",
  "key3": "3KDqQCNem1xXWasYSy9W2WZrM2yQH6YkFvqvZcU6h48rvALsVmmeVzc3FHWut6WzV9dZKNaDQUnRNpFg3vaGZ8Yd",
  "key4": "hWNzaCdRMUxfVgZHh1DHxdKGEDMFPmZb2ABDsk3upWnFGP6eg3LUtcb5sHExH8GavP2UZAHHbkCEJXMGg566vpj",
  "key5": "5zKoTLH4bjR9d49DN3QQnGmHBbsAVzSFzzmBVKhYgWAibLFG37RYbqREjEFHiEb1ywGfkZKFMoBP7h8FBK6BT5vS",
  "key6": "3BiJ2qYce1HbwyLgwbFi9dYn3utZkEUAtZZCn2wRyieRptRrHhjow5rqHtYTZ9XyTqhGEvBE6gVjAznsZ7bQV9oQ",
  "key7": "yJtP3WNpZt4HxfwcQbafMpSoeCGyGG6c9Q48ymYnX9KSZF7BpiXC5HFjPgpzERo53EEFG5jpzK5UG1RV85TnA3k",
  "key8": "59uYZ2ceQ2NifRqgNG88hkZGYEFSZEYwQLvLRXuX2ET6DwZDXWbSDMfUt82s8f5dQThyeusB3GNtcTXgjJZU5rjh",
  "key9": "2Zpqqy792vM736zr8CjV8VemFZMniuyK1iSD1wRp1dL49KYa1v6UTmEU8eFcV9kCLfqAVjqgsesayqkF9nhQRLsv",
  "key10": "67neP3rBohrLXZFuYCoxcKH1eZXphBTG5QFicRwJyva7vioVsUvc4R8wJy4dmEsJhm1haGp3AQMrpJytW2y82uaX",
  "key11": "4CBqSzYXE9xNoLm7W7yUzC7VQkZSqisgTkRa46yw8Tr5Csb79jhkaNZBnvMXU33sSAeKjUQAQX1e4wSRwsekSMLC",
  "key12": "daPywW4Z9dJ7B2CquZLh8LpMJDzpsqcPWK8Fkoaq496hQRiLDV2jLpEiUVkLTfemJW1SFbwYLLMBabzXvHRpSVJ",
  "key13": "2YNJAwXumj1PtsPdUquF1HybpYTeWve8A4qfXAtM3TL1PJY1YEDnP8nN2YenJTYcDLtCWkjipNX2kjyF4X3T6m7E",
  "key14": "zynUaHkRcAfhazrpisTiKuxpmSXFjrkk8bn2o5WoXdvzpZo2z5gpLKZd7JeL4ER5CjY92qBERVfm3ycF6EjwwfT",
  "key15": "QPYKSZBDkBq9X53yy4L7aUuEbyvHP2SCtYoHgjAkJqJYWSqzQRzwVG6YbfZJJFpcubbWbMtAguqpbBFoXwa3pf4",
  "key16": "44HLiyWrHbwEJjf9woRuxLV1mvhjjfDDNx8vQnqPRCiEXwtVkVsutbknhAAPsfBPWhwpqooepJig6a2Uunw3U9Hv",
  "key17": "5X8yjr8Vsvp3PkEm3bEguaYnWaVtPdxZ8hJXR5zsErbukF15VVjW7wqZfkdnCCc6MViBHESdZ9A3ore6UVP2esFM",
  "key18": "WFZz34qeWe6sQYmh7NvPtGRBZ2pXwa717oq8BuLaKKrFwWvdZXUYMUAocpMm81Jz5MDp9SGZuaXafsFw8sd4yyf",
  "key19": "TzZ6m5Aov5SyemgTzikhTVi8NGm39bUVVf8BynJiUkYJof9ffi1GnHzer6Y5QdggpB7xF34Zwkk784w2ZmvZzWA",
  "key20": "56E3pa5ZHgQqi5sFMvU3WpYxHsoXQmMFx9EJtVVd7o7Q9ezxh5yu12s4Jc6N9dd98HtnzVQfpPwhaUpKfBN1sy1",
  "key21": "fxJ2hUAFgVEK3SsihoSDDSQJz7XcQfx2Ax3UL1LKMrwwiBEmgSKC7f8JMzWTcQgdePDhcz3f5FexMkU258H1LEr",
  "key22": "41FM4wp87KsSgVWMvf5xtv4j69UN7qkK94CYCuEHrNTgAYaGipHeSX9dZ8ogRvx4fKsGSFUFAPpCehY6R6VHdiqh",
  "key23": "5hFb8HboBczn3b6bjD3sm3J8ahkyrMGwHEaEmHQCEm1kUvgtPRL2CJSffTk2XxGGSteg2S8TLR9TDttTvjmEzob3",
  "key24": "wUUcEBTNuxDdj3Hi1x1ccA6aDCnNzXnDrVVh9D2t8GnsP3KRjztmWYKoBaQwhbBcFsLKCWkBC2bMbhvTpq7FtSr",
  "key25": "5Cj4pvX3dg2t3nrqKD3bLrcni3F5rdjjLRf22biXFPVAXrn4iNScFBx7JDs4ciSweA4NoSdozRgFHrKsEDdjtWEE",
  "key26": "3ZaRsx34KtFs8t9p6TUyGCzps7sejSREwNuy8VJXBNgTaQvw221jvFPPQzfapehbSRimTLfdu1ecvxWJHUgt411m",
  "key27": "41Tojq34kMSnM9B1fPLYyXniMYNgVTcLNFsvoR3MKvum7RZvd4L5qxJmQcmTFxN2XS37iSW4mUSKTsMgLtLt87fr",
  "key28": "33eXa5mYcjzXy7UvdZVFkVcgNLXLifbaoGmpDmnfiP4d7yWVtzh1sWbbYircZmAabsBthKPmv4HQtpPnSutbBQkM"
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
