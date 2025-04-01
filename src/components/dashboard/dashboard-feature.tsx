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
    "3NrC8RWXEsTGRpRLc48SwBZCgwjasaNftKoZFdSbLCmdbfwcVBZPhgW9sGCSqBdrwHoKdoXu7EXZzugA5Pqhy98W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ggdxuShTzbThDvtYt49PCh5CuSdwykZDEukGBUAiFafekaCTvyGCNYJbxcVJCnpGqUxunLQ6AFMU2SvAqR2UzKw",
  "key1": "3ixJF2GQPQq2NPch9f5AUYAWbqY3L9ozSzxQYos8rDqaGW6piuosijEQqfigTSeNpX9jS8GUe44LWE8QwygbR9UM",
  "key2": "42a8SWavTP8iqqJb4LUMmGRFm3Qy6X7xgHrGtEChuT9LEVENaoGnLTES5efg3vH46DbMrcetQqzV5aJmesyRkEBZ",
  "key3": "4b6DWnuC4m4j7ce8QXQ39e6CTnYmm2NwZtexLWjy2Yx9HkLfgWD6ajRh1bn24Vt6zQm7iemVBv9xJvRaGmyG9yk4",
  "key4": "2cWvJCtJwgHpVDy4KtacHewEBzRFEjxA7X9yXKJ997bD5ZxzHWeMYzvgbAUdMw5KHrFJKxUcxg8nWKgzkGbue6mH",
  "key5": "5HM8a35NJY3hnTnbtADhu6WiNkf2gvCwbaKM8cWMaFS33GYPh923EgWddCfZ6HNWBtZn3Tt4j1meV4ZUT5XEt4z8",
  "key6": "3g4gZg3uJxcH31aB3F36iiqhjeJf9pdosBFSQRTYkLEtQQsfZsZzSaWp4eRTcYnpL9iqo6RtzyowSUdDqxT78npU",
  "key7": "26hDh1sakRY5zMokNZZ511DibdVQzbZSPq1diCiQmqRpbGkpgPL3KpLhDgSzyarMbTN5vNhnLWGrUACSy1YrhpxU",
  "key8": "4EbD7oBoPh3oYQFMyLwdW1tVbgf63iA6edYVZRGpLvSmgfC2U9r6FpqVpoMeZfauwmmvqkJZg44PMh22EMk8eQhN",
  "key9": "2MEPBUA4hC6HKrXQPj8eqNWjsdvwg2sXWiUeYgkRjVkbLPyjfXMxx1juKbJaPMdRiJJ9SGSu91E5CwggBkAFKsSR",
  "key10": "3C5zhvJfFXbVmjoaXz3LZKb6oWg6yKvjYAx2qSL746cdPXoUqwpxA59mUvTznVMEMSpdvZMkGZfiYyN3SHyidFLm",
  "key11": "4mx6A9XNBJxTG9LFkFyR33w8SeGvnYdL6HNH9PpA8DhRNUXnaSvvCydoenNFxu7AS5Q7SFhRKyantjNBzDYxnNCc",
  "key12": "2VtyMqTuKWnbAo3Kw1tvriysP2E9vUqnzy94JJbLysviQEuWdEgJcHK6np7hdxnJccqLyBkuwfMHoRaD3YwbLqmu",
  "key13": "5hkWPKt1x4pwQXxgaHhVLmPRAH6w3Ea8iR7RfpSMDMU8nwuvBMW1DfEJTAdhQrrnCQT6REi9kpng9w2NyLvtRYhy",
  "key14": "25ZEAwyWDYQT9AgMwjr9Ye1X3J6aHP4wpxhrC2uLQ2PrVv9QQBLm1ZoLgY3Byaqbs797R2JgMFwQmsZb6dhJySPF",
  "key15": "2XtPGVoPCeP6PdPYkhUj82m5U6r5Tx2vrMiKPFURVGzfS9whjafdT5wBfmvm2AFcPxYNz1k4Ny4R3omuRQHoM9Ac",
  "key16": "qpWXbtQgUseUotAF2sthy8LycWQpX39hpunbFpnAmMB9utLbweggxt1Z9sHrHUPyKw7Yys7tcStYb75WdNVV9SJ",
  "key17": "2wfeRD3dRxcKyFj29TmBFU7vVCNYEgibRohKCFT7wwNsxtXn5oHCdyNQpv7LjZTQzZHrL4b2b3KpQ3nfNsABJhqc",
  "key18": "4d1U9GEPRXMoxzH9EDqLHNLLU8CtD92nvh6PwZ5osjcmVWRFhFsuLRCsMuJjFQf4QBZCzSdYdnER2mJQ4M2s1zgJ",
  "key19": "3MqcCi6XvN6Rye73FGpEk1AGwHrqMCrpiz5czzbMF1v2xTHBQBZJfvcLbgnmn2D581o4vQ2tkFyaQRmGVhdBjKQE",
  "key20": "4euF7X4p64LdyWRvj4G95rcEdaE8mvC9QYGZLkQDg5BoJnLbezPQYSnPSCS68zJh5H1vahqRc9U5eju11YNpRoV4",
  "key21": "5bKDKTzPU2qYuvfXzhkL8WDmQy5ZLXFn44wJmZJ5bvHBnnxAZsvj925MuQX8GpZnSEH9NRWmwqsjrAtivVEZDyyn",
  "key22": "4wXzCKGUL2aoimoQBetxPaNkRtu3a7jvoM9WGXcS3hj4qMVoAnNcdqHrFSw86rezHJ8CdpCUTXzacLa146nrU4Xm",
  "key23": "meFXafMqJv8gzc5psobbLPETkj7qcdUSZfmBub75LQ5jAFnYChw9KsHLbFBi7SsdSYn9KJizYaRY1e7wzdFLvrS",
  "key24": "NySy6WiND4DtkJCTw6vYnNqyyNRjqmVvRdHMSTc87qiW8dHPusUjsFchH1mQzZRrwnTW3Cc1x5q2ZYQhCXSZdP8",
  "key25": "36pgcmYa8jSxDUMZnj5xPbvfuTV5dm9b1c4mdFHTn5tX8N3vLk4kCtWaNhphBDRRkC9jLSZc9FViG2DA5Yvv3qRp",
  "key26": "3suFEgNDpSAyBFPHXj68UbbdHkx4hXjUTnixiPnmjbJg6vSoCB9ft6cSHgd9bzWnJSzNcwYAXu6V1TRZon7TNpVz",
  "key27": "3zZpT3ECnFjHWXRC4eniP6ehdQ8BynVpeqKzAQYnGr6GVzuRoYqW5eR5pvBDBwxLmHbwFjHWDRxCzMz42Q61neSt",
  "key28": "2br7PLBZkEqyN5474FLAj4HTispRL5FztPtvMwKbNr2w9QtGBMppmdeHyX5N9WPqL5XUTapfY9xPeEGnuM6zpFeD",
  "key29": "45bKwyrHGhwYbMbQC65L8Pk5j6YwbaiNKBNiCRNWTDdu5EpapSYsnviKG9bqZaaCfozsJtUZU3Wr3y8KRrGWRFqh",
  "key30": "4GkV5yVNxoD7iq5fn5vKszz7uJFmCMvkuStQemNwbrtf4eSHpRHkiySh1MCsE7e4ijEqNbJuCRUt6HL9U3MoGYvT",
  "key31": "3JXX99NbvBEgidZ9PbzGUYKKVn3JS3FMq5gBKcd2reKCGE2zBvYkdPt6ESqYUA5zMWYRkTEehG4hGumpuAn4jW1t",
  "key32": "4pjNJTxUm4sPDY2u9RQcAPFJJC3Fryn5gEpSHKQr6YibkWtNUJbsYw7VZjyEKNbsNNzDMXwYsMC5W2XucGQ9671r",
  "key33": "DKDaz8SXuXTLfe9oDpYLjxWmWPTpG5m6w6t5moQMc56mkG5HHGkea2csHMcXHqHosj1UuAHNkVWobE2CLFZJoRQ",
  "key34": "4nba5a3fKgLUZPYLZcDTPHHL47J8FV8utNdYty8zep3iPUtKoDGmYnUbEhD3PgVbz7Eu9aciWzMskUP3sQaFGPSg",
  "key35": "3QmpME8SYjwKWBWKQnD7SpwH8b6sTNx9DAU4AGZ31hPeppKsFKZQ4kN3qnBkHwsQTgjQ3f33Ypc4QS1ifk93HMkw",
  "key36": "57jeKzncSQZtUfAC7PUAeKRi9qSTR2crVP16L8cizdmNcokKHWBaqNYN4JVaaYy6ZuY9Zf68k4sJt7iB8vVuxkmn",
  "key37": "5kXNiNtdAsQpDZYjwQ8CktczHm4E7rtLSV7A7542WKRvwp8DZZM4CszmAE7iMg5esWmtg2o7dmBsEdJCHPu8nmj3",
  "key38": "2YecioeHuJQsPpn2Cf8GiLEv4EVKxiHkbAf4s7HEc9AZwb5vgkKaE5cyWxziZnGDZirwiMzhjC5eFpL1ffMHBk3t",
  "key39": "zKRMrp5pf7PKy9U4bEhamR7ydyuwYpD8tyPgMUWUS9NnaYxggfmTPzK3JqmBhtcsyUJnTnCT1ZAgMBfXaP7mCBe",
  "key40": "e7BvD8HgbDx6r83Xg55zfumKfJVMQWa1GFvhbvjDpKLm5pnanBpGw5n6UeEixim8YdrXgoG8UxKcXPDjBgD9mLc",
  "key41": "64sLYZQJMmJ8VfoK4LPwMdBeAQgVMeEXWsy8QKjpifGE8rU35YB58xccRfdjm3UcNhys5iPZGHPft4MEv5GYJpY5",
  "key42": "2DJYo4KUPDW1PmzbY1RzzZScXb1uKhsK3ZQ1paCzJ2R13hoDj7RcxgNTYPQErHLZmyk1dk3z9DPonTk9gWP58B8V",
  "key43": "5jQcVTc486EDsqNnyPvNMFZutCt2qKQg3usNZPFfaoaD32FtvehoTaRG1d1aRAHzVv7kTtWHE71W2EayQrjAY1Ba",
  "key44": "4fr1TKBik5LfFG5Z9jfU56ZYteDab6orBUUw5txpHHh9JZHk1t9y7cX4NiGGQiakZAyyoAjpiNqxsFec11FT6A8J"
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
