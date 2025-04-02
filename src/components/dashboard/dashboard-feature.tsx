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
    "4siURhoYz8iavc1ETHfMDoKscw3WYpTe7NydFFfZokGhaWgyixWS7NcvS21J9qVLzsJPayBk5nDhoz2ATUufKLoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oz1c63FKT4Cmr2SeX2zhxfN2kmriMQurTeZuZd4tH5F3hC2KcSVAxo3uM6YYa23KtimzRfPbdhaFU4GVCtkyLHZ",
  "key1": "4onq94887kzDkYEmNqx9fyMyUT4PGQEQgSwstS2yHK9nBzZnab13Eq8ThgLUT5imC86w9hKzhNvq9WRfddMwf9GS",
  "key2": "48QSxK4uXWMopyqAsnofSbwuwPdADU86Z6csBTSSJVbMTX4YGo866cXvwFKz3rhzrW4qgDw51Nm39xd9hPn4J65o",
  "key3": "q9goDSdYrUCMpe8rhx2hRmUv8JxHqw6u7spfBXLX61Lkj88U2JTbwVf9jcP3E42A96FHWk7LMaBN58EPNsREtME",
  "key4": "4mMXnNmHWzLpVrnedc2YG6qjC6Dv8QHnymQ2Vu8QFqAx5zzaNNtxJeMmwZwnXFV4YtEzbWoc2o25bvHyhaFnn2nv",
  "key5": "2zwSgMajeccXJbPo8wVkay6ZHL3aRttB4Dp7mgc7QxegyU8Dt1VNNw3LZG1ecdGKqVfCaaKdzZ2YDjr5RQmT2L2T",
  "key6": "4dicwQSAcSanD9Nze32y8Gk768VDx6CeTF3AM4m8yS5Uz6LLN2NbdcN9MkeG8G3DeHQkPWzsRCuZMw9TLkMs93dm",
  "key7": "scRz86bpfvoS1eeZgyPANE8vMe8BfeencS3xqTZfSbGMWnur4gtpcJ62m3rKcUJHrEkANNpdEGbF5yqVuKiRtEH",
  "key8": "2aD1JJXj5TM1ZQMVzAxRHVkwjpzvf9oixi9UaNhw25NsD6whKRBjfXkBJyGaTHsjaSMoNoNtqutLgqKguLsBjvbR",
  "key9": "SRTcP4vqgPgrUMqAsaSQuUYvJmnKYa46wYeisrP7qfYsnfsk6A8J55etnDHazx1cqmnZNw2sAywH4LEv2UjvyGt",
  "key10": "3YiGteG7rXb6fEQR3JonXG53vJzndLpvjPEzuX1fxV9DtUNJEQsDULfDA8DU1swPBYAbbNrvecciopPEjL5FBqRs",
  "key11": "4UDfmP13ZTWQtC3BRtcTYc6NTS5rht79vt2QGAmNH92QiCLb9wktXNDzrisyz8pqpvVyZJzTK7XrdSkfr34ZrpQY",
  "key12": "4X6hs9fUHL68nQUL6bH9otr2SdCNax8Py5sD7F9dUfPWcLHXcSUApMX6GgZcLg8rwZvbC6BR6pUrmKm6nHK8R4eF",
  "key13": "65HynFb5jEwJXMA9KNKLHwhX69USmFpXYNfv7N2ewMDZn6D23PukowuxmAHmfgRJnx9BpA9HoH39z7FLernbB6L9",
  "key14": "4zNA7bMwghee9dGTVAtF4XGjie7ftQj4ACQN1mdWkAhYLj3YK6AWU2aHDPDBBgAzJkBqNKcEi9t668yX9ivtqyzB",
  "key15": "57tBCj827uHrq5sZaH5e14bs2CqRHNxhW7Et6iYpD4co7TAGHBJL2qWEmsPKCDiDwqG9HJHi3GScKVuvm67tTpdE",
  "key16": "5nZ1orMYyNZ5Z71t8MgJmr2t3qSibiSX6xEnRJJjNduBgsdXDm3JjfwRZEMLaadF2f1mkhWVzxDTz1peu6NLTVgm",
  "key17": "2wvDzyZcEHs3Q2KfU7GJ9PST1p1rQrbsxZ86xWETpzhK4aYtDQTVknCzXrXhmMj18TqEqqFzNZBhgfdMDLR9BnDJ",
  "key18": "UcMFk18dkHNccjkLpRXHcWxfxuMKJD7ptH8MhfVPs42ZX5EDDUkiEJhxxcSfpCHbqy6tEyMbtUonmE8ChpvcJPs",
  "key19": "39YSNmtZq9gQxrmvxvdvLYqyC3rQUagHspEGqnJUGAVNwvaVPZtLrKyvbRF86guK61mCSQKZb8HWSaHKCsWr8cD2",
  "key20": "YQDqm97yhPiUxFpBpXZUrh5sZPwLVKKA5GHsqEKC7c3UDoyMnitaRPVG6DtbUq88nVs8M1uzvaeojGA82hZrEg1",
  "key21": "p8mTVetT5ciVc95pPAYDr5gEUtiyUbUbY2eb8J8gfMeBhXqWx2YTKtmCdFEFjrLZsPSgmLDH4uyJTkRiTqsVu8H",
  "key22": "3LjJoUGskcdKKPmgzC7uxa1LcCXrDb3YiPhrSkWCL8mqhT9N7pcgAwt3FSiHAqW2kBxrStBk6LzsCXKorULcto3R",
  "key23": "5ZfAwNqhYBAFac938F7uGT6GYgcqF8SuH7fpDJmmqKaLWmgP1nqke8nqtwx8E9xpQuuc68q89xwspU8YSGe3hyoY",
  "key24": "2XSVRQFs5RrmcW9LHS5HyChk2raZ8FZeb4Y2i3ZdZtHU8tSoeJntNf8mgKiLUk6UpQTTJybudbDeVjjE8zvmFvYm",
  "key25": "2NsHwRpioi5HL38XHPFAyEF1ozmx5SGiSFXcKbptmo6T16NXb6Cbpx5Pf4MNqdfy1yaUMwL7A7TSiUYJUFncAUjE",
  "key26": "5oTq3ETEmYU7Hvr1P19v7Zua8SLsB4NdmgJAj3jrdJndwVDaDad6BdmBxjKZfY6Yd6BZKkH3rcQJ9zfmX8LdZGw8",
  "key27": "3w2ZJob7Euj5YUdgFdKWffYUQt2BoqdK4Wz3d8q7yKPuMWV8RxvgWGduuYbZyBSypTrrwCrXBxYxsTqArcq85amr",
  "key28": "fLK8PvNG1FKj47xvFxkhMB2bMLaqopcqsAFRuTh9FwJzxU8XUY4iHMimf7kRSHE63fmL3HKEd2tiGJR3W1bg6LY",
  "key29": "cpwXsajmAhYgRhjWjsr97E7UwVEhprxnAiB4Woaf75Hj3GsAbpxgCaf24wRS2iPdiPs2LPVbQVpuxCtKBrtqTyx",
  "key30": "3CEsVVLvChCjoMHvfeNy11gdxJiAJFLuy1eaMwxdgXgsptmvkM759cvUK8VZtmbyHtB6oQffPQ95z4ahnJJrAXEj",
  "key31": "5gkUiLdNiTyYpqewvX8jo4HZh7FDMW8G3N2QopJKpkmtTdi2Dxz253TB3AEjugrB1jnQxQ8974Z2x98hy5VckYAZ",
  "key32": "gznRfPEAnjHs54AhFVTKBwYLoTCPfKyHdkVPbyUvE7kn6ieaUb9T1ntEwhKFn2d3KLALFoNsUXCD5xx1kXmV3NR"
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
