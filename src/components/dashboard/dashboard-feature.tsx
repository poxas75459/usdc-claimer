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
    "4PE3ikQ6z3rAMvsXtu1ethXnVXmYNypLRAHQs9MkGwuwES5HgJRm9HtdGnkGrKd4Ny2Zf8jsrXGvuUgNNkGjjZg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THT4N5DLhUkFBLReBUx2jzqQExuMhvYGf86Fo6UAZ3VJq2GL7HcM4NTudU3vYm4YvycrsBCFgDpj1t78GtpTHuh",
  "key1": "2aohiC6BqUbYQyrYZCUffgpvLDHqPrxqAbGKMQNYsRkBXEwAkkJ1xmgugQxGmZxKK1d1oMdonAufcVL12UA7WVV2",
  "key2": "5XUWz8Ah78UMZt43eobS6K7MvaEXRYmh7sX1km9kM9sN6s7vhvypDcpYZ3oWh97RKUbo63eBCcwSTx8KMApoiXe5",
  "key3": "52bscnYrMprbPLjXrU676ugNBRHVeiuwu6U3YMk6wKozgpKm5rf1DZuw2mMQymfnYEVwuq5ndW7buQK5rSiBDvSg",
  "key4": "5zoe1YFhRMwXg3R8AiwuJ6PEnmrZD4PTsxy6btJ3GE8web2LGs1mkaWmYvWwQFG7e6NkhA4kPw9korBdELbzzebW",
  "key5": "ycNqjnEVpfwJaCMkRQDkVknaCE94Qrx8onQL55xzfCoDjSgK51ezAc7f9Tc36jEGwgBciJUL8hnZ9vREuyW2fws",
  "key6": "4Y6ZQEGsror2gRVsRsDKbTef8vuLgSm1UUXYxMm8WsZKx4A2wsTC316SBgpXTc3mqsjVvaX3SF1d3YYps97mhsmH",
  "key7": "3mTCzvdz7qgKb8iRLv24jS7QPuhLuzvZ19qtmDxLq4yC5J2AS87gnZRjJQRKsgpfcoHusjWXxT57ZU2YKp4KjGuh",
  "key8": "5WVf1Cbu4cemzpmRvoEiG3d2e2hCiPNnsFDz6vS2hU16wCKFdwiyBAVG2nQdFAEx6MkdjhpW1hUpyiyzuyUhW2ro",
  "key9": "3S3w2WWvbqNqWN6AeQm3xxcMjBGS6kJAgJcpepG3CtYiRYmB7vEo9r8X8CRiWyaD9FKsU3UcAuL1wmup2LpVoxR3",
  "key10": "54TJSca1wMk9DGLjS3cHiZURrGvRAw99tcZwHCRwtHeAdzckQtWMQdur1iu4YehPJm4Luyrk11tN1PgpumRrbkon",
  "key11": "4VvZq2765WkYJFMzzjEJfiKiLmU8TwuDPmhehNRkRAWxDCQxvMo1433pZhydP8nFqUVn4rBa7kZThZGJgujx2vL9",
  "key12": "4xeEKbNozVwv6rAKx1SyTFhJhGEjDSQAB99ht1Ec8bPPp3ZJcuB3QsUZbbuVTQdUxWfA9CyYr8rv8o6o59XoK1He",
  "key13": "ksoLo65vbDF4aCyioqQC5JMsDSX6jX8wj1qUUCvFbB1UwaWbXouvmVRzCpacKwEiQ9CSiKbGQMMc14rwFLduuF9",
  "key14": "5cqNk7wxyrUXmnjT4nrv3VvLio82qZABu88JbH9f44F3dRX7pLyJKeVEtRBKCjGut3mi7msahtMb3wN34tFuob26",
  "key15": "3BoptHtS5v8XSMViCnRbneGQePWBmWs7DLG2zzwTSg3fokLgp6t3c62VKEsHuUBND4ZUngi2wwJStmz5Z7cogSMB",
  "key16": "43hHGLbtLuphXQVuZ7Aci2zB1aGiFv8rQkhVzKjag3RewEA2rEVkbcBGKbewvxxYYAd8tKWSYrB3qDmNdAVd2P57",
  "key17": "4LForTG9yPYMXXGQY7b3WKYRPbtRiM3ZZRNV5Hd4b69xVPzLNs5N6MUyEB2yQ8wpbh2755x8sQMD4XogeWbzcDjJ",
  "key18": "4g49p3F5f1MaoLLknTtk14Yh945jE2mha976WG5bgxrBvvJeRbik1A3M5sBTRnXMvoRJjgWogm2z5dpq98u5iEEQ",
  "key19": "3RM8898VrvMqrdyd35Ut8YW2Wpq6ZKjTEQ7SBifkF3k9Vnx2tbqqSBp3jt9XtpicTkMyRYB1YiCvuH7NHxi4MwQp",
  "key20": "2Kvw74Qqh78VguJ5yA6XiYwwHHZ1kKZ1nZ27TuQ1aE69Dp1bXtPEWgjtwB74Sn2rn3KmUhZhHbqKaLXrwCFfEDdC",
  "key21": "5pNFwgb3dmp6vjL38hFWbLtWKF3RYcx1uz6Q2UczcrBmCVkqkZa4yRFmfZfK7aeB3VfkmP4fvuVYtqdCuwH6a3er",
  "key22": "37b1f4eyR6oaeuDXkk21HD3rJYVrFLyJnoSTB5J78brCrvj5MVXbCGo2LxKk4WfS1knScMz6W9qpkRQKCFZQTzqb",
  "key23": "4bQofZ28j75zw25pSzcBcqTKjDA4MEPj5wit1Q6QmhR4icLCU71i9UJ1oXgvpNnn93yEwnXN29KS6Vsd4dBV8YcV",
  "key24": "4gzQNym8bb7e1sqgzve34W9pWm72t8h2i5ZtCs4dapfp92qYRvoV3UoGWH2xrbnrJAM5PxWveTmN3WKEtxnZVYaf",
  "key25": "45w261auhWxfJNwukNRQNm5eBbAriMUeS9MhEHhcqHuJQAKVQcAdiHHqmDp3vLeC4pykn4jLoBtq6UDSYVjmoRuZ",
  "key26": "ZrHPabgJH43cZomAjFwmfzrjHXT1jmvtt579nUqtiCQNBAE8LzxyKfvMqTtcWGenvtteP1c3XFgVyH6mv1h9hVr",
  "key27": "7AMS1qsByezf32qFNmw95TqzzyJ7kVNKNyQkk7qG3WJtFaMMiivF1thsmGWSjybRv1HAaZe8eq2Fdu4Ycrg87Mk"
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
