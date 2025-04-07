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
    "52zwMGkkvNZj6Ec8jKckyJ2VmvBuo2pcaAyvvV4e2VpTgAQ31h8bEjFnJzjEEYQR1DcNZSP4gfqQPGq1iPn3uPEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jFWZJ9i9UaTG3959q2Rtnze2d2dum4SrGTvzZ4zKxJVcV8knjhJyqHLz97hUHyLHrPFtmPZAFKwfY5Pfpq6sWTU",
  "key1": "66wa3Puenszb2VKCWaDRjsk2yXWQfSkWfeHU3mwvp1zK5S7ddjWidjUfiymPqzMFxdtG5Ho5ta5SUN3Y6RPUKrQE",
  "key2": "3J4gxzHZRDV3umUpuZeERWA4FYGStgGFi1eDSmyG3shTDuSmtkqNeV87zSu3ufBotMRYqfKugxtPXvc44BDgesQX",
  "key3": "3tUJ3DXNqwh645y9m6bQXFr9tSiLdJQ974KXaDbaT4wo4ibSesEzSwT8756paJLb4QHh79N3RtUnZJ2ggy8nNd52",
  "key4": "4JGUMX1T1H1NKAYAEjHMq8HzpW9xLoTWDguX5NGoqMabFxppeVSPfubpPdrkssNQeZjSovY38QWoLnNyoMPYmozT",
  "key5": "4tVaaCj9qX94nVAGoUVuEpstvKKwP8uHeW7CzJxXggqPGUqrxoFBbGsRmwBQSQUJuu9NQM5dq3Q5dERv4LzaXNTX",
  "key6": "2xGrBPWbQmTM3yVkfXDksbugegA1Jej1xbxBky5F6UtZtzN4TcPTFzGqTHWHyGPyvSJB2qYp37XMqFQ4W4RKbhdZ",
  "key7": "ejadymSz9sXatQZBufvsxAd5wLQw7SK83WsTm3V64EsQnosW7qpHvu5ucazJksbQgY4wyA2JCUmZYSXJJobbv18",
  "key8": "39gZsuszv8gAhVWfcudSmgK9kdefdRwHsFfybsiKdqx5vpbSPAqznUbcVEiad2Kmx2skiDEXmCpAhfFuSXuSaZwE",
  "key9": "47gRsJwj7azdbzdoJjuZSrvfHBVJZboxN3VbqHUWgeytTaHWiioNpPV7UHsrb63mrhfJMv67HYCfuQZZrPdsWEgU",
  "key10": "4rHcEvrTVgaNgQEcZiKVd4BygkfAj1n9NBZEQAHoF9HmBcmF6eLmXApNh8cGDju5DKzogdQsaZCA657MVdK2JoUW",
  "key11": "3hjNTQ1eSoZvsXjWPeDHuo68e2YAyMwtRxfukkspfaeyZwj6sFoLPWFxKrmvPN15JAGM1xMFSJeWqpLiJGWW4LCT",
  "key12": "4Rj9iVUAtgkRSEYwTqA2jbFw1Ca514g9Djn7M9XdHWxS9aZeQfJqMRzVi3fEoJuF59hDHmx3kZ9p3NsP3GTnJMPq",
  "key13": "5P6ssq1zbWeUb38NRhf1RmubgwdaWBEArb6Cpu5qu6EJk75WLeBH2oF8DhBW9AzaMEKA6eECvhnAavUVDRcLiow9",
  "key14": "YMvgdBqdCdNSs5AQ7HNGdj1wbuJg9zdu1GGCHXSBRnE4z3CWyRfT5tyUmx6oRRraKqD5Tx7d8kz4wsyrJJSvmCc",
  "key15": "2YLexc1Dnu9jBZB5WgTMLuLsBXQg7kDSSpKzcXPDJbWgwZhP6FnaYSgA11kzJ4vW3BLwK5MzvTeHmEm7pqmDoyVB",
  "key16": "28FLuhyiWoEhVPD5nkUdf2MNSv8Zpk6tBHr5Pr7DK8VgRDXfCXwnKReVionkn92Jn8pdDgCCeEjeUtexo8vhVL5R",
  "key17": "sVVM4nGLBPSP47yAW5XovK3GbuzWPs8vuaR87dUFMEkhfzhYmVAkWQ2P6rvEGDQGnoDqydaQ1rsxsnC1RjEdLNz",
  "key18": "4HoYMEo32akRGhiBESS8i6KRtxSFvnyJHxk5GdaiKf43CPoSYNS51rDrpxhtrqiMXRZskQ2DEK8UZksXgfG5RZnx",
  "key19": "3RMwf41NEMwGnjqa11HieZPUwi2VDAgaSshxbeDS1UkjCAdL9JtrDPZRpbF3sofH7z8RxARxEbd8iSnqCaBjdnFC",
  "key20": "4ouqUhfALd7eZGUtVsZvwWV76dc72DbjwHHEVNy9Gp42EctEPpwXnSoRn2no9Q6W9N1QTZU2Mvvb52Aabny96Cpe",
  "key21": "4ZRfzQcpvn5b8NnNfvf158wvgymZGyFbcEyQgrXNZTXy6Kf8MD2CQtj6on9eQqoiNk8UKS4SwjVgqBaNTEoMMgUP",
  "key22": "5XXXBrphthQDGMKDcFEVyHRwtq73MpABPhWtqDVb7VY3JQsWUY2iUzPmkPwzfuUsvMBsGBzz3HtttoLhKvCkyhdC",
  "key23": "YSDZXgBjBYDJe7zLQKio3dkmbzGpkx5tTivUyT3Pk4tL9icp8KsM9QQYgYyqkta2iJshBcE5zXGxuBpMSW7X4y5",
  "key24": "5VyeWf5ZCx3NNr8ayKMnSX7WQ3LqwhiACKUN6xjtHVXVJAVdYhSD3Ucni23FmteDvsumkyeqAJ5nwkJQT7Bd4WUA",
  "key25": "puBNdJEkuyrrcwnmRfJrftLfMwR5y2fKikaSVbnV61Pdzus3iGe2wpJstMHwMkprNFj3cVmDku6MCnwaCKaYjDb",
  "key26": "5gQvfVPCDoW7rwjXjaeWHahqA5BhzRmRVz4BTKkGRjuYpHq79D4PGHGDGdUgCJSQajJW3NhVa4oj69z7yfJnuUdV",
  "key27": "2nvFsEFi2SbwoBWc3ZKjChzP6SipayCLxhEQB8udUWe2FQxB6ipqJ8hjE4o99MHcrKwHHmM3hgkxiR4A97C45oc9",
  "key28": "LnuMQYSxLPVY5auDcPzHTmHPQavb9jhagwfKSMZw5kKPSveDcMnuDFogSFJ3PwX9FKJPgEFsrSgLj4CfZi7hYFP"
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
