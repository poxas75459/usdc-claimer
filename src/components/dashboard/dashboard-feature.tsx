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
    "Nkujo2bZzz1hJsTE9Af73wUVdriQiQieYp6XZ6pZfypFmzajUHNBETuqgRnxHgV9G7uj4AgTZzZX1bVLSCCsdZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycpSRjvVcoEoh5xLvW6h1QcKLn67HcuaV8dn2rPoCSX6gziZKAH5xjmHtbMKYEJiV5HmaKt1qBcN49zw15WhpKA",
  "key1": "3yEDwxcgq1Fhm89yWVHBGa4q5CLYP72TevXhmDkAW6zpEFJ9j8eS26zoZXa84gBQGxodDKi3th1ckDzE2ctAWgay",
  "key2": "3GpguWKviWZEE9keRjmKDAyeDTiui24m7mvFixiYfjoPKP53k7AMdXNkupQgTAko35jDwtFry3qNCGUuMmoVF5z1",
  "key3": "xXXaPz3buHCxCMgCSpQyxTQqbUFM4o4ZxM9Jw4drn95EYBX5XW84GjKhBfxKYHj2QQkagsA1sDD7MCcXiZRKXTa",
  "key4": "rPtfhgqgs6DNMgJUN3Hoe543mjdd95WgDYa7Hpn19UF78W6grY8N78sXr1FTh4fCEbwa6qiWkvtdbwzdZQYeRks",
  "key5": "vKsprWzFiChCa7KG5gzap5tERQMeDS582i8jJ7Q8dZph69QMGDqtVXhiGbQcepK1hXmUvNSgxosbPvmruhN4rVJ",
  "key6": "3YPpibiFjYxbm9spQk9Yhi24mSofuTtmyrY7ebNMaWNhE5BKG2bdvLmcVG45Ae8wANVcQw2EwqPt2JTf5aUP3H2n",
  "key7": "5DaqJXgPterWVfCFbU6bLFAji2SHoeA36pPPnPVhu1NVQjh4NZerT3KMmSu2GkpeeXounZC38RwVBSnnML22tevk",
  "key8": "4JDrttMTc1CKNXAAeQv6empcvYDPRB39RzaXnY3d6J7xAqtpzYgtqivavux3k3Tn26WUgVwoSKtFVcYuCyN2HYDa",
  "key9": "4MUWR9eCv91gCmLFT1hEf3YaD2pd6UGgS63dewp7gv4b9hoKkQ7sSZMnT2ueN9LFkhsun4NH2J8kaQFnRJKYrABw",
  "key10": "2mTVqxrVmP8aXsoa9vzmJEDa35USDYX2jAThNiGR7JTPWaAdvQKKuWS6x1u6txccu9hoq8EdkBxneJ9nRmkeXrSZ",
  "key11": "5yBJqL7poiXXA63P9dt4cJ9gKmKwzSGEobt7tpV2NmyAvoq8CN9Kk3XFfb8LPt9VAvBX5L64YNe4Eiofe9eyp1Ti",
  "key12": "5k32rNyMkaAY9YV4nZhpVE21Un66JJyRfNF1hKTArdtg9b2vvzp3H7VomAHy59ZV4kNUsBnSgyyJJKss6MEr1YM4",
  "key13": "41jzc6JVj8tPYRE2cEgCiPjtapxuNfbCpGNpCXNtEVrvaDiKqBAfr1uzT1MgwMyfPrrH6LBWcFfYL1uRr2JUH1Nb",
  "key14": "61ZQDPU2DAWGM9bKKRPZ4u7JaC9N6GRvW7PN7Xuyvy1iE7wA3PZ6SyvH5xY18utLAVdK87L74YZr7JyLSHB3Ru7h",
  "key15": "5kh5MHDRNxwqyVAMMjKZbKn8y5tHr1e3gjQQEMjVRe3vuG732cHuwcQvude1Rd7B2aB3P5EgMBavUF9xkf6bWspG",
  "key16": "3yfCQQyAXcVMz5XUbm9sK2qo8vQWE7b3WZU6HAWy7DWtXEjer6HSMN6kGEzGAvz54sjpQGQcUBKGxsTLLKA5YU4m",
  "key17": "4CxuoCU55VoeqW3TWB5LNTJX2RQaSZG1K9sHabj9bzhvYPrLzNUqo3Gwk2wT5gCEkCHD9Jv5P9DRXLAmSPREoDDP",
  "key18": "48uptmGY4voRGVqKfFrmgDgdEHoaVjYAtHx8y3nFpLDQjd5c6RCBebGAEZvX92osDneQgdmkx3NgLDvrhxVfadNX",
  "key19": "58TUCxXT9S113tg3eodhq5yDHwMVNHCeJo358HnAATjmDj6T95gU8vnKtx5SxWrzP9PnKz7wTW59RvUQDgWBVRGS",
  "key20": "5FtUZbzRhAQ4ZxJqBgkYaBc6LJevMQUJJrMvhdxCeM3f6sNWqirkLztYSxw2t11xq85ETJWkw4sS7ppAc4TVXQdm",
  "key21": "2KGpJgxMSzEK9ySUpEBvefS6Tgfdmay2R8VbmvdS13xo2G3aiRAKe7qDfVuQKWPQXqBDFo2pC8WPZSmEjPfkJ7Li",
  "key22": "4w4A6BBUZAnEc1hDH6umXDWbEpM9HpEMDuZahdQgQSGc3JHztLP5YwTSyc3Z2V3mHGWmb4ZChQZawsSU1BGRTYXT",
  "key23": "2WkGDgyNiC2fqnETE7YukX9B2NcyM2Hi3ALijEYaDTqYaKeVUQJJ4ZoPuErR5tU1pJymwLdbTPxpdWRKhRVrJLKW",
  "key24": "3HDY61z8vaYz9SnRe8WAoomuwzRsNXbfTBbeEgd3Zqo9rUDrEBKrcbaWhtK6wQY6TyR5N5vFZfT7sbzLAuUaUSFS",
  "key25": "2JmNPYXS5zN8m2goKL49TExipGQpgjX28RNdTanRbiMAcLEXuL3f5E4harfDPnpXJY8xAkuDmqoG54YyPmeBjr6R"
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
