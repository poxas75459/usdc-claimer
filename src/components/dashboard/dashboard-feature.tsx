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
    "3wJzSYsodAQSUoMdBpV6hByLGrKD1qphYgLXZg3PTQQjK5cjjf1or551CxkPXMhKfvd7ShsEf3D2CP8WL3snuJrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgYiM6buoofA1S3BTRyapADZoTkZoogVYszJ2YTWc2WpSdxs8gMXY9HkaZqqwYYRxHo3VUgMkRgPVf4FHhPha1x",
  "key1": "5roreacpQPbPKR3ry7mSuVk38zh3xjeoLeJvCeSJHowctDooxT9UjuU3MtUBuqBegoAj97uFAaJvsZNwHLCx98n7",
  "key2": "4A98M2S4s68eTpurffyRF4ym8kUJHggUgCmG3xHUfr6og75K1mVfgdGFzRU2V2roZR9UoavEWDfWHbQFVcg7oW65",
  "key3": "5T4iA1sm8GWCGTNwas77UhkE9GBWsgmnmzA8kv3yrVEJrw7d3o1SqHseeauY5BV4L2LS247HwrNwLP2dnuazTXg9",
  "key4": "5MvnEoKSqFVsnAqS5DrtVTDkUS7hpdTyRD9s3tyBteEXqJmgZhxNGZdCVWTXpsVk12GfU714SuLtzZzqptDiZdR2",
  "key5": "5ageQ1EAFWqSC6L6BSb8cUP9MEQaeCDByTSrREvu9XHiN8HbTr4fvHjr8TwqS9XSJaDmggBFdWFm8NvLR3nhC6vw",
  "key6": "3ZkHNkfr172Uj3pARnUm6Eju81JwojqdNdntYySQBxuVQgRTvZ4Ak9mnhUi4bsxMnYvCX4QrsAssPuVABnzg9Khw",
  "key7": "9HbtPQx6kGxbiUiLCdx5zHe4XQPPgCX6Buo3qS2J572aFwp85XS2QcmiXPuY3buiEsJmJf29UNPZSHBqDqLpHhX",
  "key8": "4hhLe5dMKuaUHZWyJLDaY2e5YwAnYNmnPqDL8vc5xWg226tcPEk9DuxvAaBzsDLnDdxYnjUDu1hfic3shxVGWkhp",
  "key9": "38nQ9dTiWtAukg5YpgpJCWVojQ6UYZEi4NHa5wQ5VekQvWNLtfHjpdXrHqxzNtWaCEuJgKBqrJgMZLo1rnvKe9jM",
  "key10": "2BvMePfcgvu1kXjg9Rs56JLVSutS3MFjyTeogTuHCT7Nujdtmae91WWievQAJhYotLvmrhubTMuAfDgKmF7JhX81",
  "key11": "58XwdZLR6wSd9UsD9VMUJEXAsdfzs8Tq5iXzGzMGGENutb2u41pY3LFx2Twz6wLcoWEDa1fnXknGAjY2t1NYjYsh",
  "key12": "2gMMMFj8QoeSFAKDkXhacHPa2SxLHPCxDoLiFz6ZVo8TqV1BXWk5A3wfwvLtTa2SXNWPV28uf4Psx97A3MjsmAGa",
  "key13": "3tZd12t4UXNAvi51bPVy4VanrwWydgmgumBS5Z7EuAWN8rmsFuPFPQpzxZasaGhfxRU6YHwcDBxd32AetGz7h8PZ",
  "key14": "56DS16YDbZKTuQFLqgyg6KEHVoWn5fpKDDBWUPapXwvVj3cBoEVq34W6m7ysk6MSPYrZpNgmnGqrnMTFHF6r1HxJ",
  "key15": "5WY5WZ3CYeG8kDYXfZ21PdK63n8i6TQGNvZ4ui6sS9qhvMXauzyjtK9186m3UzobcK7SiguVDzmZi2uykMqNrPc1",
  "key16": "4Ff8sy94fFpFW1K9acnCHqkHuQxn2iKtBfpZdtsLfcvhJmeG1Rje9tvGuX1d4B9kpJB2b6ceoimFjDpa1kUfKu2L",
  "key17": "3K5UYnKeS7WqbbJyfGLR5NTTkwbcaTB5KuWQXJgNWHCTW5w22gUVFczwoVvZZbpuTcfMBMZRFmSTVJ8syxHdGAsf",
  "key18": "3ygAgnJpymCEyzbPNCgRc2mr76ggrndfnt5BqJ8jHLgkbsba8a53gFXTgRCgrG85UCcDkFzjxP5qvSfBf6GWwWdG",
  "key19": "2HjT8VxTxKhm1sL9H8CcBMJRExqMc23hoM5BNvuKTJB5UL5aP3nA3GAV5HdEyberUr7fS1t9SaJya84JP4e1yCf2",
  "key20": "3yLKTCKraEGfC94V3zaVMWt5RGxZVVW6RdBJLeDo5XP7eJ5Rp1poEPjqixPUMQGikc9kmZXnLzGG8LMWUZrHfFQX",
  "key21": "5QwAhof1UEhstiEdsVYczBd7Sbis6URN6NcW9dCQR8DEEErimpkVKT5HtPa4Q9Sehx1NS3yTQjjs9rw2itdamA8s",
  "key22": "5wDSdXLfjWU7XLEuWN1pLHP3fhnox9oQdLoZ6rpYPMWXsmSXFiVyN2SKWA6VqQCuEVnBUqvnm3D35UrnAuDnzhik",
  "key23": "2dRqgs1bHWV84aN8x39hmoUzzXQSrTqifXEa4TbUyHVLQT5GTxJQBmofsG1rwEL4Pqa43T62QDBcj6Q7redXVQ2e",
  "key24": "Yk4oWpnVuASCGLniWCzmJKeNtnNjkQHnVjDTzhmvJ55ttBj1mgqqh6JUH44oivrw5V8UjoiazYxvnS88y3YyEEb",
  "key25": "2245Zv3t2piTTfjjan5ZyXi9L539iwuj6Q7jctuHcqkBJyjZ21qW7roTYwVTNWggGhVpu6eETXhjmZCnN2gStJi2"
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
