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
    "GmKM2xpsod17fQZsXV89kBynvjWKTY932X7s1nRPcgz3mjenJKksCtNN4vBJvFAPGS8qPfK3va5NYj1cMNJFufC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jj5Mgb8u5zp4n3Y45XVaAJu842bAF2uMszWLVLzSRM8on6yMfchXy9CoromarHqCjyxuw4NZii1f6Vpj29C96G1",
  "key1": "5DF9NrVzpV2opmzZjrY9g7tBa3QEPsW3NdbASHXnP13MVdVb51SJwwHw6TQVsJZAkFofubhGpQihZ4EPaJRY1gJA",
  "key2": "5e6jECjx9P3xLVGwPe91NkVBqEjsteH53uEjaLDY8Gke2HsziTSnvYXZoxkZVzxXYXWNLrKxSf8ztVv62cw3RgfS",
  "key3": "3w7K78xHMfF1mfZrCz4NjBxPHp8EM4VTxtWsP59VmHJKAUD81AW7fusy5TmwoXfCXBVShPRs4wHcqbP48zWPJYza",
  "key4": "gbtxW33k7MVbGRZGYoQ1UjqP5jPerVuGXLbkNwfZjymiEoDWzopEMHKN3EivXMnM6cFou2TSJtbrmeYa5nEAjsK",
  "key5": "5GeXgYKRfiBVQ2ZrQMe5aNySFK7GUZQXsLGwYVxQYpHdmgWh7XjoSYVQvdmgE2fsvsspHs3dESgf3w1kwrTh46Vp",
  "key6": "45cJCyJvPYBDuEqLTHFNRCFa2csyu3bYNtiL7xbZMzctdy9STmn6oF9L4eJwF97dHdYNHj97TPvFuqQW6zK12Dvg",
  "key7": "5yY2aFPjR3EkahwnZrVJodKBfsp6HT53c6PXPwuqU6kaSQpDvbm4aLHNdXus9Fc2JPRVfTWGXjnXkQMsYT392tXs",
  "key8": "3CEusjWtxh9Af7JMUwJsyLFUrAiiKr3tzZBaj6rU1ni8arYP9kW9XmnFaNFTBJnZHXp9LKLPycPwkwVyCNfeL3i9",
  "key9": "5SHLEokHrYGRanN8H6LLrmgN6LEoSk3F2BERBW1SAfT8dJJMx5WsKrn8URPftEZn58SdZDL7G1Tm3R9mx9EXmuJ5",
  "key10": "26mHett48qeAfQFhvR5ncdUfUwgfD3TKU3EeK5SiStEGHpF5gM4QN9uKZzGUgYZGAf542PTTobH54bEpPgEoMbPp",
  "key11": "2seV3PbXpR3EfFRKypfSYT9PUzhGeWBFFnkkefnoRpEw9Ev9iWbDFuPhXamWwLnbQVFHSNF8RwUrQrouT6nSQRj3",
  "key12": "4PSzMabGwmjin3xFmYQYHMNZZwJvJXqKt6ossLfABg7zFsdWjT5UZtDwUpDTJB42GxHyWd99MGYLdTnxmPtYPkrr",
  "key13": "ptytVYWbUbYPU7BtRrdT3M9Q2FFJRzUKsgNMH7aerKh2fLD7U8M7xwAXcanX97sEZ8FdzcZ2YgRA3fVdLgMv4J4",
  "key14": "4bhyargAcZi5MG2jPQ53giQDKNVuE4bSVwbLvwZuoL1NosMC23UqfPNoSik6krV1jD7tQCPeuzTY7ybRphTvYmHt",
  "key15": "47U6kuxwsdnqRFb83CG4cq5qiMLUM9jxapfFEKEhcwsyuK5iEsE3S48SpSazCA51cueq1SRx4P2CCEcsTATRLn2R",
  "key16": "43pGzBFmakfRwgKVWh2wUoMj2ff7Y68VDPvDKiS4Rsuf34dio7eArKmtQeKE9mhskKrzv2sVWNQgo4f395TkSFQe",
  "key17": "2eL3hAJ72LMJqJHgsdbTvWhHXHLiAgEcVbgPBcSYLW7WCstVXuZCW3PZDL6So1FczLgvD8Ne9hxFbAiN5rCSCyyP",
  "key18": "5HaFw7vnMqupXp3MpPvxcFmXHFjF1Fh4Vwo9sSDeA8BFQC8Gsnn162FoAADBR7X6MBJghU4eBuzLU8XQjBwJjYqV",
  "key19": "4J5fGiJTDLX7SZTrbFYYwFXuzJ3hYMAvJmmZ5Gom8QDvCSi65Jf1fm5CmNzziC56wjxFTvYvABzwWPFw4p1aKHme",
  "key20": "2Rm9RZtR3P5mfH8qbAtbzLHuxczhFxjA3oJyzhosKxGp2QvK3XDrvQ7EAK1caDfshnYZZHoBbFynP48mvis8FNvL",
  "key21": "2atYXWyuhdVSUN9mZS4N9VDnLoxcw5B9yNUgSmTorKUQeqJowg1zTTehFVeva1fpb4NwLY6z2942UQ5rtZQ7sxXq",
  "key22": "W3q4QSdYJqYNvfiWziFihtkmCiibt3oovKVPLu9vxHT9bKCNkFuF4VqRyrZbLgoNm378iESpVue4Rojuz7XMbXJ",
  "key23": "52NBfEVEp3i8thQ14rtCiKDGJGARPhtxcA3sY1R3TXAQoVy1rfGoad3wmXeaL8xdvXTeX5iZdHC4wMyCwhayGqub",
  "key24": "2fY7Fe7cvyY6XyBPidB2Zk9uC3YP4joXo29j2cBtCEVeE2x9RbrpfiviJJVxmbUrGEnMhZv6o5EcxkJgPGgTAvY",
  "key25": "5Zok38UJAPh3xVkrKgGGVraJrFvFwTg9LXdUqBKrmQTKimd8zx9AeKUiMFbBFN3EQeY9H69HpborFEUbo1pvUZbT",
  "key26": "5LTUkEo2s8K64mr7Pv82BPeYJ6qtfcwpMPThMc8NErPLGvJD5TQ6ASeSZNFfkRZtrDuULNUCLhNJywWvtRTXSQbV",
  "key27": "4XUNP5T8YDyFADxFVo9zrVcvoY18KhzAXe2Eyyonyw4WJsVvBWCTFE9AvbkMMLrx2e5veNz7JS2obERGmNLMjfH",
  "key28": "3AoFuTg6iK8kd54umyAG6qZCrySFfHDvHWiSsk5hDNPyymH3NLpV4ynFgvQkUd4bEbFWnyFs3Q4cKnmpkbgtwHGh",
  "key29": "3bvYVyWbKUuDtSpn1LjLsJA5ryGqefbGxNmNBdGiqCKpSnguEQXptQ9D6ZZMgyAiRiRJGp84MqmErpuvst9rfrkM",
  "key30": "3hYTbesFNjJ4xeNwevnZbbZn96sG1xujNsBdcP5w8Hrigr3Bv1RpRfre21X3C9jAdHTrJ6NjDJuj1BY7VXy44dNZ",
  "key31": "3EbaYhRsNKaP1Z8GWfB9hFYLVq1xShARBxNXeVXEEeWZDb9wRiPZPEUsRrn3N6VbbLUVjnu6NCiNdiUrMC2iURqA",
  "key32": "4iQ5r5Lv9krpU7RgwYr2Zu6bquqPdzGRxqgWB7pZS2cRmdV1hyWmfvJSr5dA6k2jpFBEtB6GXVrVDCbhvvyqWHKg",
  "key33": "64oDLY4GAHjR2avwefKqrDbjYa2e1u7iEszQ6dGqvTnTo4hrcAABx7jaNhrNeKmKizGviczmYmB63ws1Eau7jQzi",
  "key34": "4VFC5sA3J1NppnJS61YfQaYqN9cTwauSGebsMcQ2bAqQVFoeFoE73CxPKYc6b5dTVBHYVt6Gt28JrZDGcwmDTZV3",
  "key35": "fDZjABqewPy1oDzh7GAVwGJp87qNYrwLgQyeCBFkuaZfT5jfZpvWDMNj4m5gXVT5Ymj9dW6JfMCztHdXq3Ek4Un",
  "key36": "5NNwsJeFABNDGYrbPXyDrtbf6KjEZFcvLzPZJr6eL7yqkUAJQrHjZqxCAAqQ7txmZPJfuPhM1zwFSrCZARVzkvJU",
  "key37": "DUB6Crnm3j4Bp7a6wTZipoLqXMe3DEs1M5EPvCXpKBtoukiqoziUJGE5JjCx2cx3PgzQ44n9KPUewcXAaoJNPMF",
  "key38": "5FghUQ5pjA76AKAPv7snziKHDfKryCu5hGCuXR4VGPnFzdncBZaPTjt8qpLZemCV7MJ48HxVJggsgTa5nwPMtFo4",
  "key39": "yBEDU2rsALGcSv7t3Guk6ErsrPC3oxLRvmv4NxT6N6itsZSMUvxfVZu1DPx4Y1yBQ3JcjGN9rPdt1t13EB17Mse",
  "key40": "3G3Vcdw2i1deyPxS4uhcz7e5xnKQJs88zTFxe3xGB4F9yvKXe8zRtoXjU2U5RqeLVTCxM7AN5SzMo1jfUvonBCi6",
  "key41": "2vhNUSs4zofNKTMgTuHychVURU9LGuvixXBaGX2DbzdZiF5ZiQR4GeHzJeW8k3xDBd4YuoZy87SHKdd8yZGEoyia",
  "key42": "xcsPETtYxYzJyc64noeRSUw5ZJEkDNkvMLTCzJPgJP6VZEYwYvK6YkcpVT4XwQUFawdTBsAszYK3hvgLbuixVKP",
  "key43": "2CbP4VwJPwcgQRoz5dGdZUJ8hU8h1aVTHCFhgmgqfUwLnghuNZn5aJECqYgiW7SFWZbuD4g5ev38eCuNEEULq5K7",
  "key44": "3Ete2yq4CgotFV8NFyPJSaYxrYKTCRK7xmzehM3Qq7a61bnt6AhnEYRBfhpqE2BSBKZKUD6mcrTBZVu5i2g5Q6iU",
  "key45": "4SFtQVi45epscLj12XLUqp2uLgLRnQgV3JZoqZSEdLTYsdo5u8949iy1P2iAua8YTmAxkSZz6mrzPgPNkiCiu1oJ",
  "key46": "4gGynwCncMwsrPHaTJ6PgArfSpoZXujZuVyHWtSAxEnGQerU61kLGwUjLuLfZw3ui9HysZzgSa6YRLuDjbRZjUDX",
  "key47": "5Pub5Ce8AqhJoYeiUVuDZbg7sUmwYf4iBtyj2VzBRSPchhxMQvkhu26wyTwTL2wfbFKyoxUpGG9ags4UrSaepPhg",
  "key48": "3ybPyjTbYZzS15uBZZo3mmHHx8fxezqvuqQFWNbs8YzVyBwB9WMTiCbVPg7SraxrnsPTmq3kD7kwNNUR32RitDJK"
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
