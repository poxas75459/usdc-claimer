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
    "wi59sACRY7Aq5TFDSFv3sh38pVdu8z1TLheJvvmVg6CRpJkgBH2s6xYCPt2ddxzkToVWFwU6npJBXYNYBAXc2HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dDYJjAmkgHeWtui397ywKQGsoABz6rXD4Konfz2YQJynvtvHg478PvaUVfTkbegsoJaST8NcHZVDK2GNiZwvnqa",
  "key1": "4Mdh7x5AZRyCvTr7sBxm2Xuz1SjmVv4DDBfHJcpNJtTEf6u7KthizuG3BZF1MhLpBPKk5nDHKbzJJ52EZ6tVmCR7",
  "key2": "4q4gEMYSq4fybDc7PxeecjK274pqVN8XvzXfCP2HBKHsKhwbRpt4K8852wayobmVt9BVA1oCQM3zfYA6rc31svYF",
  "key3": "3Dzq6JxbmKhwi4CgCtswcKDkPSdSx3w7HqkgRn1UT9siQZZ4xVK1XQzdfCrEq3sxz73ukCiWmKGLceDtu81VcEz3",
  "key4": "2vVLAQAHbuNGofdggyUUfWuxn4y16QodMc8gF3YztWCRD6MfZBRkoMCNtwUf4cZqdnbGym2sgfvWEkFEieVtvsF6",
  "key5": "2Yc4gZMGYDirW2CSucLF7BPa3NcHUo4yYqJFiC1bECDx28y5yzshtUWSVxMLPp4hfxc5SwxPTyBF5iPZb23LkY6r",
  "key6": "4mJWTy9R2pCWWPMNzbgp681Zr1AUnp3cQr4252Roeq7vD9y9ryJ8BXmPSPLquUCnsN4z1VKKtYJpKxCZy8H3Kuxw",
  "key7": "XvTpW3prbC7Ms1NJnfMkVwDAGUYbBD296GQEcChQog6Y8SKutxFBnxEP61TiXiCUNXkoGRAs3MnqXUS8BCmPEVt",
  "key8": "VD6oe3ZzifsPUAPQHfgrpjfg6Ejg7e6xnmGndeafGPSE1Fr8RC4kM8C34LXmjHaEcJrC2th2pAZmjG6u7pc1LJF",
  "key9": "XfZcH4xndsrT3EjRfiN9hD6NxSTuq8jcteBmbyzZdaYJxX9MgsNEieVhwkAJAMjezY4MCmVWHqtf66n5bKXDAG4",
  "key10": "4GGg2enwV1QQ9QhfANYbPziYsCxcdtjwMw8HcU2yoaCm8oytXNJoWXetZkQ5ruueGDzcPBa77dXVuB9Xj4Yq3GwM",
  "key11": "3ZhHVLmyNbm57RKL7qQrv6jS2uWuqZr93inoSRHi8daxTHTPM9AQJ8JNPjydnsXbmTepMyCZ36rU8LNEek8SL57v",
  "key12": "4TrzGEHBboPEwZ6674L2xJWnQbeJiqVMa4Fjt6tzigF9zxndZ4LxmtHjCXWKwwVaAreV973TmR44mXKKsJLoti4W",
  "key13": "4hEdL9TdPPEg3u5ga9FBM8u691verYsAKaEEsjLubGFZ8dbrjD39zvAqCE1xH5emogho4T9jFs9aJovaR492oX8y",
  "key14": "ud9pUumuXwBEuY7yHxf5jwrEELyVG71jAq3mX5k9KMPiumWmh6giHhu7uMohngskBBc9Q81gLLEiPNZ9eob488b",
  "key15": "55srUXWp8zDZdFP11iLDHPervE6KfYVweddySgvSq9vfMtbKEpv4ofdhofDX7EioSGgk83Pj9vyZULzGRb91Bpzj",
  "key16": "1LTdm6mqe1A71sgkXijorFZ4JDvScz86AfvzaxKB1urGewzK4qBuRfSRbYSxvkaVor2viTvqEqGECWM8gvAxYru",
  "key17": "4DE4yVWQx5rRYvweNjYeCAG9fyGU9fdJ8HiAbH5ztGjAHkuvvddiiLdi3r3CMGjypszpKKpotU9eUDsJYdQtijS9",
  "key18": "Z14bBjCVkwkj5iHyBEFzqgVov9WoZJiSfFEA51QmfCEhjStrcZJ2hbJ1iv7kho1U8A3uJQC61whc3xWRo3VKzkS",
  "key19": "2ougaDhKNLNc7Wz3rSxuECjSDaAVFCEBShDUu5X67GXS8qwSjZcdugeYvxXbuEjw1tgdJWA5qrvjCuChAnzcvJfo",
  "key20": "5cCCcy4AiAkzQCGGnmAqeRG8L8fLLcRzTgKAFXcYV5nUZWkv5DqWhbhqtLoCNrRPHHBGiCuix57gC5nzy2ugQFdG",
  "key21": "35jzEowiqGASXVuWXxWv2GaLme1hXdwzyFSwro1GxFRYvC8x6cMeytbMh3EvqnHyEeTenHy62xapaQJ6R8rEy25e",
  "key22": "3Nq2gM17imCG3Rjik1J3ByDxmDaxRsJ6jCyRdyXqvXuzpBdocGnTFrWBUQY4mbwbD6Rv4tkNUhAoDMwgnV3ZTtg2",
  "key23": "49yFkUUEzS9efmGrAfa4uG73iiRdBJWoJNBhQ22k6gfVVWr4ZBuKCz6QFoTU2trjhZa7sYpA3rpYbFzcp3wqSva2",
  "key24": "cDi855mYAuA3dGpxTjuEjBLfFbH6ZAkZ73tP6XP9Kgfz4PVgUHYPG9uconMuXpu92MKoA9YCRQEk6Zq7Rkx7av4",
  "key25": "6FzHy17eqeWAkUfeAyhbby8NZeeDy7Ny8CjdVoAZmSdrZq9ExmKDyTTvGbb7VEymg6U6dtFN5im1tfbUsQXWSiJ",
  "key26": "4iewLDUfnYz8AmaahEgERxo2oWavMg3QSSGN8r11XePhPV4PHVgbxtkw9RQLLC7pUqtWf9jqBWW6raFfjDyJp5kL",
  "key27": "2crqq7wEDMwkxdv86gNXABhT9LUHYiYpDgiakr2ZbgCRTtB2Lv5HqnZktF3rn7CLwfrk9GF3XmkkFy6wsbS6ZViY",
  "key28": "231x9Q8XwhrVNdhQvXDsimQVirkH9kGWUbkcikrWAZ5YDpz8GHZZ2FvEgjCCdxFp1VSYGTQTMS6wqdQYFhiyrtz4",
  "key29": "3giWDpqtcaJ3sSSARKykeFe8cvSeC8pKc2yAjVBBFL9udmGdEDtNyHDHHt9EaHrajUdZ95ybF6iqi2ppJ7SPfXCd",
  "key30": "42EFkrJhPJBh29B7WRNYUdV1526fsiipRT1SQn6dtHvcLKyzGVuWzzaHNLXRziLFo5WnprroQocnFPfqu5R8HGUj",
  "key31": "t3CaWHDPEoMdGGPXWU1Dn3sstgNj8PssunvDoqDCJHnRVKpDAD4LnXCmgqMwFXZp3caRefDZ53U14HpENuwS8w5",
  "key32": "3NrcBNDXQY9iWfw9KJgzHKrh9G4udgGV7waisyWxGDGkbNsFjK5HUbgjfBZbL1C7XEzKJ3BtEPPefHAAVXndiFSm",
  "key33": "No9UapQD3uzzhNU3F5gpmxbspb5vuj9rfPZ8j3nxZ24X14G2UCJZ4WRsjHKEpe2C1GWqEw1hb8weY7saH7RdLTA"
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
