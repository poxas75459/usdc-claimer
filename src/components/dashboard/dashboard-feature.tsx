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
    "2cTaM9EQULmVPMRPnBp8f8f9ZEP2h9PpaJTsUfRVW6yRJMYFNeGFJF7WQCTPK1yCiDNZZ6ojqvaqPFMuPCcbwCAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQ434C6FAiYEsi1V2e745iWgGzw1HaHoXn5dx5VKG5fj8cHJEFcAL7ZnV9ShmtSneqiytErRwaLsuuCY7GrnkDw",
  "key1": "VUsJJdJHUSuQu7a9uzzZth4N4ipqHSLcJZP99Pcta1VEb8LZi9KDaCa5nDVkYey9a3JTYJeQ41ekKA9ssAHp8kL",
  "key2": "Hrhpz29rNd7bcRmRiGzufb4KjJhfoUvHh6CpZt47uiTw1QiZwR5hv3UESQ8qTALsoe5jxmhXhHQFshWuFDQe15m",
  "key3": "3juNh3mYRdn7j5q99rrM5fLXeTmS9ZZ8PjZUe5GLoLMGxtTuwjCBobXKr18DvD1otMwe2jVeNaB6TRiQFvaUEQGo",
  "key4": "TuxJ13Y3s9o24cz5Sx9PTzhdL1xpYZ5bsWAEnMvMedHhHQYspvZ2P6ZoRwLpM1M9V9vrGWt2bsTWaJ7FxDPFRev",
  "key5": "5YnYPv5djxU6CkePJoiS5LrWuPLyC1jpKvoKsZnB9XYknztwvCBP6E88yUPqdTM4nAAEgF1563tMNh5fTEcPos45",
  "key6": "57CW34gJjtn2J88o1ga15kSznot8SPki9Dqv2uu1WnMYoVzXVybiytEyjJS5aSKo6KpugZzGMg5P2r7rMHtSJKmk",
  "key7": "58tacTeFA7D8JFW73JWJxnP248KR8TFPPMWLimm6yT7GD8wufRq9qf7Lr1tYi5wPHY9h5n59iZjYXVXwVYSifkMf",
  "key8": "5xvE54ZHaWg7NPq4a61TdghmKkhh8mvbmUPTa2FkpBcaJWfny9adAgr6S75ts7QCvE9tdcEKG4Ae2dkq7VpNxQ2o",
  "key9": "2b7J2eb2NgFukmPXJt2zJHUkb76VvsTF6mCep1gHL8rNyENgXpFwBxHaein789h4uTrpkM33PRufL4gddcprfUkw",
  "key10": "3kXX4kmtAMYBCGyzdMSLbnzXpTjWaiaH9uY2VmkigYZd22GoPS4eA2W27JsopV8KYuuhpbEJ85ZUsdwRsX5WghRy",
  "key11": "5emvW6iZCCYjm7VXGSBfE62pzt9Hfzr7iC5NFU4sxJnki2tvBZWQgMxH79ykWA6UyZLe8xS7Frx9DFfauNhQ2XL6",
  "key12": "5ATbRL6Jyd4YBskZWWaaSFpusHQVjLqFXxakJ6QEkDjqCN8wiHRpByfTC4RoaA3U53PbtxoDE1zHE4GZztDWjmd6",
  "key13": "2waruawVfZ58mpYSHjqrFTVoeid4GgCwHuxAbC3gLm2KncyHZo1bwmASA2fFAgPL1aWtYfjc1vGSmY5cP8hBMXJu",
  "key14": "59EXbkHbh5ft3FNDkE5arNerZ2vP9wco1X9hwFHVqFe8H6VHPY6DGQywR3FncFYZpekSDg5cC1kTbCdNhDD2NA2K",
  "key15": "3LhhwLdtkUy4Cy6MobzDyjHmb3tpf7A9ffLvoSA3eaXdAMP4HPyMZ7x8cGFxEksVJpbHngGvNjPsvHKRpL33vQFk",
  "key16": "zviPAECiLc41Nb8EwZRQiKMtgCusXcbWBQVMbuUZWgyewNB7XiCdQv4hQXAmfTJ39hgkeBsZbhTs471sk28VRdF",
  "key17": "4cPE5ssGTbX8BTYAyAb3rPKzGCxhQPovGTmt5jT5GRFzvUybQ6BXe5DEKySTdBchPxxtm43dfUc6o8GXiYpdcdNu",
  "key18": "2ftCbo9MMnfKtXMZWrugiYqqFAmq31GEJehW3pSPikFjSCwtBjY4EY6TVo3pJKxh6Je32v4hkDm9R1tJZ7BDiE6k",
  "key19": "5cTCa57LvYMY48Vd7gSEUeiaUhezNv6VGUA6jPaKVySGJnpcnUaMtcBppaTZne2J4MGyEfbWqfCyLWTayfa9RVjZ",
  "key20": "26UpLAWpqWQvSZ5dqHp7WkiBsyYymkfQQ5ygzoDQRpzarJuxndxPMkdL1jis1pcUQ8ohZStG4gkFKWgYhuyzbx1A",
  "key21": "38C5Q4EFSY5wWALErybBWzumx8PoQXjyBgC51ZvTA7KBwEb5TDBQNeStbWHesaDNsYv3ofaQQteU1d8kCYLRq6Zb",
  "key22": "2gD1V4vVXo212DDWh2Q76hbBvTobYsFqYa1i1yAWUtzm7zdz7Hk5kn3TN9cjxt2TcEfMY9okTjupWLGKzSFCeff7",
  "key23": "5xBTWn3ao1QWJHEYRxVFT6iscH87GQbkWdasFLwjZY6D5VVMTppzT6AfxaN7UaAE7iEtJTDrutavL1cpBZqfJ1eJ",
  "key24": "4QetTCjUJXod3sdT2kJGkYaAFNeXECPFXshAk4DdwriDQNVcjjX7UH8zPSW1yGDN1mZ9hXjPKdxjnvJyQMFkGh91",
  "key25": "5BXQWVyVfPsxbpzdxYVVwkky4zayrH3N3C6kzDZphL9YTZZDrNaiEPAqsVpNvZgxs7QQpo8C2eM2mtngiAPFWtua",
  "key26": "4EEQoXByRmqvnfZz3ZuYXhWU23a13KpxWnKpyGgKTAXMY4WCgxcBzcHmxJv65omgg5dP3sJWSEgRRWqW2yQaxeho",
  "key27": "5z9e16ERQYUihqUYSX2NFoCjdo9siPAkUrddXEARXh3FMLY2k2piV4k3V1o139m9cUBkGoCDSdP1pKQzvR9evT4m",
  "key28": "5cfPb6qtt3EEuYMQa7mvr2Fp35fsQqjoQWgTEth8MUaDtTfQjkvWybuqJUxZfyXEnpcQu7ay2uBCu3mdS6qM5mdR",
  "key29": "5SRaopHEeP8ayoEpVBNJj9c8Ut7YgZmapk1xQzs1bSzHWwBsSrgd9DHdJkubMhEJ1cZr3pUu9kCjX1kjP3jKcBtz",
  "key30": "3AaDsUHmQyDwCEeoXu7f13ud54haZBNeLFq3TpsXCLo6jJcDtFEV4WdkpRzosJj1v2BHpaTBGoUYg3PR3QHXVvZ4",
  "key31": "2nZkRVJmEsagox9Jm8yfTmEgukxezzTktmmRBYgUF5VSA153bzogLPVby9kETM1fXf8priAJ9Cnobm5LaQ9BqkcK",
  "key32": "4Bwn32hZcvr94HqqEdq3bpuG8AdY4a5pnNwoecfWJziGM5WbcerSepSQ1aH2yQjG1jf3h2oWAekwZtDLtdWH6i6v",
  "key33": "5syhGGPm4jVC3vGp7xF3fNps3qF5d1fwr6HSz1Y9dnmWdsJy6NAfTGdEegE1CfzUuWGmpDcYaDJwRuTVyQeNE1Fw",
  "key34": "2bj6L9AhgZ76vLEu1pDiPHK7VvZAe9uoenvADiRZz2FeWjPkqdQkQYKLUpduPoyTEc5XoyDQoE4gNKhtmayaoznb",
  "key35": "gdhpr8ZKuGPsgCVP2Bjy9FAsEPkutvkbkSopqDCg4QNaSTwwP5qSRgUMJijmdXgSMx9zQJ2535UxsH734gcv8iy",
  "key36": "dJFSy2uMZcrepzkzw44Xin6iZ8zXZC7AZ6kJUyvs38StPMuzZamkm95YPmgaQ2aMGoVVw5ot5PkijPgPvRHNRkR",
  "key37": "PQuFZedqCZyWWBHNZZHpj7kcvEQb2GojKmDS2yNeh9gExBHwR9bRd72H4gfW796vUJfkFoEgVCdeA37wsnRzfKv",
  "key38": "53vQJWpqSF91QVzZgj4USn7ZsrErBoNMFQoDyCLF6hvsyUZwZw5rv9KEjiYXgeUve34F52tKGKxAsDUAkW6fedQi",
  "key39": "uv89P3oRsNQaAcH4o1nRyb2KtPHfHoRXUAhwjo5vGhbBKN4Drg8yg9pLpwVjNXptBw3YZQ7YGRqPqbXpEDRUrJt",
  "key40": "4Dv7ABqnAdeDhCTzCy1TxXeCsSfkGh9qNeWKxFhbViZdvLeEwh9irVxTeqiEqUDMrARn5N9xrEXKoFXUK6vWFXQ5",
  "key41": "3dZC3ZH6buXWum89YYEKghynvQqSn6tzQNjwdvxaRTxqVJLsU2sTuW6WZRvMqxq8C11EBACR8bVzi8jstdoLXDKD"
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
