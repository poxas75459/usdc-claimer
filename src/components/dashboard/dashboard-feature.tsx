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
    "3XwrYNdz132KVZhDw1nNZjzdJLsbnmEi8RLC3gMt2ZjJsfNL8ANMKAmrWQcwJSW7b3SvDq1uezxf3JynTZiW8TwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59s7KHHPxFYbWsvsyjGZmZF2x3CAcMDLoM4syVRPbHSdNroViNL8RZvk647D7WA3BEP4FA95dEbcq5XjhYKhYXEQ",
  "key1": "2NYa3SXn9D8pMMR33vMworDcfeSL9nZPgG8jp9xKB1QpqZg58RtwSMiu9n4NLn5Xn3ZpjL9h9onxJoR9SMvqRmqk",
  "key2": "3KFjHbX7zF85XrAA4b4hFxCx2XbGdkYTVw35M18kQPpy8yMTh1t3WHsdnc3JNXXqKa3VifRntGxB539pe6syCkjz",
  "key3": "2k1BnziJgaq31q798xoTDnQ4QayANhvjSfFreBcobpk4cA5ZLZhcbWgK2GW3u2K7HD8ZWfZ21W87zHF8MSVjx5Ua",
  "key4": "3mxPtzTVtBqvJfdLWUXgsW8jWcyAJAtWetKErMT8oEZFxoAqRobsBUpw7K218tgrEqsjoKJA31rgamVx3gFmqfi5",
  "key5": "3obKfzUPMzcLfEpkFMUjqirtHVKYWukE2Po9SR8UAXrAcp2EsRhoVHjANyizkZYcKZRkEzJik3eqY9KPAxBTiDUx",
  "key6": "2HFiRSjUnW3D494YiUXQuP9Qixv3xDqcaFFJav1v9EmPeVU1r9wmsoLakzADQY4ZtiJdjzne1Eeprp2SYp5QPc59",
  "key7": "29KKFsvAXXKh9ye4HrCMgHtPSBrnjDW17bUpVUMw6N2PzhwgQ5sope8e7eFWhJ3K4C8cFe7hZPCYJh6KGJVJWrL4",
  "key8": "3grdCjqqwxNZHCGANkvAosBpgdWZwTdrsQj2zrVDYFvERRPfGYQkzm9E7CgBKeovcNcJjQEhsXHR77pVB77Zivzo",
  "key9": "aeKajtyYXKhqEyopi9T1auc6azoZeAFh2zGPUqmVSWHDc9ytRLpuY2xkoTWe4iWaDCigKVKT59ZQBhp3UEUkgtZ",
  "key10": "2QaTpB6BvWjGpoNdJ7Yjqsm75DL9jqo1ZBVD3e9aiANi9syvYahr5aF3jx7e6QRbihRPdbZzU95dYcPAuqmJQPEz",
  "key11": "5TtuqVsefdsQWGCc3m2Btor1diRX8ZP6Ha143JGb1S2TXZQQc817XDuceXFfbDWqECNRts4tsKbRnWMy1gh4Pvvk",
  "key12": "3sixXizpFHxz6A8QYkXfa6UDTVpK9DpxdUy6YWCa4aZZXxjt2xda9PgbAa9ugJA7rNmHS4AxniBGaXPomFFAB4L3",
  "key13": "5vqyMQSwryPVLmAR5X4udxBirNH463PvNc8wX3FY1AQTKxytEspEDVgj1LxMtLFkxX9h7iBPJ6cWYrg7yk1a89Zt",
  "key14": "43ieVrWo2ZPczBFjWbf2hsDog2kHehCsSfUa1Bsget7GwQ7PTU2z5sw4f1CFinWLftjfwm1jYaJWDvnqHWR8zmEu",
  "key15": "5LtoE1etnjGZa2n3GiCP89NUah8TF3gon1BaRiPesQgBmcBKi52od2pcyTyDiMXbN1ppCabR9kXUUjMhk3ikxZFr",
  "key16": "4L18By1JGz2LHNwSwmAqX9jpSeaysG8k5eVAfT7k9Qb8MYNTiSjXS9bMHDxykferpCXw8sDEf5RD9XtWzyi4Udk4",
  "key17": "2Ff8VRkJqeAv6fRo889kupS1RAAR7BimkqjrmRpBmCZ21dvqcMGUcf9EEUsdS9bqNzjPXhJjjER8dHqxQfb5hVew",
  "key18": "sBospCVkS8cZMviazs84XTptZSofVv2j8i7T5Nps1Tsj8P4cpsfm3fX8EUsE2e5EehgJzuLGeNDtfPsxM9e3uKx",
  "key19": "2vh93FFEiq5oHuVYQx5t2V5mZMbSpYsfRJnVweBZGG37sr9SUuP1vwoKExUC3T15zzWms66rFaXNhmYs7QWKdVJH",
  "key20": "44UZwgPKqHEfTDEaSKC15aCgyCBHQGFpBzWYRoiCzZebifNZj6SQLfn8HJZRy2cCD4WRjkAQiLwvFRNpRcnoVdXN",
  "key21": "51d4mvoANAVaDF9fwHDxfdJX4JzmB67Pj8H49e8SkaDVCP8HgQqebzawJ9j5VcHBEJcqGx39wDXN2sgecMKisd24",
  "key22": "5PEwLPz5Jj62ey88QUvyPqhyVVYqjrpmaf121QmTdwvjLeTTLCfVyc6nCY7Zo3vkzfBAXERzndbVnLjZEaTbKR8M",
  "key23": "5nQdGFS3rkk2w13vyR7RKJWkmknuYwBYhKo4B4KNQoi4cKLQCCCD78fHu2o7X7KiN6WTnZhVwkiDMCGPztAEUBYv",
  "key24": "4qgiWPzdQLSgdoy5krLXKBDy2ZTLAGSg4AaraSYKVaEFjszySBEcSDaZz1KgUpBhKXf4uBb2H5vbudqEQ6RwpxQW",
  "key25": "62U1PmmAVXMgVwUMRABXmQVAnjZpApD3VqYY7B5AaVEtKVsxUrqZEzXD8UDZswSjW3naDVLZJahYYbs73YbYn9GL",
  "key26": "33xo5jMPGWG9m2vShsanrrcfFArdue4LMuvK2xg4hnpoJMrw3erbmYFPUtf5BJTxZbVH6bhub61FwVBmUUBfRYWc",
  "key27": "3tWZJ7RncxASzwh4sqykn7CBjafFKvPSVn3SPEXjwa6GcFwqwxCActKDRCL6KtozEtyA3W5ULoRpcqthL2qTT8uR",
  "key28": "kCCbc4icEWhc96Zx4vAD3v6gwjhEDVMpguHmZt9DubeEd68kFmzGfx2UE2JCggvsiNDR2MqsWCgQJ9zKRhUXAYa"
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
