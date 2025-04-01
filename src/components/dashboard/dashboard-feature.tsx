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
    "5Y2Y8b91fqHg7jXHWtpnHxEa93UHsQymx72uvMU5KHspX3J2xBtceMGHY34VfyexB4T8fJCx5PC6SzE7PM2yZHBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjvycYgQeJfF4x2mbhWF57z4UtT1chyNrYATtfTQ6CHfTTG1PLGy1cZ8dPzp7m95GyKLrD2X9oR4HVKf7npni5u",
  "key1": "5YpniVyW639snkjjFSG6kjuR2XUbht87qEJWQxiKLJMJxn6aeRTozCj1qegmcFxxnoiuzWxqWHBGNfbwyCvM16qH",
  "key2": "38jYTdU5YyeswnvEcUYe3v5Q2R7USDfTiEPTB6weryW6h4WNqxoBMbseavbbNy8oxKXCdWHxWxHq6pvkAT9zutck",
  "key3": "4D91GvcruyEVnP9UkzvaA1CMnwjCncPiaeEMNoQbcirqYCNSjri6aFPpq9QM1GGC5bciFd7fS5xS9SNAjdLvejpz",
  "key4": "5vpc2gYxy47XQwRcAuobKTj3o5HPEP5HjwnvoLh58oGt11wzEtKsVHYe6jEXqfwCn7pceC1AJmVNkg6vqijjAPmS",
  "key5": "kcGXH3Ctp9i31J8yRnFa1eDtqDZiLpiT6ZNsPpKjUthzVqxHNQ37a4bd3WpJwUrpeZRTwV2umExy6PGwESBEDSV",
  "key6": "wXJmaP6hfnRGdvmEKxBnsjbDB24ut6vDSJdi3D8EiSxZPfReA71fn1mrQSHqZ2FtMMgaxDqZmCNxG1Rb69AGx6s",
  "key7": "4vKTR5SZZgzcHHFqFbFfvisFrLyBwipU7RxJR8kF6Nk489YUBXGJB4Eo4x9Tauepj32VqCf74vzgg4Bx3p3mMT6g",
  "key8": "2A8Sg9gLH9fKM4P5NaSo1TcBsozYEvEsJeLW4Wqj7fxyLZnmQK3S9GiQweQn2T9vHdjQPKwagt3vKhAArBn2PKHe",
  "key9": "4AKEzNLcMFv7LjVsFNEumEgw267QenbUFHWcr6bnToiQsm1pehoGME6a6ELEdjcGUP6bQixk9mHCzWhx5Y74uhgs",
  "key10": "2pque7Fnb8pZZmaYsbV2NjbcAcvzWy6sh5oRd3ZjWHkvavhdHA3k3yS7Ed54TiV3EfxG4JbKBd5hGtbG2X57rkvK",
  "key11": "2SkzSkcf16fR82PuvwPxCK5tSYhvvGoymmqxhgp56KwhbvZxE6xwTKnFKeQ4FmoMJ5V6HoWVQbjEeUCYgYC5qJ8g",
  "key12": "Q5nJpCdabTiRHYvjSsP5U5hcEs57XkbTQ1WqhyQ7RgzhHPFXqT6TA64jyZfYhZ1cwBNM28kuxo5p4DkHAjTxacH",
  "key13": "3GXrDnD44oVMVpXUshrDCLfDQ7mjpkGtGnpYbPK32mkLcWnuDraTTv276SW4Auo7PakhoXysj6HMuNU8H88oqTUX",
  "key14": "61u1F9scmWSE4nE13B5hjRMPFKtzrgRTsEqof23Mv4w8H9v3LitcJ29tvDcbiQvo16vPqCPBnHBgVKTi5VEK7z1U",
  "key15": "35KWsmM7PYUExG5zuPezQs2XW61ieszWympMZb1zfbBAKZ8yrnGH9wckYz8jVwP1BLRPbsG3tsoQhQkBskvDCbfL",
  "key16": "4vmDk6pQB9jwMMK1VLoTrFx6vfsmmW3qPXHy9nPJw4vp3omoXhRh8y4TG5xgnUGa8LwVxADZuA2tVWZLb2AkUEa4",
  "key17": "2MhuhVYsWBNKuB2EZ47Rybj75ee3uv6z8N2hVEHnG6BfRZRb5b8irDtA8t86T8Pbx3cQTZk5Zw2gpzmTw1aQnBEy",
  "key18": "WiQtLJpKkqVsGefgq4nL6r1R13wb2RpHSwQffWTw9aaGfbE6aE3A7u79s45KCjAg6NKFHTLLgu7621GT8SJdFgT",
  "key19": "55WUuJcxTwEg7VKuq9NFzwcYbjuu6x8rG4s19NbvNDyWoEtbsUbWG9ejuRuJhGofUS7rD1EhWkhWq2zBAP5eahCt",
  "key20": "MyTkMXXxTjMuvMVyc9Zgm3xc7s5RP34XxxFthn78adxL5g4JvLj742vD5dzRJtFi8k97wuMfyVwT6B7wteKKEwK",
  "key21": "2Gq3BBv5tjW2usxgKKWZKbxSPREF46dxpAHCpytEKrVqQJdb7NAwdJXkb4QY5EmcXZZvD3YGWMoEu1GvBohF3Uuo",
  "key22": "3p6Y73scZordhuQx7fKwYfMoJfvMqhg1fA8rgTqS3qYLPe6AFsB5EoFTe2NEhEB4xqi3mka4YYUkpwdzdAs9vEM8",
  "key23": "6XFpBS2BHz1u41RZgogaSn43Kd9hNggwUv2xucU4wgpa5Tx17XrNN7fCkwSQLxjnTEoVEuSmmoc4S75JbroCRUE",
  "key24": "3sqDePf8sSc7tdLaGuy3cAeNLjKW7sktaiKpUA6GfJ2uLz868J4XVHFz1Mt4EneKszTTFqQKo7NzxgSCrTkRixam",
  "key25": "3ZhHBjfrMUWrogNTndGkEDstxHXf4uU52akdDQviCZSwqVgsFGxkukhAEDkAXQwRZ9akmWLJDe7ecCk2ss1hNsg9"
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
