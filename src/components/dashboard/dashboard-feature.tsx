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
    "2y6QoWyPkjtCFiWCo7J3DQ1prqnfnhG58u31zhNg1CJGg24Y7BiZyoaBFzmTtH3tPnCXxhXH8nhZSYewN1mhTNPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vXv7f9ET8FMwFsG1fgDX5duptV8nDr1iJeNH3Wn1p5ckZcyvfWNP3a5c8MFka5YzEpZ7c5oG7STe6PhWYuiWebv",
  "key1": "5dAEYD4gbmNjnPrXKaKyR39q7hSzH6QsrrsvZfPEwuwgryDcsKQdjMCRYkU9pVMz7cGJbDX8CBBi53arwmWCHoQz",
  "key2": "2SPMu22R4Lf7onzYkvGakqh58QoppHVD5eT5BCgrnXLHSAToSTZjXDVdNXpJXtZqXyoBhZVEyrrhUxNQp3mkUHni",
  "key3": "3D5pAWkPhQeo4MbPM1uTZWWBHzgsiCdEBGM1bVUd7aVX3t6DTkQNiM2PKRr6VM1AgqLrbeXPicJwWCvztWjZ6Bqv",
  "key4": "4Pm6DQH9NAJKTaFxJWid2ZR86mddnKgQiKNazckstAd4Z249tn4MbmLX1dAo2LgM9nBo81MyzqubTEupiah5SRnF",
  "key5": "543RDara8NSQyhsa3RwRpFKRSCdFshdV76mWaN4fiMmfDZHvvCCxHGNfFsUnPhNBNq8nw871MPzH67vq9FJFgDdH",
  "key6": "3w8nMStPg5XrMgmspCuafgitohCCN4yeSUhK2hQ9Jf4dCGeP7vtGn2syeZkJPsJcqsEvvRwVmcg8U14YZaU8LStr",
  "key7": "63pE1NLonmNkyLWxgsPF8wpgMU47dqcL2SL4PCRQztb26QH1c7z9EuGt51rK11sRGLFhuG7nGREbYySAy4zpmnUq",
  "key8": "3WqSKJ47jWL8kZU8w733WyuBhbdF3gAukThfnab3JL8mzArgtRmdJjVaLQKP1jfsseHzVa1XDXitRPMnuWW2tX5g",
  "key9": "4LFTLiZdymufszAd4hNMpakKPUjVB53cpR8MowTrWUrN13H1Xp2d7GTPYdy1rhQqug5pYcNxU3S17vxDMSpfwCcq",
  "key10": "9nvZ9oDJezfTXoNQdZv3dUXZ3AidbivsyiVE5ff6pWDr8xuhAaKLoVxTPVZ1dgBUjSXajsWKc5LKgf2soCTjMVU",
  "key11": "4Jz53vXggtLg4wsq7e1eQZ8bkXifM96MF5u9B7XqNepDqP8EAcq29pHFvE3kWxAMsPVsRPQmGHGHd4rh9ZqRueqk",
  "key12": "3eRiduhHvkb8KUnqNX5st2MU4PPMPhTiDKJRcpKfpLBSxczZGBAtBibiMvBP4osfhkNjWMzvghrBVHCJ1DjCP7yQ",
  "key13": "3FUKK4gy69LHKcZWZ6VcXJYtwjh5ZcxAL4Xnyj3hhyvay4gYd6pA72qej3qdmFbBbPgFEKynYdKzeKhKE2om2Jjh",
  "key14": "4erkQaMBD6ziJbGQoZXhh2hrniYHBBKh5zMZTwuqrn66UHdSceqzUkKaxFTpoef4tqCGuepBhtmFey2URFtMwjSB",
  "key15": "2EaQcUYL7EM6WHyhPTZhHdjN7gUBppghtbxxCrUHu4aiwsAV3NZvGaiNSZdHPSpvS7L3mU89pmo3oWMD9LFudQwz",
  "key16": "4DH8X5cnxQV6ETWfupAXQP8DacyuifyX4ffZvqLa7AG5ehqLMFEMTaMC8G6UsKrx1tHkGu2FGeiFW9ZECNBPdgJN",
  "key17": "5QtfJV13F99sBxqaVUpJgj7wDSkJvv2RmaACHe8BGMkKKxJtSVPtZtfrTLpGxTXRCWA2KncCy79gTSBWX6WS3RF1",
  "key18": "58EFchxCiaHaMEsXPVJCtrR2vGSp5bE5kYmJMtLXzXpxfkdmcg5MwurfUcS9kDFhytDtV5WdYX4p8RpqQFBgLZVz",
  "key19": "2uA5XrAkZMp74UQrPafVabuuUhSvgrtiFg3xzCoKr2n21sLzGtGFDF6Sbeim8gjqbXEpCfH2a8dCeJUPKXwR6Ham",
  "key20": "4qwa24WZXbJK1JSBh6kmBjYT7iSnZfAWioBALRuFLZMgzgy1PXyHtH3dtGVdsn788DWBAWKjYisq4D41fMKNuTB5",
  "key21": "3J3LzFGM3obHtA5M6XYyjqi5xcdiYPxjsFpWYDn6GTVZP7ooeVu6QaKFJL1W5L2T3fJfdoC6k8XMaM1sGLu8o5rs",
  "key22": "2Yzi6awHu1j3pH7ZomaAJmbR8XAW9vEbdAvBC7jdNAZbJnudLLR6aixGbx7GMGpYAMzaEqsPUfdiuTBwVnTw1U5h",
  "key23": "3faDmf7V1YNaUo4Ywo6fJGJwqgmJcf3jvxACTeJTEZJaH9Eeh1F2QN3dPpYCZuMGFjCou3sX4SmzmgGH55jxex2Y",
  "key24": "3e6XHWRVDYMcnEojSEJ1Lq2FbHdsXJ16FWhFaMWTAJcnHa9pYQoQDd5wGJS3nUUB1gHis8kHkHXhm1nFuQtVSZ1N"
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
