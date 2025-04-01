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
    "5U3RNcimQbpmHjkvTNdHwpQmg4EuBRo3mxNqYhqiMM3BHnSiaBKbwQ8MFEXJ4D8Fii1qdUgYoyv54sBfsMHyWRRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aieyk2yK9WAxGzP6uUpiMkZaRN1WqegDLxATt4LtgiGteTnrLQuxGSCfEQSXURKeLAu8UFp7eDygR6XKz3FcUKN",
  "key1": "67AJ7r9me3kWaqm7MyxnDpDHDcz4UBun4kDAos6mCNou5LTdLzn2Rq5oU5UeoceauoqtVmdhizmxGr6Ty5BzCmkP",
  "key2": "5M8SMVHUaLgDtHwmuFqv3B7qHptbBQMT7Vu86Tjf2Ks5GS4DGgb3hpGeh6KJ6Xwn3gBHC1mLCbGZdoghWUQvvpSE",
  "key3": "5k9id2P19Uqk5WzvRM6iWNF8jMf6Wp7NLWbybvmX9mk3HDkPHGCk9jqduVJdFSrDPXiijj6tcSXnjnZpWVBeavcS",
  "key4": "i7VU4tdkhwvpVdMiQ44QrA1rpxby6KnKJxcjL5zrZV51Cax2gtCkEqqBgeHXryGrPFhHoFeJNQkfUCyVUfzFojG",
  "key5": "G7YP2refQfHXs5P8rGZmF7nkXzaLRpMQyoQRoQDXTcLm2TzmgKPDJ8Q9jmf5t8XGxCntfmFdLU39sh1Fxa747ud",
  "key6": "4WKQHhJswzR34xmEgCoh9rKmWYYA78e5QJZGdsu5MQpYRAtdxAKnSjSpTNChrBj5pR2APWuC32QedP7xV2Ngf4FS",
  "key7": "3CbnyjRiCBRW6c6btUPp9JgiKZFGAw5mN4pNVnh7dwMNbsNXX8bw1QjGVjJEfcqwFW17fjcTwXcf3Pxqx52HSrNQ",
  "key8": "3w1eMxffGerxu2tDvoPfTX6WtYzdVTpzavD4DgWv2KtmD7hnFuhNLZckm3uQmxvqubDQnNe8NqfPptFGH6jFWs7h",
  "key9": "4ZsBQeKhkeLFXoixEzCQMaMYTQC8D6kELpryTRB1KzGfSViyNaQRUX5wF4KDmm4vcckh5kREDm33CAc7BngmhRtA",
  "key10": "2vCG8r6eoi8DADSidxUTx99KiWXZadS4CpFLmA3JWNs5jYiA1P3GVRjyRDnnJCfCxKp6mqXvePHekyRGawhpxuWj",
  "key11": "4dXH7vbyewvLurX2wU2XSrjky9knKjZkwgooQxRKsroKeNiwyQHxApoN4N19FUfqvYurKfwYio6dqRRMb1NvQMB5",
  "key12": "4SyeHoFVfMrw3hSdgQ1pFrLnMSszhTrQBFyZduZghudETScbMG7gsx69fEaBZGDA1ygoi8QVrr5dPq95ERTUhrkv",
  "key13": "dmfm5DV6rAkyJyNtWaF1oS9HnNfYnZS5qAcPPQX68fvAupcEQjrw21YuidnmNbCsgNzbWHz5aosbHsM3XxeGox9",
  "key14": "2F68cjKMHf2CZWKMJrzhFpwuH4GUahG1zGuYsGiW66RZqjjnCsnQJH52jiXrxaSLajfG9o66Eunq3sbdHcQWncP",
  "key15": "5mmtWG3UwcXfukXs5k6PhXGaq3ZDEDs4RAaMtt7jj5mBWFga9yjE4ax9nn41RXxTvVVFogH5HwS52HpeZ7RD6Xjb",
  "key16": "3p99figT8wp6gaBJYUgseedF8VgZWbmWKkNdsWifpZdSgErc349P3g8nwbeMcwxQ1NDf2g2hCtiCvhRsNQRz2wT5",
  "key17": "njo62JMg2JMTFyv3sp9mhAYXUVX59N7HNoGM9sEpW2F9FXKBWmD932SPbnxCFUNSbJiLAMSPVvXSf4yGoxpwboc",
  "key18": "3KtZQGEQc79VaSZQD96NcDNcS1Yb8GhurN3aVnAHWq4rhtFn1GaXbC4eqvS6Jzf7B4qAJ9dc5VU1RCBQFJgqtqxj",
  "key19": "4JnzoZPHYJ9pE2n9wRv5GsbnBnyLuPVPYkprWtz2Yxyf7zAFAyXxutBoqPGVHpq2fiPsorq1AZSBm8Vp4vPFnMb",
  "key20": "3k1RftAymnLkfjkXNbqtJuKF4QdmozPDV9MBcZDexKyZMt6Azw528GKrYYuDZyiDEAGbPMDDkwSuvg6p1ULJuvoi",
  "key21": "xjB2VWF9qWyVtQjqQFMiiku7jeN9Xg6xfVzTfJyN3dzcz2aoKxQcTUeNG2Ci2Jyvtcp3YoZ8it2rKgo2xQ5p8ct",
  "key22": "5xXFbL7eGPbJrQbPjMUAhAvco7T6aTfZ7tj5jA4z9RHKBAnfuGPLgrjfu4hfmp74oGLf2NKD1eQLo5j5ns2DtJJ3",
  "key23": "3Qudx62UnDtX6hyaqgKEucMUhNmN4oz616HThn5u3EhfVLVjWQRuu9Hfwd8inhcWeZ5D4VTfeELaBUF8p2nAh5cq",
  "key24": "3okP1p38S2hdozFqEnrVYer1wHTtKSL4YvN2hQ6V39mxMduGTVz7pGYrnsQhi39A6x1uRFerEK9tAp42oD9Caddc",
  "key25": "8yTgvGmuFPt14E35uEgg2WCq4VC7zRcfWfpdaVS7LM8sNGgu3upVCTguHhbmnLkPvU97J14Y5JgVpWNS8XUoUG1",
  "key26": "3xSC3nGPtgLTuNpUJZ5PpBGPvTD7zZ6XVEVadYWqMri4GB5D3oiiwhiLymAeQjG5GxAGzG98gyeb9jdtB4xV9D1y",
  "key27": "2f5Qq6vLbFcpaSjwT9BNZJMT6tiXeA1GM9pzKjtqZYp4jYYXb9J4qbQ7SDSm9makqPoKirZEcvd5EbGsQjPd45vX",
  "key28": "bJpxXtbbAga2UApNy7bis8b8NwLrYb6gAJeyBKKV5aeZhHNr9utfW48YNEgSxWDnUejgXQA94e6RboVSsrnCadH",
  "key29": "52PKW9ULVTn3pZzAcMoPckWnVTY9CHZhMuKeqwguQWvhw2dnQ8Ukmzy3REWWysmR7xGH78m4jxNLkZrErqUc5FAc",
  "key30": "vLrs7RzwVXA8Kncjkou9u9bbJP5h4S8iYBNiCmkgpiXkhSw9dzs9yt7K2vKGeNLy9Rs3oecsBxzctJnexvtEFrw",
  "key31": "3nAFuvgq3JrjuT5aWMoYZVf5FKX4jMaZjCguWJEC59titbeyBTge89B3ALauDAH329oQXXxJ8uLbNF3TvnfXTTVL",
  "key32": "2duTsx3VvX5Ruoy8VjuqMrMfR24QSBErWbYJndkYw1UXXsTPPLjzrxm71kZwet6GQVsiyDSRwZ5mvjBpcuWiQx4L",
  "key33": "4EzX55nZbRHHFu7afxYvpUc2Mm7ZWFFLX4BvJji2ffLNqRtxBtA9F8mvEEkxxL667AuMxVnB4v9bg52Ep6qoUup",
  "key34": "5QCvoNTo9iJq3T1V2i6FGYbnr3Nv91pza4sUVoa5RgRF3NieJJTfygqpcr1PxefFbXEcriYZPeSgW6xm2PVU4Mbj",
  "key35": "3vBVF9idLvadgZKpZdJJ31GSBhVSHnRjCbJ73JhYCrJ6X4F6cTKSgVyfnoNfXvHoQRoCAiwxm69EHJNS2DW5qvHh",
  "key36": "27F6EGn9KPeMseZ8NUkhMpVpA2U8Df7o9C59pbaAAre1jGjxcpMGR5TBR8M2zAjXNY8GY9AsRB48kxqNFMaQ1Ana",
  "key37": "DqfuZxYw7W92BA71v5aXqS3ykLnE5wa1Q9sn5C4kfgxmrUmSGrAN3kPBy4mQjM7KpL3X5nb6SWf4jpuFgv7ZP1C",
  "key38": "5cC7MYbmsXXr7ytGt2kKyhgNQ6A8i6eQPFc9zQxY68Jx75fzfq4HvCtogBiBviwh7uAxebwjj93tqxatcQWHEn2y",
  "key39": "3dbwotrYEYrrEjrsNk1fNxGafQCzBX5ww7oCJpoHfLvfXxKr3EiecrFHgY9DCqcJgZyNAwNiQMVzb7aWwiA5v4gt",
  "key40": "2BDaDczZt7BPG148F5n3Fc1aKfDR6m52F3xyYW1cTvWRBmaXm1BBn8bkC1mv4uCvxHaTgNwUy7KV8Ci8VE4TVaHk",
  "key41": "3G1PkudPoUWXMj4DBQZf1airzSDqpJzFQdD9Xq7E63tNURe7sqxMEVWDqJQ5f4Xe94V8vsCzbaVFZaTZPkxqbFoM"
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
