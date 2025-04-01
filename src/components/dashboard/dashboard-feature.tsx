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
    "SniEm4gLmpygx2FC2vfEnbFVzXPLHKzANc2pPEVeRuNR5D9Ara3FfRE4t3KfqxvDu445tAgnWsBPPjJ7ceEjKgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZRd952JNVA4VVGKUAK6aQTSLcGdog15nJvmtKY5XCwxnZqsb6KUkz3RfHdQtzf3fQuVDWJzT9AZkJXiTTm9UkM",
  "key1": "LmX5ZgiVsnbQeKmjzuZvxB8s6vyEFkrjnpLNEFQKEs21Dq8WytSXGfdZqBn2py9Mw87dFbuEigwnZzFJy3Ks7Lu",
  "key2": "2LKijkheQUKNj66E6qmco4RR6Xih3j2vRvgVX5dKs5zTZzYRA4ip1mzAEPEHD3NWUqPn7DsR63nSSCsFS95ea5sU",
  "key3": "5fCqs3viMnNjYM9Zb972wPmabfDzoztksP64Pm2JGKTUHePPcEGN7Rn5qnk95akMm9oUs2hVSSxkT7iGLKA368oy",
  "key4": "59RbiUpzgui61huEeGtqKp7Yn2BYbZXyMi3DjMD8RqgWjA9KH6biFCSSFitC7w49cgzYobLJvZpCWVEX6Nvr7oJL",
  "key5": "3JwQnQfeZHcQwccVmGCANRxn26mtNmUvZejAiiRAybmHLy2iH3t618mvXt5rU9nBnzpLTqpActrfh7opxos2ZwhZ",
  "key6": "WarBC3KSszFgJKdenh4YSy3FiNScjaNmavhnrhBbwZfS2CQ1dMKybe87zF6oVP8LvcHfWhHh73h3DvFFM7E9JZr",
  "key7": "4WUxRxvZkbEefhCkJrjEg35PpGhpnEKzXRTqjftDwjuK4GLvnkXbwRVMwctSG4ov61zHqomxmtART3KuCriUQMPP",
  "key8": "rYKakxDABRCTr823VjHbwDJQGfU9jU9YjBP3YbpiKXNdBvWk8cggtFPKsZ59yvQTKpJo67yddKDVxq6EJcyWZYN",
  "key9": "5eqtwR4evmLtnQ6A3F4pSikXxsUpMpniWCCpQPweigHxWvvughTrqg8S3Y71sj9aGqGKTMSuBiwWhAN19rnrTbwt",
  "key10": "2VuF6bEAT2FN56LxKN4zSLHAKvKWSK4A5uwRWuj6BtVRhCFEf5GZwBzZKse8qaNvdUgHSeJ9U2AYTdutaMYPHuVz",
  "key11": "5oFJGQftNpv9DstY9THw2xXgdx89X6dXX1Th7cyau1dofNjovE4kv2vnnkcCWN4uDuqn92xWs5YkvE5wxLbHmKk9",
  "key12": "3QeTQybpsjhCB5svKkw4esPKxf9fCKYMxxEKRKNwoQJgUD8xcYnctVT4pyLLHnZqcZF5bLkkczREpJW68QjkFgh9",
  "key13": "6f5g6tNXUjWBeP4TKhviDk4zJKCdQH3A4CirMb5uU2cnxeHWRgBFqg3Z3VJsdLYHUVpeyrPov6cHUeFYwrCAuNX",
  "key14": "22JANhCs9qdo4tiSmGUnYQ3rqqj31boeUbmeZPuCoLkTC3RRJD2yDon8Ar2t5hrMwog81h5pf88DEoy1eGdZ3X1f",
  "key15": "3BwxBzmdrGtCJ1eCcugT14KK65X4F62q463svyhi76CVJK8Sh1do8ExjE9zTsARik4Un1Urmz2AgCQxBmsm1YKEN",
  "key16": "5Rh12ZC7W4D7bDbiHWcA44t4drGZtTHH51paiKvH6DZKNg1ccFTsC4BTAKcA5hqjHrocmLW35bqA6J8k5dMFFyU",
  "key17": "5HPUDhs9XTchhWZbwFXKmT9z33VaB1kyEDrwdgXVjesoqPxso5HjLvXnGt2pGjPi1mwRN8zkpiLWGTofFTC4PrU8",
  "key18": "4pz9yCsatjRZPjF8iWCu5Q31oWqZeGKJ1cg4sUKZU5oRXPsyzA8siQCjjFcF4CVVBacyj5EPkPBRbAg6zDWkMX1w",
  "key19": "3d8xaGLgckVj6P1a9jKXrQ4LvkraemCNBiBpBrW6DWPEABjy3rDczrbWnCiTnwRwnZt96QSF2pkBeuFGb6WA16t6",
  "key20": "9cG1bVGZJFUdi4pYa6KoXiUU5RTQWYcGQdxtFGPoeR8N9fZ4b5QfeyVdZMhMqUBFGjFdjwJPfcDPd6Yu21LWMvc",
  "key21": "ZVMNiMoCBx3WbzfSApY9ft2RrhVLBa4HVfoQ6L7GJ46HXVts51o11NSZoD3ibrCiiwKy1TAA5H3m5DGP2doWLaa",
  "key22": "41SrJ8R97irbQoX27cw8okGMaEnByE7M5FBh1XX1UYDJWMMYkKY6SKSNU9GfBX8TvPY688wko8YJtv5Ku5ByFniN",
  "key23": "4472jU5vsbuvX5YvLkCkTA7YVeRexou2TapAWKyiykBjuUimfPNafk1Eqv2EWAqRt4mhjt9QQFuAAfad6FXWSTzP",
  "key24": "5x1xZPCSfd32ZYR3wEM9jCv2W82rcFSgv4znRqcpmqz5rFdMSeP2iB7PgR5ngvAFyHPq62gwgXcnbJjrLbwfYBaV",
  "key25": "2kmUvP8zEiSMENoa7rsSt5eQr8LSFAxSbru3ZtiJN2m1qgRKdBMdDgr8AW1L2PoZHWKbyta4xRazumAXnKDPcqSY",
  "key26": "exdSVMpZHouTtg8QzRetEEg1EEqwzAL9Vtaw5zUT42HL37HEhDaZfiLHMZFEE3HHTTj8PTkAH1TSfpoQtLGkFLi",
  "key27": "4SRETQeRCaz1n19gNrtrDGUVcVFPX9oHpC3L81m1fXY9QNSg9PSqotzZg64Eboq1Y91hM9KKmLrSsLPWWGVmEHcN",
  "key28": "5AGFUySvvnvvc76TcAMs6job26rEX1Yv1bLticRRAap6A3n4BqHJgucwZrLnEFYKmqT1dSWBxveikoBMDWGv3aqr",
  "key29": "3oph9fxGUm1fV5an8nKrt5RCRR1TuKMskG7cXsB6eT6VGAgL2nzf45LcDCvCL3a2b5s3XGgSgMBtYXwto25x1YsM",
  "key30": "4n4K2L39dWygRwSWRwMQTGwL3sL2LVAY3yi8HUd3WaoDcv3166rrs2LMnWhbMzU9XF9HgW9NGWHJiBVNi8CSfHuT"
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
