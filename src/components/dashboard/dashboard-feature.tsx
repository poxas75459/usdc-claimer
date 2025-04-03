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
    "5HekrwbUF9Wv2r9xoQHeZgi9XXJoF8io4YStGzutr96cqByJsKoDn22aQM8eCRcJHh7zguqNYjcMvV5kQUizXwt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AoUFt3kmk2dEWxRpmSBcXbhGmbCS7FDyKDUjsNqs72knDUttgt1Ksq6f5w31BPifPAM6Ac2bysZRDQFAbS9PFFZ",
  "key1": "2jYoz2aaCKUHCxJ6k7KXp65tkcPTYS8tb3DroQTJVK9XZ83qDMD6G3rwF8W7cGHPqYJBbj5Uy9aKGz9WFoUjnX1G",
  "key2": "5RDQDvvKhEJ4Vt1p1Nx23jVVjsVpFanaXkhyquqWS2JuuAaYMN9NYxwkDVMeYwvc5VMvjCrbZPXLcGD2MjYLLXWt",
  "key3": "4e4d37vVAqRThFXFJz15AK2BmbuP9n79PfAzXMEspB8yTrZmgBK3Q6FwPDUNQbabK36Lu7weupu5QLBaehYdSHqS",
  "key4": "4GeQb8u9F61kvobMYnkRxp9PXW5xUjTL2vvN67KY3kjr5vP164zWFg7v5Wjup3TpV834JVyytYR2RtmBD4zcdPzN",
  "key5": "3fC7nAZfPdw2bp8auNwFGazTXaf21WCzEjK79eFwJe5vahp2SmcsHr9pYS5G2kjPUAkk6KSVnWUwupSpG4kF1RFS",
  "key6": "3JCRDef7E5xVP37F1qW9q7vstv8iaZsKiLib2x1E5vyUftDpd8ogp9Ekxoiw2651x9tykW2aViQUnM9EWAuR4a4b",
  "key7": "3cQjZGWeseTHodDQ5eBggtmSRL5NRZzrhVPmZ9TiA8bzUQgSeC9TF2X1zJDDQZ3JrgCmwev2NZByTsZWp82z1kUG",
  "key8": "2pe9uXLuUJud2nBAcRThwFNsWE1y3t2G9wXTZfCTScSV1w1h4CqgvroMv2qHsqwMUNhFkyPmLiRS9NQgfdZoTajq",
  "key9": "51h7uRGFfMvWiD6HkvbnsEj2hYwuauGPGmVufomBW3QTwJMxNLwzhJU4FWdAiSn14Ce5spcMmwmaHWQDBDbTojic",
  "key10": "4MXva2YcJr69puSzsheyPH63z3Aqadxc4rFF37NmJSPhmCR7ghaoQ2WSPm2ikRYndt57T2fuDJocnz2U5ExfaDuZ",
  "key11": "kkwXtjCdeRBwkQJQfMk9JLo9ySJwSNXXuguBFvaraGLzJfptMYnrkvj49FQqZ8o2fucvgthdR21N8fBaX1FF6mq",
  "key12": "6AXWguD8Hnrd1kYrYB46t7TLbY7YUCtPvbsHgiq7CGyKSsQSRDmQZkwRoG1f1JYXA5N2dxVVPmAK9SRZ9WWxEEi",
  "key13": "2twkZ7zUfHYat1TGJfSjnDT54LBwc6CQXbBqtdBjw1bDge5UEGTeexb92GfmKYMGvZPyaP63QCBiFNGoq97hGuro",
  "key14": "481M6aDKepeDHeeBBoRXHHnmSYgNDhSK8ACNw2TXCJXbfBKcppg8Hw8rv2GZJytSyBkA2kxaaQLSdA7675HVA67s",
  "key15": "4jGKZVvU7kEs1SHd8gvSg5WGJ2cs4ceZ9jmpQtD3y8p2qz83ibpv7RivE6zLpa7bTzBZt36jnedb68Ud683tXYR4",
  "key16": "2pqvfZxcyoSX52Hjj4fvTQSvTQPptMksaZdq3SW1waV6rETc9ToYyc9ZZ7pC9JTuX5oQGvwUkSZQaGj2ybMrcqey",
  "key17": "3XLzkAv6rvJASV3mqwJ1Mm3d1UWgHmZyUWgf38R5XZosdp7iUgyiNy1XVzeKQ1j4Y64sayZ4YnX4ooYAZR7q4ZQ3",
  "key18": "R3vx5fzfF4y41QDXAqwGg6EzfmDqzCnevJPRHFzCARsyhMcUCfEkadbrJ2r6PjbH9PcgxA4eetuB5czj9LEcNXK",
  "key19": "2jj9GFLFmqSNCBTtzDXtZt7APSRdNUdPzqVT8KSFuZcQNcYDymxkbLQbKSZWVE4Z4MzWu3czBSMmnvr6PTsntn9h",
  "key20": "hQaw83SAsHWhK3vvdKEbedLwqsGud3ysZfKpmegENtfbuGRwFDKrxrP3LQ3bGdYaGeECEvmLmCTJsDHHRa73dob",
  "key21": "4MpwBv3ep2SpMgD8XoPWRLTa5gwy6A1AaK7Qdvcg6ZSyY1ioQQnctYi7JLFVgUHuHoKhZWtkQ553z79iCfoqvRAC",
  "key22": "27GJG5ZtdNmyVmmmK1TngeJHcWBjMUc13qptKhEMsEWZVQKBUNj64fVoQKYTDeaopStKujxBQo1XxpC8GrvoCaak",
  "key23": "4hvAmc9QwVQ4xiSBtvRp2SPSK2UTu9gZ4XdvHjzRL5F99ChXyeQ6Lz5qjdmDpG4CVQq3q1W4wTHrArkD8nX2P39g",
  "key24": "2Ch981nuM9yWhPguitKKL36w52jpPnqHBqehwv8WFapFB2uJKu7aiGQ6oeoFuBf5qkMDRdsExsYyHraxLc9xt2cD"
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
