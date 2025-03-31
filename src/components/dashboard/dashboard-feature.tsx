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
    "52eb5ppeyHBiRTqVurNmjHdsypfS4qB46qsKESKRshrrgwe98UmEQeLpJ8vA8vGkmUFG6tgkCoXBef4fuAoPCiJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xekPWuGnHLYx1bX8bQS9vEFFAGF7mQvGpHsTC6gXhn5fZ6fknGqDW9YCbkCbKd7usWQYm9oaUaDwvka73LhEY1",
  "key1": "qDLgjp9f9XMJsUY3fGxLN4a4bjR1jqijxeykTqFbA2T6huqf3eawH33QrDXHtPz5xZdVbytNkbYoMXhQ2ueHSQL",
  "key2": "P2vrNZFUKxhMTB2XyAEbbwoWyDZqyXsatpFRJcYohCF8gjWADSHWj31m6zKMp2YhEjHXddewk64HNQfLU1WkTqY",
  "key3": "dwrD5WczLHmLDcFy6zMtESFKwsZbX9LvjKDCCDaKML9P6RYj6AFJyuYBhTcFCTHNRu6VZ9K5dGYwu44v1y92e8q",
  "key4": "2oeTCnqZHtr6XvKazh8VNhg5gG1KgBzBi9RYRwjFtkgCskq78BCDZC82omG2Po98JtxwZDbSVsvwCkF6JzJmkZy9",
  "key5": "25Xa1qYb2eTZfKjRvcg4Y2XnWb7XFE2EZRUpJwSWG1ksWyzHmbMpfJF4Ms3pYLatJNVnJ5KBJDbkVb13eox48xnL",
  "key6": "2d8at3sGkmYD9SxJHAtcoqJ3a9whhjRpCGLmCB97idmPsNvAXFDHWK4KxDbW3bQ19JwgGvobS2fU2cAeuKqdYcR3",
  "key7": "4GhD1juM5HzosvWi8njYfdFt6tBVFY8oR2aDuXgqFpqfbJExGwLnNkoedLHMYJdHGRWGqUbxmVu66Gxyw8TdSXn4",
  "key8": "4DRuLJUzwzVAhYnXN1he5ea5AP3YShs5weAAPAiEz7w7s9PCDU6tqHLt2dLoGAXYnHKvv2xp82zfMJmWQr54xnhV",
  "key9": "3mrL9ZAG3mVp3KERRYCkY3N3TrfxSPGh5swWKBf8uMVyMcTAk3uiFZazeaSXt94bbf67GpL1vDW76PPaNwruoPCY",
  "key10": "5rkmL2VKMekNozun6eWy4HjLuNNPViTMZyYhVHKkREnyA7DCTzWQyXcq6s26wL3ucpjzVkdi6vKqtx4gwjwzSJ12",
  "key11": "4iKbHC95p1CCzS1yXx8LQXxQXcn9Jgs37rSjKRNE2tkgMQAmwENf5DU1EJWvSefhC2GvWx4va996WHhiTHY7tgUC",
  "key12": "4sc3kK6mhxMYj4pZfMXBqRNHYcFcqBp6p7fX4L471Q8t8S2AjPR1nCnRS2ToBmvyasMqiZd4WfsKD6s5ZfTEdMMM",
  "key13": "3xXxQwRxYzZkNajT45hPVLF3JgHXaETuJgC42Lo4bSLQrRED9VcRV2fQF4BJQfothjSnmuJjxgZKAYm1Y3WwEgXE",
  "key14": "5MyJia3xn5i8DVTLkEzqbfdFHEGjk9mhxAEKK6CDowuWgbjVZGMH8z9a9YvyMdKsNqpK4NPRg8tush6XTjEJEgtU",
  "key15": "4Kn9xHAJckYBDTyd7Aff6zqAEzxR726Xb3huy3NsvXGrDRtzdZdezAcR3oMkmhTRzQW9dt18irbj4mPvGJCMXDwe",
  "key16": "2xmNq7NZhSb3vYhZFBhy6VgGgdvTiwEgBT9JgAVUCoVgvaUDcbd5tEebYjyULovxxuy8LwTPZGGfVX7x1rZRXn4H",
  "key17": "vLD6378f1gmSKVctZmix5WVtivnLaGnWmUUxC1jMqVK2VUpKQRQ1tziBTe6ABqFDwzoi6LQCRXgBuaC8zKDjLNA",
  "key18": "4kQYHzXEXBXbeQvsridjL1yaGJDe5Bguk4i17XtrgpzzXBnhC2UCqGddJTdyUftjdpEZ5YN7D338S2HRQ3uG7K3B",
  "key19": "2WUac661W3izTD2J26MbjcT5F9ex8HbpgM6mr5tkqaCKUwWYeC8svssRdJc5isKCnLtb4GDrH7CtfpHFr5zmYSsM",
  "key20": "38i6whvdGsXREP7xQ2T64AEPCsLMWWcsuLbsMB4VVqRPt4VnUv2s92hZxyFjJ4yTbNicwkrKkTjDEkXNWYUoFadK",
  "key21": "3YNUWDpcHP3Hb74hiMs8BF5rbwwQnKrMWStZJuF9Vyb5gd48YPwzJVn68A5eLzwN72yGhbSfwGjQAqweRYHZ5fTS",
  "key22": "5YWNGsc32gEpagggnbaEmHi8xzDcBKih9tpAxAWeQsGHxarY43SZBRusuf9L9vkfySVB8Gx7fNYY7Z3ER7kuNT4h",
  "key23": "EHtoYW9ozwYLNZU1pdo6F78NStVaWfsgHmuijSCWtcAzocD4my4S8jBHQ2V9J1oKYt1acqGUYpsctUR8W3AYmw4",
  "key24": "3dRfRQxeorg7RrXtuVarAZrVJtVVcUwKs7tYZqJ9RbMfHjJtx4MmS6ufB3U5av3yRLwXZyo6JQokV7hM93vjoq4U",
  "key25": "RbhsV5K34cCM5ogM5BC2Bc9XtAG2u46QLtXLS47jeSAtz87UG949kDyE7of7659zZ4E2JuP2GzJeEBjfBPLQZvQ",
  "key26": "67hJgXi6e5gDdRSMjjjRdRNdzqjSGD4ewfMj73nCuQhHvYJgVgPcjj7JEVFRhGLAxc3q59JQnUDgADwHHDKN3Mtx",
  "key27": "8WR893SQmoWGjLZMeUWV6tH7JWYBzv6PJE9XADwnxwXm77A9cmNUdBomMDgBmTQG3UpgqjW1jw1uU2FQrwLfGCt",
  "key28": "xcKh44Afefr5vvSM8btppjdkczpkqry36fV7dhzcuvzWwG35fWgSCxLZHJwWDcxmUCD5vftX3zwtjmHAXAhhedH",
  "key29": "5cMQiWpNdTKnP779un7gpcfbrDXmwm5GzCaX1LEB3WiLsioiV7XZAPJeB4BriMqkVJviPKeKnmTyfL1sGR5xsWyZ",
  "key30": "2GdGE3s7XwH2j2LsDjZFiB9BSRprnKahjCXAe88mrt9nZC7B1B6PE7PLonLAGAcC51QqFa2oUPwm215QogxfSLM5",
  "key31": "UEs7NhNKEvD5GF564Z9rPpsdUGebdcyhJtdhzT2psbE88ZWBeJMuSGQ8vddzzJBjm5J2NL4cDSobxu75H1PoWMc",
  "key32": "22MBaEmRUK6p14x83X7mtLeskH3t6xz5qSrYGYZFkvrN9wSUs2gcZPRuU5ojpdiPvtB1ZiYENhtWd2GCCi6WpYa7",
  "key33": "3RZhZwYxsz4spuf7RPE211dTPya9UiGi1rHHXXffsL3EZuKTdazLNYdnoe8DcZfnf5zuXsiY6fGMK7ZxYwVsiwCd",
  "key34": "2ps8uEQRG5KpoaFGAUMHwS4pVzbDvBdcyXBB7ieoRN3pfkA2MwstjJ8M9njf1pXnGsR86GY2NqCAqxo8RS68CCc1",
  "key35": "2V9teNiTQUS2vaPQmYC5jCuaFPVLsMWiAGxuApiiEHCjL99jwb3yLBNz5UDscsspuy782TU7Z3H7EqVrcJjkddrc",
  "key36": "5VDo22kMd2AgT5JGckExP6jE224ETvkEhgSu5SWKohnJz4Mhb8zrMHa1Vj4bMQYoJuqVWLLowepMhx1jpnAsHQVN",
  "key37": "2UFfVXR9FcxipLFDZQMw7h5uJFBTPzRfo2AaPA267PhsEwbEaS8neSoMoUHvVzPfaWucTrHiyfmWrjvMBoBxTtkZ",
  "key38": "3S4n9XnJE1Z4qa6iV1YzYBsuiibKEsye2ymvKZZxP949h2j5bdP2wqSwNmgqscSuKVzNuSNqCVhAmd2YqW3J4YA1",
  "key39": "qFFEatpFWayRsi6BUSNY58T8YB6fUDL62CFZfMeZveRj2Sx57vSueHB4pAafHGe2ZxhPcT74QbpyfKZMt6neAV1",
  "key40": "4r2vB9oNZuGUAmWHqq8EZKiU4URtXYYATBT98f8ZS63NrZKCDS4BZib2adCoENLW8xE8iKcDPpMmqi9jjzzgQjLL",
  "key41": "4EhVBzHDD31Q2yTosNHsrqPKKaVvvwSnUP2nqJxcxv6iQ51iaMvjgezDZmxNEWaW9cZaCQJ22kiZd9jPKXo9GM81",
  "key42": "655mvdK1PWRzPAv2dUzvTXRmWRDZRijnBKtFMDLGJqsgZq9HEKsSvZ2PV3avF2h5Jrj3MuAPHAL5y8N4q1ne42sF",
  "key43": "43SvSC71PB4SCfrAu9LbYskJgp5eMoQ5imFmUAKqFkPBhPiGAXeoraMUKX9Umhnt5BN1hZigV9NgaX8dBw4sTXFT"
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
