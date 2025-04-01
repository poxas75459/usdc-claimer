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
    "28UCPQsB8hLyLLgBdAmUmkgya4bKW6DE2RsMaQk1QEGGpQLL2A4LheuV6HtV4AoUJBUd1AK6DKP6YpPRJ7ZCpVxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNPqi1FRFfoNKkjMndWUX6iA87axjNvmNq9ex6zSL8Erzn3PgxuViemMZbJKJ8CMjkTPZKdMpHHg1u9MaCJZorW",
  "key1": "4Cs7T5mLkypYcuwE3Mj7pS1rrshWvSHeDPoweKY4nDqUh4oHfivbeh2o6qaEhcZdFEtFGQ1KGSwMYpHZx7v7eSkN",
  "key2": "56bcMqUgZgDCPYu9yozbTueZyt2pPm379qoT1ELY2QVbV4HEGtzoHP3tuVXFRfqepFfj3NX6CepQ31oyPfvpmtt8",
  "key3": "24Ti9ka5qGqt73NrwgLMiQZmaxVZM5WSZvvJdbiB744P1fYJKPC1yGm1SzGU7F1UzwZDUjTRGMBCs6sQ52p5mRUr",
  "key4": "2rwdMUz5NAE5vNmt5FbnJX6RjGQ3WCAHeLyUVAHGdSxxmpbSKmVM1nWiD7gb3KfMbumon59txRoNPuymavy7H8BB",
  "key5": "4t5ZT8wCsCN9n61fChGoNBNemcGrSGJDDjZp3yYYUSecfUfbPVjNeuNeNcJqzqaFm1JThQuD6QVuMw28dSrs25CS",
  "key6": "5Chmz1dthkuXR3yNLVAngYf1pohV954ek8dVGVwhpzcv3MX6ZEudWgg2W5Mcu9k6TRtDU96GHmfyHjeqaPyohCbn",
  "key7": "y8oX3d6zFV4fnpG6oWXwwoLSmX6Diz2ubHzuTxzFSxFq7sKoUV1FpJWcMLBgrKQCS4z3a8uxYndDcHpH7NT32MZ",
  "key8": "33HGsaYAUfkUPTBbJv1s3djKKcCw1cdQBr5ZDyBhgNssG44rMGBaoVdaexbgmL9roYDA8q1WwPAdZ79GV1vmRJGY",
  "key9": "5Rhrumno3DKPLRyV9DhUAcRhriNgwck8B3pjy5CsLBWDJMyvmgP7ju391XYFZd6kkgyd6ts25GGkMaac629ipovW",
  "key10": "2qT4N1cbtxQhGheEgKKcMKbxkuA7dSo8VLyNhJFhpd2pYc8e35QZopkfDphYEV7Qp8FRnGChRze1Uj9XGbDynFvV",
  "key11": "fyZqeKz3D9BQess3qqiKJLyCHuqWsukcZQsViEXPPCWRcGoA6W9YJq7KFQkiB3Y56vqbaSMmHKxcnFR8ZxhnLxn",
  "key12": "3vogVaGsTXL7Lwfsk4FfncN2Ap88ZBVwj5VZ66fPRyeu7S8ZDcD3rNUCxbrptA6LzPHEeHgu16gDUED362AVThSJ",
  "key13": "GrLTHoPpF757eQUQjxG9C5qYCse55ykvVeh6z7p9ZuaGSA2Ws8xX5rXDnDYXFeqqfwdiRxqKMqVGYTmyFfJhYmF",
  "key14": "3hHBy2oeStC5AJXF4sqkMQpuzRF5A6F5ube94DT45439kzXJQogNozrGx4TDhrA4qXAPZz24rmoeMVza9iNnYnWH",
  "key15": "5ms2PGAuMppRSEVDwQUDRrALGUkr1WHxCWoJ2cj3YveGyTj2pZo1uyyecePMog7JLNAnrG195kZccgGhsd1wf67S",
  "key16": "4HyyXtRufp9ppGm9uMq2txbzbaHJXziBGb86n754QMSjwDupDzh9GuYLwj2Ejdk7knRdoT7nvSh8eeiFXPGsvy6S",
  "key17": "28ZX7jFVLeQysJtsFYXq7UPShCsThTdVLGXo25MUPeN5jPAmC6UhTuTzcRNUKD5qWVNykZgqNSb39YDGNpnrj7us",
  "key18": "aKbft1TznQFwagzK1v86rNmXscQHqRet9wepe15WTvhLdo7muozqfeCy7RUXWub1mV5xqYbkN42yq6aA9tcKq2F",
  "key19": "2tZCaFgHSCmYmcfqeQZU94jdj9GwrQQixhzbsjMzaoGTycU71151AuxMwhjrxC5Scib8hUxACKoNy136HLFCTxP2",
  "key20": "3n5U1yzisw29czt4uiQjLgcEGe1sdKRyytFe9PminLdpseykiWNriBPFvjTLQaf6ExMjFV341hDWnrcTddNY7hx4",
  "key21": "ShZFeBZch7XKsyLDtmDq4f7ewmb2h5bHSWp2cLKhisytGZU421Pb7VmmaeFLmjmPwD76Gn6DytmeeEDN3oT2pE7",
  "key22": "5ySGYcLjDPohRmqjxi1k96xdHHbRHLqXDr99WZSFb6SYv3Ts2H8DfKBBzN7RrBsTnHJwJRsjYdYmox4KAD53g3oJ",
  "key23": "mbgjpwWTi4cF1wp89NDJeKevo3FxM9bUoHHrKniswpeT9NwTQSqUjLNDydaGT2Br95skxV3oqqLDeL7WsijHbh4",
  "key24": "4imUJfqGWedb6hp3Qe6Au4q2APnUgNvxxLmsxACYqGHn7FCzf3RC1D892A9DXqFrnrxHe3AbQtErtH4mc57TqxcG",
  "key25": "4hiYrwUtB6UFCxtgxaAbN62zJ2T6YqWuGo4hZVZcJxAmxyUvLf6cw9AXu3psDYji5N6h37xBtR6Mrv8A22SJ3k2u",
  "key26": "2F5PCa1kxMGwUNP3yFd68S4p5PY1eZ9ZbHCPaRtuuKN6qk4yvQ1syz5LdDSgPwu9P58V5nHJ3hFLzXSFogwKp6t5"
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
