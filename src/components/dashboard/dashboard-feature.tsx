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
    "45QgLG3zXYK8hYa84hFJ1BB2NvHZRCy1v4sJdGpVmYkc71MvHCfYgh642boJ7GzzQUdAyvHtQt14qFrLZEkjkroD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWUxWWG8kWcrzEt5wvzLLdgnbtrzfqm35JRaaz2tW1huHJGrcpT5E7vN2McGYm2EtqpVP7GyB2DP8CvtXReXJod",
  "key1": "Sgps9AF7UFGfa1DZXt1pGj3cKfbdcchYS5uAkjAqNCgbnEohJjjxT1fTXN2MT71hGUaCUZsLmm1Ft3p3wwrcNNK",
  "key2": "5ckaJN45SEa9RVmyLoQHmgS7xS2s762JqS8vQjiLMeRhwzzY1sGFAVXU4Ak1Q8r9ZqreLJwxajLVYX9nwaBmgZSH",
  "key3": "is6FReKyJUvbE6MQgtyyEC6MwKiNyCcMfP4zVp8JcsqMnJcoKg15C8eWcPwy3TbEtKLRGc8tDdpyDxucKy9eL75",
  "key4": "3rWiPMCmniCEdHt949xavEix9ZgTCotWE2aBkL4ta7G8YFVZ5WMWMNzDxcQXofYYMxpkN2cXDSS5m5kKaE6XSZkV",
  "key5": "3XzVBDaWC1KTfKAdiNXjeVRC2AEM2EMYSGMNLDRujRHyDuEs8xkGRteyW8CrThZgRxByE4cjE1CUjkUWojRD2gLp",
  "key6": "4AZTZMwZJZHarneHh39znNhi779XXbGpriWyoXhzCNh37gQh3CdrEgiKg88PT6XvT2bQfri4XFxu9CbNBwtWnyjC",
  "key7": "3oabDYXXbNghgLpvyR5o5LZFSXy2Rn8aLBjF5DNS4JjkqWvtNGDy9f1U2jRDKb1prhMKB7kiMZzkBgJfdcKHtqTm",
  "key8": "46ZmZqvqBndwHkLnZHyHFWfLBAk5nVuFQ1adMzYHGy8asuPRfWbgjnF7uqJ1ehmufnmYXQeTZa18Nek8NbU2ur4w",
  "key9": "mt5U5rfbTkATMfiM7vn1YcnG6kB5TCcRRbrgvpYyUBpVsLTBzwT4HS3AxgrUcQo3odwjvSnKn7dku7wSP5R4UXe",
  "key10": "5YUtFbBP5vucXGcn9AJmgSaEAM32yfp9XYt6Lm9RRzM98FGwKAd2KYroAafHqu7ELp4tK7UMYDujTF3zLCmkMRuz",
  "key11": "zrFvYJvNgJvcFgW4pW9AYWJRE7p6qQ3fzRFwoRigbfawD2T6EzEJ7HmkpDMABKXZQGLpG6rBnnyCrRTN9JNkdMM",
  "key12": "2Xdp7JrdHb2KH5FWnuQxR44qoynrQ9uFRGwLMnuat6EPjpNb74yj2EPpCqaxhZiMutAjGYLEYkv3PuUwNXKGqWHB",
  "key13": "2onYKUT3vWACudCwn9pgGZeEK2njFfFwMz6StWdmUo1CKzuB5uCobepgYXVJtS8J1D6BdePTAyFcgM26a5QUJ2P4",
  "key14": "5x85aejex3MVZpRskPkAdbnE9KbSKgAnBCKhsRUHwFuzAxBhcwjXbPGG5fG3KwnzXRYybjR9XSShzLKLqb66ZHRN",
  "key15": "3NFZ37dMXP72GyhzrQiGxRZUBM41CVZvHk86u3ZX6nDFEwwihJa9WPmTCMoq9Cm9Z9CJsgTy2Da77fRvUrLXe9Ee",
  "key16": "2bhkphaSC8YUGpv7ziAjq3q3JVTnLWZacsDiRXaix83jYHjmh4juR6LHLH6GBsFoABLQH7UQgj8mv1HaC6fz6yfC",
  "key17": "2g7WoQ2dKASK7zDHZL7KKTXago1qXtihf7PFRK5TrvYRzRiFom62VR7WaPbDezSjmZsYBv7e6oN9d9jpb3W6cbt",
  "key18": "65iGwLma1ySo7PkLwKP6QWNLXi2WWMMNij2d4iych7GQTc2zwUN7c2puBjkVBy7um4MtpdAe8JrcsKLkPGrYU2vk",
  "key19": "2JtV5F21a6hnHyTjBohRsbNk3g1vZej88WD55AVXRmbELmrNbq35dZNN52QD8GpGLKauyHmXB4Q6NsV5pWzvD8X4",
  "key20": "2AmLD3B8GAyTiVYN5PK1ErncNhMziP4mD6EqtjLsbPCKBe9Td23xUfRoSAGWGZAxqVopkYX8ENVFxXL7YiEDPkdV",
  "key21": "kVcet47Gwf1D6Teze1Vjp2w8UMDuxjeyM4ixCijRAXoKqjzP3PXDRWiNhtKz8xc5Ygo4BuwkGRqccg8DZjY2nDV",
  "key22": "3xgguJJAbfVz6MoBBESk4frSoa5NgKDGrnjNAqJ4TJYmSWUh475YYKHKYJhhfXtrdtHEc6dsx1B6VCUSxADTiGky",
  "key23": "672aMSGKpwfcSybPkv2potmZ4ugRcgTSTKM57kVgXD2Ey5GoCADfeEkGU1y7etV29BZt5zSSwuDucsxfD1TktjWt",
  "key24": "CxdU3fqpW91REBUzuLZAxpSHCBq3qrZQQonmWmGPfeN2FGuj9bAvUJ7XdFxHqWHTx9BK4X9vLANKAGHSG3iAZZk",
  "key25": "4ZRyQfhMR2Ppvpmi9FBPjcHZP2zqxWqoJYZ2XJBi2PFn8yoXzHaZamWiUFqEqdnn4wUhHGy34VKUz7tsS9pCcsAZ",
  "key26": "5hDbCzyLfg1jH835FVu52Ybz1J5Kdo4CyqrWF9P3aheD2Mp58NrgJNLtj5tvrcaSJvif4bmA71ibiPrSNnZuYvjV",
  "key27": "2R1vhnoQCsZhBwXjrY5PQuKhdk4YQm37XSK4iNJ6VGCUFtNy8dvSZFmJ29GMHVQsw7hAiwwSu9JiHJRrsqVHnsEC"
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
