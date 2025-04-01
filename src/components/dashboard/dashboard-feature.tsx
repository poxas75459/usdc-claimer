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
    "3S75DTVJoyknsKB3oXEHunsXBMFw1Rh1vQ7f1DFsy9aKUugL9oXkUkSHKFaTFi3y5qiKBZ2PCtbxowWgSsfcabUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UwLDGAnMB6nyV4NxVndyWe8pYSkFrDnEyC2NnPfZ1yfVdYRkCn8q4DqxnnUnvnL8wHkBS3B8p3ukNy7BiEDKZfj",
  "key1": "5pkRoYFWi2sDrwush9yAUqiDPRdvY3HcVaee495RsYNNqArijDkheiJu7bzdtk1o55fbrhCUAExZr8PHs1kqEzur",
  "key2": "uHG9ztzTFGgWf52ojWt9KATUVpJWk1qaXEFv2vd6ZyvdqQCEeudNuD2CpwUyUxcmRhCbukM4qoJvhoEV68o3X1y",
  "key3": "2RYakpMn9ALqoet4WFGzRAULu2xG1h8kMFxpQoX6nP1xjz7KNzjhJWjPBszfvQJidfA9AjTfz7R8muryGyrZHRX3",
  "key4": "2NdyQFF8sym7omSi23UdRYjdYdp8WFFE8qactmyKvhnGFzMQegXvZ2a3ry6NyFgmnphLJpnQmr7F4WScVrusQVpb",
  "key5": "ybPNJDvbB2Dv1wkJGNdppi4GwuCUbsyxWcgM14NjY1C425KNV5o8o7NnQazkZ8AgtkmT2uJEAaZ3rQfF53RWUL7",
  "key6": "2k4KCgYpjB1KJKyZ4T91hQFywgHqEhvUH5tfGhuv23v767koNHkpbDbMg4Gmk8uW8yYtpGdboeciqRsWWHLgSSo3",
  "key7": "2jSUUBdL9VUt2ngUr6PmwhcrfmXUMfP3MrK4skSBQjtVhhj4CVTn3vs8gsmPAtrDHuQpkoWsT5RGibuUSvJAmYEr",
  "key8": "55eQbkBHFcRWMsNZBwNK6NfZL4NXMrMSMrvuMUVNcFvbWhyyHM9qMN8KyoRa8Lhk36SxUXeE42fVJbqUBkJJQxh8",
  "key9": "3hSyAZG8A2x5tsBtwoBeq8X2jFiDjQiiXGxCQ5iMsrxypyVQ54dwDGEZXCpJcY1FEQV8JxsSkE6YSjzLyszAbizH",
  "key10": "4b2TPdw4imsxSgi5zqEJnXv7pxWFHmYwmzFN99v9dPDjMEf9pBYszFZ7ocUMGhVwobq5Ue2mDimT1UtUdZC81WdC",
  "key11": "4vfw3pMMFgbgNZA95u5obUefSVHW6EUaKe2zN6XavCBxRnniJ3UcwA5TmrX2H88SvovJmggukP7vMZegtebSunvz",
  "key12": "4HMcZoyNVH3AsSEK16LzTnQRHpxcEWEEQ7YjBC3uARtHkhPGtmhpbDnLqDSQiX9dkLqeB53YKT7xBneM2TV2qEBz",
  "key13": "357JLZtmQ2q6eM9iSsUFfcUGuQqsTzNAkDoBhusHjsH7ogZWuNz67dfV8KJnBxGrq2XSL3rMFr5ymFtyf7K6UuBQ",
  "key14": "57Gmwb4ujimxancW2RGt6JZdWbzrVfucJM2tkT2jB4vkqoKhk5gHCkCxEvhjNz3ib4Fnf4Y661QR5AV23hGhHi8N",
  "key15": "AnxHq8XTq2DLTXRyKf25uq3y5EQAvPExqXCnda8skm36zQTxZ4Gx4M3NiGQYVh7nCsL376NionhSUV3YD9xgEVa",
  "key16": "5xWhFcm3jG2vLxNbY19wpF9C9SwL69fkfDcXUXsj19Wh57APRac4PodwX9HKi6RHP2Ye746k8GD3Yzjua4oeBDbK",
  "key17": "2AtUVYFQpoo3vdq2LwnJggiwYQTaVHGUTANeZvFKiUuzNEEQfUWb2QtgzzKjqouqzwVkKjMtffHHxWD46kUoDYsy",
  "key18": "2p4niaH42d2tWFLqgAVAUbk1s78r5rtiYbZQvgoeWsvJiwV8bwWvZ2NTNH1zHuRevyQpft5z8N5NBNcpv9dch38h",
  "key19": "3mvssuHrR6MuM6kxPptrZ37r38bpH1cBh5BfMc5fJhZmsak7CqJ4FTvfLcjHua2e5nKPJx1czyGDntyx6hsT8tF2",
  "key20": "5thGQcAWPgyFoNtB4QMuH8Te1Meyd9bXCiQ1geutGj9Bsah5oWPygn5uPVrNKD1NJEPhVwdE4XUJkDAqnXbNXgJR",
  "key21": "4PTmtfRycGxnuHakjyubvwRkCexLcyfDsnJxY81PaB13JShkBAZt4AJZUkaw3B2F4XB7VweNVdvjPnJ1qZC26GyY",
  "key22": "5ySzeZ1tvQx89pCguQmL4KfsVAK56YyVaHwqbfg7tXYeMjqKYnSUB9V3oASZ1PkRzi7qmqDqusWGpcp1QEF3cn9u",
  "key23": "2fUnD9XH8JLMPGuAZ5ksDkwLVQfKEmm8Rv7KqhYdpdvADG3fc76ashcad1daHV6L9NBvj679KkMX8v5D6TEeqb8n",
  "key24": "2bdy8E7XVLLS3TiptYYZCe3QuhmPXcbcsAUWN1KQzfhtSm49GtqNxTnCawrbHSzopbx5VqWPqsLx55PH8ndCfHLt"
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
