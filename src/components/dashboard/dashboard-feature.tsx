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
    "5kaaMS2D17CmBjFw9LJbi1BAihugNkkgWA58KLGaWncWyo8BZrCX59vCNeCqUonYdZmhzT2SQJiPN6Sybgrk1Awy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KwTCZkbJWB9gRjCcW2fcJmA8PXa72nfYHX5TLy76Lk7UDC78kcwYm62MmdjWgbwmf57azfEiYf83nqFEdBWttcX",
  "key1": "5qdcCnAUnnZb6MweLmaScaVRWWx7xPpvVDzU2pDT7oSGFs6pnqrKEzskxuvmyjeUH7u1jXcXHAQXWnW187aUGDgN",
  "key2": "RBcythpyhpMfMUKwyZ7fBePH6bCfDGUFZGCu79FjLKfZEBkii6R3YVMXJt4e4oSwFqPukKRDk91NqaLoBDo616L",
  "key3": "5wYK2aZe2BQAiQARe74hLLj2qMwTkqp6prdHDCNKDNDweLFtZbgEN7mfhNAQvuHo1AnR4uATU6DBnwkyoYQH5GUH",
  "key4": "2x8xr9c3sUyFmUonR4cem16uGGarkG2dmwiWeeUmeXFMbsfik8YHd45oZjCrHrxKnyKX34ajzX2a8fVMPmoFu1nL",
  "key5": "4AQEvsVNqDeYnxzsP7VnjBYsq2H9s3eGP7FcJ661MmWPG5xA6uQpRaytWrVUyYfbswdSZyS7aJtQWYvMkyyWjXi8",
  "key6": "65SgDE6YwJNxAXHCmZuRSTMJQZNDdMQZAZuTAXpNeVoXTDpGLwhaLEmAEbAvxQgzaJq1NTHAWsDuk4VyfAW29Web",
  "key7": "3BEawrvk9uGNr2ivmQwfREAZUPUFs9iDY8cbfjLV8GVYJ4sPUeC8RJcH7nZDZ9wLMy1JY8Pr6T3J7JcbM4j4ZNzV",
  "key8": "5ug2TagNMRH6WXrwNjbFZqL88zWnhxUFPcQjd5981588Nch2tFFJF3xn1vgPiBTnR9dPiPBbzLp698VERbEdzn8S",
  "key9": "SyqAG1JEmcSBjHRF23tvY3rhQrqkYfSjFWQ4opmHT2MhcTEvsfZU8P9h9BbKMYuHPLTypJ5R1SMU8wKm5AVk2kZ",
  "key10": "3wWaXCpJHYGgvX7L1HtktLGVwMMPKMmj6AFuYidDKQP74KNDa5cSXSXvTDxTay9cmQp9N7ktyoe7VGhdTKUp35Ua",
  "key11": "2AmHwsW6czUzuA3asMumzvKaFJWAEjw7x74cV4kcFwGLfdobqRFPNxph4YUnmm8kM82vzSd2gseaaNFjsCgAH93C",
  "key12": "3b2mEwLUmHC13pbYVTATXLAnRa88uNfHZ8JEvU8BEE2qbeEFNquA59dBY69hyyc24VHwhShW5g2r71X6872kGVph",
  "key13": "8UyGtTnQZvgj6LdLpi95vkDJzowF9sLvtziBjboQ3rpGaTmk5hMCKrZz8sNfTzy3Mh3gdFHkBb6wfZ5FyJ9qKuw",
  "key14": "4L7UQuU4fqRUxf1gVSwMCG5oC83N5Pdid3uMFc2KwvYWByiosyhRUiavewu5wuAZmiQ4dbeD4XTg2AbKtbUaHfgV",
  "key15": "4WxiivdLRgogMeVPW6ZDNwuvxdKLDP2JysfMMTxqFSqghcwysc4iNpSEw8RNF5H1AqXCErxRmhquMRTRwRKufL5a",
  "key16": "EHpzZHkNXPmjsDhAEfTibZFSzvsR7ArfcQgVVmAi4SmyqwHNGLM9jgpUbjn2DtCu8xsuLXAnDDxB8XxPgDsffEV",
  "key17": "5fZrFHaM4Xc8UjBa8L3EyqyMws7iP4jhVbc6naJpeUEEMdF88vz2gjmXUoPmgkh9pnd7ncUJMWxQCEPqcPZptto1",
  "key18": "Xa6D94BXuLvurj7tgLSSefPmoa8wn1dBEVC88R8qqTKSKPJVj6mRs6axaFoZadDnALED19urEu5LmLzhgqShXN1",
  "key19": "2RjMc8iTWGQXwcExKHa6mdQCf2SBaSyRoFvGrwnfLmFHVyhtgcYRdMNpTVweL5g2SJNnRaHieAG2kd6oAnLDtkHQ",
  "key20": "4CH5R7VdHfrHoSxDVryHfzU5gtkGbHAGs9kiJTpayfd43aXJm1KPs984wapZaFx4xRLb6j1tk3AmPnWW2zKiZi7G",
  "key21": "63yXU51i2Z2azfovxnjorL8jiExEpjtTGe3j55EHcX15A8MwSgMfa76w5MALYocFKsaySWTneCB3Mq9XvC61JMkU",
  "key22": "5YE9HiG8ZdGcFe2rNhVDgqsEr28eqNm8NQtT9ZwW1kcqsy7uwNdBJMosZJNAccjhSJqCyQZDEXinoWA9KutnMZzY",
  "key23": "4FbFzUEPEaKGXhX4gBzmpojhXPsf9ZGWzLTD6sQhoXB2HPdgDFUf3yTHRs3n7Phv2ZHwexw7nHt4C3YoAQTVWfQ5",
  "key24": "3ara3wap3wrRXep4YiusdVMwJq6ULnfSnUiTnPontdshNpMdw3ryZwP4JMGJK4kuKnj3GntmhBZLVwDEhCuBZ7e4",
  "key25": "2VkCP1wFRmwvkosiMA8jJmwsxPWhBGYF2bWx158XLSf2WZLuR8F4ezbQve5y9zGFuVu9pUUkQH4uceJz3pooCE4E",
  "key26": "uYpTEsFvL3HCS4Rhaq3zhjRbMUhenAeSk27dK4XFdnnxTmNqJC2cBsCWegHSKThhdw3Fg3y62X7u6XKqjqUcvRa",
  "key27": "5mLArniAxAAhMmEM7HMEbNcyZHpDPyAZm43WviVfrmWV16aB3eXDqTMPV8kgdQXuJRVciNMWQX6thJK4uetG4Z7F",
  "key28": "29uuHvTXzqQ2J4aoYoWhQCXoJQ9Sv5e8Pse1ikNxheVAGAsHSR8p5XXypcrVKjrBVBXGZwAddqiGBobWQkBgVnVd",
  "key29": "4JeJQjHPGdP9gEZZpi7BWCcJaXv76sh5ZuPBewPQSYeqPCdZ7pL4TQWbNCGAP4vNF2dgLLgAHE5vQnks686SwAqu",
  "key30": "2VxmWZ5egUV6xcAuvX1iUuyfMFYy2Es7DX5rB2vxfpehQ4DPd8Ymi5XSpxT77q3HRHu49VJGXgda7VZejEiVre4c",
  "key31": "123nyUoEyUTaFuS8sB5QGniCRRKTcYtS5XjM5cWQsfN8fezW25E1HuZyEqxRkGBtzu4bGkzE7unjXDcQwZpMVeKz"
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
