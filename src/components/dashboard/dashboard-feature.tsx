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
    "3WJp67mhvmt6BDgDVD1EgZfowrzpw5iS6Emu35R6rQv3aoUHe7XgRTkeBwRGm5Zmg88Xz5ejm9VDcZqc39ybyufj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xf5YVDPx3f8kkwgC8EZvpprrayE84w2RjbSq199rK3ZeLBWaYuFkbeMaNkCTiC2n4DdSBmqYPaVMH8spsD2Gnw",
  "key1": "4ZiLnk7C4rN7pDL9VEWTTMb5nuqwXCdhNtcDu9kjN1WjpGh4hArtGbZ7Y7qQffSBnrNqY4hXDtT6oJXuJgVcodsG",
  "key2": "WHgCC6AFVLmHJsEjmuqVMyoUJxnEZnXpomik5jM5gsgvoJ1DJSNJ4HeE7tfcpqFRYc5o6BxofG9LTfbi9nzRQcD",
  "key3": "3xMiXUj7uPEucQ25CHasgZgMMKUY8jkBnoNnpgmF5sBd28nNT3cZspcCMp9mfNNBPd8t94ab3GZgHavKv2F4phJ3",
  "key4": "5EexbPoJ8MAMTQxN3TGxgCGYnsXWQCG4ajDfWqz7Ac7vALPGYfukQer368PfpcrZLTUwxXxjUiVENLEVmqSCsjW8",
  "key5": "5vH5Ud3toXor7i9Pvp9TcVAG5zd9YYfHS8LHswFXZaDYptDKfFg7nMvSrTq5VdmuNgExGZeFuANcdUKxERgvzM1M",
  "key6": "5sJZsAyyjgV5JhEZdH9qUgQp5TAVYSDWZM5VEicKGBeByZYhSVUsayK6utTfRCt2pUmiA3aqxpJ2actZpcqTGf5L",
  "key7": "3YUD2doQf2ESNbtMcaybRUSDRWEKauFUREjPLaB3nzDBcdzNfqh3sbNJxJY8HQw5ABTm3SttpDuW7mTz9yphZckz",
  "key8": "3sUKhd5JjeEUXfKHPkiQQcLhi7UMGH4vH1tHdDZGH6TZL8BX6qsShMx1nBLHrWpA6UtoG6hzqKdnNy3FxyYyAsap",
  "key9": "4wiT7Rb7t38GZWSY78HBgxRUfx7MpeNYKsGbUN7AynsLdeiYa9tFaXQNmbsiHqDMi5pTHNXxDZ7ZeUmNjKGV3X1n",
  "key10": "3qCc8MSy78oQ4tWZ75fQaRdecBPjdLiPcQBWUNoKn2uap4drkfMDZYFh4np18wrFDrzQdAzixoRQYe2HUFD72P5W",
  "key11": "43CY3ZZ8cDALC8aFtQYmxo5GCtZ8LT6Dg6Qe65AgvQLcpxXxc83VogUqcq5N2gLzsZPEtjt5nzAzXxtgW6yGZKaC",
  "key12": "4aTXH7H6hf9ryNZP8ExTFR4KTN9bUxZPhnZAGy7dNE7CyzMLsMHn71pyWbN8E2bGkqcAM5TAyTMkfppvMTa7yrbw",
  "key13": "4eDs26PLhfpC1Lhx3mhzB2x2MdZaYh6Xe2c5s5yyzZ8mKqmSNPxxqFib3DmPbKFMn1jk7ntP6sxFdJKPBwP6peBA",
  "key14": "51v5nc9h4QWjSuNGgbUkCBrP1GDNVE9Qiyd97tg1aPwokocGLFsoMjiuzx4oG4iP4zsxAUAdZZNXptjCtVCpc1gb",
  "key15": "4wjmcrY6gXcEkdqbwygwnQEXQB995AW7yqz9Qh5rn4JeuBa2btw5XJA6Gdam7JQdBUadhnth8GaH6KFgG5yCan5a",
  "key16": "3DxXdzt4XDUNRkgFqmfAkahXMEzUHoQcAzfU5UWvGztEzdTV1HsWUtTr4PHvKYK8FxwcU33KM6miHdMgsYCZy7BJ",
  "key17": "3yho1ZrrebVV5V8shWYQV5tfLpx19m83b3PoM4b29sYXXLJzK6xQXf6rh5xTUuJhDexHwRpGwDi5da19KPAS79qf",
  "key18": "5VCV4f2YvEko6UUwonPMiWqfzGt8y7LgCNannsGE1mwpyozFwmA6bWBJhnuFK6SPri9NQfXSehoJo1fFrYDJrw2T",
  "key19": "2TJGoHfaMuDYxJ5eKTfVro3zxdmRCrX5PhK2ucBPfcPFg2dqEJZ34eGq2reRTqX9fHaqnLGDbMfxAzb8rFmQQyCB",
  "key20": "8ksEd4ntUrZTYnQHGynC62J76AiaQ4eGtDQqXYDeJDYurCjhzjm2NLmXacGBdzYYGzShWiMZxHLwASHFwowRJPk",
  "key21": "4GSQanEbydjAMUYr34L8hF1vbi2WpNtCoPWVmm4NvkrmMQXF5UxknoBxmGcMneabPDWj8ThEbETfNbV2U8Y69EYS",
  "key22": "FH3tuvp1RonNhddAZWk7pN5Tjk9scY8Q2hcPvZh4WxcNMp4QvgkPQyRNwqxExE76t6fuadswTBbDKtHKgzfjMFh",
  "key23": "48PCKRn3f7SxtPmg3G3ckmjJromkLX71T48KSVkpSUFPAQkHmxgQg6NnpmuvVXMQkzHTMY6KMqy7beSSHHwZkfbd",
  "key24": "3CeLETbWWzEjffFFZt11XJH7TCXWU9Qiv7JSAsaKf4fEZAzMFVzvNst3UTMNCBMk8pUmLzji5e95fR6cddSZxthG"
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
