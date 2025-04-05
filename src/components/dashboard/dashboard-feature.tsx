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
    "42H5Svzhca9WzZmGfQdp9MoLSxbEskwWWQ8ytbMm2FKBE8dSrTfft14rFqx8x6QEhpsCRRY3NC5R5zAGtHbabb9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egdGSbSUUYu8NiMxB4bzPtDFwgF7qvVhmu7JMq38ibjffi3CiqArXUZErRbvBatZdtAVQ8YADueVQFjB239hqQq",
  "key1": "4NxbRzHSDLZYwwM1XNCNvdz6EPRKo5aiCz6aqN8FF7ocxic7gMaNCgvMYoZycaPcwB1yr6TaD1z74UMFpcxiT3iG",
  "key2": "5qjUAJJKA48EbQ23THfFDe1SDcyM9KUnDEtbnTdXoWvPvCf1WpGXwN4j4UHfQExd4hyGsJ2yJEaa3WuChoBA4jiM",
  "key3": "52geru3PWjRC9CKM7AV4Zu19hdPzMvHbwY1b2edZJVdgm7BUq4tZ37pNPy9sU2AzCDMRAWMZNhoBa7EDmAJacdhc",
  "key4": "xM1hzmP72zjjrW75HTDUrefuiuLcaimBn4bQ6hxxHqxg6crxY6j6LEr5Dy5WZEFdbHtJd8HExqgtjQstAMo1Vor",
  "key5": "x2J2iVWMYEn4yMeUcUV3vTMZZsSr7kLuXj3hVwFE3vW3Mt5Q9uPvfCfc9fKHdYia2VT5s647VdUPc2Qb7rke4Br",
  "key6": "5zmTXR6nCDDiApmJ54PJXse4MyTw7qtttGvarenAjA2AoCNStwmpgyynvBiCVZ11ySJBLwFCLkbv3uuBdSYEdNyx",
  "key7": "4dpeY1HatmpmRYGycbkzPNM3oucxgFDGAbk8nWNgHu6gAENMxJ2TVRZqrUNRa1kcgnLbaG1mK3Vsxwk2SgFB2pkj",
  "key8": "662cBKwm5a1hjWiNWgNk6hieHXRpQYGqptx1XthESuGqGCkhioQKG2FKiVKGK9q1gLj9PtjHK4wSHj2smqTg5C6C",
  "key9": "3Cc5QFQsrbBpM155oFBBfP9RZgWnqJVV3UZHFRoj6cZwGAXwoLXS4DVMUgsx6R7jqLUqWT5m8Wb7ZZ8mhfEudznd",
  "key10": "5CB6YojRT2kfuJY9dCYGPzaQV93VnZsZz7EBbt3SKdBEmzARcYD1CKWrffaQitjGeaDWVM8cUPB4ZeLFyFrdG2iS",
  "key11": "5p56BYjLFR57UqHyPrdhT4juJgSqc66PjrZVCA4K1U6MUrJA4f2CwZyvSVEZDQsuVpY865dRkRFHjgS2hSs6c42k",
  "key12": "31dgYVkuVrZjhGsJ7hxzUDCYv9rvoHc7r8CSigbpRLCKgi69oPA9sFc1dgHaqLFz6Zpg4ubFW1cabtiQATXmFLF8",
  "key13": "4nURh8ByssAVkQNNVci1Kdivxc93oDgnKKZvbFzRhEvnMSSDhoihfH1yRWbeWS3VfAHx3JM43pRsW8VqPuUYpTa5",
  "key14": "3UkspHCenfn5GTvYKid1XfGBDDs2kDPn38ishYfbRxnfWaMjn97YhuXMU8RcqAFxobnupWjabAFyX4hw5hH7P6a9",
  "key15": "5Wo7xDiDgckXQfkbfA1kNdR1HVXZkW1QMFrk4eYaqriz3Xy8ormE8yvEDJtjptnESip8G9i2PEUq2comxDV4c91E",
  "key16": "5bCWV2N2Fqrnbf6nQE5ezDGtFASN85X8TLMAMNYFU3DZZwkQ9Z1AXF1aD8zc2v8kLgo7STR2RZc3UPtYRXBqSina",
  "key17": "5VQFH2vG2Uhtscz5yZPGrEjzeiFPTBWHxn1MUsCZ3WbfjcLfQjGZRd88WJ8TGkZEbBAw18TXpo1SSUYpGUTi7gGx",
  "key18": "3iAx5BveXkffK7UbExyvDbEaW8onBCg4cL3FhPNXZ6Vec4Y6uLGwMpEE8V6g789gRZcVkdGd7CgTtMNNRwztqJQ7",
  "key19": "2Cm7r4Hxgzb8NL83KdzoueRbC1RMoWig6NZsxBCYAma1e3gqxANiVvPi5FzwnC123XS4njzpAxCKPqBXJL6KNtHL",
  "key20": "2m46gqAPqmYJWtXdS8JhbdQaJBkCR4ANKSpvd8DtMyu3ebmFpdMkb1P6JHKjXQE5UDbCfbvysvH9A8atfzWXWnKh",
  "key21": "45WTnmqfuWL13QBriieFGYGS8qWKJ6NE9LYfUfM928m4pkTwXvpeZyWH8zpukA5uZvTswn2dXniS739rqKc74KN5",
  "key22": "iHsxWzCsZJT4nsPTExuaWNTxkP4RQmhWTQRe4s6763TVLDwoXaKw4kGmD3x1FwSs6p5znWmcDJevsfx7KsttNRq",
  "key23": "2cVkZ6hZtvuB7cPR8oHQXhEYnmwa7GwqCL9RjSH7bSt8Yz6v6ZdsDj8irsMdtre2GRyG6VzHGWpu67CWTqyeob98",
  "key24": "27uReDXabUryytQbpVaqqaLu2mFgeX2jQdS1D8dCcbfTwnd7cPbXoHjx3KDy2DRUept1FKcuiT2bma2XkNa8GzHp",
  "key25": "3DVL878LepgiJDenxv7KS9qLG3eKWzTQFRjLP1eEvWz8bCXADpcQZkrB2J6vgHw1oxZGQSkChwETgGU7vRxKshHd",
  "key26": "2jmttzuwGA7BBjN298Y4Tr2JLREDpg6utBpxQXbrdXDGMyB235awJKxSvqKU5SAWb9vwDDXpbeskPRttSk8t11Zt",
  "key27": "5wABLQgLaTWK1ttetVoVoWQxE5pwTkxsLp9MXWbSFPqSCH7mmU3NGqEXsGzBFB2zcuaJvFytQXLFAKuzcVScRkLp",
  "key28": "642hgaGtCoff5uHfs178FLhGYvXBUmz6oHjF4k6ckoDPMADyogxuWZuxCT91rxwrRfY1GkeCtN3HrfSAcUo41JkN",
  "key29": "5XANBiFoHAXmkHqUK3MaWUhZ7559XutMPisXuQsVxGX26V8f3hX24HsG8WuHhv5941WUaSxdGeYpZ7d1N2PPoWxB",
  "key30": "gYvbzYmKHfjMcVamx1iTahGS16ygSmzkeevej89YFq9HEGw8JYNR3xuJRQ7wyFtmn3tkqPMPuhcBgZKt8iWa34J",
  "key31": "456Nc747pLWeheLjVxA3yrMNTHXhk5S7gvmgszLmAL47rhc18Tzbnv6n4gUcA4zRcj1BWxkQfYgvsdc8ew5ZR6Dr",
  "key32": "fJNWM5TECR5hmt4SHsPggrwvQGhXjvvsYSC9Z5wZiZ4YBLmdijpEKAndf1ju9GMii16Js1t9F1EFDpQ8z84x5h6",
  "key33": "5qrdJyUzUBp16LYSYyB6Q18ZmjsePFw55WFcsigp9Brn3UqNRvCHVe9DLuXc3FPEE7b1yoXDajVG18s7kvZwe2FF",
  "key34": "5iKGwvzAWPeGZu1pgoNMDdo5VrMqvZPk8Sb4e1fFRJg9t2noegSmNF13xGU7g7oAoPK2JJ1DoCrBRqGd4Q9P6e79",
  "key35": "ouVbFW7BHaBhc2wzYFWs1MM2go3u2nvPistuLtXTH7FEYDSz1u1Rf3TtMTVZatJq6S81JzMJ2SDiVzWtDYfsyhX",
  "key36": "3EnmJK8vBsHfYod23oKaUazpcAJNMS9qfS3pzyGtvuatAVjXgGCK2v2uDA5PJ9EuCoR5ohDQDs3w2TEBd4raJcAW",
  "key37": "2R6viC2RfVjh5PpXFtwpDrJfsHRBCuZhfkoPh2KsQmgHYFjZDzYehuTjKaBiNftgi3WCHMC3yy8JS3VxA8nrGH8o",
  "key38": "4PxosGG7oz6nZqwzhgrhy3BYhsaxd7U1Ssrn6VhXetSUkT1zX1jzVQVsDoLVBGaJrMrAPx1QTdB5W5prUpMUGtzn",
  "key39": "4Tzr3RMjSL2gepXnMZz4STkL5sdUfLKobSfb9JVzk9hrvAV2YzyWqeevR3yWBb3iWvrmsoS47R7Mgry1GFt19JUU",
  "key40": "LPNWdLopY1FdRSJ45hj3FnxVAZ2wLpocDzdJ1ARXzrAXXWX9h6NUow6Zmoty2AjtbTqQ4naX5P1onxkUD79MuuJ",
  "key41": "5XiM4SvfWoNSNvHb2whPTsgQi1njvopW6piyfM2okQuruuXg6ue5GeQd9QyV5muWhzjjnkqKaFzoP9VsnMRUzuSK",
  "key42": "25q1dnVGZa687Pzm5beRXzLWEGNU9JmJLoY2yqG99bmG8A7KMapC9NgZ9LTFhZRMFctA6rw3ggrnoZwQv55gDMrB",
  "key43": "2Wi6BAb8p9emzaHftGKvJfecf5Mxwi6kfYZXLETQF49L4jKz2HTN6x92WnbRUEw7thoX5GGf4ZXnzvjgGBXmcXqK",
  "key44": "3uwxGCNGsfk7fMTW51vcFJLMFu1ykEm2vjPbczo4gYmdWDoddHNtom34qXBaa8FvZXvv1NYYrqdpWSdZDXo4cZGn",
  "key45": "51Rk3AM6NEsoZERb8PrT6zmxNd4NQdVzhzL7nL5wTwC45EKKUJt6bzEuPMcdeDmSJdsmori3gRbgYHFt9sirzDXw",
  "key46": "bxJxQfogcq6Te9nunDH4pWD5vBbqFYwmsy7DsiCK5pLboxQPFjzazLn1s7MAZWSZfSwfVui7DJhwM49ZcEzfzj8",
  "key47": "4sqzSRwdoxHeL4GfmHFgt8ujfAUio65XrMDhAcey7tyRV4KK1bhWTj9GF87KBVJAV7tGNenrsmzLayW4PrZUWBFB",
  "key48": "MSHJSYCcf9cy2W5KuZTNShpqAQVLNVh83NiDGTYwyGhkYEBXq6TDAuityBqPmQRytWc78fAyt4nx9uR6uzMtP6F"
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
