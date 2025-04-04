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
    "5YyaAJPn8e9oSXZgVxmoK4ZQWohBLkGzmdCfVUrBQsPz5ZScTJDiBMR7RbARGMkKMepe4Jfb3VQ9do3RVezC48zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24G4CAKCejkrTsJ6gs31GvHd8vPG6g76BrKF8xraNce585VXcZMKmsN5ezAd7YJUfgL5CnLMsTNNQQXG2VKFQPom",
  "key1": "3EumfCJFm2ZTLVWA5hxBaZLnuJDkm7DVXxNUARuHkn1wQ2M3kaSztNMBgdPjaFvTjafzPLAGFcV9i8dn5g4dukYD",
  "key2": "344TnSLnFsQkYmob2ggu2KraAx5CD647C3v5VYPNthqUqdPc4rbVLQjBSm8JLHNwCW62DFWQtXwSs24vLkwYxtzQ",
  "key3": "3wQxUnHa41bSQvJD5L7bbwBxwahKSGmBu8TysNjyuoBpdmPeKmMi68MyDyHBmcCnFwVepsJf5zxfkbss3daH1Ydp",
  "key4": "5FhdkpiqxPV79PRYLHD471QbfQeSMxkYEq4YH3wPcq3a3tgHkNqKLa6uaVq1qktysG3ZBySSABpfYX5hVuDCx3bE",
  "key5": "2inKXBZZdpVWasgHGjch3w7gMnPvBJB6jPcM63NM7bumgqSaNxRJ8KD3DCvzMjZ7G6Hu4Z6wmkraxaBwewgYXLqu",
  "key6": "3jyw667tG88ZjHER1cryMqV7UqkFHQBeaXjqVpzus5sk6JeSRKVo6EyhmhU67rpbnCQT27TZrwAHi8N5JgvKGpm2",
  "key7": "Hrj2vdfUg83AnfW1Z76B3S3dFG4kHZNYLCfzVNS5Gva2CFvMCnpb5D967VHAmQT9aK7e7Hft92W1y1StJdGdYP2",
  "key8": "MqBUb6X4oE8KhY3PWAUNfGCTBjiYMt5qY65VQru6zWgd3gnQ3fBQEGkUoPhk41wWGWnNNsNqHg2wXr8ZC1J1N12",
  "key9": "3SnQbvPoKzGwYES82cFq6WrqZqn4p5v1p41t84bBnLRXsmwoqHAMFqtAp9v7je6cxr1hfSGFyYfc2UUiPUXVv9D2",
  "key10": "5421HsM3PBTvdrwFxp8y7scwTSBn8QQcZH9RLiKJ1VeWGQFChpsmpMRMm1mXNd3C3XQ5u44h3sDuVYFNyrnCNArz",
  "key11": "S6oBvuuhRtb9XhNCDv2VPtKzm9YnnAbUZMBpCxp5yaSdDSfUGuVDy6Q11TpqDp7A2YBWwG9xQWMQTCXu5tdLLxA",
  "key12": "4o2J3QVK8CNcffCftNgCKTChNBfqTAunsepqEP7ZLv7BJeoHRQxibeM93EthuieGUChTYomoX2rJEHj7RwhiZrs5",
  "key13": "vxG8ptT3tJ2gMLDLUVxJmsaHrhm2sexdWNcdfhYXN6RDx4TcA3KNJnQrqpCvacxXwBijoEYq4HFUpSHjqMP86i1",
  "key14": "2aPGVuR2oAqgiDd455MytSnyAE35xmZdaLDCF3rpW8HPbMdFHVif3g8DYVTf5ZTXHKEVXDSDkddg6baDmAF7QKDa",
  "key15": "3RosMvmnePSYkNBSWxqMm13vCF3CVWqBeKPPayGZhw5SsAafZZLY9YgezganLTiQwJ1CfXusaj8hS1CQmK85bz1i",
  "key16": "56hQ19QY87gLsrX6Whv1oAjQpPQLhgmuTH1nVQpPKy2JWt3wqb7NZwAZ951aPubfYJBDb1fy73fr43oTvDCHYfha",
  "key17": "2MbsNySK158dcR8sB8oTci3ERMGMwMEfwtG3vHEzaSYqAXgnoqjPYLKoVLzDodBHytq5tRbwuu4Y1L4TEWknuP9i",
  "key18": "2kGVi1Kxb6cwxRZo1wuvDNKELT8i1DAZbwb3obpL1gcErXPt8JnV6RvwW4FEducWzx9ZXGc5bHvdca9WUG8Ei38w",
  "key19": "79h4vKpgTHMXBv7pAU2MqvQ8c8tFrSmaLgvG5sJoWbq9SXr7v6WRb7kCN6wEELwzdu5Qk8wg9rs2RxAijkNwD4y",
  "key20": "2gLVB2A4jmZi61xuMtrqXXi65JNH4oWtLUfeZeTWyJzYztqqhSc8GLtZ1TyWLvmsnWdahcEVrkH8NRjBUXGFYRsT",
  "key21": "3b43xPgbedqPay2jnpee7CS5Zi7VNp9U5SiVhj4oTXxHpUtcHmEbuS7JMypJZWJ5QNcmMpTo797egetJRPCf1756",
  "key22": "hxXhYUv5EnZpvwBqGivKGdJKqS7WyKRcG5pptcYFPiVaPSmQjLwPJwaVfoBiFH5kqPyqnxzYBz8uJ9MbNTBr7rC",
  "key23": "37ckraYWzdRqtNGbSY6qvEAQ95wHHkYT5HAwk7TdEQW7JrNByZHfK4UR53Y5JsGxKoWBySwZAJbS7FXPUA2i1yUp",
  "key24": "2ztuSfK4q5q7em6YjwDw488E45gngFVAvUakh8oixwcYZreRWJAyJJrYqphXh6yQgMKbJUZZnYAW84jmzQhuYcZ4",
  "key25": "29BhaawcTwDb8fjqZEJ2fW3r5SXK1YsPtBfA85uARavEUui96TaimRoZsrPKs5jtJAcdzyB3Bm6JCuaZA9BcVy1W",
  "key26": "5DWQsLiJdrGV4SffpZiqugMmXCxMbiincpj1FHJ45XtocGqxycAXmBxqy468CBwJ2AsP1Fqg4kjBYztzLJPwTQLY",
  "key27": "WWnAXjY4DHwvBzkFcKbsNe7Lcy9fwvxyoacDqRUCJxTNTQMnBEKsphP1uSErnpNhu7upwDXK1kVpw2KN7o5i3D4",
  "key28": "59zWu6QMiiyH9atLUf2XFX4TCgrmPHK7JK9F5JX9i3Ca1Md52dvjZB9HAhgFizTLZkcJu2nr6D5D6Gp9Azktfq7F",
  "key29": "5iLJnejUxSN6sLZdFoBsqim8faDUkKFiVu5rWtnG2VxV66nHV2iek9SAXzcAQtSK8fdv1pCTMDu7xmAsWawpmDkp",
  "key30": "55TgaZfmrK9jNJQcvwnYrqKs2PkrSmh48irchEu4GMD1BACnJGVAYkQsT6EErgHfvYKT24NXRzid1XBVMaixVeDG",
  "key31": "3ELJTp2wfUzwVhLH5uXq8rjvmsCELMDCgDVkJLSgnGcUinEFUUxgCs2GL8n5zLm5Zjnes16PKrWyuMyYrtHScrkK",
  "key32": "YPV5p8EzAq1uRgqA84SWRj7BujuXmq6w5bb3dFstV485GAJWCEnnhxFVLcbegvhZ29Ydf6NLyJvfZAKS2rfaM4b",
  "key33": "3fYjkbnqaDiBu6whLhvox8hriMngQxAN3QXf9ptcjDfDCgt62zqs3n1GczjUw2fSNDn7gQacHrfP7DCNevHEPEmp",
  "key34": "35qjv4cLv5LMjTPMSvsD9rWSTNT52Dj5xtAt3WVPgbJMmUHRdB8ufXcKAGvgpXURQeKtV7mqEhMm3bbbK9ZCxoB6"
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
