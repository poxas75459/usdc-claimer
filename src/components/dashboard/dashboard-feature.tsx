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
    "2W7x8TpiqjCVNVfHyQ1WieSkK2kMWsUa3txLhUU1iivdZtCHr1skMVchDwXqdxh7k12MJduYfEDocXzqhgRdcNzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxCrmZ7DMfBMx6fq7WcnYLDfoKDiNbqYGTQpmjMBYoXvy1xtQk7guK56JSd3Z11YbF7naEqqLE2PifqsdAbiWD9",
  "key1": "29jhqggBGUEcJmC9JoG12QmxKc9wx1VdNBM5T6zuir5rL98yjyWHPK4pCEr7LcceRqpgJyVxqpX6LG8YmB2d1mxm",
  "key2": "5px1hVEJ3UwCTGEtAeGqu8N1LRuHz3aeRFqx8vme6UrwLr3JfKd8j54Py8idE9fbzCgJRAxHfzQ5E8JYdAr1wjkg",
  "key3": "sC9zHssXbcocxncxHVzmmH2wixmgvo66NCNvkznQMBwBkXnmxaurRB4mCT7oY9tJ53QRwHRcCZhbo7hNfEMs3y1",
  "key4": "61Nrn1SgLXC7oawBdC8MC4dMJLAs2Pea8JXFDqmubE3SdhfHWGf73jNZGpW9pHtactQVLucom3kC6dkGDsf1U3fx",
  "key5": "3wRp1664SpkDgPim8HZVvBX2jRCzsVv2GHmBtLe5Lu3EAV96NZmRbatRuDoxZYWMKpnvEgxT2pYc7sf8CQJNjbSK",
  "key6": "5zPw7KXJgMXMqJeCT7AoFNV2U3DWyLKRe1mqA7NLLpF6ZrypRjjbuwxAxBENAAxtiy35GrJ2v8k6YhTe7HpCRTMc",
  "key7": "86x7uZSdKahjgRD65kijCGEvpoTY6CoCWkNV9oSYeVF7ZxBYw1gNxAQwdecLp5SkteSfbfXqmZrRbdrATKKQSYh",
  "key8": "4J7DhQRXPUCqcjjEQvXgyeF8hRUZNHA1Jp2srLmVcNeTH4yZWX7xpZ4XHdmecjdoqX8uDQYkG7b4GmPGbzdg3vUs",
  "key9": "4QPFdWZsyqfDW7TNpu4wNU7X9TDYQ2uPjvLbqYwzYqfvqqTu6CiuQfE1j5t8soij6muCyfxDG5F2dM1NmYzW8ViX",
  "key10": "124KFNKCaSsDJzp1TBZ6CfJK4EjSt5ZGC6bFt5UoA3e1t7fz29TKRCTTu9GL9kfLGtZTqVHvQuvFVnN9NRk6gZY5",
  "key11": "5wZWtL1rPi1TJ6M1ddMrgF5JpPDBqbWrDcW1iUsLuyFEzMW2qTysw4Rtzn4Q34R1HKjNv7xvuw6D7LT34ohPonRE",
  "key12": "5t7DauB4YDB9xfjzfnzPsUojJWtpKgRUkwGfSrFyQcSpWNm4djUjKasABUYTAQF1JccFMsE7BJnYtDx8VcpJK88Q",
  "key13": "jFZwfNrSCsChfTA5waMUKDuLLjTVg5Mprrt9UDtZELo9nLRmrqwcVT9Q8LzzL1KMTo4J3FtKZzdSaM9zPgHCXfB",
  "key14": "mLxwuimMFZjtDHPaGVWbLUzVmFPKiTey7otckgH2swERaNsFRZKbFniETjCXjA8MbYebFVBfm58bzeiKZsikHH1",
  "key15": "4jfMgNraEDzt7bDMqcxEXkqF9i4wYxMhA8mxFdbLJb6aYkYueUxaPKb5a6d9ZQQyUL9cmc7UsBxBUKJA9pQ6hdTY",
  "key16": "2vn3YnuXuhNZxvc8UDRUbB2NpC7ZjRkDrERPhMPM2jCSZyJkSTkf29bFbWCC5TxSimuEFVXFdPhpDTFZ2egVToxX",
  "key17": "2PwU4s67wtqsq6yiMV8WhifTCoWYwxEnT8rfAbZRFkWX3gvBs3EJwPsXjAdLu2Lw56nobDTh7ggh9eArRr1iJtQC",
  "key18": "4xRCJ7p24BZJSSohdRJCNUwSHXg7jmfddUEPA7TctayrCcXUwSHFEueQRVw8QWpXcopx9tZ2XgjMgJfTfcvYtZKL",
  "key19": "2qeNTq4U8CuWcpHB4bZjxF8KynKURcWBpv15fr2eYGC8b18G7CLhUswxpgFFYkJduspE47Fjq4B9cvBnLPYjsZVu",
  "key20": "3Z3JCCGCTV8F4sGhEYkXJtZY9yBCDjVftVrJNVT6Hn8bivEVyPnX55atFtiF3tJpws8vzw3vSjMb8KfiWZAMP3qD",
  "key21": "3eGs9msk3rNhATVevFnfSH32p7yuUPZXcTNpp1KrazzGS28vpz67fYPUm8YN4Nq6JM8z25eTrSGdLgdUTCG2ucCx",
  "key22": "5kgBdfJ7GyC92KuW22cNBDDW1KAaWjZx4gC1V2nNkhGAJytrZ1djmdz6aPLvVJ26dYAXyN9AU5uS7nKZ6UgxUKAa",
  "key23": "2Z1aBh6h2B7JAPw1JqefpJwDfhuDiRSjnid8wtrGjvLRz1RcMHQEeveazzRMqKLEmvVtqUgSVd6PwhJGGrrqt9DE",
  "key24": "4cF14gSmLdmT3zZXRXkAFzmnrhjrdJrqRWDABLGsjFZG9Y3NHdtBL2RLnThGRKexLUPTHcwGym7f6rUuDDcrK7uu",
  "key25": "24YUN1DPiZ5xGYQFJAirTPCRtVAvza3ab5GXdokB1SfDetKQCnu4NY99uSiZj9B7aAqwzSD6Shvr45dZ7XNsn641",
  "key26": "48ZrUQZ4RMTZRrLdACX6Dm1QnUqYzAmVi1wFTYVNKjZHg3PQfkZGbnG3y5RPbR2CJEhV5Wnvhe5HUte6p41Gof99",
  "key27": "Yc2aPxBqpxa9iPCB3P8ZJkBNi8BKp8AKSEB4cK94tiBWHCnNZoGMbqXwAanmMAvLBorJfMZk5VAQGkP2WQPBBm6",
  "key28": "41wAqzSook4kRM2tMEwpUupUDNmT68NpuHqvRjfDrq3kLXWzjBYXnkVmTD67rTYpBDTroJ6PNVCtqZ2mG9esBGTD",
  "key29": "2XbTZbRmoULnLXnCKcy2TCdsPB8oNQUvXh1TRNGbomPH6eLqMZj4hNYaEkTEnt8GGiMJJWQs7dwSw8tSWEcaUZME",
  "key30": "2gojrUbL1363HnwgSuSYQzFwVzKAXoo6HgTNdMhNGU2Sgvh8iEsrCYrck7Psi4GpPXr1ofi8CGEVkTSddnKb7zqm",
  "key31": "5p79intSvhiK3VTpyWk1czJVFc35cQnn8xtCpKzykUxaqLUZ8UeDvBMFYqWb3gJRCEWUu2DyLXCHc5gM7TMBVHPf",
  "key32": "3z2DYR6h1xLBUuMUkB7uCgvtkU9NzvsW8G1TCfkJHgKwWNK4UvWVRDozBFYiLNmwvNJs4mGVwqDwSdXvJDQmrjjE",
  "key33": "3vxKQqMSK5KhZpwXe7MZJChgTofVCx7P5YfjNtZ8HndbTwS8RkDtKYaob1Kt3QXJiGDhUqzBH5ajP9iE8KL5cHtq"
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
