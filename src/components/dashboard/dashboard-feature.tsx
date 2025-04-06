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
    "4Qp2UsCxkJ6ZR2YQM6oEkDnSoeV6Bt2V8WXdmQvWyu4L2rvPc56PNt1iE3acYzdG8PWy92Mh8jYe5t95cZEay8ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D8uZuckia8YdbnE23ecXJWnQ1hRQhhKTKAWTwmiSuyuNjYJDJztZJrpT6ByfvXQEFXGYBKHjfZntDRpLg2udCxH",
  "key1": "3jkrRpowkPSqWtmF9B5M8exD4xfYUYVukn6vqo4HBEG9NHSa4bUkCFw1CWTk3zdFmusMaoCbWTYzdWToPprSwErd",
  "key2": "yyrtBbDLYztrovF8GSaPzXbNdr18XLzMc3XhnCQM2zE6cnkiF8uUuUbiJcGAtfWo8kK1g55UqwqPVjtgj2mqq8r",
  "key3": "4kSVgfXLcs7QmhoobQUoRcTkhrZqehZWt5Pn2X4jJynNTkjMHiV9i2Kz1Gx6ugP3k8LCA8b95zKnSKpcJcajVVfa",
  "key4": "3Hx9czMoPH3TsUL616rNvHVpkL7NokUbMZybQ9Y6Scszzy1sddNGYfrUm7XKUcxn2ujj2nU1pPVMW4TfNMkBrxas",
  "key5": "3Pz4tRqXGZRfHwkiFCcQncLAHzFYKZUpB57Xnwa5DogLBxcWnumjYdFqKe8Ja2xidcMZctZMsLFvhJHBqCY2XxvN",
  "key6": "5tin7bjb1FcMCpbewKaLmpGwfoc7oVaMtKHpwMpiQQpWLH73ZLw3XjQ4K1SgrwbouSsuCBY3WeHz9bi9uxzEp9XF",
  "key7": "zNXefhbkD5r1zPj168UiF89VTuo4thm1ejk2KffNAWC16jS3eQ8XaKRsTF7FpbZqstv3epm2jsXZuAB6zRimndR",
  "key8": "36FAGesgSpnxZ7Eor5MjEwxKrZi7CJTLEm87SrHsWK1hBvKFu6cAx8qQtSR7YcxzmiUXajsr38zB9USEzW4LKzsF",
  "key9": "7XB3ioebH5fcibnhCiuLZi1HXNYMzeqDTcCWhUaXhEbTkoeZew1atkkE1NDtUF9NZ7SAxYubkdXqbCnFvfXUeGJ",
  "key10": "44LDnShV8Qoa2pSyWZ4fZX23bm96HroTxdPhBtsNM5kKUpCZaTG7ZaPuyNuRZHpiCi3VCmwMzkRC48DUhGbMkeo1",
  "key11": "56jVM53UrwRe7TJ7G83Gu4K2PbHhk2z8mSyjCTUe9PW28W4VCHTqbKVHkhzpkhNySy19j4c3RTVSpr17wvwxaT78",
  "key12": "efcaoTEPtiVvPa4bGd1cz4m3YaMHxX8jbJvnChsHJiH4mwc8e2x5W7JxRcc1We9ZXp263DpCDqzrW5fxRwvTdaS",
  "key13": "4mn7Q21MJpCTjop5DBEZ8EwMjwEcsy9eyAhjEyfuzcGi2dgK4HjyEi4XRFqovngMQjz1HQgkZvrUgCBzQqqwoNrE",
  "key14": "5A4vKAsRbos1G3WocSRcf2xsZJg5yddRnnxLtNx3mWT5csiT4pGYhCDAFXgmZgawpbCDshuRdvxwGwi8USd66BjJ",
  "key15": "4Ve6TtRtYvQWiHuxbxShq8YW6rLLUGXaCnQBJZbkFcVPWbAqY32xLZsgJVxcQUu9RfSsuWiMebKpzgq7tfd932nR",
  "key16": "4uqyy4cEzdCra66TmDJAfrzrVzEVGhx3tBh6iPW9PEQ21ydh27e24eaz8PRhyAzc3rBCaHTLBQMusLMapY2TCgnh",
  "key17": "465ALiT3dxVCYdbEPYs5v4YEFLs8gbPwfMNbKAwhc1HqQypaKi7UECcRRV4FHu89ycPyacecxqKLNuN3r3Q522bm",
  "key18": "fi8ceLG3cM34quPHzTCU2SB1UuoBZyc21M8Yf5QvsxWRtd5GPh2wYi6Equrt7nA9REtvs2zU8YcYAcmoHVACz3W",
  "key19": "5m898HtRnL4EvPLYj6wXfZPXULL7jEiEkZP62boytgmUN2LsQT9eVyuPCSt2CWh28AkBruGT1Z3BJS7uCic2FxQy",
  "key20": "2BuoppjVodZ6TKsMBWFAZJNMpf1tAki4JNadiNFwFSHGpeaHU62bj1B3ieKToQJJdeeyRRfHgGTSYvj2sXNwmjyQ",
  "key21": "3AeXFXiXxYnz69UCk6JpWjU9xdp4VHwUCL3b4f5Kx2H6br9Q7WEu6hFfKBimr5EEH3MF8qkRmq3R7pc5DRpx53Bp",
  "key22": "w6PL1AdY2ZEwzezD1c6onRkWNq5WKt5vPNbu6uaUASDZgChF2CkP58rJrBnjpDw7HPmPCF3fYcHCyTik5eJTS2X",
  "key23": "5vHSEkjdyQgEUWZgatVX185buWx92KJswSPbZw1bpjJvbpMLQLBFLrZgoZtmpHTcbPzuPxA8jAmHoaS7BUSxqCkK",
  "key24": "4WnLnokp4DFUoPCDNXBRcGWicZraXFryekTZkmMaSvWi9n6HJG6DkmeMDNFah11DNLWbYCrt6GkJQ4C3Dpis2n6V",
  "key25": "5tK5Pe6iZSWKVUrgS5TtoCZTq6FxJWHqn9stBUykurGHbKXZZHZmust619WC7SYXn9ULEJ3cpYnNVrHVzc88U3Cy",
  "key26": "7F3yoxwpumaAsR8rDns16kzPrFtSRH5o8uRueNXSrwacZHuRL9AyfVZhPnxx9birKkTJQ4jR2L7vJ3kSv5hoY2n",
  "key27": "R7SZ2N4oMQY5KGT3RJ1Y3grwmbQtfVjsTCJphmpsZqWXjUoHAk4twyZqNGvoe9kV1TF6zEefVW1wWDZr5W9WDRb",
  "key28": "2uFxvn4sKuEKQevnZCwiN8iMjuvYSRP5CXvESW41pzFY5SJoR1AUFVxWdKJzPzEnPU1AybqV3LYkKrHFMcHm5vBh",
  "key29": "53xZZg9jkywG742UxuzWVUDQWEbeRXmBQtAQLT58CzMJMYvK2Tod3T88PJpuPZ5R2MsaEUSMYuV2mW5TwoTLrqw",
  "key30": "2Yd89QhSPTHghQLLFVA3FEPZ8sRepxaZLtFKrC2yaVZcuSDvjfBHmfX7UMQcGqMwGkzEwQoK3bAEcecUsHVDsazg",
  "key31": "4RjqyecHnQP9dCrtvCquzMLCNRcdBBwZPpatHJrDRjiUmrz7eUARFqEPtWDgbRcN8d5K1kU9es52o2GkfHAu98GY",
  "key32": "3qDyxoobMeXzMHhEs7ZqduvKJwnaHq8PcLDiAo7tkHcc1WjEsu8ND9h85bykU8Ei5a9a6Ga72aVJJAmwfoYCP7Ln",
  "key33": "biKdyBpeyQPFrHrZG5v2XQDPcfX5WjG4JT3Wiq8uTLRiV2KntqhK1yxN31g195kcshPTTd7iNr4pNEMgDmV1bQt",
  "key34": "3os7sFV1vEGEdE77jHnF1ZFD9JmiZsUqf3goo7hVqiGTDMbu9LvYh13NMEeSJEr2h4drREofzaC1Eqrtc1sTFY1E",
  "key35": "QMTMQEt5N5CUHLFVKZjKFzNGtbmk4MF6HEpaXbvW4QvYo4c4m9Vw7kLryC2b3zSmamUW5tSCjmBM2sbLpwjf92H"
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
