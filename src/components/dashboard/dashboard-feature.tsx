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
    "3LLteGDuefn6hkps2Y15mXZJpUSJmtB2oUx7pKVL29A6aoHtBdmuExkw1u1vQ818LSA1zNTnzXPNy3uzH87VpeC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jxeSrk8xpMiQkMt1Cddoj5pKGECjsU8kkHNSHUEiEkVVQmP4PkGSeZe4sjLJ9GzaU19gDtzJxpH816YT5k4chdq",
  "key1": "2zcSkQLJZgxhYTuNfraVhG3UnboMRseLCu8FJ26Mda1TK6zYaFvG74yhukLoeUxLmaY9ZBHPTDrXb99152Vcxust",
  "key2": "Ks6o4AeBguY4Nx39GNewjz9qC9fYLufLd43NXe4v1fJhe22nuKb9pqBH8yXoLuDHQdGmyaNarFZHhjFLm5UU8as",
  "key3": "2XFZX8YtKa2mGzY6LqUqw9psAwDMP4YCz1grqwvYuzFqr9DWpDQY76zG3u2ztaZP7M1mVDxDeKF4tmJre2U5prVZ",
  "key4": "2tS1Bs2vxnLYBEz7YFDyYjaQX7oSZyZpCkxaaFPvyPKVBNyCKiezTMi9K8GbAY2Mx1aTKzpK1pxzG9tfz1zEK4Mv",
  "key5": "3PMvB1go1akqyoB8C1TJ5TZf5k7RAXhRibPRCYt4jYEzFRyy4qFBFydwkiN7s3Lmni4heR5zQ3WoPUDAceEDu3Zk",
  "key6": "YrwNFw7Hmni3ybKRZbPJdcSJKkbTc9ntKfKs5dqMnTxD9YWRNdV62DQQURnAtAFpwnWuGu5hH2uQtyUNwpYeyBX",
  "key7": "HworuHY7y799DWTDCMmzvqacVhjifaQQSNYhoShpSMGznrxaKPBouijSrrqxXhrTKfouPR39ct3bVDVJDo4fgGM",
  "key8": "3cvpugZi8sxqwuQvwhS1MWZuUndveyuphVipDc26zqGKMpPeMx75qWQAP3sfCTEJoQcELWU8Y2wYmL4yrEjiYwLS",
  "key9": "t2M5As4stUn8UwS1AoaMyikGmMxqU9QvPGLdYxTozaN7hDyvUtN8BgpQV7E1MoA1a2wmDFX5zk5SEnFZbuvDWAL",
  "key10": "4RkQoGwfURmAzDWtNPaCLytMESAGxP9xoQaqn7FHfL3B6JpA61wex6NUez2Xco6DXHN5dXj7kj8wxtb36N3BXZQA",
  "key11": "3e6GePAQzRgERZg1eagY8iKUpquu5UDkqr9BubYH9qVHVs8SUpf949YNoKF7t7YFiaAxMcFBVgvDyzrEJXs9m7cM",
  "key12": "4omCgPyBKvm2qtqF2SXiTpbvLvUtgPvWodNFYjoiopyum6KPHPxnYqYBLcBVRhJf5kaTbY4cHkb8K4yzBQgi34nK",
  "key13": "2M4uZrtFV97kYBqgQZXK6vQK1uCm5JPFgLYWtwMrko2xLA5bxzaGd5X2P7kG6ZcxHXwNckQ4zpDnbXMZq35zjHrq",
  "key14": "4DoyDXKcfPv9tH8h1GKKurbWAU34CeLynG7RhkqexFURsqDAM7bTfhXzKhNhgVpP4BazZ8xns4Hs81HtwbNf9kJv",
  "key15": "2UqGr77Ljckd3SMre61Mwn4Kcykuj1UNeqzCXNvdWJMeLzxVbrgbSQLmEUK6oKWpwSTZDtnJYtvrDztJDQUQ1RmM",
  "key16": "3qWNzQTvWLg9A6UdU7Mdbgm2QzqroH9kfkg2baPkq8Vhfrfpr8JYQTUmYwXUYzBaea9AfY9LCqj8mWcxP7KXh17g",
  "key17": "2Twm3DnfMfRFNjBUanKhCvxU7XGNZAd3GP3k5CPtDWcYMbSkE4cpPdwpJVtuFc1pJ1EzgWMXxVvp1JyiHvZTXuqA",
  "key18": "5KQtWvLkDpVQkMhtWA5US7RpPtuJcgz3JLLhryDFnQ8X2r2rkaFcTzJJh5vsXkdAzrrPa7CzvfPK7tBENtBmR6v2",
  "key19": "bqp122GPhDHgAzZE6JZGnvJBbRdSXRc3DLgYwXhd1P5S2kR2kF3t15XtkbrGfSS2kqgktrrtr2syDnNdJaGM5zh",
  "key20": "5njQ6qUMLBUkDu5Y8HpsJL5vtemuvzzWA7HMoNxm5rJJNJriMitWV2kznxAx2KWrDNKNLFJp1Ccp5kxy5prkhcSp",
  "key21": "mN5bPd7pSNips8oY8bxEd8xN16B5JqNPYGXBnsigpZiW84xYY3CvfKLGnGBukn3ni2Wnijd4HnF8hAnLdYsHtor",
  "key22": "mhysBd9KMmtyXrbvbKdcG3yEQgrQoMcy9PMJCe6JHjy36VqTb6f1VocEiFj7QB2ePRutX5mxWdHsZnRRzb5kybi",
  "key23": "5ZWdnerxNbsb5dKjc6ijX3Ycu5DC2Sor7CFXnVtPf2ZC4si34zPvorpibqjRWm6xibD8t6QCCAUUYZbGnEiMXPf",
  "key24": "mJTQYpCpVNWY3bhBQ8x97ezydH1bPKy95pwVWeDfbaEkFXYAg6CsA6AevRCkAwVstzq6tLdrFBrYXByLpzJF3jf",
  "key25": "4AhQ8yQPn6TiK79c9skLDXveysVzkRmjeERui6935NXH8Z7zaNoT9Cjixpkrehwn9H9fDZVADBGxqSEGGuty2DFP",
  "key26": "4bcuLZ3Zia9XCPSuQCqBHUFbPkhhZXxdoSDRuN16ixoZYpcBPvKSfBLgjv9dJ77n2tZQAL6rfnQpmRTMbu3VH9CU"
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
