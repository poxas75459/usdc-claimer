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
    "5xDzZhWTDHaM6BLbCsmsMJzHsf4ddFFfJXVRUAZWuNNvNbmoCqpuL5m6gZQKM7LrQtywjRfeg8LacvoNV1w8rt89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xA5Kwdc6SU3zuyqrNvcX48bxp6Rr7K11qWfWvqcqLKXWtpF7MUBCX4hZnsRPJLM2oj978Qt7BPUhJ6n69ucqgt",
  "key1": "J53AKTu4fucmu873D4rprnWzc9nTv1GybwKH6h7dQJiY55bzUMLgyjzpdk2WudpGNTMyQUrfhXLjKbL7n5wGhc5",
  "key2": "5Vh88KJcQKRTqBxthFgoRtXojBhjdC39SB4R8K1pVrqYrWu9PsL2XVckjxL2CgZ8HFLhPuSNVvy8x1s3dFK5JT9r",
  "key3": "5WMR1G7XEDcHvRAU8Bu9GeUYLTJ63Fd2bsVBps4TYkLTtbVMv6RoXSaiD2uXsWnB6CDJ8pP2Zk4huhaWSHpou8Ny",
  "key4": "rxQq6WpQP1gTF745jUjGmi6a3GuvQDn9wFMhqm28zkfBtBPeAAtQbypFhBLCgDDQC2STsTm8rKezxQSmhrCWgvd",
  "key5": "6ZQQHZo9PDtxcGeXmgnKA6agA4nnWFqjhYF8U4Abw2QXUbsV9hAc3scoa3ZWYVU7gHXSuj6wYvoCXCNs9mcydnq",
  "key6": "5n8oj3kX6VTqSay9ZNCia4RLX38hpK1TMVfAKEUigDFAS6qwTfckmgajPoyAPV8tbhG6Ysv1FbCkopA2BpgyXUv6",
  "key7": "4nVaUPLDsJtqaZZrfVkgDgCpFCxxHLhFEcPHrSdaWFfwqE4sbaEXYEqUMhASaWcDu38RTJ2dfNFRw9N85TAxnLtc",
  "key8": "3nNSV6r4G6yAYJaKtoGXYpqhXjJXjMGVpExN1VefkW7ggHHpaiUhDKZArgWNvvjL2nj6hdhGwEd6mc7cdhi8f3LM",
  "key9": "5i4wgZM1Kibc1dvoX9tWTEUqU9rwps4rxbkpwSGajYUUjKT7JXiDtCrgUUrpgAgkcpFLHHE8k6DZ1KXp1SW4EZbc",
  "key10": "JagsD3EPuSUmuYmZmetpxmUgPWxDCmJ8noU8tyMjdLpGJMza3fqeVL1D9c7eoe7CjoptxD9RE92gk27ErLx8uXM",
  "key11": "3hu7DgbfKnRQDiznkQBJ1ZucQvqgivCVhBQuAvdyDJb7bJdwSEQ4hweu7P85krsoogKEgCUzFKRZ9hiHNtsyUq8F",
  "key12": "589pnVAYeUPc5zAkXD5GdrXsoHnPTLC8Q7qNBotqo86hW9GhppkFH1BQysVFPkmAKDQV5ybbnwVbc6rZM6nBvQfk",
  "key13": "3QzGuTmcaLorTJjVX9R86XXxsvPDcQS5T3TuWSxCroLnc2z6DxwfDLPVYoTaZDQgFNUNRH8XXCsy5dnoyntVf3pb",
  "key14": "22RnoWwpCoNnR3aZCGhmmsJxkRLiey2FLzH37cxvBLoWKcyTpssqznCdSeJHiZAJ4ExVnK31jZTaxVYEUZXphKcZ",
  "key15": "2wvRmMq7BNZBFREnmKisJHkoDN3XfJVTWxKwC2fsE4Az8wmWaBSQhUA3kz6m41CSzT2fAwhb2LbYcsP86ULe9zBB",
  "key16": "RmjEtAwUPdiMoHkswCmQthyMb4GwT6cuViDAEJyNGZACo33f8RqqHL9nF2HyWFxACKAFSiHKxJ7S1Ptn8STqWGr",
  "key17": "5vbr2NrQaNV1pL7cXhrF9tBUZ6UbahTNcLCLAYWF95DzvrtQAoh4uE4zEiMsTEVXN7bZPbUFYEaEuHEvyNjdFaNT",
  "key18": "XnSo1YPCus2iWat4L4mRP2GQgrPPyuRaYDWYwuqC7w6iK4MPmtm7DqPNPgLa3mp2N8bUhD4pCqNXDQzK5YdiHJC",
  "key19": "3vbH2sCuqv6iywpZPHWiSHsWeVVFtnUdLZbzKNTDQj55pNPgxVviXyKdqod92KsXHcbGLvs9Zg5zMGxFCbSQUP7L",
  "key20": "5oNYLQ1exQJdqxXtHdU7UBeMmhmrdRnvzokwL9gkRA5t8HbgnV54vLQrbkQYhxoPx46xaEqc8ynpTryonB1L8Zry",
  "key21": "2wkNWPCVqNpJSZS4YmSWPbhdyy9tSh19hAiktvf2a7s6a8P1y578d8jgPWVwXxkgtPkCKPDP2x3eFzxun39iqWof",
  "key22": "1pvE1NfYe8KV5wo76qYakEFZTgsDQLot1htFbmpdPbkWKjN2YTfP3bsf2eFU2y64oCLjHPyq7Yw5qa6LLfch5o",
  "key23": "5bTJbEhNrYniYW8d61K8z7w85TzEhv4QRVESGJiZ41N1PJy5TCTRzz8udsxjt5CZfy6364m4dET9hv1ZLJL1bMQo",
  "key24": "3E1Rs5D2HnCRXKgKnFcLsXRbVHzhw3ZgJtGKRkkzqk8Tvf9wLboS52Rd5uTJvKCmfGqVLF8fz4p6g8JKtyLZEViy",
  "key25": "3gvDtqUe9MKevtxWihVFpmxMXKTRst6DoVQu3im5LaHWxA7xr17QpE81oTLqX4RosUFNiNSkwqkqCoG7WBwreHBT",
  "key26": "35m7yhXrguWEthE8jrginR65cuLuCfFQPjyd3N1a64jR7vxx2XhLAFAVRUVLecASs67JzG77haHLbmCGYexthY1Q",
  "key27": "3GnMcBnRLq8phpmc2vxCaMZ9Gapdq6GPeV1xaQFyX95Ms9GdY3MZb4mrTmWP64fwW84MmwS3sadpLLomTtwQpYiy",
  "key28": "4tZ31kGWW5twKRcUKDWUxu7tsCjgNnTix1YWQ45yqqUgFvLcuo6h7ofCVeecp41Th84k44Kjc5C7AqyLS8w6ns4V",
  "key29": "2dhNbGJA9toSb4hzrPfyHJzuVP57Swz8MoQLgZ1X3NUXmy3aNp61qebD6qh3t3wbkMawkp4tuzLdawyPG5LtgYpr",
  "key30": "4WA6V2cuwVDLXUHWB2sH4MKLTKFwuutoJYYwbNQwCySp3k7B5uxLtfeNG263XZtLJwZP9pGP1id4ZC6aPZvBpnHf",
  "key31": "5u885n6z9UWT1XvE7wWfWVh2ciZxf6GkT8utSvrr3zPpFRZYGvF5spdX4MLZqPGUzPACQCKCwnmdbqJvrj7Ee1t3",
  "key32": "zip2oZ9WAPAgDtikXhaJfiw3VTR36P1FPpKvWs8xmQeFnmeDcE6GdaaDCYLgbbNJ9ETyV4VPAG3Po1hW94XYt6n",
  "key33": "37jZJvDFPGYeLJFz2cGVpVv9k66cwGrx1SpmLjU59G6vYWaaSULn2JQ5guawhjXjCgqqTWyvJJ4yYgjLPzE8wsPN",
  "key34": "61YvSL1DGcsK1fM8cRHHyNVxMMqRu14YtQFoqTuye3WkgAZuQjLyj6BU8MPM5sRwmPBJ6DGmhhhLTycS1hAsJQED"
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
