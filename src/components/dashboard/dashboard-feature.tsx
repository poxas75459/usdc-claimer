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
    "5ZGap965zWpzB6iNXeSZopcQd14FH5471zcVyJWBpFZixhNsBo2c9erPTQkatNuvWaasviGYfhCP1dcFt5S3LzDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGkS8e6fKTbVExJSRVjk8Hx5snUyLt85y9nJt16iyjkFxP3Z73b9NgxmtD588EdrhmNah7omcj4npV2HiyYuLdy",
  "key1": "5ChdWhj7orXTn9xobvPkpzVevMdEFgJoLKWYw8dkbeiVXuu9Bba15KSj2LDDFao4QoL9gmgb8bMSNrhGM6dtdDGd",
  "key2": "33mniuDhpmhB9uec9p8BHE3YfdABzmTk97Mcgu3NPREwfY1i5b7jZoSGRBkCB6YvJ58WBu1Kk4v7a6aHG3tJHYeN",
  "key3": "4M6NqNzY3hnsqdn1YckFN6TVTJKqqiQn2ZSmTtQaLPgFj6mLYjh2ozAHcYYtS9BjFFviusa92FxYgmraAfdmazko",
  "key4": "74jwSzAAjAPqhZHwQ8uESw5YqeWgkq8fJxfz3tVaAzGmqAv3Raab5LqPjj35oVEj1eVJoG9CSHc9jjQ83y6XnJL",
  "key5": "xL6EojtGxtqmwjJVytkKekhgsR7oKebAhBSZSmbZtQdYtizxk2tsNH4DqcLCUUzrSVAWHPKnExsgkA2LurGKJfG",
  "key6": "2beLXpzrVpm95ehY1nn5eCAM6LzH19PAifs8deboxWXkcpPanio4XNpgPjUAkGG7vSziRWo7GWVv5pSuJFUEWwAL",
  "key7": "2HtNMPfihq1wu96AJi8FsEccpkxpi9UcCoXfoRfseHS9G6HiMZ2ZGrm741T2ZWxDUxfG6ADjex3yUdAJwW1bXGgx",
  "key8": "4yhsvT1g7VV7sWupMD8CmanNXXdSPKzU3eLd5CTqUER2kv2ugi515LRL9kk57SDknpP1aXkqj5bjHTQVNSr6tW4N",
  "key9": "2ZTQYJ19R72kd2e4zwQLyG1baGvEZoVopEqcvDJTfYY5tcsxz3b8q9RA9NxYEHmABfNPK92EFzPkRdZRkMsZm2of",
  "key10": "42L5odSsqHRKEbsHo2APd6Tu5fB8mXPLKDMekZ1aarRq7DgbUJhV47r37KLRvmpXCzfyTrnXRBXbfj96Rdk3KFAr",
  "key11": "5cB1Vy9wJ7e7ihD1FTpYN9BGyKE9u1FHwhHah2DM5UhXHJm49qGYAJbXmMp9LuAAZdzb4SVTZFhji3amfsxsKo5D",
  "key12": "4w81dHxrNT6HVTdNMVtGsDJubUHZ3HDruWY5YbJ414nnX3p5TCSV1yWJwZaxRVWVJZXYmr242ior75i6YSgqx25x",
  "key13": "3Uw6nSWG5NZT9qfLqHRfHtfK74SYAW5C2jPL7nvPWidBknQhPz4vRWHA9enombSV3Esw121tqY4UVm1i4f7NBRgK",
  "key14": "2W7vRHieGpFm3TZHwZQkTumvsE6LfrL3RtMiBNGTFXZUZCMKoMVPjwDpJpLYd72mPLEVSDCdNMYo5LXpLufxjLsN",
  "key15": "UHJwifMZRjjD72muS9AJteZHPV3vJbd86VkZiUeLcABQyNpbmztNKCFQYRW3zgqSomrdgVHKDa6hDQ37mbwRoDu",
  "key16": "5aT9DBZdGRNnqH29WX9PBKY6z1LS8hFJJUCLbwauP6fZpD3YQ3W8aVcyiAtR83umxtFGcGodcz9iN7mr56ZrwSaR",
  "key17": "2GVKAv3mcyRL7F9NJK8e6ia1xg1pZHJG5dmKWbqhqws63k5FBsHEU1MFxqKfazdkpg88Xptb8318ugXajeSu6Xut",
  "key18": "65sFLcfRhqUfQbCxcSGKSkd8nKUg8mMsE3PYMCWh6LYxvmyfcFJX1rgmdS88AVfR9YEQbRorPSgAC4iMM5Mim7Qa",
  "key19": "4guwc754Y7cCkidXMw4Ha55bhbzML1kFq9k9tPHu8WL5FGH4igAUNpUuQuvH6DEzkLnr3po3xqVvfiMJj25KCGzj",
  "key20": "2jB7YYcXVh4Fkydi1FUDu5t42qLqH8DjG9c2TDKoQuYpKSFcf4TGXf4DuprR1sagKY4dS6k6fL8G52Upi4fio3B8",
  "key21": "4LLfj6kqnsN7hrbf69cxQdRaJPNYu2uGuePQPC6QbzNYez94BHz2SEhu8rf9B1nB54b5sexibxm7b5eVQ7GiSFgB",
  "key22": "5MKDpWXteJoaucquezez3traP9g3BCNriHp8iYvaXhuH5VszocNiEWCJTXGxpgJVc7Ew1q6veR3DPUyk2jvAwVu7",
  "key23": "5Jqf4YhWyMXT31Kevob43Wn1x1QjdUHqHoan3J2LWyKHR1oSY28BCraiN9Wn4GiSyjB6ZTjHPMafG6TicKV9dwrc",
  "key24": "3Y7trkfq6ZDF9fpdE8B7JYCkkMCsLGRi9Av12jbZwqdVqgEku4S3CFphVoQ9FSkKVj8uuVueSU2taHmfiBtoVKXk",
  "key25": "5kwBMsc4RoFCMXsCieqAdBwEe4ykQn9QpC7TYSAeL6XRVa1QkpmjBztNG8tfTXnpYmh3YYf9sHUhYKFKEcuH2nHP",
  "key26": "51saB4Ldz4eS8Gso9VFTChdJi7vUgLWevRmgLxJKrxFXmbSKv52qjDtes6amAZeSEUzMvFRLFdFEVJsnzuTmxAtU",
  "key27": "3T2CRceUHNBZBqYaRL1UWnSDoPs5SigTkjntbJBKhJBDMBAJCs7qSPdgjLqunHcaTxgeWdYjHbMRLhuiNznPw5Vk",
  "key28": "3c1bFXk6KumfkhsPX63hG5vDWzE2XSNCCkVDranq9PkJuqKDF2DFy7nTBZu6JPCJAHmKN14VeqEqpXsbG4gGrbbk",
  "key29": "34RbcmSyGkkwB58NHNgCr3vpYmMm67MBnTTu7JXoBj7KCngwuquY8aHRmHJYLwouazMRK4su2drwtApEtDjwn24x",
  "key30": "VMpWXaMQEeNQaLsfxZmJKq3VaSDNoX5B3ZTDHRxUfUto1et3eA4Qkn2DuHjXT8JfN7rFQETcurFQ2dc5DVe5oua"
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
