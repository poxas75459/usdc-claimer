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
    "2Hc1C6Fr9uNAzdrfZ2z3FzkvPkNXbS4a7frpo8piEQWA92uetJfznJrMKhYXDwAabnH54K3zXD4aVvY3rA2H25eY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5skdyB3kcnSPYvEhyBr3BmiUbJpcpJ7A9ZBBrQgh4fPEfKLMbsHQJJu5P9XfjJ59HAo4CE7B4PGUn6uBL8QjTDwb",
  "key1": "3VZeQW6qvbh1sE5kkXAAK7mexXWJgnFyDM2ToHvmg2rKebdtakJA8dgwfESG1wKYrsCG99GMtaLkkTbdEQkkAaqL",
  "key2": "AhRhvAhJTuMES4nu7iE1CbrRdXzPcPbyPz1o8SehTA9VBJex4nEUCsQoNbHnVxM9DudPbX8WTLMHq68RQeLvzPy",
  "key3": "5jt4e1rFfADQyuaVZ8t69EJ75yiNnjWWq4gKGPvPdi54YLz5Ds5zViiW88dVuJhazD8kxPC4Re6cQ6Vuwe8tG1DG",
  "key4": "54k1TnyhtS3furRSTXJTAbJX2MoEeMjykYtuLQYdtqBkhqoGCEsu2phJiBBJwbqCe8NMWkXDp2FojyercZEgdfj2",
  "key5": "2hpx724oMowcu5K9xY7EHAL4C962kkktsN18UvW4qiTo3Tcw4iKaX5hTazmLCjQVT2txPwBqyrMqBruQ6PussocZ",
  "key6": "4iT7jN7xMBQkmLKqE6KKUhJSey6Zr8YcWDtenqNLRc7eP4ZcdT9D3YsCi4DzTH2AqFS7bzUxYw92mGJTY4UsgnbT",
  "key7": "NvVK9LyLHgp6m9vgbMCx4vz2hrq9knwsyaCfrHBTeLCvbd8PiBaMtvmxe92YCJ8fs74EsmaCtaDVGZN4CaBp417",
  "key8": "3hEHqEbgzQnL2jKYadUUbjGHjPSq91MehXb4gzQRWS4K14AxJQL4GStU8Midc8DMsfKoeyBVsNceGG6Gftn7gEys",
  "key9": "2Rjhgg17JgEFRD5rjXhdi6JKeU85B8T2XvvCofb4MQJkTeQ5Qw5ZzsviBTCBwHBERwE4U3EUY9kZC2XHGgNqbbGc",
  "key10": "5ufYjK8LqMd8FEMrMXJreR2p6RkZF1dw5ABrqKwvrmguzJzLK2XtmkLxSikqv54vc1efwRha1LQzkxdtAkLJxw5x",
  "key11": "2CSpnGHnFEFeK1qWY4u3BkXNqEvR7TNriQK2bPWiS8BbwHCyeq4qhFptzQRTtrieinK2dsit6j7pfYnNCi4pcqfQ",
  "key12": "5JhKu7mwTryHE897q4aDttDAEJe5VRYaeHQn9S1TngwRpSeaaGXudb4Xz5j6V4RpZidUxnZLmNTe2Ps2tG9nVuXw",
  "key13": "64DCe1xZ3rGeZqcCKNVzbKZdMj1vbE9WX5yuMhTGCtW6aBxGCedGbXJEQqcnpzbQ42scftjCxHEATzQ9x4PisbrG",
  "key14": "5tnh8f3G13kv3z17DYQzqGyAzKAgFp5DciFRyX9g6bu71ZoRtAyABZtgihTyJwShKhTjQ42Y4F8cCNtsYnbZJKYg",
  "key15": "3GDxUp1tZJTkc3A5FsvvZXDBNHJhZ5XHCsTGkVXMiyVums2q7vXwP6zJdzHymtwQtWtGP6EBPXRvgWryKxr942Fi",
  "key16": "4vQnktpPtB5FPso6hSUsPDtWmd19uRW3TMGzik7bm7bcFYUgZVBqwt9da47rHd1L3hQnx2JTxSRKdsTYD2fnVFyN",
  "key17": "5JZivavzosaJiWvTYVGfHXJTuRi7CqPkV33LWT4WMyiK1DdrfbkAXe7QCsa7PUphdjt4JKHi9FAeTax8kwHCrK9L",
  "key18": "3ocG81qSuZCQqodQXQmxAT9yjD9tgf18kfPMdrhvatrMXovF5GSGqFX6jaqzd5S3tF44NXse5DdNh93sP4xoyCPC",
  "key19": "45bhS35zhwMC7wob4qCyZrkeL4xx6JVaNoiQeSN3ziVDczXByBwagWyoFvSKUpgmQVYN5GDyrX68VtvPmahsyWvp",
  "key20": "3wCAbHxrozHGA5UF3v6VXLsSqzUZ4sTjGoeishNDH7CoV7XcHYjiNUhJfC8fAdATTNEUxTnk5RdTqK3gZ3vyBGiT",
  "key21": "3bVRfF8Uor5cdxgQFTDcirWUC2QMfiSz3DcFCV4dcwXdFxW7Un2QBqSVcexAroE987yV228spXN3ePUUYPQFJYZj",
  "key22": "MBk5bQ992nYoDeEkYc2WPLdWMobKAa8dEWJprg97R55Cqf1xndYeNUGJy4qqAcQdx6SXGbtndHEp4M6bK4i9PRc",
  "key23": "3hdJbDP6fApRrqzDPJyPtnKKr8ckMJaVagm7mZff8aVUAxtv1gfisduJsNi4r1rHc4HauGAjEZ18JzjVpFqAHN58",
  "key24": "3WES7y4VoA1KBNPqVJm7MCMejL4JpR8dizTmtctpTF9RuyiwTxr7238RkQ2jwSu5Z4dBTnkP3wVD4E1pvmL8cRZS",
  "key25": "4s4LQVeQ38FhxNii6XwJ3wbztR7eKshxPjs81MmWLpxeHsvx4AE4Xxv1F52NtfiVy7rSwCSHssZiimrFfPUquTva",
  "key26": "2ez5MWvqHdKpCAe7UckYEsydA8Lpbqzkb69UjssoHdckSYoFrwqvacBaCK8khF9Amkh1XX8duc3MNsK5kdsjd7n9",
  "key27": "5okPyzD1GPnP16SDDsoyYzueWnzVdE5KLdAjtn77WYyWVZahn8Ev1Juga1BZFRXDHzMYpC7oiKpE751VUKxmB753",
  "key28": "NYS7LV34dvYsAcNNTbBQYDZotsCiZAk7jABRwDEsmgZGK1HF7GKLcMdPBzBqpHPGEEDyhbriA1ZDEEW7qgdQPG3",
  "key29": "3zdZqr5tDqWj6AuQaKaFCmCmmxGRqwQFwGU5oexRPYiaK9vYQj3mizsZwQXve6xJ91KV2SHgD9aKDpyXrTYA5xXU"
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
