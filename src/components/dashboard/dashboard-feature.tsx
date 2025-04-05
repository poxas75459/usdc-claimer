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
    "4hMmHQMrBahKj74hJeQviyyJiWdiSHDuN5QfsV6N1ow9U6PnA7TX9mUwKHWNFqSZe9QbMwBhpGueojP5M6GfLNqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKw3aFjYqrXoeBxmikM8zWwoVUrFnzeCYm9aGjS9wrgt8YFNm3HWQGkr5H3NfFyre6kWC5hp51TFiCNBku6wuZ9",
  "key1": "VfYMojzmSeNHMgoWJs96aSQzmQggrjcTpdxQU3QRR6uGWAcP4DAc3Jr39Ua4L8sPsmMHZCoXKfKSNoEDs8LEZZj",
  "key2": "5qnQW5CpNBjZtD3pVdWEfQi7q5aqq6eLC9RfBaQankUN6HyJSB3DT4cvTKWntv1vFMVau9t16Af4JiZFNQK81Twu",
  "key3": "3KducCWnT1eL1E6vMRzRe1t2Ycw7dn9JyyfgB1Wv8XbL5hUEaVExpP9gFvBnyZ59G8ELyaQHeLUtHeHYDeSif7Rs",
  "key4": "3cwrc5UZmejVNGXcxPZ7SRLE4JnPBqemYuKVpLB97jqRm5bxT7esJ3LR29TxVKpoiTjrxDrtfiFzbWG8A5qoqrCn",
  "key5": "ipLUJ4XPRtpgM2SRT1g11QPDGhJ6cwW3d99zSgbQxHGXFiojMrvFfmBQtW2v2r3Nhb8z3GedScGu4VWoTQf3PJ3",
  "key6": "2P8ACUwg4aQGV5V6fQhbzgJut8geswz6aamQ2CKyRCoAYnpX4bSnbbQHzag42FHpqxpNHWPDPcYETYYvrEK7G9TH",
  "key7": "5JahaEhzn2H15q69jdSnSg85de4XXjMQRTzfNxamsK3mVcUkoTt6L8BcUibRwSFtEPehHU6hdfjBWr8V4CBJcFie",
  "key8": "3vQhePXLfVxNKpoqZrThBbrBSukzZtNqNuDaGSd7Bps5UBU6ad3ByQa3Ep3R8SBvvZQAD3p1wHNNyJAj7L939GaP",
  "key9": "5TgpiyAY4bfhMnWCCLdGdoDrcYwgUrmRPYwut8edeKLB6qxp6qgkGGJxNqEh8HVrxV3mkQpK4K74wXQdawpzwfLc",
  "key10": "25aBffQyVYb9KJUQH7RZsX89X3tV8T3XGnp4Gd6USmi7gC8nJxhaeP79SSSMiQHDTSjDgg5iwFkJQk8PgaJsbQwz",
  "key11": "55bhn8K71GKieMkK38MZWiEKSzVYAvLcx22Ju3SWRgwV8hMheMb1rNg53NKcERewMUejsbPpkyhV91sYx8313qzy",
  "key12": "4yCh3K4XB4H5sq5UmDqPQar5aNaXRxU1rDbgHJdYBjapP52ZqxtN19MBB799Vv9sQ5YknRQrcHjb7ha38cFS4H6R",
  "key13": "5sPUJ215psrqDgw4Yr1b6PmkhRheGcSMngfgPbpzXkyRYTFortXkbK3zk9y9XdDsBQ9jQC28J3bgySKzwr9zBGuL",
  "key14": "3EEsC5E4ESV9jC67xoJLffrofDZ7W2Geu2guBuRZBspANC4zbh1qCvXLcEcY5V4uziNVKHm1mWjq9CUtshQUCTMv",
  "key15": "4LtaNna518TSR3QVwQuTuie9v5UguvFXnBJYpe8r4dNKSrrMfy5PE3xAVxcPkHHpZhmZx5o4pGrB41ShZAgQfJwc",
  "key16": "4mqzuGyi8F8bUVRKHiW1ZdEaPenQXXvcoNg6o2FAppX3BU3fnnsWyHsNjT3XGYRTgoGbDHtoqTYCbuhMP679NEAe",
  "key17": "4gZKdvRiXCJvq9L9r3PCh7KAYBAAXmVqHq3VV9WX4k2j7wbw5jjhHnPKmHvcWNBDGGrUZzCDaWGr2TczyFT6mEFR",
  "key18": "WaTdAKdcb13idduvA74YWdGXJr8K7yKjT8bPUsSCQvnwXShh3sCWBQGh1ZEBk81dSrrJCTWiYf8Z698wbP5HUWX",
  "key19": "3VobEy4PzPuXijfrcvsuMLxNhGqpSNtccmPsPGN7XTWbDxZz3WVZahXhqdkm7GQ8H3fuSWLnynVXRrXqKfhkmNxT",
  "key20": "47fC647mRd1CTCs6AzDeKKRJBrXQnodcVYUQmg3DgoDznhb7CnwcKMTPCamG9XAwCdRuUzbGKA2W982BqbkFcmfi",
  "key21": "25W72gaPFa9fabvUMYqfs5H27gzScjmCSvRy2SvyADEzbMLEqonJhVDYUZ97tj9SGKuEj2ZBSrjAPjN4JoRd37N5",
  "key22": "AuhHkpjvXN7o7yt9odKPMexsEtQnLCF3SJrsVwdyB29KJZSgba4QcRrCgokvgQKRBJV7zP6tMvtVsc55ZaYq93j",
  "key23": "5PYd5s6RWpsVMdumJM4gyDr26y1ktRx3pf59ZDhkfo6WreckNTKwDnT7ZMCwXQ6gGTwMui3QYdYQSa1adgmkkKgR",
  "key24": "3NoEgjbfECrfdwaF7pgnLitkn3mYvDXVx4nLqShPEfRvfiQ7fARXhPcAWXVftb3SPNDEBQQPTVvpBz15V8CmnXoL",
  "key25": "4aG5Pcg4FsQYV2bb88xb7g2dSG9AzgdEt1uKDLn3xaZfCgiETgpLQhrnXuNPyk49v6DtsHqrx6Gm4sbgVbDKEwNt",
  "key26": "4qcyVT6DupNWK57QJd6aBTvFj6FTNLC5tbRyxePR4yQ36HQhsXqR5oWdBRY6XDePHXRzZUNYcHPH6He12EAphFAU",
  "key27": "2P3Eszyq2nqk5itn3DnkRFRm8nXiLdd583CzuSsoUeEoVmrWAM6qp7sJC59FGU4ShD9x8LsqqhstL4szBJULmZL1",
  "key28": "3Ch1cVF871ZZGKvKhBmYYeVZPkAR8MyGwD4VTnsCiT9hdgM5HKTLgREdTSH6c7Y955i8mQ4VtB5yGqanAAW3dYDH",
  "key29": "TAGVw3SUCY1yiyJy1A9wQFq8wUcjhPrGTjPyiNtLrLWE3jrXSQ1BeeZ4N5tkmfpQ82u6NrNockNviK1TWemB1Pd",
  "key30": "3ZBc59ruRAH8M58dcykH1yg9qJnxzWy7K84BmYg5GY3WmEQoVPyHH7m6ccBpA5rQJsEsxbZgzDdWg6SFMymbKbYy",
  "key31": "5q8PTEj7Z9pqvbwbgYwH64PQ2ZqtUaXkCjLEDYfBnJHNsktY911pTxNyt45sdDfSwwNsQkR7QMSDBJpugHdtYU9Q",
  "key32": "5WeriFQ7Y2SKE8c5RUEurs2zSd3iHWEaHYRN4uK2U45hAGq4JA4CPuZ3hwHUJbWur841ogKZrPG72gNY4bXh3Ff6"
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
