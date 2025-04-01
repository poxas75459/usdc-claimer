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
    "2T8e1hLvpQGekTEsnun73pCUDKxqSPoaxWNXrVgBokPADT2xXGos6s8q6PJxsqJ1RK8H2aZZAr96M3Ljys5jDKgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4v6bpLP3hFwfhyrN9Z5KPpRiVdB7Lur19m7VuTkXRDLt7sroNcoeMv8HRgEYzBp5mbjfwPWytfWLfgc4JFmCTP",
  "key1": "3ykWSTmkfqoixRKCL9t2CuTrjnKk4JFw8v5HeUb3ek1V899e5Ct8a46ZwLc3ZFttAgr25cZ62dY2AUYU6ig7qeNM",
  "key2": "5bGBLr5MtKBeX6hFvgn798An73iSRjohXQG5yNZteuVphMw7698pFBh8gs2QhKSFjAXxu8qjdhiekYTGPA1txvWy",
  "key3": "8KWLzxvdgQmfmioMpsWrvRqLkBDCJDo7CxqTGYcuTjn4R3WGa7MpbyUHtnjExf2Y8WMBfFTUq7Seg1hs9KFSbi4",
  "key4": "73o6vrpsq4JF8eTLk4oQaCLLuegkuz9WDmvJaPD9s9YBsQLKnLYRUsfVioLBUqu5EATgGLmAzTzz3DjwzAYjH9r",
  "key5": "K9DJtfDDof6jzUYFFzNVsbZgvnjEca8QtUFCboFsn6NijGfwReeVrCsn41mkeMm8d1kZPoZ6MDwsxzoUPCYTR8V",
  "key6": "NyX6dqZoFTxLRN15AWYSq3PtwHAceSyZq6v5v6Fxh3FdpxdQ7Pn3HLr5ggFHsG5ggFNELZ5gBn3Q7ecfYdZDaZL",
  "key7": "dqYrc3XvvskDffMNmM7tm9keetVCo5nkcFXQ9tweKLEAzJM3RA2Y1J1yS4Q3dRe7bvAgyKaJuC93vdWveofWEeX",
  "key8": "66NEdS3Ldrkr36EADq95yjHrHdBtmz9BRg7HTZptsdHrSuY8R4uHPkdsqYHyB7Sz9Tm5KUhcQe9cbN1F7UrkCrH2",
  "key9": "57pBcSVBZzbtmLU1dQ9fcJTYG6oLFQQkC2Bxj1YRJWo7vJgagmbVDrCrRG2Zdv5nVb4ifQs97gk1sXRmztGFDZ4a",
  "key10": "5wdTFTYMRGSwyo22Z8HNsnSVTfvQwUVemC7vybotZuw4wZSxdqDwo6pPJN5BW6Tx1hVbf4rbBstb3P3PTFhjii5h",
  "key11": "3a3D89W6pHcQgfYKYFnm51TeZCoSLqTQvx33uk4dCdhgFCFhMuKqoFdhbEp1WNZzDd3cW3HyZKzFYgF5M16npiBm",
  "key12": "2uqwSvetHXdgxakaaLQfba9cwfkU1R5qcxDXhWk7Uwcqm1MKgokVg6evC32eDnsg6G5xNiT1Fpwvt26VxVE9KdtV",
  "key13": "2eKjVLmgvquVfkBUXgCzuUZybnp1H46A8zgRtDzgDYSFHDjKniD53bfjUsrSKDS9a7x8U33YtqEoEiGSTwvck9r",
  "key14": "3Uu7jn4hVvjc6DBaXhMuiKk3umwNNqMGSKj25ZFNczLBWEKBnboiQppnMsx3tzgbsAmEes5rBcEuprwWp3V5xnbt",
  "key15": "TYVfeTPpif467ECnr6Wf38yqMUiQUBxcwX7KYwPW24pABf3PpP1f5RW3YcQXHFCvhUHXMk5CuB3MLG7NVBaLHNG",
  "key16": "5RpzH2WTvLVdgaUxY4xeRo9i7456c8JfC9RohAvg3ge8d1uB3SH7L9jTsXDvCYEP3tyf2KtRBoB9mApvcq6VZJgN",
  "key17": "44sANFzSw7k8LBra93g1HPJHZSgEA6Nv71P3qMvYSpEE2fbKT6XR72gbWK9Ea2U54DUnWLEJftvTkSPzWj86odAQ",
  "key18": "2E7URFKFBa6Q8x7WvvAEDRpvhsVkbctfd27QcMxotQPBwtkgXajFinRFWmRZbJNBVwJzjwoaxWkRbVLhEAezNAzt",
  "key19": "x34D85y3tqrKWz4qicHijzyviAZGvPeNahyHsp4h2dpoVYtURAbn75B21NKJJyYaUjVgo2Y8qH5hybLVXHn6aH6",
  "key20": "54NiYLdzH86kVMNRYDa7Vp6yS8Ho4BaxR1Kyziqp7Aa9HLQUF7vRjLBwkMLMQyD51WUYfoQGQMHMJZqCBEsTL2SC",
  "key21": "4aXukQNDZ8s8aonrhKNXSKEz14FQzcZVWar8hRekzG2GJ7ME8Vn9UYPaZfZD3RKiUEc7f8P4uY5dk2pF5obE2SwA",
  "key22": "2uEYKHS5KnRaane5xYX2Fc7LRFaVyYXnCeHRd4Zkdr6tm4FzasirjJr6EddnKiT29wUtwNZ67QPLgEFuUo7VN3AR",
  "key23": "4bpQ8RsvSNucpvcCqo3YEpQap9WY3HBbnW5D2KW6XwcEmPBnUCJ5FWWjLbdTqaMdSKxaiYXKk8QQrM2oqdDdKoUj",
  "key24": "VgpEigJeQk8MWafDM33WMjKqcRijrkTK8TuhWBtY17Yz8nz7wMnjqbDVDKwEPbdCLz75e6XsPNdsigHiDEYANJw",
  "key25": "5U63tEbmF835j5E4UXDPh5Z8meiqiyjAe233zYU4K667LvTbi85skcGoCetLNhV7Sb1xE6zzbDQ8J1BeZriteYAt",
  "key26": "5RtksKPZoGXbS79URaWPGpZth1XKQKv3yb5nQd29Lzg4P7fpwRmBXjNzBUTk2UD7pmPVAavoF68p1nmtfcUz9pH",
  "key27": "mppkNE6mSRi4iQbAV8p2NpxCkk81urU6Ve86Msmzm5CssisAZzQ5Gw46HaHHNS1A9Q2mQBvtJ5cD2VxyEKYhVNR",
  "key28": "4vEHby5nrm973cbv5ZaEY9GU8mEZmnAPPTQ6QWnsP1mo9zqNenwAwjpYJWfUukB9zXVwqjPaFtQ1DoNoTA4bQ226",
  "key29": "5ExjFe1KK5YiYNQZ1a8469XpjxXu3XHMWged89ScSuTqSNiKQQjRxgCiqWq3qbMpcs7sSrN4aAXoG3kPuP8ow3zQ",
  "key30": "2APAERqRRCLrUyL7WNPB4C5L8ASGUatQNNipx3nCP29FkAh8R9Tqfx2hyovWcTSAkUB4GFDSbFVWwKYpDmzzudLm",
  "key31": "5KQQvhMs8K4VbCGrqaJNwBdDzJs5cZWxHzj8Fa9zsAX9Qb95jrqqbYRRdQrzGuzquSWSTsgUnANM8HEksT5RQYrP",
  "key32": "3vWJGqk8dvvYkgKH4wNwUiP4i6tdbz8puTQvBttqMZU3avUKkbHLGxdtr2V2KBPakZBcGNKzoq8C7tCBm3dkFnvu",
  "key33": "CpkZ2gXbLeYPxhn6GZ3BtBsYR8BjNjBCqeigBbc5TkYiHwAnwwFuLQGdeFWXnhV5m2Wh4teMJqnfi6PEyM1aUS4",
  "key34": "3qVdab3KGgKX9VGo7Lusqo1Jh6yMX1N7ceesE3Cn8pH8utCqKMSbWfDb1G9tGrVHzu91xuSceMZQkDfuHwLK7t3a",
  "key35": "5GdV4WBUkWVjWUYmHvCEqowunYBag98PJkCD3Zhhd327gTFFSQ41ye9L9qfdEtgqfcVjmXuYX4H86C6phGdrqHcK",
  "key36": "4qPhR691eax4K9B6HurqrPCo1vcXhAec4NqcCjZBNBYnL3PxKvZT3GJbfeZBSrqfxZ9ChdBaWBghBVByx27ruFfb",
  "key37": "2sMww1TEce14bzYZtBAJTokAKMxT626qNYg2XR3uLLFA8QpmyucFjtReebpWS3CFbePYMcr4kJXpCEQF8HkfYXbk",
  "key38": "5sAVFFEkMvWZPNvVXLsMcVWKnuXZMmXo28SD9KUQJ9j4ZoA2YZgfeUfao1D2qhKedi11wQ81wMTNpDDqXcCSujBQ",
  "key39": "LCL8MMVyd84hmFoqETMNCkLxWkx6L35fy5bkdnr1oX5zxyBUsKAribnQttq9egxJY81ozbp33KSzZLmJYk722gw",
  "key40": "4y2aorwGXZVU69fmjxNJJongeyv2KmaRaA5Dhu8c4i7CirEieQCz53xYARKC4TDn9iaS9UVXQhbRhmK6BCFjyvF6",
  "key41": "3yPCPimwQtnS4Rwcv97LCeoZUkJgMAkcj8sBGZMHhGGMZQBVS824Yzkagdf2RWkTGAyAXZS1ct5NrFuPaMn7S7kd",
  "key42": "5MzbFUHFwemtM5F487KVerRwpeT77Xx8QYdiM6ESfBxyxXQWAtVNY1qPUjiX2eF9eho1yS3JhXk3c2XpaASqQPb7",
  "key43": "5JeJX6SG32skLN9dhSN8u1C3UcP7gTFegzkQ9qNCMfcXRctfuQAYtU9HRqMKmJeBhqqaCqYXa1aCJy12kJMoyzmB",
  "key44": "4t9fxtLixjSKQFaJTgfa1WfK3zkfPMVcbAXgLUHP2ZeTMA1QhS6pwtNtaeMgJXjSCPCYco6ZJNqgDrarbaEM91TZ"
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
