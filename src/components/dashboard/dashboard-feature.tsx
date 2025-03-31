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
    "4s88g45Ae2GCkWnqTepS1tNQJfFaZvQkrSfvov2p53UxVHbSyU4zGtw7MVYeLCQi9f16awSwS3tsSVTNesxAPyuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWXS6etjCqeZrF7yUbjUBfcmjK9SHbKc3F4M1kwuD6Pug7zqiwTP4TjqHEzf8Zmxmf23D4u4T8bSpBCnYSjZtwr",
  "key1": "5hk8mMjagkTJVgeo47Q336C5P1EsZ4HdLc5xRJkLRgmCdhQjoE3cbyAgnrkZhtQ4aY1DeeCAQPLQFTP6R3raLw9z",
  "key2": "2792DaB93J9tr7aRkSjYvmiL12XeDRCLJGguM4Rk3AMUEExRyxKUwYBPMWCEAm7wmg9RxYmthTLNhyAsNCrGVecP",
  "key3": "38bXmD3ieAETWFvaSQeySwY1qEHZ1pzcaKHX57GMmL14xhUahsE397e5wL3uJviacQP2C27E7PZW1rc86n9VDAp8",
  "key4": "3hmDRXyTS9krchhtPTSBvLeSYV8n5bncuUozvDGxSijW7SWHEh6n8tHLf1m3qhUNq8Y4MdqQAMM5LfPtBmHKHMYX",
  "key5": "gVbQvw8xGHhUVZe7Kzuz2miDez6DBgzRt9jnfV781s1NTpWaF7TNVMm373ZQbZrJtpfVPAPZN9eHL8sKdh5DFta",
  "key6": "5Ah3ewhiVHCecWMLK96nk4ksWZFp9m8EqV2zSEGkRagdZyAqAz1wfYQMxH3KrhA6c3wXsazS6C8zUcYnSbTziCPB",
  "key7": "3fUZGJfSPFxJwPBEJv1nko9bwCDmn1FVh4yRpw9AuhTAj7Uqq8W6jrUN7pbXW12vRuav1bJ4HyFi9dvSAwHZY2bM",
  "key8": "anCdVqjYHdkgm5J97JL7jh7WHsEgXDKesfJTACPhkTs1esxBKE3tMc99t6TWj6hx7oauhA9a3ujqhiW4B71DNVT",
  "key9": "4KEF26zkEbqHEVXdVESUts7V5BpGM9br8cKVorP6h7VA6C5xVufi4hXjVNeDiJzBN7Nrt5QzGegm2vonJQF25jLT",
  "key10": "4uRHDeBuG4a23c1cr5nmNgFbMtcSfhcUcAeW35FURWDbTLVY5E6kxvHNuLJj6q3u65gAzWQFsBxKQhA6D38977k9",
  "key11": "3QBQtuaSDAe1Go7Xj8bDeLeGQSU7VP4DhhNsuqoCxLeHY57RqFAS9cKCvnXNRrXSJstEZJRjGvwMbkPERNpfkEpN",
  "key12": "5y4kZJjeRcUco8nqBvXErpN5MNi3Fy1KxDn72qXTWkLmGMDCn4YVsG1gDQtieENbeynpRALs4U9L1vvuQqrMwjmy",
  "key13": "39bp2ZyzqgxhMyknGC5Q1v3X2DDUGmPd9YqVj2JKj4fAZU4PTH7sQ2L3ukCgJdDLuh9wCKsL1rwSd6oBHV3XejcT",
  "key14": "6HBe3AjrpcaR9oza7UfPbe7MGHuF8RU1mdVfavrreLihMnW4GoFZ7hhiPdY1MXuTjQR6vXJj1BswQbcKvGgNT4V",
  "key15": "65caeGjeSDsgcEAnCAEthATV2cE23chp24M9g9WkZ1Dp5zmvMHG6ojik3qNFFbkDCfRf6fCxwgnqTzWoeVQUJXA6",
  "key16": "22zbLNitDHAnaCdTecdXaTMPNnt5y6VciYVhpSTUYxLe9MXMws9L6yNwx7R11HiaBdCmaZiEMJf1aisLwSaHKHyU",
  "key17": "5YYyjbg4Ckfug44titt37f4dZVWny7VN5ajkazQcAzs5aoZjLNBaFzz6PBcwSKCwLJ4eRbXLQQnbuy6Ljaj2KEbt",
  "key18": "3a2dsSuihHesyg8EhrC85zqvLnJLi25yj6p9KwTe6V3RwNcn2FwJrG744yzwEbn9sdUmRt6FAx3HexXZwW38TSWj",
  "key19": "UQpMrFAyP9i9ssWPs3P3kyRyMMUDeUcNVvsVSuXDm1E8fpPvepwS3hdfmDZv3cbQMxT2FKiHzBvr4uYde46sSoq",
  "key20": "3is5cbgvf1RhERJ9cS2xBmiKobLjaSvvoWKmwrPE2xFFs5aDsWcZFGH3UaYk9RsLD5KN6kYMZyU5gKmrPMBa2crM",
  "key21": "329eqrUE2r87DmQi2UcWMYVkAdf9xqMDziuB4RygL16Dc4GBomykUiLvMqrMuvFHErxSCY9Leiu962NnmL3589wi",
  "key22": "25RwZky3oERgk2ajzYsAi93JzL8j5yrjvvdgcBmBNvwMKgAf5JiCAUCmAskeBZqcx2F6YzR79d5e1brvAt1i2LvZ",
  "key23": "42NDqCwmsHYL1tQxxYbEZK1hbe3N8pnW8x5E1cTu2MinghSvVMV5QHFBsjF2BgtEFS7V6Y7XZt73djmsUVBgpKND",
  "key24": "2ZhcUumdGYSzDcseDXYiWBtUxvUNGjFdB5jNxvV3BVuwfGhFuZznDnU11jrGtKidppkEk44EH8qBj3HUdcfBQQyj",
  "key25": "4cXkGbsr8qKa1opBZbbt4tsPvw7TTjKZqv7DNxYRqaXvf5rr2diD4QNoXRMttndUwfdetp91eok7wXwGoLZ1xEqd",
  "key26": "7Xr1Ysr1a1B7VfPYyYkaDwfwTRMzG9frX8fgYCPFYWiAZ3QVTBAzLtEAERV6cAXZ9CCLUPWh5bNfU1B6BkGqtoB",
  "key27": "5Sm3gFXNafW9e31MD2gDfmyvzJyEsktoAFSiSEyhbExvu4zAH8VV1R8N72DNdRxVGtxwP3cEfAvwJDALg4RJqyPi",
  "key28": "4V93ofJx6F4zta8fK1B1QnKiqZAVeJTG9Uhg6PnsV6nmdxA4MHEyJxATD8oryYjKtiU9TuFWGN9osH2DLNxWw3Vp",
  "key29": "5QBQKNZ8mNyP3V9zjwFsuncZWt2Ajye92Ybn6oE2FLiMedhEVa2r55ChzX4N2rBufqY7tFYUsWC9snP1vEuBFBnX",
  "key30": "2MDq5ZzD9pCxw6S9iWddBwEY3eN14ThusdC8cBRQSkdcZeMFw7MSV8SdVPY9F4XS39SEXfKJZmnBtPq6V98xTms9",
  "key31": "62u1k6VZdKJXfTYY2tvjnodg1yaeQtwEAeiRTifw8GSxHNeiekEomwi21QYTA5ALwUuo6Rm2JmGNUzytMwz6tDSr",
  "key32": "52xtFnQqkxwBzCWQtQXLEb5aSpA5hhmqkvryPBFZmVxMbicLEA8Q47oqNNhZx48wL4ZdZfZBvmtAuUZonbTcYZoY"
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
