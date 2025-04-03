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
    "4mZkfo8y45UypMFe3hPZrMTb11MLJnTZwqcrYQ8Zg4bLyEMWigE4cXzP3pWCZB7y1zHsa9VjnEydWjaCjSmBkxh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trXywUZhDc6k9auKmKHntYK66Fp7FP9GsAPryfnRLFZxVS9EfNRhX4SbnHXrtXWdAjQNR2uZmrwuPksAQKEJMnJ",
  "key1": "3TAdHoVxFvEWEeNQqfpegyRbwcCwwUYWJ6yiW6sAoMYJEhwWuA9cevCbKyAq7czewkxkeq7t5RaCLvTHT91Pda7A",
  "key2": "66ra3DeZV5ihJCfbWDdht3xhfkAN4tFYmmARZCbeMnac9nTqgqY7FwGYrrYtREBAMtdJ2Ww2oXtcpCGNjBbdVtpA",
  "key3": "2qgWHoet2iYhrGRhaT5DanXAsxoqfv1jqMMQNPsoQAiRqeedFWfx9AzLPEDgJKx8zWxFXJVhPFcyFL3VFGFdh4yL",
  "key4": "HGHV544BwVp5XwE79zCWtMsdn9mPW6azEDWozG8yUmZwrggBi71KX3keAVSQiABMicA8i2waM6c4L9Gew5MAs77",
  "key5": "4WHJMVVgW5QmG8jeCDhNWgbpM1pM5vVEKrQtj37kAJBPHcbHXEC46VoaWayzp3QgLwqbc8rp5UA3Qr3RmUTrVcZc",
  "key6": "3pdcX414YN2dXD6iHwVkBcb7k46Wrt5STUsrmXGYvbwauJu2UWGiuQUJ4NKVGSMCRa3vojSFXCgnm7pE8nyNoU3v",
  "key7": "4NDhrgT8y9T4384vzfQthaDLAoF71PFfPCJEkfYDHb1JkJ1XuRfKgJ5HGTXci3GAocxchXyCWo8s6JeY1TuadoWf",
  "key8": "4en83AGyPF6VULDLpkzACxqARRMoQwKiShtA1PhdE8ZmmEDNWGDZEWmL1kg7iEi3Pwz7QMz71vvYSC5LHPKRg9vN",
  "key9": "QF5DnXmaUsJQGnehK8pWnpa71bkXazenyYPQQzozhJ9diU2HBMiDGgN47TjmG8Wu3wHGdNtkT1z2wQqQcaxwCxD",
  "key10": "63g9FYwxwvXGQK687UqtcFFvMAWrrSmJpXDBTks36kmLf22sSqrNvdfd73vS2THoN9RAVD6sf8AtNT4rLPBSiWAi",
  "key11": "5pgu4GE2KrpqxH7qscUibGHG2M6rwTSpR32x75FKnK6EpysQnuvwXWKmrkDQz4McYRGyY2BMK5VYKM7BWhLDQS8v",
  "key12": "sD44cFfYxh9dS7SfCRAFW6SExYbEhRCrqAytZCjPLTQHgyCskZeHQtmDL3DwsVcoMU4SMyQCfoXyyjoRBQbySVK",
  "key13": "3RKpj6iCEkW68NSEJRMtS7KmdTUdT8XTWnJgqAgoswcvKLL7y9duc5NqBWwyQ9vrpaeoJRb9cDEoki9V8KLAi8KK",
  "key14": "2fPTzLtchEiDGEUju6c1uU54Kt6DDbgDC6KdtDVaC3yvyCVjNWWp9swEAVaU124bBEbgC9aqC4Y3V2my2zAMA3Lr",
  "key15": "2kN1RuLU2K7X4icuqr9H33GwKdtKYi4YYGexddKLmB2vWj2Sn4qU6oKJogtCZYR5fDu9HeyMw4GZxf2Senh5dFKh",
  "key16": "5RUAQBtharPBDLNPuUpZLzjDpPeKxgWFS3ZvuVWPsFi77JasYZpUsXSiLPff3gv3t44fGUKR4tooD9sHMGh1omiR",
  "key17": "yniqSkjMQmC4P5T1vc1XBzFEvjetqTzDbq8jejpqTc186gacyLEGUNwPFzvechCux3vbNhJikCb58ZAxYyLQLoQ",
  "key18": "42fWcQJFv1qpDNQRhdfKz7iuPWjLMXpWehEcHk2Qai6rG4gAKU3JEwjfJVMa5x8SW4ssRmdZP3We6Moxf5yjFdBV",
  "key19": "4zFgayXyDwb97jxDPutfCpJXoFAsupLPP2RGqjvX1EbXqzay8VeNSaVdKVG6eeaVaib6GNPNsfgBjaENBRchtyd9",
  "key20": "4oMRBmv8BpCyiKtio6ZZKfwDFsZwqjJTmzkMBg5a2zHeGEydrpxDXjm3Qo4won6nJMCT7FAqQ1EW5oo6hkjABSHZ",
  "key21": "2XtbSkH8izaiT8iQqzdc8eC2LnMCCiwTu2vEZabJfUmFUiSFimVHzH3dsahshYk3LvMDQBfK6JtL2eMrtAUsmjed",
  "key22": "ZKteyi5G2wBKPdtsW7bRKJhGnEd8GtEqCzktLCrsXQDKvt9Go9A3m989a6rAC1AUMGqEF7cADnyumU9VNKXfuHt",
  "key23": "tAePuTtmM7PTnZUMUWZ2sK7ARJmddk2eUaorovQQdiQTxDnBVrWDY4gihvd5q9CUGSnc8TndF3eY1SbnEGXMd3J",
  "key24": "53jQqEhKTZtf2jqkjfMxXGTy4VUEuZ27Dnye93oG2GQ6WJu82iAbAhXujYVrr5qPNKbMgAK7NTB6YNqgoiWSe3gA",
  "key25": "8sA6W7PA66u1DD7JAuFY8Tf1AfD7ogPZXinq8MBx9KV6z3cTQZvyA4VhbUjtL1QxFfzpW1sWmCpNNExf5oF1ar2",
  "key26": "43YPxZ93zJzrWybeQ86FtdLx9aFYRh1zt8A2hhx154zsFKFvZ8zCTWBAYqYtyyab33AkwbgrxdejAcYvyY4T8JhY",
  "key27": "3xxoAvTitKmiGJT9D6sVsvsL9yurX1N2J5dLXo1V6PDmA6Rw3BP7sdnoMNW46Qm6PRcPNwjJP5KoqUGQvQ6NnmUS",
  "key28": "3MAJNxzjtA3iZvpEvz4UzJp9v2pa7Ad3taDSogmkwoNhvF7yX2AqbwWMjLTYS5eRsmE7VCE3eEcqG2nrjYJ2YPYX",
  "key29": "Ss9D3xZzefgPnm9XMMGYDw8J2cVqCbeBd19gc3nAFL4KqnrMZbmvvNu2VquvawNsNV7xJVYfWvY4mE7uWu1ZgQz",
  "key30": "2gRf9oYCEhewxuw9JjqWC6cTbBrKTDLfXsG1NYiLetVQR6cABaj6PE76sETWGowZdMAMLB8cNbTvXxuACyA8Ns2S",
  "key31": "uEdNSERX4RzTwb6AjUWvu6AxDjFsSZzLeyGNm73LzuA3vFybgzFiY73ghLXQSfXUyhgq3vtizVup5JjoLw62F1A",
  "key32": "5Y24Rx6jMNvgpKVKt6j6giUb9wLHTnjrTTWkzM2kRgPvitvoMjfmTfFacYXfAD4qRtCCPGY9EG8fBZh1ZjU9m8iy",
  "key33": "53s7udRrYdycaJWMuxiaZer7X7PMEacDmC4KGJ3quFNgEDxthU41hh4pCqFC8C8tdVSyEPKuQPTf9jRDr2osyp4W",
  "key34": "2nVRK6ojFKBUCpeEtxSVToMTMcaHA6Jn4MsQqLVGKRHTcEWzqF78gCe4cuC1WumRdP8AbgBXRSZNExcmtLASUXXt"
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
