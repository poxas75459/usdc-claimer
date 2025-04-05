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
    "JzgXuEKRaTpm8qBt9Q4txYGC5xq4ECSFdYrLCdH12Fqrb1YijrZEcmvc9etUFZtg51YxKg5tBHUNW69bWGSXFmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NzpkNRYXuZ8kDZVVUUUEvRxDuzqoFiuBddbPJDWua7eou3Wgo3hJVtTfPEyRKhr8tSdT6sVvnPmC21EsQdRZBL",
  "key1": "2DeEzS3SdeoTiCvGqu45dfzdd3Vd218yMQhdUsfHn1Bz4jt7zpUyNqmMDFZKYDfGk9pVzQUUgmtevpL39zAdPXfK",
  "key2": "xcfjydi57HVJtaJmHGVtLS8yr3Fm2sd86QMpmv6S2fpwVTHLoMmpeUMHgPLCZpUxC8pRVGoYb9tsuR3LHLBy64w",
  "key3": "2np139gj2Crki1XXg2n381vUCnLR19FDD4NFZvVm2jzbh8iinAaeDtg8EbiuFTRm9NRgTqfpq8RZzxSNgDwypQk4",
  "key4": "2qd4Q5N6exKtXzwpvVcUa12bofS6TQSWjRyvJ2CMK3iVDnDqeZ7sMNAtFW2eUuHfYCA1f63YD1bmJDBzDo7gvKk7",
  "key5": "2KpsEiQfF6k5G4y5wz3Ao95dvQ3uYoquzZBSej7oaEJ7RS1dQTTVvd1hYJj49wkJj1ZTaxakKqHJyC9BfTEUEnVC",
  "key6": "2xzDu1pEmXhcMu4HC17pofPZwQhvPdQSQKR1xBa4XkbprgZUMKLRrisSDETezQgafceM5pFAAhbr3SGACK9NAngY",
  "key7": "8KLGDeoJoC743KEeXLS5eKG8NEHerdZq6AnEvSErNsEtZ3K4tUKzW32qaaetVL5kL5KRRCHhkFDqbHwyocZy7yZ",
  "key8": "4DeU1HCgeKW8c6LJmithBkBfV4D9qBLy2jC816DLA9wGbDSqUDRLXQZRL1kNX7HF62TaKYyMztJtrVCKjYJF7nzT",
  "key9": "26zxKqpG99GE3JkEoFR9dYc4u1QFnEFoVRn21qFGN35hHfpntBnHPgZHk93sugTj1mnQC5KNen71jvdVxvbLKeGr",
  "key10": "3RxNophW7TuK5GdccWy2kXtuWZeDYxnZPaxDe4CKzW45RHQDmL4q2iCuZdcT7poYwQVgnq21ypK2gFVjFzEkYLF3",
  "key11": "3h7AE8ReFqjLCq5aSMQYYyAZ3y3yeEAQHdAq1L3YNHXyA77EroNzMhsUvqfoBqyRjPbGs3o9V8w7Ajp239caCWTx",
  "key12": "aqxbAc6cmtKRr8uQLCmdA3DBNN4nEDNPt5bLbJ3ueP6oNnYJFgfqcE9mYnFqmNSQdvfkbcAf8rbwLB7iAJ5cCYB",
  "key13": "39aRm6krgp67MnwEPHJhZjSbmkRdVaXAKbrASdjugt9ZWVWR3sEjTBgERHWNFfxFsn981QPYwpjzHxuykAoykVhY",
  "key14": "5kvjp2LM3SwqCq7iuxp9wffCkYppo6yZZpFEXZAaFvTBUFrm1RWkesGZEdkC8hQCBCqvGiupuS5rZaiYHMdFHcxv",
  "key15": "3PVZwojYMrWSi2j7K2UMnasnjki8Hn3UxTe2vu9RmBPWHFaLqhY9Ksi1QiqDUEAWvdaLT4w2Row6teNYgyCYVnUv",
  "key16": "5sTU1xMAdJRWvBg9Jq71rWQVkXbsJjxu99UZB61cJrZEJ6sERftR9ac6MfPEfUcXxauiicCAyjFEp4h2u277FzRQ",
  "key17": "xdKPHPG2teYMQNJDJwkV8ypv8u47ZQdq1M9op4yZX4seG8QNRukutLnWGfjQuVRP4UiEpgSwYdSVeXgvWBWxpdM",
  "key18": "3c6N4Wm9DXnFCN7LLfX2KAfBsyKbbCJAVCVBK6r5EQwhNow2Fy1zTMg2NeRR5wc3748b5feWASLymVnsixQfEj1F",
  "key19": "3Dx7thCKGy6RfJy7MWmahBVRjaNYBjw3Xrc1nBP3r2RPc9vMqusFLksiiA724XW917TfA1hpZ1pdU4Q2MDpceNxb",
  "key20": "5Voj1Rj2MgsXTUaLwhHoVhCsGsL3QziYYtcjhHtj7g2sQRNTPQyGX6jj4SCRgQLPXUbP6hdUGYsx8T8S1AFMkXBJ",
  "key21": "B8obYTikiDbZvDSG5vFQmRR9e9SY44wRGAjhc2jwwbMQ6WkHjSk7u9NXLbemL4UCvsfbT1HnQtMAiMyeMcJsWQn",
  "key22": "4ZHtreJbAkRQ6rNjM2WGyToALqtnWYCQQtV5BxRgL4xgrTWVQXfifJ7VVBdc9CqPR14qu7t4AwXaNdXYxLotQH1B",
  "key23": "4w8LjTeYRgT5BYwg97jWEhAj5WMab5ZJs5SYk6MPg585ziJQ6waJhSRFJuwvB7BXgVSNzshJRUBvhdRJUdwhgbSa",
  "key24": "3ze5sSZXF1hKAtm3ag7PTNgV3tUdaXALZJhUH2G4tLbjtZJjErc6HU1tQAFr25NrD3r8daT7DxVkWtnE3FkTMssz",
  "key25": "w4gmvxUNjEaCQu1RwcHZGgYoQGBzbasiJEP139MA8DQe1f3MjM4M542okpgibtEs9quaUTHfDAU7QKZEKvzYy6A",
  "key26": "2SYA86JeQ7XwUjyFNeohuGV8Jbq88Mtr8JPkytY4z3YbNNssRQsusXwFYmnVPzjo2cSiNMr2i7syWuwcbYN6pVUF",
  "key27": "8tm1UfMdyfSffXLYurFzmNjWjNreaPLvCVNuXEX1iJ39SzRjS3Z4Qw1Zi3feWHAn3mVewtYC1eGvpvkgAv6KWpn",
  "key28": "3Vq24hYMa8ygMV1Dy8LrcHYw7s38CD3KQRt26GM1LxK3vNGA8tT4W5qt7Pb3A1W5rDn1AJV6dzBeBxW8Nf7FYAxe",
  "key29": "632z9uGmvrSMxrNufpXMg16r91VPF8qyCTk7x9ojFYZgQwm1d62DEGSAfgkf57NV7WAZVZ8yHKNFhLX25MyNoQib",
  "key30": "5AR6Pd1usTiBe4CFkcSLn7Ce4uXiLR4EiZpUjtRaz2QViiVASNE8hbZziLcK26rjmhS5Ebpn7LDAdiWj1jHsK4pR",
  "key31": "F6DMVqJZugf97g8jzYG6Y4TzEMrJVkhJiVJT9yXxy5La2ZhPkbeaTdjeS8HDKszku7Zsva26iUFHd6CpeLQfTao",
  "key32": "5eUxo3Aj331NkxKLarc5XiZTHCaaH3UpvfhJHTKyrQc6pQGSa4YSyVeWuKLFfLJpeq51LtaPLf5JJLyjF4v4h1hq",
  "key33": "2rorWgfn45EvUdF9rmUimgFQYBuktqVGhk3bBYxnxH3HV1eWmztZANfLmRHRXSvEdxGktgSGGWppiuEM5H7k3g4w",
  "key34": "3p242NxxGc8vg1NZz7GwV6wMwGWpCA5LaVTdup4FSaFoxNCsKzhivqsHxoM1GjQydw88iPe6rpwJFv86i4dyNkSN",
  "key35": "215xxdXeTW4PAgrb3rPkaDsoD4NKfhPta7D8XokyjLRBN2kcMXUy6fNa4CVJniqkC38nvSRfqXdDB738QpmBs9iB",
  "key36": "252p36rcn7XXg4Dr8aLDY67oLis8TS1A23iZRFf2PdtbNDrkXWwV7BqJk8bx6kt38GVAKwLAfBAHCRvBH9ib3hY1",
  "key37": "2XyYyUdjosThSUpPK79VVMpy9A6F57TetB4kHpNjGvpw6BhJxM796pWkHx5Xw1ioHf9bt4cxMNwGZMbFnstaZS7V",
  "key38": "3xEJ8y6F47rakr9vq6P6PgoHwM5nTJxRERSkvDmuyfEAmpX8dHNnpTEbmkxLidrTKemHRFgoVqCHfL7U5FhQZDTn",
  "key39": "2h8stXeHju3oz1NffYwNYJDPpeSQmQHwbvcSH51vYFrFCdqgPEY1BdWGd2UQG4aANXoefDmxvnGTeP8UvM9sJzLU",
  "key40": "26j4jhMzJuyCehNRk4SNUCWyBKt6dpSvyN7TTVkDJE31yodAXTTmMBmFzTUE1jq3abiRmy7V8Sr4XN1F7hhXxAmF",
  "key41": "4J3uh8mkT4QdXKUxW7RCkEtFYxHFQ9PRgVf9FFY7LCNcymjuh5N7cLU8omCtHjWtLwJoiY78qvcYfFzBgMEjqNeR",
  "key42": "5dLUs4QUhMgsHgmM5hUHWU3wt5qQfDS863EjaD9Qtac9hxAHGSwXnJqP1w5MzgbAn7RbSbrUm8fxyo9LZ6Bffff2",
  "key43": "2Htr5eE7vTBYqXa8Bjh9FpdozwsWEjqEZVM55sGGAwdCHKnHhfvXuvskEwVWWWW6XxERdcE71eAn7LGSoffPzRdY",
  "key44": "4WnQ1h547EqimW6QLr8ytA6k7n3kwPp6o6g7rSEm3RxVQUTEERuAwSwh9WpH1XiGt29H4iKr9t6CNwoBTg7yhs5i",
  "key45": "mtnPNnWHNvYzykeTfbJev3g5QkoajCS2neUKAjEkLMqCFrr1aP2frox6XTj825G4w9TPJ6YrNKBAYgn8zdQZdAQ",
  "key46": "3aXGeqH87Z2kodB7RqcinkvfvbSsA2rRzQjFGMLQDRxTEvFdT2X5dyGhyt4wan89FGtkcpxVPwE8Tb4uE5d7oTZ",
  "key47": "5vnscWGugjNFx6vybhueqzgWgRTMR7kFeRrmcqgqqVtoHaKEQthcEYAcTEE8q2iVxyPoaQUyaMfpSFyRucsRyXow",
  "key48": "25Yji7BkmyyATg7nsUsRRufP2WLF9X7CZTHavi3sdoSqqzthPKVrJHh6q87iThEjX6mEVLkVcTGxuyH8rXnT2sZf"
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
