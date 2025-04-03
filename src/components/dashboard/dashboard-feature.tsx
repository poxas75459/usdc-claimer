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
    "2khhbAMErF243jbfwfrfbKCYRujhwFjsZpCQ4SrtUr77ejWsZx56vvu9LP9LSvDJRj6DjT1tXZbC9wpyheDF82Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCuoyw9cRDP6FQ9pYLfgWUKKWK3Mw1P5NK1VDcSKsZB13DATDtp2oZtkr2TqmfnMHNHiDibdJirW2rrVbcc2eXp",
  "key1": "5ixBKXqVF7NLLGeNanh7oc5U6idKqStU4PjCY6xksYUQcySvEyMFnKmRixii6FUedYwyvACfNy3mvApPKjPfsvyc",
  "key2": "2mGE5srNZ3pxRBrEFFxHR5beJaxsACboJn1W3oBJyzAMkSyg7RzRwETL3f1CAHkjYNAiyVurEfA5piccq3w1tV6o",
  "key3": "u2vzk7obsNJotJj6L6pGnywQzM547MN3L1ndDFPxa34TrgVM6kcBtNfBMDv1pBCfnpkjj6AyQXmYCba2ZdTPbd5",
  "key4": "5NUiwyUbENU7e2kFmvQgMB4dwqgZSoUCwGimw3NYacHXfcw5fS9yKkPpRZy9TXBbEnkMsVuK13TnwGSpVhdmviwE",
  "key5": "ky275LC9hwtzjrjsMNXj7XUU3G52qRQx5FNip5RfbrnfJBavJmrZQuqgjfTcM9jgb4ncdcszboYs84bVXEiw5DR",
  "key6": "5J2Qw6E3YYdpxwygamjKvdRUGkSCsi8eee3S9VangTRpcw54UPJk4xzwCsEZQxiRvAbfEx9FJ9W5PwN2HaMbwKU",
  "key7": "4YyZSjDziZNkEkGaKbdoGKAkw3LZxbAckq8Keg1QzcjbAERANwmKRxexpSbM2hY6tD8FQPQnz8VJXESrnsihtqMf",
  "key8": "d1gr3xaBhz4S4vbNWgxjSgEsN2jQEhaFMe5SBrnP5RBwHYFKkypu2wqYGRegyyB4cjDTk26kuEdFvm8Z3C3JUYt",
  "key9": "4XQc8c7x1buF3WPFpP3Gxbrj6h11n4bwKiEeJB3Uc6xmokiVNxBT1vJA4TboJKt4Bp3aqwxruHAgMtS9b7H6xa2Y",
  "key10": "51wsL5f1FQsMDq9ZrHRGmAuzCaFd4hRENzqcFonvaQ6B7VA4wKXADgahgqb7N3aU5DiJYotNTF1Yc9zAexCehPFk",
  "key11": "47gjjsrVg1YXetNpbEbVLjGyVdCtisH4wce3gLNVih2J5GbyAgAKcn1bA2qC5vrgFYHyBBNwgYAxMBzhZRpwBY6G",
  "key12": "5GCsz8ttdtjHknqTK69Rk4e4GmPcheQCJYWQH6fzFZBDmBD5gKs7ujFQwP1QDJHyka7YXSLiYXrwgZocJu5PXk3M",
  "key13": "2k67UbqVWg3DxzJSDZAFPpNELbWfA5bSwEXjG7cfRsAvFpfdmSSv57Qq6pn7XACJdepsFGV6DZPy3UbnqVDsFEwo",
  "key14": "59FqyfxCGcHbZPFx8VkEev3fGPvdQ3F2GBcLpgh1V7bxDnwbzbud4BNTfu6trqMqLEJwN6Vp3KPa2kf5ssvLnzix",
  "key15": "2zRAYyyE2qVy52ieJgeNPQ3SjEArBKSn4pjtd6PLonbhNiqN58sKFkC5k1N6f8CmXWh7Hbaw5pKcKTuT92jAugag",
  "key16": "29f2PQrQZwjZVqABetLFMoePGmpZJza2knpFt2CAubBMfYH2KGHVy7diu54RDYriMR2o6WW2e6EoT63TJ9Jmjq9g",
  "key17": "4N9idGiDV1DXis4TpJvDa6Vb1VNRJ6vViH9ZVsZbBjVhdGev4KgxkxGuR1Wd7By6QjuN6zzZD9Ra2aoBM45KgmcC",
  "key18": "qynSHZ2yEN5TiQfqYn6b1vak1hJ9D2nJryfZFedYXHhytcfowKDjxPY4igTf1juCBp37fU43AeY2XFMirx2WYbz",
  "key19": "2Rxr8h38PArEFrygNGKaxw6Au1fdHwda6aMnExhajLta84tYyWwRaw7mjMZnkwtqcQALSjvTbmw2nCP3KaRdCe4v",
  "key20": "4VnoDzD5LdJrRs768f6E29Ltbt45n8nYs7YkkP9edaksHS1aJFRP1EH4gQAkDyHJj4udsNktLPmj6ot3NqoS2z2P",
  "key21": "2qN9hWz5GNi5Ci5pwoSku53c6q41msCvQxH6uPUbk9D6HpruKLfmDkZ6xVVYhfmvCc6b9EiZat95WnARxuj7oUif",
  "key22": "61nRoknE5siJH12kvbeGuNqw1gPykqF7DnYoeXWX9YzduppuNjoMX92ZjWkzN7dq5ySR12s2qEpGEvVuf46mwufH",
  "key23": "23zQfXtiYSTkaDDXSsDksuMwg13MytJFNxbP7jP3RABRU9H6vefApqso2L7NPv1MY7cyBL3C9e4nNMVKxyNb9w1Y",
  "key24": "3AYtAPZAxnowjWzNtqYP6kuxowjpWNVjJ46RGo2xVyrYFgzf7D2P4GQYmQXPbLdys1vuyKr5bqvmFd7y8Ka7FqkE",
  "key25": "4vNjnmczhZzvzcV87syNfySskQLwkuLh3ZihMdpTmoDKnL4gXFniH9VDWwxqSJeo3rosvAF1eSQZ5XWZmsjC7oeN",
  "key26": "4zjB8zymE9uyJEN1x7CSDDXsP5vK8BoccX6HD4wrQeeLjqqB9yCB5jjnRK3j6ZBKHvyKvfv6mcexQ4Uqf2yU2gMC",
  "key27": "3CwHfJuAoNmv7A7sEbVAVBDtmopvDgiWHPvN94TzYKMbjnN3A9BokNsXSJQtqhT8qaMX8EPLmNoWFGxsEhMQw5wS",
  "key28": "2RLsz3npeqjJ12vEyWSDSHk2R5KGrgo1fZBFDhzyFXQ55PtkSiiaGhFauS56GAwxemtHMeA4HYTbo87jdTurGeY7",
  "key29": "5ju785jB5g5woMTN9zxNr1SsgBsYd1tQAVn5wkJkU4GSUi67nULnefQM3gVoweP3SDDY4PCbwFLXrsFJeNdRCvEC"
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
