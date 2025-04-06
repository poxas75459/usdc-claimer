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
    "5JCmufecosb4dvZrfvEp5NDwcyAQUY2CD8etKyeHsQPVz4sUFJV3ETN1YC61zjtCnHpyyrsyTF5Ld8SKwrzLNM7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7AaitKediaNmFceVEcqFSvFhTje9FVDXVDB3V4roQeqLcbj9TvmYjhcF9eZm4FUAyqdFLZLCLQ4TxMvNCuFvuT",
  "key1": "4CqsJu1sjbRbhFECzPuCngLR5nzDFQET5PztLRwAi4QL6Vkdcxm8CmC674JPxmFbiX9b6Y3RXVvyhLj9fNmkpziB",
  "key2": "XMdbNxkcuboxYFZTMsTJEf2UvQbPctoWQaicvFcwPcbZ9K3tR9DS2bN6iqS4oP5aaqgaQu4rXuPgPVnvPzisjN8",
  "key3": "5VQienP3LLRiQ2a3zw6nLPGPXAA23PAhzJxzsYFzk3LjJWvU4g553KAxdp87z9rsLQvYCKSeTsNr3Fed5L7eJaFL",
  "key4": "3ZDXCnV88RVejJYrVRi27xuDyXaPtcm1DVqMy7LbjNziGcX4tBrCwkWnsoWMYuMjhTCM3AQ58uWjPwjoeLwndzfZ",
  "key5": "361z2Z9Az6sv5TtMR2kYtrua8QX5jrapJJRYsQ5oULikPK5LphxzggzLp6GAbLy4LyEJMkgkv98PDxMXisWXiViA",
  "key6": "2G5vps4kKySa2SSQeECeqNz8Sam3FY2Q2bKwpUyAXJo2TN3iv5NCetsXQGf7o6VsBpiKYtBR7etgSHTYHbFSgbAk",
  "key7": "3cEyA7C2Yy4VtmDvDjKo4TZhA4gaD5EKDm29AwSRCHNi1Ei3FUMfj3MFd6SqpU21UZe75TFhRGGBLiQK6beHPu6b",
  "key8": "2dhdgajjpxfYAH9cuhPLr8EFUhYNztwVvTB4fr2vmbAHxs3xJxmGhJQ9n8ywMtQoh3evzsX1QGf9S6DKJ31XnCaz",
  "key9": "5YcXyzKjNa99ThqqMwcGc2o63uCD5TPuhR84j8cgEmwCWCSJ5MPdWCPNpmzL6CGJRaURP3ZZQZ5QsepB6J96yNv9",
  "key10": "3ijWzhkC7F5uVnD3oTLvfF6WR4c8DTDwGtJbhNFUFTtqBfeUoexebz8eWNC8s5r8wpZadbjCGTQZ5h24gmNTjufJ",
  "key11": "2YGzByNfLBFssBcawvwgrkF5Rd4c16DMAwvWL3L4bRXoRnLmfevgQHYRi6dRj8vrs6PPJPUrRNBmCFBsLrXRgmzg",
  "key12": "4pNP9DhQtWrt686f466F6uGpuPkUQzBxdiNDDsSAbbPocTrmWE8MBPo4pUrzsuknUC6NRUAjPj5YcaH6KLt69ZUc",
  "key13": "34fAH284ysCpDNGM1sXnJEd7nFuvKwgssaAzCWxFCjPwrWtz88zimY5ziDDh1st2PzDnAafYDBQsAvZhtRR17A9r",
  "key14": "L57SpEj1Lrj8pPHAmN6srJWUTcF42Hbu8m7xJWaKdDc5diX9FKTQcstE2Xm8x7Rsej9AtPP1V4PXdaiseYajWWr",
  "key15": "5R6tzCCvj7GcAxHBXALr4jszTSi6hHrStBLRZhjuyuPhBzDpmxexCCAoaHEGfwDCuCKP9m2Vx8CrqXbnnLyDY2iX",
  "key16": "41Ce2VRopCgG6d51m6qA8M4bS5mYTQuPxYJk8he3c81GRN8jwescou4BGoqMh6q1FzXX5kLBwGMvEQSiTyV5Njk7",
  "key17": "EwtMoCf39v19pJm4fEzG7UkoyRMT4duyu7kBQJ6vnJJ4e4gBSTFrafr5Ua1CPMiXt6xszW4YHKYTt3moDkfSANS",
  "key18": "4G5jimwoQ1UxiXbacQqGEdAj4AHpdHg5DER2pSdfWMCZgZjwquDUNkHAr5rLjNyiVF8ThyV4KY7JK4jpokJpuUy",
  "key19": "4yqeSF9y6ppi6uDV3Q7fC2zAKUVVHSgA3MPJcwULDRhZPgUxdPttB6Yg1V6L5YD7mUuPn7UswdMWrCvpGY6gS2pi",
  "key20": "2Ly7kUE4yodAQuwRLTWnTefwZGU9RY7h5eyxojLqRXTMHJrVNZAtuqwW4FiDHLES14XZhXP8jfVh53EQhCDgvn1W",
  "key21": "f5AJxdw9gy5HAyRKhFnuA9pXiNwkRGJUKuKbgt8BkJS2ivnhenzxDjnp3owFdjpG11KZ1H8WhenKHjhB7CBt2Tz",
  "key22": "3XPXcvwHeWiiv9q2RJv1mE74oQusavyKEuJMbHPty5e7hijgUiU7pCuQdfFquAgpPsVVBRhhptBvcpG5jr2Acm47",
  "key23": "4VyfvXfnbNhBca6jAnRgoMiHXsw1H5CKwd9VHhtb2RHQ5KFtzZ4USXWZEHktEkWj51u7aG6hfMQNBDdqejE9QmFW",
  "key24": "3mHCi1EtiXUQznoD1oWnCyvxm9BrhzjZnm6QaYJgYrG9asu6yMtAyExBCLbwgCv8TbPY48Y8pUMwBX8FqMA7RrQx",
  "key25": "2TcoaqDajLbXFjFRwiGoaGYHZdMgkUkpn3rRWwgtxY7j99frNqmNxg2ETkkWLW4r7DTiZnCV7mLo4LYfynFfjFdV",
  "key26": "5ZbbQHN3Ewvnj5ZR4yUibXtQd4LWJ3xbf3vjXTvyind5esf8Q9jafdUhJuyA2egxFRCbE879ycgpGLA2qWAs3sic",
  "key27": "5VJyfwKaaz7YsH6k3RZVRVJiN8MHfjVQ2ppY8kPxhTCz7ZUsiVKQf97YAjFr2xkffWfen7QwtqwF6XC9WVJGmV3X",
  "key28": "2nZ9gysGKfcVQJEeAas93ZRNRZVRN9CSnResrPkx7ARqpEBSfcdTSwyPCLqbJjLpXp1Di1C94yucDqcb4kL72ky5",
  "key29": "4zUs1Uh7o53rSTDyxsTgdTXH1x5kX8VFj99xxpL6K1thxBGGaRvbCKFk5NxKAh5L2X72DnF4GEpmTrDNJwhDF9W",
  "key30": "2Nf4kKkCWnoexdAUcskfWSrzG9yV7sebiZwJL5b4e9Yjcqj2P6LWfvWkDx8rVaEJUen52pebsoNsKW3HJgT4PuZq",
  "key31": "2QVtNEhY1eZhy18kVSFpjQAHs7XJLMJZ3t4ACVKdCP7kpRKe99LgFEhEwPRVHd5SzYh3ASxNNE6xK9fj91Mrd13Z",
  "key32": "2bP5kUf7BgvgoBsT6eN1chFSXqDcSpu8KpSBGCSWJjaRyBLTSH5ThwwXeaiYLNy43fWAHFWVtt7FhGUTui4VDjuw",
  "key33": "64bGUDorVwF7rAxzUevjFHzQqmpwUoKMeuULFS6AdLhwjpT1r7qZjEQdfFXy8kbjz3dxoSy62PxEhqY7f8y8yCPK",
  "key34": "2VAyGrpKHVoAJriSJB8wPuDfuNKHumgieVN3xkViNzQZw9TkR4gqnckzpjBTtfxifvPhJGvjfDcibftBKb9Emmkp",
  "key35": "4PtJ31LCQv9g1zk21xGkY4ogynGyFf5epr3tSarngRKGjLC1mueV3U7m1EETi1kXkoUXbunwuVEQNV4CNcFzzNkz",
  "key36": "2y4kWRB6g1BNQRnY7TGih97EpteEL3ReXsUKLkvoiWfwqsidJH3NL2Fsbixfp5rd3K6AhnuFCAsDqDygrU16CeVt",
  "key37": "639RMHN645aZWZwZJm6nVrpRGT6KwkUJ7NTDxMaVZ9PKPTsUYoNgkQsMtddnweu6dv1cSFNdaZ1u1vqDZVAuoUAR",
  "key38": "57kkFd9m4n1RKd2FrEJoc5yJZ19xf6sAx5d4oQEaCL9zomiyE91shEsVjiArFMMQV8tVfUAzJqvRTqsVsL9VoY3n",
  "key39": "4p2EWo8wLrUBZ3rQwr2BynJ4rBoyvs2ANgR92B8injosU2uXppXNvVcp53ja4ym1Dfodz2vxEs4xj9EEFi25bbCk"
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
