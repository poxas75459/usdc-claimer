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
    "PMngfaXj2Qhx9HWnt2RDAxYJMp6sEeoqNdLt2QD3czw1qVsnGgvon9oK9D5rgUHzt8r2RocdCfneRGiAjCdN4t3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fXdyNXVPQh51C3dhg4FKKJ4P24d9FxVC1Ehm6cyqNMr7sWeZYRsSerr9drDrK9Sg2rx58BchFv2Er3LhjNSqtiE",
  "key1": "2UQ7Ypa6jXzDyjYGPHP8TbqicZ6wnCCXiiRwR3Du5pt4kUN3fEoKmAFXVPQ13gTHiAL2JEyGKNCg2L1kajRVBYfH",
  "key2": "3AnxYiVZRxu4yJp9ngFA2RT7A82fTmJGhSy4LjTdH2YSqsGHd92h61MbwQtjtPQfuesBU1dEhCyhxKLFhyfJrM5j",
  "key3": "7vENjBJWtN2f9vkNzPgbgATd2qrL5UoH1NYbcjghpwAh4XQ7h4uzCxvNGM4pF17zvp2oMu8wbjs8p7QXzx6wtE4",
  "key4": "58qgViatPJfjSmNGnvHW2aGsX3rFji3T7YA5mtLPb9NqZJCAfSuTGAPypW9PJkEo1U1QqcTfqeV33SMAisuDzZoi",
  "key5": "2dCFT5GL295n2UbqHTXgXtZX8yKSeMMSuk2MjdrPbCyWwUYz2cuU96dqLhxXhDXczuwz5BT2vDwV4u8xUhgLdyoD",
  "key6": "3RjTRWHBdenheZYDfcvizxnjv8EnnqaaXYfQbquaGcQRfNKnUo4BzKdxneAme1uQnPPzjSWSwvjXbLbkc6V4koc2",
  "key7": "3REKsRHQ4MsDyvvEv199Ss2tYNn5tdJUHEnwh9qBWJzWLThfYms9kQvV6X6Rp8LyaRCQxVDtbQUqQdQP77JjrJDt",
  "key8": "5JjZMcms8wq5NMr2x7vxfYSast5EZHw6bzMg469k5y7v6okB6jnG2LLT4JUhoAcW2fUeUni4wKkYnQ1trXGtiHqV",
  "key9": "5NW6yHbd1G1276N62c8M31zPZnbpgZtxmAza7huMKLdS5paZxKRw1coxbPXsXyKDDkrUsb5xB6RTWgSvakf5NcHq",
  "key10": "mWF47RgeKf7AJok1tiYUuh8iFYf951496KJuGW8BJJGz5iBQr1jg8oPgQFaU3n6JKp7KpPTR1yot7FRfw65obTN",
  "key11": "4RLSVg8Qbh5QCiTWgeyb9oLefSGMFF5uSuYfawKJdLT5T4F3DcZEXdztFnZorcEyydxr3uFnHQce3NT3REeXJSpS",
  "key12": "3ZsmyjRshr9Ktq3to3CJcHHRrPrZmP78dm6cwD3B6SSbrvAXzRpzAciY5j81dWFfKVvXabjLxAVmwjEzxuQwmh1T",
  "key13": "63ZS2bL66CZXkhVQ7aC1E2jWvUSfBtiJsciucM6DWo6hfqgZDPYaFXP8PfFRgQYLhn5rBAs6attCHBdDFufebu4c",
  "key14": "fxmZLfZqJYfmf5zHKXhHuFTNQfvZQT4AQKoCs4Ti69uzJ3FvUHaNhsDLrBDeEuim4HpKkW5hHRP2G12PZ9PAGBy",
  "key15": "2rJaLx2u7uHwgZ3xcS3kfyVBvkYdxjX1EL7asSGdKNvfX8WETQHixVHKkxTTfXDinxaaFPCC8iwWNDwnAEJxFw7x",
  "key16": "5JqQv6ZiU3H5Ns59ok9Lu7MV4nqRwua3w3AHK2A84CM5ouzJw5ddmRPXfsHpWPTL2vhxmWspoKpzQUQHLSb5nYG",
  "key17": "2LP12UUbHGnXEdbhdakukLUUHxhNYU4X5Tg5D8WK6D5A6ebGMhrRy9yh5NU3yC4vD9zM9hTwKaDKcVr4zUFnfG1D",
  "key18": "4TCwA6YcUxYb9ueryzwxaiqd4Mc6AYTHGggmYU5EC7xThmuBrU63UENJ1Egtf8QPGpsRtnG8dgkzPPfsN7BqbWhQ",
  "key19": "5jkQfvzQD72hsBS8AYUXaXgmNEfExS4YDnwFQj32cULQiXLVSa56hb46LaHFVnFJEwmGQaM846HjHJYYps8SswHM",
  "key20": "5FMR8cQoqcagb2fURu24DhcvgZcRDc3CMNwZPu4mmspv39TGk43vXbgXSEi7CCvGsoeAa6HaCzXtoAD5GwfJ1c5B",
  "key21": "25c19sJr3zHXuJvNrR5GGy4LmpM18peDbD78xuEmembh1SuyoPRwhBPn9AxhDq9Rts5hMsDjYSoCY5fSUGWmpQsa",
  "key22": "41WPHKffzC3dG1SsVUbxkK4t6d5CC7uabeEviBdbHrExyi6fTad1nvTgJMxkoEzkX5te75yRaYV8SG9zyLKob8jS",
  "key23": "2inBXZikaZpvsuPrxiQNtaSL7nmp7VdpdyszBPmEK9TmXxTanrtVa8ook6Cr686v8PbtJm2aUNohARoc9mmUHDxg",
  "key24": "uBG8vPVMQoRkfYK9gfaLr1i6XteeBZLJB9PjWUZUVkcxfcr8LfJ5Cu2gtFNDHaMBvoVXvh5iRmNRWtZWHFskX6w",
  "key25": "TNjqGPP52KAHtgFwLtsgfgasYXQTRPDxGicE84iufdyX649xpnFpYnqpxXLRvFogxnvUkHyoaQJkm5u2cLtF3LE",
  "key26": "Guc8Kx588miF5W9Zu2xewuWSN2FPp8XUJgXrdwz4zg456Yz9XYNkJTv2dXL4CjfHRtG3CkVgukPpVi5hAx6VjWm",
  "key27": "2GPrT6kJNUz69sjURwqHAp3TMhrZaizgzy4Xa8NcNbJDxognXXRA9RETsns5wKXaiyhHaaxv1qpBK5TrXWfJ1onu",
  "key28": "3a3uNEhsMceQ2qK8h4ihbbxScxFGM5JQhkEbp4cbRMfG5GGfx5jE6KuUXEXaoKSnbjH2SQzrxrzB722VUFnoZxdn"
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
