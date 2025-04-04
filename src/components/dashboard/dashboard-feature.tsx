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
    "4QArETY6rUMNwUyYeAhdbNCwQB4o4YmikYV9Re935vqAdiaDS7sd1qATxMjyJPqbsKWmmXvfRW1nA6ZfuYui4hga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RshiAeRB9RdHerH3WhgvhnDM8V762bcdiiV4e5Y3KvM6HitQvc3PqMU43bbCcN94dVhTLtPkoieaCXeC5SgbTrq",
  "key1": "544sFgH92eN6K4HQrScY8QpxWDtJFc6wS73YzkHxW1S5JuWbUUGiCaSzKtAKiWBzJaPwekdQSbH845GbCQRKuebV",
  "key2": "5vmWPx7QgC4YU7TPvRQuQiydHdUcqj2gK9SxBpTHimjrV5hNyuFqAqWZEqzeQWJCU3sgw9Gc3aQA5EfV8WQ4A9uL",
  "key3": "36e54vCghkYhxm2tJvXQ4JLqV29Ej3nLsvGCH8TyxJM3RCkXC2d99m9WCGriBW7wsj7XEq8AtcCfUpKs2LZem3KX",
  "key4": "571t3EPixEq7sCFpGfLxJ6YVUEBemyTpdybi3ZvmDNDj5PT7LNyE3SRrEkqR1fbLn47x9LtftyUd3qSEv6G1dQa1",
  "key5": "2Cu1Dwdrrjb8pGNvKMVpzrwRfjS7fvPumbgefmvEMp6KpE27PWhmN96TMAnmPm6mHKZKwqAZ156dsHi62BiRPtt5",
  "key6": "3B7tjtsmUERWH4HF3KpfjDZAqb5AJLUUd49iriyVydsjEXF8ZQ5BQSSgn4nS46z9GQzYkDJBneSZzC284nfjKxKJ",
  "key7": "5xTdNGpyQT4n9FWH39RLBdcamusCcukFkEoEx5BKoaiiLWusPoK3VmKaSajgD4pwAktBivNwQRq5tdKnYXkLX5x2",
  "key8": "4nYES8KPTzw8Gvi4aZ7reqEBsKkFTMarMFuXKxvkgtPP4jZYfdGFAtJ6vXLkU2eeVA6hxGNMZ7Ci1twFroE8Rsbh",
  "key9": "m1eA1gLnzwgSX4kA2c7mVk8fy7WtwH6dPYybJ5z5qVV98JdrYTrMgy1zePLH5CLSge6B4aqRjhMyUzkuxEzeyJj",
  "key10": "2hxXWepYxkEv4TAB9sMEvcQkdyysEC8ShXztreBzqqARaSQyipnhUkBw2HnMpoB3weFa7WmoaBqeU6GrrHBGzd6J",
  "key11": "5epUrsCYKaYKoCixMzwyz18pcJeGyM81grJouPAPcFdc1mg7MYzSHWeZeysBAARCSEYdne6knKdSVPGQ2U1yqBVS",
  "key12": "3KMU6RMmVCxdxojt1qmn223KXCsEv8tSahjkduuA8vt3JieCBqjQCukzod55T9QtvHNWUC327NWMqjeQv16aMma1",
  "key13": "2ZR3rHW2PaoJWe46tLYAhfgidV1s62SuLP8Tqs36VPAwFa8YknDfDpRdwRUm7hpqmSjoAs5peamqxBSSS31XhBWt",
  "key14": "5Pkvn9xubz8rCERFHXg7CEZBFrtcgxYbcxBQjdPeanHfzb3ipPuuMaQuETgRmc7arpFmtzyzBwVXqk22TpAypfAk",
  "key15": "2QF9uTJ34P6kWnscSaCKQFMmLWjfwGuB9XWB5oQ4HjLrTnAL2uz122rKXasxFG4JEWXXVCBLrbdDiuSHHjG3SaVm",
  "key16": "34tj5ebZHkuhvkZ3x4Vr3ex72SNoSbxTZANfqpNf5iZ4zBNiP68VGR9M8f44UTsBHnuLbFGfrAeVnong7Rzu3S5",
  "key17": "5LkSFvDeyF7X5r6qaZVQdw9TZdKnJ52N17JAHCy33Y6byAh7x8X6DqNbq2cYK9pSFe9mUrQkPkdyoSJo3PNC5DAF",
  "key18": "sDNPi5REP9PxcTLXvKWyMSmx8Eq3tYWxgM45fRXeT7GRDk9RAK2UJao2MEPdzonCuuctue3bJj6XzF4L1PAdVG1",
  "key19": "enBadgb4swb61YBuE9am67niBiKvwhCqQQktDPehjiuA3YLkiGb6rejjPqmBCo6TzC6WZnBvKcPRUkd1FSzzFYu",
  "key20": "26LLF6LbFBU6pzCBvXntdiysdQ3Wg1tRYipDvhFapNBg3BDbJqtqD6ZdzJSUtrHqQ7gTiBRwbupFAkxStXuyaupa",
  "key21": "3AnWdXtsu99qyUFYK2nM3v22yxxntDcwFUJ9PqpwGrMPBJ8i1A7mXyHLvcPsqNRnXSQvF1vfWJjYTJ5a8fAsr49D",
  "key22": "2MWhQAG1e4LTTajLXNhoZbJG6iWvxZLrnzJrFGK8gnR2LNByuCJBP3251wSBBtgNcENYdCsgCZMfBeA55F99JkbR",
  "key23": "4PaPyURsneDGmfbxVSbU1CytYPU87CsmhFstafjE4RBzpS8arrfU2geb5YQhexJJrmbmWHfqELku9MgoyNFAPVu2",
  "key24": "3fjQJZCckTL6FK2EMhELBN6nudyHEuFJtRLEyYZU41gRDUjECPVdcJjR2MQSCeqN9Uj6KXM6ciuc1cxa2gv1AHgp",
  "key25": "5pXYxocVb9xuNXZUTTng98QiCg3kJVLJRjBtXA9GDVdNc9cdnHKEnQGuHvMgb6LY4RdoTrSJHcMQep3gLfCmUqgK",
  "key26": "HsmcSSJLStviJQjoEefFZLWcQnZDnngSPnmMGzVz5Ps1nNw2Sk6m8yGPW7F6DCoH5hqZNSkcQeVb7muYtk4Uyp2",
  "key27": "2iDLJFjzCALLw6LBvQNfbyoWpH5ELULJ9NuZRNvZw72ny5eoeMJY9gqEqpQWQL5C3HVwWXTGXS1u3okAKSzZ23Je",
  "key28": "3XZduMKZneUVg6Z4GiDiuHpc253nzoSMdhCEPLnzKkAHfhewYRc8cn9efd8eP7NY8e8WXRzMw9Xb93krj3pDvpVF",
  "key29": "35oDwunMniGd6Xpx2PrPh9sZF96K5Jda9h5YEN5coHYSnscMnNRpHDGEzUpiCpeKDrXdFdPWxtQYMSjzacmGzsYh",
  "key30": "3bd4kPvW7YP5fcrYP8UBoTfbV9rwpKKfqHaeHBw8wrpJAU3CobLwYw1aUWzFVMaYTvXrGgpewwco8Chir1vPhSD5",
  "key31": "55fMQG5ujHxka3m7wXqBLLX9AfogEZ3Fc6iiF1aPXby8vmWBW8r7XzPAZKvyJycXxYSgtTochZ78M2kr81MaQPvB",
  "key32": "RncMiJY9uFkj7MKkxndxoPnd7G7Lu2xxdzvvfcCjhrMaiQsoR4UhmmP8c8rFQ8ykPxwkSv7wrrPq5xQvfN7bJQ4",
  "key33": "2rPRHUS4mc8pZPtRZ1vzRX6qvkVgaRynJVb68A2djAid2mRjreVR3Q9Ht74oPQVPjfJn9Ckb5HbKhWTR3DhMxKMc",
  "key34": "KFT7biJuChErYxMfTbJZUj9NkJpzFGjoqnCjfKtW5HM6UzjRWtKqBFuLa6kLi9x4V6PZWuQ6tCSeNQsuXMw6pnZ",
  "key35": "3zsLux5c1xi1nGJoKA7XhJwub8h63Ycu81KgZaGPXnBvSeehZLi2Dvxdmfgn8QbePr17ftJEWBvi6Zqd1iFGL1Fn",
  "key36": "4ii1vZb9f6DZg3RuukU419fcx4ccuyT7dKxacadf2dCVwErqBniXUM5tofLv4JJ3fkK7DLmVDRWXqVcjACDMXwie",
  "key37": "5ZNo8EXzHYDX3FCryrDgZodVEbD25idXV3FwVH5zLkVEY597ky9cj5a7C7hrTbasXRcaA9bP3t3wmniXy5o8nV1i"
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
