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
    "3vK65RqQrtWNtKoCvsJJeWBR7N8WyaiLyYkPmeyGnh36DNVZ5ZBChM8Lvo5XFCDLSYxcoazNtvKMt6R2aXzuanXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rF6CmFDKk5xgNuHui37xpASThfbKnaXp7zFHCJ936cj5sYVZr6u7tnQFVkM7UffuGsGZQ9GwYdgCdtrd5Mtvh4U",
  "key1": "2jJ9mFxa4rwCgfAahK7kMiSQeC981NeaBsQnotdQQbXqfptYE24zKC5PPVH7z883gFx2vxLKS79DR7GdvShxPzND",
  "key2": "3eHP8ZytbTVuefGgUdjrwGh3gThXQywHAmmc35sETUCVzEiay4Kyy9yUGsZWADtfN5y12RHmyxEy6YAqwGKaWDpD",
  "key3": "2MxJAcarGvQUaBGfFXiC7g4jNBb8e3TpoUrdywwqbevLA87S2ECV27xZXhKsBc91k4sr1GnEtb6BxBwHuhQ326b5",
  "key4": "2K3JZqYe7c5eRUVhpECd4QKfyDEu8ShS8VKcru9QxbPJuAbmSXSt7sgmR9keSDQSyufgYzCkBhCGsW2yBtKA7S7b",
  "key5": "5ZFDFRGyxUwRLVuhWDGbrd4CvrVDdVx5JeAYbwh4LP7MrfqgqPqLPF8wTCsRHXwoTwv7UDcQ5XbCaZ9ArogwbmGS",
  "key6": "4mDjnf69VtVfgJT7BX78S8v7fNLYBLuhqVwrugbWYW9pmoT2biCYHGJ8veg39Zkt2742jAY3jWaNmbYPGjE7dQBZ",
  "key7": "2jUKZnfuZVVgrzen44JhneT5M9dZz297XncUzM76EGD8bUtBUfDq3qJGy7ZeCmXgCV78nd1r8CdVEuHTcBXVpfQA",
  "key8": "KBVp8tjC6KPfWVtKoeyyghAhj6qLGDVei85cxKabsWDWHWDEHnWMmVjwvjxJQ4h5sTjCbrd2P4isAW8svDNWTWQ",
  "key9": "4nXLq7MFHv4FZkXk3hEbJ9ZcnPMxXTjsGbMEMG3rY6pRcqyvJ1uAE3ZBecJd8DFoYX1o7WTDCFoTauvqDBnXK1uf",
  "key10": "oPo6uGBEDav4LVMzRFimcuAVrSYp9GAMBqmrnyFtbwNXxrQyJYhUN3xYjKYhoR9AXgnjwVceUt6yuLPnckLHFa8",
  "key11": "U2BsKW8Fz2MsHoJPtUomj5uzroQHvtVNfpWZWRETRAxja9YynLCSpfQMyckJoQztQCNvVSqjPLwTZebmueV7bb7",
  "key12": "2DxLSrRZ4MAguyHDN18DFdMMrLPULv94V8PvkQsbSFiUWidqtPVt9M85Ao3pssjmRGWx86Np98nHSKrQrt1UjsH5",
  "key13": "5QcjVRTWEoWULDctZnt4PYbJUUeNCVaCZ8gy2yEn2hFZH28H8uTGnsLt1hkb4rL3azSRV6KMhrmg6HSEeLdLnMhe",
  "key14": "5fTh6pADLY7n21DHqfN9HJtrv453vYkd13KeubpQb2Ehfe7qRErM4vbjvcPjWeSnrCutcXNs9ynFHg2Cz5bDk7fp",
  "key15": "2jPq5PmGKijdpEV8syLWDpKj7iAQgwk7eazTmSfPGrxjhevswcoXwYVZU7QYgnzVQWge2ZAYFGTMeTUmXkWkbpmG",
  "key16": "2NLuG9sveqVsfAKwavhajAWxkk5MtAWnzNpN88b9mcPMNW2RdUFfCUZ1BEzDdMkhrMGAB92hSk77Fx77Tg3bVn4f",
  "key17": "3YTUWbzSXXX57CcKKFuvkWpbqFwGQTqqCq5Pp1XsoomFPBUqKPYW3P8xymjZFfFifP5a2yNU8a97KytPhYysV4Ks",
  "key18": "pvozr9ry1JUrkMRPyH4yVW1VQG8gNUQ8bEaPxP1fRZARqxhF98BMQpMinqJECDqa7Kyt25p43rpVVGbGsbt2a7K",
  "key19": "3LtkaWShxa5kSnMPffXp3nqHvfcwFo2J5nW8kYbZ5SF3aKDa2hmX1aHsKBBgrdPvVFpeXYhnoqWxjcRb86HC7szC",
  "key20": "4D4syzAgx3AomxfUy73kFmkZTwtrB2Xn3UjRQP4b9i9znHsvs4paZ6sm1DkdtWPFrEtr6ie8YCrkc3eowX4MVxjY",
  "key21": "2PuRSAgb9eVK8b1mWJ8xGtXHNgxBc2MsWiFxGgVy3uPsf6s9QDfZfBFvxcQYSwSyuCxydBuVPKDCVxq8utuonfrk",
  "key22": "4xbuhtA1qCzAGCNFJoTBWQUfPgWgixCdQeDUZrPomvodLffmeSrgfWfvNACkrqBPQABzyPFwmkbJMQUMGJD3rMF6",
  "key23": "5NqniCr8Y92T8DfN3QzimZNFvLPZQTuUX7ZitQkbEQ34vZiPPyBTbh26FdsbeX4LEKRfzmVvcCQ4KuGHBUz8jpi2",
  "key24": "3MHydx8FNrgBSRie5d7662Fk975z4sAeby91ePYszD1r1XY4WkPTxgj73YTV5YBbECndVSpKqQf4Z4KSTWo1Fapb",
  "key25": "2ESBsytq1C9BUjcd946cYS6nGFhqLVs57bKeAnfipMn4kK2fSYfiAihqBygH1JM8xZVMzY9s92RyAND1AoQGKrBg",
  "key26": "oyr8A7j3vA93rSpJhzJDpZiDtJU4FoCQcQQ7QSdCxsw6UvjADJH3QKL2GezobkLRNmiE1kHPvg2gkWNykYcJ6kN",
  "key27": "kbtQAgHEyYkqh9Gzxhzhm8E3iQsuAdJK1kCHpwESUBhHYWHVEvK1EnXUNe26g5BGXS9pqMWiEcxoEf2gVQ1h3BE",
  "key28": "3AkQ2ZDkGpttZtCrBMjCjPcqJeDHJmc4wsZg5ERqW2CMNuSmjz3Ggf5irwBrGXWkAQVsotRCMq6oHEcfRtqh2qjE",
  "key29": "4ngZUpdCaBX55ELehkdeAsivKf4hSGmiqPrdbJDRLbyeuQ1gdzCEhtBWUbwQiYu96yePu2gt5RXHA5v5WSHave84",
  "key30": "3e4MkwN9KGRVcqc6wE4vK75Wo7QtBCKHTPXjuybD4FzRBW98CfifwbwdacCEoCnN4kzGcFrQihLX26onXNuZ39vW",
  "key31": "4Pa8oVneg2hvRandSdMXSArdUWnR36DpxtcZ5XcyZRCwW2LwPekXRU9ytbuLus7jGSyaRw21eMb7Lai125pa2U7P",
  "key32": "2jGygiUFV4FJEcTzHr1kYrR6ewkmSaAcaWEBHNCu8pLHHXoYgJNPrkmatSoA72doLVStGEAjBh3gapC3KeJtcP5b",
  "key33": "tuBZmYNgJv5u6f2twmwJo95qahXHnemHR33LWfg25eNs4yXDywf1igUdNttKoaWMk7k9z3fubBWMgBWs7487zRo",
  "key34": "kvE5fgkhahjhTG2uBhzDV6dTt59LENXxcudVNRY5VZd8T2DM2Gk9s4LVaCjKVwafPRTs1jR6Ev3uaMTyd2ACpTU"
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
