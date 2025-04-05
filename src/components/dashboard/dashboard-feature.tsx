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
    "3LmVEDPVgWwQipUUg5tUeohEuCy17UswU1H2RgGK267S2mENZ25MWJge5G7X93r1CG7DuksBbGoZ7dekydKfxMru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XyRS5zEATRefy4RdEWpqsC9BW6QRKqD2XAy4A58P9bkETz8raHcesqgiEHvpGDhn8KwCh6PcumTaSuBL4UwRGK5",
  "key1": "nUWsZg78yG5oEXsoHD5viH4TDddB5hUg3iNrYEazeot49sQTMN5LFQbbcaUYugrWnRubsTqPzQ5yL8wj17iXWGz",
  "key2": "43NZjawztuSRPebmoYG6kLc1qyNmuUUTKMfSg7sU1W42dpfQEoaTsRWFt2equg9JzjzXwjB1qQgZk5NTgqqAZYVq",
  "key3": "3f2jcAr9TFWh89i4iBfpZmdM2oJ2ZvmuFaGWvU64aMpi9kqqctpLoec4PmwdUsZL197U5vF2E4THGduEMDZfGbrc",
  "key4": "2o1bh7QMAouwtQLGbHYSj4nMxGQ64AWogyQ99iLyj436WVPDLkiw6Z9qa73U3oo13hN1uQEqZZAs8n1EJQ2zxjFR",
  "key5": "5wtrxbsvx8kVsUmHEV4TAwotHLDka3ZAVikj9bmMXzqmhsicYySRZaRCQBUvZwAq1sPYBpzp2EZk95dVpKQhFBuY",
  "key6": "9tdhTaBq1VQRvzm2GgV5MK1akHzQoKPLKXZLxfE74BqxFrmuaEReu17VXzSnVQfxXpSYjfzDwQ4DgEWm7DXTdKn",
  "key7": "odST8pCvz7qGKFAncbCAsmWCbp7dWyRDwjjjabax61o6pdcP615omPKb8E6FUyD8gJshdp6QS5FHSNQMcMu3U5G",
  "key8": "2CSNk6BeGqiuigdeNH3U2uHAYm2PAqzbzN4iKMRJhGa8ygFf37XxG6XUpX7vvaRzzqy8xNfT1pGXDFHL2Kkrnj3k",
  "key9": "2qQxHMw9HtMue6FNkHAaMirP1jJAK9PgcJfndD4BrrZwrNt3zwcFkUG4XuXLXUzyr1jvvvtMokeqoFXnfrSacjqW",
  "key10": "3shRyBSjUrJ8jrfCVwYHB91xMWJ86DZH5Dos47A3iQq3EEoJUn2T9FY3wWxjJy8MTg7NrPQ61oNeKVbCcevq8fHD",
  "key11": "5ykq3SYUviKioFt9aMPazcitYEr16ign6hmdmKXKs9caGUgYWEwQAujMdzbZFLVfgMtUcNtvFWrrjskumEGLzxwg",
  "key12": "3Z9HQeo5sYMNf257M6UjLo6sRvjJH6ju1xDqmwGJBAFGYRFrZZFCKwGZtJBgTK5sDKwVgA8fwGUmGY273mkzTM6e",
  "key13": "5UdazZEC89CupL64Hs4NPJ8D5KCsTFv7vAKZGd8ETQtp1YMJ8RJjXWQ8Q1S6Qwd23sffpibPaFP6LHo8o7FkHxvh",
  "key14": "KHtaivZi5HafsHzSvCritubGPbPHd33JezuYVzzcnWFg6Mmh73aZvUCRGQybqz97RecTZqt57v5ykAkk7wLqVaT",
  "key15": "VKKAJcwVM2jKjD4Z77F68y6TUVX6mMKsHNusTy1h7JcxFfVnhi44mHumQvEP2Sv8f5d8NFuVHpQuZV9oKMphrLh",
  "key16": "2WqEu7vzHsFtdWwVTDFU9JdqCnvYin6R1DTBrBHM7gzaEbAdfEXbec7n6McdL5uDWkNCm4C1wrKoxcPHrcFYGhGt",
  "key17": "25Qg4vm3i7XCj5MsQB4JAZp1wLw5Ejjz1vcoEdecnSEx1LgCwZdfv7Nkp7wBiGA96Jo6uHx7MUbwYj2HboR9UcCG",
  "key18": "3WkekyQk61VPSEW6QKCn2seQWvb6RwqvuW7DQHHk3GhbNHQydWazuQ7vV8QwY3AXbtQuQKzkDj2etWt9jucqh2H5",
  "key19": "5DD1QXZ6myJkofcGTGS56hLCzT2A2RzJaKRwXsogWbui2LnZi9pjruezTXz5XXEZMigxFvdTJhGKpZynbTjdJqxc",
  "key20": "3mqkFFGcMJ2Zbfg9jeXMFhjJb1VxznhuraG5dWeKtpnN9Xkd3v6w8UAsAXYDsy4CHv4Fzaai7jp7LLq85Gx9T3zP",
  "key21": "nresdhnPYbspVQLdhsCJ2Gu795jrDEbM3bZ6oAnw5TcwatLvx1kwQWRwFijBa5a36eMMMn6zx3L5wVejH9L4BPN",
  "key22": "21szwvstz7fzDmxrTXYFHSEnnysuaTP5fLPg7CsRY7yXoKBk1g74iUHp4uWwjCSgwi4nSrS6TVa3MB4FmwJKfDRK",
  "key23": "2LvLv6w119jb18gfTvFxzcrf9458WYoEeBQffuepJwG7eXzbU1KkaDSvnGYeqxNYQ2nakyyVJVcDgm47sJfhtp18",
  "key24": "3rNTSPXnhUzzPwQtjWdgbzVCTSEHyAFdyZ3o8jFtFN9FUZnEu86hCL5yaUxTqBQ8GovSqxG7ghEgAEqouVGeB8jL",
  "key25": "CLygNhckv78RTN6ABqLxpgCzn26bRD1campf5wztkzzmJYEEwQWgZ119BmBYWkULLXEC5v2MRQ3cjb3iEzbYLCv",
  "key26": "87NTgTXJktzxamdP4hjqVnPjiGdnFW7B2hLxj1KMhRhdtAxwVvq4EictfyanBjcVzqV9vwQ8odCExt1D4QYcCsr",
  "key27": "2E7tgjb4W8y7gWwMyn416pEbKthMiqHeuQDYDvxNPdLhRMxkDqVFk2kxJmfYLi6hpTQocFo6YygCHaFnLdUrX4hB",
  "key28": "5bD794JKnAsKHrdJm915Er5pvqbLxES8JCZnAbetBU2edrQdiHC7UByCSYVfV6c8stz6gTfs7LdChD2EPrBE4kNg",
  "key29": "2DT8JeJ5n7kPws1ZfJ6UXqzWwkWSmbisq9wkEd4Xkzq96kMgMwihEBY3UkMPUibR2Sq85sG1AiEyPbvCtNNXti1Q"
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
