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
    "57BYfVHq58pDWPn4m5yoZLWatbkXKXZNXH2MAA7BKXhUaLcZwf2N6TXi9fxp7ErYCXVrTMko6KHJwk2RSG89PFi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Coph5s7eEA2o6TVQcCAeKcV92q7pgAsoT6XQNg9Xo7BsRwpz5P4Y2Ttu7J5H9ob2V2q65sNrfjYCkHdAjqD3W3",
  "key1": "4HvR1r36vPgDB9qEu6RbGKaTzR4WW9kuRYSUyKwq5zAuYT478haXBbYv5dEuw7CbtYJwpBsEg3ohsV7tuqe9hxjg",
  "key2": "5Ast8jidpQoytbeF1xjJch5yFoj3e6hFKpDphhx3c6g3AkLd1sMqg9pp5ivsKxGBFXMiLbqHKEnSgjGV55uuMPHm",
  "key3": "3WJgEysz6EYFytHrHyNAx3sKNkvgNE1ZdQNAPNS8bHMEiCiAPV2YtSwRZyYvUrxhn6QRRQF8syyG2DJi6ggNDB4k",
  "key4": "2KbkNGDU8LN8q4sQ1pGBpdMMmWMvGWzSA9yrNDT4XDeKBiDGwzcf38Pk2AA2jn5oZVgoDF3apucA4ECS672hrgte",
  "key5": "2xGRBdpnpiL7u6KMosSiV211bCeoF3TjqWPsCpbmnTUZv1J8kG7QxAp2fRMGhXdakJV1HrQRMqpiwF1ccNrYCreS",
  "key6": "2FTo3G2WtshcZgMmhFPwzFhtuSGiZeY5a4MbVKpHiCn8fD3irEagU4WdD779ijNeB3YXVMEHzk2ZKhDtU24VLf66",
  "key7": "4oBnbQ3LtudSAchyjGj1xRpm7WL9wBJdgWUNjMNFAq9M7kcyP4t4NCeGVSjej77DYEWhB1mnDdcgE1CAnXNRAdQG",
  "key8": "2Kb1Tn5Ne3CNz4KCS2jEwRU6eVaUkJRvCGA4WxLDkpwxZVxn1XVLD8dGm9zsdp9ftHUoB6fEhNrDLAfXHGA2CL3d",
  "key9": "3b5VeTvueKSb3yVTmBTJ9E542NXHxNz8vzY4tDyaSH2TaGqt7kHfhnreJcrvLZ9PGAzR1yHXJs2dpNR5L7uhWLgq",
  "key10": "bP7QKNS8oFoEdErxSuDhpqUyRXvysK73iUrdzmFwKfnqpSnkKP3Tump4aqX57egouQMS1FDGA46r286686P3Wj8",
  "key11": "2Rofw1m4WjPNUDm6h3986XVWir4hHZreWD4Hw3TrysUJiYBdEZfK3ntc5hAyjz65raec85p4YWvV23gjJwRiUJT5",
  "key12": "2KcGqUauM1CWSedR3baX9Z6AQaCPvxAFf27bUAWRpy4HUAsQ2Vxm1fb6JoZVDuqbYLMuhUz7hsFtkCbg5a3VwW2J",
  "key13": "CnPwn1t9jknm5bVpZmbqgnFErJ9sf9k8DN9s19sRmK7AE4kqSShASo94DG7rc8oyELEZV5BdvuBMVTaydB16XRb",
  "key14": "3qvBELfmoaMHaFHevwipygEDAinYwBV1RAhQcUSau8UsR7pfNc18zkHDWF6ZEFfqxxg53Nc3oc4SAUUNotGz5Dtm",
  "key15": "cxGfSSTA8empLLGQuLjyE3TTpoVfCzTs24oN3FCGLaUfVd9EKbMcX77zZaNkGuBfaTpbVZK67QDyLfeAZ829e3V",
  "key16": "3jzpCBWQjU5TMQUdp5uBH8DWbT774PQeoL7AH7oukq93WEAwva9CeAytHRQQQEcpmocruZGAMxXbdXQ3h2VHfy32",
  "key17": "2VJKyyRiyASYeB4AoxJY5xPsPFvMR44qgo9TRfXXpgX15EpQidYCCVnB5aE8KFVQjUZ9dJvU2iJJmCkqa7XDnX9u",
  "key18": "3fuj1d7Sjpaa1kMZDZvNx4hHpmTwsabQNNBSh74ocXCyM2eKTWNt8XVjJ5pFVBrKDMxjv2fA2ueh9hmw26bcBTJe",
  "key19": "57EL1dkuwURuzuaVR9FEKoyEVptxNn7abPGVXXk2rfJfGbxD3fr4iKR3bMGXpymBvQ2pcLSyTzwevPfTXSTJAACc",
  "key20": "3FwPmx3ABj9rTkSyAasRV6djFrGLUXoAx6DNTVS2Tko5MAvmhNWsMp7Yn6kQ7AdpTQxywyLWN4bYZxjMaYNwDQuJ",
  "key21": "4PsavoVBhQMp49KWFsdnKxL5yShDFLCvaPHTrWGGHLiMogb3ohJ82P5C8oVHDvUBczmJrZpfryVbMe19W5RK89tk",
  "key22": "5g8m1y7hLCmimL8tsTf8mvBhJYwHihydgHeg3Tka7GwfT1QgiN9Mb7n64Qz7WAeGo2TrwNTsnAntxEXd96WrRMiq",
  "key23": "4v9KKLrGeLrRxDxaYyQysABX2BDYCP1kFXqpUeC48FJUc8jx3vtyz2R1sXJUYW85WrzmEECzEP1sf7FNhDvwXyTZ",
  "key24": "2kLyBMghzPS6R5gLef1jUVYoiahQfXAFujKMJLW2TVhHQ6avzKYt8dhzNMbb3qnA6sur6yBdjzk3SPNBSLZPaFvq",
  "key25": "rSMJpEC5Y9xwsE17QTYH5Zt8XbQimTckUfR5EaitX2SCUAuDPGuGatdhqzvtbgVKqHpHQjW58Wfoiua4J5gkrbG",
  "key26": "5yqGqS1d1nqcDtkhBaTKZ7Q326SS3sLa9DLXeqMV2SRZhcg1vPNrtFFAxtCETs3V6U4M9BvbyExBk35uT6Lxjh17",
  "key27": "4nfhN1BqWzYAJ64K3rqkzwHsCLudYN8DTro9FE6a1x9gVWFcdPf6WzjvRifmTUAciNDRFuZhcDsKfsafdYVbZfBD",
  "key28": "3kGwbeAuzmfJSJksoKD1Se9XZq5hB1a5WyDkPS5KGPqFUgDzFtS2ouh4RLFho66gHv5Nr3cLVVjGNcfGhzG2mYVP",
  "key29": "273nAH1zLujMV9i52TohwhhbCWoz5LiafEpRMqqFSUpxRFHGtoi6UMiq1i3yuMeFJ7jytqog4eiMePHmMYph2H72",
  "key30": "2xT3mxiQokcuHpLJWuivnWPUDqXu15X2xnuf6gNqbXQx1B4GRvai1zAQRkG9uthT4uGZNxKqJsByU18kzoTdv352",
  "key31": "MRtirfXsbPdk9aBK136ZqTTEiY44YcwzdLrNDLNXkgQFjNd11Qgyisbg8v9PX3uSJM9AprWvDwV2t1JvVztGREu"
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
