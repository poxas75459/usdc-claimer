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
    "2CUhiRPWidn9iSmcVjnKHTU2Dr7mfuoaoWr5F3UbudfpZPBRLMQbPBcV1gUNuBVEJyDpHdTnvHtTH6v3Z33QBFAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VtRtpNYmhFJbR5dk91zT1bJUVFuPrKTCR9di8rddWkXmQ8Zo1UgMjjYm7jEWLgFAfowPk6R9672X1sQ1rv3D4Te",
  "key1": "dXMXZpXtEcL7EkD9t1tmHcpQHxZ6owyhFxjQVtEzFRuRn235AkUWAoMUoCjTqkFGbwT62LEXSRf342dmWtfhLYg",
  "key2": "4yKH4W9BCknSksmGhLbJ7dywVQHJQCF99ibrq6R1YUQG1yU9qq6VsAhGKX5ziwQNQRv7NpDwQojd5gXYD5XwkMhe",
  "key3": "41Yk6AZZuiMyhEPXqXYomaK6DGgqVnU9aYpf19vLkVTMQ179KGy1hozV4ceYXnoBFAiX6xPbh2BsmmrZKJJPixrk",
  "key4": "5dAGqkywbyttC8UdoLuEv7MHKVQ9hnFzZkXAhf6kTNoY4TktULt1LhUDTpy2jonk8LRckH4TJ9w6vHBV75JtqBcV",
  "key5": "55RV9DLeg2Fwwp6utpx7uy25TxCfpaWMD4JNXxjKd8XgnG7gP6CX53jpU4SCaUWNWKWKV2gZhgRae1ysjihhD8LE",
  "key6": "5yCK9uEzCrKuFLssQyARi3mbU334KiMvZA9skczUVjRRazmZzsERyPHU9xjUbPzm9LsfaJCe9sryoJvwtZU8zEyE",
  "key7": "5KKDb7hUfwY3p3f73sZV9LTQJLfXbsHtPcTcc5k8PpegKoAoaPVPSwtpRjFNhu7ex8KrQ9DreD9YsapMe76tiirC",
  "key8": "gRvTExLmSRpk9ckYBB3J6Dyzp6Rvj79s4AckkSj75xTTBvcWjTFiSy7FEcNtUssNMZtMydxRPmxsfBHozWxMs6F",
  "key9": "35qRENS8jGuuMnazFfRvZcwXaAZe89pAumHKMrLNVjVwE3ve7E8cnqp7Yv4rs2VZdbBV6HESC1agvT1YSY4f9C1z",
  "key10": "4k2M23FEhyQfqWPmZ7deiHFqmWEBwGoU327Vwdu7Z4H9Ra1hm6Rzj6MJo3VEXBAHPqGoRp5GzKFGRsXsGk52nqmE",
  "key11": "4dkp7bxDBrCC817XoGKAyD9S7dzq2P679xGLRr7HRWq222bz5vuEWZK7LLkemUUSYRh3TEd6H9dEpKme83VcUH4d",
  "key12": "omVtwGov1kyET2j2UVRSX3RJfNpLGvfnDkX7fEQYsytyjQWTYmRaVg6c3E5P6ECF6k8DeC5RydBGe52Z12cdgrX",
  "key13": "55SMk7ZXAsp6rQ7oScMccBqFyiX3fEtXFfrhMd1RhEHMpQfsrA7ebzh64KcZf8x47dvDLu5endsN1ZNwmqLFA4Yh",
  "key14": "5u5GkkNb4kKBHnEYtE5aTX7L5wu4R2mEvWdw3st98MesnG1d7nqQUWEv38avVg5M8Tz2C19wWswXg8KtLGNhCW54",
  "key15": "4uWGCAhCnuj1zb4aKwvKwsemFxA9E1P7AkYorrcmoqDztCgvAUchw5eL9hVviumNNTu47Y1PZXXSQKvLfnLpb7aa",
  "key16": "4Bn3y8eGpA2HeF81X1uYngcyNRmB7PiWCiAezKNN78naJx3iVnrYKzv9HzH8wDZA1UdM88brwjiVhymP8mmHhduN",
  "key17": "4H4dYvhHDQMkPnbsnR9Q32B6QzFX7GCKJw2fcnJkiUrgGZpfdyZRf6X3c6fPXJcaDsRW4UQLHQMjeyBBhkUe3wkQ",
  "key18": "4bhG6kWVLHX4Ad4FvAhmNhthRFch74TwDnBuTKKZCjmLPXA5uwT5r56hKGAUYW1n2rUX2qfaRbzV8utbBdcySNtA",
  "key19": "5EvtpbPgwXancbQcBGBSdnepVmKgxaVsyYARVeXHsZLqF8Kpu3oGvRxFAo6eDFX6DeyjvzdAHTdU3vbi8pno9hh",
  "key20": "P3LVmAsmufacL6vwa2moeJDgTpSE82s4WoaqjYCTh7SgcXmNzf66xEqS4RSeth3qS2uCdnwyfMCjjB3Wsqzr1R9",
  "key21": "42fM3WNiLRBETUvXQGnCu4t73WEirEXcVkXgQ4C46JRciNevDgJVMw8gNVdqKzfNG6eRHQQmLPhzM3JPb6ymrnZX",
  "key22": "2M64skm7ScZUya9KAS3H6aScVLjUexoZLAUGA75KqLbnKhQBmCFE42exwLFHdn638qJw2o4Kp4ZCBjmxqDWomyXv",
  "key23": "RgfUQ9tvyk3c7nUYnVpfh1FFhUqjQ278UFbBAeqjqDhThyZxhK47hdXiAZRJtWD72rTAQLZQAo43qrXqUbF6Kg4",
  "key24": "4QMG7enaPCHPXz6pcHubTrHdAe4NM8jA59mm8uY24iFfASXM5PjA8LXxc5YYUs5YfcSrT3gNBq4AMLco8xXxMGMH",
  "key25": "3fYKtXYpb2YUPB5FLeeRdDnAfnV9HByM5whiZHCFmADKtvLNjAHUG3WdN61NhcFn1Nr494H5iVSDTuedvNpgi5yM",
  "key26": "jULXE5bg9iYEgeSoqBShof5YQeWGug6Jmx6CiEiUtcewSh5sw5w7GdoUrWVKKBodMNDt4BbAwCkDDAVQAPw5vtF",
  "key27": "Uo5Ygs3GdvkCYpGYqnbGnwMCXd8ZN3sLbH7r1NYcsoMnS2eZeJ78vNmToLymuicHF6b7rCzN9gaLApaX1pmngnf"
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
