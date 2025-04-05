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
    "2SLHZ3D3ubSNcpnb7woEJUac2xMa2inbqYhn9pTC9CayxR7hv7hYnhjwUCxgKRRdkt1P6J4GqqK5KcmgCcYkMxAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2isGDY3rNMB2Fc12KqKetN8SD6t7ci8eaKFi7uPpUQu7WeNqxfJZ6euTjpFA6akpJKk6YgjEyvMSxWmgMRbo1Z",
  "key1": "3c7UrdkmjvhCR9JDr6oZvYfedVdntCBDbPwwHXsfL73DNZKoeNPMfHoL2m9zeZ6CKkZR4A28ut76m7LbEeSNhwmC",
  "key2": "PPZR6r62D3xkMHcVQRD9SWNqWQtPom5A7kzW2xEiakQ8sWcNSj9F98sfpfo5vGsdLsB7vneSqomKGgM4rZJdHmS",
  "key3": "Nb9DyttqFKNa739zzhhFZyCm6UDuJiTHcQLaQSNaA8xw8eGjq6JUwAUBx7MjDapnTzcaU3L9Qz7wZ4sqKp4ZvBn",
  "key4": "3owenLuqocDFoPZCwzat1XTsuUVqm3QYGb6bo3qWDHu5XxK8QWZhos6wjtMw3vHfAwLLVyEuKBy1psvvmbULvZbf",
  "key5": "5GL93w1GoSyUJD9RT51CnyVsTurCvfpgWYw4gpLWS1GLwUz9kFj9YNvPBmYCRgfz59Zwuke4zEr1j8mF6ubQNQQQ",
  "key6": "32HoSrJnEtq4uPnwoGKXGvmKe1E7PbcNzBBEiBm2fpBY5Nk68zTryTc9mT4V9jtzz35JzcSDQvQRzDFpr8TkU7DH",
  "key7": "253kqn4SWJRtC11xMU9WSRm3X7oCvtbQdRQVeeCjWLmjgyzQcnPP8zvsagrNNpf9MMpkWPhpGtqJxn3FhBkcDAXc",
  "key8": "3uYeCKyzUAtv4HqqcaJ7vaKT5LvimKEDyPCJ46oCDvduVi9EHoe73r2boGfyYoQmFagrU8C23axKmwp31zXidXES",
  "key9": "3QqxMMJaT2nR7WpVxVbUYdAhX8KuV9JZxvWWzR839bpmPnoYVTrCiVJKmSfGC5LKj7JmHJuAeptrGKtSrsTX4LDy",
  "key10": "3KRxNPQfsRLKdwuhSPUSRVuWnx6KAcJpsj8MpT7mkFsCcJ22neJQt8aKdqzVh9esov72xfYHahpJUBzmvKYgY3wF",
  "key11": "2c1GSNP1yPPpZ2XPVthRZqRsuMaAyRvNDdAF3YrS3garx2iVrbkjgqBPzEpktVWgKLFYHKxgcpAUJx4yh1NzjMjs",
  "key12": "2L2ThdY2ZomMDKaSmE8gGuGNyxEwDrd86qkCPnKphsujZfCv2Erb6GgUSkzhWu9LU6LyHEMKWeKMXAzroK388zFv",
  "key13": "3yeWYNndP9fY9ZckQ9m2jehR2nRJVCpRXmHzb9Q5o1EFut7wGnETgcAeXUwMhCjMUioRuNjpEZStvPVn2Krw4qKH",
  "key14": "2oWXmhZ6xeWE4a8vvNxBhecLkp2zXTPnuC4211wHLCri3ByK7i6FfGv1wuBUqXMwHi8e2hM9oXNLrW8ZB4Sqf6Sr",
  "key15": "3Kj5S88n3bbfWtL8Pq1APrXospfzNbmCCTpfmRZpbhnEvgRES7r4a6pqXeYupzoZcd7kWV2jChNWvKov9hSE2Sxe",
  "key16": "2S5tfAgLKFWiBk9WxqzL3yfzQ6cAyixq4qwTEGqebwKukvQ4fHeJVkjoh7QTST6miprejtLcBWWJa4QmKFrq3STS",
  "key17": "5EZNXd8gpkHC4mH7u93YTs6SVm29Q8KMh2E8vpEmekrvjXCQgKnvFLuCb3jcN45GLwoUdTni8vNEfH8CmWKCvJYH",
  "key18": "4wDQ84m4jMhm7BCAmDwJgjMChy2Jp78dov376HR297xqXN3uCMYcKTcRLEvqiykhoJq1eu82SSXdzcvtPTDYcUn8",
  "key19": "5T3FgdHRf8gAYgeZzFvk2cZDdPCVKsSW1zZvV6AoCPwwKKtn5Mxfi4Fmn2cMXyHxRwswgjfBTZcgoa6kDPNs7Fi4",
  "key20": "MmVo2TE6x8mw9bAXhmpBLrBe8P62DnmUn7n1uHjS3HivReQrsGo3FFtcTU7Ag1Z5z9LFLwniFuheFotAEEAusZu",
  "key21": "msaTQXYdj3ATsFtGKb9XkCqKZd1bSYwDioYTeRdqxvTbi7baZfAS9G4mQZajEf26LCxCoFffLir25AytYesCTQH",
  "key22": "3iYUtoojGvpt3Eh169Do6tGfLeJvaP1DSnBSSZPELXP5AKrfx16FF5akrR3jxk48bvhZ7EvTZF8zPfZYzZ2htQJK",
  "key23": "3GPCNVF7RD8q2ihytgqsKc1NBRKmZkR4WjiiLKwDZgvV8pzm8MSTUj5Sy9UDMx32wStoxbYxqMr2GW9VGpViD3LM",
  "key24": "3raKYcXmnwBiFwsmpoXZ6tar3XeXmCYQwUXBE5wjc4pfkRSbtNZxH6Aok7K5gRXrkCX7pBN8CXdBJoYkEMBCAuxk",
  "key25": "5ifmZa5JvDb6YW4SgiUECVpfJGrzmtqmcu4TUgDhQMb6W76tQMDgmYmurHUznLbMpFhEQx5dvNn3BTDwn5NhGwPZ",
  "key26": "2LLNTnJdByWpgrjHHagY5gjJ8URCagSBM8LiZj1Xifs3JbLwZvNzYAa6tyjtL7yjLgmiDTWWDsWdixaBUihTFBzS",
  "key27": "2f3cLVa63XW3Ei9AT3xSrRdRvEYifXraQmVkx3T4bcwZAh1EJ5ExkELp2FiPtSpdb7oHjYAJw6mG7YHwkT625JU4",
  "key28": "2R8Q3AedTiy3ruTs9rmvgbd3gqt9b44DVRiiMX23sQdiLpgj9mBqCW7bgytqMkFHPwtQqnFNF98E7HGwZLiQf4vF",
  "key29": "64XXxKRiJTXaoV1ztjXxzXu7RFKWHCZfjTHwWfzSih7VKTVYPctRkPdbkQnAUqy9y5gfjekYKd7kLaFR87d7Tyca"
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
