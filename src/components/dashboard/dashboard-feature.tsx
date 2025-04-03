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
    "4raWvB4oZtcL9Bj6xf3kGr4dyr3Vf6bPEYzPje9cPY5922W5Ekuqe76anPFz2hu1agDeQkJLnUL5CEoh8sRdNEZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrRFQophWegwUoAwJ8J9EWzoozdturd96S3R6gPsVQJUHQBRtmzB1THJuDcJQMHGJxPg77qzRzo9HgUtUnWyjr7",
  "key1": "4BSd5qJmAtsiHTv3s4sn9a6cB3F6ddaYWCCxZp3n6JfawRVMFgLdajSmeySQLKEczhPAB1q67giG5FdztMtbGfgV",
  "key2": "6hNmzMQq4JUSM2xdu6fkwHxgx4cCHK9CGY4PQUEcymxXXuFvmLcguisXSvAPboXE4VHsPTvjFpgZfMfQt1fZ9U7",
  "key3": "3VnLBNRZfaY5v9Rg3aZBsS6dATLSNGNRECU3sJcSVekAXDkPFXrbNymoAemV5sMo7yMJVVg2N3aezxtzdTj9RM2u",
  "key4": "b8vjX2N6Pk1ZcsvGrB4QFjrQiWE7fZYRTMjLSNNTJoLqP8wRt1AJczpsZkHfeUYW79rKcPQbTxgGAGF95c9pDYe",
  "key5": "4SDcqQVFXnEFZfH9mNjtFxLtBejvKSqr1sqV1ePLkVJSR8Qa3uenQm6k1UuPzT4e7B6NJS34PKQsCD8hxXzTfVfj",
  "key6": "5rZRMBufNoinkfS5qMDHEY5FryeRTNyMGvZEWjqYpezTKbYpHdY9n8H2Az9sgaxnX2muzf3E8i3tFpHafoSPv5X4",
  "key7": "5fs5RSbytmoqGfA2UJJiCHoKhw5si1Cdd2JT8w6NGMKDMgpD2qZwbKotJKonE8ygnBh4G3DRYz4xFfTMRTYBZaBr",
  "key8": "48UyPni8QxKMCBrgmPxCaukPz8oeAC7xD5VjBqTBbR4ForPbAYAz7kYayMJqCtr7Lt1n264BTTLpPmJNAsq94NXB",
  "key9": "4SGTmjCTvrAx3j2romfNTp74jCLdGee6MU6zgS4Wa6rMzMXy8QqsDLBY36wA59sGxvsjZeziVEJfyPYPeD8kocPg",
  "key10": "5wdQynzxtizXBMcNhDCpDkFJM4JTpgHEZXgsiFoigFnoohkpTVEGWwNhxj3YWDavUkVABx4oGy8gU7iQSaEw998T",
  "key11": "bsSF94Y9Vw3aXZBt2RJakhQ3jkaJQXSGf2dzQG1tWimpoujuVmBYCHSXVHUtSKfM12oaoJ47X473eDQZXnVJY3F",
  "key12": "CkHjbvA6jG2fqVbNUJAuREm9EP431SrMPxrw6nUyUiwa7hWqMS9o6JiWTrebpsF1SK2znDWs4irXwSMUwqvDs3h",
  "key13": "3FFymnzY5QTghQmuiGT2ucHdwL2nvuPjyzVRjndPm5j5xYn2e8NX5JGamJNnqbZcj9YMD2XWMpcDjjoXevBmzusK",
  "key14": "5thJE3qUqpJ2qZSTUzc24Th8S92J6HAk6xoYDRQLjVTCb6jUou8zVXr6BeGEjGWe6kk3ZibwyGReQyq9ScnWma9P",
  "key15": "4V2VEBtLAPxWLfamfV8kpmaSPWeuLCfk7kj8bjRh57X93kCChBSvprcdSRoqNeTFvk4GFdTThDCCeikcp9gFmdqe",
  "key16": "YNynFaKaD6DQcA7X1AwTZA9KwcrShDhpUSA8Hmg7FDshqKoT7CFADh6zNgLF54JFBF6GVStSwPmmYsW5DXo2cRN",
  "key17": "4rs1bSp6nJQSyA9p4uxbQz19n6Cs7PLzWkR4gQHw7mCxGnC9c1n4ZWkCDLARAFteBFALNenFYCFNJ9wkSqEstq2G",
  "key18": "2Wg78hXoZQue7DkMfehL3DRnQ4f4CuAWjtSEPxUUBURyXe61eyiXxJ9ELwWVbcZBMxqYKo6Ao76nGsBZ84ouh4Cx",
  "key19": "5S9tyyQ4aF2r9BwzYgwWp5ZYkqEEfU8zGn77jNSc7pJAz7dj8ZS8Q3yWM8om2ZxWhVDi2EbxnoDbtR8BJEcBK7AG",
  "key20": "4L5tBtFaD7EjcWAL3FGZB64ofXKLFCGwjw9rnJFxDCLbsMaY4h5Jp3ox3HTu45W3gzoxggHZoJLno5HbQeFrX2H1",
  "key21": "5pt6cT56QfgQbth9CCUKd9ByPvmPgQ8YFrhpm9KC8gDh1nuWsdU4sGAmUJhgWTBKPAtAyBwVet64GntFvpK84yBb",
  "key22": "3Fano1QtPqMfPbzGrGiYQJJFMN5TuqR9TgkjNTjq4n59ue9wQ13tS6G44wZ9GB7vR69LLjqbHaa3yjkndHLxk6ZC",
  "key23": "5bjoLMNR8GvJCG159nWnYBwhicmKJJNLNxAETujzpjBVTNGYajSaV6iBueQj2zksTUCtt7vCwFV5qpxxe2tpgGXN",
  "key24": "QAj55ptX3MGqtSuehG9HRf76PnWudGHK2wzAP8J4b71ikwd8aHvfsaBJkoobvQT2qEQMviF9CaszR7V4nDHW6jZ",
  "key25": "3p7vTusBzJ7c88NbzNpsyH5Y6BRuLckexSx7LUUjx7PgzJAsxBJ5GLPRNUZtQ4awo8G1nc7coFeDgNrZ4mcpsqr4",
  "key26": "5GV1tjAs2Vtf4Jesvbd4QkSdVo4d2yL9vjtGfizH8TjqLfw5NAWYbwJqZSbVSjY47NFzho577YWbGK6mnNAmLZuc"
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
