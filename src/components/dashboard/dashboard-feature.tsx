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
    "3YUb3gP55JtHcVG27huaswYoHCZ2bimgt3VXuv3i3CquFuYzStvVHwPbk7FiDVMtTTt2i7NVNkK7sKUqU6cfSQJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJqW2q76sGMy641P2HCuGjosxKcgak9qotTNfGyaAR82Amzza1HJyDR1bRmiSDJB5r8YdbCcTcrN76qBv5naEBS",
  "key1": "5ssKrxakxoH4VwwVkhprvDamDuvJBMqyrYCVrUaqVKGYkFQKchLXvyv529PD4aGF16BzkZEizW79wJmESa1aZr9V",
  "key2": "4wvBdyrcsoqykAqugBw4UQ7g4dZS5bDAosenthhDZuy1gCGKZcyB4BqdPGiwHtE9xK6JaMWMVdDzAyTuckLRfoyP",
  "key3": "iuUpe3WMz6d6bVVeGMre8NQVFyddscxLjz9DBtNCqT1adN4g6U2pz21jzCwV5qwL42oaoz5vcpQsDqkRugexb5T",
  "key4": "4ynPAsh15pCsPsE5gkBy3WtqvDQcxKqXKm6vCA7HpRFo3tBGxMJQcXC3jL4F6s8KT6JNkrCD8rKuNgoXtbAWakUQ",
  "key5": "c2AGyVpWafYgCM4BzGZ7JrwtUCCdGupHY4GCQWXJVWKPb9qWJTxQU13CYXjDPujgHxaqnEjKWs9JKHFvNRaWSrT",
  "key6": "4CXcpUatnA3nNBFLGKJrhkgtMC75KkCsuMXXaE4Hq5qEDNWmfFzos1qWQ4VgzizvgvDr8RXokhYtXExVJpqiserx",
  "key7": "66p2rScozLa3Vf7RJbaZEjsx4QjJQiMg4JGoMmCSVKZ9eNqM3XEvG5rKeUAZ1Z3x7j5Dq3ffGFHtuuv7ioji4JPo",
  "key8": "Hw5HMZDERZqKw2Dr8Yke1UBsVFAwDLJwbusjfVyWtCsgd2H7ZStUNkUjojqHp9sHsfTFQVpuQRv6G9P8VsKTdmM",
  "key9": "ochshrUuBBjdWtxeHxXs9TiXZWLSVdTVcyAgcoFXtQQ2eghVCHAuo3vwkoT2rRKiURW7BEmvpGuJwMGb8basSGd",
  "key10": "25VNPkmcMcpmgYdsq1TUpif1SKN72h9wGP96JvHpDJdgJQPtYHDGGGGKosbRnP2kxr8vsVpUUJNrCHDTSJhmXnZ1",
  "key11": "cF2bbg8zr7CzQTb16xoLM7LyNyTQ8QcdAGyvYY2mTztSqu5Zbpj8R6SDyKCtad413o73JN7mC677jKxrTToAnKD",
  "key12": "2NCc4pVnuJqUihEPAqxEyc3Gt5PSbDtuFvwA57XHnQZtsNEHT6oR8K6ZrGHFmkbMPJDFx4MePN4Rt9wERoxuQFgg",
  "key13": "2kM6BERygbhj3zK8puz84rFTTyy4hTjFSJ55sJUbQDsySfDbBL3viFPTPcg76j8XqGzBzQWaCuM8u3fQS69NJMb8",
  "key14": "2YG57ue2NStuRsidM2swnrbR8z7SW1KEGFdcnTNYy57ayszfmZozBSSUkauGBBjjPHmB8LnLRGjhpirsQFusu8ZE",
  "key15": "4j1RFVhnMBwrh2nX98HjErANZo3LCV5tDSA85bsaFhFW3qYzNXNakgZyHNaddHC8VffJLtPtGiPhnD5GDcPwBQLx",
  "key16": "2UNq2J6NYgayKy12no8jtVMbwo1GiWMRbCvoqrocdrebu2tNfeRoXo2TR7tb3igucvLTjvDp6HP4ceetyY7nfbyp",
  "key17": "2JVczx6HHChQChGx4zC57sNE94nNdUKkk5FGV5FM4E273YjGYWVkM3NucCi5enq8wWb4xZxeEWD5zwgjRsamfxof",
  "key18": "4pCk3GPdtaZJp3rXCkBS4GZ1iML6njfcmkU6EeVjmzrWEkg4mPwuAZSxH3FjUhkMGJMh3Qtdx7AB9wWGpKb9Vr5c",
  "key19": "5bRhHMDNrtK2KRdBqVTxs76azTZviJK6oh4BNeTfwGFEc3W9svT24uszr4KNkZJhTsxL2DJoeRH98or75YjTbXNf",
  "key20": "4hCe11pDU2RunEXs7Y6A38Pu5zStYGfActkXeVVkkY6v28NKy2gmQJWgf6qnPzJy9evbXdMKVzgRT92JPRjAScAH",
  "key21": "L9JX4LftUQmfQmwyZRWRj4myhjzC1WGr6pPtooUtrYMjKuSRaRAVLjq7HJjrpxbWERmsGs8kvKMNdWJnLEtgViV",
  "key22": "28rUp3mCJpHYmBmUh3mgjVmQ5E84tLJtdKG6US4zxKhMWCX9bwNxGDNzrJK9zppVGaq8nRL7mV6AHtJtfR2rajgM",
  "key23": "5gErmf8f7aAjQnwcqsPLt42bLjjKpTdZZVTP3ZrUeDnXQcfpH7s2DkiEqDxjHDqyRcbMNR71pTPwHYse5pR7RSxY",
  "key24": "3hiTBXcJQLJAMKF3vyJLMA5cJL4yJLwmWX5Fhg2ny2QUgpk5iraTzR5itnEWUbEBzPW6qQ3gvmqzksLYmwi8eqgN",
  "key25": "5PxTbWaKaPWdFy9Z4T5Gj4Ap1aa9dmzPpLJ9x5VfMaDmCR3B3eJ2i5EFPBEW3NqyAVUCkJeadQ27dRHPcnXNAZ1o",
  "key26": "4TdejYFUYzkTUjhdDCSz5vyMKu1TzX7AQyAkDA3THKFjfMMvic1zDGAwxX1mUW3S67wEtAb886QVCtyePbj9kFko",
  "key27": "4Ns9oyiMN7a74xyQQ1bwFTwcPKYw1nK3Yjjn9gyvcn7BKofQEuSxyYZNZo1KZrER7VUv2n7xKZ5hkHC8mNdBTCSD",
  "key28": "RtaHQAAF7sthQ1gQoxSqncg14h9A61Cv2eawxVDL6aZtRgzTzqpv8eifEpUZY1guqkpbsLEvjv5iVJhzQ5DtB8F"
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
