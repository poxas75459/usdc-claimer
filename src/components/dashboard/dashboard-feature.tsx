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
    "5WWSmhoZbCCNhhLbBtozCB4fRj39fomfonYdN3uBrygusCGMvDNQBWfv5nYSz3jbaVi5eBbuJMinMTLK64cjb7cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38S31nC98Sfx7expexnktnZVfMkeuSsKsvh841kSd5sHoi2YdKVyj4fCJ9kFo5EHfTzjc1iRNn46zcPuWd3Ns7Jr",
  "key1": "cLDF2o2RJh4w1sPUTciVmsV8Z9St9Q4vXRijHxGVN2WPhzMX3YG9bNihqoVYLwBjDd6joieHuSsgucHHgxhVJ7Q",
  "key2": "4oDd6kVweunWBUwEJqvx9d8QtxJBAaqanp8v8fjw5Uvwpasu26SCyhyrNNcJwtsFfnZnebgbATzZjyesQDkjqmEV",
  "key3": "2EnAuaVAxLgkotNsMMTS9YvMEYV4dn1gEvZxAQhvW8q2ziqtCjNq98ouosvini2RtwajLcUbtkn9tF8YJkS7Y5rB",
  "key4": "2U7MEkUVxz6dEKK4Mixwoe9okSV69PDUTuvJGmTyVNCUmhSLbTb2mNYU7u544euirWEw5fKKVJxsXRRhBDbkrVay",
  "key5": "49QgPMUsZvFARqRE2CD6KqvEg9m6217LGcu5L6SyRN7qEvsMxHi7b9NanGmFg9Fg1U5VyiXM8PpUmsacFGRzu7uE",
  "key6": "5VP31CYZkW4hXex9h6KAhsYzuqnqXekH11VdZKBwtY3HbTJmA3Uf3o1FyZnapMEQrson7PL99G7XduY6Tf4Pyfjc",
  "key7": "52nWaNTKLZmq9cnjYa8dES8pCvK7eAYzjXVT6mA9YdBCNznEEvJFwpNfEAz4XM8HDW2U87WHCPxUgz7wN3R8xWcz",
  "key8": "3bBtDAx4tdxQBBgb8MTq19gK2wkH9mtTJ4sLpFJG92FcpVi7QSNbhs9Pgdg9E9JfdutuRyJFXqNi6HHC41DzXpWW",
  "key9": "2Yg8BPsaCdZ6gavHeoLtmyvKzPQingLGDzqGAkH9oVoypo6xxCfKvWvXUvoLa6X6mriEz5H8XftpMPCU3HEJY3Bg",
  "key10": "57ryNJMDdnoFrMbXGnD9RTTSSZd5242b9mvdRjnXwxdEHdvFDmQMYUoHqyRXcoDMKC2Pqv42ZhHmrGCdPZxCPvtJ",
  "key11": "5dYksB8wqSPJMR98hSsVi4LLpW4zdMavXqa588eizNdkGxiEjqgq1CjMM3RnpchbofU84hmAG2EHm6dTiphcDq4",
  "key12": "2ujY7Np5a9N7TiTMSv2vrbdkWcxqHe3xkLWjS7YjWCfKEZtXRFDczbCtSyDaeyxfS9iiqGT6oCUSZTXFzLwqa8m7",
  "key13": "3Svwfi48tR5c26JwsU46RHUZesYcjCoyg2XV4EuRgc1K74yEVeQ2637r1DcgNwD4rV2HmWLyTqvUJ11fTDyaH7oC",
  "key14": "2Ay8JP3XxeyaHsKedY53y3sdmChW4yuW6iNausA3719Ws6PYznUArsojLJLYNL1LsXYqncL29jzaBjPfAjLh8mdw",
  "key15": "36ieqDFjfKr7VEZfb6JB6ePsKSaifnYcEG1F5SN4XQtqX4pKn74g2BqL1vrPPE4Q5fu8usR2oyjtABWYg3wa9H64",
  "key16": "21jYYscD5YmpBo3tL9LKxwP1NDZAnZBDQWzmEioxu52PEo8U98tzaeTXQkJmbFEUPKNVTJA1ffG8C2opn1qDUqay",
  "key17": "4WNijtEDRQW7uw4VYfVAgNhXY1FbqwAuqjLSMZ4zDT6JAsZsuA9zTQGYUCZirt7k3b9BEVPNEDEoLPyZPGcAc1B",
  "key18": "29MGoAZ6JFzpAsWajJLz84WgvW4S7QjCvTyNAiURuoGxps6Mi5xqwvD8kgC976iJAq26BEk7vZbxdmFW3bGsT9ba",
  "key19": "3qeYQstkLyYLv4vTcoVGDWK4xpF3SF2fXfrTwrVgqf7wLQWzGj62xbeNkzp4rNQHfLgjdz4EiFC8EpUwzpfWf8t1",
  "key20": "4sV3fxwnZb4bjqdYobQRCR6gXbq8vnGi1RCEwASCfCC3CpPK4oMc7iaWaf7vKwceVEsopwbGS2jzKUt4vLrSV3Yu",
  "key21": "28XmVhQiGcR4WyyTjUHau1fLAXDzfHSmh4QRJxH82HErqmH8GZdyZVs8qLcZkS98ypAmX4BksSFEM1TMLrRp9F2G",
  "key22": "4o54HHonNLS9tFiygzoJVJEfizZupN6FHps6wsEGdhrhXpwJxdKmMRq9ez4LRXtNgFLZRgrpZYndp56SZb4muEic",
  "key23": "2dbicriSWpTvXskSotLhUzq7mEM4C3k2Ze9F96iRWaLrCW1k4DyAv4fuaXkdiRJcp87Eqi6dR2cyy2Ly52ktZ8RU",
  "key24": "44eEsra6LRnRpWU4enSWSoDzgqsQT7pYcFMWxSpsD5F7yFnVzLq3SgBo2HqiLzShfJjJQVQ3JKhcqUnztRCjgxBh",
  "key25": "5SyuDN3dAJ69YAJYXLGhJFDY25wZVSjLct4TbNumUDivM7HzPw9DTWVt5TSwp3nbkuqsy92dSgzmZdgb5UMfdPzu",
  "key26": "rP2s7fBf5chLoFUjpqM9WbLrqQJ4jDuEQtgYDySmqTnWFxJTVD9takdF1JAMSUaLC3qkdUAxcJ1RGs8BVmkgGP1",
  "key27": "vS1FrqbDvJtTCq5X2VRk71JWML1kPTA8WVYz2iDnWrWtGR7HcYNtanbzHeqfmCvtiBu5KujsJpEhu7opfZisqu7"
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
