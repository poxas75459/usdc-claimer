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
    "FDAkgorxwibPynJnF9uLEadtANKGniev87L9m6R7waLnAVu5CGmSrF4yZ37a7woXog8GSaCCjDxDXdnA6RVC4YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjewsVDDRLcCvvjfGKDvb52wrg7wJEr6nqutfuyKhaqH9x3TahMdvYGhvdTtSEGpPVuXe88wNU7kVQbPcSoRmeK",
  "key1": "4VZXbvx4WZEQsHZtdTWTynieNLw5hMH4oKqkyP6WLNGQ1Ebw47d5bJ6hiPEpyMnT7errxokpXvKghR5g8sw7L4vZ",
  "key2": "5oxqfjYPtYyrz4kGB3RDgmCeJfy2hRkUy5MuDgHkdP1ozwLz8wq4MhJ3XQGWuzEafzAiS5KWNAkc9weDQTQh5sWq",
  "key3": "4Aa9mPxcwLk2TmR7qiF6pVFTQgQyWHs2U3KL59XYqiUZ1f7WgFq14Y5npUfbSni9sui8hjPtjMhi22T9HzV6dmqn",
  "key4": "2364S6SHNeZfxvH7GBHCRUikBkM7dB8xD5MFMQgYsB2QFcw3k9pWhZLiax38rgh8jm72LinmXeTKW7Auvrk7JTbS",
  "key5": "2nCaSDXWR2qvFuMRre4XywwumxN1haBJaJ2EUbCTuY925uSEcgQziZG1GP7jwGXDNTaxcAE1j6EHdnVwgQqVFZMd",
  "key6": "4Ltce5Hmc3gmzKnho5WVx1fFaznX5Y2K8GzH4dZH5nps1vC6mua5Ah12w4v2RVJZpUQdYCWnj6p57swv1YjZZynt",
  "key7": "4g6GkzZhJqrWiBh88xXncHhpQ8P4p3cw3KVGhcoQVGKW52nWuHPjNnTtm77vmdYaRGGiugf4Uf4nbe39Xmz3fUqR",
  "key8": "2JuXhVqxCkWKdhBh3qdj3gw7p4DDEUvPYUwKYxgLsmcYEJxA4eG2TvzeVbXqrVg3XwqcW5yw2HnWhZKxgKUKYAen",
  "key9": "2C9RS5aNbFDbsusCvksiBmjaYdVivPB9RtoN8iyvtN8xABCq1cUi4bbLPFpEjAycQXX31v44iLEqLyGjfy9ownPd",
  "key10": "29PBUwdkS6zp6k5NtoTLbBFxcaXNPHuv7BVExS1F75KSjenDDU3D3bFLzKwAUXpQq93vQqvCqSfAbbCeHcUFrLjq",
  "key11": "62uz2WtcWaYTiLHDzyJ1c4dT8phdPWpzjjKa8Ef9TtSiRJwgcd2dfnnE5gSgTBUMCBAHBaVqg2AhLQciKnwacem3",
  "key12": "5KiNoaduqx7PCssiT8BLc4iVHupEzLeUyi8tqLTcuRHpRbkg27swpvd9hyoL35kmHZLfkZXonNsDaJzQGUmnqj9r",
  "key13": "64XkXwoeJq7QfNp65LjEMMDjct4n6fXfjQncfTFAzGtkGYmnkqyJBwj9j41hU1NNKva5WHrNp13zfiWbEignWqM4",
  "key14": "2siB2xf2rziWXSfph5NaRj3LrZMcn2KhGrxgHeg3fBnynB3JF36jxf6vFU13SF6Y7SbTVfwk3nDbZyoW1Z4B8Kah",
  "key15": "5JvwQZEnCBeMEjgPt7ZLJMRUpmwYHNLLBXQWgfNrhmA1bvYu1hTmnNfZ2ukNAhEnC7cjQDRrH38nuUEZm6bcfJ8S",
  "key16": "4LErV3DXtjywEYEApADBm6LzhNEZ1LfkraXegj85Mbi42reDhT2athhmESe5wnVNXueYQfRbXFwGwYU1FjqL3o5X",
  "key17": "2neNcxG11PVfTsCzGcfuqo4aeemgV7iDmiqoM42AhbaJa8eXfCLaEvPGfkmHTP8gw3v3RruuE8S3YmtTKVw7DPpT",
  "key18": "48T9c1KWALakEKgFQjmZzzJPpCw82uEW63p46kuXBpiZPRP9hyhmU5y2EGePZKerdtXxVT9JmfWc8s1AG4MyKKb5",
  "key19": "4DNqNDdtX42bFVw66m2dS9yefUKyKbQAQnFk6AaG9M3Zg6pb9Z2AKUTppkZXNrWxo6UySHDQcedYZzKvJxrC1RoV",
  "key20": "2tj7QTEVHXWjd3M5f7qPRmWFqzYS8JHEcNdseQWAb2rm6WwJoBa2BL2NcQyNSTXC7eqYponKwe3UfYBFPx1Yz138",
  "key21": "LJtxYMqqivqAj1C1GThHsV28nToRzkVGgd3gimjGktPydKLGPRbkWrGX7yZrZRzBgYteAEtVW7H1B16HHZmTxCT",
  "key22": "4LD828M2AMYUTZQLxJ29zUuhJ6veczqDp4g11dF27wWfEwToP18i5ML41tRNBRXbEjREUmzvkEPbYfowM6h7LUJs",
  "key23": "5y3aUzRpJggtoBRs7JdGWWD634nTvVMWYWNijT6Eo1kBXLtLa2JDpg7H8yZPbb4mnf5cXbqkYCmSdmmecAuZXvVp",
  "key24": "3HJjcqYjMfQPwMjZRaC6M3K1bzYGMy7yRw5aRXZ9XkCnz4azwm825P6RjZ9BXw32q3aNGXTTqB53M9FHpfs7tRsZ",
  "key25": "CNkTHbkS4oQvnFHReWHHuFLaZ8nTBeoM5DYUBfQRvKns84UhafGUP7QoFEW55mRy7n5q1erWt9o6iTXfEFuS9Qs"
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
